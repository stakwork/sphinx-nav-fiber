import{c as lt,_ as fe,r as x,u as zt,a as Dt,j as e,F as h,T as S,s as g,b as c,d as I,m as It,e as Bt,f as We,Y as Ve,R as Ge,g as se,l as ct,h as Ot,i as E,k as Mt,n as Rt,o as Ft,P as Wt,p as Vt,q as dt,t as Gt}from"./index-8a12d07f.js";import{g as Ut,a as Ht,s as Be,c as Yt,b as Zt,A as Kt,u as Z,d as pt,e as K,f as M,C as $,S as qt,h as Qt,B as R,i as Xt,j as ht,k as ut,I as ie,p as Jt,l as U,m as xt,n as er,o as ae,F as le,q as tr,r as ft,t as rr,v as nr,w as or,x as sr,Q as ir,y as ar,G as lr,L as cr,z as dr,D as pr}from"./react-toastify.esm-93f93bff.js";import{f as Ue,G as hr,u as ur,c as He,D as mt,a as xr,E as fr,L as Te,b as ue,C as mr,A as gr,i as te,d as yr,e as Pe,g as jr,h as br,j as gt,k as Ye,l as vr,X as yt,Y as jt,m as wr,n as Cr,T as Sr,S as _r,o as Tr,p as Ar}from"./generateCategoricalChart-03b29371.js";import{M as bt,a as vt,b as kr,c as $r,d as wt,e as Er}from"./index.esm-b5fe068c.js";import{T as Lr,a as ce,b as Nr,F as ze,M as ye,C as Ct,N as Pr,c as zr,D as Oe}from"./NoFilterResultIcon-5dae9fd0.js";import{s as H,T as St,A as Me,u as z,I as Dr,E as Ir,D as Br,a as Ze,b as _t,Q as Tt,V as At,S as Or}from"./index-db023ead.js";import{S as je,C as Mr,a as Rr}from"./ChevronUpIcon-8751c090.js";import{P as be,I as ve,a as Re,F as Fr}from"./Popover-ac86cd5f.js";import{B as Wr,T as ne}from"./index-aa3a38ea.js";import{u as O}from"./index-7c4aea71.js";import{B as Fe}from"./index-6c710d98.js";import{P as kt}from"./Popper-51e0901c.js";import{C as Vr}from"./CheckIcon-302ad75f.js";import{e as Gr,S as Ur}from"./Stack-df61ce92.js";import{P as Hr}from"./PlusIcon-baadb478.js";import{T as Yr,a as Zr,B as $t}from"./index-0804c30b.js";function Kr(t){return Ut("MuiTypography",t)}Ht("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);const qr=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],Qr=t=>{const{align:r,gutterBottom:n,noWrap:s,paragraph:i,variant:l,classes:a}=t,o={root:["root",l,t.align!=="inherit"&&`align${lt(r)}`,n&&"gutterBottom",s&&"noWrap",i&&"paragraph"]};return Zt(o,Kr,a)},Xr=Be("span",{name:"MuiTypography",slot:"Root",overridesResolver:(t,r)=>{const{ownerState:n}=t;return[r.root,n.variant&&r[n.variant],n.align!=="inherit"&&r[`align${lt(n.align)}`],n.noWrap&&r.noWrap,n.gutterBottom&&r.gutterBottom,n.paragraph&&r.paragraph]}})(({theme:t,ownerState:r})=>fe({margin:0},r.variant==="inherit"&&{font:"inherit"},r.variant!=="inherit"&&t.typography[r.variant],r.align!=="inherit"&&{textAlign:r.align},r.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},r.gutterBottom&&{marginBottom:"0.35em"},r.paragraph&&{marginBottom:16})),Ke={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},Jr={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},en=t=>Jr[t]||t,tn=x.forwardRef(function(r,n){const s=zt({props:r,name:"MuiTypography"}),i=en(s.color),l=Gr(fe({},s,{color:i})),{align:a="inherit",className:o,component:d,gutterBottom:p=!1,noWrap:f=!1,paragraph:m=!1,variant:y="body1",variantMapping:b=Ke}=l,j=Dt(l,qr),u=fe({},l,{align:a,color:i,className:o,component:d,gutterBottom:p,noWrap:f,paragraph:m,variant:y,variantMapping:b}),v=d||(m?"p":b[y]||Ke[y])||"span",w=Qr(u);return e.jsx(Xr,fe({as:v,ref:n,ownerState:u,className:Yt(w.root,o)},j))}),qe=tn,rn=({twitterHandle:t})=>e.jsx(e.Fragment,{children:e.jsx(h,{direction:"row",children:e.jsx(h,{align:"flex-start",pb:12,children:e.jsxs(S,{children:["Tweet by @",t]})})})}),nn=g(h)(({theme:t})=>({position:"absolute",top:"65px",right:"55px",width:"300px",pointerEvents:"none",background:c.dashboardHeader,boxShadow:"0px 1px 6px rgba(0, 0, 0, 0.1)",color:c.primaryText1,zIndex:100,transition:"opacity 0.6s",padding:t.spacing(2,3),[t.breakpoints.down("sm")]:{padding:t.spacing(1,1.5)}})),on=g(h)`
  width: 22.5%;
`,sn=({node:t})=>{if(!t)return null;const{node_type:r,show_title:n,episode_title:s,description:i,label:l,text:a,type:o,twitter_handle:d}=t,p=t.guests;let f=!1,m=!1;p&&(p.length&&p[0]!==null&&(f=!0),typeof p[0]=="object"&&(m=!0));let y=t.image_url;if(o==="twitter_space"&&(y="twitter_placeholder.png"),y==null)switch(r){case"guest":y="person_placeholder2.png";break;default:y="noimage.jpeg"}return r==="topic"?null:e.jsx(nn,{borderRadius:8,px:24,py:16,children:r==="tweet"?e.jsx(rn,{twitterHandle:d}):e.jsxs(e.Fragment,{children:[e.jsxs(h,{direction:"row",children:[e.jsx(on,{}),e.jsx(h,{align:"flex-start",pb:12,children:e.jsx(S,{children:r==null?void 0:r.toUpperCase()})})]}),e.jsxs(h,{direction:"row",children:[e.jsx(h,{pr:12,children:e.jsx(Kt,{src:y,type:"person"})}),e.jsxs("div",{children:[o==="guest"?e.jsxs(h,{direction:"column",children:[e.jsx(S,{children:l}),a&&e.jsx(h,{pt:4,children:e.jsxs(S,{color:"primaryText1",kind:"tiny",children:["@",a]})})]}):e.jsx(S,{color:"primaryText1",kind:"tiny",children:n}),e.jsxs(h,{pt:4,children:[r==="clip"||r==="episode"&&e.jsx(S,{color:"primaryText1",children:"Episode"}),r==="clip"?e.jsx(S,{as:"div",kind:"regularBold",children:Ue(i)}):e.jsx(S,{color:"primaryText1",kind:"tiny",children:s})]}),e.jsxs(h,{pt:12,children:[r==="clip"&&e.jsx(S,{color:"primaryText1",children:"Episode"}),e.jsx(S,{color:"primaryText1",kind:"tiny",children:r==="clip"?s:Ue(i)})]}),f&&e.jsxs(h,{pt:12,children:[e.jsx(S,{color:"primaryText1",children:"People"}),e.jsx(h,{pt:4,children:e.jsx(S,{color:"primaryText1",kind:"tiny",children:m?p.map(b=>b.name?b.name:`@${b.twitter_handle}`).join(", "):p==null?void 0:p.join(", ")})})]})]})]})]})})},an=()=>{const[t]=Z(r=>[r.hoveredNode]);return e.jsxs(ln,{children:[t&&e.jsx("div",{id:"tooltip-portal",children:e.jsx(sn,{node:t})}),e.jsx(pt,{})]})},ln=g("div")(({theme:t})=>({position:"absolute",zIndex:1,top:0,left:0,userSelect:"none",pointerEvents:"none",display:"flex",justifyContent:"flex-end",alignItems:"flex-start",height:"100%",width:"100%",padding:"16px",[t.breakpoints.down("sm")]:{top:50}})),cn=({fullSize:t=!0})=>{const r=K(n=>n.sidebarIsOpen);return e.jsx(dn,{align:"center",className:M({"sidebar-is-open":r&&!t}),justify:"center",children:e.jsx($,{color:c.SECONDARY_BLUE,size:64})})},dn=g(h)`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  background-color: ${c.black};
  z-index: 1;
`,pn=x.lazy(()=>I(()=>import("./index-94a628ee.js"),["assets/index-94a628ee.js","assets/index-8a12d07f.js","assets/index-3f17fe3b.css","assets/index-6c710d98.js","assets/index-7c4aea71.js","assets/react-toastify.esm-93f93bff.js","assets/react-toastify-b60658ac.css","assets/index-0804c30b.js","assets/useSlotProps-5ee0f16c.js","assets/index-aa3a38ea.js","assets/index.esm-b5fe068c.js","assets/InfoIcon-537b5032.js"]).then(({SettingsModal:t})=>({default:t}))),hn=x.lazy(()=>I(()=>import("./index-b8aea452.js"),["assets/index-b8aea452.js","assets/index-8a12d07f.js","assets/index-3f17fe3b.css","assets/react-toastify.esm-93f93bff.js","assets/react-toastify-b60658ac.css","assets/index-6c710d98.js","assets/index-7c4aea71.js","assets/index-fcf664db.js","assets/index.esm-b5fe068c.js","assets/CheckIcon-302ad75f.js","assets/index-aa3a38ea.js","assets/InfoIcon-537b5032.js"]).then(({AddContentModal:t})=>({default:t}))),un=x.lazy(()=>I(()=>import("./index-8cbacca4.js"),["assets/index-8cbacca4.js","assets/index-8a12d07f.js","assets/index-3f17fe3b.css","assets/react-toastify.esm-93f93bff.js","assets/react-toastify-b60658ac.css","assets/index-6c710d98.js","assets/index-7c4aea71.js","assets/index-fcf664db.js","assets/index.esm-b5fe068c.js","assets/CheckIcon-302ad75f.js","assets/index-aa3a38ea.js","assets/InfoIcon-537b5032.js","assets/index-f8e771d9.js","assets/index-b8812a35.js","assets/Popover-ac86cd5f.js","assets/useSlotProps-5ee0f16c.js","assets/Select-5c1c6aab.js","assets/Stack-df61ce92.js","assets/Popper-51e0901c.js","assets/constants-84edb5fc.js"]).then(({AddItemModal:t})=>({default:t}))),xn=x.lazy(()=>I(()=>import("./index-27476cce.js"),["assets/index-27476cce.js","assets/index-8a12d07f.js","assets/index-3f17fe3b.css","assets/index-6c710d98.js","assets/index-7c4aea71.js","assets/react-toastify.esm-93f93bff.js","assets/react-toastify-b60658ac.css","assets/generateCategoricalChart-03b29371.js","assets/Popover-ac86cd5f.js","assets/useSlotProps-5ee0f16c.js","assets/InfoIcon-537b5032.js","assets/index.esm-b5fe068c.js","assets/NoFilterResultIcon-5dae9fd0.js","assets/ChevronUpIcon-8751c090.js","assets/index-0804c30b.js","assets/index-db023ead.js","assets/index-aa3a38ea.js","assets/Popper-51e0901c.js","assets/CheckIcon-302ad75f.js","assets/Stack-df61ce92.js","assets/PlusIcon-baadb478.js"]).then(({SourcesTableModal:t})=>({default:t}))),fn=x.lazy(()=>I(()=>import("./index-b5406aa8.js"),["assets/index-b5406aa8.js","assets/index-8a12d07f.js","assets/index-3f17fe3b.css","assets/index-6c710d98.js","assets/index-7c4aea71.js","assets/react-toastify.esm-93f93bff.js","assets/react-toastify-b60658ac.css","assets/index-db023ead.js","assets/index-aa3a38ea.js","assets/index.esm-b5fe068c.js","assets/InfoIcon-537b5032.js","assets/Skeleton-e3e8c059.js"]).then(({EditNodeNameModal:t})=>({default:t}))),mn=x.lazy(()=>I(()=>import("./index-14a0e5e2.js"),["assets/index-14a0e5e2.js","assets/index-8a12d07f.js","assets/index-3f17fe3b.css","assets/index-6c710d98.js","assets/index-7c4aea71.js","assets/react-toastify.esm-93f93bff.js","assets/react-toastify-b60658ac.css","assets/toastMessage-a8fcdb29.js","assets/index.esm-b5fe068c.js","assets/Skeleton-e3e8c059.js"]).then(({RemoveNodeModal:t})=>({default:t}))),gn=x.lazy(()=>I(()=>import("./index-75e44a71.js"),["assets/index-75e44a71.js","assets/index-8a12d07f.js","assets/index-3f17fe3b.css","assets/index-6c710d98.js","assets/index-7c4aea71.js","assets/react-toastify.esm-93f93bff.js","assets/react-toastify-b60658ac.css","assets/toastMessage-a8fcdb29.js","assets/index.esm-b5fe068c.js","assets/index-f8e771d9.js","assets/index-b8812a35.js","assets/Popover-ac86cd5f.js","assets/useSlotProps-5ee0f16c.js","assets/Select-5c1c6aab.js","assets/Stack-df61ce92.js","assets/Popper-51e0901c.js","assets/constants-84edb5fc.js","assets/index-db023ead.js"]).then(({AddNodeEdgeModal:t})=>({default:t}))),yn=()=>e.jsxs(e.Fragment,{children:[e.jsx(un,{}),e.jsx(hn,{}),e.jsx(pn,{}),e.jsx(fn,{}),e.jsx(mn,{}),e.jsx(xn,{}),e.jsx(gn,{})]}),jn=()=>{const t=K(r=>r.appMetaData);return e.jsxs(bn,{children:[e.jsxs(vn,{children:[e.jsx(e.Fragment,{children:t.title&&e.jsx(S,{className:"title",color:"white",children:t.title})}),e.jsx(S,{className:"subtitle",children:" Second Brain"})]}),e.jsx(qt,{})]})},bn=g(h).attrs({align:"center",direction:"row",grow:1,justify:"flex-start"})`
  height: 64px;
  position: absolute;
  top: 0px;
  left: 64px;
  right: 32px;
  transition: opacity 1s;
  z-index: 99;
  padding: 20px 23px;
`,vn=g.div`
  ${It.smallOnly`
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
`,wn=()=>{const[t,r]=x.useState(!0),n=Qt();x.useEffect(()=>{r(!0)},[n]);const s=()=>{r(!1)};return n&&t?e.jsxs(Cn,{align:"center",direction:"column",justify:"center",onClick:s,children:[e.jsx("img",{alt:"screen",src:"jamboard_kiosk.png"}),e.jsxs(h,{align:"center",direction:"column",justify:"center",children:[e.jsx(Ae,{children:"Second Brain is currently"}),e.jsx(Ae,{style:{fontWeight:600},children:"optimized for Desktop."}),e.jsx(Ae,{children:"Mobile support coming soon."})]}),e.jsx(R,{color:"secondary",onClick:s,variant:"contained",children:"Got It"})]}):null},Cn=g(h)`
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.75);
  gap: 28px;
  z-index: 2000000000;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`,Ae=g(S)`
  color: #fff;
  text-align: center;
  font-family: Barlow;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  margin: 1px;
`,Sn={},_n=x.createContext(Sn),Tn=()=>{const[t,r]=x.useState(!1),n=x.useMemo(()=>({isShow:t,setIsShow:r}),[t]);return e.jsx(_n.Provider,{value:n})},C=g(Lr)`
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
`,we=g(ce)`
  && {
    height: 48px;
    padding: 0 36px;
  }
  &:nth-child(odd) {
    background-color: ${c.BG3};
  }
`,Ce=g(Nr)`
  && {
    border-bottom: 1px solid ${c.black};
  }

  ${C} {
    color: ${c.white};
    font-family: Barlow;
    font-size: 11px;
    font-style: normal;
    font-weight: 700;
    line-height: 18px; /* 163.636% */
    letter-spacing: 1.1px;
    text-transform: uppercase;
  }
`,me=g(R)`
  &.selected {
    background: ${c.white};
    color: ${c.BG1};
    pointer-events: none;
  }

  & + & {
    margin-left: 16px;
  }
`,Se=g(h)`
  margin-bottom: 16px;
  padding: 0 36px;
  ${S} {
    margin-bottom: 0;
  }
`,An=({data:t})=>{const r=Z(a=>a.setQueuedSources),[n,s]=x.useState(""),i=async a=>{if(t!=null&&t.length)try{const o=await Bt.enable();await Xt(a,o.pubkey),r(t.filter(d=>d.ref_id!==a))}catch(o){console.warn(o)}},l=async a=>{if(!(!a||!(t!=null&&t.length))){s(a);try{await ht(a),r(t==null?void 0:t.filter(o=>o.ref_id!==a))}catch(o){console.warn(o)}finally{s("")}}};return t!=null&&t.length?e.jsxs(ye,{component:"table",children:[e.jsx(Ce,{children:e.jsxs(ce,{component:"tr",children:[e.jsx(C,{className:"empty"}),e.jsx(C,{children:"Type"}),e.jsx(C,{children:"Source"}),e.jsx(C,{}),e.jsx(C,{className:"empty"})]})}),(t==null?void 0:t.length)&&e.jsx("tbody",{children:t==null?void 0:t.map(a=>e.jsxs(we,{children:[e.jsx(C,{className:"empty"}),e.jsx(C,{children:H[a.source_type]}),e.jsx(C,{width:"268px",children:a.source_type==="twitter_handle"?e.jsxs(Xe,{href:`${St}/${a.source}?open=system`,target:"_blank",children:["@",a.source]}):e.jsx(Xe,{href:`${a.source}?open=system`,target:"_blank",children:a.source})}),e.jsx(C,{className:"cell-center",children:e.jsxs(h,{direction:"row",justify:"space-between",children:[e.jsx("div",{className:"approve-wrapper",children:e.jsx(Qe,{className:"centered",onClick:()=>i(a.ref_id),children:e.jsx(bt,{color:c.primaryGreen,fontSize:24})})}),e.jsx("div",{className:"delete-wrapper",children:n===a.ref_id?e.jsx($,{color:c.white,size:16}):e.jsx(Ct,{message:"Are you sure ?",onConfirm:()=>l(a.ref_id),children:e.jsx(Qe,{className:"centered",children:e.jsx(vt,{color:c.primaryRed,fontSize:24})})})})]})}),e.jsx(C,{className:"empty"})]},a.source))})]}):e.jsxs(h,{children:[e.jsx(S,{children:"There is not any results for selected filters"}),e.jsx(ze,{})]})},Qe=g(h)`
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
`,Xe=g.a`
  color: ${c.white};
  text-decoration: underline;
  &:visited {
    color: ${c.white};
  }
  &:hover {
    cursor: pointer;
  }
`,kn=()=>{const[t,r]=x.useState(!0),[n,s]=x.useState(""),[i,l]=Z(d=>[d.queuedSources,d.setQueuedSources]);x.useEffect(()=>{(async()=>{r(!0);try{const p=await ut({approved:"False"});l(p.data)}catch(p){console.warn(p)}finally{r(!1)}})()},[l]);const a=d=>{s(n===d||!d?"":d)},o=i==null?void 0:i.filter(d=>!n||d.source_type===n);return e.jsxs($n,{align:"stretch",direction:"column",justify:"flex-end",children:[e.jsxs(Se,{align:"flex-start",justify:"space-between",children:[e.jsx(S,{className:"title",children:"Queued Sources"}),e.jsx(S,{className:"subtitle",children:"This is a queue of pending sources waiting for approval or denial from graph users. If you think a source will provide good content for the graph, you can pay to approve it. Think of this as an investment: you pay to add it to the source table, and if the content is popular you will earn from it. If content is not relevant to the graph, you should deny it."})]}),e.jsxs(h,{className:"filters",direction:"row",pb:16,px:36,children:[e.jsx(me,{className:M({selected:!n}),onClick:()=>a(""),size:"small",children:"All"}),Object.keys(H).map(d=>e.jsx(me,{className:M({selected:d===n}),onClick:()=>a(d),size:"small",children:H[d]},d))]}),e.jsx(En,{align:"center",justify:t?"center":"flex-start",children:t?e.jsx($,{color:c.white}):e.jsx(An,{data:o})})]})},$n=g(h)`
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
`,En=g(h)`
  min-height: 0;
  overflow: auto;
  flex: 1;
  width: 100%;
`,Ln=({onSearch:t,placeholder:r,activeIcon:n,loadingIcon:s,defaultIcon:i,...l})=>{const[a,o]=x.useState(""),[d,p]=x.useState(!1),f=()=>{o(""),t(""),p(!1)},m=j=>{!j.target.value&&f(),o(j.target.value)},y=j=>{const{value:u}=j.currentTarget;o(u),!d&&(p(!0),setTimeout(()=>{t(u),u||f(),p(!1)},1e3),u||f())},b=()=>d?e.jsx(Je,{children:e.jsx(ke,{type:"button",children:s})}):e.jsx(Je,{children:a?e.jsx(ke,{onClick:f,type:"button",children:n}):e.jsx(ke,{type:"button",children:i})});return e.jsxs(Nn,{children:[e.jsx(Pn,{autoComplete:"off",autoCorrect:"off",inputProps:{"aria-label":"search sources"},onChange:m,onKeyDown:j=>{j.key==="Enter"&&y(j)},placeholder:r,value:a,...l}),b()]})},Je=g(h)`
  top: -50%;
  right: -3%;
  z-index: 3;
  position: absolute;
  transform: translate(-50%, 50%);
`,ke=g(ie)`
  font-size: 24px;
`,Nn=g(be)`
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
`,Pn=g(ve)`
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
`,zn=({data:t,canEdit:r=!1})=>{const n=Z(o=>o.setSources),[s,i]=x.useState(""),l=async(o,d)=>{if(t!=null&&t.length)try{await Jt(o,d);const p=t==null?void 0:t.findIndex(m=>m.ref_id===o),f=[...t];f[p]={...f[p],source:d.source},n(f)}catch(p){console.warn(p)}},a=async o=>{if(!(!o||!(t!=null&&t.length))){i(o);try{await ht(o),n(t==null?void 0:t.filter(d=>d.ref_id!==o))}catch(d){console.warn(d)}finally{i("")}}};return t!=null&&t.length?e.jsxs(ye,{"aria-label":"a dense table",component:"table",id:"sources-table",size:"small",children:[e.jsx(Ce,{children:e.jsxs(ce,{component:"tr",children:[e.jsx(C,{className:"empty"}),e.jsx(C,{children:"Type"}),e.jsx(C,{align:"left",children:"Source"}),r&&e.jsx(C,{align:"left"}),e.jsx(C,{className:"empty"})]})}),e.jsx(zr,{component:"tbody",children:t==null?void 0:t.map(o=>e.jsxs(we,{children:[e.jsx(C,{className:"empty"}),e.jsx(C,{align:"left",children:H[o.source_type]}),e.jsx(C,{align:"left",children:e.jsx(Dn,{condition:r,wrapper:d=>e.jsx(In,{id:o.ref_id,onSave:p=>l(o.ref_id,{source:p,source_type:o.source_type}),value:o.source,children:d}),children:o.source_type===We||o.source_type===Ve||o.source_type===Ge?e.jsxs(e.Fragment,{children:[o.source_type===We&&e.jsxs($e,{href:`${St}/${o.source}`,target:"_blank",children:["@",o.source]}),o.source_type===Ve&&e.jsx($e,{href:`${o.source}${o.source.includes("?")?"&":"?"}open=system`,target:"_blank",children:o.source}),o.source_type===Ge&&e.jsx($e,{href:o.source,target:"_blank",children:o.source})]}):e.jsx("div",{children:o.source})})}),r&&e.jsx(C,{align:"left",children:e.jsx("div",{className:"delete-wrapper",id:`delete-${o.source}`,children:s===o.ref_id?e.jsx($,{color:c.white}):e.jsx(Ct,{message:"Are you sure ?",onConfirm:()=>a(o.ref_id),children:e.jsx(G,{className:"centered",children:e.jsx(kr,{})})})})}),e.jsx(C,{className:"empty"})]},o.source))})]}):e.jsxs(On,{children:[e.jsx(Pr,{}),e.jsx(S,{className:"text",children:"There is not any results for selected filters"})]})};function Dn({condition:t,wrapper:r,children:n}){return t?r(n):n}const In=({value:t,onSave:r,id:n,children:s})=>{const[i,l]=x.useState(!1),[a,o]=x.useState(t),[d,p]=x.useState(!1),f=async()=>{if(n){p(!0);try{await r(a),l(!1)}catch(m){console.warn(m)}finally{p(!1)}}};return e.jsx("div",{children:i?e.jsxs(Bn,{direction:"row",children:[e.jsx(Wr,{className:"editable-cell__input",name:"cell-input",onChange:m=>o(m),value:a}),e.jsx(G,{align:"center",justify:"center",children:d?e.jsx($,{}):e.jsx($r,{onClick:f})}),e.jsx(G,{align:"center",className:"secondary",justify:"center",onClick:()=>l(!1),children:e.jsx(wt,{})})]}):e.jsxs(Mn,{direction:"row",children:[s,e.jsx(G,{onClick:()=>l(!0),children:e.jsx(Er,{size:20})})]})})},Bn=g(h)`
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
`,G=g(h)`
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
`,On=g(h)`
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
`,Mn=g(h)`
  display: flex;
  padding: 4px;
  position: relative;

  ${G} {
    visibility: hidden;
  }

  &:hover {
    ${G} {
      visibility: visible;
    }
  }
`,$e=g.a`
  color: ${c.white};
  text-decoration: underline;
  &:visited {
    color: ${c.white};
  }
`,Rn=()=>{const[t,r]=x.useState(!0),[n,s]=x.useState(""),[i,l]=Z(m=>[m.sources,m.setSources]),[a]=se(m=>[m.isAdmin]),[o,d]=x.useState("");x.useEffect(()=>{(async()=>{r(!0);try{const y=await ut();l(y.data)}catch(y){console.warn(y)}finally{r(!1)}})()},[l]);const p=m=>{s(n===m||!m?"":m)},f=x.useMemo(()=>i==null?void 0:i.filter(m=>(!n||m.source_type===n)&&(m.source.toLowerCase().startsWith(o.toLowerCase())||m.source.toLowerCase().includes(o.toLowerCase()))),[o,n,i]);return e.jsxs(Fn,{align:"stretch",direction:"column",justify:"flex-end",children:[e.jsx(Se,{align:"center",direction:"row",justify:"space-between",children:e.jsx(S,{className:"title",children:"Sources for this Graph"})}),e.jsx(Vn,{children:e.jsx(Ln,{activeIcon:e.jsx(U,{}),defaultIcon:e.jsx(je,{}),loadingIcon:e.jsx($,{color:c.PRIMARY_BLUE,size:24}),onSearch:d,placeholder:"Find Topic"})}),e.jsxs(h,{className:"filters",direction:"row",pb:16,px:36,children:[e.jsx(me,{className:M({selected:!n}),onClick:()=>p(""),size:"small",children:"All"}),Object.keys(H).map(m=>e.jsx(me,{className:M({selected:m===n}),onClick:()=>p(m),size:"small",children:H[m]},m))]}),e.jsx(Wn,{align:"center",justify:t?"center":"flex-start",children:t?e.jsx($,{color:c.white}):e.jsx(zn,{canEdit:a,data:f})})]})},Fn=g(h)`
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
`,Wn=g(h)`
  min-height: 0;
  overflow: auto;
  flex: 1;
  width: 100%;
`,Vn=g(h)`
  margin: 0 0 16px 36px;
`,Gn=({onSelect:t,selectedTopic:r})=>{const[n,s]=x.useState(!1),[i,l]=x.useState(""),[a,o]=x.useState([]),[d,p]=x.useState(!1),f=x.useRef(null);x.useEffect(()=>()=>o([]),[o]);const m=async u=>{const v={muted:"False",sort_by:Me,search:u,skip:"0",limit:"1000"};p(!0);try{const w=await xt(v);o(w.data)}catch{o([])}finally{p(!1)}},y=x.useMemo(()=>ct.debounce(m,300),[]),b=u=>{t(u)},j=u=>{if(l(u),!u){o([]);return}u.length>2&&y(u)};return r?e.jsxs(Yn,{children:[e.jsx("div",{className:"value",children:r.topic}),e.jsx(h,{className:"icon",onClick:()=>t(null),children:e.jsx(U,{})})]}):e.jsxs(e.Fragment,{children:[e.jsxs(be,{ref:f,component:"form",onSubmit:u=>u.preventDefault(),sx:{p:"2px 4px",display:"flex",alignItems:"center",width:200},children:[e.jsx(ve,{inputProps:{"aria-label":"search topic"},onChange:u=>j(u.target.value),onFocus:()=>s(!0),placeholder:"Search",size:"small",sx:{ml:1,flex:1},value:i}),i&&e.jsxs(e.Fragment,{children:[e.jsx(et,{"aria-label":"search",onClick:()=>j(""),type:"button",children:e.jsx(U,{})}),e.jsx(Oe,{orientation:"vertical",sx:{height:28,m:.5}})]}),e.jsx(et,{"aria-label":"search",type:"button",children:d?e.jsx($,{color:c.white,size:24}):e.jsx(je,{})})]}),f.current&&a.length?e.jsx(Hn,{anchorEl:f.current,open:n,placement:"bottom",children:e.jsx(e.Fragment,{children:a.map(u=>e.jsx(Un,{className:M({active:r===u.ref_id}),onClick:()=>b(u),children:u.topic},"option"))})}):null]})},Un=g(h).attrs({direction:"row",align:"center"})`
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
`,Hn=g(kt)`
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
`,Yn=g(h).attrs({direction:"row",justify:"flex-start",align:"center"})`
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
`,et=g(ie)`
  font-size: 24px;
`,Zn=({selectedType:t,setSelectedType:r})=>{const[n,s]=x.useState(null),[i,l]=x.useState([]);x.useEffect(()=>{(async()=>{try{const{data:f}=await er();l(f.edge_types)}catch(f){console.warn(f)}})()},[l]);const a=p=>{s(p.currentTarget)},o=()=>{s(null)},d=p=>{r(p),o()};return e.jsxs("div",{children:[e.jsxs(Kn,{onClick:a,children:[e.jsx("div",{className:"text",children:"Type"}),e.jsx("div",{className:"value",children:t}),e.jsx("div",{className:"icon",children:n?e.jsx(Rr,{}):e.jsx(Mr,{})})]}),e.jsx(Qn,{anchorEl:n,anchorOrigin:{vertical:"bottom",horizontal:"left"},anchorPosition:{top:62,left:0},onClose:o,open:!!n,transformOrigin:{vertical:"top",horizontal:"left"},children:e.jsx(Fr,{children:i.map(p=>e.jsxs(qn,{className:M({active:p===t}),onClick:()=>d(p),children:[e.jsx("span",{className:"icon",children:p===t?e.jsx(Vr,{}):null}),e.jsx("span",{children:p})]},p))})})]})},Kn=g(h).attrs({direction:"row",align:"center"})`
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
`,qn=g(h).attrs({direction:"row",align:"center"})`
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
`,Qn=g(Re)`
  .MuiPaper-root {
    background: ${c.BUTTON1};
    min-width: 149px;
    padding: 16px;
    color: ${c.GRAY3};
    box-shadow: 0px 1px 6px 0px rgba(0, 0, 0, 0.2);
    border-radius: 6px;
  }
`,Xn=({from:t,onSelect:r,selectedTopic:n,selectedType:s,setSelectedType:i})=>e.jsxs(h,{children:[e.jsx(h,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(h,{align:"center",direction:"row",children:e.jsx(Jn,{children:"Add edge"})})}),e.jsxs(eo,{mb:12,children:[e.jsxs(Ee,{children:[e.jsx("div",{className:"label",children:"From"}),e.jsx("div",{children:t})]}),e.jsx(Ee,{children:e.jsx(Zn,{selectedType:s,setSelectedType:i})}),e.jsxs(Ee,{children:[e.jsx("div",{className:"label",children:"To"}),e.jsx(Gn,{onSelect:r,selectedTopic:n})]})]})]}),Jn=g(S)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,eo=g(h).attrs({align:"flex-start",direction:"row",justify:"flex-start"})`
  color: ${c.white};
  .label {
    margin-bottom: 8px;
    font-weight: 500;
    font-size: 14px;
    color: ${c.GRAY3};
  }
`,Ee=g(h)`
  flex: 1 1 100%;
`,to=({topic:t,onClose:r})=>{const{close:n}=O("addEdge"),[s]=z(j=>[j.data]),i=ae({mode:"onChange"}),[l,a]=x.useState(!1),[o,d]=x.useState(null),[p,f]=x.useState(""),m=()=>{r(),n()},y=async()=>{if(!(!o||!s)){a(!0);try{await tr({from:t.ref_id,to:o==null?void 0:o.ref_id,relationship:p});const{ref_id:j}=t,{ref_id:u}=o;if(s){const v={...s};v[j]={...v[j],edgeList:[...v[j].edgeList,p]},v[u]&&(v[u]={...v[u],edgeList:[...v[u].edgeList,p]}),z.setState({data:v})}m()}catch(j){console.warn(j)}finally{a(!1)}}},b=l||!o||!p;return e.jsx(Fe,{id:"addEdge",kind:"large",onClose:m,preventOutsideClose:!0,children:e.jsxs(le,{...i,children:[e.jsx(Xn,{from:t.topic,onSelect:d,selectedTopic:o,selectedType:p,setSelectedType:f}),e.jsxs(R,{color:"secondary",disabled:b,onClick:y,size:"large",variant:"contained",children:["Confirm",l&&e.jsx($,{color:c.BLUE_PRESS_STATE,size:10})]})]})})},ro=()=>e.jsxs(h,{children:[e.jsx(h,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(h,{align:"center",direction:"row",children:e.jsx(no,{children:"Edit topic"})})}),e.jsx(h,{mb:12,children:e.jsx(ne,{id:"cy-topic",maxLength:50,name:"topic",placeholder:"Add your topic",rules:{...Ot}})})]}),no=g(S)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,oo=({topic:t,onClose:r})=>{const{close:n}=O("editTopic"),[s]=z(b=>[b.data]),i=ae({mode:"onChange"}),{watch:l,setValue:a,reset:o}=i,[d,p]=x.useState(!1);x.useEffect(()=>(t&&a("topic",t==null?void 0:t.topic),()=>{o()}),[t,a,o]);const f=l("topic"),m=()=>{r(),n()},y=async()=>{p(!0);try{if(await ft((t==null?void 0:t.ref_id)||"",{topic:f.trim()}),s){const b={...s};b[t==null?void 0:t.ref_id].topic=f.trim(),z.setState({data:b})}m()}catch(b){console.warn(b)}finally{p(!1)}};return e.jsx(Fe,{id:"editTopic",kind:"regular",onClose:m,preventOutsideClose:!0,children:e.jsxs(le,{...i,children:[e.jsx(ro,{}),e.jsxs(R,{color:"secondary",disabled:d,onClick:y,size:"large",variant:"contained",children:["Save",d&&e.jsx($,{color:c.BLUE_PRESS_STATE,size:10})]})]})})},so=({onSelect:t,selectedTopic:r})=>{const[n,s]=x.useState(!1),[i,l]=x.useState(""),[a,o]=x.useState([]),[d,p]=x.useState(!1),f=x.useRef(null);x.useEffect(()=>()=>o([]),[o]);const m=async u=>{const v={muted:"False",sort_by:Me,search:u,skip:"0",limit:"1000"};p(!0);try{const w=await xt(v);o(w.data)}catch{o([])}finally{p(!1)}},y=x.useMemo(()=>ct.debounce(m,300),[]),b=u=>{t(u)},j=u=>{if(l(u),!u){o([]);return}u.length>2&&y(u)};return r?e.jsxs(lo,{children:[e.jsx("div",{className:"value",children:r.topic}),e.jsx(h,{className:"icon",onClick:()=>t(null),children:e.jsx(U,{})})]}):e.jsxs(e.Fragment,{children:[e.jsxs(be,{ref:f,component:"form",onSubmit:u=>u.preventDefault(),sx:{p:"2px 4px",display:"flex",alignItems:"center",width:200},children:[e.jsx(ve,{inputProps:{"aria-label":"search topic"},onChange:u=>j(u.target.value),onFocus:()=>s(!0),placeholder:"Search",size:"small",sx:{ml:1,flex:1},value:i}),i&&e.jsxs(e.Fragment,{children:[e.jsx(tt,{"aria-label":"search",onClick:()=>j(""),type:"button",children:e.jsx(U,{})}),e.jsx(Oe,{orientation:"vertical",sx:{height:28,m:.5}})]}),e.jsx(tt,{"aria-label":"search",type:"button",children:d?e.jsx($,{color:c.white,size:24}):e.jsx(je,{})})]}),f.current&&a.length?e.jsx(ao,{anchorEl:f.current,open:n,placement:"bottom",children:e.jsx(e.Fragment,{children:a.map(u=>e.jsx(io,{className:M({active:r===u.ref_id}),onClick:()=>b(u),children:u.topic},"option"))})}):null]})},io=g(h).attrs({direction:"row",align:"center"})`
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
`,ao=g(kt)`
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
`,lo=g(h).attrs({direction:"row",justify:"flex-start",align:"center"})`
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
`,tt=g(ie)`
  font-size: 24px;
`,co=({from:t,onSelect:r,selectedTopic:n})=>e.jsxs(h,{children:[e.jsx(h,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(h,{align:"center",direction:"row",children:e.jsx(po,{children:"Merge topic"})})}),e.jsxs(ho,{mb:12,children:[e.jsxs(rt,{children:[e.jsx("div",{className:"label",children:"From"}),e.jsx("div",{children:t})]}),e.jsxs(rt,{ml:24,children:[e.jsx("div",{className:"label",children:"To"}),e.jsx(so,{onSelect:r,selectedTopic:n})]})]})]}),po=g(S)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,ho=g(h).attrs({align:"flex-start",direction:"row",justify:"flex-start"})`
  color: ${c.white};
  .label {
    margin-bottom: 8px;
    font-weight: 500;
    font-size: 14px;
    color: ${c.GRAY3};
  }
`,rt=g(h)`
  flex: 1 1 100%;
`,uo=({topic:t,onClose:r})=>{const{close:n}=O("mergeTopic"),[s,i,l]=z(w=>[w.data,w.ids,w.total]),a=ae({mode:"onChange"}),{watch:o,setValue:d,reset:p}=a,[f,m]=x.useState(!1),[y,b]=x.useState(null);x.useEffect(()=>(t&&d("topic",t==null?void 0:t.topic),()=>{p()}),[t,d,p]);const j=o("topic"),u=()=>{r(),n()},v=async()=>{if(!(!y||!s)){m(!0);try{await rr({from:t.ref_id,to:y==null?void 0:y.ref_id});const{ref_id:w}=t;if(s[w]={...s[w],edgeList:[Dr],edgeCount:s[w].edgeCount-1},z.setState({ids:i.filter(T=>T!==y.ref_id),total:l-1}),s){const T={...s};T[t==null?void 0:t.ref_id].topic=j.trim(),z.setState({data:T})}u()}catch(w){console.warn(w)}finally{m(!1)}}};return e.jsx(Fe,{id:"mergeTopic",kind:"regular",onClose:u,preventOutsideClose:!0,children:e.jsxs(le,{...a,children:[e.jsx(co,{from:t.topic,onSelect:b,selectedTopic:y}),e.jsxs(R,{color:"secondary",disabled:f,onClick:v,size:"large",variant:"contained",children:["Merge topics",f&&e.jsx($,{color:c.BLUE_PRESS_STATE,size:10})]})]})})},xo=()=>{const[t,r]=z(a=>[a.filters,a.setFilters]),[n,s]=x.useState(""),i=a=>{a.preventDefault(),r({search:n})},l=()=>{s(""),t.search&&r({search:""})};return e.jsxs(be,{component:"form",onSubmit:i,sx:{p:"2px 4px",display:"flex",alignItems:"center",width:300},children:[e.jsx(ve,{autoComplete:"off",autoCorrect:"off",inputProps:{"aria-label":"search topic"},onChange:a=>s(a.target.value),placeholder:"Search",size:"small",spellCheck:"false",sx:{ml:1,flex:1},value:n}),n&&e.jsxs(e.Fragment,{children:[e.jsx(nt,{"aria-label":"search",onClick:l,type:"button",children:e.jsx(U,{})}),e.jsx(Oe,{orientation:"vertical",sx:{height:28,m:.5}})]}),e.jsx(nt,{"aria-label":"search",onClick:i,type:"button",children:e.jsx(je,{})})]})},nt=g(ie)`
  font-size: 24px;
`,fo=t=>e.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M7.37516 8.625V11.3334C7.37516 11.5104 7.43508 11.6589 7.55491 11.7786C7.67476 11.8984 7.82326 11.9583 8.00041 11.9583C8.17758 11.9583 8.32599 11.8984 8.44564 11.7786C8.5653 11.6589 8.62512 11.5104 8.62512 11.3334V8.625H11.3335C11.5106 8.625 11.659 8.56508 11.7788 8.44525C11.8986 8.3254 11.9585 8.1769 11.9585 7.99975C11.9585 7.82258 11.8986 7.67417 11.7788 7.55452C11.659 7.43487 11.5106 7.37504 11.3335 7.37504H8.62512V4.66669C8.62512 4.4896 8.56521 4.34117 8.44537 4.22137C8.32553 4.1016 8.17702 4.04171 7.99987 4.04171C7.82271 4.04171 7.6743 4.1016 7.55464 4.22137C7.43499 4.34117 7.37516 4.4896 7.37516 4.66669V7.37504H4.66681C4.48973 7.37504 4.3413 7.43496 4.22152 7.55479C4.10173 7.67464 4.04183 7.82314 4.04183 8.00029C4.04183 8.17746 4.10173 8.32587 4.22152 8.44552C4.3413 8.56517 4.48973 8.625 4.66681 8.625H7.37516ZM8.00154 15.9167C6.90659 15.9167 5.8774 15.7089 4.91395 15.2933C3.9505 14.8778 3.11243 14.3138 2.39975 13.6015C1.68705 12.8891 1.12284 12.0514 0.7071 11.0884C0.291364 10.1253 0.0834961 9.09636 0.0834961 8.00142C0.0834961 6.90647 0.291274 5.87728 0.70683 4.91383C1.12239 3.95037 1.68634 3.11231 2.3987 2.39963C3.11108 1.68693 3.94878 1.12272 4.91181 0.706979C5.87482 0.291243 6.9038 0.083374 7.99875 0.083374C9.09369 0.083374 10.1229 0.291153 11.0863 0.706708C12.0498 1.12226 12.8879 1.68622 13.6005 2.39858C14.3132 3.11096 14.8774 3.94866 15.2932 4.91169C15.7089 5.8747 15.9168 6.90368 15.9168 7.99863C15.9168 9.09357 15.709 10.1228 15.2935 11.0862C14.8779 12.0497 14.3139 12.8877 13.6016 13.6004C12.8892 14.3131 12.0515 14.8773 11.0885 15.2931C10.1255 15.7088 9.09648 15.9167 8.00154 15.9167ZM8.00014 14.6667C9.86125 14.6667 11.4376 14.0209 12.7293 12.7292C14.021 11.4375 14.6668 9.86113 14.6668 8.00002C14.6668 6.13891 14.021 4.56252 12.7293 3.27085C11.4376 1.97919 9.86125 1.33335 8.00014 1.33335C6.13903 1.33335 4.56264 1.97919 3.27098 3.27085C1.97931 4.56252 1.33348 6.13891 1.33348 8.00002C1.33348 9.86113 1.97931 11.4375 3.27098 12.7292C4.56264 14.0209 6.13903 14.6667 8.00014 14.6667Z",fill:"currentColor"})}),mo=t=>e.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 12 12",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M10.1765 0.310088L4.72809 5.70971C4.63832 5.79868 4.56637 5.90372 4.51607 6.01926L3.74627 7.78746C3.63822 8.03565 3.89191 8.28707 4.14234 8.17999L5.92651 7.41707C6.04309 7.36722 6.14907 7.29592 6.23885 7.20695L11.6872 1.80733C12.1044 1.39388 12.1044 0.723539 11.6872 0.310088C11.27 -0.103363 10.5936 -0.103363 10.1765 0.310088ZM9.80835 7.14088C9.80835 6.81895 10.072 6.55777 10.3969 6.55777C10.723 6.55777 10.9854 6.82017 10.9854 7.14088L10.9191 10.2508C10.9191 11.2153 10.1489 12.0001 9.17571 12.0001H1.74343C0.79227 12.0001 0 11.2153 0 10.2289V2.84292C0 1.89999 0.79227 1.11523 1.74343 1.11523L5.29651 1.11548C5.62264 1.11548 5.88501 1.37666 5.88501 1.69858C5.88501 2.0205 5.62141 2.28168 5.29651 2.28168H1.7655C1.44134 2.28168 1.177 2.54335 1.177 2.86479V10.2508C1.177 10.5722 1.44134 10.8339 1.7655 10.8339H9.21985C9.54402 10.8339 9.80835 10.5722 9.80835 10.2508V7.14088Z",fill:"currentColor"})}),go=t=>e.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 12 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M1.33317 15.5L0.166504 14.3333L4.18734 10.2917C4.50678 9.97222 4.74984 9.61111 4.9165 9.20833C5.08317 8.80556 5.1665 8.38194 5.1665 7.9375L5.1665 3.6875L3.83317 5L2.6665 3.83333L5.99984 0.5L9.33317 3.83333L8.1665 5L6.83317 3.6875L6.83317 7.9375C6.83317 8.38194 6.9165 8.80556 7.08317 9.20833C7.24984 9.61111 7.49289 9.97222 7.81234 10.2917L11.8332 14.3333L10.6665 15.5L5.99984 10.8333L1.33317 15.5Z",fill:"currentColor"})}),yo=t=>e.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 16 15",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M14.0716 15L10.8994 11.7764C10.437 11.9597 9.96181 12.0919 9.47381 12.1732C8.98581 12.2545 8.49002 12.2952 7.98643 12.2952C6.33597 12.2952 4.82448 11.8457 3.45194 10.9466C2.07941 10.0476 0.991584 8.86271 0.188459 7.39193C0.123124 7.27666 0.0753836 7.15933 0.045238 7.03994C0.0150793 6.92055 0 6.7991 0 6.67559C0 6.55208 0.0163338 6.42935 0.0490013 6.30739C0.0816688 6.18543 0.13067 6.06938 0.196005 5.95925C0.508607 5.42714 0.84081 4.91226 1.19261 4.41462C1.54443 3.91699 1.95353 3.47673 2.41992 3.09386L0.24877 0.846015L1.07501 0L14.8978 14.154L14.0716 15ZM7.98643 9.94854C8.16032 9.94854 8.32642 9.93799 8.48473 9.91689C8.64305 9.89579 8.7976 9.84973 8.94838 9.77871L4.95591 5.69059C4.89158 5.84498 4.84786 6.00324 4.82475 6.16535C4.80162 6.32745 4.79005 6.49753 4.79005 6.67559C4.79005 7.58645 5.10039 8.35966 5.72108 8.99521C6.34176 9.63076 7.09688 9.94854 7.98643 9.94854ZM13.4384 10.3561L10.9792 7.85816C11.0456 7.66673 11.0961 7.47375 11.1308 7.27922C11.1655 7.0847 11.1828 6.88349 11.1828 6.67559C11.1828 5.76473 10.8725 4.99152 10.2518 4.35597C9.63109 3.72042 8.87598 3.40264 7.98643 3.40264C7.78339 3.40264 7.58689 3.42168 7.39692 3.45976C7.20694 3.49784 7.02099 3.56011 6.83907 3.64657L4.87751 1.64575C5.37606 1.44402 5.88441 1.29529 6.40257 1.19957C6.92071 1.10385 7.44867 1.05599 7.98643 1.05599C9.64191 1.05599 11.1604 1.50756 12.542 2.41072C13.9236 3.31387 15.0134 4.50598 15.8115 5.98705C15.8718 6.08894 15.9183 6.19829 15.951 6.31511C15.9837 6.43192 16 6.55208 16 6.67559C16 6.7991 15.9857 6.91926 15.957 7.03607C15.9284 7.15289 15.8839 7.26225 15.8236 7.36414C15.52 7.94669 15.1738 8.49038 14.7848 8.99521C14.3958 9.50005 13.947 9.95369 13.4384 10.3561ZM10.0912 6.95657L7.73162 4.54816C8.06131 4.48126 8.38246 4.50545 8.69506 4.62072C9.00767 4.736 9.27754 4.9156 9.5047 5.15952C9.7369 5.40036 9.90451 5.67723 10.0075 5.99012C10.1106 6.30301 10.1385 6.62516 10.0912 6.95657Z",fill:"currentColor"})}),jo=t=>e.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 18 13",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M9.00204 9.98073C9.94628 9.98073 10.7483 9.65024 11.408 8.98927C12.0677 8.32829 12.3976 7.52567 12.3976 6.58142C12.3976 5.63718 12.0671 4.8352 11.4061 4.17548C10.7451 3.51576 9.9425 3.1859 8.99825 3.1859C8.05401 3.1859 7.25203 3.51638 6.59231 4.17735C5.93259 4.83834 5.60273 5.64096 5.60273 6.58521C5.60273 7.52944 5.93321 8.33142 6.59419 8.99115C7.25517 9.65087 8.05779 9.98073 9.00204 9.98073ZM9.00014 8.83331C8.37514 8.83331 7.84389 8.61456 7.40639 8.17706C6.96889 7.73956 6.75014 7.20831 6.75014 6.58331C6.75014 5.95831 6.96889 5.42706 7.40639 4.98956C7.84389 4.55206 8.37514 4.33331 9.00014 4.33331C9.62514 4.33331 10.1564 4.55206 10.5939 4.98956C11.0314 5.42706 11.2501 5.95831 11.2501 6.58331C11.2501 7.20831 11.0314 7.73956 10.5939 8.17706C10.1564 8.61456 9.62514 8.83331 9.00014 8.83331ZM9.00129 12.4166C7.08494 12.4166 5.33884 11.888 3.76298 10.8309C2.18713 9.77374 1.02688 8.35788 0.282227 6.58331C1.02688 4.80874 2.18675 3.39288 3.76185 2.33573C5.33694 1.27858 7.08265 0.75 8.999 0.75C10.9153 0.75 12.6614 1.27858 14.2373 2.33573C15.8132 3.39288 16.9734 4.80874 17.7181 6.58331C16.9734 8.35788 15.8135 9.77374 14.2384 10.8309C12.6634 11.888 10.9176 12.4166 9.00129 12.4166Z",fill:"currentColor"})}),Le=t=>e.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 12 8",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M0.333496 7.66704V6.66706H3.91681V7.66704H0.333496ZM0.333496 4.50037V3.50041H7.7886V4.50037H0.333496ZM0.333496 1.33372V0.33374H11.6668V1.33372H0.333496Z",fill:"currentColor"})}),bo=t=>e.jsxs("svg",{width:"1em",height:"1em",viewBox:"0 0 22 22",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("mask",{id:"mask0_5577_416",maskUnits:"userSpaceOnUse",x:"0",y:"0",width:"22",height:"22",children:e.jsx("rect",{width:"1em",height:"1em",fill:"currentColor"})}),e.jsx("g",{mask:"url(#mask0_5577_416)",children:e.jsx("path",{d:"M11 17.6634C10.6219 17.6634 10.2982 17.5287 10.0289 17.2595C9.75964 16.9902 9.625 16.6665 9.625 16.2884C9.625 15.9103 9.75964 15.5866 10.0289 15.3173C10.2982 15.0481 10.6219 14.9134 11 14.9134C11.3781 14.9134 11.7018 15.0481 11.971 15.3173C12.2403 15.5866 12.375 15.9103 12.375 16.2884C12.375 16.6665 12.2403 16.9902 11.971 17.2595C11.7018 17.5287 11.3781 17.6634 11 17.6634ZM11 12.3749C10.6219 12.3749 10.2982 12.2403 10.0289 11.971C9.75964 11.7018 9.625 11.3781 9.625 11C9.625 10.6218 9.75964 10.2982 10.0289 10.0289C10.2982 9.75962 10.6219 9.62498 11 9.62498C11.3781 9.62498 11.7018 9.75962 11.971 10.0289C12.2403 10.2982 12.375 10.6218 12.375 11C12.375 11.3781 12.2403 11.7018 11.971 11.971C11.7018 12.2403 11.3781 12.3749 11 12.3749ZM11 7.08648C10.6219 7.08648 10.2982 6.95184 10.0289 6.68257C9.75964 6.41332 9.625 6.08963 9.625 5.7115C9.625 5.33339 9.75964 5.0097 10.0289 4.74043C10.2982 4.47118 10.6219 4.33655 11 4.33655C11.3781 4.33655 11.7018 4.47118 11.971 4.74043C12.2403 5.0097 12.375 5.33339 12.375 5.7115C12.375 6.08963 12.2403 6.41332 11.971 6.68257C11.7018 6.95184 11.3781 7.08648 11 7.08648Z",fill:"currentColor"})})]}),vo=({topic:t,onClick:r,onSearch:n})=>{const[s,i]=z(w=>[w.ids,w.total]),[l,a]=x.useState(!1),o=t.date_added_to_graph.toString(),d=async(w,T)=>{a(!0);try{await ft(w,{muted_topic:T}),z.setState({ids:s.filter(_=>_!==w),total:i-1})}catch(_){console.warn(_)}},p=w=>{n(w.topic)},f=t.edgeList.slice(0,1),m=t.edgeList.length-f.length,[y,b]=E.useState(null),j=w=>{b(w.currentTarget)},u=()=>{b(null)},v=!!y;return e.jsxs(we,{children:[e.jsx(C,{className:"empty"}),e.jsx(C,{onClick:()=>p(t),children:e.jsx(wo,{children:t.topic})}),e.jsx(C,{children:t.edgeCount}),e.jsxs(C,{children:[e.jsx(Re,{anchorEl:y,anchorOrigin:{vertical:"top",horizontal:"center"},disableRestoreFocus:!0,id:"mouse-over-popover",onClose:u,open:v,sx:{pointerEvents:"none","& .MuiPaper-root":{backgroundColor:"rgba(0, 0, 0, 0.9)",borderRadius:"4px",width:"140px"}},transformOrigin:{vertical:"bottom",horizontal:"center"},children:e.jsx(qe,{sx:{p:1.5,fontSize:"13px",fontWeight:400,lineHeight:"1.8"},children:t.edgeList.join(", ")})}),f.join(", "),m>0&&e.jsx(qe,{"aria-haspopup":"true","aria-owns":v?"mouse-over-popover":void 0,component:"span",onMouseEnter:j,onMouseLeave:u,sx:{cursor:"context-menu"},children:",..."})]}),e.jsx(C,{children:e.jsx("span",{children:new Date(Number(o)*1e3).toDateString()})}),e.jsx(C,{className:"cell-center",children:e.jsx(h,{direction:"row",justify:"space-between",children:e.jsx("div",{className:"approve-wrapper",children:l?e.jsx($,{color:c.white,size:16}):e.jsx(e.Fragment,{children:t.muted_topic?e.jsx(ot,{className:"centered",onClick:()=>d(t.ref_id,!1),children:e.jsx(bt,{color:c.primaryGreen,fontSize:24})}):e.jsx(ot,{className:"centered",onClick:()=>d(t.ref_id,!0),children:e.jsx(vt,{color:c.primaryRed,fontSize:24})})})})})}),e.jsx(C,{children:e.jsx(ie,{onClick:w=>r(w,t.ref_id),children:e.jsx(bo,{"data-testid":"ThreeDotsIcons"})})})]},t.topic)},ot=g(h)`
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
`,wo=g.span`
  cursor: pointer;
  :hover {
    text-decoration: underline;
  }
`,Co=x.memo(vo),So=({showMuted:t,onTopicEdit:r,onChangeFilter:n})=>{const{close:s}=O("sourcesTable"),[i,l]=E.useState(null),[a,o]=E.useState(""),[d,p]=K(_=>[_.setSearchFormValue,_.setCurrentSearch]),[f,m]=z(_=>[_.data,_.ids]),y=x.useCallback((_,k)=>{l(_.currentTarget),o(k)},[]),b=()=>{l(null)},j=_=>{d(_),p(_),s()},u=_=>{r(a,_),b()},v=_=>{n(_)},w=!!i,T=w?"simple-popover":void 0;return f?e.jsx(e.Fragment,{children:Object.keys(f).length?e.jsxs(e.Fragment,{children:[e.jsxs(ye,{component:"table",children:[e.jsx(Ce,{children:e.jsxs(ce,{component:"tr",children:[e.jsx(C,{className:"empty"}),e.jsx(C,{children:e.jsxs(Ne,{onClick:()=>v(Me),children:["Name ",e.jsx(Le,{})]})}),e.jsx(C,{children:e.jsxs(Ne,{onClick:()=>v(Ir),children:["Count ",e.jsx(Le,{})]})}),e.jsx(C,{children:"Edge list"}),e.jsx(C,{children:e.jsxs(Ne,{onClick:()=>v(Br),children:["Date ",e.jsx(Le,{})]})}),e.jsx(C,{children:t?"Unmute":"Mute"}),e.jsx(C,{})]})}),f&&e.jsx("tbody",{children:m==null?void 0:m.map(_=>e.jsx(Co,{onClick:y,onSearch:j,topic:f[_]},_))})]}),a?e.jsxs(_o,{anchorEl:i,anchorOrigin:{vertical:"bottom",horizontal:"right"},id:T,onClose:b,open:w,transformOrigin:{vertical:"top",horizontal:"right"},children:[t?e.jsxs(re,{onClick:()=>u("unMute"),children:[" ",e.jsx(jo,{"data-testid":""})," Unmute"]}):e.jsxs(re,{onClick:()=>u("mute"),children:[" ",e.jsx(yo,{"data-testid":"VisibilityOff"})," Mute"]}),e.jsxs(re,{onClick:()=>u("editTopic"),children:[e.jsx(mo,{"data-testid":"EditTopicIcon"})," Rename"]}),e.jsxs(re,{onClick:()=>u("mergeTopic"),children:[e.jsx(go,{"data-testid":"MergeIcon"})," Merge"]}),e.jsxs(re,{onClick:()=>u("addEdge"),children:[e.jsx(fo,{"data-testid":"AddCircleIcon"})," Add edge"]})]}):null]}):e.jsxs(h,{children:[e.jsx(S,{children:"There is not any results for selected filters"}),e.jsx(ze,{})]})}):e.jsxs(h,{children:[e.jsx(S,{children:"There is not any results for selected filters"}),e.jsx(ze,{})]})},Ne=g.span`
  cursor: pointer;
  display: flex;
  gap: 4px;
  align-items: center;
`,re=g(h).attrs({direction:"row",px:12,py:8})`
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
`,_o=g(Re)`
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
`,To=()=>{const[t,r]=x.useState(!1),[n,s,i,l,a,o,d]=z(k=>[k.data,k.ids,k.total,k.setTopics,k.filters,k.setFilters,k.terminate]),{open:p}=O("editTopic"),{open:f}=O("mergeTopic"),{open:m}=O("addEdge"),[y,b]=x.useState(null),j={editTopic:p,mergeTopic:f,addEdge:m},u=x.useRef([]);x.useEffect(()=>{s.length&&(u.current=s)},[s]),x.useEffect(()=>{(async()=>{try{r(!0),await l()}catch{console.error("err")}finally{r(!1)}})()},[l,a]);const v=async()=>{try{r(!0),o({page:a.page+1})}catch(k){console.error("Error loading more data:",k)}finally{r(!1)}};x.useEffect(()=>()=>{d()},[d]);const w=k=>{o({sortBy:k})},T=()=>{b(null)},_=(k,P)=>{n&&(b(n[k]),typeof j[P]=="function"&&j[P]())};return e.jsxs(e.Fragment,{children:[e.jsxs(Ao,{direction:"column",justify:"flex-end",children:[e.jsxs(Se,{align:"flex-start",direction:"row",justify:"space-between",children:[e.jsx(S,{className:"title",children:"Topics"}),e.jsxs(R,{disabled:t,onClick:()=>o({muted:!a.muted}),size:"medium",children:[a.muted?"Show Unmuted":"Show Muted",t&&e.jsx($,{color:c.BLUE_PRESS_STATE,size:10})]})]}),e.jsx($o,{children:e.jsx(xo,{})}),e.jsx(ko,{align:"center",justify:t&&!n?"center":"flex-start",children:t&&!n?e.jsx($,{color:c.white}):e.jsxs(e.Fragment,{children:[e.jsx(So,{onChangeFilter:w,onTopicEdit:_,showMuted:a.muted}),i>s.length?e.jsxs(R,{className:"load-more",disabled:t,onClick:v,children:["Load more",t&&e.jsx($,{color:c.BLUE_PRESS_STATE,size:10})]}):null]})})]}),y&&e.jsx(uo,{onClose:T,topic:y}),y&&e.jsx(oo,{onClose:T,topic:y}),y&&e.jsx(to,{onClose:T,topic:y})]})},Ao=g(h)`
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
`,ko=g(h)`
  min-height: 0;
  overflow: auto;
  flex: 1;
  width: 100%;
`,$o=g(h).attrs({direction:"row",align:"center",justify:"space-between"})`
  padding: 0 36px;
  margin-bottom: 32px;
`;function Eo(t){return t.charAt(0).toUpperCase()+t.slice(1).toLowerCase()}const Lo=({node:t})=>{var n,s,i,l,a,o,d,p,f;function r(m){const y=new Date(Number(m)*1e3),b=y.getDate(),j=y.getMonth()+1,u=y.getFullYear();return`${b}/${j}/${u}`}return e.jsxs(we,{children:[e.jsx(C,{className:"empty"}),e.jsx(C,{children:(n=t==null?void 0:t.properties)!=null&&n.date_added_to_graph?r((s=t==null?void 0:t.properties)==null?void 0:s.date_added_to_graph):r((i=t==null?void 0:t.properties)==null?void 0:i.date)}),e.jsx(C,{children:t==null?void 0:t.node_type}),e.jsx(C,{children:(t==null?void 0:t.node_type)==="Tweet"?e.jsx(st,{href:`${Ze}${(l=t==null?void 0:t.properties)==null?void 0:l.tweet_id}${Ze.includes("?")?"&":"?"}open=system`,target:"_blank",children:(a=t==null?void 0:t.properties)==null?void 0:a.tweet_id}):e.jsx(st,{href:`${(o=t==null?void 0:t.properties)==null?void 0:o.source_link}${((d=t==null?void 0:t.properties)==null?void 0:d.source_link).includes("?")?"&":"?"}open=system`,target:"_blank",children:(p=t==null?void 0:t.properties)==null?void 0:p.source_link})}),e.jsx(C,{children:(f=t==null?void 0:t.properties)!=null&&f.status?Eo(t.properties.status):"Processing"})]})},st=g.a`
  color: ${c.white};
  text-decoration: underline;
  &:visited {
    color: ${c.white};
  }
`,No=x.memo(Lo),Po=({nodes:t})=>{const{open:r}=O("addContent"),n=async()=>{r()};return!t||(t==null?void 0:t.length)===0?e.jsx(e.Fragment,{children:e.jsxs(zo,{children:[e.jsx(Do,{align:"center",direction:"row",justify:"space-between",children:e.jsx(S,{className:"subtitle",children:"Contribute to the graph by adding content."})}),e.jsx(h,{children:e.jsx(R,{color:"secondary",onClick:n,size:"medium",startIcon:e.jsx(Hr,{}),type:"submit",variant:"contained",children:"Add Content"})})]})}):e.jsxs(ye,{component:"table",children:[e.jsx(Ce,{children:e.jsxs(ce,{component:"tr",children:[e.jsx(C,{className:"empty"}),e.jsx(C,{children:"Date"}),e.jsx(C,{children:"Type"}),e.jsx(C,{children:"Source"}),e.jsx(C,{children:"Status"})]})}),e.jsx("tbody",{children:t==null?void 0:t.map(s=>e.jsx(No,{node:s},s==null?void 0:s.ref_id))})]})},zo=Be(h)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 100px auto;
  width: 100%;
