import{L as de,M as he,N as ue,r as C,U as me,J as fe,O as se,j as e,V as ge,X as xe,B as je,F as O,g as w,x as $,v as P,s as F,q as be,D as _e,b5 as Ee}from"./index-651d47c5.js";import{L as B}from"./index-53b4ef67.js";import{C as I}from"./ClipLoader-dc28513d.js";import{z as W}from"./index-c0df39d7.js";import{M as z,b as H,a as D,T as a,c as V}from"./TableRow-5bc54b49.js";import"./SourcesTableIcon-584eee47.js";import"./CheckIcon-4743000d.js";import"./DeleteNodeIcon-ac54dff5.js";import"./SoundIcon-2145eafb.js";import"./SucessFeedBackIcon-43a115c1.js";function Te(o){return de("MuiTableContainer",o)}he("MuiTableContainer",["root"]);const we=["className","component"],ye=o=>{const{classes:h}=o;return xe({root:["root"]},Te,h)},ve=ue("div",{name:"MuiTableContainer",slot:"Root",overridesResolver:(o,h)=>h.root})({width:"100%",overflowX:"auto"}),Ne=C.forwardRef(function(h,v){const y=me({props:h,name:"MuiTableContainer"}),{className:S,component:_="div"}=y,N=fe(y,we),g=se({},y,{component:_}),x=ye(g);return e.jsx(ve,se({ref:v,as:_,className:ge(x.root,S),ownerState:g},N))}),X=Ne,Q=({data:o,filename:h="data.csv"})=>{const v=S=>{if(S.length===0)return"";const _=Object.keys(S[0]),N=(x,U)=>typeof U=="string"?`"${U.replace(/"/g,'""')}"`:U!=null?String(U):"",g=S.map(x=>_.map(U=>N(U,x[U])).join(","));return[_.join(","),...g].join(`
`)},y=()=>{const S=v(o),_=new Blob([S],{type:"text/csv;charset=utf-8;"}),N=URL.createObjectURL(_),g=document.createElement("a");g.href=N,g.download=h,g.style.display="none",document.body.appendChild(g),g.click(),document.body.removeChild(g),URL.revokeObjectURL(N)};return e.jsx(je,{onClick:y,type:"button",children:"Download CSV"})},oe=({sortBy:o,idsToAnalyze:h})=>{const[v,y]=C.useState([]),[S,_]=C.useState([]),[N,g]=C.useState(!0),[x,U]=C.useState("");C.useEffect(()=>{(async()=>{if(h.length!==0){g(!0);try{const c=await Promise.all(h.map(l=>P(l,[],["HAS_REPLY>","HAS_QUOTE>","THREAD_NEXT>","<POSTED"],o,!0,0,10,800))),n=[],u=[],p=[];c.forEach((l,E)=>{const s=l.nodes.find(m=>m.ref_id===h[E]);if(s&&n.push(s),o===M.ENGAGEMENT.value){const R=[...l.nodes.filter(f=>{var i,d,j,b;return f.node_type==="Tweet"&&((i=f.properties)==null?void 0:i.author)!==((d=s==null?void 0:s.properties)==null?void 0:d.author)&&((j=f.properties)==null?void 0:j.twitter_handle)!==((b=s==null?void 0:s.properties)==null?void 0:b.twitter_handle)}).map(f=>{var d,j,b,L,Y;const i=l.nodes.find(G=>{var k,A;return G.node_type==="User"&&((k=G.properties)==null?void 0:k.author_id)===((A=f.properties)==null?void 0:A.author)});return i?{...f,properties:{...f.properties,twitter_handle:(d=i.properties)==null?void 0:d.twitter_handle,followers:(j=i.properties)==null?void 0:j.followers,image_url:(b=i.properties)==null?void 0:b.image_url,impression_percentage:(Number((L=f.properties)==null?void 0:L.impression_count)/Number(((Y=s==null?void 0:s.properties)==null?void 0:Y.impression_count)||1)*100).toFixed(2)}}:f})].sort((f,i)=>{var b,L;const d=Number((b=f.properties)==null?void 0:b.impression_percentage)||0;return(Number((L=i.properties)==null?void 0:L.impression_percentage)||0)-d}).slice(0,20);R&&u.push(...R)}if(o===M.FOLLOWERS.value){const m=l.nodes.filter(i=>{var d,j,b,L;return i.node_type==="User"&&((d=i.properties)==null?void 0:d.author_id)!==((j=s==null?void 0:s.properties)==null?void 0:j.author)&&((b=i.properties)==null?void 0:b.twitter_handle)!==((L=s==null?void 0:s.properties)==null?void 0:L.twitter_handle)}).sort((i,d)=>{var j,b;return Number((j=d.properties)==null?void 0:j.followers)-Number((b=i.properties)==null?void 0:b.followers)}).slice(0,20),f=m.map(i=>{const d=l.edges.find(b=>b.source===i.ref_id),j=l.edges.find(b=>b.target===i.ref_id);return d?d.target:j?j.source:null}).map((i,d)=>{var G,k,A,ee,re,te;if(!i)return null;const j=((k=(G=m[d])==null?void 0:G.properties)==null?void 0:k.followers)||0,b=((ee=(A=m[d])==null?void 0:A.properties)==null?void 0:ee.twitter_handle)||"",L=((te=(re=m[d])==null?void 0:re.properties)==null?void 0:te.image_url)||"",Y=l.nodes.find(ce=>ce.ref_id===i);return{...Y,properties:{...(Y==null?void 0:Y.properties)||{},followers:j,twitter_handle:b,image_url:L}}}).filter(i=>i!==null);f&&p.push(...f)}}),y(u.sort((l,E)=>{var s,m;return Number((s=E.properties)==null?void 0:s.impression_percentage)-Number((m=l.properties)==null?void 0:m.impression_percentage)}).slice(0,20)),_(p.sort((l,E)=>{var s,m;return Number((s=E.properties)==null?void 0:s.followers)-Number((m=l.properties)==null?void 0:m.followers)}).slice(0,20)),g(!1)}catch(c){console.error("Error fetching tweets:",c),g(!1),U("Error fetching tweets")}finally{g(!1)}}})()},[o,h]);const t=o===M.ENGAGEMENT.value?v:S;if(x)return e.jsx("div",{style:{padding:24,color:"#FF4D4F"},children:x});if(!v.length&&!S.length)return N?e.jsxs(O,{align:"center",grow:1,justify:"center",children:[e.jsx(I,{color:w.white}),e.jsx("div",{style:{padding:24,fontSize:16,textAlign:"center",color:w.white},children:"Loading engagement data..."})]}):e.jsx("div",{style:{padding:24,textAlign:"center"},children:"No engagement data available"});const T=o===M.ENGAGEMENT.value?t.map(r=>{var c,n,u,p,l,E,s;return{"User profile":(c=r.properties)!=null&&c.twitter_handle?(n=r.properties)==null?void 0:n.twitter_handle:"",Date:(u=r.properties)!=null&&u.date?$.unix(r.properties.date).format("YYYY-MM-DD"):"",Tweet:((p=r.properties)==null?void 0:p.text)||"",Engagement:((l=r.properties)==null?void 0:l.impression_percentage)||"","Impression count":((E=r.properties)==null?void 0:E.impression_count)||"","Tweet ID":((s=r.properties)==null?void 0:s.tweet_id)||""}}):t.map(r=>{var c,n,u,p,l,E;return{"User profile":(c=r.properties)!=null&&c.twitter_handle?(n=r.properties)==null?void 0:n.twitter_handle:"",Date:(u=r.properties)!=null&&u.date?$.unix(r.properties.date).format("YYYY-MM-DD"):"",Tweet:((p=r.properties)==null?void 0:p.text)||"",Followers:((l=r.properties)==null?void 0:l.followers)||"","Tweet ID":((E=r.properties)==null?void 0:E.tweet_id)||""}});return e.jsx(X,{component:W,children:e.jsxs(z,{"aria-label":"a dense table",size:"small",sx:{minWidth:650},children:[e.jsx(H,{children:e.jsxs(D,{children:[e.jsx(a,{align:"left",children:"Rank"}),e.jsx(a,{align:"left",children:"User Profile"}),e.jsx(a,{align:"left",children:"Tweet"}),o===M.ENGAGEMENT.value&&e.jsx(a,{align:"left",children:"Engagement"}),e.jsx(a,{align:"left",children:"Followers"}),e.jsx(a,{align:"left",children:e.jsx(Q,{data:T,filename:`${o}-${$().format("YYYY-MM-DD")}.csv`})})]})}),e.jsx(V,{children:t.map((r,c)=>{var n,u,p,l,E,s,m,R,f,i,d,j;return e.jsxs(D,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[e.jsx(a,{children:c+1}),e.jsxs(a,{children:[e.jsx(q,{imageUrl:(n=r.properties)==null?void 0:n.image_url}),e.jsx(J,{children:((u=r==null?void 0:r.properties)==null?void 0:u.twitter_handle)&&e.jsx(Z,{children:r.properties.twitter_handle})})]}),e.jsxs(a,{children:[((p=r.properties)==null?void 0:p.text)||"",e.jsxs(O,{align:"center",direction:"row",justify:"flex-start",mt:16,children:[((l=r==null?void 0:r.properties)==null?void 0:l.date)&&e.jsx(pe,{"aria-label":"Time since tweet",children:$.unix(r.properties.date).fromNow()}),e.jsx(K,{"aria-label":"View tweet on Twitter",href:`https://twitter.com/${(E=r==null?void 0:r.properties)==null?void 0:E.twitter_handle}/status/${(s=r==null?void 0:r.properties)==null?void 0:s.tweet_id}?open=system`,rel:"noopener noreferrer",target:"_blank",children:e.jsx(B,{})})]})]}),o===M.ENGAGEMENT.value&&e.jsxs(e.Fragment,{children:[e.jsxs(a,{children:[(m=r.properties)==null?void 0:m.impression_percentage," %",((R=r.properties)==null?void 0:R.impression_count)!==void 0&&((f=r.properties)==null?void 0:f.impression_count)&&e.jsx(Me,{children:e.jsx(Le,{percentage:Number((i=r.properties)==null?void 0:i.impression_percentage)})})]}),e.jsx(a,{align:"right",children:Number((d=r.properties)==null?void 0:d.followers).toLocaleString()})]}),o===M.FOLLOWERS.value&&e.jsx(a,{align:"right",children:Number((j=r.properties)==null?void 0:j.followers).toLocaleString()})]},r.ref_id)})})]})})},Se=({sortBy:o,idsToAnalyze:h})=>{const[v,y]=C.useState([]),[S,_]=C.useState(!0),[N,g]=C.useState("");C.useEffect(()=>{(async()=>{if(h.length!==0){_(!0);try{const T=await Promise.all(h.map(n=>P(n,["User"],["RETWEETED_BY>"],"",!0,0,1,20))),r=[];T.forEach(n=>{n.nodes&&r.push(...n.nodes)});const c=r.filter(n=>n.node_type==="User").sort((n,u)=>{var p,l;return Number((p=u.properties)==null?void 0:p.followers)-Number((l=n.properties)==null?void 0:l.followers)}).slice(0,20);y(c),_(!1)}catch(T){console.error("Error fetching tweets:",T),_(!1),g("Error fetching tweets")}finally{_(!1)}}})()},[o,h]);const x=v;if(N)return e.jsx("div",{style:{padding:24,color:"#FF4D4F"},children:N});if(!v.length)return S?e.jsxs(O,{align:"center",grow:1,justify:"center",children:[e.jsx(I,{color:w.white}),e.jsx("div",{style:{padding:24,fontSize:16,textAlign:"center",color:w.white},children:"Loading engagement data..."})]}):e.jsx("div",{style:{padding:24,textAlign:"center"},children:"No engagement data available"});const U=x.map(t=>{var T,r,c;return{"User profile":(T=t.properties)!=null&&T.twitter_handle?(r=t.properties)==null?void 0:r.twitter_handle:"",Followers:((c=t.properties)==null?void 0:c.followers)||""}});return e.jsx(X,{component:W,children:e.jsxs(z,{"aria-label":"a dense table",size:"small",sx:{minWidth:650},children:[e.jsx(H,{children:e.jsxs(D,{children:[e.jsx(a,{align:"left",children:"Rank"}),e.jsx(a,{align:"left",children:"User Profile"}),e.jsx(a,{align:"left",children:"Followers"}),e.jsx(a,{align:"left",children:e.jsx(Q,{data:U,filename:`${o}-${$().format("YYYY-MM-DD")}.csv`})})]})}),e.jsx(V,{children:x.map((t,T)=>{var r,c,n,u;return e.jsxs(D,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[e.jsx(a,{children:T+1}),e.jsxs(a,{children:[e.jsx(q,{imageUrl:(r=t.properties)==null?void 0:r.image_url}),e.jsxs(O,{align:"center",direction:"row",justify:"flex-start",mt:16,children:[e.jsx(J,{children:((c=t==null?void 0:t.properties)==null?void 0:c.twitter_handle)&&e.jsx(Z,{children:t.properties.twitter_handle})}),e.jsx(K,{"aria-label":"View tweet on Twitter",href:`https://twitter.com/${(n=t==null?void 0:t.properties)==null?void 0:n.twitter_handle}?open=system`,rel:"noopener noreferrer",target:"_blank",children:e.jsx(B,{})})]})]}),e.jsx(a,{children:((u=t.properties)==null?void 0:u.followers)||""})," "]},t.ref_id)})})]})})},Ue=({sortBy:o,idsToAnalyze:h})=>{const[v,y]=C.useState([]),[S,_]=C.useState(!0),[N,g]=C.useState("");C.useEffect(()=>{(async()=>{if(h.length!==0){_(!0);try{const T=await Promise.all(h.map(n=>P(n,[],["HAS_REPLY>","HAS_QUOTE>","THREAD_NEXT>","<POSTED"],"sentiment",!0,0,10,800))),r=[],c=[];T.forEach((n,u)=>{const p=n.nodes.find(s=>s.ref_id===h[u]);p&&r.push(p);const E=[...n.nodes.filter(s=>{var m,R,f,i;return s.node_type==="Tweet"&&((m=s.properties)==null?void 0:m.author)!==((R=p==null?void 0:p.properties)==null?void 0:R.author)&&((f=s.properties)==null?void 0:f.twitter_handle)!==((i=p==null?void 0:p.properties)==null?void 0:i.twitter_handle)}).map(s=>{var R,f,i;const m=n.nodes.find(d=>{var j,b;return d.node_type==="User"&&((j=d.properties)==null?void 0:j.author_id)===((b=s.properties)==null?void 0:b.author)});return m?{...s,properties:{...s.properties,twitter_handle:(R=m.properties)==null?void 0:R.twitter_handle,image_url:(f=m.properties)==null?void 0:f.image_url,followers:(i=m.properties)==null?void 0:i.followers}}:s})].sort((s,m)=>{var i,d;const R=Number((i=s.properties)==null?void 0:i.sentiment)||0;return(Number((d=m.properties)==null?void 0:d.sentiment)||0)-R}).slice(0,20);E&&c.push(...E)}),y(c.sort((n,u)=>{var p,l;return Number((p=u.properties)==null?void 0:p.sentiment)-Number((l=n.properties)==null?void 0:l.sentiment)}).slice(0,20)),_(!1)}catch(T){console.error("Error fetching tweets:",T),_(!1),g("Error fetching tweets")}finally{_(!1)}}})()},[o,h]);const x=v;if(N)return e.jsx("div",{style:{padding:24,color:"#FF4D4F"},children:N});if(!v.length)return S?e.jsxs(O,{align:"center",grow:1,justify:"center",children:[e.jsx(I,{color:w.white}),e.jsx("div",{style:{padding:24,fontSize:16,textAlign:"center",color:w.white},children:"Loading engagement data..."})]}):e.jsx("div",{style:{padding:24,textAlign:"center"},children:"No engagement data available"});const U=x.map(t=>{var T,r,c,n,u;return{"User profile":(T=t.properties)!=null&&T.twitter_handle?(r=t.properties)==null?void 0:r.twitter_handle:"",Tweet:((c=t.properties)==null?void 0:c.text)||"",Sentiment:((n=t.properties)==null?void 0:n.sentiment)||"",Followers:((u=t.properties)==null?void 0:u.followers)||""}});return e.jsx(X,{component:W,children:e.jsxs(z,{"aria-label":"a dense table",size:"small",sx:{minWidth:650},children:[e.jsx(H,{children:e.jsxs(D,{children:[e.jsx(a,{align:"left",children:"Rank"}),e.jsx(a,{align:"left",children:"User Profile"}),e.jsx(a,{align:"left",children:"Tweet"}),e.jsx(a,{align:"left",children:"Sentiment"}),e.jsx(a,{align:"left",children:"Followers"}),e.jsx(a,{align:"left",children:e.jsx(Q,{data:U,filename:`${o}-${$().format("YYYY-MM-DD")}.csv`})})]})}),e.jsx(V,{children:x.map((t,T)=>{var r,c,n,u,p,l,E,s;return e.jsxs(D,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[e.jsx(a,{children:T+1}),e.jsxs(a,{children:[e.jsx(q,{imageUrl:(r=t.properties)==null?void 0:r.image_url}),e.jsx(J,{children:((c=t==null?void 0:t.properties)==null?void 0:c.twitter_handle)&&e.jsx(Z,{children:t.properties.twitter_handle})})]}),e.jsxs(a,{children:[((n=t.properties)==null?void 0:n.text)||"",e.jsxs(O,{align:"center",direction:"row",justify:"flex-start",mt:16,children:[((u=t==null?void 0:t.properties)==null?void 0:u.date)&&e.jsx(pe,{"aria-label":"Time since tweet",children:$.unix(t.properties.date).fromNow()}),e.jsx(K,{"aria-label":"View tweet on Twitter",href:`https://twitter.com/${(p=t==null?void 0:t.properties)==null?void 0:p.twitter_handle}/status/${(l=t==null?void 0:t.properties)==null?void 0:l.tweet_id}?open=system`,rel:"noopener noreferrer",target:"_blank",children:e.jsx(B,{})})]})]}),e.jsx(a,{align:"right",children:(E=t.properties)==null?void 0:E.sentiment}),e.jsx(a,{align:"right",children:(s=t.properties)==null?void 0:s.followers})]},t.ref_id)})})]})})},ne="ENGAGEMENT",ie="FOLLOWERS",le="TOP_REPOSTERS",ae="SENTIMENT",Ce={[ne]:oe,[ie]:oe,[le]:Se,[ae]:Ue},Re=F.button`
  background: ${({active:o})=>o?w.primaryBlue:"transparent"};
  border: 1px solid ${({active:o})=>o?w.primaryGreen:w.GRAY9};
  color: ${({active:o})=>o?w.white:w.GRAY6};
  padding: 6px 12px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 6px;
  &:hover {
    border-color: ${({active:o})=>o?w.primaryGreen:w.GRAY6};
  }
`,q=F.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: ${w.BG1};
  ${({imageUrl:o})=>o&&`background-image: url(${o});`}
  background-size: cover;
