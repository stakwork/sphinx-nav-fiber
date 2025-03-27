import{s as o,g as p,T as N,B as F,F as h,r as f,j as e,N as de,D as B,bo as Je,ao as H,R as Q,c as Z,bp as et,bq as tt,ar as st,br as nt,bs as Ee,p as X,bt as ze,an as pe,b6 as je,b7 as be,b8 as ye,bu as ot,bv as rt,am as it,bw as at,a as Be,C as V,bx as lt,bm as Ae,by as Fe,l as xe,b5 as J,n as he,bz as ct,b2 as dt,b3 as pt,bA as ee,bB as xt,b as ht,k as ut,a8 as ft}from"./index-39786dcf.js";import{y as gt,c as mt,z as le,J as jt,d as bt,f as Me,K as Oe,O as Re,Q as We,U as yt,W as wt,X as Ct,Y as we,Z as Ce,a as ve,_ as oe,$ as vt,b as St}from"./index-20a8d79c.js";import{T as Tt,a as R,b as De,M as te,c as $t}from"./TableRow-9d2a6d20.js";import{T as Se,s as W,a as Pe,S as Ge,A as ue,E as kt,D as _t,b as Ye,Q as Ue,V as Ve,c as Nt}from"./constants-0e75e773.js";import{C as I}from"./ClipLoader-82ab68ef.js";import{P as fe,I as U,w as It}from"./index-1533ac3e.js";import{I as Lt,A as ge,T as He}from"./index-c06bd4c6.js";import{u as L}from"./index-036ac13a.js";import{C as qe}from"./CheckIcon-f69eef72.js";import{T as Te}from"./Typography-ffa197e5.js";import{T as Et,a as zt}from"./Tabs-ee4a7049.js";import"./SourcesTableIcon-4e68c33e.js";import"./DeleteNodeIcon-ea5394fa.js";import"./SoundIcon-12e00ac5.js";import"./SucessFeedBackIcon-f2c43332.js";import"./Stack-be092e86.js";import"./clsx-fc1765a9.js";import"./createSvgIcon-61d466a0.js";import"./TextareaAutosize-bfc8dfd7.js";function ce(t){const n=new Date(Number(t)*1e3),i=n.getFullYear(),a=(1+n.getMonth()).toString().padStart(2,"0");return`${n.getDate().toString().padStart(2,"0")}/${a}/${i}`}const g=o(Tt)`
  && {
    color: ${p.white};
    border: none;
    padding: 6px 2px 6px 7px;
    color: ${p.GRAY3};
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
`,se=o(R)`
  && {
    height: 48px;
    padding: 0 36px;
  }
  &:nth-child(odd) {
    background-color: ${p.BG3};
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
`,ne=o(De)`
  && {
    border-bottom: 1px solid ${p.black};
    position: sticky;
    top: 0;
    z-index: 1;
    background-color: ${p.BG1};
  }

  ${g} {
    color: ${p.white};
    font-family: Barlow;
    font-size: 11px;
    font-style: normal;
    font-weight: 700;
    line-height: 18px; /* 163.636% */
    letter-spacing: 1.1px;
    text-transform: uppercase;
  }
`,K=o(F)`
  &:first-child.selected {
    background: ${p.white};
    color: ${p.BG1};
    pointer-events: none;
  }

  & + &.selected {
    background: ${p.white};
    color: ${p.BG1};
    pointer-events: none;
  }

  & + & {
    margin-left: 16px;
  }
`,me=o(h)`
  margin-bottom: 16px;
  padding: 0 36px;
  ${N} {
    margin-bottom: 0;
  }
`,Bt=o(De)`
  && {
    border-bottom: 1px solid ${p.black};
    position: sticky;
    top: 0;
    z-index: 1;
    background-color: ${p.BG1};
  }

  ${g} {
    color: ${p.white};
  }

  ${g}.empty {
    width: 0;
    padding: 0;
  }
`;function At(t){return t.charAt(0).toUpperCase()+t.slice(1).toLowerCase()}const Ft=({node:t})=>{var n,i,a,c,x,r,s,l,u;return e.jsxs(se,{children:[e.jsx(g,{className:"empty"}),e.jsx(g,{children:(n=t==null?void 0:t.properties)!=null&&n.date_added_to_graph?ce((i=t==null?void 0:t.properties)==null?void 0:i.date_added_to_graph):ce((a=t==null?void 0:t.properties)==null?void 0:a.date)}),e.jsx(g,{children:t==null?void 0:t.node_type}),e.jsx(g,{children:(t==null?void 0:t.node_type)==="Tweet"?e.jsx($e,{href:`${Se}${(c=t==null?void 0:t.properties)==null?void 0:c.tweet_id}${Se.includes("?")?"&":"?"}open=system`,target:"_blank",children:(x=t==null?void 0:t.properties)==null?void 0:x.tweet_id}):e.jsx($e,{href:`${(r=t==null?void 0:t.properties)==null?void 0:r.source_link}${((s=t==null?void 0:t.properties)==null?void 0:s.source_link).includes("?")?"&":"?"}open=system`,target:"_blank",children:(l=t==null?void 0:t.properties)==null?void 0:l.source_link})}),e.jsx(g,{children:(u=t==null?void 0:t.properties)!=null&&u.status?At(t.properties.status):"Processing"})]})},$e=o.a`
  color: ${p.white};
  text-decoration: underline;
  &:visited {
    color: ${p.white};
  }
`,Mt=f.memo(Ft),Ot=({nodes:t})=>{const{open:n}=B("addContent"),i=async()=>{n()};return!t||(t==null?void 0:t.length)===0?e.jsx(e.Fragment,{children:e.jsxs(Rt,{children:[e.jsx(Dt,{children:e.jsx(gt,{})}),e.jsx(Wt,{children:e.jsx(N,{className:"subtitle",children:"Contribute to the graph by adding your first content."})}),e.jsx(h,{justify:"center",children:e.jsx(F,{color:"secondary",onClick:i,size:"medium",startIcon:e.jsx(mt,{}),type:"submit",variant:"contained",children:"Add Content"})})]})}):e.jsxs(te,{component:"table",children:[e.jsx(ne,{children:e.jsxs(R,{component:"tr",children:[e.jsx(g,{className:"empty"}),e.jsx(g,{children:"Date"}),e.jsx(g,{children:"Type"}),e.jsx(g,{children:"Source"}),e.jsx(g,{children:"Status"})]})}),e.jsx("tbody",{children:t==null?void 0:t.map(a=>e.jsx(Mt,{node:a},a==null?void 0:a.ref_id))})]})},Rt=de(h)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 150px auto;
  width: 100%;
  flex-direction: column;
