import{s as f,j as e,c,F as p,r as x,T as _,_ as O,m as $t,d as Et,a as Re,Y as Me,R as Fe,u as oe,l as tt,b as Pt,e as E,f as It,i as zt,P as Nt,h as Dt,g as rt,k as Ot}from"./index-725cd71c.js";import{B as L,u as B,C as Lt,I as G,L as Bt,a as nt,b as U,c as Rt,v as Mt,A as st,P as Ft,d as V,G as Wt,e as F,S as Vt,f as Gt,g as Ut,h as ot,i as it,p as Yt,j as at,k as Ht,l as ie,F as ae,m as Kt,n as lt,o as qt,s as ct,q as Qt,r as Xt,t as Zt,T as Jt,w as er,x as tr,y as rr,z as nr,D as sr}from"./react-toastify.esm-2b45af49.js";import{P as or,f as We,G as ir,u as ar,c as Ve,D as dt,a as lr,E as cr,L as _e,b as ue,C as dr,A as pr,i as re,d as ur,e as Ie,g as hr,h as xr,j as pt,k as Ge,l as fr,X as ut,Y as ht,m as mr,n as gr,T as yr,S as jr,o as br,p as wr}from"./generateCategoricalChart-756a6d80.js";import{C as $}from"./ClipLoader-0a48de47.js";import{M as xt,a as ft,b as vr,c as Sr,d as mt,e as _r}from"./index.esm-665ada5a.js";import{T as Tr,a as le,b as Cr,F as ze,M as me,C as gt,N as Ar,c as kr,D as Oe}from"./NoFilterResultIcon-afdb4a18.js";import{s as q,T as yt,A as Le,u as N,I as $r,E as Er,D as Pr,a as jt,Q as bt,V as Ir,S as zr}from"./index-ab8c65ad.js";import{S as ge,C as Nr,a as Dr}from"./ChevronUpIcon-179dbe87.js";import{P as ye,I as je,a as wt,F as Or}from"./Popover-653b2d14.js";import{B as Lr,T as ne}from"./index-858be4ee.js";import{u as M}from"./index-c3e60fc6.js";import{B as Be}from"./index-c7317d75.js";import{P as vt}from"./Popper-65bf3f6a.js";import{C as Br}from"./CheckIcon-c6ceecd9.js";import{S as Rr}from"./SettingsIcon-d5e77c98.js";import{P as Mr}from"./PlusIcon-1cd6bc68.js";import{T as Fr,a as Wr,B as St}from"./index-88bd09b5.js";import{S as Vr}from"./Stack-a82f7004.js";const Gr=()=>{const[t,r]=B(n=>[n.cameraFocusTrigger,n.setCameraFocusTrigger]);return e.jsx(Ur,{href:"",onClick:()=>r(!t),size:"medium",startIcon:e.jsx(Lt,{})})},Ur=f(L)`
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
`,Yr=()=>{const t=x.useRef(null),[r,n]=x.useState(0),s=nt(),a=B(b=>b.setSelectedNode),[l,i]=U(b=>[b.sidebarIsOpen,b.setSidebarOpen]),[o,d,h,u,g,y]=Rt(b=>[b.isPlaying,b.setIsPlaying,b.playingTime,b.playingNode,b.miniPlayerIsVisible,b.setMiniPlayerIsVisible]),[w,j]=u!=null&&u.timestamp?u.timestamp.split("-").map(b=>Mt(b)):[0,0],m=(h-w)/(j-w)*100;x.useEffect(()=>{var P,C;const b=((P=t.current)==null?void 0:P.offsetWidth)||0,A=((C=t.current)==null?void 0:C.scrollWidth)||0;n(A-b)},[]);const v=b=>{y(!1),b.stopPropagation()},T=()=>{a(u),i(!0)},k=l&&(s==null?void 0:s.ref_id)!==(u==null?void 0:u.ref_id)||u&&!l;return g&&u&&k?e.jsxs(Hr,{onClick:T,children:[e.jsxs(Kr,{children:[e.jsx(st,{src:u.image_url||"",type:u.node_type}),e.jsxs(qr,{children:[e.jsxs(en,{ref:t,children:[e.jsx(Jr,{className:"title",scrollValue:r,children:u.episode_title}),e.jsx("div",{className:"subtitle",children:u.show_title})]}),e.jsx(Xr,{"data-testid":"play-pause-button",onClick:b=>{d(!o),b.stopPropagation()},size:"small",children:o?e.jsx(or,{"data-testid":"pause-icon"}):e.jsx(Ft,{"data-testid":"play-icon"})})]}),e.jsx(Qr,{onClick:b=>v(b),children:e.jsx(V,{})})]}),e.jsx(Zr,{value:m,variant:"determinate"})]}):null},Hr=f(p).attrs({direction:"column",align:"stretch",justify:"space-between"})`
  padding: 8px;
  background: ${c.BG1};
  border-radius: 6px;
  width: 320px;
  height: 72px;
  margin-top: 16px;
  cursor: pointer;
  z-index: 0;
`,Kr=f(p).attrs({direction:"row",align:"center",justify:"flex-start"})``,qr=f(p).attrs({direction:"row",align:"center",justify:"space-between"})`
  flex: 1;
  color: ${c.white};
  margin-left: 11px;

  .title {
    font-size: 13px;
    margin-bottom: 2px;
    font-weight: 500;
  }

  .subtitle {
    font-size: 11px;
    color: ${c.GRAY6};
  }
`,Qr=f(G)`
  padding: 8px;
  color: ${c.GRAY6};
  z-index: 100000;
`,Xr=f(G)`
  && {
    font-size: 36px;
    padding: 2px;
    margin-left: 8px;
    overflow: hidden;
    z-index: 100000;
  }
`,Zr=f(Bt)`
  && {
    flex-shrink: 0;
    height: 2px;
    background-color: ${c.white};
    color: blue;

    .MuiLinearProgress-bar {
      background: rgb(65, 90, 127);
    }
  }
`,Jr=f.div`
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
`,en=f(p)`
  overflow: hidden;
  flex: 1;
`,_t=()=>{const t=nt(),r=B(n=>n.isFetching);return e.jsxs(tn,{align:"flex-end",id:"actions-toolbar",children:[!r&&e.jsx(Gr,{}),!r&&e.jsx(Wt,{}),e.jsx(Yr,{},t==null?void 0:t.ref_id)]})},tn=f(p)`
  position: absolute;
  right: 20px;
  bottom: 20px;
  pointer-events: all;
`,rn=({twitterHandle:t})=>e.jsx(e.Fragment,{children:e.jsx(p,{direction:"row",children:e.jsx(p,{align:"flex-start",pb:12,children:e.jsxs(_,{children:["Tweet by @",t]})})})}),nn=f(p)(({theme:t})=>({position:"absolute",top:"65px",right:"55px",width:"300px",pointerEvents:"none",background:c.dashboardHeader,boxShadow:"0px 1px 6px rgba(0, 0, 0, 0.1)",color:c.primaryText1,zIndex:100,transition:"opacity 0.6s",padding:t.spacing(2,3),[t.breakpoints.down("sm")]:{padding:t.spacing(1,1.5)}})),sn=f(p)`
  width: 22.5%;
`,on=({node:t})=>{if(!t)return null;const{node_type:r,show_title:n,episode_title:s,description:a,label:l,text:i,type:o,twitter_handle:d}=t,h=t.guests;let u=!1,g=!1;h&&(h.length&&h[0]!==null&&(u=!0),typeof h[0]=="object"&&(g=!0));let y=t.image_url;if(o==="twitter_space"&&(y="twitter_placeholder.png"),y==null)switch(r){case"guest":y="person_placeholder2.png";break;default:y="noimage.jpeg"}return r==="topic"?null:e.jsx(nn,{borderRadius:8,px:24,py:16,children:r==="tweet"?e.jsx(rn,{twitterHandle:d}):e.jsxs(e.Fragment,{children:[e.jsxs(p,{direction:"row",children:[e.jsx(sn,{}),e.jsx(p,{align:"flex-start",pb:12,children:e.jsx(_,{children:r==null?void 0:r.toUpperCase()})})]}),e.jsxs(p,{direction:"row",children:[e.jsx(p,{pr:12,children:e.jsx(st,{src:y,type:"person"})}),e.jsxs("div",{children:[o==="guest"?e.jsxs(p,{direction:"column",children:[e.jsx(_,{children:l}),i&&e.jsx(p,{pt:4,children:e.jsxs(_,{color:"primaryText1",kind:"tiny",children:["@",i]})})]}):e.jsx(_,{color:"primaryText1",kind:"tiny",children:n}),e.jsxs(p,{pt:4,children:[r==="clip"||r==="episode"&&e.jsx(_,{color:"primaryText1",children:"Episode"}),r==="clip"?e.jsx(_,{as:"div",kind:"regularBold",children:We(a)}):e.jsx(_,{color:"primaryText1",kind:"tiny",children:s})]}),e.jsxs(p,{pt:12,children:[r==="clip"&&e.jsx(_,{color:"primaryText1",children:"Episode"}),e.jsx(_,{color:"primaryText1",kind:"tiny",children:r==="clip"?s:We(a)})]}),u&&e.jsxs(p,{pt:12,children:[e.jsx(_,{color:"primaryText1",children:"People"}),e.jsx(p,{pt:4,children:e.jsx(_,{color:"primaryText1",kind:"tiny",children:g?h.map(w=>w.name?w.name:`@${w.twitter_handle}`).join(", "):h==null?void 0:h.join(", ")})})]})]})]})]})})},an=()=>{const[t]=B(r=>[r.hoveredNode]);return e.jsxs(ln,{children:[t&&e.jsx("div",{id:"tooltip-portal",children:e.jsx(on,{node:t})}),e.jsx(_t,{})]})},ln=f("div")(({theme:t})=>({position:"absolute",zIndex:1,top:0,left:0,userSelect:"none",pointerEvents:"none",display:"flex",justifyContent:"flex-end",alignItems:"flex-start",height:"100%",width:"100%",padding:"16px",[t.breakpoints.down("sm")]:{top:50}})),cn=({fullSize:t=!0})=>{const r=U(n=>n.sidebarIsOpen);return e.jsx(dn,{align:"center",className:F({"sidebar-is-open":r&&!t}),justify:"center",children:e.jsx($,{color:c.SECONDARY_BLUE,size:64})})},dn=f(p)`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  background-color: ${c.black};
  z-index: 1;
`,pn=x.lazy(()=>O(()=>import("./index-b44816a4.js"),["assets/index-b44816a4.js","assets/index-725cd71c.js","assets/index-3f17fe3b.css","assets/index-c7317d75.js","assets/index-c3e60fc6.js","assets/react-toastify.esm-2b45af49.js","assets/react-toastify-b67b3d0b.css","assets/index-88bd09b5.js","assets/useSlotProps-cf3ec1f9.js","assets/index-858be4ee.js","assets/index.esm-665ada5a.js","assets/InfoIcon-2b7bba01.js","assets/ClipLoader-0a48de47.js"]).then(({SettingsModal:t})=>({default:t}))),un=x.lazy(()=>O(()=>import("./index-e77e8bfa.js"),["assets/index-e77e8bfa.js","assets/index-725cd71c.js","assets/index-3f17fe3b.css","assets/react-toastify.esm-2b45af49.js","assets/react-toastify-b67b3d0b.css","assets/index-c7317d75.js","assets/index-c3e60fc6.js","assets/toastMessage-e30a9a05.js","assets/index.esm-665ada5a.js","assets/CheckIcon-c6ceecd9.js","assets/ClipLoader-0a48de47.js","assets/index-858be4ee.js","assets/InfoIcon-2b7bba01.js"]).then(({AddContentModal:t})=>({default:t}))),hn=x.lazy(()=>O(()=>import("./index-87ef9923.js"),["assets/index-87ef9923.js","assets/index-725cd71c.js","assets/index-3f17fe3b.css","assets/react-toastify.esm-2b45af49.js","assets/react-toastify-b67b3d0b.css","assets/index-c7317d75.js","assets/index-c3e60fc6.js","assets/toastMessage-e30a9a05.js","assets/index.esm-665ada5a.js","assets/CheckIcon-c6ceecd9.js","assets/ClipLoader-0a48de47.js","assets/index-858be4ee.js","assets/InfoIcon-2b7bba01.js","assets/index-61dafc83.js","assets/index-48369ed0.js","assets/Popover-653b2d14.js","assets/useSlotProps-cf3ec1f9.js","assets/Select-e2ea12e5.js","assets/Stack-a82f7004.js","assets/Popper-65bf3f6a.js","assets/constants-84edb5fc.js"]).then(({AddItemModal:t})=>({default:t}))),xn=x.lazy(()=>O(()=>import("./index-6627f2e3.js"),["assets/index-6627f2e3.js","assets/index-725cd71c.js","assets/index-3f17fe3b.css","assets/index-c7317d75.js","assets/index-c3e60fc6.js","assets/react-toastify.esm-2b45af49.js","assets/react-toastify-b67b3d0b.css","assets/generateCategoricalChart-756a6d80.js","assets/Popover-653b2d14.js","assets/useSlotProps-cf3ec1f9.js","assets/InfoIcon-2b7bba01.js","assets/ClipLoader-0a48de47.js","assets/index.esm-665ada5a.js","assets/NoFilterResultIcon-afdb4a18.js","assets/ChevronUpIcon-179dbe87.js","assets/index-88bd09b5.js","assets/index-ab8c65ad.js","assets/index-858be4ee.js","assets/Popper-65bf3f6a.js","assets/CheckIcon-c6ceecd9.js","assets/SettingsIcon-d5e77c98.js","assets/PlusIcon-1cd6bc68.js","assets/Stack-a82f7004.js"]).then(({SourcesTableModal:t})=>({default:t}))),fn=x.lazy(()=>O(()=>import("./index-b7ce4a51.js"),["assets/index-b7ce4a51.js","assets/index-725cd71c.js","assets/index-3f17fe3b.css","assets/index-c7317d75.js","assets/index-c3e60fc6.js","assets/react-toastify.esm-2b45af49.js","assets/react-toastify-b67b3d0b.css","assets/index-ab8c65ad.js","assets/index-858be4ee.js","assets/index.esm-665ada5a.js","assets/InfoIcon-2b7bba01.js","assets/Skeleton-5cdaafa2.js","assets/ClipLoader-0a48de47.js"]).then(({EditNodeNameModal:t})=>({default:t}))),mn=x.lazy(()=>O(()=>import("./index-6d006610.js"),["assets/index-6d006610.js","assets/index-725cd71c.js","assets/index-3f17fe3b.css","assets/index-c7317d75.js","assets/index-c3e60fc6.js","assets/react-toastify.esm-2b45af49.js","assets/react-toastify-b67b3d0b.css","assets/toastMessage-e30a9a05.js","assets/index.esm-665ada5a.js","assets/Skeleton-5cdaafa2.js","assets/ClipLoader-0a48de47.js"]).then(({RemoveNodeModal:t})=>({default:t}))),gn=x.lazy(()=>O(()=>import("./index-005777fc.js"),["assets/index-005777fc.js","assets/index-725cd71c.js","assets/index-3f17fe3b.css","assets/index-c7317d75.js","assets/index-c3e60fc6.js","assets/react-toastify.esm-2b45af49.js","assets/react-toastify-b67b3d0b.css","assets/toastMessage-e30a9a05.js","assets/index.esm-665ada5a.js","assets/index-61dafc83.js","assets/index-48369ed0.js","assets/Popover-653b2d14.js","assets/useSlotProps-cf3ec1f9.js","assets/Select-e2ea12e5.js","assets/Stack-a82f7004.js","assets/Popper-65bf3f6a.js","assets/constants-84edb5fc.js","assets/index-ab8c65ad.js","assets/ClipLoader-0a48de47.js"]).then(({AddNodeEdgeModal:t})=>({default:t}))),yn=()=>e.jsxs(e.Fragment,{children:[e.jsx(hn,{}),e.jsx(un,{}),e.jsx(pn,{}),e.jsx(fn,{}),e.jsx(mn,{}),e.jsx(xn,{}),e.jsx(gn,{})]}),jn=()=>{const t=U(r=>r.appMetaData);return e.jsxs(bn,{children:[e.jsxs(wn,{children:[e.jsx(e.Fragment,{children:t.title&&e.jsx(_,{className:"title",color:"white",children:t.title})}),e.jsx(_,{className:"subtitle",children:" Second Brain"})]}),e.jsx(Vt,{})]})},bn=f(p).attrs({align:"center",direction:"row",grow:1,justify:"flex-start"})`
  height: 64px;
  position: absolute;
  top: 0px;
  left: 64px;
  right: 32px;
  transition: opacity 1s;
  z-index: 99;
  padding: 20px 23px;
`,wn=f.div`
  ${$t.smallOnly`
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
    color: ${c.GRAY6};
    font-family: Barlow;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0.22px;
  }
