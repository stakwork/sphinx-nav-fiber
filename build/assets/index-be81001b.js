import{s as x,j as e,c as l,F as u,r as f,T as _,_ as B,m as Pt,d as zt,a as Be,Y as Re,R as Me,u as se,l as et,b as It,e as E,f as Nt,i as Ot,P as Lt,h as Dt,g as tt,k as Bt}from"./index-f76464f2.js";import{B as F,u as z,C as Rt,I as U,L as Mt,a as rt,b as D,c as Ft,v as Wt,A as nt,P as Gt,d as V,G as Vt,e as R,S as Ut,f as Yt,g as Ht,h as ot,i as st,p as Kt,j as it,k as qt,l as ie,F as ae,m as Qt,n as at,o as Xt,q as Jt,r as Zt,T as er,s as tr,t as rr,w as nr,x as or,y as sr}from"./react-toastify.esm-bb128754.js";import{P as ir,f as Fe,G as ar,u as lr,c as We,D as lt,a as cr,E as dr,L as be,b as pe,C as pr,A as ur,i as re,d as hr,e as Ae,g as xr,h as fr,j as ct,k as Ge,l as mr,X as dt,Y as pt,m as gr,n as yr,T as jr,S as br,o as vr,p as wr}from"./generateCategoricalChart-ab3197d5.js";import{C as $}from"./ClipLoader-634bea35.js";import{M as ut,a as ht,b as Sr,c as Tr,d as xt,e as _r}from"./index.esm-a945e31d.js";import{T as Cr,a as fe,b as Ar,F as ke,M as Pe,C as ft,N as kr,c as $r,D as ze}from"./NoFilterResultIcon-c293cc6b.js";import{s as q,T as mt,A as gt,u as O,I as Er,S as ve,a as yt,Q as jt,b as Pr}from"./index-eafda19d.js";import{S as me,C as bt,a as vt}from"./ChevronUpIcon-bb75ff24.js";import{P as ge,I as ye,a as Ie,F as wt}from"./Popover-e081ddff.js";import{B as zr,T as ne}from"./index-2c3c416b.js";import{u as G}from"./index-9c3b490f.js";import{B as Ne}from"./index-47dde8aa.js";import{P as St}from"./Popper-0477edac.js";import{C as Tt}from"./CheckIcon-455b6076.js";import{S as Ir}from"./SettingsIcon-6132df87.js";import{T as Nr,a as Or,B as _t}from"./index-683f9056.js";import{S as Lr}from"./Stack-9daff4b0.js";const Dr=()=>{const[t,r]=z(o=>[o.cameraFocusTrigger,o.setCameraFocusTrigger]);return e.jsx(Br,{href:"",onClick:()=>r(!t),size:"medium",startIcon:e.jsx(Rt,{})})},Br=x(F)`
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
`,Rr=()=>{const t=f.useRef(null),[r,o]=f.useState(0),s=rt(),a=z(T=>T.setSelectedNode),[c,i]=D(T=>[T.sidebarIsOpen,T.setSidebarOpen]),[n,p,d,h,g,y]=Ft(T=>[T.isPlaying,T.setIsPlaying,T.playingTime,T.playingNode,T.miniPlayerIsVisible,T.setMiniPlayerIsVisible]),[v,j]=h!=null&&h.timestamp?h.timestamp.split("-").map(T=>Wt(T)):[0,0],m=(d-v)/(j-v)*100;f.useEffect(()=>{var P,S;const T=((P=t.current)==null?void 0:P.offsetWidth)||0,k=((S=t.current)==null?void 0:S.scrollWidth)||0;o(k-T)},[]);const w=T=>{y(!1),T.stopPropagation()},b=()=>{a(h),i(!0)},A=c&&(s==null?void 0:s.ref_id)!==(h==null?void 0:h.ref_id)||h&&!c;return g&&h&&A?e.jsxs(Mr,{onClick:b,children:[e.jsxs(Fr,{children:[e.jsx(nt,{src:h.image_url||"",type:h.node_type}),e.jsxs(Wr,{children:[e.jsxs(Hr,{ref:t,children:[e.jsx(Yr,{className:"title",scrollValue:r,children:h.episode_title}),e.jsx("div",{className:"subtitle",children:h.show_title})]}),e.jsx(Vr,{"data-testid":"play-pause-button",onClick:T=>{p(!n),T.stopPropagation()},size:"small",children:n?e.jsx(ir,{"data-testid":"pause-icon"}):e.jsx(Gt,{"data-testid":"play-icon"})})]}),e.jsx(Gr,{onClick:T=>w(T),children:e.jsx(V,{})})]}),e.jsx(Ur,{value:m,variant:"determinate"})]}):null},Mr=x(u).attrs({direction:"column",align:"stretch",justify:"space-between"})`
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
`,Gr=x(U)`
  padding: 8px;
  color: ${l.GRAY6};
  z-index: 100000;
`,Vr=x(U)`
  && {
    font-size: 36px;
    padding: 2px;
    margin-left: 8px;
    overflow: hidden;
    z-index: 100000;
  }
`,Ur=x(Mt)`
  && {
    flex-shrink: 0;
    height: 2px;
    background-color: ${l.white};
    color: blue;

    .MuiLinearProgress-bar {
      background: rgb(65, 90, 127);
    }
  }
`,Yr=x.div`
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
`,Ct=()=>{const t=rt(),r=z(o=>o.isFetching);return e.jsxs(Kr,{align:"flex-end",id:"actions-toolbar",children:[!r&&e.jsx(Dr,{}),!r&&e.jsx(Vt,{}),e.jsx(Rr,{},t==null?void 0:t.ref_id)]})},Kr=x(u)`
  position: absolute;
  right: 20px;
  bottom: 20px;
  pointer-events: all;
`,qr=({twitterHandle:t})=>e.jsx(e.Fragment,{children:e.jsx(u,{direction:"row",children:e.jsx(u,{align:"flex-start",pb:12,children:e.jsxs(_,{children:["Tweet by @",t]})})})}),Qr=x(u)(({theme:t})=>({position:"absolute",top:"65px",right:"55px",width:"300px",pointerEvents:"none",background:l.dashboardHeader,boxShadow:"0px 1px 6px rgba(0, 0, 0, 0.1)",color:l.primaryText1,zIndex:100,transition:"opacity 0.6s",padding:t.spacing(2,3),[t.breakpoints.down("sm")]:{padding:t.spacing(1,1.5)}})),Xr=x(u)`
  width: 22.5%;
`,Jr=({node:t})=>{if(!t)return null;const{node_type:r,show_title:o,episode_title:s,description:a,label:c,text:i,type:n,twitter_handle:p}=t,d=t.guests;let h=!1,g=!1;d&&(d.length&&d[0]!==null&&(h=!0),typeof d[0]=="object"&&(g=!0));let y=t.image_url;if(n==="twitter_space"&&(y="twitter_placeholder.png"),y==null)switch(r){case"guest":y="person_placeholder2.png";break;default:y="noimage.jpeg"}return r==="topic"?null:e.jsx(Qr,{borderRadius:8,px:24,py:16,children:r==="tweet"?e.jsx(qr,{twitterHandle:p}):e.jsxs(e.Fragment,{children:[e.jsxs(u,{direction:"row",children:[e.jsx(Xr,{}),e.jsx(u,{align:"flex-start",pb:12,children:e.jsx(_,{children:r==null?void 0:r.toUpperCase()})})]}),e.jsxs(u,{direction:"row",children:[e.jsx(u,{pr:12,children:e.jsx(nt,{src:y,type:"person"})}),e.jsxs("div",{children:[n==="guest"?e.jsxs(u,{direction:"column",children:[e.jsx(_,{children:c}),i&&e.jsx(u,{pt:4,children:e.jsxs(_,{color:"primaryText1",kind:"tiny",children:["@",i]})})]}):e.jsx(_,{color:"primaryText1",kind:"tiny",children:o}),e.jsxs(u,{pt:4,children:[r==="clip"||r==="episode"&&e.jsx(_,{color:"primaryText1",children:"Episode"}),r==="clip"?e.jsx(_,{as:"div",kind:"regularBold",children:Fe(a)}):e.jsx(_,{color:"primaryText1",kind:"tiny",children:s})]}),e.jsxs(u,{pt:12,children:[r==="clip"&&e.jsx(_,{color:"primaryText1",children:"Episode"}),e.jsx(_,{color:"primaryText1",kind:"tiny",children:r==="clip"?s:Fe(a)})]}),h&&e.jsxs(u,{pt:12,children:[e.jsx(_,{color:"primaryText1",children:"People"}),e.jsx(u,{pt:4,children:e.jsx(_,{color:"primaryText1",kind:"tiny",children:g?d.map(v=>v.name?v.name:`@${v.twitter_handle}`).join(", "):d==null?void 0:d.join(", ")})})]})]})]})]})})},Zr=()=>{const[t]=z(r=>[r.hoveredNode]);return e.jsxs(en,{children:[t&&e.jsx("div",{id:"tooltip-portal",children:e.jsx(Jr,{node:t})}),e.jsx(Ct,{})]})},en=x("div")(({theme:t})=>({position:"absolute",zIndex:1,top:0,left:0,userSelect:"none",pointerEvents:"none",display:"flex",justifyContent:"flex-end",alignItems:"flex-start",height:"100%",width:"100%",padding:"16px",[t.breakpoints.down("sm")]:{top:50}})),tn=({fullSize:t=!0})=>{const r=D(o=>o.sidebarIsOpen);return e.jsx(rn,{align:"center",className:R({"sidebar-is-open":r&&!t}),justify:"center",children:e.jsx($,{color:l.SECONDARY_BLUE,size:64})})},rn=x(u)`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  background-color: ${l.black};
  z-index: 1;
`,nn=f.lazy(()=>B(()=>import("./index-3c5c6164.js"),["assets/index-3c5c6164.js","assets/index-f76464f2.js","assets/index-3f17fe3b.css","assets/index-47dde8aa.js","assets/index-9c3b490f.js","assets/react-toastify.esm-bb128754.js","assets/react-toastify-b67b3d0b.css","assets/index-683f9056.js","assets/useSlotProps-2c3c97df.js","assets/index-2c3c416b.js","assets/index.esm-a945e31d.js","assets/InfoIcon-d72751f5.js","assets/ClipLoader-634bea35.js"]).then(({SettingsModal:t})=>({default:t}))),on=f.lazy(()=>B(()=>import("./index-b391e889.js"),["assets/index-b391e889.js","assets/index-f76464f2.js","assets/index-3f17fe3b.css","assets/react-toastify.esm-bb128754.js","assets/react-toastify-b67b3d0b.css","assets/index-47dde8aa.js","assets/index-9c3b490f.js","assets/toastMessage-3f5b8d92.js","assets/index.esm-a945e31d.js","assets/CheckIcon-455b6076.js","assets/ClipLoader-634bea35.js","assets/index-2c3c416b.js","assets/InfoIcon-d72751f5.js"]).then(({AddContentModal:t})=>({default:t}))),sn=f.lazy(()=>B(()=>import("./index-00dd23fe.js"),["assets/index-00dd23fe.js","assets/index-f76464f2.js","assets/index-3f17fe3b.css","assets/react-toastify.esm-bb128754.js","assets/react-toastify-b67b3d0b.css","assets/index-47dde8aa.js","assets/index-9c3b490f.js","assets/toastMessage-3f5b8d92.js","assets/index.esm-a945e31d.js","assets/CheckIcon-455b6076.js","assets/ClipLoader-634bea35.js","assets/index-2c3c416b.js","assets/InfoIcon-d72751f5.js","assets/index-4c19b844.js","assets/index-c4f67241.js","assets/Popover-e081ddff.js","assets/useSlotProps-2c3c97df.js","assets/Select-f31fbaee.js","assets/Stack-9daff4b0.js","assets/Popper-0477edac.js","assets/constants-84edb5fc.js"]).then(({AddItemModal:t})=>({default:t}))),an=f.lazy(()=>B(()=>import("./index-0252a2f6.js"),["assets/index-0252a2f6.js","assets/index-f76464f2.js","assets/index-3f17fe3b.css","assets/index-47dde8aa.js","assets/index-9c3b490f.js","assets/react-toastify.esm-bb128754.js","assets/react-toastify-b67b3d0b.css","assets/generateCategoricalChart-ab3197d5.js","assets/Popover-e081ddff.js","assets/useSlotProps-2c3c97df.js","assets/InfoIcon-d72751f5.js","assets/ClipLoader-634bea35.js","assets/index.esm-a945e31d.js","assets/NoFilterResultIcon-c293cc6b.js","assets/ChevronUpIcon-bb75ff24.js","assets/index-683f9056.js","assets/index-eafda19d.js","assets/index-2c3c416b.js","assets/Popper-0477edac.js","assets/CheckIcon-455b6076.js","assets/SettingsIcon-6132df87.js","assets/Stack-9daff4b0.js"]).then(({SourcesTableModal:t})=>({default:t}))),ln=f.lazy(()=>B(()=>import("./index-2820ecee.js"),["assets/index-2820ecee.js","assets/index-f76464f2.js","assets/index-3f17fe3b.css","assets/index-47dde8aa.js","assets/index-9c3b490f.js","assets/react-toastify.esm-bb128754.js","assets/react-toastify-b67b3d0b.css","assets/index-eafda19d.js","assets/index-2c3c416b.js","assets/index.esm-a945e31d.js","assets/InfoIcon-d72751f5.js","assets/Skeleton-d45c4af6.js","assets/ClipLoader-634bea35.js"]).then(({EditNodeNameModal:t})=>({default:t}))),cn=f.lazy(()=>B(()=>import("./index-e81b4168.js"),["assets/index-e81b4168.js","assets/index-f76464f2.js","assets/index-3f17fe3b.css","assets/index-47dde8aa.js","assets/index-9c3b490f.js","assets/react-toastify.esm-bb128754.js","assets/react-toastify-b67b3d0b.css","assets/toastMessage-3f5b8d92.js","assets/index.esm-a945e31d.js","assets/Skeleton-d45c4af6.js","assets/ClipLoader-634bea35.js"]).then(({RemoveNodeModal:t})=>({default:t}))),dn=f.lazy(()=>B(()=>import("./index-aa5eca1c.js"),["assets/index-aa5eca1c.js","assets/index-f76464f2.js","assets/index-3f17fe3b.css","assets/index-47dde8aa.js","assets/index-9c3b490f.js","assets/react-toastify.esm-bb128754.js","assets/react-toastify-b67b3d0b.css","assets/toastMessage-3f5b8d92.js","assets/index.esm-a945e31d.js","assets/index-4c19b844.js","assets/index-c4f67241.js","assets/Popover-e081ddff.js","assets/useSlotProps-2c3c97df.js","assets/Select-f31fbaee.js","assets/Stack-9daff4b0.js","assets/Popper-0477edac.js","assets/constants-84edb5fc.js","assets/index-eafda19d.js","assets/ClipLoader-634bea35.js"]).then(({AddNodeEdgeModal:t})=>({default:t}))),pn=()=>e.jsxs(e.Fragment,{children:[e.jsx(sn,{}),e.jsx(on,{}),e.jsx(nn,{}),e.jsx(ln,{}),e.jsx(cn,{}),e.jsx(an,{}),e.jsx(dn,{})]}),un=()=>{const t=D(r=>r.appMetaData);return e.jsxs(hn,{children:[e.jsxs(xn,{children:[e.jsx(e.Fragment,{children:t.title&&e.jsx(_,{className:"title",color:"white",children:t.title})}),e.jsx(_,{className:"subtitle",children:" Second Brain"})]}),e.jsx(Ut,{})]})},hn=x(u).attrs({align:"center",direction:"row",grow:1,justify:"flex-start"})`
  height: 64px;
  position: absolute;
  top: 0px;
  left: 64px;
  right: 32px;
  transition: opacity 1s;
  z-index: 99;
  padding: 20px 23px;
`,xn=x.div`
  ${Pt.smallOnly`
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
`,fn=()=>{const[t,r]=f.useState(!0),o=Yt();f.useEffect(()=>{r(!0)},[o]);const s=()=>{r(!1)};return o&&t?e.jsxs(mn,{align:"center",direction:"column",justify:"center",onClick:s,children:[e.jsx("img",{alt:"screen",src:"jamboard_kiosk.png"}),e.jsxs(u,{align:"center",direction:"column",justify:"center",children:[e.jsx(we,{children:"Second Brain is currently"}),e.jsx(we,{style:{fontWeight:600},children:"optimized for Desktop."}),e.jsx(we,{children:"Mobile support coming soon."})]}),e.jsx(F,{color:"secondary",onClick:s,variant:"contained",children:"Got It"})]}):null},mn=x(u)`
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
`,gn={},yn=f.createContext(gn),jn=()=>{const[t,r]=f.useState(!1),o=f.useMemo(()=>({isShow:t,setIsShow:r}),[t]);return e.jsx(yn.Provider,{value:o})},C=x(Cr)`
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
`,Oe=x(fe)`
  && {
    height: 48px;
    padding: 0 36px;
  }
  &:nth-child(odd) {
    background-color: ${l.BG3};
  }