`,Wt=de(h)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 200px;
  margin-bottom: 25px;
  text-align: center;

  .subtitle {
    color: ${p.GRAY3};
    font-family: Barlow;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`,Dt=de(h)`
  margin-bottom: 20px;

  svg {
    fill: none;
    height: 60px;
    width: 60px;
  }
`,Pt=()=>{const[t,n]=f.useState([]),[i,a]=f.useState(!0),[c,x]=f.useState(10),[r,s]=f.useState(!0),l={only_content:"true",sort_by:"date",limit:c.toString()},u=async()=>{a(!0);try{const d=await Je(l);n(d.nodes),a(!1)}catch(d){console.error("Error fetching data:",d),a(!1)}};f.useEffect(()=>{u()},[c]);const j=()=>{x(c+10),u()};return e.jsx(Gt,{direction:"column",justify:"flex-end",children:e.jsxs(Yt,{align:"center",justify:i?"center":"flex-start",children:[i?e.jsx(I,{color:p.white}):e.jsx(e.Fragment,{children:e.jsx(Ot,{nodes:t})}),!i&&t.length>0&&(r?e.jsx(F,{onClick:j,size:"medium",children:"Load More"}):e.jsx(Ut,{children:"No new nodes available"}))]})})},Gt=o(h)`
  flex: 1;

  .title {
    font-size: 20px;
    color: ${p.white};
    font-family: Barlow;
    font-size: 22px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  .subtitle {
    color: ${p.GRAY3};
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
`,Yt=o(h)`
  min-height: 0;
  overflow: auto;
  flex: 1;
  width: 100%;
`,Ut=o.div`
  margin-top: 10px;
  color: ${p.GRAY3};
  font-family: Barlow;
  font-size: 14px;
`,Vt=({kind:t,shape:n})=>{switch(t){case"small":return H`
        padding: 4px 8px;
        border-radius: ${n==="rounded"?"16px":"8px"};
        height: 32px;
      `;case"big":return H`
        padding: 16px 24px;
        border-radius: ${n==="rounded"?"24px":"8px"};
        height: 48px;
      `;default:return H`
        padding: 8px 16px;
        border-radius: ${n==="rounded"?"32px":"8px"};
        height: 64px;
      `}},Ht=({kind:t})=>{switch(t){case"small":return"regularBold";case"big":return"mediumBold";default:return"regularBold"}},qt=o(h).attrs({align:"center",direction:"row",justify:"center"})`
  border: none;
  cursor: pointer;
  pointer-events: auto;

  ${Vt}

  &:hover {
    opacity: ${({disabled:t})=>t?.5:.9};
  }

  ${({disabled:t})=>t&&H`
      opacity: 0.5;
      pointer-events: none;
    `}
`,ke=({background:t="primaryButton",children:n,className:i="button",startIcon:a,endIcon:c,disabled:x,id:r,kind:s="regular",onClick:l,onPointerDown:u,shape:j="squared",textColor:d="white",type:m})=>e.jsxs(qt,{as:"button",background:t,className:i,disabled:x,id:r,kind:s,onClick:l,onPointerDown:u,shape:j,type:m,children:[a&&a,e.jsx(N,{color:d,kind:Ht({kind:s}),children:n}),c&&c]}),Qe=({message:t="Are you sure you want to delete this item?",onConfirm:n,children:i,anchorOrigin:a={vertical:"bottom",horizontal:"left"},transformOrigin:c={vertical:"top",horizontal:"center"}})=>{const[x,r]=f.useState(null),s=m=>{r(m.currentTarget)},l=()=>{r(null)},u=()=>{n(),l()},j=()=>{l()},d=!!x;return e.jsxs(e.Fragment,{children:[e.jsx("div",{children:Q.cloneElement(i,{onClick:s})}),e.jsx(Xt,{anchorEl:x,anchorOrigin:a,onClose:l,open:d,transformOrigin:c,children:e.jsxs(Qt,{children:[e.jsx(N,{className:"message",children:t}),e.jsxs(Kt,{children:[e.jsx(ke,{background:"primaryBlue",kind:"small",onClick:u,children:"Yes"}),e.jsx(ke,{background:"white",kind:"small",onClick:j,textColor:"black",children:"No"})]})]})})]})},Qt=o(h)`
  align-items: center;
  background: ${p.BUTTON1};
  color: ${p.white};
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
`,Xt=o(fe)`
  && {
    z-index: 9999;
  }
`,Kt=o(h)`
  display: flex;
  flex-direction: row;
  gap: 12px;
  align-items: center;
  margin-top: 16px;
`,Zt=({data:t})=>{const n=Z(r=>r.setQueuedSources),[i,a]=f.useState(""),c=async r=>{if(t!=null&&t.length)try{const s=await st.enable();await nt(r,s.pubkey),n(t.filter(l=>l.ref_id!==r))}catch(s){console.warn(s)}},x=async r=>{if(!(!r||!(t!=null&&t.length))){a(r);try{await Ee(r),n(t==null?void 0:t.filter(s=>s.ref_id!==r))}catch(s){console.warn(s)}finally{a("")}}};return t!=null&&t.length?e.jsxs(te,{component:"table",children:[e.jsx(ne,{children:e.jsxs(R,{component:"tr",children:[e.jsx(g,{className:"empty"}),e.jsx(g,{children:"Type"}),e.jsx(g,{children:"Source"}),e.jsx(g,{}),e.jsx(g,{className:"empty"})]})}),(t==null?void 0:t.length)&&e.jsx("tbody",{children:t==null?void 0:t.map(r=>e.jsxs(se,{children:[e.jsx(g,{className:"empty"}),e.jsx(g,{children:W[r.source_type]}),e.jsx(g,{width:"268px",children:r.source_type==="twitter_handle"?e.jsxs(Ne,{href:`${Pe}/${r.source}?open=system`,target:"_blank",children:["@",r.source]}):e.jsx(Ne,{href:`${r.source}?open=system`,target:"_blank",children:r.source})}),e.jsx(g,{className:"cell-center",children:e.jsxs(h,{direction:"row",justify:"flex-end",children:[e.jsx(Jt,{className:"approve-wrapper",children:e.jsx(_e,{className:"centered",onClick:()=>c(r.ref_id),children:e.jsx(et,{color:p.primaryGreen,fontSize:24})})}),e.jsx("div",{className:"delete-wrapper",children:i===r.ref_id?e.jsx(I,{color:p.white,size:16}):e.jsx(Qe,{message:"Are you sure ?",onConfirm:()=>x(r.ref_id),children:e.jsx(_e,{className:"centered",children:e.jsx(tt,{color:p.primaryRed,fontSize:24})})})})]})}),e.jsx(g,{className:"empty"})]},r.source))})]}):e.jsxs(h,{children:[e.jsx(N,{children:"There is not any results for selected filters"}),e.jsx(le,{})]})},_e=o(h)`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  cursor: pointer;
  background: transparent;
  color: ${p.lightBlue500};
  &.centered {
    margin: 0 auto;
  }

  & + & {
    margin-left: 4px;
  }
`,Ne=o.a`
  color: ${p.white};
  text-decoration: underline;
  &:visited {
    color: ${p.white};
  }
  &:hover {
    cursor: pointer;
  }
`,Jt=o.div`
  margin-right: 40px;
`,es=()=>{const[t,n]=f.useState(!0),[i,a]=f.useState(""),[c,x]=Z(l=>[l.queuedSources,l.setQueuedSources]);f.useEffect(()=>{(async()=>{n(!0);try{const u=await ze({approved:"False"});x(u.data)}catch(u){console.warn(u)}finally{n(!1)}})()},[x]);const r=l=>{a(i===l||!l?"":l)},s=c==null?void 0:c.filter(l=>!i||l.source_type===i);return e.jsxs(ts,{align:"stretch",direction:"column",justify:"flex-end",children:[e.jsxs(me,{align:"flex-start",justify:"space-between",children:[e.jsx(N,{className:"title",children:"Queued Sources"}),e.jsx(N,{className:"subtitle",children:"This is a queue of pending sources waiting for approval or denial from graph users. If you think a source will provide good content for the graph, you can pay to approve it. Think of this as an investment: you pay to add it to the source table, and if the content is popular you will earn from it. If content is not relevant to the graph, you should deny it."})]}),e.jsxs(h,{className:"filters",direction:"row",pb:16,px:36,children:[e.jsx(K,{className:X({selected:!i}),onClick:()=>r(""),size:"small",children:"All"}),Object.keys(W).map(l=>e.jsx(K,{className:X({selected:l===i}),onClick:()=>r(l),size:"small",children:W[l]},l))]}),e.jsx(ss,{align:"center",justify:t?"center":"flex-start",children:t?e.jsx(I,{color:p.white}):e.jsx(Zt,{data:s})})]})},ts=o(h)`
  flex: 1;

  .title {
    margin-bottom: 32px;
    font-size: 20px;
    color: ${p.white};
    font-family: Barlow;
    font-size: 22px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  .subtitle {
    color: ${p.GRAY3};
    font-family: Barlow;
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  & .filters {
    overflow-x: auto;
  }
`,ss=o(h)`
  min-height: 0;
  overflow: auto;
  flex: 1;
  width: 100%;
`,Xe=({onSearch:t,placeholder:n,activeIcon:i,defaultIcon:a,loadingIcon:c,loading:x,...r})=>{const[s,l]=f.useState(""),u=()=>{l(""),t("")},j=f.useCallback(y=>{t(y)},[t]),d=f.useMemo(()=>pe.debounce(j,300),[j]),m=y=>{const w=y.target.value.trim(),{value:v}=y.target;l(v),w?d(w):u()},b=()=>x?e.jsx(Ie,{children:e.jsx(re,{type:"button",children:c})}):e.jsx(Ie,{children:s?e.jsx(re,{onClick:u,type:"button",children:i}):e.jsx(re,{type:"button",children:a})});return e.jsxs(ns,{children:[e.jsx(os,{autoComplete:"off",autoCorrect:"off",inputProps:{"aria-label":"search"},onChange:m,placeholder:n,value:s,...r}),b()]})},Ie=o(h)`
  top: -50%;
  right: -3%;
  z-index: 3;
  position: absolute;
  transform: translate(-50%, 50%);
`,re=o(U)`
  font-size: 24px;
`,ns=o(It)`
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
`,os=o(Lt)`
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
    background-color: ${p.BG2};
    padding: 0px 34px 0px 16px !important;
    box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);

    &:focus,
    &:active {
      color: ${p.white};
      background-color: ${p.BG2_ACTIVE_INPUT};
      outline: 1px solid ${p.primaryBlue};
    }

    &:hover {
      background-color: ${p.BG2_ACTIVE_INPUT};
    }

    &::placeholder {
      font-size: 15px;
      text-align: left;
      font-weight: 500;
      line-height: 16px;
      letter-spacing: 0em;
      font-family: Barlow;
      color: ${p.GRAY7};
    }
  }
  width: 100%;
`,rs=t=>e.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 21 21",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M13.8 9.97481L5.82503 1.9998H18C18.4167 1.9998 18.7167 2.18314 18.9 2.5498C19.0834 2.91647 19.05 3.26647 18.8 3.5998L13.8 9.97481ZM18.775 20.5998L13 14.8248V16.9998C13 17.2831 12.9042 17.5206 12.7125 17.7123C12.5209 17.904 12.2834 17.9998 12 17.9998H10C9.71669 17.9998 9.47919 17.904 9.28753 17.7123C9.09586 17.5206 9.00002 17.2831 9.00002 16.9998V10.8248L0.400024 2.2248L1.80002 0.799805L20.2 19.1998L18.775 20.5998Z",fill:"currentColor"})}),is=({data:t,canEdit:n=!1})=>{const i=Z(s=>s.setSources),[a,c]=f.useState(""),x=async(s,l)=>{if(t!=null&&t.length)try{await at(s,l);const u=t==null?void 0:t.findIndex(d=>d.ref_id===s),j=[...t];j[u]={...j[u],source:l.source},i(j)}catch(u){console.warn(u)}},r=async s=>{if(!(!s||!(t!=null&&t.length))){c(s);try{await Ee(s),i(t==null?void 0:t.filter(l=>l.ref_id!==s))}catch(l){console.warn(l)}finally{c("")}}};return t!=null&&t.length?e.jsxs(te,{"aria-label":"a dense table",component:"table",id:"sources-table",size:"small",children:[e.jsx(ne,{children:e.jsxs(R,{component:"tr",children:[e.jsx(g,{className:"empty"}),e.jsx(g,{children:"Type"}),e.jsx(g,{align:"left",children:"Source"}),n&&e.jsx(g,{align:"left"}),e.jsx(g,{className:"empty"})]})}),e.jsx($t,{component:"tbody",children:t==null?void 0:t.map(s=>e.jsxs(se,{children:[e.jsx(g,{className:"empty"}),e.jsx(g,{align:"left",children:W[s.source_type]}),e.jsx(g,{align:"left",children:e.jsx(as,{condition:n,wrapper:l=>e.jsx(ls,{id:s.ref_id,onSave:u=>x(s.ref_id,{source:u,source_type:s.source_type}),value:s.source,children:l}),children:s.source_type===je||s.source_type===be||s.source_type===ye?e.jsxs(e.Fragment,{children:[s.source_type===je&&e.jsxs(ie,{href:`${Pe}/${s.source}`,target:"_blank",children:["@",s.source]}),s.source_type===be&&e.jsx(ie,{href:`${s.source}${s.source.includes("?")?"&":"?"}open=system`,target:"_blank",children:s.source}),s.source_type===ye&&e.jsx(ie,{href:s.source,target:"_blank",children:s.source})]}):e.jsx("div",{children:s.source})})}),n&&e.jsx(g,{align:"left",children:e.jsx("div",{className:"delete-wrapper",id:`delete-${s.source}`,children:a===s.ref_id?e.jsx(Ke,{"data-testid":`delete-loader-${s.ref_id}`,children:e.jsx(I,{color:p.white,size:16})}):e.jsx(Qe,{"data-testid":`delete-icon-${s.ref_id}`,message:"Are you sure?",onConfirm:()=>r(s.ref_id),children:e.jsx(q,{className:"centered","data-testid":`delete-icon-${s.ref_id}`,children:e.jsx(jt,{})})})})}),e.jsx(g,{className:"empty"})]},s.source))})]}):e.jsxs(ds,{children:[e.jsx(rs,{}),e.jsx(N,{className:"text",children:"There is not any results for selected filters"})]})};function as({condition:t,wrapper:n,children:i}){return t?n(i):i}const ls=({value:t,onSave:n,id:i,children:a})=>{const[c,x]=f.useState(!1),[r,s]=f.useState(t),[l,u]=f.useState(!1),j=async()=>{if(i){u(!0);try{await n(r),x(!1)}catch(d){console.warn(d)}finally{u(!1)}}};return e.jsx("div",{children:c?e.jsxs(cs,{align:"center",direction:"row",children:[e.jsx(ot,{className:"editable-cell__input",name:"cell-input",onChange:d=>s(d),value:r}),e.jsx(q,{align:"center",justify:"center",children:l?e.jsx(Ke,{"data-testid":`edit-loader-${i}`,children:e.jsx(I,{color:p.white,size:12})}):e.jsx(rt,{"data-testid":`check-icon-${i}`,onClick:j})}),e.jsx(q,{align:"center",className:"secondary",justify:"center",onClick:()=>x(!1),children:e.jsx(it,{})})]}):e.jsxs(ps,{direction:"row",children:[e.jsx("div",{className:"name",children:a}),e.jsx("div",{className:"spacer"}),e.jsx(q,{onClick:()=>x(!0),children:e.jsx(bt,{"data-testid":`edit-icon-${i}`})})]})})},cs=o(h)`
  display: flex;
  width: 250px;
  border: 2px solid ${p.lightBlue300};
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
`,q=o(h)`
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
    color: ${p.secondaryRed};
  }

  & + & {
    margin-left: 4px;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`,ds=o(h)`
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
    color: ${p.GRAY6};
  }

  svg {
    color: ${p.GRAY6};
  }
`,ps=o(h)`
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
`,ie=o.a`
  color: ${p.white};
  text-decoration: underline;
  max-width: 400px;
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  &:visited {
    color: ${p.white};
  }
  &:hover {
    color: ${p.SOURCE_TABLE_LINK};
  }
`,Ke=o(h)`
  display: flex;
  justify-content: center;
  align-items: center;
`,xs=()=>{const[t,n]=f.useState(!0),[i,a]=f.useState(""),[c,x]=Z(d=>[d.sources,d.setSources]),[r]=Be(d=>[d.isAdmin]),[s,l]=f.useState("");f.useEffect(()=>{(async()=>{n(!0);try{const m=await ze();x(m.data)}catch(m){console.warn(m)}finally{n(!1)}})()},[x]);const u=d=>{a(i===d||!d?"":d)},j=f.useMemo(()=>c==null?void 0:c.filter(d=>(!i||d.source_type===i)&&(d.source.toLowerCase().startsWith(s.toLowerCase())||d.source.toLowerCase().includes(s.toLowerCase())||`@${d.source.toLowerCase()}`.startsWith(s.toLowerCase())||`@${d.source.toLowerCase()}`.includes(s.toLowerCase()))),[s,i,c]);return e.jsxs(hs,{align:"stretch",direction:"column",justify:"flex-end",children:[e.jsx(me,{align:"center",direction:"row",justify:"space-between",children:e.jsx(N,{className:"title",children:"Sources for this Graph"})}),e.jsx(fs,{children:e.jsx(Xe,{activeIcon:e.jsx(V,{}),defaultIcon:e.jsx(Me,{}),loading:t,loadingIcon:e.jsx(I,{color:p.lightGray,size:24}),onSearch:l,placeholder:"Find Source"})}),e.jsxs(h,{className:"filters",direction:"row",pb:16,px:36,children:[e.jsx(K,{className:X({selected:!i}),onClick:()=>u(""),size:"small",children:"All"}),Object.keys(W).map(d=>e.jsx(K,{className:X({selected:d===i}),onClick:()=>u(d),size:"small",children:W[d]},d))]}),e.jsx(us,{align:"center",justify:t?"center":"flex-start",children:t?e.jsx(I,{color:p.white}):e.jsx(is,{canEdit:r,data:j})})]})},hs=o(h)`
  flex: 1;
  .title {
    font-size: 20px;
    color: ${p.white};
    font-family: Barlow;
    font-size: 22px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  & .filters {
    overflow-x: auto;
  }
`,us=o(h)`
  min-height: 0;
  overflow: auto;
  flex: 1;
  width: 100%;
`,fs=o(h)`
  margin: 0 0 16px 36px;
`,gs=({selectedType:t,setSelectedType:n})=>{const[i,a]=f.useState([]);f.useEffect(()=>{(async()=>{try{const{data:s}=await lt();a(s.edge_types)}catch(s){console.warn(s)}})()},[a]);const c=r=>({label:r,value:r}),x=r=>{n((r==null?void 0:r.value)||"")};return e.jsx(ge,{onSelect:x,options:i.map(c),selectedValue:t?c(t):null})},ms=({onSelect:t,selectedValue:n,topicId:i})=>{const[a,c]=f.useState([]),[x,r]=f.useState(!1),s=f.useMemo(()=>{const m=async b=>{const y={is_muted:"False",sort_by:ue,search:b,skip:"0",limit:"1000"};r(!0);try{const v=(await Fe(y.search)).data.filter(T=>(T==null?void 0:T.ref_id)!==i);c(v)}catch{c([])}finally{r(!1)}};return pe.debounce(m,300)},[i]),l=m=>{const b=m.trim();if(!b){c([]);return}b.length>2&&s(m)},u=m=>{const b=m?a.find(y=>y.ref_id===m.value):null;t(b||null)},j=m=>({label:m.search_value,value:m.ref_id,type:m.node_type}),d=m=>m.map(j);return n?e.jsxs(h,{align:"center",basis:"100%",direction:"row",grow:1,shrink:1,children:[e.jsx("span",{children:n.search_value}),e.jsx(Ge,{onClick:()=>t(null),size:"medium",children:e.jsx(V,{})})]}):e.jsx(ge,{handleInputChange:l,isLoading:x,onSelect:u,options:d(a)||Ae,selectedValue:n?j(n):null})},js=({from:t,onSelect:n,selectedType:i,setSelectedType:a,isSwapped:c,setIsSwapped:x,selectedToNode:r})=>e.jsxs(h,{mb:20,children:[e.jsx(h,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(h,{align:"center",direction:"row",children:e.jsx(bs,{children:"Add edge"})})}),e.jsxs(Cs,{swap:c,children:[e.jsx(h,{children:e.jsx(vs,{disabled:!0,label:c?"To":"From",swap:c,value:t==null?void 0:t.name})}),e.jsxs(h,{my:16,children:[e.jsx(ws,{children:"Type"}),e.jsx(gs,{selectedType:i,setSelectedType:a})]}),e.jsx(h,{children:e.jsxs(Ss,{children:[e.jsx(Ts,{children:c?"From":"To"}),e.jsx(ms,{onSelect:n,selectedValue:r,topicId:t==null?void 0:t.ref_id})]})}),e.jsxs(ys,{children:[e.jsx($s,{children:e.jsx(Oe,{})}),e.jsx(ks,{onClick:x,children:e.jsx(Re,{})}),e.jsx(_s,{children:e.jsx(We,{})})]})]})]}),bs=o(N)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,ys=o.div`
  position: absolute;
  top: 26px;
  bottom: 26px;
  left: 4px;
  width: 35px;
  border-left: 1.5px solid #6b7a8d4d;
  border-top: 1.5px solid #6b7a8d4d;
  border-bottom: 1.5px solid #6b7a8d4d;
  border-radius: 12px 0 0 12px;
`,ws=o.label`
  color: #bac1c6;
  font-size: 13px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0.01em;
  text-align: left;
  margin-bottom: 6px;
`,Cs=o.div`
  position: relative;
  color: white;
  font-family: 'Barlow';
  display: flex;
  flex-direction: ${t=>t.swap?"column-reverse":"column"};
  margin-bottom: 10px;
  padding-left: 38px;
`,vs=o(He)`
  position: relative;
  width: 100%;
  padding: 16px;
  gap: 10px;
  border-radius: 6px;
  border: 1px solid #6b7a8d4d;
  opacity: 0px;
  display: flex;
`,Ss=o.div`
  position: relative;
  width: 100%;
  padding: 15px;
  gap: 10px;
  border-radius: 6px;
  border: 1.4px solid #6b7a8d4d;
  opacity: 0px;
  display: flex;
  align-items: center;
`,Ts=o.label`
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
`,$s=o.div`
  position: absolute;
  top: 0;
  right: 0;
  transform: translateY(-50%) translateX(50%);
  color: #23252f;
`,ks=o.div`
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
`,_s=o.div`
  position: absolute;
  bottom: 0;
  right: 0;
  transform: translateY(10px) translateX(3px);
  color: #6b7a8d;
  line-height: 1;
`,Ns=({topic:t,onClose:n})=>{const{close:i}=B("addEdge"),[a]=L(v=>[v.data]),c=xe({mode:"onChange"}),[x,r]=f.useState(!1),[s,l]=f.useState(!1),[u,j]=f.useState(""),[d,m]=f.useState(null),b=()=>{n(),i()},y=async()=>{if(!(!d||!a)){l(!0);try{await ct({from:t.ref_id,to:d==null?void 0:d.ref_id,relationship:u});const{ref_id:v}=t,{ref_id:T}=d;if(a){const $={...a};$[v]={...$[v],edgeList:[...$[v].edgeList,u]},$[T]&&($[T]={...$[T],edgeList:[...$[T].edgeList,u]}),L.setState({data:$})}b()}catch(v){console.warn(v)}finally{l(!1)}}},w=s||!d||!u;return e.jsx(J,{id:"addEdge",kind:"small",onClose:b,preventOutsideClose:!0,children:e.jsxs(he,{...c,children:[e.jsx(js,{from:t,isSwapped:x,onSelect:m,selectedToNode:d,selectedType:u,setIsSwapped:()=>r(!x),setSelectedType:j}),e.jsxs(Is,{color:"secondary",disabled:w,onClick:y,size:"large",variant:"contained",children:["Confirm",s&&e.jsx(Ls,{children:e.jsx(I,{color:p.lightGray,size:12})})]})]})})},Is=o(F)`
  width: 293px !important;
  margin: 0 0 10px auto !important;
`,Ls=o.span`
  margin-top: 2px;
`,Es=()=>e.jsxs(h,{children:[e.jsx(h,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(h,{align:"center",direction:"row",children:e.jsx(zs,{children:"Edit topic"})})}),e.jsx(h,{mb:12,children:e.jsx(dt,{id:"cy-topic",maxLength:50,name:"name",placeholder:"Add your topic",rules:{...pt}})})]}),zs=o(N)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,Bs=({topic:t,onClose:n})=>{const{close:i}=B("editTopic"),[a]=L(v=>[v.data]),c=xe({mode:"onChange"}),{watch:x,setValue:r,reset:s,getValues:l}=c,[u,j]=f.useState(!1);f.useEffect(()=>(t&&r("name",t==null?void 0:t.name),()=>{s()}),[t,r,s]);const d=x("name"),m=d==null?void 0:d.trim(),b=()=>{n(),i()},y=async()=>{j(!0);try{if(await ee(t==null?void 0:t.ref_id,{node_type:t==null?void 0:t.node_type,node_data:{name:m}}),a){const v={...a};v[t==null?void 0:t.ref_id].name=m,L.setState({data:v})}b()}catch(v){console.warn(v)}finally{j(!1)}},w=l().name&&(t==null?void 0:t.name)!==l().name;return e.jsx(J,{id:"editTopic",kind:"regular",onClose:b,preventOutsideClose:!0,children:e.jsxs(he,{...c,children:[e.jsx(Es,{}),e.jsxs(F,{color:"secondary",disabled:u||!m||!w,onClick:y,size:"large",variant:"contained",children:["Save Changes",u&&e.jsx(As,{children:e.jsx(I,{color:p.lightGray,size:12})})]})]})})},As=o.span`
  margin-top: 2px;
`,Fs=({topicId:t,onSelect:n,selectedValue:i,dataId:a})=>{const[c,x]=f.useState([]),[r,s]=f.useState(!1),l=f.useMemo(()=>{const b=async y=>{const w={is_muted:"False",sort_by:ue,search:y,skip:"0",limit:"1000"};s(!0);try{const T=(await Fe(w.search)).data.filter($=>($==null?void 0:$.ref_id)!==t);x(T)}catch{x([])}finally{s(!1)}};return pe.debounce(b,300)},[t]),u=b=>{const y=b.trim();if(!y){x([]);return}y.length>2&&l(b)},j=b=>{const y=b?c.find(w=>w.ref_id===b.value):null;n(y||null)},d=b=>({label:b.search_value,value:b.ref_id,type:b.node_type}),m=b=>b.map(d);return i?e.jsxs(h,{align:"center",basis:"100%",direction:"row",grow:1,shrink:1,children:[e.jsx("span",{children:i.search_value}),e.jsx(Ge,{onClick:()=>n(null),size:"medium",children:e.jsx(V,{})})]}):e.jsx(ge,{dataId:a,handleInputChange:u,isLoading:r,onSelect:j,options:m(c)||Ae,selectedValue:i?d(i):null})},Ms=({from:t,onSelect:n,selectedToNode:i,isSwapped:a,setIsSwapped:c})=>{var s;const x=t==null?void 0:t.map(l=>l.name).join(", "),r=t&&t.length===1?t[0].name:`${x==null?void 0:x.substring(0,25)} ...`;return e.jsxs(h,{mb:20,children:[e.jsx(h,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(h,{align:"center",direction:"row",children:e.jsx(Os,{children:"Merge topic"})})}),e.jsxs(Ds,{swap:a,children:[e.jsx(Rs,{children:e.jsx(Ps,{disabled:!0,label:a?"To":"From",swap:a,value:r})}),e.jsxs(h,{my:16,children:[e.jsx(Ys,{children:"Type"}),e.jsx(N,{children:"IS ALIAS"})]}),e.jsx(h,{children:e.jsxs(Gs,{children:[e.jsx(Us,{children:a?"From":"To"}),e.jsx(Fs,{dataId:"to-node",onSelect:n,selectedValue:i,topicId:(s=t[t.length-1])==null?void 0:s.ref_id})]})}),e.jsxs(Ws,{children:[e.jsx(Vs,{children:e.jsx(Oe,{})}),e.jsx(Hs,{"data-testid":"swap-icon",disabled:(t==null?void 0:t.length)!==1,onClick:(t==null?void 0:t.length)===1?c:void 0,children:e.jsx(Re,{})}),e.jsx(qs,{children:e.jsx(We,{})})]})]})]})},Os=o(N)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,Rs=o(h)`
  flex: 1 1 100%;
`,Ws=o.div`
  position: absolute;
  top: 26px;
  bottom: 26px;
  left: 4px;
  width: 35px;
  border-left: 1.5px solid #6b7a8d4d;
  border-top: 1.5px solid #6b7a8d4d;
  border-bottom: 1.5px solid #6b7a8d4d;
  border-radius: 12px 0 0 12px;
`,Ds=o.div`
  position: relative;
  color: white;
  font-family: 'Barlow';
  display: flex;
  flex-direction: ${t=>t.swap?"column-reverse":"column"};
  margin-bottom: 10px;
  padding-left: 38px;
`,Ps=o(He)`
  position: relative;
  width: 100%;
  padding: 16px;
  gap: 10px;
  border-radius: 6px;
  border: 1px solid #6b7a8d4d;
  opacity: 0px;
  display: flex;
`,Gs=o.div`
  position: relative;
  width: 100%;
  padding: 15px;
  gap: 10px;
  border-radius: 6px;
  border: 1.4px solid #6b7a8d4d;
  opacity: 0px;
  display: flex;
  align-items: center;
`,Ys=o.label`
  color: #bac1c6;
  font-size: 13px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0.01em;
  text-align: left;
  margin-bottom: 6px;
`,Us=o.label`
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
`,Vs=o.div`
  position: absolute;
  top: 0;
  right: 0;
  transform: translateY(-50%) translateX(50%);
  color: #23252f;
`,Hs=o.div`
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
`,qs=o.div`
  position: absolute;
  bottom: 0;
  right: 0;
  transform: translateY(10px) translateX(3px);
  color: #6b7a8d;
  line-height: 1;
`,Qs=({onClose:t,multiTopics:n})=>{const{close:i}=B("mergeTopic"),a=xe({mode:"onChange"}),{setValue:c,reset:x}=a,[r,s]=f.useState(!1),[l,u]=f.useState(!1),[j,d]=f.useState(null);f.useEffect(()=>{if(n&&n.length>0){const y=n.map(w=>w.name).join(", ");c("name",y)}return()=>{x()}},[n,c,x]);const m=()=>{t(),i()},b=async()=>{s(!0);const y=n==null?void 0:n.map(w=>w.ref_id).filter(w=>!!w);try{y.length&&j&&(await xt({from:y,to:j==null?void 0:j.ref_id}),L.setState(w=>({ids:w.ids.filter(v=>!y.includes(v)),total:w.total-y.length})),m())}catch(w){console.warn(w)}finally{s(!1)}};return e.jsx(J,{id:"mergeTopic",kind:"small",onClose:m,preventOutsideClose:!0,children:e.jsxs(he,{...a,children:[e.jsx(Ms,{from:n,isSwapped:l,onSelect:d,selectedToNode:j,setIsSwapped:()=>u(!l)}),e.jsxs(Xs,{color:"secondary","data-testid":"merge-topics-button",disabled:r||!j,onClick:b,size:"large",variant:"contained",children:["Merge topics",r&&e.jsx(Ks,{children:e.jsx(I,{color:p.lightGray,size:12})})]})]})})},Xs=o(F)`
  width: 293px !important;
  margin: 0 0 10px auto !important;
`,Ks=o.span`
  margin-top: 2px;
`,Zs=({topic:t,onClick:n,onSearch:i,checkedStates:a,setCheckedStates:c,isMuteDisabled:x})=>{const[r,s]=L(k=>[k.ids,k.total]),[l,u]=f.useState(!1),[j,d]=f.useState(!1),m=ce(t.date_added_to_graph),b=async(k,C)=>{u(!0);try{await ee(k,{node_type:t==null?void 0:t.node_type,node_data:{is_muted:C}}),L.setState({ids:r.filter(_=>_!==k),total:s-1})}catch(_){console.warn(_)}},y=k=>{c(C=>({...C,[k]:!C[k]}))},w=(k,C)=>{var _;(_=window.getSelection())!=null&&_.toString()?k.preventDefault():i(C.name)},v=t.edgeList.slice(0,1),T=t.edgeList.length-v.length,[$,D]=Q.useState(null),P=k=>{D(k.currentTarget),d(!0)},E=()=>{d(!1)},M=!!$&&j,z=a[t.ref_id]?"visible":"";return e.jsxs(se,{className:a[t.ref_id]?"checked":"",children:[e.jsx(g,{children:e.jsx(tn,{className:`checkbox-section ${z}`,"data-testid":"topic-check-box",onClick:()=>y(t.ref_id),children:e.jsx(sn,{checked:a[t.ref_id],children:e.jsx(nn,{children:a[t.ref_id]&&e.jsx(qe,{})})})})}),e.jsx(g,{onClick:k=>w(k,t),children:e.jsx(en,{children:t.name})}),e.jsx(g,{children:t.node_type}),e.jsx(g,{children:e.jsx(on,{children:t.edgeCount})}),e.jsxs(g,{children:[e.jsx(fe,{anchorEl:$,anchorOrigin:{vertical:"top",horizontal:"center"},disableRestoreFocus:!0,id:"mouse-over-popover",onClose:E,onMouseEnter:()=>d(!0),onMouseLeave:E,open:M,sx:{pointerEvents:"auto","& .MuiPaper-root":{backgroundColor:"rgba(0, 0, 0, 0.9)",borderRadius:"4px",width:"160px",maxHeight:"200px",overflowY:"scroll"}},transformOrigin:{vertical:"bottom",horizontal:"center"},children:e.jsx(Te,{sx:{p:1.5,fontSize:"13px",fontWeight:400,lineHeight:"1.8",wordWrap:"break-word"},children:t.edgeList.join(", ")})}),v.join(", "),T>0&&e.jsx(Te,{"aria-haspopup":"true","aria-owns":M?"mouse-over-popover":void 0,component:"span",onMouseEnter:P,onMouseLeave:E,sx:{cursor:"pointer"},children:",..."})]}),e.jsx(g,{children:e.jsx("span",{children:m})}),e.jsx(g,{className:"cell-center",children:e.jsx(h,{direction:"row",justify:"space-between",children:e.jsx("div",{className:"approve-wrapper",children:l?e.jsx(Js,{children:e.jsx(I,{color:p.white,size:16})}):e.jsxs(h,{direction:"row",children:[t.is_muted?e.jsx(U,{className:"centered",disabled:x,onClick:()=>b(t.ref_id,!1),children:e.jsx(yt,{})}):e.jsx(U,{className:"centered",disabled:x,onClick:()=>b(t.ref_id,!0),children:e.jsx(wt,{})}),e.jsx(U,{disabled:x,onClick:k=>n(k,t.ref_id),children:e.jsx(Ct,{"data-testid":"ThreeDotsIcons"})})]})})})})]},t.name)},Js=o.span`
  margin-left: 12px;
`,en=o.span`
  cursor: pointer;
  :hover {
    text-decoration: underline;
  }
`,tn=o.td`
  visibility: hidden;
  cursor: pointer;
  display: flex;
  align-items: center;

  &.visible {
    visibility: visible;
  }
`,sn=o.div`
  width: 14px;
  height: 14px;
  border-radius: 4px;
  border: ${({checked:t})=>t?"#618AFF":"2px solid #CCCCCC"};
  background-color: ${({checked:t})=>t?"#618AFF":"transparent"};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 12px;
`,nn=o.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 2px;
  background-color: transparent;
