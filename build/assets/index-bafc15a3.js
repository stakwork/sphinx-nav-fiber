import{R as S,v as E,Y as _,a0 as g,b1 as I}from"./index-1baf07e2.js";const h={[S]:"RSS link",[E]:"Twitter Handle",[_]:"Youtube channel"},L="Sources Table",N="Queued Sources",b="Topics",m="View Content",A="date",y="edge_count",D="alphabetically",f="https://twitter.com",R="IS_ALIAS",O="https://www.twitter.com/anyuser/status/",i={data:null,ids:[],loading:!1,total:0,filters:{is_muted:!1,sortBy:A,page:0,pageSize:50}};let n=null;const U=g((a,c)=>({...i,setTopics:async()=>{a({loading:!0}),n&&n.abort();const t=new AbortController,{signal:T}=t;n=t;const{data:p,ids:d,filters:s}=c(),u=C(s);s.page===0&&a({data:null,ids:[],total:0});try{const e=await I(u,T),r=s.page===0?{}:{...p||{}},l=s.page===0?[]:[...d];e.data.forEach(o=>{r[o.ref_id]=o,l.push(o.ref_id)}),a({data:r,ids:l,total:e.totalCount}),a({loading:!1})}catch(e){console.log(e)}},setFilters:t=>a({filters:{...c().filters,page:0,...t}}),terminate:()=>a(i)})),C=a=>({muted:a.is_muted?"True":"False",skip:String(a.page*a.pageSize),limit:String(a.pageSize),sort_by:a.sortBy,...a.search?{search:a.search}:{node_type:"Topic"}});export{D as A,A as D,y as E,R as I,N as Q,L as S,f as T,m as V,O as a,b,h as s,U as u};