import{g as zt,a as Ot,s as Re,c as ht,_ as me,r as x,u as Mt,b as Dt,j as e,d as Rt,e as Ft,F as h,T as _,f as u,h as c,i as re,k as ne,l as U,m as F,n as Wt,S as Vt,o as Gt,p as Ut,q as ut,t as xt,v as Ue,Y as He,R as Ye,w as Ht,x as de,y as ft,z as mt,A as Yt,B as Zt,C as Kt,D as je,E as qt,G as P,H as Qt,I as Xt,J as Jt,K as er,L as tr,M as rr,N as nr,O as gt,P as or,Q as sr}from"./index-b85f35cf.js";import{A as ir,a as yt,C as E,u as ar,B as H,I as V,b as K,S as be,c as pe,F as he,Q as lr,d as cr,G as dr,L as pr,v as hr}from"./react-toastify.esm-ce67a4f9.js";import{f as Ze,G as ur,u as xr,c as Ke,D as jt,a as fr,E as mr,L as ke,b as xe,C as gr,A as yr,i as ie,d as jr,e as Be,g as br,h as Cr,j as bt,k as qe,l as vr,X as Ct,Y as vt,m as wr,n as Sr,T as _r,P as Tr,S as kr,o as Ar,p as $r}from"./generateCategoricalChart-a6175423.js";import{M as Lr,a as Er,b as Nr,c as Pr,d as wt,e as Ir}from"./index.esm-ac56504e.js";import{T as Br,a as J,b as zr,F as ze,M as Ce,C as St,N as Or,c as Mr,D as _t,d as Dr}from"./ChevronUpIcon-6e1fca04.js";import{s as ee,T as Tt,u as z,A as Fe,I as Rr,E as Fr,D as Wr,a as Qe,b as kt,Q as At,V as $t,S as Vr}from"./index-856cc0ad.js";import{P as ve,I as we,a as We,F as Gr}from"./Popover-28c1573e.js";import{B as Ur,T as le}from"./index-e6f0fb8d.js";import{u as G}from"./index-b9c9b7e2.js";import{B as Ve}from"./index-0c223900.js";import{P as Lt}from"./Popper-704ca55a.js";import{C as Ge}from"./CheckIcon-b94a1aa2.js";import{C as Hr}from"./ChevronDownIcon-cf5b6e54.js";import{e as Yr,S as Zr}from"./Stack-b0e83988.js";import{P as Kr}from"./PlusIcon-261fd641.js";import{T as qr,a as Qr,B as Et}from"./index-341edfe1.js";function Xr(t){return zt("MuiTypography",t)}Ot("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);const Jr=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],en=t=>{const{align:r,gutterBottom:o,noWrap:s,paragraph:i,variant:l,classes:a}=t,n={root:["root",l,t.align!=="inherit"&&`align${ht(r)}`,o&&"gutterBottom",s&&"noWrap",i&&"paragraph"]};return Ft(n,Xr,a)},tn=Re("span",{name:"MuiTypography",slot:"Root",overridesResolver:(t,r)=>{const{ownerState:o}=t;return[r.root,o.variant&&r[o.variant],o.align!=="inherit"&&r[`align${ht(o.align)}`],o.noWrap&&r.noWrap,o.gutterBottom&&r.gutterBottom,o.paragraph&&r.paragraph]}})(({theme:t,ownerState:r})=>me({margin:0},r.variant==="inherit"&&{font:"inherit"},r.variant!=="inherit"&&t.typography[r.variant],r.align!=="inherit"&&{textAlign:r.align},r.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},r.gutterBottom&&{marginBottom:"0.35em"},r.paragraph&&{marginBottom:16})),Xe={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},rn={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},nn=t=>rn[t]||t,on=x.forwardRef(function(r,o){const s=Mt({props:r,name:"MuiTypography"}),i=nn(s.color),l=Yr(me({},s,{color:i})),{align:a="inherit",className:n,component:d,gutterBottom:p=!1,noWrap:g=!1,paragraph:f=!1,variant:y="body1",variantMapping:j=Xe}=l,b=Dt(l,Jr),m=me({},l,{align:a,color:i,className:n,component:d,gutterBottom:p,noWrap:g,paragraph:f,variant:y,variantMapping:j}),C=d||(f?"p":j[y]||Xe[y])||"span",w=en(m);return e.jsx(tn,me({as:C,ref:o,ownerState:m,className:Rt(w.root,n)},b))}),Je=on;function Oe(t){const r=new Date(Number(t)*1e3),o=r.getFullYear(),s=(1+r.getMonth()).toString().padStart(2,"0");return`${r.getDate().toString().padStart(2,"0")}/${s}/${o}`}const sn=({twitterHandle:t})=>e.jsx(e.Fragment,{children:e.jsx(h,{direction:"row",children:e.jsx(h,{align:"flex-start",pb:12,children:e.jsxs(_,{children:["Tweet by @",t]})})})}),an=u(h)(({theme:t})=>({position:"absolute",top:"65px",right:"55px",width:"300px",pointerEvents:"none",background:c.dashboardHeader,boxShadow:"0px 1px 6px rgba(0, 0, 0, 0.1)",color:c.primaryText1,zIndex:100,transition:"opacity 0.6s",padding:t.spacing(2,3),[t.breakpoints.down("sm")]:{padding:t.spacing(1,1.5)}})),ln=u(h)`
  width: 22.5%;
`,cn=({node:t})=>{if(!t)return null;const{node_type:r,show_title:o,episode_title:s,description:i,label:l,text:a,type:n,twitter_handle:d}=t,p=t.guests;let g=!1,f=!1;p&&(p.length&&p[0]!==null&&(g=!0),typeof p[0]=="object"&&(f=!0));let y=t.image_url;if(n==="twitter_space"&&(y="twitter_placeholder.png"),y==null)switch(r){case"guest":y="person_placeholder2.png";break;default:y="noimage.jpeg"}return r==="topic"?null:e.jsx(an,{borderRadius:8,px:24,py:16,children:r==="tweet"?e.jsx(sn,{twitterHandle:d}):e.jsxs(e.Fragment,{children:[e.jsxs(h,{direction:"row",children:[e.jsx(ln,{}),e.jsx(h,{align:"flex-start",pb:12,children:e.jsx(_,{children:r==null?void 0:r.toUpperCase()})})]}),e.jsxs(h,{direction:"row",children:[e.jsx(h,{pr:12,children:e.jsx(ir,{src:y,type:"person"})}),e.jsxs("div",{children:[n==="guest"?e.jsxs(h,{direction:"column",children:[e.jsx(_,{children:l}),a&&e.jsx(h,{pt:4,children:e.jsxs(_,{color:"primaryText1",kind:"tiny",children:["@",a]})})]}):e.jsx(_,{color:"primaryText1",kind:"tiny",children:o}),e.jsxs(h,{pt:4,children:[r==="clip"||r==="episode"&&e.jsx(_,{color:"primaryText1",children:"Episode"}),r==="clip"?e.jsx(_,{as:"div",kind:"regularBold",children:Ze(i)}):e.jsx(_,{color:"primaryText1",kind:"tiny",children:s})]}),e.jsxs(h,{pt:12,children:[r==="clip"&&e.jsx(_,{color:"primaryText1",children:"Episode"}),e.jsx(_,{color:"primaryText1",kind:"tiny",children:r==="clip"?s:Ze(i)})]}),g&&e.jsxs(h,{pt:12,children:[e.jsx(_,{color:"primaryText1",children:"People"}),e.jsx(h,{pt:4,children:e.jsx(_,{color:"primaryText1",kind:"tiny",children:f?p.map(j=>j.name?j.name:`@${j.twitter_handle}`).join(", "):p==null?void 0:p.join(", ")})})]})]})]})]})})},dn=()=>{const[t]=re(r=>[r.hoveredNode]);return e.jsxs(pn,{children:[t&&e.jsx("div",{id:"tooltip-portal",children:e.jsx(cn,{node:t})}),e.jsx(yt,{})]})},pn=u("div")(({theme:t})=>({position:"absolute",zIndex:1,top:0,left:0,userSelect:"none",pointerEvents:"none",display:"flex",justifyContent:"flex-end",alignItems:"flex-start",height:"100%",width:"100%",padding:"16px",[t.breakpoints.down("sm")]:{top:50}})),hn=({fullSize:t=!0})=>{const r=ne(o=>o.sidebarIsOpen);return e.jsx(un,{align:"center",className:U({"sidebar-is-open":r&&!t}),justify:"center",children:e.jsx(E,{color:c.SECONDARY_BLUE,size:64})})},un=u(h)`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  background-color: ${c.black};
  z-index: 1;
`,xn=x.lazy(()=>F(()=>import("./index-47761ce5.js"),["assets/index-47761ce5.js","assets/index-b85f35cf.js","assets/index-3f17fe3b.css","assets/index-0c223900.js","assets/index-b9c9b7e2.js","assets/react-toastify.esm-ce67a4f9.js","assets/react-toastify-b60658ac.css","assets/index-341edfe1.js","assets/useSlotProps-b8a587b0.js","assets/index-e6f0fb8d.js","assets/index.esm-ac56504e.js","assets/InfoIcon-de2f1e11.js","assets/index-39ab8de8.js","assets/Popover-28c1573e.js","assets/Select-f3cb55de.js","assets/Stack-b0e83988.js","assets/Popper-704ca55a.js","assets/index-30d16895.js","assets/constants-cde8ebc3.js","assets/DeleteIcon-7b7519eb.js","assets/PlusIcon-261fd641.js","assets/EditIcon-67ff5cde.js","assets/ChevronUpIcon-6e1fca04.js","assets/ChevronDownIcon-cf5b6e54.js","assets/generateCategoricalChart-a6175423.js","assets/index-856cc0ad.js","assets/CheckIcon-b94a1aa2.js"]).then(({SettingsModal:t})=>({default:t}))),fn=x.lazy(()=>F(()=>import("./index-7ec3af29.js"),["assets/index-7ec3af29.js","assets/index-b85f35cf.js","assets/index-3f17fe3b.css","assets/react-toastify.esm-ce67a4f9.js","assets/react-toastify-b60658ac.css","assets/index-0c223900.js","assets/index-b9c9b7e2.js","assets/index-7e285ddc.js","assets/index.esm-ac56504e.js","assets/CheckIcon-b94a1aa2.js","assets/index-e6f0fb8d.js","assets/InfoIcon-de2f1e11.js"]).then(({AddContentModal:t})=>({default:t}))),mn=x.lazy(()=>F(()=>import("./index-2be12e8f.js"),["assets/index-2be12e8f.js","assets/index-b85f35cf.js","assets/index-3f17fe3b.css","assets/react-toastify.esm-ce67a4f9.js","assets/react-toastify-b60658ac.css","assets/index-0c223900.js","assets/index-b9c9b7e2.js","assets/index-7e285ddc.js","assets/index.esm-ac56504e.js","assets/CheckIcon-b94a1aa2.js","assets/index-e6f0fb8d.js","assets/InfoIcon-de2f1e11.js","assets/index-30d16895.js","assets/index-39ab8de8.js","assets/Popover-28c1573e.js","assets/useSlotProps-b8a587b0.js","assets/Select-f3cb55de.js","assets/Stack-b0e83988.js","assets/Popper-704ca55a.js","assets/constants-cde8ebc3.js"]).then(({AddItemModal:t})=>({default:t}))),gn=x.lazy(()=>F(()=>import("./index-d7a5eaa0.js"),["assets/index-d7a5eaa0.js","assets/index-b85f35cf.js","assets/index-3f17fe3b.css","assets/index-0c223900.js","assets/index-b9c9b7e2.js","assets/react-toastify.esm-ce67a4f9.js","assets/react-toastify-b60658ac.css","assets/generateCategoricalChart-a6175423.js","assets/Popover-28c1573e.js","assets/useSlotProps-b8a587b0.js","assets/InfoIcon-de2f1e11.js","assets/index.esm-ac56504e.js","assets/ChevronUpIcon-6e1fca04.js","assets/ChevronDownIcon-cf5b6e54.js","assets/index-341edfe1.js","assets/index-856cc0ad.js","assets/index-e6f0fb8d.js","assets/Popper-704ca55a.js","assets/CheckIcon-b94a1aa2.js","assets/Stack-b0e83988.js","assets/PlusIcon-261fd641.js"]).then(({SourcesTableModal:t})=>({default:t}))),yn=x.lazy(()=>F(()=>import("./index-6d7b2c18.js"),["assets/index-6d7b2c18.js","assets/index-b85f35cf.js","assets/index-3f17fe3b.css","assets/index-0c223900.js","assets/index-b9c9b7e2.js","assets/react-toastify.esm-ce67a4f9.js","assets/react-toastify-b60658ac.css","assets/index-e6f0fb8d.js","assets/index.esm-ac56504e.js","assets/InfoIcon-de2f1e11.js","assets/Skeleton-bd55acf5.js"]).then(({EditNodeNameModal:t})=>({default:t}))),jn=x.lazy(()=>F(()=>import("./index-111127f1.js"),["assets/index-111127f1.js","assets/index-b85f35cf.js","assets/index-3f17fe3b.css","assets/index-0c223900.js","assets/index-b9c9b7e2.js","assets/react-toastify.esm-ce67a4f9.js","assets/react-toastify-b60658ac.css","assets/Skeleton-bd55acf5.js"]).then(({RemoveNodeModal:t})=>({default:t}))),bn=x.lazy(()=>F(()=>import("./index-31f1e4e1.js"),["assets/index-31f1e4e1.js","assets/index-b85f35cf.js","assets/index-3f17fe3b.css","assets/index-0c223900.js","assets/index-b9c9b7e2.js","assets/react-toastify.esm-ce67a4f9.js","assets/react-toastify-b60658ac.css","assets/index-39ab8de8.js","assets/Popover-28c1573e.js","assets/useSlotProps-b8a587b0.js","assets/Select-f3cb55de.js","assets/Stack-b0e83988.js","assets/Popper-704ca55a.js","assets/constants-cde8ebc3.js","assets/index-856cc0ad.js"]).then(({AddNodeEdgeModal:t})=>({default:t}))),Cn=()=>e.jsxs(e.Fragment,{children:[e.jsx(mn,{}),e.jsx(fn,{}),e.jsx(xn,{}),e.jsx(yn,{}),e.jsx(jn,{}),e.jsx(gn,{}),e.jsx(bn,{})]}),vn=()=>{const t=ne(r=>r.appMetaData);return e.jsxs(wn,{children:[e.jsxs(Sn,{children:[e.jsx(e.Fragment,{children:t.title&&e.jsx(_,{className:"title",color:"white",children:t.title})}),e.jsx(_,{className:"subtitle",children:" Second Brain"})]}),e.jsx(Vt,{})]})},wn=u(h).attrs({align:"center",direction:"row",grow:1,justify:"flex-start"})`
  height: 64px;
  position: absolute;
  top: 0px;
  left: 64px;
  right: 32px;
  transition: opacity 1s;
  z-index: 99;
  padding: 20px 23px;
`,Sn=u.div`
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
    color: ${c.GRAY6};
    font-family: Barlow;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0.22px;
  }