`,on=o.span`
  display: flex;
  align-items: center;
  justify-content: center;
`,rn=f.memo(Zs),an=({setShowMuteUnmute:t,showMuted:n,loading:i,onTopicEdit:a,onChangeFilter:c,checkedStates:x,setCheckedStates:r})=>{const{close:s}=B("sourcesTable"),[l,u]=f.useState(!1),[j,d]=Q.useState(null),[m,b]=Q.useState(""),y=Object.values(x).filter(S=>S).length,[w,v]=ht(S=>[S.setSearchFormValue,S.setCurrentSearch]),[T,$,D]=L(S=>[S.data,S.ids,S.total]),P=f.useCallback((S,O)=>{d(S.currentTarget),b(O)},[]),E=()=>{d(null)},M=S=>{w(S),v(S),s()},z=S=>{a(m,S),E()},k=S=>{c(S)},C=!!j,_=C?"simple-popover":void 0,A=async()=>{u(!0);try{const S=Object.keys(x).map(async G=>{if(x[G])try{return await ee(G,{node_data:{is_muted:!n}}),G}catch(Ze){return console.error("Error updating node data:",Ze),null}return null}),O=await Promise.all(S);L.setState({ids:$.filter(G=>!O.includes(G)),total:D-O.length}),r({}),u(!1)}catch(S){console.error("Error:",S),u(!1)}};return!i&&!T?e.jsxs(h,{children:[e.jsx(N,{children:"There is not any results for selected filters"}),e.jsx(le,{})]}):e.jsx(e.Fragment,{children:T&&!Object.keys(T).length?e.jsxs(h,{children:[e.jsx(N,{children:"There is not any results for selected filters"}),e.jsx(le,{})]}):e.jsxs(fn,{align:"center",justify:l?"center":"flex-start",children:[e.jsxs(te,{component:"table",children:[y>0?e.jsx(Bt,{children:e.jsxs(R,{component:"tr",children:[e.jsx(g,{children:e.jsx(U,{onClick:()=>r({}),children:e.jsx(V,{})})}),e.jsx(g,{colSpan:12,children:e.jsxs(un,{children:[e.jsxs(hn,{children:[e.jsx(xn,{children:y}),"selected"]}),e.jsx(g,{className:"empty"}),e.jsx(Le,{onClick:A,role:"button",children:n?e.jsxs(e.Fragment,{children:[e.jsx(we,{})," Unmute ALL"]}):e.jsxs(e.Fragment,{children:[e.jsx(Ce,{})," Mute ALL"]})}),e.jsx(g,{className:"empty"}),e.jsxs(Le,{onClick:()=>z("mergeTopic"),children:[e.jsx(ve,{})," Merge"]})]})}),e.jsx(g,{className:"empty"})]})}):e.jsx(ne,{children:e.jsxs(R,{component:"tr",children:[e.jsx(g,{className:"empty"}),e.jsx(g,{children:e.jsxs(ae,{onClick:()=>k(ue),children:["Name ",e.jsx(oe,{})]})}),e.jsx(g,{children:"Type"}),e.jsx(g,{children:e.jsxs(ae,{onClick:()=>k(kt),children:["Count ",e.jsx(oe,{})]})}),e.jsx(g,{children:"Edge list"}),e.jsx(g,{children:e.jsxs(ae,{onClick:()=>k(_t),children:["Date ",e.jsx(oe,{})]})}),e.jsx(g,{children:e.jsx(h,{px:8,children:e.jsxs(ln,{onClick:t,children:[e.jsx(cn,{checked:n,children:e.jsx(dn,{children:n&&e.jsx(qe,{})})}),"Muted"]})})})]})}),(i||l)&&!T&&e.jsx(gn,{children:e.jsx(I,{color:p.white})}),T&&e.jsx("tbody",{children:$==null?void 0:$.map(S=>e.jsx(rn,{checkedStates:x,isMuteDisabled:Object.values(x).filter(O=>O).length>1,onClick:P,onSearch:M,setCheckedStates:r,topic:T[S]},S))})]}),m?e.jsxs(pn,{anchorEl:j,anchorOrigin:{vertical:"bottom",horizontal:"right"},id:_,onClose:E,open:C,transformOrigin:{vertical:"top",horizontal:"right"},children:[n?e.jsxs(Y,{"data-testid":"unmute",onClick:()=>z("unMute"),children:[" ",e.jsx(we,{"data-testid":""})," Unmute"]}):e.jsxs(Y,{"data-testid":"mute",onClick:()=>z("mute"),children:[" ",e.jsx(Ce,{"data-testid":"VisibilityOff"})," Mute"]}),e.jsxs(Y,{"data-testid":"rename",onClick:()=>z("editTopic"),children:[e.jsx(vt,{"data-testid":"EditTopicIcon"})," Rename"]}),e.jsxs(Y,{"data-testid":"merge",onClick:()=>z("mergeTopic"),children:[e.jsx(ve,{"data-testid":"MergeIcon"})," Merge"]}),e.jsxs(Y,{"data-testid":"add_edge",onClick:()=>z("addEdge"),children:[e.jsx(St,{"data-testid":"AddCircleIcon"})," Add edge"]})]}):null]})})},ln=o.td`
  cursor: pointer;
  display: flex;
  align-items: center;
