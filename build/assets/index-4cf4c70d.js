import{r as h,c as Q,d as q,s as O,b as B,u as X,_ as K,j as e,f as Z,h as J,i as P,a2 as ut,e as oe,a3 as gt,t as d,v as x,T as N,F as g,aQ as ft,a5 as te,R as ne,q as ie,a0 as mt,aR as bt,aS as Ye,w as re,aT as Ve,H as ye,aB as ke,aC as _e,aD as Ne,aU as jt,z as Qe,aV as yt,aW as qe,aX as wt,aA as Ct,aY as le,aZ as vt,y as Tt,N as St,Q as $t}from"./index-b856be88.js";import{B as ce}from"./index-8264b104.js";import{B as H,u as M,aM as kt,r as _t,t as we,aN as be,aw as V,aO as Nt,D as zt,s as Bt,ai as ee,a2 as Xe,aP as Ke,aQ as Ze,aR as Je,a0 as Ce,a1 as ve,ah as et,aS as Rt,aT as It,aU as Lt,aV as ze,aW as Be,p as Re,aX as ue,aY as Et,q as Mt}from"./index-c59af388.js";import{T as Ie,s as D,a as tt,S as st,A as Te,E as At,D as Ft,b as ot,Q as nt,V as rt,c as Ot}from"./constants-011d5486.js";import{C as z}from"./ClipLoader-83661b90.js";import{f as Wt,g as Ht,h as Pt,a as Dt}from"./index.esm-c2a09dd4.js";import{I as Ut,A as Se,T as at}from"./index-c61dca86.js";import{B as Gt,T as Yt}from"./index-37507caf.js";import{u as L}from"./index-deba249f.js";import{O as it}from"./constants-b2a2fa82.js";import{T as Le}from"./Typography-69404db2.js";import{T as Vt,a as Qt}from"./Tabs-88a6cc23.js";import"./Stack-e0f879a7.js";import"./createSvgIcon-ed559792.js";import"./TextareaAutosize-981375ed.js";const qt=h.createContext(),lt=qt;function Xt(t){return Q("MuiTable",t)}q("MuiTable",["root","stickyHeader"]);const Kt=["className","component","padding","size","stickyHeader"],Zt=t=>{const{classes:s,stickyHeader:n}=t;return J({root:["root",n&&"stickyHeader"]},Xt,s)},Jt=O("table",{name:"MuiTable",slot:"Root",overridesResolver:(t,s)=>{const{ownerState:n}=t;return[s.root,n.stickyHeader&&s.stickyHeader]}})(({theme:t,ownerState:s})=>B({display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":B({},t.typography.body2,{padding:t.spacing(2),color:(t.vars||t).palette.text.secondary,textAlign:"left",captionSide:"bottom"})},s.stickyHeader&&{borderCollapse:"separate"})),Ee="table",es=h.forwardRef(function(s,n){const r=X({props:s,name:"MuiTable"}),{className:i,component:l=Ee,padding:a="normal",size:o="medium",stickyHeader:c=!1}=r,u=K(r,Kt),m=B({},r,{component:l,padding:a,size:o,stickyHeader:c}),p=Zt(m),j=h.useMemo(()=>({padding:a,size:o,stickyHeader:c}),[a,o,c]);return e.jsx(lt.Provider,{value:j,children:e.jsx(Jt,B({as:l,role:l===Ee?null:"table",ref:n,className:Z(p.root,i),ownerState:m},u))})}),de=es,ts=h.createContext(),pe=ts;function ss(t){return Q("MuiTableBody",t)}q("MuiTableBody",["root"]);const os=["className","component"],ns=t=>{const{classes:s}=t;return J({root:["root"]},ss,s)},rs=O("tbody",{name:"MuiTableBody",slot:"Root",overridesResolver:(t,s)=>s.root})({display:"table-row-group"}),as={variant:"body"},Me="tbody",is=h.forwardRef(function(s,n){const r=X({props:s,name:"MuiTableBody"}),{className:i,component:l=Me}=r,a=K(r,os),o=B({},r,{component:l}),c=ns(o);return e.jsx(pe.Provider,{value:as,children:e.jsx(rs,B({className:Z(c.root,i),as:l,ref:n,role:l===Me?null:"rowgroup",ownerState:o},a))})}),ls=is;function cs(t){return Q("MuiTableCell",t)}const ds=q("MuiTableCell",["root","head","body","footer","sizeSmall","sizeMedium","paddingCheckbox","paddingNone","alignLeft","alignCenter","alignRight","alignJustify","stickyHeader"]),ps=ds,xs=["align","className","component","padding","scope","size","sortDirection","variant"],hs=t=>{const{classes:s,variant:n,align:r,padding:i,size:l,stickyHeader:a}=t,o={root:["root",n,a&&"stickyHeader",r!=="inherit"&&`align${P(r)}`,i!=="normal"&&`padding${P(i)}`,`size${P(l)}`]};return J(o,cs,s)},us=O("td",{name:"MuiTableCell",slot:"Root",overridesResolver:(t,s)=>{const{ownerState:n}=t;return[s.root,s[n.variant],s[`size${P(n.size)}`],n.padding!=="normal"&&s[`padding${P(n.padding)}`],n.align!=="inherit"&&s[`align${P(n.align)}`],n.stickyHeader&&s.stickyHeader]}})(({theme:t,ownerState:s})=>B({},t.typography.body2,{display:"table-cell",verticalAlign:"inherit",borderBottom:t.vars?`1px solid ${t.vars.palette.TableCell.border}`:`1px solid
    ${t.palette.mode==="light"?ut(oe(t.palette.divider,1),.88):gt(oe(t.palette.divider,1),.68)}`,textAlign:"left",padding:16},s.variant==="head"&&{color:(t.vars||t).palette.text.primary,lineHeight:t.typography.pxToRem(24),fontWeight:t.typography.fontWeightMedium},s.variant==="body"&&{color:(t.vars||t).palette.text.primary},s.variant==="footer"&&{color:(t.vars||t).palette.text.secondary,lineHeight:t.typography.pxToRem(21),fontSize:t.typography.pxToRem(12)},s.size==="small"&&{padding:"6px 16px",[`&.${ps.paddingCheckbox}`]:{width:24,padding:"0 12px 0 16px","& > *":{padding:0}}},s.padding==="checkbox"&&{width:48,padding:"0 0 0 4px"},s.padding==="none"&&{padding:0},s.align==="left"&&{textAlign:"left"},s.align==="center"&&{textAlign:"center"},s.align==="right"&&{textAlign:"right",flexDirection:"row-reverse"},s.align==="justify"&&{textAlign:"justify"},s.stickyHeader&&{position:"sticky",top:0,zIndex:2,backgroundColor:(t.vars||t).palette.background.default})),gs=h.forwardRef(function(s,n){const r=X({props:s,name:"MuiTableCell"}),{align:i="inherit",className:l,component:a,padding:o,scope:c,size:u,sortDirection:m,variant:p}=r,j=K(r,xs),b=h.useContext(lt),y=h.useContext(pe),C=y&&y.variant==="head";let w;a?w=a:w=C?"th":"td";let S=c;w==="td"?S=void 0:!S&&C&&(S="col");const $=p||y&&y.variant,A=B({},r,{align:i,component:w,padding:o||(b&&b.padding?b.padding:"normal"),size:u||(b&&b.size?b.size:"medium"),sortDirection:m,stickyHeader:$==="head"&&b&&b.stickyHeader,variant:$}),F=hs(A);let R=null;return m&&(R=m==="asc"?"ascending":"descending"),e.jsx(us,B({as:w,ref:n,className:Z(F.root,l),"aria-sort":R,scope:S,ownerState:A},j))}),fs=gs;function ms(t){return Q("MuiTableHead",t)}q("MuiTableHead",["root"]);const bs=["className","component"],js=t=>{const{classes:s}=t;return J({root:["root"]},ms,s)},ys=O("thead",{name:"MuiTableHead",slot:"Root",overridesResolver:(t,s)=>s.root})({display:"table-header-group"}),ws={variant:"head"},Ae="thead",Cs=h.forwardRef(function(s,n){const r=X({props:s,name:"MuiTableHead"}),{className:i,component:l=Ae}=r,a=K(r,bs),o=B({},r,{component:l}),c=js(o);return e.jsx(pe.Provider,{value:ws,children:e.jsx(ys,B({as:l,className:Z(c.root,i),ref:n,role:l===Ae?null:"rowgroup",ownerState:o},a))})}),ct=Cs;function vs(t){return Q("MuiTableRow",t)}const Ts=q("MuiTableRow",["root","selected","hover","head","footer"]),Fe=Ts,Ss=["className","component","hover","selected"],$s=t=>{const{classes:s,selected:n,hover:r,head:i,footer:l}=t;return J({root:["root",n&&"selected",r&&"hover",i&&"head",l&&"footer"]},vs,s)},ks=O("tr",{name:"MuiTableRow",slot:"Root",overridesResolver:(t,s)=>{const{ownerState:n}=t;return[s.root,n.head&&s.head,n.footer&&s.footer]}})(({theme:t})=>({color:"inherit",display:"table-row",verticalAlign:"middle",outline:0,[`&.${Fe.hover}:hover`]:{backgroundColor:(t.vars||t).palette.action.hover},[`&.${Fe.selected}`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.selectedOpacity})`:oe(t.palette.primary.main,t.palette.action.selectedOpacity),"&:hover":{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.hoverOpacity}))`:oe(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.hoverOpacity)}}})),Oe="tr",_s=h.forwardRef(function(s,n){const r=X({props:s,name:"MuiTableRow"}),{className:i,component:l=Oe,hover:a=!1,selected:o=!1}=r,c=K(r,Ss),u=h.useContext(pe),m=B({},r,{component:l,hover:a,selected:o,head:u&&u.variant==="head",footer:u&&u.variant==="footer"}),p=$s(m);return e.jsx(ks,B({as:l,ref:n,className:Z(p.root,i),role:l===Oe?null:"row",ownerState:m},c))}),U=_s;function je(t){const s=new Date(Number(t)*1e3),n=s.getFullYear(),r=(1+s.getMonth()).toString().padStart(2,"0");return`${s.getDate().toString().padStart(2,"0")}/${r}/${n}`}const f=d(fs)`
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
`,Ns=d(ct)`
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
`;function zs(t){return t.charAt(0).toUpperCase()+t.slice(1).toLowerCase()}const Bs=({node:t})=>{var s,n,r,i,l,a,o,c,u;return e.jsxs(xe,{children:[e.jsx(f,{className:"empty"}),e.jsx(f,{children:(s=t==null?void 0:t.properties)!=null&&s.date_added_to_graph?je((n=t==null?void 0:t.properties)==null?void 0:n.date_added_to_graph):je((r=t==null?void 0:t.properties)==null?void 0:r.date)}),e.jsx(f,{children:t==null?void 0:t.node_type}),e.jsx(f,{children:(t==null?void 0:t.node_type)==="Tweet"?e.jsx(We,{href:`${Ie}${(i=t==null?void 0:t.properties)==null?void 0:i.tweet_id}${Ie.includes("?")?"&":"?"}open=system`,target:"_blank",children:(l=t==null?void 0:t.properties)==null?void 0:l.tweet_id}):e.jsx(We,{href:`${(a=t==null?void 0:t.properties)==null?void 0:a.source_link}${((o=t==null?void 0:t.properties)==null?void 0:o.source_link).includes("?")?"&":"?"}open=system`,target:"_blank",children:(c=t==null?void 0:t.properties)==null?void 0:c.source_link})}),e.jsx(f,{children:(u=t==null?void 0:t.properties)!=null&&u.status?zs(t.properties.status):"Processing"})]})},We=d.a`
  color: ${x.white};
  text-decoration: underline;
  &:visited {
    color: ${x.white};
  }
`,Rs=h.memo(Bs),Is=({nodes:t})=>{const{open:s}=M("addContent"),n=async()=>{s()};return!t||(t==null?void 0:t.length)===0?e.jsx(e.Fragment,{children:e.jsxs(Ls,{children:[e.jsx(Ms,{children:e.jsx(kt,{})}),e.jsx(Es,{children:e.jsx(N,{className:"subtitle",children:"Contribute to the graph by adding your first content."})}),e.jsx(g,{justify:"center",children:e.jsx(H,{color:"secondary",onClick:n,size:"medium",startIcon:e.jsx(_t,{}),type:"submit",variant:"contained",children:"Add Content"})})]})}):e.jsxs(de,{component:"table",children:[e.jsx(he,{children:e.jsxs(U,{component:"tr",children:[e.jsx(f,{className:"empty"}),e.jsx(f,{children:"Date"}),e.jsx(f,{children:"Type"}),e.jsx(f,{children:"Source"}),e.jsx(f,{children:"Status"})]})}),e.jsx("tbody",{children:t==null?void 0:t.map(r=>e.jsx(Rs,{node:r},r==null?void 0:r.ref_id))})]})},Ls=O(g)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 150px auto;
  width: 100%;
  flex-direction: column;
`,Es=O(g)`
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
`,Ms=O(g)`
  margin-bottom: 20px;

  svg {
    fill: none;
    height: 60px;
    width: 60px;
  }
`,As=()=>{const[t,s]=h.useState([]),[n,r]=h.useState(!0),[i,l]=h.useState(10),[a,o]=h.useState(!0),c={only_content:"true",sort_by:"date",limit:i.toString()},u=async()=>{r(!0);try{const p=await ft(c);s(p.nodes),r(!1)}catch(p){console.error("Error fetching data:",p),r(!1)}};h.useEffect(()=>{u()},[i]);const m=()=>{l(i+10),u()};return e.jsx(Fs,{direction:"column",justify:"flex-end",children:e.jsxs(Os,{align:"center",justify:n?"center":"flex-start",children:[n?e.jsx(z,{color:x.white}):e.jsx(e.Fragment,{children:e.jsx(Is,{nodes:t})}),!n&&t.length>0&&(a?e.jsx(H,{onClick:m,size:"medium",children:"Load More"}):e.jsx(Ws,{children:"No new nodes available"}))]})})},Fs=d(g)`
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
`,Os=d(g)`
  min-height: 0;
  overflow: auto;
  flex: 1;
  width: 100%;
`,Ws=d.div`
  margin-top: 10px;
  color: ${x.GRAY3};
  font-family: Barlow;
  font-size: 14px;
`,Hs=({kind:t,shape:s})=>{switch(t){case"small":return te`
        padding: 4px 8px;
        border-radius: ${s==="rounded"?"16px":"8px"};
        height: 32px;
      `;case"big":return te`
        padding: 16px 24px;
        border-radius: ${s==="rounded"?"24px":"8px"};
        height: 48px;
      `;default:return te`
        padding: 8px 16px;
        border-radius: ${s==="rounded"?"32px":"8px"};
        height: 64px;
      `}},Ps=({kind:t})=>{switch(t){case"small":return"regularBold";case"big":return"mediumBold";default:return"regularBold"}},Ds=d(g).attrs({align:"center",direction:"row",justify:"center"})`
  border: none;
  cursor: pointer;
  pointer-events: auto;

  ${Hs}

  &:hover {
    opacity: ${({disabled:t})=>t?.5:.9};
  }

  ${({disabled:t})=>t&&te`
      opacity: 0.5;
      pointer-events: none;
    `}
`,He=({background:t="primaryButton",children:s,className:n="button",startIcon:r,endIcon:i,disabled:l,id:a,kind:o="regular",onClick:c,onPointerDown:u,shape:m="squared",textColor:p="white",type:j})=>e.jsxs(Ds,{as:"button",background:t,className:n,disabled:l,id:a,kind:o,onClick:c,onPointerDown:u,shape:m,type:j,children:[r&&r,e.jsx(N,{color:p,kind:Ps({kind:o}),children:s}),i&&i]}),dt=({message:t="Are you sure you want to delete this item?",onConfirm:s,children:n,anchorOrigin:r={vertical:"bottom",horizontal:"left"},transformOrigin:i={vertical:"top",horizontal:"center"}})=>{const[l,a]=h.useState(null),o=j=>{a(j.currentTarget)},c=()=>{a(null)},u=()=>{s(),c()},m=()=>{c()},p=!!l;return e.jsxs(e.Fragment,{children:[e.jsx("div",{children:ne.cloneElement(n,{onClick:o})}),e.jsx(Gs,{anchorEl:l,anchorOrigin:r,onClose:c,open:p,transformOrigin:i,children:e.jsxs(Us,{children:[e.jsx(N,{className:"message",children:t}),e.jsxs(Ys,{children:[e.jsx(He,{background:"primaryBlue",kind:"small",onClick:u,children:"Yes"}),e.jsx(He,{background:"white",kind:"small",onClick:m,textColor:"black",children:"No"})]})]})})]})},Us=d(g)`
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
`,Gs=d(we)`
  && {
    z-index: 9999;
  }
`,Ys=d(g)`
  display: flex;
  flex-direction: row;
  gap: 12px;
  align-items: center;
  margin-top: 16px;
`,Vs=({data:t})=>{const s=ie(a=>a.setQueuedSources),[n,r]=h.useState(""),i=async a=>{if(t!=null&&t.length)try{const o=await mt.enable();await bt(a,o.pubkey),s(t.filter(c=>c.ref_id!==a))}catch(o){console.warn(o)}},l=async a=>{if(!(!a||!(t!=null&&t.length))){r(a);try{await Ye(a),s(t==null?void 0:t.filter(o=>o.ref_id!==a))}catch(o){console.warn(o)}finally{r("")}}};return t!=null&&t.length?e.jsxs(de,{component:"table",children:[e.jsx(he,{children:e.jsxs(U,{component:"tr",children:[e.jsx(f,{className:"empty"}),e.jsx(f,{children:"Type"}),e.jsx(f,{children:"Source"}),e.jsx(f,{}),e.jsx(f,{className:"empty"})]})}),(t==null?void 0:t.length)&&e.jsx("tbody",{children:t==null?void 0:t.map(a=>e.jsxs(xe,{children:[e.jsx(f,{className:"empty"}),e.jsx(f,{children:D[a.source_type]}),e.jsx(f,{width:"268px",children:a.source_type==="twitter_handle"?e.jsxs(De,{href:`${tt}/${a.source}?open=system`,target:"_blank",children:["@",a.source]}):e.jsx(De,{href:`${a.source}?open=system`,target:"_blank",children:a.source})}),e.jsx(f,{className:"cell-center",children:e.jsxs(g,{direction:"row",justify:"flex-end",children:[e.jsx(Qs,{className:"approve-wrapper",children:e.jsx(Pe,{className:"centered",onClick:()=>i(a.ref_id),children:e.jsx(Wt,{color:x.primaryGreen,fontSize:24})})}),e.jsx("div",{className:"delete-wrapper",children:n===a.ref_id?e.jsx(z,{color:x.white,size:16}):e.jsx(dt,{message:"Are you sure ?",onConfirm:()=>l(a.ref_id),children:e.jsx(Pe,{className:"centered",children:e.jsx(Ht,{color:x.primaryRed,fontSize:24})})})})]})}),e.jsx(f,{className:"empty"})]},a.source))})]}):e.jsxs(g,{children:[e.jsx(N,{children:"There is not any results for selected filters"}),e.jsx(be,{})]})},Pe=d(g)`
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
`,Qs=d.div`
  margin-right: 40px;
`,qs=()=>{const[t,s]=h.useState(!0),[n,r]=h.useState(""),[i,l]=ie(c=>[c.queuedSources,c.setQueuedSources]);h.useEffect(()=>{(async()=>{s(!0);try{const u=await Ve({approved:"False"});l(u.data)}catch(u){console.warn(u)}finally{s(!1)}})()},[l]);const a=c=>{r(n===c||!c?"":c)},o=i==null?void 0:i.filter(c=>!n||c.source_type===n);return e.jsxs(Xs,{align:"stretch",direction:"column",justify:"flex-end",children:[e.jsxs($e,{align:"flex-start",justify:"space-between",children:[e.jsx(N,{className:"title",children:"Queued Sources"}),e.jsx(N,{className:"subtitle",children:"This is a queue of pending sources waiting for approval or denial from graph users. If you think a source will provide good content for the graph, you can pay to approve it. Think of this as an investment: you pay to add it to the source table, and if the content is popular you will earn from it. If content is not relevant to the graph, you should deny it."})]}),e.jsxs(g,{className:"filters",direction:"row",pb:16,px:36,children:[e.jsx(ae,{className:re({selected:!n}),onClick:()=>a(""),size:"small",children:"All"}),Object.keys(D).map(c=>e.jsx(ae,{className:re({selected:c===n}),onClick:()=>a(c),size:"small",children:D[c]},c))]}),e.jsx(Ks,{align:"center",justify:t?"center":"flex-start",children:t?e.jsx(z,{color:x.white}):e.jsx(Vs,{data:o})})]})},Xs=d(g)`
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
`,Ks=d(g)`
  min-height: 0;
  overflow: auto;
  flex: 1;
  width: 100%;
`,pt=({onSearch:t,placeholder:s,activeIcon:n,defaultIcon:r,loadingIcon:i,loading:l,...a})=>{const[o,c]=h.useState(""),u=()=>{c(""),t("")},m=h.useCallback(y=>{t(y)},[t]),p=h.useMemo(()=>ye.debounce(m,300),[m]),j=y=>{const C=y.target.value.trim(),{value:w}=y.target;c(w),C?p(C):u()},b=()=>l?e.jsx(Ue,{children:e.jsx(ge,{type:"button",children:i})}):e.jsx(Ue,{children:o?e.jsx(ge,{onClick:u,type:"button",children:n}):e.jsx(ge,{type:"button",children:r})});return e.jsxs(Zs,{children:[e.jsx(Js,{autoComplete:"off",autoCorrect:"off",inputProps:{"aria-label":"search"},onChange:j,placeholder:s,value:o,...a}),b()]})},Ue=d(g)`
  top: -50%;
  right: -3%;
  z-index: 3;
  position: absolute;
  transform: translate(-50%, 50%);
`,ge=d(V)`
  font-size: 24px;
`,Zs=d(Nt)`
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
`,Js=d(Ut)`
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
`,eo=t=>e.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 21 21",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M13.8 9.97481L5.82503 1.9998H18C18.4167 1.9998 18.7167 2.18314 18.9 2.5498C19.0834 2.91647 19.05 3.26647 18.8 3.5998L13.8 9.97481ZM18.775 20.5998L13 14.8248V16.9998C13 17.2831 12.9042 17.5206 12.7125 17.7123C12.5209 17.904 12.2834 17.9998 12 17.9998H10C9.71669 17.9998 9.47919 17.904 9.28753 17.7123C9.09586 17.5206 9.00002 17.2831 9.00002 16.9998V10.8248L0.400024 2.2248L1.80002 0.799805L20.2 19.1998L18.775 20.5998Z",fill:"currentColor"})}),to=({data:t,canEdit:s=!1})=>{const n=ie(o=>o.setSources),[r,i]=h.useState(""),l=async(o,c)=>{if(t!=null&&t.length)try{await jt(o,c);const u=t==null?void 0:t.findIndex(p=>p.ref_id===o),m=[...t];m[u]={...m[u],source:c.source},n(m)}catch(u){console.warn(u)}},a=async o=>{if(!(!o||!(t!=null&&t.length))){i(o);try{await Ye(o),n(t==null?void 0:t.filter(c=>c.ref_id!==o))}catch(c){console.warn(c)}finally{i("")}}};return t!=null&&t.length?e.jsxs(de,{"aria-label":"a dense table",component:"table",id:"sources-table",size:"small",children:[e.jsx(he,{children:e.jsxs(U,{component:"tr",children:[e.jsx(f,{className:"empty"}),e.jsx(f,{children:"Type"}),e.jsx(f,{align:"left",children:"Source"}),s&&e.jsx(f,{align:"left"}),e.jsx(f,{className:"empty"})]})}),e.jsx(ls,{component:"tbody",children:t==null?void 0:t.map(o=>e.jsxs(xe,{children:[e.jsx(f,{className:"empty"}),e.jsx(f,{align:"left",children:D[o.source_type]}),e.jsx(f,{align:"left",children:e.jsx(so,{condition:s,wrapper:c=>e.jsx(oo,{id:o.ref_id,onSave:u=>l(o.ref_id,{source:u,source_type:o.source_type}),value:o.source,children:c}),children:o.source_type===ke||o.source_type===_e||o.source_type===Ne?e.jsxs(e.Fragment,{children:[o.source_type===ke&&e.jsxs(fe,{href:`${tt}/${o.source}`,target:"_blank",children:["@",o.source]}),o.source_type===_e&&e.jsx(fe,{href:`${o.source}${o.source.includes("?")?"&":"?"}open=system`,target:"_blank",children:o.source}),o.source_type===Ne&&e.jsx(fe,{href:o.source,target:"_blank",children:o.source})]}):e.jsx("div",{children:o.source})})}),s&&e.jsx(f,{align:"left",children:e.jsx("div",{className:"delete-wrapper",id:`delete-${o.source}`,children:r===o.ref_id?e.jsx(xt,{"data-testid":`delete-loader-${o.ref_id}`,children:e.jsx(z,{color:x.white,size:16})}):e.jsx(dt,{"data-testid":`delete-icon-${o.ref_id}`,message:"Are you sure?",onConfirm:()=>a(o.ref_id),children:e.jsx(se,{className:"centered","data-testid":`delete-icon-${o.ref_id}`,children:e.jsx(zt,{})})})})}),e.jsx(f,{className:"empty"})]},o.source))})]}):e.jsxs(ro,{children:[e.jsx(eo,{}),e.jsx(N,{className:"text",children:"There is not any results for selected filters"})]})};function so({condition:t,wrapper:s,children:n}){return t?s(n):n}const oo=({value:t,onSave:s,id:n,children:r})=>{const[i,l]=h.useState(!1),[a,o]=h.useState(t),[c,u]=h.useState(!1),m=async()=>{if(n){u(!0);try{await s(a),l(!1)}catch(p){console.warn(p)}finally{u(!1)}}};return e.jsx("div",{children:i?e.jsxs(no,{align:"center",direction:"row",children:[e.jsx(Gt,{className:"editable-cell__input",name:"cell-input",onChange:p=>o(p),value:a}),e.jsx(se,{align:"center",justify:"center",children:c?e.jsx(xt,{"data-testid":`edit-loader-${n}`,children:e.jsx(z,{color:x.white,size:12})}):e.jsx(Pt,{"data-testid":`check-icon-${n}`,onClick:m})}),e.jsx(se,{align:"center",className:"secondary",justify:"center",onClick:()=>l(!1),children:e.jsx(Dt,{})})]}):e.jsxs(ao,{direction:"row",children:[e.jsx("div",{className:"name",children:r}),e.jsx("div",{className:"spacer"}),e.jsx(se,{onClick:()=>l(!0),children:e.jsx(Bt,{"data-testid":`edit-icon-${n}`})})]})})},no=d(g)`
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
`,se=d(g)`
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
`,ro=d(g)`
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
`,ao=d(g)`
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
`,io=()=>{const[t,s]=h.useState(!0),[n,r]=h.useState(""),[i,l]=ie(p=>[p.sources,p.setSources]),[a]=Qe(p=>[p.isAdmin]),[o,c]=h.useState("");h.useEffect(()=>{(async()=>{s(!0);try{const j=await Ve();l(j.data)}catch(j){console.warn(j)}finally{s(!1)}})()},[l]);const u=p=>{r(n===p||!p?"":p)},m=h.useMemo(()=>i==null?void 0:i.filter(p=>(!n||p.source_type===n)&&(p.source.toLowerCase().startsWith(o.toLowerCase())||p.source.toLowerCase().includes(o.toLowerCase())||`@${p.source.toLowerCase()}`.startsWith(o.toLowerCase())||`@${p.source.toLowerCase()}`.includes(o.toLowerCase()))),[o,n,i]);return e.jsxs(lo,{align:"stretch",direction:"column",justify:"flex-end",children:[e.jsx($e,{align:"center",direction:"row",justify:"space-between",children:e.jsx(N,{className:"title",children:"Sources for this Graph"})}),e.jsx(po,{children:e.jsx(pt,{activeIcon:e.jsx(ee,{}),defaultIcon:e.jsx(Xe,{}),loading:t,loadingIcon:e.jsx(z,{color:x.lightGray,size:24}),onSearch:c,placeholder:"Find Source"})}),e.jsxs(g,{className:"filters",direction:"row",pb:16,px:36,children:[e.jsx(ae,{className:re({selected:!n}),onClick:()=>u(""),size:"small",children:"All"}),Object.keys(D).map(p=>e.jsx(ae,{className:re({selected:p===n}),onClick:()=>u(p),size:"small",children:D[p]},p))]}),e.jsx(co,{align:"center",justify:t?"center":"flex-start",children:t?e.jsx(z,{color:x.white}):e.jsx(to,{canEdit:a,data:m})})]})},lo=d(g)`
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
`,co=d(g)`
  min-height: 0;
  overflow: auto;
  flex: 1;
  width: 100%;
`,po=d(g)`
  margin: 0 0 16px 36px;
`,xo=({selectedType:t,setSelectedType:s})=>{const[n,r]=h.useState([]);h.useEffect(()=>{(async()=>{try{const{data:o}=await yt();r(o.edge_types)}catch(o){console.warn(o)}})()},[r]);const i=a=>({label:a,value:a}),l=a=>{s((a==null?void 0:a.value)||"")};return e.jsx(Se,{onSelect:l,options:n.map(i),selectedValue:t?i(t):null})},ho=({onSelect:t,selectedValue:s,topicId:n})=>{const[r,i]=h.useState([]),[l,a]=h.useState(!1),o=h.useMemo(()=>{const j=async b=>{const y={is_muted:"False",sort_by:Te,search:b,skip:"0",limit:"1000"};a(!0);try{const w=(await qe(y.search)).data.filter(S=>(S==null?void 0:S.ref_id)!==n);i(w)}catch{i([])}finally{a(!1)}};return ye.debounce(j,300)},[n]),c=j=>{const b=j.trim();if(!b){i([]);return}b.length>2&&o(j)},u=j=>{const b=j?r.find(y=>y.ref_id===j.value):null;t(b||null)},m=j=>({label:j.search_value,value:j.ref_id,type:j.node_type}),p=j=>j.map(m);return s?e.jsxs(g,{align:"center",basis:"100%",direction:"row",grow:1,shrink:1,children:[e.jsx("span",{children:s.search_value}),e.jsx(st,{onClick:()=>t(null),size:"medium",children:e.jsx(ee,{})})]}):e.jsx(Se,{handleInputChange:c,isLoading:l,onSelect:u,options:p(r)||it,selectedValue:s?m(s):null})},uo=({from:t,onSelect:s,selectedType:n,setSelectedType:r,isSwapped:i,setIsSwapped:l,selectedToNode:a})=>e.jsxs(g,{mb:20,children:[e.jsx(g,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(g,{align:"center",direction:"row",children:e.jsx(go,{children:"Add edge"})})}),e.jsxs(bo,{swap:i,children:[e.jsx(g,{children:e.jsx(jo,{disabled:!0,label:i?"To":"From",swap:i,value:t==null?void 0:t.name})}),e.jsxs(g,{my:16,children:[e.jsx(mo,{children:"Type"}),e.jsx(xo,{selectedType:n,setSelectedType:r})]}),e.jsx(g,{children:e.jsxs(yo,{children:[e.jsx(wo,{children:i?"From":"To"}),e.jsx(ho,{onSelect:s,selectedValue:a,topicId:t==null?void 0:t.ref_id})]})}),e.jsxs(fo,{children:[e.jsx(Co,{children:e.jsx(Ke,{})}),e.jsx(vo,{onClick:l,children:e.jsx(Ze,{})}),e.jsx(To,{children:e.jsx(Je,{})})]})]})]}),go=d(N)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,fo=d.div`
  position: absolute;
  top: 26px;
  bottom: 26px;
  left: 4px;
  width: 35px;
  border-left: 1.5px solid #6b7a8d4d;
  border-top: 1.5px solid #6b7a8d4d;
  border-bottom: 1.5px solid #6b7a8d4d;
  border-radius: 12px 0 0 12px;
`,mo=d.label`
  color: #bac1c6;
  font-size: 13px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0.01em;
  text-align: left;
  margin-bottom: 6px;
`,bo=d.div`
  position: relative;
  color: white;
  font-family: 'Barlow';
  display: flex;
  flex-direction: ${t=>t.swap?"column-reverse":"column"};
  margin-bottom: 10px;
  padding-left: 38px;
`,jo=d(at)`
  position: relative;
  width: 100%;
  padding: 16px;
  gap: 10px;
  border-radius: 6px;
  border: 1px solid #6b7a8d4d;
  opacity: 0px;
  display: flex;
`,yo=d.div`
  position: relative;
  width: 100%;
  padding: 15px;
  gap: 10px;
  border-radius: 6px;
  border: 1.4px solid #6b7a8d4d;
  opacity: 0px;
  display: flex;
  align-items: center;
`,wo=d.label`
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
`,Co=d.div`
  position: absolute;
  top: 0;
  right: 0;
  transform: translateY(-50%) translateX(50%);
  color: #23252f;
`,vo=d.div`
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
`,To=d.div`
  position: absolute;
  bottom: 0;
  right: 0;
  transform: translateY(10px) translateX(3px);
  color: #6b7a8d;
  line-height: 1;
`,So=({topic:t,onClose:s})=>{const{close:n}=M("addEdge"),[r]=L(w=>[w.data]),i=Ce({mode:"onChange"}),[l,a]=h.useState(!1),[o,c]=h.useState(!1),[u,m]=h.useState(""),[p,j]=h.useState(null),b=()=>{s(),n()},y=async()=>{if(!(!p||!r)){c(!0);try{await wt({from:t.ref_id,to:p==null?void 0:p.ref_id,relationship:u});const{ref_id:w}=t,{ref_id:S}=p;if(r){const $={...r};$[w]={...$[w],edgeList:[...$[w].edgeList,u]},$[S]&&($[S]={...$[S],edgeList:[...$[S].edgeList,u]}),L.setState({data:$})}b()}catch(w){console.warn(w)}finally{c(!1)}}},C=o||!p||!u;return e.jsx(ce,{id:"addEdge",kind:"small",onClose:b,preventOutsideClose:!0,children:e.jsxs(ve,{...i,children:[e.jsx(uo,{from:t,isSwapped:l,onSelect:j,selectedToNode:p,selectedType:u,setIsSwapped:()=>a(!l),setSelectedType:m}),e.jsxs($o,{color:"secondary",disabled:C,onClick:y,size:"large",variant:"contained",children:["Confirm",o&&e.jsx(ko,{children:e.jsx(z,{color:x.lightGray,size:12})})]})]})})},$o=d(H)`
  width: 293px !important;
  margin: 0 0 10px auto !important;
`,ko=d.span`
  margin-top: 2px;
`,_o=()=>e.jsxs(g,{children:[e.jsx(g,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(g,{align:"center",direction:"row",children:e.jsx(No,{children:"Edit topic"})})}),e.jsx(g,{mb:12,children:e.jsx(Yt,{id:"cy-topic",maxLength:50,name:"name",placeholder:"Add your topic",rules:{...Ct}})})]}),No=d(N)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,zo=({topic:t,onClose:s})=>{const{close:n}=M("editTopic"),[r]=L(w=>[w.data]),i=Ce({mode:"onChange"}),{watch:l,setValue:a,reset:o,getValues:c}=i,[u,m]=h.useState(!1);h.useEffect(()=>(t&&a("name",t==null?void 0:t.name),()=>{o()}),[t,a,o]);const p=l("name"),j=p==null?void 0:p.trim(),b=()=>{s(),n()},y=async()=>{m(!0);try{if(await le((t==null?void 0:t.ref_id)||"",{node_data:{name:j}}),r){const w={...r};w[t==null?void 0:t.ref_id].name=j,L.setState({data:w})}b()}catch(w){console.warn(w)}finally{m(!1)}},C=c().name&&(t==null?void 0:t.name)!==c().name;return e.jsx(ce,{id:"editTopic",kind:"regular",onClose:b,preventOutsideClose:!0,children:e.jsxs(ve,{...i,children:[e.jsx(_o,{}),e.jsxs(H,{color:"secondary",disabled:u||!j||!C,onClick:y,size:"large",variant:"contained",children:["Save Changes",u&&e.jsx(Bo,{children:e.jsx(z,{color:x.lightGray,size:12})})]})]})})},Bo=d.span`
  margin-top: 2px;
`,Ro=({topicId:t,onSelect:s,selectedValue:n,dataId:r})=>{const[i,l]=h.useState([]),[a,o]=h.useState(!1),c=h.useMemo(()=>{const b=async y=>{const C={is_muted:"False",sort_by:Te,search:y,skip:"0",limit:"1000"};o(!0);try{const S=(await qe(C.search)).data.filter($=>($==null?void 0:$.ref_id)!==t);l(S)}catch{l([])}finally{o(!1)}};return ye.debounce(b,300)},[t]),u=b=>{const y=b.trim();if(!y){l([]);return}y.length>2&&c(b)},m=b=>{const y=b?i.find(C=>C.ref_id===b.value):null;s(y||null)},p=b=>({label:b.search_value,value:b.ref_id,type:b.node_type}),j=b=>b.map(p);return n?e.jsxs(g,{align:"center",basis:"100%",direction:"row",grow:1,shrink:1,children:[e.jsx("span",{children:n.search_value}),e.jsx(st,{onClick:()=>s(null),size:"medium",children:e.jsx(ee,{})})]}):e.jsx(Se,{dataId:r,handleInputChange:u,isLoading:a,onSelect:m,options:j(i)||it,selectedValue:n?p(n):null})},Io=({from:t,onSelect:s,selectedToNode:n,isSwapped:r,setIsSwapped:i})=>{var o;const l=t==null?void 0:t.map(c=>c.name).join(", "),a=t&&t.length===1?t[0].name:`${l==null?void 0:l.substring(0,25)} ...`;return e.jsxs(g,{mb:20,children:[e.jsx(g,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(g,{align:"center",direction:"row",children:e.jsx(Lo,{children:"Merge topic"})})}),e.jsxs(Ao,{swap:r,children:[e.jsx(Eo,{children:e.jsx(Fo,{disabled:!0,label:r?"To":"From",swap:r,value:a})}),e.jsxs(g,{my:16,children:[e.jsx(Wo,{children:"Type"}),e.jsx(N,{children:"IS ALIAS"})]}),e.jsx(g,{children:e.jsxs(Oo,{children:[e.jsx(Ho,{children:r?"From":"To"}),e.jsx(Ro,{dataId:"to-node",onSelect:s,selectedValue:n,topicId:(o=t[t.length-1])==null?void 0:o.ref_id})]})}),e.jsxs(Mo,{children:[e.jsx(Po,{children:e.jsx(Ke,{})}),e.jsx(Do,{"data-testid":"swap-icon",disabled:(t==null?void 0:t.length)!==1,onClick:(t==null?void 0:t.length)===1?i:void 0,children:e.jsx(Ze,{})}),e.jsx(Uo,{children:e.jsx(Je,{})})]})]})]})},Lo=d(N)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,Eo=d(g)`
  flex: 1 1 100%;
`,Mo=d.div`
  position: absolute;
  top: 26px;
  bottom: 26px;
  left: 4px;
  width: 35px;
  border-left: 1.5px solid #6b7a8d4d;
  border-top: 1.5px solid #6b7a8d4d;
  border-bottom: 1.5px solid #6b7a8d4d;
  border-radius: 12px 0 0 12px;
`,Ao=d.div`
  position: relative;
  color: white;
  font-family: 'Barlow';
  display: flex;
  flex-direction: ${t=>t.swap?"column-reverse":"column"};
  margin-bottom: 10px;
  padding-left: 38px;
`,Fo=d(at)`
  position: relative;
  width: 100%;
  padding: 16px;
  gap: 10px;
  border-radius: 6px;
  border: 1px solid #6b7a8d4d;
  opacity: 0px;
  display: flex;
`,Oo=d.div`
  position: relative;
  width: 100%;
  padding: 15px;
  gap: 10px;
  border-radius: 6px;
  border: 1.4px solid #6b7a8d4d;
  opacity: 0px;
  display: flex;
  align-items: center;
`,Wo=d.label`
  color: #bac1c6;
  font-size: 13px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0.01em;
  text-align: left;
  margin-bottom: 6px;
`,Ho=d.label`
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
`,Po=d.div`
  position: absolute;
  top: 0;
  right: 0;
  transform: translateY(-50%) translateX(50%);
  color: #23252f;
`,Do=d.div`
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
`,Uo=d.div`
  position: absolute;
  bottom: 0;
  right: 0;
  transform: translateY(10px) translateX(3px);
  color: #6b7a8d;
  line-height: 1;
`,Go=({onClose:t,multiTopics:s})=>{const{close:n}=M("mergeTopic"),r=Ce({mode:"onChange"}),{setValue:i,reset:l}=r,[a,o]=h.useState(!1),[c,u]=h.useState(!1),[m,p]=h.useState(null);h.useEffect(()=>{if(s&&s.length>0){const y=s.map(C=>C.name).join(", ");i("name",y)}return()=>{l()}},[s,i,l]);const j=()=>{t(),n()},b=async()=>{o(!0);const y=s==null?void 0:s.map(C=>C.ref_id).filter(C=>!!C);try{y.length&&m&&(await vt({from:y,to:m==null?void 0:m.ref_id}),L.setState(C=>({ids:C.ids.filter(w=>!y.includes(w)),total:C.total-y.length})),j())}catch(C){console.warn(C)}finally{o(!1)}};return e.jsx(ce,{id:"mergeTopic",kind:"small",onClose:j,preventOutsideClose:!0,children:e.jsxs(ve,{...r,children:[e.jsx(Io,{from:s,isSwapped:c,onSelect:p,selectedToNode:m,setIsSwapped:()=>u(!c)}),e.jsxs(Yo,{color:"secondary","data-testid":"merge-topics-button",disabled:a||!m,onClick:b,size:"large",variant:"contained",children:["Merge topics",a&&e.jsx(Vo,{children:e.jsx(z,{color:x.lightGray,size:12})})]})]})})},Yo=d(H)`
  width: 293px !important;
  margin: 0 0 10px auto !important;
`,Vo=d.span`
  margin-top: 2px;
`,Qo=({topic:t,onClick:s,onSearch:n,checkedStates:r,setCheckedStates:i,isMuteDisabled:l})=>{const[a,o]=L(k=>[k.ids,k.total]),[c,u]=h.useState(!1),[m,p]=h.useState(!1),j=je(t.date_added_to_graph),b=async(k,T)=>{u(!0);try{await le(k,{node_data:{is_muted:T}}),L.setState({ids:a.filter(_=>_!==k),total:o-1})}catch(_){console.warn(_)}},y=k=>{i(T=>({...T,[k]:!T[k]}))},C=(k,T)=>{var _;(_=window.getSelection())!=null&&_.toString()?k.preventDefault():n(T.name)},w=t.edgeList.slice(0,1),S=t.edgeList.length-w.length,[$,A]=ne.useState(null),F=k=>{A(k.currentTarget),p(!0)},R=()=>{p(!1)},I=!!$&&m,W=r[t.ref_id]?"visible":"";return e.jsxs(xe,{className:r[t.ref_id]?"checked":"",children:[e.jsx(f,{children:e.jsx(Ko,{className:`checkbox-section ${W}`,"data-testid":"topic-check-box",onClick:()=>y(t.ref_id),children:e.jsx(Zo,{checked:r[t.ref_id],children:e.jsx(Jo,{children:r[t.ref_id]&&e.jsx(et,{})})})})}),e.jsx(f,{onClick:k=>C(k,t),children:e.jsx(Xo,{children:t.name})}),e.jsx(f,{children:t.node_type}),e.jsx(f,{children:e.jsx(en,{children:t.edgeCount})}),e.jsxs(f,{children:[e.jsx(we,{anchorEl:$,anchorOrigin:{vertical:"top",horizontal:"center"},disableRestoreFocus:!0,id:"mouse-over-popover",onClose:R,onMouseEnter:()=>p(!0),onMouseLeave:R,open:I,sx:{pointerEvents:"auto","& .MuiPaper-root":{backgroundColor:"rgba(0, 0, 0, 0.9)",borderRadius:"4px",width:"160px",maxHeight:"200px",overflowY:"scroll"}},transformOrigin:{vertical:"bottom",horizontal:"center"},children:e.jsx(Le,{sx:{p:1.5,fontSize:"13px",fontWeight:400,lineHeight:"1.8",wordWrap:"break-word"},children:t.edgeList.join(", ")})}),w.join(", "),S>0&&e.jsx(Le,{"aria-haspopup":"true","aria-owns":I?"mouse-over-popover":void 0,component:"span",onMouseEnter:F,onMouseLeave:R,sx:{cursor:"pointer"},children:",..."})]}),e.jsx(f,{children:e.jsx("span",{children:j})}),e.jsx(f,{className:"cell-center",children:e.jsx(g,{direction:"row",justify:"space-between",children:e.jsx("div",{className:"approve-wrapper",children:c?e.jsx(qo,{children:e.jsx(z,{color:x.white,size:16})}):e.jsxs(g,{direction:"row",children:[t.is_muted?e.jsx(V,{className:"centered",disabled:l,onClick:()=>b(t.ref_id,!1),children:e.jsx(Rt,{})}):e.jsx(V,{className:"centered",disabled:l,onClick:()=>b(t.ref_id,!0),children:e.jsx(It,{})}),e.jsx(V,{disabled:l,onClick:k=>s(k,t.ref_id),children:e.jsx(Lt,{"data-testid":"ThreeDotsIcons"})})]})})})})]},t.name)},qo=d.span`
  margin-left: 12px;
`,Xo=d.span`
  cursor: pointer;
  :hover {
    text-decoration: underline;
  }
`,Ko=d.td`
  visibility: hidden;
  cursor: pointer;
  display: flex;
  align-items: center;

  &.visible {
    visibility: visible;
  }
`,Zo=d.div`
  width: 14px;
  height: 14px;
  border-radius: 4px;
  border: ${({checked:t})=>t?"#618AFF":"2px solid #CCCCCC"};
  background-color: ${({checked:t})=>t?"#618AFF":"transparent"};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 12px;
`,Jo=d.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 2px;
  background-color: transparent;
