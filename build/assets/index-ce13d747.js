import{r as h,c as q,d as Q,s as O,b as I,u as K,_ as X,j as e,f as Z,h as J,i as P,ad as ut,e as se,ae as gt,p as d,q as x,E as N,F as g,Q as M,b0 as ft,ag as te,R as ne,x as ie,ab as mt,b1 as bt,b2 as Ye,w as re,b3 as Ve,a8 as ye,aM as ke,aN as _e,aO as Ne,b4 as jt,D as qe,b5 as yt,b6 as Qe,b7 as wt,aL as Ct,b8 as le,b9 as vt,C as Tt,N as St,U as $t}from"./index-15dc49aa.js";import{B as ce}from"./index-aea34727.js";import{C as kt,F as be,D as _t,E as Nt,P as zt,a as It,T as Bt,V as ze,b as Ie,M as Be,S as ue,c as Lt,A as Rt}from"./ThreeDotsIcons-a8cfef03.js";import{P as Et,S as Ke}from"./SearchIcon-7ac14ac5.js";import{B as H,P as we,I as V,K as Mt,t as ee,q as Ce,F as ve}from"./index-eb8682b1.js";import{T as Le,s as D,a as Xe,S as Ze,A as Te,E as At,D as Ft,b as Je,Q as et,V as tt,c as Ot}from"./constants-a42cac65.js";import{C as z}from"./ClipLoader-68b2e276.js";import{f as Wt,g as Ht,h as Pt,a as Dt}from"./index.esm-c0334e89.js";import{I as Ut,A as Se,T as ot}from"./index-e0aaebd9.js";import{B as Gt,T as Yt}from"./index-a0c012ba.js";import{u as R}from"./index-0ed84d45.js";import{N as st,F as nt,A as rt}from"./NodeCircleIcon-d8722e0d.js";import{O as at}from"./constants-b2a2fa82.js";import{C as it}from"./CheckIcon-dd4e34cc.js";import{T as Re}from"./Typography-b5f1a617.js";import{T as Vt,a as qt}from"./Tabs-9ce0bc8e.js";import"./Stack-406c930f.js";import"./createSvgIcon-993d3f43.js";import"./TextareaAutosize-a72715e6.js";const Qt=h.createContext(),lt=Qt;function Kt(t){return q("MuiTable",t)}Q("MuiTable",["root","stickyHeader"]);const Xt=["className","component","padding","size","stickyHeader"],Zt=t=>{const{classes:o,stickyHeader:n}=t;return J({root:["root",n&&"stickyHeader"]},Kt,o)},Jt=O("table",{name:"MuiTable",slot:"Root",overridesResolver:(t,o)=>{const{ownerState:n}=t;return[o.root,n.stickyHeader&&o.stickyHeader]}})(({theme:t,ownerState:o})=>I({display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":I({},t.typography.body2,{padding:t.spacing(2),color:(t.vars||t).palette.text.secondary,textAlign:"left",captionSide:"bottom"})},o.stickyHeader&&{borderCollapse:"separate"})),Ee="table",eo=h.forwardRef(function(o,n){const r=K({props:o,name:"MuiTable"}),{className:i,component:l=Ee,padding:a="normal",size:s="medium",stickyHeader:c=!1}=r,u=X(r,Xt),m=I({},r,{component:l,padding:a,size:s,stickyHeader:c}),p=Zt(m),j=h.useMemo(()=>({padding:a,size:s,stickyHeader:c}),[a,s,c]);return e.jsx(lt.Provider,{value:j,children:e.jsx(Jt,I({as:l,role:l===Ee?null:"table",ref:n,className:Z(p.root,i),ownerState:m},u))})}),de=eo,to=h.createContext(),pe=to;function oo(t){return q("MuiTableBody",t)}Q("MuiTableBody",["root"]);const so=["className","component"],no=t=>{const{classes:o}=t;return J({root:["root"]},oo,o)},ro=O("tbody",{name:"MuiTableBody",slot:"Root",overridesResolver:(t,o)=>o.root})({display:"table-row-group"}),ao={variant:"body"},Me="tbody",io=h.forwardRef(function(o,n){const r=K({props:o,name:"MuiTableBody"}),{className:i,component:l=Me}=r,a=X(r,so),s=I({},r,{component:l}),c=no(s);return e.jsx(pe.Provider,{value:ao,children:e.jsx(ro,I({className:Z(c.root,i),as:l,ref:n,role:l===Me?null:"rowgroup",ownerState:s},a))})}),lo=io;function co(t){return q("MuiTableCell",t)}const po=Q("MuiTableCell",["root","head","body","footer","sizeSmall","sizeMedium","paddingCheckbox","paddingNone","alignLeft","alignCenter","alignRight","alignJustify","stickyHeader"]),xo=po,ho=["align","className","component","padding","scope","size","sortDirection","variant"],uo=t=>{const{classes:o,variant:n,align:r,padding:i,size:l,stickyHeader:a}=t,s={root:["root",n,a&&"stickyHeader",r!=="inherit"&&`align${P(r)}`,i!=="normal"&&`padding${P(i)}`,`size${P(l)}`]};return J(s,co,o)},go=O("td",{name:"MuiTableCell",slot:"Root",overridesResolver:(t,o)=>{const{ownerState:n}=t;return[o.root,o[n.variant],o[`size${P(n.size)}`],n.padding!=="normal"&&o[`padding${P(n.padding)}`],n.align!=="inherit"&&o[`align${P(n.align)}`],n.stickyHeader&&o.stickyHeader]}})(({theme:t,ownerState:o})=>I({},t.typography.body2,{display:"table-cell",verticalAlign:"inherit",borderBottom:t.vars?`1px solid ${t.vars.palette.TableCell.border}`:`1px solid
    ${t.palette.mode==="light"?ut(se(t.palette.divider,1),.88):gt(se(t.palette.divider,1),.68)}`,textAlign:"left",padding:16},o.variant==="head"&&{color:(t.vars||t).palette.text.primary,lineHeight:t.typography.pxToRem(24),fontWeight:t.typography.fontWeightMedium},o.variant==="body"&&{color:(t.vars||t).palette.text.primary},o.variant==="footer"&&{color:(t.vars||t).palette.text.secondary,lineHeight:t.typography.pxToRem(21),fontSize:t.typography.pxToRem(12)},o.size==="small"&&{padding:"6px 16px",[`&.${xo.paddingCheckbox}`]:{width:24,padding:"0 12px 0 16px","& > *":{padding:0}}},o.padding==="checkbox"&&{width:48,padding:"0 0 0 4px"},o.padding==="none"&&{padding:0},o.align==="left"&&{textAlign:"left"},o.align==="center"&&{textAlign:"center"},o.align==="right"&&{textAlign:"right",flexDirection:"row-reverse"},o.align==="justify"&&{textAlign:"justify"},o.stickyHeader&&{position:"sticky",top:0,zIndex:2,backgroundColor:(t.vars||t).palette.background.default})),fo=h.forwardRef(function(o,n){const r=K({props:o,name:"MuiTableCell"}),{align:i="inherit",className:l,component:a,padding:s,scope:c,size:u,sortDirection:m,variant:p}=r,j=X(r,ho),b=h.useContext(lt),y=h.useContext(pe),C=y&&y.variant==="head";let w;a?w=a:w=C?"th":"td";let S=c;w==="td"?S=void 0:!S&&C&&(S="col");const $=p||y&&y.variant,A=I({},r,{align:i,component:w,padding:s||(b&&b.padding?b.padding:"normal"),size:u||(b&&b.size?b.size:"medium"),sortDirection:m,stickyHeader:$==="head"&&b&&b.stickyHeader,variant:$}),F=uo(A);let B=null;return m&&(B=m==="asc"?"ascending":"descending"),e.jsx(go,I({as:w,ref:n,className:Z(F.root,l),"aria-sort":B,scope:S,ownerState:A},j))}),mo=fo;function bo(t){return q("MuiTableHead",t)}Q("MuiTableHead",["root"]);const jo=["className","component"],yo=t=>{const{classes:o}=t;return J({root:["root"]},bo,o)},wo=O("thead",{name:"MuiTableHead",slot:"Root",overridesResolver:(t,o)=>o.root})({display:"table-header-group"}),Co={variant:"head"},Ae="thead",vo=h.forwardRef(function(o,n){const r=K({props:o,name:"MuiTableHead"}),{className:i,component:l=Ae}=r,a=X(r,jo),s=I({},r,{component:l}),c=yo(s);return e.jsx(pe.Provider,{value:Co,children:e.jsx(wo,I({as:l,className:Z(c.root,i),ref:n,role:l===Ae?null:"rowgroup",ownerState:s},a))})}),ct=vo;function To(t){return q("MuiTableRow",t)}const So=Q("MuiTableRow",["root","selected","hover","head","footer"]),Fe=So,$o=["className","component","hover","selected"],ko=t=>{const{classes:o,selected:n,hover:r,head:i,footer:l}=t;return J({root:["root",n&&"selected",r&&"hover",i&&"head",l&&"footer"]},To,o)},_o=O("tr",{name:"MuiTableRow",slot:"Root",overridesResolver:(t,o)=>{const{ownerState:n}=t;return[o.root,n.head&&o.head,n.footer&&o.footer]}})(({theme:t})=>({color:"inherit",display:"table-row",verticalAlign:"middle",outline:0,[`&.${Fe.hover}:hover`]:{backgroundColor:(t.vars||t).palette.action.hover},[`&.${Fe.selected}`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.selectedOpacity})`:se(t.palette.primary.main,t.palette.action.selectedOpacity),"&:hover":{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.hoverOpacity}))`:se(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.hoverOpacity)}}})),Oe="tr",No=h.forwardRef(function(o,n){const r=K({props:o,name:"MuiTableRow"}),{className:i,component:l=Oe,hover:a=!1,selected:s=!1}=r,c=X(r,$o),u=h.useContext(pe),m=I({},r,{component:l,hover:a,selected:s,head:u&&u.variant==="head",footer:u&&u.variant==="footer"}),p=ko(m);return e.jsx(_o,I({as:l,ref:n,className:Z(p.root,i),role:l===Oe?null:"row",ownerState:m},c))}),U=No;function je(t){const o=new Date(Number(t)*1e3),n=o.getFullYear(),r=(1+o.getMonth()).toString().padStart(2,"0");return`${o.getDate().toString().padStart(2,"0")}/${r}/${n}`}const f=d(mo)`
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
`,xe=d(U)`
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
`,he=d(ct)`
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
`,ae=d(H)`
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
`,$e=d(g)`
  margin-bottom: 16px;
  padding: 0 36px;
  ${N} {
    margin-bottom: 0;
  }
`,zo=d(ct)`
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
`;function Io(t){return t.charAt(0).toUpperCase()+t.slice(1).toLowerCase()}const Bo=({node:t})=>{var o,n,r,i,l,a,s,c,u;return e.jsxs(xe,{children:[e.jsx(f,{className:"empty"}),e.jsx(f,{children:(o=t==null?void 0:t.properties)!=null&&o.date_added_to_graph?je((n=t==null?void 0:t.properties)==null?void 0:n.date_added_to_graph):je((r=t==null?void 0:t.properties)==null?void 0:r.date)}),e.jsx(f,{children:t==null?void 0:t.node_type}),e.jsx(f,{children:(t==null?void 0:t.node_type)==="Tweet"?e.jsx(We,{href:`${Le}${(i=t==null?void 0:t.properties)==null?void 0:i.tweet_id}${Le.includes("?")?"&":"?"}open=system`,target:"_blank",children:(l=t==null?void 0:t.properties)==null?void 0:l.tweet_id}):e.jsx(We,{href:`${(a=t==null?void 0:t.properties)==null?void 0:a.source_link}${((s=t==null?void 0:t.properties)==null?void 0:s.source_link).includes("?")?"&":"?"}open=system`,target:"_blank",children:(c=t==null?void 0:t.properties)==null?void 0:c.source_link})}),e.jsx(f,{children:(u=t==null?void 0:t.properties)!=null&&u.status?Io(t.properties.status):"Processing"})]})},We=d.a`
  color: ${x.white};
  text-decoration: underline;
  &:visited {
    color: ${x.white};
  }
`,Lo=h.memo(Bo),Ro=({nodes:t})=>{const{open:o}=M("addContent"),n=async()=>{o()};return!t||(t==null?void 0:t.length)===0?e.jsx(e.Fragment,{children:e.jsxs(Eo,{children:[e.jsx(Ao,{children:e.jsx(kt,{})}),e.jsx(Mo,{children:e.jsx(N,{className:"subtitle",children:"Contribute to the graph by adding your first content."})}),e.jsx(g,{justify:"center",children:e.jsx(H,{color:"secondary",onClick:n,size:"medium",startIcon:e.jsx(Et,{}),type:"submit",variant:"contained",children:"Add Content"})})]})}):e.jsxs(de,{component:"table",children:[e.jsx(he,{children:e.jsxs(U,{component:"tr",children:[e.jsx(f,{className:"empty"}),e.jsx(f,{children:"Date"}),e.jsx(f,{children:"Type"}),e.jsx(f,{children:"Source"}),e.jsx(f,{children:"Status"})]})}),e.jsx("tbody",{children:t==null?void 0:t.map(r=>e.jsx(Lo,{node:r},r==null?void 0:r.ref_id))})]})},Eo=O(g)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 150px auto;
  width: 100%;
  flex-direction: column;
`,Mo=O(g)`
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
`,Ao=O(g)`
  margin-bottom: 20px;

  svg {
    fill: none;
    height: 60px;
    width: 60px;
  }
`,Fo=()=>{const[t,o]=h.useState([]),[n,r]=h.useState(!0),[i,l]=h.useState(10),[a,s]=h.useState(!0),c={only_content:"true",sort_by:"date",limit:i.toString()},u=async()=>{r(!0);try{const p=await ft(c);o(p.nodes),r(!1)}catch(p){console.error("Error fetching data:",p),r(!1)}};h.useEffect(()=>{u()},[i]);const m=()=>{l(i+10),u()};return e.jsx(Oo,{direction:"column",justify:"flex-end",children:e.jsxs(Wo,{align:"center",justify:n?"center":"flex-start",children:[n?e.jsx(z,{color:x.white}):e.jsx(e.Fragment,{children:e.jsx(Ro,{nodes:t})}),!n&&t.length>0&&(a?e.jsx(H,{onClick:m,size:"medium",children:"Load More"}):e.jsx(Ho,{children:"No new nodes available"}))]})})},Oo=d(g)`
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
`,Wo=d(g)`
  min-height: 0;
  overflow: auto;
  flex: 1;
  width: 100%;
`,Ho=d.div`
  margin-top: 10px;
  color: ${x.GRAY3};
  font-family: Barlow;
  font-size: 14px;
`,Po=({kind:t,shape:o})=>{switch(t){case"small":return te`
        padding: 4px 8px;
        border-radius: ${o==="rounded"?"16px":"8px"};
        height: 32px;
      `;case"big":return te`
        padding: 16px 24px;
        border-radius: ${o==="rounded"?"24px":"8px"};
        height: 48px;
      `;default:return te`
        padding: 8px 16px;
        border-radius: ${o==="rounded"?"32px":"8px"};
        height: 64px;
      `}},Do=({kind:t})=>{switch(t){case"small":return"regularBold";case"big":return"mediumBold";default:return"regularBold"}},Uo=d(g).attrs({align:"center",direction:"row",justify:"center"})`
  border: none;
  cursor: pointer;
  pointer-events: auto;

  ${Po}

  &:hover {
    opacity: ${({disabled:t})=>t?.5:.9};
  }

  ${({disabled:t})=>t&&te`
      opacity: 0.5;
      pointer-events: none;
    `}
`,He=({background:t="primaryButton",children:o,className:n="button",startIcon:r,endIcon:i,disabled:l,id:a,kind:s="regular",onClick:c,onPointerDown:u,shape:m="squared",textColor:p="white",type:j})=>e.jsxs(Uo,{as:"button",background:t,className:n,disabled:l,id:a,kind:s,onClick:c,onPointerDown:u,shape:m,type:j,children:[r&&r,e.jsx(N,{color:p,kind:Do({kind:s}),children:o}),i&&i]}),dt=({message:t="Are you sure you want to delete this item?",onConfirm:o,children:n,anchorOrigin:r={vertical:"bottom",horizontal:"left"},transformOrigin:i={vertical:"top",horizontal:"center"}})=>{const[l,a]=h.useState(null),s=j=>{a(j.currentTarget)},c=()=>{a(null)},u=()=>{o(),c()},m=()=>{c()},p=!!l;return e.jsxs(e.Fragment,{children:[e.jsx("div",{children:ne.cloneElement(n,{onClick:s})}),e.jsx(Yo,{anchorEl:l,anchorOrigin:r,onClose:c,open:p,transformOrigin:i,children:e.jsxs(Go,{children:[e.jsx(N,{className:"message",children:t}),e.jsxs(Vo,{children:[e.jsx(He,{background:"primaryBlue",kind:"small",onClick:u,children:"Yes"}),e.jsx(He,{background:"white",kind:"small",onClick:m,textColor:"black",children:"No"})]})]})})]})},Go=d(g)`
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
`,Yo=d(we)`
  && {
    z-index: 9999;
  }
`,Vo=d(g)`
  display: flex;
  flex-direction: row;
  gap: 12px;
  align-items: center;
  margin-top: 16px;
`,qo=({data:t})=>{const o=ie(a=>a.setQueuedSources),[n,r]=h.useState(""),i=async a=>{if(t!=null&&t.length)try{const s=await mt.enable();await bt(a,s.pubkey),o(t.filter(c=>c.ref_id!==a))}catch(s){console.warn(s)}},l=async a=>{if(!(!a||!(t!=null&&t.length))){r(a);try{await Ye(a),o(t==null?void 0:t.filter(s=>s.ref_id!==a))}catch(s){console.warn(s)}finally{r("")}}};return t!=null&&t.length?e.jsxs(de,{component:"table",children:[e.jsx(he,{children:e.jsxs(U,{component:"tr",children:[e.jsx(f,{className:"empty"}),e.jsx(f,{children:"Type"}),e.jsx(f,{children:"Source"}),e.jsx(f,{}),e.jsx(f,{className:"empty"})]})}),(t==null?void 0:t.length)&&e.jsx("tbody",{children:t==null?void 0:t.map(a=>e.jsxs(xe,{children:[e.jsx(f,{className:"empty"}),e.jsx(f,{children:D[a.source_type]}),e.jsx(f,{width:"268px",children:a.source_type==="twitter_handle"?e.jsxs(De,{href:`${Xe}/${a.source}?open=system`,target:"_blank",children:["@",a.source]}):e.jsx(De,{href:`${a.source}?open=system`,target:"_blank",children:a.source})}),e.jsx(f,{className:"cell-center",children:e.jsxs(g,{direction:"row",justify:"flex-end",children:[e.jsx(Qo,{className:"approve-wrapper",children:e.jsx(Pe,{className:"centered",onClick:()=>i(a.ref_id),children:e.jsx(Wt,{color:x.primaryGreen,fontSize:24})})}),e.jsx("div",{className:"delete-wrapper",children:n===a.ref_id?e.jsx(z,{color:x.white,size:16}):e.jsx(dt,{message:"Are you sure ?",onConfirm:()=>l(a.ref_id),children:e.jsx(Pe,{className:"centered",children:e.jsx(Ht,{color:x.primaryRed,fontSize:24})})})})]})}),e.jsx(f,{className:"empty"})]},a.source))})]}):e.jsxs(g,{children:[e.jsx(N,{children:"There is not any results for selected filters"}),e.jsx(be,{})]})},Pe=d(g)`
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
`,De=d.a`
  color: ${x.white};
  text-decoration: underline;
  &:visited {
    color: ${x.white};
  }
  &:hover {
    cursor: pointer;
  }
`,Qo=d.div`
  margin-right: 40px;
`,Ko=()=>{const[t,o]=h.useState(!0),[n,r]=h.useState(""),[i,l]=ie(c=>[c.queuedSources,c.setQueuedSources]);h.useEffect(()=>{(async()=>{o(!0);try{const u=await Ve({approved:"False"});l(u.data)}catch(u){console.warn(u)}finally{o(!1)}})()},[l]);const a=c=>{r(n===c||!c?"":c)},s=i==null?void 0:i.filter(c=>!n||c.source_type===n);return e.jsxs(Xo,{align:"stretch",direction:"column",justify:"flex-end",children:[e.jsxs($e,{align:"flex-start",justify:"space-between",children:[e.jsx(N,{className:"title",children:"Queued Sources"}),e.jsx(N,{className:"subtitle",children:"This is a queue of pending sources waiting for approval or denial from graph users. If you think a source will provide good content for the graph, you can pay to approve it. Think of this as an investment: you pay to add it to the source table, and if the content is popular you will earn from it. If content is not relevant to the graph, you should deny it."})]}),e.jsxs(g,{className:"filters",direction:"row",pb:16,px:36,children:[e.jsx(ae,{className:re({selected:!n}),onClick:()=>a(""),size:"small",children:"All"}),Object.keys(D).map(c=>e.jsx(ae,{className:re({selected:c===n}),onClick:()=>a(c),size:"small",children:D[c]},c))]}),e.jsx(Zo,{align:"center",justify:t?"center":"flex-start",children:t?e.jsx(z,{color:x.white}):e.jsx(qo,{data:s})})]})},Xo=d(g)`
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
`,Zo=d(g)`
  min-height: 0;
  overflow: auto;
  flex: 1;
  width: 100%;
`,pt=({onSearch:t,placeholder:o,activeIcon:n,defaultIcon:r,loadingIcon:i,loading:l,...a})=>{const[s,c]=h.useState(""),u=()=>{c(""),t("")},m=h.useCallback(y=>{t(y)},[t]),p=h.useMemo(()=>ye.debounce(m,300),[m]),j=y=>{const C=y.target.value.trim(),{value:w}=y.target;c(w),C?p(C):u()},b=()=>l?e.jsx(Ue,{children:e.jsx(ge,{type:"button",children:i})}):e.jsx(Ue,{children:s?e.jsx(ge,{onClick:u,type:"button",children:n}):e.jsx(ge,{type:"button",children:r})});return e.jsxs(Jo,{children:[e.jsx(es,{autoComplete:"off",autoCorrect:"off",inputProps:{"aria-label":"search"},onChange:j,placeholder:o,value:s,...a}),b()]})},Ue=d(g)`
  top: -50%;
  right: -3%;
  z-index: 3;
  position: absolute;
  transform: translate(-50%, 50%);
`,ge=d(V)`
  font-size: 24px;
`,Jo=d(Mt)`
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
`,es=d(Ut)`
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
`,ts=t=>e.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 21 21",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M13.8 9.97481L5.82503 1.9998H18C18.4167 1.9998 18.7167 2.18314 18.9 2.5498C19.0834 2.91647 19.05 3.26647 18.8 3.5998L13.8 9.97481ZM18.775 20.5998L13 14.8248V16.9998C13 17.2831 12.9042 17.5206 12.7125 17.7123C12.5209 17.904 12.2834 17.9998 12 17.9998H10C9.71669 17.9998 9.47919 17.904 9.28753 17.7123C9.09586 17.5206 9.00002 17.2831 9.00002 16.9998V10.8248L0.400024 2.2248L1.80002 0.799805L20.2 19.1998L18.775 20.5998Z",fill:"currentColor"})}),os=({data:t,canEdit:o=!1})=>{const n=ie(s=>s.setSources),[r,i]=h.useState(""),l=async(s,c)=>{if(t!=null&&t.length)try{await jt(s,c);const u=t==null?void 0:t.findIndex(p=>p.ref_id===s),m=[...t];m[u]={...m[u],source:c.source},n(m)}catch(u){console.warn(u)}},a=async s=>{if(!(!s||!(t!=null&&t.length))){i(s);try{await Ye(s),n(t==null?void 0:t.filter(c=>c.ref_id!==s))}catch(c){console.warn(c)}finally{i("")}}};return t!=null&&t.length?e.jsxs(de,{"aria-label":"a dense table",component:"table",id:"sources-table",size:"small",children:[e.jsx(he,{children:e.jsxs(U,{component:"tr",children:[e.jsx(f,{className:"empty"}),e.jsx(f,{children:"Type"}),e.jsx(f,{align:"left",children:"Source"}),o&&e.jsx(f,{align:"left"}),e.jsx(f,{className:"empty"})]})}),e.jsx(lo,{component:"tbody",children:t==null?void 0:t.map(s=>e.jsxs(xe,{children:[e.jsx(f,{className:"empty"}),e.jsx(f,{align:"left",children:D[s.source_type]}),e.jsx(f,{align:"left",children:e.jsx(ss,{condition:o,wrapper:c=>e.jsx(ns,{id:s.ref_id,onSave:u=>l(s.ref_id,{source:u,source_type:s.source_type}),value:s.source,children:c}),children:s.source_type===ke||s.source_type===_e||s.source_type===Ne?e.jsxs(e.Fragment,{children:[s.source_type===ke&&e.jsxs(fe,{href:`${Xe}/${s.source}`,target:"_blank",children:["@",s.source]}),s.source_type===_e&&e.jsx(fe,{href:`${s.source}${s.source.includes("?")?"&":"?"}open=system`,target:"_blank",children:s.source}),s.source_type===Ne&&e.jsx(fe,{href:s.source,target:"_blank",children:s.source})]}):e.jsx("div",{children:s.source})})}),o&&e.jsx(f,{align:"left",children:e.jsx("div",{className:"delete-wrapper",id:`delete-${s.source}`,children:r===s.ref_id?e.jsx(xt,{"data-testid":`delete-loader-${s.ref_id}`,children:e.jsx(z,{color:x.white,size:16})}):e.jsx(dt,{"data-testid":`delete-icon-${s.ref_id}`,message:"Are you sure?",onConfirm:()=>a(s.ref_id),children:e.jsx(oe,{className:"centered","data-testid":`delete-icon-${s.ref_id}`,children:e.jsx(_t,{})})})})}),e.jsx(f,{className:"empty"})]},s.source))})]}):e.jsxs(as,{children:[e.jsx(ts,{}),e.jsx(N,{className:"text",children:"There is not any results for selected filters"})]})};function ss({condition:t,wrapper:o,children:n}){return t?o(n):n}const ns=({value:t,onSave:o,id:n,children:r})=>{const[i,l]=h.useState(!1),[a,s]=h.useState(t),[c,u]=h.useState(!1),m=async()=>{if(n){u(!0);try{await o(a),l(!1)}catch(p){console.warn(p)}finally{u(!1)}}};return e.jsx("div",{children:i?e.jsxs(rs,{align:"center",direction:"row",children:[e.jsx(Gt,{className:"editable-cell__input",name:"cell-input",onChange:p=>s(p),value:a}),e.jsx(oe,{align:"center",justify:"center",children:c?e.jsx(xt,{"data-testid":`edit-loader-${n}`,children:e.jsx(z,{color:x.white,size:12})}):e.jsx(Pt,{"data-testid":`check-icon-${n}`,onClick:m})}),e.jsx(oe,{align:"center",className:"secondary",justify:"center",onClick:()=>l(!1),children:e.jsx(Dt,{})})]}):e.jsxs(is,{direction:"row",children:[e.jsx("div",{className:"name",children:r}),e.jsx("div",{className:"spacer"}),e.jsx(oe,{onClick:()=>l(!0),children:e.jsx(Nt,{"data-testid":`edit-icon-${n}`})})]})})},rs=d(g)`
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
`,oe=d(g)`
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
  }

  & + & {
    margin-left: 4px;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`,as=d(g)`
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
`,is=d(g)`
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
`,fe=d.a`
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
`,xt=d(g)`
  display: flex;
  justify-content: center;
  align-items: center;
`,ls=()=>{const[t,o]=h.useState(!0),[n,r]=h.useState(""),[i,l]=ie(p=>[p.sources,p.setSources]),[a]=qe(p=>[p.isAdmin]),[s,c]=h.useState("");h.useEffect(()=>{(async()=>{o(!0);try{const j=await Ve();l(j.data)}catch(j){console.warn(j)}finally{o(!1)}})()},[l]);const u=p=>{r(n===p||!p?"":p)},m=h.useMemo(()=>i==null?void 0:i.filter(p=>(!n||p.source_type===n)&&(p.source.toLowerCase().startsWith(s.toLowerCase())||p.source.toLowerCase().includes(s.toLowerCase())||`@${p.source.toLowerCase()}`.startsWith(s.toLowerCase())||`@${p.source.toLowerCase()}`.includes(s.toLowerCase()))),[s,n,i]);return e.jsxs(cs,{align:"stretch",direction:"column",justify:"flex-end",children:[e.jsx($e,{align:"center",direction:"row",justify:"space-between",children:e.jsx(N,{className:"title",children:"Sources for this Graph"})}),e.jsx(ps,{children:e.jsx(pt,{activeIcon:e.jsx(ee,{}),defaultIcon:e.jsx(Ke,{}),loading:t,loadingIcon:e.jsx(z,{color:x.lightGray,size:24}),onSearch:c,placeholder:"Find Source"})}),e.jsxs(g,{className:"filters",direction:"row",pb:16,px:36,children:[e.jsx(ae,{className:re({selected:!n}),onClick:()=>u(""),size:"small",children:"All"}),Object.keys(D).map(p=>e.jsx(ae,{className:re({selected:p===n}),onClick:()=>u(p),size:"small",children:D[p]},p))]}),e.jsx(ds,{align:"center",justify:t?"center":"flex-start",children:t?e.jsx(z,{color:x.white}):e.jsx(os,{canEdit:a,data:m})})]})},cs=d(g)`
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
`,ds=d(g)`
  min-height: 0;
  overflow: auto;
  flex: 1;
  width: 100%;
`,ps=d(g)`
  margin: 0 0 16px 36px;
`,xs=({selectedType:t,setSelectedType:o})=>{const[n,r]=h.useState([]);h.useEffect(()=>{(async()=>{try{const{data:s}=await yt();r(s.edge_types)}catch(s){console.warn(s)}})()},[r]);const i=a=>({label:a,value:a}),l=a=>{o((a==null?void 0:a.value)||"")};return e.jsx(Se,{onSelect:l,options:n.map(i),selectedValue:t?i(t):null})},hs=({onSelect:t,selectedValue:o,topicId:n})=>{const[r,i]=h.useState([]),[l,a]=h.useState(!1),s=h.useMemo(()=>{const j=async b=>{const y={is_muted:"False",sort_by:Te,search:b,skip:"0",limit:"1000"};a(!0);try{const w=(await Qe(y.search)).data.filter(S=>(S==null?void 0:S.ref_id)!==n);i(w)}catch{i([])}finally{a(!1)}};return ye.debounce(j,300)},[n]),c=j=>{const b=j.trim();if(!b){i([]);return}b.length>2&&s(j)},u=j=>{const b=j?r.find(y=>y.ref_id===j.value):null;t(b||null)},m=j=>({label:j.search_value,value:j.ref_id,type:j.node_type}),p=j=>j.map(m);return o?e.jsxs(g,{align:"center",basis:"100%",direction:"row",grow:1,shrink:1,children:[e.jsx("span",{children:o.search_value}),e.jsx(Ze,{onClick:()=>t(null),size:"medium",children:e.jsx(ee,{})})]}):e.jsx(Se,{handleInputChange:c,isLoading:l,onSelect:u,options:p(r)||at,selectedValue:o?m(o):null})},us=({from:t,onSelect:o,selectedType:n,setSelectedType:r,isSwapped:i,setIsSwapped:l,selectedToNode:a})=>e.jsxs(g,{mb:20,children:[e.jsx(g,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(g,{align:"center",direction:"row",children:e.jsx(gs,{children:"Add edge"})})}),e.jsxs(bs,{swap:i,children:[e.jsx(g,{children:e.jsx(js,{disabled:!0,label:i?"To":"From",swap:i,value:t==null?void 0:t.name})}),e.jsxs(g,{my:16,children:[e.jsx(ms,{children:"Type"}),e.jsx(xs,{selectedType:n,setSelectedType:r})]}),e.jsx(g,{children:e.jsxs(ys,{children:[e.jsx(ws,{children:i?"From":"To"}),e.jsx(hs,{onSelect:o,selectedValue:a,topicId:t==null?void 0:t.ref_id})]})}),e.jsxs(fs,{children:[e.jsx(Cs,{children:e.jsx(st,{})}),e.jsx(vs,{onClick:l,children:e.jsx(nt,{})}),e.jsx(Ts,{children:e.jsx(rt,{})})]})]})]}),gs=d(N)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,fs=d.div`
  position: absolute;
  top: 26px;
  bottom: 26px;
  left: 4px;
  width: 35px;
  border-left: 1.5px solid #6b7a8d4d;
  border-top: 1.5px solid #6b7a8d4d;
  border-bottom: 1.5px solid #6b7a8d4d;
  border-radius: 12px 0 0 12px;
`,ms=d.label`
  color: #bac1c6;
  font-size: 13px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0.01em;
  text-align: left;
  margin-bottom: 6px;
`,bs=d.div`
  position: relative;
  color: white;
  font-family: 'Barlow';
  display: flex;
  flex-direction: ${t=>t.swap?"column-reverse":"column"};
  margin-bottom: 10px;
  padding-left: 38px;
`,js=d(ot)`
  position: relative;
  width: 100%;
  padding: 16px;
  gap: 10px;
  border-radius: 6px;
  border: 1px solid #6b7a8d4d;
  opacity: 0px;
  display: flex;
`,ys=d.div`
  position: relative;
  width: 100%;
  padding: 15px;
  gap: 10px;
  border-radius: 6px;
  border: 1.4px solid #6b7a8d4d;
  opacity: 0px;
  display: flex;
  align-items: center;
`,ws=d.label`
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
`,Cs=d.div`
  position: absolute;
  top: 0;
  right: 0;
  transform: translateY(-50%) translateX(50%);
  color: #23252f;
`,vs=d.div`
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
`,Ts=d.div`
  position: absolute;
  bottom: 0;
  right: 0;
  transform: translateY(10px) translateX(3px);
  color: #6b7a8d;
  line-height: 1;
`,Ss=({topic:t,onClose:o})=>{const{close:n}=M("addEdge"),[r]=R(w=>[w.data]),i=Ce({mode:"onChange"}),[l,a]=h.useState(!1),[s,c]=h.useState(!1),[u,m]=h.useState(""),[p,j]=h.useState(null),b=()=>{o(),n()},y=async()=>{if(!(!p||!r)){c(!0);try{await wt({from:t.ref_id,to:p==null?void 0:p.ref_id,relationship:u});const{ref_id:w}=t,{ref_id:S}=p;if(r){const $={...r};$[w]={...$[w],edgeList:[...$[w].edgeList,u]},$[S]&&($[S]={...$[S],edgeList:[...$[S].edgeList,u]}),R.setState({data:$})}b()}catch(w){console.warn(w)}finally{c(!1)}}},C=s||!p||!u;return e.jsx(ce,{id:"addEdge",kind:"small",onClose:b,preventOutsideClose:!0,children:e.jsxs(ve,{...i,children:[e.jsx(us,{from:t,isSwapped:l,onSelect:j,selectedToNode:p,selectedType:u,setIsSwapped:()=>a(!l),setSelectedType:m}),e.jsxs($s,{color:"secondary",disabled:C,onClick:y,size:"large",variant:"contained",children:["Confirm",s&&e.jsx(ks,{children:e.jsx(z,{color:x.lightGray,size:12})})]})]})})},$s=d(H)`
  width: 293px !important;
  margin: 0 0 10px auto !important;
`,ks=d.span`
  margin-top: 2px;
`,_s=()=>e.jsxs(g,{children:[e.jsx(g,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(g,{align:"center",direction:"row",children:e.jsx(Ns,{children:"Edit topic"})})}),e.jsx(g,{mb:12,children:e.jsx(Yt,{id:"cy-topic",maxLength:50,name:"name",placeholder:"Add your topic",rules:{...Ct}})})]}),Ns=d(N)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,zs=({topic:t,onClose:o})=>{const{close:n}=M("editTopic"),[r]=R(w=>[w.data]),i=Ce({mode:"onChange"}),{watch:l,setValue:a,reset:s,getValues:c}=i,[u,m]=h.useState(!1);h.useEffect(()=>(t&&a("name",t==null?void 0:t.name),()=>{s()}),[t,a,s]);const p=l("name"),j=p==null?void 0:p.trim(),b=()=>{o(),n()},y=async()=>{m(!0);try{if(await le((t==null?void 0:t.ref_id)||"",{node_data:{name:j}}),r){const w={...r};w[t==null?void 0:t.ref_id].name=j,R.setState({data:w})}b()}catch(w){console.warn(w)}finally{m(!1)}},C=c().name&&(t==null?void 0:t.name)!==c().name;return e.jsx(ce,{id:"editTopic",kind:"regular",onClose:b,preventOutsideClose:!0,children:e.jsxs(ve,{...i,children:[e.jsx(_s,{}),e.jsxs(H,{color:"secondary",disabled:u||!j||!C,onClick:y,size:"large",variant:"contained",children:["Save Changes",u&&e.jsx(Is,{children:e.jsx(z,{color:x.lightGray,size:12})})]})]})})},Is=d.span`
  margin-top: 2px;
`,Bs=({topicId:t,onSelect:o,selectedValue:n,dataId:r})=>{const[i,l]=h.useState([]),[a,s]=h.useState(!1),c=h.useMemo(()=>{const b=async y=>{const C={is_muted:"False",sort_by:Te,search:y,skip:"0",limit:"1000"};s(!0);try{const S=(await Qe(C.search)).data.filter($=>($==null?void 0:$.ref_id)!==t);l(S)}catch{l([])}finally{s(!1)}};return ye.debounce(b,300)},[t]),u=b=>{const y=b.trim();if(!y){l([]);return}y.length>2&&c(b)},m=b=>{const y=b?i.find(C=>C.ref_id===b.value):null;o(y||null)},p=b=>({label:b.search_value,value:b.ref_id,type:b.node_type}),j=b=>b.map(p);return n?e.jsxs(g,{align:"center",basis:"100%",direction:"row",grow:1,shrink:1,children:[e.jsx("span",{children:n.search_value}),e.jsx(Ze,{onClick:()=>o(null),size:"medium",children:e.jsx(ee,{})})]}):e.jsx(Se,{dataId:r,handleInputChange:u,isLoading:a,onSelect:m,options:j(i)||at,selectedValue:n?p(n):null})},Ls=({from:t,onSelect:o,selectedToNode:n,isSwapped:r,setIsSwapped:i})=>{var s;const l=t==null?void 0:t.map(c=>c.name).join(", "),a=t&&t.length===1?t[0].name:`${l==null?void 0:l.substring(0,25)} ...`;return e.jsxs(g,{mb:20,children:[e.jsx(g,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(g,{align:"center",direction:"row",children:e.jsx(Rs,{children:"Merge topic"})})}),e.jsxs(As,{swap:r,children:[e.jsx(Es,{children:e.jsx(Fs,{disabled:!0,label:r?"To":"From",swap:r,value:a})}),e.jsxs(g,{my:16,children:[e.jsx(Ws,{children:"Type"}),e.jsx(N,{children:"IS ALIAS"})]}),e.jsx(g,{children:e.jsxs(Os,{children:[e.jsx(Hs,{children:r?"From":"To"}),e.jsx(Bs,{dataId:"to-node",onSelect:o,selectedValue:n,topicId:(s=t[t.length-1])==null?void 0:s.ref_id})]})}),e.jsxs(Ms,{children:[e.jsx(Ps,{children:e.jsx(st,{})}),e.jsx(Ds,{"data-testid":"swap-icon",disabled:(t==null?void 0:t.length)!==1,onClick:(t==null?void 0:t.length)===1?i:void 0,children:e.jsx(nt,{})}),e.jsx(Us,{children:e.jsx(rt,{})})]})]})]})},Rs=d(N)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,Es=d(g)`
  flex: 1 1 100%;
`,Ms=d.div`
  position: absolute;
  top: 26px;
  bottom: 26px;
  left: 4px;
  width: 35px;
  border-left: 1.5px solid #6b7a8d4d;
  border-top: 1.5px solid #6b7a8d4d;
  border-bottom: 1.5px solid #6b7a8d4d;
  border-radius: 12px 0 0 12px;
`,As=d.div`
  position: relative;
  color: white;
  font-family: 'Barlow';
  display: flex;
  flex-direction: ${t=>t.swap?"column-reverse":"column"};
  margin-bottom: 10px;
  padding-left: 38px;
`,Fs=d(ot)`
  position: relative;
  width: 100%;
  padding: 16px;
  gap: 10px;
  border-radius: 6px;
  border: 1px solid #6b7a8d4d;
  opacity: 0px;
  display: flex;
`,Os=d.div`
  position: relative;
  width: 100%;
  padding: 15px;
  gap: 10px;
  border-radius: 6px;
  border: 1.4px solid #6b7a8d4d;
  opacity: 0px;
  display: flex;
  align-items: center;
`,Ws=d.label`
  color: #bac1c6;
  font-size: 13px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0.01em;
  text-align: left;
  margin-bottom: 6px;
`,Hs=d.label`
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
`,Ps=d.div`
  position: absolute;
  top: 0;
  right: 0;
  transform: translateY(-50%) translateX(50%);
  color: #23252f;
`,Ds=d.div`
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
`,Us=d.div`
  position: absolute;
  bottom: 0;
  right: 0;
  transform: translateY(10px) translateX(3px);
  color: #6b7a8d;
  line-height: 1;
`,Gs=({onClose:t,multiTopics:o})=>{const{close:n}=M("mergeTopic"),r=Ce({mode:"onChange"}),{setValue:i,reset:l}=r,[a,s]=h.useState(!1),[c,u]=h.useState(!1),[m,p]=h.useState(null);h.useEffect(()=>{if(o&&o.length>0){const y=o.map(C=>C.name).join(", ");i("name",y)}return()=>{l()}},[o,i,l]);const j=()=>{t(),n()},b=async()=>{s(!0);const y=o==null?void 0:o.map(C=>C.ref_id).filter(C=>!!C);try{y.length&&m&&(await vt({from:y,to:m==null?void 0:m.ref_id}),R.setState(C=>({ids:C.ids.filter(w=>!y.includes(w)),total:C.total-y.length})),j())}catch(C){console.warn(C)}finally{s(!1)}};return e.jsx(ce,{id:"mergeTopic",kind:"small",onClose:j,preventOutsideClose:!0,children:e.jsxs(ve,{...r,children:[e.jsx(Ls,{from:o,isSwapped:c,onSelect:p,selectedToNode:m,setIsSwapped:()=>u(!c)}),e.jsxs(Ys,{color:"secondary","data-testid":"merge-topics-button",disabled:a||!m,onClick:b,size:"large",variant:"contained",children:["Merge topics",a&&e.jsx(Vs,{children:e.jsx(z,{color:x.lightGray,size:12})})]})]})})},Ys=d(H)`
  width: 293px !important;
  margin: 0 0 10px auto !important;
`,Vs=d.span`
  margin-top: 2px;
`,qs=({topic:t,onClick:o,onSearch:n,checkedStates:r,setCheckedStates:i,isMuteDisabled:l})=>{const[a,s]=R(k=>[k.ids,k.total]),[c,u]=h.useState(!1),[m,p]=h.useState(!1),j=je(t.date_added_to_graph),b=async(k,T)=>{u(!0);try{await le(k,{node_data:{is_muted:T}}),R.setState({ids:a.filter(_=>_!==k),total:s-1})}catch(_){console.warn(_)}},y=k=>{i(T=>({...T,[k]:!T[k]}))},C=(k,T)=>{var _;(_=window.getSelection())!=null&&_.toString()?k.preventDefault():n(T.name)},w=t.edgeList.slice(0,1),S=t.edgeList.length-w.length,[$,A]=ne.useState(null),F=k=>{A(k.currentTarget),p(!0)},B=()=>{p(!1)},L=!!$&&m,W=r[t.ref_id]?"visible":"";return e.jsxs(xe,{className:r[t.ref_id]?"checked":"",children:[e.jsx(f,{children:e.jsx(Xs,{className:`checkbox-section ${W}`,"data-testid":"topic-check-box",onClick:()=>y(t.ref_id),children:e.jsx(Zs,{checked:r[t.ref_id],children:e.jsx(Js,{children:r[t.ref_id]&&e.jsx(it,{})})})})}),e.jsx(f,{onClick:k=>C(k,t),children:e.jsx(Ks,{children:t.name})}),e.jsx(f,{children:t.node_type}),e.jsx(f,{children:e.jsx(en,{children:t.edgeCount})}),e.jsxs(f,{children:[e.jsx(we,{anchorEl:$,anchorOrigin:{vertical:"top",horizontal:"center"},disableRestoreFocus:!0,id:"mouse-over-popover",onClose:B,onMouseEnter:()=>p(!0),onMouseLeave:B,open:L,sx:{pointerEvents:"auto","& .MuiPaper-root":{backgroundColor:"rgba(0, 0, 0, 0.9)",borderRadius:"4px",width:"160px",maxHeight:"200px",overflowY:"scroll"}},transformOrigin:{vertical:"bottom",horizontal:"center"},children:e.jsx(Re,{sx:{p:1.5,fontSize:"13px",fontWeight:400,lineHeight:"1.8",wordWrap:"break-word"},children:t.edgeList.join(", ")})}),w.join(", "),S>0&&e.jsx(Re,{"aria-haspopup":"true","aria-owns":L?"mouse-over-popover":void 0,component:"span",onMouseEnter:F,onMouseLeave:B,sx:{cursor:"pointer"},children:",..."})]}),e.jsx(f,{children:e.jsx("span",{children:j})}),e.jsx(f,{className:"cell-center",children:e.jsx(g,{direction:"row",justify:"space-between",children:e.jsx("div",{className:"approve-wrapper",children:c?e.jsx(Qs,{children:e.jsx(z,{color:x.white,size:16})}):e.jsxs(g,{direction:"row",children:[t.is_muted?e.jsx(V,{className:"centered",disabled:l,onClick:()=>b(t.ref_id,!1),children:e.jsx(zt,{})}):e.jsx(V,{className:"centered",disabled:l,onClick:()=>b(t.ref_id,!0),children:e.jsx(It,{})}),e.jsx(V,{disabled:l,onClick:k=>o(k,t.ref_id),children:e.jsx(Bt,{"data-testid":"ThreeDotsIcons"})})]})})})})]},t.name)},Qs=d.span`
  margin-left: 12px;
`,Ks=d.span`
  cursor: pointer;
  :hover {
    text-decoration: underline;
  }
`,Xs=d.td`
  visibility: hidden;
  cursor: pointer;
  display: flex;
  align-items: center;

  &.visible {
    visibility: visible;
  }
`,Zs=d.div`
  width: 14px;
  height: 14px;
  border-radius: 4px;
  border: ${({checked:t})=>t?"#618AFF":"2px solid #CCCCCC"};
  background-color: ${({checked:t})=>t?"#618AFF":"transparent"};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 12px;
`,Js=d.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 2px;
  background-color: transparent;
