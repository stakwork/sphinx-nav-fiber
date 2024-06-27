import{g as Rt,a as Ft,s as Pe,c as st,_ as me,r as x,u as Wt,b as Vt,j as e,d as Gt,e as Ut,F as h,T as S,f as d,h as u,i as J,k as ee,l as ae,m as D,n as Ht,S as Yt,o as Zt,p as Kt,q as it,t as at,v as Me,w as Re,Y as Fe,R as We,x as qt,y as le,z as Xt,A as lt,B as G,C as Qt,D as Jt,E as je,G as en,H as O,I as tn,J as ct,K as nn,L as rn,M as on,N as Ve,O as sn,P as an,Q as ln,U as cn,V as dt,W as dn,X as pn}from"./index-58e9a183.js";import{A as hn,a as pt,C as P,u as un,B as U,I as se,b as ce,S as ht,c as de,F as pe,Q as xn,d as fn,G as mn,L as gn,v as yn}from"./react-toastify.esm-50279b0f.js";import{f as jn,G as bn,u as Cn,c as Ge,D as ut,a as vn,E as wn,L as Se,b as xe,C as Sn,A as _n,i as ne,d as Tn,e as $e,g as kn,h as An,j as xt,k as Ue,l as Ln,X as ft,Y as mt,m as $n,n as En,T as Nn,P as In,S as On,o as Pn,p as Mn}from"./generateCategoricalChart-7b8af428.js";import{M as zn,a as Bn,b as Dn,c as gt,d as Rn}from"./index.esm-408adbb5.js";import{T as Fn,a as q,b as yt,F as Ee,M as be,C as jt,N as Wn,c as Vn}from"./NoFilterResultIcon-d97a1391.js";import{s as X,T as bt,S as Ct,A as ze,u as W,E as Gn,D as Un,a as He,b as vt,Q as wt,V as St,c as Hn}from"./index-34e23553.js";import{P as Yn,I as Zn,a as _t}from"./Popover-d6ce1529.js";import{B as Kn,T as oe}from"./index-303653b7.js";import{D as qn,P as Xn}from"./PlusIcon-04fe943c.js";import{B as Be}from"./index-f002045f.js";import{e as Qn,A as De,T as Tt,S as Jn}from"./index-724d7624.js";import{C as kt}from"./CheckIcon-ec939c73.js";import{T as er,a as tr,B as At}from"./index-b7ac6a29.js";function nr(t){return Rt("MuiTypography",t)}Ft("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);const rr=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],or=t=>{const{align:n,gutterBottom:r,noWrap:o,paragraph:i,variant:a,classes:l}=t,s={root:["root",a,t.align!=="inherit"&&`align${st(n)}`,r&&"gutterBottom",o&&"noWrap",i&&"paragraph"]};return Ut(s,nr,l)},sr=Pe("span",{name:"MuiTypography",slot:"Root",overridesResolver:(t,n)=>{const{ownerState:r}=t;return[n.root,r.variant&&n[r.variant],r.align!=="inherit"&&n[`align${st(r.align)}`],r.noWrap&&n.noWrap,r.gutterBottom&&n.gutterBottom,r.paragraph&&n.paragraph]}})(({theme:t,ownerState:n})=>me({margin:0},n.variant==="inherit"&&{font:"inherit"},n.variant!=="inherit"&&t.typography[n.variant],n.align!=="inherit"&&{textAlign:n.align},n.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},n.gutterBottom&&{marginBottom:"0.35em"},n.paragraph&&{marginBottom:16})),Ye={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},ir={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},ar=t=>ir[t]||t,lr=x.forwardRef(function(n,r){const o=Wt({props:n,name:"MuiTypography"}),i=ar(o.color),a=Qn(me({},o,{color:i})),{align:l="inherit",className:s,component:c,gutterBottom:f=!1,noWrap:g=!1,paragraph:p=!1,variant:m="body1",variantMapping:j=Ye}=a,y=Vt(a,rr),b=me({},a,{align:l,color:i,className:s,component:c,gutterBottom:f,noWrap:g,paragraph:p,variant:m,variantMapping:j}),C=c||(p?"p":j[m]||Ye[m])||"span",k=or(b);return e.jsx(sr,me({as:C,ref:r,ownerState:b,className:Gt(k.root,s)},y))}),Ze=lr;function Ne(t){const n=new Date(Number(t)*1e3),r=n.getFullYear(),o=(1+n.getMonth()).toString().padStart(2,"0");return`${n.getDate().toString().padStart(2,"0")}/${o}/${r}`}const cr=({twitterHandle:t})=>e.jsx(e.Fragment,{children:e.jsx(h,{direction:"row",children:e.jsx(h,{align:"flex-start",pb:12,children:e.jsxs(S,{children:["Tweet by @",t]})})})}),dr=d(h)(({theme:t})=>({position:"absolute",top:"65px",right:"55px",width:"300px",pointerEvents:"none",background:u.dashboardHeader,boxShadow:"0px 1px 6px rgba(0, 0, 0, 0.1)",color:u.primaryText1,zIndex:100,transition:"opacity 0.6s",padding:t.spacing(2,3),[t.breakpoints.down("sm")]:{padding:t.spacing(1,1.5)}})),pr=d(h)`
  width: 22.5%;
`,hr=({node:t})=>{if(!t)return null;const{node_type:n,show_title:r,episode_title:o,description:i,label:a,text:l,type:s,name:c,twitter_handle:f,image_url:g,guests:p}=t,m=p&&p.length>0,j=m&&typeof p[0]=="object";let y=g;return n==="guest"&&!g&&(y="person_placeholder2.png"),s==="twitter_space"&&(y="twitter_placeholder.png"),n==="topic"?null:e.jsx(dr,{borderRadius:8,px:24,py:16,children:n==="tweet"?e.jsx(cr,{twitterHandle:f}):e.jsxs(e.Fragment,{children:[e.jsxs(h,{direction:"row",children:[y&&e.jsx(pr,{}),e.jsx(h,{align:"flex-start",pb:12,children:e.jsx(S,{children:n==null?void 0:n.toUpperCase()})})]}),e.jsxs(h,{direction:"row",children:[y&&e.jsx(h,{pr:12,children:e.jsx(hn,{src:y,type:"person"})}),e.jsxs("div",{children:[(c||a)&&e.jsx(h,{direction:"column",children:c?e.jsx(S,{children:c}):e.jsxs(e.Fragment,{children:[e.jsx(S,{children:a}),l&&e.jsx(h,{pt:4,children:e.jsxs(S,{color:"primaryText1",kind:"tiny",children:["@",l]})})]})}),r&&e.jsx(S,{color:"primaryText1",kind:"tiny",children:r}),o&&e.jsx(h,{pt:4,children:e.jsx(S,{color:"primaryText1",kind:"tiny",children:o})}),i&&e.jsx(h,{pt:12,children:e.jsx(S,{as:"div",kind:"regularBold",children:jn(i)})}),f&&e.jsx(h,{pt:4,children:e.jsxs(S,{color:"primaryText1",kind:"tiny",children:["@",f]})}),p&&p.length>0&&e.jsxs(h,{pt:12,children:[e.jsx(S,{color:"primaryText1",children:"People"}),e.jsx(h,{pt:4,children:e.jsx(S,{color:"primaryText1",kind:"tiny",children:m&&e.jsxs(h,{pt:12,children:[e.jsx(S,{children:"Guests:"}),e.jsx(S,{children:j?p.map(b=>`@${b==null?void 0:b.twitter_handle}`).join(", "):p.join(", ")})]})})})]})]})]})]})})},ur=()=>{const[t]=J(n=>[n.hoveredNode]);return e.jsxs(xr,{children:[t&&e.jsx("div",{id:"tooltip-portal",children:e.jsx(hr,{node:t})}),e.jsx(pt,{})]})},xr=d("div")(({theme:t})=>({position:"absolute",zIndex:1,top:0,left:0,userSelect:"none",pointerEvents:"none",display:"flex",justifyContent:"flex-end",alignItems:"flex-start",height:"100%",width:"100%",padding:"16px",[t.breakpoints.down("sm")]:{top:50}})),fr=({fullSize:t=!0})=>{const n=ee(r=>r.sidebarIsOpen);return e.jsx(mr,{align:"center",className:ae({"sidebar-is-open":n&&!t}),justify:"center",children:e.jsx(P,{color:u.SECONDARY_BLUE,size:64})})},mr=d(h)`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  background-color: ${u.black};
  z-index: 1;
`,gr=x.lazy(()=>D(()=>import("./index-91f2791b.js"),["assets/index-91f2791b.js","assets/index-58e9a183.js","assets/index-a2878e02.css","assets/index-f002045f.js","assets/react-toastify.esm-50279b0f.js","assets/react-toastify-b60658ac.css","assets/index-b7ac6a29.js","assets/useSlotProps-5b636426.js","assets/index-303653b7.js","assets/index.esm-408adbb5.js","assets/InfoIcon-651c99cc.js"]).then(({SettingsModal:t})=>({default:t}))),yr=x.lazy(()=>D(()=>import("./index-a22b02e2.js"),["assets/index-a22b02e2.js","assets/index-58e9a183.js","assets/index-a2878e02.css","assets/react-toastify.esm-50279b0f.js","assets/react-toastify-b60658ac.css","assets/index-f002045f.js","assets/index-2e0f0ef2.js","assets/index.esm-408adbb5.js","assets/CheckIcon-ec939c73.js","assets/index-303653b7.js","assets/InfoIcon-651c99cc.js"]).then(({AddContentModal:t})=>({default:t}))),jr=x.lazy(()=>D(()=>import("./index-8819c020.js"),["assets/index-8819c020.js","assets/index-58e9a183.js","assets/index-a2878e02.css","assets/react-toastify.esm-50279b0f.js","assets/react-toastify-b60658ac.css","assets/index-f002045f.js","assets/index-2e0f0ef2.js","assets/index.esm-408adbb5.js","assets/CheckIcon-ec939c73.js","assets/index-6964dfab.js","assets/index-303653b7.js","assets/InfoIcon-651c99cc.js","assets/index-724d7624.js","assets/index-62fd761d.js","assets/Popover-d6ce1529.js","assets/useSlotProps-5b636426.js","assets/Popper-d805f45f.js","assets/index-64f1c910.js","assets/generateCategoricalChart-7b8af428.js","assets/NoFilterResultIcon-d97a1391.js","assets/index-b7ac6a29.js","assets/index-34e23553.js","assets/PlusIcon-04fe943c.js"]).then(({AddItemModal:t})=>({default:t}))),br=x.lazy(()=>D(()=>import("./index-aacf116a.js"),["assets/index-aacf116a.js","assets/index-58e9a183.js","assets/index-a2878e02.css","assets/index-f002045f.js","assets/react-toastify.esm-50279b0f.js","assets/react-toastify-b60658ac.css","assets/generateCategoricalChart-7b8af428.js","assets/Popover-d6ce1529.js","assets/useSlotProps-5b636426.js","assets/InfoIcon-651c99cc.js","assets/index.esm-408adbb5.js","assets/NoFilterResultIcon-d97a1391.js","assets/index-b7ac6a29.js","assets/index-34e23553.js","assets/index-303653b7.js","assets/PlusIcon-04fe943c.js","assets/index-724d7624.js","assets/index-62fd761d.js","assets/Popper-d805f45f.js","assets/CheckIcon-ec939c73.js"]).then(({SourcesTableModal:t})=>({default:t}))),Cr=x.lazy(()=>D(()=>import("./index-1648a2d7.js"),["assets/index-1648a2d7.js","assets/index-58e9a183.js","assets/index-a2878e02.css","assets/index-f002045f.js","assets/react-toastify.esm-50279b0f.js","assets/react-toastify-b60658ac.css","assets/index-303653b7.js","assets/index.esm-408adbb5.js","assets/InfoIcon-651c99cc.js","assets/index-62fd761d.js","assets/Popover-d6ce1529.js","assets/useSlotProps-5b636426.js","assets/Skeleton-5ab4040d.js"]).then(({EditNodeNameModal:t})=>({default:t}))),vr=x.lazy(()=>D(()=>import("./index-6d827091.js"),["assets/index-6d827091.js","assets/index-58e9a183.js","assets/index-a2878e02.css","assets/index-f002045f.js","assets/react-toastify.esm-50279b0f.js","assets/react-toastify-b60658ac.css","assets/Skeleton-5ab4040d.js"]).then(({RemoveNodeModal:t})=>({default:t}))),wr=x.lazy(()=>D(()=>import("./index-1815a8ab.js"),["assets/index-1815a8ab.js","assets/index-58e9a183.js","assets/index-a2878e02.css","assets/index-f002045f.js","assets/react-toastify.esm-50279b0f.js","assets/react-toastify-b60658ac.css","assets/index-724d7624.js","assets/index-62fd761d.js","assets/Popover-d6ce1529.js","assets/useSlotProps-5b636426.js","assets/Popper-d805f45f.js","assets/index-34e23553.js","assets/generateCategoricalChart-7b8af428.js","assets/InfoIcon-651c99cc.js","assets/index.esm-408adbb5.js","assets/NoFilterResultIcon-d97a1391.js","assets/index-b7ac6a29.js","assets/index-303653b7.js","assets/PlusIcon-04fe943c.js","assets/CheckIcon-ec939c73.js"]).then(({AddNodeEdgeModal:t})=>({default:t}))),Sr=x.lazy(()=>D(()=>import("./index-157c2e0a.js"),["assets/index-157c2e0a.js","assets/index-58e9a183.js","assets/index-a2878e02.css","assets/react-toastify.esm-50279b0f.js","assets/react-toastify-b60658ac.css","assets/index-f002045f.js","assets/index-34e23553.js","assets/index-724d7624.js","assets/index-62fd761d.js","assets/Popover-d6ce1529.js","assets/useSlotProps-5b636426.js","assets/Popper-d805f45f.js","assets/generateCategoricalChart-7b8af428.js","assets/InfoIcon-651c99cc.js","assets/index.esm-408adbb5.js","assets/NoFilterResultIcon-d97a1391.js","assets/index-b7ac6a29.js","assets/index-303653b7.js","assets/PlusIcon-04fe943c.js","assets/CheckIcon-ec939c73.js"]).then(({MergeNodeModal:t})=>({default:t}))),_r=x.lazy(()=>D(()=>import("./index-db1b0061.js"),["assets/index-db1b0061.js","assets/index-58e9a183.js","assets/index-a2878e02.css","assets/react-toastify.esm-50279b0f.js","assets/react-toastify-b60658ac.css","assets/index-f002045f.js","assets/index-303653b7.js","assets/index.esm-408adbb5.js","assets/InfoIcon-651c99cc.js","assets/index-6964dfab.js","assets/index-724d7624.js","assets/index-62fd761d.js","assets/Popover-d6ce1529.js","assets/useSlotProps-5b636426.js","assets/Popper-d805f45f.js","assets/index-64f1c910.js"]).then(({ChangeNodeTypeModal:t})=>({default:t}))),Tr=x.lazy(()=>D(()=>import("./index-201fa8bd.js"),["assets/index-201fa8bd.js","assets/index-58e9a183.js","assets/index-a2878e02.css","assets/index-f002045f.js","assets/react-toastify.esm-50279b0f.js","assets/react-toastify-b60658ac.css","assets/index-724d7624.js","assets/index-62fd761d.js","assets/Popover-d6ce1529.js","assets/useSlotProps-5b636426.js","assets/Popper-d805f45f.js","assets/index-303653b7.js","assets/index.esm-408adbb5.js","assets/InfoIcon-651c99cc.js","assets/PlusIcon-04fe943c.js","assets/index-6964dfab.js","assets/constant-a171ec1e.js","assets/constants-73dff4b3.js","assets/AddContentIcon-da3177d9.js","assets/generateCategoricalChart-7b8af428.js","assets/NoFilterResultIcon-d97a1391.js","assets/index-b7ac6a29.js","assets/index-34e23553.js","assets/CheckIcon-ec939c73.js"]).then(({BlueprintModal:t})=>({default:t}))),kr=x.lazy(()=>D(()=>import("./index-3e3c5c37.js"),["assets/index-3e3c5c37.js","assets/index-58e9a183.js","assets/index-a2878e02.css","assets/react-toastify.esm-50279b0f.js","assets/react-toastify-b60658ac.css","assets/index-f002045f.js","assets/index-2e0f0ef2.js","assets/index.esm-408adbb5.js","assets/index-303653b7.js","assets/InfoIcon-651c99cc.js"]).then(({UserFeedBackModal:t})=>({default:t}))),Ar=()=>e.jsxs(e.Fragment,{children:[e.jsx(jr,{}),e.jsx(yr,{}),e.jsx(gr,{}),e.jsx(Cr,{}),e.jsx(vr,{}),e.jsx(br,{}),e.jsx(wr,{}),e.jsx(_r,{}),e.jsx(Tr,{}),e.jsx(Sr,{}),e.jsx(kr,{})]}),Lr=()=>{const t=ee(n=>n.appMetaData);return t?e.jsxs($r,{children:[e.jsxs(Er,{children:[e.jsx(e.Fragment,{children:t.title&&e.jsx(S,{className:"title",color:"white",children:t.title})}),e.jsx(S,{className:"subtitle",children:" Second Brain"})]}),e.jsx(Yt,{})]}):null},$r=d(h).attrs({align:"center",direction:"row",grow:1,justify:"flex-start"})`
  height: 64px;
  position: absolute;
  top: 0px;
  left: 64px;
  right: 32px;
  transition: opacity 1s;
  z-index: 99;
  padding: 20px 23px;
`,Er=d.div`
  ${Ht.smallOnly`
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
    color: ${u.GRAY6};
    font-family: Barlow;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0.22px;
  }
`,Nr=()=>{const[t,n]=x.useState(!0),r=un();x.useEffect(()=>{n(!0)},[r]);const o=()=>{n(!1)};return r&&t?e.jsxs(Ir,{align:"center",direction:"column",justify:"center",onClick:o,children:[e.jsx("img",{alt:"screen",src:"jamboard_kiosk.png"}),e.jsxs(h,{align:"center",direction:"column",justify:"center",children:[e.jsx(_e,{children:"Second Brain is currently"}),e.jsx(_e,{style:{fontWeight:600},children:"optimized for Desktop."}),e.jsx(_e,{children:"Mobile support coming soon."})]}),e.jsx(U,{color:"secondary",onClick:o,variant:"contained",children:"Got It"})]}):null},Ir=d(h)`
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
`,Or={},Pr=x.createContext(Or),Mr=()=>{const[t,n]=x.useState(!1),r=x.useMemo(()=>({isShow:t,setIsShow:n}),[t]);return e.jsx(Pr.Provider,{value:r})},w=d(Fn)`
  && {
    color: ${u.white};
    border: none;
    padding: 6px 2px 6px 7px;
    color: ${u.GRAY3};
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
`,Ce=d(q)`
  && {
    height: 48px;
    padding: 0 36px;
  }
  &:nth-child(odd) {
    background-color: ${u.BG3};
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
`,ve=d(yt)`
  && {
    border-bottom: 1px solid ${u.black};
    position: sticky;
    top: 0;
    z-index: 1;
    background-color: ${u.BG1};
  }

  ${w} {
    color: ${u.white};
    font-family: Barlow;
    font-size: 11px;
    font-style: normal;
    font-weight: 700;
    line-height: 18px; /* 163.636% */
    letter-spacing: 1.1px;
    text-transform: uppercase;
  }
`,ge=d(U)`
  &:first-child.selected {
    background: ${u.white};
    color: ${u.BG1};
    pointer-events: none;
  }

  & + &.selected {
    background: ${u.white};
    color: ${u.BG1};
    pointer-events: none;
  }

  & + & {
    margin-left: 16px;
  }
`,we=d(h)`
  margin-bottom: 16px;
  padding: 0 36px;
  ${S} {
    margin-bottom: 0;
  }
`,zr=d(yt)`
  && {
    border-bottom: 1px solid ${u.black};
    position: sticky;
    top: 0;
    z-index: 1;
    background-color: ${u.BG1};
  }

  ${w} {
    color: ${u.white};
  }

  ${w}.empty {
    width: 0;
    padding: 0;
  }
`,Br=({data:t})=>{const n=J(l=>l.setQueuedSources),[r,o]=x.useState(""),i=async l=>{if(t!=null&&t.length)try{const s=await Zt.enable();await Kt(l,s.pubkey),n(t.filter(c=>c.ref_id!==l))}catch(s){console.warn(s)}},a=async l=>{if(!(!l||!(t!=null&&t.length))){o(l);try{await it(l),n(t==null?void 0:t.filter(s=>s.ref_id!==l))}catch(s){console.warn(s)}finally{o("")}}};return t!=null&&t.length?e.jsxs(be,{component:"table",children:[e.jsx(ve,{children:e.jsxs(q,{component:"tr",children:[e.jsx(w,{className:"empty"}),e.jsx(w,{children:"Type"}),e.jsx(w,{children:"Source"}),e.jsx(w,{}),e.jsx(w,{className:"empty"})]})}),(t==null?void 0:t.length)&&e.jsx("tbody",{children:t==null?void 0:t.map(l=>e.jsxs(Ce,{children:[e.jsx(w,{className:"empty"}),e.jsx(w,{children:X[l.source_type]}),e.jsx(w,{width:"268px",children:l.source_type==="twitter_handle"?e.jsxs(qe,{href:`${bt}/${l.source}?open=system`,target:"_blank",children:["@",l.source]}):e.jsx(qe,{href:`${l.source}?open=system`,target:"_blank",children:l.source})}),e.jsx(w,{className:"cell-center",children:e.jsxs(h,{direction:"row",justify:"space-between",children:[e.jsx("div",{className:"approve-wrapper",children:e.jsx(Ke,{className:"centered",onClick:()=>i(l.ref_id),children:e.jsx(zn,{color:u.primaryGreen,fontSize:24})})}),e.jsx("div",{className:"delete-wrapper",children:r===l.ref_id?e.jsx(P,{color:u.white,size:16}):e.jsx(jt,{message:"Are you sure ?",onConfirm:()=>a(l.ref_id),children:e.jsx(Ke,{className:"centered",children:e.jsx(Bn,{color:u.primaryRed,fontSize:24})})})})]})}),e.jsx(w,{className:"empty"})]},l.source))})]}):e.jsxs(h,{children:[e.jsx(S,{children:"There is not any results for selected filters"}),e.jsx(Ee,{})]})},Ke=d(h)`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  cursor: pointer;
  background: transparent;
  color: ${u.lightBlue500};
  &.centered {
    margin: 0 auto;
  }

  & + & {
    margin-left: 4px;
  }
`,qe=d.a`
  color: ${u.white};
  text-decoration: underline;
  &:visited {
    color: ${u.white};
  }
  &:hover {
    cursor: pointer;
  }
`,Dr=()=>{const[t,n]=x.useState(!0),[r,o]=x.useState(""),[i,a]=J(c=>[c.queuedSources,c.setQueuedSources]);x.useEffect(()=>{(async()=>{n(!0);try{const f=await at({approved:"False"});a(f.data)}catch(f){console.warn(f)}finally{n(!1)}})()},[a]);const l=c=>{o(r===c||!c?"":c)},s=i==null?void 0:i.filter(c=>!r||c.source_type===r);return e.jsxs(Rr,{align:"stretch",direction:"column",justify:"flex-end",children:[e.jsxs(we,{align:"flex-start",justify:"space-between",children:[e.jsx(S,{className:"title",children:"Queued Sources"}),e.jsx(S,{className:"subtitle",children:"This is a queue of pending sources waiting for approval or denial from graph users. If you think a source will provide good content for the graph, you can pay to approve it. Think of this as an investment: you pay to add it to the source table, and if the content is popular you will earn from it. If content is not relevant to the graph, you should deny it."})]}),e.jsxs(h,{className:"filters",direction:"row",pb:16,px:36,children:[e.jsx(ge,{className:ae({selected:!r}),onClick:()=>l(""),size:"small",children:"All"}),Object.keys(X).map(c=>e.jsx(ge,{className:ae({selected:c===r}),onClick:()=>l(c),size:"small",children:X[c]},c))]}),e.jsx(Fr,{align:"center",justify:t?"center":"flex-start",children:t?e.jsx(P,{color:u.white}):e.jsx(Br,{data:s})})]})},Rr=d(h)`
  flex: 1;

  .title {
    margin-bottom: 32px;
    font-size: 20px;
    color: ${u.white};
    font-family: Barlow;
    font-size: 22px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  .subtitle {
    color: ${u.GRAY3};
    font-family: Barlow;
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  & .filters {
    overflow-x: auto;
  }
`,Fr=d(h)`
  min-height: 0;
  overflow: auto;
  flex: 1;
  width: 100%;
`,Lt=({onSearch:t,placeholder:n,activeIcon:r,defaultIcon:o,loadingIcon:i,loading:a,...l})=>{const[s,c]=x.useState(""),f=()=>{c(""),t("")},g=x.useCallback(y=>{t(y)},[t]),p=x.useMemo(()=>Me.debounce(g,300),[g]),m=y=>{const b=y.target.value.trim(),{value:C}=y.target;c(C),b?p(b):f()},j=()=>a?e.jsx(Xe,{children:e.jsx(Te,{type:"button",children:i})}):e.jsx(Xe,{children:s?e.jsx(Te,{onClick:f,type:"button",children:r}):e.jsx(Te,{type:"button",children:o})});return e.jsxs(Wr,{children:[e.jsx(Vr,{autoComplete:"off",autoCorrect:"off",inputProps:{"aria-label":"search"},onChange:m,placeholder:n,value:s,...l}),j()]})},Xe=d(h)`
  top: -50%;
  right: -3%;
  z-index: 3;
  position: absolute;
  transform: translate(-50%, 50%);
`,Te=d(se)`
  font-size: 24px;
`,Wr=d(Yn)`
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
`,Vr=d(Zn)`
  -webkit-autofill,
  -webkit-autocomplete,
  -webkit-contacts-auto-fill,
  -webkit-credentials-auto-fill {
    display: none !important;
    visibility: hidden !important;
    pointer-events: none !important;
    position: absolute !important;
    right: 0 !important;
  }

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
    background-color: ${u.BG2};
    padding: 0px 34px 0px 16px !important;
    box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);

    &:focus,
    &:active {
      color: ${u.white};
      background-color: ${u.BG2_ACTIVE_INPUT};
      outline: 1px solid ${u.primaryBlue};
    }

    &:hover {
      background-color: ${u.BG2_ACTIVE_INPUT};
    }

    &::placeholder {
      font-size: 15px;
      text-align: left;
      font-weight: 500;
      line-height: 16px;
      letter-spacing: 0em;
      font-family: Barlow;
      color: ${u.GRAY7};
    }
  }
  width: 100%;
`,Gr=({data:t,canEdit:n=!1})=>{const r=J(s=>s.setSources),[o,i]=x.useState(""),a=async(s,c)=>{if(t!=null&&t.length)try{await qt(s,c);const f=t==null?void 0:t.findIndex(p=>p.ref_id===s),g=[...t];g[f]={...g[f],source:c.source},r(g)}catch(f){console.warn(f)}},l=async s=>{if(!(!s||!(t!=null&&t.length))){i(s);try{await it(s),r(t==null?void 0:t.filter(c=>c.ref_id!==s))}catch(c){console.warn(c)}finally{i("")}}};return t!=null&&t.length?e.jsxs(be,{"aria-label":"a dense table",component:"table",id:"sources-table",size:"small",children:[e.jsx(ve,{children:e.jsxs(q,{component:"tr",children:[e.jsx(w,{className:"empty"}),e.jsx(w,{children:"Type"}),e.jsx(w,{align:"left",children:"Source"}),n&&e.jsx(w,{align:"left"}),e.jsx(w,{className:"empty"})]})}),e.jsx(Vn,{component:"tbody",children:t==null?void 0:t.map(s=>e.jsxs(Ce,{children:[e.jsx(w,{className:"empty"}),e.jsx(w,{align:"left",children:X[s.source_type]}),e.jsx(w,{align:"left",children:e.jsx(Ur,{condition:n,wrapper:c=>e.jsx(Hr,{id:s.ref_id,onSave:f=>a(s.ref_id,{source:f,source_type:s.source_type}),value:s.source,children:c}),children:s.source_type===Re||s.source_type===Fe||s.source_type===We?e.jsxs(e.Fragment,{children:[s.source_type===Re&&e.jsxs(ke,{href:`${bt}/${s.source}`,target:"_blank",children:["@",s.source]}),s.source_type===Fe&&e.jsx(ke,{href:`${s.source}${s.source.includes("?")?"&":"?"}open=system`,target:"_blank",children:s.source}),s.source_type===We&&e.jsx(ke,{href:s.source,target:"_blank",children:s.source})]}):e.jsx("div",{children:s.source})})}),n&&e.jsx(w,{align:"left",children:e.jsx("div",{className:"delete-wrapper",id:`delete-${s.source}`,children:o===s.ref_id?e.jsx($t,{"data-testid":`delete-loader-${s.ref_id}`,children:e.jsx(P,{color:u.white,size:16})}):e.jsx(jt,{"data-testid":`delete-icon-${s.ref_id}`,message:"Are you sure?",onConfirm:()=>l(s.ref_id),children:e.jsx(K,{className:"centered","data-testid":`delete-icon-${s.ref_id}`,children:e.jsx(qn,{})})})})}),e.jsx(w,{className:"empty"})]},s.source))})]}):e.jsxs(Zr,{children:[e.jsx(Wn,{}),e.jsx(S,{className:"text",children:"There is not any results for selected filters"})]})};function Ur({condition:t,wrapper:n,children:r}){return t?n(r):r}const Hr=({value:t,onSave:n,id:r,children:o})=>{const[i,a]=x.useState(!1),[l,s]=x.useState(t),[c,f]=x.useState(!1),g=async()=>{if(r){f(!0);try{await n(l),a(!1)}catch(p){console.warn(p)}finally{f(!1)}}};return e.jsx("div",{children:i?e.jsxs(Yr,{align:"center",direction:"row",children:[e.jsx(Kn,{className:"editable-cell__input",name:"cell-input",onChange:p=>s(p),value:l}),e.jsx(K,{align:"center",justify:"center",children:c?e.jsx($t,{"data-testid":`edit-loader-${r}`,children:e.jsx(P,{color:u.white,size:12})}):e.jsx(Dn,{"data-testid":`check-icon-${r}`,onClick:g})}),e.jsx(K,{align:"center",className:"secondary",justify:"center",onClick:()=>a(!1),children:e.jsx(gt,{})})]}):e.jsxs(Kr,{direction:"row",children:[o,e.jsx(K,{onClick:()=>a(!0),children:e.jsx(Rn,{"data-testid":`edit-icon-${r}`,size:20})})]})})},Yr=d(h)`
  display: flex;
  width: 250px;
  border: 2px solid ${u.lightBlue300};
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
`,K=d(h)`
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
`,Zr=d(h)`
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
    color: ${u.GRAY6};
  }
`,Kr=d(h)`
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
`,ke=d.a`
  color: ${u.white};
  text-decoration: underline;
  max-width: 400px;
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  &:visited {
    color: ${u.white};
  }
`,$t=d(h)`
  display: flex;
  justify-content: center;
  align-items: center;
`,qr=()=>{const[t,n]=x.useState(!0),[r,o]=x.useState(""),[i,a]=J(p=>[p.sources,p.setSources]),[l]=le(p=>[p.isAdmin]),[s,c]=x.useState("");x.useEffect(()=>{(async()=>{n(!0);try{const m=await at();a(m.data)}catch(m){console.warn(m)}finally{n(!1)}})()},[a]);const f=p=>{o(r===p||!p?"":p)},g=x.useMemo(()=>i==null?void 0:i.filter(p=>(!r||p.source_type===r)&&(p.source.toLowerCase().startsWith(s.toLowerCase())||p.source.toLowerCase().includes(s.toLowerCase())||`@${p.source.toLowerCase()}`.startsWith(s.toLowerCase())||`@${p.source.toLowerCase()}`.includes(s.toLowerCase()))),[s,r,i]);return e.jsxs(Xr,{align:"stretch",direction:"column",justify:"flex-end",children:[e.jsx(we,{align:"center",direction:"row",justify:"space-between",children:e.jsx(S,{className:"title",children:"Sources for this Graph"})}),e.jsx(Jr,{children:e.jsx(Lt,{activeIcon:e.jsx(ce,{}),defaultIcon:e.jsx(ht,{}),loading:t,loadingIcon:e.jsx(P,{color:u.lightGray,size:24}),onSearch:c,placeholder:"Find Source"})}),e.jsxs(h,{className:"filters",direction:"row",pb:16,px:36,children:[e.jsx(ge,{className:ae({selected:!r}),onClick:()=>f(""),size:"small",children:"All"}),Object.keys(X).map(p=>e.jsx(ge,{className:ae({selected:p===r}),onClick:()=>f(p),size:"small",children:X[p]},p))]}),e.jsx(Qr,{align:"center",justify:t?"center":"flex-start",children:t?e.jsx(P,{color:u.white}):e.jsx(Gr,{canEdit:l,data:g})})]})},Xr=d(h)`
  flex: 1;
  .title {
    font-size: 20px;
    color: ${u.white};
    font-family: Barlow;
    font-size: 22px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  & .filters {
    overflow-x: auto;
  }
`,Qr=d(h)`
  min-height: 0;
  overflow: auto;
  flex: 1;
  width: 100%;
`,Jr=d(h)`
  margin: 0 0 16px 36px;
`,Et=t=>e.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 6 10",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M6 5L6.90043e-08 9.33013L4.47556e-07 0.669872L6 5Z",fill:"currentColor"})}),Nt=t=>e.jsxs("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M4.5 6.04386L7.83333 2.83398V13.6673",stroke:"white","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}),e.jsx("path",{d:"M15.5 13.9581L12.1667 17.168L12.1667 6.33463",stroke:"white","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"})]}),It=t=>e.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 10 10",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("circle",{cx:"5",cy:"5",r:"4.5",fill:"currentColor",stroke:"#6B7A8D"})}),eo=({selectedType:t,setSelectedType:n})=>{const[r,o]=x.useState([]);x.useEffect(()=>{(async()=>{try{const{data:s}=await Xt();o(s.edge_types)}catch(s){console.warn(s)}})()},[o]);const i=l=>({label:l,value:l}),a=l=>{n((l==null?void 0:l.value)||"")};return e.jsx(De,{onSelect:a,options:r.map(i),selectedValue:t?i(t):null})},_i={label:"Not Selected",value:"Not Selected"},Ti={label:"No Parent",value:"No Parent"},ki=[{label:"number",value:"int"},{label:"string",value:"string"}],Ot=[{label:"Corporation",value:"Corporation"},{label:"Event",value:"Event"},{label:"Image",value:"Image"},{label:"Organization",value:"Organization"},{label:"Person",value:"Person"},{label:"Place",value:"Place"},{label:"Project",value:"Project"},{label:"Software",value:"Software"},{label:"Topic",value:"Topic"}],Ai=/^[^\s].*$/,to=({onSelect:t,selectedValue:n,topicId:r})=>{const[o,i]=x.useState([]),[a,l]=x.useState(!1),s=x.useMemo(()=>{const m=async j=>{const y={is_muted:"False",sort_by:ze,search:j,skip:"0",limit:"1000"};l(!0);try{const C=(await lt(y.search)).data.filter(k=>(k==null?void 0:k.ref_id)!==r);i(C)}catch{i([])}finally{l(!1)}};return Me.debounce(m,300)},[r]),c=m=>{if(!m){i([]);return}m.length>2&&s(m)},f=m=>{const j=m?o.find(y=>y.ref_id===m.value):null;t(j||null)},g=m=>({label:m.search_value,value:m.ref_id,type:m.node_type}),p=m=>m.map(g);return n?e.jsxs(h,{align:"center",basis:"100%",direction:"row",grow:1,shrink:1,children:[e.jsx("span",{children:n.search_value}),e.jsx(Ct,{onClick:()=>t(null),size:"medium",children:e.jsx(ce,{})})]}):e.jsx(De,{handleInputChange:c,isLoading:a,onSelect:f,options:p(o)||Ot,selectedValue:n?g(n):null})},no=({from:t,onSelect:n,selectedType:r,setSelectedType:o,isSwapped:i,setIsSwapped:a,selectedToNode:l})=>e.jsxs(h,{mb:20,children:[e.jsx(h,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(h,{align:"center",direction:"row",children:e.jsx(ro,{children:"Add edge"})})}),e.jsxs(io,{swap:i,children:[e.jsx(h,{children:e.jsx(ao,{disabled:!0,label:i?"To":"From",swap:i,value:t==null?void 0:t.name})}),e.jsxs(h,{my:16,children:[e.jsx(so,{children:"Type"}),e.jsx(eo,{selectedType:r,setSelectedType:o})]}),e.jsx(h,{children:e.jsxs(lo,{children:[e.jsx(co,{children:i?"From":"To"}),e.jsx(to,{onSelect:n,selectedValue:l,topicId:t==null?void 0:t.ref_id})]})}),e.jsxs(oo,{children:[e.jsx(po,{children:e.jsx(It,{})}),e.jsx(ho,{onClick:a,children:e.jsx(Nt,{})}),e.jsx(uo,{children:e.jsx(Et,{})})]})]})]}),ro=d(S)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,oo=d.div`
  position: absolute;
  top: 26px;
  bottom: 26px;
  left: 4px;
  width: 35px;
  border-left: 1.5px solid #6b7a8d4d;
  border-top: 1.5px solid #6b7a8d4d;
  border-bottom: 1.5px solid #6b7a8d4d;
  border-radius: 12px 0 0 12px;
`,so=d.label`
  color: #bac1c6;
  font-size: 13px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0.01em;
  text-align: left;
  margin-bottom: 6px;
`,io=d.div`
  position: relative;
  color: white;
  font-family: 'Barlow';
  display: flex;
  flex-direction: ${t=>t.swap?"column-reverse":"column"};
  margin-bottom: 10px;
  padding-left: 38px;
`,ao=d(Tt)`
  position: relative;
  width: 100%;
  padding: 16px;
  gap: 10px;
  border-radius: 6px;
  border: 1px solid #6b7a8d4d;
  opacity: 0px;
  display: flex;
`,lo=d.div`
  position: relative;
  width: 100%;
  padding: 15px;
  gap: 10px;
  border-radius: 6px;
  border: 1.4px solid #6b7a8d4d;
  opacity: 0px;
  display: flex;
  align-items: center;
`,co=d.label`
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
`,po=d.div`
  position: absolute;
  top: 0;
  right: 0;
  transform: translateY(-50%) translateX(50%);
  color: #23252f;
`,ho=d.div`
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
`,uo=d.div`
  position: absolute;
  bottom: 0;
  right: 0;
  transform: translateY(10px) translateX(3px);
  color: #6b7a8d;
  line-height: 1;
`,xo=({topic:t,onClose:n})=>{const{close:r}=G("addEdge"),[o]=W(C=>[C.data]),i=de({mode:"onChange"}),[a,l]=x.useState(!1),[s,c]=x.useState(!1),[f,g]=x.useState(""),[p,m]=x.useState(null),j=()=>{n(),r()},y=async()=>{if(!(!p||!o)){c(!0);try{await Qt({from:t.ref_id,to:p==null?void 0:p.ref_id,relationship:f});const{ref_id:C}=t,{ref_id:k}=p;if(o){const _={...o};_[C]={..._[C],edgeList:[..._[C].edgeList,f]},_[k]&&(_[k]={..._[k],edgeList:[..._[k].edgeList,f]}),W.setState({data:_})}j()}catch(C){console.warn(C)}finally{c(!1)}}},b=s||!p||!f;return e.jsx(Be,{id:"addEdge",kind:"small",onClose:j,preventOutsideClose:!0,children:e.jsxs(pe,{...i,children:[e.jsx(no,{from:t,isSwapped:a,onSelect:m,selectedToNode:p,selectedType:f,setIsSwapped:()=>l(!a),setSelectedType:g}),e.jsxs(fo,{color:"secondary",disabled:b,onClick:y,size:"large",variant:"contained",children:["Confirm",s&&e.jsx(mo,{children:e.jsx(P,{color:u.lightGray,size:12})})]})]})})},fo=d(U)`
  width: 293px !important;
  margin: 0 0 10px auto !important;
`,mo=d.span`
  margin-top: 2px;
`,go=()=>e.jsxs(h,{children:[e.jsx(h,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(h,{align:"center",direction:"row",children:e.jsx(yo,{children:"Edit topic"})})}),e.jsx(h,{mb:12,children:e.jsx(oe,{id:"cy-topic",maxLength:50,name:"name",placeholder:"Add your topic",rules:{...Jt}})})]}),yo=d(S)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,jo=({topic:t,onClose:n})=>{const{close:r}=G("editTopic"),[o]=W(C=>[C.data]),i=de({mode:"onChange"}),{watch:a,setValue:l,reset:s,getValues:c}=i,[f,g]=x.useState(!1);x.useEffect(()=>(t&&l("name",t==null?void 0:t.name),()=>{s()}),[t,l,s]);const p=a("name"),m=p==null?void 0:p.trim(),j=()=>{n(),r()},y=async()=>{g(!0);try{if(await je((t==null?void 0:t.ref_id)||"",{name:m}),o){const C={...o};C[t==null?void 0:t.ref_id].name=m,W.setState({data:C})}j()}catch(C){console.warn(C)}finally{g(!1)}},b=c().name&&(t==null?void 0:t.name)!==c().name;return e.jsx(Be,{id:"editTopic",kind:"regular",onClose:j,preventOutsideClose:!0,children:e.jsxs(pe,{...i,children:[e.jsx(go,{}),e.jsxs(U,{color:"secondary",disabled:f||!m||!b,onClick:y,size:"large",variant:"contained",children:["Save Changes",f&&e.jsx(bo,{children:e.jsx(P,{color:u.lightGray,size:12})})]})]})})},bo=d.span`
  margin-top: 2px;
`,Co=({topicId:t,onSelect:n,selectedValue:r,dataId:o})=>{const[i,a]=x.useState([]),[l,s]=x.useState(!1),c=x.useMemo(()=>{const j=async y=>{const b={is_muted:"False",sort_by:ze,search:y,skip:"0",limit:"1000"};s(!0);try{const k=(await lt(b.search)).data.filter(_=>(_==null?void 0:_.ref_id)!==t);a(k)}catch{a([])}finally{s(!1)}};return Me.debounce(j,300)},[t]),f=j=>{if(!j){a([]);return}j.length>2&&c(j)},g=j=>{const y=j?i.find(b=>b.ref_id===j.value):null;n(y||null)},p=j=>({label:j.search_value,value:j.ref_id,type:j.node_type}),m=j=>j.map(p);return r?e.jsxs(h,{align:"center",basis:"100%",direction:"row",grow:1,shrink:1,children:[e.jsx("span",{children:r.search_value}),e.jsx(Ct,{onClick:()=>n(null),size:"medium",children:e.jsx(ce,{})})]}):e.jsx(De,{dataId:o,handleInputChange:f,isLoading:l,onSelect:g,options:m(i)||Ot,selectedValue:r?p(r):null})},vo=({from:t,onSelect:n,selectedToNode:r,isSwapped:o,setIsSwapped:i})=>{var s;const a=t==null?void 0:t.map(c=>c.name).join(", "),l=t&&t.length===1?t[0].name:`${a==null?void 0:a.substring(0,25)} ...`;return e.jsxs(h,{mb:20,children:[e.jsx(h,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(h,{align:"center",direction:"row",children:e.jsx(wo,{children:"Merge topic"})})}),e.jsxs(To,{swap:o,children:[e.jsx(So,{children:e.jsx(ko,{disabled:!0,label:o?"To":"From",swap:o,value:l})}),e.jsxs(h,{my:16,children:[e.jsx(Lo,{children:"Type"}),e.jsx(S,{children:"IS ALIAS"})]}),e.jsx(h,{children:e.jsxs(Ao,{children:[e.jsx($o,{children:o?"From":"To"}),e.jsx(Co,{dataId:"to-node",onSelect:n,selectedValue:r,topicId:(s=t[t.length-1])==null?void 0:s.ref_id})]})}),e.jsxs(_o,{children:[e.jsx(Eo,{children:e.jsx(It,{})}),e.jsx(No,{"data-testid":"swap-icon",disabled:(t==null?void 0:t.length)!==1,onClick:(t==null?void 0:t.length)===1?i:void 0,children:e.jsx(Nt,{})}),e.jsx(Io,{children:e.jsx(Et,{})})]})]})]})},wo=d(S)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,So=d(h)`
  flex: 1 1 100%;
`,_o=d.div`
  position: absolute;
  top: 26px;
  bottom: 26px;
  left: 4px;
  width: 35px;
  border-left: 1.5px solid #6b7a8d4d;
  border-top: 1.5px solid #6b7a8d4d;
  border-bottom: 1.5px solid #6b7a8d4d;
  border-radius: 12px 0 0 12px;
`,To=d.div`
  position: relative;
  color: white;
  font-family: 'Barlow';
  display: flex;
  flex-direction: ${t=>t.swap?"column-reverse":"column"};
  margin-bottom: 10px;
  padding-left: 38px;
`,ko=d(Tt)`
  position: relative;
  width: 100%;
  padding: 16px;
  gap: 10px;
  border-radius: 6px;
  border: 1px solid #6b7a8d4d;
  opacity: 0px;
  display: flex;
`,Ao=d.div`
  position: relative;
  width: 100%;
  padding: 15px;
  gap: 10px;
  border-radius: 6px;
  border: 1.4px solid #6b7a8d4d;
  opacity: 0px;
  display: flex;
  align-items: center;
`,Lo=d.label`
  color: #bac1c6;
  font-size: 13px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0.01em;
  text-align: left;
  margin-bottom: 6px;
`,$o=d.label`
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
`,Eo=d.div`
  position: absolute;
  top: 0;
  right: 0;
  transform: translateY(-50%) translateX(50%);
  color: #23252f;
`,No=d.div`
  position: absolute;
  color: transparent;
  top: 50%;
  left: 0;
  transform: translateY(-50%) translateX(-50%);
  cursor: ${t=>t.disabled?"not-allowed":"pointer"};
  width: 32px;
  height: 32px;
  background-color: #303342;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
`,Io=d.div`
  position: absolute;
  bottom: 0;
  right: 0;
  transform: translateY(10px) translateX(3px);
  color: #6b7a8d;
  line-height: 1;
`,Oo=({onClose:t,multiTopics:n})=>{const{close:r}=G("mergeTopic"),o=de({mode:"onChange"}),{setValue:i,reset:a}=o,[l,s]=x.useState(!1),[c,f]=x.useState(!1),[g,p]=x.useState(null);x.useEffect(()=>{if(n&&n.length>0){const y=n.map(b=>b.name).join(", ");i("name",y)}return()=>{a()}},[n,i,a]);const m=()=>{t(),r()},j=async()=>{s(!0);const y=n==null?void 0:n.map(b=>b.ref_id).filter(b=>!!b);try{y.length&&g&&(await en({from:y,to:g==null?void 0:g.ref_id}),W.setState(b=>({ids:b.ids.filter(C=>!y.includes(C)),total:b.total-y.length})),m())}catch(b){console.warn(b)}finally{s(!1)}};return e.jsx(Be,{id:"mergeTopic",kind:"small",onClose:m,preventOutsideClose:!0,children:e.jsxs(pe,{...o,children:[e.jsx(vo,{from:n,isSwapped:c,onSelect:p,selectedToNode:g,setIsSwapped:()=>f(!c)}),e.jsxs(Po,{color:"secondary","data-testid":"merge-topics-button",disabled:l||!g,onClick:j,size:"large",variant:"contained",children:["Merge topics",l&&e.jsx(Mo,{children:e.jsx(P,{color:u.lightGray,size:12})})]})]})})},Po=d(U)`
  width: 293px !important;
  margin: 0 0 10px auto !important;
`,Mo=d.span`
  margin-top: 2px;
`,zo=t=>e.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M7.37516 8.625V11.3334C7.37516 11.5104 7.43508 11.6589 7.55491 11.7786C7.67476 11.8984 7.82326 11.9583 8.00041 11.9583C8.17758 11.9583 8.32599 11.8984 8.44564 11.7786C8.5653 11.6589 8.62512 11.5104 8.62512 11.3334V8.625H11.3335C11.5106 8.625 11.659 8.56508 11.7788 8.44525C11.8986 8.3254 11.9585 8.1769 11.9585 7.99975C11.9585 7.82258 11.8986 7.67417 11.7788 7.55452C11.659 7.43487 11.5106 7.37504 11.3335 7.37504H8.62512V4.66669C8.62512 4.4896 8.56521 4.34117 8.44537 4.22137C8.32553 4.1016 8.17702 4.04171 7.99987 4.04171C7.82271 4.04171 7.6743 4.1016 7.55464 4.22137C7.43499 4.34117 7.37516 4.4896 7.37516 4.66669V7.37504H4.66681C4.48973 7.37504 4.3413 7.43496 4.22152 7.55479C4.10173 7.67464 4.04183 7.82314 4.04183 8.00029C4.04183 8.17746 4.10173 8.32587 4.22152 8.44552C4.3413 8.56517 4.48973 8.625 4.66681 8.625H7.37516ZM8.00154 15.9167C6.90659 15.9167 5.8774 15.7089 4.91395 15.2933C3.9505 14.8778 3.11243 14.3138 2.39975 13.6015C1.68705 12.8891 1.12284 12.0514 0.7071 11.0884C0.291364 10.1253 0.0834961 9.09636 0.0834961 8.00142C0.0834961 6.90647 0.291274 5.87728 0.70683 4.91383C1.12239 3.95037 1.68634 3.11231 2.3987 2.39963C3.11108 1.68693 3.94878 1.12272 4.91181 0.706979C5.87482 0.291243 6.9038 0.083374 7.99875 0.083374C9.09369 0.083374 10.1229 0.291153 11.0863 0.706708C12.0498 1.12226 12.8879 1.68622 13.6005 2.39858C14.3132 3.11096 14.8774 3.94866 15.2932 4.91169C15.7089 5.8747 15.9168 6.90368 15.9168 7.99863C15.9168 9.09357 15.709 10.1228 15.2935 11.0862C14.8779 12.0497 14.3139 12.8877 13.6016 13.6004C12.8892 14.3131 12.0515 14.8773 11.0885 15.2931C10.1255 15.7088 9.09648 15.9167 8.00154 15.9167ZM8.00014 14.6667C9.86125 14.6667 11.4376 14.0209 12.7293 12.7292C14.021 11.4375 14.6668 9.86113 14.6668 8.00002C14.6668 6.13891 14.021 4.56252 12.7293 3.27085C11.4376 1.97919 9.86125 1.33335 8.00014 1.33335C6.13903 1.33335 4.56264 1.97919 3.27098 3.27085C1.97931 4.56252 1.33348 6.13891 1.33348 8.00002C1.33348 9.86113 1.97931 11.4375 3.27098 12.7292C4.56264 14.0209 6.13903 14.6667 8.00014 14.6667Z",fill:"currentColor"})}),Bo=t=>e.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 12 12",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M10.1765 0.310088L4.72809 5.70971C4.63832 5.79868 4.56637 5.90372 4.51607 6.01926L3.74627 7.78746C3.63822 8.03565 3.89191 8.28707 4.14234 8.17999L5.92651 7.41707C6.04309 7.36722 6.14907 7.29592 6.23885 7.20695L11.6872 1.80733C12.1044 1.39388 12.1044 0.723539 11.6872 0.310088C11.27 -0.103363 10.5936 -0.103363 10.1765 0.310088ZM9.80835 7.14088C9.80835 6.81895 10.072 6.55777 10.3969 6.55777C10.723 6.55777 10.9854 6.82017 10.9854 7.14088L10.9191 10.2508C10.9191 11.2153 10.1489 12.0001 9.17571 12.0001H1.74343C0.79227 12.0001 0 11.2153 0 10.2289V2.84292C0 1.89999 0.79227 1.11523 1.74343 1.11523L5.29651 1.11548C5.62264 1.11548 5.88501 1.37666 5.88501 1.69858C5.88501 2.0205 5.62141 2.28168 5.29651 2.28168H1.7655C1.44134 2.28168 1.177 2.54335 1.177 2.86479V10.2508C1.177 10.5722 1.44134 10.8339 1.7655 10.8339H9.21985C9.54402 10.8339 9.80835 10.5722 9.80835 10.2508V7.14088Z",fill:"currentColor"})}),Qe=t=>e.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 12 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M1.33317 15.5L0.166504 14.3333L4.18734 10.2917C4.50678 9.97222 4.74984 9.61111 4.9165 9.20833C5.08317 8.80556 5.1665 8.38194 5.1665 7.9375L5.1665 3.6875L3.83317 5L2.6665 3.83333L5.99984 0.5L9.33317 3.83333L8.1665 5L6.83317 3.6875L6.83317 7.9375C6.83317 8.38194 6.9165 8.80556 7.08317 9.20833C7.24984 9.61111 7.49289 9.97222 7.81234 10.2917L11.8332 14.3333L10.6665 15.5L5.99984 10.8333L1.33317 15.5Z",fill:"currentColor"})}),Ae=t=>e.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 12 8",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M0.333496 7.66704V6.66706H3.91681V7.66704H0.333496ZM0.333496 4.50037V3.50041H7.7886V4.50037H0.333496ZM0.333496 1.33372V0.33374H11.6668V1.33372H0.333496Z",fill:"currentColor"})}),Je=t=>e.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 16 15",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M14.0716 15L10.8994 11.7764C10.437 11.9597 9.96181 12.0919 9.47381 12.1732C8.98581 12.2545 8.49002 12.2952 7.98643 12.2952C6.33597 12.2952 4.82448 11.8457 3.45194 10.9466C2.07941 10.0476 0.991584 8.86271 0.188459 7.39193C0.123124 7.27666 0.0753836 7.15933 0.045238 7.03994C0.0150793 6.92055 0 6.7991 0 6.67559C0 6.55208 0.0163338 6.42935 0.0490013 6.30739C0.0816688 6.18543 0.13067 6.06938 0.196005 5.95925C0.508607 5.42714 0.84081 4.91226 1.19261 4.41462C1.54443 3.91699 1.95353 3.47673 2.41992 3.09386L0.24877 0.846015L1.07501 0L14.8978 14.154L14.0716 15ZM7.98643 9.94854C8.16032 9.94854 8.32642 9.93799 8.48473 9.91689C8.64305 9.89579 8.7976 9.84973 8.94838 9.77871L4.95591 5.69059C4.89158 5.84498 4.84786 6.00324 4.82475 6.16535C4.80162 6.32745 4.79005 6.49753 4.79005 6.67559C4.79005 7.58645 5.10039 8.35966 5.72108 8.99521C6.34176 9.63076 7.09688 9.94854 7.98643 9.94854ZM13.4384 10.3561L10.9792 7.85816C11.0456 7.66673 11.0961 7.47375 11.1308 7.27922C11.1655 7.0847 11.1828 6.88349 11.1828 6.67559C11.1828 5.76473 10.8725 4.99152 10.2518 4.35597C9.63109 3.72042 8.87598 3.40264 7.98643 3.40264C7.78339 3.40264 7.58689 3.42168 7.39692 3.45976C7.20694 3.49784 7.02099 3.56011 6.83907 3.64657L4.87751 1.64575C5.37606 1.44402 5.88441 1.29529 6.40257 1.19957C6.92071 1.10385 7.44867 1.05599 7.98643 1.05599C9.64191 1.05599 11.1604 1.50756 12.542 2.41072C13.9236 3.31387 15.0134 4.50598 15.8115 5.98705C15.8718 6.08894 15.9183 6.19829 15.951 6.31511C15.9837 6.43192 16 6.55208 16 6.67559C16 6.7991 15.9857 6.91926 15.957 7.03607C15.9284 7.15289 15.8839 7.26225 15.8236 7.36414C15.52 7.94669 15.1738 8.49038 14.7848 8.99521C14.3958 9.50005 13.947 9.95369 13.4384 10.3561ZM10.0912 6.95657L7.73162 4.54816C8.06131 4.48126 8.38246 4.50545 8.69506 4.62072C9.00767 4.736 9.27754 4.9156 9.5047 5.15952C9.7369 5.40036 9.90451 5.67723 10.0075 5.99012C10.1106 6.30301 10.1385 6.62516 10.0912 6.95657Z",fill:"currentColor"})}),et=t=>e.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 18 13",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M9.00204 9.98073C9.94628 9.98073 10.7483 9.65024 11.408 8.98927C12.0677 8.32829 12.3976 7.52567 12.3976 6.58142C12.3976 5.63718 12.0671 4.8352 11.4061 4.17548C10.7451 3.51576 9.9425 3.1859 8.99825 3.1859C8.05401 3.1859 7.25203 3.51638 6.59231 4.17735C5.93259 4.83834 5.60273 5.64096 5.60273 6.58521C5.60273 7.52944 5.93321 8.33142 6.59419 8.99115C7.25517 9.65087 8.05779 9.98073 9.00204 9.98073ZM9.00014 8.83331C8.37514 8.83331 7.84389 8.61456 7.40639 8.17706C6.96889 7.73956 6.75014 7.20831 6.75014 6.58331C6.75014 5.95831 6.96889 5.42706 7.40639 4.98956C7.84389 4.55206 8.37514 4.33331 9.00014 4.33331C9.62514 4.33331 10.1564 4.55206 10.5939 4.98956C11.0314 5.42706 11.2501 5.95831 11.2501 6.58331C11.2501 7.20831 11.0314 7.73956 10.5939 8.17706C10.1564 8.61456 9.62514 8.83331 9.00014 8.83331ZM9.00129 12.4166C7.08494 12.4166 5.33884 11.888 3.76298 10.8309C2.18713 9.77374 1.02688 8.35788 0.282227 6.58331C1.02688 4.80874 2.18675 3.39288 3.76185 2.33573C5.33694 1.27858 7.08265 0.75 8.999 0.75C10.9153 0.75 12.6614 1.27858 14.2373 2.33573C15.8132 3.39288 16.9734 4.80874 17.7181 6.58331C16.9734 8.35788 15.8135 9.77374 14.2384 10.8309C12.6634 11.888 10.9176 12.4166 9.00129 12.4166Z",fill:"currentColor"})}),Do=t=>e.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:e.jsxs("g",{opacity:"0.4",children:[e.jsx("mask",{id:"mask0_5162_13105",maskUnits:"userSpaceOnUse",x:"0",y:"0",width:"24",height:"24",children:e.jsx("rect",{width:"1em",height:"1em",fill:"currentColor"})}),e.jsx("g",{mask:"url(#mask0_5162_13105)",children:e.jsx("path",{d:"M19.7615 21.8691L15.7154 17.8537C15.1256 18.0819 14.5195 18.2467 13.8971 18.348C13.2747 18.4493 12.6423 18.4999 12 18.4999C9.89486 18.4999 7.96698 17.94 6.21635 16.8201C4.46572 15.7002 3.07822 14.2243 2.05385 12.3922C1.97052 12.2486 1.90963 12.1025 1.87118 11.9538C1.83271 11.8051 1.81348 11.6538 1.81348 11.4999C1.81348 11.3461 1.83431 11.1932 1.87598 11.0413C1.91764 10.8894 1.98014 10.7448 2.06348 10.6076C2.46219 9.9448 2.88591 9.30345 3.33463 8.68357C3.78336 8.0637 4.30516 7.51531 4.90003 7.0384L2.13078 4.2384L3.18463 3.18457L20.8153 20.8153L19.7615 21.8691ZM12 15.5768C12.2218 15.5768 12.4336 15.5637 12.6356 15.5374C12.8375 15.5111 13.0346 15.4537 13.2269 15.3653L8.13463 10.273C8.05258 10.4653 7.99681 10.6624 7.96733 10.8643C7.93783 11.0663 7.92308 11.2781 7.92308 11.4999C7.92308 12.6345 8.31891 13.5977 9.11058 14.3893C9.90224 15.181 10.8654 15.5768 12 15.5768ZM18.9538 16.0845L15.8173 12.973C15.9019 12.7345 15.9663 12.4941 16.0105 12.2518C16.0548 12.0095 16.0769 11.7589 16.0769 11.4999C16.0769 10.3653 15.681 9.40219 14.8894 8.61052C14.0977 7.81885 13.1346 7.42302 12 7.42302C11.741 7.42302 11.4904 7.44674 11.2481 7.49417C11.0058 7.5416 10.7686 7.61917 10.5366 7.72687L8.03463 5.23457C8.67051 4.98329 9.3189 4.79803 9.9798 4.6788C10.6407 4.55956 11.3141 4.49995 12 4.49995C14.1115 4.49995 16.0484 5.06245 17.8105 6.18745C19.5727 7.31245 20.9628 8.79738 21.9807 10.6422C22.0576 10.7692 22.1169 10.9054 22.1586 11.0509C22.2003 11.1964 22.2211 11.3461 22.2211 11.4999C22.2211 11.6538 22.2028 11.8034 22.1663 11.9489C22.1297 12.0945 22.073 12.2307 21.9961 12.3576C21.6089 13.0832 21.1673 13.7605 20.6711 14.3893C20.175 15.0182 19.6025 15.5832 18.9538 16.0845ZM14.6846 11.8499L11.675 8.84992C12.0955 8.76659 12.5051 8.79671 12.9038 8.9403C13.3025 9.0839 13.6468 9.30761 13.9365 9.61145C14.2327 9.91145 14.4465 10.2563 14.5779 10.6461C14.7093 11.0358 14.7449 11.4371 14.6846 11.8499Z",fill:"currentColor"})})]})}),Ro=t=>e.jsxs("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("mask",{id:"mask0_5162_13106",maskUnits:"userSpaceOnUse",x:"0",y:"0",width:"24",height:"24",children:e.jsx("rect",{width:"1em",height:"1em",fill:"currentColor"})}),e.jsx("g",{mask:"url(#mask0_5162_13106)",children:e.jsx("path",{d:"M12.0023 15.5769C13.1354 15.5769 14.0978 15.1803 14.8895 14.3871C15.6811 13.5939 16.077 12.6308 16.077 11.4977C16.077 10.3646 15.6804 9.40224 14.8872 8.61058C14.094 7.81891 13.1309 7.42308 11.9978 7.42308C10.8647 7.42308 9.90234 7.81966 9.11067 8.61282C8.31901 9.40601 7.92317 10.3692 7.92317 11.5023C7.92317 12.6353 8.31976 13.5977 9.11293 14.3894C9.90611 15.181 10.8692 15.5769 12.0023 15.5769ZM12.0001 14.2C11.2501 14.2 10.6126 13.9375 10.0876 13.4125C9.56258 12.8875 9.30007 12.25 9.30007 11.5C9.30007 10.75 9.56258 10.1125 10.0876 9.58748C10.6126 9.06248 11.2501 8.79998 12.0001 8.79998C12.7501 8.79998 13.3876 9.06248 13.9126 9.58748C14.4376 10.1125 14.7001 10.75 14.7001 11.5C14.7001 12.25 14.4376 12.8875 13.9126 13.4125C13.3876 13.9375 12.7501 14.2 12.0001 14.2ZM12.0014 18.5C9.70183 18.5 7.60651 17.8657 5.71547 16.5971C3.82446 15.3285 2.43216 13.6295 1.53857 11.5C2.43216 9.37049 3.82401 7.67146 5.71412 6.40288C7.60422 5.13429 9.69908 4.5 11.9987 4.5C14.2983 4.5 16.3936 5.13429 18.2847 6.40288C20.1757 7.67146 21.568 9.37049 22.4616 11.5C21.568 13.6295 20.1761 15.3285 18.286 16.5971C16.3959 17.8657 14.3011 18.5 12.0014 18.5Z",fill:"currentColor"})})]}),Fo=t=>e.jsxs("svg",{width:"1em",height:"1em",viewBox:"0 0 22 22",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("mask",{id:"mask0_5577_416",maskUnits:"userSpaceOnUse",x:"0",y:"0",width:"22",height:"22",children:e.jsx("rect",{width:"1em",height:"1em",fill:"currentColor"})}),e.jsx("g",{mask:"url(#mask0_5577_416)",children:e.jsx("path",{d:"M11 17.6634C10.6219 17.6634 10.2982 17.5287 10.0289 17.2595C9.75964 16.9902 9.625 16.6665 9.625 16.2884C9.625 15.9103 9.75964 15.5866 10.0289 15.3173C10.2982 15.0481 10.6219 14.9134 11 14.9134C11.3781 14.9134 11.7018 15.0481 11.971 15.3173C12.2403 15.5866 12.375 15.9103 12.375 16.2884C12.375 16.6665 12.2403 16.9902 11.971 17.2595C11.7018 17.5287 11.3781 17.6634 11 17.6634ZM11 12.3749C10.6219 12.3749 10.2982 12.2403 10.0289 11.971C9.75964 11.7018 9.625 11.3781 9.625 11C9.625 10.6218 9.75964 10.2982 10.0289 10.0289C10.2982 9.75962 10.6219 9.62498 11 9.62498C11.3781 9.62498 11.7018 9.75962 11.971 10.0289C12.2403 10.2982 12.375 10.6218 12.375 11C12.375 11.3781 12.2403 11.7018 11.971 11.971C11.7018 12.2403 11.3781 12.3749 11 12.3749ZM11 7.08648C10.6219 7.08648 10.2982 6.95184 10.0289 6.68257C9.75964 6.41332 9.625 6.08963 9.625 5.7115C9.625 5.33339 9.75964 5.0097 10.0289 4.74043C10.2982 4.47118 10.6219 4.33655 11 4.33655C11.3781 4.33655 11.7018 4.47118 11.971 4.74043C12.2403 5.0097 12.375 5.33339 12.375 5.7115C12.375 6.08963 12.2403 6.41332 11.971 6.68257C11.7018 6.95184 11.3781 7.08648 11 7.08648Z",fill:"currentColor"})})]}),Wo=({topic:t,onClick:n,onSearch:r,checkedStates:o,setCheckedStates:i,isMuteDisabled:a})=>{const[l,s]=W(A=>[A.ids,A.total]),[c,f]=x.useState(!1),[g,p]=x.useState(!1),m=Ne(t.date_added_to_graph),j=async(A,v)=>{f(!0);try{await je(A,{is_muted:v}),W.setState({ids:l.filter($=>$!==A),total:s-1})}catch($){console.warn($)}},y=A=>{i(v=>({...v,[A]:!v[A]}))},b=(A,v)=>{var $;($=window.getSelection())!=null&&$.toString()?A.preventDefault():r(v.name)},C=t.edgeList.slice(0,1),k=t.edgeList.length-C.length,[_,I]=O.useState(null),B=A=>{I(A.currentTarget),p(!0)},E=()=>{p(!1)},L=!!_&&g,M=o[t.ref_id]?"visible":"";return e.jsxs(Ce,{className:o[t.ref_id]?"checked":"",children:[e.jsx(w,{children:e.jsx(Uo,{className:`checkbox-section ${M}`,"data-testid":"topic-check-box",onClick:()=>y(t.ref_id),children:e.jsx(Ho,{checked:o[t.ref_id],children:e.jsx(Yo,{children:o[t.ref_id]&&e.jsx(kt,{})})})})}),e.jsx(w,{onClick:A=>b(A,t),children:e.jsx(Go,{children:t.name})}),e.jsx(w,{children:t.node_type}),e.jsx(w,{children:e.jsx(Zo,{children:t.edgeCount})}),e.jsxs(w,{children:[e.jsx(_t,{anchorEl:_,anchorOrigin:{vertical:"top",horizontal:"center"},disableRestoreFocus:!0,id:"mouse-over-popover",onClose:E,onMouseEnter:()=>p(!0),onMouseLeave:E,open:L,sx:{pointerEvents:"auto","& .MuiPaper-root":{backgroundColor:"rgba(0, 0, 0, 0.9)",borderRadius:"4px",width:"160px",maxHeight:"200px",overflowY:"scroll"}},transformOrigin:{vertical:"bottom",horizontal:"center"},children:e.jsx(Ze,{sx:{p:1.5,fontSize:"13px",fontWeight:400,lineHeight:"1.8",wordWrap:"break-word"},children:t.edgeList.join(", ")})}),C.join(", "),k>0&&e.jsx(Ze,{"aria-haspopup":"true","aria-owns":L?"mouse-over-popover":void 0,component:"span",onMouseEnter:B,onMouseLeave:E,sx:{cursor:"pointer"},children:",..."})]}),e.jsx(w,{children:e.jsx("span",{children:m})}),e.jsx(w,{className:"cell-center",children:e.jsx(h,{direction:"row",justify:"space-between",children:e.jsx("div",{className:"approve-wrapper",children:c?e.jsx(Vo,{children:e.jsx(P,{color:u.white,size:16})}):e.jsxs(h,{direction:"row",children:[t.is_muted?e.jsx(se,{className:"centered",disabled:a,onClick:()=>j(t.ref_id,!1),children:e.jsx(Ro,{})}):e.jsx(se,{className:"centered",disabled:a,onClick:()=>j(t.ref_id,!0),children:e.jsx(Do,{})}),e.jsx(se,{disabled:a,onClick:A=>n(A,t.ref_id),children:e.jsx(Fo,{"data-testid":"ThreeDotsIcons"})})]})})})})]},t.name)},Vo=d.span`
  margin-left: 12px;
`,Go=d.span`
  cursor: pointer;
  :hover {
    text-decoration: underline;
  }
`,Uo=d.td`
  visibility: hidden;
  cursor: pointer;
  display: flex;
  align-items: center;

  &.visible {
    visibility: visible;
  }
`,Ho=d.div`
  width: 14px;
  height: 14px;
  border-radius: 4px;
  border: ${({checked:t})=>t?"#618AFF":"2px solid #CCCCCC"};
  background-color: ${({checked:t})=>t?"#618AFF":"transparent"};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 12px;
`,Yo=d.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 2px;
  background-color: transparent;
`,Zo=d.span`
  display: flex;
  align-items: center;
  justify-content: center;
`,Ko=x.memo(Wo),qo=({setShowMuteUnmute:t,showMuted:n,onTopicEdit:r,onChangeFilter:o,checkedStates:i,setCheckedStates:a})=>{const{close:l}=G("sourcesTable"),[s,c]=x.useState(!1),[f,g]=O.useState(null),[p,m]=O.useState(""),j=Object.values(i).filter(T=>T).length,[y,b]=ee(T=>[T.setSearchFormValue,T.setCurrentSearch]),[C,k,_]=W(T=>[T.data,T.ids,T.total]),I=x.useCallback((T,z)=>{g(T.currentTarget),m(z)},[]),B=()=>{g(null)},E=T=>{y(T),b(T),l()},L=T=>{r(p,T),B()},M=T=>{o(T)},A=!!f,v=A?"simple-popover":void 0,$=async()=>{c(!0);try{const T=Object.keys(i).map(async N=>{if(i[N])try{return await je(N,{is_muted:!n}),N}catch(H){return console.error("Error updating node data:",H),null}return null}),z=await Promise.all(T);W.setState({ids:k.filter(N=>!z.includes(N)),total:_-z.length}),a({}),c(!1)}catch(T){console.error("Error:",T),c(!1)}};return C?e.jsx(e.Fragment,{children:Object.keys(C).length?e.jsx(os,{align:"center",justify:s?"center":"flex-start",children:s?e.jsx(P,{color:u.white}):e.jsxs(e.Fragment,{children:[e.jsxs(be,{component:"table",children:[j>0?e.jsx(zr,{children:e.jsxs(q,{component:"tr",children:[e.jsx(w,{children:e.jsx(se,{onClick:()=>a({}),children:e.jsx(ce,{})})}),e.jsx(w,{colSpan:12,children:e.jsxs(rs,{children:[e.jsxs(ns,{children:[e.jsx(ts,{children:j}),"selected"]}),e.jsx(w,{className:"empty"}),e.jsx(tt,{onClick:$,role:"button",children:n?e.jsxs(e.Fragment,{children:[e.jsx(et,{})," Unmute ALL"]}):e.jsxs(e.Fragment,{children:[e.jsx(Je,{})," Mute ALL"]})}),e.jsx(w,{className:"empty"}),e.jsxs(tt,{onClick:()=>L("mergeTopic"),children:[e.jsx(Qe,{})," Merge"]})]})}),e.jsx(w,{className:"empty"})]})}):e.jsx(ve,{children:e.jsxs(q,{component:"tr",children:[e.jsx(w,{className:"empty"}),e.jsx(w,{children:e.jsxs(Le,{onClick:()=>M(ze),children:["Name ",e.jsx(Ae,{})]})}),e.jsx(w,{children:"Type"}),e.jsx(w,{children:e.jsxs(Le,{onClick:()=>M(Gn),children:["Count ",e.jsx(Ae,{})]})}),e.jsx(w,{children:"Edge list"}),e.jsx(w,{children:e.jsxs(Le,{onClick:()=>M(Un),children:["Date ",e.jsx(Ae,{})]})}),e.jsx(w,{children:e.jsx(h,{px:8,children:e.jsxs(Xo,{onClick:t,children:[e.jsx(Qo,{checked:n,children:e.jsx(Jo,{children:n&&e.jsx(kt,{})})}),"Muted"]})})})]})}),C&&e.jsx("tbody",{children:k==null?void 0:k.map(T=>e.jsx(Ko,{checkedStates:i,isMuteDisabled:Object.values(i).filter(z=>z).length>1,onClick:I,onSearch:E,setCheckedStates:a,topic:C[T]},T))})]}),p?e.jsxs(es,{anchorEl:f,anchorOrigin:{vertical:"bottom",horizontal:"right"},id:v,onClose:B,open:A,transformOrigin:{vertical:"top",horizontal:"right"},children:[n?e.jsxs(re,{"data-testid":"unmute",onClick:()=>L("unMute"),children:[" ",e.jsx(et,{"data-testid":""})," Unmute"]}):e.jsxs(re,{"data-testid":"mute",onClick:()=>L("mute"),children:[" ",e.jsx(Je,{"data-testid":"VisibilityOff"})," Mute"]}),e.jsxs(re,{"data-testid":"rename",onClick:()=>L("editTopic"),children:[e.jsx(Bo,{"data-testid":"EditTopicIcon"})," Rename"]}),e.jsxs(re,{"data-testid":"merge",onClick:()=>L("mergeTopic"),children:[e.jsx(Qe,{"data-testid":"MergeIcon"})," Merge"]}),e.jsxs(re,{"data-testid":"add_edge",onClick:()=>L("addEdge"),children:[e.jsx(zo,{"data-testid":"AddCircleIcon"})," Add edge"]})]}):null]})}):e.jsxs(h,{children:[e.jsx(S,{children:"There is not any results for selected filters"}),e.jsx(Ee,{})]})}):e.jsxs(h,{children:[e.jsx(S,{children:"There is not any results for selected filters"}),e.jsx(Ee,{})]})},Xo=d.td`
  cursor: pointer;
  display: flex;
  align-items: center;
`,Qo=d.div`
  width: 14px;
  height: 14px;
  border-radius: 4px;
  border: ${({checked:t})=>t?"#618AFF":"2px solid #CCCCCC"};
  background-color: ${({checked:t})=>t?"#618AFF":"transparent"};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 8px;
`,Jo=d.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 2px;
  background-color: transparent;
`,Le=d.span`
  cursor: pointer;
  display: flex;
  gap: 4px;
  align-items: center;
`,re=d(h).attrs({direction:"row",px:12,py:8})`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 12px;
  cursor: pointer;
  background: ${u.BUTTON1};
  color: ${u.white};

  &:hover {
    background: ${u.BUTTON1_HOVER};
    color: ${u.GRAY3};
  }
`,es=d(_t)`
  && {
    z-index: 9999;
  }
  .MuiPaper-root {
    min-width: 149px;
    color: ${u.GRAY3};
    box-shadow: 0px 1px 6px 0px rgba(0, 0, 0, 0.2);
    border-radius: 6px;
    z-index: 1;
    font-family: Barlow;
    font-size: 14px;
    font-weight: 500;
  }
`,ts=d.span`
  font-family: Barlow;
  font-size: 13px;
  font-weight: 500;
  margin-right: 4px;
  margin-top: 1px;
`,tt=d.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  flex-wrap: nowrap;
  gap: 8px;
  padding: 1px 8px;
  white-space: nowrap;
  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
    padding: 1px 8px;
    border-radius: 4px;
  }
`,ns=d.div`
  display: flex;
  align-items: center;
  gap: 2px;
`,rs=d.span`
  display: flex;
  align-items: center;
  gap: 27px;
`,os=d(h)`
  min-height: 0;
  overflow: auto;
  flex: 1;
  width: 100%;
  position: relative;
`,ss=()=>{const[t,n,r,o,i,a,l,s]=W(v=>[v.data,v.ids,v.total,v.setTopics,v.filters,v.setFilters,v.terminate,v.loading]),{open:c}=G("editTopic"),{open:f}=G("mergeTopic"),{open:g}=G("addEdge"),[p,m]=x.useState(null),[j,y]=x.useState([]),[b,C]=x.useState({}),k={editTopic:c,mergeTopic:f,addEdge:g},_=x.useRef([]);x.useEffect(()=>{n.length&&(_.current=n)},[n]),x.useEffect(()=>{(async()=>{try{await o()}catch{console.error("err")}})()},[o,i]);const I=async()=>{a({page:i.page+1})};x.useEffect(()=>()=>{l()},[l]);const B=v=>{a({sortBy:v})},E=()=>{m(null),y([])},L=async(v,$)=>{try{await je(v,{is_muted:$==="mute"}),W.setState({ids:n.filter(T=>T!==v),total:r-1})}catch(T){console.warn(T)}},M=async(v,$)=>{if(t)if($==="mergeTopic")if(Object.values(b).filter(T=>T).length>0){const T=Object.entries(b).filter(([,z])=>z).map(([z])=>t[z]);y(T),f()}else y([t[v]]),m(t[v]),f();else["mute","unMute"].includes($)&&await L(v,$),typeof k[$]=="function"&&k[$](),m(t[v])},A=v=>{a({...i,search:v})};return e.jsxs(e.Fragment,{children:[e.jsxs(is,{direction:"column",justify:"flex-end",children:[e.jsx(we,{align:"flex-start",direction:"row",justify:"space-between",children:e.jsx(S,{className:"title",children:"Topics"})}),e.jsx(ls,{"data-testid":"topic-search-container",children:e.jsx(Lt,{activeIcon:e.jsx(ce,{}),defaultIcon:e.jsx(ht,{}),loading:s,loadingIcon:e.jsx(P,{color:u.lightGray,size:24}),onSearch:A,placeholder:"Search ..."})}),e.jsx(as,{align:"center",justify:s&&!t?"center":"flex-start",children:s&&!t?e.jsx(P,{color:u.white}):e.jsxs(e.Fragment,{children:[e.jsx(qo,{checkedStates:b,onChangeFilter:B,onTopicEdit:M,setCheckedStates:C,setShowMuteUnmute:()=>a({is_muted:!i.is_muted}),showMuted:i.is_muted}),r>n.length?e.jsxs(U,{className:"load-more",disabled:s,onClick:I,children:["Load more",s&&e.jsx(P,{color:u.lightGray,size:10})]}):null]})})]}),j.length>0&&e.jsx(Oo,{multiTopics:j,onClose:E}),p&&e.jsx(jo,{onClose:E,topic:p}),p&&e.jsx(xo,{onClose:E,topic:p})]})},is=d(h)`
  flex: 1;

  .title {
    font-size: 20px;
    color: ${u.white};
    font-family: Barlow;
    font-size: 22px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  .subtitle {
    color: ${u.GRAY3};
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
`,as=d(h)`
  min-height: 0;
  overflow: auto;
  flex: 1;
  width: 100%;
`,ls=d(h)`
  margin: 0 0 16px 36px;
`;function cs(t){return t.charAt(0).toUpperCase()+t.slice(1).toLowerCase()}const ds=({node:t})=>{var n,r,o,i,a,l,s,c,f;return e.jsxs(Ce,{children:[e.jsx(w,{className:"empty"}),e.jsx(w,{children:(n=t==null?void 0:t.properties)!=null&&n.date_added_to_graph?Ne((r=t==null?void 0:t.properties)==null?void 0:r.date_added_to_graph):Ne((o=t==null?void 0:t.properties)==null?void 0:o.date)}),e.jsx(w,{children:t==null?void 0:t.node_type}),e.jsx(w,{children:(t==null?void 0:t.node_type)==="Tweet"?e.jsx(nt,{href:`${He}${(i=t==null?void 0:t.properties)==null?void 0:i.tweet_id}${He.includes("?")?"&":"?"}open=system`,target:"_blank",children:(a=t==null?void 0:t.properties)==null?void 0:a.tweet_id}):e.jsx(nt,{href:`${(l=t==null?void 0:t.properties)==null?void 0:l.source_link}${((s=t==null?void 0:t.properties)==null?void 0:s.source_link).includes("?")?"&":"?"}open=system`,target:"_blank",children:(c=t==null?void 0:t.properties)==null?void 0:c.source_link})}),e.jsx(w,{children:(f=t==null?void 0:t.properties)!=null&&f.status?cs(t.properties.status):"Processing"})]})},nt=d.a`
  color: ${u.white};
  text-decoration: underline;
  &:visited {
    color: ${u.white};
  }
`,ps=x.memo(ds),hs=({nodes:t})=>{const{open:n}=G("addContent"),r=async()=>{n()};return!t||(t==null?void 0:t.length)===0?e.jsx(e.Fragment,{children:e.jsxs(us,{children:[e.jsx(xs,{align:"center",direction:"row",justify:"space-between",children:e.jsx(S,{className:"subtitle",children:"Contribute to the graph by adding content."})}),e.jsx(h,{children:e.jsx(U,{color:"secondary",onClick:r,size:"medium",startIcon:e.jsx(Xn,{}),type:"submit",variant:"contained",children:"Add Content"})})]})}):e.jsxs(be,{component:"table",children:[e.jsx(ve,{children:e.jsxs(q,{component:"tr",children:[e.jsx(w,{className:"empty"}),e.jsx(w,{children:"Date"}),e.jsx(w,{children:"Type"}),e.jsx(w,{children:"Source"}),e.jsx(w,{children:"Status"})]})}),e.jsx("tbody",{children:t==null?void 0:t.map(o=>e.jsx(ps,{node:o},o==null?void 0:o.ref_id))})]})},us=Pe(h)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 100px auto;
  width: 100%;
`,xs=Pe(h)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: 30px;

  .subtitle {
    color: ${u.GRAY3};
    font-family: Barlow;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`,fs=()=>{const[t,n]=x.useState([]),[r,o]=x.useState(!0),[i,a]=x.useState(10),[l,s]=x.useState(!0),c={only_content:"true",sort_by:"date",limit:i.toString()},f=async()=>{o(!0);try{const p=await tn(c);n(p.nodes),o(!1)}catch(p){console.error("Error fetching data:",p),o(!1)}};x.useEffect(()=>{f()},[i]);const g=()=>{a(i+10),f()};return e.jsxs(ms,{direction:"column",justify:"flex-end",children:[e.jsx(we,{align:"center",direction:"row",justify:"space-between",children:e.jsx(S,{className:"title",children:"Content I've added to the graph"})}),e.jsxs(gs,{align:"center",justify:r?"center":"flex-start",children:[r?e.jsx(P,{color:u.white}):e.jsx(e.Fragment,{children:e.jsx(hs,{nodes:t})}),!r&&t.length>0&&(l?e.jsx(U,{onClick:g,size:"medium",children:"Load More"}):e.jsx(ys,{children:"No new nodes available"}))]})]})},ms=d(h)`
  flex: 1;

  .title {
    font-size: 20px;
    color: ${u.white};
    font-family: Barlow;
    font-size: 22px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  .subtitle {
    color: ${u.GRAY3};
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
`,gs=d(h)`
  min-height: 0;
  overflow: auto;
  flex: 1;
  width: 100%;
`,ys=d.div`
  margin-top: 10px;
  color: ${u.GRAY3};
  font-family: Barlow;
  font-size: 14px;
`,js=[{label:St,component:fs},{label:Hn,component:qr},{label:wt,component:Dr},{label:vt,component:ss}],bs=t=>{const{children:n,value:r,index:o,...i}=t;return r===o?e.jsx(_s,{"aria-labelledby":`simple-tab-${o}`,hidden:r!==o,id:`simple-tabpanel-${o}`,role:"tabpanel",...i,children:n}):null};function Cs(t){return{id:`simple-tab-${t}`,"aria-controls":`simple-tabpanel-${t}`}}const vs=()=>{const[t,n]=x.useState(0),[r]=le(s=>[s.isAdmin]),[o]=ct(s=>[s.queuedSourcesFeatureFlag]),i=nn(),a=(s,c)=>{n(c)},l=js.filter(({label:s})=>s===vt?r:s===wt?r&&o:s===St?i:!0);return e.jsxs(Ts,{"data-testid":"sources-table",direction:"column",children:[e.jsx(ws,{"aria-label":"sources tabs",onChange:a,value:t,children:l.map((s,c)=>e.jsx(Ss,{color:u.white,disableRipple:!0,label:s.label,...Cs(c)},s.label))}),l.map((s,c)=>e.jsx(bs,{index:c,value:t,children:e.jsx(s.component,{})},s.label))]})},ws=d(er)`
  && {
    background: rgba(0, 0, 0, 0.2);
    border-radius: 9px 9px 0 0;
    .MuiTabs-indicator {
      background: ${u.primaryBlue};
    }
  }
`,Ss=d(tr)`
  && {
    padding: 30px 0 24px;
    color: ${u.GRAY6};
    margin-left: 34px;
    font-family: Barlow;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;

    &.Mui-selected {
      color: ${u.white};
    }
  }
`,_s=d(h)`
  display: flex;
  flex: 1;
  min-height: 572px;
  padding: 20px 0;
  max-height: 572px;
  overflow: auto;

  @media (max-width: 1024px) {
    width: 100%;
    min-height: 400px;
    max-height: 400px;
  }

  @media (max-width: 768px) {
    width: 100%;
    min-height: 300px;
    max-height: 300px;
  }

  @media (max-width: 480px) {
    width: 100%;
    min-height: 250px;
    max-height: 250px;
  }
`,Ts=d(h)`
  min-height: 0;
  flex: 1;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 3px;
  }
`,fe={required:{message:"The field is required",value:!0}},ks=({initialValues:t})=>{const n=de({defaultValues:t,mode:"onSubmit"}),{isSubmitting:r}=n.formState,o=n.handleSubmit(async i=>{try{await rn(i)}catch(a){console.warn(a)}});return e.jsx(pe,{...n,children:e.jsx("form",{id:"add-node-form",onSubmit:o,children:e.jsxs(e.Fragment,{children:[e.jsxs(h,{children:[e.jsx(h,{pt:12,children:e.jsx(oe,{id:"cy-about-title-id",label:"Graph Title",maxLength:50,name:"title",placeholder:"Type graph title here...",rules:{...fe}})}),e.jsx(h,{pt:12,children:e.jsx(oe,{id:"cy-about-id",label:"Graph Description",maxLength:50,name:"description",placeholder:"Type graph description here...",rules:{...fe}})}),e.jsx(h,{pt:12,children:e.jsx(oe,{id:"cy-about-mission_statement-id",label:"Mission Statement",maxLength:50,name:"mission_statement",placeholder:"Type mission statement here...",rules:{...fe}})}),e.jsx(h,{pt:12,children:e.jsx(oe,{id:"cy-about-search_term-id",label:"Search Term",maxLength:50,name:"search_term",placeholder:"Type search term here...",rules:{...fe}})})]}),e.jsx(h,{pt:8,children:r?e.jsx(As,{children:e.jsx(P,{color:u.white,size:20})}):e.jsx(At,{disabled:r,id:"add-node-submit-cta",kind:"big",type:"submit",children:"Save changes"})})]})})})},As=d(h).attrs({align:"center",background:"primaryButton",borderRadius:8,justify:"center"})`
  padding: 16px 24px;
  opacity: 0.5;
`,Ls=({initialValues:t})=>e.jsxs(e.Fragment,{children:[t.title&&e.jsxs(h,{pt:12,children:[e.jsx(S,{kind:"regular",children:"Graph Title"}),e.jsx(h,{pt:12,children:e.jsx(S,{className:"value",kind:"medium",children:t.title})})]}),t.description&&e.jsxs(h,{pt:12,children:[e.jsx(S,{kind:"regular",children:"Graph Description"}),e.jsx(h,{pt:12,children:e.jsx(S,{className:"value",kind:"medium",children:t.description})})]}),t.mission_statement&&e.jsxs(h,{pt:12,children:[e.jsx(S,{kind:"regular",children:"Mission Statement"}),e.jsx(h,{pt:12,children:e.jsx(S,{className:"value",kind:"medium",children:t.mission_statement})})]})]}),$s=()=>{const[t]=le(r=>[r.isAdmin]),n=ee(r=>r.appMetaData);return n?e.jsxs(Es,{align:"stretch",direction:"column",justify:"flex-end",children:[e.jsx(Is,{align:"center",direction:"row",justify:"space-between",children:e.jsx(S,{className:"title",children:"About"})}),e.jsx(Ns,{align:"stretch",justify:"flex-start",children:t?e.jsx(ks,{initialValues:n}):e.jsx(Ls,{initialValues:n})})]}):null},Es=d(h)`
  border-radius: 8px;
  box-shadow: 0px 5px 6px rgb(0 0 0 / 50%);
  padding: 16px;
  flex: 1;

  .title {
    margin-bottom: 16px;
    font-size: 20px;
  }

  .value {
    color: ${u.lightBlue400};
  }
`,Ns=d(h)`
  min-height: 0;
  overflow: auto;
  flex: 1;
  width: 100%;
`,Is=d(h)`
  margin-bottom: 16px;
  ${S} {
    margin-bottom: 0;
  }
`,Pt=async(t,n)=>{const r=n&&new URLSearchParams(n),o=r?`/sentiments?${r.toString()}`:"/sentiments";if(on)return await Ve.get(o);const i=await sn();try{return await Ve.get(o,{Authorization:i})}catch(a){if(a.status===402)return await an(t),Pt(t,n);throw a}};var Os=["type","layout","connectNulls","ref"];function Q(t){"@babel/helpers - typeof";return Q=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Q(t)}function Ps(t,n){if(t==null)return{};var r=Ms(t,n),o,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(i=0;i<a.length;i++)o=a[i],!(n.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(t,o)&&(r[o]=t[o])}return r}function Ms(t,n){if(t==null)return{};var r={},o=Object.keys(t),i,a;for(a=0;a<o.length;a++)i=o[a],!(n.indexOf(i)>=0)&&(r[i]=t[i]);return r}function ie(){return ie=Object.assign?Object.assign.bind():function(t){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o])}return t},ie.apply(this,arguments)}function rt(t,n){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);n&&(o=o.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),r.push.apply(r,o)}return r}function R(t){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?rt(Object(r),!0).forEach(function(o){F(t,o,r[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):rt(Object(r)).forEach(function(o){Object.defineProperty(t,o,Object.getOwnPropertyDescriptor(r,o))})}return t}function Z(t){return Rs(t)||Ds(t)||Bs(t)||zs()}function zs(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Bs(t,n){if(t){if(typeof t=="string")return Ie(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);if(r==="Object"&&t.constructor&&(r=t.constructor.name),r==="Map"||r==="Set")return Array.from(t);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return Ie(t,n)}}function Ds(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Rs(t){if(Array.isArray(t))return Ie(t)}function Ie(t,n){(n==null||n>t.length)&&(n=t.length);for(var r=0,o=new Array(n);r<n;r++)o[r]=t[r];return o}function Fs(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function ot(t,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,Mt(o.key),o)}}function Ws(t,n,r){return n&&ot(t.prototype,n),r&&ot(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}function Vs(t,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),n&&Oe(t,n)}function Oe(t,n){return Oe=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(o,i){return o.__proto__=i,o},Oe(t,n)}function Gs(t){var n=Hs();return function(){var o=ye(t),i;if(n){var a=ye(this).constructor;i=Reflect.construct(o,arguments,a)}else i=o.apply(this,arguments);return Us(this,i)}}function Us(t,n){if(n&&(Q(n)==="object"||typeof n=="function"))return n;if(n!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return V(t)}function V(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function Hs(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function ye(t){return ye=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(r){return r.__proto__||Object.getPrototypeOf(r)},ye(t)}function F(t,n,r){return n=Mt(n),n in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r,t}function Mt(t){var n=Ys(t,"string");return Q(n)==="symbol"?n:String(n)}function Ys(t,n){if(Q(t)!=="object"||t===null)return t;var r=t[Symbol.toPrimitive];if(r!==void 0){var o=r.call(t,n||"default");if(Q(o)!=="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(t)}var he=function(t){Vs(r,t);var n=Gs(r);function r(){var o;Fs(this,r);for(var i=arguments.length,a=new Array(i),l=0;l<i;l++)a[l]=arguments[l];return o=n.call.apply(n,[this].concat(a)),F(V(o),"state",{isAnimationFinished:!0,totalLength:0}),F(V(o),"generateSimpleStrokeDasharray",function(s,c){return"".concat(c,"px ").concat(s-c,"px")}),F(V(o),"getStrokeDasharray",function(s,c,f){var g=f.reduce(function(_,I){return _+I});if(!g)return o.generateSimpleStrokeDasharray(c,s);for(var p=Math.floor(s/g),m=s%g,j=c-s,y=[],b=0,C=0;b<f.length;C+=f[b],++b)if(C+f[b]>m){y=[].concat(Z(f.slice(0,b)),[m-C]);break}var k=y.length%2===0?[0,j]:[j];return[].concat(Z(r.repeat(f,p)),Z(y),k).map(function(_){return"".concat(_,"px")}).join(", ")}),F(V(o),"id",Cn("recharts-line-")),F(V(o),"pathRef",function(s){o.mainCurve=s}),F(V(o),"handleAnimationEnd",function(){o.setState({isAnimationFinished:!0}),o.props.onAnimationEnd&&o.props.onAnimationEnd()}),F(V(o),"handleAnimationStart",function(){o.setState({isAnimationFinished:!1}),o.props.onAnimationStart&&o.props.onAnimationStart()}),o}return Ws(r,[{key:"componentDidMount",value:function(){if(this.props.isAnimationActive){var i=this.getTotalLength();this.setState({totalLength:i})}}},{key:"componentDidUpdate",value:function(){if(this.props.isAnimationActive){var i=this.getTotalLength();i!==this.state.totalLength&&this.setState({totalLength:i})}}},{key:"getTotalLength",value:function(){var i=this.mainCurve;try{return i&&i.getTotalLength&&i.getTotalLength()||0}catch{return 0}}},{key:"renderErrorBar",value:function(i,a){if(this.props.isAnimationActive&&!this.state.isAnimationFinished)return null;var l=this.props,s=l.points,c=l.xAxis,f=l.yAxis,g=l.layout,p=l.children,m=vn(p,wn);if(!m)return null;var j=function(C,k){return{x:C.x,y:C.y,value:C.value,errorVal:xt(C.payload,k)}},y={clipPath:i?"url(#clipPath-".concat(a,")"):null};return O.createElement(Se,y,m.map(function(b){return O.cloneElement(b,{key:"bar-".concat(b.props.dataKey),data:s,xAxis:c,yAxis:f,layout:g,dataPointFormatter:j})}))}},{key:"renderDots",value:function(i,a,l){var s=this.props.isAnimationActive;if(s&&!this.state.isAnimationFinished)return null;var c=this.props,f=c.dot,g=c.points,p=c.dataKey,m=xe(this.props),j=xe(f,!0),y=g.map(function(C,k){var _=R(R(R({key:"dot-".concat(k),r:3},m),j),{},{value:C.value,dataKey:p,cx:C.x,cy:C.y,index:k,payload:C.payload});return r.renderDotItem(f,_)}),b={clipPath:i?"url(#clipPath-".concat(a?"":"dots-").concat(l,")"):null};return O.createElement(Se,ie({className:"recharts-line-dots",key:"dots"},b),y)}},{key:"renderCurveStatically",value:function(i,a,l,s){var c=this.props,f=c.type,g=c.layout,p=c.connectNulls;c.ref;var m=Ps(c,Os),j=R(R(R({},xe(m,!0)),{},{fill:"none",className:"recharts-line-curve",clipPath:a?"url(#clipPath-".concat(l,")"):null,points:i},s),{},{type:f,layout:g,connectNulls:p});return O.createElement(Sn,ie({},j,{pathRef:this.pathRef}))}},{key:"renderCurveWithAnimation",value:function(i,a){var l=this,s=this.props,c=s.points,f=s.strokeDasharray,g=s.isAnimationActive,p=s.animationBegin,m=s.animationDuration,j=s.animationEasing,y=s.animationId,b=s.animateNewValues,C=s.width,k=s.height,_=this.state,I=_.prevPoints,B=_.totalLength;return O.createElement(_n,{begin:p,duration:m,isActive:g,easing:j,from:{t:0},to:{t:1},key:"line-".concat(y),onAnimationEnd:this.handleAnimationEnd,onAnimationStart:this.handleAnimationStart},function(E){var L=E.t;if(I){var M=I.length/c.length,A=c.map(function(N,ue){var H=Math.floor(ue*M);if(I[H]){var te=I[H],Y=ne(te.x,N.x),zt=ne(te.y,N.y);return R(R({},N),{},{x:Y(L),y:zt(L)})}if(b){var Bt=ne(C*2,N.x),Dt=ne(k/2,N.y);return R(R({},N),{},{x:Bt(L),y:Dt(L)})}return R(R({},N),{},{x:N.x,y:N.y})});return l.renderCurveStatically(A,i,a)}var v=ne(0,B),$=v(L),T;if(f){var z="".concat(f).split(/[,\s]+/gim).map(function(N){return parseFloat(N)});T=l.getStrokeDasharray($,B,z)}else T=l.generateSimpleStrokeDasharray(B,$);return l.renderCurveStatically(c,i,a,{strokeDasharray:T})})}},{key:"renderCurve",value:function(i,a){var l=this.props,s=l.points,c=l.isAnimationActive,f=this.state,g=f.prevPoints,p=f.totalLength;return c&&s&&s.length&&(!g&&p>0||!Tn(g,s))?this.renderCurveWithAnimation(i,a):this.renderCurveStatically(s,i,a)}},{key:"render",value:function(){var i,a=this.props,l=a.hide,s=a.dot,c=a.points,f=a.className,g=a.xAxis,p=a.yAxis,m=a.top,j=a.left,y=a.width,b=a.height,C=a.isAnimationActive,k=a.id;if(l||!c||!c.length)return null;var _=this.state.isAnimationFinished,I=c.length===1,B=Ge("recharts-line",f),E=g&&g.allowDataOverflow,L=p&&p.allowDataOverflow,M=E||L,A=$e(k)?this.id:k,v=(i=xe(s))!==null&&i!==void 0?i:{r:3,strokeWidth:2},$=v.r,T=$===void 0?3:$,z=v.strokeWidth,N=z===void 0?2:z,ue=kn(s)?s:{},H=ue.clipDot,te=H===void 0?!0:H,Y=T*2+N;return O.createElement(Se,{className:B},E||L?O.createElement("defs",null,O.createElement("clipPath",{id:"clipPath-".concat(A)},O.createElement("rect",{x:E?j:j-y/2,y:L?m:m-b/2,width:E?y:y*2,height:L?b:b*2})),!te&&O.createElement("clipPath",{id:"clipPath-dots-".concat(A)},O.createElement("rect",{x:j-Y/2,y:m-Y/2,width:y+Y,height:b+Y}))):null,!I&&this.renderCurve(M,A),this.renderErrorBar(M,A),(I||s)&&this.renderDots(M,te,A),(!C||_)&&An.renderCallByParent(this.props,c))}}],[{key:"getDerivedStateFromProps",value:function(i,a){return i.animationId!==a.prevAnimationId?{prevAnimationId:i.animationId,curPoints:i.points,prevPoints:a.curPoints}:i.points!==a.curPoints?{curPoints:i.points}:null}},{key:"repeat",value:function(i,a){for(var l=i.length%2!==0?[].concat(Z(i),[0]):i,s=[],c=0;c<a;++c)s=[].concat(Z(s),Z(l));return s}},{key:"renderDotItem",value:function(i,a){var l;if(O.isValidElement(i))l=O.cloneElement(i,a);else if(ln(i))l=i(a);else{var s=Ge("recharts-line-dot",i?i.className:"");l=O.createElement(ut,ie({},a,{className:s}))}return l}}]),r}(x.PureComponent);F(he,"displayName","Line");F(he,"defaultProps",{xAxisId:0,yAxisId:0,connectNulls:!1,activeDot:!0,dot:!0,legendType:"line",stroke:"#3182bd",strokeWidth:1,fill:"#fff",points:[],isAnimationActive:!bn.isSsr,animateNewValues:!0,animationBegin:0,animationDuration:1500,animationEasing:"ease",hide:!1,label:!1});F(he,"getComposedData",function(t){var n=t.props,r=t.xAxis,o=t.yAxis,i=t.xAxisTicks,a=t.yAxisTicks,l=t.dataKey,s=t.bandSize,c=t.displayedData,f=t.offset,g=n.layout,p=c.map(function(m,j){var y=xt(m,l);return g==="horizontal"?{x:Ue({axis:r,ticks:i,bandSize:s,entry:m,index:j}),y:$e(y)?null:o.scale(y),value:y,payload:m}:{x:$e(y)?null:r.scale(y),y:Ue({axis:o,ticks:a,bandSize:s,entry:m,index:j}),value:y,payload:m}});return R({points:p,layout:g},f)});var Zs=Ln({chartName:"LineChart",GraphicalChild:he,axisComponents:[{axisType:"xAxis",AxisComp:ft},{axisType:"yAxis",AxisComp:mt}],formatAxisMap:$n});const Ks=({cx:t,cy:n})=>e.jsx(ut,{cx:t,cy:n,fill:u.blueTextAccent,r:2}),qs=({data:t,width:n=500,height:r=300})=>e.jsx(e.Fragment,{children:(t==null?void 0:t.length)&&e.jsxs(Zs,{data:t,height:r,id:"cy-sentiment-chart",margin:{bottom:5,left:-20,right:30,top:5},width:n,children:[e.jsx(En,{stroke:u.lightBlue300,strokeDasharray:"5 5"}),e.jsx(ft,{dataKey:"date",interval:Math.floor(t.length/3),stroke:u.blueTextAccent}),e.jsx(mt,{domain:[0,10],stroke:u.blueTextAccent}),e.jsx(Nn,{}),e.jsx(he,{dataKey:"score",dot:e.jsx(Ks,{}),stroke:"#8884d8",type:"monotone"})]})}),Xs=()=>{const[t,n]=x.useState(void 0),[r]=le(l=>[l.setBudget]),[o,i]=x.useState(!1),a=async()=>{i(!0),Pt(r).then(async l=>{n(l==null?void 0:l.data.filter(s=>s.date).map(s=>({date:cn.unix(Number(String(s.date).split(".")[0])).format("MM/DD/YY"),score:s.sentiment_score}))),await dt(r)}).catch().finally(()=>{i(!1)})};return e.jsxs(Qs,{align:"flex-start",direction:"column",id:"cy-sentiment-chart-wrapper",justify:"flex-end",children:[e.jsx(S,{className:"title",children:"Sentiment chart"}),o&&e.jsx(Jn,{alignItems:"center",component:"div",flexGrow:1,p:4,spacing:2,width:"100%",children:e.jsx(In,{color:u.white})}),!(t!=null&&t.length)&&e.jsx(Js,{className:"button",id:"cy-get-sentiments-btn",onClick:a,children:"Get top 100 sentiments"}),e.jsx(qs,{data:t})]})},Qs=d(h)`
  border-radius: 8px;
  box-shadow: 0px 5px 6px rgb(0 0 0 / 50%);
  padding: 16px;

  .title {
    margin-bottom: 16px;
    font-size: 20px;
  }
`,Js=d(At)`
  height: 48px;
`,ei=600,ti={about:e.jsx($s,{}),sentiment:e.jsx(Xs,{}),sources:e.jsx(vs,{}),"":null},ni=()=>{const[t,n]=ee(r=>[r.secondarySidebarActiveTab,r.setSecondarySidebarActiveTab]);return e.jsx(On,{direction:"left",in:!!t,mountOnEnter:!0,unmountOnExit:!0,children:e.jsxs(ri,{id:"secondary-sidebar-wrapper",children:[e.jsx(oi,{id:"cy-close-secondary-sidebar",onClick:()=>n(""),children:e.jsx(gt,{})}),ti[t]]})})},ri=d(h)(({theme:t})=>({background:u.BG1,height:"100vh",padding:"16px 20px",width:"100%",zIndex:30,display:"flex",[t.breakpoints.up("sm")]:{width:ei}})),oi=d(h).attrs({align:"center",justify:"center",p:5})`
  background-color: ${u.inputBg1};
  border-radius: 50%;
  color: ${u.mainBottomIcons};
  cursor: pointer;
  transition-duration: 0.2s;
  align-self: flex-end;
  margin-bottom: 16px;

  &:hover {
    background-color: ${u.gray200};
  }
`,si=d(xn)`
  .Toastify__toast {
    background-color: #49c998ff;
    width: fit-content;
    min-height: 100%;
    border-radius: 12px;
    padding: 6px;
  }
  .Toastify__toast-body {
    background-color: #49c998ff;
    color: ${u.white};
    font-weight: 500;
    font-family: 'Barlow';
  }
  .Toastify__close-button {
    color: ${u.white};
  }
  .Toastify__progress-bar--error {
    background-color: ${u.primaryRed};
  }
  .Toastify__progress-bar--success {
    background-color: ${u.primaryGreen};
  }
  &.Toastify__toast-container--top-right {
    width: fit-content;
    height: auto;
    top: 60px;
    right: 48px;
  }
`,ii=d(h)`
  height: 100%;
  width: 100%;
  background-color: ${u.black};
`,ai=d(h)`
  position: absolute;
  bottom: 8px;
  left: 8px;
  color: ${u.white};
  font-size: 12px;
  opacity: 0.5;
`,li=x.lazy(()=>D(()=>import("./index-b223c56f.js"),["assets/index-b223c56f.js","assets/index-58e9a183.js","assets/index-a2878e02.css","assets/AddContentIcon-da3177d9.js","assets/SourcesTableIcon-8c89e570.js","assets/react-toastify.esm-50279b0f.js","assets/react-toastify-b60658ac.css","assets/SettingsIcon-7f42ea72.js"]).then(({MainToolbar:t})=>({default:t}))),ci=x.lazy(()=>D(()=>import("./index-e61be070.js"),["assets/index-e61be070.js","assets/index-58e9a183.js","assets/index-a2878e02.css","assets/constant-a171ec1e.js","assets/EditIcon-ebe8f46e.js","assets/react-toastify.esm-50279b0f.js","assets/react-toastify-b60658ac.css","assets/constants-73dff4b3.js","assets/generateCategoricalChart-7b8af428.js","assets/Popover-d6ce1529.js","assets/useSlotProps-5b636426.js","assets/InfoIcon-651c99cc.js","assets/index-62fd761d.js","assets/index.esm-408adbb5.js","assets/PlusIcon-04fe943c.js","assets/NoFilterResultIcon-d97a1391.js","assets/index-b7ac6a29.js","assets/index-34e23553.js","assets/index-303653b7.js","assets/index-f002045f.js","assets/index-724d7624.js","assets/Popper-d805f45f.js","assets/CheckIcon-ec939c73.js"]).then(({Universe:t})=>({default:t}))),di=x.lazy(()=>D(()=>import("./index-240c35b9.js"),["assets/index-240c35b9.js","assets/index-58e9a183.js","assets/index-a2878e02.css","assets/react-toastify.esm-50279b0f.js","assets/react-toastify-b60658ac.css","assets/CheckIcon-ec939c73.js","assets/ChevronDownIcon-a14bba26.js","assets/ChevronUpIcon-a9b70af8.js","assets/Popover-d6ce1529.js","assets/useSlotProps-5b636426.js","assets/PlusIcon-04fe943c.js","assets/ChevronRightIcon-7816cf97.js","assets/index-62fd761d.js","assets/generateCategoricalChart-7b8af428.js","assets/InfoIcon-651c99cc.js","assets/index.esm-408adbb5.js","assets/ChevronRightIcon-6125620a.css","assets/index-32821334.js","assets/Skeleton-5ab4040d.js","assets/index-f002045f.js"]).then(({SideBar:t})=>({default:t}))),pi=()=>{const[t,n]=le(v=>[v.setBudget,v.setNodeCount]),[r,o]=x.useState(!1),{setSidebarOpen:i,currentSearch:a,setCurrentSearch:l,setRelevanceSelected:s,setTranscriptOpen:c}=ee(v=>v),f=Pn(v=>v.setTeachMeAnswer),{data:g,setData:p,fetchData:m,graphStyle:j,setSelectedNode:y,setCategoryFilter:b,setAbortRequests:C}=J(v=>v),[k]=ct(v=>[v.realtimeGraphFeatureFlag]),_=fn(),I=de({mode:"onChange"}),B=I.handleSubmit(({search:v})=>{c(!1),y(null),s(!1),l(v),f(""),b(null)}),E=x.useCallback(async()=>{await m(t,C,{...a?{word:a}:{}}),i(!0),a?await dt(t):y(null)},[m,t,a,i,y,C]);x.useEffect(()=>{E()},[a,E]);const L=()=>{if(g){o(!0);const v=pn(j,g.nodes);p(v),o(!1)}};x.useEffect(()=>{L()},[j]);const M=x.useCallback(()=>{n("INCREMENT")},[n]),A=x.useCallback(v=>{console.log(v)},[]);return x.useEffect(()=>(_&&(_.connect(),_.on("connect_error",v=>{console.error("Socket connection error:",v)}),_.on("newnode",M),k&&_.on("new_node_created",A)),()=>{_&&_.off()}),[_,M,A,k]),e.jsxs(e.Fragment,{children:[e.jsx(mn,{}),e.jsx(Nr,{}),e.jsx(gn,{hidden:!dn}),e.jsx(x.Suspense,{fallback:e.jsx("div",{children:"Loading..."}),children:e.jsxs(ii,{direction:"row",children:[e.jsx(Mn,{children:e.jsxs(pe,{...I,children:[e.jsx(li,{}),e.jsx(di,{onSubmit:B}),e.jsx(ci,{}),r&&e.jsx(fr,{fullSize:!1}),e.jsx(ur,{}),e.jsx(ni,{}),e.jsx(Lr,{}),e.jsxs(ai,{children:["v",yn]}),e.jsx(pt,{})]})}),e.jsx(Ar,{}),e.jsx(si,{}),e.jsx(Mr,{})]})})]})},Li=Object.freeze(Object.defineProperty({__proto__:null,App:pi},Symbol.toStringTag,{value:"Module"}));export{zo as A,Nt as F,Qe as M,It as N,ur as O,fr as P,vs as S,Ot as a,Et as b,ki as c,Ti as d,Li as e,_i as i,Ai as n};
