import{s as r,c as o,F as s,j as e,T as _,h as ee,r as d,u as xe,P as de,d as ze,f as Ee,a9 as Re}from"./index-a86e8971.js";import{A as E,u as R,b as P,ai as pe,aj as Pe,B as z,s as Ae,ak as X,al as Me,a as A,M as Le,I as he,c as U,v as ue,P as te,J as Ge,am as ye,an as De,e as Ne,d as Fe}from"./react-toastify.esm-a6c446c9.js";import{G as ge,L as se,B as ie,H as Ye,u as Oe,S as We,a as He,D as Ve,M as Ue,R as Qe,b as qe,c as Ke,d as Xe,N as fe,C as Je,e as me,f as we,g as Ze,h as et,i as je,j as tt,P as st,k as be,s as re,V as it,F as ot,E as nt,l as rt,m as at,n as ke,o as lt,p as ct,q as xt,r as dt,t as pt,v as ht,w as ut,x as yt,y as gt}from"./SoundIcon-d19b8eae.js";import{C as ft,S as mt}from"./ChevronUpIcon-80d33a33.js";import{f as V,o as ve,n as wt,X as jt,Y as bt,T as kt,D as vt,S as oe,q as Ce,P as Q}from"./generateCategoricalChart-cbb59bfc.js";import{T as W}from"./index-1f82fe1c.js";import{S as Ct}from"./Skeleton-a005283b.js";import{T as ae}from"./toastMessage-be351725.js";import{g as St,d as $t}from"./index.esm-0e15041a.js";import{T as _t,F as Tt}from"./Popover-6757eba1.js";import{I as Bt,S as It,O as zt}from"./Select-67651f2d.js";import{C as Et}from"./CheckIcon-c9d146f3.js";import{I as Rt}from"./InfoIcon-172362a7.js";import{C as ne}from"./ClipLoader-0c6875fc.js";import{P as Pt}from"./PlusIcon-2476200f.js";import{u as Z}from"./index-d3885f89.js";import{B as At}from"./index-d8e76964.js";import"./useSlotProps-0cc052d5.js";const Mt=({imageUrl:t,name:i})=>e.jsxs(s,{align:"center",direction:"row",children:[t&&e.jsx(Lt,{children:e.jsx(E,{rounded:!0,size:64,src:t||"",type:"image"})}),i&&e.jsx(Gt,{children:i})]}),Lt=r(s)`
  img {
    width: 64px;
    height: 64px
    border-radius: 50%;
    object-fit: cover;
  }
  margin-right: 16px;
`,Gt=r(s)`
  color: ${o.white};
  font-family: Barlow;
  font-size: 13px;
  font-style: normal;
  font-weight: 600;
  line-height: 17px;
`,Dt=({text:t,type:i,sourceLink:n})=>e.jsxs(s,{direction:"column",children:[e.jsx(s,{align:"center",direction:"row",children:e.jsx(W,{type:i})}),e.jsx($e,{"data-testid":"episode-description",children:t}),e.jsx(s,{align:"center",direction:"row",justify:"flex-start",children:n&&e.jsxs(Nt,{href:n,onClick:a=>a.stopPropagation(),target:"_blank",children:[e.jsx(ge,{}),e.jsx(Ft,{children:n})]})})]}),Nt=r.a`
  color: ${o.GRAY6};
  font-size: 16px;
  height: 16px;
  display: flex;
  gap: 5px;
  align-items: center;
`,Ft=r(_)`
  max-width: 150px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: ${o.GRAY6};
  font-family: Barlow;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
`,Yt=({title:t,imageUrl:i,name:n})=>e.jsxs(s,{align:"center",direction:"row",children:[e.jsx(Ot,{children:e.jsx(E,{rounded:!0,size:64,src:i||"",type:"person"})}),(t||n)&&e.jsx(Wt,{children:t||n})]}),Ot=r(s)`
  img {
    width: 64px;
    height: 64px
    border-radius: 50%;
    object-fit: cover;
  }
  margin-right: 16px;
`,Wt=r(s)`
  color: ${o.white};
  font-family: Barlow;
  font-size: 13px;
  font-style: normal;
  font-weight: 600;
  line-height: 17px;
`,Ht=({text:t,imageUrl:i,date:n,twitterHandle:a,name:c,verified:x})=>e.jsxs(s,{direction:"column",children:[e.jsxs(s,{align:"center",direction:"row",pr:16,children:[e.jsx(Vt,{children:e.jsx(E,{rounded:!0,size:27,src:i||"",type:"person"})}),e.jsxs(s,{children:[e.jsxs(Ut,{align:"center",direction:"row",children:[c,x&&e.jsx("div",{className:"verification",children:e.jsx("img",{alt:"verified",src:"verified_twitter.svg"})})]}),a&&e.jsxs(Qt,{children:["@",a]})]})]}),e.jsxs(s,{grow:1,shrink:1,children:[e.jsx(qt,{"data-testid":"episode-description",children:t}),e.jsx(s,{"data-testid":"date-text",direction:"row",justify:"flex-start",children:!!n&&e.jsx(q,{children:ee.unix(n).fromNow()})})]})]}),Vt=r(s)`
  img {
    width: 64px;
    height: 64px;
    border-radius: 50%;
    object-fit: cover;
  }
  margin-right: 16px;
`,Ut=r(s)`
  color: ${o.white};
  font-family: Barlow;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.2px;
  .verification {
    margin-left: 4px;
  }
`,Qt=r(s)`
  color: ${o.GRAY7};
  font-family: Barlow;
  font-size: 11px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.2px;
`,qt=r(s)`
  color: ${o.white};
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
`,Kt=r(s).attrs({direction:"column"})`
  padding: 24px;
  cursor: pointer;
  border-top: 1px solid #101317;
  background: ${o.BG1};

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
`,Se=({boostCount:t,date:i,episodeTitle:n,isSelectedView:a=!1,imageUrl:c,showTitle:x,type:l,text:g,name:y,profilePicture:p,sourceLink:f,verified:C=!1,twitterHandle:u,className:j="episode-wrapper",onClick:v})=>{const m=l==="show"?x:n,b=l==="show"?"":x,k=["tweet","person","guest","topic","document"],h=l==="youtube"?"video":"audio";return l?e.jsx(Kt,{className:j,onClick:v,children:k.includes(l)?e.jsxs(e.Fragment,{children:[l==="topic"&&e.jsxs(Xt,{children:[e.jsx(Ye,{}),e.jsx("p",{children:b})]}),["person","guest"].includes(l)&&e.jsx(Yt,{imageUrl:c,name:y||"",title:x||""}),["image"].includes(l)&&e.jsx(Mt,{imageUrl:f,name:y||""}),l==="tweet"&&e.jsx(Ht,{date:i,imageUrl:p,name:y||"",text:g||"",twitterHandle:u,verified:C}),l==="document"&&e.jsx(Dt,{sourceLink:f||"",text:g||"",type:l})]}):e.jsxs(s,{direction:"row",children:[!a&&e.jsx(s,{align:"center",pr:16,children:e.jsx(E,{size:64,src:c||`${h}_default.svg`,type:l||""})}),e.jsxs(s,{grow:1,shrink:1,children:[e.jsxs(s,{align:"center",direction:"row",justify:"space-between",children:[e.jsx(s,{align:"center",direction:"row",children:l&&e.jsx(W,{type:l})}),l==="youtube"&&f?e.jsx(Zt,{href:`${f}?open=system`,onClick:T=>T.stopPropagation(),children:e.jsx(se,{})}):null]}),e.jsx($e,{"data-testid":"episode-description",children:m}),e.jsxs(s,{align:"center",direction:"row",justify:"flex-start",children:[!!i&&e.jsx(q,{children:ee.unix(i).fromNow()}),!!b&&e.jsx(Jt,{children:b}),!a&&t>0&&e.jsx(s,{style:{marginLeft:"auto"},children:e.jsx(ie,{amt:t})})]})]})]})}):null},$e=r(s)`
  font-family: Barlow;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 17px;
  color: ${o.white};
  margin: 16px 0;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* Limit to two lines */
  -webkit-box-orient: vertical;
  overflow: hidden;
  white-space: normal;
  letter-spacing: 0.2px;
`,q=r(_)`
  overflow: hidden;
  color: ${o.GRAY6};
  text-overflow: ellipsis;
  font-family: Barlow;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  margin-right: 8px;
  flex-shrink: 0;
  letter-spacing: 0.2pt;
`,Xt=r.div`
  display: flex;
  flex-direction: row;

  svg {
    color: ${o.mainBottomIcons};
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
`,Jt=r(q)`
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
    background: ${o.GRAY6};

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
  color: ${o.GRAY6};
  font-size: 16px;
  height: 16px;
`,es=({isSearchResult:t})=>{const i=d.useRef(null),n=t?80:10,{setSelectedNode:a,setSelectedTimestamp:c}=R(k=>k),{currentSearch:x,setSidebarOpen:l,setRelevanceSelected:g}=P(k=>k),[y,p]=d.useState(0),f=pe(),u=y*n+n,j=f&&f.length>0?f.length-1>u:!1,v=Oe("sm","down"),m=d.useMemo(()=>{if(f){const k=[...f].sort((h,T)=>(T.date||0)-(h.date||0));return x&&k.sort((h,T)=>{const M=h.node_type==="topic"&&h.name.toLowerCase()===x.toLowerCase()?1:0;return(T.node_type==="topic"&&T.name.toLowerCase()===x.toLowerCase()?1:0)-M}),k.slice(0,u)}return[]},[f,u,x]),b=d.useCallback(k=>{Pe(k),c(k),g(!0),a(k),v&&l(!1)},[a,g,l,c,v]);return e.jsx(e.Fragment,{children:e.jsxs(We,{ref:i,id:"search-result-list",shrink:1,children:[(m??[]).map((k,h)=>{const{image_url:T,date:M,boost:I,type:Y,episode_title:O,show_title:D,node_type:w,text:$,source_link:N,link:F,name:G,profile_picture:S,verified:B=!1,twitter_handle:L}=k||{};return e.jsx(Se,{boostCount:I||0,date:M||0,episodeTitle:V(O),imageUrl:T||"",link:F,name:G||"",onClick:()=>{b(k)},profilePicture:S,showTitle:V(D),sourceLink:N,text:$||"",twitterHandle:L,type:w||Y,verified:B},h.toString())}),e.jsx(ss,{align:"center",background:"BG1",direction:"row",justify:"center",children:j&&e.jsx(z,{onClick:()=>{j&&p(y+1)},size:"medium",children:"Load More"})})]})})},ts=d.memo(es),ss=r(s)`
  flex: 0 0 86px;
`,is=({isSearchResult:t})=>{const{nodeCount:i,setNodeCount:n,setBudget:a}=xe(l=>l),{fetchData:c}=R(l=>l),x=async()=>{i<1||(await c(a,{skip_cache:"true"}),n("CLEAR"))};return e.jsxs(rs,{children:[!t&&e.jsxs("div",{className:"heading-container",children:[e.jsxs("div",{className:"heading",children:[e.jsx("span",{className:"heading__title",children:"Latest"}),e.jsx("span",{className:"heading__icon",children:e.jsx(He,{})})]}),i?e.jsx("div",{className:"button_container",children:e.jsx(os,{className:"button",onClick:x,startIcon:e.jsx(Ve,{}),children:`See Latest (${i})`})}):null]}),e.jsx(ts,{isSearchResult:t})]})},os=r(z)`
  && {
    width: 100%;
    margin-top: 1.2rem;
    font-weight: 500;
    .MuiButton-startIcon {
      color: ${o.GRAY6};
    }
  }
`,ns=d.memo(is),rs=r(s)`
  .heading-container {
    display: flex;
    flex-direction: column;
    padding: 16px 24px 16px 24px;
  }

  .heading {
    color: ${o.GRAY6};
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
      color: ${o.white};
      text-overflow: ellipsis;
      font-family: Barlow;
      font-size: 16px;
      font-style: normal;
      font-weight: 600;
      line-height: 11px;

      &:hover {
        background: rgba(0, 0, 0, 0.1);
        color: ${o.SECONDARY_BLUE};
      }

      &:active {
        background: rgba(0, 0, 0, 0.2);
        color: ${o.PRIMARY_BLUE};
      }
    }
  }
`,as=r(s).attrs({direction:"column"})`
  padding: 24px;
  cursor: pointer;
  border-top: 1px solid #101317;
  background: ${o.BG1};

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
`,H=r(Ct)`
  && {
    background: rgba(0, 0, 0, 0.15);
  }
`,ls=()=>e.jsx(e.Fragment,{children:Array(7).fill(null).map((t,i)=>e.jsx(as,{children:e.jsxs(s,{direction:"row",children:[e.jsx(s,{align:"center",pr:16,children:e.jsx(H,{animation:"wave",height:64,variant:"rectangular",width:64})}),e.jsxs(s,{grow:1,shrink:1,children:[e.jsx(H,{height:10,variant:"rectangular",width:56}),e.jsx(H,{className:"title",height:10,variant:"rectangular",width:262}),e.jsx(H,{height:10,variant:"rectangular",width:149})]})]})},i))});r(s)`
  font-family: Barlow;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: 17px;
  color: ${o.white};
  margin: 16px 0;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* Limit to two lines */
  -webkit-box-orient: vertical;
  overflow: hidden;
  white-space: normal;
`;const cs=r(_)`
  overflow: hidden;
  color: ${o.GRAY6};
  text-overflow: ellipsis;
  font-family: Barlow;
  font-size: 11px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  margin-right: 8px;
  flex-shrink: 0;
`;r(cs)`
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
    background: ${o.GRAY6};
  }
`;const xs=48,ds=8,ps={PaperProps:{style:{maxHeight:xs*4.5+ds,width:250}}},hs=["Beginner","Intermediate","Advanced","Expert"],us=()=>{const t=R(h=>h.data),[i,n]=d.useState(""),[a,c]=d.useState("Beginner"),x=P(h=>h.currentSearch),l=Ae(),[g]=xe(h=>[h.setBudget]),[y,p,f,C,u]=ve(h=>[h.askedQuestions,h.askedQuestionsAnswers,h.setAskedQuestion,h.setAskedQuestionAnswer,h.hasQuestionInProgress]),j=d.useCallback(h=>{C(h.answer),X(e.jsx(ae,{message:"Response is ready"}),{position:X.POSITION.BOTTOM_CENTER,type:"success"})},[C]);d.useEffect(()=>{l&&j&&l.on("askquestionhook",j)},[j,l]);const v=async()=>{i&&(f(i),n(""));try{const h=t==null?void 0:t.nodes.filter(I=>I.text),T=h==null?void 0:h.slice(0,5),M=(T!=null&&T.length?T.map(I=>I.text).join(" "):"").substring(0,2500).replace(/[?&=+/#]/g,I=>`\\${I}`);x&&(await ze.enable(),await Me({expertise_level:a,question_text:i,search_term:x,transcripts:M},g),await Ee(g),X(e.jsx(ae,{message:"We started preparing response for you"}),{type:"success"}))}catch(h){console.error(h)}},m=a&&i.trim()&&!u,b=h=>{c(h.target.value)},k=async h=>{if(u){h.preventDefault();return}h.keyCode===13&&h.shiftKey===!1&&m&&(h.preventDefault(),v())};return e.jsxs(ys,{children:[e.jsx(s,{children:e.jsx(s,{children:e.jsxs(Tt,{component:"div",children:[e.jsx(fs,{id:"select-label",size:"small",children:"Expertise level"}),e.jsx(ms,{id:"demo-multiple-name",input:e.jsx(zt,{label:"Expertise level"}),labelId:"select-label",MenuProps:ps,onChange:b,size:"small",value:a,children:hs.map(h=>e.jsx(Ue,{component:"li",value:h,children:h},h))})]})})}),e.jsx(bs,{children:y==null?void 0:y.map((h,T)=>e.jsxs(s,{className:"response",py:12,children:[e.jsx(_,{kind:"medium",children:h}),e.jsx(s,{py:12,children:(p==null?void 0:p[T])!==void 0?e.jsx(_,{color:"unreadMsgText",children:p[T]}):e.jsxs(s,{align:"center",py:12,children:[e.jsx(s,{align:"center",py:12,children:e.jsx(de,{color:o.white})}),e.jsx(s,{align:"center",py:12,children:e.jsx(_,{children:"Generating response"})})]})})]},h))}),e.jsxs(ws,{onKeyDown:k,py:12,tabIndex:-1,children:[e.jsx(gs,{disabled:u,onChange:h=>n(h.target.value),placeholder:"Enter your question",value:i}),e.jsx(js,{children:e.jsx(St,{color:m?o.white:o.gray300,size:"18"})})]})]})},ys=r.div`
  margin-top: 20px;
`,gs=r(_t)`
  background: ${o.inputBg1};
  max-width: 100%;
  color: ${o.secondaryText4};
  padding: 16px 8px;
  border: none;
  outline: none;
`,fs=r(Bt)`
  &.MuiFormLabel-root.MuiInputLabel-root {
    color: ${o.secondaryText4};
  }
`,ms=r(It)`
  .MuiInputBase-root {
    color: blue;
  }
  background: ${o.inputBg1};

  .MuiSvgIcon-root {
    color: ${o.white};
  }

  .MuiOutlinedInput-notchedOutline {
    border: none;
  }

  .MuiSelect-select {
    color: ${o.white};
  }
`,ws=r(s)`
  position: relative;
`,js=r(s)`
  position: absolute;
  bottom: 20px;
  right: 20px;
  transform: rotate(-45deg);
`,bs=r(s)`
  flex-shrink: 1;
  overflow: auto;

  .response {
    border-bottom: 1px solid ${o.divider2};
  }
`,le=({text:t})=>e.jsxs(s,{align:"center",justify:"center",py:12,children:[e.jsx(s,{align:"center",py:12,children:e.jsx(de,{color:o.white})}),e.jsx(s,{align:"center",py:12,children:e.jsx(_,{children:t})})]}),ks=()=>{const[t,i,n,a]=ve(x=>[x.teachMeAnswer,x.hasTeachingInProgress,x.instgraphAnswser,x.hasInstagraphInProgress]),c=!a&&!!(n!=null&&n.edges)&&!!(n!=null&&n.nodes);return e.jsxs(e.Fragment,{children:[c?e.jsx(Qe,{edges:n==null?void 0:n.edges,nodes:n==null?void 0:n.nodes}):e.jsx(le,{text:"Generating instagraph"}),i?e.jsx(le,{text:"Generating tutorial"}):e.jsxs(e.Fragment,{children:[e.jsx(vs,{children:e.jsx(_,{children:t})}),e.jsx(us,{})]})]})};r(z)``;const vs=r(s)`
  padding-left: 10px;
  padding-right: 10px;
`,Cs=({cx:t,cy:i})=>e.jsx(vt,{cx:t,cy:i,fill:o.blueTextAccent,r:2}),Ss=()=>{const t=A(),i=[...(t==null?void 0:t.data)||[]].sort((c,x)=>(c.year||0)-(x.year||0)),n=i.map(c=>c.year).filter(c=>c),a=i.map(c=>c.rate).filter(c=>c);return e.jsx($s,{direction:"column",px:24,py:16,children:e.jsx(qe,{height:"100%",width:"100%",children:e.jsxs(Ke,{margin:{bottom:20,left:20,right:20,top:20},children:[e.jsx(wt,{stroke:"#f5f5f5"}),e.jsx(jt,{dataKey:"year",domain:[Math.min(...n),Math.max(...n)],label:{fill:o.white,fontSize:"12px",offset:-10,position:"insideBottom",value:t.x_axis_name},name:"X",tick:{fill:o.white,fontSize:"8px"},type:"number"}),e.jsx(bt,{color:"#000",dataKey:"rate",domain:[Math.min(...a),Math.max(...a)],label:{angle:-90,fill:o.white,fontSize:"12px",offset:0,position:"insideLeft",value:t.y_axis_name},name:"Y",tick:{fill:o.white,fontSize:"8px"},type:"number"}),e.jsx(kt,{cursor:{strokeDasharray:"3 3"}}),e.jsx(Xe,{data:i,fill:o.blueTextAccent,line:!0,name:"A scatter",shape:e.jsx(Cs,{})})]})})})},$s=r(s)`
  width: 100%;
  height: 100%;
`;function K(t,i){if(!(i!=null&&i.trim()))return t;const n=new RegExp(`(${i})`,"gi"),a=t.split(n);return e.jsx(e.Fragment,{children:a.map((c,x)=>n.test(c)?e.jsx(_s,{children:c},x):c)})}const _s=r.span`
  background-color: rgba(0, 123, 255, 0.4);
  padding: 2;
  margin: 0;
  border-radius: 3px;
  color: inherit;
`,Ts=({stateless:t,node:i,searchTerm:n})=>e.jsxs(s,{grow:1,shrink:1,children:[e.jsx(Is,{children:t&&e.jsxs(Bs,{children:[e.jsx("div",{className:"icon",children:e.jsx(fe,{})}),e.jsx("div",{className:"title",children:"Description"})]})}),e.jsx(_,{children:i!=null&&i.description?K(i.description,n):"..."})]}),Bs=r(s).attrs({direction:"row",align:"center"})`
  .icon {
    font-size: 16px;
    color: ${o.GRAY3};
    margin-right: 7px;
  }

  .title {
    color: ${o.white};
    font-family: Barlow;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 1pt;
    text-transform: uppercase;
  }
`,Is=r(s).attrs({direction:"row",align:"center",justify:"space-between"})`
  margin-bottom: 18px;
`,zs=r.span`
  color: ${o.white};
  cursor: pointer;
  margin-left: 5px;
  &:hover {
    text-decoration: underline;
  }
`,Es=({stateless:t,node:i})=>{var v;const[n,a]=P(m=>[m.transcriptIsOpen,m.setTranscriptOpen]),[c,x]=d.useState(!1),[l,g]=d.useState(""),[y,p]=d.useState(!1);if(!t&&!n)return null;const f="https://knowledge-graph.sphinx.chat",C=async m=>{try{const b=await fetch(`${f}/node/text/${m}`);if(!b.ok)throw new Error("Network response was not ok");const k=await b.json();g(k.data.text),p(!0)}catch(b){console.error("Error fetching full transcript",b)}},u=()=>{y?p(!1):i!=null&&i.ref_id&&C(i.ref_id)},j=m=>{m!==void 0&&(navigator.clipboard.writeText(m),x(!0))};return e.jsxs(s,{grow:1,shrink:1,children:[e.jsxs(Ps,{children:[t&&e.jsxs(Rs,{children:[e.jsx("div",{className:"icon",children:e.jsx(fe,{})}),e.jsx("div",{className:"title",children:"Transcript"})]}),i!=null&&i.text?e.jsx(e.Fragment,{children:c?e.jsxs(Ls,{align:"center",direction:"row",justify:"flex-start",children:[e.jsx("div",{className:"icon",children:e.jsx(Et,{})}),e.jsx("div",{className:"text",children:"Copied"})]}):e.jsx(z,{endIcon:e.jsx(Je,{}),onPointerDown:()=>j(i==null?void 0:i.text),size:"small",variant:"outlined",children:"Copy"})}):e.jsx("div",{}),!t&&e.jsx(As,{onClick:()=>{a(!1)},children:e.jsx($t,{fontSize:35})})]}),e.jsxs(Ms,{children:[y?l:`${(v=i==null?void 0:i.text)==null?void 0:v.substring(0,100)}...`,e.jsx(zs,{onClick:u,children:y?"less":"more"})]})]})},Rs=r(s).attrs({direction:"row",align:"center"})`
  .icon {
    font-size: 16px;
    color: ${o.GRAY3};
    margin-right: 7px;
  }

  .title {
    color: ${o.white};
    font-family: Barlow;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 1pt;
    text-transform: uppercase;
  }
`,Ps=r(s).attrs({direction:"row",align:"center",justify:"space-between"})`
  margin-bottom: 18px;
`,As=r(s).attrs({})`
  color: ${o.mainBottomIcons};
  cursor: pointer;
  &:hover {
    color: ${o.lightBlue500};
  }
`,Ms=r(s)`
  color: ${o.white};
  text-overflow: ellipsis;
  whitespace: nowrap;
  font-family: Barlow;
  letter-spacing: 0.2pt;
  font-size: 15px;
  font-style: normal;
  font-weight: 300;
  line-height: 22px;
`,Ls=r(s)`
  color: ${o.SECONDARY_BLUE};
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
`,_e=({node:t})=>{const i=R(m=>m.selectedNode),n=P(m=>m.currentSearch),{link:a,image_url:c,date:x,boost:l,node_type:g,type:y,id:p,show_title:f,episode_title:C,ref_id:u}=t||i||{},[j,v]=d.useState(l||0);return i?e.jsx("div",{style:{overflow:"auto",flex:1,width:"100%"},children:e.jsxs(Gs,{children:[e.jsx(Ns,{boostCount:j||0,date:x||0,episodeTitle:V(C),imageUrl:c,isSelectedView:!0,link:a,onClick:()=>null,showTitle:f,type:g||y}),e.jsx(J,{}),e.jsxs(Ds,{children:[e.jsx(ie,{amt:j}),e.jsx(we,{content:i,count:j,refId:u,updateCount:v})]}),e.jsx(J,{}),e.jsx(ce,{children:e.jsx(Ts,{node:i,searchTerm:n,stateless:!0})}),e.jsx(J,{}),e.jsx(ce,{children:e.jsx(Es,{node:i,stateless:!0},p)})]})}):null},Gs=r(s)`
  flex: 1;
  min-height: 100%;
  flex-direction: column;
  border-bottom: 1px solid #101317;
  box-shadow: 0px 5px 6px rgba(0, 0, 0, 0.5);
  z-index: -1;
`,Ds=r(s)`
  flex-direction: row;
  justify-content: space-between;
  padding: 18px 18px 18px;
`,ce=r(s)`
  padding: 18px 18px 18px;
`,Ns=r(Se)`
  & {
    border-top: none;
    padding-bottom: 18px;
    font-size: 16px;
  }
`,J=r(me)`
  margin: auto 0px 2px 0px;
  opacity: 75%;
`,Fs=r(s)`
  flex-direction: column;
  border-bottom: 1px solid #101317;
  z-index: 0;
  background-color: rgba(0, 0, 0, 0.2);

  .episode-title {
    font-size: 20px;
    font-weight: 600;
    color: ${o.white};
  }

  .show {
    cursor: pointer;
    &__title {
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      color: ${o.white};
      margin-left: 8px;
    }
  }
`,Ys=({selectedNodeShow:t})=>{const[i,n]=R(x=>[x.selectedNode,x.setSelectedNode]),{type:a}=i||{},c=P(x=>x.currentSearch);return e.jsxs(Fs,{p:20,children:[e.jsx(s,{align:"flex-start",children:a&&e.jsx(W,{type:a})}),e.jsx(s,{direction:"row",mb:22,mt:22,children:e.jsx(s,{grow:1,shrink:1,children:e.jsx(_,{className:"episode-title",kind:"heading",children:K((i==null?void 0:i.episode_title)||"Unknown",c)})})}),t?e.jsxs(s,{className:"show",direction:"row",onClick:()=>n(t),children:[e.jsx(E,{size:16,src:(t==null?void 0:t.image_url)||"",type:"show"}),e.jsx(_,{className:"show__title",color:"mainBottomIcons",kind:"regular",children:t==null?void 0:t.show_title})]}):null]})},Os="Flow 1",Ws=0,Hs=12,Vs=15,Us={g:"LottieFiles Figma v45"},Qs=[{ty:4,nm:"Rectangle 4497",sr:1,st:0,op:60,ip:0,hd:!1,ddd:0,bm:0,hasMask:!1,ao:0,ks:{a:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,6],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,6],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,6],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,6],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,3],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,3],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[1.5,6],t:58},{s:[1.5,6],t:59}]},s:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[100,100],t:58},{s:[100,100],t:59}]},sk:{a:0,k:0},p:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[13.5,6],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[13.5,6],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[13.5,6],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[13.5,6],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[13.5,9],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[13.5,9],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[13.5,6],t:58},{s:[13.5,6],t:59}]},r:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[0],t:58},{s:[0],t:59}]},sa:{a:0,k:0},o:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[100],t:58},{s:[100],t:59}]}},shapes:[{ty:"sh",bm:0,hd:!1,nm:"",d:1,ks:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,12],[0,12]]}],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,12],[0,12]]}],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,12],[0,12]]}],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,12],[0,12]]}],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,6],[0,6]]}],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,6],[0,6]]}],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,12],[0,12]]}],t:58},{s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,12],[0,12]]}],t:59}]}},{ty:"fl",bm:0,hd:!1,nm:"",c:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[1,1,1],t:58},{s:[1,1,1],t:59}]},r:1,o:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[100],t:58},{s:[100],t:59}]}}],ind:1},{ty:4,nm:"Rectangle 4497",sr:1,st:0,op:60,ip:0,hd:!1,ddd:0,bm:0,hasMask:!1,ao:0,ks:{a:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,3],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,3],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,6],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,6],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,5],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,5],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[1.5,3],t:58},{s:[1.5,3],t:59}]},s:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[100,100],t:58},{s:[100,100],t:59}]},sk:{a:0,k:0},p:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[7.5,9],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[7.5,9],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[7.5,6],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[7.5,6],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[7.5,7],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[7.5,7],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[7.5,9],t:58},{s:[7.5,9],t:59}]},r:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[0],t:58},{s:[0],t:59}]},sa:{a:0,k:0},o:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[100],t:58},{s:[100],t:59}]}},shapes:[{ty:"sh",bm:0,hd:!1,nm:"",d:1,ks:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,6],[0,6]]}],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,6],[0,6]]}],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,12],[0,12]]}],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,12],[0,12]]}],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,10],[0,10]]}],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,10],[0,10]]}],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,6],[0,6]]}],t:58},{s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,6],[0,6]]}],t:59}]}},{ty:"fl",bm:0,hd:!1,nm:"",c:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[1,1,1],t:58},{s:[1,1,1],t:59}]},r:1,o:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[100],t:58},{s:[100],t:59}]}}],ind:2},{ty:4,nm:"Rectangle 4497",sr:1,st:0,op:60,ip:0,hd:!1,ddd:0,bm:0,hasMask:!1,ao:0,ks:{a:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,6],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,6],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,3],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,3],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,6],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,6],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[1.5,6],t:58},{s:[1.5,6],t:59}]},s:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[100,100],t:58},{s:[100,100],t:59}]},sk:{a:0,k:0},p:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,6],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,6],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,9],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,9],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,6],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,6],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[1.5,6],t:58},{s:[1.5,6],t:59}]},r:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[0],t:58},{s:[0],t:59}]},sa:{a:0,k:0},o:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[100],t:58},{s:[100],t:59}]}},shapes:[{ty:"sh",bm:0,hd:!1,nm:"",d:1,ks:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,12],[0,12]]}],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,12],[0,12]]}],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,6],[0,6]]}],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,6],[0,6]]}],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,12],[0,12]]}],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,12],[0,12]]}],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,12],[0,12]]}],t:58},{s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,12],[0,12]]}],t:59}]}},{ty:"fl",bm:0,hd:!1,nm:"",c:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[1,1,1],t:58},{s:[1,1,1],t:59}]},r:1,o:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[100],t:58},{s:[100],t:59}]}}],ind:3}],qs="5.7.0",Ks=60,Xs=57.6,Js=0,Zs=[],ei={nm:Os,ddd:Ws,h:Hs,w:Vs,meta:Us,layers:Qs,v:qs,fr:Ks,op:Xs,ip:Js,assets:Zs},ti=()=>{const t=d.useRef(null);return d.useEffect(()=>{const i=document.getElementById("lottie-timestamp-equalizer");return i&&(t.current=Le.loadAnimation({container:i,animationData:ei,loop:!0,autoplay:!0})),()=>{t.current&&t.current.destroy()}},[]),e.jsx("div",{id:"lottie-timestamp-equalizer",style:{width:"18px",height:"18px"}})},si=r(s).attrs(()=>({direction:"row"}))`
  cursor: pointer;
  color: ${o.primaryText1};
  border-top: 1px solid ${o.black};
  background: ${t=>t.isSelected?"rgba(97, 138, 255, 0.1)":`${o.BG1}`};

  .play-pause {
    font-size: 24px;
    border-radius: 4px;
    color: ${o.GRAY7};
    cursor: pointer;
  }

  .info {
    margin-left: auto;
    color: ${o.GRAY7};
    font-size: 24px;
  }

  &:hover {
    .play-pause {
      color: ${o.white};
    }
  }
`,ii=({onClick:t,timestamp:i,isSelected:n,setOpenClip:a})=>e.jsxs(si,{align:"center","data-testid":"wrapper",direction:"row",isSelected:n,justify:"flex-start",onClick:t,px:20,py:20,children:[e.jsxs("div",{children:[e.jsx(he,{className:"play-pause",children:n?e.jsx(ti,{}):e.jsx(Ze,{})}),!1]}),e.jsxs(oi,{align:"flex-start",direction:"column",justify:"center",children:[i.timestamp&&e.jsx("span",{className:"timestamp",children:et(i.timestamp)}),e.jsx("span",{className:"title",children:V(i.show_title)})]}),e.jsx("div",{className:"info",children:e.jsx(s,{"data-testid":"info-icon-wrapper",onClick:()=>a(i),pt:4,children:e.jsx(Rt,{})})})]}),oi=r(s)`
  font-size: 13px;
  color: ${o.white};
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
    color: ${o.GRAY6};
  }
`,ni=r(s)`
  overflow: scroll;

  &::-webkit-scrollbar {
    width: 1px;
    height: 4px;
  }

  &::-webkit-scrollbar-thumb {
    width: 1px;
    height: 4px;
  }
`,ri=()=>{const t=A(),i=Ce(),[n,a]=d.useState(null),[c,x]=d.useState(null),[l,g,y]=U(u=>[u.playingNode,u.setPlayingNodeLink,u.setPlayingTime]),p=d.useMemo(()=>je((i==null?void 0:i.nodes)||[],t),[i==null?void 0:i.nodes,t]),f=d.useMemo(()=>i==null?void 0:i.nodes.find(u=>u.node_type==="show"&&u.show_title===(t==null?void 0:t.show_title)),[i==null?void 0:i.nodes,t]),C=d.useCallback(u=>{var j;l&&u.link&&(l==null?void 0:l.link)!==u.link&&g(u.link),y(ue(((j=u==null?void 0:u.timestamp)==null?void 0:j.split("-")[0])||"00:00:01")),x(u)},[l,g,x,y]);return d.useEffect(()=>{p!=null&&p.length&&!p.some(u=>u.ref_id===(c==null?void 0:c.ref_id))&&C(p[0])},[p,c,C]),t?e.jsx("div",{style:{overflow:"auto",flex:1,width:"100%"},children:e.jsxs(li,{children:[n&&e.jsx(ci,{className:"slide-me",direction:"up",in:!!n,children:e.jsxs(ai,{children:[e.jsx(s,{className:"close-info",onClick:()=>a(null),children:e.jsx(ft,{})}),n&&e.jsx(_e,{node:n})]})}),e.jsx(Ys,{selectedNodeShow:f}),!!(p!=null&&p.length)&&e.jsx(ni,{children:e.jsx(s,{pb:20,children:p==null?void 0:p.map((u,j)=>e.jsx(ii,{isSelected:(c==null?void 0:c.ref_id)===u.ref_id,onClick:()=>C(u),setOpenClip:a,timestamp:u},`${u.episode_title}_${j}`))})})]})}):null},ai=r(s)`
  border-radius: 20px;
  overflow: hidden;
  height: 100%;

  .close-info {
    position: absolute;
    color: ${o.white};
    top: 20px;
    right: 20px;
    font-size: 20px;
    cursor: pointer;
  }
`,li=r(s)`
  position: relative;
  flex: 1;
  min-height: 100%;
  flex-direction: column;
  border-bottom: 1px solid #101317;
  box-shadow: 0px 5px 6px rgba(0, 0, 0, 0.5);
`,ci=r(oe)`
  && {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    border-radius: 16px;
    overflow: hidden;
    background: ${o.BG1};
    z-index: 1;
  }
`,xi=()=>{const t=A(),i=t==null?void 0:t.name;return e.jsxs(s,{direction:"column",px:24,py:16,children:[e.jsx(E,{"data-testid":"person-image",size:80,src:(t==null?void 0:t.source_link)||"",type:"image"}),e.jsx(s,{py:20,children:e.jsx(_,{color:"primaryText1",kind:"bigHeading",children:i})})]})},di=()=>{const{sender_pic:t,sender_alias:i,date:n,message_content:a}=A()||{};return e.jsxs(s,{direction:"row",children:[e.jsx(ui,{src:t}),e.jsxs(pi,{children:[e.jsxs(s,{align:"flex-end",className:"info",direction:"row",children:[i&&e.jsx("span",{className:"info__name",children:i}),n&&e.jsx("span",{className:"info__date",children:n})]}),a&&e.jsx(hi,{dangerouslySetInnerHTML:{__html:tt(a)}})]})]})},pi=r(s)`
  color: ${o.black};
  border-radius: 8px;
  font-size: 20px;
  margin-left: 8px;
  flex: 1;

  .info__date {
    color: ${o.textMessages};
    font-size: 14px;
    margin-left: 8px;
  }

  .info__name {
    color: ${o.green400};
    font-size: 16px;
  }
`,hi=r.div`
  background: ${o.white};
  border-radius: 8px;
  padding: 16px;
  position: relative;
  &:before {
    content: '';
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-top: 10px solid ${o.white};
    position: absolute;
    left: -6px;
    top: 0;
  }

  .username {
    color: ${o.blueTextAccent};
  }

  a {
    color: ${o.blueTextAccent};
    text-decoration: none;
  }

  a:hover,
  a:visited {
    color: ${o.blueTextAccent};
    text-decoration: none;
  }
`,ui=r.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: green;
`,yi=()=>{const t=A(),i=(t==null?void 0:t.name)||(t==null?void 0:t.label);return e.jsxs(s,{direction:"row",px:24,py:16,children:[e.jsx(E,{"data-testid":"person-image",size:80,src:(t==null?void 0:t.image_url)||"person_placeholder_img.png",type:"person"}),e.jsx(s,{p:20,children:e.jsx(_,{color:"primaryText1",kind:"bigHeading",children:i})})]})},gi=({node:t,onClick:i})=>{var c,x;const n=ue(t.timestamp||""),a=Math.ceil(n/60);return e.jsx(fi,{onClick:i,p:24,children:e.jsxs("div",{children:[e.jsxs(s,{align:"flex-start",direction:"row",justify:"flex-start",children:[e.jsx(s,{align:"center",children:e.jsx(E,{size:64,src:(t==null?void 0:t.image_url)||"",type:(t==null?void 0:t.node_type)||"episode"})}),e.jsxs("div",{className:"content",children:[e.jsxs(s,{align:"center",direction:"row",children:[e.jsx(W,{type:"episode"}),a>0&&e.jsxs("div",{className:"subtitle",children:[a," ",a===1?"min":"mins"]})]}),e.jsx(_,{className:"title",color:"primaryText1",kind:"regular",children:t.episode_title})]})]}),e.jsxs(s,{align:"center",direction:"row",justify:"flex-end",pt:4,children:[e.jsxs(_,{className:"clipText",color:"mainBottomIcons",kind:"regular",children:[((c=t==null?void 0:t.children)==null?void 0:c.length)||0," ",((x=t==null?void 0:t.children)==null?void 0:x.length)===1?"Clip":"Clips"]}),e.jsx(st,{style:{color:o.white}})]})]})})},fi=r(s).attrs({})`
  direction: row;
  cursor: pointer;
  color: ${o.primaryText1};
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
`,mi=r(s)`
  flex: 1;
  min-height: 100%;
  flex-direction: column;
  border-bottom: 1px solid #101317;
  box-shadow: 0px 5px 6px rgba(0, 0, 0, 0.5);
  z-index: 0;

  .subtitle {
    font-size: 0.75rem;
    font-weight: 400;
    color: ${o.GRAY6};
    margin-left: 8px;
    max-width: 160px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`,wi=r(s)`
  flex-direction: column;
  border-bottom: 1px solid #101317;
  z-index: 0;
  padding: 42px 20px;
  background-color: #1c1e26;
`,ji=r(_)`
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
`,bi=()=>{const[t,i]=R(l=>[l.selectedNode,l.setSelectedNode]),n=Ce(),[a,c]=d.useState([]),x=d.useMemo(()=>{var y;const l=new Set,g={};if((y=t==null?void 0:t.children)!=null&&y.length){t.children.forEach((f,C)=>{var v,m,b,k;const u=je((n==null?void 0:n.nodes)||[],t)||[],j=n==null?void 0:n.nodes.find(h=>h.ref_id===f);if(j){j.timestamp=(v=u[0])==null?void 0:v.timestamp;const h=(k=(b=(m=u[C])==null?void 0:m.hosts)==null?void 0:b[0])==null?void 0:k.name;h&&l.add(h),g[f]=j,g[f]=j}});const p=Array.from(l);c(p)}return Object.values(g).filter(p=>p.node_type==="episode").sort((p,f)=>(f.weight||0)-(p.weight||0))},[n==null?void 0:n.nodes,t]);return e.jsxs(mi,{children:[e.jsx(wi,{children:e.jsxs(s,{direction:"row",children:[e.jsx(s,{pr:24,children:e.jsx(E,{size:80,src:(t==null?void 0:t.image_url)||"audio_default.svg",type:"show"})}),e.jsx(s,{direction:"column",children:e.jsxs(s,{direction:"column",grow:1,justify:"space-between",children:[e.jsxs(s,{align:"center",direction:"row",justify:"flex-start",mb:16,children:[e.jsx(W,{type:"show"})," ",e.jsxs("div",{className:"subtitle",children:["by ",a.join(", ")||(t==null?void 0:t.show_title)]})]}),e.jsx(ji,{kind:"bigHeading",title:(t==null?void 0:t.show_title)||"Unknown",children:(t==null?void 0:t.show_title)||"Unknown"})]})})]})}),e.jsxs(s,{direction:"column",children:[e.jsx(s,{p:24,children:e.jsx(_,{className:"relatedHeader",kind:"medium",children:"Related Episodes"})}),x.map(l=>e.jsx(gi,{node:l,onClick:()=>i(l)},l.ref_id))]})]})},ki=()=>{const t=A();return e.jsx(s,{align:"center",justify:"center",children:e.jsx(_,{color:"primaryText1",kind:"hugeHeading",children:t==null?void 0:t.label})})},vi=()=>{const t=A(),{date:i,boost:n,text:a,name:c,verified:x,profile_picture:l,twitter_handle:g,ref_id:y}=t||{},p=(t==null?void 0:t.tweet_id)||"",[f,C]=d.useState(n||0),u=P(j=>j.currentSearch);return t&&e.jsxs(e.Fragment,{children:[e.jsxs(s,{direction:"column",p:24,children:[e.jsxs(s,{align:"center",direction:"row",pr:16,children:[e.jsx(Ci,{children:e.jsx(E,{rounded:!0,size:58,src:l||"",type:"person"})}),e.jsxs(s,{children:[e.jsxs(Si,{align:"center",direction:"row",children:[c,x&&e.jsx("div",{className:"verification",children:e.jsx("img",{alt:"verified",src:"verified_twitter.svg"})})]}),g&&e.jsxs($i,{children:["@",g]})]})]}),e.jsxs(s,{grow:1,shrink:1,children:[e.jsx(_i,{"data-testid":"episode-description",children:K(a||"",u)}),e.jsx(s,{direction:"row",justify:"flex-start",children:!!i&&e.jsx(q,{children:ee.unix(i).format("ll")})})]}),e.jsx(s,{align:"stretch",mt:22,children:e.jsx("a",{href:`https://twitter.com/Interior/status/${p}?open=system`,children:e.jsx(Bi,{endIcon:e.jsx(se,{}),children:"View Tweet "})})})]}),e.jsx(Ti,{}),e.jsxs(s,{direction:"row",justify:"space-between",pt:14,px:24,children:[e.jsx(ie,{amt:f}),e.jsx(we,{content:t,count:f,refId:y,updateCount:C})]})]})},Ci=r(s)`
  img {
    width: 64px;
    height: 64px
    border-radius: 50%;
    object-fit: cover;
  }
  margin-right: 16px;
`,Si=r(s)`
  color: ${o.white};
  font-family: Barlow;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.22px;
  .verification {
    margin-left: 4px;
  }
`,$i=r(s)`
  color: ${o.GRAY7};
  font-family: Barlow;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`,_i=r(s)`
  color: ${o.white};
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
`,Ti=r(me)`
  margin: 0 0 6px 0;
  opacity: 75%;
`,Bi=r(z)`
  width: 100%;
`,Ii=()=>{var g,y;const[t,i]=d.useState(!1),n=A(),a=!!(n!=null&&n.source_link),c=d.useRef(null),x=P(p=>p.currentSearch),l=p=>{p.stopPropagation(),p.currentTarget.blur(),i(!t)};return d.useEffect(()=>{var p,f;t?(p=c.current)==null||p.play():(f=c.current)==null||f.pause()},[t]),e.jsxs(s,{align:"flex-start",basis:"100%",direction:"column",grow:1,justify:"center",pt:a?62:0,shrink:1,children:[a&&e.jsxs(zi,{children:[e.jsx(ge,{color:o.GRAY6}),e.jsx(Pi,{children:n==null?void 0:n.source_link}),e.jsx(Ei,{href:n==null?void 0:n.source_link,onClick:p=>p.stopPropagation(),target:"_blank",children:e.jsx(se,{})})]}),(g=n==null?void 0:n.audio)!=null&&g.length?e.jsxs(s,{justify:"flex-start",p:12,children:[e.jsx(z,{onClick:p=>l(p),startIcon:t?e.jsx(Q,{}):e.jsx(te,{}),children:t?"Pause":"Play"}),e.jsx(Ai,{ref:c,src:((y=n.audio[0])==null?void 0:y.link)||"",children:e.jsx("track",{kind:"captions"})})]}):null,e.jsx(Ri,{grow:1,justify:"flex-start",p:12,shrink:1,children:e.jsx(_,{color:"primaryText1",kind:"regular",children:K((n==null?void 0:n.text)||"",x)})})]})},zi=r(s)`
  top: 0px;
  position: absolute;
  border-radius: 16px 16px 0px 0px;
  padding: 0px 12px;
  width: 100%;
  height: 48px;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${o.BG2};
  gap: 5px;
  color: ${o.GRAY6};

  span {
    font-family: Barlow;
    font-size: 12px;
    font-weight: 400;
    line-height: 19px;
    color: ${o.GRAY6};
  }
`,Ei=r.a`
  color: ${o.GRAY6};
  font-size: 16px;
  height: 16px;
  display: flex;
  gap: 5px;
  align-items: center;
`,Ri=r(s)`
  overflow: auto;
`,Pi=r(_)`
  max-width: 150px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Ai=r.audio`
  height: 0;
  width: 0;
`,Mi=["clip","twitter_space","youtube","episode","podcast"],Li=()=>{const t=A(),{showTeachMe:i}=R(a=>a),{setPlayingNode:n}=U(a=>a);if(d.useEffect(()=>{Mi.includes((t==null?void 0:t.node_type)||"")&&n(t)},[n,t]),i)return e.jsx(ks,{});switch(t==null?void 0:t.node_type){case"guest":case"person":return e.jsx(yi,{});case"data_series":return e.jsx(Ss,{});case"tribe_message":return e.jsx(di,{});case"tweet":return e.jsx(vi,{});case"topic":return e.jsx(ki,{});case"show":return e.jsx(bi,{});case"youtube":case"podcast":case"clip":case"twitter_space":return e.jsx(_e,{});case"document":return e.jsx(Ii,{});case"episode":return e.jsx(ri,{},t.ref_id);case"image":return e.jsx(xi,{});default:return null}},Gi=d.memo(Li),Di=({isPlaying:t,setIsPlaying:i,playingTime:n,duration:a,handleProgressChange:c,handleVolumeChange:x,onFullScreenClick:l,showToolbar:g})=>e.jsxs(s,{children:[!g&&e.jsx(Wi,{"aria-label":"Small",max:a,onChange:c,size:"small",value:n}),e.jsxs(Ni,{align:"center",direction:"row",showToolbar:g,children:[e.jsx(Fi,{onClick:i,size:"small",children:t?e.jsx(Q,{}):e.jsx(te,{})}),e.jsxs(Hi,{direction:"row",children:[e.jsx("span",{children:re(n)}),e.jsx("span",{className:"separator",children:"/"}),e.jsx("span",{className:"duration",children:re(a)})]}),e.jsxs(Yi,{direction:"row",px:9,children:[e.jsx(be,{className:"volume-slider",defaultValue:.5,max:1,min:0,onChange:x,size:"small",step:.1}),e.jsx(it,{})]}),e.jsx(Oi,{onClick:()=>l(),children:g?e.jsx(nt,{}):e.jsx(ot,{})})]})]}),Ni=r(s)`
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
    color: ${o.primaryRed};
  }
`,Fi=r(he)`
  && {
    font-size: 36px;
    padding: 2px;
    margin-left: 8px;
  }
`,Yi=r(s)`
  height: 28px;
  font-size: 26px;
  border-radius: 200px;
  color: ${o.white};
  margin-left: auto;

  .volume-slider {
    display: none;
    color: ${o.white};
    height: 3px;
    .MuiSlider-track {
      border: none;
    }
    .MuiSlider-thumb {
      width: 2px;
      height: 10px;
      background-color: ${o.white};
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
`,Oi=r(s)`
  cursor: pointer;
  padding: 8px;
  font-size: 32px;
  color: #d9d9d9;
`,Wi=r(be)`
  && {
    z-index: 20;
    color: ${o.white};
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
      background-color: ${o.white};
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
`,Hi=r(s)`
  color: ${o.white};
  font-size: 13px;
  margin-left: 16px;
  font-weight: 500;

  .separator {
    color: ${o.GRAY6};
    margin: 0 4px;
  }

  .duration {
    color: ${o.GRAY6};
  }
`,Vi=({hidden:t})=>{const i=d.useRef(null),n=d.useRef(null),[a,c]=d.useState(!1),[x,l]=d.useState(!1),[g,y]=d.useState("ready"),[p,f,C,u,j,v,m,b,k,h,T]=U(S=>[S.isPlaying,S.playingTime,S.duration,S.setIsPlaying,S.setPlayingTime,S.setDuration,S.playingNode,S.volume,S.setVolume,S.setHasError,S.resetPlayer]);d.useEffect(()=>()=>T(),[T]);const M=()=>{u(!p)},I=()=>{u(!0)},Y=()=>{u(!1)},O=(S,B)=>{const L=Array.isArray(B)?B[0]:B;i.current&&(i.current.seekTo(L),j(L))},D=(S,B)=>{const L=Array.isArray(B)?B[0]:B;k(L)},w=()=>{h(!0),y("error")},$=S=>{const B=S.playedSeconds;j(B)},N=()=>{if(i.current){y("ready");const S=i.current.getDuration();v(S)}},F=()=>{n.current&&(document.fullscreenElement?(document.exitFullscreen(),c(!1)):n.current.requestFullscreen().then(()=>{document.addEventListener("fullscreenchange",G)}))},G=()=>{c(!!document.fullscreenElement),document.removeEventListener("fullscreenchange",G)};return d.useEffect(()=>()=>{document.removeEventListener("fullscreenchange",G)}),d.useEffect(()=>{const S=B=>{if(a){const L=window.screen.height,Be=B.clientY,Ie=L-Be;l(Ie<=50)}};return document.addEventListener("mousemove",S),()=>{document.removeEventListener("mousemove",S)}},[a,x]),d.useEffect(()=>{const S=B=>{a&&B.key==="Escape"&&(B.preventDefault(),B.stopPropagation())};return document.addEventListener("fullscreenchange",G),document.addEventListener("keydown",S),()=>{document.removeEventListener("fullscreenchange",G),document.removeEventListener("keydown",S)}}),m!=null&&m.link?e.jsxs(Ui,{ref:n,hidden:t,children:[e.jsx(Qi,{children:e.jsx(E,{size:120,src:(m==null?void 0:m.image_url)||"",type:"clip"})}),e.jsx(rt,{ref:i,controls:!1,height:a?window.screen.height:"200px",onBuffer:()=>y("buffering"),onBufferEnd:()=>y("ready"),onError:w,onPause:Y,onPlay:I,onProgress:$,onReady:N,playing:p,url:(m==null?void 0:m.link)||"",volume:b,width:"100%"}),g==="error"?e.jsx(Ki,{className:"error-wrapper",children:"Error happened, please try later"}):null,g==="ready"?e.jsx(Di,{duration:C,handleProgressChange:O,handleVolumeChange:D,isPlaying:p,onFullScreenClick:F,playingTime:f,setIsPlaying:M,showToolbar:x&&a}):null,g==="buffering"?e.jsx(qi,{children:e.jsx(ne,{color:o.lightGray})}):null]}):null},Ui=r(s)`
  border-bottom: 1px solid rgba(0, 0, 0, 0.25);
  background: rgba(0, 0, 0, 0.2);
  position: relative;
  border-top-right-radius: 16px;
  border-top-left-radius: 16px;
  overflow: hidden;
  height: ${t=>t.hidden?"0px":"auto"};
`,Qi=r(s)`
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translateX(-50%);
  z-index: -1;
`,qi=r(s)`
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
`,Ki=r(s)`
  height: 60px;
  padding: 12px 16px;
  color: ${o.primaryRed};
`,Xi=d.memo(Vi),Ji=({open:t})=>{const{setSelectedNode:i,setTeachMe:n,showTeachMe:a}=R(g=>g),c=A(),{setSidebarOpen:x}=P(g=>g),{playingNode:l}=U(g=>g);return e.jsx(oe,{"data-testid":"sidebar-sub-view",direction:"right",in:t,style:{width:a?"700px":"",position:t?"relative":"absolute"},children:e.jsxs(Zi,{children:[e.jsx(Xi,{hidden:(c==null?void 0:c.ref_id)!==(l==null?void 0:l.ref_id)},l==null?void 0:l.ref_id),e.jsx(to,{children:e.jsx(Gi,{})}),e.jsx(eo,{onClick:()=>{i(null),n(!1)},children:e.jsx(at,{})}),e.jsx(so,{onClick:()=>{x(!1)},children:e.jsx(ke,{})})]})})},Zi=r(s)(({theme:t})=>({position:"relative",background:o.BG1,width:"100%",margin:"64px auto 20px 10px",borderRadius:"16px",zIndex:29,[t.breakpoints.up("sm")]:{width:"390px"}})),eo=r(s)`
  font-size: 32px;
  color: ${o.white};
  cursor: pointer;
  position: absolute;
  right: 3px;
  top: 3px;

  &:hover {
    color: ${o.GRAY6};
  }

  &:active {
  }
`,to=r(s)`
  flex: 1 1 100%;
`,so=r(s).attrs({align:"center",justify:"center",p:8})(({theme:t})=>({backgroundColor:o.BG1_NORMAL,cursor:"pointer",transitionDuration:"0.2s",position:"absolute",right:"0px",top:"50%",zIndex:1,width:"24px",height:"48px",transform:"translateY(-50%)",borderRadius:"0px 6px 6px 0px",boxShadow:"2px 0px 6px 0px rgba(0, 0, 0, 0.25) inset",color:o.white,[t.breakpoints.up("sm")]:{left:"100%"},"&:hover":{backgroundColor:o.BG1_HOVER},"&:active":{backgroundColor:o.BG1_PRESS,color:o.GRAY6}})),io=()=>{const t=P(i=>i.setSidebarOpen);return e.jsx(oo,{onClick:()=>{t(!0)},children:e.jsx(lt,{})})},oo=r(s).attrs({align:"center",justify:"center",p:8})(({theme:t})=>({backgroundColor:o.BG1_NORMAL,cursor:"pointer",transitionDuration:"0.2s",position:"absolute",top:"50%",zIndex:1,width:"24px",height:"48px",transform:"translateY(-50%)",borderRadius:"0px 6px 6px 0px",boxShadow:"2px 0px 6px 0px rgba(0, 0, 0, 0.25) inset",color:o.white,[t.breakpoints.up("sm")]:{left:"64px"},"&:hover":{backgroundColor:o.BG1_HOVER},"&:active":{backgroundColor:o.BG1_PRESS,color:o.GRAY6}})),no=t=>e.jsxs("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("mask",{id:"mask0_5099_7163",maskUnits:"userSpaceOnUse",x:"2",y:"2",width:"16",height:"16",children:e.jsx("rect",{x:"2",y:"2",width:"1em",height:"1em",fill:"currentColor"})}),e.jsx("g",{mask:"url(#mask0_5099_7163)",children:e.jsx("path",{d:"M10 16.6667C9.16667 16.6667 8.38611 16.5083 7.65833 16.1917C6.93056 15.875 6.29722 15.4472 5.75833 14.9083C5.21944 14.3695 4.79167 13.7361 4.475 13.0083C4.15833 12.2806 4 11.5 4 10.6667C4 10.4778 4.06389 10.3195 4.19167 10.1917C4.31944 10.0639 4.47778 10 4.66667 10C4.85556 10 5.01389 10.0639 5.14167 10.1917C5.26944 10.3195 5.33333 10.4778 5.33333 10.6667C5.33333 11.9667 5.78611 13.0695 6.69167 13.975C7.59722 14.8806 8.7 15.3333 10 15.3333C11.3 15.3333 12.4028 14.8806 13.3083 13.975C14.2139 13.0695 14.6667 11.9667 14.6667 10.6667C14.6667 9.36667 14.2139 8.2639 13.3083 7.35834C12.4028 6.45279 11.3 6.00001 10 6.00001H9.9L10.4667 6.56667C10.6 6.70001 10.6639 6.85556 10.6583 7.03334C10.6528 7.21112 10.5889 7.36667 10.4667 7.50001C10.3333 7.63334 10.175 7.70279 9.99167 7.70834C9.80833 7.7139 9.65 7.65001 9.51667 7.51667L7.8 5.80001C7.66667 5.66667 7.6 5.51112 7.6 5.33334C7.6 5.15556 7.66667 5.00001 7.8 4.86667L9.51667 3.15001C9.65 3.01667 9.80833 2.95279 9.99167 2.95834C10.175 2.9639 10.3333 3.03334 10.4667 3.16667C10.5889 3.30001 10.6528 3.45556 10.6583 3.63334C10.6639 3.81112 10.6 3.96667 10.4667 4.10001L9.9 4.66667H10C10.8333 4.66667 11.6139 4.82501 12.3417 5.14167C13.0694 5.45834 13.7028 5.88612 14.2417 6.42501C14.7806 6.9639 15.2083 7.59723 15.525 8.32501C15.8417 9.05279 16 9.83334 16 10.6667C16 11.5 15.8417 12.2806 15.525 13.0083C15.2083 13.7361 14.7806 14.3695 14.2417 14.9083C13.7028 15.4472 13.0694 15.875 12.3417 16.1917C11.6139 16.5083 10.8333 16.6667 10 16.6667Z",fill:"currentColor"})})]}),ro=({trend:t,onClose:i,selectTrending:n})=>{const[a,c]=d.useState(!1),{close:x}=Z("briefDescription"),l=d.useRef(null),g=()=>{n(t.topic)},y=d.useCallback(()=>{i(),x()},[i,x]),p=()=>{l.current&&(a?l.current.pause():l.current.play(),c(!a)),c(!a)};return d.useEffect(()=>(window.addEventListener("keydown",y),()=>{window.removeEventListener("keydown",y)}),[y]),e.jsxs(At,{id:"briefDescription",kind:"regular",noWrap:!0,onClose:y,children:[t.audio_EN?e.jsxs(e.Fragment,{children:[e.jsxs(s,{direction:"row",justify:"flex-start",m:20,children:[e.jsx(z,{onClick:p,size:"small",startIcon:a?e.jsx(Q,{}):e.jsx(ct,{}),style:{marginRight:"10px"},children:"Listen"}),e.jsx(z,{onClick:g,size:"small",startIcon:e.jsx(Ge,{}),children:"Learn More"})]}),e.jsx(xo,{ref:l,src:t.audio_EN,children:e.jsx("track",{kind:"captions"})})]}):null,e.jsx(co,{children:t.tldr_topic??t.topic}),e.jsx(ao,{children:e.jsx(s,{children:e.jsx(lo,{children:t.tldr&&e.jsx(xt,{children:t.tldr})})})})]})},ao=r.div`
  max-height: 300px;
  overflow-y: auto;
  margin: 8px 0;
  padding: 0 20px;
`,lo=r(_)`
  font-size: 18px;
  font-weight: 400;
  font-family: 'Barlow';
  * {
    all: revert;
  }
`,co=r(_)`
  font-weight: 600;
  font-size: 20px;
  padding: 0 20px;
`,xo=r.audio`
  height: 0;
  width: 0;
`,po=["Drivechain","Ordinals","L402","Nostr","AI"],ho=({onSubmit:t})=>{var D;const{open:i}=Z("addContent"),[n,a]=d.useState(!1),[c,x]=d.useState(!1),[l,g]=d.useState(null),y=d.useRef(null),[p,f]=d.useState(0),[C,u]=d.useState(!1),{open:j}=Z("briefDescription"),{trendingTopics:v,setTrendingTopics:m}=R(w=>w),{setValue:b}=ye(),k=d.useCallback(async()=>{a(!0),x(!1);try{const w=await De();w.length&&Array.isArray(w)&&m(w)}catch{m(po.map($=>({topic:$,count:0})))}finally{a(!1)}},[m,x]);d.useEffect(()=>{v.length||k()},[k,v.length]),d.useEffect(()=>{const w=setTimeout(()=>{x(!0)},5e3);return()=>clearTimeout(w)},[x,n]);const h=w=>{b("search",w),t==null||t()},T=(w,$)=>{w.stopPropagation(),w.currentTarget.blur(),$!=null&&$.tldr&&(g($),j())},M=()=>{g(null)},I=w=>{w.stopPropagation(),w.currentTarget.blur(),u(!C)};d.useEffect(()=>{var w,$;C?(w=y.current)==null||w.play():($=y.current)==null||$.pause()},[p,C]);const Y=()=>{f(w=>{var N,F;let $=(w+1)%v.length;for(;$!==w&&!((N=v[$])!=null&&N.audio_EN);)$=($+1)%v.length;return $===w?(u(!1),$):((F=y.current)==null||F.load(),$===0&&(u(!1),f(0)),$)})},O=n?"Loading":"No new trending topics in the last 24 hours";return e.jsxs(yo,{"data-testid":"trending-component",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"heading-container",children:[e.jsxs("div",{className:"heading",children:[e.jsx("span",{className:"heading__title",children:"Trending Topics"}),e.jsx("span",{className:"heading__icon",children:n?e.jsx(ne,{color:o.white,size:16}):e.jsx(e.Fragment,{children:c?e.jsx(fo,{onClick:k,size:"small",startIcon:e.jsx(no,{})}):e.jsx(dt,{})})})]}),pt(v)?e.jsxs("div",{children:[e.jsx(z,{onClick:w=>I(w),startIcon:C?e.jsx(Q,{}):e.jsx(te,{}),children:C?"Pause":"Play All"}),e.jsx(mo,{ref:y,onEnded:Y,src:(D=v[p])==null?void 0:D.audio_EN,children:e.jsx("track",{kind:"captions"})})]}):null]}),v.length===0?e.jsxs("div",{className:"trending-empty",children:[e.jsx(go,{children:O}),e.jsx(z,{color:"secondary",disabled:n,onClick:i,size:"medium",startIcon:e.jsx(Pt,{}),sx:{alignSelf:"flex-end",m:"0 36px 16px 0"},variant:"contained",children:"Add Content"})]}):e.jsx("ul",{className:"list",children:v.map(w=>e.jsxs(s,{align:"center",className:"list-item",direction:"row",justify:"space-between",onClick:()=>h(w.topic),children:[e.jsxs(uo,{children:[" #",ht(w)]}),w.tldr&&e.jsx(z,{onClick:$=>T($,w),children:"TLDR"})]},w.topic))})]}),l&&e.jsx(ro,{onClose:M,selectTrending:h,trend:l})]})},uo=r.div`
  width: 300px;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  letter-spacing: 0.3pt;
`,yo=r(s)`
  .heading-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 16px 12px 16px 24px;
  }
  .heading {
    display: flex;
    align-items: center;
    color: ${o.GRAY6};
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
    color: ${o.GRAY6};
  }

  .list {
    list-style: none;
    padding: 0;
    margin: 0;
    cursor: pointer;
    &-item {
      padding: 18px 16px 18px 24px;
      overflow: hidden;
      color: ${o.white};
      text-overflow: ellipsis;
      font-family: Barlow;
      font-size: 16px;
      font-style: normal;
      font-weight: 600;
      line-height: 11px;
      &:hover {
        background: rgba(0, 0, 0, 0.1);
        color: ${o.SECONDARY_BLUE};
      }
      &:active {
        background: rgba(0, 0, 0, 0.2);
        color: ${o.PRIMARY_BLUE};
      }
    }
  }
`,go=r.p`
  color: ${o.GRAY6};
  margin-bottom: 20px;
`,fo=r(z)`
  && {
    min-width: 28px;
    width: 28px;
    padding: 0;
    height: 28px;
    .MuiButton-startIcon {
      color: ${o.white};
    }
  }
`,mo=r.audio`
  height: 0;
  width: 0;
`,wo=390,jo=d.forwardRef(({onSubmit:t,subViewOpen:i},n)=>{const{isFetching:a,setTeachMe:c,setSidebarFilter:x}=R(b=>b),l=pe(),{setSidebarOpen:g,currentSearch:y,clearSearch:p,searchFormValue:f}=P(b=>b),[C]=Re(b=>[b.trendingTopicsFlag]),{setValue:u}=ye(),j=d.useRef(null),[v,m]=d.useState(!1);return d.useEffect(()=>{u("search",f)},[u,f]),d.useEffect(()=>{const b=j.current;if(!b)return;const k=()=>{m((b==null?void 0:b.scrollTop)>0)};b.addEventListener("scroll",k)},[]),e.jsxs(vo,{ref:n,id:"sidebar-wrapper",children:[e.jsx(Bo,{}),e.jsxs(Te,{className:Ne({"has-shadow":v}),children:[e.jsxs(Co,{children:[e.jsx(ut,{onSubmit:t}),e.jsx($o,{onClick:()=>{if(y){u("search",""),p(),x("all");return}t==null||t()},children:a?e.jsx(ne,{color:o.SECONDARY_BLUE,"data-testid":"loader",size:"20"}):e.jsx(e.Fragment,{children:y?e.jsx(Fe,{}):e.jsx(mt,{})})})]}),y&&e.jsx(So,{children:a?e.jsx(yt,{}):e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"left",children:[e.jsx("span",{className:"count",children:l.length}),e.jsx("span",{className:"label",children:" results"})]}),e.jsx("div",{className:"right",style:{alignItems:"center"},children:e.jsx(gt,{})})]})})]}),!i&&e.jsx(_o,{onClick:()=>{g(!1),c(!1)},children:e.jsx(ke,{})}),e.jsxs(To,{ref:j,children:[!y&&C&&e.jsx(Io,{children:e.jsx(ho,{onSubmit:t})}),e.jsx(s,{children:a?e.jsx(ls,{}):e.jsx(ns,{isSearchResult:!!y})})]})]})}),bo=["topic","person","guest","event","organization","place","project","software"],ko=({onSubmit:t})=>{const{sidebarIsOpen:i}=P(x=>x),n=A(),a=!!n&&i&&!bo.includes(n.node_type),{showTeachMe:c}=R(x=>x);return e.jsxs(e.Fragment,{children:[e.jsx(oe,{direction:"right",in:i,mountOnEnter:!0,unmountOnExit:!0,children:e.jsx(jo,{onSubmit:t,subViewOpen:a})}),e.jsx(Ji,{open:a||!!c}),!i&&e.jsx(io,{})]})},vo=r(s)(({theme:t})=>({position:"relative",background:o.BG1,height:"100vh",width:"100%",zIndex:30,[t.breakpoints.up("sm")]:{width:wo}})),Te=r(s).attrs({direction:"column",justify:"center",align:"stretch"})(({theme:t})=>({padding:t.spacing(3.75,2),[t.breakpoints.up("sm")]:{padding:"12px"},"&.has-shadow":{borderBottom:"1px solid rgba(0, 0, 0, 0.25)",background:o.BG1,boxShadow:"0px 1px 6px 0px rgba(0, 0, 0, 0.20)"}})),Co=r(s).attrs({direction:"row",justify:"center",align:"center"})`
  flex-grow: 1;
`,So=r(s).attrs({direction:"row",justify:"space-between",align:"center"})`
  flex-grow: 1;
  color: ${o.GRAY6};
  font-family: Barlow;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  margin-top: 10px;
  padding: 0 8px;
  .count {
    color: ${o.white};
  }

  .right {
    display: flex;
  }
`,$o=r(s).attrs({align:"center",justify:"center",p:5})`
  font-size: 32px;
  color: ${o.mainBottomIcons};
  cursor: pointer;
  transition-duration: 0.2s;
  margin-left: -42px;
  z-index: 2;

  &:hover {
    /* background-color: ${o.gray200}; */
  }

  ${Te} input:focus + & {
    color: ${o.primaryBlue};
  }
`,_o=r(s).attrs({align:"center",justify:"center",p:8})(({theme:t})=>({backgroundColor:o.BG1_NORMAL,cursor:"pointer",transitionDuration:"0.2s",position:"absolute",right:"0px",top:"50%",zIndex:1,width:"24px",height:"48px",transform:"translateY(-50%)",borderRadius:"0px 6px 6px 0px",boxShadow:"2px 0px 6px 0px rgba(0, 0, 0, 0.25) inset",color:o.white,[t.breakpoints.up("sm")]:{left:"100%"},"&:hover":{backgroundColor:o.BG1_HOVER},"&:active":{backgroundColor:o.BG1_PRESS,color:o.GRAY6}})),To=r(s)(()=>({overflow:"auto",flex:1,width:"100%"})),Bo=r(s)`
  height: 64px;
  background: ${o.BG2};
`,Io=r(s)`
  padding: 0;
  margin-bottom: 36px;
  margin-top: 20px;
`;ko.displayName="Sidebar";export{wo as MENU_WIDTH,ko as SideBar};
