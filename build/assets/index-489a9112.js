import{j as e,F as u,T as S,s as m,c,r as h,_ as L,m as $t,d as Et,a as Re,Y as Me,R as Fe,u as se,l as nt,b as Nt,e as E,f as Pt,i as Dt,P as zt,h as It,g as st,k as Lt}from"./index-912a006b.js";import{A as Ot,u as K,a as ot,b as q,c as R,C as $,S as Bt,d as Rt,B as M,e as Mt,f as it,g as at,I as oe,p as Ft,h as U,i as lt,j as Wt,k as ie,F as ae,l as Gt,m as ct,n as Vt,s as dt,o as Ut,q as Yt,r as Ht,Q as Kt,t as qt,G as Qt,L as Xt,v as Zt,w as Jt}from"./react-toastify.esm-5fb76b52.js";import{f as We,G as er,u as tr,c as Ge,D as pt,a as rr,E as nr,L as _e,b as ue,C as sr,A as or,i as te,d as ir,e as Pe,g as ar,h as lr,j as ut,k as Ve,l as cr,X as ht,Y as xt,m as dr,n as pr,T as ur,S as hr,o as xr,p as fr}from"./generateCategoricalChart-f438c338.js";import{M as ft,a as mt,b as mr,c as gr,d as gt,e as yr}from"./index.esm-b4803265.js";import{T as jr,a as le,b as br,F as De,M as me,C as yt,N as vr,c as wr,D as Le}from"./NoFilterResultIcon-60e15656.js";import{s as Y,T as jt,A as Oe,u as z,I as Sr,E as _r,D as Tr,a as Ue,b as bt,Q as vt,V as Cr,S as Ar}from"./index-4eee61ea.js";import{S as ge,C as kr,a as $r}from"./ChevronUpIcon-9094a078.js";import{P as ye,I as je,a as wt,F as Er}from"./Popover-936d9635.js";import{B as Nr,T as re}from"./index-65abfc9f.js";import{u as B}from"./index-c8b55d33.js";import{B as Be}from"./index-a8906cb4.js";import{P as St}from"./Popper-3c65353d.js";import{C as Pr}from"./CheckIcon-969d5faf.js";import{S as Dr}from"./SettingsIcon-a4710d20.js";import{P as zr}from"./PlusIcon-9c063c4b.js";import{T as Ir,a as Lr,B as _t}from"./index-0156e352.js";import{S as Or}from"./Stack-d7933113.js";const Br=({twitterHandle:t})=>e.jsx(e.Fragment,{children:e.jsx(u,{direction:"row",children:e.jsx(u,{align:"flex-start",pb:12,children:e.jsxs(S,{children:["Tweet by @",t]})})})}),Rr=m(u)(({theme:t})=>({position:"absolute",top:"65px",right:"55px",width:"300px",pointerEvents:"none",background:c.dashboardHeader,boxShadow:"0px 1px 6px rgba(0, 0, 0, 0.1)",color:c.primaryText1,zIndex:100,transition:"opacity 0.6s",padding:t.spacing(2,3),[t.breakpoints.down("sm")]:{padding:t.spacing(1,1.5)}})),Mr=m(u)`
  width: 22.5%;
`,Fr=({node:t})=>{if(!t)return null;const{node_type:r,show_title:n,episode_title:s,description:a,label:l,text:i,type:o,twitter_handle:d}=t,p=t.guests;let x=!1,g=!1;p&&(p.length&&p[0]!==null&&(x=!0),typeof p[0]=="object"&&(g=!0));let y=t.image_url;if(o==="twitter_space"&&(y="twitter_placeholder.png"),y==null)switch(r){case"guest":y="person_placeholder2.png";break;default:y="noimage.jpeg"}return r==="topic"?null:e.jsx(Rr,{borderRadius:8,px:24,py:16,children:r==="tweet"?e.jsx(Br,{twitterHandle:d}):e.jsxs(e.Fragment,{children:[e.jsxs(u,{direction:"row",children:[e.jsx(Mr,{}),e.jsx(u,{align:"flex-start",pb:12,children:e.jsx(S,{children:r==null?void 0:r.toUpperCase()})})]}),e.jsxs(u,{direction:"row",children:[e.jsx(u,{pr:12,children:e.jsx(Ot,{src:y,type:"person"})}),e.jsxs("div",{children:[o==="guest"?e.jsxs(u,{direction:"column",children:[e.jsx(S,{children:l}),i&&e.jsx(u,{pt:4,children:e.jsxs(S,{color:"primaryText1",kind:"tiny",children:["@",i]})})]}):e.jsx(S,{color:"primaryText1",kind:"tiny",children:n}),e.jsxs(u,{pt:4,children:[r==="clip"||r==="episode"&&e.jsx(S,{color:"primaryText1",children:"Episode"}),r==="clip"?e.jsx(S,{as:"div",kind:"regularBold",children:We(a)}):e.jsx(S,{color:"primaryText1",kind:"tiny",children:s})]}),e.jsxs(u,{pt:12,children:[r==="clip"&&e.jsx(S,{color:"primaryText1",children:"Episode"}),e.jsx(S,{color:"primaryText1",kind:"tiny",children:r==="clip"?s:We(a)})]}),x&&e.jsxs(u,{pt:12,children:[e.jsx(S,{color:"primaryText1",children:"People"}),e.jsx(u,{pt:4,children:e.jsx(S,{color:"primaryText1",kind:"tiny",children:g?p.map(b=>b.name?b.name:`@${b.twitter_handle}`).join(", "):p==null?void 0:p.join(", ")})})]})]})]})]})})},Wr=()=>{const[t]=K(r=>[r.hoveredNode]);return e.jsxs(Gr,{children:[t&&e.jsx("div",{id:"tooltip-portal",children:e.jsx(Fr,{node:t})}),e.jsx(ot,{})]})},Gr=m("div")(({theme:t})=>({position:"absolute",zIndex:1,top:0,left:0,userSelect:"none",pointerEvents:"none",display:"flex",justifyContent:"flex-end",alignItems:"flex-start",height:"100%",width:"100%",padding:"16px",[t.breakpoints.down("sm")]:{top:50}})),Vr=({fullSize:t=!0})=>{const r=q(n=>n.sidebarIsOpen);return e.jsx(Ur,{align:"center",className:R({"sidebar-is-open":r&&!t}),justify:"center",children:e.jsx($,{color:c.SECONDARY_BLUE,size:64})})},Ur=m(u)`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  background-color: ${c.black};
  z-index: 1;
`,Yr=h.lazy(()=>L(()=>import("./index-8ac1a3db.js"),["assets/index-8ac1a3db.js","assets/index-912a006b.js","assets/index-3f17fe3b.css","assets/index-a8906cb4.js","assets/index-c8b55d33.js","assets/react-toastify.esm-5fb76b52.js","assets/react-toastify-b60658ac.css","assets/index-0156e352.js","assets/useSlotProps-4d777221.js","assets/index-65abfc9f.js","assets/index.esm-b4803265.js","assets/InfoIcon-600b59a0.js"]).then(({SettingsModal:t})=>({default:t}))),Hr=h.lazy(()=>L(()=>import("./index-9683dbfc.js"),["assets/index-9683dbfc.js","assets/index-912a006b.js","assets/index-3f17fe3b.css","assets/react-toastify.esm-5fb76b52.js","assets/react-toastify-b60658ac.css","assets/index-a8906cb4.js","assets/index-c8b55d33.js","assets/index-acbd86c1.js","assets/index.esm-b4803265.js","assets/CheckIcon-969d5faf.js","assets/index-65abfc9f.js","assets/InfoIcon-600b59a0.js"]).then(({AddContentModal:t})=>({default:t}))),Kr=h.lazy(()=>L(()=>import("./index-515a70f8.js"),["assets/index-515a70f8.js","assets/index-912a006b.js","assets/index-3f17fe3b.css","assets/react-toastify.esm-5fb76b52.js","assets/react-toastify-b60658ac.css","assets/index-a8906cb4.js","assets/index-c8b55d33.js","assets/index-acbd86c1.js","assets/index.esm-b4803265.js","assets/CheckIcon-969d5faf.js","assets/index-65abfc9f.js","assets/InfoIcon-600b59a0.js","assets/index-42c6f895.js","assets/index-6d3674a4.js","assets/Popover-936d9635.js","assets/useSlotProps-4d777221.js","assets/Select-c84953f9.js","assets/Stack-d7933113.js","assets/Popper-3c65353d.js","assets/constants-84edb5fc.js"]).then(({AddItemModal:t})=>({default:t}))),qr=h.lazy(()=>L(()=>import("./index-a5990a25.js"),["assets/index-a5990a25.js","assets/index-912a006b.js","assets/index-3f17fe3b.css","assets/index-a8906cb4.js","assets/index-c8b55d33.js","assets/react-toastify.esm-5fb76b52.js","assets/react-toastify-b60658ac.css","assets/generateCategoricalChart-f438c338.js","assets/Popover-936d9635.js","assets/useSlotProps-4d777221.js","assets/InfoIcon-600b59a0.js","assets/index.esm-b4803265.js","assets/NoFilterResultIcon-60e15656.js","assets/ChevronUpIcon-9094a078.js","assets/index-0156e352.js","assets/index-4eee61ea.js","assets/index-65abfc9f.js","assets/Popper-3c65353d.js","assets/CheckIcon-969d5faf.js","assets/SettingsIcon-a4710d20.js","assets/PlusIcon-9c063c4b.js","assets/Stack-d7933113.js"]).then(({SourcesTableModal:t})=>({default:t}))),Qr=h.lazy(()=>L(()=>import("./index-23635aa3.js"),["assets/index-23635aa3.js","assets/index-912a006b.js","assets/index-3f17fe3b.css","assets/index-a8906cb4.js","assets/index-c8b55d33.js","assets/react-toastify.esm-5fb76b52.js","assets/react-toastify-b60658ac.css","assets/index-4eee61ea.js","assets/index-65abfc9f.js","assets/index.esm-b4803265.js","assets/InfoIcon-600b59a0.js","assets/Skeleton-6fe7015a.js"]).then(({EditNodeNameModal:t})=>({default:t}))),Xr=h.lazy(()=>L(()=>import("./index-fd44f2fe.js"),["assets/index-fd44f2fe.js","assets/index-912a006b.js","assets/index-3f17fe3b.css","assets/index-a8906cb4.js","assets/index-c8b55d33.js","assets/react-toastify.esm-5fb76b52.js","assets/react-toastify-b60658ac.css","assets/toastMessage-075abc72.js","assets/index.esm-b4803265.js","assets/Skeleton-6fe7015a.js"]).then(({RemoveNodeModal:t})=>({default:t}))),Zr=h.lazy(()=>L(()=>import("./index-9f67b5d3.js"),["assets/index-9f67b5d3.js","assets/index-912a006b.js","assets/index-3f17fe3b.css","assets/index-a8906cb4.js","assets/index-c8b55d33.js","assets/react-toastify.esm-5fb76b52.js","assets/react-toastify-b60658ac.css","assets/toastMessage-075abc72.js","assets/index.esm-b4803265.js","assets/index-42c6f895.js","assets/index-6d3674a4.js","assets/Popover-936d9635.js","assets/useSlotProps-4d777221.js","assets/Select-c84953f9.js","assets/Stack-d7933113.js","assets/Popper-3c65353d.js","assets/constants-84edb5fc.js","assets/index-4eee61ea.js"]).then(({AddNodeEdgeModal:t})=>({default:t}))),Jr=()=>e.jsxs(e.Fragment,{children:[e.jsx(Kr,{}),e.jsx(Hr,{}),e.jsx(Yr,{}),e.jsx(Qr,{}),e.jsx(Xr,{}),e.jsx(qr,{}),e.jsx(Zr,{})]}),en=()=>{const t=q(r=>r.appMetaData);return e.jsxs(tn,{children:[e.jsxs(rn,{children:[e.jsx(e.Fragment,{children:t.title&&e.jsx(S,{className:"title",color:"white",children:t.title})}),e.jsx(S,{className:"subtitle",children:" Second Brain"})]}),e.jsx(Bt,{})]})},tn=m(u).attrs({align:"center",direction:"row",grow:1,justify:"flex-start"})`
  height: 64px;
  position: absolute;
  top: 0px;
  left: 64px;
  right: 32px;
  transition: opacity 1s;
  z-index: 99;
  padding: 20px 23px;
`,rn=m.div`
  ${$t.smallOnly`
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
`,nn=()=>{const[t,r]=h.useState(!0),n=Rt();h.useEffect(()=>{r(!0)},[n]);const s=()=>{r(!1)};return n&&t?e.jsxs(sn,{align:"center",direction:"column",justify:"center",onClick:s,children:[e.jsx("img",{alt:"screen",src:"jamboard_kiosk.png"}),e.jsxs(u,{align:"center",direction:"column",justify:"center",children:[e.jsx(Te,{children:"Second Brain is currently"}),e.jsx(Te,{style:{fontWeight:600},children:"optimized for Desktop."}),e.jsx(Te,{children:"Mobile support coming soon."})]}),e.jsx(M,{color:"secondary",onClick:s,variant:"contained",children:"Got It"})]}):null},sn=m(u)`
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
`,on={},an=h.createContext(on),ln=()=>{const[t,r]=h.useState(!1),n=h.useMemo(()=>({isShow:t,setIsShow:r}),[t]);return e.jsx(an.Provider,{value:n})},w=m(jr)`
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
`,ve=m(br)`
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
`,cn=({data:t})=>{const r=K(i=>i.setQueuedSources),[n,s]=h.useState(""),a=async i=>{if(t!=null&&t.length)try{const o=await Et.enable();await Mt(i,o.pubkey),r(t.filter(d=>d.ref_id!==i))}catch(o){console.warn(o)}},l=async i=>{if(!(!i||!(t!=null&&t.length))){s(i);try{await it(i),r(t==null?void 0:t.filter(o=>o.ref_id!==i))}catch(o){console.warn(o)}finally{s("")}}};return t!=null&&t.length?e.jsxs(me,{component:"table",children:[e.jsx(ve,{children:e.jsxs(le,{component:"tr",children:[e.jsx(w,{className:"empty"}),e.jsx(w,{children:"Type"}),e.jsx(w,{children:"Source"}),e.jsx(w,{}),e.jsx(w,{className:"empty"})]})}),(t==null?void 0:t.length)&&e.jsx("tbody",{children:t==null?void 0:t.map(i=>e.jsxs(be,{children:[e.jsx(w,{className:"empty"}),e.jsx(w,{children:Y[i.source_type]}),e.jsx(w,{width:"268px",children:i.source_type==="twitter_handle"?e.jsxs(He,{href:`${jt}/${i.source}?open=system`,target:"_blank",children:["@",i.source]}):e.jsx(He,{href:`${i.source}?open=system`,target:"_blank",children:i.source})}),e.jsx(w,{className:"cell-center",children:e.jsxs(u,{direction:"row",justify:"space-between",children:[e.jsx("div",{className:"approve-wrapper",children:e.jsx(Ye,{className:"centered",onClick:()=>a(i.ref_id),children:e.jsx(ft,{color:c.primaryGreen,fontSize:24})})}),e.jsx("div",{className:"delete-wrapper",children:n===i.ref_id?e.jsx($,{color:c.white,size:16}):e.jsx(yt,{message:"Are you sure ?",onConfirm:()=>l(i.ref_id),children:e.jsx(Ye,{className:"centered",children:e.jsx(mt,{color:c.primaryRed,fontSize:24})})})})]})}),e.jsx(w,{className:"empty"})]},i.source))})]}):e.jsxs(u,{children:[e.jsx(S,{children:"There is not any results for selected filters"}),e.jsx(De,{})]})},Ye=m(u)`
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
`,He=m.a`
  color: ${c.white};
  text-decoration: underline;
  &:visited {
    color: ${c.white};
  }
  &:hover {
    cursor: pointer;
  }
