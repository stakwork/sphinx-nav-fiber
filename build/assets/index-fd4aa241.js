import{c as lt,_ as fe,r as x,u as Pt,a as Nt,j as e,F as h,T as S,s as g,b as c,d as B,m as Dt,e as It,f as We,Y as Ve,R as Ge,g as se,l as ct,h as Bt,i as E,k as Ot,n as zt,o as Mt,P as Rt,p as Ft,q as dt,t as Wt}from"./index-5fb1066b.js";import{g as Vt,a as Gt,s as Oe,c as Ut,b as Ht,A as Yt,u as Z,d as pt,e as K,f as M,C as $,S as Zt,h as Kt,B as R,i as qt,j as ht,k as ut,I as ie,p as Qt,l as U,m as xt,n as Xt,o as ae,F as le,q as Jt,r as ft,t as er,v as tr,w as rr,x as nr,Q as or,y as sr,G as ir,L as ar,z as lr,D as cr}from"./react-toastify.esm-74a6e79d.js";import{f as Ue,G as dr,u as pr,c as He,D as mt,a as hr,E as ur,L as Te,b as ue,C as xr,A as fr,i as te,d as mr,e as Ne,g as gr,h as yr,j as gt,k as Ye,l as jr,X as yt,Y as jt,m as br,n as Cr,T as vr,S as wr,o as Sr,p as _r}from"./generateCategoricalChart-ce31e371.js";import{M as Tr,a as Ar,b as kr,c as $r,d as bt,e as Er}from"./index.esm-a4700a64.js";import{T as Lr,a as ce,b as Pr,F as De,M as ye,C as Ct,N as Nr,c as Dr,D as ze}from"./NoFilterResultIcon-1c50afa9.js";import{s as H,T as vt,A as Me,u as D,I as Ir,E as Br,D as Or,a as Ze,b as wt,Q as St,V as _t,S as zr}from"./index-533926d5.js";import{S as je,C as Mr,a as Rr}from"./ChevronUpIcon-44043c2c.js";import{P as be,I as Ce,a as Re,F as Fr}from"./Popover-6a0988bf.js";import{B as Wr,T as ne}from"./index-9bd962af.js";import{u as z}from"./index-8c752204.js";import{B as Fe}from"./index-336ec8a7.js";import{P as Tt}from"./Popper-03cceb62.js";import{C as Vr}from"./CheckIcon-c6306821.js";import{e as Gr,S as Ur}from"./Stack-5d503865.js";import{P as Hr}from"./PlusIcon-6f90f472.js";import{T as Yr,a as Zr,B as At}from"./index-dba1eeb7.js";function Kr(t){return Vt("MuiTypography",t)}Gt("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);const qr=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],Qr=t=>{const{align:r,gutterBottom:n,noWrap:s,paragraph:i,variant:l,classes:a}=t,o={root:["root",l,t.align!=="inherit"&&`align${lt(r)}`,n&&"gutterBottom",s&&"noWrap",i&&"paragraph"]};return Ht(o,Kr,a)},Xr=Oe("span",{name:"MuiTypography",slot:"Root",overridesResolver:(t,r)=>{const{ownerState:n}=t;return[r.root,n.variant&&r[n.variant],n.align!=="inherit"&&r[`align${lt(n.align)}`],n.noWrap&&r.noWrap,n.gutterBottom&&r.gutterBottom,n.paragraph&&r.paragraph]}})(({theme:t,ownerState:r})=>fe({margin:0},r.variant==="inherit"&&{font:"inherit"},r.variant!=="inherit"&&t.typography[r.variant],r.align!=="inherit"&&{textAlign:r.align},r.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},r.gutterBottom&&{marginBottom:"0.35em"},r.paragraph&&{marginBottom:16})),Ke={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},Jr={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},en=t=>Jr[t]||t,tn=x.forwardRef(function(r,n){const s=Pt({props:r,name:"MuiTypography"}),i=en(s.color),l=Gr(fe({},s,{color:i})),{align:a="inherit",className:o,component:d,gutterBottom:p=!1,noWrap:f=!1,paragraph:m=!1,variant:y="body1",variantMapping:b=Ke}=l,j=Nt(l,qr),u=fe({},l,{align:a,color:i,className:o,component:d,gutterBottom:p,noWrap:f,paragraph:m,variant:y,variantMapping:b}),C=d||(m?"p":b[y]||Ke[y])||"span",v=Qr(u);return e.jsx(Xr,fe({as:C,ref:n,ownerState:u,className:Ut(v.root,o)},j))}),qe=tn,rn=({twitterHandle:t})=>e.jsx(e.Fragment,{children:e.jsx(h,{direction:"row",children:e.jsx(h,{align:"flex-start",pb:12,children:e.jsxs(S,{children:["Tweet by @",t]})})})}),nn=g(h)(({theme:t})=>({position:"absolute",top:"65px",right:"55px",width:"300px",pointerEvents:"none",background:c.dashboardHeader,boxShadow:"0px 1px 6px rgba(0, 0, 0, 0.1)",color:c.primaryText1,zIndex:100,transition:"opacity 0.6s",padding:t.spacing(2,3),[t.breakpoints.down("sm")]:{padding:t.spacing(1,1.5)}})),on=g(h)`
  width: 22.5%;
`,sn=({node:t})=>{if(!t)return null;const{node_type:r,show_title:n,episode_title:s,description:i,label:l,text:a,type:o,twitter_handle:d}=t,p=t.guests;let f=!1,m=!1;p&&(p.length&&p[0]!==null&&(f=!0),typeof p[0]=="object"&&(m=!0));let y=t.image_url;if(o==="twitter_space"&&(y="twitter_placeholder.png"),y==null)switch(r){case"guest":y="person_placeholder2.png";break;default:y="noimage.jpeg"}return r==="topic"?null:e.jsx(nn,{borderRadius:8,px:24,py:16,children:r==="tweet"?e.jsx(rn,{twitterHandle:d}):e.jsxs(e.Fragment,{children:[e.jsxs(h,{direction:"row",children:[e.jsx(on,{}),e.jsx(h,{align:"flex-start",pb:12,children:e.jsx(S,{children:r==null?void 0:r.toUpperCase()})})]}),e.jsxs(h,{direction:"row",children:[e.jsx(h,{pr:12,children:e.jsx(Yt,{src:y,type:"person"})}),e.jsxs("div",{children:[o==="guest"?e.jsxs(h,{direction:"column",children:[e.jsx(S,{children:l}),a&&e.jsx(h,{pt:4,children:e.jsxs(S,{color:"primaryText1",kind:"tiny",children:["@",a]})})]}):e.jsx(S,{color:"primaryText1",kind:"tiny",children:n}),e.jsxs(h,{pt:4,children:[r==="clip"||r==="episode"&&e.jsx(S,{color:"primaryText1",children:"Episode"}),r==="clip"?e.jsx(S,{as:"div",kind:"regularBold",children:Ue(i)}):e.jsx(S,{color:"primaryText1",kind:"tiny",children:s})]}),e.jsxs(h,{pt:12,children:[r==="clip"&&e.jsx(S,{color:"primaryText1",children:"Episode"}),e.jsx(S,{color:"primaryText1",kind:"tiny",children:r==="clip"?s:Ue(i)})]}),f&&e.jsxs(h,{pt:12,children:[e.jsx(S,{color:"primaryText1",children:"People"}),e.jsx(h,{pt:4,children:e.jsx(S,{color:"primaryText1",kind:"tiny",children:m?p.map(b=>b.name?b.name:`@${b.twitter_handle}`).join(", "):p==null?void 0:p.join(", ")})})]})]})]})]})})},an=()=>{const[t]=Z(r=>[r.hoveredNode]);return e.jsxs(ln,{children:[t&&e.jsx("div",{id:"tooltip-portal",children:e.jsx(sn,{node:t})}),e.jsx(pt,{})]})},ln=g("div")(({theme:t})=>({position:"absolute",zIndex:1,top:0,left:0,userSelect:"none",pointerEvents:"none",display:"flex",justifyContent:"flex-end",alignItems:"flex-start",height:"100%",width:"100%",padding:"16px",[t.breakpoints.down("sm")]:{top:50}})),cn=({fullSize:t=!0})=>{const r=K(n=>n.sidebarIsOpen);return e.jsx(dn,{align:"center",className:M({"sidebar-is-open":r&&!t}),justify:"center",children:e.jsx($,{color:c.SECONDARY_BLUE,size:64})})},dn=g(h)`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  background-color: ${c.black};
  z-index: 1;
`,pn=x.lazy(()=>B(()=>import("./index-dc962745.js"),["assets/index-dc962745.js","assets/index-5fb1066b.js","assets/index-3f17fe3b.css","assets/index-336ec8a7.js","assets/index-8c752204.js","assets/react-toastify.esm-74a6e79d.js","assets/react-toastify-b60658ac.css","assets/index-dba1eeb7.js","assets/useSlotProps-4cfb1cc9.js","assets/index-9bd962af.js","assets/index.esm-a4700a64.js","assets/InfoIcon-3763223f.js"]).then(({SettingsModal:t})=>({default:t}))),hn=x.lazy(()=>B(()=>import("./index-8cee0447.js"),["assets/index-8cee0447.js","assets/index-5fb1066b.js","assets/index-3f17fe3b.css","assets/react-toastify.esm-74a6e79d.js","assets/react-toastify-b60658ac.css","assets/index-336ec8a7.js","assets/index-8c752204.js","assets/index-0756ab25.js","assets/index.esm-a4700a64.js","assets/CheckIcon-c6306821.js","assets/index-9bd962af.js","assets/InfoIcon-3763223f.js"]).then(({AddContentModal:t})=>({default:t}))),un=x.lazy(()=>B(()=>import("./index-7ec6b12c.js"),["assets/index-7ec6b12c.js","assets/index-5fb1066b.js","assets/index-3f17fe3b.css","assets/react-toastify.esm-74a6e79d.js","assets/react-toastify-b60658ac.css","assets/index-336ec8a7.js","assets/index-8c752204.js","assets/index-0756ab25.js","assets/index.esm-a4700a64.js","assets/CheckIcon-c6306821.js","assets/index-9bd962af.js","assets/InfoIcon-3763223f.js","assets/index-3e388da8.js","assets/index-b87a6c6a.js","assets/Popover-6a0988bf.js","assets/useSlotProps-4cfb1cc9.js","assets/Select-c279e03a.js","assets/Stack-5d503865.js","assets/Popper-03cceb62.js","assets/constants-84edb5fc.js"]).then(({AddItemModal:t})=>({default:t}))),xn=x.lazy(()=>B(()=>import("./index-88fd258d.js"),["assets/index-88fd258d.js","assets/index-5fb1066b.js","assets/index-3f17fe3b.css","assets/index-336ec8a7.js","assets/index-8c752204.js","assets/react-toastify.esm-74a6e79d.js","assets/react-toastify-b60658ac.css","assets/generateCategoricalChart-ce31e371.js","assets/Popover-6a0988bf.js","assets/useSlotProps-4cfb1cc9.js","assets/InfoIcon-3763223f.js","assets/index.esm-a4700a64.js","assets/NoFilterResultIcon-1c50afa9.js","assets/ChevronUpIcon-44043c2c.js","assets/index-dba1eeb7.js","assets/index-533926d5.js","assets/index-9bd962af.js","assets/Popper-03cceb62.js","assets/CheckIcon-c6306821.js","assets/Stack-5d503865.js","assets/PlusIcon-6f90f472.js"]).then(({SourcesTableModal:t})=>({default:t}))),fn=x.lazy(()=>B(()=>import("./index-827dd378.js"),["assets/index-827dd378.js","assets/index-5fb1066b.js","assets/index-3f17fe3b.css","assets/index-336ec8a7.js","assets/index-8c752204.js","assets/react-toastify.esm-74a6e79d.js","assets/react-toastify-b60658ac.css","assets/index-533926d5.js","assets/index-9bd962af.js","assets/index.esm-a4700a64.js","assets/InfoIcon-3763223f.js","assets/Skeleton-0c45b681.js"]).then(({EditNodeNameModal:t})=>({default:t}))),mn=x.lazy(()=>B(()=>import("./index-961b0f5d.js"),["assets/index-961b0f5d.js","assets/index-5fb1066b.js","assets/index-3f17fe3b.css","assets/index-336ec8a7.js","assets/index-8c752204.js","assets/react-toastify.esm-74a6e79d.js","assets/react-toastify-b60658ac.css","assets/toastMessage-9ee55ee8.js","assets/index.esm-a4700a64.js","assets/Skeleton-0c45b681.js"]).then(({RemoveNodeModal:t})=>({default:t}))),gn=x.lazy(()=>B(()=>import("./index-76615c4b.js"),["assets/index-76615c4b.js","assets/index-5fb1066b.js","assets/index-3f17fe3b.css","assets/index-336ec8a7.js","assets/index-8c752204.js","assets/react-toastify.esm-74a6e79d.js","assets/react-toastify-b60658ac.css","assets/toastMessage-9ee55ee8.js","assets/index.esm-a4700a64.js","assets/index-3e388da8.js","assets/index-b87a6c6a.js","assets/Popover-6a0988bf.js","assets/useSlotProps-4cfb1cc9.js","assets/Select-c279e03a.js","assets/Stack-5d503865.js","assets/Popper-03cceb62.js","assets/constants-84edb5fc.js","assets/index-533926d5.js"]).then(({AddNodeEdgeModal:t})=>({default:t}))),yn=()=>e.jsxs(e.Fragment,{children:[e.jsx(un,{}),e.jsx(hn,{}),e.jsx(pn,{}),e.jsx(fn,{}),e.jsx(mn,{}),e.jsx(xn,{}),e.jsx(gn,{})]}),jn=()=>{const t=K(r=>r.appMetaData);return e.jsxs(bn,{children:[e.jsxs(Cn,{children:[e.jsx(e.Fragment,{children:t.title&&e.jsx(S,{className:"title",color:"white",children:t.title})}),e.jsx(S,{className:"subtitle",children:" Second Brain"})]}),e.jsx(Zt,{})]})},bn=g(h).attrs({align:"center",direction:"row",grow:1,justify:"flex-start"})`
  height: 64px;
  position: absolute;
  top: 0px;
  left: 64px;
  right: 32px;
  transition: opacity 1s;
  z-index: 99;
  padding: 20px 23px;
`,Cn=g.div`
  ${Dt.smallOnly`
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
`,vn=()=>{const[t,r]=x.useState(!0),n=Kt();x.useEffect(()=>{r(!0)},[n]);const s=()=>{r(!1)};return n&&t?e.jsxs(wn,{align:"center",direction:"column",justify:"center",onClick:s,children:[e.jsx("img",{alt:"screen",src:"jamboard_kiosk.png"}),e.jsxs(h,{align:"center",direction:"column",justify:"center",children:[e.jsx(Ae,{children:"Second Brain is currently"}),e.jsx(Ae,{style:{fontWeight:600},children:"optimized for Desktop."}),e.jsx(Ae,{children:"Mobile support coming soon."})]}),e.jsx(R,{color:"secondary",onClick:s,variant:"contained",children:"Got It"})]}):null},wn=g(h)`
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
`,Sn={},_n=x.createContext(Sn),Tn=()=>{const[t,r]=x.useState(!1),n=x.useMemo(()=>({isShow:t,setIsShow:r}),[t]);return e.jsx(_n.Provider,{value:n})},w=g(Lr)`
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
`,ve=g(ce)`
  && {
    height: 48px;
    padding: 0 36px;
  }
  &:nth-child(odd) {
    background-color: ${c.BG3};
  }
`,we=g(Pr)`
  && {
    border-bottom: 1px solid ${c.black};
  }

  ${w} {
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
`,An=({data:t})=>{const r=Z(a=>a.setQueuedSources),[n,s]=x.useState(""),i=async a=>{if(t!=null&&t.length)try{const o=await It.enable();await qt(a,o.pubkey),r(t.filter(d=>d.ref_id!==a))}catch(o){console.warn(o)}},l=async a=>{if(!(!a||!(t!=null&&t.length))){s(a);try{await ht(a),r(t==null?void 0:t.filter(o=>o.ref_id!==a))}catch(o){console.warn(o)}finally{s("")}}};return t!=null&&t.length?e.jsxs(ye,{component:"table",children:[e.jsx(we,{children:e.jsxs(ce,{component:"tr",children:[e.jsx(w,{className:"empty"}),e.jsx(w,{children:"Type"}),e.jsx(w,{children:"Source"}),e.jsx(w,{}),e.jsx(w,{className:"empty"})]})}),(t==null?void 0:t.length)&&e.jsx("tbody",{children:t==null?void 0:t.map(a=>e.jsxs(ve,{children:[e.jsx(w,{className:"empty"}),e.jsx(w,{children:H[a.source_type]}),e.jsx(w,{width:"268px",children:a.source_type==="twitter_handle"?e.jsxs(Xe,{href:`${vt}/${a.source}?open=system`,target:"_blank",children:["@",a.source]}):e.jsx(Xe,{href:`${a.source}?open=system`,target:"_blank",children:a.source})}),e.jsx(w,{className:"cell-center",children:e.jsxs(h,{direction:"row",justify:"space-between",children:[e.jsx("div",{className:"approve-wrapper",children:e.jsx(Qe,{className:"centered",onClick:()=>i(a.ref_id),children:e.jsx(Tr,{color:c.primaryGreen,fontSize:24})})}),e.jsx("div",{className:"delete-wrapper",children:n===a.ref_id?e.jsx($,{color:c.white,size:16}):e.jsx(Ct,{message:"Are you sure ?",onConfirm:()=>l(a.ref_id),children:e.jsx(Qe,{className:"centered",children:e.jsx(Ar,{color:c.primaryRed,fontSize:24})})})})]})}),e.jsx(w,{className:"empty"})]},a.source))})]}):e.jsxs(h,{children:[e.jsx(S,{children:"There is not any results for selected filters"}),e.jsx(De,{})]})},Qe=g(h)`
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
`,Ln=({onSearch:t,placeholder:r,activeIcon:n,loadingIcon:s,defaultIcon:i,...l})=>{const[a,o]=x.useState(""),[d,p]=x.useState(!1),f=()=>{o(""),t(""),p(!1)},m=j=>{!j.target.value&&f(),o(j.target.value)},y=j=>{const{value:u}=j.currentTarget;o(u),!d&&(p(!0),setTimeout(()=>{t(u),u||f(),p(!1)},1e3),u||f())},b=()=>d?e.jsx(Je,{children:e.jsx(ke,{type:"button",children:s})}):e.jsx(Je,{children:a?e.jsx(ke,{onClick:f,type:"button",children:n}):e.jsx(ke,{type:"button",children:i})});return e.jsxs(Pn,{children:[e.jsx(Nn,{autoComplete:"off",autoCorrect:"off",inputProps:{"aria-label":"search sources"},onChange:m,onKeyDown:j=>{j.key==="Enter"&&y(j)},placeholder:r,value:a,...l}),b()]})},Je=g(h)`
  top: -50%;
  right: -3%;
  z-index: 3;
  position: absolute;
  transform: translate(-50%, 50%);
`,ke=g(ie)`
  font-size: 24px;
`,Pn=g(be)`
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
`,Nn=g(Ce)`
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
`,Dn=({data:t,canEdit:r=!1})=>{const n=Z(o=>o.setSources),[s,i]=x.useState(""),l=async(o,d)=>{if(t!=null&&t.length)try{await Qt(o,d);const p=t==null?void 0:t.findIndex(m=>m.ref_id===o),f=[...t];f[p]={...f[p],source:d.source},n(f)}catch(p){console.warn(p)}},a=async o=>{if(!(!o||!(t!=null&&t.length))){i(o);try{await ht(o),n(t==null?void 0:t.filter(d=>d.ref_id!==o))}catch(d){console.warn(d)}finally{i("")}}};return t!=null&&t.length?e.jsxs(ye,{"aria-label":"a dense table",component:"table",id:"sources-table",size:"small",children:[e.jsx(we,{children:e.jsxs(ce,{component:"tr",children:[e.jsx(w,{className:"empty"}),e.jsx(w,{children:"Type"}),e.jsx(w,{align:"left",children:"Source"}),r&&e.jsx(w,{align:"left"}),e.jsx(w,{className:"empty"})]})}),e.jsx(Dr,{component:"tbody",children:t==null?void 0:t.map(o=>e.jsxs(ve,{children:[e.jsx(w,{className:"empty"}),e.jsx(w,{align:"left",children:H[o.source_type]}),e.jsx(w,{align:"left",children:e.jsx(In,{condition:r,wrapper:d=>e.jsx(Bn,{id:o.ref_id,onSave:p=>l(o.ref_id,{source:p,source_type:o.source_type}),value:o.source,children:d}),children:o.source_type===We||o.source_type===Ve||o.source_type===Ge?e.jsxs(e.Fragment,{children:[o.source_type===We&&e.jsxs($e,{href:`${vt}/${o.source}`,target:"_blank",children:["@",o.source]}),o.source_type===Ve&&e.jsx($e,{href:`${o.source}${o.source.includes("?")?"&":"?"}open=system`,target:"_blank",children:o.source}),o.source_type===Ge&&e.jsx($e,{href:o.source,target:"_blank",children:o.source})]}):e.jsx("div",{children:o.source})})}),r&&e.jsx(w,{align:"left",children:e.jsx("div",{className:"delete-wrapper",id:`delete-${o.source}`,children:s===o.ref_id?e.jsx($,{color:c.white}):e.jsx(Ct,{message:"Are you sure ?",onConfirm:()=>a(o.ref_id),children:e.jsx(G,{className:"centered",children:e.jsx(kr,{})})})})}),e.jsx(w,{className:"empty"})]},o.source))})]}):e.jsxs(zn,{children:[e.jsx(Nr,{}),e.jsx(S,{className:"text",children:"There is not any results for selected filters"})]})};function In({condition:t,wrapper:r,children:n}){return t?r(n):n}const Bn=({value:t,onSave:r,id:n,children:s})=>{const[i,l]=x.useState(!1),[a,o]=x.useState(t),[d,p]=x.useState(!1),f=async()=>{if(n){p(!0);try{await r(a),l(!1)}catch(m){console.warn(m)}finally{p(!1)}}};return e.jsx("div",{children:i?e.jsxs(On,{direction:"row",children:[e.jsx(Wr,{className:"editable-cell__input",name:"cell-input",onChange:m=>o(m),value:a}),e.jsx(G,{align:"center",justify:"center",children:d?e.jsx($,{}):e.jsx($r,{onClick:f})}),e.jsx(G,{align:"center",className:"secondary",justify:"center",onClick:()=>l(!1),children:e.jsx(bt,{})})]}):e.jsxs(Mn,{direction:"row",children:[s,e.jsx(G,{onClick:()=>l(!0),children:e.jsx(Er,{size:20})})]})})},On=g(h)`
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
`,zn=g(h)`
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
`,Rn=()=>{const[t,r]=x.useState(!0),[n,s]=x.useState(""),[i,l]=Z(m=>[m.sources,m.setSources]),[a]=se(m=>[m.isAdmin]),[o,d]=x.useState("");x.useEffect(()=>{(async()=>{r(!0);try{const y=await ut();l(y.data)}catch(y){console.warn(y)}finally{r(!1)}})()},[l]);const p=m=>{s(n===m||!m?"":m)},f=x.useMemo(()=>i==null?void 0:i.filter(m=>(!n||m.source_type===n)&&(m.source.toLowerCase().startsWith(o.toLowerCase())||m.source.toLowerCase().includes(o.toLowerCase()))),[o,n,i]);return e.jsxs(Fn,{align:"stretch",direction:"column",justify:"flex-end",children:[e.jsx(Se,{align:"center",direction:"row",justify:"space-between",children:e.jsx(S,{className:"title",children:"Sources for this Graph"})}),e.jsx(Vn,{children:e.jsx(Ln,{activeIcon:e.jsx(U,{}),defaultIcon:e.jsx(je,{}),loadingIcon:e.jsx($,{color:c.PRIMARY_BLUE,size:24}),onSearch:d,placeholder:"Find Topic"})}),e.jsxs(h,{className:"filters",direction:"row",pb:16,px:36,children:[e.jsx(me,{className:M({selected:!n}),onClick:()=>p(""),size:"small",children:"All"}),Object.keys(H).map(m=>e.jsx(me,{className:M({selected:m===n}),onClick:()=>p(m),size:"small",children:H[m]},m))]}),e.jsx(Wn,{align:"center",justify:t?"center":"flex-start",children:t?e.jsx($,{color:c.white}):e.jsx(Dn,{canEdit:a,data:f})})]})},Fn=g(h)`
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
`,Gn=({onSelect:t,selectedTopic:r})=>{const[n,s]=x.useState(!1),[i,l]=x.useState(""),[a,o]=x.useState([]),[d,p]=x.useState(!1),f=x.useRef(null);x.useEffect(()=>()=>o([]),[o]);const m=async u=>{const C={muted:"False",sort_by:Me,search:u,skip:"0",limit:"1000"};p(!0);try{const v=await xt(C);o(v.data)}catch{o([])}finally{p(!1)}},y=x.useMemo(()=>ct.debounce(m,300),[]),b=u=>{t(u)},j=u=>{if(l(u),!u){o([]);return}u.length>2&&y(u)};return r?e.jsxs(Yn,{children:[e.jsx("div",{className:"value",children:r.topic}),e.jsx(h,{className:"icon",onClick:()=>t(null),children:e.jsx(U,{})})]}):e.jsxs(e.Fragment,{children:[e.jsxs(be,{ref:f,component:"form",onSubmit:u=>u.preventDefault(),sx:{p:"2px 4px",display:"flex",alignItems:"center",width:200},children:[e.jsx(Ce,{inputProps:{"aria-label":"search topic"},onChange:u=>j(u.target.value),onFocus:()=>s(!0),placeholder:"Search",size:"small",sx:{ml:1,flex:1},value:i}),i&&e.jsxs(e.Fragment,{children:[e.jsx(et,{"aria-label":"search",onClick:()=>j(""),type:"button",children:e.jsx(U,{})}),e.jsx(ze,{orientation:"vertical",sx:{height:28,m:.5}})]}),e.jsx(et,{"aria-label":"search",type:"button",children:d?e.jsx($,{color:c.white,size:24}):e.jsx(je,{})})]}),f.current&&a.length?e.jsx(Hn,{anchorEl:f.current,open:n,placement:"bottom",children:e.jsx(e.Fragment,{children:a.map(u=>e.jsx(Un,{className:M({active:r===u.ref_id}),onClick:()=>b(u),children:u.topic},"option"))})}):null]})},Un=g(h).attrs({direction:"row",align:"center"})`
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
`,Hn=g(Tt)`
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
`,Zn=({selectedType:t,setSelectedType:r})=>{const[n,s]=x.useState(null),[i,l]=x.useState([]);x.useEffect(()=>{(async()=>{try{const{data:f}=await Xt();l(f.edge_types)}catch(f){console.warn(f)}})()},[l]);const a=p=>{s(p.currentTarget)},o=()=>{s(null)},d=p=>{r(p),o()};return e.jsxs("div",{children:[e.jsxs(Kn,{onClick:a,children:[e.jsx("div",{className:"text",children:"Type"}),e.jsx("div",{className:"value",children:t}),e.jsx("div",{className:"icon",children:n?e.jsx(Rr,{}):e.jsx(Mr,{})})]}),e.jsx(Qn,{anchorEl:n,anchorOrigin:{vertical:"bottom",horizontal:"left"},anchorPosition:{top:62,left:0},onClose:o,open:!!n,transformOrigin:{vertical:"top",horizontal:"left"},children:e.jsx(Fr,{children:i.map(p=>e.jsxs(qn,{className:M({active:p===t}),onClick:()=>d(p),children:[e.jsx("span",{className:"icon",children:p===t?e.jsx(Vr,{}):null}),e.jsx("span",{children:p})]},p))})})]})},Kn=g(h).attrs({direction:"row",align:"center"})`
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
`,to=({topic:t,onClose:r})=>{const{close:n}=z("addEdge"),[s]=D(j=>[j.data]),i=ae({mode:"onChange"}),[l,a]=x.useState(!1),[o,d]=x.useState(null),[p,f]=x.useState(""),m=()=>{r(),n()},y=async()=>{if(!(!o||!s)){a(!0);try{await Jt({from:t.ref_id,to:o==null?void 0:o.ref_id,relationship:p});const{ref_id:j}=t,{ref_id:u}=o;if(s){const C={...s};C[j]={...C[j],edgeList:[...C[j].edgeList,p]},C[u]&&(C[u]={...C[u],edgeList:[...C[u].edgeList,p]}),D.setState({data:C})}m()}catch(j){console.warn(j)}finally{a(!1)}}},b=l||!o||!p;return e.jsx(Fe,{id:"addEdge",kind:"large",onClose:m,preventOutsideClose:!0,children:e.jsxs(le,{...i,children:[e.jsx(Xn,{from:t.topic,onSelect:d,selectedTopic:o,selectedType:p,setSelectedType:f}),e.jsxs(R,{color:"secondary",disabled:b,onClick:y,size:"large",variant:"contained",children:["Confirm",l&&e.jsx($,{color:c.BLUE_PRESS_STATE,size:10})]})]})})},ro=()=>e.jsxs(h,{children:[e.jsx(h,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(h,{align:"center",direction:"row",children:e.jsx(no,{children:"Edit topic"})})}),e.jsx(h,{mb:12,children:e.jsx(ne,{id:"cy-topic",maxLength:50,name:"topic",placeholder:"Add your topic",rules:{...Bt}})})]}),no=g(S)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,oo=({topic:t,onClose:r})=>{const{close:n}=z("editTopic"),[s]=D(b=>[b.data]),i=ae({mode:"onChange"}),{watch:l,setValue:a,reset:o}=i,[d,p]=x.useState(!1);x.useEffect(()=>(t&&a("topic",t==null?void 0:t.topic),()=>{o()}),[t,a,o]);const f=l("topic"),m=()=>{r(),n()},y=async()=>{p(!0);try{if(await ft((t==null?void 0:t.ref_id)||"",{topic:f.trim()}),s){const b={...s};b[t==null?void 0:t.ref_id].topic=f.trim(),D.setState({data:b})}m()}catch(b){console.warn(b)}finally{p(!1)}};return e.jsx(Fe,{id:"editTopic",kind:"regular",onClose:m,preventOutsideClose:!0,children:e.jsxs(le,{...i,children:[e.jsx(ro,{}),e.jsxs(R,{color:"secondary",disabled:d,onClick:y,size:"large",variant:"contained",children:["Save",d&&e.jsx($,{color:c.BLUE_PRESS_STATE,size:10})]})]})})},so=({onSelect:t,selectedTopic:r})=>{const[n,s]=x.useState(!1),[i,l]=x.useState(""),[a,o]=x.useState([]),[d,p]=x.useState(!1),f=x.useRef(null);x.useEffect(()=>()=>o([]),[o]);const m=async u=>{const C={muted:"False",sort_by:Me,search:u,skip:"0",limit:"1000"};p(!0);try{const v=await xt(C);o(v.data)}catch{o([])}finally{p(!1)}},y=x.useMemo(()=>ct.debounce(m,300),[]),b=u=>{t(u)},j=u=>{if(l(u),!u){o([]);return}u.length>2&&y(u)};return r?e.jsxs(lo,{children:[e.jsx("div",{className:"value",children:r.topic}),e.jsx(h,{className:"icon",onClick:()=>t(null),children:e.jsx(U,{})})]}):e.jsxs(e.Fragment,{children:[e.jsxs(be,{ref:f,component:"form",onSubmit:u=>u.preventDefault(),sx:{p:"2px 4px",display:"flex",alignItems:"center",width:200},children:[e.jsx(Ce,{inputProps:{"aria-label":"search topic"},onChange:u=>j(u.target.value),onFocus:()=>s(!0),placeholder:"Search",size:"small",sx:{ml:1,flex:1},value:i}),i&&e.jsxs(e.Fragment,{children:[e.jsx(tt,{"aria-label":"search",onClick:()=>j(""),type:"button",children:e.jsx(U,{})}),e.jsx(ze,{orientation:"vertical",sx:{height:28,m:.5}})]}),e.jsx(tt,{"aria-label":"search",type:"button",children:d?e.jsx($,{color:c.white,size:24}):e.jsx(je,{})})]}),f.current&&a.length?e.jsx(ao,{anchorEl:f.current,open:n,placement:"bottom",children:e.jsx(e.Fragment,{children:a.map(u=>e.jsx(io,{className:M({active:r===u.ref_id}),onClick:()=>b(u),children:u.topic},"option"))})}):null]})},io=g(h).attrs({direction:"row",align:"center"})`
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
`,ao=g(Tt)`
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
`,uo=({topic:t,onClose:r})=>{const{close:n}=z("mergeTopic"),[s,i,l]=D(v=>[v.data,v.ids,v.total]),a=ae({mode:"onChange"}),{watch:o,setValue:d,reset:p}=a,[f,m]=x.useState(!1),[y,b]=x.useState(null);x.useEffect(()=>(t&&d("topic",t==null?void 0:t.topic),()=>{p()}),[t,d,p]);const j=o("topic"),u=()=>{r(),n()},C=async()=>{if(!(!y||!s)){m(!0);try{await er({from:t.ref_id,to:y==null?void 0:y.ref_id});const{ref_id:v}=t;if(s[v]={...s[v],edgeList:[Ir],edgeCount:s[v].edgeCount-1},D.setState({ids:i.filter(T=>T!==y.ref_id),total:l-1}),s){const T={...s};T[t==null?void 0:t.ref_id].topic=j.trim(),D.setState({data:T})}u()}catch(v){console.warn(v)}finally{m(!1)}}};return e.jsx(Fe,{id:"mergeTopic",kind:"regular",onClose:u,preventOutsideClose:!0,children:e.jsxs(le,{...a,children:[e.jsx(co,{from:t.topic,onSelect:b,selectedTopic:y}),e.jsxs(R,{color:"secondary",disabled:f,onClick:C,size:"large",variant:"contained",children:["Merge topics",f&&e.jsx($,{color:c.BLUE_PRESS_STATE,size:10})]})]})})},xo=()=>{const[t,r]=D(a=>[a.filters,a.setFilters]),[n,s]=x.useState(""),i=a=>{a.preventDefault(),r({search:n})},l=()=>{s(""),t.search&&r({search:""})};return e.jsxs(be,{component:"form",onSubmit:i,sx:{p:"2px 4px",display:"flex",alignItems:"center",width:300},children:[e.jsx(Ce,{autoComplete:"off",autoCorrect:"off",inputProps:{"aria-label":"search topic"},onChange:a=>s(a.target.value),placeholder:"Search",size:"small",spellCheck:"false",sx:{ml:1,flex:1},value:n}),n&&e.jsxs(e.Fragment,{children:[e.jsx(nt,{"aria-label":"search",onClick:l,type:"button",children:e.jsx(U,{})}),e.jsx(ze,{orientation:"vertical",sx:{height:28,m:.5}})]}),e.jsx(nt,{"aria-label":"search",onClick:i,type:"button",children:e.jsx(je,{})})]})},nt=g(ie)`
  font-size: 24px;
`,fo=t=>e.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M7.37516 8.625V11.3334C7.37516 11.5104 7.43508 11.6589 7.55491 11.7786C7.67476 11.8984 7.82326 11.9583 8.00041 11.9583C8.17758 11.9583 8.32599 11.8984 8.44564 11.7786C8.5653 11.6589 8.62512 11.5104 8.62512 11.3334V8.625H11.3335C11.5106 8.625 11.659 8.56508 11.7788 8.44525C11.8986 8.3254 11.9585 8.1769 11.9585 7.99975C11.9585 7.82258 11.8986 7.67417 11.7788 7.55452C11.659 7.43487 11.5106 7.37504 11.3335 7.37504H8.62512V4.66669C8.62512 4.4896 8.56521 4.34117 8.44537 4.22137C8.32553 4.1016 8.17702 4.04171 7.99987 4.04171C7.82271 4.04171 7.6743 4.1016 7.55464 4.22137C7.43499 4.34117 7.37516 4.4896 7.37516 4.66669V7.37504H4.66681C4.48973 7.37504 4.3413 7.43496 4.22152 7.55479C4.10173 7.67464 4.04183 7.82314 4.04183 8.00029C4.04183 8.17746 4.10173 8.32587 4.22152 8.44552C4.3413 8.56517 4.48973 8.625 4.66681 8.625H7.37516ZM8.00154 15.9167C6.90659 15.9167 5.8774 15.7089 4.91395 15.2933C3.9505 14.8778 3.11243 14.3138 2.39975 13.6015C1.68705 12.8891 1.12284 12.0514 0.7071 11.0884C0.291364 10.1253 0.0834961 9.09636 0.0834961 8.00142C0.0834961 6.90647 0.291274 5.87728 0.70683 4.91383C1.12239 3.95037 1.68634 3.11231 2.3987 2.39963C3.11108 1.68693 3.94878 1.12272 4.91181 0.706979C5.87482 0.291243 6.9038 0.083374 7.99875 0.083374C9.09369 0.083374 10.1229 0.291153 11.0863 0.706708C12.0498 1.12226 12.8879 1.68622 13.6005 2.39858C14.3132 3.11096 14.8774 3.94866 15.2932 4.91169C15.7089 5.8747 15.9168 6.90368 15.9168 7.99863C15.9168 9.09357 15.709 10.1228 15.2935 11.0862C14.8779 12.0497 14.3139 12.8877 13.6016 13.6004C12.8892 14.3131 12.0515 14.8773 11.0885 15.2931C10.1255 15.7088 9.09648 15.9167 8.00154 15.9167ZM8.00014 14.6667C9.86125 14.6667 11.4376 14.0209 12.7293 12.7292C14.021 11.4375 14.6668 9.86113 14.6668 8.00002C14.6668 6.13891 14.021 4.56252 12.7293 3.27085C11.4376 1.97919 9.86125 1.33335 8.00014 1.33335C6.13903 1.33335 4.56264 1.97919 3.27098 3.27085C1.97931 4.56252 1.33348 6.13891 1.33348 8.00002C1.33348 9.86113 1.97931 11.4375 3.27098 12.7292C4.56264 14.0209 6.13903 14.6667 8.00014 14.6667Z",fill:"currentColor"})}),mo=t=>e.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 12 12",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M10.1765 0.310088L4.72809 5.70971C4.63832 5.79868 4.56637 5.90372 4.51607 6.01926L3.74627 7.78746C3.63822 8.03565 3.89191 8.28707 4.14234 8.17999L5.92651 7.41707C6.04309 7.36722 6.14907 7.29592 6.23885 7.20695L11.6872 1.80733C12.1044 1.39388 12.1044 0.723539 11.6872 0.310088C11.27 -0.103363 10.5936 -0.103363 10.1765 0.310088ZM9.80835 7.14088C9.80835 6.81895 10.072 6.55777 10.3969 6.55777C10.723 6.55777 10.9854 6.82017 10.9854 7.14088L10.9191 10.2508C10.9191 11.2153 10.1489 12.0001 9.17571 12.0001H1.74343C0.79227 12.0001 0 11.2153 0 10.2289V2.84292C0 1.89999 0.79227 1.11523 1.74343 1.11523L5.29651 1.11548C5.62264 1.11548 5.88501 1.37666 5.88501 1.69858C5.88501 2.0205 5.62141 2.28168 5.29651 2.28168H1.7655C1.44134 2.28168 1.177 2.54335 1.177 2.86479V10.2508C1.177 10.5722 1.44134 10.8339 1.7655 10.8339H9.21985C9.54402 10.8339 9.80835 10.5722 9.80835 10.2508V7.14088Z",fill:"currentColor"})}),go=t=>e.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 12 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M1.33317 15.5L0.166504 14.3333L4.18734 10.2917C4.50678 9.97222 4.74984 9.61111 4.9165 9.20833C5.08317 8.80556 5.1665 8.38194 5.1665 7.9375L5.1665 3.6875L3.83317 5L2.6665 3.83333L5.99984 0.5L9.33317 3.83333L8.1665 5L6.83317 3.6875L6.83317 7.9375C6.83317 8.38194 6.9165 8.80556 7.08317 9.20833C7.24984 9.61111 7.49289 9.97222 7.81234 10.2917L11.8332 14.3333L10.6665 15.5L5.99984 10.8333L1.33317 15.5Z",fill:"currentColor"})}),yo=t=>e.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 16 15",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M14.0716 15L10.8994 11.7764C10.437 11.9597 9.96181 12.0919 9.47381 12.1732C8.98581 12.2545 8.49002 12.2952 7.98643 12.2952C6.33597 12.2952 4.82448 11.8457 3.45194 10.9466C2.07941 10.0476 0.991584 8.86271 0.188459 7.39193C0.123124 7.27666 0.0753836 7.15933 0.045238 7.03994C0.0150793 6.92055 0 6.7991 0 6.67559C0 6.55208 0.0163338 6.42935 0.0490013 6.30739C0.0816688 6.18543 0.13067 6.06938 0.196005 5.95925C0.508607 5.42714 0.84081 4.91226 1.19261 4.41462C1.54443 3.91699 1.95353 3.47673 2.41992 3.09386L0.24877 0.846015L1.07501 0L14.8978 14.154L14.0716 15ZM7.98643 9.94854C8.16032 9.94854 8.32642 9.93799 8.48473 9.91689C8.64305 9.89579 8.7976 9.84973 8.94838 9.77871L4.95591 5.69059C4.89158 5.84498 4.84786 6.00324 4.82475 6.16535C4.80162 6.32745 4.79005 6.49753 4.79005 6.67559C4.79005 7.58645 5.10039 8.35966 5.72108 8.99521C6.34176 9.63076 7.09688 9.94854 7.98643 9.94854ZM13.4384 10.3561L10.9792 7.85816C11.0456 7.66673 11.0961 7.47375 11.1308 7.27922C11.1655 7.0847 11.1828 6.88349 11.1828 6.67559C11.1828 5.76473 10.8725 4.99152 10.2518 4.35597C9.63109 3.72042 8.87598 3.40264 7.98643 3.40264C7.78339 3.40264 7.58689 3.42168 7.39692 3.45976C7.20694 3.49784 7.02099 3.56011 6.83907 3.64657L4.87751 1.64575C5.37606 1.44402 5.88441 1.29529 6.40257 1.19957C6.92071 1.10385 7.44867 1.05599 7.98643 1.05599C9.64191 1.05599 11.1604 1.50756 12.542 2.41072C13.9236 3.31387 15.0134 4.50598 15.8115 5.98705C15.8718 6.08894 15.9183 6.19829 15.951 6.31511C15.9837 6.43192 16 6.55208 16 6.67559C16 6.7991 15.9857 6.91926 15.957 7.03607C15.9284 7.15289 15.8839 7.26225 15.8236 7.36414C15.52 7.94669 15.1738 8.49038 14.7848 8.99521C14.3958 9.50005 13.947 9.95369 13.4384 10.3561ZM10.0912 6.95657L7.73162 4.54816C8.06131 4.48126 8.38246 4.50545 8.69506 4.62072C9.00767 4.736 9.27754 4.9156 9.5047 5.15952C9.7369 5.40036 9.90451 5.67723 10.0075 5.99012C10.1106 6.30301 10.1385 6.62516 10.0912 6.95657Z",fill:"currentColor"})}),jo=t=>e.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 18 13",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M9.00204 9.98073C9.94628 9.98073 10.7483 9.65024 11.408 8.98927C12.0677 8.32829 12.3976 7.52567 12.3976 6.58142C12.3976 5.63718 12.0671 4.8352 11.4061 4.17548C10.7451 3.51576 9.9425 3.1859 8.99825 3.1859C8.05401 3.1859 7.25203 3.51638 6.59231 4.17735C5.93259 4.83834 5.60273 5.64096 5.60273 6.58521C5.60273 7.52944 5.93321 8.33142 6.59419 8.99115C7.25517 9.65087 8.05779 9.98073 9.00204 9.98073ZM9.00014 8.83331C8.37514 8.83331 7.84389 8.61456 7.40639 8.17706C6.96889 7.73956 6.75014 7.20831 6.75014 6.58331C6.75014 5.95831 6.96889 5.42706 7.40639 4.98956C7.84389 4.55206 8.37514 4.33331 9.00014 4.33331C9.62514 4.33331 10.1564 4.55206 10.5939 4.98956C11.0314 5.42706 11.2501 5.95831 11.2501 6.58331C11.2501 7.20831 11.0314 7.73956 10.5939 8.17706C10.1564 8.61456 9.62514 8.83331 9.00014 8.83331ZM9.00129 12.4166C7.08494 12.4166 5.33884 11.888 3.76298 10.8309C2.18713 9.77374 1.02688 8.35788 0.282227 6.58331C1.02688 4.80874 2.18675 3.39288 3.76185 2.33573C5.33694 1.27858 7.08265 0.75 8.999 0.75C10.9153 0.75 12.6614 1.27858 14.2373 2.33573C15.8132 3.39288 16.9734 4.80874 17.7181 6.58331C16.9734 8.35788 15.8135 9.77374 14.2384 10.8309C12.6634 11.888 10.9176 12.4166 9.00129 12.4166Z",fill:"currentColor"})}),Le=t=>e.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 12 8",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M0.333496 7.66704V6.66706H3.91681V7.66704H0.333496ZM0.333496 4.50037V3.50041H7.7886V4.50037H0.333496ZM0.333496 1.33372V0.33374H11.6668V1.33372H0.333496Z",fill:"currentColor"})}),bo=t=>e.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:e.jsxs("g",{opacity:"0.4",children:[e.jsx("mask",{id:"mask0_5162_13105",maskUnits:"userSpaceOnUse",x:"0",y:"0",width:"24",height:"24",children:e.jsx("rect",{width:"1em",height:"1em",fill:"currentColor"})}),e.jsx("g",{mask:"url(#mask0_5162_13105)",children:e.jsx("path",{d:"M19.7615 21.8691L15.7154 17.8537C15.1256 18.0819 14.5195 18.2467 13.8971 18.348C13.2747 18.4493 12.6423 18.4999 12 18.4999C9.89486 18.4999 7.96698 17.94 6.21635 16.8201C4.46572 15.7002 3.07822 14.2243 2.05385 12.3922C1.97052 12.2486 1.90963 12.1025 1.87118 11.9538C1.83271 11.8051 1.81348 11.6538 1.81348 11.4999C1.81348 11.3461 1.83431 11.1932 1.87598 11.0413C1.91764 10.8894 1.98014 10.7448 2.06348 10.6076C2.46219 9.9448 2.88591 9.30345 3.33463 8.68357C3.78336 8.0637 4.30516 7.51531 4.90003 7.0384L2.13078 4.2384L3.18463 3.18457L20.8153 20.8153L19.7615 21.8691ZM12 15.5768C12.2218 15.5768 12.4336 15.5637 12.6356 15.5374C12.8375 15.5111 13.0346 15.4537 13.2269 15.3653L8.13463 10.273C8.05258 10.4653 7.99681 10.6624 7.96733 10.8643C7.93783 11.0663 7.92308 11.2781 7.92308 11.4999C7.92308 12.6345 8.31891 13.5977 9.11058 14.3893C9.90224 15.181 10.8654 15.5768 12 15.5768ZM18.9538 16.0845L15.8173 12.973C15.9019 12.7345 15.9663 12.4941 16.0105 12.2518C16.0548 12.0095 16.0769 11.7589 16.0769 11.4999C16.0769 10.3653 15.681 9.40219 14.8894 8.61052C14.0977 7.81885 13.1346 7.42302 12 7.42302C11.741 7.42302 11.4904 7.44674 11.2481 7.49417C11.0058 7.5416 10.7686 7.61917 10.5366 7.72687L8.03463 5.23457C8.67051 4.98329 9.3189 4.79803 9.9798 4.6788C10.6407 4.55956 11.3141 4.49995 12 4.49995C14.1115 4.49995 16.0484 5.06245 17.8105 6.18745C19.5727 7.31245 20.9628 8.79738 21.9807 10.6422C22.0576 10.7692 22.1169 10.9054 22.1586 11.0509C22.2003 11.1964 22.2211 11.3461 22.2211 11.4999C22.2211 11.6538 22.2028 11.8034 22.1663 11.9489C22.1297 12.0945 22.073 12.2307 21.9961 12.3576C21.6089 13.0832 21.1673 13.7605 20.6711 14.3893C20.175 15.0182 19.6025 15.5832 18.9538 16.0845ZM14.6846 11.8499L11.675 8.84992C12.0955 8.76659 12.5051 8.79671 12.9038 8.9403C13.3025 9.0839 13.6468 9.30761 13.9365 9.61145C14.2327 9.91145 14.4465 10.2563 14.5779 10.6461C14.7093 11.0358 14.7449 11.4371 14.6846 11.8499Z",fill:"currentColor"})})]})}),Co=t=>e.jsxs("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("mask",{id:"mask0_5162_13106",maskUnits:"userSpaceOnUse",x:"0",y:"0",width:"24",height:"24",children:e.jsx("rect",{width:"1em",height:"1em",fill:"currentColor"})}),e.jsx("g",{mask:"url(#mask0_5162_13106)",children:e.jsx("path",{d:"M12.0023 15.5769C13.1354 15.5769 14.0978 15.1803 14.8895 14.3871C15.6811 13.5939 16.077 12.6308 16.077 11.4977C16.077 10.3646 15.6804 9.40224 14.8872 8.61058C14.094 7.81891 13.1309 7.42308 11.9978 7.42308C10.8647 7.42308 9.90234 7.81966 9.11067 8.61282C8.31901 9.40601 7.92317 10.3692 7.92317 11.5023C7.92317 12.6353 8.31976 13.5977 9.11293 14.3894C9.90611 15.181 10.8692 15.5769 12.0023 15.5769ZM12.0001 14.2C11.2501 14.2 10.6126 13.9375 10.0876 13.4125C9.56258 12.8875 9.30007 12.25 9.30007 11.5C9.30007 10.75 9.56258 10.1125 10.0876 9.58748C10.6126 9.06248 11.2501 8.79998 12.0001 8.79998C12.7501 8.79998 13.3876 9.06248 13.9126 9.58748C14.4376 10.1125 14.7001 10.75 14.7001 11.5C14.7001 12.25 14.4376 12.8875 13.9126 13.4125C13.3876 13.9375 12.7501 14.2 12.0001 14.2ZM12.0014 18.5C9.70183 18.5 7.60651 17.8657 5.71547 16.5971C3.82446 15.3285 2.43216 13.6295 1.53857 11.5C2.43216 9.37049 3.82401 7.67146 5.71412 6.40288C7.60422 5.13429 9.69908 4.5 11.9987 4.5C14.2983 4.5 16.3936 5.13429 18.2847 6.40288C20.1757 7.67146 21.568 9.37049 22.4616 11.5C21.568 13.6295 20.1761 15.3285 18.286 16.5971C16.3959 17.8657 14.3011 18.5 12.0014 18.5Z",fill:"currentColor"})})]}),vo=t=>e.jsxs("svg",{width:"1em",height:"1em",viewBox:"0 0 22 22",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("mask",{id:"mask0_5577_416",maskUnits:"userSpaceOnUse",x:"0",y:"0",width:"22",height:"22",children:e.jsx("rect",{width:"1em",height:"1em",fill:"currentColor"})}),e.jsx("g",{mask:"url(#mask0_5577_416)",children:e.jsx("path",{d:"M11 17.6634C10.6219 17.6634 10.2982 17.5287 10.0289 17.2595C9.75964 16.9902 9.625 16.6665 9.625 16.2884C9.625 15.9103 9.75964 15.5866 10.0289 15.3173C10.2982 15.0481 10.6219 14.9134 11 14.9134C11.3781 14.9134 11.7018 15.0481 11.971 15.3173C12.2403 15.5866 12.375 15.9103 12.375 16.2884C12.375 16.6665 12.2403 16.9902 11.971 17.2595C11.7018 17.5287 11.3781 17.6634 11 17.6634ZM11 12.3749C10.6219 12.3749 10.2982 12.2403 10.0289 11.971C9.75964 11.7018 9.625 11.3781 9.625 11C9.625 10.6218 9.75964 10.2982 10.0289 10.0289C10.2982 9.75962 10.6219 9.62498 11 9.62498C11.3781 9.62498 11.7018 9.75962 11.971 10.0289C12.2403 10.2982 12.375 10.6218 12.375 11C12.375 11.3781 12.2403 11.7018 11.971 11.971C11.7018 12.2403 11.3781 12.3749 11 12.3749ZM11 7.08648C10.6219 7.08648 10.2982 6.95184 10.0289 6.68257C9.75964 6.41332 9.625 6.08963 9.625 5.7115C9.625 5.33339 9.75964 5.0097 10.0289 4.74043C10.2982 4.47118 10.6219 4.33655 11 4.33655C11.3781 4.33655 11.7018 4.47118 11.971 4.74043C12.2403 5.0097 12.375 5.33339 12.375 5.7115C12.375 6.08963 12.2403 6.41332 11.971 6.68257C11.7018 6.95184 11.3781 7.08648 11 7.08648Z",fill:"currentColor"})})]}),wo=({topic:t,onClick:r,onSearch:n})=>{const[s,i]=D(v=>[v.ids,v.total]),[l,a]=x.useState(!1),o=t.date_added_to_graph.toString(),d=async(v,T)=>{a(!0);try{await ft(v,{muted_topic:T}),D.setState({ids:s.filter(_=>_!==v),total:i-1})}catch(_){console.warn(_)}},p=v=>{n(v.topic)},f=t.edgeList.slice(0,1),m=t.edgeList.length-f.length,[y,b]=E.useState(null),j=v=>{b(v.currentTarget)},u=()=>{b(null)},C=!!y;return e.jsxs(ve,{children:[e.jsx(w,{className:"empty"}),e.jsx(w,{onClick:()=>p(t),children:e.jsx(So,{children:t.topic})}),e.jsx(w,{children:t.edgeCount}),e.jsxs(w,{children:[e.jsx(Re,{anchorEl:y,anchorOrigin:{vertical:"top",horizontal:"center"},disableRestoreFocus:!0,id:"mouse-over-popover",onClose:u,open:C,sx:{pointerEvents:"none","& .MuiPaper-root":{backgroundColor:"rgba(0, 0, 0, 0.9)",borderRadius:"4px",width:"140px"}},transformOrigin:{vertical:"bottom",horizontal:"center"},children:e.jsx(qe,{sx:{p:1.5,fontSize:"13px",fontWeight:400,lineHeight:"1.8"},children:t.edgeList.join(", ")})}),f.join(", "),m>0&&e.jsx(qe,{"aria-haspopup":"true","aria-owns":C?"mouse-over-popover":void 0,component:"span",onMouseEnter:j,onMouseLeave:u,sx:{cursor:"context-menu"},children:",..."})]}),e.jsx(w,{children:e.jsx("span",{children:new Date(Number(o)*1e3).toDateString()})}),e.jsx(w,{className:"cell-center",children:e.jsx(h,{direction:"row",justify:"space-between",children:e.jsx("div",{className:"approve-wrapper",children:l?e.jsx($,{color:c.white,size:16}):e.jsx(e.Fragment,{children:t.muted_topic?e.jsx(ot,{className:"centered",onClick:()=>d(t.ref_id,!1),children:e.jsx(Co,{})}):e.jsx(ot,{className:"centered",onClick:()=>d(t.ref_id,!0),children:e.jsx(bo,{})})})})})}),e.jsx(w,{children:e.jsx(ie,{onClick:v=>r(v,t.ref_id),children:e.jsx(vo,{"data-testid":"ThreeDotsIcons"})})})]},t.topic)},ot=g(h)`
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
`,So=g.span`
  cursor: pointer;
  :hover {
    text-decoration: underline;
  }
`,_o=x.memo(wo),To=({showMuted:t,onTopicEdit:r,onChangeFilter:n})=>{const{close:s}=z("sourcesTable"),[i,l]=E.useState(null),[a,o]=E.useState(""),[d,p]=K(_=>[_.setSearchFormValue,_.setCurrentSearch]),[f,m]=D(_=>[_.data,_.ids]),y=x.useCallback((_,k)=>{l(_.currentTarget),o(k)},[]),b=()=>{l(null)},j=_=>{d(_),p(_),s()},u=_=>{r(a,_),b()},C=_=>{n(_)},v=!!i,T=v?"simple-popover":void 0;return f?e.jsx(e.Fragment,{children:Object.keys(f).length?e.jsxs(e.Fragment,{children:[e.jsxs(ye,{component:"table",children:[e.jsx(we,{children:e.jsxs(ce,{component:"tr",children:[e.jsx(w,{className:"empty"}),e.jsx(w,{children:e.jsxs(Pe,{onClick:()=>C(Me),children:["Name ",e.jsx(Le,{})]})}),e.jsx(w,{children:e.jsxs(Pe,{onClick:()=>C(Br),children:["Count ",e.jsx(Le,{})]})}),e.jsx(w,{children:"Edge list"}),e.jsx(w,{children:e.jsxs(Pe,{onClick:()=>C(Or),children:["Date ",e.jsx(Le,{})]})}),e.jsx(w,{children:t?"Unmute":"Mute"}),e.jsx(w,{})]})}),f&&e.jsx("tbody",{children:m==null?void 0:m.map(_=>e.jsx(_o,{onClick:y,onSearch:j,topic:f[_]},_))})]}),a?e.jsxs(Ao,{anchorEl:i,anchorOrigin:{vertical:"bottom",horizontal:"right"},id:T,onClose:b,open:v,transformOrigin:{vertical:"top",horizontal:"right"},children:[t?e.jsxs(re,{onClick:()=>u("unMute"),children:[" ",e.jsx(jo,{"data-testid":""})," Unmute"]}):e.jsxs(re,{onClick:()=>u("mute"),children:[" ",e.jsx(yo,{"data-testid":"VisibilityOff"})," Mute"]}),e.jsxs(re,{onClick:()=>u("editTopic"),children:[e.jsx(mo,{"data-testid":"EditTopicIcon"})," Rename"]}),e.jsxs(re,{onClick:()=>u("mergeTopic"),children:[e.jsx(go,{"data-testid":"MergeIcon"})," Merge"]}),e.jsxs(re,{onClick:()=>u("addEdge"),children:[e.jsx(fo,{"data-testid":"AddCircleIcon"})," Add edge"]})]}):null]}):e.jsxs(h,{children:[e.jsx(S,{children:"There is not any results for selected filters"}),e.jsx(De,{})]})}):e.jsxs(h,{children:[e.jsx(S,{children:"There is not any results for selected filters"}),e.jsx(De,{})]})},Pe=g.span`
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
`,Ao=g(Re)`
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
`,ko=()=>{const[t,r]=x.useState(!1),[n,s,i,l,a,o,d]=D(k=>[k.data,k.ids,k.total,k.setTopics,k.filters,k.setFilters,k.terminate]),{open:p}=z("editTopic"),{open:f}=z("mergeTopic"),{open:m}=z("addEdge"),[y,b]=x.useState(null),j={editTopic:p,mergeTopic:f,addEdge:m},u=x.useRef([]);x.useEffect(()=>{s.length&&(u.current=s)},[s]),x.useEffect(()=>{(async()=>{try{r(!0),await l()}catch{console.error("err")}finally{r(!1)}})()},[l,a]);const C=async()=>{try{r(!0),o({page:a.page+1})}catch(k){console.error("Error loading more data:",k)}finally{r(!1)}};x.useEffect(()=>()=>{d()},[d]);const v=k=>{o({sortBy:k})},T=()=>{b(null)},_=(k,N)=>{n&&(b(n[k]),typeof j[N]=="function"&&j[N]())};return e.jsxs(e.Fragment,{children:[e.jsxs($o,{direction:"column",justify:"flex-end",children:[e.jsxs(Se,{align:"flex-start",direction:"row",justify:"space-between",children:[e.jsx(S,{className:"title",children:"Topics"}),e.jsxs(R,{disabled:t,onClick:()=>o({muted:!a.muted}),size:"medium",children:[a.muted?"Show Unmuted":"Show Muted",t&&e.jsx($,{color:c.BLUE_PRESS_STATE,size:10})]})]}),e.jsx(Lo,{children:e.jsx(xo,{})}),e.jsx(Eo,{align:"center",justify:t&&!n?"center":"flex-start",children:t&&!n?e.jsx($,{color:c.white}):e.jsxs(e.Fragment,{children:[e.jsx(To,{onChangeFilter:v,onTopicEdit:_,showMuted:a.muted}),i>s.length?e.jsxs(R,{className:"load-more",disabled:t,onClick:C,children:["Load more",t&&e.jsx($,{color:c.BLUE_PRESS_STATE,size:10})]}):null]})})]}),y&&e.jsx(uo,{onClose:T,topic:y}),y&&e.jsx(oo,{onClose:T,topic:y}),y&&e.jsx(to,{onClose:T,topic:y})]})},$o=g(h)`
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
`,Eo=g(h)`
  min-height: 0;
  overflow: auto;
  flex: 1;
  width: 100%;
`,Lo=g(h).attrs({direction:"row",align:"center",justify:"space-between"})`
  padding: 0 36px;
  margin-bottom: 32px;
`;function Po(t){return t.charAt(0).toUpperCase()+t.slice(1).toLowerCase()}const No=({node:t})=>{var n,s,i,l,a,o,d,p,f;function r(m){const y=new Date(Number(m)*1e3),b=y.getDate(),j=y.getMonth()+1,u=y.getFullYear();return`${b}/${j}/${u}`}return e.jsxs(ve,{children:[e.jsx(w,{className:"empty"}),e.jsx(w,{children:(n=t==null?void 0:t.properties)!=null&&n.date_added_to_graph?r((s=t==null?void 0:t.properties)==null?void 0:s.date_added_to_graph):r((i=t==null?void 0:t.properties)==null?void 0:i.date)}),e.jsx(w,{children:t==null?void 0:t.node_type}),e.jsx(w,{children:(t==null?void 0:t.node_type)==="Tweet"?e.jsx(st,{href:`${Ze}${(l=t==null?void 0:t.properties)==null?void 0:l.tweet_id}${Ze.includes("?")?"&":"?"}open=system`,target:"_blank",children:(a=t==null?void 0:t.properties)==null?void 0:a.tweet_id}):e.jsx(st,{href:`${(o=t==null?void 0:t.properties)==null?void 0:o.source_link}${((d=t==null?void 0:t.properties)==null?void 0:d.source_link).includes("?")?"&":"?"}open=system`,target:"_blank",children:(p=t==null?void 0:t.properties)==null?void 0:p.source_link})}),e.jsx(w,{children:(f=t==null?void 0:t.properties)!=null&&f.status?Po(t.properties.status):"Processing"})]})},st=g.a`
  color: ${c.white};
  text-decoration: underline;
  &:visited {
    color: ${c.white};
  }
`,Do=x.memo(No),Io=({nodes:t})=>{const{open:r}=z("addContent"),n=async()=>{r()};return!t||(t==null?void 0:t.length)===0?e.jsx(e.Fragment,{children:e.jsxs(Bo,{children:[e.jsx(Oo,{align:"center",direction:"row",justify:"space-between",children:e.jsx(S,{className:"subtitle",children:"Contribute to the graph by adding content."})}),e.jsx(h,{children:e.jsx(R,{color:"secondary",onClick:n,size:"medium",startIcon:e.jsx(Hr,{}),type:"submit",variant:"contained",children:"Add Content"})})]})}):e.jsxs(ye,{component:"table",children:[e.jsx(we,{children:e.jsxs(ce,{component:"tr",children:[e.jsx(w,{className:"empty"}),e.jsx(w,{children:"Date"}),e.jsx(w,{children:"Type"}),e.jsx(w,{children:"Source"}),e.jsx(w,{children:"Status"})]})}),e.jsx("tbody",{children:t==null?void 0:t.map(s=>e.jsx(Do,{node:s},s==null?void 0:s.ref_id))})]})},Bo=Oe(h)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 100px auto;
  width: 100%;
`,Oo=Oe(h)`
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
`,zo=()=>{const[t,r]=x.useState(!0),[n,s]=x.useState([]);return x.useEffect(()=>{(async()=>{try{const l=await tr();s(l.nodes),r(!1)}catch(l){console.error("Error fetching data:",l),r(!1)}})()},[]),e.jsxs(Mo,{direction:"column",justify:"flex-end",children:[e.jsx(Se,{align:"center",direction:"row",justify:"space-between",children:e.jsx(S,{className:"title",children:"Content I've added to the graph"})}),e.jsx(Ro,{align:"center",justify:t?"center":"flex-start",children:t?e.jsx($,{color:c.white}):e.jsx(e.Fragment,{children:e.jsx(Io,{nodes:n})})})]})},Mo=g(h)`
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
`,Ro=g(h)`
  min-height: 0;
  overflow: auto;
  flex: 1;
  width: 100%;
`,Fo=[{label:_t,component:zo},{label:zr,component:Rn},{label:St,component:kn},{label:wt,component:ko}],Wo=t=>{const{children:r,value:n,index:s,...i}=t;return n===s?e.jsx(Yo,{"aria-labelledby":`simple-tab-${s}`,hidden:n!==s,id:`simple-tabpanel-${s}`,role:"tabpanel",...i,children:r}):null};function Vo(t){return{id:`simple-tab-${t}`,"aria-controls":`simple-tabpanel-${t}`}}const Go=()=>{const[t,r]=x.useState(0),[n]=se(o=>[o.isAdmin]),[s]=Ot(o=>[o.queuedSourcesFlag]),i=zt(),l=(o,d)=>{r(d)},a=Fo.filter(({label:o})=>o===wt?n:o===St?n&&s:o===_t?i:!0);return e.jsxs(Zo,{direction:"column",children:[e.jsx(Uo,{"aria-label":"sources tabs",onChange:l,value:t,children:a.map((o,d)=>e.jsx(Ho,{color:c.white,disableRipple:!0,label:o.label,...Vo(d)},o.label))}),a.map((o,d)=>e.jsx(Wo,{index:d,value:t,children:e.jsx(o.component,{})},o.label))]})},Uo=g(Yr)`
  && {
    background: rgba(0, 0, 0, 0.2);

    .MuiTabs-indicator {
      background: ${c.primaryBlue};
    }
  }
`,Ho=g(Zr)`
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
`,Yo=g(h)`
  display: flex;
  flex: 1;
  min-height: 572px;
  padding: 20px 0;
  max-height: 572px;
`,Zo=g(h)`
  min-height: 0;
  flex: 1;
`,xe={required:{message:"The field is required",value:!0}},Ko=({initialValues:t})=>{const r=ae({defaultValues:t,mode:"onSubmit"}),{isSubmitting:n}=r.formState,s=r.handleSubmit(async i=>{try{await rr(i)}catch(l){console.warn(l)}});return e.jsx(le,{...r,children:e.jsx("form",{id:"add-node-form",onSubmit:s,children:e.jsxs(e.Fragment,{children:[e.jsxs(h,{children:[e.jsx(h,{pt:12,children:e.jsx(ne,{id:"cy-about-title-id",label:"Graph Title",maxLength:50,name:"title",placeholder:"Type graph title here...",rules:{...xe}})}),e.jsx(h,{pt:12,children:e.jsx(ne,{id:"cy-about-id",label:"Graph Description",maxLength:50,name:"description",placeholder:"Type graph description here...",rules:{...xe}})}),e.jsx(h,{pt:12,children:e.jsx(ne,{id:"cy-about-mission_statement-id",label:"Mission Statement",maxLength:50,name:"mission_statement",placeholder:"Type mission statement here...",rules:{...xe}})}),e.jsx(h,{pt:12,children:e.jsx(ne,{id:"cy-about-search_term-id",label:"Search Term",maxLength:50,name:"search_term",placeholder:"Type search term here...",rules:{...xe}})})]}),e.jsx(h,{pt:8,children:n?e.jsx(qo,{children:e.jsx($,{color:c.white,size:20})}):e.jsx(At,{disabled:n,id:"add-node-submit-cta",kind:"big",type:"submit",children:"Save changes"})})]})})})},qo=g(h).attrs({align:"center",background:"primaryButton",borderRadius:8,justify:"center"})`
  padding: 16px 24px;
  opacity: 0.5;
`,Qo=({initialValues:t})=>e.jsxs(e.Fragment,{children:[t.title&&e.jsxs(h,{pt:12,children:[e.jsx(S,{kind:"regular",children:"Graph Title"}),e.jsx(h,{pt:12,children:e.jsx(S,{className:"value",kind:"medium",children:t.title})})]}),t.description&&e.jsxs(h,{pt:12,children:[e.jsx(S,{kind:"regular",children:"Graph Description"}),e.jsx(h,{pt:12,children:e.jsx(S,{className:"value",kind:"medium",children:t.description})})]}),t.mission_statement&&e.jsxs(h,{pt:12,children:[e.jsx(S,{kind:"regular",children:"Mission Statement"}),e.jsx(h,{pt:12,children:e.jsx(S,{className:"value",kind:"medium",children:t.mission_statement})})]})]}),Xo=()=>{const[t]=se(n=>[n.isAdmin]),r=K(n=>n.appMetaData);return e.jsxs(Jo,{align:"stretch",direction:"column",justify:"flex-end",children:[e.jsx(ts,{align:"center",direction:"row",justify:"space-between",children:e.jsx(S,{className:"title",children:"About"})}),e.jsx(es,{align:"stretch",justify:"flex-start",children:t?e.jsx(Ko,{initialValues:r}):e.jsx(Qo,{initialValues:r})})]})},Jo=g(h)`
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
`,es=g(h)`
  min-height: 0;
  overflow: auto;
  flex: 1;
  width: 100%;
`,ts=g(h)`
  margin-bottom: 16px;
  ${S} {
    margin-bottom: 0;
  }
`;var rs=["type","layout","connectNulls","ref"];function Y(t){"@babel/helpers - typeof";return Y=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},Y(t)}function ns(t,r){if(t==null)return{};var n=os(t,r),s,i;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(i=0;i<l.length;i++)s=l[i],!(r.indexOf(s)>=0)&&Object.prototype.propertyIsEnumerable.call(t,s)&&(n[s]=t[s])}return n}function os(t,r){if(t==null)return{};var n={},s=Object.keys(t),i,l;for(l=0;l<s.length;l++)i=s[l],!(r.indexOf(i)>=0)&&(n[i]=t[i]);return n}function oe(){return oe=Object.assign?Object.assign.bind():function(t){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(t[s]=n[s])}return t},oe.apply(this,arguments)}function it(t,r){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);r&&(s=s.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,s)}return n}function P(t){for(var r=1;r<arguments.length;r++){var n=arguments[r]!=null?arguments[r]:{};r%2?it(Object(n),!0).forEach(function(s){I(t,s,n[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):it(Object(n)).forEach(function(s){Object.defineProperty(t,s,Object.getOwnPropertyDescriptor(n,s))})}return t}function V(t){return ls(t)||as(t)||is(t)||ss()}function ss(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function is(t,r){if(t){if(typeof t=="string")return Ie(t,r);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Ie(t,r)}}function as(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function ls(t){if(Array.isArray(t))return Ie(t)}function Ie(t,r){(r==null||r>t.length)&&(r=t.length);for(var n=0,s=new Array(r);n<r;n++)s[n]=t[n];return s}function cs(t,r){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")}function at(t,r){for(var n=0;n<r.length;n++){var s=r[n];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,kt(s.key),s)}}function ds(t,r,n){return r&&at(t.prototype,r),n&&at(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function ps(t,r){if(typeof r!="function"&&r!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(r&&r.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),r&&Be(t,r)}function Be(t,r){return Be=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(s,i){return s.__proto__=i,s},Be(t,r)}function hs(t){var r=xs();return function(){var s=ge(t),i;if(r){var l=ge(this).constructor;i=Reflect.construct(s,arguments,l)}else i=s.apply(this,arguments);return us(this,i)}}function us(t,r){if(r&&(Y(r)==="object"||typeof r=="function"))return r;if(r!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return O(t)}function O(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function xs(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function ge(t){return ge=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},ge(t)}function I(t,r,n){return r=kt(r),r in t?Object.defineProperty(t,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[r]=n,t}function kt(t){var r=fs(t,"string");return Y(r)==="symbol"?r:String(r)}function fs(t,r){if(Y(t)!=="object"||t===null)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var s=n.call(t,r||"default");if(Y(s)!=="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(t)}var de=function(t){ps(n,t);var r=hs(n);function n(){var s;cs(this,n);for(var i=arguments.length,l=new Array(i),a=0;a<i;a++)l[a]=arguments[a];return s=r.call.apply(r,[this].concat(l)),I(O(s),"state",{isAnimationFinished:!0,totalLength:0}),I(O(s),"generateSimpleStrokeDasharray",function(o,d){return"".concat(d,"px ").concat(o-d,"px")}),I(O(s),"getStrokeDasharray",function(o,d,p){var f=p.reduce(function(T,_){return T+_});if(!f)return s.generateSimpleStrokeDasharray(d,o);for(var m=Math.floor(o/f),y=o%f,b=d-o,j=[],u=0,C=0;u<p.length;C+=p[u],++u)if(C+p[u]>y){j=[].concat(V(p.slice(0,u)),[y-C]);break}var v=j.length%2===0?[0,b]:[b];return[].concat(V(n.repeat(p,m)),V(j),v).map(function(T){return"".concat(T,"px")}).join(", ")}),I(O(s),"id",pr("recharts-line-")),I(O(s),"pathRef",function(o){s.mainCurve=o}),I(O(s),"handleAnimationEnd",function(){s.setState({isAnimationFinished:!0}),s.props.onAnimationEnd&&s.props.onAnimationEnd()}),I(O(s),"handleAnimationStart",function(){s.setState({isAnimationFinished:!1}),s.props.onAnimationStart&&s.props.onAnimationStart()}),s}return ds(n,[{key:"componentDidMount",value:function(){if(this.props.isAnimationActive){var i=this.getTotalLength();this.setState({totalLength:i})}}},{key:"componentDidUpdate",value:function(){if(this.props.isAnimationActive){var i=this.getTotalLength();i!==this.state.totalLength&&this.setState({totalLength:i})}}},{key:"getTotalLength",value:function(){var i=this.mainCurve;try{return i&&i.getTotalLength&&i.getTotalLength()||0}catch{return 0}}},{key:"renderErrorBar",value:function(i,l){if(this.props.isAnimationActive&&!this.state.isAnimationFinished)return null;var a=this.props,o=a.points,d=a.xAxis,p=a.yAxis,f=a.layout,m=a.children,y=hr(m,ur);if(!y)return null;var b=function(C,v){return{x:C.x,y:C.y,value:C.value,errorVal:gt(C.payload,v)}},j={clipPath:i?"url(#clipPath-".concat(l,")"):null};return E.createElement(Te,j,y.map(function(u){return E.cloneElement(u,{key:"bar-".concat(u.props.dataKey),data:o,xAxis:d,yAxis:p,layout:f,dataPointFormatter:b})}))}},{key:"renderDots",value:function(i,l,a){var o=this.props.isAnimationActive;if(o&&!this.state.isAnimationFinished)return null;var d=this.props,p=d.dot,f=d.points,m=d.dataKey,y=ue(this.props),b=ue(p,!0),j=f.map(function(C,v){var T=P(P(P({key:"dot-".concat(v),r:3},y),b),{},{value:C.value,dataKey:m,cx:C.x,cy:C.y,index:v,payload:C.payload});return n.renderDotItem(p,T)}),u={clipPath:i?"url(#clipPath-".concat(l?"":"dots-").concat(a,")"):null};return E.createElement(Te,oe({className:"recharts-line-dots",key:"dots"},u),j)}},{key:"renderCurveStatically",value:function(i,l,a,o){var d=this.props,p=d.type,f=d.layout,m=d.connectNulls;d.ref;var y=ns(d,rs),b=P(P(P({},ue(y,!0)),{},{fill:"none",className:"recharts-line-curve",clipPath:l?"url(#clipPath-".concat(a,")"):null,points:i},o),{},{type:p,layout:f,connectNulls:m});return E.createElement(xr,oe({},b,{pathRef:this.pathRef}))}},{key:"renderCurveWithAnimation",value:function(i,l){var a=this,o=this.props,d=o.points,p=o.strokeDasharray,f=o.isAnimationActive,m=o.animationBegin,y=o.animationDuration,b=o.animationEasing,j=o.animationId,u=o.animateNewValues,C=o.width,v=o.height,T=this.state,_=T.prevPoints,k=T.totalLength;return E.createElement(fr,{begin:m,duration:y,isActive:f,easing:b,from:{t:0},to:{t:1},key:"line-".concat(j),onAnimationEnd:this.handleAnimationEnd,onAnimationStart:this.handleAnimationStart},function(N){var A=N.t;if(_){var q=_.length/d.length,F=d.map(function(L,_e){var J=Math.floor(_e*q);if(_[J]){var ee=_[J],W=te(ee.x,L.x),$t=te(ee.y,L.y);return P(P({},L),{},{x:W(A),y:$t(A)})}if(u){var Et=te(C*2,L.x),Lt=te(v/2,L.y);return P(P({},L),{},{x:Et(A),y:Lt(A)})}return P(P({},L),{},{x:L.x,y:L.y})});return a.renderCurveStatically(F,i,l)}var pe=te(0,k),Q=pe(A),X;if(p){var he="".concat(p).split(/[,\s]+/gim).map(function(L){return parseFloat(L)});X=a.getStrokeDasharray(Q,k,he)}else X=a.generateSimpleStrokeDasharray(k,Q);return a.renderCurveStatically(d,i,l,{strokeDasharray:X})})}},{key:"renderCurve",value:function(i,l){var a=this.props,o=a.points,d=a.isAnimationActive,p=this.state,f=p.prevPoints,m=p.totalLength;return d&&o&&o.length&&(!f&&m>0||!mr(f,o))?this.renderCurveWithAnimation(i,l):this.renderCurveStatically(o,i,l)}},{key:"render",value:function(){var i,l=this.props,a=l.hide,o=l.dot,d=l.points,p=l.className,f=l.xAxis,m=l.yAxis,y=l.top,b=l.left,j=l.width,u=l.height,C=l.isAnimationActive,v=l.id;if(a||!d||!d.length)return null;var T=this.state.isAnimationFinished,_=d.length===1,k=He("recharts-line",p),N=f&&f.allowDataOverflow,A=m&&m.allowDataOverflow,q=N||A,F=Ne(v)?this.id:v,pe=(i=ue(o))!==null&&i!==void 0?i:{r:3,strokeWidth:2},Q=pe.r,X=Q===void 0?3:Q,he=pe.strokeWidth,L=he===void 0?2:he,_e=gr(o)?o:{},J=_e.clipDot,ee=J===void 0?!0:J,W=X*2+L;return E.createElement(Te,{className:k},N||A?E.createElement("defs",null,E.createElement("clipPath",{id:"clipPath-".concat(F)},E.createElement("rect",{x:N?b:b-j/2,y:A?y:y-u/2,width:N?j:j*2,height:A?u:u*2})),!ee&&E.createElement("clipPath",{id:"clipPath-dots-".concat(F)},E.createElement("rect",{x:b-W/2,y:y-W/2,width:j+W,height:u+W}))):null,!_&&this.renderCurve(q,F),this.renderErrorBar(q,F),(_||o)&&this.renderDots(q,ee,F),(!C||T)&&yr.renderCallByParent(this.props,d))}}],[{key:"getDerivedStateFromProps",value:function(i,l){return i.animationId!==l.prevAnimationId?{prevAnimationId:i.animationId,curPoints:i.points,prevPoints:l.curPoints}:i.points!==l.curPoints?{curPoints:i.points}:null}},{key:"repeat",value:function(i,l){for(var a=i.length%2!==0?[].concat(V(i),[0]):i,o=[],d=0;d<l;++d)o=[].concat(V(o),V(a));return o}},{key:"renderDotItem",value:function(i,l){var a;if(E.isValidElement(i))a=E.cloneElement(i,l);else if(Mt(i))a=i(l);else{var o=He("recharts-line-dot",i?i.className:"");a=E.createElement(mt,oe({},l,{className:o}))}return a}}]),n}(x.PureComponent);I(de,"displayName","Line");I(de,"defaultProps",{xAxisId:0,yAxisId:0,connectNulls:!1,activeDot:!0,dot:!0,legendType:"line",stroke:"#3182bd",strokeWidth:1,fill:"#fff",points:[],isAnimationActive:!dr.isSsr,animateNewValues:!0,animationBegin:0,animationDuration:1500,animationEasing:"ease",hide:!1,label:!1});I(de,"getComposedData",function(t){var r=t.props,n=t.xAxis,s=t.yAxis,i=t.xAxisTicks,l=t.yAxisTicks,a=t.dataKey,o=t.bandSize,d=t.displayedData,p=t.offset,f=r.layout,m=d.map(function(y,b){var j=gt(y,a);return f==="horizontal"?{x:Ye({axis:n,ticks:i,bandSize:o,entry:y,index:b}),y:Ne(j)?null:s.scale(j),value:j,payload:y}:{x:Ne(j)?null:n.scale(j),y:Ye({axis:s,ticks:l,bandSize:o,entry:y,index:b}),value:j,payload:y}});return P({points:m,layout:f},p)});var ms=jr({chartName:"LineChart",GraphicalChild:de,axisComponents:[{axisType:"xAxis",AxisComp:yt},{axisType:"yAxis",AxisComp:jt}],formatAxisMap:br});const gs=({cx:t,cy:r})=>e.jsx(mt,{cx:t,cy:r,fill:c.blueTextAccent,r:2}),ys=({data:t,width:r=500,height:n=300})=>e.jsx(e.Fragment,{children:(t==null?void 0:t.length)&&e.jsxs(ms,{data:t,height:n,id:"cy-sentiment-chart",margin:{bottom:5,left:-20,right:30,top:5},width:r,children:[e.jsx(Cr,{stroke:c.lightBlue300,strokeDasharray:"5 5"}),e.jsx(yt,{dataKey:"date",interval:Math.floor(t.length/3),stroke:c.blueTextAccent}),e.jsx(jt,{domain:[0,10],stroke:c.blueTextAccent}),e.jsx(vr,{}),e.jsx(de,{dataKey:"score",dot:e.jsx(gs,{}),stroke:"#8884d8",type:"monotone"})]})}),js=()=>{const[t,r]=x.useState(void 0),[n]=se(a=>[a.setBudget]),[s,i]=x.useState(!1),l=async()=>{i(!0),nr(n).then(async a=>{r(a==null?void 0:a.data.filter(o=>o.date).map(o=>({date:Ft.unix(Number(String(o.date).split(".")[0])).format("MM/DD/YY"),score:o.sentiment_score}))),await dt(n)}).catch().finally(()=>{i(!1)})};return e.jsxs(bs,{align:"flex-start",direction:"column",id:"cy-sentiment-chart-wrapper",justify:"flex-end",children:[e.jsx(S,{className:"title",children:"Sentiment chart"}),s&&e.jsx(Ur,{alignItems:"center",component:"div",flexGrow:1,p:4,spacing:2,width:"100%",children:e.jsx(Rt,{color:c.white})}),!(t!=null&&t.length)&&e.jsx(Cs,{className:"button",id:"cy-get-sentiments-btn",onClick:l,children:"Get top 100 sentiments"}),e.jsx(ys,{data:t})]})},bs=g(h)`
  border-radius: 8px;
  box-shadow: 0px 5px 6px rgb(0 0 0 / 50%);
  padding: 16px;

  .title {
    margin-bottom: 16px;
    font-size: 20px;
  }
`,Cs=g(At)`
  height: 48px;
`,vs=600,ws={about:e.jsx(Xo,{}),sentiment:e.jsx(js,{}),sources:e.jsx(Go,{}),"":null},Ss=()=>{const[t,r]=K(n=>[n.secondarySidebarActiveTab,n.setSecondarySidebarActiveTab]);return e.jsx(wr,{direction:"left",in:!!t,mountOnEnter:!0,unmountOnExit:!0,children:e.jsxs(_s,{id:"secondary-sidebar-wrapper",children:[e.jsx(Ts,{id:"cy-close-secondary-sidebar",onClick:()=>r(""),children:e.jsx(bt,{})}),ws[t]]})})},_s=g(h)(({theme:t})=>({background:c.BG1,height:"100vh",padding:"16px 20px",width:"100%",zIndex:30,display:"flex",[t.breakpoints.up("sm")]:{width:vs}})),Ts=g(h).attrs({align:"center",justify:"center",p:5})`
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
`,As=g(or)`
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
`,ks=g(h)`
  height: 100%;
  width: 100%;
  background-color: ${c.black};
`,$s=g(h)`
  position: absolute;
  bottom: 8px;
  left: 8px;
  color: ${c.white};
  font-size: 12px;
  opacity: 0.5;
`,Es=x.lazy(()=>B(()=>import("./index-e5da7df8.js"),["assets/index-e5da7df8.js","assets/index-5fb1066b.js","assets/index-3f17fe3b.css","assets/SourcesTableIcon-9dab894b.js","assets/SettingsIcon-0ba69f2e.js","assets/index-0756ab25.js","assets/index.esm-a4700a64.js","assets/react-toastify.esm-74a6e79d.js","assets/react-toastify-b60658ac.css","assets/index-8c752204.js"]).then(({MainToolbar:t})=>({default:t}))),Ls=x.lazy(()=>B(()=>import("./index-2bd935e5.js"),["assets/index-2bd935e5.js","assets/index-5fb1066b.js","assets/index-3f17fe3b.css","assets/EditIcon-1d71224b.js","assets/react-toastify.esm-74a6e79d.js","assets/react-toastify-b60658ac.css","assets/generateCategoricalChart-ce31e371.js","assets/Popover-6a0988bf.js","assets/useSlotProps-4cfb1cc9.js","assets/InfoIcon-3763223f.js","assets/index-b87a6c6a.js","assets/index.esm-a4700a64.js","assets/PlusIcon-6f90f472.js","assets/index-8c752204.js","assets/NoFilterResultIcon-1c50afa9.js","assets/ChevronUpIcon-44043c2c.js","assets/index-dba1eeb7.js","assets/index-533926d5.js","assets/index-9bd962af.js","assets/index-336ec8a7.js","assets/Popper-03cceb62.js","assets/CheckIcon-c6306821.js","assets/Stack-5d503865.js"]).then(({Universe:t})=>({default:t}))),Ps=x.lazy(()=>B(()=>import("./index-5ae52f58.js"),["assets/index-5ae52f58.js","assets/index-5fb1066b.js","assets/index-3f17fe3b.css","assets/react-toastify.esm-74a6e79d.js","assets/react-toastify-b60658ac.css","assets/SoundIcon-279c7476.js","assets/Select-c279e03a.js","assets/Popover-6a0988bf.js","assets/useSlotProps-4cfb1cc9.js","assets/ChevronUpIcon-44043c2c.js","assets/generateCategoricalChart-ce31e371.js","assets/InfoIcon-3763223f.js","assets/CheckIcon-c6306821.js","assets/index.esm-a4700a64.js","assets/toastMessage-9ee55ee8.js","assets/SoundIcon-6125620a.css","assets/index-b87a6c6a.js","assets/Skeleton-0c45b681.js","assets/PlusIcon-6f90f472.js","assets/index-8c752204.js","assets/index-336ec8a7.js"]).then(({SideBar:t})=>({default:t}))),Ns=()=>{const[t,r]=se(A=>[A.setBudget,A.setNodeCount]),[n,s]=x.useState(!1),{setSidebarOpen:i,currentSearch:l,setCurrentSearch:a,setRelevanceSelected:o,setTranscriptOpen:d}=K(A=>A),p=Sr(A=>A.setTeachMeAnswer),{data:f,setData:m,fetchData:y,graphStyle:b,setSelectedNode:j,setCategoryFilter:u}=Z(A=>A),C=sr(),v=ae({mode:"onChange"}),T=v.handleSubmit(({search:A})=>{d(!1),j(null),o(!1),a(A),p(""),u(null)}),_=x.useCallback(async()=>{await y(t,{...l?{word:l}:{}}),i(!0),l?await dt(t):j(null)},[y,t,l,i,j]);x.useEffect(()=>{_()},[l,_]);const k=()=>{if(f){s(!0);const A=cr(b,f.nodes);setTimeout(()=>{m(A),s(!1)},1e3)}};x.useEffect(()=>{k()},[b]);const N=x.useCallback(()=>{r("INCREMENT")},[r]);return x.useEffect(()=>{C&&(C.on("connect_error",A=>{console.error("Socket connection error:",A)}),C.on("newnode",N))},[C,N]),x.useEffect(()=>()=>{C&&C.disconnect()},[C]),e.jsxs(e.Fragment,{children:[e.jsx(ir,{}),e.jsx(vn,{}),e.jsx(ar,{hidden:!Wt}),e.jsx(x.Suspense,{fallback:e.jsx("div",{children:"Loading..."}),children:e.jsxs(ks,{direction:"row",children:[e.jsx(_r,{children:e.jsxs(le,{...v,children:[e.jsx(Es,{}),e.jsx(Ps,{onSubmit:T}),e.jsx(Ls,{}),n&&e.jsx(cn,{fullSize:!1}),e.jsx(an,{}),e.jsx(Ss,{}),e.jsx(jn,{}),e.jsxs($s,{children:["v",lr]}),e.jsx(pt,{})]})}),e.jsx(yn,{}),e.jsx(As,{}),e.jsx(Tn,{})]})})]})},qs=Object.freeze(Object.defineProperty({__proto__:null,App:Ns},Symbol.toStringTag,{value:"Module"}));export{an as O,cn as P,Go as S,qs as i};