`,_n=()=>{const[t,r]=x.useState(!0),o=ar();x.useEffect(()=>{r(!0)},[o]);const s=()=>{r(!1)};return o&&t?e.jsxs(Tn,{align:"center",direction:"column",justify:"center",onClick:s,children:[e.jsx("img",{alt:"screen",src:"jamboard_kiosk.png"}),e.jsxs(h,{align:"center",direction:"column",justify:"center",children:[e.jsx(Ae,{children:"Second Brain is currently"}),e.jsx(Ae,{style:{fontWeight:600},children:"optimized for Desktop."}),e.jsx(Ae,{children:"Mobile support coming soon."})]}),e.jsx(H,{color:"secondary",onClick:s,variant:"contained",children:"Got It"})]}):null},Tn=u(h)`
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.75);
  gap: 28px;
  z-index: 2000000000;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`,Ae=u(_)`
  color: #fff;
  text-align: center;
  font-family: Barlow;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  margin: 1px;
`,kn={},An=x.createContext(kn),$n=()=>{const[t,r]=x.useState(!1),o=x.useMemo(()=>({isShow:t,setIsShow:r}),[t]);return e.jsx(An.Provider,{value:o})},v=u(Br)`
  && {
    color: ${c.white};
    border: none;
    padding: 6px 2px 6px 0;
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
`,Se=u(J)`
  && {
    height: 48px;
    padding: 0 36px;
  }
  &:nth-child(odd) {
    background-color: ${c.BG3};
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
`,_e=u(zr)`
  && {
    border-bottom: 1px solid ${c.black};
  }

  ${v} {
    color: ${c.white};
    font-family: Barlow;
    font-size: 11px;
    font-style: normal;
    font-weight: 700;
    line-height: 18px; /* 163.636% */
    letter-spacing: 1.1px;
    text-transform: uppercase;
  }
`,ge=u(H)`
  &.selected {
    background: ${c.white};
    color: ${c.BG1};
    pointer-events: none;
  }

  & + & {
    margin-left: 16px;
  }
`,Te=u(h)`
  margin-bottom: 16px;
  padding: 0 36px;
  ${_} {
    margin-bottom: 0;
  }
`,Ln=({data:t})=>{const r=re(a=>a.setQueuedSources),[o,s]=x.useState(""),i=async a=>{if(t!=null&&t.length)try{const n=await Gt.enable();await Ut(a,n.pubkey),r(t.filter(d=>d.ref_id!==a))}catch(n){console.warn(n)}},l=async a=>{if(!(!a||!(t!=null&&t.length))){s(a);try{await ut(a),r(t==null?void 0:t.filter(n=>n.ref_id!==a))}catch(n){console.warn(n)}finally{s("")}}};return t!=null&&t.length?e.jsxs(Ce,{component:"table",children:[e.jsx(_e,{children:e.jsxs(J,{component:"tr",children:[e.jsx(v,{className:"empty"}),e.jsx(v,{children:"Type"}),e.jsx(v,{children:"Source"}),e.jsx(v,{}),e.jsx(v,{className:"empty"})]})}),(t==null?void 0:t.length)&&e.jsx("tbody",{children:t==null?void 0:t.map(a=>e.jsxs(Se,{children:[e.jsx(v,{className:"empty"}),e.jsx(v,{children:ee[a.source_type]}),e.jsx(v,{width:"268px",children:a.source_type==="twitter_handle"?e.jsxs(tt,{href:`${Tt}/${a.source}?open=system`,target:"_blank",children:["@",a.source]}):e.jsx(tt,{href:`${a.source}?open=system`,target:"_blank",children:a.source})}),e.jsx(v,{className:"cell-center",children:e.jsxs(h,{direction:"row",justify:"space-between",children:[e.jsx("div",{className:"approve-wrapper",children:e.jsx(et,{className:"centered",onClick:()=>i(a.ref_id),children:e.jsx(Lr,{color:c.primaryGreen,fontSize:24})})}),e.jsx("div",{className:"delete-wrapper",children:o===a.ref_id?e.jsx(E,{color:c.white,size:16}):e.jsx(St,{message:"Are you sure ?",onConfirm:()=>l(a.ref_id),children:e.jsx(et,{className:"centered",children:e.jsx(Er,{color:c.primaryRed,fontSize:24})})})})]})}),e.jsx(v,{className:"empty"})]},a.source))})]}):e.jsxs(h,{children:[e.jsx(_,{children:"There is not any results for selected filters"}),e.jsx(ze,{})]})},et=u(h)`
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
`,tt=u.a`
  color: ${c.white};
  text-decoration: underline;
  &:visited {
    color: ${c.white};
  }
  &:hover {
    cursor: pointer;
  }
`,En=()=>{const[t,r]=x.useState(!0),[o,s]=x.useState(""),[i,l]=re(d=>[d.queuedSources,d.setQueuedSources]);x.useEffect(()=>{(async()=>{r(!0);try{const p=await xt({approved:"False"});l(p.data)}catch(p){console.warn(p)}finally{r(!1)}})()},[l]);const a=d=>{s(o===d||!d?"":d)},n=i==null?void 0:i.filter(d=>!o||d.source_type===o);return e.jsxs(Nn,{align:"stretch",direction:"column",justify:"flex-end",children:[e.jsxs(Te,{align:"flex-start",justify:"space-between",children:[e.jsx(_,{className:"title",children:"Queued Sources"}),e.jsx(_,{className:"subtitle",children:"This is a queue of pending sources waiting for approval or denial from graph users. If you think a source will provide good content for the graph, you can pay to approve it. Think of this as an investment: you pay to add it to the source table, and if the content is popular you will earn from it. If content is not relevant to the graph, you should deny it."})]}),e.jsxs(h,{className:"filters",direction:"row",pb:16,px:36,children:[e.jsx(ge,{className:U({selected:!o}),onClick:()=>a(""),size:"small",children:"All"}),Object.keys(ee).map(d=>e.jsx(ge,{className:U({selected:d===o}),onClick:()=>a(d),size:"small",children:ee[d]},d))]}),e.jsx(Pn,{align:"center",justify:t?"center":"flex-start",children:t?e.jsx(E,{color:c.white}):e.jsx(Ln,{data:n})})]})},Nn=u(h)`
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
`,Pn=u(h)`
  min-height: 0;
  overflow: auto;
  flex: 1;
  width: 100%;
`,In=({onSearch:t,placeholder:r,activeIcon:o,loadingIcon:s,defaultIcon:i,...l})=>{const[a,n]=x.useState(""),[d,p]=x.useState(!1),g=()=>{n(""),t(""),p(!1)},f=b=>{!b.target.value&&g(),n(b.target.value)},y=b=>{const{value:m}=b.currentTarget;n(m),!d&&(p(!0),setTimeout(()=>{t(m),m||g(),p(!1)},1e3),m||g())},j=()=>d?e.jsx(rt,{children:e.jsx($e,{type:"button",children:s})}):e.jsx(rt,{children:a?e.jsx($e,{onClick:g,type:"button",children:o}):e.jsx($e,{type:"button",children:i})});return e.jsxs(Bn,{children:[e.jsx(zn,{autoComplete:"off",autoCorrect:"off",inputProps:{"aria-label":"search sources"},onChange:f,onKeyDown:b=>{b.key==="Enter"&&y(b)},placeholder:r,value:a,...l}),j()]})},rt=u(h)`
  top: -50%;
  right: -3%;
  z-index: 3;
  position: absolute;
  transform: translate(-50%, 50%);
`,$e=u(V)`
  font-size: 24px;
`,Bn=u(ve)`
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
`,zn=u(we)`
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
`,On=({data:t,canEdit:r=!1})=>{const o=re(n=>n.setSources),[s,i]=x.useState(""),l=async(n,d)=>{if(t!=null&&t.length)try{await Ht(n,d);const p=t==null?void 0:t.findIndex(f=>f.ref_id===n),g=[...t];g[p]={...g[p],source:d.source},o(g)}catch(p){console.warn(p)}},a=async n=>{if(!(!n||!(t!=null&&t.length))){i(n);try{await ut(n),o(t==null?void 0:t.filter(d=>d.ref_id!==n))}catch(d){console.warn(d)}finally{i("")}}};return t!=null&&t.length?e.jsxs(Ce,{"aria-label":"a dense table",component:"table",id:"sources-table",size:"small",children:[e.jsx(_e,{children:e.jsxs(J,{component:"tr",children:[e.jsx(v,{className:"empty"}),e.jsx(v,{children:"Type"}),e.jsx(v,{align:"left",children:"Source"}),r&&e.jsx(v,{align:"left"}),e.jsx(v,{className:"empty"})]})}),e.jsx(Mr,{component:"tbody",children:t==null?void 0:t.map(n=>e.jsxs(Se,{children:[e.jsx(v,{className:"empty"}),e.jsx(v,{align:"left",children:ee[n.source_type]}),e.jsx(v,{align:"left",children:e.jsx(Mn,{condition:r,wrapper:d=>e.jsx(Dn,{id:n.ref_id,onSave:p=>l(n.ref_id,{source:p,source_type:n.source_type}),value:n.source,children:d}),children:n.source_type===Ue||n.source_type===He||n.source_type===Ye?e.jsxs(e.Fragment,{children:[n.source_type===Ue&&e.jsxs(Le,{href:`${Tt}/${n.source}`,target:"_blank",children:["@",n.source]}),n.source_type===He&&e.jsx(Le,{href:`${n.source}${n.source.includes("?")?"&":"?"}open=system`,target:"_blank",children:n.source}),n.source_type===Ye&&e.jsx(Le,{href:n.source,target:"_blank",children:n.source})]}):e.jsx("div",{children:n.source})})}),r&&e.jsx(v,{align:"left",children:e.jsx("div",{className:"delete-wrapper",id:`delete-${n.source}`,children:s===n.ref_id?e.jsx(E,{color:c.white}):e.jsx(St,{message:"Are you sure ?",onConfirm:()=>a(n.ref_id),children:e.jsx(X,{className:"centered",children:e.jsx(Nr,{})})})})}),e.jsx(v,{className:"empty"})]},n.source))})]}):e.jsxs(Fn,{children:[e.jsx(Or,{}),e.jsx(_,{className:"text",children:"There is not any results for selected filters"})]})};function Mn({condition:t,wrapper:r,children:o}){return t?r(o):o}const Dn=({value:t,onSave:r,id:o,children:s})=>{const[i,l]=x.useState(!1),[a,n]=x.useState(t),[d,p]=x.useState(!1),g=async()=>{if(o){p(!0);try{await r(a),l(!1)}catch(f){console.warn(f)}finally{p(!1)}}};return e.jsx("div",{children:i?e.jsxs(Rn,{direction:"row",children:[e.jsx(Ur,{className:"editable-cell__input",name:"cell-input",onChange:f=>n(f),value:a}),e.jsx(X,{align:"center",justify:"center",children:d?e.jsx(E,{}):e.jsx(Pr,{onClick:g})}),e.jsx(X,{align:"center",className:"secondary",justify:"center",onClick:()=>l(!1),children:e.jsx(wt,{})})]}):e.jsxs(Wn,{direction:"row",children:[s,e.jsx(X,{onClick:()=>l(!0),children:e.jsx(Ir,{size:20})})]})})},Rn=u(h)`
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
`,X=u(h)`
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
`,Fn=u(h)`
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
`,Wn=u(h)`
  display: flex;
  padding: 4px;
  position: relative;

  ${X} {
    visibility: hidden;
  }

  &:hover {
    ${X} {
      visibility: visible;
    }
  }
`,Le=u.a`
  color: ${c.white};
  text-decoration: underline;
  &:visited {
    color: ${c.white};
  }
`,Vn=()=>{const[t,r]=x.useState(!0),[o,s]=x.useState(""),[i,l]=re(f=>[f.sources,f.setSources]),[a]=de(f=>[f.isAdmin]),[n,d]=x.useState("");x.useEffect(()=>{(async()=>{r(!0);try{const y=await xt();l(y.data)}catch(y){console.warn(y)}finally{r(!1)}})()},[l]);const p=f=>{s(o===f||!f?"":f)},g=x.useMemo(()=>i==null?void 0:i.filter(f=>(!o||f.source_type===o)&&(f.source.toLowerCase().startsWith(n.toLowerCase())||f.source.toLowerCase().includes(n.toLowerCase()))),[n,o,i]);return e.jsxs(Gn,{align:"stretch",direction:"column",justify:"flex-end",children:[e.jsx(Te,{align:"center",direction:"row",justify:"space-between",children:e.jsx(_,{className:"title",children:"Sources for this Graph"})}),e.jsx(Hn,{children:e.jsx(In,{activeIcon:e.jsx(K,{}),defaultIcon:e.jsx(be,{}),loadingIcon:e.jsx(E,{color:c.PRIMARY_BLUE,size:24}),onSearch:d,placeholder:"Find Source"})}),e.jsxs(h,{className:"filters",direction:"row",pb:16,px:36,children:[e.jsx(ge,{className:U({selected:!o}),onClick:()=>p(""),size:"small",children:"All"}),Object.keys(ee).map(f=>e.jsx(ge,{className:U({selected:f===o}),onClick:()=>p(f),size:"small",children:ee[f]},f))]}),e.jsx(Un,{align:"center",justify:t?"center":"flex-start",children:t?e.jsx(E,{color:c.white}):e.jsx(On,{canEdit:a,data:g})})]})},Gn=u(h)`
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
`,Un=u(h)`
  min-height: 0;
  overflow: auto;
  flex: 1;
  width: 100%;
`,Hn=u(h)`
  margin: 0 0 16px 36px;
`,Yn=({placeholder:t,activeIcon:r,loadingIcon:o,defaultIcon:s,...i})=>{const[l,a]=z(j=>[j.filters,j.setFilters]),[n,d]=x.useState(!1),p=()=>{a({search:""}),d(!1)},g=j=>{!j.target.value&&p(),a({search:j.target.value})},f=j=>{const{value:b}=j.currentTarget;a({search:b}),!n&&(d(!0),setTimeout(()=>{b||p(),d(!1)},1e3),b||p())},y=()=>n?e.jsx(nt,{children:e.jsx(Ee,{type:"button",children:o})}):e.jsx(nt,{children:l.search?e.jsx(Ee,{onClick:p,type:"button",children:r}):e.jsx(Ee,{type:"button",children:s})});return e.jsxs(Zn,{children:[e.jsx(Kn,{autoComplete:"off",autoCorrect:"off",inputProps:{"aria-label":"search sources"},onChange:g,onKeyDown:j=>{j.key==="Enter"&&f(j)},placeholder:t,value:l.search,...i}),y()]})},nt=u(h)`
  top: -50%;
  right: -3%;
  z-index: 3;
  position: absolute;
  transform: translate(-50%, 50%);
`,Ee=u(V)`
  font-size: 24px;
`,Zn=u(ve)`
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
`,Kn=u(we)`
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
`,qn=({onSelect:t,selectedTopic:r})=>{const[o,s]=x.useState(!1),[i,l]=x.useState(""),[a,n]=x.useState([]),[d,p]=x.useState(!1),g=x.useRef(null);x.useEffect(()=>()=>n([]),[n]);const f=async m=>{const C={muted:"False",sort_by:Fe,search:m,skip:"0",limit:"1000"};p(!0);try{const w=await mt(C);n(w.data)}catch{n([])}finally{p(!1)}},y=x.useMemo(()=>ft.debounce(f,300),[]),j=m=>{t(m)},b=m=>{if(l(m),!m){n([]);return}m.length>2&&y(m)};return r?e.jsxs(Jn,{children:[e.jsx("div",{className:"value",children:r.name}),e.jsx(h,{className:"icon",onClick:()=>t(null),children:e.jsx(K,{})})]}):e.jsxs(e.Fragment,{children:[e.jsxs(ve,{ref:g,component:"form",onSubmit:m=>m.preventDefault(),sx:{p:"2px 4px",display:"flex",alignItems:"center",width:200},children:[e.jsx(we,{inputProps:{"aria-label":"search topic"},onChange:m=>b(m.target.value),onFocus:()=>s(!0),placeholder:"Search",size:"small",sx:{ml:1,flex:1},value:i}),i&&e.jsxs(e.Fragment,{children:[e.jsx(ot,{"aria-label":"search",onClick:()=>b(""),type:"button",children:e.jsx(K,{})}),e.jsx(_t,{orientation:"vertical",sx:{height:28,m:.5}})]}),e.jsx(ot,{"aria-label":"search",type:"button",children:d?e.jsx(E,{color:c.white,size:24}):e.jsx(be,{})})]}),g.current&&a.length?e.jsx(Xn,{anchorEl:g.current,open:o,placement:"bottom",children:e.jsx(e.Fragment,{children:a.map(m=>e.jsx(Qn,{className:U({active:r===m.ref_id}),onClick:()=>j(m),children:m.name},"option"))})}):null]})},Qn=u(h).attrs({direction:"row",align:"center"})`
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
`,Xn=u(Lt)`
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
`,Jn=u(h).attrs({direction:"row",justify:"flex-start",align:"center"})`
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
`,ot=u(V)`
  font-size: 24px;
`,eo=({selectedType:t,setSelectedType:r})=>{const[o,s]=x.useState(null),[i,l]=x.useState([]);x.useEffect(()=>{(async()=>{try{const{data:g}=await Yt();l(g.edge_types)}catch(g){console.warn(g)}})()},[l]);const a=p=>{s(p.currentTarget)},n=()=>{s(null)},d=p=>{r(p),n()};return e.jsxs("div",{children:[e.jsxs(to,{onClick:a,children:[e.jsx("div",{className:"text",children:"Type"}),e.jsx("div",{className:"value",children:t}),e.jsx("div",{className:"icon",children:o?e.jsx(Dr,{}):e.jsx(Hr,{})})]}),e.jsx(no,{anchorEl:o,anchorOrigin:{vertical:"bottom",horizontal:"left"},anchorPosition:{top:62,left:0},onClose:n,open:!!o,transformOrigin:{vertical:"top",horizontal:"left"},children:e.jsx(Gr,{children:i.map(p=>e.jsxs(ro,{className:U({active:p===t}),onClick:()=>d(p),children:[e.jsx("span",{className:"icon",children:p===t?e.jsx(Ge,{}):null}),e.jsx("span",{children:p})]},p))})})]})},to=u(h).attrs({direction:"row",align:"center"})`
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
`,ro=u(h).attrs({direction:"row",align:"center"})`
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
`,no=u(We)`
  .MuiPaper-root {
    background: ${c.BUTTON1};
    min-width: 149px;
    padding: 16px;
    color: ${c.GRAY3};
    box-shadow: 0px 1px 6px 0px rgba(0, 0, 0, 0.2);
    border-radius: 6px;
  }
`,oo=({from:t,onSelect:r,selectedTopic:o,selectedType:s,setSelectedType:i})=>e.jsxs(h,{children:[e.jsx(h,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(h,{align:"center",direction:"row",children:e.jsx(so,{children:"Add edge"})})}),e.jsxs(io,{mb:12,children:[e.jsxs(Ne,{children:[e.jsx("div",{className:"label",children:"From"}),e.jsx("div",{children:t})]}),e.jsx(Ne,{children:e.jsx(eo,{selectedType:s,setSelectedType:i})}),e.jsxs(Ne,{children:[e.jsx("div",{className:"label",children:"To"}),e.jsx(qn,{onSelect:r,selectedTopic:o})]})]})]}),so=u(_)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,io=u(h).attrs({align:"flex-start",direction:"row",justify:"flex-start"})`
  color: ${c.white};
  .label {
    margin-bottom: 8px;
    font-weight: 500;
    font-size: 14px;
    color: ${c.GRAY3};
  }
`,Ne=u(h)`
  flex: 1 1 100%;
`,ao=({topic:t,onClose:r})=>{const{close:o}=G("addEdge"),[s]=z(b=>[b.data]),i=pe({mode:"onChange"}),[l,a]=x.useState(!1),[n,d]=x.useState(null),[p,g]=x.useState(""),f=()=>{r(),o()},y=async()=>{if(!(!n||!s)){a(!0);try{await Zt({from:t.ref_id,to:n==null?void 0:n.ref_id,relationship:p});const{ref_id:b}=t,{ref_id:m}=n;if(s){const C={...s};C[b]={...C[b],edgeList:[...C[b].edgeList,p]},C[m]&&(C[m]={...C[m],edgeList:[...C[m].edgeList,p]}),z.setState({data:C})}f()}catch(b){console.warn(b)}finally{a(!1)}}},j=l||!n||!p;return e.jsx(Ve,{id:"addEdge",kind:"large",onClose:f,preventOutsideClose:!0,children:e.jsxs(he,{...i,children:[e.jsx(oo,{from:t.name,onSelect:d,selectedTopic:n,selectedType:p,setSelectedType:g}),e.jsxs(H,{color:"secondary",disabled:j,onClick:y,size:"large",variant:"contained",children:["Confirm",l&&e.jsx(E,{color:c.BLUE_PRESS_STATE,size:10})]})]})})},lo=()=>e.jsxs(h,{children:[e.jsx(h,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(h,{align:"center",direction:"row",children:e.jsx(co,{children:"Edit topic"})})}),e.jsx(h,{mb:12,children:e.jsx(le,{id:"cy-topic",maxLength:50,name:"name",placeholder:"Add your topic",rules:{...Kt}})})]}),co=u(_)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,po=({topic:t,onClose:r})=>{const{close:o}=G("editTopic"),[s]=z(j=>[j.data]),i=pe({mode:"onChange"}),{watch:l,setValue:a,reset:n}=i,[d,p]=x.useState(!1);x.useEffect(()=>(t&&a("name",t==null?void 0:t.name),()=>{n()}),[t,a,n]);const g=l("name"),f=()=>{r(),o()},y=async()=>{p(!0);try{if(await je((t==null?void 0:t.ref_id)||"",{name:g.trim()}),s){const j={...s};j[t==null?void 0:t.ref_id].name=g.trim(),z.setState({data:j})}f()}catch(j){console.warn(j)}finally{p(!1)}};return e.jsx(Ve,{id:"editTopic",kind:"regular",onClose:f,preventOutsideClose:!0,children:e.jsxs(he,{...i,children:[e.jsx(lo,{}),e.jsxs(H,{color:"secondary",disabled:d,onClick:y,size:"large",variant:"contained",children:["Save",d&&e.jsx(E,{color:c.BLUE_PRESS_STATE,size:10})]})]})})},ho=({onSelect:t,selectedTopic:r})=>{const[o,s]=x.useState(!1),[i,l]=x.useState(""),[a,n]=x.useState([]),[d,p]=x.useState(!1),g=x.useRef(null);x.useEffect(()=>()=>n([]),[n]);const f=async m=>{const C={muted:"False",sort_by:Fe,search:m,skip:"0",limit:"1000"};p(!0);try{const w=await mt(C);n(w.data)}catch{n([])}finally{p(!1)}},y=x.useMemo(()=>ft.debounce(f,300),[]),j=m=>{t(m)},b=m=>{if(l(m),!m){n([]);return}m.length>2&&y(m)};return r?e.jsxs(fo,{children:[e.jsx("div",{className:"value",children:r.name}),e.jsx(h,{className:"icon",onClick:()=>t(null),children:e.jsx(K,{})})]}):e.jsxs(e.Fragment,{children:[e.jsxs(ve,{ref:g,component:"form",onSubmit:m=>m.preventDefault(),sx:{p:"2px 4px",display:"flex",alignItems:"center",width:200},children:[e.jsx(we,{inputProps:{"aria-label":"search topic"},onChange:m=>b(m.target.value),onFocus:()=>s(!0),placeholder:"Search",size:"small",sx:{ml:1,flex:1},value:i}),i&&e.jsxs(e.Fragment,{children:[e.jsx(st,{"aria-label":"search",onClick:()=>b(""),type:"button",children:e.jsx(K,{})}),e.jsx(_t,{orientation:"vertical",sx:{height:28,m:.5}})]}),e.jsx(st,{"aria-label":"search",type:"button",children:d?e.jsx(E,{color:c.white,size:24}):e.jsx(be,{})})]}),g.current&&a.length?e.jsx(xo,{anchorEl:g.current,open:o,placement:"bottom",children:e.jsx(e.Fragment,{children:a.map(m=>e.jsx(uo,{className:U({active:r===m.ref_id}),onClick:()=>j(m),children:m.name},"option"))})}):null]})},uo=u(h).attrs({direction:"row",align:"center"})`
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
`,xo=u(Lt)`
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
`,fo=u(h).attrs({direction:"row",justify:"flex-start",align:"center"})`
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
`,st=u(V)`
  font-size: 24px;
`,mo=({from:t,onSelect:r,selectedTopic:o})=>e.jsxs(h,{children:[e.jsx(h,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(h,{align:"center",direction:"row",children:e.jsx(go,{children:"Merge topic"})})}),e.jsxs(yo,{mb:12,children:[e.jsxs(it,{children:[e.jsx("div",{className:"label",children:"From"}),e.jsx("div",{children:t})]}),e.jsxs(it,{ml:24,children:[e.jsx("div",{className:"label",children:"To"}),e.jsx(ho,{onSelect:r,selectedTopic:o})]})]})]}),go=u(_)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,yo=u(h).attrs({align:"flex-start",direction:"row",justify:"flex-start"})`
  color: ${c.white};
  .label {
    margin-bottom: 8px;
    font-weight: 500;
    font-size: 14px;
    color: ${c.GRAY3};
  }
`,it=u(h)`
  flex: 1 1 100%;
`,jo=({topic:t,onClose:r})=>{const{close:o}=G("mergeTopic"),[s,i,l]=z(w=>[w.data,w.ids,w.total]),a=pe({mode:"onChange"}),{watch:n,setValue:d,reset:p}=a,[g,f]=x.useState(!1),[y,j]=x.useState(null);x.useEffect(()=>(t&&d("topic",t==null?void 0:t.name),()=>{p()}),[t,d,p]);const b=n("topic"),m=()=>{r(),o()},C=async()=>{if(!(!y||!s)){f(!0);try{await qt({from:t.ref_id,to:y==null?void 0:y.ref_id});const{ref_id:w}=t;if(s[w]={...s[w],edgeList:[Rr],edgeCount:s[w].edgeCount-1},z.setState({ids:i.filter($=>$!==y.ref_id),total:l-1}),s){const $={...s};$[t==null?void 0:t.ref_id].name=b.trim(),z.setState({data:$})}m()}catch(w){console.warn(w)}finally{f(!1)}}};return e.jsx(Ve,{id:"mergeTopic",kind:"regular",onClose:m,preventOutsideClose:!0,children:e.jsxs(he,{...a,children:[e.jsx(mo,{from:t.name,onSelect:j,selectedTopic:y}),e.jsxs(H,{color:"secondary",disabled:g,onClick:C,size:"large",variant:"contained",children:["Merge topics",g&&e.jsx(E,{color:c.BLUE_PRESS_STATE,size:10})]})]})})},bo=t=>e.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M7.37516 8.625V11.3334C7.37516 11.5104 7.43508 11.6589 7.55491 11.7786C7.67476 11.8984 7.82326 11.9583 8.00041 11.9583C8.17758 11.9583 8.32599 11.8984 8.44564 11.7786C8.5653 11.6589 8.62512 11.5104 8.62512 11.3334V8.625H11.3335C11.5106 8.625 11.659 8.56508 11.7788 8.44525C11.8986 8.3254 11.9585 8.1769 11.9585 7.99975C11.9585 7.82258 11.8986 7.67417 11.7788 7.55452C11.659 7.43487 11.5106 7.37504 11.3335 7.37504H8.62512V4.66669C8.62512 4.4896 8.56521 4.34117 8.44537 4.22137C8.32553 4.1016 8.17702 4.04171 7.99987 4.04171C7.82271 4.04171 7.6743 4.1016 7.55464 4.22137C7.43499 4.34117 7.37516 4.4896 7.37516 4.66669V7.37504H4.66681C4.48973 7.37504 4.3413 7.43496 4.22152 7.55479C4.10173 7.67464 4.04183 7.82314 4.04183 8.00029C4.04183 8.17746 4.10173 8.32587 4.22152 8.44552C4.3413 8.56517 4.48973 8.625 4.66681 8.625H7.37516ZM8.00154 15.9167C6.90659 15.9167 5.8774 15.7089 4.91395 15.2933C3.9505 14.8778 3.11243 14.3138 2.39975 13.6015C1.68705 12.8891 1.12284 12.0514 0.7071 11.0884C0.291364 10.1253 0.0834961 9.09636 0.0834961 8.00142C0.0834961 6.90647 0.291274 5.87728 0.70683 4.91383C1.12239 3.95037 1.68634 3.11231 2.3987 2.39963C3.11108 1.68693 3.94878 1.12272 4.91181 0.706979C5.87482 0.291243 6.9038 0.083374 7.99875 0.083374C9.09369 0.083374 10.1229 0.291153 11.0863 0.706708C12.0498 1.12226 12.8879 1.68622 13.6005 2.39858C14.3132 3.11096 14.8774 3.94866 15.2932 4.91169C15.7089 5.8747 15.9168 6.90368 15.9168 7.99863C15.9168 9.09357 15.709 10.1228 15.2935 11.0862C14.8779 12.0497 14.3139 12.8877 13.6016 13.6004C12.8892 14.3131 12.0515 14.8773 11.0885 15.2931C10.1255 15.7088 9.09648 15.9167 8.00154 15.9167ZM8.00014 14.6667C9.86125 14.6667 11.4376 14.0209 12.7293 12.7292C14.021 11.4375 14.6668 9.86113 14.6668 8.00002C14.6668 6.13891 14.021 4.56252 12.7293 3.27085C11.4376 1.97919 9.86125 1.33335 8.00014 1.33335C6.13903 1.33335 4.56264 1.97919 3.27098 3.27085C1.97931 4.56252 1.33348 6.13891 1.33348 8.00002C1.33348 9.86113 1.97931 11.4375 3.27098 12.7292C4.56264 14.0209 6.13903 14.6667 8.00014 14.6667Z",fill:"currentColor"})}),Co=t=>e.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 12 12",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M10.1765 0.310088L4.72809 5.70971C4.63832 5.79868 4.56637 5.90372 4.51607 6.01926L3.74627 7.78746C3.63822 8.03565 3.89191 8.28707 4.14234 8.17999L5.92651 7.41707C6.04309 7.36722 6.14907 7.29592 6.23885 7.20695L11.6872 1.80733C12.1044 1.39388 12.1044 0.723539 11.6872 0.310088C11.27 -0.103363 10.5936 -0.103363 10.1765 0.310088ZM9.80835 7.14088C9.80835 6.81895 10.072 6.55777 10.3969 6.55777C10.723 6.55777 10.9854 6.82017 10.9854 7.14088L10.9191 10.2508C10.9191 11.2153 10.1489 12.0001 9.17571 12.0001H1.74343C0.79227 12.0001 0 11.2153 0 10.2289V2.84292C0 1.89999 0.79227 1.11523 1.74343 1.11523L5.29651 1.11548C5.62264 1.11548 5.88501 1.37666 5.88501 1.69858C5.88501 2.0205 5.62141 2.28168 5.29651 2.28168H1.7655C1.44134 2.28168 1.177 2.54335 1.177 2.86479V10.2508C1.177 10.5722 1.44134 10.8339 1.7655 10.8339H9.21985C9.54402 10.8339 9.80835 10.5722 9.80835 10.2508V7.14088Z",fill:"currentColor"})}),vo=t=>e.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 12 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M1.33317 15.5L0.166504 14.3333L4.18734 10.2917C4.50678 9.97222 4.74984 9.61111 4.9165 9.20833C5.08317 8.80556 5.1665 8.38194 5.1665 7.9375L5.1665 3.6875L3.83317 5L2.6665 3.83333L5.99984 0.5L9.33317 3.83333L8.1665 5L6.83317 3.6875L6.83317 7.9375C6.83317 8.38194 6.9165 8.80556 7.08317 9.20833C7.24984 9.61111 7.49289 9.97222 7.81234 10.2917L11.8332 14.3333L10.6665 15.5L5.99984 10.8333L1.33317 15.5Z",fill:"currentColor"})}),Pe=t=>e.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 12 8",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M0.333496 7.66704V6.66706H3.91681V7.66704H0.333496ZM0.333496 4.50037V3.50041H7.7886V4.50037H0.333496ZM0.333496 1.33372V0.33374H11.6668V1.33372H0.333496Z",fill:"currentColor"})}),at=t=>e.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 16 15",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M14.0716 15L10.8994 11.7764C10.437 11.9597 9.96181 12.0919 9.47381 12.1732C8.98581 12.2545 8.49002 12.2952 7.98643 12.2952C6.33597 12.2952 4.82448 11.8457 3.45194 10.9466C2.07941 10.0476 0.991584 8.86271 0.188459 7.39193C0.123124 7.27666 0.0753836 7.15933 0.045238 7.03994C0.0150793 6.92055 0 6.7991 0 6.67559C0 6.55208 0.0163338 6.42935 0.0490013 6.30739C0.0816688 6.18543 0.13067 6.06938 0.196005 5.95925C0.508607 5.42714 0.84081 4.91226 1.19261 4.41462C1.54443 3.91699 1.95353 3.47673 2.41992 3.09386L0.24877 0.846015L1.07501 0L14.8978 14.154L14.0716 15ZM7.98643 9.94854C8.16032 9.94854 8.32642 9.93799 8.48473 9.91689C8.64305 9.89579 8.7976 9.84973 8.94838 9.77871L4.95591 5.69059C4.89158 5.84498 4.84786 6.00324 4.82475 6.16535C4.80162 6.32745 4.79005 6.49753 4.79005 6.67559C4.79005 7.58645 5.10039 8.35966 5.72108 8.99521C6.34176 9.63076 7.09688 9.94854 7.98643 9.94854ZM13.4384 10.3561L10.9792 7.85816C11.0456 7.66673 11.0961 7.47375 11.1308 7.27922C11.1655 7.0847 11.1828 6.88349 11.1828 6.67559C11.1828 5.76473 10.8725 4.99152 10.2518 4.35597C9.63109 3.72042 8.87598 3.40264 7.98643 3.40264C7.78339 3.40264 7.58689 3.42168 7.39692 3.45976C7.20694 3.49784 7.02099 3.56011 6.83907 3.64657L4.87751 1.64575C5.37606 1.44402 5.88441 1.29529 6.40257 1.19957C6.92071 1.10385 7.44867 1.05599 7.98643 1.05599C9.64191 1.05599 11.1604 1.50756 12.542 2.41072C13.9236 3.31387 15.0134 4.50598 15.8115 5.98705C15.8718 6.08894 15.9183 6.19829 15.951 6.31511C15.9837 6.43192 16 6.55208 16 6.67559C16 6.7991 15.9857 6.91926 15.957 7.03607C15.9284 7.15289 15.8839 7.26225 15.8236 7.36414C15.52 7.94669 15.1738 8.49038 14.7848 8.99521C14.3958 9.50005 13.947 9.95369 13.4384 10.3561ZM10.0912 6.95657L7.73162 4.54816C8.06131 4.48126 8.38246 4.50545 8.69506 4.62072C9.00767 4.736 9.27754 4.9156 9.5047 5.15952C9.7369 5.40036 9.90451 5.67723 10.0075 5.99012C10.1106 6.30301 10.1385 6.62516 10.0912 6.95657Z",fill:"currentColor"})}),lt=t=>e.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 18 13",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M9.00204 9.98073C9.94628 9.98073 10.7483 9.65024 11.408 8.98927C12.0677 8.32829 12.3976 7.52567 12.3976 6.58142C12.3976 5.63718 12.0671 4.8352 11.4061 4.17548C10.7451 3.51576 9.9425 3.1859 8.99825 3.1859C8.05401 3.1859 7.25203 3.51638 6.59231 4.17735C5.93259 4.83834 5.60273 5.64096 5.60273 6.58521C5.60273 7.52944 5.93321 8.33142 6.59419 8.99115C7.25517 9.65087 8.05779 9.98073 9.00204 9.98073ZM9.00014 8.83331C8.37514 8.83331 7.84389 8.61456 7.40639 8.17706C6.96889 7.73956 6.75014 7.20831 6.75014 6.58331C6.75014 5.95831 6.96889 5.42706 7.40639 4.98956C7.84389 4.55206 8.37514 4.33331 9.00014 4.33331C9.62514 4.33331 10.1564 4.55206 10.5939 4.98956C11.0314 5.42706 11.2501 5.95831 11.2501 6.58331C11.2501 7.20831 11.0314 7.73956 10.5939 8.17706C10.1564 8.61456 9.62514 8.83331 9.00014 8.83331ZM9.00129 12.4166C7.08494 12.4166 5.33884 11.888 3.76298 10.8309C2.18713 9.77374 1.02688 8.35788 0.282227 6.58331C1.02688 4.80874 2.18675 3.39288 3.76185 2.33573C5.33694 1.27858 7.08265 0.75 8.999 0.75C10.9153 0.75 12.6614 1.27858 14.2373 2.33573C15.8132 3.39288 16.9734 4.80874 17.7181 6.58331C16.9734 8.35788 15.8135 9.77374 14.2384 10.8309C12.6634 11.888 10.9176 12.4166 9.00129 12.4166Z",fill:"currentColor"})}),wo=t=>e.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:e.jsxs("g",{opacity:"0.4",children:[e.jsx("mask",{id:"mask0_5162_13105",maskUnits:"userSpaceOnUse",x:"0",y:"0",width:"24",height:"24",children:e.jsx("rect",{width:"1em",height:"1em",fill:"currentColor"})}),e.jsx("g",{mask:"url(#mask0_5162_13105)",children:e.jsx("path",{d:"M19.7615 21.8691L15.7154 17.8537C15.1256 18.0819 14.5195 18.2467 13.8971 18.348C13.2747 18.4493 12.6423 18.4999 12 18.4999C9.89486 18.4999 7.96698 17.94 6.21635 16.8201C4.46572 15.7002 3.07822 14.2243 2.05385 12.3922C1.97052 12.2486 1.90963 12.1025 1.87118 11.9538C1.83271 11.8051 1.81348 11.6538 1.81348 11.4999C1.81348 11.3461 1.83431 11.1932 1.87598 11.0413C1.91764 10.8894 1.98014 10.7448 2.06348 10.6076C2.46219 9.9448 2.88591 9.30345 3.33463 8.68357C3.78336 8.0637 4.30516 7.51531 4.90003 7.0384L2.13078 4.2384L3.18463 3.18457L20.8153 20.8153L19.7615 21.8691ZM12 15.5768C12.2218 15.5768 12.4336 15.5637 12.6356 15.5374C12.8375 15.5111 13.0346 15.4537 13.2269 15.3653L8.13463 10.273C8.05258 10.4653 7.99681 10.6624 7.96733 10.8643C7.93783 11.0663 7.92308 11.2781 7.92308 11.4999C7.92308 12.6345 8.31891 13.5977 9.11058 14.3893C9.90224 15.181 10.8654 15.5768 12 15.5768ZM18.9538 16.0845L15.8173 12.973C15.9019 12.7345 15.9663 12.4941 16.0105 12.2518C16.0548 12.0095 16.0769 11.7589 16.0769 11.4999C16.0769 10.3653 15.681 9.40219 14.8894 8.61052C14.0977 7.81885 13.1346 7.42302 12 7.42302C11.741 7.42302 11.4904 7.44674 11.2481 7.49417C11.0058 7.5416 10.7686 7.61917 10.5366 7.72687L8.03463 5.23457C8.67051 4.98329 9.3189 4.79803 9.9798 4.6788C10.6407 4.55956 11.3141 4.49995 12 4.49995C14.1115 4.49995 16.0484 5.06245 17.8105 6.18745C19.5727 7.31245 20.9628 8.79738 21.9807 10.6422C22.0576 10.7692 22.1169 10.9054 22.1586 11.0509C22.2003 11.1964 22.2211 11.3461 22.2211 11.4999C22.2211 11.6538 22.2028 11.8034 22.1663 11.9489C22.1297 12.0945 22.073 12.2307 21.9961 12.3576C21.6089 13.0832 21.1673 13.7605 20.6711 14.3893C20.175 15.0182 19.6025 15.5832 18.9538 16.0845ZM14.6846 11.8499L11.675 8.84992C12.0955 8.76659 12.5051 8.79671 12.9038 8.9403C13.3025 9.0839 13.6468 9.30761 13.9365 9.61145C14.2327 9.91145 14.4465 10.2563 14.5779 10.6461C14.7093 11.0358 14.7449 11.4371 14.6846 11.8499Z",fill:"currentColor"})})]})}),So=t=>e.jsxs("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("mask",{id:"mask0_5162_13106",maskUnits:"userSpaceOnUse",x:"0",y:"0",width:"24",height:"24",children:e.jsx("rect",{width:"1em",height:"1em",fill:"currentColor"})}),e.jsx("g",{mask:"url(#mask0_5162_13106)",children:e.jsx("path",{d:"M12.0023 15.5769C13.1354 15.5769 14.0978 15.1803 14.8895 14.3871C15.6811 13.5939 16.077 12.6308 16.077 11.4977C16.077 10.3646 15.6804 9.40224 14.8872 8.61058C14.094 7.81891 13.1309 7.42308 11.9978 7.42308C10.8647 7.42308 9.90234 7.81966 9.11067 8.61282C8.31901 9.40601 7.92317 10.3692 7.92317 11.5023C7.92317 12.6353 8.31976 13.5977 9.11293 14.3894C9.90611 15.181 10.8692 15.5769 12.0023 15.5769ZM12.0001 14.2C11.2501 14.2 10.6126 13.9375 10.0876 13.4125C9.56258 12.8875 9.30007 12.25 9.30007 11.5C9.30007 10.75 9.56258 10.1125 10.0876 9.58748C10.6126 9.06248 11.2501 8.79998 12.0001 8.79998C12.7501 8.79998 13.3876 9.06248 13.9126 9.58748C14.4376 10.1125 14.7001 10.75 14.7001 11.5C14.7001 12.25 14.4376 12.8875 13.9126 13.4125C13.3876 13.9375 12.7501 14.2 12.0001 14.2ZM12.0014 18.5C9.70183 18.5 7.60651 17.8657 5.71547 16.5971C3.82446 15.3285 2.43216 13.6295 1.53857 11.5C2.43216 9.37049 3.82401 7.67146 5.71412 6.40288C7.60422 5.13429 9.69908 4.5 11.9987 4.5C14.2983 4.5 16.3936 5.13429 18.2847 6.40288C20.1757 7.67146 21.568 9.37049 22.4616 11.5C21.568 13.6295 20.1761 15.3285 18.286 16.5971C16.3959 17.8657 14.3011 18.5 12.0014 18.5Z",fill:"currentColor"})})]}),_o=t=>e.jsxs("svg",{width:"1em",height:"1em",viewBox:"0 0 22 22",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("mask",{id:"mask0_5577_416",maskUnits:"userSpaceOnUse",x:"0",y:"0",width:"22",height:"22",children:e.jsx("rect",{width:"1em",height:"1em",fill:"currentColor"})}),e.jsx("g",{mask:"url(#mask0_5577_416)",children:e.jsx("path",{d:"M11 17.6634C10.6219 17.6634 10.2982 17.5287 10.0289 17.2595C9.75964 16.9902 9.625 16.6665 9.625 16.2884C9.625 15.9103 9.75964 15.5866 10.0289 15.3173C10.2982 15.0481 10.6219 14.9134 11 14.9134C11.3781 14.9134 11.7018 15.0481 11.971 15.3173C12.2403 15.5866 12.375 15.9103 12.375 16.2884C12.375 16.6665 12.2403 16.9902 11.971 17.2595C11.7018 17.5287 11.3781 17.6634 11 17.6634ZM11 12.3749C10.6219 12.3749 10.2982 12.2403 10.0289 11.971C9.75964 11.7018 9.625 11.3781 9.625 11C9.625 10.6218 9.75964 10.2982 10.0289 10.0289C10.2982 9.75962 10.6219 9.62498 11 9.62498C11.3781 9.62498 11.7018 9.75962 11.971 10.0289C12.2403 10.2982 12.375 10.6218 12.375 11C12.375 11.3781 12.2403 11.7018 11.971 11.971C11.7018 12.2403 11.3781 12.3749 11 12.3749ZM11 7.08648C10.6219 7.08648 10.2982 6.95184 10.0289 6.68257C9.75964 6.41332 9.625 6.08963 9.625 5.7115C9.625 5.33339 9.75964 5.0097 10.0289 4.74043C10.2982 4.47118 10.6219 4.33655 11 4.33655C11.3781 4.33655 11.7018 4.47118 11.971 4.74043C12.2403 5.0097 12.375 5.33339 12.375 5.7115C12.375 6.08963 12.2403 6.41332 11.971 6.68257C11.7018 6.95184 11.3781 7.08648 11 7.08648Z",fill:"currentColor"})})]}),To=({topic:t,onClick:r,onSearch:o,checkedStates:s,setCheckedStates:i})=>{const[l,a]=z(k=>[k.ids,k.total]),[n,d]=x.useState(!1),p=Oe(t.date_added_to_graph),g=async(k,S)=>{d(!0);try{await je(k,{muted_topic:S}),z.setState({ids:l.filter(T=>T!==k),total:a-1})}catch(T){console.warn(T)}},f=k=>{i(S=>({...S,[k]:!S[k]}))},y=(k,S)=>{var T;(T=window.getSelection())!=null&&T.toString()?k.preventDefault():o(S.name)},j=t.edgeList.slice(0,1),b=t.edgeList.length-j.length,[m,C]=P.useState(null),w=k=>{C(k.currentTarget)},$=()=>{C(null)},L=!!m,I=s[t.ref_id]?"visible":"";return e.jsxs(Se,{className:s[t.ref_id]?"checked":"",children:[e.jsx(v,{children:e.jsx($o,{className:`checkbox-section ${I}`,onClick:()=>f(t.ref_id),children:e.jsx(Lo,{checked:s[t.ref_id],children:e.jsx(Eo,{children:s[t.ref_id]&&e.jsx(Ge,{})})})})}),e.jsx(v,{onClick:k=>y(k,t),children:e.jsx(Ao,{children:t.name})}),e.jsx(v,{children:t.node_type}),e.jsx(v,{children:t.edgeCount}),e.jsxs(v,{children:[e.jsx(We,{anchorEl:m,anchorOrigin:{vertical:"top",horizontal:"center"},disableRestoreFocus:!0,id:"mouse-over-popover",onClose:$,open:L,sx:{pointerEvents:"none","& .MuiPaper-root":{backgroundColor:"rgba(0, 0, 0, 0.9)",borderRadius:"4px",width:"160px"}},transformOrigin:{vertical:"bottom",horizontal:"center"},children:e.jsx(Je,{sx:{p:1.5,fontSize:"13px",fontWeight:400,lineHeight:"1.8",wordWrap:"break-word"},children:t.edgeList.join(", ")})}),j.join(", "),b>0&&e.jsx(Je,{"aria-haspopup":"true","aria-owns":L?"mouse-over-popover":void 0,component:"span",onMouseEnter:w,onMouseLeave:$,sx:{cursor:"context-menu"},children:",..."})]}),e.jsx(v,{children:e.jsx("span",{children:p})}),e.jsx(v,{className:"cell-center",children:e.jsx(h,{direction:"row",justify:"space-between",children:e.jsx("div",{className:"approve-wrapper",children:n?e.jsx(ko,{children:e.jsx(E,{color:c.white,size:16})}):e.jsxs(h,{direction:"row",children:[t.muted_topic?e.jsx(V,{className:"centered",onClick:()=>g(t.ref_id,!1),children:e.jsx(So,{})}):e.jsx(V,{className:"centered",onClick:()=>g(t.ref_id,!0),children:e.jsx(wo,{})}),e.jsx(V,{onClick:k=>r(k,t.ref_id),children:e.jsx(_o,{"data-testid":"ThreeDotsIcons"})})]})})})})]},t.name)},ko=u.span`
  margin-left: 12px;
`,Ao=u.span`
  cursor: pointer;
  :hover {
    text-decoration: underline;
  }
`,$o=u.td`
  visibility: hidden;
  cursor: pointer;
  display: flex;
  align-items: center;

  &.visible {
    visibility: visible;
  }
`,Lo=u.div`
  width: 14px;
  height: 14px;
  border-radius: 4px;
  border: ${({checked:t})=>t?"#618AFF":"2px solid #CCCCCC"};
  background-color: ${({checked:t})=>t?"#618AFF":"transparent"};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 12px;
`,Eo=u.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 2px;
  background-color: transparent;
`,No=x.memo(To),Po=({setShowMuteUnmute:t,showMuted:r,onTopicEdit:o,onChangeFilter:s,checkedStates:i,setCheckedStates:l})=>{const{close:a}=G("sourcesTable"),[n,d]=x.useState(!1),[p,g]=P.useState(null),[f,y]=P.useState(""),j=Object.values(i).filter(A=>A).length,[b,m]=ne(A=>[A.setSearchFormValue,A.setCurrentSearch]),[C,w,$]=z(A=>[A.data,A.ids,A.total]),L=x.useCallback((A,M)=>{g(A.currentTarget),y(M)},[]),I=()=>{g(null)},k=A=>{b(A),m(A),a()},S=A=>{o(f,A),I()},T=A=>{s(A)},N=!!p,R=N?"simple-popover":void 0,Y=async()=>{d(!0);const A=[];try{Object.keys(i).forEach(M=>{if(i[M]){const oe=je(M,{muted_topic:r});z.setState({ids:w.filter(Z=>Z!==M),total:$-1}),A.push(oe)}}),await Promise.all(A),d(!1)}catch(M){console.error("Error:",M),d(!1)}};return C?e.jsx(e.Fragment,{children:Object.keys(C).length?e.jsx(Wo,{align:"center",justify:n?"center":"flex-start",children:n?e.jsx(E,{color:c.white}):e.jsxs(e.Fragment,{children:[e.jsxs(Ce,{component:"table",children:[e.jsx(_e,{children:e.jsxs(J,{component:"tr",children:[e.jsx(v,{className:"empty"}),e.jsx(v,{children:e.jsxs(Ie,{onClick:()=>T(Fe),children:["Name ",e.jsx(Pe,{})]})}),e.jsx(v,{children:"Type"}),e.jsx(v,{children:e.jsxs(Ie,{onClick:()=>T(Fr),children:["Count ",e.jsx(Pe,{})]})}),e.jsx(v,{children:"Edge list"}),e.jsx(v,{children:e.jsxs(Ie,{onClick:()=>T(Wr),children:["Date ",e.jsx(Pe,{})]})}),e.jsx(v,{children:e.jsx(h,{px:8,children:e.jsxs(Io,{onClick:t,children:[e.jsx(Bo,{checked:r,children:e.jsx(zo,{children:r&&e.jsx(Ge,{})})}),"Muted"]})})})]})}),j>0&&e.jsxs(J,{component:"tr",children:[e.jsx(v,{children:e.jsx(V,{onClick:()=>l({}),children:e.jsx(K,{})})}),e.jsx(v,{children:e.jsxs(Fo,{children:[e.jsxs(Ro,{children:[e.jsx(Mo,{children:j}),"selected"]}),e.jsx(Do,{onClick:Y,role:"button",children:r?e.jsxs(e.Fragment,{children:[e.jsx(lt,{})," Unmute All"]}):e.jsxs(e.Fragment,{children:[e.jsx(at,{})," Mute All"]})})]})})]}),C&&e.jsx("tbody",{children:w==null?void 0:w.map(A=>e.jsx(No,{checkedStates:i,onClick:L,onSearch:k,setCheckedStates:l,topic:C[A]},A))})]}),f?e.jsxs(Oo,{anchorEl:p,anchorOrigin:{vertical:"bottom",horizontal:"right"},id:R,onClose:I,open:N,transformOrigin:{vertical:"top",horizontal:"right"},children:[r?e.jsxs(ae,{onClick:()=>S("unMute"),children:[" ",e.jsx(lt,{"data-testid":""})," Unmute"]}):e.jsxs(ae,{onClick:()=>S("mute"),children:[" ",e.jsx(at,{"data-testid":"VisibilityOff"})," Mute"]}),e.jsxs(ae,{onClick:()=>S("editTopic"),children:[e.jsx(Co,{"data-testid":"EditTopicIcon"})," Rename"]}),e.jsxs(ae,{onClick:()=>S("mergeTopic"),children:[e.jsx(vo,{"data-testid":"MergeIcon"})," Merge"]}),e.jsxs(ae,{onClick:()=>S("addEdge"),children:[e.jsx(bo,{"data-testid":"AddCircleIcon"})," Add edge"]})]}):null]})}):e.jsxs(h,{children:[e.jsx(_,{children:"There is not any results for selected filters"}),e.jsx(ze,{})]})}):e.jsxs(h,{children:[e.jsx(_,{children:"There is not any results for selected filters"}),e.jsx(ze,{})]})},Io=u.td`
  cursor: pointer;
  display: flex;
  align-items: center;
`,Bo=u.div`
  width: 14px;
  height: 14px;
  border-radius: 4px;
  border: ${({checked:t})=>t?"#618AFF":"2px solid #CCCCCC"};
  background-color: ${({checked:t})=>t?"#618AFF":"transparent"};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 8px;
`,zo=u.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 2px;
  background-color: transparent;
`,Ie=u.span`
  cursor: pointer;
  display: flex;
  gap: 4px;
  align-items: center;
`,ae=u(h).attrs({direction:"row",px:12,py:8})`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 12px;
  cursor: pointer;
  background: ${c.BUTTON1};
  color: ${c.white};

  &:hover {
    background: ${c.BUTTON1_HOVER};
    color: ${c.GRAY3};
  }
`,Oo=u(We)`
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
`,Mo=u.span`
  font-family: Barlow;
  font-size: 13px;
  font-weight: 500;
  margin-right: 3px;
`,Do=u.div`
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
`,Ro=u.div`
  display: flex;
  align-items: center;
  gap: 2px;
`,Fo=u.span`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,Wo=u(h)`
  min-height: 0;
  overflow: auto;
  flex: 1;
  width: 100%;
`,Vo=()=>{const[t,r]=x.useState(!1),[o,s,i,l,a,n,d]=z(T=>[T.data,T.ids,T.total,T.setTopics,T.filters,T.setFilters,T.terminate]),{open:p}=G("editTopic"),{open:g}=G("mergeTopic"),{open:f}=G("addEdge"),[y,j]=x.useState(null),[b,m]=x.useState({}),C={editTopic:p,mergeTopic:g,addEdge:f},w=x.useRef([]);x.useEffect(()=>{s.length&&(w.current=s)},[s]),x.useEffect(()=>{(async()=>{try{r(!0),await l()}catch{console.error("err")}finally{r(!1)}})()},[l,a]);const $=async()=>{try{r(!0),n({page:a.page+1})}catch(T){console.error("Error loading more data:",T)}finally{r(!1)}};x.useEffect(()=>()=>{d()},[d]);const L=T=>{n({sortBy:T})},I=()=>{j(null)},k=async(T,N)=>{try{await je(T,{muted_topic:N==="mute"}),z.setState({ids:s.filter(R=>R!==T),total:i-1})}catch(R){console.warn(R)}},S=async(T,N)=>{o&&(j(o[T]),["mute","unMute"].includes(N)&&await k(T,N),typeof C[N]=="function"&&C[N]())};return e.jsxs(e.Fragment,{children:[e.jsxs(Go,{direction:"column",justify:"flex-end",children:[e.jsx(Te,{align:"flex-start",direction:"row",justify:"space-between",children:e.jsx(_,{className:"title",children:"Topics"})}),e.jsx(Ho,{children:e.jsx(Yn,{activeIcon:e.jsx(K,{}),defaultIcon:e.jsx(be,{}),loadingIcon:e.jsx(E,{color:c.PRIMARY_BLUE,size:24}),placeholder:"Search ..."})}),e.jsx(Uo,{align:"center",justify:t&&!o?"center":"flex-start",children:t&&!o?e.jsx(E,{color:c.white}):e.jsxs(e.Fragment,{children:[e.jsx(Po,{checkedStates:b,onChangeFilter:L,onTopicEdit:S,setCheckedStates:m,setShowMuteUnmute:()=>n({muted:!a.muted}),showMuted:a.muted}),i>s.length?e.jsxs(H,{className:"load-more",disabled:t,onClick:$,children:["Load more",t&&e.jsx(E,{color:c.BLUE_PRESS_STATE,size:10})]}):null]})})]}),y&&e.jsx(jo,{onClose:I,topic:y}),y&&e.jsx(po,{onClose:I,topic:y}),y&&e.jsx(ao,{onClose:I,topic:y})]})},Go=u(h)`
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
`,Uo=u(h)`
  min-height: 0;
  overflow: auto;
  flex: 1;
  width: 100%;
`,Ho=u(h)`
  margin: 0 0 16px 36px;
`;function Yo(t){return t.charAt(0).toUpperCase()+t.slice(1).toLowerCase()}const Zo=({node:t})=>{var r,o,s,i,l,a,n,d,p;return e.jsxs(Se,{children:[e.jsx(v,{className:"empty"}),e.jsx(v,{children:(r=t==null?void 0:t.properties)!=null&&r.date_added_to_graph?Oe((o=t==null?void 0:t.properties)==null?void 0:o.date_added_to_graph):Oe((s=t==null?void 0:t.properties)==null?void 0:s.date)}),e.jsx(v,{children:t==null?void 0:t.node_type}),e.jsx(v,{children:(t==null?void 0:t.node_type)==="Tweet"?e.jsx(ct,{href:`${Qe}${(i=t==null?void 0:t.properties)==null?void 0:i.tweet_id}${Qe.includes("?")?"&":"?"}open=system`,target:"_blank",children:(l=t==null?void 0:t.properties)==null?void 0:l.tweet_id}):e.jsx(ct,{href:`${(a=t==null?void 0:t.properties)==null?void 0:a.source_link}${((n=t==null?void 0:t.properties)==null?void 0:n.source_link).includes("?")?"&":"?"}open=system`,target:"_blank",children:(d=t==null?void 0:t.properties)==null?void 0:d.source_link})}),e.jsx(v,{children:(p=t==null?void 0:t.properties)!=null&&p.status?Yo(t.properties.status):"Processing"})]})},ct=u.a`
  color: ${c.white};
  text-decoration: underline;
  &:visited {
    color: ${c.white};
  }
`,Ko=x.memo(Zo),qo=({nodes:t})=>{const{open:r}=G("addContent"),o=async()=>{r()};return!t||(t==null?void 0:t.length)===0?e.jsx(e.Fragment,{children:e.jsxs(Qo,{children:[e.jsx(Xo,{align:"center",direction:"row",justify:"space-between",children:e.jsx(_,{className:"subtitle",children:"Contribute to the graph by adding content."})}),e.jsx(h,{children:e.jsx(H,{color:"secondary",onClick:o,size:"medium",startIcon:e.jsx(Kr,{}),type:"submit",variant:"contained",children:"Add Content"})})]})}):e.jsxs(Ce,{component:"table",children:[e.jsx(_e,{children:e.jsxs(J,{component:"tr",children:[e.jsx(v,{className:"empty"}),e.jsx(v,{children:"Date"}),e.jsx(v,{children:"Type"}),e.jsx(v,{children:"Source"}),e.jsx(v,{children:"Status"})]})}),e.jsx("tbody",{children:t==null?void 0:t.map(s=>e.jsx(Ko,{node:s},s==null?void 0:s.ref_id))})]})},Qo=Re(h)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 100px auto;
  width: 100%;
`,Xo=Re(h)`
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
`,Jo=()=>{const[t,r]=x.useState([]),[o,s]=x.useState(!0),[i,l]=x.useState(10),[a,n]=x.useState(!0),d={only_content:"true",sort_by:"date",limit:i.toString()},p=async()=>{s(!0);try{const f=await Qt(d);r(f.nodes),s(!1)}catch(f){console.error("Error fetching data:",f),s(!1)}};x.useEffect(()=>{p()},[i]);const g=()=>{l(i+10),p()};return e.jsxs(es,{direction:"column",justify:"flex-end",children:[e.jsx(Te,{align:"center",direction:"row",justify:"space-between",children:e.jsx(_,{className:"title",children:"Content I've added to the graph"})}),e.jsxs(ts,{align:"center",justify:o?"center":"flex-start",children:[o?e.jsx(E,{color:c.white}):e.jsx(e.Fragment,{children:e.jsx(qo,{nodes:t})}),o?null:a?e.jsx(H,{onClick:g,size:"medium",children:"Load More"}):e.jsx(rs,{children:"No new nodes available"})]})]})},es=u(h)`
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
`,ts=u(h)`
  min-height: 0;
  overflow: auto;
  flex: 1;
  width: 100%;
`,rs=u.div`
  margin-top: 10px;
  color: ${c.GRAY3};
  font-family: Barlow;
  font-size: 14px;
`,ns=[{label:$t,component:Jo},{label:Vr,component:Vn},{label:At,component:En},{label:kt,component:Vo}],os=t=>{const{children:r,value:o,index:s,...i}=t;return o===s?e.jsx(cs,{"aria-labelledby":`simple-tab-${s}`,hidden:o!==s,id:`simple-tabpanel-${s}`,role:"tabpanel",...i,children:r}):null};function ss(t){return{id:`simple-tab-${t}`,"aria-controls":`simple-tabpanel-${t}`}}const is=()=>{const[t,r]=x.useState(0),[o]=de(n=>[n.isAdmin]),[s]=Xt(n=>[n.queuedSourcesFlag]),i=Jt(),l=(n,d)=>{r(d)},a=ns.filter(({label:n})=>n===kt?o:n===At?o&&s:n===$t?i:!0);return e.jsxs(ds,{direction:"column",children:[e.jsx(as,{"aria-label":"sources tabs",onChange:l,value:t,children:a.map((n,d)=>e.jsx(ls,{color:c.white,disableRipple:!0,label:n.label,...ss(d)},n.label))}),a.map((n,d)=>e.jsx(os,{index:d,value:t,children:e.jsx(n.component,{})},n.label))]})},as=u(qr)`
  && {
    background: rgba(0, 0, 0, 0.2);
    border-radius: 9px 9px 0 0;
    .MuiTabs-indicator {
      background: ${c.primaryBlue};
    }
  }
`,ls=u(Qr)`
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
`,cs=u(h)`
  display: flex;
  flex: 1;
  min-height: 572px;
  padding: 20px 0;
  max-height: 572px;
`,ds=u(h)`
  min-height: 0;
  flex: 1;
`,fe={required:{message:"The field is required",value:!0}},ps=({initialValues:t})=>{const r=pe({defaultValues:t,mode:"onSubmit"}),{isSubmitting:o}=r.formState,s=r.handleSubmit(async i=>{try{await er(i)}catch(l){console.warn(l)}});return e.jsx(he,{...r,children:e.jsx("form",{id:"add-node-form",onSubmit:s,children:e.jsxs(e.Fragment,{children:[e.jsxs(h,{children:[e.jsx(h,{pt:12,children:e.jsx(le,{id:"cy-about-title-id",label:"Graph Title",maxLength:50,name:"title",placeholder:"Type graph title here...",rules:{...fe}})}),e.jsx(h,{pt:12,children:e.jsx(le,{id:"cy-about-id",label:"Graph Description",maxLength:50,name:"description",placeholder:"Type graph description here...",rules:{...fe}})}),e.jsx(h,{pt:12,children:e.jsx(le,{id:"cy-about-mission_statement-id",label:"Mission Statement",maxLength:50,name:"mission_statement",placeholder:"Type mission statement here...",rules:{...fe}})}),e.jsx(h,{pt:12,children:e.jsx(le,{id:"cy-about-search_term-id",label:"Search Term",maxLength:50,name:"search_term",placeholder:"Type search term here...",rules:{...fe}})})]}),e.jsx(h,{pt:8,children:o?e.jsx(hs,{children:e.jsx(E,{color:c.white,size:20})}):e.jsx(Et,{disabled:o,id:"add-node-submit-cta",kind:"big",type:"submit",children:"Save changes"})})]})})})},hs=u(h).attrs({align:"center",background:"primaryButton",borderRadius:8,justify:"center"})`
  padding: 16px 24px;
  opacity: 0.5;
`,us=({initialValues:t})=>e.jsxs(e.Fragment,{children:[t.title&&e.jsxs(h,{pt:12,children:[e.jsx(_,{kind:"regular",children:"Graph Title"}),e.jsx(h,{pt:12,children:e.jsx(_,{className:"value",kind:"medium",children:t.title})})]}),t.description&&e.jsxs(h,{pt:12,children:[e.jsx(_,{kind:"regular",children:"Graph Description"}),e.jsx(h,{pt:12,children:e.jsx(_,{className:"value",kind:"medium",children:t.description})})]}),t.mission_statement&&e.jsxs(h,{pt:12,children:[e.jsx(_,{kind:"regular",children:"Mission Statement"}),e.jsx(h,{pt:12,children:e.jsx(_,{className:"value",kind:"medium",children:t.mission_statement})})]})]}),xs=()=>{const[t]=de(o=>[o.isAdmin]),r=ne(o=>o.appMetaData);return e.jsxs(fs,{align:"stretch",direction:"column",justify:"flex-end",children:[e.jsx(gs,{align:"center",direction:"row",justify:"space-between",children:e.jsx(_,{className:"title",children:"About"})}),e.jsx(ms,{align:"stretch",justify:"flex-start",children:t?e.jsx(ps,{initialValues:r}):e.jsx(us,{initialValues:r})})]})},fs=u(h)`
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
`,ms=u(h)`
  min-height: 0;
  overflow: auto;
  flex: 1;
  width: 100%;
`,gs=u(h)`
  margin-bottom: 16px;
  ${_} {
    margin-bottom: 0;
  }
`;var ys=["type","layout","connectNulls","ref"];function te(t){"@babel/helpers - typeof";return te=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},te(t)}function js(t,r){if(t==null)return{};var o=bs(t,r),s,i;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(i=0;i<l.length;i++)s=l[i],!(r.indexOf(s)>=0)&&Object.prototype.propertyIsEnumerable.call(t,s)&&(o[s]=t[s])}return o}function bs(t,r){if(t==null)return{};var o={},s=Object.keys(t),i,l;for(l=0;l<s.length;l++)i=s[l],!(r.indexOf(i)>=0)&&(o[i]=t[i]);return o}function ce(){return ce=Object.assign?Object.assign.bind():function(t){for(var r=1;r<arguments.length;r++){var o=arguments[r];for(var s in o)Object.prototype.hasOwnProperty.call(o,s)&&(t[s]=o[s])}return t},ce.apply(this,arguments)}function dt(t,r){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);r&&(s=s.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),o.push.apply(o,s)}return o}function O(t){for(var r=1;r<arguments.length;r++){var o=arguments[r]!=null?arguments[r]:{};r%2?dt(Object(o),!0).forEach(function(s){D(t,s,o[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):dt(Object(o)).forEach(function(s){Object.defineProperty(t,s,Object.getOwnPropertyDescriptor(o,s))})}return t}function Q(t){return Ss(t)||ws(t)||vs(t)||Cs()}function Cs(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function vs(t,r){if(t){if(typeof t=="string")return Me(t,r);var o=Object.prototype.toString.call(t).slice(8,-1);if(o==="Object"&&t.constructor&&(o=t.constructor.name),o==="Map"||o==="Set")return Array.from(t);if(o==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return Me(t,r)}}function ws(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Ss(t){if(Array.isArray(t))return Me(t)}function Me(t,r){(r==null||r>t.length)&&(r=t.length);for(var o=0,s=new Array(r);o<r;o++)s[o]=t[o];return s}function _s(t,r){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")}function pt(t,r){for(var o=0;o<r.length;o++){var s=r[o];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,Nt(s.key),s)}}function Ts(t,r,o){return r&&pt(t.prototype,r),o&&pt(t,o),Object.defineProperty(t,"prototype",{writable:!1}),t}function ks(t,r){if(typeof r!="function"&&r!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(r&&r.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),r&&De(t,r)}function De(t,r){return De=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(s,i){return s.__proto__=i,s},De(t,r)}function As(t){var r=Ls();return function(){var s=ye(t),i;if(r){var l=ye(this).constructor;i=Reflect.construct(s,arguments,l)}else i=s.apply(this,arguments);return $s(this,i)}}function $s(t,r){if(r&&(te(r)==="object"||typeof r=="function"))return r;if(r!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return W(t)}function W(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function Ls(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function ye(t){return ye=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(o){return o.__proto__||Object.getPrototypeOf(o)},ye(t)}function D(t,r,o){return r=Nt(r),r in t?Object.defineProperty(t,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[r]=o,t}function Nt(t){var r=Es(t,"string");return te(r)==="symbol"?r:String(r)}function Es(t,r){if(te(t)!=="object"||t===null)return t;var o=t[Symbol.toPrimitive];if(o!==void 0){var s=o.call(t,r||"default");if(te(s)!=="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(t)}var ue=function(t){ks(o,t);var r=As(o);function o(){var s;_s(this,o);for(var i=arguments.length,l=new Array(i),a=0;a<i;a++)l[a]=arguments[a];return s=r.call.apply(r,[this].concat(l)),D(W(s),"state",{isAnimationFinished:!0,totalLength:0}),D(W(s),"generateSimpleStrokeDasharray",function(n,d){return"".concat(d,"px ").concat(n-d,"px")}),D(W(s),"getStrokeDasharray",function(n,d,p){var g=p.reduce(function($,L){return $+L});if(!g)return s.generateSimpleStrokeDasharray(d,n);for(var f=Math.floor(n/g),y=n%g,j=d-n,b=[],m=0,C=0;m<p.length;C+=p[m],++m)if(C+p[m]>y){b=[].concat(Q(p.slice(0,m)),[y-C]);break}var w=b.length%2===0?[0,j]:[j];return[].concat(Q(o.repeat(p,f)),Q(b),w).map(function($){return"".concat($,"px")}).join(", ")}),D(W(s),"id",xr("recharts-line-")),D(W(s),"pathRef",function(n){s.mainCurve=n}),D(W(s),"handleAnimationEnd",function(){s.setState({isAnimationFinished:!0}),s.props.onAnimationEnd&&s.props.onAnimationEnd()}),D(W(s),"handleAnimationStart",function(){s.setState({isAnimationFinished:!1}),s.props.onAnimationStart&&s.props.onAnimationStart()}),s}return Ts(o,[{key:"componentDidMount",value:function(){if(this.props.isAnimationActive){var i=this.getTotalLength();this.setState({totalLength:i})}}},{key:"componentDidUpdate",value:function(){if(this.props.isAnimationActive){var i=this.getTotalLength();i!==this.state.totalLength&&this.setState({totalLength:i})}}},{key:"getTotalLength",value:function(){var i=this.mainCurve;try{return i&&i.getTotalLength&&i.getTotalLength()||0}catch{return 0}}},{key:"renderErrorBar",value:function(i,l){if(this.props.isAnimationActive&&!this.state.isAnimationFinished)return null;var a=this.props,n=a.points,d=a.xAxis,p=a.yAxis,g=a.layout,f=a.children,y=fr(f,mr);if(!y)return null;var j=function(C,w){return{x:C.x,y:C.y,value:C.value,errorVal:bt(C.payload,w)}},b={clipPath:i?"url(#clipPath-".concat(l,")"):null};return P.createElement(ke,b,y.map(function(m){return P.cloneElement(m,{key:"bar-".concat(m.props.dataKey),data:n,xAxis:d,yAxis:p,layout:g,dataPointFormatter:j})}))}},{key:"renderDots",value:function(i,l,a){var n=this.props.isAnimationActive;if(n&&!this.state.isAnimationFinished)return null;var d=this.props,p=d.dot,g=d.points,f=d.dataKey,y=xe(this.props),j=xe(p,!0),b=g.map(function(C,w){var $=O(O(O({key:"dot-".concat(w),r:3},y),j),{},{value:C.value,dataKey:f,cx:C.x,cy:C.y,index:w,payload:C.payload});return o.renderDotItem(p,$)}),m={clipPath:i?"url(#clipPath-".concat(l?"":"dots-").concat(a,")"):null};return P.createElement(ke,ce({className:"recharts-line-dots",key:"dots"},m),b)}},{key:"renderCurveStatically",value:function(i,l,a,n){var d=this.props,p=d.type,g=d.layout,f=d.connectNulls;d.ref;var y=js(d,ys),j=O(O(O({},xe(y,!0)),{},{fill:"none",className:"recharts-line-curve",clipPath:l?"url(#clipPath-".concat(a,")"):null,points:i},n),{},{type:p,layout:g,connectNulls:f});return P.createElement(gr,ce({},j,{pathRef:this.pathRef}))}},{key:"renderCurveWithAnimation",value:function(i,l){var a=this,n=this.props,d=n.points,p=n.strokeDasharray,g=n.isAnimationActive,f=n.animationBegin,y=n.animationDuration,j=n.animationEasing,b=n.animationId,m=n.animateNewValues,C=n.width,w=n.height,$=this.state,L=$.prevPoints,I=$.totalLength;return P.createElement(yr,{begin:f,duration:y,isActive:g,easing:j,from:{t:0},to:{t:1},key:"line-".concat(b),onAnimationEnd:this.handleAnimationEnd,onAnimationStart:this.handleAnimationStart},function(k){var S=k.t;if(L){var T=L.length/d.length,N=d.map(function(B,oe){var Z=Math.floor(oe*T);if(L[Z]){var se=L[Z],q=ie(se.x,B.x),Pt=ie(se.y,B.y);return O(O({},B),{},{x:q(S),y:Pt(S)})}if(m){var It=ie(C*2,B.x),Bt=ie(w/2,B.y);return O(O({},B),{},{x:It(S),y:Bt(S)})}return O(O({},B),{},{x:B.x,y:B.y})});return a.renderCurveStatically(N,i,l)}var R=ie(0,I),Y=R(S),A;if(p){var M="".concat(p).split(/[,\s]+/gim).map(function(B){return parseFloat(B)});A=a.getStrokeDasharray(Y,I,M)}else A=a.generateSimpleStrokeDasharray(I,Y);return a.renderCurveStatically(d,i,l,{strokeDasharray:A})})}},{key:"renderCurve",value:function(i,l){var a=this.props,n=a.points,d=a.isAnimationActive,p=this.state,g=p.prevPoints,f=p.totalLength;return d&&n&&n.length&&(!g&&f>0||!jr(g,n))?this.renderCurveWithAnimation(i,l):this.renderCurveStatically(n,i,l)}},{key:"render",value:function(){var i,l=this.props,a=l.hide,n=l.dot,d=l.points,p=l.className,g=l.xAxis,f=l.yAxis,y=l.top,j=l.left,b=l.width,m=l.height,C=l.isAnimationActive,w=l.id;if(a||!d||!d.length)return null;var $=this.state.isAnimationFinished,L=d.length===1,I=Ke("recharts-line",p),k=g&&g.allowDataOverflow,S=f&&f.allowDataOverflow,T=k||S,N=Be(w)?this.id:w,R=(i=xe(n))!==null&&i!==void 0?i:{r:3,strokeWidth:2},Y=R.r,A=Y===void 0?3:Y,M=R.strokeWidth,B=M===void 0?2:M,oe=br(n)?n:{},Z=oe.clipDot,se=Z===void 0?!0:Z,q=A*2+B;return P.createElement(ke,{className:I},k||S?P.createElement("defs",null,P.createElement("clipPath",{id:"clipPath-".concat(N)},P.createElement("rect",{x:k?j:j-b/2,y:S?y:y-m/2,width:k?b:b*2,height:S?m:m*2})),!se&&P.createElement("clipPath",{id:"clipPath-dots-".concat(N)},P.createElement("rect",{x:j-q/2,y:y-q/2,width:b+q,height:m+q}))):null,!L&&this.renderCurve(T,N),this.renderErrorBar(T,N),(L||n)&&this.renderDots(T,se,N),(!C||$)&&Cr.renderCallByParent(this.props,d))}}],[{key:"getDerivedStateFromProps",value:function(i,l){return i.animationId!==l.prevAnimationId?{prevAnimationId:i.animationId,curPoints:i.points,prevPoints:l.curPoints}:i.points!==l.curPoints?{curPoints:i.points}:null}},{key:"repeat",value:function(i,l){for(var a=i.length%2!==0?[].concat(Q(i),[0]):i,n=[],d=0;d<l;++d)n=[].concat(Q(n),Q(a));return n}},{key:"renderDotItem",value:function(i,l){var a;if(P.isValidElement(i))a=P.cloneElement(i,l);else if(tr(i))a=i(l);else{var n=Ke("recharts-line-dot",i?i.className:"");a=P.createElement(jt,ce({},l,{className:n}))}return a}}]),o}(x.PureComponent);D(ue,"displayName","Line");D(ue,"defaultProps",{xAxisId:0,yAxisId:0,connectNulls:!1,activeDot:!0,dot:!0,legendType:"line",stroke:"#3182bd",strokeWidth:1,fill:"#fff",points:[],isAnimationActive:!ur.isSsr,animateNewValues:!0,animationBegin:0,animationDuration:1500,animationEasing:"ease",hide:!1,label:!1});D(ue,"getComposedData",function(t){var r=t.props,o=t.xAxis,s=t.yAxis,i=t.xAxisTicks,l=t.yAxisTicks,a=t.dataKey,n=t.bandSize,d=t.displayedData,p=t.offset,g=r.layout,f=d.map(function(y,j){var b=bt(y,a);return g==="horizontal"?{x:qe({axis:o,ticks:i,bandSize:n,entry:y,index:j}),y:Be(b)?null:s.scale(b),value:b,payload:y}:{x:Be(b)?null:o.scale(b),y:qe({axis:s,ticks:l,bandSize:n,entry:y,index:j}),value:b,payload:y}});return O({points:f,layout:g},p)});var Ns=vr({chartName:"LineChart",GraphicalChild:ue,axisComponents:[{axisType:"xAxis",AxisComp:Ct},{axisType:"yAxis",AxisComp:vt}],formatAxisMap:wr});const Ps=({cx:t,cy:r})=>e.jsx(jt,{cx:t,cy:r,fill:c.blueTextAccent,r:2}),Is=({data:t,width:r=500,height:o=300})=>e.jsx(e.Fragment,{children:(t==null?void 0:t.length)&&e.jsxs(Ns,{data:t,height:o,id:"cy-sentiment-chart",margin:{bottom:5,left:-20,right:30,top:5},width:r,children:[e.jsx(Sr,{stroke:c.lightBlue300,strokeDasharray:"5 5"}),e.jsx(Ct,{dataKey:"date",interval:Math.floor(t.length/3),stroke:c.blueTextAccent}),e.jsx(vt,{domain:[0,10],stroke:c.blueTextAccent}),e.jsx(_r,{}),e.jsx(ue,{dataKey:"score",dot:e.jsx(Ps,{}),stroke:"#8884d8",type:"monotone"})]})}),Bs=()=>{const[t,r]=x.useState(void 0),[o]=de(a=>[a.setBudget]),[s,i]=x.useState(!1),l=async()=>{i(!0),rr(o).then(async a=>{r(a==null?void 0:a.data.filter(n=>n.date).map(n=>({date:nr.unix(Number(String(n.date).split(".")[0])).format("MM/DD/YY"),score:n.sentiment_score}))),await gt(o)}).catch().finally(()=>{i(!1)})};return e.jsxs(zs,{align:"flex-start",direction:"column",id:"cy-sentiment-chart-wrapper",justify:"flex-end",children:[e.jsx(_,{className:"title",children:"Sentiment chart"}),s&&e.jsx(Zr,{alignItems:"center",component:"div",flexGrow:1,p:4,spacing:2,width:"100%",children:e.jsx(Tr,{color:c.white})}),!(t!=null&&t.length)&&e.jsx(Os,{className:"button",id:"cy-get-sentiments-btn",onClick:l,children:"Get top 100 sentiments"}),e.jsx(Is,{data:t})]})},zs=u(h)`
  border-radius: 8px;
  box-shadow: 0px 5px 6px rgb(0 0 0 / 50%);
  padding: 16px;

  .title {
    margin-bottom: 16px;
    font-size: 20px;
  }
`,Os=u(Et)`
  height: 48px;
`,Ms=600,Ds={about:e.jsx(xs,{}),sentiment:e.jsx(Bs,{}),sources:e.jsx(is,{}),"":null},Rs=()=>{const[t,r]=ne(o=>[o.secondarySidebarActiveTab,o.setSecondarySidebarActiveTab]);return e.jsx(kr,{direction:"left",in:!!t,mountOnEnter:!0,unmountOnExit:!0,children:e.jsxs(Fs,{id:"secondary-sidebar-wrapper",children:[e.jsx(Ws,{id:"cy-close-secondary-sidebar",onClick:()=>r(""),children:e.jsx(wt,{})}),Ds[t]]})})},Fs=u(h)(({theme:t})=>({background:c.BG1,height:"100vh",padding:"16px 20px",width:"100%",zIndex:30,display:"flex",[t.breakpoints.up("sm")]:{width:Ms}})),Ws=u(h).attrs({align:"center",justify:"center",p:5})`
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
`,Vs=u(lr)`
  .Toastify__toast {
    background-color: #49c998ff;
  }
  .Toastify__toast-body {
    background-color: #49c998ff;
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
`,Gs=u(h)`
  height: 100%;
  width: 100%;
  background-color: ${c.black};
`,Us=u(h)`
  position: absolute;
  bottom: 8px;
  left: 8px;
  color: ${c.white};
  font-size: 12px;
  opacity: 0.5;
`,Hs=x.lazy(()=>F(()=>import("./index-b8c5588f.js"),["assets/index-b8c5588f.js","assets/index-b85f35cf.js","assets/index-3f17fe3b.css","assets/SourcesTableIcon-9e0ca82c.js","assets/SettingsIcon-cd476525.js","assets/index-b9c9b7e2.js"]).then(({MainToolbar:t})=>({default:t}))),Ys=x.lazy(()=>F(()=>import("./index-027fb887.js"),["assets/index-027fb887.js","assets/index-b85f35cf.js","assets/index-3f17fe3b.css","assets/index-e0d568ee.js","assets/react-toastify.esm-ce67a4f9.js","assets/react-toastify-b60658ac.css","assets/generateCategoricalChart-a6175423.js","assets/Popover-28c1573e.js","assets/useSlotProps-b8a587b0.js","assets/InfoIcon-de2f1e11.js","assets/index-1e89d407.js","assets/index.esm-ac56504e.js","assets/EditIcon-67ff5cde.js","assets/PlusIcon-261fd641.js","assets/index-b9c9b7e2.js","assets/ChevronUpIcon-6e1fca04.js","assets/ChevronDownIcon-cf5b6e54.js","assets/index-341edfe1.js","assets/index-856cc0ad.js","assets/index-e6f0fb8d.js","assets/index-0c223900.js","assets/Popper-704ca55a.js","assets/CheckIcon-b94a1aa2.js","assets/Stack-b0e83988.js"]).then(({Universe:t})=>({default:t}))),Zs=x.lazy(()=>F(()=>import("./index-b1d32821.js"),["assets/index-b1d32821.js","assets/index-b85f35cf.js","assets/index-3f17fe3b.css","assets/react-toastify.esm-ce67a4f9.js","assets/react-toastify-b60658ac.css","assets/CheckIcon-b94a1aa2.js","assets/ChevronDownIcon-cf5b6e54.js","assets/ChevronUpIcon-6e1fca04.js","assets/index-341edfe1.js","assets/useSlotProps-b8a587b0.js","assets/Popover-28c1573e.js","assets/ChevronRightIcon-27a1f67e.js","assets/Select-f3cb55de.js","assets/generateCategoricalChart-a6175423.js","assets/InfoIcon-de2f1e11.js","assets/index.esm-ac56504e.js","assets/ChevronRightIcon-6125620a.css","assets/index-f774867a.js","assets/index-1e89d407.js","assets/Skeleton-bd55acf5.js","assets/PlusIcon-261fd641.js","assets/index-b9c9b7e2.js","assets/index-0c223900.js"]).then(({SideBar:t})=>({default:t}))),Ks=()=>{const[t,r]=de(S=>[S.setBudget,S.setNodeCount]),[o,s]=x.useState(!1),{setSidebarOpen:i,currentSearch:l,setCurrentSearch:a,setRelevanceSelected:n,setTranscriptOpen:d}=ne(S=>S),p=Ar(S=>S.setTeachMeAnswer),{data:g,setData:f,fetchData:y,graphStyle:j,setSelectedNode:b,setCategoryFilter:m}=re(S=>S),C=cr(),w=pe({mode:"onChange"}),$=w.handleSubmit(({search:S})=>{d(!1),b(null),n(!1),a(S),p(""),m(null)}),L=x.useCallback(async()=>{await y(t,{...l?{word:l}:{}}),i(!0),l?await gt(t):b(null)},[y,t,l,i,b]);x.useEffect(()=>{L()},[l,L]);const I=()=>{if(g){s(!0);const S=sr(j,g.nodes);f(S),s(!1)}};x.useEffect(()=>{I()},[j]);const k=x.useCallback(()=>{r("INCREMENT")},[r]);return x.useEffect(()=>(C&&(C.connect(),C.on("connect_error",S=>{console.error("Socket connection error:",S)}),C.on("newnode",k)),()=>{C&&C.off()}),[C,k]),e.jsxs(e.Fragment,{children:[e.jsx(dr,{}),e.jsx(_n,{}),e.jsx(pr,{hidden:!or}),e.jsx(x.Suspense,{fallback:e.jsx("div",{children:"Loading..."}),children:e.jsxs(Gs,{direction:"row",children:[e.jsx($r,{children:e.jsxs(he,{...w,children:[e.jsx(Hs,{}),e.jsx(Zs,{onSubmit:$}),e.jsx(Ys,{}),o&&e.jsx(hn,{fullSize:!1}),e.jsx(dn,{}),e.jsx(Rs,{}),e.jsx(vn,{}),e.jsxs(Us,{children:["v",hr]}),e.jsx(yt,{})]})}),e.jsx(Cn,{}),e.jsx(Vs,{}),e.jsx($n,{})]})})]})},hi=Object.freeze(Object.defineProperty({__proto__:null,App:Ks},Symbol.toStringTag,{value:"Module"}));export{Co as E,dn as O,hn as P,Se as S,v as a,_e as b,is as c,hi as i};
