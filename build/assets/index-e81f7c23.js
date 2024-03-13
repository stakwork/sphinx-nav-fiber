import{s as x,j as e,c as l,F as u,r as f,T,_ as L,m as kt,d as $t,a as Re,Y as Me,R as Fe,u as se,l as tt,b as Et,e as E,f as Pt,i as It,P as zt,h as Nt,g as rt,k as Ot}from"./index-01782a69.js";import{B as R,u as D,C as Lt,I as G,L as Dt,a as nt,b as U,c as Bt,v as Rt,A as ot,P as Mt,d as V,G as Ft,e as M,S as Wt,f as Vt,g as Gt,h as st,i as it,p as Ut,j as at,k as Yt,l as ie,F as ae,m as Ht,n as lt,o as Kt,q as qt,r as Qt,T as Xt,s as Zt,t as Jt,w as er,x as tr,y as rr}from"./react-toastify.esm-d4c7807c.js";import{P as nr,f as We,G as or,u as sr,c as Ve,D as ct,a as ir,E as ar,L as be,b as pe,C as lr,A as cr,i as re,d as dr,e as ke,g as pr,h as ur,j as dt,k as Ge,l as hr,X as pt,Y as ut,m as xr,n as fr,T as mr,S as gr,o as yr,p as jr}from"./generateCategoricalChart-44bb7e25.js";import{C as $}from"./ClipLoader-e8b8ddb1.js";import{M as ht,a as xt,b as br,c as vr,d as ft,e as wr}from"./index.esm-b2fe6b9a.js";import{T as Sr,a as fe,b as Tr,F as $e,M as Ie,C as mt,N as _r,c as Cr,D as ze}from"./NoFilterResultIcon-63603a66.js";import{s as q,T as gt,A as Ne,u as N,I as Ar,E as kr,D as $r,a as yt,Q as jt,S as Er}from"./index-d39042d9.js";import{S as me,C as Pr,a as Ir}from"./ChevronUpIcon-782bc13e.js";import{P as ge,I as ye,a as bt,F as zr}from"./Popover-b826ddf0.js";import{B as Nr,T as ne}from"./index-9298a825.js";import{u as W}from"./index-aba16a9a.js";import{B as Oe}from"./index-aa46beb1.js";import{P as vt}from"./Popper-60e6b823.js";import{C as Or}from"./CheckIcon-cabeb6b1.js";import{S as Lr}from"./SettingsIcon-e2024ff8.js";import{T as Dr,a as Br,B as wt}from"./index-bdc7fdec.js";import{S as Rr}from"./Stack-17d482e0.js";const Mr=()=>{const[t,r]=D(n=>[n.cameraFocusTrigger,n.setCameraFocusTrigger]);return e.jsx(Fr,{href:"",onClick:()=>r(!t),size:"medium",startIcon:e.jsx(Lt,{})})},Fr=x(R)`
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
`,Wr=()=>{const t=f.useRef(null),[r,n]=f.useState(0),s=nt(),a=D(b=>b.setSelectedNode),[c,i]=U(b=>[b.sidebarIsOpen,b.setSidebarOpen]),[o,d,p,h,g,y]=Bt(b=>[b.isPlaying,b.setIsPlaying,b.playingTime,b.playingNode,b.miniPlayerIsVisible,b.setMiniPlayerIsVisible]),[v,j]=h!=null&&h.timestamp?h.timestamp.split("-").map(b=>Rt(b)):[0,0],m=(p-v)/(j-v)*100;f.useEffect(()=>{var P,C;const b=((P=t.current)==null?void 0:P.offsetWidth)||0,A=((C=t.current)==null?void 0:C.scrollWidth)||0;n(A-b)},[]);const w=b=>{y(!1),b.stopPropagation()},S=()=>{a(h),i(!0)},k=c&&(s==null?void 0:s.ref_id)!==(h==null?void 0:h.ref_id)||h&&!c;return g&&h&&k?e.jsxs(Vr,{onClick:S,children:[e.jsxs(Gr,{children:[e.jsx(ot,{src:h.image_url||"",type:h.node_type}),e.jsxs(Ur,{children:[e.jsxs(Qr,{ref:t,children:[e.jsx(qr,{className:"title",scrollValue:r,children:h.episode_title}),e.jsx("div",{className:"subtitle",children:h.show_title})]}),e.jsx(Hr,{"data-testid":"play-pause-button",onClick:b=>{d(!o),b.stopPropagation()},size:"small",children:o?e.jsx(nr,{"data-testid":"pause-icon"}):e.jsx(Mt,{"data-testid":"play-icon"})})]}),e.jsx(Yr,{onClick:b=>w(b),children:e.jsx(V,{})})]}),e.jsx(Kr,{value:m,variant:"determinate"})]}):null},Vr=x(u).attrs({direction:"column",align:"stretch",justify:"space-between"})`
  padding: 8px;
  background: ${l.BG1};
  border-radius: 6px;
  width: 320px;
  height: 72px;
  margin-top: 16px;
  cursor: pointer;
  z-index: 0;
`,Gr=x(u).attrs({direction:"row",align:"center",justify:"flex-start"})``,Ur=x(u).attrs({direction:"row",align:"center",justify:"space-between"})`
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
`,Yr=x(G)`
  padding: 8px;
  color: ${l.GRAY6};
  z-index: 100000;
`,Hr=x(G)`
  && {
    font-size: 36px;
    padding: 2px;
    margin-left: 8px;
    overflow: hidden;
    z-index: 100000;
  }
`,Kr=x(Dt)`
  && {
    flex-shrink: 0;
    height: 2px;
    background-color: ${l.white};
    color: blue;

    .MuiLinearProgress-bar {
      background: rgb(65, 90, 127);
    }
  }
`,qr=x.div`
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
`,Qr=x(u)`
  overflow: hidden;
  flex: 1;
`,St=()=>{const t=nt(),r=D(n=>n.isFetching);return e.jsxs(Xr,{align:"flex-end",id:"actions-toolbar",children:[!r&&e.jsx(Mr,{}),!r&&e.jsx(Ft,{}),e.jsx(Wr,{},t==null?void 0:t.ref_id)]})},Xr=x(u)`
  position: absolute;
  right: 20px;
  bottom: 20px;
  pointer-events: all;
`,Zr=({twitterHandle:t})=>e.jsx(e.Fragment,{children:e.jsx(u,{direction:"row",children:e.jsx(u,{align:"flex-start",pb:12,children:e.jsxs(T,{children:["Tweet by @",t]})})})}),Jr=x(u)(({theme:t})=>({position:"absolute",top:"65px",right:"55px",width:"300px",pointerEvents:"none",background:l.dashboardHeader,boxShadow:"0px 1px 6px rgba(0, 0, 0, 0.1)",color:l.primaryText1,zIndex:100,transition:"opacity 0.6s",padding:t.spacing(2,3),[t.breakpoints.down("sm")]:{padding:t.spacing(1,1.5)}})),en=x(u)`
  width: 22.5%;
`,tn=({node:t})=>{if(!t)return null;const{node_type:r,show_title:n,episode_title:s,description:a,label:c,text:i,type:o,twitter_handle:d}=t,p=t.guests;let h=!1,g=!1;p&&(p.length&&p[0]!==null&&(h=!0),typeof p[0]=="object"&&(g=!0));let y=t.image_url;if(o==="twitter_space"&&(y="twitter_placeholder.png"),y==null)switch(r){case"guest":y="person_placeholder2.png";break;default:y="noimage.jpeg"}return r==="topic"?null:e.jsx(Jr,{borderRadius:8,px:24,py:16,children:r==="tweet"?e.jsx(Zr,{twitterHandle:d}):e.jsxs(e.Fragment,{children:[e.jsxs(u,{direction:"row",children:[e.jsx(en,{}),e.jsx(u,{align:"flex-start",pb:12,children:e.jsx(T,{children:r==null?void 0:r.toUpperCase()})})]}),e.jsxs(u,{direction:"row",children:[e.jsx(u,{pr:12,children:e.jsx(ot,{src:y,type:"person"})}),e.jsxs("div",{children:[o==="guest"?e.jsxs(u,{direction:"column",children:[e.jsx(T,{children:c}),i&&e.jsx(u,{pt:4,children:e.jsxs(T,{color:"primaryText1",kind:"tiny",children:["@",i]})})]}):e.jsx(T,{color:"primaryText1",kind:"tiny",children:n}),e.jsxs(u,{pt:4,children:[r==="clip"||r==="episode"&&e.jsx(T,{color:"primaryText1",children:"Episode"}),r==="clip"?e.jsx(T,{as:"div",kind:"regularBold",children:We(a)}):e.jsx(T,{color:"primaryText1",kind:"tiny",children:s})]}),e.jsxs(u,{pt:12,children:[r==="clip"&&e.jsx(T,{color:"primaryText1",children:"Episode"}),e.jsx(T,{color:"primaryText1",kind:"tiny",children:r==="clip"?s:We(a)})]}),h&&e.jsxs(u,{pt:12,children:[e.jsx(T,{color:"primaryText1",children:"People"}),e.jsx(u,{pt:4,children:e.jsx(T,{color:"primaryText1",kind:"tiny",children:g?p.map(v=>v.name?v.name:`@${v.twitter_handle}`).join(", "):p==null?void 0:p.join(", ")})})]})]})]})]})})},rn=()=>{const[t]=D(r=>[r.hoveredNode]);return e.jsxs(nn,{children:[t&&e.jsx("div",{id:"tooltip-portal",children:e.jsx(tn,{node:t})}),e.jsx(St,{})]})},nn=x("div")(({theme:t})=>({position:"absolute",zIndex:1,top:0,left:0,userSelect:"none",pointerEvents:"none",display:"flex",justifyContent:"flex-end",alignItems:"flex-start",height:"100%",width:"100%",padding:"16px",[t.breakpoints.down("sm")]:{top:50}})),on=({fullSize:t=!0})=>{const r=U(n=>n.sidebarIsOpen);return e.jsx(sn,{align:"center",className:M({"sidebar-is-open":r&&!t}),justify:"center",children:e.jsx($,{color:l.SECONDARY_BLUE,size:64})})},sn=x(u)`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  background-color: ${l.black};
  z-index: 1;
`,an=f.lazy(()=>L(()=>import("./index-ff56cc9d.js"),["assets/index-ff56cc9d.js","assets/index-01782a69.js","assets/index-3f17fe3b.css","assets/index-aa46beb1.js","assets/index-aba16a9a.js","assets/react-toastify.esm-d4c7807c.js","assets/react-toastify-b67b3d0b.css","assets/index-bdc7fdec.js","assets/useSlotProps-2c201f6d.js","assets/index-9298a825.js","assets/index.esm-b2fe6b9a.js","assets/InfoIcon-7fd329ae.js","assets/ClipLoader-e8b8ddb1.js"]).then(({SettingsModal:t})=>({default:t}))),ln=f.lazy(()=>L(()=>import("./index-3ffa05e6.js"),["assets/index-3ffa05e6.js","assets/index-01782a69.js","assets/index-3f17fe3b.css","assets/react-toastify.esm-d4c7807c.js","assets/react-toastify-b67b3d0b.css","assets/index-aa46beb1.js","assets/index-aba16a9a.js","assets/toastMessage-71cf2792.js","assets/index.esm-b2fe6b9a.js","assets/CheckIcon-cabeb6b1.js","assets/ClipLoader-e8b8ddb1.js","assets/index-9298a825.js","assets/InfoIcon-7fd329ae.js"]).then(({AddContentModal:t})=>({default:t}))),cn=f.lazy(()=>L(()=>import("./index-627fa990.js"),["assets/index-627fa990.js","assets/index-01782a69.js","assets/index-3f17fe3b.css","assets/react-toastify.esm-d4c7807c.js","assets/react-toastify-b67b3d0b.css","assets/index-aa46beb1.js","assets/index-aba16a9a.js","assets/toastMessage-71cf2792.js","assets/index.esm-b2fe6b9a.js","assets/CheckIcon-cabeb6b1.js","assets/ClipLoader-e8b8ddb1.js","assets/index-9298a825.js","assets/InfoIcon-7fd329ae.js","assets/index-c3a779a9.js","assets/index-d463d61e.js","assets/Popover-b826ddf0.js","assets/useSlotProps-2c201f6d.js","assets/Select-150c9580.js","assets/Stack-17d482e0.js","assets/Popper-60e6b823.js","assets/constants-84edb5fc.js"]).then(({AddItemModal:t})=>({default:t}))),dn=f.lazy(()=>L(()=>import("./index-75a7771b.js"),["assets/index-75a7771b.js","assets/index-01782a69.js","assets/index-3f17fe3b.css","assets/index-aa46beb1.js","assets/index-aba16a9a.js","assets/react-toastify.esm-d4c7807c.js","assets/react-toastify-b67b3d0b.css","assets/generateCategoricalChart-44bb7e25.js","assets/Popover-b826ddf0.js","assets/useSlotProps-2c201f6d.js","assets/InfoIcon-7fd329ae.js","assets/ClipLoader-e8b8ddb1.js","assets/index.esm-b2fe6b9a.js","assets/NoFilterResultIcon-63603a66.js","assets/ChevronUpIcon-782bc13e.js","assets/index-bdc7fdec.js","assets/index-d39042d9.js","assets/index-9298a825.js","assets/Popper-60e6b823.js","assets/CheckIcon-cabeb6b1.js","assets/SettingsIcon-e2024ff8.js","assets/Stack-17d482e0.js"]).then(({SourcesTableModal:t})=>({default:t}))),pn=f.lazy(()=>L(()=>import("./index-897a0fab.js"),["assets/index-897a0fab.js","assets/index-01782a69.js","assets/index-3f17fe3b.css","assets/index-aa46beb1.js","assets/index-aba16a9a.js","assets/react-toastify.esm-d4c7807c.js","assets/react-toastify-b67b3d0b.css","assets/index-d39042d9.js","assets/index-9298a825.js","assets/index.esm-b2fe6b9a.js","assets/InfoIcon-7fd329ae.js","assets/Skeleton-962854dc.js","assets/ClipLoader-e8b8ddb1.js"]).then(({EditNodeNameModal:t})=>({default:t}))),un=f.lazy(()=>L(()=>import("./index-a28c1959.js"),["assets/index-a28c1959.js","assets/index-01782a69.js","assets/index-3f17fe3b.css","assets/index-aa46beb1.js","assets/index-aba16a9a.js","assets/react-toastify.esm-d4c7807c.js","assets/react-toastify-b67b3d0b.css","assets/toastMessage-71cf2792.js","assets/index.esm-b2fe6b9a.js","assets/Skeleton-962854dc.js","assets/ClipLoader-e8b8ddb1.js"]).then(({RemoveNodeModal:t})=>({default:t}))),hn=f.lazy(()=>L(()=>import("./index-0f97a649.js"),["assets/index-0f97a649.js","assets/index-01782a69.js","assets/index-3f17fe3b.css","assets/index-aa46beb1.js","assets/index-aba16a9a.js","assets/react-toastify.esm-d4c7807c.js","assets/react-toastify-b67b3d0b.css","assets/toastMessage-71cf2792.js","assets/index.esm-b2fe6b9a.js","assets/index-c3a779a9.js","assets/index-d463d61e.js","assets/Popover-b826ddf0.js","assets/useSlotProps-2c201f6d.js","assets/Select-150c9580.js","assets/Stack-17d482e0.js","assets/Popper-60e6b823.js","assets/constants-84edb5fc.js","assets/index-d39042d9.js","assets/ClipLoader-e8b8ddb1.js"]).then(({AddNodeEdgeModal:t})=>({default:t}))),xn=()=>e.jsxs(e.Fragment,{children:[e.jsx(cn,{}),e.jsx(ln,{}),e.jsx(an,{}),e.jsx(pn,{}),e.jsx(un,{}),e.jsx(dn,{}),e.jsx(hn,{})]}),fn=()=>{const t=U(r=>r.appMetaData);return e.jsxs(mn,{children:[e.jsxs(gn,{children:[e.jsx(e.Fragment,{children:t.title&&e.jsx(T,{className:"title",color:"white",children:t.title})}),e.jsx(T,{className:"subtitle",children:" Second Brain"})]}),e.jsx(Wt,{})]})},mn=x(u).attrs({align:"center",direction:"row",grow:1,justify:"flex-start"})`
  height: 64px;
  position: absolute;
  top: 0px;
  left: 64px;
  right: 32px;
  transition: opacity 1s;
  z-index: 99;
  padding: 20px 23px;
`,gn=x.div`
  ${kt.smallOnly`
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
`,yn=()=>{const[t,r]=f.useState(!0),n=Vt();f.useEffect(()=>{r(!0)},[n]);const s=()=>{r(!1)};return n&&t?e.jsxs(jn,{align:"center",direction:"column",justify:"center",onClick:s,children:[e.jsx("img",{alt:"screen",src:"jamboard_kiosk.png"}),e.jsxs(u,{align:"center",direction:"column",justify:"center",children:[e.jsx(ve,{children:"Second Brain is currently"}),e.jsx(ve,{style:{fontWeight:600},children:"optimized for Desktop."}),e.jsx(ve,{children:"Mobile support coming soon."})]}),e.jsx(R,{color:"secondary",onClick:s,variant:"contained",children:"Got It"})]}):null},jn=x(u)`
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.75);
  gap: 28px;
  z-index: 2000000000;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`,ve=x(T)`
  color: #fff;
  text-align: center;
  font-family: Barlow;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  margin: 1px;
