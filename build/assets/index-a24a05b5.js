import{L as H,M as Y,N as X,r as w,U as V,J as q,O as G,j as e,V as J,X as K,s as m,g as l,q as Q,F as _,x as Z,D as ee,y as re,b5 as te}from"./index-1c452cad.js";import{L as se}from"./index-fe9bf88e.js";import{C as M}from"./ClipLoader-6388f9f3.js";import{w as oe}from"./index-177bd254.js";import{M as ne,b as ie,a as I,T as x,c as ae}from"./TableRow-7243e660.js";import"./SourcesTableIcon-24c2ada0.js";import"./CheckIcon-e30d0cd0.js";import"./DeleteNodeIcon-1dce80ef.js";import"./SoundIcon-6b8aa8f9.js";import"./SucessFeedBackIcon-2a3446eb.js";function le(r){return H("MuiTableContainer",r)}Y("MuiTableContainer",["root"]);const pe=["className","component"],ce=r=>{const{classes:h}=r;return K({root:["root"]},le,h)},de=X("div",{name:"MuiTableContainer",slot:"Root",overridesResolver:(r,h)=>h.root})({width:"100%",overflowX:"auto"}),he=w.forwardRef(function(h,b){const T=V({props:h,name:"MuiTableContainer"}),{className:N,component:S="div"}=T,f=q(T,pe),U=G({},T,{component:S}),B=ce(U);return e.jsx(de,G({ref:b,as:S,className:J(B.root,N),ownerState:U},f))}),ue=he,P=m.button`
  background: ${({active:r})=>r?l.primaryBlue:"transparent"};
  border: 1px solid ${({active:r})=>r?l.primaryGreen:l.GRAY9};
  color: ${({active:r})=>r?l.white:l.GRAY6};
  padding: 6px 12px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 6px;
  &:hover {
    border-color: ${({active:r})=>r?l.primaryGreen:l.GRAY6};
  }
`,ge=m.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: ${l.BG1};
  ${({imageUrl:r})=>r&&`background-image: url(${r});`}
  background-size: cover;
`,xe=m.div`
  display: flex;
  flex-direction: column;
`,me=m.span`
  font-size: 14px;
`,fe=m.div`
  color: ${l.GRAY7};
  font-size: 12px;
`,we=m.a`
  color: ${l.SOURCE_TABLE_LINK};
  cursor: pointer;
  font-size: 16px;
  height: 16px;
  margin-left: 8px;
`,be=m.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,je=m.div`
  width: 100px;
  height: 4px;
  background-color: ${l.BG1};
  border-radius: 2px;
  position: relative;
  &::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: ${r=>r.percentage}%;
    background-color: ${l.primaryGreen};
    border-radius: 2px;
  }
`,ye=m.h2`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 16px;
  color: ${l.white};
