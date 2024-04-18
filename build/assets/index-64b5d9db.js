import{g as Bt,a as Ot,s as Oe,c as at,_ as me,r as f,u as Mt,b as zt,j as e,d as Dt,e as Rt,F as h,T as S,f as d,h as p,i as re,k as ne,l as X,m as F,n as Ft,S as Wt,o as Vt,p as Ut,q as lt,t as ct,v as We,Y as Ve,R as Ue,w as Gt,x as de,y as Ht,z as dt,A as Yt,B as Zt,C as Kt,D as je,E as qt,G as Xt,H as N,I as Qt,J as Jt,K as er,L as tr,M as rr,N as nr,O as or,P as pt,Q as sr,U as ir}from"./index-7731e15f.js";import{A as ar,a as ht,C as I,u as lr,B as G,I as V,b as Q,S as Me,c as pe,F as he,Q as cr,d as dr,G as pr,L as hr,v as ur}from"./react-toastify.esm-6d93bcb9.js";import{f as Ge,G as xr,u as fr,c as He,D as ut,a as mr,E as gr,L as Se,b as xe,C as yr,A as jr,i as ie,d as br,e as Ee,g as Cr,h as vr,j as xt,k as Ye,l as wr,X as ft,Y as mt,m as Sr,n as _r,T as Tr,P as kr,S as Ar,o as Lr,p as $r}from"./generateCategoricalChart-61090c9c.js";import{M as Er,a as Ir,b as Pr,c as Nr,d as gt,e as Br}from"./index.esm-02511f32.js";import{T as Or,a as J,b as Mr,F as Ie,M as be,C as yt,N as zr,c as Dr,D as Rr}from"./NoFilterResultIcon-544c95a6.js";import{s as ee,T as jt,u as O,A as ze,I as Fr,E as Wr,D as Vr,a as Ze,b as bt,Q as Ct,V as vt,S as Ur}from"./index-727aee19.js";import{P as De,I as Re,a as wt}from"./Popover-958d913e.js";import{B as Gr,T as le}from"./index-1b1d8084.js";import{u as U}from"./index-22980c99.js";import{B as Fe}from"./index-434f5d73.js";import{e as Hr,A as St,T as _t,S as Yr}from"./index-78d021f1.js";import{P as Zr}from"./Popper-1d618f8f.js";import{C as Tt}from"./CheckIcon-059dfb49.js";import{P as Kr}from"./PlusIcon-433e8f93.js";import{T as qr,a as Xr,B as kt}from"./index-d252726d.js";function Qr(t){return Bt("MuiTypography",t)}Ot("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);const Jr=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],en=t=>{const{align:r,gutterBottom:o,noWrap:n,paragraph:i,variant:l,classes:a}=t,s={root:["root",l,t.align!=="inherit"&&`align${at(r)}`,o&&"gutterBottom",n&&"noWrap",i&&"paragraph"]};return Rt(s,Qr,a)},tn=Oe("span",{name:"MuiTypography",slot:"Root",overridesResolver:(t,r)=>{const{ownerState:o}=t;return[r.root,o.variant&&r[o.variant],o.align!=="inherit"&&r[`align${at(o.align)}`],o.noWrap&&r.noWrap,o.gutterBottom&&r.gutterBottom,o.paragraph&&r.paragraph]}})(({theme:t,ownerState:r})=>me({margin:0},r.variant==="inherit"&&{font:"inherit"},r.variant!=="inherit"&&t.typography[r.variant],r.align!=="inherit"&&{textAlign:r.align},r.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},r.gutterBottom&&{marginBottom:"0.35em"},r.paragraph&&{marginBottom:16})),Ke={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},rn={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},nn=t=>rn[t]||t,on=f.forwardRef(function(r,o){const n=Mt({props:r,name:"MuiTypography"}),i=nn(n.color),l=Hr(me({},n,{color:i})),{align:a="inherit",className:s,component:c,gutterBottom:u=!1,noWrap:g=!1,paragraph:x=!1,variant:m="body1",variantMapping:y=Ke}=l,j=zt(l,Jr),b=me({},l,{align:a,color:i,className:s,component:c,gutterBottom:u,noWrap:g,paragraph:x,variant:m,variantMapping:y}),C=c||(x?"p":y[m]||Ke[m])||"span",_=en(b);return e.jsx(tn,me({as:C,ref:o,ownerState:b,className:Dt(_.root,s)},j))}),qe=on;function Pe(t){const r=new Date(Number(t)*1e3),o=r.getFullYear(),n=(1+r.getMonth()).toString().padStart(2,"0");return`${r.getDate().toString().padStart(2,"0")}/${n}/${o}`}const sn=({twitterHandle:t})=>e.jsx(e.Fragment,{children:e.jsx(h,{direction:"row",children:e.jsx(h,{align:"flex-start",pb:12,children:e.jsxs(S,{children:["Tweet by @",t]})})})}),an=d(h)(({theme:t})=>({position:"absolute",top:"65px",right:"55px",width:"300px",pointerEvents:"none",background:p.dashboardHeader,boxShadow:"0px 1px 6px rgba(0, 0, 0, 0.1)",color:p.primaryText1,zIndex:100,transition:"opacity 0.6s",padding:t.spacing(2,3),[t.breakpoints.down("sm")]:{padding:t.spacing(1,1.5)}})),ln=d(h)`
  width: 22.5%;
`,cn=({node:t})=>{if(!t)return null;const{node_type:r,show_title:o,episode_title:n,description:i,label:l,text:a,type:s,twitter_handle:c}=t,u=t.guests;let g=!1,x=!1;u&&(u.length&&u[0]!==null&&(g=!0),typeof u[0]=="object"&&(x=!0));let m=t.image_url;if(s==="twitter_space"&&(m="twitter_placeholder.png"),m==null)switch(r){case"guest":m="person_placeholder2.png";break;default:m="noimage.jpeg"}return r==="topic"?null:e.jsx(an,{borderRadius:8,px:24,py:16,children:r==="tweet"?e.jsx(sn,{twitterHandle:c}):e.jsxs(e.Fragment,{children:[e.jsxs(h,{direction:"row",children:[e.jsx(ln,{}),e.jsx(h,{align:"flex-start",pb:12,children:e.jsx(S,{children:r==null?void 0:r.toUpperCase()})})]}),e.jsxs(h,{direction:"row",children:[e.jsx(h,{pr:12,children:e.jsx(ar,{src:m,type:"person"})}),e.jsxs("div",{children:[s==="guest"?e.jsxs(h,{direction:"column",children:[e.jsx(S,{children:l}),a&&e.jsx(h,{pt:4,children:e.jsxs(S,{color:"primaryText1",kind:"tiny",children:["@",a]})})]}):e.jsx(S,{color:"primaryText1",kind:"tiny",children:o}),e.jsxs(h,{pt:4,children:[r==="clip"||r==="episode"&&e.jsx(S,{color:"primaryText1",children:"Episode"}),r==="clip"?e.jsx(S,{as:"div",kind:"regularBold",children:Ge(i)}):e.jsx(S,{color:"primaryText1",kind:"tiny",children:n})]}),e.jsxs(h,{pt:12,children:[r==="clip"&&e.jsx(S,{color:"primaryText1",children:"Episode"}),e.jsx(S,{color:"primaryText1",kind:"tiny",children:r==="clip"?n:Ge(i)})]}),g&&e.jsxs(h,{pt:12,children:[e.jsx(S,{color:"primaryText1",children:"People"}),e.jsx(h,{pt:4,children:e.jsx(S,{color:"primaryText1",kind:"tiny",children:x?u.map(y=>y.name?y.name:`@${y.twitter_handle}`).join(", "):u==null?void 0:u.join(", ")})})]})]})]})]})})},dn=()=>{const[t]=re(r=>[r.hoveredNode]);return e.jsxs(pn,{children:[t&&e.jsx("div",{id:"tooltip-portal",children:e.jsx(cn,{node:t})}),e.jsx(ht,{})]})},pn=d("div")(({theme:t})=>({position:"absolute",zIndex:1,top:0,left:0,userSelect:"none",pointerEvents:"none",display:"flex",justifyContent:"flex-end",alignItems:"flex-start",height:"100%",width:"100%",padding:"16px",[t.breakpoints.down("sm")]:{top:50}})),hn=({fullSize:t=!0})=>{const r=ne(o=>o.sidebarIsOpen);return e.jsx(un,{align:"center",className:X({"sidebar-is-open":r&&!t}),justify:"center",children:e.jsx(I,{color:p.SECONDARY_BLUE,size:64})})},un=d(h)`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  background-color: ${p.black};
  z-index: 1;
`,xn=f.lazy(()=>F(()=>import("./index-03d52345.js"),["assets/index-03d52345.js","assets/index-7731e15f.js","assets/index-3f17fe3b.css","assets/index-434f5d73.js","assets/index-22980c99.js","assets/react-toastify.esm-6d93bcb9.js","assets/react-toastify-b60658ac.css","assets/index-d252726d.js","assets/useSlotProps-8ec9e42a.js","assets/index-1b1d8084.js","assets/index.esm-02511f32.js","assets/InfoIcon-2db118f8.js","assets/index-78d021f1.js","assets/Popover-958d913e.js","assets/Select-e354efc2.js","assets/Popper-1d618f8f.js","assets/index-30d16895.js","assets/DeleteIcon-95769f03.js","assets/PlusIcon-433e8f93.js","assets/EditIcon-8e915371.js","assets/NoFilterResultIcon-544c95a6.js","assets/dividerClasses-9e5b09ff.js","assets/generateCategoricalChart-61090c9c.js","assets/index-727aee19.js","assets/CheckIcon-059dfb49.js"]).then(({SettingsModal:t})=>({default:t}))),fn=f.lazy(()=>F(()=>import("./index-32a24db8.js"),["assets/index-32a24db8.js","assets/index-7731e15f.js","assets/index-3f17fe3b.css","assets/react-toastify.esm-6d93bcb9.js","assets/react-toastify-b60658ac.css","assets/index-434f5d73.js","assets/index-22980c99.js","assets/index-2ed18c25.js","assets/index.esm-02511f32.js","assets/CheckIcon-059dfb49.js","assets/index-1b1d8084.js","assets/InfoIcon-2db118f8.js"]).then(({AddContentModal:t})=>({default:t}))),mn=f.lazy(()=>F(()=>import("./index-6ad7f469.js"),["assets/index-6ad7f469.js","assets/index-7731e15f.js","assets/index-3f17fe3b.css","assets/react-toastify.esm-6d93bcb9.js","assets/react-toastify-b60658ac.css","assets/index-434f5d73.js","assets/index-22980c99.js","assets/index-2ed18c25.js","assets/index.esm-02511f32.js","assets/CheckIcon-059dfb49.js","assets/index-1b1d8084.js","assets/InfoIcon-2db118f8.js","assets/index-30d16895.js","assets/index-78d021f1.js","assets/Popover-958d913e.js","assets/useSlotProps-8ec9e42a.js","assets/Select-e354efc2.js","assets/Popper-1d618f8f.js","assets/generateCategoricalChart-61090c9c.js","assets/NoFilterResultIcon-544c95a6.js","assets/dividerClasses-9e5b09ff.js","assets/index-d252726d.js","assets/index-727aee19.js","assets/PlusIcon-433e8f93.js"]).then(({AddItemModal:t})=>({default:t}))),gn=f.lazy(()=>F(()=>import("./index-5f524bfe.js"),["assets/index-5f524bfe.js","assets/index-7731e15f.js","assets/index-3f17fe3b.css","assets/index-434f5d73.js","assets/index-22980c99.js","assets/react-toastify.esm-6d93bcb9.js","assets/react-toastify-b60658ac.css","assets/generateCategoricalChart-61090c9c.js","assets/Popover-958d913e.js","assets/useSlotProps-8ec9e42a.js","assets/InfoIcon-2db118f8.js","assets/index.esm-02511f32.js","assets/NoFilterResultIcon-544c95a6.js","assets/dividerClasses-9e5b09ff.js","assets/index-d252726d.js","assets/index-727aee19.js","assets/index-1b1d8084.js","assets/index-78d021f1.js","assets/Select-e354efc2.js","assets/Popper-1d618f8f.js","assets/CheckIcon-059dfb49.js","assets/PlusIcon-433e8f93.js"]).then(({SourcesTableModal:t})=>({default:t}))),yn=f.lazy(()=>F(()=>import("./index-fa11e834.js"),["assets/index-fa11e834.js","assets/index-7731e15f.js","assets/index-3f17fe3b.css","assets/index-434f5d73.js","assets/index-22980c99.js","assets/react-toastify.esm-6d93bcb9.js","assets/react-toastify-b60658ac.css","assets/index-1b1d8084.js","assets/index.esm-02511f32.js","assets/InfoIcon-2db118f8.js","assets/Skeleton-dfd97bc9.js"]).then(({EditNodeNameModal:t})=>({default:t}))),jn=f.lazy(()=>F(()=>import("./index-357c9aff.js"),["assets/index-357c9aff.js","assets/index-7731e15f.js","assets/index-3f17fe3b.css","assets/index-434f5d73.js","assets/index-22980c99.js","assets/react-toastify.esm-6d93bcb9.js","assets/react-toastify-b60658ac.css","assets/Skeleton-dfd97bc9.js"]).then(({RemoveNodeModal:t})=>({default:t}))),bn=f.lazy(()=>F(()=>import("./index-bb7ec4fc.js"),["assets/index-bb7ec4fc.js","assets/index-7731e15f.js","assets/index-3f17fe3b.css","assets/index-434f5d73.js","assets/index-22980c99.js","assets/react-toastify.esm-6d93bcb9.js","assets/react-toastify-b60658ac.css","assets/index-78d021f1.js","assets/Popover-958d913e.js","assets/useSlotProps-8ec9e42a.js","assets/Select-e354efc2.js","assets/Popper-1d618f8f.js","assets/index-727aee19.js","assets/generateCategoricalChart-61090c9c.js","assets/InfoIcon-2db118f8.js","assets/index.esm-02511f32.js","assets/NoFilterResultIcon-544c95a6.js","assets/dividerClasses-9e5b09ff.js","assets/index-d252726d.js","assets/index-1b1d8084.js","assets/CheckIcon-059dfb49.js","assets/PlusIcon-433e8f93.js"]).then(({AddNodeEdgeModal:t})=>({default:t}))),Cn=()=>e.jsxs(e.Fragment,{children:[e.jsx(mn,{}),e.jsx(fn,{}),e.jsx(xn,{}),e.jsx(yn,{}),e.jsx(jn,{}),e.jsx(gn,{}),e.jsx(bn,{})]}),vn=()=>{const t=ne(r=>r.appMetaData);return t?e.jsxs(wn,{children:[e.jsxs(Sn,{children:[e.jsx(e.Fragment,{children:t.title&&e.jsx(S,{className:"title",color:"white",children:t.title})}),e.jsx(S,{className:"subtitle",children:" Second Brain"})]}),e.jsx(Wt,{})]}):null},wn=d(h).attrs({align:"center",direction:"row",grow:1,justify:"flex-start"})`
  height: 64px;
  position: absolute;
  top: 0px;
  left: 64px;
  right: 32px;
  transition: opacity 1s;
  z-index: 99;
  padding: 20px 23px;
`,Sn=d.div`
  ${Ft.smallOnly`
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
`,_n=()=>{const[t,r]=f.useState(!0),o=lr();f.useEffect(()=>{r(!0)},[o]);const n=()=>{r(!1)};return o&&t?e.jsxs(Tn,{align:"center",direction:"column",justify:"center",onClick:n,children:[e.jsx("img",{alt:"screen",src:"jamboard_kiosk.png"}),e.jsxs(h,{align:"center",direction:"column",justify:"center",children:[e.jsx(_e,{children:"Second Brain is currently"}),e.jsx(_e,{style:{fontWeight:600},children:"optimized for Desktop."}),e.jsx(_e,{children:"Mobile support coming soon."})]}),e.jsx(G,{color:"secondary",onClick:n,variant:"contained",children:"Got It"})]}):null},Tn=d(h)`
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
`,kn={},An=f.createContext(kn),Ln=()=>{const[t,r]=f.useState(!1),o=f.useMemo(()=>({isShow:t,setIsShow:r}),[t]);return e.jsx(An.Provider,{value:o})},v=d(Or)`
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
`,ve=d(Mr)`
  && {
    border-bottom: 1px solid ${p.black};
    position: sticky;
    top: 0;
    z-index: 1;
    background-color: ${p.BG1};
  }

  ${v} {
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
  &.selected {
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
`,$n=({data:t})=>{const r=re(a=>a.setQueuedSources),[o,n]=f.useState(""),i=async a=>{if(t!=null&&t.length)try{const s=await Vt.enable();await Ut(a,s.pubkey),r(t.filter(c=>c.ref_id!==a))}catch(s){console.warn(s)}},l=async a=>{if(!(!a||!(t!=null&&t.length))){n(a);try{await lt(a),r(t==null?void 0:t.filter(s=>s.ref_id!==a))}catch(s){console.warn(s)}finally{n("")}}};return t!=null&&t.length?e.jsxs(be,{component:"table",children:[e.jsx(ve,{children:e.jsxs(J,{component:"tr",children:[e.jsx(v,{className:"empty"}),e.jsx(v,{children:"Type"}),e.jsx(v,{children:"Source"}),e.jsx(v,{}),e.jsx(v,{className:"empty"})]})}),(t==null?void 0:t.length)&&e.jsx("tbody",{children:t==null?void 0:t.map(a=>e.jsxs(Ce,{children:[e.jsx(v,{className:"empty"}),e.jsx(v,{children:ee[a.source_type]}),e.jsx(v,{width:"268px",children:a.source_type==="twitter_handle"?e.jsxs(Qe,{href:`${jt}/${a.source}?open=system`,target:"_blank",children:["@",a.source]}):e.jsx(Qe,{href:`${a.source}?open=system`,target:"_blank",children:a.source})}),e.jsx(v,{className:"cell-center",children:e.jsxs(h,{direction:"row",justify:"space-between",children:[e.jsx("div",{className:"approve-wrapper",children:e.jsx(Xe,{className:"centered",onClick:()=>i(a.ref_id),children:e.jsx(Er,{color:p.primaryGreen,fontSize:24})})}),e.jsx("div",{className:"delete-wrapper",children:o===a.ref_id?e.jsx(I,{color:p.white,size:16}):e.jsx(yt,{message:"Are you sure ?",onConfirm:()=>l(a.ref_id),children:e.jsx(Xe,{className:"centered",children:e.jsx(Ir,{color:p.primaryRed,fontSize:24})})})})]})}),e.jsx(v,{className:"empty"})]},a.source))})]}):e.jsxs(h,{children:[e.jsx(S,{children:"There is not any results for selected filters"}),e.jsx(Ie,{})]})},Xe=d(h)`
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
`,Qe=d.a`
  color: ${p.white};
  text-decoration: underline;
  &:visited {
    color: ${p.white};
  }
  &:hover {
    cursor: pointer;
  }
`,En=()=>{const[t,r]=f.useState(!0),[o,n]=f.useState(""),[i,l]=re(c=>[c.queuedSources,c.setQueuedSources]);f.useEffect(()=>{(async()=>{r(!0);try{const u=await ct({approved:"False"});l(u.data)}catch(u){console.warn(u)}finally{r(!1)}})()},[l]);const a=c=>{n(o===c||!c?"":c)},s=i==null?void 0:i.filter(c=>!o||c.source_type===o);return e.jsxs(In,{align:"stretch",direction:"column",justify:"flex-end",children:[e.jsxs(we,{align:"flex-start",justify:"space-between",children:[e.jsx(S,{className:"title",children:"Queued Sources"}),e.jsx(S,{className:"subtitle",children:"This is a queue of pending sources waiting for approval or denial from graph users. If you think a source will provide good content for the graph, you can pay to approve it. Think of this as an investment: you pay to add it to the source table, and if the content is popular you will earn from it. If content is not relevant to the graph, you should deny it."})]}),e.jsxs(h,{className:"filters",direction:"row",pb:16,px:36,children:[e.jsx(ge,{className:X({selected:!o}),onClick:()=>a(""),size:"small",children:"All"}),Object.keys(ee).map(c=>e.jsx(ge,{className:X({selected:c===o}),onClick:()=>a(c),size:"small",children:ee[c]},c))]}),e.jsx(Pn,{align:"center",justify:t?"center":"flex-start",children:t?e.jsx(I,{color:p.white}):e.jsx($n,{data:s})})]})},In=d(h)`
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
`,Pn=d(h)`
  min-height: 0;
  overflow: auto;
  flex: 1;
  width: 100%;
`,Nn=({onSearch:t,placeholder:r,activeIcon:o,loadingIcon:n,defaultIcon:i,...l})=>{const[a,s]=f.useState(""),[c,u]=f.useState(!1),g=()=>{s(""),t(""),u(!1)},x=j=>{!j.target.value&&g(),s(j.target.value)},m=j=>{const{value:b}=j.currentTarget;s(b),!c&&(u(!0),setTimeout(()=>{t(b),b||g(),u(!1)},1e3),b||g())},y=()=>c?e.jsx(Je,{children:e.jsx(Te,{type:"button",children:n})}):e.jsx(Je,{children:a?e.jsx(Te,{onClick:g,type:"button",children:o}):e.jsx(Te,{type:"button",children:i})});return e.jsxs(Bn,{children:[e.jsx(On,{autoComplete:"off",autoCorrect:"off",inputProps:{"aria-label":"search sources"},onChange:x,onKeyDown:j=>{j.key==="Enter"&&m(j)},placeholder:r,value:a,...l}),y()]})},Je=d(h)`
  top: -50%;
  right: -3%;
  z-index: 3;
  position: absolute;
  transform: translate(-50%, 50%);
`,Te=d(V)`
  font-size: 24px;
`,Bn=d(De)`
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
`,On=d(Re)`
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
`,Mn=({data:t,canEdit:r=!1})=>{const o=re(s=>s.setSources),[n,i]=f.useState(""),l=async(s,c)=>{if(t!=null&&t.length)try{await Gt(s,c);const u=t==null?void 0:t.findIndex(x=>x.ref_id===s),g=[...t];g[u]={...g[u],source:c.source},o(g)}catch(u){console.warn(u)}},a=async s=>{if(!(!s||!(t!=null&&t.length))){i(s);try{await lt(s),o(t==null?void 0:t.filter(c=>c.ref_id!==s))}catch(c){console.warn(c)}finally{i("")}}};return t!=null&&t.length?e.jsxs(be,{"aria-label":"a dense table",component:"table",id:"sources-table",size:"small",children:[e.jsx(ve,{children:e.jsxs(J,{component:"tr",children:[e.jsx(v,{className:"empty"}),e.jsx(v,{children:"Type"}),e.jsx(v,{align:"left",children:"Source"}),r&&e.jsx(v,{align:"left"}),e.jsx(v,{className:"empty"})]})}),e.jsx(Dr,{component:"tbody",children:t==null?void 0:t.map(s=>e.jsxs(Ce,{children:[e.jsx(v,{className:"empty"}),e.jsx(v,{align:"left",children:ee[s.source_type]}),e.jsx(v,{align:"left",children:e.jsx(zn,{condition:r,wrapper:c=>e.jsx(Dn,{id:s.ref_id,onSave:u=>l(s.ref_id,{source:u,source_type:s.source_type}),value:s.source,children:c}),children:s.source_type===We||s.source_type===Ve||s.source_type===Ue?e.jsxs(e.Fragment,{children:[s.source_type===We&&e.jsxs(ke,{href:`${jt}/${s.source}`,target:"_blank",children:["@",s.source]}),s.source_type===Ve&&e.jsx(ke,{href:`${s.source}${s.source.includes("?")?"&":"?"}open=system`,target:"_blank",children:s.source}),s.source_type===Ue&&e.jsx(ke,{href:s.source,target:"_blank",children:s.source})]}):e.jsx("div",{children:s.source})})}),r&&e.jsx(v,{align:"left",children:e.jsx("div",{className:"delete-wrapper",id:`delete-${s.source}`,children:n===s.ref_id?e.jsx(I,{color:p.white}):e.jsx(yt,{message:"Are you sure ?",onConfirm:()=>a(s.ref_id),children:e.jsx(q,{className:"centered",children:e.jsx(Pr,{})})})})}),e.jsx(v,{className:"empty"})]},s.source))})]}):e.jsxs(Fn,{children:[e.jsx(zr,{}),e.jsx(S,{className:"text",children:"There is not any results for selected filters"})]})};function zn({condition:t,wrapper:r,children:o}){return t?r(o):o}const Dn=({value:t,onSave:r,id:o,children:n})=>{const[i,l]=f.useState(!1),[a,s]=f.useState(t),[c,u]=f.useState(!1),g=async()=>{if(o){u(!0);try{await r(a),l(!1)}catch(x){console.warn(x)}finally{u(!1)}}};return e.jsx("div",{children:i?e.jsxs(Rn,{direction:"row",children:[e.jsx(Gr,{className:"editable-cell__input",name:"cell-input",onChange:x=>s(x),value:a}),e.jsx(q,{align:"center",justify:"center",children:c?e.jsx(I,{}):e.jsx(Nr,{onClick:g})}),e.jsx(q,{align:"center",className:"secondary",justify:"center",onClick:()=>l(!1),children:e.jsx(gt,{})})]}):e.jsxs(Wn,{direction:"row",children:[n,e.jsx(q,{onClick:()=>l(!0),children:e.jsx(Br,{size:20})})]})})},Rn=d(h)`
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
  color: ${p.lightBlue500};
  &.centered {
    margin: 0 auto;
  }

  & + & {
    margin-left: 4px;
  }
`,Fn=d(h)`
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
`,Wn=d(h)`
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
`,Vn=()=>{const[t,r]=f.useState(!0),[o,n]=f.useState(""),[i,l]=re(x=>[x.sources,x.setSources]),[a]=de(x=>[x.isAdmin]),[s,c]=f.useState("");f.useEffect(()=>{(async()=>{r(!0);try{const m=await ct();l(m.data)}catch(m){console.warn(m)}finally{r(!1)}})()},[l]);const u=x=>{n(o===x||!x?"":x)},g=f.useMemo(()=>i==null?void 0:i.filter(x=>(!o||x.source_type===o)&&(x.source.toLowerCase().startsWith(s.toLowerCase())||x.source.toLowerCase().includes(s.toLowerCase()))),[s,o,i]);return e.jsxs(Un,{align:"stretch",direction:"column",justify:"flex-end",children:[e.jsx(we,{align:"center",direction:"row",justify:"space-between",children:e.jsx(S,{className:"title",children:"Sources for this Graph"})}),e.jsx(Hn,{children:e.jsx(Nn,{activeIcon:e.jsx(Q,{}),defaultIcon:e.jsx(Me,{}),loadingIcon:e.jsx(I,{color:p.PRIMARY_BLUE,size:24}),onSearch:c,placeholder:"Find Source"})}),e.jsxs(h,{className:"filters",direction:"row",pb:16,px:36,children:[e.jsx(ge,{className:X({selected:!o}),onClick:()=>u(""),size:"small",children:"All"}),Object.keys(ee).map(x=>e.jsx(ge,{className:X({selected:x===o}),onClick:()=>u(x),size:"small",children:ee[x]},x))]}),e.jsx(Gn,{align:"center",justify:t?"center":"flex-start",children:t?e.jsx(I,{color:p.white}):e.jsx(Mn,{canEdit:a,data:g})})]})},Un=d(h)`
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
`,Gn=d(h)`
  min-height: 0;
  overflow: auto;
  flex: 1;
  width: 100%;
`,Hn=d(h)`
  margin: 0 0 16px 36px;
`,Yn=({placeholder:t,activeIcon:r,loadingIcon:o,defaultIcon:n,...i})=>{const[l,a]=O(y=>[y.filters,y.setFilters]),[s,c]=f.useState(!1),u=()=>{a({search:""}),c(!1)},g=y=>{!y.target.value&&u(),a({search:y.target.value})},x=y=>{const{value:j}=y.currentTarget;a({search:j}),!s&&(c(!0),setTimeout(()=>{j||u(),c(!1)},1e3),j||u())},m=()=>s?e.jsx(et,{children:e.jsx(Ae,{type:"button",children:o})}):e.jsx(et,{children:l.search?e.jsx(Ae,{onClick:u,type:"button",children:r}):e.jsx(Ae,{type:"button",children:n})});return e.jsxs(Zn,{children:[e.jsx(Kn,{autoComplete:"off",autoCorrect:"off",inputProps:{"aria-label":"search sources"},onChange:g,onKeyDown:y=>{y.key==="Enter"&&x(y)},placeholder:t,value:l.search,...i}),m()]})},et=d(h)`
  top: -50%;
  right: -3%;
  z-index: 3;
  position: absolute;
  transform: translate(-50%, 50%);
`,Ae=d(V)`
  font-size: 24px;
`,Zn=d(De)`
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
`,Kn=d(Re)`
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
`,At=t=>e.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 6 10",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M6 5L6.90043e-08 9.33013L4.47556e-07 0.669872L6 5Z",fill:"currentColor"})}),Lt=t=>e.jsxs("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M4.5 6.04386L7.83333 2.83398V13.6673",stroke:"white","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}),e.jsx("path",{d:"M15.5 13.9581L12.1667 17.168L12.1667 6.33463",stroke:"white","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"})]}),$t=t=>e.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 10 10",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("circle",{cx:"5",cy:"5",r:"4.5",fill:"currentColor",stroke:"#6B7A8D"})}),qn=({selectedType:t,setSelectedType:r})=>{const[o,n]=f.useState([]);f.useEffect(()=>{(async()=>{try{const{data:s}=await Ht();n(s.edge_types)}catch(s){console.warn(s)}})()},[n]);const i=a=>({label:a,value:a}),l=a=>{r((a==null?void 0:a.value)||"")};return e.jsx(St,{onSelect:l,options:o.map(i),selectedValue:t?i(t):null})},wi={label:"Not Selected",value:"Not Selected"},Si={label:"No Parent",value:"No Parent"},_i=[{label:"number",value:"int"},{label:"string",value:"string"}],Xn=[{label:"Corporation",value:"Corporation"},{label:"Event",value:"Event"},{label:"Image",value:"Image"},{label:"Organization",value:"Organization"},{label:"Person",value:"Person"},{label:"Place",value:"Place"},{label:"Project",value:"Project"},{label:"Software",value:"Software"},{label:"Topic",value:"Topic"}],Qn=({onSelect:t,selectedValue:r})=>{const[o,n]=f.useState([]),[i,l]=f.useState(!1),a=async m=>{const y={is_muted:"False",sort_by:ze,search:m,skip:"0",limit:"1000"};l(!0);try{const j=await Yt(y.search);n(j.data)}catch{n([])}finally{l(!1)}},s=f.useMemo(()=>dt.debounce(a,300),[]),c=m=>{if(!m){n([]);return}m.length>2&&s(m)},u=m=>{const y=m?o.find(j=>j.ref_id===m.value):null;t(y||null)},g=m=>({label:m.search_value,value:m.ref_id,type:m.node_type}),x=m=>m.map(g);return r?e.jsxs(h,{align:"center",basis:"100%",direction:"row",grow:1,shrink:1,children:[e.jsx("span",{children:r.search_value}),e.jsx(V,{onClick:()=>t(null),size:"small",children:e.jsx(Q,{})})]}):e.jsx(St,{handleInputChange:c,isLoading:i,onSelect:u,options:x(o)||Xn,selectedValue:r?g(r):null})},Jn=({from:t,onSelect:r,selectedType:o,setSelectedType:n,isSwapped:i,setIsSwapped:l,selectedToNode:a})=>e.jsxs(h,{children:[e.jsx(h,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(h,{align:"center",direction:"row",children:e.jsx(eo,{children:"Add edge"})})}),e.jsxs(no,{swap:i,children:[e.jsx(h,{children:e.jsx(oo,{disabled:!0,label:i?"To":"From",swap:i,value:t})}),e.jsxs(h,{my:16,children:[e.jsx(ro,{children:"Type"}),e.jsx(qn,{selectedType:o,setSelectedType:n})]}),e.jsx(h,{children:e.jsxs(so,{children:[e.jsx(io,{children:i?"From":"To"}),e.jsx(Qn,{onSelect:r,selectedValue:a})]})}),e.jsxs(to,{children:[e.jsx(ao,{children:e.jsx($t,{})}),e.jsx(lo,{onClick:l,children:e.jsx(Lt,{})}),e.jsx(co,{children:e.jsx(At,{})})]})]})]}),eo=d(S)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,to=d.div`
  position: absolute;
  top: 26px;
  bottom: 26px;
  left: 4px;
  width: 35px;
  border-left: 1.5px solid #6b7a8d4d;
  border-top: 1.5px solid #6b7a8d4d;
  border-bottom: 1.5px solid #6b7a8d4d;
  border-radius: 12px 0 0 12px;
`,ro=d.label`
  background-color: #23252f;
  color: #bac1c6;
  font-size: 13px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0.01em;
  text-align: left;
`,no=d.div`
  position: relative;
  color: white;
  font-family: 'Barlow';
  display: flex;
  flex-direction: ${t=>t.swap?"column-reverse":"column"};
  margin-bottom: 10px;
  padding-left: 38px;
`,oo=d(_t)`
  position: relative;
  width: 250px;
  padding: 16px;
  gap: 10px;
  border-radius: 6px;
  border: 1px solid #6b7a8d4d;
  opacity: 0px;
  display: flex;
`,so=d.div`
  position: relative;
  width: 250px;
  padding: 15px;
  gap: 10px;
  border-radius: 6px;
  border: 1.4px solid #6b7a8d4d;
  opacity: 0px;
  display: flex;
  align-items: center;
`,io=d.label`
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
`,ao=d.div`
  position: absolute;
  top: 0;
  right: 0;
  transform: translateY(-50%) translateX(50%);
  color: #23252f;
`,lo=d.div`
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
`,co=d.div`
  position: absolute;
  bottom: 0;
  right: 0;
  transform: translateY(10px) translateX(3px);
  color: #6b7a8d;
  line-height: 1;
`,po=({topic:t,onClose:r})=>{const{close:o}=U("addEdge"),[n]=O(C=>[C.data]),i=pe({mode:"onChange"}),[l,a]=f.useState(!1),[s,c]=f.useState(!1),[u,g]=f.useState(""),[x,m]=f.useState(null),y=()=>{r(),o()},j=async()=>{if(!(!x||!n)){c(!0);try{await Zt({from:t.ref_id,to:x==null?void 0:x.ref_id,relationship:u});const{ref_id:C}=t,{ref_id:_}=x;if(n){const k={...n};k[C]={...k[C],edgeList:[...k[C].edgeList,u]},k[_]&&(k[_]={...k[_],edgeList:[...k[_].edgeList,u]}),O.setState({data:k})}y()}catch(C){console.warn(C)}finally{c(!1)}}},b=s||!x||!u;return e.jsx(Fe,{id:"addEdge",kind:"small",onClose:y,preventOutsideClose:!0,children:e.jsxs(he,{...i,children:[e.jsx(Jn,{from:t.name,isSwapped:l,onSelect:m,selectedToNode:x,selectedType:u,setIsSwapped:()=>a(!l),setSelectedType:g}),e.jsxs(G,{color:"secondary",disabled:b,onClick:j,size:"large",variant:"contained",children:["Confirm",s&&e.jsx(I,{color:p.BLUE_PRESS_STATE,size:10})]})]})})},ho=()=>e.jsxs(h,{children:[e.jsx(h,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(h,{align:"center",direction:"row",children:e.jsx(uo,{children:"Edit topic"})})}),e.jsx(h,{mb:12,children:e.jsx(le,{id:"cy-topic",maxLength:50,name:"name",placeholder:"Add your topic",rules:{...Kt}})})]}),uo=d(S)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,xo=({topic:t,onClose:r})=>{const{close:o}=U("editTopic"),[n]=O(y=>[y.data]),i=pe({mode:"onChange"}),{watch:l,setValue:a,reset:s}=i,[c,u]=f.useState(!1);f.useEffect(()=>(t&&a("name",t==null?void 0:t.name),()=>{s()}),[t,a,s]);const g=l("name"),x=()=>{r(),o()},m=async()=>{u(!0);try{if(await je((t==null?void 0:t.ref_id)||"",{name:g.trim()}),n){const y={...n};y[t==null?void 0:t.ref_id].name=g.trim(),O.setState({data:y})}x()}catch(y){console.warn(y)}finally{u(!1)}};return e.jsx(Fe,{id:"editTopic",kind:"regular",onClose:x,preventOutsideClose:!0,children:e.jsxs(he,{...i,children:[e.jsx(ho,{}),e.jsxs(G,{color:"secondary",disabled:c,onClick:m,size:"large",variant:"contained",children:["Save",c&&e.jsx(I,{color:p.BLUE_PRESS_STATE,size:10})]})]})})},fo=({onSelect:t,selectedTopic:r})=>{const[o,n]=f.useState(!1),[i,l]=f.useState(""),[a,s]=f.useState([]),[c,u]=f.useState(!1),g=f.useRef(null);f.useEffect(()=>()=>s([]),[s]);const x=async b=>{const C={is_muted:"False",sort_by:ze,search:b,skip:"0",limit:"1000"};u(!0);try{const _=await qt(C);s(_.data)}catch{s([])}finally{u(!1)}},m=f.useMemo(()=>dt.debounce(x,300),[]),y=b=>{t(b)},j=b=>{if(l(b),!b){s([]);return}b.length>2&&m(b)};return r?e.jsxs(yo,{children:[e.jsx("div",{className:"value",children:r.name}),e.jsx(h,{className:"icon",onClick:()=>t(null),children:e.jsx(Q,{})})]}):e.jsxs(e.Fragment,{children:[e.jsxs(De,{ref:g,component:"form",onSubmit:b=>b.preventDefault(),sx:{p:"2px 4px",display:"flex",alignItems:"center",width:200},children:[e.jsx(Re,{inputProps:{"aria-label":"search topic"},onChange:b=>j(b.target.value),onFocus:()=>n(!0),placeholder:"Search",size:"small",sx:{ml:1,flex:1},value:i}),i&&e.jsxs(e.Fragment,{children:[e.jsx(tt,{"aria-label":"search",onClick:()=>j(""),type:"button",children:e.jsx(Q,{})}),e.jsx(Rr,{orientation:"vertical",sx:{height:28,m:.5}})]}),e.jsx(tt,{"aria-label":"search",type:"button",children:c?e.jsx(I,{color:p.white,size:24}):e.jsx(Me,{})})]}),g.current&&a.length?e.jsx(go,{anchorEl:g.current,open:o,placement:"bottom",children:e.jsx(e.Fragment,{children:a.map(b=>e.jsx(mo,{className:X({active:r===b.ref_id}),onClick:()=>y(b),children:b.name},"option"))})}):null]})},mo=d(h).attrs({direction:"row",align:"center"})`
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
`,go=d(Zr)`
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
`,yo=d(h).attrs({direction:"row",justify:"flex-start",align:"center"})`
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
`,tt=d(V)`
  font-size: 24px;
`,jo=({from:t,onSelect:r,selectedTopic:o,isSwapped:n,setIsSwapped:i})=>e.jsxs(h,{children:[e.jsx(h,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(h,{align:"center",direction:"row",children:e.jsx(bo,{children:"Merge topic"})})}),e.jsxs(wo,{swap:n,children:[e.jsx(Co,{children:e.jsx(So,{disabled:!0,label:n?"To":"From",swap:n,value:t})}),e.jsxs(h,{my:16,children:[e.jsx(To,{children:"Type"}),e.jsx(S,{children:"IS AlIAS"})]}),e.jsx(h,{children:e.jsxs(_o,{children:[e.jsx(ko,{children:n?"From":"To"}),e.jsx(fo,{onSelect:r,selectedTopic:o})]})}),e.jsxs(vo,{children:[e.jsx(Ao,{children:e.jsx($t,{})}),e.jsx(Lo,{onClick:i,children:e.jsx(Lt,{})}),e.jsx($o,{children:e.jsx(At,{})})]})]})]}),bo=d(S)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,Co=d(h)`
  flex: 1 1 100%;
`,vo=d.div`
  position: absolute;
  top: 26px;
  bottom: 26px;
  left: 4px;
  width: 35px;
  border-left: 1.5px solid #6b7a8d4d;
  border-top: 1.5px solid #6b7a8d4d;
  border-bottom: 1.5px solid #6b7a8d4d;
  border-radius: 12px 0 0 12px;
`,wo=d.div`
  position: relative;
  color: white;
  font-family: 'Barlow';
  display: flex;
  flex-direction: ${t=>t.swap?"column-reverse":"column"};
  margin-bottom: 10px;
  padding-left: 38px;
`,So=d(_t)`
  position: relative;
  width: 250px;
  padding: 16px;
  gap: 10px;
  border-radius: 6px;
  border: 1px solid #6b7a8d4d;
  opacity: 0px;
  display: flex;
`,_o=d.div`
  position: relative;
  width: 250px;
  padding: 15px;
  gap: 10px;
  border-radius: 6px;
  border: 1.4px solid #6b7a8d4d;
  opacity: 0px;
  display: flex;
  align-items: center;
`,To=d.label`
  background-color: #23252f;
  color: #bac1c6;
  font-size: 13px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0.01em;
  text-align: left;
`,ko=d.label`
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
`,Ao=d.div`
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
`,$o=d.div`
  position: absolute;
  bottom: 0;
  right: 0;
  transform: translateY(10px) translateX(3px);
  color: #6b7a8d;
  line-height: 1;
`,Eo=({topic:t,onClose:r})=>{const{close:o}=U("mergeTopic"),[n,i,l]=O(L=>[L.data,L.ids,L.total]),a=pe({mode:"onChange"}),{watch:s,setValue:c,reset:u}=a,[g,x]=f.useState(!1),[m,y]=f.useState(!1),[j,b]=f.useState(null);f.useEffect(()=>(t&&c("name",t==null?void 0:t.name),()=>{u()}),[t,c,u]);const C=s("name"),_=()=>{r(),o()},k=async()=>{if(!(!j||!n)){x(!0);try{await Xt({from:t.ref_id,to:j==null?void 0:j.ref_id});const{ref_id:L}=t;if(n[L]={...n[L],edgeList:[Fr],edgeCount:n[L].edgeCount-1},O.setState({ids:i.filter(E=>E!==j.ref_id),total:l-1}),n){const E={...n};E[t==null?void 0:t.ref_id].name=C.trim(),O.setState({data:E})}_()}catch(L){console.warn(L)}finally{x(!1)}}};return e.jsx(Fe,{id:"mergeTopic",kind:"small",onClose:_,preventOutsideClose:!0,children:e.jsxs(he,{...a,children:[e.jsx(jo,{from:t.name,isSwapped:m,onSelect:b,selectedTopic:j,setIsSwapped:()=>y(!m)}),e.jsxs(G,{color:"secondary",disabled:g,onClick:k,size:"large",variant:"contained",children:["Merge topics",g&&e.jsx(I,{color:p.BLUE_PRESS_STATE,size:10})]})]})})},Io=t=>e.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M7.37516 8.625V11.3334C7.37516 11.5104 7.43508 11.6589 7.55491 11.7786C7.67476 11.8984 7.82326 11.9583 8.00041 11.9583C8.17758 11.9583 8.32599 11.8984 8.44564 11.7786C8.5653 11.6589 8.62512 11.5104 8.62512 11.3334V8.625H11.3335C11.5106 8.625 11.659 8.56508 11.7788 8.44525C11.8986 8.3254 11.9585 8.1769 11.9585 7.99975C11.9585 7.82258 11.8986 7.67417 11.7788 7.55452C11.659 7.43487 11.5106 7.37504 11.3335 7.37504H8.62512V4.66669C8.62512 4.4896 8.56521 4.34117 8.44537 4.22137C8.32553 4.1016 8.17702 4.04171 7.99987 4.04171C7.82271 4.04171 7.6743 4.1016 7.55464 4.22137C7.43499 4.34117 7.37516 4.4896 7.37516 4.66669V7.37504H4.66681C4.48973 7.37504 4.3413 7.43496 4.22152 7.55479C4.10173 7.67464 4.04183 7.82314 4.04183 8.00029C4.04183 8.17746 4.10173 8.32587 4.22152 8.44552C4.3413 8.56517 4.48973 8.625 4.66681 8.625H7.37516ZM8.00154 15.9167C6.90659 15.9167 5.8774 15.7089 4.91395 15.2933C3.9505 14.8778 3.11243 14.3138 2.39975 13.6015C1.68705 12.8891 1.12284 12.0514 0.7071 11.0884C0.291364 10.1253 0.0834961 9.09636 0.0834961 8.00142C0.0834961 6.90647 0.291274 5.87728 0.70683 4.91383C1.12239 3.95037 1.68634 3.11231 2.3987 2.39963C3.11108 1.68693 3.94878 1.12272 4.91181 0.706979C5.87482 0.291243 6.9038 0.083374 7.99875 0.083374C9.09369 0.083374 10.1229 0.291153 11.0863 0.706708C12.0498 1.12226 12.8879 1.68622 13.6005 2.39858C14.3132 3.11096 14.8774 3.94866 15.2932 4.91169C15.7089 5.8747 15.9168 6.90368 15.9168 7.99863C15.9168 9.09357 15.709 10.1228 15.2935 11.0862C14.8779 12.0497 14.3139 12.8877 13.6016 13.6004C12.8892 14.3131 12.0515 14.8773 11.0885 15.2931C10.1255 15.7088 9.09648 15.9167 8.00154 15.9167ZM8.00014 14.6667C9.86125 14.6667 11.4376 14.0209 12.7293 12.7292C14.021 11.4375 14.6668 9.86113 14.6668 8.00002C14.6668 6.13891 14.021 4.56252 12.7293 3.27085C11.4376 1.97919 9.86125 1.33335 8.00014 1.33335C6.13903 1.33335 4.56264 1.97919 3.27098 3.27085C1.97931 4.56252 1.33348 6.13891 1.33348 8.00002C1.33348 9.86113 1.97931 11.4375 3.27098 12.7292C4.56264 14.0209 6.13903 14.6667 8.00014 14.6667Z",fill:"currentColor"})}),Po=t=>e.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 12 12",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M10.1765 0.310088L4.72809 5.70971C4.63832 5.79868 4.56637 5.90372 4.51607 6.01926L3.74627 7.78746C3.63822 8.03565 3.89191 8.28707 4.14234 8.17999L5.92651 7.41707C6.04309 7.36722 6.14907 7.29592 6.23885 7.20695L11.6872 1.80733C12.1044 1.39388 12.1044 0.723539 11.6872 0.310088C11.27 -0.103363 10.5936 -0.103363 10.1765 0.310088ZM9.80835 7.14088C9.80835 6.81895 10.072 6.55777 10.3969 6.55777C10.723 6.55777 10.9854 6.82017 10.9854 7.14088L10.9191 10.2508C10.9191 11.2153 10.1489 12.0001 9.17571 12.0001H1.74343C0.79227 12.0001 0 11.2153 0 10.2289V2.84292C0 1.89999 0.79227 1.11523 1.74343 1.11523L5.29651 1.11548C5.62264 1.11548 5.88501 1.37666 5.88501 1.69858C5.88501 2.0205 5.62141 2.28168 5.29651 2.28168H1.7655C1.44134 2.28168 1.177 2.54335 1.177 2.86479V10.2508C1.177 10.5722 1.44134 10.8339 1.7655 10.8339H9.21985C9.54402 10.8339 9.80835 10.5722 9.80835 10.2508V7.14088Z",fill:"currentColor"})}),No=t=>e.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 12 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M1.33317 15.5L0.166504 14.3333L4.18734 10.2917C4.50678 9.97222 4.74984 9.61111 4.9165 9.20833C5.08317 8.80556 5.1665 8.38194 5.1665 7.9375L5.1665 3.6875L3.83317 5L2.6665 3.83333L5.99984 0.5L9.33317 3.83333L8.1665 5L6.83317 3.6875L6.83317 7.9375C6.83317 8.38194 6.9165 8.80556 7.08317 9.20833C7.24984 9.61111 7.49289 9.97222 7.81234 10.2917L11.8332 14.3333L10.6665 15.5L5.99984 10.8333L1.33317 15.5Z",fill:"currentColor"})}),Le=t=>e.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 12 8",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M0.333496 7.66704V6.66706H3.91681V7.66704H0.333496ZM0.333496 4.50037V3.50041H7.7886V4.50037H0.333496ZM0.333496 1.33372V0.33374H11.6668V1.33372H0.333496Z",fill:"currentColor"})}),rt=t=>e.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 16 15",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M14.0716 15L10.8994 11.7764C10.437 11.9597 9.96181 12.0919 9.47381 12.1732C8.98581 12.2545 8.49002 12.2952 7.98643 12.2952C6.33597 12.2952 4.82448 11.8457 3.45194 10.9466C2.07941 10.0476 0.991584 8.86271 0.188459 7.39193C0.123124 7.27666 0.0753836 7.15933 0.045238 7.03994C0.0150793 6.92055 0 6.7991 0 6.67559C0 6.55208 0.0163338 6.42935 0.0490013 6.30739C0.0816688 6.18543 0.13067 6.06938 0.196005 5.95925C0.508607 5.42714 0.84081 4.91226 1.19261 4.41462C1.54443 3.91699 1.95353 3.47673 2.41992 3.09386L0.24877 0.846015L1.07501 0L14.8978 14.154L14.0716 15ZM7.98643 9.94854C8.16032 9.94854 8.32642 9.93799 8.48473 9.91689C8.64305 9.89579 8.7976 9.84973 8.94838 9.77871L4.95591 5.69059C4.89158 5.84498 4.84786 6.00324 4.82475 6.16535C4.80162 6.32745 4.79005 6.49753 4.79005 6.67559C4.79005 7.58645 5.10039 8.35966 5.72108 8.99521C6.34176 9.63076 7.09688 9.94854 7.98643 9.94854ZM13.4384 10.3561L10.9792 7.85816C11.0456 7.66673 11.0961 7.47375 11.1308 7.27922C11.1655 7.0847 11.1828 6.88349 11.1828 6.67559C11.1828 5.76473 10.8725 4.99152 10.2518 4.35597C9.63109 3.72042 8.87598 3.40264 7.98643 3.40264C7.78339 3.40264 7.58689 3.42168 7.39692 3.45976C7.20694 3.49784 7.02099 3.56011 6.83907 3.64657L4.87751 1.64575C5.37606 1.44402 5.88441 1.29529 6.40257 1.19957C6.92071 1.10385 7.44867 1.05599 7.98643 1.05599C9.64191 1.05599 11.1604 1.50756 12.542 2.41072C13.9236 3.31387 15.0134 4.50598 15.8115 5.98705C15.8718 6.08894 15.9183 6.19829 15.951 6.31511C15.9837 6.43192 16 6.55208 16 6.67559C16 6.7991 15.9857 6.91926 15.957 7.03607C15.9284 7.15289 15.8839 7.26225 15.8236 7.36414C15.52 7.94669 15.1738 8.49038 14.7848 8.99521C14.3958 9.50005 13.947 9.95369 13.4384 10.3561ZM10.0912 6.95657L7.73162 4.54816C8.06131 4.48126 8.38246 4.50545 8.69506 4.62072C9.00767 4.736 9.27754 4.9156 9.5047 5.15952C9.7369 5.40036 9.90451 5.67723 10.0075 5.99012C10.1106 6.30301 10.1385 6.62516 10.0912 6.95657Z",fill:"currentColor"})}),nt=t=>e.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 18 13",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M9.00204 9.98073C9.94628 9.98073 10.7483 9.65024 11.408 8.98927C12.0677 8.32829 12.3976 7.52567 12.3976 6.58142C12.3976 5.63718 12.0671 4.8352 11.4061 4.17548C10.7451 3.51576 9.9425 3.1859 8.99825 3.1859C8.05401 3.1859 7.25203 3.51638 6.59231 4.17735C5.93259 4.83834 5.60273 5.64096 5.60273 6.58521C5.60273 7.52944 5.93321 8.33142 6.59419 8.99115C7.25517 9.65087 8.05779 9.98073 9.00204 9.98073ZM9.00014 8.83331C8.37514 8.83331 7.84389 8.61456 7.40639 8.17706C6.96889 7.73956 6.75014 7.20831 6.75014 6.58331C6.75014 5.95831 6.96889 5.42706 7.40639 4.98956C7.84389 4.55206 8.37514 4.33331 9.00014 4.33331C9.62514 4.33331 10.1564 4.55206 10.5939 4.98956C11.0314 5.42706 11.2501 5.95831 11.2501 6.58331C11.2501 7.20831 11.0314 7.73956 10.5939 8.17706C10.1564 8.61456 9.62514 8.83331 9.00014 8.83331ZM9.00129 12.4166C7.08494 12.4166 5.33884 11.888 3.76298 10.8309C2.18713 9.77374 1.02688 8.35788 0.282227 6.58331C1.02688 4.80874 2.18675 3.39288 3.76185 2.33573C5.33694 1.27858 7.08265 0.75 8.999 0.75C10.9153 0.75 12.6614 1.27858 14.2373 2.33573C15.8132 3.39288 16.9734 4.80874 17.7181 6.58331C16.9734 8.35788 15.8135 9.77374 14.2384 10.8309C12.6634 11.888 10.9176 12.4166 9.00129 12.4166Z",fill:"currentColor"})}),Bo=t=>e.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:e.jsxs("g",{opacity:"0.4",children:[e.jsx("mask",{id:"mask0_5162_13105",maskUnits:"userSpaceOnUse",x:"0",y:"0",width:"24",height:"24",children:e.jsx("rect",{width:"1em",height:"1em",fill:"currentColor"})}),e.jsx("g",{mask:"url(#mask0_5162_13105)",children:e.jsx("path",{d:"M19.7615 21.8691L15.7154 17.8537C15.1256 18.0819 14.5195 18.2467 13.8971 18.348C13.2747 18.4493 12.6423 18.4999 12 18.4999C9.89486 18.4999 7.96698 17.94 6.21635 16.8201C4.46572 15.7002 3.07822 14.2243 2.05385 12.3922C1.97052 12.2486 1.90963 12.1025 1.87118 11.9538C1.83271 11.8051 1.81348 11.6538 1.81348 11.4999C1.81348 11.3461 1.83431 11.1932 1.87598 11.0413C1.91764 10.8894 1.98014 10.7448 2.06348 10.6076C2.46219 9.9448 2.88591 9.30345 3.33463 8.68357C3.78336 8.0637 4.30516 7.51531 4.90003 7.0384L2.13078 4.2384L3.18463 3.18457L20.8153 20.8153L19.7615 21.8691ZM12 15.5768C12.2218 15.5768 12.4336 15.5637 12.6356 15.5374C12.8375 15.5111 13.0346 15.4537 13.2269 15.3653L8.13463 10.273C8.05258 10.4653 7.99681 10.6624 7.96733 10.8643C7.93783 11.0663 7.92308 11.2781 7.92308 11.4999C7.92308 12.6345 8.31891 13.5977 9.11058 14.3893C9.90224 15.181 10.8654 15.5768 12 15.5768ZM18.9538 16.0845L15.8173 12.973C15.9019 12.7345 15.9663 12.4941 16.0105 12.2518C16.0548 12.0095 16.0769 11.7589 16.0769 11.4999C16.0769 10.3653 15.681 9.40219 14.8894 8.61052C14.0977 7.81885 13.1346 7.42302 12 7.42302C11.741 7.42302 11.4904 7.44674 11.2481 7.49417C11.0058 7.5416 10.7686 7.61917 10.5366 7.72687L8.03463 5.23457C8.67051 4.98329 9.3189 4.79803 9.9798 4.6788C10.6407 4.55956 11.3141 4.49995 12 4.49995C14.1115 4.49995 16.0484 5.06245 17.8105 6.18745C19.5727 7.31245 20.9628 8.79738 21.9807 10.6422C22.0576 10.7692 22.1169 10.9054 22.1586 11.0509C22.2003 11.1964 22.2211 11.3461 22.2211 11.4999C22.2211 11.6538 22.2028 11.8034 22.1663 11.9489C22.1297 12.0945 22.073 12.2307 21.9961 12.3576C21.6089 13.0832 21.1673 13.7605 20.6711 14.3893C20.175 15.0182 19.6025 15.5832 18.9538 16.0845ZM14.6846 11.8499L11.675 8.84992C12.0955 8.76659 12.5051 8.79671 12.9038 8.9403C13.3025 9.0839 13.6468 9.30761 13.9365 9.61145C14.2327 9.91145 14.4465 10.2563 14.5779 10.6461C14.7093 11.0358 14.7449 11.4371 14.6846 11.8499Z",fill:"currentColor"})})]})}),Oo=t=>e.jsxs("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("mask",{id:"mask0_5162_13106",maskUnits:"userSpaceOnUse",x:"0",y:"0",width:"24",height:"24",children:e.jsx("rect",{width:"1em",height:"1em",fill:"currentColor"})}),e.jsx("g",{mask:"url(#mask0_5162_13106)",children:e.jsx("path",{d:"M12.0023 15.5769C13.1354 15.5769 14.0978 15.1803 14.8895 14.3871C15.6811 13.5939 16.077 12.6308 16.077 11.4977C16.077 10.3646 15.6804 9.40224 14.8872 8.61058C14.094 7.81891 13.1309 7.42308 11.9978 7.42308C10.8647 7.42308 9.90234 7.81966 9.11067 8.61282C8.31901 9.40601 7.92317 10.3692 7.92317 11.5023C7.92317 12.6353 8.31976 13.5977 9.11293 14.3894C9.90611 15.181 10.8692 15.5769 12.0023 15.5769ZM12.0001 14.2C11.2501 14.2 10.6126 13.9375 10.0876 13.4125C9.56258 12.8875 9.30007 12.25 9.30007 11.5C9.30007 10.75 9.56258 10.1125 10.0876 9.58748C10.6126 9.06248 11.2501 8.79998 12.0001 8.79998C12.7501 8.79998 13.3876 9.06248 13.9126 9.58748C14.4376 10.1125 14.7001 10.75 14.7001 11.5C14.7001 12.25 14.4376 12.8875 13.9126 13.4125C13.3876 13.9375 12.7501 14.2 12.0001 14.2ZM12.0014 18.5C9.70183 18.5 7.60651 17.8657 5.71547 16.5971C3.82446 15.3285 2.43216 13.6295 1.53857 11.5C2.43216 9.37049 3.82401 7.67146 5.71412 6.40288C7.60422 5.13429 9.69908 4.5 11.9987 4.5C14.2983 4.5 16.3936 5.13429 18.2847 6.40288C20.1757 7.67146 21.568 9.37049 22.4616 11.5C21.568 13.6295 20.1761 15.3285 18.286 16.5971C16.3959 17.8657 14.3011 18.5 12.0014 18.5Z",fill:"currentColor"})})]}),Mo=t=>e.jsxs("svg",{width:"1em",height:"1em",viewBox:"0 0 22 22",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("mask",{id:"mask0_5577_416",maskUnits:"userSpaceOnUse",x:"0",y:"0",width:"22",height:"22",children:e.jsx("rect",{width:"1em",height:"1em",fill:"currentColor"})}),e.jsx("g",{mask:"url(#mask0_5577_416)",children:e.jsx("path",{d:"M11 17.6634C10.6219 17.6634 10.2982 17.5287 10.0289 17.2595C9.75964 16.9902 9.625 16.6665 9.625 16.2884C9.625 15.9103 9.75964 15.5866 10.0289 15.3173C10.2982 15.0481 10.6219 14.9134 11 14.9134C11.3781 14.9134 11.7018 15.0481 11.971 15.3173C12.2403 15.5866 12.375 15.9103 12.375 16.2884C12.375 16.6665 12.2403 16.9902 11.971 17.2595C11.7018 17.5287 11.3781 17.6634 11 17.6634ZM11 12.3749C10.6219 12.3749 10.2982 12.2403 10.0289 11.971C9.75964 11.7018 9.625 11.3781 9.625 11C9.625 10.6218 9.75964 10.2982 10.0289 10.0289C10.2982 9.75962 10.6219 9.62498 11 9.62498C11.3781 9.62498 11.7018 9.75962 11.971 10.0289C12.2403 10.2982 12.375 10.6218 12.375 11C12.375 11.3781 12.2403 11.7018 11.971 11.971C11.7018 12.2403 11.3781 12.3749 11 12.3749ZM11 7.08648C10.6219 7.08648 10.2982 6.95184 10.0289 6.68257C9.75964 6.41332 9.625 6.08963 9.625 5.7115C9.625 5.33339 9.75964 5.0097 10.0289 4.74043C10.2982 4.47118 10.6219 4.33655 11 4.33655C11.3781 4.33655 11.7018 4.47118 11.971 4.74043C12.2403 5.0097 12.375 5.33339 12.375 5.7115C12.375 6.08963 12.2403 6.41332 11.971 6.68257C11.7018 6.95184 11.3781 7.08648 11 7.08648Z",fill:"currentColor"})})]}),zo=({topic:t,onClick:r,onSearch:o,checkedStates:n,setCheckedStates:i})=>{const[l,a]=O(A=>[A.ids,A.total]),[s,c]=f.useState(!1),u=Pe(t.date_added_to_graph),g=async(A,w)=>{c(!0);try{await je(A,{is_muted:w}),O.setState({ids:l.filter(T=>T!==A),total:a-1})}catch(T){console.warn(T)}},x=A=>{i(w=>({...w,[A]:!w[A]}))},m=(A,w)=>{var T;(T=window.getSelection())!=null&&T.toString()?A.preventDefault():o(w.name)},y=t.edgeList.slice(0,1),j=t.edgeList.length-y.length,[b,C]=N.useState(null),_=A=>{C(A.currentTarget)},k=()=>{C(null)},L=!!b,E=n[t.ref_id]?"visible":"";return e.jsxs(Ce,{className:n[t.ref_id]?"checked":"",children:[e.jsx(v,{children:e.jsx(Fo,{className:`checkbox-section ${E}`,onClick:()=>x(t.ref_id),children:e.jsx(Wo,{checked:n[t.ref_id],children:e.jsx(Vo,{children:n[t.ref_id]&&e.jsx(Tt,{})})})})}),e.jsx(v,{onClick:A=>m(A,t),children:e.jsx(Ro,{children:t.name})}),e.jsx(v,{children:t.node_type}),e.jsx(v,{children:t.edgeCount}),e.jsxs(v,{children:[e.jsx(wt,{anchorEl:b,anchorOrigin:{vertical:"top",horizontal:"center"},disableRestoreFocus:!0,id:"mouse-over-popover",onClose:k,open:L,sx:{pointerEvents:"none","& .MuiPaper-root":{backgroundColor:"rgba(0, 0, 0, 0.9)",borderRadius:"4px",width:"160px"}},transformOrigin:{vertical:"bottom",horizontal:"center"},children:e.jsx(qe,{sx:{p:1.5,fontSize:"13px",fontWeight:400,lineHeight:"1.8",wordWrap:"break-word"},children:t.edgeList.join(", ")})}),y.join(", "),j>0&&e.jsx(qe,{"aria-haspopup":"true","aria-owns":L?"mouse-over-popover":void 0,component:"span",onMouseEnter:_,onMouseLeave:k,sx:{cursor:"context-menu"},children:",..."})]}),e.jsx(v,{children:e.jsx("span",{children:u})}),e.jsx(v,{className:"cell-center",children:e.jsx(h,{direction:"row",justify:"space-between",children:e.jsx("div",{className:"approve-wrapper",children:s?e.jsx(Do,{children:e.jsx(I,{color:p.white,size:16})}):e.jsxs(h,{direction:"row",children:[t.is_muted?e.jsx(V,{className:"centered",onClick:()=>g(t.ref_id,!1),children:e.jsx(Oo,{})}):e.jsx(V,{className:"centered",onClick:()=>g(t.ref_id,!0),children:e.jsx(Bo,{})}),e.jsx(V,{onClick:A=>r(A,t.ref_id),children:e.jsx(Mo,{"data-testid":"ThreeDotsIcons"})})]})})})})]},t.name)},Do=d.span`
  margin-left: 12px;
`,Ro=d.span`
  cursor: pointer;
  :hover {
    text-decoration: underline;
  }
`,Fo=d.td`
  visibility: hidden;
  cursor: pointer;
  display: flex;
  align-items: center;

  &.visible {
    visibility: visible;
  }
`,Wo=d.div`
  width: 14px;
  height: 14px;
  border-radius: 4px;
  border: ${({checked:t})=>t?"#618AFF":"2px solid #CCCCCC"};
  background-color: ${({checked:t})=>t?"#618AFF":"transparent"};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 12px;
`,Vo=d.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 2px;
  background-color: transparent;
`,Uo=f.memo(zo),Go=({setShowMuteUnmute:t,showMuted:r,onTopicEdit:o,onChangeFilter:n,checkedStates:i,setCheckedStates:l})=>{const{close:a}=U("sourcesTable"),[s,c]=f.useState(!1),[u,g]=N.useState(null),[x,m]=N.useState(""),y=Object.values(i).filter($=>$).length,[j,b]=ne($=>[$.setSearchFormValue,$.setCurrentSearch]),[C,_,k]=O($=>[$.data,$.ids,$.total]),L=f.useCallback(($,z)=>{g($.currentTarget),m(z)},[]),E=()=>{g(null)},A=$=>{j($),b($),a()},w=$=>{o(x,$),E()},T=$=>{n($)},P=!!u,R=P?"simple-popover":void 0,H=async()=>{c(!0);const $=[];try{Object.keys(i).forEach(z=>{if(i[z]){const oe=je(z,{is_muted:r});O.setState({ids:_.filter(Y=>Y!==z),total:k-1}),$.push(oe)}}),await Promise.all($),c(!1)}catch(z){console.error("Error:",z),c(!1)}};return C?e.jsx(e.Fragment,{children:Object.keys(C).length?e.jsx(es,{align:"center",justify:s?"center":"flex-start",children:s?e.jsx(I,{color:p.white}):e.jsxs(e.Fragment,{children:[e.jsxs(be,{component:"table",children:[e.jsx(ve,{children:e.jsxs(J,{component:"tr",children:[e.jsx(v,{className:"empty"}),e.jsx(v,{children:e.jsxs($e,{onClick:()=>T(ze),children:["Name ",e.jsx(Le,{})]})}),e.jsx(v,{children:"Type"}),e.jsx(v,{children:e.jsxs($e,{onClick:()=>T(Wr),children:["Count ",e.jsx(Le,{})]})}),e.jsx(v,{children:"Edge list"}),e.jsx(v,{children:e.jsxs($e,{onClick:()=>T(Vr),children:["Date ",e.jsx(Le,{})]})}),e.jsx(v,{children:e.jsx(h,{px:8,children:e.jsxs(Ho,{onClick:t,children:[e.jsx(Yo,{checked:r,children:e.jsx(Zo,{children:r&&e.jsx(Tt,{})})}),"Muted"]})})})]})}),y>0&&e.jsxs(J,{component:"tr",children:[e.jsx(v,{children:e.jsx(V,{onClick:()=>l({}),children:e.jsx(Q,{})})}),e.jsx(v,{children:e.jsxs(Jo,{children:[e.jsxs(Qo,{children:[e.jsx(qo,{children:y}),"selected"]}),e.jsx(Xo,{onClick:H,role:"button",children:r?e.jsxs(e.Fragment,{children:[e.jsx(nt,{})," Unmute All"]}):e.jsxs(e.Fragment,{children:[e.jsx(rt,{})," Mute All"]})})]})})]}),C&&e.jsx("tbody",{children:_==null?void 0:_.map($=>e.jsx(Uo,{checkedStates:i,onClick:L,onSearch:A,setCheckedStates:l,topic:C[$]},$))})]}),x?e.jsxs(Ko,{anchorEl:u,anchorOrigin:{vertical:"bottom",horizontal:"right"},id:R,onClose:E,open:P,transformOrigin:{vertical:"top",horizontal:"right"},children:[r?e.jsxs(ae,{onClick:()=>w("unMute"),children:[" ",e.jsx(nt,{"data-testid":""})," Unmute"]}):e.jsxs(ae,{onClick:()=>w("mute"),children:[" ",e.jsx(rt,{"data-testid":"VisibilityOff"})," Mute"]}),e.jsxs(ae,{onClick:()=>w("editTopic"),children:[e.jsx(Po,{"data-testid":"EditTopicIcon"})," Rename"]}),e.jsxs(ae,{onClick:()=>w("mergeTopic"),children:[e.jsx(No,{"data-testid":"MergeIcon"})," Merge"]}),e.jsxs(ae,{onClick:()=>w("addEdge"),children:[e.jsx(Io,{"data-testid":"AddCircleIcon"})," Add edge"]})]}):null]})}):e.jsxs(h,{children:[e.jsx(S,{children:"There is not any results for selected filters"}),e.jsx(Ie,{})]})}):e.jsxs(h,{children:[e.jsx(S,{children:"There is not any results for selected filters"}),e.jsx(Ie,{})]})},Ho=d.td`
  cursor: pointer;
  display: flex;
  align-items: center;
`,Yo=d.div`
  width: 14px;
  height: 14px;
  border-radius: 4px;
  border: ${({checked:t})=>t?"#618AFF":"2px solid #CCCCCC"};
  background-color: ${({checked:t})=>t?"#618AFF":"transparent"};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 8px;
`,Zo=d.div`
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
`,Ko=d(wt)`
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
`,qo=d.span`
  font-family: Barlow;
  font-size: 13px;
  font-weight: 500;
  margin-right: 3px;
`,Xo=d.div`
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
`,Qo=d.div`
  display: flex;
  align-items: center;
  gap: 2px;
`,Jo=d.span`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,es=d(h)`
  min-height: 0;
  overflow: auto;
  flex: 1;
  width: 100%;
`,ts=()=>{const[t,r]=f.useState(!1),[o,n,i,l,a,s,c]=O(T=>[T.data,T.ids,T.total,T.setTopics,T.filters,T.setFilters,T.terminate]),{open:u}=U("editTopic"),{open:g}=U("mergeTopic"),{open:x}=U("addEdge"),[m,y]=f.useState(null),[j,b]=f.useState({}),C={editTopic:u,mergeTopic:g,addEdge:x},_=f.useRef([]);f.useEffect(()=>{n.length&&(_.current=n)},[n]),f.useEffect(()=>{(async()=>{try{r(!0),await l()}catch{console.error("err")}finally{r(!1)}})()},[l,a]);const k=async()=>{try{r(!0),s({page:a.page+1})}catch(T){console.error("Error loading more data:",T)}finally{r(!1)}};f.useEffect(()=>()=>{c()},[c]);const L=T=>{s({sortBy:T})},E=()=>{y(null)},A=async(T,P)=>{try{await je(T,{is_muted:P==="mute"}),O.setState({ids:n.filter(R=>R!==T),total:i-1})}catch(R){console.warn(R)}},w=async(T,P)=>{o&&(y(o[T]),["mute","unMute"].includes(P)&&await A(T,P),typeof C[P]=="function"&&C[P]())};return e.jsxs(e.Fragment,{children:[e.jsxs(rs,{direction:"column",justify:"flex-end",children:[e.jsx(we,{align:"flex-start",direction:"row",justify:"space-between",children:e.jsx(S,{className:"title",children:"Topics"})}),e.jsx(os,{children:e.jsx(Yn,{activeIcon:e.jsx(Q,{}),defaultIcon:e.jsx(Me,{}),loadingIcon:e.jsx(I,{color:p.PRIMARY_BLUE,size:24}),placeholder:"Search ..."})}),e.jsx(ns,{align:"center",justify:t&&!o?"center":"flex-start",children:t&&!o?e.jsx(I,{color:p.white}):e.jsxs(e.Fragment,{children:[e.jsx(Go,{checkedStates:j,onChangeFilter:L,onTopicEdit:w,setCheckedStates:b,setShowMuteUnmute:()=>s({is_muted:!a.is_muted}),showMuted:a.is_muted}),i>n.length?e.jsxs(G,{className:"load-more",disabled:t,onClick:k,children:["Load more",t&&e.jsx(I,{color:p.BLUE_PRESS_STATE,size:10})]}):null]})})]}),m&&e.jsx(Eo,{onClose:E,topic:m}),m&&e.jsx(xo,{onClose:E,topic:m}),m&&e.jsx(po,{onClose:E,topic:m})]})},rs=d(h)`
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
`,ns=d(h)`
  min-height: 0;
  overflow: auto;
  flex: 1;
  width: 100%;
`,os=d(h)`
  margin: 0 0 16px 36px;
`;function ss(t){return t.charAt(0).toUpperCase()+t.slice(1).toLowerCase()}const is=({node:t})=>{var r,o,n,i,l,a,s,c,u;return e.jsxs(Ce,{children:[e.jsx(v,{className:"empty"}),e.jsx(v,{children:(r=t==null?void 0:t.properties)!=null&&r.date_added_to_graph?Pe((o=t==null?void 0:t.properties)==null?void 0:o.date_added_to_graph):Pe((n=t==null?void 0:t.properties)==null?void 0:n.date)}),e.jsx(v,{children:t==null?void 0:t.node_type}),e.jsx(v,{children:(t==null?void 0:t.node_type)==="Tweet"?e.jsx(ot,{href:`${Ze}${(i=t==null?void 0:t.properties)==null?void 0:i.tweet_id}${Ze.includes("?")?"&":"?"}open=system`,target:"_blank",children:(l=t==null?void 0:t.properties)==null?void 0:l.tweet_id}):e.jsx(ot,{href:`${(a=t==null?void 0:t.properties)==null?void 0:a.source_link}${((s=t==null?void 0:t.properties)==null?void 0:s.source_link).includes("?")?"&":"?"}open=system`,target:"_blank",children:(c=t==null?void 0:t.properties)==null?void 0:c.source_link})}),e.jsx(v,{children:(u=t==null?void 0:t.properties)!=null&&u.status?ss(t.properties.status):"Processing"})]})},ot=d.a`
  color: ${p.white};
  text-decoration: underline;
  &:visited {
    color: ${p.white};
  }
`,as=f.memo(is),ls=({nodes:t})=>{const{open:r}=U("addContent"),o=async()=>{r()};return!t||(t==null?void 0:t.length)===0?e.jsx(e.Fragment,{children:e.jsxs(cs,{children:[e.jsx(ds,{align:"center",direction:"row",justify:"space-between",children:e.jsx(S,{className:"subtitle",children:"Contribute to the graph by adding content."})}),e.jsx(h,{children:e.jsx(G,{color:"secondary",onClick:o,size:"medium",startIcon:e.jsx(Kr,{}),type:"submit",variant:"contained",children:"Add Content"})})]})}):e.jsxs(be,{component:"table",children:[e.jsx(ve,{children:e.jsxs(J,{component:"tr",children:[e.jsx(v,{className:"empty"}),e.jsx(v,{children:"Date"}),e.jsx(v,{children:"Type"}),e.jsx(v,{children:"Source"}),e.jsx(v,{children:"Status"})]})}),e.jsx("tbody",{children:t==null?void 0:t.map(n=>e.jsx(as,{node:n},n==null?void 0:n.ref_id))})]})},cs=Oe(h)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 100px auto;
  width: 100%;
`,ds=Oe(h)`
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
`,ps=()=>{const[t,r]=f.useState([]),[o,n]=f.useState(!0),[i,l]=f.useState(10),[a,s]=f.useState(!0),c={only_content:"true",sort_by:"date",limit:i.toString()},u=async()=>{n(!0);try{const x=await Qt(c);r(x.nodes),n(!1)}catch(x){console.error("Error fetching data:",x),n(!1)}};f.useEffect(()=>{u()},[i]);const g=()=>{l(i+10),u()};return e.jsxs(hs,{direction:"column",justify:"flex-end",children:[e.jsx(we,{align:"center",direction:"row",justify:"space-between",children:e.jsx(S,{className:"title",children:"Content I've added to the graph"})}),e.jsxs(us,{align:"center",justify:o?"center":"flex-start",children:[o?e.jsx(I,{color:p.white}):e.jsx(e.Fragment,{children:e.jsx(ls,{nodes:t})}),o?null:a?e.jsx(G,{onClick:g,size:"medium",children:"Load More"}):e.jsx(xs,{children:"No new nodes available"})]})]})},hs=d(h)`
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
`,us=d(h)`
  min-height: 0;
  overflow: auto;
  flex: 1;
  width: 100%;
`,xs=d.div`
  margin-top: 10px;
  color: ${p.GRAY3};
  font-family: Barlow;
  font-size: 14px;
`,fs=[{label:vt,component:ps},{label:Ur,component:Vn},{label:Ct,component:En},{label:bt,component:ts}],ms=t=>{const{children:r,value:o,index:n,...i}=t;return o===n?e.jsx(Cs,{"aria-labelledby":`simple-tab-${n}`,hidden:o!==n,id:`simple-tabpanel-${n}`,role:"tabpanel",...i,children:r}):null};function gs(t){return{id:`simple-tab-${t}`,"aria-controls":`simple-tabpanel-${t}`}}const ys=()=>{const[t,r]=f.useState(0),[o]=de(s=>[s.isAdmin]),[n]=Jt(s=>[s.queuedSourcesFlag]),i=er(),l=(s,c)=>{r(c)},a=fs.filter(({label:s})=>s===bt?o:s===Ct?o&&n:s===vt?i:!0);return e.jsxs(vs,{direction:"column",children:[e.jsx(js,{"aria-label":"sources tabs",onChange:l,value:t,children:a.map((s,c)=>e.jsx(bs,{color:p.white,disableRipple:!0,label:s.label,...gs(c)},s.label))}),a.map((s,c)=>e.jsx(ms,{index:c,value:t,children:e.jsx(s.component,{})},s.label))]})},js=d(qr)`
  && {
    background: rgba(0, 0, 0, 0.2);
    border-radius: 9px 9px 0 0;
    .MuiTabs-indicator {
      background: ${p.primaryBlue};
    }
  }
`,bs=d(Xr)`
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
`,Cs=d(h)`
  display: flex;
  flex: 1;
  min-height: 572px;
  padding: 20px 0;
  max-height: 572px;
`,vs=d(h)`
  min-height: 0;
  flex: 1;
`,fe={required:{message:"The field is required",value:!0}},ws=({initialValues:t})=>{const r=pe({defaultValues:t,mode:"onSubmit"}),{isSubmitting:o}=r.formState,n=r.handleSubmit(async i=>{try{await tr(i)}catch(l){console.warn(l)}});return e.jsx(he,{...r,children:e.jsx("form",{id:"add-node-form",onSubmit:n,children:e.jsxs(e.Fragment,{children:[e.jsxs(h,{children:[e.jsx(h,{pt:12,children:e.jsx(le,{id:"cy-about-title-id",label:"Graph Title",maxLength:50,name:"title",placeholder:"Type graph title here...",rules:{...fe}})}),e.jsx(h,{pt:12,children:e.jsx(le,{id:"cy-about-id",label:"Graph Description",maxLength:50,name:"description",placeholder:"Type graph description here...",rules:{...fe}})}),e.jsx(h,{pt:12,children:e.jsx(le,{id:"cy-about-mission_statement-id",label:"Mission Statement",maxLength:50,name:"mission_statement",placeholder:"Type mission statement here...",rules:{...fe}})}),e.jsx(h,{pt:12,children:e.jsx(le,{id:"cy-about-search_term-id",label:"Search Term",maxLength:50,name:"search_term",placeholder:"Type search term here...",rules:{...fe}})})]}),e.jsx(h,{pt:8,children:o?e.jsx(Ss,{children:e.jsx(I,{color:p.white,size:20})}):e.jsx(kt,{disabled:o,id:"add-node-submit-cta",kind:"big",type:"submit",children:"Save changes"})})]})})})},Ss=d(h).attrs({align:"center",background:"primaryButton",borderRadius:8,justify:"center"})`
  padding: 16px 24px;
  opacity: 0.5;
`,_s=({initialValues:t})=>e.jsxs(e.Fragment,{children:[t.title&&e.jsxs(h,{pt:12,children:[e.jsx(S,{kind:"regular",children:"Graph Title"}),e.jsx(h,{pt:12,children:e.jsx(S,{className:"value",kind:"medium",children:t.title})})]}),t.description&&e.jsxs(h,{pt:12,children:[e.jsx(S,{kind:"regular",children:"Graph Description"}),e.jsx(h,{pt:12,children:e.jsx(S,{className:"value",kind:"medium",children:t.description})})]}),t.mission_statement&&e.jsxs(h,{pt:12,children:[e.jsx(S,{kind:"regular",children:"Mission Statement"}),e.jsx(h,{pt:12,children:e.jsx(S,{className:"value",kind:"medium",children:t.mission_statement})})]})]}),Ts=()=>{const[t]=de(o=>[o.isAdmin]),r=ne(o=>o.appMetaData);return r?e.jsxs(ks,{align:"stretch",direction:"column",justify:"flex-end",children:[e.jsx(Ls,{align:"center",direction:"row",justify:"space-between",children:e.jsx(S,{className:"title",children:"About"})}),e.jsx(As,{align:"stretch",justify:"flex-start",children:t?e.jsx(ws,{initialValues:r}):e.jsx(_s,{initialValues:r})})]}):null},ks=d(h)`
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
`,As=d(h)`
  min-height: 0;
  overflow: auto;
  flex: 1;
  width: 100%;
`,Ls=d(h)`
  margin-bottom: 16px;
  ${S} {
    margin-bottom: 0;
  }
`;var $s=["type","layout","connectNulls","ref"];function te(t){"@babel/helpers - typeof";return te=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},te(t)}function Es(t,r){if(t==null)return{};var o=Is(t,r),n,i;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(i=0;i<l.length;i++)n=l[i],!(r.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}function Is(t,r){if(t==null)return{};var o={},n=Object.keys(t),i,l;for(l=0;l<n.length;l++)i=n[l],!(r.indexOf(i)>=0)&&(o[i]=t[i]);return o}function ce(){return ce=Object.assign?Object.assign.bind():function(t){for(var r=1;r<arguments.length;r++){var o=arguments[r];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n])}return t},ce.apply(this,arguments)}function st(t,r){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);r&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),o.push.apply(o,n)}return o}function M(t){for(var r=1;r<arguments.length;r++){var o=arguments[r]!=null?arguments[r]:{};r%2?st(Object(o),!0).forEach(function(n){D(t,n,o[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):st(Object(o)).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(o,n))})}return t}function K(t){return Os(t)||Bs(t)||Ns(t)||Ps()}function Ps(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ns(t,r){if(t){if(typeof t=="string")return Ne(t,r);var o=Object.prototype.toString.call(t).slice(8,-1);if(o==="Object"&&t.constructor&&(o=t.constructor.name),o==="Map"||o==="Set")return Array.from(t);if(o==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return Ne(t,r)}}function Bs(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Os(t){if(Array.isArray(t))return Ne(t)}function Ne(t,r){(r==null||r>t.length)&&(r=t.length);for(var o=0,n=new Array(r);o<r;o++)n[o]=t[o];return n}function Ms(t,r){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")}function it(t,r){for(var o=0;o<r.length;o++){var n=r[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,Et(n.key),n)}}function zs(t,r,o){return r&&it(t.prototype,r),o&&it(t,o),Object.defineProperty(t,"prototype",{writable:!1}),t}function Ds(t,r){if(typeof r!="function"&&r!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(r&&r.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),r&&Be(t,r)}function Be(t,r){return Be=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,i){return n.__proto__=i,n},Be(t,r)}function Rs(t){var r=Ws();return function(){var n=ye(t),i;if(r){var l=ye(this).constructor;i=Reflect.construct(n,arguments,l)}else i=n.apply(this,arguments);return Fs(this,i)}}function Fs(t,r){if(r&&(te(r)==="object"||typeof r=="function"))return r;if(r!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return W(t)}function W(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function Ws(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function ye(t){return ye=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(o){return o.__proto__||Object.getPrototypeOf(o)},ye(t)}function D(t,r,o){return r=Et(r),r in t?Object.defineProperty(t,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[r]=o,t}function Et(t){var r=Vs(t,"string");return te(r)==="symbol"?r:String(r)}function Vs(t,r){if(te(t)!=="object"||t===null)return t;var o=t[Symbol.toPrimitive];if(o!==void 0){var n=o.call(t,r||"default");if(te(n)!=="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(t)}var ue=function(t){Ds(o,t);var r=Rs(o);function o(){var n;Ms(this,o);for(var i=arguments.length,l=new Array(i),a=0;a<i;a++)l[a]=arguments[a];return n=r.call.apply(r,[this].concat(l)),D(W(n),"state",{isAnimationFinished:!0,totalLength:0}),D(W(n),"generateSimpleStrokeDasharray",function(s,c){return"".concat(c,"px ").concat(s-c,"px")}),D(W(n),"getStrokeDasharray",function(s,c,u){var g=u.reduce(function(k,L){return k+L});if(!g)return n.generateSimpleStrokeDasharray(c,s);for(var x=Math.floor(s/g),m=s%g,y=c-s,j=[],b=0,C=0;b<u.length;C+=u[b],++b)if(C+u[b]>m){j=[].concat(K(u.slice(0,b)),[m-C]);break}var _=j.length%2===0?[0,y]:[y];return[].concat(K(o.repeat(u,x)),K(j),_).map(function(k){return"".concat(k,"px")}).join(", ")}),D(W(n),"id",fr("recharts-line-")),D(W(n),"pathRef",function(s){n.mainCurve=s}),D(W(n),"handleAnimationEnd",function(){n.setState({isAnimationFinished:!0}),n.props.onAnimationEnd&&n.props.onAnimationEnd()}),D(W(n),"handleAnimationStart",function(){n.setState({isAnimationFinished:!1}),n.props.onAnimationStart&&n.props.onAnimationStart()}),n}return zs(o,[{key:"componentDidMount",value:function(){if(this.props.isAnimationActive){var i=this.getTotalLength();this.setState({totalLength:i})}}},{key:"componentDidUpdate",value:function(){if(this.props.isAnimationActive){var i=this.getTotalLength();i!==this.state.totalLength&&this.setState({totalLength:i})}}},{key:"getTotalLength",value:function(){var i=this.mainCurve;try{return i&&i.getTotalLength&&i.getTotalLength()||0}catch{return 0}}},{key:"renderErrorBar",value:function(i,l){if(this.props.isAnimationActive&&!this.state.isAnimationFinished)return null;var a=this.props,s=a.points,c=a.xAxis,u=a.yAxis,g=a.layout,x=a.children,m=mr(x,gr);if(!m)return null;var y=function(C,_){return{x:C.x,y:C.y,value:C.value,errorVal:xt(C.payload,_)}},j={clipPath:i?"url(#clipPath-".concat(l,")"):null};return N.createElement(Se,j,m.map(function(b){return N.cloneElement(b,{key:"bar-".concat(b.props.dataKey),data:s,xAxis:c,yAxis:u,layout:g,dataPointFormatter:y})}))}},{key:"renderDots",value:function(i,l,a){var s=this.props.isAnimationActive;if(s&&!this.state.isAnimationFinished)return null;var c=this.props,u=c.dot,g=c.points,x=c.dataKey,m=xe(this.props),y=xe(u,!0),j=g.map(function(C,_){var k=M(M(M({key:"dot-".concat(_),r:3},m),y),{},{value:C.value,dataKey:x,cx:C.x,cy:C.y,index:_,payload:C.payload});return o.renderDotItem(u,k)}),b={clipPath:i?"url(#clipPath-".concat(l?"":"dots-").concat(a,")"):null};return N.createElement(Se,ce({className:"recharts-line-dots",key:"dots"},b),j)}},{key:"renderCurveStatically",value:function(i,l,a,s){var c=this.props,u=c.type,g=c.layout,x=c.connectNulls;c.ref;var m=Es(c,$s),y=M(M(M({},xe(m,!0)),{},{fill:"none",className:"recharts-line-curve",clipPath:l?"url(#clipPath-".concat(a,")"):null,points:i},s),{},{type:u,layout:g,connectNulls:x});return N.createElement(yr,ce({},y,{pathRef:this.pathRef}))}},{key:"renderCurveWithAnimation",value:function(i,l){var a=this,s=this.props,c=s.points,u=s.strokeDasharray,g=s.isAnimationActive,x=s.animationBegin,m=s.animationDuration,y=s.animationEasing,j=s.animationId,b=s.animateNewValues,C=s.width,_=s.height,k=this.state,L=k.prevPoints,E=k.totalLength;return N.createElement(jr,{begin:x,duration:m,isActive:g,easing:y,from:{t:0},to:{t:1},key:"line-".concat(j),onAnimationEnd:this.handleAnimationEnd,onAnimationStart:this.handleAnimationStart},function(A){var w=A.t;if(L){var T=L.length/c.length,P=c.map(function(B,oe){var Y=Math.floor(oe*T);if(L[Y]){var se=L[Y],Z=ie(se.x,B.x),It=ie(se.y,B.y);return M(M({},B),{},{x:Z(w),y:It(w)})}if(b){var Pt=ie(C*2,B.x),Nt=ie(_/2,B.y);return M(M({},B),{},{x:Pt(w),y:Nt(w)})}return M(M({},B),{},{x:B.x,y:B.y})});return a.renderCurveStatically(P,i,l)}var R=ie(0,E),H=R(w),$;if(u){var z="".concat(u).split(/[,\s]+/gim).map(function(B){return parseFloat(B)});$=a.getStrokeDasharray(H,E,z)}else $=a.generateSimpleStrokeDasharray(E,H);return a.renderCurveStatically(c,i,l,{strokeDasharray:$})})}},{key:"renderCurve",value:function(i,l){var a=this.props,s=a.points,c=a.isAnimationActive,u=this.state,g=u.prevPoints,x=u.totalLength;return c&&s&&s.length&&(!g&&x>0||!br(g,s))?this.renderCurveWithAnimation(i,l):this.renderCurveStatically(s,i,l)}},{key:"render",value:function(){var i,l=this.props,a=l.hide,s=l.dot,c=l.points,u=l.className,g=l.xAxis,x=l.yAxis,m=l.top,y=l.left,j=l.width,b=l.height,C=l.isAnimationActive,_=l.id;if(a||!c||!c.length)return null;var k=this.state.isAnimationFinished,L=c.length===1,E=He("recharts-line",u),A=g&&g.allowDataOverflow,w=x&&x.allowDataOverflow,T=A||w,P=Ee(_)?this.id:_,R=(i=xe(s))!==null&&i!==void 0?i:{r:3,strokeWidth:2},H=R.r,$=H===void 0?3:H,z=R.strokeWidth,B=z===void 0?2:z,oe=Cr(s)?s:{},Y=oe.clipDot,se=Y===void 0?!0:Y,Z=$*2+B;return N.createElement(Se,{className:E},A||w?N.createElement("defs",null,N.createElement("clipPath",{id:"clipPath-".concat(P)},N.createElement("rect",{x:A?y:y-j/2,y:w?m:m-b/2,width:A?j:j*2,height:w?b:b*2})),!se&&N.createElement("clipPath",{id:"clipPath-dots-".concat(P)},N.createElement("rect",{x:y-Z/2,y:m-Z/2,width:j+Z,height:b+Z}))):null,!L&&this.renderCurve(T,P),this.renderErrorBar(T,P),(L||s)&&this.renderDots(T,se,P),(!C||k)&&vr.renderCallByParent(this.props,c))}}],[{key:"getDerivedStateFromProps",value:function(i,l){return i.animationId!==l.prevAnimationId?{prevAnimationId:i.animationId,curPoints:i.points,prevPoints:l.curPoints}:i.points!==l.curPoints?{curPoints:i.points}:null}},{key:"repeat",value:function(i,l){for(var a=i.length%2!==0?[].concat(K(i),[0]):i,s=[],c=0;c<l;++c)s=[].concat(K(s),K(a));return s}},{key:"renderDotItem",value:function(i,l){var a;if(N.isValidElement(i))a=N.cloneElement(i,l);else if(rr(i))a=i(l);else{var s=He("recharts-line-dot",i?i.className:"");a=N.createElement(ut,ce({},l,{className:s}))}return a}}]),o}(f.PureComponent);D(ue,"displayName","Line");D(ue,"defaultProps",{xAxisId:0,yAxisId:0,connectNulls:!1,activeDot:!0,dot:!0,legendType:"line",stroke:"#3182bd",strokeWidth:1,fill:"#fff",points:[],isAnimationActive:!xr.isSsr,animateNewValues:!0,animationBegin:0,animationDuration:1500,animationEasing:"ease",hide:!1,label:!1});D(ue,"getComposedData",function(t){var r=t.props,o=t.xAxis,n=t.yAxis,i=t.xAxisTicks,l=t.yAxisTicks,a=t.dataKey,s=t.bandSize,c=t.displayedData,u=t.offset,g=r.layout,x=c.map(function(m,y){var j=xt(m,a);return g==="horizontal"?{x:Ye({axis:o,ticks:i,bandSize:s,entry:m,index:y}),y:Ee(j)?null:n.scale(j),value:j,payload:m}:{x:Ee(j)?null:o.scale(j),y:Ye({axis:n,ticks:l,bandSize:s,entry:m,index:y}),value:j,payload:m}});return M({points:x,layout:g},u)});var Us=wr({chartName:"LineChart",GraphicalChild:ue,axisComponents:[{axisType:"xAxis",AxisComp:ft},{axisType:"yAxis",AxisComp:mt}],formatAxisMap:Sr});const Gs=({cx:t,cy:r})=>e.jsx(ut,{cx:t,cy:r,fill:p.blueTextAccent,r:2}),Hs=({data:t,width:r=500,height:o=300})=>e.jsx(e.Fragment,{children:(t==null?void 0:t.length)&&e.jsxs(Us,{data:t,height:o,id:"cy-sentiment-chart",margin:{bottom:5,left:-20,right:30,top:5},width:r,children:[e.jsx(_r,{stroke:p.lightBlue300,strokeDasharray:"5 5"}),e.jsx(ft,{dataKey:"date",interval:Math.floor(t.length/3),stroke:p.blueTextAccent}),e.jsx(mt,{domain:[0,10],stroke:p.blueTextAccent}),e.jsx(Tr,{}),e.jsx(ue,{dataKey:"score",dot:e.jsx(Gs,{}),stroke:"#8884d8",type:"monotone"})]})}),Ys=()=>{const[t,r]=f.useState(void 0),[o]=de(a=>[a.setBudget]),[n,i]=f.useState(!1),l=async()=>{i(!0),nr(o).then(async a=>{r(a==null?void 0:a.data.filter(s=>s.date).map(s=>({date:or.unix(Number(String(s.date).split(".")[0])).format("MM/DD/YY"),score:s.sentiment_score}))),await pt(o)}).catch().finally(()=>{i(!1)})};return e.jsxs(Zs,{align:"flex-start",direction:"column",id:"cy-sentiment-chart-wrapper",justify:"flex-end",children:[e.jsx(S,{className:"title",children:"Sentiment chart"}),n&&e.jsx(Yr,{alignItems:"center",component:"div",flexGrow:1,p:4,spacing:2,width:"100%",children:e.jsx(kr,{color:p.white})}),!(t!=null&&t.length)&&e.jsx(Ks,{className:"button",id:"cy-get-sentiments-btn",onClick:l,children:"Get top 100 sentiments"}),e.jsx(Hs,{data:t})]})},Zs=d(h)`
  border-radius: 8px;
  box-shadow: 0px 5px 6px rgb(0 0 0 / 50%);
  padding: 16px;

  .title {
    margin-bottom: 16px;
    font-size: 20px;
  }
`,Ks=d(kt)`
  height: 48px;
`,qs=600,Xs={about:e.jsx(Ts,{}),sentiment:e.jsx(Ys,{}),sources:e.jsx(ys,{}),"":null},Qs=()=>{const[t,r]=ne(o=>[o.secondarySidebarActiveTab,o.setSecondarySidebarActiveTab]);return e.jsx(Ar,{direction:"left",in:!!t,mountOnEnter:!0,unmountOnExit:!0,children:e.jsxs(Js,{id:"secondary-sidebar-wrapper",children:[e.jsx(ei,{id:"cy-close-secondary-sidebar",onClick:()=>r(""),children:e.jsx(gt,{})}),Xs[t]]})})},Js=d(h)(({theme:t})=>({background:p.BG1,height:"100vh",padding:"16px 20px",width:"100%",zIndex:30,display:"flex",[t.breakpoints.up("sm")]:{width:qs}})),ei=d(h).attrs({align:"center",justify:"center",p:5})`
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
`,ti=d(cr)`
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
`,ri=d(h)`
  height: 100%;
  width: 100%;
  background-color: ${p.black};
`,ni=d(h)`
  position: absolute;
  bottom: 8px;
  left: 8px;
  color: ${p.white};
  font-size: 12px;
  opacity: 0.5;
`,oi=f.lazy(()=>F(()=>import("./index-e0dc951e.js"),["assets/index-e0dc951e.js","assets/index-7731e15f.js","assets/index-3f17fe3b.css","assets/SourcesTableIcon-1dc54990.js","assets/SettingsIcon-bf4fc400.js","assets/index-22980c99.js"]).then(({MainToolbar:t})=>({default:t}))),si=f.lazy(()=>F(()=>import("./index-f345e70c.js"),["assets/index-f345e70c.js","assets/index-7731e15f.js","assets/index-3f17fe3b.css","assets/index-02b3398b.js","assets/react-toastify.esm-6d93bcb9.js","assets/react-toastify-b60658ac.css","assets/generateCategoricalChart-61090c9c.js","assets/Popover-958d913e.js","assets/useSlotProps-8ec9e42a.js","assets/InfoIcon-2db118f8.js","assets/index-f73ac1c8.js","assets/index.esm-02511f32.js","assets/EditIcon-8e915371.js","assets/PlusIcon-433e8f93.js","assets/index-22980c99.js","assets/NoFilterResultIcon-544c95a6.js","assets/dividerClasses-9e5b09ff.js","assets/index-d252726d.js","assets/index-727aee19.js","assets/index-1b1d8084.js","assets/index-434f5d73.js","assets/index-78d021f1.js","assets/Select-e354efc2.js","assets/Popper-1d618f8f.js","assets/CheckIcon-059dfb49.js"]).then(({Universe:t})=>({default:t}))),ii=f.lazy(()=>F(()=>import("./index-24b50eae.js"),["assets/index-24b50eae.js","assets/index-7731e15f.js","assets/index-3f17fe3b.css","assets/react-toastify.esm-6d93bcb9.js","assets/react-toastify-b60658ac.css","assets/CheckIcon-059dfb49.js","assets/ChevronDownIcon-10be06d3.js","assets/ChevronUpIcon-a2ff8bfb.js","assets/Popover-958d913e.js","assets/useSlotProps-8ec9e42a.js","assets/ChevronRightIcon-25d051e1.js","assets/Select-e354efc2.js","assets/dividerClasses-9e5b09ff.js","assets/generateCategoricalChart-61090c9c.js","assets/InfoIcon-2db118f8.js","assets/index.esm-02511f32.js","assets/ChevronRightIcon-6125620a.css","assets/index-2d8eb18b.js","assets/index-f73ac1c8.js","assets/Skeleton-dfd97bc9.js","assets/PlusIcon-433e8f93.js","assets/index-22980c99.js","assets/index-434f5d73.js"]).then(({SideBar:t})=>({default:t}))),ai=()=>{const[t,r]=de(w=>[w.setBudget,w.setNodeCount]),[o,n]=f.useState(!1),{setSidebarOpen:i,currentSearch:l,setCurrentSearch:a,setRelevanceSelected:s,setTranscriptOpen:c}=ne(w=>w),u=Lr(w=>w.setTeachMeAnswer),{data:g,setData:x,fetchData:m,graphStyle:y,setSelectedNode:j,setCategoryFilter:b}=re(w=>w),C=dr(),_=pe({mode:"onChange"}),k=_.handleSubmit(({search:w})=>{c(!1),j(null),s(!1),a(w),u(""),b(null)}),L=f.useCallback(async()=>{await m(t,{...l?{word:l}:{}}),i(!0),l?await pt(t):j(null)},[m,t,l,i,j]);f.useEffect(()=>{L()},[l,L]);const E=()=>{if(g){n(!0);const w=ir(y,g.nodes);x(w),n(!1)}};f.useEffect(()=>{E()},[y]);const A=f.useCallback(()=>{r("INCREMENT")},[r]);return f.useEffect(()=>(C&&(C.connect(),C.on("connect_error",w=>{console.error("Socket connection error:",w)}),C.on("newnode",A)),()=>{C&&C.off()}),[C,A]),e.jsxs(e.Fragment,{children:[e.jsx(pr,{}),e.jsx(_n,{}),e.jsx(hr,{hidden:!sr}),e.jsx(f.Suspense,{fallback:e.jsx("div",{children:"Loading..."}),children:e.jsxs(ri,{direction:"row",children:[e.jsx($r,{children:e.jsxs(he,{..._,children:[e.jsx(oi,{}),e.jsx(ii,{onSubmit:k}),e.jsx(si,{}),o&&e.jsx(hn,{fullSize:!1}),e.jsx(dn,{}),e.jsx(Qs,{}),e.jsx(vn,{}),e.jsxs(ni,{children:["v",ur]}),e.jsx(ht,{})]})}),e.jsx(Cn,{}),e.jsx(ti,{}),e.jsx(Ln,{})]})})]})},Ti=Object.freeze(Object.defineProperty({__proto__:null,App:ai},Symbol.toStringTag,{value:"Module"}));export{At as A,Po as E,Lt as F,Si as N,dn as O,hn as P,Ce as S,_i as a,v as b,ve as c,Xn as d,ys as e,$t as f,Ti as g,wi as i};