`,bn={},vn=f.createContext(bn),wn=()=>{const[t,r]=f.useState(!1),n=f.useMemo(()=>({isShow:t,setIsShow:r}),[t]);return e.jsx(vn.Provider,{value:n})},_=x(Sr)`
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
`,Le=x(fe)`
  && {
    height: 48px;
    padding: 0 36px;
  }
  &:nth-child(odd) {
    background-color: ${l.BG3};
  }
`,De=x(Tr)`
  && {
    border-bottom: 1px solid ${l.black};
  }

  ${_} {
    color: ${l.white};
    font-family: Barlow;
    font-size: 11px;
    font-style: normal;
    font-weight: 700;
    line-height: 18px; /* 163.636% */
    letter-spacing: 1.1px;
    text-transform: uppercase;
  }
`,he=x(R)`
  &.selected {
    background: ${l.white};
    color: ${l.BG1};
    pointer-events: none;
  }

  & + & {
    margin-left: 16px;
  }
`,Be=x(u)`
  margin-bottom: 16px;
  padding: 0 36px;
  ${T} {
    margin-bottom: 0;
  }
`,Sn=({data:t})=>{const r=D(i=>i.setQueuedSources),[n,s]=f.useState(""),a=async i=>{if(t!=null&&t.length)try{const o=await $t.enable();await Gt(i,o.pubkey),r(t.filter(d=>d.ref_id!==i))}catch(o){console.warn(o)}},c=async i=>{if(!(!i||!(t!=null&&t.length))){s(i);try{await st(i),r(t==null?void 0:t.filter(o=>o.ref_id!==i))}catch(o){console.warn(o)}finally{s("")}}};return t!=null&&t.length?e.jsxs(Ie,{component:"table",children:[e.jsx(De,{children:e.jsxs(fe,{component:"tr",children:[e.jsx(_,{className:"empty"}),e.jsx(_,{children:"Type"}),e.jsx(_,{children:"Source"}),e.jsx(_,{}),e.jsx(_,{className:"empty"})]})}),(t==null?void 0:t.length)&&e.jsx("tbody",{children:t==null?void 0:t.map(i=>e.jsxs(Le,{children:[e.jsx(_,{className:"empty"}),e.jsx(_,{children:q[i.source_type]}),e.jsx(_,{width:"268px",children:i.source_type==="twitter_handle"?e.jsxs(Ye,{href:`${gt}/${i.source}?open=system`,target:"_blank",children:["@",i.source]}):e.jsx(Ye,{href:`${i.source}?open=system`,target:"_blank",children:i.source})}),e.jsx(_,{className:"cell-center",children:e.jsxs(u,{direction:"row",justify:"space-between",children:[e.jsx("div",{className:"approve-wrapper",children:e.jsx(Ue,{className:"centered",onClick:()=>a(i.ref_id),children:e.jsx(ht,{color:l.primaryGreen,fontSize:24})})}),e.jsx("div",{className:"delete-wrapper",children:n===i.ref_id?e.jsx($,{color:l.white,size:16}):e.jsx(mt,{message:"Are you sure ?",onConfirm:()=>c(i.ref_id),children:e.jsx(Ue,{className:"centered",children:e.jsx(xt,{color:l.primaryRed,fontSize:24})})})})]})}),e.jsx(_,{className:"empty"})]},i.source))})]}):e.jsxs(u,{children:[e.jsx(T,{children:"There is not any results for selected filters"}),e.jsx($e,{})]})},Ue=x(u)`
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
`,Ye=x.a`
  color: ${l.white};
  text-decoration: underline;
  &:visited {
    color: ${l.white};
  }
  &:hover {
    cursor: pointer;
  }
