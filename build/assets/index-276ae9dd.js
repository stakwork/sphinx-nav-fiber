import{s as n,c as i,F as s,j as e,T as $,h as ee,r as h,u as le,P as ce,d as Ie,f as Re,a9 as Pe}from"./index-5306a408.js";import{A as I,u as R,b as G,ai as xe,aj as Ae,B as z,s as Ee,ak as X,al as Me,a as P,M as Ge,I as de,c as W,v as pe,P as te,J as Ne,am as he,an as Le,e as De,d as Fe}from"./react-toastify.esm-2eb26066.js";import{G as ue,L as se,B as Ye,H as Oe,u as We,S as He,a as Ve,D as Ue,M as Qe,R as qe,b as Ke,c as Xe,d as Je,z as Ze,N as ye,C as et,e as fe,f as ge,g as tt,h as st,i as me,j as it,P as ot,k as we,s as oe,V as nt,F as rt,E as at,l as lt,m as ct,n as je,o as xt,p as dt,q as pt,r as ht,t as ut,v as yt,w as ft,x as gt,y as mt}from"./SoundIcon-20448f0a.js";import{C as wt,S as jt}from"./ChevronUpIcon-9f109d72.js";import{f as Y,o as be,n as bt,X as kt,Y as vt,T as St,D as $t,S as ie,q as ke,P as H}from"./generateCategoricalChart-cc15583b.js";import{T as D}from"./index-c7440304.js";import{S as ve}from"./Skeleton-6c225593.js";import{T as ne}from"./toastMessage-f73b557d.js";import{g as Tt,d as _t}from"./index.esm-86aae897.js";import{T as Bt,F as Ct}from"./Popover-b1228285.js";import{I as zt,S as It,O as Rt}from"./Select-a0284f63.js";import{C as Pt}from"./CheckIcon-8e7f61a5.js";import{I as At}from"./InfoIcon-63dc394a.js";import{C as O}from"./ClipLoader-9a18032d.js";import{P as Et}from"./PlusIcon-e9f3785c.js";import{u as Z}from"./index-4f2243af.js";import{B as Mt}from"./index-b028ef43.js";import"./useSlotProps-93ea3d7c.js";const Gt=({imageUrl:t,name:o})=>e.jsxs(s,{align:"center",direction:"row",children:[t&&e.jsx(Nt,{children:e.jsx(I,{rounded:!0,size:64,src:t||"",type:"image"})}),o&&e.jsx(Lt,{children:o})]}),Nt=n(s)`
  img {
    width: 64px;
    height: 64px
    border-radius: 50%;
    object-fit: cover;
  }
  margin-right: 16px;
`,Lt=n(s)`
  color: ${i.white};
  font-family: Barlow;
  font-size: 13px;
  font-style: normal;
  font-weight: 600;
  line-height: 17px;
`,Dt=({text:t,type:o,sourceLink:r})=>e.jsxs(s,{direction:"column",children:[e.jsx(s,{align:"center",direction:"row",children:e.jsx(D,{type:o})}),e.jsx($e,{"data-testid":"episode-description",children:t}),e.jsx(s,{align:"center",direction:"row",justify:"flex-start",children:r&&e.jsxs(Ft,{href:r,onClick:a=>a.stopPropagation(),target:"_blank",children:[e.jsx(ue,{}),e.jsx(Yt,{children:r})]})})]}),Ft=n.a`
  color: ${i.GRAY6};
  font-size: 16px;
  height: 16px;
  display: flex;
  gap: 5px;
  align-items: center;
`,Yt=n($)`
  max-width: 150px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: ${i.GRAY6};
  font-family: Barlow;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
`,Ot=({title:t,imageUrl:o,name:r})=>e.jsxs(s,{align:"center",direction:"row",children:[e.jsx(Wt,{children:e.jsx(I,{rounded:!0,size:64,src:o||"",type:"person"})}),(t||r)&&e.jsx(Ht,{children:t||r})]}),Wt=n(s)`
  img {
    width: 64px;
    height: 64px
    border-radius: 50%;
    object-fit: cover;
  }
  margin-right: 16px;
`,Ht=n(s)`
  color: ${i.white};
  font-family: Barlow;
  font-size: 13px;
  font-style: normal;
  font-weight: 600;
  line-height: 17px;
`,Vt=({text:t,imageUrl:o,date:r,twitterHandle:a,name:c,verified:p})=>e.jsxs(s,{direction:"column",children:[e.jsxs(s,{align:"center",direction:"row",pr:16,children:[e.jsx(Ut,{children:e.jsx(I,{rounded:!0,size:27,src:o||"",type:"person"})}),e.jsxs(s,{children:[e.jsxs(Qt,{align:"center",direction:"row",children:[c,p&&e.jsx("div",{className:"verification",children:e.jsx("img",{alt:"verified",src:"verified_twitter.svg"})})]}),a&&e.jsxs(qt,{children:["@",a]})]})]}),e.jsxs(s,{grow:1,shrink:1,children:[e.jsx(Kt,{"data-testid":"episode-description",children:t}),e.jsx(s,{"data-testid":"date-text",direction:"row",justify:"flex-start",children:!!r&&e.jsx(V,{children:ee.unix(r).fromNow()})})]})]}),Ut=n(s)`
  img {
    width: 64px;
    height: 64px;
    border-radius: 50%;
    object-fit: cover;
  }
  margin-right: 16px;
`,Qt=n(s)`
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
`,qt=n(s)`
  color: ${i.GRAY7};
  font-family: Barlow;
  font-size: 11px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.2px;
`,Kt=n(s)`
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
`,Xt=n(s).attrs({direction:"column"})`
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
`,Se=({boostCount:t,date:o,episodeTitle:r,isSelectedView:a=!1,imageUrl:c,showTitle:p,type:l,text:u,name:y,profilePicture:x,sourceLink:b,verified:v=!1,twitterHandle:d,className:j="episode-wrapper",onClick:T})=>{const g=l==="show"?p:r,w=l==="show"?"":p,B=["tweet","person","guest","topic","document"],f=l==="youtube"?"video":"audio";return l?e.jsx(Xt,{className:j,onClick:T,children:B.includes(l)?e.jsxs(e.Fragment,{children:[l==="topic"&&e.jsxs(Jt,{children:[e.jsx(Oe,{}),e.jsx("p",{children:w})]}),["person","guest"].includes(l)&&e.jsx(Ot,{imageUrl:c,name:y||"",title:p||""}),["image"].includes(l)&&e.jsx(Gt,{imageUrl:b,name:y||""}),l==="tweet"&&e.jsx(Vt,{date:o,imageUrl:x,name:y||"",text:u||"",twitterHandle:d,verified:v}),l==="document"&&e.jsx(Dt,{sourceLink:b||"",text:u||"",type:l})]}):e.jsxs(s,{direction:"row",children:[!a&&e.jsx(s,{align:"center",pr:16,children:e.jsx(I,{size:64,src:c||`${f}_default.svg`,type:l||""})}),e.jsxs(s,{grow:1,shrink:1,children:[e.jsxs(s,{align:"center",direction:"row",justify:"space-between",children:[e.jsx(s,{align:"center",direction:"row",children:l&&e.jsx(D,{type:l})}),l==="youtube"&&b?e.jsx(es,{href:`${b}?open=system`,onClick:C=>C.stopPropagation(),children:e.jsx(se,{})}):null]}),e.jsx($e,{"data-testid":"episode-description",children:g}),e.jsxs(s,{align:"center",direction:"row",justify:"flex-start",children:[!!o&&e.jsx(V,{children:ee.unix(o).fromNow()}),!!w&&e.jsx(Zt,{children:w}),!a&&t>0&&e.jsx(s,{style:{marginLeft:"auto"},children:e.jsx(Ye,{amt:t})})]})]})]})}):null},$e=n(s)`
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
`,V=n($)`
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
`,Jt=n.div`
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
`,Zt=n(V)`
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
`,es=n.a`
  color: ${i.GRAY6};
  font-size: 16px;
  height: 16px;
`,ts=({isSearchResult:t})=>{const o=h.useRef(null),r=t?80:10,[a,c]=R(w=>[w.setSelectedNode,w.setSelectedTimestamp]),[p,l]=G(w=>[w.setSidebarOpen,w.setRelevanceSelected]),[u,y]=h.useState(0),x=xe(),v=u*r+r,d=x&&x.length>0?x.length-1>v:!1,j=We("sm","down"),T=h.useMemo(()=>x&&[...x].sort((w,B)=>(B.date||0)-(w.date||0)).slice(0,v),[x,v]),g=h.useCallback(w=>{Ae(w),c(w),l(!0),a(w),j&&p(!1)},[a,l,p,c,j]);return e.jsx(e.Fragment,{children:e.jsxs(He,{ref:o,id:"search-result-list",shrink:1,children:[(T??[]).map((w,B)=>{const{image_url:f,date:C,boost:A,type:m,episode_title:k,show_title:E,node_type:N,text:U,source_link:Q,link:q,name:K,profile_picture:M,verified:S=!1,twitter_handle:_}=w||{};return e.jsx(Se,{boostCount:A||0,date:C||0,episodeTitle:Y(k),imageUrl:f||"",link:q,name:K||"",onClick:()=>g(w),profilePicture:M,showTitle:Y(E),sourceLink:Q,text:U||"",twitterHandle:_,type:N||m,verified:S},B.toString())}),e.jsx(is,{align:"center",background:"BG1",direction:"row",justify:"center",children:d&&e.jsx(z,{onClick:()=>{d&&y(u+1)},size:"medium",children:"Load More"})})]})})},ss=h.memo(ts),is=n(s)`
  flex: 0 0 86px;
`,os=({isSearchResult:t})=>{const[o,r,a]=le(l=>[l.nodeCount,l.setNodeCount,l.setBudget]),[c]=R(l=>[l.fetchData]),p=async()=>{o<1||(await c(a,{skip_cache:"true"}),r("CLEAR"))};return e.jsxs(as,{children:[!t&&e.jsxs("div",{className:"heading-container",children:[e.jsxs("div",{className:"heading",children:[e.jsx("span",{className:"heading__title",children:"Latest"}),e.jsx("span",{className:"heading__icon",children:e.jsx(Ve,{})})]}),o?e.jsx("div",{className:"button_container",children:e.jsx(ns,{className:"button",onClick:p,startIcon:e.jsx(Ue,{}),children:`See Latest (${o})`})}):null]}),e.jsx(ss,{isSearchResult:t})]})},ns=n(z)`
  && {
    width: 100%;
    margin-top: 1.2rem;
    font-weight: 500;
    .MuiButton-startIcon {
      color: ${i.GRAY6};
    }
  }
`,rs=h.memo(os),as=n(s)`
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
`,ls=n(s).attrs({direction:"column"})`
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
`,F=n(ve)`
  && {
    background: rgba(0, 0, 0, 0.15);
  }
`,cs=()=>e.jsx(e.Fragment,{children:Array(7).fill(null).map((t,o)=>e.jsx(ls,{children:e.jsxs(s,{direction:"row",children:[e.jsx(s,{align:"center",pr:16,children:e.jsx(F,{animation:"wave",height:64,variant:"rectangular",width:64})}),e.jsxs(s,{grow:1,shrink:1,children:[e.jsx(F,{height:10,variant:"rectangular",width:56}),e.jsx(F,{className:"title",height:10,variant:"rectangular",width:262}),e.jsx(F,{height:10,variant:"rectangular",width:149})]})]})},o))});n(s)`
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
`;const xs=n($)`
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
`;n(xs)`
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
`;const ds=48,ps=8,hs={PaperProps:{style:{maxHeight:ds*4.5+ps,width:250}}},us=["Beginner","Intermediate","Advanced","Expert"],ys=()=>{const t=R(f=>f.data),[o,r]=h.useState(""),[a,c]=h.useState("Beginner"),p=G(f=>f.currentSearch),l=Ee(),[u]=le(f=>[f.setBudget]),[y,x,b,v,d]=be(f=>[f.askedQuestions,f.askedQuestionsAnswers,f.setAskedQuestion,f.setAskedQuestionAnswer,f.hasQuestionInProgress]),j=h.useCallback(f=>{v(f.answer),X(e.jsx(ne,{message:"Response is ready"}),{position:X.POSITION.BOTTOM_CENTER,type:"success"})},[v]);h.useEffect(()=>{l&&j&&l.on("askquestionhook",j)},[j,l]);const T=async()=>{o&&(b(o),r(""));try{const f=t==null?void 0:t.nodes.filter(m=>m.text),C=f==null?void 0:f.slice(0,5),A=(C!=null&&C.length?C.map(m=>m.text).join(" "):"").substring(0,2500).replace(/[?&=+/#]/g,m=>`\\${m}`);p&&(await Ie.enable(),await Me({expertise_level:a,question_text:o,search_term:p,transcripts:A},u),await Re(u),X(e.jsx(ne,{message:"We started preparing response for you"}),{type:"success"}))}catch(f){console.error(f)}},g=a&&o.trim()&&!d,w=f=>{c(f.target.value)},B=async f=>{if(d){f.preventDefault();return}f.keyCode===13&&f.shiftKey===!1&&g&&(f.preventDefault(),T())};return e.jsxs(fs,{children:[e.jsx(s,{children:e.jsx(s,{children:e.jsxs(Ct,{component:"div",children:[e.jsx(ms,{id:"select-label",size:"small",children:"Expertise level"}),e.jsx(ws,{id:"demo-multiple-name",input:e.jsx(Rt,{label:"Expertise level"}),labelId:"select-label",MenuProps:hs,onChange:w,size:"small",value:a,children:us.map(f=>e.jsx(Qe,{component:"li",value:f,children:f},f))})]})})}),e.jsx(ks,{children:y==null?void 0:y.map((f,C)=>e.jsxs(s,{className:"response",py:12,children:[e.jsx($,{kind:"medium",children:f}),e.jsx(s,{py:12,children:(x==null?void 0:x[C])!==void 0?e.jsx($,{color:"unreadMsgText",children:x[C]}):e.jsxs(s,{align:"center",py:12,children:[e.jsx(s,{align:"center",py:12,children:e.jsx(ce,{color:i.white})}),e.jsx(s,{align:"center",py:12,children:e.jsx($,{children:"Generating response"})})]})})]},f))}),e.jsxs(js,{onKeyDown:B,py:12,tabIndex:-1,children:[e.jsx(gs,{disabled:d,onChange:f=>r(f.target.value),placeholder:"Enter your question",value:o}),e.jsx(bs,{children:e.jsx(Tt,{color:g?i.white:i.gray300,size:"18"})})]})]})},fs=n.div`
  margin-top: 20px;
`,gs=n(Bt)`
  background: ${i.inputBg1};
  max-width: 100%;
  color: ${i.secondaryText4};
  padding: 16px 8px;
  border: none;
  outline: none;
`,ms=n(zt)`
  &.MuiFormLabel-root.MuiInputLabel-root {
    color: ${i.secondaryText4};
  }
`,ws=n(It)`
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
`,js=n(s)`
  position: relative;
`,bs=n(s)`
  position: absolute;
  bottom: 20px;
  right: 20px;
  transform: rotate(-45deg);
`,ks=n(s)`
  flex-shrink: 1;
  overflow: auto;

  .response {
    border-bottom: 1px solid ${i.divider2};
  }
`,re=({text:t})=>e.jsxs(s,{align:"center",justify:"center",py:12,children:[e.jsx(s,{align:"center",py:12,children:e.jsx(ce,{color:i.white})}),e.jsx(s,{align:"center",py:12,children:e.jsx($,{children:t})})]}),vs=()=>{const[t,o,r,a]=be(p=>[p.teachMeAnswer,p.hasTeachingInProgress,p.instgraphAnswser,p.hasInstagraphInProgress]),c=!a&&!!(r!=null&&r.edges)&&!!(r!=null&&r.nodes);return e.jsxs(e.Fragment,{children:[c?e.jsx(qe,{edges:r==null?void 0:r.edges,nodes:r==null?void 0:r.nodes}):e.jsx(re,{text:"Generating instagraph"}),o?e.jsx(re,{text:"Generating tutorial"}):e.jsxs(e.Fragment,{children:[e.jsx(Ss,{children:e.jsx($,{children:t})}),e.jsx(ys,{})]})]})};n(z)``;const Ss=n(s)`
  padding-left: 10px;
  padding-right: 10px;
`,$s=({cx:t,cy:o})=>e.jsx($t,{cx:t,cy:o,fill:i.blueTextAccent,r:2}),Ts=()=>{const t=P(),o=[...(t==null?void 0:t.data)||[]].sort((c,p)=>(c.year||0)-(p.year||0)),r=o.map(c=>c.year).filter(c=>c),a=o.map(c=>c.rate).filter(c=>c);return e.jsx(_s,{direction:"column",px:24,py:16,children:e.jsx(Ke,{height:"100%",width:"100%",children:e.jsxs(Xe,{margin:{bottom:20,left:20,right:20,top:20},children:[e.jsx(bt,{stroke:"#f5f5f5"}),e.jsx(kt,{dataKey:"year",domain:[Math.min(...r),Math.max(...r)],label:{fill:i.white,fontSize:"12px",offset:-10,position:"insideBottom",value:t.x_axis_name},name:"X",tick:{fill:i.white,fontSize:"8px"},type:"number"}),e.jsx(vt,{color:"#000",dataKey:"rate",domain:[Math.min(...a),Math.max(...a)],label:{angle:-90,fill:i.white,fontSize:"12px",offset:0,position:"insideLeft",value:t.y_axis_name},name:"Y",tick:{fill:i.white,fontSize:"8px"},type:"number"}),e.jsx(St,{cursor:{strokeDasharray:"3 3"}}),e.jsx(Je,{data:o,fill:i.blueTextAccent,line:!0,name:"A scatter",shape:e.jsx($s,{})})]})})})},_s=n(s)`
  width: 100%;
  height: 100%;
`,Te=({amt:t})=>e.jsxs(Bs,{align:"center",direction:"row",justify:"flex-start",children:[e.jsx("div",{className:"icon",children:e.jsx(Ze,{})}),e.jsx("div",{className:"value","data-testid":"boost-amt",children:t}),e.jsx("div",{className:"text",children:"sat"})]}),Bs=n(s)`
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  color: ${i.GRAY7};
  .icon {
    width: 16px;
    height: 16px;
    border-radius: 2px;
    background: ${i.GRAY7};
    color: ${i.BG1};
    font-size: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .value {
    margin: 0 4px 0 8px;
    color: ${i.white};
  }
`,Cs=({stateless:t,node:o})=>e.jsxs(s,{grow:1,shrink:1,children:[e.jsx(Is,{children:t&&e.jsxs(zs,{children:[e.jsx("div",{className:"icon",children:e.jsx(ye,{})}),e.jsx("div",{className:"title",children:"Description"})]})}),e.jsx(Rs,{children:o!=null&&o.description?`"${o==null?void 0:o.description}"`:"..."})]}),zs=n(s).attrs({direction:"row",align:"center"})`
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
`,Is=n(s).attrs({direction:"row",align:"center",justify:"space-between"})`
  margin-bottom: 18px;
`,Rs=n(s)`
  color: ${i.white};
  text-overflow: ellipsis;
  whitespace: nowrap;
  font-family: Barlow;
  letter-spacing: 0.2pt;
  font-size: 15px;
  font-style: normal;
  font-weight: 300;
  line-height: 22px;
`,Ps=n.span`
  color: ${i.white};
  cursor: pointer;
  margin-left: 5px;
  &:hover {
    text-decoration: underline;
  }
`,As=({stateless:t,node:o})=>{var T;const[r,a]=G(g=>[g.transcriptIsOpen,g.setTranscriptOpen]),[c,p]=h.useState(!1),[l,u]=h.useState(""),[y,x]=h.useState(!1);if(!t&&!r)return null;const b="https://knowledge-graph.sphinx.chat",v=async g=>{try{const w=await fetch(`${b}/node/text/${g}`);if(!w.ok)throw new Error("Network response was not ok");const B=await w.json();u(B.data.text),x(!0)}catch(w){console.error("Error fetching full transcript",w)}},d=()=>{y?x(!1):o!=null&&o.ref_id&&v(o.ref_id)},j=g=>{g!==void 0&&(navigator.clipboard.writeText(g),p(!0))};return e.jsxs(s,{grow:1,shrink:1,children:[e.jsxs(Ms,{children:[t&&e.jsxs(Es,{children:[e.jsx("div",{className:"icon",children:e.jsx(ye,{})}),e.jsx("div",{className:"title",children:"Transcript"})]}),o!=null&&o.text?e.jsx(e.Fragment,{children:c?e.jsxs(Ls,{align:"center",direction:"row",justify:"flex-start",children:[e.jsx("div",{className:"icon",children:e.jsx(Pt,{})}),e.jsx("div",{className:"text",children:"Copied"})]}):e.jsx(z,{endIcon:e.jsx(et,{}),onPointerDown:()=>j(o==null?void 0:o.text),size:"small",variant:"outlined",children:"Copy"})}):e.jsx("div",{}),!t&&e.jsx(Gs,{onClick:()=>{a(!1)},children:e.jsx(_t,{fontSize:35})})]}),e.jsxs(Ns,{children:[y?l:`${(T=o==null?void 0:o.text)==null?void 0:T.substring(0,100)}...`,e.jsx(Ps,{onClick:d,children:y?"less":"more"})]})]})},Es=n(s).attrs({direction:"row",align:"center"})`
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
`,Ms=n(s).attrs({direction:"row",align:"center",justify:"space-between"})`
  margin-bottom: 18px;
`,Gs=n(s).attrs({})`
  color: ${i.mainBottomIcons};
  cursor: pointer;
  &:hover {
    color: ${i.lightBlue500};
  }
`,Ns=n(s)`
  color: ${i.white};
  text-overflow: ellipsis;
  whitespace: nowrap;
  font-family: Barlow;
  letter-spacing: 0.2pt;
  font-size: 15px;
  font-style: normal;
  font-weight: 300;
  line-height: 22px;
`,Ls=n(s)`
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
`,_e=({node:t})=>{const o=R(T=>T.selectedNode),{link:r,image_url:a,date:c,boost:p,node_type:l,type:u,id:y,show_title:x,episode_title:b,ref_id:v}=t||o||{},[d,j]=h.useState(p||0);return o?e.jsx("div",{style:{overflow:"auto",flex:1,width:"100%"},children:e.jsxs(Ds,{children:[e.jsx(Ys,{boostCount:d||0,date:c||0,episodeTitle:Y(b),imageUrl:a,isSelectedView:!0,link:r,onClick:()=>null,showTitle:x,type:l||u}),e.jsx(J,{}),e.jsxs(Fs,{children:[e.jsx(Te,{amt:d}),e.jsx(ge,{content:o,count:d,refId:v,updateCount:j})]}),e.jsx(J,{}),e.jsx(ae,{children:e.jsx(Cs,{node:o,stateless:!0})}),e.jsx(J,{}),e.jsx(ae,{children:e.jsx(As,{node:o,stateless:!0},y)})]})}):null},Ds=n(s)`
  flex: 1;
  min-height: 100%;
  flex-direction: column;
  border-bottom: 1px solid #101317;
  box-shadow: 0px 5px 6px rgba(0, 0, 0, 0.5);
  z-index: -1;
`,Fs=n(s)`
  flex-direction: row;
  justify-content: space-between;
  padding: 18px 18px 18px;
`,ae=n(s)`
  padding: 18px 18px 18px;
`,Ys=n(Se)`
  & {
    border-top: none;
    padding-bottom: 18px;
    font-size: 16px;
  }
`,J=n(fe)`
  margin: auto 0px 2px 0px;
  opacity: 75%;
`,Os=n(s)`
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
`,Ws=({selectedNodeShow:t})=>{const[o,r]=R(c=>[c.selectedNode,c.setSelectedNode]),{type:a}=o||{};return e.jsxs(Os,{p:20,children:[e.jsx(s,{align:"flex-start",children:a&&e.jsx(D,{type:a})}),e.jsx(s,{direction:"row",mb:22,mt:22,children:e.jsx(s,{grow:1,shrink:1,children:e.jsx($,{className:"episode-title",kind:"heading",children:(o==null?void 0:o.episode_title)||"Unknown"})})}),t?e.jsxs(s,{className:"show",direction:"row",onClick:()=>r(t),children:[e.jsx(I,{size:16,src:(t==null?void 0:t.image_url)||"",type:"show"}),e.jsx($,{className:"show__title",color:"mainBottomIcons",kind:"regular",children:t==null?void 0:t.show_title})]}):null]})},Hs="Flow 1",Vs=0,Us=12,Qs=15,qs={g:"LottieFiles Figma v45"},Ks=[{ty:4,nm:"Rectangle 4497",sr:1,st:0,op:60,ip:0,hd:!1,ddd:0,bm:0,hasMask:!1,ao:0,ks:{a:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,6],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,6],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,6],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,6],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,3],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,3],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[1.5,6],t:58},{s:[1.5,6],t:59}]},s:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[100,100],t:58},{s:[100,100],t:59}]},sk:{a:0,k:0},p:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[13.5,6],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[13.5,6],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[13.5,6],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[13.5,6],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[13.5,9],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[13.5,9],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[13.5,6],t:58},{s:[13.5,6],t:59}]},r:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[0],t:58},{s:[0],t:59}]},sa:{a:0,k:0},o:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[100],t:58},{s:[100],t:59}]}},shapes:[{ty:"sh",bm:0,hd:!1,nm:"",d:1,ks:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,12],[0,12]]}],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,12],[0,12]]}],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,12],[0,12]]}],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,12],[0,12]]}],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,6],[0,6]]}],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,6],[0,6]]}],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,12],[0,12]]}],t:58},{s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,12],[0,12]]}],t:59}]}},{ty:"fl",bm:0,hd:!1,nm:"",c:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[1,1,1],t:58},{s:[1,1,1],t:59}]},r:1,o:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[100],t:58},{s:[100],t:59}]}}],ind:1},{ty:4,nm:"Rectangle 4497",sr:1,st:0,op:60,ip:0,hd:!1,ddd:0,bm:0,hasMask:!1,ao:0,ks:{a:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,3],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,3],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,6],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,6],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,5],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,5],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[1.5,3],t:58},{s:[1.5,3],t:59}]},s:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[100,100],t:58},{s:[100,100],t:59}]},sk:{a:0,k:0},p:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[7.5,9],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[7.5,9],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[7.5,6],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[7.5,6],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[7.5,7],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[7.5,7],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[7.5,9],t:58},{s:[7.5,9],t:59}]},r:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[0],t:58},{s:[0],t:59}]},sa:{a:0,k:0},o:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[100],t:58},{s:[100],t:59}]}},shapes:[{ty:"sh",bm:0,hd:!1,nm:"",d:1,ks:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,6],[0,6]]}],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,6],[0,6]]}],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,12],[0,12]]}],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,12],[0,12]]}],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,10],[0,10]]}],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,10],[0,10]]}],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,6],[0,6]]}],t:58},{s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,6],[0,6]]}],t:59}]}},{ty:"fl",bm:0,hd:!1,nm:"",c:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[1,1,1],t:58},{s:[1,1,1],t:59}]},r:1,o:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[100],t:58},{s:[100],t:59}]}}],ind:2},{ty:4,nm:"Rectangle 4497",sr:1,st:0,op:60,ip:0,hd:!1,ddd:0,bm:0,hasMask:!1,ao:0,ks:{a:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,6],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,6],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,3],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,3],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,6],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,6],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[1.5,6],t:58},{s:[1.5,6],t:59}]},s:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[100,100],t:58},{s:[100,100],t:59}]},sk:{a:0,k:0},p:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,6],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,6],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,9],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,9],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,6],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,6],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[1.5,6],t:58},{s:[1.5,6],t:59}]},r:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[0],t:58},{s:[0],t:59}]},sa:{a:0,k:0},o:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[100],t:58},{s:[100],t:59}]}},shapes:[{ty:"sh",bm:0,hd:!1,nm:"",d:1,ks:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,12],[0,12]]}],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,12],[0,12]]}],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,6],[0,6]]}],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,6],[0,6]]}],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,12],[0,12]]}],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,12],[0,12]]}],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,12],[0,12]]}],t:58},{s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,12],[0,12]]}],t:59}]}},{ty:"fl",bm:0,hd:!1,nm:"",c:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[1,1,1],t:58},{s:[1,1,1],t:59}]},r:1,o:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[100],t:58},{s:[100],t:59}]}}],ind:3}],Xs="5.7.0",Js=60,Zs=57.6,ei=0,ti=[],si={nm:Hs,ddd:Vs,h:Us,w:Qs,meta:qs,layers:Ks,v:Xs,fr:Js,op:Zs,ip:ei,assets:ti},ii=()=>{const t=h.useRef(null);return h.useEffect(()=>{const o=document.getElementById("lottie-timestamp-equalizer");return o&&(t.current=Ge.loadAnimation({container:o,animationData:si,loop:!0,autoplay:!0})),()=>{t.current&&t.current.destroy()}},[]),e.jsx("div",{id:"lottie-timestamp-equalizer",style:{width:"18px",height:"18px"}})},oi=n(s).attrs(()=>({direction:"row"}))`
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
`,ni=({onClick:t,timestamp:o,isSelected:r,setOpenClip:a})=>e.jsxs(oi,{align:"center","data-testid":"wrapper",direction:"row",isSelected:r,justify:"flex-start",onClick:t,px:20,py:20,children:[e.jsxs("div",{children:[e.jsx(de,{className:"play-pause",children:r?e.jsx(ii,{}):e.jsx(tt,{})}),!1]}),e.jsxs(ri,{align:"flex-start",direction:"column",justify:"center",children:[o.timestamp&&e.jsx("span",{className:"timestamp",children:st(o.timestamp)}),e.jsx("span",{className:"title",children:Y(o.show_title)})]}),e.jsx("div",{className:"info",children:e.jsx(s,{"data-testid":"info-icon-wrapper",onClick:()=>a(o),pt:4,children:e.jsx(At,{})})})]}),ri=n(s)`
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
`,ai=n(s)`
  overflow: scroll;

  &::-webkit-scrollbar {
    width: 1px;
    height: 4px;
  }

  &::-webkit-scrollbar-thumb {
    width: 1px;
    height: 4px;
  }
`,li=()=>{const t=P(),o=ke(),[r,a]=h.useState(null),[c,p]=h.useState(null),[l,u,y]=W(d=>[d.playingNode,d.setPlayingNodeLink,d.setPlayingTime]),x=h.useMemo(()=>me((o==null?void 0:o.nodes)||[],t),[o==null?void 0:o.nodes,t]),b=h.useMemo(()=>o==null?void 0:o.nodes.find(d=>d.node_type==="show"&&d.show_title===(t==null?void 0:t.show_title)),[o==null?void 0:o.nodes,t]),v=h.useCallback(d=>{var j;l&&d.link&&(l==null?void 0:l.link)!==d.link&&u(d.link),y(pe(((j=d==null?void 0:d.timestamp)==null?void 0:j.split("-")[0])||"00:00:01")),p(d)},[l,u,p,y]);return h.useEffect(()=>{x!=null&&x.length&&!x.some(d=>d.ref_id===(c==null?void 0:c.ref_id))&&v(x[0])},[x,c,v]),t?e.jsx("div",{style:{overflow:"auto",flex:1,width:"100%"},children:e.jsxs(xi,{children:[r&&e.jsx(di,{className:"slide-me",direction:"up",in:!!r,children:e.jsxs(ci,{children:[e.jsx(s,{className:"close-info",onClick:()=>a(null),children:e.jsx(wt,{})}),r&&e.jsx(_e,{node:r})]})}),e.jsx(Ws,{selectedNodeShow:b}),!!(x!=null&&x.length)&&e.jsx(ai,{children:e.jsx(s,{pb:20,children:x==null?void 0:x.map((d,j)=>e.jsx(ni,{isSelected:(c==null?void 0:c.ref_id)===d.ref_id,onClick:()=>v(d),setOpenClip:a,timestamp:d},`${d.episode_title}_${j}`))})})]})}):null},ci=n(s)`
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
`,xi=n(s)`
  position: relative;
  flex: 1;
  min-height: 100%;
  flex-direction: column;
  border-bottom: 1px solid #101317;
  box-shadow: 0px 5px 6px rgba(0, 0, 0, 0.5);
`,di=n(ie)`
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
`,pi=()=>{const t=P(),o=t==null?void 0:t.name;return e.jsxs(s,{direction:"column",px:24,py:16,children:[e.jsx(I,{"data-testid":"person-image",size:80,src:(t==null?void 0:t.source_link)||"",type:"image"}),e.jsx(s,{py:20,children:e.jsx($,{color:"primaryText1",kind:"bigHeading",children:o})})]})},hi=()=>{const{sender_pic:t,sender_alias:o,date:r,message_content:a}=P()||{};return e.jsxs(s,{direction:"row",children:[e.jsx(fi,{src:t}),e.jsxs(ui,{children:[e.jsxs(s,{align:"flex-end",className:"info",direction:"row",children:[o&&e.jsx("span",{className:"info__name",children:o}),r&&e.jsx("span",{className:"info__date",children:r})]}),a&&e.jsx(yi,{dangerouslySetInnerHTML:{__html:it(a)}})]})]})},ui=n(s)`
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
`,yi=n.div`
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
`,fi=n.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: green;
`,gi=()=>{const t=P(),o=(t==null?void 0:t.name)||(t==null?void 0:t.label);return e.jsxs(s,{direction:"row",px:24,py:16,children:[e.jsx(I,{"data-testid":"person-image",size:80,src:(t==null?void 0:t.image_url)||"person_placeholder_img.png",type:"person"}),e.jsx(s,{p:20,children:e.jsx($,{color:"primaryText1",kind:"bigHeading",children:o})})]})},mi=({node:t,onClick:o})=>{var c,p;const r=pe(t.timestamp||""),a=Math.ceil(r/60);return e.jsx(wi,{onClick:o,p:24,children:e.jsxs("div",{children:[e.jsxs(s,{align:"flex-start",direction:"row",justify:"flex-start",children:[e.jsx(s,{align:"center",children:e.jsx(I,{size:64,src:(t==null?void 0:t.image_url)||"",type:(t==null?void 0:t.node_type)||"episode"})}),e.jsxs("div",{className:"content",children:[e.jsxs(s,{align:"center",direction:"row",children:[e.jsx(D,{type:"episode"}),a>0&&e.jsxs("div",{className:"subtitle",children:[a," ",a===1?"min":"mins"]})]}),e.jsx($,{className:"title",color:"primaryText1",kind:"regular",children:t.episode_title})]})]}),e.jsxs(s,{align:"center",direction:"row",justify:"flex-end",pt:4,children:[e.jsxs($,{className:"clipText",color:"mainBottomIcons",kind:"regular",children:[((c=t==null?void 0:t.children)==null?void 0:c.length)||0," ",((p=t==null?void 0:t.children)==null?void 0:p.length)===1?"Clip":"Clips"]}),e.jsx(ot,{style:{color:i.white}})]})]})})},wi=n(s).attrs({})`
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
`,ji=n(s)`
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
`,bi=n(s)`
  flex-direction: column;
  border-bottom: 1px solid #101317;
  z-index: 0;
  padding: 42px 20px;
  background-color: #1c1e26;
`,ki=n($)`
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
`,vi=()=>{const[t,o]=R(l=>[l.selectedNode,l.setSelectedNode]),r=ke(),[a,c]=h.useState([]),p=h.useMemo(()=>{var y;const l=new Set,u={};if((y=t==null?void 0:t.children)!=null&&y.length){t.children.forEach((b,v)=>{var T,g,w,B;const d=me((r==null?void 0:r.nodes)||[],t)||[],j=r==null?void 0:r.nodes.find(f=>f.ref_id===b);if(j){j.timestamp=(T=d[0])==null?void 0:T.timestamp;const f=(B=(w=(g=d[v])==null?void 0:g.hosts)==null?void 0:w[0])==null?void 0:B.name;f&&l.add(f),u[b]=j,u[b]=j}});const x=Array.from(l);c(x)}return Object.values(u).filter(x=>x.node_type==="episode").sort((x,b)=>(b.weight||0)-(x.weight||0))},[r==null?void 0:r.nodes,t]);return e.jsxs(ji,{children:[e.jsx(bi,{children:e.jsxs(s,{direction:"row",children:[e.jsx(s,{pr:24,children:e.jsx(I,{size:80,src:(t==null?void 0:t.image_url)||"audio_default.svg",type:"show"})}),e.jsx(s,{direction:"column",children:e.jsxs(s,{direction:"column",grow:1,justify:"space-between",children:[e.jsxs(s,{align:"center",direction:"row",justify:"flex-start",mb:16,children:[e.jsx(D,{type:"show"})," ",e.jsxs("div",{className:"subtitle",children:["by ",a.join(", ")||(t==null?void 0:t.show_title)]})]}),e.jsx(ki,{kind:"bigHeading",title:(t==null?void 0:t.show_title)||"Unknown",children:(t==null?void 0:t.show_title)||"Unknown"})]})})]})}),e.jsxs(s,{direction:"column",children:[e.jsx(s,{p:24,children:e.jsx($,{className:"relatedHeader",kind:"medium",children:"Related Episodes"})}),p.map(l=>e.jsx(mi,{node:l,onClick:()=>o(l)},l.ref_id))]})]})},Si=()=>{const t=P();return e.jsx(s,{align:"center",justify:"center",children:e.jsx($,{color:"primaryText1",kind:"hugeHeading",children:t==null?void 0:t.label})})},$i=()=>{const t=P(),{date:o,boost:r,text:a,name:c,verified:p,profile_picture:l,twitter_handle:u,ref_id:y}=t||{},x=(t==null?void 0:t.tweet_id)||"",[b,v]=h.useState(r||0);return t&&e.jsxs(e.Fragment,{children:[e.jsxs(s,{direction:"column",p:24,children:[e.jsxs(s,{align:"center",direction:"row",pr:16,children:[e.jsx(Ti,{children:e.jsx(I,{rounded:!0,size:58,src:l||"",type:"person"})}),e.jsxs(s,{children:[e.jsxs(_i,{align:"center",direction:"row",children:[c,p&&e.jsx("div",{className:"verification",children:e.jsx("img",{alt:"verified",src:"verified_twitter.svg"})})]}),u&&e.jsxs(Bi,{children:["@",u]})]})]}),e.jsxs(s,{grow:1,shrink:1,children:[e.jsx(Ci,{"data-testid":"episode-description",children:a}),e.jsx(s,{direction:"row",justify:"flex-start",children:!!o&&e.jsx(V,{children:ee.unix(o).format("ll")})})]}),e.jsx(s,{align:"stretch",mt:22,children:e.jsx("a",{href:`https://twitter.com/Interior/status/${x}?open=system`,children:e.jsx(Ii,{endIcon:e.jsx(se,{}),children:"View Tweet "})})})]}),e.jsx(zi,{}),e.jsxs(s,{direction:"row",justify:"space-between",pt:14,px:24,children:[e.jsx(Te,{amt:b}),e.jsx(ge,{content:t,count:b,refId:y,updateCount:v})]})]})},Ti=n(s)`
  img {
    width: 64px;
    height: 64px
    border-radius: 50%;
    object-fit: cover;
  }
  margin-right: 16px;
`,_i=n(s)`
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
`,Bi=n(s)`
  color: ${i.GRAY7};
  font-family: Barlow;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`,Ci=n(s)`
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
`,zi=n(fe)`
  margin: 0 0 6px 0;
  opacity: 75%;
`,Ii=n(z)`
  width: 100%;
`,Ri=()=>{var l,u;const[t,o]=h.useState(!1),r=P(),a=!!(r!=null&&r.source_link),c=h.useRef(null),p=y=>{y.stopPropagation(),y.currentTarget.blur(),o(!t)};return h.useEffect(()=>{var y,x;t?(y=c.current)==null||y.play():(x=c.current)==null||x.pause()},[t]),e.jsxs(s,{align:"flex-start",basis:"100%",direction:"column",grow:1,justify:"center",pt:a?62:0,shrink:1,children:[a&&e.jsxs(Pi,{children:[e.jsx(ue,{color:i.GRAY6}),e.jsx(Mi,{children:r==null?void 0:r.source_link}),e.jsx(Ai,{href:r==null?void 0:r.source_link,onClick:y=>y.stopPropagation(),target:"_blank",children:e.jsx(se,{})})]}),(l=r==null?void 0:r.audio)!=null&&l.length?e.jsxs(s,{justify:"flex-start",p:12,children:[e.jsx(z,{onClick:y=>p(y),startIcon:t?e.jsx(H,{}):e.jsx(te,{}),children:t?"Pause":"Play"}),e.jsx(Gi,{ref:c,src:((u=r.audio[0])==null?void 0:u.link)||"",children:e.jsx("track",{kind:"captions"})})]}):null,e.jsx(Ei,{grow:1,justify:"flex-start",p:12,shrink:1,children:e.jsx($,{color:"primaryText1",kind:"regular",children:r==null?void 0:r.text})})]})},Pi=n(s)`
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
`,Ai=n.a`
  color: ${i.GRAY6};
  font-size: 16px;
  height: 16px;
  display: flex;
  gap: 5px;
  align-items: center;
`,Ei=n(s)`
  overflow: auto;
`,Mi=n($)`
  max-width: 150px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Gi=n.audio`
  height: 0;
  width: 0;
`,Ni=["clip","twitter_space","youtube","episode","podcast"],Li=()=>{const t=P(),[o]=R(a=>[a.showTeachMe]),[r]=W(a=>[a.setPlayingNode]);if(h.useEffect(()=>{Ni.includes((t==null?void 0:t.node_type)||"")&&r(t)},[r,t]),o)return e.jsx(vs,{});switch(t==null?void 0:t.node_type){case"guest":case"person":return e.jsx(gi,{});case"data_series":return e.jsx(Ts,{});case"tribe_message":return e.jsx(hi,{});case"tweet":return e.jsx($i,{});case"topic":return e.jsx(Si,{});case"show":return e.jsx(vi,{});case"youtube":case"podcast":case"clip":case"twitter_space":return e.jsx(_e,{});case"document":return e.jsx(Ri,{});case"episode":return e.jsx(li,{},t.ref_id);case"image":return e.jsx(pi,{});default:return null}},Di=h.memo(Li),Fi=({isPlaying:t,setIsPlaying:o,playingTime:r,duration:a,handleProgressChange:c,handleVolumeChange:p,onFullScreenClick:l,showToolbar:u})=>e.jsxs(s,{children:[!u&&e.jsx(Vi,{"aria-label":"Small",max:a,onChange:c,size:"small",value:r}),e.jsxs(Yi,{align:"center",direction:"row",showToolbar:u,children:[e.jsx(Oi,{onClick:o,size:"small",children:t?e.jsx(H,{}):e.jsx(te,{})}),e.jsxs(Ui,{direction:"row",children:[e.jsx("span",{children:oe(r)}),e.jsx("span",{className:"separator",children:"/"}),e.jsx("span",{className:"duration",children:oe(a)})]}),e.jsxs(Wi,{direction:"row",px:9,children:[e.jsx(we,{className:"volume-slider",defaultValue:.5,max:1,min:0,onChange:p,size:"small",step:.1}),e.jsx(nt,{})]}),e.jsx(Hi,{onClick:()=>l(),children:u?e.jsx(at,{}):e.jsx(rt,{})})]})]}),Yi=n(s)`
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
`,Oi=n(de)`
  && {
    font-size: 36px;
    padding: 2px;
    margin-left: 8px;
  }
`,Wi=n(s)`
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
`,Hi=n(s)`
  cursor: pointer;
  padding: 8px;
  font-size: 32px;
  color: #d9d9d9;
`,Vi=n(we)`
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
`,Ui=n(s)`
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
`,Qi=({hidden:t})=>{const o=h.useRef(null),r=h.useRef(null),[a,c]=h.useState(!1),[p,l]=h.useState(!1),[u,y]=h.useState("ready"),[x,b,v,d,j,T,g,w,B,f,C]=W(S=>[S.isPlaying,S.playingTime,S.duration,S.setIsPlaying,S.setPlayingTime,S.setDuration,S.playingNode,S.volume,S.setVolume,S.setHasError,S.resetPlayer]);h.useEffect(()=>()=>C(),[C]);const A=()=>{d(!x)},m=()=>{d(!0)},k=()=>{d(!1)},E=(S,_)=>{const L=Array.isArray(_)?_[0]:_;o.current&&(o.current.seekTo(L),j(L))},N=(S,_)=>{const L=Array.isArray(_)?_[0]:_;B(L)},U=()=>{f(!0),y("error")},Q=S=>{const _=S.playedSeconds;j(_)},q=()=>{if(o.current){y("ready");const S=o.current.getDuration();T(S)}},K=()=>{r.current&&(document.fullscreenElement?(document.exitFullscreen(),c(!1)):r.current.requestFullscreen().then(()=>{document.addEventListener("fullscreenchange",M)}))},M=()=>{c(!!document.fullscreenElement),document.removeEventListener("fullscreenchange",M)};return h.useEffect(()=>()=>{document.removeEventListener("fullscreenchange",M)}),h.useEffect(()=>{const S=_=>{if(a){const L=window.screen.height,Ce=_.clientY,ze=L-Ce;l(ze<=50)}};return document.addEventListener("mousemove",S),()=>{document.removeEventListener("mousemove",S)}},[a,p]),h.useEffect(()=>{const S=_=>{a&&_.key==="Escape"&&(_.preventDefault(),_.stopPropagation())};return document.addEventListener("fullscreenchange",M),document.addEventListener("keydown",S),()=>{document.removeEventListener("fullscreenchange",M),document.removeEventListener("keydown",S)}}),g!=null&&g.link?e.jsxs(qi,{ref:r,hidden:t,children:[e.jsx(Ki,{children:e.jsx(I,{size:120,src:(g==null?void 0:g.image_url)||"",type:"clip"})}),e.jsx(lt,{ref:o,controls:!1,height:a?window.screen.height:"200px",onBuffer:()=>y("buffering"),onBufferEnd:()=>y("ready"),onError:U,onPause:k,onPlay:m,onProgress:Q,onReady:q,playing:x,url:(g==null?void 0:g.link)||"",volume:w,width:"100%"}),u==="error"?e.jsx(Ji,{className:"error-wrapper",children:"Error happened, please try later"}):null,u==="ready"?e.jsx(Fi,{duration:v,handleProgressChange:E,handleVolumeChange:N,isPlaying:x,onFullScreenClick:K,playingTime:b,setIsPlaying:A,showToolbar:p&&a}):null,u==="buffering"?e.jsx(Xi,{children:e.jsx(O,{color:i.lightGray})}):null]}):null},qi=n(s)`
  border-bottom: 1px solid rgba(0, 0, 0, 0.25);
  background: rgba(0, 0, 0, 0.2);
  position: relative;
  border-top-right-radius: 16px;
  border-top-left-radius: 16px;
  overflow: hidden;
  height: ${t=>t.hidden?"0px":"auto"};
`,Ki=n(s)`
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translateX(-50%);
  z-index: -1;
`,Xi=n(s)`
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
`,Ji=n(s)`
  height: 60px;
  padding: 12px 16px;
  color: ${i.primaryRed};
`,Zi=h.memo(Qi),eo=({open:t})=>{const[o,r,a]=R(u=>[u.setSelectedNode,u.setTeachMe,u.showTeachMe]),c=P(),[p]=G(u=>[u.setSidebarOpen]),[l]=W(u=>[u.playingNode]);return e.jsx(ie,{direction:"right",in:t,style:{width:a?"700px":"",position:t?"relative":"absolute"},children:e.jsxs(to,{children:[e.jsx(Zi,{hidden:(c==null?void 0:c.ref_id)!==(l==null?void 0:l.ref_id)},l==null?void 0:l.ref_id),e.jsx(io,{children:e.jsx(Di,{})}),e.jsx(so,{onClick:()=>{o(null),r(!1)},children:e.jsx(ct,{})}),e.jsx(oo,{onClick:()=>{p(!1)},children:e.jsx(je,{})})]})})},to=n(s)(({theme:t})=>({position:"relative",background:i.BG1,width:"100%",margin:"64px auto 20px 10px",borderRadius:"16px",zIndex:29,[t.breakpoints.up("sm")]:{width:"390px"}})),so=n(s)`
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
`,io=n(s)`
  flex: 1 1 100%;
`,oo=n(s).attrs({align:"center",justify:"center",p:8})(({theme:t})=>({backgroundColor:i.BG1_NORMAL,cursor:"pointer",transitionDuration:"0.2s",position:"absolute",right:"0px",top:"50%",zIndex:1,width:"24px",height:"48px",transform:"translateY(-50%)",borderRadius:"0px 6px 6px 0px",boxShadow:"2px 0px 6px 0px rgba(0, 0, 0, 0.25) inset",color:i.white,[t.breakpoints.up("sm")]:{left:"100%"},"&:hover":{backgroundColor:i.BG1_HOVER},"&:active":{backgroundColor:i.BG1_PRESS,color:i.GRAY6}})),no=()=>{const t=G(o=>o.setSidebarOpen);return e.jsx(ro,{onClick:()=>{t(!0)},children:e.jsx(xt,{})})},ro=n(s).attrs({align:"center",justify:"center",p:8})(({theme:t})=>({backgroundColor:i.BG1_NORMAL,cursor:"pointer",transitionDuration:"0.2s",position:"absolute",top:"50%",zIndex:1,width:"24px",height:"48px",transform:"translateY(-50%)",borderRadius:"0px 6px 6px 0px",boxShadow:"2px 0px 6px 0px rgba(0, 0, 0, 0.25) inset",color:i.white,[t.breakpoints.up("sm")]:{left:"64px"},"&:hover":{backgroundColor:i.BG1_HOVER},"&:active":{backgroundColor:i.BG1_PRESS,color:i.GRAY6}})),ao=({trend:t,onClose:o,selectTrending:r})=>{const[a,c]=h.useState(!1),{close:p}=Z("briefDescription"),l=h.useRef(null),u=()=>{r(t.topic)},y=h.useCallback(()=>{o(),p()},[o,p]),x=()=>{l.current&&(a?l.current.pause():l.current.play(),c(!a)),c(!a)};return h.useEffect(()=>(window.addEventListener("keydown",y),()=>{window.removeEventListener("keydown",y)}),[y]),e.jsxs(Mt,{id:"briefDescription",kind:"regular",onClose:y,children:[t.audio_EN?e.jsxs(e.Fragment,{children:[e.jsxs(s,{direction:"row",justify:"flex-start",mb:22,children:[e.jsx(z,{onClick:x,size:"small",startIcon:a?e.jsx(H,{}):e.jsx(dt,{}),style:{marginRight:"10px"},children:"Listen"}),e.jsx(z,{onClick:u,size:"small",startIcon:e.jsx(Ne,{}),children:"Learn More"})]}),e.jsx(po,{ref:l,src:t.audio_EN,children:e.jsx("track",{kind:"captions"})})]}):null,e.jsx(xo,{children:t.tldr_topic??t.topic}),e.jsx(lo,{children:e.jsx(s,{children:e.jsx(co,{children:t.tldr&&e.jsx(pt,{children:t.tldr})})})})]})},lo=n.div`
  max-height: 300px;
  overflow-y: auto;
  margin: 8px 0;
`,co=n($)`
  font-size: 18px;
  font-weight: 400;
  font-family: 'Barlow';
  * {
    all: revert;
  }
`,xo=n($)`
  font-weight: 600;
  font-size: 20px;
`,po=n.audio`
  height: 0;
  width: 0;
`,ho=["Drivechain","Ordinals","L402","Nostr","AI"],uo=({onSubmit:t})=>{var A;const{open:o}=Z("addContent"),[r,a]=h.useState(!1),[c,p]=h.useState(null),l=h.useRef(null),[u,y]=h.useState(0),[x,b]=h.useState(!1),{open:v}=Z("briefDescription"),[d,j]=R(m=>[m.trendingTopics,m.setTrendingTopics]),{setValue:T}=he();h.useEffect(()=>{const m=async()=>{a(!0);try{const k=await Le();k.length&&Array.isArray(k)&&j(k)}catch{j(ho.map(E=>({topic:E,count:0})))}finally{a(!1)}};d.length||m()},[d,j]);const g=m=>{T("search",m),t==null||t()},w=(m,k)=>{m.stopPropagation(),m.currentTarget.blur(),k!=null&&k.tldr&&(p(k),v())},B=()=>{p(null)},f=m=>{m.stopPropagation(),m.currentTarget.blur(),b(!x)};h.useEffect(()=>{var m,k;x?(m=l.current)==null||m.play():(k=l.current)==null||k.pause()},[u,x]);const C=()=>{y(m=>{var E,N;let k=(m+1)%d.length;for(;k!==m&&!((E=d[k])!=null&&E.audio_EN);)k=(k+1)%d.length;return k===m?(b(!1),k):((N=l.current)==null||N.load(),k===0&&(b(!1),y(0)),k)})};return e.jsxs(fo,{children:[e.jsxs("div",{children:[e.jsxs("div",{className:"heading-container",children:[e.jsxs("div",{className:"heading",children:[e.jsx("span",{className:"heading__title",children:"Trending Topics"}),e.jsx("span",{className:"heading__icon",children:r?e.jsx(O,{color:i.PRIMARY_BLUE,size:16}):e.jsx(ht,{})})]}),ut(d)?e.jsxs("div",{children:[e.jsx(z,{onClick:m=>f(m),startIcon:x?e.jsx(H,{}):e.jsx(te,{}),children:x?"Pause":"Play All"}),e.jsx(jo,{ref:l,onEnded:C,src:(A=d[u])==null?void 0:A.audio_EN,children:e.jsx("track",{kind:"captions"})})]}):null]}),d.length===0&&!r?e.jsxs("div",{className:"Trendingwrapper",children:[e.jsx(mo,{children:"No new trending topics in the last 24 hours"}),e.jsx(wo,{color:"secondary",onClick:o,size:"medium",startIcon:e.jsx(Et,{}),sx:{alignSelf:"flex-end",m:"0 36px 16px 0"},variant:"contained",children:"Add Content"})]}):e.jsx("ul",{className:"list",children:r?e.jsxs("div",{children:[e.jsx(O,{color:i.PRIMARY_BLUE,size:16}),[...Array(5)].map((m,k)=>e.jsx(go,{animation:"wave","data-testid":"loading-skeleton",height:47,variant:"rectangular",width:382},k))]}):e.jsx(e.Fragment,{children:d.map(m=>e.jsxs(s,{align:"center",className:"list-item",direction:"row",justify:"space-between",onClick:()=>g(m.topic),children:[e.jsxs(yo,{children:[" #",yt(m)]}),m.tldr&&e.jsx(z,{onClick:k=>w(k,m),children:"TLDR"})]},m.topic))})})]}),c&&e.jsx(ao,{onClose:B,selectTrending:g,trend:c})]})},yo=n.div`
  width: 300px;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  letter-spacing: 0.3pt;
`,fo=n(s)`
  .heading-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 16px 12px 16px 24px;
  }
  .heading {
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
      font-size: 24px;
    }
  }
  .Trendingwrapper {
    margin-left: 23px;
    margin-top: 20px;
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
`,go=n(ve)`
  && {
    background: rgba(0, 0, 0, 0.15);
  }
`,mo=n.p`
  color: ${i.GRAY6};
  margin-bottom: 20px;
`,wo=n(z)``,jo=n.audio`
  height: 0;
  width: 0;
`,bo=390,ko=h.forwardRef(({onSubmit:t,subViewOpen:o},r)=>{const[a,c,p]=R(g=>[g.isFetching,g.setTeachMe,g.setSidebarFilter]),[l]=Pe(g=>[g.trendingTopicsFlag]),u=xe(),[y,x,b]=G(g=>[g.setSidebarOpen,g.currentSearch,g.clearSearch]),{setValue:v}=he(),d=h.useRef(null),[j,T]=h.useState(!1);return h.useEffect(()=>{const g=d.current;if(!g)return;const w=()=>{T((g==null?void 0:g.scrollTop)>0)};g.addEventListener("scroll",w)},[]),e.jsxs($o,{ref:r,id:"sidebar-wrapper",children:[e.jsx(Io,{}),e.jsxs(Be,{className:De({"has-shadow":j}),children:[e.jsxs(To,{children:[e.jsx(ft,{onSubmit:t}),e.jsx(Bo,{onClick:()=>{if(x){v("search",""),b(),p("all");return}t==null||t()},children:a?e.jsx(O,{color:i.SECONDARY_BLUE,size:"20"}):e.jsx(e.Fragment,{children:x?e.jsx(Fe,{}):e.jsx(jt,{})})})]}),x&&e.jsx(_o,{children:a?e.jsx(gt,{}):e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"left",children:[e.jsx("span",{className:"count",children:u.length}),e.jsx("span",{className:"label",children:" results"})]}),e.jsx("div",{className:"right",style:{alignItems:"center"},children:e.jsx(mt,{})})]})})]}),!o&&e.jsx(Co,{onClick:()=>{y(!1),c(!1)},children:e.jsx(je,{})}),e.jsxs(zo,{ref:d,children:[!x&&l&&e.jsx(Ro,{children:e.jsx(uo,{onSubmit:t})}),e.jsx(s,{children:a?e.jsx(cs,{}):e.jsx(rs,{isSearchResult:!!x})})]})]})}),vo=["topic","person","guest","event","organization","place","project","software"],So=({onSubmit:t})=>{const o=G(p=>p.sidebarIsOpen),r=P(),a=!!r&&o&&!vo.includes(r.node_type),[c]=R(p=>[p.showTeachMe]);return e.jsxs(e.Fragment,{children:[e.jsx(ie,{direction:"right",in:o,mountOnEnter:!0,unmountOnExit:!0,children:e.jsx(ko,{onSubmit:t,subViewOpen:a})}),e.jsx(eo,{open:a||!!c}),!o&&e.jsx(no,{})]})},$o=n(s)(({theme:t})=>({position:"relative",background:i.BG1,height:"100vh",width:"100%",zIndex:30,[t.breakpoints.up("sm")]:{width:bo}})),Be=n(s).attrs({direction:"column",justify:"center",align:"stretch"})(({theme:t})=>({padding:t.spacing(3.75,2),[t.breakpoints.up("sm")]:{padding:"12px"},"&.has-shadow":{borderBottom:"1px solid rgba(0, 0, 0, 0.25)",background:i.BG1,boxShadow:"0px 1px 6px 0px rgba(0, 0, 0, 0.20)"}})),To=n(s).attrs({direction:"row",justify:"center",align:"center"})`
  flex-grow: 1;
`,_o=n(s).attrs({direction:"row",justify:"space-between",align:"center"})`
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
`,Bo=n(s).attrs({align:"center",justify:"center",p:5})`
  font-size: 32px;
  color: ${i.mainBottomIcons};
  cursor: pointer;
  transition-duration: 0.2s;
  margin-left: -42px;
  z-index: 2;

  &:hover {
    /* background-color: ${i.gray200}; */
  }

  ${Be} input:focus + & {
    color: ${i.primaryBlue};
  }
`,Co=n(s).attrs({align:"center",justify:"center",p:8})(({theme:t})=>({backgroundColor:i.BG1_NORMAL,cursor:"pointer",transitionDuration:"0.2s",position:"absolute",right:"0px",top:"50%",zIndex:1,width:"24px",height:"48px",transform:"translateY(-50%)",borderRadius:"0px 6px 6px 0px",boxShadow:"2px 0px 6px 0px rgba(0, 0, 0, 0.25) inset",color:i.white,[t.breakpoints.up("sm")]:{left:"100%"},"&:hover":{backgroundColor:i.BG1_HOVER},"&:active":{backgroundColor:i.BG1_PRESS,color:i.GRAY6}})),zo=n(s)(()=>({overflow:"auto",flex:1,width:"100%"})),Io=n(s)`
  height: 64px;
  background: ${i.BG2};
`,Ro=n(s)`
  padding: 0;
  margin-bottom: 36px;
  margin-top: 20px;
`;So.displayName="Sidebar";export{bo as MENU_WIDTH,So as SideBar};