`,cn=o.div`
  width: 14px;
  height: 14px;
  border-radius: 4px;
  border: ${({checked:t})=>t?"#618AFF":"2px solid #CCCCCC"};
  background-color: ${({checked:t})=>t?"#618AFF":"transparent"};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 8px;
`,dn=o.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 2px;
  background-color: transparent;
`,ae=o.span`
  cursor: pointer;
  display: flex;
  gap: 4px;
  align-items: center;
`,Y=o(h).attrs({direction:"row",px:12,py:8})`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 12px;
  cursor: pointer;
  background: ${p.BUTTON1};
  color: ${p.white};

  &:hover {
    background: ${p.BUTTON1_HOVER};
    color: ${p.GRAY3};
  }
`,pn=o(fe)`
  && {
    z-index: 9999;
  }
  .MuiPaper-root {
    min-width: 149px;
    color: ${p.GRAY3};
    box-shadow: 0px 1px 6px 0px rgba(0, 0, 0, 0.2);
    border-radius: 6px;
    z-index: 1;
    font-family: Barlow;
    font-size: 14px;
    font-weight: 500;
  }
`,xn=o.span`
  font-family: Barlow;
  font-size: 13px;
  font-weight: 500;
  margin-right: 4px;
  margin-top: 1px;
`,Le=o.div`
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
`,hn=o.div`
  display: flex;
  align-items: center;
  gap: 2px;
`,un=o.span`
  display: flex;
  align-items: center;
  gap: 27px;
`,fn=o(h)`
  min-height: 0;
  overflow: auto;
  flex: 1;
  width: 100%;
  position: relative;
`,gn=o.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
`,mn=()=>{const[t,n,i,a,c,x,r,s]=L(C=>[C.data,C.ids,C.total,C.setTopics,C.filters,C.setFilters,C.terminate,C.loading]),{open:l}=B("editTopic"),{open:u}=B("mergeTopic"),{open:j}=B("addEdge"),[d,m]=f.useState(null),[b,y]=f.useState([]),[w,v]=f.useState({}),T={editTopic:l,mergeTopic:u,addEdge:j},$=f.useRef([]);f.useEffect(()=>{n.length&&($.current=n)},[n]),f.useEffect(()=>{(async()=>{try{await a()}catch{console.error("err")}})()},[a,c]);const D=async()=>{x({page:c.page+1})};f.useEffect(()=>()=>{r()},[r]);const P=C=>{x({sortBy:C})},E=()=>{m(null),y([])},M=async(C,_)=>{try{await ee(C,{node_data:{is_muted:_==="mute"}}),L.setState({ids:n.filter(A=>A!==C),total:i-1})}catch(A){console.warn(A)}},z=async(C,_)=>{if(t)if(_==="mergeTopic")if(Object.values(w).filter(A=>A).length>0){const A=Object.entries(w).filter(([,S])=>S).map(([S])=>t[S]);y(A),u()}else y([t[C]]),m(t[C]),u();else["mute","unMute"].includes(_)&&await M(C,_),typeof T[_]=="function"&&T[_](),m(t[C])},k=C=>{x({...c,search:C})};return e.jsxs(e.Fragment,{children:[e.jsxs(jn,{direction:"column",justify:"flex-end",children:[e.jsx(me,{align:"flex-start",direction:"row",justify:"space-between",children:e.jsx(N,{className:"title",children:"Topics"})}),e.jsx(yn,{"data-testid":"topic-search-container",children:e.jsx(Xe,{activeIcon:e.jsx(V,{}),defaultIcon:e.jsx(Me,{}),loading:s,loadingIcon:e.jsx(I,{color:p.lightGray,size:24}),onSearch:k,placeholder:"Search ..."})}),e.jsxs(bn,{align:"center",justify:s&&!t?"center":"flex-start",children:[e.jsx(an,{checkedStates:w,loading:s,onChangeFilter:P,onTopicEdit:z,setCheckedStates:v,setShowMuteUnmute:()=>x({is_muted:!c.is_muted}),showMuted:c.is_muted}),i>n.length?e.jsxs(F,{className:"load-more",disabled:s,onClick:D,children:["Load more",s&&e.jsx(I,{color:p.lightGray,size:10})]}):null]})]}),b.length>0&&e.jsx(Qs,{multiTopics:b,onClose:E}),d&&e.jsx(Bs,{onClose:E,topic:d}),d&&e.jsx(Ns,{onClose:E,topic:d})]})},jn=o(h)`
  flex: 1;

  .title {
    font-size: 20px;
    color: ${p.white};
    font-family: Barlow;
    font-size: 22px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  .subtitle {
    color: ${p.GRAY3};
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
`,bn=o(h)`
  min-height: 0;
  overflow: auto;
  flex: 1;
  width: 100%;
`,yn=o(h)`
  margin: 0 0 16px 36px;
`,wn=[{label:Ve,component:Pt},{label:Nt,component:xs},{label:Ue,component:es},{label:Ye,component:mn}],Cn=t=>{const{children:n,value:i,index:a,...c}=t;return i===a?e.jsx(kn,{"aria-labelledby":`simple-tab-${a}`,hidden:i!==a,id:`simple-tabpanel-${a}`,role:"tabpanel",...c,children:n}):null};function vn(t){return{id:`simple-tab-${t}`,"aria-controls":`simple-tabpanel-${t}`}}const Sn=()=>{const[t,n]=f.useState(0),[i]=Be(s=>[s.isAdmin]),[a]=ut(s=>[s.queuedSourcesFeatureFlag]),c=ft(),x=(s,l)=>{n(l)},r=wn.filter(({label:s})=>s===Ye?i:s===Ue?i&&a:s===Ve?c:!0);return e.jsxs(_n,{"data-testid":"sources-table",direction:"column",children:[e.jsx(Tn,{"aria-label":"sources tabs",onChange:x,value:t,children:r.map((s,l)=>e.jsx($n,{color:p.white,disableRipple:!0,label:s.label,...vn(l)},s.label))}),r.map((s,l)=>e.jsx(Cn,{index:l,value:t,children:e.jsx(s.component,{})},s.label))]})},Tn=o(Et)`
  && {
    background: rgba(0, 0, 0, 0.2);
    border-radius: 9px 9px 0 0;
    .MuiTabs-indicator {
      background: ${p.primaryBlue};
    }
  }
`,$n=o(zt)`
  && {
    padding: 30px 0 24px;
    color: ${p.GRAY6};
    margin-left: 34px;
    font-family: Barlow;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;

    &.Mui-selected {
      color: ${p.white};
    }
  }
`,kn=o(h)`
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
`,_n=o(h)`
  min-height: 0;
  flex: 1;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 3px;
  }
`,Qn=()=>{const{close:t}=B("sourcesTable"),{visible:n}=B("addContent");return n?null:e.jsx(J,{background:"BG1",id:"sourcesTable",kind:"large",noWrap:!0,onClose:t,preventOutsideClose:!0,children:e.jsx(Sn,{})})};export{Qn as SourcesTableModal};