`,dn=()=>{const[t,r]=h.useState(!0),[n,s]=h.useState(""),[a,l]=K(d=>[d.queuedSources,d.setQueuedSources]);h.useEffect(()=>{(async()=>{r(!0);try{const p=await at({approved:"False"});l(p.data)}catch(p){console.warn(p)}finally{r(!1)}})()},[l]);const i=d=>{s(n===d||!d?"":d)},o=a==null?void 0:a.filter(d=>!n||d.source_type===n);return e.jsxs(pn,{align:"stretch",direction:"column",justify:"flex-end",children:[e.jsxs(we,{align:"flex-start",justify:"space-between",children:[e.jsx(S,{className:"title",children:"Queued Sources"}),e.jsx(S,{className:"subtitle",children:"This is a queue of pending sources waiting for approval or denial from graph users. If you think a source will provide good content for the graph, you can pay to approve it. Think of this as an investment: you pay to add it to the source table, and if the content is popular you will earn from it. If content is not relevant to the graph, you should deny it."})]}),e.jsxs(u,{className:"filters",direction:"row",pb:16,px:36,children:[e.jsx(xe,{className:R({selected:!n}),onClick:()=>i(""),size:"small",children:"All"}),Object.keys(Y).map(d=>e.jsx(xe,{className:R({selected:d===n}),onClick:()=>i(d),size:"small",children:Y[d]},d))]}),e.jsx(un,{align:"center",justify:t?"center":"flex-start",children:t?e.jsx($,{color:c.white}):e.jsx(cn,{data:o})})]})},pn=m(u)`
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
`,un=m(u)`
  min-height: 0;
  overflow: auto;
  flex: 1;
  width: 100%;
`,hn=({onSearch:t,placeholder:r,activeIcon:n,loadingIcon:s,defaultIcon:a,...l})=>{const[i,o]=h.useState(""),[d,p]=h.useState(!1),x=()=>{o(""),t(""),p(!1)},g=j=>{!j.target.value&&x(),o(j.target.value)},y=j=>{const{value:f}=j.currentTarget;o(f),!d&&(p(!0),setTimeout(()=>{t(f),f||x(),p(!1)},1e3),f||x())},b=()=>d?e.jsx(Ke,{children:e.jsx(Ce,{type:"button",children:s})}):e.jsx(Ke,{children:i?e.jsx(Ce,{onClick:x,type:"button",children:n}):e.jsx(Ce,{type:"button",children:a})});return e.jsxs(xn,{children:[e.jsx(fn,{autoComplete:"off",autoCorrect:"off",inputProps:{"aria-label":"search sources"},onChange:g,onKeyDown:j=>{j.key==="Enter"&&y(j)},placeholder:r,value:i,...l}),b()]})},Ke=m(u)`
  top: -50%;
  right: -3%;
  z-index: 3;
  position: absolute;
  transform: translate(-50%, 50%);
