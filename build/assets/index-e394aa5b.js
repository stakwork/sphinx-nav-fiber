import{s as m,a as d,r as n,a1 as z,n as E,g as L,j as t,F as l,T,aU as U,aZ as $}from"./index-9f953937.js";import{p as K,g as P}from"./index-7a18a40e.js";import{e as R}from"./index-0145b65d.js";import{B as H}from"./index-acbb0141.js";import{C}from"./ClipLoader-e02cb2f5.js";import"./index-dc8c8579.js";import"./index-7d182dcf.js";import"./Stack-478e6ce0.js";import"./createSvgIcon-b17399c2.js";import"./TextareaAutosize-6066b26b.js";const O=()=>{const[a,s]=n.useState(""),[u,c]=n.useState(!0),[f,S]=n.useState(!1),[h,p]=n.useState(0),[v,D]=n.useState([]),[x,A]=n.useState(),[M,N]=n.useState(null),{close:j}=z("nodeAction"),r=R(),{normalizedSchemasByType:b,getSelectedActionDetail:w,removeSelectedActionDetail:B}=E(e=>e),{pubKey:_}=L();async function k(e){if(A(e),e.bounty){p(2);return}await y(e)}const F=async e=>{if(N(e),x){await y(x);return}s("Node Action not selected")},G=()=>{s(""),B(),j()},y=async e=>{if(!e){s("Node Action not selected");return}S(!0);try{const o={ref_id:(r==null?void 0:r.ref_id)||"",pubkey:_,action_name:e.name,bounty:M};await K(o),j(),U("Node Action Submited Successfully"),B()}catch(o){const i=await(o==null?void 0:o.json());if(i){s(i.message||i.errorCode);return}s("Unable to submit node action")}finally{S(!1)}};return n.useEffect(()=>{async function e(){const i=r==null?void 0:r.node_type;if(i)try{const g=await P(b[i].action);D(g.actions),p(1),c(!1)}catch(g){console.error(g)}}const o=w();if(!o){e();return}A(o),o.bounty?p(2):y(o),c(!1)},[b,r,w]),t.jsxs(t.Fragment,{children:[t.jsx(l,{align:"center",direction:"row",justify:"space-between",mb:18,children:t.jsx(q,{children:"Node Action"})}),u&&t.jsxs(W,{children:[t.jsx(C,{color:d.lightGray,size:50})," "]}),h===1&&t.jsx(l,{mb:16,mt:16,children:v.map(e=>t.jsx(Y,{onClick:()=>k(e),children:e.display_name},e.name))}),h===2&&t.jsx(H,{cancelBounty:G,setBounty:F}),f&&t.jsx(l,{align:"center",justify:"center",mt:20,children:t.jsx(C,{color:d.lightGray,size:25})}),a&&t.jsx(Z,{children:a})]})},W=m.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2rem 0;
`,Y=m(T)`
  font-size: 1.2rem;
  font-family: 'Barlow';
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  cursor: pointer;
  color: ${d.white};

  &:hover {
    color: ${d.GRAY3};
  }
`,Z=m(l)`
  font-size: 0.8125rem;
  font-family: 'Barlow';
  color: #ff8f80;
  line-height: 0.2px;
  margin-top: 0.75rem;
  padding-top: 1.25rem;
  align-items: center;
`,q=m(T)`
  font-size: 1.5rem;
  font-weight: 600;
  font-family: 'Barlow';
  margin-bottom: 6px;
`,re=()=>{const{close:a}=z("nodeAction"),{removeSelectedActionDetail:s}=E(f=>f),u=()=>{s(),a()},c="small";return t.jsx($,{id:"nodeAction",kind:c,onClose:u,preventOutsideClose:!0,children:t.jsx(O,{})})};export{re as NodeActionModal};
