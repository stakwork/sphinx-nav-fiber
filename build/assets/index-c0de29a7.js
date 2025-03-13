import{L as D,M as H,N as Y,r as b,U as X,J as q,O as M,j as e,V as J,X as Q,s as m,g as l,F as U,q as V,x as K,D as Z,y as ee,b5 as te}from"./index-cb231739.js";import{C as re}from"./ClipLoader-55a6a1f7.js";import{w as se}from"./index-41b5edfd.js";import{M as oe,b as ne,a as P,T as x,c as ie}from"./TableRow-764fd77e.js";function ae(t){return D("MuiTableContainer",t)}H("MuiTableContainer",["root"]);const le=["className","component"],ce=t=>{const{classes:p}=t;return Q({root:["root"]},ae,p)},de=Y("div",{name:"MuiTableContainer",slot:"Root",overridesResolver:(t,p)=>p.root})({width:"100%",overflowX:"auto"}),pe=b.forwardRef(function(p,w){const T=X({props:p,name:"MuiTableContainer"}),{className:E,component:C="div"}=T,f=q(T,le),v=M({},T,{component:C}),B=ce(v);return e.jsx(de,M({ref:w,as:C,className:J(B.root,E),ownerState:v},f))}),ue=pe,he=m(U)`
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
`,L=m.button`
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
`,ge=m.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: ${l.BG1};
  ${({imageUrl:t})=>t&&`background-image: url(${t});`}
  background-size: cover;
`,xe=m.div`
  display: flex;
  flex-direction: column;
`,me=m.span`
  font-size: 14px;
`,fe=m.div`
  color: ${l.GRAY7};
  font-size: 12px;
  margin-top: 4px;
`,be=m.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,we=m.div`
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
`,ye=m.h2`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 16px;
  color: ${l.white};