`,Ce=m(oe)`
  font-size: 24px;
`,xn=m(ye)`
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
`,fn=m(je)`
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
`,mn=({data:t,canEdit:r=!1})=>{const n=K(o=>o.setSources),[s,a]=h.useState(""),l=async(o,d)=>{if(t!=null&&t.length)try{await Ft(o,d);const p=t==null?void 0:t.findIndex(g=>g.ref_id===o),x=[...t];x[p]={...x[p],source:d.source},n(x)}catch(p){console.warn(p)}},i=async o=>{if(!(!o||!(t!=null&&t.length))){a(o);try{await it(o),n(t==null?void 0:t.filter(d=>d.ref_id!==o))}catch(d){console.warn(d)}finally{a("")}}};return t!=null&&t.length?e.jsxs(me,{"aria-label":"a dense table",component:"table",id:"sources-table",size:"small",children:[e.jsx(ve,{children:e.jsxs(le,{component:"tr",children:[e.jsx(w,{className:"empty"}),e.jsx(w,{children:"Type"}),e.jsx(w,{align:"left",children:"Source"}),r&&e.jsx(w,{align:"left"}),e.jsx(w,{className:"empty"})]})}),e.jsx(wr,{component:"tbody",children:t==null?void 0:t.map(o=>e.jsxs(be,{children:[e.jsx(w,{className:"empty"}),e.jsx(w,{align:"left",children:Y[o.source_type]}),e.jsx(w,{align:"left",children:e.jsx(gn,{condition:r,wrapper:d=>e.jsx(yn,{id:o.ref_id,onSave:p=>l(o.ref_id,{source:p,source_type:o.source_type}),value:o.source,children:d}),children:o.source_type===Re||o.source_type===Me||o.source_type===Fe?e.jsxs(e.Fragment,{children:[o.source_type===Re&&e.jsxs(Ae,{href:`${jt}/${o.source}`,target:"_blank",children:["@",o.source]}),o.source_type===Me&&e.jsx(Ae,{href:`${o.source}${o.source.includes("?")?"&":"?"}open=system`,target:"_blank",children:o.source}),o.source_type===Fe&&e.jsx(Ae,{href:o.source,target:"_blank",children:o.source})]}):e.jsx("div",{children:o.source})})}),r&&e.jsx(w,{align:"left",children:e.jsx("div",{className:"delete-wrapper",id:`delete-${o.source}`,children:s===o.ref_id?e.jsx($,{color:c.white}):e.jsx(yt,{message:"Are you sure ?",onConfirm:()=>i(o.ref_id),children:e.jsx(V,{className:"centered",children:e.jsx(mr,{})})})})}),e.jsx(w,{className:"empty"})]},o.source))})]}):e.jsxs(bn,{children:[e.jsx(vr,{}),e.jsx(S,{className:"text",children:"There is not any results for selected filters"})]})};function gn({condition:t,wrapper:r,children:n}){return t?r(n):n}const yn=({value:t,onSave:r,id:n,children:s})=>{const[a,l]=h.useState(!1),[i,o]=h.useState(t),[d,p]=h.useState(!1),x=async()=>{if(n){p(!0);try{await r(i),l(!1)}catch(g){console.warn(g)}finally{p(!1)}}};return e.jsx("div",{children:a?e.jsxs(jn,{direction:"row",children:[e.jsx(Nr,{className:"editable-cell__input",name:"cell-input",onChange:g=>o(g),value:i}),e.jsx(V,{align:"center",justify:"center",children:d?e.jsx($,{}):e.jsx(gr,{onClick:x})}),e.jsx(V,{align:"center",className:"secondary",justify:"center",onClick:()=>l(!1),children:e.jsx(gt,{})})]}):e.jsxs(vn,{direction:"row",children:[s,e.jsx(V,{onClick:()=>l(!0),children:e.jsx(yr,{size:20})})]})})},jn=m(u)`
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
`,bn=m(u)`
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
`,vn=m(u)`
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
`,wn=()=>{const[t,r]=h.useState(!0),[n,s]=h.useState(""),[a,l]=K(g=>[g.sources,g.setSources]),[i]=se(g=>[g.isAdmin]),[o,d]=h.useState("");h.useEffect(()=>{(async()=>{r(!0);try{const y=await at();l(y.data)}catch(y){console.warn(y)}finally{r(!1)}})()},[l]);const p=g=>{s(n===g||!g?"":g)},x=h.useMemo(()=>a==null?void 0:a.filter(g=>(!n||g.source_type===n)&&(g.source.toLowerCase().startsWith(o.toLowerCase())||g.source.toLowerCase().includes(o.toLowerCase()))),[o,n,a]);return e.jsxs(Sn,{align:"stretch",direction:"column",justify:"flex-end",children:[e.jsx(we,{align:"center",direction:"row",justify:"space-between",children:e.jsx(S,{className:"title",children:"Sources for this Graph"})}),e.jsx(Tn,{children:e.jsx(hn,{activeIcon:e.jsx(U,{}),defaultIcon:e.jsx(ge,{}),loadingIcon:e.jsx($,{color:c.PRIMARY_BLUE,size:24}),onSearch:d,placeholder:"Find Topic"})}),e.jsxs(u,{className:"filters",direction:"row",pb:16,px:36,children:[e.jsx(xe,{className:R({selected:!n}),onClick:()=>p(""),size:"small",children:"All"}),Object.keys(Y).map(g=>e.jsx(xe,{className:R({selected:g===n}),onClick:()=>p(g),size:"small",children:Y[g]},g))]}),e.jsx(_n,{align:"center",justify:t?"center":"flex-start",children:t?e.jsx($,{color:c.white}):e.jsx(mn,{canEdit:i,data:x})})]})},Sn=m(u)`
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
`,_n=m(u)`
  min-height: 0;
  overflow: auto;
  flex: 1;
  width: 100%;
`,Tn=m(u)`
  margin: 0 0 16px 36px;
`,Cn=({onSelect:t,selectedTopic:r})=>{const[n,s]=h.useState(!1),[a,l]=h.useState(""),[i,o]=h.useState([]),[d,p]=h.useState(!1),x=h.useRef(null);h.useEffect(()=>()=>o([]),[o]);const g=async f=>{const v={muted:"False",sort_by:Oe,search:f,skip:"0",limit:"1000"};p(!0);try{const _=await lt(v);o(_.data)}catch{o([])}finally{p(!1)}},y=h.useMemo(()=>nt.debounce(g,300),[]),b=f=>{t(f)},j=f=>{if(l(f),!f){o([]);return}f.length>2&&y(f)};return r?e.jsxs($n,{children:[e.jsx("div",{className:"value",children:r.topic}),e.jsx(u,{className:"icon",onClick:()=>t(null),children:e.jsx(U,{})})]}):e.jsxs(e.Fragment,{children:[e.jsxs(ye,{ref:x,component:"form",onSubmit:f=>f.preventDefault(),sx:{p:"2px 4px",display:"flex",alignItems:"center",width:200},children:[e.jsx(je,{inputProps:{"aria-label":"search topic"},onChange:f=>j(f.target.value),onFocus:()=>s(!0),placeholder:"Search",size:"small",sx:{ml:1,flex:1},value:a}),a&&e.jsxs(e.Fragment,{children:[e.jsx(qe,{"aria-label":"search",onClick:()=>j(""),type:"button",children:e.jsx(U,{})}),e.jsx(Le,{orientation:"vertical",sx:{height:28,m:.5}})]}),e.jsx(qe,{"aria-label":"search",type:"button",children:d?e.jsx($,{color:c.white,size:24}):e.jsx(ge,{})})]}),x.current&&i.length?e.jsx(kn,{anchorEl:x.current,open:n,placement:"bottom",children:e.jsx(e.Fragment,{children:i.map(f=>e.jsx(An,{className:R({active:r===f.ref_id}),onClick:()=>b(f),children:f.topic},"option"))})}):null]})},An=m(u).attrs({direction:"row",align:"center"})`
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
`,kn=m(St)`
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
`,$n=m(u).attrs({direction:"row",justify:"flex-start",align:"center"})`
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
`,qe=m(oe)`
  font-size: 24px;
`,En=({selectedType:t,setSelectedType:r})=>{const[n,s]=h.useState(null),[a,l]=h.useState([]);h.useEffect(()=>{(async()=>{try{const{data:x}=await Wt();l(x.edge_types)}catch(x){console.warn(x)}})()},[l]);const i=p=>{s(p.currentTarget)},o=()=>{s(null)},d=p=>{r(p),o()};return e.jsxs("div",{children:[e.jsxs(Nn,{onClick:i,children:[e.jsx("div",{className:"text",children:"Type"}),e.jsx("div",{className:"value",children:t}),e.jsx("div",{className:"icon",children:n?e.jsx($r,{}):e.jsx(kr,{})})]}),e.jsx(Dn,{anchorEl:n,anchorOrigin:{vertical:"bottom",horizontal:"left"},anchorPosition:{top:62,left:0},onClose:o,open:!!n,transformOrigin:{vertical:"top",horizontal:"left"},children:e.jsx(Er,{children:a.map(p=>e.jsxs(Pn,{className:R({active:p===t}),onClick:()=>d(p),children:[e.jsx("span",{className:"icon",children:p===t?e.jsx(Pr,{}):null}),e.jsx("span",{children:p})]},p))})})]})},Nn=m(u).attrs({direction:"row",align:"center"})`
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
`,Pn=m(u).attrs({direction:"row",align:"center"})`
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
`,Dn=m(wt)`
  .MuiPaper-root {
    background: ${c.BUTTON1};
    min-width: 149px;
    padding: 16px;
    color: ${c.GRAY3};
    box-shadow: 0px 1px 6px 0px rgba(0, 0, 0, 0.2);
    border-radius: 6px;
  }
