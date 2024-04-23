import{g as Ot,a as zt,s as Oe,c as lt,_ as me,r as f,u as Mt,b as Dt,j as e,d as Rt,e as Ft,F as h,T as S,f as d,h as p,i as re,k as ne,l as X,m as R,n as Wt,S as Vt,o as Gt,p as Ut,q as ct,t as dt,v as Ve,Y as Ge,R as Ue,w as Ht,x as de,y as ze,z as Yt,A as Zt,B as Kt,C as qt,D as je,E as Xt,G as Qt,H as P,I as Jt,J as er,K as tr,L as rr,M as nr,N as or,O as sr,P as pt,Q as ir,U as ar}from"./index-659df10a.js";import{A as lr,a as ht,C as I,u as cr,B as G,I as W,b as Q,S as Me,c as pe,F as he,Q as dr,d as pr,G as hr,L as ur,v as xr}from"./react-toastify.esm-6120373c.js";import{f as He,G as fr,u as mr,c as Ye,D as ut,a as gr,E as yr,L as Se,b as xe,C as jr,A as br,i as ie,d as Cr,e as Ee,g as vr,h as wr,j as xt,k as Ze,l as Sr,X as ft,Y as mt,m as _r,n as Tr,T as kr,P as Ar,S as $r,o as Lr,p as Er}from"./generateCategoricalChart-64c91a5a.js";import{M as Ir,a as Pr,b as Nr,c as gt,d as Br}from"./index.esm-581f5c21.js";import{T as Or,a as J,b as zr,F as Ie,M as be,C as yt,N as Mr,c as Dr,D as Rr}from"./NoFilterResultIcon-c32588d0.js";import{s as ee,T as jt,u as O,A as De,I as Fr,E as Wr,D as Vr,a as Ke,b as bt,Q as Ct,V as vt,S as Gr}from"./index-577cd31f.js";import{P as Re,I as Fe,a as wt}from"./Popover-377b2722.js";import{B as Ur,T as le}from"./index-fdaf0b4c.js";import{D as Hr,P as Yr}from"./PlusIcon-97a7f876.js";import{u as V}from"./index-53b0bc65.js";import{B as We}from"./index-3652260a.js";import{e as Zr,A as St,T as _t,S as Kr}from"./index-b4742f19.js";import{P as qr}from"./Popper-9b917218.js";import{C as Tt}from"./CheckIcon-df1e65fc.js";import{T as Xr,a as Qr,B as kt}from"./index-17c113fd.js";function Jr(t){return Ot("MuiTypography",t)}zt("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);const en=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],tn=t=>{const{align:r,gutterBottom:s,noWrap:n,paragraph:i,variant:l,classes:a}=t,o={root:["root",l,t.align!=="inherit"&&`align${lt(r)}`,s&&"gutterBottom",n&&"noWrap",i&&"paragraph"]};return Ft(o,Jr,a)},rn=Oe("span",{name:"MuiTypography",slot:"Root",overridesResolver:(t,r)=>{const{ownerState:s}=t;return[r.root,s.variant&&r[s.variant],s.align!=="inherit"&&r[`align${lt(s.align)}`],s.noWrap&&r.noWrap,s.gutterBottom&&r.gutterBottom,s.paragraph&&r.paragraph]}})(({theme:t,ownerState:r})=>me({margin:0},r.variant==="inherit"&&{font:"inherit"},r.variant!=="inherit"&&t.typography[r.variant],r.align!=="inherit"&&{textAlign:r.align},r.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},r.gutterBottom&&{marginBottom:"0.35em"},r.paragraph&&{marginBottom:16})),qe={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},nn={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},on=t=>nn[t]||t,sn=f.forwardRef(function(r,s){const n=Mt({props:r,name:"MuiTypography"}),i=on(n.color),l=Zr(me({},n,{color:i})),{align:a="inherit",className:o,component:c,gutterBottom:u=!1,noWrap:g=!1,paragraph:x=!1,variant:m="body1",variantMapping:b=qe}=l,j=Dt(l,en),y=me({},l,{align:a,color:i,className:o,component:c,gutterBottom:u,noWrap:g,paragraph:x,variant:m,variantMapping:b}),v=c||(x?"p":b[m]||qe[m])||"span",_=tn(y);return e.jsx(rn,me({as:v,ref:s,ownerState:y,className:Rt(_.root,o)},j))}),Xe=sn;function Pe(t){const r=new Date(Number(t)*1e3),s=r.getFullYear(),n=(1+r.getMonth()).toString().padStart(2,"0");return`${r.getDate().toString().padStart(2,"0")}/${n}/${s}`}const an=({twitterHandle:t})=>e.jsx(e.Fragment,{children:e.jsx(h,{direction:"row",children:e.jsx(h,{align:"flex-start",pb:12,children:e.jsxs(S,{children:["Tweet by @",t]})})})}),ln=d(h)(({theme:t})=>({position:"absolute",top:"65px",right:"55px",width:"300px",pointerEvents:"none",background:p.dashboardHeader,boxShadow:"0px 1px 6px rgba(0, 0, 0, 0.1)",color:p.primaryText1,zIndex:100,transition:"opacity 0.6s",padding:t.spacing(2,3),[t.breakpoints.down("sm")]:{padding:t.spacing(1,1.5)}})),cn=d(h)`
  width: 22.5%;
`,dn=({node:t})=>{if(!t)return null;const{node_type:r,show_title:s,episode_title:n,description:i,label:l,text:a,type:o,twitter_handle:c}=t,u=t.guests;let g=!1,x=!1;u&&(u.length&&u[0]!==null&&(g=!0),typeof u[0]=="object"&&(x=!0));let m=t.image_url;if(o==="twitter_space"&&(m="twitter_placeholder.png"),m==null)switch(r){case"guest":m="person_placeholder2.png";break;default:m="noimage.jpeg"}return r==="topic"?null:e.jsx(ln,{borderRadius:8,px:24,py:16,children:r==="tweet"?e.jsx(an,{twitterHandle:c}):e.jsxs(e.Fragment,{children:[e.jsxs(h,{direction:"row",children:[e.jsx(cn,{}),e.jsx(h,{align:"flex-start",pb:12,children:e.jsx(S,{children:r==null?void 0:r.toUpperCase()})})]}),e.jsxs(h,{direction:"row",children:[e.jsx(h,{pr:12,children:e.jsx(lr,{src:m,type:"person"})}),e.jsxs("div",{children:[o==="guest"?e.jsxs(h,{direction:"column",children:[e.jsx(S,{children:l}),a&&e.jsx(h,{pt:4,children:e.jsxs(S,{color:"primaryText1",kind:"tiny",children:["@",a]})})]}):e.jsx(S,{color:"primaryText1",kind:"tiny",children:s}),e.jsxs(h,{pt:4,children:[r==="clip"||r==="episode"&&e.jsx(S,{color:"primaryText1",children:"Episode"}),r==="clip"?e.jsx(S,{as:"div",kind:"regularBold",children:He(i)}):e.jsx(S,{color:"primaryText1",kind:"tiny",children:n})]}),e.jsxs(h,{pt:12,children:[r==="clip"&&e.jsx(S,{color:"primaryText1",children:"Episode"}),e.jsx(S,{color:"primaryText1",kind:"tiny",children:r==="clip"?n:He(i)})]}),g&&e.jsxs(h,{pt:12,children:[e.jsx(S,{color:"primaryText1",children:"People"}),e.jsx(h,{pt:4,children:e.jsx(S,{color:"primaryText1",kind:"tiny",children:x?u.map(b=>b.name?b.name:`@${b.twitter_handle}`).join(", "):u==null?void 0:u.join(", ")})})]})]})]})]})})},pn=()=>{const[t]=re(r=>[r.hoveredNode]);return e.jsxs(hn,{children:[t&&e.jsx("div",{id:"tooltip-portal",children:e.jsx(dn,{node:t})}),e.jsx(ht,{})]})},hn=d("div")(({theme:t})=>({position:"absolute",zIndex:1,top:0,left:0,userSelect:"none",pointerEvents:"none",display:"flex",justifyContent:"flex-end",alignItems:"flex-start",height:"100%",width:"100%",padding:"16px",[t.breakpoints.down("sm")]:{top:50}})),un=({fullSize:t=!0})=>{const r=ne(s=>s.sidebarIsOpen);return e.jsx(xn,{align:"center",className:X({"sidebar-is-open":r&&!t}),justify:"center",children:e.jsx(I,{color:p.SECONDARY_BLUE,size:64})})},xn=d(h)`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  background-color: ${p.black};
  z-index: 1;
`,fn=f.lazy(()=>R(()=>import("./index-ccb028e4.js"),["assets/index-ccb028e4.js","assets/index-659df10a.js","assets/index-3f17fe3b.css","assets/index-3652260a.js","assets/index-53b0bc65.js","assets/react-toastify.esm-6120373c.js","assets/react-toastify-b60658ac.css","assets/index-17c113fd.js","assets/useSlotProps-ff692886.js","assets/index-fdaf0b4c.js","assets/index.esm-581f5c21.js","assets/InfoIcon-b4da5800.js","assets/index-b4742f19.js","assets/Popover-377b2722.js","assets/Select-d9b6aeba.js","assets/Popper-9b917218.js","assets/index-30d16895.js","assets/PlusIcon-97a7f876.js","assets/EditIcon-c4866ba1.js","assets/index-9bd82d0d.js","assets/NoFilterResultIcon-c32588d0.js","assets/dividerClasses-1a382922.js","assets/generateCategoricalChart-64c91a5a.js","assets/index-577cd31f.js","assets/CheckIcon-df1e65fc.js"]).then(({SettingsModal:t})=>({default:t}))),mn=f.lazy(()=>R(()=>import("./index-1db1ddc7.js"),["assets/index-1db1ddc7.js","assets/index-659df10a.js","assets/index-3f17fe3b.css","assets/react-toastify.esm-6120373c.js","assets/react-toastify-b60658ac.css","assets/index-3652260a.js","assets/index-53b0bc65.js","assets/index-b0d44554.js","assets/index.esm-581f5c21.js","assets/CheckIcon-df1e65fc.js","assets/index-fdaf0b4c.js","assets/InfoIcon-b4da5800.js"]).then(({AddContentModal:t})=>({default:t}))),gn=f.lazy(()=>R(()=>import("./index-ea6636db.js"),["assets/index-ea6636db.js","assets/index-659df10a.js","assets/index-3f17fe3b.css","assets/react-toastify.esm-6120373c.js","assets/react-toastify-b60658ac.css","assets/index-3652260a.js","assets/index-53b0bc65.js","assets/index-b0d44554.js","assets/index.esm-581f5c21.js","assets/CheckIcon-df1e65fc.js","assets/index-fdaf0b4c.js","assets/InfoIcon-b4da5800.js","assets/index-30d16895.js","assets/index-b4742f19.js","assets/Popover-377b2722.js","assets/useSlotProps-ff692886.js","assets/Select-d9b6aeba.js","assets/Popper-9b917218.js","assets/generateCategoricalChart-64c91a5a.js","assets/NoFilterResultIcon-c32588d0.js","assets/dividerClasses-1a382922.js","assets/index-17c113fd.js","assets/index-577cd31f.js","assets/PlusIcon-97a7f876.js"]).then(({AddItemModal:t})=>({default:t}))),yn=f.lazy(()=>R(()=>import("./index-a736ac69.js"),["assets/index-a736ac69.js","assets/index-659df10a.js","assets/index-3f17fe3b.css","assets/index-3652260a.js","assets/index-53b0bc65.js","assets/react-toastify.esm-6120373c.js","assets/react-toastify-b60658ac.css","assets/generateCategoricalChart-64c91a5a.js","assets/Popover-377b2722.js","assets/useSlotProps-ff692886.js","assets/InfoIcon-b4da5800.js","assets/index.esm-581f5c21.js","assets/NoFilterResultIcon-c32588d0.js","assets/dividerClasses-1a382922.js","assets/index-17c113fd.js","assets/index-577cd31f.js","assets/index-fdaf0b4c.js","assets/PlusIcon-97a7f876.js","assets/index-b4742f19.js","assets/Select-d9b6aeba.js","assets/Popper-9b917218.js","assets/CheckIcon-df1e65fc.js"]).then(({SourcesTableModal:t})=>({default:t}))),jn=f.lazy(()=>R(()=>import("./index-39f99b99.js"),["assets/index-39f99b99.js","assets/index-659df10a.js","assets/index-3f17fe3b.css","assets/index-3652260a.js","assets/index-53b0bc65.js","assets/react-toastify.esm-6120373c.js","assets/react-toastify-b60658ac.css","assets/index-fdaf0b4c.js","assets/index.esm-581f5c21.js","assets/InfoIcon-b4da5800.js","assets/Skeleton-ab1826e1.js"]).then(({EditNodeNameModal:t})=>({default:t}))),bn=f.lazy(()=>R(()=>import("./index-886b7492.js"),["assets/index-886b7492.js","assets/index-659df10a.js","assets/index-3f17fe3b.css","assets/index-3652260a.js","assets/index-53b0bc65.js","assets/react-toastify.esm-6120373c.js","assets/react-toastify-b60658ac.css","assets/Skeleton-ab1826e1.js"]).then(({RemoveNodeModal:t})=>({default:t}))),Cn=f.lazy(()=>R(()=>import("./index-6cdd7820.js"),["assets/index-6cdd7820.js","assets/index-659df10a.js","assets/index-3f17fe3b.css","assets/index-3652260a.js","assets/index-53b0bc65.js","assets/react-toastify.esm-6120373c.js","assets/react-toastify-b60658ac.css","assets/index-b4742f19.js","assets/Popover-377b2722.js","assets/useSlotProps-ff692886.js","assets/Select-d9b6aeba.js","assets/Popper-9b917218.js","assets/index-577cd31f.js","assets/generateCategoricalChart-64c91a5a.js","assets/InfoIcon-b4da5800.js","assets/index.esm-581f5c21.js","assets/NoFilterResultIcon-c32588d0.js","assets/dividerClasses-1a382922.js","assets/index-17c113fd.js","assets/index-fdaf0b4c.js","assets/PlusIcon-97a7f876.js","assets/CheckIcon-df1e65fc.js"]).then(({AddNodeEdgeModal:t})=>({default:t}))),vn=()=>e.jsxs(e.Fragment,{children:[e.jsx(gn,{}),e.jsx(mn,{}),e.jsx(fn,{}),e.jsx(jn,{}),e.jsx(bn,{}),e.jsx(yn,{}),e.jsx(Cn,{})]}),wn=()=>{const t=ne(r=>r.appMetaData);return t?e.jsxs(Sn,{children:[e.jsxs(_n,{children:[e.jsx(e.Fragment,{children:t.title&&e.jsx(S,{className:"title",color:"white",children:t.title})}),e.jsx(S,{className:"subtitle",children:" Second Brain"})]}),e.jsx(Vt,{})]}):null},Sn=d(h).attrs({align:"center",direction:"row",grow:1,justify:"flex-start"})`
  height: 64px;
  position: absolute;
  top: 0px;
  left: 64px;
  right: 32px;
  transition: opacity 1s;
  z-index: 99;
  padding: 20px 23px;
`,_n=d.div`
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
    color: ${p.GRAY6};
    font-family: Barlow;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0.22px;
  }