`,Le=x(Ar)`
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
`,De=x(u)`
  margin-bottom: 16px;
  padding: 0 36px;
  ${_} {
    margin-bottom: 0;
  }
`,bn=({data:t})=>{const r=z(i=>i.setQueuedSources),[o,s]=f.useState(""),a=async i=>{if(t!=null&&t.length)try{const n=await zt.enable();await Ht(i,n.pubkey),r(t.filter(p=>p.ref_id!==i))}catch(n){console.warn(n)}},c=async i=>{if(!(!i||!(t!=null&&t.length))){s(i);try{await ot(i),r(t==null?void 0:t.filter(n=>n.ref_id!==i))}catch(n){console.warn(n)}finally{s("")}}};return t!=null&&t.length?e.jsxs(Pe,{component:"table",children:[e.jsx(Le,{children:e.jsxs(fe,{component:"tr",children:[e.jsx(C,{className:"empty"}),e.jsx(C,{children:"Type"}),e.jsx(C,{children:"Source"}),e.jsx(C,{}),e.jsx(C,{className:"empty"})]})}),(t==null?void 0:t.length)&&e.jsx("tbody",{children:t==null?void 0:t.map(i=>e.jsxs(Oe,{children:[e.jsx(C,{className:"empty"}),e.jsx(C,{children:q[i.source_type]}),e.jsx(C,{width:"268px",children:i.source_type==="twitter_handle"?e.jsxs(Ue,{href:`${mt}/${i.source}?open=system`,target:"_blank",children:["@",i.source]}):e.jsx(Ue,{href:`${i.source}?open=system`,target:"_blank",children:i.source})}),e.jsx(C,{className:"cell-center",children:e.jsxs(u,{direction:"row",justify:"space-between",children:[e.jsx("div",{className:"approve-wrapper",children:e.jsx(Ve,{className:"centered",onClick:()=>a(i.ref_id),children:e.jsx(ut,{color:l.primaryGreen,fontSize:24})})}),e.jsx("div",{className:"delete-wrapper",children:o===i.ref_id?e.jsx($,{color:l.white,size:16}):e.jsx(ft,{message:"Are you sure ?",onConfirm:()=>c(i.ref_id),children:e.jsx(Ve,{className:"centered",children:e.jsx(ht,{color:l.primaryRed,fontSize:24})})})})]})}),e.jsx(C,{className:"empty"})]},i.source))})]}):e.jsxs(u,{children:[e.jsx(_,{children:"There is not any results for selected filters"}),e.jsx(ke,{})]})},Ve=x(u)`
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
`,Ue=x.a`
  color: ${l.white};
  text-decoration: underline;
  &:visited {
    color: ${l.white};
  }
  &:hover {
    cursor: pointer;
  }
