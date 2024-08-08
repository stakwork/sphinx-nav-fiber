import{r as h,b as q,g as Q,s as H,_ as N,u as X,a as K,j as e,c as J,d as ee,e as P,ae as ut,f as oe,af as gt,o as d,q as x,T as _,F as g,O as E,ba as ft,ah as se,R as ne,B as ae,ab as mt,bb as bt,bc as Ge,v as re,bd as Ze,a8 as ye,aZ as ke,aY as _e,a$ as Le,be as Ct,J as Ye,bf as jt,bg as qe,bh as yt,aW as wt,bi as le,bj as vt,A as Tt,C as St,U as $t}from"./index-218456ca.js";import{B as ce}from"./index-71854776.js";import{B as W,I as Y,j as te,h as we,F as ve}from"./index-1a58f286.js";import{T as Me,s as D,a as Qe,S as Xe,A as Te,N as Ke,F as Je,b as et,E as kt,D as _t,c as tt,Q as st,V as ot,d as Lt}from"./NodeCircleIcon-e6aa146c.js";import{P as Mt}from"./PlusIcon-9b18b3a4.js";import{C as M}from"./ClipLoader-71941895.js";import{f as Nt,g as Bt,h as zt,a as It,i as Rt}from"./index.esm-efc453bf.js";import{P as Se,a as Et}from"./Popover-be2c3786.js";import{S as nt,T as Ne}from"./SearchIcon-bd87aa17.js";import{I as At,A as $e,O as rt,T as it}from"./index-b929d7ee.js";import{B as Ot,T as Ft}from"./index-d183721f.js";import{D as Ht}from"./DeleteIcon-c7897832.js";import{u as I}from"./index-e36c9c6f.js";import{M as Be,A as Wt}from"./MergeIcon-1e52f823.js";import{C as at}from"./CheckIcon-1088cbb8.js";import{T as Pt,a as Ut}from"./Tabs-dab7fe8b.js";import"./useSlotProps-65b7d4c3.js";import"./Stack-47efd408.js";import"./index-d6e71bbb.js";import"./createSvgIcon-a48237c8.js";import"./TextareaAutosize-f298060c.js";import"./InfoIcon-4499b152.js";const Dt=h.createContext(),lt=Dt;function Vt(t){return q("MuiTable",t)}Q("MuiTable",["root","stickyHeader"]);const Gt=["className","component","padding","size","stickyHeader"],Zt=t=>{const{classes:s,stickyHeader:n}=t;return ee({root:["root",n&&"stickyHeader"]},Vt,s)},Yt=H("table",{name:"MuiTable",slot:"Root",overridesResolver:(t,s)=>{const{ownerState:n}=t;return[s.root,n.stickyHeader&&s.stickyHeader]}})(({theme:t,ownerState:s})=>N({display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":N({},t.typography.body2,{padding:t.spacing(2),color:(t.vars||t).palette.text.secondary,textAlign:"left",captionSide:"bottom"})},s.stickyHeader&&{borderCollapse:"separate"})),ze="table",qt=h.forwardRef(function(s,n){const r=X({props:s,name:"MuiTable"}),{className:a,component:l=ze,padding:i="normal",size:o="medium",stickyHeader:c=!1}=r,u=K(r,Gt),m=N({},r,{component:l,padding:i,size:o,stickyHeader:c}),p=Zt(m),C=h.useMemo(()=>({padding:i,size:o,stickyHeader:c}),[i,o,c]);return e.jsx(lt.Provider,{value:C,children:e.jsx(Yt,N({as:l,role:l===ze?null:"table",ref:n,className:J(p.root,a),ownerState:m},u))})}),de=qt,Qt=h.createContext(),pe=Qt;function Xt(t){return q("MuiTableBody",t)}Q("MuiTableBody",["root"]);const Kt=["className","component"],Jt=t=>{const{classes:s}=t;return ee({root:["root"]},Xt,s)},es=H("tbody",{name:"MuiTableBody",slot:"Root",overridesResolver:(t,s)=>s.root})({display:"table-row-group"}),ts={variant:"body"},Ie="tbody",ss=h.forwardRef(function(s,n){const r=X({props:s,name:"MuiTableBody"}),{className:a,component:l=Ie}=r,i=K(r,Kt),o=N({},r,{component:l}),c=Jt(o);return e.jsx(pe.Provider,{value:ts,children:e.jsx(es,N({className:J(c.root,a),as:l,ref:n,role:l===Ie?null:"rowgroup",ownerState:o},i))})}),os=ss;function ns(t){return q("MuiTableCell",t)}const rs=Q("MuiTableCell",["root","head","body","footer","sizeSmall","sizeMedium","paddingCheckbox","paddingNone","alignLeft","alignCenter","alignRight","alignJustify","stickyHeader"]),is=rs,as=["align","className","component","padding","scope","size","sortDirection","variant"],ls=t=>{const{classes:s,variant:n,align:r,padding:a,size:l,stickyHeader:i}=t,o={root:["root",n,i&&"stickyHeader",r!=="inherit"&&`align${P(r)}`,a!=="normal"&&`padding${P(a)}`,`size${P(l)}`]};return ee(o,ns,s)},cs=H("td",{name:"MuiTableCell",slot:"Root",overridesResolver:(t,s)=>{const{ownerState:n}=t;return[s.root,s[n.variant],s[`size${P(n.size)}`],n.padding!=="normal"&&s[`padding${P(n.padding)}`],n.align!=="inherit"&&s[`align${P(n.align)}`],n.stickyHeader&&s.stickyHeader]}})(({theme:t,ownerState:s})=>N({},t.typography.body2,{display:"table-cell",verticalAlign:"inherit",borderBottom:t.vars?`1px solid ${t.vars.palette.TableCell.border}`:`1px solid
    ${t.palette.mode==="light"?ut(oe(t.palette.divider,1),.88):gt(oe(t.palette.divider,1),.68)}`,textAlign:"left",padding:16},s.variant==="head"&&{color:(t.vars||t).palette.text.primary,lineHeight:t.typography.pxToRem(24),fontWeight:t.typography.fontWeightMedium},s.variant==="body"&&{color:(t.vars||t).palette.text.primary},s.variant==="footer"&&{color:(t.vars||t).palette.text.secondary,lineHeight:t.typography.pxToRem(21),fontSize:t.typography.pxToRem(12)},s.size==="small"&&{padding:"6px 16px",[`&.${is.paddingCheckbox}`]:{width:24,padding:"0 12px 0 16px","& > *":{padding:0}}},s.padding==="checkbox"&&{width:48,padding:"0 0 0 4px"},s.padding==="none"&&{padding:0},s.align==="left"&&{textAlign:"left"},s.align==="center"&&{textAlign:"center"},s.align==="right"&&{textAlign:"right",flexDirection:"row-reverse"},s.align==="justify"&&{textAlign:"justify"},s.stickyHeader&&{position:"sticky",top:0,zIndex:2,backgroundColor:(t.vars||t).palette.background.default})),ds=h.forwardRef(function(s,n){const r=X({props:s,name:"MuiTableCell"}),{align:a="inherit",className:l,component:i,padding:o,scope:c,size:u,sortDirection:m,variant:p}=r,C=K(r,as),b=h.useContext(lt),j=h.useContext(pe),w=j&&j.variant==="head";let y;i?y=i:y=w?"th":"td";let S=c;y==="td"?S=void 0:!S&&w&&(S="col");const $=p||j&&j.variant,A=N({},r,{align:a,component:y,padding:o||(b&&b.padding?b.padding:"normal"),size:u||(b&&b.size?b.size:"medium"),sortDirection:m,stickyHeader:$==="head"&&b&&b.stickyHeader,variant:$}),O=ls(A);let B=null;return m&&(B=m==="asc"?"ascending":"descending"),e.jsx(cs,N({as:y,ref:n,className:J(O.root,l),"aria-sort":B,scope:S,ownerState:A},C))}),ps=ds;function hs(t){return q("MuiTableHead",t)}Q("MuiTableHead",["root"]);const xs=["className","component"],us=t=>{const{classes:s}=t;return ee({root:["root"]},hs,s)},gs=H("thead",{name:"MuiTableHead",slot:"Root",overridesResolver:(t,s)=>s.root})({display:"table-header-group"}),fs={variant:"head"},Re="thead",ms=h.forwardRef(function(s,n){const r=X({props:s,name:"MuiTableHead"}),{className:a,component:l=Re}=r,i=K(r,xs),o=N({},r,{component:l}),c=us(o);return e.jsx(pe.Provider,{value:fs,children:e.jsx(gs,N({as:l,className:J(c.root,a),ref:n,role:l===Re?null:"rowgroup",ownerState:o},i))})}),ct=ms;function bs(t){return q("MuiTableRow",t)}const Cs=Q("MuiTableRow",["root","selected","hover","head","footer"]),Ee=Cs,js=["className","component","hover","selected"],ys=t=>{const{classes:s,selected:n,hover:r,head:a,footer:l}=t;return ee({root:["root",n&&"selected",r&&"hover",a&&"head",l&&"footer"]},bs,s)},ws=H("tr",{name:"MuiTableRow",slot:"Root",overridesResolver:(t,s)=>{const{ownerState:n}=t;return[s.root,n.head&&s.head,n.footer&&s.footer]}})(({theme:t})=>({color:"inherit",display:"table-row",verticalAlign:"middle",outline:0,[`&.${Ee.hover}:hover`]:{backgroundColor:(t.vars||t).palette.action.hover},[`&.${Ee.selected}`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.selectedOpacity})`:oe(t.palette.primary.main,t.palette.action.selectedOpacity),"&:hover":{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.hoverOpacity}))`:oe(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.hoverOpacity)}}})),Ae="tr",vs=h.forwardRef(function(s,n){const r=X({props:s,name:"MuiTableRow"}),{className:a,component:l=Ae,hover:i=!1,selected:o=!1}=r,c=K(r,js),u=h.useContext(pe),m=N({},r,{component:l,hover:i,selected:o,head:u&&u.variant==="head",footer:u&&u.variant==="footer"}),p=ys(m);return e.jsx(ws,N({as:l,ref:n,className:J(p.root,a),role:l===Ae?null:"row",ownerState:m},c))}),V=vs;function Ce(t){const s=new Date(Number(t)*1e3),n=s.getFullYear(),r=(1+s.getMonth()).toString().padStart(2,"0");return`${s.getDate().toString().padStart(2,"0")}/${r}/${n}`}const f=d(ps)`
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
`,he=d(V)`
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
`,xe=d(ct)`
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
`,ie=d(W)`
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
`,ue=d(g)`
  margin-bottom: 16px;
  padding: 0 36px;
  ${_} {
    margin-bottom: 0;
  }
`,Ts=d(ct)`
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
`;function Ss(t){return t.charAt(0).toUpperCase()+t.slice(1).toLowerCase()}const $s=({node:t})=>{var s,n,r,a,l,i,o,c,u;return e.jsxs(he,{children:[e.jsx(f,{className:"empty"}),e.jsx(f,{children:(s=t==null?void 0:t.properties)!=null&&s.date_added_to_graph?Ce((n=t==null?void 0:t.properties)==null?void 0:n.date_added_to_graph):Ce((r=t==null?void 0:t.properties)==null?void 0:r.date)}),e.jsx(f,{children:t==null?void 0:t.node_type}),e.jsx(f,{children:(t==null?void 0:t.node_type)==="Tweet"?e.jsx(Oe,{href:`${Me}${(a=t==null?void 0:t.properties)==null?void 0:a.tweet_id}${Me.includes("?")?"&":"?"}open=system`,target:"_blank",children:(l=t==null?void 0:t.properties)==null?void 0:l.tweet_id}):e.jsx(Oe,{href:`${(i=t==null?void 0:t.properties)==null?void 0:i.source_link}${((o=t==null?void 0:t.properties)==null?void 0:o.source_link).includes("?")?"&":"?"}open=system`,target:"_blank",children:(c=t==null?void 0:t.properties)==null?void 0:c.source_link})}),e.jsx(f,{children:(u=t==null?void 0:t.properties)!=null&&u.status?Ss(t.properties.status):"Processing"})]})},Oe=d.a`
  color: ${x.white};
  text-decoration: underline;
  &:visited {
    color: ${x.white};
  }
`,ks=h.memo($s),_s=({nodes:t})=>{const{open:s}=E("addContent"),n=async()=>{s()};return!t||(t==null?void 0:t.length)===0?e.jsx(e.Fragment,{children:e.jsxs(Ls,{children:[e.jsx(Ms,{align:"center",direction:"row",justify:"space-between",children:e.jsx(_,{className:"subtitle",children:"Contribute to the graph by adding content."})}),e.jsx(g,{children:e.jsx(W,{color:"secondary",onClick:n,size:"medium",startIcon:e.jsx(Mt,{}),type:"submit",variant:"contained",children:"Add Content"})})]})}):e.jsxs(de,{component:"table",children:[e.jsx(xe,{children:e.jsxs(V,{component:"tr",children:[e.jsx(f,{className:"empty"}),e.jsx(f,{children:"Date"}),e.jsx(f,{children:"Type"}),e.jsx(f,{children:"Source"}),e.jsx(f,{children:"Status"})]})}),e.jsx("tbody",{children:t==null?void 0:t.map(r=>e.jsx(ks,{node:r},r==null?void 0:r.ref_id))})]})},Ls=H(g)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 100px auto;
  width: 100%;
`,Ms=H(g)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: 30px;

  .subtitle {
    color: ${x.GRAY3};
    font-family: Barlow;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`,Ns=()=>{const[t,s]=h.useState([]),[n,r]=h.useState(!0),[a,l]=h.useState(10),[i,o]=h.useState(!0),c={only_content:"true",sort_by:"date",limit:a.toString()},u=async()=>{r(!0);try{const p=await ft(c);s(p.nodes),r(!1)}catch(p){console.error("Error fetching data:",p),r(!1)}};h.useEffect(()=>{u()},[a]);const m=()=>{l(a+10),u()};return e.jsxs(Bs,{direction:"column",justify:"flex-end",children:[e.jsx(ue,{align:"center",direction:"row",justify:"space-between",children:e.jsx(_,{className:"title",children:"Content I've added to the graph"})}),e.jsxs(zs,{align:"center",justify:n?"center":"flex-start",children:[n?e.jsx(M,{color:x.white}):e.jsx(e.Fragment,{children:e.jsx(_s,{nodes:t})}),!n&&t.length>0&&(i?e.jsx(W,{onClick:m,size:"medium",children:"Load More"}):e.jsx(Is,{children:"No new nodes available"}))]})]})},Bs=d(g)`
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
`,zs=d(g)`
  min-height: 0;
  overflow: auto;
  flex: 1;
  width: 100%;
`,Is=d.div`
  margin-top: 10px;
  color: ${x.GRAY3};
  font-family: Barlow;
  font-size: 14px;
`,Rs=({kind:t,shape:s})=>{switch(t){case"small":return se`
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
      `}},Es=({kind:t})=>{switch(t){case"small":return"regularBold";case"big":return"mediumBold";default:return"regularBold"}},As=d(g).attrs({align:"center",direction:"row",justify:"center"})`
  border: none;
  cursor: pointer;
  pointer-events: auto;

  ${Rs}

  &:hover {
    opacity: ${({disabled:t})=>t?.5:.9};
  }

  ${({disabled:t})=>t&&se`
      opacity: 0.5;
      pointer-events: none;
    `}
`,Fe=({background:t="primaryButton",children:s,className:n="button",startIcon:r,endIcon:a,disabled:l,id:i,kind:o="regular",onClick:c,onPointerDown:u,shape:m="squared",textColor:p="white",type:C})=>e.jsxs(As,{as:"button",background:t,className:n,disabled:l,id:i,kind:o,onClick:c,onPointerDown:u,shape:m,type:C,children:[r&&r,e.jsx(_,{color:p,kind:Es({kind:o}),children:s}),a&&a]}),dt=({message:t="Are you sure you want to delete this item?",onConfirm:s,children:n,anchorOrigin:r={vertical:"bottom",horizontal:"left"},transformOrigin:a={vertical:"top",horizontal:"center"}})=>{const[l,i]=h.useState(null),o=C=>{i(C.currentTarget)},c=()=>{i(null)},u=()=>{s(),c()},m=()=>{c()},p=!!l;return e.jsxs(e.Fragment,{children:[e.jsx("div",{children:ne.cloneElement(n,{onClick:o})}),e.jsx(Fs,{anchorEl:l,anchorOrigin:r,onClose:c,open:p,transformOrigin:a,children:e.jsxs(Os,{children:[e.jsx(_,{className:"message",children:t}),e.jsxs(Hs,{children:[e.jsx(Fe,{background:"primaryBlue",kind:"small",onClick:u,children:"Yes"}),e.jsx(Fe,{background:"white",kind:"small",onClick:m,textColor:"black",children:"No"})]})]})})]})},Os=d(g)`
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
`,Fs=d(Se)`
  && {
    z-index: 9999;
  }
`,Hs=d(g)`
  display: flex;
  flex-direction: row;
  gap: 12px;
  align-items: center;
  margin-top: 16px;
`,je=t=>e.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:e.jsxs("g",{id:"filter_alt_off",children:[e.jsx("mask",{id:"mask0_1543_23288",maskUnits:"userSpaceOnUse",x:"0",y:"0",width:"24",height:"24",children:e.jsx("rect",{id:"Bounding box",width:"1em",height:"1em",fill:"currentColor"})}),e.jsx("g",{mask:"url(#mask0_1543_23288)",children:e.jsx("path",{id:"filter_alt_off_2",d:"M14.8 11.9748L6.82503 3.9998H19C19.4167 3.9998 19.7167 4.18314 19.9 4.5498C20.0834 4.91647 20.05 5.26647 19.8 5.5998L14.8 11.9748ZM19.775 22.5998L14 16.8248V18.9998C14 19.2831 13.9042 19.5206 13.7125 19.7123C13.5209 19.904 13.2834 19.9998 13 19.9998H11C10.7167 19.9998 10.4792 19.904 10.2875 19.7123C10.0959 19.5206 10 19.2831 10 18.9998V12.8248L1.40002 4.2248L2.80002 2.7998L21.2 21.1998L19.775 22.5998Z",fill:"currentColor"})})]})}),Ws=({data:t})=>{const s=ae(i=>i.setQueuedSources),[n,r]=h.useState(""),a=async i=>{if(t!=null&&t.length)try{const o=await mt.enable();await bt(i,o.pubkey),s(t.filter(c=>c.ref_id!==i))}catch(o){console.warn(o)}},l=async i=>{if(!(!i||!(t!=null&&t.length))){r(i);try{await Ge(i),s(t==null?void 0:t.filter(o=>o.ref_id!==i))}catch(o){console.warn(o)}finally{r("")}}};return t!=null&&t.length?e.jsxs(de,{component:"table",children:[e.jsx(xe,{children:e.jsxs(V,{component:"tr",children:[e.jsx(f,{className:"empty"}),e.jsx(f,{children:"Type"}),e.jsx(f,{children:"Source"}),e.jsx(f,{}),e.jsx(f,{className:"empty"})]})}),(t==null?void 0:t.length)&&e.jsx("tbody",{children:t==null?void 0:t.map(i=>e.jsxs(he,{children:[e.jsx(f,{className:"empty"}),e.jsx(f,{children:D[i.source_type]}),e.jsx(f,{width:"268px",children:i.source_type==="twitter_handle"?e.jsxs(We,{href:`${Qe}/${i.source}?open=system`,target:"_blank",children:["@",i.source]}):e.jsx(We,{href:`${i.source}?open=system`,target:"_blank",children:i.source})}),e.jsx(f,{className:"cell-center",children:e.jsxs(g,{direction:"row",justify:"space-between",children:[e.jsx("div",{className:"approve-wrapper",children:e.jsx(He,{className:"centered",onClick:()=>a(i.ref_id),children:e.jsx(Nt,{color:x.primaryGreen,fontSize:24})})}),e.jsx("div",{className:"delete-wrapper",children:n===i.ref_id?e.jsx(M,{color:x.white,size:16}):e.jsx(dt,{message:"Are you sure ?",onConfirm:()=>l(i.ref_id),children:e.jsx(He,{className:"centered",children:e.jsx(Bt,{color:x.primaryRed,fontSize:24})})})})]})}),e.jsx(f,{className:"empty"})]},i.source))})]}):e.jsxs(g,{children:[e.jsx(_,{children:"There is not any results for selected filters"}),e.jsx(je,{})]})},He=d(g)`
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
`,We=d.a`
  color: ${x.white};
  text-decoration: underline;
  &:visited {
    color: ${x.white};
  }
  &:hover {
    cursor: pointer;
  }
`,Ps=()=>{const[t,s]=h.useState(!0),[n,r]=h.useState(""),[a,l]=ae(c=>[c.queuedSources,c.setQueuedSources]);h.useEffect(()=>{(async()=>{s(!0);try{const u=await Ze({approved:"False"});l(u.data)}catch(u){console.warn(u)}finally{s(!1)}})()},[l]);const i=c=>{r(n===c||!c?"":c)},o=a==null?void 0:a.filter(c=>!n||c.source_type===n);return e.jsxs(Us,{align:"stretch",direction:"column",justify:"flex-end",children:[e.jsxs(ue,{align:"flex-start",justify:"space-between",children:[e.jsx(_,{className:"title",children:"Queued Sources"}),e.jsx(_,{className:"subtitle",children:"This is a queue of pending sources waiting for approval or denial from graph users. If you think a source will provide good content for the graph, you can pay to approve it. Think of this as an investment: you pay to add it to the source table, and if the content is popular you will earn from it. If content is not relevant to the graph, you should deny it."})]}),e.jsxs(g,{className:"filters",direction:"row",pb:16,px:36,children:[e.jsx(ie,{className:re({selected:!n}),onClick:()=>i(""),size:"small",children:"All"}),Object.keys(D).map(c=>e.jsx(ie,{className:re({selected:c===n}),onClick:()=>i(c),size:"small",children:D[c]},c))]}),e.jsx(Ds,{align:"center",justify:t?"center":"flex-start",children:t?e.jsx(M,{color:x.white}):e.jsx(Ws,{data:o})})]})},Us=d(g)`
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
`,Ds=d(g)`
  min-height: 0;
  overflow: auto;
  flex: 1;
  width: 100%;
`,pt=({onSearch:t,placeholder:s,activeIcon:n,defaultIcon:r,loadingIcon:a,loading:l,...i})=>{const[o,c]=h.useState(""),u=()=>{c(""),t("")},m=h.useCallback(j=>{t(j)},[t]),p=h.useMemo(()=>ye.debounce(m,300),[m]),C=j=>{const w=j.target.value.trim(),{value:y}=j.target;c(y),w?p(w):u()},b=()=>l?e.jsx(Pe,{children:e.jsx(ge,{type:"button",children:a})}):e.jsx(Pe,{children:o?e.jsx(ge,{onClick:u,type:"button",children:n}):e.jsx(ge,{type:"button",children:r})});return e.jsxs(Vs,{children:[e.jsx(Gs,{autoComplete:"off",autoCorrect:"off",inputProps:{"aria-label":"search"},onChange:C,placeholder:s,value:o,...i}),b()]})},Pe=d(g)`
  top: -50%;
  right: -3%;
  z-index: 3;
  position: absolute;
  transform: translate(-50%, 50%);
`,ge=d(Y)`
  font-size: 24px;
`,Vs=d(Et)`
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
`,Gs=d(At)`
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
`,Zs=t=>e.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 21 21",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M13.8 9.97481L5.82503 1.9998H18C18.4167 1.9998 18.7167 2.18314 18.9 2.5498C19.0834 2.91647 19.05 3.26647 18.8 3.5998L13.8 9.97481ZM18.775 20.5998L13 14.8248V16.9998C13 17.2831 12.9042 17.5206 12.7125 17.7123C12.5209 17.904 12.2834 17.9998 12 17.9998H10C9.71669 17.9998 9.47919 17.904 9.28753 17.7123C9.09586 17.5206 9.00002 17.2831 9.00002 16.9998V10.8248L0.400024 2.2248L1.80002 0.799805L20.2 19.1998L18.775 20.5998Z",fill:"currentColor"})}),Ys=({data:t,canEdit:s=!1})=>{const n=ae(o=>o.setSources),[r,a]=h.useState(""),l=async(o,c)=>{if(t!=null&&t.length)try{await Ct(o,c);const u=t==null?void 0:t.findIndex(p=>p.ref_id===o),m=[...t];m[u]={...m[u],source:c.source},n(m)}catch(u){console.warn(u)}},i=async o=>{if(!(!o||!(t!=null&&t.length))){a(o);try{await Ge(o),n(t==null?void 0:t.filter(c=>c.ref_id!==o))}catch(c){console.warn(c)}finally{a("")}}};return t!=null&&t.length?e.jsxs(de,{"aria-label":"a dense table",component:"table",id:"sources-table",size:"small",children:[e.jsx(xe,{children:e.jsxs(V,{component:"tr",children:[e.jsx(f,{className:"empty"}),e.jsx(f,{children:"Type"}),e.jsx(f,{align:"left",children:"Source"}),s&&e.jsx(f,{align:"left"}),e.jsx(f,{className:"empty"})]})}),e.jsx(os,{component:"tbody",children:t==null?void 0:t.map(o=>e.jsxs(he,{children:[e.jsx(f,{className:"empty"}),e.jsx(f,{align:"left",children:D[o.source_type]}),e.jsx(f,{align:"left",children:e.jsx(qs,{condition:s,wrapper:c=>e.jsx(Qs,{id:o.ref_id,onSave:u=>l(o.ref_id,{source:u,source_type:o.source_type}),value:o.source,children:c}),children:o.source_type===ke||o.source_type===_e||o.source_type===Le?e.jsxs(e.Fragment,{children:[o.source_type===ke&&e.jsxs(fe,{href:`${Qe}/${o.source}`,target:"_blank",children:["@",o.source]}),o.source_type===_e&&e.jsx(fe,{href:`${o.source}${o.source.includes("?")?"&":"?"}open=system`,target:"_blank",children:o.source}),o.source_type===Le&&e.jsx(fe,{href:o.source,target:"_blank",children:o.source})]}):e.jsx("div",{children:o.source})})}),s&&e.jsx(f,{align:"left",children:e.jsx("div",{className:"delete-wrapper",id:`delete-${o.source}`,children:r===o.ref_id?e.jsx(ht,{"data-testid":`delete-loader-${o.ref_id}`,children:e.jsx(M,{color:x.white,size:16})}):e.jsx(dt,{"data-testid":`delete-icon-${o.ref_id}`,message:"Are you sure?",onConfirm:()=>i(o.ref_id),children:e.jsx(U,{className:"centered","data-testid":`delete-icon-${o.ref_id}`,children:e.jsx(Ht,{})})})})}),e.jsx(f,{className:"empty"})]},o.source))})]}):e.jsxs(Ks,{children:[e.jsx(Zs,{}),e.jsx(_,{className:"text",children:"There is not any results for selected filters"})]})};function qs({condition:t,wrapper:s,children:n}){return t?s(n):n}const Qs=({value:t,onSave:s,id:n,children:r})=>{const[a,l]=h.useState(!1),[i,o]=h.useState(t),[c,u]=h.useState(!1),m=async()=>{if(n){u(!0);try{await s(i),l(!1)}catch(p){console.warn(p)}finally{u(!1)}}};return e.jsx("div",{children:a?e.jsxs(Xs,{align:"center",direction:"row",children:[e.jsx(Ot,{className:"editable-cell__input",name:"cell-input",onChange:p=>o(p),value:i}),e.jsx(U,{align:"center",justify:"center",children:c?e.jsx(ht,{"data-testid":`edit-loader-${n}`,children:e.jsx(M,{color:x.white,size:12})}):e.jsx(zt,{"data-testid":`check-icon-${n}`,onClick:m})}),e.jsx(U,{align:"center",className:"secondary",justify:"center",onClick:()=>l(!1),children:e.jsx(It,{})})]}):e.jsxs(Js,{direction:"row",children:[r,e.jsx(U,{onClick:()=>l(!0),children:e.jsx(Rt,{"data-testid":`edit-icon-${n}`,size:20})})]})})},Xs=d(g)`
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
`,U=d(g)`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  cursor: pointer;
  background: transparent;
  align-items: center;
  justify-content: center;
  &.centered {
    margin: 0 auto;
  }

  & + & {
    margin-left: 4px;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`,Ks=d(g)`
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
`,Js=d(g)`
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
`,ht=d(g)`
  display: flex;
  justify-content: center;
  align-items: center;
`,eo=()=>{const[t,s]=h.useState(!0),[n,r]=h.useState(""),[a,l]=ae(p=>[p.sources,p.setSources]),[i]=Ye(p=>[p.isAdmin]),[o,c]=h.useState("");h.useEffect(()=>{(async()=>{s(!0);try{const C=await Ze();l(C.data)}catch(C){console.warn(C)}finally{s(!1)}})()},[l]);const u=p=>{r(n===p||!p?"":p)},m=h.useMemo(()=>a==null?void 0:a.filter(p=>(!n||p.source_type===n)&&(p.source.toLowerCase().startsWith(o.toLowerCase())||p.source.toLowerCase().includes(o.toLowerCase())||`@${p.source.toLowerCase()}`.startsWith(o.toLowerCase())||`@${p.source.toLowerCase()}`.includes(o.toLowerCase()))),[o,n,a]);return e.jsxs(to,{align:"stretch",direction:"column",justify:"flex-end",children:[e.jsx(ue,{align:"center",direction:"row",justify:"space-between",children:e.jsx(_,{className:"title",children:"Sources for this Graph"})}),e.jsx(oo,{children:e.jsx(pt,{activeIcon:e.jsx(te,{}),defaultIcon:e.jsx(nt,{}),loading:t,loadingIcon:e.jsx(M,{color:x.lightGray,size:24}),onSearch:c,placeholder:"Find Source"})}),e.jsxs(g,{className:"filters",direction:"row",pb:16,px:36,children:[e.jsx(ie,{className:re({selected:!n}),onClick:()=>u(""),size:"small",children:"All"}),Object.keys(D).map(p=>e.jsx(ie,{className:re({selected:p===n}),onClick:()=>u(p),size:"small",children:D[p]},p))]}),e.jsx(so,{align:"center",justify:t?"center":"flex-start",children:t?e.jsx(M,{color:x.white}):e.jsx(Ys,{canEdit:i,data:m})})]})},to=d(g)`
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
`,so=d(g)`
  min-height: 0;
  overflow: auto;
  flex: 1;
  width: 100%;
`,oo=d(g)`
  margin: 0 0 16px 36px;
`,no=({selectedType:t,setSelectedType:s})=>{const[n,r]=h.useState([]);h.useEffect(()=>{(async()=>{try{const{data:o}=await jt();r(o.edge_types)}catch(o){console.warn(o)}})()},[r]);const a=i=>({label:i,value:i}),l=i=>{s((i==null?void 0:i.value)||"")};return e.jsx($e,{onSelect:l,options:n.map(a),selectedValue:t?a(t):null})},ro=({onSelect:t,selectedValue:s,topicId:n})=>{const[r,a]=h.useState([]),[l,i]=h.useState(!1),o=h.useMemo(()=>{const C=async b=>{const j={is_muted:"False",sort_by:Te,search:b,skip:"0",limit:"1000"};i(!0);try{const y=(await qe(j.search)).data.filter(S=>(S==null?void 0:S.ref_id)!==n);a(y)}catch{a([])}finally{i(!1)}};return ye.debounce(C,300)},[n]),c=C=>{const b=C.trim();if(!b){a([]);return}b.length>2&&o(C)},u=C=>{const b=C?r.find(j=>j.ref_id===C.value):null;t(b||null)},m=C=>({label:C.search_value,value:C.ref_id,type:C.node_type}),p=C=>C.map(m);return s?e.jsxs(g,{align:"center",basis:"100%",direction:"row",grow:1,shrink:1,children:[e.jsx("span",{children:s.search_value}),e.jsx(Xe,{onClick:()=>t(null),size:"medium",children:e.jsx(te,{})})]}):e.jsx($e,{handleInputChange:c,isLoading:l,onSelect:u,options:p(r)||rt,selectedValue:s?m(s):null})},io=({from:t,onSelect:s,selectedType:n,setSelectedType:r,isSwapped:a,setIsSwapped:l,selectedToNode:i})=>e.jsxs(g,{mb:20,children:[e.jsx(g,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(g,{align:"center",direction:"row",children:e.jsx(ao,{children:"Add edge"})})}),e.jsxs(po,{swap:a,children:[e.jsx(g,{children:e.jsx(ho,{disabled:!0,label:a?"To":"From",swap:a,value:t==null?void 0:t.name})}),e.jsxs(g,{my:16,children:[e.jsx(co,{children:"Type"}),e.jsx(no,{selectedType:n,setSelectedType:r})]}),e.jsx(g,{children:e.jsxs(xo,{children:[e.jsx(uo,{children:a?"From":"To"}),e.jsx(ro,{onSelect:s,selectedValue:i,topicId:t==null?void 0:t.ref_id})]})}),e.jsxs(lo,{children:[e.jsx(go,{children:e.jsx(Ke,{})}),e.jsx(fo,{onClick:l,children:e.jsx(Je,{})}),e.jsx(mo,{children:e.jsx(et,{})})]})]})]}),ao=d(_)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,lo=d.div`
  position: absolute;
  top: 26px;
  bottom: 26px;
  left: 4px;
  width: 35px;
  border-left: 1.5px solid #6b7a8d4d;
  border-top: 1.5px solid #6b7a8d4d;
  border-bottom: 1.5px solid #6b7a8d4d;
  border-radius: 12px 0 0 12px;
`,co=d.label`
  color: #bac1c6;
  font-size: 13px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0.01em;
  text-align: left;
  margin-bottom: 6px;
`,po=d.div`
  position: relative;
  color: white;
  font-family: 'Barlow';
  display: flex;
  flex-direction: ${t=>t.swap?"column-reverse":"column"};
  margin-bottom: 10px;
  padding-left: 38px;
`,ho=d(it)`
  position: relative;
  width: 100%;
  padding: 16px;
  gap: 10px;
  border-radius: 6px;
  border: 1px solid #6b7a8d4d;
  opacity: 0px;
  display: flex;
`,xo=d.div`
  position: relative;
  width: 100%;
  padding: 15px;
  gap: 10px;
  border-radius: 6px;
  border: 1.4px solid #6b7a8d4d;
  opacity: 0px;
  display: flex;
  align-items: center;
`,uo=d.label`
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
`,go=d.div`
  position: absolute;
  top: 0;
  right: 0;
  transform: translateY(-50%) translateX(50%);
  color: #23252f;
`,fo=d.div`
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
`,mo=d.div`
  position: absolute;
  bottom: 0;
  right: 0;
  transform: translateY(10px) translateX(3px);
  color: #6b7a8d;
  line-height: 1;
`,bo=({topic:t,onClose:s})=>{const{close:n}=E("addEdge"),[r]=I(y=>[y.data]),a=we({mode:"onChange"}),[l,i]=h.useState(!1),[o,c]=h.useState(!1),[u,m]=h.useState(""),[p,C]=h.useState(null),b=()=>{s(),n()},j=async()=>{if(!(!p||!r)){c(!0);try{await yt({from:t.ref_id,to:p==null?void 0:p.ref_id,relationship:u});const{ref_id:y}=t,{ref_id:S}=p;if(r){const $={...r};$[y]={...$[y],edgeList:[...$[y].edgeList,u]},$[S]&&($[S]={...$[S],edgeList:[...$[S].edgeList,u]}),I.setState({data:$})}b()}catch(y){console.warn(y)}finally{c(!1)}}},w=o||!p||!u;return e.jsx(ce,{id:"addEdge",kind:"small",onClose:b,preventOutsideClose:!0,children:e.jsxs(ve,{...a,children:[e.jsx(io,{from:t,isSwapped:l,onSelect:C,selectedToNode:p,selectedType:u,setIsSwapped:()=>i(!l),setSelectedType:m}),e.jsxs(Co,{color:"secondary",disabled:w,onClick:j,size:"large",variant:"contained",children:["Confirm",o&&e.jsx(jo,{children:e.jsx(M,{color:x.lightGray,size:12})})]})]})})},Co=d(W)`
  width: 293px !important;
  margin: 0 0 10px auto !important;
`,jo=d.span`
  margin-top: 2px;
`,yo=()=>e.jsxs(g,{children:[e.jsx(g,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(g,{align:"center",direction:"row",children:e.jsx(wo,{children:"Edit topic"})})}),e.jsx(g,{mb:12,children:e.jsx(Ft,{id:"cy-topic",maxLength:50,name:"name",placeholder:"Add your topic",rules:{...wt}})})]}),wo=d(_)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,vo=({topic:t,onClose:s})=>{const{close:n}=E("editTopic"),[r]=I(y=>[y.data]),a=we({mode:"onChange"}),{watch:l,setValue:i,reset:o,getValues:c}=a,[u,m]=h.useState(!1);h.useEffect(()=>(t&&i("name",t==null?void 0:t.name),()=>{o()}),[t,i,o]);const p=l("name"),C=p==null?void 0:p.trim(),b=()=>{s(),n()},j=async()=>{m(!0);try{if(await le((t==null?void 0:t.ref_id)||"",{node_data:{name:C}}),r){const y={...r};y[t==null?void 0:t.ref_id].name=C,I.setState({data:y})}b()}catch(y){console.warn(y)}finally{m(!1)}},w=c().name&&(t==null?void 0:t.name)!==c().name;return e.jsx(ce,{id:"editTopic",kind:"regular",onClose:b,preventOutsideClose:!0,children:e.jsxs(ve,{...a,children:[e.jsx(yo,{}),e.jsxs(W,{color:"secondary",disabled:u||!C||!w,onClick:j,size:"large",variant:"contained",children:["Save Changes",u&&e.jsx(To,{children:e.jsx(M,{color:x.lightGray,size:12})})]})]})})},To=d.span`
  margin-top: 2px;
`,So=({topicId:t,onSelect:s,selectedValue:n,dataId:r})=>{const[a,l]=h.useState([]),[i,o]=h.useState(!1),c=h.useMemo(()=>{const b=async j=>{const w={is_muted:"False",sort_by:Te,search:j,skip:"0",limit:"1000"};o(!0);try{const S=(await qe(w.search)).data.filter($=>($==null?void 0:$.ref_id)!==t);l(S)}catch{l([])}finally{o(!1)}};return ye.debounce(b,300)},[t]),u=b=>{const j=b.trim();if(!j){l([]);return}j.length>2&&c(b)},m=b=>{const j=b?a.find(w=>w.ref_id===b.value):null;s(j||null)},p=b=>({label:b.search_value,value:b.ref_id,type:b.node_type}),C=b=>b.map(p);return n?e.jsxs(g,{align:"center",basis:"100%",direction:"row",grow:1,shrink:1,children:[e.jsx("span",{children:n.search_value}),e.jsx(Xe,{onClick:()=>s(null),size:"medium",children:e.jsx(te,{})})]}):e.jsx($e,{dataId:r,handleInputChange:u,isLoading:i,onSelect:m,options:C(a)||rt,selectedValue:n?p(n):null})},$o=({from:t,onSelect:s,selectedToNode:n,isSwapped:r,setIsSwapped:a})=>{var o;const l=t==null?void 0:t.map(c=>c.name).join(", "),i=t&&t.length===1?t[0].name:`${l==null?void 0:l.substring(0,25)} ...`;return e.jsxs(g,{mb:20,children:[e.jsx(g,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(g,{align:"center",direction:"row",children:e.jsx(ko,{children:"Merge topic"})})}),e.jsxs(Mo,{swap:r,children:[e.jsx(_o,{children:e.jsx(No,{disabled:!0,label:r?"To":"From",swap:r,value:i})}),e.jsxs(g,{my:16,children:[e.jsx(zo,{children:"Type"}),e.jsx(_,{children:"IS ALIAS"})]}),e.jsx(g,{children:e.jsxs(Bo,{children:[e.jsx(Io,{children:r?"From":"To"}),e.jsx(So,{dataId:"to-node",onSelect:s,selectedValue:n,topicId:(o=t[t.length-1])==null?void 0:o.ref_id})]})}),e.jsxs(Lo,{children:[e.jsx(Ro,{children:e.jsx(Ke,{})}),e.jsx(Eo,{"data-testid":"swap-icon",disabled:(t==null?void 0:t.length)!==1,onClick:(t==null?void 0:t.length)===1?a:void 0,children:e.jsx(Je,{})}),e.jsx(Ao,{children:e.jsx(et,{})})]})]})]})},ko=d(_)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,_o=d(g)`
  flex: 1 1 100%;
`,Lo=d.div`
  position: absolute;
  top: 26px;
  bottom: 26px;
  left: 4px;
  width: 35px;
  border-left: 1.5px solid #6b7a8d4d;
  border-top: 1.5px solid #6b7a8d4d;
  border-bottom: 1.5px solid #6b7a8d4d;
  border-radius: 12px 0 0 12px;
`,Mo=d.div`
  position: relative;
  color: white;
  font-family: 'Barlow';
  display: flex;
  flex-direction: ${t=>t.swap?"column-reverse":"column"};
  margin-bottom: 10px;
  padding-left: 38px;
`,No=d(it)`
  position: relative;
  width: 100%;
  padding: 16px;
  gap: 10px;
  border-radius: 6px;
  border: 1px solid #6b7a8d4d;
  opacity: 0px;
  display: flex;
`,Bo=d.div`
  position: relative;
  width: 100%;
  padding: 15px;
  gap: 10px;
  border-radius: 6px;
  border: 1.4px solid #6b7a8d4d;
  opacity: 0px;
  display: flex;
  align-items: center;
`,zo=d.label`
  color: #bac1c6;
  font-size: 13px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0.01em;
  text-align: left;
  margin-bottom: 6px;
`,Io=d.label`
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
`,Ro=d.div`
  position: absolute;
  top: 0;
  right: 0;
  transform: translateY(-50%) translateX(50%);
  color: #23252f;
`,Eo=d.div`
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
`,Ao=d.div`
  position: absolute;
  bottom: 0;
  right: 0;
  transform: translateY(10px) translateX(3px);
  color: #6b7a8d;
  line-height: 1;
`,Oo=({onClose:t,multiTopics:s})=>{const{close:n}=E("mergeTopic"),r=we({mode:"onChange"}),{setValue:a,reset:l}=r,[i,o]=h.useState(!1),[c,u]=h.useState(!1),[m,p]=h.useState(null);h.useEffect(()=>{if(s&&s.length>0){const j=s.map(w=>w.name).join(", ");a("name",j)}return()=>{l()}},[s,a,l]);const C=()=>{t(),n()},b=async()=>{o(!0);const j=s==null?void 0:s.map(w=>w.ref_id).filter(w=>!!w);try{j.length&&m&&(await vt({from:j,to:m==null?void 0:m.ref_id}),I.setState(w=>({ids:w.ids.filter(y=>!j.includes(y)),total:w.total-j.length})),C())}catch(w){console.warn(w)}finally{o(!1)}};return e.jsx(ce,{id:"mergeTopic",kind:"small",onClose:C,preventOutsideClose:!0,children:e.jsxs(ve,{...r,children:[e.jsx($o,{from:s,isSwapped:c,onSelect:p,selectedToNode:m,setIsSwapped:()=>u(!c)}),e.jsxs(Fo,{color:"secondary","data-testid":"merge-topics-button",disabled:i||!m,onClick:b,size:"large",variant:"contained",children:["Merge topics",i&&e.jsx(Ho,{children:e.jsx(M,{color:x.lightGray,size:12})})]})]})})},Fo=d(W)`
  width: 293px !important;
  margin: 0 0 10px auto !important;
`,Ho=d.span`
  margin-top: 2px;
`,Wo=t=>e.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 12 12",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M10.1765 0.310088L4.72809 5.70971C4.63832 5.79868 4.56637 5.90372 4.51607 6.01926L3.74627 7.78746C3.63822 8.03565 3.89191 8.28707 4.14234 8.17999L5.92651 7.41707C6.04309 7.36722 6.14907 7.29592 6.23885 7.20695L11.6872 1.80733C12.1044 1.39388 12.1044 0.723539 11.6872 0.310088C11.27 -0.103363 10.5936 -0.103363 10.1765 0.310088ZM9.80835 7.14088C9.80835 6.81895 10.072 6.55777 10.3969 6.55777C10.723 6.55777 10.9854 6.82017 10.9854 7.14088L10.9191 10.2508C10.9191 11.2153 10.1489 12.0001 9.17571 12.0001H1.74343C0.79227 12.0001 0 11.2153 0 10.2289V2.84292C0 1.89999 0.79227 1.11523 1.74343 1.11523L5.29651 1.11548C5.62264 1.11548 5.88501 1.37666 5.88501 1.69858C5.88501 2.0205 5.62141 2.28168 5.29651 2.28168H1.7655C1.44134 2.28168 1.177 2.54335 1.177 2.86479V10.2508C1.177 10.5722 1.44134 10.8339 1.7655 10.8339H9.21985C9.54402 10.8339 9.80835 10.5722 9.80835 10.2508V7.14088Z",fill:"currentColor"})}),me=t=>e.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 12 8",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M0.333496 7.66704V6.66706H3.91681V7.66704H0.333496ZM0.333496 4.50037V3.50041H7.7886V4.50037H0.333496ZM0.333496 1.33372V0.33374H11.6668V1.33372H0.333496Z",fill:"currentColor"})}),Ue=t=>e.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 16 15",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M14.0716 15L10.8994 11.7764C10.437 11.9597 9.96181 12.0919 9.47381 12.1732C8.98581 12.2545 8.49002 12.2952 7.98643 12.2952C6.33597 12.2952 4.82448 11.8457 3.45194 10.9466C2.07941 10.0476 0.991584 8.86271 0.188459 7.39193C0.123124 7.27666 0.0753836 7.15933 0.045238 7.03994C0.0150793 6.92055 0 6.7991 0 6.67559C0 6.55208 0.0163338 6.42935 0.0490013 6.30739C0.0816688 6.18543 0.13067 6.06938 0.196005 5.95925C0.508607 5.42714 0.84081 4.91226 1.19261 4.41462C1.54443 3.91699 1.95353 3.47673 2.41992 3.09386L0.24877 0.846015L1.07501 0L14.8978 14.154L14.0716 15ZM7.98643 9.94854C8.16032 9.94854 8.32642 9.93799 8.48473 9.91689C8.64305 9.89579 8.7976 9.84973 8.94838 9.77871L4.95591 5.69059C4.89158 5.84498 4.84786 6.00324 4.82475 6.16535C4.80162 6.32745 4.79005 6.49753 4.79005 6.67559C4.79005 7.58645 5.10039 8.35966 5.72108 8.99521C6.34176 9.63076 7.09688 9.94854 7.98643 9.94854ZM13.4384 10.3561L10.9792 7.85816C11.0456 7.66673 11.0961 7.47375 11.1308 7.27922C11.1655 7.0847 11.1828 6.88349 11.1828 6.67559C11.1828 5.76473 10.8725 4.99152 10.2518 4.35597C9.63109 3.72042 8.87598 3.40264 7.98643 3.40264C7.78339 3.40264 7.58689 3.42168 7.39692 3.45976C7.20694 3.49784 7.02099 3.56011 6.83907 3.64657L4.87751 1.64575C5.37606 1.44402 5.88441 1.29529 6.40257 1.19957C6.92071 1.10385 7.44867 1.05599 7.98643 1.05599C9.64191 1.05599 11.1604 1.50756 12.542 2.41072C13.9236 3.31387 15.0134 4.50598 15.8115 5.98705C15.8718 6.08894 15.9183 6.19829 15.951 6.31511C15.9837 6.43192 16 6.55208 16 6.67559C16 6.7991 15.9857 6.91926 15.957 7.03607C15.9284 7.15289 15.8839 7.26225 15.8236 7.36414C15.52 7.94669 15.1738 8.49038 14.7848 8.99521C14.3958 9.50005 13.947 9.95369 13.4384 10.3561ZM10.0912 6.95657L7.73162 4.54816C8.06131 4.48126 8.38246 4.50545 8.69506 4.62072C9.00767 4.736 9.27754 4.9156 9.5047 5.15952C9.7369 5.40036 9.90451 5.67723 10.0075 5.99012C10.1106 6.30301 10.1385 6.62516 10.0912 6.95657Z",fill:"currentColor"})}),De=t=>e.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 18 13",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M9.00204 9.98073C9.94628 9.98073 10.7483 9.65024 11.408 8.98927C12.0677 8.32829 12.3976 7.52567 12.3976 6.58142C12.3976 5.63718 12.0671 4.8352 11.4061 4.17548C10.7451 3.51576 9.9425 3.1859 8.99825 3.1859C8.05401 3.1859 7.25203 3.51638 6.59231 4.17735C5.93259 4.83834 5.60273 5.64096 5.60273 6.58521C5.60273 7.52944 5.93321 8.33142 6.59419 8.99115C7.25517 9.65087 8.05779 9.98073 9.00204 9.98073ZM9.00014 8.83331C8.37514 8.83331 7.84389 8.61456 7.40639 8.17706C6.96889 7.73956 6.75014 7.20831 6.75014 6.58331C6.75014 5.95831 6.96889 5.42706 7.40639 4.98956C7.84389 4.55206 8.37514 4.33331 9.00014 4.33331C9.62514 4.33331 10.1564 4.55206 10.5939 4.98956C11.0314 5.42706 11.2501 5.95831 11.2501 6.58331C11.2501 7.20831 11.0314 7.73956 10.5939 8.17706C10.1564 8.61456 9.62514 8.83331 9.00014 8.83331ZM9.00129 12.4166C7.08494 12.4166 5.33884 11.888 3.76298 10.8309C2.18713 9.77374 1.02688 8.35788 0.282227 6.58331C1.02688 4.80874 2.18675 3.39288 3.76185 2.33573C5.33694 1.27858 7.08265 0.75 8.999 0.75C10.9153 0.75 12.6614 1.27858 14.2373 2.33573C15.8132 3.39288 16.9734 4.80874 17.7181 6.58331C16.9734 8.35788 15.8135 9.77374 14.2384 10.8309C12.6634 11.888 10.9176 12.4166 9.00129 12.4166Z",fill:"currentColor"})}),Po=t=>e.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:e.jsxs("g",{opacity:"0.4",children:[e.jsx("mask",{id:"mask0_5162_13105",maskUnits:"userSpaceOnUse",x:"0",y:"0",width:"24",height:"24",children:e.jsx("rect",{width:"1em",height:"1em",fill:"currentColor"})}),e.jsx("g",{mask:"url(#mask0_5162_13105)",children:e.jsx("path",{d:"M19.7615 21.8691L15.7154 17.8537C15.1256 18.0819 14.5195 18.2467 13.8971 18.348C13.2747 18.4493 12.6423 18.4999 12 18.4999C9.89486 18.4999 7.96698 17.94 6.21635 16.8201C4.46572 15.7002 3.07822 14.2243 2.05385 12.3922C1.97052 12.2486 1.90963 12.1025 1.87118 11.9538C1.83271 11.8051 1.81348 11.6538 1.81348 11.4999C1.81348 11.3461 1.83431 11.1932 1.87598 11.0413C1.91764 10.8894 1.98014 10.7448 2.06348 10.6076C2.46219 9.9448 2.88591 9.30345 3.33463 8.68357C3.78336 8.0637 4.30516 7.51531 4.90003 7.0384L2.13078 4.2384L3.18463 3.18457L20.8153 20.8153L19.7615 21.8691ZM12 15.5768C12.2218 15.5768 12.4336 15.5637 12.6356 15.5374C12.8375 15.5111 13.0346 15.4537 13.2269 15.3653L8.13463 10.273C8.05258 10.4653 7.99681 10.6624 7.96733 10.8643C7.93783 11.0663 7.92308 11.2781 7.92308 11.4999C7.92308 12.6345 8.31891 13.5977 9.11058 14.3893C9.90224 15.181 10.8654 15.5768 12 15.5768ZM18.9538 16.0845L15.8173 12.973C15.9019 12.7345 15.9663 12.4941 16.0105 12.2518C16.0548 12.0095 16.0769 11.7589 16.0769 11.4999C16.0769 10.3653 15.681 9.40219 14.8894 8.61052C14.0977 7.81885 13.1346 7.42302 12 7.42302C11.741 7.42302 11.4904 7.44674 11.2481 7.49417C11.0058 7.5416 10.7686 7.61917 10.5366 7.72687L8.03463 5.23457C8.67051 4.98329 9.3189 4.79803 9.9798 4.6788C10.6407 4.55956 11.3141 4.49995 12 4.49995C14.1115 4.49995 16.0484 5.06245 17.8105 6.18745C19.5727 7.31245 20.9628 8.79738 21.9807 10.6422C22.0576 10.7692 22.1169 10.9054 22.1586 11.0509C22.2003 11.1964 22.2211 11.3461 22.2211 11.4999C22.2211 11.6538 22.2028 11.8034 22.1663 11.9489C22.1297 12.0945 22.073 12.2307 21.9961 12.3576C21.6089 13.0832 21.1673 13.7605 20.6711 14.3893C20.175 15.0182 19.6025 15.5832 18.9538 16.0845ZM14.6846 11.8499L11.675 8.84992C12.0955 8.76659 12.5051 8.79671 12.9038 8.9403C13.3025 9.0839 13.6468 9.30761 13.9365 9.61145C14.2327 9.91145 14.4465 10.2563 14.5779 10.6461C14.7093 11.0358 14.7449 11.4371 14.6846 11.8499Z",fill:"currentColor"})})]})}),Uo=t=>e.jsxs("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("mask",{id:"mask0_5162_13106",maskUnits:"userSpaceOnUse",x:"0",y:"0",width:"24",height:"24",children:e.jsx("rect",{width:"1em",height:"1em",fill:"currentColor"})}),e.jsx("g",{mask:"url(#mask0_5162_13106)",children:e.jsx("path",{d:"M12.0023 15.5769C13.1354 15.5769 14.0978 15.1803 14.8895 14.3871C15.6811 13.5939 16.077 12.6308 16.077 11.4977C16.077 10.3646 15.6804 9.40224 14.8872 8.61058C14.094 7.81891 13.1309 7.42308 11.9978 7.42308C10.8647 7.42308 9.90234 7.81966 9.11067 8.61282C8.31901 9.40601 7.92317 10.3692 7.92317 11.5023C7.92317 12.6353 8.31976 13.5977 9.11293 14.3894C9.90611 15.181 10.8692 15.5769 12.0023 15.5769ZM12.0001 14.2C11.2501 14.2 10.6126 13.9375 10.0876 13.4125C9.56258 12.8875 9.30007 12.25 9.30007 11.5C9.30007 10.75 9.56258 10.1125 10.0876 9.58748C10.6126 9.06248 11.2501 8.79998 12.0001 8.79998C12.7501 8.79998 13.3876 9.06248 13.9126 9.58748C14.4376 10.1125 14.7001 10.75 14.7001 11.5C14.7001 12.25 14.4376 12.8875 13.9126 13.4125C13.3876 13.9375 12.7501 14.2 12.0001 14.2ZM12.0014 18.5C9.70183 18.5 7.60651 17.8657 5.71547 16.5971C3.82446 15.3285 2.43216 13.6295 1.53857 11.5C2.43216 9.37049 3.82401 7.67146 5.71412 6.40288C7.60422 5.13429 9.69908 4.5 11.9987 4.5C14.2983 4.5 16.3936 5.13429 18.2847 6.40288C20.1757 7.67146 21.568 9.37049 22.4616 11.5C21.568 13.6295 20.1761 15.3285 18.286 16.5971C16.3959 17.8657 14.3011 18.5 12.0014 18.5Z",fill:"currentColor"})})]}),Do=t=>e.jsxs("svg",{width:"1em",height:"1em",viewBox:"0 0 22 22",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("mask",{id:"mask0_5577_416",maskUnits:"userSpaceOnUse",x:"0",y:"0",width:"22",height:"22",children:e.jsx("rect",{width:"1em",height:"1em",fill:"currentColor"})}),e.jsx("g",{mask:"url(#mask0_5577_416)",children:e.jsx("path",{d:"M11 17.6634C10.6219 17.6634 10.2982 17.5287 10.0289 17.2595C9.75964 16.9902 9.625 16.6665 9.625 16.2884C9.625 15.9103 9.75964 15.5866 10.0289 15.3173C10.2982 15.0481 10.6219 14.9134 11 14.9134C11.3781 14.9134 11.7018 15.0481 11.971 15.3173C12.2403 15.5866 12.375 15.9103 12.375 16.2884C12.375 16.6665 12.2403 16.9902 11.971 17.2595C11.7018 17.5287 11.3781 17.6634 11 17.6634ZM11 12.3749C10.6219 12.3749 10.2982 12.2403 10.0289 11.971C9.75964 11.7018 9.625 11.3781 9.625 11C9.625 10.6218 9.75964 10.2982 10.0289 10.0289C10.2982 9.75962 10.6219 9.62498 11 9.62498C11.3781 9.62498 11.7018 9.75962 11.971 10.0289C12.2403 10.2982 12.375 10.6218 12.375 11C12.375 11.3781 12.2403 11.7018 11.971 11.971C11.7018 12.2403 11.3781 12.3749 11 12.3749ZM11 7.08648C10.6219 7.08648 10.2982 6.95184 10.0289 6.68257C9.75964 6.41332 9.625 6.08963 9.625 5.7115C9.625 5.33339 9.75964 5.0097 10.0289 4.74043C10.2982 4.47118 10.6219 4.33655 11 4.33655C11.3781 4.33655 11.7018 4.47118 11.971 4.74043C12.2403 5.0097 12.375 5.33339 12.375 5.7115C12.375 6.08963 12.2403 6.41332 11.971 6.68257C11.7018 6.95184 11.3781 7.08648 11 7.08648Z",fill:"currentColor"})})]}),Vo=({topic:t,onClick:s,onSearch:n,checkedStates:r,setCheckedStates:a,isMuteDisabled:l})=>{const[i,o]=I(k=>[k.ids,k.total]),[c,u]=h.useState(!1),[m,p]=h.useState(!1),C=Ce(t.date_added_to_graph),b=async(k,T)=>{u(!0);try{await le(k,{node_data:{is_muted:T}}),I.setState({ids:i.filter(L=>L!==k),total:o-1})}catch(L){console.warn(L)}},j=k=>{a(T=>({...T,[k]:!T[k]}))},w=(k,T)=>{var L;(L=window.getSelection())!=null&&L.toString()?k.preventDefault():n(T.name)},y=t.edgeList.slice(0,1),S=t.edgeList.length-y.length,[$,A]=ne.useState(null),O=k=>{A(k.currentTarget),p(!0)},B=()=>{p(!1)},z=!!$&&m,F=r[t.ref_id]?"visible":"";return e.jsxs(he,{className:r[t.ref_id]?"checked":"",children:[e.jsx(f,{children:e.jsx(Yo,{className:`checkbox-section ${F}`,"data-testid":"topic-check-box",onClick:()=>j(t.ref_id),children:e.jsx(qo,{checked:r[t.ref_id],children:e.jsx(Qo,{children:r[t.ref_id]&&e.jsx(at,{})})})})}),e.jsx(f,{onClick:k=>w(k,t),children:e.jsx(Zo,{children:t.name})}),e.jsx(f,{children:t.node_type}),e.jsx(f,{children:e.jsx(Xo,{children:t.edgeCount})}),e.jsxs(f,{children:[e.jsx(Se,{anchorEl:$,anchorOrigin:{vertical:"top",horizontal:"center"},disableRestoreFocus:!0,id:"mouse-over-popover",onClose:B,onMouseEnter:()=>p(!0),onMouseLeave:B,open:z,sx:{pointerEvents:"auto","& .MuiPaper-root":{backgroundColor:"rgba(0, 0, 0, 0.9)",borderRadius:"4px",width:"160px",maxHeight:"200px",overflowY:"scroll"}},transformOrigin:{vertical:"bottom",horizontal:"center"},children:e.jsx(Ne,{sx:{p:1.5,fontSize:"13px",fontWeight:400,lineHeight:"1.8",wordWrap:"break-word"},children:t.edgeList.join(", ")})}),y.join(", "),S>0&&e.jsx(Ne,{"aria-haspopup":"true","aria-owns":z?"mouse-over-popover":void 0,component:"span",onMouseEnter:O,onMouseLeave:B,sx:{cursor:"pointer"},children:",..."})]}),e.jsx(f,{children:e.jsx("span",{children:C})}),e.jsx(f,{className:"cell-center",children:e.jsx(g,{direction:"row",justify:"space-between",children:e.jsx("div",{className:"approve-wrapper",children:c?e.jsx(Go,{children:e.jsx(M,{color:x.white,size:16})}):e.jsxs(g,{direction:"row",children:[t.is_muted?e.jsx(Y,{className:"centered",disabled:l,onClick:()=>b(t.ref_id,!1),children:e.jsx(Uo,{})}):e.jsx(Y,{className:"centered",disabled:l,onClick:()=>b(t.ref_id,!0),children:e.jsx(Po,{})}),e.jsx(Y,{disabled:l,onClick:k=>s(k,t.ref_id),children:e.jsx(Do,{"data-testid":"ThreeDotsIcons"})})]})})})})]},t.name)},Go=d.span`
  margin-left: 12px;
`,Zo=d.span`
  cursor: pointer;
  :hover {
    text-decoration: underline;
  }
`,Yo=d.td`
  visibility: hidden;
  cursor: pointer;
  display: flex;
  align-items: center;

  &.visible {
    visibility: visible;
  }
`,qo=d.div`
  width: 14px;
  height: 14px;
  border-radius: 4px;
  border: ${({checked:t})=>t?"#618AFF":"2px solid #CCCCCC"};
  background-color: ${({checked:t})=>t?"#618AFF":"transparent"};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 12px;
`,Qo=d.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 2px;
  background-color: transparent;
`,Xo=d.span`
  display: flex;
  align-items: center;
  justify-content: center;
`,Ko=h.memo(Vo),Jo=({setShowMuteUnmute:t,showMuted:s,onTopicEdit:n,onChangeFilter:r,checkedStates:a,setCheckedStates:l})=>{const{close:i}=E("sourcesTable"),[o,c]=h.useState(!1),[u,m]=ne.useState(null),[p,C]=ne.useState(""),b=Object.values(a).filter(v=>v).length,[j,w]=Tt(v=>[v.setSearchFormValue,v.setCurrentSearch]),[y,S,$]=I(v=>[v.data,v.ids,v.total]),A=h.useCallback((v,R)=>{m(v.currentTarget),C(R)},[]),O=()=>{m(null)},B=v=>{j(v),w(v),i()},z=v=>{n(p,v),O()},F=v=>{r(v)},k=!!u,T=k?"simple-popover":void 0,L=async()=>{c(!0);try{const v=Object.keys(a).map(async G=>{if(a[G])try{return await le(G,{node_data:{is_muted:!s}}),G}catch(xt){return console.error("Error updating node data:",xt),null}return null}),R=await Promise.all(v);I.setState({ids:S.filter(G=>!R.includes(G)),total:$-R.length}),l({}),c(!1)}catch(v){console.error("Error:",v),c(!1)}};return y?e.jsx(e.Fragment,{children:Object.keys(y).length?e.jsx(ln,{align:"center",justify:o?"center":"flex-start",children:o?e.jsx(M,{color:x.white}):e.jsxs(e.Fragment,{children:[e.jsxs(de,{component:"table",children:[b>0?e.jsx(Ts,{children:e.jsxs(V,{component:"tr",children:[e.jsx(f,{children:e.jsx(Y,{onClick:()=>l({}),children:e.jsx(te,{})})}),e.jsx(f,{colSpan:12,children:e.jsxs(an,{children:[e.jsxs(rn,{children:[e.jsx(nn,{children:b}),"selected"]}),e.jsx(f,{className:"empty"}),e.jsx(Ve,{onClick:L,role:"button",children:s?e.jsxs(e.Fragment,{children:[e.jsx(De,{})," Unmute ALL"]}):e.jsxs(e.Fragment,{children:[e.jsx(Ue,{})," Mute ALL"]})}),e.jsx(f,{className:"empty"}),e.jsxs(Ve,{onClick:()=>z("mergeTopic"),children:[e.jsx(Be,{})," Merge"]})]})}),e.jsx(f,{className:"empty"})]})}):e.jsx(xe,{children:e.jsxs(V,{component:"tr",children:[e.jsx(f,{className:"empty"}),e.jsx(f,{children:e.jsxs(be,{onClick:()=>F(Te),children:["Name ",e.jsx(me,{})]})}),e.jsx(f,{children:"Type"}),e.jsx(f,{children:e.jsxs(be,{onClick:()=>F(kt),children:["Count ",e.jsx(me,{})]})}),e.jsx(f,{children:"Edge list"}),e.jsx(f,{children:e.jsxs(be,{onClick:()=>F(_t),children:["Date ",e.jsx(me,{})]})}),e.jsx(f,{children:e.jsx(g,{px:8,children:e.jsxs(en,{onClick:t,children:[e.jsx(tn,{checked:s,children:e.jsx(sn,{children:s&&e.jsx(at,{})})}),"Muted"]})})})]})}),y&&e.jsx("tbody",{children:S==null?void 0:S.map(v=>e.jsx(Ko,{checkedStates:a,isMuteDisabled:Object.values(a).filter(R=>R).length>1,onClick:A,onSearch:B,setCheckedStates:l,topic:y[v]},v))})]}),p?e.jsxs(on,{anchorEl:u,anchorOrigin:{vertical:"bottom",horizontal:"right"},id:T,onClose:O,open:k,transformOrigin:{vertical:"top",horizontal:"right"},children:[s?e.jsxs(Z,{"data-testid":"unmute",onClick:()=>z("unMute"),children:[" ",e.jsx(De,{"data-testid":""})," Unmute"]}):e.jsxs(Z,{"data-testid":"mute",onClick:()=>z("mute"),children:[" ",e.jsx(Ue,{"data-testid":"VisibilityOff"})," Mute"]}),e.jsxs(Z,{"data-testid":"rename",onClick:()=>z("editTopic"),children:[e.jsx(Wo,{"data-testid":"EditTopicIcon"})," Rename"]}),e.jsxs(Z,{"data-testid":"merge",onClick:()=>z("mergeTopic"),children:[e.jsx(Be,{"data-testid":"MergeIcon"})," Merge"]}),e.jsxs(Z,{"data-testid":"add_edge",onClick:()=>z("addEdge"),children:[e.jsx(Wt,{"data-testid":"AddCircleIcon"})," Add edge"]})]}):null]})}):e.jsxs(g,{children:[e.jsx(_,{children:"There is not any results for selected filters"}),e.jsx(je,{})]})}):e.jsxs(g,{children:[e.jsx(_,{children:"There is not any results for selected filters"}),e.jsx(je,{})]})},en=d.td`
  cursor: pointer;
  display: flex;
  align-items: center;
`,tn=d.div`
  width: 14px;
  height: 14px;
  border-radius: 4px;
  border: ${({checked:t})=>t?"#618AFF":"2px solid #CCCCCC"};
  background-color: ${({checked:t})=>t?"#618AFF":"transparent"};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 8px;
`,sn=d.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 2px;
  background-color: transparent;
`,be=d.span`
  cursor: pointer;
  display: flex;
  gap: 4px;
  align-items: center;
`,Z=d(g).attrs({direction:"row",px:12,py:8})`
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
`,on=d(Se)`
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
`,nn=d.span`
  font-family: Barlow;
  font-size: 13px;
  font-weight: 500;
  margin-right: 4px;
  margin-top: 1px;
`,Ve=d.div`
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
`,rn=d.div`
  display: flex;
  align-items: center;
  gap: 2px;
`,an=d.span`
  display: flex;
  align-items: center;
  gap: 27px;
`,ln=d(g)`
  min-height: 0;
  overflow: auto;
  flex: 1;
  width: 100%;
  position: relative;
`,cn=()=>{const[t,s,n,r,a,l,i,o]=I(T=>[T.data,T.ids,T.total,T.setTopics,T.filters,T.setFilters,T.terminate,T.loading]),{open:c}=E("editTopic"),{open:u}=E("mergeTopic"),{open:m}=E("addEdge"),[p,C]=h.useState(null),[b,j]=h.useState([]),[w,y]=h.useState({}),S={editTopic:c,mergeTopic:u,addEdge:m},$=h.useRef([]);h.useEffect(()=>{s.length&&($.current=s)},[s]),h.useEffect(()=>{(async()=>{try{await r()}catch{console.error("err")}})()},[r,a]);const A=async()=>{l({page:a.page+1})};h.useEffect(()=>()=>{i()},[i]);const O=T=>{l({sortBy:T})},B=()=>{C(null),j([])},z=async(T,L)=>{try{await le(T,{node_data:{is_muted:L==="mute"}}),I.setState({ids:s.filter(v=>v!==T),total:n-1})}catch(v){console.warn(v)}},F=async(T,L)=>{if(t)if(L==="mergeTopic")if(Object.values(w).filter(v=>v).length>0){const v=Object.entries(w).filter(([,R])=>R).map(([R])=>t[R]);j(v),u()}else j([t[T]]),C(t[T]),u();else["mute","unMute"].includes(L)&&await z(T,L),typeof S[L]=="function"&&S[L](),C(t[T])},k=T=>{l({...a,search:T})};return e.jsxs(e.Fragment,{children:[e.jsxs(dn,{direction:"column",justify:"flex-end",children:[e.jsx(ue,{align:"flex-start",direction:"row",justify:"space-between",children:e.jsx(_,{className:"title",children:"Topics"})}),e.jsx(hn,{"data-testid":"topic-search-container",children:e.jsx(pt,{activeIcon:e.jsx(te,{}),defaultIcon:e.jsx(nt,{}),loading:o,loadingIcon:e.jsx(M,{color:x.lightGray,size:24}),onSearch:k,placeholder:"Search ..."})}),e.jsx(pn,{align:"center",justify:o&&!t?"center":"flex-start",children:o&&!t?e.jsx(M,{color:x.white}):e.jsxs(e.Fragment,{children:[e.jsx(Jo,{checkedStates:w,onChangeFilter:O,onTopicEdit:F,setCheckedStates:y,setShowMuteUnmute:()=>l({is_muted:!a.is_muted}),showMuted:a.is_muted}),n>s.length?e.jsxs(W,{className:"load-more",disabled:o,onClick:A,children:["Load more",o&&e.jsx(M,{color:x.lightGray,size:10})]}):null]})})]}),b.length>0&&e.jsx(Oo,{multiTopics:b,onClose:B}),p&&e.jsx(vo,{onClose:B,topic:p}),p&&e.jsx(bo,{onClose:B,topic:p})]})},dn=d(g)`
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
`,pn=d(g)`
  min-height: 0;
  overflow: auto;
  flex: 1;
  width: 100%;
`,hn=d(g)`
  margin: 0 0 16px 36px;
`,xn=[{label:ot,component:Ns},{label:Lt,component:eo},{label:st,component:Ps},{label:tt,component:cn}],un=t=>{const{children:s,value:n,index:r,...a}=t;return n===r?e.jsx(Cn,{"aria-labelledby":`simple-tab-${r}`,hidden:n!==r,id:`simple-tabpanel-${r}`,role:"tabpanel",...a,children:s}):null};function gn(t){return{id:`simple-tab-${t}`,"aria-controls":`simple-tabpanel-${t}`}}const fn=()=>{const[t,s]=h.useState(0),[n]=Ye(o=>[o.isAdmin]),[r]=St(o=>[o.queuedSourcesFeatureFlag]),a=$t(),l=(o,c)=>{s(c)},i=xn.filter(({label:o})=>o===tt?n||!0:o===st?n&&r:o===ot?a:!0);return e.jsxs(jn,{"data-testid":"sources-table",direction:"column",children:[e.jsx(mn,{"aria-label":"sources tabs",onChange:l,value:t,children:i.map((o,c)=>e.jsx(bn,{color:x.white,disableRipple:!0,label:o.label,...gn(c)},o.label))}),i.map((o,c)=>e.jsx(un,{index:c,value:t,children:e.jsx(o.component,{})},o.label))]})},mn=d(Pt)`
  && {
    background: rgba(0, 0, 0, 0.2);
    border-radius: 9px 9px 0 0;
    .MuiTabs-indicator {
      background: ${x.primaryBlue};
    }
  }
`,bn=d(Ut)`
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
`,jn=d(g)`
  min-height: 0;
  flex: 1;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 3px;
  }
`,Dn=()=>{const{close:t}=E("sourcesTable"),{visible:s}=E("addContent");return s?null:e.jsx(ce,{background:"BG1",id:"sourcesTable",kind:"large",noWrap:!0,onClose:t,preventOutsideClose:!0,children:e.jsx(fn,{})})};export{Dn as SourcesTableModal};
