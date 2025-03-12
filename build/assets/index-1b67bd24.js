import{L as D,M as H,N as Y,r as b,U as X,J as q,O as M,j as e,V as J,X as Q,s as m,g as l,F as N,q as V,x as K,D as Z,y as ee,b7 as te}from"./index-3f39d508.js";import{w as re}from"./index-5f8610fc.js";import{M as se,b as oe,a as P,T as x,c as ne}from"./TableRow-0083038e.js";function ie(t){return D("MuiTableContainer",t)}H("MuiTableContainer",["root"]);const ae=["className","component"],le=t=>{const{classes:c}=t;return Q({root:["root"]},ie,c)},pe=Y("div",{name:"MuiTableContainer",slot:"Root",overridesResolver:(t,c)=>c.root})({width:"100%",overflowX:"auto"}),de=b.forwardRef(function(c,w){const T=X({props:c,name:"MuiTableContainer"}),{className:E,component:v="div"}=T,f=q(T,ae),C=M({},T,{component:v}),B=le(C);return e.jsx(pe,M({ref:w,as:v,className:J(B.root,E),ownerState:C},f))}),ce=de,ue=m(N)`
  display: flex;
  flex: 1;
  min-height: 572px;
  max-height: 572px;
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
`,z=m.button`
  background: ${({active:t})=>t?l.primaryBlue:"transparent"};
  border: 1px solid ${({active:t})=>t?l.primaryGreen:l.GRAY9};
  color: ${({active:t})=>t?l.white:l.GRAY6};
  padding: 6px 12px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 6px;
  &:hover {
    border-color: ${({active:t})=>t?l.primaryGreen:l.GRAY6};
  }
`,he=m.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: ${l.BG1};
  ${({imageUrl:t})=>t&&`background-image: url(${t});`}
  background-size: cover;
`,ge=m.div`
  display: flex;
  flex-direction: column;
`,xe=m.span`
  font-size: 14px;
`,me=m.div`
  color: ${l.GRAY7};
  font-size: 12px;
  margin-top: 4px;
`,fe=m.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,be=m.div`
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
    width: ${t=>t.percentage}%;
    background-color: ${l.primaryGreen};
    border-radius: 2px;
  }
`,we=m.h2`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 16px;
  color: ${l.white};