`,vn=()=>{const[t,r]=f.useState(!0),[o,s]=f.useState(""),[a,c]=z(p=>[p.queuedSources,p.setQueuedSources]);f.useEffect(()=>{(async()=>{r(!0);try{const d=await st({approved:"False"});c(d.data)}catch(d){console.warn(d)}finally{r(!1)}})()},[c]);const i=p=>{s(o===p||!p?"":p)},n=a==null?void 0:a.filter(p=>!o||p.source_type===o);return e.jsxs(wn,{align:"stretch",direction:"column",justify:"flex-end",children:[e.jsxs(De,{align:"flex-start",justify:"space-between",children:[e.jsx(_,{className:"title",children:"Queued Sources"}),e.jsx(_,{className:"subtitle",children:"This is a queue of pending sources waiting for approval or denial from graph users. If you think a source will provide good content for the graph, you can pay to approve it. Think of this as an investment: you pay to add it to the source table, and if the content is popular you will earn from it. If content is not relevant to the graph, you should deny it."})]}),e.jsxs(u,{className:"filters",direction:"row",pb:16,px:36,children:[e.jsx(he,{className:R({selected:!o}),onClick:()=>i(""),size:"small",children:"All"}),Object.keys(q).map(p=>e.jsx(he,{className:R({selected:p===o}),onClick:()=>i(p),size:"small",children:q[p]},p))]}),e.jsx(Sn,{align:"center",justify:t?"center":"flex-start",children:t?e.jsx($,{color:l.white}):e.jsx(bn,{data:n})})]})},wn=x(u)`
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
`,Tn=({onSearch:t,placeholder:r,activeIcon:o,loadingIcon:s,defaultIcon:a,...c})=>{const[i,n]=f.useState(""),[p,d]=f.useState(!1),h=()=>{n(""),t(""),d(!1)},g=j=>{!j.target.value&&h(),n(j.target.value)},y=j=>{const{value:m}=j.currentTarget;n(m),!p&&(d(!0),setTimeout(()=>{t(m),m||h(),d(!1)},1e3),m||h())},v=()=>p?e.jsx(Ye,{children:e.jsx(Se,{type:"button",children:s})}):e.jsx(Ye,{children:i?e.jsx(Se,{onClick:h,type:"button",children:o}):e.jsx(Se,{type:"button",children:a})});return e.jsxs(_n,{children:[e.jsx(Cn,{autoComplete:"off",autoCorrect:"off",inputProps:{"aria-label":"search sources"},onChange:g,onKeyDown:j=>{j.key==="Enter"&&y(j)},placeholder:r,value:i,...c}),v()]})},Ye=x(u)`
  top: -50%;
  right: -3%;
  z-index: 3;
  position: absolute;
  transform: translate(-50%, 50%);
`,Se=x(U)`
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
`,An=({data:t,canEdit:r=!1})=>{const o=z(n=>n.setSources),[s,a]=f.useState(""),c=async(n,p)=>{if(t!=null&&t.length)try{await Kt(n,p);const d=t==null?void 0:t.findIndex(g=>g.ref_id===n),h=[...t];h[d]={...h[d],source:p.source},o(h)}catch(d){console.warn(d)}},i=async n=>{if(!(!n||!(t!=null&&t.length))){a(n);try{await ot(n),o(t==null?void 0:t.filter(p=>p.ref_id!==n))}catch(p){console.warn(p)}finally{a("")}}};return t!=null&&t.length?e.jsxs(Pe,{"aria-label":"a dense table",component:"table",id:"sources-table",size:"small",children:[e.jsx(Le,{children:e.jsxs(fe,{component:"tr",children:[e.jsx(C,{className:"empty"}),e.jsx(C,{children:"Type"}),e.jsx(C,{align:"left",children:"Source"}),r&&e.jsx(C,{align:"left"}),e.jsx(C,{className:"empty"})]})}),e.jsx($r,{component:"tbody",children:t==null?void 0:t.map(n=>e.jsxs(Oe,{children:[e.jsx(C,{className:"empty"}),e.jsx(C,{align:"left",children:q[n.source_type]}),e.jsx(C,{align:"left",children:e.jsx(kn,{condition:r,wrapper:p=>e.jsx($n,{id:n.ref_id,onSave:d=>c(n.ref_id,{source:d,source_type:n.source_type}),value:n.source,children:p}),children:n.source_type===Be||n.source_type===Re||n.source_type===Me?e.jsxs(e.Fragment,{children:[n.source_type===Be&&e.jsxs(Te,{href:`${mt}/${n.source}`,target:"_blank",children:["@",n.source]}),n.source_type===Re&&e.jsx(Te,{href:`${n.source}${n.source.includes("?")?"&":"?"}open=system`,target:"_blank",children:n.source}),n.source_type===Me&&e.jsx(Te,{href:n.source,target:"_blank",children:n.source})]}):e.jsx("div",{children:n.source})})}),r&&e.jsx(C,{align:"left",children:e.jsx("div",{className:"delete-wrapper",id:`delete-${n.source}`,children:s===n.ref_id?e.jsx($,{color:l.white}):e.jsx(ft,{message:"Are you sure ?",onConfirm:()=>i(n.ref_id),children:e.jsx(K,{className:"centered",children:e.jsx(Sr,{})})})})}),e.jsx(C,{className:"empty"})]},n.source))})]}):e.jsxs(Pn,{children:[e.jsx(kr,{}),e.jsx(_,{className:"text",children:"There is not any results for selected filters"})]})};function kn({condition:t,wrapper:r,children:o}){return t?r(o):o}const $n=({value:t,onSave:r,id:o,children:s})=>{const[a,c]=f.useState(!1),[i,n]=f.useState(t),[p,d]=f.useState(!1),h=async()=>{if(o){d(!0);try{await r(i),c(!1)}catch(g){console.warn(g)}finally{d(!1)}}};return e.jsx("div",{children:a?e.jsxs(En,{direction:"row",children:[e.jsx(zr,{className:"editable-cell__input",name:"cell-input",onChange:g=>n(g),value:i}),e.jsx(K,{align:"center",justify:"center",children:p?e.jsx($,{}):e.jsx(Tr,{onClick:h})}),e.jsx(K,{align:"center",className:"secondary",justify:"center",onClick:()=>c(!1),children:e.jsx(xt,{})})]}):e.jsxs(zn,{direction:"row",children:[s,e.jsx(K,{onClick:()=>c(!0),children:e.jsx(_r,{size:20})})]})})},En=x(u)`
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
`,In=()=>{const[t,r]=f.useState(!0),[o,s]=f.useState(""),[a,c]=z(g=>[g.sources,g.setSources]),[i]=se(g=>[g.isAdmin]),[n,p]=f.useState("");f.useEffect(()=>{(async()=>{r(!0);try{const y=await st();c(y.data)}catch(y){console.warn(y)}finally{r(!1)}})()},[c]);const d=g=>{s(o===g||!g?"":g)},h=f.useMemo(()=>a==null?void 0:a.filter(g=>(!o||g.source_type===o)&&(g.source.toLowerCase().startsWith(n.toLowerCase())||g.source.toLowerCase().includes(n.toLowerCase()))),[n,o,a]);return e.jsxs(Nn,{align:"stretch",direction:"column",justify:"flex-end",children:[e.jsx(De,{align:"center",direction:"row",justify:"space-between",children:e.jsx(_,{className:"title",children:"Sources for this Graph"})}),e.jsx(Ln,{children:e.jsx(Tn,{activeIcon:e.jsx(V,{}),defaultIcon:e.jsx(me,{}),loadingIcon:e.jsx($,{color:l.PRIMARY_BLUE,size:24}),onSearch:p,placeholder:"Find Topic"})}),e.jsxs(u,{className:"filters",direction:"row",pb:16,px:36,children:[e.jsx(he,{className:R({selected:!o}),onClick:()=>d(""),size:"small",children:"All"}),Object.keys(q).map(g=>e.jsx(he,{className:R({selected:g===o}),onClick:()=>d(g),size:"small",children:q[g]},g))]}),e.jsx(On,{align:"center",justify:t?"center":"flex-start",children:t?e.jsx($,{color:l.white}):e.jsx(An,{canEdit:i,data:h})})]})},Nn=x(u)`
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
`,Dn=({onSelect:t,selectedTopic:r})=>{const[o,s]=f.useState(!1),[a,c]=f.useState(""),[i,n]=f.useState([]),[p,d]=f.useState(!1),h=f.useRef(null);f.useEffect(()=>()=>n([]),[n]);const g=async m=>{const w={muted:"False",sort_by:gt,search:m,skip:"0",limit:"1000"};d(!0);try{const b=await it(w);n(b.data)}catch{n([])}finally{d(!1)}},y=f.useMemo(()=>et.debounce(g,300),[]),v=m=>{t(m)},j=m=>{if(c(m),!m){n([]);return}m.length>2&&y(m)};return r?e.jsxs(Mn,{children:[e.jsx("div",{className:"value",children:r.topic}),e.jsx(u,{className:"icon",onClick:()=>t(null),children:e.jsx(V,{})})]}):e.jsxs(e.Fragment,{children:[e.jsxs(ge,{ref:h,component:"form",onSubmit:m=>m.preventDefault(),sx:{p:"2px 4px",display:"flex",alignItems:"center",width:200},children:[e.jsx(ye,{inputProps:{"aria-label":"search topic"},onChange:m=>j(m.target.value),onFocus:()=>s(!0),placeholder:"Search",size:"small",sx:{ml:1,flex:1},value:a}),a&&e.jsxs(e.Fragment,{children:[e.jsx(He,{"aria-label":"search",onClick:()=>j(""),type:"button",children:e.jsx(V,{})}),e.jsx(ze,{orientation:"vertical",sx:{height:28,m:.5}})]}),e.jsx(He,{"aria-label":"search",type:"button",children:p?e.jsx($,{color:l.white,size:24}):e.jsx(me,{})})]}),h.current&&i.length?e.jsx(Rn,{anchorEl:h.current,open:o,placement:"bottom",children:e.jsx(e.Fragment,{children:i.map(m=>e.jsx(Bn,{className:R({active:r===m.ref_id}),onClick:()=>v(m),children:m.topic},"option"))})}):null]})},Bn=x(u).attrs({direction:"row",align:"center"})`
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
`,Rn=x(St)`
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
`,He=x(U)`
  font-size: 24px;
