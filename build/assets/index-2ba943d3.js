import{s as m,g,r as a,a2 as C,o as E,a as F,j as t,F as S,T,aU as L,aZ as G}from"./index-07edd55a.js";import{p as N,g as U}from"./index-4c540f72.js";import{f as $}from"./index-a10d75c3.js";import{B as K}from"./index-dad2b109.js";import{C as P}from"./ClipLoader-36f91b24.js";import"./index-1e2765d2.js";import"./index-75328821.js";import"./Stack-226b5b1b.js";import"./createSvgIcon-2b4b5a12.js";import"./TextareaAutosize-ee2fc0dd.js";import"./FormControlLabel-6f4e875a.js";import"./Typography-e4847f7b.js";import"./Switch-8be74290.js";const R=()=>{const[l,n]=a.useState(""),[p,d]=a.useState(!0),[u,h]=a.useState(!1),[x,f]=a.useState(0),[_,v]=a.useState([]),[c,j]=a.useState(),{close:A}=C("nodeAction"),s=$(),{normalizedSchemasByType:b,getSelectedActionDetail:w,removeSelectedActionDetail:B}=E(e=>e),{pubKey:z}=F();async function D(e){if(j(e),e.bounty){f(2);return}await y(e,null)}const M=async e=>{if(c){await y(c,e);return}n("Node Action not selected")},k=()=>{n(""),B(),A()},y=async(e,i)=>{if(!e){n("Node Action not selected");return}h(!0);try{const o={ref_id:(s==null?void 0:s.ref_id)||"",pubkey:z,action_name:e.name,bounty:i};await N(o),A(),L("Submitted"),B()}catch(o){const r=await(o==null?void 0:o.json());if(r){n(r.message||r.errorCode);return}n("Unable to submit node action")}finally{h(!1)}};return a.useEffect(()=>{async function e(){const o=s==null?void 0:s.node_type;if(o)try{const r=await U(b[o].action);v(r.actions),f(1),d(!1)}catch(r){console.error(r)}}const i=w();if(!i){e();return}j(i),i.bounty?f(2):y(i,null),d(!1)},[b,s,w]),t.jsxs(t.Fragment,{children:[t.jsx(S,{align:"center",direction:"row",justify:"space-between",mb:18,children:t.jsx(Y,{children:c==null?void 0:c.display_name})}),p&&t.jsxs(H,{children:[t.jsx(P,{color:g.lightGray,size:50})," "]}),x===1&&t.jsx(S,{mb:16,mt:16,children:_.map(e=>t.jsx(O,{onClick:()=>D(e),children:e.display_name},e.name))}),x===2&&t.jsx(K,{cancelBounty:k,loading:u,setBounty:M}),l&&t.jsx(W,{children:l})]})},H=m.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2rem 0;
`,O=m(T)`
  font-size: 1.2rem;
  font-family: 'Barlow';
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  cursor: pointer;
  color: ${g.white};

  &:hover {
    color: ${g.GRAY3};
  }
`,W=m(S)`
  font-size: 0.8125rem;
  font-family: 'Barlow';
  color: #ff8f80;
  line-height: 0.2px;
  margin-top: 0.75rem;
  padding-top: 1.25rem;
  align-items: center;
`,Y=m(T)`
  font-size: 1.5rem;
  font-weight: 600;
  font-family: 'Barlow';
  margin-bottom: 6px;
`,ae=()=>{const{close:l}=C("nodeAction"),{removeSelectedActionDetail:n}=E(u=>u),p=()=>{n(),l()},d="small";return t.jsx(G,{id:"nodeAction",kind:d,onClose:p,preventOutsideClose:!0,children:t.jsx(R,{})})};export{ae as NodeActionModal};
