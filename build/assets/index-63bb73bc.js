import{r as h,c as q,d as X,s as O,b as B,u as K,_ as Z,j as e,f as J,h as ee,i as D,a2 as gt,e as ne,a3 as ft,t as c,v as x,T as N,F as g,aQ as mt,a5 as oe,R as re,q as le,a0 as bt,aR as jt,aS as Ve,w as ae,aT as Qe,H as we,aB as _e,aC as Ne,aD as ze,aU as yt,z as qe,aV as wt,aW as Xe,aX as Ct,aA as vt,aY as ce,aZ as Tt,y as $t,N as St,Q as kt}from"./index-b416b1a9.js";import{B as de}from"./index-8331965f.js";import{B as W,u as M,aM as _t,r as Nt,t as Ce,aN as je,aw as Q,aO as zt,D as Rt,s as Bt,ai as te,a2 as Ke,aP as Ze,aQ as Je,aR as et,a0 as ve,a1 as Te,ah as tt,aS as Lt,aT as It,aU as Mt,aV as Re,aW as Be,p as Le,aX as ge,aY as Et,q as At}from"./index-1f5ac1eb.js";import{T as Ie,s as U,a as ot,S as st,A as $e,E as Ot,D as Ft,b as nt,Q as rt,V as at,c as Wt}from"./constants-6b0b8728.js";import{C as z}from"./ClipLoader-a0a9ce2c.js";import{f as Ht,g as Pt,h as Dt,a as Ut}from"./index.esm-258646ab.js";import{I as Gt,A as Se,T as it}from"./index-69075348.js";import{B as Yt,T as Vt}from"./index-64813bbe.js";import{u as L}from"./index-5f0e754b.js";import{O as lt}from"./constants-b2a2fa82.js";import{T as Me}from"./Typography-4efd6f29.js";import{T as Qt,a as qt}from"./Tabs-79411ac3.js";import"./Stack-34a19487.js";import"./createSvgIcon-23cd916d.js";import"./TextareaAutosize-2d5341b4.js";const Xt=h.createContext(),ct=Xt;function Kt(t){return q("MuiTable",t)}X("MuiTable",["root","stickyHeader"]);const Zt=["className","component","padding","size","stickyHeader"],Jt=t=>{const{classes:o,stickyHeader:n}=t;return ee({root:["root",n&&"stickyHeader"]},Kt,o)},eo=O("table",{name:"MuiTable",slot:"Root",overridesResolver:(t,o)=>{const{ownerState:n}=t;return[o.root,n.stickyHeader&&o.stickyHeader]}})(({theme:t,ownerState:o})=>B({display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":B({},t.typography.body2,{padding:t.spacing(2),color:(t.vars||t).palette.text.secondary,textAlign:"left",captionSide:"bottom"})},o.stickyHeader&&{borderCollapse:"separate"})),Ee="table",to=h.forwardRef(function(o,n){const r=K({props:o,name:"MuiTable"}),{className:l,component:i=Ee,padding:a="normal",size:s="medium",stickyHeader:d=!1}=r,u=Z(r,Zt),m=B({},r,{component:i,padding:a,size:s,stickyHeader:d}),p=Jt(m),b=h.useMemo(()=>({padding:a,size:s,stickyHeader:d}),[a,s,d]);return e.jsx(ct.Provider,{value:b,children:e.jsx(eo,B({as:i,role:i===Ee?null:"table",ref:n,className:J(p.root,l),ownerState:m},u))})}),pe=to,oo=h.createContext(),xe=oo;function so(t){return q("MuiTableBody",t)}X("MuiTableBody",["root"]);const no=["className","component"],ro=t=>{const{classes:o}=t;return ee({root:["root"]},so,o)},ao=O("tbody",{name:"MuiTableBody",slot:"Root",overridesResolver:(t,o)=>o.root})({display:"table-row-group"}),io={variant:"body"},Ae="tbody",lo=h.forwardRef(function(o,n){const r=K({props:o,name:"MuiTableBody"}),{className:l,component:i=Ae}=r,a=Z(r,no),s=B({},r,{component:i}),d=ro(s);return e.jsx(xe.Provider,{value:io,children:e.jsx(ao,B({className:J(d.root,l),as:i,ref:n,role:i===Ae?null:"rowgroup",ownerState:s},a))})}),co=lo;function po(t){return q("MuiTableCell",t)}const xo=X("MuiTableCell",["root","head","body","footer","sizeSmall","sizeMedium","paddingCheckbox","paddingNone","alignLeft","alignCenter","alignRight","alignJustify","stickyHeader"]),ho=xo,uo=["align","className","component","padding","scope","size","sortDirection","variant"],go=t=>{const{classes:o,variant:n,align:r,padding:l,size:i,stickyHeader:a}=t,s={root:["root",n,a&&"stickyHeader",r!=="inherit"&&`align${D(r)}`,l!=="normal"&&`padding${D(l)}`,`size${D(i)}`]};return ee(s,po,o)},fo=O("td",{name:"MuiTableCell",slot:"Root",overridesResolver:(t,o)=>{const{ownerState:n}=t;return[o.root,o[n.variant],o[`size${D(n.size)}`],n.padding!=="normal"&&o[`padding${D(n.padding)}`],n.align!=="inherit"&&o[`align${D(n.align)}`],n.stickyHeader&&o.stickyHeader]}})(({theme:t,ownerState:o})=>B({},t.typography.body2,{display:"table-cell",verticalAlign:"inherit",borderBottom:t.vars?`1px solid ${t.vars.palette.TableCell.border}`:`1px solid
    ${t.palette.mode==="light"?gt(ne(t.palette.divider,1),.88):ft(ne(t.palette.divider,1),.68)}`,textAlign:"left",padding:16},o.variant==="head"&&{color:(t.vars||t).palette.text.primary,lineHeight:t.typography.pxToRem(24),fontWeight:t.typography.fontWeightMedium},o.variant==="body"&&{color:(t.vars||t).palette.text.primary},o.variant==="footer"&&{color:(t.vars||t).palette.text.secondary,lineHeight:t.typography.pxToRem(21),fontSize:t.typography.pxToRem(12)},o.size==="small"&&{padding:"6px 16px",[`&.${ho.paddingCheckbox}`]:{width:24,padding:"0 12px 0 16px","& > *":{padding:0}}},o.padding==="checkbox"&&{width:48,padding:"0 0 0 4px"},o.padding==="none"&&{padding:0},o.align==="left"&&{textAlign:"left"},o.align==="center"&&{textAlign:"center"},o.align==="right"&&{textAlign:"right",flexDirection:"row-reverse"},o.align==="justify"&&{textAlign:"justify"},o.stickyHeader&&{position:"sticky",top:0,zIndex:2,backgroundColor:(t.vars||t).palette.background.default})),mo=h.forwardRef(function(o,n){const r=K({props:o,name:"MuiTableCell"}),{align:l="inherit",className:i,component:a,padding:s,scope:d,size:u,sortDirection:m,variant:p}=r,b=Z(r,uo),j=h.useContext(ct),y=h.useContext(xe),C=y&&y.variant==="head";let w;a?w=a:w=C?"th":"td";let $=d;w==="td"?$=void 0:!$&&C&&($="col");const S=p||y&&y.variant,A=B({},r,{align:l,component:w,padding:s||(j&&j.padding?j.padding:"normal"),size:u||(j&&j.size?j.size:"medium"),sortDirection:m,stickyHeader:S==="head"&&j&&j.stickyHeader,variant:S}),F=go(A);let R=null;return m&&(R=m==="asc"?"ascending":"descending"),e.jsx(fo,B({as:w,ref:n,className:J(F.root,i),"aria-sort":R,scope:$,ownerState:A},b))}),bo=mo;function jo(t){return q("MuiTableHead",t)}X("MuiTableHead",["root"]);const yo=["className","component"],wo=t=>{const{classes:o}=t;return ee({root:["root"]},jo,o)},Co=O("thead",{name:"MuiTableHead",slot:"Root",overridesResolver:(t,o)=>o.root})({display:"table-header-group"}),vo={variant:"head"},Oe="thead",To=h.forwardRef(function(o,n){const r=K({props:o,name:"MuiTableHead"}),{className:l,component:i=Oe}=r,a=Z(r,yo),s=B({},r,{component:i}),d=wo(s);return e.jsx(xe.Provider,{value:vo,children:e.jsx(Co,B({as:i,className:J(d.root,l),ref:n,role:i===Oe?null:"rowgroup",ownerState:s},a))})}),dt=To;function $o(t){return q("MuiTableRow",t)}const So=X("MuiTableRow",["root","selected","hover","head","footer"]),Fe=So,ko=["className","component","hover","selected"],_o=t=>{const{classes:o,selected:n,hover:r,head:l,footer:i}=t;return ee({root:["root",n&&"selected",r&&"hover",l&&"head",i&&"footer"]},$o,o)},No=O("tr",{name:"MuiTableRow",slot:"Root",overridesResolver:(t,o)=>{const{ownerState:n}=t;return[o.root,n.head&&o.head,n.footer&&o.footer]}})(({theme:t})=>({color:"inherit",display:"table-row",verticalAlign:"middle",outline:0,[`&.${Fe.hover}:hover`]:{backgroundColor:(t.vars||t).palette.action.hover},[`&.${Fe.selected}`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.selectedOpacity})`:ne(t.palette.primary.main,t.palette.action.selectedOpacity),"&:hover":{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.hoverOpacity}))`:ne(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.hoverOpacity)}}})),We="tr",zo=h.forwardRef(function(o,n){const r=K({props:o,name:"MuiTableRow"}),{className:l,component:i=We,hover:a=!1,selected:s=!1}=r,d=Z(r,ko),u=h.useContext(xe),m=B({},r,{component:i,hover:a,selected:s,head:u&&u.variant==="head",footer:u&&u.variant==="footer"}),p=_o(m);return e.jsx(No,B({as:i,ref:n,className:J(p.root,l),role:i===We?null:"row",ownerState:m},d))}),G=zo;function ye(t){const o=new Date(Number(t)*1e3),n=o.getFullYear(),r=(1+o.getMonth()).toString().padStart(2,"0");return`${o.getDate().toString().padStart(2,"0")}/${r}/${n}`}const f=c(bo)`
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
`,Ro=c(dt)`
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
`;function Bo(t){return t.charAt(0).toUpperCase()+t.slice(1).toLowerCase()}const Lo=({node:t})=>{var o,n,r,l,i,a,s,d,u;return e.jsxs(he,{children:[e.jsx(f,{className:"empty"}),e.jsx(f,{children:(o=t==null?void 0:t.properties)!=null&&o.date_added_to_graph?ye((n=t==null?void 0:t.properties)==null?void 0:n.date_added_to_graph):ye((r=t==null?void 0:t.properties)==null?void 0:r.date)}),e.jsx(f,{children:t==null?void 0:t.node_type}),e.jsx(f,{children:(t==null?void 0:t.node_type)==="Tweet"?e.jsx(He,{href:`${Ie}${(l=t==null?void 0:t.properties)==null?void 0:l.tweet_id}${Ie.includes("?")?"&":"?"}open=system`,target:"_blank",children:(i=t==null?void 0:t.properties)==null?void 0:i.tweet_id}):e.jsx(He,{href:`${(a=t==null?void 0:t.properties)==null?void 0:a.source_link}${((s=t==null?void 0:t.properties)==null?void 0:s.source_link).includes("?")?"&":"?"}open=system`,target:"_blank",children:(d=t==null?void 0:t.properties)==null?void 0:d.source_link})}),e.jsx(f,{children:(u=t==null?void 0:t.properties)!=null&&u.status?Bo(t.properties.status):"Processing"})]})},He=c.a`
  color: ${x.white};
  text-decoration: underline;
  &:visited {
    color: ${x.white};
  }
`,Io=h.memo(Lo),Mo=({nodes:t})=>{const{open:o}=M("addContent"),n=async()=>{o()};return!t||(t==null?void 0:t.length)===0?e.jsx(e.Fragment,{children:e.jsxs(Eo,{children:[e.jsx(Oo,{children:e.jsx(_t,{})}),e.jsx(Ao,{children:e.jsx(N,{className:"subtitle",children:"Contribute to the graph by adding your first content."})}),e.jsx(g,{justify:"center",children:e.jsx(W,{color:"secondary",onClick:n,size:"medium",startIcon:e.jsx(Nt,{}),type:"submit",variant:"contained",children:"Add Content"})})]})}):e.jsxs(pe,{component:"table",children:[e.jsx(ue,{children:e.jsxs(G,{component:"tr",children:[e.jsx(f,{className:"empty"}),e.jsx(f,{children:"Date"}),e.jsx(f,{children:"Type"}),e.jsx(f,{children:"Source"}),e.jsx(f,{children:"Status"})]})}),e.jsx("tbody",{children:t==null?void 0:t.map(r=>e.jsx(Io,{node:r},r==null?void 0:r.ref_id))})]})},Eo=O(g)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 150px auto;
  width: 100%;
  flex-direction: column;
`,Ao=O(g)`
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
`,Oo=O(g)`
  margin-bottom: 20px;

  svg {
    fill: none;
    height: 60px;
    width: 60px;
  }
`,Fo=()=>{const[t,o]=h.useState([]),[n,r]=h.useState(!0),[l,i]=h.useState(10),[a,s]=h.useState(!0),d={only_content:"true",sort_by:"date",limit:l.toString()},u=async()=>{r(!0);try{const p=await mt(d);o(p.nodes),r(!1)}catch(p){console.error("Error fetching data:",p),r(!1)}};h.useEffect(()=>{u()},[l]);const m=()=>{i(l+10),u()};return e.jsx(Wo,{direction:"column",justify:"flex-end",children:e.jsxs(Ho,{align:"center",justify:n?"center":"flex-start",children:[n?e.jsx(z,{color:x.white}):e.jsx(e.Fragment,{children:e.jsx(Mo,{nodes:t})}),!n&&t.length>0&&(a?e.jsx(W,{onClick:m,size:"medium",children:"Load More"}):e.jsx(Po,{children:"No new nodes available"}))]})})},Wo=c(g)`
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
`,Ho=c(g)`
  min-height: 0;
  overflow: auto;
  flex: 1;
  width: 100%;
`,Po=c.div`
  margin-top: 10px;
  color: ${x.GRAY3};
  font-family: Barlow;
  font-size: 14px;
`,Do=({kind:t,shape:o})=>{switch(t){case"small":return oe`
        padding: 4px 8px;
        border-radius: ${o==="rounded"?"16px":"8px"};
        height: 32px;
      `;case"big":return oe`
        padding: 16px 24px;
        border-radius: ${o==="rounded"?"24px":"8px"};
        height: 48px;
      `;default:return oe`
        padding: 8px 16px;
        border-radius: ${o==="rounded"?"32px":"8px"};
        height: 64px;
      `}},Uo=({kind:t})=>{switch(t){case"small":return"regularBold";case"big":return"mediumBold";default:return"regularBold"}},Go=c(g).attrs({align:"center",direction:"row",justify:"center"})`
  border: none;
  cursor: pointer;
  pointer-events: auto;

  ${Do}

  &:hover {
    opacity: ${({disabled:t})=>t?.5:.9};
  }

  ${({disabled:t})=>t&&oe`
      opacity: 0.5;
      pointer-events: none;
    `}
`,Pe=({background:t="primaryButton",children:o,className:n="button",startIcon:r,endIcon:l,disabled:i,id:a,kind:s="regular",onClick:d,onPointerDown:u,shape:m="squared",textColor:p="white",type:b})=>e.jsxs(Go,{as:"button",background:t,className:n,disabled:i,id:a,kind:s,onClick:d,onPointerDown:u,shape:m,type:b,children:[r&&r,e.jsx(N,{color:p,kind:Uo({kind:s}),children:o}),l&&l]}),pt=({message:t="Are you sure you want to delete this item?",onConfirm:o,children:n,anchorOrigin:r={vertical:"bottom",horizontal:"left"},transformOrigin:l={vertical:"top",horizontal:"center"}})=>{const[i,a]=h.useState(null),s=b=>{a(b.currentTarget)},d=()=>{a(null)},u=()=>{o(),d()},m=()=>{d()},p=!!i;return e.jsxs(e.Fragment,{children:[e.jsx("div",{children:re.cloneElement(n,{onClick:s})}),e.jsx(Vo,{anchorEl:i,anchorOrigin:r,onClose:d,open:p,transformOrigin:l,children:e.jsxs(Yo,{children:[e.jsx(N,{className:"message",children:t}),e.jsxs(Qo,{children:[e.jsx(Pe,{background:"primaryBlue",kind:"small",onClick:u,children:"Yes"}),e.jsx(Pe,{background:"white",kind:"small",onClick:m,textColor:"black",children:"No"})]})]})})]})},Yo=c(g)`
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
`,Vo=c(Ce)`
  && {
    z-index: 9999;
  }
`,Qo=c(g)`
  display: flex;
  flex-direction: row;
  gap: 12px;
  align-items: center;
  margin-top: 16px;
`,qo=({data:t})=>{const o=le(a=>a.setQueuedSources),[n,r]=h.useState(""),l=async a=>{if(t!=null&&t.length)try{const s=await bt.enable();await jt(a,s.pubkey),o(t.filter(d=>d.ref_id!==a))}catch(s){console.warn(s)}},i=async a=>{if(!(!a||!(t!=null&&t.length))){r(a);try{await Ve(a),o(t==null?void 0:t.filter(s=>s.ref_id!==a))}catch(s){console.warn(s)}finally{r("")}}};return t!=null&&t.length?e.jsxs(pe,{component:"table",children:[e.jsx(ue,{children:e.jsxs(G,{component:"tr",children:[e.jsx(f,{className:"empty"}),e.jsx(f,{children:"Type"}),e.jsx(f,{children:"Source"}),e.jsx(f,{}),e.jsx(f,{className:"empty"})]})}),(t==null?void 0:t.length)&&e.jsx("tbody",{children:t==null?void 0:t.map(a=>e.jsxs(he,{children:[e.jsx(f,{className:"empty"}),e.jsx(f,{children:U[a.source_type]}),e.jsx(f,{width:"268px",children:a.source_type==="twitter_handle"?e.jsxs(Ue,{href:`${ot}/${a.source}?open=system`,target:"_blank",children:["@",a.source]}):e.jsx(Ue,{href:`${a.source}?open=system`,target:"_blank",children:a.source})}),e.jsx(f,{className:"cell-center",children:e.jsxs(g,{direction:"row",justify:"flex-end",children:[e.jsx(Xo,{className:"approve-wrapper",children:e.jsx(De,{className:"centered",onClick:()=>l(a.ref_id),children:e.jsx(Ht,{color:x.primaryGreen,fontSize:24})})}),e.jsx("div",{className:"delete-wrapper",children:n===a.ref_id?e.jsx(z,{color:x.white,size:16}):e.jsx(pt,{message:"Are you sure ?",onConfirm:()=>i(a.ref_id),children:e.jsx(De,{className:"centered",children:e.jsx(Pt,{color:x.primaryRed,fontSize:24})})})})]})}),e.jsx(f,{className:"empty"})]},a.source))})]}):e.jsxs(g,{children:[e.jsx(N,{children:"There is not any results for selected filters"}),e.jsx(je,{})]})},De=c(g)`
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
`,Xo=c.div`
  margin-right: 40px;
`,Ko=()=>{const[t,o]=h.useState(!0),[n,r]=h.useState(""),[l,i]=le(d=>[d.queuedSources,d.setQueuedSources]);h.useEffect(()=>{(async()=>{o(!0);try{const u=await Qe({approved:"False"});i(u.data)}catch(u){console.warn(u)}finally{o(!1)}})()},[i]);const a=d=>{r(n===d||!d?"":d)},s=l==null?void 0:l.filter(d=>!n||d.source_type===n);return e.jsxs(Zo,{align:"stretch",direction:"column",justify:"flex-end",children:[e.jsxs(ke,{align:"flex-start",justify:"space-between",children:[e.jsx(N,{className:"title",children:"Queued Sources"}),e.jsx(N,{className:"subtitle",children:"This is a queue of pending sources waiting for approval or denial from graph users. If you think a source will provide good content for the graph, you can pay to approve it. Think of this as an investment: you pay to add it to the source table, and if the content is popular you will earn from it. If content is not relevant to the graph, you should deny it."})]}),e.jsxs(g,{className:"filters",direction:"row",pb:16,px:36,children:[e.jsx(ie,{className:ae({selected:!n}),onClick:()=>a(""),size:"small",children:"All"}),Object.keys(U).map(d=>e.jsx(ie,{className:ae({selected:d===n}),onClick:()=>a(d),size:"small",children:U[d]},d))]}),e.jsx(Jo,{align:"center",justify:t?"center":"flex-start",children:t?e.jsx(z,{color:x.white}):e.jsx(qo,{data:s})})]})},Zo=c(g)`
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
`,Jo=c(g)`
  min-height: 0;
  overflow: auto;
  flex: 1;
  width: 100%;
`,xt=({onSearch:t,placeholder:o,activeIcon:n,defaultIcon:r,loadingIcon:l,loading:i,...a})=>{const[s,d]=h.useState(""),u=()=>{d(""),t("")},m=h.useCallback(y=>{t(y)},[t]),p=h.useMemo(()=>we.debounce(m,300),[m]),b=y=>{const C=y.target.value.trim(),{value:w}=y.target;d(w),C?p(C):u()},j=()=>i?e.jsx(Ge,{children:e.jsx(fe,{type:"button",children:l})}):e.jsx(Ge,{children:s?e.jsx(fe,{onClick:u,type:"button",children:n}):e.jsx(fe,{type:"button",children:r})});return e.jsxs(es,{children:[e.jsx(ts,{autoComplete:"off",autoCorrect:"off",inputProps:{"aria-label":"search"},onChange:b,placeholder:o,value:s,...a}),j()]})},Ge=c(g)`
  top: -50%;
  right: -3%;
  z-index: 3;
  position: absolute;
  transform: translate(-50%, 50%);
`,fe=c(Q)`
  font-size: 24px;
`,es=c(zt)`
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
`,ts=c(Gt)`
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
`,os=t=>e.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 21 21",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M13.8 9.97481L5.82503 1.9998H18C18.4167 1.9998 18.7167 2.18314 18.9 2.5498C19.0834 2.91647 19.05 3.26647 18.8 3.5998L13.8 9.97481ZM18.775 20.5998L13 14.8248V16.9998C13 17.2831 12.9042 17.5206 12.7125 17.7123C12.5209 17.904 12.2834 17.9998 12 17.9998H10C9.71669 17.9998 9.47919 17.904 9.28753 17.7123C9.09586 17.5206 9.00002 17.2831 9.00002 16.9998V10.8248L0.400024 2.2248L1.80002 0.799805L20.2 19.1998L18.775 20.5998Z",fill:"currentColor"})}),ss=({data:t,canEdit:o=!1})=>{const n=le(s=>s.setSources),[r,l]=h.useState(""),i=async(s,d)=>{if(t!=null&&t.length)try{await yt(s,d);const u=t==null?void 0:t.findIndex(p=>p.ref_id===s),m=[...t];m[u]={...m[u],source:d.source},n(m)}catch(u){console.warn(u)}},a=async s=>{if(!(!s||!(t!=null&&t.length))){l(s);try{await Ve(s),n(t==null?void 0:t.filter(d=>d.ref_id!==s))}catch(d){console.warn(d)}finally{l("")}}};return t!=null&&t.length?e.jsxs(pe,{"aria-label":"a dense table",component:"table",id:"sources-table",size:"small",children:[e.jsx(ue,{children:e.jsxs(G,{component:"tr",children:[e.jsx(f,{className:"empty"}),e.jsx(f,{children:"Type"}),e.jsx(f,{align:"left",children:"Source"}),o&&e.jsx(f,{align:"left"}),e.jsx(f,{className:"empty"})]})}),e.jsx(co,{component:"tbody",children:t==null?void 0:t.map(s=>e.jsxs(he,{children:[e.jsx(f,{className:"empty"}),e.jsx(f,{align:"left",children:U[s.source_type]}),e.jsx(f,{align:"left",children:e.jsx(ns,{condition:o,wrapper:d=>e.jsx(rs,{id:s.ref_id,onSave:u=>i(s.ref_id,{source:u,source_type:s.source_type}),value:s.source,children:d}),children:s.source_type===_e||s.source_type===Ne||s.source_type===ze?e.jsxs(e.Fragment,{children:[s.source_type===_e&&e.jsxs(me,{href:`${ot}/${s.source}`,target:"_blank",children:["@",s.source]}),s.source_type===Ne&&e.jsx(me,{href:`${s.source}${s.source.includes("?")?"&":"?"}open=system`,target:"_blank",children:s.source}),s.source_type===ze&&e.jsx(me,{href:s.source,target:"_blank",children:s.source})]}):e.jsx("div",{children:s.source})})}),o&&e.jsx(f,{align:"left",children:e.jsx("div",{className:"delete-wrapper",id:`delete-${s.source}`,children:r===s.ref_id?e.jsx(ht,{"data-testid":`delete-loader-${s.ref_id}`,children:e.jsx(z,{color:x.white,size:16})}):e.jsx(pt,{"data-testid":`delete-icon-${s.ref_id}`,message:"Are you sure?",onConfirm:()=>a(s.ref_id),children:e.jsx(se,{className:"centered","data-testid":`delete-icon-${s.ref_id}`,children:e.jsx(Rt,{})})})})}),e.jsx(f,{className:"empty"})]},s.source))})]}):e.jsxs(is,{children:[e.jsx(os,{}),e.jsx(N,{className:"text",children:"There is not any results for selected filters"})]})};function ns({condition:t,wrapper:o,children:n}){return t?o(n):n}const rs=({value:t,onSave:o,id:n,children:r})=>{const[l,i]=h.useState(!1),[a,s]=h.useState(t),[d,u]=h.useState(!1),m=async()=>{if(n){u(!0);try{await o(a),i(!1)}catch(p){console.warn(p)}finally{u(!1)}}};return e.jsx("div",{children:l?e.jsxs(as,{align:"center",direction:"row",children:[e.jsx(Yt,{className:"editable-cell__input",name:"cell-input",onChange:p=>s(p),value:a}),e.jsx(se,{align:"center",justify:"center",children:d?e.jsx(ht,{"data-testid":`edit-loader-${n}`,children:e.jsx(z,{color:x.white,size:12})}):e.jsx(Dt,{"data-testid":`check-icon-${n}`,onClick:m})}),e.jsx(se,{align:"center",className:"secondary",justify:"center",onClick:()=>i(!1),children:e.jsx(Ut,{})})]}):e.jsxs(ls,{direction:"row",children:[e.jsx("div",{className:"name",children:r}),e.jsx("div",{className:"spacer"}),e.jsx(se,{onClick:()=>i(!0),children:e.jsx(Bt,{"data-testid":`edit-icon-${n}`})})]})})},as=c(g)`
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
`,se=c(g)`
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
`,is=c(g)`
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
`,ls=c(g)`
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
`,cs=()=>{const[t,o]=h.useState(!0),[n,r]=h.useState(""),[l,i]=le(p=>[p.sources,p.setSources]),[a]=qe(p=>[p.isAdmin]),[s,d]=h.useState("");h.useEffect(()=>{(async()=>{o(!0);try{const b=await Qe();i(b.data)}catch(b){console.warn(b)}finally{o(!1)}})()},[i]);const u=p=>{r(n===p||!p?"":p)},m=h.useMemo(()=>l==null?void 0:l.filter(p=>(!n||p.source_type===n)&&(p.source.toLowerCase().startsWith(s.toLowerCase())||p.source.toLowerCase().includes(s.toLowerCase())||`@${p.source.toLowerCase()}`.startsWith(s.toLowerCase())||`@${p.source.toLowerCase()}`.includes(s.toLowerCase()))),[s,n,l]);return e.jsxs(ds,{align:"stretch",direction:"column",justify:"flex-end",children:[e.jsx(ke,{align:"center",direction:"row",justify:"space-between",children:e.jsx(N,{className:"title",children:"Sources for this Graph"})}),e.jsx(xs,{children:e.jsx(xt,{activeIcon:e.jsx(te,{}),defaultIcon:e.jsx(Ke,{}),loading:t,loadingIcon:e.jsx(z,{color:x.lightGray,size:24}),onSearch:d,placeholder:"Find Source"})}),e.jsxs(g,{className:"filters",direction:"row",pb:16,px:36,children:[e.jsx(ie,{className:ae({selected:!n}),onClick:()=>u(""),size:"small",children:"All"}),Object.keys(U).map(p=>e.jsx(ie,{className:ae({selected:p===n}),onClick:()=>u(p),size:"small",children:U[p]},p))]}),e.jsx(ps,{align:"center",justify:t?"center":"flex-start",children:t?e.jsx(z,{color:x.white}):e.jsx(ss,{canEdit:a,data:m})})]})},ds=c(g)`
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
`,ps=c(g)`
  min-height: 0;
  overflow: auto;
  flex: 1;
  width: 100%;
`,xs=c(g)`
  margin: 0 0 16px 36px;
`,hs=({selectedType:t,setSelectedType:o})=>{const[n,r]=h.useState([]);h.useEffect(()=>{(async()=>{try{const{data:s}=await wt();r(s.edge_types)}catch(s){console.warn(s)}})()},[r]);const l=a=>({label:a,value:a}),i=a=>{o((a==null?void 0:a.value)||"")};return e.jsx(Se,{onSelect:i,options:n.map(l),selectedValue:t?l(t):null})},us=({onSelect:t,selectedValue:o,topicId:n})=>{const[r,l]=h.useState([]),[i,a]=h.useState(!1),s=h.useMemo(()=>{const b=async j=>{const y={is_muted:"False",sort_by:$e,search:j,skip:"0",limit:"1000"};a(!0);try{const w=(await Xe(y.search)).data.filter($=>($==null?void 0:$.ref_id)!==n);l(w)}catch{l([])}finally{a(!1)}};return we.debounce(b,300)},[n]),d=b=>{const j=b.trim();if(!j){l([]);return}j.length>2&&s(b)},u=b=>{const j=b?r.find(y=>y.ref_id===b.value):null;t(j||null)},m=b=>({label:b.search_value,value:b.ref_id,type:b.node_type}),p=b=>b.map(m);return o?e.jsxs(g,{align:"center",basis:"100%",direction:"row",grow:1,shrink:1,children:[e.jsx("span",{children:o.search_value}),e.jsx(st,{onClick:()=>t(null),size:"medium",children:e.jsx(te,{})})]}):e.jsx(Se,{handleInputChange:d,isLoading:i,onSelect:u,options:p(r)||lt,selectedValue:o?m(o):null})},gs=({from:t,onSelect:o,selectedType:n,setSelectedType:r,isSwapped:l,setIsSwapped:i,selectedToNode:a})=>e.jsxs(g,{mb:20,children:[e.jsx(g,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(g,{align:"center",direction:"row",children:e.jsx(fs,{children:"Add edge"})})}),e.jsxs(js,{swap:l,children:[e.jsx(g,{children:e.jsx(ys,{disabled:!0,label:l?"To":"From",swap:l,value:t==null?void 0:t.name})}),e.jsxs(g,{my:16,children:[e.jsx(bs,{children:"Type"}),e.jsx(hs,{selectedType:n,setSelectedType:r})]}),e.jsx(g,{children:e.jsxs(ws,{children:[e.jsx(Cs,{children:l?"From":"To"}),e.jsx(us,{onSelect:o,selectedValue:a,topicId:t==null?void 0:t.ref_id})]})}),e.jsxs(ms,{children:[e.jsx(vs,{children:e.jsx(Ze,{})}),e.jsx(Ts,{onClick:i,children:e.jsx(Je,{})}),e.jsx($s,{children:e.jsx(et,{})})]})]})]}),fs=c(N)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,ms=c.div`
  position: absolute;
  top: 26px;
  bottom: 26px;
  left: 4px;
  width: 35px;
  border-left: 1.5px solid #6b7a8d4d;
  border-top: 1.5px solid #6b7a8d4d;
  border-bottom: 1.5px solid #6b7a8d4d;
  border-radius: 12px 0 0 12px;
`,bs=c.label`
  color: #bac1c6;
  font-size: 13px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0.01em;
  text-align: left;
  margin-bottom: 6px;
`,js=c.div`
  position: relative;
  color: white;
  font-family: 'Barlow';
  display: flex;
  flex-direction: ${t=>t.swap?"column-reverse":"column"};
  margin-bottom: 10px;
  padding-left: 38px;
`,ys=c(it)`
  position: relative;
  width: 100%;
  padding: 16px;
  gap: 10px;
  border-radius: 6px;
  border: 1px solid #6b7a8d4d;
  opacity: 0px;
  display: flex;
`,ws=c.div`
  position: relative;
  width: 100%;
  padding: 15px;
  gap: 10px;
  border-radius: 6px;
  border: 1.4px solid #6b7a8d4d;
  opacity: 0px;
  display: flex;
  align-items: center;
`,Cs=c.label`
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
`,vs=c.div`
  position: absolute;
  top: 0;
  right: 0;
  transform: translateY(-50%) translateX(50%);
  color: #23252f;
`,Ts=c.div`
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
`,$s=c.div`
  position: absolute;
  bottom: 0;
  right: 0;
  transform: translateY(10px) translateX(3px);
  color: #6b7a8d;
  line-height: 1;
`,Ss=({topic:t,onClose:o})=>{const{close:n}=M("addEdge"),[r]=L(w=>[w.data]),l=ve({mode:"onChange"}),[i,a]=h.useState(!1),[s,d]=h.useState(!1),[u,m]=h.useState(""),[p,b]=h.useState(null),j=()=>{o(),n()},y=async()=>{if(!(!p||!r)){d(!0);try{await Ct({from:t.ref_id,to:p==null?void 0:p.ref_id,relationship:u});const{ref_id:w}=t,{ref_id:$}=p;if(r){const S={...r};S[w]={...S[w],edgeList:[...S[w].edgeList,u]},S[$]&&(S[$]={...S[$],edgeList:[...S[$].edgeList,u]}),L.setState({data:S})}j()}catch(w){console.warn(w)}finally{d(!1)}}},C=s||!p||!u;return e.jsx(de,{id:"addEdge",kind:"small",onClose:j,preventOutsideClose:!0,children:e.jsxs(Te,{...l,children:[e.jsx(gs,{from:t,isSwapped:i,onSelect:b,selectedToNode:p,selectedType:u,setIsSwapped:()=>a(!i),setSelectedType:m}),e.jsxs(ks,{color:"secondary",disabled:C,onClick:y,size:"large",variant:"contained",children:["Confirm",s&&e.jsx(_s,{children:e.jsx(z,{color:x.lightGray,size:12})})]})]})})},ks=c(W)`
  width: 293px !important;
  margin: 0 0 10px auto !important;
`,_s=c.span`
  margin-top: 2px;
`,Ns=()=>e.jsxs(g,{children:[e.jsx(g,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(g,{align:"center",direction:"row",children:e.jsx(zs,{children:"Edit topic"})})}),e.jsx(g,{mb:12,children:e.jsx(Vt,{id:"cy-topic",maxLength:50,name:"name",placeholder:"Add your topic",rules:{...vt}})})]}),zs=c(N)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,Rs=({topic:t,onClose:o})=>{const{close:n}=M("editTopic"),[r]=L(w=>[w.data]),l=ve({mode:"onChange"}),{watch:i,setValue:a,reset:s,getValues:d}=l,[u,m]=h.useState(!1);h.useEffect(()=>(t&&a("name",t==null?void 0:t.name),()=>{s()}),[t,a,s]);const p=i("name"),b=p==null?void 0:p.trim(),j=()=>{o(),n()},y=async()=>{m(!0);try{if(await ce((t==null?void 0:t.ref_id)||"",{node_data:{name:b}}),r){const w={...r};w[t==null?void 0:t.ref_id].name=b,L.setState({data:w})}j()}catch(w){console.warn(w)}finally{m(!1)}},C=d().name&&(t==null?void 0:t.name)!==d().name;return e.jsx(de,{id:"editTopic",kind:"regular",onClose:j,preventOutsideClose:!0,children:e.jsxs(Te,{...l,children:[e.jsx(Ns,{}),e.jsxs(W,{color:"secondary",disabled:u||!b||!C,onClick:y,size:"large",variant:"contained",children:["Save Changes",u&&e.jsx(Bs,{children:e.jsx(z,{color:x.lightGray,size:12})})]})]})})},Bs=c.span`
  margin-top: 2px;
`,Ls=({topicId:t,onSelect:o,selectedValue:n,dataId:r})=>{const[l,i]=h.useState([]),[a,s]=h.useState(!1),d=h.useMemo(()=>{const j=async y=>{const C={is_muted:"False",sort_by:$e,search:y,skip:"0",limit:"1000"};s(!0);try{const $=(await Xe(C.search)).data.filter(S=>(S==null?void 0:S.ref_id)!==t);i($)}catch{i([])}finally{s(!1)}};return we.debounce(j,300)},[t]),u=j=>{const y=j.trim();if(!y){i([]);return}y.length>2&&d(j)},m=j=>{const y=j?l.find(C=>C.ref_id===j.value):null;o(y||null)},p=j=>({label:j.search_value,value:j.ref_id,type:j.node_type}),b=j=>j.map(p);return n?e.jsxs(g,{align:"center",basis:"100%",direction:"row",grow:1,shrink:1,children:[e.jsx("span",{children:n.search_value}),e.jsx(st,{onClick:()=>o(null),size:"medium",children:e.jsx(te,{})})]}):e.jsx(Se,{dataId:r,handleInputChange:u,isLoading:a,onSelect:m,options:b(l)||lt,selectedValue:n?p(n):null})},Is=({from:t,onSelect:o,selectedToNode:n,isSwapped:r,setIsSwapped:l})=>{var s;const i=t==null?void 0:t.map(d=>d.name).join(", "),a=t&&t.length===1?t[0].name:`${i==null?void 0:i.substring(0,25)} ...`;return e.jsxs(g,{mb:20,children:[e.jsx(g,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(g,{align:"center",direction:"row",children:e.jsx(Ms,{children:"Merge topic"})})}),e.jsxs(Os,{swap:r,children:[e.jsx(Es,{children:e.jsx(Fs,{disabled:!0,label:r?"To":"From",swap:r,value:a})}),e.jsxs(g,{my:16,children:[e.jsx(Hs,{children:"Type"}),e.jsx(N,{children:"IS ALIAS"})]}),e.jsx(g,{children:e.jsxs(Ws,{children:[e.jsx(Ps,{children:r?"From":"To"}),e.jsx(Ls,{dataId:"to-node",onSelect:o,selectedValue:n,topicId:(s=t[t.length-1])==null?void 0:s.ref_id})]})}),e.jsxs(As,{children:[e.jsx(Ds,{children:e.jsx(Ze,{})}),e.jsx(Us,{"data-testid":"swap-icon",disabled:(t==null?void 0:t.length)!==1,onClick:(t==null?void 0:t.length)===1?l:void 0,children:e.jsx(Je,{})}),e.jsx(Gs,{children:e.jsx(et,{})})]})]})]})},Ms=c(N)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,Es=c(g)`
  flex: 1 1 100%;
`,As=c.div`
  position: absolute;
  top: 26px;
  bottom: 26px;
  left: 4px;
  width: 35px;
  border-left: 1.5px solid #6b7a8d4d;
  border-top: 1.5px solid #6b7a8d4d;
  border-bottom: 1.5px solid #6b7a8d4d;
  border-radius: 12px 0 0 12px;
`,Os=c.div`
  position: relative;
  color: white;
  font-family: 'Barlow';
  display: flex;
  flex-direction: ${t=>t.swap?"column-reverse":"column"};
  margin-bottom: 10px;
  padding-left: 38px;
`,Fs=c(it)`
  position: relative;
  width: 100%;
  padding: 16px;
  gap: 10px;
  border-radius: 6px;
  border: 1px solid #6b7a8d4d;
  opacity: 0px;
  display: flex;
`,Ws=c.div`
  position: relative;
  width: 100%;
  padding: 15px;
  gap: 10px;
  border-radius: 6px;
  border: 1.4px solid #6b7a8d4d;
  opacity: 0px;
  display: flex;
  align-items: center;
`,Hs=c.label`
  color: #bac1c6;
  font-size: 13px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0.01em;
  text-align: left;
  margin-bottom: 6px;
`,Ps=c.label`
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
`,Ds=c.div`
  position: absolute;
  top: 0;
  right: 0;
  transform: translateY(-50%) translateX(50%);
  color: #23252f;
`,Us=c.div`
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
`,Gs=c.div`
  position: absolute;
  bottom: 0;
  right: 0;
  transform: translateY(10px) translateX(3px);
  color: #6b7a8d;
  line-height: 1;
`,Ys=({onClose:t,multiTopics:o})=>{const{close:n}=M("mergeTopic"),r=ve({mode:"onChange"}),{setValue:l,reset:i}=r,[a,s]=h.useState(!1),[d,u]=h.useState(!1),[m,p]=h.useState(null);h.useEffect(()=>{if(o&&o.length>0){const y=o.map(C=>C.name).join(", ");l("name",y)}return()=>{i()}},[o,l,i]);const b=()=>{t(),n()},j=async()=>{s(!0);const y=o==null?void 0:o.map(C=>C.ref_id).filter(C=>!!C);try{y.length&&m&&(await Tt({from:y,to:m==null?void 0:m.ref_id}),L.setState(C=>({ids:C.ids.filter(w=>!y.includes(w)),total:C.total-y.length})),b())}catch(C){console.warn(C)}finally{s(!1)}};return e.jsx(de,{id:"mergeTopic",kind:"small",onClose:b,preventOutsideClose:!0,children:e.jsxs(Te,{...r,children:[e.jsx(Is,{from:o,isSwapped:d,onSelect:p,selectedToNode:m,setIsSwapped:()=>u(!d)}),e.jsxs(Vs,{color:"secondary","data-testid":"merge-topics-button",disabled:a||!m,onClick:j,size:"large",variant:"contained",children:["Merge topics",a&&e.jsx(Qs,{children:e.jsx(z,{color:x.lightGray,size:12})})]})]})})},Vs=c(W)`
  width: 293px !important;
  margin: 0 0 10px auto !important;
`,Qs=c.span`
  margin-top: 2px;
`,qs=({topic:t,onClick:o,onSearch:n,checkedStates:r,setCheckedStates:l,isMuteDisabled:i})=>{const[a,s]=L(k=>[k.ids,k.total]),[d,u]=h.useState(!1),[m,p]=h.useState(!1),b=ye(t.date_added_to_graph),j=async(k,v)=>{u(!0);try{await ce(k,{node_data:{is_muted:v}}),L.setState({ids:a.filter(_=>_!==k),total:s-1})}catch(_){console.warn(_)}},y=k=>{l(v=>({...v,[k]:!v[k]}))},C=(k,v)=>{var _;(_=window.getSelection())!=null&&_.toString()?k.preventDefault():n(v.name)},w=t.edgeList.slice(0,1),$=t.edgeList.length-w.length,[S,A]=re.useState(null),F=k=>{A(k.currentTarget),p(!0)},R=()=>{p(!1)},H=!!S&&m,I=r[t.ref_id]?"visible":"";return e.jsxs(he,{className:r[t.ref_id]?"checked":"",children:[e.jsx(f,{children:e.jsx(Zs,{className:`checkbox-section ${I}`,"data-testid":"topic-check-box",onClick:()=>y(t.ref_id),children:e.jsx(Js,{checked:r[t.ref_id],children:e.jsx(en,{children:r[t.ref_id]&&e.jsx(tt,{})})})})}),e.jsx(f,{onClick:k=>C(k,t),children:e.jsx(Ks,{children:t.name})}),e.jsx(f,{children:t.node_type}),e.jsx(f,{children:e.jsx(tn,{children:t.edgeCount})}),e.jsxs(f,{children:[e.jsx(Ce,{anchorEl:S,anchorOrigin:{vertical:"top",horizontal:"center"},disableRestoreFocus:!0,id:"mouse-over-popover",onClose:R,onMouseEnter:()=>p(!0),onMouseLeave:R,open:H,sx:{pointerEvents:"auto","& .MuiPaper-root":{backgroundColor:"rgba(0, 0, 0, 0.9)",borderRadius:"4px",width:"160px",maxHeight:"200px",overflowY:"scroll"}},transformOrigin:{vertical:"bottom",horizontal:"center"},children:e.jsx(Me,{sx:{p:1.5,fontSize:"13px",fontWeight:400,lineHeight:"1.8",wordWrap:"break-word"},children:t.edgeList.join(", ")})}),w.join(", "),$>0&&e.jsx(Me,{"aria-haspopup":"true","aria-owns":H?"mouse-over-popover":void 0,component:"span",onMouseEnter:F,onMouseLeave:R,sx:{cursor:"pointer"},children:",..."})]}),e.jsx(f,{children:e.jsx("span",{children:b})}),e.jsx(f,{className:"cell-center",children:e.jsx(g,{direction:"row",justify:"space-between",children:e.jsx("div",{className:"approve-wrapper",children:d?e.jsx(Xs,{children:e.jsx(z,{color:x.white,size:16})}):e.jsxs(g,{direction:"row",children:[t.is_muted?e.jsx(Q,{className:"centered",disabled:i,onClick:()=>j(t.ref_id,!1),children:e.jsx(Lt,{})}):e.jsx(Q,{className:"centered",disabled:i,onClick:()=>j(t.ref_id,!0),children:e.jsx(It,{})}),e.jsx(Q,{disabled:i,onClick:k=>o(k,t.ref_id),children:e.jsx(Mt,{"data-testid":"ThreeDotsIcons"})})]})})})})]},t.name)},Xs=c.span`
  margin-left: 12px;
`,Ks=c.span`
  cursor: pointer;
  :hover {
    text-decoration: underline;
  }
`,Zs=c.td`
  visibility: hidden;
  cursor: pointer;
  display: flex;
  align-items: center;

  &.visible {
    visibility: visible;
  }
`,Js=c.div`
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
`,on=h.memo(qs),sn=({setShowMuteUnmute:t,showMuted:o,loading:n,onTopicEdit:r,onChangeFilter:l,checkedStates:i,setCheckedStates:a})=>{const{close:s}=M("sourcesTable"),[d,u]=h.useState(!1),[m,p]=re.useState(null),[b,j]=re.useState(""),y=Object.values(i).filter(T=>T).length,[C,w]=$t(T=>[T.setSearchFormValue,T.setCurrentSearch]),[$,S,A]=L(T=>[T.data,T.ids,T.total]),F=h.useCallback((T,P)=>{p(T.currentTarget),j(P)},[]),R=()=>{p(null)},H=T=>{C(T),w(T),s()},I=T=>{r(b,T),R()},k=T=>{l(T)},v=!!m,_=v?"simple-popover":void 0,E=async()=>{u(!0);try{const T=Object.keys(i).map(async Y=>{if(i[Y])try{return await ce(Y,{node_data:{is_muted:!o}}),Y}catch(ut){return console.error("Error updating node data:",ut),null}return null}),P=await Promise.all(T);L.setState({ids:S.filter(Y=>!P.includes(Y)),total:A-P.length}),a({}),u(!1)}catch(T){console.error("Error:",T),u(!1)}};return!n&&!$?e.jsxs(g,{children:[e.jsx(N,{children:"There is not any results for selected filters"}),e.jsx(je,{})]}):e.jsx(e.Fragment,{children:$&&!Object.keys($).length?e.jsxs(g,{children:[e.jsx(N,{children:"There is not any results for selected filters"}),e.jsx(je,{})]}):e.jsxs(xn,{align:"center",justify:d?"center":"flex-start",children:[e.jsxs(pe,{component:"table",children:[y>0?e.jsx(Ro,{children:e.jsxs(G,{component:"tr",children:[e.jsx(f,{children:e.jsx(Q,{onClick:()=>a({}),children:e.jsx(te,{})})}),e.jsx(f,{colSpan:12,children:e.jsxs(pn,{children:[e.jsxs(dn,{children:[e.jsx(cn,{children:y}),"selected"]}),e.jsx(f,{className:"empty"}),e.jsx(Ye,{onClick:E,role:"button",children:o?e.jsxs(e.Fragment,{children:[e.jsx(Re,{})," Unmute ALL"]}):e.jsxs(e.Fragment,{children:[e.jsx(Be,{})," Mute ALL"]})}),e.jsx(f,{className:"empty"}),e.jsxs(Ye,{onClick:()=>I("mergeTopic"),children:[e.jsx(Le,{})," Merge"]})]})}),e.jsx(f,{className:"empty"})]})}):e.jsx(ue,{children:e.jsxs(G,{component:"tr",children:[e.jsx(f,{className:"empty"}),e.jsx(f,{children:e.jsxs(be,{onClick:()=>k($e),children:["Name ",e.jsx(ge,{})]})}),e.jsx(f,{children:"Type"}),e.jsx(f,{children:e.jsxs(be,{onClick:()=>k(Ot),children:["Count ",e.jsx(ge,{})]})}),e.jsx(f,{children:"Edge list"}),e.jsx(f,{children:e.jsxs(be,{onClick:()=>k(Ft),children:["Date ",e.jsx(ge,{})]})}),e.jsx(f,{children:e.jsx(g,{px:8,children:e.jsxs(nn,{onClick:t,children:[e.jsx(rn,{checked:o,children:e.jsx(an,{children:o&&e.jsx(tt,{})})}),"Muted"]})})})]})}),(n||d)&&!$&&e.jsx(hn,{children:e.jsx(z,{color:x.white})}),$&&e.jsx("tbody",{children:S==null?void 0:S.map(T=>e.jsx(on,{checkedStates:i,isMuteDisabled:Object.values(i).filter(P=>P).length>1,onClick:F,onSearch:H,setCheckedStates:a,topic:$[T]},T))})]}),b?e.jsxs(ln,{anchorEl:m,anchorOrigin:{vertical:"bottom",horizontal:"right"},id:_,onClose:R,open:v,transformOrigin:{vertical:"top",horizontal:"right"},children:[o?e.jsxs(V,{"data-testid":"unmute",onClick:()=>I("unMute"),children:[" ",e.jsx(Re,{"data-testid":""})," Unmute"]}):e.jsxs(V,{"data-testid":"mute",onClick:()=>I("mute"),children:[" ",e.jsx(Be,{"data-testid":"VisibilityOff"})," Mute"]}),e.jsxs(V,{"data-testid":"rename",onClick:()=>I("editTopic"),children:[e.jsx(Et,{"data-testid":"EditTopicIcon"})," Rename"]}),e.jsxs(V,{"data-testid":"merge",onClick:()=>I("mergeTopic"),children:[e.jsx(Le,{"data-testid":"MergeIcon"})," Merge"]}),e.jsxs(V,{"data-testid":"add_edge",onClick:()=>I("addEdge"),children:[e.jsx(At,{"data-testid":"AddCircleIcon"})," Add edge"]})]}):null]})})},nn=c.td`
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
`,ln=c(Ce)`
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
`,un=()=>{const[t,o,n,r,l,i,a,s]=L(v=>[v.data,v.ids,v.total,v.setTopics,v.filters,v.setFilters,v.terminate,v.loading]),{open:d}=M("editTopic"),{open:u}=M("mergeTopic"),{open:m}=M("addEdge"),[p,b]=h.useState(null),[j,y]=h.useState([]),[C,w]=h.useState({}),$={editTopic:d,mergeTopic:u,addEdge:m},S=h.useRef([]);h.useEffect(()=>{o.length&&(S.current=o)},[o]),h.useEffect(()=>{(async()=>{try{await r()}catch{console.error("err")}})()},[r,l]);const A=async()=>{i({page:l.page+1})};h.useEffect(()=>()=>{a()},[a]);const F=v=>{i({sortBy:v})},R=()=>{b(null),y([])},H=async(v,_)=>{try{await ce(v,{node_data:{is_muted:_==="mute"}}),L.setState({ids:o.filter(E=>E!==v),total:n-1})}catch(E){console.warn(E)}},I=async(v,_)=>{if(t)if(_==="mergeTopic")if(Object.values(C).filter(E=>E).length>0){const E=Object.entries(C).filter(([,T])=>T).map(([T])=>t[T]);y(E),u()}else y([t[v]]),b(t[v]),u();else["mute","unMute"].includes(_)&&await H(v,_),typeof $[_]=="function"&&$[_](),b(t[v])},k=v=>{i({...l,search:v})};return e.jsxs(e.Fragment,{children:[e.jsxs(gn,{direction:"column",justify:"flex-end",children:[e.jsx(ke,{align:"flex-start",direction:"row",justify:"space-between",children:e.jsx(N,{className:"title",children:"Topics"})}),e.jsx(mn,{"data-testid":"topic-search-container",children:e.jsx(xt,{activeIcon:e.jsx(te,{}),defaultIcon:e.jsx(Ke,{}),loading:s,loadingIcon:e.jsx(z,{color:x.lightGray,size:24}),onSearch:k,placeholder:"Search ..."})}),e.jsxs(fn,{align:"center",justify:s&&!t?"center":"flex-start",children:[e.jsx(sn,{checkedStates:C,loading:s,onChangeFilter:F,onTopicEdit:I,setCheckedStates:w,setShowMuteUnmute:()=>i({is_muted:!l.is_muted}),showMuted:l.is_muted}),n>o.length?e.jsxs(W,{className:"load-more",disabled:s,onClick:A,children:["Load more",s&&e.jsx(z,{color:x.lightGray,size:10})]}):null]})]}),j.length>0&&e.jsx(Ys,{multiTopics:j,onClose:R}),p&&e.jsx(Rs,{onClose:R,topic:p}),p&&e.jsx(Ss,{onClose:R,topic:p})]})},gn=c(g)`
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
`,bn=[{label:at,component:Fo},{label:Wt,component:cs},{label:rt,component:Ko},{label:nt,component:un}],jn=t=>{const{children:o,value:n,index:r,...l}=t;return n===r?e.jsx(Tn,{"aria-labelledby":`simple-tab-${r}`,hidden:n!==r,id:`simple-tabpanel-${r}`,role:"tabpanel",...l,children:o}):null};function yn(t){return{id:`simple-tab-${t}`,"aria-controls":`simple-tabpanel-${t}`}}const wn=()=>{const[t,o]=h.useState(0),[n]=qe(s=>[s.isAdmin]),[r]=St(s=>[s.queuedSourcesFeatureFlag]),l=kt(),i=(s,d)=>{o(d)},a=bn.filter(({label:s})=>s===nt?n:s===rt?n&&r:s===at?l:!0);return e.jsxs($n,{"data-testid":"sources-table",direction:"column",children:[e.jsx(Cn,{"aria-label":"sources tabs",onChange:i,value:t,children:a.map((s,d)=>e.jsx(vn,{color:x.white,disableRipple:!0,label:s.label,...yn(d)},s.label))}),a.map((s,d)=>e.jsx(jn,{index:d,value:t,children:e.jsx(s.component,{})},s.label))]})},Cn=c(Qt)`
  && {
    background: rgba(0, 0, 0, 0.2);
    border-radius: 9px 9px 0 0;
    .MuiTabs-indicator {
      background: ${x.primaryBlue};
    }
  }
`,vn=c(qt)`
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
`,Pn=()=>{const{close:t}=M("sourcesTable"),{visible:o}=M("addContent");return o?null:e.jsx(de,{background:"BG1",id:"sourcesTable",kind:"large",noWrap:!0,onClose:t,preventOutsideClose:!0,children:e.jsx(wn,{})})};export{Pn as SourcesTableModal};
