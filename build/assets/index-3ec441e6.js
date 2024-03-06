import{s as d,c as o,T as _,F as x,R as J,a as X,Y as Z,r as p,j as e,d as Pe,u as we,l as ye,b as Fe,e as de}from"./index-d235c36b.js";import{B as P}from"./index-ebe3b400.js";import{u as E}from"./index-13b29bcb.js";import{B,u as F,g as Me,h as be,e as z,i as Se,I as R,p as Oe,d as A,j as ve,k as Ge,m as te,F as se,n as De,o as Te,q as We}from"./react-toastify.esm-c1f13023.js";import{T as Ye,a as M,b as Ue,F as ee,M as oe,C as Ce,N as Ve,c as He,D as ne}from"./NoFilterResultIcon-c938240b.js";import{M as $e,a as _e,b as Qe,c as qe,d as Ke,e as Je}from"./index.esm-1e4be125.js";import{C as T}from"./ClipLoader-a3c62db1.js";import{S as O,C as ke,a as ze}from"./ChevronUpIcon-af1325f8.js";import{P as G,I as D,a as re,F as Ee}from"./Popover-4aef1318.js";import{B as Xe,T as Ze}from"./index-80f56cec.js";import{A as Ne,u as $}from"./index-1a60b77b.js";import{P as Be}from"./Popper-d2a7d2bb.js";import{C as Ae}from"./CheckIcon-fb050644.js";import{S as et}from"./SettingsIcon-2cfb5467.js";import{T as tt,a as st}from"./Tabs-cf68de01.js";import"./useSlotProps-aadac426.js";import"./InfoIcon-34912e05.js";const j=d(Ye)`
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
`,le=d(Ue)`
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
`,I={[J]:"RSS link",[X]:"Twitter Handle",[Z]:"Youtube channel"},ot="date",nt="edge_count",rt="alphabetically",W={[ot]:"Date",[nt]:"Edge Count",[rt]:"Alphabetically"},Ie="https://twitter.com",Re="IS_ALIAS",it=({data:t})=>{const a=F(n=>n.setQueuedSources),[r,i]=p.useState(""),h=async n=>{if(t!=null&&t.length)try{const s=await Pe.enable();await Me(n,s.pubkey),a(t.filter(l=>l.ref_id!==n))}catch(s){console.warn(s)}},m=async n=>{if(!(!n||!(t!=null&&t.length))){i(n);try{await be(n),a(t==null?void 0:t.filter(s=>s.ref_id!==n))}catch(s){console.warn(s)}finally{i("")}}};return t!=null&&t.length?e.jsxs(oe,{component:"table",children:[e.jsx(le,{children:e.jsxs(M,{component:"tr",children:[e.jsx(j,{className:"empty"}),e.jsx(j,{children:"Type"}),e.jsx(j,{children:"Source"}),e.jsx(j,{}),e.jsx(j,{className:"empty"})]})}),(t==null?void 0:t.length)&&e.jsx("tbody",{children:t==null?void 0:t.map(n=>e.jsxs(ie,{children:[e.jsx(j,{className:"empty"}),e.jsx(j,{children:I[n.source_type]}),e.jsx(j,{width:"268px",children:n.source_type==="twitter_handle"?e.jsxs(pe,{href:`${Ie}/${n.source}?open=system`,target:"_blank",children:["@",n.source]}):e.jsx(pe,{href:`${n.source}?open=system`,target:"_blank",children:n.source})}),e.jsx(j,{className:"cell-center",children:e.jsxs(x,{direction:"row",justify:"space-between",children:[e.jsx("div",{className:"approve-wrapper",children:e.jsx(he,{className:"centered",onClick:()=>h(n.ref_id),children:e.jsx($e,{color:o.primaryGreen,fontSize:24})})}),e.jsx("div",{className:"delete-wrapper",children:r===n.ref_id?e.jsx(T,{color:o.white,size:16}):e.jsx(Ce,{message:"Are you sure ?",onConfirm:()=>m(n.ref_id),children:e.jsx(he,{className:"centered",children:e.jsx(_e,{color:o.primaryRed,fontSize:24})})})})]})}),e.jsx(j,{className:"empty"})]},n.source))})]}):e.jsxs(x,{children:[e.jsx(_,{children:"There is not any results for selected filters"}),e.jsx(ee,{})]})},he=d(x)`
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
`,lt=()=>{const[t,a]=p.useState(!0),[r,i]=p.useState(""),[h,m]=F(l=>[l.queuedSources,l.setQueuedSources]);p.useEffect(()=>{(async()=>{a(!0);try{const c=await Se({approved:"False"});m(c.data)}catch(c){console.warn(c)}finally{a(!1)}})()},[m]);const n=l=>{i(r===l||!l?"":l)},s=h==null?void 0:h.filter(l=>!r||l.source_type===r);return e.jsxs(at,{align:"stretch",direction:"column",justify:"flex-end",children:[e.jsxs(ae,{align:"flex-start",justify:"space-between",children:[e.jsx(_,{className:"title",children:"Queued Sources"}),e.jsx(_,{className:"subtitle",children:"This is a queue of pending sources waiting for approval or denial from graph users. If you think a source will provide good content for the graph, you can pay to approve it. Think of this as an investment: you pay to add it to the source table, and if the content is popular you will earn from it. If content is not relevant to the graph, you should deny it."})]}),e.jsxs(x,{className:"filters",direction:"row",pb:16,px:36,children:[e.jsx(L,{className:z({selected:!r}),onClick:()=>n(""),size:"small",children:"All"}),Object.keys(I).map(l=>e.jsx(L,{className:z({selected:l===r}),onClick:()=>n(l),size:"small",children:I[l]},l))]}),e.jsx(ct,{align:"center",justify:t?"center":"flex-start",children:t?e.jsx(T,{color:o.white}):e.jsx(it,{data:s})})]})},at=d(x)`
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
`,ct=d(x)`
  min-height: 0;
  overflow: auto;
  flex: 1;
  width: 100%;
`,dt=({onSearch:t,placeholder:a,activeIcon:r,loadingIcon:i,defaultIcon:h,...m})=>{const[n,s]=p.useState(""),[l,c]=p.useState(!1),g=()=>{s(""),t(""),c(!1)},f=b=>{!b.target.value&&g(),s(b.target.value)},w=b=>{const{value:u}=b.currentTarget;s(u),!l&&(c(!0),setTimeout(()=>{t(u),u||g(),c(!1)},1e3),u||g())},y=()=>l?e.jsx(xe,{children:e.jsx(Y,{type:"button",children:i})}):e.jsx(xe,{children:n?e.jsx(Y,{onClick:g,type:"button",children:r}):e.jsx(Y,{type:"button",children:h})});return e.jsxs(ht,{children:[e.jsx(pt,{autoComplete:"off",autoCorrect:"off",inputProps:{"aria-label":"search sources"},onChange:f,onKeyDown:b=>{b.key==="Enter"&&w(b)},placeholder:a,value:n,...m}),y()]})},xe=d(x)`
  top: -50%;
  right: -3%;
  z-index: 3;
  position: absolute;
  transform: translate(-50%, 50%);
`,Y=d(R)`
  font-size: 24px;
`,ht=d(G)`
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
`,xt=({data:t,canEdit:a=!1})=>{const r=F(s=>s.setSources),[i,h]=p.useState(""),m=async(s,l)=>{if(t!=null&&t.length)try{await Oe(s,l);const c=t==null?void 0:t.findIndex(f=>f.ref_id===s),g=[...t];g[c]={...g[c],source:l.source},r(g)}catch(c){console.warn(c)}},n=async s=>{if(!(!s||!(t!=null&&t.length))){h(s);try{await be(s),r(t==null?void 0:t.filter(l=>l.ref_id!==s))}catch(l){console.warn(l)}finally{h("")}}};return t!=null&&t.length?e.jsxs(oe,{"aria-label":"a dense table",component:"table",id:"sources-table",size:"small",children:[e.jsx(le,{children:e.jsxs(M,{component:"tr",children:[e.jsx(j,{className:"empty"}),e.jsx(j,{children:"Type"}),e.jsx(j,{align:"left",children:"Source"}),a&&e.jsx(j,{align:"left"}),e.jsx(j,{className:"empty"})]})}),e.jsx(He,{component:"tbody",children:t==null?void 0:t.map(s=>e.jsxs(ie,{children:[e.jsx(j,{className:"empty"}),e.jsx(j,{align:"left",children:I[s.source_type]}),e.jsx(j,{align:"left",children:e.jsx(ut,{condition:a,wrapper:l=>e.jsx(ft,{id:s.ref_id,onSave:c=>m(s.ref_id,{source:c,source_type:s.source_type}),value:s.source,children:l}),children:s.source_type===X||s.source_type===Z||s.source_type===J?e.jsxs(e.Fragment,{children:[s.source_type===X&&e.jsxs(U,{href:`${Ie}/${s.source}`,target:"_blank",children:["@",s.source]}),s.source_type===Z&&e.jsx(U,{href:`${s.source}${s.source.includes("?")?"&":"?"}open=system`,target:"_blank",children:s.source}),s.source_type===J&&e.jsx(U,{href:s.source,target:"_blank",children:s.source})]}):e.jsx("div",{children:s.source})})}),a&&e.jsx(j,{align:"left",children:e.jsx("div",{className:"delete-wrapper",id:`delete-${s.source}`,children:i===s.ref_id?e.jsx(T,{color:o.white}):e.jsx(Ce,{message:"Are you sure ?",onConfirm:()=>n(s.ref_id),children:e.jsx(N,{className:"centered",children:e.jsx(Qe,{})})})})}),e.jsx(j,{className:"empty"})]},s.source))})]}):e.jsxs(gt,{children:[e.jsx(Ve,{}),e.jsx(_,{className:"text",children:"There is not any results for selected filters"})]})};function ut({condition:t,wrapper:a,children:r}){return t?a(r):r}const ft=({value:t,onSave:a,id:r,children:i})=>{const[h,m]=p.useState(!1),[n,s]=p.useState(t),[l,c]=p.useState(!1),g=async()=>{if(r){c(!0);try{await a(n),m(!1)}catch(f){console.warn(f)}finally{c(!1)}}};return e.jsx("div",{children:h?e.jsxs(mt,{direction:"row",children:[e.jsx(Xe,{className:"editable-cell__input",name:"cell-input",onChange:f=>s(f),value:n}),e.jsx(N,{align:"center",justify:"center",children:l?e.jsx(T,{}):e.jsx(qe,{onClick:g})}),e.jsx(N,{align:"center",className:"secondary",justify:"center",onClick:()=>m(!1),children:e.jsx(Ke,{})})]}):e.jsxs(jt,{direction:"row",children:[i,e.jsx(N,{onClick:()=>m(!0),children:e.jsx(Je,{size:20})})]})})},mt=d(x)`
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
`,gt=d(x)`
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
`,jt=d(x)`
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
`,wt=()=>{const[t,a]=p.useState(!0),[r,i]=p.useState(""),[h,m]=F(f=>[f.sources,f.setSources]),[n]=we(f=>[f.isAdmin]),[s,l]=p.useState("");p.useEffect(()=>{(async()=>{a(!0);try{const w=await Se();m(w.data)}catch(w){console.warn(w)}finally{a(!1)}})()},[m]);const c=f=>{i(r===f||!f?"":f)},g=p.useMemo(()=>h==null?void 0:h.filter(f=>(!r||f.source_type===r)&&(f.source.toLowerCase().startsWith(s.toLowerCase())||f.source.toLowerCase().includes(s.toLowerCase()))),[s,r,h]);return e.jsxs(yt,{align:"stretch",direction:"column",justify:"flex-end",children:[e.jsx(ae,{align:"center",direction:"row",justify:"space-between",children:e.jsx(_,{className:"title",children:"Sources for this Graph"})}),e.jsx(St,{children:e.jsx(dt,{activeIcon:e.jsx(A,{}),defaultIcon:e.jsx(O,{}),loadingIcon:e.jsx(T,{color:o.PRIMARY_BLUE,size:24}),onSearch:l,placeholder:"Find Topic"})}),e.jsxs(x,{className:"filters",direction:"row",pb:16,px:36,children:[e.jsx(L,{className:z({selected:!r}),onClick:()=>c(""),size:"small",children:"All"}),Object.keys(I).map(f=>e.jsx(L,{className:z({selected:f===r}),onClick:()=>c(f),size:"small",children:I[f]},f))]}),e.jsx(bt,{align:"center",justify:t?"center":"flex-start",children:t?e.jsx(T,{color:o.white}):e.jsx(xt,{canEdit:n,data:g})})]})},yt=d(x)`
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
`,bt=d(x)`
  min-height: 0;
  overflow: auto;
  flex: 1;
  width: 100%;
`,St=d(x)`
  margin: 0 0 16px 36px;
`,vt=({onSelect:t,selectedTopic:a})=>{const[r,i]=p.useState(!1),[h,m]=p.useState(""),[n,s]=p.useState([]),[l,c]=p.useState(!1),g=p.useRef(null);p.useEffect(()=>()=>s([]),[s]);const f=async u=>{const v={muted:"False",sort_by:Ne,search:u,skip:"0",limit:"1000"};c(!0);try{const S=await ve(v);s(S.data)}catch{s([])}finally{c(!1)}},w=p.useMemo(()=>ye.debounce(f,300),[]),y=u=>{t(u)},b=u=>{if(m(u),!u){s([]);return}u.length>2&&w(u)};return a?e.jsxs($t,{children:[e.jsx("div",{className:"value",children:a.topic}),e.jsx(x,{className:"icon",onClick:()=>t(null),children:e.jsx(A,{})})]}):e.jsxs(e.Fragment,{children:[e.jsxs(G,{ref:g,component:"form",onSubmit:u=>u.preventDefault(),sx:{p:"2px 4px",display:"flex",alignItems:"center",width:200},children:[e.jsx(D,{inputProps:{"aria-label":"search topic"},onChange:u=>b(u.target.value),onFocus:()=>i(!0),placeholder:"Search",size:"small",sx:{ml:1,flex:1},value:h}),h&&e.jsxs(e.Fragment,{children:[e.jsx(ue,{"aria-label":"search",onClick:()=>b(""),type:"button",children:e.jsx(A,{})}),e.jsx(ne,{orientation:"vertical",sx:{height:28,m:.5}})]}),e.jsx(ue,{"aria-label":"search",type:"button",children:l?e.jsx(T,{color:o.white,size:24}):e.jsx(O,{})})]}),g.current&&n.length?e.jsx(Ct,{anchorEl:g.current,open:r,placement:"bottom",children:e.jsx(e.Fragment,{children:n.map(u=>e.jsx(Tt,{className:z({active:a===u.ref_id}),onClick:()=>y(u),children:u.topic},"option"))})}):null]})},Tt=d(x).attrs({direction:"row",align:"center"})`
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
`,Ct=d(Be)`
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
`,$t=d(x).attrs({direction:"row",justify:"flex-start",align:"center"})`
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
`,_t=({selectedType:t,setSelectedType:a})=>{const[r,i]=p.useState(null),[h,m]=p.useState([]);p.useEffect(()=>{(async()=>{try{const{data:g}=await Ge();m(g.edge_types)}catch(g){console.warn(g)}})()},[m]);const n=c=>{i(c.currentTarget)},s=()=>{i(null)},l=c=>{a(c),s()};return e.jsxs("div",{children:[e.jsxs(kt,{onClick:n,children:[e.jsx("div",{className:"text",children:"Type"}),e.jsx("div",{className:"value",children:t}),e.jsx("div",{className:"icon",children:r?e.jsx(ze,{}):e.jsx(ke,{})})]}),e.jsx(Et,{anchorEl:r,anchorOrigin:{vertical:"bottom",horizontal:"left"},anchorPosition:{top:62,left:0},onClose:s,open:!!r,transformOrigin:{vertical:"top",horizontal:"left"},children:e.jsx(Ee,{children:h.map(c=>e.jsxs(zt,{className:z({active:c===t}),onClick:()=>l(c),children:[e.jsx("span",{className:"icon",children:c===t?e.jsx(Ae,{}):null}),e.jsx("span",{children:c})]},c))})})]})},kt=d(x).attrs({direction:"row",align:"center"})`
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
`,zt=d(x).attrs({direction:"row",align:"center"})`
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
`,Et=d(re)`
  .MuiPaper-root {
    background: ${o.BUTTON1};
    min-width: 149px;
    padding: 16px;
    color: ${o.GRAY3};
    box-shadow: 0px 1px 6px 0px rgba(0, 0, 0, 0.2);
    border-radius: 6px;
  }
`,Nt=({from:t,onSelect:a,selectedTopic:r,selectedType:i,setSelectedType:h})=>e.jsxs(x,{children:[e.jsx(x,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(x,{align:"center",direction:"row",children:e.jsx(Bt,{children:"Add edge"})})}),e.jsxs(At,{mb:12,children:[e.jsxs(V,{children:[e.jsx("div",{className:"label",children:"From"}),e.jsx("div",{children:t})]}),e.jsx(V,{children:e.jsx(_t,{selectedType:i,setSelectedType:h})}),e.jsxs(V,{children:[e.jsx("div",{className:"label",children:"To"}),e.jsx(vt,{onSelect:a,selectedTopic:r})]})]})]}),Bt=d(_)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,At=d(x).attrs({align:"flex-start",direction:"row",justify:"flex-start"})`
  color: ${o.white};
  .label {
    margin-bottom: 8px;
    font-weight: 500;
    font-size: 14px;
    color: ${o.GRAY3};
  }
`,V=d(x)`
  flex: 1 1 100%;
`,It=({topic:t,onClose:a})=>{const{close:r}=E("addEdge"),[i]=$(b=>[b.data]),h=te({mode:"onChange"}),[m,n]=p.useState(!1),[s,l]=p.useState(null),[c,g]=p.useState(""),f=()=>{a(),r()},w=async()=>{if(!(!s||!i)){n(!0);try{await De({from:t.ref_id,to:s==null?void 0:s.ref_id,relationship:c});const{ref_id:b}=t,{ref_id:u}=s;if(i){const v={...i};v[b]={...v[b],edgeList:[...v[b].edgeList,c]},v[u]&&(v[u]={...v[u],edgeList:[...v[u].edgeList,c]}),$.setState({data:v})}f()}catch(b){console.warn(b)}finally{n(!1)}}},y=m||!s||!c;return e.jsx(P,{id:"addEdge",kind:"large",onClose:f,preventOutsideClose:!0,children:e.jsxs(se,{...h,children:[e.jsx(Nt,{from:t.topic,onSelect:l,selectedTopic:s,selectedType:c,setSelectedType:g}),e.jsxs(B,{color:"secondary",disabled:y,onClick:w,size:"large",variant:"contained",children:["Confirm",m&&e.jsx(T,{color:o.BLUE_PRESS_STATE,size:10})]})]})})},Rt=()=>e.jsxs(x,{children:[e.jsx(x,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(x,{align:"center",direction:"row",children:e.jsx(Lt,{children:"Edit topic"})})}),e.jsx(x,{mb:12,children:e.jsx(Ze,{id:"cy-topic",maxLength:50,name:"topic",placeholder:"Add your topic",rules:{...Fe}})})]}),Lt=d(_)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,Pt=({topic:t,onClose:a})=>{const{close:r}=E("editTopic"),[i]=$(y=>[y.data]),h=te({mode:"onChange"}),{watch:m,setValue:n,reset:s}=h,[l,c]=p.useState(!1);p.useEffect(()=>(t&&n("topic",t==null?void 0:t.topic),()=>{s()}),[t,n,s]);const g=m("topic"),f=()=>{a(),r()},w=async()=>{c(!0);try{if(await Te((t==null?void 0:t.ref_id)||"",{topic:g.trim()}),i){const y={...i};y[t==null?void 0:t.ref_id].topic=g.trim(),$.setState({data:y})}f()}catch(y){console.warn(y)}finally{c(!1)}};return e.jsx(P,{id:"editTopic",kind:"regular",onClose:f,preventOutsideClose:!0,children:e.jsxs(se,{...h,children:[e.jsx(Rt,{}),e.jsxs(B,{color:"secondary",disabled:l,onClick:w,size:"large",variant:"contained",children:["Save",l&&e.jsx(T,{color:o.BLUE_PRESS_STATE,size:10})]})]})})},Ft=({onSelect:t,selectedTopic:a})=>{const[r,i]=p.useState(!1),[h,m]=p.useState(""),[n,s]=p.useState([]),[l,c]=p.useState(!1),g=p.useRef(null);p.useEffect(()=>()=>s([]),[s]);const f=async u=>{const v={muted:"False",sort_by:Ne,search:u,skip:"0",limit:"1000"};c(!0);try{const S=await ve(v);s(S.data)}catch{s([])}finally{c(!1)}},w=p.useMemo(()=>ye.debounce(f,300),[]),y=u=>{t(u)},b=u=>{if(m(u),!u){s([]);return}u.length>2&&w(u)};return a?e.jsxs(Gt,{children:[e.jsx("div",{className:"value",children:a.topic}),e.jsx(x,{className:"icon",onClick:()=>t(null),children:e.jsx(A,{})})]}):e.jsxs(e.Fragment,{children:[e.jsxs(G,{ref:g,component:"form",onSubmit:u=>u.preventDefault(),sx:{p:"2px 4px",display:"flex",alignItems:"center",width:200},children:[e.jsx(D,{inputProps:{"aria-label":"search topic"},onChange:u=>b(u.target.value),onFocus:()=>i(!0),placeholder:"Search",size:"small",sx:{ml:1,flex:1},value:h}),h&&e.jsxs(e.Fragment,{children:[e.jsx(fe,{"aria-label":"search",onClick:()=>b(""),type:"button",children:e.jsx(A,{})}),e.jsx(ne,{orientation:"vertical",sx:{height:28,m:.5}})]}),e.jsx(fe,{"aria-label":"search",type:"button",children:l?e.jsx(T,{color:o.white,size:24}):e.jsx(O,{})})]}),g.current&&n.length?e.jsx(Ot,{anchorEl:g.current,open:r,placement:"bottom",children:e.jsx(e.Fragment,{children:n.map(u=>e.jsx(Mt,{className:z({active:a===u.ref_id}),onClick:()=>y(u),children:u.topic},"option"))})}):null]})},Mt=d(x).attrs({direction:"row",align:"center"})`
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
`,Ot=d(Be)`
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
`,Gt=d(x).attrs({direction:"row",justify:"flex-start",align:"center"})`
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
`,Dt=({from:t,onSelect:a,selectedTopic:r})=>e.jsxs(x,{children:[e.jsx(x,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(x,{align:"center",direction:"row",children:e.jsx(Wt,{children:"Merge topic"})})}),e.jsxs(Yt,{mb:12,children:[e.jsxs(me,{children:[e.jsx("div",{className:"label",children:"From"}),e.jsx("div",{children:t})]}),e.jsxs(me,{ml:24,children:[e.jsx("div",{className:"label",children:"To"}),e.jsx(Ft,{onSelect:a,selectedTopic:r})]})]})]}),Wt=d(_)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,Yt=d(x).attrs({align:"flex-start",direction:"row",justify:"flex-start"})`
  color: ${o.white};
  .label {
    margin-bottom: 8px;
    font-weight: 500;
    font-size: 14px;
    color: ${o.GRAY3};
  }
`,me=d(x)`
  flex: 1 1 100%;
`,Ut=({topic:t,onClose:a})=>{const{close:r}=E("mergeTopic"),[i,h,m]=$(S=>[S.data,S.ids,S.total]),n=te({mode:"onChange"}),{watch:s,setValue:l,reset:c}=n,[g,f]=p.useState(!1),[w,y]=p.useState(null);p.useEffect(()=>(t&&l("topic",t==null?void 0:t.topic),()=>{c()}),[t,l,c]);const b=s("topic"),u=()=>{a(),r()},v=async()=>{if(!(!w||!i)){f(!0);try{await We({from:t.ref_id,to:w==null?void 0:w.ref_id});const{ref_id:S}=t;if(i[S]={...i[S],edgeList:[Re],edgeCount:i[S].edgeCount-1},$.setState({ids:h.filter(k=>k!==w.ref_id),total:m-1}),i){const k={...i};k[t==null?void 0:t.ref_id].topic=b.trim(),$.setState({data:k})}u()}catch(S){console.warn(S)}finally{f(!1)}}};return e.jsx(P,{id:"mergeTopic",kind:"regular",onClose:u,preventOutsideClose:!0,children:e.jsxs(se,{...n,children:[e.jsx(Dt,{from:t.topic,onSelect:y,selectedTopic:w}),e.jsxs(B,{color:"secondary",disabled:g,onClick:v,size:"large",variant:"contained",children:["Merge topics",g&&e.jsx(T,{color:o.BLUE_PRESS_STATE,size:10})]})]})})},Vt=()=>{const[t,a]=$(n=>[n.filters,n.setFilters]),[r,i]=p.useState(""),h=n=>{n.preventDefault(),a({search:r})},m=()=>{i(""),t.search&&a({search:""})};return e.jsxs(G,{component:"form",onSubmit:h,sx:{p:"2px 4px",display:"flex",alignItems:"center",width:300},children:[e.jsx(D,{autoComplete:"off",autoCorrect:"off",inputProps:{"aria-label":"search topic"},onChange:n=>i(n.target.value),placeholder:"Search",size:"small",spellCheck:"false",sx:{ml:1,flex:1},value:r}),r&&e.jsxs(e.Fragment,{children:[e.jsx(ge,{"aria-label":"search",onClick:m,type:"button",children:e.jsx(A,{})}),e.jsx(ne,{orientation:"vertical",sx:{height:28,m:.5}})]}),e.jsx(ge,{"aria-label":"search",onClick:h,type:"button",children:e.jsx(O,{})})]})},ge=d(R)`
  font-size: 24px;
`,Ht=({onChangeFilter:t,currentFilter:a})=>{const[r,i]=p.useState(null),h=s=>{i(s.currentTarget)},m=()=>{i(null)},n=s=>{t(s),m()};return e.jsxs("div",{children:[e.jsxs(Qt,{onClick:h,children:[e.jsx("div",{className:"text",children:"Sort By"}),e.jsx("div",{className:"value",children:W[a]}),e.jsx("div",{className:"icon",children:r?e.jsx(ze,{}):e.jsx(ke,{})})]}),e.jsx(Kt,{anchorEl:r,anchorOrigin:{vertical:"bottom",horizontal:"left"},anchorPosition:{top:62,left:0},onClose:m,open:!!r,transformOrigin:{vertical:"top",horizontal:"left"},children:e.jsx(Ee,{children:Object.keys(W).map(s=>e.jsxs(qt,{className:z({active:s===a}),onClick:()=>n(s),children:[e.jsx("span",{className:"icon",children:s===a?e.jsx(Ae,{}):null}),e.jsx("span",{children:W[s]})]},s))})})]})},Qt=d(x).attrs({direction:"row",align:"center"})`
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
`,qt=d(x).attrs({direction:"row",align:"center"})`
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
`,Kt=d(re)`
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
`,Jt=({topic:t,onClick:a})=>{const[r,i]=$(l=>[l.ids,l.total]),[h,m]=p.useState(!1),n=t.date_added_to_graph.toString(),s=async(l,c)=>{m(!0);try{await Te(l,{muted_topic:c}),$.setState({ids:r.filter(g=>g!==l),total:i-1})}catch(g){console.warn(g)}};return e.jsxs(ie,{children:[e.jsx(j,{className:"empty"}),e.jsx(j,{children:t.topic}),e.jsx(j,{children:t.edgeCount}),e.jsx(j,{children:t.edgeList.join(", ")}),e.jsx(j,{children:e.jsx("span",{children:new Date(Number(n)*1e3).toDateString()})}),e.jsx(j,{className:"cell-center",children:e.jsx(x,{direction:"row",justify:"space-between",children:e.jsx("div",{className:"approve-wrapper",children:h?e.jsx(T,{color:o.white,size:16}):e.jsx(e.Fragment,{children:t.muted_topic?e.jsx(je,{className:"centered",onClick:()=>s(t.ref_id,!1),children:e.jsx($e,{color:o.primaryGreen,fontSize:24})}):e.jsx(je,{className:"centered",onClick:()=>s(t.ref_id,!0),children:e.jsx(_e,{color:o.primaryRed,fontSize:24})})})})})}),e.jsx(j,{children:e.jsx(R,{onClick:l=>a(l,t.ref_id),children:e.jsx(et,{})})})]},t.topic)},je=d(x)`
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
`,Xt=p.memo(Jt),Zt=({showMuted:t,onTopicEdit:a})=>{const[r,i]=de.useState(null),[h,m]=de.useState(""),[n,s]=$(y=>[y.data,y.ids]),l=p.useCallback((y,b)=>{i(y.currentTarget),m(b)},[]),c=()=>{i(null)},g=y=>{a(h,y),c()},f=!!r,w=f?"simple-popover":void 0;return n?e.jsx(e.Fragment,{children:Object.keys(n).length?e.jsxs(e.Fragment,{children:[e.jsxs(oe,{component:"table",children:[e.jsx(le,{children:e.jsxs(M,{component:"tr",children:[e.jsx(j,{className:"empty"}),e.jsx(j,{children:"Type"}),e.jsx(j,{children:"Edge Count"}),e.jsx(j,{children:"Edge list"}),e.jsx(j,{children:"Date"}),e.jsx(j,{children:t?"Unmute":"Mute"}),e.jsx(j,{})]})}),n&&e.jsx("tbody",{children:s==null?void 0:s.map(y=>e.jsx(Xt,{onClick:l,topic:n[y]},y))})]}),h?e.jsxs(es,{anchorEl:r,anchorOrigin:{vertical:"bottom",horizontal:"right"},id:w,onClose:c,open:f,transformOrigin:{vertical:"top",horizontal:"right"},children:[e.jsx(H,{onClick:()=>g("editTopic"),children:"Rename"}),n[h].edgeList.includes(Re)?null:e.jsx(H,{onClick:()=>g("mergeTopic"),children:"Merge"}),e.jsx(H,{onClick:()=>g("addEdge"),children:"Add edge"})]}):null]}):e.jsxs(x,{children:[e.jsx(_,{children:"There is not any results for selected filters"}),e.jsx(ee,{})]})}):e.jsxs(x,{children:[e.jsx(_,{children:"There is not any results for selected filters"}),e.jsx(ee,{})]})},H=d(x).attrs({direction:"row",px:16,py:8})`
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
`,es=d(re)`
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
`,ts=()=>{const[t,a]=p.useState(!1),[r,i,h,m,n,s,l]=$(C=>[C.data,C.ids,C.total,C.setTopics,C.filters,C.setFilters,C.terminate]),{open:c}=E("editTopic"),{open:g}=E("mergeTopic"),{open:f}=E("addEdge"),[w,y]=p.useState(null),b={editTopic:c,mergeTopic:g,addEdge:f},u=p.useRef([]);p.useEffect(()=>{i.length&&(u.current=i)},[i]),p.useEffect(()=>{(async()=>{try{a(!0),await m()}catch{console.error("err")}finally{a(!1)}})()},[m,n]);const v=async()=>{try{a(!0),s({page:n.page+1})}catch(C){console.error("Error loading more data:",C)}finally{a(!1)}};p.useEffect(()=>()=>{l()},[l]);const S=C=>{s({sortBy:C})},k=()=>{y(null)},Le=(C,ce)=>{r&&(y(r[C]),typeof b[ce]=="function"&&b[ce]())};return e.jsxs(e.Fragment,{children:[e.jsxs(ss,{direction:"column",justify:"flex-end",children:[e.jsxs(ae,{align:"flex-start",direction:"row",justify:"space-between",children:[e.jsx(_,{className:"title",children:"Topics"}),e.jsxs(B,{disabled:t,onClick:()=>s({muted:!n.muted}),size:"medium",children:[n.muted?"Show Unmuted":"Show Muted",t&&e.jsx(T,{color:o.BLUE_PRESS_STATE,size:10})]})]}),e.jsxs(ns,{children:[e.jsx(Vt,{}),e.jsx(Ht,{currentFilter:n.sortBy,onChangeFilter:S})]}),e.jsx(os,{align:"center",justify:t&&!r?"center":"flex-start",children:t&&!r?e.jsx(T,{color:o.white}):e.jsxs(e.Fragment,{children:[e.jsx(Zt,{onTopicEdit:Le,showMuted:n.muted}),h>i.length?e.jsxs(B,{className:"load-more",disabled:t,onClick:v,children:["Load more",t&&e.jsx(T,{color:o.BLUE_PRESS_STATE,size:10})]}):null]})})]}),w&&e.jsx(Ut,{onClose:k,topic:w}),w&&e.jsx(Pt,{onClose:k,topic:w}),w&&e.jsx(It,{onClose:k,topic:w})]})},ss=d(x)`
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
`,os=d(x)`
  min-height: 0;
  overflow: auto;
  flex: 1;
  width: 100%;
`,ns=d(x).attrs({direction:"row",align:"center",justify:"space-between"})`
  padding: 0 36px;
  margin-bottom: 32px;
`,Q=t=>{const{children:a,value:r,index:i,...h}=t;return r===i?e.jsx(ls,{"aria-labelledby":`simple-tab-${i}`,hidden:r!==i,id:`simple-tabpanel-${i}`,role:"tabpanel",...h,children:a}):null};function q(t){return{id:`simple-tab-${t}`,"aria-controls":`simple-tabpanel-${t}`}}const rs=()=>{const[t,a]=p.useState(0),[r]=we(h=>[h.isAdmin]),i=(h,m)=>{a(m)};return e.jsxs(as,{direction:"column",children:[e.jsxs(is,{"aria-label":"sources tabs",onChange:i,value:t,children:[e.jsx(K,{disableRipple:!0,label:"Sources table",...q(0)}),r&&e.jsx(K,{color:o.white,disableRipple:!0,label:"Queued sources",...q(1)}),r&&e.jsx(K,{color:o.white,disableRipple:!0,label:"Topics",...q(1)})]}),e.jsx(Q,{index:0,value:t,children:e.jsx(wt,{})}),e.jsx(Q,{index:1,value:t,children:e.jsx(lt,{})}),e.jsx(Q,{index:2,value:t,children:e.jsx(ts,{})})]})},is=d(tt)`
  && {
    background: rgba(0, 0, 0, 0.2);

    .MuiTabs-indicator {
      background: ${o.primaryBlue};
    }
  }
`,K=d(st)`
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
`,ls=d(x)`
  display: flex;
  flex: 1;
  min-height: 572px;
  padding: 20px 0;
  max-height: 572px;
`,as=d(x)`
  min-height: 0;
  flex: 1;
`,$s=()=>{const{close:t}=E("sourcesTable");return e.jsx(P,{background:"BG1",id:"sourcesTable",kind:"large",noWrap:!0,onClose:t,children:e.jsx(rs,{})})};export{$s as SourcesTableModal};
