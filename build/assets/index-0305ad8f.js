import{s as be,_ as z,a6 as De,r as h,u as Oe,b as We,j as e,d as Ge,e as Ye,f as p,h as o,T as _,F as f,R as X,v as Z,Y as ee,i as P,o as Ue,p as Ve,q as ye,l as N,t as ve,w as He,x as Se,y as Ce,b4 as Te,z as qe,B as A,C as Qe,D as Ke,E as $e,G as Je,H as he,J as Xe}from"./index-b17e6e7f.js";import{B as M}from"./index-a41ce7c3.js";import{T as Ze,a as D,b as et,F as te,M as re,C as _e,N as tt,c as rt}from"./NoFilterResultIcon-d7bfc88d.js";import{B,C,I as L,b as R,S as O,c as ne,F as oe}from"./react-toastify.esm-ac6bd257.js";import{M as ke,a as ze,k as nt,b as ot,c as st,d as it}from"./index.esm-de2ad175.js";import{P as W,I as G,a as se,F as Ne}from"./Popover-bcd53c70.js";import{B as lt,T as at}from"./index-922af843.js";import{A as Ae,u as $}from"./index-46828888.js";import{P as Ee}from"./Popper-f6f28cec.js";import{g as ct,C as Be}from"./ChevronDownIcon-3b7a3112.js";import{C as Re}from"./CheckIcon-7c4c0597.js";import{C as Ie}from"./ChevronUpIcon-40f696de.js";import{S as dt}from"./SettingsIcon-958f00f6.js";import{T as ht,a as pt}from"./index-6bbf0f8e.js";import"./useSlotProps-ddc77366.js";import"./InfoIcon-eed706a9.js";const xt=["absolute","children","className","component","flexItem","light","orientation","role","textAlign","variant"],ut=t=>{const{absolute:n,children:s,classes:l,flexItem:d,light:x,orientation:i,textAlign:r,variant:a}=t;return Ye({root:["root",n&&"absolute",a,x&&"light",i==="vertical"&&"vertical",d&&"flexItem",s&&"withChildren",s&&i==="vertical"&&"withChildrenVertical",r==="right"&&i!=="vertical"&&"textAlignRight",r==="left"&&i!=="vertical"&&"textAlignLeft"],wrapper:["wrapper",i==="vertical"&&"wrapperVertical"]},ct,l)},ft=be("div",{name:"MuiDivider",slot:"Root",overridesResolver:(t,n)=>{const{ownerState:s}=t;return[n.root,s.absolute&&n.absolute,n[s.variant],s.light&&n.light,s.orientation==="vertical"&&n.vertical,s.flexItem&&n.flexItem,s.children&&n.withChildren,s.children&&s.orientation==="vertical"&&n.withChildrenVertical,s.textAlign==="right"&&s.orientation!=="vertical"&&n.textAlignRight,s.textAlign==="left"&&s.orientation!=="vertical"&&n.textAlignLeft]}})(({theme:t,ownerState:n})=>z({margin:0,flexShrink:0,borderWidth:0,borderStyle:"solid",borderColor:(t.vars||t).palette.divider,borderBottomWidth:"thin"},n.absolute&&{position:"absolute",bottom:0,left:0,width:"100%"},n.light&&{borderColor:t.vars?`rgba(${t.vars.palette.dividerChannel} / 0.08)`:De(t.palette.divider,.08)},n.variant==="inset"&&{marginLeft:72},n.variant==="middle"&&n.orientation==="horizontal"&&{marginLeft:t.spacing(2),marginRight:t.spacing(2)},n.variant==="middle"&&n.orientation==="vertical"&&{marginTop:t.spacing(1),marginBottom:t.spacing(1)},n.orientation==="vertical"&&{height:"100%",borderBottomWidth:0,borderRightWidth:"thin"},n.flexItem&&{alignSelf:"stretch",height:"auto"}),({ownerState:t})=>z({},t.children&&{display:"flex",whiteSpace:"nowrap",textAlign:"center",border:0,"&::before, &::after":{content:'""',alignSelf:"center"}}),({theme:t,ownerState:n})=>z({},n.children&&n.orientation!=="vertical"&&{"&::before, &::after":{width:"100%",borderTop:`thin solid ${(t.vars||t).palette.divider}`}}),({theme:t,ownerState:n})=>z({},n.children&&n.orientation==="vertical"&&{flexDirection:"column","&::before, &::after":{height:"100%",borderLeft:`thin solid ${(t.vars||t).palette.divider}`}}),({ownerState:t})=>z({},t.textAlign==="right"&&t.orientation!=="vertical"&&{"&::before":{width:"90%"},"&::after":{width:"10%"}},t.textAlign==="left"&&t.orientation!=="vertical"&&{"&::before":{width:"10%"},"&::after":{width:"90%"}})),mt=be("span",{name:"MuiDivider",slot:"Wrapper",overridesResolver:(t,n)=>{const{ownerState:s}=t;return[n.wrapper,s.orientation==="vertical"&&n.wrapperVertical]}})(({theme:t,ownerState:n})=>z({display:"inline-block",paddingLeft:`calc(${t.spacing(1)} * 1.2)`,paddingRight:`calc(${t.spacing(1)} * 1.2)`},n.orientation==="vertical"&&{paddingTop:`calc(${t.spacing(1)} * 1.2)`,paddingBottom:`calc(${t.spacing(1)} * 1.2)`})),Le=h.forwardRef(function(n,s){const l=Oe({props:n,name:"MuiDivider"}),{absolute:d=!1,children:x,className:i,component:r=x?"div":"hr",flexItem:a=!1,light:c=!1,orientation:g="horizontal",role:m=r!=="hr"?"separator":void 0,textAlign:w="center",variant:b="fullWidth"}=l,y=We(l,xt),u=z({},l,{absolute:d,component:r,flexItem:a,light:c,orientation:g,role:m,textAlign:w,variant:b}),v=ut(u);return e.jsx(ft,z({as:r,className:Ge(v.root,i),role:m,ref:s,ownerState:u},y,{children:x?e.jsx(mt,{className:v.wrapper,ownerState:u,children:x}):null}))});Le.muiSkipListHighlight=!0;const ie=Le,j=p(Ze)`
  && {
    color: ${o.white};
    border: none;
    padding: 6px 27px 6px 0;
    color: ${o.GRAY3};
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
`,le=p(D)`
  && {
    height: 48px;
    padding: 0 36px;
  }
  &:nth-child(odd) {
    background-color: ${o.BG3};
  }
`,ae=p(et)`
  && {
    border-bottom: 1px solid ${o.black};
  }

  ${j} {
    color: ${o.white};
    font-family: Barlow;
    font-size: 11px;
    font-style: normal;
    font-weight: 700;
    line-height: 18px; /* 163.636% */
    letter-spacing: 1.1px;
    text-transform: uppercase;
  }
`,F=p(B)`
  &.selected {
    background: ${o.white};
    color: ${o.BG1};
    pointer-events: none;
  }

  & + & {
    margin-left: 16px;
  }
`,ce=p(f)`
  margin-bottom: 16px;
  padding: 0 36px;
  ${_} {
    margin-bottom: 0;
  }
`,I={[X]:"RSS link",[Z]:"Twitter Handle",[ee]:"Youtube channel"},gt="date",jt="edge_count",wt="alphabetically",Y={[gt]:"Date",[jt]:"Edge Count",[wt]:"Alphabetically"},Fe="https://twitter.com",Pe="IS_ALIAS",bt=({data:t})=>{const n=P(i=>i.setQueuedSources),[s,l]=h.useState(""),d=async i=>{if(t!=null&&t.length)try{const r=await Ue.enable();await Ve(i,r.pubkey),n(t.filter(a=>a.ref_id!==i))}catch(r){console.warn(r)}},x=async i=>{if(!(!i||!(t!=null&&t.length))){l(i);try{await ye(i),n(t==null?void 0:t.filter(r=>r.ref_id!==i))}catch(r){console.warn(r)}finally{l("")}}};return t!=null&&t.length?e.jsxs(re,{component:"table",children:[e.jsx(ae,{children:e.jsxs(D,{component:"tr",children:[e.jsx(j,{className:"empty"}),e.jsx(j,{children:"Type"}),e.jsx(j,{children:"Source"}),e.jsx(j,{}),e.jsx(j,{className:"empty"})]})}),(t==null?void 0:t.length)&&e.jsx("tbody",{children:t==null?void 0:t.map(i=>e.jsxs(le,{children:[e.jsx(j,{className:"empty"}),e.jsx(j,{children:I[i.source_type]}),e.jsx(j,{width:"268px",children:i.source_type==="twitter_handle"?e.jsxs(xe,{href:`${Fe}/${i.source}?open=system`,target:"_blank",children:["@",i.source]}):e.jsx(xe,{href:`${i.source}?open=system`,target:"_blank",children:i.source})}),e.jsx(j,{className:"cell-center",children:e.jsxs(f,{direction:"row",justify:"space-between",children:[e.jsx("div",{className:"approve-wrapper",children:e.jsx(pe,{className:"centered",onClick:()=>d(i.ref_id),children:e.jsx(ke,{color:o.primaryGreen,fontSize:24})})}),e.jsx("div",{className:"delete-wrapper",children:s===i.ref_id?e.jsx(C,{color:o.white,size:16}):e.jsx(_e,{message:"Are you sure ?",onConfirm:()=>x(i.ref_id),children:e.jsx(pe,{className:"centered",children:e.jsx(ze,{color:o.primaryRed,fontSize:24})})})})]})}),e.jsx(j,{className:"empty"})]},i.source))})]}):e.jsxs(f,{children:[e.jsx(_,{children:"There is not any results for selected filters"}),e.jsx(te,{})]})},pe=p(f)`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  cursor: pointer;
  background: transparent;
  color: ${o.lightBlue500};
  &.centered {
    margin: 0 auto;
  }

  & + & {
    margin-left: 4px;
  }
`,xe=p.a`
  color: ${o.white};
  text-decoration: underline;
  &:visited {
    color: ${o.white};
  }
  &:hover {
    cursor: pointer;
  }
`,yt=()=>{const[t,n]=h.useState(!0),[s,l]=h.useState(""),[d,x]=P(a=>[a.queuedSources,a.setQueuedSources]);h.useEffect(()=>{(async()=>{n(!0);try{const c=await ve({approved:"False"});x(c.data)}catch(c){console.warn(c)}finally{n(!1)}})()},[x]);const i=a=>{l(s===a||!a?"":a)},r=d==null?void 0:d.filter(a=>!s||a.source_type===s);return e.jsxs(vt,{align:"stretch",direction:"column",justify:"flex-end",children:[e.jsxs(ce,{align:"flex-start",justify:"space-between",children:[e.jsx(_,{className:"title",children:"Queued Sources"}),e.jsx(_,{className:"subtitle",children:"This is a queue of pending sources waiting for approval or denial from graph users. If you think a source will provide good content for the graph, you can pay to approve it. Think of this as an investment: you pay to add it to the source table, and if the content is popular you will earn from it. If content is not relevant to the graph, you should deny it."})]}),e.jsxs(f,{className:"filters",direction:"row",pb:16,px:36,children:[e.jsx(F,{className:N({selected:!s}),onClick:()=>i(""),size:"small",children:"All"}),Object.keys(I).map(a=>e.jsx(F,{className:N({selected:a===s}),onClick:()=>i(a),size:"small",children:I[a]},a))]}),e.jsx(St,{align:"center",justify:t?"center":"flex-start",children:t?e.jsx(C,{color:o.white}):e.jsx(bt,{data:r})})]})},vt=p(f)`
  flex: 1;

  .title {
    margin-bottom: 32px;
    font-size: 20px;
    color: ${o.white};
    font-family: Barlow;
    font-size: 22px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  .subtitle {
    color: ${o.GRAY3};
    font-family: Barlow;
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  & .filters {
    overflow-x: auto;
  }
`,St=p(f)`
  min-height: 0;
  overflow: auto;
  flex: 1;
  width: 100%;
`,Ct=({onSearch:t,placeholder:n,activeIcon:s,loadingIcon:l,defaultIcon:d,...x})=>{const[i,r]=h.useState(""),[a,c]=h.useState(!1),g=()=>{r(""),t(""),c(!1)},m=y=>{!y.target.value&&g(),r(y.target.value)},w=y=>{const{value:u}=y.currentTarget;r(u),!a&&(c(!0),setTimeout(()=>{t(u),u||g(),c(!1)},1e3),u||g())},b=()=>a?e.jsx(ue,{children:e.jsx(U,{type:"button",children:l})}):e.jsx(ue,{children:i?e.jsx(U,{onClick:g,type:"button",children:s}):e.jsx(U,{type:"button",children:d})});return e.jsxs(Tt,{children:[e.jsx($t,{autoComplete:"off",autoCorrect:"off",inputProps:{"aria-label":"search sources"},onChange:m,onKeyDown:y=>{y.key==="Enter"&&w(y)},placeholder:n,value:i,...x}),b()]})},ue=p(f)`
  top: -50%;
  right: -3%;
  z-index: 3;
  position: absolute;
  transform: translate(-50%, 50%);
`,U=p(L)`
  font-size: 24px;
`,Tt=p(W)`
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
`,$t=p(G)`
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
    background-color: ${o.BG2};
    padding: 0px 8px 0px 16px !important;
    box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);

    &:focus,
    &:active {
      color: ${o.white};
      background-color: ${o.BG2_ACTIVE_INPUT};
      outline: 1px solid ${o.primaryBlue};
    }

    &:hover {
      background-color: ${o.BG2_ACTIVE_INPUT};
    }

    &::placeholder {
      font-size: 15px;
      text-align: left;
      font-weight: 500;
      line-height: 16px;
      letter-spacing: 0em;
      font-family: Barlow;
      color: ${o.GRAY7};
    }
  }
  width: 100%;
`,_t=({data:t,canEdit:n=!1})=>{const s=P(r=>r.setSources),[l,d]=h.useState(""),x=async(r,a)=>{if(t!=null&&t.length)try{await He(r,a);const c=t==null?void 0:t.findIndex(m=>m.ref_id===r),g=[...t];g[c]={...g[c],source:a.source},s(g)}catch(c){console.warn(c)}},i=async r=>{if(!(!r||!(t!=null&&t.length))){d(r);try{await ye(r),s(t==null?void 0:t.filter(a=>a.ref_id!==r))}catch(a){console.warn(a)}finally{d("")}}};return t!=null&&t.length?e.jsxs(re,{"aria-label":"a dense table",component:"table",id:"sources-table",size:"small",children:[e.jsx(ae,{children:e.jsxs(D,{component:"tr",children:[e.jsx(j,{className:"empty"}),e.jsx(j,{children:"Type"}),e.jsx(j,{align:"left",children:"Source"}),n&&e.jsx(j,{align:"left"}),e.jsx(j,{className:"empty"})]})}),e.jsx(rt,{component:"tbody",children:t==null?void 0:t.map(r=>e.jsxs(le,{children:[e.jsx(j,{className:"empty"}),e.jsx(j,{align:"left",children:I[r.source_type]}),e.jsx(j,{align:"left",children:e.jsx(kt,{condition:n,wrapper:a=>e.jsx(zt,{id:r.ref_id,onSave:c=>x(r.ref_id,{source:c,source_type:r.source_type}),value:r.source,children:a}),children:r.source_type===Z||r.source_type===ee||r.source_type===X?e.jsxs(e.Fragment,{children:[r.source_type===Z&&e.jsxs(V,{href:`${Fe}/${r.source}`,target:"_blank",children:["@",r.source]}),r.source_type===ee&&e.jsx(V,{href:`${r.source}${r.source.includes("?")?"&":"?"}open=system`,target:"_blank",children:r.source}),r.source_type===X&&e.jsx(V,{href:r.source,target:"_blank",children:r.source})]}):e.jsx("div",{children:r.source})})}),n&&e.jsx(j,{align:"left",children:e.jsx("div",{className:"delete-wrapper",id:`delete-${r.source}`,children:l===r.ref_id?e.jsx(C,{color:o.white}):e.jsx(_e,{message:"Are you sure ?",onConfirm:()=>i(r.ref_id),children:e.jsx(E,{className:"centered",children:e.jsx(nt,{})})})})}),e.jsx(j,{className:"empty"})]},r.source))})]}):e.jsxs(At,{children:[e.jsx(tt,{}),e.jsx(_,{className:"text",children:"There is not any results for selected filters"})]})};function kt({condition:t,wrapper:n,children:s}){return t?n(s):s}const zt=({value:t,onSave:n,id:s,children:l})=>{const[d,x]=h.useState(!1),[i,r]=h.useState(t),[a,c]=h.useState(!1),g=async()=>{if(s){c(!0);try{await n(i),x(!1)}catch(m){console.warn(m)}finally{c(!1)}}};return e.jsx("div",{children:d?e.jsxs(Nt,{direction:"row",children:[e.jsx(lt,{className:"editable-cell__input",name:"cell-input",onChange:m=>r(m),value:i}),e.jsx(E,{align:"center",justify:"center",children:a?e.jsx(C,{}):e.jsx(ot,{onClick:g})}),e.jsx(E,{align:"center",className:"secondary",justify:"center",onClick:()=>x(!1),children:e.jsx(st,{})})]}):e.jsxs(Et,{direction:"row",children:[l,e.jsx(E,{onClick:()=>x(!0),children:e.jsx(it,{size:20})})]})})},Nt=p(f)`
  display: flex;
  width: 250px;
  border: 2px solid ${o.lightBlue300};
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
`,E=p(f)`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  cursor: pointer;
  background: transparent;
  color: ${o.lightBlue500};
  &.centered {
    margin: 0 auto;
  }

  & + & {
    margin-left: 4px;
  }
`,At=p(f)`
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
    color: ${o.GRAY6};
  }
`,Et=p(f)`
  display: flex;
  padding: 4px;
  position: relative;

  ${E} {
    visibility: hidden;
  }

  &:hover {
    ${E} {
      visibility: visible;
    }
  }
`,V=p.a`
  color: ${o.white};
  text-decoration: underline;
  &:visited {
    color: ${o.white};
  }
`,Bt=()=>{const[t,n]=h.useState(!0),[s,l]=h.useState(""),[d,x]=P(m=>[m.sources,m.setSources]),[i]=Se(m=>[m.isAdmin]),[r,a]=h.useState("");h.useEffect(()=>{(async()=>{n(!0);try{const w=await ve();x(w.data)}catch(w){console.warn(w)}finally{n(!1)}})()},[x]);const c=m=>{l(s===m||!m?"":m)},g=h.useMemo(()=>d==null?void 0:d.filter(m=>(!s||m.source_type===s)&&(m.source.toLowerCase().startsWith(r.toLowerCase())||m.source.toLowerCase().includes(r.toLowerCase()))),[r,s,d]);return e.jsxs(Rt,{align:"stretch",direction:"column",justify:"flex-end",children:[e.jsx(ce,{align:"center",direction:"row",justify:"space-between",children:e.jsx(_,{className:"title",children:"Sources for this Graph"})}),e.jsx(Lt,{children:e.jsx(Ct,{activeIcon:e.jsx(R,{}),defaultIcon:e.jsx(O,{}),loadingIcon:e.jsx(C,{color:o.PRIMARY_BLUE,size:24}),onSearch:a,placeholder:"Find Topic"})}),e.jsxs(f,{className:"filters",direction:"row",pb:16,px:36,children:[e.jsx(F,{className:N({selected:!s}),onClick:()=>c(""),size:"small",children:"All"}),Object.keys(I).map(m=>e.jsx(F,{className:N({selected:m===s}),onClick:()=>c(m),size:"small",children:I[m]},m))]}),e.jsx(It,{align:"center",justify:t?"center":"flex-start",children:t?e.jsx(C,{color:o.white}):e.jsx(_t,{canEdit:i,data:g})})]})},Rt=p(f)`
  flex: 1;
  .title {
    font-size: 20px;
    color: ${o.white};
    font-family: Barlow;
    font-size: 22px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  & .filters {
    overflow-x: auto;
  }
`,It=p(f)`
  min-height: 0;
  overflow: auto;
  flex: 1;
  width: 100%;
`,Lt=p(f)`
  margin: 0 0 16px 36px;
`,Ft=({onSelect:t,selectedTopic:n})=>{const[s,l]=h.useState(!1),[d,x]=h.useState(""),[i,r]=h.useState([]),[a,c]=h.useState(!1),g=h.useRef(null);h.useEffect(()=>()=>r([]),[r]);const m=async u=>{const v={is_muted:"False",sort_by:Ae,search:u,skip:"0",limit:"1000"};c(!0);try{const S=await Te(v);r(S.data)}catch{r([])}finally{c(!1)}},w=h.useMemo(()=>Ce.debounce(m,300),[]),b=u=>{t(u)},y=u=>{if(x(u),!u){r([]);return}u.length>2&&w(u)};return n?e.jsxs(Dt,{children:[e.jsx("div",{className:"value",children:n.name}),e.jsx(f,{className:"icon",onClick:()=>t(null),children:e.jsx(R,{})})]}):e.jsxs(e.Fragment,{children:[e.jsxs(W,{ref:g,component:"form",onSubmit:u=>u.preventDefault(),sx:{p:"2px 4px",display:"flex",alignItems:"center",width:200},children:[e.jsx(G,{inputProps:{"aria-label":"search topic"},onChange:u=>y(u.target.value),onFocus:()=>l(!0),placeholder:"Search",size:"small",sx:{ml:1,flex:1},value:d}),d&&e.jsxs(e.Fragment,{children:[e.jsx(fe,{"aria-label":"search",onClick:()=>y(""),type:"button",children:e.jsx(R,{})}),e.jsx(ie,{orientation:"vertical",sx:{height:28,m:.5}})]}),e.jsx(fe,{"aria-label":"search",type:"button",children:a?e.jsx(C,{color:o.white,size:24}):e.jsx(O,{})})]}),g.current&&i.length?e.jsx(Mt,{anchorEl:g.current,open:s,placement:"bottom",children:e.jsx(e.Fragment,{children:i.map(u=>e.jsx(Pt,{className:N({active:n===u.ref_id}),onClick:()=>b(u),children:u.name},"option"))})}):null]})},Pt=p(f).attrs({direction:"row",align:"center"})`
  font-family: Barlow;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  overflow: hidden;
  width: 200px;
  color: ${o.GRAY3};
  margin-bottom: 4px;
  cursor: pointer;
  &.active {
    color: ${o.white};
  }
  &:hover {
    color: ${o.white};
  }

  .icon {
    margin-right: 8px;
    width: 9px;
    font-size: 10px;
  }
`,Mt=p(Ee)`
  && {
    z-index: 99999;
    background: ${o.BUTTON1};
    min-width: 200px;
    padding: 16px;
    color: ${o.GRAY3};
    box-shadow: 0px 1px 6px 0px rgba(0, 0, 0, 0.2);
    border-radius: 6px;
    max-height: 200px;
    overflow: auto;
  }
`,Dt=p(f).attrs({direction:"row",justify:"flex-start",align:"center"})`
  .value {
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .icon {
    margin-left: 8px;
    width: 20px;
    height: 20px;
    color: ${o.white};
    background: ${o.primaryBlue};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
`,fe=p(L)`
  font-size: 24px;
`,Ot=({selectedType:t,setSelectedType:n})=>{const[s,l]=h.useState(null),[d,x]=h.useState([]);h.useEffect(()=>{(async()=>{try{const{data:g}=await qe();x(g.edge_types)}catch(g){console.warn(g)}})()},[x]);const i=c=>{l(c.currentTarget)},r=()=>{l(null)},a=c=>{n(c),r()};return e.jsxs("div",{children:[e.jsxs(Wt,{onClick:i,children:[e.jsx("div",{className:"text",children:"Type"}),e.jsx("div",{className:"value",children:t}),e.jsx("div",{className:"icon",children:s?e.jsx(Ie,{}):e.jsx(Be,{})})]}),e.jsx(Yt,{anchorEl:s,anchorOrigin:{vertical:"bottom",horizontal:"left"},anchorPosition:{top:62,left:0},onClose:r,open:!!s,transformOrigin:{vertical:"top",horizontal:"left"},children:e.jsx(Ne,{children:d.map(c=>e.jsxs(Gt,{className:N({active:c===t}),onClick:()=>a(c),children:[e.jsx("span",{className:"icon",children:c===t?e.jsx(Re,{}):null}),e.jsx("span",{children:c})]},c))})})]})},Wt=p(f).attrs({direction:"row",align:"center"})`
  cursor: pointer;
  flex-grow: 1;
  color: ${o.GRAY6};
  font-family: Barlow;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  padding: 0 8px;
  .value,
  .icon {
    color: ${o.white};
  }

  .value {
    margin: 0 8px 0 4px;
  }
`,Gt=p(f).attrs({direction:"row",align:"center"})`
  font-family: Barlow;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  color: ${o.GRAY3};
  height: 27px;
  cursor: pointer;
  &.active {
    color: ${o.white};
  }
  &:hover {
    color: ${o.white};
  }

  .icon {
    margin-right: 8px;
    width: 9px;
    font-size: 10px;
  }
`,Yt=p(se)`
  .MuiPaper-root {
    background: ${o.BUTTON1};
    min-width: 149px;
    padding: 16px;
    color: ${o.GRAY3};
    box-shadow: 0px 1px 6px 0px rgba(0, 0, 0, 0.2);
    border-radius: 6px;
  }
`,Ut=({from:t,onSelect:n,selectedTopic:s,selectedType:l,setSelectedType:d})=>e.jsxs(f,{children:[e.jsx(f,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(f,{align:"center",direction:"row",children:e.jsx(Vt,{children:"Add edge"})})}),e.jsxs(Ht,{mb:12,children:[e.jsxs(H,{children:[e.jsx("div",{className:"label",children:"From"}),e.jsx("div",{children:t})]}),e.jsx(H,{children:e.jsx(Ot,{selectedType:l,setSelectedType:d})}),e.jsxs(H,{children:[e.jsx("div",{className:"label",children:"To"}),e.jsx(Ft,{onSelect:n,selectedTopic:s})]})]})]}),Vt=p(_)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,Ht=p(f).attrs({align:"flex-start",direction:"row",justify:"flex-start"})`
  color: ${o.white};
  .label {
    margin-bottom: 8px;
    font-weight: 500;
    font-size: 14px;
    color: ${o.GRAY3};
  }
`,H=p(f)`
  flex: 1 1 100%;
`,qt=({topic:t,onClose:n})=>{const{close:s}=A("addEdge"),[l]=$(y=>[y.data]),d=ne({mode:"onChange"}),[x,i]=h.useState(!1),[r,a]=h.useState(null),[c,g]=h.useState(""),m=()=>{n(),s()},w=async()=>{if(!(!r||!l)){i(!0);try{await Qe({from:t.ref_id,to:r==null?void 0:r.ref_id,relationship:c});const{ref_id:y}=t,{ref_id:u}=r;if(l){const v={...l};v[y]={...v[y],edgeList:[...v[y].edgeList,c]},v[u]&&(v[u]={...v[u],edgeList:[...v[u].edgeList,c]}),$.setState({data:v})}m()}catch(y){console.warn(y)}finally{i(!1)}}},b=x||!r||!c;return e.jsx(M,{id:"addEdge",kind:"large",onClose:m,preventOutsideClose:!0,children:e.jsxs(oe,{...d,children:[e.jsx(Ut,{from:t.name,onSelect:a,selectedTopic:r,selectedType:c,setSelectedType:g}),e.jsxs(B,{color:"secondary",disabled:b,onClick:w,size:"large",variant:"contained",children:["Confirm",x&&e.jsx(C,{color:o.BLUE_PRESS_STATE,size:10})]})]})})},Qt=()=>e.jsxs(f,{children:[e.jsx(f,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(f,{align:"center",direction:"row",children:e.jsx(Kt,{children:"Edit topic"})})}),e.jsx(f,{mb:12,children:e.jsx(at,{id:"cy-topic",maxLength:50,name:"topic",placeholder:"Add your topic",rules:{...Ke}})})]}),Kt=p(_)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,Jt=({topic:t,onClose:n})=>{const{close:s}=A("editTopic"),[l]=$(b=>[b.data]),d=ne({mode:"onChange"}),{watch:x,setValue:i,reset:r}=d,[a,c]=h.useState(!1);h.useEffect(()=>(t&&i("name",t==null?void 0:t.name),()=>{r()}),[t,i,r]);const g=x("name"),m=()=>{n(),s()},w=async()=>{c(!0);try{if(await $e((t==null?void 0:t.ref_id)||"",{topic:g.trim()}),l){const b={...l};b[t==null?void 0:t.ref_id].name=g.trim(),$.setState({data:b})}m()}catch(b){console.warn(b)}finally{c(!1)}};return e.jsx(M,{id:"editTopic",kind:"regular",onClose:m,preventOutsideClose:!0,children:e.jsxs(oe,{...d,children:[e.jsx(Qt,{}),e.jsxs(B,{color:"secondary",disabled:a,onClick:w,size:"large",variant:"contained",children:["Save",a&&e.jsx(C,{color:o.BLUE_PRESS_STATE,size:10})]})]})})},Xt=({onSelect:t,selectedTopic:n})=>{const[s,l]=h.useState(!1),[d,x]=h.useState(""),[i,r]=h.useState([]),[a,c]=h.useState(!1),g=h.useRef(null);h.useEffect(()=>()=>r([]),[r]);const m=async u=>{const v={is_muted:"False",sort_by:Ae,search:u,skip:"0",limit:"1000"};c(!0);try{const S=await Te(v);r(S.data)}catch{r([])}finally{c(!1)}},w=h.useMemo(()=>Ce.debounce(m,300),[]),b=u=>{t(u)},y=u=>{if(x(u),!u){r([]);return}u.length>2&&w(u)};return n?e.jsxs(tr,{children:[e.jsx("div",{className:"value",children:n.name}),e.jsx(f,{className:"icon",onClick:()=>t(null),children:e.jsx(R,{})})]}):e.jsxs(e.Fragment,{children:[e.jsxs(W,{ref:g,component:"form",onSubmit:u=>u.preventDefault(),sx:{p:"2px 4px",display:"flex",alignItems:"center",width:200},children:[e.jsx(G,{inputProps:{"aria-label":"search topic"},onChange:u=>y(u.target.value),onFocus:()=>l(!0),placeholder:"Search",size:"small",sx:{ml:1,flex:1},value:d}),d&&e.jsxs(e.Fragment,{children:[e.jsx(me,{"aria-label":"search",onClick:()=>y(""),type:"button",children:e.jsx(R,{})}),e.jsx(ie,{orientation:"vertical",sx:{height:28,m:.5}})]}),e.jsx(me,{"aria-label":"search",type:"button",children:a?e.jsx(C,{color:o.white,size:24}):e.jsx(O,{})})]}),g.current&&i.length?e.jsx(er,{anchorEl:g.current,open:s,placement:"bottom",children:e.jsx(e.Fragment,{children:i.map(u=>e.jsx(Zt,{className:N({active:n===u.ref_id}),onClick:()=>b(u),children:u.name},"option"))})}):null]})},Zt=p(f).attrs({direction:"row",align:"center"})`
  font-family: Barlow;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  overflow: hidden;
  width: 200px;
  color: ${o.GRAY3};
  margin-bottom: 4px;
  cursor: pointer;
  &.active {
    color: ${o.white};
  }
  &:hover {
    color: ${o.white};
  }

  .icon {
    margin-right: 8px;
    width: 9px;
    font-size: 10px;
  }
`,er=p(Ee)`
  && {
    z-index: 99999;
    background: ${o.BUTTON1};
    min-width: 200px;
    padding: 16px;
    color: ${o.GRAY3};
    box-shadow: 0px 1px 6px 0px rgba(0, 0, 0, 0.2);
    border-radius: 6px;
    max-height: 200px;
    overflow: auto;
  }
`,tr=p(f).attrs({direction:"row",justify:"flex-start",align:"center"})`
  .value {
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .icon {
    margin-left: 8px;
    width: 20px;
    height: 20px;
    color: ${o.white};
    background: ${o.primaryBlue};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
`,me=p(L)`
  font-size: 24px;
`,rr=({from:t,onSelect:n,selectedTopic:s})=>e.jsxs(f,{children:[e.jsx(f,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(f,{align:"center",direction:"row",children:e.jsx(nr,{children:"Merge topic"})})}),e.jsxs(or,{mb:12,children:[e.jsxs(ge,{children:[e.jsx("div",{className:"label",children:"From"}),e.jsx("div",{children:t})]}),e.jsxs(ge,{ml:24,children:[e.jsx("div",{className:"label",children:"To"}),e.jsx(Xt,{onSelect:n,selectedTopic:s})]})]})]}),nr=p(_)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,or=p(f).attrs({align:"flex-start",direction:"row",justify:"flex-start"})`
  color: ${o.white};
  .label {
    margin-bottom: 8px;
    font-weight: 500;
    font-size: 14px;
    color: ${o.GRAY3};
  }
`,ge=p(f)`
  flex: 1 1 100%;
`,sr=({topic:t,onClose:n})=>{const{close:s}=A("mergeTopic"),[l,d,x]=$(S=>[S.data,S.ids,S.total]),i=ne({mode:"onChange"}),{watch:r,setValue:a,reset:c}=i,[g,m]=h.useState(!1),[w,b]=h.useState(null);h.useEffect(()=>(t&&a("name",t==null?void 0:t.name),()=>{c()}),[t,a,c]);const y=r("name"),u=()=>{n(),s()},v=async()=>{if(!(!w||!l)){m(!0);try{await Je({from:t.ref_id,to:w==null?void 0:w.ref_id});const{ref_id:S}=t;if(l[S]={...l[S],edgeList:[Pe],edgeCount:l[S].edgeCount-1},$.setState({ids:d.filter(k=>k!==w.ref_id),total:x-1}),l){const k={...l};k[t==null?void 0:t.ref_id].name=y.trim(),$.setState({data:k})}u()}catch(S){console.warn(S)}finally{m(!1)}}};return e.jsx(M,{id:"mergeTopic",kind:"regular",onClose:u,preventOutsideClose:!0,children:e.jsxs(oe,{...i,children:[e.jsx(rr,{from:t.name,onSelect:b,selectedTopic:w}),e.jsxs(B,{color:"secondary",disabled:g,onClick:v,size:"large",variant:"contained",children:["Merge topics",g&&e.jsx(C,{color:o.BLUE_PRESS_STATE,size:10})]})]})})},ir=()=>{const[t,n]=$(i=>[i.filters,i.setFilters]),[s,l]=h.useState(""),d=i=>{i.preventDefault(),n({search:s})},x=()=>{l(""),t.search&&n({search:""})};return e.jsxs(W,{component:"form",onSubmit:d,sx:{p:"2px 4px",display:"flex",alignItems:"center",width:300},children:[e.jsx(G,{autoComplete:"off",autoCorrect:"off",inputProps:{"aria-label":"search topic"},onChange:i=>l(i.target.value),placeholder:"Search",size:"small",spellCheck:"false",sx:{ml:1,flex:1},value:s}),s&&e.jsxs(e.Fragment,{children:[e.jsx(je,{"aria-label":"search",onClick:x,type:"button",children:e.jsx(R,{})}),e.jsx(ie,{orientation:"vertical",sx:{height:28,m:.5}})]}),e.jsx(je,{"aria-label":"search",onClick:d,type:"button",children:e.jsx(O,{})})]})},je=p(L)`
  font-size: 24px;
`,lr=({onChangeFilter:t,currentFilter:n})=>{const[s,l]=h.useState(null),d=r=>{l(r.currentTarget)},x=()=>{l(null)},i=r=>{t(r),x()};return e.jsxs("div",{children:[e.jsxs(ar,{onClick:d,children:[e.jsx("div",{className:"text",children:"Sort By"}),e.jsx("div",{className:"value",children:Y[n]}),e.jsx("div",{className:"icon",children:s?e.jsx(Ie,{}):e.jsx(Be,{})})]}),e.jsx(dr,{anchorEl:s,anchorOrigin:{vertical:"bottom",horizontal:"left"},anchorPosition:{top:62,left:0},onClose:x,open:!!s,transformOrigin:{vertical:"top",horizontal:"left"},children:e.jsx(Ne,{children:Object.keys(Y).map(r=>e.jsxs(cr,{className:N({active:r===n}),onClick:()=>i(r),children:[e.jsx("span",{className:"icon",children:r===n?e.jsx(Re,{}):null}),e.jsx("span",{children:Y[r]})]},r))})})]})},ar=p(f).attrs({direction:"row",align:"center"})`
  cursor: pointer;
  flex-grow: 1;
  color: ${o.GRAY6};
  font-family: Barlow;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  padding: 0 8px;
  .value,
  .icon {
    color: ${o.white};
  }

  .value {
    margin: 0 8px 0 4px;
  }
`,cr=p(f).attrs({direction:"row",align:"center"})`
  font-family: Barlow;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  color: ${o.GRAY3};
  height: 27px;
  cursor: pointer;
  &.active {
    color: ${o.white};
  }
  &:hover {
    color: ${o.white};
  }

  .icon {
    margin-right: 8px;
    width: 9px;
    font-size: 10px;
  }
`,dr=p(se)`
  && {
    z-index: 99999;
  }

  .MuiPaper-root {
    background: ${o.BUTTON1};
    min-width: 149px;
    padding: 16px;
    color: ${o.GRAY3};
    box-shadow: 0px 1px 6px 0px rgba(0, 0, 0, 0.2);
    border-radius: 6px;
  }
`,hr=({topic:t,onClick:n})=>{const[s,l]=$(a=>[a.ids,a.total]),[d,x]=h.useState(!1),i=t.date_added_to_graph.toString(),r=async(a,c)=>{x(!0);try{await $e(a,{is_muted:c}),$.setState({ids:s.filter(g=>g!==a),total:l-1})}catch(g){console.warn(g)}};return e.jsxs(le,{children:[e.jsx(j,{className:"empty"}),e.jsx(j,{children:t.name}),e.jsx(j,{children:t.edgeCount}),e.jsx(j,{children:t.edgeList.join(", ")}),e.jsx(j,{children:e.jsx("span",{children:new Date(Number(i)*1e3).toDateString()})}),e.jsx(j,{className:"cell-center",children:e.jsx(f,{direction:"row",justify:"space-between",children:e.jsx("div",{className:"approve-wrapper",children:d?e.jsx(C,{color:o.white,size:16}):e.jsx(e.Fragment,{children:t.is_muted?e.jsx(we,{className:"centered",onClick:()=>r(t.ref_id,!1),children:e.jsx(ke,{color:o.primaryGreen,fontSize:24})}):e.jsx(we,{className:"centered",onClick:()=>r(t.ref_id,!0),children:e.jsx(ze,{color:o.primaryRed,fontSize:24})})})})})}),e.jsx(j,{children:e.jsx(L,{onClick:a=>n(a,t.ref_id),children:e.jsx(dt,{})})})]},t.name)},we=p(f)`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  cursor: pointer;
  background: transparent;
  color: ${o.lightBlue500};
  &.centered {
    margin: 0 auto;
  }

  & + & {
    margin-left: 4px;
  }
`,pr=h.memo(hr),xr=({showMuted:t,onTopicEdit:n})=>{const[s,l]=he.useState(null),[d,x]=he.useState(""),[i,r]=$(b=>[b.data,b.ids]),a=h.useCallback((b,y)=>{l(b.currentTarget),x(y)},[]),c=()=>{l(null)},g=b=>{n(d,b),c()},m=!!s,w=m?"simple-popover":void 0;return i?e.jsx(e.Fragment,{children:Object.keys(i).length?e.jsxs(e.Fragment,{children:[e.jsxs(re,{component:"table",children:[e.jsx(ae,{children:e.jsxs(D,{component:"tr",children:[e.jsx(j,{className:"empty"}),e.jsx(j,{children:"Type"}),e.jsx(j,{children:"Edge Count"}),e.jsx(j,{children:"Edge list"}),e.jsx(j,{children:"Date"}),e.jsx(j,{children:t?"Unmute":"Mute"}),e.jsx(j,{})]})}),i&&e.jsx("tbody",{children:r==null?void 0:r.map(b=>e.jsx(pr,{onClick:a,topic:i[b]},b))})]}),d?e.jsxs(ur,{anchorEl:s,anchorOrigin:{vertical:"bottom",horizontal:"right"},id:w,onClose:c,open:m,transformOrigin:{vertical:"top",horizontal:"right"},children:[e.jsx(q,{onClick:()=>g("editTopic"),children:"Rename"}),i[d].edgeList.includes(Pe)?null:e.jsx(q,{onClick:()=>g("mergeTopic"),children:"Merge"}),e.jsx(q,{onClick:()=>g("addEdge"),children:"Add edge"})]}):null]}):e.jsxs(f,{children:[e.jsx(_,{children:"There is not any results for selected filters"}),e.jsx(te,{})]})}):e.jsxs(f,{children:[e.jsx(_,{children:"There is not any results for selected filters"}),e.jsx(te,{})]})},q=p(f).attrs({direction:"row",px:16,py:8})`
  cursor: pointer;
  background: ${o.BUTTON1};
  color: ${o.white};

  &:hover {
    background: ${o.BUTTON1_HOVER};
    color: ${o.GRAY3};
  }

  & + & {
    border-top: 1px solid ${o.black};
  }
`,ur=p(se)`
  && {
    z-index: 9999;
  }
  .MuiPaper-root {
    min-width: 149px;
    color: ${o.GRAY3};
    box-shadow: 0px 1px 6px 0px rgba(0, 0, 0, 0.2);
    border-radius: 6px;
    z-index: 1;
    font-family: Barlow;
    font-size: 14px;
    font-weight: 500;
  }
`,fr=()=>{const[t,n]=h.useState(!1),[s,l,d,x,i,r,a]=$(T=>[T.data,T.ids,T.total,T.setTopics,T.filters,T.setFilters,T.terminate]),{open:c}=A("editTopic"),{open:g}=A("mergeTopic"),{open:m}=A("addEdge"),[w,b]=h.useState(null),y={editTopic:c,mergeTopic:g,addEdge:m},u=h.useRef([]);h.useEffect(()=>{l.length&&(u.current=l)},[l]),h.useEffect(()=>{(async()=>{try{n(!0),await x()}catch{console.error("err")}finally{n(!1)}})()},[x,i]);const v=async()=>{try{n(!0),r({page:i.page+1})}catch(T){console.error("Error loading more data:",T)}finally{n(!1)}};h.useEffect(()=>()=>{a()},[a]);const S=T=>{r({sortBy:T})},k=()=>{b(null)},Me=(T,de)=>{s&&(b(s[T]),typeof y[de]=="function"&&y[de]())};return e.jsxs(e.Fragment,{children:[e.jsxs(mr,{direction:"column",justify:"flex-end",children:[e.jsxs(ce,{align:"flex-start",direction:"row",justify:"space-between",children:[e.jsx(_,{className:"title",children:"Topics"}),e.jsxs(B,{disabled:t,onClick:()=>r({is_muted:!i.is_muted}),size:"medium",children:[i.is_muted?"Show Unmuted":"Show Muted",t&&e.jsx(C,{color:o.BLUE_PRESS_STATE,size:10})]})]}),e.jsxs(jr,{children:[e.jsx(ir,{}),e.jsx(lr,{currentFilter:i.sortBy,onChangeFilter:S})]}),e.jsx(gr,{align:"center",justify:t&&!s?"center":"flex-start",children:t&&!s?e.jsx(C,{color:o.white}):e.jsxs(e.Fragment,{children:[e.jsx(xr,{onTopicEdit:Me,showMuted:i.is_muted}),d>l.length?e.jsxs(B,{className:"load-more",disabled:t,onClick:v,children:["Load more",t&&e.jsx(C,{color:o.BLUE_PRESS_STATE,size:10})]}):null]})})]}),w&&e.jsx(sr,{onClose:k,topic:w}),w&&e.jsx(Jt,{onClose:k,topic:w}),w&&e.jsx(qt,{onClose:k,topic:w})]})},mr=p(f)`
  flex: 1;

  .title {
    font-size: 20px;
    color: ${o.white};
    font-family: Barlow;
    font-size: 22px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  .subtitle {
    color: ${o.GRAY3};
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
`,gr=p(f)`
  min-height: 0;
  overflow: auto;
  flex: 1;
  width: 100%;
`,jr=p(f).attrs({direction:"row",align:"center",justify:"space-between"})`
  padding: 0 36px;
  margin-bottom: 32px;
`,Q=t=>{const{children:n,value:s,index:l,...d}=t;return s===l?e.jsx(yr,{"aria-labelledby":`simple-tab-${l}`,hidden:s!==l,id:`simple-tabpanel-${l}`,role:"tabpanel",...d,children:n}):null};function K(t){return{id:`simple-tab-${t}`,"aria-controls":`simple-tabpanel-${t}`}}const wr=()=>{const[t,n]=h.useState(0),[s]=Se(x=>[x.isAdmin]),[l]=Xe(x=>[x.queuedSourcesFeatureFlag]),d=(x,i)=>{n(i)};return e.jsxs(vr,{direction:"column",children:[e.jsxs(br,{"aria-label":"sources tabs",onChange:d,value:t,children:[e.jsx(J,{disableRipple:!0,label:"Sources table",...K(0)}),s&&l?e.jsx(J,{color:o.white,disableRipple:!0,label:"Queued sources",...K(1)}):null,s&&e.jsx(J,{color:o.white,disableRipple:!0,label:"Topics",...K(1)})]}),e.jsx(Q,{index:0,value:t,children:e.jsx(Bt,{})}),e.jsx(Q,{index:1,value:t,children:e.jsx(yt,{})}),e.jsx(Q,{index:2,value:t,children:e.jsx(fr,{})})]})},br=p(ht)`
  && {
    background: rgba(0, 0, 0, 0.2);

    .MuiTabs-indicator {
      background: ${o.primaryBlue};
    }
  }
`,J=p(pt)`
  && {
    padding: 30px 0 24px;
    color: ${o.GRAY6};
    margin-left: 34px;
    font-family: Barlow;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;

    &.Mui-selected {
      color: ${o.white};
    }
  }
`,yr=p(f)`
  display: flex;
  flex: 1;
  min-height: 572px;
  padding: 20px 0;
  max-height: 572px;
`,vr=p(f)`
  min-height: 0;
  flex: 1;
`,Mr=()=>{const{close:t}=A("sourcesTable");return e.jsx(M,{background:"BG1",id:"sourcesTable",kind:"large",noWrap:!0,onClose:t,children:e.jsx(wr,{})})};export{Mr as SourcesTableModal};
