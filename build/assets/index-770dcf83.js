import{j as e,F as u,T as S,s as m,c,r as h,_ as L,m as At,d as kt,a as Re,Y as Me,R as Fe,u as oe,l as tt,b as $t,e as E,f as Et,i as Nt,P as Pt,h as Dt,g as rt,k as zt}from"./index-2a9d3beb.js";import{A as It,u as K,a as nt,b as q,c as R,C as $,S as Lt,d as Ot,B as M,e as Bt,f as ot,g as st,I as se,p as Rt,h as U,i as it,j as Mt,k as ie,F as ae,l as Ft,m as at,n as Wt,s as lt,o as Gt,q as Vt,r as Ut,Q as Yt,t as Ht,G as Kt,L as qt,v as Qt,w as Xt}from"./react-toastify.esm-07017734.js";import{f as We,G as Zt,u as Jt,c as Ge,D as ct,a as er,E as tr,L as _e,b as ue,C as rr,A as nr,i as te,d as or,e as Pe,g as sr,h as ir,j as dt,k as Ve,l as ar,X as pt,Y as ut,m as lr,n as cr,T as dr,S as pr,o as ur,p as hr}from"./generateCategoricalChart-d45aba97.js";import{M as ht,a as xt,b as xr,c as fr,d as ft,e as mr}from"./index.esm-7c2c6137.js";import{T as gr,a as le,b as yr,F as De,M as me,C as mt,N as jr,c as br,D as Le}from"./NoFilterResultIcon-5bbc1568.js";import{s as Y,T as gt,A as Oe,u as z,I as vr,E as wr,D as Sr,a as yt,Q as jt,V as _r,S as Tr}from"./index-bb30e745.js";import{S as ge,C as Cr,a as Ar}from"./ChevronUpIcon-48a035e3.js";import{P as ye,I as je,a as bt,F as kr}from"./Popover-dabdecb4.js";import{B as $r,T as re}from"./index-8d47b5aa.js";import{u as B}from"./index-82f4c095.js";import{B as Be}from"./index-5c9cd044.js";import{P as vt}from"./Popper-449923bf.js";import{C as Er}from"./CheckIcon-820446e3.js";import{S as Nr}from"./SettingsIcon-e9d79e17.js";import{P as Pr}from"./PlusIcon-746d7811.js";import{T as Dr,a as zr,B as wt}from"./index-889d74de.js";import{S as Ir}from"./Stack-5524f850.js";const Lr=({twitterHandle:t})=>e.jsx(e.Fragment,{children:e.jsx(u,{direction:"row",children:e.jsx(u,{align:"flex-start",pb:12,children:e.jsxs(S,{children:["Tweet by @",t]})})})}),Or=m(u)(({theme:t})=>({position:"absolute",top:"65px",right:"55px",width:"300px",pointerEvents:"none",background:c.dashboardHeader,boxShadow:"0px 1px 6px rgba(0, 0, 0, 0.1)",color:c.primaryText1,zIndex:100,transition:"opacity 0.6s",padding:t.spacing(2,3),[t.breakpoints.down("sm")]:{padding:t.spacing(1,1.5)}})),Br=m(u)`
  width: 22.5%;
`,Rr=({node:t})=>{if(!t)return null;const{node_type:r,show_title:n,episode_title:o,description:a,label:l,text:i,type:s,twitter_handle:d}=t,p=t.guests;let x=!1,g=!1;p&&(p.length&&p[0]!==null&&(x=!0),typeof p[0]=="object"&&(g=!0));let y=t.image_url;if(s==="twitter_space"&&(y="twitter_placeholder.png"),y==null)switch(r){case"guest":y="person_placeholder2.png";break;default:y="noimage.jpeg"}return r==="topic"?null:e.jsx(Or,{borderRadius:8,px:24,py:16,children:r==="tweet"?e.jsx(Lr,{twitterHandle:d}):e.jsxs(e.Fragment,{children:[e.jsxs(u,{direction:"row",children:[e.jsx(Br,{}),e.jsx(u,{align:"flex-start",pb:12,children:e.jsx(S,{children:r==null?void 0:r.toUpperCase()})})]}),e.jsxs(u,{direction:"row",children:[e.jsx(u,{pr:12,children:e.jsx(It,{src:y,type:"person"})}),e.jsxs("div",{children:[s==="guest"?e.jsxs(u,{direction:"column",children:[e.jsx(S,{children:l}),i&&e.jsx(u,{pt:4,children:e.jsxs(S,{color:"primaryText1",kind:"tiny",children:["@",i]})})]}):e.jsx(S,{color:"primaryText1",kind:"tiny",children:n}),e.jsxs(u,{pt:4,children:[r==="clip"||r==="episode"&&e.jsx(S,{color:"primaryText1",children:"Episode"}),r==="clip"?e.jsx(S,{as:"div",kind:"regularBold",children:We(a)}):e.jsx(S,{color:"primaryText1",kind:"tiny",children:o})]}),e.jsxs(u,{pt:12,children:[r==="clip"&&e.jsx(S,{color:"primaryText1",children:"Episode"}),e.jsx(S,{color:"primaryText1",kind:"tiny",children:r==="clip"?o:We(a)})]}),x&&e.jsxs(u,{pt:12,children:[e.jsx(S,{color:"primaryText1",children:"People"}),e.jsx(u,{pt:4,children:e.jsx(S,{color:"primaryText1",kind:"tiny",children:g?p.map(b=>b.name?b.name:`@${b.twitter_handle}`).join(", "):p==null?void 0:p.join(", ")})})]})]})]})]})})},Mr=()=>{const[t]=K(r=>[r.hoveredNode]);return e.jsxs(Fr,{children:[t&&e.jsx("div",{id:"tooltip-portal",children:e.jsx(Rr,{node:t})}),e.jsx(nt,{})]})},Fr=m("div")(({theme:t})=>({position:"absolute",zIndex:1,top:0,left:0,userSelect:"none",pointerEvents:"none",display:"flex",justifyContent:"flex-end",alignItems:"flex-start",height:"100%",width:"100%",padding:"16px",[t.breakpoints.down("sm")]:{top:50}})),Wr=({fullSize:t=!0})=>{const r=q(n=>n.sidebarIsOpen);return e.jsx(Gr,{align:"center",className:R({"sidebar-is-open":r&&!t}),justify:"center",children:e.jsx($,{color:c.SECONDARY_BLUE,size:64})})},Gr=m(u)`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  background-color: ${c.black};
  z-index: 1;
`,Vr=h.lazy(()=>L(()=>import("./index-abed54bb.js"),["assets/index-abed54bb.js","assets/index-2a9d3beb.js","assets/index-3f17fe3b.css","assets/index-5c9cd044.js","assets/index-82f4c095.js","assets/react-toastify.esm-07017734.js","assets/react-toastify-b60658ac.css","assets/index-889d74de.js","assets/useSlotProps-28bca2ab.js","assets/index-8d47b5aa.js","assets/index.esm-7c2c6137.js","assets/InfoIcon-fa5df30b.js"]).then(({SettingsModal:t})=>({default:t}))),Ur=h.lazy(()=>L(()=>import("./index-c1a5346f.js"),["assets/index-c1a5346f.js","assets/index-2a9d3beb.js","assets/index-3f17fe3b.css","assets/react-toastify.esm-07017734.js","assets/react-toastify-b60658ac.css","assets/index-5c9cd044.js","assets/index-82f4c095.js","assets/index-ee05bf73.js","assets/index.esm-7c2c6137.js","assets/CheckIcon-820446e3.js","assets/index-8d47b5aa.js","assets/InfoIcon-fa5df30b.js"]).then(({AddContentModal:t})=>({default:t}))),Yr=h.lazy(()=>L(()=>import("./index-f6d66247.js"),["assets/index-f6d66247.js","assets/index-2a9d3beb.js","assets/index-3f17fe3b.css","assets/react-toastify.esm-07017734.js","assets/react-toastify-b60658ac.css","assets/index-5c9cd044.js","assets/index-82f4c095.js","assets/index-ee05bf73.js","assets/index.esm-7c2c6137.js","assets/CheckIcon-820446e3.js","assets/index-8d47b5aa.js","assets/InfoIcon-fa5df30b.js","assets/index-09a9a174.js","assets/index-69eec19b.js","assets/Popover-dabdecb4.js","assets/useSlotProps-28bca2ab.js","assets/Select-cbc0a71e.js","assets/Stack-5524f850.js","assets/Popper-449923bf.js","assets/constants-84edb5fc.js"]).then(({AddItemModal:t})=>({default:t}))),Hr=h.lazy(()=>L(()=>import("./index-b1b5b83a.js"),["assets/index-b1b5b83a.js","assets/index-2a9d3beb.js","assets/index-3f17fe3b.css","assets/index-5c9cd044.js","assets/index-82f4c095.js","assets/react-toastify.esm-07017734.js","assets/react-toastify-b60658ac.css","assets/generateCategoricalChart-d45aba97.js","assets/Popover-dabdecb4.js","assets/useSlotProps-28bca2ab.js","assets/InfoIcon-fa5df30b.js","assets/index.esm-7c2c6137.js","assets/NoFilterResultIcon-5bbc1568.js","assets/ChevronUpIcon-48a035e3.js","assets/index-889d74de.js","assets/index-bb30e745.js","assets/index-8d47b5aa.js","assets/Popper-449923bf.js","assets/CheckIcon-820446e3.js","assets/SettingsIcon-e9d79e17.js","assets/PlusIcon-746d7811.js","assets/Stack-5524f850.js"]).then(({SourcesTableModal:t})=>({default:t}))),Kr=h.lazy(()=>L(()=>import("./index-3ab35050.js"),["assets/index-3ab35050.js","assets/index-2a9d3beb.js","assets/index-3f17fe3b.css","assets/index-5c9cd044.js","assets/index-82f4c095.js","assets/react-toastify.esm-07017734.js","assets/react-toastify-b60658ac.css","assets/index-bb30e745.js","assets/index-8d47b5aa.js","assets/index.esm-7c2c6137.js","assets/InfoIcon-fa5df30b.js","assets/Skeleton-5f3e0afb.js"]).then(({EditNodeNameModal:t})=>({default:t}))),qr=h.lazy(()=>L(()=>import("./index-55f1994e.js"),["assets/index-55f1994e.js","assets/index-2a9d3beb.js","assets/index-3f17fe3b.css","assets/index-5c9cd044.js","assets/index-82f4c095.js","assets/react-toastify.esm-07017734.js","assets/react-toastify-b60658ac.css","assets/toastMessage-b961f51d.js","assets/index.esm-7c2c6137.js","assets/Skeleton-5f3e0afb.js"]).then(({RemoveNodeModal:t})=>({default:t}))),Qr=h.lazy(()=>L(()=>import("./index-d38af576.js"),["assets/index-d38af576.js","assets/index-2a9d3beb.js","assets/index-3f17fe3b.css","assets/index-5c9cd044.js","assets/index-82f4c095.js","assets/react-toastify.esm-07017734.js","assets/react-toastify-b60658ac.css","assets/toastMessage-b961f51d.js","assets/index.esm-7c2c6137.js","assets/index-09a9a174.js","assets/index-69eec19b.js","assets/Popover-dabdecb4.js","assets/useSlotProps-28bca2ab.js","assets/Select-cbc0a71e.js","assets/Stack-5524f850.js","assets/Popper-449923bf.js","assets/constants-84edb5fc.js","assets/index-bb30e745.js"]).then(({AddNodeEdgeModal:t})=>({default:t}))),Xr=()=>e.jsxs(e.Fragment,{children:[e.jsx(Yr,{}),e.jsx(Ur,{}),e.jsx(Vr,{}),e.jsx(Kr,{}),e.jsx(qr,{}),e.jsx(Hr,{}),e.jsx(Qr,{})]}),Zr=()=>{const t=q(r=>r.appMetaData);return e.jsxs(Jr,{children:[e.jsxs(en,{children:[e.jsx(e.Fragment,{children:t.title&&e.jsx(S,{className:"title",color:"white",children:t.title})}),e.jsx(S,{className:"subtitle",children:" Second Brain"})]}),e.jsx(Lt,{})]})},Jr=m(u).attrs({align:"center",direction:"row",grow:1,justify:"flex-start"})`
  height: 64px;
  position: absolute;
  top: 0px;
  left: 64px;
  right: 32px;
  transition: opacity 1s;
  z-index: 99;
  padding: 20px 23px;
`,en=m.div`
  ${At.smallOnly`
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
`,tn=()=>{const[t,r]=h.useState(!0),n=Ot();h.useEffect(()=>{r(!0)},[n]);const o=()=>{r(!1)};return n&&t?e.jsxs(rn,{align:"center",direction:"column",justify:"center",onClick:o,children:[e.jsx("img",{alt:"screen",src:"jamboard_kiosk.png"}),e.jsxs(u,{align:"center",direction:"column",justify:"center",children:[e.jsx(Te,{children:"Second Brain is currently"}),e.jsx(Te,{style:{fontWeight:600},children:"optimized for Desktop."}),e.jsx(Te,{children:"Mobile support coming soon."})]}),e.jsx(M,{color:"secondary",onClick:o,variant:"contained",children:"Got It"})]}):null},rn=m(u)`
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.75);
  gap: 28px;
  z-index: 2000000000;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`,Te=m(S)`
  color: #fff;
  text-align: center;
  font-family: Barlow;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  margin: 1px;
