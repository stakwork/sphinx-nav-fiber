import{f as n,h as i,F as s,i as I,r as f,k as A,x as be,j as e,T as k,o as ke,aO as ve,P as $e,a4 as _,O as L,a2 as Se,l as Te}from"./index-b17e6e7f.js";import{d as _e,B as R,A as z,I as Q,f as G,g as q,n as U,P as K,C as X,i as ze,b as Be,S as Ce}from"./react-toastify.esm-ac6bd257.js";import{S as Ie}from"./index-62fced0f.js";import{a as Pe}from"./index-e5e383e2.js";import{M as Ae,R as Ee,a as Me,S as Re,b as Ge,m as De,N as J,G as Z,L as H,B as Fe,H as Ye,C as Le,D as ee,c as te,d as He,f as Oe,g as se,e as We,P as Ve,h as oe,s as W,V as Ne,F as Qe,E as qe,i as Ue,j as Ke,k as Xe,l as Je}from"./ChevronRightIcon-89bde83e.js";import{o as ie,P as re,n as Ze,X as et,Y as tt,T as st,D as ot,f as ne,S as O,q as ae}from"./generateCategoricalChart-435279e6.js";import{f as it,c as rt,g as nt,h as at}from"./index.esm-de2ad175.js";import{T as lt,F as ct}from"./Popover-bcd53c70.js";import{I as xt,S as dt,O as pt,T as M}from"./index-b0a49808.js";import{C as ht}from"./ChevronDownIcon-3b7a3112.js";import{C as yt}from"./CheckIcon-7c4c0597.js";import{I as ut}from"./InfoIcon-eed706a9.js";import"./useSlotProps-ddc77366.js";const ft=48,gt=8,mt={PaperProps:{style:{maxHeight:ft*4.5+gt,width:250}}},jt=["Beginner","Intermediate","Advanced","Expert"],wt=()=>{const t=I(p=>p.data),[o,r]=f.useState(""),[a,l]=f.useState("Beginner"),d=A(p=>p.currentSearch),c=_e(),[h]=be(p=>[p.setBudget]),[u,x,g,b,y]=ie(p=>[p.askedQuestions,p.askedQuestionsAnswers,p.setAskedQuestion,p.setAskedQuestionAnswer,p.hasQuestionInProgress]),w=f.useCallback(p=>{b(p.answer)},[b]);f.useEffect(()=>{c&&w&&c.on("askquestionhook",w)},[w,c]);const S=async()=>{o&&(g(o),r(""));try{const p=t==null?void 0:t.nodes.filter(C=>C.text),T=p==null?void 0:p.slice(0,5),F=(T!=null&&T.length?T.map(C=>C.text).join(" "):"").substring(0,2500).replace(/[?&=+/#]/g,C=>`\\${C}`);d&&(await ke.enable(),await ve({expertise_level:a,question_text:o,search_term:d,transcripts:F},h),await $e(h))}catch(p){console.error(p)}},m=a&&o.trim()&&!y,v=p=>{l(p.target.value)},B=async p=>{if(y){p.preventDefault();return}p.keyCode===13&&p.shiftKey===!1&&m&&(p.preventDefault(),S())};return e.jsxs(bt,{children:[e.jsx(s,{children:e.jsx(s,{children:e.jsxs(ct,{component:"div",children:[e.jsx(vt,{id:"select-label",size:"small",children:"Expertise level"}),e.jsx($t,{id:"demo-multiple-name",input:e.jsx(pt,{label:"Expertise level"}),labelId:"select-label",MenuProps:mt,onChange:v,size:"small",value:a,children:jt.map(p=>e.jsx(Ae,{component:"li",value:p,children:p},p))})]})})}),e.jsx(_t,{children:u==null?void 0:u.map((p,T)=>e.jsxs(s,{className:"response",py:12,children:[e.jsx(k,{kind:"medium",children:p}),e.jsx(s,{py:12,children:(x==null?void 0:x[T])!==void 0?e.jsx(k,{color:"unreadMsgText",children:x[T]}):e.jsxs(s,{align:"center",py:12,children:[e.jsx(s,{align:"center",py:12,children:e.jsx(re,{color:i.white})}),e.jsx(s,{align:"center",py:12,children:e.jsx(k,{children:"Generating response"})})]})})]},p))}),e.jsxs(St,{onKeyDown:B,py:12,tabIndex:-1,children:[e.jsx(kt,{disabled:y,onChange:p=>r(p.target.value),placeholder:"Enter your question",value:o}),e.jsx(Tt,{children:e.jsx(it,{color:m?i.white:i.gray300,size:"18"})})]})]})},bt=n.div`
  margin-top: 20px;
`,kt=n(lt)`
  background: ${i.inputBg1};
  max-width: 100%;
  color: ${i.secondaryText4};
  padding: 16px 8px;
  border: none;
  outline: none;
`,vt=n(xt)`
  &.MuiFormLabel-root.MuiInputLabel-root {
    color: ${i.secondaryText4};
  }
`,$t=n(dt)`
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
`,St=n(s)`
  position: relative;
`,Tt=n(s)`
  position: absolute;
  bottom: 20px;
  right: 20px;
  transform: rotate(-45deg);
`,_t=n(s)`
  flex-shrink: 1;
  overflow: auto;

  .response {
    border-bottom: 1px solid ${i.divider2};
  }
`,V=({text:t})=>e.jsxs(s,{align:"center",justify:"center",py:12,children:[e.jsx(s,{align:"center",py:12,children:e.jsx(re,{color:i.white})}),e.jsx(s,{align:"center",py:12,children:e.jsx(k,{children:t})})]}),zt=()=>{const[t,o,r,a]=ie(d=>[d.teachMeAnswer,d.hasTeachingInProgress,d.instgraphAnswser,d.hasInstagraphInProgress]),l=!a&&!!(r!=null&&r.edges)&&!!(r!=null&&r.nodes);return e.jsxs(e.Fragment,{children:[l?e.jsx(Ee,{edges:r==null?void 0:r.edges,nodes:r==null?void 0:r.nodes}):e.jsx(V,{text:"Generating instagraph"}),o?e.jsx(V,{text:"Generating tutorial"}):e.jsxs(e.Fragment,{children:[e.jsx(Bt,{children:e.jsx(k,{children:t})}),e.jsx(wt,{})]})]})};n(R)``;const Bt=n(s)`
  padding-left: 10px;
  padding-right: 10px;
`,Ct=({cx:t,cy:o})=>e.jsx(ot,{cx:t,cy:o,fill:i.blueTextAccent,r:2}),It=()=>{const t=_(),o=[...(t==null?void 0:t.data)||[]].sort((l,d)=>(l.year||0)-(d.year||0)),r=o.map(l=>l.year).filter(l=>l),a=o.map(l=>l.rate).filter(l=>l);return e.jsx(Pt,{direction:"column",px:24,py:16,children:e.jsx(Me,{height:"100%",width:"100%",children:e.jsxs(Re,{margin:{bottom:20,left:20,right:20,top:20},children:[e.jsx(Ze,{stroke:"#f5f5f5"}),e.jsx(et,{dataKey:"year",domain:[Math.min(...r),Math.max(...r)],label:{fill:i.white,fontSize:"12px",offset:-10,position:"insideBottom",value:t.x_axis_name},name:"X",tick:{fill:i.white,fontSize:"8px"},type:"number"}),e.jsx(tt,{color:"#000",dataKey:"rate",domain:[Math.min(...a),Math.max(...a)],label:{angle:-90,fill:i.white,fontSize:"12px",offset:0,position:"insideLeft",value:t.y_axis_name},name:"Y",tick:{fill:i.white,fontSize:"8px"},type:"number"}),e.jsx(st,{cursor:{strokeDasharray:"3 3"}}),e.jsx(Ge,{data:o,fill:i.blueTextAccent,line:!0,name:"A scatter",shape:e.jsx(Ct,{})})]})})})},Pt=n(s)`
  width: 100%;
  height: 100%;
`,le=({amt:t})=>e.jsxs(At,{align:"center",direction:"row",justify:"flex-start",children:[e.jsx("div",{className:"icon",children:e.jsx(De,{})}),e.jsx("div",{className:"value","data-testid":"boost-amt",children:t}),e.jsx("div",{className:"text",children:"sat"})]}),At=n(s)`
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
`,Et=({stateless:t,node:o})=>e.jsxs(s,{grow:1,shrink:1,children:[e.jsx(Rt,{children:t&&e.jsxs(Mt,{children:[e.jsx("div",{className:"icon",children:e.jsx(J,{})}),e.jsx("div",{className:"title",children:"Description"})]})}),e.jsx(Gt,{children:o!=null&&o.description?`"${o==null?void 0:o.description}"`:"..."})]}),Mt=n(s).attrs({direction:"row",align:"center"})`
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
`,Rt=n(s).attrs({direction:"row",align:"center",justify:"space-between"})`
  margin-bottom: 18px;
`,Gt=n(s)`
  color: ${i.white};
  text-overflow: ellipsis;
  whitespace: nowrap;
  font-family: Barlow;
  letter-spacing: 0.2pt;
  font-size: 15px;
  font-style: normal;
  font-weight: 300;
  line-height: 22px;
`,Dt=({imageUrl:t,name:o})=>e.jsxs(s,{align:"center",direction:"row",children:[t&&e.jsx(Ft,{children:e.jsx(z,{rounded:!0,size:64,src:t||"",type:"image"})}),o&&e.jsx(Yt,{children:o})]}),Ft=n(s)`
  img {
    width: 64px;
    height: 64px
    border-radius: 50%;
    object-fit: cover;
  }
  margin-right: 16px;
`,Yt=n(s)`
  color: ${i.white};
  font-family: Barlow;
  font-size: 13px;
  font-style: normal;
  font-weight: 600;
  line-height: 17px;
`,Lt=({text:t,type:o,sourceLink:r})=>e.jsxs(s,{direction:"column",children:[e.jsx(s,{align:"center",direction:"row",children:e.jsx(M,{type:o})}),e.jsx(ce,{"data-testid":"episode-description",children:t}),e.jsx(s,{align:"center",direction:"row",justify:"flex-start",children:r&&e.jsxs(Ht,{href:r,onClick:a=>a.stopPropagation(),target:"_blank",children:[e.jsx(Z,{}),e.jsx(Ot,{children:r})]})})]}),Ht=n.a`
  color: ${i.GRAY6};
  font-size: 16px;
  height: 16px;
  display: flex;
  gap: 5px;
  align-items: center;
`,Ot=n(k)`
  max-width: 150px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: ${i.GRAY6};
  font-family: Barlow;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
`,Wt=({title:t,imageUrl:o,name:r})=>e.jsxs(s,{align:"center",direction:"row",children:[e.jsx(Vt,{children:e.jsx(z,{rounded:!0,size:64,src:o||"",type:"person"})}),(t||r)&&e.jsx(Nt,{children:t||r})]}),Vt=n(s)`
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
`,Qt=({text:t,imageUrl:o,date:r,twitterHandle:a,name:l,verified:d})=>e.jsxs(s,{direction:"column",children:[e.jsxs(s,{align:"center",direction:"row",pr:16,children:[e.jsx(qt,{children:e.jsx(z,{rounded:!0,size:27,src:o||"",type:"person"})}),e.jsxs(s,{children:[e.jsxs(Ut,{align:"center",direction:"row",children:[l,d&&e.jsx("div",{className:"verification",children:e.jsx("img",{alt:"verified",src:"verified_twitter.svg"})})]}),a&&e.jsxs(Kt,{children:["@",a]})]})]}),e.jsxs(s,{grow:1,shrink:1,children:[e.jsx(Xt,{"data-testid":"episode-description",children:t}),e.jsx(s,{"data-testid":"date-text",direction:"row",justify:"flex-start",children:!!r&&e.jsx(D,{children:L.unix(r).fromNow()})})]})]}),qt=n(s)`
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
`,Kt=n(s)`
  color: ${i.GRAY7};
  font-family: Barlow;
  font-size: 11px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.2px;
`,Xt=n(s)`
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
`,Jt=n(s).attrs({direction:"column"})`
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
`,Zt=({boostCount:t,date:o,episodeTitle:r,isSelectedView:a=!1,imageUrl:l,showTitle:d,type:c,text:h,name:u,profilePicture:x,sourceLink:g,verified:b=!1,twitterHandle:y,className:w="episode-wrapper",onClick:S})=>{const m=c==="show"?d:r,v=c==="show"?"":d,B=["tweet","person","guest","topic","document"],p=c==="youtube"?"video":"audio";return c?e.jsx(Jt,{className:w,onClick:S,children:B.includes(c)?e.jsxs(e.Fragment,{children:[c==="topic"&&e.jsxs(es,{children:[e.jsx(Ye,{}),e.jsx("p",{children:v})]}),["person","guest"].includes(c)&&e.jsx(Wt,{imageUrl:l,name:u||"",title:d||""}),["image"].includes(c)&&e.jsx(Dt,{imageUrl:g,name:u||""}),c==="tweet"&&e.jsx(Qt,{date:o,imageUrl:x,name:u||"",text:h||"",twitterHandle:y,verified:b}),c==="document"&&e.jsx(Lt,{sourceLink:g||"",text:h||"",type:c})]}):e.jsxs(s,{direction:"row",children:[!a&&e.jsx(s,{align:"center",pr:16,children:e.jsx(z,{size:64,src:l||`${p}_default.svg`,type:c||""})}),e.jsxs(s,{grow:1,shrink:1,children:[e.jsxs(s,{align:"center",direction:"row",justify:"space-between",children:[e.jsx(s,{align:"center",direction:"row",children:c&&e.jsx(M,{type:c})}),c==="youtube"&&g?e.jsx(ss,{href:`${g}?open=system`,onClick:T=>T.stopPropagation(),children:e.jsx(H,{})}):null]}),e.jsx(ce,{"data-testid":"episode-description",children:m}),e.jsxs(s,{align:"center",direction:"row",justify:"flex-start",children:[!!o&&e.jsx(D,{children:L.unix(o).fromNow()}),!!v&&e.jsx(ts,{children:v}),!a&&t>0&&e.jsx(s,{style:{marginLeft:"auto"},children:e.jsx(Fe,{amt:t})})]})]})]})}):null},ce=n(s)`
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
`,D=n(k)`
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
`,es=n.div`
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
`,ts=n(D)`
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
`,ss=n.a`
  color: ${i.GRAY6};
  font-size: 16px;
  height: 16px;
`,os=n.span`
  color: ${i.white};
  cursor: pointer;
  margin-left: 5px;
  &:hover {
    text-decoration: underline;
  }
`,is=({stateless:t,node:o})=>{var S;const[r,a]=A(m=>[m.transcriptIsOpen,m.setTranscriptOpen]),[l,d]=f.useState(!1),[c,h]=f.useState(""),[u,x]=f.useState(!1);if(!t&&!r)return null;const g="https://knowledge-graph.sphinx.chat",b=async m=>{try{const v=await fetch(`${g}/node/text/${m}`);if(!v.ok)throw new Error("Network response was not ok");const B=await v.json();h(B.data.text),x(!0)}catch(v){console.error("Error fetching full transcript",v)}},y=()=>{u?x(!1):o!=null&&o.ref_id&&b(o.ref_id)},w=m=>{m!==void 0&&(navigator.clipboard.writeText(m),d(!0))};return e.jsxs(s,{grow:1,shrink:1,children:[e.jsxs(ns,{children:[t&&e.jsxs(rs,{children:[e.jsx("div",{className:"icon",children:e.jsx(J,{})}),e.jsx("div",{className:"title",children:"Transcript"})]}),o!=null&&o.text?e.jsx(e.Fragment,{children:l?e.jsxs(cs,{align:"center",direction:"row",justify:"flex-start",children:[e.jsx("div",{className:"icon",children:e.jsx(yt,{})}),e.jsx("div",{className:"text",children:"Copied"})]}):e.jsx(R,{endIcon:e.jsx(Le,{}),onPointerDown:()=>w(o==null?void 0:o.text),size:"small",variant:"outlined",children:"Copy"})}):e.jsx("div",{}),!t&&e.jsx(as,{onClick:()=>{a(!1)},children:e.jsx(rt,{fontSize:35})})]}),e.jsxs(ls,{children:[u?c:`${(S=o==null?void 0:o.text)==null?void 0:S.substring(0,100)}...`,e.jsx(os,{onClick:y,children:u?"less":"more"})]})]})},rs=n(s).attrs({direction:"row",align:"center"})`
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
`,ns=n(s).attrs({direction:"row",align:"center",justify:"space-between"})`
  margin-bottom: 18px;
`,as=n(s).attrs({})`
  color: ${i.mainBottomIcons};
  cursor: pointer;
  &:hover {
    color: ${i.lightBlue500};
  }
`,ls=n(s)`
  color: ${i.white};
  text-overflow: ellipsis;
  whitespace: nowrap;
  font-family: Barlow;
  letter-spacing: 0.2pt;
  font-size: 15px;
  font-style: normal;
  font-weight: 300;
  line-height: 22px;
`,cs=n(s)`
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
`,xe=({node:t})=>{const o=I(S=>S.selectedNode),{link:r,image_url:a,date:l,boost:d,node_type:c,type:h,id:u,show_title:x,episode_title:g,ref_id:b}=t||o||{},[y,w]=f.useState(d||0);return o?e.jsx("div",{style:{overflow:"auto",flex:1,width:"100%"},children:e.jsxs(xs,{children:[e.jsx(ps,{boostCount:y||0,date:l||0,episodeTitle:ne(g),imageUrl:a,isSelectedView:!0,link:r,onClick:()=>null,showTitle:x,type:c||h}),e.jsx(Y,{}),e.jsxs(ds,{children:[e.jsx(le,{amt:y}),e.jsx(te,{content:o,count:y,refId:b,updateCount:w})]}),e.jsx(Y,{}),e.jsx(N,{children:e.jsx(Et,{node:o,stateless:!0})}),e.jsx(Y,{}),e.jsx(N,{children:e.jsx(is,{node:o,stateless:!0},u)})]})}):null},xs=n(s)`
  flex: 1;
  min-height: 100%;
  flex-direction: column;
  border-bottom: 1px solid #101317;
  box-shadow: 0px 5px 6px rgba(0, 0, 0, 0.5);
  z-index: -1;
`,ds=n(s)`
  flex-direction: row;
  justify-content: space-between;
  padding: 18px 18px 18px;
`,N=n(s)`
  padding: 18px 18px 18px;
`,ps=n(Zt)`
  & {
    border-top: none;
    padding-bottom: 18px;
    font-size: 16px;
  }
`,Y=n(ee)`
  margin: auto 0px 2px 0px;
  opacity: 75%;
`,hs=n(s)`
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
`,ys=({selectedNodeShow:t})=>{const[o,r]=I(l=>[l.selectedNode,l.setSelectedNode]),{type:a}=o||{};return e.jsxs(hs,{p:20,children:[e.jsx(s,{align:"flex-start",children:a&&e.jsx(M,{type:a})}),e.jsx(s,{direction:"row",mb:22,mt:22,children:e.jsx(s,{grow:1,shrink:1,children:e.jsx(k,{className:"episode-title",kind:"heading",children:(o==null?void 0:o.episode_title)||"Unknown"})})}),t?e.jsxs(s,{className:"show",direction:"row",onClick:()=>r(t),children:[e.jsx(z,{size:16,src:(t==null?void 0:t.image_url)||"",type:"show"}),e.jsx(k,{className:"show__title",color:"mainBottomIcons",kind:"regular",children:t==null?void 0:t.show_title})]}):null]})},us="Flow 1",fs=0,gs=12,ms=15,js={g:"LottieFiles Figma v45"},ws=[{ty:4,nm:"Rectangle 4497",sr:1,st:0,op:60,ip:0,hd:!1,ddd:0,bm:0,hasMask:!1,ao:0,ks:{a:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,6],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,6],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,6],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,6],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,3],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,3],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[1.5,6],t:58},{s:[1.5,6],t:59}]},s:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[100,100],t:58},{s:[100,100],t:59}]},sk:{a:0,k:0},p:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[13.5,6],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[13.5,6],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[13.5,6],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[13.5,6],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[13.5,9],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[13.5,9],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[13.5,6],t:58},{s:[13.5,6],t:59}]},r:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[0],t:58},{s:[0],t:59}]},sa:{a:0,k:0},o:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[100],t:58},{s:[100],t:59}]}},shapes:[{ty:"sh",bm:0,hd:!1,nm:"",d:1,ks:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,12],[0,12]]}],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,12],[0,12]]}],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,12],[0,12]]}],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,12],[0,12]]}],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,6],[0,6]]}],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,6],[0,6]]}],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,12],[0,12]]}],t:58},{s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,12],[0,12]]}],t:59}]}},{ty:"fl",bm:0,hd:!1,nm:"",c:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[1,1,1],t:58},{s:[1,1,1],t:59}]},r:1,o:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[100],t:58},{s:[100],t:59}]}}],ind:1},{ty:4,nm:"Rectangle 4497",sr:1,st:0,op:60,ip:0,hd:!1,ddd:0,bm:0,hasMask:!1,ao:0,ks:{a:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,3],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,3],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,6],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,6],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,5],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,5],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[1.5,3],t:58},{s:[1.5,3],t:59}]},s:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[100,100],t:58},{s:[100,100],t:59}]},sk:{a:0,k:0},p:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[7.5,9],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[7.5,9],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[7.5,6],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[7.5,6],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[7.5,7],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[7.5,7],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[7.5,9],t:58},{s:[7.5,9],t:59}]},r:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[0],t:58},{s:[0],t:59}]},sa:{a:0,k:0},o:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[100],t:58},{s:[100],t:59}]}},shapes:[{ty:"sh",bm:0,hd:!1,nm:"",d:1,ks:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,6],[0,6]]}],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,6],[0,6]]}],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,12],[0,12]]}],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,12],[0,12]]}],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,10],[0,10]]}],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,10],[0,10]]}],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,6],[0,6]]}],t:58},{s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,6],[0,6]]}],t:59}]}},{ty:"fl",bm:0,hd:!1,nm:"",c:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[1,1,1],t:58},{s:[1,1,1],t:59}]},r:1,o:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[100],t:58},{s:[100],t:59}]}}],ind:2},{ty:4,nm:"Rectangle 4497",sr:1,st:0,op:60,ip:0,hd:!1,ddd:0,bm:0,hasMask:!1,ao:0,ks:{a:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,6],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,6],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,3],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,3],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,6],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,6],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[1.5,6],t:58},{s:[1.5,6],t:59}]},s:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[100,100],t:58},{s:[100,100],t:59}]},sk:{a:0,k:0},p:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,6],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,6],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,9],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,9],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,6],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,6],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[1.5,6],t:58},{s:[1.5,6],t:59}]},r:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[0],t:58},{s:[0],t:59}]},sa:{a:0,k:0},o:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[100],t:58},{s:[100],t:59}]}},shapes:[{ty:"sh",bm:0,hd:!1,nm:"",d:1,ks:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,12],[0,12]]}],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,12],[0,12]]}],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,6],[0,6]]}],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,6],[0,6]]}],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,12],[0,12]]}],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,12],[0,12]]}],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,12],[0,12]]}],t:58},{s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,12],[0,12]]}],t:59}]}},{ty:"fl",bm:0,hd:!1,nm:"",c:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[1,1,1],t:58},{s:[1,1,1],t:59}]},r:1,o:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[100],t:58},{s:[100],t:59}]}}],ind:3}],bs="5.7.0",ks=60,vs=57.6,$s=0,Ss=[],Ts={nm:us,ddd:fs,h:gs,w:ms,meta:js,layers:ws,v:bs,fr:ks,op:vs,ip:$s,assets:Ss},_s=()=>{const t=f.useRef(null);return f.useEffect(()=>{const o=document.getElementById("lottie-timestamp-equalizer");return o&&(t.current=Se.loadAnimation({container:o,animationData:Ts,loop:!0,autoplay:!0})),()=>{t.current&&t.current.destroy()}},[]),e.jsx("div",{id:"lottie-timestamp-equalizer",style:{width:"18px",height:"18px"}})},zs=n(s).attrs(()=>({direction:"row"}))`
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
`,Bs=({onClick:t,timestamp:o,isSelected:r,setOpenClip:a})=>{const l=r?"blueTextAccent":"placeholderText";return r?(nt,i[l]):(at,i[l]),e.jsxs(zs,{align:"center","data-testid":"wrapper",direction:"row",isSelected:r,justify:"flex-start",onClick:t,px:20,py:20,children:[e.jsxs("div",{children:[e.jsx(Q,{className:"play-pause",children:r?e.jsx(_s,{}):e.jsx(He,{})}),!1]}),e.jsxs(Cs,{align:"flex-start",direction:"column",justify:"center",children:[o.timestamp&&e.jsx("span",{className:"timestamp",children:Oe(o.timestamp)}),e.jsx("span",{className:"title",children:ne(o.show_title)})]}),e.jsx("div",{className:"info",children:e.jsx(s,{"data-testid":"info-icon-wrapper",onClick:()=>a(o),pt:4,children:e.jsx(ut,{})})})]})},Cs=n(s)`
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
`,Is=n(s)`
  overflow: scroll;

  &::-webkit-scrollbar {
    width: 1px;
    height: 4px;
  }

  &::-webkit-scrollbar-thumb {
    width: 1px;
    height: 4px;
  }
`,Ps=()=>{const t=_(),o=ae(),[r,a]=f.useState(null),[l,d]=f.useState(null),[c,h,u]=G(y=>[y.playingNode,y.setPlayingNodeLink,y.setPlayingTime]),x=f.useMemo(()=>se((o==null?void 0:o.nodes)||[],t),[o==null?void 0:o.nodes,t]),g=f.useMemo(()=>o==null?void 0:o.nodes.find(y=>y.node_type==="show"&&y.show_title===(t==null?void 0:t.show_title)),[o==null?void 0:o.nodes,t]),b=f.useCallback(y=>{var w;c&&y.link&&(c==null?void 0:c.link)!==y.link&&h(y.link),u(q(((w=y==null?void 0:y.timestamp)==null?void 0:w.split("-")[0])||"00:00:01")),d(y)},[c,h,d,u]);return f.useEffect(()=>{x!=null&&x.length&&!x.some(y=>y.ref_id===(l==null?void 0:l.ref_id))&&b(x[0])},[x,l,b]),t?e.jsx("div",{style:{overflow:"auto",flex:1,width:"100%"},children:e.jsxs(Es,{children:[r&&e.jsx(Ms,{className:"slide-me",direction:"up",in:!!r,children:e.jsxs(As,{children:[e.jsx(s,{className:"close-info",onClick:()=>a(null),children:e.jsx(ht,{})}),r&&e.jsx(xe,{node:r})]})}),e.jsx(ys,{selectedNodeShow:g}),!!(x!=null&&x.length)&&e.jsx(Is,{children:e.jsx(s,{pb:20,children:x==null?void 0:x.map((y,w)=>e.jsx(Bs,{isSelected:(l==null?void 0:l.ref_id)===y.ref_id,onClick:()=>b(y),setOpenClip:a,timestamp:y},`${y.episode_title}_${w}`))})})]})}):null},As=n(s)`
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
`,Es=n(s)`
  position: relative;
  flex: 1;
  min-height: 100%;
  flex-direction: column;
  border-bottom: 1px solid #101317;
  box-shadow: 0px 5px 6px rgba(0, 0, 0, 0.5);
`,Ms=n(O)`
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
`,Rs=()=>{const t=_(),o=t==null?void 0:t.name;return e.jsxs(s,{direction:"column",px:24,py:16,children:[e.jsx(z,{"data-testid":"person-image",size:80,src:(t==null?void 0:t.source_link)||"",type:"image"}),e.jsx(s,{py:20,children:e.jsx(k,{color:"primaryText1",kind:"bigHeading",children:o})})]})},Gs=()=>{const{sender_pic:t,sender_alias:o,date:r,message_content:a}=_()||{};return e.jsxs(s,{direction:"row",children:[e.jsx(Ys,{src:t}),e.jsxs(Ds,{children:[e.jsxs(s,{align:"flex-end",className:"info",direction:"row",children:[o&&e.jsx("span",{className:"info__name",children:o}),r&&e.jsx("span",{className:"info__date",children:r})]}),a&&e.jsx(Fs,{dangerouslySetInnerHTML:{__html:We(a)}})]})]})},Ds=n(s)`
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
`,Fs=n.div`
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
`,Ys=n.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: green;
`,Ls=()=>{const t=_(),o=(t==null?void 0:t.name)||(t==null?void 0:t.label);return e.jsxs(s,{direction:"row",px:24,py:16,children:[e.jsx(z,{"data-testid":"person-image",size:80,src:(t==null?void 0:t.image_url)||"person_placeholder_img.png",type:"person"}),e.jsx(s,{p:20,children:e.jsx(k,{color:"primaryText1",kind:"bigHeading",children:o})})]})},Hs=({node:t,onClick:o})=>{var l,d;const r=q(t.timestamp||""),a=Math.ceil(r/60);return e.jsx(Os,{onClick:o,p:24,children:e.jsxs("div",{children:[e.jsxs(s,{align:"flex-start",direction:"row",justify:"flex-start",children:[e.jsx(s,{align:"center",children:e.jsx(z,{size:64,src:(t==null?void 0:t.image_url)||"",type:(t==null?void 0:t.node_type)||"episode"})}),e.jsxs("div",{className:"content",children:[e.jsxs(s,{align:"center",direction:"row",children:[e.jsx(M,{type:"episode"}),a>0&&e.jsxs("div",{className:"subtitle",children:[a," ",a===1?"min":"mins"]})]}),e.jsx(k,{className:"title",color:"primaryText1",kind:"regular",children:t.episode_title})]})]}),e.jsxs(s,{align:"center",direction:"row",justify:"flex-end",pt:4,children:[e.jsxs(k,{className:"clipText",color:"mainBottomIcons",kind:"regular",children:[((l=t==null?void 0:t.children)==null?void 0:l.length)||0," ",((d=t==null?void 0:t.children)==null?void 0:d.length)===1?"Clip":"Clips"]}),e.jsx(Ve,{style:{color:i.white}})]})]})})},Os=n(s).attrs({})`
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
`,Ws=n(s)`
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
`,Vs=n(s)`
  flex-direction: column;
  border-bottom: 1px solid #101317;
  z-index: 0;
  padding: 42px 20px;
  background-color: #1c1e26;
`,Ns=n(k)`
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
`,Qs=()=>{const[t,o]=I(c=>[c.selectedNode,c.setSelectedNode]),r=ae(),[a,l]=f.useState([]),d=f.useMemo(()=>{var u;const c=new Set,h={};if((u=t==null?void 0:t.children)!=null&&u.length){t.children.forEach((g,b)=>{var S,m,v,B;const y=se((r==null?void 0:r.nodes)||[],t)||[],w=r==null?void 0:r.nodes.find(p=>p.ref_id===g);if(w){w.timestamp=(S=y[0])==null?void 0:S.timestamp;const p=(B=(v=(m=y[b])==null?void 0:m.hosts)==null?void 0:v[0])==null?void 0:B.name;p&&c.add(p),h[g]=w,h[g]=w}});const x=Array.from(c);l(x)}return Object.values(h).filter(x=>x.node_type==="episode").sort((x,g)=>(g.weight||0)-(x.weight||0))},[r==null?void 0:r.nodes,t]);return e.jsxs(Ws,{children:[e.jsx(Vs,{children:e.jsxs(s,{direction:"row",children:[e.jsx(s,{pr:24,children:e.jsx(z,{size:80,src:(t==null?void 0:t.image_url)||"audio_default.svg",type:"show"})}),e.jsx(s,{direction:"column",children:e.jsxs(s,{direction:"column",grow:1,justify:"space-between",children:[e.jsxs(s,{align:"center",direction:"row",justify:"flex-start",mb:16,children:[e.jsx(M,{type:"show"})," ",e.jsxs("div",{className:"subtitle",children:["by ",a.join(", ")||(t==null?void 0:t.show_title)]})]}),e.jsx(Ns,{kind:"bigHeading",title:(t==null?void 0:t.show_title)||"Unknown",children:(t==null?void 0:t.show_title)||"Unknown"})]})})]})}),e.jsxs(s,{direction:"column",children:[e.jsx(s,{p:24,children:e.jsx(k,{className:"relatedHeader",kind:"medium",children:"Related Episodes"})}),d.map(c=>e.jsx(Hs,{node:c,onClick:()=>o(c)},c.ref_id))]})]})},qs=()=>{const t=_();return e.jsx(s,{align:"center",justify:"center",children:e.jsx(k,{color:"primaryText1",kind:"hugeHeading",children:t==null?void 0:t.label})})},Us=()=>{const t=_(),{date:o,boost:r,text:a,name:l,verified:d,profile_picture:c,twitter_handle:h,ref_id:u}=t||{},x=(t==null?void 0:t.tweet_id)||"",[g,b]=f.useState(r||0);return t&&e.jsxs(e.Fragment,{children:[e.jsxs(s,{direction:"column",p:24,children:[e.jsxs(s,{align:"center",direction:"row",pr:16,children:[e.jsx(Ks,{children:e.jsx(z,{rounded:!0,size:58,src:c||"",type:"person"})}),e.jsxs(s,{children:[e.jsxs(Xs,{align:"center",direction:"row",children:[l,d&&e.jsx("div",{className:"verification",children:e.jsx("img",{alt:"verified",src:"verified_twitter.svg"})})]}),h&&e.jsxs(Js,{children:["@",h]})]})]}),e.jsxs(s,{grow:1,shrink:1,children:[e.jsx(Zs,{"data-testid":"episode-description",children:a}),e.jsx(s,{direction:"row",justify:"flex-start",children:!!o&&e.jsx(D,{children:L.unix(o).format("ll")})})]}),e.jsx(s,{align:"stretch",mt:22,children:e.jsx("a",{href:`https://twitter.com/Interior/status/${x}?open=system`,children:e.jsx(to,{endIcon:e.jsx(H,{}),children:"View Tweet "})})})]}),e.jsx(eo,{}),e.jsxs(s,{direction:"row",justify:"space-between",pt:14,px:24,children:[e.jsx(le,{amt:g}),e.jsx(te,{content:t,count:g,refId:u,updateCount:b})]})]})},Ks=n(s)`
  img {
    width: 64px;
    height: 64px
    border-radius: 50%;
    object-fit: cover;
  }
  margin-right: 16px;
`,Xs=n(s)`
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
`,Js=n(s)`
  color: ${i.GRAY7};
  font-family: Barlow;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`,Zs=n(s)`
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
`,eo=n(ee)`
  margin: 0 0 6px 0;
  opacity: 75%;
`,to=n(R)`
  width: 100%;
`,so=()=>{var c,h;const[t,o]=f.useState(!1),r=_(),a=!!(r!=null&&r.source_link),l=f.useRef(null),d=u=>{u.stopPropagation(),u.currentTarget.blur(),o(!t)};return f.useEffect(()=>{var u,x;t?(u=l.current)==null||u.play():(x=l.current)==null||x.pause()},[t]),e.jsxs(s,{align:"flex-start",basis:"100%",direction:"column",grow:1,justify:"center",pt:a?62:0,shrink:1,children:[a&&e.jsxs(oo,{children:[e.jsx(Z,{color:i.GRAY6}),e.jsx(no,{children:r==null?void 0:r.source_link}),e.jsx(io,{href:r==null?void 0:r.source_link,onClick:u=>u.stopPropagation(),target:"_blank",children:e.jsx(H,{})})]}),(c=r==null?void 0:r.audio)!=null&&c.length?e.jsxs(s,{justify:"flex-start",p:12,children:[e.jsx(R,{onClick:u=>d(u),startIcon:t?e.jsx(U,{}):e.jsx(K,{}),children:t?"Pause":"Play"}),e.jsx(ao,{ref:l,src:((h=r.audio[0])==null?void 0:h.link)||"",children:e.jsx("track",{kind:"captions"})})]}):null,e.jsx(ro,{grow:1,justify:"flex-start",p:12,shrink:1,children:e.jsx(k,{color:"primaryText1",kind:"regular",children:r==null?void 0:r.text})})]})},oo=n(s)`
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
`,io=n.a`
  color: ${i.GRAY6};
  font-size: 16px;
  height: 16px;
  display: flex;
  gap: 5px;
  align-items: center;
`,ro=n(s)`
  overflow: auto;
`,no=n(k)`
  max-width: 150px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,ao=n.audio`
  height: 0;
  width: 0;
`,lo=["clip","twitter_space","youtube","episode","podcast"],co=()=>{const t=_(),[o]=I(a=>[a.showTeachMe]),[r]=G(a=>[a.setPlayingNode]);if(f.useEffect(()=>{lo.includes((t==null?void 0:t.node_type)||"")&&r(t)},[r,t]),o)return e.jsx(zt,{});switch(t==null?void 0:t.node_type){case"guest":case"person":return e.jsx(Ls,{});case"data_series":return e.jsx(It,{});case"tribe_message":return e.jsx(Gs,{});case"tweet":return e.jsx(Us,{});case"topic":return e.jsx(qs,{});case"show":return e.jsx(Qs,{});case"youtube":case"podcast":case"clip":case"twitter_space":return e.jsx(xe,{});case"document":return e.jsx(so,{});case"episode":return e.jsx(Ps,{},t.ref_id);case"image":return e.jsx(Rs,{});default:return null}},xo=f.memo(co),po=({isPlaying:t,setIsPlaying:o,playingTime:r,duration:a,handleProgressChange:l,handleVolumeChange:d,onFullScreenClick:c,showToolbar:h})=>e.jsxs(s,{children:[!h&&e.jsx(go,{"aria-label":"Small",max:a,onChange:l,size:"small",value:r}),e.jsxs(ho,{align:"center",direction:"row",showToolbar:h,children:[e.jsx(yo,{onClick:o,size:"small",children:t?e.jsx(U,{}):e.jsx(K,{})}),e.jsxs(mo,{direction:"row",children:[e.jsx("span",{children:W(r)}),e.jsx("span",{className:"separator",children:"/"}),e.jsx("span",{className:"duration",children:W(a)})]}),e.jsxs(uo,{direction:"row",px:9,children:[e.jsx(oe,{className:"volume-slider",defaultValue:.5,max:1,min:0,onChange:d,size:"small",step:.1}),e.jsx(Ne,{})]}),e.jsx(fo,{onClick:()=>c(),children:h?e.jsx(qe,{}):e.jsx(Qe,{})})]})]}),ho=n(s)`
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
`,yo=n(Q)`
  && {
    font-size: 36px;
    padding: 2px;
    margin-left: 8px;
  }
`,uo=n(s)`
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
`,fo=n(s)`
  cursor: pointer;
  padding: 8px;
  font-size: 32px;
  color: #d9d9d9;
`,go=n(oe)`
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
`,mo=n(s)`
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
`,jo=({hidden:t})=>{const o=f.useRef(null),r=f.useRef(null),[a,l]=f.useState(!1),[d,c]=f.useState(!1),[h,u]=f.useState("ready"),[x,g,b,y,w,S,m,v,B,p,T]=G(j=>[j.isPlaying,j.playingTime,j.duration,j.setIsPlaying,j.setPlayingTime,j.setDuration,j.playingNode,j.volume,j.setVolume,j.setHasError,j.resetPlayer]);f.useEffect(()=>()=>T(),[T]);const F=()=>{y(!x)},C=()=>{y(!0)},pe=()=>{y(!1)},he=(j,$)=>{const P=Array.isArray($)?$[0]:$;o.current&&(o.current.seekTo(P),w(P))},ye=(j,$)=>{const P=Array.isArray($)?$[0]:$;B(P)},ue=()=>{p(!0),u("error")},fe=j=>{const $=j.playedSeconds;w($)},ge=()=>{if(o.current){u("ready");const j=o.current.getDuration();S(j)}},me=()=>{r.current&&(document.fullscreenElement?(document.exitFullscreen(),l(!1)):r.current.requestFullscreen().then(()=>{document.addEventListener("fullscreenchange",E)}))},E=()=>{l(!!document.fullscreenElement),document.removeEventListener("fullscreenchange",E)};return f.useEffect(()=>()=>{document.removeEventListener("fullscreenchange",E)}),f.useEffect(()=>{const j=$=>{if(a){const P=window.screen.height,je=$.clientY,we=P-je;c(we<=50)}};return document.addEventListener("mousemove",j),()=>{document.removeEventListener("mousemove",j)}},[a,d]),f.useEffect(()=>{const j=$=>{a&&$.key==="Escape"&&($.preventDefault(),$.stopPropagation())};return document.addEventListener("fullscreenchange",E),document.addEventListener("keydown",j),()=>{document.removeEventListener("fullscreenchange",E),document.removeEventListener("keydown",j)}}),m!=null&&m.link?e.jsxs(wo,{ref:r,hidden:t,children:[e.jsx(bo,{children:e.jsx(z,{size:120,src:(m==null?void 0:m.image_url)||"",type:"clip"})}),e.jsx(Ue,{ref:o,controls:!1,height:a?window.screen.height:"200px",onBuffer:()=>u("buffering"),onBufferEnd:()=>u("ready"),onError:ue,onPause:pe,onPlay:C,onProgress:fe,onReady:ge,playing:x,url:(m==null?void 0:m.link)||"",volume:v,width:"100%"}),h==="error"?e.jsx(vo,{className:"error-wrapper",children:"Error happened, please try later"}):null,h==="ready"?e.jsx(po,{duration:b,handleProgressChange:he,handleVolumeChange:ye,isPlaying:x,onFullScreenClick:me,playingTime:g,setIsPlaying:F,showToolbar:d&&a}):null,h==="buffering"?e.jsx(ko,{children:e.jsx(X,{color:i.lightGray})}):null]}):null},wo=n(s)`
  border-bottom: 1px solid rgba(0, 0, 0, 0.25);
  background: rgba(0, 0, 0, 0.2);
  position: relative;
  border-top-right-radius: 16px;
  border-top-left-radius: 16px;
  overflow: hidden;
  height: ${t=>t.hidden?"0px":"auto"};
`,bo=n(s)`
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translateX(-50%);
  z-index: -1;
`,ko=n(s)`
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
`,vo=n(s)`
  height: 60px;
  padding: 12px 16px;
  color: ${i.primaryRed};
`,$o=f.memo(jo),So=({open:t})=>{const[o,r,a]=I(h=>[h.setSelectedNode,h.setTeachMe,h.showTeachMe]),l=_(),[d]=A(h=>[h.setSidebarOpen]),[c]=G(h=>[h.playingNode]);return e.jsx(O,{direction:"right",in:t,style:{width:a?"700px":"",position:t?"relative":"absolute"},children:e.jsxs(To,{children:[e.jsx($o,{hidden:(l==null?void 0:l.ref_id)!==(c==null?void 0:c.ref_id)},c==null?void 0:c.ref_id),e.jsx(zo,{children:e.jsx(xo,{})}),e.jsx(_o,{onClick:()=>{o(null),r(!1)},children:e.jsx(Ke,{})}),e.jsx(Bo,{onClick:()=>{d(!1)},children:e.jsx(Xe,{})})]})})},To=n(s)(({theme:t})=>({position:"relative",background:i.BG1,width:"100%",margin:"64px auto 20px 10px",borderRadius:"16px",zIndex:29,[t.breakpoints.up("sm")]:{width:"390px"}})),_o=n(s)`
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
`,zo=n(s)`
  flex: 1 1 100%;
`,Bo=n(s).attrs({align:"center",justify:"center",p:8})(({theme:t})=>({backgroundColor:i.BG1_NORMAL,cursor:"pointer",transitionDuration:"0.2s",position:"absolute",right:"0px",top:"50%",zIndex:1,width:"24px",height:"48px",transform:"translateY(-50%)",borderRadius:"0px 6px 6px 0px",boxShadow:"2px 0px 6px 0px rgba(0, 0, 0, 0.25) inset",color:i.white,[t.breakpoints.up("sm")]:{left:"100%"},"&:hover":{backgroundColor:i.BG1_HOVER},"&:active":{backgroundColor:i.BG1_PRESS,color:i.GRAY6}})),Co=()=>{const t=A(o=>o.setSidebarOpen);return e.jsx(Io,{onClick:()=>{t(!0)},children:e.jsx(Je,{})})},Io=n(s).attrs({align:"center",justify:"center",p:8})(({theme:t})=>({backgroundColor:i.BG1_NORMAL,cursor:"pointer",transitionDuration:"0.2s",position:"absolute",top:"50%",zIndex:1,width:"24px",height:"48px",transform:"translateY(-50%)",borderRadius:"0px 6px 6px 0px",boxShadow:"2px 0px 6px 0px rgba(0, 0, 0, 0.25) inset",color:i.white,[t.breakpoints.up("sm")]:{left:"64px"},"&:hover":{backgroundColor:i.BG1_HOVER},"&:active":{backgroundColor:i.BG1_PRESS,color:i.GRAY6}})),Po=390,Ao=f.forwardRef(({onSubmit:t},o)=>{const[r]=Pe(x=>[x.isFetching]),[a,l]=A(x=>[x.currentSearch,x.clearSearch]),{setValue:d}=ze(),c=f.useRef(null),[h,u]=f.useState(!1);return f.useEffect(()=>{const x=c.current;if(!x)return;const g=()=>{u((x==null?void 0:x.scrollTop)>0)};x.addEventListener("scroll",g)},[]),e.jsxs(Ro,{ref:o,id:"sidebar-wrapper",children:[e.jsx(Fo,{}),e.jsx(de,{className:Te({"has-shadow":h}),children:e.jsxs(Go,{children:[e.jsx(Ie,{onSubmit:t}),e.jsx(Do,{"data-testid":"search_action_icon",onClick:()=>{if(a){d("search",""),l();return}t==null||t()},children:r?e.jsx(X,{color:i.SECONDARY_BLUE,size:"20"}):e.jsx(e.Fragment,{children:a?e.jsx(Be,{}):e.jsx(Ce,{})})})]})})]})}),Eo=["topic","person","guest","event","organization","place","project","software"],Mo=({onSubmit:t})=>{const o=A(d=>d.sidebarIsOpen),r=_(),a=!!r&&o&&!Eo.includes(r.node_type),[l]=I(d=>[d.showTeachMe]);return e.jsxs(e.Fragment,{children:[e.jsx(O,{direction:"right",in:o,mountOnEnter:!0,unmountOnExit:!0,children:e.jsx(Ao,{onSubmit:t})}),e.jsx(So,{open:a||!!l}),!o&&e.jsx(Co,{})]})},Ro=n(s)(({theme:t})=>({position:"relative",background:i.BG1,height:"100vh",width:"100%",zIndex:30,[t.breakpoints.up("sm")]:{width:Po}})),de=n(s).attrs({direction:"column",justify:"center",align:"stretch"})(({theme:t})=>({padding:t.spacing(3.75,2),[t.breakpoints.up("sm")]:{padding:"12px"},"&.has-shadow":{borderBottom:"1px solid rgba(0, 0, 0, 0.25)",background:i.BG1,boxShadow:"0px 1px 6px 0px rgba(0, 0, 0, 0.20)"}})),Go=n(s).attrs({direction:"row",justify:"center",align:"center"})`
  flex-grow: 1;
`,Do=n(s).attrs({align:"center",justify:"center",p:5})`
  font-size: 32px;
  color: ${i.mainBottomIcons};
  cursor: pointer;
  transition-duration: 0.2s;
  margin-left: -42px;
  z-index: 2;

  &:hover {
    /* background-color: ${i.gray200}; */
  }

  ${de} input:focus + & {
    color: ${i.primaryBlue};
  }
`,Fo=n(s)`
  height: 64px;
  background: ${i.BG2};
`;Mo.displayName="Sidebar";export{Po as MENU_WIDTH,Mo as SideBar};
