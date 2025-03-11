import{L as A,M as G,N as z,r as l,U as S,J as k,O as R,j as e,V as B,X as M,s as t,g as o,F as N,q as P,x as U,D as Y,y as F,b7 as H}from"./index-73e2b65b.js";import{w as D}from"./index-95005c71.js";import{M as L,b as O,a as C,T as a,c as W}from"./TableRow-6d961e48.js";function I(s){return A("MuiTableContainer",s)}G("MuiTableContainer",["root"]);const X=["className","component"],V=s=>{const{classes:i}=s;return M({root:["root"]},I,i)},q=z("div",{name:"MuiTableContainer",slot:"Root",overridesResolver:(s,i)=>i.root})({width:"100%",overflowX:"auto"}),J=l.forwardRef(function(i,d){const p=S({props:i,name:"MuiTableContainer"}),{className:n,component:g="div"}=p,b=k(p,X),h=R({},p,{component:g}),m=V(h);return e.jsx(q,R({ref:d,as:g,className:B(m.root,n),ownerState:h},b))}),Q=J,K=t(N)`
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
`,Z=t.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
  background-color: ${o.BG1};
  border-bottom: 1px solid ${o.divider3};
  border-radius: 12px 12px 0 0;
`,ee=t.h1`
  color: ${o.white};
  font-size: 25px;
  font-weight: 600;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 4px;
`,oe=t.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 24px;
  background-color: ${o.BG1};
  border-bottom: 1px solid ${o.divider3};
  > div {
    display: flex;
    align-items: center;
    gap: 8px;
  }
`,se=t.span`
  color: ${o.GRAY7};
  font-size: 14px;
`;t.button`
  background: ${({active:s})=>s?o.primaryBlue:"transparent"};
  border: 1px solid ${({active:s})=>s?o.primaryGreen:o.GRAY9};
  color: ${({active:s})=>s?o.white:o.GRAY6};
  padding: 6px 12px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 6px;
  &:hover {
    border-color: ${({active:s})=>s?o.primaryGreen:o.GRAY6};
  }
`;t.div`
  flex: 1;
  overflow-y: auto;
  padding: 0 24px;
`;const re=t.div`
  display: grid;
  grid-template-columns: 60px 1fr 3fr 1fr;
  gap: 16px;
  padding: 16px 0;
  border-bottom: 1px solid ${o.divider3};
  align-items: center;
  transition: background-color 0.2s;
  &:hover {
    background-color: ${o.MESSAGE_BG_HOVER};
  }
`;t(re)`
  color: ${o.GRAY7};
  font-size: 13px;
  font-weight: 600;
  text-transform: uppercase;
  border-bottom: 1px solid ${o.divider3};
  padding: 12px 0;
`;const te=t.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: ${o.BG1};
  ${({$imageUrl:s})=>s&&`background-image: url(${s});`}
  background-size: cover;
`,ne=t.div`
  display: flex;
  flex-direction: column;
`,ie=t.span`
  font-size: 14px;
`,ae=t.span`
  color: ${o.GRAY7};
  font-size: 12px;
`;t.div`
  font-size: 14px;
  color: ${o.white};
  max-width: 400px;
`;const le=t.div`
  color: ${o.GRAY7};
  font-size: 12px;
  margin-top: 4px;
`,de=t.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,ce=t.div`
  width: 100px;
  height: 4px;
  background-color: ${o.BG1};
  border-radius: 2px;
  position: relative;
  &::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: ${s=>s.percentage}%;
    background-color: ${o.primaryGreen};
    border-radius: 2px;
  }
`,pe=()=>{const[s,i]=l.useState("engagement"),[d,p]=l.useState([]),[n,g]=l.useState(null),[b,h]=l.useState(!0),[m,_]=l.useState(""),{tweetId:u}=P();return l.useEffect(()=>{(async()=>{try{if(!u)return;const c=await Y(u,["Tweet"],["HAS_REPLY>","HAS_QUOTE>","RETWEETED_BY>","THREAD_NEXT>","<POSTED"],!0,10,20),x=c.nodes.find(f=>f.ref_id===u);x&&g(x),p(c.nodes)}catch(c){console.error("Error fetching tweets:",c),_("Failed to load engagement data")}finally{h(!1)}})()},[u]),console.log(n),e.jsxs(K,{children:[e.jsx(Z,{children:e.jsx(ee,{children:"Engagement Report"})}),e.jsxs(oe,{children:[e.jsxs(se,{children:["Showing top ",d.length," tweets by ",s==="engagement"?"engagement":"followers"]}),!1]}),(()=>b?e.jsx("div",{style:{padding:24,textAlign:"center"},children:"Loading engagement data..."}):m?e.jsx("div",{style:{padding:24,color:"#FF4D4F"},children:m}):d.length?e.jsx(Q,{component:D,children:e.jsxs(L,{"aria-label":"a dense table",size:"small",sx:{minWidth:650},children:[e.jsx(O,{children:e.jsxs(C,{children:[e.jsx(a,{align:"left",children:"Rank"}),e.jsx(a,{align:"left",children:"User Profile"}),e.jsx(a,{align:"left",children:"Tweet"}),e.jsx(a,{align:"left",children:"% of Total Engagement"})]})}),e.jsx(W,{children:d.map((r,c)=>{var f,y,j,v,T,w,$,E;const x=(Number((f=r.properties)==null?void 0:f.impression_count)/Number(((y=n==null?void 0:n.properties)==null?void 0:y.impression_count)||1)*100).toFixed(1);return e.jsxs(C,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[e.jsx(a,{children:c+1}),e.jsxs(a,{children:[e.jsx(te,{$imageUrl:r.image_url}),e.jsxs(ne,{children:[((j=r==null?void 0:r.properties)==null?void 0:j.twitter_handle)&&e.jsx(ie,{children:r.properties.twitter_handle}),((v=r==null?void 0:r.properties)==null?void 0:v.followers)&&e.jsx(ae,{children:r.properties.followers})]})]}),e.jsxs(a,{children:[((T=r.properties)==null?void 0:T.text)||"",((w=r==null?void 0:r.properties)==null?void 0:w.date)&&e.jsx(le,{children:U.unix(r.properties.date).fromNow()})]}),e.jsxs(a,{children:[x," %",(($=n==null?void 0:n.properties)==null?void 0:$.impression_count)!==void 0&&((E=r.properties)==null?void 0:E.impression_count)&&e.jsx(de,{children:e.jsx(ce,{percentage:Number(x)})})]})]},r.ref_id)})})]})}):e.jsx("div",{style:{padding:24,textAlign:"center"},children:"No engagement data available"}))()]})},me=()=>{const{close:s}=F("tweetAnalyze"),i=()=>{s()};return e.jsx(H,{"data-testid":"tweet-analyze-modal",id:"tweetAnalyze",kind:"large",noWrap:!0,onClose:i,preventOutsideClose:!0,children:e.jsx(pe,{})})};export{me as TweetAnalyze};