`,nn={},on=h.createContext(nn),sn=()=>{const[t,r]=h.useState(!1),n=h.useMemo(()=>({isShow:t,setIsShow:r}),[t]);return e.jsx(on.Provider,{value:n})},w=m(gr)`
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
`,be=m(le)`
  && {
    height: 48px;
    padding: 0 36px;
  }
  &:nth-child(odd) {
    background-color: ${c.BG3};
  }
`,ve=m(yr)`
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
`,xe=m(M)`
  &.selected {
    background: ${c.white};
    color: ${c.BG1};
    pointer-events: none;
  }

  & + & {
    margin-left: 16px;
  }
`,we=m(u)`
  margin-bottom: 16px;
  padding: 0 36px;
  ${S} {
    margin-bottom: 0;
  }
`,an=({data:t})=>{const r=K(i=>i.setQueuedSources),[n,o]=h.useState(""),a=async i=>{if(t!=null&&t.length)try{const s=await kt.enable();await Bt(i,s.pubkey),r(t.filter(d=>d.ref_id!==i))}catch(s){console.warn(s)}},l=async i=>{if(!(!i||!(t!=null&&t.length))){o(i);try{await ot(i),r(t==null?void 0:t.filter(s=>s.ref_id!==i))}catch(s){console.warn(s)}finally{o("")}}};return t!=null&&t.length?e.jsxs(me,{component:"table",children:[e.jsx(ve,{children:e.jsxs(le,{component:"tr",children:[e.jsx(w,{className:"empty"}),e.jsx(w,{children:"Type"}),e.jsx(w,{children:"Source"}),e.jsx(w,{}),e.jsx(w,{className:"empty"})]})}),(t==null?void 0:t.length)&&e.jsx("tbody",{children:t==null?void 0:t.map(i=>e.jsxs(be,{children:[e.jsx(w,{className:"empty"}),e.jsx(w,{children:Y[i.source_type]}),e.jsx(w,{width:"268px",children:i.source_type==="twitter_handle"?e.jsxs(Ye,{href:`${gt}/${i.source}?open=system`,target:"_blank",children:["@",i.source]}):e.jsx(Ye,{href:`${i.source}?open=system`,target:"_blank",children:i.source})}),e.jsx(w,{className:"cell-center",children:e.jsxs(u,{direction:"row",justify:"space-between",children:[e.jsx("div",{className:"approve-wrapper",children:e.jsx(Ue,{className:"centered",onClick:()=>a(i.ref_id),children:e.jsx(ht,{color:c.primaryGreen,fontSize:24})})}),e.jsx("div",{className:"delete-wrapper",children:n===i.ref_id?e.jsx($,{color:c.white,size:16}):e.jsx(mt,{message:"Are you sure ?",onConfirm:()=>l(i.ref_id),children:e.jsx(Ue,{className:"centered",children:e.jsx(xt,{color:c.primaryRed,fontSize:24})})})})]})}),e.jsx(w,{className:"empty"})]},i.source))})]}):e.jsxs(u,{children:[e.jsx(S,{children:"There is not any results for selected filters"}),e.jsx(De,{})]})},Ue=m(u)`
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
`,Ye=m.a`
  color: ${c.white};
  text-decoration: underline;
  &:visited {
    color: ${c.white};
  }
  &:hover {
    cursor: pointer;
  }
`,ln=()=>{const[t,r]=h.useState(!0),[n,o]=h.useState(""),[a,l]=K(d=>[d.queuedSources,d.setQueuedSources]);h.useEffect(()=>{(async()=>{r(!0);try{const p=await st({approved:"False"});l(p.data)}catch(p){console.warn(p)}finally{r(!1)}})()},[l]);const i=d=>{o(n===d||!d?"":d)},s=a==null?void 0:a.filter(d=>!n||d.source_type===n);return e.jsxs(cn,{align:"stretch",direction:"column",justify:"flex-end",children:[e.jsxs(we,{align:"flex-start",justify:"space-between",children:[e.jsx(S,{className:"title",children:"Queued Sources"}),e.jsx(S,{className:"subtitle",children:"This is a queue of pending sources waiting for approval or denial from graph users. If you think a source will provide good content for the graph, you can pay to approve it. Think of this as an investment: you pay to add it to the source table, and if the content is popular you will earn from it. If content is not relevant to the graph, you should deny it."})]}),e.jsxs(u,{className:"filters",direction:"row",pb:16,px:36,children:[e.jsx(xe,{className:R({selected:!n}),onClick:()=>i(""),size:"small",children:"All"}),Object.keys(Y).map(d=>e.jsx(xe,{className:R({selected:d===n}),onClick:()=>i(d),size:"small",children:Y[d]},d))]}),e.jsx(dn,{align:"center",justify:t?"center":"flex-start",children:t?e.jsx($,{color:c.white}):e.jsx(an,{data:s})})]})},cn=m(u)`
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
`,dn=m(u)`
  min-height: 0;
  overflow: auto;
  flex: 1;
  width: 100%;
