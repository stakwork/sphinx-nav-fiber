import{g as xt,a as ft,s as Re,c as mt,_ as G,r as h,u as Ft,b as gt,j as e,d as Vt,e as yt,F as u,T as k,f as x,h as d,i as se,k as ie,l as q,m as W,n as Wt,S as Ut,o as Gt,p as Ht,q as jt,t as bt,v as He,Y as Ye,R as Ze,w as Yt,x as pe,y as Ct,z as vt,A as Zt,B as Kt,C as qt,D as Fe,E as Qt,G as D,H as Xt,I as Jt,J as er,K as tr,L as rr,M as nr,N as or,O as wt,P as sr,Q as ir}from"./index-8c6e7d86.js";import{u as ar,a as lr,A as cr,b as St,C as I,c as dr,B as J,I as Z,d as X,S as be,e as ue,F as he,Q as pr,f as ur,G as hr,L as xr,v as fr}from"./react-toastify.esm-fcf4c1e7.js";import{f as Ke,G as mr,u as gr,c as qe,D as _t,a as yr,E as jr,L as ke,b as me,C as br,A as Cr,i as ae,d as vr,e as Ie,g as wr,h as Sr,j as Tt,k as Qe,l as _r,X as kt,Y as At,m as Tr,n as kr,T as Ar,P as $r,S as Er,o as Lr,p as Nr}from"./generateCategoricalChart-d76b6bfd.js";import{M as Pr,a as Br,b as Ir,c as Dr,d as $t,e as Mr}from"./index.esm-5e8d1785.js";import{T as Or,a as re,b as zr,F as De,M as Ce,C as Et,N as Rr,c as Fr,D as Lt,d as Vr}from"./ChevronUpIcon-823264dd.js";import{s as ne,T as Nt,A as Ve,u as z,I as Wr,E as Ur,D as Gr,a as Xe,b as Pt,Q as Bt,V as It,S as Hr}from"./index-521d6d55.js";import{P as ve,I as we,a as We,F as Yr}from"./Popover-94860109.js";import{B as Zr,T as ce}from"./index-c3d690f6.js";import{u as K}from"./index-3a2e60ff.js";import{B as Ue}from"./index-2db2798f.js";import{u as Kr,P as Dt}from"./Popper-d3638f43.js";import{C as Ge}from"./CheckIcon-22266ff6.js";import{C as qr}from"./ChevronDownIcon-ec5e4f6b.js";import{e as Qr,S as Xr}from"./Stack-a08a5235.js";import{P as Jr}from"./PlusIcon-b3e2a8bf.js";import{e as Je,u as en}from"./useSlotProps-723c9ba2.js";import{T as tn,a as rn,B as Mt}from"./index-d010b8aa.js";function nn(t){return xt("MuiTypography",t)}ft("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);const on=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],sn=t=>{const{align:r,gutterBottom:o,noWrap:s,paragraph:i,variant:a,classes:l}=t,n={root:["root",a,t.align!=="inherit"&&`align${mt(r)}`,o&&"gutterBottom",s&&"noWrap",i&&"paragraph"]};return yt(n,nn,l)},an=Re("span",{name:"MuiTypography",slot:"Root",overridesResolver:(t,r)=>{const{ownerState:o}=t;return[r.root,o.variant&&r[o.variant],o.align!=="inherit"&&r[`align${mt(o.align)}`],o.noWrap&&r.noWrap,o.gutterBottom&&r.gutterBottom,o.paragraph&&r.paragraph]}})(({theme:t,ownerState:r})=>G({margin:0},r.variant==="inherit"&&{font:"inherit"},r.variant!=="inherit"&&t.typography[r.variant],r.align!=="inherit"&&{textAlign:r.align},r.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},r.gutterBottom&&{marginBottom:"0.35em"},r.paragraph&&{marginBottom:16})),et={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},ln={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},cn=t=>ln[t]||t,dn=h.forwardRef(function(r,o){const s=Ft({props:r,name:"MuiTypography"}),i=cn(s.color),a=Qr(G({},s,{color:i})),{align:l="inherit",className:n,component:c,gutterBottom:p=!1,noWrap:g=!1,paragraph:m=!1,variant:y="body1",variantMapping:j=et}=a,b=gt(a,on),f=G({},a,{align:l,color:i,className:n,component:c,gutterBottom:p,noWrap:g,paragraph:m,variant:y,variantMapping:j}),C=c||(m?"p":j[y]||et[y])||"span",S=sn(f);return e.jsx(an,G({as:C,ref:o,ownerState:f,className:Vt(S.root,n)},b))}),tt=dn;function pn(t){return xt("MuiButton",t)}ft("MuiButton",["root","active","disabled","focusVisible"]);function un(t={}){const{disabled:r=!1,focusableWhenDisabled:o,href:s,rootRef:i,tabIndex:a,to:l,type:n}=t,c=h.useRef(),[p,g]=h.useState(!1),{isFocusVisibleRef:m,onFocus:y,onBlur:j,ref:b}=ar(),[f,C]=h.useState(!1);r&&!o&&f&&C(!1),h.useEffect(()=>{m.current=f},[f,m]);const[S,L]=h.useState(""),N=T=>v=>{var E;f&&v.preventDefault(),(E=T.onMouseLeave)==null||E.call(T,v)},B=T=>v=>{var E;j(v),m.current===!1&&C(!1),(E=T.onBlur)==null||E.call(T,v)},$=T=>v=>{var E;if(c.current||(c.current=v.currentTarget),y(v),m.current===!0){var V;C(!0),(V=T.onFocusVisible)==null||V.call(T,v)}(E=T.onFocus)==null||E.call(T,v)},w=()=>{const T=c.current;return S==="BUTTON"||S==="INPUT"&&["button","submit","reset"].includes(T==null?void 0:T.type)||S==="A"&&(T==null?void 0:T.href)},M=T=>v=>{if(!r){var E;(E=T.onClick)==null||E.call(T,v)}},A=T=>v=>{var E;r||(g(!0),document.addEventListener("mouseup",()=>{g(!1)},{once:!0})),(E=T.onMouseDown)==null||E.call(T,v)},R=T=>v=>{var E;if((E=T.onKeyDown)==null||E.call(T,v),!v.defaultMuiPrevented&&(v.target===v.currentTarget&&!w()&&v.key===" "&&v.preventDefault(),v.target===v.currentTarget&&v.key===" "&&!r&&g(!0),v.target===v.currentTarget&&!w()&&v.key==="Enter"&&!r)){var V;(V=T.onClick)==null||V.call(T,v),v.preventDefault()}},H=T=>v=>{var E;if(v.target===v.currentTarget&&g(!1),(E=T.onKeyUp)==null||E.call(T,v),v.target===v.currentTarget&&!w()&&!r&&v.key===" "&&!v.defaultMuiPrevented){var V;(V=T.onClick)==null||V.call(T,v)}},U=h.useCallback(T=>{var v;L((v=T==null?void 0:T.tagName)!=null?v:"")},[]),Q=lr(U,i,b,c),P={};return a!==void 0&&(P.tabIndex=a),S==="BUTTON"?(P.type=n??"button",o?P["aria-disabled"]=r:P.disabled=r):S!==""&&(!s&&!l&&(P.role="button",P.tabIndex=a??0),r&&(P["aria-disabled"]=r,P.tabIndex=o?a??0:-1)),{getRootProps:(T={})=>{const v=G({},Je(t),Je(T)),E=G({type:n},v,P,T,{onBlur:B(v),onClick:M(v),onFocus:$(v),onKeyDown:R(v),onKeyUp:H(v),onMouseDown:A(v),onMouseLeave:N(v),ref:Q});return delete E.onFocusVisible,E},focusVisible:f,setFocusVisible:C,active:p,rootRef:Q}}const hn=["action","children","disabled","focusableWhenDisabled","onFocusVisible","slotProps","slots"],xn=t=>{const{active:r,disabled:o,focusVisible:s}=t;return yt({root:["root",o&&"disabled",s&&"focusVisible",r&&"active"]},Kr(pn))},fn=h.forwardRef(function(r,o){var s;const{action:i,children:a,focusableWhenDisabled:l=!1,slotProps:n={},slots:c={}}=r,p=gt(r,hn),g=h.useRef(),{active:m,focusVisible:y,setFocusVisible:j,getRootProps:b}=un(G({},r,{focusableWhenDisabled:l}));h.useImperativeHandle(i,()=>({focusVisible:()=>{j(!0),g.current.focus()}}),[j]);const f=G({},r,{active:m,focusableWhenDisabled:l,focusVisible:y}),C=xn(f),S=p.href||p.to?"a":"button",L=(s=c.root)!=null?s:S,N=en({elementType:L,getSlotProps:b,externalForwardedProps:p,externalSlotProps:n.root,additionalProps:{ref:o},ownerState:f,className:C.root});return e.jsx(L,G({},N,{children:a}))});function Me(t){const r=new Date(Number(t)*1e3),o=r.getFullYear(),s=(1+r.getMonth()).toString().padStart(2,"0");return`${r.getDate().toString().padStart(2,"0")}/${s}/${o}`}const mn=({twitterHandle:t})=>e.jsx(e.Fragment,{children:e.jsx(u,{direction:"row",children:e.jsx(u,{align:"flex-start",pb:12,children:e.jsxs(k,{children:["Tweet by @",t]})})})}),gn=x(u)(({theme:t})=>({position:"absolute",top:"65px",right:"55px",width:"300px",pointerEvents:"none",background:d.dashboardHeader,boxShadow:"0px 1px 6px rgba(0, 0, 0, 0.1)",color:d.primaryText1,zIndex:100,transition:"opacity 0.6s",padding:t.spacing(2,3),[t.breakpoints.down("sm")]:{padding:t.spacing(1,1.5)}})),yn=x(u)`
  width: 22.5%;
`,jn=({node:t})=>{if(!t)return null;const{node_type:r,show_title:o,episode_title:s,description:i,label:a,text:l,type:n,twitter_handle:c}=t,p=t.guests;let g=!1,m=!1;p&&(p.length&&p[0]!==null&&(g=!0),typeof p[0]=="object"&&(m=!0));let y=t.image_url;if(n==="twitter_space"&&(y="twitter_placeholder.png"),y==null)switch(r){case"guest":y="person_placeholder2.png";break;default:y="noimage.jpeg"}return r==="topic"?null:e.jsx(gn,{borderRadius:8,px:24,py:16,children:r==="tweet"?e.jsx(mn,{twitterHandle:c}):e.jsxs(e.Fragment,{children:[e.jsxs(u,{direction:"row",children:[e.jsx(yn,{}),e.jsx(u,{align:"flex-start",pb:12,children:e.jsx(k,{children:r==null?void 0:r.toUpperCase()})})]}),e.jsxs(u,{direction:"row",children:[e.jsx(u,{pr:12,children:e.jsx(cr,{src:y,type:"person"})}),e.jsxs("div",{children:[n==="guest"?e.jsxs(u,{direction:"column",children:[e.jsx(k,{children:a}),l&&e.jsx(u,{pt:4,children:e.jsxs(k,{color:"primaryText1",kind:"tiny",children:["@",l]})})]}):e.jsx(k,{color:"primaryText1",kind:"tiny",children:o}),e.jsxs(u,{pt:4,children:[r==="clip"||r==="episode"&&e.jsx(k,{color:"primaryText1",children:"Episode"}),r==="clip"?e.jsx(k,{as:"div",kind:"regularBold",children:Ke(i)}):e.jsx(k,{color:"primaryText1",kind:"tiny",children:s})]}),e.jsxs(u,{pt:12,children:[r==="clip"&&e.jsx(k,{color:"primaryText1",children:"Episode"}),e.jsx(k,{color:"primaryText1",kind:"tiny",children:r==="clip"?s:Ke(i)})]}),g&&e.jsxs(u,{pt:12,children:[e.jsx(k,{color:"primaryText1",children:"People"}),e.jsx(u,{pt:4,children:e.jsx(k,{color:"primaryText1",kind:"tiny",children:m?p.map(j=>j.name?j.name:`@${j.twitter_handle}`).join(", "):p==null?void 0:p.join(", ")})})]})]})]})]})})},bn=()=>{const[t]=se(r=>[r.hoveredNode]);return e.jsxs(Cn,{children:[t&&e.jsx("div",{id:"tooltip-portal",children:e.jsx(jn,{node:t})}),e.jsx(St,{})]})},Cn=x("div")(({theme:t})=>({position:"absolute",zIndex:1,top:0,left:0,userSelect:"none",pointerEvents:"none",display:"flex",justifyContent:"flex-end",alignItems:"flex-start",height:"100%",width:"100%",padding:"16px",[t.breakpoints.down("sm")]:{top:50}})),vn=({fullSize:t=!0})=>{const r=ie(o=>o.sidebarIsOpen);return e.jsx(wn,{align:"center",className:q({"sidebar-is-open":r&&!t}),justify:"center",children:e.jsx(I,{color:d.SECONDARY_BLUE,size:64})})},wn=x(u)`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  background-color: ${d.black};
  z-index: 1;
`,Sn=h.lazy(()=>W(()=>import("./index-c2d759e8.js"),["assets/index-c2d759e8.js","assets/index-8c6e7d86.js","assets/index-3f17fe3b.css","assets/index-2db2798f.js","assets/index-3a2e60ff.js","assets/react-toastify.esm-fcf4c1e7.js","assets/react-toastify-b60658ac.css","assets/index-d010b8aa.js","assets/useSlotProps-723c9ba2.js","assets/index-c3d690f6.js","assets/index.esm-5e8d1785.js","assets/InfoIcon-27e3afdb.js","assets/index-e4298840.js","assets/Popover-94860109.js","assets/Select-b8024a9f.js","assets/Stack-a08a5235.js","assets/Popper-d3638f43.js","assets/index-30d16895.js","assets/constants-cde8ebc3.js","assets/DeleteIcon-190da877.js","assets/PlusIcon-b3e2a8bf.js","assets/EditIcon-80229cd3.js","assets/ChevronUpIcon-823264dd.js","assets/ChevronDownIcon-ec5e4f6b.js","assets/generateCategoricalChart-d76b6bfd.js","assets/index-521d6d55.js","assets/CheckIcon-22266ff6.js"]).then(({SettingsModal:t})=>({default:t}))),_n=h.lazy(()=>W(()=>import("./index-f72ac725.js"),["assets/index-f72ac725.js","assets/index-8c6e7d86.js","assets/index-3f17fe3b.css","assets/react-toastify.esm-fcf4c1e7.js","assets/react-toastify-b60658ac.css","assets/index-2db2798f.js","assets/index-3a2e60ff.js","assets/index-c7a8533b.js","assets/index.esm-5e8d1785.js","assets/CheckIcon-22266ff6.js","assets/index-c3d690f6.js","assets/InfoIcon-27e3afdb.js"]).then(({AddContentModal:t})=>({default:t}))),Tn=h.lazy(()=>W(()=>import("./index-9d63373b.js"),["assets/index-9d63373b.js","assets/index-8c6e7d86.js","assets/index-3f17fe3b.css","assets/react-toastify.esm-fcf4c1e7.js","assets/react-toastify-b60658ac.css","assets/index-2db2798f.js","assets/index-3a2e60ff.js","assets/index-c7a8533b.js","assets/index.esm-5e8d1785.js","assets/CheckIcon-22266ff6.js","assets/index-c3d690f6.js","assets/InfoIcon-27e3afdb.js","assets/index-30d16895.js","assets/index-e4298840.js","assets/Popover-94860109.js","assets/useSlotProps-723c9ba2.js","assets/Select-b8024a9f.js","assets/Stack-a08a5235.js","assets/Popper-d3638f43.js","assets/constants-cde8ebc3.js"]).then(({AddItemModal:t})=>({default:t}))),kn=h.lazy(()=>W(()=>import("./index-5ae9880e.js"),["assets/index-5ae9880e.js","assets/index-8c6e7d86.js","assets/index-3f17fe3b.css","assets/index-2db2798f.js","assets/index-3a2e60ff.js","assets/react-toastify.esm-fcf4c1e7.js","assets/react-toastify-b60658ac.css","assets/generateCategoricalChart-d76b6bfd.js","assets/Popover-94860109.js","assets/useSlotProps-723c9ba2.js","assets/InfoIcon-27e3afdb.js","assets/index.esm-5e8d1785.js","assets/ChevronUpIcon-823264dd.js","assets/ChevronDownIcon-ec5e4f6b.js","assets/index-d010b8aa.js","assets/index-521d6d55.js","assets/index-c3d690f6.js","assets/Popper-d3638f43.js","assets/CheckIcon-22266ff6.js","assets/Stack-a08a5235.js","assets/PlusIcon-b3e2a8bf.js"]).then(({SourcesTableModal:t})=>({default:t}))),An=h.lazy(()=>W(()=>import("./index-ec975dfe.js"),["assets/index-ec975dfe.js","assets/index-8c6e7d86.js","assets/index-3f17fe3b.css","assets/index-2db2798f.js","assets/index-3a2e60ff.js","assets/react-toastify.esm-fcf4c1e7.js","assets/react-toastify-b60658ac.css","assets/index-c3d690f6.js","assets/index.esm-5e8d1785.js","assets/InfoIcon-27e3afdb.js","assets/Skeleton-8c3edb8d.js"]).then(({EditNodeNameModal:t})=>({default:t}))),$n=h.lazy(()=>W(()=>import("./index-92de22d1.js"),["assets/index-92de22d1.js","assets/index-8c6e7d86.js","assets/index-3f17fe3b.css","assets/index-2db2798f.js","assets/index-3a2e60ff.js","assets/react-toastify.esm-fcf4c1e7.js","assets/react-toastify-b60658ac.css","assets/Skeleton-8c3edb8d.js"]).then(({RemoveNodeModal:t})=>({default:t}))),En=h.lazy(()=>W(()=>import("./index-84a5e198.js"),["assets/index-84a5e198.js","assets/index-8c6e7d86.js","assets/index-3f17fe3b.css","assets/index-2db2798f.js","assets/index-3a2e60ff.js","assets/react-toastify.esm-fcf4c1e7.js","assets/react-toastify-b60658ac.css","assets/index-e4298840.js","assets/Popover-94860109.js","assets/useSlotProps-723c9ba2.js","assets/Select-b8024a9f.js","assets/Stack-a08a5235.js","assets/Popper-d3638f43.js","assets/constants-cde8ebc3.js","assets/index-521d6d55.js"]).then(({AddNodeEdgeModal:t})=>({default:t}))),Ln=()=>e.jsxs(e.Fragment,{children:[e.jsx(Tn,{}),e.jsx(_n,{}),e.jsx(Sn,{}),e.jsx(An,{}),e.jsx($n,{}),e.jsx(kn,{}),e.jsx(En,{})]}),Nn=()=>{const t=ie(r=>r.appMetaData);return e.jsxs(Pn,{children:[e.jsxs(Bn,{children:[e.jsx(e.Fragment,{children:t.title&&e.jsx(k,{className:"title",color:"white",children:t.title})}),e.jsx(k,{className:"subtitle",children:" Second Brain"})]}),e.jsx(Ut,{})]})},Pn=x(u).attrs({align:"center",direction:"row",grow:1,justify:"flex-start"})`
  height: 64px;
  position: absolute;
  top: 0px;
  left: 64px;
  right: 32px;
  transition: opacity 1s;
  z-index: 99;
  padding: 20px 23px;
`,Bn=x.div`
  ${Wt.smallOnly`
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
`,In=()=>{const[t,r]=h.useState(!0),o=dr();h.useEffect(()=>{r(!0)},[o]);const s=()=>{r(!1)};return o&&t?e.jsxs(Dn,{align:"center",direction:"column",justify:"center",onClick:s,children:[e.jsx("img",{alt:"screen",src:"jamboard_kiosk.png"}),e.jsxs(u,{align:"center",direction:"column",justify:"center",children:[e.jsx(Ae,{children:"Second Brain is currently"}),e.jsx(Ae,{style:{fontWeight:600},children:"optimized for Desktop."}),e.jsx(Ae,{children:"Mobile support coming soon."})]}),e.jsx(J,{color:"secondary",onClick:s,variant:"contained",children:"Got It"})]}):null},Dn=x(u)`
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.75);
  gap: 28px;
  z-index: 2000000000;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`,Ae=x(k)`
  color: #fff;
  text-align: center;
  font-family: Barlow;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  margin: 1px;
`,Mn={},On=h.createContext(Mn),zn=()=>{const[t,r]=h.useState(!1),o=h.useMemo(()=>({isShow:t,setIsShow:r}),[t]);return e.jsx(On.Provider,{value:o})},_=x(Or)`
  && {
    color: ${d.white};
    border: none;
    padding: 6px 2px 6px 0;
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
`,Se=x(re)`
  && {
    height: 48px;
    padding: 0 36px;
  }
  &:nth-child(odd) {
    background-color: ${d.BG3};
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
`,_e=x(zr)`
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
`,ye=x(J)`
  &.selected {
    background: ${d.white};
    color: ${d.BG1};
    pointer-events: none;
  }

  & + & {
    margin-left: 16px;
  }
`,Te=x(u)`
  margin-bottom: 16px;
  padding: 0 36px;
  ${k} {
    margin-bottom: 0;
  }
`,Rn=({data:t})=>{const r=se(l=>l.setQueuedSources),[o,s]=h.useState(""),i=async l=>{if(t!=null&&t.length)try{const n=await Gt.enable();await Ht(l,n.pubkey),r(t.filter(c=>c.ref_id!==l))}catch(n){console.warn(n)}},a=async l=>{if(!(!l||!(t!=null&&t.length))){s(l);try{await jt(l),r(t==null?void 0:t.filter(n=>n.ref_id!==l))}catch(n){console.warn(n)}finally{s("")}}};return t!=null&&t.length?e.jsxs(Ce,{component:"table",children:[e.jsx(_e,{children:e.jsxs(re,{component:"tr",children:[e.jsx(_,{className:"empty"}),e.jsx(_,{children:"Type"}),e.jsx(_,{children:"Source"}),e.jsx(_,{}),e.jsx(_,{className:"empty"})]})}),(t==null?void 0:t.length)&&e.jsx("tbody",{children:t==null?void 0:t.map(l=>e.jsxs(Se,{children:[e.jsx(_,{className:"empty"}),e.jsx(_,{children:ne[l.source_type]}),e.jsx(_,{width:"268px",children:l.source_type==="twitter_handle"?e.jsxs(nt,{href:`${Nt}/${l.source}?open=system`,target:"_blank",children:["@",l.source]}):e.jsx(nt,{href:`${l.source}?open=system`,target:"_blank",children:l.source})}),e.jsx(_,{className:"cell-center",children:e.jsxs(u,{direction:"row",justify:"space-between",children:[e.jsx("div",{className:"approve-wrapper",children:e.jsx(rt,{className:"centered",onClick:()=>i(l.ref_id),children:e.jsx(Pr,{color:d.primaryGreen,fontSize:24})})}),e.jsx("div",{className:"delete-wrapper",children:o===l.ref_id?e.jsx(I,{color:d.white,size:16}):e.jsx(Et,{message:"Are you sure ?",onConfirm:()=>a(l.ref_id),children:e.jsx(rt,{className:"centered",children:e.jsx(Br,{color:d.primaryRed,fontSize:24})})})})]})}),e.jsx(_,{className:"empty"})]},l.source))})]}):e.jsxs(u,{children:[e.jsx(k,{children:"There is not any results for selected filters"}),e.jsx(De,{})]})},rt=x(u)`
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
`,nt=x.a`
  color: ${d.white};
  text-decoration: underline;
  &:visited {
    color: ${d.white};
  }
  &:hover {
    cursor: pointer;
  }
`,Fn=()=>{const[t,r]=h.useState(!0),[o,s]=h.useState(""),[i,a]=se(c=>[c.queuedSources,c.setQueuedSources]);h.useEffect(()=>{(async()=>{r(!0);try{const p=await bt({approved:"False"});a(p.data)}catch(p){console.warn(p)}finally{r(!1)}})()},[a]);const l=c=>{s(o===c||!c?"":c)},n=i==null?void 0:i.filter(c=>!o||c.source_type===o);return e.jsxs(Vn,{align:"stretch",direction:"column",justify:"flex-end",children:[e.jsxs(Te,{align:"flex-start",justify:"space-between",children:[e.jsx(k,{className:"title",children:"Queued Sources"}),e.jsx(k,{className:"subtitle",children:"This is a queue of pending sources waiting for approval or denial from graph users. If you think a source will provide good content for the graph, you can pay to approve it. Think of this as an investment: you pay to add it to the source table, and if the content is popular you will earn from it. If content is not relevant to the graph, you should deny it."})]}),e.jsxs(u,{className:"filters",direction:"row",pb:16,px:36,children:[e.jsx(ye,{className:q({selected:!o}),onClick:()=>l(""),size:"small",children:"All"}),Object.keys(ne).map(c=>e.jsx(ye,{className:q({selected:c===o}),onClick:()=>l(c),size:"small",children:ne[c]},c))]}),e.jsx(Wn,{align:"center",justify:t?"center":"flex-start",children:t?e.jsx(I,{color:d.white}):e.jsx(Rn,{data:n})})]})},Vn=x(u)`
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
`,Wn=x(u)`
  min-height: 0;
  overflow: auto;
  flex: 1;
  width: 100%;
`,Un=({onSearch:t,placeholder:r,activeIcon:o,loadingIcon:s,defaultIcon:i,...a})=>{const[l,n]=h.useState(""),[c,p]=h.useState(!1),g=()=>{n(""),t(""),p(!1)},m=b=>{!b.target.value&&g(),n(b.target.value)},y=b=>{const{value:f}=b.currentTarget;n(f),!c&&(p(!0),setTimeout(()=>{t(f),f||g(),p(!1)},1e3),f||g())},j=()=>c?e.jsx(ot,{children:e.jsx($e,{type:"button",children:s})}):e.jsx(ot,{children:l?e.jsx($e,{onClick:g,type:"button",children:o}):e.jsx($e,{type:"button",children:i})});return e.jsxs(Gn,{children:[e.jsx(Hn,{autoComplete:"off",autoCorrect:"off",inputProps:{"aria-label":"search sources"},onChange:m,onKeyDown:b=>{b.key==="Enter"&&y(b)},placeholder:r,value:l,...a}),j()]})},ot=x(u)`
  top: -50%;
  right: -3%;
  z-index: 3;
  position: absolute;
  transform: translate(-50%, 50%);
`,$e=x(Z)`
  font-size: 24px;
`,Gn=x(ve)`
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
`,Hn=x(we)`
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
`,Yn=({data:t,canEdit:r=!1})=>{const o=se(n=>n.setSources),[s,i]=h.useState(""),a=async(n,c)=>{if(t!=null&&t.length)try{await Yt(n,c);const p=t==null?void 0:t.findIndex(m=>m.ref_id===n),g=[...t];g[p]={...g[p],source:c.source},o(g)}catch(p){console.warn(p)}},l=async n=>{if(!(!n||!(t!=null&&t.length))){i(n);try{await jt(n),o(t==null?void 0:t.filter(c=>c.ref_id!==n))}catch(c){console.warn(c)}finally{i("")}}};return t!=null&&t.length?e.jsxs(Ce,{"aria-label":"a dense table",component:"table",id:"sources-table",size:"small",children:[e.jsx(_e,{children:e.jsxs(re,{component:"tr",children:[e.jsx(_,{className:"empty"}),e.jsx(_,{children:"Type"}),e.jsx(_,{align:"left",children:"Source"}),r&&e.jsx(_,{align:"left"}),e.jsx(_,{className:"empty"})]})}),e.jsx(Fr,{component:"tbody",children:t==null?void 0:t.map(n=>e.jsxs(Se,{children:[e.jsx(_,{className:"empty"}),e.jsx(_,{align:"left",children:ne[n.source_type]}),e.jsx(_,{align:"left",children:e.jsx(Zn,{condition:r,wrapper:c=>e.jsx(Kn,{id:n.ref_id,onSave:p=>a(n.ref_id,{source:p,source_type:n.source_type}),value:n.source,children:c}),children:n.source_type===He||n.source_type===Ye||n.source_type===Ze?e.jsxs(e.Fragment,{children:[n.source_type===He&&e.jsxs(Ee,{href:`${Nt}/${n.source}`,target:"_blank",children:["@",n.source]}),n.source_type===Ye&&e.jsx(Ee,{href:`${n.source}${n.source.includes("?")?"&":"?"}open=system`,target:"_blank",children:n.source}),n.source_type===Ze&&e.jsx(Ee,{href:n.source,target:"_blank",children:n.source})]}):e.jsx("div",{children:n.source})})}),r&&e.jsx(_,{align:"left",children:e.jsx("div",{className:"delete-wrapper",id:`delete-${n.source}`,children:s===n.ref_id?e.jsx(I,{color:d.white}):e.jsx(Et,{message:"Are you sure ?",onConfirm:()=>l(n.ref_id),children:e.jsx(te,{className:"centered",children:e.jsx(Ir,{})})})})}),e.jsx(_,{className:"empty"})]},n.source))})]}):e.jsxs(Qn,{children:[e.jsx(Rr,{}),e.jsx(k,{className:"text",children:"There is not any results for selected filters"})]})};function Zn({condition:t,wrapper:r,children:o}){return t?r(o):o}const Kn=({value:t,onSave:r,id:o,children:s})=>{const[i,a]=h.useState(!1),[l,n]=h.useState(t),[c,p]=h.useState(!1),g=async()=>{if(o){p(!0);try{await r(l),a(!1)}catch(m){console.warn(m)}finally{p(!1)}}};return e.jsx("div",{children:i?e.jsxs(qn,{direction:"row",children:[e.jsx(Zr,{className:"editable-cell__input",name:"cell-input",onChange:m=>n(m),value:l}),e.jsx(te,{align:"center",justify:"center",children:c?e.jsx(I,{}):e.jsx(Dr,{onClick:g})}),e.jsx(te,{align:"center",className:"secondary",justify:"center",onClick:()=>a(!1),children:e.jsx($t,{})})]}):e.jsxs(Xn,{direction:"row",children:[s,e.jsx(te,{onClick:()=>a(!0),children:e.jsx(Mr,{size:20})})]})})},qn=x(u)`
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
`,te=x(u)`
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
`,Qn=x(u)`
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
`,Xn=x(u)`
  display: flex;
  padding: 4px;
  position: relative;

  ${te} {
    visibility: hidden;
  }

  &:hover {
    ${te} {
      visibility: visible;
    }
  }
`,Ee=x.a`
  color: ${d.white};
  text-decoration: underline;
  &:visited {
    color: ${d.white};
  }
`,Jn=()=>{const[t,r]=h.useState(!0),[o,s]=h.useState(""),[i,a]=se(m=>[m.sources,m.setSources]),[l]=pe(m=>[m.isAdmin]),[n,c]=h.useState("");h.useEffect(()=>{(async()=>{r(!0);try{const y=await bt();a(y.data)}catch(y){console.warn(y)}finally{r(!1)}})()},[a]);const p=m=>{s(o===m||!m?"":m)},g=h.useMemo(()=>i==null?void 0:i.filter(m=>(!o||m.source_type===o)&&(m.source.toLowerCase().startsWith(n.toLowerCase())||m.source.toLowerCase().includes(n.toLowerCase()))),[n,o,i]);return e.jsxs(eo,{align:"stretch",direction:"column",justify:"flex-end",children:[e.jsx(Te,{align:"center",direction:"row",justify:"space-between",children:e.jsx(k,{className:"title",children:"Sources for this Graph"})}),e.jsx(ro,{children:e.jsx(Un,{activeIcon:e.jsx(X,{}),defaultIcon:e.jsx(be,{}),loadingIcon:e.jsx(I,{color:d.PRIMARY_BLUE,size:24}),onSearch:c,placeholder:"Find Topic"})}),e.jsxs(u,{className:"filters",direction:"row",pb:16,px:36,children:[e.jsx(ye,{className:q({selected:!o}),onClick:()=>p(""),size:"small",children:"All"}),Object.keys(ne).map(m=>e.jsx(ye,{className:q({selected:m===o}),onClick:()=>p(m),size:"small",children:ne[m]},m))]}),e.jsx(to,{align:"center",justify:t?"center":"flex-start",children:t?e.jsx(I,{color:d.white}):e.jsx(Yn,{canEdit:l,data:g})})]})},eo=x(u)`
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
`,to=x(u)`
  min-height: 0;
  overflow: auto;
  flex: 1;
  width: 100%;
`,ro=x(u)`
  margin: 0 0 16px 36px;
`,no=({onSelect:t,selectedTopic:r})=>{const[o,s]=h.useState(!1),[i,a]=h.useState(""),[l,n]=h.useState([]),[c,p]=h.useState(!1),g=h.useRef(null);h.useEffect(()=>()=>n([]),[n]);const m=async f=>{const C={muted:"False",sort_by:Ve,search:f,skip:"0",limit:"1000"};p(!0);try{const S=await vt(C);n(S.data)}catch{n([])}finally{p(!1)}},y=h.useMemo(()=>Ct.debounce(m,300),[]),j=f=>{t(f)},b=f=>{if(a(f),!f){n([]);return}f.length>2&&y(f)};return r?e.jsxs(io,{children:[e.jsx("div",{className:"value",children:r.topic}),e.jsx(u,{className:"icon",onClick:()=>t(null),children:e.jsx(X,{})})]}):e.jsxs(e.Fragment,{children:[e.jsxs(ve,{ref:g,component:"form",onSubmit:f=>f.preventDefault(),sx:{p:"2px 4px",display:"flex",alignItems:"center",width:200},children:[e.jsx(we,{inputProps:{"aria-label":"search topic"},onChange:f=>b(f.target.value),onFocus:()=>s(!0),placeholder:"Search",size:"small",sx:{ml:1,flex:1},value:i}),i&&e.jsxs(e.Fragment,{children:[e.jsx(st,{"aria-label":"search",onClick:()=>b(""),type:"button",children:e.jsx(X,{})}),e.jsx(Lt,{orientation:"vertical",sx:{height:28,m:.5}})]}),e.jsx(st,{"aria-label":"search",type:"button",children:c?e.jsx(I,{color:d.white,size:24}):e.jsx(be,{})})]}),g.current&&l.length?e.jsx(so,{anchorEl:g.current,open:o,placement:"bottom",children:e.jsx(e.Fragment,{children:l.map(f=>e.jsx(oo,{className:q({active:r===f.ref_id}),onClick:()=>j(f),children:f.topic},"option"))})}):null]})},oo=x(u).attrs({direction:"row",align:"center"})`
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
`,so=x(Dt)`
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
`,io=x(u).attrs({direction:"row",justify:"flex-start",align:"center"})`
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
`,st=x(Z)`
  font-size: 24px;
`,ao=({selectedType:t,setSelectedType:r})=>{const[o,s]=h.useState(null),[i,a]=h.useState([]);h.useEffect(()=>{(async()=>{try{const{data:g}=await Zt();a(g.edge_types)}catch(g){console.warn(g)}})()},[a]);const l=p=>{s(p.currentTarget)},n=()=>{s(null)},c=p=>{r(p),n()};return e.jsxs("div",{children:[e.jsxs(lo,{onClick:l,children:[e.jsx("div",{className:"text",children:"Type"}),e.jsx("div",{className:"value",children:t}),e.jsx("div",{className:"icon",children:o?e.jsx(Vr,{}):e.jsx(qr,{})})]}),e.jsx(po,{anchorEl:o,anchorOrigin:{vertical:"bottom",horizontal:"left"},anchorPosition:{top:62,left:0},onClose:n,open:!!o,transformOrigin:{vertical:"top",horizontal:"left"},children:e.jsx(Yr,{children:i.map(p=>e.jsxs(co,{className:q({active:p===t}),onClick:()=>c(p),children:[e.jsx("span",{className:"icon",children:p===t?e.jsx(Ge,{}):null}),e.jsx("span",{children:p})]},p))})})]})},lo=x(u).attrs({direction:"row",align:"center"})`
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
`,co=x(u).attrs({direction:"row",align:"center"})`
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
`,po=x(We)`
  .MuiPaper-root {
    background: ${d.BUTTON1};
    min-width: 149px;
    padding: 16px;
    color: ${d.GRAY3};
    box-shadow: 0px 1px 6px 0px rgba(0, 0, 0, 0.2);
    border-radius: 6px;
  }
`,uo=({from:t,onSelect:r,selectedTopic:o,selectedType:s,setSelectedType:i})=>e.jsxs(u,{children:[e.jsx(u,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(u,{align:"center",direction:"row",children:e.jsx(ho,{children:"Add edge"})})}),e.jsxs(xo,{mb:12,children:[e.jsxs(Le,{children:[e.jsx("div",{className:"label",children:"From"}),e.jsx("div",{children:t})]}),e.jsx(Le,{children:e.jsx(ao,{selectedType:s,setSelectedType:i})}),e.jsxs(Le,{children:[e.jsx("div",{className:"label",children:"To"}),e.jsx(no,{onSelect:r,selectedTopic:o})]})]})]}),ho=x(k)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,xo=x(u).attrs({align:"flex-start",direction:"row",justify:"flex-start"})`
  color: ${d.white};
  .label {
    margin-bottom: 8px;
    font-weight: 500;
    font-size: 14px;
    color: ${d.GRAY3};
  }
`,Le=x(u)`
  flex: 1 1 100%;
`,fo=({topic:t,onClose:r})=>{const{close:o}=K("addEdge"),[s]=z(b=>[b.data]),i=ue({mode:"onChange"}),[a,l]=h.useState(!1),[n,c]=h.useState(null),[p,g]=h.useState(""),m=()=>{r(),o()},y=async()=>{if(!(!n||!s)){l(!0);try{await Kt({from:t.ref_id,to:n==null?void 0:n.ref_id,relationship:p});const{ref_id:b}=t,{ref_id:f}=n;if(s){const C={...s};C[b]={...C[b],edgeList:[...C[b].edgeList,p]},C[f]&&(C[f]={...C[f],edgeList:[...C[f].edgeList,p]}),z.setState({data:C})}m()}catch(b){console.warn(b)}finally{l(!1)}}},j=a||!n||!p;return e.jsx(Ue,{id:"addEdge",kind:"large",onClose:m,preventOutsideClose:!0,children:e.jsxs(he,{...i,children:[e.jsx(uo,{from:t.topic,onSelect:c,selectedTopic:n,selectedType:p,setSelectedType:g}),e.jsxs(J,{color:"secondary",disabled:j,onClick:y,size:"large",variant:"contained",children:["Confirm",a&&e.jsx(I,{color:d.BLUE_PRESS_STATE,size:10})]})]})})},mo=()=>e.jsxs(u,{children:[e.jsx(u,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(u,{align:"center",direction:"row",children:e.jsx(go,{children:"Edit topic"})})}),e.jsx(u,{mb:12,children:e.jsx(ce,{id:"cy-topic",maxLength:50,name:"topic",placeholder:"Add your topic",rules:{...qt}})})]}),go=x(k)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,yo=({topic:t,onClose:r})=>{const{close:o}=K("editTopic"),[s]=z(j=>[j.data]),i=ue({mode:"onChange"}),{watch:a,setValue:l,reset:n}=i,[c,p]=h.useState(!1);h.useEffect(()=>(t&&l("topic",t==null?void 0:t.topic),()=>{n()}),[t,l,n]);const g=a("topic"),m=()=>{r(),o()},y=async()=>{p(!0);try{if(await Fe((t==null?void 0:t.ref_id)||"",{topic:g.trim()}),s){const j={...s};j[t==null?void 0:t.ref_id].topic=g.trim(),z.setState({data:j})}m()}catch(j){console.warn(j)}finally{p(!1)}};return e.jsx(Ue,{id:"editTopic",kind:"regular",onClose:m,preventOutsideClose:!0,children:e.jsxs(he,{...i,children:[e.jsx(mo,{}),e.jsxs(J,{color:"secondary",disabled:c,onClick:y,size:"large",variant:"contained",children:["Save",c&&e.jsx(I,{color:d.BLUE_PRESS_STATE,size:10})]})]})})},jo=({onSelect:t,selectedTopic:r})=>{const[o,s]=h.useState(!1),[i,a]=h.useState(""),[l,n]=h.useState([]),[c,p]=h.useState(!1),g=h.useRef(null);h.useEffect(()=>()=>n([]),[n]);const m=async f=>{const C={muted:"False",sort_by:Ve,search:f,skip:"0",limit:"1000"};p(!0);try{const S=await vt(C);n(S.data)}catch{n([])}finally{p(!1)}},y=h.useMemo(()=>Ct.debounce(m,300),[]),j=f=>{t(f)},b=f=>{if(a(f),!f){n([]);return}f.length>2&&y(f)};return r?e.jsxs(vo,{children:[e.jsx("div",{className:"value",children:r.topic}),e.jsx(u,{className:"icon",onClick:()=>t(null),children:e.jsx(X,{})})]}):e.jsxs(e.Fragment,{children:[e.jsxs(ve,{ref:g,component:"form",onSubmit:f=>f.preventDefault(),sx:{p:"2px 4px",display:"flex",alignItems:"center",width:200},children:[e.jsx(we,{inputProps:{"aria-label":"search topic"},onChange:f=>b(f.target.value),onFocus:()=>s(!0),placeholder:"Search",size:"small",sx:{ml:1,flex:1},value:i}),i&&e.jsxs(e.Fragment,{children:[e.jsx(it,{"aria-label":"search",onClick:()=>b(""),type:"button",children:e.jsx(X,{})}),e.jsx(Lt,{orientation:"vertical",sx:{height:28,m:.5}})]}),e.jsx(it,{"aria-label":"search",type:"button",children:c?e.jsx(I,{color:d.white,size:24}):e.jsx(be,{})})]}),g.current&&l.length?e.jsx(Co,{anchorEl:g.current,open:o,placement:"bottom",children:e.jsx(e.Fragment,{children:l.map(f=>e.jsx(bo,{className:q({active:r===f.ref_id}),onClick:()=>j(f),children:f.topic},"option"))})}):null]})},bo=x(u).attrs({direction:"row",align:"center"})`
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
`,Co=x(Dt)`
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
`,vo=x(u).attrs({direction:"row",justify:"flex-start",align:"center"})`
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
`,it=x(Z)`
  font-size: 24px;
`,wo=({from:t,onSelect:r,selectedTopic:o})=>e.jsxs(u,{children:[e.jsx(u,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(u,{align:"center",direction:"row",children:e.jsx(So,{children:"Merge topic"})})}),e.jsxs(_o,{mb:12,children:[e.jsxs(at,{children:[e.jsx("div",{className:"label",children:"From"}),e.jsx("div",{children:t})]}),e.jsxs(at,{ml:24,children:[e.jsx("div",{className:"label",children:"To"}),e.jsx(jo,{onSelect:r,selectedTopic:o})]})]})]}),So=x(k)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,_o=x(u).attrs({align:"flex-start",direction:"row",justify:"flex-start"})`
  color: ${d.white};
  .label {
    margin-bottom: 8px;
    font-weight: 500;
    font-size: 14px;
    color: ${d.GRAY3};
  }
`,at=x(u)`
  flex: 1 1 100%;
`,To=({topic:t,onClose:r})=>{const{close:o}=K("mergeTopic"),[s,i,a]=z(S=>[S.data,S.ids,S.total]),l=ue({mode:"onChange"}),{watch:n,setValue:c,reset:p}=l,[g,m]=h.useState(!1),[y,j]=h.useState(null);h.useEffect(()=>(t&&c("topic",t==null?void 0:t.topic),()=>{p()}),[t,c,p]);const b=n("topic"),f=()=>{r(),o()},C=async()=>{if(!(!y||!s)){m(!0);try{await Qt({from:t.ref_id,to:y==null?void 0:y.ref_id});const{ref_id:S}=t;if(s[S]={...s[S],edgeList:[Wr],edgeCount:s[S].edgeCount-1},z.setState({ids:i.filter(L=>L!==y.ref_id),total:a-1}),s){const L={...s};L[t==null?void 0:t.ref_id].topic=b.trim(),z.setState({data:L})}f()}catch(S){console.warn(S)}finally{m(!1)}}};return e.jsx(Ue,{id:"mergeTopic",kind:"regular",onClose:f,preventOutsideClose:!0,children:e.jsxs(he,{...l,children:[e.jsx(wo,{from:t.topic,onSelect:j,selectedTopic:y}),e.jsxs(J,{color:"secondary",disabled:g,onClick:C,size:"large",variant:"contained",children:["Merge topics",g&&e.jsx(I,{color:d.BLUE_PRESS_STATE,size:10})]})]})})},ko=t=>e.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M7.37516 8.625V11.3334C7.37516 11.5104 7.43508 11.6589 7.55491 11.7786C7.67476 11.8984 7.82326 11.9583 8.00041 11.9583C8.17758 11.9583 8.32599 11.8984 8.44564 11.7786C8.5653 11.6589 8.62512 11.5104 8.62512 11.3334V8.625H11.3335C11.5106 8.625 11.659 8.56508 11.7788 8.44525C11.8986 8.3254 11.9585 8.1769 11.9585 7.99975C11.9585 7.82258 11.8986 7.67417 11.7788 7.55452C11.659 7.43487 11.5106 7.37504 11.3335 7.37504H8.62512V4.66669C8.62512 4.4896 8.56521 4.34117 8.44537 4.22137C8.32553 4.1016 8.17702 4.04171 7.99987 4.04171C7.82271 4.04171 7.6743 4.1016 7.55464 4.22137C7.43499 4.34117 7.37516 4.4896 7.37516 4.66669V7.37504H4.66681C4.48973 7.37504 4.3413 7.43496 4.22152 7.55479C4.10173 7.67464 4.04183 7.82314 4.04183 8.00029C4.04183 8.17746 4.10173 8.32587 4.22152 8.44552C4.3413 8.56517 4.48973 8.625 4.66681 8.625H7.37516ZM8.00154 15.9167C6.90659 15.9167 5.8774 15.7089 4.91395 15.2933C3.9505 14.8778 3.11243 14.3138 2.39975 13.6015C1.68705 12.8891 1.12284 12.0514 0.7071 11.0884C0.291364 10.1253 0.0834961 9.09636 0.0834961 8.00142C0.0834961 6.90647 0.291274 5.87728 0.70683 4.91383C1.12239 3.95037 1.68634 3.11231 2.3987 2.39963C3.11108 1.68693 3.94878 1.12272 4.91181 0.706979C5.87482 0.291243 6.9038 0.083374 7.99875 0.083374C9.09369 0.083374 10.1229 0.291153 11.0863 0.706708C12.0498 1.12226 12.8879 1.68622 13.6005 2.39858C14.3132 3.11096 14.8774 3.94866 15.2932 4.91169C15.7089 5.8747 15.9168 6.90368 15.9168 7.99863C15.9168 9.09357 15.709 10.1228 15.2935 11.0862C14.8779 12.0497 14.3139 12.8877 13.6016 13.6004C12.8892 14.3131 12.0515 14.8773 11.0885 15.2931C10.1255 15.7088 9.09648 15.9167 8.00154 15.9167ZM8.00014 14.6667C9.86125 14.6667 11.4376 14.0209 12.7293 12.7292C14.021 11.4375 14.6668 9.86113 14.6668 8.00002C14.6668 6.13891 14.021 4.56252 12.7293 3.27085C11.4376 1.97919 9.86125 1.33335 8.00014 1.33335C6.13903 1.33335 4.56264 1.97919 3.27098 3.27085C1.97931 4.56252 1.33348 6.13891 1.33348 8.00002C1.33348 9.86113 1.97931 11.4375 3.27098 12.7292C4.56264 14.0209 6.13903 14.6667 8.00014 14.6667Z",fill:"currentColor"})}),Ao=t=>e.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 12 12",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M10.1765 0.310088L4.72809 5.70971C4.63832 5.79868 4.56637 5.90372 4.51607 6.01926L3.74627 7.78746C3.63822 8.03565 3.89191 8.28707 4.14234 8.17999L5.92651 7.41707C6.04309 7.36722 6.14907 7.29592 6.23885 7.20695L11.6872 1.80733C12.1044 1.39388 12.1044 0.723539 11.6872 0.310088C11.27 -0.103363 10.5936 -0.103363 10.1765 0.310088ZM9.80835 7.14088C9.80835 6.81895 10.072 6.55777 10.3969 6.55777C10.723 6.55777 10.9854 6.82017 10.9854 7.14088L10.9191 10.2508C10.9191 11.2153 10.1489 12.0001 9.17571 12.0001H1.74343C0.79227 12.0001 0 11.2153 0 10.2289V2.84292C0 1.89999 0.79227 1.11523 1.74343 1.11523L5.29651 1.11548C5.62264 1.11548 5.88501 1.37666 5.88501 1.69858C5.88501 2.0205 5.62141 2.28168 5.29651 2.28168H1.7655C1.44134 2.28168 1.177 2.54335 1.177 2.86479V10.2508C1.177 10.5722 1.44134 10.8339 1.7655 10.8339H9.21985C9.54402 10.8339 9.80835 10.5722 9.80835 10.2508V7.14088Z",fill:"currentColor"})}),$o=t=>e.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 12 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M1.33317 15.5L0.166504 14.3333L4.18734 10.2917C4.50678 9.97222 4.74984 9.61111 4.9165 9.20833C5.08317 8.80556 5.1665 8.38194 5.1665 7.9375L5.1665 3.6875L3.83317 5L2.6665 3.83333L5.99984 0.5L9.33317 3.83333L8.1665 5L6.83317 3.6875L6.83317 7.9375C6.83317 8.38194 6.9165 8.80556 7.08317 9.20833C7.24984 9.61111 7.49289 9.97222 7.81234 10.2917L11.8332 14.3333L10.6665 15.5L5.99984 10.8333L1.33317 15.5Z",fill:"currentColor"})}),Ne=t=>e.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 12 8",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M0.333496 7.66704V6.66706H3.91681V7.66704H0.333496ZM0.333496 4.50037V3.50041H7.7886V4.50037H0.333496ZM0.333496 1.33372V0.33374H11.6668V1.33372H0.333496Z",fill:"currentColor"})}),lt=t=>e.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 16 15",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M14.0716 15L10.8994 11.7764C10.437 11.9597 9.96181 12.0919 9.47381 12.1732C8.98581 12.2545 8.49002 12.2952 7.98643 12.2952C6.33597 12.2952 4.82448 11.8457 3.45194 10.9466C2.07941 10.0476 0.991584 8.86271 0.188459 7.39193C0.123124 7.27666 0.0753836 7.15933 0.045238 7.03994C0.0150793 6.92055 0 6.7991 0 6.67559C0 6.55208 0.0163338 6.42935 0.0490013 6.30739C0.0816688 6.18543 0.13067 6.06938 0.196005 5.95925C0.508607 5.42714 0.84081 4.91226 1.19261 4.41462C1.54443 3.91699 1.95353 3.47673 2.41992 3.09386L0.24877 0.846015L1.07501 0L14.8978 14.154L14.0716 15ZM7.98643 9.94854C8.16032 9.94854 8.32642 9.93799 8.48473 9.91689C8.64305 9.89579 8.7976 9.84973 8.94838 9.77871L4.95591 5.69059C4.89158 5.84498 4.84786 6.00324 4.82475 6.16535C4.80162 6.32745 4.79005 6.49753 4.79005 6.67559C4.79005 7.58645 5.10039 8.35966 5.72108 8.99521C6.34176 9.63076 7.09688 9.94854 7.98643 9.94854ZM13.4384 10.3561L10.9792 7.85816C11.0456 7.66673 11.0961 7.47375 11.1308 7.27922C11.1655 7.0847 11.1828 6.88349 11.1828 6.67559C11.1828 5.76473 10.8725 4.99152 10.2518 4.35597C9.63109 3.72042 8.87598 3.40264 7.98643 3.40264C7.78339 3.40264 7.58689 3.42168 7.39692 3.45976C7.20694 3.49784 7.02099 3.56011 6.83907 3.64657L4.87751 1.64575C5.37606 1.44402 5.88441 1.29529 6.40257 1.19957C6.92071 1.10385 7.44867 1.05599 7.98643 1.05599C9.64191 1.05599 11.1604 1.50756 12.542 2.41072C13.9236 3.31387 15.0134 4.50598 15.8115 5.98705C15.8718 6.08894 15.9183 6.19829 15.951 6.31511C15.9837 6.43192 16 6.55208 16 6.67559C16 6.7991 15.9857 6.91926 15.957 7.03607C15.9284 7.15289 15.8839 7.26225 15.8236 7.36414C15.52 7.94669 15.1738 8.49038 14.7848 8.99521C14.3958 9.50005 13.947 9.95369 13.4384 10.3561ZM10.0912 6.95657L7.73162 4.54816C8.06131 4.48126 8.38246 4.50545 8.69506 4.62072C9.00767 4.736 9.27754 4.9156 9.5047 5.15952C9.7369 5.40036 9.90451 5.67723 10.0075 5.99012C10.1106 6.30301 10.1385 6.62516 10.0912 6.95657Z",fill:"currentColor"})}),ct=t=>e.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 18 13",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M9.00204 9.98073C9.94628 9.98073 10.7483 9.65024 11.408 8.98927C12.0677 8.32829 12.3976 7.52567 12.3976 6.58142C12.3976 5.63718 12.0671 4.8352 11.4061 4.17548C10.7451 3.51576 9.9425 3.1859 8.99825 3.1859C8.05401 3.1859 7.25203 3.51638 6.59231 4.17735C5.93259 4.83834 5.60273 5.64096 5.60273 6.58521C5.60273 7.52944 5.93321 8.33142 6.59419 8.99115C7.25517 9.65087 8.05779 9.98073 9.00204 9.98073ZM9.00014 8.83331C8.37514 8.83331 7.84389 8.61456 7.40639 8.17706C6.96889 7.73956 6.75014 7.20831 6.75014 6.58331C6.75014 5.95831 6.96889 5.42706 7.40639 4.98956C7.84389 4.55206 8.37514 4.33331 9.00014 4.33331C9.62514 4.33331 10.1564 4.55206 10.5939 4.98956C11.0314 5.42706 11.2501 5.95831 11.2501 6.58331C11.2501 7.20831 11.0314 7.73956 10.5939 8.17706C10.1564 8.61456 9.62514 8.83331 9.00014 8.83331ZM9.00129 12.4166C7.08494 12.4166 5.33884 11.888 3.76298 10.8309C2.18713 9.77374 1.02688 8.35788 0.282227 6.58331C1.02688 4.80874 2.18675 3.39288 3.76185 2.33573C5.33694 1.27858 7.08265 0.75 8.999 0.75C10.9153 0.75 12.6614 1.27858 14.2373 2.33573C15.8132 3.39288 16.9734 4.80874 17.7181 6.58331C16.9734 8.35788 15.8135 9.77374 14.2384 10.8309C12.6634 11.888 10.9176 12.4166 9.00129 12.4166Z",fill:"currentColor"})}),Eo=t=>e.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:e.jsxs("g",{opacity:"0.4",children:[e.jsx("mask",{id:"mask0_5162_13105",maskUnits:"userSpaceOnUse",x:"0",y:"0",width:"24",height:"24",children:e.jsx("rect",{width:"1em",height:"1em",fill:"currentColor"})}),e.jsx("g",{mask:"url(#mask0_5162_13105)",children:e.jsx("path",{d:"M19.7615 21.8691L15.7154 17.8537C15.1256 18.0819 14.5195 18.2467 13.8971 18.348C13.2747 18.4493 12.6423 18.4999 12 18.4999C9.89486 18.4999 7.96698 17.94 6.21635 16.8201C4.46572 15.7002 3.07822 14.2243 2.05385 12.3922C1.97052 12.2486 1.90963 12.1025 1.87118 11.9538C1.83271 11.8051 1.81348 11.6538 1.81348 11.4999C1.81348 11.3461 1.83431 11.1932 1.87598 11.0413C1.91764 10.8894 1.98014 10.7448 2.06348 10.6076C2.46219 9.9448 2.88591 9.30345 3.33463 8.68357C3.78336 8.0637 4.30516 7.51531 4.90003 7.0384L2.13078 4.2384L3.18463 3.18457L20.8153 20.8153L19.7615 21.8691ZM12 15.5768C12.2218 15.5768 12.4336 15.5637 12.6356 15.5374C12.8375 15.5111 13.0346 15.4537 13.2269 15.3653L8.13463 10.273C8.05258 10.4653 7.99681 10.6624 7.96733 10.8643C7.93783 11.0663 7.92308 11.2781 7.92308 11.4999C7.92308 12.6345 8.31891 13.5977 9.11058 14.3893C9.90224 15.181 10.8654 15.5768 12 15.5768ZM18.9538 16.0845L15.8173 12.973C15.9019 12.7345 15.9663 12.4941 16.0105 12.2518C16.0548 12.0095 16.0769 11.7589 16.0769 11.4999C16.0769 10.3653 15.681 9.40219 14.8894 8.61052C14.0977 7.81885 13.1346 7.42302 12 7.42302C11.741 7.42302 11.4904 7.44674 11.2481 7.49417C11.0058 7.5416 10.7686 7.61917 10.5366 7.72687L8.03463 5.23457C8.67051 4.98329 9.3189 4.79803 9.9798 4.6788C10.6407 4.55956 11.3141 4.49995 12 4.49995C14.1115 4.49995 16.0484 5.06245 17.8105 6.18745C19.5727 7.31245 20.9628 8.79738 21.9807 10.6422C22.0576 10.7692 22.1169 10.9054 22.1586 11.0509C22.2003 11.1964 22.2211 11.3461 22.2211 11.4999C22.2211 11.6538 22.2028 11.8034 22.1663 11.9489C22.1297 12.0945 22.073 12.2307 21.9961 12.3576C21.6089 13.0832 21.1673 13.7605 20.6711 14.3893C20.175 15.0182 19.6025 15.5832 18.9538 16.0845ZM14.6846 11.8499L11.675 8.84992C12.0955 8.76659 12.5051 8.79671 12.9038 8.9403C13.3025 9.0839 13.6468 9.30761 13.9365 9.61145C14.2327 9.91145 14.4465 10.2563 14.5779 10.6461C14.7093 11.0358 14.7449 11.4371 14.6846 11.8499Z",fill:"currentColor"})})]})}),Lo=t=>e.jsxs("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("mask",{id:"mask0_5162_13106",maskUnits:"userSpaceOnUse",x:"0",y:"0",width:"24",height:"24",children:e.jsx("rect",{width:"1em",height:"1em",fill:"currentColor"})}),e.jsx("g",{mask:"url(#mask0_5162_13106)",children:e.jsx("path",{d:"M12.0023 15.5769C13.1354 15.5769 14.0978 15.1803 14.8895 14.3871C15.6811 13.5939 16.077 12.6308 16.077 11.4977C16.077 10.3646 15.6804 9.40224 14.8872 8.61058C14.094 7.81891 13.1309 7.42308 11.9978 7.42308C10.8647 7.42308 9.90234 7.81966 9.11067 8.61282C8.31901 9.40601 7.92317 10.3692 7.92317 11.5023C7.92317 12.6353 8.31976 13.5977 9.11293 14.3894C9.90611 15.181 10.8692 15.5769 12.0023 15.5769ZM12.0001 14.2C11.2501 14.2 10.6126 13.9375 10.0876 13.4125C9.56258 12.8875 9.30007 12.25 9.30007 11.5C9.30007 10.75 9.56258 10.1125 10.0876 9.58748C10.6126 9.06248 11.2501 8.79998 12.0001 8.79998C12.7501 8.79998 13.3876 9.06248 13.9126 9.58748C14.4376 10.1125 14.7001 10.75 14.7001 11.5C14.7001 12.25 14.4376 12.8875 13.9126 13.4125C13.3876 13.9375 12.7501 14.2 12.0001 14.2ZM12.0014 18.5C9.70183 18.5 7.60651 17.8657 5.71547 16.5971C3.82446 15.3285 2.43216 13.6295 1.53857 11.5C2.43216 9.37049 3.82401 7.67146 5.71412 6.40288C7.60422 5.13429 9.69908 4.5 11.9987 4.5C14.2983 4.5 16.3936 5.13429 18.2847 6.40288C20.1757 7.67146 21.568 9.37049 22.4616 11.5C21.568 13.6295 20.1761 15.3285 18.286 16.5971C16.3959 17.8657 14.3011 18.5 12.0014 18.5Z",fill:"currentColor"})})]}),No=t=>e.jsxs("svg",{width:"1em",height:"1em",viewBox:"0 0 22 22",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("mask",{id:"mask0_5577_416",maskUnits:"userSpaceOnUse",x:"0",y:"0",width:"22",height:"22",children:e.jsx("rect",{width:"1em",height:"1em",fill:"currentColor"})}),e.jsx("g",{mask:"url(#mask0_5577_416)",children:e.jsx("path",{d:"M11 17.6634C10.6219 17.6634 10.2982 17.5287 10.0289 17.2595C9.75964 16.9902 9.625 16.6665 9.625 16.2884C9.625 15.9103 9.75964 15.5866 10.0289 15.3173C10.2982 15.0481 10.6219 14.9134 11 14.9134C11.3781 14.9134 11.7018 15.0481 11.971 15.3173C12.2403 15.5866 12.375 15.9103 12.375 16.2884C12.375 16.6665 12.2403 16.9902 11.971 17.2595C11.7018 17.5287 11.3781 17.6634 11 17.6634ZM11 12.3749C10.6219 12.3749 10.2982 12.2403 10.0289 11.971C9.75964 11.7018 9.625 11.3781 9.625 11C9.625 10.6218 9.75964 10.2982 10.0289 10.0289C10.2982 9.75962 10.6219 9.62498 11 9.62498C11.3781 9.62498 11.7018 9.75962 11.971 10.0289C12.2403 10.2982 12.375 10.6218 12.375 11C12.375 11.3781 12.2403 11.7018 11.971 11.971C11.7018 12.2403 11.3781 12.3749 11 12.3749ZM11 7.08648C10.6219 7.08648 10.2982 6.95184 10.0289 6.68257C9.75964 6.41332 9.625 6.08963 9.625 5.7115C9.625 5.33339 9.75964 5.0097 10.0289 4.74043C10.2982 4.47118 10.6219 4.33655 11 4.33655C11.3781 4.33655 11.7018 4.47118 11.971 4.74043C12.2403 5.0097 12.375 5.33339 12.375 5.7115C12.375 6.08963 12.2403 6.41332 11.971 6.68257C11.7018 6.95184 11.3781 7.08648 11 7.08648Z",fill:"currentColor"})})]}),Po=({topic:t,onClick:r,onSearch:o,checkedStates:s,setCheckedStates:i})=>{const[a,l]=z($=>[$.ids,$.total]),[n,c]=h.useState(!1),p=Me(t.date_added_to_graph),g=async($,w)=>{c(!0);try{await Fe($,{muted_topic:w}),z.setState({ids:a.filter(M=>M!==$),total:l-1})}catch(M){console.warn(M)}},m=$=>{i(w=>({...w,[$]:!w[$]}))},y=$=>{o($.topic)},j=t.edgeList.slice(0,1),b=t.edgeList.length-j.length,[f,C]=D.useState(null),S=$=>{C($.currentTarget)},L=()=>{C(null)},N=!!f,B=s[t.ref_id]?"visible":"";return e.jsxs(Se,{className:s[t.ref_id]?"checked":"",children:[e.jsx(_,{children:e.jsx(Do,{className:`checkbox-section ${B}`,onClick:()=>m(t.ref_id),children:e.jsx(Mo,{checked:s[t.ref_id],children:e.jsx(Oo,{children:s[t.ref_id]&&e.jsx(Ge,{})})})})}),e.jsx(_,{onClick:()=>y(t),children:e.jsx(Io,{children:t.topic})}),e.jsx(_,{children:t.node_type}),e.jsx(_,{children:t.edgeCount}),e.jsxs(_,{children:[e.jsx(We,{anchorEl:f,anchorOrigin:{vertical:"top",horizontal:"center"},disableRestoreFocus:!0,id:"mouse-over-popover",onClose:L,open:N,sx:{pointerEvents:"none","& .MuiPaper-root":{backgroundColor:"rgba(0, 0, 0, 0.9)",borderRadius:"4px",width:"160px"}},transformOrigin:{vertical:"bottom",horizontal:"center"},children:e.jsx(tt,{sx:{p:1.5,fontSize:"13px",fontWeight:400,lineHeight:"1.8",wordWrap:"break-word"},children:t.edgeList.join(", ")})}),j.join(", "),b>0&&e.jsx(tt,{"aria-haspopup":"true","aria-owns":N?"mouse-over-popover":void 0,component:"span",onMouseEnter:S,onMouseLeave:L,sx:{cursor:"context-menu"},children:",..."})]}),e.jsx(_,{children:e.jsx("span",{children:p})}),e.jsx(_,{className:"cell-center",children:e.jsx(u,{direction:"row",justify:"space-between",children:e.jsx("div",{className:"approve-wrapper",children:n?e.jsx(Bo,{children:e.jsx(I,{color:d.white,size:16})}):e.jsxs(u,{direction:"row",children:[t.muted_topic?e.jsx(Z,{className:"centered",onClick:()=>g(t.ref_id,!1),children:e.jsx(Lo,{})}):e.jsx(Z,{className:"centered",onClick:()=>g(t.ref_id,!0),children:e.jsx(Eo,{})}),e.jsx(Z,{onClick:$=>r($,t.ref_id),children:e.jsx(No,{"data-testid":"ThreeDotsIcons"})})]})})})})]},t.topic)},Bo=x.span`
  margin-left: 12px;
`,Io=x.span`
  cursor: pointer;
  :hover {
    text-decoration: underline;
  }
`,Do=x.td`
  visibility: hidden;
  cursor: pointer;
  display: flex;
  align-items: center;

  &.visible {
    visibility: visible;
  }
`,Mo=x.div`
  width: 14px;
  height: 14px;
  border-radius: 4px;
  border: ${({checked:t})=>t?"#618AFF":"2px solid #CCCCCC"};
  background-color: ${({checked:t})=>t?"#618AFF":"transparent"};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 12px;
`,Oo=x.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 2px;
  background-color: transparent;
`,zo=h.memo(Po),Ro=({setShowMuteUnmute:t,showMuted:r,onTopicEdit:o,onChangeFilter:s,checkedStates:i,setCheckedStates:a})=>{const{close:l}=K("sourcesTable"),[n,c]=D.useState(null),[p,g]=D.useState(""),m=Object.values(i).filter(A=>A).length,[y,j]=ie(A=>[A.setSearchFormValue,A.setCurrentSearch]),[b,f]=z(A=>[A.data,A.ids]),C=h.useCallback((A,R)=>{c(A.currentTarget),g(R)},[]),S=()=>{c(null)},L=A=>{y(A),j(A),l()},N=A=>{o(p,A),S()},B=A=>{s(A)},$=!!n,w=$?"simple-popover":void 0,M=async()=>{const A=[];Object.keys(i).forEach(R=>{if(i[R]){const U=Fe(R,{muted_topic:r});A.push(U)}}),await Promise.all(A)};return b?e.jsx(e.Fragment,{children:Object.keys(b).length?e.jsxs(e.Fragment,{children:[e.jsxs(Ce,{component:"table",children:[e.jsx(_e,{children:e.jsxs(re,{component:"tr",children:[e.jsx(_,{className:"empty"}),e.jsx(_,{children:e.jsxs(Pe,{onClick:()=>B(Ve),children:["Name ",e.jsx(Ne,{})]})}),e.jsx(_,{children:"Type"}),e.jsx(_,{children:e.jsxs(Pe,{onClick:()=>B(Ur),children:["Count ",e.jsx(Ne,{})]})}),e.jsx(_,{children:"Edge list"}),e.jsx(_,{children:e.jsxs(Pe,{onClick:()=>B(Gr),children:["Date ",e.jsx(Ne,{})]})}),e.jsx(_,{children:e.jsx(u,{px:8,children:e.jsxs(Fo,{onClick:t,children:[e.jsx(Vo,{checked:r,children:e.jsx(Wo,{children:r&&e.jsx(Ge,{})})}),"Muted"]})})})]})}),m>0&&e.jsxs(re,{component:"tr",children:[e.jsx(_,{children:e.jsx(Z,{onClick:()=>a({}),children:e.jsx(X,{})})}),e.jsx(_,{children:e.jsxs(Zo,{children:[e.jsxs(Yo,{children:[e.jsx(Go,{children:m}),"selected"]}),e.jsx(Ho,{onClick:M,role:"button",children:r?e.jsxs(e.Fragment,{children:[e.jsx(ct,{})," Unmute All"]}):e.jsxs(e.Fragment,{children:[e.jsx(lt,{})," Mute All"]})})]})})]}),b&&e.jsx("tbody",{children:f==null?void 0:f.map(A=>e.jsx(zo,{checkedStates:i,onClick:C,onSearch:L,setCheckedStates:a,topic:b[A]},A))})]}),p?e.jsxs(Uo,{anchorEl:n,anchorOrigin:{vertical:"bottom",horizontal:"right"},id:w,onClose:S,open:$,transformOrigin:{vertical:"top",horizontal:"right"},children:[r?e.jsxs(le,{onClick:()=>N("unMute"),children:[" ",e.jsx(ct,{"data-testid":""})," Unmute"]}):e.jsxs(le,{onClick:()=>N("mute"),children:[" ",e.jsx(lt,{"data-testid":"VisibilityOff"})," Mute"]}),e.jsxs(le,{onClick:()=>N("editTopic"),children:[e.jsx(Ao,{"data-testid":"EditTopicIcon"})," Rename"]}),e.jsxs(le,{onClick:()=>N("mergeTopic"),children:[e.jsx($o,{"data-testid":"MergeIcon"})," Merge"]}),e.jsxs(le,{onClick:()=>N("addEdge"),children:[e.jsx(ko,{"data-testid":"AddCircleIcon"})," Add edge"]})]}):null]}):e.jsxs(u,{children:[e.jsx(k,{children:"There is not any results for selected filters"}),e.jsx(De,{})]})}):e.jsxs(u,{children:[e.jsx(k,{children:"There is not any results for selected filters"}),e.jsx(De,{})]})},Fo=x.td`
  cursor: pointer;
  display: flex;
  align-items: center;
`,Vo=x.div`
  width: 14px;
  height: 14px;
  border-radius: 4px;
  border: ${({checked:t})=>t?"#618AFF":"2px solid #CCCCCC"};
  background-color: ${({checked:t})=>t?"#618AFF":"transparent"};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 8px;
`,Wo=x.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 2px;
  background-color: transparent;
`,Pe=x.span`
  cursor: pointer;
  display: flex;
  gap: 4px;
  align-items: center;
`,le=x(u).attrs({direction:"row",px:12,py:8})`
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
`,Uo=x(We)`
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
`,Go=x.span`
  font-family: Barlow;
  font-size: 13px;
  font-weight: 500;
  margin-right: 3px;
`,Ho=x.div`
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
`,Yo=x.div`
  display: flex;
  align-items: center;
  gap: 2px;
`,Zo=x.span`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,Ko=({placeholder:t,activeIcon:r,loadingIcon:o,defaultIcon:s,...i})=>{const[a,l]=z(j=>[j.filters,j.setFilters]),[n,c]=h.useState(!1),p=()=>{l({search:""}),c(!1)},g=j=>{!j.target.value&&p(),l({search:j.target.value})},m=j=>{const{value:b}=j.currentTarget;l({search:b}),!n&&(c(!0),setTimeout(()=>{b||p(),c(!1)},1e3),b||p())},y=()=>n?e.jsx(dt,{children:e.jsx(Be,{type:"button",children:o})}):e.jsx(dt,{children:a.search?e.jsx(Be,{onClick:p,type:"button",children:r}):e.jsx(Be,{type:"button",children:s})});return e.jsxs(qo,{children:[e.jsx(Qo,{autoComplete:"off",autoCorrect:"off",inputProps:{"aria-label":"search sources"},onChange:g,onKeyDown:j=>{j.key==="Enter"&&m(j)},placeholder:t,value:a.search,...i}),y()]})},dt=x(u)`
  top: -50%;
  right: -3%;
  z-index: 3;
  position: absolute;
  transform: translate(-50%, 50%);
`,Be=x(Z)`
  font-size: 24px;
`,qo=x(ve)`
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
`,Qo=x(we)`
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
`,Xo=()=>{const[t,r]=h.useState(!1),[o,s,i,a,l,n,c]=z(w=>[w.data,w.ids,w.total,w.setTopics,w.filters,w.setFilters,w.terminate]),{open:p}=K("editTopic"),{open:g}=K("mergeTopic"),{open:m}=K("addEdge"),[y,j]=h.useState(null),[b,f]=h.useState({}),C={editTopic:p,mergeTopic:g,addEdge:m},S=h.useRef([]);h.useEffect(()=>{s.length&&(S.current=s)},[s]),h.useEffect(()=>{(async()=>{try{r(!0),await a()}catch{console.error("err")}finally{r(!1)}})()},[a,l]);const L=async()=>{try{r(!0),n({page:l.page+1})}catch(w){console.error("Error loading more data:",w)}finally{r(!1)}};h.useEffect(()=>()=>{c()},[c]);const N=w=>{n({sortBy:w})},B=()=>{j(null)},$=(w,M)=>{o&&(j(o[w]),typeof C[M]=="function"&&C[M]())};return e.jsxs(e.Fragment,{children:[e.jsxs(Jo,{direction:"column",justify:"flex-end",children:[e.jsx(Te,{align:"flex-start",direction:"row",justify:"space-between",children:e.jsx(k,{className:"title",children:"Topics"})}),e.jsx(ts,{children:e.jsx(Ko,{activeIcon:e.jsx(X,{}),defaultIcon:e.jsx(be,{}),loadingIcon:e.jsx(I,{color:d.PRIMARY_BLUE,size:24}),placeholder:"Search ..."})}),e.jsx(es,{align:"center",justify:t&&!o?"center":"flex-start",children:t&&!o?e.jsx(I,{color:d.white}):e.jsxs(e.Fragment,{children:[e.jsx(Ro,{checkedStates:b,onChangeFilter:N,onTopicEdit:$,setCheckedStates:f,setShowMuteUnmute:()=>n({muted:!l.muted}),showMuted:l.muted}),i>s.length?e.jsxs(J,{className:"load-more",disabled:t,onClick:L,children:["Load more",t&&e.jsx(I,{color:d.BLUE_PRESS_STATE,size:10})]}):null]})})]}),y&&e.jsx(To,{onClose:B,topic:y}),y&&e.jsx(yo,{onClose:B,topic:y}),y&&e.jsx(fo,{onClose:B,topic:y})]})},Jo=x(u)`
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
`,es=x(u)`
  min-height: 0;
  overflow: auto;
  flex: 1;
  width: 100%;
`,ts=x(u)`
  margin: 0 0 16px 36px;
`;function rs(t){return t.charAt(0).toUpperCase()+t.slice(1).toLowerCase()}const ns=({node:t})=>{var r,o,s,i,a,l,n,c,p;return e.jsxs(Se,{children:[e.jsx(_,{className:"empty"}),e.jsx(_,{children:(r=t==null?void 0:t.properties)!=null&&r.date_added_to_graph?Me((o=t==null?void 0:t.properties)==null?void 0:o.date_added_to_graph):Me((s=t==null?void 0:t.properties)==null?void 0:s.date)}),e.jsx(_,{children:t==null?void 0:t.node_type}),e.jsx(_,{children:(t==null?void 0:t.node_type)==="Tweet"?e.jsx(pt,{href:`${Xe}${(i=t==null?void 0:t.properties)==null?void 0:i.tweet_id}${Xe.includes("?")?"&":"?"}open=system`,target:"_blank",children:(a=t==null?void 0:t.properties)==null?void 0:a.tweet_id}):e.jsx(pt,{href:`${(l=t==null?void 0:t.properties)==null?void 0:l.source_link}${((n=t==null?void 0:t.properties)==null?void 0:n.source_link).includes("?")?"&":"?"}open=system`,target:"_blank",children:(c=t==null?void 0:t.properties)==null?void 0:c.source_link})}),e.jsx(_,{children:(p=t==null?void 0:t.properties)!=null&&p.status?rs(t.properties.status):"Processing"})]})},pt=x.a`
  color: ${d.white};
  text-decoration: underline;
  &:visited {
    color: ${d.white};
  }
`,os=h.memo(ns),ss=({nodes:t})=>{const{open:r}=K("addContent"),o=async()=>{r()};return!t||(t==null?void 0:t.length)===0?e.jsx(e.Fragment,{children:e.jsxs(is,{children:[e.jsx(as,{align:"center",direction:"row",justify:"space-between",children:e.jsx(k,{className:"subtitle",children:"Contribute to the graph by adding content."})}),e.jsx(u,{children:e.jsx(J,{color:"secondary",onClick:o,size:"medium",startIcon:e.jsx(Jr,{}),type:"submit",variant:"contained",children:"Add Content"})})]})}):e.jsxs(Ce,{component:"table",children:[e.jsx(_e,{children:e.jsxs(re,{component:"tr",children:[e.jsx(_,{className:"empty"}),e.jsx(_,{children:"Date"}),e.jsx(_,{children:"Type"}),e.jsx(_,{children:"Source"}),e.jsx(_,{children:"Status"})]})}),e.jsx("tbody",{children:t==null?void 0:t.map(s=>e.jsx(os,{node:s},s==null?void 0:s.ref_id))})]})},is=Re(u)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 100px auto;
  width: 100%;
`,as=Re(u)`
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
`,ls=()=>{const[t,r]=h.useState([]),[o,s]=h.useState(!0),[i,a]=h.useState(10),[l,n]=h.useState(!0),c={only_content:"true",sort_by:"date",limit:i.toString()},p=async()=>{s(!0);try{const m=await Xt(c);r(m.nodes),s(!1)}catch(m){console.error("Error fetching data:",m),s(!1)}};h.useEffect(()=>{p()},[i]);const g=()=>{a(i+10),p()};return e.jsxs(cs,{direction:"column",justify:"flex-end",children:[e.jsx(Te,{align:"center",direction:"row",justify:"space-between",children:e.jsx(k,{className:"title",children:"Content I've added to the graph"})}),e.jsxs(ds,{align:"center",justify:o?"center":"flex-start",children:[o?e.jsx(I,{color:d.white}):e.jsx(e.Fragment,{children:e.jsx(ss,{nodes:t})}),l?e.jsx(ps,{onClick:g,children:"Load more"}):e.jsx(us,{children:"No new nodes available"})]})]})},cs=x(u)`
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
`,ds=x(u)`
  min-height: 0;
  overflow: auto;
  flex: 1;
  width: 100%;
`,ps=x(fn)`
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
`,us=x.div`
  margin-top: 10px;
  color: ${d.GRAY3};
  font-family: Barlow;
  font-size: 14px;
`,hs=[{label:It,component:ls},{label:Hr,component:Jn},{label:Bt,component:Fn},{label:Pt,component:Xo}],xs=t=>{const{children:r,value:o,index:s,...i}=t;return o===s?e.jsx(js,{"aria-labelledby":`simple-tab-${s}`,hidden:o!==s,id:`simple-tabpanel-${s}`,role:"tabpanel",...i,children:r}):null};function fs(t){return{id:`simple-tab-${t}`,"aria-controls":`simple-tabpanel-${t}`}}const ms=()=>{const[t,r]=h.useState(0),[o]=pe(n=>[n.isAdmin]),[s]=Jt(n=>[n.queuedSourcesFlag]),i=er(),a=(n,c)=>{r(c)},l=hs.filter(({label:n})=>n===Pt?o:n===Bt?o&&s:n===It?i:!0);return e.jsxs(bs,{direction:"column",children:[e.jsx(gs,{"aria-label":"sources tabs",onChange:a,value:t,children:l.map((n,c)=>e.jsx(ys,{color:d.white,disableRipple:!0,label:n.label,...fs(c)},n.label))}),l.map((n,c)=>e.jsx(xs,{index:c,value:t,children:e.jsx(n.component,{})},n.label))]})},gs=x(tn)`
  && {
    background: rgba(0, 0, 0, 0.2);

    .MuiTabs-indicator {
      background: ${d.primaryBlue};
    }
  }
`,ys=x(rn)`
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
`,js=x(u)`
  display: flex;
  flex: 1;
  min-height: 572px;
  padding: 20px 0;
  max-height: 572px;
`,bs=x(u)`
  min-height: 0;
  flex: 1;
`,ge={required:{message:"The field is required",value:!0}},Cs=({initialValues:t})=>{const r=ue({defaultValues:t,mode:"onSubmit"}),{isSubmitting:o}=r.formState,s=r.handleSubmit(async i=>{try{await tr(i)}catch(a){console.warn(a)}});return e.jsx(he,{...r,children:e.jsx("form",{id:"add-node-form",onSubmit:s,children:e.jsxs(e.Fragment,{children:[e.jsxs(u,{children:[e.jsx(u,{pt:12,children:e.jsx(ce,{id:"cy-about-title-id",label:"Graph Title",maxLength:50,name:"title",placeholder:"Type graph title here...",rules:{...ge}})}),e.jsx(u,{pt:12,children:e.jsx(ce,{id:"cy-about-id",label:"Graph Description",maxLength:50,name:"description",placeholder:"Type graph description here...",rules:{...ge}})}),e.jsx(u,{pt:12,children:e.jsx(ce,{id:"cy-about-mission_statement-id",label:"Mission Statement",maxLength:50,name:"mission_statement",placeholder:"Type mission statement here...",rules:{...ge}})}),e.jsx(u,{pt:12,children:e.jsx(ce,{id:"cy-about-search_term-id",label:"Search Term",maxLength:50,name:"search_term",placeholder:"Type search term here...",rules:{...ge}})})]}),e.jsx(u,{pt:8,children:o?e.jsx(vs,{children:e.jsx(I,{color:d.white,size:20})}):e.jsx(Mt,{disabled:o,id:"add-node-submit-cta",kind:"big",type:"submit",children:"Save changes"})})]})})})},vs=x(u).attrs({align:"center",background:"primaryButton",borderRadius:8,justify:"center"})`
  padding: 16px 24px;
  opacity: 0.5;
`,ws=({initialValues:t})=>e.jsxs(e.Fragment,{children:[t.title&&e.jsxs(u,{pt:12,children:[e.jsx(k,{kind:"regular",children:"Graph Title"}),e.jsx(u,{pt:12,children:e.jsx(k,{className:"value",kind:"medium",children:t.title})})]}),t.description&&e.jsxs(u,{pt:12,children:[e.jsx(k,{kind:"regular",children:"Graph Description"}),e.jsx(u,{pt:12,children:e.jsx(k,{className:"value",kind:"medium",children:t.description})})]}),t.mission_statement&&e.jsxs(u,{pt:12,children:[e.jsx(k,{kind:"regular",children:"Mission Statement"}),e.jsx(u,{pt:12,children:e.jsx(k,{className:"value",kind:"medium",children:t.mission_statement})})]})]}),Ss=()=>{const[t]=pe(o=>[o.isAdmin]),r=ie(o=>o.appMetaData);return e.jsxs(_s,{align:"stretch",direction:"column",justify:"flex-end",children:[e.jsx(ks,{align:"center",direction:"row",justify:"space-between",children:e.jsx(k,{className:"title",children:"About"})}),e.jsx(Ts,{align:"stretch",justify:"flex-start",children:t?e.jsx(Cs,{initialValues:r}):e.jsx(ws,{initialValues:r})})]})},_s=x(u)`
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
`,Ts=x(u)`
  min-height: 0;
  overflow: auto;
  flex: 1;
  width: 100%;
`,ks=x(u)`
  margin-bottom: 16px;
  ${k} {
    margin-bottom: 0;
  }
`;var As=["type","layout","connectNulls","ref"];function oe(t){"@babel/helpers - typeof";return oe=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},oe(t)}function $s(t,r){if(t==null)return{};var o=Es(t,r),s,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(i=0;i<a.length;i++)s=a[i],!(r.indexOf(s)>=0)&&Object.prototype.propertyIsEnumerable.call(t,s)&&(o[s]=t[s])}return o}function Es(t,r){if(t==null)return{};var o={},s=Object.keys(t),i,a;for(a=0;a<s.length;a++)i=s[a],!(r.indexOf(i)>=0)&&(o[i]=t[i]);return o}function de(){return de=Object.assign?Object.assign.bind():function(t){for(var r=1;r<arguments.length;r++){var o=arguments[r];for(var s in o)Object.prototype.hasOwnProperty.call(o,s)&&(t[s]=o[s])}return t},de.apply(this,arguments)}function ut(t,r){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);r&&(s=s.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),o.push.apply(o,s)}return o}function O(t){for(var r=1;r<arguments.length;r++){var o=arguments[r]!=null?arguments[r]:{};r%2?ut(Object(o),!0).forEach(function(s){F(t,s,o[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):ut(Object(o)).forEach(function(s){Object.defineProperty(t,s,Object.getOwnPropertyDescriptor(o,s))})}return t}function ee(t){return Bs(t)||Ps(t)||Ns(t)||Ls()}function Ls(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ns(t,r){if(t){if(typeof t=="string")return Oe(t,r);var o=Object.prototype.toString.call(t).slice(8,-1);if(o==="Object"&&t.constructor&&(o=t.constructor.name),o==="Map"||o==="Set")return Array.from(t);if(o==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return Oe(t,r)}}function Ps(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Bs(t){if(Array.isArray(t))return Oe(t)}function Oe(t,r){(r==null||r>t.length)&&(r=t.length);for(var o=0,s=new Array(r);o<r;o++)s[o]=t[o];return s}function Is(t,r){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")}function ht(t,r){for(var o=0;o<r.length;o++){var s=r[o];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,Ot(s.key),s)}}function Ds(t,r,o){return r&&ht(t.prototype,r),o&&ht(t,o),Object.defineProperty(t,"prototype",{writable:!1}),t}function Ms(t,r){if(typeof r!="function"&&r!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(r&&r.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),r&&ze(t,r)}function ze(t,r){return ze=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(s,i){return s.__proto__=i,s},ze(t,r)}function Os(t){var r=Rs();return function(){var s=je(t),i;if(r){var a=je(this).constructor;i=Reflect.construct(s,arguments,a)}else i=s.apply(this,arguments);return zs(this,i)}}function zs(t,r){if(r&&(oe(r)==="object"||typeof r=="function"))return r;if(r!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Y(t)}function Y(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function Rs(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function je(t){return je=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(o){return o.__proto__||Object.getPrototypeOf(o)},je(t)}function F(t,r,o){return r=Ot(r),r in t?Object.defineProperty(t,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[r]=o,t}function Ot(t){var r=Fs(t,"string");return oe(r)==="symbol"?r:String(r)}function Fs(t,r){if(oe(t)!=="object"||t===null)return t;var o=t[Symbol.toPrimitive];if(o!==void 0){var s=o.call(t,r||"default");if(oe(s)!=="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(t)}var xe=function(t){Ms(o,t);var r=Os(o);function o(){var s;Is(this,o);for(var i=arguments.length,a=new Array(i),l=0;l<i;l++)a[l]=arguments[l];return s=r.call.apply(r,[this].concat(a)),F(Y(s),"state",{isAnimationFinished:!0,totalLength:0}),F(Y(s),"generateSimpleStrokeDasharray",function(n,c){return"".concat(c,"px ").concat(n-c,"px")}),F(Y(s),"getStrokeDasharray",function(n,c,p){var g=p.reduce(function(L,N){return L+N});if(!g)return s.generateSimpleStrokeDasharray(c,n);for(var m=Math.floor(n/g),y=n%g,j=c-n,b=[],f=0,C=0;f<p.length;C+=p[f],++f)if(C+p[f]>y){b=[].concat(ee(p.slice(0,f)),[y-C]);break}var S=b.length%2===0?[0,j]:[j];return[].concat(ee(o.repeat(p,m)),ee(b),S).map(function(L){return"".concat(L,"px")}).join(", ")}),F(Y(s),"id",gr("recharts-line-")),F(Y(s),"pathRef",function(n){s.mainCurve=n}),F(Y(s),"handleAnimationEnd",function(){s.setState({isAnimationFinished:!0}),s.props.onAnimationEnd&&s.props.onAnimationEnd()}),F(Y(s),"handleAnimationStart",function(){s.setState({isAnimationFinished:!1}),s.props.onAnimationStart&&s.props.onAnimationStart()}),s}return Ds(o,[{key:"componentDidMount",value:function(){if(this.props.isAnimationActive){var i=this.getTotalLength();this.setState({totalLength:i})}}},{key:"componentDidUpdate",value:function(){if(this.props.isAnimationActive){var i=this.getTotalLength();i!==this.state.totalLength&&this.setState({totalLength:i})}}},{key:"getTotalLength",value:function(){var i=this.mainCurve;try{return i&&i.getTotalLength&&i.getTotalLength()||0}catch{return 0}}},{key:"renderErrorBar",value:function(i,a){if(this.props.isAnimationActive&&!this.state.isAnimationFinished)return null;var l=this.props,n=l.points,c=l.xAxis,p=l.yAxis,g=l.layout,m=l.children,y=yr(m,jr);if(!y)return null;var j=function(C,S){return{x:C.x,y:C.y,value:C.value,errorVal:Tt(C.payload,S)}},b={clipPath:i?"url(#clipPath-".concat(a,")"):null};return D.createElement(ke,b,y.map(function(f){return D.cloneElement(f,{key:"bar-".concat(f.props.dataKey),data:n,xAxis:c,yAxis:p,layout:g,dataPointFormatter:j})}))}},{key:"renderDots",value:function(i,a,l){var n=this.props.isAnimationActive;if(n&&!this.state.isAnimationFinished)return null;var c=this.props,p=c.dot,g=c.points,m=c.dataKey,y=me(this.props),j=me(p,!0),b=g.map(function(C,S){var L=O(O(O({key:"dot-".concat(S),r:3},y),j),{},{value:C.value,dataKey:m,cx:C.x,cy:C.y,index:S,payload:C.payload});return o.renderDotItem(p,L)}),f={clipPath:i?"url(#clipPath-".concat(a?"":"dots-").concat(l,")"):null};return D.createElement(ke,de({className:"recharts-line-dots",key:"dots"},f),b)}},{key:"renderCurveStatically",value:function(i,a,l,n){var c=this.props,p=c.type,g=c.layout,m=c.connectNulls;c.ref;var y=$s(c,As),j=O(O(O({},me(y,!0)),{},{fill:"none",className:"recharts-line-curve",clipPath:a?"url(#clipPath-".concat(l,")"):null,points:i},n),{},{type:p,layout:g,connectNulls:m});return D.createElement(br,de({},j,{pathRef:this.pathRef}))}},{key:"renderCurveWithAnimation",value:function(i,a){var l=this,n=this.props,c=n.points,p=n.strokeDasharray,g=n.isAnimationActive,m=n.animationBegin,y=n.animationDuration,j=n.animationEasing,b=n.animationId,f=n.animateNewValues,C=n.width,S=n.height,L=this.state,N=L.prevPoints,B=L.totalLength;return D.createElement(Cr,{begin:m,duration:y,isActive:g,easing:j,from:{t:0},to:{t:1},key:"line-".concat(b),onAnimationEnd:this.handleAnimationEnd,onAnimationStart:this.handleAnimationStart},function($){var w=$.t;if(N){var M=N.length/c.length,A=c.map(function(P,fe){var T=Math.floor(fe*M);if(N[T]){var v=N[T],E=ae(v.x,P.x),V=ae(v.y,P.y);return O(O({},P),{},{x:E(w),y:V(w)})}if(f){var zt=ae(C*2,P.x),Rt=ae(S/2,P.y);return O(O({},P),{},{x:zt(w),y:Rt(w)})}return O(O({},P),{},{x:P.x,y:P.y})});return l.renderCurveStatically(A,i,a)}var R=ae(0,B),H=R(w),U;if(p){var Q="".concat(p).split(/[,\s]+/gim).map(function(P){return parseFloat(P)});U=l.getStrokeDasharray(H,B,Q)}else U=l.generateSimpleStrokeDasharray(B,H);return l.renderCurveStatically(c,i,a,{strokeDasharray:U})})}},{key:"renderCurve",value:function(i,a){var l=this.props,n=l.points,c=l.isAnimationActive,p=this.state,g=p.prevPoints,m=p.totalLength;return c&&n&&n.length&&(!g&&m>0||!vr(g,n))?this.renderCurveWithAnimation(i,a):this.renderCurveStatically(n,i,a)}},{key:"render",value:function(){var i,a=this.props,l=a.hide,n=a.dot,c=a.points,p=a.className,g=a.xAxis,m=a.yAxis,y=a.top,j=a.left,b=a.width,f=a.height,C=a.isAnimationActive,S=a.id;if(l||!c||!c.length)return null;var L=this.state.isAnimationFinished,N=c.length===1,B=qe("recharts-line",p),$=g&&g.allowDataOverflow,w=m&&m.allowDataOverflow,M=$||w,A=Ie(S)?this.id:S,R=(i=me(n))!==null&&i!==void 0?i:{r:3,strokeWidth:2},H=R.r,U=H===void 0?3:H,Q=R.strokeWidth,P=Q===void 0?2:Q,fe=wr(n)?n:{},T=fe.clipDot,v=T===void 0?!0:T,E=U*2+P;return D.createElement(ke,{className:B},$||w?D.createElement("defs",null,D.createElement("clipPath",{id:"clipPath-".concat(A)},D.createElement("rect",{x:$?j:j-b/2,y:w?y:y-f/2,width:$?b:b*2,height:w?f:f*2})),!v&&D.createElement("clipPath",{id:"clipPath-dots-".concat(A)},D.createElement("rect",{x:j-E/2,y:y-E/2,width:b+E,height:f+E}))):null,!N&&this.renderCurve(M,A),this.renderErrorBar(M,A),(N||n)&&this.renderDots(M,v,A),(!C||L)&&Sr.renderCallByParent(this.props,c))}}],[{key:"getDerivedStateFromProps",value:function(i,a){return i.animationId!==a.prevAnimationId?{prevAnimationId:i.animationId,curPoints:i.points,prevPoints:a.curPoints}:i.points!==a.curPoints?{curPoints:i.points}:null}},{key:"repeat",value:function(i,a){for(var l=i.length%2!==0?[].concat(ee(i),[0]):i,n=[],c=0;c<a;++c)n=[].concat(ee(n),ee(l));return n}},{key:"renderDotItem",value:function(i,a){var l;if(D.isValidElement(i))l=D.cloneElement(i,a);else if(rr(i))l=i(a);else{var n=qe("recharts-line-dot",i?i.className:"");l=D.createElement(_t,de({},a,{className:n}))}return l}}]),o}(h.PureComponent);F(xe,"displayName","Line");F(xe,"defaultProps",{xAxisId:0,yAxisId:0,connectNulls:!1,activeDot:!0,dot:!0,legendType:"line",stroke:"#3182bd",strokeWidth:1,fill:"#fff",points:[],isAnimationActive:!mr.isSsr,animateNewValues:!0,animationBegin:0,animationDuration:1500,animationEasing:"ease",hide:!1,label:!1});F(xe,"getComposedData",function(t){var r=t.props,o=t.xAxis,s=t.yAxis,i=t.xAxisTicks,a=t.yAxisTicks,l=t.dataKey,n=t.bandSize,c=t.displayedData,p=t.offset,g=r.layout,m=c.map(function(y,j){var b=Tt(y,l);return g==="horizontal"?{x:Qe({axis:o,ticks:i,bandSize:n,entry:y,index:j}),y:Ie(b)?null:s.scale(b),value:b,payload:y}:{x:Ie(b)?null:o.scale(b),y:Qe({axis:s,ticks:a,bandSize:n,entry:y,index:j}),value:b,payload:y}});return O({points:m,layout:g},p)});var Vs=_r({chartName:"LineChart",GraphicalChild:xe,axisComponents:[{axisType:"xAxis",AxisComp:kt},{axisType:"yAxis",AxisComp:At}],formatAxisMap:Tr});const Ws=({cx:t,cy:r})=>e.jsx(_t,{cx:t,cy:r,fill:d.blueTextAccent,r:2}),Us=({data:t,width:r=500,height:o=300})=>e.jsx(e.Fragment,{children:(t==null?void 0:t.length)&&e.jsxs(Vs,{data:t,height:o,id:"cy-sentiment-chart",margin:{bottom:5,left:-20,right:30,top:5},width:r,children:[e.jsx(kr,{stroke:d.lightBlue300,strokeDasharray:"5 5"}),e.jsx(kt,{dataKey:"date",interval:Math.floor(t.length/3),stroke:d.blueTextAccent}),e.jsx(At,{domain:[0,10],stroke:d.blueTextAccent}),e.jsx(Ar,{}),e.jsx(xe,{dataKey:"score",dot:e.jsx(Ws,{}),stroke:"#8884d8",type:"monotone"})]})}),Gs=()=>{const[t,r]=h.useState(void 0),[o]=pe(l=>[l.setBudget]),[s,i]=h.useState(!1),a=async()=>{i(!0),nr(o).then(async l=>{r(l==null?void 0:l.data.filter(n=>n.date).map(n=>({date:or.unix(Number(String(n.date).split(".")[0])).format("MM/DD/YY"),score:n.sentiment_score}))),await wt(o)}).catch().finally(()=>{i(!1)})};return e.jsxs(Hs,{align:"flex-start",direction:"column",id:"cy-sentiment-chart-wrapper",justify:"flex-end",children:[e.jsx(k,{className:"title",children:"Sentiment chart"}),s&&e.jsx(Xr,{alignItems:"center",component:"div",flexGrow:1,p:4,spacing:2,width:"100%",children:e.jsx($r,{color:d.white})}),!(t!=null&&t.length)&&e.jsx(Ys,{className:"button",id:"cy-get-sentiments-btn",onClick:a,children:"Get top 100 sentiments"}),e.jsx(Us,{data:t})]})},Hs=x(u)`
  border-radius: 8px;
  box-shadow: 0px 5px 6px rgb(0 0 0 / 50%);
  padding: 16px;

  .title {
    margin-bottom: 16px;
    font-size: 20px;
  }
`,Ys=x(Mt)`
  height: 48px;
`,Zs=600,Ks={about:e.jsx(Ss,{}),sentiment:e.jsx(Gs,{}),sources:e.jsx(ms,{}),"":null},qs=()=>{const[t,r]=ie(o=>[o.secondarySidebarActiveTab,o.setSecondarySidebarActiveTab]);return e.jsx(Er,{direction:"left",in:!!t,mountOnEnter:!0,unmountOnExit:!0,children:e.jsxs(Qs,{id:"secondary-sidebar-wrapper",children:[e.jsx(Xs,{id:"cy-close-secondary-sidebar",onClick:()=>r(""),children:e.jsx($t,{})}),Ks[t]]})})},Qs=x(u)(({theme:t})=>({background:d.BG1,height:"100vh",padding:"16px 20px",width:"100%",zIndex:30,display:"flex",[t.breakpoints.up("sm")]:{width:Zs}})),Xs=x(u).attrs({align:"center",justify:"center",p:5})`
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
`,Js=x(pr)`
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
`,ei=x(u)`
  height: 100%;
  width: 100%;
  background-color: ${d.black};
`,ti=x(u)`
  position: absolute;
  bottom: 8px;
  left: 8px;
  color: ${d.white};
  font-size: 12px;
  opacity: 0.5;
`,ri=h.lazy(()=>W(()=>import("./index-71c46bc4.js"),["assets/index-71c46bc4.js","assets/index-8c6e7d86.js","assets/index-3f17fe3b.css","assets/SourcesTableIcon-4533857d.js","assets/SettingsIcon-5d35eddc.js","assets/index-3a2e60ff.js"]).then(({MainToolbar:t})=>({default:t}))),ni=h.lazy(()=>W(()=>import("./index-cb649ed7.js"),["assets/index-cb649ed7.js","assets/index-8c6e7d86.js","assets/index-3f17fe3b.css","assets/index-267bee38.js","assets/react-toastify.esm-fcf4c1e7.js","assets/react-toastify-b60658ac.css","assets/generateCategoricalChart-d76b6bfd.js","assets/Popover-94860109.js","assets/useSlotProps-723c9ba2.js","assets/InfoIcon-27e3afdb.js","assets/index-9064bf54.js","assets/index.esm-5e8d1785.js","assets/EditIcon-80229cd3.js","assets/PlusIcon-b3e2a8bf.js","assets/index-3a2e60ff.js","assets/ChevronUpIcon-823264dd.js","assets/ChevronDownIcon-ec5e4f6b.js","assets/index-d010b8aa.js","assets/index-521d6d55.js","assets/index-c3d690f6.js","assets/index-2db2798f.js","assets/Popper-d3638f43.js","assets/CheckIcon-22266ff6.js","assets/Stack-a08a5235.js"]).then(({Universe:t})=>({default:t}))),oi=h.lazy(()=>W(()=>import("./index-294b099b.js"),["assets/index-294b099b.js","assets/index-8c6e7d86.js","assets/index-3f17fe3b.css","assets/react-toastify.esm-fcf4c1e7.js","assets/react-toastify-b60658ac.css","assets/CheckIcon-22266ff6.js","assets/ChevronDownIcon-ec5e4f6b.js","assets/ChevronUpIcon-823264dd.js","assets/index-d010b8aa.js","assets/useSlotProps-723c9ba2.js","assets/Popover-94860109.js","assets/ChevronRightIcon-e9aa1b62.js","assets/Select-b8024a9f.js","assets/generateCategoricalChart-d76b6bfd.js","assets/InfoIcon-27e3afdb.js","assets/index.esm-5e8d1785.js","assets/ChevronRightIcon-6125620a.css","assets/index-51db6ff4.js","assets/index-9064bf54.js","assets/Skeleton-8c3edb8d.js","assets/PlusIcon-b3e2a8bf.js","assets/index-3a2e60ff.js","assets/index-2db2798f.js"]).then(({SideBar:t})=>({default:t}))),si=()=>{const[t,r]=pe(w=>[w.setBudget,w.setNodeCount]),[o,s]=h.useState(!1),{setSidebarOpen:i,currentSearch:a,setCurrentSearch:l,setRelevanceSelected:n,setTranscriptOpen:c}=ie(w=>w),p=Lr(w=>w.setTeachMeAnswer),{data:g,setData:m,fetchData:y,graphStyle:j,setSelectedNode:b,setCategoryFilter:f}=se(w=>w),C=ur(),S=ue({mode:"onChange"}),L=S.handleSubmit(({search:w})=>{c(!1),b(null),n(!1),l(w),p(""),f(null)}),N=h.useCallback(async()=>{await y(t,{...a?{word:a}:{}}),i(!0),a?await wt(t):b(null)},[y,t,a,i,b]);h.useEffect(()=>{N()},[a,N]);const B=()=>{if(g){s(!0);const w=ir(j,g.nodes);m(w),s(!1)}};h.useEffect(()=>{B()},[j]);const $=h.useCallback(()=>{r("INCREMENT")},[r]);return h.useEffect(()=>{C&&(C.on("connect_error",w=>{console.error("Socket connection error:",w)}),C.on("newnode",$))},[C,$]),h.useEffect(()=>()=>{C&&C.disconnect()},[C]),e.jsxs(e.Fragment,{children:[e.jsx(hr,{}),e.jsx(In,{}),e.jsx(xr,{hidden:!sr}),e.jsx(h.Suspense,{fallback:e.jsx("div",{children:"Loading..."}),children:e.jsxs(ei,{direction:"row",children:[e.jsx(Nr,{children:e.jsxs(he,{...S,children:[e.jsx(ri,{}),e.jsx(oi,{onSubmit:L}),e.jsx(ni,{}),o&&e.jsx(vn,{fullSize:!1}),e.jsx(bn,{}),e.jsx(qs,{}),e.jsx(Nn,{}),e.jsxs(ti,{children:["v",fr]}),e.jsx(St,{})]})}),e.jsx(Ln,{}),e.jsx(Js,{}),e.jsx(zn,{})]})})]})},wi=Object.freeze(Object.defineProperty({__proto__:null,App:si},Symbol.toStringTag,{value:"Module"}));export{Ao as E,bn as O,vn as P,Se as S,_ as a,_e as b,ms as c,wi as i};