`,J=F.div`
  display: flex;
  flex-direction: column;
`,Z=F.span`
  font-size: 14px;
`,pe=F.div`
  color: ${w.GRAY7};
  font-size: 12px;
`,K=F.a`
  color: ${w.SOURCE_TABLE_LINK};
  cursor: pointer;
  font-size: 16px;
  height: 16px;
  margin-left: 8px;
`,Me=F.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,Le=F.div`
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
    width: ${o=>o.percentage}%;
    background-color: ${w.primaryGreen};
    border-radius: 2px;
  }
`,Fe=F.h2`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 16px;
  color: ${w.white};
`,M={[ne]:{label:"Engagement",value:"impression_count"},[ie]:{label:"Followers",value:"followers"},[le]:{label:"Top Reposters",value:"top_reposters"},[ae]:{label:"Sentiment",value:"sentiment"}},Oe=({tweetId:o})=>{var g;const[h,v]=C.useState(M.ENGAGEMENT.value),{tweetId:y}=be(),S=C.useMemo(()=>{const x=(y==null?void 0:y.split("&"))||[];return o==="summary"?x:x.filter(U=>U===o)},[y,o]),_=(g=Object.entries(M).find(([,x])=>x.value===h))==null?void 0:g[0],N=_?Ce[_]:null;return e.jsxs(Ye,{children:[e.jsxs(O,{p:24,children:[e.jsx(Fe,{children:"Engagement Report"}),e.jsx(O,{direction:"row",children:Object.keys(M).map(x=>e.jsx(Re,{active:h===M[x].value,onClick:()=>v(M[x].value),children:M[x].label},x))})]}),N&&e.jsx(N,{idsToAnalyze:S,sortBy:h})]})},Ye=F(O)`
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
`,He=({tweetId:o})=>{const{close:h,visible:v}=_e("tweetAnalyze"),y=()=>{h()};return e.jsx(Ee,{"data-testid":"tweet-analyze-modal",id:"tweetAnalyze",kind:"full",noWrap:!0,onClose:y,preventOutsideClose:!0,children:v&&e.jsx(Oe,{tweetId:o})})};export{He as TweetAnalyze};