`,pn=({onSearch:t,placeholder:r,activeIcon:n,loadingIcon:o,defaultIcon:a,...l})=>{const[i,s]=h.useState(""),[d,p]=h.useState(!1),x=()=>{s(""),t(""),p(!1)},g=j=>{!j.target.value&&x(),s(j.target.value)},y=j=>{const{value:f}=j.currentTarget;s(f),!d&&(p(!0),setTimeout(()=>{t(f),f||x(),p(!1)},1e3),f||x())},b=()=>d?e.jsx(He,{children:e.jsx(Ce,{type:"button",children:o})}):e.jsx(He,{children:i?e.jsx(Ce,{onClick:x,type:"button",children:n}):e.jsx(Ce,{type:"button",children:a})});return e.jsxs(un,{children:[e.jsx(hn,{autoComplete:"off",autoCorrect:"off",inputProps:{"aria-label":"search sources"},onChange:g,onKeyDown:j=>{j.key==="Enter"&&y(j)},placeholder:r,value:i,...l}),b()]})},He=m(u)`
  top: -50%;
  right: -3%;
  z-index: 3;
  position: absolute;
  transform: translate(-50%, 50%);
`,Ce=m(se)`
  font-size: 24px;
`,un=m(ye)`
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
`,hn=m(je)`
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
`,xn=({data:t,canEdit:r=!1})=>{const n=K(s=>s.setSources),[o,a]=h.useState(""),l=async(s,d)=>{if(t!=null&&t.length)try{await Rt(s,d);const p=t==null?void 0:t.findIndex(g=>g.ref_id===s),x=[...t];x[p]={...x[p],source:d.source},n(x)}catch(p){console.warn(p)}},i=async s=>{if(!(!s||!(t!=null&&t.length))){a(s);try{await ot(s),n(t==null?void 0:t.filter(d=>d.ref_id!==s))}catch(d){console.warn(d)}finally{a("")}}};return t!=null&&t.length?e.jsxs(me,{"aria-label":"a dense table",component:"table",id:"sources-table",size:"small",children:[e.jsx(ve,{children:e.jsxs(le,{component:"tr",children:[e.jsx(w,{className:"empty"}),e.jsx(w,{children:"Type"}),e.jsx(w,{align:"left",children:"Source"}),r&&e.jsx(w,{align:"left"}),e.jsx(w,{className:"empty"})]})}),e.jsx(br,{component:"tbody",children:t==null?void 0:t.map(s=>e.jsxs(be,{children:[e.jsx(w,{className:"empty"}),e.jsx(w,{align:"left",children:Y[s.source_type]}),e.jsx(w,{align:"left",children:e.jsx(fn,{condition:r,wrapper:d=>e.jsx(mn,{id:s.ref_id,onSave:p=>l(s.ref_id,{source:p,source_type:s.source_type}),value:s.source,children:d}),children:s.source_type===Re||s.source_type===Me||s.source_type===Fe?e.jsxs(e.Fragment,{children:[s.source_type===Re&&e.jsxs(Ae,{href:`${gt}/${s.source}`,target:"_blank",children:["@",s.source]}),s.source_type===Me&&e.jsx(Ae,{href:`${s.source}${s.source.includes("?")?"&":"?"}open=system`,target:"_blank",children:s.source}),s.source_type===Fe&&e.jsx(Ae,{href:s.source,target:"_blank",children:s.source})]}):e.jsx("div",{children:s.source})})}),r&&e.jsx(w,{align:"left",children:e.jsx("div",{className:"delete-wrapper",id:`delete-${s.source}`,children:o===s.ref_id?e.jsx($,{color:c.white}):e.jsx(mt,{message:"Are you sure ?",onConfirm:()=>i(s.ref_id),children:e.jsx(V,{className:"centered",children:e.jsx(xr,{})})})})}),e.jsx(w,{className:"empty"})]},s.source))})]}):e.jsxs(yn,{children:[e.jsx(jr,{}),e.jsx(S,{className:"text",children:"There is not any results for selected filters"})]})};function fn({condition:t,wrapper:r,children:n}){return t?r(n):n}const mn=({value:t,onSave:r,id:n,children:o})=>{const[a,l]=h.useState(!1),[i,s]=h.useState(t),[d,p]=h.useState(!1),x=async()=>{if(n){p(!0);try{await r(i),l(!1)}catch(g){console.warn(g)}finally{p(!1)}}};return e.jsx("div",{children:a?e.jsxs(gn,{direction:"row",children:[e.jsx($r,{className:"editable-cell__input",name:"cell-input",onChange:g=>s(g),value:i}),e.jsx(V,{align:"center",justify:"center",children:d?e.jsx($,{}):e.jsx(fr,{onClick:x})}),e.jsx(V,{align:"center",className:"secondary",justify:"center",onClick:()=>l(!1),children:e.jsx(ft,{})})]}):e.jsxs(jn,{direction:"row",children:[o,e.jsx(V,{onClick:()=>l(!0),children:e.jsx(mr,{size:20})})]})})},gn=m(u)`
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
`,V=m(u)`
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
`,yn=m(u)`
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
`,jn=m(u)`
  display: flex;
  padding: 4px;
  position: relative;

  ${V} {
    visibility: hidden;
  }

  &:hover {
    ${V} {
      visibility: visible;
    }
  }
`,Ae=m.a`
  color: ${c.white};
  text-decoration: underline;
  &:visited {
    color: ${c.white};
  }
`,bn=()=>{const[t,r]=h.useState(!0),[n,o]=h.useState(""),[a,l]=K(g=>[g.sources,g.setSources]),[i]=oe(g=>[g.isAdmin]),[s,d]=h.useState("");h.useEffect(()=>{(async()=>{r(!0);try{const y=await st();l(y.data)}catch(y){console.warn(y)}finally{r(!1)}})()},[l]);const p=g=>{o(n===g||!g?"":g)},x=h.useMemo(()=>a==null?void 0:a.filter(g=>(!n||g.source_type===n)&&(g.source.toLowerCase().startsWith(s.toLowerCase())||g.source.toLowerCase().includes(s.toLowerCase()))),[s,n,a]);return e.jsxs(vn,{align:"stretch",direction:"column",justify:"flex-end",children:[e.jsx(we,{align:"center",direction:"row",justify:"space-between",children:e.jsx(S,{className:"title",children:"Sources for this Graph"})}),e.jsx(Sn,{children:e.jsx(pn,{activeIcon:e.jsx(U,{}),defaultIcon:e.jsx(ge,{}),loadingIcon:e.jsx($,{color:c.PRIMARY_BLUE,size:24}),onSearch:d,placeholder:"Find Topic"})}),e.jsxs(u,{className:"filters",direction:"row",pb:16,px:36,children:[e.jsx(xe,{className:R({selected:!n}),onClick:()=>p(""),size:"small",children:"All"}),Object.keys(Y).map(g=>e.jsx(xe,{className:R({selected:g===n}),onClick:()=>p(g),size:"small",children:Y[g]},g))]}),e.jsx(wn,{align:"center",justify:t?"center":"flex-start",children:t?e.jsx($,{color:c.white}):e.jsx(xn,{canEdit:i,data:x})})]})},vn=m(u)`
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
`,wn=m(u)`
  min-height: 0;
  overflow: auto;
  flex: 1;
  width: 100%;
`,Sn=m(u)`
  margin: 0 0 16px 36px;
`,_n=({onSelect:t,selectedTopic:r})=>{const[n,o]=h.useState(!1),[a,l]=h.useState(""),[i,s]=h.useState([]),[d,p]=h.useState(!1),x=h.useRef(null);h.useEffect(()=>()=>s([]),[s]);const g=async f=>{const v={muted:"False",sort_by:Oe,search:f,skip:"0",limit:"1000"};p(!0);try{const _=await it(v);s(_.data)}catch{s([])}finally{p(!1)}},y=h.useMemo(()=>tt.debounce(g,300),[]),b=f=>{t(f)},j=f=>{if(l(f),!f){s([]);return}f.length>2&&y(f)};return r?e.jsxs(An,{children:[e.jsx("div",{className:"value",children:r.topic}),e.jsx(u,{className:"icon",onClick:()=>t(null),children:e.jsx(U,{})})]}):e.jsxs(e.Fragment,{children:[e.jsxs(ye,{ref:x,component:"form",onSubmit:f=>f.preventDefault(),sx:{p:"2px 4px",display:"flex",alignItems:"center",width:200},children:[e.jsx(je,{inputProps:{"aria-label":"search topic"},onChange:f=>j(f.target.value),onFocus:()=>o(!0),placeholder:"Search",size:"small",sx:{ml:1,flex:1},value:a}),a&&e.jsxs(e.Fragment,{children:[e.jsx(Ke,{"aria-label":"search",onClick:()=>j(""),type:"button",children:e.jsx(U,{})}),e.jsx(Le,{orientation:"vertical",sx:{height:28,m:.5}})]}),e.jsx(Ke,{"aria-label":"search",type:"button",children:d?e.jsx($,{color:c.white,size:24}):e.jsx(ge,{})})]}),x.current&&i.length?e.jsx(Cn,{anchorEl:x.current,open:n,placement:"bottom",children:e.jsx(e.Fragment,{children:i.map(f=>e.jsx(Tn,{className:R({active:r===f.ref_id}),onClick:()=>b(f),children:f.topic},"option"))})}):null]})},Tn=m(u).attrs({direction:"row",align:"center"})`
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
`,Cn=m(vt)`
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
`,An=m(u).attrs({direction:"row",justify:"flex-start",align:"center"})`
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
`,Ke=m(se)`
  font-size: 24px;