`,Do=Be(h)`
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
`,Io=()=>{const[t,r]=x.useState(!0),[n,s]=x.useState([]);return x.useEffect(()=>{(async()=>{try{const l=await nr();s(l.nodes),r(!1)}catch(l){console.error("Error fetching data:",l),r(!1)}})()},[]),e.jsxs(Bo,{direction:"column",justify:"flex-end",children:[e.jsx(Se,{align:"center",direction:"row",justify:"space-between",children:e.jsx(S,{className:"title",children:"Content I've added to the graph"})}),e.jsx(Oo,{align:"center",justify:t?"center":"flex-start",children:t?e.jsx($,{color:c.white}):e.jsx(e.Fragment,{children:e.jsx(Po,{nodes:n})})})]})},Bo=g(h)`
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
`,Oo=g(h)`
  min-height: 0;
  overflow: auto;
  flex: 1;
  width: 100%;
`,Mo=[{label:At,component:Io},{label:Or,component:Rn},{label:Tt,component:kn},{label:_t,component:To}],Ro=t=>{const{children:r,value:n,index:s,...i}=t;return n===s?e.jsx(Uo,{"aria-labelledby":`simple-tab-${s}`,hidden:n!==s,id:`simple-tabpanel-${s}`,role:"tabpanel",...i,children:r}):null};function Fo(t){return{id:`simple-tab-${t}`,"aria-controls":`simple-tabpanel-${t}`}}const Wo=()=>{const[t,r]=x.useState(0),[n]=se(o=>[o.isAdmin]),[s]=Mt(o=>[o.queuedSourcesFlag]),i=Rt(),l=(o,d)=>{r(d)},a=Mo.filter(({label:o})=>o===_t?n:o===Tt?n&&s:o===At?i:!0);return e.jsxs(Ho,{direction:"column",children:[e.jsx(Vo,{"aria-label":"sources tabs",onChange:l,value:t,children:a.map((o,d)=>e.jsx(Go,{color:c.white,disableRipple:!0,label:o.label,...Fo(d)},o.label))}),a.map((o,d)=>e.jsx(Ro,{index:d,value:t,children:e.jsx(o.component,{})},o.label))]})},Vo=g(Yr)`
  && {
    background: rgba(0, 0, 0, 0.2);

    .MuiTabs-indicator {
      background: ${c.primaryBlue};
    }
  }
