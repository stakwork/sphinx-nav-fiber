import{s as d,g,r as i,E as C,p as E,a as F,j as t,F as S,T,b1 as L,b6 as G}from"./index-3fb06edb.js";import{p as N,g as $}from"./index-ca742f7c.js";import{e as K}from"./index-d6c48c54.js";import{B as P}from"./index-5c8d7580.js";import{C as R}from"./ClipLoader-718f5911.js";import"./index-4a0df21d.js";import"./index-f38d013f.js";import"./SourcesTableIcon-d73b4b69.js";import"./CheckIcon-5a235f8d.js";import"./DeleteNodeIcon-96a11f80.js";import"./SoundIcon-5cfe54be.js";import"./SucessFeedBackIcon-3b89b4dc.js";import"./Stack-ef53240c.js";import"./clsx-07776742.js";import"./createSvgIcon-7acd57cf.js";import"./TextareaAutosize-c2b306bd.js";import"./FormControlLabel-a9ea8b64.js";import"./Typography-df876157.js";import"./Switch-587b8deb.js";const U=()=>{const[l,n]=i.useState(""),[p,m]=i.useState(!0),[u,h]=i.useState(!1),[x,f]=i.useState(0),[_,v]=i.useState([]),[c,b]=i.useState(),{close:j}=C("nodeAction"),s=K(),{normalizedSchemasByType:A,getSelectedActionDetail:w,removeSelectedActionDetail:B}=E(e=>e),{pubKey:z}=F();async function D(e){if(b(e),e.bounty){f(2);return}await y(e,null)}const M=async e=>{if(c){await y(c,e);return}n("Node Action not selected")},k=()=>{n(""),B(),j()},y=async(e,a)=>{if(!e){n("Node Action not selected");return}h(!0);try{const o={ref_id:(s==null?void 0:s.ref_id)||"",pubkey:z,action_name:e.name,bounty:a};await N(o),j(),L("Submitted"),B()}catch(o){const r=await(o==null?void 0:o.json());if(r){n(r.message||r.errorCode);return}n("Unable to submit node action")}finally{h(!1)}};return i.useEffect(()=>{async function e(){const o=s==null?void 0:s.node_type;if(o)try{const r=await $(A[o].action);v(r.actions),f(1),m(!1)}catch(r){console.error(r)}}const a=w();if(!a){e();return}b(a),a.bounty?f(2):y(a,null),m(!1)},[A,s,w]),t.jsxs(t.Fragment,{children:[t.jsx(S,{align:"center",direction:"row",justify:"space-between",mb:18,children:t.jsx(Y,{children:c==null?void 0:c.display_name})}),p&&t.jsxs(H,{children:[t.jsx(R,{color:g.lightGray,size:50})," "]}),x===1&&t.jsx(S,{mb:16,mt:16,children:_.map(e=>t.jsx(O,{onClick:()=>D(e),children:e.display_name},e.name))}),x===2&&t.jsx(P,{cancelBounty:k,loading:u,setBounty:M}),l&&t.jsx(W,{children:l})]})},H=d.div`
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
