import{s as m,a as d,r as n,a0 as T,n as z,g as L,j as t,F as l,T as E,aT as $,aY as K}from"./index-3f2162d7.js";import{p as P,g as R}from"./index-ada6478c.js";import{f as U}from"./index-201073a3.js";import{B as Y}from"./index-5be7b972.js";import{C}from"./ClipLoader-f214c59b.js";import"./index-93893277.js";import"./index-b2f7c39a.js";import"./Stack-2a2bb3b2.js";import"./createSvgIcon-b935afa2.js";import"./TextareaAutosize-12fefad3.js";const H=()=>{const[a,s]=n.useState(""),[u,c]=n.useState(!0),[f,S]=n.useState(!1),[h,p]=n.useState(0),[v,D]=n.useState([]),[x,A]=n.useState(),[M,N]=n.useState(null),{close:j}=T("nodeAction"),r=U(),{normalizedSchemasByType:b,getSelectedActionDetail:w,removeSelectedActionDetail:B}=z(e=>e),{pubKey:_}=L();async function k(e){if(A(e),e.bounty){p(2);return}await y(e)}const F=async e=>{if(N(e),x){await y(x);return}s("Node Action not selected")},G=()=>{s(""),B(),j()},y=async e=>{if(!e){s("Node Action not selected");return}S(!0);try{const o={ref_id:(r==null?void 0:r.ref_id)||"",pubkey:_,action_name:e.name,bounty:M};await P(o),j(),$("Node Action Submited Successfully"),B()}catch(o){const i=await(o==null?void 0:o.json());if(i){s(i.message||i.errorCode);return}s("Unable to submit node action")}finally{S(!1)}};return n.useEffect(()=>{async function e(){const i=r==null?void 0:r.node_type;if(i)try{const g=await R(b[i].action);D(g.actions),p(1),c(!1)}catch(g){console.error(g)}}const o=w();if(!o){e();return}A(o),o.bounty?p(2):y(o),c(!1)},[b,r,w]),t.jsxs(t.Fragment,{children:[t.jsx(l,{align:"center",direction:"row",justify:"space-between",mb:18,children:t.jsx(I,{children:"Node Action"})}),u&&t.jsxs(O,{children:[t.jsx(C,{color:d.lightGray,size:50})," "]}),h===1&&t.jsx(l,{mb:16,mt:16,children:v.map(e=>t.jsx(W,{onClick:()=>k(e),children:e.display_name},e.name))}),h===2&&t.jsx(Y,{cancelBounty:G,setBounty:F}),f&&t.jsx(l,{align:"center",justify:"center",mt:20,children:t.jsx(C,{color:d.lightGray,size:25})}),a&&t.jsx(q,{children:a})]})},O=m.div`
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