`,j="impression_count",v="followers",_e=()=>{const[r,h]=w.useState(j),[b,T]=w.useState([]),[N,S]=w.useState([]),[f,U]=w.useState(null),[B,$]=w.useState(!0),[A,O]=w.useState(""),{tweetId:R}=Q();if(w.useEffect(()=>{(async()=>{try{if(!R)return;$(!0);const d=await ee(R,["Tweet","User"],["HAS_REPLY>","HAS_QUOTE>","THREAD_NEXT>","<POSTED"],r,!0,10,800),a=d.nodes.find(u=>u.ref_id===R);if(a&&U(a),r===j){const y=[...d.nodes.filter(p=>{var t,o,i,s;return p.node_type==="Tweet"&&((t=p.properties)==null?void 0:t.author)!==((o=a==null?void 0:a.properties)==null?void 0:o.author)&&((i=p.properties)==null?void 0:i.twitter_handle)!==((s=a==null?void 0:a.properties)==null?void 0:s.twitter_handle)}).map(p=>{var o,i;const t=d.nodes.find(s=>{var c,g;return s.node_type==="User"&&((c=s.properties)==null?void 0:c.author_id)===((g=p.properties)==null?void 0:g.author)});return t?{...p,properties:{...p.properties,twitter_handle:(o=t.properties)==null?void 0:o.twitter_handle,image_url:(i=t.properties)==null?void 0:i.image_url}}:p})].sort((p,t)=>{var s,c;const o=Number((s=p.properties)==null?void 0:s.impression_count)||0;return(Number((c=t.properties)==null?void 0:c.impression_count)||0)-o}).slice(0,20);y&&T(y)}if(r===v){const u=d.nodes.filter(t=>{var o,i,s,c;return t.node_type==="User"&&((o=t.properties)==null?void 0:o.author_id)!==((i=a==null?void 0:a.properties)==null?void 0:i.author)&&((s=t.properties)==null?void 0:s.twitter_handle)!==((c=a==null?void 0:a.properties)==null?void 0:c.twitter_handle)}).sort((t,o)=>{var i,s;return Number((i=o.properties)==null?void 0:i.followers)-Number((s=t.properties)==null?void 0:s.followers)}).slice(0,20),p=u.map(t=>{const o=d.edges.find(s=>s.edge_type==="POSTED"&&s.source===t.ref_id),i=d.edges.find(s=>s.edge_type==="POSTED"&&s.target===t.ref_id);return o?o.target:i?i.source:null}).map((t,o)=>{var E,C,L,k,z,F;if(!t)return null;const i=((C=(E=u[o])==null?void 0:E.properties)==null?void 0:C.followers)||0,s=((k=(L=u[o])==null?void 0:L.properties)==null?void 0:k.twitter_handle)||"",c=((F=(z=u[o])==null?void 0:z.properties)==null?void 0:F.image_url)||"",g=d.nodes.find(D=>D.ref_id===t);return{...g,properties:{...(g==null?void 0:g.properties)||{},followers:i,twitter_handle:s,image_url:c}}}).filter(t=>t!==null);p&&S(p)}}catch(d){console.error("Error fetching tweets:",d),O("Failed to load engagement data")}finally{$(!1)}})()},[R,r]),A)return e.jsx("div",{style:{padding:24,color:"#FF4D4F"},children:A});if(!b.length&&!N.length)return B?e.jsxs(_,{align:"center",grow:1,justify:"center",children:[e.jsx(M,{color:l.white}),e.jsx("div",{style:{padding:24,fontSize:16,textAlign:"center",color:l.white},children:"Loading engagement data..."})]}):e.jsx("div",{style:{padding:24,textAlign:"center"},children:"No engagement data available"});const W=r===j?b:N;return e.jsxs(Te,{children:[e.jsxs(_,{p:24,children:[e.jsx(ye,{children:"Engagement Report"}),e.jsxs(_,{direction:"row",children:[e.jsx(P,{active:r===j,onClick:()=>h(j),children:"Total Engagement"}),e.jsx(P,{active:r===v,onClick:()=>h(v),children:"Follower Count"})]})]}),B?e.jsxs(_,{align:"center",grow:1,justify:"center",children:[e.jsx(M,{color:l.white}),e.jsx("div",{style:{padding:24,fontSize:16,textAlign:"center",color:l.white},children:"Loading engagement data..."})]}):e.jsx(ue,{component:oe,children:e.jsxs(ne,{"aria-label":"a dense table",size:"small",sx:{minWidth:650},children:[e.jsx(ie,{children:e.jsxs(I,{children:[e.jsx(x,{align:"left",children:"Rank"}),e.jsx(x,{align:"left",children:"User Profile"}),e.jsx(x,{align:"left",children:"Tweet"}),r===j&&e.jsx(x,{align:"left",children:"Engagement"}),r===v&&e.jsx(x,{align:"left",children:"Followers"})]})}),e.jsx(ae,{children:W.map((n,d)=>{var u,y,p,t,o,i,s,c,g,E,C;const a=(Number((u=n.properties)==null?void 0:u.impression_count)/Number(((y=f==null?void 0:f.properties)==null?void 0:y.impression_count)||1)*100).toFixed(2);return e.jsxs(I,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[e.jsx(x,{children:d+1}),e.jsxs(x,{children:[e.jsx(ge,{imageUrl:(p=n.properties)==null?void 0:p.image_url}),e.jsx(xe,{children:((t=n==null?void 0:n.properties)==null?void 0:t.twitter_handle)&&e.jsx(me,{children:n.properties.twitter_handle})})]}),e.jsxs(x,{children:[((o=n.properties)==null?void 0:o.text)||"",e.jsxs(_,{align:"center",direction:"row",justify:"flex-start",mt:16,children:[((i=n==null?void 0:n.properties)==null?void 0:i.date)&&e.jsx(fe,{"aria-label":"Time since tweet",children:Z.unix(n.properties.date).fromNow()}),e.jsx(we,{"aria-label":"View tweet on Twitter",href:`https://twitter.com/${(s=n==null?void 0:n.properties)==null?void 0:s.twitter_handle}/status/${(c=n==null?void 0:n.properties)==null?void 0:c.tweet_id}?open=system`,rel:"noopener noreferrer",target:"_blank",children:e.jsx(se,{})})]})]}),r===j&&e.jsxs(x,{children:[a," %",((g=f==null?void 0:f.properties)==null?void 0:g.impression_count)!==void 0&&((E=n.properties)==null?void 0:E.impression_count)&&e.jsx(be,{children:e.jsx(je,{percentage:Number(a)})})]}),r===v&&e.jsx(x,{align:"right",children:Number((C=n.properties)==null?void 0:C.followers).toLocaleString()})]},n.ref_id)})})]})})]})},Te=m(_)`
  display: flex;
  flex: 1;
  min-height: 572px;
  overflow: auto;

  @media (max-width: 1024px) {
    width: 100%;
    min-height: 400px;
    max-height: 400px;
  }

  @media (max-width: 768px) {
    width: 100%;
    min-height: 300px;
    max-height: 300px;
  }

  @media (max-width: 480px) {
    width: 100%;
    min-height: 250px;
    max-height: 250px;
  }
`,Le=()=>{const{close:r,visible:h}=re("tweetAnalyze"),b=()=>{r()};return e.jsx(te,{"data-testid":"tweet-analyze-modal",id:"tweetAnalyze",kind:"full",noWrap:!0,onClose:b,preventOutsideClose:!0,children:h&&e.jsx(_e,{})})};export{Le as TweetAnalyze};
