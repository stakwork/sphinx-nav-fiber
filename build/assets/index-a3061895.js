import{s as d,g,r as i,p as C,t as E,a as F,j as t,F as S,T,b1 as L,q as G}from"./index-ec7f32c8.js";import{p as N,g as $}from"./index-277f353a.js";import{i as K}from"./index-a7d5f584.js";import{B as P}from"./index-a52ba284.js";import{C as R}from"./ClipLoader-2bb06285.js";import"./index-b28b454b.js";import"./index-10c3d943.js";import"./SourcesTableIcon-1cbe5ee7.js";import"./CheckIcon-c0acc13f.js";import"./DeleteNodeIcon-9d773bad.js";import"./SoundIcon-6156ec7c.js";import"./SucessFeedBackIcon-b655c991.js";import"./Stack-0bbf5fe2.js";import"./clsx-4091dfec.js";import"./createSvgIcon-c3157b6f.js";import"./TextareaAutosize-f9220040.js";import"./FormControlLabel-5cfc0cbf.js";import"./Typography-6ea311cb.js";import"./Switch-44e36ddc.js";const U=()=>{const[l,n]=i.useState(""),[p,m]=i.useState(!0),[u,h]=i.useState(!1),[x,f]=i.useState(0),[_,v]=i.useState([]),[c,j]=i.useState(),{close:A}=C("nodeAction"),s=K(),{normalizedSchemasByType:b,getSelectedActionDetail:w,removeSelectedActionDetail:B}=E(e=>e),{pubKey:z}=F();async function D(e){if(j(e),e.bounty){f(2);return}await y(e,null)}const M=async e=>{if(c){await y(c,e);return}n("Node Action not selected")},k=()=>{n(""),B(),A()},y=async(e,a)=>{if(!e){n("Node Action not selected");return}h(!0);try{const o={ref_id:(s==null?void 0:s.ref_id)||"",pubkey:z,action_name:e.name,bounty:a};await N(o),A(),L("Submitted"),B()}catch(o){const r=await(o==null?void 0:o.json());if(r){n(r.message||r.errorCode);return}n("Unable to submit node action")}finally{h(!1)}};return i.useEffect(()=>{async function e(){const o=s==null?void 0:s.node_type;if(o)try{const r=await $(b[o].action);v(r.actions),f(1),m(!1)}catch(r){console.error(r)}}const a=w();if(!a){e();return}j(a),a.bounty?f(2):y(a,null),m(!1)},[b,s,w]),t.jsxs(t.Fragment,{children:[t.jsx(S,{align:"center",direction:"row",justify:"space-between",mb:18,children:t.jsx(W,{children:c==null?void 0:c.display_name})}),p&&t.jsxs(q,{children:[t.jsx(R,{color:g.lightGray,size:50})," "]}),x===1&&t.jsx(S,{mb:16,mt:16,children:_.map(e=>t.jsx(H,{onClick:()=>D(e),children:e.display_name},e.name))}),x===2&&t.jsx(P,{cancelBounty:k,loading:u,setBounty:M}),l&&t.jsx(O,{children:l})]})},q=d.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2rem 0;
`,H=d(T)`
  font-size: 1.2rem;
  font-family: 'Barlow';
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  cursor: pointer;
  color: ${g.white};

  &:hover {
    color: ${g.GRAY3};
  }
`,O=d(S)`
  font-size: 0.8125rem;
  font-family: 'Barlow';
  color: #ff8f80;
  line-height: 0.2px;
  margin-top: 0.75rem;
  padding-top: 1.25rem;
  align-items: center;
`,W=d(T)`
  font-size: 1.5rem;
  font-weight: 600;
  font-family: 'Barlow';
  margin-bottom: 6px;
`,pe=()=>{const{close:l}=C("nodeAction"),{removeSelectedActionDetail:n}=E(u=>u),p=()=>{n(),l()},m="small";return t.jsx(G,{id:"nodeAction",kind:m,onClose:p,preventOutsideClose:!0,children:t.jsx(U,{})})};export{pe as NodeActionModal};
