import{f as S,R as g,w as E,Y as _,a0 as I,b1 as m}from"./index-c702fad0.js";import{I as A}from"./react-toastify.esm-3aab803b.js";const f={[g]:"RSS link",[E]:"Twitter Handle",[_]:"Youtube channel"},h="Sources Table",L="Queued Sources",N="Topics",D="View Content",b="date",R="edge_count",B="alphabetically",O="https://twitter.com",U="IS_ALIAS",x="https://www.twitter.com/anyuser/status/",z=S(A)`
  && {
    vertical-align: middle;
    margin: 5px 0 0 4px;
    padding: 4px;
    transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`,l={data:null,ids:[],loading:!1,total:0,filters:{is_muted:!1,sortBy:b,page:0,pageSize:50}};let n=null;const H=I((a,c)=>({...l,setTopics:async()=>{a({loading:!0}),n&&n.abort();const t=new AbortController,{signal:d}=t;n=t;const{data:p,ids:T,filters:s}=c(),u=w(s);s.page===0&&a({data:null,ids:[],total:0});try{const o=await m(u,d),r=s.page===0?{}:{...p||{}},i=s.page===0?[]:[...T];o.data.forEach(e=>{r[e.ref_id]=e,i.push(e.ref_id)}),a({data:r,ids:i,total:o.totalCount}),a({loading:!1})}catch(o){console.log(o)}},setFilters:t=>a({filters:{...c().filters,page:0,...t}}),terminate:()=>a(l)})),w=a=>({muted:a.is_muted?"True":"False",skip:String(a.page*a.pageSize),limit:String(a.pageSize),sort_by:a.sortBy,...a.search?{search:a.search}:{node_type:"Topic"}});export{B as A,b as D,R as E,U as I,L as Q,z as S,O as T,D as V,x as a,N as b,h as c,f as s,H as u};
