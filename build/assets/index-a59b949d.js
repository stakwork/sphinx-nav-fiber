import{s as x,j as e,c as l,F as u,r as f,T as _,_ as B,m as It,d as Nt,a as Fe,Y as We,R as Ge,u as se,l as nt,b as Ot,e as E,f as Lt,i as Dt,P as Bt,h as Rt,g as ot,k as Mt}from"./index-8bba1ac7.js";import{B as F,u as z,C as Ft,I as Y,L as Wt,a as st,b as D,c as Gt,v as Vt,A as it,P as Yt,d as V,G as Ut,e as R,S as Ht,f as Kt,g as qt,h as at,i as lt,p as Xt,j as ct,k as Qt,l as ie,F as ae,m as Jt,n as dt,o as Zt,q as er,r as tr,T as rr,s as nr,t as or,w as sr,x as ir,y as ar}from"./react-toastify.esm-5ee78250.js";import{P as lr,f as Ve,G as cr,u as dr,c as Ye,D as pt,a as pr,E as ur,L as be,b as pe,C as hr,A as xr,i as re,d as fr,e as Ee,g as mr,h as gr,j as ut,k as Ue,l as yr,X as ht,Y as xt,m as jr,n as br,T as vr,S as wr,o as Sr,p as Tr}from"./generateCategoricalChart-2fe79c7c.js";import{C as $}from"./ClipLoader-1e33f199.js";import{M as ft,a as mt,b as _r,c as Cr,d as gt,e as Ar}from"./index.esm-8f5ab791.js";import{T as kr,a as fe,b as $r,F as Pe,M as Ne,C as yt,N as Er,c as Pr,D as Oe}from"./NoFilterResultIcon-9e29b12b.js";import{s as q,T as jt,A as bt,u as O,I as vt,S as ve}from"./index-26948850.js";import{S as me,C as wt,a as St}from"./ChevronUpIcon-6e63c0af.js";import{P as ge,I as ye,a as Le,F as Tt}from"./Popover-d30a9834.js";import{B as zr,T as ne}from"./index-28b591f6.js";import{u as G}from"./index-7c39f604.js";import{B as De}from"./index-6478aa51.js";import{P as _t}from"./Popper-e6f73086.js";import{C as Ct}from"./CheckIcon-297ff908.js";import{S as Ir}from"./SettingsIcon-4354e59a.js";import{T as Nr,a as Or,B as At}from"./index-a97925f0.js";import{S as Lr}from"./Stack-22c0aa66.js";const Dr=()=>{const[t,r]=z(n=>[n.cameraFocusTrigger,n.setCameraFocusTrigger]);return e.jsx(Br,{href:"",onClick:()=>r(!t),size:"medium",startIcon:e.jsx(Ft,{})})},Br=x(F)`
  && {
    padding: 0;
    width: 32px;
    min-width: auto;
    justify-content: center;
    align-items: center;
    pointer-events: all;

    .MuiButton-startIcon {
      margin-left: 0;
      filter: brightness(0.65);
    }
  }
`,Rr=()=>{const t=f.useRef(null),[r,n]=f.useState(0),s=st(),i=z(T=>T.setSelectedNode),[c,a]=D(T=>[T.sidebarIsOpen,T.setSidebarOpen]),[o,p,d,h,g,y]=Gt(T=>[T.isPlaying,T.setIsPlaying,T.playingTime,T.playingNode,T.miniPlayerIsVisible,T.setMiniPlayerIsVisible]),[v,j]=h!=null&&h.timestamp?h.timestamp.split("-").map(T=>Vt(T)):[0,0],m=(d-v)/(j-v)*100;f.useEffect(()=>{var P,S;const T=((P=t.current)==null?void 0:P.offsetWidth)||0,k=((S=t.current)==null?void 0:S.scrollWidth)||0;n(k-T)},[]);const w=T=>{y(!1),T.stopPropagation()},b=()=>{i(h),a(!0)},A=c&&(s==null?void 0:s.ref_id)!==(h==null?void 0:h.ref_id)||h&&!c;return g&&h&&A?e.jsxs(Mr,{onClick:b,children:[e.jsxs(Fr,{children:[e.jsx(it,{src:h.image_url||"",type:h.node_type}),e.jsxs(Wr,{children:[e.jsxs(Hr,{ref:t,children:[e.jsx(Ur,{className:"title",scrollValue:r,children:h.episode_title}),e.jsx("div",{className:"subtitle",children:h.show_title})]}),e.jsx(Vr,{"data-testid":"play-pause-button",onClick:T=>{p(!o),T.stopPropagation()},size:"small",children:o?e.jsx(lr,{"data-testid":"pause-icon"}):e.jsx(Yt,{"data-testid":"play-icon"})})]}),e.jsx(Gr,{onClick:T=>w(T),children:e.jsx(V,{})})]}),e.jsx(Yr,{value:m,variant:"determinate"})]}):null},Mr=x(u).attrs({direction:"column",align:"stretch",justify:"space-between"})`
  padding: 8px;
  background: ${l.BG1};
  border-radius: 6px;
  width: 320px;
  height: 72px;
  margin-top: 16px;
  cursor: pointer;
  z-index: 0;
`,Fr=x(u).attrs({direction:"row",align:"center",justify:"flex-start"})``,Wr=x(u).attrs({direction:"row",align:"center",justify:"space-between"})`
  flex: 1;
  color: ${l.white};
  margin-left: 11px;

  .title {
    font-size: 13px;
    margin-bottom: 2px;
    font-weight: 500;
  }

  .subtitle {
    font-size: 11px;
    color: ${l.GRAY6};
  }
`,Gr=x(Y)`
  padding: 8px;
  color: ${l.GRAY6};
  z-index: 100000;
`,Vr=x(Y)`
  && {
    font-size: 36px;
    padding: 2px;
    margin-left: 8px;
    overflow: hidden;
    z-index: 100000;
  }
`,Yr=x(Wt)`
  && {
    flex-shrink: 0;
    height: 2px;
    background-color: ${l.white};
    color: blue;

    .MuiLinearProgress-bar {
      background: rgb(65, 90, 127);
    }
  }
`,Ur=x.div`
  white-space: nowrap;
  overflow: hidden;
  width: max-content;
  animation: scrollText 12s linear infinite;

  @keyframes scrollText {
    0%,
    15% {
      transform: translateX(0);
    }

    60%,
    75% {
      transform: translateX(${t=>-t.scrollValue}px);
    }

    100% {
      transform: translateX(0);
    }
  }
  color: #fff;
`,Hr=x(u)`
  overflow: hidden;
  flex: 1;
`,kt=()=>{const t=st(),r=z(n=>n.isFetching);return e.jsxs(Kr,{align:"flex-end",id:"actions-toolbar",children:[!r&&e.jsx(Dr,{}),!r&&e.jsx(Ut,{}),e.jsx(Rr,{},t==null?void 0:t.ref_id)]})},Kr=x(u)`
  position: absolute;
  right: 20px;
  bottom: 20px;
  pointer-events: all;
`,qr=({twitterHandle:t})=>e.jsx(e.Fragment,{children:e.jsx(u,{direction:"row",children:e.jsx(u,{align:"flex-start",pb:12,children:e.jsxs(_,{children:["Tweet by @",t]})})})}),Xr=x(u)(({theme:t})=>({position:"absolute",top:"65px",right:"55px",width:"300px",pointerEvents:"none",background:l.dashboardHeader,boxShadow:"0px 1px 6px rgba(0, 0, 0, 0.1)",color:l.primaryText1,zIndex:100,transition:"opacity 0.6s",padding:t.spacing(2,3),[t.breakpoints.down("sm")]:{padding:t.spacing(1,1.5)}})),Qr=x(u)`
  width: 22.5%;
`,Jr=({node:t})=>{if(!t)return null;const{node_type:r,show_title:n,episode_title:s,description:i,label:c,text:a,type:o,twitter_handle:p}=t,d=t.guests;let h=!1,g=!1;d&&(d.length&&d[0]!==null&&(h=!0),typeof d[0]=="object"&&(g=!0));let y=t.image_url;if(o==="twitter_space"&&(y="twitter_placeholder.png"),y==null)switch(r){case"guest":y="person_placeholder2.png";break;default:y="noimage.jpeg"}return r==="topic"?null:e.jsx(Xr,{borderRadius:8,px:24,py:16,children:r==="tweet"?e.jsx(qr,{twitterHandle:p}):e.jsxs(e.Fragment,{children:[e.jsxs(u,{direction:"row",children:[e.jsx(Qr,{}),e.jsx(u,{align:"flex-start",pb:12,children:e.jsx(_,{children:r==null?void 0:r.toUpperCase()})})]}),e.jsxs(u,{direction:"row",children:[e.jsx(u,{pr:12,children:e.jsx(it,{src:y,type:"person"})}),e.jsxs("div",{children:[o==="guest"?e.jsxs(u,{direction:"column",children:[e.jsx(_,{children:c}),a&&e.jsx(u,{pt:4,children:e.jsxs(_,{color:"primaryText1",kind:"tiny",children:["@",a]})})]}):e.jsx(_,{color:"primaryText1",kind:"tiny",children:n}),e.jsxs(u,{pt:4,children:[r==="clip"||r==="episode"&&e.jsx(_,{color:"primaryText1",children:"Episode"}),r==="clip"?e.jsx(_,{as:"div",kind:"regularBold",children:Ve(i)}):e.jsx(_,{color:"primaryText1",kind:"tiny",children:s})]}),e.jsxs(u,{pt:12,children:[r==="clip"&&e.jsx(_,{color:"primaryText1",children:"Episode"}),e.jsx(_,{color:"primaryText1",kind:"tiny",children:r==="clip"?s:Ve(i)})]}),h&&e.jsxs(u,{pt:12,children:[e.jsx(_,{color:"primaryText1",children:"People"}),e.jsx(u,{pt:4,children:e.jsx(_,{color:"primaryText1",kind:"tiny",children:g?d.map(v=>v.name?v.name:`@${v.twitter_handle}`).join(", "):d==null?void 0:d.join(", ")})})]})]})]})]})})},Zr=()=>{const[t]=z(r=>[r.hoveredNode]);return e.jsxs(en,{children:[t&&e.jsx("div",{id:"tooltip-portal",children:e.jsx(Jr,{node:t})}),e.jsx(kt,{})]})},en=x("div")(({theme:t})=>({position:"absolute",zIndex:1,top:0,left:0,userSelect:"none",pointerEvents:"none",display:"flex",justifyContent:"flex-end",alignItems:"flex-start",height:"100%",width:"100%",padding:"16px",[t.breakpoints.down("sm")]:{top:50}})),tn=({fullSize:t=!0})=>{const r=D(n=>n.sidebarIsOpen);return e.jsx(rn,{align:"center",className:R({"sidebar-is-open":r&&!t}),justify:"center",children:e.jsx($,{color:l.SECONDARY_BLUE,size:64})})},rn=x(u)`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  background-color: ${l.black};
  z-index: 1;
`,nn=f.lazy(()=>B(()=>import("./index-b9779a6b.js"),["assets/index-b9779a6b.js","assets/index-8bba1ac7.js","assets/index-3f17fe3b.css","assets/index-6478aa51.js","assets/index-7c39f604.js","assets/react-toastify.esm-5ee78250.js","assets/react-toastify-b67b3d0b.css","assets/index-a97925f0.js","assets/useSlotProps-cf9b0d61.js","assets/index-28b591f6.js","assets/index.esm-8f5ab791.js","assets/InfoIcon-efa6a53f.js","assets/ClipLoader-1e33f199.js"]).then(({SettingsModal:t})=>({default:t}))),on=f.lazy(()=>B(()=>import("./index-122c3fb4.js"),["assets/index-122c3fb4.js","assets/index-8bba1ac7.js","assets/index-3f17fe3b.css","assets/react-toastify.esm-5ee78250.js","assets/react-toastify-b67b3d0b.css","assets/index-6478aa51.js","assets/index-7c39f604.js","assets/toastMessage-a6b5717c.js","assets/index.esm-8f5ab791.js","assets/CheckIcon-297ff908.js","assets/ClipLoader-1e33f199.js","assets/index-28b591f6.js","assets/InfoIcon-efa6a53f.js"]).then(({AddContentModal:t})=>({default:t}))),sn=f.lazy(()=>B(()=>import("./index-99e64141.js"),["assets/index-99e64141.js","assets/index-8bba1ac7.js","assets/index-3f17fe3b.css","assets/react-toastify.esm-5ee78250.js","assets/react-toastify-b67b3d0b.css","assets/index-6478aa51.js","assets/index-7c39f604.js","assets/toastMessage-a6b5717c.js","assets/index.esm-8f5ab791.js","assets/CheckIcon-297ff908.js","assets/ClipLoader-1e33f199.js","assets/index-28b591f6.js","assets/InfoIcon-efa6a53f.js","assets/index-6d78266f.js","assets/index-ba879fc6.js","assets/Popover-d30a9834.js","assets/useSlotProps-cf9b0d61.js","assets/Select-14e93e9e.js","assets/Stack-22c0aa66.js","assets/Popper-e6f73086.js","assets/constants-84edb5fc.js"]).then(({AddItemModal:t})=>({default:t}))),an=f.lazy(()=>B(()=>import("./index-a465bfba.js"),["assets/index-a465bfba.js","assets/index-8bba1ac7.js","assets/index-3f17fe3b.css","assets/index-6478aa51.js","assets/index-7c39f604.js","assets/react-toastify.esm-5ee78250.js","assets/react-toastify-b67b3d0b.css","assets/generateCategoricalChart-2fe79c7c.js","assets/Popover-d30a9834.js","assets/useSlotProps-cf9b0d61.js","assets/InfoIcon-efa6a53f.js","assets/ClipLoader-1e33f199.js","assets/index.esm-8f5ab791.js","assets/NoFilterResultIcon-9e29b12b.js","assets/ChevronUpIcon-6e63c0af.js","assets/index-a97925f0.js","assets/index-26948850.js","assets/index-28b591f6.js","assets/Popper-e6f73086.js","assets/CheckIcon-297ff908.js","assets/SettingsIcon-4354e59a.js","assets/Stack-22c0aa66.js"]).then(({SourcesTableModal:t})=>({default:t}))),ln=f.lazy(()=>B(()=>import("./index-b8ba64ab.js"),["assets/index-b8ba64ab.js","assets/index-8bba1ac7.js","assets/index-3f17fe3b.css","assets/index-6478aa51.js","assets/index-7c39f604.js","assets/react-toastify.esm-5ee78250.js","assets/react-toastify-b67b3d0b.css","assets/index-26948850.js","assets/index-28b591f6.js","assets/index.esm-8f5ab791.js","assets/InfoIcon-efa6a53f.js","assets/Skeleton-1c903b57.js","assets/ClipLoader-1e33f199.js"]).then(({EditNodeNameModal:t})=>({default:t}))),cn=f.lazy(()=>B(()=>import("./index-4269c7c7.js"),["assets/index-4269c7c7.js","assets/index-8bba1ac7.js","assets/index-3f17fe3b.css","assets/index-6478aa51.js","assets/index-7c39f604.js","assets/react-toastify.esm-5ee78250.js","assets/react-toastify-b67b3d0b.css","assets/toastMessage-a6b5717c.js","assets/index.esm-8f5ab791.js","assets/Skeleton-1c903b57.js","assets/ClipLoader-1e33f199.js"]).then(({RemoveNodeModal:t})=>({default:t}))),dn=f.lazy(()=>B(()=>import("./index-66cc55b9.js"),["assets/index-66cc55b9.js","assets/index-8bba1ac7.js","assets/index-3f17fe3b.css","assets/index-6478aa51.js","assets/index-7c39f604.js","assets/react-toastify.esm-5ee78250.js","assets/react-toastify-b67b3d0b.css","assets/toastMessage-a6b5717c.js","assets/index.esm-8f5ab791.js","assets/index-6d78266f.js","assets/index-ba879fc6.js","assets/Popover-d30a9834.js","assets/useSlotProps-cf9b0d61.js","assets/Select-14e93e9e.js","assets/Stack-22c0aa66.js","assets/Popper-e6f73086.js","assets/constants-84edb5fc.js","assets/index-26948850.js","assets/ClipLoader-1e33f199.js"]).then(({AddNodeEdgeModal:t})=>({default:t}))),pn=()=>e.jsxs(e.Fragment,{children:[e.jsx(sn,{}),e.jsx(on,{}),e.jsx(nn,{}),e.jsx(ln,{}),e.jsx(cn,{}),e.jsx(an,{}),e.jsx(dn,{})]}),un=()=>{const t=D(r=>r.appMetaData);return e.jsxs(hn,{children:[e.jsxs(xn,{children:[e.jsx(e.Fragment,{children:t.title&&e.jsx(_,{className:"title",color:"white",children:t.title})}),e.jsx(_,{className:"subtitle",children:" Second Brain"})]}),e.jsx(Ht,{})]})},hn=x(u).attrs({align:"center",direction:"row",grow:1,justify:"flex-start"})`
  height: 64px;
  position: absolute;
  top: 0px;
  left: 64px;
  right: 32px;
  transition: opacity 1s;
  z-index: 99;
  padding: 20px 23px;
`,xn=x.div`
  ${It.smallOnly`
    display: none;
  `}

  width: 367px;

  .title {
    color: var(--Primary-Text, #fff);
    font-family: Barlow;
    font-size: 22px;
    font-style: normal;
    font-weight: 700;
    line-height: 16px; /* 72.727% */
    letter-spacing: 0.22px;
  }

  .subtitle {
    color: ${l.GRAY6};
    font-family: Barlow;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0.22px;
  }
`,fn=()=>{const[t,r]=f.useState(!0),n=Kt();f.useEffect(()=>{r(!0)},[n]);const s=()=>{r(!1)};return n&&t?e.jsxs(mn,{align:"center",direction:"column",justify:"center",onClick:s,children:[e.jsx("img",{alt:"screen",src:"jamboard_kiosk.png"}),e.jsxs(u,{align:"center",direction:"column",justify:"center",children:[e.jsx(we,{children:"Second Brain is currently"}),e.jsx(we,{style:{fontWeight:600},children:"optimized for Desktop."}),e.jsx(we,{children:"Mobile support coming soon."})]}),e.jsx(F,{color:"secondary",onClick:s,variant:"contained",children:"Got It"})]}):null},mn=x(u)`
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.75);
  gap: 28px;
  z-index: 2000000000;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`,we=x(_)`
  color: #fff;
  text-align: center;
  font-family: Barlow;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  margin: 1px;
`,gn={},yn=f.createContext(gn),jn=()=>{const[t,r]=f.useState(!1),n=f.useMemo(()=>({isShow:t,setIsShow:r}),[t]);return e.jsx(yn.Provider,{value:n})},C=x(kr)`
  && {
    color: ${l.white};
    border: none;
    padding: 6px 27px 6px 0;
    color: ${l.GRAY3};
    font-family: Barlow;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
    max-width: 200px;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  &.empty {
    width: 36px;
    padding: 0;
  }
`,Be=x(fe)`
  && {
    height: 48px;
    padding: 0 36px;
  }
  &:nth-child(odd) {
    background-color: ${l.BG3};
  }
`,Re=x($r)`
  && {
    border-bottom: 1px solid ${l.black};
  }

  ${C} {
    color: ${l.white};
    font-family: Barlow;
    font-size: 11px;
    font-style: normal;
    font-weight: 700;
    line-height: 18px; /* 163.636% */
    letter-spacing: 1.1px;
    text-transform: uppercase;
  }
`,he=x(F)`
  &.selected {
    background: ${l.white};
    color: ${l.BG1};
    pointer-events: none;
  }

  & + & {
    margin-left: 16px;
  }
`,Me=x(u)`
  margin-bottom: 16px;
  padding: 0 36px;
  ${_} {
    margin-bottom: 0;
  }
`,bn=({data:t})=>{const r=z(a=>a.setQueuedSources),[n,s]=f.useState(""),i=async a=>{if(t!=null&&t.length)try{const o=await Nt.enable();await qt(a,o.pubkey),r(t.filter(p=>p.ref_id!==a))}catch(o){console.warn(o)}},c=async a=>{if(!(!a||!(t!=null&&t.length))){s(a);try{await at(a),r(t==null?void 0:t.filter(o=>o.ref_id!==a))}catch(o){console.warn(o)}finally{s("")}}};return t!=null&&t.length?e.jsxs(Ne,{component:"table",children:[e.jsx(Re,{children:e.jsxs(fe,{component:"tr",children:[e.jsx(C,{className:"empty"}),e.jsx(C,{children:"Type"}),e.jsx(C,{children:"Source"}),e.jsx(C,{}),e.jsx(C,{className:"empty"})]})}),(t==null?void 0:t.length)&&e.jsx("tbody",{children:t==null?void 0:t.map(a=>e.jsxs(Be,{children:[e.jsx(C,{className:"empty"}),e.jsx(C,{children:q[a.source_type]}),e.jsx(C,{width:"268px",children:a.source_type==="twitter_handle"?e.jsxs(Ke,{href:`${jt}/${a.source}?open=system`,target:"_blank",children:["@",a.source]}):e.jsx(Ke,{href:`${a.source}?open=system`,target:"_blank",children:a.source})}),e.jsx(C,{className:"cell-center",children:e.jsxs(u,{direction:"row",justify:"space-between",children:[e.jsx("div",{className:"approve-wrapper",children:e.jsx(He,{className:"centered",onClick:()=>i(a.ref_id),children:e.jsx(ft,{color:l.primaryGreen,fontSize:24})})}),e.jsx("div",{className:"delete-wrapper",children:n===a.ref_id?e.jsx($,{color:l.white,size:16}):e.jsx(yt,{message:"Are you sure ?",onConfirm:()=>c(a.ref_id),children:e.jsx(He,{className:"centered",children:e.jsx(mt,{color:l.primaryRed,fontSize:24})})})})]})}),e.jsx(C,{className:"empty"})]},a.source))})]}):e.jsxs(u,{children:[e.jsx(_,{children:"There is not any results for selected filters"}),e.jsx(Pe,{})]})},He=x(u)`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  cursor: pointer;
  background: transparent;
  color: ${l.lightBlue500};
  &.centered {
    margin: 0 auto;
  }

  & + & {
    margin-left: 4px;
  }
`,Ke=x.a`
  color: ${l.white};
  text-decoration: underline;
  &:visited {
    color: ${l.white};
  }
  &:hover {
    cursor: pointer;
  }
`,vn=()=>{const[t,r]=f.useState(!0),[n,s]=f.useState(""),[i,c]=z(p=>[p.queuedSources,p.setQueuedSources]);f.useEffect(()=>{(async()=>{r(!0);try{const d=await lt({approved:"False"});c(d.data)}catch(d){console.warn(d)}finally{r(!1)}})()},[c]);const a=p=>{s(n===p||!p?"":p)},o=i==null?void 0:i.filter(p=>!n||p.source_type===n);return e.jsxs(wn,{align:"stretch",direction:"column",justify:"flex-end",children:[e.jsxs(Me,{align:"flex-start",justify:"space-between",children:[e.jsx(_,{className:"title",children:"Queued Sources"}),e.jsx(_,{className:"subtitle",children:"This is a queue of pending sources waiting for approval or denial from graph users. If you think a source will provide good content for the graph, you can pay to approve it. Think of this as an investment: you pay to add it to the source table, and if the content is popular you will earn from it. If content is not relevant to the graph, you should deny it."})]}),e.jsxs(u,{className:"filters",direction:"row",pb:16,px:36,children:[e.jsx(he,{className:R({selected:!n}),onClick:()=>a(""),size:"small",children:"All"}),Object.keys(q).map(p=>e.jsx(he,{className:R({selected:p===n}),onClick:()=>a(p),size:"small",children:q[p]},p))]}),e.jsx(Sn,{align:"center",justify:t?"center":"flex-start",children:t?e.jsx($,{color:l.white}):e.jsx(bn,{data:o})})]})},wn=x(u)`
  flex: 1;

  .title {
    margin-bottom: 32px;
    font-size: 20px;
    color: ${l.white};
    font-family: Barlow;
    font-size: 22px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  .subtitle {
    color: ${l.GRAY3};
    font-family: Barlow;
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  & .filters {
    overflow-x: auto;
  }
`,Sn=x(u)`
  min-height: 0;
  overflow: auto;
  flex: 1;
  width: 100%;
`,Tn=({onSearch:t,placeholder:r,activeIcon:n,loadingIcon:s,defaultIcon:i,...c})=>{const[a,o]=f.useState(""),[p,d]=f.useState(!1),h=()=>{o(""),t(""),d(!1)},g=j=>{!j.target.value&&h(),o(j.target.value)},y=j=>{const{value:m}=j.currentTarget;o(m),!p&&(d(!0),setTimeout(()=>{t(m),m||h(),d(!1)},1e3),m||h())},v=()=>p?e.jsx(qe,{children:e.jsx(Se,{type:"button",children:s})}):e.jsx(qe,{children:a?e.jsx(Se,{onClick:h,type:"button",children:n}):e.jsx(Se,{type:"button",children:i})});return e.jsxs(_n,{children:[e.jsx(Cn,{autoComplete:"off",autoCorrect:"off",inputProps:{"aria-label":"search sources"},onChange:g,onKeyDown:j=>{j.key==="Enter"&&y(j)},placeholder:r,value:a,...c}),v()]})},qe=x(u)`
  top: -50%;
  right: -3%;
  z-index: 3;
  position: absolute;
  transform: translate(-50%, 50%);
`,Se=x(Y)`
  font-size: 24px;
`,_n=x(ge)`
  && {
    width: 100%;
    height: 40px;
    display: flex;
    max-width: 637px;
    position: relative;
    align-items: center;
    box-sizing: border-box;
    padding-top: 0px;
  }
`,Cn=x(ye)`
  .MuiInputBase-input {
    z-index: 2;
    width: 100%;
    height: 48px;
    height: 40px;
    color: #fff;
    font-size: 15px;
    box-shadow: none;
    border-radius: 6px;
    pointer-events: auto;
    background-color: ${l.BG2};
    padding: 0px 8px 0px 16px !important;
    box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);

    &:focus,
    &:active {
      color: ${l.white};
      background-color: ${l.BG2_ACTIVE_INPUT};
      outline: 1px solid ${l.primaryBlue};
    }

    &:hover {
      background-color: ${l.BG2_ACTIVE_INPUT};
    }

    &::placeholder {
      font-size: 15px;
      text-align: left;
      font-weight: 500;
      line-height: 16px;
      letter-spacing: 0em;
      font-family: Barlow;
      color: ${l.GRAY7};
    }
  }
  width: 100%;
`,An=({data:t,canEdit:r=!1})=>{const n=z(o=>o.setSources),[s,i]=f.useState(""),c=async(o,p)=>{if(t!=null&&t.length)try{await Xt(o,p);const d=t==null?void 0:t.findIndex(g=>g.ref_id===o),h=[...t];h[d]={...h[d],source:p.source},n(h)}catch(d){console.warn(d)}},a=async o=>{if(!(!o||!(t!=null&&t.length))){i(o);try{await at(o),n(t==null?void 0:t.filter(p=>p.ref_id!==o))}catch(p){console.warn(p)}finally{i("")}}};return t!=null&&t.length?e.jsxs(Ne,{"aria-label":"a dense table",component:"table",id:"sources-table",size:"small",children:[e.jsx(Re,{children:e.jsxs(fe,{component:"tr",children:[e.jsx(C,{className:"empty"}),e.jsx(C,{children:"Type"}),e.jsx(C,{align:"left",children:"Source"}),r&&e.jsx(C,{align:"left"}),e.jsx(C,{className:"empty"})]})}),e.jsx(Pr,{component:"tbody",children:t==null?void 0:t.map(o=>e.jsxs(Be,{children:[e.jsx(C,{className:"empty"}),e.jsx(C,{align:"left",children:q[o.source_type]}),e.jsx(C,{align:"left",children:e.jsx(kn,{condition:r,wrapper:p=>e.jsx($n,{id:o.ref_id,onSave:d=>c(o.ref_id,{source:d,source_type:o.source_type}),value:o.source,children:p}),children:o.source_type===Fe||o.source_type===We||o.source_type===Ge?e.jsxs(e.Fragment,{children:[o.source_type===Fe&&e.jsxs(Te,{href:`${jt}/${o.source}`,target:"_blank",children:["@",o.source]}),o.source_type===We&&e.jsx(Te,{href:`${o.source}${o.source.includes("?")?"&":"?"}open=system`,target:"_blank",children:o.source}),o.source_type===Ge&&e.jsx(Te,{href:o.source,target:"_blank",children:o.source})]}):e.jsx("div",{children:o.source})})}),r&&e.jsx(C,{align:"left",children:e.jsx("div",{className:"delete-wrapper",id:`delete-${o.source}`,children:s===o.ref_id?e.jsx($,{color:l.white}):e.jsx(yt,{message:"Are you sure ?",onConfirm:()=>a(o.ref_id),children:e.jsx(K,{className:"centered",children:e.jsx(_r,{})})})})}),e.jsx(C,{className:"empty"})]},o.source))})]}):e.jsxs(Pn,{children:[e.jsx(Er,{}),e.jsx(_,{className:"text",children:"There is not any results for selected filters"})]})};function kn({condition:t,wrapper:r,children:n}){return t?r(n):n}const $n=({value:t,onSave:r,id:n,children:s})=>{const[i,c]=f.useState(!1),[a,o]=f.useState(t),[p,d]=f.useState(!1),h=async()=>{if(n){d(!0);try{await r(a),c(!1)}catch(g){console.warn(g)}finally{d(!1)}}};return e.jsx("div",{children:i?e.jsxs(En,{direction:"row",children:[e.jsx(zr,{className:"editable-cell__input",name:"cell-input",onChange:g=>o(g),value:a}),e.jsx(K,{align:"center",justify:"center",children:p?e.jsx($,{}):e.jsx(Cr,{onClick:h})}),e.jsx(K,{align:"center",className:"secondary",justify:"center",onClick:()=>c(!1),children:e.jsx(gt,{})})]}):e.jsxs(zn,{direction:"row",children:[s,e.jsx(K,{onClick:()=>c(!0),children:e.jsx(Ar,{size:20})})]})})},En=x(u)`
  display: flex;
  width: 250px;
  border: 2px solid ${l.lightBlue300};
  padding: 4px;
  height: 28px;
  border-radius: 8px;
  box-sizing: border-box;

  .editable-cell__input {
    flex: 1;
    -webkit-text-fill-color: #fff;
    padding: 0 4px;
    color: #fff;
  }
`,K=x(u)`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  cursor: pointer;
  background: transparent;
  color: ${l.lightBlue500};
  &.centered {
    margin: 0 auto;
  }

  & + & {
    margin-left: 4px;
  }
`,Pn=x(u)`
  margin-top: 120px;
  width: 165px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  .text {
    text-align: center;
    font-family: Barlow;
    font-size: 16px;
    font-weight: 500;
    line-height: 19px;
    letter-spacing: 0em;
    color: ${l.GRAY6};
  }
`,zn=x(u)`
  display: flex;
  padding: 4px;
  position: relative;

  ${K} {
    visibility: hidden;
  }

  &:hover {
    ${K} {
      visibility: visible;
    }
  }
`,Te=x.a`
  color: ${l.white};
  text-decoration: underline;
  &:visited {
    color: ${l.white};
  }
`,In=()=>{const[t,r]=f.useState(!0),[n,s]=f.useState(""),[i,c]=z(g=>[g.sources,g.setSources]),[a]=se(g=>[g.isAdmin]),[o,p]=f.useState("");f.useEffect(()=>{(async()=>{r(!0);try{const y=await lt();c(y.data)}catch(y){console.warn(y)}finally{r(!1)}})()},[c]);const d=g=>{s(n===g||!g?"":g)},h=f.useMemo(()=>i==null?void 0:i.filter(g=>(!n||g.source_type===n)&&(g.source.toLowerCase().startsWith(o.toLowerCase())||g.source.toLowerCase().includes(o.toLowerCase()))),[o,n,i]);return e.jsxs(Nn,{align:"stretch",direction:"column",justify:"flex-end",children:[e.jsx(Me,{align:"center",direction:"row",justify:"space-between",children:e.jsx(_,{className:"title",children:"Sources for this Graph"})}),e.jsx(Ln,{children:e.jsx(Tn,{activeIcon:e.jsx(V,{}),defaultIcon:e.jsx(me,{}),loadingIcon:e.jsx($,{color:l.PRIMARY_BLUE,size:24}),onSearch:p,placeholder:"Find Topic"})}),e.jsxs(u,{className:"filters",direction:"row",pb:16,px:36,children:[e.jsx(he,{className:R({selected:!n}),onClick:()=>d(""),size:"small",children:"All"}),Object.keys(q).map(g=>e.jsx(he,{className:R({selected:g===n}),onClick:()=>d(g),size:"small",children:q[g]},g))]}),e.jsx(On,{align:"center",justify:t?"center":"flex-start",children:t?e.jsx($,{color:l.white}):e.jsx(An,{canEdit:a,data:h})})]})},Nn=x(u)`
  flex: 1;
  .title {
    font-size: 20px;
    color: ${l.white};
    font-family: Barlow;
    font-size: 22px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  & .filters {
    overflow-x: auto;
  }
`,On=x(u)`
  min-height: 0;
  overflow: auto;
  flex: 1;
  width: 100%;
`,Ln=x(u)`
  margin: 0 0 16px 36px;
`,Dn=({onSelect:t,selectedTopic:r})=>{const[n,s]=f.useState(!1),[i,c]=f.useState(""),[a,o]=f.useState([]),[p,d]=f.useState(!1),h=f.useRef(null);f.useEffect(()=>()=>o([]),[o]);const g=async m=>{const w={muted:"False",sort_by:bt,search:m,skip:"0",limit:"1000"};d(!0);try{const b=await ct(w);o(b.data)}catch{o([])}finally{d(!1)}},y=f.useMemo(()=>nt.debounce(g,300),[]),v=m=>{t(m)},j=m=>{if(c(m),!m){o([]);return}m.length>2&&y(m)};return r?e.jsxs(Mn,{children:[e.jsx("div",{className:"value",children:r.topic}),e.jsx(u,{className:"icon",onClick:()=>t(null),children:e.jsx(V,{})})]}):e.jsxs(e.Fragment,{children:[e.jsxs(ge,{ref:h,component:"form",onSubmit:m=>m.preventDefault(),sx:{p:"2px 4px",display:"flex",alignItems:"center",width:200},children:[e.jsx(ye,{inputProps:{"aria-label":"search topic"},onChange:m=>j(m.target.value),onFocus:()=>s(!0),placeholder:"Search",size:"small",sx:{ml:1,flex:1},value:i}),i&&e.jsxs(e.Fragment,{children:[e.jsx(Xe,{"aria-label":"search",onClick:()=>j(""),type:"button",children:e.jsx(V,{})}),e.jsx(Oe,{orientation:"vertical",sx:{height:28,m:.5}})]}),e.jsx(Xe,{"aria-label":"search",type:"button",children:p?e.jsx($,{color:l.white,size:24}):e.jsx(me,{})})]}),h.current&&a.length?e.jsx(Rn,{anchorEl:h.current,open:n,placement:"bottom",children:e.jsx(e.Fragment,{children:a.map(m=>e.jsx(Bn,{className:R({active:r===m.ref_id}),onClick:()=>v(m),children:m.topic},"option"))})}):null]})},Bn=x(u).attrs({direction:"row",align:"center"})`
  font-family: Barlow;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  overflow: hidden;
  width: 200px;
  color: ${l.GRAY3};
  margin-bottom: 4px;
  cursor: pointer;
  &.active {
    color: ${l.white};
  }
  &:hover {
    color: ${l.white};
  }

  .icon {
    margin-right: 8px;
    width: 9px;
    font-size: 10px;
  }
`,Rn=x(_t)`
  && {
    z-index: 99999;
    background: ${l.BUTTON1};
    min-width: 200px;
    padding: 16px;
    color: ${l.GRAY3};
    box-shadow: 0px 1px 6px 0px rgba(0, 0, 0, 0.2);
    border-radius: 6px;
    max-height: 200px;
    overflow: auto;
  }
`,Mn=x(u).attrs({direction:"row",justify:"flex-start",align:"center"})`
  .value {
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .icon {
    margin-left: 8px;
    width: 20px;
    height: 20px;
    color: ${l.white};
    background: ${l.primaryBlue};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
`,Xe=x(Y)`
  font-size: 24px;
`,Fn=({selectedType:t,setSelectedType:r})=>{const[n,s]=f.useState(null),[i,c]=f.useState([]);f.useEffect(()=>{(async()=>{try{const{data:h}=await Qt();c(h.edge_types)}catch(h){console.warn(h)}})()},[c]);const a=d=>{s(d.currentTarget)},o=()=>{s(null)},p=d=>{r(d),o()};return e.jsxs("div",{children:[e.jsxs(Wn,{onClick:a,children:[e.jsx("div",{className:"text",children:"Type"}),e.jsx("div",{className:"value",children:t}),e.jsx("div",{className:"icon",children:n?e.jsx(St,{}):e.jsx(wt,{})})]}),e.jsx(Vn,{anchorEl:n,anchorOrigin:{vertical:"bottom",horizontal:"left"},anchorPosition:{top:62,left:0},onClose:o,open:!!n,transformOrigin:{vertical:"top",horizontal:"left"},children:e.jsx(Tt,{children:i.map(d=>e.jsxs(Gn,{className:R({active:d===t}),onClick:()=>p(d),children:[e.jsx("span",{className:"icon",children:d===t?e.jsx(Ct,{}):null}),e.jsx("span",{children:d})]},d))})})]})},Wn=x(u).attrs({direction:"row",align:"center"})`
  cursor: pointer;
  flex-grow: 1;
  color: ${l.GRAY6};
  font-family: Barlow;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  padding: 0 8px;
  .value,
  .icon {
    color: ${l.white};
  }

  .value {
    margin: 0 8px 0 4px;
  }
`,Gn=x(u).attrs({direction:"row",align:"center"})`
  font-family: Barlow;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  color: ${l.GRAY3};
  height: 27px;
  cursor: pointer;
  &.active {
    color: ${l.white};
  }
  &:hover {
    color: ${l.white};
  }

  .icon {
    margin-right: 8px;
    width: 9px;
    font-size: 10px;
  }
`,Vn=x(Le)`
  .MuiPaper-root {
    background: ${l.BUTTON1};
    min-width: 149px;
    padding: 16px;
    color: ${l.GRAY3};
    box-shadow: 0px 1px 6px 0px rgba(0, 0, 0, 0.2);
    border-radius: 6px;
  }
`,Yn=({from:t,onSelect:r,selectedTopic:n,selectedType:s,setSelectedType:i})=>e.jsxs(u,{children:[e.jsx(u,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(u,{align:"center",direction:"row",children:e.jsx(Un,{children:"Add edge"})})}),e.jsxs(Hn,{mb:12,children:[e.jsxs(_e,{children:[e.jsx("div",{className:"label",children:"From"}),e.jsx("div",{children:t})]}),e.jsx(_e,{children:e.jsx(Fn,{selectedType:s,setSelectedType:i})}),e.jsxs(_e,{children:[e.jsx("div",{className:"label",children:"To"}),e.jsx(Dn,{onSelect:r,selectedTopic:n})]})]})]}),Un=x(_)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,Hn=x(u).attrs({align:"flex-start",direction:"row",justify:"flex-start"})`
  color: ${l.white};
  .label {
    margin-bottom: 8px;
    font-weight: 500;
    font-size: 14px;
    color: ${l.GRAY3};
  }
`,_e=x(u)`
  flex: 1 1 100%;
`,Kn=({topic:t,onClose:r})=>{const{close:n}=G("addEdge"),[s]=O(j=>[j.data]),i=ie({mode:"onChange"}),[c,a]=f.useState(!1),[o,p]=f.useState(null),[d,h]=f.useState(""),g=()=>{r(),n()},y=async()=>{if(!(!o||!s)){a(!0);try{await Jt({from:t.ref_id,to:o==null?void 0:o.ref_id,relationship:d});const{ref_id:j}=t,{ref_id:m}=o;if(s){const w={...s};w[j]={...w[j],edgeList:[...w[j].edgeList,d]},w[m]&&(w[m]={...w[m],edgeList:[...w[m].edgeList,d]}),O.setState({data:w})}g()}catch(j){console.warn(j)}finally{a(!1)}}},v=c||!o||!d;return e.jsx(De,{id:"addEdge",kind:"large",onClose:g,preventOutsideClose:!0,children:e.jsxs(ae,{...i,children:[e.jsx(Yn,{from:t.topic,onSelect:p,selectedTopic:o,selectedType:d,setSelectedType:h}),e.jsxs(F,{color:"secondary",disabled:v,onClick:y,size:"large",variant:"contained",children:["Confirm",c&&e.jsx($,{color:l.BLUE_PRESS_STATE,size:10})]})]})})},qn=()=>e.jsxs(u,{children:[e.jsx(u,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(u,{align:"center",direction:"row",children:e.jsx(Xn,{children:"Edit topic"})})}),e.jsx(u,{mb:12,children:e.jsx(ne,{id:"cy-topic",maxLength:50,name:"topic",placeholder:"Add your topic",rules:{...Ot}})})]}),Xn=x(_)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,Qn=({topic:t,onClose:r})=>{const{close:n}=G("editTopic"),[s]=O(v=>[v.data]),i=ie({mode:"onChange"}),{watch:c,setValue:a,reset:o}=i,[p,d]=f.useState(!1);f.useEffect(()=>(t&&a("topic",t==null?void 0:t.topic),()=>{o()}),[t,a,o]);const h=c("topic"),g=()=>{r(),n()},y=async()=>{d(!0);try{if(await dt((t==null?void 0:t.ref_id)||"",{topic:h.trim()}),s){const v={...s};v[t==null?void 0:t.ref_id].topic=h.trim(),O.setState({data:v})}g()}catch(v){console.warn(v)}finally{d(!1)}};return e.jsx(De,{id:"editTopic",kind:"regular",onClose:g,preventOutsideClose:!0,children:e.jsxs(ae,{...i,children:[e.jsx(qn,{}),e.jsxs(F,{color:"secondary",disabled:p,onClick:y,size:"large",variant:"contained",children:["Save",p&&e.jsx($,{color:l.BLUE_PRESS_STATE,size:10})]})]})})},Jn=({onSelect:t,selectedTopic:r})=>{const[n,s]=f.useState(!1),[i,c]=f.useState(""),[a,o]=f.useState([]),[p,d]=f.useState(!1),h=f.useRef(null);f.useEffect(()=>()=>o([]),[o]);const g=async m=>{const w={muted:"False",sort_by:bt,search:m,skip:"0",limit:"1000"};d(!0);try{const b=await ct(w);o(b.data)}catch{o([])}finally{d(!1)}},y=f.useMemo(()=>nt.debounce(g,300),[]),v=m=>{t(m)},j=m=>{if(c(m),!m){o([]);return}m.length>2&&y(m)};return r?e.jsxs(to,{children:[e.jsx("div",{className:"value",children:r.topic}),e.jsx(u,{className:"icon",onClick:()=>t(null),children:e.jsx(V,{})})]}):e.jsxs(e.Fragment,{children:[e.jsxs(ge,{ref:h,component:"form",onSubmit:m=>m.preventDefault(),sx:{p:"2px 4px",display:"flex",alignItems:"center",width:200},children:[e.jsx(ye,{inputProps:{"aria-label":"search topic"},onChange:m=>j(m.target.value),onFocus:()=>s(!0),placeholder:"Search",size:"small",sx:{ml:1,flex:1},value:i}),i&&e.jsxs(e.Fragment,{children:[e.jsx(Qe,{"aria-label":"search",onClick:()=>j(""),type:"button",children:e.jsx(V,{})}),e.jsx(Oe,{orientation:"vertical",sx:{height:28,m:.5}})]}),e.jsx(Qe,{"aria-label":"search",type:"button",children:p?e.jsx($,{color:l.white,size:24}):e.jsx(me,{})})]}),h.current&&a.length?e.jsx(eo,{anchorEl:h.current,open:n,placement:"bottom",children:e.jsx(e.Fragment,{children:a.map(m=>e.jsx(Zn,{className:R({active:r===m.ref_id}),onClick:()=>v(m),children:m.topic},"option"))})}):null]})},Zn=x(u).attrs({direction:"row",align:"center"})`
  font-family: Barlow;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  overflow: hidden;
  width: 200px;
  color: ${l.GRAY3};
  margin-bottom: 4px;
  cursor: pointer;
  &.active {
    color: ${l.white};
  }
  &:hover {
    color: ${l.white};
  }

  .icon {
    margin-right: 8px;
    width: 9px;
    font-size: 10px;
  }
`,eo=x(_t)`
  && {
    z-index: 99999;
    background: ${l.BUTTON1};
    min-width: 200px;
    padding: 16px;
    color: ${l.GRAY3};
    box-shadow: 0px 1px 6px 0px rgba(0, 0, 0, 0.2);
    border-radius: 6px;
    max-height: 200px;
    overflow: auto;
  }
`,to=x(u).attrs({direction:"row",justify:"flex-start",align:"center"})`
  .value {
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .icon {
    margin-left: 8px;
    width: 20px;
    height: 20px;
    color: ${l.white};
    background: ${l.primaryBlue};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
`,Qe=x(Y)`
  font-size: 24px;
`,ro=({from:t,onSelect:r,selectedTopic:n})=>e.jsxs(u,{children:[e.jsx(u,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(u,{align:"center",direction:"row",children:e.jsx(no,{children:"Merge topic"})})}),e.jsxs(oo,{mb:12,children:[e.jsxs(Je,{children:[e.jsx("div",{className:"label",children:"From"}),e.jsx("div",{children:t})]}),e.jsxs(Je,{ml:24,children:[e.jsx("div",{className:"label",children:"To"}),e.jsx(Jn,{onSelect:r,selectedTopic:n})]})]})]}),no=x(_)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,oo=x(u).attrs({align:"flex-start",direction:"row",justify:"flex-start"})`
  color: ${l.white};
  .label {
    margin-bottom: 8px;
    font-weight: 500;
    font-size: 14px;
    color: ${l.GRAY3};
  }
`,Je=x(u)`
  flex: 1 1 100%;
`,so=({topic:t,onClose:r})=>{const{close:n}=G("mergeTopic"),[s,i,c]=O(b=>[b.data,b.ids,b.total]),a=ie({mode:"onChange"}),{watch:o,setValue:p,reset:d}=a,[h,g]=f.useState(!1),[y,v]=f.useState(null);f.useEffect(()=>(t&&p("topic",t==null?void 0:t.topic),()=>{d()}),[t,p,d]);const j=o("topic"),m=()=>{r(),n()},w=async()=>{if(!(!y||!s)){g(!0);try{await Zt({from:t.ref_id,to:y==null?void 0:y.ref_id});const{ref_id:b}=t;if(s[b]={...s[b],edgeList:[vt],edgeCount:s[b].edgeCount-1},O.setState({ids:i.filter(A=>A!==y.ref_id),total:c-1}),s){const A={...s};A[t==null?void 0:t.ref_id].topic=j.trim(),O.setState({data:A})}m()}catch(b){console.warn(b)}finally{g(!1)}}};return e.jsx(De,{id:"mergeTopic",kind:"regular",onClose:m,preventOutsideClose:!0,children:e.jsxs(ae,{...a,children:[e.jsx(ro,{from:t.topic,onSelect:v,selectedTopic:y}),e.jsxs(F,{color:"secondary",disabled:h,onClick:w,size:"large",variant:"contained",children:["Merge topics",h&&e.jsx($,{color:l.BLUE_PRESS_STATE,size:10})]})]})})},io=()=>{const[t,r]=O(a=>[a.filters,a.setFilters]),[n,s]=f.useState(""),i=a=>{a.preventDefault(),r({search:n})},c=()=>{s(""),t.search&&r({search:""})};return e.jsxs(ge,{component:"form",onSubmit:i,sx:{p:"2px 4px",display:"flex",alignItems:"center",width:300},children:[e.jsx(ye,{autoComplete:"off",autoCorrect:"off",inputProps:{"aria-label":"search topic"},onChange:a=>s(a.target.value),placeholder:"Search",size:"small",spellCheck:"false",sx:{ml:1,flex:1},value:n}),n&&e.jsxs(e.Fragment,{children:[e.jsx(Ze,{"aria-label":"search",onClick:c,type:"button",children:e.jsx(V,{})}),e.jsx(Oe,{orientation:"vertical",sx:{height:28,m:.5}})]}),e.jsx(Ze,{"aria-label":"search",onClick:i,type:"button",children:e.jsx(me,{})})]})},Ze=x(Y)`
  font-size: 24px;
`,ao=({onChangeFilter:t,currentFilter:r})=>{const[n,s]=f.useState(null),i=o=>{s(o.currentTarget)},c=()=>{s(null)},a=o=>{t(o),c()};return e.jsxs("div",{children:[e.jsxs(lo,{onClick:i,children:[e.jsx("div",{className:"text",children:"Sort By"}),e.jsx("div",{className:"value",children:ve[r]}),e.jsx("div",{className:"icon",children:n?e.jsx(St,{}):e.jsx(wt,{})})]}),e.jsx(po,{anchorEl:n,anchorOrigin:{vertical:"bottom",horizontal:"left"},anchorPosition:{top:62,left:0},onClose:c,open:!!n,transformOrigin:{vertical:"top",horizontal:"left"},children:e.jsx(Tt,{children:Object.keys(ve).map(o=>e.jsxs(co,{className:R({active:o===r}),onClick:()=>a(o),children:[e.jsx("span",{className:"icon",children:o===r?e.jsx(Ct,{}):null}),e.jsx("span",{children:ve[o]})]},o))})})]})},lo=x(u).attrs({direction:"row",align:"center"})`
  cursor: pointer;
  flex-grow: 1;
  color: ${l.GRAY6};
  font-family: Barlow;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  padding: 0 8px;
  .value,
  .icon {
    color: ${l.white};
  }

  .value {
    margin: 0 8px 0 4px;
  }
`,co=x(u).attrs({direction:"row",align:"center"})`
  font-family: Barlow;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  color: ${l.GRAY3};
  height: 27px;
  cursor: pointer;
  &.active {
    color: ${l.white};
  }
  &:hover {
    color: ${l.white};
  }

  .icon {
    margin-right: 8px;
    width: 9px;
    font-size: 10px;
  }
`,po=x(Le)`
  && {
    z-index: 99999;
  }

  .MuiPaper-root {
    background: ${l.BUTTON1};
    min-width: 149px;
    padding: 16px;
    color: ${l.GRAY3};
    box-shadow: 0px 1px 6px 0px rgba(0, 0, 0, 0.2);
    border-radius: 6px;
  }
`,uo=({topic:t,onClick:r,onSearch:n})=>{const[s,i]=O(h=>[h.ids,h.total]),[c,a]=f.useState(!1),o=t.date_added_to_graph.toString(),p=async(h,g)=>{a(!0);try{await dt(h,{muted_topic:g}),O.setState({ids:s.filter(y=>y!==h),total:i-1})}catch(y){console.warn(y)}},d=h=>{n(h.topic)};return e.jsxs(Be,{children:[e.jsx(C,{className:"empty"}),e.jsx(C,{onClick:()=>d(t),children:e.jsx(ho,{children:t.topic})}),e.jsx(C,{children:t.edgeCount}),e.jsx(C,{children:t.edgeList.join(", ")}),e.jsx(C,{children:e.jsx("span",{children:new Date(Number(o)*1e3).toDateString()})}),e.jsx(C,{className:"cell-center",children:e.jsx(u,{direction:"row",justify:"space-between",children:e.jsx("div",{className:"approve-wrapper",children:c?e.jsx($,{color:l.white,size:16}):e.jsx(e.Fragment,{children:t.muted_topic?e.jsx(et,{className:"centered",onClick:()=>p(t.ref_id,!1),children:e.jsx(ft,{color:l.primaryGreen,fontSize:24})}):e.jsx(et,{className:"centered",onClick:()=>p(t.ref_id,!0),children:e.jsx(mt,{color:l.primaryRed,fontSize:24})})})})})}),e.jsx(C,{children:e.jsx(Y,{onClick:h=>r(h,t.ref_id),children:e.jsx(Ir,{})})})]},t.topic)},et=x(u)`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  cursor: pointer;
  background: transparent;
  color: ${l.lightBlue500};
  &.centered {
    margin: 0 auto;
  }

  & + & {
    margin-left: 4px;
  }
`,ho=x.span`
  cursor: pointer;
  :hover {
    text-decoration: underline;
  }
`,xo=f.memo(uo),fo=({showMuted:t,onTopicEdit:r})=>{const{close:n}=G("sourcesTable"),[s,i]=E.useState(null),[c,a]=E.useState(""),[o,p]=D(b=>[b.setSearchFormValue,b.setCurrentSearch]),[d,h]=O(b=>[b.data,b.ids]),g=f.useCallback((b,A)=>{i(b.currentTarget),a(A)},[]),y=()=>{i(null)},v=b=>{o(b),p(b),n()},j=b=>{r(c,b),y()},m=!!s,w=m?"simple-popover":void 0;return d?e.jsx(e.Fragment,{children:Object.keys(d).length?e.jsxs(e.Fragment,{children:[e.jsxs(Ne,{component:"table",children:[e.jsx(Re,{children:e.jsxs(fe,{component:"tr",children:[e.jsx(C,{className:"empty"}),e.jsx(C,{children:"Type"}),e.jsx(C,{children:"Edge Count"}),e.jsx(C,{children:"Edge list"}),e.jsx(C,{children:"Date"}),e.jsx(C,{children:t?"Unmute":"Mute"}),e.jsx(C,{})]})}),d&&e.jsx("tbody",{children:h==null?void 0:h.map(b=>e.jsx(xo,{onClick:g,onSearch:v,topic:d[b]},b))})]}),c?e.jsxs(mo,{anchorEl:s,anchorOrigin:{vertical:"bottom",horizontal:"right"},id:w,onClose:y,open:m,transformOrigin:{vertical:"top",horizontal:"right"},children:[e.jsx(Ce,{onClick:()=>j("editTopic"),children:"Rename"}),d[c].edgeList.includes(vt)?null:e.jsx(Ce,{onClick:()=>j("mergeTopic"),children:"Merge"}),e.jsx(Ce,{onClick:()=>j("addEdge"),children:"Add edge"})]}):null]}):e.jsxs(u,{children:[e.jsx(_,{children:"There is not any results for selected filters"}),e.jsx(Pe,{})]})}):e.jsxs(u,{children:[e.jsx(_,{children:"There is not any results for selected filters"}),e.jsx(Pe,{})]})},Ce=x(u).attrs({direction:"row",px:16,py:8})`
  cursor: pointer;
  background: ${l.BUTTON1};
  color: ${l.white};

  &:hover {
    background: ${l.BUTTON1_HOVER};
    color: ${l.GRAY3};
  }

  & + & {
    border-top: 1px solid ${l.black};
  }
`,mo=x(Le)`
  && {
    z-index: 9999;
  }
  .MuiPaper-root {
    min-width: 149px;
    color: ${l.GRAY3};
    box-shadow: 0px 1px 6px 0px rgba(0, 0, 0, 0.2);
    border-radius: 6px;
    z-index: 1;
    font-family: Barlow;
    font-size: 14px;
    font-weight: 500;
  }
`,go=()=>{const[t,r]=f.useState(!1),[n,s,i,c,a,o,p]=O(k=>[k.data,k.ids,k.total,k.setTopics,k.filters,k.setFilters,k.terminate]),{open:d}=G("editTopic"),{open:h}=G("mergeTopic"),{open:g}=G("addEdge"),[y,v]=f.useState(null),j={editTopic:d,mergeTopic:h,addEdge:g},m=f.useRef([]);f.useEffect(()=>{s.length&&(m.current=s)},[s]),f.useEffect(()=>{(async()=>{try{r(!0),await c()}catch{console.error("err")}finally{r(!1)}})()},[c,a]);const w=async()=>{try{r(!0),o({page:a.page+1})}catch(k){console.error("Error loading more data:",k)}finally{r(!1)}};f.useEffect(()=>()=>{p()},[p]);const b=k=>{o({sortBy:k})},A=()=>{v(null)},T=(k,P)=>{n&&(v(n[k]),typeof j[P]=="function"&&j[P]())};return e.jsxs(e.Fragment,{children:[e.jsxs(yo,{direction:"column",justify:"flex-end",children:[e.jsxs(Me,{align:"flex-start",direction:"row",justify:"space-between",children:[e.jsx(_,{className:"title",children:"Topics"}),e.jsxs(F,{disabled:t,onClick:()=>o({muted:!a.muted}),size:"medium",children:[a.muted?"Show Unmuted":"Show Muted",t&&e.jsx($,{color:l.BLUE_PRESS_STATE,size:10})]})]}),e.jsxs(bo,{children:[e.jsx(io,{}),e.jsx(ao,{currentFilter:a.sortBy,onChangeFilter:b})]}),e.jsx(jo,{align:"center",justify:t&&!n?"center":"flex-start",children:t&&!n?e.jsx($,{color:l.white}):e.jsxs(e.Fragment,{children:[e.jsx(fo,{onTopicEdit:T,showMuted:a.muted}),i>s.length?e.jsxs(F,{className:"load-more",disabled:t,onClick:w,children:["Load more",t&&e.jsx($,{color:l.BLUE_PRESS_STATE,size:10})]}):null]})})]}),y&&e.jsx(so,{onClose:A,topic:y}),y&&e.jsx(Qn,{onClose:A,topic:y}),y&&e.jsx(Kn,{onClose:A,topic:y})]})},yo=x(u)`
  flex: 1;

  .title {
    font-size: 20px;
    color: ${l.white};
    font-family: Barlow;
    font-size: 22px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  .subtitle {
    color: ${l.GRAY3};
    font-family: Barlow;
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  & .filters {
    overflow-x: auto;
  }

  .load-more {
    margin: 8px auto;
    align-self: center;
  }
`,jo=x(u)`
  min-height: 0;
  overflow: auto;
  flex: 1;
  width: 100%;
`,bo=x(u).attrs({direction:"row",align:"center",justify:"space-between"})`
  padding: 0 36px;
  margin-bottom: 32px;
`,Ae=t=>{const{children:r,value:n,index:s,...i}=t;return n===s?e.jsx(So,{"aria-labelledby":`simple-tab-${s}`,hidden:n!==s,id:`simple-tabpanel-${s}`,role:"tabpanel",...i,children:r}):null};function ke(t){return{id:`simple-tab-${t}`,"aria-controls":`simple-tabpanel-${t}`}}const vo=()=>{const[t,r]=f.useState(0),[n]=se(c=>[c.isAdmin]),[s]=Lt(c=>[c.queuedSourcesFlag]),i=(c,a)=>{r(a)};return e.jsxs(To,{direction:"column",children:[e.jsxs(wo,{"aria-label":"sources tabs",onChange:i,value:t,children:[e.jsx($e,{disableRipple:!0,label:"Sources table",...ke(0)}),n&&s?e.jsx($e,{color:l.white,disableRipple:!0,label:"Queued sources",...ke(1)}):null,n&&e.jsx($e,{color:l.white,disableRipple:!0,label:"Topics",...ke(1)})]}),e.jsx(Ae,{index:0,value:t,children:e.jsx(In,{})}),e.jsx(Ae,{index:1,value:t,children:e.jsx(vn,{})}),e.jsx(Ae,{index:2,value:t,children:e.jsx(go,{})})]})},wo=x(Nr)`
  && {
    background: rgba(0, 0, 0, 0.2);

    .MuiTabs-indicator {
      background: ${l.primaryBlue};
    }
  }
`,$e=x(Or)`
  && {
    padding: 30px 0 24px;
    color: ${l.GRAY6};
    margin-left: 34px;
    font-family: Barlow;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;

    &.Mui-selected {
      color: ${l.white};
    }
  }
`,So=x(u)`
  display: flex;
  flex: 1;
  min-height: 572px;
  padding: 20px 0;
  max-height: 572px;
`,To=x(u)`
  min-height: 0;
  flex: 1;
`,ue={required:{message:"The field is required",value:!0}},_o=({initialValues:t})=>{const r=ie({defaultValues:t,mode:"onSubmit"}),{isSubmitting:n}=r.formState,s=r.handleSubmit(async i=>{try{await er(i)}catch(c){console.warn(c)}});return e.jsx(ae,{...r,children:e.jsx("form",{id:"add-node-form",onSubmit:s,children:e.jsxs(e.Fragment,{children:[e.jsxs(u,{children:[e.jsx(u,{pt:12,children:e.jsx(ne,{id:"cy-about-title-id",label:"Graph Title",maxLength:50,name:"title",placeholder:"Type graph title here...",rules:{...ue}})}),e.jsx(u,{pt:12,children:e.jsx(ne,{id:"cy-about-id",label:"Graph Description",maxLength:50,name:"description",placeholder:"Type graph description here...",rules:{...ue}})}),e.jsx(u,{pt:12,children:e.jsx(ne,{id:"cy-about-mission_statement-id",label:"Mission Statement",maxLength:50,name:"mission_statement",placeholder:"Type mission statement here...",rules:{...ue}})}),e.jsx(u,{pt:12,children:e.jsx(ne,{id:"cy-about-search_term-id",label:"Search Term",maxLength:50,name:"search_term",placeholder:"Type search term here...",rules:{...ue}})})]}),e.jsx(u,{pt:8,children:n?e.jsx(Co,{children:e.jsx($,{color:l.white,size:20})}):e.jsx(At,{disabled:n,id:"add-node-submit-cta",kind:"big",type:"submit",children:"Save changes"})})]})})})},Co=x(u).attrs({align:"center",background:"primaryButton",borderRadius:8,justify:"center"})`
  padding: 16px 24px;
  opacity: 0.5;
`,Ao=({initialValues:t})=>e.jsxs(e.Fragment,{children:[t.title&&e.jsxs(u,{pt:12,children:[e.jsx(_,{kind:"regular",children:"Graph Title"}),e.jsx(u,{pt:12,children:e.jsx(_,{className:"value",kind:"medium",children:t.title})})]}),t.description&&e.jsxs(u,{pt:12,children:[e.jsx(_,{kind:"regular",children:"Graph Description"}),e.jsx(u,{pt:12,children:e.jsx(_,{className:"value",kind:"medium",children:t.description})})]}),t.mission_statement&&e.jsxs(u,{pt:12,children:[e.jsx(_,{kind:"regular",children:"Mission Statement"}),e.jsx(u,{pt:12,children:e.jsx(_,{className:"value",kind:"medium",children:t.mission_statement})})]})]}),ko=()=>{const[t]=se(n=>[n.isAdmin]),r=D(n=>n.appMetaData);return e.jsxs($o,{align:"stretch",direction:"column",justify:"flex-end",children:[e.jsx(Po,{align:"center",direction:"row",justify:"space-between",children:e.jsx(_,{className:"title",children:"About"})}),e.jsx(Eo,{align:"stretch",justify:"flex-start",children:t?e.jsx(_o,{initialValues:r}):e.jsx(Ao,{initialValues:r})})]})},$o=x(u)`
  border-radius: 8px;
  box-shadow: 0px 5px 6px rgb(0 0 0 / 50%);
  padding: 16px;
  flex: 1;

  .title {
    margin-bottom: 16px;
    font-size: 20px;
  }

  .value {
    color: ${l.lightBlue400};
  }
`,Eo=x(u)`
  min-height: 0;
  overflow: auto;
  flex: 1;
  width: 100%;
`,Po=x(u)`
  margin-bottom: 16px;
  ${_} {
    margin-bottom: 0;
  }
`;var zo=["type","layout","connectNulls","ref"];function X(t){"@babel/helpers - typeof";return X=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},X(t)}function Io(t,r){if(t==null)return{};var n=No(t,r),s,i;if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);for(i=0;i<c.length;i++)s=c[i],!(r.indexOf(s)>=0)&&Object.prototype.propertyIsEnumerable.call(t,s)&&(n[s]=t[s])}return n}function No(t,r){if(t==null)return{};var n={},s=Object.keys(t),i,c;for(c=0;c<s.length;c++)i=s[c],!(r.indexOf(i)>=0)&&(n[i]=t[i]);return n}function oe(){return oe=Object.assign?Object.assign.bind():function(t){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(t[s]=n[s])}return t},oe.apply(this,arguments)}function tt(t,r){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);r&&(s=s.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,s)}return n}function N(t){for(var r=1;r<arguments.length;r++){var n=arguments[r]!=null?arguments[r]:{};r%2?tt(Object(n),!0).forEach(function(s){L(t,s,n[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):tt(Object(n)).forEach(function(s){Object.defineProperty(t,s,Object.getOwnPropertyDescriptor(n,s))})}return t}function H(t){return Bo(t)||Do(t)||Lo(t)||Oo()}function Oo(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Lo(t,r){if(t){if(typeof t=="string")return ze(t,r);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ze(t,r)}}function Do(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Bo(t){if(Array.isArray(t))return ze(t)}function ze(t,r){(r==null||r>t.length)&&(r=t.length);for(var n=0,s=new Array(r);n<r;n++)s[n]=t[n];return s}function Ro(t,r){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")}function rt(t,r){for(var n=0;n<r.length;n++){var s=r[n];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,$t(s.key),s)}}function Mo(t,r,n){return r&&rt(t.prototype,r),n&&rt(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function Fo(t,r){if(typeof r!="function"&&r!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(r&&r.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),r&&Ie(t,r)}function Ie(t,r){return Ie=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(s,i){return s.__proto__=i,s},Ie(t,r)}function Wo(t){var r=Vo();return function(){var s=xe(t),i;if(r){var c=xe(this).constructor;i=Reflect.construct(s,arguments,c)}else i=s.apply(this,arguments);return Go(this,i)}}function Go(t,r){if(r&&(X(r)==="object"||typeof r=="function"))return r;if(r!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return M(t)}function M(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function Vo(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function xe(t){return xe=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},xe(t)}function L(t,r,n){return r=$t(r),r in t?Object.defineProperty(t,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[r]=n,t}function $t(t){var r=Yo(t,"string");return X(r)==="symbol"?r:String(r)}function Yo(t,r){if(X(t)!=="object"||t===null)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var s=n.call(t,r||"default");if(X(s)!=="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(t)}var le=function(t){Fo(n,t);var r=Wo(n);function n(){var s;Ro(this,n);for(var i=arguments.length,c=new Array(i),a=0;a<i;a++)c[a]=arguments[a];return s=r.call.apply(r,[this].concat(c)),L(M(s),"state",{isAnimationFinished:!0,totalLength:0}),L(M(s),"generateSimpleStrokeDasharray",function(o,p){return"".concat(p,"px ").concat(o-p,"px")}),L(M(s),"getStrokeDasharray",function(o,p,d){var h=d.reduce(function(A,T){return A+T});if(!h)return s.generateSimpleStrokeDasharray(p,o);for(var g=Math.floor(o/h),y=o%h,v=p-o,j=[],m=0,w=0;m<d.length;w+=d[m],++m)if(w+d[m]>y){j=[].concat(H(d.slice(0,m)),[y-w]);break}var b=j.length%2===0?[0,v]:[v];return[].concat(H(n.repeat(d,g)),H(j),b).map(function(A){return"".concat(A,"px")}).join(", ")}),L(M(s),"id",dr("recharts-line-")),L(M(s),"pathRef",function(o){s.mainCurve=o}),L(M(s),"handleAnimationEnd",function(){s.setState({isAnimationFinished:!0}),s.props.onAnimationEnd&&s.props.onAnimationEnd()}),L(M(s),"handleAnimationStart",function(){s.setState({isAnimationFinished:!1}),s.props.onAnimationStart&&s.props.onAnimationStart()}),s}return Mo(n,[{key:"componentDidMount",value:function(){if(this.props.isAnimationActive){var i=this.getTotalLength();this.setState({totalLength:i})}}},{key:"componentDidUpdate",value:function(){if(this.props.isAnimationActive){var i=this.getTotalLength();i!==this.state.totalLength&&this.setState({totalLength:i})}}},{key:"getTotalLength",value:function(){var i=this.mainCurve;try{return i&&i.getTotalLength&&i.getTotalLength()||0}catch{return 0}}},{key:"renderErrorBar",value:function(i,c){if(this.props.isAnimationActive&&!this.state.isAnimationFinished)return null;var a=this.props,o=a.points,p=a.xAxis,d=a.yAxis,h=a.layout,g=a.children,y=pr(g,ur);if(!y)return null;var v=function(w,b){return{x:w.x,y:w.y,value:w.value,errorVal:ut(w.payload,b)}},j={clipPath:i?"url(#clipPath-".concat(c,")"):null};return E.createElement(be,j,y.map(function(m){return E.cloneElement(m,{key:"bar-".concat(m.props.dataKey),data:o,xAxis:p,yAxis:d,layout:h,dataPointFormatter:v})}))}},{key:"renderDots",value:function(i,c,a){var o=this.props.isAnimationActive;if(o&&!this.state.isAnimationFinished)return null;var p=this.props,d=p.dot,h=p.points,g=p.dataKey,y=pe(this.props),v=pe(d,!0),j=h.map(function(w,b){var A=N(N(N({key:"dot-".concat(b),r:3},y),v),{},{value:w.value,dataKey:g,cx:w.x,cy:w.y,index:b,payload:w.payload});return n.renderDotItem(d,A)}),m={clipPath:i?"url(#clipPath-".concat(c?"":"dots-").concat(a,")"):null};return E.createElement(be,oe({className:"recharts-line-dots",key:"dots"},m),j)}},{key:"renderCurveStatically",value:function(i,c,a,o){var p=this.props,d=p.type,h=p.layout,g=p.connectNulls;p.ref;var y=Io(p,zo),v=N(N(N({},pe(y,!0)),{},{fill:"none",className:"recharts-line-curve",clipPath:c?"url(#clipPath-".concat(a,")"):null,points:i},o),{},{type:d,layout:h,connectNulls:g});return E.createElement(hr,oe({},v,{pathRef:this.pathRef}))}},{key:"renderCurveWithAnimation",value:function(i,c){var a=this,o=this.props,p=o.points,d=o.strokeDasharray,h=o.isAnimationActive,g=o.animationBegin,y=o.animationDuration,v=o.animationEasing,j=o.animationId,m=o.animateNewValues,w=o.width,b=o.height,A=this.state,T=A.prevPoints,k=A.totalLength;return E.createElement(xr,{begin:g,duration:y,isActive:h,easing:v,from:{t:0},to:{t:1},key:"line-".concat(j),onAnimationEnd:this.handleAnimationEnd,onAnimationStart:this.handleAnimationStart},function(P){var S=P.t;if(T){var Q=T.length/p.length,W=p.map(function(I,je){var ee=Math.floor(je*Q);if(T[ee]){var te=T[ee],U=re(te.x,I.x),Et=re(te.y,I.y);return N(N({},I),{},{x:U(S),y:Et(S)})}if(m){var Pt=re(w*2,I.x),zt=re(b/2,I.y);return N(N({},I),{},{x:Pt(S),y:zt(S)})}return N(N({},I),{},{x:I.x,y:I.y})});return a.renderCurveStatically(W,i,c)}var ce=re(0,k),J=ce(S),Z;if(d){var de="".concat(d).split(/[,\s]+/gim).map(function(I){return parseFloat(I)});Z=a.getStrokeDasharray(J,k,de)}else Z=a.generateSimpleStrokeDasharray(k,J);return a.renderCurveStatically(p,i,c,{strokeDasharray:Z})})}},{key:"renderCurve",value:function(i,c){var a=this.props,o=a.points,p=a.isAnimationActive,d=this.state,h=d.prevPoints,g=d.totalLength;return p&&o&&o.length&&(!h&&g>0||!fr(h,o))?this.renderCurveWithAnimation(i,c):this.renderCurveStatically(o,i,c)}},{key:"render",value:function(){var i,c=this.props,a=c.hide,o=c.dot,p=c.points,d=c.className,h=c.xAxis,g=c.yAxis,y=c.top,v=c.left,j=c.width,m=c.height,w=c.isAnimationActive,b=c.id;if(a||!p||!p.length)return null;var A=this.state.isAnimationFinished,T=p.length===1,k=Ye("recharts-line",d),P=h&&h.allowDataOverflow,S=g&&g.allowDataOverflow,Q=P||S,W=Ee(b)?this.id:b,ce=(i=pe(o))!==null&&i!==void 0?i:{r:3,strokeWidth:2},J=ce.r,Z=J===void 0?3:J,de=ce.strokeWidth,I=de===void 0?2:de,je=mr(o)?o:{},ee=je.clipDot,te=ee===void 0?!0:ee,U=Z*2+I;return E.createElement(be,{className:k},P||S?E.createElement("defs",null,E.createElement("clipPath",{id:"clipPath-".concat(W)},E.createElement("rect",{x:P?v:v-j/2,y:S?y:y-m/2,width:P?j:j*2,height:S?m:m*2})),!te&&E.createElement("clipPath",{id:"clipPath-dots-".concat(W)},E.createElement("rect",{x:v-U/2,y:y-U/2,width:j+U,height:m+U}))):null,!T&&this.renderCurve(Q,W),this.renderErrorBar(Q,W),(T||o)&&this.renderDots(Q,te,W),(!w||A)&&gr.renderCallByParent(this.props,p))}}],[{key:"getDerivedStateFromProps",value:function(i,c){return i.animationId!==c.prevAnimationId?{prevAnimationId:i.animationId,curPoints:i.points,prevPoints:c.curPoints}:i.points!==c.curPoints?{curPoints:i.points}:null}},{key:"repeat",value:function(i,c){for(var a=i.length%2!==0?[].concat(H(i),[0]):i,o=[],p=0;p<c;++p)o=[].concat(H(o),H(a));return o}},{key:"renderDotItem",value:function(i,c){var a;if(E.isValidElement(i))a=E.cloneElement(i,c);else if(Dt(i))a=i(c);else{var o=Ye("recharts-line-dot",i?i.className:"");a=E.createElement(pt,oe({},c,{className:o}))}return a}}]),n}(f.PureComponent);L(le,"displayName","Line");L(le,"defaultProps",{xAxisId:0,yAxisId:0,connectNulls:!1,activeDot:!0,dot:!0,legendType:"line",stroke:"#3182bd",strokeWidth:1,fill:"#fff",points:[],isAnimationActive:!cr.isSsr,animateNewValues:!0,animationBegin:0,animationDuration:1500,animationEasing:"ease",hide:!1,label:!1});L(le,"getComposedData",function(t){var r=t.props,n=t.xAxis,s=t.yAxis,i=t.xAxisTicks,c=t.yAxisTicks,a=t.dataKey,o=t.bandSize,p=t.displayedData,d=t.offset,h=r.layout,g=p.map(function(y,v){var j=ut(y,a);return h==="horizontal"?{x:Ue({axis:n,ticks:i,bandSize:o,entry:y,index:v}),y:Ee(j)?null:s.scale(j),value:j,payload:y}:{x:Ee(j)?null:n.scale(j),y:Ue({axis:s,ticks:c,bandSize:o,entry:y,index:v}),value:j,payload:y}});return N({points:g,layout:h},d)});var Uo=yr({chartName:"LineChart",GraphicalChild:le,axisComponents:[{axisType:"xAxis",AxisComp:ht},{axisType:"yAxis",AxisComp:xt}],formatAxisMap:jr});const Ho=({cx:t,cy:r})=>e.jsx(pt,{cx:t,cy:r,fill:l.blueTextAccent,r:2}),Ko=({data:t,width:r=500,height:n=300})=>e.jsx(e.Fragment,{children:(t==null?void 0:t.length)&&e.jsxs(Uo,{data:t,height:n,id:"cy-sentiment-chart",margin:{bottom:5,left:-20,right:30,top:5},width:r,children:[e.jsx(br,{stroke:l.lightBlue300,strokeDasharray:"5 5"}),e.jsx(ht,{dataKey:"date",interval:Math.floor(t.length/3),stroke:l.blueTextAccent}),e.jsx(xt,{domain:[0,10],stroke:l.blueTextAccent}),e.jsx(vr,{}),e.jsx(le,{dataKey:"score",dot:e.jsx(Ho,{}),stroke:"#8884d8",type:"monotone"})]})}),qo=()=>{const[t,r]=f.useState(void 0),[n]=se(a=>[a.setBudget]),[s,i]=f.useState(!1),c=async()=>{i(!0),tr(n).then(async a=>{r(a==null?void 0:a.data.filter(o=>o.date).map(o=>({date:Rt.unix(Number(String(o.date).split(".")[0])).format("MM/DD/YY"),score:o.sentiment_score}))),await ot(n)}).catch().finally(()=>{i(!1)})};return e.jsxs(Xo,{align:"flex-start",direction:"column",id:"cy-sentiment-chart-wrapper",justify:"flex-end",children:[e.jsx(_,{className:"title",children:"Sentiment chart"}),s&&e.jsx(Lr,{alignItems:"center",component:"div",flexGrow:1,p:4,spacing:2,width:"100%",children:e.jsx(Bt,{color:l.white})}),!(t!=null&&t.length)&&e.jsx(Qo,{className:"button",id:"cy-get-sentiments-btn",onClick:c,children:"Get top 100 sentiments"}),e.jsx(Ko,{data:t})]})},Xo=x(u)`
  border-radius: 8px;
  box-shadow: 0px 5px 6px rgb(0 0 0 / 50%);
  padding: 16px;

  .title {
    margin-bottom: 16px;
    font-size: 20px;
  }
`,Qo=x(At)`
  height: 48px;
`,Jo=600,Zo={about:e.jsx(ko,{}),sentiment:e.jsx(qo,{}),sources:e.jsx(vo,{}),"":null},es=()=>{const[t,r]=D(n=>[n.secondarySidebarActiveTab,n.setSecondarySidebarActiveTab]);return e.jsx(wr,{direction:"left",in:!!t,mountOnEnter:!0,unmountOnExit:!0,children:e.jsxs(ts,{id:"secondary-sidebar-wrapper",children:[e.jsx(rs,{id:"cy-close-secondary-sidebar",onClick:()=>r(""),children:e.jsx(gt,{})}),Zo[t]]})})},ts=x(u)(({theme:t})=>({background:l.BG1,height:"100vh",padding:"16px 20px",width:"100%",zIndex:30,display:"flex",[t.breakpoints.up("sm")]:{width:Jo}})),rs=x(u).attrs({align:"center",justify:"center",p:5})`
  background-color: ${l.inputBg1};
  border-radius: 50%;
  color: ${l.mainBottomIcons};
  cursor: pointer;
  transition-duration: 0.2s;
  align-self: flex-end;
  margin-bottom: 16px;

  &:hover {
    background-color: ${l.gray200};
  }
`,ns=x(rr)`
  .Toastify__toast {
    background-color: ${l.body};
  }
  .Toastify__toast-body {
    background-color: ${l.body};
    color: ${l.white};
  }
  .Toastify__close-button {
    color: ${l.white};
  }
  .Toastify__progress-bar--error {
    background-color: ${l.primaryRed};
  }
  .Toastify__progress-bar--success {
    background-color: ${l.primaryGreen};
  }
`,os=x(u)`
  height: 100%;
  width: 100%;
  background-color: ${l.black};
`,ss=x(u)`
  position: absolute;
  bottom: 8px;
  left: 8px;
  color: ${l.white};
  font-size: 12px;
  opacity: 0.5;
`,is=f.lazy(()=>B(()=>import("./index-d497f059.js"),["assets/index-d497f059.js","assets/index-8bba1ac7.js","assets/index-3f17fe3b.css","assets/SourcesTableIcon-00a5009d.js","assets/SettingsIcon-4354e59a.js","assets/index-7c39f604.js"]).then(({MainToolbar:t})=>({default:t}))),as=f.lazy(()=>B(()=>import("./index-09720df9.js"),["assets/index-09720df9.js","assets/index-8bba1ac7.js","assets/index-3f17fe3b.css","assets/EditIcon-cdac6bbf.js","assets/react-toastify.esm-5ee78250.js","assets/react-toastify-b67b3d0b.css","assets/generateCategoricalChart-2fe79c7c.js","assets/Popover-d30a9834.js","assets/useSlotProps-cf9b0d61.js","assets/InfoIcon-efa6a53f.js","assets/index-ba879fc6.js","assets/index.esm-8f5ab791.js","assets/PlusIcon-41cf9aed.js","assets/index-7c39f604.js","assets/ClipLoader-1e33f199.js","assets/NoFilterResultIcon-9e29b12b.js","assets/ChevronUpIcon-6e63c0af.js","assets/index-a97925f0.js","assets/index-26948850.js","assets/index-28b591f6.js","assets/index-6478aa51.js","assets/Popper-e6f73086.js","assets/CheckIcon-297ff908.js","assets/SettingsIcon-4354e59a.js","assets/Stack-22c0aa66.js"]).then(({Universe:t})=>({default:t}))),ls=f.lazy(()=>B(()=>import("./index-2e3a2752.js"),["assets/index-2e3a2752.js","assets/index-8bba1ac7.js","assets/index-3f17fe3b.css","assets/react-toastify.esm-5ee78250.js","assets/react-toastify-b67b3d0b.css","assets/SoundIcon-ec607f68.js","assets/Select-14e93e9e.js","assets/Popover-d30a9834.js","assets/useSlotProps-cf9b0d61.js","assets/ChevronUpIcon-6e63c0af.js","assets/generateCategoricalChart-2fe79c7c.js","assets/InfoIcon-efa6a53f.js","assets/CheckIcon-297ff908.js","assets/index.esm-8f5ab791.js","assets/toastMessage-a6b5717c.js","assets/SoundIcon-6125620a.css","assets/index-ba879fc6.js","assets/Skeleton-1c903b57.js","assets/ClipLoader-1e33f199.js","assets/PlusIcon-41cf9aed.js","assets/index-7c39f604.js","assets/index-6478aa51.js"]).then(({SideBar:t})=>({default:t}))),cs=()=>{const[t,r]=se(S=>[S.setBudget,S.setNodeCount]),[n,s]=f.useState(!1),[i,c,a,o,p]=[D(S=>S.setSidebarOpen),D(S=>S.currentSearch),D(S=>S.setCurrentSearch),D(S=>S.setRelevanceSelected),D(S=>S.setTranscriptOpen)],d=Sr(S=>S.setTeachMeAnswer),[h,g,y,v,j,m]=[z(S=>S.data),z(S=>S.setData),z(S=>S.fetchData),z(S=>S.graphStyle),z(S=>S.setSelectedNode),z(S=>S.setCategoryFilter)],w=nr(),b=ie({mode:"onChange"}),A=b.handleSubmit(({search:S})=>{p(!1),j(null),o(!1),a(S),d(""),m(null)}),T=f.useCallback(async()=>{await y(t,{word:c??""}),i(!0),c&&await ot(t)},[y,c,i,t]);f.useEffect(()=>{T()},[c,T]);const k=()=>{if(h){s(!0);const S=ar(v,h.nodes);setTimeout(()=>{g(S),s(!1)},1e3)}};f.useEffect(()=>{k()},[v]);const P=f.useCallback(()=>{r("INCREMENT")},[r]);return f.useEffect(()=>{w&&(w.on("connect_error",S=>{console.error("Socket connection error:",S)}),w.on("newnode",P))},[w,P]),f.useEffect(()=>()=>{w&&w.disconnect()},[w]),e.jsxs(e.Fragment,{children:[e.jsx(or,{}),e.jsx(fn,{}),e.jsx(sr,{hidden:!Mt}),e.jsx(f.Suspense,{fallback:e.jsx("div",{children:"Loading..."}),children:e.jsxs(os,{direction:"row",children:[e.jsx(Tr,{children:e.jsxs(ae,{...b,children:[e.jsx(is,{}),e.jsx(ls,{onSubmit:A}),e.jsx(as,{}),n&&e.jsx(tn,{fullSize:!1}),e.jsx(Zr,{}),e.jsx(es,{}),e.jsx(un,{}),e.jsxs(ss,{children:["v",ir]}),e.jsx(kt,{})]})}),e.jsx(pn,{}),e.jsx(ns,{}),e.jsx(jn,{})]})})]})},As=Object.freeze(Object.defineProperty({__proto__:null,App:cs},Symbol.toStringTag,{value:"Module"}));export{Zr as O,tn as P,vo as S,As as i};
