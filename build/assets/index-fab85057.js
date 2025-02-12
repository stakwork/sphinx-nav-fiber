import{s as u,g as m,r as i,a1 as z,o as E,a as F,j as t,F as d,T,aU as G,aZ as L}from"./index-9c987de8.js";import{p as U,g as $}from"./index-5b503cff.js";import{e as K}from"./index-27a2fda0.js";import{B as P}from"./index-5098bbce.js";import{C}from"./ClipLoader-0fbb6fa3.js";import"./index-6469662b.js";import"./index-0b0f83f2.js";import"./Stack-8267aec6.js";import"./createSvgIcon-88e4aecf.js";import"./TextareaAutosize-6d748574.js";const R=()=>{const[c,n]=i.useState(""),[f,l]=i.useState(!0),[p,h]=i.useState(!1),[S,y]=i.useState(0),[v,D]=i.useState([]),[x,A]=i.useState(),{close:j}=z("nodeAction"),s=K(),{normalizedSchemasByType:b,getSelectedActionDetail:w,removeSelectedActionDetail:B}=E(e=>e),{pubKey:M}=F();async function N(e){if(A(e),e.bounty){y(2);return}await g(e,null)}const _=async e=>{if(x){await g(x,e);return}n("Node Action not selected")},k=()=>{n(""),B(),j()},g=async(e,a)=>{if(!e){n("Node Action not selected");return}h(!0);try{const o={ref_id:(s==null?void 0:s.ref_id)||"",pubkey:M,action_name:e.name,bounty:a};await U(o),j(),G("Node Action Submited Successfully"),B()}catch(o){const r=await(o==null?void 0:o.json());if(r){n(r.message||r.errorCode);return}n("Unable to submit node action")}finally{h(!1)}};return i.useEffect(()=>{async function e(){const o=s==null?void 0:s.node_type;if(o)try{const r=await $(b[o].action);D(r.actions),y(1),l(!1)}catch(r){console.error(r)}}const a=w();if(!a){e();return}A(a),a.bounty?y(2):g(a,null),l(!1)},[b,s,w]),t.jsxs(t.Fragment,{children:[t.jsx(d,{align:"center",direction:"row",justify:"space-between",mb:18,children:t.jsx(Y,{children:"Node Action"})}),f&&t.jsxs(H,{children:[t.jsx(C,{color:m.lightGray,size:50})," "]}),S===1&&t.jsx(d,{mb:16,mt:16,children:v.map(e=>t.jsx(O,{onClick:()=>N(e),children:e.display_name},e.name))}),S===2&&t.jsx(P,{cancelBounty:k,setBounty:_}),p&&t.jsx(d,{align:"center",justify:"center",mt:20,children:t.jsx(C,{color:m.lightGray,size:25})}),c&&t.jsx(W,{children:c})]})},H=u.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2rem 0;
`,O=u(T)`
  font-size: 1.2rem;
  font-family: 'Barlow';
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  cursor: pointer;
  color: ${m.white};

  &:hover {
    color: ${m.GRAY3};
  }
`,W=u(d)`
  font-size: 0.8125rem;
  font-family: 'Barlow';
  color: #ff8f80;
  line-height: 0.2px;
  margin-top: 0.75rem;
  padding-top: 1.25rem;
  align-items: center;
`,Y=u(T)`
  font-size: 1.5rem;
  font-weight: 600;
  font-family: 'Barlow';
  margin-bottom: 6px;
`,ne=()=>{const{close:c}=z("nodeAction"),{removeSelectedActionDetail:n}=E(p=>p),f=()=>{n(),c()},l="small";return t.jsx(L,{id:"nodeAction",kind:l,onClose:f,preventOutsideClose:!0,children:t.jsx(R,{})})};export{ne as NodeActionModal};