`,vn=()=>{const[t,r]=x.useState(!0),n=Gt();x.useEffect(()=>{r(!0)},[n]);const s=()=>{r(!1)};return n&&t?e.jsxs(Sn,{align:"center",direction:"column",justify:"center",onClick:s,children:[e.jsx("img",{alt:"screen",src:"jamboard_kiosk.png"}),e.jsxs(p,{align:"center",direction:"column",justify:"center",children:[e.jsx(Te,{children:"Second Brain is currently"}),e.jsx(Te,{style:{fontWeight:600},children:"optimized for Desktop."}),e.jsx(Te,{children:"Mobile support coming soon."})]}),e.jsx(L,{color:"secondary",onClick:s,variant:"contained",children:"Got It"})]}):null},Sn=f(p)`
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.75);
  gap: 28px;
  z-index: 2000000000;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`,Te=f(_)`
  color: #fff;
  text-align: center;
  font-family: Barlow;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  margin: 1px;
`,_n={},Tn=x.createContext(_n),Cn=()=>{const[t,r]=x.useState(!1),n=x.useMemo(()=>({isShow:t,setIsShow:r}),[t]);return e.jsx(Tn.Provider,{value:n})},S=f(Tr)`
  && {
    color: ${c.white};
    border: none;
    padding: 6px 27px 6px 0;
    color: ${c.GRAY3};
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
`,be=f(le)`
  && {
    height: 48px;
    padding: 0 36px;
  }
  &:nth-child(odd) {
    background-color: ${c.BG3};
  }
`,we=f(Cr)`
  && {
    border-bottom: 1px solid ${c.black};
  }

  ${S} {
    color: ${c.white};
    font-family: Barlow;
    font-size: 11px;
    font-style: normal;
    font-weight: 700;
    line-height: 18px; /* 163.636% */
    letter-spacing: 1.1px;
    text-transform: uppercase;
  }
`,xe=f(L)`
  &.selected {
    background: ${c.white};
    color: ${c.BG1};
    pointer-events: none;
  }

  & + & {
    margin-left: 16px;
  }
`,ve=f(p)`
  margin-bottom: 16px;
  padding: 0 36px;
  ${_} {
    margin-bottom: 0;
  }
`,An=({data:t})=>{const r=B(i=>i.setQueuedSources),[n,s]=x.useState(""),a=async i=>{if(t!=null&&t.length)try{const o=await Et.enable();await Ut(i,o.pubkey),r(t.filter(d=>d.ref_id!==i))}catch(o){console.warn(o)}},l=async i=>{if(!(!i||!(t!=null&&t.length))){s(i);try{await ot(i),r(t==null?void 0:t.filter(o=>o.ref_id!==i))}catch(o){console.warn(o)}finally{s("")}}};return t!=null&&t.length?e.jsxs(me,{component:"table",children:[e.jsx(we,{children:e.jsxs(le,{component:"tr",children:[e.jsx(S,{className:"empty"}),e.jsx(S,{children:"Type"}),e.jsx(S,{children:"Source"}),e.jsx(S,{}),e.jsx(S,{className:"empty"})]})}),(t==null?void 0:t.length)&&e.jsx("tbody",{children:t==null?void 0:t.map(i=>e.jsxs(be,{children:[e.jsx(S,{className:"empty"}),e.jsx(S,{children:q[i.source_type]}),e.jsx(S,{width:"268px",children:i.source_type==="twitter_handle"?e.jsxs(Ye,{href:`${yt}/${i.source}?open=system`,target:"_blank",children:["@",i.source]}):e.jsx(Ye,{href:`${i.source}?open=system`,target:"_blank",children:i.source})}),e.jsx(S,{className:"cell-center",children:e.jsxs(p,{direction:"row",justify:"space-between",children:[e.jsx("div",{className:"approve-wrapper",children:e.jsx(Ue,{className:"centered",onClick:()=>a(i.ref_id),children:e.jsx(xt,{color:c.primaryGreen,fontSize:24})})}),e.jsx("div",{className:"delete-wrapper",children:n===i.ref_id?e.jsx($,{color:c.white,size:16}):e.jsx(gt,{message:"Are you sure ?",onConfirm:()=>l(i.ref_id),children:e.jsx(Ue,{className:"centered",children:e.jsx(ft,{color:c.primaryRed,fontSize:24})})})})]})}),e.jsx(S,{className:"empty"})]},i.source))})]}):e.jsxs(p,{children:[e.jsx(_,{children:"There is not any results for selected filters"}),e.jsx(ze,{})]})},Ue=f(p)`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  cursor: pointer;
  background: transparent;
  color: ${c.lightBlue500};
  &.centered {
    margin: 0 auto;
  }

  & + & {
    margin-left: 4px;
  }
`,Ye=f.a`
  color: ${c.white};
  text-decoration: underline;
  &:visited {
    color: ${c.white};
  }
  &:hover {
    cursor: pointer;
  }
`,kn=()=>{const[t,r]=x.useState(!0),[n,s]=x.useState(""),[a,l]=B(d=>[d.queuedSources,d.setQueuedSources]);x.useEffect(()=>{(async()=>{r(!0);try{const h=await it({approved:"False"});l(h.data)}catch(h){console.warn(h)}finally{r(!1)}})()},[l]);const i=d=>{s(n===d||!d?"":d)},o=a==null?void 0:a.filter(d=>!n||d.source_type===n);return e.jsxs($n,{align:"stretch",direction:"column",justify:"flex-end",children:[e.jsxs(ve,{align:"flex-start",justify:"space-between",children:[e.jsx(_,{className:"title",children:"Queued Sources"}),e.jsx(_,{className:"subtitle",children:"This is a queue of pending sources waiting for approval or denial from graph users. If you think a source will provide good content for the graph, you can pay to approve it. Think of this as an investment: you pay to add it to the source table, and if the content is popular you will earn from it. If content is not relevant to the graph, you should deny it."})]}),e.jsxs(p,{className:"filters",direction:"row",pb:16,px:36,children:[e.jsx(xe,{className:F({selected:!n}),onClick:()=>i(""),size:"small",children:"All"}),Object.keys(q).map(d=>e.jsx(xe,{className:F({selected:d===n}),onClick:()=>i(d),size:"small",children:q[d]},d))]}),e.jsx(En,{align:"center",justify:t?"center":"flex-start",children:t?e.jsx($,{color:c.white}):e.jsx(An,{data:o})})]})},$n=f(p)`
  flex: 1;

  .title {
    margin-bottom: 32px;
    font-size: 20px;
    color: ${c.white};
    font-family: Barlow;
    font-size: 22px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  .subtitle {
    color: ${c.GRAY3};
    font-family: Barlow;
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  & .filters {
    overflow-x: auto;
  }
`,En=f(p)`
  min-height: 0;
  overflow: auto;
  flex: 1;
  width: 100%;
`,Pn=({onSearch:t,placeholder:r,activeIcon:n,loadingIcon:s,defaultIcon:a,...l})=>{const[i,o]=x.useState(""),[d,h]=x.useState(!1),u=()=>{o(""),t(""),h(!1)},g=j=>{!j.target.value&&u(),o(j.target.value)},y=j=>{const{value:m}=j.currentTarget;o(m),!d&&(h(!0),setTimeout(()=>{t(m),m||u(),h(!1)},1e3),m||u())},w=()=>d?e.jsx(He,{children:e.jsx(Ce,{type:"button",children:s})}):e.jsx(He,{children:i?e.jsx(Ce,{onClick:u,type:"button",children:n}):e.jsx(Ce,{type:"button",children:a})});return e.jsxs(In,{children:[e.jsx(zn,{autoComplete:"off",autoCorrect:"off",inputProps:{"aria-label":"search sources"},onChange:g,onKeyDown:j=>{j.key==="Enter"&&y(j)},placeholder:r,value:i,...l}),w()]})},He=f(p)`
  top: -50%;
  right: -3%;
  z-index: 3;
  position: absolute;
  transform: translate(-50%, 50%);
`,Ce=f(G)`
  font-size: 24px;
`,In=f(ye)`
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
`,zn=f(je)`
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
    background-color: ${c.BG2};
    padding: 0px 8px 0px 16px !important;
    box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);

    &:focus,
    &:active {
      color: ${c.white};
      background-color: ${c.BG2_ACTIVE_INPUT};
      outline: 1px solid ${c.primaryBlue};
    }

    &:hover {
      background-color: ${c.BG2_ACTIVE_INPUT};
    }

    &::placeholder {
      font-size: 15px;
      text-align: left;
      font-weight: 500;
      line-height: 16px;
      letter-spacing: 0em;
      font-family: Barlow;
      color: ${c.GRAY7};
    }
  }
  width: 100%;
`,Nn=({data:t,canEdit:r=!1})=>{const n=B(o=>o.setSources),[s,a]=x.useState(""),l=async(o,d)=>{if(t!=null&&t.length)try{await Yt(o,d);const h=t==null?void 0:t.findIndex(g=>g.ref_id===o),u=[...t];u[h]={...u[h],source:d.source},n(u)}catch(h){console.warn(h)}},i=async o=>{if(!(!o||!(t!=null&&t.length))){a(o);try{await ot(o),n(t==null?void 0:t.filter(d=>d.ref_id!==o))}catch(d){console.warn(d)}finally{a("")}}};return t!=null&&t.length?e.jsxs(me,{"aria-label":"a dense table",component:"table",id:"sources-table",size:"small",children:[e.jsx(we,{children:e.jsxs(le,{component:"tr",children:[e.jsx(S,{className:"empty"}),e.jsx(S,{children:"Type"}),e.jsx(S,{align:"left",children:"Source"}),r&&e.jsx(S,{align:"left"}),e.jsx(S,{className:"empty"})]})}),e.jsx(kr,{component:"tbody",children:t==null?void 0:t.map(o=>e.jsxs(be,{children:[e.jsx(S,{className:"empty"}),e.jsx(S,{align:"left",children:q[o.source_type]}),e.jsx(S,{align:"left",children:e.jsx(Dn,{condition:r,wrapper:d=>e.jsx(On,{id:o.ref_id,onSave:h=>l(o.ref_id,{source:h,source_type:o.source_type}),value:o.source,children:d}),children:o.source_type===Re||o.source_type===Me||o.source_type===Fe?e.jsxs(e.Fragment,{children:[o.source_type===Re&&e.jsxs(Ae,{href:`${yt}/${o.source}`,target:"_blank",children:["@",o.source]}),o.source_type===Me&&e.jsx(Ae,{href:`${o.source}${o.source.includes("?")?"&":"?"}open=system`,target:"_blank",children:o.source}),o.source_type===Fe&&e.jsx(Ae,{href:o.source,target:"_blank",children:o.source})]}):e.jsx("div",{children:o.source})})}),r&&e.jsx(S,{align:"left",children:e.jsx("div",{className:"delete-wrapper",id:`delete-${o.source}`,children:s===o.ref_id?e.jsx($,{color:c.white}):e.jsx(gt,{message:"Are you sure ?",onConfirm:()=>i(o.ref_id),children:e.jsx(K,{className:"centered",children:e.jsx(vr,{})})})})}),e.jsx(S,{className:"empty"})]},o.source))})]}):e.jsxs(Bn,{children:[e.jsx(Ar,{}),e.jsx(_,{className:"text",children:"There is not any results for selected filters"})]})};function Dn({condition:t,wrapper:r,children:n}){return t?r(n):n}const On=({value:t,onSave:r,id:n,children:s})=>{const[a,l]=x.useState(!1),[i,o]=x.useState(t),[d,h]=x.useState(!1),u=async()=>{if(n){h(!0);try{await r(i),l(!1)}catch(g){console.warn(g)}finally{h(!1)}}};return e.jsx("div",{children:a?e.jsxs(Ln,{direction:"row",children:[e.jsx(Lr,{className:"editable-cell__input",name:"cell-input",onChange:g=>o(g),value:i}),e.jsx(K,{align:"center",justify:"center",children:d?e.jsx($,{}):e.jsx(Sr,{onClick:u})}),e.jsx(K,{align:"center",className:"secondary",justify:"center",onClick:()=>l(!1),children:e.jsx(mt,{})})]}):e.jsxs(Rn,{direction:"row",children:[s,e.jsx(K,{onClick:()=>l(!0),children:e.jsx(_r,{size:20})})]})})},Ln=f(p)`
  display: flex;
  width: 250px;
  border: 2px solid ${c.lightBlue300};
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
`,K=f(p)`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  cursor: pointer;
  background: transparent;
  color: ${c.lightBlue500};
  &.centered {
    margin: 0 auto;
  }

  & + & {
    margin-left: 4px;
  }
`,Bn=f(p)`
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
    color: ${c.GRAY6};
  }
