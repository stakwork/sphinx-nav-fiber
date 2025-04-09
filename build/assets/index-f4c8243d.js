import{L as de,M as he,N as ue,r as R,U as me,J as fe,O as se,j as e,V as ge,X as xe,B as je,F,g as w,x as $,v as A,s as O,q as be,D as _e,b5 as Ee}from"./index-4f62fa2e.js";import{L as P}from"./index-aeb19dec.js";import{C as B}from"./ClipLoader-2fb2d658.js";import{z as I}from"./index-c8dccbe5.js";import{M as W,b as z,a as D,T as h,c as H}from"./TableRow-36db867f.js";import"./SourcesTableIcon-629212fc.js";import"./CheckIcon-252a916b.js";import"./DeleteNodeIcon-ee17f57e.js";import"./SoundIcon-d70b2622.js";import"./SucessFeedBackIcon-1139aebd.js";function Te(t){return de("MuiTableContainer",t)}he("MuiTableContainer",["root"]);const we=["className","component"],ye=t=>{const{classes:d}=t;return xe({root:["root"]},Te,d)},ve=ue("div",{name:"MuiTableContainer",slot:"Root",overridesResolver:(t,d)=>d.root})({width:"100%",overflowX:"auto"}),Ne=R.forwardRef(function(d,v){const y=me({props:d,name:"MuiTableContainer"}),{className:S,component:j="div"}=y,N=fe(y,we),f=se({},y,{component:j}),g=ye(f);return e.jsx(ve,se({ref:v,as:j,className:ge(g.root,S),ownerState:f},N))}),V=Ne,X=({data:t,filename:d="data.csv"})=>{const v=S=>{if(S.length===0)return"";const j=Object.keys(S[0]),N=(g,U)=>typeof U=="string"?`"${U.replace(/"/g,'""')}"`:U!=null?String(U):"",f=S.map(g=>j.map(U=>N(U,g[U])).join(","));return[j.join(","),...f].join(`
`)},y=()=>{const S=v(t),j=new Blob([S],{type:"text/csv;charset=utf-8;"}),N=URL.createObjectURL(j),f=document.createElement("a");f.href=N,f.download=d,f.style.display="none",document.body.appendChild(f),f.click(),document.body.removeChild(f),URL.revokeObjectURL(N)};return e.jsx(je,{onClick:y,type:"button",children:"Download CSV"})},ne=({sortBy:t,idsToAnalyze:d})=>{const[v,y]=R.useState([]),[S,j]=R.useState([]),[N,f]=R.useState(!0),[g,U]=R.useState("");R.useEffect(()=>{(async()=>{if(d.length!==0){f(!0);try{const p=await Promise.all(d.map(l=>A(l,[],["HAS_REPLY>","HAS_QUOTE>","THREAD_NEXT>","<POSTED"],t,!0,0,10,800))),o=[],x=[],a=[];p.forEach((l,b)=>{const n=l.nodes.find(u=>u.ref_id===d[b]);if(n&&o.push(n),t===L.ENGAGEMENT.value){const C=[...l.nodes.filter(m=>{var i,c,_,E;return m.node_type==="Tweet"&&((i=m.properties)==null?void 0:i.author)!==((c=n==null?void 0:n.properties)==null?void 0:c.author)&&((_=m.properties)==null?void 0:_.twitter_handle)!==((E=n==null?void 0:n.properties)==null?void 0:E.twitter_handle)}).map(m=>{var c,_,E,M;const i=l.nodes.find(Y=>{var G,k;return Y.node_type==="User"&&((G=Y.properties)==null?void 0:G.author_id)===((k=m.properties)==null?void 0:k.author)});return i?{...m,properties:{...m.properties,twitter_handle:(c=i.properties)==null?void 0:c.twitter_handle,image_url:(_=i.properties)==null?void 0:_.image_url,impression_percentage:(Number((E=m.properties)==null?void 0:E.impression_count)/Number(((M=n==null?void 0:n.properties)==null?void 0:M.impression_count)||1)*100).toFixed(2)}}:m})].sort((m,i)=>{var E,M;const c=Number((E=m.properties)==null?void 0:E.impression_percentage)||0;return(Number((M=i.properties)==null?void 0:M.impression_percentage)||0)-c}).slice(0,20);C&&x.push(...C)}if(t===L.FOLLOWERS.value){const u=l.nodes.filter(i=>{var c,_,E,M;return i.node_type==="User"&&((c=i.properties)==null?void 0:c.author_id)!==((_=n==null?void 0:n.properties)==null?void 0:_.author)&&((E=i.properties)==null?void 0:E.twitter_handle)!==((M=n==null?void 0:n.properties)==null?void 0:M.twitter_handle)}).sort((i,c)=>{var _,E;return Number((_=c.properties)==null?void 0:_.followers)-Number((E=i.properties)==null?void 0:E.followers)}).slice(0,20),m=u.map(i=>{const c=l.edges.find(E=>E.source===i.ref_id),_=l.edges.find(E=>E.target===i.ref_id);return c?c.target:_?_.source:null}).map((i,c)=>{var G,k,K,ee,re,te;if(!i)return null;const _=((k=(G=u[c])==null?void 0:G.properties)==null?void 0:k.followers)||0,E=((ee=(K=u[c])==null?void 0:K.properties)==null?void 0:ee.twitter_handle)||"",M=((te=(re=u[c])==null?void 0:re.properties)==null?void 0:te.image_url)||"",Y=l.nodes.find(ce=>ce.ref_id===i);return{...Y,properties:{...(Y==null?void 0:Y.properties)||{},followers:_,twitter_handle:E,image_url:M}}}).filter(i=>i!==null);m&&a.push(...m)}}),y(x.sort((l,b)=>{var n,u;return Number((n=b.properties)==null?void 0:n.impression_percentage)-Number((u=l.properties)==null?void 0:u.impression_percentage)}).slice(0,20)),j(a.sort((l,b)=>{var n,u;return Number((n=b.properties)==null?void 0:n.followers)-Number((u=l.properties)==null?void 0:u.followers)}).slice(0,20)),f(!1)}catch(p){console.error("Error fetching tweets:",p),f(!1),U("Error fetching tweets")}finally{f(!1)}}})()},[t,d]);const s=t===L.ENGAGEMENT.value?v:S;if(g)return e.jsx("div",{style:{padding:24,color:"#FF4D4F"},children:g});if(!v.length&&!S.length)return N?e.jsxs(F,{align:"center",grow:1,justify:"center",children:[e.jsx(B,{color:w.white}),e.jsx("div",{style:{padding:24,fontSize:16,textAlign:"center",color:w.white},children:"Loading engagement data..."})]}):e.jsx("div",{style:{padding:24,textAlign:"center"},children:"No engagement data available"});const T=t===L.ENGAGEMENT.value?s.map(r=>{var p,o,x,a,l,b,n;return{"User profile":(p=r.properties)!=null&&p.twitter_handle?(o=r.properties)==null?void 0:o.twitter_handle:"",Date:(x=r.properties)!=null&&x.date?$.unix(r.properties.date).format("YYYY-MM-DD"):"",Tweet:((a=r.properties)==null?void 0:a.text)||"",Engagement:((l=r.properties)==null?void 0:l.impression_percentage)||"","Impression count":((b=r.properties)==null?void 0:b.impression_count)||"","Tweet ID":((n=r.properties)==null?void 0:n.tweet_id)||""}}):s.map(r=>{var p,o,x,a,l,b;return{"User profile":(p=r.properties)!=null&&p.twitter_handle?(o=r.properties)==null?void 0:o.twitter_handle:"",Date:(x=r.properties)!=null&&x.date?$.unix(r.properties.date).format("YYYY-MM-DD"):"",Tweet:((a=r.properties)==null?void 0:a.text)||"",Followers:((l=r.properties)==null?void 0:l.followers)||"","Tweet ID":((b=r.properties)==null?void 0:b.tweet_id)||""}});return e.jsx(V,{component:I,children:e.jsxs(W,{"aria-label":"a dense table",size:"small",sx:{minWidth:650},children:[e.jsx(z,{children:e.jsxs(D,{children:[e.jsx(h,{align:"left",children:"Rank"}),e.jsx(h,{align:"left",children:"User Profile"}),e.jsx(h,{align:"left",children:"Tweet"}),t===L.ENGAGEMENT.value&&e.jsx(h,{align:"left",children:"Engagement"}),t===L.FOLLOWERS.value&&e.jsx(h,{align:"left",children:"Followers"}),e.jsx(h,{align:"left",children:e.jsx(X,{data:T,filename:`${t}-${$().format("YYYY-MM-DD")}.csv`})})]})}),e.jsx(H,{children:s.map((r,p)=>{var o,x,a,l,b,n,u,C,m,i,c;return e.jsxs(D,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[e.jsx(h,{children:p+1}),e.jsxs(h,{children:[e.jsx(Q,{imageUrl:(o=r.properties)==null?void 0:o.image_url}),e.jsx(q,{children:((x=r==null?void 0:r.properties)==null?void 0:x.twitter_handle)&&e.jsx(J,{children:r.properties.twitter_handle})})]}),e.jsxs(h,{children:[((a=r.properties)==null?void 0:a.text)||"",e.jsxs(F,{align:"center",direction:"row",justify:"flex-start",mt:16,children:[((l=r==null?void 0:r.properties)==null?void 0:l.date)&&e.jsx(pe,{"aria-label":"Time since tweet",children:$.unix(r.properties.date).fromNow()}),e.jsx(Z,{"aria-label":"View tweet on Twitter",href:`https://twitter.com/${(b=r==null?void 0:r.properties)==null?void 0:b.twitter_handle}/status/${(n=r==null?void 0:r.properties)==null?void 0:n.tweet_id}?open=system`,rel:"noopener noreferrer",target:"_blank",children:e.jsx(P,{})})]})]}),t===L.ENGAGEMENT.value&&e.jsxs(h,{children:[(u=r.properties)==null?void 0:u.impression_percentage," %",((C=r.properties)==null?void 0:C.impression_count)!==void 0&&((m=r.properties)==null?void 0:m.impression_count)&&e.jsx(Le,{children:e.jsx(Me,{percentage:Number((i=r.properties)==null?void 0:i.impression_percentage)})})]}),t===L.FOLLOWERS.value&&e.jsx(h,{align:"right",children:Number((c=r.properties)==null?void 0:c.followers).toLocaleString()})]},r.ref_id)})})]})})},Se=({sortBy:t,idsToAnalyze:d})=>{const[v,y]=R.useState([]),[S,j]=R.useState(!0),[N,f]=R.useState("");R.useEffect(()=>{(async()=>{if(d.length!==0){j(!0);try{const T=await Promise.all(d.map(o=>A(o,["User"],["RETWEETED_BY>"],"",!0,0,1,20))),r=[];T.forEach(o=>{o.nodes&&r.push(...o.nodes)});const p=r.filter(o=>o.node_type==="User").sort((o,x)=>{var a,l;return Number((a=x.properties)==null?void 0:a.followers)-Number((l=o.properties)==null?void 0:l.followers)}).slice(0,20);y(p),j(!1)}catch(T){console.error("Error fetching tweets:",T),j(!1),f("Error fetching tweets")}finally{j(!1)}}})()},[t,d]);const g=v;if(N)return e.jsx("div",{style:{padding:24,color:"#FF4D4F"},children:N});if(!v.length)return S?e.jsxs(F,{align:"center",grow:1,justify:"center",children:[e.jsx(B,{color:w.white}),e.jsx("div",{style:{padding:24,fontSize:16,textAlign:"center",color:w.white},children:"Loading engagement data..."})]}):e.jsx("div",{style:{padding:24,textAlign:"center"},children:"No engagement data available"});const U=g.map(s=>{var T,r,p;return{"User profile":(T=s.properties)!=null&&T.twitter_handle?(r=s.properties)==null?void 0:r.twitter_handle:"",Followers:((p=s.properties)==null?void 0:p.followers)||""}});return e.jsx(V,{component:I,children:e.jsxs(W,{"aria-label":"a dense table",size:"small",sx:{minWidth:650},children:[e.jsx(z,{children:e.jsxs(D,{children:[e.jsx(h,{align:"left",children:"Rank"}),e.jsx(h,{align:"left",children:"User Profile"}),e.jsx(h,{align:"left",children:"Followers"}),e.jsx(h,{align:"left",children:e.jsx(X,{data:U,filename:`${t}-${$().format("YYYY-MM-DD")}.csv`})})]})}),e.jsx(H,{children:g.map((s,T)=>{var r,p,o,x;return e.jsxs(D,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[e.jsx(h,{children:T+1}),e.jsxs(h,{children:[e.jsx(Q,{imageUrl:(r=s.properties)==null?void 0:r.image_url}),e.jsxs(F,{align:"center",direction:"row",justify:"flex-start",mt:16,children:[e.jsx(q,{children:((p=s==null?void 0:s.properties)==null?void 0:p.twitter_handle)&&e.jsx(J,{children:s.properties.twitter_handle})}),e.jsx(Z,{"aria-label":"View tweet on Twitter",href:`https://twitter.com/${(o=s==null?void 0:s.properties)==null?void 0:o.twitter_handle}?open=system`,rel:"noopener noreferrer",target:"_blank",children:e.jsx(P,{})})]})]}),e.jsx(h,{children:((x=s.properties)==null?void 0:x.followers)||""})," "]},s.ref_id)})})]})})},Ue=({sortBy:t,idsToAnalyze:d})=>{const[v,y]=R.useState([]),[S,j]=R.useState(!0),[N,f]=R.useState("");R.useEffect(()=>{(async()=>{if(d.length!==0){j(!0);try{const T=await Promise.all(d.map(o=>A(o,[],["HAS_REPLY>","HAS_QUOTE>","THREAD_NEXT>","<POSTED"],"sentiment",!0,0,10,800))),r=[],p=[];T.forEach((o,x)=>{const a=o.nodes.find(n=>n.ref_id===d[x]);a&&r.push(a);const b=[...o.nodes.filter(n=>{var u,C,m,i;return n.node_type==="Tweet"&&((u=n.properties)==null?void 0:u.author)!==((C=a==null?void 0:a.properties)==null?void 0:C.author)&&((m=n.properties)==null?void 0:m.twitter_handle)!==((i=a==null?void 0:a.properties)==null?void 0:i.twitter_handle)}).map(n=>{var C,m;const u=o.nodes.find(i=>{var c,_;return i.node_type==="User"&&((c=i.properties)==null?void 0:c.author_id)===((_=n.properties)==null?void 0:_.author)});return u?{...n,properties:{...n.properties,twitter_handle:(C=u.properties)==null?void 0:C.twitter_handle,image_url:(m=u.properties)==null?void 0:m.image_url}}:n})].sort((n,u)=>{var i,c;const C=Number((i=n.properties)==null?void 0:i.sentiment)||0;return(Number((c=u.properties)==null?void 0:c.sentiment)||0)-C}).slice(0,20);b&&p.push(...b)}),y(p.sort((o,x)=>{var a,l;return Number((a=x.properties)==null?void 0:a.sentiment)-Number((l=o.properties)==null?void 0:l.sentiment)}).slice(0,20)),j(!1)}catch(T){console.error("Error fetching tweets:",T),j(!1),f("Error fetching tweets")}finally{j(!1)}}})()},[t,d]);const g=v;if(N)return e.jsx("div",{style:{padding:24,color:"#FF4D4F"},children:N});if(!v.length)return S?e.jsxs(F,{align:"center",grow:1,justify:"center",children:[e.jsx(B,{color:w.white}),e.jsx("div",{style:{padding:24,fontSize:16,textAlign:"center",color:w.white},children:"Loading engagement data..."})]}):e.jsx("div",{style:{padding:24,textAlign:"center"},children:"No engagement data available"});const U=g.map(s=>{var T,r,p,o;return{"User profile":(T=s.properties)!=null&&T.twitter_handle?(r=s.properties)==null?void 0:r.twitter_handle:"",Tweet:((p=s.properties)==null?void 0:p.text)||"",Sentiment:((o=s.properties)==null?void 0:o.sentiment)||""}});return e.jsx(V,{component:I,children:e.jsxs(W,{"aria-label":"a dense table",size:"small",sx:{minWidth:650},children:[e.jsx(z,{children:e.jsxs(D,{children:[e.jsx(h,{align:"left",children:"Rank"}),e.jsx(h,{align:"left",children:"User Profile"}),e.jsx(h,{align:"left",children:"Tweet"}),e.jsx(h,{align:"left",children:"Sentiment"}),e.jsx(h,{align:"left",children:e.jsx(X,{data:U,filename:`${t}-${$().format("YYYY-MM-DD")}.csv`})})]})}),e.jsx(H,{children:g.map((s,T)=>{var r,p,o,x,a,l,b;return e.jsxs(D,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[e.jsx(h,{children:T+1}),e.jsxs(h,{children:[e.jsx(Q,{imageUrl:(r=s.properties)==null?void 0:r.image_url}),e.jsx(q,{children:((p=s==null?void 0:s.properties)==null?void 0:p.twitter_handle)&&e.jsx(J,{children:s.properties.twitter_handle})})]}),e.jsxs(h,{children:[((o=s.properties)==null?void 0:o.text)||"",e.jsxs(F,{align:"center",direction:"row",justify:"flex-start",mt:16,children:[((x=s==null?void 0:s.properties)==null?void 0:x.date)&&e.jsx(pe,{"aria-label":"Time since tweet",children:$.unix(s.properties.date).fromNow()}),e.jsx(Z,{"aria-label":"View tweet on Twitter",href:`https://twitter.com/${(a=s==null?void 0:s.properties)==null?void 0:a.twitter_handle}/status/${(l=s==null?void 0:s.properties)==null?void 0:l.tweet_id}?open=system`,rel:"noopener noreferrer",target:"_blank",children:e.jsx(P,{})})]})]}),e.jsx(h,{align:"right",children:(b=s.properties)==null?void 0:b.sentiment})]},s.ref_id)})})]})})},oe="ENGAGEMENT",ie="FOLLOWERS",le="TOP_REPOSTERS",ae="SENTIMENT",Re={[oe]:ne,[ie]:ne,[le]:Se,[ae]:Ue},Ce=O.button`
  background: ${({active:t})=>t?w.primaryBlue:"transparent"};
  border: 1px solid ${({active:t})=>t?w.primaryGreen:w.GRAY9};
  color: ${({active:t})=>t?w.white:w.GRAY6};
  padding: 6px 12px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 6px;
  &:hover {
    border-color: ${({active:t})=>t?w.primaryGreen:w.GRAY6};
  }
`,Q=O.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: ${w.BG1};
  ${({imageUrl:t})=>t&&`background-image: url(${t});`}
  background-size: cover;