`,Tn=()=>{const[t,r]=f.useState(!0),[n,s]=f.useState(""),[a,c]=D(d=>[d.queuedSources,d.setQueuedSources]);f.useEffect(()=>{(async()=>{r(!0);try{const p=await it({approved:"False"});c(p.data)}catch(p){console.warn(p)}finally{r(!1)}})()},[c]);const i=d=>{s(n===d||!d?"":d)},o=a==null?void 0:a.filter(d=>!n||d.source_type===n);return e.jsxs(_n,{align:"stretch",direction:"column",justify:"flex-end",children:[e.jsxs(Be,{align:"flex-start",justify:"space-between",children:[e.jsx(T,{className:"title",children:"Queued Sources"}),e.jsx(T,{className:"subtitle",children:"This is a queue of pending sources waiting for approval or denial from graph users. If you think a source will provide good content for the graph, you can pay to approve it. Think of this as an investment: you pay to add it to the source table, and if the content is popular you will earn from it. If content is not relevant to the graph, you should deny it."})]}),e.jsxs(u,{className:"filters",direction:"row",pb:16,px:36,children:[e.jsx(he,{className:M({selected:!n}),onClick:()=>i(""),size:"small",children:"All"}),Object.keys(q).map(d=>e.jsx(he,{className:M({selected:d===n}),onClick:()=>i(d),size:"small",children:q[d]},d))]}),e.jsx(Cn,{align:"center",justify:t?"center":"flex-start",children:t?e.jsx($,{color:l.white}):e.jsx(Sn,{data:o})})]})},_n=x(u)`
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
`,Cn=x(u)`
  min-height: 0;
  overflow: auto;
  flex: 1;
  width: 100%;
`,An=({onSearch:t,placeholder:r,activeIcon:n,loadingIcon:s,defaultIcon:a,...c})=>{const[i,o]=f.useState(""),[d,p]=f.useState(!1),h=()=>{o(""),t(""),p(!1)},g=j=>{!j.target.value&&h(),o(j.target.value)},y=j=>{const{value:m}=j.currentTarget;o(m),!d&&(p(!0),setTimeout(()=>{t(m),m||h(),p(!1)},1e3),m||h())},v=()=>d?e.jsx(He,{children:e.jsx(we,{type:"button",children:s})}):e.jsx(He,{children:i?e.jsx(we,{onClick:h,type:"button",children:n}):e.jsx(we,{type:"button",children:a})});return e.jsxs(kn,{children:[e.jsx($n,{autoComplete:"off",autoCorrect:"off",inputProps:{"aria-label":"search sources"},onChange:g,onKeyDown:j=>{j.key==="Enter"&&y(j)},placeholder:r,value:i,...c}),v()]})},He=x(u)`
  top: -50%;
  right: -3%;
  z-index: 3;
  position: absolute;
  transform: translate(-50%, 50%);
`,we=x(G)`
  font-size: 24px;
`,kn=x(ge)`
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
`,$n=x(ye)`
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
`,En=({data:t,canEdit:r=!1})=>{const n=D(o=>o.setSources),[s,a]=f.useState(""),c=async(o,d)=>{if(t!=null&&t.length)try{await Ut(o,d);const p=t==null?void 0:t.findIndex(g=>g.ref_id===o),h=[...t];h[p]={...h[p],source:d.source},n(h)}catch(p){console.warn(p)}},i=async o=>{if(!(!o||!(t!=null&&t.length))){a(o);try{await st(o),n(t==null?void 0:t.filter(d=>d.ref_id!==o))}catch(d){console.warn(d)}finally{a("")}}};return t!=null&&t.length?e.jsxs(Ie,{"aria-label":"a dense table",component:"table",id:"sources-table",size:"small",children:[e.jsx(De,{children:e.jsxs(fe,{component:"tr",children:[e.jsx(_,{className:"empty"}),e.jsx(_,{children:"Type"}),e.jsx(_,{align:"left",children:"Source"}),r&&e.jsx(_,{align:"left"}),e.jsx(_,{className:"empty"})]})}),e.jsx(Cr,{component:"tbody",children:t==null?void 0:t.map(o=>e.jsxs(Le,{children:[e.jsx(_,{className:"empty"}),e.jsx(_,{align:"left",children:q[o.source_type]}),e.jsx(_,{align:"left",children:e.jsx(Pn,{condition:r,wrapper:d=>e.jsx(In,{id:o.ref_id,onSave:p=>c(o.ref_id,{source:p,source_type:o.source_type}),value:o.source,children:d}),children:o.source_type===Re||o.source_type===Me||o.source_type===Fe?e.jsxs(e.Fragment,{children:[o.source_type===Re&&e.jsxs(Se,{href:`${gt}/${o.source}`,target:"_blank",children:["@",o.source]}),o.source_type===Me&&e.jsx(Se,{href:`${o.source}${o.source.includes("?")?"&":"?"}open=system`,target:"_blank",children:o.source}),o.source_type===Fe&&e.jsx(Se,{href:o.source,target:"_blank",children:o.source})]}):e.jsx("div",{children:o.source})})}),r&&e.jsx(_,{align:"left",children:e.jsx("div",{className:"delete-wrapper",id:`delete-${o.source}`,children:s===o.ref_id?e.jsx($,{color:l.white}):e.jsx(mt,{message:"Are you sure ?",onConfirm:()=>i(o.ref_id),children:e.jsx(K,{className:"centered",children:e.jsx(br,{})})})})}),e.jsx(_,{className:"empty"})]},o.source))})]}):e.jsxs(Nn,{children:[e.jsx(_r,{}),e.jsx(T,{className:"text",children:"There is not any results for selected filters"})]})};function Pn({condition:t,wrapper:r,children:n}){return t?r(n):n}const In=({value:t,onSave:r,id:n,children:s})=>{const[a,c]=f.useState(!1),[i,o]=f.useState(t),[d,p]=f.useState(!1),h=async()=>{if(n){p(!0);try{await r(i),c(!1)}catch(g){console.warn(g)}finally{p(!1)}}};return e.jsx("div",{children:a?e.jsxs(zn,{direction:"row",children:[e.jsx(Nr,{className:"editable-cell__input",name:"cell-input",onChange:g=>o(g),value:i}),e.jsx(K,{align:"center",justify:"center",children:d?e.jsx($,{}):e.jsx(vr,{onClick:h})}),e.jsx(K,{align:"center",className:"secondary",justify:"center",onClick:()=>c(!1),children:e.jsx(ft,{})})]}):e.jsxs(On,{direction:"row",children:[s,e.jsx(K,{onClick:()=>c(!0),children:e.jsx(wr,{size:20})})]})})},zn=x(u)`
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
`,Nn=x(u)`
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
`,On=x(u)`
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
`,Se=x.a`
  color: ${l.white};
  text-decoration: underline;
  &:visited {
    color: ${l.white};
  }
