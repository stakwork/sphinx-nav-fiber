import{L as se,M as te,N as oe,r as b,U as ie,J as ne,O as z,j as e,V as le,X as ae,F as G,g as h,x as ce,v as I,s as N,q as pe,D as de,b5 as he}from"./index-4c8c9024.js";import{L as D}from"./index-1fd63366.js";import{C as Y}from"./ClipLoader-9d24884a.js";import{z as H}from"./index-7b7eee1f.js";import{M as V,b as X,a as k,T as x,c as q}from"./TableRow-da4b4ad8.js";import"./SourcesTableIcon-6857194d.js";import"./CheckIcon-c10d3c27.js";import"./DeleteNodeIcon-53d0c4c0.js";import"./SoundIcon-4faadce6.js";import"./SucessFeedBackIcon-fcf6410f.js";function ge(r){return se("MuiTableContainer",r)}te("MuiTableContainer",["root"]);const ue=["className","component"],me=r=>{const{classes:n}=r;return ae({root:["root"]},ge,n)},xe=oe("div",{name:"MuiTableContainer",slot:"Root",overridesResolver:(r,n)=>n.root})({width:"100%",overflowX:"auto"}),fe=b.forwardRef(function(n,j){const f=ie({props:n,name:"MuiTableContainer"}),{className:v,component:c="div"}=f,S=ne(f,ue),R=z({},f,{component:c}),F=me(R);return e.jsx(xe,z({ref:j,as:c,className:le(F.root,v),ownerState:R},S))}),J=fe,je=({sortBy:r,idsToAnalyze:n})=>{const[j,f]=b.useState([]),[v,c]=b.useState([]),[S,R]=b.useState(!0),[F,g]=b.useState("");b.useEffect(()=>{(async()=>{if(n.length!==0){R(!0);try{const w=await Promise.all(n.map(a=>I(a,[],["HAS_REPLY>","HAS_QUOTE>","THREAD_NEXT>","<POSTED"],r,!0,0,10,800))),u=[],T=[],_=[];w.forEach((a,C)=>{const t=a.nodes.find(m=>m.ref_id===n[C]);if(t&&u.push(t),r===E.ENGAGEMENT){const A=[...a.nodes.filter(p=>{var o,i,d,l;return p.node_type==="Tweet"&&((o=p.properties)==null?void 0:o.author)!==((i=t==null?void 0:t.properties)==null?void 0:i.author)&&((d=p.properties)==null?void 0:d.twitter_handle)!==((l=t==null?void 0:t.properties)==null?void 0:l.twitter_handle)}).map(p=>{var i,d,l,y;const o=a.nodes.find(L=>{var O,$;return L.node_type==="User"&&((O=L.properties)==null?void 0:O.author_id)===(($=p.properties)==null?void 0:$.author)});return o?{...p,properties:{...p.properties,twitter_handle:(i=o.properties)==null?void 0:i.twitter_handle,image_url:(d=o.properties)==null?void 0:d.image_url,impression_percentage:(Number((l=p.properties)==null?void 0:l.impression_count)/Number(((y=t==null?void 0:t.properties)==null?void 0:y.impression_count)||1)*100).toFixed(2)}}:p})].sort((p,o)=>{var l,y;const i=Number((l=p.properties)==null?void 0:l.impression_percentage)||0;return(Number((y=o.properties)==null?void 0:y.impression_percentage)||0)-i}).slice(0,20);A&&T.push(...A)}if(r===E.FOLLOWERS){const m=a.nodes.filter(o=>{var i,d,l,y;return o.node_type==="User"&&((i=o.properties)==null?void 0:i.author_id)!==((d=t==null?void 0:t.properties)==null?void 0:d.author)&&((l=o.properties)==null?void 0:l.twitter_handle)!==((y=t==null?void 0:t.properties)==null?void 0:y.twitter_handle)}).sort((o,i)=>{var d,l;return Number((d=i.properties)==null?void 0:d.followers)-Number((l=o.properties)==null?void 0:l.followers)}).slice(0,20),p=m.map(o=>{const i=a.edges.find(l=>l.source===o.ref_id),d=a.edges.find(l=>l.target===o.ref_id);return i?i.target:d?d.source:null}).map((o,i)=>{var O,$,B,M,P,W;if(!o)return null;const d=(($=(O=m[i])==null?void 0:O.properties)==null?void 0:$.followers)||0,l=((M=(B=m[i])==null?void 0:B.properties)==null?void 0:M.twitter_handle)||"",y=((W=(P=m[i])==null?void 0:P.properties)==null?void 0:W.image_url)||"",L=a.nodes.find(re=>re.ref_id===o);return{...L,properties:{...(L==null?void 0:L.properties)||{},followers:d,twitter_handle:l,image_url:y}}}).filter(o=>o!==null);p&&_.push(...p)}}),f(T.sort((a,C)=>{var t,m;return Number((t=C.properties)==null?void 0:t.impression_percentage)-Number((m=a.properties)==null?void 0:m.impression_percentage)}).slice(0,20)),c(_.sort((a,C)=>{var t,m;return Number((t=C.properties)==null?void 0:t.followers)-Number((m=a.properties)==null?void 0:m.followers)}).slice(0,20)),R(!1)}catch(w){console.error("Error fetching tweets:",w),R(!1),g("Error fetching tweets")}finally{R(!1)}}})()},[r,n]);const U=r===E.ENGAGEMENT?j:v;return F?e.jsx("div",{style:{padding:24,color:"#FF4D4F"},children:F}):!j.length&&!v.length?S?e.jsxs(G,{align:"center",grow:1,justify:"center",children:[e.jsx(Y,{color:h.white}),e.jsx("div",{style:{padding:24,fontSize:16,textAlign:"center",color:h.white},children:"Loading engagement data..."})]}):e.jsx("div",{style:{padding:24,textAlign:"center"},children:"No engagement data available"}):e.jsx(J,{component:H,children:e.jsxs(V,{"aria-label":"a dense table",size:"small",sx:{minWidth:650},children:[e.jsx(X,{children:e.jsxs(k,{children:[e.jsx(x,{align:"left",children:"Rank"}),e.jsx(x,{align:"left",children:"User Profile"}),e.jsx(x,{align:"left",children:"Tweet"}),r===E.ENGAGEMENT&&e.jsx(x,{align:"left",children:"Engagement"}),r===E.FOLLOWERS&&e.jsx(x,{align:"left",children:"Followers"})]})}),e.jsx(q,{children:U.map((s,w)=>{var u,T,_,a,C,t,m,A,p,o,i;return e.jsxs(k,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[e.jsx(x,{children:w+1}),e.jsxs(x,{children:[e.jsx(Q,{imageUrl:(u=s.properties)==null?void 0:u.image_url}),e.jsx(Z,{children:((T=s==null?void 0:s.properties)==null?void 0:T.twitter_handle)&&e.jsx(K,{children:s.properties.twitter_handle})})]}),e.jsxs(x,{children:[((_=s.properties)==null?void 0:_.text)||"",e.jsxs(G,{align:"center",direction:"row",justify:"flex-start",mt:16,children:[((a=s==null?void 0:s.properties)==null?void 0:a.date)&&e.jsx(Ee,{"aria-label":"Time since tweet",children:ce.unix(s.properties.date).fromNow()}),e.jsx(ee,{"aria-label":"View tweet on Twitter",href:`https://twitter.com/${(C=s==null?void 0:s.properties)==null?void 0:C.twitter_handle}/status/${(t=s==null?void 0:s.properties)==null?void 0:t.tweet_id}?open=system`,rel:"noopener noreferrer",target:"_blank",children:e.jsx(D,{})})]})]}),r===E.ENGAGEMENT&&e.jsxs(x,{children:[(m=s.properties)==null?void 0:m.impression_percentage," %",((A=s.properties)==null?void 0:A.impression_count)!==void 0&&((p=s.properties)==null?void 0:p.impression_count)&&e.jsx(we,{children:e.jsx(Te,{percentage:Number((o=s.properties)==null?void 0:o.impression_percentage)})})]}),r===E.FOLLOWERS&&e.jsx(x,{align:"right",children:Number((i=s.properties)==null?void 0:i.followers).toLocaleString()})]},s.ref_id)})})]})})},be=({sortBy:r,idsToAnalyze:n})=>{const[j,f]=b.useState([]),[v,c]=b.useState(!0),[S,R]=b.useState("");b.useEffect(()=>{(async()=>{if(n.length!==0){c(!0);try{const U=await Promise.all(n.map(u=>I(u,["User"],["RETWEETED_BY>"],"",!0,0,1,20))),s=[];U.forEach(u=>{u.nodes&&s.push(...u.nodes)});const w=s.filter(u=>u.node_type==="User").sort((u,T)=>{var _,a;return Number((_=T.properties)==null?void 0:_.followers)-Number((a=u.properties)==null?void 0:a.followers)}).slice(0,20);f(w),c(!1)}catch(U){console.error("Error fetching tweets:",U),c(!1),R("Error fetching tweets")}finally{c(!1)}}})()},[r,n]);const F=j;return S?e.jsx("div",{style:{padding:24,color:"#FF4D4F"},children:S}):j.length?e.jsx(J,{component:H,children:e.jsxs(V,{"aria-label":"a dense table",size:"small",sx:{minWidth:650},children:[e.jsx(X,{children:e.jsxs(k,{children:[e.jsx(x,{align:"left",children:"Rank"}),e.jsx(x,{align:"left",children:"User Profile"}),e.jsx(x,{align:"left",children:"Followers"})]})}),e.jsx(q,{children:F.map((g,U)=>{var s,w,u,T,_;return e.jsxs(k,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[e.jsx(x,{children:U+1}),e.jsxs(x,{children:[e.jsx(Q,{imageUrl:(s=g.properties)==null?void 0:s.image_url}),e.jsxs(G,{align:"center",direction:"row",justify:"flex-start",mt:16,children:[e.jsx(Z,{children:((w=g==null?void 0:g.properties)==null?void 0:w.twitter_handle)&&e.jsx(K,{children:g.properties.twitter_handle})}),e.jsx(ee,{"aria-label":"View tweet on Twitter",href:`https://twitter.com/${(u=g==null?void 0:g.properties)==null?void 0:u.twitter_handle}/status/${(T=g==null?void 0:g.properties)==null?void 0:T.tweet_id}?open=system`,rel:"noopener noreferrer",target:"_blank",children:e.jsx(D,{})})]})]}),e.jsx(x,{children:((_=g.properties)==null?void 0:_.followers)||""})," "]},g.ref_id)})})]})}):v?e.jsxs(G,{align:"center",grow:1,justify:"center",children:[e.jsx(Y,{color:h.white}),e.jsx("div",{style:{padding:24,fontSize:16,textAlign:"center",color:h.white},children:"Loading engagement data..."})]}):e.jsx("div",{style:{padding:24,textAlign:"center"},children:"No engagement data available"})},_e=N.button`
  background: ${({active:r})=>r?h.primaryBlue:"transparent"};
  border: 1px solid ${({active:r})=>r?h.primaryGreen:h.GRAY9};
  color: ${({active:r})=>r?h.white:h.GRAY6};
  padding: 6px 12px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 6px;
  &:hover {
    border-color: ${({active:r})=>r?h.primaryGreen:h.GRAY6};
  }
`,Q=N.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: ${h.BG1};
  ${({imageUrl:r})=>r&&`background-image: url(${r});`}
  background-size: cover;