`,q=O.div`
  display: flex;
  flex-direction: column;
`,J=O.span`
  font-size: 14px;
`,pe=O.div`
  color: ${w.GRAY7};
  font-size: 12px;
`,Z=O.a`
  color: ${w.SOURCE_TABLE_LINK};
  cursor: pointer;
  font-size: 16px;
  height: 16px;
  margin-left: 8px;
`,Le=O.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,Me=O.div`
  width: 100px;
  height: 4px;
  background-color: ${w.BG1};
  border-radius: 2px;
  position: relative;
  &::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: ${t=>t.percentage}%;
    background-color: ${w.primaryGreen};
    border-radius: 2px;
  }
`,Oe=O.h2`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 16px;
  color: ${w.white};
`,L={[oe]:{label:"Engagement",value:"impression_count"},[ie]:{label:"Followers",value:"followers"},[le]:{label:"Top Reposters",value:"top_reposters"},[ae]:{label:"Sentiment",value:"sentiment"}},Fe=({tweetId:t})=>{var f;const[d,v]=R.useState(L.ENGAGEMENT.value),{tweetId:y}=be(),S=R.useMemo(()=>{const g=(y==null?void 0:y.split("&"))||[];return t==="summary"?g:g.filter(U=>U===t)},[y,t]),j=(f=Object.entries(L).find(([,g])=>g.value===d))==null?void 0:f[0],N=j?Re[j]:null;return e.jsxs(Ye,{children:[e.jsxs(F,{p:24,children:[e.jsx(Oe,{children:"Engagement Report"}),e.jsx(F,{direction:"row",children:Object.keys(L).map(g=>e.jsx(Ce,{active:d===L[g].value,onClick:()=>v(L[g].value),children:L[g].label},g))})]}),N&&e.jsx(N,{idsToAnalyze:S,sortBy:d})]})},Ye=O(F)`
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
`,He=({tweetId:t})=>{const{close:d,visible:v}=_e("tweetAnalyze"),y=()=>{d()};return e.jsx(Ee,{"data-testid":"tweet-analyze-modal",id:"tweetAnalyze",kind:"full",noWrap:!0,onClose:y,preventOutsideClose:!0,children:v&&e.jsx(Fe,{tweetId:t})})};export{He as TweetAnalyze};