`,Ln=()=>{const[t,r]=f.useState(!0),[n,s]=f.useState(""),[a,c]=D(g=>[g.sources,g.setSources]),[i]=se(g=>[g.isAdmin]),[o,d]=f.useState("");f.useEffect(()=>{(async()=>{r(!0);try{const y=await it();c(y.data)}catch(y){console.warn(y)}finally{r(!1)}})()},[c]);const p=g=>{s(n===g||!g?"":g)},h=f.useMemo(()=>a==null?void 0:a.filter(g=>(!n||g.source_type===n)&&(g.source.toLowerCase().startsWith(o.toLowerCase())||g.source.toLowerCase().includes(o.toLowerCase()))),[o,n,a]);return e.jsxs(Dn,{align:"stretch",direction:"column",justify:"flex-end",children:[e.jsx(Be,{align:"center",direction:"row",justify:"space-between",children:e.jsx(T,{className:"title",children:"Sources for this Graph"})}),e.jsx(Rn,{children:e.jsx(An,{activeIcon:e.jsx(V,{}),defaultIcon:e.jsx(me,{}),loadingIcon:e.jsx($,{color:l.PRIMARY_BLUE,size:24}),onSearch:d,placeholder:"Find Topic"})}),e.jsxs(u,{className:"filters",direction:"row",pb:16,px:36,children:[e.jsx(he,{className:M({selected:!n}),onClick:()=>p(""),size:"small",children:"All"}),Object.keys(q).map(g=>e.jsx(he,{className:M({selected:g===n}),onClick:()=>p(g),size:"small",children:q[g]},g))]}),e.jsx(Bn,{align:"center",justify:t?"center":"flex-start",children:t?e.jsx($,{color:l.white}):e.jsx(En,{canEdit:i,data:h})})]})},Dn=x(u)`
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
`,Bn=x(u)`
  min-height: 0;
  overflow: auto;
  flex: 1;
  width: 100%;
`,Rn=x(u)`
  margin: 0 0 16px 36px;
`,Mn=({onSelect:t,selectedTopic:r})=>{const[n,s]=f.useState(!1),[a,c]=f.useState(""),[i,o]=f.useState([]),[d,p]=f.useState(!1),h=f.useRef(null);f.useEffect(()=>()=>o([]),[o]);const g=async m=>{const w={muted:"False",sort_by:Ne,search:m,skip:"0",limit:"1000"};p(!0);try{const S=await at(w);o(S.data)}catch{o([])}finally{p(!1)}},y=f.useMemo(()=>tt.debounce(g,300),[]),v=m=>{t(m)},j=m=>{if(c(m),!m){o([]);return}m.length>2&&y(m)};return r?e.jsxs(Vn,{children:[e.jsx("div",{className:"value",children:r.topic}),e.jsx(u,{className:"icon",onClick:()=>t(null),children:e.jsx(V,{})})]}):e.jsxs(e.Fragment,{children:[e.jsxs(ge,{ref:h,component:"form",onSubmit:m=>m.preventDefault(),sx:{p:"2px 4px",display:"flex",alignItems:"center",width:200},children:[e.jsx(ye,{inputProps:{"aria-label":"search topic"},onChange:m=>j(m.target.value),onFocus:()=>s(!0),placeholder:"Search",size:"small",sx:{ml:1,flex:1},value:a}),a&&e.jsxs(e.Fragment,{children:[e.jsx(Ke,{"aria-label":"search",onClick:()=>j(""),type:"button",children:e.jsx(V,{})}),e.jsx(ze,{orientation:"vertical",sx:{height:28,m:.5}})]}),e.jsx(Ke,{"aria-label":"search",type:"button",children:d?e.jsx($,{color:l.white,size:24}):e.jsx(me,{})})]}),h.current&&i.length?e.jsx(Wn,{anchorEl:h.current,open:n,placement:"bottom",children:e.jsx(e.Fragment,{children:i.map(m=>e.jsx(Fn,{className:M({active:r===m.ref_id}),onClick:()=>v(m),children:m.topic},"option"))})}):null]})},Fn=x(u).attrs({direction:"row",align:"center"})`
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
`,Wn=x(vt)`
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
`,Vn=x(u).attrs({direction:"row",justify:"flex-start",align:"center"})`
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
`,Ke=x(G)`
  font-size: 24px;
`,Gn=({selectedType:t,setSelectedType:r})=>{const[n,s]=f.useState(null),[a,c]=f.useState([]);f.useEffect(()=>{(async()=>{try{const{data:h}=await Yt();c(h.edge_types)}catch(h){console.warn(h)}})()},[c]);const i=p=>{s(p.currentTarget)},o=()=>{s(null)},d=p=>{r(p),o()};return e.jsxs("div",{children:[e.jsxs(Un,{onClick:i,children:[e.jsx("div",{className:"text",children:"Type"}),e.jsx("div",{className:"value",children:t}),e.jsx("div",{className:"icon",children:n?e.jsx(Ir,{}):e.jsx(Pr,{})})]}),e.jsx(Hn,{anchorEl:n,anchorOrigin:{vertical:"bottom",horizontal:"left"},anchorPosition:{top:62,left:0},onClose:o,open:!!n,transformOrigin:{vertical:"top",horizontal:"left"},children:e.jsx(zr,{children:a.map(p=>e.jsxs(Yn,{className:M({active:p===t}),onClick:()=>d(p),children:[e.jsx("span",{className:"icon",children:p===t?e.jsx(Or,{}):null}),e.jsx("span",{children:p})]},p))})})]})},Un=x(u).attrs({direction:"row",align:"center"})`
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
`,Yn=x(u).attrs({direction:"row",align:"center"})`
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
`,Hn=x(bt)`
  .MuiPaper-root {
    background: ${l.BUTTON1};
    min-width: 149px;
    padding: 16px;
    color: ${l.GRAY3};
    box-shadow: 0px 1px 6px 0px rgba(0, 0, 0, 0.2);
    border-radius: 6px;
  }
`,Kn=({from:t,onSelect:r,selectedTopic:n,selectedType:s,setSelectedType:a})=>e.jsxs(u,{children:[e.jsx(u,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(u,{align:"center",direction:"row",children:e.jsx(qn,{children:"Add edge"})})}),e.jsxs(Qn,{mb:12,children:[e.jsxs(Te,{children:[e.jsx("div",{className:"label",children:"From"}),e.jsx("div",{children:t})]}),e.jsx(Te,{children:e.jsx(Gn,{selectedType:s,setSelectedType:a})}),e.jsxs(Te,{children:[e.jsx("div",{className:"label",children:"To"}),e.jsx(Mn,{onSelect:r,selectedTopic:n})]})]})]}),qn=x(T)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,Qn=x(u).attrs({align:"flex-start",direction:"row",justify:"flex-start"})`
  color: ${l.white};
  .label {
    margin-bottom: 8px;
    font-weight: 500;
    font-size: 14px;
    color: ${l.GRAY3};
  }
`,Te=x(u)`
  flex: 1 1 100%;
`,Xn=({topic:t,onClose:r})=>{const{close:n}=W("addEdge"),[s]=N(j=>[j.data]),a=ie({mode:"onChange"}),[c,i]=f.useState(!1),[o,d]=f.useState(null),[p,h]=f.useState(""),g=()=>{r(),n()},y=async()=>{if(!(!o||!s)){i(!0);try{await Ht({from:t.ref_id,to:o==null?void 0:o.ref_id,relationship:p});const{ref_id:j}=t,{ref_id:m}=o;if(s){const w={...s};w[j]={...w[j],edgeList:[...w[j].edgeList,p]},w[m]&&(w[m]={...w[m],edgeList:[...w[m].edgeList,p]}),N.setState({data:w})}g()}catch(j){console.warn(j)}finally{i(!1)}}},v=c||!o||!p;return e.jsx(Oe,{id:"addEdge",kind:"large",onClose:g,preventOutsideClose:!0,children:e.jsxs(ae,{...a,children:[e.jsx(Kn,{from:t.topic,onSelect:d,selectedTopic:o,selectedType:p,setSelectedType:h}),e.jsxs(R,{color:"secondary",disabled:v,onClick:y,size:"large",variant:"contained",children:["Confirm",c&&e.jsx($,{color:l.BLUE_PRESS_STATE,size:10})]})]})})},Zn=()=>e.jsxs(u,{children:[e.jsx(u,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(u,{align:"center",direction:"row",children:e.jsx(Jn,{children:"Edit topic"})})}),e.jsx(u,{mb:12,children:e.jsx(ne,{id:"cy-topic",maxLength:50,name:"topic",placeholder:"Add your topic",rules:{...Et}})})]}),Jn=x(T)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,eo=({topic:t,onClose:r})=>{const{close:n}=W("editTopic"),[s]=N(v=>[v.data]),a=ie({mode:"onChange"}),{watch:c,setValue:i,reset:o}=a,[d,p]=f.useState(!1);f.useEffect(()=>(t&&i("topic",t==null?void 0:t.topic),()=>{o()}),[t,i,o]);const h=c("topic"),g=()=>{r(),n()},y=async()=>{p(!0);try{if(await lt((t==null?void 0:t.ref_id)||"",{topic:h.trim()}),s){const v={...s};v[t==null?void 0:t.ref_id].topic=h.trim(),N.setState({data:v})}g()}catch(v){console.warn(v)}finally{p(!1)}};return e.jsx(Oe,{id:"editTopic",kind:"regular",onClose:g,preventOutsideClose:!0,children:e.jsxs(ae,{...a,children:[e.jsx(Zn,{}),e.jsxs(R,{color:"secondary",disabled:d,onClick:y,size:"large",variant:"contained",children:["Save",d&&e.jsx($,{color:l.BLUE_PRESS_STATE,size:10})]})]})})},to=({onSelect:t,selectedTopic:r})=>{const[n,s]=f.useState(!1),[a,c]=f.useState(""),[i,o]=f.useState([]),[d,p]=f.useState(!1),h=f.useRef(null);f.useEffect(()=>()=>o([]),[o]);const g=async m=>{const w={muted:"False",sort_by:Ne,search:m,skip:"0",limit:"1000"};p(!0);try{const S=await at(w);o(S.data)}catch{o([])}finally{p(!1)}},y=f.useMemo(()=>tt.debounce(g,300),[]),v=m=>{t(m)},j=m=>{if(c(m),!m){o([]);return}m.length>2&&y(m)};return r?e.jsxs(oo,{children:[e.jsx("div",{className:"value",children:r.topic}),e.jsx(u,{className:"icon",onClick:()=>t(null),children:e.jsx(V,{})})]}):e.jsxs(e.Fragment,{children:[e.jsxs(ge,{ref:h,component:"form",onSubmit:m=>m.preventDefault(),sx:{p:"2px 4px",display:"flex",alignItems:"center",width:200},children:[e.jsx(ye,{inputProps:{"aria-label":"search topic"},onChange:m=>j(m.target.value),onFocus:()=>s(!0),placeholder:"Search",size:"small",sx:{ml:1,flex:1},value:a}),a&&e.jsxs(e.Fragment,{children:[e.jsx(qe,{"aria-label":"search",onClick:()=>j(""),type:"button",children:e.jsx(V,{})}),e.jsx(ze,{orientation:"vertical",sx:{height:28,m:.5}})]}),e.jsx(qe,{"aria-label":"search",type:"button",children:d?e.jsx($,{color:l.white,size:24}):e.jsx(me,{})})]}),h.current&&i.length?e.jsx(no,{anchorEl:h.current,open:n,placement:"bottom",children:e.jsx(e.Fragment,{children:i.map(m=>e.jsx(ro,{className:M({active:r===m.ref_id}),onClick:()=>v(m),children:m.topic},"option"))})}):null]})},ro=x(u).attrs({direction:"row",align:"center"})`
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
`,no=x(vt)`
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
`,oo=x(u).attrs({direction:"row",justify:"flex-start",align:"center"})`
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
`,qe=x(G)`
  font-size: 24px;