`,en=d.span`
  display: flex;
  align-items: center;
  justify-content: center;
`,tn=h.memo(Qo),sn=({setShowMuteUnmute:t,showMuted:s,onTopicEdit:n,onChangeFilter:r,checkedStates:i,setCheckedStates:l})=>{const{close:a}=M("sourcesTable"),[o,c]=h.useState(!1),[u,m]=ne.useState(null),[p,j]=ne.useState(""),b=Object.values(i).filter(v=>v).length,[y,C]=Tt(v=>[v.setSearchFormValue,v.setCurrentSearch]),[w,S,$]=L(v=>[v.data,v.ids,v.total]),A=h.useCallback((v,E)=>{m(v.currentTarget),j(E)},[]),F=()=>{m(null)},R=v=>{y(v),C(v),a()},I=v=>{n(p,v),F()},W=v=>{r(v)},k=!!u,T=k?"simple-popover":void 0,_=async()=>{c(!0);try{const v=Object.keys(i).map(async G=>{if(i[G])try{return await le(G,{node_data:{is_muted:!s}}),G}catch(ht){return console.error("Error updating node data:",ht),null}return null}),E=await Promise.all(v);L.setState({ids:S.filter(G=>!E.includes(G)),total:$-E.length}),l({}),c(!1)}catch(v){console.error("Error:",v),c(!1)}};return w?e.jsx(e.Fragment,{children:Object.keys(w).length?e.jsx(pn,{align:"center",justify:o?"center":"flex-start",children:o?e.jsx(z,{color:x.white}):e.jsxs(e.Fragment,{children:[e.jsxs(de,{component:"table",children:[b>0?e.jsx(Ns,{children:e.jsxs(U,{component:"tr",children:[e.jsx(f,{children:e.jsx(V,{onClick:()=>l({}),children:e.jsx(ee,{})})}),e.jsx(f,{colSpan:12,children:e.jsxs(dn,{children:[e.jsxs(cn,{children:[e.jsx(ln,{children:b}),"selected"]}),e.jsx(f,{className:"empty"}),e.jsx(Ge,{onClick:_,role:"button",children:s?e.jsxs(e.Fragment,{children:[e.jsx(ze,{})," Unmute ALL"]}):e.jsxs(e.Fragment,{children:[e.jsx(Be,{})," Mute ALL"]})}),e.jsx(f,{className:"empty"}),e.jsxs(Ge,{onClick:()=>I("mergeTopic"),children:[e.jsx(Re,{})," Merge"]})]})}),e.jsx(f,{className:"empty"})]})}):e.jsx(he,{children:e.jsxs(U,{component:"tr",children:[e.jsx(f,{className:"empty"}),e.jsx(f,{children:e.jsxs(me,{onClick:()=>W(Te),children:["Name ",e.jsx(ue,{})]})}),e.jsx(f,{children:"Type"}),e.jsx(f,{children:e.jsxs(me,{onClick:()=>W(At),children:["Count ",e.jsx(ue,{})]})}),e.jsx(f,{children:"Edge list"}),e.jsx(f,{children:e.jsxs(me,{onClick:()=>W(Ft),children:["Date ",e.jsx(ue,{})]})}),e.jsx(f,{children:e.jsx(g,{px:8,children:e.jsxs(on,{onClick:t,children:[e.jsx(nn,{checked:s,children:e.jsx(rn,{children:s&&e.jsx(et,{})})}),"Muted"]})})})]})}),w&&e.jsx("tbody",{children:S==null?void 0:S.map(v=>e.jsx(tn,{checkedStates:i,isMuteDisabled:Object.values(i).filter(E=>E).length>1,onClick:A,onSearch:R,setCheckedStates:l,topic:w[v]},v))})]}),p?e.jsxs(an,{anchorEl:u,anchorOrigin:{vertical:"bottom",horizontal:"right"},id:T,onClose:F,open:k,transformOrigin:{vertical:"top",horizontal:"right"},children:[s?e.jsxs(Y,{"data-testid":"unmute",onClick:()=>I("unMute"),children:[" ",e.jsx(ze,{"data-testid":""})," Unmute"]}):e.jsxs(Y,{"data-testid":"mute",onClick:()=>I("mute"),children:[" ",e.jsx(Be,{"data-testid":"VisibilityOff"})," Mute"]}),e.jsxs(Y,{"data-testid":"rename",onClick:()=>I("editTopic"),children:[e.jsx(Et,{"data-testid":"EditTopicIcon"})," Rename"]}),e.jsxs(Y,{"data-testid":"merge",onClick:()=>I("mergeTopic"),children:[e.jsx(Re,{"data-testid":"MergeIcon"})," Merge"]}),e.jsxs(Y,{"data-testid":"add_edge",onClick:()=>I("addEdge"),children:[e.jsx(Mt,{"data-testid":"AddCircleIcon"})," Add edge"]})]}):null]})}):e.jsxs(g,{children:[e.jsx(N,{children:"There is not any results for selected filters"}),e.jsx(be,{})]})}):e.jsxs(g,{children:[e.jsx(N,{children:"There is not any results for selected filters"}),e.jsx(be,{})]})},on=d.td`
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
`,xn=()=>{const[t,s,n,r,i,l,a,o]=L(T=>[T.data,T.ids,T.total,T.setTopics,T.filters,T.setFilters,T.terminate,T.loading]),{open:c}=M("editTopic"),{open:u}=M("mergeTopic"),{open:m}=M("addEdge"),[p,j]=h.useState(null),[b,y]=h.useState([]),[C,w]=h.useState({}),S={editTopic:c,mergeTopic:u,addEdge:m},$=h.useRef([]);h.useEffect(()=>{s.length&&($.current=s)},[s]),h.useEffect(()=>{(async()=>{try{await r()}catch{console.error("err")}})()},[r,i]);const A=async()=>{l({page:i.page+1})};h.useEffect(()=>()=>{a()},[a]);const F=T=>{l({sortBy:T})},R=()=>{j(null),y([])},I=async(T,_)=>{try{await le(T,{node_data:{is_muted:_==="mute"}}),L.setState({ids:s.filter(v=>v!==T),total:n-1})}catch(v){console.warn(v)}},W=async(T,_)=>{if(t)if(_==="mergeTopic")if(Object.values(C).filter(v=>v).length>0){const v=Object.entries(C).filter(([,E])=>E).map(([E])=>t[E]);y(v),u()}else y([t[T]]),j(t[T]),u();else["mute","unMute"].includes(_)&&await I(T,_),typeof S[_]=="function"&&S[_](),j(t[T])},k=T=>{l({...i,search:T})};return e.jsxs(e.Fragment,{children:[e.jsxs(hn,{direction:"column",justify:"flex-end",children:[e.jsx($e,{align:"flex-start",direction:"row",justify:"space-between",children:e.jsx(N,{className:"title",children:"Topics"})}),e.jsx(gn,{"data-testid":"topic-search-container",children:e.jsx(pt,{activeIcon:e.jsx(ee,{}),defaultIcon:e.jsx(Xe,{}),loading:o,loadingIcon:e.jsx(z,{color:x.lightGray,size:24}),onSearch:k,placeholder:"Search ..."})}),e.jsx(un,{align:"center",justify:o&&!t?"center":"flex-start",children:o&&!t?e.jsx(z,{color:x.white}):e.jsxs(e.Fragment,{children:[e.jsx(sn,{checkedStates:C,onChangeFilter:F,onTopicEdit:W,setCheckedStates:w,setShowMuteUnmute:()=>l({is_muted:!i.is_muted}),showMuted:i.is_muted}),n>s.length?e.jsxs(H,{className:"load-more",disabled:o,onClick:A,children:["Load more",o&&e.jsx(z,{color:x.lightGray,size:10})]}):null]})})]}),b.length>0&&e.jsx(Go,{multiTopics:b,onClose:R}),p&&e.jsx(zo,{onClose:R,topic:p}),p&&e.jsx(So,{onClose:R,topic:p})]})},hn=d(g)`
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
`,fn=[{label:rt,component:As},{label:Ot,component:io},{label:nt,component:qs},{label:ot,component:xn}],mn=t=>{const{children:s,value:n,index:r,...i}=t;return n===r?e.jsx(Cn,{"aria-labelledby":`simple-tab-${r}`,hidden:n!==r,id:`simple-tabpanel-${r}`,role:"tabpanel",...i,children:s}):null};function bn(t){return{id:`simple-tab-${t}`,"aria-controls":`simple-tabpanel-${t}`}}const jn=()=>{const[t,s]=h.useState(0),[n]=Qe(o=>[o.isAdmin]),[r]=St(o=>[o.queuedSourcesFeatureFlag]),i=$t(),l=(o,c)=>{s(c)},a=fn.filter(({label:o})=>o===ot?n:o===nt?n&&r:o===rt?i:!0);return e.jsxs(vn,{"data-testid":"sources-table",direction:"column",children:[e.jsx(yn,{"aria-label":"sources tabs",onChange:l,value:t,children:a.map((o,c)=>e.jsx(wn,{color:x.white,disableRipple:!0,label:o.label,...bn(c)},o.label))}),a.map((o,c)=>e.jsx(mn,{index:c,value:t,children:e.jsx(o.component,{})},o.label))]})},yn=d(Vt)`
  && {
    background: rgba(0, 0, 0, 0.2);
    border-radius: 9px 9px 0 0;
    .MuiTabs-indicator {
      background: ${x.primaryBlue};
    }
  }
`,wn=d(Qt)`
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
`,Wn=()=>{const{close:t}=M("sourcesTable"),{visible:s}=M("addContent");return s?null:e.jsx(ce,{background:"BG1",id:"sourcesTable",kind:"large",noWrap:!0,onClose:t,preventOutsideClose:!0,children:e.jsx(jn,{})})};export{Wn as SourcesTableModal};