`,en=d.span`
  display: flex;
  align-items: center;
  justify-content: center;
`,tn=h.memo(qs),on=({setShowMuteUnmute:t,showMuted:o,onTopicEdit:n,onChangeFilter:r,checkedStates:i,setCheckedStates:l})=>{const{close:a}=M("sourcesTable"),[s,c]=h.useState(!1),[u,m]=ne.useState(null),[p,j]=ne.useState(""),b=Object.values(i).filter(v=>v).length,[y,C]=Tt(v=>[v.setSearchFormValue,v.setCurrentSearch]),[w,S,$]=R(v=>[v.data,v.ids,v.total]),A=h.useCallback((v,E)=>{m(v.currentTarget),j(E)},[]),F=()=>{m(null)},B=v=>{y(v),C(v),a()},L=v=>{n(p,v),F()},W=v=>{r(v)},k=!!u,T=k?"simple-popover":void 0,_=async()=>{c(!0);try{const v=Object.keys(i).map(async G=>{if(i[G])try{return await le(G,{node_data:{is_muted:!o}}),G}catch(ht){return console.error("Error updating node data:",ht),null}return null}),E=await Promise.all(v);R.setState({ids:S.filter(G=>!E.includes(G)),total:$-E.length}),l({}),c(!1)}catch(v){console.error("Error:",v),c(!1)}};return w?e.jsx(e.Fragment,{children:Object.keys(w).length?e.jsx(pn,{align:"center",justify:s?"center":"flex-start",children:s?e.jsx(z,{color:x.white}):e.jsxs(e.Fragment,{children:[e.jsxs(de,{component:"table",children:[b>0?e.jsx(zo,{children:e.jsxs(U,{component:"tr",children:[e.jsx(f,{children:e.jsx(V,{onClick:()=>l({}),children:e.jsx(ee,{})})}),e.jsx(f,{colSpan:12,children:e.jsxs(dn,{children:[e.jsxs(cn,{children:[e.jsx(ln,{children:b}),"selected"]}),e.jsx(f,{className:"empty"}),e.jsx(Ge,{onClick:_,role:"button",children:o?e.jsxs(e.Fragment,{children:[e.jsx(ze,{})," Unmute ALL"]}):e.jsxs(e.Fragment,{children:[e.jsx(Ie,{})," Mute ALL"]})}),e.jsx(f,{className:"empty"}),e.jsxs(Ge,{onClick:()=>L("mergeTopic"),children:[e.jsx(Be,{})," Merge"]})]})}),e.jsx(f,{className:"empty"})]})}):e.jsx(he,{children:e.jsxs(U,{component:"tr",children:[e.jsx(f,{className:"empty"}),e.jsx(f,{children:e.jsxs(me,{onClick:()=>W(Te),children:["Name ",e.jsx(ue,{})]})}),e.jsx(f,{children:"Type"}),e.jsx(f,{children:e.jsxs(me,{onClick:()=>W(At),children:["Count ",e.jsx(ue,{})]})}),e.jsx(f,{children:"Edge list"}),e.jsx(f,{children:e.jsxs(me,{onClick:()=>W(Ft),children:["Date ",e.jsx(ue,{})]})}),e.jsx(f,{children:e.jsx(g,{px:8,children:e.jsxs(sn,{onClick:t,children:[e.jsx(nn,{checked:o,children:e.jsx(rn,{children:o&&e.jsx(it,{})})}),"Muted"]})})})]})}),w&&e.jsx("tbody",{children:S==null?void 0:S.map(v=>e.jsx(tn,{checkedStates:i,isMuteDisabled:Object.values(i).filter(E=>E).length>1,onClick:A,onSearch:B,setCheckedStates:l,topic:w[v]},v))})]}),p?e.jsxs(an,{anchorEl:u,anchorOrigin:{vertical:"bottom",horizontal:"right"},id:T,onClose:F,open:k,transformOrigin:{vertical:"top",horizontal:"right"},children:[o?e.jsxs(Y,{"data-testid":"unmute",onClick:()=>L("unMute"),children:[" ",e.jsx(ze,{"data-testid":""})," Unmute"]}):e.jsxs(Y,{"data-testid":"mute",onClick:()=>L("mute"),children:[" ",e.jsx(Ie,{"data-testid":"VisibilityOff"})," Mute"]}),e.jsxs(Y,{"data-testid":"rename",onClick:()=>L("editTopic"),children:[e.jsx(Lt,{"data-testid":"EditTopicIcon"})," Rename"]}),e.jsxs(Y,{"data-testid":"merge",onClick:()=>L("mergeTopic"),children:[e.jsx(Be,{"data-testid":"MergeIcon"})," Merge"]}),e.jsxs(Y,{"data-testid":"add_edge",onClick:()=>L("addEdge"),children:[e.jsx(Rt,{"data-testid":"AddCircleIcon"})," Add edge"]})]}):null]})}):e.jsxs(g,{children:[e.jsx(N,{children:"There is not any results for selected filters"}),e.jsx(be,{})]})}):e.jsxs(g,{children:[e.jsx(N,{children:"There is not any results for selected filters"}),e.jsx(be,{})]})},sn=d.td`
  cursor: pointer;
  display: flex;
  align-items: center;