`,so=({from:t,onSelect:r,selectedTopic:n})=>e.jsxs(u,{children:[e.jsx(u,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(u,{align:"center",direction:"row",children:e.jsx(io,{children:"Merge topic"})})}),e.jsxs(ao,{mb:12,children:[e.jsxs(Qe,{children:[e.jsx("div",{className:"label",children:"From"}),e.jsx("div",{children:t})]}),e.jsxs(Qe,{ml:24,children:[e.jsx("div",{className:"label",children:"To"}),e.jsx(to,{onSelect:r,selectedTopic:n})]})]})]}),io=x(T)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,ao=x(u).attrs({align:"flex-start",direction:"row",justify:"flex-start"})`
  color: ${l.white};
  .label {
    margin-bottom: 8px;
    font-weight: 500;
    font-size: 14px;
    color: ${l.GRAY3};
  }
`,Qe=x(u)`
  flex: 1 1 100%;
`,lo=({topic:t,onClose:r})=>{const{close:n}=W("mergeTopic"),[s,a,c]=N(S=>[S.data,S.ids,S.total]),i=ie({mode:"onChange"}),{watch:o,setValue:d,reset:p}=i,[h,g]=f.useState(!1),[y,v]=f.useState(null);f.useEffect(()=>(t&&d("topic",t==null?void 0:t.topic),()=>{p()}),[t,d,p]);const j=o("topic"),m=()=>{r(),n()},w=async()=>{if(!(!y||!s)){g(!0);try{await Kt({from:t.ref_id,to:y==null?void 0:y.ref_id});const{ref_id:S}=t;if(s[S]={...s[S],edgeList:[Ar],edgeCount:s[S].edgeCount-1},N.setState({ids:a.filter(k=>k!==y.ref_id),total:c-1}),s){const k={...s};k[t==null?void 0:t.ref_id].topic=j.trim(),N.setState({data:k})}m()}catch(S){console.warn(S)}finally{g(!1)}}};return e.jsx(Oe,{id:"mergeTopic",kind:"regular",onClose:m,preventOutsideClose:!0,children:e.jsxs(ae,{...i,children:[e.jsx(so,{from:t.topic,onSelect:v,selectedTopic:y}),e.jsxs(R,{color:"secondary",disabled:h,onClick:w,size:"large",variant:"contained",children:["Merge topics",h&&e.jsx($,{color:l.BLUE_PRESS_STATE,size:10})]})]})})},co=()=>{const[t,r]=N(i=>[i.filters,i.setFilters]),[n,s]=f.useState(""),a=i=>{i.preventDefault(),r({search:n})},c=()=>{s(""),t.search&&r({search:""})};return e.jsxs(ge,{component:"form",onSubmit:a,sx:{p:"2px 4px",display:"flex",alignItems:"center",width:300},children:[e.jsx(ye,{autoComplete:"off",autoCorrect:"off",inputProps:{"aria-label":"search topic"},onChange:i=>s(i.target.value),placeholder:"Search",size:"small",spellCheck:"false",sx:{ml:1,flex:1},value:n}),n&&e.jsxs(e.Fragment,{children:[e.jsx(Xe,{"aria-label":"search",onClick:c,type:"button",children:e.jsx(V,{})}),e.jsx(ze,{orientation:"vertical",sx:{height:28,m:.5}})]}),e.jsx(Xe,{"aria-label":"search",onClick:a,type:"button",children:e.jsx(me,{})})]})},Xe=x(G)`
  font-size: 24px;
`,_e=t=>e.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 12 8",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M0.333496 7.66704V6.66706H3.91681V7.66704H0.333496ZM0.333496 4.50037V3.50041H7.7886V4.50037H0.333496ZM0.333496 1.33372V0.33374H11.6668V1.33372H0.333496Z",fill:"currentColor"})}),po=({topic:t,onClick:r,onSearch:n})=>{const[s,a]=N(h=>[h.ids,h.total]),[c,i]=f.useState(!1),o=t.date_added_to_graph.toString(),d=async(h,g)=>{i(!0);try{await lt(h,{muted_topic:g}),N.setState({ids:s.filter(y=>y!==h),total:a-1})}catch(y){console.warn(y)}},p=h=>{n(h.topic)};return e.jsxs(Le,{children:[e.jsx(_,{className:"empty"}),e.jsx(_,{onClick:()=>p(t),children:e.jsx(uo,{children:t.topic})}),e.jsx(_,{children:t.edgeCount}),e.jsx(_,{children:t.edgeList.join(", ")}),e.jsx(_,{children:e.jsx("span",{children:new Date(Number(o)*1e3).toDateString()})}),e.jsx(_,{className:"cell-center",children:e.jsx(u,{direction:"row",justify:"space-between",children:e.jsx("div",{className:"approve-wrapper",children:c?e.jsx($,{color:l.white,size:16}):e.jsx(e.Fragment,{children:t.muted_topic?e.jsx(Ze,{className:"centered",onClick:()=>d(t.ref_id,!1),children:e.jsx(ht,{color:l.primaryGreen,fontSize:24})}):e.jsx(Ze,{className:"centered",onClick:()=>d(t.ref_id,!0),children:e.jsx(xt,{color:l.primaryRed,fontSize:24})})})})})}),e.jsx(_,{children:e.jsx(G,{onClick:h=>r(h,t.ref_id),children:e.jsx(Lr,{})})})]},t.topic)},Ze=x(u)`
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
`,uo=x.span`
  cursor: pointer;
  :hover {
    text-decoration: underline;
  }
`,ho=f.memo(po),xo=({showMuted:t,onTopicEdit:r,onChangeFilter:n})=>{const{close:s}=W("sourcesTable"),[a,c]=E.useState(null),[i,o]=E.useState(""),[d,p]=U(b=>[b.setSearchFormValue,b.setCurrentSearch]),[h,g]=N(b=>[b.data,b.ids]),y=f.useCallback((b,A)=>{c(b.currentTarget),o(A)},[]),v=()=>{c(null)},j=b=>{d(b),p(b),s()},m=b=>{r(i,b),v()},w=b=>{n(b)},S=!!a,k=S?"simple-popover":void 0;return h?e.jsx(e.Fragment,{children:Object.keys(h).length?e.jsxs(e.Fragment,{children:[e.jsxs(Ie,{component:"table",children:[e.jsx(De,{children:e.jsxs(fe,{component:"tr",children:[e.jsx(_,{className:"empty"}),e.jsx(_,{children:e.jsxs(Ce,{onClick:()=>w(Ne),children:["Name ",e.jsx(_e,{})]})}),e.jsx(_,{children:e.jsxs(Ce,{onClick:()=>w(kr),children:["Count ",e.jsx(_e,{})]})}),e.jsx(_,{children:"Edge list"}),e.jsx(_,{children:e.jsxs(Ce,{onClick:()=>w($r),children:["Date ",e.jsx(_e,{})]})}),e.jsx(_,{children:t?"Unmute":"Mute"}),e.jsx(_,{})]})}),h&&e.jsx("tbody",{children:g==null?void 0:g.map(b=>e.jsx(ho,{onClick:y,onSearch:j,topic:h[b]},b))})]}),i?e.jsxs(fo,{anchorEl:a,anchorOrigin:{vertical:"bottom",horizontal:"right"},id:k,onClose:v,open:S,transformOrigin:{vertical:"top",horizontal:"right"},children:[e.jsx(Ae,{onClick:()=>m("editTopic"),children:"Rename"}),e.jsx(Ae,{onClick:()=>m("mergeTopic"),children:"Merge"}),e.jsx(Ae,{onClick:()=>m("addEdge"),children:"Add edge"})]}):null]}):e.jsxs(u,{children:[e.jsx(T,{children:"There is not any results for selected filters"}),e.jsx($e,{})]})}):e.jsxs(u,{children:[e.jsx(T,{children:"There is not any results for selected filters"}),e.jsx($e,{})]})},Ce=x.span`
  cursor: pointer;
  display: flex;
  gap: 4px;
  align-items: center;