`,zn=({from:t,onSelect:r,selectedTopic:n,selectedType:s,setSelectedType:a})=>e.jsxs(u,{children:[e.jsx(u,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(u,{align:"center",direction:"row",children:e.jsx(In,{children:"Add edge"})})}),e.jsxs(Ln,{mb:12,children:[e.jsxs(ke,{children:[e.jsx("div",{className:"label",children:"From"}),e.jsx("div",{children:t})]}),e.jsx(ke,{children:e.jsx(En,{selectedType:s,setSelectedType:a})}),e.jsxs(ke,{children:[e.jsx("div",{className:"label",children:"To"}),e.jsx(Cn,{onSelect:r,selectedTopic:n})]})]})]}),In=m(S)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,Ln=m(u).attrs({align:"flex-start",direction:"row",justify:"flex-start"})`
  color: ${c.white};
  .label {
    margin-bottom: 8px;
    font-weight: 500;
    font-size: 14px;
    color: ${c.GRAY3};
  }
`,ke=m(u)`
  flex: 1 1 100%;
`,On=({topic:t,onClose:r})=>{const{close:n}=B("addEdge"),[s]=z(j=>[j.data]),a=ie({mode:"onChange"}),[l,i]=h.useState(!1),[o,d]=h.useState(null),[p,x]=h.useState(""),g=()=>{r(),n()},y=async()=>{if(!(!o||!s)){i(!0);try{await Gt({from:t.ref_id,to:o==null?void 0:o.ref_id,relationship:p});const{ref_id:j}=t,{ref_id:f}=o;if(s){const v={...s};v[j]={...v[j],edgeList:[...v[j].edgeList,p]},v[f]&&(v[f]={...v[f],edgeList:[...v[f].edgeList,p]}),z.setState({data:v})}g()}catch(j){console.warn(j)}finally{i(!1)}}},b=l||!o||!p;return e.jsx(Be,{id:"addEdge",kind:"large",onClose:g,preventOutsideClose:!0,children:e.jsxs(ae,{...a,children:[e.jsx(zn,{from:t.topic,onSelect:d,selectedTopic:o,selectedType:p,setSelectedType:x}),e.jsxs(M,{color:"secondary",disabled:b,onClick:y,size:"large",variant:"contained",children:["Confirm",l&&e.jsx($,{color:c.BLUE_PRESS_STATE,size:10})]})]})})},Bn=()=>e.jsxs(u,{children:[e.jsx(u,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(u,{align:"center",direction:"row",children:e.jsx(Rn,{children:"Edit topic"})})}),e.jsx(u,{mb:12,children:e.jsx(re,{id:"cy-topic",maxLength:50,name:"topic",placeholder:"Add your topic",rules:{...Nt}})})]}),Rn=m(S)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,Mn=({topic:t,onClose:r})=>{const{close:n}=B("editTopic"),[s]=z(b=>[b.data]),a=ie({mode:"onChange"}),{watch:l,setValue:i,reset:o}=a,[d,p]=h.useState(!1);h.useEffect(()=>(t&&i("topic",t==null?void 0:t.topic),()=>{o()}),[t,i,o]);const x=l("topic"),g=()=>{r(),n()},y=async()=>{p(!0);try{if(await ct((t==null?void 0:t.ref_id)||"",{topic:x.trim()}),s){const b={...s};b[t==null?void 0:t.ref_id].topic=x.trim(),z.setState({data:b})}g()}catch(b){console.warn(b)}finally{p(!1)}};return e.jsx(Be,{id:"editTopic",kind:"regular",onClose:g,preventOutsideClose:!0,children:e.jsxs(ae,{...a,children:[e.jsx(Bn,{}),e.jsxs(M,{color:"secondary",disabled:d,onClick:y,size:"large",variant:"contained",children:["Save",d&&e.jsx($,{color:c.BLUE_PRESS_STATE,size:10})]})]})})},Fn=({onSelect:t,selectedTopic:r})=>{const[n,s]=h.useState(!1),[a,l]=h.useState(""),[i,o]=h.useState([]),[d,p]=h.useState(!1),x=h.useRef(null);h.useEffect(()=>()=>o([]),[o]);const g=async f=>{const v={muted:"False",sort_by:Oe,search:f,skip:"0",limit:"1000"};p(!0);try{const _=await lt(v);o(_.data)}catch{o([])}finally{p(!1)}},y=h.useMemo(()=>nt.debounce(g,300),[]),b=f=>{t(f)},j=f=>{if(l(f),!f){o([]);return}f.length>2&&y(f)};return r?e.jsxs(Vn,{children:[e.jsx("div",{className:"value",children:r.topic}),e.jsx(u,{className:"icon",onClick:()=>t(null),children:e.jsx(U,{})})]}):e.jsxs(e.Fragment,{children:[e.jsxs(ye,{ref:x,component:"form",onSubmit:f=>f.preventDefault(),sx:{p:"2px 4px",display:"flex",alignItems:"center",width:200},children:[e.jsx(je,{inputProps:{"aria-label":"search topic"},onChange:f=>j(f.target.value),onFocus:()=>s(!0),placeholder:"Search",size:"small",sx:{ml:1,flex:1},value:a}),a&&e.jsxs(e.Fragment,{children:[e.jsx(Qe,{"aria-label":"search",onClick:()=>j(""),type:"button",children:e.jsx(U,{})}),e.jsx(Le,{orientation:"vertical",sx:{height:28,m:.5}})]}),e.jsx(Qe,{"aria-label":"search",type:"button",children:d?e.jsx($,{color:c.white,size:24}):e.jsx(ge,{})})]}),x.current&&i.length?e.jsx(Gn,{anchorEl:x.current,open:n,placement:"bottom",children:e.jsx(e.Fragment,{children:i.map(f=>e.jsx(Wn,{className:R({active:r===f.ref_id}),onClick:()=>b(f),children:f.topic},"option"))})}):null]})},Wn=m(u).attrs({direction:"row",align:"center"})`
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
`,Gn=m(St)`
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
`,Vn=m(u).attrs({direction:"row",justify:"flex-start",align:"center"})`
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
`,Qe=m(oe)`
  font-size: 24px;
`,Un=({from:t,onSelect:r,selectedTopic:n})=>e.jsxs(u,{children:[e.jsx(u,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(u,{align:"center",direction:"row",children:e.jsx(Yn,{children:"Merge topic"})})}),e.jsxs(Hn,{mb:12,children:[e.jsxs(Xe,{children:[e.jsx("div",{className:"label",children:"From"}),e.jsx("div",{children:t})]}),e.jsxs(Xe,{ml:24,children:[e.jsx("div",{className:"label",children:"To"}),e.jsx(Fn,{onSelect:r,selectedTopic:n})]})]})]}),Yn=m(S)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,Hn=m(u).attrs({align:"flex-start",direction:"row",justify:"flex-start"})`
  color: ${c.white};
  .label {
    margin-bottom: 8px;
    font-weight: 500;
    font-size: 14px;
    color: ${c.GRAY3};
  }
`,Xe=m(u)`
  flex: 1 1 100%;
`,Kn=({topic:t,onClose:r})=>{const{close:n}=B("mergeTopic"),[s,a,l]=z(_=>[_.data,_.ids,_.total]),i=ie({mode:"onChange"}),{watch:o,setValue:d,reset:p}=i,[x,g]=h.useState(!1),[y,b]=h.useState(null);h.useEffect(()=>(t&&d("topic",t==null?void 0:t.topic),()=>{p()}),[t,d,p]);const j=o("topic"),f=()=>{r(),n()},v=async()=>{if(!(!y||!s)){g(!0);try{await Vt({from:t.ref_id,to:y==null?void 0:y.ref_id});const{ref_id:_}=t;if(s[_]={...s[_],edgeList:[Sr],edgeCount:s[_].edgeCount-1},z.setState({ids:a.filter(k=>k!==y.ref_id),total:l-1}),s){const k={...s};k[t==null?void 0:t.ref_id].topic=j.trim(),z.setState({data:k})}f()}catch(_){console.warn(_)}finally{g(!1)}}};return e.jsx(Be,{id:"mergeTopic",kind:"regular",onClose:f,preventOutsideClose:!0,children:e.jsxs(ae,{...i,children:[e.jsx(Un,{from:t.topic,onSelect:b,selectedTopic:y}),e.jsxs(M,{color:"secondary",disabled:x,onClick:v,size:"large",variant:"contained",children:["Merge topics",x&&e.jsx($,{color:c.BLUE_PRESS_STATE,size:10})]})]})})},qn=()=>{const[t,r]=z(i=>[i.filters,i.setFilters]),[n,s]=h.useState(""),a=i=>{i.preventDefault(),r({search:n})},l=()=>{s(""),t.search&&r({search:""})};return e.jsxs(ye,{component:"form",onSubmit:a,sx:{p:"2px 4px",display:"flex",alignItems:"center",width:300},children:[e.jsx(je,{autoComplete:"off",autoCorrect:"off",inputProps:{"aria-label":"search topic"},onChange:i=>s(i.target.value),placeholder:"Search",size:"small",spellCheck:"false",sx:{ml:1,flex:1},value:n}),n&&e.jsxs(e.Fragment,{children:[e.jsx(Ze,{"aria-label":"search",onClick:l,type:"button",children:e.jsx(U,{})}),e.jsx(Le,{orientation:"vertical",sx:{height:28,m:.5}})]}),e.jsx(Ze,{"aria-label":"search",onClick:a,type:"button",children:e.jsx(ge,{})})]})},Ze=m(oe)`
  font-size: 24px;
