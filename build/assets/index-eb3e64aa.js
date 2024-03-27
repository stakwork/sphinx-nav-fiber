import{c as dt,_ as V,r as h,u as Ot,a as pt,j as e,F as u,T as k,s as m,b as d,d as R,m as Rt,e as Ft,f as Ue,Y as Ge,R as He,g as de,l as ut,h as Vt,i as B,k as Wt,n as Ut,o as Gt,P as Ht,p as Yt,q as ht,t as Zt}from"./index-46d141aa.js";import{g as xt,a as ft,s as Re,c as Kt,b as mt,u as qt,d as Qt,A as Xt,e as oe,f as gt,h as se,i as G,C as P,S as Jt,j as er,B as Q,k as tr,l as yt,m as jt,I as q,p as rr,n as te,o as be,q as bt,r as nr,t as pe,F as ue,v as or,w as Ct,x as sr,y as ir,z as ar,D as lr,Q as cr,E as dr,G as pr,L as ur,H as hr,J as xr}from"./react-toastify.esm-b72bdd97.js";import{f as Ye,G as fr,u as mr,c as Ze,D as wt,a as gr,E as yr,L as ke,b as me,C as jr,A as br,i as ie,d as Cr,e as Ie,g as wr,h as vr,j as vt,k as Ke,l as Sr,X as St,Y as _t,m as _r,n as Tr,T as kr,S as Ar,o as $r,p as Er}from"./generateCategoricalChart-922aa0c9.js";import{M as Lr,a as Nr,b as Pr,c as Br,d as Tt,e as Ir}from"./index.esm-9dacb6fc.js";import{T as Dr,a as he,b as Mr,F as De,M as Ce,C as kt,N as zr,c as Or,D as At,d as Rr}from"./ChevronUpIcon-97a50754.js";import{s as re,T as $t,A as Fe,u as M,I as Fr,E as Vr,D as Wr,a as qe,b as Et,Q as Lt,V as Nt,S as Ur}from"./index-26cd0cfc.js";import{P as we,I as ve,a as Ve,F as Gr}from"./Popover-38a90144.js";import{B as Hr,T as le}from"./index-029e5c8b.js";import{u as U}from"./index-d3539116.js";import{B as We}from"./index-46fe460b.js";import{u as Yr,P as Pt}from"./Popper-dc52e1c1.js";import{C as Bt}from"./CheckIcon-6373215b.js";import{C as Zr}from"./ChevronDownIcon-fb872096.js";import{e as Kr,S as qr}from"./Stack-ee78f086.js";import{P as Qr}from"./PlusIcon-c1c19cae.js";import{e as Qe,u as Xr}from"./useSlotProps-ef777a65.js";import{T as Jr,a as en,B as It}from"./index-8235a399.js";function tn(t){return xt("MuiTypography",t)}ft("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);const rn=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],nn=t=>{const{align:r,gutterBottom:o,noWrap:s,paragraph:i,variant:l,classes:a}=t,n={root:["root",l,t.align!=="inherit"&&`align${dt(r)}`,o&&"gutterBottom",s&&"noWrap",i&&"paragraph"]};return mt(n,tn,a)},on=Re("span",{name:"MuiTypography",slot:"Root",overridesResolver:(t,r)=>{const{ownerState:o}=t;return[r.root,o.variant&&r[o.variant],o.align!=="inherit"&&r[`align${dt(o.align)}`],o.noWrap&&r.noWrap,o.gutterBottom&&r.gutterBottom,o.paragraph&&r.paragraph]}})(({theme:t,ownerState:r})=>V({margin:0},r.variant==="inherit"&&{font:"inherit"},r.variant!=="inherit"&&t.typography[r.variant],r.align!=="inherit"&&{textAlign:r.align},r.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},r.gutterBottom&&{marginBottom:"0.35em"},r.paragraph&&{marginBottom:16})),Xe={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},sn={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},an=t=>sn[t]||t,ln=h.forwardRef(function(r,o){const s=Ot({props:r,name:"MuiTypography"}),i=an(s.color),l=Kr(V({},s,{color:i})),{align:a="inherit",className:n,component:c,gutterBottom:p=!1,noWrap:g=!1,paragraph:x=!1,variant:y="body1",variantMapping:j=Xe}=l,b=pt(l,rn),f=V({},l,{align:a,color:i,className:n,component:c,gutterBottom:p,noWrap:g,paragraph:x,variant:y,variantMapping:j}),C=c||(x?"p":j[y]||Xe[y])||"span",w=nn(f);return e.jsx(on,V({as:C,ref:o,ownerState:f,className:Kt(w.root,n)},b))}),Je=ln;function cn(t){return xt("MuiButton",t)}ft("MuiButton",["root","active","disabled","focusVisible"]);function dn(t={}){const{disabled:r=!1,focusableWhenDisabled:o,href:s,rootRef:i,tabIndex:l,to:a,type:n}=t,c=h.useRef(),[p,g]=h.useState(!1),{isFocusVisibleRef:x,onFocus:y,onBlur:j,ref:b}=qt(),[f,C]=h.useState(!1);r&&!o&&f&&C(!1),h.useEffect(()=>{x.current=f},[f,x]);const[w,A]=h.useState(""),L=S=>v=>{var $;f&&v.preventDefault(),($=S.onMouseLeave)==null||$.call(S,v)},T=S=>v=>{var $;j(v),x.current===!1&&C(!1),($=S.onBlur)==null||$.call(S,v)},I=S=>v=>{var $;if(c.current||(c.current=v.currentTarget),y(v),x.current===!0){var O;C(!0),(O=S.onFocusVisible)==null||O.call(S,v)}($=S.onFocus)==null||$.call(S,v)},E=()=>{const S=c.current;return w==="BUTTON"||w==="INPUT"&&["button","submit","reset"].includes(S==null?void 0:S.type)||w==="A"&&(S==null?void 0:S.href)},H=S=>v=>{if(!r){var $;($=S.onClick)==null||$.call(S,v)}},F=S=>v=>{var $;r||(g(!0),document.addEventListener("mouseup",()=>{g(!1)},{once:!0})),($=S.onMouseDown)==null||$.call(S,v)},X=S=>v=>{var $;if(($=S.onKeyDown)==null||$.call(S,v),!v.defaultMuiPrevented&&(v.target===v.currentTarget&&!E()&&v.key===" "&&v.preventDefault(),v.target===v.currentTarget&&v.key===" "&&!r&&g(!0),v.target===v.currentTarget&&!E()&&v.key==="Enter"&&!r)){var O;(O=S.onClick)==null||O.call(S,v),v.preventDefault()}},Y=S=>v=>{var $;if(v.target===v.currentTarget&&g(!1),($=S.onKeyUp)==null||$.call(S,v),v.target===v.currentTarget&&!E()&&!r&&v.key===" "&&!v.defaultMuiPrevented){var O;(O=S.onClick)==null||O.call(S,v)}},Z=h.useCallback(S=>{var v;A((v=S==null?void 0:S.tagName)!=null?v:"")},[]),K=Qt(Z,i,b,c),N={};return l!==void 0&&(N.tabIndex=l),w==="BUTTON"?(N.type=n??"button",o?N["aria-disabled"]=r:N.disabled=r):w!==""&&(!s&&!a&&(N.role="button",N.tabIndex=l??0),r&&(N["aria-disabled"]=r,N.tabIndex=o?l??0:-1)),{getRootProps:(S={})=>{const v=V({},Qe(t),Qe(S)),$=V({type:n},v,N,S,{onBlur:T(v),onClick:H(v),onFocus:I(v),onKeyDown:X(v),onKeyUp:Y(v),onMouseDown:F(v),onMouseLeave:L(v),ref:K});return delete $.onFocusVisible,$},focusVisible:f,setFocusVisible:C,active:p,rootRef:K}}const pn=["action","children","disabled","focusableWhenDisabled","onFocusVisible","slotProps","slots"],un=t=>{const{active:r,disabled:o,focusVisible:s}=t;return mt({root:["root",o&&"disabled",s&&"focusVisible",r&&"active"]},Yr(cn))},hn=h.forwardRef(function(r,o){var s;const{action:i,children:l,focusableWhenDisabled:a=!1,slotProps:n={},slots:c={}}=r,p=pt(r,pn),g=h.useRef(),{active:x,focusVisible:y,setFocusVisible:j,getRootProps:b}=dn(V({},r,{focusableWhenDisabled:a}));h.useImperativeHandle(i,()=>({focusVisible:()=>{j(!0),g.current.focus()}}),[j]);const f=V({},r,{active:x,focusableWhenDisabled:a,focusVisible:y}),C=un(f),w=p.href||p.to?"a":"button",A=(s=c.root)!=null?s:w,L=Xr({elementType:A,getSlotProps:b,externalForwardedProps:p,externalSlotProps:n.root,additionalProps:{ref:o},ownerState:f,className:C.root});return e.jsx(A,V({},L,{children:l}))});function Me(t){const r=new Date(Number(t)*1e3),o=r.getFullYear(),s=(1+r.getMonth()).toString().padStart(2,"0");return`${r.getDate().toString().padStart(2,"0")}/${s}/${o}`}const xn=({twitterHandle:t})=>e.jsx(e.Fragment,{children:e.jsx(u,{direction:"row",children:e.jsx(u,{align:"flex-start",pb:12,children:e.jsxs(k,{children:["Tweet by @",t]})})})}),fn=m(u)(({theme:t})=>({position:"absolute",top:"65px",right:"55px",width:"300px",pointerEvents:"none",background:d.dashboardHeader,boxShadow:"0px 1px 6px rgba(0, 0, 0, 0.1)",color:d.primaryText1,zIndex:100,transition:"opacity 0.6s",padding:t.spacing(2,3),[t.breakpoints.down("sm")]:{padding:t.spacing(1,1.5)}})),mn=m(u)`
  width: 22.5%;
`,gn=({node:t})=>{if(!t)return null;const{node_type:r,show_title:o,episode_title:s,description:i,label:l,text:a,type:n,twitter_handle:c}=t,p=t.guests;let g=!1,x=!1;p&&(p.length&&p[0]!==null&&(g=!0),typeof p[0]=="object"&&(x=!0));let y=t.image_url;if(n==="twitter_space"&&(y="twitter_placeholder.png"),y==null)switch(r){case"guest":y="person_placeholder2.png";break;default:y="noimage.jpeg"}return r==="topic"?null:e.jsx(fn,{borderRadius:8,px:24,py:16,children:r==="tweet"?e.jsx(xn,{twitterHandle:c}):e.jsxs(e.Fragment,{children:[e.jsxs(u,{direction:"row",children:[e.jsx(mn,{}),e.jsx(u,{align:"flex-start",pb:12,children:e.jsx(k,{children:r==null?void 0:r.toUpperCase()})})]}),e.jsxs(u,{direction:"row",children:[e.jsx(u,{pr:12,children:e.jsx(Xt,{src:y,type:"person"})}),e.jsxs("div",{children:[n==="guest"?e.jsxs(u,{direction:"column",children:[e.jsx(k,{children:l}),a&&e.jsx(u,{pt:4,children:e.jsxs(k,{color:"primaryText1",kind:"tiny",children:["@",a]})})]}):e.jsx(k,{color:"primaryText1",kind:"tiny",children:o}),e.jsxs(u,{pt:4,children:[r==="clip"||r==="episode"&&e.jsx(k,{color:"primaryText1",children:"Episode"}),r==="clip"?e.jsx(k,{as:"div",kind:"regularBold",children:Ye(i)}):e.jsx(k,{color:"primaryText1",kind:"tiny",children:s})]}),e.jsxs(u,{pt:12,children:[r==="clip"&&e.jsx(k,{color:"primaryText1",children:"Episode"}),e.jsx(k,{color:"primaryText1",kind:"tiny",children:r==="clip"?s:Ye(i)})]}),g&&e.jsxs(u,{pt:12,children:[e.jsx(k,{color:"primaryText1",children:"People"}),e.jsx(u,{pt:4,children:e.jsx(k,{color:"primaryText1",kind:"tiny",children:x?p.map(j=>j.name?j.name:`@${j.twitter_handle}`).join(", "):p==null?void 0:p.join(", ")})})]})]})]})]})})},yn=()=>{const[t]=oe(r=>[r.hoveredNode]);return e.jsxs(jn,{children:[t&&e.jsx("div",{id:"tooltip-portal",children:e.jsx(gn,{node:t})}),e.jsx(gt,{})]})},jn=m("div")(({theme:t})=>({position:"absolute",zIndex:1,top:0,left:0,userSelect:"none",pointerEvents:"none",display:"flex",justifyContent:"flex-end",alignItems:"flex-start",height:"100%",width:"100%",padding:"16px",[t.breakpoints.down("sm")]:{top:50}})),bn=({fullSize:t=!0})=>{const r=se(o=>o.sidebarIsOpen);return e.jsx(Cn,{align:"center",className:G({"sidebar-is-open":r&&!t}),justify:"center",children:e.jsx(P,{color:d.SECONDARY_BLUE,size:64})})},Cn=m(u)`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  background-color: ${d.black};
  z-index: 1;
`,wn=h.lazy(()=>R(()=>import("./index-012cec15.js"),["assets/index-012cec15.js","assets/index-46d141aa.js","assets/index-3f17fe3b.css","assets/index-46fe460b.js","assets/index-d3539116.js","assets/react-toastify.esm-b72bdd97.js","assets/react-toastify-b60658ac.css","assets/index-8235a399.js","assets/useSlotProps-ef777a65.js","assets/index-029e5c8b.js","assets/index.esm-9dacb6fc.js","assets/InfoIcon-b93d2538.js","assets/index-2c2a6194.js","assets/index-3c8a9382.js","assets/Popover-38a90144.js","assets/Select-f70a3977.js","assets/Stack-ee78f086.js","assets/Popper-dc52e1c1.js","assets/toastMessage-ac4ca044.js","assets/constants-cde8ebc3.js","assets/DeleteIcon-69216d4c.js","assets/PlusIcon-c1c19cae.js","assets/ChevronUpIcon-97a50754.js","assets/ChevronDownIcon-fb872096.js","assets/generateCategoricalChart-922aa0c9.js","assets/index-26cd0cfc.js","assets/CheckIcon-6373215b.js"]).then(({SettingsModal:t})=>({default:t}))),vn=h.lazy(()=>R(()=>import("./index-71f3c0f3.js"),["assets/index-71f3c0f3.js","assets/index-46d141aa.js","assets/index-3f17fe3b.css","assets/react-toastify.esm-b72bdd97.js","assets/react-toastify-b60658ac.css","assets/index-46fe460b.js","assets/index-d3539116.js","assets/index-55987d23.js","assets/index.esm-9dacb6fc.js","assets/CheckIcon-6373215b.js","assets/index-029e5c8b.js","assets/InfoIcon-b93d2538.js"]).then(({AddContentModal:t})=>({default:t}))),Sn=h.lazy(()=>R(()=>import("./index-5e68f169.js"),["assets/index-5e68f169.js","assets/index-46d141aa.js","assets/index-3f17fe3b.css","assets/react-toastify.esm-b72bdd97.js","assets/react-toastify-b60658ac.css","assets/index-46fe460b.js","assets/index-d3539116.js","assets/toastMessage-ac4ca044.js","assets/index.esm-9dacb6fc.js","assets/index-55987d23.js","assets/CheckIcon-6373215b.js","assets/index-029e5c8b.js","assets/InfoIcon-b93d2538.js","assets/index-2c2a6194.js","assets/index-3c8a9382.js","assets/Popover-38a90144.js","assets/useSlotProps-ef777a65.js","assets/Select-f70a3977.js","assets/Stack-ee78f086.js","assets/Popper-dc52e1c1.js","assets/constants-cde8ebc3.js"]).then(({AddItemModal:t})=>({default:t}))),_n=h.lazy(()=>R(()=>import("./index-64b77bcb.js"),["assets/index-64b77bcb.js","assets/index-46d141aa.js","assets/index-3f17fe3b.css","assets/index-46fe460b.js","assets/index-d3539116.js","assets/react-toastify.esm-b72bdd97.js","assets/react-toastify-b60658ac.css","assets/generateCategoricalChart-922aa0c9.js","assets/Popover-38a90144.js","assets/useSlotProps-ef777a65.js","assets/InfoIcon-b93d2538.js","assets/index.esm-9dacb6fc.js","assets/ChevronUpIcon-97a50754.js","assets/ChevronDownIcon-fb872096.js","assets/index-8235a399.js","assets/index-26cd0cfc.js","assets/index-029e5c8b.js","assets/Popper-dc52e1c1.js","assets/CheckIcon-6373215b.js","assets/Stack-ee78f086.js","assets/PlusIcon-c1c19cae.js"]).then(({SourcesTableModal:t})=>({default:t}))),Tn=h.lazy(()=>R(()=>import("./index-fd423ed2.js"),["assets/index-fd423ed2.js","assets/index-46d141aa.js","assets/index-3f17fe3b.css","assets/index-46fe460b.js","assets/index-d3539116.js","assets/react-toastify.esm-b72bdd97.js","assets/react-toastify-b60658ac.css","assets/index-26cd0cfc.js","assets/index-029e5c8b.js","assets/index.esm-9dacb6fc.js","assets/InfoIcon-b93d2538.js","assets/Skeleton-804a1f5f.js"]).then(({EditNodeNameModal:t})=>({default:t}))),kn=h.lazy(()=>R(()=>import("./index-b4193c99.js"),["assets/index-b4193c99.js","assets/index-46d141aa.js","assets/index-3f17fe3b.css","assets/index-46fe460b.js","assets/index-d3539116.js","assets/react-toastify.esm-b72bdd97.js","assets/react-toastify-b60658ac.css","assets/toastMessage-ac4ca044.js","assets/index.esm-9dacb6fc.js","assets/Skeleton-804a1f5f.js"]).then(({RemoveNodeModal:t})=>({default:t}))),An=h.lazy(()=>R(()=>import("./index-b2e107ab.js"),["assets/index-b2e107ab.js","assets/index-46d141aa.js","assets/index-3f17fe3b.css","assets/index-46fe460b.js","assets/index-d3539116.js","assets/react-toastify.esm-b72bdd97.js","assets/react-toastify-b60658ac.css","assets/toastMessage-ac4ca044.js","assets/index.esm-9dacb6fc.js","assets/index-2c2a6194.js","assets/index-3c8a9382.js","assets/Popover-38a90144.js","assets/useSlotProps-ef777a65.js","assets/Select-f70a3977.js","assets/Stack-ee78f086.js","assets/Popper-dc52e1c1.js","assets/constants-cde8ebc3.js","assets/index-26cd0cfc.js"]).then(({AddNodeEdgeModal:t})=>({default:t}))),$n=()=>e.jsxs(e.Fragment,{children:[e.jsx(Sn,{}),e.jsx(vn,{}),e.jsx(wn,{}),e.jsx(Tn,{}),e.jsx(kn,{}),e.jsx(_n,{}),e.jsx(An,{})]}),En=()=>{const t=se(r=>r.appMetaData);return e.jsxs(Ln,{children:[e.jsxs(Nn,{children:[e.jsx(e.Fragment,{children:t.title&&e.jsx(k,{className:"title",color:"white",children:t.title})}),e.jsx(k,{className:"subtitle",children:" Second Brain"})]}),e.jsx(Jt,{})]})},Ln=m(u).attrs({align:"center",direction:"row",grow:1,justify:"flex-start"})`
  height: 64px;
  position: absolute;
  top: 0px;
  left: 64px;
  right: 32px;
  transition: opacity 1s;
  z-index: 99;
  padding: 20px 23px;
`,Nn=m.div`
  ${Rt.smallOnly`
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
    color: ${d.GRAY6};
    font-family: Barlow;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0.22px;
  }
`,Pn=()=>{const[t,r]=h.useState(!0),o=er();h.useEffect(()=>{r(!0)},[o]);const s=()=>{r(!1)};return o&&t?e.jsxs(Bn,{align:"center",direction:"column",justify:"center",onClick:s,children:[e.jsx("img",{alt:"screen",src:"jamboard_kiosk.png"}),e.jsxs(u,{align:"center",direction:"column",justify:"center",children:[e.jsx(Ae,{children:"Second Brain is currently"}),e.jsx(Ae,{style:{fontWeight:600},children:"optimized for Desktop."}),e.jsx(Ae,{children:"Mobile support coming soon."})]}),e.jsx(Q,{color:"secondary",onClick:s,variant:"contained",children:"Got It"})]}):null},Bn=m(u)`
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.75);
  gap: 28px;
  z-index: 2000000000;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`,Ae=m(k)`
  color: #fff;
  text-align: center;
  font-family: Barlow;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  margin: 1px;
`,In={},Dn=h.createContext(In),Mn=()=>{const[t,r]=h.useState(!1),o=h.useMemo(()=>({isShow:t,setIsShow:r}),[t]);return e.jsx(Dn.Provider,{value:o})},_=m(Dr)`
  && {
    color: ${d.white};
    border: none;
    padding: 6px 27px 6px 0;
    color: ${d.GRAY3};
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
`,Se=m(he)`
  && {
    height: 48px;
    padding: 0 36px;
  }
  &:nth-child(odd) {
    background-color: ${d.BG3};
  }
`,_e=m(Mr)`
  && {
    border-bottom: 1px solid ${d.black};
  }

  ${_} {
    color: ${d.white};
    font-family: Barlow;
    font-size: 11px;
    font-style: normal;
    font-weight: 700;
    line-height: 18px; /* 163.636% */
    letter-spacing: 1.1px;
    text-transform: uppercase;
  }
`,ye=m(Q)`
  &.selected {
    background: ${d.white};
    color: ${d.BG1};
    pointer-events: none;
  }

  & + & {
    margin-left: 16px;
  }
`,Te=m(u)`
  margin-bottom: 16px;
  padding: 0 36px;
  ${k} {
    margin-bottom: 0;
  }
`,zn=({data:t})=>{const r=oe(a=>a.setQueuedSources),[o,s]=h.useState(""),i=async a=>{if(t!=null&&t.length)try{const n=await Ft.enable();await tr(a,n.pubkey),r(t.filter(c=>c.ref_id!==a))}catch(n){console.warn(n)}},l=async a=>{if(!(!a||!(t!=null&&t.length))){s(a);try{await yt(a),r(t==null?void 0:t.filter(n=>n.ref_id!==a))}catch(n){console.warn(n)}finally{s("")}}};return t!=null&&t.length?e.jsxs(Ce,{component:"table",children:[e.jsx(_e,{children:e.jsxs(he,{component:"tr",children:[e.jsx(_,{className:"empty"}),e.jsx(_,{children:"Type"}),e.jsx(_,{children:"Source"}),e.jsx(_,{}),e.jsx(_,{className:"empty"})]})}),(t==null?void 0:t.length)&&e.jsx("tbody",{children:t==null?void 0:t.map(a=>e.jsxs(Se,{children:[e.jsx(_,{className:"empty"}),e.jsx(_,{children:re[a.source_type]}),e.jsx(_,{width:"268px",children:a.source_type==="twitter_handle"?e.jsxs(tt,{href:`${$t}/${a.source}?open=system`,target:"_blank",children:["@",a.source]}):e.jsx(tt,{href:`${a.source}?open=system`,target:"_blank",children:a.source})}),e.jsx(_,{className:"cell-center",children:e.jsxs(u,{direction:"row",justify:"space-between",children:[e.jsx("div",{className:"approve-wrapper",children:e.jsx(et,{className:"centered",onClick:()=>i(a.ref_id),children:e.jsx(Lr,{color:d.primaryGreen,fontSize:24})})}),e.jsx("div",{className:"delete-wrapper",children:o===a.ref_id?e.jsx(P,{color:d.white,size:16}):e.jsx(kt,{message:"Are you sure ?",onConfirm:()=>l(a.ref_id),children:e.jsx(et,{className:"centered",children:e.jsx(Nr,{color:d.primaryRed,fontSize:24})})})})]})}),e.jsx(_,{className:"empty"})]},a.source))})]}):e.jsxs(u,{children:[e.jsx(k,{children:"There is not any results for selected filters"}),e.jsx(De,{})]})},et=m(u)`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  cursor: pointer;
  background: transparent;
  color: ${d.lightBlue500};
  &.centered {
    margin: 0 auto;
  }

  & + & {
    margin-left: 4px;
  }
`,tt=m.a`
  color: ${d.white};
  text-decoration: underline;
  &:visited {
    color: ${d.white};
  }
  &:hover {
    cursor: pointer;
  }
`,On=()=>{const[t,r]=h.useState(!0),[o,s]=h.useState(""),[i,l]=oe(c=>[c.queuedSources,c.setQueuedSources]);h.useEffect(()=>{(async()=>{r(!0);try{const p=await jt({approved:"False"});l(p.data)}catch(p){console.warn(p)}finally{r(!1)}})()},[l]);const a=c=>{s(o===c||!c?"":c)},n=i==null?void 0:i.filter(c=>!o||c.source_type===o);return e.jsxs(Rn,{align:"stretch",direction:"column",justify:"flex-end",children:[e.jsxs(Te,{align:"flex-start",justify:"space-between",children:[e.jsx(k,{className:"title",children:"Queued Sources"}),e.jsx(k,{className:"subtitle",children:"This is a queue of pending sources waiting for approval or denial from graph users. If you think a source will provide good content for the graph, you can pay to approve it. Think of this as an investment: you pay to add it to the source table, and if the content is popular you will earn from it. If content is not relevant to the graph, you should deny it."})]}),e.jsxs(u,{className:"filters",direction:"row",pb:16,px:36,children:[e.jsx(ye,{className:G({selected:!o}),onClick:()=>a(""),size:"small",children:"All"}),Object.keys(re).map(c=>e.jsx(ye,{className:G({selected:c===o}),onClick:()=>a(c),size:"small",children:re[c]},c))]}),e.jsx(Fn,{align:"center",justify:t?"center":"flex-start",children:t?e.jsx(P,{color:d.white}):e.jsx(zn,{data:n})})]})},Rn=m(u)`
  flex: 1;

  .title {
    margin-bottom: 32px;
    font-size: 20px;
    color: ${d.white};
    font-family: Barlow;
    font-size: 22px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  .subtitle {
    color: ${d.GRAY3};
    font-family: Barlow;
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  & .filters {
    overflow-x: auto;
  }
`,Fn=m(u)`
  min-height: 0;
  overflow: auto;
  flex: 1;
  width: 100%;
`,Vn=({onSearch:t,placeholder:r,activeIcon:o,loadingIcon:s,defaultIcon:i,...l})=>{const[a,n]=h.useState(""),[c,p]=h.useState(!1),g=()=>{n(""),t(""),p(!1)},x=b=>{!b.target.value&&g(),n(b.target.value)},y=b=>{const{value:f}=b.currentTarget;n(f),!c&&(p(!0),setTimeout(()=>{t(f),f||g(),p(!1)},1e3),f||g())},j=()=>c?e.jsx(rt,{children:e.jsx($e,{type:"button",children:s})}):e.jsx(rt,{children:a?e.jsx($e,{onClick:g,type:"button",children:o}):e.jsx($e,{type:"button",children:i})});return e.jsxs(Wn,{children:[e.jsx(Un,{autoComplete:"off",autoCorrect:"off",inputProps:{"aria-label":"search sources"},onChange:x,onKeyDown:b=>{b.key==="Enter"&&y(b)},placeholder:r,value:a,...l}),j()]})},rt=m(u)`
  top: -50%;
  right: -3%;
  z-index: 3;
  position: absolute;
  transform: translate(-50%, 50%);
`,$e=m(q)`
  font-size: 24px;
`,Wn=m(we)`
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
`,Un=m(ve)`
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
    background-color: ${d.BG2};
    padding: 0px 8px 0px 16px !important;
    box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);

    &:focus,
    &:active {
      color: ${d.white};
      background-color: ${d.BG2_ACTIVE_INPUT};
      outline: 1px solid ${d.primaryBlue};
    }

    &:hover {
      background-color: ${d.BG2_ACTIVE_INPUT};
    }

    &::placeholder {
      font-size: 15px;
      text-align: left;
      font-weight: 500;
      line-height: 16px;
      letter-spacing: 0em;
      font-family: Barlow;
      color: ${d.GRAY7};
    }
  }
  width: 100%;
`,Gn=({data:t,canEdit:r=!1})=>{const o=oe(n=>n.setSources),[s,i]=h.useState(""),l=async(n,c)=>{if(t!=null&&t.length)try{await rr(n,c);const p=t==null?void 0:t.findIndex(x=>x.ref_id===n),g=[...t];g[p]={...g[p],source:c.source},o(g)}catch(p){console.warn(p)}},a=async n=>{if(!(!n||!(t!=null&&t.length))){i(n);try{await yt(n),o(t==null?void 0:t.filter(c=>c.ref_id!==n))}catch(c){console.warn(c)}finally{i("")}}};return t!=null&&t.length?e.jsxs(Ce,{"aria-label":"a dense table",component:"table",id:"sources-table",size:"small",children:[e.jsx(_e,{children:e.jsxs(he,{component:"tr",children:[e.jsx(_,{className:"empty"}),e.jsx(_,{children:"Type"}),e.jsx(_,{align:"left",children:"Source"}),r&&e.jsx(_,{align:"left"}),e.jsx(_,{className:"empty"})]})}),e.jsx(Or,{component:"tbody",children:t==null?void 0:t.map(n=>e.jsxs(Se,{children:[e.jsx(_,{className:"empty"}),e.jsx(_,{align:"left",children:re[n.source_type]}),e.jsx(_,{align:"left",children:e.jsx(Hn,{condition:r,wrapper:c=>e.jsx(Yn,{id:n.ref_id,onSave:p=>l(n.ref_id,{source:p,source_type:n.source_type}),value:n.source,children:c}),children:n.source_type===Ue||n.source_type===Ge||n.source_type===He?e.jsxs(e.Fragment,{children:[n.source_type===Ue&&e.jsxs(Ee,{href:`${$t}/${n.source}`,target:"_blank",children:["@",n.source]}),n.source_type===Ge&&e.jsx(Ee,{href:`${n.source}${n.source.includes("?")?"&":"?"}open=system`,target:"_blank",children:n.source}),n.source_type===He&&e.jsx(Ee,{href:n.source,target:"_blank",children:n.source})]}):e.jsx("div",{children:n.source})})}),r&&e.jsx(_,{align:"left",children:e.jsx("div",{className:"delete-wrapper",id:`delete-${n.source}`,children:s===n.ref_id?e.jsx(P,{color:d.white}):e.jsx(kt,{message:"Are you sure ?",onConfirm:()=>a(n.ref_id),children:e.jsx(ee,{className:"centered",children:e.jsx(Pr,{})})})})}),e.jsx(_,{className:"empty"})]},n.source))})]}):e.jsxs(Kn,{children:[e.jsx(zr,{}),e.jsx(k,{className:"text",children:"There is not any results for selected filters"})]})};function Hn({condition:t,wrapper:r,children:o}){return t?r(o):o}const Yn=({value:t,onSave:r,id:o,children:s})=>{const[i,l]=h.useState(!1),[a,n]=h.useState(t),[c,p]=h.useState(!1),g=async()=>{if(o){p(!0);try{await r(a),l(!1)}catch(x){console.warn(x)}finally{p(!1)}}};return e.jsx("div",{children:i?e.jsxs(Zn,{direction:"row",children:[e.jsx(Hr,{className:"editable-cell__input",name:"cell-input",onChange:x=>n(x),value:a}),e.jsx(ee,{align:"center",justify:"center",children:c?e.jsx(P,{}):e.jsx(Br,{onClick:g})}),e.jsx(ee,{align:"center",className:"secondary",justify:"center",onClick:()=>l(!1),children:e.jsx(Tt,{})})]}):e.jsxs(qn,{direction:"row",children:[s,e.jsx(ee,{onClick:()=>l(!0),children:e.jsx(Ir,{size:20})})]})})},Zn=m(u)`
  display: flex;
  width: 250px;
  border: 2px solid ${d.lightBlue300};
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
`,ee=m(u)`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  cursor: pointer;
  background: transparent;
  color: ${d.lightBlue500};
  &.centered {
    margin: 0 auto;
  }

  & + & {
    margin-left: 4px;
  }
`,Kn=m(u)`
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
    color: ${d.GRAY6};
  }
`,qn=m(u)`
  display: flex;
  padding: 4px;
  position: relative;

  ${ee} {
    visibility: hidden;
  }

  &:hover {
    ${ee} {
      visibility: visible;
    }
  }
`,Ee=m.a`
  color: ${d.white};
  text-decoration: underline;
  &:visited {
    color: ${d.white};
  }
`,Qn=()=>{const[t,r]=h.useState(!0),[o,s]=h.useState(""),[i,l]=oe(x=>[x.sources,x.setSources]),[a]=de(x=>[x.isAdmin]),[n,c]=h.useState("");h.useEffect(()=>{(async()=>{r(!0);try{const y=await jt();l(y.data)}catch(y){console.warn(y)}finally{r(!1)}})()},[l]);const p=x=>{s(o===x||!x?"":x)},g=h.useMemo(()=>i==null?void 0:i.filter(x=>(!o||x.source_type===o)&&(x.source.toLowerCase().startsWith(n.toLowerCase())||x.source.toLowerCase().includes(n.toLowerCase()))),[n,o,i]);return e.jsxs(Xn,{align:"stretch",direction:"column",justify:"flex-end",children:[e.jsx(Te,{align:"center",direction:"row",justify:"space-between",children:e.jsx(k,{className:"title",children:"Sources for this Graph"})}),e.jsx(eo,{children:e.jsx(Vn,{activeIcon:e.jsx(te,{}),defaultIcon:e.jsx(be,{}),loadingIcon:e.jsx(P,{color:d.PRIMARY_BLUE,size:24}),onSearch:c,placeholder:"Find Topic"})}),e.jsxs(u,{className:"filters",direction:"row",pb:16,px:36,children:[e.jsx(ye,{className:G({selected:!o}),onClick:()=>p(""),size:"small",children:"All"}),Object.keys(re).map(x=>e.jsx(ye,{className:G({selected:x===o}),onClick:()=>p(x),size:"small",children:re[x]},x))]}),e.jsx(Jn,{align:"center",justify:t?"center":"flex-start",children:t?e.jsx(P,{color:d.white}):e.jsx(Gn,{canEdit:a,data:g})})]})},Xn=m(u)`
  flex: 1;
  .title {
    font-size: 20px;
    color: ${d.white};
    font-family: Barlow;
    font-size: 22px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  & .filters {
    overflow-x: auto;
  }
`,Jn=m(u)`
  min-height: 0;
  overflow: auto;
  flex: 1;
  width: 100%;
`,eo=m(u)`
  margin: 0 0 16px 36px;
`,to=({onSelect:t,selectedTopic:r})=>{const[o,s]=h.useState(!1),[i,l]=h.useState(""),[a,n]=h.useState([]),[c,p]=h.useState(!1),g=h.useRef(null);h.useEffect(()=>()=>n([]),[n]);const x=async f=>{const C={muted:"False",sort_by:Fe,search:f,skip:"0",limit:"1000"};p(!0);try{const w=await bt(C);n(w.data)}catch{n([])}finally{p(!1)}},y=h.useMemo(()=>ut.debounce(x,300),[]),j=f=>{t(f)},b=f=>{if(l(f),!f){n([]);return}f.length>2&&y(f)};return r?e.jsxs(oo,{children:[e.jsx("div",{className:"value",children:r.topic}),e.jsx(u,{className:"icon",onClick:()=>t(null),children:e.jsx(te,{})})]}):e.jsxs(e.Fragment,{children:[e.jsxs(we,{ref:g,component:"form",onSubmit:f=>f.preventDefault(),sx:{p:"2px 4px",display:"flex",alignItems:"center",width:200},children:[e.jsx(ve,{inputProps:{"aria-label":"search topic"},onChange:f=>b(f.target.value),onFocus:()=>s(!0),placeholder:"Search",size:"small",sx:{ml:1,flex:1},value:i}),i&&e.jsxs(e.Fragment,{children:[e.jsx(nt,{"aria-label":"search",onClick:()=>b(""),type:"button",children:e.jsx(te,{})}),e.jsx(At,{orientation:"vertical",sx:{height:28,m:.5}})]}),e.jsx(nt,{"aria-label":"search",type:"button",children:c?e.jsx(P,{color:d.white,size:24}):e.jsx(be,{})})]}),g.current&&a.length?e.jsx(no,{anchorEl:g.current,open:o,placement:"bottom",children:e.jsx(e.Fragment,{children:a.map(f=>e.jsx(ro,{className:G({active:r===f.ref_id}),onClick:()=>j(f),children:f.topic},"option"))})}):null]})},ro=m(u).attrs({direction:"row",align:"center"})`
  font-family: Barlow;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  overflow: hidden;
  width: 200px;
  color: ${d.GRAY3};
  margin-bottom: 4px;
  cursor: pointer;
  &.active {
    color: ${d.white};
  }
  &:hover {
    color: ${d.white};
  }

  .icon {
    margin-right: 8px;
    width: 9px;
    font-size: 10px;
  }
`,no=m(Pt)`
  && {
    z-index: 99999;
    background: ${d.BUTTON1};
    min-width: 200px;
    padding: 16px;
    color: ${d.GRAY3};
    box-shadow: 0px 1px 6px 0px rgba(0, 0, 0, 0.2);
    border-radius: 6px;
    max-height: 200px;
    overflow: auto;
  }
`,oo=m(u).attrs({direction:"row",justify:"flex-start",align:"center"})`
  .value {
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .icon {
    margin-left: 8px;
    width: 20px;
    height: 20px;
    color: ${d.white};
    background: ${d.primaryBlue};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
`,nt=m(q)`
  font-size: 24px;
`,so=({selectedType:t,setSelectedType:r})=>{const[o,s]=h.useState(null),[i,l]=h.useState([]);h.useEffect(()=>{(async()=>{try{const{data:g}=await nr();l(g.edge_types)}catch(g){console.warn(g)}})()},[l]);const a=p=>{s(p.currentTarget)},n=()=>{s(null)},c=p=>{r(p),n()};return e.jsxs("div",{children:[e.jsxs(io,{onClick:a,children:[e.jsx("div",{className:"text",children:"Type"}),e.jsx("div",{className:"value",children:t}),e.jsx("div",{className:"icon",children:o?e.jsx(Rr,{}):e.jsx(Zr,{})})]}),e.jsx(lo,{anchorEl:o,anchorOrigin:{vertical:"bottom",horizontal:"left"},anchorPosition:{top:62,left:0},onClose:n,open:!!o,transformOrigin:{vertical:"top",horizontal:"left"},children:e.jsx(Gr,{children:i.map(p=>e.jsxs(ao,{className:G({active:p===t}),onClick:()=>c(p),children:[e.jsx("span",{className:"icon",children:p===t?e.jsx(Bt,{}):null}),e.jsx("span",{children:p})]},p))})})]})},io=m(u).attrs({direction:"row",align:"center"})`
  cursor: pointer;
  flex-grow: 1;
  color: ${d.GRAY6};
  font-family: Barlow;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  padding: 0 8px;
  .value,
  .icon {
    color: ${d.white};
  }

  .value {
    margin: 0 8px 0 4px;
  }
`,ao=m(u).attrs({direction:"row",align:"center"})`
  font-family: Barlow;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  color: ${d.GRAY3};
  height: 27px;
  cursor: pointer;
  &.active {
    color: ${d.white};
  }
  &:hover {
    color: ${d.white};
  }

  .icon {
    margin-right: 8px;
    width: 9px;
    font-size: 10px;
  }
`,lo=m(Ve)`
  .MuiPaper-root {
    background: ${d.BUTTON1};
    min-width: 149px;
    padding: 16px;
    color: ${d.GRAY3};
    box-shadow: 0px 1px 6px 0px rgba(0, 0, 0, 0.2);
    border-radius: 6px;
  }
`,co=({from:t,onSelect:r,selectedTopic:o,selectedType:s,setSelectedType:i})=>e.jsxs(u,{children:[e.jsx(u,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(u,{align:"center",direction:"row",children:e.jsx(po,{children:"Add edge"})})}),e.jsxs(uo,{mb:12,children:[e.jsxs(Le,{children:[e.jsx("div",{className:"label",children:"From"}),e.jsx("div",{children:t})]}),e.jsx(Le,{children:e.jsx(so,{selectedType:s,setSelectedType:i})}),e.jsxs(Le,{children:[e.jsx("div",{className:"label",children:"To"}),e.jsx(to,{onSelect:r,selectedTopic:o})]})]})]}),po=m(k)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,uo=m(u).attrs({align:"flex-start",direction:"row",justify:"flex-start"})`
  color: ${d.white};
  .label {
    margin-bottom: 8px;
    font-weight: 500;
    font-size: 14px;
    color: ${d.GRAY3};
  }
`,Le=m(u)`
  flex: 1 1 100%;
`,ho=({topic:t,onClose:r})=>{const{close:o}=U("addEdge"),[s]=M(b=>[b.data]),i=pe({mode:"onChange"}),[l,a]=h.useState(!1),[n,c]=h.useState(null),[p,g]=h.useState(""),x=()=>{r(),o()},y=async()=>{if(!(!n||!s)){a(!0);try{await or({from:t.ref_id,to:n==null?void 0:n.ref_id,relationship:p});const{ref_id:b}=t,{ref_id:f}=n;if(s){const C={...s};C[b]={...C[b],edgeList:[...C[b].edgeList,p]},C[f]&&(C[f]={...C[f],edgeList:[...C[f].edgeList,p]}),M.setState({data:C})}x()}catch(b){console.warn(b)}finally{a(!1)}}},j=l||!n||!p;return e.jsx(We,{id:"addEdge",kind:"large",onClose:x,preventOutsideClose:!0,children:e.jsxs(ue,{...i,children:[e.jsx(co,{from:t.topic,onSelect:c,selectedTopic:n,selectedType:p,setSelectedType:g}),e.jsxs(Q,{color:"secondary",disabled:j,onClick:y,size:"large",variant:"contained",children:["Confirm",l&&e.jsx(P,{color:d.BLUE_PRESS_STATE,size:10})]})]})})},xo=()=>e.jsxs(u,{children:[e.jsx(u,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(u,{align:"center",direction:"row",children:e.jsx(fo,{children:"Edit topic"})})}),e.jsx(u,{mb:12,children:e.jsx(le,{id:"cy-topic",maxLength:50,name:"topic",placeholder:"Add your topic",rules:{...Vt}})})]}),fo=m(k)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,mo=({topic:t,onClose:r})=>{const{close:o}=U("editTopic"),[s]=M(j=>[j.data]),i=pe({mode:"onChange"}),{watch:l,setValue:a,reset:n}=i,[c,p]=h.useState(!1);h.useEffect(()=>(t&&a("topic",t==null?void 0:t.topic),()=>{n()}),[t,a,n]);const g=l("topic"),x=()=>{r(),o()},y=async()=>{p(!0);try{if(await Ct((t==null?void 0:t.ref_id)||"",{topic:g.trim()}),s){const j={...s};j[t==null?void 0:t.ref_id].topic=g.trim(),M.setState({data:j})}x()}catch(j){console.warn(j)}finally{p(!1)}};return e.jsx(We,{id:"editTopic",kind:"regular",onClose:x,preventOutsideClose:!0,children:e.jsxs(ue,{...i,children:[e.jsx(xo,{}),e.jsxs(Q,{color:"secondary",disabled:c,onClick:y,size:"large",variant:"contained",children:["Save",c&&e.jsx(P,{color:d.BLUE_PRESS_STATE,size:10})]})]})})},go=({onSelect:t,selectedTopic:r})=>{const[o,s]=h.useState(!1),[i,l]=h.useState(""),[a,n]=h.useState([]),[c,p]=h.useState(!1),g=h.useRef(null);h.useEffect(()=>()=>n([]),[n]);const x=async f=>{const C={muted:"False",sort_by:Fe,search:f,skip:"0",limit:"1000"};p(!0);try{const w=await bt(C);n(w.data)}catch{n([])}finally{p(!1)}},y=h.useMemo(()=>ut.debounce(x,300),[]),j=f=>{t(f)},b=f=>{if(l(f),!f){n([]);return}f.length>2&&y(f)};return r?e.jsxs(bo,{children:[e.jsx("div",{className:"value",children:r.topic}),e.jsx(u,{className:"icon",onClick:()=>t(null),children:e.jsx(te,{})})]}):e.jsxs(e.Fragment,{children:[e.jsxs(we,{ref:g,component:"form",onSubmit:f=>f.preventDefault(),sx:{p:"2px 4px",display:"flex",alignItems:"center",width:200},children:[e.jsx(ve,{inputProps:{"aria-label":"search topic"},onChange:f=>b(f.target.value),onFocus:()=>s(!0),placeholder:"Search",size:"small",sx:{ml:1,flex:1},value:i}),i&&e.jsxs(e.Fragment,{children:[e.jsx(ot,{"aria-label":"search",onClick:()=>b(""),type:"button",children:e.jsx(te,{})}),e.jsx(At,{orientation:"vertical",sx:{height:28,m:.5}})]}),e.jsx(ot,{"aria-label":"search",type:"button",children:c?e.jsx(P,{color:d.white,size:24}):e.jsx(be,{})})]}),g.current&&a.length?e.jsx(jo,{anchorEl:g.current,open:o,placement:"bottom",children:e.jsx(e.Fragment,{children:a.map(f=>e.jsx(yo,{className:G({active:r===f.ref_id}),onClick:()=>j(f),children:f.topic},"option"))})}):null]})},yo=m(u).attrs({direction:"row",align:"center"})`
  font-family: Barlow;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  overflow: hidden;
  width: 200px;
  color: ${d.GRAY3};
  margin-bottom: 4px;
  cursor: pointer;
  &.active {
    color: ${d.white};
  }
  &:hover {
    color: ${d.white};
  }

  .icon {
    margin-right: 8px;
    width: 9px;
    font-size: 10px;
  }
`,jo=m(Pt)`
  && {
    z-index: 99999;
    background: ${d.BUTTON1};
    min-width: 200px;
    padding: 16px;
    color: ${d.GRAY3};
    box-shadow: 0px 1px 6px 0px rgba(0, 0, 0, 0.2);
    border-radius: 6px;
    max-height: 200px;
    overflow: auto;
  }
`,bo=m(u).attrs({direction:"row",justify:"flex-start",align:"center"})`
  .value {
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .icon {
    margin-left: 8px;
    width: 20px;
    height: 20px;
    color: ${d.white};
    background: ${d.primaryBlue};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
`,ot=m(q)`
  font-size: 24px;
`,Co=({from:t,onSelect:r,selectedTopic:o})=>e.jsxs(u,{children:[e.jsx(u,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(u,{align:"center",direction:"row",children:e.jsx(wo,{children:"Merge topic"})})}),e.jsxs(vo,{mb:12,children:[e.jsxs(st,{children:[e.jsx("div",{className:"label",children:"From"}),e.jsx("div",{children:t})]}),e.jsxs(st,{ml:24,children:[e.jsx("div",{className:"label",children:"To"}),e.jsx(go,{onSelect:r,selectedTopic:o})]})]})]}),wo=m(k)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,vo=m(u).attrs({align:"flex-start",direction:"row",justify:"flex-start"})`
  color: ${d.white};
  .label {
    margin-bottom: 8px;
    font-weight: 500;
    font-size: 14px;
    color: ${d.GRAY3};
  }
`,st=m(u)`
  flex: 1 1 100%;
`,So=({topic:t,onClose:r})=>{const{close:o}=U("mergeTopic"),[s,i,l]=M(w=>[w.data,w.ids,w.total]),a=pe({mode:"onChange"}),{watch:n,setValue:c,reset:p}=a,[g,x]=h.useState(!1),[y,j]=h.useState(null);h.useEffect(()=>(t&&c("topic",t==null?void 0:t.topic),()=>{p()}),[t,c,p]);const b=n("topic"),f=()=>{r(),o()},C=async()=>{if(!(!y||!s)){x(!0);try{await sr({from:t.ref_id,to:y==null?void 0:y.ref_id});const{ref_id:w}=t;if(s[w]={...s[w],edgeList:[Fr],edgeCount:s[w].edgeCount-1},M.setState({ids:i.filter(A=>A!==y.ref_id),total:l-1}),s){const A={...s};A[t==null?void 0:t.ref_id].topic=b.trim(),M.setState({data:A})}f()}catch(w){console.warn(w)}finally{x(!1)}}};return e.jsx(We,{id:"mergeTopic",kind:"regular",onClose:f,preventOutsideClose:!0,children:e.jsxs(ue,{...a,children:[e.jsx(Co,{from:t.topic,onSelect:j,selectedTopic:y}),e.jsxs(Q,{color:"secondary",disabled:g,onClick:C,size:"large",variant:"contained",children:["Merge topics",g&&e.jsx(P,{color:d.BLUE_PRESS_STATE,size:10})]})]})})},_o=t=>e.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M7.37516 8.625V11.3334C7.37516 11.5104 7.43508 11.6589 7.55491 11.7786C7.67476 11.8984 7.82326 11.9583 8.00041 11.9583C8.17758 11.9583 8.32599 11.8984 8.44564 11.7786C8.5653 11.6589 8.62512 11.5104 8.62512 11.3334V8.625H11.3335C11.5106 8.625 11.659 8.56508 11.7788 8.44525C11.8986 8.3254 11.9585 8.1769 11.9585 7.99975C11.9585 7.82258 11.8986 7.67417 11.7788 7.55452C11.659 7.43487 11.5106 7.37504 11.3335 7.37504H8.62512V4.66669C8.62512 4.4896 8.56521 4.34117 8.44537 4.22137C8.32553 4.1016 8.17702 4.04171 7.99987 4.04171C7.82271 4.04171 7.6743 4.1016 7.55464 4.22137C7.43499 4.34117 7.37516 4.4896 7.37516 4.66669V7.37504H4.66681C4.48973 7.37504 4.3413 7.43496 4.22152 7.55479C4.10173 7.67464 4.04183 7.82314 4.04183 8.00029C4.04183 8.17746 4.10173 8.32587 4.22152 8.44552C4.3413 8.56517 4.48973 8.625 4.66681 8.625H7.37516ZM8.00154 15.9167C6.90659 15.9167 5.8774 15.7089 4.91395 15.2933C3.9505 14.8778 3.11243 14.3138 2.39975 13.6015C1.68705 12.8891 1.12284 12.0514 0.7071 11.0884C0.291364 10.1253 0.0834961 9.09636 0.0834961 8.00142C0.0834961 6.90647 0.291274 5.87728 0.70683 4.91383C1.12239 3.95037 1.68634 3.11231 2.3987 2.39963C3.11108 1.68693 3.94878 1.12272 4.91181 0.706979C5.87482 0.291243 6.9038 0.083374 7.99875 0.083374C9.09369 0.083374 10.1229 0.291153 11.0863 0.706708C12.0498 1.12226 12.8879 1.68622 13.6005 2.39858C14.3132 3.11096 14.8774 3.94866 15.2932 4.91169C15.7089 5.8747 15.9168 6.90368 15.9168 7.99863C15.9168 9.09357 15.709 10.1228 15.2935 11.0862C14.8779 12.0497 14.3139 12.8877 13.6016 13.6004C12.8892 14.3131 12.0515 14.8773 11.0885 15.2931C10.1255 15.7088 9.09648 15.9167 8.00154 15.9167ZM8.00014 14.6667C9.86125 14.6667 11.4376 14.0209 12.7293 12.7292C14.021 11.4375 14.6668 9.86113 14.6668 8.00002C14.6668 6.13891 14.021 4.56252 12.7293 3.27085C11.4376 1.97919 9.86125 1.33335 8.00014 1.33335C6.13903 1.33335 4.56264 1.97919 3.27098 3.27085C1.97931 4.56252 1.33348 6.13891 1.33348 8.00002C1.33348 9.86113 1.97931 11.4375 3.27098 12.7292C4.56264 14.0209 6.13903 14.6667 8.00014 14.6667Z",fill:"currentColor"})}),To=t=>e.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 12 12",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M10.1765 0.310088L4.72809 5.70971C4.63832 5.79868 4.56637 5.90372 4.51607 6.01926L3.74627 7.78746C3.63822 8.03565 3.89191 8.28707 4.14234 8.17999L5.92651 7.41707C6.04309 7.36722 6.14907 7.29592 6.23885 7.20695L11.6872 1.80733C12.1044 1.39388 12.1044 0.723539 11.6872 0.310088C11.27 -0.103363 10.5936 -0.103363 10.1765 0.310088ZM9.80835 7.14088C9.80835 6.81895 10.072 6.55777 10.3969 6.55777C10.723 6.55777 10.9854 6.82017 10.9854 7.14088L10.9191 10.2508C10.9191 11.2153 10.1489 12.0001 9.17571 12.0001H1.74343C0.79227 12.0001 0 11.2153 0 10.2289V2.84292C0 1.89999 0.79227 1.11523 1.74343 1.11523L5.29651 1.11548C5.62264 1.11548 5.88501 1.37666 5.88501 1.69858C5.88501 2.0205 5.62141 2.28168 5.29651 2.28168H1.7655C1.44134 2.28168 1.177 2.54335 1.177 2.86479V10.2508C1.177 10.5722 1.44134 10.8339 1.7655 10.8339H9.21985C9.54402 10.8339 9.80835 10.5722 9.80835 10.2508V7.14088Z",fill:"currentColor"})}),ko=t=>e.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 12 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M1.33317 15.5L0.166504 14.3333L4.18734 10.2917C4.50678 9.97222 4.74984 9.61111 4.9165 9.20833C5.08317 8.80556 5.1665 8.38194 5.1665 7.9375L5.1665 3.6875L3.83317 5L2.6665 3.83333L5.99984 0.5L9.33317 3.83333L8.1665 5L6.83317 3.6875L6.83317 7.9375C6.83317 8.38194 6.9165 8.80556 7.08317 9.20833C7.24984 9.61111 7.49289 9.97222 7.81234 10.2917L11.8332 14.3333L10.6665 15.5L5.99984 10.8333L1.33317 15.5Z",fill:"currentColor"})}),Ne=t=>e.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 12 8",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M0.333496 7.66704V6.66706H3.91681V7.66704H0.333496ZM0.333496 4.50037V3.50041H7.7886V4.50037H0.333496ZM0.333496 1.33372V0.33374H11.6668V1.33372H0.333496Z",fill:"currentColor"})}),Ao=t=>e.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 16 15",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M14.0716 15L10.8994 11.7764C10.437 11.9597 9.96181 12.0919 9.47381 12.1732C8.98581 12.2545 8.49002 12.2952 7.98643 12.2952C6.33597 12.2952 4.82448 11.8457 3.45194 10.9466C2.07941 10.0476 0.991584 8.86271 0.188459 7.39193C0.123124 7.27666 0.0753836 7.15933 0.045238 7.03994C0.0150793 6.92055 0 6.7991 0 6.67559C0 6.55208 0.0163338 6.42935 0.0490013 6.30739C0.0816688 6.18543 0.13067 6.06938 0.196005 5.95925C0.508607 5.42714 0.84081 4.91226 1.19261 4.41462C1.54443 3.91699 1.95353 3.47673 2.41992 3.09386L0.24877 0.846015L1.07501 0L14.8978 14.154L14.0716 15ZM7.98643 9.94854C8.16032 9.94854 8.32642 9.93799 8.48473 9.91689C8.64305 9.89579 8.7976 9.84973 8.94838 9.77871L4.95591 5.69059C4.89158 5.84498 4.84786 6.00324 4.82475 6.16535C4.80162 6.32745 4.79005 6.49753 4.79005 6.67559C4.79005 7.58645 5.10039 8.35966 5.72108 8.99521C6.34176 9.63076 7.09688 9.94854 7.98643 9.94854ZM13.4384 10.3561L10.9792 7.85816C11.0456 7.66673 11.0961 7.47375 11.1308 7.27922C11.1655 7.0847 11.1828 6.88349 11.1828 6.67559C11.1828 5.76473 10.8725 4.99152 10.2518 4.35597C9.63109 3.72042 8.87598 3.40264 7.98643 3.40264C7.78339 3.40264 7.58689 3.42168 7.39692 3.45976C7.20694 3.49784 7.02099 3.56011 6.83907 3.64657L4.87751 1.64575C5.37606 1.44402 5.88441 1.29529 6.40257 1.19957C6.92071 1.10385 7.44867 1.05599 7.98643 1.05599C9.64191 1.05599 11.1604 1.50756 12.542 2.41072C13.9236 3.31387 15.0134 4.50598 15.8115 5.98705C15.8718 6.08894 15.9183 6.19829 15.951 6.31511C15.9837 6.43192 16 6.55208 16 6.67559C16 6.7991 15.9857 6.91926 15.957 7.03607C15.9284 7.15289 15.8839 7.26225 15.8236 7.36414C15.52 7.94669 15.1738 8.49038 14.7848 8.99521C14.3958 9.50005 13.947 9.95369 13.4384 10.3561ZM10.0912 6.95657L7.73162 4.54816C8.06131 4.48126 8.38246 4.50545 8.69506 4.62072C9.00767 4.736 9.27754 4.9156 9.5047 5.15952C9.7369 5.40036 9.90451 5.67723 10.0075 5.99012C10.1106 6.30301 10.1385 6.62516 10.0912 6.95657Z",fill:"currentColor"})}),$o=t=>e.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 18 13",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M9.00204 9.98073C9.94628 9.98073 10.7483 9.65024 11.408 8.98927C12.0677 8.32829 12.3976 7.52567 12.3976 6.58142C12.3976 5.63718 12.0671 4.8352 11.4061 4.17548C10.7451 3.51576 9.9425 3.1859 8.99825 3.1859C8.05401 3.1859 7.25203 3.51638 6.59231 4.17735C5.93259 4.83834 5.60273 5.64096 5.60273 6.58521C5.60273 7.52944 5.93321 8.33142 6.59419 8.99115C7.25517 9.65087 8.05779 9.98073 9.00204 9.98073ZM9.00014 8.83331C8.37514 8.83331 7.84389 8.61456 7.40639 8.17706C6.96889 7.73956 6.75014 7.20831 6.75014 6.58331C6.75014 5.95831 6.96889 5.42706 7.40639 4.98956C7.84389 4.55206 8.37514 4.33331 9.00014 4.33331C9.62514 4.33331 10.1564 4.55206 10.5939 4.98956C11.0314 5.42706 11.2501 5.95831 11.2501 6.58331C11.2501 7.20831 11.0314 7.73956 10.5939 8.17706C10.1564 8.61456 9.62514 8.83331 9.00014 8.83331ZM9.00129 12.4166C7.08494 12.4166 5.33884 11.888 3.76298 10.8309C2.18713 9.77374 1.02688 8.35788 0.282227 6.58331C1.02688 4.80874 2.18675 3.39288 3.76185 2.33573C5.33694 1.27858 7.08265 0.75 8.999 0.75C10.9153 0.75 12.6614 1.27858 14.2373 2.33573C15.8132 3.39288 16.9734 4.80874 17.7181 6.58331C16.9734 8.35788 15.8135 9.77374 14.2384 10.8309C12.6634 11.888 10.9176 12.4166 9.00129 12.4166Z",fill:"currentColor"})}),Eo=t=>e.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:e.jsxs("g",{opacity:"0.4",children:[e.jsx("mask",{id:"mask0_5162_13105",maskUnits:"userSpaceOnUse",x:"0",y:"0",width:"24",height:"24",children:e.jsx("rect",{width:"1em",height:"1em",fill:"currentColor"})}),e.jsx("g",{mask:"url(#mask0_5162_13105)",children:e.jsx("path",{d:"M19.7615 21.8691L15.7154 17.8537C15.1256 18.0819 14.5195 18.2467 13.8971 18.348C13.2747 18.4493 12.6423 18.4999 12 18.4999C9.89486 18.4999 7.96698 17.94 6.21635 16.8201C4.46572 15.7002 3.07822 14.2243 2.05385 12.3922C1.97052 12.2486 1.90963 12.1025 1.87118 11.9538C1.83271 11.8051 1.81348 11.6538 1.81348 11.4999C1.81348 11.3461 1.83431 11.1932 1.87598 11.0413C1.91764 10.8894 1.98014 10.7448 2.06348 10.6076C2.46219 9.9448 2.88591 9.30345 3.33463 8.68357C3.78336 8.0637 4.30516 7.51531 4.90003 7.0384L2.13078 4.2384L3.18463 3.18457L20.8153 20.8153L19.7615 21.8691ZM12 15.5768C12.2218 15.5768 12.4336 15.5637 12.6356 15.5374C12.8375 15.5111 13.0346 15.4537 13.2269 15.3653L8.13463 10.273C8.05258 10.4653 7.99681 10.6624 7.96733 10.8643C7.93783 11.0663 7.92308 11.2781 7.92308 11.4999C7.92308 12.6345 8.31891 13.5977 9.11058 14.3893C9.90224 15.181 10.8654 15.5768 12 15.5768ZM18.9538 16.0845L15.8173 12.973C15.9019 12.7345 15.9663 12.4941 16.0105 12.2518C16.0548 12.0095 16.0769 11.7589 16.0769 11.4999C16.0769 10.3653 15.681 9.40219 14.8894 8.61052C14.0977 7.81885 13.1346 7.42302 12 7.42302C11.741 7.42302 11.4904 7.44674 11.2481 7.49417C11.0058 7.5416 10.7686 7.61917 10.5366 7.72687L8.03463 5.23457C8.67051 4.98329 9.3189 4.79803 9.9798 4.6788C10.6407 4.55956 11.3141 4.49995 12 4.49995C14.1115 4.49995 16.0484 5.06245 17.8105 6.18745C19.5727 7.31245 20.9628 8.79738 21.9807 10.6422C22.0576 10.7692 22.1169 10.9054 22.1586 11.0509C22.2003 11.1964 22.2211 11.3461 22.2211 11.4999C22.2211 11.6538 22.2028 11.8034 22.1663 11.9489C22.1297 12.0945 22.073 12.2307 21.9961 12.3576C21.6089 13.0832 21.1673 13.7605 20.6711 14.3893C20.175 15.0182 19.6025 15.5832 18.9538 16.0845ZM14.6846 11.8499L11.675 8.84992C12.0955 8.76659 12.5051 8.79671 12.9038 8.9403C13.3025 9.0839 13.6468 9.30761 13.9365 9.61145C14.2327 9.91145 14.4465 10.2563 14.5779 10.6461C14.7093 11.0358 14.7449 11.4371 14.6846 11.8499Z",fill:"currentColor"})})]})}),Lo=t=>e.jsxs("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("mask",{id:"mask0_5162_13106",maskUnits:"userSpaceOnUse",x:"0",y:"0",width:"24",height:"24",children:e.jsx("rect",{width:"1em",height:"1em",fill:"currentColor"})}),e.jsx("g",{mask:"url(#mask0_5162_13106)",children:e.jsx("path",{d:"M12.0023 15.5769C13.1354 15.5769 14.0978 15.1803 14.8895 14.3871C15.6811 13.5939 16.077 12.6308 16.077 11.4977C16.077 10.3646 15.6804 9.40224 14.8872 8.61058C14.094 7.81891 13.1309 7.42308 11.9978 7.42308C10.8647 7.42308 9.90234 7.81966 9.11067 8.61282C8.31901 9.40601 7.92317 10.3692 7.92317 11.5023C7.92317 12.6353 8.31976 13.5977 9.11293 14.3894C9.90611 15.181 10.8692 15.5769 12.0023 15.5769ZM12.0001 14.2C11.2501 14.2 10.6126 13.9375 10.0876 13.4125C9.56258 12.8875 9.30007 12.25 9.30007 11.5C9.30007 10.75 9.56258 10.1125 10.0876 9.58748C10.6126 9.06248 11.2501 8.79998 12.0001 8.79998C12.7501 8.79998 13.3876 9.06248 13.9126 9.58748C14.4376 10.1125 14.7001 10.75 14.7001 11.5C14.7001 12.25 14.4376 12.8875 13.9126 13.4125C13.3876 13.9375 12.7501 14.2 12.0001 14.2ZM12.0014 18.5C9.70183 18.5 7.60651 17.8657 5.71547 16.5971C3.82446 15.3285 2.43216 13.6295 1.53857 11.5C2.43216 9.37049 3.82401 7.67146 5.71412 6.40288C7.60422 5.13429 9.69908 4.5 11.9987 4.5C14.2983 4.5 16.3936 5.13429 18.2847 6.40288C20.1757 7.67146 21.568 9.37049 22.4616 11.5C21.568 13.6295 20.1761 15.3285 18.286 16.5971C16.3959 17.8657 14.3011 18.5 12.0014 18.5Z",fill:"currentColor"})})]}),No=t=>e.jsxs("svg",{width:"1em",height:"1em",viewBox:"0 0 22 22",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("mask",{id:"mask0_5577_416",maskUnits:"userSpaceOnUse",x:"0",y:"0",width:"22",height:"22",children:e.jsx("rect",{width:"1em",height:"1em",fill:"currentColor"})}),e.jsx("g",{mask:"url(#mask0_5577_416)",children:e.jsx("path",{d:"M11 17.6634C10.6219 17.6634 10.2982 17.5287 10.0289 17.2595C9.75964 16.9902 9.625 16.6665 9.625 16.2884C9.625 15.9103 9.75964 15.5866 10.0289 15.3173C10.2982 15.0481 10.6219 14.9134 11 14.9134C11.3781 14.9134 11.7018 15.0481 11.971 15.3173C12.2403 15.5866 12.375 15.9103 12.375 16.2884C12.375 16.6665 12.2403 16.9902 11.971 17.2595C11.7018 17.5287 11.3781 17.6634 11 17.6634ZM11 12.3749C10.6219 12.3749 10.2982 12.2403 10.0289 11.971C9.75964 11.7018 9.625 11.3781 9.625 11C9.625 10.6218 9.75964 10.2982 10.0289 10.0289C10.2982 9.75962 10.6219 9.62498 11 9.62498C11.3781 9.62498 11.7018 9.75962 11.971 10.0289C12.2403 10.2982 12.375 10.6218 12.375 11C12.375 11.3781 12.2403 11.7018 11.971 11.971C11.7018 12.2403 11.3781 12.3749 11 12.3749ZM11 7.08648C10.6219 7.08648 10.2982 6.95184 10.0289 6.68257C9.75964 6.41332 9.625 6.08963 9.625 5.7115C9.625 5.33339 9.75964 5.0097 10.0289 4.74043C10.2982 4.47118 10.6219 4.33655 11 4.33655C11.3781 4.33655 11.7018 4.47118 11.971 4.74043C12.2403 5.0097 12.375 5.33339 12.375 5.7115C12.375 6.08963 12.2403 6.41332 11.971 6.68257C11.7018 6.95184 11.3781 7.08648 11 7.08648Z",fill:"currentColor"})})]}),Po=({topic:t,onClick:r,onSearch:o})=>{const[s,i]=M(w=>[w.ids,w.total]),[l,a]=h.useState(!1),n=Me(t.date_added_to_graph),c=async(w,A)=>{a(!0);try{await Ct(w,{muted_topic:A}),M.setState({ids:s.filter(L=>L!==w),total:i-1})}catch(L){console.warn(L)}},p=w=>{o(w.topic)},g=t.edgeList.slice(0,1),x=t.edgeList.length-g.length,[y,j]=B.useState(null),b=w=>{j(w.currentTarget)},f=()=>{j(null)},C=!!y;return e.jsxs(Se,{children:[e.jsx(_,{className:"empty"}),e.jsx(_,{onClick:()=>p(t),children:e.jsx(Bo,{children:t.topic})}),e.jsx(_,{children:t.edgeCount}),e.jsxs(_,{children:[e.jsx(Ve,{anchorEl:y,anchorOrigin:{vertical:"top",horizontal:"center"},disableRestoreFocus:!0,id:"mouse-over-popover",onClose:f,open:C,sx:{pointerEvents:"none","& .MuiPaper-root":{backgroundColor:"rgba(0, 0, 0, 0.9)",borderRadius:"4px",width:"160px"}},transformOrigin:{vertical:"bottom",horizontal:"center"},children:e.jsx(Je,{sx:{p:1.5,fontSize:"13px",fontWeight:400,lineHeight:"1.8",wordWrap:"break-word"},children:t.edgeList.join(", ")})}),g.join(", "),x>0&&e.jsx(Je,{"aria-haspopup":"true","aria-owns":C?"mouse-over-popover":void 0,component:"span",onMouseEnter:b,onMouseLeave:f,sx:{cursor:"context-menu"},children:",..."})]}),e.jsx(_,{children:e.jsx("span",{children:n})}),e.jsx(_,{className:"cell-center",children:e.jsx(u,{direction:"row",justify:"space-between",children:e.jsx("div",{className:"approve-wrapper",children:l?e.jsx(P,{color:d.white,size:16}):e.jsxs(u,{direction:"row",children:[t.muted_topic?e.jsx(q,{className:"centered",onClick:()=>c(t.ref_id,!1),children:e.jsx(Lo,{})}):e.jsx(q,{className:"centered",onClick:()=>c(t.ref_id,!0),children:e.jsx(Eo,{})}),e.jsx(q,{onClick:w=>r(w,t.ref_id),children:e.jsx(No,{"data-testid":"ThreeDotsIcons"})})]})})})})]},t.topic)},Bo=m.span`
  cursor: pointer;
  :hover {
    text-decoration: underline;
  }
`,Io=h.memo(Po),Do=({setShowMuteUnmute:t,showMuted:r,onTopicEdit:o,onChangeFilter:s})=>{const{close:i}=U("sourcesTable"),[l,a]=B.useState(null),[n,c]=B.useState(""),[p,g]=se(T=>[T.setSearchFormValue,T.setCurrentSearch]),[x,y]=M(T=>[T.data,T.ids]),j=h.useCallback((T,I)=>{a(T.currentTarget),c(I)},[]),b=()=>{a(null)},f=T=>{p(T),g(T),i()},C=T=>{o(n,T),b()},w=T=>{s(T)},A=!!l,L=A?"simple-popover":void 0;return x?e.jsx(e.Fragment,{children:Object.keys(x).length?e.jsxs(e.Fragment,{children:[e.jsxs(Ce,{component:"table",children:[e.jsx(_e,{children:e.jsxs(he,{component:"tr",children:[e.jsx(_,{className:"empty"}),e.jsx(_,{children:e.jsxs(Pe,{onClick:()=>w(Fe),children:["Name ",e.jsx(Ne,{})]})}),e.jsx(_,{children:e.jsxs(Pe,{onClick:()=>w(Vr),children:["Count ",e.jsx(Ne,{})]})}),e.jsx(_,{children:"Edge list"}),e.jsx(_,{children:e.jsxs(Pe,{onClick:()=>w(Wr),children:["Date ",e.jsx(Ne,{})]})}),e.jsx(_,{children:e.jsx(u,{px:8,children:e.jsxs(Mo,{onClick:t,children:[e.jsx(zo,{checked:r,children:e.jsx(Oo,{children:r&&e.jsx(Bt,{})})}),"Muted"]})})})]})}),x&&e.jsx("tbody",{children:y==null?void 0:y.map(T=>e.jsx(Io,{onClick:j,onSearch:f,topic:x[T]},T))})]}),n?e.jsxs(Ro,{anchorEl:l,anchorOrigin:{vertical:"bottom",horizontal:"right"},id:L,onClose:b,open:A,transformOrigin:{vertical:"top",horizontal:"right"},children:[r?e.jsxs(ae,{onClick:()=>C("unMute"),children:[" ",e.jsx($o,{"data-testid":""})," Unmute"]}):e.jsxs(ae,{onClick:()=>C("mute"),children:[" ",e.jsx(Ao,{"data-testid":"VisibilityOff"})," Mute"]}),e.jsxs(ae,{onClick:()=>C("editTopic"),children:[e.jsx(To,{"data-testid":"EditTopicIcon"})," Rename"]}),e.jsxs(ae,{onClick:()=>C("mergeTopic"),children:[e.jsx(ko,{"data-testid":"MergeIcon"})," Merge"]}),e.jsxs(ae,{onClick:()=>C("addEdge"),children:[e.jsx(_o,{"data-testid":"AddCircleIcon"})," Add edge"]})]}):null]}):e.jsxs(u,{children:[e.jsx(k,{children:"There is not any results for selected filters"}),e.jsx(De,{})]})}):e.jsxs(u,{children:[e.jsx(k,{children:"There is not any results for selected filters"}),e.jsx(De,{})]})},Mo=m.td`
  cursor: pointer;
  display: flex;
  align-items: center;
`,zo=m.div`
  width: 14px;
  height: 14px;
  border-radius: 4px;
  border: ${({checked:t})=>t?"#618AFF":"2px solid #CCCCCC"};
  background-color: ${({checked:t})=>t?"#618AFF":"transparent"};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 8px;
`,Oo=m.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 2px;
  background-color: transparent;
`,Pe=m.span`
  cursor: pointer;
  display: flex;
  gap: 4px;
  align-items: center;
`,ae=m(u).attrs({direction:"row",px:12,py:8})`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 12px;
  cursor: pointer;
  background: ${d.BUTTON1};
  color: ${d.white};

  &:hover {
    background: ${d.BUTTON1_HOVER};
    color: ${d.GRAY3};
  }
`,Ro=m(Ve)`
  && {
    z-index: 9999;
  }
  .MuiPaper-root {
    min-width: 149px;
    color: ${d.GRAY3};
    box-shadow: 0px 1px 6px 0px rgba(0, 0, 0, 0.2);
    border-radius: 6px;
    z-index: 1;
    font-family: Barlow;
    font-size: 14px;
    font-weight: 500;
  }
`,Fo=({placeholder:t,activeIcon:r,loadingIcon:o,defaultIcon:s,...i})=>{const[l,a]=M(j=>[j.filters,j.setFilters]),[n,c]=h.useState(!1),p=()=>{a({search:""}),c(!1)},g=j=>{!j.target.value&&p(),a({search:j.target.value})},x=j=>{const{value:b}=j.currentTarget;a({search:b}),!n&&(c(!0),setTimeout(()=>{b||p(),c(!1)},1e3),b||p())},y=()=>n?e.jsx(it,{children:e.jsx(Be,{type:"button",children:o})}):e.jsx(it,{children:l.search?e.jsx(Be,{onClick:p,type:"button",children:r}):e.jsx(Be,{type:"button",children:s})});return e.jsxs(Vo,{children:[e.jsx(Wo,{autoComplete:"off",autoCorrect:"off",inputProps:{"aria-label":"search sources"},onChange:g,onKeyDown:j=>{j.key==="Enter"&&x(j)},placeholder:t,value:l.search,...i}),y()]})},it=m(u)`
  top: -50%;
  right: -3%;
  z-index: 3;
  position: absolute;
  transform: translate(-50%, 50%);
`,Be=m(q)`
  font-size: 24px;
`,Vo=m(we)`
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
`,Wo=m(ve)`
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
    background-color: ${d.BG2};
    padding: 0px 8px 0px 16px !important;
    box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);

    &:focus,
    &:active {
      color: ${d.white};
      background-color: ${d.BG2_ACTIVE_INPUT};
      outline: 1px solid ${d.primaryBlue};
    }

    &:hover {
      background-color: ${d.BG2_ACTIVE_INPUT};
    }

    &::placeholder {
      font-size: 15px;
      text-align: left;
      font-weight: 500;
      line-height: 16px;
      letter-spacing: 0em;
      font-family: Barlow;
      color: ${d.GRAY7};
    }
  }
  width: 100%;
`,Uo=()=>{const[t,r]=h.useState(!1),[o,s,i,l,a,n,c]=M(T=>[T.data,T.ids,T.total,T.setTopics,T.filters,T.setFilters,T.terminate]),{open:p}=U("editTopic"),{open:g}=U("mergeTopic"),{open:x}=U("addEdge"),[y,j]=h.useState(null),b={editTopic:p,mergeTopic:g,addEdge:x},f=h.useRef([]);h.useEffect(()=>{s.length&&(f.current=s)},[s]),h.useEffect(()=>{(async()=>{try{r(!0),await l()}catch{console.error("err")}finally{r(!1)}})()},[l,a]);const C=async()=>{try{r(!0),n({page:a.page+1})}catch(T){console.error("Error loading more data:",T)}finally{r(!1)}};h.useEffect(()=>()=>{c()},[c]);const w=T=>{n({sortBy:T})},A=()=>{j(null)},L=(T,I)=>{o&&(j(o[T]),typeof b[I]=="function"&&b[I]())};return e.jsxs(e.Fragment,{children:[e.jsxs(Go,{direction:"column",justify:"flex-end",children:[e.jsx(Te,{align:"flex-start",direction:"row",justify:"space-between",children:e.jsx(k,{className:"title",children:"Topics"})}),e.jsx(Yo,{children:e.jsx(Fo,{activeIcon:e.jsx(te,{}),defaultIcon:e.jsx(be,{}),loadingIcon:e.jsx(P,{color:d.PRIMARY_BLUE,size:24}),placeholder:"Search ..."})}),e.jsx(Ho,{align:"center",justify:t&&!o?"center":"flex-start",children:t&&!o?e.jsx(P,{color:d.white}):e.jsxs(e.Fragment,{children:[e.jsx(Do,{onChangeFilter:w,onTopicEdit:L,setShowMuteUnmute:()=>n({muted:!a.muted}),showMuted:a.muted}),i>s.length?e.jsxs(Q,{className:"load-more",disabled:t,onClick:C,children:["Load more",t&&e.jsx(P,{color:d.BLUE_PRESS_STATE,size:10})]}):null]})})]}),y&&e.jsx(So,{onClose:A,topic:y}),y&&e.jsx(mo,{onClose:A,topic:y}),y&&e.jsx(ho,{onClose:A,topic:y})]})},Go=m(u)`
  flex: 1;

  .title {
    font-size: 20px;
    color: ${d.white};
    font-family: Barlow;
    font-size: 22px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  .subtitle {
    color: ${d.GRAY3};
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
`,Ho=m(u)`
  min-height: 0;
  overflow: auto;
  flex: 1;
  width: 100%;
`,Yo=m(u)`
  margin: 0 0 16px 36px;
`;function Zo(t){return t.charAt(0).toUpperCase()+t.slice(1).toLowerCase()}const Ko=({node:t})=>{var r,o,s,i,l,a,n,c,p;return e.jsxs(Se,{children:[e.jsx(_,{className:"empty"}),e.jsx(_,{children:(r=t==null?void 0:t.properties)!=null&&r.date_added_to_graph?Me((o=t==null?void 0:t.properties)==null?void 0:o.date_added_to_graph):Me((s=t==null?void 0:t.properties)==null?void 0:s.date)}),e.jsx(_,{children:t==null?void 0:t.node_type}),e.jsx(_,{children:(t==null?void 0:t.node_type)==="Tweet"?e.jsx(at,{href:`${qe}${(i=t==null?void 0:t.properties)==null?void 0:i.tweet_id}${qe.includes("?")?"&":"?"}open=system`,target:"_blank",children:(l=t==null?void 0:t.properties)==null?void 0:l.tweet_id}):e.jsx(at,{href:`${(a=t==null?void 0:t.properties)==null?void 0:a.source_link}${((n=t==null?void 0:t.properties)==null?void 0:n.source_link).includes("?")?"&":"?"}open=system`,target:"_blank",children:(c=t==null?void 0:t.properties)==null?void 0:c.source_link})}),e.jsx(_,{children:(p=t==null?void 0:t.properties)!=null&&p.status?Zo(t.properties.status):"Processing"})]})},at=m.a`
  color: ${d.white};
  text-decoration: underline;
  &:visited {
    color: ${d.white};
  }
`,qo=h.memo(Ko),Qo=({nodes:t})=>{const{open:r}=U("addContent"),o=async()=>{r()};return!t||(t==null?void 0:t.length)===0?e.jsx(e.Fragment,{children:e.jsxs(Xo,{children:[e.jsx(Jo,{align:"center",direction:"row",justify:"space-between",children:e.jsx(k,{className:"subtitle",children:"Contribute to the graph by adding content."})}),e.jsx(u,{children:e.jsx(Q,{color:"secondary",onClick:o,size:"medium",startIcon:e.jsx(Qr,{}),type:"submit",variant:"contained",children:"Add Content"})})]})}):e.jsxs(Ce,{component:"table",children:[e.jsx(_e,{children:e.jsxs(he,{component:"tr",children:[e.jsx(_,{className:"empty"}),e.jsx(_,{children:"Date"}),e.jsx(_,{children:"Type"}),e.jsx(_,{children:"Source"}),e.jsx(_,{children:"Status"})]})}),e.jsx("tbody",{children:t==null?void 0:t.map(s=>e.jsx(qo,{node:s},s==null?void 0:s.ref_id))})]})},Xo=Re(u)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 100px auto;
  width: 100%;
`,Jo=Re(u)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: 30px;

  .subtitle {
    color: ${d.GRAY3};
    font-family: Barlow;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`,es=()=>{const[t,r]=h.useState([]),[o,s]=h.useState(!0),[i,l]=h.useState(10),[a,n]=h.useState(!0),c={only_content:"true",sort_by:"date",limit:i.toString()},p=async()=>{s(!0);try{const x=await ir(c);r(x.nodes),s(!1)}catch(x){console.error("Error fetching data:",x),s(!1)}};h.useEffect(()=>{p()},[i]);const g=()=>{l(i+10),p()};return e.jsxs(ts,{direction:"column",justify:"flex-end",children:[e.jsx(Te,{align:"center",direction:"row",justify:"space-between",children:e.jsx(k,{className:"title",children:"Content I've added to the graph"})}),e.jsxs(rs,{align:"center",justify:o?"center":"flex-start",children:[o?e.jsx(P,{color:d.white}):e.jsx(e.Fragment,{children:e.jsx(Qo,{nodes:t})}),a?e.jsx(ns,{onClick:g,children:"Load more"}):e.jsx(os,{children:"No new nodes available"})]})]})},ts=m(u)`
  flex: 1;

  .title {
    font-size: 20px;
    color: ${d.white};
    font-family: Barlow;
    font-size: 22px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  .subtitle {
    color: ${d.GRAY3};
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
`,rs=m(u)`
  min-height: 0;
  overflow: auto;
  flex: 1;
  width: 100%;
`,ns=m(hn)`
  margin-top: 10px;
  background-color: #618aff;
  color: white;
  border: none;
  outline: none;
  border-radius: 3px;
  font-size: 14px;
  font-family: Barlow;
  padding: 5px;
  width: 80px;
`,os=m.div`
  margin-top: 10px;
  color: ${d.GRAY3};
  font-family: Barlow;
  font-size: 14px;
`,ss=[{label:Nt,component:es},{label:Ur,component:Qn},{label:Lt,component:On},{label:Et,component:Uo}],is=t=>{const{children:r,value:o,index:s,...i}=t;return o===s?e.jsx(ps,{"aria-labelledby":`simple-tab-${s}`,hidden:o!==s,id:`simple-tabpanel-${s}`,role:"tabpanel",...i,children:r}):null};function as(t){return{id:`simple-tab-${t}`,"aria-controls":`simple-tabpanel-${t}`}}const ls=()=>{const[t,r]=h.useState(0),[o]=de(n=>[n.isAdmin]),[s]=Wt(n=>[n.queuedSourcesFlag]),i=Ut(),l=(n,c)=>{r(c)},a=ss.filter(({label:n})=>n===Et?o:n===Lt?o&&s:n===Nt?i:!0);return e.jsxs(us,{direction:"column",children:[e.jsx(cs,{"aria-label":"sources tabs",onChange:l,value:t,children:a.map((n,c)=>e.jsx(ds,{color:d.white,disableRipple:!0,label:n.label,...as(c)},n.label))}),a.map((n,c)=>e.jsx(is,{index:c,value:t,children:e.jsx(n.component,{})},n.label))]})},cs=m(Jr)`
  && {
    background: rgba(0, 0, 0, 0.2);

    .MuiTabs-indicator {
      background: ${d.primaryBlue};
    }
  }
`,ds=m(en)`
  && {
    padding: 30px 0 24px;
    color: ${d.GRAY6};
    margin-left: 34px;
    font-family: Barlow;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;

    &.Mui-selected {
      color: ${d.white};
    }
  }
`,ps=m(u)`
  display: flex;
  flex: 1;
  min-height: 572px;
  padding: 20px 0;
  max-height: 572px;
`,us=m(u)`
  min-height: 0;
  flex: 1;
`,ge={required:{message:"The field is required",value:!0}},hs=({initialValues:t})=>{const r=pe({defaultValues:t,mode:"onSubmit"}),{isSubmitting:o}=r.formState,s=r.handleSubmit(async i=>{try{await ar(i)}catch(l){console.warn(l)}});return e.jsx(ue,{...r,children:e.jsx("form",{id:"add-node-form",onSubmit:s,children:e.jsxs(e.Fragment,{children:[e.jsxs(u,{children:[e.jsx(u,{pt:12,children:e.jsx(le,{id:"cy-about-title-id",label:"Graph Title",maxLength:50,name:"title",placeholder:"Type graph title here...",rules:{...ge}})}),e.jsx(u,{pt:12,children:e.jsx(le,{id:"cy-about-id",label:"Graph Description",maxLength:50,name:"description",placeholder:"Type graph description here...",rules:{...ge}})}),e.jsx(u,{pt:12,children:e.jsx(le,{id:"cy-about-mission_statement-id",label:"Mission Statement",maxLength:50,name:"mission_statement",placeholder:"Type mission statement here...",rules:{...ge}})}),e.jsx(u,{pt:12,children:e.jsx(le,{id:"cy-about-search_term-id",label:"Search Term",maxLength:50,name:"search_term",placeholder:"Type search term here...",rules:{...ge}})})]}),e.jsx(u,{pt:8,children:o?e.jsx(xs,{children:e.jsx(P,{color:d.white,size:20})}):e.jsx(It,{disabled:o,id:"add-node-submit-cta",kind:"big",type:"submit",children:"Save changes"})})]})})})},xs=m(u).attrs({align:"center",background:"primaryButton",borderRadius:8,justify:"center"})`
  padding: 16px 24px;
  opacity: 0.5;
`,fs=({initialValues:t})=>e.jsxs(e.Fragment,{children:[t.title&&e.jsxs(u,{pt:12,children:[e.jsx(k,{kind:"regular",children:"Graph Title"}),e.jsx(u,{pt:12,children:e.jsx(k,{className:"value",kind:"medium",children:t.title})})]}),t.description&&e.jsxs(u,{pt:12,children:[e.jsx(k,{kind:"regular",children:"Graph Description"}),e.jsx(u,{pt:12,children:e.jsx(k,{className:"value",kind:"medium",children:t.description})})]}),t.mission_statement&&e.jsxs(u,{pt:12,children:[e.jsx(k,{kind:"regular",children:"Mission Statement"}),e.jsx(u,{pt:12,children:e.jsx(k,{className:"value",kind:"medium",children:t.mission_statement})})]})]}),ms=()=>{const[t]=de(o=>[o.isAdmin]),r=se(o=>o.appMetaData);return e.jsxs(gs,{align:"stretch",direction:"column",justify:"flex-end",children:[e.jsx(js,{align:"center",direction:"row",justify:"space-between",children:e.jsx(k,{className:"title",children:"About"})}),e.jsx(ys,{align:"stretch",justify:"flex-start",children:t?e.jsx(hs,{initialValues:r}):e.jsx(fs,{initialValues:r})})]})},gs=m(u)`
  border-radius: 8px;
  box-shadow: 0px 5px 6px rgb(0 0 0 / 50%);
  padding: 16px;
  flex: 1;

  .title {
    margin-bottom: 16px;
    font-size: 20px;
  }

  .value {
    color: ${d.lightBlue400};
  }
`,ys=m(u)`
  min-height: 0;
  overflow: auto;
  flex: 1;
  width: 100%;
`,js=m(u)`
  margin-bottom: 16px;
  ${k} {
    margin-bottom: 0;
  }
`;var bs=["type","layout","connectNulls","ref"];function ne(t){"@babel/helpers - typeof";return ne=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},ne(t)}function Cs(t,r){if(t==null)return{};var o=ws(t,r),s,i;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(i=0;i<l.length;i++)s=l[i],!(r.indexOf(s)>=0)&&Object.prototype.propertyIsEnumerable.call(t,s)&&(o[s]=t[s])}return o}function ws(t,r){if(t==null)return{};var o={},s=Object.keys(t),i,l;for(l=0;l<s.length;l++)i=s[l],!(r.indexOf(i)>=0)&&(o[i]=t[i]);return o}function ce(){return ce=Object.assign?Object.assign.bind():function(t){for(var r=1;r<arguments.length;r++){var o=arguments[r];for(var s in o)Object.prototype.hasOwnProperty.call(o,s)&&(t[s]=o[s])}return t},ce.apply(this,arguments)}function lt(t,r){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);r&&(s=s.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),o.push.apply(o,s)}return o}function D(t){for(var r=1;r<arguments.length;r++){var o=arguments[r]!=null?arguments[r]:{};r%2?lt(Object(o),!0).forEach(function(s){z(t,s,o[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):lt(Object(o)).forEach(function(s){Object.defineProperty(t,s,Object.getOwnPropertyDescriptor(o,s))})}return t}function J(t){return Ts(t)||_s(t)||Ss(t)||vs()}function vs(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ss(t,r){if(t){if(typeof t=="string")return ze(t,r);var o=Object.prototype.toString.call(t).slice(8,-1);if(o==="Object"&&t.constructor&&(o=t.constructor.name),o==="Map"||o==="Set")return Array.from(t);if(o==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return ze(t,r)}}function _s(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Ts(t){if(Array.isArray(t))return ze(t)}function ze(t,r){(r==null||r>t.length)&&(r=t.length);for(var o=0,s=new Array(r);o<r;o++)s[o]=t[o];return s}function ks(t,r){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")}function ct(t,r){for(var o=0;o<r.length;o++){var s=r[o];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,Dt(s.key),s)}}function As(t,r,o){return r&&ct(t.prototype,r),o&&ct(t,o),Object.defineProperty(t,"prototype",{writable:!1}),t}function $s(t,r){if(typeof r!="function"&&r!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(r&&r.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),r&&Oe(t,r)}function Oe(t,r){return Oe=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(s,i){return s.__proto__=i,s},Oe(t,r)}function Es(t){var r=Ns();return function(){var s=je(t),i;if(r){var l=je(this).constructor;i=Reflect.construct(s,arguments,l)}else i=s.apply(this,arguments);return Ls(this,i)}}function Ls(t,r){if(r&&(ne(r)==="object"||typeof r=="function"))return r;if(r!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return W(t)}function W(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function Ns(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function je(t){return je=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(o){return o.__proto__||Object.getPrototypeOf(o)},je(t)}function z(t,r,o){return r=Dt(r),r in t?Object.defineProperty(t,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[r]=o,t}function Dt(t){var r=Ps(t,"string");return ne(r)==="symbol"?r:String(r)}function Ps(t,r){if(ne(t)!=="object"||t===null)return t;var o=t[Symbol.toPrimitive];if(o!==void 0){var s=o.call(t,r||"default");if(ne(s)!=="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(t)}var xe=function(t){$s(o,t);var r=Es(o);function o(){var s;ks(this,o);for(var i=arguments.length,l=new Array(i),a=0;a<i;a++)l[a]=arguments[a];return s=r.call.apply(r,[this].concat(l)),z(W(s),"state",{isAnimationFinished:!0,totalLength:0}),z(W(s),"generateSimpleStrokeDasharray",function(n,c){return"".concat(c,"px ").concat(n-c,"px")}),z(W(s),"getStrokeDasharray",function(n,c,p){var g=p.reduce(function(A,L){return A+L});if(!g)return s.generateSimpleStrokeDasharray(c,n);for(var x=Math.floor(n/g),y=n%g,j=c-n,b=[],f=0,C=0;f<p.length;C+=p[f],++f)if(C+p[f]>y){b=[].concat(J(p.slice(0,f)),[y-C]);break}var w=b.length%2===0?[0,j]:[j];return[].concat(J(o.repeat(p,x)),J(b),w).map(function(A){return"".concat(A,"px")}).join(", ")}),z(W(s),"id",mr("recharts-line-")),z(W(s),"pathRef",function(n){s.mainCurve=n}),z(W(s),"handleAnimationEnd",function(){s.setState({isAnimationFinished:!0}),s.props.onAnimationEnd&&s.props.onAnimationEnd()}),z(W(s),"handleAnimationStart",function(){s.setState({isAnimationFinished:!1}),s.props.onAnimationStart&&s.props.onAnimationStart()}),s}return As(o,[{key:"componentDidMount",value:function(){if(this.props.isAnimationActive){var i=this.getTotalLength();this.setState({totalLength:i})}}},{key:"componentDidUpdate",value:function(){if(this.props.isAnimationActive){var i=this.getTotalLength();i!==this.state.totalLength&&this.setState({totalLength:i})}}},{key:"getTotalLength",value:function(){var i=this.mainCurve;try{return i&&i.getTotalLength&&i.getTotalLength()||0}catch{return 0}}},{key:"renderErrorBar",value:function(i,l){if(this.props.isAnimationActive&&!this.state.isAnimationFinished)return null;var a=this.props,n=a.points,c=a.xAxis,p=a.yAxis,g=a.layout,x=a.children,y=gr(x,yr);if(!y)return null;var j=function(C,w){return{x:C.x,y:C.y,value:C.value,errorVal:vt(C.payload,w)}},b={clipPath:i?"url(#clipPath-".concat(l,")"):null};return B.createElement(ke,b,y.map(function(f){return B.cloneElement(f,{key:"bar-".concat(f.props.dataKey),data:n,xAxis:c,yAxis:p,layout:g,dataPointFormatter:j})}))}},{key:"renderDots",value:function(i,l,a){var n=this.props.isAnimationActive;if(n&&!this.state.isAnimationFinished)return null;var c=this.props,p=c.dot,g=c.points,x=c.dataKey,y=me(this.props),j=me(p,!0),b=g.map(function(C,w){var A=D(D(D({key:"dot-".concat(w),r:3},y),j),{},{value:C.value,dataKey:x,cx:C.x,cy:C.y,index:w,payload:C.payload});return o.renderDotItem(p,A)}),f={clipPath:i?"url(#clipPath-".concat(l?"":"dots-").concat(a,")"):null};return B.createElement(ke,ce({className:"recharts-line-dots",key:"dots"},f),b)}},{key:"renderCurveStatically",value:function(i,l,a,n){var c=this.props,p=c.type,g=c.layout,x=c.connectNulls;c.ref;var y=Cs(c,bs),j=D(D(D({},me(y,!0)),{},{fill:"none",className:"recharts-line-curve",clipPath:l?"url(#clipPath-".concat(a,")"):null,points:i},n),{},{type:p,layout:g,connectNulls:x});return B.createElement(jr,ce({},j,{pathRef:this.pathRef}))}},{key:"renderCurveWithAnimation",value:function(i,l){var a=this,n=this.props,c=n.points,p=n.strokeDasharray,g=n.isAnimationActive,x=n.animationBegin,y=n.animationDuration,j=n.animationEasing,b=n.animationId,f=n.animateNewValues,C=n.width,w=n.height,A=this.state,L=A.prevPoints,T=A.totalLength;return B.createElement(br,{begin:x,duration:y,isActive:g,easing:j,from:{t:0},to:{t:1},key:"line-".concat(b),onAnimationEnd:this.handleAnimationEnd,onAnimationStart:this.handleAnimationStart},function(I){var E=I.t;if(L){var H=L.length/c.length,F=c.map(function(N,fe){var S=Math.floor(fe*H);if(L[S]){var v=L[S],$=ie(v.x,N.x),O=ie(v.y,N.y);return D(D({},N),{},{x:$(E),y:O(E)})}if(f){var Mt=ie(C*2,N.x),zt=ie(w/2,N.y);return D(D({},N),{},{x:Mt(E),y:zt(E)})}return D(D({},N),{},{x:N.x,y:N.y})});return a.renderCurveStatically(F,i,l)}var X=ie(0,T),Y=X(E),Z;if(p){var K="".concat(p).split(/[,\s]+/gim).map(function(N){return parseFloat(N)});Z=a.getStrokeDasharray(Y,T,K)}else Z=a.generateSimpleStrokeDasharray(T,Y);return a.renderCurveStatically(c,i,l,{strokeDasharray:Z})})}},{key:"renderCurve",value:function(i,l){var a=this.props,n=a.points,c=a.isAnimationActive,p=this.state,g=p.prevPoints,x=p.totalLength;return c&&n&&n.length&&(!g&&x>0||!Cr(g,n))?this.renderCurveWithAnimation(i,l):this.renderCurveStatically(n,i,l)}},{key:"render",value:function(){var i,l=this.props,a=l.hide,n=l.dot,c=l.points,p=l.className,g=l.xAxis,x=l.yAxis,y=l.top,j=l.left,b=l.width,f=l.height,C=l.isAnimationActive,w=l.id;if(a||!c||!c.length)return null;var A=this.state.isAnimationFinished,L=c.length===1,T=Ze("recharts-line",p),I=g&&g.allowDataOverflow,E=x&&x.allowDataOverflow,H=I||E,F=Ie(w)?this.id:w,X=(i=me(n))!==null&&i!==void 0?i:{r:3,strokeWidth:2},Y=X.r,Z=Y===void 0?3:Y,K=X.strokeWidth,N=K===void 0?2:K,fe=wr(n)?n:{},S=fe.clipDot,v=S===void 0?!0:S,$=Z*2+N;return B.createElement(ke,{className:T},I||E?B.createElement("defs",null,B.createElement("clipPath",{id:"clipPath-".concat(F)},B.createElement("rect",{x:I?j:j-b/2,y:E?y:y-f/2,width:I?b:b*2,height:E?f:f*2})),!v&&B.createElement("clipPath",{id:"clipPath-dots-".concat(F)},B.createElement("rect",{x:j-$/2,y:y-$/2,width:b+$,height:f+$}))):null,!L&&this.renderCurve(H,F),this.renderErrorBar(H,F),(L||n)&&this.renderDots(H,v,F),(!C||A)&&vr.renderCallByParent(this.props,c))}}],[{key:"getDerivedStateFromProps",value:function(i,l){return i.animationId!==l.prevAnimationId?{prevAnimationId:i.animationId,curPoints:i.points,prevPoints:l.curPoints}:i.points!==l.curPoints?{curPoints:i.points}:null}},{key:"repeat",value:function(i,l){for(var a=i.length%2!==0?[].concat(J(i),[0]):i,n=[],c=0;c<l;++c)n=[].concat(J(n),J(a));return n}},{key:"renderDotItem",value:function(i,l){var a;if(B.isValidElement(i))a=B.cloneElement(i,l);else if(Gt(i))a=i(l);else{var n=Ze("recharts-line-dot",i?i.className:"");a=B.createElement(wt,ce({},l,{className:n}))}return a}}]),o}(h.PureComponent);z(xe,"displayName","Line");z(xe,"defaultProps",{xAxisId:0,yAxisId:0,connectNulls:!1,activeDot:!0,dot:!0,legendType:"line",stroke:"#3182bd",strokeWidth:1,fill:"#fff",points:[],isAnimationActive:!fr.isSsr,animateNewValues:!0,animationBegin:0,animationDuration:1500,animationEasing:"ease",hide:!1,label:!1});z(xe,"getComposedData",function(t){var r=t.props,o=t.xAxis,s=t.yAxis,i=t.xAxisTicks,l=t.yAxisTicks,a=t.dataKey,n=t.bandSize,c=t.displayedData,p=t.offset,g=r.layout,x=c.map(function(y,j){var b=vt(y,a);return g==="horizontal"?{x:Ke({axis:o,ticks:i,bandSize:n,entry:y,index:j}),y:Ie(b)?null:s.scale(b),value:b,payload:y}:{x:Ie(b)?null:o.scale(b),y:Ke({axis:s,ticks:l,bandSize:n,entry:y,index:j}),value:b,payload:y}});return D({points:x,layout:g},p)});var Bs=Sr({chartName:"LineChart",GraphicalChild:xe,axisComponents:[{axisType:"xAxis",AxisComp:St},{axisType:"yAxis",AxisComp:_t}],formatAxisMap:_r});const Is=({cx:t,cy:r})=>e.jsx(wt,{cx:t,cy:r,fill:d.blueTextAccent,r:2}),Ds=({data:t,width:r=500,height:o=300})=>e.jsx(e.Fragment,{children:(t==null?void 0:t.length)&&e.jsxs(Bs,{data:t,height:o,id:"cy-sentiment-chart",margin:{bottom:5,left:-20,right:30,top:5},width:r,children:[e.jsx(Tr,{stroke:d.lightBlue300,strokeDasharray:"5 5"}),e.jsx(St,{dataKey:"date",interval:Math.floor(t.length/3),stroke:d.blueTextAccent}),e.jsx(_t,{domain:[0,10],stroke:d.blueTextAccent}),e.jsx(kr,{}),e.jsx(xe,{dataKey:"score",dot:e.jsx(Is,{}),stroke:"#8884d8",type:"monotone"})]})}),Ms=()=>{const[t,r]=h.useState(void 0),[o]=de(a=>[a.setBudget]),[s,i]=h.useState(!1),l=async()=>{i(!0),lr(o).then(async a=>{r(a==null?void 0:a.data.filter(n=>n.date).map(n=>({date:Yt.unix(Number(String(n.date).split(".")[0])).format("MM/DD/YY"),score:n.sentiment_score}))),await ht(o)}).catch().finally(()=>{i(!1)})};return e.jsxs(zs,{align:"flex-start",direction:"column",id:"cy-sentiment-chart-wrapper",justify:"flex-end",children:[e.jsx(k,{className:"title",children:"Sentiment chart"}),s&&e.jsx(qr,{alignItems:"center",component:"div",flexGrow:1,p:4,spacing:2,width:"100%",children:e.jsx(Ht,{color:d.white})}),!(t!=null&&t.length)&&e.jsx(Os,{className:"button",id:"cy-get-sentiments-btn",onClick:l,children:"Get top 100 sentiments"}),e.jsx(Ds,{data:t})]})},zs=m(u)`
  border-radius: 8px;
  box-shadow: 0px 5px 6px rgb(0 0 0 / 50%);
  padding: 16px;

  .title {
    margin-bottom: 16px;
    font-size: 20px;
  }
`,Os=m(It)`
  height: 48px;
`,Rs=600,Fs={about:e.jsx(ms,{}),sentiment:e.jsx(Ms,{}),sources:e.jsx(ls,{}),"":null},Vs=()=>{const[t,r]=se(o=>[o.secondarySidebarActiveTab,o.setSecondarySidebarActiveTab]);return e.jsx(Ar,{direction:"left",in:!!t,mountOnEnter:!0,unmountOnExit:!0,children:e.jsxs(Ws,{id:"secondary-sidebar-wrapper",children:[e.jsx(Us,{id:"cy-close-secondary-sidebar",onClick:()=>r(""),children:e.jsx(Tt,{})}),Fs[t]]})})},Ws=m(u)(({theme:t})=>({background:d.BG1,height:"100vh",padding:"16px 20px",width:"100%",zIndex:30,display:"flex",[t.breakpoints.up("sm")]:{width:Rs}})),Us=m(u).attrs({align:"center",justify:"center",p:5})`
  background-color: ${d.inputBg1};
  border-radius: 50%;
  color: ${d.mainBottomIcons};
  cursor: pointer;
  transition-duration: 0.2s;
  align-self: flex-end;
  margin-bottom: 16px;

  &:hover {
    background-color: ${d.gray200};
  }
`,Gs=m(cr)`
  .Toastify__toast {
    background-color: #49c998ff;
  }
  .Toastify__toast-body {
    background-color: #49c998ff;
    color: ${d.white};
  }
  .Toastify__close-button {
    color: ${d.white};
  }
  .Toastify__progress-bar--error {
    background-color: ${d.primaryRed};
  }
  .Toastify__progress-bar--success {
    background-color: ${d.primaryGreen};
  }
`,Hs=m(u)`
  height: 100%;
  width: 100%;
  background-color: ${d.black};
`,Ys=m(u)`
  position: absolute;
  bottom: 8px;
  left: 8px;
  color: ${d.white};
  font-size: 12px;
  opacity: 0.5;
`,Zs=h.lazy(()=>R(()=>import("./index-47e32659.js"),["assets/index-47e32659.js","assets/index-46d141aa.js","assets/index-3f17fe3b.css","assets/SourcesTableIcon-0f7a840d.js","assets/SettingsIcon-8fe19a33.js","assets/index-d3539116.js"]).then(({MainToolbar:t})=>({default:t}))),Ks=h.lazy(()=>R(()=>import("./index-76c27677.js"),["assets/index-76c27677.js","assets/index-46d141aa.js","assets/index-3f17fe3b.css","assets/EditIcon-5ce7b809.js","assets/react-toastify.esm-b72bdd97.js","assets/react-toastify-b60658ac.css","assets/generateCategoricalChart-922aa0c9.js","assets/Popover-38a90144.js","assets/useSlotProps-ef777a65.js","assets/InfoIcon-b93d2538.js","assets/index-3c8a9382.js","assets/index.esm-9dacb6fc.js","assets/PlusIcon-c1c19cae.js","assets/index-d3539116.js","assets/ChevronUpIcon-97a50754.js","assets/ChevronDownIcon-fb872096.js","assets/index-8235a399.js","assets/index-26cd0cfc.js","assets/index-029e5c8b.js","assets/index-46fe460b.js","assets/Popper-dc52e1c1.js","assets/CheckIcon-6373215b.js","assets/Stack-ee78f086.js"]).then(({Universe:t})=>({default:t}))),qs=h.lazy(()=>R(()=>import("./index-95a5b387.js"),["assets/index-95a5b387.js","assets/index-46d141aa.js","assets/index-3f17fe3b.css","assets/react-toastify.esm-b72bdd97.js","assets/react-toastify-b60658ac.css","assets/CheckIcon-6373215b.js","assets/ChevronDownIcon-fb872096.js","assets/ChevronUpIcon-97a50754.js","assets/index-8235a399.js","assets/useSlotProps-ef777a65.js","assets/Popover-38a90144.js","assets/ChevronRightIcon-3f53e1ef.js","assets/Select-f70a3977.js","assets/generateCategoricalChart-922aa0c9.js","assets/InfoIcon-b93d2538.js","assets/index.esm-9dacb6fc.js","assets/toastMessage-ac4ca044.js","assets/ChevronRightIcon-6125620a.css","assets/index-8f74408f.js","assets/index-3c8a9382.js","assets/Skeleton-804a1f5f.js","assets/PlusIcon-c1c19cae.js","assets/index-d3539116.js","assets/index-46fe460b.js"]).then(({SideBar:t})=>({default:t}))),Qs=()=>{const[t,r]=de(E=>[E.setBudget,E.setNodeCount]),[o,s]=h.useState(!1),{setSidebarOpen:i,currentSearch:l,setCurrentSearch:a,setRelevanceSelected:n,setTranscriptOpen:c}=se(E=>E),p=$r(E=>E.setTeachMeAnswer),{data:g,setData:x,fetchData:y,graphStyle:j,setSelectedNode:b,setCategoryFilter:f}=oe(E=>E),C=dr(),w=pe({mode:"onChange"}),A=w.handleSubmit(({search:E})=>{c(!1),b(null),n(!1),a(E),p(""),f(null)}),L=h.useCallback(async()=>{await y(t,{...l?{word:l}:{}}),i(!0),l?await ht(t):b(null)},[y,t,l,i,b]);h.useEffect(()=>{L()},[l,L]);const T=()=>{if(g){s(!0);const E=xr(j,g.nodes);setTimeout(()=>{x(E),s(!1)},1e3)}};h.useEffect(()=>{T()},[j]);const I=h.useCallback(()=>{r("INCREMENT")},[r]);return h.useEffect(()=>{C&&(C.on("connect_error",E=>{console.error("Socket connection error:",E)}),C.on("newnode",I))},[C,I]),h.useEffect(()=>()=>{C&&C.disconnect()},[C]),e.jsxs(e.Fragment,{children:[e.jsx(pr,{}),e.jsx(Pn,{}),e.jsx(ur,{hidden:!Zt}),e.jsx(h.Suspense,{fallback:e.jsx("div",{children:"Loading..."}),children:e.jsxs(Hs,{direction:"row",children:[e.jsx(Er,{children:e.jsxs(ue,{...w,children:[e.jsx(Zs,{}),e.jsx(qs,{onSubmit:A}),e.jsx(Ks,{}),o&&e.jsx(bn,{fullSize:!1}),e.jsx(yn,{}),e.jsx(Vs,{}),e.jsx(En,{}),e.jsxs(Ys,{children:["v",hr]}),e.jsx(gt,{})]})}),e.jsx($n,{}),e.jsx(Gs,{}),e.jsx(Mn,{})]})})]})},fi=Object.freeze(Object.defineProperty({__proto__:null,App:Qs},Symbol.toStringTag,{value:"Module"}));export{yn as O,bn as P,Se as S,_ as a,_e as b,ls as c,fi as i};