`,kn=({selectedType:t,setSelectedType:r})=>{const[n,o]=h.useState(null),[a,l]=h.useState([]);h.useEffect(()=>{(async()=>{try{const{data:x}=await Mt();l(x.edge_types)}catch(x){console.warn(x)}})()},[l]);const i=p=>{o(p.currentTarget)},s=()=>{o(null)},d=p=>{r(p),s()};return e.jsxs("div",{children:[e.jsxs($n,{onClick:i,children:[e.jsx("div",{className:"text",children:"Type"}),e.jsx("div",{className:"value",children:t}),e.jsx("div",{className:"icon",children:n?e.jsx(Ar,{}):e.jsx(Cr,{})})]}),e.jsx(Nn,{anchorEl:n,anchorOrigin:{vertical:"bottom",horizontal:"left"},anchorPosition:{top:62,left:0},onClose:s,open:!!n,transformOrigin:{vertical:"top",horizontal:"left"},children:e.jsx(kr,{children:a.map(p=>e.jsxs(En,{className:R({active:p===t}),onClick:()=>d(p),children:[e.jsx("span",{className:"icon",children:p===t?e.jsx(Er,{}):null}),e.jsx("span",{children:p})]},p))})})]})},$n=m(u).attrs({direction:"row",align:"center"})`
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
`,En=m(u).attrs({direction:"row",align:"center"})`
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
`,Nn=m(bt)`
  .MuiPaper-root {
    background: ${c.BUTTON1};
    min-width: 149px;
    padding: 16px;
    color: ${c.GRAY3};
    box-shadow: 0px 1px 6px 0px rgba(0, 0, 0, 0.2);
    border-radius: 6px;
  }
`,Pn=({from:t,onSelect:r,selectedTopic:n,selectedType:o,setSelectedType:a})=>e.jsxs(u,{children:[e.jsx(u,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(u,{align:"center",direction:"row",children:e.jsx(Dn,{children:"Add edge"})})}),e.jsxs(zn,{mb:12,children:[e.jsxs(ke,{children:[e.jsx("div",{className:"label",children:"From"}),e.jsx("div",{children:t})]}),e.jsx(ke,{children:e.jsx(kn,{selectedType:o,setSelectedType:a})}),e.jsxs(ke,{children:[e.jsx("div",{className:"label",children:"To"}),e.jsx(_n,{onSelect:r,selectedTopic:n})]})]})]}),Dn=m(S)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,zn=m(u).attrs({align:"flex-start",direction:"row",justify:"flex-start"})`
  color: ${c.white};
  .label {
    margin-bottom: 8px;
    font-weight: 500;
    font-size: 14px;
    color: ${c.GRAY3};
  }
`,ke=m(u)`
  flex: 1 1 100%;
`,In=({topic:t,onClose:r})=>{const{close:n}=B("addEdge"),[o]=z(j=>[j.data]),a=ie({mode:"onChange"}),[l,i]=h.useState(!1),[s,d]=h.useState(null),[p,x]=h.useState(""),g=()=>{r(),n()},y=async()=>{if(!(!s||!o)){i(!0);try{await Ft({from:t.ref_id,to:s==null?void 0:s.ref_id,relationship:p});const{ref_id:j}=t,{ref_id:f}=s;if(o){const v={...o};v[j]={...v[j],edgeList:[...v[j].edgeList,p]},v[f]&&(v[f]={...v[f],edgeList:[...v[f].edgeList,p]}),z.setState({data:v})}g()}catch(j){console.warn(j)}finally{i(!1)}}},b=l||!s||!p;return e.jsx(Be,{id:"addEdge",kind:"large",onClose:g,preventOutsideClose:!0,children:e.jsxs(ae,{...a,children:[e.jsx(Pn,{from:t.topic,onSelect:d,selectedTopic:s,selectedType:p,setSelectedType:x}),e.jsxs(M,{color:"secondary",disabled:b,onClick:y,size:"large",variant:"contained",children:["Confirm",l&&e.jsx($,{color:c.BLUE_PRESS_STATE,size:10})]})]})})},Ln=()=>e.jsxs(u,{children:[e.jsx(u,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(u,{align:"center",direction:"row",children:e.jsx(On,{children:"Edit topic"})})}),e.jsx(u,{mb:12,children:e.jsx(re,{id:"cy-topic",maxLength:50,name:"topic",placeholder:"Add your topic",rules:{...$t}})})]}),On=m(S)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,Bn=({topic:t,onClose:r})=>{const{close:n}=B("editTopic"),[o]=z(b=>[b.data]),a=ie({mode:"onChange"}),{watch:l,setValue:i,reset:s}=a,[d,p]=h.useState(!1);h.useEffect(()=>(t&&i("topic",t==null?void 0:t.topic),()=>{s()}),[t,i,s]);const x=l("topic"),g=()=>{r(),n()},y=async()=>{p(!0);try{if(await at((t==null?void 0:t.ref_id)||"",{topic:x.trim()}),o){const b={...o};b[t==null?void 0:t.ref_id].topic=x.trim(),z.setState({data:b})}g()}catch(b){console.warn(b)}finally{p(!1)}};return e.jsx(Be,{id:"editTopic",kind:"regular",onClose:g,preventOutsideClose:!0,children:e.jsxs(ae,{...a,children:[e.jsx(Ln,{}),e.jsxs(M,{color:"secondary",disabled:d,onClick:y,size:"large",variant:"contained",children:["Save",d&&e.jsx($,{color:c.BLUE_PRESS_STATE,size:10})]})]})})},Rn=({onSelect:t,selectedTopic:r})=>{const[n,o]=h.useState(!1),[a,l]=h.useState(""),[i,s]=h.useState([]),[d,p]=h.useState(!1),x=h.useRef(null);h.useEffect(()=>()=>s([]),[s]);const g=async f=>{const v={muted:"False",sort_by:Oe,search:f,skip:"0",limit:"1000"};p(!0);try{const _=await it(v);s(_.data)}catch{s([])}finally{p(!1)}},y=h.useMemo(()=>tt.debounce(g,300),[]),b=f=>{t(f)},j=f=>{if(l(f),!f){s([]);return}f.length>2&&y(f)};return r?e.jsxs(Wn,{children:[e.jsx("div",{className:"value",children:r.topic}),e.jsx(u,{className:"icon",onClick:()=>t(null),children:e.jsx(U,{})})]}):e.jsxs(e.Fragment,{children:[e.jsxs(ye,{ref:x,component:"form",onSubmit:f=>f.preventDefault(),sx:{p:"2px 4px",display:"flex",alignItems:"center",width:200},children:[e.jsx(je,{inputProps:{"aria-label":"search topic"},onChange:f=>j(f.target.value),onFocus:()=>o(!0),placeholder:"Search",size:"small",sx:{ml:1,flex:1},value:a}),a&&e.jsxs(e.Fragment,{children:[e.jsx(qe,{"aria-label":"search",onClick:()=>j(""),type:"button",children:e.jsx(U,{})}),e.jsx(Le,{orientation:"vertical",sx:{height:28,m:.5}})]}),e.jsx(qe,{"aria-label":"search",type:"button",children:d?e.jsx($,{color:c.white,size:24}):e.jsx(ge,{})})]}),x.current&&i.length?e.jsx(Fn,{anchorEl:x.current,open:n,placement:"bottom",children:e.jsx(e.Fragment,{children:i.map(f=>e.jsx(Mn,{className:R({active:r===f.ref_id}),onClick:()=>b(f),children:f.topic},"option"))})}):null]})},Mn=m(u).attrs({direction:"row",align:"center"})`
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
`,Fn=m(vt)`
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
`,Wn=m(u).attrs({direction:"row",justify:"flex-start",align:"center"})`
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
`,qe=m(se)`
  font-size: 24px;
`,Gn=({from:t,onSelect:r,selectedTopic:n})=>e.jsxs(u,{children:[e.jsx(u,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(u,{align:"center",direction:"row",children:e.jsx(Vn,{children:"Merge topic"})})}),e.jsxs(Un,{mb:12,children:[e.jsxs(Qe,{children:[e.jsx("div",{className:"label",children:"From"}),e.jsx("div",{children:t})]}),e.jsxs(Qe,{ml:24,children:[e.jsx("div",{className:"label",children:"To"}),e.jsx(Rn,{onSelect:r,selectedTopic:n})]})]})]}),Vn=m(S)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,Un=m(u).attrs({align:"flex-start",direction:"row",justify:"flex-start"})`
  color: ${c.white};
  .label {
    margin-bottom: 8px;
    font-weight: 500;
    font-size: 14px;
    color: ${c.GRAY3};
  }
`,Qe=m(u)`
  flex: 1 1 100%;
