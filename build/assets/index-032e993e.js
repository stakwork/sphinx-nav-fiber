import{s as m,g,r as a,a3 as C,o as _,a as F,j as t,F as S,T as E,aV as L,a_ as G}from"./index-ccadd545.js";import{p as N,g as $}from"./index-56498069.js";import{f as K}from"./index-54e99eba.js";import{B as P}from"./index-6ec49f8d.js";import{C as R}from"./ClipLoader-64524d2a.js";import"./index-68f06f05.js";import"./index-086381ab.js";import"./Stack-05b08b14.js";import"./createSvgIcon-43b57de1.js";import"./TextareaAutosize-e83e8f38.js";import"./FormControlLabel-2ab5b81a.js";import"./Typography-a368d4f6.js";import"./Switch-043f7986.js";const U=()=>{const[l,n]=a.useState(""),[p,d]=a.useState(!0),[u,h]=a.useState(!1),[x,f]=a.useState(0),[T,v]=a.useState([]),[c,j]=a.useState(),{close:A}=C("nodeAction"),s=K(),{normalizedSchemasByType:b,getSelectedActionDetail:w,removeSelectedActionDetail:B}=_(e=>e),{pubKey:z}=F();async function D(e){if(j(e),e.bounty){f(2);return}await y(e,null)}const M=async e=>{if(c){await y(c,e);return}n("Node Action not selected")},k=()=>{n(""),B(),A()},y=async(e,i)=>{if(!e){n("Node Action not selected");return}h(!0);try{const o={ref_id:(s==null?void 0:s.ref_id)||"",pubkey:z,action_name:e.name,bounty:i};await N(o),A(),L("Submitted"),B()}catch(o){const r=await(o==null?void 0:o.json());if(r){n(r.message||r.errorCode);return}n("Unable to submit node action")}finally{h(!1)}};return a.useEffect(()=>{async function e(){const o=s==null?void 0:s.node_type;if(o)try{const r=await $(b[o].action);v(r.actions),f(1),d(!1)}catch(r){console.error(r)}}const i=w();if(!i){e();return}j(i),i.bounty?f(2):y(i,null),d(!1)},[b,s,w]),t.jsxs(t.Fragment,{children:[t.jsx(S,{align:"center",direction:"row",justify:"space-between",mb:18,children:t.jsx(W,{children:c==null?void 0:c.display_name})}),p&&t.jsxs(H,{children:[t.jsx(R,{color:g.lightGray,size:50})," "]}),x===1&&t.jsx(S,{mb:16,mt:16,children:T.map(e=>t.jsx(O,{onClick:()=>D(e),children:e.display_name},e.name))}),x===2&&t.jsx(P,{cancelBounty:k,loading:u,setBounty:M}),l&&t.jsx(V,{children:l})]})},H=m.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2rem 0;
`,O=m(E)`
  font-size: 1.2rem;
  font-family: 'Barlow';
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  cursor: pointer;
  color: ${g.white};

  &:hover {
    color: ${g.GRAY3};
  }
`,V=m(S)`
  font-size: 0.8125rem;
  font-family: 'Barlow';
  color: #ff8f80;
  line-height: 0.2px;
  margin-top: 0.75rem;
  padding-top: 1.25rem;
  align-items: center;
`,W=m(E)`
  font-size: 1.5rem;
  font-weight: 600;
  font-family: 'Barlow';
  margin-bottom: 6px;
`,ae=()=>{const{close:l}=C("nodeAction"),{removeSelectedActionDetail:n}=_(u=>u),p=()=>{n(),l()},d="small";return t.jsx(G,{id:"nodeAction",kind:d,onClose:p,preventOutsideClose:!0,children:t.jsx(U,{})})};export{ae as NodeActionModal};