`,Fn=({selectedType:t,setSelectedType:r})=>{const[o,s]=f.useState(null),[a,c]=f.useState([]);f.useEffect(()=>{(async()=>{try{const{data:h}=await qt();c(h.edge_types)}catch(h){console.warn(h)}})()},[c]);const i=d=>{s(d.currentTarget)},n=()=>{s(null)},p=d=>{r(d),n()};return e.jsxs("div",{children:[e.jsxs(Wn,{onClick:i,children:[e.jsx("div",{className:"text",children:"Type"}),e.jsx("div",{className:"value",children:t}),e.jsx("div",{className:"icon",children:o?e.jsx(vt,{}):e.jsx(bt,{})})]}),e.jsx(Vn,{anchorEl:o,anchorOrigin:{vertical:"bottom",horizontal:"left"},anchorPosition:{top:62,left:0},onClose:n,open:!!o,transformOrigin:{vertical:"top",horizontal:"left"},children:e.jsx(wt,{children:a.map(d=>e.jsxs(Gn,{className:R({active:d===t}),onClick:()=>p(d),children:[e.jsx("span",{className:"icon",children:d===t?e.jsx(Tt,{}):null}),e.jsx("span",{children:d})]},d))})})]})},Wn=x(u).attrs({direction:"row",align:"center"})`
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
`,Vn=x(Ie)`
  .MuiPaper-root {
    background: ${l.BUTTON1};
    min-width: 149px;
    padding: 16px;
    color: ${l.GRAY3};
    box-shadow: 0px 1px 6px 0px rgba(0, 0, 0, 0.2);
    border-radius: 6px;
  }
`,Un=({from:t,onSelect:r,selectedTopic:o,selectedType:s,setSelectedType:a})=>e.jsxs(u,{children:[e.jsx(u,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(u,{align:"center",direction:"row",children:e.jsx(Yn,{children:"Add edge"})})}),e.jsxs(Hn,{mb:12,children:[e.jsxs(_e,{children:[e.jsx("div",{className:"label",children:"From"}),e.jsx("div",{children:t})]}),e.jsx(_e,{children:e.jsx(Fn,{selectedType:s,setSelectedType:a})}),e.jsxs(_e,{children:[e.jsx("div",{className:"label",children:"To"}),e.jsx(Dn,{onSelect:r,selectedTopic:o})]})]})]}),Yn=x(_)`
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
`,Kn=({topic:t,onClose:r})=>{const{close:o}=G("addEdge"),[s]=O(j=>[j.data]),a=ie({mode:"onChange"}),[c,i]=f.useState(!1),[n,p]=f.useState(null),[d,h]=f.useState(""),g=()=>{r(),o()},y=async()=>{if(!(!n||!s)){i(!0);try{await Qt({from:t.ref_id,to:n==null?void 0:n.ref_id,relationship:d});const{ref_id:j}=t,{ref_id:m}=n;if(s){const w={...s};w[j]={...w[j],edgeList:[...w[j].edgeList,d]},w[m]&&(w[m]={...w[m],edgeList:[...w[m].edgeList,d]}),O.setState({data:w})}g()}catch(j){console.warn(j)}finally{i(!1)}}},v=c||!n||!d;return e.jsx(Ne,{id:"addEdge",kind:"large",onClose:g,preventOutsideClose:!0,children:e.jsxs(ae,{...a,children:[e.jsx(Un,{from:t.topic,onSelect:p,selectedTopic:n,selectedType:d,setSelectedType:h}),e.jsxs(F,{color:"secondary",disabled:v,onClick:y,size:"large",variant:"contained",children:["Confirm",c&&e.jsx($,{color:l.BLUE_PRESS_STATE,size:10})]})]})})},qn=()=>e.jsxs(u,{children:[e.jsx(u,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(u,{align:"center",direction:"row",children:e.jsx(Qn,{children:"Edit topic"})})}),e.jsx(u,{mb:12,children:e.jsx(ne,{id:"cy-topic",maxLength:50,name:"topic",placeholder:"Add your topic",rules:{...It}})})]}),Qn=x(_)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,Xn=({topic:t,onClose:r})=>{const{close:o}=G("editTopic"),[s]=O(v=>[v.data]),a=ie({mode:"onChange"}),{watch:c,setValue:i,reset:n}=a,[p,d]=f.useState(!1);f.useEffect(()=>(t&&i("topic",t==null?void 0:t.topic),()=>{n()}),[t,i,n]);const h=c("topic"),g=()=>{r(),o()},y=async()=>{d(!0);try{if(await at((t==null?void 0:t.ref_id)||"",{topic:h.trim()}),s){const v={...s};v[t==null?void 0:t.ref_id].topic=h.trim(),O.setState({data:v})}g()}catch(v){console.warn(v)}finally{d(!1)}};return e.jsx(Ne,{id:"editTopic",kind:"regular",onClose:g,preventOutsideClose:!0,children:e.jsxs(ae,{...a,children:[e.jsx(qn,{}),e.jsxs(F,{color:"secondary",disabled:p,onClick:y,size:"large",variant:"contained",children:["Save",p&&e.jsx($,{color:l.BLUE_PRESS_STATE,size:10})]})]})})},Jn=({onSelect:t,selectedTopic:r})=>{const[o,s]=f.useState(!1),[a,c]=f.useState(""),[i,n]=f.useState([]),[p,d]=f.useState(!1),h=f.useRef(null);f.useEffect(()=>()=>n([]),[n]);const g=async m=>{const w={muted:"False",sort_by:gt,search:m,skip:"0",limit:"1000"};d(!0);try{const b=await it(w);n(b.data)}catch{n([])}finally{d(!1)}},y=f.useMemo(()=>et.debounce(g,300),[]),v=m=>{t(m)},j=m=>{if(c(m),!m){n([]);return}m.length>2&&y(m)};return r?e.jsxs(to,{children:[e.jsx("div",{className:"value",children:r.topic}),e.jsx(u,{className:"icon",onClick:()=>t(null),children:e.jsx(V,{})})]}):e.jsxs(e.Fragment,{children:[e.jsxs(ge,{ref:h,component:"form",onSubmit:m=>m.preventDefault(),sx:{p:"2px 4px",display:"flex",alignItems:"center",width:200},children:[e.jsx(ye,{inputProps:{"aria-label":"search topic"},onChange:m=>j(m.target.value),onFocus:()=>s(!0),placeholder:"Search",size:"small",sx:{ml:1,flex:1},value:a}),a&&e.jsxs(e.Fragment,{children:[e.jsx(Ke,{"aria-label":"search",onClick:()=>j(""),type:"button",children:e.jsx(V,{})}),e.jsx(ze,{orientation:"vertical",sx:{height:28,m:.5}})]}),e.jsx(Ke,{"aria-label":"search",type:"button",children:p?e.jsx($,{color:l.white,size:24}):e.jsx(me,{})})]}),h.current&&i.length?e.jsx(eo,{anchorEl:h.current,open:o,placement:"bottom",children:e.jsx(e.Fragment,{children:i.map(m=>e.jsx(Zn,{className:R({active:r===m.ref_id}),onClick:()=>v(m),children:m.topic},"option"))})}):null]})},Zn=x(u).attrs({direction:"row",align:"center"})`
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
`,eo=x(St)`
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
`,Ke=x(U)`
  font-size: 24px;