`,Yn=({topic:t,onClose:r})=>{const{close:n}=B("mergeTopic"),[o,a,l]=z(_=>[_.data,_.ids,_.total]),i=ie({mode:"onChange"}),{watch:s,setValue:d,reset:p}=i,[x,g]=h.useState(!1),[y,b]=h.useState(null);h.useEffect(()=>(t&&d("topic",t==null?void 0:t.topic),()=>{p()}),[t,d,p]);const j=s("topic"),f=()=>{r(),n()},v=async()=>{if(!(!y||!o)){g(!0);try{await Wt({from:t.ref_id,to:y==null?void 0:y.ref_id});const{ref_id:_}=t;if(o[_]={...o[_],edgeList:[vr],edgeCount:o[_].edgeCount-1},z.setState({ids:a.filter(k=>k!==y.ref_id),total:l-1}),o){const k={...o};k[t==null?void 0:t.ref_id].topic=j.trim(),z.setState({data:k})}f()}catch(_){console.warn(_)}finally{g(!1)}}};return e.jsx(Be,{id:"mergeTopic",kind:"regular",onClose:f,preventOutsideClose:!0,children:e.jsxs(ae,{...i,children:[e.jsx(Gn,{from:t.topic,onSelect:b,selectedTopic:y}),e.jsxs(M,{color:"secondary",disabled:x,onClick:v,size:"large",variant:"contained",children:["Merge topics",x&&e.jsx($,{color:c.BLUE_PRESS_STATE,size:10})]})]})})},Hn=()=>{const[t,r]=z(i=>[i.filters,i.setFilters]),[n,o]=h.useState(""),a=i=>{i.preventDefault(),r({search:n})},l=()=>{o(""),t.search&&r({search:""})};return e.jsxs(ye,{component:"form",onSubmit:a,sx:{p:"2px 4px",display:"flex",alignItems:"center",width:300},children:[e.jsx(je,{autoComplete:"off",autoCorrect:"off",inputProps:{"aria-label":"search topic"},onChange:i=>o(i.target.value),placeholder:"Search",size:"small",spellCheck:"false",sx:{ml:1,flex:1},value:n}),n&&e.jsxs(e.Fragment,{children:[e.jsx(Xe,{"aria-label":"search",onClick:l,type:"button",children:e.jsx(U,{})}),e.jsx(Le,{orientation:"vertical",sx:{height:28,m:.5}})]}),e.jsx(Xe,{"aria-label":"search",onClick:a,type:"button",children:e.jsx(ge,{})})]})},Xe=m(se)`
  font-size: 24px;
`,$e=t=>e.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 12 8",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M0.333496 7.66704V6.66706H3.91681V7.66704H0.333496ZM0.333496 4.50037V3.50041H7.7886V4.50037H0.333496ZM0.333496 1.33372V0.33374H11.6668V1.33372H0.333496Z",fill:"currentColor"})}),Kn=({topic:t,onClick:r,onSearch:n})=>{const[o,a]=z(x=>[x.ids,x.total]),[l,i]=h.useState(!1),s=t.date_added_to_graph.toString(),d=async(x,g)=>{i(!0);try{await at(x,{muted_topic:g}),z.setState({ids:o.filter(y=>y!==x),total:a-1})}catch(y){console.warn(y)}},p=x=>{n(x.topic)};return e.jsxs(be,{children:[e.jsx(w,{className:"empty"}),e.jsx(w,{onClick:()=>p(t),children:e.jsx(qn,{children:t.topic})}),e.jsx(w,{children:t.edgeCount}),e.jsx(w,{children:t.edgeList.join(", ")}),e.jsx(w,{children:e.jsx("span",{children:new Date(Number(s)*1e3).toDateString()})}),e.jsx(w,{className:"cell-center",children:e.jsx(u,{direction:"row",justify:"space-between",children:e.jsx("div",{className:"approve-wrapper",children:l?e.jsx($,{color:c.white,size:16}):e.jsx(e.Fragment,{children:t.muted_topic?e.jsx(Ze,{className:"centered",onClick:()=>d(t.ref_id,!1),children:e.jsx(ht,{color:c.primaryGreen,fontSize:24})}):e.jsx(Ze,{className:"centered",onClick:()=>d(t.ref_id,!0),children:e.jsx(xt,{color:c.primaryRed,fontSize:24})})})})})}),e.jsx(w,{children:e.jsx(se,{onClick:x=>r(x,t.ref_id),children:e.jsx(Nr,{})})})]},t.topic)},Ze=m(u)`
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
`,qn=m.span`
  cursor: pointer;
  :hover {
    text-decoration: underline;
  }
`,Qn=h.memo(Kn),Xn=({showMuted:t,onTopicEdit:r,onChangeFilter:n})=>{const{close:o}=B("sourcesTable"),[a,l]=E.useState(null),[i,s]=E.useState(""),[d,p]=q(T=>[T.setSearchFormValue,T.setCurrentSearch]),[x,g]=z(T=>[T.data,T.ids]),y=h.useCallback((T,A)=>{l(T.currentTarget),s(A)},[]),b=()=>{l(null)},j=T=>{d(T),p(T),o()},f=T=>{r(i,T),b()},v=T=>{n(T)},_=!!a,k=_?"simple-popover":void 0;return x?e.jsx(e.Fragment,{children:Object.keys(x).length?e.jsxs(e.Fragment,{children:[e.jsxs(me,{component:"table",children:[e.jsx(ve,{children:e.jsxs(le,{component:"tr",children:[e.jsx(w,{className:"empty"}),e.jsx(w,{children:e.jsxs(Ee,{onClick:()=>v(Oe),children:["Name ",e.jsx($e,{})]})}),e.jsx(w,{children:e.jsxs(Ee,{onClick:()=>v(wr),children:["Count ",e.jsx($e,{})]})}),e.jsx(w,{children:"Edge list"}),e.jsx(w,{children:e.jsxs(Ee,{onClick:()=>v(Sr),children:["Date ",e.jsx($e,{})]})}),e.jsx(w,{children:t?"Unmute":"Mute"}),e.jsx(w,{})]})}),x&&e.jsx("tbody",{children:g==null?void 0:g.map(T=>e.jsx(Qn,{onClick:y,onSearch:j,topic:x[T]},T))})]}),i?e.jsxs(Zn,{anchorEl:a,anchorOrigin:{vertical:"bottom",horizontal:"right"},id:k,onClose:b,open:_,transformOrigin:{vertical:"top",horizontal:"right"},children:[e.jsx(Ne,{onClick:()=>f("editTopic"),children:"Rename"}),e.jsx(Ne,{onClick:()=>f("mergeTopic"),children:"Merge"}),e.jsx(Ne,{onClick:()=>f("addEdge"),children:"Add edge"})]}):null]}):e.jsxs(u,{children:[e.jsx(S,{children:"There is not any results for selected filters"}),e.jsx(De,{})]})}):e.jsxs(u,{children:[e.jsx(S,{children:"There is not any results for selected filters"}),e.jsx(De,{})]})},Ee=m.span`
  cursor: pointer;
  display: flex;
  gap: 4px;
  align-items: center;
`,Ne=m(u).attrs({direction:"row",px:16,py:8})`
  cursor: pointer;
  background: ${c.BUTTON1};
  color: ${c.white};

  &:hover {
    background: ${c.BUTTON1_HOVER};
    color: ${c.GRAY3};
  }

  & + & {
    border-top: 1px solid ${c.black};
  }
`,Zn=m(bt)`
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
`,Jn=()=>{const[t,r]=h.useState(!1),[n,o,a,l,i,s,d]=z(A=>[A.data,A.ids,A.total,A.setTopics,A.filters,A.setFilters,A.terminate]),{open:p}=B("editTopic"),{open:x}=B("mergeTopic"),{open:g}=B("addEdge"),[y,b]=h.useState(null),j={editTopic:p,mergeTopic:x,addEdge:g},f=h.useRef([]);h.useEffect(()=>{o.length&&(f.current=o)},[o]),h.useEffect(()=>{(async()=>{try{r(!0),await l()}catch{console.error("err")}finally{r(!1)}})()},[l,i]);const v=async()=>{try{r(!0),s({page:i.page+1})}catch(A){console.error("Error loading more data:",A)}finally{r(!1)}};h.useEffect(()=>()=>{d()},[d]);const _=A=>{s({sortBy:A})},k=()=>{b(null)},T=(A,D)=>{n&&(b(n[A]),typeof j[D]=="function"&&j[D]())};return e.jsxs(e.Fragment,{children:[e.jsxs(eo,{direction:"column",justify:"flex-end",children:[e.jsxs(we,{align:"flex-start",direction:"row",justify:"space-between",children:[e.jsx(S,{className:"title",children:"Topics"}),e.jsxs(M,{disabled:t,onClick:()=>s({muted:!i.muted}),size:"medium",children:[i.muted?"Show Unmuted":"Show Muted",t&&e.jsx($,{color:c.BLUE_PRESS_STATE,size:10})]})]}),e.jsx(ro,{children:e.jsx(Hn,{})}),e.jsx(to,{align:"center",justify:t&&!n?"center":"flex-start",children:t&&!n?e.jsx($,{color:c.white}):e.jsxs(e.Fragment,{children:[e.jsx(Xn,{onChangeFilter:_,onTopicEdit:T,showMuted:i.muted}),a>o.length?e.jsxs(M,{className:"load-more",disabled:t,onClick:v,children:["Load more",t&&e.jsx($,{color:c.BLUE_PRESS_STATE,size:10})]}):null]})})]}),y&&e.jsx(Yn,{onClose:k,topic:y}),y&&e.jsx(Bn,{onClose:k,topic:y}),y&&e.jsx(In,{onClose:k,topic:y})]})},eo=m(u)`
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
`,to=m(u)`
  min-height: 0;
  overflow: auto;
  flex: 1;
  width: 100%;
`,ro=m(u).attrs({direction:"row",align:"center",justify:"space-between"})`
  padding: 0 36px;
  margin-bottom: 32px;