`,$e=t=>e.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 12 8",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M0.333496 7.66704V6.66706H3.91681V7.66704H0.333496ZM0.333496 4.50037V3.50041H7.7886V4.50037H0.333496ZM0.333496 1.33372V0.33374H11.6668V1.33372H0.333496Z",fill:"currentColor"})}),Qn=({topic:t,onClick:r,onSearch:n})=>{const[s,a]=z(x=>[x.ids,x.total]),[l,i]=h.useState(!1),o=t.date_added_to_graph.toString(),d=async(x,g)=>{i(!0);try{await ct(x,{muted_topic:g}),z.setState({ids:s.filter(y=>y!==x),total:a-1})}catch(y){console.warn(y)}},p=x=>{n(x.topic)};return e.jsxs(be,{children:[e.jsx(w,{className:"empty"}),e.jsx(w,{onClick:()=>p(t),children:e.jsx(Xn,{children:t.topic})}),e.jsx(w,{children:t.edgeCount}),e.jsx(w,{children:t.edgeList.join(", ")}),e.jsx(w,{children:e.jsx("span",{children:new Date(Number(o)*1e3).toDateString()})}),e.jsx(w,{className:"cell-center",children:e.jsx(u,{direction:"row",justify:"space-between",children:e.jsx("div",{className:"approve-wrapper",children:l?e.jsx($,{color:c.white,size:16}):e.jsx(e.Fragment,{children:t.muted_topic?e.jsx(Je,{className:"centered",onClick:()=>d(t.ref_id,!1),children:e.jsx(ft,{color:c.primaryGreen,fontSize:24})}):e.jsx(Je,{className:"centered",onClick:()=>d(t.ref_id,!0),children:e.jsx(mt,{color:c.primaryRed,fontSize:24})})})})})}),e.jsx(w,{children:e.jsx(oe,{onClick:x=>r(x,t.ref_id),children:e.jsx(Dr,{})})})]},t.topic)},Je=m(u)`
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
`,Xn=m.span`
  cursor: pointer;
  :hover {
    text-decoration: underline;
  }
`,Zn=h.memo(Qn),Jn=({showMuted:t,onTopicEdit:r,onChangeFilter:n})=>{const{close:s}=B("sourcesTable"),[a,l]=E.useState(null),[i,o]=E.useState(""),[d,p]=q(T=>[T.setSearchFormValue,T.setCurrentSearch]),[x,g]=z(T=>[T.data,T.ids]),y=h.useCallback((T,A)=>{l(T.currentTarget),o(A)},[]),b=()=>{l(null)},j=T=>{d(T),p(T),s()},f=T=>{r(i,T),b()},v=T=>{n(T)},_=!!a,k=_?"simple-popover":void 0;return x?e.jsx(e.Fragment,{children:Object.keys(x).length?e.jsxs(e.Fragment,{children:[e.jsxs(me,{component:"table",children:[e.jsx(ve,{children:e.jsxs(le,{component:"tr",children:[e.jsx(w,{className:"empty"}),e.jsx(w,{children:e.jsxs(Ee,{onClick:()=>v(Oe),children:["Name ",e.jsx($e,{})]})}),e.jsx(w,{children:e.jsxs(Ee,{onClick:()=>v(_r),children:["Count ",e.jsx($e,{})]})}),e.jsx(w,{children:"Edge list"}),e.jsx(w,{children:e.jsxs(Ee,{onClick:()=>v(Tr),children:["Date ",e.jsx($e,{})]})}),e.jsx(w,{children:t?"Unmute":"Mute"}),e.jsx(w,{})]})}),x&&e.jsx("tbody",{children:g==null?void 0:g.map(T=>e.jsx(Zn,{onClick:y,onSearch:j,topic:x[T]},T))})]}),i?e.jsxs(es,{anchorEl:a,anchorOrigin:{vertical:"bottom",horizontal:"right"},id:k,onClose:b,open:_,transformOrigin:{vertical:"top",horizontal:"right"},children:[e.jsx(Ne,{onClick:()=>f("editTopic"),children:"Rename"}),e.jsx(Ne,{onClick:()=>f("mergeTopic"),children:"Merge"}),e.jsx(Ne,{onClick:()=>f("addEdge"),children:"Add edge"})]}):null]}):e.jsxs(u,{children:[e.jsx(S,{children:"There is not any results for selected filters"}),e.jsx(De,{})]})}):e.jsxs(u,{children:[e.jsx(S,{children:"There is not any results for selected filters"}),e.jsx(De,{})]})},Ee=m.span`
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
`,es=m(wt)`
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
`,ts=()=>{const[t,r]=h.useState(!1),[n,s,a,l,i,o,d]=z(A=>[A.data,A.ids,A.total,A.setTopics,A.filters,A.setFilters,A.terminate]),{open:p}=B("editTopic"),{open:x}=B("mergeTopic"),{open:g}=B("addEdge"),[y,b]=h.useState(null),j={editTopic:p,mergeTopic:x,addEdge:g},f=h.useRef([]);h.useEffect(()=>{s.length&&(f.current=s)},[s]),h.useEffect(()=>{(async()=>{try{r(!0),await l()}catch{console.error("err")}finally{r(!1)}})()},[l,i]);const v=async()=>{try{r(!0),o({page:i.page+1})}catch(A){console.error("Error loading more data:",A)}finally{r(!1)}};h.useEffect(()=>()=>{d()},[d]);const _=A=>{o({sortBy:A})},k=()=>{b(null)},T=(A,D)=>{n&&(b(n[A]),typeof j[D]=="function"&&j[D]())};return e.jsxs(e.Fragment,{children:[e.jsxs(rs,{direction:"column",justify:"flex-end",children:[e.jsxs(we,{align:"flex-start",direction:"row",justify:"space-between",children:[e.jsx(S,{className:"title",children:"Topics"}),e.jsxs(M,{disabled:t,onClick:()=>o({muted:!i.muted}),size:"medium",children:[i.muted?"Show Unmuted":"Show Muted",t&&e.jsx($,{color:c.BLUE_PRESS_STATE,size:10})]})]}),e.jsx(ss,{children:e.jsx(qn,{})}),e.jsx(ns,{align:"center",justify:t&&!n?"center":"flex-start",children:t&&!n?e.jsx($,{color:c.white}):e.jsxs(e.Fragment,{children:[e.jsx(Jn,{onChangeFilter:_,onTopicEdit:T,showMuted:i.muted}),a>s.length?e.jsxs(M,{className:"load-more",disabled:t,onClick:v,children:["Load more",t&&e.jsx($,{color:c.BLUE_PRESS_STATE,size:10})]}):null]})})]}),y&&e.jsx(Kn,{onClose:k,topic:y}),y&&e.jsx(Mn,{onClose:k,topic:y}),y&&e.jsx(On,{onClose:k,topic:y})]})},rs=m(u)`
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
`,ns=m(u)`
  min-height: 0;
  overflow: auto;
  flex: 1;
  width: 100%;
`,ss=m(u).attrs({direction:"row",align:"center",justify:"space-between"})`
  padding: 0 36px;
  margin-bottom: 32px;
`,os=({node:t})=>{var n,s,a,l,i,o,d,p,x,g;function r(y){const b=new Date(Number(y)*1e3),j=b.getDate(),f=b.getMonth()+1,v=b.getFullYear();return`${j}/${f}/${v}`}return e.jsxs(be,{children:[e.jsx(w,{className:"empty"}),e.jsx(w,{children:(n=t==null?void 0:t.properties)!=null&&n.date_added_to_graph?r((s=t==null?void 0:t.properties)==null?void 0:s.date_added_to_graph):r((a=t==null?void 0:t.properties)==null?void 0:a.date)}),e.jsx(w,{children:t==null?void 0:t.node_type}),e.jsx(w,{children:(t==null?void 0:t.node_type)==="Tweet"?e.jsx(et,{href:`${Ue}${(l=t==null?void 0:t.properties)==null?void 0:l.tweet_id}${Ue.includes("?")?"&":"?"}open=system`,target:"_blank",children:(i=t==null?void 0:t.properties)==null?void 0:i.tweet_id}):e.jsx(et,{href:`${(o=t==null?void 0:t.properties)==null?void 0:o.source_link}${((d=t==null?void 0:t.properties)==null?void 0:d.source_link).includes("?")?"&":"?"}open=system`,target:"_blank",children:(p=t==null?void 0:t.properties)==null?void 0:p.source_link})}),e.jsx(w,{children:(x=t==null?void 0:t.properties)!=null&&x.status?(g=t==null?void 0:t.properties)==null?void 0:g.status:"processing"})]})},et=m.a`
  color: ${c.white};
  text-decoration: underline;
  &:visited {
    color: ${c.white};
  }