`,nn=d.div`
  width: 14px;
  height: 14px;
  border-radius: 4px;
  border: ${({checked:t})=>t?"#618AFF":"2px solid #CCCCCC"};
  background-color: ${({checked:t})=>t?"#618AFF":"transparent"};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 8px;
`,rn=d.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 2px;
  background-color: transparent;
`,me=d.span`
  cursor: pointer;
  display: flex;
  gap: 4px;
  align-items: center;
`,Y=d(g).attrs({direction:"row",px:12,py:8})`
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
`,an=d(we)`
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
`,ln=d.span`
  font-family: Barlow;
  font-size: 13px;
  font-weight: 500;
  margin-right: 4px;
  margin-top: 1px;
`,Ge=d.div`
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
`,cn=d.div`
  display: flex;
  align-items: center;
  gap: 2px;
`,dn=d.span`
  display: flex;
  align-items: center;
  gap: 27px;
`,pn=d(g)`
  min-height: 0;
  overflow: auto;
  flex: 1;
  width: 100%;
  position: relative;
`,xn=()=>{const[t,o,n,r,i,l,a,s]=R(T=>[T.data,T.ids,T.total,T.setTopics,T.filters,T.setFilters,T.terminate,T.loading]),{open:c}=M("editTopic"),{open:u}=M("mergeTopic"),{open:m}=M("addEdge"),[p,j]=h.useState(null),[b,y]=h.useState([]),[C,w]=h.useState({}),S={editTopic:c,mergeTopic:u,addEdge:m},$=h.useRef([]);h.useEffect(()=>{o.length&&($.current=o)},[o]),h.useEffect(()=>{(async()=>{try{await r()}catch{console.error("err")}})()},[r,i]);const A=async()=>{l({page:i.page+1})};h.useEffect(()=>()=>{a()},[a]);const F=T=>{l({sortBy:T})},B=()=>{j(null),y([])},L=async(T,_)=>{try{await le(T,{node_data:{is_muted:_==="mute"}}),R.setState({ids:o.filter(v=>v!==T),total:n-1})}catch(v){console.warn(v)}},W=async(T,_)=>{if(t)if(_==="mergeTopic")if(Object.values(C).filter(v=>v).length>0){const v=Object.entries(C).filter(([,E])=>E).map(([E])=>t[E]);y(v),u()}else y([t[T]]),j(t[T]),u();else["mute","unMute"].includes(_)&&await L(T,_),typeof S[_]=="function"&&S[_](),j(t[T])},k=T=>{l({...i,search:T})};return e.jsxs(e.Fragment,{children:[e.jsxs(hn,{direction:"column",justify:"flex-end",children:[e.jsx($e,{align:"flex-start",direction:"row",justify:"space-between",children:e.jsx(N,{className:"title",children:"Topics"})}),e.jsx(gn,{"data-testid":"topic-search-container",children:e.jsx(pt,{activeIcon:e.jsx(ee,{}),defaultIcon:e.jsx(Ke,{}),loading:s,loadingIcon:e.jsx(z,{color:x.lightGray,size:24}),onSearch:k,placeholder:"Search ..."})}),e.jsx(un,{align:"center",justify:s&&!t?"center":"flex-start",children:s&&!t?e.jsx(z,{color:x.white}):e.jsxs(e.Fragment,{children:[e.jsx(on,{checkedStates:C,onChangeFilter:F,onTopicEdit:W,setCheckedStates:w,setShowMuteUnmute:()=>l({is_muted:!i.is_muted}),showMuted:i.is_muted}),n>o.length?e.jsxs(H,{className:"load-more",disabled:s,onClick:A,children:["Load more",s&&e.jsx(z,{color:x.lightGray,size:10})]}):null]})})]}),b.length>0&&e.jsx(Gs,{multiTopics:b,onClose:B}),p&&e.jsx(zs,{onClose:B,topic:p}),p&&e.jsx(Ss,{onClose:B,topic:p})]})},hn=d(g)`
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
`,un=d(g)`
  min-height: 0;
  overflow: auto;
  flex: 1;
  width: 100%;
`,gn=d(g)`
  margin: 0 0 16px 36px;
`,fn=[{label:tt,component:Fo},{label:Ot,component:ls},{label:et,component:Ko},{label:Je,component:xn}],mn=t=>{const{children:o,value:n,index:r,...i}=t;return n===r?e.jsx(Cn,{"aria-labelledby":`simple-tab-${r}`,hidden:n!==r,id:`simple-tabpanel-${r}`,role:"tabpanel",...i,children:o}):null};function bn(t){return{id:`simple-tab-${t}`,"aria-controls":`simple-tabpanel-${t}`}}const jn=()=>{const[t,o]=h.useState(0),[n]=qe(s=>[s.isAdmin]),[r]=St(s=>[s.queuedSourcesFeatureFlag]),i=$t(),l=(s,c)=>{o(c)},a=fn.filter(({label:s})=>s===Je?n:s===et?n&&r:s===tt?i:!0);return e.jsxs(vn,{"data-testid":"sources-table",direction:"column",children:[e.jsx(yn,{"aria-label":"sources tabs",onChange:l,value:t,children:a.map((s,c)=>e.jsx(wn,{color:x.white,disableRipple:!0,label:s.label,...bn(c)},s.label))}),a.map((s,c)=>e.jsx(mn,{index:c,value:t,children:e.jsx(s.component,{})},s.label))]})},yn=d(Vt)`
  && {
    background: rgba(0, 0, 0, 0.2);
    border-radius: 9px 9px 0 0;
    .MuiTabs-indicator {
      background: ${x.primaryBlue};
    }
  }
`,wn=d(qt)`
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
`,Cn=d(g)`
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
`,vn=d(g)`
  min-height: 0;
  flex: 1;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 3px;
  }
`,Un=()=>{const{close:t}=M("sourcesTable"),{visible:o}=M("addContent");return o?null:e.jsx(ce,{background:"BG1",id:"sourcesTable",kind:"large",noWrap:!0,onClose:t,preventOutsideClose:!0,children:e.jsx(jn,{})})};export{Un as SourcesTableModal};
