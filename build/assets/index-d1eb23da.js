import{f as d,h as n,T as _,F as p,R as J,v as X,Y as Z,i as F,r as h,j as e,o as Fe,p as Pe,q as we,l as z,t as ye,w as Me,x as be,y as Se,z as ve,A as Oe,B as Ge,C as De,D as Te,E as We,G as de,I as Ye}from"./index-b85f35cf.js";import{B as P}from"./index-0c223900.js";import{u as E}from"./index-b9c9b7e2.js";import{T as Ue,a as M,b as Ve,F as ee,M as te,C as Ce,N as He,c as qe,D as se,d as $e}from"./ChevronUpIcon-6e1fca04.js";import{B,C as T,I as R,b as A,S as O,c as ne,F as oe}from"./react-toastify.esm-ce67a4f9.js";import{M as _e,a as ke,b as Qe,c as Ke,d as Je,e as Xe}from"./index.esm-ac56504e.js";import{P as G,I as D,a as re,F as ze}from"./Popover-28c1573e.js";import{B as Ze,T as et}from"./index-e6f0fb8d.js";import{A as Ee,u as $}from"./index-856cc0ad.js";import{P as Ne}from"./Popper-704ca55a.js";import{C as Be}from"./CheckIcon-b94a1aa2.js";import{C as Ae}from"./ChevronDownIcon-cf5b6e54.js";import{S as tt}from"./SettingsIcon-cd476525.js";import{T as st,a as nt}from"./index-341edfe1.js";import"./useSlotProps-b8a587b0.js";import"./InfoIcon-de2f1e11.js";const j=d(Ue)`
  && {
    color: ${n.white};
    border: none;
    padding: 6px 27px 6px 0;
    color: ${n.GRAY3};
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
`,le=d(M)`
  && {
    height: 48px;
    padding: 0 36px;
  }
  &:nth-child(odd) {
    background-color: ${n.BG3};
  }
`,ie=d(Ve)`
  && {
    border-bottom: 1px solid ${n.black};
  }

  ${j} {
    color: ${n.white};
    font-family: Barlow;
    font-size: 11px;
    font-style: normal;
    font-weight: 700;
    line-height: 18px; /* 163.636% */
    letter-spacing: 1.1px;
    text-transform: uppercase;
  }
`,L=d(B)`
  &.selected {
    background: ${n.white};
    color: ${n.BG1};
    pointer-events: none;
  }

  & + & {
    margin-left: 16px;
  }
`,ae=d(p)`
  margin-bottom: 16px;
  padding: 0 36px;
  ${_} {
    margin-bottom: 0;
  }
`,I={[J]:"RSS link",[X]:"Twitter Handle",[Z]:"Youtube channel"},ot="date",rt="edge_count",lt="alphabetically",W={[ot]:"Date",[rt]:"Edge Count",[lt]:"Alphabetically"},Ie="https://twitter.com",Re="IS_ALIAS",it=({data:t})=>{const a=F(o=>o.setQueuedSources),[r,l]=h.useState(""),x=async o=>{if(t!=null&&t.length)try{const s=await Fe.enable();await Pe(o,s.pubkey),a(t.filter(i=>i.ref_id!==o))}catch(s){console.warn(s)}},f=async o=>{if(!(!o||!(t!=null&&t.length))){l(o);try{await we(o),a(t==null?void 0:t.filter(s=>s.ref_id!==o))}catch(s){console.warn(s)}finally{l("")}}};return t!=null&&t.length?e.jsxs(te,{component:"table",children:[e.jsx(ie,{children:e.jsxs(M,{component:"tr",children:[e.jsx(j,{className:"empty"}),e.jsx(j,{children:"Type"}),e.jsx(j,{children:"Source"}),e.jsx(j,{}),e.jsx(j,{className:"empty"})]})}),(t==null?void 0:t.length)&&e.jsx("tbody",{children:t==null?void 0:t.map(o=>e.jsxs(le,{children:[e.jsx(j,{className:"empty"}),e.jsx(j,{children:I[o.source_type]}),e.jsx(j,{width:"268px",children:o.source_type==="twitter_handle"?e.jsxs(xe,{href:`${Ie}/${o.source}?open=system`,target:"_blank",children:["@",o.source]}):e.jsx(xe,{href:`${o.source}?open=system`,target:"_blank",children:o.source})}),e.jsx(j,{className:"cell-center",children:e.jsxs(p,{direction:"row",justify:"space-between",children:[e.jsx("div",{className:"approve-wrapper",children:e.jsx(he,{className:"centered",onClick:()=>x(o.ref_id),children:e.jsx(_e,{color:n.primaryGreen,fontSize:24})})}),e.jsx("div",{className:"delete-wrapper",children:r===o.ref_id?e.jsx(T,{color:n.white,size:16}):e.jsx(Ce,{message:"Are you sure ?",onConfirm:()=>f(o.ref_id),children:e.jsx(he,{className:"centered",children:e.jsx(ke,{color:n.primaryRed,fontSize:24})})})})]})}),e.jsx(j,{className:"empty"})]},o.source))})]}):e.jsxs(p,{children:[e.jsx(_,{children:"There is not any results for selected filters"}),e.jsx(ee,{})]})},he=d(p)`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  cursor: pointer;
  background: transparent;
  color: ${n.lightBlue500};
  &.centered {
    margin: 0 auto;
  }

  & + & {
    margin-left: 4px;
  }
`,xe=d.a`
  color: ${n.white};
  text-decoration: underline;
  &:visited {
    color: ${n.white};
  }
  &:hover {
    cursor: pointer;
  }
`,at=()=>{const[t,a]=h.useState(!0),[r,l]=h.useState(""),[x,f]=F(i=>[i.queuedSources,i.setQueuedSources]);h.useEffect(()=>{(async()=>{a(!0);try{const c=await ye({approved:"False"});f(c.data)}catch(c){console.warn(c)}finally{a(!1)}})()},[f]);const o=i=>{l(r===i||!i?"":i)},s=x==null?void 0:x.filter(i=>!r||i.source_type===r);return e.jsxs(ct,{align:"stretch",direction:"column",justify:"flex-end",children:[e.jsxs(ae,{align:"flex-start",justify:"space-between",children:[e.jsx(_,{className:"title",children:"Queued Sources"}),e.jsx(_,{className:"subtitle",children:"This is a queue of pending sources waiting for approval or denial from graph users. If you think a source will provide good content for the graph, you can pay to approve it. Think of this as an investment: you pay to add it to the source table, and if the content is popular you will earn from it. If content is not relevant to the graph, you should deny it."})]}),e.jsxs(p,{className:"filters",direction:"row",pb:16,px:36,children:[e.jsx(L,{className:z({selected:!r}),onClick:()=>o(""),size:"small",children:"All"}),Object.keys(I).map(i=>e.jsx(L,{className:z({selected:i===r}),onClick:()=>o(i),size:"small",children:I[i]},i))]}),e.jsx(dt,{align:"center",justify:t?"center":"flex-start",children:t?e.jsx(T,{color:n.white}):e.jsx(it,{data:s})})]})},ct=d(p)`
  flex: 1;

  .title {
    margin-bottom: 32px;
    font-size: 20px;
    color: ${n.white};
    font-family: Barlow;
    font-size: 22px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  .subtitle {
    color: ${n.GRAY3};
    font-family: Barlow;
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  & .filters {
    overflow-x: auto;
  }
`,dt=d(p)`
  min-height: 0;
  overflow: auto;
  flex: 1;
  width: 100%;
`,ht=({onSearch:t,placeholder:a,activeIcon:r,loadingIcon:l,defaultIcon:x,...f})=>{const[o,s]=h.useState(""),[i,c]=h.useState(!1),g=()=>{s(""),t(""),c(!1)},m=b=>{!b.target.value&&g(),s(b.target.value)},w=b=>{const{value:u}=b.currentTarget;s(u),!i&&(c(!0),setTimeout(()=>{t(u),u||g(),c(!1)},1e3),u||g())},y=()=>i?e.jsx(pe,{children:e.jsx(Y,{type:"button",children:l})}):e.jsx(pe,{children:o?e.jsx(Y,{onClick:g,type:"button",children:r}):e.jsx(Y,{type:"button",children:x})});return e.jsxs(xt,{children:[e.jsx(pt,{autoComplete:"off",autoCorrect:"off",inputProps:{"aria-label":"search sources"},onChange:m,onKeyDown:b=>{b.key==="Enter"&&w(b)},placeholder:a,value:o,...f}),y()]})},pe=d(p)`
  top: -50%;
  right: -3%;
  z-index: 3;
  position: absolute;
  transform: translate(-50%, 50%);
`,Y=d(R)`
  font-size: 24px;
`,xt=d(G)`
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
`,pt=d(D)`
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
    background-color: ${n.BG2};
    padding: 0px 8px 0px 16px !important;
    box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);

    &:focus,
    &:active {
      color: ${n.white};
      background-color: ${n.BG2_ACTIVE_INPUT};
      outline: 1px solid ${n.primaryBlue};
    }

    &:hover {
      background-color: ${n.BG2_ACTIVE_INPUT};
    }

    &::placeholder {
      font-size: 15px;
      text-align: left;
      font-weight: 500;
      line-height: 16px;
      letter-spacing: 0em;
      font-family: Barlow;
      color: ${n.GRAY7};
    }
  }
  width: 100%;
`,ut=({data:t,canEdit:a=!1})=>{const r=F(s=>s.setSources),[l,x]=h.useState(""),f=async(s,i)=>{if(t!=null&&t.length)try{await Me(s,i);const c=t==null?void 0:t.findIndex(m=>m.ref_id===s),g=[...t];g[c]={...g[c],source:i.source},r(g)}catch(c){console.warn(c)}},o=async s=>{if(!(!s||!(t!=null&&t.length))){x(s);try{await we(s),r(t==null?void 0:t.filter(i=>i.ref_id!==s))}catch(i){console.warn(i)}finally{x("")}}};return t!=null&&t.length?e.jsxs(te,{"aria-label":"a dense table",component:"table",id:"sources-table",size:"small",children:[e.jsx(ie,{children:e.jsxs(M,{component:"tr",children:[e.jsx(j,{className:"empty"}),e.jsx(j,{children:"Type"}),e.jsx(j,{align:"left",children:"Source"}),a&&e.jsx(j,{align:"left"}),e.jsx(j,{className:"empty"})]})}),e.jsx(qe,{component:"tbody",children:t==null?void 0:t.map(s=>e.jsxs(le,{children:[e.jsx(j,{className:"empty"}),e.jsx(j,{align:"left",children:I[s.source_type]}),e.jsx(j,{align:"left",children:e.jsx(ft,{condition:a,wrapper:i=>e.jsx(mt,{id:s.ref_id,onSave:c=>f(s.ref_id,{source:c,source_type:s.source_type}),value:s.source,children:i}),children:s.source_type===X||s.source_type===Z||s.source_type===J?e.jsxs(e.Fragment,{children:[s.source_type===X&&e.jsxs(U,{href:`${Ie}/${s.source}`,target:"_blank",children:["@",s.source]}),s.source_type===Z&&e.jsx(U,{href:`${s.source}${s.source.includes("?")?"&":"?"}open=system`,target:"_blank",children:s.source}),s.source_type===J&&e.jsx(U,{href:s.source,target:"_blank",children:s.source})]}):e.jsx("div",{children:s.source})})}),a&&e.jsx(j,{align:"left",children:e.jsx("div",{className:"delete-wrapper",id:`delete-${s.source}`,children:l===s.ref_id?e.jsx(T,{color:n.white}):e.jsx(Ce,{message:"Are you sure ?",onConfirm:()=>o(s.ref_id),children:e.jsx(N,{className:"centered",children:e.jsx(Qe,{})})})})}),e.jsx(j,{className:"empty"})]},s.source))})]}):e.jsxs(jt,{children:[e.jsx(He,{}),e.jsx(_,{className:"text",children:"There is not any results for selected filters"})]})};function ft({condition:t,wrapper:a,children:r}){return t?a(r):r}const mt=({value:t,onSave:a,id:r,children:l})=>{const[x,f]=h.useState(!1),[o,s]=h.useState(t),[i,c]=h.useState(!1),g=async()=>{if(r){c(!0);try{await a(o),f(!1)}catch(m){console.warn(m)}finally{c(!1)}}};return e.jsx("div",{children:x?e.jsxs(gt,{direction:"row",children:[e.jsx(Ze,{className:"editable-cell__input",name:"cell-input",onChange:m=>s(m),value:o}),e.jsx(N,{align:"center",justify:"center",children:i?e.jsx(T,{}):e.jsx(Ke,{onClick:g})}),e.jsx(N,{align:"center",className:"secondary",justify:"center",onClick:()=>f(!1),children:e.jsx(Je,{})})]}):e.jsxs(wt,{direction:"row",children:[l,e.jsx(N,{onClick:()=>f(!0),children:e.jsx(Xe,{size:20})})]})})},gt=d(p)`
  display: flex;
  width: 250px;
  border: 2px solid ${n.lightBlue300};
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
`,N=d(p)`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  cursor: pointer;
  background: transparent;
  color: ${n.lightBlue500};
  &.centered {
    margin: 0 auto;
  }

  & + & {
    margin-left: 4px;
  }
`,jt=d(p)`
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
    color: ${n.GRAY6};
  }
`,wt=d(p)`
  display: flex;
  padding: 4px;
  position: relative;

  ${N} {
    visibility: hidden;
  }

  &:hover {
    ${N} {
      visibility: visible;
    }
  }
`,U=d.a`
  color: ${n.white};
  text-decoration: underline;
  &:visited {
    color: ${n.white};
  }
`,yt=()=>{const[t,a]=h.useState(!0),[r,l]=h.useState(""),[x,f]=F(m=>[m.sources,m.setSources]),[o]=be(m=>[m.isAdmin]),[s,i]=h.useState("");h.useEffect(()=>{(async()=>{a(!0);try{const w=await ye();f(w.data)}catch(w){console.warn(w)}finally{a(!1)}})()},[f]);const c=m=>{l(r===m||!m?"":m)},g=h.useMemo(()=>x==null?void 0:x.filter(m=>(!r||m.source_type===r)&&(m.source.toLowerCase().startsWith(s.toLowerCase())||m.source.toLowerCase().includes(s.toLowerCase()))),[s,r,x]);return e.jsxs(bt,{align:"stretch",direction:"column",justify:"flex-end",children:[e.jsx(ae,{align:"center",direction:"row",justify:"space-between",children:e.jsx(_,{className:"title",children:"Sources for this Graph"})}),e.jsx(vt,{children:e.jsx(ht,{activeIcon:e.jsx(A,{}),defaultIcon:e.jsx(O,{}),loadingIcon:e.jsx(T,{color:n.PRIMARY_BLUE,size:24}),onSearch:i,placeholder:"Find Topic"})}),e.jsxs(p,{className:"filters",direction:"row",pb:16,px:36,children:[e.jsx(L,{className:z({selected:!r}),onClick:()=>c(""),size:"small",children:"All"}),Object.keys(I).map(m=>e.jsx(L,{className:z({selected:m===r}),onClick:()=>c(m),size:"small",children:I[m]},m))]}),e.jsx(St,{align:"center",justify:t?"center":"flex-start",children:t?e.jsx(T,{color:n.white}):e.jsx(ut,{canEdit:o,data:g})})]})},bt=d(p)`
  flex: 1;
  .title {
    font-size: 20px;
    color: ${n.white};
    font-family: Barlow;
    font-size: 22px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  & .filters {
    overflow-x: auto;
  }
`,St=d(p)`
  min-height: 0;
  overflow: auto;
  flex: 1;
  width: 100%;
`,vt=d(p)`
  margin: 0 0 16px 36px;
`,Tt=({onSelect:t,selectedTopic:a})=>{const[r,l]=h.useState(!1),[x,f]=h.useState(""),[o,s]=h.useState([]),[i,c]=h.useState(!1),g=h.useRef(null);h.useEffect(()=>()=>s([]),[s]);const m=async u=>{const v={muted:"False",sort_by:Ee,search:u,skip:"0",limit:"1000"};c(!0);try{const S=await ve(v);s(S.data)}catch{s([])}finally{c(!1)}},w=h.useMemo(()=>Se.debounce(m,300),[]),y=u=>{t(u)},b=u=>{if(f(u),!u){s([]);return}u.length>2&&w(u)};return a?e.jsxs(_t,{children:[e.jsx("div",{className:"value",children:a.name}),e.jsx(p,{className:"icon",onClick:()=>t(null),children:e.jsx(A,{})})]}):e.jsxs(e.Fragment,{children:[e.jsxs(G,{ref:g,component:"form",onSubmit:u=>u.preventDefault(),sx:{p:"2px 4px",display:"flex",alignItems:"center",width:200},children:[e.jsx(D,{inputProps:{"aria-label":"search topic"},onChange:u=>b(u.target.value),onFocus:()=>l(!0),placeholder:"Search",size:"small",sx:{ml:1,flex:1},value:x}),x&&e.jsxs(e.Fragment,{children:[e.jsx(ue,{"aria-label":"search",onClick:()=>b(""),type:"button",children:e.jsx(A,{})}),e.jsx(se,{orientation:"vertical",sx:{height:28,m:.5}})]}),e.jsx(ue,{"aria-label":"search",type:"button",children:i?e.jsx(T,{color:n.white,size:24}):e.jsx(O,{})})]}),g.current&&o.length?e.jsx($t,{anchorEl:g.current,open:r,placement:"bottom",children:e.jsx(e.Fragment,{children:o.map(u=>e.jsx(Ct,{className:z({active:a===u.ref_id}),onClick:()=>y(u),children:u.name},"option"))})}):null]})},Ct=d(p).attrs({direction:"row",align:"center"})`
  font-family: Barlow;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  overflow: hidden;
  width: 200px;
  color: ${n.GRAY3};
  margin-bottom: 4px;
  cursor: pointer;
  &.active {
    color: ${n.white};
  }
  &:hover {
    color: ${n.white};
  }

  .icon {
    margin-right: 8px;
    width: 9px;
    font-size: 10px;
  }
`,$t=d(Ne)`
  && {
    z-index: 99999;
    background: ${n.BUTTON1};
    min-width: 200px;
    padding: 16px;
    color: ${n.GRAY3};
    box-shadow: 0px 1px 6px 0px rgba(0, 0, 0, 0.2);
    border-radius: 6px;
    max-height: 200px;
    overflow: auto;
  }
`,_t=d(p).attrs({direction:"row",justify:"flex-start",align:"center"})`
  .value {
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .icon {
    margin-left: 8px;
    width: 20px;
    height: 20px;
    color: ${n.white};
    background: ${n.primaryBlue};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
`,ue=d(R)`
  font-size: 24px;
`,kt=({selectedType:t,setSelectedType:a})=>{const[r,l]=h.useState(null),[x,f]=h.useState([]);h.useEffect(()=>{(async()=>{try{const{data:g}=await Oe();f(g.edge_types)}catch(g){console.warn(g)}})()},[f]);const o=c=>{l(c.currentTarget)},s=()=>{l(null)},i=c=>{a(c),s()};return e.jsxs("div",{children:[e.jsxs(zt,{onClick:o,children:[e.jsx("div",{className:"text",children:"Type"}),e.jsx("div",{className:"value",children:t}),e.jsx("div",{className:"icon",children:r?e.jsx($e,{}):e.jsx(Ae,{})})]}),e.jsx(Nt,{anchorEl:r,anchorOrigin:{vertical:"bottom",horizontal:"left"},anchorPosition:{top:62,left:0},onClose:s,open:!!r,transformOrigin:{vertical:"top",horizontal:"left"},children:e.jsx(ze,{children:x.map(c=>e.jsxs(Et,{className:z({active:c===t}),onClick:()=>i(c),children:[e.jsx("span",{className:"icon",children:c===t?e.jsx(Be,{}):null}),e.jsx("span",{children:c})]},c))})})]})},zt=d(p).attrs({direction:"row",align:"center"})`
  cursor: pointer;
  flex-grow: 1;
  color: ${n.GRAY6};
  font-family: Barlow;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  padding: 0 8px;
  .value,
  .icon {
    color: ${n.white};
  }

  .value {
    margin: 0 8px 0 4px;
  }
`,Et=d(p).attrs({direction:"row",align:"center"})`
  font-family: Barlow;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  color: ${n.GRAY3};
  height: 27px;
  cursor: pointer;
  &.active {
    color: ${n.white};
  }
  &:hover {
    color: ${n.white};
  }

  .icon {
    margin-right: 8px;
    width: 9px;
    font-size: 10px;
  }
`,Nt=d(re)`
  .MuiPaper-root {
    background: ${n.BUTTON1};
    min-width: 149px;
    padding: 16px;
    color: ${n.GRAY3};
    box-shadow: 0px 1px 6px 0px rgba(0, 0, 0, 0.2);
    border-radius: 6px;
  }
`,Bt=({from:t,onSelect:a,selectedTopic:r,selectedType:l,setSelectedType:x})=>e.jsxs(p,{children:[e.jsx(p,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(p,{align:"center",direction:"row",children:e.jsx(At,{children:"Add edge"})})}),e.jsxs(It,{mb:12,children:[e.jsxs(V,{children:[e.jsx("div",{className:"label",children:"From"}),e.jsx("div",{children:t})]}),e.jsx(V,{children:e.jsx(kt,{selectedType:l,setSelectedType:x})}),e.jsxs(V,{children:[e.jsx("div",{className:"label",children:"To"}),e.jsx(Tt,{onSelect:a,selectedTopic:r})]})]})]}),At=d(_)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,It=d(p).attrs({align:"flex-start",direction:"row",justify:"flex-start"})`
  color: ${n.white};
  .label {
    margin-bottom: 8px;
    font-weight: 500;
    font-size: 14px;
    color: ${n.GRAY3};
  }
`,V=d(p)`
  flex: 1 1 100%;
`,Rt=({topic:t,onClose:a})=>{const{close:r}=E("addEdge"),[l]=$(b=>[b.data]),x=ne({mode:"onChange"}),[f,o]=h.useState(!1),[s,i]=h.useState(null),[c,g]=h.useState(""),m=()=>{a(),r()},w=async()=>{if(!(!s||!l)){o(!0);try{await Ge({from:t.ref_id,to:s==null?void 0:s.ref_id,relationship:c});const{ref_id:b}=t,{ref_id:u}=s;if(l){const v={...l};v[b]={...v[b],edgeList:[...v[b].edgeList,c]},v[u]&&(v[u]={...v[u],edgeList:[...v[u].edgeList,c]}),$.setState({data:v})}m()}catch(b){console.warn(b)}finally{o(!1)}}},y=f||!s||!c;return e.jsx(P,{id:"addEdge",kind:"large",onClose:m,preventOutsideClose:!0,children:e.jsxs(oe,{...x,children:[e.jsx(Bt,{from:t.name,onSelect:i,selectedTopic:s,selectedType:c,setSelectedType:g}),e.jsxs(B,{color:"secondary",disabled:y,onClick:w,size:"large",variant:"contained",children:["Confirm",f&&e.jsx(T,{color:n.BLUE_PRESS_STATE,size:10})]})]})})},Lt=()=>e.jsxs(p,{children:[e.jsx(p,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(p,{align:"center",direction:"row",children:e.jsx(Ft,{children:"Edit topic"})})}),e.jsx(p,{mb:12,children:e.jsx(et,{id:"cy-topic",maxLength:50,name:"topic",placeholder:"Add your topic",rules:{...De}})})]}),Ft=d(_)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,Pt=({topic:t,onClose:a})=>{const{close:r}=E("editTopic"),[l]=$(y=>[y.data]),x=ne({mode:"onChange"}),{watch:f,setValue:o,reset:s}=x,[i,c]=h.useState(!1);h.useEffect(()=>(t&&o("name",t==null?void 0:t.name),()=>{s()}),[t,o,s]);const g=f("name"),m=()=>{a(),r()},w=async()=>{c(!0);try{if(await Te((t==null?void 0:t.ref_id)||"",{topic:g.trim()}),l){const y={...l};y[t==null?void 0:t.ref_id].name=g.trim(),$.setState({data:y})}m()}catch(y){console.warn(y)}finally{c(!1)}};return e.jsx(P,{id:"editTopic",kind:"regular",onClose:m,preventOutsideClose:!0,children:e.jsxs(oe,{...x,children:[e.jsx(Lt,{}),e.jsxs(B,{color:"secondary",disabled:i,onClick:w,size:"large",variant:"contained",children:["Save",i&&e.jsx(T,{color:n.BLUE_PRESS_STATE,size:10})]})]})})},Mt=({onSelect:t,selectedTopic:a})=>{const[r,l]=h.useState(!1),[x,f]=h.useState(""),[o,s]=h.useState([]),[i,c]=h.useState(!1),g=h.useRef(null);h.useEffect(()=>()=>s([]),[s]);const m=async u=>{const v={muted:"False",sort_by:Ee,search:u,skip:"0",limit:"1000"};c(!0);try{const S=await ve(v);s(S.data)}catch{s([])}finally{c(!1)}},w=h.useMemo(()=>Se.debounce(m,300),[]),y=u=>{t(u)},b=u=>{if(f(u),!u){s([]);return}u.length>2&&w(u)};return a?e.jsxs(Dt,{children:[e.jsx("div",{className:"value",children:a.name}),e.jsx(p,{className:"icon",onClick:()=>t(null),children:e.jsx(A,{})})]}):e.jsxs(e.Fragment,{children:[e.jsxs(G,{ref:g,component:"form",onSubmit:u=>u.preventDefault(),sx:{p:"2px 4px",display:"flex",alignItems:"center",width:200},children:[e.jsx(D,{inputProps:{"aria-label":"search topic"},onChange:u=>b(u.target.value),onFocus:()=>l(!0),placeholder:"Search",size:"small",sx:{ml:1,flex:1},value:x}),x&&e.jsxs(e.Fragment,{children:[e.jsx(fe,{"aria-label":"search",onClick:()=>b(""),type:"button",children:e.jsx(A,{})}),e.jsx(se,{orientation:"vertical",sx:{height:28,m:.5}})]}),e.jsx(fe,{"aria-label":"search",type:"button",children:i?e.jsx(T,{color:n.white,size:24}):e.jsx(O,{})})]}),g.current&&o.length?e.jsx(Gt,{anchorEl:g.current,open:r,placement:"bottom",children:e.jsx(e.Fragment,{children:o.map(u=>e.jsx(Ot,{className:z({active:a===u.ref_id}),onClick:()=>y(u),children:u.name},"option"))})}):null]})},Ot=d(p).attrs({direction:"row",align:"center"})`
  font-family: Barlow;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  overflow: hidden;
  width: 200px;
  color: ${n.GRAY3};
  margin-bottom: 4px;
  cursor: pointer;
  &.active {
    color: ${n.white};
  }
  &:hover {
    color: ${n.white};
  }

  .icon {
    margin-right: 8px;
    width: 9px;
    font-size: 10px;
  }
`,Gt=d(Ne)`
  && {
    z-index: 99999;
    background: ${n.BUTTON1};
    min-width: 200px;
    padding: 16px;
    color: ${n.GRAY3};
    box-shadow: 0px 1px 6px 0px rgba(0, 0, 0, 0.2);
    border-radius: 6px;
    max-height: 200px;
    overflow: auto;
  }
`,Dt=d(p).attrs({direction:"row",justify:"flex-start",align:"center"})`
  .value {
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .icon {
    margin-left: 8px;
    width: 20px;
    height: 20px;
    color: ${n.white};
    background: ${n.primaryBlue};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
`,fe=d(R)`
  font-size: 24px;
`,Wt=({from:t,onSelect:a,selectedTopic:r})=>e.jsxs(p,{children:[e.jsx(p,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(p,{align:"center",direction:"row",children:e.jsx(Yt,{children:"Merge topic"})})}),e.jsxs(Ut,{mb:12,children:[e.jsxs(me,{children:[e.jsx("div",{className:"label",children:"From"}),e.jsx("div",{children:t})]}),e.jsxs(me,{ml:24,children:[e.jsx("div",{className:"label",children:"To"}),e.jsx(Mt,{onSelect:a,selectedTopic:r})]})]})]}),Yt=d(_)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,Ut=d(p).attrs({align:"flex-start",direction:"row",justify:"flex-start"})`
  color: ${n.white};
  .label {
    margin-bottom: 8px;
    font-weight: 500;
    font-size: 14px;
    color: ${n.GRAY3};
  }
`,me=d(p)`
  flex: 1 1 100%;
`,Vt=({topic:t,onClose:a})=>{const{close:r}=E("mergeTopic"),[l,x,f]=$(S=>[S.data,S.ids,S.total]),o=ne({mode:"onChange"}),{watch:s,setValue:i,reset:c}=o,[g,m]=h.useState(!1),[w,y]=h.useState(null);h.useEffect(()=>(t&&i("name",t==null?void 0:t.name),()=>{c()}),[t,i,c]);const b=s("name"),u=()=>{a(),r()},v=async()=>{if(!(!w||!l)){m(!0);try{await We({from:t.ref_id,to:w==null?void 0:w.ref_id});const{ref_id:S}=t;if(l[S]={...l[S],edgeList:[Re],edgeCount:l[S].edgeCount-1},$.setState({ids:x.filter(k=>k!==w.ref_id),total:f-1}),l){const k={...l};k[t==null?void 0:t.ref_id].name=b.trim(),$.setState({data:k})}u()}catch(S){console.warn(S)}finally{m(!1)}}};return e.jsx(P,{id:"mergeTopic",kind:"regular",onClose:u,preventOutsideClose:!0,children:e.jsxs(oe,{...o,children:[e.jsx(Wt,{from:t.name,onSelect:y,selectedTopic:w}),e.jsxs(B,{color:"secondary",disabled:g,onClick:v,size:"large",variant:"contained",children:["Merge topics",g&&e.jsx(T,{color:n.BLUE_PRESS_STATE,size:10})]})]})})},Ht=()=>{const[t,a]=$(o=>[o.filters,o.setFilters]),[r,l]=h.useState(""),x=o=>{o.preventDefault(),a({search:r})},f=()=>{l(""),t.search&&a({search:""})};return e.jsxs(G,{component:"form",onSubmit:x,sx:{p:"2px 4px",display:"flex",alignItems:"center",width:300},children:[e.jsx(D,{autoComplete:"off",autoCorrect:"off",inputProps:{"aria-label":"search topic"},onChange:o=>l(o.target.value),placeholder:"Search",size:"small",spellCheck:"false",sx:{ml:1,flex:1},value:r}),r&&e.jsxs(e.Fragment,{children:[e.jsx(ge,{"aria-label":"search",onClick:f,type:"button",children:e.jsx(A,{})}),e.jsx(se,{orientation:"vertical",sx:{height:28,m:.5}})]}),e.jsx(ge,{"aria-label":"search",onClick:x,type:"button",children:e.jsx(O,{})})]})},ge=d(R)`
  font-size: 24px;
`,qt=({onChangeFilter:t,currentFilter:a})=>{const[r,l]=h.useState(null),x=s=>{l(s.currentTarget)},f=()=>{l(null)},o=s=>{t(s),f()};return e.jsxs("div",{children:[e.jsxs(Qt,{onClick:x,children:[e.jsx("div",{className:"text",children:"Sort By"}),e.jsx("div",{className:"value",children:W[a]}),e.jsx("div",{className:"icon",children:r?e.jsx($e,{}):e.jsx(Ae,{})})]}),e.jsx(Jt,{anchorEl:r,anchorOrigin:{vertical:"bottom",horizontal:"left"},anchorPosition:{top:62,left:0},onClose:f,open:!!r,transformOrigin:{vertical:"top",horizontal:"left"},children:e.jsx(ze,{children:Object.keys(W).map(s=>e.jsxs(Kt,{className:z({active:s===a}),onClick:()=>o(s),children:[e.jsx("span",{className:"icon",children:s===a?e.jsx(Be,{}):null}),e.jsx("span",{children:W[s]})]},s))})})]})},Qt=d(p).attrs({direction:"row",align:"center"})`
  cursor: pointer;
  flex-grow: 1;
  color: ${n.GRAY6};
  font-family: Barlow;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  padding: 0 8px;
  .value,
  .icon {
    color: ${n.white};
  }

  .value {
    margin: 0 8px 0 4px;
  }
`,Kt=d(p).attrs({direction:"row",align:"center"})`
  font-family: Barlow;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  color: ${n.GRAY3};
  height: 27px;
  cursor: pointer;
  &.active {
    color: ${n.white};
  }
  &:hover {
    color: ${n.white};
  }

  .icon {
    margin-right: 8px;
    width: 9px;
    font-size: 10px;
  }
`,Jt=d(re)`
  && {
    z-index: 99999;
  }

  .MuiPaper-root {
    background: ${n.BUTTON1};
    min-width: 149px;
    padding: 16px;
    color: ${n.GRAY3};
    box-shadow: 0px 1px 6px 0px rgba(0, 0, 0, 0.2);
    border-radius: 6px;
  }
`,Xt=({topic:t,onClick:a})=>{const[r,l]=$(i=>[i.ids,i.total]),[x,f]=h.useState(!1),o=t.date_added_to_graph.toString(),s=async(i,c)=>{f(!0);try{await Te(i,{muted_topic:c}),$.setState({ids:r.filter(g=>g!==i),total:l-1})}catch(g){console.warn(g)}};return e.jsxs(le,{children:[e.jsx(j,{className:"empty"}),e.jsx(j,{children:t.name}),e.jsx(j,{children:t.edgeCount}),e.jsx(j,{children:t.edgeList.join(", ")}),e.jsx(j,{children:e.jsx("span",{children:new Date(Number(o)*1e3).toDateString()})}),e.jsx(j,{className:"cell-center",children:e.jsx(p,{direction:"row",justify:"space-between",children:e.jsx("div",{className:"approve-wrapper",children:x?e.jsx(T,{color:n.white,size:16}):e.jsx(e.Fragment,{children:t.muted_topic?e.jsx(je,{className:"centered",onClick:()=>s(t.ref_id,!1),children:e.jsx(_e,{color:n.primaryGreen,fontSize:24})}):e.jsx(je,{className:"centered",onClick:()=>s(t.ref_id,!0),children:e.jsx(ke,{color:n.primaryRed,fontSize:24})})})})})}),e.jsx(j,{children:e.jsx(R,{onClick:i=>a(i,t.ref_id),children:e.jsx(tt,{})})})]},t.name)},je=d(p)`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  cursor: pointer;
  background: transparent;
  color: ${n.lightBlue500};
  &.centered {
    margin: 0 auto;
  }

  & + & {
    margin-left: 4px;
  }
`,Zt=h.memo(Xt),es=({showMuted:t,onTopicEdit:a})=>{const[r,l]=de.useState(null),[x,f]=de.useState(""),[o,s]=$(y=>[y.data,y.ids]),i=h.useCallback((y,b)=>{l(y.currentTarget),f(b)},[]),c=()=>{l(null)},g=y=>{a(x,y),c()},m=!!r,w=m?"simple-popover":void 0;return o?e.jsx(e.Fragment,{children:Object.keys(o).length?e.jsxs(e.Fragment,{children:[e.jsxs(te,{component:"table",children:[e.jsx(ie,{children:e.jsxs(M,{component:"tr",children:[e.jsx(j,{className:"empty"}),e.jsx(j,{children:"Type"}),e.jsx(j,{children:"Edge Count"}),e.jsx(j,{children:"Edge list"}),e.jsx(j,{children:"Date"}),e.jsx(j,{children:t?"Unmute":"Mute"}),e.jsx(j,{})]})}),o&&e.jsx("tbody",{children:s==null?void 0:s.map(y=>e.jsx(Zt,{onClick:i,topic:o[y]},y))})]}),x?e.jsxs(ts,{anchorEl:r,anchorOrigin:{vertical:"bottom",horizontal:"right"},id:w,onClose:c,open:m,transformOrigin:{vertical:"top",horizontal:"right"},children:[e.jsx(H,{onClick:()=>g("editTopic"),children:"Rename"}),o[x].edgeList.includes(Re)?null:e.jsx(H,{onClick:()=>g("mergeTopic"),children:"Merge"}),e.jsx(H,{onClick:()=>g("addEdge"),children:"Add edge"})]}):null]}):e.jsxs(p,{children:[e.jsx(_,{children:"There is not any results for selected filters"}),e.jsx(ee,{})]})}):e.jsxs(p,{children:[e.jsx(_,{children:"There is not any results for selected filters"}),e.jsx(ee,{})]})},H=d(p).attrs({direction:"row",px:16,py:8})`
  cursor: pointer;
  background: ${n.BUTTON1};
  color: ${n.white};

  &:hover {
    background: ${n.BUTTON1_HOVER};
    color: ${n.GRAY3};
  }

  & + & {
    border-top: 1px solid ${n.black};
  }
`,ts=d(re)`
  && {
    z-index: 9999;
  }
  .MuiPaper-root {
    min-width: 149px;
    color: ${n.GRAY3};
    box-shadow: 0px 1px 6px 0px rgba(0, 0, 0, 0.2);
    border-radius: 6px;
    z-index: 1;
    font-family: Barlow;
    font-size: 14px;
    font-weight: 500;
  }
`,ss=()=>{const[t,a]=h.useState(!1),[r,l,x,f,o,s,i]=$(C=>[C.data,C.ids,C.total,C.setTopics,C.filters,C.setFilters,C.terminate]),{open:c}=E("editTopic"),{open:g}=E("mergeTopic"),{open:m}=E("addEdge"),[w,y]=h.useState(null),b={editTopic:c,mergeTopic:g,addEdge:m},u=h.useRef([]);h.useEffect(()=>{l.length&&(u.current=l)},[l]),h.useEffect(()=>{(async()=>{try{a(!0),await f()}catch{console.error("err")}finally{a(!1)}})()},[f,o]);const v=async()=>{try{a(!0),s({page:o.page+1})}catch(C){console.error("Error loading more data:",C)}finally{a(!1)}};h.useEffect(()=>()=>{i()},[i]);const S=C=>{s({sortBy:C})},k=()=>{y(null)},Le=(C,ce)=>{r&&(y(r[C]),typeof b[ce]=="function"&&b[ce]())};return e.jsxs(e.Fragment,{children:[e.jsxs(ns,{direction:"column",justify:"flex-end",children:[e.jsxs(ae,{align:"flex-start",direction:"row",justify:"space-between",children:[e.jsx(_,{className:"title",children:"Topics"}),e.jsxs(B,{disabled:t,onClick:()=>s({muted:!o.muted}),size:"medium",children:[o.muted?"Show Unmuted":"Show Muted",t&&e.jsx(T,{color:n.BLUE_PRESS_STATE,size:10})]})]}),e.jsxs(rs,{children:[e.jsx(Ht,{}),e.jsx(qt,{currentFilter:o.sortBy,onChangeFilter:S})]}),e.jsx(os,{align:"center",justify:t&&!r?"center":"flex-start",children:t&&!r?e.jsx(T,{color:n.white}):e.jsxs(e.Fragment,{children:[e.jsx(es,{onTopicEdit:Le,showMuted:o.muted}),x>l.length?e.jsxs(B,{className:"load-more",disabled:t,onClick:v,children:["Load more",t&&e.jsx(T,{color:n.BLUE_PRESS_STATE,size:10})]}):null]})})]}),w&&e.jsx(Vt,{onClose:k,topic:w}),w&&e.jsx(Pt,{onClose:k,topic:w}),w&&e.jsx(Rt,{onClose:k,topic:w})]})},ns=d(p)`
  flex: 1;

  .title {
    font-size: 20px;
    color: ${n.white};
    font-family: Barlow;
    font-size: 22px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  .subtitle {
    color: ${n.GRAY3};
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
`,os=d(p)`
  min-height: 0;
  overflow: auto;
  flex: 1;
  width: 100%;
`,rs=d(p).attrs({direction:"row",align:"center",justify:"space-between"})`
  padding: 0 36px;
  margin-bottom: 32px;
`,q=t=>{const{children:a,value:r,index:l,...x}=t;return r===l?e.jsx(as,{"aria-labelledby":`simple-tab-${l}`,hidden:r!==l,id:`simple-tabpanel-${l}`,role:"tabpanel",...x,children:a}):null};function Q(t){return{id:`simple-tab-${t}`,"aria-controls":`simple-tabpanel-${t}`}}const ls=()=>{const[t,a]=h.useState(0),[r]=be(f=>[f.isAdmin]),[l]=Ye(f=>[f.queuedSourcesFlag]),x=(f,o)=>{a(o)};return e.jsxs(cs,{direction:"column",children:[e.jsxs(is,{"aria-label":"sources tabs",onChange:x,value:t,children:[e.jsx(K,{disableRipple:!0,label:"Sources table",...Q(0)}),r&&l?e.jsx(K,{color:n.white,disableRipple:!0,label:"Queued sources",...Q(1)}):null,r&&e.jsx(K,{color:n.white,disableRipple:!0,label:"Topics",...Q(1)})]}),e.jsx(q,{index:0,value:t,children:e.jsx(yt,{})}),e.jsx(q,{index:1,value:t,children:e.jsx(at,{})}),e.jsx(q,{index:2,value:t,children:e.jsx(ss,{})})]})},is=d(st)`
  && {
    background: rgba(0, 0, 0, 0.2);

    .MuiTabs-indicator {
      background: ${n.primaryBlue};
    }
  }
`,K=d(nt)`
  && {
    padding: 30px 0 24px;
    color: ${n.GRAY6};
    margin-left: 34px;
    font-family: Barlow;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;

    &.Mui-selected {
      color: ${n.white};
    }
  }
`,as=d(p)`
  display: flex;
  flex: 1;
  min-height: 572px;
  padding: 20px 0;
  max-height: 572px;
`,cs=d(p)`
  min-height: 0;
  flex: 1;
`,$s=()=>{const{close:t}=E("sourcesTable");return e.jsx(P,{background:"BG1",id:"sourcesTable",kind:"large",noWrap:!0,onClose:t,children:e.jsx(ls,{})})};export{$s as SourcesTableModal};
