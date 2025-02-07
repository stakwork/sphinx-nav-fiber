import{s as m,a as d,r as n,a0 as T,n as z,g as L,j as t,F as l,T as E,aT as $,aY as K}from"./index-2f478e0f.js";import{p as P,g as R}from"./index-137c6f81.js";import{f as U}from"./index-a4e7b102.js";import{B as Y}from"./index-6a7991d8.js";import{C}from"./ClipLoader-199081f3.js";import"./index-aabfda7d.js";import"./index-7972771d.js";import"./Stack-009e8de1.js";import"./createSvgIcon-20070863.js";import"./TextareaAutosize-31196e51.js";const H=()=>{const[a,s]=n.useState(""),[u,c]=n.useState(!0),[f,S]=n.useState(!1),[h,p]=n.useState(0),[v,D]=n.useState([]),[x,A]=n.useState(),[M,N]=n.useState(null),{close:j}=T("nodeAction"),r=U(),{normalizedSchemasByType:b,getSelectedActionDetail:w,removeSelectedActionDetail:B}=z(e=>e),{pubKey:_}=L();async function k(e){if(A(e),e.bounty){p(2);return}await y(e)}const F=async e=>{if(N(e),x){await y(x);return}s("Node Action not selected")},G=()=>{s(""),B(),j()},y=async e=>{if(!e){s("Node Action not selected");return}S(!0);try{const o={ref_id:(r==null?void 0:r.ref_id)||"",pubkey:_,action_name:e.name,bounty:M};await P(o),j(),$("Node Action Submited Successfully"),B()}catch(o){const i=await(o==null?void 0:o.json());if(i){s(i.message||i.errorCode);return}s("Unable to submit node action")}finally{S(!1)}};return n.useEffect(()=>{async function e(){const i=r==null?void 0:r.node_type;if(i)try{const g=await R(b[i].action);D(g.actions),p(1),c(!1)}catch(g){console.error(g)}}const o=w();if(!o){e();return}A(o),o.bounty?p(2):y(o),c(!1)},[b,r,w]),t.jsxs(t.Fragment,{children:[t.jsx(l,{align:"center",direction:"row",justify:"space-between",mb:18,children:t.jsx(I,{children:"Node Action"})}),u&&t.jsxs(O,{children:[t.jsx(C,{color:d.lightGray,size:50})," "]}),h===1&&t.jsx(l,{mb:16,mt:16,children:v.map(e=>t.jsx(W,{onClick:()=>k(e),children:e.display_name},e.name))}),h===2&&t.jsx(Y,{cancelBounty:G,setBounty:F}),f&&t.jsx(l,{align:"center",justify:"center",mt:20,children:t.jsx(C,{color:d.lightGray,size:25})}),a&&t.jsx(q,{children:a})]})},O=m.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2rem 0;
`,W=m(E)`
  font-size: 1.2rem;
  font-family: 'Barlow';
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  cursor: pointer;
  color: ${d.white};

  &:hover {
    color: ${d.GRAY3};
  }
`,q=m(l)`
  font-size: 0.8125rem;
  font-family: 'Barlow';
  color: #ff8f80;
  line-height: 0.2px;
  margin-top: 0.75rem;
  padding-top: 1.25rem;
  align-items: center;
`,I=m(E)`
  font-size: 1.5rem;
  font-weight: 600;
  font-family: 'Barlow';
  margin-bottom: 6px;
`,re=()=>{const{close:a}=T("nodeAction"),{removeSelectedActionDetail:s}=z(f=>f),u=()=>{s(),a()},c="small";return t.jsx(K,{id:"nodeAction",kind:c,onClose:u,preventOutsideClose:!0,children:t.jsx(H,{})})};export{re as NodeActionModal};
