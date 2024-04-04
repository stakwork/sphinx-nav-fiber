import{f as d,h as o,T as _,F as x,R as J,v as X,Y as Z,i as F,r as h,j as e,o as Fe,p as Pe,q as we,l as z,t as ye,w as Me,x as be,y as Se,z as ve,A as Oe,B as Ge,C as De,D as Te,E as We,G as de,I as Ye}from"./index-8c6e7d86.js";import{B as P}from"./index-2db2798f.js";import{u as E}from"./index-3a2e60ff.js";import{T as Ue,a as M,b as Ve,F as ee,M as te,C as Ce,N as He,c as qe,D as se,d as $e}from"./ChevronUpIcon-823264dd.js";import{B,C as T,I as R,d as A,S as O,e as oe,F as ne}from"./react-toastify.esm-fcf4c1e7.js";import{M as _e,a as ke,b as Qe,c as Ke,d as Je,e as Xe}from"./index.esm-5e8d1785.js";import{P as G,I as D,a as re,F as ze}from"./Popover-94860109.js";import{B as Ze,T as et}from"./index-c3d690f6.js";import{A as Ee,u as $}from"./index-521d6d55.js";import{P as Ne}from"./Popper-d3638f43.js";import{C as Be}from"./CheckIcon-22266ff6.js";import{C as Ae}from"./ChevronDownIcon-ec5e4f6b.js";import{S as tt}from"./SettingsIcon-5d35eddc.js";import{T as st,a as ot}from"./index-d010b8aa.js";import"./useSlotProps-723c9ba2.js";import"./InfoIcon-27e3afdb.js";const j=d(Ue)`
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
`,ie=d(M)`
  && {
    height: 48px;
    padding: 0 36px;
  }
  &:nth-child(odd) {
    background-color: ${o.BG3};
  }
`,le=d(Ve)`
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
`,L=d(B)`
  &.selected {
    background: ${o.white};
    color: ${o.BG1};
    pointer-events: none;
  }

  & + & {
    margin-left: 16px;
  }
`,ae=d(x)`
  margin-bottom: 16px;
  padding: 0 36px;
  ${_} {
    margin-bottom: 0;
  }
`,I={[J]:"RSS link",[X]:"Twitter Handle",[Z]:"Youtube channel"},nt="date",rt="edge_count",it="alphabetically",W={[nt]:"Date",[rt]:"Edge Count",[it]:"Alphabetically"},Ie="https://twitter.com",Re="IS_ALIAS",lt=({data:t})=>{const a=F(n=>n.setQueuedSources),[r,i]=h.useState(""),p=async n=>{if(t!=null&&t.length)try{const s=await Fe.enable();await Pe(n,s.pubkey),a(t.filter(l=>l.ref_id!==n))}catch(s){console.warn(s)}},f=async n=>{if(!(!n||!(t!=null&&t.length))){i(n);try{await we(n),a(t==null?void 0:t.filter(s=>s.ref_id!==n))}catch(s){console.warn(s)}finally{i("")}}};return t!=null&&t.length?e.jsxs(te,{component:"table",children:[e.jsx(le,{children:e.jsxs(M,{component:"tr",children:[e.jsx(j,{className:"empty"}),e.jsx(j,{children:"Type"}),e.jsx(j,{children:"Source"}),e.jsx(j,{}),e.jsx(j,{className:"empty"})]})}),(t==null?void 0:t.length)&&e.jsx("tbody",{children:t==null?void 0:t.map(n=>e.jsxs(ie,{children:[e.jsx(j,{className:"empty"}),e.jsx(j,{children:I[n.source_type]}),e.jsx(j,{width:"268px",children:n.source_type==="twitter_handle"?e.jsxs(pe,{href:`${Ie}/${n.source}?open=system`,target:"_blank",children:["@",n.source]}):e.jsx(pe,{href:`${n.source}?open=system`,target:"_blank",children:n.source})}),e.jsx(j,{className:"cell-center",children:e.jsxs(x,{direction:"row",justify:"space-between",children:[e.jsx("div",{className:"approve-wrapper",children:e.jsx(he,{className:"centered",onClick:()=>p(n.ref_id),children:e.jsx(_e,{color:o.primaryGreen,fontSize:24})})}),e.jsx("div",{className:"delete-wrapper",children:r===n.ref_id?e.jsx(T,{color:o.white,size:16}):e.jsx(Ce,{message:"Are you sure ?",onConfirm:()=>f(n.ref_id),children:e.jsx(he,{className:"centered",children:e.jsx(ke,{color:o.primaryRed,fontSize:24})})})})]})}),e.jsx(j,{className:"empty"})]},n.source))})]}):e.jsxs(x,{children:[e.jsx(_,{children:"There is not any results for selected filters"}),e.jsx(ee,{})]})},he=d(x)`
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
`,pe=d.a`
  color: ${o.white};
  text-decoration: underline;
  &:visited {
    color: ${o.white};
  }
  &:hover {
    cursor: pointer;
  }
`,at=()=>{const[t,a]=h.useState(!0),[r,i]=h.useState(""),[p,f]=F(l=>[l.queuedSources,l.setQueuedSources]);h.useEffect(()=>{(async()=>{a(!0);try{const c=await ye({approved:"False"});f(c.data)}catch(c){console.warn(c)}finally{a(!1)}})()},[f]);const n=l=>{i(r===l||!l?"":l)},s=p==null?void 0:p.filter(l=>!r||l.source_type===r);return e.jsxs(ct,{align:"stretch",direction:"column",justify:"flex-end",children:[e.jsxs(ae,{align:"flex-start",justify:"space-between",children:[e.jsx(_,{className:"title",children:"Queued Sources"}),e.jsx(_,{className:"subtitle",children:"This is a queue of pending sources waiting for approval or denial from graph users. If you think a source will provide good content for the graph, you can pay to approve it. Think of this as an investment: you pay to add it to the source table, and if the content is popular you will earn from it. If content is not relevant to the graph, you should deny it."})]}),e.jsxs(x,{className:"filters",direction:"row",pb:16,px:36,children:[e.jsx(L,{className:z({selected:!r}),onClick:()=>n(""),size:"small",children:"All"}),Object.keys(I).map(l=>e.jsx(L,{className:z({selected:l===r}),onClick:()=>n(l),size:"small",children:I[l]},l))]}),e.jsx(dt,{align:"center",justify:t?"center":"flex-start",children:t?e.jsx(T,{color:o.white}):e.jsx(lt,{data:s})})]})},ct=d(x)`
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
`,dt=d(x)`
  min-height: 0;
  overflow: auto;
  flex: 1;
  width: 100%;
`,ht=({onSearch:t,placeholder:a,activeIcon:r,loadingIcon:i,defaultIcon:p,...f})=>{const[n,s]=h.useState(""),[l,c]=h.useState(!1),g=()=>{s(""),t(""),c(!1)},m=b=>{!b.target.value&&g(),s(b.target.value)},w=b=>{const{value:u}=b.currentTarget;s(u),!l&&(c(!0),setTimeout(()=>{t(u),u||g(),c(!1)},1e3),u||g())},y=()=>l?e.jsx(xe,{children:e.jsx(Y,{type:"button",children:i})}):e.jsx(xe,{children:n?e.jsx(Y,{onClick:g,type:"button",children:r}):e.jsx(Y,{type:"button",children:p})});return e.jsxs(pt,{children:[e.jsx(xt,{autoComplete:"off",autoCorrect:"off",inputProps:{"aria-label":"search sources"},onChange:m,onKeyDown:b=>{b.key==="Enter"&&w(b)},placeholder:a,value:n,...f}),y()]})},xe=d(x)`
  top: -50%;
  right: -3%;
  z-index: 3;
  position: absolute;
  transform: translate(-50%, 50%);
`,Y=d(R)`
  font-size: 24px;
`,pt=d(G)`
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
`,xt=d(D)`
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
`,ut=({data:t,canEdit:a=!1})=>{const r=F(s=>s.setSources),[i,p]=h.useState(""),f=async(s,l)=>{if(t!=null&&t.length)try{await Me(s,l);const c=t==null?void 0:t.findIndex(m=>m.ref_id===s),g=[...t];g[c]={...g[c],source:l.source},r(g)}catch(c){console.warn(c)}},n=async s=>{if(!(!s||!(t!=null&&t.length))){p(s);try{await we(s),r(t==null?void 0:t.filter(l=>l.ref_id!==s))}catch(l){console.warn(l)}finally{p("")}}};return t!=null&&t.length?e.jsxs(te,{"aria-label":"a dense table",component:"table",id:"sources-table",size:"small",children:[e.jsx(le,{children:e.jsxs(M,{component:"tr",children:[e.jsx(j,{className:"empty"}),e.jsx(j,{children:"Type"}),e.jsx(j,{align:"left",children:"Source"}),a&&e.jsx(j,{align:"left"}),e.jsx(j,{className:"empty"})]})}),e.jsx(qe,{component:"tbody",children:t==null?void 0:t.map(s=>e.jsxs(ie,{children:[e.jsx(j,{className:"empty"}),e.jsx(j,{align:"left",children:I[s.source_type]}),e.jsx(j,{align:"left",children:e.jsx(ft,{condition:a,wrapper:l=>e.jsx(mt,{id:s.ref_id,onSave:c=>f(s.ref_id,{source:c,source_type:s.source_type}),value:s.source,children:l}),children:s.source_type===X||s.source_type===Z||s.source_type===J?e.jsxs(e.Fragment,{children:[s.source_type===X&&e.jsxs(U,{href:`${Ie}/${s.source}`,target:"_blank",children:["@",s.source]}),s.source_type===Z&&e.jsx(U,{href:`${s.source}${s.source.includes("?")?"&":"?"}open=system`,target:"_blank",children:s.source}),s.source_type===J&&e.jsx(U,{href:s.source,target:"_blank",children:s.source})]}):e.jsx("div",{children:s.source})})}),a&&e.jsx(j,{align:"left",children:e.jsx("div",{className:"delete-wrapper",id:`delete-${s.source}`,children:i===s.ref_id?e.jsx(T,{color:o.white}):e.jsx(Ce,{message:"Are you sure ?",onConfirm:()=>n(s.ref_id),children:e.jsx(N,{className:"centered",children:e.jsx(Qe,{})})})})}),e.jsx(j,{className:"empty"})]},s.source))})]}):e.jsxs(jt,{children:[e.jsx(He,{}),e.jsx(_,{className:"text",children:"There is not any results for selected filters"})]})};function ft({condition:t,wrapper:a,children:r}){return t?a(r):r}const mt=({value:t,onSave:a,id:r,children:i})=>{const[p,f]=h.useState(!1),[n,s]=h.useState(t),[l,c]=h.useState(!1),g=async()=>{if(r){c(!0);try{await a(n),f(!1)}catch(m){console.warn(m)}finally{c(!1)}}};return e.jsx("div",{children:p?e.jsxs(gt,{direction:"row",children:[e.jsx(Ze,{className:"editable-cell__input",name:"cell-input",onChange:m=>s(m),value:n}),e.jsx(N,{align:"center",justify:"center",children:l?e.jsx(T,{}):e.jsx(Ke,{onClick:g})}),e.jsx(N,{align:"center",className:"secondary",justify:"center",onClick:()=>f(!1),children:e.jsx(Je,{})})]}):e.jsxs(wt,{direction:"row",children:[i,e.jsx(N,{onClick:()=>f(!0),children:e.jsx(Xe,{size:20})})]})})},gt=d(x)`
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
`,N=d(x)`
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
`,jt=d(x)`
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
`,wt=d(x)`
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
  color: ${o.white};
  text-decoration: underline;
  &:visited {
    color: ${o.white};
  }
`,yt=()=>{const[t,a]=h.useState(!0),[r,i]=h.useState(""),[p,f]=F(m=>[m.sources,m.setSources]),[n]=be(m=>[m.isAdmin]),[s,l]=h.useState("");h.useEffect(()=>{(async()=>{a(!0);try{const w=await ye();f(w.data)}catch(w){console.warn(w)}finally{a(!1)}})()},[f]);const c=m=>{i(r===m||!m?"":m)},g=h.useMemo(()=>p==null?void 0:p.filter(m=>(!r||m.source_type===r)&&(m.source.toLowerCase().startsWith(s.toLowerCase())||m.source.toLowerCase().includes(s.toLowerCase()))),[s,r,p]);return e.jsxs(bt,{align:"stretch",direction:"column",justify:"flex-end",children:[e.jsx(ae,{align:"center",direction:"row",justify:"space-between",children:e.jsx(_,{className:"title",children:"Sources for this Graph"})}),e.jsx(vt,{children:e.jsx(ht,{activeIcon:e.jsx(A,{}),defaultIcon:e.jsx(O,{}),loadingIcon:e.jsx(T,{color:o.PRIMARY_BLUE,size:24}),onSearch:l,placeholder:"Find Topic"})}),e.jsxs(x,{className:"filters",direction:"row",pb:16,px:36,children:[e.jsx(L,{className:z({selected:!r}),onClick:()=>c(""),size:"small",children:"All"}),Object.keys(I).map(m=>e.jsx(L,{className:z({selected:m===r}),onClick:()=>c(m),size:"small",children:I[m]},m))]}),e.jsx(St,{align:"center",justify:t?"center":"flex-start",children:t?e.jsx(T,{color:o.white}):e.jsx(ut,{canEdit:n,data:g})})]})},bt=d(x)`
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
`,St=d(x)`
  min-height: 0;
  overflow: auto;
  flex: 1;
  width: 100%;
`,vt=d(x)`
  margin: 0 0 16px 36px;
`,Tt=({onSelect:t,selectedTopic:a})=>{const[r,i]=h.useState(!1),[p,f]=h.useState(""),[n,s]=h.useState([]),[l,c]=h.useState(!1),g=h.useRef(null);h.useEffect(()=>()=>s([]),[s]);const m=async u=>{const v={muted:"False",sort_by:Ee,search:u,skip:"0",limit:"1000"};c(!0);try{const S=await ve(v);s(S.data)}catch{s([])}finally{c(!1)}},w=h.useMemo(()=>Se.debounce(m,300),[]),y=u=>{t(u)},b=u=>{if(f(u),!u){s([]);return}u.length>2&&w(u)};return a?e.jsxs(_t,{children:[e.jsx("div",{className:"value",children:a.topic}),e.jsx(x,{className:"icon",onClick:()=>t(null),children:e.jsx(A,{})})]}):e.jsxs(e.Fragment,{children:[e.jsxs(G,{ref:g,component:"form",onSubmit:u=>u.preventDefault(),sx:{p:"2px 4px",display:"flex",alignItems:"center",width:200},children:[e.jsx(D,{inputProps:{"aria-label":"search topic"},onChange:u=>b(u.target.value),onFocus:()=>i(!0),placeholder:"Search",size:"small",sx:{ml:1,flex:1},value:p}),p&&e.jsxs(e.Fragment,{children:[e.jsx(ue,{"aria-label":"search",onClick:()=>b(""),type:"button",children:e.jsx(A,{})}),e.jsx(se,{orientation:"vertical",sx:{height:28,m:.5}})]}),e.jsx(ue,{"aria-label":"search",type:"button",children:l?e.jsx(T,{color:o.white,size:24}):e.jsx(O,{})})]}),g.current&&n.length?e.jsx($t,{anchorEl:g.current,open:r,placement:"bottom",children:e.jsx(e.Fragment,{children:n.map(u=>e.jsx(Ct,{className:z({active:a===u.ref_id}),onClick:()=>y(u),children:u.topic},"option"))})}):null]})},Ct=d(x).attrs({direction:"row",align:"center"})`
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
`,$t=d(Ne)`
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
`,_t=d(x).attrs({direction:"row",justify:"flex-start",align:"center"})`
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
`,ue=d(R)`
  font-size: 24px;
`,kt=({selectedType:t,setSelectedType:a})=>{const[r,i]=h.useState(null),[p,f]=h.useState([]);h.useEffect(()=>{(async()=>{try{const{data:g}=await Oe();f(g.edge_types)}catch(g){console.warn(g)}})()},[f]);const n=c=>{i(c.currentTarget)},s=()=>{i(null)},l=c=>{a(c),s()};return e.jsxs("div",{children:[e.jsxs(zt,{onClick:n,children:[e.jsx("div",{className:"text",children:"Type"}),e.jsx("div",{className:"value",children:t}),e.jsx("div",{className:"icon",children:r?e.jsx($e,{}):e.jsx(Ae,{})})]}),e.jsx(Nt,{anchorEl:r,anchorOrigin:{vertical:"bottom",horizontal:"left"},anchorPosition:{top:62,left:0},onClose:s,open:!!r,transformOrigin:{vertical:"top",horizontal:"left"},children:e.jsx(ze,{children:p.map(c=>e.jsxs(Et,{className:z({active:c===t}),onClick:()=>l(c),children:[e.jsx("span",{className:"icon",children:c===t?e.jsx(Be,{}):null}),e.jsx("span",{children:c})]},c))})})]})},zt=d(x).attrs({direction:"row",align:"center"})`
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
`,Et=d(x).attrs({direction:"row",align:"center"})`
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
`,Nt=d(re)`
  .MuiPaper-root {
    background: ${o.BUTTON1};
    min-width: 149px;
    padding: 16px;
    color: ${o.GRAY3};
    box-shadow: 0px 1px 6px 0px rgba(0, 0, 0, 0.2);
    border-radius: 6px;
  }
`,Bt=({from:t,onSelect:a,selectedTopic:r,selectedType:i,setSelectedType:p})=>e.jsxs(x,{children:[e.jsx(x,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(x,{align:"center",direction:"row",children:e.jsx(At,{children:"Add edge"})})}),e.jsxs(It,{mb:12,children:[e.jsxs(V,{children:[e.jsx("div",{className:"label",children:"From"}),e.jsx("div",{children:t})]}),e.jsx(V,{children:e.jsx(kt,{selectedType:i,setSelectedType:p})}),e.jsxs(V,{children:[e.jsx("div",{className:"label",children:"To"}),e.jsx(Tt,{onSelect:a,selectedTopic:r})]})]})]}),At=d(_)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,It=d(x).attrs({align:"flex-start",direction:"row",justify:"flex-start"})`
  color: ${o.white};
  .label {
    margin-bottom: 8px;
    font-weight: 500;
    font-size: 14px;
    color: ${o.GRAY3};
  }
`,V=d(x)`
  flex: 1 1 100%;
`,Rt=({topic:t,onClose:a})=>{const{close:r}=E("addEdge"),[i]=$(b=>[b.data]),p=oe({mode:"onChange"}),[f,n]=h.useState(!1),[s,l]=h.useState(null),[c,g]=h.useState(""),m=()=>{a(),r()},w=async()=>{if(!(!s||!i)){n(!0);try{await Ge({from:t.ref_id,to:s==null?void 0:s.ref_id,relationship:c});const{ref_id:b}=t,{ref_id:u}=s;if(i){const v={...i};v[b]={...v[b],edgeList:[...v[b].edgeList,c]},v[u]&&(v[u]={...v[u],edgeList:[...v[u].edgeList,c]}),$.setState({data:v})}m()}catch(b){console.warn(b)}finally{n(!1)}}},y=f||!s||!c;return e.jsx(P,{id:"addEdge",kind:"large",onClose:m,preventOutsideClose:!0,children:e.jsxs(ne,{...p,children:[e.jsx(Bt,{from:t.topic,onSelect:l,selectedTopic:s,selectedType:c,setSelectedType:g}),e.jsxs(B,{color:"secondary",disabled:y,onClick:w,size:"large",variant:"contained",children:["Confirm",f&&e.jsx(T,{color:o.BLUE_PRESS_STATE,size:10})]})]})})},Lt=()=>e.jsxs(x,{children:[e.jsx(x,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(x,{align:"center",direction:"row",children:e.jsx(Ft,{children:"Edit topic"})})}),e.jsx(x,{mb:12,children:e.jsx(et,{id:"cy-topic",maxLength:50,name:"topic",placeholder:"Add your topic",rules:{...De}})})]}),Ft=d(_)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,Pt=({topic:t,onClose:a})=>{const{close:r}=E("editTopic"),[i]=$(y=>[y.data]),p=oe({mode:"onChange"}),{watch:f,setValue:n,reset:s}=p,[l,c]=h.useState(!1);h.useEffect(()=>(t&&n("topic",t==null?void 0:t.topic),()=>{s()}),[t,n,s]);const g=f("topic"),m=()=>{a(),r()},w=async()=>{c(!0);try{if(await Te((t==null?void 0:t.ref_id)||"",{topic:g.trim()}),i){const y={...i};y[t==null?void 0:t.ref_id].topic=g.trim(),$.setState({data:y})}m()}catch(y){console.warn(y)}finally{c(!1)}};return e.jsx(P,{id:"editTopic",kind:"regular",onClose:m,preventOutsideClose:!0,children:e.jsxs(ne,{...p,children:[e.jsx(Lt,{}),e.jsxs(B,{color:"secondary",disabled:l,onClick:w,size:"large",variant:"contained",children:["Save",l&&e.jsx(T,{color:o.BLUE_PRESS_STATE,size:10})]})]})})},Mt=({onSelect:t,selectedTopic:a})=>{const[r,i]=h.useState(!1),[p,f]=h.useState(""),[n,s]=h.useState([]),[l,c]=h.useState(!1),g=h.useRef(null);h.useEffect(()=>()=>s([]),[s]);const m=async u=>{const v={muted:"False",sort_by:Ee,search:u,skip:"0",limit:"1000"};c(!0);try{const S=await ve(v);s(S.data)}catch{s([])}finally{c(!1)}},w=h.useMemo(()=>Se.debounce(m,300),[]),y=u=>{t(u)},b=u=>{if(f(u),!u){s([]);return}u.length>2&&w(u)};return a?e.jsxs(Dt,{children:[e.jsx("div",{className:"value",children:a.topic}),e.jsx(x,{className:"icon",onClick:()=>t(null),children:e.jsx(A,{})})]}):e.jsxs(e.Fragment,{children:[e.jsxs(G,{ref:g,component:"form",onSubmit:u=>u.preventDefault(),sx:{p:"2px 4px",display:"flex",alignItems:"center",width:200},children:[e.jsx(D,{inputProps:{"aria-label":"search topic"},onChange:u=>b(u.target.value),onFocus:()=>i(!0),placeholder:"Search",size:"small",sx:{ml:1,flex:1},value:p}),p&&e.jsxs(e.Fragment,{children:[e.jsx(fe,{"aria-label":"search",onClick:()=>b(""),type:"button",children:e.jsx(A,{})}),e.jsx(se,{orientation:"vertical",sx:{height:28,m:.5}})]}),e.jsx(fe,{"aria-label":"search",type:"button",children:l?e.jsx(T,{color:o.white,size:24}):e.jsx(O,{})})]}),g.current&&n.length?e.jsx(Gt,{anchorEl:g.current,open:r,placement:"bottom",children:e.jsx(e.Fragment,{children:n.map(u=>e.jsx(Ot,{className:z({active:a===u.ref_id}),onClick:()=>y(u),children:u.topic},"option"))})}):null]})},Ot=d(x).attrs({direction:"row",align:"center"})`
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
`,Gt=d(Ne)`
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
`,Dt=d(x).attrs({direction:"row",justify:"flex-start",align:"center"})`
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
`,fe=d(R)`
  font-size: 24px;
`,Wt=({from:t,onSelect:a,selectedTopic:r})=>e.jsxs(x,{children:[e.jsx(x,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(x,{align:"center",direction:"row",children:e.jsx(Yt,{children:"Merge topic"})})}),e.jsxs(Ut,{mb:12,children:[e.jsxs(me,{children:[e.jsx("div",{className:"label",children:"From"}),e.jsx("div",{children:t})]}),e.jsxs(me,{ml:24,children:[e.jsx("div",{className:"label",children:"To"}),e.jsx(Mt,{onSelect:a,selectedTopic:r})]})]})]}),Yt=d(_)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,Ut=d(x).attrs({align:"flex-start",direction:"row",justify:"flex-start"})`
  color: ${o.white};
  .label {
    margin-bottom: 8px;
    font-weight: 500;
    font-size: 14px;
    color: ${o.GRAY3};
  }
`,me=d(x)`
  flex: 1 1 100%;
`,Vt=({topic:t,onClose:a})=>{const{close:r}=E("mergeTopic"),[i,p,f]=$(S=>[S.data,S.ids,S.total]),n=oe({mode:"onChange"}),{watch:s,setValue:l,reset:c}=n,[g,m]=h.useState(!1),[w,y]=h.useState(null);h.useEffect(()=>(t&&l("topic",t==null?void 0:t.topic),()=>{c()}),[t,l,c]);const b=s("topic"),u=()=>{a(),r()},v=async()=>{if(!(!w||!i)){m(!0);try{await We({from:t.ref_id,to:w==null?void 0:w.ref_id});const{ref_id:S}=t;if(i[S]={...i[S],edgeList:[Re],edgeCount:i[S].edgeCount-1},$.setState({ids:p.filter(k=>k!==w.ref_id),total:f-1}),i){const k={...i};k[t==null?void 0:t.ref_id].topic=b.trim(),$.setState({data:k})}u()}catch(S){console.warn(S)}finally{m(!1)}}};return e.jsx(P,{id:"mergeTopic",kind:"regular",onClose:u,preventOutsideClose:!0,children:e.jsxs(ne,{...n,children:[e.jsx(Wt,{from:t.topic,onSelect:y,selectedTopic:w}),e.jsxs(B,{color:"secondary",disabled:g,onClick:v,size:"large",variant:"contained",children:["Merge topics",g&&e.jsx(T,{color:o.BLUE_PRESS_STATE,size:10})]})]})})},Ht=()=>{const[t,a]=$(n=>[n.filters,n.setFilters]),[r,i]=h.useState(""),p=n=>{n.preventDefault(),a({search:r})},f=()=>{i(""),t.search&&a({search:""})};return e.jsxs(G,{component:"form",onSubmit:p,sx:{p:"2px 4px",display:"flex",alignItems:"center",width:300},children:[e.jsx(D,{autoComplete:"off",autoCorrect:"off",inputProps:{"aria-label":"search topic"},onChange:n=>i(n.target.value),placeholder:"Search",size:"small",spellCheck:"false",sx:{ml:1,flex:1},value:r}),r&&e.jsxs(e.Fragment,{children:[e.jsx(ge,{"aria-label":"search",onClick:f,type:"button",children:e.jsx(A,{})}),e.jsx(se,{orientation:"vertical",sx:{height:28,m:.5}})]}),e.jsx(ge,{"aria-label":"search",onClick:p,type:"button",children:e.jsx(O,{})})]})},ge=d(R)`
  font-size: 24px;
`,qt=({onChangeFilter:t,currentFilter:a})=>{const[r,i]=h.useState(null),p=s=>{i(s.currentTarget)},f=()=>{i(null)},n=s=>{t(s),f()};return e.jsxs("div",{children:[e.jsxs(Qt,{onClick:p,children:[e.jsx("div",{className:"text",children:"Sort By"}),e.jsx("div",{className:"value",children:W[a]}),e.jsx("div",{className:"icon",children:r?e.jsx($e,{}):e.jsx(Ae,{})})]}),e.jsx(Jt,{anchorEl:r,anchorOrigin:{vertical:"bottom",horizontal:"left"},anchorPosition:{top:62,left:0},onClose:f,open:!!r,transformOrigin:{vertical:"top",horizontal:"left"},children:e.jsx(ze,{children:Object.keys(W).map(s=>e.jsxs(Kt,{className:z({active:s===a}),onClick:()=>n(s),children:[e.jsx("span",{className:"icon",children:s===a?e.jsx(Be,{}):null}),e.jsx("span",{children:W[s]})]},s))})})]})},Qt=d(x).attrs({direction:"row",align:"center"})`
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
`,Kt=d(x).attrs({direction:"row",align:"center"})`
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
`,Jt=d(re)`
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
`,Xt=({topic:t,onClick:a})=>{const[r,i]=$(l=>[l.ids,l.total]),[p,f]=h.useState(!1),n=t.date_added_to_graph.toString(),s=async(l,c)=>{f(!0);try{await Te(l,{muted_topic:c}),$.setState({ids:r.filter(g=>g!==l),total:i-1})}catch(g){console.warn(g)}};return e.jsxs(ie,{children:[e.jsx(j,{className:"empty"}),e.jsx(j,{children:t.topic}),e.jsx(j,{children:t.edgeCount}),e.jsx(j,{children:t.edgeList.join(", ")}),e.jsx(j,{children:e.jsx("span",{children:new Date(Number(n)*1e3).toDateString()})}),e.jsx(j,{className:"cell-center",children:e.jsx(x,{direction:"row",justify:"space-between",children:e.jsx("div",{className:"approve-wrapper",children:p?e.jsx(T,{color:o.white,size:16}):e.jsx(e.Fragment,{children:t.muted_topic?e.jsx(je,{className:"centered",onClick:()=>s(t.ref_id,!1),children:e.jsx(_e,{color:o.primaryGreen,fontSize:24})}):e.jsx(je,{className:"centered",onClick:()=>s(t.ref_id,!0),children:e.jsx(ke,{color:o.primaryRed,fontSize:24})})})})})}),e.jsx(j,{children:e.jsx(R,{onClick:l=>a(l,t.ref_id),children:e.jsx(tt,{})})})]},t.topic)},je=d(x)`
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
`,Zt=h.memo(Xt),es=({showMuted:t,onTopicEdit:a})=>{const[r,i]=de.useState(null),[p,f]=de.useState(""),[n,s]=$(y=>[y.data,y.ids]),l=h.useCallback((y,b)=>{i(y.currentTarget),f(b)},[]),c=()=>{i(null)},g=y=>{a(p,y),c()},m=!!r,w=m?"simple-popover":void 0;return n?e.jsx(e.Fragment,{children:Object.keys(n).length?e.jsxs(e.Fragment,{children:[e.jsxs(te,{component:"table",children:[e.jsx(le,{children:e.jsxs(M,{component:"tr",children:[e.jsx(j,{className:"empty"}),e.jsx(j,{children:"Type"}),e.jsx(j,{children:"Edge Count"}),e.jsx(j,{children:"Edge list"}),e.jsx(j,{children:"Date"}),e.jsx(j,{children:t?"Unmute":"Mute"}),e.jsx(j,{})]})}),n&&e.jsx("tbody",{children:s==null?void 0:s.map(y=>e.jsx(Zt,{onClick:l,topic:n[y]},y))})]}),p?e.jsxs(ts,{anchorEl:r,anchorOrigin:{vertical:"bottom",horizontal:"right"},id:w,onClose:c,open:m,transformOrigin:{vertical:"top",horizontal:"right"},children:[e.jsx(H,{onClick:()=>g("editTopic"),children:"Rename"}),n[p].edgeList.includes(Re)?null:e.jsx(H,{onClick:()=>g("mergeTopic"),children:"Merge"}),e.jsx(H,{onClick:()=>g("addEdge"),children:"Add edge"})]}):null]}):e.jsxs(x,{children:[e.jsx(_,{children:"There is not any results for selected filters"}),e.jsx(ee,{})]})}):e.jsxs(x,{children:[e.jsx(_,{children:"There is not any results for selected filters"}),e.jsx(ee,{})]})},H=d(x).attrs({direction:"row",px:16,py:8})`
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
`,ts=d(re)`
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
`,ss=()=>{const[t,a]=h.useState(!1),[r,i,p,f,n,s,l]=$(C=>[C.data,C.ids,C.total,C.setTopics,C.filters,C.setFilters,C.terminate]),{open:c}=E("editTopic"),{open:g}=E("mergeTopic"),{open:m}=E("addEdge"),[w,y]=h.useState(null),b={editTopic:c,mergeTopic:g,addEdge:m},u=h.useRef([]);h.useEffect(()=>{i.length&&(u.current=i)},[i]),h.useEffect(()=>{(async()=>{try{a(!0),await f()}catch{console.error("err")}finally{a(!1)}})()},[f,n]);const v=async()=>{try{a(!0),s({page:n.page+1})}catch(C){console.error("Error loading more data:",C)}finally{a(!1)}};h.useEffect(()=>()=>{l()},[l]);const S=C=>{s({sortBy:C})},k=()=>{y(null)},Le=(C,ce)=>{r&&(y(r[C]),typeof b[ce]=="function"&&b[ce]())};return e.jsxs(e.Fragment,{children:[e.jsxs(os,{direction:"column",justify:"flex-end",children:[e.jsxs(ae,{align:"flex-start",direction:"row",justify:"space-between",children:[e.jsx(_,{className:"title",children:"Topics"}),e.jsxs(B,{disabled:t,onClick:()=>s({muted:!n.muted}),size:"medium",children:[n.muted?"Show Unmuted":"Show Muted",t&&e.jsx(T,{color:o.BLUE_PRESS_STATE,size:10})]})]}),e.jsxs(rs,{children:[e.jsx(Ht,{}),e.jsx(qt,{currentFilter:n.sortBy,onChangeFilter:S})]}),e.jsx(ns,{align:"center",justify:t&&!r?"center":"flex-start",children:t&&!r?e.jsx(T,{color:o.white}):e.jsxs(e.Fragment,{children:[e.jsx(es,{onTopicEdit:Le,showMuted:n.muted}),p>i.length?e.jsxs(B,{className:"load-more",disabled:t,onClick:v,children:["Load more",t&&e.jsx(T,{color:o.BLUE_PRESS_STATE,size:10})]}):null]})})]}),w&&e.jsx(Vt,{onClose:k,topic:w}),w&&e.jsx(Pt,{onClose:k,topic:w}),w&&e.jsx(Rt,{onClose:k,topic:w})]})},os=d(x)`
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
`,ns=d(x)`
  min-height: 0;
  overflow: auto;
  flex: 1;
  width: 100%;
`,rs=d(x).attrs({direction:"row",align:"center",justify:"space-between"})`
  padding: 0 36px;
  margin-bottom: 32px;
`,q=t=>{const{children:a,value:r,index:i,...p}=t;return r===i?e.jsx(as,{"aria-labelledby":`simple-tab-${i}`,hidden:r!==i,id:`simple-tabpanel-${i}`,role:"tabpanel",...p,children:a}):null};function Q(t){return{id:`simple-tab-${t}`,"aria-controls":`simple-tabpanel-${t}`}}const is=()=>{const[t,a]=h.useState(0),[r]=be(f=>[f.isAdmin]),[i]=Ye(f=>[f.queuedSourcesFlag]),p=(f,n)=>{a(n)};return e.jsxs(cs,{direction:"column",children:[e.jsxs(ls,{"aria-label":"sources tabs",onChange:p,value:t,children:[e.jsx(K,{disableRipple:!0,label:"Sources table",...Q(0)}),r&&i?e.jsx(K,{color:o.white,disableRipple:!0,label:"Queued sources",...Q(1)}):null,r&&e.jsx(K,{color:o.white,disableRipple:!0,label:"Topics",...Q(1)})]}),e.jsx(q,{index:0,value:t,children:e.jsx(yt,{})}),e.jsx(q,{index:1,value:t,children:e.jsx(at,{})}),e.jsx(q,{index:2,value:t,children:e.jsx(ss,{})})]})},ls=d(st)`
  && {
    background: rgba(0, 0, 0, 0.2);

    .MuiTabs-indicator {
      background: ${o.primaryBlue};
    }
  }
`,K=d(ot)`
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
`,as=d(x)`
  display: flex;
  flex: 1;
  min-height: 572px;
  padding: 20px 0;
  max-height: 572px;
`,cs=d(x)`
  min-height: 0;
  flex: 1;
`,$s=()=>{const{close:t}=E("sourcesTable");return e.jsx(P,{background:"BG1",id:"sourcesTable",kind:"large",noWrap:!0,onClose:t,children:e.jsx(is,{})})};export{$s as SourcesTableModal};
