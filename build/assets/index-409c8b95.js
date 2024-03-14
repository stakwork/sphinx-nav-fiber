import{k as I,n as N,o as W,p as H,q,s as f,j as o,r,c as y,F as g,m as U,T as E,_ as k,u as X,g as Y}from"./index-b71c035e.js";import{V as z,E as J,H as K,B as C,u as T,C as Q,J as Z,I as A,L as ee,a as V,b,c as te,v as oe,A as se,P as ae,d as ne,G as ie,S as re,f as ce,Q as le,w as de,l as xe,x as pe,y as ue,F as he,z as fe}from"./react-toastify.esm-657845dc.js";const j=[...S("Topic",20),{name:"bitcoin",edge_count:0,node_type:"Topic",ref_id:"b30aeba5-54a8-4227-8f05-79798a721996"},{name:"bitcoin",edge_count:0,node_type:"Topic",ref_id:"fc3a46e2-28ec-4a5f-9836-8308ef515005"},...S("Organization",20),...S("People",2)];[...R(j.filter(e=>e.node_type==="Topic"),j.filter(e=>e.node_type==="Organization")),...R(j.filter(e=>e.node_type==="Topic"),j.filter(e=>e.node_type==="People"))];function S(e,a){const t=[];for(let s=0;s<a;s+=1){const n=e,x={edge_count:Math.floor(Math.random()*10),node_type:n,name:`${n} name ${s}`,ref_id:`ref_id_${n}_${s}`};t.push(x)}return t}function R(e,a){const t=[];for(let s=0;s<a.length;s+=1){const n={attributes:{decision_type:"ML"},edge_type:"RELATED_TO",source:e[s].ref_id,target:a[s].ref_id};t.push(n)}return t}function ye(e,a,t,s){return e.map(x=>{const h=t.radius-t.radius*(x.edge_count||0)/a,i=Math.random()*Math.PI*2;return{...x,x:t.x+h*Math.cos(i),y:s,z:t.z+h*Math.sin(i)}})}const me=300,ge=(e,a)=>{const t=e.reduce((i,d)=>(i[d.node_type]?i[d.node_type].push(d):i[d.node_type]=[d],i),{}),s=Object.keys(t);console.log(s);const n={x:0,y:0,z:0,radius:1e3},x=s.reduce((i,d,l)=>{const p=l%2===0?l/2:-Math.ceil(l/2),_=Math.max(...t[d].map(c=>c.edge_count||0)),m=ye(t[d],_,n,p*me);return[...i,...m]},[]),h=a.map(i=>{const d=x.find(m=>m.ref_id===i.source),l=x.find(m=>m.ref_id===i.target),p=new z((d==null?void 0:d.x)||0,(d==null?void 0:d.y)||0,(d==null?void 0:d.z)||0),_=new z((l==null?void 0:l.x)||0,(l==null?void 0:l.y)||0,(l==null?void 0:l.z)||0);return{edge_type:i.edge_type,attributes:i.attributes,source:i.source,target:i.target,sourcePosition:p,targetPosition:_}});return{nodes:x,links:h}},v={links:[],nodes:[]},ke=async(e,a,t)=>{try{return be(e,a,t)}catch{return console.log(v),v}},_e=async(e,a)=>{if(new URLSearchParams({...I||N?{free:"true"}:{},...a}).toString(),!a.word)try{return await W.get("/prediction/graph/search?top_node_count=5&limit=10")}catch(t){return console.error(t),null}return null},be=async(e,a,t)=>{try{const n=await _e(a,t);if(console.log(n),n)return je(n,e)}catch(s){return console.error(s),v}},je=(e,a)=>{let{edges:t,nodes:s}=e;return console.log(a),ge(s,t)},Se={data:null,selectionGraphData:{nodes:[],links:[]},disableCameraRotation:!1,graphRadius:H?1600:3056,graphStyle:localStorage.getItem("graphStyle")||"sphere",hoveredNode:null,selectedNode:null,cameraFocusTrigger:!1,selectedNodeRelativeIds:[],nearbyNodeIds:[],showSelectionGraph:!1,nodesNormalized:{},isFetching:!1},M=q()(J((e,a)=>({...Se,fetchData:async(t,s)=>{if(a().isFetching)return;e({isFetching:!0});const n=await ke(a().graphStyle,t,s??{}),x={};n==null||n.nodes.forEach(h=>{const i=h.ref_id;i&&(x[i]=h)}),s!=null&&s.word&&await K(),e({data:n,nodesNormalized:x,isFetching:!1,disableCameraRotation:!1,nearbyNodeIds:[],selectedNodeRelativeIds:[],showSelectionGraph:!1})},setIsFetching:t=>e({isFetching:t}),setData:t=>e({data:t}),setSelectionData:t=>e({selectionGraphData:t}),setDisableCameraRotation:t=>e({disableCameraRotation:t}),setGraphRadius:t=>e({graphRadius:t}),setGraphStyle:t=>e({graphStyle:t}),setHoveredNode:t=>e({hoveredNode:t}),setSelectedNode:t=>{const s=a().selectedNode;if((s==null?void 0:s.ref_id)!==(t==null?void 0:t.ref_id)){const{data:n}=a();console.log(n);const x=[];t!=null&&t.ref_id&&(n==null||n.links.forEach(h=>{console.log(h.target),h.target===(t==null?void 0:t.ref_id)&&x.push(h.source),h.source===(t==null?void 0:t.ref_id)&&x.push(h.target)})),e({hoveredNode:null,selectedNode:t,disableCameraRotation:!0,selectedNodeRelativeIds:x})}},setCameraFocusTrigger:t=>e({cameraFocusTrigger:t}),setNearbyNodeIds:t=>{const s=a().nearbyNodeIds;(t.length!==s.length||t[0]!==s[0])&&e({nearbyNodeIds:t})},setShowSelectionGraph:t=>e({showSelectionGraph:t}),addNewNode:t=>{const{data:s}=a();if(!s)return;const n={...s,nodes:[t,...s.nodes]};e({data:n})},addNewLink:t=>{const{data:s}=a();if(!s)return;const n=s.nodes.map(i=>i.ref_id===t.source||i.ref_id===t.target?{...i,edge_count:(i.edge_count||0)+1}:i),h={links:[...s.links,t],nodes:n};e({data:h})}}))),bt=()=>M(e=>e.selectedNode),we=()=>{const[e,a]=T(t=>[t.cameraFocusTrigger,t.setCameraFocusTrigger]);return o.jsx(Ee,{href:"",onClick:()=>a(!e),size:"medium",startIcon:o.jsx(Q,{})})},Ee=f(C)`
  && {
    padding: 0;
    width: 32px;
    min-width: auto;
    justify-content: center;
    align-items: center;
    pointer-events: all;

    .MuiButton-startIcon {
      margin-left: 0;
      filter: brightness(0.65);
    }
  }
`,ve="4.8.0",Te={g:"LottieFiles AE 1.1.0",a:"",k:"",d:"",tc:""},De=29.9700012207031,Pe=0,ze=120.0000048877,Re=1024,Ie=1024,Ce="Pause_loop_Final",Ae=0,Ve=[],Me=[{ddd:0,ind:1,ty:4,nm:"Right Fill",sr:1,ks:{o:{a:0,k:100,ix:11},r:{a:0,k:0,ix:10},p:{a:0,k:[635.5,753,0],ix:2},a:{a:0,k:[-124,241,0],ix:1},s:{a:0,k:[100,100,100],ix:6}},ao:0,hasMask:!0,masksProperties:[{inv:!1,mode:"a",pt:{a:0,k:{i:[[0,0],[0,0],[0,0],[0,0],[-33.931,0],[0,0],[0,33.966],[0,0]],o:[[0,0],[0,0],[0,0],[0,33.931],[0,0],[33.965,0],[0,0],[0,0]],v:[[-61,-241],[-187,-241],[-187,-241],[-187,179.562],[-125.562,241],[-122.5,241],[-61,179.5],[-61,-241]],c:!0},ix:1},o:{a:0,k:100,ix:3},x:{a:0,k:0,ix:4},nm:"Mask 1"}],shapes:[{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:0,k:{i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[63,-241],[63,241],[-63,241],[-63,-241]],c:!0},ix:2},nm:"Path 1",mn:"ADBE Vector Shape - Group",hd:!1},{ty:"st",c:{a:0,k:[.929412004059,.454901990704,.454901990704,1],ix:3},o:{a:0,k:100,ix:4},w:{a:0,k:0,ix:5},lc:1,lj:1,ml:4,bm:0,nm:"Stroke 1",mn:"ADBE Vector Graphic - Stroke",hd:!1},{ty:"fl",c:{a:0,k:[.639215686275,.756862745098,1,1],ix:4},o:{a:0,k:100,ix:5},r:1,bm:0,nm:"Fill 1",mn:"ADBE Vector Graphic - Fill",hd:!1},{ty:"tr",p:{a:0,k:[-123,241],ix:2},a:{a:0,k:[1,241],ix:1},s:{a:1,k:[{i:{x:[.667,.667],y:[1,1]},o:{x:[.167,.167],y:[0,.167]},t:1,s:[100,0]},{i:{x:[.667,.667],y:[1,1]},o:{x:[.167,.167],y:[0,.167]},t:8,s:[100,40]},{i:{x:[.667,.667],y:[1,1]},o:{x:[.167,.167],y:[0,.167]},t:20,s:[100,10]},{i:{x:[.667,.667],y:[1,1]},o:{x:[.167,.167],y:[0,.167]},t:25,s:[100,70]},{i:{x:[.667,.667],y:[1,1]},o:{x:[.167,.167],y:[0,.167]},t:37,s:[100,20]},{i:{x:[.667,.667],y:[1,1]},o:{x:[.167,.167],y:[0,.167]},t:42,s:[100,30]},{i:{x:[.667,.667],y:[1,1]},o:{x:[.167,.167],y:[0,.167]},t:47,s:[100,15]},{i:{x:[.667,.667],y:[1,1]},o:{x:[.167,.167],y:[0,.167]},t:60,s:[100,85]},{i:{x:[.667,.667],y:[1,1]},o:{x:[.167,.167],y:[0,.167]},t:65,s:[100,30]},{i:{x:[.667,.667],y:[1,1]},o:{x:[.167,.167],y:[0,.167]},t:70,s:[100,50]},{i:{x:[.667,.667],y:[1,1]},o:{x:[.167,.167],y:[0,0]},t:80,s:[100,0]},{i:{x:[.667,.667],y:[1,1]},o:{x:[.167,.167],y:[0,.167]},t:90,s:[100,0]},{i:{x:[.667,.667],y:[1,1]},o:{x:[.167,.167],y:[0,.167]},t:100,s:[100,48]},{i:{x:[.667,.667],y:[1,1]},o:{x:[.167,.167],y:[0,.167]},t:105,s:[100,71]},{i:{x:[.667,.667],y:[1,1]},o:{x:[.167,.167],y:[0,.167]},t:110,s:[100,23]},{i:{x:[.667,.667],y:[1,1]},o:{x:[.167,.167],y:[0,.167]},t:115,s:[100,38]},{t:119.000004846969,s:[100,0]}],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Rectangle 1",np:3,cix:2,bm:0,ix:1,mn:"ADBE Vector Group",hd:!1}],ip:0,op:120.0000048877,st:0,bm:0},{ddd:0,ind:2,ty:4,nm:"Right",sr:1,ks:{o:{a:0,k:100,ix:11},r:{a:0,k:0,ix:10},p:{a:0,k:[635.5,512,0],ix:2},a:{a:0,k:[-124,0,0],ix:1},s:{a:0,k:[100,100,100],ix:6}},ao:0,shapes:[{ty:"gr",it:[{ty:"rc",d:1,s:{a:0,k:[126,482],ix:2},p:{a:0,k:[0,0],ix:3},r:{a:0,k:522,ix:4},nm:"Rectangle Path 1",mn:"ADBE Vector Shape - Rect",hd:!1},{ty:"st",c:{a:0,k:[.929412004059,.454901990704,.454901990704,1],ix:3},o:{a:0,k:100,ix:4},w:{a:0,k:0,ix:5},lc:1,lj:1,ml:4,bm:0,nm:"Stroke 1",mn:"ADBE Vector Graphic - Stroke",hd:!1},{ty:"fl",c:{a:0,k:[1,1,1,1],ix:4},o:{a:0,k:100,ix:5},r:1,bm:0,nm:"Fill 1",mn:"ADBE Vector Graphic - Fill",hd:!1},{ty:"tr",p:{a:0,k:[-124,0],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Rectangle 1",np:3,cix:2,bm:0,ix:1,mn:"ADBE Vector Group",hd:!1}],ip:0,op:120.0000048877,st:0,bm:0},{ddd:0,ind:3,ty:4,nm:"Left Fill",sr:1,ks:{o:{a:0,k:100,ix:11},r:{a:0,k:0,ix:10},p:{a:0,k:[388,753,0],ix:2},a:{a:0,k:[-124,241,0],ix:1},s:{a:0,k:[100,100,100],ix:6}},ao:0,hasMask:!0,masksProperties:[{inv:!1,mode:"a",pt:{a:0,k:{i:[[0,0],[0,0],[0,0],[0,0],[-33.931,0],[0,0],[0,33.966],[0,0]],o:[[0,0],[0,0],[0,0],[0,33.931],[0,0],[33.965,0],[0,0],[0,0]],v:[[-61,-241],[-187,-241],[-187,-241],[-187,179.562],[-125.562,241],[-122.5,241],[-61,179.5],[-61,-241]],c:!0},ix:1},o:{a:0,k:100,ix:3},x:{a:0,k:0,ix:4},nm:"Mask 1"}],shapes:[{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:0,k:{i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[63,-241],[63,241],[-63,241],[-63,-241]],c:!0},ix:2},nm:"Path 1",mn:"ADBE Vector Shape - Group",hd:!1},{ty:"st",c:{a:0,k:[.929412004059,.454901990704,.454901990704,1],ix:3},o:{a:0,k:100,ix:4},w:{a:0,k:0,ix:5},lc:1,lj:1,ml:4,bm:0,nm:"Stroke 1",mn:"ADBE Vector Graphic - Stroke",hd:!1},{ty:"fl",c:{a:0,k:[.639215686275,.756862745098,1,1],ix:4},o:{a:0,k:100,ix:5},r:1,bm:0,nm:"Fill 1",mn:"ADBE Vector Graphic - Fill",hd:!1},{ty:"tr",p:{a:0,k:[-123,241],ix:2},a:{a:0,k:[1,241],ix:1},s:{a:1,k:[{i:{x:[.667,.667],y:[1,1]},o:{x:[.167,.167],y:[0,.167]},t:1,s:[100,0]},{i:{x:[.667,.667],y:[1,1]},o:{x:[.167,.167],y:[0,.167]},t:8,s:[100,40]},{i:{x:[.667,.667],y:[1,1]},o:{x:[.167,.167],y:[0,.167]},t:20,s:[100,10]},{i:{x:[.667,.667],y:[1,1]},o:{x:[.167,.167],y:[0,.167]},t:25,s:[100,70]},{i:{x:[.667,.667],y:[1,1]},o:{x:[.167,.167],y:[0,.167]},t:37,s:[100,20]},{i:{x:[.667,.667],y:[1,1]},o:{x:[.167,.167],y:[0,.167]},t:42,s:[100,30]},{i:{x:[.667,.667],y:[1,1]},o:{x:[.167,.167],y:[0,.167]},t:47,s:[100,15]},{i:{x:[.667,.667],y:[1,1]},o:{x:[.167,.167],y:[0,.167]},t:60,s:[100,85]},{i:{x:[.667,.667],y:[1,1]},o:{x:[.167,.167],y:[0,.167]},t:65,s:[100,30]},{i:{x:[.667,.667],y:[1,1]},o:{x:[.167,.167],y:[0,.167]},t:70,s:[100,50]},{i:{x:[.667,.667],y:[1,1]},o:{x:[.167,.167],y:[0,0]},t:80,s:[100,0]},{i:{x:[.667,.667],y:[1,1]},o:{x:[.167,.167],y:[0,.167]},t:90,s:[100,0]},{i:{x:[.667,.667],y:[1,1]},o:{x:[.167,.167],y:[0,.167]},t:100,s:[100,48]},{i:{x:[.667,.667],y:[1,1]},o:{x:[.167,.167],y:[0,.167]},t:105,s:[100,71]},{i:{x:[.667,.667],y:[1,1]},o:{x:[.167,.167],y:[0,.167]},t:110,s:[100,23]},{i:{x:[.667,.667],y:[1,1]},o:{x:[.167,.167],y:[0,.167]},t:115,s:[100,38]},{t:119.000004846969,s:[100,0]}],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Rectangle 1",np:3,cix:2,bm:0,ix:1,mn:"ADBE Vector Group",hd:!1}],ip:0,op:120.0000048877,st:0,bm:0},{ddd:0,ind:4,ty:4,nm:"Left ",sr:1,ks:{o:{a:0,k:100,ix:11},r:{a:0,k:0,ix:10},p:{a:0,k:[388,512,0],ix:2},a:{a:0,k:[-124,0,0],ix:1},s:{a:0,k:[100,100,100],ix:6}},ao:0,shapes:[{ty:"gr",it:[{ty:"rc",d:1,s:{a:0,k:[126,482],ix:2},p:{a:0,k:[0,0],ix:3},r:{a:0,k:522,ix:4},nm:"Rectangle Path 1",mn:"ADBE Vector Shape - Rect",hd:!1},{ty:"st",c:{a:0,k:[.929412004059,.454901990704,.454901990704,1],ix:3},o:{a:0,k:100,ix:4},w:{a:0,k:0,ix:5},lc:1,lj:1,ml:4,bm:0,nm:"Stroke 1",mn:"ADBE Vector Graphic - Stroke",hd:!1},{ty:"fl",c:{a:0,k:[1,1,1,1],ix:4},o:{a:0,k:100,ix:5},r:1,bm:0,nm:"Fill 1",mn:"ADBE Vector Graphic - Fill",hd:!1},{ty:"tr",p:{a:0,k:[-124,0],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Rectangle 1",np:3,cix:2,bm:0,ix:1,mn:"ADBE Vector Group",hd:!1}],ip:0,op:120.0000048877,st:0,bm:0}],Ge=[],Be={v:ve,meta:Te,fr:De,ip:Pe,op:ze,w:Re,h:Ie,nm:Ce,ddd:Ae,assets:Ve,layers:Me,markers:Ge},Fe=()=>{const e=r.useRef(null);return r.useEffect(()=>{const a=document.getElementById("lottie-equalizer");return a&&(e.current=Z.loadAnimation({container:a,animationData:Be,loop:!0,autoplay:!0})),()=>{e.current&&e.current.destroy()}},[]),o.jsx("div",{id:"lottie-equalizer",style:{width:"40px",height:"40px"}})},Le=()=>{const e=r.useRef(null),[a,t]=r.useState(0),s=V(),n=T(u=>u.setSelectedNode),[x,h]=b(u=>[u.sidebarIsOpen,u.setSidebarOpen]),[i,d,l,p,_,m]=te(u=>[u.isPlaying,u.setIsPlaying,u.playingTime,u.playingNode,u.miniPlayerIsVisible,u.setMiniPlayerIsVisible]),[c,G]=p!=null&&p.timestamp?p.timestamp.split("-").map(u=>oe(u)):[0,0],B=(l-c)/(G-c)*100;r.useEffect(()=>{var D,P;const u=((D=e.current)==null?void 0:D.offsetWidth)||0,$=((P=e.current)==null?void 0:P.scrollWidth)||0;t($-u)},[]);const F=u=>{m(!1),u.stopPropagation()},L=()=>{n(p),h(!0)},O=x&&(s==null?void 0:s.ref_id)!==(p==null?void 0:p.ref_id)||p&&!x;return _&&p&&O?o.jsxs(Oe,{onClick:L,children:[o.jsxs($e,{children:[o.jsx(se,{src:p.image_url||"",type:p.node_type}),o.jsxs(Ne,{children:[o.jsxs(Xe,{ref:e,children:[o.jsx(Ue,{className:"title",scrollValue:a,children:p.episode_title}),o.jsx("div",{className:"subtitle",children:p.show_title})]}),o.jsx(He,{onClick:u=>{d(!i),u.stopPropagation()},size:"small",children:i?o.jsx(Fe,{}):o.jsx(ae,{})})]}),o.jsx(We,{onClick:u=>F(u),children:o.jsx(ne,{})})]}),o.jsx(qe,{value:B,variant:"determinate"})]}):null},Oe=f(g).attrs({direction:"column",align:"stretch",justify:"space-between"})`
  padding: 8px;
  background: ${y.BG1};
  border-radius: 6px;
  width: 320px;
  height: 72px;
  margin-top: 16px;
  cursor: pointer;
  z-index: 0;
`,$e=f(g).attrs({direction:"row",align:"center",justify:"flex-start"})``,Ne=f(g).attrs({direction:"row",align:"center",justify:"space-between"})`
  flex: 1;
  color: ${y.white};
  margin-left: 11px;

  .title {
    font-size: 13px;
    margin-bottom: 2px;
    font-weight: 500;
  }

  .subtitle {
    font-size: 11px;
    color: ${y.GRAY6};
  }
`,We=f(A)`
  padding: 8px;
  color: ${y.GRAY6};
  z-index: 100000;
`,He=f(A)`
  && {
    font-size: 36px;
    padding: 2px;
    margin-left: 8px;
    overflow: hidden;
    z-index: 100000;
  }
`,qe=f(ee)`
  && {
    flex-shrink: 0;
    height: 2px;
    background-color: ${y.white};
    color: blue;

    .MuiLinearProgress-bar {
      background: rgb(65, 90, 127);
    }
  }
`,Ue=f.div`
  white-space: nowrap;
  overflow: hidden;
  width: max-content;
  animation: scrollText 12s linear infinite;

  @keyframes scrollText {
    0%,
    15% {
      transform: translateX(0);
    }

    60%,
    75% {
      transform: translateX(${e=>-e.scrollValue}px);
    }

    100% {
      transform: translateX(0);
    }
  }
  color: #fff;
`,Xe=f(g)`
  overflow: hidden;
  flex: 1;
`,Ye=()=>{const e=V(),a=T(t=>t.isFetching);return o.jsxs(Je,{align:"flex-end",id:"actions-toolbar",children:[!a&&o.jsx(we,{}),!a&&o.jsx(ie,{}),o.jsx(Le,{},e==null?void 0:e.ref_id)]})},Je=f(g)`
  position: absolute;
  right: 20px;
  bottom: 20px;
  pointer-events: all;
`,Ke=()=>{const e=b(a=>a.appMetaData);return o.jsxs(Qe,{children:[o.jsxs(Ze,{children:[o.jsx(o.Fragment,{children:e.title&&o.jsx(E,{className:"title",color:"white",children:e.title})}),o.jsx(E,{className:"subtitle",children:" Second Brain"})]}),o.jsx(re,{})]})},Qe=f(g).attrs({align:"center",direction:"row",grow:1,justify:"flex-start"})`
  height: 64px;
  position: absolute;
  top: 0px;
  left: 64px;
  right: 32px;
  transition: opacity 1s;
  z-index: 99;
  padding: 20px 23px;
`,Ze=f.div`
  ${U.smallOnly`
    display: none;
  `}

  width: 367px;

  .title {
    color: var(--Primary-Text, #fff);
    font-family: Barlow;
    font-size: 22px;
    font-style: normal;
    font-weight: 700;
    line-height: 16px; /* 72.727% */
    letter-spacing: 0.22px;
  }

  .subtitle {
    color: ${y.GRAY6};
    font-family: Barlow;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0.22px;
  }
`,et=()=>{const[e,a]=r.useState(!0),t=ce();r.useEffect(()=>{a(!0)},[t]);const s=()=>{a(!1)};return t&&e?o.jsxs(tt,{align:"center",direction:"column",justify:"center",onClick:s,children:[o.jsx("img",{alt:"screen",src:"jamboard_kiosk.png"}),o.jsxs(g,{align:"center",direction:"column",justify:"center",children:[o.jsx(w,{children:"Second Brain is currently"}),o.jsx(w,{style:{fontWeight:600},children:"optimized for Desktop."}),o.jsx(w,{children:"Mobile support coming soon."})]}),o.jsx(C,{color:"secondary",onClick:s,variant:"contained",children:"Got It"})]}):null},tt=f(g)`
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.75);
  gap: 28px;
  z-index: 2000000000;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`,w=f(E)`
  color: #fff;
  text-align: center;
  font-family: Barlow;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  margin: 1px;
`,ot={},st=r.createContext(ot),at=()=>{const[e,a]=r.useState(!1),t=r.useMemo(()=>({isShow:e,setIsShow:a}),[e]);return o.jsx(st.Provider,{value:t})},nt=r.lazy(()=>k(()=>import("./index-e1d5687d.js"),["assets/index-e1d5687d.js","assets/index-b71c035e.js","assets/index-3f17fe3b.css","assets/index-813b6c7e.js","assets/index-386c76de.js","assets/react-toastify.esm-657845dc.js","assets/react-toastify-b60658ac.css","assets/index-3e761c7f.js","assets/useSlotProps-9100e6af.js","assets/index-5d5ba667.js","assets/index.esm-18eb1b53.js","assets/InfoIcon-1252b44d.js","assets/ClipLoader-ee4274d7.js"]).then(({SettingsModal:e})=>({default:e}))),it=r.lazy(()=>k(()=>import("./index-993c3c60.js"),["assets/index-993c3c60.js","assets/index-b71c035e.js","assets/index-3f17fe3b.css","assets/react-toastify.esm-657845dc.js","assets/react-toastify-b60658ac.css","assets/index-813b6c7e.js","assets/index-386c76de.js","assets/toastMessage-3f86b89b.js","assets/index.esm-18eb1b53.js","assets/CheckIcon-07214158.js","assets/index-5d5ba667.js","assets/InfoIcon-1252b44d.js"]).then(({AddContentModal:e})=>({default:e}))),rt=r.lazy(()=>k(()=>import("./index-87232462.js"),["assets/index-87232462.js","assets/index-b71c035e.js","assets/index-3f17fe3b.css","assets/react-toastify.esm-657845dc.js","assets/react-toastify-b60658ac.css","assets/index-813b6c7e.js","assets/index-386c76de.js","assets/toastMessage-3f86b89b.js","assets/index.esm-18eb1b53.js","assets/CheckIcon-07214158.js","assets/index-5d5ba667.js","assets/InfoIcon-1252b44d.js","assets/index-4f597438.js","assets/index-e7531db3.js","assets/Popover-09221256.js","assets/useSlotProps-9100e6af.js","assets/Select-fcd12d26.js","assets/Stack-557ec453.js","assets/Popper-45cb4076.js"]).then(({AddItemModal:e})=>({default:e}))),ct=r.lazy(()=>k(()=>import("./index-7114f119.js"),["assets/index-7114f119.js","assets/index-b71c035e.js","assets/index-3f17fe3b.css","assets/index-813b6c7e.js","assets/index-386c76de.js","assets/react-toastify.esm-657845dc.js","assets/react-toastify-b60658ac.css","assets/NoFilterResultIcon-caf02b67.js","assets/ChevronUpIcon-e9d18492.js","assets/index-3e761c7f.js","assets/useSlotProps-9100e6af.js","assets/Popover-09221256.js","assets/index.esm-18eb1b53.js","assets/ClipLoader-ee4274d7.js","assets/index-5d5ba667.js","assets/InfoIcon-1252b44d.js","assets/index-cc8a7b0d.js","assets/Popper-45cb4076.js","assets/CheckIcon-07214158.js","assets/SettingsIcon-5c0792db.js"]).then(({SourcesTableModal:e})=>({default:e}))),lt=r.lazy(()=>k(()=>import("./index-5c3b4913.js"),["assets/index-5c3b4913.js","assets/index-b71c035e.js","assets/index-3f17fe3b.css","assets/index-813b6c7e.js","assets/index-386c76de.js","assets/react-toastify.esm-657845dc.js","assets/react-toastify-b60658ac.css","assets/index-cc8a7b0d.js","assets/index-5d5ba667.js","assets/index.esm-18eb1b53.js","assets/InfoIcon-1252b44d.js","assets/Skeleton-c847950f.js","assets/ClipLoader-ee4274d7.js"]).then(({EditNodeNameModal:e})=>({default:e}))),dt=r.lazy(()=>k(()=>import("./index-f9e25842.js"),["assets/index-f9e25842.js","assets/index-b71c035e.js","assets/index-3f17fe3b.css","assets/index-813b6c7e.js","assets/index-386c76de.js","assets/react-toastify.esm-657845dc.js","assets/react-toastify-b60658ac.css","assets/Skeleton-c847950f.js","assets/ClipLoader-ee4274d7.js"]).then(({RemoveNodeModal:e})=>({default:e}))),xt=r.lazy(()=>k(()=>import("./index-813b7418.js"),["assets/index-813b7418.js","assets/index-b71c035e.js","assets/index-3f17fe3b.css","assets/index-813b6c7e.js","assets/index-386c76de.js","assets/react-toastify.esm-657845dc.js","assets/react-toastify-b60658ac.css","assets/index-4f597438.js","assets/index-e7531db3.js","assets/Popover-09221256.js","assets/useSlotProps-9100e6af.js","assets/Select-fcd12d26.js","assets/Stack-557ec453.js","assets/Popper-45cb4076.js","assets/ClipLoader-ee4274d7.js"]).then(({AddNodeEdgeModal:e})=>({default:e}))),pt=()=>o.jsxs(o.Fragment,{children:[o.jsx(rt,{}),o.jsx(it,{}),o.jsx(nt,{}),o.jsx(lt,{}),o.jsx(dt,{}),o.jsx(ct,{}),o.jsx(xt,{})]}),ut=f(le)`
  .Toastify__toast {
    background-color: ${y.body};
  }
  .Toastify__toast-body {
    background-color: ${y.body};
    color: ${y.white};
  }
  .Toastify__close-button {
    color: ${y.white};
  }
  .Toastify__progress-bar--error {
    background-color: ${y.primaryRed};
  }
  .Toastify__progress-bar--success {
    background-color: ${y.primaryGreen};
  }
`,ht=f(g)`
  height: 100%;
  width: 100%;
  background-color: ${y.black};
`,ft=f(g)`
  position: absolute;
  bottom: 8px;
  left: 8px;
  color: ${y.white};
  font-size: 12px;
  opacity: 0.5;
`,yt=r.lazy(()=>k(()=>import("./index-be3d7bf4.js"),["assets/index-be3d7bf4.js","assets/index-b71c035e.js","assets/index-3f17fe3b.css","assets/SourcesTableIcon-010ba15f.js","assets/SettingsIcon-5c0792db.js","assets/index-386c76de.js"]).then(({MainToolbar:e})=>({default:e}))),mt=r.lazy(()=>k(()=>import("./index-05f7ed3d.js"),["assets/index-05f7ed3d.js","assets/index-b71c035e.js","assets/index-3f17fe3b.css","assets/EditIcon-456f8791.js","assets/react-toastify.esm-657845dc.js","assets/react-toastify-b60658ac.css","assets/index.esm-18eb1b53.js","assets/PlusIcon-1750fd6c.js","assets/index-386c76de.js","assets/ClipLoader-ee4274d7.js"]).then(({Universe:e})=>({default:e})));r.lazy(()=>k(()=>import("./index-5e46eb7c.js"),["assets/index-5e46eb7c.js","assets/index-b71c035e.js","assets/index-3f17fe3b.css","assets/react-toastify.esm-657845dc.js","assets/react-toastify-b60658ac.css","assets/SoundIcon-ca77ecc7.js","assets/Select-fcd12d26.js","assets/Popover-09221256.js","assets/useSlotProps-9100e6af.js","assets/ChevronUpIcon-e9d18492.js","assets/generateCategoricalChart-4ef86662.js","assets/InfoIcon-1252b44d.js","assets/CheckIcon-07214158.js","assets/index.esm-18eb1b53.js","assets/toastMessage-3f86b89b.js","assets/SoundIcon-6125620a.css","assets/index-e7531db3.js","assets/Skeleton-c847950f.js","assets/ClipLoader-ee4274d7.js","assets/PlusIcon-1750fd6c.js","assets/index-386c76de.js","assets/index-813b6c7e.js"]).then(({SideBar:e})=>({default:e})));const gt=()=>{const[e,a]=X(c=>[c.setBudget,c.setNodeCount]),[t,s,n,x,h]=[b(c=>c.setSidebarOpen),b(c=>c.currentSearch),b(c=>c.setCurrentSearch),b(c=>c.setRelevanceSelected),b(c=>c.setTranscriptOpen)],[i,d]=M(c=>[c.fetchData,c.setSelectedNode]),l=de(),p=xe({mode:"onChange"});p.handleSubmit(({search:c})=>{h(!1),d(null),x(!1),n(c)});const _=r.useCallback(async()=>{await i(e,{word:s??""}),t(!0),s&&await Y(e)},[i,s,t,e]);r.useEffect(()=>{_()},[s,_]);const m=r.useCallback(()=>{a("INCREMENT")},[a]);return r.useEffect(()=>{l&&(l.on("connect_error",c=>{console.error("Socket connection error:",c)}),l.on("newnode",m))},[l,m]),r.useEffect(()=>()=>{l&&l.disconnect()},[l]),o.jsxs(o.Fragment,{children:[o.jsx(pe,{}),o.jsx(et,{}),o.jsx(ue,{hidden:!I}),o.jsx(r.Suspense,{fallback:o.jsx("div",{children:"Loading..."}),children:o.jsxs(ht,{direction:"row",children:[o.jsxs(he,{...p,children:[o.jsx(yt,{}),!1,o.jsx(mt,{}),o.jsx(Ke,{}),o.jsxs(ft,{children:["v",fe]}),o.jsx(Ye,{})]}),o.jsx(pt,{}),o.jsx(ut,{}),o.jsx(at,{})]})})]})},jt=Object.freeze(Object.defineProperty({__proto__:null,AppNew:gt},Symbol.toStringTag,{value:"Module"}));export{M as a,jt as i,bt as u};
