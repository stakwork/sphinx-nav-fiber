import{L as ce,M as pe,N as de,r as T,U as he,J as ue,O as ee,j as e,V as ge,X as me,F,g as f,x as te,v as $,s as O,q as fe,D as xe,b5 as je}from"./index-b5ecf585.js";import{L as k}from"./index-df73ba4d.js";import{C as B}from"./ClipLoader-ebec20fb.js";import{z as W}from"./index-37d766d2.js";import{M as I,b as z,a as G,T as h,c as D}from"./TableRow-1d0714db.js";import"./SourcesTableIcon-76623bd8.js";import"./CheckIcon-397d6076.js";import"./DeleteNodeIcon-294007fa.js";import"./SoundIcon-6d509bc3.js";import"./SucessFeedBackIcon-04cd4db4.js";function be(t){return ce("MuiTableContainer",t)}pe("MuiTableContainer",["root"]);const Ee=["className","component"],_e=t=>{const{classes:c}=t;return me({root:["root"]},be,c)},Te=de("div",{name:"MuiTableContainer",slot:"Root",overridesResolver:(t,c)=>c.root})({width:"100%",overflowX:"auto"}),we=T.forwardRef(function(c,w){const E=he({props:c,name:"MuiTableContainer"}),{className:C,component:j="div"}=E,U=ue(E,Ee),y=ee({},E,{component:j}),x=_e(y);return e.jsx(Te,ee({ref:w,as:j,className:ge(x.root,C),ownerState:y},U))}),H=we,re=({sortBy:t,idsToAnalyze:c})=>{const[w,E]=T.useState([]),[C,j]=T.useState([]),[U,y]=T.useState(!0),[x,s]=T.useState("");T.useEffect(()=>{(async()=>{if(c.length!==0){y(!0);try{const _=await Promise.all(c.map(a=>$(a,[],["HAS_REPLY>","HAS_QUOTE>","THREAD_NEXT>","<POSTED"],t,!0,0,10,800))),l=[],b=[],u=[];_.forEach((a,N)=>{const r=a.nodes.find(p=>p.ref_id===c[N]);if(r&&l.push(r),t===R.ENGAGEMENT.value){const v=[...a.nodes.filter(d=>{var i,o,g,m;return d.node_type==="Tweet"&&((i=d.properties)==null?void 0:i.author)!==((o=r==null?void 0:r.properties)==null?void 0:o.author)&&((g=d.properties)==null?void 0:g.twitter_handle)!==((m=r==null?void 0:r.properties)==null?void 0:m.twitter_handle)}).map(d=>{var o,g,m,L;const i=a.nodes.find(A=>{var M,P;return A.node_type==="User"&&((M=A.properties)==null?void 0:M.author_id)===((P=d.properties)==null?void 0:P.author)});return i?{...d,properties:{...d.properties,twitter_handle:(o=i.properties)==null?void 0:o.twitter_handle,image_url:(g=i.properties)==null?void 0:g.image_url,impression_percentage:(Number((m=d.properties)==null?void 0:m.impression_count)/Number(((L=r==null?void 0:r.properties)==null?void 0:L.impression_count)||1)*100).toFixed(2)}}:d})].sort((d,i)=>{var m,L;const o=Number((m=d.properties)==null?void 0:m.impression_percentage)||0;return(Number((L=i.properties)==null?void 0:L.impression_percentage)||0)-o}).slice(0,20);v&&b.push(...v)}if(t===R.FOLLOWERS.value){const p=a.nodes.filter(i=>{var o,g,m,L;return i.node_type==="User"&&((o=i.properties)==null?void 0:o.author_id)!==((g=r==null?void 0:r.properties)==null?void 0:g.author)&&((m=i.properties)==null?void 0:m.twitter_handle)!==((L=r==null?void 0:r.properties)==null?void 0:L.twitter_handle)}).sort((i,o)=>{var g,m;return Number((g=o.properties)==null?void 0:g.followers)-Number((m=i.properties)==null?void 0:m.followers)}).slice(0,20),d=p.map(i=>{const o=a.edges.find(m=>m.source===i.ref_id),g=a.edges.find(m=>m.target===i.ref_id);return o?o.target:g?g.source:null}).map((i,o)=>{var M,P,q,J,Z,K;if(!i)return null;const g=((P=(M=p[o])==null?void 0:M.properties)==null?void 0:P.followers)||0,m=((J=(q=p[o])==null?void 0:q.properties)==null?void 0:J.twitter_handle)||"",L=((K=(Z=p[o])==null?void 0:Z.properties)==null?void 0:K.image_url)||"",A=a.nodes.find(ae=>ae.ref_id===i);return{...A,properties:{...(A==null?void 0:A.properties)||{},followers:g,twitter_handle:m,image_url:L}}}).filter(i=>i!==null);d&&u.push(...d)}}),E(b.sort((a,N)=>{var r,p;return Number((r=N.properties)==null?void 0:r.impression_percentage)-Number((p=a.properties)==null?void 0:p.impression_percentage)}).slice(0,20)),j(u.sort((a,N)=>{var r,p;return Number((r=N.properties)==null?void 0:r.followers)-Number((p=a.properties)==null?void 0:p.followers)}).slice(0,20)),y(!1)}catch(_){console.error("Error fetching tweets:",_),y(!1),s("Error fetching tweets")}finally{y(!1)}}})()},[t,c]);const S=t===R.ENGAGEMENT.value?w:C;return x?e.jsx("div",{style:{padding:24,color:"#FF4D4F"},children:x}):!w.length&&!C.length?U?e.jsxs(F,{align:"center",grow:1,justify:"center",children:[e.jsx(B,{color:f.white}),e.jsx("div",{style:{padding:24,fontSize:16,textAlign:"center",color:f.white},children:"Loading engagement data..."})]}):e.jsx("div",{style:{padding:24,textAlign:"center"},children:"No engagement data available"}):e.jsx(H,{component:W,children:e.jsxs(I,{"aria-label":"a dense table",size:"small",sx:{minWidth:650},children:[e.jsx(z,{children:e.jsxs(G,{children:[e.jsx(h,{align:"left",children:"Rank"}),e.jsx(h,{align:"left",children:"User Profile"}),e.jsx(h,{align:"left",children:"Tweet"}),t===R.ENGAGEMENT.value&&e.jsx(h,{align:"left",children:"Engagement"}),t===R.FOLLOWERS.value&&e.jsx(h,{align:"left",children:"Followers"})]})}),e.jsx(D,{children:S.map((n,_)=>{var l,b,u,a,N,r,p,v,d,i,o;return e.jsxs(G,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[e.jsx(h,{children:_+1}),e.jsxs(h,{children:[e.jsx(Y,{imageUrl:(l=n.properties)==null?void 0:l.image_url}),e.jsx(V,{children:((b=n==null?void 0:n.properties)==null?void 0:b.twitter_handle)&&e.jsx(X,{children:n.properties.twitter_handle})})]}),e.jsxs(h,{children:[((u=n.properties)==null?void 0:u.text)||"",e.jsxs(F,{align:"center",direction:"row",justify:"flex-start",mt:16,children:[((a=n==null?void 0:n.properties)==null?void 0:a.date)&&e.jsx(le,{"aria-label":"Time since tweet",children:te.unix(n.properties.date).fromNow()}),e.jsx(Q,{"aria-label":"View tweet on Twitter",href:`https://twitter.com/${(N=n==null?void 0:n.properties)==null?void 0:N.twitter_handle}/status/${(r=n==null?void 0:n.properties)==null?void 0:r.tweet_id}?open=system`,rel:"noopener noreferrer",target:"_blank",children:e.jsx(k,{})})]})]}),t===R.ENGAGEMENT.value&&e.jsxs(h,{children:[(p=n.properties)==null?void 0:p.impression_percentage," %",((v=n.properties)==null?void 0:v.impression_count)!==void 0&&((d=n.properties)==null?void 0:d.impression_count)&&e.jsx(Re,{children:e.jsx(Ue,{percentage:Number((i=n.properties)==null?void 0:i.impression_percentage)})})]}),t===R.FOLLOWERS.value&&e.jsx(h,{align:"right",children:Number((o=n.properties)==null?void 0:o.followers).toLocaleString()})]},n.ref_id)})})]})})},ye=({sortBy:t,idsToAnalyze:c})=>{const[w,E]=T.useState([]),[C,j]=T.useState(!0),[U,y]=T.useState("");T.useEffect(()=>{(async()=>{if(c.length!==0){j(!0);try{const S=await Promise.all(c.map(l=>$(l,["User"],["RETWEETED_BY>"],"",!0,0,1,20))),n=[];S.forEach(l=>{l.nodes&&n.push(...l.nodes)});const _=n.filter(l=>l.node_type==="User").sort((l,b)=>{var u,a;return Number((u=b.properties)==null?void 0:u.followers)-Number((a=l.properties)==null?void 0:a.followers)}).slice(0,20);E(_),j(!1)}catch(S){console.error("Error fetching tweets:",S),j(!1),y("Error fetching tweets")}finally{j(!1)}}})()},[t,c]);const x=w;return U?e.jsx("div",{style:{padding:24,color:"#FF4D4F"},children:U}):w.length?e.jsx(H,{component:W,children:e.jsxs(I,{"aria-label":"a dense table",size:"small",sx:{minWidth:650},children:[e.jsx(z,{children:e.jsxs(G,{children:[e.jsx(h,{align:"left",children:"Rank"}),e.jsx(h,{align:"left",children:"User Profile"}),e.jsx(h,{align:"left",children:"Followers"})]})}),e.jsx(D,{children:x.map((s,S)=>{var n,_,l,b;return e.jsxs(G,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[e.jsx(h,{children:S+1}),e.jsxs(h,{children:[e.jsx(Y,{imageUrl:(n=s.properties)==null?void 0:n.image_url}),e.jsxs(F,{align:"center",direction:"row",justify:"flex-start",mt:16,children:[e.jsx(V,{children:((_=s==null?void 0:s.properties)==null?void 0:_.twitter_handle)&&e.jsx(X,{children:s.properties.twitter_handle})}),e.jsx(Q,{"aria-label":"View tweet on Twitter",href:`https://twitter.com/${(l=s==null?void 0:s.properties)==null?void 0:l.twitter_handle}?open=system`,rel:"noopener noreferrer",target:"_blank",children:e.jsx(k,{})})]})]}),e.jsx(h,{children:((b=s.properties)==null?void 0:b.followers)||""})," "]},s.ref_id)})})]})}):C?e.jsxs(F,{align:"center",grow:1,justify:"center",children:[e.jsx(B,{color:f.white}),e.jsx("div",{style:{padding:24,fontSize:16,textAlign:"center",color:f.white},children:"Loading engagement data..."})]}):e.jsx("div",{style:{padding:24,textAlign:"center"},children:"No engagement data available"})},Ne=({sortBy:t,idsToAnalyze:c})=>{const[w,E]=T.useState([]),[C,j]=T.useState(!0),[U,y]=T.useState("");T.useEffect(()=>{(async()=>{if(c.length!==0){j(!0);try{const S=await Promise.all(c.map(l=>$(l,[],["HAS_REPLY>","HAS_QUOTE>","THREAD_NEXT>","<POSTED"],"sentiment",!0,0,10,800))),n=[],_=[];S.forEach((l,b)=>{const u=l.nodes.find(r=>r.ref_id===c[b]);u&&n.push(u);const N=[...l.nodes.filter(r=>{var p,v,d,i;return r.node_type==="Tweet"&&((p=r.properties)==null?void 0:p.author)!==((v=u==null?void 0:u.properties)==null?void 0:v.author)&&((d=r.properties)==null?void 0:d.twitter_handle)!==((i=u==null?void 0:u.properties)==null?void 0:i.twitter_handle)}).map(r=>{var v,d;const p=l.nodes.find(i=>{var o,g;return i.node_type==="User"&&((o=i.properties)==null?void 0:o.author_id)===((g=r.properties)==null?void 0:g.author)});return p?{...r,properties:{...r.properties,twitter_handle:(v=p.properties)==null?void 0:v.twitter_handle,image_url:(d=p.properties)==null?void 0:d.image_url}}:r})].sort((r,p)=>{var i,o;const v=Number((i=r.properties)==null?void 0:i.sentiment)||0;return(Number((o=p.properties)==null?void 0:o.sentiment)||0)-v}).slice(0,20);N&&_.push(...N)}),E(_.sort((l,b)=>{var u,a;return Number((u=b.properties)==null?void 0:u.sentiment)-Number((a=l.properties)==null?void 0:a.sentiment)}).slice(0,20)),j(!1)}catch(S){console.error("Error fetching tweets:",S),j(!1),y("Error fetching tweets")}finally{j(!1)}}})()},[t,c]);const x=w;return U?e.jsx("div",{style:{padding:24,color:"#FF4D4F"},children:U}):w.length?e.jsx(H,{component:W,children:e.jsxs(I,{"aria-label":"a dense table",size:"small",sx:{minWidth:650},children:[e.jsx(z,{children:e.jsxs(G,{children:[e.jsx(h,{align:"left",children:"Rank"}),e.jsx(h,{align:"left",children:"User Profile"}),e.jsx(h,{align:"left",children:"Tweet"}),e.jsx(h,{align:"left",children:"Sentiment"})]})}),e.jsx(D,{children:x.map((s,S)=>{var n,_,l,b,u,a,N;return e.jsxs(G,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[e.jsx(h,{children:S+1}),e.jsxs(h,{children:[e.jsx(Y,{imageUrl:(n=s.properties)==null?void 0:n.image_url}),e.jsx(V,{children:((_=s==null?void 0:s.properties)==null?void 0:_.twitter_handle)&&e.jsx(X,{children:s.properties.twitter_handle})})]}),e.jsxs(h,{children:[((l=s.properties)==null?void 0:l.text)||"",e.jsxs(F,{align:"center",direction:"row",justify:"flex-start",mt:16,children:[((b=s==null?void 0:s.properties)==null?void 0:b.date)&&e.jsx(le,{"aria-label":"Time since tweet",children:te.unix(s.properties.date).fromNow()}),e.jsx(Q,{"aria-label":"View tweet on Twitter",href:`https://twitter.com/${(u=s==null?void 0:s.properties)==null?void 0:u.twitter_handle}/status/${(a=s==null?void 0:s.properties)==null?void 0:a.tweet_id}?open=system`,rel:"noopener noreferrer",target:"_blank",children:e.jsx(k,{})})]})]}),e.jsx(h,{align:"right",children:(N=s.properties)==null?void 0:N.sentiment})]},s.ref_id)})})]})}):C?e.jsxs(F,{align:"center",grow:1,justify:"center",children:[e.jsx(B,{color:f.white}),e.jsx("div",{style:{padding:24,fontSize:16,textAlign:"center",color:f.white},children:"Loading engagement data..."})]}):e.jsx("div",{style:{padding:24,textAlign:"center"},children:"No engagement data available"})},se="ENGAGEMENT",ne="FOLLOWERS",ie="TOP_REPOSTERS",oe="SENTIMENT",ve={[se]:re,[ne]:re,[ie]:ye,[oe]:Ne},Se=O.button`
  background: ${({active:t})=>t?f.primaryBlue:"transparent"};
  border: 1px solid ${({active:t})=>t?f.primaryGreen:f.GRAY9};
  color: ${({active:t})=>t?f.white:f.GRAY6};
  padding: 6px 12px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 6px;
  &:hover {
    border-color: ${({active:t})=>t?f.primaryGreen:f.GRAY6};
  }
`,Y=O.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: ${f.BG1};
  ${({imageUrl:t})=>t&&`background-image: url(${t});`}
  background-size: cover;