`,Tn=()=>{const[t,r]=f.useState(!0),s=cr();f.useEffect(()=>{r(!0)},[s]);const n=()=>{r(!1)};return s&&t?e.jsxs(kn,{align:"center",direction:"column",justify:"center",onClick:n,children:[e.jsx("img",{alt:"screen",src:"jamboard_kiosk.png"}),e.jsxs(h,{align:"center",direction:"column",justify:"center",children:[e.jsx(_e,{children:"Second Brain is currently"}),e.jsx(_e,{style:{fontWeight:600},children:"optimized for Desktop."}),e.jsx(_e,{children:"Mobile support coming soon."})]}),e.jsx(G,{color:"secondary",onClick:n,variant:"contained",children:"Got It"})]}):null},kn=d(h)`
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
`,An={},$n=f.createContext(An),Ln=()=>{const[t,r]=f.useState(!1),s=f.useMemo(()=>({isShow:t,setIsShow:r}),[t]);return e.jsx($n.Provider,{value:s})},w=d(Or)`
  && {
    color: ${p.white};
    border: none;
    padding: 6px 2px 6px 0;
    color: ${p.GRAY3};
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
`,Ce=d(J)`
  && {
    height: 48px;
    padding: 0 36px;
  }
  &:nth-child(odd) {
    background-color: ${p.BG3};
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
`,ve=d(zr)`
  && {
    border-bottom: 1px solid ${p.black};
    position: sticky;
    top: 0;
    z-index: 1;
    background-color: ${p.BG1};
  }

  ${w} {
    color: ${p.white};
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
    background: ${p.white};
    color: ${p.BG1};
    pointer-events: none;
  }

  & + &.selected {
    background: ${p.white};
    color: ${p.BG1};
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
`,En=({data:t})=>{const r=re(a=>a.setQueuedSources),[s,n]=f.useState(""),i=async a=>{if(t!=null&&t.length)try{const o=await Gt.enable();await Ut(a,o.pubkey),r(t.filter(c=>c.ref_id!==a))}catch(o){console.warn(o)}},l=async a=>{if(!(!a||!(t!=null&&t.length))){n(a);try{await ct(a),r(t==null?void 0:t.filter(o=>o.ref_id!==a))}catch(o){console.warn(o)}finally{n("")}}};return t!=null&&t.length?e.jsxs(be,{component:"table",children:[e.jsx(ve,{children:e.jsxs(J,{component:"tr",children:[e.jsx(w,{className:"empty"}),e.jsx(w,{children:"Type"}),e.jsx(w,{children:"Source"}),e.jsx(w,{}),e.jsx(w,{className:"empty"})]})}),(t==null?void 0:t.length)&&e.jsx("tbody",{children:t==null?void 0:t.map(a=>e.jsxs(Ce,{children:[e.jsx(w,{className:"empty"}),e.jsx(w,{children:ee[a.source_type]}),e.jsx(w,{width:"268px",children:a.source_type==="twitter_handle"?e.jsxs(Je,{href:`${jt}/${a.source}?open=system`,target:"_blank",children:["@",a.source]}):e.jsx(Je,{href:`${a.source}?open=system`,target:"_blank",children:a.source})}),e.jsx(w,{className:"cell-center",children:e.jsxs(h,{direction:"row",justify:"space-between",children:[e.jsx("div",{className:"approve-wrapper",children:e.jsx(Qe,{className:"centered",onClick:()=>i(a.ref_id),children:e.jsx(Ir,{color:p.primaryGreen,fontSize:24})})}),e.jsx("div",{className:"delete-wrapper",children:s===a.ref_id?e.jsx(I,{color:p.white,size:16}):e.jsx(yt,{message:"Are you sure ?",onConfirm:()=>l(a.ref_id),children:e.jsx(Qe,{className:"centered",children:e.jsx(Pr,{color:p.primaryRed,fontSize:24})})})})]})}),e.jsx(w,{className:"empty"})]},a.source))})]}):e.jsxs(h,{children:[e.jsx(S,{children:"There is not any results for selected filters"}),e.jsx(Ie,{})]})},Qe=d(h)`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  cursor: pointer;
  background: transparent;
  color: ${p.lightBlue500};
  &.centered {
    margin: 0 auto;
  }

  & + & {
    margin-left: 4px;
  }
`,Je=d.a`
  color: ${p.white};
  text-decoration: underline;
  &:visited {
    color: ${p.white};
  }
  &:hover {
    cursor: pointer;
  }
`,In=()=>{const[t,r]=f.useState(!0),[s,n]=f.useState(""),[i,l]=re(c=>[c.queuedSources,c.setQueuedSources]);f.useEffect(()=>{(async()=>{r(!0);try{const u=await dt({approved:"False"});l(u.data)}catch(u){console.warn(u)}finally{r(!1)}})()},[l]);const a=c=>{n(s===c||!c?"":c)},o=i==null?void 0:i.filter(c=>!s||c.source_type===s);return e.jsxs(Pn,{align:"stretch",direction:"column",justify:"flex-end",children:[e.jsxs(we,{align:"flex-start",justify:"space-between",children:[e.jsx(S,{className:"title",children:"Queued Sources"}),e.jsx(S,{className:"subtitle",children:"This is a queue of pending sources waiting for approval or denial from graph users. If you think a source will provide good content for the graph, you can pay to approve it. Think of this as an investment: you pay to add it to the source table, and if the content is popular you will earn from it. If content is not relevant to the graph, you should deny it."})]}),e.jsxs(h,{className:"filters",direction:"row",pb:16,px:36,children:[e.jsx(ge,{className:X({selected:!s}),onClick:()=>a(""),size:"small",children:"All"}),Object.keys(ee).map(c=>e.jsx(ge,{className:X({selected:c===s}),onClick:()=>a(c),size:"small",children:ee[c]},c))]}),e.jsx(Nn,{align:"center",justify:t?"center":"flex-start",children:t?e.jsx(I,{color:p.white}):e.jsx(En,{data:o})})]})},Pn=d(h)`
  flex: 1;

  .title {
    margin-bottom: 32px;
    font-size: 20px;
    color: ${p.white};
    font-family: Barlow;
    font-size: 22px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  .subtitle {
    color: ${p.GRAY3};
    font-family: Barlow;
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  & .filters {
    overflow-x: auto;
  }
`,Nn=d(h)`
  min-height: 0;
  overflow: auto;
  flex: 1;
  width: 100%;
`,Bn=({onSearch:t,placeholder:r,activeIcon:s,loadingIcon:n,defaultIcon:i,...l})=>{const[a,o]=f.useState(""),[c,u]=f.useState(!1),g=()=>{o(""),t(""),u(!1)},x=j=>{!j.target.value&&g(),o(j.target.value)},m=j=>{const{value:y}=j.currentTarget;o(y),!c&&(u(!0),setTimeout(()=>{t(y),y||g(),u(!1)},1e3),y||g())},b=()=>c?e.jsx(et,{children:e.jsx(Te,{type:"button",children:n})}):e.jsx(et,{children:a?e.jsx(Te,{onClick:g,type:"button",children:s}):e.jsx(Te,{type:"button",children:i})});return e.jsxs(On,{children:[e.jsx(zn,{autoComplete:"off",autoCorrect:"off",inputProps:{"aria-label":"search sources"},onChange:x,onKeyDown:j=>{j.key==="Enter"&&m(j)},placeholder:r,value:a,...l}),b()]})},et=d(h)`
  top: -50%;
  right: -3%;
  z-index: 3;
  position: absolute;
  transform: translate(-50%, 50%);
`,Te=d(W)`
  font-size: 24px;
`,On=d(Re)`
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
`,zn=d(Fe)`
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
    background-color: ${p.BG2};
    padding: 0px 8px 0px 16px !important;
    box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);

    &:focus,
    &:active {
      color: ${p.white};
      background-color: ${p.BG2_ACTIVE_INPUT};
      outline: 1px solid ${p.primaryBlue};
    }

    &:hover {
      background-color: ${p.BG2_ACTIVE_INPUT};
    }

    &::placeholder {
      font-size: 15px;
      text-align: left;
      font-weight: 500;
      line-height: 16px;
      letter-spacing: 0em;
      font-family: Barlow;
      color: ${p.GRAY7};
    }
  }
  width: 100%;
`,Mn=({data:t,canEdit:r=!1})=>{const s=re(o=>o.setSources),[n,i]=f.useState(""),l=async(o,c)=>{if(t!=null&&t.length)try{await Ht(o,c);const u=t==null?void 0:t.findIndex(x=>x.ref_id===o),g=[...t];g[u]={...g[u],source:c.source},s(g)}catch(u){console.warn(u)}},a=async o=>{if(!(!o||!(t!=null&&t.length))){i(o);try{await ct(o),s(t==null?void 0:t.filter(c=>c.ref_id!==o))}catch(c){console.warn(c)}finally{i("")}}};return t!=null&&t.length?e.jsxs(be,{"aria-label":"a dense table",component:"table",id:"sources-table",size:"small",children:[e.jsx(ve,{children:e.jsxs(J,{component:"tr",children:[e.jsx(w,{className:"empty"}),e.jsx(w,{children:"Type"}),e.jsx(w,{align:"left",children:"Source"}),r&&e.jsx(w,{align:"left"}),e.jsx(w,{className:"empty"})]})}),e.jsx(Dr,{component:"tbody",children:t==null?void 0:t.map(o=>e.jsxs(Ce,{children:[e.jsx(w,{className:"empty"}),e.jsx(w,{align:"left",children:ee[o.source_type]}),e.jsx(w,{align:"left",children:e.jsx(Dn,{condition:r,wrapper:c=>e.jsx(Rn,{id:o.ref_id,onSave:u=>l(o.ref_id,{source:u,source_type:o.source_type}),value:o.source,children:c}),children:o.source_type===Ve||o.source_type===Ge||o.source_type===Ue?e.jsxs(e.Fragment,{children:[o.source_type===Ve&&e.jsxs(ke,{href:`${jt}/${o.source}`,target:"_blank",children:["@",o.source]}),o.source_type===Ge&&e.jsx(ke,{href:`${o.source}${o.source.includes("?")?"&":"?"}open=system`,target:"_blank",children:o.source}),o.source_type===Ue&&e.jsx(ke,{href:o.source,target:"_blank",children:o.source})]}):e.jsx("div",{children:o.source})})}),r&&e.jsx(w,{align:"left",children:e.jsx("div",{className:"delete-wrapper",id:`delete-${o.source}`,children:n===o.ref_id?e.jsx(At,{"data-testid":`delete-loader-${o.ref_id}`,children:e.jsx(I,{color:p.white,size:16})}):e.jsx(yt,{"data-testid":`delete-icon-${o.ref_id}`,message:"Are you sure?",onConfirm:()=>a(o.ref_id),children:e.jsx(q,{className:"centered","data-testid":`delete-icon-${o.ref_id}`,children:e.jsx(Hr,{})})})})}),e.jsx(w,{className:"empty"})]},o.source))})]}):e.jsxs(Wn,{children:[e.jsx(Mr,{}),e.jsx(S,{className:"text",children:"There is not any results for selected filters"})]})};function Dn({condition:t,wrapper:r,children:s}){return t?r(s):s}const Rn=({value:t,onSave:r,id:s,children:n})=>{const[i,l]=f.useState(!1),[a,o]=f.useState(t),[c,u]=f.useState(!1),g=async()=>{if(s){u(!0);try{await r(a),l(!1)}catch(x){console.warn(x)}finally{u(!1)}}};return e.jsx("div",{children:i?e.jsxs(Fn,{align:"center",direction:"row",children:[e.jsx(Ur,{className:"editable-cell__input",name:"cell-input",onChange:x=>o(x),value:a}),e.jsx(q,{align:"center",justify:"center",children:c?e.jsx(At,{"data-testid":`edit-loader-${s}`,children:e.jsx(I,{color:p.white,size:12})}):e.jsx(Nr,{"data-testid":`check-icon-${s}`,onClick:g})}),e.jsx(q,{align:"center",className:"secondary",justify:"center",onClick:()=>l(!1),children:e.jsx(gt,{})})]}):e.jsxs(Vn,{direction:"row",children:[n,e.jsx(q,{onClick:()=>l(!0),children:e.jsx(Br,{"data-testid":`edit-icon-${s}`,size:20})})]})})},Fn=d(h)`
  display: flex;
  width: 250px;
  border: 2px solid ${p.lightBlue300};
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
`,q=d(h)`
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
`,Wn=d(h)`
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
    color: ${p.GRAY6};
  }
`,Vn=d(h)`
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
  color: ${p.white};
  text-decoration: underline;
  &:visited {
    color: ${p.white};
  }
`,At=d(h)`
  display: flex;
  justify-content: center;
  align-items: center;
`,Gn=()=>{const[t,r]=f.useState(!0),[s,n]=f.useState(""),[i,l]=re(x=>[x.sources,x.setSources]),[a]=de(x=>[x.isAdmin]),[o,c]=f.useState("");f.useEffect(()=>{(async()=>{r(!0);try{const m=await dt();l(m.data)}catch(m){console.warn(m)}finally{r(!1)}})()},[l]);const u=x=>{n(s===x||!x?"":x)},g=f.useMemo(()=>i==null?void 0:i.filter(x=>(!s||x.source_type===s)&&(x.source.toLowerCase().startsWith(o.toLowerCase())||x.source.toLowerCase().includes(o.toLowerCase()))),[o,s,i]);return e.jsxs(Un,{align:"stretch",direction:"column",justify:"flex-end",children:[e.jsx(we,{align:"center",direction:"row",justify:"space-between",children:e.jsx(S,{className:"title",children:"Sources for this Graph"})}),e.jsx(Yn,{children:e.jsx(Bn,{activeIcon:e.jsx(Q,{}),defaultIcon:e.jsx(Me,{}),loadingIcon:e.jsx(I,{color:p.PRIMARY_BLUE,size:24}),onSearch:c,placeholder:"Find Source"})}),e.jsxs(h,{className:"filters",direction:"row",pb:16,px:36,children:[e.jsx(ge,{className:X({selected:!s}),onClick:()=>u(""),size:"small",children:"All"}),Object.keys(ee).map(x=>e.jsx(ge,{className:X({selected:x===s}),onClick:()=>u(x),size:"small",children:ee[x]},x))]}),e.jsx(Hn,{align:"center",justify:t?"center":"flex-start",children:t?e.jsx(I,{color:p.white}):e.jsx(Mn,{canEdit:a,data:g})})]})},Un=d(h)`
  flex: 1;
  .title {
    font-size: 20px;
    color: ${p.white};
    font-family: Barlow;
    font-size: 22px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  & .filters {
    overflow-x: auto;
  }
`,Hn=d(h)`
  min-height: 0;
  overflow: auto;
  flex: 1;
  width: 100%;
`,Yn=d(h)`
  margin: 0 0 16px 36px;
`,Zn=({placeholder:t,activeIcon:r,loadingIcon:s,defaultIcon:n,loading:i,...l})=>{const[a,o]=O(y=>[y.filters,y.setFilters]),[c,u]=f.useState(""),g=()=>{o({search:""})},x=f.useCallback(y=>{o({search:y})},[o]),m=f.useMemo(()=>ze.debounce(x,300),[x]),b=y=>{const{value:v}=y.target;u(v),y.target.value||o({search:""}),y.target.value.length>2&&m(y.target.value)},j=()=>i?e.jsx(tt,{children:e.jsx(Ae,{type:"button",children:s})}):e.jsx(tt,{children:a.search?e.jsx(Ae,{onClick:g,type:"button",children:r}):e.jsx(Ae,{type:"button",children:n})});return e.jsxs(Kn,{children:[e.jsx(qn,{autoComplete:"off",autoCorrect:"off",inputProps:{"aria-label":"search sources"},onChange:b,placeholder:t,value:c,...l}),j()]})},tt=d(h)`
  top: -50%;
  right: -3%;
  z-index: 3;
  position: absolute;
  transform: translate(-50%, 50%);
`,Ae=d(W)`
  font-size: 24px;
`,Kn=d(Re)`
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
`,qn=d(Fe)`
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
    background-color: ${p.BG2};
    padding: 0px 8px 0px 16px !important;
    box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);

    &:focus,
    &:active {
      color: ${p.white};
      background-color: ${p.BG2_ACTIVE_INPUT};
      outline: 1px solid ${p.primaryBlue};
    }

    &:hover {
      background-color: ${p.BG2_ACTIVE_INPUT};
    }

    &::placeholder {
      font-size: 15px;
      text-align: left;
      font-weight: 500;
      line-height: 16px;
      letter-spacing: 0em;
      font-family: Barlow;
      color: ${p.GRAY7};
    }
  }
  width: 100%;
`,$t=t=>e.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 6 10",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M6 5L6.90043e-08 9.33013L4.47556e-07 0.669872L6 5Z",fill:"currentColor"})}),Lt=t=>e.jsxs("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M4.5 6.04386L7.83333 2.83398V13.6673",stroke:"white","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}),e.jsx("path",{d:"M15.5 13.9581L12.1667 17.168L12.1667 6.33463",stroke:"white","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"})]}),Et=t=>e.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 10 10",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("circle",{cx:"5",cy:"5",r:"4.5",fill:"currentColor",stroke:"#6B7A8D"})}),Xn=({selectedType:t,setSelectedType:r})=>{const[s,n]=f.useState([]);f.useEffect(()=>{(async()=>{try{const{data:o}=await Yt();n(o.edge_types)}catch(o){console.warn(o)}})()},[n]);const i=a=>({label:a,value:a}),l=a=>{r((a==null?void 0:a.value)||"")};return e.jsx(St,{onSelect:l,options:s.map(i),selectedValue:t?i(t):null})},Si={label:"Not Selected",value:"Not Selected"},_i={label:"No Parent",value:"No Parent"},Ti=[{label:"number",value:"int"},{label:"string",value:"string"}],Qn=[{label:"Corporation",value:"Corporation"},{label:"Event",value:"Event"},{label:"Image",value:"Image"},{label:"Organization",value:"Organization"},{label:"Person",value:"Person"},{label:"Place",value:"Place"},{label:"Project",value:"Project"},{label:"Software",value:"Software"},{label:"Topic",value:"Topic"}],Jn=({onSelect:t,selectedValue:r})=>{const[s,n]=f.useState([]),[i,l]=f.useState(!1),a=async m=>{const b={is_muted:"False",sort_by:De,search:m,skip:"0",limit:"1000"};l(!0);try{const j=await Zt(b.search);n(j.data)}catch{n([])}finally{l(!1)}},o=f.useMemo(()=>ze.debounce(a,300),[]),c=m=>{if(!m){n([]);return}m.length>2&&o(m)},u=m=>{const b=m?s.find(j=>j.ref_id===m.value):null;t(b||null)},g=m=>({label:m.search_value,value:m.ref_id,type:m.node_type}),x=m=>m.map(g);return r?e.jsxs(h,{align:"center",basis:"100%",direction:"row",grow:1,shrink:1,children:[e.jsx("span",{children:r.search_value}),e.jsx(W,{onClick:()=>t(null),size:"small",children:e.jsx(Q,{})})]}):e.jsx(St,{handleInputChange:c,isLoading:i,onSelect:u,options:x(s)||Qn,selectedValue:r?g(r):null})},eo=({from:t,onSelect:r,selectedType:s,setSelectedType:n,isSwapped:i,setIsSwapped:l,selectedToNode:a})=>e.jsxs(h,{children:[e.jsx(h,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(h,{align:"center",direction:"row",children:e.jsx(to,{children:"Add edge"})})}),e.jsxs(oo,{swap:i,children:[e.jsx(h,{children:e.jsx(so,{disabled:!0,label:i?"To":"From",swap:i,value:t})}),e.jsxs(h,{my:16,children:[e.jsx(no,{children:"Type"}),e.jsx(Xn,{selectedType:s,setSelectedType:n})]}),e.jsx(h,{children:e.jsxs(io,{children:[e.jsx(ao,{children:i?"From":"To"}),e.jsx(Jn,{onSelect:r,selectedValue:a})]})}),e.jsxs(ro,{children:[e.jsx(lo,{children:e.jsx(Et,{})}),e.jsx(co,{onClick:l,children:e.jsx(Lt,{})}),e.jsx(po,{children:e.jsx($t,{})})]})]})]}),to=d(S)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,ro=d.div`
  position: absolute;
  top: 26px;
  bottom: 26px;
  left: 4px;
  width: 35px;
  border-left: 1.5px solid #6b7a8d4d;
  border-top: 1.5px solid #6b7a8d4d;
  border-bottom: 1.5px solid #6b7a8d4d;
  border-radius: 12px 0 0 12px;
`,no=d.label`
  background-color: #23252f;
  color: #bac1c6;
  font-size: 13px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0.01em;
  text-align: left;
`,oo=d.div`
  position: relative;
  color: white;
  font-family: 'Barlow';
  display: flex;
  flex-direction: ${t=>t.swap?"column-reverse":"column"};
  margin-bottom: 10px;
  padding-left: 38px;
`,so=d(_t)`
  position: relative;
  width: 250px;
  padding: 16px;
  gap: 10px;
  border-radius: 6px;
  border: 1px solid #6b7a8d4d;
  opacity: 0px;
  display: flex;
`,io=d.div`
  position: relative;
  width: 250px;
  padding: 15px;
  gap: 10px;
  border-radius: 6px;
  border: 1.4px solid #6b7a8d4d;
  opacity: 0px;
  display: flex;
  align-items: center;
`,ao=d.label`
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
`,lo=d.div`
  position: absolute;
  top: 0;
  right: 0;
  transform: translateY(-50%) translateX(50%);
  color: #23252f;
`,co=d.div`
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
`,po=d.div`
  position: absolute;
  bottom: 0;
  right: 0;
  transform: translateY(10px) translateX(3px);
  color: #6b7a8d;
  line-height: 1;
`,ho=({topic:t,onClose:r})=>{const{close:s}=V("addEdge"),[n]=O(v=>[v.data]),i=pe({mode:"onChange"}),[l,a]=f.useState(!1),[o,c]=f.useState(!1),[u,g]=f.useState(""),[x,m]=f.useState(null),b=()=>{r(),s()},j=async()=>{if(!(!x||!n)){c(!0);try{await Kt({from:t.ref_id,to:x==null?void 0:x.ref_id,relationship:u});const{ref_id:v}=t,{ref_id:_}=x;if(n){const k={...n};k[v]={...k[v],edgeList:[...k[v].edgeList,u]},k[_]&&(k[_]={...k[_],edgeList:[...k[_].edgeList,u]}),O.setState({data:k})}b()}catch(v){console.warn(v)}finally{c(!1)}}},y=o||!x||!u;return e.jsx(We,{id:"addEdge",kind:"small",onClose:b,preventOutsideClose:!0,children:e.jsxs(he,{...i,children:[e.jsx(eo,{from:t.name,isSwapped:l,onSelect:m,selectedToNode:x,selectedType:u,setIsSwapped:()=>a(!l),setSelectedType:g}),e.jsxs(G,{color:"secondary",disabled:y,onClick:j,size:"large",variant:"contained",children:["Confirm",o&&e.jsx(I,{color:p.BLUE_PRESS_STATE,size:10})]})]})})},uo=()=>e.jsxs(h,{children:[e.jsx(h,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(h,{align:"center",direction:"row",children:e.jsx(xo,{children:"Edit topic"})})}),e.jsx(h,{mb:12,children:e.jsx(le,{id:"cy-topic",maxLength:50,name:"name",placeholder:"Add your topic",rules:{...qt}})})]}),xo=d(S)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,fo=({topic:t,onClose:r})=>{const{close:s}=V("editTopic"),[n]=O(b=>[b.data]),i=pe({mode:"onChange"}),{watch:l,setValue:a,reset:o}=i,[c,u]=f.useState(!1);f.useEffect(()=>(t&&a("name",t==null?void 0:t.name),()=>{o()}),[t,a,o]);const g=l("name"),x=()=>{r(),s()},m=async()=>{u(!0);try{if(await je((t==null?void 0:t.ref_id)||"",{name:g.trim()}),n){const b={...n};b[t==null?void 0:t.ref_id].name=g.trim(),O.setState({data:b})}x()}catch(b){console.warn(b)}finally{u(!1)}};return e.jsx(We,{id:"editTopic",kind:"regular",onClose:x,preventOutsideClose:!0,children:e.jsxs(he,{...i,children:[e.jsx(uo,{}),e.jsxs(G,{color:"secondary",disabled:c,onClick:m,size:"large",variant:"contained",children:["Save",c&&e.jsx(I,{color:p.BLUE_PRESS_STATE,size:10})]})]})})},mo=({onSelect:t,selectedTopic:r})=>{const[s,n]=f.useState(!1),[i,l]=f.useState(""),[a,o]=f.useState([]),[c,u]=f.useState(!1),g=f.useRef(null);f.useEffect(()=>()=>o([]),[o]);const x=async y=>{const v={is_muted:"False",sort_by:De,search:y,skip:"0",limit:"1000"};u(!0);try{const _=await Xt(v);o(_.data)}catch{o([])}finally{u(!1)}},m=f.useMemo(()=>ze.debounce(x,300),[]),b=y=>{t(y)},j=y=>{if(l(y),!y){o([]);return}y.length>2&&m(y)};return r?e.jsxs(jo,{children:[e.jsx("div",{className:"value",children:r.name}),e.jsx(h,{className:"icon",onClick:()=>t(null),children:e.jsx(Q,{})})]}):e.jsxs(e.Fragment,{children:[e.jsxs(Re,{ref:g,component:"form",onSubmit:y=>y.preventDefault(),sx:{p:"2px 4px",display:"flex",alignItems:"center",width:200},children:[e.jsx(Fe,{inputProps:{"aria-label":"search topic"},onChange:y=>j(y.target.value),onFocus:()=>n(!0),placeholder:"Search",size:"small",sx:{ml:1,flex:1},value:i}),i&&e.jsxs(e.Fragment,{children:[e.jsx(rt,{"aria-label":"search",onClick:()=>j(""),type:"button",children:e.jsx(Q,{})}),e.jsx(Rr,{orientation:"vertical",sx:{height:28,m:.5}})]}),e.jsx(rt,{"aria-label":"search",type:"button",children:c?e.jsx(I,{color:p.white,size:24}):e.jsx(Me,{})})]}),g.current&&a.length?e.jsx(yo,{anchorEl:g.current,open:s,placement:"bottom",children:e.jsx(e.Fragment,{children:a.map(y=>e.jsx(go,{className:X({active:r===y.ref_id}),onClick:()=>b(y),children:y.name},"option"))})}):null]})},go=d(h).attrs({direction:"row",align:"center"})`
  font-family: Barlow;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  overflow: hidden;
  width: 200px;
  color: ${p.GRAY3};
  margin-bottom: 4px;
  cursor: pointer;
  &.active {
    color: ${p.white};
  }
  &:hover {
    color: ${p.white};
  }

  .icon {
    margin-right: 8px;
    width: 9px;
    font-size: 10px;
  }
`,yo=d(qr)`
  && {
    z-index: 99999;
    background: ${p.BUTTON1};
    min-width: 200px;
    padding: 16px;
    color: ${p.GRAY3};
    box-shadow: 0px 1px 6px 0px rgba(0, 0, 0, 0.2);
    border-radius: 6px;
    max-height: 200px;
    overflow: auto;
  }
`,jo=d(h).attrs({direction:"row",justify:"flex-start",align:"center"})`
  .value {
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .icon {
    margin-left: 8px;
    width: 20px;
    height: 20px;
    color: ${p.white};
    background: ${p.primaryBlue};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
`,rt=d(W)`
  font-size: 24px;
`,bo=({from:t,onSelect:r,selectedTopic:s,isSwapped:n,setIsSwapped:i})=>e.jsxs(h,{children:[e.jsx(h,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(h,{align:"center",direction:"row",children:e.jsx(Co,{children:"Merge topic"})})}),e.jsxs(So,{swap:n,children:[e.jsx(vo,{children:e.jsx(_o,{disabled:!0,label:n?"To":"From",swap:n,value:t})}),e.jsxs(h,{my:16,children:[e.jsx(ko,{children:"Type"}),e.jsx(S,{children:"IS AlIAS"})]}),e.jsx(h,{children:e.jsxs(To,{children:[e.jsx(Ao,{children:n?"From":"To"}),e.jsx(mo,{onSelect:r,selectedTopic:s})]})}),e.jsxs(wo,{children:[e.jsx($o,{children:e.jsx(Et,{})}),e.jsx(Lo,{onClick:i,children:e.jsx(Lt,{})}),e.jsx(Eo,{children:e.jsx($t,{})})]})]})]}),Co=d(S)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,vo=d(h)`
  flex: 1 1 100%;
`,wo=d.div`
  position: absolute;
  top: 26px;
  bottom: 26px;
  left: 4px;
  width: 35px;
  border-left: 1.5px solid #6b7a8d4d;
  border-top: 1.5px solid #6b7a8d4d;
  border-bottom: 1.5px solid #6b7a8d4d;
  border-radius: 12px 0 0 12px;
`,So=d.div`
  position: relative;
  color: white;
  font-family: 'Barlow';
  display: flex;
  flex-direction: ${t=>t.swap?"column-reverse":"column"};
  margin-bottom: 10px;
  padding-left: 38px;
`,_o=d(_t)`
  position: relative;
  width: 250px;
  padding: 16px;
  gap: 10px;
  border-radius: 6px;
  border: 1px solid #6b7a8d4d;
  opacity: 0px;
  display: flex;
`,To=d.div`
  position: relative;
  width: 250px;
  padding: 15px;
  gap: 10px;
  border-radius: 6px;
  border: 1.4px solid #6b7a8d4d;
  opacity: 0px;
  display: flex;
  align-items: center;
`,ko=d.label`
  background-color: #23252f;
  color: #bac1c6;
  font-size: 13px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0.01em;
  text-align: left;
`,Ao=d.label`
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
`,$o=d.div`
  position: absolute;
  top: 0;
  right: 0;
  transform: translateY(-50%) translateX(50%);
  color: #23252f;
`,Lo=d.div`
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
`,Eo=d.div`
  position: absolute;
  bottom: 0;
  right: 0;
  transform: translateY(10px) translateX(3px);
  color: #6b7a8d;
  line-height: 1;
`,Io=({topic:t,onClose:r})=>{const{close:s}=V("mergeTopic"),[n,i,l]=O(T=>[T.data,T.ids,T.total]),a=pe({mode:"onChange"}),{watch:o,setValue:c,reset:u}=a,[g,x]=f.useState(!1),[m,b]=f.useState(!1),[j,y]=f.useState(null);f.useEffect(()=>(t&&c("name",t==null?void 0:t.name),()=>{u()}),[t,c,u]);const v=o("name"),_=()=>{r(),s()},k=async()=>{if(!(!j||!n)){x(!0);try{await Qt({from:t.ref_id,to:j==null?void 0:j.ref_id});const{ref_id:T}=t;if(n[T]={...n[T],edgeList:[Fr],edgeCount:n[T].edgeCount-1},O.setState({ids:i.filter(E=>E!==j.ref_id),total:l-1}),n){const E={...n};E[t==null?void 0:t.ref_id].name=v.trim(),O.setState({data:E})}_()}catch(T){console.warn(T)}finally{x(!1)}}};return e.jsx(We,{id:"mergeTopic",kind:"small",onClose:_,preventOutsideClose:!0,children:e.jsxs(he,{...a,children:[e.jsx(bo,{from:t.name,isSwapped:m,onSelect:y,selectedTopic:j,setIsSwapped:()=>b(!m)}),e.jsxs(G,{color:"secondary",disabled:g,onClick:k,size:"large",variant:"contained",children:["Merge topics",g&&e.jsx(I,{color:p.BLUE_PRESS_STATE,size:10})]})]})})},Po=t=>e.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M7.37516 8.625V11.3334C7.37516 11.5104 7.43508 11.6589 7.55491 11.7786C7.67476 11.8984 7.82326 11.9583 8.00041 11.9583C8.17758 11.9583 8.32599 11.8984 8.44564 11.7786C8.5653 11.6589 8.62512 11.5104 8.62512 11.3334V8.625H11.3335C11.5106 8.625 11.659 8.56508 11.7788 8.44525C11.8986 8.3254 11.9585 8.1769 11.9585 7.99975C11.9585 7.82258 11.8986 7.67417 11.7788 7.55452C11.659 7.43487 11.5106 7.37504 11.3335 7.37504H8.62512V4.66669C8.62512 4.4896 8.56521 4.34117 8.44537 4.22137C8.32553 4.1016 8.17702 4.04171 7.99987 4.04171C7.82271 4.04171 7.6743 4.1016 7.55464 4.22137C7.43499 4.34117 7.37516 4.4896 7.37516 4.66669V7.37504H4.66681C4.48973 7.37504 4.3413 7.43496 4.22152 7.55479C4.10173 7.67464 4.04183 7.82314 4.04183 8.00029C4.04183 8.17746 4.10173 8.32587 4.22152 8.44552C4.3413 8.56517 4.48973 8.625 4.66681 8.625H7.37516ZM8.00154 15.9167C6.90659 15.9167 5.8774 15.7089 4.91395 15.2933C3.9505 14.8778 3.11243 14.3138 2.39975 13.6015C1.68705 12.8891 1.12284 12.0514 0.7071 11.0884C0.291364 10.1253 0.0834961 9.09636 0.0834961 8.00142C0.0834961 6.90647 0.291274 5.87728 0.70683 4.91383C1.12239 3.95037 1.68634 3.11231 2.3987 2.39963C3.11108 1.68693 3.94878 1.12272 4.91181 0.706979C5.87482 0.291243 6.9038 0.083374 7.99875 0.083374C9.09369 0.083374 10.1229 0.291153 11.0863 0.706708C12.0498 1.12226 12.8879 1.68622 13.6005 2.39858C14.3132 3.11096 14.8774 3.94866 15.2932 4.91169C15.7089 5.8747 15.9168 6.90368 15.9168 7.99863C15.9168 9.09357 15.709 10.1228 15.2935 11.0862C14.8779 12.0497 14.3139 12.8877 13.6016 13.6004C12.8892 14.3131 12.0515 14.8773 11.0885 15.2931C10.1255 15.7088 9.09648 15.9167 8.00154 15.9167ZM8.00014 14.6667C9.86125 14.6667 11.4376 14.0209 12.7293 12.7292C14.021 11.4375 14.6668 9.86113 14.6668 8.00002C14.6668 6.13891 14.021 4.56252 12.7293 3.27085C11.4376 1.97919 9.86125 1.33335 8.00014 1.33335C6.13903 1.33335 4.56264 1.97919 3.27098 3.27085C1.97931 4.56252 1.33348 6.13891 1.33348 8.00002C1.33348 9.86113 1.97931 11.4375 3.27098 12.7292C4.56264 14.0209 6.13903 14.6667 8.00014 14.6667Z",fill:"currentColor"})}),No=t=>e.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 12 12",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M10.1765 0.310088L4.72809 5.70971C4.63832 5.79868 4.56637 5.90372 4.51607 6.01926L3.74627 7.78746C3.63822 8.03565 3.89191 8.28707 4.14234 8.17999L5.92651 7.41707C6.04309 7.36722 6.14907 7.29592 6.23885 7.20695L11.6872 1.80733C12.1044 1.39388 12.1044 0.723539 11.6872 0.310088C11.27 -0.103363 10.5936 -0.103363 10.1765 0.310088ZM9.80835 7.14088C9.80835 6.81895 10.072 6.55777 10.3969 6.55777C10.723 6.55777 10.9854 6.82017 10.9854 7.14088L10.9191 10.2508C10.9191 11.2153 10.1489 12.0001 9.17571 12.0001H1.74343C0.79227 12.0001 0 11.2153 0 10.2289V2.84292C0 1.89999 0.79227 1.11523 1.74343 1.11523L5.29651 1.11548C5.62264 1.11548 5.88501 1.37666 5.88501 1.69858C5.88501 2.0205 5.62141 2.28168 5.29651 2.28168H1.7655C1.44134 2.28168 1.177 2.54335 1.177 2.86479V10.2508C1.177 10.5722 1.44134 10.8339 1.7655 10.8339H9.21985C9.54402 10.8339 9.80835 10.5722 9.80835 10.2508V7.14088Z",fill:"currentColor"})}),Bo=t=>e.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 12 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M1.33317 15.5L0.166504 14.3333L4.18734 10.2917C4.50678 9.97222 4.74984 9.61111 4.9165 9.20833C5.08317 8.80556 5.1665 8.38194 5.1665 7.9375L5.1665 3.6875L3.83317 5L2.6665 3.83333L5.99984 0.5L9.33317 3.83333L8.1665 5L6.83317 3.6875L6.83317 7.9375C6.83317 8.38194 6.9165 8.80556 7.08317 9.20833C7.24984 9.61111 7.49289 9.97222 7.81234 10.2917L11.8332 14.3333L10.6665 15.5L5.99984 10.8333L1.33317 15.5Z",fill:"currentColor"})}),$e=t=>e.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 12 8",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M0.333496 7.66704V6.66706H3.91681V7.66704H0.333496ZM0.333496 4.50037V3.50041H7.7886V4.50037H0.333496ZM0.333496 1.33372V0.33374H11.6668V1.33372H0.333496Z",fill:"currentColor"})}),nt=t=>e.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 16 15",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M14.0716 15L10.8994 11.7764C10.437 11.9597 9.96181 12.0919 9.47381 12.1732C8.98581 12.2545 8.49002 12.2952 7.98643 12.2952C6.33597 12.2952 4.82448 11.8457 3.45194 10.9466C2.07941 10.0476 0.991584 8.86271 0.188459 7.39193C0.123124 7.27666 0.0753836 7.15933 0.045238 7.03994C0.0150793 6.92055 0 6.7991 0 6.67559C0 6.55208 0.0163338 6.42935 0.0490013 6.30739C0.0816688 6.18543 0.13067 6.06938 0.196005 5.95925C0.508607 5.42714 0.84081 4.91226 1.19261 4.41462C1.54443 3.91699 1.95353 3.47673 2.41992 3.09386L0.24877 0.846015L1.07501 0L14.8978 14.154L14.0716 15ZM7.98643 9.94854C8.16032 9.94854 8.32642 9.93799 8.48473 9.91689C8.64305 9.89579 8.7976 9.84973 8.94838 9.77871L4.95591 5.69059C4.89158 5.84498 4.84786 6.00324 4.82475 6.16535C4.80162 6.32745 4.79005 6.49753 4.79005 6.67559C4.79005 7.58645 5.10039 8.35966 5.72108 8.99521C6.34176 9.63076 7.09688 9.94854 7.98643 9.94854ZM13.4384 10.3561L10.9792 7.85816C11.0456 7.66673 11.0961 7.47375 11.1308 7.27922C11.1655 7.0847 11.1828 6.88349 11.1828 6.67559C11.1828 5.76473 10.8725 4.99152 10.2518 4.35597C9.63109 3.72042 8.87598 3.40264 7.98643 3.40264C7.78339 3.40264 7.58689 3.42168 7.39692 3.45976C7.20694 3.49784 7.02099 3.56011 6.83907 3.64657L4.87751 1.64575C5.37606 1.44402 5.88441 1.29529 6.40257 1.19957C6.92071 1.10385 7.44867 1.05599 7.98643 1.05599C9.64191 1.05599 11.1604 1.50756 12.542 2.41072C13.9236 3.31387 15.0134 4.50598 15.8115 5.98705C15.8718 6.08894 15.9183 6.19829 15.951 6.31511C15.9837 6.43192 16 6.55208 16 6.67559C16 6.7991 15.9857 6.91926 15.957 7.03607C15.9284 7.15289 15.8839 7.26225 15.8236 7.36414C15.52 7.94669 15.1738 8.49038 14.7848 8.99521C14.3958 9.50005 13.947 9.95369 13.4384 10.3561ZM10.0912 6.95657L7.73162 4.54816C8.06131 4.48126 8.38246 4.50545 8.69506 4.62072C9.00767 4.736 9.27754 4.9156 9.5047 5.15952C9.7369 5.40036 9.90451 5.67723 10.0075 5.99012C10.1106 6.30301 10.1385 6.62516 10.0912 6.95657Z",fill:"currentColor"})}),ot=t=>e.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 18 13",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M9.00204 9.98073C9.94628 9.98073 10.7483 9.65024 11.408 8.98927C12.0677 8.32829 12.3976 7.52567 12.3976 6.58142C12.3976 5.63718 12.0671 4.8352 11.4061 4.17548C10.7451 3.51576 9.9425 3.1859 8.99825 3.1859C8.05401 3.1859 7.25203 3.51638 6.59231 4.17735C5.93259 4.83834 5.60273 5.64096 5.60273 6.58521C5.60273 7.52944 5.93321 8.33142 6.59419 8.99115C7.25517 9.65087 8.05779 9.98073 9.00204 9.98073ZM9.00014 8.83331C8.37514 8.83331 7.84389 8.61456 7.40639 8.17706C6.96889 7.73956 6.75014 7.20831 6.75014 6.58331C6.75014 5.95831 6.96889 5.42706 7.40639 4.98956C7.84389 4.55206 8.37514 4.33331 9.00014 4.33331C9.62514 4.33331 10.1564 4.55206 10.5939 4.98956C11.0314 5.42706 11.2501 5.95831 11.2501 6.58331C11.2501 7.20831 11.0314 7.73956 10.5939 8.17706C10.1564 8.61456 9.62514 8.83331 9.00014 8.83331ZM9.00129 12.4166C7.08494 12.4166 5.33884 11.888 3.76298 10.8309C2.18713 9.77374 1.02688 8.35788 0.282227 6.58331C1.02688 4.80874 2.18675 3.39288 3.76185 2.33573C5.33694 1.27858 7.08265 0.75 8.999 0.75C10.9153 0.75 12.6614 1.27858 14.2373 2.33573C15.8132 3.39288 16.9734 4.80874 17.7181 6.58331C16.9734 8.35788 15.8135 9.77374 14.2384 10.8309C12.6634 11.888 10.9176 12.4166 9.00129 12.4166Z",fill:"currentColor"})}),Oo=t=>e.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:e.jsxs("g",{opacity:"0.4",children:[e.jsx("mask",{id:"mask0_5162_13105",maskUnits:"userSpaceOnUse",x:"0",y:"0",width:"24",height:"24",children:e.jsx("rect",{width:"1em",height:"1em",fill:"currentColor"})}),e.jsx("g",{mask:"url(#mask0_5162_13105)",children:e.jsx("path",{d:"M19.7615 21.8691L15.7154 17.8537C15.1256 18.0819 14.5195 18.2467 13.8971 18.348C13.2747 18.4493 12.6423 18.4999 12 18.4999C9.89486 18.4999 7.96698 17.94 6.21635 16.8201C4.46572 15.7002 3.07822 14.2243 2.05385 12.3922C1.97052 12.2486 1.90963 12.1025 1.87118 11.9538C1.83271 11.8051 1.81348 11.6538 1.81348 11.4999C1.81348 11.3461 1.83431 11.1932 1.87598 11.0413C1.91764 10.8894 1.98014 10.7448 2.06348 10.6076C2.46219 9.9448 2.88591 9.30345 3.33463 8.68357C3.78336 8.0637 4.30516 7.51531 4.90003 7.0384L2.13078 4.2384L3.18463 3.18457L20.8153 20.8153L19.7615 21.8691ZM12 15.5768C12.2218 15.5768 12.4336 15.5637 12.6356 15.5374C12.8375 15.5111 13.0346 15.4537 13.2269 15.3653L8.13463 10.273C8.05258 10.4653 7.99681 10.6624 7.96733 10.8643C7.93783 11.0663 7.92308 11.2781 7.92308 11.4999C7.92308 12.6345 8.31891 13.5977 9.11058 14.3893C9.90224 15.181 10.8654 15.5768 12 15.5768ZM18.9538 16.0845L15.8173 12.973C15.9019 12.7345 15.9663 12.4941 16.0105 12.2518C16.0548 12.0095 16.0769 11.7589 16.0769 11.4999C16.0769 10.3653 15.681 9.40219 14.8894 8.61052C14.0977 7.81885 13.1346 7.42302 12 7.42302C11.741 7.42302 11.4904 7.44674 11.2481 7.49417C11.0058 7.5416 10.7686 7.61917 10.5366 7.72687L8.03463 5.23457C8.67051 4.98329 9.3189 4.79803 9.9798 4.6788C10.6407 4.55956 11.3141 4.49995 12 4.49995C14.1115 4.49995 16.0484 5.06245 17.8105 6.18745C19.5727 7.31245 20.9628 8.79738 21.9807 10.6422C22.0576 10.7692 22.1169 10.9054 22.1586 11.0509C22.2003 11.1964 22.2211 11.3461 22.2211 11.4999C22.2211 11.6538 22.2028 11.8034 22.1663 11.9489C22.1297 12.0945 22.073 12.2307 21.9961 12.3576C21.6089 13.0832 21.1673 13.7605 20.6711 14.3893C20.175 15.0182 19.6025 15.5832 18.9538 16.0845ZM14.6846 11.8499L11.675 8.84992C12.0955 8.76659 12.5051 8.79671 12.9038 8.9403C13.3025 9.0839 13.6468 9.30761 13.9365 9.61145C14.2327 9.91145 14.4465 10.2563 14.5779 10.6461C14.7093 11.0358 14.7449 11.4371 14.6846 11.8499Z",fill:"currentColor"})})]})}),zo=t=>e.jsxs("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("mask",{id:"mask0_5162_13106",maskUnits:"userSpaceOnUse",x:"0",y:"0",width:"24",height:"24",children:e.jsx("rect",{width:"1em",height:"1em",fill:"currentColor"})}),e.jsx("g",{mask:"url(#mask0_5162_13106)",children:e.jsx("path",{d:"M12.0023 15.5769C13.1354 15.5769 14.0978 15.1803 14.8895 14.3871C15.6811 13.5939 16.077 12.6308 16.077 11.4977C16.077 10.3646 15.6804 9.40224 14.8872 8.61058C14.094 7.81891 13.1309 7.42308 11.9978 7.42308C10.8647 7.42308 9.90234 7.81966 9.11067 8.61282C8.31901 9.40601 7.92317 10.3692 7.92317 11.5023C7.92317 12.6353 8.31976 13.5977 9.11293 14.3894C9.90611 15.181 10.8692 15.5769 12.0023 15.5769ZM12.0001 14.2C11.2501 14.2 10.6126 13.9375 10.0876 13.4125C9.56258 12.8875 9.30007 12.25 9.30007 11.5C9.30007 10.75 9.56258 10.1125 10.0876 9.58748C10.6126 9.06248 11.2501 8.79998 12.0001 8.79998C12.7501 8.79998 13.3876 9.06248 13.9126 9.58748C14.4376 10.1125 14.7001 10.75 14.7001 11.5C14.7001 12.25 14.4376 12.8875 13.9126 13.4125C13.3876 13.9375 12.7501 14.2 12.0001 14.2ZM12.0014 18.5C9.70183 18.5 7.60651 17.8657 5.71547 16.5971C3.82446 15.3285 2.43216 13.6295 1.53857 11.5C2.43216 9.37049 3.82401 7.67146 5.71412 6.40288C7.60422 5.13429 9.69908 4.5 11.9987 4.5C14.2983 4.5 16.3936 5.13429 18.2847 6.40288C20.1757 7.67146 21.568 9.37049 22.4616 11.5C21.568 13.6295 20.1761 15.3285 18.286 16.5971C16.3959 17.8657 14.3011 18.5 12.0014 18.5Z",fill:"currentColor"})})]}),Mo=t=>e.jsxs("svg",{width:"1em",height:"1em",viewBox:"0 0 22 22",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("mask",{id:"mask0_5577_416",maskUnits:"userSpaceOnUse",x:"0",y:"0",width:"22",height:"22",children:e.jsx("rect",{width:"1em",height:"1em",fill:"currentColor"})}),e.jsx("g",{mask:"url(#mask0_5577_416)",children:e.jsx("path",{d:"M11 17.6634C10.6219 17.6634 10.2982 17.5287 10.0289 17.2595C9.75964 16.9902 9.625 16.6665 9.625 16.2884C9.625 15.9103 9.75964 15.5866 10.0289 15.3173C10.2982 15.0481 10.6219 14.9134 11 14.9134C11.3781 14.9134 11.7018 15.0481 11.971 15.3173C12.2403 15.5866 12.375 15.9103 12.375 16.2884C12.375 16.6665 12.2403 16.9902 11.971 17.2595C11.7018 17.5287 11.3781 17.6634 11 17.6634ZM11 12.3749C10.6219 12.3749 10.2982 12.2403 10.0289 11.971C9.75964 11.7018 9.625 11.3781 9.625 11C9.625 10.6218 9.75964 10.2982 10.0289 10.0289C10.2982 9.75962 10.6219 9.62498 11 9.62498C11.3781 9.62498 11.7018 9.75962 11.971 10.0289C12.2403 10.2982 12.375 10.6218 12.375 11C12.375 11.3781 12.2403 11.7018 11.971 11.971C11.7018 12.2403 11.3781 12.3749 11 12.3749ZM11 7.08648C10.6219 7.08648 10.2982 6.95184 10.0289 6.68257C9.75964 6.41332 9.625 6.08963 9.625 5.7115C9.625 5.33339 9.75964 5.0097 10.0289 4.74043C10.2982 4.47118 10.6219 4.33655 11 4.33655C11.3781 4.33655 11.7018 4.47118 11.971 4.74043C12.2403 5.0097 12.375 5.33339 12.375 5.7115C12.375 6.08963 12.2403 6.41332 11.971 6.68257C11.7018 6.95184 11.3781 7.08648 11 7.08648Z",fill:"currentColor"})})]}),Do=({topic:t,onClick:r,onSearch:s,checkedStates:n,setCheckedStates:i})=>{const[l,a]=O(A=>[A.ids,A.total]),[o,c]=f.useState(!1),u=Pe(t.date_added_to_graph),g=async(A,C)=>{c(!0);try{await je(A,{is_muted:C}),O.setState({ids:l.filter(L=>L!==A),total:a-1})}catch(L){console.warn(L)}},x=A=>{i(C=>({...C,[A]:!C[A]}))},m=(A,C)=>{var L;(L=window.getSelection())!=null&&L.toString()?A.preventDefault():s(C.name)},b=t.edgeList.slice(0,1),j=t.edgeList.length-b.length,[y,v]=P.useState(null),_=A=>{v(A.currentTarget)},k=()=>{v(null)},T=!!y,E=n[t.ref_id]?"visible":"";return e.jsxs(Ce,{className:n[t.ref_id]?"checked":"",children:[e.jsx(w,{children:e.jsx(Wo,{className:`checkbox-section ${E}`,onClick:()=>x(t.ref_id),children:e.jsx(Vo,{checked:n[t.ref_id],children:e.jsx(Go,{children:n[t.ref_id]&&e.jsx(Tt,{})})})})}),e.jsx(w,{onClick:A=>m(A,t),children:e.jsx(Fo,{children:t.name})}),e.jsx(w,{children:t.node_type}),e.jsx(w,{children:t.edgeCount}),e.jsxs(w,{children:[e.jsx(wt,{anchorEl:y,anchorOrigin:{vertical:"top",horizontal:"center"},disableRestoreFocus:!0,id:"mouse-over-popover",onClose:k,open:T,sx:{pointerEvents:"none","& .MuiPaper-root":{backgroundColor:"rgba(0, 0, 0, 0.9)",borderRadius:"4px",width:"160px"}},transformOrigin:{vertical:"bottom",horizontal:"center"},children:e.jsx(Xe,{sx:{p:1.5,fontSize:"13px",fontWeight:400,lineHeight:"1.8",wordWrap:"break-word"},children:t.edgeList.join(", ")})}),b.join(", "),j>0&&e.jsx(Xe,{"aria-haspopup":"true","aria-owns":T?"mouse-over-popover":void 0,component:"span",onMouseEnter:_,onMouseLeave:k,sx:{cursor:"context-menu"},children:",..."})]}),e.jsx(w,{children:e.jsx("span",{children:u})}),e.jsx(w,{className:"cell-center",children:e.jsx(h,{direction:"row",justify:"space-between",children:e.jsx("div",{className:"approve-wrapper",children:o?e.jsx(Ro,{children:e.jsx(I,{color:p.white,size:16})}):e.jsxs(h,{direction:"row",children:[t.is_muted?e.jsx(W,{className:"centered",onClick:()=>g(t.ref_id,!1),children:e.jsx(zo,{})}):e.jsx(W,{className:"centered",onClick:()=>g(t.ref_id,!0),children:e.jsx(Oo,{})}),e.jsx(W,{onClick:A=>r(A,t.ref_id),children:e.jsx(Mo,{"data-testid":"ThreeDotsIcons"})})]})})})})]},t.name)},Ro=d.span`
  margin-left: 12px;
`,Fo=d.span`
  cursor: pointer;
  :hover {
    text-decoration: underline;
  }
`,Wo=d.td`
  visibility: hidden;
  cursor: pointer;
  display: flex;
  align-items: center;

  &.visible {
    visibility: visible;
  }
`,Vo=d.div`
  width: 14px;
  height: 14px;
  border-radius: 4px;
  border: ${({checked:t})=>t?"#618AFF":"2px solid #CCCCCC"};
  background-color: ${({checked:t})=>t?"#618AFF":"transparent"};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 12px;
`,Go=d.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 2px;
  background-color: transparent;
`,Uo=f.memo(Do),Ho=({setShowMuteUnmute:t,showMuted:r,onTopicEdit:s,onChangeFilter:n,checkedStates:i,setCheckedStates:l})=>{const{close:a}=V("sourcesTable"),[o,c]=f.useState(!1),[u,g]=P.useState(null),[x,m]=P.useState(""),b=Object.values(i).filter($=>$).length,[j,y]=ne($=>[$.setSearchFormValue,$.setCurrentSearch]),[v,_,k]=O($=>[$.data,$.ids,$.total]),T=f.useCallback(($,M)=>{g($.currentTarget),m(M)},[]),E=()=>{g(null)},A=$=>{j($),y($),a()},C=$=>{s(x,$),E()},L=$=>{n($)},N=!!u,Y=N?"simple-popover":void 0,U=async()=>{c(!0);const $=[];try{Object.keys(i).forEach(M=>{if(i[M]){const oe=je(M,{is_muted:r});O.setState({ids:_.filter(H=>H!==M),total:k-1}),$.push(oe)}}),await Promise.all($),c(!1)}catch(M){console.error("Error:",M),c(!1)}};return v?e.jsx(e.Fragment,{children:Object.keys(v).length?e.jsx(ts,{align:"center",justify:o?"center":"flex-start",children:o?e.jsx(I,{color:p.white}):e.jsxs(e.Fragment,{children:[e.jsxs(be,{component:"table",children:[e.jsx(ve,{children:e.jsxs(J,{component:"tr",children:[e.jsx(w,{className:"empty"}),e.jsx(w,{children:e.jsxs(Le,{onClick:()=>L(De),children:["Name ",e.jsx($e,{})]})}),e.jsx(w,{children:"Type"}),e.jsx(w,{children:e.jsxs(Le,{onClick:()=>L(Wr),children:["Count ",e.jsx($e,{})]})}),e.jsx(w,{children:"Edge list"}),e.jsx(w,{children:e.jsxs(Le,{onClick:()=>L(Vr),children:["Date ",e.jsx($e,{})]})}),e.jsx(w,{children:e.jsx(h,{px:8,children:e.jsxs(Yo,{onClick:t,children:[e.jsx(Zo,{checked:r,children:e.jsx(Ko,{children:r&&e.jsx(Tt,{})})}),"Muted"]})})})]})}),b>0&&e.jsxs(J,{component:"tr",children:[e.jsx(w,{children:e.jsx(W,{onClick:()=>l({}),children:e.jsx(Q,{})})}),e.jsx(w,{children:e.jsxs(es,{children:[e.jsxs(Jo,{children:[e.jsx(Xo,{children:b}),"selected"]}),e.jsx(Qo,{onClick:U,role:"button",children:r?e.jsxs(e.Fragment,{children:[e.jsx(ot,{})," Unmute All"]}):e.jsxs(e.Fragment,{children:[e.jsx(nt,{})," Mute All"]})})]})})]}),v&&e.jsx("tbody",{children:_==null?void 0:_.map($=>e.jsx(Uo,{checkedStates:i,onClick:T,onSearch:A,setCheckedStates:l,topic:v[$]},$))})]}),x?e.jsxs(qo,{anchorEl:u,anchorOrigin:{vertical:"bottom",horizontal:"right"},id:Y,onClose:E,open:N,transformOrigin:{vertical:"top",horizontal:"right"},children:[r?e.jsxs(ae,{"data-testid":"unmute",onClick:()=>C("unMute"),children:[" ",e.jsx(ot,{"data-testid":""})," Unmute"]}):e.jsxs(ae,{"data-testid":"mute",onClick:()=>C("mute"),children:[" ",e.jsx(nt,{"data-testid":"VisibilityOff"})," Mute"]}),e.jsxs(ae,{"data-testid":"rename",onClick:()=>C("editTopic"),children:[e.jsx(No,{"data-testid":"EditTopicIcon"})," Rename"]}),e.jsxs(ae,{"data-testid":"merge",onClick:()=>C("mergeTopic"),children:[e.jsx(Bo,{"data-testid":"MergeIcon"})," Merge"]}),e.jsxs(ae,{"data-testid":"add_edge",onClick:()=>C("addEdge"),children:[e.jsx(Po,{"data-testid":"AddCircleIcon"})," Add edge"]})]}):null]})}):e.jsxs(h,{children:[e.jsx(S,{children:"There is not any results for selected filters"}),e.jsx(Ie,{})]})}):e.jsxs(h,{children:[e.jsx(S,{children:"There is not any results for selected filters"}),e.jsx(Ie,{})]})},Yo=d.td`
  cursor: pointer;
  display: flex;
  align-items: center;
`,Zo=d.div`
  width: 14px;
  height: 14px;
  border-radius: 4px;
  border: ${({checked:t})=>t?"#618AFF":"2px solid #CCCCCC"};
  background-color: ${({checked:t})=>t?"#618AFF":"transparent"};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 8px;
`,Ko=d.div`
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
`,ae=d(h).attrs({direction:"row",px:12,py:8})`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 12px;
  cursor: pointer;
  background: ${p.BUTTON1};
  color: ${p.white};

  &:hover {
    background: ${p.BUTTON1_HOVER};
    color: ${p.GRAY3};
  }
`,qo=d(wt)`
  && {
    z-index: 9999;
  }
  .MuiPaper-root {
    min-width: 149px;
    color: ${p.GRAY3};
    box-shadow: 0px 1px 6px 0px rgba(0, 0, 0, 0.2);
    border-radius: 6px;
    z-index: 1;
    font-family: Barlow;
    font-size: 14px;
    font-weight: 500;
  }
`,Xo=d.span`
  font-family: Barlow;
  font-size: 13px;
  font-weight: 500;
  margin-right: 3px;
`,Qo=d.div`
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
`,Jo=d.div`
  display: flex;
  align-items: center;
  gap: 2px;
`,es=d.span`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,ts=d(h)`
  min-height: 0;
  overflow: auto;
  flex: 1;
  width: 100%;
`,rs=()=>{const[t,r,s,n,i,l,a,o]=O(C=>[C.data,C.ids,C.total,C.setTopics,C.filters,C.setFilters,C.terminate,C.loading]),{open:c}=V("editTopic"),{open:u}=V("mergeTopic"),{open:g}=V("addEdge"),[x,m]=f.useState(null),[b,j]=f.useState({}),y={editTopic:c,mergeTopic:u,addEdge:g},v=f.useRef([]);f.useEffect(()=>{r.length&&(v.current=r)},[r]),f.useEffect(()=>{(async()=>{try{await n()}catch{console.error("err")}})()},[n,i]);const _=async()=>{l({page:i.page+1})};f.useEffect(()=>()=>{a()},[a]);const k=C=>{l({sortBy:C})},T=()=>{m(null)},E=async(C,L)=>{try{await je(C,{is_muted:L==="mute"}),O.setState({ids:r.filter(N=>N!==C),total:s-1})}catch(N){console.warn(N)}},A=async(C,L)=>{t&&(m(t[C]),["mute","unMute"].includes(L)&&await E(C,L),typeof y[L]=="function"&&y[L]())};return e.jsxs(e.Fragment,{children:[e.jsxs(ns,{direction:"column",justify:"flex-end",children:[e.jsx(we,{align:"flex-start",direction:"row",justify:"space-between",children:e.jsx(S,{className:"title",children:"Topics"})}),e.jsx(ss,{children:e.jsx(Zn,{activeIcon:e.jsx(Q,{}),defaultIcon:e.jsx(Me,{}),loading:o,loadingIcon:e.jsx(I,{color:p.PRIMARY_BLUE,size:24}),placeholder:"Search ..."})}),e.jsx(os,{align:"center",justify:o&&!t?"center":"flex-start",children:o&&!t?e.jsx(I,{color:p.white}):e.jsxs(e.Fragment,{children:[e.jsx(Ho,{checkedStates:b,onChangeFilter:k,onTopicEdit:A,setCheckedStates:j,setShowMuteUnmute:()=>l({is_muted:!i.is_muted}),showMuted:i.is_muted}),s>r.length?e.jsxs(G,{className:"load-more",disabled:o,onClick:_,children:["Load more",o&&e.jsx(I,{color:p.BLUE_PRESS_STATE,size:10})]}):null]})})]}),x&&e.jsx(Io,{onClose:T,topic:x}),x&&e.jsx(fo,{onClose:T,topic:x}),x&&e.jsx(ho,{onClose:T,topic:x})]})},ns=d(h)`
  flex: 1;

  .title {
    font-size: 20px;
    color: ${p.white};
    font-family: Barlow;
    font-size: 22px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  .subtitle {
    color: ${p.GRAY3};
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
`,os=d(h)`
  min-height: 0;
  overflow: auto;
  flex: 1;
  width: 100%;
`,ss=d(h)`
  margin: 0 0 16px 36px;
`;function is(t){return t.charAt(0).toUpperCase()+t.slice(1).toLowerCase()}const as=({node:t})=>{var r,s,n,i,l,a,o,c,u;return e.jsxs(Ce,{children:[e.jsx(w,{className:"empty"}),e.jsx(w,{children:(r=t==null?void 0:t.properties)!=null&&r.date_added_to_graph?Pe((s=t==null?void 0:t.properties)==null?void 0:s.date_added_to_graph):Pe((n=t==null?void 0:t.properties)==null?void 0:n.date)}),e.jsx(w,{children:t==null?void 0:t.node_type}),e.jsx(w,{children:(t==null?void 0:t.node_type)==="Tweet"?e.jsx(st,{href:`${Ke}${(i=t==null?void 0:t.properties)==null?void 0:i.tweet_id}${Ke.includes("?")?"&":"?"}open=system`,target:"_blank",children:(l=t==null?void 0:t.properties)==null?void 0:l.tweet_id}):e.jsx(st,{href:`${(a=t==null?void 0:t.properties)==null?void 0:a.source_link}${((o=t==null?void 0:t.properties)==null?void 0:o.source_link).includes("?")?"&":"?"}open=system`,target:"_blank",children:(c=t==null?void 0:t.properties)==null?void 0:c.source_link})}),e.jsx(w,{children:(u=t==null?void 0:t.properties)!=null&&u.status?is(t.properties.status):"Processing"})]})},st=d.a`
  color: ${p.white};
  text-decoration: underline;
  &:visited {
    color: ${p.white};
  }
`,ls=f.memo(as),cs=({nodes:t})=>{const{open:r}=V("addContent"),s=async()=>{r()};return!t||(t==null?void 0:t.length)===0?e.jsx(e.Fragment,{children:e.jsxs(ds,{children:[e.jsx(ps,{align:"center",direction:"row",justify:"space-between",children:e.jsx(S,{className:"subtitle",children:"Contribute to the graph by adding content."})}),e.jsx(h,{children:e.jsx(G,{color:"secondary",onClick:s,size:"medium",startIcon:e.jsx(Yr,{}),type:"submit",variant:"contained",children:"Add Content"})})]})}):e.jsxs(be,{component:"table",children:[e.jsx(ve,{children:e.jsxs(J,{component:"tr",children:[e.jsx(w,{className:"empty"}),e.jsx(w,{children:"Date"}),e.jsx(w,{children:"Type"}),e.jsx(w,{children:"Source"}),e.jsx(w,{children:"Status"})]})}),e.jsx("tbody",{children:t==null?void 0:t.map(n=>e.jsx(ls,{node:n},n==null?void 0:n.ref_id))})]})},ds=Oe(h)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 100px auto;
  width: 100%;
`,ps=Oe(h)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: 30px;

  .subtitle {
    color: ${p.GRAY3};
    font-family: Barlow;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`,hs=()=>{const[t,r]=f.useState([]),[s,n]=f.useState(!0),[i,l]=f.useState(10),[a,o]=f.useState(!0),c={only_content:"true",sort_by:"date",limit:i.toString()},u=async()=>{n(!0);try{const x=await Jt(c);r(x.nodes),n(!1)}catch(x){console.error("Error fetching data:",x),n(!1)}};f.useEffect(()=>{u()},[i]);const g=()=>{l(i+10),u()};return e.jsxs(us,{direction:"column",justify:"flex-end",children:[e.jsx(we,{align:"center",direction:"row",justify:"space-between",children:e.jsx(S,{className:"title",children:"Content I've added to the graph"})}),e.jsxs(xs,{align:"center",justify:s?"center":"flex-start",children:[s?e.jsx(I,{color:p.white}):e.jsx(e.Fragment,{children:e.jsx(cs,{nodes:t})}),s?null:a?e.jsx(G,{onClick:g,size:"medium",children:"Load More"}):e.jsx(fs,{children:"No new nodes available"})]})]})},us=d(h)`
  flex: 1;

  .title {
    font-size: 20px;
    color: ${p.white};
    font-family: Barlow;
    font-size: 22px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  .subtitle {
    color: ${p.GRAY3};
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
`,xs=d(h)`
  min-height: 0;
  overflow: auto;
  flex: 1;
  width: 100%;
`,fs=d.div`
  margin-top: 10px;
  color: ${p.GRAY3};
  font-family: Barlow;
  font-size: 14px;
`,ms=[{label:vt,component:hs},{label:Gr,component:Gn},{label:Ct,component:In},{label:bt,component:rs}],gs=t=>{const{children:r,value:s,index:n,...i}=t;return s===n?e.jsx(vs,{"aria-labelledby":`simple-tab-${n}`,hidden:s!==n,id:`simple-tabpanel-${n}`,role:"tabpanel",...i,children:r}):null};function ys(t){return{id:`simple-tab-${t}`,"aria-controls":`simple-tabpanel-${t}`}}const js=()=>{const[t,r]=f.useState(0),[s]=de(o=>[o.isAdmin]),[n]=er(o=>[o.queuedSourcesFlag]),i=tr(),l=(o,c)=>{r(c)},a=ms.filter(({label:o})=>o===bt?s:o===Ct?s&&n:o===vt?i:!0);return e.jsxs(ws,{direction:"column",children:[e.jsx(bs,{"aria-label":"sources tabs",onChange:l,value:t,children:a.map((o,c)=>e.jsx(Cs,{color:p.white,disableRipple:!0,label:o.label,...ys(c)},o.label))}),a.map((o,c)=>e.jsx(gs,{index:c,value:t,children:e.jsx(o.component,{})},o.label))]})},bs=d(Xr)`
  && {
    background: rgba(0, 0, 0, 0.2);
    border-radius: 9px 9px 0 0;
    .MuiTabs-indicator {
      background: ${p.primaryBlue};
    }
  }
`,Cs=d(Qr)`
  && {
    padding: 30px 0 24px;
    color: ${p.GRAY6};
    margin-left: 34px;
    font-family: Barlow;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;

    &.Mui-selected {
      color: ${p.white};
    }
  }
`,vs=d(h)`
  display: flex;
  flex: 1;
  min-height: 572px;
  padding: 20px 0;
  max-height: 572px;
`,ws=d(h)`
  min-height: 0;
  flex: 1;
`,fe={required:{message:"The field is required",value:!0}},Ss=({initialValues:t})=>{const r=pe({defaultValues:t,mode:"onSubmit"}),{isSubmitting:s}=r.formState,n=r.handleSubmit(async i=>{try{await rr(i)}catch(l){console.warn(l)}});return e.jsx(he,{...r,children:e.jsx("form",{id:"add-node-form",onSubmit:n,children:e.jsxs(e.Fragment,{children:[e.jsxs(h,{children:[e.jsx(h,{pt:12,children:e.jsx(le,{id:"cy-about-title-id",label:"Graph Title",maxLength:50,name:"title",placeholder:"Type graph title here...",rules:{...fe}})}),e.jsx(h,{pt:12,children:e.jsx(le,{id:"cy-about-id",label:"Graph Description",maxLength:50,name:"description",placeholder:"Type graph description here...",rules:{...fe}})}),e.jsx(h,{pt:12,children:e.jsx(le,{id:"cy-about-mission_statement-id",label:"Mission Statement",maxLength:50,name:"mission_statement",placeholder:"Type mission statement here...",rules:{...fe}})}),e.jsx(h,{pt:12,children:e.jsx(le,{id:"cy-about-search_term-id",label:"Search Term",maxLength:50,name:"search_term",placeholder:"Type search term here...",rules:{...fe}})})]}),e.jsx(h,{pt:8,children:s?e.jsx(_s,{children:e.jsx(I,{color:p.white,size:20})}):e.jsx(kt,{disabled:s,id:"add-node-submit-cta",kind:"big",type:"submit",children:"Save changes"})})]})})})},_s=d(h).attrs({align:"center",background:"primaryButton",borderRadius:8,justify:"center"})`
  padding: 16px 24px;
  opacity: 0.5;
`,Ts=({initialValues:t})=>e.jsxs(e.Fragment,{children:[t.title&&e.jsxs(h,{pt:12,children:[e.jsx(S,{kind:"regular",children:"Graph Title"}),e.jsx(h,{pt:12,children:e.jsx(S,{className:"value",kind:"medium",children:t.title})})]}),t.description&&e.jsxs(h,{pt:12,children:[e.jsx(S,{kind:"regular",children:"Graph Description"}),e.jsx(h,{pt:12,children:e.jsx(S,{className:"value",kind:"medium",children:t.description})})]}),t.mission_statement&&e.jsxs(h,{pt:12,children:[e.jsx(S,{kind:"regular",children:"Mission Statement"}),e.jsx(h,{pt:12,children:e.jsx(S,{className:"value",kind:"medium",children:t.mission_statement})})]})]}),ks=()=>{const[t]=de(s=>[s.isAdmin]),r=ne(s=>s.appMetaData);return r?e.jsxs(As,{align:"stretch",direction:"column",justify:"flex-end",children:[e.jsx(Ls,{align:"center",direction:"row",justify:"space-between",children:e.jsx(S,{className:"title",children:"About"})}),e.jsx($s,{align:"stretch",justify:"flex-start",children:t?e.jsx(Ss,{initialValues:r}):e.jsx(Ts,{initialValues:r})})]}):null},As=d(h)`
  border-radius: 8px;
  box-shadow: 0px 5px 6px rgb(0 0 0 / 50%);
  padding: 16px;
  flex: 1;

  .title {
    margin-bottom: 16px;
    font-size: 20px;
  }

  .value {
    color: ${p.lightBlue400};
  }
`,$s=d(h)`
  min-height: 0;
  overflow: auto;
  flex: 1;
  width: 100%;
`,Ls=d(h)`
  margin-bottom: 16px;
  ${S} {
    margin-bottom: 0;
  }
`;var Es=["type","layout","connectNulls","ref"];function te(t){"@babel/helpers - typeof";return te=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},te(t)}function Is(t,r){if(t==null)return{};var s=Ps(t,r),n,i;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(i=0;i<l.length;i++)n=l[i],!(r.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(t,n)&&(s[n]=t[n])}return s}function Ps(t,r){if(t==null)return{};var s={},n=Object.keys(t),i,l;for(l=0;l<n.length;l++)i=n[l],!(r.indexOf(i)>=0)&&(s[i]=t[i]);return s}function ce(){return ce=Object.assign?Object.assign.bind():function(t){for(var r=1;r<arguments.length;r++){var s=arguments[r];for(var n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}return t},ce.apply(this,arguments)}function it(t,r){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);r&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),s.push.apply(s,n)}return s}function z(t){for(var r=1;r<arguments.length;r++){var s=arguments[r]!=null?arguments[r]:{};r%2?it(Object(s),!0).forEach(function(n){D(t,n,s[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):it(Object(s)).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(s,n))})}return t}function K(t){return zs(t)||Os(t)||Bs(t)||Ns()}function Ns(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Bs(t,r){if(t){if(typeof t=="string")return Ne(t,r);var s=Object.prototype.toString.call(t).slice(8,-1);if(s==="Object"&&t.constructor&&(s=t.constructor.name),s==="Map"||s==="Set")return Array.from(t);if(s==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s))return Ne(t,r)}}function Os(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function zs(t){if(Array.isArray(t))return Ne(t)}function Ne(t,r){(r==null||r>t.length)&&(r=t.length);for(var s=0,n=new Array(r);s<r;s++)n[s]=t[s];return n}function Ms(t,r){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")}function at(t,r){for(var s=0;s<r.length;s++){var n=r[s];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,It(n.key),n)}}function Ds(t,r,s){return r&&at(t.prototype,r),s&&at(t,s),Object.defineProperty(t,"prototype",{writable:!1}),t}function Rs(t,r){if(typeof r!="function"&&r!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(r&&r.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),r&&Be(t,r)}function Be(t,r){return Be=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,i){return n.__proto__=i,n},Be(t,r)}function Fs(t){var r=Vs();return function(){var n=ye(t),i;if(r){var l=ye(this).constructor;i=Reflect.construct(n,arguments,l)}else i=n.apply(this,arguments);return Ws(this,i)}}function Ws(t,r){if(r&&(te(r)==="object"||typeof r=="function"))return r;if(r!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return F(t)}function F(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function Vs(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function ye(t){return ye=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(s){return s.__proto__||Object.getPrototypeOf(s)},ye(t)}function D(t,r,s){return r=It(r),r in t?Object.defineProperty(t,r,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[r]=s,t}function It(t){var r=Gs(t,"string");return te(r)==="symbol"?r:String(r)}function Gs(t,r){if(te(t)!=="object"||t===null)return t;var s=t[Symbol.toPrimitive];if(s!==void 0){var n=s.call(t,r||"default");if(te(n)!=="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(t)}var ue=function(t){Rs(s,t);var r=Fs(s);function s(){var n;Ms(this,s);for(var i=arguments.length,l=new Array(i),a=0;a<i;a++)l[a]=arguments[a];return n=r.call.apply(r,[this].concat(l)),D(F(n),"state",{isAnimationFinished:!0,totalLength:0}),D(F(n),"generateSimpleStrokeDasharray",function(o,c){return"".concat(c,"px ").concat(o-c,"px")}),D(F(n),"getStrokeDasharray",function(o,c,u){var g=u.reduce(function(k,T){return k+T});if(!g)return n.generateSimpleStrokeDasharray(c,o);for(var x=Math.floor(o/g),m=o%g,b=c-o,j=[],y=0,v=0;y<u.length;v+=u[y],++y)if(v+u[y]>m){j=[].concat(K(u.slice(0,y)),[m-v]);break}var _=j.length%2===0?[0,b]:[b];return[].concat(K(s.repeat(u,x)),K(j),_).map(function(k){return"".concat(k,"px")}).join(", ")}),D(F(n),"id",mr("recharts-line-")),D(F(n),"pathRef",function(o){n.mainCurve=o}),D(F(n),"handleAnimationEnd",function(){n.setState({isAnimationFinished:!0}),n.props.onAnimationEnd&&n.props.onAnimationEnd()}),D(F(n),"handleAnimationStart",function(){n.setState({isAnimationFinished:!1}),n.props.onAnimationStart&&n.props.onAnimationStart()}),n}return Ds(s,[{key:"componentDidMount",value:function(){if(this.props.isAnimationActive){var i=this.getTotalLength();this.setState({totalLength:i})}}},{key:"componentDidUpdate",value:function(){if(this.props.isAnimationActive){var i=this.getTotalLength();i!==this.state.totalLength&&this.setState({totalLength:i})}}},{key:"getTotalLength",value:function(){var i=this.mainCurve;try{return i&&i.getTotalLength&&i.getTotalLength()||0}catch{return 0}}},{key:"renderErrorBar",value:function(i,l){if(this.props.isAnimationActive&&!this.state.isAnimationFinished)return null;var a=this.props,o=a.points,c=a.xAxis,u=a.yAxis,g=a.layout,x=a.children,m=gr(x,yr);if(!m)return null;var b=function(v,_){return{x:v.x,y:v.y,value:v.value,errorVal:xt(v.payload,_)}},j={clipPath:i?"url(#clipPath-".concat(l,")"):null};return P.createElement(Se,j,m.map(function(y){return P.cloneElement(y,{key:"bar-".concat(y.props.dataKey),data:o,xAxis:c,yAxis:u,layout:g,dataPointFormatter:b})}))}},{key:"renderDots",value:function(i,l,a){var o=this.props.isAnimationActive;if(o&&!this.state.isAnimationFinished)return null;var c=this.props,u=c.dot,g=c.points,x=c.dataKey,m=xe(this.props),b=xe(u,!0),j=g.map(function(v,_){var k=z(z(z({key:"dot-".concat(_),r:3},m),b),{},{value:v.value,dataKey:x,cx:v.x,cy:v.y,index:_,payload:v.payload});return s.renderDotItem(u,k)}),y={clipPath:i?"url(#clipPath-".concat(l?"":"dots-").concat(a,")"):null};return P.createElement(Se,ce({className:"recharts-line-dots",key:"dots"},y),j)}},{key:"renderCurveStatically",value:function(i,l,a,o){var c=this.props,u=c.type,g=c.layout,x=c.connectNulls;c.ref;var m=Is(c,Es),b=z(z(z({},xe(m,!0)),{},{fill:"none",className:"recharts-line-curve",clipPath:l?"url(#clipPath-".concat(a,")"):null,points:i},o),{},{type:u,layout:g,connectNulls:x});return P.createElement(jr,ce({},b,{pathRef:this.pathRef}))}},{key:"renderCurveWithAnimation",value:function(i,l){var a=this,o=this.props,c=o.points,u=o.strokeDasharray,g=o.isAnimationActive,x=o.animationBegin,m=o.animationDuration,b=o.animationEasing,j=o.animationId,y=o.animateNewValues,v=o.width,_=o.height,k=this.state,T=k.prevPoints,E=k.totalLength;return P.createElement(br,{begin:x,duration:m,isActive:g,easing:b,from:{t:0},to:{t:1},key:"line-".concat(j),onAnimationEnd:this.handleAnimationEnd,onAnimationStart:this.handleAnimationStart},function(A){var C=A.t;if(T){var L=T.length/c.length,N=c.map(function(B,oe){var H=Math.floor(oe*L);if(T[H]){var se=T[H],Z=ie(se.x,B.x),Pt=ie(se.y,B.y);return z(z({},B),{},{x:Z(C),y:Pt(C)})}if(y){var Nt=ie(v*2,B.x),Bt=ie(_/2,B.y);return z(z({},B),{},{x:Nt(C),y:Bt(C)})}return z(z({},B),{},{x:B.x,y:B.y})});return a.renderCurveStatically(N,i,l)}var Y=ie(0,E),U=Y(C),$;if(u){var M="".concat(u).split(/[,\s]+/gim).map(function(B){return parseFloat(B)});$=a.getStrokeDasharray(U,E,M)}else $=a.generateSimpleStrokeDasharray(E,U);return a.renderCurveStatically(c,i,l,{strokeDasharray:$})})}},{key:"renderCurve",value:function(i,l){var a=this.props,o=a.points,c=a.isAnimationActive,u=this.state,g=u.prevPoints,x=u.totalLength;return c&&o&&o.length&&(!g&&x>0||!Cr(g,o))?this.renderCurveWithAnimation(i,l):this.renderCurveStatically(o,i,l)}},{key:"render",value:function(){var i,l=this.props,a=l.hide,o=l.dot,c=l.points,u=l.className,g=l.xAxis,x=l.yAxis,m=l.top,b=l.left,j=l.width,y=l.height,v=l.isAnimationActive,_=l.id;if(a||!c||!c.length)return null;var k=this.state.isAnimationFinished,T=c.length===1,E=Ye("recharts-line",u),A=g&&g.allowDataOverflow,C=x&&x.allowDataOverflow,L=A||C,N=Ee(_)?this.id:_,Y=(i=xe(o))!==null&&i!==void 0?i:{r:3,strokeWidth:2},U=Y.r,$=U===void 0?3:U,M=Y.strokeWidth,B=M===void 0?2:M,oe=vr(o)?o:{},H=oe.clipDot,se=H===void 0?!0:H,Z=$*2+B;return P.createElement(Se,{className:E},A||C?P.createElement("defs",null,P.createElement("clipPath",{id:"clipPath-".concat(N)},P.createElement("rect",{x:A?b:b-j/2,y:C?m:m-y/2,width:A?j:j*2,height:C?y:y*2})),!se&&P.createElement("clipPath",{id:"clipPath-dots-".concat(N)},P.createElement("rect",{x:b-Z/2,y:m-Z/2,width:j+Z,height:y+Z}))):null,!T&&this.renderCurve(L,N),this.renderErrorBar(L,N),(T||o)&&this.renderDots(L,se,N),(!v||k)&&wr.renderCallByParent(this.props,c))}}],[{key:"getDerivedStateFromProps",value:function(i,l){return i.animationId!==l.prevAnimationId?{prevAnimationId:i.animationId,curPoints:i.points,prevPoints:l.curPoints}:i.points!==l.curPoints?{curPoints:i.points}:null}},{key:"repeat",value:function(i,l){for(var a=i.length%2!==0?[].concat(K(i),[0]):i,o=[],c=0;c<l;++c)o=[].concat(K(o),K(a));return o}},{key:"renderDotItem",value:function(i,l){var a;if(P.isValidElement(i))a=P.cloneElement(i,l);else if(nr(i))a=i(l);else{var o=Ye("recharts-line-dot",i?i.className:"");a=P.createElement(ut,ce({},l,{className:o}))}return a}}]),s}(f.PureComponent);D(ue,"displayName","Line");D(ue,"defaultProps",{xAxisId:0,yAxisId:0,connectNulls:!1,activeDot:!0,dot:!0,legendType:"line",stroke:"#3182bd",strokeWidth:1,fill:"#fff",points:[],isAnimationActive:!fr.isSsr,animateNewValues:!0,animationBegin:0,animationDuration:1500,animationEasing:"ease",hide:!1,label:!1});D(ue,"getComposedData",function(t){var r=t.props,s=t.xAxis,n=t.yAxis,i=t.xAxisTicks,l=t.yAxisTicks,a=t.dataKey,o=t.bandSize,c=t.displayedData,u=t.offset,g=r.layout,x=c.map(function(m,b){var j=xt(m,a);return g==="horizontal"?{x:Ze({axis:s,ticks:i,bandSize:o,entry:m,index:b}),y:Ee(j)?null:n.scale(j),value:j,payload:m}:{x:Ee(j)?null:s.scale(j),y:Ze({axis:n,ticks:l,bandSize:o,entry:m,index:b}),value:j,payload:m}});return z({points:x,layout:g},u)});var Us=Sr({chartName:"LineChart",GraphicalChild:ue,axisComponents:[{axisType:"xAxis",AxisComp:ft},{axisType:"yAxis",AxisComp:mt}],formatAxisMap:_r});const Hs=({cx:t,cy:r})=>e.jsx(ut,{cx:t,cy:r,fill:p.blueTextAccent,r:2}),Ys=({data:t,width:r=500,height:s=300})=>e.jsx(e.Fragment,{children:(t==null?void 0:t.length)&&e.jsxs(Us,{data:t,height:s,id:"cy-sentiment-chart",margin:{bottom:5,left:-20,right:30,top:5},width:r,children:[e.jsx(Tr,{stroke:p.lightBlue300,strokeDasharray:"5 5"}),e.jsx(ft,{dataKey:"date",interval:Math.floor(t.length/3),stroke:p.blueTextAccent}),e.jsx(mt,{domain:[0,10],stroke:p.blueTextAccent}),e.jsx(kr,{}),e.jsx(ue,{dataKey:"score",dot:e.jsx(Hs,{}),stroke:"#8884d8",type:"monotone"})]})}),Zs=()=>{const[t,r]=f.useState(void 0),[s]=de(a=>[a.setBudget]),[n,i]=f.useState(!1),l=async()=>{i(!0),or(s).then(async a=>{r(a==null?void 0:a.data.filter(o=>o.date).map(o=>({date:sr.unix(Number(String(o.date).split(".")[0])).format("MM/DD/YY"),score:o.sentiment_score}))),await pt(s)}).catch().finally(()=>{i(!1)})};return e.jsxs(Ks,{align:"flex-start",direction:"column",id:"cy-sentiment-chart-wrapper",justify:"flex-end",children:[e.jsx(S,{className:"title",children:"Sentiment chart"}),n&&e.jsx(Kr,{alignItems:"center",component:"div",flexGrow:1,p:4,spacing:2,width:"100%",children:e.jsx(Ar,{color:p.white})}),!(t!=null&&t.length)&&e.jsx(qs,{className:"button",id:"cy-get-sentiments-btn",onClick:l,children:"Get top 100 sentiments"}),e.jsx(Ys,{data:t})]})},Ks=d(h)`
  border-radius: 8px;
  box-shadow: 0px 5px 6px rgb(0 0 0 / 50%);
  padding: 16px;

  .title {
    margin-bottom: 16px;
    font-size: 20px;
  }
`,qs=d(kt)`
  height: 48px;
`,Xs=600,Qs={about:e.jsx(ks,{}),sentiment:e.jsx(Zs,{}),sources:e.jsx(js,{}),"":null},Js=()=>{const[t,r]=ne(s=>[s.secondarySidebarActiveTab,s.setSecondarySidebarActiveTab]);return e.jsx($r,{direction:"left",in:!!t,mountOnEnter:!0,unmountOnExit:!0,children:e.jsxs(ei,{id:"secondary-sidebar-wrapper",children:[e.jsx(ti,{id:"cy-close-secondary-sidebar",onClick:()=>r(""),children:e.jsx(gt,{})}),Qs[t]]})})},ei=d(h)(({theme:t})=>({background:p.BG1,height:"100vh",padding:"16px 20px",width:"100%",zIndex:30,display:"flex",[t.breakpoints.up("sm")]:{width:Xs}})),ti=d(h).attrs({align:"center",justify:"center",p:5})`
  background-color: ${p.inputBg1};
  border-radius: 50%;
  color: ${p.mainBottomIcons};
  cursor: pointer;
  transition-duration: 0.2s;
  align-self: flex-end;
  margin-bottom: 16px;

  &:hover {
    background-color: ${p.gray200};
  }
`,ri=d(dr)`
  .Toastify__toast {
    background-color: #49c998ff;
  }
  .Toastify__toast-body {
    background-color: #49c998ff;
    color: ${p.white};
  }
  .Toastify__close-button {
    color: ${p.white};
  }
  .Toastify__progress-bar--error {
    background-color: ${p.primaryRed};
  }
  .Toastify__progress-bar--success {
    background-color: ${p.primaryGreen};
  }
`,ni=d(h)`
  height: 100%;
  width: 100%;
  background-color: ${p.black};
`,oi=d(h)`
  position: absolute;
  bottom: 8px;
  left: 8px;
  color: ${p.white};
  font-size: 12px;
  opacity: 0.5;
`,si=f.lazy(()=>R(()=>import("./index-661c8ec9.js"),["assets/index-661c8ec9.js","assets/index-659df10a.js","assets/index-3f17fe3b.css","assets/SourcesTableIcon-639ab34e.js","assets/SettingsIcon-864f0e57.js","assets/index-53b0bc65.js"]).then(({MainToolbar:t})=>({default:t}))),ii=f.lazy(()=>R(()=>import("./index-a82a62fc.js"),["assets/index-a82a62fc.js","assets/index-659df10a.js","assets/index-3f17fe3b.css","assets/EditIcon-c4866ba1.js","assets/index-c2e28a6b.js","assets/react-toastify.esm-6120373c.js","assets/react-toastify-b60658ac.css","assets/generateCategoricalChart-64c91a5a.js","assets/Popover-377b2722.js","assets/useSlotProps-ff692886.js","assets/InfoIcon-b4da5800.js","assets/index-852594cb.js","assets/index.esm-581f5c21.js","assets/PlusIcon-97a7f876.js","assets/index-53b0bc65.js","assets/index-9bd82d0d.js","assets/NoFilterResultIcon-c32588d0.js","assets/dividerClasses-1a382922.js","assets/index-17c113fd.js","assets/index-577cd31f.js","assets/index-fdaf0b4c.js","assets/index-3652260a.js","assets/index-b4742f19.js","assets/Select-d9b6aeba.js","assets/Popper-9b917218.js","assets/CheckIcon-df1e65fc.js"]).then(({Universe:t})=>({default:t}))),ai=f.lazy(()=>R(()=>import("./index-320d1bc2.js"),["assets/index-320d1bc2.js","assets/index-659df10a.js","assets/index-3f17fe3b.css","assets/react-toastify.esm-6120373c.js","assets/react-toastify-b60658ac.css","assets/CheckIcon-df1e65fc.js","assets/ChevronDownIcon-3b177248.js","assets/ChevronUpIcon-c002b6b6.js","assets/Popover-377b2722.js","assets/useSlotProps-ff692886.js","assets/ChevronRightIcon-75f1fb83.js","assets/Select-d9b6aeba.js","assets/dividerClasses-1a382922.js","assets/generateCategoricalChart-64c91a5a.js","assets/InfoIcon-b4da5800.js","assets/index.esm-581f5c21.js","assets/ChevronRightIcon-6125620a.css","assets/index-b5ce2fdd.js","assets/index-852594cb.js","assets/Skeleton-ab1826e1.js","assets/PlusIcon-97a7f876.js","assets/index-53b0bc65.js","assets/index-3652260a.js"]).then(({SideBar:t})=>({default:t}))),li=()=>{const[t,r]=de(C=>[C.setBudget,C.setNodeCount]),[s,n]=f.useState(!1),{setSidebarOpen:i,currentSearch:l,setCurrentSearch:a,setRelevanceSelected:o,setTranscriptOpen:c}=ne(C=>C),u=Lr(C=>C.setTeachMeAnswer),{data:g,setData:x,fetchData:m,graphStyle:b,setSelectedNode:j,setCategoryFilter:y}=re(C=>C),v=pr(),_=pe({mode:"onChange"}),k=_.handleSubmit(({search:C})=>{c(!1),j(null),o(!1),a(C),u(""),y(null)}),T=f.useCallback(async()=>{await m(t,{...l?{word:l}:{}}),i(!0),l?await pt(t):j(null)},[m,t,l,i,j]);f.useEffect(()=>{T()},[l,T]);const E=()=>{if(g){n(!0);const C=ar(b,g.nodes);x(C),n(!1)}};f.useEffect(()=>{E()},[b]);const A=f.useCallback(()=>{r("INCREMENT")},[r]);return f.useEffect(()=>(v&&(v.connect(),v.on("connect_error",C=>{console.error("Socket connection error:",C)}),v.on("newnode",A)),()=>{v&&v.off()}),[v,A]),e.jsxs(e.Fragment,{children:[e.jsx(hr,{}),e.jsx(Tn,{}),e.jsx(ur,{hidden:!ir}),e.jsx(f.Suspense,{fallback:e.jsx("div",{children:"Loading..."}),children:e.jsxs(ni,{direction:"row",children:[e.jsx(Er,{children:e.jsxs(he,{..._,children:[e.jsx(si,{}),e.jsx(ai,{onSubmit:k}),e.jsx(ii,{}),s&&e.jsx(un,{fullSize:!1}),e.jsx(pn,{}),e.jsx(Js,{}),e.jsx(wn,{}),e.jsxs(oi,{children:["v",xr]}),e.jsx(ht,{})]})}),e.jsx(vn,{}),e.jsx(ri,{}),e.jsx(Ln,{})]})})]})},ki=Object.freeze(Object.defineProperty({__proto__:null,App:li},Symbol.toStringTag,{value:"Module"}));export{$t as A,No as E,Lt as F,_i as N,pn as O,un as P,Ce as S,Ti as a,w as b,ve as c,Qn as d,js as e,Et as f,ki as g,Si as i};