`,ro=({from:t,onSelect:r,selectedTopic:o})=>e.jsxs(u,{children:[e.jsx(u,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(u,{align:"center",direction:"row",children:e.jsx(no,{children:"Merge topic"})})}),e.jsxs(oo,{mb:12,children:[e.jsxs(qe,{children:[e.jsx("div",{className:"label",children:"From"}),e.jsx("div",{children:t})]}),e.jsxs(qe,{ml:24,children:[e.jsx("div",{className:"label",children:"To"}),e.jsx(Jn,{onSelect:r,selectedTopic:o})]})]})]}),no=x(_)`
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
`,qe=x(u)`
  flex: 1 1 100%;
`,so=({topic:t,onClose:r})=>{const{close:o}=G("mergeTopic"),[s,a,c]=O(b=>[b.data,b.ids,b.total]),i=ie({mode:"onChange"}),{watch:n,setValue:p,reset:d}=i,[h,g]=f.useState(!1),[y,v]=f.useState(null);f.useEffect(()=>(t&&p("topic",t==null?void 0:t.topic),()=>{d()}),[t,p,d]);const j=n("topic"),m=()=>{r(),o()},w=async()=>{if(!(!y||!s)){g(!0);try{await Xt({from:t.ref_id,to:y==null?void 0:y.ref_id});const{ref_id:b}=t;if(s[b]={...s[b],edgeList:[Er],edgeCount:s[b].edgeCount-1},O.setState({ids:a.filter(A=>A!==y.ref_id),total:c-1}),s){const A={...s};A[t==null?void 0:t.ref_id].topic=j.trim(),O.setState({data:A})}m()}catch(b){console.warn(b)}finally{g(!1)}}};return e.jsx(Ne,{id:"mergeTopic",kind:"regular",onClose:m,preventOutsideClose:!0,children:e.jsxs(ae,{...i,children:[e.jsx(ro,{from:t.topic,onSelect:v,selectedTopic:y}),e.jsxs(F,{color:"secondary",disabled:h,onClick:w,size:"large",variant:"contained",children:["Merge topics",h&&e.jsx($,{color:l.BLUE_PRESS_STATE,size:10})]})]})})},io=()=>{const[t,r]=O(i=>[i.filters,i.setFilters]),[o,s]=f.useState(""),a=i=>{i.preventDefault(),r({search:o})},c=()=>{s(""),t.search&&r({search:""})};return e.jsxs(ge,{component:"form",onSubmit:a,sx:{p:"2px 4px",display:"flex",alignItems:"center",width:300},children:[e.jsx(ye,{autoComplete:"off",autoCorrect:"off",inputProps:{"aria-label":"search topic"},onChange:i=>s(i.target.value),placeholder:"Search",size:"small",spellCheck:"false",sx:{ml:1,flex:1},value:o}),o&&e.jsxs(e.Fragment,{children:[e.jsx(Qe,{"aria-label":"search",onClick:c,type:"button",children:e.jsx(V,{})}),e.jsx(ze,{orientation:"vertical",sx:{height:28,m:.5}})]}),e.jsx(Qe,{"aria-label":"search",onClick:a,type:"button",children:e.jsx(me,{})})]})},Qe=x(U)`
  font-size: 24px;
`,ao=({onChangeFilter:t,currentFilter:r})=>{const[o,s]=f.useState(null),a=n=>{s(n.currentTarget)},c=()=>{s(null)},i=n=>{t(n),c()};return e.jsxs("div",{children:[e.jsxs(lo,{onClick:a,children:[e.jsx("div",{className:"text",children:"Sort By"}),e.jsx("div",{className:"value",children:ve[r]}),e.jsx("div",{className:"icon",children:o?e.jsx(vt,{}):e.jsx(bt,{})})]}),e.jsx(po,{anchorEl:o,anchorOrigin:{vertical:"bottom",horizontal:"left"},anchorPosition:{top:62,left:0},onClose:c,open:!!o,transformOrigin:{vertical:"top",horizontal:"left"},children:e.jsx(wt,{children:Object.keys(ve).map(n=>e.jsxs(co,{className:R({active:n===r}),onClick:()=>i(n),children:[e.jsx("span",{className:"icon",children:n===r?e.jsx(Tt,{}):null}),e.jsx("span",{children:ve[n]})]},n))})})]})},lo=x(u).attrs({direction:"row",align:"center"})`
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
`,po=x(Ie)`
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
`,uo=({topic:t,onClick:r,onSearch:o})=>{const[s,a]=O(h=>[h.ids,h.total]),[c,i]=f.useState(!1),n=t.date_added_to_graph.toString(),p=async(h,g)=>{i(!0);try{await at(h,{muted_topic:g}),O.setState({ids:s.filter(y=>y!==h),total:a-1})}catch(y){console.warn(y)}},d=h=>{o(h.topic)};return e.jsxs(Oe,{children:[e.jsx(C,{className:"empty"}),e.jsx(C,{onClick:()=>d(t),children:e.jsx(ho,{children:t.topic})}),e.jsx(C,{children:t.edgeCount}),e.jsx(C,{children:t.edgeList.join(", ")}),e.jsx(C,{children:e.jsx("span",{children:new Date(Number(n)*1e3).toDateString()})}),e.jsx(C,{className:"cell-center",children:e.jsx(u,{direction:"row",justify:"space-between",children:e.jsx("div",{className:"approve-wrapper",children:c?e.jsx($,{color:l.white,size:16}):e.jsx(e.Fragment,{children:t.muted_topic?e.jsx(Xe,{className:"centered",onClick:()=>p(t.ref_id,!1),children:e.jsx(ut,{color:l.primaryGreen,fontSize:24})}):e.jsx(Xe,{className:"centered",onClick:()=>p(t.ref_id,!0),children:e.jsx(ht,{color:l.primaryRed,fontSize:24})})})})})}),e.jsx(C,{children:e.jsx(U,{onClick:h=>r(h,t.ref_id),children:e.jsx(Ir,{})})})]},t.topic)},Xe=x(u)`
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
`,xo=f.memo(uo),fo=({showMuted:t,onTopicEdit:r})=>{const{close:o}=G("sourcesTable"),[s,a]=E.useState(null),[c,i]=E.useState(""),[n,p]=D(b=>[b.setSearchFormValue,b.setCurrentSearch]),[d,h]=O(b=>[b.data,b.ids]),g=f.useCallback((b,A)=>{a(b.currentTarget),i(A)},[]),y=()=>{a(null)},v=b=>{n(b),p(b),o()},j=b=>{r(c,b),y()},m=!!s,w=m?"simple-popover":void 0;return d?e.jsx(e.Fragment,{children:Object.keys(d).length?e.jsxs(e.Fragment,{children:[e.jsxs(Pe,{component:"table",children:[e.jsx(Le,{children:e.jsxs(fe,{component:"tr",children:[e.jsx(C,{className:"empty"}),e.jsx(C,{children:"Type"}),e.jsx(C,{children:"Edge Count"}),e.jsx(C,{children:"Edge list"}),e.jsx(C,{children:"Date"}),e.jsx(C,{children:t?"Unmute":"Mute"}),e.jsx(C,{})]})}),d&&e.jsx("tbody",{children:h==null?void 0:h.map(b=>e.jsx(xo,{onClick:g,onSearch:v,topic:d[b]},b))})]}),c?e.jsxs(mo,{anchorEl:s,anchorOrigin:{vertical:"bottom",horizontal:"right"},id:w,onClose:y,open:m,transformOrigin:{vertical:"top",horizontal:"right"},children:[e.jsx(Ce,{onClick:()=>j("editTopic"),children:"Rename"}),e.jsx(Ce,{onClick:()=>j("mergeTopic"),children:"Merge"}),e.jsx(Ce,{onClick:()=>j("addEdge"),children:"Add edge"})]}):null]}):e.jsxs(u,{children:[e.jsx(_,{children:"There is not any results for selected filters"}),e.jsx(ke,{})]})}):e.jsxs(u,{children:[e.jsx(_,{children:"There is not any results for selected filters"}),e.jsx(ke,{})]})},Ce=x(u).attrs({direction:"row",px:16,py:8})`
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
`,mo=x(Ie)`
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
`,go=()=>{const[t,r]=f.useState(!1),[o,s,a,c,i,n,p]=O(k=>[k.data,k.ids,k.total,k.setTopics,k.filters,k.setFilters,k.terminate]),{open:d}=G("editTopic"),{open:h}=G("mergeTopic"),{open:g}=G("addEdge"),[y,v]=f.useState(null),j={editTopic:d,mergeTopic:h,addEdge:g},m=f.useRef([]);f.useEffect(()=>{s.length&&(m.current=s)},[s]),f.useEffect(()=>{(async()=>{try{r(!0),await c()}catch{console.error("err")}finally{r(!1)}})()},[c,i]);const w=async()=>{try{r(!0),n({page:i.page+1})}catch(k){console.error("Error loading more data:",k)}finally{r(!1)}};f.useEffect(()=>()=>{p()},[p]);const b=k=>{n({sortBy:k})},A=()=>{v(null)},T=(k,P)=>{o&&(v(o[k]),typeof j[P]=="function"&&j[P]())};return e.jsxs(e.Fragment,{children:[e.jsxs(yo,{direction:"column",justify:"flex-end",children:[e.jsxs(De,{align:"flex-start",direction:"row",justify:"space-between",children:[e.jsx(_,{className:"title",children:"Topics"}),e.jsxs(F,{disabled:t,onClick:()=>n({muted:!i.muted}),size:"medium",children:[i.muted?"Show Unmuted":"Show Muted",t&&e.jsx($,{color:l.BLUE_PRESS_STATE,size:10})]})]}),e.jsxs(bo,{children:[e.jsx(io,{}),e.jsx(ao,{currentFilter:i.sortBy,onChangeFilter:b})]}),e.jsx(jo,{align:"center",justify:t&&!o?"center":"flex-start",children:t&&!o?e.jsx($,{color:l.white}):e.jsxs(e.Fragment,{children:[e.jsx(fo,{onTopicEdit:T,showMuted:i.muted}),a>s.length?e.jsxs(F,{className:"load-more",disabled:t,onClick:w,children:["Load more",t&&e.jsx($,{color:l.BLUE_PRESS_STATE,size:10})]}):null]})})]}),y&&e.jsx(so,{onClose:A,topic:y}),y&&e.jsx(Xn,{onClose:A,topic:y}),y&&e.jsx(Kn,{onClose:A,topic:y})]})},yo=x(u)`
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
`,vo=[{label:Pr,component:In},{label:jt,component:vn},{label:yt,component:go}],wo=t=>{const{children:r,value:o,index:s,...a}=t;return o===s?e.jsx(Ao,{"aria-labelledby":`simple-tab-${s}`,hidden:o!==s,id:`simple-tabpanel-${s}`,role:"tabpanel",...a,children:r}):null};function So(t){return{id:`simple-tab-${t}`,"aria-controls":`simple-tabpanel-${t}`}}const To=()=>{const[t,r]=f.useState(0),[o]=se(i=>[i.isAdmin]),[s]=Nt(i=>[i.queuedSourcesFlag]),a=(i,n)=>{r(n)},c=vo.filter(({label:i})=>i===yt?o:i===jt?o&&s:!0);return e.jsxs(ko,{direction:"column",children:[e.jsx(_o,{"aria-label":"sources tabs",onChange:a,value:t,children:c.map((i,n)=>e.jsx(Co,{color:l.white,disableRipple:!0,label:i.label,...So(n)},i.label))}),c.map((i,n)=>e.jsx(wo,{index:n,value:t,children:e.jsx(i.component,{})},i.label))]})},_o=x(Nr)`
  && {
    background: rgba(0, 0, 0, 0.2);

    .MuiTabs-indicator {
      background: ${l.primaryBlue};
    }
  }