`,V=O.div`
  display: flex;
  flex-direction: column;
`,X=O.span`
  font-size: 14px;
`,le=O.div`
  color: ${f.GRAY7};
  font-size: 12px;
`,Q=O.a`
  color: ${f.SOURCE_TABLE_LINK};
  cursor: pointer;
  font-size: 16px;
  height: 16px;
  margin-left: 8px;
`,Re=O.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,Ue=O.div`
  width: 100px;
  height: 4px;
  background-color: ${f.BG1};
  border-radius: 2px;
  position: relative;
  &::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: ${t=>t.percentage}%;
    background-color: ${f.primaryGreen};
    border-radius: 2px;
  }
`,Ce=O.h2`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 16px;
  color: ${f.white};
`,R={[se]:{label:"Engagement",value:"impression_count"},[ne]:{label:"Followers",value:"followers"},[ie]:{label:"Top Reposters",value:"top_reposters"},[oe]:{label:"Sentiment",value:"sentiment"}},Le=({tweetId:t})=>{var y;const[c,w]=T.useState(R.ENGAGEMENT.value),{tweetId:E}=fe(),C=T.useMemo(()=>{const x=(E==null?void 0:E.split("&"))||[];return t==="summary"?x:x.filter(s=>s===t)},[E,t]),j=(y=Object.entries(R).find(([,x])=>x.value===c))==null?void 0:y[0],U=j?ve[j]:null;return e.jsxs(Oe,{children:[e.jsxs(F,{p:24,children:[e.jsx(Ce,{children:"Engagement Report"}),e.jsx(F,{direction:"row",children:Object.keys(R).map(x=>e.jsx(Se,{active:c===R[x].value,onClick:()=>w(R[x].value),children:R[x].label},x))})]}),U&&e.jsx(U,{idsToAnalyze:C,sortBy:c})]})},Oe=O(F)`
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
`,ze=({tweetId:t})=>{const{close:c,visible:w}=xe("tweetAnalyze"),E=()=>{c()};return e.jsx(je,{"data-testid":"tweet-analyze-modal",id:"tweetAnalyze",kind:"full",noWrap:!0,onClose:E,preventOutsideClose:!0,children:w&&e.jsx(Le,{tweetId:t})})};export{ze as TweetAnalyze};
