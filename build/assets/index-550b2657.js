import{s as d,g,r as i,a6 as C,o as E,a as F,j as t,F as S,T,b2 as L,b7 as G}from"./index-aa6ffb11.js";import{p as N,g as $}from"./index-73be2323.js";import{f as K}from"./index-bc059c4a.js";import{B as P}from"./index-61c87b79.js";import{C as R}from"./ClipLoader-95969108.js";import"./index-c1db3ea6.js";import"./index-091013ea.js";import"./SourcesTableIcon-0d4d91dc.js";import"./CheckIcon-d4787fd0.js";import"./DeleteNodeIcon-04267484.js";import"./SoundIcon-6a60f587.js";import"./SucessFeedBackIcon-609cc464.js";import"./Stack-cb36bc60.js";import"./clsx-0d79e05a.js";import"./createSvgIcon-05e3b32f.js";import"./TextareaAutosize-2fa69847.js";import"./FormControlLabel-2ef507d4.js";import"./Typography-339f0b85.js";import"./Switch-49dd88d6.js";const U=()=>{const[l,n]=i.useState(""),[p,m]=i.useState(!0),[u,h]=i.useState(!1),[x,f]=i.useState(0),[_,v]=i.useState([]),[c,b]=i.useState(),{close:j}=C("nodeAction"),s=K(),{normalizedSchemasByType:A,getSelectedActionDetail:w,removeSelectedActionDetail:B}=E(e=>e),{pubKey:z}=F();async function D(e){if(b(e),e.bounty){f(2);return}await y(e,null)}const M=async e=>{if(c){await y(c,e);return}n("Node Action not selected")},k=()=>{n(""),B(),j()},y=async(e,a)=>{if(!e){n("Node Action not selected");return}h(!0);try{const o={ref_id:(s==null?void 0:s.ref_id)||"",pubkey:z,action_name:e.name,bounty:a};await N(o),j(),L("Submitted"),B()}catch(o){const r=await(o==null?void 0:o.json());if(r){n(r.message||r.errorCode);return}n("Unable to submit node action")}finally{h(!1)}};return i.useEffect(()=>{async function e(){const o=s==null?void 0:s.node_type;if(o)try{const r=await $(A[o].action);v(r.actions),f(1),m(!1)}catch(r){console.error(r)}}const a=w();if(!a){e();return}b(a),a.bounty?f(2):y(a,null),m(!1)},[A,s,w]),t.jsxs(t.Fragment,{children:[t.jsx(S,{align:"center",direction:"row",justify:"space-between",mb:18,children:t.jsx(Y,{children:c==null?void 0:c.display_name})}),p&&t.jsxs(H,{children:[t.jsx(R,{color:g.lightGray,size:50})," "]}),x===1&&t.jsx(S,{mb:16,mt:16,children:_.map(e=>t.jsx(O,{onClick:()=>D(e),children:e.display_name},e.name))}),x===2&&t.jsx(P,{cancelBounty:k,loading:u,setBounty:M}),l&&t.jsx(W,{children:l})]})},H=d.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2rem 0;
`,O=d(T)`
  font-size: 1.2rem;
  font-family: 'Barlow';
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  cursor: pointer;
  color: ${g.white};

  &:hover {
    color: ${g.GRAY3};
  }
`,W=d(S)`
  font-size: 0.8125rem;
  font-family: 'Barlow';
  color: #ff8f80;
  line-height: 0.2px;
  margin-top: 0.75rem;
  padding-top: 1.25rem;
  align-items: center;
`,Y=d(T)`
  font-size: 1.5rem;
  font-weight: 600;
  font-family: 'Barlow';
  margin-bottom: 6px;
`,pe=()=>{const{close:l}=C("nodeAction"),{removeSelectedActionDetail:n}=E(u=>u),p=()=>{n(),l()},m="small";return t.jsx(G,{id:"nodeAction",kind:m,onClose:p,preventOutsideClose:!0,children:t.jsx(U,{})})};export{pe as NodeActionModal};