`,Go=g(Zr)`
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
`,Uo=g(h)`
  display: flex;
  flex: 1;
  min-height: 572px;
  padding: 20px 0;
  max-height: 572px;
`,Ho=g(h)`
  min-height: 0;
  flex: 1;
`,xe={required:{message:"The field is required",value:!0}},Yo=({initialValues:t})=>{const r=ae({defaultValues:t,mode:"onSubmit"}),{isSubmitting:n}=r.formState,s=r.handleSubmit(async i=>{try{await or(i)}catch(l){console.warn(l)}});return e.jsx(le,{...r,children:e.jsx("form",{id:"add-node-form",onSubmit:s,children:e.jsxs(e.Fragment,{children:[e.jsxs(h,{children:[e.jsx(h,{pt:12,children:e.jsx(ne,{id:"cy-about-title-id",label:"Graph Title",maxLength:50,name:"title",placeholder:"Type graph title here...",rules:{...xe}})}),e.jsx(h,{pt:12,children:e.jsx(ne,{id:"cy-about-id",label:"Graph Description",maxLength:50,name:"description",placeholder:"Type graph description here...",rules:{...xe}})}),e.jsx(h,{pt:12,children:e.jsx(ne,{id:"cy-about-mission_statement-id",label:"Mission Statement",maxLength:50,name:"mission_statement",placeholder:"Type mission statement here...",rules:{...xe}})}),e.jsx(h,{pt:12,children:e.jsx(ne,{id:"cy-about-search_term-id",label:"Search Term",maxLength:50,name:"search_term",placeholder:"Type search term here...",rules:{...xe}})})]}),e.jsx(h,{pt:8,children:n?e.jsx(Zo,{children:e.jsx($,{color:c.white,size:20})}):e.jsx($t,{disabled:n,id:"add-node-submit-cta",kind:"big",type:"submit",children:"Save changes"})})]})})})},Zo=g(h).attrs({align:"center",background:"primaryButton",borderRadius:8,justify:"center"})`
  padding: 16px 24px;
  opacity: 0.5;