`,Rn=f(p)`
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
`,Ae=f.a`
  color: ${c.white};
  text-decoration: underline;
  &:visited {
    color: ${c.white};
  }
`,Mn=()=>{const[t,r]=x.useState(!0),[n,s]=x.useState(""),[a,l]=B(g=>[g.sources,g.setSources]),[i]=oe(g=>[g.isAdmin]),[o,d]=x.useState("");x.useEffect(()=>{(async()=>{r(!0);try{const y=await it();l(y.data)}catch(y){console.warn(y)}finally{r(!1)}})()},[l]);const h=g=>{s(n===g||!g?"":g)},u=x.useMemo(()=>a==null?void 0:a.filter(g=>(!n||g.source_type===n)&&(g.source.toLowerCase().startsWith(o.toLowerCase())||g.source.toLowerCase().includes(o.toLowerCase()))),[o,n,a]);return e.jsxs(Fn,{align:"stretch",direction:"column",justify:"flex-end",children:[e.jsx(ve,{align:"center",direction:"row",justify:"space-between",children:e.jsx(_,{className:"title",children:"Sources for this Graph"})}),e.jsx(Vn,{children:e.jsx(Pn,{activeIcon:e.jsx(V,{}),defaultIcon:e.jsx(ge,{}),loadingIcon:e.jsx($,{color:c.PRIMARY_BLUE,size:24}),onSearch:d,placeholder:"Find Topic"})}),e.jsxs(p,{className:"filters",direction:"row",pb:16,px:36,children:[e.jsx(xe,{className:F({selected:!n}),onClick:()=>h(""),size:"small",children:"All"}),Object.keys(q).map(g=>e.jsx(xe,{className:F({selected:g===n}),onClick:()=>h(g),size:"small",children:q[g]},g))]}),e.jsx(Wn,{align:"center",justify:t?"center":"flex-start",children:t?e.jsx($,{color:c.white}):e.jsx(Nn,{canEdit:i,data:u})})]})},Fn=f(p)`
  flex: 1;
  .title {
    font-size: 20px;
    color: ${c.white};
    font-family: Barlow;
    font-size: 22px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  & .filters {
    overflow-x: auto;
  }
`,Wn=f(p)`
  min-height: 0;
  overflow: auto;
  flex: 1;
  width: 100%;
`,Vn=f(p)`
  margin: 0 0 16px 36px;
`,Gn=({onSelect:t,selectedTopic:r})=>{const[n,s]=x.useState(!1),[a,l]=x.useState(""),[i,o]=x.useState([]),[d,h]=x.useState(!1),u=x.useRef(null);x.useEffect(()=>()=>o([]),[o]);const g=async m=>{const v={muted:"False",sort_by:Le,search:m,skip:"0",limit:"1000"};h(!0);try{const T=await at(v);o(T.data)}catch{o([])}finally{h(!1)}},y=x.useMemo(()=>tt.debounce(g,300),[]),w=m=>{t(m)},j=m=>{if(l(m),!m){o([]);return}m.length>2&&y(m)};return r?e.jsxs(Hn,{children:[e.jsx("div",{className:"value",children:r.topic}),e.jsx(p,{className:"icon",onClick:()=>t(null),children:e.jsx(V,{})})]}):e.jsxs(e.Fragment,{children:[e.jsxs(ye,{ref:u,component:"form",onSubmit:m=>m.preventDefault(),sx:{p:"2px 4px",display:"flex",alignItems:"center",width:200},children:[e.jsx(je,{inputProps:{"aria-label":"search topic"},onChange:m=>j(m.target.value),onFocus:()=>s(!0),placeholder:"Search",size:"small",sx:{ml:1,flex:1},value:a}),a&&e.jsxs(e.Fragment,{children:[e.jsx(Ke,{"aria-label":"search",onClick:()=>j(""),type:"button",children:e.jsx(V,{})}),e.jsx(Oe,{orientation:"vertical",sx:{height:28,m:.5}})]}),e.jsx(Ke,{"aria-label":"search",type:"button",children:d?e.jsx($,{color:c.white,size:24}):e.jsx(ge,{})})]}),u.current&&i.length?e.jsx(Yn,{anchorEl:u.current,open:n,placement:"bottom",children:e.jsx(e.Fragment,{children:i.map(m=>e.jsx(Un,{className:F({active:r===m.ref_id}),onClick:()=>w(m),children:m.topic},"option"))})}):null]})},Un=f(p).attrs({direction:"row",align:"center"})`
  font-family: Barlow;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  overflow: hidden;
  width: 200px;
  color: ${c.GRAY3};
  margin-bottom: 4px;
  cursor: pointer;
  &.active {
    color: ${c.white};
  }
  &:hover {
    color: ${c.white};
  }

  .icon {
    margin-right: 8px;
    width: 9px;
    font-size: 10px;
  }
`,Yn=f(vt)`
  && {
    z-index: 99999;
    background: ${c.BUTTON1};
    min-width: 200px;
    padding: 16px;
    color: ${c.GRAY3};
    box-shadow: 0px 1px 6px 0px rgba(0, 0, 0, 0.2);
    border-radius: 6px;
    max-height: 200px;
    overflow: auto;
  }
`,Hn=f(p).attrs({direction:"row",justify:"flex-start",align:"center"})`
  .value {
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .icon {
    margin-left: 8px;
    width: 20px;
    height: 20px;
    color: ${c.white};
    background: ${c.primaryBlue};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
`,Ke=f(G)`
  font-size: 24px;
`,Kn=({selectedType:t,setSelectedType:r})=>{const[n,s]=x.useState(null),[a,l]=x.useState([]);x.useEffect(()=>{(async()=>{try{const{data:u}=await Ht();l(u.edge_types)}catch(u){console.warn(u)}})()},[l]);const i=h=>{s(h.currentTarget)},o=()=>{s(null)},d=h=>{r(h),o()};return e.jsxs("div",{children:[e.jsxs(qn,{onClick:i,children:[e.jsx("div",{className:"text",children:"Type"}),e.jsx("div",{className:"value",children:t}),e.jsx("div",{className:"icon",children:n?e.jsx(Dr,{}):e.jsx(Nr,{})})]}),e.jsx(Xn,{anchorEl:n,anchorOrigin:{vertical:"bottom",horizontal:"left"},anchorPosition:{top:62,left:0},onClose:o,open:!!n,transformOrigin:{vertical:"top",horizontal:"left"},children:e.jsx(Or,{children:a.map(h=>e.jsxs(Qn,{className:F({active:h===t}),onClick:()=>d(h),children:[e.jsx("span",{className:"icon",children:h===t?e.jsx(Br,{}):null}),e.jsx("span",{children:h})]},h))})})]})},qn=f(p).attrs({direction:"row",align:"center"})`
  cursor: pointer;
  flex-grow: 1;
  color: ${c.GRAY6};
  font-family: Barlow;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  padding: 0 8px;
  .value,
  .icon {
    color: ${c.white};
  }

  .value {
    margin: 0 8px 0 4px;
  }
`,Qn=f(p).attrs({direction:"row",align:"center"})`
  font-family: Barlow;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  color: ${c.GRAY3};
  height: 27px;
  cursor: pointer;
  &.active {
    color: ${c.white};
  }
  &:hover {
    color: ${c.white};
  }

  .icon {
    margin-right: 8px;
    width: 9px;
    font-size: 10px;
  }
`,Xn=f(wt)`
  .MuiPaper-root {
    background: ${c.BUTTON1};
    min-width: 149px;
    padding: 16px;
    color: ${c.GRAY3};
    box-shadow: 0px 1px 6px 0px rgba(0, 0, 0, 0.2);
    border-radius: 6px;
  }
`,Zn=({from:t,onSelect:r,selectedTopic:n,selectedType:s,setSelectedType:a})=>e.jsxs(p,{children:[e.jsx(p,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(p,{align:"center",direction:"row",children:e.jsx(Jn,{children:"Add edge"})})}),e.jsxs(es,{mb:12,children:[e.jsxs(ke,{children:[e.jsx("div",{className:"label",children:"From"}),e.jsx("div",{children:t})]}),e.jsx(ke,{children:e.jsx(Kn,{selectedType:s,setSelectedType:a})}),e.jsxs(ke,{children:[e.jsx("div",{className:"label",children:"To"}),e.jsx(Gn,{onSelect:r,selectedTopic:n})]})]})]}),Jn=f(_)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,es=f(p).attrs({align:"flex-start",direction:"row",justify:"flex-start"})`
  color: ${c.white};
  .label {
    margin-bottom: 8px;
    font-weight: 500;
    font-size: 14px;
    color: ${c.GRAY3};
  }
`,ke=f(p)`
  flex: 1 1 100%;
`,ts=({topic:t,onClose:r})=>{const{close:n}=M("addEdge"),[s]=N(j=>[j.data]),a=ie({mode:"onChange"}),[l,i]=x.useState(!1),[o,d]=x.useState(null),[h,u]=x.useState(""),g=()=>{r(),n()},y=async()=>{if(!(!o||!s)){i(!0);try{await Kt({from:t.ref_id,to:o==null?void 0:o.ref_id,relationship:h});const{ref_id:j}=t,{ref_id:m}=o;if(s){const v={...s};v[j]={...v[j],edgeList:[...v[j].edgeList,h]},v[m]&&(v[m]={...v[m],edgeList:[...v[m].edgeList,h]}),N.setState({data:v})}g()}catch(j){console.warn(j)}finally{i(!1)}}},w=l||!o||!h;return e.jsx(Be,{id:"addEdge",kind:"large",onClose:g,preventOutsideClose:!0,children:e.jsxs(ae,{...a,children:[e.jsx(Zn,{from:t.topic,onSelect:d,selectedTopic:o,selectedType:h,setSelectedType:u}),e.jsxs(L,{color:"secondary",disabled:w,onClick:y,size:"large",variant:"contained",children:["Confirm",l&&e.jsx($,{color:c.BLUE_PRESS_STATE,size:10})]})]})})},rs=()=>e.jsxs(p,{children:[e.jsx(p,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(p,{align:"center",direction:"row",children:e.jsx(ns,{children:"Edit topic"})})}),e.jsx(p,{mb:12,children:e.jsx(ne,{id:"cy-topic",maxLength:50,name:"topic",placeholder:"Add your topic",rules:{...Pt}})})]}),ns=f(_)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,ss=({topic:t,onClose:r})=>{const{close:n}=M("editTopic"),[s]=N(w=>[w.data]),a=ie({mode:"onChange"}),{watch:l,setValue:i,reset:o}=a,[d,h]=x.useState(!1);x.useEffect(()=>(t&&i("topic",t==null?void 0:t.topic),()=>{o()}),[t,i,o]);const u=l("topic"),g=()=>{r(),n()},y=async()=>{h(!0);try{if(await lt((t==null?void 0:t.ref_id)||"",{topic:u.trim()}),s){const w={...s};w[t==null?void 0:t.ref_id].topic=u.trim(),N.setState({data:w})}g()}catch(w){console.warn(w)}finally{h(!1)}};return e.jsx(Be,{id:"editTopic",kind:"regular",onClose:g,preventOutsideClose:!0,children:e.jsxs(ae,{...a,children:[e.jsx(rs,{}),e.jsxs(L,{color:"secondary",disabled:d,onClick:y,size:"large",variant:"contained",children:["Save",d&&e.jsx($,{color:c.BLUE_PRESS_STATE,size:10})]})]})})},os=({onSelect:t,selectedTopic:r})=>{const[n,s]=x.useState(!1),[a,l]=x.useState(""),[i,o]=x.useState([]),[d,h]=x.useState(!1),u=x.useRef(null);x.useEffect(()=>()=>o([]),[o]);const g=async m=>{const v={muted:"False",sort_by:Le,search:m,skip:"0",limit:"1000"};h(!0);try{const T=await at(v);o(T.data)}catch{o([])}finally{h(!1)}},y=x.useMemo(()=>tt.debounce(g,300),[]),w=m=>{t(m)},j=m=>{if(l(m),!m){o([]);return}m.length>2&&y(m)};return r?e.jsxs(ls,{children:[e.jsx("div",{className:"value",children:r.topic}),e.jsx(p,{className:"icon",onClick:()=>t(null),children:e.jsx(V,{})})]}):e.jsxs(e.Fragment,{children:[e.jsxs(ye,{ref:u,component:"form",onSubmit:m=>m.preventDefault(),sx:{p:"2px 4px",display:"flex",alignItems:"center",width:200},children:[e.jsx(je,{inputProps:{"aria-label":"search topic"},onChange:m=>j(m.target.value),onFocus:()=>s(!0),placeholder:"Search",size:"small",sx:{ml:1,flex:1},value:a}),a&&e.jsxs(e.Fragment,{children:[e.jsx(qe,{"aria-label":"search",onClick:()=>j(""),type:"button",children:e.jsx(V,{})}),e.jsx(Oe,{orientation:"vertical",sx:{height:28,m:.5}})]}),e.jsx(qe,{"aria-label":"search",type:"button",children:d?e.jsx($,{color:c.white,size:24}):e.jsx(ge,{})})]}),u.current&&i.length?e.jsx(as,{anchorEl:u.current,open:n,placement:"bottom",children:e.jsx(e.Fragment,{children:i.map(m=>e.jsx(is,{className:F({active:r===m.ref_id}),onClick:()=>w(m),children:m.topic},"option"))})}):null]})},is=f(p).attrs({direction:"row",align:"center"})`
  font-family: Barlow;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  overflow: hidden;
  width: 200px;
  color: ${c.GRAY3};
  margin-bottom: 4px;
  cursor: pointer;
  &.active {
    color: ${c.white};
  }
  &:hover {
    color: ${c.white};
  }

  .icon {
    margin-right: 8px;
    width: 9px;
    font-size: 10px;
  }
`,as=f(vt)`
  && {
    z-index: 99999;
    background: ${c.BUTTON1};
    min-width: 200px;
    padding: 16px;
    color: ${c.GRAY3};
    box-shadow: 0px 1px 6px 0px rgba(0, 0, 0, 0.2);
    border-radius: 6px;
    max-height: 200px;
    overflow: auto;
  }
`,ls=f(p).attrs({direction:"row",justify:"flex-start",align:"center"})`
  .value {
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .icon {
    margin-left: 8px;
    width: 20px;
    height: 20px;
    color: ${c.white};
    background: ${c.primaryBlue};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
`,qe=f(G)`
  font-size: 24px;
`,cs=({from:t,onSelect:r,selectedTopic:n})=>e.jsxs(p,{children:[e.jsx(p,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(p,{align:"center",direction:"row",children:e.jsx(ds,{children:"Merge topic"})})}),e.jsxs(ps,{mb:12,children:[e.jsxs(Qe,{children:[e.jsx("div",{className:"label",children:"From"}),e.jsx("div",{children:t})]}),e.jsxs(Qe,{ml:24,children:[e.jsx("div",{className:"label",children:"To"}),e.jsx(os,{onSelect:r,selectedTopic:n})]})]})]}),ds=f(_)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,ps=f(p).attrs({align:"flex-start",direction:"row",justify:"flex-start"})`
  color: ${c.white};
  .label {
    margin-bottom: 8px;
    font-weight: 500;
    font-size: 14px;
    color: ${c.GRAY3};
  }
`,Qe=f(p)`
  flex: 1 1 100%;
`,us=({topic:t,onClose:r})=>{const{close:n}=M("mergeTopic"),[s,a,l]=N(T=>[T.data,T.ids,T.total]),i=ie({mode:"onChange"}),{watch:o,setValue:d,reset:h}=i,[u,g]=x.useState(!1),[y,w]=x.useState(null);x.useEffect(()=>(t&&d("topic",t==null?void 0:t.topic),()=>{h()}),[t,d,h]);const j=o("topic"),m=()=>{r(),n()},v=async()=>{if(!(!y||!s)){g(!0);try{await qt({from:t.ref_id,to:y==null?void 0:y.ref_id});const{ref_id:T}=t;if(s[T]={...s[T],edgeList:[$r],edgeCount:s[T].edgeCount-1},N.setState({ids:a.filter(k=>k!==y.ref_id),total:l-1}),s){const k={...s};k[t==null?void 0:t.ref_id].topic=j.trim(),N.setState({data:k})}m()}catch(T){console.warn(T)}finally{g(!1)}}};return e.jsx(Be,{id:"mergeTopic",kind:"regular",onClose:m,preventOutsideClose:!0,children:e.jsxs(ae,{...i,children:[e.jsx(cs,{from:t.topic,onSelect:w,selectedTopic:y}),e.jsxs(L,{color:"secondary",disabled:u,onClick:v,size:"large",variant:"contained",children:["Merge topics",u&&e.jsx($,{color:c.BLUE_PRESS_STATE,size:10})]})]})})},hs=()=>{const[t,r]=N(i=>[i.filters,i.setFilters]),[n,s]=x.useState(""),a=i=>{i.preventDefault(),r({search:n})},l=()=>{s(""),t.search&&r({search:""})};return e.jsxs(ye,{component:"form",onSubmit:a,sx:{p:"2px 4px",display:"flex",alignItems:"center",width:300},children:[e.jsx(je,{autoComplete:"off",autoCorrect:"off",inputProps:{"aria-label":"search topic"},onChange:i=>s(i.target.value),placeholder:"Search",size:"small",spellCheck:"false",sx:{ml:1,flex:1},value:n}),n&&e.jsxs(e.Fragment,{children:[e.jsx(Xe,{"aria-label":"search",onClick:l,type:"button",children:e.jsx(V,{})}),e.jsx(Oe,{orientation:"vertical",sx:{height:28,m:.5}})]}),e.jsx(Xe,{"aria-label":"search",onClick:a,type:"button",children:e.jsx(ge,{})})]})},Xe=f(G)`
  font-size: 24px;
`,$e=t=>e.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 12 8",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M0.333496 7.66704V6.66706H3.91681V7.66704H0.333496ZM0.333496 4.50037V3.50041H7.7886V4.50037H0.333496ZM0.333496 1.33372V0.33374H11.6668V1.33372H0.333496Z",fill:"currentColor"})}),xs=({topic:t,onClick:r,onSearch:n})=>{const[s,a]=N(u=>[u.ids,u.total]),[l,i]=x.useState(!1),o=t.date_added_to_graph.toString(),d=async(u,g)=>{i(!0);try{await lt(u,{muted_topic:g}),N.setState({ids:s.filter(y=>y!==u),total:a-1})}catch(y){console.warn(y)}},h=u=>{n(u.topic)};return e.jsxs(be,{children:[e.jsx(S,{className:"empty"}),e.jsx(S,{onClick:()=>h(t),children:e.jsx(fs,{children:t.topic})}),e.jsx(S,{children:t.edgeCount}),e.jsx(S,{children:t.edgeList.join(", ")}),e.jsx(S,{children:e.jsx("span",{children:new Date(Number(o)*1e3).toDateString()})}),e.jsx(S,{className:"cell-center",children:e.jsx(p,{direction:"row",justify:"space-between",children:e.jsx("div",{className:"approve-wrapper",children:l?e.jsx($,{color:c.white,size:16}):e.jsx(e.Fragment,{children:t.muted_topic?e.jsx(Ze,{className:"centered",onClick:()=>d(t.ref_id,!1),children:e.jsx(xt,{color:c.primaryGreen,fontSize:24})}):e.jsx(Ze,{className:"centered",onClick:()=>d(t.ref_id,!0),children:e.jsx(ft,{color:c.primaryRed,fontSize:24})})})})})}),e.jsx(S,{children:e.jsx(G,{onClick:u=>r(u,t.ref_id),children:e.jsx(Rr,{})})})]},t.topic)},Ze=f(p)`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  cursor: pointer;
  background: transparent;
  color: ${c.lightBlue500};
  &.centered {
    margin: 0 auto;
  }

  & + & {
    margin-left: 4px;
  }
`,fs=f.span`
  cursor: pointer;
  :hover {
    text-decoration: underline;
  }
`,ms=x.memo(xs),gs=({showMuted:t,onTopicEdit:r,onChangeFilter:n})=>{const{close:s}=M("sourcesTable"),[a,l]=E.useState(null),[i,o]=E.useState(""),[d,h]=U(b=>[b.setSearchFormValue,b.setCurrentSearch]),[u,g]=N(b=>[b.data,b.ids]),y=x.useCallback((b,A)=>{l(b.currentTarget),o(A)},[]),w=()=>{l(null)},j=b=>{d(b),h(b),s()},m=b=>{r(i,b),w()},v=b=>{n(b)},T=!!a,k=T?"simple-popover":void 0;return u?e.jsx(e.Fragment,{children:Object.keys(u).length?e.jsxs(e.Fragment,{children:[e.jsxs(me,{component:"table",children:[e.jsx(we,{children:e.jsxs(le,{component:"tr",children:[e.jsx(S,{className:"empty"}),e.jsx(S,{children:e.jsxs(Ee,{onClick:()=>v(Le),children:["Name ",e.jsx($e,{})]})}),e.jsx(S,{children:e.jsxs(Ee,{onClick:()=>v(Er),children:["Count ",e.jsx($e,{})]})}),e.jsx(S,{children:"Edge list"}),e.jsx(S,{children:e.jsxs(Ee,{onClick:()=>v(Pr),children:["Date ",e.jsx($e,{})]})}),e.jsx(S,{children:t?"Unmute":"Mute"}),e.jsx(S,{})]})}),u&&e.jsx("tbody",{children:g==null?void 0:g.map(b=>e.jsx(ms,{onClick:y,onSearch:j,topic:u[b]},b))})]}),i?e.jsxs(ys,{anchorEl:a,anchorOrigin:{vertical:"bottom",horizontal:"right"},id:k,onClose:w,open:T,transformOrigin:{vertical:"top",horizontal:"right"},children:[e.jsx(Pe,{onClick:()=>m("editTopic"),children:"Rename"}),e.jsx(Pe,{onClick:()=>m("mergeTopic"),children:"Merge"}),e.jsx(Pe,{onClick:()=>m("addEdge"),children:"Add edge"})]}):null]}):e.jsxs(p,{children:[e.jsx(_,{children:"There is not any results for selected filters"}),e.jsx(ze,{})]})}):e.jsxs(p,{children:[e.jsx(_,{children:"There is not any results for selected filters"}),e.jsx(ze,{})]})},Ee=f.span`
  cursor: pointer;
  display: flex;
  gap: 4px;
  align-items: center;
`,Pe=f(p).attrs({direction:"row",px:16,py:8})`
  cursor: pointer;
  background: ${c.BUTTON1};
  color: ${c.white};

  &:hover {
    background: ${c.BUTTON1_HOVER};
    color: ${c.GRAY3};
  }

  & + & {
    border-top: 1px solid ${c.black};
  }
`,ys=f(wt)`
  && {
    z-index: 9999;
  }
  .MuiPaper-root {
    min-width: 149px;
    color: ${c.GRAY3};
    box-shadow: 0px 1px 6px 0px rgba(0, 0, 0, 0.2);
    border-radius: 6px;
    z-index: 1;
    font-family: Barlow;
    font-size: 14px;
    font-weight: 500;
  }
`,js=()=>{const[t,r]=x.useState(!1),[n,s,a,l,i,o,d]=N(A=>[A.data,A.ids,A.total,A.setTopics,A.filters,A.setFilters,A.terminate]),{open:h}=M("editTopic"),{open:u}=M("mergeTopic"),{open:g}=M("addEdge"),[y,w]=x.useState(null),j={editTopic:h,mergeTopic:u,addEdge:g},m=x.useRef([]);x.useEffect(()=>{s.length&&(m.current=s)},[s]),x.useEffect(()=>{(async()=>{try{r(!0),await l()}catch{console.error("err")}finally{r(!1)}})()},[l,i]);const v=async()=>{try{r(!0),o({page:i.page+1})}catch(A){console.error("Error loading more data:",A)}finally{r(!1)}};x.useEffect(()=>()=>{d()},[d]);const T=A=>{o({sortBy:A})},k=()=>{w(null)},b=(A,P)=>{n&&(w(n[A]),typeof j[P]=="function"&&j[P]())};return e.jsxs(e.Fragment,{children:[e.jsxs(bs,{direction:"column",justify:"flex-end",children:[e.jsxs(ve,{align:"flex-start",direction:"row",justify:"space-between",children:[e.jsx(_,{className:"title",children:"Topics"}),e.jsxs(L,{disabled:t,onClick:()=>o({muted:!i.muted}),size:"medium",children:[i.muted?"Show Unmuted":"Show Muted",t&&e.jsx($,{color:c.BLUE_PRESS_STATE,size:10})]})]}),e.jsx(vs,{children:e.jsx(hs,{})}),e.jsx(ws,{align:"center",justify:t&&!n?"center":"flex-start",children:t&&!n?e.jsx($,{color:c.white}):e.jsxs(e.Fragment,{children:[e.jsx(gs,{onChangeFilter:T,onTopicEdit:b,showMuted:i.muted}),a>s.length?e.jsxs(L,{className:"load-more",disabled:t,onClick:v,children:["Load more",t&&e.jsx($,{color:c.BLUE_PRESS_STATE,size:10})]}):null]})})]}),y&&e.jsx(us,{onClose:k,topic:y}),y&&e.jsx(ss,{onClose:k,topic:y}),y&&e.jsx(ts,{onClose:k,topic:y})]})},bs=f(p)`
  flex: 1;

  .title {
    font-size: 20px;
    color: ${c.white};
    font-family: Barlow;
    font-size: 22px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  .subtitle {
    color: ${c.GRAY3};
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
`,ws=f(p)`
  min-height: 0;
  overflow: auto;
  flex: 1;
  width: 100%;
`,vs=f(p).attrs({direction:"row",align:"center",justify:"space-between"})`
  padding: 0 36px;
  margin-bottom: 32px;
`,Ss=({node:t})=>{var n,s,a,l,i,o,d;function r(h){const u=new Date(Number(h)*1e3),g=u.getDate(),y=u.getMonth()+1,w=u.getFullYear();return`${g}/${y}/${w}`}return e.jsxs(be,{children:[e.jsx(S,{className:"empty"}),e.jsx(S,{children:(n=t==null?void 0:t.properties)!=null&&n.date_added_to_graph?r((s=t==null?void 0:t.properties)==null?void 0:s.date_added_to_graph):r((a=t==null?void 0:t.properties)==null?void 0:a.date)}),e.jsx(S,{children:t==null?void 0:t.node_type}),e.jsx(S,{children:(t==null?void 0:t.node_type)==="Tweet"?(l=t==null?void 0:t.properties)==null?void 0:l.tweet_id:(i=t==null?void 0:t.properties)==null?void 0:i.source_link}),e.jsx(S,{children:(o=t==null?void 0:t.properties)!=null&&o.status?(d=t==null?void 0:t.properties)==null?void 0:d.status:"processing"})]})},_s=x.memo(Ss),Ts=({nodes:t})=>{const{open:r}=M("addContent"),n=async()=>{r()};return!t||(t==null?void 0:t.length)===0?e.jsx(e.Fragment,{children:e.jsxs(Cs,{children:[e.jsx(As,{align:"center",direction:"row",justify:"space-between",children:e.jsx(_,{className:"subtitle",children:"Contribute to the graph by adding content."})}),e.jsx(p,{children:e.jsx(L,{color:"secondary",onClick:n,size:"medium",startIcon:e.jsx(Mr,{}),type:"submit",variant:"contained",children:"Add Content"})})]})}):e.jsxs(me,{component:"table",children:[e.jsx(we,{children:e.jsxs(le,{component:"tr",children:[e.jsx(S,{className:"empty"}),e.jsx(S,{children:"Date"}),e.jsx(S,{children:"Type"}),e.jsx(S,{children:"Source"}),e.jsx(S,{children:"Status"})]})}),e.jsx("tbody",{children:t==null?void 0:t.map(s=>e.jsx(_s,{node:s},s==null?void 0:s.ref_id))})]})},Cs=ct(p)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 100px auto;
  width: 100%;
`,As=ct(p)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: 30px;

  .subtitle {
    color: ${c.GRAY3};
    font-family: Barlow;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`,ks=()=>{const[t,r]=x.useState(!0),[n,s]=x.useState([]);return x.useEffect(()=>{(async()=>{try{const l=await Qt();s(l.nodes),r(!1)}catch(l){console.error("Error fetching data:",l),r(!1)}})()},[]),e.jsxs($s,{direction:"column",justify:"flex-end",children:[e.jsx(ve,{align:"center",direction:"row",justify:"space-between",children:e.jsx(_,{className:"title",children:"Content I've added to the graph"})}),e.jsx(Es,{align:"center",justify:t?"center":"flex-start",children:t?e.jsx($,{color:c.white}):e.jsx(e.Fragment,{children:e.jsx(Ts,{nodes:n})})})]})},$s=f(p)`
  flex: 1;

  .title {
    font-size: 20px;
    color: ${c.white};
    font-family: Barlow;
    font-size: 22px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  .subtitle {
    color: ${c.GRAY3};
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
`,Es=f(p)`
  min-height: 0;
  overflow: auto;
  flex: 1;
  width: 100%;
`,Ps=[{label:Ir,component:ks},{label:zr,component:Mn},{label:bt,component:kn},{label:jt,component:js}],Is=t=>{const{children:r,value:n,index:s,...a}=t;return n===s?e.jsx(Ls,{"aria-labelledby":`simple-tab-${s}`,hidden:n!==s,id:`simple-tabpanel-${s}`,role:"tabpanel",...a,children:r}):null};function zs(t){return{id:`simple-tab-${t}`,"aria-controls":`simple-tabpanel-${t}`}}const Ns=()=>{const[t,r]=x.useState(0),[n]=oe(i=>[i.isAdmin]),[s]=It(i=>[i.queuedSourcesFlag]),a=(i,o)=>{r(o)},l=Ps.filter(({label:i})=>i===jt?n:i===bt?n&&s:!0);return e.jsxs(Bs,{direction:"column",children:[e.jsx(Ds,{"aria-label":"sources tabs",onChange:a,value:t,children:l.map((i,o)=>e.jsx(Os,{color:c.white,disableRipple:!0,label:i.label,...zs(o)},i.label))}),l.map((i,o)=>e.jsx(Is,{index:o,value:t,children:e.jsx(i.component,{})},i.label))]})},Ds=f(Fr)`
  && {
    background: rgba(0, 0, 0, 0.2);

    .MuiTabs-indicator {
      background: ${c.primaryBlue};
    }
  }
`,Os=f(Wr)`
  && {
    padding: 30px 0 24px;
    color: ${c.GRAY6};
    margin-left: 34px;
    font-family: Barlow;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;

    &.Mui-selected {
      color: ${c.white};
    }
  }
`,Ls=f(p)`
  display: flex;
  flex: 1;
  min-height: 572px;
  padding: 20px 0;
  max-height: 572px;
`,Bs=f(p)`
  min-height: 0;
  flex: 1;
`,he={required:{message:"The field is required",value:!0}},Rs=({initialValues:t})=>{const r=ie({defaultValues:t,mode:"onSubmit"}),{isSubmitting:n}=r.formState,s=r.handleSubmit(async a=>{try{await Xt(a)}catch(l){console.warn(l)}});return e.jsx(ae,{...r,children:e.jsx("form",{id:"add-node-form",onSubmit:s,children:e.jsxs(e.Fragment,{children:[e.jsxs(p,{children:[e.jsx(p,{pt:12,children:e.jsx(ne,{id:"cy-about-title-id",label:"Graph Title",maxLength:50,name:"title",placeholder:"Type graph title here...",rules:{...he}})}),e.jsx(p,{pt:12,children:e.jsx(ne,{id:"cy-about-id",label:"Graph Description",maxLength:50,name:"description",placeholder:"Type graph description here...",rules:{...he}})}),e.jsx(p,{pt:12,children:e.jsx(ne,{id:"cy-about-mission_statement-id",label:"Mission Statement",maxLength:50,name:"mission_statement",placeholder:"Type mission statement here...",rules:{...he}})}),e.jsx(p,{pt:12,children:e.jsx(ne,{id:"cy-about-search_term-id",label:"Search Term",maxLength:50,name:"search_term",placeholder:"Type search term here...",rules:{...he}})})]}),e.jsx(p,{pt:8,children:n?e.jsx(Ms,{children:e.jsx($,{color:c.white,size:20})}):e.jsx(St,{disabled:n,id:"add-node-submit-cta",kind:"big",type:"submit",children:"Save changes"})})]})})})},Ms=f(p).attrs({align:"center",background:"primaryButton",borderRadius:8,justify:"center"})`
  padding: 16px 24px;
  opacity: 0.5;
`,Fs=({initialValues:t})=>e.jsxs(e.Fragment,{children:[t.title&&e.jsxs(p,{pt:12,children:[e.jsx(_,{kind:"regular",children:"Graph Title"}),e.jsx(p,{pt:12,children:e.jsx(_,{className:"value",kind:"medium",children:t.title})})]}),t.description&&e.jsxs(p,{pt:12,children:[e.jsx(_,{kind:"regular",children:"Graph Description"}),e.jsx(p,{pt:12,children:e.jsx(_,{className:"value",kind:"medium",children:t.description})})]}),t.mission_statement&&e.jsxs(p,{pt:12,children:[e.jsx(_,{kind:"regular",children:"Mission Statement"}),e.jsx(p,{pt:12,children:e.jsx(_,{className:"value",kind:"medium",children:t.mission_statement})})]})]}),Ws=()=>{const[t]=oe(n=>[n.isAdmin]),r=U(n=>n.appMetaData);return e.jsxs(Vs,{align:"stretch",direction:"column",justify:"flex-end",children:[e.jsx(Us,{align:"center",direction:"row",justify:"space-between",children:e.jsx(_,{className:"title",children:"About"})}),e.jsx(Gs,{align:"stretch",justify:"flex-start",children:t?e.jsx(Rs,{initialValues:r}):e.jsx(Fs,{initialValues:r})})]})},Vs=f(p)`
  border-radius: 8px;
  box-shadow: 0px 5px 6px rgb(0 0 0 / 50%);
  padding: 16px;
  flex: 1;

  .title {
    margin-bottom: 16px;
    font-size: 20px;
  }

  .value {
    color: ${c.lightBlue400};
  }
`,Gs=f(p)`
  min-height: 0;
  overflow: auto;
  flex: 1;
  width: 100%;
`,Us=f(p)`
  margin-bottom: 16px;
  ${_} {
    margin-bottom: 0;
  }
`;var Ys=["type","layout","connectNulls","ref"];function Q(t){"@babel/helpers - typeof";return Q=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},Q(t)}function Hs(t,r){if(t==null)return{};var n=Ks(t,r),s,a;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)s=l[a],!(r.indexOf(s)>=0)&&Object.prototype.propertyIsEnumerable.call(t,s)&&(n[s]=t[s])}return n}function Ks(t,r){if(t==null)return{};var n={},s=Object.keys(t),a,l;for(l=0;l<s.length;l++)a=s[l],!(r.indexOf(a)>=0)&&(n[a]=t[a]);return n}function se(){return se=Object.assign?Object.assign.bind():function(t){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(t[s]=n[s])}return t},se.apply(this,arguments)}function Je(t,r){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);r&&(s=s.filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable})),n.push.apply(n,s)}return n}function z(t){for(var r=1;r<arguments.length;r++){var n=arguments[r]!=null?arguments[r]:{};r%2?Je(Object(n),!0).forEach(function(s){D(t,s,n[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Je(Object(n)).forEach(function(s){Object.defineProperty(t,s,Object.getOwnPropertyDescriptor(n,s))})}return t}function H(t){return Zs(t)||Xs(t)||Qs(t)||qs()}function qs(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Qs(t,r){if(t){if(typeof t=="string")return Ne(t,r);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Ne(t,r)}}function Xs(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Zs(t){if(Array.isArray(t))return Ne(t)}function Ne(t,r){(r==null||r>t.length)&&(r=t.length);for(var n=0,s=new Array(r);n<r;n++)s[n]=t[n];return s}function Js(t,r){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")}function et(t,r){for(var n=0;n<r.length;n++){var s=r[n];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,Tt(s.key),s)}}function eo(t,r,n){return r&&et(t.prototype,r),n&&et(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function to(t,r){if(typeof r!="function"&&r!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(r&&r.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),r&&De(t,r)}function De(t,r){return De=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(s,a){return s.__proto__=a,s},De(t,r)}function ro(t){var r=so();return function(){var s=fe(t),a;if(r){var l=fe(this).constructor;a=Reflect.construct(s,arguments,l)}else a=s.apply(this,arguments);return no(this,a)}}function no(t,r){if(r&&(Q(r)==="object"||typeof r=="function"))return r;if(r!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return R(t)}function R(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function so(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function fe(t){return fe=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},fe(t)}function D(t,r,n){return r=Tt(r),r in t?Object.defineProperty(t,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[r]=n,t}function Tt(t){var r=oo(t,"string");return Q(r)==="symbol"?r:String(r)}function oo(t,r){if(Q(t)!=="object"||t===null)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var s=n.call(t,r||"default");if(Q(s)!=="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(t)}var ce=function(t){to(n,t);var r=ro(n);function n(){var s;Js(this,n);for(var a=arguments.length,l=new Array(a),i=0;i<a;i++)l[i]=arguments[i];return s=r.call.apply(r,[this].concat(l)),D(R(s),"state",{isAnimationFinished:!0,totalLength:0}),D(R(s),"generateSimpleStrokeDasharray",function(o,d){return"".concat(d,"px ").concat(o-d,"px")}),D(R(s),"getStrokeDasharray",function(o,d,h){var u=h.reduce(function(k,b){return k+b});if(!u)return s.generateSimpleStrokeDasharray(d,o);for(var g=Math.floor(o/u),y=o%u,w=d-o,j=[],m=0,v=0;m<h.length;v+=h[m],++m)if(v+h[m]>y){j=[].concat(H(h.slice(0,m)),[y-v]);break}var T=j.length%2===0?[0,w]:[w];return[].concat(H(n.repeat(h,g)),H(j),T).map(function(k){return"".concat(k,"px")}).join(", ")}),D(R(s),"id",ar("recharts-line-")),D(R(s),"pathRef",function(o){s.mainCurve=o}),D(R(s),"handleAnimationEnd",function(){s.setState({isAnimationFinished:!0}),s.props.onAnimationEnd&&s.props.onAnimationEnd()}),D(R(s),"handleAnimationStart",function(){s.setState({isAnimationFinished:!1}),s.props.onAnimationStart&&s.props.onAnimationStart()}),s}return eo(n,[{key:"componentDidMount",value:function(){if(this.props.isAnimationActive){var a=this.getTotalLength();this.setState({totalLength:a})}}},{key:"componentDidUpdate",value:function(){if(this.props.isAnimationActive){var a=this.getTotalLength();a!==this.state.totalLength&&this.setState({totalLength:a})}}},{key:"getTotalLength",value:function(){var a=this.mainCurve;try{return a&&a.getTotalLength&&a.getTotalLength()||0}catch{return 0}}},{key:"renderErrorBar",value:function(a,l){if(this.props.isAnimationActive&&!this.state.isAnimationFinished)return null;var i=this.props,o=i.points,d=i.xAxis,h=i.yAxis,u=i.layout,g=i.children,y=lr(g,cr);if(!y)return null;var w=function(v,T){return{x:v.x,y:v.y,value:v.value,errorVal:pt(v.payload,T)}},j={clipPath:a?"url(#clipPath-".concat(l,")"):null};return E.createElement(_e,j,y.map(function(m){return E.cloneElement(m,{key:"bar-".concat(m.props.dataKey),data:o,xAxis:d,yAxis:h,layout:u,dataPointFormatter:w})}))}},{key:"renderDots",value:function(a,l,i){var o=this.props.isAnimationActive;if(o&&!this.state.isAnimationFinished)return null;var d=this.props,h=d.dot,u=d.points,g=d.dataKey,y=ue(this.props),w=ue(h,!0),j=u.map(function(v,T){var k=z(z(z({key:"dot-".concat(T),r:3},y),w),{},{value:v.value,dataKey:g,cx:v.x,cy:v.y,index:T,payload:v.payload});return n.renderDotItem(h,k)}),m={clipPath:a?"url(#clipPath-".concat(l?"":"dots-").concat(i,")"):null};return E.createElement(_e,se({className:"recharts-line-dots",key:"dots"},m),j)}},{key:"renderCurveStatically",value:function(a,l,i,o){var d=this.props,h=d.type,u=d.layout,g=d.connectNulls;d.ref;var y=Hs(d,Ys),w=z(z(z({},ue(y,!0)),{},{fill:"none",className:"recharts-line-curve",clipPath:l?"url(#clipPath-".concat(i,")"):null,points:a},o),{},{type:h,layout:u,connectNulls:g});return E.createElement(dr,se({},w,{pathRef:this.pathRef}))}},{key:"renderCurveWithAnimation",value:function(a,l){var i=this,o=this.props,d=o.points,h=o.strokeDasharray,u=o.isAnimationActive,g=o.animationBegin,y=o.animationDuration,w=o.animationEasing,j=o.animationId,m=o.animateNewValues,v=o.width,T=o.height,k=this.state,b=k.prevPoints,A=k.totalLength;return E.createElement(pr,{begin:g,duration:y,isActive:u,easing:w,from:{t:0},to:{t:1},key:"line-".concat(j),onAnimationEnd:this.handleAnimationEnd,onAnimationStart:this.handleAnimationStart},function(P){var C=P.t;if(b){var X=b.length/d.length,W=d.map(function(I,Se){var ee=Math.floor(Se*X);if(b[ee]){var te=b[ee],Y=re(te.x,I.x),Ct=re(te.y,I.y);return z(z({},I),{},{x:Y(C),y:Ct(C)})}if(m){var At=re(v*2,I.x),kt=re(T/2,I.y);return z(z({},I),{},{x:At(C),y:kt(C)})}return z(z({},I),{},{x:I.x,y:I.y})});return i.renderCurveStatically(W,a,l)}var de=re(0,A),Z=de(C),J;if(h){var pe="".concat(h).split(/[,\s]+/gim).map(function(I){return parseFloat(I)});J=i.getStrokeDasharray(Z,A,pe)}else J=i.generateSimpleStrokeDasharray(A,Z);return i.renderCurveStatically(d,a,l,{strokeDasharray:J})})}},{key:"renderCurve",value:function(a,l){var i=this.props,o=i.points,d=i.isAnimationActive,h=this.state,u=h.prevPoints,g=h.totalLength;return d&&o&&o.length&&(!u&&g>0||!ur(u,o))?this.renderCurveWithAnimation(a,l):this.renderCurveStatically(o,a,l)}},{key:"render",value:function(){var a,l=this.props,i=l.hide,o=l.dot,d=l.points,h=l.className,u=l.xAxis,g=l.yAxis,y=l.top,w=l.left,j=l.width,m=l.height,v=l.isAnimationActive,T=l.id;if(i||!d||!d.length)return null;var k=this.state.isAnimationFinished,b=d.length===1,A=Ve("recharts-line",h),P=u&&u.allowDataOverflow,C=g&&g.allowDataOverflow,X=P||C,W=Ie(T)?this.id:T,de=(a=ue(o))!==null&&a!==void 0?a:{r:3,strokeWidth:2},Z=de.r,J=Z===void 0?3:Z,pe=de.strokeWidth,I=pe===void 0?2:pe,Se=hr(o)?o:{},ee=Se.clipDot,te=ee===void 0?!0:ee,Y=J*2+I;return E.createElement(_e,{className:A},P||C?E.createElement("defs",null,E.createElement("clipPath",{id:"clipPath-".concat(W)},E.createElement("rect",{x:P?w:w-j/2,y:C?y:y-m/2,width:P?j:j*2,height:C?m:m*2})),!te&&E.createElement("clipPath",{id:"clipPath-dots-".concat(W)},E.createElement("rect",{x:w-Y/2,y:y-Y/2,width:j+Y,height:m+Y}))):null,!b&&this.renderCurve(X,W),this.renderErrorBar(X,W),(b||o)&&this.renderDots(X,te,W),(!v||k)&&xr.renderCallByParent(this.props,d))}}],[{key:"getDerivedStateFromProps",value:function(a,l){return a.animationId!==l.prevAnimationId?{prevAnimationId:a.animationId,curPoints:a.points,prevPoints:l.curPoints}:a.points!==l.curPoints?{curPoints:a.points}:null}},{key:"repeat",value:function(a,l){for(var i=a.length%2!==0?[].concat(H(a),[0]):a,o=[],d=0;d<l;++d)o=[].concat(H(o),H(i));return o}},{key:"renderDotItem",value:function(a,l){var i;if(E.isValidElement(a))i=E.cloneElement(a,l);else if(zt(a))i=a(l);else{var o=Ve("recharts-line-dot",a?a.className:"");i=E.createElement(dt,se({},l,{className:o}))}return i}}]),n}(x.PureComponent);D(ce,"displayName","Line");D(ce,"defaultProps",{xAxisId:0,yAxisId:0,connectNulls:!1,activeDot:!0,dot:!0,legendType:"line",stroke:"#3182bd",strokeWidth:1,fill:"#fff",points:[],isAnimationActive:!ir.isSsr,animateNewValues:!0,animationBegin:0,animationDuration:1500,animationEasing:"ease",hide:!1,label:!1});D(ce,"getComposedData",function(t){var r=t.props,n=t.xAxis,s=t.yAxis,a=t.xAxisTicks,l=t.yAxisTicks,i=t.dataKey,o=t.bandSize,d=t.displayedData,h=t.offset,u=r.layout,g=d.map(function(y,w){var j=pt(y,i);return u==="horizontal"?{x:Ge({axis:n,ticks:a,bandSize:o,entry:y,index:w}),y:Ie(j)?null:s.scale(j),value:j,payload:y}:{x:Ie(j)?null:n.scale(j),y:Ge({axis:s,ticks:l,bandSize:o,entry:y,index:w}),value:j,payload:y}});return z({points:g,layout:u},h)});var io=fr({chartName:"LineChart",GraphicalChild:ce,axisComponents:[{axisType:"xAxis",AxisComp:ut},{axisType:"yAxis",AxisComp:ht}],formatAxisMap:mr});const ao=({cx:t,cy:r})=>e.jsx(dt,{cx:t,cy:r,fill:c.blueTextAccent,r:2}),lo=({data:t,width:r=500,height:n=300})=>e.jsx(e.Fragment,{children:(t==null?void 0:t.length)&&e.jsxs(io,{data:t,height:n,id:"cy-sentiment-chart",margin:{bottom:5,left:-20,right:30,top:5},width:r,children:[e.jsx(gr,{stroke:c.lightBlue300,strokeDasharray:"5 5"}),e.jsx(ut,{dataKey:"date",interval:Math.floor(t.length/3),stroke:c.blueTextAccent}),e.jsx(ht,{domain:[0,10],stroke:c.blueTextAccent}),e.jsx(yr,{}),e.jsx(ce,{dataKey:"score",dot:e.jsx(ao,{}),stroke:"#8884d8",type:"monotone"})]})}),co=()=>{const[t,r]=x.useState(void 0),[n]=oe(i=>[i.setBudget]),[s,a]=x.useState(!1),l=async()=>{a(!0),Zt(n).then(async i=>{r(i==null?void 0:i.data.filter(o=>o.date).map(o=>({date:Dt.unix(Number(String(o.date).split(".")[0])).format("MM/DD/YY"),score:o.sentiment_score}))),await rt(n)}).catch().finally(()=>{a(!1)})};return e.jsxs(po,{align:"flex-start",direction:"column",id:"cy-sentiment-chart-wrapper",justify:"flex-end",children:[e.jsx(_,{className:"title",children:"Sentiment chart"}),s&&e.jsx(Vr,{alignItems:"center",component:"div",flexGrow:1,p:4,spacing:2,width:"100%",children:e.jsx(Nt,{color:c.white})}),!(t!=null&&t.length)&&e.jsx(uo,{className:"button",id:"cy-get-sentiments-btn",onClick:l,children:"Get top 100 sentiments"}),e.jsx(lo,{data:t})]})},po=f(p)`
  border-radius: 8px;
  box-shadow: 0px 5px 6px rgb(0 0 0 / 50%);
  padding: 16px;

  .title {
    margin-bottom: 16px;
    font-size: 20px;
  }
`,uo=f(St)`
  height: 48px;
`,ho=600,xo={about:e.jsx(Ws,{}),sentiment:e.jsx(co,{}),sources:e.jsx(Ns,{}),"":null},fo=()=>{const[t,r]=U(n=>[n.secondarySidebarActiveTab,n.setSecondarySidebarActiveTab]);return e.jsx(jr,{direction:"left",in:!!t,mountOnEnter:!0,unmountOnExit:!0,children:e.jsxs(mo,{id:"secondary-sidebar-wrapper",children:[e.jsx(go,{id:"cy-close-secondary-sidebar",onClick:()=>r(""),children:e.jsx(mt,{})}),xo[t]]})})},mo=f(p)(({theme:t})=>({background:c.BG1,height:"100vh",padding:"16px 20px",width:"100%",zIndex:30,display:"flex",[t.breakpoints.up("sm")]:{width:ho}})),go=f(p).attrs({align:"center",justify:"center",p:5})`
  background-color: ${c.inputBg1};
  border-radius: 50%;
  color: ${c.mainBottomIcons};
  cursor: pointer;
  transition-duration: 0.2s;
  align-self: flex-end;
  margin-bottom: 16px;

  &:hover {
    background-color: ${c.gray200};
  }
`,yo=f(Jt)`
  .Toastify__toast {
    background-color: ${c.body};
  }
  .Toastify__toast-body {
    background-color: ${c.body};
    color: ${c.white};
  }
  .Toastify__close-button {
    color: ${c.white};
  }
  .Toastify__progress-bar--error {
    background-color: ${c.primaryRed};
  }
  .Toastify__progress-bar--success {
    background-color: ${c.primaryGreen};
  }
`,jo=f(p)`
  height: 100%;
  width: 100%;
  background-color: ${c.black};
`,bo=f(p)`
  position: absolute;
  bottom: 8px;
  left: 8px;
  color: ${c.white};
  font-size: 12px;
  opacity: 0.5;
`,wo=x.lazy(()=>O(()=>import("./index-a54e66f4.js"),["assets/index-a54e66f4.js","assets/index-725cd71c.js","assets/index-3f17fe3b.css","assets/SourcesTableIcon-ef2bcbb3.js","assets/SettingsIcon-d5e77c98.js","assets/index-c3e60fc6.js"]).then(({MainToolbar:t})=>({default:t}))),vo=x.lazy(()=>O(()=>import("./index-67deeaa5.js"),["assets/index-67deeaa5.js","assets/index-725cd71c.js","assets/index-3f17fe3b.css","assets/EditIcon-09992d3e.js","assets/react-toastify.esm-2b45af49.js","assets/react-toastify-b67b3d0b.css","assets/generateCategoricalChart-756a6d80.js","assets/Popover-653b2d14.js","assets/useSlotProps-cf3ec1f9.js","assets/InfoIcon-2b7bba01.js","assets/index-48369ed0.js","assets/index.esm-665ada5a.js","assets/PlusIcon-1cd6bc68.js","assets/index-c3e60fc6.js","assets/ClipLoader-0a48de47.js","assets/NoFilterResultIcon-afdb4a18.js","assets/ChevronUpIcon-179dbe87.js","assets/index-88bd09b5.js","assets/index-ab8c65ad.js","assets/index-858be4ee.js","assets/index-c7317d75.js","assets/Popper-65bf3f6a.js","assets/CheckIcon-c6ceecd9.js","assets/SettingsIcon-d5e77c98.js","assets/Stack-a82f7004.js"]).then(({Universe:t})=>({default:t}))),So=x.lazy(()=>O(()=>import("./index-d3129fe1.js"),["assets/index-d3129fe1.js","assets/index-725cd71c.js","assets/index-3f17fe3b.css","assets/react-toastify.esm-2b45af49.js","assets/react-toastify-b67b3d0b.css","assets/SoundIcon-1e17bccb.js","assets/Select-e2ea12e5.js","assets/Popover-653b2d14.js","assets/useSlotProps-cf3ec1f9.js","assets/ChevronUpIcon-179dbe87.js","assets/generateCategoricalChart-756a6d80.js","assets/InfoIcon-2b7bba01.js","assets/CheckIcon-c6ceecd9.js","assets/index.esm-665ada5a.js","assets/toastMessage-e30a9a05.js","assets/SoundIcon-6125620a.css","assets/index-48369ed0.js","assets/Skeleton-5cdaafa2.js","assets/ClipLoader-0a48de47.js","assets/PlusIcon-1cd6bc68.js","assets/index-c3e60fc6.js","assets/index-c7317d75.js"]).then(({SideBar:t})=>({default:t}))),_o=()=>{const[t,r]=oe(C=>[C.setBudget,C.setNodeCount]),[n,s]=x.useState(!1),{setSidebarOpen:a,currentSearch:l,setCurrentSearch:i,setRelevanceSelected:o,setTranscriptOpen:d}=U(C=>C),h=br(C=>C.setTeachMeAnswer),{data:u,setData:g,fetchData:y,graphStyle:w,setSelectedNode:j,setCategoryFilter:m}=B(C=>C),v=er(),T=ie({mode:"onChange"}),k=T.handleSubmit(({search:C})=>{d(!1),j(null),o(!1),i(C),h(""),m(null)}),b=x.useCallback(async()=>{await y(t,{...l?{word:l}:{}}),a(!0),l?await rt(t):j(null)},[y,t,l,a,j]);x.useEffect(()=>{b()},[l,b]);const A=()=>{if(u){s(!0);const C=sr(w,u.nodes);setTimeout(()=>{g(C),s(!1)},1e3)}};x.useEffect(()=>{A()},[w]);const P=x.useCallback(()=>{r("INCREMENT")},[r]);return x.useEffect(()=>{v&&(v.on("connect_error",C=>{console.error("Socket connection error:",C)}),v.on("newnode",P))},[v,P]),x.useEffect(()=>()=>{v&&v.disconnect()},[v]),e.jsxs(e.Fragment,{children:[e.jsx(tr,{}),e.jsx(vn,{}),e.jsx(rr,{hidden:!Ot}),e.jsx(x.Suspense,{fallback:e.jsx("div",{children:"Loading..."}),children:e.jsxs(jo,{direction:"row",children:[e.jsx(wr,{children:e.jsxs(ae,{...T,children:[e.jsx(wo,{}),e.jsx(So,{onSubmit:k}),e.jsx(vo,{}),n&&e.jsx(cn,{fullSize:!1}),e.jsx(an,{}),e.jsx(fo,{}),e.jsx(jn,{}),e.jsxs(bo,{children:["v",nr]}),e.jsx(_t,{})]})}),e.jsx(yn,{}),e.jsx(yo,{}),e.jsx(Cn,{})]})})]})},Vo=Object.freeze(Object.defineProperty({__proto__:null,App:_o},Symbol.toStringTag,{value:"Module"}));export{an as O,cn as P,Ns as S,Vo as i};
