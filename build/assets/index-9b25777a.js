import{r as h,J as X,K,L as O,M as I,O as Q,D as J,j as e,P as Z,U as ee,X as D,au as gt,N as ne,av as ft,s as c,g as x,T as N,B as W,F as g,a6 as E,bq as mt,an as se,E as re,c as le,br as bt,bs as jt,aq as yt,bt as wt,bu as Ve,p as ae,bv as qe,am as we,b8 as _e,b9 as Ne,ba as ze,bw as Ct,bx as vt,al as Tt,by as $t,a as Xe,C as te,bz as St,bo as Ke,bA as Qe,l as Ce,b7 as ce,n as ve,bB as kt,b4 as _t,b5 as Nt,bC as de,bD as zt,b as Lt,k as It,a7 as Bt}from"./index-0bc9ae90.js";import{y as Rt,c as Et,z as je,J as Mt,d as At,e as Je,K as Ze,O as et,Q as tt,U as Ot,W as Ft,X as Wt,Y as Le,Z as Ie,a as Be,_ as ge,$ as Ht,b as Pt}from"./index-0813e708.js";import{T as Re,s as U,a as st,S as ot,A as Te,E as Dt,D as Ut,b as nt,Q as rt,V as at,c as Gt}from"./constants-2af8fd66.js";import{C as z}from"./ClipLoader-a4ee2175.js";import{P as $e,I as q,t as Yt}from"./index-a97a73cc.js";import{I as Vt,A as Se,T as it}from"./index-f7cb6eac.js";import{u as B}from"./index-932a9ad0.js";import{C as lt}from"./CheckIcon-c13450bd.js";import{T as Ee}from"./Typography-8117be15.js";import{T as qt,a as Xt}from"./Tabs-9af7d63b.js";import"./SourcesTableIcon-db95c031.js";import"./DeleteNodeIcon-64022384.js";import"./SoundIcon-dbfb099f.js";import"./SucessFeedBackIcon-06d2d64f.js";import"./Stack-faaea80c.js";import"./clsx-0ff35b70.js";import"./createSvgIcon-39e89e6d.js";import"./TextareaAutosize-acb7dc8e.js";const Kt=h.createContext(),ct=Kt;function Qt(t){return X("MuiTable",t)}K("MuiTable",["root","stickyHeader"]);const Jt=["className","component","padding","size","stickyHeader"],Zt=t=>{const{classes:s,stickyHeader:n}=t;return ee({root:["root",n&&"stickyHeader"]},Qt,s)},es=O("table",{name:"MuiTable",slot:"Root",overridesResolver:(t,s)=>{const{ownerState:n}=t;return[s.root,n.stickyHeader&&s.stickyHeader]}})(({theme:t,ownerState:s})=>I({display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":I({},t.typography.body2,{padding:t.spacing(2),color:(t.vars||t).palette.text.secondary,textAlign:"left",captionSide:"bottom"})},s.stickyHeader&&{borderCollapse:"separate"})),Me="table",ts=h.forwardRef(function(s,n){const r=Q({props:s,name:"MuiTable"}),{className:l,component:i=Me,padding:a="normal",size:o="medium",stickyHeader:d=!1}=r,u=J(r,Jt),m=I({},r,{component:i,padding:a,size:o,stickyHeader:d}),p=Zt(m),b=h.useMemo(()=>({padding:a,size:o,stickyHeader:d}),[a,o,d]);return e.jsx(ct.Provider,{value:b,children:e.jsx(es,I({as:i,role:i===Me?null:"table",ref:n,className:Z(p.root,l),ownerState:m},u))})}),pe=ts,ss=h.createContext(),xe=ss;function os(t){return X("MuiTableBody",t)}K("MuiTableBody",["root"]);const ns=["className","component"],rs=t=>{const{classes:s}=t;return ee({root:["root"]},os,s)},as=O("tbody",{name:"MuiTableBody",slot:"Root",overridesResolver:(t,s)=>s.root})({display:"table-row-group"}),is={variant:"body"},Ae="tbody",ls=h.forwardRef(function(s,n){const r=Q({props:s,name:"MuiTableBody"}),{className:l,component:i=Ae}=r,a=J(r,ns),o=I({},r,{component:i}),d=rs(o);return e.jsx(xe.Provider,{value:is,children:e.jsx(as,I({className:Z(d.root,l),as:i,ref:n,role:i===Ae?null:"rowgroup",ownerState:o},a))})}),cs=ls;function ds(t){return X("MuiTableCell",t)}const ps=K("MuiTableCell",["root","head","body","footer","sizeSmall","sizeMedium","paddingCheckbox","paddingNone","alignLeft","alignCenter","alignRight","alignJustify","stickyHeader"]),xs=ps,hs=["align","className","component","padding","scope","size","sortDirection","variant"],us=t=>{const{classes:s,variant:n,align:r,padding:l,size:i,stickyHeader:a}=t,o={root:["root",n,a&&"stickyHeader",r!=="inherit"&&`align${D(r)}`,l!=="normal"&&`padding${D(l)}`,`size${D(i)}`]};return ee(o,ds,s)},gs=O("td",{name:"MuiTableCell",slot:"Root",overridesResolver:(t,s)=>{const{ownerState:n}=t;return[s.root,s[n.variant],s[`size${D(n.size)}`],n.padding!=="normal"&&s[`padding${D(n.padding)}`],n.align!=="inherit"&&s[`align${D(n.align)}`],n.stickyHeader&&s.stickyHeader]}})(({theme:t,ownerState:s})=>I({},t.typography.body2,{display:"table-cell",verticalAlign:"inherit",borderBottom:t.vars?`1px solid ${t.vars.palette.TableCell.border}`:`1px solid
    ${t.palette.mode==="light"?gt(ne(t.palette.divider,1),.88):ft(ne(t.palette.divider,1),.68)}`,textAlign:"left",padding:16},s.variant==="head"&&{color:(t.vars||t).palette.text.primary,lineHeight:t.typography.pxToRem(24),fontWeight:t.typography.fontWeightMedium},s.variant==="body"&&{color:(t.vars||t).palette.text.primary},s.variant==="footer"&&{color:(t.vars||t).palette.text.secondary,lineHeight:t.typography.pxToRem(21),fontSize:t.typography.pxToRem(12)},s.size==="small"&&{padding:"6px 16px",[`&.${xs.paddingCheckbox}`]:{width:24,padding:"0 12px 0 16px","& > *":{padding:0}}},s.padding==="checkbox"&&{width:48,padding:"0 0 0 4px"},s.padding==="none"&&{padding:0},s.align==="left"&&{textAlign:"left"},s.align==="center"&&{textAlign:"center"},s.align==="right"&&{textAlign:"right",flexDirection:"row-reverse"},s.align==="justify"&&{textAlign:"justify"},s.stickyHeader&&{position:"sticky",top:0,zIndex:2,backgroundColor:(t.vars||t).palette.background.default})),fs=h.forwardRef(function(s,n){const r=Q({props:s,name:"MuiTableCell"}),{align:l="inherit",className:i,component:a,padding:o,scope:d,size:u,sortDirection:m,variant:p}=r,b=J(r,hs),j=h.useContext(ct),y=h.useContext(xe),C=y&&y.variant==="head";let w;a?w=a:w=C?"th":"td";let $=d;w==="td"?$=void 0:!$&&C&&($="col");const S=p||y&&y.variant,A=I({},r,{align:l,component:w,padding:o||(j&&j.padding?j.padding:"normal"),size:u||(j&&j.size?j.size:"medium"),sortDirection:m,stickyHeader:S==="head"&&j&&j.stickyHeader,variant:S}),F=us(A);let L=null;return m&&(L=m==="asc"?"ascending":"descending"),e.jsx(gs,I({as:w,ref:n,className:Z(F.root,i),"aria-sort":L,scope:$,ownerState:A},b))}),ms=fs;function bs(t){return X("MuiTableHead",t)}K("MuiTableHead",["root"]);const js=["className","component"],ys=t=>{const{classes:s}=t;return ee({root:["root"]},bs,s)},ws=O("thead",{name:"MuiTableHead",slot:"Root",overridesResolver:(t,s)=>s.root})({display:"table-header-group"}),Cs={variant:"head"},Oe="thead",vs=h.forwardRef(function(s,n){const r=Q({props:s,name:"MuiTableHead"}),{className:l,component:i=Oe}=r,a=J(r,js),o=I({},r,{component:i}),d=ys(o);return e.jsx(xe.Provider,{value:Cs,children:e.jsx(ws,I({as:i,className:Z(d.root,l),ref:n,role:i===Oe?null:"rowgroup",ownerState:o},a))})}),dt=vs;function Ts(t){return X("MuiTableRow",t)}const $s=K("MuiTableRow",["root","selected","hover","head","footer"]),Fe=$s,Ss=["className","component","hover","selected"],ks=t=>{const{classes:s,selected:n,hover:r,head:l,footer:i}=t;return ee({root:["root",n&&"selected",r&&"hover",l&&"head",i&&"footer"]},Ts,s)},_s=O("tr",{name:"MuiTableRow",slot:"Root",overridesResolver:(t,s)=>{const{ownerState:n}=t;return[s.root,n.head&&s.head,n.footer&&s.footer]}})(({theme:t})=>({color:"inherit",display:"table-row",verticalAlign:"middle",outline:0,[`&.${Fe.hover}:hover`]:{backgroundColor:(t.vars||t).palette.action.hover},[`&.${Fe.selected}`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.selectedOpacity})`:ne(t.palette.primary.main,t.palette.action.selectedOpacity),"&:hover":{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.hoverOpacity}))`:ne(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.hoverOpacity)}}})),We="tr",Ns=h.forwardRef(function(s,n){const r=Q({props:s,name:"MuiTableRow"}),{className:l,component:i=We,hover:a=!1,selected:o=!1}=r,d=J(r,Ss),u=h.useContext(xe),m=I({},r,{component:i,hover:a,selected:o,head:u&&u.variant==="head",footer:u&&u.variant==="footer"}),p=ks(m);return e.jsx(_s,I({as:i,ref:n,className:Z(p.root,l),role:i===We?null:"row",ownerState:m},d))}),G=Ns;function ye(t){const s=new Date(Number(t)*1e3),n=s.getFullYear(),r=(1+s.getMonth()).toString().padStart(2,"0");return`${s.getDate().toString().padStart(2,"0")}/${r}/${n}`}const f=c(ms)`
  && {
    color: ${x.white};
    border: none;
    padding: 6px 2px 6px 7px;
    color: ${x.GRAY3};
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
`,he=c(G)`
  && {
    height: 48px;
    padding: 0 36px;
  }
  &:nth-child(odd) {
    background-color: ${x.BG3};
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
`,ue=c(dt)`
  && {
    border-bottom: 1px solid ${x.black};
    position: sticky;
    top: 0;
    z-index: 1;
    background-color: ${x.BG1};
  }

  ${f} {
    color: ${x.white};
    font-family: Barlow;
    font-size: 11px;
    font-style: normal;
    font-weight: 700;
    line-height: 18px; /* 163.636% */
    letter-spacing: 1.1px;
    text-transform: uppercase;
  }
`,ie=c(W)`
  &:first-child.selected {
    background: ${x.white};
    color: ${x.BG1};
    pointer-events: none;
  }

  & + &.selected {
    background: ${x.white};
    color: ${x.BG1};
    pointer-events: none;
  }

  & + & {
    margin-left: 16px;
  }
`,ke=c(g)`
  margin-bottom: 16px;
  padding: 0 36px;
  ${N} {
    margin-bottom: 0;
  }
`,zs=c(dt)`
  && {
    border-bottom: 1px solid ${x.black};
    position: sticky;
    top: 0;
    z-index: 1;
    background-color: ${x.BG1};
  }

  ${f} {
    color: ${x.white};
  }

  ${f}.empty {
    width: 0;
    padding: 0;
  }
`;function Ls(t){return t.charAt(0).toUpperCase()+t.slice(1).toLowerCase()}const Is=({node:t})=>{var s,n,r,l,i,a,o,d,u;return e.jsxs(he,{children:[e.jsx(f,{className:"empty"}),e.jsx(f,{children:(s=t==null?void 0:t.properties)!=null&&s.date_added_to_graph?ye((n=t==null?void 0:t.properties)==null?void 0:n.date_added_to_graph):ye((r=t==null?void 0:t.properties)==null?void 0:r.date)}),e.jsx(f,{children:t==null?void 0:t.node_type}),e.jsx(f,{children:(t==null?void 0:t.node_type)==="Tweet"?e.jsx(He,{href:`${Re}${(l=t==null?void 0:t.properties)==null?void 0:l.tweet_id}${Re.includes("?")?"&":"?"}open=system`,target:"_blank",children:(i=t==null?void 0:t.properties)==null?void 0:i.tweet_id}):e.jsx(He,{href:`${(a=t==null?void 0:t.properties)==null?void 0:a.source_link}${((o=t==null?void 0:t.properties)==null?void 0:o.source_link).includes("?")?"&":"?"}open=system`,target:"_blank",children:(d=t==null?void 0:t.properties)==null?void 0:d.source_link})}),e.jsx(f,{children:(u=t==null?void 0:t.properties)!=null&&u.status?Ls(t.properties.status):"Processing"})]})},He=c.a`
  color: ${x.white};
  text-decoration: underline;
  &:visited {
    color: ${x.white};
  }
`,Bs=h.memo(Is),Rs=({nodes:t})=>{const{open:s}=E("addContent"),n=async()=>{s()};return!t||(t==null?void 0:t.length)===0?e.jsx(e.Fragment,{children:e.jsxs(Es,{children:[e.jsx(As,{children:e.jsx(Rt,{})}),e.jsx(Ms,{children:e.jsx(N,{className:"subtitle",children:"Contribute to the graph by adding your first content."})}),e.jsx(g,{justify:"center",children:e.jsx(W,{color:"secondary",onClick:n,size:"medium",startIcon:e.jsx(Et,{}),type:"submit",variant:"contained",children:"Add Content"})})]})}):e.jsxs(pe,{component:"table",children:[e.jsx(ue,{children:e.jsxs(G,{component:"tr",children:[e.jsx(f,{className:"empty"}),e.jsx(f,{children:"Date"}),e.jsx(f,{children:"Type"}),e.jsx(f,{children:"Source"}),e.jsx(f,{children:"Status"})]})}),e.jsx("tbody",{children:t==null?void 0:t.map(r=>e.jsx(Bs,{node:r},r==null?void 0:r.ref_id))})]})},Es=O(g)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 150px auto;
  width: 100%;
  flex-direction: column;
`,Ms=O(g)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 200px;
  margin-bottom: 25px;
  text-align: center;

  .subtitle {
    color: ${x.GRAY3};
    font-family: Barlow;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`,As=O(g)`
  margin-bottom: 20px;

  svg {
    fill: none;
    height: 60px;
    width: 60px;
  }
`,Os=()=>{const[t,s]=h.useState([]),[n,r]=h.useState(!0),[l,i]=h.useState(10),[a,o]=h.useState(!0),d={only_content:"true",sort_by:"date",limit:l.toString()},u=async()=>{r(!0);try{const p=await mt(d);s(p.nodes),r(!1)}catch(p){console.error("Error fetching data:",p),r(!1)}};h.useEffect(()=>{u()},[l]);const m=()=>{i(l+10),u()};return e.jsx(Fs,{direction:"column",justify:"flex-end",children:e.jsxs(Ws,{align:"center",justify:n?"center":"flex-start",children:[n?e.jsx(z,{color:x.white}):e.jsx(e.Fragment,{children:e.jsx(Rs,{nodes:t})}),!n&&t.length>0&&(a?e.jsx(W,{onClick:m,size:"medium",children:"Load More"}):e.jsx(Hs,{children:"No new nodes available"}))]})})},Fs=c(g)`
  flex: 1;

  .title {
    font-size: 20px;
    color: ${x.white};
    font-family: Barlow;
    font-size: 22px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  .subtitle {
    color: ${x.GRAY3};
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
`,Ws=c(g)`
  min-height: 0;
  overflow: auto;
  flex: 1;
  width: 100%;
`,Hs=c.div`
  margin-top: 10px;
  color: ${x.GRAY3};
  font-family: Barlow;
  font-size: 14px;
`,Ps=({kind:t,shape:s})=>{switch(t){case"small":return se`
        padding: 4px 8px;
        border-radius: ${s==="rounded"?"16px":"8px"};
        height: 32px;
      `;case"big":return se`
        padding: 16px 24px;
        border-radius: ${s==="rounded"?"24px":"8px"};
        height: 48px;
      `;default:return se`
        padding: 8px 16px;
        border-radius: ${s==="rounded"?"32px":"8px"};
        height: 64px;
      `}},Ds=({kind:t})=>{switch(t){case"small":return"regularBold";case"big":return"mediumBold";default:return"regularBold"}},Us=c(g).attrs({align:"center",direction:"row",justify:"center"})`
  border: none;
  cursor: pointer;
  pointer-events: auto;

  ${Ps}

  &:hover {
    opacity: ${({disabled:t})=>t?.5:.9};
  }

  ${({disabled:t})=>t&&se`
      opacity: 0.5;
      pointer-events: none;
    `}
`,Pe=({background:t="primaryButton",children:s,className:n="button",startIcon:r,endIcon:l,disabled:i,id:a,kind:o="regular",onClick:d,onPointerDown:u,shape:m="squared",textColor:p="white",type:b})=>e.jsxs(Us,{as:"button",background:t,className:n,disabled:i,id:a,kind:o,onClick:d,onPointerDown:u,shape:m,type:b,children:[r&&r,e.jsx(N,{color:p,kind:Ds({kind:o}),children:s}),l&&l]}),pt=({message:t="Are you sure you want to delete this item?",onConfirm:s,children:n,anchorOrigin:r={vertical:"bottom",horizontal:"left"},transformOrigin:l={vertical:"top",horizontal:"center"}})=>{const[i,a]=h.useState(null),o=b=>{a(b.currentTarget)},d=()=>{a(null)},u=()=>{s(),d()},m=()=>{d()},p=!!i;return e.jsxs(e.Fragment,{children:[e.jsx("div",{children:re.cloneElement(n,{onClick:o})}),e.jsx(Ys,{anchorEl:i,anchorOrigin:r,onClose:d,open:p,transformOrigin:l,children:e.jsxs(Gs,{children:[e.jsx(N,{className:"message",children:t}),e.jsxs(Vs,{children:[e.jsx(Pe,{background:"primaryBlue",kind:"small",onClick:u,children:"Yes"}),e.jsx(Pe,{background:"white",kind:"small",onClick:m,textColor:"black",children:"No"})]})]})})]})},Gs=c(g)`
  align-items: center;
  background: ${x.BUTTON1};
  color: ${x.white};
  min-width: 124px;
  padding: 18px 8px;
  z-index: 100000;
  box-shadow: 0px 1px 6px 0px rgba(0, 0, 0, 0.2);
  border-radius: 9px;

  .message {
    font-family: Barlow;
    font-size: 16px;
    font-weight: 500;
  }
`,Ys=c($e)`
  && {
    z-index: 9999;
  }
`,Vs=c(g)`
  display: flex;
  flex-direction: row;
  gap: 12px;
  align-items: center;
  margin-top: 16px;
`,qs=({data:t})=>{const s=le(a=>a.setQueuedSources),[n,r]=h.useState(""),l=async a=>{if(t!=null&&t.length)try{const o=await yt.enable();await wt(a,o.pubkey),s(t.filter(d=>d.ref_id!==a))}catch(o){console.warn(o)}},i=async a=>{if(!(!a||!(t!=null&&t.length))){r(a);try{await Ve(a),s(t==null?void 0:t.filter(o=>o.ref_id!==a))}catch(o){console.warn(o)}finally{r("")}}};return t!=null&&t.length?e.jsxs(pe,{component:"table",children:[e.jsx(ue,{children:e.jsxs(G,{component:"tr",children:[e.jsx(f,{className:"empty"}),e.jsx(f,{children:"Type"}),e.jsx(f,{children:"Source"}),e.jsx(f,{}),e.jsx(f,{className:"empty"})]})}),(t==null?void 0:t.length)&&e.jsx("tbody",{children:t==null?void 0:t.map(a=>e.jsxs(he,{children:[e.jsx(f,{className:"empty"}),e.jsx(f,{children:U[a.source_type]}),e.jsx(f,{width:"268px",children:a.source_type==="twitter_handle"?e.jsxs(Ue,{href:`${st}/${a.source}?open=system`,target:"_blank",children:["@",a.source]}):e.jsx(Ue,{href:`${a.source}?open=system`,target:"_blank",children:a.source})}),e.jsx(f,{className:"cell-center",children:e.jsxs(g,{direction:"row",justify:"flex-end",children:[e.jsx(Xs,{className:"approve-wrapper",children:e.jsx(De,{className:"centered",onClick:()=>l(a.ref_id),children:e.jsx(bt,{color:x.primaryGreen,fontSize:24})})}),e.jsx("div",{className:"delete-wrapper",children:n===a.ref_id?e.jsx(z,{color:x.white,size:16}):e.jsx(pt,{message:"Are you sure ?",onConfirm:()=>i(a.ref_id),children:e.jsx(De,{className:"centered",children:e.jsx(jt,{color:x.primaryRed,fontSize:24})})})})]})}),e.jsx(f,{className:"empty"})]},a.source))})]}):e.jsxs(g,{children:[e.jsx(N,{children:"There is not any results for selected filters"}),e.jsx(je,{})]})},De=c(g)`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  cursor: pointer;
  background: transparent;
  color: ${x.lightBlue500};
  &.centered {
    margin: 0 auto;
  }

  & + & {
    margin-left: 4px;
  }
`,Ue=c.a`
  color: ${x.white};
  text-decoration: underline;
  &:visited {
    color: ${x.white};
  }
  &:hover {
    cursor: pointer;
  }
`,Xs=c.div`
  margin-right: 40px;
`,Ks=()=>{const[t,s]=h.useState(!0),[n,r]=h.useState(""),[l,i]=le(d=>[d.queuedSources,d.setQueuedSources]);h.useEffect(()=>{(async()=>{s(!0);try{const u=await qe({approved:"False"});i(u.data)}catch(u){console.warn(u)}finally{s(!1)}})()},[i]);const a=d=>{r(n===d||!d?"":d)},o=l==null?void 0:l.filter(d=>!n||d.source_type===n);return e.jsxs(Qs,{align:"stretch",direction:"column",justify:"flex-end",children:[e.jsxs(ke,{align:"flex-start",justify:"space-between",children:[e.jsx(N,{className:"title",children:"Queued Sources"}),e.jsx(N,{className:"subtitle",children:"This is a queue of pending sources waiting for approval or denial from graph users. If you think a source will provide good content for the graph, you can pay to approve it. Think of this as an investment: you pay to add it to the source table, and if the content is popular you will earn from it. If content is not relevant to the graph, you should deny it."})]}),e.jsxs(g,{className:"filters",direction:"row",pb:16,px:36,children:[e.jsx(ie,{className:ae({selected:!n}),onClick:()=>a(""),size:"small",children:"All"}),Object.keys(U).map(d=>e.jsx(ie,{className:ae({selected:d===n}),onClick:()=>a(d),size:"small",children:U[d]},d))]}),e.jsx(Js,{align:"center",justify:t?"center":"flex-start",children:t?e.jsx(z,{color:x.white}):e.jsx(qs,{data:o})})]})},Qs=c(g)`
  flex: 1;

  .title {
    margin-bottom: 32px;
    font-size: 20px;
    color: ${x.white};
    font-family: Barlow;
    font-size: 22px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  .subtitle {
    color: ${x.GRAY3};
    font-family: Barlow;
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  & .filters {
    overflow-x: auto;
  }
`,Js=c(g)`
  min-height: 0;
  overflow: auto;
  flex: 1;
  width: 100%;
`,xt=({onSearch:t,placeholder:s,activeIcon:n,defaultIcon:r,loadingIcon:l,loading:i,...a})=>{const[o,d]=h.useState(""),u=()=>{d(""),t("")},m=h.useCallback(y=>{t(y)},[t]),p=h.useMemo(()=>we.debounce(m,300),[m]),b=y=>{const C=y.target.value.trim(),{value:w}=y.target;d(w),C?p(C):u()},j=()=>i?e.jsx(Ge,{children:e.jsx(fe,{type:"button",children:l})}):e.jsx(Ge,{children:o?e.jsx(fe,{onClick:u,type:"button",children:n}):e.jsx(fe,{type:"button",children:r})});return e.jsxs(Zs,{children:[e.jsx(eo,{autoComplete:"off",autoCorrect:"off",inputProps:{"aria-label":"search"},onChange:b,placeholder:s,value:o,...a}),j()]})},Ge=c(g)`
  top: -50%;
  right: -3%;
  z-index: 3;
  position: absolute;
  transform: translate(-50%, 50%);
`,fe=c(q)`
  font-size: 24px;
`,Zs=c(Yt)`
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
`,eo=c(Vt)`
  -webkit-autofill,
  -webkit-autocomplete,
  -webkit-contacts-auto-fill,
  -webkit-credentials-auto-fill {
    display: none !important;
    visibility: hidden !important;
    pointer-events: none !important;
    position: absolute !important;
    right: 0 !important;
  }

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
    background-color: ${x.BG2};
    padding: 0px 34px 0px 16px !important;
    box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);

    &:focus,
    &:active {
      color: ${x.white};
      background-color: ${x.BG2_ACTIVE_INPUT};
      outline: 1px solid ${x.primaryBlue};
    }

    &:hover {
      background-color: ${x.BG2_ACTIVE_INPUT};
    }

    &::placeholder {
      font-size: 15px;
      text-align: left;
      font-weight: 500;
      line-height: 16px;
      letter-spacing: 0em;
      font-family: Barlow;
      color: ${x.GRAY7};
    }
  }
  width: 100%;
`,to=t=>e.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 21 21",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M13.8 9.97481L5.82503 1.9998H18C18.4167 1.9998 18.7167 2.18314 18.9 2.5498C19.0834 2.91647 19.05 3.26647 18.8 3.5998L13.8 9.97481ZM18.775 20.5998L13 14.8248V16.9998C13 17.2831 12.9042 17.5206 12.7125 17.7123C12.5209 17.904 12.2834 17.9998 12 17.9998H10C9.71669 17.9998 9.47919 17.904 9.28753 17.7123C9.09586 17.5206 9.00002 17.2831 9.00002 16.9998V10.8248L0.400024 2.2248L1.80002 0.799805L20.2 19.1998L18.775 20.5998Z",fill:"currentColor"})}),so=({data:t,canEdit:s=!1})=>{const n=le(o=>o.setSources),[r,l]=h.useState(""),i=async(o,d)=>{if(t!=null&&t.length)try{await $t(o,d);const u=t==null?void 0:t.findIndex(p=>p.ref_id===o),m=[...t];m[u]={...m[u],source:d.source},n(m)}catch(u){console.warn(u)}},a=async o=>{if(!(!o||!(t!=null&&t.length))){l(o);try{await Ve(o),n(t==null?void 0:t.filter(d=>d.ref_id!==o))}catch(d){console.warn(d)}finally{l("")}}};return t!=null&&t.length?e.jsxs(pe,{"aria-label":"a dense table",component:"table",id:"sources-table",size:"small",children:[e.jsx(ue,{children:e.jsxs(G,{component:"tr",children:[e.jsx(f,{className:"empty"}),e.jsx(f,{children:"Type"}),e.jsx(f,{align:"left",children:"Source"}),s&&e.jsx(f,{align:"left"}),e.jsx(f,{className:"empty"})]})}),e.jsx(cs,{component:"tbody",children:t==null?void 0:t.map(o=>e.jsxs(he,{children:[e.jsx(f,{className:"empty"}),e.jsx(f,{align:"left",children:U[o.source_type]}),e.jsx(f,{align:"left",children:e.jsx(oo,{condition:s,wrapper:d=>e.jsx(no,{id:o.ref_id,onSave:u=>i(o.ref_id,{source:u,source_type:o.source_type}),value:o.source,children:d}),children:o.source_type===_e||o.source_type===Ne||o.source_type===ze?e.jsxs(e.Fragment,{children:[o.source_type===_e&&e.jsxs(me,{href:`${st}/${o.source}`,target:"_blank",children:["@",o.source]}),o.source_type===Ne&&e.jsx(me,{href:`${o.source}${o.source.includes("?")?"&":"?"}open=system`,target:"_blank",children:o.source}),o.source_type===ze&&e.jsx(me,{href:o.source,target:"_blank",children:o.source})]}):e.jsx("div",{children:o.source})})}),s&&e.jsx(f,{align:"left",children:e.jsx("div",{className:"delete-wrapper",id:`delete-${o.source}`,children:r===o.ref_id?e.jsx(ht,{"data-testid":`delete-loader-${o.ref_id}`,children:e.jsx(z,{color:x.white,size:16})}):e.jsx(pt,{"data-testid":`delete-icon-${o.ref_id}`,message:"Are you sure?",onConfirm:()=>a(o.ref_id),children:e.jsx(oe,{className:"centered","data-testid":`delete-icon-${o.ref_id}`,children:e.jsx(Mt,{})})})})}),e.jsx(f,{className:"empty"})]},o.source))})]}):e.jsxs(ao,{children:[e.jsx(to,{}),e.jsx(N,{className:"text",children:"There is not any results for selected filters"})]})};function oo({condition:t,wrapper:s,children:n}){return t?s(n):n}const no=({value:t,onSave:s,id:n,children:r})=>{const[l,i]=h.useState(!1),[a,o]=h.useState(t),[d,u]=h.useState(!1),m=async()=>{if(n){u(!0);try{await s(a),i(!1)}catch(p){console.warn(p)}finally{u(!1)}}};return e.jsx("div",{children:l?e.jsxs(ro,{align:"center",direction:"row",children:[e.jsx(Ct,{className:"editable-cell__input",name:"cell-input",onChange:p=>o(p),value:a}),e.jsx(oe,{align:"center",justify:"center",children:d?e.jsx(ht,{"data-testid":`edit-loader-${n}`,children:e.jsx(z,{color:x.white,size:12})}):e.jsx(vt,{"data-testid":`check-icon-${n}`,onClick:m})}),e.jsx(oe,{align:"center",className:"secondary",justify:"center",onClick:()=>i(!1),children:e.jsx(Tt,{})})]}):e.jsxs(io,{direction:"row",children:[e.jsx("div",{className:"name",children:r}),e.jsx("div",{className:"spacer"}),e.jsx(oe,{onClick:()=>i(!0),children:e.jsx(At,{"data-testid":`edit-icon-${n}`})})]})})},ro=c(g)`
  display: flex;
  width: 250px;
  border: 2px solid ${x.lightBlue300};
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
`,oe=c(g)`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  cursor: pointer;
  background: transparent;
  align-items: center;
  justify-content: center;
  display: flex;
  &.centered {
    margin: 0 auto;
    color: ${x.secondaryRed};
  }

  & + & {
    margin-left: 4px;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`,ao=c(g)`
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
    color: ${x.GRAY6};
  }

  svg {
    color: ${x.GRAY6};
  }
`,io=c(g)`
  display: flex;
  padding: 4px;
  position: relative;
  width: 100%;
  align-items: center;

  .name {
    flex: 1;
  }

  .spacer {
    flex: 1;
  }
`,me=c.a`
  color: ${x.white};
  text-decoration: underline;
  max-width: 400px;
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  &:visited {
    color: ${x.white};
  }
  &:hover {
    color: ${x.SOURCE_TABLE_LINK};
  }
`,ht=c(g)`
  display: flex;
  justify-content: center;
  align-items: center;
`,lo=()=>{const[t,s]=h.useState(!0),[n,r]=h.useState(""),[l,i]=le(p=>[p.sources,p.setSources]),[a]=Xe(p=>[p.isAdmin]),[o,d]=h.useState("");h.useEffect(()=>{(async()=>{s(!0);try{const b=await qe();i(b.data)}catch(b){console.warn(b)}finally{s(!1)}})()},[i]);const u=p=>{r(n===p||!p?"":p)},m=h.useMemo(()=>l==null?void 0:l.filter(p=>(!n||p.source_type===n)&&(p.source.toLowerCase().startsWith(o.toLowerCase())||p.source.toLowerCase().includes(o.toLowerCase())||`@${p.source.toLowerCase()}`.startsWith(o.toLowerCase())||`@${p.source.toLowerCase()}`.includes(o.toLowerCase()))),[o,n,l]);return e.jsxs(co,{align:"stretch",direction:"column",justify:"flex-end",children:[e.jsx(ke,{align:"center",direction:"row",justify:"space-between",children:e.jsx(N,{className:"title",children:"Sources for this Graph"})}),e.jsx(xo,{children:e.jsx(xt,{activeIcon:e.jsx(te,{}),defaultIcon:e.jsx(Je,{}),loading:t,loadingIcon:e.jsx(z,{color:x.lightGray,size:24}),onSearch:d,placeholder:"Find Source"})}),e.jsxs(g,{className:"filters",direction:"row",pb:16,px:36,children:[e.jsx(ie,{className:ae({selected:!n}),onClick:()=>u(""),size:"small",children:"All"}),Object.keys(U).map(p=>e.jsx(ie,{className:ae({selected:p===n}),onClick:()=>u(p),size:"small",children:U[p]},p))]}),e.jsx(po,{align:"center",justify:t?"center":"flex-start",children:t?e.jsx(z,{color:x.white}):e.jsx(so,{canEdit:a,data:m})})]})},co=c(g)`
  flex: 1;
  .title {
    font-size: 20px;
    color: ${x.white};
    font-family: Barlow;
    font-size: 22px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  & .filters {
    overflow-x: auto;
  }
`,po=c(g)`
  min-height: 0;
  overflow: auto;
  flex: 1;
  width: 100%;
`,xo=c(g)`
  margin: 0 0 16px 36px;
`,ho=({selectedType:t,setSelectedType:s})=>{const[n,r]=h.useState([]);h.useEffect(()=>{(async()=>{try{const{data:o}=await St();r(o.edge_types)}catch(o){console.warn(o)}})()},[r]);const l=a=>({label:a,value:a}),i=a=>{s((a==null?void 0:a.value)||"")};return e.jsx(Se,{onSelect:i,options:n.map(l),selectedValue:t?l(t):null})},uo=({onSelect:t,selectedValue:s,topicId:n})=>{const[r,l]=h.useState([]),[i,a]=h.useState(!1),o=h.useMemo(()=>{const b=async j=>{const y={is_muted:"False",sort_by:Te,search:j,skip:"0",limit:"1000"};a(!0);try{const w=(await Qe(y.search)).data.filter($=>($==null?void 0:$.ref_id)!==n);l(w)}catch{l([])}finally{a(!1)}};return we.debounce(b,300)},[n]),d=b=>{const j=b.trim();if(!j){l([]);return}j.length>2&&o(b)},u=b=>{const j=b?r.find(y=>y.ref_id===b.value):null;t(j||null)},m=b=>({label:b.search_value,value:b.ref_id,type:b.node_type}),p=b=>b.map(m);return s?e.jsxs(g,{align:"center",basis:"100%",direction:"row",grow:1,shrink:1,children:[e.jsx("span",{children:s.search_value}),e.jsx(ot,{onClick:()=>t(null),size:"medium",children:e.jsx(te,{})})]}):e.jsx(Se,{handleInputChange:d,isLoading:i,onSelect:u,options:p(r)||Ke,selectedValue:s?m(s):null})},go=({from:t,onSelect:s,selectedType:n,setSelectedType:r,isSwapped:l,setIsSwapped:i,selectedToNode:a})=>e.jsxs(g,{mb:20,children:[e.jsx(g,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(g,{align:"center",direction:"row",children:e.jsx(fo,{children:"Add edge"})})}),e.jsxs(jo,{swap:l,children:[e.jsx(g,{children:e.jsx(yo,{disabled:!0,label:l?"To":"From",swap:l,value:t==null?void 0:t.name})}),e.jsxs(g,{my:16,children:[e.jsx(bo,{children:"Type"}),e.jsx(ho,{selectedType:n,setSelectedType:r})]}),e.jsx(g,{children:e.jsxs(wo,{children:[e.jsx(Co,{children:l?"From":"To"}),e.jsx(uo,{onSelect:s,selectedValue:a,topicId:t==null?void 0:t.ref_id})]})}),e.jsxs(mo,{children:[e.jsx(vo,{children:e.jsx(Ze,{})}),e.jsx(To,{onClick:i,children:e.jsx(et,{})}),e.jsx($o,{children:e.jsx(tt,{})})]})]})]}),fo=c(N)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,mo=c.div`
  position: absolute;
  top: 26px;
  bottom: 26px;
  left: 4px;
  width: 35px;
  border-left: 1.5px solid #6b7a8d4d;
  border-top: 1.5px solid #6b7a8d4d;
  border-bottom: 1.5px solid #6b7a8d4d;
  border-radius: 12px 0 0 12px;
`,bo=c.label`
  color: #bac1c6;
  font-size: 13px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0.01em;
  text-align: left;
  margin-bottom: 6px;
`,jo=c.div`
  position: relative;
  color: white;
  font-family: 'Barlow';
  display: flex;
  flex-direction: ${t=>t.swap?"column-reverse":"column"};
  margin-bottom: 10px;
  padding-left: 38px;
`,yo=c(it)`
  position: relative;
  width: 100%;
  padding: 16px;
  gap: 10px;
  border-radius: 6px;
  border: 1px solid #6b7a8d4d;
  opacity: 0px;
  display: flex;
`,wo=c.div`
  position: relative;
  width: 100%;
  padding: 15px;
  gap: 10px;
  border-radius: 6px;
  border: 1.4px solid #6b7a8d4d;
  opacity: 0px;
  display: flex;
  align-items: center;
`,Co=c.label`
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
`,vo=c.div`
  position: absolute;
  top: 0;
  right: 0;
  transform: translateY(-50%) translateX(50%);
  color: #23252f;
`,To=c.div`
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
`,$o=c.div`
  position: absolute;
  bottom: 0;
  right: 0;
  transform: translateY(10px) translateX(3px);
  color: #6b7a8d;
  line-height: 1;
`,So=({topic:t,onClose:s})=>{const{close:n}=E("addEdge"),[r]=B(w=>[w.data]),l=Ce({mode:"onChange"}),[i,a]=h.useState(!1),[o,d]=h.useState(!1),[u,m]=h.useState(""),[p,b]=h.useState(null),j=()=>{s(),n()},y=async()=>{if(!(!p||!r)){d(!0);try{await kt({from:t.ref_id,to:p==null?void 0:p.ref_id,relationship:u});const{ref_id:w}=t,{ref_id:$}=p;if(r){const S={...r};S[w]={...S[w],edgeList:[...S[w].edgeList,u]},S[$]&&(S[$]={...S[$],edgeList:[...S[$].edgeList,u]}),B.setState({data:S})}j()}catch(w){console.warn(w)}finally{d(!1)}}},C=o||!p||!u;return e.jsx(ce,{id:"addEdge",kind:"small",onClose:j,preventOutsideClose:!0,children:e.jsxs(ve,{...l,children:[e.jsx(go,{from:t,isSwapped:i,onSelect:b,selectedToNode:p,selectedType:u,setIsSwapped:()=>a(!i),setSelectedType:m}),e.jsxs(ko,{color:"secondary",disabled:C,onClick:y,size:"large",variant:"contained",children:["Confirm",o&&e.jsx(_o,{children:e.jsx(z,{color:x.lightGray,size:12})})]})]})})},ko=c(W)`
  width: 293px !important;
  margin: 0 0 10px auto !important;
`,_o=c.span`
  margin-top: 2px;
`,No=()=>e.jsxs(g,{children:[e.jsx(g,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(g,{align:"center",direction:"row",children:e.jsx(zo,{children:"Edit topic"})})}),e.jsx(g,{mb:12,children:e.jsx(_t,{id:"cy-topic",maxLength:50,name:"name",placeholder:"Add your topic",rules:{...Nt}})})]}),zo=c(N)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,Lo=({topic:t,onClose:s})=>{const{close:n}=E("editTopic"),[r]=B(w=>[w.data]),l=Ce({mode:"onChange"}),{watch:i,setValue:a,reset:o,getValues:d}=l,[u,m]=h.useState(!1);h.useEffect(()=>(t&&a("name",t==null?void 0:t.name),()=>{o()}),[t,a,o]);const p=i("name"),b=p==null?void 0:p.trim(),j=()=>{s(),n()},y=async()=>{m(!0);try{if(await de(t==null?void 0:t.ref_id,{node_type:t==null?void 0:t.node_type,node_data:{name:b}}),r){const w={...r};w[t==null?void 0:t.ref_id].name=b,B.setState({data:w})}j()}catch(w){console.warn(w)}finally{m(!1)}},C=d().name&&(t==null?void 0:t.name)!==d().name;return e.jsx(ce,{id:"editTopic",kind:"regular",onClose:j,preventOutsideClose:!0,children:e.jsxs(ve,{...l,children:[e.jsx(No,{}),e.jsxs(W,{color:"secondary",disabled:u||!b||!C,onClick:y,size:"large",variant:"contained",children:["Save Changes",u&&e.jsx(Io,{children:e.jsx(z,{color:x.lightGray,size:12})})]})]})})},Io=c.span`
  margin-top: 2px;
`,Bo=({topicId:t,onSelect:s,selectedValue:n,dataId:r})=>{const[l,i]=h.useState([]),[a,o]=h.useState(!1),d=h.useMemo(()=>{const j=async y=>{const C={is_muted:"False",sort_by:Te,search:y,skip:"0",limit:"1000"};o(!0);try{const $=(await Qe(C.search)).data.filter(S=>(S==null?void 0:S.ref_id)!==t);i($)}catch{i([])}finally{o(!1)}};return we.debounce(j,300)},[t]),u=j=>{const y=j.trim();if(!y){i([]);return}y.length>2&&d(j)},m=j=>{const y=j?l.find(C=>C.ref_id===j.value):null;s(y||null)},p=j=>({label:j.search_value,value:j.ref_id,type:j.node_type}),b=j=>j.map(p);return n?e.jsxs(g,{align:"center",basis:"100%",direction:"row",grow:1,shrink:1,children:[e.jsx("span",{children:n.search_value}),e.jsx(ot,{onClick:()=>s(null),size:"medium",children:e.jsx(te,{})})]}):e.jsx(Se,{dataId:r,handleInputChange:u,isLoading:a,onSelect:m,options:b(l)||Ke,selectedValue:n?p(n):null})},Ro=({from:t,onSelect:s,selectedToNode:n,isSwapped:r,setIsSwapped:l})=>{var o;const i=t==null?void 0:t.map(d=>d.name).join(", "),a=t&&t.length===1?t[0].name:`${i==null?void 0:i.substring(0,25)} ...`;return e.jsxs(g,{mb:20,children:[e.jsx(g,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(g,{align:"center",direction:"row",children:e.jsx(Eo,{children:"Merge topic"})})}),e.jsxs(Oo,{swap:r,children:[e.jsx(Mo,{children:e.jsx(Fo,{disabled:!0,label:r?"To":"From",swap:r,value:a})}),e.jsxs(g,{my:16,children:[e.jsx(Ho,{children:"Type"}),e.jsx(N,{children:"IS ALIAS"})]}),e.jsx(g,{children:e.jsxs(Wo,{children:[e.jsx(Po,{children:r?"From":"To"}),e.jsx(Bo,{dataId:"to-node",onSelect:s,selectedValue:n,topicId:(o=t[t.length-1])==null?void 0:o.ref_id})]})}),e.jsxs(Ao,{children:[e.jsx(Do,{children:e.jsx(Ze,{})}),e.jsx(Uo,{"data-testid":"swap-icon",disabled:(t==null?void 0:t.length)!==1,onClick:(t==null?void 0:t.length)===1?l:void 0,children:e.jsx(et,{})}),e.jsx(Go,{children:e.jsx(tt,{})})]})]})]})},Eo=c(N)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,Mo=c(g)`
  flex: 1 1 100%;
`,Ao=c.div`
  position: absolute;
  top: 26px;
  bottom: 26px;
  left: 4px;
  width: 35px;
  border-left: 1.5px solid #6b7a8d4d;
  border-top: 1.5px solid #6b7a8d4d;
  border-bottom: 1.5px solid #6b7a8d4d;
  border-radius: 12px 0 0 12px;
`,Oo=c.div`
  position: relative;
  color: white;
  font-family: 'Barlow';
  display: flex;
  flex-direction: ${t=>t.swap?"column-reverse":"column"};
  margin-bottom: 10px;
  padding-left: 38px;
`,Fo=c(it)`
  position: relative;
  width: 100%;
  padding: 16px;
  gap: 10px;
  border-radius: 6px;
  border: 1px solid #6b7a8d4d;
  opacity: 0px;
  display: flex;
`,Wo=c.div`
  position: relative;
  width: 100%;
  padding: 15px;
  gap: 10px;
  border-radius: 6px;
  border: 1.4px solid #6b7a8d4d;
  opacity: 0px;
  display: flex;
  align-items: center;
`,Ho=c.label`
  color: #bac1c6;
  font-size: 13px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0.01em;
  text-align: left;
  margin-bottom: 6px;
`,Po=c.label`
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
`,Do=c.div`
  position: absolute;
  top: 0;
  right: 0;
  transform: translateY(-50%) translateX(50%);
  color: #23252f;
`,Uo=c.div`
  position: absolute;
  color: transparent;
  top: 50%;
  left: 0;
  transform: translateY(-50%) translateX(-50%);
  cursor: ${t=>t.disabled?"not-allowed":"pointer"};
  width: 32px;
  height: 32px;
  background-color: #303342;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
`,Go=c.div`
  position: absolute;
  bottom: 0;
  right: 0;
  transform: translateY(10px) translateX(3px);
  color: #6b7a8d;
  line-height: 1;
`,Yo=({onClose:t,multiTopics:s})=>{const{close:n}=E("mergeTopic"),r=Ce({mode:"onChange"}),{setValue:l,reset:i}=r,[a,o]=h.useState(!1),[d,u]=h.useState(!1),[m,p]=h.useState(null);h.useEffect(()=>{if(s&&s.length>0){const y=s.map(C=>C.name).join(", ");l("name",y)}return()=>{i()}},[s,l,i]);const b=()=>{t(),n()},j=async()=>{o(!0);const y=s==null?void 0:s.map(C=>C.ref_id).filter(C=>!!C);try{y.length&&m&&(await zt({from:y,to:m==null?void 0:m.ref_id}),B.setState(C=>({ids:C.ids.filter(w=>!y.includes(w)),total:C.total-y.length})),b())}catch(C){console.warn(C)}finally{o(!1)}};return e.jsx(ce,{id:"mergeTopic",kind:"small",onClose:b,preventOutsideClose:!0,children:e.jsxs(ve,{...r,children:[e.jsx(Ro,{from:s,isSwapped:d,onSelect:p,selectedToNode:m,setIsSwapped:()=>u(!d)}),e.jsxs(Vo,{color:"secondary","data-testid":"merge-topics-button",disabled:a||!m,onClick:j,size:"large",variant:"contained",children:["Merge topics",a&&e.jsx(qo,{children:e.jsx(z,{color:x.lightGray,size:12})})]})]})})},Vo=c(W)`
  width: 293px !important;
  margin: 0 0 10px auto !important;
`,qo=c.span`
  margin-top: 2px;
`,Xo=({topic:t,onClick:s,onSearch:n,checkedStates:r,setCheckedStates:l,isMuteDisabled:i})=>{const[a,o]=B(k=>[k.ids,k.total]),[d,u]=h.useState(!1),[m,p]=h.useState(!1),b=ye(t.date_added_to_graph),j=async(k,v)=>{u(!0);try{await de(k,{node_type:t==null?void 0:t.node_type,node_data:{is_muted:v}}),B.setState({ids:a.filter(_=>_!==k),total:o-1})}catch(_){console.warn(_)}},y=k=>{l(v=>({...v,[k]:!v[k]}))},C=(k,v)=>{var _;(_=window.getSelection())!=null&&_.toString()?k.preventDefault():n(v.name)},w=t.edgeList.slice(0,1),$=t.edgeList.length-w.length,[S,A]=re.useState(null),F=k=>{A(k.currentTarget),p(!0)},L=()=>{p(!1)},H=!!S&&m,R=r[t.ref_id]?"visible":"";return e.jsxs(he,{className:r[t.ref_id]?"checked":"",children:[e.jsx(f,{children:e.jsx(Jo,{className:`checkbox-section ${R}`,"data-testid":"topic-check-box",onClick:()=>y(t.ref_id),children:e.jsx(Zo,{checked:r[t.ref_id],children:e.jsx(en,{children:r[t.ref_id]&&e.jsx(lt,{})})})})}),e.jsx(f,{onClick:k=>C(k,t),children:e.jsx(Qo,{children:t.name})}),e.jsx(f,{children:t.node_type}),e.jsx(f,{children:e.jsx(tn,{children:t.edgeCount})}),e.jsxs(f,{children:[e.jsx($e,{anchorEl:S,anchorOrigin:{vertical:"top",horizontal:"center"},disableRestoreFocus:!0,id:"mouse-over-popover",onClose:L,onMouseEnter:()=>p(!0),onMouseLeave:L,open:H,sx:{pointerEvents:"auto","& .MuiPaper-root":{backgroundColor:"rgba(0, 0, 0, 0.9)",borderRadius:"4px",width:"160px",maxHeight:"200px",overflowY:"scroll"}},transformOrigin:{vertical:"bottom",horizontal:"center"},children:e.jsx(Ee,{sx:{p:1.5,fontSize:"13px",fontWeight:400,lineHeight:"1.8",wordWrap:"break-word"},children:t.edgeList.join(", ")})}),w.join(", "),$>0&&e.jsx(Ee,{"aria-haspopup":"true","aria-owns":H?"mouse-over-popover":void 0,component:"span",onMouseEnter:F,onMouseLeave:L,sx:{cursor:"pointer"},children:",..."})]}),e.jsx(f,{children:e.jsx("span",{children:b})}),e.jsx(f,{className:"cell-center",children:e.jsx(g,{direction:"row",justify:"space-between",children:e.jsx("div",{className:"approve-wrapper",children:d?e.jsx(Ko,{children:e.jsx(z,{color:x.white,size:16})}):e.jsxs(g,{direction:"row",children:[t.is_muted?e.jsx(q,{className:"centered",disabled:i,onClick:()=>j(t.ref_id,!1),children:e.jsx(Ot,{})}):e.jsx(q,{className:"centered",disabled:i,onClick:()=>j(t.ref_id,!0),children:e.jsx(Ft,{})}),e.jsx(q,{disabled:i,onClick:k=>s(k,t.ref_id),children:e.jsx(Wt,{"data-testid":"ThreeDotsIcons"})})]})})})})]},t.name)},Ko=c.span`
  margin-left: 12px;
`,Qo=c.span`
  cursor: pointer;
  :hover {
    text-decoration: underline;
  }
`,Jo=c.td`
  visibility: hidden;
  cursor: pointer;
  display: flex;
  align-items: center;

  &.visible {
    visibility: visible;
  }
`,Zo=c.div`
  width: 14px;
  height: 14px;
  border-radius: 4px;
  border: ${({checked:t})=>t?"#618AFF":"2px solid #CCCCCC"};
  background-color: ${({checked:t})=>t?"#618AFF":"transparent"};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 12px;
`,en=c.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 2px;
  background-color: transparent;
`,tn=c.span`
  display: flex;
  align-items: center;
  justify-content: center;
`,sn=h.memo(Xo),on=({setShowMuteUnmute:t,showMuted:s,loading:n,onTopicEdit:r,onChangeFilter:l,checkedStates:i,setCheckedStates:a})=>{const{close:o}=E("sourcesTable"),[d,u]=h.useState(!1),[m,p]=re.useState(null),[b,j]=re.useState(""),y=Object.values(i).filter(T=>T).length,[C,w]=Lt(T=>[T.setSearchFormValue,T.setCurrentSearch]),[$,S,A]=B(T=>[T.data,T.ids,T.total]),F=h.useCallback((T,P)=>{p(T.currentTarget),j(P)},[]),L=()=>{p(null)},H=T=>{C(T),w(T),o()},R=T=>{r(b,T),L()},k=T=>{l(T)},v=!!m,_=v?"simple-popover":void 0,M=async()=>{u(!0);try{const T=Object.keys(i).map(async Y=>{if(i[Y])try{return await de(Y,{node_data:{is_muted:!s}}),Y}catch(ut){return console.error("Error updating node data:",ut),null}return null}),P=await Promise.all(T);B.setState({ids:S.filter(Y=>!P.includes(Y)),total:A-P.length}),a({}),u(!1)}catch(T){console.error("Error:",T),u(!1)}};return!n&&!$?e.jsxs(g,{children:[e.jsx(N,{children:"There is not any results for selected filters"}),e.jsx(je,{})]}):e.jsx(e.Fragment,{children:$&&!Object.keys($).length?e.jsxs(g,{children:[e.jsx(N,{children:"There is not any results for selected filters"}),e.jsx(je,{})]}):e.jsxs(xn,{align:"center",justify:d?"center":"flex-start",children:[e.jsxs(pe,{component:"table",children:[y>0?e.jsx(zs,{children:e.jsxs(G,{component:"tr",children:[e.jsx(f,{children:e.jsx(q,{onClick:()=>a({}),children:e.jsx(te,{})})}),e.jsx(f,{colSpan:12,children:e.jsxs(pn,{children:[e.jsxs(dn,{children:[e.jsx(cn,{children:y}),"selected"]}),e.jsx(f,{className:"empty"}),e.jsx(Ye,{onClick:M,role:"button",children:s?e.jsxs(e.Fragment,{children:[e.jsx(Le,{})," Unmute ALL"]}):e.jsxs(e.Fragment,{children:[e.jsx(Ie,{})," Mute ALL"]})}),e.jsx(f,{className:"empty"}),e.jsxs(Ye,{onClick:()=>R("mergeTopic"),children:[e.jsx(Be,{})," Merge"]})]})}),e.jsx(f,{className:"empty"})]})}):e.jsx(ue,{children:e.jsxs(G,{component:"tr",children:[e.jsx(f,{className:"empty"}),e.jsx(f,{children:e.jsxs(be,{onClick:()=>k(Te),children:["Name ",e.jsx(ge,{})]})}),e.jsx(f,{children:"Type"}),e.jsx(f,{children:e.jsxs(be,{onClick:()=>k(Dt),children:["Count ",e.jsx(ge,{})]})}),e.jsx(f,{children:"Edge list"}),e.jsx(f,{children:e.jsxs(be,{onClick:()=>k(Ut),children:["Date ",e.jsx(ge,{})]})}),e.jsx(f,{children:e.jsx(g,{px:8,children:e.jsxs(nn,{onClick:t,children:[e.jsx(rn,{checked:s,children:e.jsx(an,{children:s&&e.jsx(lt,{})})}),"Muted"]})})})]})}),(n||d)&&!$&&e.jsx(hn,{children:e.jsx(z,{color:x.white})}),$&&e.jsx("tbody",{children:S==null?void 0:S.map(T=>e.jsx(sn,{checkedStates:i,isMuteDisabled:Object.values(i).filter(P=>P).length>1,onClick:F,onSearch:H,setCheckedStates:a,topic:$[T]},T))})]}),b?e.jsxs(ln,{anchorEl:m,anchorOrigin:{vertical:"bottom",horizontal:"right"},id:_,onClose:L,open:v,transformOrigin:{vertical:"top",horizontal:"right"},children:[s?e.jsxs(V,{"data-testid":"unmute",onClick:()=>R("unMute"),children:[" ",e.jsx(Le,{"data-testid":""})," Unmute"]}):e.jsxs(V,{"data-testid":"mute",onClick:()=>R("mute"),children:[" ",e.jsx(Ie,{"data-testid":"VisibilityOff"})," Mute"]}),e.jsxs(V,{"data-testid":"rename",onClick:()=>R("editTopic"),children:[e.jsx(Ht,{"data-testid":"EditTopicIcon"})," Rename"]}),e.jsxs(V,{"data-testid":"merge",onClick:()=>R("mergeTopic"),children:[e.jsx(Be,{"data-testid":"MergeIcon"})," Merge"]}),e.jsxs(V,{"data-testid":"add_edge",onClick:()=>R("addEdge"),children:[e.jsx(Pt,{"data-testid":"AddCircleIcon"})," Add edge"]})]}):null]})})},nn=c.td`
  cursor: pointer;
  display: flex;
  align-items: center;
`,rn=c.div`
  width: 14px;
  height: 14px;
  border-radius: 4px;
  border: ${({checked:t})=>t?"#618AFF":"2px solid #CCCCCC"};
  background-color: ${({checked:t})=>t?"#618AFF":"transparent"};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 8px;
`,an=c.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 2px;
  background-color: transparent;
`,be=c.span`
  cursor: pointer;
  display: flex;
  gap: 4px;
  align-items: center;
`,V=c(g).attrs({direction:"row",px:12,py:8})`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 12px;
  cursor: pointer;
  background: ${x.BUTTON1};
  color: ${x.white};

  &:hover {
    background: ${x.BUTTON1_HOVER};
    color: ${x.GRAY3};
  }
`,ln=c($e)`
  && {
    z-index: 9999;
  }
  .MuiPaper-root {
    min-width: 149px;
    color: ${x.GRAY3};
    box-shadow: 0px 1px 6px 0px rgba(0, 0, 0, 0.2);
    border-radius: 6px;
    z-index: 1;
    font-family: Barlow;
    font-size: 14px;
    font-weight: 500;
  }
`,cn=c.span`
  font-family: Barlow;
  font-size: 13px;
  font-weight: 500;
  margin-right: 4px;
  margin-top: 1px;
`,Ye=c.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  flex-wrap: nowrap;
  gap: 8px;
  padding: 1px 8px;
  white-space: nowrap;
  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
    padding: 1px 8px;
    border-radius: 4px;
  }
`,dn=c.div`
  display: flex;
  align-items: center;
  gap: 2px;
`,pn=c.span`
  display: flex;
  align-items: center;
  gap: 27px;
`,xn=c(g)`
  min-height: 0;
  overflow: auto;
  flex: 1;
  width: 100%;
  position: relative;
`,hn=c.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
`,un=()=>{const[t,s,n,r,l,i,a,o]=B(v=>[v.data,v.ids,v.total,v.setTopics,v.filters,v.setFilters,v.terminate,v.loading]),{open:d}=E("editTopic"),{open:u}=E("mergeTopic"),{open:m}=E("addEdge"),[p,b]=h.useState(null),[j,y]=h.useState([]),[C,w]=h.useState({}),$={editTopic:d,mergeTopic:u,addEdge:m},S=h.useRef([]);h.useEffect(()=>{s.length&&(S.current=s)},[s]),h.useEffect(()=>{(async()=>{try{await r()}catch{console.error("err")}})()},[r,l]);const A=async()=>{i({page:l.page+1})};h.useEffect(()=>()=>{a()},[a]);const F=v=>{i({sortBy:v})},L=()=>{b(null),y([])},H=async(v,_)=>{try{await de(v,{node_data:{is_muted:_==="mute"}}),B.setState({ids:s.filter(M=>M!==v),total:n-1})}catch(M){console.warn(M)}},R=async(v,_)=>{if(t)if(_==="mergeTopic")if(Object.values(C).filter(M=>M).length>0){const M=Object.entries(C).filter(([,T])=>T).map(([T])=>t[T]);y(M),u()}else y([t[v]]),b(t[v]),u();else["mute","unMute"].includes(_)&&await H(v,_),typeof $[_]=="function"&&$[_](),b(t[v])},k=v=>{i({...l,search:v})};return e.jsxs(e.Fragment,{children:[e.jsxs(gn,{direction:"column",justify:"flex-end",children:[e.jsx(ke,{align:"flex-start",direction:"row",justify:"space-between",children:e.jsx(N,{className:"title",children:"Topics"})}),e.jsx(mn,{"data-testid":"topic-search-container",children:e.jsx(xt,{activeIcon:e.jsx(te,{}),defaultIcon:e.jsx(Je,{}),loading:o,loadingIcon:e.jsx(z,{color:x.lightGray,size:24}),onSearch:k,placeholder:"Search ..."})}),e.jsxs(fn,{align:"center",justify:o&&!t?"center":"flex-start",children:[e.jsx(on,{checkedStates:C,loading:o,onChangeFilter:F,onTopicEdit:R,setCheckedStates:w,setShowMuteUnmute:()=>i({is_muted:!l.is_muted}),showMuted:l.is_muted}),n>s.length?e.jsxs(W,{className:"load-more",disabled:o,onClick:A,children:["Load more",o&&e.jsx(z,{color:x.lightGray,size:10})]}):null]})]}),j.length>0&&e.jsx(Yo,{multiTopics:j,onClose:L}),p&&e.jsx(Lo,{onClose:L,topic:p}),p&&e.jsx(So,{onClose:L,topic:p})]})},gn=c(g)`
  flex: 1;

  .title {
    font-size: 20px;
    color: ${x.white};
    font-family: Barlow;
    font-size: 22px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  .subtitle {
    color: ${x.GRAY3};
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
`,fn=c(g)`
  min-height: 0;
  overflow: auto;
  flex: 1;
  width: 100%;
`,mn=c(g)`
  margin: 0 0 16px 36px;
`,bn=[{label:at,component:Os},{label:Gt,component:lo},{label:rt,component:Ks},{label:nt,component:un}],jn=t=>{const{children:s,value:n,index:r,...l}=t;return n===r?e.jsx(Tn,{"aria-labelledby":`simple-tab-${r}`,hidden:n!==r,id:`simple-tabpanel-${r}`,role:"tabpanel",...l,children:s}):null};function yn(t){return{id:`simple-tab-${t}`,"aria-controls":`simple-tabpanel-${t}`}}const wn=()=>{const[t,s]=h.useState(0),[n]=Xe(o=>[o.isAdmin]),[r]=It(o=>[o.queuedSourcesFeatureFlag]),l=Bt(),i=(o,d)=>{s(d)},a=bn.filter(({label:o})=>o===nt?n:o===rt?n&&r:o===at?l:!0);return e.jsxs($n,{"data-testid":"sources-table",direction:"column",children:[e.jsx(Cn,{"aria-label":"sources tabs",onChange:i,value:t,children:a.map((o,d)=>e.jsx(vn,{color:x.white,disableRipple:!0,label:o.label,...yn(d)},o.label))}),a.map((o,d)=>e.jsx(jn,{index:d,value:t,children:e.jsx(o.component,{})},o.label))]})},Cn=c(qt)`
  && {
    background: rgba(0, 0, 0, 0.2);
    border-radius: 9px 9px 0 0;
    .MuiTabs-indicator {
      background: ${x.primaryBlue};
    }
  }
`,vn=c(Xt)`
  && {
    padding: 30px 0 24px;
    color: ${x.GRAY6};
    margin-left: 34px;
    font-family: Barlow;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;

    &.Mui-selected {
      color: ${x.white};
    }
  }
`,Tn=c(g)`
  display: flex;
  flex: 1;
  min-height: 572px;
  padding: 20px 0;
  max-height: 572px;
  overflow: auto;

  @media (max-width: 1024px) {
    width: 100%;
    min-height: 400px;
    max-height: 400px;
  }

  @media (max-width: 768px) {
    width: 100%;
    min-height: 300px;
    max-height: 300px;
  }

  @media (max-width: 480px) {
    width: 100%;
    min-height: 250px;
    max-height: 250px;
  }
`,$n=c(g)`
  min-height: 0;
  flex: 1;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 3px;
  }
`,Gn=()=>{const{close:t}=E("sourcesTable"),{visible:s}=E("addContent");return s?null:e.jsx(ce,{background:"BG1",id:"sourcesTable",kind:"large",noWrap:!0,onClose:t,preventOutsideClose:!0,children:e.jsx(wn,{})})};export{Gn as SourcesTableModal};