`,Ko=({initialValues:t})=>e.jsxs(e.Fragment,{children:[t.title&&e.jsxs(h,{pt:12,children:[e.jsx(S,{kind:"regular",children:"Graph Title"}),e.jsx(h,{pt:12,children:e.jsx(S,{className:"value",kind:"medium",children:t.title})})]}),t.description&&e.jsxs(h,{pt:12,children:[e.jsx(S,{kind:"regular",children:"Graph Description"}),e.jsx(h,{pt:12,children:e.jsx(S,{className:"value",kind:"medium",children:t.description})})]}),t.mission_statement&&e.jsxs(h,{pt:12,children:[e.jsx(S,{kind:"regular",children:"Mission Statement"}),e.jsx(h,{pt:12,children:e.jsx(S,{className:"value",kind:"medium",children:t.mission_statement})})]})]}),qo=()=>{const[t]=se(n=>[n.isAdmin]),r=K(n=>n.appMetaData);return e.jsxs(Qo,{align:"stretch",direction:"column",justify:"flex-end",children:[e.jsx(Jo,{align:"center",direction:"row",justify:"space-between",children:e.jsx(S,{className:"title",children:"About"})}),e.jsx(Xo,{align:"stretch",justify:"flex-start",children:t?e.jsx(Yo,{initialValues:r}):e.jsx(Ko,{initialValues:r})})]})},Qo=g(h)`
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
`,Xo=g(h)`
  min-height: 0;
  overflow: auto;
  flex: 1;
  width: 100%;