`,Z=N.div`
  display: flex;
  flex-direction: column;
`,K=N.span`
  font-size: 14px;
`,Ee=N.div`
  color: ${h.GRAY7};
  font-size: 12px;
`,ee=N.a`
  color: ${h.SOURCE_TABLE_LINK};
  cursor: pointer;
  font-size: 16px;
  height: 16px;
  margin-left: 8px;
`,we=N.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,Te=N.div`
  width: 100px;
  height: 4px;
  background-color: ${h.BG1};
  border-radius: 2px;
  position: relative;
  &::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: ${r=>r.percentage}%;
    background-color: ${h.primaryGreen};
    border-radius: 2px;
  }
`,ye=N.h2`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 16px;
  color: ${h.white};
`,E={ENGAGEMENT:"impression_count",FOLLOWERS:"followers",TOP_REPOSTERS:"top_reposters"},Ne=({tweetId:r})=>{const[n,j]=b.useState(E.ENGAGEMENT),{tweetId:f}=pe(),v=b.useMemo(()=>{const c=(f==null?void 0:f.split("&"))||[];return r==="summary"?c:c.filter(S=>S===r)},[f,r]);return e.jsxs(ve,{children:[e.jsxs(G,{p:24,children:[e.jsx(ye,{children:"Engagement Report"}),e.jsx(G,{direction:"row",children:Object.keys(E).map(c=>e.jsx(_e,{active:n===E[c],onClick:()=>j(E[c]),children:c},c))})]}),n!=="top_reposters"?e.jsx(je,{idsToAnalyze:v,sortBy:n}):e.jsx(be,{idsToAnalyze:v,sortBy:n})]})},ve=N(G)`
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
`,ke=({tweetId:r})=>{const{close:n,visible:j}=de("tweetAnalyze"),f=()=>{n()};return e.jsx(he,{"data-testid":"tweet-analyze-modal",id:"tweetAnalyze",kind:"full",noWrap:!0,onClose:f,preventOutsideClose:!0,children:j&&e.jsx(Ne,{tweetId:r})})};export{ke as TweetAnalyze};