`,Co=x(Or)`
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
`,Ao=x(u)`
  display: flex;
  flex: 1;
  min-height: 572px;
  padding: 20px 0;
  max-height: 572px;
`,ko=x(u)`
  min-height: 0;
  flex: 1;
`,ue={required:{message:"The field is required",value:!0}},$o=({initialValues:t})=>{const r=ie({defaultValues:t,mode:"onSubmit"}),{isSubmitting:o}=r.formState,s=r.handleSubmit(async a=>{try{await Jt(a)}catch(c){console.warn(c)}});return e.jsx(ae,{...r,children:e.jsx("form",{id:"add-node-form",onSubmit:s,children:e.jsxs(e.Fragment,{children:[e.jsxs(u,{children:[e.jsx(u,{pt:12,children:e.jsx(ne,{id:"cy-about-title-id",label:"Graph Title",maxLength:50,name:"title",placeholder:"Type graph title here...",rules:{...ue}})}),e.jsx(u,{pt:12,children:e.jsx(ne,{id:"cy-about-id",label:"Graph Description",maxLength:50,name:"description",placeholder:"Type graph description here...",rules:{...ue}})}),e.jsx(u,{pt:12,children:e.jsx(ne,{id:"cy-about-mission_statement-id",label:"Mission Statement",maxLength:50,name:"mission_statement",placeholder:"Type mission statement here...",rules:{...ue}})}),e.jsx(u,{pt:12,children:e.jsx(ne,{id:"cy-about-search_term-id",label:"Search Term",maxLength:50,name:"search_term",placeholder:"Type search term here...",rules:{...ue}})})]}),e.jsx(u,{pt:8,children:o?e.jsx(Eo,{children:e.jsx($,{color:l.white,size:20})}):e.jsx(_t,{disabled:o,id:"add-node-submit-cta",kind:"big",type:"submit",children:"Save changes"})})]})})})},Eo=x(u).attrs({align:"center",background:"primaryButton",borderRadius:8,justify:"center"})`
  padding: 16px 24px;
  opacity: 0.5;
`,Po=({initialValues:t})=>e.jsxs(e.Fragment,{children:[t.title&&e.jsxs(u,{pt:12,children:[e.jsx(_,{kind:"regular",children:"Graph Title"}),e.jsx(u,{pt:12,children:e.jsx(_,{className:"value",kind:"medium",children:t.title})})]}),t.description&&e.jsxs(u,{pt:12,children:[e.jsx(_,{kind:"regular",children:"Graph Description"}),e.jsx(u,{pt:12,children:e.jsx(_,{className:"value",kind:"medium",children:t.description})})]}),t.mission_statement&&e.jsxs(u,{pt:12,children:[e.jsx(_,{kind:"regular",children:"Mission Statement"}),e.jsx(u,{pt:12,children:e.jsx(_,{className:"value",kind:"medium",children:t.mission_statement})})]})]}),zo=()=>{const[t]=se(o=>[o.isAdmin]),r=D(o=>o.appMetaData);return e.jsxs(Io,{align:"stretch",direction:"column",justify:"flex-end",children:[e.jsx(Oo,{align:"center",direction:"row",justify:"space-between",children:e.jsx(_,{className:"title",children:"About"})}),e.jsx(No,{align:"stretch",justify:"flex-start",children:t?e.jsx($o,{initialValues:r}):e.jsx(Po,{initialValues:r})})]})},Io=x(u)`
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
`,No=x(u)`
  min-height: 0;
  overflow: auto;
  flex: 1;
  width: 100%;
`,Oo=x(u)`
  margin-bottom: 16px;
  ${_} {
    margin-bottom: 0;
  }