`,Ae=x(u).attrs({direction:"row",px:16,py:8})`
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
`,fo=x(bt)`
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
`,mo=()=>{const[t,r]=f.useState(!1),[n,s,a,c,i,o,d]=N(A=>[A.data,A.ids,A.total,A.setTopics,A.filters,A.setFilters,A.terminate]),{open:p}=W("editTopic"),{open:h}=W("mergeTopic"),{open:g}=W("addEdge"),[y,v]=f.useState(null),j={editTopic:p,mergeTopic:h,addEdge:g},m=f.useRef([]);f.useEffect(()=>{s.length&&(m.current=s)},[s]),f.useEffect(()=>{(async()=>{try{r(!0),await c()}catch{console.error("err")}finally{r(!1)}})()},[c,i]);const w=async()=>{try{r(!0),o({page:i.page+1})}catch(A){console.error("Error loading more data:",A)}finally{r(!1)}};f.useEffect(()=>()=>{d()},[d]);const S=A=>{o({sortBy:A})},k=()=>{v(null)},b=(A,P)=>{n&&(v(n[A]),typeof j[P]=="function"&&j[P]())};return e.jsxs(e.Fragment,{children:[e.jsxs(go,{direction:"column",justify:"flex-end",children:[e.jsxs(Be,{align:"flex-start",direction:"row",justify:"space-between",children:[e.jsx(T,{className:"title",children:"Topics"}),e.jsxs(R,{disabled:t,onClick:()=>o({muted:!i.muted}),size:"medium",children:[i.muted?"Show Unmuted":"Show Muted",t&&e.jsx($,{color:l.BLUE_PRESS_STATE,size:10})]})]}),e.jsx(jo,{children:e.jsx(co,{})}),e.jsx(yo,{align:"center",justify:t&&!n?"center":"flex-start",children:t&&!n?e.jsx($,{color:l.white}):e.jsxs(e.Fragment,{children:[e.jsx(xo,{onChangeFilter:S,onTopicEdit:b,showMuted:i.muted}),a>s.length?e.jsxs(R,{className:"load-more",disabled:t,onClick:w,children:["Load more",t&&e.jsx($,{color:l.BLUE_PRESS_STATE,size:10})]}):null]})})]}),y&&e.jsx(lo,{onClose:k,topic:y}),y&&e.jsx(eo,{onClose:k,topic:y}),y&&e.jsx(Xn,{onClose:k,topic:y})]})},go=x(u)`
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
`,yo=x(u)`
  min-height: 0;
  overflow: auto;
  flex: 1;
  width: 100%;
`,jo=x(u).attrs({direction:"row",align:"center",justify:"space-between"})`
  padding: 0 36px;
  margin-bottom: 32px;
`,bo=[{label:Er,component:Ln},{label:jt,component:Tn},{label:yt,component:mo}],vo=t=>{const{children:r,value:n,index:s,...a}=t;return n===s?e.jsx(Co,{"aria-labelledby":`simple-tab-${s}`,hidden:n!==s,id:`simple-tabpanel-${s}`,role:"tabpanel",...a,children:r}):null};function wo(t){return{id:`simple-tab-${t}`,"aria-controls":`simple-tabpanel-${t}`}}const So=()=>{const[t,r]=f.useState(0),[n]=se(i=>[i.isAdmin]),[s]=Pt(i=>[i.queuedSourcesFlag]),a=(i,o)=>{r(o)},c=bo.filter(({label:i})=>i===yt?n:i===jt?n&&s:!0);return e.jsxs(Ao,{direction:"column",children:[e.jsx(To,{"aria-label":"sources tabs",onChange:a,value:t,children:c.map((i,o)=>e.jsx(_o,{color:l.white,disableRipple:!0,label:i.label,...wo(o)},i.label))}),c.map((i,o)=>e.jsx(vo,{index:o,value:t,children:e.jsx(i.component,{})},i.label))]})},To=x(Dr)`
  && {
    background: rgba(0, 0, 0, 0.2);

    .MuiTabs-indicator {
      background: ${l.primaryBlue};
    }
  }
`,_o=x(Br)`
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
`,Co=x(u)`
  display: flex;
  flex: 1;
  min-height: 572px;
  padding: 20px 0;
  max-height: 572px;
`,Ao=x(u)`
  min-height: 0;
  flex: 1;
`,ue={required:{message:"The field is required",value:!0}},ko=({initialValues:t})=>{const r=ie({defaultValues:t,mode:"onSubmit"}),{isSubmitting:n}=r.formState,s=r.handleSubmit(async a=>{try{await qt(a)}catch(c){console.warn(c)}});return e.jsx(ae,{...r,children:e.jsx("form",{id:"add-node-form",onSubmit:s,children:e.jsxs(e.Fragment,{children:[e.jsxs(u,{children:[e.jsx(u,{pt:12,children:e.jsx(ne,{id:"cy-about-title-id",label:"Graph Title",maxLength:50,name:"title",placeholder:"Type graph title here...",rules:{...ue}})}),e.jsx(u,{pt:12,children:e.jsx(ne,{id:"cy-about-id",label:"Graph Description",maxLength:50,name:"description",placeholder:"Type graph description here...",rules:{...ue}})}),e.jsx(u,{pt:12,children:e.jsx(ne,{id:"cy-about-mission_statement-id",label:"Mission Statement",maxLength:50,name:"mission_statement",placeholder:"Type mission statement here...",rules:{...ue}})}),e.jsx(u,{pt:12,children:e.jsx(ne,{id:"cy-about-search_term-id",label:"Search Term",maxLength:50,name:"search_term",placeholder:"Type search term here...",rules:{...ue}})})]}),e.jsx(u,{pt:8,children:n?e.jsx($o,{children:e.jsx($,{color:l.white,size:20})}):e.jsx(wt,{disabled:n,id:"add-node-submit-cta",kind:"big",type:"submit",children:"Save changes"})})]})})})},$o=x(u).attrs({align:"center",background:"primaryButton",borderRadius:8,justify:"center"})`
  padding: 16px 24px;
  opacity: 0.5;
`,Eo=({initialValues:t})=>e.jsxs(e.Fragment,{children:[t.title&&e.jsxs(u,{pt:12,children:[e.jsx(T,{kind:"regular",children:"Graph Title"}),e.jsx(u,{pt:12,children:e.jsx(T,{className:"value",kind:"medium",children:t.title})})]}),t.description&&e.jsxs(u,{pt:12,children:[e.jsx(T,{kind:"regular",children:"Graph Description"}),e.jsx(u,{pt:12,children:e.jsx(T,{className:"value",kind:"medium",children:t.description})})]}),t.mission_statement&&e.jsxs(u,{pt:12,children:[e.jsx(T,{kind:"regular",children:"Mission Statement"}),e.jsx(u,{pt:12,children:e.jsx(T,{className:"value",kind:"medium",children:t.mission_statement})})]})]}),Po=()=>{const[t]=se(n=>[n.isAdmin]),r=U(n=>n.appMetaData);return e.jsxs(Io,{align:"stretch",direction:"column",justify:"flex-end",children:[e.jsx(No,{align:"center",direction:"row",justify:"space-between",children:e.jsx(T,{className:"title",children:"About"})}),e.jsx(zo,{align:"stretch",justify:"flex-start",children:t?e.jsx(ko,{initialValues:r}):e.jsx(Eo,{initialValues:r})})]})},Io=x(u)`
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
`,zo=x(u)`
  min-height: 0;
  overflow: auto;
  flex: 1;
  width: 100%;
`,No=x(u)`
  margin-bottom: 16px;
  ${T} {
    margin-bottom: 0;
  }