`,Jo=g(h)`
  margin-bottom: 16px;
  ${S} {
    margin-bottom: 0;
  }
`;var es=["type","layout","connectNulls","ref"];function Y(t){"@babel/helpers - typeof";return Y=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},Y(t)}function ts(t,r){if(t==null)return{};var n=rs(t,r),s,i;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(i=0;i<l.length;i++)s=l[i],!(r.indexOf(s)>=0)&&Object.prototype.propertyIsEnumerable.call(t,s)&&(n[s]=t[s])}return n}function rs(t,r){if(t==null)return{};var n={},s=Object.keys(t),i,l;for(l=0;l<s.length;l++)i=s[l],!(r.indexOf(i)>=0)&&(n[i]=t[i]);return n}function oe(){return oe=Object.assign?Object.assign.bind():function(t){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(t[s]=n[s])}return t},oe.apply(this,arguments)}function it(t,r){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);r&&(s=s.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,s)}return n}function N(t){for(var r=1;r<arguments.length;r++){var n=arguments[r]!=null?arguments[r]:{};r%2?it(Object(n),!0).forEach(function(s){D(t,s,n[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):it(Object(n)).forEach(function(s){Object.defineProperty(t,s,Object.getOwnPropertyDescriptor(n,s))})}return t}function V(t){return is(t)||ss(t)||os(t)||ns()}function ns(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function os(t,r){if(t){if(typeof t=="string")return De(t,r);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return De(t,r)}}function ss(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function is(t){if(Array.isArray(t))return De(t)}function De(t,r){(r==null||r>t.length)&&(r=t.length);for(var n=0,s=new Array(r);n<r;n++)s[n]=t[n];return s}function as(t,r){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")}function at(t,r){for(var n=0;n<r.length;n++){var s=r[n];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,Et(s.key),s)}}function ls(t,r,n){return r&&at(t.prototype,r),n&&at(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function cs(t,r){if(typeof r!="function"&&r!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(r&&r.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),r&&Ie(t,r)}function Ie(t,r){return Ie=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(s,i){return s.__proto__=i,s},Ie(t,r)}function ds(t){var r=hs();return function(){var s=ge(t),i;if(r){var l=ge(this).constructor;i=Reflect.construct(s,arguments,l)}else i=s.apply(this,arguments);return ps(this,i)}}function ps(t,r){if(r&&(Y(r)==="object"||typeof r=="function"))return r;if(r!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return B(t)}function B(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function hs(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function ge(t){return ge=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},ge(t)}function D(t,r,n){return r=Et(r),r in t?Object.defineProperty(t,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[r]=n,t}function Et(t){var r=us(t,"string");return Y(r)==="symbol"?r:String(r)}function us(t,r){if(Y(t)!=="object"||t===null)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var s=n.call(t,r||"default");if(Y(s)!=="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(t)}var de=function(t){cs(n,t);var r=ds(n);function n(){var s;as(this,n);for(var i=arguments.length,l=new Array(i),a=0;a<i;a++)l[a]=arguments[a];return s=r.call.apply(r,[this].concat(l)),D(B(s),"state",{isAnimationFinished:!0,totalLength:0}),D(B(s),"generateSimpleStrokeDasharray",function(o,d){return"".concat(d,"px ").concat(o-d,"px")}),D(B(s),"getStrokeDasharray",function(o,d,p){var f=p.reduce(function(T,_){return T+_});if(!f)return s.generateSimpleStrokeDasharray(d,o);for(var m=Math.floor(o/f),y=o%f,b=d-o,j=[],u=0,v=0;u<p.length;v+=p[u],++u)if(v+p[u]>y){j=[].concat(V(p.slice(0,u)),[y-v]);break}var w=j.length%2===0?[0,b]:[b];return[].concat(V(n.repeat(p,m)),V(j),w).map(function(T){return"".concat(T,"px")}).join(", ")}),D(B(s),"id",ur("recharts-line-")),D(B(s),"pathRef",function(o){s.mainCurve=o}),D(B(s),"handleAnimationEnd",function(){s.setState({isAnimationFinished:!0}),s.props.onAnimationEnd&&s.props.onAnimationEnd()}),D(B(s),"handleAnimationStart",function(){s.setState({isAnimationFinished:!1}),s.props.onAnimationStart&&s.props.onAnimationStart()}),s}return ls(n,[{key:"componentDidMount",value:function(){if(this.props.isAnimationActive){var i=this.getTotalLength();this.setState({totalLength:i})}}},{key:"componentDidUpdate",value:function(){if(this.props.isAnimationActive){var i=this.getTotalLength();i!==this.state.totalLength&&this.setState({totalLength:i})}}},{key:"getTotalLength",value:function(){var i=this.mainCurve;try{return i&&i.getTotalLength&&i.getTotalLength()||0}catch{return 0}}},{key:"renderErrorBar",value:function(i,l){if(this.props.isAnimationActive&&!this.state.isAnimationFinished)return null;var a=this.props,o=a.points,d=a.xAxis,p=a.yAxis,f=a.layout,m=a.children,y=xr(m,fr);if(!y)return null;var b=function(v,w){return{x:v.x,y:v.y,value:v.value,errorVal:gt(v.payload,w)}},j={clipPath:i?"url(#clipPath-".concat(l,")"):null};return E.createElement(Te,j,y.map(function(u){return E.cloneElement(u,{key:"bar-".concat(u.props.dataKey),data:o,xAxis:d,yAxis:p,layout:f,dataPointFormatter:b})}))}},{key:"renderDots",value:function(i,l,a){var o=this.props.isAnimationActive;if(o&&!this.state.isAnimationFinished)return null;var d=this.props,p=d.dot,f=d.points,m=d.dataKey,y=ue(this.props),b=ue(p,!0),j=f.map(function(v,w){var T=N(N(N({key:"dot-".concat(w),r:3},y),b),{},{value:v.value,dataKey:m,cx:v.x,cy:v.y,index:w,payload:v.payload});return n.renderDotItem(p,T)}),u={clipPath:i?"url(#clipPath-".concat(l?"":"dots-").concat(a,")"):null};return E.createElement(Te,oe({className:"recharts-line-dots",key:"dots"},u),j)}},{key:"renderCurveStatically",value:function(i,l,a,o){var d=this.props,p=d.type,f=d.layout,m=d.connectNulls;d.ref;var y=ts(d,es),b=N(N(N({},ue(y,!0)),{},{fill:"none",className:"recharts-line-curve",clipPath:l?"url(#clipPath-".concat(a,")"):null,points:i},o),{},{type:p,layout:f,connectNulls:m});return E.createElement(mr,oe({},b,{pathRef:this.pathRef}))}},{key:"renderCurveWithAnimation",value:function(i,l){var a=this,o=this.props,d=o.points,p=o.strokeDasharray,f=o.isAnimationActive,m=o.animationBegin,y=o.animationDuration,b=o.animationEasing,j=o.animationId,u=o.animateNewValues,v=o.width,w=o.height,T=this.state,_=T.prevPoints,k=T.totalLength;return E.createElement(gr,{begin:m,duration:y,isActive:f,easing:b,from:{t:0},to:{t:1},key:"line-".concat(j),onAnimationEnd:this.handleAnimationEnd,onAnimationStart:this.handleAnimationStart},function(P){var A=P.t;if(_){var q=_.length/d.length,F=d.map(function(L,_e){var J=Math.floor(_e*q);if(_[J]){var ee=_[J],W=te(ee.x,L.x),Lt=te(ee.y,L.y);return N(N({},L),{},{x:W(A),y:Lt(A)})}if(u){var Nt=te(v*2,L.x),Pt=te(w/2,L.y);return N(N({},L),{},{x:Nt(A),y:Pt(A)})}return N(N({},L),{},{x:L.x,y:L.y})});return a.renderCurveStatically(F,i,l)}var pe=te(0,k),Q=pe(A),X;if(p){var he="".concat(p).split(/[,\s]+/gim).map(function(L){return parseFloat(L)});X=a.getStrokeDasharray(Q,k,he)}else X=a.generateSimpleStrokeDasharray(k,Q);return a.renderCurveStatically(d,i,l,{strokeDasharray:X})})}},{key:"renderCurve",value:function(i,l){var a=this.props,o=a.points,d=a.isAnimationActive,p=this.state,f=p.prevPoints,m=p.totalLength;return d&&o&&o.length&&(!f&&m>0||!yr(f,o))?this.renderCurveWithAnimation(i,l):this.renderCurveStatically(o,i,l)}},{key:"render",value:function(){var i,l=this.props,a=l.hide,o=l.dot,d=l.points,p=l.className,f=l.xAxis,m=l.yAxis,y=l.top,b=l.left,j=l.width,u=l.height,v=l.isAnimationActive,w=l.id;if(a||!d||!d.length)return null;var T=this.state.isAnimationFinished,_=d.length===1,k=He("recharts-line",p),P=f&&f.allowDataOverflow,A=m&&m.allowDataOverflow,q=P||A,F=Pe(w)?this.id:w,pe=(i=ue(o))!==null&&i!==void 0?i:{r:3,strokeWidth:2},Q=pe.r,X=Q===void 0?3:Q,he=pe.strokeWidth,L=he===void 0?2:he,_e=jr(o)?o:{},J=_e.clipDot,ee=J===void 0?!0:J,W=X*2+L;return E.createElement(Te,{className:k},P||A?E.createElement("defs",null,E.createElement("clipPath",{id:"clipPath-".concat(F)},E.createElement("rect",{x:P?b:b-j/2,y:A?y:y-u/2,width:P?j:j*2,height:A?u:u*2})),!ee&&E.createElement("clipPath",{id:"clipPath-dots-".concat(F)},E.createElement("rect",{x:b-W/2,y:y-W/2,width:j+W,height:u+W}))):null,!_&&this.renderCurve(q,F),this.renderErrorBar(q,F),(_||o)&&this.renderDots(q,ee,F),(!v||T)&&br.renderCallByParent(this.props,d))}}],[{key:"getDerivedStateFromProps",value:function(i,l){return i.animationId!==l.prevAnimationId?{prevAnimationId:i.animationId,curPoints:i.points,prevPoints:l.curPoints}:i.points!==l.curPoints?{curPoints:i.points}:null}},{key:"repeat",value:function(i,l){for(var a=i.length%2!==0?[].concat(V(i),[0]):i,o=[],d=0;d<l;++d)o=[].concat(V(o),V(a));return o}},{key:"renderDotItem",value:function(i,l){var a;if(E.isValidElement(i))a=E.cloneElement(i,l);else if(Ft(i))a=i(l);else{var o=He("recharts-line-dot",i?i.className:"");a=E.createElement(mt,oe({},l,{className:o}))}return a}}]),n}(x.PureComponent);D(de,"displayName","Line");D(de,"defaultProps",{xAxisId:0,yAxisId:0,connectNulls:!1,activeDot:!0,dot:!0,legendType:"line",stroke:"#3182bd",strokeWidth:1,fill:"#fff",points:[],isAnimationActive:!hr.isSsr,animateNewValues:!0,animationBegin:0,animationDuration:1500,animationEasing:"ease",hide:!1,label:!1});D(de,"getComposedData",function(t){var r=t.props,n=t.xAxis,s=t.yAxis,i=t.xAxisTicks,l=t.yAxisTicks,a=t.dataKey,o=t.bandSize,d=t.displayedData,p=t.offset,f=r.layout,m=d.map(function(y,b){var j=gt(y,a);return f==="horizontal"?{x:Ye({axis:n,ticks:i,bandSize:o,entry:y,index:b}),y:Pe(j)?null:s.scale(j),value:j,payload:y}:{x:Pe(j)?null:n.scale(j),y:Ye({axis:s,ticks:l,bandSize:o,entry:y,index:b}),value:j,payload:y}});return N({points:m,layout:f},p)});var xs=vr({chartName:"LineChart",GraphicalChild:de,axisComponents:[{axisType:"xAxis",AxisComp:yt},{axisType:"yAxis",AxisComp:jt}],formatAxisMap:wr});const fs=({cx:t,cy:r})=>e.jsx(mt,{cx:t,cy:r,fill:c.blueTextAccent,r:2}),ms=({data:t,width:r=500,height:n=300})=>e.jsx(e.Fragment,{children:(t==null?void 0:t.length)&&e.jsxs(xs,{data:t,height:n,id:"cy-sentiment-chart",margin:{bottom:5,left:-20,right:30,top:5},width:r,children:[e.jsx(Cr,{stroke:c.lightBlue300,strokeDasharray:"5 5"}),e.jsx(yt,{dataKey:"date",interval:Math.floor(t.length/3),stroke:c.blueTextAccent}),e.jsx(jt,{domain:[0,10],stroke:c.blueTextAccent}),e.jsx(Sr,{}),e.jsx(de,{dataKey:"score",dot:e.jsx(fs,{}),stroke:"#8884d8",type:"monotone"})]})}),gs=()=>{const[t,r]=x.useState(void 0),[n]=se(a=>[a.setBudget]),[s,i]=x.useState(!1),l=async()=>{i(!0),sr(n).then(async a=>{r(a==null?void 0:a.data.filter(o=>o.date).map(o=>({date:Vt.unix(Number(String(o.date).split(".")[0])).format("MM/DD/YY"),score:o.sentiment_score}))),await dt(n)}).catch().finally(()=>{i(!1)})};return e.jsxs(ys,{align:"flex-start",direction:"column",id:"cy-sentiment-chart-wrapper",justify:"flex-end",children:[e.jsx(S,{className:"title",children:"Sentiment chart"}),s&&e.jsx(Ur,{alignItems:"center",component:"div",flexGrow:1,p:4,spacing:2,width:"100%",children:e.jsx(Wt,{color:c.white})}),!(t!=null&&t.length)&&e.jsx(js,{className:"button",id:"cy-get-sentiments-btn",onClick:l,children:"Get top 100 sentiments"}),e.jsx(ms,{data:t})]})},ys=g(h)`
  border-radius: 8px;
  box-shadow: 0px 5px 6px rgb(0 0 0 / 50%);
  padding: 16px;

  .title {
    margin-bottom: 16px;
    font-size: 20px;
  }