`;var Lo=["type","layout","connectNulls","ref"];function Q(t){"@babel/helpers - typeof";return Q=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},Q(t)}function Do(t,r){if(t==null)return{};var o=Bo(t,r),s,a;if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);for(a=0;a<c.length;a++)s=c[a],!(r.indexOf(s)>=0)&&Object.prototype.propertyIsEnumerable.call(t,s)&&(o[s]=t[s])}return o}function Bo(t,r){if(t==null)return{};var o={},s=Object.keys(t),a,c;for(c=0;c<s.length;c++)a=s[c],!(r.indexOf(a)>=0)&&(o[a]=t[a]);return o}function oe(){return oe=Object.assign?Object.assign.bind():function(t){for(var r=1;r<arguments.length;r++){var o=arguments[r];for(var s in o)Object.prototype.hasOwnProperty.call(o,s)&&(t[s]=o[s])}return t},oe.apply(this,arguments)}function Je(t,r){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);r&&(s=s.filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable})),o.push.apply(o,s)}return o}function N(t){for(var r=1;r<arguments.length;r++){var o=arguments[r]!=null?arguments[r]:{};r%2?Je(Object(o),!0).forEach(function(s){L(t,s,o[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):Je(Object(o)).forEach(function(s){Object.defineProperty(t,s,Object.getOwnPropertyDescriptor(o,s))})}return t}function H(t){return Wo(t)||Fo(t)||Mo(t)||Ro()}function Ro(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Mo(t,r){if(t){if(typeof t=="string")return $e(t,r);var o=Object.prototype.toString.call(t).slice(8,-1);if(o==="Object"&&t.constructor&&(o=t.constructor.name),o==="Map"||o==="Set")return Array.from(t);if(o==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return $e(t,r)}}function Fo(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Wo(t){if(Array.isArray(t))return $e(t)}function $e(t,r){(r==null||r>t.length)&&(r=t.length);for(var o=0,s=new Array(r);o<r;o++)s[o]=t[o];return s}function Go(t,r){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")}function Ze(t,r){for(var o=0;o<r.length;o++){var s=r[o];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,At(s.key),s)}}function Vo(t,r,o){return r&&Ze(t.prototype,r),o&&Ze(t,o),Object.defineProperty(t,"prototype",{writable:!1}),t}function Uo(t,r){if(typeof r!="function"&&r!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(r&&r.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),r&&Ee(t,r)}function Ee(t,r){return Ee=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(s,a){return s.__proto__=a,s},Ee(t,r)}function Yo(t){var r=Ko();return function(){var s=xe(t),a;if(r){var c=xe(this).constructor;a=Reflect.construct(s,arguments,c)}else a=s.apply(this,arguments);return Ho(this,a)}}function Ho(t,r){if(r&&(Q(r)==="object"||typeof r=="function"))return r;if(r!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return M(t)}function M(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function Ko(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function xe(t){return xe=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(o){return o.__proto__||Object.getPrototypeOf(o)},xe(t)}function L(t,r,o){return r=At(r),r in t?Object.defineProperty(t,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[r]=o,t}function At(t){var r=qo(t,"string");return Q(r)==="symbol"?r:String(r)}function qo(t,r){if(Q(t)!=="object"||t===null)return t;var o=t[Symbol.toPrimitive];if(o!==void 0){var s=o.call(t,r||"default");if(Q(s)!=="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(t)}var le=function(t){Uo(o,t);var r=Yo(o);function o(){var s;Go(this,o);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return s=r.call.apply(r,[this].concat(c)),L(M(s),"state",{isAnimationFinished:!0,totalLength:0}),L(M(s),"generateSimpleStrokeDasharray",function(n,p){return"".concat(p,"px ").concat(n-p,"px")}),L(M(s),"getStrokeDasharray",function(n,p,d){var h=d.reduce(function(A,T){return A+T});if(!h)return s.generateSimpleStrokeDasharray(p,n);for(var g=Math.floor(n/h),y=n%h,v=p-n,j=[],m=0,w=0;m<d.length;w+=d[m],++m)if(w+d[m]>y){j=[].concat(H(d.slice(0,m)),[y-w]);break}var b=j.length%2===0?[0,v]:[v];return[].concat(H(o.repeat(d,g)),H(j),b).map(function(A){return"".concat(A,"px")}).join(", ")}),L(M(s),"id",lr("recharts-line-")),L(M(s),"pathRef",function(n){s.mainCurve=n}),L(M(s),"handleAnimationEnd",function(){s.setState({isAnimationFinished:!0}),s.props.onAnimationEnd&&s.props.onAnimationEnd()}),L(M(s),"handleAnimationStart",function(){s.setState({isAnimationFinished:!1}),s.props.onAnimationStart&&s.props.onAnimationStart()}),s}return Vo(o,[{key:"componentDidMount",value:function(){if(this.props.isAnimationActive){var a=this.getTotalLength();this.setState({totalLength:a})}}},{key:"componentDidUpdate",value:function(){if(this.props.isAnimationActive){var a=this.getTotalLength();a!==this.state.totalLength&&this.setState({totalLength:a})}}},{key:"getTotalLength",value:function(){var a=this.mainCurve;try{return a&&a.getTotalLength&&a.getTotalLength()||0}catch{return 0}}},{key:"renderErrorBar",value:function(a,c){if(this.props.isAnimationActive&&!this.state.isAnimationFinished)return null;var i=this.props,n=i.points,p=i.xAxis,d=i.yAxis,h=i.layout,g=i.children,y=cr(g,dr);if(!y)return null;var v=function(w,b){return{x:w.x,y:w.y,value:w.value,errorVal:ct(w.payload,b)}},j={clipPath:a?"url(#clipPath-".concat(c,")"):null};return E.createElement(be,j,y.map(function(m){return E.cloneElement(m,{key:"bar-".concat(m.props.dataKey),data:n,xAxis:p,yAxis:d,layout:h,dataPointFormatter:v})}))}},{key:"renderDots",value:function(a,c,i){var n=this.props.isAnimationActive;if(n&&!this.state.isAnimationFinished)return null;var p=this.props,d=p.dot,h=p.points,g=p.dataKey,y=pe(this.props),v=pe(d,!0),j=h.map(function(w,b){var A=N(N(N({key:"dot-".concat(b),r:3},y),v),{},{value:w.value,dataKey:g,cx:w.x,cy:w.y,index:b,payload:w.payload});return o.renderDotItem(d,A)}),m={clipPath:a?"url(#clipPath-".concat(c?"":"dots-").concat(i,")"):null};return E.createElement(be,oe({className:"recharts-line-dots",key:"dots"},m),j)}},{key:"renderCurveStatically",value:function(a,c,i,n){var p=this.props,d=p.type,h=p.layout,g=p.connectNulls;p.ref;var y=Do(p,Lo),v=N(N(N({},pe(y,!0)),{},{fill:"none",className:"recharts-line-curve",clipPath:c?"url(#clipPath-".concat(i,")"):null,points:a},n),{},{type:d,layout:h,connectNulls:g});return E.createElement(pr,oe({},v,{pathRef:this.pathRef}))}},{key:"renderCurveWithAnimation",value:function(a,c){var i=this,n=this.props,p=n.points,d=n.strokeDasharray,h=n.isAnimationActive,g=n.animationBegin,y=n.animationDuration,v=n.animationEasing,j=n.animationId,m=n.animateNewValues,w=n.width,b=n.height,A=this.state,T=A.prevPoints,k=A.totalLength;return E.createElement(ur,{begin:g,duration:y,isActive:h,easing:v,from:{t:0},to:{t:1},key:"line-".concat(j),onAnimationEnd:this.handleAnimationEnd,onAnimationStart:this.handleAnimationStart},function(P){var S=P.t;if(T){var X=T.length/p.length,W=p.map(function(I,je){var ee=Math.floor(je*X);if(T[ee]){var te=T[ee],Y=re(te.x,I.x),kt=re(te.y,I.y);return N(N({},I),{},{x:Y(S),y:kt(S)})}if(m){var $t=re(w*2,I.x),Et=re(b/2,I.y);return N(N({},I),{},{x:$t(S),y:Et(S)})}return N(N({},I),{},{x:I.x,y:I.y})});return i.renderCurveStatically(W,a,c)}var ce=re(0,k),J=ce(S),Z;if(d){var de="".concat(d).split(/[,\s]+/gim).map(function(I){return parseFloat(I)});Z=i.getStrokeDasharray(J,k,de)}else Z=i.generateSimpleStrokeDasharray(k,J);return i.renderCurveStatically(p,a,c,{strokeDasharray:Z})})}},{key:"renderCurve",value:function(a,c){var i=this.props,n=i.points,p=i.isAnimationActive,d=this.state,h=d.prevPoints,g=d.totalLength;return p&&n&&n.length&&(!h&&g>0||!hr(h,n))?this.renderCurveWithAnimation(a,c):this.renderCurveStatically(n,a,c)}},{key:"render",value:function(){var a,c=this.props,i=c.hide,n=c.dot,p=c.points,d=c.className,h=c.xAxis,g=c.yAxis,y=c.top,v=c.left,j=c.width,m=c.height,w=c.isAnimationActive,b=c.id;if(i||!p||!p.length)return null;var A=this.state.isAnimationFinished,T=p.length===1,k=We("recharts-line",d),P=h&&h.allowDataOverflow,S=g&&g.allowDataOverflow,X=P||S,W=Ae(b)?this.id:b,ce=(a=pe(n))!==null&&a!==void 0?a:{r:3,strokeWidth:2},J=ce.r,Z=J===void 0?3:J,de=ce.strokeWidth,I=de===void 0?2:de,je=xr(n)?n:{},ee=je.clipDot,te=ee===void 0?!0:ee,Y=Z*2+I;return E.createElement(be,{className:k},P||S?E.createElement("defs",null,E.createElement("clipPath",{id:"clipPath-".concat(W)},E.createElement("rect",{x:P?v:v-j/2,y:S?y:y-m/2,width:P?j:j*2,height:S?m:m*2})),!te&&E.createElement("clipPath",{id:"clipPath-dots-".concat(W)},E.createElement("rect",{x:v-Y/2,y:y-Y/2,width:j+Y,height:m+Y}))):null,!T&&this.renderCurve(X,W),this.renderErrorBar(X,W),(T||n)&&this.renderDots(X,te,W),(!w||A)&&fr.renderCallByParent(this.props,p))}}],[{key:"getDerivedStateFromProps",value:function(a,c){return a.animationId!==c.prevAnimationId?{prevAnimationId:a.animationId,curPoints:a.points,prevPoints:c.curPoints}:a.points!==c.curPoints?{curPoints:a.points}:null}},{key:"repeat",value:function(a,c){for(var i=a.length%2!==0?[].concat(H(a),[0]):a,n=[],p=0;p<c;++p)n=[].concat(H(n),H(i));return n}},{key:"renderDotItem",value:function(a,c){var i;if(E.isValidElement(a))i=E.cloneElement(a,c);else if(Ot(a))i=a(c);else{var n=We("recharts-line-dot",a?a.className:"");i=E.createElement(lt,oe({},c,{className:n}))}return i}}]),o}(f.PureComponent);L(le,"displayName","Line");L(le,"defaultProps",{xAxisId:0,yAxisId:0,connectNulls:!1,activeDot:!0,dot:!0,legendType:"line",stroke:"#3182bd",strokeWidth:1,fill:"#fff",points:[],isAnimationActive:!ar.isSsr,animateNewValues:!0,animationBegin:0,animationDuration:1500,animationEasing:"ease",hide:!1,label:!1});L(le,"getComposedData",function(t){var r=t.props,o=t.xAxis,s=t.yAxis,a=t.xAxisTicks,c=t.yAxisTicks,i=t.dataKey,n=t.bandSize,p=t.displayedData,d=t.offset,h=r.layout,g=p.map(function(y,v){var j=ct(y,i);return h==="horizontal"?{x:Ge({axis:o,ticks:a,bandSize:n,entry:y,index:v}),y:Ae(j)?null:s.scale(j),value:j,payload:y}:{x:Ae(j)?null:o.scale(j),y:Ge({axis:s,ticks:c,bandSize:n,entry:y,index:v}),value:j,payload:y}});return N({points:g,layout:h},d)});var Qo=mr({chartName:"LineChart",GraphicalChild:le,axisComponents:[{axisType:"xAxis",AxisComp:dt},{axisType:"yAxis",AxisComp:pt}],formatAxisMap:gr});const Xo=({cx:t,cy:r})=>e.jsx(lt,{cx:t,cy:r,fill:l.blueTextAccent,r:2}),Jo=({data:t,width:r=500,height:o=300})=>e.jsx(e.Fragment,{children:(t==null?void 0:t.length)&&e.jsxs(Qo,{data:t,height:o,id:"cy-sentiment-chart",margin:{bottom:5,left:-20,right:30,top:5},width:r,children:[e.jsx(yr,{stroke:l.lightBlue300,strokeDasharray:"5 5"}),e.jsx(dt,{dataKey:"date",interval:Math.floor(t.length/3),stroke:l.blueTextAccent}),e.jsx(pt,{domain:[0,10],stroke:l.blueTextAccent}),e.jsx(jr,{}),e.jsx(le,{dataKey:"score",dot:e.jsx(Xo,{}),stroke:"#8884d8",type:"monotone"})]})}),Zo=()=>{const[t,r]=f.useState(void 0),[o]=se(i=>[i.setBudget]),[s,a]=f.useState(!1),c=async()=>{a(!0),Zt(o).then(async i=>{r(i==null?void 0:i.data.filter(n=>n.date).map(n=>({date:Dt.unix(Number(String(n.date).split(".")[0])).format("MM/DD/YY"),score:n.sentiment_score}))),await tt(o)}).catch().finally(()=>{a(!1)})};return e.jsxs(es,{align:"flex-start",direction:"column",id:"cy-sentiment-chart-wrapper",justify:"flex-end",children:[e.jsx(_,{className:"title",children:"Sentiment chart"}),s&&e.jsx(Lr,{alignItems:"center",component:"div",flexGrow:1,p:4,spacing:2,width:"100%",children:e.jsx(Lt,{color:l.white})}),!(t!=null&&t.length)&&e.jsx(ts,{className:"button",id:"cy-get-sentiments-btn",onClick:c,children:"Get top 100 sentiments"}),e.jsx(Jo,{data:t})]})},es=x(u)`
  border-radius: 8px;
  box-shadow: 0px 5px 6px rgb(0 0 0 / 50%);
  padding: 16px;

  .title {
    margin-bottom: 16px;
    font-size: 20px;
  }
