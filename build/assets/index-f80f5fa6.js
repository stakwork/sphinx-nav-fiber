import{L as he,M as me,N as ue,r as C,U as ge,J as fe,O as te,j as e,V as xe,X as je,B as be,ak as oe,F as $,g as T,x as k,v as ne,s as L,q as we,D as _e,b5 as Ee}from"./index-fd66fa62.js";import{L as B}from"./index-9b9c3e24.js";import{C as P}from"./ClipLoader-a27b3188.js";import{z as I}from"./index-80bf7276.js";import{M as W,b as z,a as G,T as a,c as V}from"./TableRow-a1eb7924.js";import"./SourcesTableIcon-c3a66ab9.js";import"./CheckIcon-f0c01bc0.js";import"./DeleteNodeIcon-3f57b907.js";import"./SoundIcon-5588cca4.js";import"./SucessFeedBackIcon-ff147d93.js";function Te(t){return he("MuiTableContainer",t)}me("MuiTableContainer",["root"]);const ye=["className","component"],ve=t=>{const{classes:p}=t;return je({root:["root"]},Te,p)},Ne=ue("div",{name:"MuiTableContainer",slot:"Root",overridesResolver:(t,p)=>p.root})({width:"100%",overflowX:"auto"}),Se=C.forwardRef(function(p,v){const y=ge({props:p,name:"MuiTableContainer"}),{className:S,component:w="div"}=y,N=fe(y,ye),f=te({},y,{component:w}),x=ve(f);return e.jsx(Ne,te({ref:v,as:w,className:xe(x.root,S),ownerState:f},N))}),H=Se,X=({data:t,filename:p="data.csv"})=>{const v=S=>{if(S.length===0)return"";const w=Object.keys(S[0]),N=(x,U)=>typeof U=="string"?`"${U.replace(/"/g,'""')}"`:U!=null?String(U):"",f=S.map(x=>w.map(U=>N(U,x[U])).join(","));return[w.join(","),...f].join(`
`)},y=()=>{const S=v(t),w=new Blob([S],{type:"text/csv;charset=utf-8;"}),N=URL.createObjectURL(w),f=document.createElement("a");f.href=N,f.download=p,f.style.display="none",document.body.appendChild(f),f.click(),document.body.removeChild(f),URL.revokeObjectURL(N)};return e.jsx(be,{onClick:y,type:"button",children:"Download CSV"})},Ue=async t=>await oe.get(`/mindset/tweet/engagement/${t}`),Ce=async t=>await oe.get(`/mindset/tweet/followers/${t}`),se=({sortBy:t,idsToAnalyze:p})=>{const[v,y]=C.useState([]),[S,w]=C.useState([]),[N,f]=C.useState(!0),[x,U]=C.useState("");C.useEffect(()=>{(async()=>{if(p.length!==0){f(!0);try{const d=await Promise.all(p.map(l=>t==="followers"?Ue(l):Ce(l))),n=[],m=[],c=[];d.forEach((l,_)=>{const o=l.nodes.find(u=>u.ref_id===p[_]);if(o&&n.push(o),t===M.ENGAGEMENT.value){const R=[...l.nodes.filter(g=>{var i,h,j,b;return g.node_type==="Tweet"&&((i=g.properties)==null?void 0:i.author)!==((h=o==null?void 0:o.properties)==null?void 0:h.author)&&((j=g.properties)==null?void 0:j.twitter_handle)!==((b=o==null?void 0:o.properties)==null?void 0:b.twitter_handle)}).map(g=>{var h,j,b,F,Y;const i=l.nodes.find(O=>{var D,A;return O.node_type==="User"&&((D=O.properties)==null?void 0:D.author_id)===((A=g.properties)==null?void 0:A.author)});return i?{...g,properties:{...g.properties,twitter_handle:(h=i.properties)==null?void 0:h.twitter_handle,followers:(j=i.properties)==null?void 0:j.followers,image_url:(b=i.properties)==null?void 0:b.image_url,impression_percentage:(Number((F=g.properties)==null?void 0:F.impression_count)/Number(((Y=o==null?void 0:o.properties)==null?void 0:Y.impression_count)||1)*100).toFixed(2)}}:g})].sort((g,i)=>{var b,F;const h=Number((b=g.properties)==null?void 0:b.impression_percentage)||0;return(Number((F=i.properties)==null?void 0:F.impression_percentage)||0)-h}).slice(0,20);R&&m.push(...R)}if(t===M.FOLLOWERS.value){const u=l.nodes.filter(i=>{var h,j,b,F;return i.node_type==="User"&&((h=i.properties)==null?void 0:h.author_id)!==((j=o==null?void 0:o.properties)==null?void 0:j.author)&&((b=i.properties)==null?void 0:b.twitter_handle)!==((F=o==null?void 0:o.properties)==null?void 0:F.twitter_handle)}).sort((i,h)=>{var j,b;return Number((j=h.properties)==null?void 0:j.followers)-Number((b=i.properties)==null?void 0:b.followers)}).slice(0,20),g=u.map(i=>{const h=l.edges.find(b=>b.source===i.ref_id),j=l.edges.find(b=>b.target===i.ref_id);return h?h.target:j?j.source:null}).map((i,h)=>{var O,D,A,K,ee,re;if(!i)return null;const j=((D=(O=u[h])==null?void 0:O.properties)==null?void 0:D.followers)||0,b=((K=(A=u[h])==null?void 0:A.properties)==null?void 0:K.twitter_handle)||"",F=((re=(ee=u[h])==null?void 0:ee.properties)==null?void 0:re.image_url)||"",Y=l.nodes.find(de=>de.ref_id===i);return{...Y,properties:{...(Y==null?void 0:Y.properties)||{},followers:j,twitter_handle:b,image_url:F}}}).filter(i=>i!==null);g&&c.push(...g)}}),y(m.sort((l,_)=>{var o,u;return Number((o=_.properties)==null?void 0:o.impression_percentage)-Number((u=l.properties)==null?void 0:u.impression_percentage)}).slice(0,20)),w(c.sort((l,_)=>{var o,u;return Number((o=_.properties)==null?void 0:o.followers)-Number((u=l.properties)==null?void 0:u.followers)}).slice(0,20)),f(!1)}catch(d){console.error("Error fetching tweets:",d),f(!1),U("Error fetching tweets")}finally{f(!1)}}})()},[t,p]);const s=t===M.ENGAGEMENT.value?v:S;if(x)return e.jsx("div",{style:{padding:24,color:"#FF4D4F"},children:x});if(!v.length&&!S.length)return N?e.jsxs($,{align:"center",grow:1,justify:"center",children:[e.jsx(P,{color:T.white}),e.jsx("div",{style:{padding:24,fontSize:16,textAlign:"center",color:T.white},children:"Loading engagement data..."})]}):e.jsx("div",{style:{padding:24,textAlign:"center"},children:"No engagement data available"});const E=t===M.ENGAGEMENT.value?s.map(r=>{var d,n,m,c,l,_,o;return{"User profile":(d=r.properties)!=null&&d.twitter_handle?(n=r.properties)==null?void 0:n.twitter_handle:"",Date:(m=r.properties)!=null&&m.date?k.unix(r.properties.date).format("YYYY-MM-DD"):"",Tweet:((c=r.properties)==null?void 0:c.text)||"",Engagement:((l=r.properties)==null?void 0:l.impression_percentage)||"","Impression count":((_=r.properties)==null?void 0:_.impression_count)||"","Tweet ID":((o=r.properties)==null?void 0:o.tweet_id)||""}}):s.map(r=>{var d,n,m,c,l,_;return{"User profile":(d=r.properties)!=null&&d.twitter_handle?(n=r.properties)==null?void 0:n.twitter_handle:"",Date:(m=r.properties)!=null&&m.date?k.unix(r.properties.date).format("YYYY-MM-DD"):"",Tweet:((c=r.properties)==null?void 0:c.text)||"",Followers:((l=r.properties)==null?void 0:l.followers)||"","Tweet ID":((_=r.properties)==null?void 0:_.tweet_id)||""}});return e.jsx(H,{component:I,children:e.jsxs(W,{"aria-label":"a dense table",size:"small",sx:{minWidth:650},children:[e.jsx(z,{children:e.jsxs(G,{children:[e.jsx(a,{align:"left",children:"Rank"}),e.jsx(a,{align:"left",children:"User Profile"}),e.jsx(a,{align:"left",children:"Tweet"}),t===M.ENGAGEMENT.value&&e.jsx(a,{align:"left",children:"Engagement"}),e.jsx(a,{align:"left",children:"Followers"}),e.jsx(a,{align:"left",children:e.jsx(X,{data:E,filename:`${t}-${k().format("YYYY-MM-DD")}.csv`})})]})}),e.jsx(V,{children:s.map((r,d)=>{var n,m,c,l,_,o,u,R,g,i,h,j;return e.jsxs(G,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[e.jsx(a,{children:d+1}),e.jsxs(a,{children:[e.jsx(q,{imageUrl:(n=r.properties)==null?void 0:n.image_url}),e.jsx(J,{children:((m=r==null?void 0:r.properties)==null?void 0:m.twitter_handle)&&e.jsx(Q,{children:r.properties.twitter_handle})})]}),e.jsxs(a,{children:[((c=r.properties)==null?void 0:c.text)||"",e.jsxs($,{align:"center",direction:"row",justify:"flex-start",mt:16,children:[((l=r==null?void 0:r.properties)==null?void 0:l.date)&&e.jsx(ce,{"aria-label":"Time since tweet",children:k.unix(r.properties.date).fromNow()}),e.jsx(Z,{"aria-label":"View tweet on Twitter",href:`https://twitter.com/${(_=r==null?void 0:r.properties)==null?void 0:_.twitter_handle}/status/${(o=r==null?void 0:r.properties)==null?void 0:o.tweet_id}?open=system`,rel:"noopener noreferrer",target:"_blank",children:e.jsx(B,{})})]})]}),t===M.ENGAGEMENT.value&&e.jsxs(e.Fragment,{children:[e.jsxs(a,{children:[(u=r.properties)==null?void 0:u.impression_percentage," %",((R=r.properties)==null?void 0:R.impression_count)!==void 0&&!!((g=r.properties)!=null&&g.impression_count)&&e.jsx($e,{children:e.jsx(Ye,{percentage:Number((i=r.properties)==null?void 0:i.impression_percentage)})})]}),e.jsx(a,{align:"right",children:Number((h=r.properties)==null?void 0:h.followers).toLocaleString()})]}),t===M.FOLLOWERS.value&&e.jsx(a,{align:"right",children:Number((j=r.properties)==null?void 0:j.followers).toLocaleString()})]},r.ref_id)})})]})})},Re=({sortBy:t,idsToAnalyze:p})=>{const[v,y]=C.useState([]),[S,w]=C.useState(!0),[N,f]=C.useState("");C.useEffect(()=>{(async()=>{if(p.length!==0){w(!0);try{const E=await Promise.all(p.map(n=>ne(n,["User"],["RETWEETED_BY>"],"",!0,0,1,20))),r=[];E.forEach(n=>{n.nodes&&r.push(...n.nodes)});const d=r.filter(n=>n.node_type==="User").sort((n,m)=>{var c,l;return Number((c=m.properties)==null?void 0:c.followers)-Number((l=n.properties)==null?void 0:l.followers)}).slice(0,20);y(d),w(!1)}catch(E){console.error("Error fetching tweets:",E),w(!1),f("Error fetching tweets")}finally{w(!1)}}})()},[t,p]);const x=v;if(N)return e.jsx("div",{style:{padding:24,color:"#FF4D4F"},children:N});if(!v.length)return S?e.jsxs($,{align:"center",grow:1,justify:"center",children:[e.jsx(P,{color:T.white}),e.jsx("div",{style:{padding:24,fontSize:16,textAlign:"center",color:T.white},children:"Loading engagement data..."})]}):e.jsx("div",{style:{padding:24,textAlign:"center"},children:"No engagement data available"});const U=x.map(s=>{var E,r,d;return{"User profile":(E=s.properties)!=null&&E.twitter_handle?(r=s.properties)==null?void 0:r.twitter_handle:"",Followers:((d=s.properties)==null?void 0:d.followers)||""}});return e.jsx(H,{component:I,children:e.jsxs(W,{"aria-label":"a dense table",size:"small",sx:{minWidth:650},children:[e.jsx(z,{children:e.jsxs(G,{children:[e.jsx(a,{align:"left",children:"Rank"}),e.jsx(a,{align:"left",children:"User Profile"}),e.jsx(a,{align:"left",children:"Followers"}),e.jsx(a,{align:"left",children:e.jsx(X,{data:U,filename:`${t}-${k().format("YYYY-MM-DD")}.csv`})})]})}),e.jsx(V,{children:x.map((s,E)=>{var r,d,n,m;return e.jsxs(G,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[e.jsx(a,{children:E+1}),e.jsxs(a,{children:[e.jsx(q,{imageUrl:(r=s.properties)==null?void 0:r.image_url}),e.jsxs($,{align:"center",direction:"row",justify:"flex-start",mt:16,children:[e.jsx(J,{children:((d=s==null?void 0:s.properties)==null?void 0:d.twitter_handle)&&e.jsx(Q,{children:s.properties.twitter_handle})}),e.jsx(Z,{"aria-label":"View tweet on Twitter",href:`https://twitter.com/${(n=s==null?void 0:s.properties)==null?void 0:n.twitter_handle}?open=system`,rel:"noopener noreferrer",target:"_blank",children:e.jsx(B,{})})]})]}),e.jsx(a,{children:((m=s.properties)==null?void 0:m.followers)||""})," "]},s.ref_id)})})]})})},Me=({sortBy:t,idsToAnalyze:p})=>{const[v,y]=C.useState([]),[S,w]=C.useState(!0),[N,f]=C.useState("");C.useEffect(()=>{(async()=>{if(p.length!==0){w(!0);try{const E=await Promise.all(p.map(n=>ne(n,[],["HAS_REPLY>","HAS_QUOTE>","THREAD_NEXT>","<POSTED"],"sentiment",!0,0,10,800))),r=[],d=[];E.forEach((n,m)=>{const c=n.nodes.find(o=>o.ref_id===p[m]);c&&r.push(c);const _=[...n.nodes.filter(o=>{var u,R,g,i;return o.node_type==="Tweet"&&((u=o.properties)==null?void 0:u.author)!==((R=c==null?void 0:c.properties)==null?void 0:R.author)&&((g=o.properties)==null?void 0:g.twitter_handle)!==((i=c==null?void 0:c.properties)==null?void 0:i.twitter_handle)}).map(o=>{var R,g,i;const u=n.nodes.find(h=>{var j,b;return h.node_type==="User"&&((j=h.properties)==null?void 0:j.author_id)===((b=o.properties)==null?void 0:b.author)});return u?{...o,properties:{...o.properties,twitter_handle:(R=u.properties)==null?void 0:R.twitter_handle,image_url:(g=u.properties)==null?void 0:g.image_url,followers:(i=u.properties)==null?void 0:i.followers}}:o})].sort((o,u)=>{var i,h;const R=Number((i=o.properties)==null?void 0:i.sentiment)||0;return(Number((h=u.properties)==null?void 0:h.sentiment)||0)-R}).slice(0,20);_&&d.push(..._)}),y(d.sort((n,m)=>{var c,l;return Number((c=m.properties)==null?void 0:c.sentiment)-Number((l=n.properties)==null?void 0:l.sentiment)}).slice(0,20)),w(!1)}catch(E){console.error("Error fetching tweets:",E),w(!1),f("Error fetching tweets")}finally{w(!1)}}})()},[t,p]);const x=v;if(N)return e.jsx("div",{style:{padding:24,color:"#FF4D4F"},children:N});if(!v.length)return S?e.jsxs($,{align:"center",grow:1,justify:"center",children:[e.jsx(P,{color:T.white}),e.jsx("div",{style:{padding:24,fontSize:16,textAlign:"center",color:T.white},children:"Loading engagement data..."})]}):e.jsx("div",{style:{padding:24,textAlign:"center"},children:"No engagement data available"});const U=x.map(s=>{var E,r,d,n,m;return{"User profile":(E=s.properties)!=null&&E.twitter_handle?(r=s.properties)==null?void 0:r.twitter_handle:"",Tweet:((d=s.properties)==null?void 0:d.text)||"",Sentiment:((n=s.properties)==null?void 0:n.sentiment)||"",Followers:((m=s.properties)==null?void 0:m.followers)||""}});return e.jsx(H,{component:I,children:e.jsxs(W,{"aria-label":"a dense table",size:"small",sx:{minWidth:650},children:[e.jsx(z,{children:e.jsxs(G,{children:[e.jsx(a,{align:"left",children:"Rank"}),e.jsx(a,{align:"left",children:"User Profile"}),e.jsx(a,{align:"left",children:"Tweet"}),e.jsx(a,{align:"left",children:"Sentiment"}),e.jsx(a,{align:"left",children:"Followers"}),e.jsx(a,{align:"left",children:e.jsx(X,{data:U,filename:`${t}-${k().format("YYYY-MM-DD")}.csv`})})]})}),e.jsx(V,{children:x.map((s,E)=>{var r,d,n,m,c,l,_,o;return e.jsxs(G,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[e.jsx(a,{children:E+1}),e.jsxs(a,{children:[e.jsx(q,{imageUrl:(r=s.properties)==null?void 0:r.image_url}),e.jsx(J,{children:((d=s==null?void 0:s.properties)==null?void 0:d.twitter_handle)&&e.jsx(Q,{children:s.properties.twitter_handle})})]}),e.jsxs(a,{children:[((n=s.properties)==null?void 0:n.text)||"",e.jsxs($,{align:"center",direction:"row",justify:"flex-start",mt:16,children:[((m=s==null?void 0:s.properties)==null?void 0:m.date)&&e.jsx(ce,{"aria-label":"Time since tweet",children:k.unix(s.properties.date).fromNow()}),e.jsx(Z,{"aria-label":"View tweet on Twitter",href:`https://twitter.com/${(c=s==null?void 0:s.properties)==null?void 0:c.twitter_handle}/status/${(l=s==null?void 0:s.properties)==null?void 0:l.tweet_id}?open=system`,rel:"noopener noreferrer",target:"_blank",children:e.jsx(B,{})})]})]}),e.jsx(a,{align:"right",children:(_=s.properties)==null?void 0:_.sentiment}),e.jsx(a,{align:"right",children:(o=s.properties)==null?void 0:o.followers})]},s.ref_id)})})]})})},ie="ENGAGEMENT",le="FOLLOWERS",ae="TOP_REPOSTERS",pe="SENTIMENT",Fe={[ie]:se,[le]:se,[ae]:Re,[pe]:Me},Le=L.button`
  background: ${({active:t})=>t?T.primaryBlue:"transparent"};
  border: 1px solid ${({active:t})=>t?T.primaryGreen:T.GRAY9};
  color: ${({active:t})=>t?T.white:T.GRAY6};
  padding: 6px 12px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 6px;
  &:hover {
    border-color: ${({active:t})=>t?T.primaryGreen:T.GRAY6};
  }
`,q=L.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: ${T.BG1};
  ${({imageUrl:t})=>t&&`background-image: url(${t});`}
  background-size: cover;