`,y="impression_count",_="followers",je=()=>{const[t,p]=b.useState(y),[w,T]=b.useState([]),[E,C]=b.useState([]),[f,v]=b.useState(null),[B,S]=b.useState(!0),[R,I]=b.useState(""),{tweetId:N}=V();if(b.useEffect(()=>{(async()=>{try{if(!N)return;S(!0);const c=await Z(N,["Tweet","User"],["HAS_REPLY>","HAS_QUOTE>","THREAD_NEXT>","<POSTED"],t,!0,10,800),d=c.nodes.find(u=>u.ref_id===N);if(d&&v(d),t===y){const j=[...c.nodes.filter(a=>{var r,s;return a.node_type==="Tweet"&&((r=a.properties)==null?void 0:r.author)!==((s=d==null?void 0:d.properties)==null?void 0:s.author)}).map(a=>{var s,n;const r=c.nodes.find(o=>{var h,g;return o.node_type==="User"&&((h=o.properties)==null?void 0:h.author_id)===((g=a.properties)==null?void 0:g.author)});return r?{...a,properties:{...a.properties,twitter_handle:(s=r.properties)==null?void 0:s.twitter_handle,image_url:(n=r.properties)==null?void 0:n.image_url}}:a})].sort((a,r)=>{var o,h;const s=Number((o=a.properties)==null?void 0:o.impression_count)||0;return(Number((h=r.properties)==null?void 0:h.impression_count)||0)-s}).slice(0,20);j&&T(j)}if(t===_){const u=c.nodes.filter(r=>{var s,n;return r.node_type==="User"&&((s=r.properties)==null?void 0:s.author_id)!==((n=d==null?void 0:d.properties)==null?void 0:n.author)}).sort((r,s)=>{var n,o;return Number((n=s.properties)==null?void 0:n.followers)-Number((o=r.properties)==null?void 0:o.followers)}).slice(0,20),a=u.map(r=>{const s=c.edges.find(o=>o.edge_type==="POSTED"&&o.source===r.ref_id),n=c.edges.find(o=>o.edge_type==="POSTED"&&o.target===r.ref_id);return s?s.target:n?n.source:null}).map((r,s)=>{var A,$,F,k,z,G;if(!r)return null;const n=(($=(A=u[s])==null?void 0:A.properties)==null?void 0:$.followers)||0,o=((k=(F=u[s])==null?void 0:F.properties)==null?void 0:k.twitter_handle)||"",h=((G=(z=u[s])==null?void 0:z.properties)==null?void 0:G.image_url)||"",g=c.nodes.find(W=>W.ref_id===r);return{...g,properties:{...(g==null?void 0:g.properties)||{},followers:n,twitter_handle:o,image_url:h}}}).filter(r=>r!==null);a&&C(a)}}catch(c){console.error("Error fetching tweets:",c),I("Failed to load engagement data")}finally{S(!1)}})()},[N,t]),B)return e.jsxs(U,{align:"center",grow:1,justify:"center",children:[e.jsx(re,{color:l.white}),e.jsx("div",{style:{padding:24,fontSize:16,textAlign:"center",color:l.white},children:"Loading engagement data..."})]});if(R)return e.jsx("div",{style:{padding:24,color:"#FF4D4F"},children:R});if(!w.length&&!E.length)return e.jsx("div",{style:{padding:24,textAlign:"center"},children:"No engagement data available"});const O=t===y?w:E;return e.jsxs(he,{children:[e.jsxs(U,{p:24,children:[e.jsx(ye,{children:"Engagement Report"}),e.jsxs(U,{direction:"row",children:[e.jsx(L,{active:t===y,onClick:()=>p(y),children:"Total Engagement"}),e.jsx(L,{active:t===_,onClick:()=>p(_),children:"Follower Count"})]})]}),e.jsx(ue,{component:se,children:e.jsxs(oe,{"aria-label":"a dense table",size:"small",sx:{minWidth:650},children:[e.jsx(ne,{children:e.jsxs(P,{children:[e.jsx(x,{align:"left",children:"Rank"}),e.jsx(x,{align:"left",children:"User Profile"}),e.jsx(x,{align:"left",children:"Tweet"}),t===y&&e.jsx(x,{align:"left",children:"Engagement"}),t===_&&e.jsx(x,{align:"left",children:"Followers"})]})}),e.jsx(ie,{children:O.map((i,c)=>{var u,j,a,r,s,n,o,h,g;const d=(Number((u=i.properties)==null?void 0:u.impression_count)/Number(((j=f==null?void 0:f.properties)==null?void 0:j.impression_count)||1)*100).toFixed(2);return e.jsxs(P,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[e.jsx(x,{children:c+1}),e.jsxs(x,{children:[e.jsx(ge,{imageUrl:(a=i.properties)==null?void 0:a.image_url}),e.jsx(xe,{children:((r=i==null?void 0:i.properties)==null?void 0:r.twitter_handle)&&e.jsx(me,{children:i.properties.twitter_handle})})]}),e.jsxs(x,{children:[((s=i.properties)==null?void 0:s.text)||"",((n=i==null?void 0:i.properties)==null?void 0:n.date)&&e.jsx(fe,{children:K.unix(i.properties.date).fromNow()})]}),t===y&&e.jsxs(x,{children:[d," %",((o=f==null?void 0:f.properties)==null?void 0:o.impression_count)!==void 0&&((h=i.properties)==null?void 0:h.impression_count)&&e.jsx(be,{children:e.jsx(we,{percentage:Number(d)})})]}),t===_&&e.jsx(x,{align:"right",children:Number((g=i.properties)==null?void 0:g.followers).toLocaleString()})]},i.ref_id)})})]})})]})},ve=()=>{const{close:t,visible:p}=ee("tweetAnalyze"),w=()=>{t()};return e.jsx(te,{"data-testid":"tweet-analyze-modal",id:"tweetAnalyze",kind:"full",noWrap:!0,onClose:w,preventOutsideClose:!0,children:p&&e.jsx(je,{})})};export{ve as TweetAnalyze};