`,ts=x(_t)`
  height: 48px;
`,rs=600,ns={about:e.jsx(zo,{}),sentiment:e.jsx(Zo,{}),sources:e.jsx(To,{}),"":null},os=()=>{const[t,r]=D(o=>[o.secondarySidebarActiveTab,o.setSecondarySidebarActiveTab]);return e.jsx(br,{direction:"left",in:!!t,mountOnEnter:!0,unmountOnExit:!0,children:e.jsxs(ss,{id:"secondary-sidebar-wrapper",children:[e.jsx(is,{id:"cy-close-secondary-sidebar",onClick:()=>r(""),children:e.jsx(xt,{})}),ns[t]]})})},ss=x(u)(({theme:t})=>({background:l.BG1,height:"100vh",padding:"16px 20px",width:"100%",zIndex:30,display:"flex",[t.breakpoints.up("sm")]:{width:rs}})),is=x(u).attrs({align:"center",justify:"center",p:5})`
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
`,as=x(er)`
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
`,ls=x(u)`
  height: 100%;
  width: 100%;
  background-color: ${l.black};
`,cs=x(u)`
  position: absolute;
  bottom: 8px;
  left: 8px;
  color: ${l.white};
  font-size: 12px;
  opacity: 0.5;
`,ds=f.lazy(()=>B(()=>import("./index-3a783dd1.js"),["assets/index-3a783dd1.js","assets/index-f76464f2.js","assets/index-3f17fe3b.css","assets/SourcesTableIcon-f38d177c.js","assets/SettingsIcon-6132df87.js","assets/index-9c3b490f.js"]).then(({MainToolbar:t})=>({default:t}))),ps=f.lazy(()=>B(()=>import("./index-9e34536d.js"),["assets/index-9e34536d.js","assets/index-f76464f2.js","assets/index-3f17fe3b.css","assets/EditIcon-9a024feb.js","assets/react-toastify.esm-bb128754.js","assets/react-toastify-b67b3d0b.css","assets/generateCategoricalChart-ab3197d5.js","assets/Popover-e081ddff.js","assets/useSlotProps-2c3c97df.js","assets/InfoIcon-d72751f5.js","assets/index-c4f67241.js","assets/index.esm-a945e31d.js","assets/PlusIcon-fbd9920e.js","assets/index-9c3b490f.js","assets/ClipLoader-634bea35.js","assets/NoFilterResultIcon-c293cc6b.js","assets/ChevronUpIcon-bb75ff24.js","assets/index-683f9056.js","assets/index-eafda19d.js","assets/index-2c3c416b.js","assets/index-47dde8aa.js","assets/Popper-0477edac.js","assets/CheckIcon-455b6076.js","assets/SettingsIcon-6132df87.js","assets/Stack-9daff4b0.js"]).then(({Universe:t})=>({default:t}))),us=f.lazy(()=>B(()=>import("./index-8ce6ecdf.js"),["assets/index-8ce6ecdf.js","assets/index-f76464f2.js","assets/index-3f17fe3b.css","assets/react-toastify.esm-bb128754.js","assets/react-toastify-b67b3d0b.css","assets/SoundIcon-56c777ef.js","assets/Select-f31fbaee.js","assets/Popover-e081ddff.js","assets/useSlotProps-2c3c97df.js","assets/ChevronUpIcon-bb75ff24.js","assets/generateCategoricalChart-ab3197d5.js","assets/InfoIcon-d72751f5.js","assets/CheckIcon-455b6076.js","assets/index.esm-a945e31d.js","assets/toastMessage-3f5b8d92.js","assets/SoundIcon-6125620a.css","assets/index-c4f67241.js","assets/Skeleton-d45c4af6.js","assets/ClipLoader-634bea35.js","assets/PlusIcon-fbd9920e.js","assets/index-9c3b490f.js","assets/index-47dde8aa.js"]).then(({SideBar:t})=>({default:t}))),hs=()=>{const[t,r]=se(S=>[S.setBudget,S.setNodeCount]),[o,s]=f.useState(!1),[a,c,i,n,p]=[D(S=>S.setSidebarOpen),D(S=>S.currentSearch),D(S=>S.setCurrentSearch),D(S=>S.setRelevanceSelected),D(S=>S.setTranscriptOpen)],d=vr(S=>S.setTeachMeAnswer),[h,g,y,v,j,m]=[z(S=>S.data),z(S=>S.setData),z(S=>S.fetchData),z(S=>S.graphStyle),z(S=>S.setSelectedNode),z(S=>S.setCategoryFilter)],w=tr(),b=ie({mode:"onChange"}),A=b.handleSubmit(({search:S})=>{p(!1),j(null),n(!1),i(S),d(""),m(null)}),T=f.useCallback(async()=>{await y(t,{word:c??""}),a(!0),c&&await tt(t)},[y,c,a,t]);f.useEffect(()=>{T()},[c,T]);const k=()=>{if(h){s(!0);const S=sr(v,h.nodes);setTimeout(()=>{g(S),s(!1)},1e3)}};f.useEffect(()=>{k()},[v]);const P=f.useCallback(()=>{r("INCREMENT")},[r]);return f.useEffect(()=>{w&&(w.on("connect_error",S=>{console.error("Socket connection error:",S)}),w.on("newnode",P))},[w,P]),f.useEffect(()=>()=>{w&&w.disconnect()},[w]),e.jsxs(e.Fragment,{children:[e.jsx(rr,{}),e.jsx(fn,{}),e.jsx(nr,{hidden:!Bt}),e.jsx(f.Suspense,{fallback:e.jsx("div",{children:"Loading..."}),children:e.jsxs(ls,{direction:"row",children:[e.jsx(wr,{children:e.jsxs(ae,{...b,children:[e.jsx(ds,{}),e.jsx(us,{onSubmit:A}),e.jsx(ps,{}),o&&e.jsx(tn,{fullSize:!1}),e.jsx(Zr,{}),e.jsx(os,{}),e.jsx(un,{}),e.jsxs(cs,{children:["v",or]}),e.jsx(Ct,{})]})}),e.jsx(pn,{}),e.jsx(as,{}),e.jsx(jn,{})]})})]})},Ps=Object.freeze(Object.defineProperty({__proto__:null,App:hs},Symbol.toStringTag,{value:"Module"}));export{Zr as O,tn as P,To as S,Ps as i};
