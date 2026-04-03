import{aD as R,E as et,a as I,r as s,j as e,b6 as nt,s as n,g as t,b7 as ot,F as c,T as i,b8 as rt}from"./index-1a2e2dfa.js";async function at(r){return R.get("/lsat_history",{Authorization:r})}async function st(r,d){return R.post("/top_up_confirm",JSON.stringify({payment_hash:r,macaroon:d}))}async function it(r,d){return R.post("/top_up_lsat",JSON.stringify({macaroon:r,amount:d}))}const U=r=>r.length>12?`${r.slice(0,8)}…${r.slice(-4)}`:r,ct=r=>{if(!r)return"—";try{return new Date(r).toLocaleString()}catch{return r}},Ut=()=>{const{close:r,visible:d}=et("transactionHistory"),Y=I(o=>o.setBudget),$=I(o=>o.budget),[,M]=s.useState([]),[S,D]=s.useState([]),[m,O]=s.useState(""),[P,F]=s.useState(""),[T,k]=s.useState(!1),[f,j]=s.useState(""),[A,g]=s.useState(""),[b,x]=s.useState("idle"),[y,_]=s.useState(""),[,C]=s.useState(""),[q,v]=s.useState(!1),l=s.useRef(null),B=s.useRef($??0);s.useEffect(()=>{if(!d)return;(async()=>{k(!0);try{const a=await ot();F(a);const Z=a.replace(/^LSAT /,"").split(":")[0]||"";O(Z),B.current=$??0;const E=await at(a);M(E.lsats);const G=E.lsats.flatMap(h=>h.transactions.map(u=>({macaroon:h.macaroon,endpoint:u.endpoint,amount:u.amount,created_at:u.created_at})));G.sort((h,u)=>{const tt=h.created_at?new Date(h.created_at).getTime():0;return(u.created_at?new Date(u.created_at).getTime():0)-tt}),D(G)}catch(a){console.error("Failed to load LSAT history",a)}finally{k(!1)}})()},[d]),s.useEffect(()=>()=>{l.current&&clearInterval(l.current)},[]);const J=()=>{l.current&&clearInterval(l.current),r()},L=o=>o===""||o<=0?"Amount must be at least 1 sat":o>1e4?"Amount cannot exceed 10,000 sats":"",W=o=>{const a=o.target.value;if(a===""){j(""),g("");return}const p=parseInt(a,10);Number.isNaN(p)||(j(p),g(L(p)))},V=async()=>{const o=L(f);if(o){g(o);return}x("generating");try{const a=await it(m,f);_(a.payment_request),C(a.payment_hash),x("awaiting_payment"),B.current=$??0,l.current=setInterval(async()=>{try{const p=await rt(P);p.balance>B.current&&(clearInterval(l.current),l.current=null,await st(a.payment_hash,m),Y(p.balance),x("success"))}catch{}},3e3)}catch(a){console.error("Failed to generate invoice",a),x("error")}},K=()=>{navigator.clipboard.writeText(y),v(!0),setTimeout(()=>v(!1),2e3)},z=()=>{l.current&&(clearInterval(l.current),l.current=null),x("idle"),_(""),C(""),j(""),g(""),v(!1)},Q=b==="generating",X=()=>b==="success"?e.jsxs(vt,{align:"center",direction:"row",children:[e.jsx(Bt,{children:"✓"}),e.jsx(Rt,{children:"Top-up complete! Balance updated."}),e.jsx(St,{onClick:z,children:"Top up again"})]}):b==="awaiting_payment"||b==="generating"?e.jsxs(c,{direction:"column",children:[y&&e.jsxs(bt,{direction:"column",children:[e.jsx(yt,{children:"Lightning Invoice"}),e.jsxs(wt,{align:"center",direction:"row",children:[e.jsx($t,{children:`${y.slice(0,24)}…${y.slice(-8)}`}),e.jsx(Tt,{"data-testid":"copy-invoice-btn",onClick:K,children:q?"Copied!":"Copy"})]}),e.jsx(jt,{children:"Waiting for payment…"})]}),e.jsx(At,{onClick:z,children:"Cancel"})]}):e.jsxs(c,{direction:"column",children:[e.jsxs(ht,{align:"flex-start",direction:"row",children:[e.jsx(mt,{"data-testid":"topup-amount-input",max:1e4,min:1,onChange:W,placeholder:"Amount (sats)",type:"number",value:f}),e.jsx(ft,{"data-testid":"generate-invoice-btn",disabled:Q||!!A||f==="",onClick:V,children:"Generate Invoice"})]}),A&&e.jsx(gt,{"data-testid":"amount-error",children:A})]});return e.jsx(nt,{id:"transactionHistory",kind:"regular",onClose:J,children:e.jsxs(lt,{direction:"column",children:[e.jsx(pt,{children:"Transaction History"}),e.jsxs(dt,{direction:"column",children:[e.jsx(N,{children:"Top Up Balance"}),m&&e.jsxs(ut,{children:["Token: ",e.jsx(xt,{children:U(m)})]}),X()]}),e.jsx(N,{style:{marginTop:16},children:"Spend History"}),e.jsxs(kt,{direction:"column",children:[T&&e.jsx(H,{children:"Loading…"}),!T&&S.length===0&&e.jsx(H,{children:"No transactions yet"}),!T&&S.map((o,a)=>e.jsxs(_t,{align:"center",direction:"row",children:[e.jsx(w,{flex:"1.2",children:e.jsx(Ct,{children:U(o.macaroon)})}),e.jsx(w,{flex:"2",children:e.jsx(Lt,{children:o.endpoint})}),e.jsx(w,{flex:"0.8",style:{textAlign:"right"},children:e.jsxs(zt,{children:[o.amount," sats"]})}),e.jsx(w,{flex:"1.5",style:{textAlign:"right"},children:e.jsx(Et,{children:ct(o.created_at)})})]},`${o.macaroon}-${o.created_at}-${a}`))]})]})})},lt=n(c)`
  width: 100%;
  overflow: hidden;
`,pt=n(i)`
  font-size: 20px;
  font-weight: 600;
  color: ${t.white};
  margin-bottom: 16px;
`,dt=n(c)`
  background: ${t.BG2};
  border-radius: 8px;
  padding: 12px 16px;
  margin-bottom: 8px;
`,N=n(i)`
  font-size: 13px;
  font-weight: 600;
  color: ${t.GRAY6};
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 10px;
`,ut=n(i)`
  font-size: 12px;
  color: ${t.GRAY7};
  margin-bottom: 10px;
`,xt=n.span`
  font-family: monospace;
  color: ${t.SECONDARY_BLUE};
`,ht=n(c)`
  gap: 8px;
`,mt=n.input`
  flex: 1;
  background: ${t.INPUT_BG};
  border: 1px solid ${t.addAttributeBtn};
  border-radius: 6px;
  color: ${t.white};
  font-size: 14px;
  padding: 8px 12px;
  outline: none;
  min-width: 0;

  &::placeholder {
    color: ${t.INPUT_PLACEHOLDER};
  }

  &:focus {
    border-color: ${t.primaryBlue};
  }

  /* Remove number arrows */
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`,ft=n.button`
  background: ${t.primaryBlue};
  border: none;
  border-radius: 6px;
  color: ${t.white};
  cursor: pointer;
  font-size: 13px;
  font-weight: 600;
  padding: 8px 14px;
  white-space: nowrap;
  transition: opacity 0.15s ease;

  &:disabled {
    opacity: 0.45;
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    opacity: 0.85;
  }
`,gt=n(i)`
  color: ${t.primaryRed};
  font-size: 12px;
  margin-top: 6px;
`,bt=n(c)`
  background: ${t.BG1};
  border: 1px solid ${t.addAttributeBtn};
  border-radius: 6px;
  padding: 10px 12px;
  margin-bottom: 8px;
`,yt=n(i)`
  font-size: 11px;
  color: ${t.GRAY6};
  margin-bottom: 6px;
  text-transform: uppercase;
  letter-spacing: 0.04em;
`,wt=n(c)`
  gap: 8px;
`,$t=n(i)`
  font-family: monospace;
  font-size: 13px;
  color: ${t.SECONDARY_BLUE};
  flex: 1;
  word-break: break-all;
`,Tt=n.button`
  background: ${t.BUTTON1};
  border: none;
  border-radius: 4px;
  color: ${t.white};
  cursor: pointer;
  font-size: 12px;
  padding: 4px 10px;
  white-space: nowrap;

  &:hover {
    background: ${t.BUTTON1_HOVER};
  }
`,jt=n(i)`
  color: ${t.GRAY6};
  font-size: 12px;
  margin-top: 6px;
`,At=n.button`
  background: transparent;
  border: 1px solid ${t.addAttributeBtn};
  border-radius: 6px;
  color: ${t.GRAY6};
  cursor: pointer;
  font-size: 12px;
  padding: 6px 12px;
  align-self: flex-start;

  &:hover {
    border-color: ${t.primaryRed};
    color: ${t.primaryRed};
  }
`,vt=n(c)`
  gap: 8px;
`,Bt=n.span`
  color: ${t.primaryGreen};
  font-size: 18px;
  font-weight: 700;
`,Rt=n(i)`
  color: ${t.primaryGreen};
  font-size: 13px;
  flex: 1;
`,St=n.button`
  background: transparent;
  border: 1px solid ${t.addAttributeBtn};
  border-radius: 4px;
  color: ${t.GRAY6};
  cursor: pointer;
  font-size: 12px;
  padding: 4px 10px;

  &:hover {
    border-color: ${t.primaryBlue};
    color: ${t.white};
  }
`,kt=n(c)`
  max-height: 280px;
  overflow-y: auto;
  border: 1px solid ${t.addAttributeBtn};
  border-radius: 8px;

  /* Scrollbar */
  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-thumb {
    background: ${t.SCROLL_BAR};
    border-radius: 2px;
  }
`,_t=n(c)`
  padding: 10px 12px;
  gap: 8px;
  border-bottom: 1px solid ${t.addAttributeBtn};

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background: ${t.BG2};
  }
`,w=n(c)`
  flex: ${({flex:r})=>r??"1"};
  overflow: hidden;
`,Ct=n(i)`
  font-family: monospace;
  font-size: 11px;
  color: ${t.SECONDARY_BLUE};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Lt=n(i)`
  font-size: 12px;
  color: ${t.primaryText1};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,zt=n(i)`
  font-size: 12px;
  color: ${t.GRAY3};
  white-space: nowrap;
`,Et=n(i)`
  font-size: 11px;
  color: ${t.GRAY7};
  white-space: nowrap;
`,H=n(i)`
  color: ${t.GRAY6};
  font-size: 13px;
  padding: 20px;
  text-align: center;
`;export{Ut as TransactionHistoryModal};