`;var Oo=["type","layout","connectNulls","ref"];function Q(t){"@babel/helpers - typeof";return Q=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},Q(t)}function Lo(t,r){if(t==null)return{};var n=Do(t,r),s,a;if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);for(a=0;a<c.length;a++)s=c[a],!(r.indexOf(s)>=0)&&Object.prototype.propertyIsEnumerable.call(t,s)&&(n[s]=t[s])}return n}function Do(t,r){if(t==null)return{};var n={},s=Object.keys(t),a,c;for(c=0;c<s.length;c++)a=s[c],!(r.indexOf(a)>=0)&&(n[a]=t[a]);return n}function oe(){return oe=Object.assign?Object.assign.bind():function(t){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(t[s]=n[s])}return t},oe.apply(this,arguments)}function Je(t,r){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);r&&(s=s.filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable})),n.push.apply(n,s)}return n}function z(t){for(var r=1;r<arguments.length;r++){var n=arguments[r]!=null?arguments[r]:{};r%2?Je(Object(n),!0).forEach(function(s){O(t,s,n[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Je(Object(n)).forEach(function(s){Object.defineProperty(t,s,Object.getOwnPropertyDescriptor(n,s))})}return t}function H(t){return Fo(t)||Mo(t)||Ro(t)||Bo()}function Bo(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ro(t,r){if(t){if(typeof t=="string")return Ee(t,r);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Ee(t,r)}}function Mo(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Fo(t){if(Array.isArray(t))return Ee(t)}function Ee(t,r){(r==null||r>t.length)&&(r=t.length);for(var n=0,s=new Array(r);n<r;n++)s[n]=t[n];return s}function Wo(t,r){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")}function et(t,r){for(var n=0;n<r.length;n++){var s=r[n];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,Tt(s.key),s)}}function Vo(t,r,n){return r&&et(t.prototype,r),n&&et(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function Go(t,r){if(typeof r!="function"&&r!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(r&&r.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),r&&Pe(t,r)}function Pe(t,r){return Pe=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(s,a){return s.__proto__=a,s},Pe(t,r)}function Uo(t){var r=Ho();return function(){var s=xe(t),a;if(r){var c=xe(this).constructor;a=Reflect.construct(s,arguments,c)}else a=s.apply(this,arguments);return Yo(this,a)}}function Yo(t,r){if(r&&(Q(r)==="object"||typeof r=="function"))return r;if(r!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return B(t)}function B(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function Ho(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function xe(t){return xe=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},xe(t)}function O(t,r,n){return r=Tt(r),r in t?Object.defineProperty(t,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[r]=n,t}function Tt(t){var r=Ko(t,"string");return Q(r)==="symbol"?r:String(r)}function Ko(t,r){if(Q(t)!=="object"||t===null)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var s=n.call(t,r||"default");if(Q(s)!=="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(t)}var le=function(t){Go(n,t);var r=Uo(n);function n(){var s;Wo(this,n);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return s=r.call.apply(r,[this].concat(c)),O(B(s),"state",{isAnimationFinished:!0,totalLength:0}),O(B(s),"generateSimpleStrokeDasharray",function(o,d){return"".concat(d,"px ").concat(o-d,"px")}),O(B(s),"getStrokeDasharray",function(o,d,p){var h=p.reduce(function(k,b){return k+b});if(!h)return s.generateSimpleStrokeDasharray(d,o);for(var g=Math.floor(o/h),y=o%h,v=d-o,j=[],m=0,w=0;m<p.length;w+=p[m],++m)if(w+p[m]>y){j=[].concat(H(p.slice(0,m)),[y-w]);break}var S=j.length%2===0?[0,v]:[v];return[].concat(H(n.repeat(p,g)),H(j),S).map(function(k){return"".concat(k,"px")}).join(", ")}),O(B(s),"id",sr("recharts-line-")),O(B(s),"pathRef",function(o){s.mainCurve=o}),O(B(s),"handleAnimationEnd",function(){s.setState({isAnimationFinished:!0}),s.props.onAnimationEnd&&s.props.onAnimationEnd()}),O(B(s),"handleAnimationStart",function(){s.setState({isAnimationFinished:!1}),s.props.onAnimationStart&&s.props.onAnimationStart()}),s}return Vo(n,[{key:"componentDidMount",value:function(){if(this.props.isAnimationActive){var a=this.getTotalLength();this.setState({totalLength:a})}}},{key:"componentDidUpdate",value:function(){if(this.props.isAnimationActive){var a=this.getTotalLength();a!==this.state.totalLength&&this.setState({totalLength:a})}}},{key:"getTotalLength",value:function(){var a=this.mainCurve;try{return a&&a.getTotalLength&&a.getTotalLength()||0}catch{return 0}}},{key:"renderErrorBar",value:function(a,c){if(this.props.isAnimationActive&&!this.state.isAnimationFinished)return null;var i=this.props,o=i.points,d=i.xAxis,p=i.yAxis,h=i.layout,g=i.children,y=ir(g,ar);if(!y)return null;var v=function(w,S){return{x:w.x,y:w.y,value:w.value,errorVal:dt(w.payload,S)}},j={clipPath:a?"url(#clipPath-".concat(c,")"):null};return E.createElement(be,j,y.map(function(m){return E.cloneElement(m,{key:"bar-".concat(m.props.dataKey),data:o,xAxis:d,yAxis:p,layout:h,dataPointFormatter:v})}))}},{key:"renderDots",value:function(a,c,i){var o=this.props.isAnimationActive;if(o&&!this.state.isAnimationFinished)return null;var d=this.props,p=d.dot,h=d.points,g=d.dataKey,y=pe(this.props),v=pe(p,!0),j=h.map(function(w,S){var k=z(z(z({key:"dot-".concat(S),r:3},y),v),{},{value:w.value,dataKey:g,cx:w.x,cy:w.y,index:S,payload:w.payload});return n.renderDotItem(p,k)}),m={clipPath:a?"url(#clipPath-".concat(c?"":"dots-").concat(i,")"):null};return E.createElement(be,oe({className:"recharts-line-dots",key:"dots"},m),j)}},{key:"renderCurveStatically",value:function(a,c,i,o){var d=this.props,p=d.type,h=d.layout,g=d.connectNulls;d.ref;var y=Lo(d,Oo),v=z(z(z({},pe(y,!0)),{},{fill:"none",className:"recharts-line-curve",clipPath:c?"url(#clipPath-".concat(i,")"):null,points:a},o),{},{type:p,layout:h,connectNulls:g});return E.createElement(lr,oe({},v,{pathRef:this.pathRef}))}},{key:"renderCurveWithAnimation",value:function(a,c){var i=this,o=this.props,d=o.points,p=o.strokeDasharray,h=o.isAnimationActive,g=o.animationBegin,y=o.animationDuration,v=o.animationEasing,j=o.animationId,m=o.animateNewValues,w=o.width,S=o.height,k=this.state,b=k.prevPoints,A=k.totalLength;return E.createElement(cr,{begin:g,duration:y,isActive:h,easing:v,from:{t:0},to:{t:1},key:"line-".concat(j),onAnimationEnd:this.handleAnimationEnd,onAnimationStart:this.handleAnimationStart},function(P){var C=P.t;if(b){var X=b.length/d.length,F=d.map(function(I,je){var ee=Math.floor(je*X);if(b[ee]){var te=b[ee],Y=re(te.x,I.x),_t=re(te.y,I.y);return z(z({},I),{},{x:Y(C),y:_t(C)})}if(m){var Ct=re(w*2,I.x),At=re(S/2,I.y);return z(z({},I),{},{x:Ct(C),y:At(C)})}return z(z({},I),{},{x:I.x,y:I.y})});return i.renderCurveStatically(F,a,c)}var ce=re(0,A),Z=ce(C),J;if(p){var de="".concat(p).split(/[,\s]+/gim).map(function(I){return parseFloat(I)});J=i.getStrokeDasharray(Z,A,de)}else J=i.generateSimpleStrokeDasharray(A,Z);return i.renderCurveStatically(d,a,c,{strokeDasharray:J})})}},{key:"renderCurve",value:function(a,c){var i=this.props,o=i.points,d=i.isAnimationActive,p=this.state,h=p.prevPoints,g=p.totalLength;return d&&o&&o.length&&(!h&&g>0||!dr(h,o))?this.renderCurveWithAnimation(a,c):this.renderCurveStatically(o,a,c)}},{key:"render",value:function(){var a,c=this.props,i=c.hide,o=c.dot,d=c.points,p=c.className,h=c.xAxis,g=c.yAxis,y=c.top,v=c.left,j=c.width,m=c.height,w=c.isAnimationActive,S=c.id;if(i||!d||!d.length)return null;var k=this.state.isAnimationFinished,b=d.length===1,A=Ve("recharts-line",p),P=h&&h.allowDataOverflow,C=g&&g.allowDataOverflow,X=P||C,F=ke(S)?this.id:S,ce=(a=pe(o))!==null&&a!==void 0?a:{r:3,strokeWidth:2},Z=ce.r,J=Z===void 0?3:Z,de=ce.strokeWidth,I=de===void 0?2:de,je=pr(o)?o:{},ee=je.clipDot,te=ee===void 0?!0:ee,Y=J*2+I;return E.createElement(be,{className:A},P||C?E.createElement("defs",null,E.createElement("clipPath",{id:"clipPath-".concat(F)},E.createElement("rect",{x:P?v:v-j/2,y:C?y:y-m/2,width:P?j:j*2,height:C?m:m*2})),!te&&E.createElement("clipPath",{id:"clipPath-dots-".concat(F)},E.createElement("rect",{x:v-Y/2,y:y-Y/2,width:j+Y,height:m+Y}))):null,!b&&this.renderCurve(X,F),this.renderErrorBar(X,F),(b||o)&&this.renderDots(X,te,F),(!w||k)&&ur.renderCallByParent(this.props,d))}}],[{key:"getDerivedStateFromProps",value:function(a,c){return a.animationId!==c.prevAnimationId?{prevAnimationId:a.animationId,curPoints:a.points,prevPoints:c.curPoints}:a.points!==c.curPoints?{curPoints:a.points}:null}},{key:"repeat",value:function(a,c){for(var i=a.length%2!==0?[].concat(H(a),[0]):a,o=[],d=0;d<c;++d)o=[].concat(H(o),H(i));return o}},{key:"renderDotItem",value:function(a,c){var i;if(E.isValidElement(a))i=E.cloneElement(a,c);else if(It(a))i=a(c);else{var o=Ve("recharts-line-dot",a?a.className:"");i=E.createElement(ct,oe({},c,{className:o}))}return i}}]),n}(f.PureComponent);O(le,"displayName","Line");O(le,"defaultProps",{xAxisId:0,yAxisId:0,connectNulls:!1,activeDot:!0,dot:!0,legendType:"line",stroke:"#3182bd",strokeWidth:1,fill:"#fff",points:[],isAnimationActive:!or.isSsr,animateNewValues:!0,animationBegin:0,animationDuration:1500,animationEasing:"ease",hide:!1,label:!1});O(le,"getComposedData",function(t){var r=t.props,n=t.xAxis,s=t.yAxis,a=t.xAxisTicks,c=t.yAxisTicks,i=t.dataKey,o=t.bandSize,d=t.displayedData,p=t.offset,h=r.layout,g=d.map(function(y,v){var j=dt(y,i);return h==="horizontal"?{x:Ge({axis:n,ticks:a,bandSize:o,entry:y,index:v}),y:ke(j)?null:s.scale(j),value:j,payload:y}:{x:ke(j)?null:n.scale(j),y:Ge({axis:s,ticks:c,bandSize:o,entry:y,index:v}),value:j,payload:y}});return z({points:g,layout:h},p)});var qo=hr({chartName:"LineChart",GraphicalChild:le,axisComponents:[{axisType:"xAxis",AxisComp:pt},{axisType:"yAxis",AxisComp:ut}],formatAxisMap:xr});const Qo=({cx:t,cy:r})=>e.jsx(ct,{cx:t,cy:r,fill:l.blueTextAccent,r:2}),Xo=({data:t,width:r=500,height:n=300})=>e.jsx(e.Fragment,{children:(t==null?void 0:t.length)&&e.jsxs(qo,{data:t,height:n,id:"cy-sentiment-chart",margin:{bottom:5,left:-20,right:30,top:5},width:r,children:[e.jsx(fr,{stroke:l.lightBlue300,strokeDasharray:"5 5"}),e.jsx(pt,{dataKey:"date",interval:Math.floor(t.length/3),stroke:l.blueTextAccent}),e.jsx(ut,{domain:[0,10],stroke:l.blueTextAccent}),e.jsx(mr,{}),e.jsx(le,{dataKey:"score",dot:e.jsx(Qo,{}),stroke:"#8884d8",type:"monotone"})]})}),Zo=()=>{const[t,r]=f.useState(void 0),[n]=se(i=>[i.setBudget]),[s,a]=f.useState(!1),c=async()=>{a(!0),Qt(n).then(async i=>{r(i==null?void 0:i.data.filter(o=>o.date).map(o=>({date:Nt.unix(Number(String(o.date).split(".")[0])).format("MM/DD/YY"),score:o.sentiment_score}))),await rt(n)}).catch().finally(()=>{a(!1)})};return e.jsxs(Jo,{align:"flex-start",direction:"column",id:"cy-sentiment-chart-wrapper",justify:"flex-end",children:[e.jsx(T,{className:"title",children:"Sentiment chart"}),s&&e.jsx(Rr,{alignItems:"center",component:"div",flexGrow:1,p:4,spacing:2,width:"100%",children:e.jsx(zt,{color:l.white})}),!(t!=null&&t.length)&&e.jsx(es,{className:"button",id:"cy-get-sentiments-btn",onClick:c,children:"Get top 100 sentiments"}),e.jsx(Xo,{data:t})]})},Jo=x(u)`
  border-radius: 8px;
  box-shadow: 0px 5px 6px rgb(0 0 0 / 50%);
  padding: 16px;

  .title {
    margin-bottom: 16px;
    font-size: 20px;
  }
