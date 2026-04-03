import{aD as R,E as nt,a as N,r as s,j as e,b6 as ot,s as n,g as t,b7 as rt,F as c,T as i,b8 as at,b9 as st}from"./index-74dcc36e.js";async function it(r){return R.get("/lsat_history",{Authorization:r})}async function ct(r,p){return R.post("/top_up_confirm",JSON.stringify({payment_hash:r,macaroon:p}))}async function lt(r,p){return R.post("/top_up_lsat",JSON.stringify({macaroon:r,amount:p}))}const H=r=>r.length>12?`${r.slice(0,8)}…${r.slice(-4)}`:r,dt=r=>{if(!r)return"—";try{return new Date(r).toLocaleString()}catch{return r}},Nt=()=>{const{close:r,visible:p}=nt("transactionHistory"),S=N(o=>o.setBudget),$=N(o=>o.budget),[,O]=s.useState([]),[k,P]=s.useState([]),[u,F]=s.useState(""),[q,J]=s.useState(""),[T,C]=s.useState(!1),[f,j]=s.useState(""),[A,g]=s.useState(""),[b,h]=s.useState("idle"),[y,_]=s.useState(""),[,L]=s.useState(""),[W,v]=s.useState(!1),l=s.useRef(null),B=s.useRef($??0);s.useEffect(()=>{if(!p)return;(async()=>{C(!0);try{const a=await rt();J(a);const tt=a.replace(/^LSAT /,"").split(":")[0]||"";F(tt),B.current=$??0;const I=await it(a);O(I.lsats);const U=I.lsats.flatMap(m=>m.transactions.map(x=>({macaroon:m.macaroon,endpoint:x.endpoint,amount:x.amount,created_at:x.created_at})));U.sort((m,x)=>{const et=m.created_at?new Date(m.created_at).getTime():0;return(x.created_at?new Date(x.created_at).getTime():0)-et}),P(U)}catch(a){console.error("Failed to load LSAT history",a)}finally{C(!1)}})()},[p]),s.useEffect(()=>()=>{l.current&&clearInterval(l.current)},[]);const V=()=>{l.current&&clearInterval(l.current),r()},z=o=>o===""||o<=0?"Amount must be at least 1 sat":o>1e4?"Amount cannot exceed 10,000 sats":"",K=o=>{const a=o.target.value;if(a===""){j(""),g("");return}const d=parseInt(a,10);Number.isNaN(d)||(j(d),g(z(d)))},G=async()=>{if(!u){await at(S),r();return}const o=z(f);if(o){g(o);return}h("generating");try{const a=await lt(u,f);_(a.payment_request),L(a.payment_hash),h("awaiting_payment"),B.current=$??0,l.current=setInterval(async()=>{try{const d=await st(q);d.balance>B.current&&(clearInterval(l.current),l.current=null,await ct(a.payment_hash,u),S(d.balance),h("success"))}catch{}},3e3)}catch(a){console.error("Failed to generate invoice",a),h("error")}},Q=()=>{navigator.clipboard.writeText(y),v(!0),setTimeout(()=>v(!1),2e3)},E=()=>{l.current&&(clearInterval(l.current),l.current=null),h("idle"),_(""),L(""),j(""),g(""),v(!1)},X=b==="generating",Z=()=>b==="success"?e.jsxs(Bt,{align:"center",direction:"row",children:[e.jsx(Rt,{children:"✓"}),e.jsx(St,{children:"Top-up complete! Balance updated."}),e.jsx(kt,{onClick:E,children:"Top up again"})]}):b==="awaiting_payment"||b==="generating"?e.jsxs(c,{direction:"column",children:[y&&e.jsxs(yt,{direction:"column",children:[e.jsx(wt,{children:"Lightning Invoice"}),e.jsxs($t,{align:"center",direction:"row",children:[e.jsx(Tt,{children:`${y.slice(0,24)}…${y.slice(-8)}`}),e.jsx(jt,{"data-testid":"copy-invoice-btn",onClick:Q,children:W?"Copied!":"Copy"})]}),e.jsx(At,{children:"Waiting for payment…"})]}),e.jsx(vt,{onClick:E,children:"Cancel"})]}):u?e.jsxs(c,{direction:"column",children:[e.jsxs(ft,{align:"flex-start",direction:"row",children:[e.jsx(gt,{"data-testid":"topup-amount-input",max:1e4,min:1,onChange:K,placeholder:"Amount (sats)",type:"number",value:f}),e.jsx(M,{"data-testid":"generate-invoice-btn",disabled:X||!!A||f==="",onClick:G,children:"Generate Invoice"})]}),A&&e.jsx(bt,{"data-testid":"amount-error",children:A})]}):e.jsx(c,{direction:"column",children:e.jsx(M,{"data-testid":"get-started-btn",onClick:G,children:"Get Started"})});return e.jsx(ot,{id:"transactionHistory",kind:"regular",onClose:V,children:e.jsxs(pt,{direction:"column",children:[e.jsx(ut,{children:"Transaction History"}),e.jsxs(xt,{direction:"column",children:[e.jsx(Y,{children:"Top Up Balance"}),u&&e.jsxs(ht,{children:["Token: ",e.jsx(mt,{children:H(u)})]}),Z()]}),e.jsx(Y,{style:{marginTop:16},children:"Spend History"}),e.jsxs(Ct,{direction:"column",children:[T&&e.jsx(D,{children:"Loading…"}),!T&&k.length===0&&e.jsx(D,{children:"No transactions yet"}),!T&&k.map((o,a)=>e.jsxs(_t,{align:"center",direction:"row",children:[e.jsx(w,{flex:"1.2",children:e.jsx(Lt,{children:H(o.macaroon)})}),e.jsx(w,{flex:"2",children:e.jsx(zt,{children:o.endpoint})}),e.jsx(w,{flex:"0.8",style:{textAlign:"right"},children:e.jsxs(Gt,{children:[o.amount," sats"]})}),e.jsx(w,{flex:"1.5",style:{textAlign:"right"},children:e.jsx(Et,{children:dt(o.created_at)})})]},`${o.macaroon}-${o.created_at}-${a}`))]})]})})},pt=n(c)`
  width: 100%;
  overflow: hidden;
`,ut=n(i)`
  font-size: 20px;
  font-weight: 600;
  color: ${t.white};
  margin-bottom: 16px;
`,xt=n(c)`
  background: ${t.BG2};
  border-radius: 8px;
  padding: 12px 16px;
  margin-bottom: 8px;
`,Y=n(i)`
  font-size: 13px;
  font-weight: 600;
  color: ${t.GRAY6};
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 10px;
`,ht=n(i)`
  font-size: 12px;
  color: ${t.GRAY7};
  margin-bottom: 10px;
`,mt=n.span`
  font-family: monospace;
  color: ${t.SECONDARY_BLUE};
`,ft=n(c)`
  gap: 8px;
`,gt=n.input`
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
`,M=n.button`
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
`,bt=n(i)`
  color: ${t.primaryRed};
  font-size: 12px;
  margin-top: 6px;
`,yt=n(c)`
  background: ${t.BG1};
  border: 1px solid ${t.addAttributeBtn};
  border-radius: 6px;
  padding: 10px 12px;
  margin-bottom: 8px;
`,wt=n(i)`
  font-size: 11px;
  color: ${t.GRAY6};
  margin-bottom: 6px;
  text-transform: uppercase;
  letter-spacing: 0.04em;
`,$t=n(c)`
  gap: 8px;
`,Tt=n(i)`
  font-family: monospace;
  font-size: 13px;
  color: ${t.SECONDARY_BLUE};
  flex: 1;
  word-break: break-all;
`,jt=n.button`
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
`,At=n(i)`
  color: ${t.GRAY6};
  font-size: 12px;
  margin-top: 6px;
`,vt=n.button`
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
`,Bt=n(c)`
  gap: 8px;
`,Rt=n.span`
  color: ${t.primaryGreen};
  font-size: 18px;
  font-weight: 700;
`,St=n(i)`
  color: ${t.primaryGreen};
  font-size: 13px;
  flex: 1;
`,kt=n.button`
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
`,Ct=n(c)`
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
`,Lt=n(i)`
  font-family: monospace;
  font-size: 11px;
  color: ${t.SECONDARY_BLUE};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,zt=n(i)`
  font-size: 12px;
  color: ${t.primaryText1};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Gt=n(i)`
  font-size: 12px;
  color: ${t.GRAY3};
  white-space: nowrap;
`,Et=n(i)`
  font-size: 11px;
  color: ${t.GRAY7};
  white-space: nowrap;
`,D=n(i)`
  color: ${t.GRAY6};
  font-size: 13px;
  padding: 20px;
  text-align: center;
`;export{Nt as TransactionHistoryModal};
