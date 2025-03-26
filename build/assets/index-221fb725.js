import{L as J,M as K,N as Q,r as b,U as Z,J as ee,O as W,j as e,V as re,X as te,s as m,g as c,q as se,F as C,x as oe,v as ie,D as ne,b5 as ae}from"./index-1c89fea4.js";import{L as le}from"./index-70e7f365.js";import{C as H}from"./ClipLoader-12d8f6ab.js";import{w as pe}from"./index-d554dd30.js";import{M as ce,b as de,a as Y,T as g,c as he}from"./TableRow-45e5dc4e.js";import"./SourcesTableIcon-88e196a5.js";import"./CheckIcon-9599d24f.js";import"./DeleteNodeIcon-17ffa5ae.js";import"./SoundIcon-cfe1baef.js";import"./SucessFeedBackIcon-4b0baa58.js";function ue(o){return J("MuiTableContainer",o)}K("MuiTableContainer",["root"]);const ge=["className","component"],me=o=>{const{classes:a}=o;return te({root:["root"]},ue,a)},xe=Q("div",{name:"MuiTableContainer",slot:"Root",overridesResolver:(o,a)=>a.root})({width:"100%",overflowX:"auto"}),fe=b.forwardRef(function(a,w){const x=Z({props:a,name:"MuiTableContainer"}),{className:z,component:v="div"}=x,F=ee(x,ge),N=W({},x,{component:v}),T=me(N);return e.jsx(xe,W({ref:w,as:v,className:re(T.root,z),ownerState:N},F))}),be=fe,D=m.button`
  background: ${({active:o})=>o?c.primaryBlue:"transparent"};
  border: 1px solid ${({active:o})=>o?c.primaryGreen:c.GRAY9};
  color: ${({active:o})=>o?c.white:c.GRAY6};
  padding: 6px 12px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 6px;
  &:hover {
    border-color: ${({active:o})=>o?c.primaryGreen:c.GRAY6};
  }
`,we=m.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: ${c.BG1};
  ${({imageUrl:o})=>o&&`background-image: url(${o});`}
  background-size: cover;
`,ye=m.div`
  display: flex;
  flex-direction: column;
`,je=m.span`
  font-size: 14px;
`,_e=m.div`
  color: ${c.GRAY7};
  font-size: 12px;
`,Te=m.a`
  color: ${c.SOURCE_TABLE_LINK};
  cursor: pointer;
  font-size: 16px;
  height: 16px;
  margin-left: 8px;
`,Ee=m.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,Ce=m.div`
  width: 100px;
  height: 4px;
  background-color: ${c.BG1};
  border-radius: 2px;
  position: relative;
  &::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: ${o=>o.percentage}%;
    background-color: ${c.primaryGreen};
    border-radius: 2px;
  }
`,ve=m.h2`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 16px;
  color: ${c.white};