`,js=g($t)`
  height: 48px;
`,bs=600,vs={about:e.jsx(qo,{}),sentiment:e.jsx(gs,{}),sources:e.jsx(Wo,{}),"":null},ws=()=>{const[t,r]=K(n=>[n.secondarySidebarActiveTab,n.setSecondarySidebarActiveTab]);return e.jsx(_r,{direction:"left",in:!!t,mountOnEnter:!0,unmountOnExit:!0,children:e.jsxs(Cs,{id:"secondary-sidebar-wrapper",children:[e.jsx(Ss,{id:"cy-close-secondary-sidebar",onClick:()=>r(""),children:e.jsx(wt,{})}),vs[t]]})})},Cs=g(h)(({theme:t})=>({background:c.BG1,height:"100vh",padding:"16px 20px",width:"100%",zIndex:30,display:"flex",[t.breakpoints.up("sm")]:{width:bs}})),Ss=g(h).attrs({align:"center",justify:"center",p:5})`
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
`,_s=g(ir)`
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
`,Ts=g(h)`
  height: 100%;
  width: 100%;
  background-color: ${c.black};
`,As=g(h)`
  position: absolute;
  bottom: 8px;
  left: 8px;
  color: ${c.white};
  font-size: 12px;
  opacity: 0.5;