`,J=L.div`
  display: flex;
  flex-direction: column;
`,Q=L.span`
  font-size: 14px;
`,ce=L.div`
  color: ${T.GRAY7};
  font-size: 12px;
`,Z=L.a`
  color: ${T.SOURCE_TABLE_LINK};
  cursor: pointer;
  font-size: 16px;
  height: 16px;
  margin-left: 8px;
`,$e=L.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,Ye=L.div`
  width: 100px;
  height: 4px;
  background-color: ${T.BG1};
  border-radius: 2px;
  position: relative;
  &::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: ${t=>t.percentage}%;
    background-color: ${T.primaryGreen};
    border-radius: 2px;
  }
`,ke=L.h2`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 16px;
  color: ${T.white};
`,M={[ie]:{label:"Engagement",value:"impression_count"},[le]:{label:"Followers",value:"followers"},[ae]:{label:"Top Reposters",value:"top_reposters"},[pe]:{label:"Sentiment",value:"sentiment"}},Ge=({tweetId:t})=>{var f;const[p,v]=C.useState(M.ENGAGEMENT.value),{tweetId:y}=we(),S=C.useMemo(()=>{const x=(y==null?void 0:y.split("&"))||[];return t==="summary"?x:x.filter(U=>U===t)},[y,t]),w=(f=Object.entries(M).find(([,x])=>x.value===p))==null?void 0:f[0],N=w?Fe[w]:null;return e.jsxs(Oe,{children:[e.jsxs($,{p:24,children:[e.jsx(ke,{children:"Engagement Report"}),e.jsx($,{direction:"row",children:Object.keys(M).map(x=>e.jsx(Le,{active:p===M[x].value,onClick:()=>v(M[x].value),children:M[x].label},x))})]}),N&&e.jsx(N,{idsToAnalyze:S,sortBy:p})]})},Oe=L($)`
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
`,qe=({tweetId:t})=>{const{close:p,visible:v}=_e("tweetAnalyze"),y=()=>{p()};return e.jsx(Ee,{"data-testid":"tweet-analyze-modal",id:"tweetAnalyze",kind:"full",noWrap:!0,onClose:y,preventOutsideClose:!0,children:v&&e.jsx(Ge,{tweetId:t})})};export{qe as TweetAnalyze};
