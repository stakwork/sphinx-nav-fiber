import{s as n,c as i,F as s,j as e,T,h as ee,r as h,u as le,P as ce,d as Ie,g as Re}from"./index-e90126f3.js";import{A as I,u as R,b as G,ad as xe,ae as Ee,B as z,s as Pe,af as X,ag as Ae,a as E,E as Me,I as de,c as W,v as pe,P as te,ah as Ge,ai as he,aj as Ne,e as Le,d as De}from"./react-toastify.esm-22f05de4.js";import{G as ue,L as se,B as Ye,H as Fe,u as Oe,S as We,a as He,D as Ve,M as Ue,R as Qe,b as qe,c as Ke,d as Xe,z as Je,N as ye,C as Ze,e as fe,f as ge,g as et,h as tt,i as me,j as st,P as it,k as we,s as oe,V as ot,F as nt,E as rt,l as at,m as lt,n as je,o as ct,p as xt,q as dt,r as pt,t as ht,v as ut,w as yt,x as ft,y as gt}from"./SoundIcon-215d8049.js";import{C as mt,S as wt}from"./ChevronUpIcon-428d4d08.js";import{f as F,o as be,n as jt,X as bt,Y as kt,T as vt,D as St,S as ie,q as ke,P as H}from"./generateCategoricalChart-e6760893.js";import{T as D}from"./index-43c2b4f5.js";import{S as ve}from"./Skeleton-7dbe3313.js";import{T as ne}from"./toastMessage-e329366a.js";import{g as $t,d as Tt}from"./index.esm-0d3f0902.js";import{T as _t,F as Bt}from"./Popover-7cee3222.js";import{I as Ct,S as zt,O as It}from"./Select-31a37e50.js";import{C as Rt}from"./CheckIcon-1d361e8e.js";import{I as Et}from"./InfoIcon-37b7ba25.js";import{C as O}from"./ClipLoader-805cbf79.js";import{P as Pt}from"./PlusIcon-b3bbb512.js";import{u as Z}from"./index-f78eda89.js";import{B as At}from"./index-81d4583b.js";import"./useSlotProps-45e36f47.js";const Mt=({imageUrl:t,name:o})=>e.jsxs(s,{align:"center",direction:"row",children:[t&&e.jsx(Gt,{children:e.jsx(I,{rounded:!0,size:64,src:t||"",type:"image"})}),o&&e.jsx(Nt,{children:o})]}),Gt=n(s)`
  img {
    width: 64px;
    height: 64px
    border-radius: 50%;
    object-fit: cover;
  }
  margin-right: 16px;
`,Nt=n(s)`
  color: ${i.white};
  font-family: Barlow;
  font-size: 13px;
  font-style: normal;
  font-weight: 600;
  line-height: 17px;
`,Lt=({text:t,type:o,sourceLink:r})=>e.jsxs(s,{direction:"column",children:[e.jsx(s,{align:"center",direction:"row",children:e.jsx(D,{type:o})}),e.jsx($e,{"data-testid":"episode-description",children:t}),e.jsx(s,{align:"center",direction:"row",justify:"flex-start",children:r&&e.jsxs(Dt,{href:r,onClick:a=>a.stopPropagation(),target:"_blank",children:[e.jsx(ue,{}),e.jsx(Yt,{children:r})]})})]}),Dt=n.a`
  color: ${i.GRAY6};
  font-size: 16px;
  height: 16px;
  display: flex;
  gap: 5px;
  align-items: center;
`,Yt=n(T)`
  max-width: 150px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: ${i.GRAY6};
  font-family: Barlow;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
`,Ft=({title:t,imageUrl:o,name:r})=>e.jsxs(s,{align:"center",direction:"row",children:[e.jsx(Ot,{children:e.jsx(I,{rounded:!0,size:64,src:o||"",type:"person"})}),(t||r)&&e.jsx(Wt,{children:t||r})]}),Ot=n(s)`
  img {
    width: 64px;
    height: 64px
    border-radius: 50%;
    object-fit: cover;
  }
  margin-right: 16px;
`,Wt=n(s)`
  color: ${i.white};
  font-family: Barlow;
  font-size: 13px;
  font-style: normal;
  font-weight: 600;
  line-height: 17px;
`,Ht=({text:t,imageUrl:o,date:r,twitterHandle:a,name:c,verified:d})=>e.jsxs(s,{direction:"column",children:[e.jsxs(s,{align:"center",direction:"row",pr:16,children:[e.jsx(Vt,{children:e.jsx(I,{rounded:!0,size:27,src:o||"",type:"person"})}),e.jsxs(s,{children:[e.jsxs(Ut,{align:"center",direction:"row",children:[c,d&&e.jsx("div",{className:"verification",children:e.jsx("img",{alt:"verified",src:"verified_twitter.svg"})})]}),a&&e.jsxs(Qt,{children:["@",a]})]})]}),e.jsxs(s,{grow:1,shrink:1,children:[e.jsx(qt,{"data-testid":"episode-description",children:t}),e.jsx(s,{"data-testid":"date-text",direction:"row",justify:"flex-start",children:!!r&&e.jsx(V,{children:ee.unix(r).fromNow()})})]})]}),Vt=n(s)`
  img {
    width: 64px;
    height: 64px;
    border-radius: 50%;
    object-fit: cover;
  }
  margin-right: 16px;
`,Ut=n(s)`
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
`,Qt=n(s)`
  color: ${i.GRAY7};
  font-family: Barlow;
  font-size: 11px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.2px;
`,qt=n(s)`
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
`,Kt=n(s).attrs({direction:"column"})`
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
`,Se=({boostCount:t,date:o,episodeTitle:r,isSelectedView:a=!1,imageUrl:c,showTitle:d,type:l,text:y,name:u,profilePicture:x,sourceLink:k,verified:S=!1,twitterHandle:p,className:j="episode-wrapper",onClick:b})=>{const m=l==="show"?d:r,w=l==="show"?"":d,B=["tweet","person","guest","topic","document"],f=l==="youtube"?"video":"audio";return l?e.jsx(Kt,{className:j,onClick:b,children:B.includes(l)?e.jsxs(e.Fragment,{children:[l==="topic"&&e.jsxs(Xt,{children:[e.jsx(Fe,{}),e.jsx("p",{children:w})]}),["person","guest"].includes(l)&&e.jsx(Ft,{imageUrl:c,name:u||"",title:d||""}),["image"].includes(l)&&e.jsx(Mt,{imageUrl:k,name:u||""}),l==="tweet"&&e.jsx(Ht,{date:o,imageUrl:x,name:u||"",text:y||"",twitterHandle:p,verified:S}),l==="document"&&e.jsx(Lt,{sourceLink:k||"",text:y||"",type:l})]}):e.jsxs(s,{direction:"row",children:[!a&&e.jsx(s,{align:"center",pr:16,children:e.jsx(I,{size:64,src:c||`${f}_default.svg`,type:l||""})}),e.jsxs(s,{grow:1,shrink:1,children:[e.jsxs(s,{align:"center",direction:"row",justify:"space-between",children:[e.jsx(s,{align:"center",direction:"row",children:l&&e.jsx(D,{type:l})}),l==="youtube"&&k?e.jsx(Zt,{href:`${k}?open=system`,onClick:C=>C.stopPropagation(),children:e.jsx(se,{})}):null]}),e.jsx($e,{"data-testid":"episode-description",children:m}),e.jsxs(s,{align:"center",direction:"row",justify:"flex-start",children:[!!o&&e.jsx(V,{children:ee.unix(o).fromNow()}),!!w&&e.jsx(Jt,{children:w}),!a&&t>0&&e.jsx(s,{style:{marginLeft:"auto"},children:e.jsx(Ye,{amt:t})})]})]})]})}):null},$e=n(s)`
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
`,V=n(T)`
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
`,Xt=n.div`
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
`,Jt=n(V)`
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
`,Zt=n.a`
  color: ${i.GRAY6};
  font-size: 16px;
  height: 16px;
`,es=({isSearchResult:t})=>{const o=h.useRef(null),r=t?80:10,[a,c]=R(w=>[w.setSelectedNode,w.setSelectedTimestamp]),[d,l]=G(w=>[w.setSidebarOpen,w.setRelevanceSelected]),[y,u]=h.useState(0),x=xe(),S=y*r+r,p=x&&x.length>0?x.length-1>S:!1,j=Oe("sm","down"),b=h.useMemo(()=>x&&[...x].sort((w,B)=>(B.date||0)-(w.date||0)).slice(0,S),[x,S]),m=h.useCallback(w=>{Ee(w),c(w),l(!0),a(w),j&&d(!1)},[a,l,d,c,j]);return e.jsx(e.Fragment,{children:e.jsxs(We,{ref:o,id:"search-result-list",shrink:1,children:[(b??[]).map((w,B)=>{const{image_url:f,date:C,boost:P,type:g,episode_title:v,show_title:A,node_type:N,text:U,source_link:Q,link:q,name:K,profile_picture:M,verified:$=!1,twitter_handle:_}=w||{};return e.jsx(Se,{boostCount:P||0,date:C||0,episodeTitle:F(v),imageUrl:f||"",link:q,name:K||"",onClick:()=>m(w),profilePicture:M,showTitle:F(A),sourceLink:Q,text:U||"",twitterHandle:_,type:N||g,verified:$},B.toString())}),e.jsx(ss,{align:"center",background:"BG1",direction:"row",justify:"center",children:p&&e.jsx(z,{onClick:()=>{p&&u(y+1)},size:"medium",children:"Load More"})})]})})},ts=h.memo(es),ss=n(s)`
  flex: 0 0 86px;
`,is=({isSearchResult:t})=>{const[o,r,a]=le(l=>[l.nodeCount,l.setNodeCount,l.setBudget]),[c]=R(l=>[l.fetchData]),d=async()=>{o<1||(await c(a,{skip_cache:"true"}),r("CLEAR"))};return e.jsxs(rs,{children:[!t&&e.jsxs("div",{className:"heading-container",children:[e.jsxs("div",{className:"heading",children:[e.jsx("span",{className:"heading__title",children:"Latest"}),e.jsx("span",{className:"heading__icon",children:e.jsx(He,{})})]}),o?e.jsx("div",{className:"button_container",children:e.jsx(os,{className:"button",onClick:d,startIcon:e.jsx(Ve,{}),children:`See Latest (${o})`})}):null]}),e.jsx(ts,{isSearchResult:t})]})},os=n(z)`
  && {
    width: 100%;
    margin-top: 1.2rem;
    font-weight: 500;
    .MuiButton-startIcon {
      color: ${i.GRAY6};
    }
  }
`,ns=h.memo(is),rs=n(s)`
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
`,as=n(s).attrs({direction:"column"})`
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
`,Y=n(ve)`
  && {
    background: rgba(0, 0, 0, 0.15);
  }
`,ls=()=>e.jsx(e.Fragment,{children:Array(7).fill(null).map((t,o)=>e.jsx(as,{children:e.jsxs(s,{direction:"row",children:[e.jsx(s,{align:"center",pr:16,children:e.jsx(Y,{animation:"wave",height:64,variant:"rectangular",width:64})}),e.jsxs(s,{grow:1,shrink:1,children:[e.jsx(Y,{height:10,variant:"rectangular",width:56}),e.jsx(Y,{className:"title",height:10,variant:"rectangular",width:262}),e.jsx(Y,{height:10,variant:"rectangular",width:149})]})]})},o))});n(s)`
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
`;const cs=n(T)`
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
`;n(cs)`
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
`;const xs=48,ds=8,ps={PaperProps:{style:{maxHeight:xs*4.5+ds,width:250}}},hs=["Beginner","Intermediate","Advanced","Expert"],us=()=>{const t=R(f=>f.data),[o,r]=h.useState(""),[a,c]=h.useState("Beginner"),d=G(f=>f.currentSearch),l=Pe(),[y]=le(f=>[f.setBudget]),[u,x,k,S,p]=be(f=>[f.askedQuestions,f.askedQuestionsAnswers,f.setAskedQuestion,f.setAskedQuestionAnswer,f.hasQuestionInProgress]),j=h.useCallback(f=>{S(f.answer),X(e.jsx(ne,{message:"Response is ready"}),{position:X.POSITION.BOTTOM_CENTER,type:"success"})},[S]);h.useEffect(()=>{l&&j&&l.on("askquestionhook",j)},[j,l]);const b=async()=>{o&&(k(o),r(""));try{const f=t==null?void 0:t.nodes.filter(g=>g.text),C=f==null?void 0:f.slice(0,5),P=(C!=null&&C.length?C.map(g=>g.text).join(" "):"").substring(0,2500).replace(/[?&=+/#]/g,g=>`\\${g}`);d&&(await Ie.enable(),await Ae({expertise_level:a,question_text:o,search_term:d,transcripts:P},y),await Re(y),X(e.jsx(ne,{message:"We started preparing response for you"}),{type:"success"}))}catch(f){console.error(f)}},m=a&&o.trim()&&!p,w=f=>{c(f.target.value)},B=async f=>{if(p){f.preventDefault();return}f.keyCode===13&&f.shiftKey===!1&&m&&(f.preventDefault(),b())};return e.jsxs(ys,{children:[e.jsx(s,{children:e.jsx(s,{children:e.jsxs(Bt,{component:"div",children:[e.jsx(gs,{id:"select-label",size:"small",children:"Expertise level"}),e.jsx(ms,{id:"demo-multiple-name",input:e.jsx(It,{label:"Expertise level"}),labelId:"select-label",MenuProps:ps,onChange:w,size:"small",value:a,children:hs.map(f=>e.jsx(Ue,{component:"li",value:f,children:f},f))})]})})}),e.jsx(bs,{children:u==null?void 0:u.map((f,C)=>e.jsxs(s,{className:"response",py:12,children:[e.jsx(T,{kind:"medium",children:f}),e.jsx(s,{py:12,children:(x==null?void 0:x[C])!==void 0?e.jsx(T,{color:"unreadMsgText",children:x[C]}):e.jsxs(s,{align:"center",py:12,children:[e.jsx(s,{align:"center",py:12,children:e.jsx(ce,{color:i.white})}),e.jsx(s,{align:"center",py:12,children:e.jsx(T,{children:"Generating response"})})]})})]},f))}),e.jsxs(ws,{onKeyDown:B,py:12,tabIndex:-1,children:[e.jsx(fs,{disabled:p,onChange:f=>r(f.target.value),placeholder:"Enter your question",value:o}),e.jsx(js,{children:e.jsx($t,{color:m?i.white:i.gray300,size:"18"})})]})]})},ys=n.div`
  margin-top: 20px;
`,fs=n(_t)`
  background: ${i.inputBg1};
  max-width: 100%;
  color: ${i.secondaryText4};
  padding: 16px 8px;
  border: none;
  outline: none;
`,gs=n(Ct)`
  &.MuiFormLabel-root.MuiInputLabel-root {
    color: ${i.secondaryText4};
  }
`,ms=n(zt)`
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
`,ws=n(s)`
  position: relative;
`,js=n(s)`
  position: absolute;
  bottom: 20px;
  right: 20px;
  transform: rotate(-45deg);
`,bs=n(s)`
  flex-shrink: 1;
  overflow: auto;

  .response {
    border-bottom: 1px solid ${i.divider2};
  }
`,re=({text:t})=>e.jsxs(s,{align:"center",justify:"center",py:12,children:[e.jsx(s,{align:"center",py:12,children:e.jsx(ce,{color:i.white})}),e.jsx(s,{align:"center",py:12,children:e.jsx(T,{children:t})})]}),ks=()=>{const[t,o,r,a]=be(d=>[d.teachMeAnswer,d.hasTeachingInProgress,d.instgraphAnswser,d.hasInstagraphInProgress]),c=!a&&!!(r!=null&&r.edges)&&!!(r!=null&&r.nodes);return e.jsxs(e.Fragment,{children:[c?e.jsx(Qe,{edges:r==null?void 0:r.edges,nodes:r==null?void 0:r.nodes}):e.jsx(re,{text:"Generating instagraph"}),o?e.jsx(re,{text:"Generating tutorial"}):e.jsxs(e.Fragment,{children:[e.jsx(vs,{children:e.jsx(T,{children:t})}),e.jsx(us,{})]})]})};n(z)``;const vs=n(s)`
  padding-left: 10px;
  padding-right: 10px;
`,Ss=({cx:t,cy:o})=>e.jsx(St,{cx:t,cy:o,fill:i.blueTextAccent,r:2}),$s=()=>{const t=E(),o=[...(t==null?void 0:t.data)||[]].sort((c,d)=>(c.year||0)-(d.year||0)),r=o.map(c=>c.year).filter(c=>c),a=o.map(c=>c.rate).filter(c=>c);return e.jsx(Ts,{direction:"column",px:24,py:16,children:e.jsx(qe,{height:"100%",width:"100%",children:e.jsxs(Ke,{margin:{bottom:20,left:20,right:20,top:20},children:[e.jsx(jt,{stroke:"#f5f5f5"}),e.jsx(bt,{dataKey:"year",domain:[Math.min(...r),Math.max(...r)],label:{fill:i.white,fontSize:"12px",offset:-10,position:"insideBottom",value:t.x_axis_name},name:"X",tick:{fill:i.white,fontSize:"8px"},type:"number"}),e.jsx(kt,{color:"#000",dataKey:"rate",domain:[Math.min(...a),Math.max(...a)],label:{angle:-90,fill:i.white,fontSize:"12px",offset:0,position:"insideLeft",value:t.y_axis_name},name:"Y",tick:{fill:i.white,fontSize:"8px"},type:"number"}),e.jsx(vt,{cursor:{strokeDasharray:"3 3"}}),e.jsx(Xe,{data:o,fill:i.blueTextAccent,line:!0,name:"A scatter",shape:e.jsx(Ss,{})})]})})})},Ts=n(s)`
  width: 100%;
  height: 100%;
`,Te=({amt:t})=>e.jsxs(_s,{align:"center",direction:"row",justify:"flex-start",children:[e.jsx("div",{className:"icon",children:e.jsx(Je,{})}),e.jsx("div",{className:"value","data-testid":"boost-amt",children:t}),e.jsx("div",{className:"text",children:"sat"})]}),_s=n(s)`
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
`,Bs=({stateless:t,node:o})=>e.jsxs(s,{grow:1,shrink:1,children:[e.jsx(zs,{children:t&&e.jsxs(Cs,{children:[e.jsx("div",{className:"icon",children:e.jsx(ye,{})}),e.jsx("div",{className:"title",children:"Description"})]})}),e.jsx(Is,{children:o!=null&&o.description?`"${o==null?void 0:o.description}"`:"..."})]}),Cs=n(s).attrs({direction:"row",align:"center"})`
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
`,zs=n(s).attrs({direction:"row",align:"center",justify:"space-between"})`
  margin-bottom: 18px;
`,Is=n(s)`
  color: ${i.white};
  text-overflow: ellipsis;
  whitespace: nowrap;
  font-family: Barlow;
  letter-spacing: 0.2pt;
  font-size: 15px;
  font-style: normal;
  font-weight: 300;
  line-height: 22px;
`,Rs=n.span`
  color: ${i.white};
  cursor: pointer;
  margin-left: 5px;
  &:hover {
    text-decoration: underline;
  }
`,Es=({stateless:t,node:o})=>{var b;const[r,a]=G(m=>[m.transcriptIsOpen,m.setTranscriptOpen]),[c,d]=h.useState(!1),[l,y]=h.useState(""),[u,x]=h.useState(!1);if(!t&&!r)return null;const k="https://knowledge-graph.sphinx.chat",S=async m=>{try{const w=await fetch(`${k}/node/text/${m}`);if(!w.ok)throw new Error("Network response was not ok");const B=await w.json();y(B.data.text),x(!0)}catch(w){console.error("Error fetching full transcript",w)}},p=()=>{u?x(!1):o!=null&&o.ref_id&&S(o.ref_id)},j=m=>{m!==void 0&&(navigator.clipboard.writeText(m),d(!0))};return e.jsxs(s,{grow:1,shrink:1,children:[e.jsxs(As,{children:[t&&e.jsxs(Ps,{children:[e.jsx("div",{className:"icon",children:e.jsx(ye,{})}),e.jsx("div",{className:"title",children:"Transcript"})]}),o!=null&&o.text?e.jsx(e.Fragment,{children:c?e.jsxs(Ns,{align:"center",direction:"row",justify:"flex-start",children:[e.jsx("div",{className:"icon",children:e.jsx(Rt,{})}),e.jsx("div",{className:"text",children:"Copied"})]}):e.jsx(z,{endIcon:e.jsx(Ze,{}),onPointerDown:()=>j(o==null?void 0:o.text),size:"small",variant:"outlined",children:"Copy"})}):e.jsx("div",{}),!t&&e.jsx(Ms,{onClick:()=>{a(!1)},children:e.jsx(Tt,{fontSize:35})})]}),e.jsxs(Gs,{children:[u?l:`${(b=o==null?void 0:o.text)==null?void 0:b.substring(0,100)}...`,e.jsx(Rs,{onClick:p,children:u?"less":"more"})]})]})},Ps=n(s).attrs({direction:"row",align:"center"})`
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
`,As=n(s).attrs({direction:"row",align:"center",justify:"space-between"})`
  margin-bottom: 18px;
`,Ms=n(s).attrs({})`
  color: ${i.mainBottomIcons};
  cursor: pointer;
  &:hover {
    color: ${i.lightBlue500};
  }
`,Gs=n(s)`
  color: ${i.white};
  text-overflow: ellipsis;
  whitespace: nowrap;
  font-family: Barlow;
  letter-spacing: 0.2pt;
  font-size: 15px;
  font-style: normal;
  font-weight: 300;
  line-height: 22px;
`,Ns=n(s)`
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
`,_e=({node:t})=>{const o=R(b=>b.selectedNode),{link:r,image_url:a,date:c,boost:d,node_type:l,type:y,id:u,show_title:x,episode_title:k,ref_id:S}=t||o||{},[p,j]=h.useState(d||0);return o?e.jsx("div",{style:{overflow:"auto",flex:1,width:"100%"},children:e.jsxs(Ls,{children:[e.jsx(Ys,{boostCount:p||0,date:c||0,episodeTitle:F(k),imageUrl:a,isSelectedView:!0,link:r,onClick:()=>null,showTitle:x,type:l||y}),e.jsx(J,{}),e.jsxs(Ds,{children:[e.jsx(Te,{amt:p}),e.jsx(ge,{content:o,count:p,refId:S,updateCount:j})]}),e.jsx(J,{}),e.jsx(ae,{children:e.jsx(Bs,{node:o,stateless:!0})}),e.jsx(J,{}),e.jsx(ae,{children:e.jsx(Es,{node:o,stateless:!0},u)})]})}):null},Ls=n(s)`
  flex: 1;
  min-height: 100%;
  flex-direction: column;
  border-bottom: 1px solid #101317;
  box-shadow: 0px 5px 6px rgba(0, 0, 0, 0.5);
  z-index: -1;
`,Ds=n(s)`
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
`,Fs=n(s)`
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
`,Os=({selectedNodeShow:t})=>{const[o,r]=R(c=>[c.selectedNode,c.setSelectedNode]),{type:a}=o||{};return e.jsxs(Fs,{p:20,children:[e.jsx(s,{align:"flex-start",children:a&&e.jsx(D,{type:a})}),e.jsx(s,{direction:"row",mb:22,mt:22,children:e.jsx(s,{grow:1,shrink:1,children:e.jsx(T,{className:"episode-title",kind:"heading",children:(o==null?void 0:o.episode_title)||"Unknown"})})}),t?e.jsxs(s,{className:"show",direction:"row",onClick:()=>r(t),children:[e.jsx(I,{size:16,src:(t==null?void 0:t.image_url)||"",type:"show"}),e.jsx(T,{className:"show__title",color:"mainBottomIcons",kind:"regular",children:t==null?void 0:t.show_title})]}):null]})},Ws="Flow 1",Hs=0,Vs=12,Us=15,Qs={g:"LottieFiles Figma v45"},qs=[{ty:4,nm:"Rectangle 4497",sr:1,st:0,op:60,ip:0,hd:!1,ddd:0,bm:0,hasMask:!1,ao:0,ks:{a:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,6],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,6],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,6],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,6],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,3],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,3],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[1.5,6],t:58},{s:[1.5,6],t:59}]},s:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[100,100],t:58},{s:[100,100],t:59}]},sk:{a:0,k:0},p:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[13.5,6],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[13.5,6],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[13.5,6],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[13.5,6],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[13.5,9],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[13.5,9],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[13.5,6],t:58},{s:[13.5,6],t:59}]},r:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[0],t:58},{s:[0],t:59}]},sa:{a:0,k:0},o:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[100],t:58},{s:[100],t:59}]}},shapes:[{ty:"sh",bm:0,hd:!1,nm:"",d:1,ks:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,12],[0,12]]}],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,12],[0,12]]}],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,12],[0,12]]}],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,12],[0,12]]}],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,6],[0,6]]}],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,6],[0,6]]}],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,12],[0,12]]}],t:58},{s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,12],[0,12]]}],t:59}]}},{ty:"fl",bm:0,hd:!1,nm:"",c:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[1,1,1],t:58},{s:[1,1,1],t:59}]},r:1,o:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[100],t:58},{s:[100],t:59}]}}],ind:1},{ty:4,nm:"Rectangle 4497",sr:1,st:0,op:60,ip:0,hd:!1,ddd:0,bm:0,hasMask:!1,ao:0,ks:{a:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,3],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,3],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,6],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,6],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,5],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,5],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[1.5,3],t:58},{s:[1.5,3],t:59}]},s:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[100,100],t:58},{s:[100,100],t:59}]},sk:{a:0,k:0},p:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[7.5,9],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[7.5,9],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[7.5,6],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[7.5,6],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[7.5,7],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[7.5,7],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[7.5,9],t:58},{s:[7.5,9],t:59}]},r:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[0],t:58},{s:[0],t:59}]},sa:{a:0,k:0},o:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[100],t:58},{s:[100],t:59}]}},shapes:[{ty:"sh",bm:0,hd:!1,nm:"",d:1,ks:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,6],[0,6]]}],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,6],[0,6]]}],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,12],[0,12]]}],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,12],[0,12]]}],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,10],[0,10]]}],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,10],[0,10]]}],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,6],[0,6]]}],t:58},{s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,6],[0,6]]}],t:59}]}},{ty:"fl",bm:0,hd:!1,nm:"",c:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[1,1,1],t:58},{s:[1,1,1],t:59}]},r:1,o:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[100],t:58},{s:[100],t:59}]}}],ind:2},{ty:4,nm:"Rectangle 4497",sr:1,st:0,op:60,ip:0,hd:!1,ddd:0,bm:0,hasMask:!1,ao:0,ks:{a:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,6],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,6],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,3],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,3],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,6],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,6],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[1.5,6],t:58},{s:[1.5,6],t:59}]},s:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[100,100],t:58},{s:[100,100],t:59}]},sk:{a:0,k:0},p:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,6],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,6],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,9],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,9],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,6],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,6],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[1.5,6],t:58},{s:[1.5,6],t:59}]},r:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[0],t:58},{s:[0],t:59}]},sa:{a:0,k:0},o:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[100],t:58},{s:[100],t:59}]}},shapes:[{ty:"sh",bm:0,hd:!1,nm:"",d:1,ks:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,12],[0,12]]}],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,12],[0,12]]}],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,6],[0,6]]}],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,6],[0,6]]}],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,12],[0,12]]}],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,12],[0,12]]}],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,12],[0,12]]}],t:58},{s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,12],[0,12]]}],t:59}]}},{ty:"fl",bm:0,hd:!1,nm:"",c:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[1,1,1],t:58},{s:[1,1,1],t:59}]},r:1,o:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[100],t:58},{s:[100],t:59}]}}],ind:3}],Ks="5.7.0",Xs=60,Js=57.6,Zs=0,ei=[],ti={nm:Ws,ddd:Hs,h:Vs,w:Us,meta:Qs,layers:qs,v:Ks,fr:Xs,op:Js,ip:Zs,assets:ei},si=()=>{const t=h.useRef(null);return h.useEffect(()=>{const o=document.getElementById("lottie-timestamp-equalizer");return o&&(t.current=Me.loadAnimation({container:o,animationData:ti,loop:!0,autoplay:!0})),()=>{t.current&&t.current.destroy()}},[]),e.jsx("div",{id:"lottie-timestamp-equalizer",style:{width:"18px",height:"18px"}})},ii=n(s).attrs(()=>({direction:"row"}))`
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
`,oi=({onClick:t,timestamp:o,isSelected:r,setOpenClip:a})=>e.jsxs(ii,{align:"center","data-testid":"wrapper",direction:"row",isSelected:r,justify:"flex-start",onClick:t,px:20,py:20,children:[e.jsxs("div",{children:[e.jsx(de,{className:"play-pause",children:r?e.jsx(si,{}):e.jsx(et,{})}),!1]}),e.jsxs(ni,{align:"flex-start",direction:"column",justify:"center",children:[o.timestamp&&e.jsx("span",{className:"timestamp",children:tt(o.timestamp)}),e.jsx("span",{className:"title",children:F(o.show_title)})]}),e.jsx("div",{className:"info",children:e.jsx(s,{"data-testid":"info-icon-wrapper",onClick:()=>a(o),pt:4,children:e.jsx(Et,{})})})]}),ni=n(s)`
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
`,ri=n(s)`
  overflow: scroll;

  &::-webkit-scrollbar {
    width: 1px;
    height: 4px;
  }

  &::-webkit-scrollbar-thumb {
    width: 1px;
    height: 4px;
  }
`,ai=()=>{const t=E(),o=ke(),[r,a]=h.useState(null),[c,d]=h.useState(null),[l,y,u]=W(p=>[p.playingNode,p.setPlayingNodeLink,p.setPlayingTime]),x=h.useMemo(()=>me((o==null?void 0:o.nodes)||[],t),[o==null?void 0:o.nodes,t]),k=h.useMemo(()=>o==null?void 0:o.nodes.find(p=>p.node_type==="show"&&p.show_title===(t==null?void 0:t.show_title)),[o==null?void 0:o.nodes,t]),S=h.useCallback(p=>{var j;l&&p.link&&(l==null?void 0:l.link)!==p.link&&y(p.link),u(pe(((j=p==null?void 0:p.timestamp)==null?void 0:j.split("-")[0])||"00:00:01")),d(p)},[l,y,d,u]);return h.useEffect(()=>{x!=null&&x.length&&!x.some(p=>p.ref_id===(c==null?void 0:c.ref_id))&&S(x[0])},[x,c,S]),t?e.jsx("div",{style:{overflow:"auto",flex:1,width:"100%"},children:e.jsxs(ci,{children:[r&&e.jsx(xi,{className:"slide-me",direction:"up",in:!!r,children:e.jsxs(li,{children:[e.jsx(s,{className:"close-info",onClick:()=>a(null),children:e.jsx(mt,{})}),r&&e.jsx(_e,{node:r})]})}),e.jsx(Os,{selectedNodeShow:k}),!!(x!=null&&x.length)&&e.jsx(ri,{children:e.jsx(s,{pb:20,children:x==null?void 0:x.map((p,j)=>e.jsx(oi,{isSelected:(c==null?void 0:c.ref_id)===p.ref_id,onClick:()=>S(p),setOpenClip:a,timestamp:p},`${p.episode_title}_${j}`))})})]})}):null},li=n(s)`
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
`,ci=n(s)`
  position: relative;
  flex: 1;
  min-height: 100%;
  flex-direction: column;
  border-bottom: 1px solid #101317;
  box-shadow: 0px 5px 6px rgba(0, 0, 0, 0.5);
`,xi=n(ie)`
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
`,di=()=>{const t=E(),o=t==null?void 0:t.name;return e.jsxs(s,{direction:"column",px:24,py:16,children:[e.jsx(I,{"data-testid":"person-image",size:80,src:(t==null?void 0:t.source_link)||"",type:"image"}),e.jsx(s,{py:20,children:e.jsx(T,{color:"primaryText1",kind:"bigHeading",children:o})})]})},pi=()=>{const{sender_pic:t,sender_alias:o,date:r,message_content:a}=E()||{};return e.jsxs(s,{direction:"row",children:[e.jsx(yi,{src:t}),e.jsxs(hi,{children:[e.jsxs(s,{align:"flex-end",className:"info",direction:"row",children:[o&&e.jsx("span",{className:"info__name",children:o}),r&&e.jsx("span",{className:"info__date",children:r})]}),a&&e.jsx(ui,{dangerouslySetInnerHTML:{__html:st(a)}})]})]})},hi=n(s)`
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
`,ui=n.div`
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
`,yi=n.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: green;
`,fi=()=>{const t=E(),o=(t==null?void 0:t.name)||(t==null?void 0:t.label);return e.jsxs(s,{direction:"row",px:24,py:16,children:[e.jsx(I,{"data-testid":"person-image",size:80,src:(t==null?void 0:t.image_url)||"person_placeholder_img.png",type:"person"}),e.jsx(s,{p:20,children:e.jsx(T,{color:"primaryText1",kind:"bigHeading",children:o})})]})},gi=({node:t,onClick:o})=>{var c,d;const r=pe(t.timestamp||""),a=Math.ceil(r/60);return e.jsx(mi,{onClick:o,p:24,children:e.jsxs("div",{children:[e.jsxs(s,{align:"flex-start",direction:"row",justify:"flex-start",children:[e.jsx(s,{align:"center",children:e.jsx(I,{size:64,src:(t==null?void 0:t.image_url)||"",type:(t==null?void 0:t.node_type)||"episode"})}),e.jsxs("div",{className:"content",children:[e.jsxs(s,{align:"center",direction:"row",children:[e.jsx(D,{type:"episode"}),a>0&&e.jsxs("div",{className:"subtitle",children:[a," ",a===1?"min":"mins"]})]}),e.jsx(T,{className:"title",color:"primaryText1",kind:"regular",children:t.episode_title})]})]}),e.jsxs(s,{align:"center",direction:"row",justify:"flex-end",pt:4,children:[e.jsxs(T,{className:"clipText",color:"mainBottomIcons",kind:"regular",children:[((c=t==null?void 0:t.children)==null?void 0:c.length)||0," ",((d=t==null?void 0:t.children)==null?void 0:d.length)===1?"Clip":"Clips"]}),e.jsx(it,{style:{color:i.white}})]})]})})},mi=n(s).attrs({})`
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
`,wi=n(s)`
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
`,ji=n(s)`
  flex-direction: column;
  border-bottom: 1px solid #101317;
  z-index: 0;
  padding: 42px 20px;
  background-color: #1c1e26;
`,bi=n(T)`
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
`,ki=()=>{const[t,o]=R(l=>[l.selectedNode,l.setSelectedNode]),r=ke(),[a,c]=h.useState([]),d=h.useMemo(()=>{var u;const l=new Set,y={};if((u=t==null?void 0:t.children)!=null&&u.length){t.children.forEach((k,S)=>{var b,m,w,B;const p=me((r==null?void 0:r.nodes)||[],t)||[],j=r==null?void 0:r.nodes.find(f=>f.ref_id===k);if(j){j.timestamp=(b=p[0])==null?void 0:b.timestamp;const f=(B=(w=(m=p[S])==null?void 0:m.hosts)==null?void 0:w[0])==null?void 0:B.name;f&&l.add(f),y[k]=j,y[k]=j}});const x=Array.from(l);c(x)}return Object.values(y).filter(x=>x.node_type==="episode").sort((x,k)=>(k.weight||0)-(x.weight||0))},[r==null?void 0:r.nodes,t]);return e.jsxs(wi,{children:[e.jsx(ji,{children:e.jsxs(s,{direction:"row",children:[e.jsx(s,{pr:24,children:e.jsx(I,{size:80,src:(t==null?void 0:t.image_url)||"audio_default.svg",type:"show"})}),e.jsx(s,{direction:"column",children:e.jsxs(s,{direction:"column",grow:1,justify:"space-between",children:[e.jsxs(s,{align:"center",direction:"row",justify:"flex-start",mb:16,children:[e.jsx(D,{type:"show"})," ",e.jsxs("div",{className:"subtitle",children:["by ",a.join(", ")||(t==null?void 0:t.show_title)]})]}),e.jsx(bi,{kind:"bigHeading",title:(t==null?void 0:t.show_title)||"Unknown",children:(t==null?void 0:t.show_title)||"Unknown"})]})})]})}),e.jsxs(s,{direction:"column",children:[e.jsx(s,{p:24,children:e.jsx(T,{className:"relatedHeader",kind:"medium",children:"Related Episodes"})}),d.map(l=>e.jsx(gi,{node:l,onClick:()=>o(l)},l.ref_id))]})]})},vi=()=>{const t=E();return e.jsx(s,{align:"center",justify:"center",children:e.jsx(T,{color:"primaryText1",kind:"hugeHeading",children:t==null?void 0:t.label})})},Si=()=>{const t=E(),{date:o,boost:r,text:a,name:c,verified:d,profile_picture:l,twitter_handle:y,ref_id:u}=t||{},x=(t==null?void 0:t.tweet_id)||"",[k,S]=h.useState(r||0);return t&&e.jsxs(e.Fragment,{children:[e.jsxs(s,{direction:"column",p:24,children:[e.jsxs(s,{align:"center",direction:"row",pr:16,children:[e.jsx($i,{children:e.jsx(I,{rounded:!0,size:58,src:l||"",type:"person"})}),e.jsxs(s,{children:[e.jsxs(Ti,{align:"center",direction:"row",children:[c,d&&e.jsx("div",{className:"verification",children:e.jsx("img",{alt:"verified",src:"verified_twitter.svg"})})]}),y&&e.jsxs(_i,{children:["@",y]})]})]}),e.jsxs(s,{grow:1,shrink:1,children:[e.jsx(Bi,{"data-testid":"episode-description",children:a}),e.jsx(s,{direction:"row",justify:"flex-start",children:!!o&&e.jsx(V,{children:ee.unix(o).format("ll")})})]}),e.jsx(s,{align:"stretch",mt:22,children:e.jsx("a",{href:`https://twitter.com/Interior/status/${x}?open=system`,children:e.jsx(zi,{endIcon:e.jsx(se,{}),children:"View Tweet "})})})]}),e.jsx(Ci,{}),e.jsxs(s,{direction:"row",justify:"space-between",pt:14,px:24,children:[e.jsx(Te,{amt:k}),e.jsx(ge,{content:t,count:k,refId:u,updateCount:S})]})]})},$i=n(s)`
  img {
    width: 64px;
    height: 64px
    border-radius: 50%;
    object-fit: cover;
  }
  margin-right: 16px;
`,Ti=n(s)`
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
`,_i=n(s)`
  color: ${i.GRAY7};
  font-family: Barlow;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`,Bi=n(s)`
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
`,Ci=n(fe)`
  margin: 0 0 6px 0;
  opacity: 75%;
`,zi=n(z)`
  width: 100%;
`,Ii=()=>{var l,y;const[t,o]=h.useState(!1),r=E(),a=!!(r!=null&&r.source_link),c=h.useRef(null),d=u=>{u.stopPropagation(),u.currentTarget.blur(),o(!t)};return h.useEffect(()=>{var u,x;t?(u=c.current)==null||u.play():(x=c.current)==null||x.pause()},[t]),e.jsxs(s,{align:"flex-start",basis:"100%",direction:"column",grow:1,justify:"center",pt:a?62:0,shrink:1,children:[a&&e.jsxs(Ri,{children:[e.jsx(ue,{color:i.GRAY6}),e.jsx(Ai,{children:r==null?void 0:r.source_link}),e.jsx(Ei,{href:r==null?void 0:r.source_link,onClick:u=>u.stopPropagation(),target:"_blank",children:e.jsx(se,{})})]}),(l=r==null?void 0:r.audio)!=null&&l.length?e.jsxs(s,{justify:"flex-start",p:12,children:[e.jsx(z,{onClick:u=>d(u),startIcon:t?e.jsx(H,{}):e.jsx(te,{}),children:t?"Pause":"Play"}),e.jsx(Mi,{ref:c,src:((y=r.audio[0])==null?void 0:y.link)||"",children:e.jsx("track",{kind:"captions"})})]}):null,e.jsx(Pi,{grow:1,justify:"flex-start",p:12,shrink:1,children:e.jsx(T,{color:"primaryText1",kind:"regular",children:r==null?void 0:r.text})})]})},Ri=n(s)`
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
`,Ei=n.a`
  color: ${i.GRAY6};
  font-size: 16px;
  height: 16px;
  display: flex;
  gap: 5px;
  align-items: center;
`,Pi=n(s)`
  overflow: auto;
`,Ai=n(T)`
  max-width: 150px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Mi=n.audio`
  height: 0;
  width: 0;
`,Gi=["clip","twitter_space","youtube","episode","podcast"],Ni=()=>{const t=E(),[o]=R(a=>[a.showTeachMe]),[r]=W(a=>[a.setPlayingNode]);if(h.useEffect(()=>{Gi.includes((t==null?void 0:t.node_type)||"")&&r(t)},[r,t]),o)return e.jsx(ks,{});switch(t==null?void 0:t.node_type){case"guest":case"person":return e.jsx(fi,{});case"data_series":return e.jsx($s,{});case"tribe_message":return e.jsx(pi,{});case"tweet":return e.jsx(Si,{});case"topic":return e.jsx(vi,{});case"show":return e.jsx(ki,{});case"youtube":case"podcast":case"clip":case"twitter_space":return e.jsx(_e,{});case"document":return e.jsx(Ii,{});case"episode":return e.jsx(ai,{},t.ref_id);case"image":return e.jsx(di,{});default:return null}},Li=h.memo(Ni),Di=({isPlaying:t,setIsPlaying:o,playingTime:r,duration:a,handleProgressChange:c,handleVolumeChange:d,onFullScreenClick:l,showToolbar:y})=>e.jsxs(s,{children:[!y&&e.jsx(Hi,{"aria-label":"Small",max:a,onChange:c,size:"small",value:r}),e.jsxs(Yi,{align:"center",direction:"row",showToolbar:y,children:[e.jsx(Fi,{onClick:o,size:"small",children:t?e.jsx(H,{}):e.jsx(te,{})}),e.jsxs(Vi,{direction:"row",children:[e.jsx("span",{children:oe(r)}),e.jsx("span",{className:"separator",children:"/"}),e.jsx("span",{className:"duration",children:oe(a)})]}),e.jsxs(Oi,{direction:"row",px:9,children:[e.jsx(we,{className:"volume-slider",defaultValue:.5,max:1,min:0,onChange:d,size:"small",step:.1}),e.jsx(ot,{})]}),e.jsx(Wi,{onClick:()=>l(),children:y?e.jsx(rt,{}):e.jsx(nt,{})})]})]}),Yi=n(s)`
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
`,Fi=n(de)`
  && {
    font-size: 36px;
    padding: 2px;
    margin-left: 8px;
  }
`,Oi=n(s)`
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
`,Wi=n(s)`
  cursor: pointer;
  padding: 8px;
  font-size: 32px;
  color: #d9d9d9;
`,Hi=n(we)`
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
`,Vi=n(s)`
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
`,Ui=({hidden:t})=>{const o=h.useRef(null),r=h.useRef(null),[a,c]=h.useState(!1),[d,l]=h.useState(!1),[y,u]=h.useState("ready"),[x,k,S,p,j,b,m,w,B,f,C]=W($=>[$.isPlaying,$.playingTime,$.duration,$.setIsPlaying,$.setPlayingTime,$.setDuration,$.playingNode,$.volume,$.setVolume,$.setHasError,$.resetPlayer]);h.useEffect(()=>()=>C(),[C]);const P=()=>{p(!x)},g=()=>{p(!0)},v=()=>{p(!1)},A=($,_)=>{const L=Array.isArray(_)?_[0]:_;o.current&&(o.current.seekTo(L),j(L))},N=($,_)=>{const L=Array.isArray(_)?_[0]:_;B(L)},U=()=>{f(!0),u("error")},Q=$=>{const _=$.playedSeconds;j(_)},q=()=>{if(o.current){u("ready");const $=o.current.getDuration();b($)}},K=()=>{r.current&&(document.fullscreenElement?(document.exitFullscreen(),c(!1)):r.current.requestFullscreen().then(()=>{document.addEventListener("fullscreenchange",M)}))},M=()=>{c(!!document.fullscreenElement),document.removeEventListener("fullscreenchange",M)};return h.useEffect(()=>()=>{document.removeEventListener("fullscreenchange",M)}),h.useEffect(()=>{const $=_=>{if(a){const L=window.screen.height,Ce=_.clientY,ze=L-Ce;l(ze<=50)}};return document.addEventListener("mousemove",$),()=>{document.removeEventListener("mousemove",$)}},[a,d]),h.useEffect(()=>{const $=_=>{a&&_.key==="Escape"&&(_.preventDefault(),_.stopPropagation())};return document.addEventListener("fullscreenchange",M),document.addEventListener("keydown",$),()=>{document.removeEventListener("fullscreenchange",M),document.removeEventListener("keydown",$)}}),m!=null&&m.link?e.jsxs(Qi,{ref:r,hidden:t,children:[e.jsx(qi,{children:e.jsx(I,{size:120,src:(m==null?void 0:m.image_url)||"",type:"clip"})}),e.jsx(at,{ref:o,controls:!1,height:a?window.screen.height:"200px",onBuffer:()=>u("buffering"),onBufferEnd:()=>u("ready"),onError:U,onPause:v,onPlay:g,onProgress:Q,onReady:q,playing:x,url:(m==null?void 0:m.link)||"",volume:w,width:"100%"}),y==="error"?e.jsx(Xi,{className:"error-wrapper",children:"Error happened, please try later"}):null,y==="ready"?e.jsx(Di,{duration:S,handleProgressChange:A,handleVolumeChange:N,isPlaying:x,onFullScreenClick:K,playingTime:k,setIsPlaying:P,showToolbar:d&&a}):null,y==="buffering"?e.jsx(Ki,{children:e.jsx(O,{color:i.lightGray})}):null]}):null},Qi=n(s)`
  border-bottom: 1px solid rgba(0, 0, 0, 0.25);
  background: rgba(0, 0, 0, 0.2);
  position: relative;
  border-top-right-radius: 16px;
  border-top-left-radius: 16px;
  overflow: hidden;
  height: ${t=>t.hidden?"0px":"auto"};
`,qi=n(s)`
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translateX(-50%);
  z-index: -1;
`,Ki=n(s)`
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
`,Xi=n(s)`
  height: 60px;
  padding: 12px 16px;
  color: ${i.primaryRed};
`,Ji=h.memo(Ui),Zi=({open:t})=>{const[o,r,a]=R(y=>[y.setSelectedNode,y.setTeachMe,y.showTeachMe]),c=E(),[d]=G(y=>[y.setSidebarOpen]),[l]=W(y=>[y.playingNode]);return e.jsx(ie,{direction:"right",in:t,style:{width:a?"700px":"",position:t?"relative":"absolute"},children:e.jsxs(eo,{children:[e.jsx(Ji,{hidden:(c==null?void 0:c.ref_id)!==(l==null?void 0:l.ref_id)},l==null?void 0:l.ref_id),e.jsx(so,{children:e.jsx(Li,{})}),e.jsx(to,{onClick:()=>{o(null),r(!1)},children:e.jsx(lt,{})}),e.jsx(io,{onClick:()=>{d(!1)},children:e.jsx(je,{})})]})})},eo=n(s)(({theme:t})=>({position:"relative",background:i.BG1,width:"100%",margin:"64px auto 20px 10px",borderRadius:"16px",zIndex:29,[t.breakpoints.up("sm")]:{width:"390px"}})),to=n(s)`
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
`,so=n(s)`
  flex: 1 1 100%;
`,io=n(s).attrs({align:"center",justify:"center",p:8})(({theme:t})=>({backgroundColor:i.BG1_NORMAL,cursor:"pointer",transitionDuration:"0.2s",position:"absolute",right:"0px",top:"50%",zIndex:1,width:"24px",height:"48px",transform:"translateY(-50%)",borderRadius:"0px 6px 6px 0px",boxShadow:"2px 0px 6px 0px rgba(0, 0, 0, 0.25) inset",color:i.white,[t.breakpoints.up("sm")]:{left:"100%"},"&:hover":{backgroundColor:i.BG1_HOVER},"&:active":{backgroundColor:i.BG1_PRESS,color:i.GRAY6}})),oo=()=>{const t=G(o=>o.setSidebarOpen);return e.jsx(no,{onClick:()=>{t(!0)},children:e.jsx(ct,{})})},no=n(s).attrs({align:"center",justify:"center",p:8})(({theme:t})=>({backgroundColor:i.BG1_NORMAL,cursor:"pointer",transitionDuration:"0.2s",position:"absolute",top:"50%",zIndex:1,width:"24px",height:"48px",transform:"translateY(-50%)",borderRadius:"0px 6px 6px 0px",boxShadow:"2px 0px 6px 0px rgba(0, 0, 0, 0.25) inset",color:i.white,[t.breakpoints.up("sm")]:{left:"64px"},"&:hover":{backgroundColor:i.BG1_HOVER},"&:active":{backgroundColor:i.BG1_PRESS,color:i.GRAY6}})),ro=({trend:t,onClose:o,selectTrending:r})=>{const[a,c]=h.useState(!1),{close:d}=Z("briefDescription"),l=h.useRef(null),y=()=>{r(t.topic)},u=h.useCallback(()=>{o(),d()},[o,d]),x=()=>{l.current&&(a?l.current.pause():l.current.play(),c(!a)),c(!a)};return h.useEffect(()=>(window.addEventListener("keydown",u),()=>{window.removeEventListener("keydown",u)}),[u]),e.jsxs(At,{id:"briefDescription",kind:"regular",onClose:u,children:[t.audio_EN?e.jsxs(e.Fragment,{children:[e.jsxs(s,{direction:"row",justify:"flex-start",mb:22,children:[e.jsx(z,{onClick:x,size:"small",startIcon:a?e.jsx(H,{}):e.jsx(xt,{}),style:{marginRight:"10px"},children:"Listen"}),e.jsx(z,{onClick:y,size:"small",startIcon:e.jsx(Ge,{}),children:"Learn More"})]}),e.jsx(xo,{ref:l,src:t.audio_EN,children:e.jsx("track",{kind:"captions"})})]}):null,e.jsx(co,{children:t.tldr_topic??t.topic}),e.jsx(ao,{children:e.jsx(s,{children:e.jsx(lo,{children:t.tldr&&e.jsx(dt,{children:t.tldr})})})})]})},ao=n.div`
  max-height: 300px;
  overflow-y: auto;
  margin: 8px 0;
`,lo=n(T)`
  font-size: 18px;
  font-weight: 400;
  font-family: 'Barlow';
  * {
    all: revert;
  }
`,co=n(T)`
  font-weight: 600;
  font-size: 20px;
`,xo=n.audio`
  height: 0;
  width: 0;
`,po=["Drivechain","Ordinals","L402","Nostr","AI"],ho=({onSubmit:t})=>{var P;const{open:o}=Z("addContent"),[r,a]=h.useState(!1),[c,d]=h.useState(null),l=h.useRef(null),[y,u]=h.useState(0),[x,k]=h.useState(!1),{open:S}=Z("briefDescription"),[p,j]=R(g=>[g.trendingTopics,g.setTrendingTopics]),{setValue:b}=he();h.useEffect(()=>{const g=async()=>{a(!0);try{const v=await Ne();v.length&&Array.isArray(v)&&j(v)}catch{j(po.map(A=>({topic:A,count:0})))}finally{a(!1)}};p.length||g()},[p,j]);const m=g=>{b("search",g),t==null||t()},w=(g,v)=>{g.stopPropagation(),g.currentTarget.blur(),v!=null&&v.tldr&&(d(v),S())},B=()=>{d(null)},f=g=>{g.stopPropagation(),g.currentTarget.blur(),k(!x)};h.useEffect(()=>{var g,v;x?(g=l.current)==null||g.play():(v=l.current)==null||v.pause()},[y,x]);const C=()=>{u(g=>{var A,N;let v=(g+1)%p.length;for(;v!==g&&!((A=p[v])!=null&&A.audio_EN);)v=(v+1)%p.length;return v===g?(k(!1),v):((N=l.current)==null||N.load(),v===0&&(k(!1),u(0)),v)})};return e.jsxs(yo,{children:[e.jsxs("div",{children:[e.jsxs("div",{className:"heading-container",children:[e.jsxs("div",{className:"heading",children:[e.jsx("span",{className:"heading__title",children:"Trending Topics"}),e.jsx("span",{className:"heading__icon",children:r?e.jsx(O,{color:i.PRIMARY_BLUE,size:16}):e.jsx(pt,{})})]}),ht(p)?e.jsxs("div",{children:[e.jsx(z,{onClick:g=>f(g),startIcon:x?e.jsx(H,{}):e.jsx(te,{}),children:x?"Pause":"Play All"}),e.jsx(wo,{ref:l,onEnded:C,src:(P=p[y])==null?void 0:P.audio_EN,children:e.jsx("track",{kind:"captions"})})]}):null]}),p.length===0&&!r?e.jsxs("div",{className:"Trendingwrapper",children:[e.jsx(go,{children:"No new trending topics in the last 24 hours"}),e.jsx(mo,{color:"secondary",onClick:o,size:"medium",startIcon:e.jsx(Pt,{}),sx:{alignSelf:"flex-end",m:"0 36px 16px 0"},variant:"contained",children:"Add Content"})]}):e.jsx("ul",{className:"list",children:r?e.jsxs("div",{children:[e.jsx(O,{color:i.PRIMARY_BLUE,size:16}),[...Array(5)].map((g,v)=>e.jsx(fo,{animation:"wave","data-testid":"loading-skeleton",height:47,variant:"rectangular",width:382},v))]}):e.jsx(e.Fragment,{children:p.map(g=>e.jsxs(s,{align:"center",className:"list-item",direction:"row",justify:"space-between",onClick:()=>m(g.topic),children:[e.jsxs(uo,{children:[" #",ut(g)]}),g.tldr&&e.jsx(z,{onClick:v=>w(v,g),children:"TLDR"})]},g.topic))})})]}),c&&e.jsx(ro,{onClose:B,selectTrending:m,trend:c})]})},uo=n.div`
  width: 300px;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  letter-spacing: 0.3pt;
`,yo=n(s)`
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
`,fo=n(ve)`
  && {
    background: rgba(0, 0, 0, 0.15);
  }
`,go=n.p`
  color: ${i.GRAY6};
  margin-bottom: 20px;
`,mo=n(z)``,wo=n.audio`
  height: 0;
  width: 0;
`,jo=390,bo=h.forwardRef(({onSubmit:t,subViewOpen:o},r)=>{const[a,c,d]=R(b=>[b.isFetching,b.setTeachMe,b.setSidebarFilter]),l=xe(),[y,u,x]=G(b=>[b.setSidebarOpen,b.currentSearch,b.clearSearch]),{setValue:k}=he(),S=h.useRef(null),[p,j]=h.useState(!1);return h.useEffect(()=>{const b=S.current;if(!b)return;const m=()=>{j((b==null?void 0:b.scrollTop)>0)};b.addEventListener("scroll",m)},[]),e.jsxs(So,{ref:r,id:"sidebar-wrapper",children:[e.jsx(zo,{}),e.jsxs(Be,{className:Le({"has-shadow":p}),children:[e.jsxs($o,{children:[e.jsx(yt,{onSubmit:t}),e.jsx(_o,{onClick:()=>{if(u){k("search",""),x(),d("all");return}t==null||t()},children:a?e.jsx(O,{color:i.SECONDARY_BLUE,size:"20"}):e.jsx(e.Fragment,{children:u?e.jsx(De,{}):e.jsx(wt,{})})})]}),u&&e.jsx(To,{children:a?e.jsx(ft,{}):e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"left",children:[e.jsx("span",{className:"count",children:l.length}),e.jsx("span",{className:"label",children:" results"})]}),e.jsx("div",{className:"right",style:{alignItems:"center"},children:e.jsx(gt,{})})]})})]}),!o&&e.jsx(Bo,{onClick:()=>{y(!1),c(!1)},children:e.jsx(je,{})}),e.jsxs(Co,{ref:S,children:[!u&&e.jsx(Io,{children:e.jsx(ho,{onSubmit:t})}),e.jsx(s,{children:a?e.jsx(ls,{}):e.jsx(ns,{isSearchResult:!!u})})]})]})}),ko=["topic","person","guest","event","organization","place","project","software"],vo=({onSubmit:t})=>{const o=G(d=>d.sidebarIsOpen),r=E(),a=!!r&&o&&!ko.includes(r.node_type),[c]=R(d=>[d.showTeachMe]);return e.jsxs(e.Fragment,{children:[e.jsx(ie,{direction:"right",in:o,mountOnEnter:!0,unmountOnExit:!0,children:e.jsx(bo,{onSubmit:t,subViewOpen:a})}),e.jsx(Zi,{open:a||!!c}),!o&&e.jsx(oo,{})]})},So=n(s)(({theme:t})=>({position:"relative",background:i.BG1,height:"100vh",width:"100%",zIndex:30,[t.breakpoints.up("sm")]:{width:jo}})),Be=n(s).attrs({direction:"column",justify:"center",align:"stretch"})(({theme:t})=>({padding:t.spacing(3.75,2),[t.breakpoints.up("sm")]:{padding:"12px"},"&.has-shadow":{borderBottom:"1px solid rgba(0, 0, 0, 0.25)",background:i.BG1,boxShadow:"0px 1px 6px 0px rgba(0, 0, 0, 0.20)"}})),$o=n(s).attrs({direction:"row",justify:"center",align:"center"})`
  flex-grow: 1;
`,To=n(s).attrs({direction:"row",justify:"space-between",align:"center"})`
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
`,_o=n(s).attrs({align:"center",justify:"center",p:5})`
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
`,Bo=n(s).attrs({align:"center",justify:"center",p:8})(({theme:t})=>({backgroundColor:i.BG1_NORMAL,cursor:"pointer",transitionDuration:"0.2s",position:"absolute",right:"0px",top:"50%",zIndex:1,width:"24px",height:"48px",transform:"translateY(-50%)",borderRadius:"0px 6px 6px 0px",boxShadow:"2px 0px 6px 0px rgba(0, 0, 0, 0.25) inset",color:i.white,[t.breakpoints.up("sm")]:{left:"100%"},"&:hover":{backgroundColor:i.BG1_HOVER},"&:active":{backgroundColor:i.BG1_PRESS,color:i.GRAY6}})),Co=n(s)(()=>({overflow:"auto",flex:1,width:"100%"})),zo=n(s)`
  height: 64px;
  background: ${i.BG2};
`,Io=n(s)`
  padding: 0;
  margin-bottom: 36px;
  margin-top: 20px;
`;vo.displayName="Sidebar";export{jo as MENU_WIDTH,vo as SideBar};