`,es=x(wt)`
  height: 48px;
`,ts=600,rs={about:e.jsx(Po,{}),sentiment:e.jsx(Zo,{}),sources:e.jsx(So,{}),"":null},ns=()=>{const[t,r]=U(n=>[n.secondarySidebarActiveTab,n.setSecondarySidebarActiveTab]);return e.jsx(gr,{direction:"left",in:!!t,mountOnEnter:!0,unmountOnExit:!0,children:e.jsxs(os,{id:"secondary-sidebar-wrapper",children:[e.jsx(ss,{id:"cy-close-secondary-sidebar",onClick:()=>r(""),children:e.jsx(ft,{})}),rs[t]]})})},os=x(u)(({theme:t})=>({background:l.BG1,height:"100vh",padding:"16px 20px",width:"100%",zIndex:30,display:"flex",[t.breakpoints.up("sm")]:{width:ts}})),ss=x(u).attrs({align:"center",justify:"center",p:5})`
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
`,is=x(Xt)`
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
`,as=x(u)`
  height: 100%;
  width: 100%;
  background-color: ${l.black};
`,ls=x(u)`
  position: absolute;
  bottom: 8px;
  left: 8px;
  color: ${l.white};
  font-size: 12px;
  opacity: 0.5;
`,cs=f.lazy(()=>L(()=>import("./index-164bf792.js"),["assets/index-164bf792.js","assets/index-01782a69.js","assets/index-3f17fe3b.css","assets/SourcesTableIcon-ebf87a97.js","assets/SettingsIcon-e2024ff8.js","assets/index-aba16a9a.js"]).then(({MainToolbar:t})=>({default:t}))),ds=f.lazy(()=>L(()=>import("./index-483092ab.js"),["assets/index-483092ab.js","assets/index-01782a69.js","assets/index-3f17fe3b.css","assets/EditIcon-f4c7ebd2.js","assets/react-toastify.esm-d4c7807c.js","assets/react-toastify-b67b3d0b.css","assets/generateCategoricalChart-44bb7e25.js","assets/Popover-b826ddf0.js","assets/useSlotProps-2c201f6d.js","assets/InfoIcon-7fd329ae.js","assets/index-d463d61e.js","assets/index.esm-b2fe6b9a.js","assets/PlusIcon-691820ed.js","assets/index-aba16a9a.js","assets/ClipLoader-e8b8ddb1.js","assets/NoFilterResultIcon-63603a66.js","assets/ChevronUpIcon-782bc13e.js","assets/index-bdc7fdec.js","assets/index-d39042d9.js","assets/index-9298a825.js","assets/index-aa46beb1.js","assets/Popper-60e6b823.js","assets/CheckIcon-cabeb6b1.js","assets/SettingsIcon-e2024ff8.js","assets/Stack-17d482e0.js"]).then(({Universe:t})=>({default:t}))),ps=f.lazy(()=>L(()=>import("./index-385f51ab.js"),["assets/index-385f51ab.js","assets/index-01782a69.js","assets/index-3f17fe3b.css","assets/react-toastify.esm-d4c7807c.js","assets/react-toastify-b67b3d0b.css","assets/SoundIcon-98ccbb45.js","assets/Select-150c9580.js","assets/Popover-b826ddf0.js","assets/useSlotProps-2c201f6d.js","assets/ChevronUpIcon-782bc13e.js","assets/generateCategoricalChart-44bb7e25.js","assets/InfoIcon-7fd329ae.js","assets/CheckIcon-cabeb6b1.js","assets/index.esm-b2fe6b9a.js","assets/toastMessage-71cf2792.js","assets/SoundIcon-6125620a.css","assets/index-d463d61e.js","assets/Skeleton-962854dc.js","assets/ClipLoader-e8b8ddb1.js","assets/PlusIcon-691820ed.js","assets/index-aba16a9a.js","assets/index-aa46beb1.js"]).then(({SideBar:t})=>({default:t}))),us=()=>{const[t,r]=se(C=>[C.setBudget,C.setNodeCount]),[n,s]=f.useState(!1),{setSidebarOpen:a,currentSearch:c,setCurrentSearch:i,setRelevanceSelected:o,setTranscriptOpen:d}=U(C=>C),p=yr(C=>C.setTeachMeAnswer),{data:h,setData:g,fetchData:y,graphStyle:v,setSelectedNode:j,setCategoryFilter:m}=D(C=>C),w=Zt(),S=ie({mode:"onChange"}),k=S.handleSubmit(({search:C})=>{d(!1),j(null),o(!1),i(C),p(""),m(null)}),b=f.useCallback(async()=>{await y(t,{...c?{word:c}:{}}),a(!0),c?await rt(t):j(null)},[y,t,c,a,j]);f.useEffect(()=>{b()},[c,b]);const A=()=>{if(h){s(!0);const C=rr(v,h.nodes);setTimeout(()=>{g(C),s(!1)},1e3)}};f.useEffect(()=>{A()},[v]);const P=f.useCallback(()=>{r("INCREMENT")},[r]);return f.useEffect(()=>{w&&(w.on("connect_error",C=>{console.error("Socket connection error:",C)}),w.on("newnode",P))},[w,P]),f.useEffect(()=>()=>{w&&w.disconnect()},[w]),e.jsxs(e.Fragment,{children:[e.jsx(Jt,{}),e.jsx(yn,{}),e.jsx(er,{hidden:!Ot}),e.jsx(f.Suspense,{fallback:e.jsx("div",{children:"Loading..."}),children:e.jsxs(as,{direction:"row",children:[e.jsx(jr,{children:e.jsxs(ae,{...S,children:[e.jsx(cs,{}),e.jsx(ps,{onSubmit:k}),e.jsx(ds,{}),n&&e.jsx(on,{fullSize:!1}),e.jsx(rn,{}),e.jsx(ns,{}),e.jsx(fn,{}),e.jsxs(ls,{children:["v",tr]}),e.jsx(St,{})]})}),e.jsx(xn,{}),e.jsx(is,{}),e.jsx(wn,{})]})})]})},Es=Object.freeze(Object.defineProperty({__proto__:null,App:us},Symbol.toStringTag,{value:"Module"}));export{rn as O,on as P,So as S,Es as i};