`,y="impression_count",_="followers",ye=()=>{const[t,c]=b.useState(y),[w,T]=b.useState([]),[E,v]=b.useState([]),[f,C]=b.useState(null),[B,I]=b.useState(!0),[R,O]=b.useState(""),{tweetId:U}=V();if(b.useEffect(()=>{(async()=>{try{if(!U)return;const p=await Z(U,["Tweet","User"],["HAS_REPLY>","HAS_QUOTE>","THREAD_NEXT>","<POSTED"],t,!0,10,800),d=p.nodes.find(u=>u.ref_id===U);if(d&&C(d),t===y){const j=[...p.nodes.filter(a=>{var r,s;return a.node_type==="Tweet"&&((r=a.properties)==null?void 0:r.author)!==((s=d==null?void 0:d.properties)==null?void 0:s.author)}).map(a=>{var s,n;const r=p.nodes.find(o=>{var h,g;return o.node_type==="User"&&((h=o.properties)==null?void 0:h.author_id)===((g=a.properties)==null?void 0:g.author)});return r?{...a,properties:{...a.properties,twitter_handle:(s=r.properties)==null?void 0:s.twitter_handle,image_url:(n=r.properties)==null?void 0:n.image_url}}:a})].sort((a,r)=>{var o,h;const s=Number((o=a.properties)==null?void 0:o.impression_count)||0;return(Number((h=r.properties)==null?void 0:h.impression_count)||0)-s}).slice(0,20);j&&T(j)}if(t===_){const u=p.nodes.filter(r=>{var s,n;return r.node_type==="User"&&((s=r.properties)==null?void 0:s.author_id)!==((n=d==null?void 0:d.properties)==null?void 0:n.author)}).sort((r,s)=>{var n,o;return Number((n=s.properties)==null?void 0:n.followers)-Number((o=r.properties)==null?void 0:o.followers)}).slice(0,20),a=u.map(r=>{const s=p.edges.find(o=>o.edge_type==="POSTED"&&o.source===r.ref_id),n=p.edges.find(o=>o.edge_type==="POSTED"&&o.target===r.ref_id);return s?s.target:n?n.source:null}).map((r,s)=>{var S,A,$,F,k,G;if(!r)return null;const n=((A=(S=u[s])==null?void 0:S.properties)==null?void 0:A.followers)||0,o=((F=($=u[s])==null?void 0:$.properties)==null?void 0:F.twitter_handle)||"",h=((G=(k=u[s])==null?void 0:k.properties)==null?void 0:G.image_url)||"",g=p.nodes.find(W=>W.ref_id===r);return{...g,properties:{...(g==null?void 0:g.properties)||{},followers:n,twitter_handle:o,image_url:h}}}).filter(r=>r!==null);a&&v(a)}}catch(p){console.error("Error fetching tweets:",p),O("Failed to load engagement data")}finally{I(!1)}})()},[U,t]),B)return e.jsx("div",{style:{padding:24,textAlign:"center"},children:"Loading engagement data..."});if(R)return e.jsx("div",{style:{padding:24,color:"#FF4D4F"},children:R});if(!w.length&&!E.length)return e.jsx("div",{style:{padding:24,textAlign:"center"},children:"No engagement data available"});const L=t===y?w:E;return e.jsxs(ue,{children:[e.jsxs(N,{p:24,children:[e.jsx(we,{children:"Engagement Report"}),e.jsxs(N,{direction:"row",children:[e.jsx(z,{active:t===y,onClick:()=>c(y),children:"Total Engagement"}),e.jsx(z,{active:t===_,onClick:()=>c(_),children:"Follower Count"})]})]}),e.jsx(ce,{component:re,children:e.jsxs(se,{"aria-label":"a dense table",size:"small",sx:{minWidth:650},children:[e.jsx(oe,{children:e.jsxs(P,{children:[e.jsx(x,{align:"left",children:"Rank"}),e.jsx(x,{align:"left",children:"User Profile"}),e.jsx(x,{align:"left",children:"Tweet"}),t===y&&e.jsx(x,{align:"left",children:"Engagement"}),t===_&&e.jsx(x,{align:"left",children:"Followers"})]})}),e.jsx(ne,{children:L.map((i,p)=>{var u,j,a,r,s,n,o,h,g;const d=(Number((u=i.properties)==null?void 0:u.impression_count)/Number(((j=f==null?void 0:f.properties)==null?void 0:j.impression_count)||1)*100).toFixed(2);return e.jsxs(P,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[e.jsx(x,{children:p+1}),e.jsxs(x,{children:[e.jsx(he,{imageUrl:(a=i.properties)==null?void 0:a.image_url}),e.jsx(ge,{children:((r=i==null?void 0:i.properties)==null?void 0:r.twitter_handle)&&e.jsx(xe,{children:i.properties.twitter_handle})})]}),e.jsxs(x,{children:[((s=i.properties)==null?void 0:s.text)||"",((n=i==null?void 0:i.properties)==null?void 0:n.date)&&e.jsx(me,{children:K.unix(i.properties.date).fromNow()})]}),t===y&&e.jsxs(x,{children:[d," %",((o=f==null?void 0:f.properties)==null?void 0:o.impression_count)!==void 0&&((h=i.properties)==null?void 0:h.impression_count)&&e.jsx(fe,{children:e.jsx(be,{percentage:Number(d)})})]}),t===_&&e.jsx(x,{children:(g=i.properties)==null?void 0:g.followers})]},i.ref_id)})})]})})]})},Ee=()=>{const{close:t,visible:c}=ee("tweetAnalyze"),w=()=>{t()};return e.jsx(te,{"data-testid":"tweet-analyze-modal",id:"tweetAnalyze",kind:"large",noWrap:!0,onClose:w,preventOutsideClose:!0,children:c&&e.jsx(ye,{})})};export{Ee as TweetAnalyze};
