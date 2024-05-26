import{g as Ft,a as Wt,s as Oe,c as at,_ as me,r as m,u as Vt,b as Ut,j as e,d as Gt,e as Ht,F as p,T as S,f as d,h as u,i as ee,k as te,l as ae,m as D,n as Yt,S as Zt,o as Kt,p as qt,q as lt,t as ct,v as Fe,Y as We,R as Ve,w as Xt,x as le,y as Me,z as Qt,A as dt,B as U,C as Jt,D as en,E as je,G as tn,H as I,I as nn,J as rn,K as on,L as sn,M as an,N as Ue,O as ln,P as cn,Q as dn,U as pn,V as pt,W as hn,X as un}from"./index-7f808302.js";import{A as xn,a as ht,C as N,u as fn,B as H,I as G,b as ce,S as ut,c as de,F as pe,Q as mn,d as gn,G as yn,L as jn,v as bn}from"./react-toastify.esm-4df52b04.js";import{f as Cn,G as vn,u as wn,c as Ge,D as xt,a as Sn,E as _n,L as Se,b as xe,C as Tn,A as kn,i as re,d as An,e as Ee,g as Ln,h as $n,j as ft,k as He,l as En,X as mt,Y as gt,m as In,n as Nn,T as Pn,P as Bn,S as On,o as Mn,p as zn}from"./generateCategoricalChart-d8676aa0.js";import{M as Dn,a as Rn,b as Fn,c as yt,d as Wn}from"./index.esm-af752bfc.js";import{T as Vn,a as X,b as jt,F as Ie,M as be,C as bt,N as Un,c as Gn}from"./NoFilterResultIcon-83775d26.js";import{s as Q,T as Ct,u as R,A as ze,E as Hn,D as Yn,a as Ye,b as vt,Q as wt,V as St,S as Zn}from"./index-a9001226.js";import{P as _t,I as Tt,a as kt}from"./Popover-0f5d6cad.js";import{B as Kn,T as se}from"./index-2d8fa5f2.js";import{D as qn,P as Xn}from"./PlusIcon-1b381e13.js";import{B as De}from"./index-9ec5ecf7.js";import{e as Qn,A as Re,T as At,S as Jn}from"./index-9cab4a58.js";import{C as Lt}from"./CheckIcon-47aae061.js";import{T as er,a as tr,B as $t}from"./index-3882507e.js";function nr(t){return Ft("MuiTypography",t)}Wt("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);const rr=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],or=t=>{const{align:n,gutterBottom:r,noWrap:o,paragraph:i,variant:a,classes:l}=t,s={root:["root",a,t.align!=="inherit"&&`align${at(n)}`,r&&"gutterBottom",o&&"noWrap",i&&"paragraph"]};return Ht(s,nr,l)},sr=Oe("span",{name:"MuiTypography",slot:"Root",overridesResolver:(t,n)=>{const{ownerState:r}=t;return[n.root,r.variant&&n[r.variant],r.align!=="inherit"&&n[`align${at(r.align)}`],r.noWrap&&n.noWrap,r.gutterBottom&&n.gutterBottom,r.paragraph&&n.paragraph]}})(({theme:t,ownerState:n})=>me({margin:0},n.variant==="inherit"&&{font:"inherit"},n.variant!=="inherit"&&t.typography[n.variant],n.align!=="inherit"&&{textAlign:n.align},n.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},n.gutterBottom&&{marginBottom:"0.35em"},n.paragraph&&{marginBottom:16})),Ze={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},ir={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},ar=t=>ir[t]||t,lr=m.forwardRef(function(n,r){const o=Vt({props:n,name:"MuiTypography"}),i=ar(o.color),a=Qn(me({},o,{color:i})),{align:l="inherit",className:s,component:c,gutterBottom:x=!1,noWrap:g=!1,paragraph:h=!1,variant:f="body1",variantMapping:b=Ze}=a,y=Ut(a,rr),j=me({},a,{align:l,color:i,className:s,component:c,gutterBottom:x,noWrap:g,paragraph:h,variant:f,variantMapping:b}),v=c||(h?"p":b[f]||Ze[f])||"span",w=or(j);return e.jsx(sr,me({as:v,ref:r,ownerState:j,className:Gt(w.root,s)},y))}),Ke=lr;function Ne(t){const n=new Date(Number(t)*1e3),r=n.getFullYear(),o=(1+n.getMonth()).toString().padStart(2,"0");return`${n.getDate().toString().padStart(2,"0")}/${o}/${r}`}const cr=({twitterHandle:t})=>e.jsx(e.Fragment,{children:e.jsx(p,{direction:"row",children:e.jsx(p,{align:"flex-start",pb:12,children:e.jsxs(S,{children:["Tweet by @",t]})})})}),dr=d(p)(({theme:t})=>({position:"absolute",top:"65px",right:"55px",width:"300px",pointerEvents:"none",background:u.dashboardHeader,boxShadow:"0px 1px 6px rgba(0, 0, 0, 0.1)",color:u.primaryText1,zIndex:100,transition:"opacity 0.6s",padding:t.spacing(2,3),[t.breakpoints.down("sm")]:{padding:t.spacing(1,1.5)}})),pr=d(p)`
  width: 22.5%;
`,hr=({node:t})=>{if(!t)return null;const{node_type:n,show_title:r,episode_title:o,description:i,label:a,text:l,type:s,name:c,twitter_handle:x,image_url:g,guests:h}=t,f=h&&h.length>0,b=f&&typeof h[0]=="object";let y=g;return n==="guest"&&!g?y="person_placeholder2.png":g||(y="noimage.jpeg"),s==="twitter_space"&&(y="twitter_placeholder.png"),n==="topic"?null:e.jsx(dr,{borderRadius:8,px:24,py:16,children:n==="tweet"?e.jsx(cr,{twitterHandle:x}):e.jsxs(e.Fragment,{children:[e.jsxs(p,{direction:"row",children:[e.jsx(pr,{}),e.jsx(p,{align:"flex-start",pb:12,children:e.jsx(S,{children:n==null?void 0:n.toUpperCase()})})]}),e.jsxs(p,{direction:"row",children:[e.jsx(p,{pr:12,children:e.jsx(xn,{src:y,type:"person"})}),e.jsxs("div",{children:[(c||a)&&e.jsx(p,{direction:"column",children:c?e.jsx(S,{children:c}):e.jsxs(e.Fragment,{children:[e.jsx(S,{children:a}),l&&e.jsx(p,{pt:4,children:e.jsxs(S,{color:"primaryText1",kind:"tiny",children:["@",l]})})]})}),r&&e.jsx(S,{color:"primaryText1",kind:"tiny",children:r}),o&&e.jsx(p,{pt:4,children:e.jsx(S,{color:"primaryText1",kind:"tiny",children:o})}),i&&e.jsx(p,{pt:12,children:e.jsx(S,{as:"div",kind:"regularBold",children:Cn(i)})}),x&&e.jsx(p,{pt:4,children:e.jsxs(S,{color:"primaryText1",kind:"tiny",children:["@",x]})}),h&&h.length>0&&e.jsxs(p,{pt:12,children:[e.jsx(S,{color:"primaryText1",children:"People"}),e.jsx(p,{pt:4,children:e.jsx(S,{color:"primaryText1",kind:"tiny",children:f&&e.jsxs(p,{pt:12,children:[e.jsx(S,{children:"Guests:"}),e.jsx(S,{children:b?h.map(j=>`@${j==null?void 0:j.twitter_handle}`).join(", "):h.join(", ")})]})})})]})]})]})]})})},ur=()=>{const[t]=ee(n=>[n.hoveredNode]);return e.jsxs(xr,{children:[t&&e.jsx("div",{id:"tooltip-portal",children:e.jsx(hr,{node:t})}),e.jsx(ht,{})]})},xr=d("div")(({theme:t})=>({position:"absolute",zIndex:1,top:0,left:0,userSelect:"none",pointerEvents:"none",display:"flex",justifyContent:"flex-end",alignItems:"flex-start",height:"100%",width:"100%",padding:"16px",[t.breakpoints.down("sm")]:{top:50}})),fr=({fullSize:t=!0})=>{const n=te(r=>r.sidebarIsOpen);return e.jsx(mr,{align:"center",className:ae({"sidebar-is-open":n&&!t}),justify:"center",children:e.jsx(N,{color:u.SECONDARY_BLUE,size:64})})},mr=d(p)`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  background-color: ${u.black};
  z-index: 1;
`,gr=m.lazy(()=>D(()=>import("./index-fb1e22fc.js"),["assets/index-fb1e22fc.js","assets/index-7f808302.js","assets/index-a2878e02.css","assets/index-9ec5ecf7.js","assets/react-toastify.esm-4df52b04.js","assets/react-toastify-b60658ac.css","assets/index-3882507e.js","assets/useSlotProps-e49bab01.js","assets/index-2d8fa5f2.js","assets/index.esm-af752bfc.js","assets/InfoIcon-09d33252.js"]).then(({SettingsModal:t})=>({default:t}))),yr=m.lazy(()=>D(()=>import("./index-b7673f12.js"),["assets/index-b7673f12.js","assets/index-7f808302.js","assets/index-a2878e02.css","assets/react-toastify.esm-4df52b04.js","assets/react-toastify-b60658ac.css","assets/index-9ec5ecf7.js","assets/index-f5fff0ed.js","assets/index.esm-af752bfc.js","assets/CheckIcon-47aae061.js","assets/index-2d8fa5f2.js","assets/InfoIcon-09d33252.js"]).then(({AddContentModal:t})=>({default:t}))),jr=m.lazy(()=>D(()=>import("./index-8e51810c.js"),["assets/index-8e51810c.js","assets/index-7f808302.js","assets/index-a2878e02.css","assets/react-toastify.esm-4df52b04.js","assets/react-toastify-b60658ac.css","assets/index-9ec5ecf7.js","assets/index-f5fff0ed.js","assets/index.esm-af752bfc.js","assets/CheckIcon-47aae061.js","assets/index-30d16895.js","assets/index-2d8fa5f2.js","assets/InfoIcon-09d33252.js","assets/index-9cab4a58.js","assets/index-6177de7e.js","assets/Popover-0f5d6cad.js","assets/useSlotProps-e49bab01.js","assets/Popper-5dc77ce4.js","assets/index-64f1c910.js","assets/generateCategoricalChart-d8676aa0.js","assets/NoFilterResultIcon-83775d26.js","assets/index-3882507e.js","assets/index-a9001226.js","assets/PlusIcon-1b381e13.js"]).then(({AddItemModal:t})=>({default:t}))),br=m.lazy(()=>D(()=>import("./index-1be527d1.js"),["assets/index-1be527d1.js","assets/index-7f808302.js","assets/index-a2878e02.css","assets/index-9ec5ecf7.js","assets/react-toastify.esm-4df52b04.js","assets/react-toastify-b60658ac.css","assets/generateCategoricalChart-d8676aa0.js","assets/Popover-0f5d6cad.js","assets/useSlotProps-e49bab01.js","assets/InfoIcon-09d33252.js","assets/index.esm-af752bfc.js","assets/NoFilterResultIcon-83775d26.js","assets/index-3882507e.js","assets/index-a9001226.js","assets/index-2d8fa5f2.js","assets/PlusIcon-1b381e13.js","assets/index-9cab4a58.js","assets/index-6177de7e.js","assets/Popper-5dc77ce4.js","assets/CheckIcon-47aae061.js"]).then(({SourcesTableModal:t})=>({default:t}))),Cr=m.lazy(()=>D(()=>import("./index-a2f6b145.js"),["assets/index-a2f6b145.js","assets/index-7f808302.js","assets/index-a2878e02.css","assets/index-9ec5ecf7.js","assets/react-toastify.esm-4df52b04.js","assets/react-toastify-b60658ac.css","assets/index-2d8fa5f2.js","assets/index.esm-af752bfc.js","assets/InfoIcon-09d33252.js","assets/index-6177de7e.js","assets/Popover-0f5d6cad.js","assets/useSlotProps-e49bab01.js","assets/Skeleton-7867c13b.js"]).then(({EditNodeNameModal:t})=>({default:t}))),vr=m.lazy(()=>D(()=>import("./index-88a6b386.js"),["assets/index-88a6b386.js","assets/index-7f808302.js","assets/index-a2878e02.css","assets/index-9ec5ecf7.js","assets/react-toastify.esm-4df52b04.js","assets/react-toastify-b60658ac.css","assets/Skeleton-7867c13b.js"]).then(({RemoveNodeModal:t})=>({default:t}))),wr=m.lazy(()=>D(()=>import("./index-6aeeb329.js"),["assets/index-6aeeb329.js","assets/index-7f808302.js","assets/index-a2878e02.css","assets/index-9ec5ecf7.js","assets/react-toastify.esm-4df52b04.js","assets/react-toastify-b60658ac.css","assets/index-9cab4a58.js","assets/index-6177de7e.js","assets/Popover-0f5d6cad.js","assets/useSlotProps-e49bab01.js","assets/Popper-5dc77ce4.js","assets/index-a9001226.js","assets/generateCategoricalChart-d8676aa0.js","assets/InfoIcon-09d33252.js","assets/index.esm-af752bfc.js","assets/NoFilterResultIcon-83775d26.js","assets/index-3882507e.js","assets/index-2d8fa5f2.js","assets/PlusIcon-1b381e13.js","assets/CheckIcon-47aae061.js"]).then(({AddNodeEdgeModal:t})=>({default:t}))),Sr=m.lazy(()=>D(()=>import("./index-436ad570.js"),["assets/index-436ad570.js","assets/index-7f808302.js","assets/index-a2878e02.css","assets/react-toastify.esm-4df52b04.js","assets/react-toastify-b60658ac.css","assets/index-9ec5ecf7.js","assets/index-a9001226.js","assets/index-9cab4a58.js","assets/index-6177de7e.js","assets/Popover-0f5d6cad.js","assets/useSlotProps-e49bab01.js","assets/Popper-5dc77ce4.js","assets/generateCategoricalChart-d8676aa0.js","assets/InfoIcon-09d33252.js","assets/index.esm-af752bfc.js","assets/NoFilterResultIcon-83775d26.js","assets/index-3882507e.js","assets/index-2d8fa5f2.js","assets/PlusIcon-1b381e13.js","assets/CheckIcon-47aae061.js"]).then(({MergeNodeModal:t})=>({default:t}))),_r=m.lazy(()=>D(()=>import("./index-fd459383.js"),["assets/index-fd459383.js","assets/index-7f808302.js","assets/index-a2878e02.css","assets/react-toastify.esm-4df52b04.js","assets/react-toastify-b60658ac.css","assets/index-9ec5ecf7.js","assets/index-2d8fa5f2.js","assets/index.esm-af752bfc.js","assets/InfoIcon-09d33252.js","assets/index-30d16895.js","assets/index-9cab4a58.js","assets/index-6177de7e.js","assets/Popover-0f5d6cad.js","assets/useSlotProps-e49bab01.js","assets/Popper-5dc77ce4.js","assets/index-64f1c910.js"]).then(({ChangeNodeTypeModal:t})=>({default:t}))),Tr=m.lazy(()=>D(()=>import("./index-8a54f4eb.js"),["assets/index-8a54f4eb.js","assets/index-7f808302.js","assets/index-a2878e02.css","assets/index-9ec5ecf7.js","assets/react-toastify.esm-4df52b04.js","assets/react-toastify-b60658ac.css","assets/index-9cab4a58.js","assets/index-6177de7e.js","assets/Popover-0f5d6cad.js","assets/useSlotProps-e49bab01.js","assets/Popper-5dc77ce4.js","assets/index-2d8fa5f2.js","assets/index.esm-af752bfc.js","assets/InfoIcon-09d33252.js","assets/PlusIcon-1b381e13.js","assets/index-30d16895.js","assets/constant-49cb27d3.js","assets/constants-a5212b22.js","assets/AddContentIcon-af951765.js","assets/generateCategoricalChart-d8676aa0.js","assets/NoFilterResultIcon-83775d26.js","assets/index-3882507e.js","assets/index-a9001226.js","assets/CheckIcon-47aae061.js"]).then(({BlueprintModal:t})=>({default:t}))),kr=()=>e.jsxs(e.Fragment,{children:[e.jsx(jr,{}),e.jsx(yr,{}),e.jsx(gr,{}),e.jsx(Cr,{}),e.jsx(vr,{}),e.jsx(br,{}),e.jsx(wr,{}),e.jsx(_r,{}),e.jsx(Tr,{}),e.jsx(Sr,{})]}),Ar=()=>{const t=te(n=>n.appMetaData);return t?e.jsxs(Lr,{children:[e.jsxs($r,{children:[e.jsx(e.Fragment,{children:t.title&&e.jsx(S,{className:"title",color:"white",children:t.title})}),e.jsx(S,{className:"subtitle",children:" Second Brain"})]}),e.jsx(Zt,{})]}):null},Lr=d(p).attrs({align:"center",direction:"row",grow:1,justify:"flex-start"})`
  height: 64px;
  position: absolute;
  top: 0px;
  left: 64px;
  right: 32px;
  transition: opacity 1s;
  z-index: 99;
  padding: 20px 23px;
`,$r=d.div`
  ${Yt.smallOnly`
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
`,Er=()=>{const[t,n]=m.useState(!0),r=fn();m.useEffect(()=>{n(!0)},[r]);const o=()=>{n(!1)};return r&&t?e.jsxs(Ir,{align:"center",direction:"column",justify:"center",onClick:o,children:[e.jsx("img",{alt:"screen",src:"jamboard_kiosk.png"}),e.jsxs(p,{align:"center",direction:"column",justify:"center",children:[e.jsx(_e,{children:"Second Brain is currently"}),e.jsx(_e,{style:{fontWeight:600},children:"optimized for Desktop."}),e.jsx(_e,{children:"Mobile support coming soon."})]}),e.jsx(H,{color:"secondary",onClick:o,variant:"contained",children:"Got It"})]}):null},Ir=d(p)`
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
`,Nr={},Pr=m.createContext(Nr),Br=()=>{const[t,n]=m.useState(!1),r=m.useMemo(()=>({isShow:t,setIsShow:n}),[t]);return e.jsx(Pr.Provider,{value:r})},C=d(Vn)`
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
`,Ce=d(X)`
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
`,ve=d(jt)`
  && {
    border-bottom: 1px solid ${u.black};
    position: sticky;
    top: 0;
    z-index: 1;
    background-color: ${u.BG1};
  }

  ${C} {
    color: ${u.white};
    font-family: Barlow;
    font-size: 11px;
    font-style: normal;
    font-weight: 700;
    line-height: 18px; /* 163.636% */
    letter-spacing: 1.1px;
    text-transform: uppercase;
  }
`,ge=d(H)`
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
`,we=d(p)`
  margin-bottom: 16px;
  padding: 0 36px;
  ${S} {
    margin-bottom: 0;
  }
`,Or=d(jt)`
  && {
    border-bottom: 1px solid ${u.black};
    position: sticky;
    top: 0;
    z-index: 1;
    background-color: ${u.BG1};
  }

  ${C} {
    color: ${u.white};
  }

  ${C}.empty {
    width: 0;
    padding: 0;
  }
`,Mr=({data:t})=>{const n=ee(l=>l.setQueuedSources),[r,o]=m.useState(""),i=async l=>{if(t!=null&&t.length)try{const s=await Kt.enable();await qt(l,s.pubkey),n(t.filter(c=>c.ref_id!==l))}catch(s){console.warn(s)}},a=async l=>{if(!(!l||!(t!=null&&t.length))){o(l);try{await lt(l),n(t==null?void 0:t.filter(s=>s.ref_id!==l))}catch(s){console.warn(s)}finally{o("")}}};return t!=null&&t.length?e.jsxs(be,{component:"table",children:[e.jsx(ve,{children:e.jsxs(X,{component:"tr",children:[e.jsx(C,{className:"empty"}),e.jsx(C,{children:"Type"}),e.jsx(C,{children:"Source"}),e.jsx(C,{}),e.jsx(C,{className:"empty"})]})}),(t==null?void 0:t.length)&&e.jsx("tbody",{children:t==null?void 0:t.map(l=>e.jsxs(Ce,{children:[e.jsx(C,{className:"empty"}),e.jsx(C,{children:Q[l.source_type]}),e.jsx(C,{width:"268px",children:l.source_type==="twitter_handle"?e.jsxs(Xe,{href:`${Ct}/${l.source}?open=system`,target:"_blank",children:["@",l.source]}):e.jsx(Xe,{href:`${l.source}?open=system`,target:"_blank",children:l.source})}),e.jsx(C,{className:"cell-center",children:e.jsxs(p,{direction:"row",justify:"space-between",children:[e.jsx("div",{className:"approve-wrapper",children:e.jsx(qe,{className:"centered",onClick:()=>i(l.ref_id),children:e.jsx(Dn,{color:u.primaryGreen,fontSize:24})})}),e.jsx("div",{className:"delete-wrapper",children:r===l.ref_id?e.jsx(N,{color:u.white,size:16}):e.jsx(bt,{message:"Are you sure ?",onConfirm:()=>a(l.ref_id),children:e.jsx(qe,{className:"centered",children:e.jsx(Rn,{color:u.primaryRed,fontSize:24})})})})]})}),e.jsx(C,{className:"empty"})]},l.source))})]}):e.jsxs(p,{children:[e.jsx(S,{children:"There is not any results for selected filters"}),e.jsx(Ie,{})]})},qe=d(p)`
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
`,Xe=d.a`
  color: ${u.white};
  text-decoration: underline;
  &:visited {
    color: ${u.white};
  }
  &:hover {
    cursor: pointer;
  }
`,zr=()=>{const[t,n]=m.useState(!0),[r,o]=m.useState(""),[i,a]=ee(c=>[c.queuedSources,c.setQueuedSources]);m.useEffect(()=>{(async()=>{n(!0);try{const x=await ct({approved:"False"});a(x.data)}catch(x){console.warn(x)}finally{n(!1)}})()},[a]);const l=c=>{o(r===c||!c?"":c)},s=i==null?void 0:i.filter(c=>!r||c.source_type===r);return e.jsxs(Dr,{align:"stretch",direction:"column",justify:"flex-end",children:[e.jsxs(we,{align:"flex-start",justify:"space-between",children:[e.jsx(S,{className:"title",children:"Queued Sources"}),e.jsx(S,{className:"subtitle",children:"This is a queue of pending sources waiting for approval or denial from graph users. If you think a source will provide good content for the graph, you can pay to approve it. Think of this as an investment: you pay to add it to the source table, and if the content is popular you will earn from it. If content is not relevant to the graph, you should deny it."})]}),e.jsxs(p,{className:"filters",direction:"row",pb:16,px:36,children:[e.jsx(ge,{className:ae({selected:!r}),onClick:()=>l(""),size:"small",children:"All"}),Object.keys(Q).map(c=>e.jsx(ge,{className:ae({selected:c===r}),onClick:()=>l(c),size:"small",children:Q[c]},c))]}),e.jsx(Rr,{align:"center",justify:t?"center":"flex-start",children:t?e.jsx(N,{color:u.white}):e.jsx(Mr,{data:s})})]})},Dr=d(p)`
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
`,Rr=d(p)`
  min-height: 0;
  overflow: auto;
  flex: 1;
  width: 100%;
`,Fr=({onSearch:t,placeholder:n,activeIcon:r,loadingIcon:o,defaultIcon:i,...a})=>{const[l,s]=m.useState(""),[c,x]=m.useState(!1),g=()=>{s(""),t(""),x(!1)},h=y=>{!y.target.value&&g(),s(y.target.value)},f=y=>{const{value:j}=y.currentTarget;s(j),!c&&(x(!0),setTimeout(()=>{t(j),j||g(),x(!1)},1e3),j||g())},b=()=>c?e.jsx(Qe,{children:e.jsx(Te,{type:"button",children:o})}):e.jsx(Qe,{children:l?e.jsx(Te,{onClick:g,type:"button",children:r}):e.jsx(Te,{type:"button",children:i})});return e.jsxs(Wr,{children:[e.jsx(Vr,{autoComplete:"off",autoCorrect:"off",inputProps:{"aria-label":"search sources"},onChange:h,onKeyDown:y=>{y.key==="Enter"&&f(y)},placeholder:n,value:l,...a}),b()]})},Qe=d(p)`
  top: -50%;
  right: -3%;
  z-index: 3;
  position: absolute;
  transform: translate(-50%, 50%);
`,Te=d(G)`
  font-size: 24px;
`,Wr=d(_t)`
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
`,Vr=d(Tt)`
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
`,Ur=({data:t,canEdit:n=!1})=>{const r=ee(s=>s.setSources),[o,i]=m.useState(""),a=async(s,c)=>{if(t!=null&&t.length)try{await Xt(s,c);const x=t==null?void 0:t.findIndex(h=>h.ref_id===s),g=[...t];g[x]={...g[x],source:c.source},r(g)}catch(x){console.warn(x)}},l=async s=>{if(!(!s||!(t!=null&&t.length))){i(s);try{await lt(s),r(t==null?void 0:t.filter(c=>c.ref_id!==s))}catch(c){console.warn(c)}finally{i("")}}};return t!=null&&t.length?e.jsxs(be,{"aria-label":"a dense table",component:"table",id:"sources-table",size:"small",children:[e.jsx(ve,{children:e.jsxs(X,{component:"tr",children:[e.jsx(C,{className:"empty"}),e.jsx(C,{children:"Type"}),e.jsx(C,{align:"left",children:"Source"}),n&&e.jsx(C,{align:"left"}),e.jsx(C,{className:"empty"})]})}),e.jsx(Gn,{component:"tbody",children:t==null?void 0:t.map(s=>e.jsxs(Ce,{children:[e.jsx(C,{className:"empty"}),e.jsx(C,{align:"left",children:Q[s.source_type]}),e.jsx(C,{align:"left",children:e.jsx(Gr,{condition:n,wrapper:c=>e.jsx(Hr,{id:s.ref_id,onSave:x=>a(s.ref_id,{source:x,source_type:s.source_type}),value:s.source,children:c}),children:s.source_type===Fe||s.source_type===We||s.source_type===Ve?e.jsxs(e.Fragment,{children:[s.source_type===Fe&&e.jsxs(ke,{href:`${Ct}/${s.source}`,target:"_blank",children:["@",s.source]}),s.source_type===We&&e.jsx(ke,{href:`${s.source}${s.source.includes("?")?"&":"?"}open=system`,target:"_blank",children:s.source}),s.source_type===Ve&&e.jsx(ke,{href:s.source,target:"_blank",children:s.source})]}):e.jsx("div",{children:s.source})})}),n&&e.jsx(C,{align:"left",children:e.jsx("div",{className:"delete-wrapper",id:`delete-${s.source}`,children:o===s.ref_id?e.jsx(Et,{"data-testid":`delete-loader-${s.ref_id}`,children:e.jsx(N,{color:u.white,size:16})}):e.jsx(bt,{"data-testid":`delete-icon-${s.ref_id}`,message:"Are you sure?",onConfirm:()=>l(s.ref_id),children:e.jsx(q,{className:"centered","data-testid":`delete-icon-${s.ref_id}`,children:e.jsx(qn,{})})})})}),e.jsx(C,{className:"empty"})]},s.source))})]}):e.jsxs(Zr,{children:[e.jsx(Un,{}),e.jsx(S,{className:"text",children:"There is not any results for selected filters"})]})};function Gr({condition:t,wrapper:n,children:r}){return t?n(r):r}const Hr=({value:t,onSave:n,id:r,children:o})=>{const[i,a]=m.useState(!1),[l,s]=m.useState(t),[c,x]=m.useState(!1),g=async()=>{if(r){x(!0);try{await n(l),a(!1)}catch(h){console.warn(h)}finally{x(!1)}}};return e.jsx("div",{children:i?e.jsxs(Yr,{align:"center",direction:"row",children:[e.jsx(Kn,{className:"editable-cell__input",name:"cell-input",onChange:h=>s(h),value:l}),e.jsx(q,{align:"center",justify:"center",children:c?e.jsx(Et,{"data-testid":`edit-loader-${r}`,children:e.jsx(N,{color:u.white,size:12})}):e.jsx(Fn,{"data-testid":`check-icon-${r}`,onClick:g})}),e.jsx(q,{align:"center",className:"secondary",justify:"center",onClick:()=>a(!1),children:e.jsx(yt,{})})]}):e.jsxs(Kr,{direction:"row",children:[o,e.jsx(q,{onClick:()=>a(!0),children:e.jsx(Wn,{"data-testid":`edit-icon-${r}`,size:20})})]})})},Yr=d(p)`
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
`,Zr=d(p)`
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
`,Kr=d(p)`
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
  color: ${u.white};
  text-decoration: underline;
  &:visited {
    color: ${u.white};
  }
`,Et=d(p)`
  display: flex;
  justify-content: center;
  align-items: center;
`,qr=()=>{const[t,n]=m.useState(!0),[r,o]=m.useState(""),[i,a]=ee(h=>[h.sources,h.setSources]),[l]=le(h=>[h.isAdmin]),[s,c]=m.useState("");m.useEffect(()=>{(async()=>{n(!0);try{const f=await ct();a(f.data)}catch(f){console.warn(f)}finally{n(!1)}})()},[a]);const x=h=>{o(r===h||!h?"":h)},g=m.useMemo(()=>i==null?void 0:i.filter(h=>(!r||h.source_type===r)&&(h.source.toLowerCase().startsWith(s.toLowerCase())||h.source.toLowerCase().includes(s.toLowerCase()))),[s,r,i]);return e.jsxs(Xr,{align:"stretch",direction:"column",justify:"flex-end",children:[e.jsx(we,{align:"center",direction:"row",justify:"space-between",children:e.jsx(S,{className:"title",children:"Sources for this Graph"})}),e.jsx(Jr,{children:e.jsx(Fr,{activeIcon:e.jsx(ce,{}),defaultIcon:e.jsx(ut,{}),loadingIcon:e.jsx(N,{color:u.PRIMARY_BLUE,size:24}),onSearch:c,placeholder:"Find Source"})}),e.jsxs(p,{className:"filters",direction:"row",pb:16,px:36,children:[e.jsx(ge,{className:ae({selected:!r}),onClick:()=>x(""),size:"small",children:"All"}),Object.keys(Q).map(h=>e.jsx(ge,{className:ae({selected:h===r}),onClick:()=>x(h),size:"small",children:Q[h]},h))]}),e.jsx(Qr,{align:"center",justify:t?"center":"flex-start",children:t?e.jsx(N,{color:u.white}):e.jsx(Ur,{canEdit:l,data:g})})]})},Xr=d(p)`
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
`,Qr=d(p)`
  min-height: 0;
  overflow: auto;
  flex: 1;
  width: 100%;
`,Jr=d(p)`
  margin: 0 0 16px 36px;
`,eo=({placeholder:t,activeIcon:n,loadingIcon:r,defaultIcon:o,loading:i,...a})=>{const[l,s]=R(j=>[j.filters,j.setFilters]),[c,x]=m.useState(""),g=()=>{s({search:""})},h=m.useCallback(j=>{s({search:j})},[s]),f=m.useMemo(()=>Me.debounce(h,300),[h]),b=j=>{const{value:v}=j.target;x(v),j.target.value||s({search:""}),j.target.value.length>2&&f(j.target.value)},y=()=>i?e.jsx(Je,{children:e.jsx(Ae,{type:"button",children:r})}):e.jsx(Je,{children:l.search?e.jsx(Ae,{onClick:g,type:"button",children:n}):e.jsx(Ae,{type:"button",children:o})});return e.jsxs(to,{children:[e.jsx(no,{autoComplete:"off",autoCorrect:"off",inputProps:{"aria-label":"search sources"},onChange:b,placeholder:t,value:c,...a}),y()]})},Je=d(p)`
  top: -50%;
  right: -3%;
  z-index: 3;
  position: absolute;
  transform: translate(-50%, 50%);
`,Ae=d(G)`
  font-size: 24px;
`,to=d(_t)`
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
`,no=d(Tt)`
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
`,It=t=>e.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 6 10",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M6 5L6.90043e-08 9.33013L4.47556e-07 0.669872L6 5Z",fill:"currentColor"})}),Nt=t=>e.jsxs("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M4.5 6.04386L7.83333 2.83398V13.6673",stroke:"white","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}),e.jsx("path",{d:"M15.5 13.9581L12.1667 17.168L12.1667 6.33463",stroke:"white","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"})]}),Pt=t=>e.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 10 10",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("circle",{cx:"5",cy:"5",r:"4.5",fill:"currentColor",stroke:"#6B7A8D"})}),ro=({selectedType:t,setSelectedType:n})=>{const[r,o]=m.useState([]);m.useEffect(()=>{(async()=>{try{const{data:s}=await Qt();o(s.edge_types)}catch(s){console.warn(s)}})()},[o]);const i=l=>({label:l,value:l}),a=l=>{n((l==null?void 0:l.value)||"")};return e.jsx(Re,{onSelect:a,options:r.map(i),selectedValue:t?i(t):null})},_i={label:"Not Selected",value:"Not Selected"},Ti={label:"No Parent",value:"No Parent"},ki=[{label:"number",value:"int"},{label:"string",value:"string"}],Bt=[{label:"Corporation",value:"Corporation"},{label:"Event",value:"Event"},{label:"Image",value:"Image"},{label:"Organization",value:"Organization"},{label:"Person",value:"Person"},{label:"Place",value:"Place"},{label:"Project",value:"Project"},{label:"Software",value:"Software"},{label:"Topic",value:"Topic"}],Ai=/^[^\s].*$/,oo=({onSelect:t,selectedValue:n,topicId:r})=>{const[o,i]=m.useState([]),[a,l]=m.useState(!1),s=m.useMemo(()=>{const f=async b=>{const y={is_muted:"False",sort_by:ze,search:b,skip:"0",limit:"1000"};l(!0);try{const v=(await dt(y.search)).data.filter(w=>(w==null?void 0:w.ref_id)!==r);i(v)}catch{i([])}finally{l(!1)}};return Me.debounce(f,300)},[r]),c=f=>{if(!f){i([]);return}f.length>2&&s(f)},x=f=>{const b=f?o.find(y=>y.ref_id===f.value):null;t(b||null)},g=f=>({label:f.search_value,value:f.ref_id,type:f.node_type}),h=f=>f.map(g);return n?e.jsxs(p,{align:"center",basis:"100%",direction:"row",grow:1,shrink:1,children:[e.jsx("span",{children:n.search_value}),e.jsx(G,{onClick:()=>t(null),size:"small",children:e.jsx(ce,{})})]}):e.jsx(Re,{handleInputChange:c,isLoading:a,onSelect:x,options:h(o)||Bt,selectedValue:n?g(n):null})},so=({from:t,onSelect:n,selectedType:r,setSelectedType:o,isSwapped:i,setIsSwapped:a,selectedToNode:l})=>e.jsxs(p,{mb:20,children:[e.jsx(p,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(p,{align:"center",direction:"row",children:e.jsx(io,{children:"Add edge"})})}),e.jsxs(co,{swap:i,children:[e.jsx(p,{children:e.jsx(po,{disabled:!0,label:i?"To":"From",swap:i,value:t==null?void 0:t.name})}),e.jsxs(p,{my:16,children:[e.jsx(lo,{children:"Type"}),e.jsx(ro,{selectedType:r,setSelectedType:o})]}),e.jsx(p,{children:e.jsxs(ho,{children:[e.jsx(uo,{children:i?"From":"To"}),e.jsx(oo,{onSelect:n,selectedValue:l,topicId:t==null?void 0:t.ref_id})]})}),e.jsxs(ao,{children:[e.jsx(xo,{children:e.jsx(Pt,{})}),e.jsx(fo,{onClick:a,children:e.jsx(Nt,{})}),e.jsx(mo,{children:e.jsx(It,{})})]})]})]}),io=d(S)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,ao=d.div`
  position: absolute;
  top: 26px;
  bottom: 26px;
  left: 4px;
  width: 35px;
  border-left: 1.5px solid #6b7a8d4d;
  border-top: 1.5px solid #6b7a8d4d;
  border-bottom: 1.5px solid #6b7a8d4d;
  border-radius: 12px 0 0 12px;
`,lo=d.label`
  color: #bac1c6;
  font-size: 13px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0.01em;
  text-align: left;
  margin-bottom: 6px;
`,co=d.div`
  position: relative;
  color: white;
  font-family: 'Barlow';
  display: flex;
  flex-direction: ${t=>t.swap?"column-reverse":"column"};
  margin-bottom: 10px;
  padding-left: 38px;
`,po=d(At)`
  position: relative;
  width: 100%;
  padding: 16px;
  gap: 10px;
  border-radius: 6px;
  border: 1px solid #6b7a8d4d;
  opacity: 0px;
  display: flex;
`,ho=d.div`
  position: relative;
  width: 100%;
  padding: 15px;
  gap: 10px;
  border-radius: 6px;
  border: 1.4px solid #6b7a8d4d;
  opacity: 0px;
  display: flex;
  align-items: center;
`,uo=d.label`
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
`,xo=d.div`
  position: absolute;
  top: 0;
  right: 0;
  transform: translateY(-50%) translateX(50%);
  color: #23252f;
`,fo=d.div`
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
`,mo=d.div`
  position: absolute;
  bottom: 0;
  right: 0;
  transform: translateY(10px) translateX(3px);
  color: #6b7a8d;
  line-height: 1;
`,go=({topic:t,onClose:n})=>{const{close:r}=U("addEdge"),[o]=R(v=>[v.data]),i=de({mode:"onChange"}),[a,l]=m.useState(!1),[s,c]=m.useState(!1),[x,g]=m.useState(""),[h,f]=m.useState(null),b=()=>{n(),r()},y=async()=>{if(!(!h||!o)){c(!0);try{await Jt({from:t.ref_id,to:h==null?void 0:h.ref_id,relationship:x});const{ref_id:v}=t,{ref_id:w}=h;if(o){const L={...o};L[v]={...L[v],edgeList:[...L[v].edgeList,x]},L[w]&&(L[w]={...L[w],edgeList:[...L[w].edgeList,x]}),R.setState({data:L})}b()}catch(v){console.warn(v)}finally{c(!1)}}},j=s||!h||!x;return e.jsx(De,{id:"addEdge",kind:"small",onClose:b,preventOutsideClose:!0,children:e.jsxs(pe,{...i,children:[e.jsx(so,{from:t,isSwapped:a,onSelect:f,selectedToNode:h,selectedType:x,setIsSwapped:()=>l(!a),setSelectedType:g}),e.jsxs(yo,{color:"secondary",disabled:j,onClick:y,size:"large",variant:"contained",children:["Confirm",s&&e.jsx(N,{color:u.BLUE_PRESS_STATE,size:10})]})]})})},yo=d(H)`
  width: 293px !important;
  margin: 0 0 10px auto !important;
`,jo=()=>e.jsxs(p,{children:[e.jsx(p,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(p,{align:"center",direction:"row",children:e.jsx(bo,{children:"Edit topic"})})}),e.jsx(p,{mb:12,children:e.jsx(se,{id:"cy-topic",maxLength:50,name:"name",placeholder:"Add your topic",rules:{...en}})})]}),bo=d(S)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,Co=({topic:t,onClose:n})=>{const{close:r}=U("editTopic"),[o]=R(b=>[b.data]),i=de({mode:"onChange"}),{watch:a,setValue:l,reset:s}=i,[c,x]=m.useState(!1);m.useEffect(()=>(t&&l("name",t==null?void 0:t.name),()=>{s()}),[t,l,s]);const g=a("name"),h=()=>{n(),r()},f=async()=>{x(!0);try{if(await je((t==null?void 0:t.ref_id)||"",{name:g.trim()}),o){const b={...o};b[t==null?void 0:t.ref_id].name=g.trim(),R.setState({data:b})}h()}catch(b){console.warn(b)}finally{x(!1)}};return e.jsx(De,{id:"editTopic",kind:"regular",onClose:h,preventOutsideClose:!0,children:e.jsxs(pe,{...i,children:[e.jsx(jo,{}),e.jsxs(H,{color:"secondary",disabled:c,onClick:f,size:"large",variant:"contained",children:["Save",c&&e.jsx(N,{color:u.BLUE_PRESS_STATE,size:10})]})]})})},vo=({topicId:t,onSelect:n,selectedValue:r})=>{const[o,i]=m.useState([]),[a,l]=m.useState(!1),s=m.useMemo(()=>{const f=async b=>{const y={is_muted:"False",sort_by:ze,search:b,skip:"0",limit:"1000"};l(!0);try{const v=(await dt(y.search)).data.filter(w=>(w==null?void 0:w.ref_id)!==t);i(v)}catch{i([])}finally{l(!1)}};return Me.debounce(f,300)},[t]),c=f=>{if(!f){i([]);return}f.length>2&&s(f)},x=f=>{const b=f?o.find(y=>y.ref_id===f.value):null;n(b||null)},g=f=>({label:f.search_value,value:f.ref_id,type:f.node_type}),h=f=>f.map(g);return r?e.jsxs(p,{align:"center",basis:"100%",direction:"row",grow:1,shrink:1,children:[e.jsx("span",{children:r.search_value}),e.jsx(G,{onClick:()=>n(null),size:"small",children:e.jsx(ce,{})})]}):e.jsx(Re,{handleInputChange:c,isLoading:a,onSelect:x,options:h(o)||Bt,selectedValue:r?g(r):null})},wo=({from:t,onSelect:n,selectedToNode:r,isSwapped:o,setIsSwapped:i})=>{var s;const a=t==null?void 0:t.map(c=>c.name).join(", "),l=t&&t.length===1?t[0].name:`${a==null?void 0:a.substring(0,25)} ...`;return e.jsxs(p,{mb:20,children:[e.jsx(p,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(p,{align:"center",direction:"row",children:e.jsx(So,{children:"Merge topic"})})}),e.jsxs(ko,{swap:o,children:[e.jsx(_o,{children:e.jsx(Ao,{disabled:!0,label:o?"To":"From",swap:o,value:l})}),e.jsxs(p,{my:16,children:[e.jsx($o,{children:"Type"}),e.jsx(S,{children:"IS ALIAS"})]}),e.jsx(p,{children:e.jsxs(Lo,{children:[e.jsx(Eo,{children:o?"From":"To"}),e.jsx(vo,{onSelect:n,selectedValue:r,topicId:(s=t[t.length-1])==null?void 0:s.ref_id})]})}),e.jsxs(To,{children:[e.jsx(Io,{children:e.jsx(Pt,{})}),e.jsx(No,{disabled:(t==null?void 0:t.length)!==1,onClick:(t==null?void 0:t.length)===1?i:void 0,children:e.jsx(Nt,{})}),e.jsx(Po,{children:e.jsx(It,{})})]})]})]})},So=d(S)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,_o=d(p)`
  flex: 1 1 100%;
`,To=d.div`
  position: absolute;
  top: 26px;
  bottom: 26px;
  left: 4px;
  width: 35px;
  border-left: 1.5px solid #6b7a8d4d;
  border-top: 1.5px solid #6b7a8d4d;
  border-bottom: 1.5px solid #6b7a8d4d;
  border-radius: 12px 0 0 12px;
`,ko=d.div`
  position: relative;
  color: white;
  font-family: 'Barlow';
  display: flex;
  flex-direction: ${t=>t.swap?"column-reverse":"column"};
  margin-bottom: 10px;
  padding-left: 38px;
`,Ao=d(At)`
  position: relative;
  width: 100%;
  padding: 16px;
  gap: 10px;
  border-radius: 6px;
  border: 1px solid #6b7a8d4d;
  opacity: 0px;
  display: flex;
`,Lo=d.div`
  position: relative;
  width: 100%;
  padding: 15px;
  gap: 10px;
  border-radius: 6px;
  border: 1.4px solid #6b7a8d4d;
  opacity: 0px;
  display: flex;
  align-items: center;
`,$o=d.label`
  color: #bac1c6;
  font-size: 13px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0.01em;
  text-align: left;
  margin-bottom: 6px;
`,Eo=d.label`
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
`,Io=d.div`
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
`,Po=d.div`
  position: absolute;
  bottom: 0;
  right: 0;
  transform: translateY(10px) translateX(3px);
  color: #6b7a8d;
  line-height: 1;
`,Bo=({onClose:t,multiTopics:n})=>{const{close:r}=U("mergeTopic"),o=de({mode:"onChange"}),{setValue:i,reset:a}=o,[l,s]=m.useState(!1),[c,x]=m.useState(!1),[g,h]=m.useState(null);m.useEffect(()=>{if(n&&n.length>0){const y=n.map(j=>j.name).join(", ");i("name",y)}return()=>{a()}},[n,i,a]);const f=()=>{t(),r()},b=async()=>{s(!0);const y=n==null?void 0:n.map(j=>j.ref_id).filter(j=>!!j);try{y.length&&g&&(await tn({from:y,to:g==null?void 0:g.ref_id}),R.setState(j=>({ids:j.ids.filter(v=>!y.includes(v)),total:j.total-y.length})),f())}catch(j){console.warn(j)}finally{s(!1)}};return e.jsx(De,{id:"mergeTopic",kind:"small",onClose:f,preventOutsideClose:!0,children:e.jsxs(pe,{...o,children:[e.jsx(wo,{from:n,isSwapped:c,onSelect:h,selectedToNode:g,setIsSwapped:()=>x(!c)}),e.jsxs(Oo,{color:"secondary","data-testid":"merge-topics-button",disabled:l||c||!g,onClick:b,size:"large",variant:"contained",children:["Merge topics",l&&e.jsx(N,{color:u.BLUE_PRESS_STATE,size:10})]})]})})},Oo=d(H)`
  width: 293px !important;
  margin: 0 0 10px auto !important;
`,Mo=t=>e.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M7.37516 8.625V11.3334C7.37516 11.5104 7.43508 11.6589 7.55491 11.7786C7.67476 11.8984 7.82326 11.9583 8.00041 11.9583C8.17758 11.9583 8.32599 11.8984 8.44564 11.7786C8.5653 11.6589 8.62512 11.5104 8.62512 11.3334V8.625H11.3335C11.5106 8.625 11.659 8.56508 11.7788 8.44525C11.8986 8.3254 11.9585 8.1769 11.9585 7.99975C11.9585 7.82258 11.8986 7.67417 11.7788 7.55452C11.659 7.43487 11.5106 7.37504 11.3335 7.37504H8.62512V4.66669C8.62512 4.4896 8.56521 4.34117 8.44537 4.22137C8.32553 4.1016 8.17702 4.04171 7.99987 4.04171C7.82271 4.04171 7.6743 4.1016 7.55464 4.22137C7.43499 4.34117 7.37516 4.4896 7.37516 4.66669V7.37504H4.66681C4.48973 7.37504 4.3413 7.43496 4.22152 7.55479C4.10173 7.67464 4.04183 7.82314 4.04183 8.00029C4.04183 8.17746 4.10173 8.32587 4.22152 8.44552C4.3413 8.56517 4.48973 8.625 4.66681 8.625H7.37516ZM8.00154 15.9167C6.90659 15.9167 5.8774 15.7089 4.91395 15.2933C3.9505 14.8778 3.11243 14.3138 2.39975 13.6015C1.68705 12.8891 1.12284 12.0514 0.7071 11.0884C0.291364 10.1253 0.0834961 9.09636 0.0834961 8.00142C0.0834961 6.90647 0.291274 5.87728 0.70683 4.91383C1.12239 3.95037 1.68634 3.11231 2.3987 2.39963C3.11108 1.68693 3.94878 1.12272 4.91181 0.706979C5.87482 0.291243 6.9038 0.083374 7.99875 0.083374C9.09369 0.083374 10.1229 0.291153 11.0863 0.706708C12.0498 1.12226 12.8879 1.68622 13.6005 2.39858C14.3132 3.11096 14.8774 3.94866 15.2932 4.91169C15.7089 5.8747 15.9168 6.90368 15.9168 7.99863C15.9168 9.09357 15.709 10.1228 15.2935 11.0862C14.8779 12.0497 14.3139 12.8877 13.6016 13.6004C12.8892 14.3131 12.0515 14.8773 11.0885 15.2931C10.1255 15.7088 9.09648 15.9167 8.00154 15.9167ZM8.00014 14.6667C9.86125 14.6667 11.4376 14.0209 12.7293 12.7292C14.021 11.4375 14.6668 9.86113 14.6668 8.00002C14.6668 6.13891 14.021 4.56252 12.7293 3.27085C11.4376 1.97919 9.86125 1.33335 8.00014 1.33335C6.13903 1.33335 4.56264 1.97919 3.27098 3.27085C1.97931 4.56252 1.33348 6.13891 1.33348 8.00002C1.33348 9.86113 1.97931 11.4375 3.27098 12.7292C4.56264 14.0209 6.13903 14.6667 8.00014 14.6667Z",fill:"currentColor"})}),zo=t=>e.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 12 12",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M10.1765 0.310088L4.72809 5.70971C4.63832 5.79868 4.56637 5.90372 4.51607 6.01926L3.74627 7.78746C3.63822 8.03565 3.89191 8.28707 4.14234 8.17999L5.92651 7.41707C6.04309 7.36722 6.14907 7.29592 6.23885 7.20695L11.6872 1.80733C12.1044 1.39388 12.1044 0.723539 11.6872 0.310088C11.27 -0.103363 10.5936 -0.103363 10.1765 0.310088ZM9.80835 7.14088C9.80835 6.81895 10.072 6.55777 10.3969 6.55777C10.723 6.55777 10.9854 6.82017 10.9854 7.14088L10.9191 10.2508C10.9191 11.2153 10.1489 12.0001 9.17571 12.0001H1.74343C0.79227 12.0001 0 11.2153 0 10.2289V2.84292C0 1.89999 0.79227 1.11523 1.74343 1.11523L5.29651 1.11548C5.62264 1.11548 5.88501 1.37666 5.88501 1.69858C5.88501 2.0205 5.62141 2.28168 5.29651 2.28168H1.7655C1.44134 2.28168 1.177 2.54335 1.177 2.86479V10.2508C1.177 10.5722 1.44134 10.8339 1.7655 10.8339H9.21985C9.54402 10.8339 9.80835 10.5722 9.80835 10.2508V7.14088Z",fill:"currentColor"})}),et=t=>e.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 12 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M1.33317 15.5L0.166504 14.3333L4.18734 10.2917C4.50678 9.97222 4.74984 9.61111 4.9165 9.20833C5.08317 8.80556 5.1665 8.38194 5.1665 7.9375L5.1665 3.6875L3.83317 5L2.6665 3.83333L5.99984 0.5L9.33317 3.83333L8.1665 5L6.83317 3.6875L6.83317 7.9375C6.83317 8.38194 6.9165 8.80556 7.08317 9.20833C7.24984 9.61111 7.49289 9.97222 7.81234 10.2917L11.8332 14.3333L10.6665 15.5L5.99984 10.8333L1.33317 15.5Z",fill:"currentColor"})}),Le=t=>e.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 12 8",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M0.333496 7.66704V6.66706H3.91681V7.66704H0.333496ZM0.333496 4.50037V3.50041H7.7886V4.50037H0.333496ZM0.333496 1.33372V0.33374H11.6668V1.33372H0.333496Z",fill:"currentColor"})}),tt=t=>e.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 16 15",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M14.0716 15L10.8994 11.7764C10.437 11.9597 9.96181 12.0919 9.47381 12.1732C8.98581 12.2545 8.49002 12.2952 7.98643 12.2952C6.33597 12.2952 4.82448 11.8457 3.45194 10.9466C2.07941 10.0476 0.991584 8.86271 0.188459 7.39193C0.123124 7.27666 0.0753836 7.15933 0.045238 7.03994C0.0150793 6.92055 0 6.7991 0 6.67559C0 6.55208 0.0163338 6.42935 0.0490013 6.30739C0.0816688 6.18543 0.13067 6.06938 0.196005 5.95925C0.508607 5.42714 0.84081 4.91226 1.19261 4.41462C1.54443 3.91699 1.95353 3.47673 2.41992 3.09386L0.24877 0.846015L1.07501 0L14.8978 14.154L14.0716 15ZM7.98643 9.94854C8.16032 9.94854 8.32642 9.93799 8.48473 9.91689C8.64305 9.89579 8.7976 9.84973 8.94838 9.77871L4.95591 5.69059C4.89158 5.84498 4.84786 6.00324 4.82475 6.16535C4.80162 6.32745 4.79005 6.49753 4.79005 6.67559C4.79005 7.58645 5.10039 8.35966 5.72108 8.99521C6.34176 9.63076 7.09688 9.94854 7.98643 9.94854ZM13.4384 10.3561L10.9792 7.85816C11.0456 7.66673 11.0961 7.47375 11.1308 7.27922C11.1655 7.0847 11.1828 6.88349 11.1828 6.67559C11.1828 5.76473 10.8725 4.99152 10.2518 4.35597C9.63109 3.72042 8.87598 3.40264 7.98643 3.40264C7.78339 3.40264 7.58689 3.42168 7.39692 3.45976C7.20694 3.49784 7.02099 3.56011 6.83907 3.64657L4.87751 1.64575C5.37606 1.44402 5.88441 1.29529 6.40257 1.19957C6.92071 1.10385 7.44867 1.05599 7.98643 1.05599C9.64191 1.05599 11.1604 1.50756 12.542 2.41072C13.9236 3.31387 15.0134 4.50598 15.8115 5.98705C15.8718 6.08894 15.9183 6.19829 15.951 6.31511C15.9837 6.43192 16 6.55208 16 6.67559C16 6.7991 15.9857 6.91926 15.957 7.03607C15.9284 7.15289 15.8839 7.26225 15.8236 7.36414C15.52 7.94669 15.1738 8.49038 14.7848 8.99521C14.3958 9.50005 13.947 9.95369 13.4384 10.3561ZM10.0912 6.95657L7.73162 4.54816C8.06131 4.48126 8.38246 4.50545 8.69506 4.62072C9.00767 4.736 9.27754 4.9156 9.5047 5.15952C9.7369 5.40036 9.90451 5.67723 10.0075 5.99012C10.1106 6.30301 10.1385 6.62516 10.0912 6.95657Z",fill:"currentColor"})}),nt=t=>e.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 18 13",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M9.00204 9.98073C9.94628 9.98073 10.7483 9.65024 11.408 8.98927C12.0677 8.32829 12.3976 7.52567 12.3976 6.58142C12.3976 5.63718 12.0671 4.8352 11.4061 4.17548C10.7451 3.51576 9.9425 3.1859 8.99825 3.1859C8.05401 3.1859 7.25203 3.51638 6.59231 4.17735C5.93259 4.83834 5.60273 5.64096 5.60273 6.58521C5.60273 7.52944 5.93321 8.33142 6.59419 8.99115C7.25517 9.65087 8.05779 9.98073 9.00204 9.98073ZM9.00014 8.83331C8.37514 8.83331 7.84389 8.61456 7.40639 8.17706C6.96889 7.73956 6.75014 7.20831 6.75014 6.58331C6.75014 5.95831 6.96889 5.42706 7.40639 4.98956C7.84389 4.55206 8.37514 4.33331 9.00014 4.33331C9.62514 4.33331 10.1564 4.55206 10.5939 4.98956C11.0314 5.42706 11.2501 5.95831 11.2501 6.58331C11.2501 7.20831 11.0314 7.73956 10.5939 8.17706C10.1564 8.61456 9.62514 8.83331 9.00014 8.83331ZM9.00129 12.4166C7.08494 12.4166 5.33884 11.888 3.76298 10.8309C2.18713 9.77374 1.02688 8.35788 0.282227 6.58331C1.02688 4.80874 2.18675 3.39288 3.76185 2.33573C5.33694 1.27858 7.08265 0.75 8.999 0.75C10.9153 0.75 12.6614 1.27858 14.2373 2.33573C15.8132 3.39288 16.9734 4.80874 17.7181 6.58331C16.9734 8.35788 15.8135 9.77374 14.2384 10.8309C12.6634 11.888 10.9176 12.4166 9.00129 12.4166Z",fill:"currentColor"})}),Do=t=>e.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:e.jsxs("g",{opacity:"0.4",children:[e.jsx("mask",{id:"mask0_5162_13105",maskUnits:"userSpaceOnUse",x:"0",y:"0",width:"24",height:"24",children:e.jsx("rect",{width:"1em",height:"1em",fill:"currentColor"})}),e.jsx("g",{mask:"url(#mask0_5162_13105)",children:e.jsx("path",{d:"M19.7615 21.8691L15.7154 17.8537C15.1256 18.0819 14.5195 18.2467 13.8971 18.348C13.2747 18.4493 12.6423 18.4999 12 18.4999C9.89486 18.4999 7.96698 17.94 6.21635 16.8201C4.46572 15.7002 3.07822 14.2243 2.05385 12.3922C1.97052 12.2486 1.90963 12.1025 1.87118 11.9538C1.83271 11.8051 1.81348 11.6538 1.81348 11.4999C1.81348 11.3461 1.83431 11.1932 1.87598 11.0413C1.91764 10.8894 1.98014 10.7448 2.06348 10.6076C2.46219 9.9448 2.88591 9.30345 3.33463 8.68357C3.78336 8.0637 4.30516 7.51531 4.90003 7.0384L2.13078 4.2384L3.18463 3.18457L20.8153 20.8153L19.7615 21.8691ZM12 15.5768C12.2218 15.5768 12.4336 15.5637 12.6356 15.5374C12.8375 15.5111 13.0346 15.4537 13.2269 15.3653L8.13463 10.273C8.05258 10.4653 7.99681 10.6624 7.96733 10.8643C7.93783 11.0663 7.92308 11.2781 7.92308 11.4999C7.92308 12.6345 8.31891 13.5977 9.11058 14.3893C9.90224 15.181 10.8654 15.5768 12 15.5768ZM18.9538 16.0845L15.8173 12.973C15.9019 12.7345 15.9663 12.4941 16.0105 12.2518C16.0548 12.0095 16.0769 11.7589 16.0769 11.4999C16.0769 10.3653 15.681 9.40219 14.8894 8.61052C14.0977 7.81885 13.1346 7.42302 12 7.42302C11.741 7.42302 11.4904 7.44674 11.2481 7.49417C11.0058 7.5416 10.7686 7.61917 10.5366 7.72687L8.03463 5.23457C8.67051 4.98329 9.3189 4.79803 9.9798 4.6788C10.6407 4.55956 11.3141 4.49995 12 4.49995C14.1115 4.49995 16.0484 5.06245 17.8105 6.18745C19.5727 7.31245 20.9628 8.79738 21.9807 10.6422C22.0576 10.7692 22.1169 10.9054 22.1586 11.0509C22.2003 11.1964 22.2211 11.3461 22.2211 11.4999C22.2211 11.6538 22.2028 11.8034 22.1663 11.9489C22.1297 12.0945 22.073 12.2307 21.9961 12.3576C21.6089 13.0832 21.1673 13.7605 20.6711 14.3893C20.175 15.0182 19.6025 15.5832 18.9538 16.0845ZM14.6846 11.8499L11.675 8.84992C12.0955 8.76659 12.5051 8.79671 12.9038 8.9403C13.3025 9.0839 13.6468 9.30761 13.9365 9.61145C14.2327 9.91145 14.4465 10.2563 14.5779 10.6461C14.7093 11.0358 14.7449 11.4371 14.6846 11.8499Z",fill:"currentColor"})})]})}),Ro=t=>e.jsxs("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("mask",{id:"mask0_5162_13106",maskUnits:"userSpaceOnUse",x:"0",y:"0",width:"24",height:"24",children:e.jsx("rect",{width:"1em",height:"1em",fill:"currentColor"})}),e.jsx("g",{mask:"url(#mask0_5162_13106)",children:e.jsx("path",{d:"M12.0023 15.5769C13.1354 15.5769 14.0978 15.1803 14.8895 14.3871C15.6811 13.5939 16.077 12.6308 16.077 11.4977C16.077 10.3646 15.6804 9.40224 14.8872 8.61058C14.094 7.81891 13.1309 7.42308 11.9978 7.42308C10.8647 7.42308 9.90234 7.81966 9.11067 8.61282C8.31901 9.40601 7.92317 10.3692 7.92317 11.5023C7.92317 12.6353 8.31976 13.5977 9.11293 14.3894C9.90611 15.181 10.8692 15.5769 12.0023 15.5769ZM12.0001 14.2C11.2501 14.2 10.6126 13.9375 10.0876 13.4125C9.56258 12.8875 9.30007 12.25 9.30007 11.5C9.30007 10.75 9.56258 10.1125 10.0876 9.58748C10.6126 9.06248 11.2501 8.79998 12.0001 8.79998C12.7501 8.79998 13.3876 9.06248 13.9126 9.58748C14.4376 10.1125 14.7001 10.75 14.7001 11.5C14.7001 12.25 14.4376 12.8875 13.9126 13.4125C13.3876 13.9375 12.7501 14.2 12.0001 14.2ZM12.0014 18.5C9.70183 18.5 7.60651 17.8657 5.71547 16.5971C3.82446 15.3285 2.43216 13.6295 1.53857 11.5C2.43216 9.37049 3.82401 7.67146 5.71412 6.40288C7.60422 5.13429 9.69908 4.5 11.9987 4.5C14.2983 4.5 16.3936 5.13429 18.2847 6.40288C20.1757 7.67146 21.568 9.37049 22.4616 11.5C21.568 13.6295 20.1761 15.3285 18.286 16.5971C16.3959 17.8657 14.3011 18.5 12.0014 18.5Z",fill:"currentColor"})})]}),Fo=t=>e.jsxs("svg",{width:"1em",height:"1em",viewBox:"0 0 22 22",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("mask",{id:"mask0_5577_416",maskUnits:"userSpaceOnUse",x:"0",y:"0",width:"22",height:"22",children:e.jsx("rect",{width:"1em",height:"1em",fill:"currentColor"})}),e.jsx("g",{mask:"url(#mask0_5577_416)",children:e.jsx("path",{d:"M11 17.6634C10.6219 17.6634 10.2982 17.5287 10.0289 17.2595C9.75964 16.9902 9.625 16.6665 9.625 16.2884C9.625 15.9103 9.75964 15.5866 10.0289 15.3173C10.2982 15.0481 10.6219 14.9134 11 14.9134C11.3781 14.9134 11.7018 15.0481 11.971 15.3173C12.2403 15.5866 12.375 15.9103 12.375 16.2884C12.375 16.6665 12.2403 16.9902 11.971 17.2595C11.7018 17.5287 11.3781 17.6634 11 17.6634ZM11 12.3749C10.6219 12.3749 10.2982 12.2403 10.0289 11.971C9.75964 11.7018 9.625 11.3781 9.625 11C9.625 10.6218 9.75964 10.2982 10.0289 10.0289C10.2982 9.75962 10.6219 9.62498 11 9.62498C11.3781 9.62498 11.7018 9.75962 11.971 10.0289C12.2403 10.2982 12.375 10.6218 12.375 11C12.375 11.3781 12.2403 11.7018 11.971 11.971C11.7018 12.2403 11.3781 12.3749 11 12.3749ZM11 7.08648C10.6219 7.08648 10.2982 6.95184 10.0289 6.68257C9.75964 6.41332 9.625 6.08963 9.625 5.7115C9.625 5.33339 9.75964 5.0097 10.0289 4.74043C10.2982 4.47118 10.6219 4.33655 11 4.33655C11.3781 4.33655 11.7018 4.47118 11.971 4.74043C12.2403 5.0097 12.375 5.33339 12.375 5.7115C12.375 6.08963 12.2403 6.41332 11.971 6.68257C11.7018 6.95184 11.3781 7.08648 11 7.08648Z",fill:"currentColor"})})]}),Wo=({topic:t,onClick:n,onSearch:r,checkedStates:o,setCheckedStates:i,isMuteDisabled:a})=>{const[l,s]=R(_=>[_.ids,_.total]),[c,x]=m.useState(!1),g=Ne(t.date_added_to_graph),h=async(_,A)=>{x(!0);try{await je(_,{is_muted:A}),R.setState({ids:l.filter(T=>T!==_),total:s-1})}catch(T){console.warn(T)}},f=_=>{i(A=>({...A,[_]:!A[_]}))},b=(_,A)=>{var T;(T=window.getSelection())!=null&&T.toString()?_.preventDefault():r(A.name)},y=t.edgeList.slice(0,1),j=t.edgeList.length-y.length,[v,w]=I.useState(null),L=_=>{w(_.currentTarget)},E=()=>{w(null)},P=!!v,B=o[t.ref_id]?"visible":"";return e.jsxs(Ce,{className:o[t.ref_id]?"checked":"",children:[e.jsx(C,{children:e.jsx(Go,{className:`checkbox-section ${B}`,onClick:()=>f(t.ref_id),children:e.jsx(Ho,{checked:o[t.ref_id],children:e.jsx(Yo,{children:o[t.ref_id]&&e.jsx(Lt,{})})})})}),e.jsx(C,{onClick:_=>b(_,t),children:e.jsx(Uo,{children:t.name})}),e.jsx(C,{children:t.node_type}),e.jsx(C,{children:e.jsx(Zo,{children:t.edgeCount})}),e.jsxs(C,{children:[e.jsx(kt,{anchorEl:v,anchorOrigin:{vertical:"top",horizontal:"center"},disableRestoreFocus:!0,id:"mouse-over-popover",onClose:E,open:P,sx:{pointerEvents:"none","& .MuiPaper-root":{backgroundColor:"rgba(0, 0, 0, 0.9)",borderRadius:"4px",width:"160px"}},transformOrigin:{vertical:"bottom",horizontal:"center"},children:e.jsx(Ke,{sx:{p:1.5,fontSize:"13px",fontWeight:400,lineHeight:"1.8",wordWrap:"break-word"},children:t.edgeList.join(", ")})}),y.join(", "),j>0&&e.jsx(Ke,{"aria-haspopup":"true","aria-owns":P?"mouse-over-popover":void 0,component:"span",onMouseEnter:L,onMouseLeave:E,sx:{cursor:"context-menu"},children:",..."})]}),e.jsx(C,{children:e.jsx("span",{children:g})}),e.jsx(C,{className:"cell-center",children:e.jsx(p,{direction:"row",justify:"space-between",children:e.jsx("div",{className:"approve-wrapper",children:c?e.jsx(Vo,{children:e.jsx(N,{color:u.white,size:16})}):e.jsxs(p,{direction:"row",children:[t.is_muted?e.jsx(G,{className:"centered",disabled:a,onClick:()=>h(t.ref_id,!1),children:e.jsx(Ro,{})}):e.jsx(G,{className:"centered",disabled:a,onClick:()=>h(t.ref_id,!0),children:e.jsx(Do,{})}),e.jsx(G,{disabled:a,onClick:_=>n(_,t.ref_id),children:e.jsx(Fo,{"data-testid":"ThreeDotsIcons"})})]})})})})]},t.name)},Vo=d.span`
  margin-left: 12px;
`,Uo=d.span`
  cursor: pointer;
  :hover {
    text-decoration: underline;
  }
`,Go=d.td`
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
`,Ko=m.memo(Wo),qo=({setShowMuteUnmute:t,showMuted:n,onTopicEdit:r,onChangeFilter:o,checkedStates:i,setCheckedStates:a})=>{const{close:l}=U("sourcesTable"),[s,c]=m.useState(!1),[x,g]=I.useState(null),[h,f]=I.useState(""),b=Object.values(i).filter(k=>k).length,[y,j]=te(k=>[k.setSearchFormValue,k.setCurrentSearch]),[v,w,L]=R(k=>[k.data,k.ids,k.total]),E=m.useCallback((k,F)=>{g(k.currentTarget),f(F)},[]),P=()=>{g(null)},B=k=>{y(k),j(k),l()},_=k=>{r(h,k),P()},A=k=>{o(k)},T=!!x,M=T?"simple-popover":void 0,O=async()=>{c(!0);try{const k=Object.keys(i).map(async $=>{if(i[$])try{return await je($,{is_muted:!n}),$}catch(Y){return console.error("Error updating node data:",Y),null}return null}),F=await Promise.all(k);R.setState({ids:w.filter($=>!F.includes($)),total:L-F.length}),a({}),c(!1)}catch(k){console.error("Error:",k),c(!1)}};return v?e.jsx(e.Fragment,{children:Object.keys(v).length?e.jsx(os,{align:"center",justify:s?"center":"flex-start",children:s?e.jsx(N,{color:u.white}):e.jsxs(e.Fragment,{children:[e.jsxs(be,{component:"table",children:[b>0?e.jsx(Or,{children:e.jsxs(X,{component:"tr",children:[e.jsx(C,{children:e.jsx(G,{onClick:()=>a({}),children:e.jsx(ce,{})})}),e.jsx(C,{colSpan:3,children:e.jsxs(rs,{children:[e.jsxs(ns,{children:[e.jsx(ts,{children:b}),"selected"]}),e.jsx(rt,{onClick:O,role:"button",children:n?e.jsxs(e.Fragment,{children:[e.jsx(nt,{})," Unmute ALL"]}):e.jsxs(e.Fragment,{children:[e.jsx(tt,{})," Mute ALL"]})}),e.jsxs(rt,{onClick:()=>_("mergeTopic"),children:[e.jsx(et,{})," Merge"]})]})}),e.jsx(C,{className:"empty"}),e.jsx(C,{className:"empty"}),e.jsx(C,{className:"empty"}),e.jsx(C,{className:"empty"})]})}):e.jsx(ve,{children:e.jsxs(X,{component:"tr",children:[e.jsx(C,{className:"empty"}),e.jsx(C,{children:e.jsxs($e,{onClick:()=>A(ze),children:["Name ",e.jsx(Le,{})]})}),e.jsx(C,{children:"Type"}),e.jsx(C,{children:e.jsxs($e,{onClick:()=>A(Hn),children:["Count ",e.jsx(Le,{})]})}),e.jsx(C,{children:"Edge list"}),e.jsx(C,{children:e.jsxs($e,{onClick:()=>A(Yn),children:["Date ",e.jsx(Le,{})]})}),e.jsx(C,{children:e.jsx(p,{px:8,children:e.jsxs(Xo,{onClick:t,children:[e.jsx(Qo,{checked:n,children:e.jsx(Jo,{children:n&&e.jsx(Lt,{})})}),"Muted"]})})})]})}),v&&e.jsx("tbody",{children:w==null?void 0:w.map(k=>e.jsx(Ko,{checkedStates:i,isMuteDisabled:Object.values(i).filter(F=>F).length>1,onClick:E,onSearch:B,setCheckedStates:a,topic:v[k]},k))})]}),h?e.jsxs(es,{anchorEl:x,anchorOrigin:{vertical:"bottom",horizontal:"right"},id:M,onClose:P,open:T,transformOrigin:{vertical:"top",horizontal:"right"},children:[n?e.jsxs(oe,{"data-testid":"unmute",onClick:()=>_("unMute"),children:[" ",e.jsx(nt,{"data-testid":""})," Unmute"]}):e.jsxs(oe,{"data-testid":"mute",onClick:()=>_("mute"),children:[" ",e.jsx(tt,{"data-testid":"VisibilityOff"})," Mute"]}),e.jsxs(oe,{"data-testid":"rename",onClick:()=>_("editTopic"),children:[e.jsx(zo,{"data-testid":"EditTopicIcon"})," Rename"]}),e.jsxs(oe,{"data-testid":"merge",onClick:()=>_("mergeTopic"),children:[e.jsx(et,{"data-testid":"MergeIcon"})," Merge"]}),e.jsxs(oe,{"data-testid":"add_edge",onClick:()=>_("addEdge"),children:[e.jsx(Mo,{"data-testid":"AddCircleIcon"})," Add edge"]})]}):null]})}):e.jsxs(p,{children:[e.jsx(S,{children:"There is not any results for selected filters"}),e.jsx(Ie,{})]})}):e.jsxs(p,{children:[e.jsx(S,{children:"There is not any results for selected filters"}),e.jsx(Ie,{})]})},Xo=d.td`
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
  background: ${u.BUTTON1};
  color: ${u.white};

  &:hover {
    background: ${u.BUTTON1_HOVER};
    color: ${u.GRAY3};
  }
`,es=d(kt)`
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
`,rt=d.div`
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
`,os=d(p)`
  min-height: 0;
  overflow: auto;
  flex: 1;
  width: 100%;
  position: relative;
`,ss=()=>{const[t,n,r,o,i,a,l,s]=R(T=>[T.data,T.ids,T.total,T.setTopics,T.filters,T.setFilters,T.terminate,T.loading]),{open:c}=U("editTopic"),{open:x}=U("mergeTopic"),{open:g}=U("addEdge"),[h,f]=m.useState(null),[b,y]=m.useState([]),[j,v]=m.useState({}),w={editTopic:c,mergeTopic:x,addEdge:g},L=m.useRef([]);m.useEffect(()=>{n.length&&(L.current=n)},[n]),m.useEffect(()=>{(async()=>{try{await o()}catch{console.error("err")}})()},[o,i]);const E=async()=>{a({page:i.page+1})};m.useEffect(()=>()=>{l()},[l]);const P=T=>{a({sortBy:T})},B=()=>{f(null),y([])},_=async(T,M)=>{try{await je(T,{is_muted:M==="mute"}),R.setState({ids:n.filter(O=>O!==T),total:r-1})}catch(O){console.warn(O)}},A=async(T,M)=>{if(t)if(M==="mergeTopic")if(Object.values(j).filter(O=>O).length>0){const O=Object.entries(j).filter(([,k])=>k).map(([k])=>t[k]);y(O),x()}else y([t[T]]),f(t[T]),x();else["mute","unMute"].includes(M)&&await _(T,M),typeof w[M]=="function"&&w[M](),f(t[T])};return e.jsxs(e.Fragment,{children:[e.jsxs(is,{direction:"column",justify:"flex-end",children:[e.jsx(we,{align:"flex-start",direction:"row",justify:"space-between",children:e.jsx(S,{className:"title",children:"Topics"})}),e.jsx(ls,{"data-testid":"topic-search-container",children:e.jsx(eo,{activeIcon:e.jsx(ce,{}),defaultIcon:e.jsx(ut,{}),loading:s,loadingIcon:e.jsx(N,{color:u.PRIMARY_BLUE,size:24}),placeholder:"Search ..."})}),e.jsx(as,{align:"center",justify:s&&!t?"center":"flex-start",children:s&&!t?e.jsx(N,{color:u.white}):e.jsxs(e.Fragment,{children:[e.jsx(qo,{checkedStates:j,onChangeFilter:P,onTopicEdit:A,setCheckedStates:v,setShowMuteUnmute:()=>a({is_muted:!i.is_muted}),showMuted:i.is_muted}),r>n.length?e.jsxs(H,{className:"load-more",disabled:s,onClick:E,children:["Load more",s&&e.jsx(N,{color:u.BLUE_PRESS_STATE,size:10})]}):null]})})]}),b.length>0&&e.jsx(Bo,{multiTopics:b,onClose:B}),h&&e.jsx(Co,{onClose:B,topic:h}),h&&e.jsx(go,{onClose:B,topic:h})]})},is=d(p)`
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
`,as=d(p)`
  min-height: 0;
  overflow: auto;
  flex: 1;
  width: 100%;
`,ls=d(p)`
  margin: 0 0 16px 36px;
`;function cs(t){return t.charAt(0).toUpperCase()+t.slice(1).toLowerCase()}const ds=({node:t})=>{var n,r,o,i,a,l,s,c,x;return e.jsxs(Ce,{children:[e.jsx(C,{className:"empty"}),e.jsx(C,{children:(n=t==null?void 0:t.properties)!=null&&n.date_added_to_graph?Ne((r=t==null?void 0:t.properties)==null?void 0:r.date_added_to_graph):Ne((o=t==null?void 0:t.properties)==null?void 0:o.date)}),e.jsx(C,{children:t==null?void 0:t.node_type}),e.jsx(C,{children:(t==null?void 0:t.node_type)==="Tweet"?e.jsx(ot,{href:`${Ye}${(i=t==null?void 0:t.properties)==null?void 0:i.tweet_id}${Ye.includes("?")?"&":"?"}open=system`,target:"_blank",children:(a=t==null?void 0:t.properties)==null?void 0:a.tweet_id}):e.jsx(ot,{href:`${(l=t==null?void 0:t.properties)==null?void 0:l.source_link}${((s=t==null?void 0:t.properties)==null?void 0:s.source_link).includes("?")?"&":"?"}open=system`,target:"_blank",children:(c=t==null?void 0:t.properties)==null?void 0:c.source_link})}),e.jsx(C,{children:(x=t==null?void 0:t.properties)!=null&&x.status?cs(t.properties.status):"Processing"})]})},ot=d.a`
  color: ${u.white};
  text-decoration: underline;
  &:visited {
    color: ${u.white};
  }
`,ps=m.memo(ds),hs=({nodes:t})=>{const{open:n}=U("addContent"),r=async()=>{n()};return!t||(t==null?void 0:t.length)===0?e.jsx(e.Fragment,{children:e.jsxs(us,{children:[e.jsx(xs,{align:"center",direction:"row",justify:"space-between",children:e.jsx(S,{className:"subtitle",children:"Contribute to the graph by adding content."})}),e.jsx(p,{children:e.jsx(H,{color:"secondary",onClick:r,size:"medium",startIcon:e.jsx(Xn,{}),type:"submit",variant:"contained",children:"Add Content"})})]})}):e.jsxs(be,{component:"table",children:[e.jsx(ve,{children:e.jsxs(X,{component:"tr",children:[e.jsx(C,{className:"empty"}),e.jsx(C,{children:"Date"}),e.jsx(C,{children:"Type"}),e.jsx(C,{children:"Source"}),e.jsx(C,{children:"Status"})]})}),e.jsx("tbody",{children:t==null?void 0:t.map(o=>e.jsx(ps,{node:o},o==null?void 0:o.ref_id))})]})},us=Oe(p)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 100px auto;
  width: 100%;
`,xs=Oe(p)`
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
`,fs=()=>{const[t,n]=m.useState([]),[r,o]=m.useState(!0),[i,a]=m.useState(10),[l,s]=m.useState(!0),c={only_content:"true",sort_by:"date",limit:i.toString()},x=async()=>{o(!0);try{const h=await nn(c);n(h.nodes),o(!1)}catch(h){console.error("Error fetching data:",h),o(!1)}};m.useEffect(()=>{x()},[i]);const g=()=>{a(i+10),x()};return e.jsxs(ms,{direction:"column",justify:"flex-end",children:[e.jsx(we,{align:"center",direction:"row",justify:"space-between",children:e.jsx(S,{className:"title",children:"Content I've added to the graph"})}),e.jsxs(gs,{align:"center",justify:r?"center":"flex-start",children:[r?e.jsx(N,{color:u.white}):e.jsx(e.Fragment,{children:e.jsx(hs,{nodes:t})}),!r&&t.length>0&&(l?e.jsx(H,{onClick:g,size:"medium",children:"Load More"}):e.jsx(ys,{children:"No new nodes available"}))]})]})},ms=d(p)`
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
`,gs=d(p)`
  min-height: 0;
  overflow: auto;
  flex: 1;
  width: 100%;
`,ys=d.div`
  margin-top: 10px;
  color: ${u.GRAY3};
  font-family: Barlow;
  font-size: 14px;
`,js=[{label:St,component:fs},{label:Zn,component:qr},{label:wt,component:zr},{label:vt,component:ss}],bs=t=>{const{children:n,value:r,index:o,...i}=t;return r===o?e.jsx(_s,{"aria-labelledby":`simple-tab-${o}`,hidden:r!==o,id:`simple-tabpanel-${o}`,role:"tabpanel",...i,children:n}):null};function Cs(t){return{id:`simple-tab-${t}`,"aria-controls":`simple-tabpanel-${t}`}}const vs=()=>{const[t,n]=m.useState(0),[r]=le(s=>[s.isAdmin]),[o]=rn(s=>[s.queuedSourcesFeatureFlag]),i=on(),a=(s,c)=>{n(c)},l=js.filter(({label:s})=>s===vt?r:s===wt?r&&o:s===St?i:!0);return e.jsxs(Ts,{"data-testid":"sources-table",direction:"column",children:[e.jsx(ws,{"aria-label":"sources tabs",onChange:a,value:t,children:l.map((s,c)=>e.jsx(Ss,{color:u.white,disableRipple:!0,label:s.label,...Cs(c)},s.label))}),l.map((s,c)=>e.jsx(bs,{index:c,value:t,children:e.jsx(s.component,{})},s.label))]})},ws=d(er)`
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
`,_s=d(p)`
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
`,Ts=d(p)`
  min-height: 0;
  flex: 1;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 3px;
  }
`,fe={required:{message:"The field is required",value:!0}},ks=({initialValues:t})=>{const n=de({defaultValues:t,mode:"onSubmit"}),{isSubmitting:r}=n.formState,o=n.handleSubmit(async i=>{try{await sn(i)}catch(a){console.warn(a)}});return e.jsx(pe,{...n,children:e.jsx("form",{id:"add-node-form",onSubmit:o,children:e.jsxs(e.Fragment,{children:[e.jsxs(p,{children:[e.jsx(p,{pt:12,children:e.jsx(se,{id:"cy-about-title-id",label:"Graph Title",maxLength:50,name:"title",placeholder:"Type graph title here...",rules:{...fe}})}),e.jsx(p,{pt:12,children:e.jsx(se,{id:"cy-about-id",label:"Graph Description",maxLength:50,name:"description",placeholder:"Type graph description here...",rules:{...fe}})}),e.jsx(p,{pt:12,children:e.jsx(se,{id:"cy-about-mission_statement-id",label:"Mission Statement",maxLength:50,name:"mission_statement",placeholder:"Type mission statement here...",rules:{...fe}})}),e.jsx(p,{pt:12,children:e.jsx(se,{id:"cy-about-search_term-id",label:"Search Term",maxLength:50,name:"search_term",placeholder:"Type search term here...",rules:{...fe}})})]}),e.jsx(p,{pt:8,children:r?e.jsx(As,{children:e.jsx(N,{color:u.white,size:20})}):e.jsx($t,{disabled:r,id:"add-node-submit-cta",kind:"big",type:"submit",children:"Save changes"})})]})})})},As=d(p).attrs({align:"center",background:"primaryButton",borderRadius:8,justify:"center"})`
  padding: 16px 24px;
  opacity: 0.5;
`,Ls=({initialValues:t})=>e.jsxs(e.Fragment,{children:[t.title&&e.jsxs(p,{pt:12,children:[e.jsx(S,{kind:"regular",children:"Graph Title"}),e.jsx(p,{pt:12,children:e.jsx(S,{className:"value",kind:"medium",children:t.title})})]}),t.description&&e.jsxs(p,{pt:12,children:[e.jsx(S,{kind:"regular",children:"Graph Description"}),e.jsx(p,{pt:12,children:e.jsx(S,{className:"value",kind:"medium",children:t.description})})]}),t.mission_statement&&e.jsxs(p,{pt:12,children:[e.jsx(S,{kind:"regular",children:"Mission Statement"}),e.jsx(p,{pt:12,children:e.jsx(S,{className:"value",kind:"medium",children:t.mission_statement})})]})]}),$s=()=>{const[t]=le(r=>[r.isAdmin]),n=te(r=>r.appMetaData);return n?e.jsxs(Es,{align:"stretch",direction:"column",justify:"flex-end",children:[e.jsx(Ns,{align:"center",direction:"row",justify:"space-between",children:e.jsx(S,{className:"title",children:"About"})}),e.jsx(Is,{align:"stretch",justify:"flex-start",children:t?e.jsx(ks,{initialValues:n}):e.jsx(Ls,{initialValues:n})})]}):null},Es=d(p)`
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
`,Is=d(p)`
  min-height: 0;
  overflow: auto;
  flex: 1;
  width: 100%;
`,Ns=d(p)`
  margin-bottom: 16px;
  ${S} {
    margin-bottom: 0;
  }
`,Ot=async(t,n)=>{const r=n&&new URLSearchParams(n),o=r?`/sentiments?${r.toString()}`:"/sentiments";if(an)return await Ue.get(o);const i=await ln();try{return await Ue.get(o,{Authorization:i})}catch(a){if(a.status===402)return await cn(t),Ot(t,n);throw a}};var Ps=["type","layout","connectNulls","ref"];function J(t){"@babel/helpers - typeof";return J=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},J(t)}function Bs(t,n){if(t==null)return{};var r=Os(t,n),o,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(i=0;i<a.length;i++)o=a[i],!(n.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(t,o)&&(r[o]=t[o])}return r}function Os(t,n){if(t==null)return{};var r={},o=Object.keys(t),i,a;for(a=0;a<o.length;a++)i=o[a],!(n.indexOf(i)>=0)&&(r[i]=t[i]);return r}function ie(){return ie=Object.assign?Object.assign.bind():function(t){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o])}return t},ie.apply(this,arguments)}function st(t,n){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);n&&(o=o.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),r.push.apply(r,o)}return r}function z(t){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?st(Object(r),!0).forEach(function(o){W(t,o,r[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):st(Object(r)).forEach(function(o){Object.defineProperty(t,o,Object.getOwnPropertyDescriptor(r,o))})}return t}function K(t){return Rs(t)||Ds(t)||zs(t)||Ms()}function Ms(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function zs(t,n){if(t){if(typeof t=="string")return Pe(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);if(r==="Object"&&t.constructor&&(r=t.constructor.name),r==="Map"||r==="Set")return Array.from(t);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return Pe(t,n)}}function Ds(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Rs(t){if(Array.isArray(t))return Pe(t)}function Pe(t,n){(n==null||n>t.length)&&(n=t.length);for(var r=0,o=new Array(n);r<n;r++)o[r]=t[r];return o}function Fs(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function it(t,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,Mt(o.key),o)}}function Ws(t,n,r){return n&&it(t.prototype,n),r&&it(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}function Vs(t,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),n&&Be(t,n)}function Be(t,n){return Be=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(o,i){return o.__proto__=i,o},Be(t,n)}function Us(t){var n=Hs();return function(){var o=ye(t),i;if(n){var a=ye(this).constructor;i=Reflect.construct(o,arguments,a)}else i=o.apply(this,arguments);return Gs(this,i)}}function Gs(t,n){if(n&&(J(n)==="object"||typeof n=="function"))return n;if(n!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return V(t)}function V(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function Hs(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function ye(t){return ye=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(r){return r.__proto__||Object.getPrototypeOf(r)},ye(t)}function W(t,n,r){return n=Mt(n),n in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r,t}function Mt(t){var n=Ys(t,"string");return J(n)==="symbol"?n:String(n)}function Ys(t,n){if(J(t)!=="object"||t===null)return t;var r=t[Symbol.toPrimitive];if(r!==void 0){var o=r.call(t,n||"default");if(J(o)!=="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(t)}var he=function(t){Vs(r,t);var n=Us(r);function r(){var o;Fs(this,r);for(var i=arguments.length,a=new Array(i),l=0;l<i;l++)a[l]=arguments[l];return o=n.call.apply(n,[this].concat(a)),W(V(o),"state",{isAnimationFinished:!0,totalLength:0}),W(V(o),"generateSimpleStrokeDasharray",function(s,c){return"".concat(c,"px ").concat(s-c,"px")}),W(V(o),"getStrokeDasharray",function(s,c,x){var g=x.reduce(function(L,E){return L+E});if(!g)return o.generateSimpleStrokeDasharray(c,s);for(var h=Math.floor(s/g),f=s%g,b=c-s,y=[],j=0,v=0;j<x.length;v+=x[j],++j)if(v+x[j]>f){y=[].concat(K(x.slice(0,j)),[f-v]);break}var w=y.length%2===0?[0,b]:[b];return[].concat(K(r.repeat(x,h)),K(y),w).map(function(L){return"".concat(L,"px")}).join(", ")}),W(V(o),"id",wn("recharts-line-")),W(V(o),"pathRef",function(s){o.mainCurve=s}),W(V(o),"handleAnimationEnd",function(){o.setState({isAnimationFinished:!0}),o.props.onAnimationEnd&&o.props.onAnimationEnd()}),W(V(o),"handleAnimationStart",function(){o.setState({isAnimationFinished:!1}),o.props.onAnimationStart&&o.props.onAnimationStart()}),o}return Ws(r,[{key:"componentDidMount",value:function(){if(this.props.isAnimationActive){var i=this.getTotalLength();this.setState({totalLength:i})}}},{key:"componentDidUpdate",value:function(){if(this.props.isAnimationActive){var i=this.getTotalLength();i!==this.state.totalLength&&this.setState({totalLength:i})}}},{key:"getTotalLength",value:function(){var i=this.mainCurve;try{return i&&i.getTotalLength&&i.getTotalLength()||0}catch{return 0}}},{key:"renderErrorBar",value:function(i,a){if(this.props.isAnimationActive&&!this.state.isAnimationFinished)return null;var l=this.props,s=l.points,c=l.xAxis,x=l.yAxis,g=l.layout,h=l.children,f=Sn(h,_n);if(!f)return null;var b=function(v,w){return{x:v.x,y:v.y,value:v.value,errorVal:ft(v.payload,w)}},y={clipPath:i?"url(#clipPath-".concat(a,")"):null};return I.createElement(Se,y,f.map(function(j){return I.cloneElement(j,{key:"bar-".concat(j.props.dataKey),data:s,xAxis:c,yAxis:x,layout:g,dataPointFormatter:b})}))}},{key:"renderDots",value:function(i,a,l){var s=this.props.isAnimationActive;if(s&&!this.state.isAnimationFinished)return null;var c=this.props,x=c.dot,g=c.points,h=c.dataKey,f=xe(this.props),b=xe(x,!0),y=g.map(function(v,w){var L=z(z(z({key:"dot-".concat(w),r:3},f),b),{},{value:v.value,dataKey:h,cx:v.x,cy:v.y,index:w,payload:v.payload});return r.renderDotItem(x,L)}),j={clipPath:i?"url(#clipPath-".concat(a?"":"dots-").concat(l,")"):null};return I.createElement(Se,ie({className:"recharts-line-dots",key:"dots"},j),y)}},{key:"renderCurveStatically",value:function(i,a,l,s){var c=this.props,x=c.type,g=c.layout,h=c.connectNulls;c.ref;var f=Bs(c,Ps),b=z(z(z({},xe(f,!0)),{},{fill:"none",className:"recharts-line-curve",clipPath:a?"url(#clipPath-".concat(l,")"):null,points:i},s),{},{type:x,layout:g,connectNulls:h});return I.createElement(Tn,ie({},b,{pathRef:this.pathRef}))}},{key:"renderCurveWithAnimation",value:function(i,a){var l=this,s=this.props,c=s.points,x=s.strokeDasharray,g=s.isAnimationActive,h=s.animationBegin,f=s.animationDuration,b=s.animationEasing,y=s.animationId,j=s.animateNewValues,v=s.width,w=s.height,L=this.state,E=L.prevPoints,P=L.totalLength;return I.createElement(kn,{begin:h,duration:f,isActive:g,easing:b,from:{t:0},to:{t:1},key:"line-".concat(y),onAnimationEnd:this.handleAnimationEnd,onAnimationStart:this.handleAnimationStart},function(B){var _=B.t;if(E){var A=E.length/c.length,T=c.map(function($,ue){var Y=Math.floor(ue*A);if(E[Y]){var ne=E[Y],Z=re(ne.x,$.x),zt=re(ne.y,$.y);return z(z({},$),{},{x:Z(_),y:zt(_)})}if(j){var Dt=re(v*2,$.x),Rt=re(w/2,$.y);return z(z({},$),{},{x:Dt(_),y:Rt(_)})}return z(z({},$),{},{x:$.x,y:$.y})});return l.renderCurveStatically(T,i,a)}var M=re(0,P),O=M(_),k;if(x){var F="".concat(x).split(/[,\s]+/gim).map(function($){return parseFloat($)});k=l.getStrokeDasharray(O,P,F)}else k=l.generateSimpleStrokeDasharray(P,O);return l.renderCurveStatically(c,i,a,{strokeDasharray:k})})}},{key:"renderCurve",value:function(i,a){var l=this.props,s=l.points,c=l.isAnimationActive,x=this.state,g=x.prevPoints,h=x.totalLength;return c&&s&&s.length&&(!g&&h>0||!An(g,s))?this.renderCurveWithAnimation(i,a):this.renderCurveStatically(s,i,a)}},{key:"render",value:function(){var i,a=this.props,l=a.hide,s=a.dot,c=a.points,x=a.className,g=a.xAxis,h=a.yAxis,f=a.top,b=a.left,y=a.width,j=a.height,v=a.isAnimationActive,w=a.id;if(l||!c||!c.length)return null;var L=this.state.isAnimationFinished,E=c.length===1,P=Ge("recharts-line",x),B=g&&g.allowDataOverflow,_=h&&h.allowDataOverflow,A=B||_,T=Ee(w)?this.id:w,M=(i=xe(s))!==null&&i!==void 0?i:{r:3,strokeWidth:2},O=M.r,k=O===void 0?3:O,F=M.strokeWidth,$=F===void 0?2:F,ue=Ln(s)?s:{},Y=ue.clipDot,ne=Y===void 0?!0:Y,Z=k*2+$;return I.createElement(Se,{className:P},B||_?I.createElement("defs",null,I.createElement("clipPath",{id:"clipPath-".concat(T)},I.createElement("rect",{x:B?b:b-y/2,y:_?f:f-j/2,width:B?y:y*2,height:_?j:j*2})),!ne&&I.createElement("clipPath",{id:"clipPath-dots-".concat(T)},I.createElement("rect",{x:b-Z/2,y:f-Z/2,width:y+Z,height:j+Z}))):null,!E&&this.renderCurve(A,T),this.renderErrorBar(A,T),(E||s)&&this.renderDots(A,ne,T),(!v||L)&&$n.renderCallByParent(this.props,c))}}],[{key:"getDerivedStateFromProps",value:function(i,a){return i.animationId!==a.prevAnimationId?{prevAnimationId:i.animationId,curPoints:i.points,prevPoints:a.curPoints}:i.points!==a.curPoints?{curPoints:i.points}:null}},{key:"repeat",value:function(i,a){for(var l=i.length%2!==0?[].concat(K(i),[0]):i,s=[],c=0;c<a;++c)s=[].concat(K(s),K(l));return s}},{key:"renderDotItem",value:function(i,a){var l;if(I.isValidElement(i))l=I.cloneElement(i,a);else if(dn(i))l=i(a);else{var s=Ge("recharts-line-dot",i?i.className:"");l=I.createElement(xt,ie({},a,{className:s}))}return l}}]),r}(m.PureComponent);W(he,"displayName","Line");W(he,"defaultProps",{xAxisId:0,yAxisId:0,connectNulls:!1,activeDot:!0,dot:!0,legendType:"line",stroke:"#3182bd",strokeWidth:1,fill:"#fff",points:[],isAnimationActive:!vn.isSsr,animateNewValues:!0,animationBegin:0,animationDuration:1500,animationEasing:"ease",hide:!1,label:!1});W(he,"getComposedData",function(t){var n=t.props,r=t.xAxis,o=t.yAxis,i=t.xAxisTicks,a=t.yAxisTicks,l=t.dataKey,s=t.bandSize,c=t.displayedData,x=t.offset,g=n.layout,h=c.map(function(f,b){var y=ft(f,l);return g==="horizontal"?{x:He({axis:r,ticks:i,bandSize:s,entry:f,index:b}),y:Ee(y)?null:o.scale(y),value:y,payload:f}:{x:Ee(y)?null:r.scale(y),y:He({axis:o,ticks:a,bandSize:s,entry:f,index:b}),value:y,payload:f}});return z({points:h,layout:g},x)});var Zs=En({chartName:"LineChart",GraphicalChild:he,axisComponents:[{axisType:"xAxis",AxisComp:mt},{axisType:"yAxis",AxisComp:gt}],formatAxisMap:In});const Ks=({cx:t,cy:n})=>e.jsx(xt,{cx:t,cy:n,fill:u.blueTextAccent,r:2}),qs=({data:t,width:n=500,height:r=300})=>e.jsx(e.Fragment,{children:(t==null?void 0:t.length)&&e.jsxs(Zs,{data:t,height:r,id:"cy-sentiment-chart",margin:{bottom:5,left:-20,right:30,top:5},width:n,children:[e.jsx(Nn,{stroke:u.lightBlue300,strokeDasharray:"5 5"}),e.jsx(mt,{dataKey:"date",interval:Math.floor(t.length/3),stroke:u.blueTextAccent}),e.jsx(gt,{domain:[0,10],stroke:u.blueTextAccent}),e.jsx(Pn,{}),e.jsx(he,{dataKey:"score",dot:e.jsx(Ks,{}),stroke:"#8884d8",type:"monotone"})]})}),Xs=()=>{const[t,n]=m.useState(void 0),[r]=le(l=>[l.setBudget]),[o,i]=m.useState(!1),a=async()=>{i(!0),Ot(r).then(async l=>{n(l==null?void 0:l.data.filter(s=>s.date).map(s=>({date:pn.unix(Number(String(s.date).split(".")[0])).format("MM/DD/YY"),score:s.sentiment_score}))),await pt(r)}).catch().finally(()=>{i(!1)})};return e.jsxs(Qs,{align:"flex-start",direction:"column",id:"cy-sentiment-chart-wrapper",justify:"flex-end",children:[e.jsx(S,{className:"title",children:"Sentiment chart"}),o&&e.jsx(Jn,{alignItems:"center",component:"div",flexGrow:1,p:4,spacing:2,width:"100%",children:e.jsx(Bn,{color:u.white})}),!(t!=null&&t.length)&&e.jsx(Js,{className:"button",id:"cy-get-sentiments-btn",onClick:a,children:"Get top 100 sentiments"}),e.jsx(qs,{data:t})]})},Qs=d(p)`
  border-radius: 8px;
  box-shadow: 0px 5px 6px rgb(0 0 0 / 50%);
  padding: 16px;

  .title {
    margin-bottom: 16px;
    font-size: 20px;
  }
`,Js=d($t)`
  height: 48px;
`,ei=600,ti={about:e.jsx($s,{}),sentiment:e.jsx(Xs,{}),sources:e.jsx(vs,{}),"":null},ni=()=>{const[t,n]=te(r=>[r.secondarySidebarActiveTab,r.setSecondarySidebarActiveTab]);return e.jsx(On,{direction:"left",in:!!t,mountOnEnter:!0,unmountOnExit:!0,children:e.jsxs(ri,{id:"secondary-sidebar-wrapper",children:[e.jsx(oi,{id:"cy-close-secondary-sidebar",onClick:()=>n(""),children:e.jsx(yt,{})}),ti[t]]})})},ri=d(p)(({theme:t})=>({background:u.BG1,height:"100vh",padding:"16px 20px",width:"100%",zIndex:30,display:"flex",[t.breakpoints.up("sm")]:{width:ei}})),oi=d(p).attrs({align:"center",justify:"center",p:5})`
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
`,si=d(mn)`
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
`,ii=d(p)`
  height: 100%;
  width: 100%;
  background-color: ${u.black};
`,ai=d(p)`
  position: absolute;
  bottom: 8px;
  left: 8px;
  color: ${u.white};
  font-size: 12px;
  opacity: 0.5;
`,li=m.lazy(()=>D(()=>import("./index-a9e9821f.js"),["assets/index-a9e9821f.js","assets/index-7f808302.js","assets/index-a2878e02.css","assets/AddContentIcon-af951765.js","assets/SourcesTableIcon-e469750f.js","assets/react-toastify.esm-4df52b04.js","assets/react-toastify-b60658ac.css","assets/SettingsIcon-b222cea9.js"]).then(({MainToolbar:t})=>({default:t}))),ci=m.lazy(()=>D(()=>import("./index-53c1ca42.js"),["assets/index-53c1ca42.js","assets/index-7f808302.js","assets/index-a2878e02.css","assets/constant-49cb27d3.js","assets/EditIcon-b7957668.js","assets/react-toastify.esm-4df52b04.js","assets/react-toastify-b60658ac.css","assets/constants-a5212b22.js","assets/generateCategoricalChart-d8676aa0.js","assets/Popover-0f5d6cad.js","assets/useSlotProps-e49bab01.js","assets/InfoIcon-09d33252.js","assets/index-6177de7e.js","assets/index.esm-af752bfc.js","assets/PlusIcon-1b381e13.js","assets/NoFilterResultIcon-83775d26.js","assets/index-3882507e.js","assets/index-a9001226.js","assets/index-2d8fa5f2.js","assets/index-9ec5ecf7.js","assets/index-9cab4a58.js","assets/Popper-5dc77ce4.js","assets/CheckIcon-47aae061.js"]).then(({Universe:t})=>({default:t}))),di=m.lazy(()=>D(()=>import("./index-390db3a1.js"),["assets/index-390db3a1.js","assets/index-7f808302.js","assets/index-a2878e02.css","assets/react-toastify.esm-4df52b04.js","assets/react-toastify-b60658ac.css","assets/CheckIcon-47aae061.js","assets/ChevronDownIcon-aee16b98.js","assets/ChevronUpIcon-9213cfb8.js","assets/Popover-0f5d6cad.js","assets/useSlotProps-e49bab01.js","assets/ChevronRightIcon-f081d1dd.js","assets/index-6177de7e.js","assets/generateCategoricalChart-d8676aa0.js","assets/InfoIcon-09d33252.js","assets/index.esm-af752bfc.js","assets/ChevronRightIcon-6125620a.css","assets/index-d0526129.js","assets/Skeleton-7867c13b.js","assets/PlusIcon-1b381e13.js","assets/index-9ec5ecf7.js"]).then(({SideBar:t})=>({default:t}))),pi=()=>{const[t,n]=le(A=>[A.setBudget,A.setNodeCount]),[r,o]=m.useState(!1),{setSidebarOpen:i,currentSearch:a,setCurrentSearch:l,setRelevanceSelected:s,setTranscriptOpen:c}=te(A=>A),x=Mn(A=>A.setTeachMeAnswer),{data:g,setData:h,fetchData:f,graphStyle:b,setSelectedNode:y,setCategoryFilter:j,setAbortRequests:v}=ee(A=>A),w=gn(),L=de({mode:"onChange"}),E=L.handleSubmit(({search:A})=>{c(!1),y(null),s(!1),l(A),x(""),j(null)}),P=m.useCallback(async()=>{await f(t,v,{...a?{word:a}:{}}),i(!0),a?await pt(t):y(null)},[f,t,a,i,y,v]);m.useEffect(()=>{P()},[a,P]);const B=()=>{if(g){o(!0);const A=un(b,g.nodes);h(A),o(!1)}};m.useEffect(()=>{B()},[b]);const _=m.useCallback(()=>{n("INCREMENT")},[n]);return m.useEffect(()=>(w&&(w.connect(),w.on("connect_error",A=>{console.error("Socket connection error:",A)}),w.on("newnode",_)),()=>{w&&w.off()}),[w,_]),e.jsxs(e.Fragment,{children:[e.jsx(yn,{}),e.jsx(Er,{}),e.jsx(jn,{hidden:!hn}),e.jsx(m.Suspense,{fallback:e.jsx("div",{children:"Loading..."}),children:e.jsxs(ii,{direction:"row",children:[e.jsx(zn,{children:e.jsxs(pe,{...L,children:[e.jsx(li,{}),e.jsx(di,{onSubmit:E}),e.jsx(ci,{}),r&&e.jsx(fr,{fullSize:!1}),e.jsx(ur,{}),e.jsx(ni,{}),e.jsx(Ar,{}),e.jsxs(ai,{children:["v",bn]}),e.jsx(ht,{})]})}),e.jsx(kr,{}),e.jsx(si,{}),e.jsx(Br,{})]})})]})},Li=Object.freeze(Object.defineProperty({__proto__:null,App:pi},Symbol.toStringTag,{value:"Module"}));export{Mo as A,Nt as F,et as M,Pt as N,ur as O,fr as P,vs as S,Bt as a,It as b,ki as c,Ti as d,Li as e,_i as i,Ai as n};