`,_="impression_count",S="followers",Ne=({tweetId:o})=>{const[a,w]=b.useState(_),[x,z]=b.useState([]),[v,F]=b.useState([]),[N,T]=b.useState(!0),[G,X]=b.useState(""),{tweetId:$}=se(),L=b.useMemo(()=>{const r=($==null?void 0:$.split("&"))||[];return o==="summary"?r:r.filter(y=>y===o)},[$,o]);if(b.useEffect(()=>{(async()=>{if(L.length!==0){T(!0);try{const y=await Promise.all(L.map(d=>ie(d,[],["HAS_REPLY>","HAS_QUOTE>","THREAD_NEXT>","<POSTED"],a,!0,0,10,800))),k=[],B=[],U=[];y.forEach((d,f)=>{const t=d.nodes.find(h=>h.ref_id===L[f]);if(t&&k.push(t),a===_){const E=[...d.nodes.filter(l=>{var s,i,p,n;return l.node_type==="Tweet"&&((s=l.properties)==null?void 0:s.author)!==((i=t==null?void 0:t.properties)==null?void 0:i.author)&&((p=l.properties)==null?void 0:p.twitter_handle)!==((n=t==null?void 0:t.properties)==null?void 0:n.twitter_handle)}).map(l=>{var i,p,n,u;const s=d.nodes.find(j=>{var A,R;return j.node_type==="User"&&((A=j.properties)==null?void 0:A.author_id)===((R=l.properties)==null?void 0:R.author)});return s?{...l,properties:{...l.properties,twitter_handle:(i=s.properties)==null?void 0:i.twitter_handle,image_url:(p=s.properties)==null?void 0:p.image_url,impression_percentage:(Number((n=l.properties)==null?void 0:n.impression_count)/Number(((u=t==null?void 0:t.properties)==null?void 0:u.impression_count)||1)*100).toFixed(2)}}:l})].sort((l,s)=>{var n,u;const i=Number((n=l.properties)==null?void 0:n.impression_percentage)||0;return(Number((u=s.properties)==null?void 0:u.impression_percentage)||0)-i}).slice(0,20);E&&B.push(...E)}if(a===S){const h=d.nodes.filter(s=>{var i,p,n,u;return s.node_type==="User"&&((i=s.properties)==null?void 0:i.author_id)!==((p=t==null?void 0:t.properties)==null?void 0:p.author)&&((n=s.properties)==null?void 0:n.twitter_handle)!==((u=t==null?void 0:t.properties)==null?void 0:u.twitter_handle)}).sort((s,i)=>{var p,n;return Number((p=i.properties)==null?void 0:p.followers)-Number((n=s.properties)==null?void 0:n.followers)}).slice(0,20),l=h.map(s=>{const i=d.edges.find(n=>n.source===s.ref_id),p=d.edges.find(n=>n.target===s.ref_id);return i?i.target:p?p.source:null}).map((s,i)=>{var A,R,M,P,I,O;if(!s)return null;const p=((R=(A=h[i])==null?void 0:A.properties)==null?void 0:R.followers)||0,n=((P=(M=h[i])==null?void 0:M.properties)==null?void 0:P.twitter_handle)||"",u=((O=(I=h[i])==null?void 0:I.properties)==null?void 0:O.image_url)||"",j=d.nodes.find(q=>q.ref_id===s);return{...j,properties:{...(j==null?void 0:j.properties)||{},followers:p,twitter_handle:n,image_url:u}}}).filter(s=>s!==null);l&&U.push(...l)}}),z(B.sort((d,f)=>{var t,h;return Number((t=f.properties)==null?void 0:t.impression_percentage)-Number((h=d.properties)==null?void 0:h.impression_percentage)}).slice(0,20)),F(U.sort((d,f)=>{var t,h;return Number((t=f.properties)==null?void 0:t.followers)-Number((h=d.properties)==null?void 0:h.followers)}).slice(0,20)),T(!1)}catch(y){console.error("Error fetching tweets:",y),T(!1),X("Error fetching tweets")}finally{T(!1)}}})()},[a,L]),G)return e.jsx("div",{style:{padding:24,color:"#FF4D4F"},children:G});if(!x.length&&!v.length)return N?e.jsxs(C,{align:"center",grow:1,justify:"center",children:[e.jsx(H,{color:c.white}),e.jsx("div",{style:{padding:24,fontSize:16,textAlign:"center",color:c.white},children:"Loading engagement data..."})]}):e.jsx("div",{style:{padding:24,textAlign:"center"},children:"No engagement data available"});const V=a===_?x:v;return e.jsxs(Be,{children:[e.jsxs(C,{p:24,children:[e.jsx(ve,{children:"Engagement Report"}),e.jsxs(C,{direction:"row",children:[e.jsx(D,{active:a===_,onClick:()=>w(_),children:"Total Engagement"}),e.jsx(D,{active:a===S,onClick:()=>w(S),children:"Follower Count"})]})]}),N?e.jsxs(C,{align:"center",grow:1,justify:"center",children:[e.jsx(H,{color:c.white}),e.jsx("div",{style:{padding:24,fontSize:16,textAlign:"center",color:c.white},children:"Loading engagement data..."})]}):e.jsx(be,{component:pe,children:e.jsxs(ce,{"aria-label":"a dense table",size:"small",sx:{minWidth:650},children:[e.jsx(de,{children:e.jsxs(Y,{children:[e.jsx(g,{align:"left",children:"Rank"}),e.jsx(g,{align:"left",children:"User Profile"}),e.jsx(g,{align:"left",children:"Tweet"}),a===_&&e.jsx(g,{align:"left",children:"Engagement"}),a===S&&e.jsx(g,{align:"left",children:"Followers"})]})}),e.jsx(he,{children:V.map((r,y)=>{var k,B,U,d,f,t,h,E,l,s,i;return e.jsxs(Y,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[e.jsx(g,{children:y+1}),e.jsxs(g,{children:[e.jsx(we,{imageUrl:(k=r.properties)==null?void 0:k.image_url}),e.jsx(ye,{children:((B=r==null?void 0:r.properties)==null?void 0:B.twitter_handle)&&e.jsx(je,{children:r.properties.twitter_handle})})]}),e.jsxs(g,{children:[((U=r.properties)==null?void 0:U.text)||"",e.jsxs(C,{align:"center",direction:"row",justify:"flex-start",mt:16,children:[((d=r==null?void 0:r.properties)==null?void 0:d.date)&&e.jsx(_e,{"aria-label":"Time since tweet",children:oe.unix(r.properties.date).fromNow()}),e.jsx(Te,{"aria-label":"View tweet on Twitter",href:`https://twitter.com/${(f=r==null?void 0:r.properties)==null?void 0:f.twitter_handle}/status/${(t=r==null?void 0:r.properties)==null?void 0:t.tweet_id}?open=system`,rel:"noopener noreferrer",target:"_blank",children:e.jsx(le,{})})]})]}),a===_&&e.jsxs(g,{children:[(h=r.properties)==null?void 0:h.impression_percentage," %",((E=r.properties)==null?void 0:E.impression_count)!==void 0&&((l=r.properties)==null?void 0:l.impression_count)&&e.jsx(Ee,{children:e.jsx(Ce,{percentage:Number((s=r.properties)==null?void 0:s.impression_percentage)})})]}),a===S&&e.jsx(g,{align:"right",children:Number((i=r.properties)==null?void 0:i.followers).toLocaleString()})]},r.ref_id)})})]})})]})},Be=m(C)`
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
`,Me=({tweetId:o})=>{const{close:a,visible:w}=ne("tweetAnalyze"),x=()=>{a()};return e.jsx(ae,{"data-testid":"tweet-analyze-modal",id:"tweetAnalyze",kind:"full",noWrap:!0,onClose:x,preventOutsideClose:!0,children:w&&e.jsx(Ne,{tweetId:o})})};export{Me as TweetAnalyze};
