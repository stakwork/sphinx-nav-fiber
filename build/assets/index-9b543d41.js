import{c as lt,_ as fe,r as u,u as Nt,a as Bt,j as e,F as h,T as _,s as x,b as c,d as z,m as zt,e as Ot,f as Ve,Y as Ge,R as Ue,g as ie,l as ct,h as Dt,i as E,k as Mt,n as Rt,o as Ft,P as Wt,p as Vt,q as dt,t as Gt}from"./index-fbea16ad.js";import{g as Ut,a as Ht,s as Me,c as Yt,b as Zt,A as Kt,u as K,d as pt,e as q,f as M,C as $,S as qt,h as Qt,B as W,i as Xt,j as ht,k as ut,I as F,p as Jt,l as H,m as ye,n as xt,o as er,q as ae,F as le,r as tr,t as ft,v as rr,w as nr,x as or,y as sr,Q as ir,z as ar,G as lr,L as cr,D as dr,E as pr}from"./react-toastify.esm-ee4152bf.js";import{f as He,G as hr,u as ur,c as Ye,D as mt,a as xr,E as fr,L as Te,b as ue,C as mr,A as gr,i as re,d as yr,e as Ne,g as jr,h as br,j as gt,k as Ze,l as Cr,X as yt,Y as jt,m as wr,n as vr,T as Sr,S as _r,o as Tr,p as kr}from"./generateCategoricalChart-491cd6ff.js";import{M as Ar,a as $r,b as Er,c as Lr,d as bt,e as Ir}from"./index.esm-08135425.js";import{T as Pr,a as ce,b as Nr,F as Be,M as je,C as Ct,N as Br,c as zr,D as wt,d as Or}from"./ChevronUpIcon-d81cc681.js";import{s as Y,T as vt,A as Re,u as N,I as Dr,E as Mr,D as Rr,a as Ke,b as St,Q as _t,V as Tt,S as Fr}from"./index-ce67f34a.js";import{P as be,I as Ce,a as Fe,F as Wr}from"./Popover-29078010.js";import{B as Vr,T as oe}from"./index-c28e550d.js";import{u as D}from"./index-73d5b24f.js";import{B as We}from"./index-7b5195df.js";import{P as kt}from"./Popper-f1095716.js";import{C as At}from"./CheckIcon-190c4154.js";import{C as Gr}from"./ChevronDownIcon-83c66862.js";import{e as Ur,S as Hr}from"./Stack-6ea30c66.js";import{P as Yr}from"./PlusIcon-8b46e117.js";import{T as Zr,a as Kr,B as $t}from"./index-e2f44253.js";function qr(t){return Ut("MuiTypography",t)}Ht("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);const Qr=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],Xr=t=>{const{align:r,gutterBottom:o,noWrap:s,paragraph:i,variant:l,classes:a}=t,n={root:["root",l,t.align!=="inherit"&&`align${lt(r)}`,o&&"gutterBottom",s&&"noWrap",i&&"paragraph"]};return Zt(n,qr,a)},Jr=Me("span",{name:"MuiTypography",slot:"Root",overridesResolver:(t,r)=>{const{ownerState:o}=t;return[r.root,o.variant&&r[o.variant],o.align!=="inherit"&&r[`align${lt(o.align)}`],o.noWrap&&r.noWrap,o.gutterBottom&&r.gutterBottom,o.paragraph&&r.paragraph]}})(({theme:t,ownerState:r})=>fe({margin:0},r.variant==="inherit"&&{font:"inherit"},r.variant!=="inherit"&&t.typography[r.variant],r.align!=="inherit"&&{textAlign:r.align},r.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},r.gutterBottom&&{marginBottom:"0.35em"},r.paragraph&&{marginBottom:16})),qe={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},en={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},tn=t=>en[t]||t,rn=u.forwardRef(function(r,o){const s=Nt({props:r,name:"MuiTypography"}),i=tn(s.color),l=Ur(fe({},s,{color:i})),{align:a="inherit",className:n,component:d,gutterBottom:p=!1,noWrap:y=!1,paragraph:m=!1,variant:g="body1",variantMapping:j=qe}=l,b=Bt(l,Qr),f=fe({},l,{align:a,color:i,className:n,component:d,gutterBottom:p,noWrap:y,paragraph:m,variant:g,variantMapping:j}),C=d||(m?"p":j[g]||qe[g])||"span",w=Xr(f);return e.jsx(Jr,fe({as:C,ref:o,ownerState:f,className:Yt(w.root,n)},b))}),Qe=rn;function ze(t){const r=new Date(Number(t)*1e3),o=r.getFullYear(),s=(1+r.getMonth()).toString().padStart(2,"0");return`${r.getDate().toString().padStart(2,"0")}/${s}/${o}`}const nn=({twitterHandle:t})=>e.jsx(e.Fragment,{children:e.jsx(h,{direction:"row",children:e.jsx(h,{align:"flex-start",pb:12,children:e.jsxs(_,{children:["Tweet by @",t]})})})}),on=x(h)(({theme:t})=>({position:"absolute",top:"65px",right:"55px",width:"300px",pointerEvents:"none",background:c.dashboardHeader,boxShadow:"0px 1px 6px rgba(0, 0, 0, 0.1)",color:c.primaryText1,zIndex:100,transition:"opacity 0.6s",padding:t.spacing(2,3),[t.breakpoints.down("sm")]:{padding:t.spacing(1,1.5)}})),sn=x(h)`
  width: 22.5%;
`,an=({node:t})=>{if(!t)return null;const{node_type:r,show_title:o,episode_title:s,description:i,label:l,text:a,type:n,twitter_handle:d}=t,p=t.guests;let y=!1,m=!1;p&&(p.length&&p[0]!==null&&(y=!0),typeof p[0]=="object"&&(m=!0));let g=t.image_url;if(n==="twitter_space"&&(g="twitter_placeholder.png"),g==null)switch(r){case"guest":g="person_placeholder2.png";break;default:g="noimage.jpeg"}return r==="topic"?null:e.jsx(on,{borderRadius:8,px:24,py:16,children:r==="tweet"?e.jsx(nn,{twitterHandle:d}):e.jsxs(e.Fragment,{children:[e.jsxs(h,{direction:"row",children:[e.jsx(sn,{}),e.jsx(h,{align:"flex-start",pb:12,children:e.jsx(_,{children:r==null?void 0:r.toUpperCase()})})]}),e.jsxs(h,{direction:"row",children:[e.jsx(h,{pr:12,children:e.jsx(Kt,{src:g,type:"person"})}),e.jsxs("div",{children:[n==="guest"?e.jsxs(h,{direction:"column",children:[e.jsx(_,{children:l}),a&&e.jsx(h,{pt:4,children:e.jsxs(_,{color:"primaryText1",kind:"tiny",children:["@",a]})})]}):e.jsx(_,{color:"primaryText1",kind:"tiny",children:o}),e.jsxs(h,{pt:4,children:[r==="clip"||r==="episode"&&e.jsx(_,{color:"primaryText1",children:"Episode"}),r==="clip"?e.jsx(_,{as:"div",kind:"regularBold",children:He(i)}):e.jsx(_,{color:"primaryText1",kind:"tiny",children:s})]}),e.jsxs(h,{pt:12,children:[r==="clip"&&e.jsx(_,{color:"primaryText1",children:"Episode"}),e.jsx(_,{color:"primaryText1",kind:"tiny",children:r==="clip"?s:He(i)})]}),y&&e.jsxs(h,{pt:12,children:[e.jsx(_,{color:"primaryText1",children:"People"}),e.jsx(h,{pt:4,children:e.jsx(_,{color:"primaryText1",kind:"tiny",children:m?p.map(j=>j.name?j.name:`@${j.twitter_handle}`).join(", "):p==null?void 0:p.join(", ")})})]})]})]})]})})},ln=()=>{const[t]=K(r=>[r.hoveredNode]);return e.jsxs(cn,{children:[t&&e.jsx("div",{id:"tooltip-portal",children:e.jsx(an,{node:t})}),e.jsx(pt,{})]})},cn=x("div")(({theme:t})=>({position:"absolute",zIndex:1,top:0,left:0,userSelect:"none",pointerEvents:"none",display:"flex",justifyContent:"flex-end",alignItems:"flex-start",height:"100%",width:"100%",padding:"16px",[t.breakpoints.down("sm")]:{top:50}})),dn=({fullSize:t=!0})=>{const r=q(o=>o.sidebarIsOpen);return e.jsx(pn,{align:"center",className:M({"sidebar-is-open":r&&!t}),justify:"center",children:e.jsx($,{color:c.SECONDARY_BLUE,size:64})})},pn=x(h)`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  background-color: ${c.black};
  z-index: 1;
`,hn=u.lazy(()=>z(()=>import("./index-9994c65b.js"),["assets/index-9994c65b.js","assets/index-fbea16ad.js","assets/index-3f17fe3b.css","assets/index-7b5195df.js","assets/index-73d5b24f.js","assets/react-toastify.esm-ee4152bf.js","assets/react-toastify-b60658ac.css","assets/index-e2f44253.js","assets/useSlotProps-22211fec.js","assets/index-c28e550d.js","assets/index.esm-08135425.js","assets/InfoIcon-8f72a8b2.js","assets/PlusIcon-8b46e117.js","assets/ChevronUpIcon-d81cc681.js","assets/ChevronDownIcon-83c66862.js","assets/Popover-29078010.js","assets/generateCategoricalChart-491cd6ff.js","assets/index-ce67f34a.js","assets/Popper-f1095716.js","assets/CheckIcon-190c4154.js","assets/Stack-6ea30c66.js"]).then(({SettingsModal:t})=>({default:t}))),un=u.lazy(()=>z(()=>import("./index-832b76f6.js"),["assets/index-832b76f6.js","assets/index-fbea16ad.js","assets/index-3f17fe3b.css","assets/react-toastify.esm-ee4152bf.js","assets/react-toastify-b60658ac.css","assets/index-7b5195df.js","assets/index-73d5b24f.js","assets/index-945068c3.js","assets/index.esm-08135425.js","assets/CheckIcon-190c4154.js","assets/index-c28e550d.js","assets/InfoIcon-8f72a8b2.js"]).then(({AddContentModal:t})=>({default:t}))),xn=u.lazy(()=>z(()=>import("./index-1e350dad.js"),["assets/index-1e350dad.js","assets/index-fbea16ad.js","assets/index-3f17fe3b.css","assets/react-toastify.esm-ee4152bf.js","assets/react-toastify-b60658ac.css","assets/index-7b5195df.js","assets/index-73d5b24f.js","assets/toastMessage-63eefe97.js","assets/index.esm-08135425.js","assets/index-945068c3.js","assets/CheckIcon-190c4154.js","assets/index-a62f11e2.js","assets/index-451ca961.js","assets/Popover-29078010.js","assets/useSlotProps-22211fec.js","assets/Select-29bc5b44.js","assets/Stack-6ea30c66.js","assets/Popper-f1095716.js","assets/index-c28e550d.js","assets/InfoIcon-8f72a8b2.js","assets/constants-96d1060c.js"]).then(({AddItemModal:t})=>({default:t}))),fn=u.lazy(()=>z(()=>import("./index-11aa8d49.js"),["assets/index-11aa8d49.js","assets/index-fbea16ad.js","assets/index-3f17fe3b.css","assets/index-7b5195df.js","assets/index-73d5b24f.js","assets/react-toastify.esm-ee4152bf.js","assets/react-toastify-b60658ac.css","assets/generateCategoricalChart-491cd6ff.js","assets/Popover-29078010.js","assets/useSlotProps-22211fec.js","assets/InfoIcon-8f72a8b2.js","assets/index.esm-08135425.js","assets/ChevronUpIcon-d81cc681.js","assets/ChevronDownIcon-83c66862.js","assets/index-e2f44253.js","assets/index-ce67f34a.js","assets/index-c28e550d.js","assets/Popper-f1095716.js","assets/CheckIcon-190c4154.js","assets/Stack-6ea30c66.js","assets/PlusIcon-8b46e117.js"]).then(({SourcesTableModal:t})=>({default:t}))),mn=u.lazy(()=>z(()=>import("./index-8d558be4.js"),["assets/index-8d558be4.js","assets/index-fbea16ad.js","assets/index-3f17fe3b.css","assets/index-7b5195df.js","assets/index-73d5b24f.js","assets/react-toastify.esm-ee4152bf.js","assets/react-toastify-b60658ac.css","assets/index-ce67f34a.js","assets/index-c28e550d.js","assets/index.esm-08135425.js","assets/InfoIcon-8f72a8b2.js","assets/Skeleton-90c61c11.js"]).then(({EditNodeNameModal:t})=>({default:t}))),gn=u.lazy(()=>z(()=>import("./index-759b8d9b.js"),["assets/index-759b8d9b.js","assets/index-fbea16ad.js","assets/index-3f17fe3b.css","assets/index-7b5195df.js","assets/index-73d5b24f.js","assets/react-toastify.esm-ee4152bf.js","assets/react-toastify-b60658ac.css","assets/toastMessage-63eefe97.js","assets/index.esm-08135425.js","assets/Skeleton-90c61c11.js"]).then(({RemoveNodeModal:t})=>({default:t}))),yn=u.lazy(()=>z(()=>import("./index-e301a9ac.js"),["assets/index-e301a9ac.js","assets/index-fbea16ad.js","assets/index-3f17fe3b.css","assets/index-7b5195df.js","assets/index-73d5b24f.js","assets/react-toastify.esm-ee4152bf.js","assets/react-toastify-b60658ac.css","assets/toastMessage-63eefe97.js","assets/index.esm-08135425.js","assets/index-a62f11e2.js","assets/index-451ca961.js","assets/Popover-29078010.js","assets/useSlotProps-22211fec.js","assets/Select-29bc5b44.js","assets/Stack-6ea30c66.js","assets/Popper-f1095716.js","assets/constants-96d1060c.js","assets/index-ce67f34a.js"]).then(({AddNodeEdgeModal:t})=>({default:t}))),jn=()=>e.jsxs(e.Fragment,{children:[e.jsx(xn,{}),e.jsx(un,{}),e.jsx(hn,{}),e.jsx(mn,{}),e.jsx(gn,{}),e.jsx(fn,{}),e.jsx(yn,{})]}),bn=()=>{const t=q(r=>r.appMetaData);return e.jsxs(Cn,{children:[e.jsxs(wn,{children:[e.jsx(e.Fragment,{children:t.title&&e.jsx(_,{className:"title",color:"white",children:t.title})}),e.jsx(_,{className:"subtitle",children:" Second Brain"})]}),e.jsx(qt,{})]})},Cn=x(h).attrs({align:"center",direction:"row",grow:1,justify:"flex-start"})`
  height: 64px;
  position: absolute;
  top: 0px;
  left: 64px;
  right: 32px;
  transition: opacity 1s;
  z-index: 99;
  padding: 20px 23px;
`,wn=x.div`
  ${zt.smallOnly`
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
`,vn=()=>{const[t,r]=u.useState(!0),o=Qt();u.useEffect(()=>{r(!0)},[o]);const s=()=>{r(!1)};return o&&t?e.jsxs(Sn,{align:"center",direction:"column",justify:"center",onClick:s,children:[e.jsx("img",{alt:"screen",src:"jamboard_kiosk.png"}),e.jsxs(h,{align:"center",direction:"column",justify:"center",children:[e.jsx(ke,{children:"Second Brain is currently"}),e.jsx(ke,{style:{fontWeight:600},children:"optimized for Desktop."}),e.jsx(ke,{children:"Mobile support coming soon."})]}),e.jsx(W,{color:"secondary",onClick:s,variant:"contained",children:"Got It"})]}):null},Sn=x(h)`
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.75);
  gap: 28px;
  z-index: 2000000000;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`,ke=x(_)`
  color: #fff;
  text-align: center;
  font-family: Barlow;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  margin: 1px;
`,_n={},Tn=u.createContext(_n),kn=()=>{const[t,r]=u.useState(!1),o=u.useMemo(()=>({isShow:t,setIsShow:r}),[t]);return e.jsx(Tn.Provider,{value:o})},v=x(Pr)`
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
`,we=x(ce)`
  && {
    height: 48px;
    padding: 0 36px;
  }
  &:nth-child(odd) {
    background-color: ${c.BG3};
  }
`,ve=x(Nr)`
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
`,me=x(W)`
  &.selected {
    background: ${c.white};
    color: ${c.BG1};
    pointer-events: none;
  }

  & + & {
    margin-left: 16px;
  }
`,Se=x(h)`
  margin-bottom: 16px;
  padding: 0 36px;
  ${_} {
    margin-bottom: 0;
  }
`,An=({data:t})=>{const r=K(a=>a.setQueuedSources),[o,s]=u.useState(""),i=async a=>{if(t!=null&&t.length)try{const n=await Ot.enable();await Xt(a,n.pubkey),r(t.filter(d=>d.ref_id!==a))}catch(n){console.warn(n)}},l=async a=>{if(!(!a||!(t!=null&&t.length))){s(a);try{await ht(a),r(t==null?void 0:t.filter(n=>n.ref_id!==a))}catch(n){console.warn(n)}finally{s("")}}};return t!=null&&t.length?e.jsxs(je,{component:"table",children:[e.jsx(ve,{children:e.jsxs(ce,{component:"tr",children:[e.jsx(v,{className:"empty"}),e.jsx(v,{children:"Type"}),e.jsx(v,{children:"Source"}),e.jsx(v,{}),e.jsx(v,{className:"empty"})]})}),(t==null?void 0:t.length)&&e.jsx("tbody",{children:t==null?void 0:t.map(a=>e.jsxs(we,{children:[e.jsx(v,{className:"empty"}),e.jsx(v,{children:Y[a.source_type]}),e.jsx(v,{width:"268px",children:a.source_type==="twitter_handle"?e.jsxs(Je,{href:`${vt}/${a.source}?open=system`,target:"_blank",children:["@",a.source]}):e.jsx(Je,{href:`${a.source}?open=system`,target:"_blank",children:a.source})}),e.jsx(v,{className:"cell-center",children:e.jsxs(h,{direction:"row",justify:"space-between",children:[e.jsx("div",{className:"approve-wrapper",children:e.jsx(Xe,{className:"centered",onClick:()=>i(a.ref_id),children:e.jsx(Ar,{color:c.primaryGreen,fontSize:24})})}),e.jsx("div",{className:"delete-wrapper",children:o===a.ref_id?e.jsx($,{color:c.white,size:16}):e.jsx(Ct,{message:"Are you sure ?",onConfirm:()=>l(a.ref_id),children:e.jsx(Xe,{className:"centered",children:e.jsx($r,{color:c.primaryRed,fontSize:24})})})})]})}),e.jsx(v,{className:"empty"})]},a.source))})]}):e.jsxs(h,{children:[e.jsx(_,{children:"There is not any results for selected filters"}),e.jsx(Be,{})]})},Xe=x(h)`
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
`,Je=x.a`
  color: ${c.white};
  text-decoration: underline;
  &:visited {
    color: ${c.white};
  }
  &:hover {
    cursor: pointer;
  }
`,$n=()=>{const[t,r]=u.useState(!0),[o,s]=u.useState(""),[i,l]=K(d=>[d.queuedSources,d.setQueuedSources]);u.useEffect(()=>{(async()=>{r(!0);try{const p=await ut({approved:"False"});l(p.data)}catch(p){console.warn(p)}finally{r(!1)}})()},[l]);const a=d=>{s(o===d||!d?"":d)},n=i==null?void 0:i.filter(d=>!o||d.source_type===o);return e.jsxs(En,{align:"stretch",direction:"column",justify:"flex-end",children:[e.jsxs(Se,{align:"flex-start",justify:"space-between",children:[e.jsx(_,{className:"title",children:"Queued Sources"}),e.jsx(_,{className:"subtitle",children:"This is a queue of pending sources waiting for approval or denial from graph users. If you think a source will provide good content for the graph, you can pay to approve it. Think of this as an investment: you pay to add it to the source table, and if the content is popular you will earn from it. If content is not relevant to the graph, you should deny it."})]}),e.jsxs(h,{className:"filters",direction:"row",pb:16,px:36,children:[e.jsx(me,{className:M({selected:!o}),onClick:()=>a(""),size:"small",children:"All"}),Object.keys(Y).map(d=>e.jsx(me,{className:M({selected:d===o}),onClick:()=>a(d),size:"small",children:Y[d]},d))]}),e.jsx(Ln,{align:"center",justify:t?"center":"flex-start",children:t?e.jsx($,{color:c.white}):e.jsx(An,{data:n})})]})},En=x(h)`
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
`,Ln=x(h)`
  min-height: 0;
  overflow: auto;
  flex: 1;
  width: 100%;
`,In=({onSearch:t,placeholder:r,activeIcon:o,loadingIcon:s,defaultIcon:i,...l})=>{const[a,n]=u.useState(""),[d,p]=u.useState(!1),y=()=>{n(""),t(""),p(!1)},m=b=>{!b.target.value&&y(),n(b.target.value)},g=b=>{const{value:f}=b.currentTarget;n(f),!d&&(p(!0),setTimeout(()=>{t(f),f||y(),p(!1)},1e3),f||y())},j=()=>d?e.jsx(et,{children:e.jsx(Ae,{type:"button",children:s})}):e.jsx(et,{children:a?e.jsx(Ae,{onClick:y,type:"button",children:o}):e.jsx(Ae,{type:"button",children:i})});return e.jsxs(Pn,{children:[e.jsx(Nn,{autoComplete:"off",autoCorrect:"off",inputProps:{"aria-label":"search sources"},onChange:m,onKeyDown:b=>{b.key==="Enter"&&g(b)},placeholder:r,value:a,...l}),j()]})},et=x(h)`
  top: -50%;
  right: -3%;
  z-index: 3;
  position: absolute;
  transform: translate(-50%, 50%);
`,Ae=x(F)`
  font-size: 24px;
`,Pn=x(be)`
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
`,Nn=x(Ce)`
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
`,Bn=({data:t,canEdit:r=!1})=>{const o=K(n=>n.setSources),[s,i]=u.useState(""),l=async(n,d)=>{if(t!=null&&t.length)try{await Jt(n,d);const p=t==null?void 0:t.findIndex(m=>m.ref_id===n),y=[...t];y[p]={...y[p],source:d.source},o(y)}catch(p){console.warn(p)}},a=async n=>{if(!(!n||!(t!=null&&t.length))){i(n);try{await ht(n),o(t==null?void 0:t.filter(d=>d.ref_id!==n))}catch(d){console.warn(d)}finally{i("")}}};return t!=null&&t.length?e.jsxs(je,{"aria-label":"a dense table",component:"table",id:"sources-table",size:"small",children:[e.jsx(ve,{children:e.jsxs(ce,{component:"tr",children:[e.jsx(v,{className:"empty"}),e.jsx(v,{children:"Type"}),e.jsx(v,{align:"left",children:"Source"}),r&&e.jsx(v,{align:"left"}),e.jsx(v,{className:"empty"})]})}),e.jsx(zr,{component:"tbody",children:t==null?void 0:t.map(n=>e.jsxs(we,{children:[e.jsx(v,{className:"empty"}),e.jsx(v,{align:"left",children:Y[n.source_type]}),e.jsx(v,{align:"left",children:e.jsx(zn,{condition:r,wrapper:d=>e.jsx(On,{id:n.ref_id,onSave:p=>l(n.ref_id,{source:p,source_type:n.source_type}),value:n.source,children:d}),children:n.source_type===Ve||n.source_type===Ge||n.source_type===Ue?e.jsxs(e.Fragment,{children:[n.source_type===Ve&&e.jsxs($e,{href:`${vt}/${n.source}`,target:"_blank",children:["@",n.source]}),n.source_type===Ge&&e.jsx($e,{href:`${n.source}${n.source.includes("?")?"&":"?"}open=system`,target:"_blank",children:n.source}),n.source_type===Ue&&e.jsx($e,{href:n.source,target:"_blank",children:n.source})]}):e.jsx("div",{children:n.source})})}),r&&e.jsx(v,{align:"left",children:e.jsx("div",{className:"delete-wrapper",id:`delete-${n.source}`,children:s===n.ref_id?e.jsx($,{color:c.white}):e.jsx(Ct,{message:"Are you sure ?",onConfirm:()=>a(n.ref_id),children:e.jsx(U,{className:"centered",children:e.jsx(Er,{})})})})}),e.jsx(v,{className:"empty"})]},n.source))})]}):e.jsxs(Mn,{children:[e.jsx(Br,{}),e.jsx(_,{className:"text",children:"There is not any results for selected filters"})]})};function zn({condition:t,wrapper:r,children:o}){return t?r(o):o}const On=({value:t,onSave:r,id:o,children:s})=>{const[i,l]=u.useState(!1),[a,n]=u.useState(t),[d,p]=u.useState(!1),y=async()=>{if(o){p(!0);try{await r(a),l(!1)}catch(m){console.warn(m)}finally{p(!1)}}};return e.jsx("div",{children:i?e.jsxs(Dn,{direction:"row",children:[e.jsx(Vr,{className:"editable-cell__input",name:"cell-input",onChange:m=>n(m),value:a}),e.jsx(U,{align:"center",justify:"center",children:d?e.jsx($,{}):e.jsx(Lr,{onClick:y})}),e.jsx(U,{align:"center",className:"secondary",justify:"center",onClick:()=>l(!1),children:e.jsx(bt,{})})]}):e.jsxs(Rn,{direction:"row",children:[s,e.jsx(U,{onClick:()=>l(!0),children:e.jsx(Ir,{size:20})})]})})},Dn=x(h)`
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
`,U=x(h)`
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
`,Mn=x(h)`
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
`,Rn=x(h)`
  display: flex;
  padding: 4px;
  position: relative;

  ${U} {
    visibility: hidden;
  }

  &:hover {
    ${U} {
      visibility: visible;
    }
  }
`,$e=x.a`
  color: ${c.white};
  text-decoration: underline;
  &:visited {
    color: ${c.white};
  }
`,Fn=()=>{const[t,r]=u.useState(!0),[o,s]=u.useState(""),[i,l]=K(m=>[m.sources,m.setSources]),[a]=ie(m=>[m.isAdmin]),[n,d]=u.useState("");u.useEffect(()=>{(async()=>{r(!0);try{const g=await ut();l(g.data)}catch(g){console.warn(g)}finally{r(!1)}})()},[l]);const p=m=>{s(o===m||!m?"":m)},y=u.useMemo(()=>i==null?void 0:i.filter(m=>(!o||m.source_type===o)&&(m.source.toLowerCase().startsWith(n.toLowerCase())||m.source.toLowerCase().includes(n.toLowerCase()))),[n,o,i]);return e.jsxs(Wn,{align:"stretch",direction:"column",justify:"flex-end",children:[e.jsx(Se,{align:"center",direction:"row",justify:"space-between",children:e.jsx(_,{className:"title",children:"Sources for this Graph"})}),e.jsx(Gn,{children:e.jsx(In,{activeIcon:e.jsx(H,{}),defaultIcon:e.jsx(ye,{}),loadingIcon:e.jsx($,{color:c.PRIMARY_BLUE,size:24}),onSearch:d,placeholder:"Find Topic"})}),e.jsxs(h,{className:"filters",direction:"row",pb:16,px:36,children:[e.jsx(me,{className:M({selected:!o}),onClick:()=>p(""),size:"small",children:"All"}),Object.keys(Y).map(m=>e.jsx(me,{className:M({selected:m===o}),onClick:()=>p(m),size:"small",children:Y[m]},m))]}),e.jsx(Vn,{align:"center",justify:t?"center":"flex-start",children:t?e.jsx($,{color:c.white}):e.jsx(Bn,{canEdit:a,data:y})})]})},Wn=x(h)`
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
`,Vn=x(h)`
  min-height: 0;
  overflow: auto;
  flex: 1;
  width: 100%;
`,Gn=x(h)`
  margin: 0 0 16px 36px;
`,Un=({onSelect:t,selectedTopic:r})=>{const[o,s]=u.useState(!1),[i,l]=u.useState(""),[a,n]=u.useState([]),[d,p]=u.useState(!1),y=u.useRef(null);u.useEffect(()=>()=>n([]),[n]);const m=async f=>{const C={muted:"False",sort_by:Re,search:f,skip:"0",limit:"1000"};p(!0);try{const w=await xt(C);n(w.data)}catch{n([])}finally{p(!1)}},g=u.useMemo(()=>ct.debounce(m,300),[]),j=f=>{t(f)},b=f=>{if(l(f),!f){n([]);return}f.length>2&&g(f)};return r?e.jsxs(Zn,{children:[e.jsx("div",{className:"value",children:r.topic}),e.jsx(h,{className:"icon",onClick:()=>t(null),children:e.jsx(H,{})})]}):e.jsxs(e.Fragment,{children:[e.jsxs(be,{ref:y,component:"form",onSubmit:f=>f.preventDefault(),sx:{p:"2px 4px",display:"flex",alignItems:"center",width:200},children:[e.jsx(Ce,{inputProps:{"aria-label":"search topic"},onChange:f=>b(f.target.value),onFocus:()=>s(!0),placeholder:"Search",size:"small",sx:{ml:1,flex:1},value:i}),i&&e.jsxs(e.Fragment,{children:[e.jsx(tt,{"aria-label":"search",onClick:()=>b(""),type:"button",children:e.jsx(H,{})}),e.jsx(wt,{orientation:"vertical",sx:{height:28,m:.5}})]}),e.jsx(tt,{"aria-label":"search",type:"button",children:d?e.jsx($,{color:c.white,size:24}):e.jsx(ye,{})})]}),y.current&&a.length?e.jsx(Yn,{anchorEl:y.current,open:o,placement:"bottom",children:e.jsx(e.Fragment,{children:a.map(f=>e.jsx(Hn,{className:M({active:r===f.ref_id}),onClick:()=>j(f),children:f.topic},"option"))})}):null]})},Hn=x(h).attrs({direction:"row",align:"center"})`
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
`,Yn=x(kt)`
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
`,Zn=x(h).attrs({direction:"row",justify:"flex-start",align:"center"})`
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
`,tt=x(F)`
  font-size: 24px;
`,Kn=({selectedType:t,setSelectedType:r})=>{const[o,s]=u.useState(null),[i,l]=u.useState([]);u.useEffect(()=>{(async()=>{try{const{data:y}=await er();l(y.edge_types)}catch(y){console.warn(y)}})()},[l]);const a=p=>{s(p.currentTarget)},n=()=>{s(null)},d=p=>{r(p),n()};return e.jsxs("div",{children:[e.jsxs(qn,{onClick:a,children:[e.jsx("div",{className:"text",children:"Type"}),e.jsx("div",{className:"value",children:t}),e.jsx("div",{className:"icon",children:o?e.jsx(Or,{}):e.jsx(Gr,{})})]}),e.jsx(Xn,{anchorEl:o,anchorOrigin:{vertical:"bottom",horizontal:"left"},anchorPosition:{top:62,left:0},onClose:n,open:!!o,transformOrigin:{vertical:"top",horizontal:"left"},children:e.jsx(Wr,{children:i.map(p=>e.jsxs(Qn,{className:M({active:p===t}),onClick:()=>d(p),children:[e.jsx("span",{className:"icon",children:p===t?e.jsx(At,{}):null}),e.jsx("span",{children:p})]},p))})})]})},qn=x(h).attrs({direction:"row",align:"center"})`
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
`,Qn=x(h).attrs({direction:"row",align:"center"})`
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
`,Xn=x(Fe)`
  .MuiPaper-root {
    background: ${c.BUTTON1};
    min-width: 149px;
    padding: 16px;
    color: ${c.GRAY3};
    box-shadow: 0px 1px 6px 0px rgba(0, 0, 0, 0.2);
    border-radius: 6px;
  }
`,Jn=({from:t,onSelect:r,selectedTopic:o,selectedType:s,setSelectedType:i})=>e.jsxs(h,{children:[e.jsx(h,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(h,{align:"center",direction:"row",children:e.jsx(eo,{children:"Add edge"})})}),e.jsxs(to,{mb:12,children:[e.jsxs(Ee,{children:[e.jsx("div",{className:"label",children:"From"}),e.jsx("div",{children:t})]}),e.jsx(Ee,{children:e.jsx(Kn,{selectedType:s,setSelectedType:i})}),e.jsxs(Ee,{children:[e.jsx("div",{className:"label",children:"To"}),e.jsx(Un,{onSelect:r,selectedTopic:o})]})]})]}),eo=x(_)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,to=x(h).attrs({align:"flex-start",direction:"row",justify:"flex-start"})`
  color: ${c.white};
  .label {
    margin-bottom: 8px;
    font-weight: 500;
    font-size: 14px;
    color: ${c.GRAY3};
  }
`,Ee=x(h)`
  flex: 1 1 100%;
`,ro=({topic:t,onClose:r})=>{const{close:o}=D("addEdge"),[s]=N(b=>[b.data]),i=ae({mode:"onChange"}),[l,a]=u.useState(!1),[n,d]=u.useState(null),[p,y]=u.useState(""),m=()=>{r(),o()},g=async()=>{if(!(!n||!s)){a(!0);try{await tr({from:t.ref_id,to:n==null?void 0:n.ref_id,relationship:p});const{ref_id:b}=t,{ref_id:f}=n;if(s){const C={...s};C[b]={...C[b],edgeList:[...C[b].edgeList,p]},C[f]&&(C[f]={...C[f],edgeList:[...C[f].edgeList,p]}),N.setState({data:C})}m()}catch(b){console.warn(b)}finally{a(!1)}}},j=l||!n||!p;return e.jsx(We,{id:"addEdge",kind:"large",onClose:m,preventOutsideClose:!0,children:e.jsxs(le,{...i,children:[e.jsx(Jn,{from:t.topic,onSelect:d,selectedTopic:n,selectedType:p,setSelectedType:y}),e.jsxs(W,{color:"secondary",disabled:j,onClick:g,size:"large",variant:"contained",children:["Confirm",l&&e.jsx($,{color:c.BLUE_PRESS_STATE,size:10})]})]})})},no=()=>e.jsxs(h,{children:[e.jsx(h,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(h,{align:"center",direction:"row",children:e.jsx(oo,{children:"Edit topic"})})}),e.jsx(h,{mb:12,children:e.jsx(oe,{id:"cy-topic",maxLength:50,name:"topic",placeholder:"Add your topic",rules:{...Dt}})})]}),oo=x(_)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,so=({topic:t,onClose:r})=>{const{close:o}=D("editTopic"),[s]=N(j=>[j.data]),i=ae({mode:"onChange"}),{watch:l,setValue:a,reset:n}=i,[d,p]=u.useState(!1);u.useEffect(()=>(t&&a("topic",t==null?void 0:t.topic),()=>{n()}),[t,a,n]);const y=l("topic"),m=()=>{r(),o()},g=async()=>{p(!0);try{if(await ft((t==null?void 0:t.ref_id)||"",{topic:y.trim()}),s){const j={...s};j[t==null?void 0:t.ref_id].topic=y.trim(),N.setState({data:j})}m()}catch(j){console.warn(j)}finally{p(!1)}};return e.jsx(We,{id:"editTopic",kind:"regular",onClose:m,preventOutsideClose:!0,children:e.jsxs(le,{...i,children:[e.jsx(no,{}),e.jsxs(W,{color:"secondary",disabled:d,onClick:g,size:"large",variant:"contained",children:["Save",d&&e.jsx($,{color:c.BLUE_PRESS_STATE,size:10})]})]})})},io=({onSelect:t,selectedTopic:r})=>{const[o,s]=u.useState(!1),[i,l]=u.useState(""),[a,n]=u.useState([]),[d,p]=u.useState(!1),y=u.useRef(null);u.useEffect(()=>()=>n([]),[n]);const m=async f=>{const C={muted:"False",sort_by:Re,search:f,skip:"0",limit:"1000"};p(!0);try{const w=await xt(C);n(w.data)}catch{n([])}finally{p(!1)}},g=u.useMemo(()=>ct.debounce(m,300),[]),j=f=>{t(f)},b=f=>{if(l(f),!f){n([]);return}f.length>2&&g(f)};return r?e.jsxs(co,{children:[e.jsx("div",{className:"value",children:r.topic}),e.jsx(h,{className:"icon",onClick:()=>t(null),children:e.jsx(H,{})})]}):e.jsxs(e.Fragment,{children:[e.jsxs(be,{ref:y,component:"form",onSubmit:f=>f.preventDefault(),sx:{p:"2px 4px",display:"flex",alignItems:"center",width:200},children:[e.jsx(Ce,{inputProps:{"aria-label":"search topic"},onChange:f=>b(f.target.value),onFocus:()=>s(!0),placeholder:"Search",size:"small",sx:{ml:1,flex:1},value:i}),i&&e.jsxs(e.Fragment,{children:[e.jsx(rt,{"aria-label":"search",onClick:()=>b(""),type:"button",children:e.jsx(H,{})}),e.jsx(wt,{orientation:"vertical",sx:{height:28,m:.5}})]}),e.jsx(rt,{"aria-label":"search",type:"button",children:d?e.jsx($,{color:c.white,size:24}):e.jsx(ye,{})})]}),y.current&&a.length?e.jsx(lo,{anchorEl:y.current,open:o,placement:"bottom",children:e.jsx(e.Fragment,{children:a.map(f=>e.jsx(ao,{className:M({active:r===f.ref_id}),onClick:()=>j(f),children:f.topic},"option"))})}):null]})},ao=x(h).attrs({direction:"row",align:"center"})`
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
`,lo=x(kt)`
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
`,co=x(h).attrs({direction:"row",justify:"flex-start",align:"center"})`
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
`,rt=x(F)`
  font-size: 24px;
`,po=({from:t,onSelect:r,selectedTopic:o})=>e.jsxs(h,{children:[e.jsx(h,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(h,{align:"center",direction:"row",children:e.jsx(ho,{children:"Merge topic"})})}),e.jsxs(uo,{mb:12,children:[e.jsxs(nt,{children:[e.jsx("div",{className:"label",children:"From"}),e.jsx("div",{children:t})]}),e.jsxs(nt,{ml:24,children:[e.jsx("div",{className:"label",children:"To"}),e.jsx(io,{onSelect:r,selectedTopic:o})]})]})]}),ho=x(_)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,uo=x(h).attrs({align:"flex-start",direction:"row",justify:"flex-start"})`
  color: ${c.white};
  .label {
    margin-bottom: 8px;
    font-weight: 500;
    font-size: 14px;
    color: ${c.GRAY3};
  }
`,nt=x(h)`
  flex: 1 1 100%;
`,xo=({topic:t,onClose:r})=>{const{close:o}=D("mergeTopic"),[s,i,l]=N(w=>[w.data,w.ids,w.total]),a=ae({mode:"onChange"}),{watch:n,setValue:d,reset:p}=a,[y,m]=u.useState(!1),[g,j]=u.useState(null);u.useEffect(()=>(t&&d("topic",t==null?void 0:t.topic),()=>{p()}),[t,d,p]);const b=n("topic"),f=()=>{r(),o()},C=async()=>{if(!(!g||!s)){m(!0);try{await rr({from:t.ref_id,to:g==null?void 0:g.ref_id});const{ref_id:w}=t;if(s[w]={...s[w],edgeList:[Dr],edgeCount:s[w].edgeCount-1},N.setState({ids:i.filter(T=>T!==g.ref_id),total:l-1}),s){const T={...s};T[t==null?void 0:t.ref_id].topic=b.trim(),N.setState({data:T})}f()}catch(w){console.warn(w)}finally{m(!1)}}};return e.jsx(We,{id:"mergeTopic",kind:"regular",onClose:f,preventOutsideClose:!0,children:e.jsxs(le,{...a,children:[e.jsx(po,{from:t.topic,onSelect:j,selectedTopic:g}),e.jsxs(W,{color:"secondary",disabled:y,onClick:C,size:"large",variant:"contained",children:["Merge topics",y&&e.jsx($,{color:c.BLUE_PRESS_STATE,size:10})]})]})})},fo=t=>e.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M7.37516 8.625V11.3334C7.37516 11.5104 7.43508 11.6589 7.55491 11.7786C7.67476 11.8984 7.82326 11.9583 8.00041 11.9583C8.17758 11.9583 8.32599 11.8984 8.44564 11.7786C8.5653 11.6589 8.62512 11.5104 8.62512 11.3334V8.625H11.3335C11.5106 8.625 11.659 8.56508 11.7788 8.44525C11.8986 8.3254 11.9585 8.1769 11.9585 7.99975C11.9585 7.82258 11.8986 7.67417 11.7788 7.55452C11.659 7.43487 11.5106 7.37504 11.3335 7.37504H8.62512V4.66669C8.62512 4.4896 8.56521 4.34117 8.44537 4.22137C8.32553 4.1016 8.17702 4.04171 7.99987 4.04171C7.82271 4.04171 7.6743 4.1016 7.55464 4.22137C7.43499 4.34117 7.37516 4.4896 7.37516 4.66669V7.37504H4.66681C4.48973 7.37504 4.3413 7.43496 4.22152 7.55479C4.10173 7.67464 4.04183 7.82314 4.04183 8.00029C4.04183 8.17746 4.10173 8.32587 4.22152 8.44552C4.3413 8.56517 4.48973 8.625 4.66681 8.625H7.37516ZM8.00154 15.9167C6.90659 15.9167 5.8774 15.7089 4.91395 15.2933C3.9505 14.8778 3.11243 14.3138 2.39975 13.6015C1.68705 12.8891 1.12284 12.0514 0.7071 11.0884C0.291364 10.1253 0.0834961 9.09636 0.0834961 8.00142C0.0834961 6.90647 0.291274 5.87728 0.70683 4.91383C1.12239 3.95037 1.68634 3.11231 2.3987 2.39963C3.11108 1.68693 3.94878 1.12272 4.91181 0.706979C5.87482 0.291243 6.9038 0.083374 7.99875 0.083374C9.09369 0.083374 10.1229 0.291153 11.0863 0.706708C12.0498 1.12226 12.8879 1.68622 13.6005 2.39858C14.3132 3.11096 14.8774 3.94866 15.2932 4.91169C15.7089 5.8747 15.9168 6.90368 15.9168 7.99863C15.9168 9.09357 15.709 10.1228 15.2935 11.0862C14.8779 12.0497 14.3139 12.8877 13.6016 13.6004C12.8892 14.3131 12.0515 14.8773 11.0885 15.2931C10.1255 15.7088 9.09648 15.9167 8.00154 15.9167ZM8.00014 14.6667C9.86125 14.6667 11.4376 14.0209 12.7293 12.7292C14.021 11.4375 14.6668 9.86113 14.6668 8.00002C14.6668 6.13891 14.021 4.56252 12.7293 3.27085C11.4376 1.97919 9.86125 1.33335 8.00014 1.33335C6.13903 1.33335 4.56264 1.97919 3.27098 3.27085C1.97931 4.56252 1.33348 6.13891 1.33348 8.00002C1.33348 9.86113 1.97931 11.4375 3.27098 12.7292C4.56264 14.0209 6.13903 14.6667 8.00014 14.6667Z",fill:"currentColor"})}),mo=t=>e.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 12 12",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M10.1765 0.310088L4.72809 5.70971C4.63832 5.79868 4.56637 5.90372 4.51607 6.01926L3.74627 7.78746C3.63822 8.03565 3.89191 8.28707 4.14234 8.17999L5.92651 7.41707C6.04309 7.36722 6.14907 7.29592 6.23885 7.20695L11.6872 1.80733C12.1044 1.39388 12.1044 0.723539 11.6872 0.310088C11.27 -0.103363 10.5936 -0.103363 10.1765 0.310088ZM9.80835 7.14088C9.80835 6.81895 10.072 6.55777 10.3969 6.55777C10.723 6.55777 10.9854 6.82017 10.9854 7.14088L10.9191 10.2508C10.9191 11.2153 10.1489 12.0001 9.17571 12.0001H1.74343C0.79227 12.0001 0 11.2153 0 10.2289V2.84292C0 1.89999 0.79227 1.11523 1.74343 1.11523L5.29651 1.11548C5.62264 1.11548 5.88501 1.37666 5.88501 1.69858C5.88501 2.0205 5.62141 2.28168 5.29651 2.28168H1.7655C1.44134 2.28168 1.177 2.54335 1.177 2.86479V10.2508C1.177 10.5722 1.44134 10.8339 1.7655 10.8339H9.21985C9.54402 10.8339 9.80835 10.5722 9.80835 10.2508V7.14088Z",fill:"currentColor"})}),go=t=>e.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 12 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M1.33317 15.5L0.166504 14.3333L4.18734 10.2917C4.50678 9.97222 4.74984 9.61111 4.9165 9.20833C5.08317 8.80556 5.1665 8.38194 5.1665 7.9375L5.1665 3.6875L3.83317 5L2.6665 3.83333L5.99984 0.5L9.33317 3.83333L8.1665 5L6.83317 3.6875L6.83317 7.9375C6.83317 8.38194 6.9165 8.80556 7.08317 9.20833C7.24984 9.61111 7.49289 9.97222 7.81234 10.2917L11.8332 14.3333L10.6665 15.5L5.99984 10.8333L1.33317 15.5Z",fill:"currentColor"})}),Le=t=>e.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 12 8",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M0.333496 7.66704V6.66706H3.91681V7.66704H0.333496ZM0.333496 4.50037V3.50041H7.7886V4.50037H0.333496ZM0.333496 1.33372V0.33374H11.6668V1.33372H0.333496Z",fill:"currentColor"})}),yo=t=>e.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 16 15",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M14.0716 15L10.8994 11.7764C10.437 11.9597 9.96181 12.0919 9.47381 12.1732C8.98581 12.2545 8.49002 12.2952 7.98643 12.2952C6.33597 12.2952 4.82448 11.8457 3.45194 10.9466C2.07941 10.0476 0.991584 8.86271 0.188459 7.39193C0.123124 7.27666 0.0753836 7.15933 0.045238 7.03994C0.0150793 6.92055 0 6.7991 0 6.67559C0 6.55208 0.0163338 6.42935 0.0490013 6.30739C0.0816688 6.18543 0.13067 6.06938 0.196005 5.95925C0.508607 5.42714 0.84081 4.91226 1.19261 4.41462C1.54443 3.91699 1.95353 3.47673 2.41992 3.09386L0.24877 0.846015L1.07501 0L14.8978 14.154L14.0716 15ZM7.98643 9.94854C8.16032 9.94854 8.32642 9.93799 8.48473 9.91689C8.64305 9.89579 8.7976 9.84973 8.94838 9.77871L4.95591 5.69059C4.89158 5.84498 4.84786 6.00324 4.82475 6.16535C4.80162 6.32745 4.79005 6.49753 4.79005 6.67559C4.79005 7.58645 5.10039 8.35966 5.72108 8.99521C6.34176 9.63076 7.09688 9.94854 7.98643 9.94854ZM13.4384 10.3561L10.9792 7.85816C11.0456 7.66673 11.0961 7.47375 11.1308 7.27922C11.1655 7.0847 11.1828 6.88349 11.1828 6.67559C11.1828 5.76473 10.8725 4.99152 10.2518 4.35597C9.63109 3.72042 8.87598 3.40264 7.98643 3.40264C7.78339 3.40264 7.58689 3.42168 7.39692 3.45976C7.20694 3.49784 7.02099 3.56011 6.83907 3.64657L4.87751 1.64575C5.37606 1.44402 5.88441 1.29529 6.40257 1.19957C6.92071 1.10385 7.44867 1.05599 7.98643 1.05599C9.64191 1.05599 11.1604 1.50756 12.542 2.41072C13.9236 3.31387 15.0134 4.50598 15.8115 5.98705C15.8718 6.08894 15.9183 6.19829 15.951 6.31511C15.9837 6.43192 16 6.55208 16 6.67559C16 6.7991 15.9857 6.91926 15.957 7.03607C15.9284 7.15289 15.8839 7.26225 15.8236 7.36414C15.52 7.94669 15.1738 8.49038 14.7848 8.99521C14.3958 9.50005 13.947 9.95369 13.4384 10.3561ZM10.0912 6.95657L7.73162 4.54816C8.06131 4.48126 8.38246 4.50545 8.69506 4.62072C9.00767 4.736 9.27754 4.9156 9.5047 5.15952C9.7369 5.40036 9.90451 5.67723 10.0075 5.99012C10.1106 6.30301 10.1385 6.62516 10.0912 6.95657Z",fill:"currentColor"})}),jo=t=>e.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 18 13",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M9.00204 9.98073C9.94628 9.98073 10.7483 9.65024 11.408 8.98927C12.0677 8.32829 12.3976 7.52567 12.3976 6.58142C12.3976 5.63718 12.0671 4.8352 11.4061 4.17548C10.7451 3.51576 9.9425 3.1859 8.99825 3.1859C8.05401 3.1859 7.25203 3.51638 6.59231 4.17735C5.93259 4.83834 5.60273 5.64096 5.60273 6.58521C5.60273 7.52944 5.93321 8.33142 6.59419 8.99115C7.25517 9.65087 8.05779 9.98073 9.00204 9.98073ZM9.00014 8.83331C8.37514 8.83331 7.84389 8.61456 7.40639 8.17706C6.96889 7.73956 6.75014 7.20831 6.75014 6.58331C6.75014 5.95831 6.96889 5.42706 7.40639 4.98956C7.84389 4.55206 8.37514 4.33331 9.00014 4.33331C9.62514 4.33331 10.1564 4.55206 10.5939 4.98956C11.0314 5.42706 11.2501 5.95831 11.2501 6.58331C11.2501 7.20831 11.0314 7.73956 10.5939 8.17706C10.1564 8.61456 9.62514 8.83331 9.00014 8.83331ZM9.00129 12.4166C7.08494 12.4166 5.33884 11.888 3.76298 10.8309C2.18713 9.77374 1.02688 8.35788 0.282227 6.58331C1.02688 4.80874 2.18675 3.39288 3.76185 2.33573C5.33694 1.27858 7.08265 0.75 8.999 0.75C10.9153 0.75 12.6614 1.27858 14.2373 2.33573C15.8132 3.39288 16.9734 4.80874 17.7181 6.58331C16.9734 8.35788 15.8135 9.77374 14.2384 10.8309C12.6634 11.888 10.9176 12.4166 9.00129 12.4166Z",fill:"currentColor"})}),bo=t=>e.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:e.jsxs("g",{opacity:"0.4",children:[e.jsx("mask",{id:"mask0_5162_13105",maskUnits:"userSpaceOnUse",x:"0",y:"0",width:"24",height:"24",children:e.jsx("rect",{width:"1em",height:"1em",fill:"currentColor"})}),e.jsx("g",{mask:"url(#mask0_5162_13105)",children:e.jsx("path",{d:"M19.7615 21.8691L15.7154 17.8537C15.1256 18.0819 14.5195 18.2467 13.8971 18.348C13.2747 18.4493 12.6423 18.4999 12 18.4999C9.89486 18.4999 7.96698 17.94 6.21635 16.8201C4.46572 15.7002 3.07822 14.2243 2.05385 12.3922C1.97052 12.2486 1.90963 12.1025 1.87118 11.9538C1.83271 11.8051 1.81348 11.6538 1.81348 11.4999C1.81348 11.3461 1.83431 11.1932 1.87598 11.0413C1.91764 10.8894 1.98014 10.7448 2.06348 10.6076C2.46219 9.9448 2.88591 9.30345 3.33463 8.68357C3.78336 8.0637 4.30516 7.51531 4.90003 7.0384L2.13078 4.2384L3.18463 3.18457L20.8153 20.8153L19.7615 21.8691ZM12 15.5768C12.2218 15.5768 12.4336 15.5637 12.6356 15.5374C12.8375 15.5111 13.0346 15.4537 13.2269 15.3653L8.13463 10.273C8.05258 10.4653 7.99681 10.6624 7.96733 10.8643C7.93783 11.0663 7.92308 11.2781 7.92308 11.4999C7.92308 12.6345 8.31891 13.5977 9.11058 14.3893C9.90224 15.181 10.8654 15.5768 12 15.5768ZM18.9538 16.0845L15.8173 12.973C15.9019 12.7345 15.9663 12.4941 16.0105 12.2518C16.0548 12.0095 16.0769 11.7589 16.0769 11.4999C16.0769 10.3653 15.681 9.40219 14.8894 8.61052C14.0977 7.81885 13.1346 7.42302 12 7.42302C11.741 7.42302 11.4904 7.44674 11.2481 7.49417C11.0058 7.5416 10.7686 7.61917 10.5366 7.72687L8.03463 5.23457C8.67051 4.98329 9.3189 4.79803 9.9798 4.6788C10.6407 4.55956 11.3141 4.49995 12 4.49995C14.1115 4.49995 16.0484 5.06245 17.8105 6.18745C19.5727 7.31245 20.9628 8.79738 21.9807 10.6422C22.0576 10.7692 22.1169 10.9054 22.1586 11.0509C22.2003 11.1964 22.2211 11.3461 22.2211 11.4999C22.2211 11.6538 22.2028 11.8034 22.1663 11.9489C22.1297 12.0945 22.073 12.2307 21.9961 12.3576C21.6089 13.0832 21.1673 13.7605 20.6711 14.3893C20.175 15.0182 19.6025 15.5832 18.9538 16.0845ZM14.6846 11.8499L11.675 8.84992C12.0955 8.76659 12.5051 8.79671 12.9038 8.9403C13.3025 9.0839 13.6468 9.30761 13.9365 9.61145C14.2327 9.91145 14.4465 10.2563 14.5779 10.6461C14.7093 11.0358 14.7449 11.4371 14.6846 11.8499Z",fill:"currentColor"})})]})}),Co=t=>e.jsxs("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("mask",{id:"mask0_5162_13106",maskUnits:"userSpaceOnUse",x:"0",y:"0",width:"24",height:"24",children:e.jsx("rect",{width:"1em",height:"1em",fill:"currentColor"})}),e.jsx("g",{mask:"url(#mask0_5162_13106)",children:e.jsx("path",{d:"M12.0023 15.5769C13.1354 15.5769 14.0978 15.1803 14.8895 14.3871C15.6811 13.5939 16.077 12.6308 16.077 11.4977C16.077 10.3646 15.6804 9.40224 14.8872 8.61058C14.094 7.81891 13.1309 7.42308 11.9978 7.42308C10.8647 7.42308 9.90234 7.81966 9.11067 8.61282C8.31901 9.40601 7.92317 10.3692 7.92317 11.5023C7.92317 12.6353 8.31976 13.5977 9.11293 14.3894C9.90611 15.181 10.8692 15.5769 12.0023 15.5769ZM12.0001 14.2C11.2501 14.2 10.6126 13.9375 10.0876 13.4125C9.56258 12.8875 9.30007 12.25 9.30007 11.5C9.30007 10.75 9.56258 10.1125 10.0876 9.58748C10.6126 9.06248 11.2501 8.79998 12.0001 8.79998C12.7501 8.79998 13.3876 9.06248 13.9126 9.58748C14.4376 10.1125 14.7001 10.75 14.7001 11.5C14.7001 12.25 14.4376 12.8875 13.9126 13.4125C13.3876 13.9375 12.7501 14.2 12.0001 14.2ZM12.0014 18.5C9.70183 18.5 7.60651 17.8657 5.71547 16.5971C3.82446 15.3285 2.43216 13.6295 1.53857 11.5C2.43216 9.37049 3.82401 7.67146 5.71412 6.40288C7.60422 5.13429 9.69908 4.5 11.9987 4.5C14.2983 4.5 16.3936 5.13429 18.2847 6.40288C20.1757 7.67146 21.568 9.37049 22.4616 11.5C21.568 13.6295 20.1761 15.3285 18.286 16.5971C16.3959 17.8657 14.3011 18.5 12.0014 18.5Z",fill:"currentColor"})})]}),wo=t=>e.jsxs("svg",{width:"1em",height:"1em",viewBox:"0 0 22 22",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("mask",{id:"mask0_5577_416",maskUnits:"userSpaceOnUse",x:"0",y:"0",width:"22",height:"22",children:e.jsx("rect",{width:"1em",height:"1em",fill:"currentColor"})}),e.jsx("g",{mask:"url(#mask0_5577_416)",children:e.jsx("path",{d:"M11 17.6634C10.6219 17.6634 10.2982 17.5287 10.0289 17.2595C9.75964 16.9902 9.625 16.6665 9.625 16.2884C9.625 15.9103 9.75964 15.5866 10.0289 15.3173C10.2982 15.0481 10.6219 14.9134 11 14.9134C11.3781 14.9134 11.7018 15.0481 11.971 15.3173C12.2403 15.5866 12.375 15.9103 12.375 16.2884C12.375 16.6665 12.2403 16.9902 11.971 17.2595C11.7018 17.5287 11.3781 17.6634 11 17.6634ZM11 12.3749C10.6219 12.3749 10.2982 12.2403 10.0289 11.971C9.75964 11.7018 9.625 11.3781 9.625 11C9.625 10.6218 9.75964 10.2982 10.0289 10.0289C10.2982 9.75962 10.6219 9.62498 11 9.62498C11.3781 9.62498 11.7018 9.75962 11.971 10.0289C12.2403 10.2982 12.375 10.6218 12.375 11C12.375 11.3781 12.2403 11.7018 11.971 11.971C11.7018 12.2403 11.3781 12.3749 11 12.3749ZM11 7.08648C10.6219 7.08648 10.2982 6.95184 10.0289 6.68257C9.75964 6.41332 9.625 6.08963 9.625 5.7115C9.625 5.33339 9.75964 5.0097 10.0289 4.74043C10.2982 4.47118 10.6219 4.33655 11 4.33655C11.3781 4.33655 11.7018 4.47118 11.971 4.74043C12.2403 5.0097 12.375 5.33339 12.375 5.7115C12.375 6.08963 12.2403 6.41332 11.971 6.68257C11.7018 6.95184 11.3781 7.08648 11 7.08648Z",fill:"currentColor"})})]}),vo=({topic:t,onClick:r,onSearch:o})=>{const[s,i]=N(w=>[w.ids,w.total]),[l,a]=u.useState(!1),n=ze(t.date_added_to_graph),d=async(w,T)=>{a(!0);try{await ft(w,{muted_topic:T}),N.setState({ids:s.filter(A=>A!==w),total:i-1})}catch(A){console.warn(A)}},p=w=>{o(w.topic)},y=t.edgeList.slice(0,1),m=t.edgeList.length-y.length,[g,j]=E.useState(null),b=w=>{j(w.currentTarget)},f=()=>{j(null)},C=!!g;return e.jsxs(we,{children:[e.jsx(v,{className:"empty"}),e.jsx(v,{onClick:()=>p(t),children:e.jsx(So,{children:t.topic})}),e.jsx(v,{children:t.edgeCount}),e.jsxs(v,{children:[e.jsx(Fe,{anchorEl:g,anchorOrigin:{vertical:"top",horizontal:"center"},disableRestoreFocus:!0,id:"mouse-over-popover",onClose:f,open:C,sx:{pointerEvents:"none","& .MuiPaper-root":{backgroundColor:"rgba(0, 0, 0, 0.9)",borderRadius:"4px",width:"160px"}},transformOrigin:{vertical:"bottom",horizontal:"center"},children:e.jsx(Qe,{sx:{p:1.5,fontSize:"13px",fontWeight:400,lineHeight:"1.8",wordWrap:"break-word"},children:t.edgeList.join(", ")})}),y.join(", "),m>0&&e.jsx(Qe,{"aria-haspopup":"true","aria-owns":C?"mouse-over-popover":void 0,component:"span",onMouseEnter:b,onMouseLeave:f,sx:{cursor:"context-menu"},children:",..."})]}),e.jsx(v,{children:e.jsx("span",{children:n})}),e.jsx(v,{className:"cell-center",children:e.jsx(h,{direction:"row",justify:"space-between",children:e.jsx("div",{className:"approve-wrapper",children:l?e.jsx($,{color:c.white,size:16}):e.jsxs(h,{direction:"row",children:[t.muted_topic?e.jsx(F,{className:"centered",onClick:()=>d(t.ref_id,!1),children:e.jsx(Co,{})}):e.jsx(F,{className:"centered",onClick:()=>d(t.ref_id,!0),children:e.jsx(bo,{})}),e.jsx(F,{onClick:w=>r(w,t.ref_id),children:e.jsx(wo,{"data-testid":"ThreeDotsIcons"})})]})})})})]},t.topic)},So=x.span`
  cursor: pointer;
  :hover {
    text-decoration: underline;
  }
`,_o=u.memo(vo),To=({setShowMuteUnmute:t,showMuted:r,onTopicEdit:o,onChangeFilter:s})=>{const{close:i}=D("sourcesTable"),[l,a]=E.useState(null),[n,d]=E.useState(""),[p,y]=q(S=>[S.setSearchFormValue,S.setCurrentSearch]),[m,g]=N(S=>[S.data,S.ids]),j=u.useCallback((S,L)=>{a(S.currentTarget),d(L)},[]),b=()=>{a(null)},f=S=>{p(S),y(S),i()},C=S=>{o(n,S),b()},w=S=>{s(S)},T=!!l,A=T?"simple-popover":void 0;return m?e.jsx(e.Fragment,{children:Object.keys(m).length?e.jsxs(e.Fragment,{children:[e.jsxs(je,{component:"table",children:[e.jsx(ve,{children:e.jsxs(ce,{component:"tr",children:[e.jsx(v,{className:"empty"}),e.jsx(v,{children:e.jsxs(Ie,{onClick:()=>w(Re),children:["Name ",e.jsx(Le,{})]})}),e.jsx(v,{children:e.jsxs(Ie,{onClick:()=>w(Mr),children:["Count ",e.jsx(Le,{})]})}),e.jsx(v,{children:"Edge list"}),e.jsx(v,{children:e.jsxs(Ie,{onClick:()=>w(Rr),children:["Date ",e.jsx(Le,{})]})}),e.jsx(v,{children:e.jsx(h,{px:8,children:e.jsxs(ko,{onClick:t,children:[e.jsx(Ao,{checked:r,children:e.jsx($o,{children:r&&e.jsx(At,{})})}),"Muted"]})})})]})}),m&&e.jsx("tbody",{children:g==null?void 0:g.map(S=>e.jsx(_o,{onClick:j,onSearch:f,topic:m[S]},S))})]}),n?e.jsxs(Eo,{anchorEl:l,anchorOrigin:{vertical:"bottom",horizontal:"right"},id:A,onClose:b,open:T,transformOrigin:{vertical:"top",horizontal:"right"},children:[r?e.jsxs(ne,{onClick:()=>C("unMute"),children:[" ",e.jsx(jo,{"data-testid":""})," Unmute"]}):e.jsxs(ne,{onClick:()=>C("mute"),children:[" ",e.jsx(yo,{"data-testid":"VisibilityOff"})," Mute"]}),e.jsxs(ne,{onClick:()=>C("editTopic"),children:[e.jsx(mo,{"data-testid":"EditTopicIcon"})," Rename"]}),e.jsxs(ne,{onClick:()=>C("mergeTopic"),children:[e.jsx(go,{"data-testid":"MergeIcon"})," Merge"]}),e.jsxs(ne,{onClick:()=>C("addEdge"),children:[e.jsx(fo,{"data-testid":"AddCircleIcon"})," Add edge"]})]}):null]}):e.jsxs(h,{children:[e.jsx(_,{children:"There is not any results for selected filters"}),e.jsx(Be,{})]})}):e.jsxs(h,{children:[e.jsx(_,{children:"There is not any results for selected filters"}),e.jsx(Be,{})]})},ko=x.td`
  cursor: pointer;
  display: flex;
  align-items: center;
`,Ao=x.div`
  width: 14px;
  height: 14px;
  border-radius: 4px;
  border: ${({checked:t})=>t?"#618AFF":"2px solid #CCCCCC"};
  background-color: ${({checked:t})=>t?"#618AFF":"transparent"};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 8px;
`,$o=x.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 2px;
  background-color: transparent;
`,Ie=x.span`
  cursor: pointer;
  display: flex;
  gap: 4px;
  align-items: center;
`,ne=x(h).attrs({direction:"row",px:12,py:8})`
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
`,Eo=x(Fe)`
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
`,Lo=({placeholder:t,activeIcon:r,loadingIcon:o,defaultIcon:s,...i})=>{const[l,a]=N(j=>[j.filters,j.setFilters]),[n,d]=u.useState(!1),p=()=>{a({search:""}),d(!1)},y=j=>{!j.target.value&&p(),a({search:j.target.value})},m=j=>{const{value:b}=j.currentTarget;a({search:b}),!n&&(d(!0),setTimeout(()=>{b||p(),d(!1)},1e3),b||p())},g=()=>n?e.jsx(ot,{children:e.jsx(Pe,{type:"button",children:o})}):e.jsx(ot,{children:l.search?e.jsx(Pe,{onClick:p,type:"button",children:r}):e.jsx(Pe,{type:"button",children:s})});return e.jsxs(Io,{children:[e.jsx(Po,{autoComplete:"off",autoCorrect:"off",inputProps:{"aria-label":"search sources"},onChange:y,onKeyDown:j=>{j.key==="Enter"&&m(j)},placeholder:t,value:l.search,...i}),g()]})},ot=x(h)`
  top: -50%;
  right: -3%;
  z-index: 3;
  position: absolute;
  transform: translate(-50%, 50%);
`,Pe=x(F)`
  font-size: 24px;
`,Io=x(be)`
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
`,Po=x(Ce)`
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
`,No=()=>{const[t,r]=u.useState(!1),[o,s,i,l,a,n,d]=N(S=>[S.data,S.ids,S.total,S.setTopics,S.filters,S.setFilters,S.terminate]),{open:p}=D("editTopic"),{open:y}=D("mergeTopic"),{open:m}=D("addEdge"),[g,j]=u.useState(null),b={editTopic:p,mergeTopic:y,addEdge:m},f=u.useRef([]);u.useEffect(()=>{s.length&&(f.current=s)},[s]),u.useEffect(()=>{(async()=>{try{r(!0),await l()}catch{console.error("err")}finally{r(!1)}})()},[l,a]);const C=async()=>{try{r(!0),n({page:a.page+1})}catch(S){console.error("Error loading more data:",S)}finally{r(!1)}};u.useEffect(()=>()=>{d()},[d]);const w=S=>{n({sortBy:S})},T=()=>{j(null)},A=(S,L)=>{o&&(j(o[S]),typeof b[L]=="function"&&b[L]())};return e.jsxs(e.Fragment,{children:[e.jsxs(Bo,{direction:"column",justify:"flex-end",children:[e.jsx(Se,{align:"flex-start",direction:"row",justify:"space-between",children:e.jsx(_,{className:"title",children:"Topics"})}),e.jsx(Oo,{children:e.jsx(Lo,{activeIcon:e.jsx(H,{}),defaultIcon:e.jsx(ye,{}),loadingIcon:e.jsx($,{color:c.PRIMARY_BLUE,size:24}),placeholder:"Search ..."})}),e.jsx(zo,{align:"center",justify:t&&!o?"center":"flex-start",children:t&&!o?e.jsx($,{color:c.white}):e.jsxs(e.Fragment,{children:[e.jsx(To,{onChangeFilter:w,onTopicEdit:A,setShowMuteUnmute:()=>n({muted:!a.muted}),showMuted:a.muted}),i>s.length?e.jsxs(W,{className:"load-more",disabled:t,onClick:C,children:["Load more",t&&e.jsx($,{color:c.BLUE_PRESS_STATE,size:10})]}):null]})})]}),g&&e.jsx(xo,{onClose:T,topic:g}),g&&e.jsx(so,{onClose:T,topic:g}),g&&e.jsx(ro,{onClose:T,topic:g})]})},Bo=x(h)`
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
`,zo=x(h)`
  min-height: 0;
  overflow: auto;
  flex: 1;
  width: 100%;
`,Oo=x(h)`
  margin: 0 0 16px 36px;
`;function Do(t){return t.charAt(0).toUpperCase()+t.slice(1).toLowerCase()}const Mo=({node:t})=>{var r,o,s,i,l,a,n,d,p;return e.jsxs(we,{children:[e.jsx(v,{className:"empty"}),e.jsx(v,{children:(r=t==null?void 0:t.properties)!=null&&r.date_added_to_graph?ze((o=t==null?void 0:t.properties)==null?void 0:o.date_added_to_graph):ze((s=t==null?void 0:t.properties)==null?void 0:s.date)}),e.jsx(v,{children:t==null?void 0:t.node_type}),e.jsx(v,{children:(t==null?void 0:t.node_type)==="Tweet"?e.jsx(st,{href:`${Ke}${(i=t==null?void 0:t.properties)==null?void 0:i.tweet_id}${Ke.includes("?")?"&":"?"}open=system`,target:"_blank",children:(l=t==null?void 0:t.properties)==null?void 0:l.tweet_id}):e.jsx(st,{href:`${(a=t==null?void 0:t.properties)==null?void 0:a.source_link}${((n=t==null?void 0:t.properties)==null?void 0:n.source_link).includes("?")?"&":"?"}open=system`,target:"_blank",children:(d=t==null?void 0:t.properties)==null?void 0:d.source_link})}),e.jsx(v,{children:(p=t==null?void 0:t.properties)!=null&&p.status?Do(t.properties.status):"Processing"})]})},st=x.a`
  color: ${c.white};
  text-decoration: underline;
  &:visited {
    color: ${c.white};
  }
`,Ro=u.memo(Mo),Fo=({nodes:t})=>{const{open:r}=D("addContent"),o=async()=>{r()};return!t||(t==null?void 0:t.length)===0?e.jsx(e.Fragment,{children:e.jsxs(Wo,{children:[e.jsx(Vo,{align:"center",direction:"row",justify:"space-between",children:e.jsx(_,{className:"subtitle",children:"Contribute to the graph by adding content."})}),e.jsx(h,{children:e.jsx(W,{color:"secondary",onClick:o,size:"medium",startIcon:e.jsx(Yr,{}),type:"submit",variant:"contained",children:"Add Content"})})]})}):e.jsxs(je,{component:"table",children:[e.jsx(ve,{children:e.jsxs(ce,{component:"tr",children:[e.jsx(v,{className:"empty"}),e.jsx(v,{children:"Date"}),e.jsx(v,{children:"Type"}),e.jsx(v,{children:"Source"}),e.jsx(v,{children:"Status"})]})}),e.jsx("tbody",{children:t==null?void 0:t.map(s=>e.jsx(Ro,{node:s},s==null?void 0:s.ref_id))})]})},Wo=Me(h)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 100px auto;
  width: 100%;
`,Vo=Me(h)`
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
`,Go=()=>{const[t,r]=u.useState(!0),[o,s]=u.useState([]);return u.useEffect(()=>{(async()=>{try{const l=await nr();s(l.nodes),r(!1)}catch(l){console.error("Error fetching data:",l),r(!1)}})()},[]),e.jsxs(Uo,{direction:"column",justify:"flex-end",children:[e.jsx(Se,{align:"center",direction:"row",justify:"space-between",children:e.jsx(_,{className:"title",children:"Content I've added to the graph"})}),e.jsx(Ho,{align:"center",justify:t?"center":"flex-start",children:t?e.jsx($,{color:c.white}):e.jsx(e.Fragment,{children:e.jsx(Fo,{nodes:o})})})]})},Uo=x(h)`
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
`,Ho=x(h)`
  min-height: 0;
  overflow: auto;
  flex: 1;
  width: 100%;
`,Yo=[{label:Tt,component:Go},{label:Fr,component:Fn},{label:_t,component:$n},{label:St,component:No}],Zo=t=>{const{children:r,value:o,index:s,...i}=t;return o===s?e.jsx(Jo,{"aria-labelledby":`simple-tab-${s}`,hidden:o!==s,id:`simple-tabpanel-${s}`,role:"tabpanel",...i,children:r}):null};function Ko(t){return{id:`simple-tab-${t}`,"aria-controls":`simple-tabpanel-${t}`}}const qo=()=>{const[t,r]=u.useState(0),[o]=ie(n=>[n.isAdmin]),[s]=Mt(n=>[n.queuedSourcesFlag]),i=Rt(),l=(n,d)=>{r(d)},a=Yo.filter(({label:n})=>n===St?o:n===_t?o&&s:n===Tt?i:!0);return e.jsxs(es,{direction:"column",children:[e.jsx(Qo,{"aria-label":"sources tabs",onChange:l,value:t,children:a.map((n,d)=>e.jsx(Xo,{color:c.white,disableRipple:!0,label:n.label,...Ko(d)},n.label))}),a.map((n,d)=>e.jsx(Zo,{index:d,value:t,children:e.jsx(n.component,{})},n.label))]})},Qo=x(Zr)`
  && {
    background: rgba(0, 0, 0, 0.2);

    .MuiTabs-indicator {
      background: ${c.primaryBlue};
    }
  }
`,Xo=x(Kr)`
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
`,Jo=x(h)`
  display: flex;
  flex: 1;
  min-height: 572px;
  padding: 20px 0;
  max-height: 572px;
`,es=x(h)`
  min-height: 0;
  flex: 1;
`,xe={required:{message:"The field is required",value:!0}},ts=({initialValues:t})=>{const r=ae({defaultValues:t,mode:"onSubmit"}),{isSubmitting:o}=r.formState,s=r.handleSubmit(async i=>{try{await or(i)}catch(l){console.warn(l)}});return e.jsx(le,{...r,children:e.jsx("form",{id:"add-node-form",onSubmit:s,children:e.jsxs(e.Fragment,{children:[e.jsxs(h,{children:[e.jsx(h,{pt:12,children:e.jsx(oe,{id:"cy-about-title-id",label:"Graph Title",maxLength:50,name:"title",placeholder:"Type graph title here...",rules:{...xe}})}),e.jsx(h,{pt:12,children:e.jsx(oe,{id:"cy-about-id",label:"Graph Description",maxLength:50,name:"description",placeholder:"Type graph description here...",rules:{...xe}})}),e.jsx(h,{pt:12,children:e.jsx(oe,{id:"cy-about-mission_statement-id",label:"Mission Statement",maxLength:50,name:"mission_statement",placeholder:"Type mission statement here...",rules:{...xe}})}),e.jsx(h,{pt:12,children:e.jsx(oe,{id:"cy-about-search_term-id",label:"Search Term",maxLength:50,name:"search_term",placeholder:"Type search term here...",rules:{...xe}})})]}),e.jsx(h,{pt:8,children:o?e.jsx(rs,{children:e.jsx($,{color:c.white,size:20})}):e.jsx($t,{disabled:o,id:"add-node-submit-cta",kind:"big",type:"submit",children:"Save changes"})})]})})})},rs=x(h).attrs({align:"center",background:"primaryButton",borderRadius:8,justify:"center"})`
  padding: 16px 24px;
  opacity: 0.5;
`,ns=({initialValues:t})=>e.jsxs(e.Fragment,{children:[t.title&&e.jsxs(h,{pt:12,children:[e.jsx(_,{kind:"regular",children:"Graph Title"}),e.jsx(h,{pt:12,children:e.jsx(_,{className:"value",kind:"medium",children:t.title})})]}),t.description&&e.jsxs(h,{pt:12,children:[e.jsx(_,{kind:"regular",children:"Graph Description"}),e.jsx(h,{pt:12,children:e.jsx(_,{className:"value",kind:"medium",children:t.description})})]}),t.mission_statement&&e.jsxs(h,{pt:12,children:[e.jsx(_,{kind:"regular",children:"Mission Statement"}),e.jsx(h,{pt:12,children:e.jsx(_,{className:"value",kind:"medium",children:t.mission_statement})})]})]}),os=()=>{const[t]=ie(o=>[o.isAdmin]),r=q(o=>o.appMetaData);return e.jsxs(ss,{align:"stretch",direction:"column",justify:"flex-end",children:[e.jsx(as,{align:"center",direction:"row",justify:"space-between",children:e.jsx(_,{className:"title",children:"About"})}),e.jsx(is,{align:"stretch",justify:"flex-start",children:t?e.jsx(ts,{initialValues:r}):e.jsx(ns,{initialValues:r})})]})},ss=x(h)`
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
`,is=x(h)`
  min-height: 0;
  overflow: auto;
  flex: 1;
  width: 100%;
`,as=x(h)`
  margin-bottom: 16px;
  ${_} {
    margin-bottom: 0;
  }
`;var ls=["type","layout","connectNulls","ref"];function Z(t){"@babel/helpers - typeof";return Z=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},Z(t)}function cs(t,r){if(t==null)return{};var o=ds(t,r),s,i;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(i=0;i<l.length;i++)s=l[i],!(r.indexOf(s)>=0)&&Object.prototype.propertyIsEnumerable.call(t,s)&&(o[s]=t[s])}return o}function ds(t,r){if(t==null)return{};var o={},s=Object.keys(t),i,l;for(l=0;l<s.length;l++)i=s[l],!(r.indexOf(i)>=0)&&(o[i]=t[i]);return o}function se(){return se=Object.assign?Object.assign.bind():function(t){for(var r=1;r<arguments.length;r++){var o=arguments[r];for(var s in o)Object.prototype.hasOwnProperty.call(o,s)&&(t[s]=o[s])}return t},se.apply(this,arguments)}function it(t,r){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);r&&(s=s.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),o.push.apply(o,s)}return o}function P(t){for(var r=1;r<arguments.length;r++){var o=arguments[r]!=null?arguments[r]:{};r%2?it(Object(o),!0).forEach(function(s){B(t,s,o[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):it(Object(o)).forEach(function(s){Object.defineProperty(t,s,Object.getOwnPropertyDescriptor(o,s))})}return t}function G(t){return xs(t)||us(t)||hs(t)||ps()}function ps(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function hs(t,r){if(t){if(typeof t=="string")return Oe(t,r);var o=Object.prototype.toString.call(t).slice(8,-1);if(o==="Object"&&t.constructor&&(o=t.constructor.name),o==="Map"||o==="Set")return Array.from(t);if(o==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return Oe(t,r)}}function us(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function xs(t){if(Array.isArray(t))return Oe(t)}function Oe(t,r){(r==null||r>t.length)&&(r=t.length);for(var o=0,s=new Array(r);o<r;o++)s[o]=t[o];return s}function fs(t,r){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")}function at(t,r){for(var o=0;o<r.length;o++){var s=r[o];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,Et(s.key),s)}}function ms(t,r,o){return r&&at(t.prototype,r),o&&at(t,o),Object.defineProperty(t,"prototype",{writable:!1}),t}function gs(t,r){if(typeof r!="function"&&r!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(r&&r.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),r&&De(t,r)}function De(t,r){return De=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(s,i){return s.__proto__=i,s},De(t,r)}function ys(t){var r=bs();return function(){var s=ge(t),i;if(r){var l=ge(this).constructor;i=Reflect.construct(s,arguments,l)}else i=s.apply(this,arguments);return js(this,i)}}function js(t,r){if(r&&(Z(r)==="object"||typeof r=="function"))return r;if(r!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return O(t)}function O(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function bs(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function ge(t){return ge=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(o){return o.__proto__||Object.getPrototypeOf(o)},ge(t)}function B(t,r,o){return r=Et(r),r in t?Object.defineProperty(t,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[r]=o,t}function Et(t){var r=Cs(t,"string");return Z(r)==="symbol"?r:String(r)}function Cs(t,r){if(Z(t)!=="object"||t===null)return t;var o=t[Symbol.toPrimitive];if(o!==void 0){var s=o.call(t,r||"default");if(Z(s)!=="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(t)}var de=function(t){gs(o,t);var r=ys(o);function o(){var s;fs(this,o);for(var i=arguments.length,l=new Array(i),a=0;a<i;a++)l[a]=arguments[a];return s=r.call.apply(r,[this].concat(l)),B(O(s),"state",{isAnimationFinished:!0,totalLength:0}),B(O(s),"generateSimpleStrokeDasharray",function(n,d){return"".concat(d,"px ").concat(n-d,"px")}),B(O(s),"getStrokeDasharray",function(n,d,p){var y=p.reduce(function(T,A){return T+A});if(!y)return s.generateSimpleStrokeDasharray(d,n);for(var m=Math.floor(n/y),g=n%y,j=d-n,b=[],f=0,C=0;f<p.length;C+=p[f],++f)if(C+p[f]>g){b=[].concat(G(p.slice(0,f)),[g-C]);break}var w=b.length%2===0?[0,j]:[j];return[].concat(G(o.repeat(p,m)),G(b),w).map(function(T){return"".concat(T,"px")}).join(", ")}),B(O(s),"id",ur("recharts-line-")),B(O(s),"pathRef",function(n){s.mainCurve=n}),B(O(s),"handleAnimationEnd",function(){s.setState({isAnimationFinished:!0}),s.props.onAnimationEnd&&s.props.onAnimationEnd()}),B(O(s),"handleAnimationStart",function(){s.setState({isAnimationFinished:!1}),s.props.onAnimationStart&&s.props.onAnimationStart()}),s}return ms(o,[{key:"componentDidMount",value:function(){if(this.props.isAnimationActive){var i=this.getTotalLength();this.setState({totalLength:i})}}},{key:"componentDidUpdate",value:function(){if(this.props.isAnimationActive){var i=this.getTotalLength();i!==this.state.totalLength&&this.setState({totalLength:i})}}},{key:"getTotalLength",value:function(){var i=this.mainCurve;try{return i&&i.getTotalLength&&i.getTotalLength()||0}catch{return 0}}},{key:"renderErrorBar",value:function(i,l){if(this.props.isAnimationActive&&!this.state.isAnimationFinished)return null;var a=this.props,n=a.points,d=a.xAxis,p=a.yAxis,y=a.layout,m=a.children,g=xr(m,fr);if(!g)return null;var j=function(C,w){return{x:C.x,y:C.y,value:C.value,errorVal:gt(C.payload,w)}},b={clipPath:i?"url(#clipPath-".concat(l,")"):null};return E.createElement(Te,b,g.map(function(f){return E.cloneElement(f,{key:"bar-".concat(f.props.dataKey),data:n,xAxis:d,yAxis:p,layout:y,dataPointFormatter:j})}))}},{key:"renderDots",value:function(i,l,a){var n=this.props.isAnimationActive;if(n&&!this.state.isAnimationFinished)return null;var d=this.props,p=d.dot,y=d.points,m=d.dataKey,g=ue(this.props),j=ue(p,!0),b=y.map(function(C,w){var T=P(P(P({key:"dot-".concat(w),r:3},g),j),{},{value:C.value,dataKey:m,cx:C.x,cy:C.y,index:w,payload:C.payload});return o.renderDotItem(p,T)}),f={clipPath:i?"url(#clipPath-".concat(l?"":"dots-").concat(a,")"):null};return E.createElement(Te,se({className:"recharts-line-dots",key:"dots"},f),b)}},{key:"renderCurveStatically",value:function(i,l,a,n){var d=this.props,p=d.type,y=d.layout,m=d.connectNulls;d.ref;var g=cs(d,ls),j=P(P(P({},ue(g,!0)),{},{fill:"none",className:"recharts-line-curve",clipPath:l?"url(#clipPath-".concat(a,")"):null,points:i},n),{},{type:p,layout:y,connectNulls:m});return E.createElement(mr,se({},j,{pathRef:this.pathRef}))}},{key:"renderCurveWithAnimation",value:function(i,l){var a=this,n=this.props,d=n.points,p=n.strokeDasharray,y=n.isAnimationActive,m=n.animationBegin,g=n.animationDuration,j=n.animationEasing,b=n.animationId,f=n.animateNewValues,C=n.width,w=n.height,T=this.state,A=T.prevPoints,S=T.totalLength;return E.createElement(gr,{begin:m,duration:g,isActive:y,easing:j,from:{t:0},to:{t:1},key:"line-".concat(b),onAnimationEnd:this.handleAnimationEnd,onAnimationStart:this.handleAnimationStart},function(L){var k=L.t;if(A){var Q=A.length/d.length,R=d.map(function(I,_e){var ee=Math.floor(_e*Q);if(A[ee]){var te=A[ee],V=re(te.x,I.x),Lt=re(te.y,I.y);return P(P({},I),{},{x:V(k),y:Lt(k)})}if(f){var It=re(C*2,I.x),Pt=re(w/2,I.y);return P(P({},I),{},{x:It(k),y:Pt(k)})}return P(P({},I),{},{x:I.x,y:I.y})});return a.renderCurveStatically(R,i,l)}var pe=re(0,S),X=pe(k),J;if(p){var he="".concat(p).split(/[,\s]+/gim).map(function(I){return parseFloat(I)});J=a.getStrokeDasharray(X,S,he)}else J=a.generateSimpleStrokeDasharray(S,X);return a.renderCurveStatically(d,i,l,{strokeDasharray:J})})}},{key:"renderCurve",value:function(i,l){var a=this.props,n=a.points,d=a.isAnimationActive,p=this.state,y=p.prevPoints,m=p.totalLength;return d&&n&&n.length&&(!y&&m>0||!yr(y,n))?this.renderCurveWithAnimation(i,l):this.renderCurveStatically(n,i,l)}},{key:"render",value:function(){var i,l=this.props,a=l.hide,n=l.dot,d=l.points,p=l.className,y=l.xAxis,m=l.yAxis,g=l.top,j=l.left,b=l.width,f=l.height,C=l.isAnimationActive,w=l.id;if(a||!d||!d.length)return null;var T=this.state.isAnimationFinished,A=d.length===1,S=Ye("recharts-line",p),L=y&&y.allowDataOverflow,k=m&&m.allowDataOverflow,Q=L||k,R=Ne(w)?this.id:w,pe=(i=ue(n))!==null&&i!==void 0?i:{r:3,strokeWidth:2},X=pe.r,J=X===void 0?3:X,he=pe.strokeWidth,I=he===void 0?2:he,_e=jr(n)?n:{},ee=_e.clipDot,te=ee===void 0?!0:ee,V=J*2+I;return E.createElement(Te,{className:S},L||k?E.createElement("defs",null,E.createElement("clipPath",{id:"clipPath-".concat(R)},E.createElement("rect",{x:L?j:j-b/2,y:k?g:g-f/2,width:L?b:b*2,height:k?f:f*2})),!te&&E.createElement("clipPath",{id:"clipPath-dots-".concat(R)},E.createElement("rect",{x:j-V/2,y:g-V/2,width:b+V,height:f+V}))):null,!A&&this.renderCurve(Q,R),this.renderErrorBar(Q,R),(A||n)&&this.renderDots(Q,te,R),(!C||T)&&br.renderCallByParent(this.props,d))}}],[{key:"getDerivedStateFromProps",value:function(i,l){return i.animationId!==l.prevAnimationId?{prevAnimationId:i.animationId,curPoints:i.points,prevPoints:l.curPoints}:i.points!==l.curPoints?{curPoints:i.points}:null}},{key:"repeat",value:function(i,l){for(var a=i.length%2!==0?[].concat(G(i),[0]):i,n=[],d=0;d<l;++d)n=[].concat(G(n),G(a));return n}},{key:"renderDotItem",value:function(i,l){var a;if(E.isValidElement(i))a=E.cloneElement(i,l);else if(Ft(i))a=i(l);else{var n=Ye("recharts-line-dot",i?i.className:"");a=E.createElement(mt,se({},l,{className:n}))}return a}}]),o}(u.PureComponent);B(de,"displayName","Line");B(de,"defaultProps",{xAxisId:0,yAxisId:0,connectNulls:!1,activeDot:!0,dot:!0,legendType:"line",stroke:"#3182bd",strokeWidth:1,fill:"#fff",points:[],isAnimationActive:!hr.isSsr,animateNewValues:!0,animationBegin:0,animationDuration:1500,animationEasing:"ease",hide:!1,label:!1});B(de,"getComposedData",function(t){var r=t.props,o=t.xAxis,s=t.yAxis,i=t.xAxisTicks,l=t.yAxisTicks,a=t.dataKey,n=t.bandSize,d=t.displayedData,p=t.offset,y=r.layout,m=d.map(function(g,j){var b=gt(g,a);return y==="horizontal"?{x:Ze({axis:o,ticks:i,bandSize:n,entry:g,index:j}),y:Ne(b)?null:s.scale(b),value:b,payload:g}:{x:Ne(b)?null:o.scale(b),y:Ze({axis:s,ticks:l,bandSize:n,entry:g,index:j}),value:b,payload:g}});return P({points:m,layout:y},p)});var ws=Cr({chartName:"LineChart",GraphicalChild:de,axisComponents:[{axisType:"xAxis",AxisComp:yt},{axisType:"yAxis",AxisComp:jt}],formatAxisMap:wr});const vs=({cx:t,cy:r})=>e.jsx(mt,{cx:t,cy:r,fill:c.blueTextAccent,r:2}),Ss=({data:t,width:r=500,height:o=300})=>e.jsx(e.Fragment,{children:(t==null?void 0:t.length)&&e.jsxs(ws,{data:t,height:o,id:"cy-sentiment-chart",margin:{bottom:5,left:-20,right:30,top:5},width:r,children:[e.jsx(vr,{stroke:c.lightBlue300,strokeDasharray:"5 5"}),e.jsx(yt,{dataKey:"date",interval:Math.floor(t.length/3),stroke:c.blueTextAccent}),e.jsx(jt,{domain:[0,10],stroke:c.blueTextAccent}),e.jsx(Sr,{}),e.jsx(de,{dataKey:"score",dot:e.jsx(vs,{}),stroke:"#8884d8",type:"monotone"})]})}),_s=()=>{const[t,r]=u.useState(void 0),[o]=ie(a=>[a.setBudget]),[s,i]=u.useState(!1),l=async()=>{i(!0),sr(o).then(async a=>{r(a==null?void 0:a.data.filter(n=>n.date).map(n=>({date:Vt.unix(Number(String(n.date).split(".")[0])).format("MM/DD/YY"),score:n.sentiment_score}))),await dt(o)}).catch().finally(()=>{i(!1)})};return e.jsxs(Ts,{align:"flex-start",direction:"column",id:"cy-sentiment-chart-wrapper",justify:"flex-end",children:[e.jsx(_,{className:"title",children:"Sentiment chart"}),s&&e.jsx(Hr,{alignItems:"center",component:"div",flexGrow:1,p:4,spacing:2,width:"100%",children:e.jsx(Wt,{color:c.white})}),!(t!=null&&t.length)&&e.jsx(ks,{className:"button",id:"cy-get-sentiments-btn",onClick:l,children:"Get top 100 sentiments"}),e.jsx(Ss,{data:t})]})},Ts=x(h)`
  border-radius: 8px;
  box-shadow: 0px 5px 6px rgb(0 0 0 / 50%);
  padding: 16px;

  .title {
    margin-bottom: 16px;
    font-size: 20px;
  }
`,ks=x($t)`
  height: 48px;
`,As=600,$s={about:e.jsx(os,{}),sentiment:e.jsx(_s,{}),sources:e.jsx(qo,{}),"":null},Es=()=>{const[t,r]=q(o=>[o.secondarySidebarActiveTab,o.setSecondarySidebarActiveTab]);return e.jsx(_r,{direction:"left",in:!!t,mountOnEnter:!0,unmountOnExit:!0,children:e.jsxs(Ls,{id:"secondary-sidebar-wrapper",children:[e.jsx(Is,{id:"cy-close-secondary-sidebar",onClick:()=>r(""),children:e.jsx(bt,{})}),$s[t]]})})},Ls=x(h)(({theme:t})=>({background:c.BG1,height:"100vh",padding:"16px 20px",width:"100%",zIndex:30,display:"flex",[t.breakpoints.up("sm")]:{width:As}})),Is=x(h).attrs({align:"center",justify:"center",p:5})`
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
`,Ps=x(ir)`
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
`,Ns=x(h)`
  height: 100%;
  width: 100%;
  background-color: ${c.black};
`,Bs=x(h)`
  position: absolute;
  bottom: 8px;
  left: 8px;
  color: ${c.white};
  font-size: 12px;
  opacity: 0.5;
`,zs=u.lazy(()=>z(()=>import("./index-397b015f.js"),["assets/index-397b015f.js","assets/index-fbea16ad.js","assets/index-3f17fe3b.css","assets/SourcesTableIcon-a9bca1e4.js","assets/SettingsIcon-f70252e7.js","assets/index-945068c3.js","assets/index.esm-08135425.js","assets/react-toastify.esm-ee4152bf.js","assets/react-toastify-b60658ac.css","assets/index-73d5b24f.js"]).then(({MainToolbar:t})=>({default:t}))),Os=u.lazy(()=>z(()=>import("./index-6e4f2bc8.js"),["assets/index-6e4f2bc8.js","assets/index-fbea16ad.js","assets/index-3f17fe3b.css","assets/EditIcon-734f642e.js","assets/react-toastify.esm-ee4152bf.js","assets/react-toastify-b60658ac.css","assets/generateCategoricalChart-491cd6ff.js","assets/Popover-29078010.js","assets/useSlotProps-22211fec.js","assets/InfoIcon-8f72a8b2.js","assets/index-451ca961.js","assets/index.esm-08135425.js","assets/PlusIcon-8b46e117.js","assets/index-73d5b24f.js","assets/ChevronUpIcon-d81cc681.js","assets/ChevronDownIcon-83c66862.js","assets/index-e2f44253.js","assets/index-ce67f34a.js","assets/index-c28e550d.js","assets/index-7b5195df.js","assets/Popper-f1095716.js","assets/CheckIcon-190c4154.js","assets/Stack-6ea30c66.js"]).then(({Universe:t})=>({default:t}))),Ds=u.lazy(()=>z(()=>import("./index-34a310e7.js"),["assets/index-34a310e7.js","assets/index-fbea16ad.js","assets/index-3f17fe3b.css","assets/react-toastify.esm-ee4152bf.js","assets/react-toastify-b60658ac.css","assets/CheckIcon-190c4154.js","assets/ChevronDownIcon-83c66862.js","assets/ChevronUpIcon-d81cc681.js","assets/index-e2f44253.js","assets/useSlotProps-22211fec.js","assets/Popover-29078010.js","assets/ChevronRightIcon-7f6f6ab7.js","assets/Select-29bc5b44.js","assets/generateCategoricalChart-491cd6ff.js","assets/InfoIcon-8f72a8b2.js","assets/index.esm-08135425.js","assets/toastMessage-63eefe97.js","assets/ChevronRightIcon-6125620a.css","assets/index-9a7877cb.js","assets/index-451ca961.js","assets/Skeleton-90c61c11.js","assets/PlusIcon-8b46e117.js","assets/index-73d5b24f.js","assets/index-7b5195df.js"]).then(({SideBar:t})=>({default:t}))),Ms=()=>{const[t,r]=ie(k=>[k.setBudget,k.setNodeCount]),[o,s]=u.useState(!1),{setSidebarOpen:i,currentSearch:l,setCurrentSearch:a,setRelevanceSelected:n,setTranscriptOpen:d}=q(k=>k),p=Tr(k=>k.setTeachMeAnswer),{data:y,setData:m,fetchData:g,graphStyle:j,setSelectedNode:b,setCategoryFilter:f}=K(k=>k),C=ar(),w=ae({mode:"onChange"}),T=w.handleSubmit(({search:k})=>{d(!1),b(null),n(!1),a(k),p(""),f(null)}),A=u.useCallback(async()=>{await g(t,{...l?{word:l}:{}}),i(!0),l?await dt(t):b(null)},[g,t,l,i,b]);u.useEffect(()=>{A()},[l,A]);const S=()=>{if(y){s(!0);const k=pr(j,y.nodes);setTimeout(()=>{m(k),s(!1)},1e3)}};u.useEffect(()=>{S()},[j]);const L=u.useCallback(()=>{r("INCREMENT")},[r]);return u.useEffect(()=>{C&&(C.on("connect_error",k=>{console.error("Socket connection error:",k)}),C.on("newnode",L))},[C,L]),u.useEffect(()=>()=>{C&&C.disconnect()},[C]),e.jsxs(e.Fragment,{children:[e.jsx(lr,{}),e.jsx(vn,{}),e.jsx(cr,{hidden:!Gt}),e.jsx(u.Suspense,{fallback:e.jsx("div",{children:"Loading..."}),children:e.jsxs(Ns,{direction:"row",children:[e.jsx(kr,{children:e.jsxs(le,{...w,children:[e.jsx(zs,{}),e.jsx(Ds,{onSubmit:T}),e.jsx(Os,{}),o&&e.jsx(dn,{fullSize:!1}),e.jsx(ln,{}),e.jsx(Es,{}),e.jsx(bn,{}),e.jsxs(Bs,{children:["v",dr]}),e.jsx(pt,{})]})}),e.jsx(jn,{}),e.jsx(Ps,{}),e.jsx(kn,{})]})})]})},ri=Object.freeze(Object.defineProperty({__proto__:null,App:Ms},Symbol.toStringTag,{value:"Module"}));export{ln as O,dn as P,we as S,v as a,ve as b,qo as c,ri as i};