`,is=h.memo(os),as=({nodes:t})=>{const{open:r}=B("addContent"),n=async()=>{r()};return!t||(t==null?void 0:t.length)===0?e.jsx(e.Fragment,{children:e.jsxs(ls,{children:[e.jsx(cs,{align:"center",direction:"row",justify:"space-between",children:e.jsx(S,{className:"subtitle",children:"Contribute to the graph by adding content."})}),e.jsx(u,{children:e.jsx(M,{color:"secondary",onClick:n,size:"medium",startIcon:e.jsx(zr,{}),type:"submit",variant:"contained",children:"Add Content"})})]})}):e.jsxs(me,{component:"table",children:[e.jsx(ve,{children:e.jsxs(le,{component:"tr",children:[e.jsx(w,{className:"empty"}),e.jsx(w,{children:"Date"}),e.jsx(w,{children:"Type"}),e.jsx(w,{children:"Source"}),e.jsx(w,{children:"Status"})]})}),e.jsx("tbody",{children:t==null?void 0:t.map(s=>e.jsx(is,{node:s},s==null?void 0:s.ref_id))})]})},ls=dt(u)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 100px auto;
  width: 100%;
`,cs=dt(u)`
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
`,ds=()=>{const[t,r]=h.useState(!0),[n,s]=h.useState([]);return h.useEffect(()=>{(async()=>{try{const l=await Ut();s(l.nodes),r(!1)}catch(l){console.error("Error fetching data:",l),r(!1)}})()},[]),e.jsxs(ps,{direction:"column",justify:"flex-end",children:[e.jsx(we,{align:"center",direction:"row",justify:"space-between",children:e.jsx(S,{className:"title",children:"Content I've added to the graph"})}),e.jsx(us,{align:"center",justify:t?"center":"flex-start",children:t?e.jsx($,{color:c.white}):e.jsx(e.Fragment,{children:e.jsx(as,{nodes:n})})})]})},ps=m(u)`
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
`,us=m(u)`
  min-height: 0;
  overflow: auto;
  flex: 1;
  width: 100%;
`,hs=[{label:Cr,component:ds},{label:Ar,component:wn},{label:vt,component:dn},{label:bt,component:ts}],xs=t=>{const{children:r,value:n,index:s,...a}=t;return n===s?e.jsx(js,{"aria-labelledby":`simple-tab-${s}`,hidden:n!==s,id:`simple-tabpanel-${s}`,role:"tabpanel",...a,children:r}):null};function fs(t){return{id:`simple-tab-${t}`,"aria-controls":`simple-tabpanel-${t}`}}const ms=()=>{const[t,r]=h.useState(0),[n]=se(i=>[i.isAdmin]),[s]=Pt(i=>[i.queuedSourcesFlag]),a=(i,o)=>{r(o)},l=hs.filter(({label:i})=>i===bt?n:i===vt?n&&s:!0);return e.jsxs(bs,{direction:"column",children:[e.jsx(gs,{"aria-label":"sources tabs",onChange:a,value:t,children:l.map((i,o)=>e.jsx(ys,{color:c.white,disableRipple:!0,label:i.label,...fs(o)},i.label))}),l.map((i,o)=>e.jsx(xs,{index:o,value:t,children:e.jsx(i.component,{})},i.label))]})},gs=m(Ir)`
  && {
    background: rgba(0, 0, 0, 0.2);

    .MuiTabs-indicator {
      background: ${c.primaryBlue};
    }
  }
`,ys=m(Lr)`
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
`,js=m(u)`
  display: flex;
  flex: 1;
  min-height: 572px;
  padding: 20px 0;
  max-height: 572px;
`,bs=m(u)`
  min-height: 0;
  flex: 1;
`,he={required:{message:"The field is required",value:!0}},vs=({initialValues:t})=>{const r=ie({defaultValues:t,mode:"onSubmit"}),{isSubmitting:n}=r.formState,s=r.handleSubmit(async a=>{try{await Yt(a)}catch(l){console.warn(l)}});return e.jsx(ae,{...r,children:e.jsx("form",{id:"add-node-form",onSubmit:s,children:e.jsxs(e.Fragment,{children:[e.jsxs(u,{children:[e.jsx(u,{pt:12,children:e.jsx(re,{id:"cy-about-title-id",label:"Graph Title",maxLength:50,name:"title",placeholder:"Type graph title here...",rules:{...he}})}),e.jsx(u,{pt:12,children:e.jsx(re,{id:"cy-about-id",label:"Graph Description",maxLength:50,name:"description",placeholder:"Type graph description here...",rules:{...he}})}),e.jsx(u,{pt:12,children:e.jsx(re,{id:"cy-about-mission_statement-id",label:"Mission Statement",maxLength:50,name:"mission_statement",placeholder:"Type mission statement here...",rules:{...he}})}),e.jsx(u,{pt:12,children:e.jsx(re,{id:"cy-about-search_term-id",label:"Search Term",maxLength:50,name:"search_term",placeholder:"Type search term here...",rules:{...he}})})]}),e.jsx(u,{pt:8,children:n?e.jsx(ws,{children:e.jsx($,{color:c.white,size:20})}):e.jsx(_t,{disabled:n,id:"add-node-submit-cta",kind:"big",type:"submit",children:"Save changes"})})]})})})},ws=m(u).attrs({align:"center",background:"primaryButton",borderRadius:8,justify:"center"})`
  padding: 16px 24px;
  opacity: 0.5;
`,Ss=({initialValues:t})=>e.jsxs(e.Fragment,{children:[t.title&&e.jsxs(u,{pt:12,children:[e.jsx(S,{kind:"regular",children:"Graph Title"}),e.jsx(u,{pt:12,children:e.jsx(S,{className:"value",kind:"medium",children:t.title})})]}),t.description&&e.jsxs(u,{pt:12,children:[e.jsx(S,{kind:"regular",children:"Graph Description"}),e.jsx(u,{pt:12,children:e.jsx(S,{className:"value",kind:"medium",children:t.description})})]}),t.mission_statement&&e.jsxs(u,{pt:12,children:[e.jsx(S,{kind:"regular",children:"Mission Statement"}),e.jsx(u,{pt:12,children:e.jsx(S,{className:"value",kind:"medium",children:t.mission_statement})})]})]}),_s=()=>{const[t]=se(n=>[n.isAdmin]),r=q(n=>n.appMetaData);return e.jsxs(Ts,{align:"stretch",direction:"column",justify:"flex-end",children:[e.jsx(As,{align:"center",direction:"row",justify:"space-between",children:e.jsx(S,{className:"title",children:"About"})}),e.jsx(Cs,{align:"stretch",justify:"flex-start",children:t?e.jsx(vs,{initialValues:r}):e.jsx(Ss,{initialValues:r})})]})},Ts=m(u)`
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
`,Cs=m(u)`
  min-height: 0;
  overflow: auto;
  flex: 1;
  width: 100%;
`,As=m(u)`
  margin-bottom: 16px;
  ${S} {
    margin-bottom: 0;
  }
`;var ks=["type","layout","connectNulls","ref"];function H(t){"@babel/helpers - typeof";return H=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},H(t)}function $s(t,r){if(t==null)return{};var n=Es(t,r),s,a;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)s=l[a],!(r.indexOf(s)>=0)&&Object.prototype.propertyIsEnumerable.call(t,s)&&(n[s]=t[s])}return n}function Es(t,r){if(t==null)return{};var n={},s=Object.keys(t),a,l;for(l=0;l<s.length;l++)a=s[l],!(r.indexOf(a)>=0)&&(n[a]=t[a]);return n}function ne(){return ne=Object.assign?Object.assign.bind():function(t){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(t[s]=n[s])}return t},ne.apply(this,arguments)}function tt(t,r){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);r&&(s=s.filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable})),n.push.apply(n,s)}return n}function P(t){for(var r=1;r<arguments.length;r++){var n=arguments[r]!=null?arguments[r]:{};r%2?tt(Object(n),!0).forEach(function(s){I(t,s,n[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):tt(Object(n)).forEach(function(s){Object.defineProperty(t,s,Object.getOwnPropertyDescriptor(n,s))})}return t}function G(t){return zs(t)||Ds(t)||Ps(t)||Ns()}function Ns(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ps(t,r){if(t){if(typeof t=="string")return ze(t,r);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ze(t,r)}}function Ds(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function zs(t){if(Array.isArray(t))return ze(t)}function ze(t,r){(r==null||r>t.length)&&(r=t.length);for(var n=0,s=new Array(r);n<r;n++)s[n]=t[n];return s}function Is(t,r){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")}function rt(t,r){for(var n=0;n<r.length;n++){var s=r[n];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,Tt(s.key),s)}}function Ls(t,r,n){return r&&rt(t.prototype,r),n&&rt(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function Os(t,r){if(typeof r!="function"&&r!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(r&&r.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),r&&Ie(t,r)}function Ie(t,r){return Ie=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(s,a){return s.__proto__=a,s},Ie(t,r)}function Bs(t){var r=Ms();return function(){var s=fe(t),a;if(r){var l=fe(this).constructor;a=Reflect.construct(s,arguments,l)}else a=s.apply(this,arguments);return Rs(this,a)}}function Rs(t,r){if(r&&(H(r)==="object"||typeof r=="function"))return r;if(r!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return O(t)}function O(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function Ms(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function fe(t){return fe=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},fe(t)}function I(t,r,n){return r=Tt(r),r in t?Object.defineProperty(t,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[r]=n,t}function Tt(t){var r=Fs(t,"string");return H(r)==="symbol"?r:String(r)}function Fs(t,r){if(H(t)!=="object"||t===null)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var s=n.call(t,r||"default");if(H(s)!=="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(t)}var ce=function(t){Os(n,t);var r=Bs(n);function n(){var s;Is(this,n);for(var a=arguments.length,l=new Array(a),i=0;i<a;i++)l[i]=arguments[i];return s=r.call.apply(r,[this].concat(l)),I(O(s),"state",{isAnimationFinished:!0,totalLength:0}),I(O(s),"generateSimpleStrokeDasharray",function(o,d){return"".concat(d,"px ").concat(o-d,"px")}),I(O(s),"getStrokeDasharray",function(o,d,p){var x=p.reduce(function(k,T){return k+T});if(!x)return s.generateSimpleStrokeDasharray(d,o);for(var g=Math.floor(o/x),y=o%x,b=d-o,j=[],f=0,v=0;f<p.length;v+=p[f],++f)if(v+p[f]>y){j=[].concat(G(p.slice(0,f)),[y-v]);break}var _=j.length%2===0?[0,b]:[b];return[].concat(G(n.repeat(p,g)),G(j),_).map(function(k){return"".concat(k,"px")}).join(", ")}),I(O(s),"id",tr("recharts-line-")),I(O(s),"pathRef",function(o){s.mainCurve=o}),I(O(s),"handleAnimationEnd",function(){s.setState({isAnimationFinished:!0}),s.props.onAnimationEnd&&s.props.onAnimationEnd()}),I(O(s),"handleAnimationStart",function(){s.setState({isAnimationFinished:!1}),s.props.onAnimationStart&&s.props.onAnimationStart()}),s}return Ls(n,[{key:"componentDidMount",value:function(){if(this.props.isAnimationActive){var a=this.getTotalLength();this.setState({totalLength:a})}}},{key:"componentDidUpdate",value:function(){if(this.props.isAnimationActive){var a=this.getTotalLength();a!==this.state.totalLength&&this.setState({totalLength:a})}}},{key:"getTotalLength",value:function(){var a=this.mainCurve;try{return a&&a.getTotalLength&&a.getTotalLength()||0}catch{return 0}}},{key:"renderErrorBar",value:function(a,l){if(this.props.isAnimationActive&&!this.state.isAnimationFinished)return null;var i=this.props,o=i.points,d=i.xAxis,p=i.yAxis,x=i.layout,g=i.children,y=rr(g,nr);if(!y)return null;var b=function(v,_){return{x:v.x,y:v.y,value:v.value,errorVal:ut(v.payload,_)}},j={clipPath:a?"url(#clipPath-".concat(l,")"):null};return E.createElement(_e,j,y.map(function(f){return E.cloneElement(f,{key:"bar-".concat(f.props.dataKey),data:o,xAxis:d,yAxis:p,layout:x,dataPointFormatter:b})}))}},{key:"renderDots",value:function(a,l,i){var o=this.props.isAnimationActive;if(o&&!this.state.isAnimationFinished)return null;var d=this.props,p=d.dot,x=d.points,g=d.dataKey,y=ue(this.props),b=ue(p,!0),j=x.map(function(v,_){var k=P(P(P({key:"dot-".concat(_),r:3},y),b),{},{value:v.value,dataKey:g,cx:v.x,cy:v.y,index:_,payload:v.payload});return n.renderDotItem(p,k)}),f={clipPath:a?"url(#clipPath-".concat(l?"":"dots-").concat(i,")"):null};return E.createElement(_e,ne({className:"recharts-line-dots",key:"dots"},f),j)}},{key:"renderCurveStatically",value:function(a,l,i,o){var d=this.props,p=d.type,x=d.layout,g=d.connectNulls;d.ref;var y=$s(d,ks),b=P(P(P({},ue(y,!0)),{},{fill:"none",className:"recharts-line-curve",clipPath:l?"url(#clipPath-".concat(i,")"):null,points:a},o),{},{type:p,layout:x,connectNulls:g});return E.createElement(sr,ne({},b,{pathRef:this.pathRef}))}},{key:"renderCurveWithAnimation",value:function(a,l){var i=this,o=this.props,d=o.points,p=o.strokeDasharray,x=o.isAnimationActive,g=o.animationBegin,y=o.animationDuration,b=o.animationEasing,j=o.animationId,f=o.animateNewValues,v=o.width,_=o.height,k=this.state,T=k.prevPoints,A=k.totalLength;return E.createElement(or,{begin:g,duration:y,isActive:x,easing:b,from:{t:0},to:{t:1},key:"line-".concat(j),onAnimationEnd:this.handleAnimationEnd,onAnimationStart:this.handleAnimationStart},function(D){var C=D.t;if(T){var Q=T.length/d.length,F=d.map(function(N,Se){var J=Math.floor(Se*Q);if(T[J]){var ee=T[J],W=te(ee.x,N.x),Ct=te(ee.y,N.y);return P(P({},N),{},{x:W(C),y:Ct(C)})}if(f){var At=te(v*2,N.x),kt=te(_/2,N.y);return P(P({},N),{},{x:At(C),y:kt(C)})}return P(P({},N),{},{x:N.x,y:N.y})});return i.renderCurveStatically(F,a,l)}var de=te(0,A),X=de(C),Z;if(p){var pe="".concat(p).split(/[,\s]+/gim).map(function(N){return parseFloat(N)});Z=i.getStrokeDasharray(X,A,pe)}else Z=i.generateSimpleStrokeDasharray(A,X);return i.renderCurveStatically(d,a,l,{strokeDasharray:Z})})}},{key:"renderCurve",value:function(a,l){var i=this.props,o=i.points,d=i.isAnimationActive,p=this.state,x=p.prevPoints,g=p.totalLength;return d&&o&&o.length&&(!x&&g>0||!ir(x,o))?this.renderCurveWithAnimation(a,l):this.renderCurveStatically(o,a,l)}},{key:"render",value:function(){var a,l=this.props,i=l.hide,o=l.dot,d=l.points,p=l.className,x=l.xAxis,g=l.yAxis,y=l.top,b=l.left,j=l.width,f=l.height,v=l.isAnimationActive,_=l.id;if(i||!d||!d.length)return null;var k=this.state.isAnimationFinished,T=d.length===1,A=Ge("recharts-line",p),D=x&&x.allowDataOverflow,C=g&&g.allowDataOverflow,Q=D||C,F=Pe(_)?this.id:_,de=(a=ue(o))!==null&&a!==void 0?a:{r:3,strokeWidth:2},X=de.r,Z=X===void 0?3:X,pe=de.strokeWidth,N=pe===void 0?2:pe,Se=ar(o)?o:{},J=Se.clipDot,ee=J===void 0?!0:J,W=Z*2+N;return E.createElement(_e,{className:A},D||C?E.createElement("defs",null,E.createElement("clipPath",{id:"clipPath-".concat(F)},E.createElement("rect",{x:D?b:b-j/2,y:C?y:y-f/2,width:D?j:j*2,height:C?f:f*2})),!ee&&E.createElement("clipPath",{id:"clipPath-dots-".concat(F)},E.createElement("rect",{x:b-W/2,y:y-W/2,width:j+W,height:f+W}))):null,!T&&this.renderCurve(Q,F),this.renderErrorBar(Q,F),(T||o)&&this.renderDots(Q,ee,F),(!v||k)&&lr.renderCallByParent(this.props,d))}}],[{key:"getDerivedStateFromProps",value:function(a,l){return a.animationId!==l.prevAnimationId?{prevAnimationId:a.animationId,curPoints:a.points,prevPoints:l.curPoints}:a.points!==l.curPoints?{curPoints:a.points}:null}},{key:"repeat",value:function(a,l){for(var i=a.length%2!==0?[].concat(G(a),[0]):a,o=[],d=0;d<l;++d)o=[].concat(G(o),G(i));return o}},{key:"renderDotItem",value:function(a,l){var i;if(E.isValidElement(a))i=E.cloneElement(a,l);else if(Dt(a))i=a(l);else{var o=Ge("recharts-line-dot",a?a.className:"");i=E.createElement(pt,ne({},l,{className:o}))}return i}}]),n}(h.PureComponent);I(ce,"displayName","Line");I(ce,"defaultProps",{xAxisId:0,yAxisId:0,connectNulls:!1,activeDot:!0,dot:!0,legendType:"line",stroke:"#3182bd",strokeWidth:1,fill:"#fff",points:[],isAnimationActive:!er.isSsr,animateNewValues:!0,animationBegin:0,animationDuration:1500,animationEasing:"ease",hide:!1,label:!1});I(ce,"getComposedData",function(t){var r=t.props,n=t.xAxis,s=t.yAxis,a=t.xAxisTicks,l=t.yAxisTicks,i=t.dataKey,o=t.bandSize,d=t.displayedData,p=t.offset,x=r.layout,g=d.map(function(y,b){var j=ut(y,i);return x==="horizontal"?{x:Ve({axis:n,ticks:a,bandSize:o,entry:y,index:b}),y:Pe(j)?null:s.scale(j),value:j,payload:y}:{x:Pe(j)?null:n.scale(j),y:Ve({axis:s,ticks:l,bandSize:o,entry:y,index:b}),value:j,payload:y}});return P({points:g,layout:x},p)});var Ws=cr({chartName:"LineChart",GraphicalChild:ce,axisComponents:[{axisType:"xAxis",AxisComp:ht},{axisType:"yAxis",AxisComp:xt}],formatAxisMap:dr});const Gs=({cx:t,cy:r})=>e.jsx(pt,{cx:t,cy:r,fill:c.blueTextAccent,r:2}),Vs=({data:t,width:r=500,height:n=300})=>e.jsx(e.Fragment,{children:(t==null?void 0:t.length)&&e.jsxs(Ws,{data:t,height:n,id:"cy-sentiment-chart",margin:{bottom:5,left:-20,right:30,top:5},width:r,children:[e.jsx(pr,{stroke:c.lightBlue300,strokeDasharray:"5 5"}),e.jsx(ht,{dataKey:"date",interval:Math.floor(t.length/3),stroke:c.blueTextAccent}),e.jsx(xt,{domain:[0,10],stroke:c.blueTextAccent}),e.jsx(ur,{}),e.jsx(ce,{dataKey:"score",dot:e.jsx(Gs,{}),stroke:"#8884d8",type:"monotone"})]})}),Us=()=>{const[t,r]=h.useState(void 0),[n]=se(i=>[i.setBudget]),[s,a]=h.useState(!1),l=async()=>{a(!0),Ht(n).then(async i=>{r(i==null?void 0:i.data.filter(o=>o.date).map(o=>({date:It.unix(Number(String(o.date).split(".")[0])).format("MM/DD/YY"),score:o.sentiment_score}))),await st(n)}).catch().finally(()=>{a(!1)})};return e.jsxs(Ys,{align:"flex-start",direction:"column",id:"cy-sentiment-chart-wrapper",justify:"flex-end",children:[e.jsx(S,{className:"title",children:"Sentiment chart"}),s&&e.jsx(Or,{alignItems:"center",component:"div",flexGrow:1,p:4,spacing:2,width:"100%",children:e.jsx(zt,{color:c.white})}),!(t!=null&&t.length)&&e.jsx(Hs,{className:"button",id:"cy-get-sentiments-btn",onClick:l,children:"Get top 100 sentiments"}),e.jsx(Vs,{data:t})]})},Ys=m(u)`
  border-radius: 8px;
  box-shadow: 0px 5px 6px rgb(0 0 0 / 50%);
  padding: 16px;

  .title {
    margin-bottom: 16px;
    font-size: 20px;
  }
`,Hs=m(_t)`
  height: 48px;
`,Ks=600,qs={about:e.jsx(_s,{}),sentiment:e.jsx(Us,{}),sources:e.jsx(ms,{}),"":null},Qs=()=>{const[t,r]=q(n=>[n.secondarySidebarActiveTab,n.setSecondarySidebarActiveTab]);return e.jsx(hr,{direction:"left",in:!!t,mountOnEnter:!0,unmountOnExit:!0,children:e.jsxs(Xs,{id:"secondary-sidebar-wrapper",children:[e.jsx(Zs,{id:"cy-close-secondary-sidebar",onClick:()=>r(""),children:e.jsx(gt,{})}),qs[t]]})})},Xs=m(u)(({theme:t})=>({background:c.BG1,height:"100vh",padding:"16px 20px",width:"100%",zIndex:30,display:"flex",[t.breakpoints.up("sm")]:{width:Ks}})),Zs=m(u).attrs({align:"center",justify:"center",p:5})`
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
`,Js=m(Kt)`
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
`,eo=m(u)`
  height: 100%;
  width: 100%;
  background-color: ${c.black};
`,to=m(u)`
  position: absolute;
  bottom: 8px;
  left: 8px;
  color: ${c.white};
  font-size: 12px;
  opacity: 0.5;
`,ro=h.lazy(()=>L(()=>import("./index-a3771878.js"),["assets/index-a3771878.js","assets/index-912a006b.js","assets/index-3f17fe3b.css","assets/SourcesTableIcon-ad96549e.js","assets/SettingsIcon-a4710d20.js","assets/index-acbd86c1.js","assets/index.esm-b4803265.js","assets/react-toastify.esm-5fb76b52.js","assets/react-toastify-b60658ac.css","assets/index-c8b55d33.js"]).then(({MainToolbar:t})=>({default:t}))),no=h.lazy(()=>L(()=>import("./index-34c5c95e.js"),["assets/index-34c5c95e.js","assets/index-912a006b.js","assets/index-3f17fe3b.css","assets/EditIcon-c10b5b30.js","assets/react-toastify.esm-5fb76b52.js","assets/react-toastify-b60658ac.css","assets/generateCategoricalChart-f438c338.js","assets/Popover-936d9635.js","assets/useSlotProps-4d777221.js","assets/InfoIcon-600b59a0.js","assets/index-6d3674a4.js","assets/index.esm-b4803265.js","assets/PlusIcon-9c063c4b.js","assets/index-c8b55d33.js","assets/NoFilterResultIcon-60e15656.js","assets/ChevronUpIcon-9094a078.js","assets/index-0156e352.js","assets/index-4eee61ea.js","assets/index-65abfc9f.js","assets/index-a8906cb4.js","assets/Popper-3c65353d.js","assets/CheckIcon-969d5faf.js","assets/SettingsIcon-a4710d20.js","assets/Stack-d7933113.js"]).then(({Universe:t})=>({default:t}))),so=h.lazy(()=>L(()=>import("./index-1ccc6af0.js"),["assets/index-1ccc6af0.js","assets/index-912a006b.js","assets/index-3f17fe3b.css","assets/react-toastify.esm-5fb76b52.js","assets/react-toastify-b60658ac.css","assets/SoundIcon-37e2ed94.js","assets/Select-c84953f9.js","assets/Popover-936d9635.js","assets/useSlotProps-4d777221.js","assets/ChevronUpIcon-9094a078.js","assets/generateCategoricalChart-f438c338.js","assets/InfoIcon-600b59a0.js","assets/CheckIcon-969d5faf.js","assets/index.esm-b4803265.js","assets/toastMessage-075abc72.js","assets/SoundIcon-6125620a.css","assets/index-6d3674a4.js","assets/Skeleton-6fe7015a.js","assets/PlusIcon-9c063c4b.js","assets/index-c8b55d33.js","assets/index-a8906cb4.js"]).then(({SideBar:t})=>({default:t}))),oo=()=>{const[t,r]=se(C=>[C.setBudget,C.setNodeCount]),[n,s]=h.useState(!1),{setSidebarOpen:a,currentSearch:l,setCurrentSearch:i,setRelevanceSelected:o,setTranscriptOpen:d}=q(C=>C),p=xr(C=>C.setTeachMeAnswer),{data:x,setData:g,fetchData:y,graphStyle:b,setSelectedNode:j,setCategoryFilter:f}=K(C=>C),v=qt(),_=ie({mode:"onChange"}),k=_.handleSubmit(({search:C})=>{d(!1),j(null),o(!1),i(C),p(""),f(null)}),T=h.useCallback(async()=>{await y(t,{...l?{word:l}:{}}),a(!0),l?await st(t):j(null)},[y,t,l,a,j]);h.useEffect(()=>{T()},[l,T]);const A=()=>{if(x){s(!0);const C=Jt(b,x.nodes);setTimeout(()=>{g(C),s(!1)},1e3)}};h.useEffect(()=>{A()},[b]);const D=h.useCallback(()=>{r("INCREMENT")},[r]);return h.useEffect(()=>{v&&(v.on("connect_error",C=>{console.error("Socket connection error:",C)}),v.on("newnode",D))},[v,D]),h.useEffect(()=>()=>{v&&v.disconnect()},[v]),e.jsxs(e.Fragment,{children:[e.jsx(Qt,{}),e.jsx(nn,{}),e.jsx(Xt,{hidden:!Lt}),e.jsx(h.Suspense,{fallback:e.jsx("div",{children:"Loading..."}),children:e.jsxs(eo,{direction:"row",children:[e.jsx(fr,{children:e.jsxs(ae,{..._,children:[e.jsx(ro,{}),e.jsx(so,{onSubmit:k}),e.jsx(no,{}),n&&e.jsx(Vr,{fullSize:!1}),e.jsx(Wr,{}),e.jsx(Qs,{}),e.jsx(en,{}),e.jsxs(to,{children:["v",Zt]}),e.jsx(ot,{})]})}),e.jsx(Jr,{}),e.jsx(Js,{}),e.jsx(ln,{})]})})]})},_o=Object.freeze(Object.defineProperty({__proto__:null,App:oo},Symbol.toStringTag,{value:"Module"}));export{Wr as O,Vr as P,ms as S,_o as i};
