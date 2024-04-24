import{g as Mt,a as zt,s as Oe,c as st,_ as me,r as m,u as Dt,b as Rt,j as e,d as Ft,e as Wt,F as p,T as S,f as d,h as x,i as ee,k as te,l as ae,m as R,n as Vt,S as Gt,o as Ut,p as Ht,q as it,t as at,v as Fe,Y as We,R as Ve,w as Yt,x as le,y as Me,z as Zt,A as lt,B as Kt,C as qt,D as je,E as Xt,G as N,H as Qt,I as Jt,J as er,K as tr,L as rr,M as nr,N as or,O as ct,P as sr,Q as ir}from"./index-6865c215.js";import{A as ar,a as dt,C as P,u as lr,B as G,I as W,b as ce,S as pt,c as de,F as pe,Q as cr,d as dr,G as pr,L as hr,v as ur}from"./react-toastify.esm-22bb4a54.js";import{f as Ge,G as xr,u as fr,c as Ue,D as ht,a as mr,E as gr,L as Se,b as xe,C as yr,A as jr,i as ne,d as br,e as Ee,g as Cr,h as vr,j as ut,k as He,l as wr,X as xt,Y as ft,m as Sr,n as _r,T as Tr,P as kr,S as Ar,o as Lr,p as $r}from"./generateCategoricalChart-c02bec87.js";import{M as Er,a as Ir,b as Nr,c as mt,d as Pr}from"./index.esm-6af15a5e.js";import{T as Br,a as X,b as Or,F as Ie,M as be,C as gt,N as Mr,c as zr}from"./NoFilterResultIcon-e651ea7b.js";import{s as Q,T as yt,u as O,A as ze,I as Dr,E as Rr,D as Fr,a as Ye,b as jt,Q as bt,V as Ct,S as Wr}from"./index-29450604.js";import{P as vt,I as wt,a as St}from"./Popover-f9928c08.js";import{B as Vr,T as se}from"./index-e40a00bc.js";import{D as Gr,P as Ur}from"./PlusIcon-8d1cf88e.js";import{u as V}from"./index-27c0e8db.js";import{B as De}from"./index-41b2a75e.js";import{e as Hr,A as Re,T as _t,S as Yr}from"./index-e2b6f25f.js";import{C as Tt}from"./CheckIcon-c555d9ea.js";import{T as Zr,a as Kr,B as kt}from"./index-15aedafe.js";function qr(t){return Mt("MuiTypography",t)}zt("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);const Xr=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],Qr=t=>{const{align:r,gutterBottom:o,noWrap:n,paragraph:i,variant:a,classes:l}=t,s={root:["root",a,t.align!=="inherit"&&`align${st(r)}`,o&&"gutterBottom",n&&"noWrap",i&&"paragraph"]};return Wt(s,qr,l)},Jr=Oe("span",{name:"MuiTypography",slot:"Root",overridesResolver:(t,r)=>{const{ownerState:o}=t;return[r.root,o.variant&&r[o.variant],o.align!=="inherit"&&r[`align${st(o.align)}`],o.noWrap&&r.noWrap,o.gutterBottom&&r.gutterBottom,o.paragraph&&r.paragraph]}})(({theme:t,ownerState:r})=>me({margin:0},r.variant==="inherit"&&{font:"inherit"},r.variant!=="inherit"&&t.typography[r.variant],r.align!=="inherit"&&{textAlign:r.align},r.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},r.gutterBottom&&{marginBottom:"0.35em"},r.paragraph&&{marginBottom:16})),Ze={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},en={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},tn=t=>en[t]||t,rn=m.forwardRef(function(r,o){const n=Dt({props:r,name:"MuiTypography"}),i=tn(n.color),a=Hr(me({},n,{color:i})),{align:l="inherit",className:s,component:c,gutterBottom:u=!1,noWrap:g=!1,paragraph:h=!1,variant:f="body1",variantMapping:b=Ze}=a,j=Rt(a,Xr),C=me({},a,{align:l,color:i,className:s,component:c,gutterBottom:u,noWrap:g,paragraph:h,variant:f,variantMapping:b}),v=c||(h?"p":b[f]||Ze[f])||"span",_=Qr(C);return e.jsx(Jr,me({as:v,ref:o,ownerState:C,className:Ft(_.root,s)},j))}),Ke=rn;function Ne(t){const r=new Date(Number(t)*1e3),o=r.getFullYear(),n=(1+r.getMonth()).toString().padStart(2,"0");return`${r.getDate().toString().padStart(2,"0")}/${n}/${o}`}const nn=({twitterHandle:t})=>e.jsx(e.Fragment,{children:e.jsx(p,{direction:"row",children:e.jsx(p,{align:"flex-start",pb:12,children:e.jsxs(S,{children:["Tweet by @",t]})})})}),on=d(p)(({theme:t})=>({position:"absolute",top:"65px",right:"55px",width:"300px",pointerEvents:"none",background:x.dashboardHeader,boxShadow:"0px 1px 6px rgba(0, 0, 0, 0.1)",color:x.primaryText1,zIndex:100,transition:"opacity 0.6s",padding:t.spacing(2,3),[t.breakpoints.down("sm")]:{padding:t.spacing(1,1.5)}})),sn=d(p)`
  width: 22.5%;
`,an=({node:t})=>{if(!t)return null;const{node_type:r,show_title:o,episode_title:n,description:i,label:a,text:l,type:s,twitter_handle:c}=t,u=t.guests;let g=!1,h=!1;u&&(u.length&&u[0]!==null&&(g=!0),typeof u[0]=="object"&&(h=!0));let f=t.image_url;if(s==="twitter_space"&&(f="twitter_placeholder.png"),f==null)switch(r){case"guest":f="person_placeholder2.png";break;default:f="noimage.jpeg"}return r==="topic"?null:e.jsx(on,{borderRadius:8,px:24,py:16,children:r==="tweet"?e.jsx(nn,{twitterHandle:c}):e.jsxs(e.Fragment,{children:[e.jsxs(p,{direction:"row",children:[e.jsx(sn,{}),e.jsx(p,{align:"flex-start",pb:12,children:e.jsx(S,{children:r==null?void 0:r.toUpperCase()})})]}),e.jsxs(p,{direction:"row",children:[e.jsx(p,{pr:12,children:e.jsx(ar,{src:f,type:"person"})}),e.jsxs("div",{children:[s==="guest"?e.jsxs(p,{direction:"column",children:[e.jsx(S,{children:a}),l&&e.jsx(p,{pt:4,children:e.jsxs(S,{color:"primaryText1",kind:"tiny",children:["@",l]})})]}):e.jsx(S,{color:"primaryText1",kind:"tiny",children:o}),e.jsxs(p,{pt:4,children:[r==="clip"||r==="episode"&&e.jsx(S,{color:"primaryText1",children:"Episode"}),r==="clip"?e.jsx(S,{as:"div",kind:"regularBold",children:Ge(i)}):e.jsx(S,{color:"primaryText1",kind:"tiny",children:n})]}),e.jsxs(p,{pt:12,children:[r==="clip"&&e.jsx(S,{color:"primaryText1",children:"Episode"}),e.jsx(S,{color:"primaryText1",kind:"tiny",children:r==="clip"?n:Ge(i)})]}),g&&e.jsxs(p,{pt:12,children:[e.jsx(S,{color:"primaryText1",children:"People"}),e.jsx(p,{pt:4,children:e.jsx(S,{color:"primaryText1",kind:"tiny",children:h?u.map(b=>b.name?b.name:`@${b.twitter_handle}`).join(", "):u==null?void 0:u.join(", ")})})]})]})]})]})})},ln=()=>{const[t]=ee(r=>[r.hoveredNode]);return e.jsxs(cn,{children:[t&&e.jsx("div",{id:"tooltip-portal",children:e.jsx(an,{node:t})}),e.jsx(dt,{})]})},cn=d("div")(({theme:t})=>({position:"absolute",zIndex:1,top:0,left:0,userSelect:"none",pointerEvents:"none",display:"flex",justifyContent:"flex-end",alignItems:"flex-start",height:"100%",width:"100%",padding:"16px",[t.breakpoints.down("sm")]:{top:50}})),dn=({fullSize:t=!0})=>{const r=te(o=>o.sidebarIsOpen);return e.jsx(pn,{align:"center",className:ae({"sidebar-is-open":r&&!t}),justify:"center",children:e.jsx(P,{color:x.SECONDARY_BLUE,size:64})})},pn=d(p)`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  background-color: ${x.black};
  z-index: 1;
`,hn=m.lazy(()=>R(()=>import("./index-4b367f10.js"),["assets/index-4b367f10.js","assets/index-6865c215.js","assets/index-3f17fe3b.css","assets/index-41b2a75e.js","assets/index-27c0e8db.js","assets/react-toastify.esm-22bb4a54.js","assets/react-toastify-b60658ac.css","assets/index-15aedafe.js","assets/useSlotProps-3d116945.js","assets/index-e40a00bc.js","assets/index.esm-6af15a5e.js","assets/InfoIcon-bad0ebb4.js","assets/index-e2b6f25f.js","assets/index-a81519a3.js","assets/Popover-f9928c08.js","assets/Popper-3ee49886.js","assets/index-30d16895.js","assets/PlusIcon-8d1cf88e.js","assets/Selection-53633c89.js","assets/index-34b6b518.js","assets/NoFilterResultIcon-e651ea7b.js","assets/generateCategoricalChart-c02bec87.js","assets/index-29450604.js","assets/CheckIcon-c555d9ea.js"]).then(({SettingsModal:t})=>({default:t}))),un=m.lazy(()=>R(()=>import("./index-705ebb1e.js"),["assets/index-705ebb1e.js","assets/index-6865c215.js","assets/index-3f17fe3b.css","assets/react-toastify.esm-22bb4a54.js","assets/react-toastify-b60658ac.css","assets/index-41b2a75e.js","assets/index-27c0e8db.js","assets/index-f0b50a08.js","assets/index.esm-6af15a5e.js","assets/CheckIcon-c555d9ea.js","assets/index-e40a00bc.js","assets/InfoIcon-bad0ebb4.js"]).then(({AddContentModal:t})=>({default:t}))),xn=m.lazy(()=>R(()=>import("./index-a0d96bda.js"),["assets/index-a0d96bda.js","assets/index-6865c215.js","assets/index-3f17fe3b.css","assets/react-toastify.esm-22bb4a54.js","assets/react-toastify-b60658ac.css","assets/index-41b2a75e.js","assets/index-27c0e8db.js","assets/index-f0b50a08.js","assets/index.esm-6af15a5e.js","assets/CheckIcon-c555d9ea.js","assets/index-e40a00bc.js","assets/InfoIcon-bad0ebb4.js","assets/index-30d16895.js","assets/index-e2b6f25f.js","assets/index-a81519a3.js","assets/Popover-f9928c08.js","assets/useSlotProps-3d116945.js","assets/Popper-3ee49886.js","assets/generateCategoricalChart-c02bec87.js","assets/NoFilterResultIcon-e651ea7b.js","assets/index-15aedafe.js","assets/index-29450604.js","assets/PlusIcon-8d1cf88e.js"]).then(({AddItemModal:t})=>({default:t}))),fn=m.lazy(()=>R(()=>import("./index-ad0b2275.js"),["assets/index-ad0b2275.js","assets/index-6865c215.js","assets/index-3f17fe3b.css","assets/index-41b2a75e.js","assets/index-27c0e8db.js","assets/react-toastify.esm-22bb4a54.js","assets/react-toastify-b60658ac.css","assets/generateCategoricalChart-c02bec87.js","assets/Popover-f9928c08.js","assets/useSlotProps-3d116945.js","assets/InfoIcon-bad0ebb4.js","assets/index.esm-6af15a5e.js","assets/NoFilterResultIcon-e651ea7b.js","assets/index-15aedafe.js","assets/index-29450604.js","assets/index-e40a00bc.js","assets/PlusIcon-8d1cf88e.js","assets/index-e2b6f25f.js","assets/index-a81519a3.js","assets/Popper-3ee49886.js","assets/CheckIcon-c555d9ea.js"]).then(({SourcesTableModal:t})=>({default:t}))),mn=m.lazy(()=>R(()=>import("./index-5c1a0a8a.js"),["assets/index-5c1a0a8a.js","assets/index-6865c215.js","assets/index-3f17fe3b.css","assets/index-41b2a75e.js","assets/index-27c0e8db.js","assets/react-toastify.esm-22bb4a54.js","assets/react-toastify-b60658ac.css","assets/index-e40a00bc.js","assets/index.esm-6af15a5e.js","assets/InfoIcon-bad0ebb4.js","assets/Skeleton-ea9e95d3.js"]).then(({EditNodeNameModal:t})=>({default:t}))),gn=m.lazy(()=>R(()=>import("./index-b437cf06.js"),["assets/index-b437cf06.js","assets/index-6865c215.js","assets/index-3f17fe3b.css","assets/index-41b2a75e.js","assets/index-27c0e8db.js","assets/react-toastify.esm-22bb4a54.js","assets/react-toastify-b60658ac.css","assets/Skeleton-ea9e95d3.js"]).then(({RemoveNodeModal:t})=>({default:t}))),yn=m.lazy(()=>R(()=>import("./index-8a949dcd.js"),["assets/index-8a949dcd.js","assets/index-6865c215.js","assets/index-3f17fe3b.css","assets/index-41b2a75e.js","assets/index-27c0e8db.js","assets/react-toastify.esm-22bb4a54.js","assets/react-toastify-b60658ac.css","assets/index-e2b6f25f.js","assets/index-a81519a3.js","assets/Popover-f9928c08.js","assets/useSlotProps-3d116945.js","assets/Popper-3ee49886.js","assets/index-29450604.js","assets/generateCategoricalChart-c02bec87.js","assets/InfoIcon-bad0ebb4.js","assets/index.esm-6af15a5e.js","assets/NoFilterResultIcon-e651ea7b.js","assets/index-15aedafe.js","assets/index-e40a00bc.js","assets/PlusIcon-8d1cf88e.js","assets/CheckIcon-c555d9ea.js"]).then(({AddNodeEdgeModal:t})=>({default:t}))),jn=()=>e.jsxs(e.Fragment,{children:[e.jsx(xn,{}),e.jsx(un,{}),e.jsx(hn,{}),e.jsx(mn,{}),e.jsx(gn,{}),e.jsx(fn,{}),e.jsx(yn,{})]}),bn=()=>{const t=te(r=>r.appMetaData);return t?e.jsxs(Cn,{children:[e.jsxs(vn,{children:[e.jsx(e.Fragment,{children:t.title&&e.jsx(S,{className:"title",color:"white",children:t.title})}),e.jsx(S,{className:"subtitle",children:" Second Brain"})]}),e.jsx(Gt,{})]}):null},Cn=d(p).attrs({align:"center",direction:"row",grow:1,justify:"flex-start"})`
  height: 64px;
  position: absolute;
  top: 0px;
  left: 64px;
  right: 32px;
  transition: opacity 1s;
  z-index: 99;
  padding: 20px 23px;
`,vn=d.div`
  ${Vt.smallOnly`
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
    color: ${x.GRAY6};
    font-family: Barlow;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0.22px;
  }
`,wn=()=>{const[t,r]=m.useState(!0),o=lr();m.useEffect(()=>{r(!0)},[o]);const n=()=>{r(!1)};return o&&t?e.jsxs(Sn,{align:"center",direction:"column",justify:"center",onClick:n,children:[e.jsx("img",{alt:"screen",src:"jamboard_kiosk.png"}),e.jsxs(p,{align:"center",direction:"column",justify:"center",children:[e.jsx(_e,{children:"Second Brain is currently"}),e.jsx(_e,{style:{fontWeight:600},children:"optimized for Desktop."}),e.jsx(_e,{children:"Mobile support coming soon."})]}),e.jsx(G,{color:"secondary",onClick:n,variant:"contained",children:"Got It"})]}):null},Sn=d(p)`
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.75);
  gap: 28px;
  z-index: 2000000000;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`,_e=d(S)`
  color: #fff;
  text-align: center;
  font-family: Barlow;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  margin: 1px;
`,_n={},Tn=m.createContext(_n),kn=()=>{const[t,r]=m.useState(!1),o=m.useMemo(()=>({isShow:t,setIsShow:r}),[t]);return e.jsx(Tn.Provider,{value:o})},w=d(Br)`
  && {
    color: ${x.white};
    border: none;
    padding: 6px 2px 6px 0;
    color: ${x.GRAY3};
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
`,Ce=d(X)`
  && {
    height: 48px;
    padding: 0 36px;
  }
  &:nth-child(odd) {
    background-color: ${x.BG3};
  }
  &:hover {
    background-color: rgba(97, 138, 255, 0.05);
    .checkbox-section {
      visibility: visible;
    }
  }
  &.checked {
    background-color: rgba(100, 149, 237, 0.2);

    .checkbox-section {
      visibility: visible;
    }
  }
`,ve=d(Or)`
  && {
    border-bottom: 1px solid ${x.black};
    position: sticky;
    top: 0;
    z-index: 1;
    background-color: ${x.BG1};
  }

  ${w} {
    color: ${x.white};
    font-family: Barlow;
    font-size: 11px;
    font-style: normal;
    font-weight: 700;
    line-height: 18px; /* 163.636% */
    letter-spacing: 1.1px;
    text-transform: uppercase;
  }
`,ge=d(G)`
  &:first-child.selected {
    background: ${x.white};
    color: ${x.BG1};
    pointer-events: none;
  }

  & + &.selected {
    background: ${x.white};
    color: ${x.BG1};
    pointer-events: none;
  }

  & + & {
    margin-left: 16px;
  }
`,we=d(p)`
  margin-bottom: 16px;
  padding: 0 36px;
  ${S} {
    margin-bottom: 0;
  }
`,An=({data:t})=>{const r=ee(l=>l.setQueuedSources),[o,n]=m.useState(""),i=async l=>{if(t!=null&&t.length)try{const s=await Ut.enable();await Ht(l,s.pubkey),r(t.filter(c=>c.ref_id!==l))}catch(s){console.warn(s)}},a=async l=>{if(!(!l||!(t!=null&&t.length))){n(l);try{await it(l),r(t==null?void 0:t.filter(s=>s.ref_id!==l))}catch(s){console.warn(s)}finally{n("")}}};return t!=null&&t.length?e.jsxs(be,{component:"table",children:[e.jsx(ve,{children:e.jsxs(X,{component:"tr",children:[e.jsx(w,{className:"empty"}),e.jsx(w,{children:"Type"}),e.jsx(w,{children:"Source"}),e.jsx(w,{}),e.jsx(w,{className:"empty"})]})}),(t==null?void 0:t.length)&&e.jsx("tbody",{children:t==null?void 0:t.map(l=>e.jsxs(Ce,{children:[e.jsx(w,{className:"empty"}),e.jsx(w,{children:Q[l.source_type]}),e.jsx(w,{width:"268px",children:l.source_type==="twitter_handle"?e.jsxs(Xe,{href:`${yt}/${l.source}?open=system`,target:"_blank",children:["@",l.source]}):e.jsx(Xe,{href:`${l.source}?open=system`,target:"_blank",children:l.source})}),e.jsx(w,{className:"cell-center",children:e.jsxs(p,{direction:"row",justify:"space-between",children:[e.jsx("div",{className:"approve-wrapper",children:e.jsx(qe,{className:"centered",onClick:()=>i(l.ref_id),children:e.jsx(Er,{color:x.primaryGreen,fontSize:24})})}),e.jsx("div",{className:"delete-wrapper",children:o===l.ref_id?e.jsx(P,{color:x.white,size:16}):e.jsx(gt,{message:"Are you sure ?",onConfirm:()=>a(l.ref_id),children:e.jsx(qe,{className:"centered",children:e.jsx(Ir,{color:x.primaryRed,fontSize:24})})})})]})}),e.jsx(w,{className:"empty"})]},l.source))})]}):e.jsxs(p,{children:[e.jsx(S,{children:"There is not any results for selected filters"}),e.jsx(Ie,{})]})},qe=d(p)`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  cursor: pointer;
  background: transparent;
  color: ${x.lightBlue500};
  &.centered {
    margin: 0 auto;
  }

  & + & {
    margin-left: 4px;
  }
`,Xe=d.a`
  color: ${x.white};
  text-decoration: underline;
  &:visited {
    color: ${x.white};
  }
  &:hover {
    cursor: pointer;
  }
`,Ln=()=>{const[t,r]=m.useState(!0),[o,n]=m.useState(""),[i,a]=ee(c=>[c.queuedSources,c.setQueuedSources]);m.useEffect(()=>{(async()=>{r(!0);try{const u=await at({approved:"False"});a(u.data)}catch(u){console.warn(u)}finally{r(!1)}})()},[a]);const l=c=>{n(o===c||!c?"":c)},s=i==null?void 0:i.filter(c=>!o||c.source_type===o);return e.jsxs($n,{align:"stretch",direction:"column",justify:"flex-end",children:[e.jsxs(we,{align:"flex-start",justify:"space-between",children:[e.jsx(S,{className:"title",children:"Queued Sources"}),e.jsx(S,{className:"subtitle",children:"This is a queue of pending sources waiting for approval or denial from graph users. If you think a source will provide good content for the graph, you can pay to approve it. Think of this as an investment: you pay to add it to the source table, and if the content is popular you will earn from it. If content is not relevant to the graph, you should deny it."})]}),e.jsxs(p,{className:"filters",direction:"row",pb:16,px:36,children:[e.jsx(ge,{className:ae({selected:!o}),onClick:()=>l(""),size:"small",children:"All"}),Object.keys(Q).map(c=>e.jsx(ge,{className:ae({selected:c===o}),onClick:()=>l(c),size:"small",children:Q[c]},c))]}),e.jsx(En,{align:"center",justify:t?"center":"flex-start",children:t?e.jsx(P,{color:x.white}):e.jsx(An,{data:s})})]})},$n=d(p)`
  flex: 1;

  .title {
    margin-bottom: 32px;
    font-size: 20px;
    color: ${x.white};
    font-family: Barlow;
    font-size: 22px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  .subtitle {
    color: ${x.GRAY3};
    font-family: Barlow;
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  & .filters {
    overflow-x: auto;
  }
`,En=d(p)`
  min-height: 0;
  overflow: auto;
  flex: 1;
  width: 100%;
`,In=({onSearch:t,placeholder:r,activeIcon:o,loadingIcon:n,defaultIcon:i,...a})=>{const[l,s]=m.useState(""),[c,u]=m.useState(!1),g=()=>{s(""),t(""),u(!1)},h=j=>{!j.target.value&&g(),s(j.target.value)},f=j=>{const{value:C}=j.currentTarget;s(C),!c&&(u(!0),setTimeout(()=>{t(C),C||g(),u(!1)},1e3),C||g())},b=()=>c?e.jsx(Qe,{children:e.jsx(Te,{type:"button",children:n})}):e.jsx(Qe,{children:l?e.jsx(Te,{onClick:g,type:"button",children:o}):e.jsx(Te,{type:"button",children:i})});return e.jsxs(Nn,{children:[e.jsx(Pn,{autoComplete:"off",autoCorrect:"off",inputProps:{"aria-label":"search sources"},onChange:h,onKeyDown:j=>{j.key==="Enter"&&f(j)},placeholder:r,value:l,...a}),b()]})},Qe=d(p)`
  top: -50%;
  right: -3%;
  z-index: 3;
  position: absolute;
  transform: translate(-50%, 50%);
`,Te=d(W)`
  font-size: 24px;
`,Nn=d(vt)`
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
`,Pn=d(wt)`
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
    background-color: ${x.BG2};
    padding: 0px 8px 0px 16px !important;
    box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);

    &:focus,
    &:active {
      color: ${x.white};
      background-color: ${x.BG2_ACTIVE_INPUT};
      outline: 1px solid ${x.primaryBlue};
    }

    &:hover {
      background-color: ${x.BG2_ACTIVE_INPUT};
    }

    &::placeholder {
      font-size: 15px;
      text-align: left;
      font-weight: 500;
      line-height: 16px;
      letter-spacing: 0em;
      font-family: Barlow;
      color: ${x.GRAY7};
    }
  }
  width: 100%;
`,Bn=({data:t,canEdit:r=!1})=>{const o=ee(s=>s.setSources),[n,i]=m.useState(""),a=async(s,c)=>{if(t!=null&&t.length)try{await Yt(s,c);const u=t==null?void 0:t.findIndex(h=>h.ref_id===s),g=[...t];g[u]={...g[u],source:c.source},o(g)}catch(u){console.warn(u)}},l=async s=>{if(!(!s||!(t!=null&&t.length))){i(s);try{await it(s),o(t==null?void 0:t.filter(c=>c.ref_id!==s))}catch(c){console.warn(c)}finally{i("")}}};return t!=null&&t.length?e.jsxs(be,{"aria-label":"a dense table",component:"table",id:"sources-table",size:"small",children:[e.jsx(ve,{children:e.jsxs(X,{component:"tr",children:[e.jsx(w,{className:"empty"}),e.jsx(w,{children:"Type"}),e.jsx(w,{align:"left",children:"Source"}),r&&e.jsx(w,{align:"left"}),e.jsx(w,{className:"empty"})]})}),e.jsx(zr,{component:"tbody",children:t==null?void 0:t.map(s=>e.jsxs(Ce,{children:[e.jsx(w,{className:"empty"}),e.jsx(w,{align:"left",children:Q[s.source_type]}),e.jsx(w,{align:"left",children:e.jsx(On,{condition:r,wrapper:c=>e.jsx(Mn,{id:s.ref_id,onSave:u=>a(s.ref_id,{source:u,source_type:s.source_type}),value:s.source,children:c}),children:s.source_type===Fe||s.source_type===We||s.source_type===Ve?e.jsxs(e.Fragment,{children:[s.source_type===Fe&&e.jsxs(ke,{href:`${yt}/${s.source}`,target:"_blank",children:["@",s.source]}),s.source_type===We&&e.jsx(ke,{href:`${s.source}${s.source.includes("?")?"&":"?"}open=system`,target:"_blank",children:s.source}),s.source_type===Ve&&e.jsx(ke,{href:s.source,target:"_blank",children:s.source})]}):e.jsx("div",{children:s.source})})}),r&&e.jsx(w,{align:"left",children:e.jsx("div",{className:"delete-wrapper",id:`delete-${s.source}`,children:n===s.ref_id?e.jsx(At,{"data-testid":`delete-loader-${s.ref_id}`,children:e.jsx(P,{color:x.white,size:16})}):e.jsx(gt,{"data-testid":`delete-icon-${s.ref_id}`,message:"Are you sure?",onConfirm:()=>l(s.ref_id),children:e.jsx(q,{className:"centered","data-testid":`delete-icon-${s.ref_id}`,children:e.jsx(Gr,{})})})})}),e.jsx(w,{className:"empty"})]},s.source))})]}):e.jsxs(Dn,{children:[e.jsx(Mr,{}),e.jsx(S,{className:"text",children:"There is not any results for selected filters"})]})};function On({condition:t,wrapper:r,children:o}){return t?r(o):o}const Mn=({value:t,onSave:r,id:o,children:n})=>{const[i,a]=m.useState(!1),[l,s]=m.useState(t),[c,u]=m.useState(!1),g=async()=>{if(o){u(!0);try{await r(l),a(!1)}catch(h){console.warn(h)}finally{u(!1)}}};return e.jsx("div",{children:i?e.jsxs(zn,{align:"center",direction:"row",children:[e.jsx(Vr,{className:"editable-cell__input",name:"cell-input",onChange:h=>s(h),value:l}),e.jsx(q,{align:"center",justify:"center",children:c?e.jsx(At,{"data-testid":`edit-loader-${o}`,children:e.jsx(P,{color:x.white,size:12})}):e.jsx(Nr,{"data-testid":`check-icon-${o}`,onClick:g})}),e.jsx(q,{align:"center",className:"secondary",justify:"center",onClick:()=>a(!1),children:e.jsx(mt,{})})]}):e.jsxs(Rn,{direction:"row",children:[n,e.jsx(q,{onClick:()=>a(!0),children:e.jsx(Pr,{"data-testid":`edit-icon-${o}`,size:20})})]})})},zn=d(p)`
  display: flex;
  width: 250px;
  border: 2px solid ${x.lightBlue300};
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
`,q=d(p)`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  cursor: pointer;
  background: transparent;
  align-items: center;
  justify-content: center;
  &.centered {
    margin: 0 auto;
  }

  & + & {
    margin-left: 4px;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`,Dn=d(p)`
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
    color: ${x.GRAY6};
  }
`,Rn=d(p)`
  display: flex;
  padding: 4px;
  position: relative;

  ${q} {
    visibility: hidden;
  }

  &:hover {
    ${q} {
      visibility: visible;
    }
  }
`,ke=d.a`
  color: ${x.white};
  text-decoration: underline;
  &:visited {
    color: ${x.white};
  }
`,At=d(p)`
  display: flex;
  justify-content: center;
  align-items: center;
`,Fn=()=>{const[t,r]=m.useState(!0),[o,n]=m.useState(""),[i,a]=ee(h=>[h.sources,h.setSources]),[l]=le(h=>[h.isAdmin]),[s,c]=m.useState("");m.useEffect(()=>{(async()=>{r(!0);try{const f=await at();a(f.data)}catch(f){console.warn(f)}finally{r(!1)}})()},[a]);const u=h=>{n(o===h||!h?"":h)},g=m.useMemo(()=>i==null?void 0:i.filter(h=>(!o||h.source_type===o)&&(h.source.toLowerCase().startsWith(s.toLowerCase())||h.source.toLowerCase().includes(s.toLowerCase()))),[s,o,i]);return e.jsxs(Wn,{align:"stretch",direction:"column",justify:"flex-end",children:[e.jsx(we,{align:"center",direction:"row",justify:"space-between",children:e.jsx(S,{className:"title",children:"Sources for this Graph"})}),e.jsx(Gn,{children:e.jsx(In,{activeIcon:e.jsx(ce,{}),defaultIcon:e.jsx(pt,{}),loadingIcon:e.jsx(P,{color:x.PRIMARY_BLUE,size:24}),onSearch:c,placeholder:"Find Source"})}),e.jsxs(p,{className:"filters",direction:"row",pb:16,px:36,children:[e.jsx(ge,{className:ae({selected:!o}),onClick:()=>u(""),size:"small",children:"All"}),Object.keys(Q).map(h=>e.jsx(ge,{className:ae({selected:h===o}),onClick:()=>u(h),size:"small",children:Q[h]},h))]}),e.jsx(Vn,{align:"center",justify:t?"center":"flex-start",children:t?e.jsx(P,{color:x.white}):e.jsx(Bn,{canEdit:l,data:g})})]})},Wn=d(p)`
  flex: 1;
  .title {
    font-size: 20px;
    color: ${x.white};
    font-family: Barlow;
    font-size: 22px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  & .filters {
    overflow-x: auto;
  }
`,Vn=d(p)`
  min-height: 0;
  overflow: auto;
  flex: 1;
  width: 100%;
`,Gn=d(p)`
  margin: 0 0 16px 36px;
`,Un=({placeholder:t,activeIcon:r,loadingIcon:o,defaultIcon:n,loading:i,...a})=>{const[l,s]=O(C=>[C.filters,C.setFilters]),[c,u]=m.useState(""),g=()=>{s({search:""})},h=m.useCallback(C=>{s({search:C})},[s]),f=m.useMemo(()=>Me.debounce(h,300),[h]),b=C=>{const{value:v}=C.target;u(v),C.target.value||s({search:""}),C.target.value.length>2&&f(C.target.value)},j=()=>i?e.jsx(Je,{children:e.jsx(Ae,{type:"button",children:o})}):e.jsx(Je,{children:l.search?e.jsx(Ae,{onClick:g,type:"button",children:r}):e.jsx(Ae,{type:"button",children:n})});return e.jsxs(Hn,{children:[e.jsx(Yn,{autoComplete:"off",autoCorrect:"off",inputProps:{"aria-label":"search sources"},onChange:b,placeholder:t,value:c,...a}),j()]})},Je=d(p)`
  top: -50%;
  right: -3%;
  z-index: 3;
  position: absolute;
  transform: translate(-50%, 50%);
`,Ae=d(W)`
  font-size: 24px;
`,Hn=d(vt)`
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
`,Yn=d(wt)`
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
    background-color: ${x.BG2};
    padding: 0px 8px 0px 16px !important;
    box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);

    &:focus,
    &:active {
      color: ${x.white};
      background-color: ${x.BG2_ACTIVE_INPUT};
      outline: 1px solid ${x.primaryBlue};
    }

    &:hover {
      background-color: ${x.BG2_ACTIVE_INPUT};
    }

    &::placeholder {
      font-size: 15px;
      text-align: left;
      font-weight: 500;
      line-height: 16px;
      letter-spacing: 0em;
      font-family: Barlow;
      color: ${x.GRAY7};
    }
  }
  width: 100%;
`,Lt=t=>e.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 6 10",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M6 5L6.90043e-08 9.33013L4.47556e-07 0.669872L6 5Z",fill:"currentColor"})}),$t=t=>e.jsxs("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M4.5 6.04386L7.83333 2.83398V13.6673",stroke:"white","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}),e.jsx("path",{d:"M15.5 13.9581L12.1667 17.168L12.1667 6.33463",stroke:"white","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"})]}),Et=t=>e.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 10 10",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("circle",{cx:"5",cy:"5",r:"4.5",fill:"currentColor",stroke:"#6B7A8D"})}),Zn=({selectedType:t,setSelectedType:r})=>{const[o,n]=m.useState([]);m.useEffect(()=>{(async()=>{try{const{data:s}=await Zt();n(s.edge_types)}catch(s){console.warn(s)}})()},[n]);const i=l=>({label:l,value:l}),a=l=>{r((l==null?void 0:l.value)||"")};return e.jsx(Re,{onSelect:a,options:o.map(i),selectedValue:t?i(t):null})},mi={label:"Not Selected",value:"Not Selected"},gi={label:"No Parent",value:"No Parent"},yi=[{label:"number",value:"int"},{label:"string",value:"string"}],It=[{label:"Corporation",value:"Corporation"},{label:"Event",value:"Event"},{label:"Image",value:"Image"},{label:"Organization",value:"Organization"},{label:"Person",value:"Person"},{label:"Place",value:"Place"},{label:"Project",value:"Project"},{label:"Software",value:"Software"},{label:"Topic",value:"Topic"}],Kn=({onSelect:t,selectedValue:r})=>{const[o,n]=m.useState([]),[i,a]=m.useState(!1),l=async f=>{const b={is_muted:"False",sort_by:ze,search:f,skip:"0",limit:"1000"};a(!0);try{const j=await lt(b.search);n(j.data)}catch{n([])}finally{a(!1)}},s=m.useMemo(()=>Me.debounce(l,300),[]),c=f=>{if(!f){n([]);return}f.length>2&&s(f)},u=f=>{const b=f?o.find(j=>j.ref_id===f.value):null;t(b||null)},g=f=>({label:f.search_value,value:f.ref_id,type:f.node_type}),h=f=>f.map(g);return r?e.jsxs(p,{align:"center",basis:"100%",direction:"row",grow:1,shrink:1,children:[e.jsx("span",{children:r.search_value}),e.jsx(W,{onClick:()=>t(null),size:"small",children:e.jsx(ce,{})})]}):e.jsx(Re,{handleInputChange:c,isLoading:i,onSelect:u,options:h(o)||It,selectedValue:r?g(r):null})},qn=({from:t,onSelect:r,selectedType:o,setSelectedType:n,isSwapped:i,setIsSwapped:a,selectedToNode:l})=>e.jsxs(p,{children:[e.jsx(p,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(p,{align:"center",direction:"row",children:e.jsx(Xn,{children:"Add edge"})})}),e.jsxs(eo,{swap:i,children:[e.jsx(p,{children:e.jsx(to,{disabled:!0,label:i?"To":"From",swap:i,value:t})}),e.jsxs(p,{my:16,children:[e.jsx(Jn,{children:"Type"}),e.jsx(Zn,{selectedType:o,setSelectedType:n})]}),e.jsx(p,{children:e.jsxs(ro,{children:[e.jsx(no,{children:i?"From":"To"}),e.jsx(Kn,{onSelect:r,selectedValue:l})]})}),e.jsxs(Qn,{children:[e.jsx(oo,{children:e.jsx(Et,{})}),e.jsx(so,{onClick:a,children:e.jsx($t,{})}),e.jsx(io,{children:e.jsx(Lt,{})})]})]})]}),Xn=d(S)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,Qn=d.div`
  position: absolute;
  top: 26px;
  bottom: 26px;
  left: 4px;
  width: 35px;
  border-left: 1.5px solid #6b7a8d4d;
  border-top: 1.5px solid #6b7a8d4d;
  border-bottom: 1.5px solid #6b7a8d4d;
  border-radius: 12px 0 0 12px;
`,Jn=d.label`
  background-color: #23252f;
  color: #bac1c6;
  font-size: 13px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0.01em;
  text-align: left;
`,eo=d.div`
  position: relative;
  color: white;
  font-family: 'Barlow';
  display: flex;
  flex-direction: ${t=>t.swap?"column-reverse":"column"};
  margin-bottom: 10px;
  padding-left: 38px;
`,to=d(_t)`
  position: relative;
  width: 100%;
  padding: 16px;
  gap: 10px;
  border-radius: 6px;
  border: 1px solid #6b7a8d4d;
  opacity: 0px;
  display: flex;
`,ro=d.div`
  position: relative;
  width: 100%;
  padding: 15px;
  gap: 10px;
  border-radius: 6px;
  border: 1.4px solid #6b7a8d4d;
  opacity: 0px;
  display: flex;
  align-items: center;
`,no=d.label`
  color: #bac1c6;
  background-color: #23252f;
  font-size: 13px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0.01em;
  text-align: left;
  position: absolute;
  left: 15px;
  top: -10px;
`,oo=d.div`
  position: absolute;
  top: 0;
  right: 0;
  transform: translateY(-50%) translateX(50%);
  color: #23252f;
`,so=d.div`
  position: absolute;
  color: transparent;
  top: 50%;
  left: 0;
  transform: translateY(-50%) translateX(-50%);
  cursor: pointer;
  width: 32px;
  height: 32px;
  background-color: #303342;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
`,io=d.div`
  position: absolute;
  bottom: 0;
  right: 0;
  transform: translateY(10px) translateX(3px);
  color: #6b7a8d;
  line-height: 1;
`,ao=({topic:t,onClose:r})=>{const{close:o}=V("addEdge"),[n]=O(v=>[v.data]),i=de({mode:"onChange"}),[a,l]=m.useState(!1),[s,c]=m.useState(!1),[u,g]=m.useState(""),[h,f]=m.useState(null),b=()=>{r(),o()},j=async()=>{if(!(!h||!n)){c(!0);try{await Kt({from:t.ref_id,to:h==null?void 0:h.ref_id,relationship:u});const{ref_id:v}=t,{ref_id:_}=h;if(n){const A={...n};A[v]={...A[v],edgeList:[...A[v].edgeList,u]},A[_]&&(A[_]={...A[_],edgeList:[...A[_].edgeList,u]}),O.setState({data:A})}b()}catch(v){console.warn(v)}finally{c(!1)}}},C=s||!h||!u;return e.jsx(De,{id:"addEdge",kind:"small",onClose:b,preventOutsideClose:!0,children:e.jsxs(pe,{...i,children:[e.jsx(qn,{from:t.name,isSwapped:a,onSelect:f,selectedToNode:h,selectedType:u,setIsSwapped:()=>l(!a),setSelectedType:g}),e.jsxs(G,{color:"secondary",disabled:C,onClick:j,size:"large",variant:"contained",children:["Confirm",s&&e.jsx(P,{color:x.BLUE_PRESS_STATE,size:10})]})]})})},lo=()=>e.jsxs(p,{children:[e.jsx(p,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(p,{align:"center",direction:"row",children:e.jsx(co,{children:"Edit topic"})})}),e.jsx(p,{mb:12,children:e.jsx(se,{id:"cy-topic",maxLength:50,name:"name",placeholder:"Add your topic",rules:{...qt}})})]}),co=d(S)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,po=({topic:t,onClose:r})=>{const{close:o}=V("editTopic"),[n]=O(b=>[b.data]),i=de({mode:"onChange"}),{watch:a,setValue:l,reset:s}=i,[c,u]=m.useState(!1);m.useEffect(()=>(t&&l("name",t==null?void 0:t.name),()=>{s()}),[t,l,s]);const g=a("name"),h=()=>{r(),o()},f=async()=>{u(!0);try{if(await je((t==null?void 0:t.ref_id)||"",{name:g.trim()}),n){const b={...n};b[t==null?void 0:t.ref_id].name=g.trim(),O.setState({data:b})}h()}catch(b){console.warn(b)}finally{u(!1)}};return e.jsx(De,{id:"editTopic",kind:"regular",onClose:h,preventOutsideClose:!0,children:e.jsxs(pe,{...i,children:[e.jsx(lo,{}),e.jsxs(G,{color:"secondary",disabled:c,onClick:f,size:"large",variant:"contained",children:["Save",c&&e.jsx(P,{color:x.BLUE_PRESS_STATE,size:10})]})]})})},ho=({onSelect:t,selectedValue:r})=>{const[o,n]=m.useState([]),[i,a]=m.useState(!1),l=async f=>{const b={is_muted:"False",sort_by:ze,search:f,skip:"0",limit:"1000"};a(!0);try{const j=await lt(b.search);n(j.data)}catch{n([])}finally{a(!1)}},s=m.useMemo(()=>Me.debounce(l,300),[]),c=f=>{if(!f){n([]);return}f.length>2&&s(f)},u=f=>{const b=f?o.find(j=>j.ref_id===f.value):null;t(b||null)},g=f=>({label:f.search_value,value:f.ref_id,type:f.node_type}),h=f=>f.map(g);return r?e.jsxs(p,{align:"center",basis:"100%",direction:"row",grow:1,shrink:1,children:[e.jsx("span",{children:r.search_value}),e.jsx(W,{onClick:()=>t(null),size:"small",children:e.jsx(ce,{})})]}):e.jsx(Re,{handleInputChange:c,isLoading:i,onSelect:u,options:h(o)||It,selectedValue:r?g(r):null})},uo=({from:t,onSelect:r,selectedToNode:o,isSwapped:n,setIsSwapped:i})=>e.jsxs(p,{children:[e.jsx(p,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(p,{align:"center",direction:"row",children:e.jsx(xo,{children:"Merge topic"})})}),e.jsxs(go,{swap:n,children:[e.jsx(fo,{children:e.jsx(yo,{disabled:!0,label:n?"To":"From",swap:n,value:t})}),e.jsxs(p,{my:16,children:[e.jsx(bo,{children:"Type"}),e.jsx(S,{children:"IS AlIAS"})]}),e.jsx(p,{children:e.jsxs(jo,{children:[e.jsx(Co,{children:n?"From":"To"}),e.jsx(ho,{onSelect:r,selectedValue:o})]})}),e.jsxs(mo,{children:[e.jsx(vo,{children:e.jsx(Et,{})}),e.jsx(wo,{onClick:i,children:e.jsx($t,{})}),e.jsx(So,{children:e.jsx(Lt,{})})]})]})]}),xo=d(S)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,fo=d(p)`
  flex: 1 1 100%;
`,mo=d.div`
  position: absolute;
  top: 26px;
  bottom: 26px;
  left: 4px;
  width: 35px;
  border-left: 1.5px solid #6b7a8d4d;
  border-top: 1.5px solid #6b7a8d4d;
  border-bottom: 1.5px solid #6b7a8d4d;
  border-radius: 12px 0 0 12px;
`,go=d.div`
  position: relative;
  color: white;
  font-family: 'Barlow';
  display: flex;
  flex-direction: ${t=>t.swap?"column-reverse":"column"};
  margin-bottom: 10px;
  padding-left: 38px;
`,yo=d(_t)`
  position: relative;
  width: 100%;
  padding: 16px;
  gap: 10px;
  border-radius: 6px;
  border: 1px solid #6b7a8d4d;
  opacity: 0px;
  display: flex;
`,jo=d.div`
  position: relative;
  width: 100%;
  padding: 15px;
  gap: 10px;
  border-radius: 6px;
  border: 1.4px solid #6b7a8d4d;
  opacity: 0px;
  display: flex;
  align-items: center;
`,bo=d.label`
  background-color: #23252f;
  color: #bac1c6;
  font-size: 13px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0.01em;
  text-align: left;
`,Co=d.label`
  color: #bac1c6;
  background-color: #23252f;
  font-size: 13px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0.01em;
  text-align: left;
  position: absolute;
  left: 15px;
  top: -10px;
`,vo=d.div`
  position: absolute;
  top: 0;
  right: 0;
  transform: translateY(-50%) translateX(50%);
  color: #23252f;
`,wo=d.div`
  position: absolute;
  color: transparent;
  top: 50%;
  left: 0;
  transform: translateY(-50%) translateX(-50%);
  cursor: pointer;
  width: 32px;
  height: 32px;
  background-color: #303342;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
`,So=d.div`
  position: absolute;
  bottom: 0;
  right: 0;
  transform: translateY(10px) translateX(3px);
  color: #6b7a8d;
  line-height: 1;
`,_o=({topic:t,onClose:r})=>{const{close:o}=V("mergeTopic"),[n,i,a]=O(T=>[T.data,T.ids,T.total]),l=de({mode:"onChange"}),{watch:s,setValue:c,reset:u}=l,[g,h]=m.useState(!1),[f,b]=m.useState(!1),[j,C]=m.useState(null);m.useEffect(()=>(t&&c("name",t==null?void 0:t.name),()=>{u()}),[t,c,u]);const v=s("name"),_=()=>{r(),o()},A=async()=>{if(!(!j||!n)){h(!0);try{await Xt({from:t.ref_id,to:j==null?void 0:j.ref_id});const{ref_id:T}=t;if(n[T]={...n[T],edgeList:[Dr],edgeCount:n[T].edgeCount-1},O.setState({ids:i.filter(E=>E!==j.ref_id),total:a-1}),n){const E={...n};E[t==null?void 0:t.ref_id].name=v.trim(),O.setState({data:E})}_()}catch(T){console.warn(T)}finally{h(!1)}}};return e.jsx(De,{id:"mergeTopic",kind:"small",onClose:_,preventOutsideClose:!0,children:e.jsxs(pe,{...l,children:[e.jsx(uo,{from:t.name,isSwapped:f,onSelect:C,selectedToNode:j,setIsSwapped:()=>b(!f)}),e.jsxs(G,{color:"secondary",disabled:g,onClick:A,size:"large",variant:"contained",children:["Merge topics",g&&e.jsx(P,{color:x.BLUE_PRESS_STATE,size:10})]})]})})},To=t=>e.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M7.37516 8.625V11.3334C7.37516 11.5104 7.43508 11.6589 7.55491 11.7786C7.67476 11.8984 7.82326 11.9583 8.00041 11.9583C8.17758 11.9583 8.32599 11.8984 8.44564 11.7786C8.5653 11.6589 8.62512 11.5104 8.62512 11.3334V8.625H11.3335C11.5106 8.625 11.659 8.56508 11.7788 8.44525C11.8986 8.3254 11.9585 8.1769 11.9585 7.99975C11.9585 7.82258 11.8986 7.67417 11.7788 7.55452C11.659 7.43487 11.5106 7.37504 11.3335 7.37504H8.62512V4.66669C8.62512 4.4896 8.56521 4.34117 8.44537 4.22137C8.32553 4.1016 8.17702 4.04171 7.99987 4.04171C7.82271 4.04171 7.6743 4.1016 7.55464 4.22137C7.43499 4.34117 7.37516 4.4896 7.37516 4.66669V7.37504H4.66681C4.48973 7.37504 4.3413 7.43496 4.22152 7.55479C4.10173 7.67464 4.04183 7.82314 4.04183 8.00029C4.04183 8.17746 4.10173 8.32587 4.22152 8.44552C4.3413 8.56517 4.48973 8.625 4.66681 8.625H7.37516ZM8.00154 15.9167C6.90659 15.9167 5.8774 15.7089 4.91395 15.2933C3.9505 14.8778 3.11243 14.3138 2.39975 13.6015C1.68705 12.8891 1.12284 12.0514 0.7071 11.0884C0.291364 10.1253 0.0834961 9.09636 0.0834961 8.00142C0.0834961 6.90647 0.291274 5.87728 0.70683 4.91383C1.12239 3.95037 1.68634 3.11231 2.3987 2.39963C3.11108 1.68693 3.94878 1.12272 4.91181 0.706979C5.87482 0.291243 6.9038 0.083374 7.99875 0.083374C9.09369 0.083374 10.1229 0.291153 11.0863 0.706708C12.0498 1.12226 12.8879 1.68622 13.6005 2.39858C14.3132 3.11096 14.8774 3.94866 15.2932 4.91169C15.7089 5.8747 15.9168 6.90368 15.9168 7.99863C15.9168 9.09357 15.709 10.1228 15.2935 11.0862C14.8779 12.0497 14.3139 12.8877 13.6016 13.6004C12.8892 14.3131 12.0515 14.8773 11.0885 15.2931C10.1255 15.7088 9.09648 15.9167 8.00154 15.9167ZM8.00014 14.6667C9.86125 14.6667 11.4376 14.0209 12.7293 12.7292C14.021 11.4375 14.6668 9.86113 14.6668 8.00002C14.6668 6.13891 14.021 4.56252 12.7293 3.27085C11.4376 1.97919 9.86125 1.33335 8.00014 1.33335C6.13903 1.33335 4.56264 1.97919 3.27098 3.27085C1.97931 4.56252 1.33348 6.13891 1.33348 8.00002C1.33348 9.86113 1.97931 11.4375 3.27098 12.7292C4.56264 14.0209 6.13903 14.6667 8.00014 14.6667Z",fill:"currentColor"})}),ko=t=>e.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 12 12",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M10.1765 0.310088L4.72809 5.70971C4.63832 5.79868 4.56637 5.90372 4.51607 6.01926L3.74627 7.78746C3.63822 8.03565 3.89191 8.28707 4.14234 8.17999L5.92651 7.41707C6.04309 7.36722 6.14907 7.29592 6.23885 7.20695L11.6872 1.80733C12.1044 1.39388 12.1044 0.723539 11.6872 0.310088C11.27 -0.103363 10.5936 -0.103363 10.1765 0.310088ZM9.80835 7.14088C9.80835 6.81895 10.072 6.55777 10.3969 6.55777C10.723 6.55777 10.9854 6.82017 10.9854 7.14088L10.9191 10.2508C10.9191 11.2153 10.1489 12.0001 9.17571 12.0001H1.74343C0.79227 12.0001 0 11.2153 0 10.2289V2.84292C0 1.89999 0.79227 1.11523 1.74343 1.11523L5.29651 1.11548C5.62264 1.11548 5.88501 1.37666 5.88501 1.69858C5.88501 2.0205 5.62141 2.28168 5.29651 2.28168H1.7655C1.44134 2.28168 1.177 2.54335 1.177 2.86479V10.2508C1.177 10.5722 1.44134 10.8339 1.7655 10.8339H9.21985C9.54402 10.8339 9.80835 10.5722 9.80835 10.2508V7.14088Z",fill:"currentColor"})}),Ao=t=>e.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 12 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M1.33317 15.5L0.166504 14.3333L4.18734 10.2917C4.50678 9.97222 4.74984 9.61111 4.9165 9.20833C5.08317 8.80556 5.1665 8.38194 5.1665 7.9375L5.1665 3.6875L3.83317 5L2.6665 3.83333L5.99984 0.5L9.33317 3.83333L8.1665 5L6.83317 3.6875L6.83317 7.9375C6.83317 8.38194 6.9165 8.80556 7.08317 9.20833C7.24984 9.61111 7.49289 9.97222 7.81234 10.2917L11.8332 14.3333L10.6665 15.5L5.99984 10.8333L1.33317 15.5Z",fill:"currentColor"})}),Le=t=>e.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 12 8",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M0.333496 7.66704V6.66706H3.91681V7.66704H0.333496ZM0.333496 4.50037V3.50041H7.7886V4.50037H0.333496ZM0.333496 1.33372V0.33374H11.6668V1.33372H0.333496Z",fill:"currentColor"})}),et=t=>e.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 16 15",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M14.0716 15L10.8994 11.7764C10.437 11.9597 9.96181 12.0919 9.47381 12.1732C8.98581 12.2545 8.49002 12.2952 7.98643 12.2952C6.33597 12.2952 4.82448 11.8457 3.45194 10.9466C2.07941 10.0476 0.991584 8.86271 0.188459 7.39193C0.123124 7.27666 0.0753836 7.15933 0.045238 7.03994C0.0150793 6.92055 0 6.7991 0 6.67559C0 6.55208 0.0163338 6.42935 0.0490013 6.30739C0.0816688 6.18543 0.13067 6.06938 0.196005 5.95925C0.508607 5.42714 0.84081 4.91226 1.19261 4.41462C1.54443 3.91699 1.95353 3.47673 2.41992 3.09386L0.24877 0.846015L1.07501 0L14.8978 14.154L14.0716 15ZM7.98643 9.94854C8.16032 9.94854 8.32642 9.93799 8.48473 9.91689C8.64305 9.89579 8.7976 9.84973 8.94838 9.77871L4.95591 5.69059C4.89158 5.84498 4.84786 6.00324 4.82475 6.16535C4.80162 6.32745 4.79005 6.49753 4.79005 6.67559C4.79005 7.58645 5.10039 8.35966 5.72108 8.99521C6.34176 9.63076 7.09688 9.94854 7.98643 9.94854ZM13.4384 10.3561L10.9792 7.85816C11.0456 7.66673 11.0961 7.47375 11.1308 7.27922C11.1655 7.0847 11.1828 6.88349 11.1828 6.67559C11.1828 5.76473 10.8725 4.99152 10.2518 4.35597C9.63109 3.72042 8.87598 3.40264 7.98643 3.40264C7.78339 3.40264 7.58689 3.42168 7.39692 3.45976C7.20694 3.49784 7.02099 3.56011 6.83907 3.64657L4.87751 1.64575C5.37606 1.44402 5.88441 1.29529 6.40257 1.19957C6.92071 1.10385 7.44867 1.05599 7.98643 1.05599C9.64191 1.05599 11.1604 1.50756 12.542 2.41072C13.9236 3.31387 15.0134 4.50598 15.8115 5.98705C15.8718 6.08894 15.9183 6.19829 15.951 6.31511C15.9837 6.43192 16 6.55208 16 6.67559C16 6.7991 15.9857 6.91926 15.957 7.03607C15.9284 7.15289 15.8839 7.26225 15.8236 7.36414C15.52 7.94669 15.1738 8.49038 14.7848 8.99521C14.3958 9.50005 13.947 9.95369 13.4384 10.3561ZM10.0912 6.95657L7.73162 4.54816C8.06131 4.48126 8.38246 4.50545 8.69506 4.62072C9.00767 4.736 9.27754 4.9156 9.5047 5.15952C9.7369 5.40036 9.90451 5.67723 10.0075 5.99012C10.1106 6.30301 10.1385 6.62516 10.0912 6.95657Z",fill:"currentColor"})}),tt=t=>e.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 18 13",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M9.00204 9.98073C9.94628 9.98073 10.7483 9.65024 11.408 8.98927C12.0677 8.32829 12.3976 7.52567 12.3976 6.58142C12.3976 5.63718 12.0671 4.8352 11.4061 4.17548C10.7451 3.51576 9.9425 3.1859 8.99825 3.1859C8.05401 3.1859 7.25203 3.51638 6.59231 4.17735C5.93259 4.83834 5.60273 5.64096 5.60273 6.58521C5.60273 7.52944 5.93321 8.33142 6.59419 8.99115C7.25517 9.65087 8.05779 9.98073 9.00204 9.98073ZM9.00014 8.83331C8.37514 8.83331 7.84389 8.61456 7.40639 8.17706C6.96889 7.73956 6.75014 7.20831 6.75014 6.58331C6.75014 5.95831 6.96889 5.42706 7.40639 4.98956C7.84389 4.55206 8.37514 4.33331 9.00014 4.33331C9.62514 4.33331 10.1564 4.55206 10.5939 4.98956C11.0314 5.42706 11.2501 5.95831 11.2501 6.58331C11.2501 7.20831 11.0314 7.73956 10.5939 8.17706C10.1564 8.61456 9.62514 8.83331 9.00014 8.83331ZM9.00129 12.4166C7.08494 12.4166 5.33884 11.888 3.76298 10.8309C2.18713 9.77374 1.02688 8.35788 0.282227 6.58331C1.02688 4.80874 2.18675 3.39288 3.76185 2.33573C5.33694 1.27858 7.08265 0.75 8.999 0.75C10.9153 0.75 12.6614 1.27858 14.2373 2.33573C15.8132 3.39288 16.9734 4.80874 17.7181 6.58331C16.9734 8.35788 15.8135 9.77374 14.2384 10.8309C12.6634 11.888 10.9176 12.4166 9.00129 12.4166Z",fill:"currentColor"})}),Lo=t=>e.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:e.jsxs("g",{opacity:"0.4",children:[e.jsx("mask",{id:"mask0_5162_13105",maskUnits:"userSpaceOnUse",x:"0",y:"0",width:"24",height:"24",children:e.jsx("rect",{width:"1em",height:"1em",fill:"currentColor"})}),e.jsx("g",{mask:"url(#mask0_5162_13105)",children:e.jsx("path",{d:"M19.7615 21.8691L15.7154 17.8537C15.1256 18.0819 14.5195 18.2467 13.8971 18.348C13.2747 18.4493 12.6423 18.4999 12 18.4999C9.89486 18.4999 7.96698 17.94 6.21635 16.8201C4.46572 15.7002 3.07822 14.2243 2.05385 12.3922C1.97052 12.2486 1.90963 12.1025 1.87118 11.9538C1.83271 11.8051 1.81348 11.6538 1.81348 11.4999C1.81348 11.3461 1.83431 11.1932 1.87598 11.0413C1.91764 10.8894 1.98014 10.7448 2.06348 10.6076C2.46219 9.9448 2.88591 9.30345 3.33463 8.68357C3.78336 8.0637 4.30516 7.51531 4.90003 7.0384L2.13078 4.2384L3.18463 3.18457L20.8153 20.8153L19.7615 21.8691ZM12 15.5768C12.2218 15.5768 12.4336 15.5637 12.6356 15.5374C12.8375 15.5111 13.0346 15.4537 13.2269 15.3653L8.13463 10.273C8.05258 10.4653 7.99681 10.6624 7.96733 10.8643C7.93783 11.0663 7.92308 11.2781 7.92308 11.4999C7.92308 12.6345 8.31891 13.5977 9.11058 14.3893C9.90224 15.181 10.8654 15.5768 12 15.5768ZM18.9538 16.0845L15.8173 12.973C15.9019 12.7345 15.9663 12.4941 16.0105 12.2518C16.0548 12.0095 16.0769 11.7589 16.0769 11.4999C16.0769 10.3653 15.681 9.40219 14.8894 8.61052C14.0977 7.81885 13.1346 7.42302 12 7.42302C11.741 7.42302 11.4904 7.44674 11.2481 7.49417C11.0058 7.5416 10.7686 7.61917 10.5366 7.72687L8.03463 5.23457C8.67051 4.98329 9.3189 4.79803 9.9798 4.6788C10.6407 4.55956 11.3141 4.49995 12 4.49995C14.1115 4.49995 16.0484 5.06245 17.8105 6.18745C19.5727 7.31245 20.9628 8.79738 21.9807 10.6422C22.0576 10.7692 22.1169 10.9054 22.1586 11.0509C22.2003 11.1964 22.2211 11.3461 22.2211 11.4999C22.2211 11.6538 22.2028 11.8034 22.1663 11.9489C22.1297 12.0945 22.073 12.2307 21.9961 12.3576C21.6089 13.0832 21.1673 13.7605 20.6711 14.3893C20.175 15.0182 19.6025 15.5832 18.9538 16.0845ZM14.6846 11.8499L11.675 8.84992C12.0955 8.76659 12.5051 8.79671 12.9038 8.9403C13.3025 9.0839 13.6468 9.30761 13.9365 9.61145C14.2327 9.91145 14.4465 10.2563 14.5779 10.6461C14.7093 11.0358 14.7449 11.4371 14.6846 11.8499Z",fill:"currentColor"})})]})}),$o=t=>e.jsxs("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("mask",{id:"mask0_5162_13106",maskUnits:"userSpaceOnUse",x:"0",y:"0",width:"24",height:"24",children:e.jsx("rect",{width:"1em",height:"1em",fill:"currentColor"})}),e.jsx("g",{mask:"url(#mask0_5162_13106)",children:e.jsx("path",{d:"M12.0023 15.5769C13.1354 15.5769 14.0978 15.1803 14.8895 14.3871C15.6811 13.5939 16.077 12.6308 16.077 11.4977C16.077 10.3646 15.6804 9.40224 14.8872 8.61058C14.094 7.81891 13.1309 7.42308 11.9978 7.42308C10.8647 7.42308 9.90234 7.81966 9.11067 8.61282C8.31901 9.40601 7.92317 10.3692 7.92317 11.5023C7.92317 12.6353 8.31976 13.5977 9.11293 14.3894C9.90611 15.181 10.8692 15.5769 12.0023 15.5769ZM12.0001 14.2C11.2501 14.2 10.6126 13.9375 10.0876 13.4125C9.56258 12.8875 9.30007 12.25 9.30007 11.5C9.30007 10.75 9.56258 10.1125 10.0876 9.58748C10.6126 9.06248 11.2501 8.79998 12.0001 8.79998C12.7501 8.79998 13.3876 9.06248 13.9126 9.58748C14.4376 10.1125 14.7001 10.75 14.7001 11.5C14.7001 12.25 14.4376 12.8875 13.9126 13.4125C13.3876 13.9375 12.7501 14.2 12.0001 14.2ZM12.0014 18.5C9.70183 18.5 7.60651 17.8657 5.71547 16.5971C3.82446 15.3285 2.43216 13.6295 1.53857 11.5C2.43216 9.37049 3.82401 7.67146 5.71412 6.40288C7.60422 5.13429 9.69908 4.5 11.9987 4.5C14.2983 4.5 16.3936 5.13429 18.2847 6.40288C20.1757 7.67146 21.568 9.37049 22.4616 11.5C21.568 13.6295 20.1761 15.3285 18.286 16.5971C16.3959 17.8657 14.3011 18.5 12.0014 18.5Z",fill:"currentColor"})})]}),Eo=t=>e.jsxs("svg",{width:"1em",height:"1em",viewBox:"0 0 22 22",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("mask",{id:"mask0_5577_416",maskUnits:"userSpaceOnUse",x:"0",y:"0",width:"22",height:"22",children:e.jsx("rect",{width:"1em",height:"1em",fill:"currentColor"})}),e.jsx("g",{mask:"url(#mask0_5577_416)",children:e.jsx("path",{d:"M11 17.6634C10.6219 17.6634 10.2982 17.5287 10.0289 17.2595C9.75964 16.9902 9.625 16.6665 9.625 16.2884C9.625 15.9103 9.75964 15.5866 10.0289 15.3173C10.2982 15.0481 10.6219 14.9134 11 14.9134C11.3781 14.9134 11.7018 15.0481 11.971 15.3173C12.2403 15.5866 12.375 15.9103 12.375 16.2884C12.375 16.6665 12.2403 16.9902 11.971 17.2595C11.7018 17.5287 11.3781 17.6634 11 17.6634ZM11 12.3749C10.6219 12.3749 10.2982 12.2403 10.0289 11.971C9.75964 11.7018 9.625 11.3781 9.625 11C9.625 10.6218 9.75964 10.2982 10.0289 10.0289C10.2982 9.75962 10.6219 9.62498 11 9.62498C11.3781 9.62498 11.7018 9.75962 11.971 10.0289C12.2403 10.2982 12.375 10.6218 12.375 11C12.375 11.3781 12.2403 11.7018 11.971 11.971C11.7018 12.2403 11.3781 12.3749 11 12.3749ZM11 7.08648C10.6219 7.08648 10.2982 6.95184 10.0289 6.68257C9.75964 6.41332 9.625 6.08963 9.625 5.7115C9.625 5.33339 9.75964 5.0097 10.0289 4.74043C10.2982 4.47118 10.6219 4.33655 11 4.33655C11.3781 4.33655 11.7018 4.47118 11.971 4.74043C12.2403 5.0097 12.375 5.33339 12.375 5.7115C12.375 6.08963 12.2403 6.41332 11.971 6.68257C11.7018 6.95184 11.3781 7.08648 11 7.08648Z",fill:"currentColor"})})]}),Io=({topic:t,onClick:r,onSearch:o,checkedStates:n,setCheckedStates:i,isMuteDisabled:a})=>{const[l,s]=O(y=>[y.ids,y.total]),[c,u]=m.useState(!1),g=Ne(t.date_added_to_graph),h=async(y,L)=>{u(!0);try{await je(y,{is_muted:L}),O.setState({ids:l.filter($=>$!==y),total:s-1})}catch($){console.warn($)}},f=y=>{i(L=>({...L,[y]:!L[y]}))},b=(y,L)=>{var $;($=window.getSelection())!=null&&$.toString()?y.preventDefault():o(L.name)},j=t.edgeList.slice(0,1),C=t.edgeList.length-j.length,[v,_]=N.useState(null),A=y=>{_(y.currentTarget)},T=()=>{_(null)},E=!!v,B=n[t.ref_id]?"visible":"";return e.jsxs(Ce,{className:n[t.ref_id]?"checked":"",children:[e.jsx(w,{children:e.jsx(Bo,{className:`checkbox-section ${B}`,onClick:()=>f(t.ref_id),children:e.jsx(Oo,{checked:n[t.ref_id],children:e.jsx(Mo,{children:n[t.ref_id]&&e.jsx(Tt,{})})})})}),e.jsx(w,{onClick:y=>b(y,t),children:e.jsx(Po,{children:t.name})}),e.jsx(w,{children:t.node_type}),e.jsx(w,{children:t.edgeCount}),e.jsxs(w,{children:[e.jsx(St,{anchorEl:v,anchorOrigin:{vertical:"top",horizontal:"center"},disableRestoreFocus:!0,id:"mouse-over-popover",onClose:T,open:E,sx:{pointerEvents:"none","& .MuiPaper-root":{backgroundColor:"rgba(0, 0, 0, 0.9)",borderRadius:"4px",width:"160px"}},transformOrigin:{vertical:"bottom",horizontal:"center"},children:e.jsx(Ke,{sx:{p:1.5,fontSize:"13px",fontWeight:400,lineHeight:"1.8",wordWrap:"break-word"},children:t.edgeList.join(", ")})}),j.join(", "),C>0&&e.jsx(Ke,{"aria-haspopup":"true","aria-owns":E?"mouse-over-popover":void 0,component:"span",onMouseEnter:A,onMouseLeave:T,sx:{cursor:"context-menu"},children:",..."})]}),e.jsx(w,{children:e.jsx("span",{children:g})}),e.jsx(w,{className:"cell-center",children:e.jsx(p,{direction:"row",justify:"space-between",children:e.jsx("div",{className:"approve-wrapper",children:c?e.jsx(No,{children:e.jsx(P,{color:x.white,size:16})}):e.jsxs(p,{direction:"row",children:[t.is_muted?e.jsx(W,{className:"centered",disabled:a,onClick:()=>h(t.ref_id,!1),children:e.jsx($o,{})}):e.jsx(W,{className:"centered",disabled:a,onClick:()=>h(t.ref_id,!0),children:e.jsx(Lo,{})}),e.jsx(W,{disabled:a,onClick:y=>r(y,t.ref_id),children:e.jsx(Eo,{"data-testid":"ThreeDotsIcons"})})]})})})})]},t.name)},No=d.span`
  margin-left: 12px;
`,Po=d.span`
  cursor: pointer;
  :hover {
    text-decoration: underline;
  }
`,Bo=d.td`
  visibility: hidden;
  cursor: pointer;
  display: flex;
  align-items: center;

  &.visible {
    visibility: visible;
  }
`,Oo=d.div`
  width: 14px;
  height: 14px;
  border-radius: 4px;
  border: ${({checked:t})=>t?"#618AFF":"2px solid #CCCCCC"};
  background-color: ${({checked:t})=>t?"#618AFF":"transparent"};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 12px;
`,Mo=d.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 2px;
  background-color: transparent;
`,zo=m.memo(Io),Do=({setShowMuteUnmute:t,showMuted:r,onTopicEdit:o,onChangeFilter:n,checkedStates:i,setCheckedStates:a})=>{const{close:l}=V("sourcesTable"),[s,c]=m.useState(!1),[u,g]=N.useState(null),[h,f]=N.useState(""),b=Object.values(i).filter(k=>k).length,[j,C]=te(k=>[k.setSearchFormValue,k.setCurrentSearch]),[v,_,A]=O(k=>[k.data,k.ids,k.total]),T=m.useCallback((k,z)=>{g(k.currentTarget),f(z)},[]),E=()=>{g(null)},B=k=>{j(k),C(k),l()},y=k=>{o(h,k),E()},L=k=>{n(k)},$=!!u,Y=$?"simple-popover":void 0,U=async()=>{c(!0);try{const k=Object.keys(i).map(async I=>{if(i[I])try{return await je(I,{is_muted:!r}),I}catch(H){return console.error("Error updating node data:",H),null}return null}),z=await Promise.all(k);O.setState({ids:_.filter(I=>!z.includes(I)),total:A-z.length}),a({}),c(!1)}catch(k){console.error("Error:",k),c(!1)}};return v?e.jsx(e.Fragment,{children:Object.keys(v).length?e.jsx(Zo,{align:"center",justify:s?"center":"flex-start",children:s?e.jsx(P,{color:x.white}):e.jsxs(e.Fragment,{children:[e.jsxs(be,{component:"table",children:[e.jsx(ve,{children:e.jsxs(X,{component:"tr",children:[e.jsx(w,{className:"empty"}),e.jsx(w,{children:e.jsxs($e,{onClick:()=>L(ze),children:["Name ",e.jsx(Le,{})]})}),e.jsx(w,{children:"Type"}),e.jsx(w,{children:e.jsxs($e,{onClick:()=>L(Rr),children:["Count ",e.jsx(Le,{})]})}),e.jsx(w,{children:"Edge list"}),e.jsx(w,{children:e.jsxs($e,{onClick:()=>L(Fr),children:["Date ",e.jsx(Le,{})]})}),e.jsx(w,{children:e.jsx(p,{px:8,children:e.jsxs(Ro,{onClick:t,children:[e.jsx(Fo,{checked:r,children:e.jsx(Wo,{children:r&&e.jsx(Tt,{})})}),"Muted"]})})})]})}),b>0&&e.jsxs(X,{component:"tr",children:[e.jsx(w,{children:e.jsx(W,{onClick:()=>a({}),children:e.jsx(ce,{})})}),e.jsx(w,{children:e.jsxs(Yo,{children:[e.jsxs(Ho,{children:[e.jsx(Go,{children:b}),"selected"]}),e.jsx(Uo,{onClick:U,role:"button",children:r?e.jsxs(e.Fragment,{children:[e.jsx(tt,{})," Unmute All"]}):e.jsxs(e.Fragment,{children:[e.jsx(et,{})," Mute All"]})})]})})]}),v&&e.jsx("tbody",{children:_==null?void 0:_.map(k=>e.jsx(zo,{checkedStates:i,isMuteDisabled:Object.values(i).filter(z=>z).length>1,onClick:T,onSearch:B,setCheckedStates:a,topic:v[k]},k))})]}),h?e.jsxs(Vo,{anchorEl:u,anchorOrigin:{vertical:"bottom",horizontal:"right"},id:Y,onClose:E,open:$,transformOrigin:{vertical:"top",horizontal:"right"},children:[r?e.jsxs(oe,{"data-testid":"unmute",onClick:()=>y("unMute"),children:[" ",e.jsx(tt,{"data-testid":""})," Unmute"]}):e.jsxs(oe,{"data-testid":"mute",onClick:()=>y("mute"),children:[" ",e.jsx(et,{"data-testid":"VisibilityOff"})," Mute"]}),e.jsxs(oe,{"data-testid":"rename",onClick:()=>y("editTopic"),children:[e.jsx(ko,{"data-testid":"EditTopicIcon"})," Rename"]}),e.jsxs(oe,{"data-testid":"merge",onClick:()=>y("mergeTopic"),children:[e.jsx(Ao,{"data-testid":"MergeIcon"})," Merge"]}),e.jsxs(oe,{"data-testid":"add_edge",onClick:()=>y("addEdge"),children:[e.jsx(To,{"data-testid":"AddCircleIcon"})," Add edge"]})]}):null]})}):e.jsxs(p,{children:[e.jsx(S,{children:"There is not any results for selected filters"}),e.jsx(Ie,{})]})}):e.jsxs(p,{children:[e.jsx(S,{children:"There is not any results for selected filters"}),e.jsx(Ie,{})]})},Ro=d.td`
  cursor: pointer;
  display: flex;
  align-items: center;
`,Fo=d.div`
  width: 14px;
  height: 14px;
  border-radius: 4px;
  border: ${({checked:t})=>t?"#618AFF":"2px solid #CCCCCC"};
  background-color: ${({checked:t})=>t?"#618AFF":"transparent"};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 8px;
`,Wo=d.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 2px;
  background-color: transparent;
`,$e=d.span`
  cursor: pointer;
  display: flex;
  gap: 4px;
  align-items: center;
`,oe=d(p).attrs({direction:"row",px:12,py:8})`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 12px;
  cursor: pointer;
  background: ${x.BUTTON1};
  color: ${x.white};

  &:hover {
    background: ${x.BUTTON1_HOVER};
    color: ${x.GRAY3};
  }
`,Vo=d(St)`
  && {
    z-index: 9999;
  }
  .MuiPaper-root {
    min-width: 149px;
    color: ${x.GRAY3};
    box-shadow: 0px 1px 6px 0px rgba(0, 0, 0, 0.2);
    border-radius: 6px;
    z-index: 1;
    font-family: Barlow;
    font-size: 14px;
    font-weight: 500;
  }
`,Go=d.span`
  font-family: Barlow;
  font-size: 13px;
  font-weight: 500;
  margin-right: 3px;
`,Uo=d.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  gap: 8px;
  padding: 1px 8px;
  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
    padding: 1px 8px;
    border-radius: 4px;
  }
`,Ho=d.div`
  display: flex;
  align-items: center;
  gap: 2px;
`,Yo=d.span`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,Zo=d(p)`
  min-height: 0;
  overflow: auto;
  flex: 1;
  width: 100%;
`,Ko=()=>{const[t,r,o,n,i,a,l,s]=O(y=>[y.data,y.ids,y.total,y.setTopics,y.filters,y.setFilters,y.terminate,y.loading]),{open:c}=V("editTopic"),{open:u}=V("mergeTopic"),{open:g}=V("addEdge"),[h,f]=m.useState(null),[b,j]=m.useState({}),C={editTopic:c,mergeTopic:u,addEdge:g},v=m.useRef([]);m.useEffect(()=>{r.length&&(v.current=r)},[r]),m.useEffect(()=>{(async()=>{try{await n()}catch{console.error("err")}})()},[n,i]);const _=async()=>{a({page:i.page+1})};m.useEffect(()=>()=>{l()},[l]);const A=y=>{a({sortBy:y})},T=()=>{f(null)},E=async(y,L)=>{try{await je(y,{is_muted:L==="mute"}),O.setState({ids:r.filter($=>$!==y),total:o-1})}catch($){console.warn($)}},B=async(y,L)=>{t&&(f(t[y]),["mute","unMute"].includes(L)&&await E(y,L),typeof C[L]=="function"&&C[L]())};return e.jsxs(e.Fragment,{children:[e.jsxs(qo,{direction:"column",justify:"flex-end",children:[e.jsx(we,{align:"flex-start",direction:"row",justify:"space-between",children:e.jsx(S,{className:"title",children:"Topics"})}),e.jsx(Qo,{children:e.jsx(Un,{activeIcon:e.jsx(ce,{}),defaultIcon:e.jsx(pt,{}),loading:s,loadingIcon:e.jsx(P,{color:x.PRIMARY_BLUE,size:24}),placeholder:"Search ..."})}),e.jsx(Xo,{align:"center",justify:s&&!t?"center":"flex-start",children:s&&!t?e.jsx(P,{color:x.white}):e.jsxs(e.Fragment,{children:[e.jsx(Do,{checkedStates:b,onChangeFilter:A,onTopicEdit:B,setCheckedStates:j,setShowMuteUnmute:()=>a({is_muted:!i.is_muted}),showMuted:i.is_muted}),o>r.length?e.jsxs(G,{className:"load-more",disabled:s,onClick:_,children:["Load more",s&&e.jsx(P,{color:x.BLUE_PRESS_STATE,size:10})]}):null]})})]}),h&&e.jsx(_o,{onClose:T,topic:h}),h&&e.jsx(po,{onClose:T,topic:h}),h&&e.jsx(ao,{onClose:T,topic:h})]})},qo=d(p)`
  flex: 1;

  .title {
    font-size: 20px;
    color: ${x.white};
    font-family: Barlow;
    font-size: 22px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  .subtitle {
    color: ${x.GRAY3};
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
`,Xo=d(p)`
  min-height: 0;
  overflow: auto;
  flex: 1;
  width: 100%;
`,Qo=d(p)`
  margin: 0 0 16px 36px;
`;function Jo(t){return t.charAt(0).toUpperCase()+t.slice(1).toLowerCase()}const es=({node:t})=>{var r,o,n,i,a,l,s,c,u;return e.jsxs(Ce,{children:[e.jsx(w,{className:"empty"}),e.jsx(w,{children:(r=t==null?void 0:t.properties)!=null&&r.date_added_to_graph?Ne((o=t==null?void 0:t.properties)==null?void 0:o.date_added_to_graph):Ne((n=t==null?void 0:t.properties)==null?void 0:n.date)}),e.jsx(w,{children:t==null?void 0:t.node_type}),e.jsx(w,{children:(t==null?void 0:t.node_type)==="Tweet"?e.jsx(rt,{href:`${Ye}${(i=t==null?void 0:t.properties)==null?void 0:i.tweet_id}${Ye.includes("?")?"&":"?"}open=system`,target:"_blank",children:(a=t==null?void 0:t.properties)==null?void 0:a.tweet_id}):e.jsx(rt,{href:`${(l=t==null?void 0:t.properties)==null?void 0:l.source_link}${((s=t==null?void 0:t.properties)==null?void 0:s.source_link).includes("?")?"&":"?"}open=system`,target:"_blank",children:(c=t==null?void 0:t.properties)==null?void 0:c.source_link})}),e.jsx(w,{children:(u=t==null?void 0:t.properties)!=null&&u.status?Jo(t.properties.status):"Processing"})]})},rt=d.a`
  color: ${x.white};
  text-decoration: underline;
  &:visited {
    color: ${x.white};
  }
`,ts=m.memo(es),rs=({nodes:t})=>{const{open:r}=V("addContent"),o=async()=>{r()};return!t||(t==null?void 0:t.length)===0?e.jsx(e.Fragment,{children:e.jsxs(ns,{children:[e.jsx(os,{align:"center",direction:"row",justify:"space-between",children:e.jsx(S,{className:"subtitle",children:"Contribute to the graph by adding content."})}),e.jsx(p,{children:e.jsx(G,{color:"secondary",onClick:o,size:"medium",startIcon:e.jsx(Ur,{}),type:"submit",variant:"contained",children:"Add Content"})})]})}):e.jsxs(be,{component:"table",children:[e.jsx(ve,{children:e.jsxs(X,{component:"tr",children:[e.jsx(w,{className:"empty"}),e.jsx(w,{children:"Date"}),e.jsx(w,{children:"Type"}),e.jsx(w,{children:"Source"}),e.jsx(w,{children:"Status"})]})}),e.jsx("tbody",{children:t==null?void 0:t.map(n=>e.jsx(ts,{node:n},n==null?void 0:n.ref_id))})]})},ns=Oe(p)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 100px auto;
  width: 100%;
`,os=Oe(p)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: 30px;

  .subtitle {
    color: ${x.GRAY3};
    font-family: Barlow;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`,ss=()=>{const[t,r]=m.useState([]),[o,n]=m.useState(!0),[i,a]=m.useState(10),[l,s]=m.useState(!0),c={only_content:"true",sort_by:"date",limit:i.toString()},u=async()=>{n(!0);try{const h=await Qt(c);r(h.nodes),n(!1)}catch(h){console.error("Error fetching data:",h),n(!1)}};m.useEffect(()=>{u()},[i]);const g=()=>{a(i+10),u()};return e.jsxs(is,{direction:"column",justify:"flex-end",children:[e.jsx(we,{align:"center",direction:"row",justify:"space-between",children:e.jsx(S,{className:"title",children:"Content I've added to the graph"})}),e.jsxs(as,{align:"center",justify:o?"center":"flex-start",children:[o?e.jsx(P,{color:x.white}):e.jsx(e.Fragment,{children:e.jsx(rs,{nodes:t})}),o?null:l?e.jsx(G,{onClick:g,size:"medium",children:"Load More"}):e.jsx(ls,{children:"No new nodes available"})]})]})},is=d(p)`
  flex: 1;

  .title {
    font-size: 20px;
    color: ${x.white};
    font-family: Barlow;
    font-size: 22px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  .subtitle {
    color: ${x.GRAY3};
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
`,as=d(p)`
  min-height: 0;
  overflow: auto;
  flex: 1;
  width: 100%;
`,ls=d.div`
  margin-top: 10px;
  color: ${x.GRAY3};
  font-family: Barlow;
  font-size: 14px;
`,cs=[{label:Ct,component:ss},{label:Wr,component:Fn},{label:bt,component:Ln},{label:jt,component:Ko}],ds=t=>{const{children:r,value:o,index:n,...i}=t;return o===n?e.jsx(fs,{"aria-labelledby":`simple-tab-${n}`,hidden:o!==n,id:`simple-tabpanel-${n}`,role:"tabpanel",...i,children:r}):null};function ps(t){return{id:`simple-tab-${t}`,"aria-controls":`simple-tabpanel-${t}`}}const hs=()=>{const[t,r]=m.useState(0),[o]=le(s=>[s.isAdmin]),[n]=Jt(s=>[s.queuedSourcesFlag]),i=er(),a=(s,c)=>{r(c)},l=cs.filter(({label:s})=>s===jt?o:s===bt?o&&n:s===Ct?i:!0);return e.jsxs(ms,{"data-testid":"sources-table",direction:"column",children:[e.jsx(us,{"aria-label":"sources tabs",onChange:a,value:t,children:l.map((s,c)=>e.jsx(xs,{color:x.white,disableRipple:!0,label:s.label,...ps(c)},s.label))}),l.map((s,c)=>e.jsx(ds,{index:c,value:t,children:e.jsx(s.component,{})},s.label))]})},us=d(Zr)`
  && {
    background: rgba(0, 0, 0, 0.2);
    border-radius: 9px 9px 0 0;
    .MuiTabs-indicator {
      background: ${x.primaryBlue};
    }
  }
`,xs=d(Kr)`
  && {
    padding: 30px 0 24px;
    color: ${x.GRAY6};
    margin-left: 34px;
    font-family: Barlow;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;

    &.Mui-selected {
      color: ${x.white};
    }
  }
`,fs=d(p)`
  display: flex;
  flex: 1;
  min-height: 572px;
  padding: 20px 0;
  max-height: 572px;
`,ms=d(p)`
  min-height: 0;
  flex: 1;
`,fe={required:{message:"The field is required",value:!0}},gs=({initialValues:t})=>{const r=de({defaultValues:t,mode:"onSubmit"}),{isSubmitting:o}=r.formState,n=r.handleSubmit(async i=>{try{await tr(i)}catch(a){console.warn(a)}});return e.jsx(pe,{...r,children:e.jsx("form",{id:"add-node-form",onSubmit:n,children:e.jsxs(e.Fragment,{children:[e.jsxs(p,{children:[e.jsx(p,{pt:12,children:e.jsx(se,{id:"cy-about-title-id",label:"Graph Title",maxLength:50,name:"title",placeholder:"Type graph title here...",rules:{...fe}})}),e.jsx(p,{pt:12,children:e.jsx(se,{id:"cy-about-id",label:"Graph Description",maxLength:50,name:"description",placeholder:"Type graph description here...",rules:{...fe}})}),e.jsx(p,{pt:12,children:e.jsx(se,{id:"cy-about-mission_statement-id",label:"Mission Statement",maxLength:50,name:"mission_statement",placeholder:"Type mission statement here...",rules:{...fe}})}),e.jsx(p,{pt:12,children:e.jsx(se,{id:"cy-about-search_term-id",label:"Search Term",maxLength:50,name:"search_term",placeholder:"Type search term here...",rules:{...fe}})})]}),e.jsx(p,{pt:8,children:o?e.jsx(ys,{children:e.jsx(P,{color:x.white,size:20})}):e.jsx(kt,{disabled:o,id:"add-node-submit-cta",kind:"big",type:"submit",children:"Save changes"})})]})})})},ys=d(p).attrs({align:"center",background:"primaryButton",borderRadius:8,justify:"center"})`
  padding: 16px 24px;
  opacity: 0.5;
`,js=({initialValues:t})=>e.jsxs(e.Fragment,{children:[t.title&&e.jsxs(p,{pt:12,children:[e.jsx(S,{kind:"regular",children:"Graph Title"}),e.jsx(p,{pt:12,children:e.jsx(S,{className:"value",kind:"medium",children:t.title})})]}),t.description&&e.jsxs(p,{pt:12,children:[e.jsx(S,{kind:"regular",children:"Graph Description"}),e.jsx(p,{pt:12,children:e.jsx(S,{className:"value",kind:"medium",children:t.description})})]}),t.mission_statement&&e.jsxs(p,{pt:12,children:[e.jsx(S,{kind:"regular",children:"Mission Statement"}),e.jsx(p,{pt:12,children:e.jsx(S,{className:"value",kind:"medium",children:t.mission_statement})})]})]}),bs=()=>{const[t]=le(o=>[o.isAdmin]),r=te(o=>o.appMetaData);return r?e.jsxs(Cs,{align:"stretch",direction:"column",justify:"flex-end",children:[e.jsx(ws,{align:"center",direction:"row",justify:"space-between",children:e.jsx(S,{className:"title",children:"About"})}),e.jsx(vs,{align:"stretch",justify:"flex-start",children:t?e.jsx(gs,{initialValues:r}):e.jsx(js,{initialValues:r})})]}):null},Cs=d(p)`
  border-radius: 8px;
  box-shadow: 0px 5px 6px rgb(0 0 0 / 50%);
  padding: 16px;
  flex: 1;

  .title {
    margin-bottom: 16px;
    font-size: 20px;
  }

  .value {
    color: ${x.lightBlue400};
  }
`,vs=d(p)`
  min-height: 0;
  overflow: auto;
  flex: 1;
  width: 100%;
`,ws=d(p)`
  margin-bottom: 16px;
  ${S} {
    margin-bottom: 0;
  }
`;var Ss=["type","layout","connectNulls","ref"];function J(t){"@babel/helpers - typeof";return J=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},J(t)}function _s(t,r){if(t==null)return{};var o=Ts(t,r),n,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(i=0;i<a.length;i++)n=a[i],!(r.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}function Ts(t,r){if(t==null)return{};var o={},n=Object.keys(t),i,a;for(a=0;a<n.length;a++)i=n[a],!(r.indexOf(i)>=0)&&(o[i]=t[i]);return o}function ie(){return ie=Object.assign?Object.assign.bind():function(t){for(var r=1;r<arguments.length;r++){var o=arguments[r];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n])}return t},ie.apply(this,arguments)}function nt(t,r){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);r&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),o.push.apply(o,n)}return o}function M(t){for(var r=1;r<arguments.length;r++){var o=arguments[r]!=null?arguments[r]:{};r%2?nt(Object(o),!0).forEach(function(n){D(t,n,o[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):nt(Object(o)).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(o,n))})}return t}function K(t){return $s(t)||Ls(t)||As(t)||ks()}function ks(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function As(t,r){if(t){if(typeof t=="string")return Pe(t,r);var o=Object.prototype.toString.call(t).slice(8,-1);if(o==="Object"&&t.constructor&&(o=t.constructor.name),o==="Map"||o==="Set")return Array.from(t);if(o==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return Pe(t,r)}}function Ls(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function $s(t){if(Array.isArray(t))return Pe(t)}function Pe(t,r){(r==null||r>t.length)&&(r=t.length);for(var o=0,n=new Array(r);o<r;o++)n[o]=t[o];return n}function Es(t,r){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")}function ot(t,r){for(var o=0;o<r.length;o++){var n=r[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,Nt(n.key),n)}}function Is(t,r,o){return r&&ot(t.prototype,r),o&&ot(t,o),Object.defineProperty(t,"prototype",{writable:!1}),t}function Ns(t,r){if(typeof r!="function"&&r!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(r&&r.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),r&&Be(t,r)}function Be(t,r){return Be=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,i){return n.__proto__=i,n},Be(t,r)}function Ps(t){var r=Os();return function(){var n=ye(t),i;if(r){var a=ye(this).constructor;i=Reflect.construct(n,arguments,a)}else i=n.apply(this,arguments);return Bs(this,i)}}function Bs(t,r){if(r&&(J(r)==="object"||typeof r=="function"))return r;if(r!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return F(t)}function F(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function Os(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function ye(t){return ye=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(o){return o.__proto__||Object.getPrototypeOf(o)},ye(t)}function D(t,r,o){return r=Nt(r),r in t?Object.defineProperty(t,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[r]=o,t}function Nt(t){var r=Ms(t,"string");return J(r)==="symbol"?r:String(r)}function Ms(t,r){if(J(t)!=="object"||t===null)return t;var o=t[Symbol.toPrimitive];if(o!==void 0){var n=o.call(t,r||"default");if(J(n)!=="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(t)}var he=function(t){Ns(o,t);var r=Ps(o);function o(){var n;Es(this,o);for(var i=arguments.length,a=new Array(i),l=0;l<i;l++)a[l]=arguments[l];return n=r.call.apply(r,[this].concat(a)),D(F(n),"state",{isAnimationFinished:!0,totalLength:0}),D(F(n),"generateSimpleStrokeDasharray",function(s,c){return"".concat(c,"px ").concat(s-c,"px")}),D(F(n),"getStrokeDasharray",function(s,c,u){var g=u.reduce(function(A,T){return A+T});if(!g)return n.generateSimpleStrokeDasharray(c,s);for(var h=Math.floor(s/g),f=s%g,b=c-s,j=[],C=0,v=0;C<u.length;v+=u[C],++C)if(v+u[C]>f){j=[].concat(K(u.slice(0,C)),[f-v]);break}var _=j.length%2===0?[0,b]:[b];return[].concat(K(o.repeat(u,h)),K(j),_).map(function(A){return"".concat(A,"px")}).join(", ")}),D(F(n),"id",fr("recharts-line-")),D(F(n),"pathRef",function(s){n.mainCurve=s}),D(F(n),"handleAnimationEnd",function(){n.setState({isAnimationFinished:!0}),n.props.onAnimationEnd&&n.props.onAnimationEnd()}),D(F(n),"handleAnimationStart",function(){n.setState({isAnimationFinished:!1}),n.props.onAnimationStart&&n.props.onAnimationStart()}),n}return Is(o,[{key:"componentDidMount",value:function(){if(this.props.isAnimationActive){var i=this.getTotalLength();this.setState({totalLength:i})}}},{key:"componentDidUpdate",value:function(){if(this.props.isAnimationActive){var i=this.getTotalLength();i!==this.state.totalLength&&this.setState({totalLength:i})}}},{key:"getTotalLength",value:function(){var i=this.mainCurve;try{return i&&i.getTotalLength&&i.getTotalLength()||0}catch{return 0}}},{key:"renderErrorBar",value:function(i,a){if(this.props.isAnimationActive&&!this.state.isAnimationFinished)return null;var l=this.props,s=l.points,c=l.xAxis,u=l.yAxis,g=l.layout,h=l.children,f=mr(h,gr);if(!f)return null;var b=function(v,_){return{x:v.x,y:v.y,value:v.value,errorVal:ut(v.payload,_)}},j={clipPath:i?"url(#clipPath-".concat(a,")"):null};return N.createElement(Se,j,f.map(function(C){return N.cloneElement(C,{key:"bar-".concat(C.props.dataKey),data:s,xAxis:c,yAxis:u,layout:g,dataPointFormatter:b})}))}},{key:"renderDots",value:function(i,a,l){var s=this.props.isAnimationActive;if(s&&!this.state.isAnimationFinished)return null;var c=this.props,u=c.dot,g=c.points,h=c.dataKey,f=xe(this.props),b=xe(u,!0),j=g.map(function(v,_){var A=M(M(M({key:"dot-".concat(_),r:3},f),b),{},{value:v.value,dataKey:h,cx:v.x,cy:v.y,index:_,payload:v.payload});return o.renderDotItem(u,A)}),C={clipPath:i?"url(#clipPath-".concat(a?"":"dots-").concat(l,")"):null};return N.createElement(Se,ie({className:"recharts-line-dots",key:"dots"},C),j)}},{key:"renderCurveStatically",value:function(i,a,l,s){var c=this.props,u=c.type,g=c.layout,h=c.connectNulls;c.ref;var f=_s(c,Ss),b=M(M(M({},xe(f,!0)),{},{fill:"none",className:"recharts-line-curve",clipPath:a?"url(#clipPath-".concat(l,")"):null,points:i},s),{},{type:u,layout:g,connectNulls:h});return N.createElement(yr,ie({},b,{pathRef:this.pathRef}))}},{key:"renderCurveWithAnimation",value:function(i,a){var l=this,s=this.props,c=s.points,u=s.strokeDasharray,g=s.isAnimationActive,h=s.animationBegin,f=s.animationDuration,b=s.animationEasing,j=s.animationId,C=s.animateNewValues,v=s.width,_=s.height,A=this.state,T=A.prevPoints,E=A.totalLength;return N.createElement(jr,{begin:h,duration:f,isActive:g,easing:b,from:{t:0},to:{t:1},key:"line-".concat(j),onAnimationEnd:this.handleAnimationEnd,onAnimationStart:this.handleAnimationStart},function(B){var y=B.t;if(T){var L=T.length/c.length,$=c.map(function(I,ue){var H=Math.floor(ue*L);if(T[H]){var re=T[H],Z=ne(re.x,I.x),Pt=ne(re.y,I.y);return M(M({},I),{},{x:Z(y),y:Pt(y)})}if(C){var Bt=ne(v*2,I.x),Ot=ne(_/2,I.y);return M(M({},I),{},{x:Bt(y),y:Ot(y)})}return M(M({},I),{},{x:I.x,y:I.y})});return l.renderCurveStatically($,i,a)}var Y=ne(0,E),U=Y(y),k;if(u){var z="".concat(u).split(/[,\s]+/gim).map(function(I){return parseFloat(I)});k=l.getStrokeDasharray(U,E,z)}else k=l.generateSimpleStrokeDasharray(E,U);return l.renderCurveStatically(c,i,a,{strokeDasharray:k})})}},{key:"renderCurve",value:function(i,a){var l=this.props,s=l.points,c=l.isAnimationActive,u=this.state,g=u.prevPoints,h=u.totalLength;return c&&s&&s.length&&(!g&&h>0||!br(g,s))?this.renderCurveWithAnimation(i,a):this.renderCurveStatically(s,i,a)}},{key:"render",value:function(){var i,a=this.props,l=a.hide,s=a.dot,c=a.points,u=a.className,g=a.xAxis,h=a.yAxis,f=a.top,b=a.left,j=a.width,C=a.height,v=a.isAnimationActive,_=a.id;if(l||!c||!c.length)return null;var A=this.state.isAnimationFinished,T=c.length===1,E=Ue("recharts-line",u),B=g&&g.allowDataOverflow,y=h&&h.allowDataOverflow,L=B||y,$=Ee(_)?this.id:_,Y=(i=xe(s))!==null&&i!==void 0?i:{r:3,strokeWidth:2},U=Y.r,k=U===void 0?3:U,z=Y.strokeWidth,I=z===void 0?2:z,ue=Cr(s)?s:{},H=ue.clipDot,re=H===void 0?!0:H,Z=k*2+I;return N.createElement(Se,{className:E},B||y?N.createElement("defs",null,N.createElement("clipPath",{id:"clipPath-".concat($)},N.createElement("rect",{x:B?b:b-j/2,y:y?f:f-C/2,width:B?j:j*2,height:y?C:C*2})),!re&&N.createElement("clipPath",{id:"clipPath-dots-".concat($)},N.createElement("rect",{x:b-Z/2,y:f-Z/2,width:j+Z,height:C+Z}))):null,!T&&this.renderCurve(L,$),this.renderErrorBar(L,$),(T||s)&&this.renderDots(L,re,$),(!v||A)&&vr.renderCallByParent(this.props,c))}}],[{key:"getDerivedStateFromProps",value:function(i,a){return i.animationId!==a.prevAnimationId?{prevAnimationId:i.animationId,curPoints:i.points,prevPoints:a.curPoints}:i.points!==a.curPoints?{curPoints:i.points}:null}},{key:"repeat",value:function(i,a){for(var l=i.length%2!==0?[].concat(K(i),[0]):i,s=[],c=0;c<a;++c)s=[].concat(K(s),K(l));return s}},{key:"renderDotItem",value:function(i,a){var l;if(N.isValidElement(i))l=N.cloneElement(i,a);else if(rr(i))l=i(a);else{var s=Ue("recharts-line-dot",i?i.className:"");l=N.createElement(ht,ie({},a,{className:s}))}return l}}]),o}(m.PureComponent);D(he,"displayName","Line");D(he,"defaultProps",{xAxisId:0,yAxisId:0,connectNulls:!1,activeDot:!0,dot:!0,legendType:"line",stroke:"#3182bd",strokeWidth:1,fill:"#fff",points:[],isAnimationActive:!xr.isSsr,animateNewValues:!0,animationBegin:0,animationDuration:1500,animationEasing:"ease",hide:!1,label:!1});D(he,"getComposedData",function(t){var r=t.props,o=t.xAxis,n=t.yAxis,i=t.xAxisTicks,a=t.yAxisTicks,l=t.dataKey,s=t.bandSize,c=t.displayedData,u=t.offset,g=r.layout,h=c.map(function(f,b){var j=ut(f,l);return g==="horizontal"?{x:He({axis:o,ticks:i,bandSize:s,entry:f,index:b}),y:Ee(j)?null:n.scale(j),value:j,payload:f}:{x:Ee(j)?null:o.scale(j),y:He({axis:n,ticks:a,bandSize:s,entry:f,index:b}),value:j,payload:f}});return M({points:h,layout:g},u)});var zs=wr({chartName:"LineChart",GraphicalChild:he,axisComponents:[{axisType:"xAxis",AxisComp:xt},{axisType:"yAxis",AxisComp:ft}],formatAxisMap:Sr});const Ds=({cx:t,cy:r})=>e.jsx(ht,{cx:t,cy:r,fill:x.blueTextAccent,r:2}),Rs=({data:t,width:r=500,height:o=300})=>e.jsx(e.Fragment,{children:(t==null?void 0:t.length)&&e.jsxs(zs,{data:t,height:o,id:"cy-sentiment-chart",margin:{bottom:5,left:-20,right:30,top:5},width:r,children:[e.jsx(_r,{stroke:x.lightBlue300,strokeDasharray:"5 5"}),e.jsx(xt,{dataKey:"date",interval:Math.floor(t.length/3),stroke:x.blueTextAccent}),e.jsx(ft,{domain:[0,10],stroke:x.blueTextAccent}),e.jsx(Tr,{}),e.jsx(he,{dataKey:"score",dot:e.jsx(Ds,{}),stroke:"#8884d8",type:"monotone"})]})}),Fs=()=>{const[t,r]=m.useState(void 0),[o]=le(l=>[l.setBudget]),[n,i]=m.useState(!1),a=async()=>{i(!0),nr(o).then(async l=>{r(l==null?void 0:l.data.filter(s=>s.date).map(s=>({date:or.unix(Number(String(s.date).split(".")[0])).format("MM/DD/YY"),score:s.sentiment_score}))),await ct(o)}).catch().finally(()=>{i(!1)})};return e.jsxs(Ws,{align:"flex-start",direction:"column",id:"cy-sentiment-chart-wrapper",justify:"flex-end",children:[e.jsx(S,{className:"title",children:"Sentiment chart"}),n&&e.jsx(Yr,{alignItems:"center",component:"div",flexGrow:1,p:4,spacing:2,width:"100%",children:e.jsx(kr,{color:x.white})}),!(t!=null&&t.length)&&e.jsx(Vs,{className:"button",id:"cy-get-sentiments-btn",onClick:a,children:"Get top 100 sentiments"}),e.jsx(Rs,{data:t})]})},Ws=d(p)`
  border-radius: 8px;
  box-shadow: 0px 5px 6px rgb(0 0 0 / 50%);
  padding: 16px;

  .title {
    margin-bottom: 16px;
    font-size: 20px;
  }
`,Vs=d(kt)`
  height: 48px;
`,Gs=600,Us={about:e.jsx(bs,{}),sentiment:e.jsx(Fs,{}),sources:e.jsx(hs,{}),"":null},Hs=()=>{const[t,r]=te(o=>[o.secondarySidebarActiveTab,o.setSecondarySidebarActiveTab]);return e.jsx(Ar,{direction:"left",in:!!t,mountOnEnter:!0,unmountOnExit:!0,children:e.jsxs(Ys,{id:"secondary-sidebar-wrapper",children:[e.jsx(Zs,{id:"cy-close-secondary-sidebar",onClick:()=>r(""),children:e.jsx(mt,{})}),Us[t]]})})},Ys=d(p)(({theme:t})=>({background:x.BG1,height:"100vh",padding:"16px 20px",width:"100%",zIndex:30,display:"flex",[t.breakpoints.up("sm")]:{width:Gs}})),Zs=d(p).attrs({align:"center",justify:"center",p:5})`
  background-color: ${x.inputBg1};
  border-radius: 50%;
  color: ${x.mainBottomIcons};
  cursor: pointer;
  transition-duration: 0.2s;
  align-self: flex-end;
  margin-bottom: 16px;

  &:hover {
    background-color: ${x.gray200};
  }
`,Ks=d(cr)`
  .Toastify__toast {
    background-color: #49c998ff;
  }
  .Toastify__toast-body {
    background-color: #49c998ff;
    color: ${x.white};
  }
  .Toastify__close-button {
    color: ${x.white};
  }
  .Toastify__progress-bar--error {
    background-color: ${x.primaryRed};
  }
  .Toastify__progress-bar--success {
    background-color: ${x.primaryGreen};
  }
`,qs=d(p)`
  height: 100%;
  width: 100%;
  background-color: ${x.black};
`,Xs=d(p)`
  position: absolute;
  bottom: 8px;
  left: 8px;
  color: ${x.white};
  font-size: 12px;
  opacity: 0.5;
`,Qs=m.lazy(()=>R(()=>import("./index-9e92e607.js"),["assets/index-9e92e607.js","assets/index-6865c215.js","assets/index-3f17fe3b.css","assets/SourcesTableIcon-aa86e03c.js","assets/SettingsIcon-388a106b.js","assets/index-27c0e8db.js"]).then(({MainToolbar:t})=>({default:t}))),Js=m.lazy(()=>R(()=>import("./index-bf544d30.js"),["assets/index-bf544d30.js","assets/index-6865c215.js","assets/index-3f17fe3b.css","assets/Selection-53633c89.js","assets/EditIcon-91f844b1.js","assets/react-toastify.esm-22bb4a54.js","assets/react-toastify-b60658ac.css","assets/generateCategoricalChart-c02bec87.js","assets/Popover-f9928c08.js","assets/useSlotProps-3d116945.js","assets/InfoIcon-bad0ebb4.js","assets/index-a81519a3.js","assets/index.esm-6af15a5e.js","assets/PlusIcon-8d1cf88e.js","assets/index-27c0e8db.js","assets/index-34b6b518.js","assets/NoFilterResultIcon-e651ea7b.js","assets/index-15aedafe.js","assets/index-29450604.js","assets/index-e40a00bc.js","assets/index-41b2a75e.js","assets/index-e2b6f25f.js","assets/Popper-3ee49886.js","assets/CheckIcon-c555d9ea.js"]).then(({Universe:t})=>({default:t}))),ei=m.lazy(()=>R(()=>import("./index-9a05c39e.js"),["assets/index-9a05c39e.js","assets/index-6865c215.js","assets/index-3f17fe3b.css","assets/react-toastify.esm-22bb4a54.js","assets/react-toastify-b60658ac.css","assets/CheckIcon-c555d9ea.js","assets/ChevronDownIcon-b496d047.js","assets/ChevronUpIcon-dc5040b0.js","assets/Popover-f9928c08.js","assets/useSlotProps-3d116945.js","assets/ChevronRightIcon-2945a729.js","assets/index-a81519a3.js","assets/generateCategoricalChart-c02bec87.js","assets/InfoIcon-bad0ebb4.js","assets/index.esm-6af15a5e.js","assets/ChevronRightIcon-6125620a.css","assets/index-cc4c88c0.js","assets/Skeleton-ea9e95d3.js","assets/PlusIcon-8d1cf88e.js","assets/index-27c0e8db.js","assets/index-41b2a75e.js"]).then(({SideBar:t})=>({default:t}))),ti=()=>{const[t,r]=le(y=>[y.setBudget,y.setNodeCount]),[o,n]=m.useState(!1),{setSidebarOpen:i,currentSearch:a,setCurrentSearch:l,setRelevanceSelected:s,setTranscriptOpen:c}=te(y=>y),u=Lr(y=>y.setTeachMeAnswer),{data:g,setData:h,fetchData:f,graphStyle:b,setSelectedNode:j,setCategoryFilter:C}=ee(y=>y),v=dr(),_=de({mode:"onChange"}),A=_.handleSubmit(({search:y})=>{c(!1),j(null),s(!1),l(y),u(""),C(null)}),T=m.useCallback(async()=>{await f(t,{...a?{word:a}:{}}),i(!0),a?await ct(t):j(null)},[f,t,a,i,j]);m.useEffect(()=>{T()},[a,T]);const E=()=>{if(g){n(!0);const y=ir(b,g.nodes);h(y),n(!1)}};m.useEffect(()=>{E()},[b]);const B=m.useCallback(()=>{r("INCREMENT")},[r]);return m.useEffect(()=>(v&&(v.connect(),v.on("connect_error",y=>{console.error("Socket connection error:",y)}),v.on("newnode",B)),()=>{v&&v.off()}),[v,B]),e.jsxs(e.Fragment,{children:[e.jsx(pr,{}),e.jsx(wn,{}),e.jsx(hr,{hidden:!sr}),e.jsx(m.Suspense,{fallback:e.jsx("div",{children:"Loading..."}),children:e.jsxs(qs,{direction:"row",children:[e.jsx($r,{children:e.jsxs(pe,{..._,children:[e.jsx(Qs,{}),e.jsx(ei,{onSubmit:A}),e.jsx(Js,{}),o&&e.jsx(dn,{fullSize:!1}),e.jsx(ln,{}),e.jsx(Hs,{}),e.jsx(bn,{}),e.jsxs(Xs,{children:["v",ur]}),e.jsx(dt,{})]})}),e.jsx(jn,{}),e.jsx(Ks,{}),e.jsx(kn,{})]})})]})},ji=Object.freeze(Object.defineProperty({__proto__:null,App:ti},Symbol.toStringTag,{value:"Module"}));export{To as A,ko as E,$t as F,gi as N,ln as O,dn as P,Ce as S,Eo as T,yi as a,w as b,ve as c,It as d,hs as e,Et as f,Lt as g,ji as h,mi as i};