`,ks=x.lazy(()=>I(()=>import("./index-8fe65064.js"),["assets/index-8fe65064.js","assets/index-8a12d07f.js","assets/index-3f17fe3b.css","assets/SourcesTableIcon-0291212e.js","assets/SettingsIcon-de5e18cd.js","assets/index-fcf664db.js","assets/index.esm-b5fe068c.js","assets/react-toastify.esm-93f93bff.js","assets/react-toastify-b60658ac.css","assets/index-7c4aea71.js"]).then(({MainToolbar:t})=>({default:t}))),$s=x.lazy(()=>I(()=>import("./index-872b2c7c.js"),["assets/index-872b2c7c.js","assets/index-8a12d07f.js","assets/index-3f17fe3b.css","assets/EditIcon-5c1ee031.js","assets/react-toastify.esm-93f93bff.js","assets/react-toastify-b60658ac.css","assets/generateCategoricalChart-03b29371.js","assets/Popover-ac86cd5f.js","assets/useSlotProps-5ee0f16c.js","assets/InfoIcon-537b5032.js","assets/index-b8812a35.js","assets/index.esm-b5fe068c.js","assets/PlusIcon-baadb478.js","assets/index-7c4aea71.js","assets/NoFilterResultIcon-5dae9fd0.js","assets/ChevronUpIcon-8751c090.js","assets/index-0804c30b.js","assets/index-db023ead.js","assets/index-aa3a38ea.js","assets/index-6c710d98.js","assets/Popper-51e0901c.js","assets/CheckIcon-302ad75f.js","assets/Stack-df61ce92.js"]).then(({Universe:t})=>({default:t}))),Es=x.lazy(()=>I(()=>import("./index-cdb866bd.js"),["assets/index-cdb866bd.js","assets/index-8a12d07f.js","assets/index-3f17fe3b.css","assets/react-toastify.esm-93f93bff.js","assets/react-toastify-b60658ac.css","assets/SoundIcon-778fd598.js","assets/Select-5c1c6aab.js","assets/Popover-ac86cd5f.js","assets/useSlotProps-5ee0f16c.js","assets/ChevronUpIcon-8751c090.js","assets/generateCategoricalChart-03b29371.js","assets/InfoIcon-537b5032.js","assets/CheckIcon-302ad75f.js","assets/index.esm-b5fe068c.js","assets/toastMessage-a8fcdb29.js","assets/SoundIcon-6125620a.css","assets/index-b8812a35.js","assets/Skeleton-e3e8c059.js","assets/PlusIcon-baadb478.js","assets/index-7c4aea71.js","assets/index-6c710d98.js"]).then(({SideBar:t})=>({default:t}))),Ls=()=>{const[t,r]=se(A=>[A.setBudget,A.setNodeCount]),[n,s]=x.useState(!1),{setSidebarOpen:i,currentSearch:l,setCurrentSearch:a,setRelevanceSelected:o,setTranscriptOpen:d}=K(A=>A),p=Tr(A=>A.setTeachMeAnswer),{data:f,setData:m,fetchData:y,graphStyle:b,setSelectedNode:j,setCategoryFilter:u}=Z(A=>A),v=ar(),w=ae({mode:"onChange"}),T=w.handleSubmit(({search:A})=>{d(!1),j(null),o(!1),a(A),p(""),u(null)}),_=x.useCallback(async()=>{await y(t,{...l?{word:l}:{}}),i(!0),l?await dt(t):j(null)},[y,t,l,i,j]);x.useEffect(()=>{_()},[l,_]);const k=()=>{if(f){s(!0);const A=pr(b,f.nodes);setTimeout(()=>{m(A),s(!1)},1e3)}};x.useEffect(()=>{k()},[b]);const P=x.useCallback(()=>{r("INCREMENT")},[r]);return x.useEffect(()=>{v&&(v.on("connect_error",A=>{console.error("Socket connection error:",A)}),v.on("newnode",P))},[v,P]),x.useEffect(()=>()=>{v&&v.disconnect()},[v]),e.jsxs(e.Fragment,{children:[e.jsx(lr,{}),e.jsx(wn,{}),e.jsx(cr,{hidden:!Gt}),e.jsx(x.Suspense,{fallback:e.jsx("div",{children:"Loading..."}),children:e.jsxs(Ts,{direction:"row",children:[e.jsx(Ar,{children:e.jsxs(le,{...w,children:[e.jsx(ks,{}),e.jsx(Es,{onSubmit:T}),e.jsx($s,{}),n&&e.jsx(cn,{fullSize:!1}),e.jsx(an,{}),e.jsx(ws,{}),e.jsx(jn,{}),e.jsxs(As,{children:["v",dr]}),e.jsx(pt,{})]})}),e.jsx(yn,{}),e.jsx(_s,{}),e.jsx(Tn,{})]})})]})},Zs=Object.freeze(Object.defineProperty({__proto__:null,App:Ls},Symbol.toStringTag,{value:"Module"}));export{an as O,cn as P,Wo as S,Zs as i};
