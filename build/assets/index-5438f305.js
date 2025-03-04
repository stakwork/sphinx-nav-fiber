import{s as m,g,r as i,a6 as C,o as E,a as F,j as t,F as S,T,aY as L,b1 as G}from"./index-5f66bd69.js";import{p as N,g as $}from"./index-b4a1cb1e.js";import{e as K}from"./index-0dc2447a.js";import{B as P}from"./index-c99a6a6a.js";import{C as R}from"./ClipLoader-520c1933.js";import"./index-5cac0a9e.js";import"./index-be6092b4.js";import"./SourcesTableIcon-b88bf841.js";import"./CheckIcon-45934500.js";import"./DeleteNodeIcon-7ea32c57.js";import"./SoundIcon-061186b9.js";import"./SucessFeedBackIcon-5a8f06fe.js";import"./Stack-ae37105e.js";import"./createSvgIcon-0fd3adf3.js";import"./TextareaAutosize-f40673c7.js";import"./FormControlLabel-f69ce413.js";import"./Typography-1723043b.js";import"./Switch-09e060d1.js";const U=()=>{const[l,n]=i.useState(""),[p,d]=i.useState(!0),[u,h]=i.useState(!1),[x,f]=i.useState(0),[_,v]=i.useState([]),[c,j]=i.useState(),{close:A}=C("nodeAction"),s=K(),{normalizedSchemasByType:b,getSelectedActionDetail:w,removeSelectedActionDetail:B}=E(e=>e),{pubKey:z}=F();async function D(e){if(j(e),e.bounty){f(2);return}await y(e,null)}const M=async e=>{if(c){await y(c,e);return}n("Node Action not selected")},k=()=>{n(""),B(),A()},y=async(e,a)=>{if(!e){n("Node Action not selected");return}h(!0);try{const o={ref_id:(s==null?void 0:s.ref_id)||"",pubkey:z,action_name:e.name,bounty:a};await N(o),A(),L("Submitted"),B()}catch(o){const r=await(o==null?void 0:o.json());if(r){n(r.message||r.errorCode);return}n("Unable to submit node action")}finally{h(!1)}};return i.useEffect(()=>{async function e(){const o=s==null?void 0:s.node_type;if(o)try{const r=await $(b[o].action);v(r.actions),f(1),d(!1)}catch(r){console.error(r)}}const a=w();if(!a){e();return}j(a),a.bounty?f(2):y(a,null),d(!1)},[b,s,w]),t.jsxs(t.Fragment,{children:[t.jsx(S,{align:"center",direction:"row",justify:"space-between",mb:18,children:t.jsx(W,{children:c==null?void 0:c.display_name})}),p&&t.jsxs(Y,{children:[t.jsx(R,{color:g.lightGray,size:50})," "]}),x===1&&t.jsx(S,{mb:16,mt:16,children:_.map(e=>t.jsx(H,{onClick:()=>D(e),children:e.display_name},e.name))}),x===2&&t.jsx(P,{cancelBounty:k,loading:u,setBounty:M}),l&&t.jsx(O,{children:l})]})},Y=m.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2rem 0;
`,H=m(T)`
  font-size: 1.2rem;
  font-family: 'Barlow';
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  cursor: pointer;
  color: ${g.white};

  &:hover {
    color: ${g.GRAY3};
  }
`,O=m(S)`
  font-size: 0.8125rem;
  font-family: 'Barlow';
  color: #ff8f80;
  line-height: 0.2px;
  margin-top: 0.75rem;
  padding-top: 1.25rem;
  align-items: center;
`,W=m(T)`
  font-size: 1.5rem;
  font-weight: 600;
  font-family: 'Barlow';
  margin-bottom: 6px;
`,me=()=>{const{close:l}=C("nodeAction"),{removeSelectedActionDetail:n}=E(u=>u),p=()=>{n(),l()},d="small";return t.jsx(G,{id:"nodeAction",kind:d,onClose:p,preventOutsideClose:!0,children:t.jsx(U,{})})};export{me as NodeActionModal};