`,no=({node:t})=>{var n,o,a,l,i,s,d;function r(p){const x=new Date(Number(p)*1e3),g=x.getDate(),y=x.getMonth()+1,b=x.getFullYear();return`${g}/${y}/${b}`}return e.jsxs(be,{children:[e.jsx(w,{className:"empty"}),e.jsx(w,{children:(n=t==null?void 0:t.properties)!=null&&n.date_added_to_graph?r((o=t==null?void 0:t.properties)==null?void 0:o.date_added_to_graph):r((a=t==null?void 0:t.properties)==null?void 0:a.date)}),e.jsx(w,{children:t==null?void 0:t.node_type}),e.jsx(w,{children:(t==null?void 0:t.node_type)==="Tweet"?(l=t==null?void 0:t.properties)==null?void 0:l.tweet_id:(i=t==null?void 0:t.properties)==null?void 0:i.source_link}),e.jsx(w,{children:(s=t==null?void 0:t.properties)!=null&&s.status?(d=t==null?void 0:t.properties)==null?void 0:d.status:"processing"})]})},oo=h.memo(no),so=({nodes:t})=>{const{open:r}=B("addContent"),n=async()=>{r()};return!t||(t==null?void 0:t.length)===0?e.jsx(e.Fragment,{children:e.jsxs(io,{children:[e.jsx(ao,{align:"center",direction:"row",justify:"space-between",children:e.jsx(S,{className:"subtitle",children:"Contribute to the graph by adding content."})}),e.jsx(u,{children:e.jsx(M,{color:"secondary",onClick:n,size:"medium",startIcon:e.jsx(Pr,{}),type:"submit",variant:"contained",children:"Add Content"})})]})}):e.jsxs(me,{component:"table",children:[e.jsx(ve,{children:e.jsxs(le,{component:"tr",children:[e.jsx(w,{className:"empty"}),e.jsx(w,{children:"Date"}),e.jsx(w,{children:"Type"}),e.jsx(w,{children:"Source"}),e.jsx(w,{children:"Status"})]})}),e.jsx("tbody",{children:t==null?void 0:t.map(o=>e.jsx(oo,{node:o},o==null?void 0:o.ref_id))})]})},io=lt(u)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 100px auto;
  width: 100%;
`,ao=lt(u)`
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
`,lo=()=>{const[t,r]=h.useState(!0),[n,o]=h.useState([]);return h.useEffect(()=>{(async()=>{try{const l=await Gt();o(l.nodes),r(!1)}catch(l){console.error("Error fetching data:",l),r(!1)}})()},[]),e.jsxs(co,{direction:"column",justify:"flex-end",children:[e.jsx(we,{align:"center",direction:"row",justify:"space-between",children:e.jsx(S,{className:"title",children:"Content I've added to the graph"})}),e.jsx(po,{align:"center",justify:t?"center":"flex-start",children:t?e.jsx($,{color:c.white}):e.jsx(e.Fragment,{children:e.jsx(so,{nodes:n})})})]})},co=m(u)`
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
`,po=m(u)`
  min-height: 0;
  overflow: auto;
  flex: 1;
  width: 100%;
`,uo=[{label:_r,component:lo},{label:Tr,component:bn},{label:jt,component:ln},{label:yt,component:Jn}],ho=t=>{const{children:r,value:n,index:o,...a}=t;return n===o?e.jsx(yo,{"aria-labelledby":`simple-tab-${o}`,hidden:n!==o,id:`simple-tabpanel-${o}`,role:"tabpanel",...a,children:r}):null};function xo(t){return{id:`simple-tab-${t}`,"aria-controls":`simple-tabpanel-${t}`}}const fo=()=>{const[t,r]=h.useState(0),[n]=oe(i=>[i.isAdmin]),[o]=Et(i=>[i.queuedSourcesFlag]),a=(i,s)=>{r(s)},l=uo.filter(({label:i})=>i===yt?n:i===jt?n&&o:!0);return e.jsxs(jo,{direction:"column",children:[e.jsx(mo,{"aria-label":"sources tabs",onChange:a,value:t,children:l.map((i,s)=>e.jsx(go,{color:c.white,disableRipple:!0,label:i.label,...xo(s)},i.label))}),l.map((i,s)=>e.jsx(ho,{index:s,value:t,children:e.jsx(i.component,{})},i.label))]})},mo=m(Dr)`
  && {
    background: rgba(0, 0, 0, 0.2);

    .MuiTabs-indicator {
      background: ${c.primaryBlue};
    }
  }
`,go=m(zr)`
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
`,yo=m(u)`
  display: flex;
  flex: 1;
  min-height: 572px;
  padding: 20px 0;
  max-height: 572px;
`,jo=m(u)`
  min-height: 0;
  flex: 1;
`,he={required:{message:"The field is required",value:!0}},bo=({initialValues:t})=>{const r=ie({defaultValues:t,mode:"onSubmit"}),{isSubmitting:n}=r.formState,o=r.handleSubmit(async a=>{try{await Vt(a)}catch(l){console.warn(l)}});return e.jsx(ae,{...r,children:e.jsx("form",{id:"add-node-form",onSubmit:o,children:e.jsxs(e.Fragment,{children:[e.jsxs(u,{children:[e.jsx(u,{pt:12,children:e.jsx(re,{id:"cy-about-title-id",label:"Graph Title",maxLength:50,name:"title",placeholder:"Type graph title here...",rules:{...he}})}),e.jsx(u,{pt:12,children:e.jsx(re,{id:"cy-about-id",label:"Graph Description",maxLength:50,name:"description",placeholder:"Type graph description here...",rules:{...he}})}),e.jsx(u,{pt:12,children:e.jsx(re,{id:"cy-about-mission_statement-id",label:"Mission Statement",maxLength:50,name:"mission_statement",placeholder:"Type mission statement here...",rules:{...he}})}),e.jsx(u,{pt:12,children:e.jsx(re,{id:"cy-about-search_term-id",label:"Search Term",maxLength:50,name:"search_term",placeholder:"Type search term here...",rules:{...he}})})]}),e.jsx(u,{pt:8,children:n?e.jsx(vo,{children:e.jsx($,{color:c.white,size:20})}):e.jsx(wt,{disabled:n,id:"add-node-submit-cta",kind:"big",type:"submit",children:"Save changes"})})]})})})},vo=m(u).attrs({align:"center",background:"primaryButton",borderRadius:8,justify:"center"})`
  padding: 16px 24px;
  opacity: 0.5;
`,wo=({initialValues:t})=>e.jsxs(e.Fragment,{children:[t.title&&e.jsxs(u,{pt:12,children:[e.jsx(S,{kind:"regular",children:"Graph Title"}),e.jsx(u,{pt:12,children:e.jsx(S,{className:"value",kind:"medium",children:t.title})})]}),t.description&&e.jsxs(u,{pt:12,children:[e.jsx(S,{kind:"regular",children:"Graph Description"}),e.jsx(u,{pt:12,children:e.jsx(S,{className:"value",kind:"medium",children:t.description})})]}),t.mission_statement&&e.jsxs(u,{pt:12,children:[e.jsx(S,{kind:"regular",children:"Mission Statement"}),e.jsx(u,{pt:12,children:e.jsx(S,{className:"value",kind:"medium",children:t.mission_statement})})]})]}),So=()=>{const[t]=oe(n=>[n.isAdmin]),r=q(n=>n.appMetaData);return e.jsxs(_o,{align:"stretch",direction:"column",justify:"flex-end",children:[e.jsx(Co,{align:"center",direction:"row",justify:"space-between",children:e.jsx(S,{className:"title",children:"About"})}),e.jsx(To,{align:"stretch",justify:"flex-start",children:t?e.jsx(bo,{initialValues:r}):e.jsx(wo,{initialValues:r})})]})},_o=m(u)`
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
`,To=m(u)`
  min-height: 0;
  overflow: auto;
  flex: 1;
  width: 100%;
`,Co=m(u)`
  margin-bottom: 16px;
  ${S} {
    margin-bottom: 0;
  }
`;var Ao=["type","layout","connectNulls","ref"];function H(t){"@babel/helpers - typeof";return H=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},H(t)}function ko(t,r){if(t==null)return{};var n=$o(t,r),o,a;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)o=l[a],!(r.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(t,o)&&(n[o]=t[o])}return n}function $o(t,r){if(t==null)return{};var n={},o=Object.keys(t),a,l;for(l=0;l<o.length;l++)a=o[l],!(r.indexOf(a)>=0)&&(n[a]=t[a]);return n}function ne(){return ne=Object.assign?Object.assign.bind():function(t){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},ne.apply(this,arguments)}function Je(t,r){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);r&&(o=o.filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable})),n.push.apply(n,o)}return n}function P(t){for(var r=1;r<arguments.length;r++){var n=arguments[r]!=null?arguments[r]:{};r%2?Je(Object(n),!0).forEach(function(o){I(t,o,n[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Je(Object(n)).forEach(function(o){Object.defineProperty(t,o,Object.getOwnPropertyDescriptor(n,o))})}return t}function G(t){return Do(t)||Po(t)||No(t)||Eo()}function Eo(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function No(t,r){if(t){if(typeof t=="string")return ze(t,r);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ze(t,r)}}function Po(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Do(t){if(Array.isArray(t))return ze(t)}function ze(t,r){(r==null||r>t.length)&&(r=t.length);for(var n=0,o=new Array(r);n<r;n++)o[n]=t[n];return o}function zo(t,r){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")}function et(t,r){for(var n=0;n<r.length;n++){var o=r[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,St(o.key),o)}}function Io(t,r,n){return r&&et(t.prototype,r),n&&et(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function Lo(t,r){if(typeof r!="function"&&r!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(r&&r.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),r&&Ie(t,r)}function Ie(t,r){return Ie=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(o,a){return o.__proto__=a,o},Ie(t,r)}function Oo(t){var r=Ro();return function(){var o=fe(t),a;if(r){var l=fe(this).constructor;a=Reflect.construct(o,arguments,l)}else a=o.apply(this,arguments);return Bo(this,a)}}function Bo(t,r){if(r&&(H(r)==="object"||typeof r=="function"))return r;if(r!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return O(t)}function O(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function Ro(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function fe(t){return fe=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},fe(t)}function I(t,r,n){return r=St(r),r in t?Object.defineProperty(t,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[r]=n,t}function St(t){var r=Mo(t,"string");return H(r)==="symbol"?r:String(r)}function Mo(t,r){if(H(t)!=="object"||t===null)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var o=n.call(t,r||"default");if(H(o)!=="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(t)}var ce=function(t){Lo(n,t);var r=Oo(n);function n(){var o;zo(this,n);for(var a=arguments.length,l=new Array(a),i=0;i<a;i++)l[i]=arguments[i];return o=r.call.apply(r,[this].concat(l)),I(O(o),"state",{isAnimationFinished:!0,totalLength:0}),I(O(o),"generateSimpleStrokeDasharray",function(s,d){return"".concat(d,"px ").concat(s-d,"px")}),I(O(o),"getStrokeDasharray",function(s,d,p){var x=p.reduce(function(k,T){return k+T});if(!x)return o.generateSimpleStrokeDasharray(d,s);for(var g=Math.floor(s/x),y=s%x,b=d-s,j=[],f=0,v=0;f<p.length;v+=p[f],++f)if(v+p[f]>y){j=[].concat(G(p.slice(0,f)),[y-v]);break}var _=j.length%2===0?[0,b]:[b];return[].concat(G(n.repeat(p,g)),G(j),_).map(function(k){return"".concat(k,"px")}).join(", ")}),I(O(o),"id",Jt("recharts-line-")),I(O(o),"pathRef",function(s){o.mainCurve=s}),I(O(o),"handleAnimationEnd",function(){o.setState({isAnimationFinished:!0}),o.props.onAnimationEnd&&o.props.onAnimationEnd()}),I(O(o),"handleAnimationStart",function(){o.setState({isAnimationFinished:!1}),o.props.onAnimationStart&&o.props.onAnimationStart()}),o}return Io(n,[{key:"componentDidMount",value:function(){if(this.props.isAnimationActive){var a=this.getTotalLength();this.setState({totalLength:a})}}},{key:"componentDidUpdate",value:function(){if(this.props.isAnimationActive){var a=this.getTotalLength();a!==this.state.totalLength&&this.setState({totalLength:a})}}},{key:"getTotalLength",value:function(){var a=this.mainCurve;try{return a&&a.getTotalLength&&a.getTotalLength()||0}catch{return 0}}},{key:"renderErrorBar",value:function(a,l){if(this.props.isAnimationActive&&!this.state.isAnimationFinished)return null;var i=this.props,s=i.points,d=i.xAxis,p=i.yAxis,x=i.layout,g=i.children,y=er(g,tr);if(!y)return null;var b=function(v,_){return{x:v.x,y:v.y,value:v.value,errorVal:dt(v.payload,_)}},j={clipPath:a?"url(#clipPath-".concat(l,")"):null};return E.createElement(_e,j,y.map(function(f){return E.cloneElement(f,{key:"bar-".concat(f.props.dataKey),data:s,xAxis:d,yAxis:p,layout:x,dataPointFormatter:b})}))}},{key:"renderDots",value:function(a,l,i){var s=this.props.isAnimationActive;if(s&&!this.state.isAnimationFinished)return null;var d=this.props,p=d.dot,x=d.points,g=d.dataKey,y=ue(this.props),b=ue(p,!0),j=x.map(function(v,_){var k=P(P(P({key:"dot-".concat(_),r:3},y),b),{},{value:v.value,dataKey:g,cx:v.x,cy:v.y,index:_,payload:v.payload});return n.renderDotItem(p,k)}),f={clipPath:a?"url(#clipPath-".concat(l?"":"dots-").concat(i,")"):null};return E.createElement(_e,ne({className:"recharts-line-dots",key:"dots"},f),j)}},{key:"renderCurveStatically",value:function(a,l,i,s){var d=this.props,p=d.type,x=d.layout,g=d.connectNulls;d.ref;var y=ko(d,Ao),b=P(P(P({},ue(y,!0)),{},{fill:"none",className:"recharts-line-curve",clipPath:l?"url(#clipPath-".concat(i,")"):null,points:a},s),{},{type:p,layout:x,connectNulls:g});return E.createElement(rr,ne({},b,{pathRef:this.pathRef}))}},{key:"renderCurveWithAnimation",value:function(a,l){var i=this,s=this.props,d=s.points,p=s.strokeDasharray,x=s.isAnimationActive,g=s.animationBegin,y=s.animationDuration,b=s.animationEasing,j=s.animationId,f=s.animateNewValues,v=s.width,_=s.height,k=this.state,T=k.prevPoints,A=k.totalLength;return E.createElement(nr,{begin:g,duration:y,isActive:x,easing:b,from:{t:0},to:{t:1},key:"line-".concat(j),onAnimationEnd:this.handleAnimationEnd,onAnimationStart:this.handleAnimationStart},function(D){var C=D.t;if(T){var Q=T.length/d.length,F=d.map(function(N,Se){var J=Math.floor(Se*Q);if(T[J]){var ee=T[J],W=te(ee.x,N.x),_t=te(ee.y,N.y);return P(P({},N),{},{x:W(C),y:_t(C)})}if(f){var Tt=te(v*2,N.x),Ct=te(_/2,N.y);return P(P({},N),{},{x:Tt(C),y:Ct(C)})}return P(P({},N),{},{x:N.x,y:N.y})});return i.renderCurveStatically(F,a,l)}var de=te(0,A),X=de(C),Z;if(p){var pe="".concat(p).split(/[,\s]+/gim).map(function(N){return parseFloat(N)});Z=i.getStrokeDasharray(X,A,pe)}else Z=i.generateSimpleStrokeDasharray(A,X);return i.renderCurveStatically(d,a,l,{strokeDasharray:Z})})}},{key:"renderCurve",value:function(a,l){var i=this.props,s=i.points,d=i.isAnimationActive,p=this.state,x=p.prevPoints,g=p.totalLength;return d&&s&&s.length&&(!x&&g>0||!or(x,s))?this.renderCurveWithAnimation(a,l):this.renderCurveStatically(s,a,l)}},{key:"render",value:function(){var a,l=this.props,i=l.hide,s=l.dot,d=l.points,p=l.className,x=l.xAxis,g=l.yAxis,y=l.top,b=l.left,j=l.width,f=l.height,v=l.isAnimationActive,_=l.id;if(i||!d||!d.length)return null;var k=this.state.isAnimationFinished,T=d.length===1,A=Ge("recharts-line",p),D=x&&x.allowDataOverflow,C=g&&g.allowDataOverflow,Q=D||C,F=Pe(_)?this.id:_,de=(a=ue(s))!==null&&a!==void 0?a:{r:3,strokeWidth:2},X=de.r,Z=X===void 0?3:X,pe=de.strokeWidth,N=pe===void 0?2:pe,Se=sr(s)?s:{},J=Se.clipDot,ee=J===void 0?!0:J,W=Z*2+N;return E.createElement(_e,{className:A},D||C?E.createElement("defs",null,E.createElement("clipPath",{id:"clipPath-".concat(F)},E.createElement("rect",{x:D?b:b-j/2,y:C?y:y-f/2,width:D?j:j*2,height:C?f:f*2})),!ee&&E.createElement("clipPath",{id:"clipPath-dots-".concat(F)},E.createElement("rect",{x:b-W/2,y:y-W/2,width:j+W,height:f+W}))):null,!T&&this.renderCurve(Q,F),this.renderErrorBar(Q,F),(T||s)&&this.renderDots(Q,ee,F),(!v||k)&&ir.renderCallByParent(this.props,d))}}],[{key:"getDerivedStateFromProps",value:function(a,l){return a.animationId!==l.prevAnimationId?{prevAnimationId:a.animationId,curPoints:a.points,prevPoints:l.curPoints}:a.points!==l.curPoints?{curPoints:a.points}:null}},{key:"repeat",value:function(a,l){for(var i=a.length%2!==0?[].concat(G(a),[0]):a,s=[],d=0;d<l;++d)s=[].concat(G(s),G(i));return s}},{key:"renderDotItem",value:function(a,l){var i;if(E.isValidElement(a))i=E.cloneElement(a,l);else if(Nt(a))i=a(l);else{var s=Ge("recharts-line-dot",a?a.className:"");i=E.createElement(ct,ne({},l,{className:s}))}return i}}]),n}(h.PureComponent);I(ce,"displayName","Line");I(ce,"defaultProps",{xAxisId:0,yAxisId:0,connectNulls:!1,activeDot:!0,dot:!0,legendType:"line",stroke:"#3182bd",strokeWidth:1,fill:"#fff",points:[],isAnimationActive:!Zt.isSsr,animateNewValues:!0,animationBegin:0,animationDuration:1500,animationEasing:"ease",hide:!1,label:!1});I(ce,"getComposedData",function(t){var r=t.props,n=t.xAxis,o=t.yAxis,a=t.xAxisTicks,l=t.yAxisTicks,i=t.dataKey,s=t.bandSize,d=t.displayedData,p=t.offset,x=r.layout,g=d.map(function(y,b){var j=dt(y,i);return x==="horizontal"?{x:Ve({axis:n,ticks:a,bandSize:s,entry:y,index:b}),y:Pe(j)?null:o.scale(j),value:j,payload:y}:{x:Pe(j)?null:n.scale(j),y:Ve({axis:o,ticks:l,bandSize:s,entry:y,index:b}),value:j,payload:y}});return P({points:g,layout:x},p)});var Fo=ar({chartName:"LineChart",GraphicalChild:ce,axisComponents:[{axisType:"xAxis",AxisComp:pt},{axisType:"yAxis",AxisComp:ut}],formatAxisMap:lr});const Wo=({cx:t,cy:r})=>e.jsx(ct,{cx:t,cy:r,fill:c.blueTextAccent,r:2}),Go=({data:t,width:r=500,height:n=300})=>e.jsx(e.Fragment,{children:(t==null?void 0:t.length)&&e.jsxs(Fo,{data:t,height:n,id:"cy-sentiment-chart",margin:{bottom:5,left:-20,right:30,top:5},width:r,children:[e.jsx(cr,{stroke:c.lightBlue300,strokeDasharray:"5 5"}),e.jsx(pt,{dataKey:"date",interval:Math.floor(t.length/3),stroke:c.blueTextAccent}),e.jsx(ut,{domain:[0,10],stroke:c.blueTextAccent}),e.jsx(dr,{}),e.jsx(ce,{dataKey:"score",dot:e.jsx(Wo,{}),stroke:"#8884d8",type:"monotone"})]})}),Vo=()=>{const[t,r]=h.useState(void 0),[n]=oe(i=>[i.setBudget]),[o,a]=h.useState(!1),l=async()=>{a(!0),Ut(n).then(async i=>{r(i==null?void 0:i.data.filter(s=>s.date).map(s=>({date:Dt.unix(Number(String(s.date).split(".")[0])).format("MM/DD/YY"),score:s.sentiment_score}))),await rt(n)}).catch().finally(()=>{a(!1)})};return e.jsxs(Uo,{align:"flex-start",direction:"column",id:"cy-sentiment-chart-wrapper",justify:"flex-end",children:[e.jsx(S,{className:"title",children:"Sentiment chart"}),o&&e.jsx(Ir,{alignItems:"center",component:"div",flexGrow:1,p:4,spacing:2,width:"100%",children:e.jsx(Pt,{color:c.white})}),!(t!=null&&t.length)&&e.jsx(Yo,{className:"button",id:"cy-get-sentiments-btn",onClick:l,children:"Get top 100 sentiments"}),e.jsx(Go,{data:t})]})},Uo=m(u)`
  border-radius: 8px;
  box-shadow: 0px 5px 6px rgb(0 0 0 / 50%);
  padding: 16px;

  .title {
    margin-bottom: 16px;
    font-size: 20px;
  }
`,Yo=m(wt)`
  height: 48px;
`,Ho=600,Ko={about:e.jsx(So,{}),sentiment:e.jsx(Vo,{}),sources:e.jsx(fo,{}),"":null},qo=()=>{const[t,r]=q(n=>[n.secondarySidebarActiveTab,n.setSecondarySidebarActiveTab]);return e.jsx(pr,{direction:"left",in:!!t,mountOnEnter:!0,unmountOnExit:!0,children:e.jsxs(Qo,{id:"secondary-sidebar-wrapper",children:[e.jsx(Xo,{id:"cy-close-secondary-sidebar",onClick:()=>r(""),children:e.jsx(ft,{})}),Ko[t]]})})},Qo=m(u)(({theme:t})=>({background:c.BG1,height:"100vh",padding:"16px 20px",width:"100%",zIndex:30,display:"flex",[t.breakpoints.up("sm")]:{width:Ho}})),Xo=m(u).attrs({align:"center",justify:"center",p:5})`
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
`,Zo=m(Yt)`
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
`,Jo=m(u)`
  height: 100%;
  width: 100%;
  background-color: ${c.black};
`,es=m(u)`
  position: absolute;
  bottom: 8px;
  left: 8px;
  color: ${c.white};
  font-size: 12px;
  opacity: 0.5;
`,ts=h.lazy(()=>L(()=>import("./index-fd396adf.js"),["assets/index-fd396adf.js","assets/index-2a9d3beb.js","assets/index-3f17fe3b.css","assets/SourcesTableIcon-63e69450.js","assets/SettingsIcon-e9d79e17.js","assets/index-ee05bf73.js","assets/index.esm-7c2c6137.js","assets/react-toastify.esm-07017734.js","assets/react-toastify-b60658ac.css","assets/index-82f4c095.js"]).then(({MainToolbar:t})=>({default:t}))),rs=h.lazy(()=>L(()=>import("./index-cc2c834d.js"),["assets/index-cc2c834d.js","assets/index-2a9d3beb.js","assets/index-3f17fe3b.css","assets/EditIcon-e6b6a059.js","assets/react-toastify.esm-07017734.js","assets/react-toastify-b60658ac.css","assets/generateCategoricalChart-d45aba97.js","assets/Popover-dabdecb4.js","assets/useSlotProps-28bca2ab.js","assets/InfoIcon-fa5df30b.js","assets/index-69eec19b.js","assets/index.esm-7c2c6137.js","assets/PlusIcon-746d7811.js","assets/index-82f4c095.js","assets/NoFilterResultIcon-5bbc1568.js","assets/ChevronUpIcon-48a035e3.js","assets/index-889d74de.js","assets/index-bb30e745.js","assets/index-8d47b5aa.js","assets/index-5c9cd044.js","assets/Popper-449923bf.js","assets/CheckIcon-820446e3.js","assets/SettingsIcon-e9d79e17.js","assets/Stack-5524f850.js"]).then(({Universe:t})=>({default:t}))),ns=h.lazy(()=>L(()=>import("./index-e79d2eac.js"),["assets/index-e79d2eac.js","assets/index-2a9d3beb.js","assets/index-3f17fe3b.css","assets/react-toastify.esm-07017734.js","assets/react-toastify-b60658ac.css","assets/SoundIcon-05eadb42.js","assets/Select-cbc0a71e.js","assets/Popover-dabdecb4.js","assets/useSlotProps-28bca2ab.js","assets/ChevronUpIcon-48a035e3.js","assets/generateCategoricalChart-d45aba97.js","assets/InfoIcon-fa5df30b.js","assets/CheckIcon-820446e3.js","assets/index.esm-7c2c6137.js","assets/toastMessage-b961f51d.js","assets/SoundIcon-6125620a.css","assets/index-69eec19b.js","assets/Skeleton-5f3e0afb.js","assets/PlusIcon-746d7811.js","assets/index-82f4c095.js","assets/index-5c9cd044.js"]).then(({SideBar:t})=>({default:t}))),os=()=>{const[t,r]=oe(C=>[C.setBudget,C.setNodeCount]),[n,o]=h.useState(!1),{setSidebarOpen:a,currentSearch:l,setCurrentSearch:i,setRelevanceSelected:s,setTranscriptOpen:d}=q(C=>C),p=ur(C=>C.setTeachMeAnswer),{data:x,setData:g,fetchData:y,graphStyle:b,setSelectedNode:j,setCategoryFilter:f}=K(C=>C),v=Ht(),_=ie({mode:"onChange"}),k=_.handleSubmit(({search:C})=>{d(!1),j(null),s(!1),i(C),p(""),f(null)}),T=h.useCallback(async()=>{await y(t,{...l?{word:l}:{}}),a(!0),l?await rt(t):j(null)},[y,t,l,a,j]);h.useEffect(()=>{T()},[l,T]);const A=()=>{if(x){o(!0);const C=Xt(b,x.nodes);setTimeout(()=>{g(C),o(!1)},1e3)}};h.useEffect(()=>{A()},[b]);const D=h.useCallback(()=>{r("INCREMENT")},[r]);return h.useEffect(()=>{v&&(v.on("connect_error",C=>{console.error("Socket connection error:",C)}),v.on("newnode",D))},[v,D]),h.useEffect(()=>()=>{v&&v.disconnect()},[v]),e.jsxs(e.Fragment,{children:[e.jsx(Kt,{}),e.jsx(tn,{}),e.jsx(qt,{hidden:!zt}),e.jsx(h.Suspense,{fallback:e.jsx("div",{children:"Loading..."}),children:e.jsxs(Jo,{direction:"row",children:[e.jsx(hr,{children:e.jsxs(ae,{..._,children:[e.jsx(ts,{}),e.jsx(ns,{onSubmit:k}),e.jsx(rs,{}),n&&e.jsx(Wr,{fullSize:!1}),e.jsx(Mr,{}),e.jsx(qo,{}),e.jsx(Zr,{}),e.jsxs(es,{children:["v",Qt]}),e.jsx(nt,{})]})}),e.jsx(Xr,{}),e.jsx(Zo,{}),e.jsx(sn,{})]})})]})},ws=Object.freeze(Object.defineProperty({__proto__:null,App:os},Symbol.toStringTag,{value:"Module"}));export{Mr as O,Wr as P,fo as S,ws as i};
