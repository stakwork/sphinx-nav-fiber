import{k as I,n as N,o as W,p as q,q as H,s as f,j as o,r,c as y,F as g,m as U,T as E,_ as k,u as X,g as Y}from"./index-acf86df8.js";import{V as z,z as K,D as J,B as C,u as v,C as Q,E as Z,I as A,L as ee,a as V,b,c as te,v as oe,A as se,P as ae,d as ne,G as ie,S as re,f as ce,T as le,s as de,l as xe,t as pe,w as ue,F as he,x as fe}from"./react-toastify.esm-9e975f1c.js";const j=[...S("Topic",20),{name:"bitcoin",edge_count:0,node_type:"Topic",ref_id:"b30aeba5-54a8-4227-8f05-79798a721996"},{name:"bitcoin",edge_count:0,node_type:"Topic",ref_id:"fc3a46e2-28ec-4a5f-9836-8308ef515005"},...S("Organization",20),...S("People",2)];[...R(j.filter(e=>e.node_type==="Topic"),j.filter(e=>e.node_type==="Organization")),...R(j.filter(e=>e.node_type==="Topic"),j.filter(e=>e.node_type==="People"))];function S(e,a){const t=[];for(let s=0;s<a;s+=1){const n=e,x={edge_count:Math.floor(Math.random()*10),node_type:n,name:`${n} name ${s}`,ref_id:`ref_id_${n}_${s}`};t.push(x)}return t}function R(e,a){const t=[];for(let s=0;s<a.length;s+=1){const n={attributes:{decision_type:"ML"},edge_type:"RELATED_TO",source:e[s].ref_id,target:a[s].ref_id};t.push(n)}return t}function ye(e,a,t,s){return e.map(x=>{const h=t.radius-t.radius*(x.edge_count||0)/a,i=Math.random()*Math.PI*2;return{...x,x:t.x+h*Math.cos(i),y:s,z:t.z+h*Math.sin(i)}})}const me=300,ge=(e,a)=>{const t=e.reduce((i,d)=>(i[d.node_type]?i[d.node_type].push(d):i[d.node_type]=[d],i),{}),s=Object.keys(t);console.log(s);const n={x:0,y:0,z:0,radius:1e3},x=s.reduce((i,d,l)=>{const p=l%2===0?l/2:-Math.ceil(l/2),_=Math.max(...t[d].map(c=>c.edge_count||0)),m=ye(t[d],_,n,p*me);return[...i,...m]},[]),h=a.map(i=>{const d=x.find(m=>m.ref_id===i.source),l=x.find(m=>m.ref_id===i.target),p=new z((d==null?void 0:d.x)||0,(d==null?void 0:d.y)||0,(d==null?void 0:d.z)||0),_=new z((l==null?void 0:l.x)||0,(l==null?void 0:l.y)||0,(l==null?void 0:l.z)||0);return{edge_type:i.edge_type,attributes:i.attributes,source:i.source,target:i.target,sourcePosition:p,targetPosition:_}});return{nodes:x,links:h}},T={links:[],nodes:[]},ke=async(e,a,t)=>{try{return be(e,a,t)}catch{return console.log(T),T}},_e=async(e,a)=>{if(new URLSearchParams({...I||N?{free:"true"}:{},...a}).toString(),!a.word)try{return await W.get("/prediction/graph/search?top_node_count=5&limit=10")}catch(t){return console.error(t),null}return null},be=async(e,a,t)=>{try{const n=await _e(a,t);if(console.log(n),n)return je(n,e)}catch(s){return console.error(s),T}},je=(e,a)=>{let{edges:t,nodes:s}=e;return console.log(a),ge(s,t)},Se={data:null,selectionGraphData:{nodes:[],links:[]},disableCameraRotation:!1,graphRadius:q?1600:3056,graphStyle:localStorage.getItem("graphStyle")||"sphere",hoveredNode:null,selectedNode:null,cameraFocusTrigger:!1,selectedNodeRelativeIds:[],nearbyNodeIds:[],showSelectionGraph:!1,nodesNormalized:{},isFetching:!1},M=H()(K((e,a)=>({...Se,fetchData:async(t,s)=>{if(a().isFetching)return;e({isFetching:!0});const n=await ke(a().graphStyle,t,s??{}),x={};n==null||n.nodes.forEach(h=>{const i=h.ref_id;i&&(x[i]=h)}),s!=null&&s.word&&await J(),e({data:n,nodesNormalized:x,isFetching:!1,disableCameraRotation:!1,nearbyNodeIds:[],selectedNodeRelativeIds:[],showSelectionGraph:!1})},setIsFetching:t=>e({isFetching:t}),setData:t=>e({data:t}),setSelectionData:t=>e({selectionGraphData:t}),setDisableCameraRotation:t=>e({disableCameraRotation:t}),setGraphRadius:t=>e({graphRadius:t}),setGraphStyle:t=>e({graphStyle:t}),setHoveredNode:t=>e({hoveredNode:t}),setSelectedNode:t=>{const s=a().selectedNode;if((s==null?void 0:s.ref_id)!==(t==null?void 0:t.ref_id)){const{data:n}=a();console.log(n);const x=[];t!=null&&t.ref_id&&(n==null||n.links.forEach(h=>{console.log(h.target),h.target===(t==null?void 0:t.ref_id)&&x.push(h.source),h.source===(t==null?void 0:t.ref_id)&&x.push(h.target)})),e({hoveredNode:null,selectedNode:t,disableCameraRotation:!0,selectedNodeRelativeIds:x})}},setCameraFocusTrigger:t=>e({cameraFocusTrigger:t}),setNearbyNodeIds:t=>{const s=a().nearbyNodeIds;(t.length!==s.length||t[0]!==s[0])&&e({nearbyNodeIds:t})},setShowSelectionGraph:t=>e({showSelectionGraph:t}),addNewNode:t=>{const{data:s}=a();if(!s)return;const n={...s,nodes:[t,...s.nodes]};e({data:n})},addNewLink:t=>{const{data:s}=a();if(!s)return;const n=s.nodes.map(i=>i.ref_id===t.source||i.ref_id===t.target?{...i,edge_count:(i.edge_count||0)+1}:i),h={links:[...s.links,t],nodes:n};e({data:h})}}))),bt=()=>M(e=>e.selectedNode),we=()=>{const[e,a]=v(t=>[t.cameraFocusTrigger,t.setCameraFocusTrigger]);return o.jsx(Ee,{href:"",onClick:()=>a(!e),size:"medium",startIcon:o.jsx(Q,{})})},Ee=f(C)`
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
`,Te="4.8.0",ve={g:"LottieFiles AE 1.1.0",a:"",k:"",d:"",tc:""},De=29.9700012207031,Pe=0,ze=120.0000048877,Re=1024,Ie=1024,Ce="Pause_loop_Final",Ae=0,Ve=[],Me=[{ddd:0,ind:1,ty:4,nm:"Right Fill",sr:1,ks:{o:{a:0,k:100,ix:11},r:{a:0,k:0,ix:10},p:{a:0,k:[635.5,753,0],ix:2},a:{a:0,k:[-124,241,0],ix:1},s:{a:0,k:[100,100,100],ix:6}},ao:0,hasMask:!0,masksProperties:[{inv:!1,mode:"a",pt:{a:0,k:{i:[[0,0],[0,0],[0,0],[0,0],[-33.931,0],[0,0],[0,33.966],[0,0]],o:[[0,0],[0,0],[0,0],[0,33.931],[0,0],[33.965,0],[0,0],[0,0]],v:[[-61,-241],[-187,-241],[-187,-241],[-187,179.562],[-125.562,241],[-122.5,241],[-61,179.5],[-61,-241]],c:!0},ix:1},o:{a:0,k:100,ix:3},x:{a:0,k:0,ix:4},nm:"Mask 1"}],shapes:[{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:0,k:{i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[63,-241],[63,241],[-63,241],[-63,-241]],c:!0},ix:2},nm:"Path 1",mn:"ADBE Vector Shape - Group",hd:!1},{ty:"st",c:{a:0,k:[.929412004059,.454901990704,.454901990704,1],ix:3},o:{a:0,k:100,ix:4},w:{a:0,k:0,ix:5},lc:1,lj:1,ml:4,bm:0,nm:"Stroke 1",mn:"ADBE Vector Graphic - Stroke",hd:!1},{ty:"fl",c:{a:0,k:[.639215686275,.756862745098,1,1],ix:4},o:{a:0,k:100,ix:5},r:1,bm:0,nm:"Fill 1",mn:"ADBE Vector Graphic - Fill",hd:!1},{ty:"tr",p:{a:0,k:[-123,241],ix:2},a:{a:0,k:[1,241],ix:1},s:{a:1,k:[{i:{x:[.667,.667],y:[1,1]},o:{x:[.167,.167],y:[0,.167]},t:1,s:[100,0]},{i:{x:[.667,.667],y:[1,1]},o:{x:[.167,.167],y:[0,.167]},t:8,s:[100,40]},{i:{x:[.667,.667],y:[1,1]},o:{x:[.167,.167],y:[0,.167]},t:20,s:[100,10]},{i:{x:[.667,.667],y:[1,1]},o:{x:[.167,.167],y:[0,.167]},t:25,s:[100,70]},{i:{x:[.667,.667],y:[1,1]},o:{x:[.167,.167],y:[0,.167]},t:37,s:[100,20]},{i:{x:[.667,.667],y:[1,1]},o:{x:[.167,.167],y:[0,.167]},t:42,s:[100,30]},{i:{x:[.667,.667],y:[1,1]},o:{x:[.167,.167],y:[0,.167]},t:47,s:[100,15]},{i:{x:[.667,.667],y:[1,1]},o:{x:[.167,.167],y:[0,.167]},t:60,s:[100,85]},{i:{x:[.667,.667],y:[1,1]},o:{x:[.167,.167],y:[0,.167]},t:65,s:[100,30]},{i:{x:[.667,.667],y:[1,1]},o:{x:[.167,.167],y:[0,.167]},t:70,s:[100,50]},{i:{x:[.667,.667],y:[1,1]},o:{x:[.167,.167],y:[0,0]},t:80,s:[100,0]},{i:{x:[.667,.667],y:[1,1]},o:{x:[.167,.167],y:[0,.167]},t:90,s:[100,0]},{i:{x:[.667,.667],y:[1,1]},o:{x:[.167,.167],y:[0,.167]},t:100,s:[100,48]},{i:{x:[.667,.667],y:[1,1]},o:{x:[.167,.167],y:[0,.167]},t:105,s:[100,71]},{i:{x:[.667,.667],y:[1,1]},o:{x:[.167,.167],y:[0,.167]},t:110,s:[100,23]},{i:{x:[.667,.667],y:[1,1]},o:{x:[.167,.167],y:[0,.167]},t:115,s:[100,38]},{t:119.000004846969,s:[100,0]}],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Rectangle 1",np:3,cix:2,bm:0,ix:1,mn:"ADBE Vector Group",hd:!1}],ip:0,op:120.0000048877,st:0,bm:0},{ddd:0,ind:2,ty:4,nm:"Right",sr:1,ks:{o:{a:0,k:100,ix:11},r:{a:0,k:0,ix:10},p:{a:0,k:[635.5,512,0],ix:2},a:{a:0,k:[-124,0,0],ix:1},s:{a:0,k:[100,100,100],ix:6}},ao:0,shapes:[{ty:"gr",it:[{ty:"rc",d:1,s:{a:0,k:[126,482],ix:2},p:{a:0,k:[0,0],ix:3},r:{a:0,k:522,ix:4},nm:"Rectangle Path 1",mn:"ADBE Vector Shape - Rect",hd:!1},{ty:"st",c:{a:0,k:[.929412004059,.454901990704,.454901990704,1],ix:3},o:{a:0,k:100,ix:4},w:{a:0,k:0,ix:5},lc:1,lj:1,ml:4,bm:0,nm:"Stroke 1",mn:"ADBE Vector Graphic - Stroke",hd:!1},{ty:"fl",c:{a:0,k:[1,1,1,1],ix:4},o:{a:0,k:100,ix:5},r:1,bm:0,nm:"Fill 1",mn:"ADBE Vector Graphic - Fill",hd:!1},{ty:"tr",p:{a:0,k:[-124,0],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Rectangle 1",np:3,cix:2,bm:0,ix:1,mn:"ADBE Vector Group",hd:!1}],ip:0,op:120.0000048877,st:0,bm:0},{ddd:0,ind:3,ty:4,nm:"Left Fill",sr:1,ks:{o:{a:0,k:100,ix:11},r:{a:0,k:0,ix:10},p:{a:0,k:[388,753,0],ix:2},a:{a:0,k:[-124,241,0],ix:1},s:{a:0,k:[100,100,100],ix:6}},ao:0,hasMask:!0,masksProperties:[{inv:!1,mode:"a",pt:{a:0,k:{i:[[0,0],[0,0],[0,0],[0,0],[-33.931,0],[0,0],[0,33.966],[0,0]],o:[[0,0],[0,0],[0,0],[0,33.931],[0,0],[33.965,0],[0,0],[0,0]],v:[[-61,-241],[-187,-241],[-187,-241],[-187,179.562],[-125.562,241],[-122.5,241],[-61,179.5],[-61,-241]],c:!0},ix:1},o:{a:0,k:100,ix:3},x:{a:0,k:0,ix:4},nm:"Mask 1"}],shapes:[{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:0,k:{i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[63,-241],[63,241],[-63,241],[-63,-241]],c:!0},ix:2},nm:"Path 1",mn:"ADBE Vector Shape - Group",hd:!1},{ty:"st",c:{a:0,k:[.929412004059,.454901990704,.454901990704,1],ix:3},o:{a:0,k:100,ix:4},w:{a:0,k:0,ix:5},lc:1,lj:1,ml:4,bm:0,nm:"Stroke 1",mn:"ADBE Vector Graphic - Stroke",hd:!1},{ty:"fl",c:{a:0,k:[.639215686275,.756862745098,1,1],ix:4},o:{a:0,k:100,ix:5},r:1,bm:0,nm:"Fill 1",mn:"ADBE Vector Graphic - Fill",hd:!1},{ty:"tr",p:{a:0,k:[-123,241],ix:2},a:{a:0,k:[1,241],ix:1},s:{a:1,k:[{i:{x:[.667,.667],y:[1,1]},o:{x:[.167,.167],y:[0,.167]},t:1,s:[100,0]},{i:{x:[.667,.667],y:[1,1]},o:{x:[.167,.167],y:[0,.167]},t:8,s:[100,40]},{i:{x:[.667,.667],y:[1,1]},o:{x:[.167,.167],y:[0,.167]},t:20,s:[100,10]},{i:{x:[.667,.667],y:[1,1]},o:{x:[.167,.167],y:[0,.167]},t:25,s:[100,70]},{i:{x:[.667,.667],y:[1,1]},o:{x:[.167,.167],y:[0,.167]},t:37,s:[100,20]},{i:{x:[.667,.667],y:[1,1]},o:{x:[.167,.167],y:[0,.167]},t:42,s:[100,30]},{i:{x:[.667,.667],y:[1,1]},o:{x:[.167,.167],y:[0,.167]},t:47,s:[100,15]},{i:{x:[.667,.667],y:[1,1]},o:{x:[.167,.167],y:[0,.167]},t:60,s:[100,85]},{i:{x:[.667,.667],y:[1,1]},o:{x:[.167,.167],y:[0,.167]},t:65,s:[100,30]},{i:{x:[.667,.667],y:[1,1]},o:{x:[.167,.167],y:[0,.167]},t:70,s:[100,50]},{i:{x:[.667,.667],y:[1,1]},o:{x:[.167,.167],y:[0,0]},t:80,s:[100,0]},{i:{x:[.667,.667],y:[1,1]},o:{x:[.167,.167],y:[0,.167]},t:90,s:[100,0]},{i:{x:[.667,.667],y:[1,1]},o:{x:[.167,.167],y:[0,.167]},t:100,s:[100,48]},{i:{x:[.667,.667],y:[1,1]},o:{x:[.167,.167],y:[0,.167]},t:105,s:[100,71]},{i:{x:[.667,.667],y:[1,1]},o:{x:[.167,.167],y:[0,.167]},t:110,s:[100,23]},{i:{x:[.667,.667],y:[1,1]},o:{x:[.167,.167],y:[0,.167]},t:115,s:[100,38]},{t:119.000004846969,s:[100,0]}],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Rectangle 1",np:3,cix:2,bm:0,ix:1,mn:"ADBE Vector Group",hd:!1}],ip:0,op:120.0000048877,st:0,bm:0},{ddd:0,ind:4,ty:4,nm:"Left ",sr:1,ks:{o:{a:0,k:100,ix:11},r:{a:0,k:0,ix:10},p:{a:0,k:[388,512,0],ix:2},a:{a:0,k:[-124,0,0],ix:1},s:{a:0,k:[100,100,100],ix:6}},ao:0,shapes:[{ty:"gr",it:[{ty:"rc",d:1,s:{a:0,k:[126,482],ix:2},p:{a:0,k:[0,0],ix:3},r:{a:0,k:522,ix:4},nm:"Rectangle Path 1",mn:"ADBE Vector Shape - Rect",hd:!1},{ty:"st",c:{a:0,k:[.929412004059,.454901990704,.454901990704,1],ix:3},o:{a:0,k:100,ix:4},w:{a:0,k:0,ix:5},lc:1,lj:1,ml:4,bm:0,nm:"Stroke 1",mn:"ADBE Vector Graphic - Stroke",hd:!1},{ty:"fl",c:{a:0,k:[1,1,1,1],ix:4},o:{a:0,k:100,ix:5},r:1,bm:0,nm:"Fill 1",mn:"ADBE Vector Graphic - Fill",hd:!1},{ty:"tr",p:{a:0,k:[-124,0],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Rectangle 1",np:3,cix:2,bm:0,ix:1,mn:"ADBE Vector Group",hd:!1}],ip:0,op:120.0000048877,st:0,bm:0}],Ge=[],Be={v:Te,meta:ve,fr:De,ip:Pe,op:ze,w:Re,h:Ie,nm:Ce,ddd:Ae,assets:Ve,layers:Me,markers:Ge},Fe=()=>{const e=r.useRef(null);return r.useEffect(()=>{const a=document.getElementById("lottie-equalizer");return a&&(e.current=Z.loadAnimation({container:a,animationData:Be,loop:!0,autoplay:!0})),()=>{e.current&&e.current.destroy()}},[]),o.jsx("div",{id:"lottie-equalizer",style:{width:"40px",height:"40px"}})},Le=()=>{const e=r.useRef(null),[a,t]=r.useState(0),s=V(),n=v(u=>u.setSelectedNode),[x,h]=b(u=>[u.sidebarIsOpen,u.setSidebarOpen]),[i,d,l,p,_,m]=te(u=>[u.isPlaying,u.setIsPlaying,u.playingTime,u.playingNode,u.miniPlayerIsVisible,u.setMiniPlayerIsVisible]),[c,G]=p!=null&&p.timestamp?p.timestamp.split("-").map(u=>oe(u)):[0,0],B=(l-c)/(G-c)*100;r.useEffect(()=>{var D,P;const u=((D=e.current)==null?void 0:D.offsetWidth)||0,$=((P=e.current)==null?void 0:P.scrollWidth)||0;t($-u)},[]);const F=u=>{m(!1),u.stopPropagation()},L=()=>{n(p),h(!0)},O=x&&(s==null?void 0:s.ref_id)!==(p==null?void 0:p.ref_id)||p&&!x;return _&&p&&O?o.jsxs(Oe,{onClick:L,children:[o.jsxs($e,{children:[o.jsx(se,{src:p.image_url||"",type:p.node_type}),o.jsxs(Ne,{children:[o.jsxs(Xe,{ref:e,children:[o.jsx(Ue,{className:"title",scrollValue:a,children:p.episode_title}),o.jsx("div",{className:"subtitle",children:p.show_title})]}),o.jsx(qe,{onClick:u=>{d(!i),u.stopPropagation()},size:"small",children:i?o.jsx(Fe,{}):o.jsx(ae,{})})]}),o.jsx(We,{onClick:u=>F(u),children:o.jsx(ne,{})})]}),o.jsx(He,{value:B,variant:"determinate"})]}):null},Oe=f(g).attrs({direction:"column",align:"stretch",justify:"space-between"})`
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
`,qe=f(A)`
  && {
    font-size: 36px;
    padding: 2px;
    margin-left: 8px;
    overflow: hidden;
    z-index: 100000;
  }
`,He=f(ee)`
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
`,Ye=()=>{const e=V(),a=v(t=>t.isFetching);return o.jsxs(Ke,{align:"flex-end",id:"actions-toolbar",children:[!a&&o.jsx(we,{}),!a&&o.jsx(ie,{}),o.jsx(Le,{},e==null?void 0:e.ref_id)]})},Ke=f(g)`
  position: absolute;
  right: 20px;
  bottom: 20px;
  pointer-events: all;
`,Je=()=>{const e=b(a=>a.appMetaData);return o.jsxs(Qe,{children:[o.jsxs(Ze,{children:[o.jsx(o.Fragment,{children:e.title&&o.jsx(E,{className:"title",color:"white",children:e.title})}),o.jsx(E,{className:"subtitle",children:" Second Brain"})]}),o.jsx(re,{})]})},Qe=f(g).attrs({align:"center",direction:"row",grow:1,justify:"flex-start"})`
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
`,ot={},st=r.createContext(ot),at=()=>{const[e,a]=r.useState(!1),t=r.useMemo(()=>({isShow:e,setIsShow:a}),[e]);return o.jsx(st.Provider,{value:t})},nt=r.lazy(()=>k(()=>import("./index-365ba7e1.js"),["assets/index-365ba7e1.js","assets/index-acf86df8.js","assets/index-3f17fe3b.css","assets/index-f58c2ff2.js","assets/index-709a04ec.js","assets/react-toastify.esm-9e975f1c.js","assets/react-toastify-b67b3d0b.css","assets/index-1658b0e9.js","assets/useSlotProps-6fcf1e83.js","assets/index-4c09a329.js","assets/index.esm-fdb798ec.js","assets/InfoIcon-221d62e1.js","assets/ClipLoader-930b6314.js"]).then(({SettingsModal:e})=>({default:e}))),it=r.lazy(()=>k(()=>import("./index-e09d39dd.js"),["assets/index-e09d39dd.js","assets/index-acf86df8.js","assets/index-3f17fe3b.css","assets/react-toastify.esm-9e975f1c.js","assets/react-toastify-b67b3d0b.css","assets/index-f58c2ff2.js","assets/index-709a04ec.js","assets/toastMessage-ae0b7188.js","assets/index.esm-fdb798ec.js","assets/CheckIcon-7d2fc41c.js","assets/index-4c09a329.js","assets/InfoIcon-221d62e1.js"]).then(({AddContentModal:e})=>({default:e}))),rt=r.lazy(()=>k(()=>import("./index-5157a33a.js"),["assets/index-5157a33a.js","assets/index-acf86df8.js","assets/index-3f17fe3b.css","assets/react-toastify.esm-9e975f1c.js","assets/react-toastify-b67b3d0b.css","assets/index-f58c2ff2.js","assets/index-709a04ec.js","assets/toastMessage-ae0b7188.js","assets/index.esm-fdb798ec.js","assets/CheckIcon-7d2fc41c.js","assets/index-4c09a329.js","assets/InfoIcon-221d62e1.js","assets/index-fe13495f.js","assets/index-4183cbb3.js","assets/Popover-9a7b73fc.js","assets/useSlotProps-6fcf1e83.js","assets/Select-e4ec2b79.js","assets/Stack-4b9e65a1.js","assets/Popper-51de8e88.js"]).then(({AddItemModal:e})=>({default:e}))),ct=r.lazy(()=>k(()=>import("./index-9a787bb1.js"),["assets/index-9a787bb1.js","assets/index-acf86df8.js","assets/index-3f17fe3b.css","assets/index-f58c2ff2.js","assets/index-709a04ec.js","assets/react-toastify.esm-9e975f1c.js","assets/react-toastify-b67b3d0b.css","assets/NoFilterResultIcon-ebfd89fe.js","assets/ChevronUpIcon-0e60b041.js","assets/index-1658b0e9.js","assets/useSlotProps-6fcf1e83.js","assets/Popover-9a7b73fc.js","assets/index.esm-fdb798ec.js","assets/ClipLoader-930b6314.js","assets/index-4c09a329.js","assets/InfoIcon-221d62e1.js","assets/index-185e4789.js","assets/Popper-51de8e88.js","assets/CheckIcon-7d2fc41c.js","assets/SettingsIcon-85014601.js"]).then(({SourcesTableModal:e})=>({default:e}))),lt=r.lazy(()=>k(()=>import("./index-adaf8ec2.js"),["assets/index-adaf8ec2.js","assets/index-acf86df8.js","assets/index-3f17fe3b.css","assets/index-f58c2ff2.js","assets/index-709a04ec.js","assets/react-toastify.esm-9e975f1c.js","assets/react-toastify-b67b3d0b.css","assets/index-185e4789.js","assets/index-4c09a329.js","assets/index.esm-fdb798ec.js","assets/InfoIcon-221d62e1.js","assets/Skeleton-79d3581b.js","assets/ClipLoader-930b6314.js"]).then(({EditNodeNameModal:e})=>({default:e}))),dt=r.lazy(()=>k(()=>import("./index-aed9fb08.js"),["assets/index-aed9fb08.js","assets/index-acf86df8.js","assets/index-3f17fe3b.css","assets/index-f58c2ff2.js","assets/index-709a04ec.js","assets/react-toastify.esm-9e975f1c.js","assets/react-toastify-b67b3d0b.css","assets/Skeleton-79d3581b.js","assets/ClipLoader-930b6314.js"]).then(({RemoveNodeModal:e})=>({default:e}))),xt=r.lazy(()=>k(()=>import("./index-583f2a29.js"),["assets/index-583f2a29.js","assets/index-acf86df8.js","assets/index-3f17fe3b.css","assets/index-f58c2ff2.js","assets/index-709a04ec.js","assets/react-toastify.esm-9e975f1c.js","assets/react-toastify-b67b3d0b.css","assets/index-fe13495f.js","assets/index-4183cbb3.js","assets/Popover-9a7b73fc.js","assets/useSlotProps-6fcf1e83.js","assets/Select-e4ec2b79.js","assets/Stack-4b9e65a1.js","assets/Popper-51de8e88.js","assets/ClipLoader-930b6314.js"]).then(({AddNodeEdgeModal:e})=>({default:e}))),pt=()=>o.jsxs(o.Fragment,{children:[o.jsx(rt,{}),o.jsx(it,{}),o.jsx(nt,{}),o.jsx(lt,{}),o.jsx(dt,{}),o.jsx(ct,{}),o.jsx(xt,{})]}),ut=f(le)`
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
`,yt=r.lazy(()=>k(()=>import("./index-e61ffc7c.js"),["assets/index-e61ffc7c.js","assets/index-acf86df8.js","assets/index-3f17fe3b.css","assets/SourcesTableIcon-0b4c1161.js","assets/SettingsIcon-85014601.js","assets/index-709a04ec.js"]).then(({MainToolbar:e})=>({default:e}))),mt=r.lazy(()=>k(()=>import("./index-5038cbc4.js"),["assets/index-5038cbc4.js","assets/index-acf86df8.js","assets/index-3f17fe3b.css","assets/EditIcon-b5e8106b.js","assets/react-toastify.esm-9e975f1c.js","assets/react-toastify-b67b3d0b.css","assets/index.esm-fdb798ec.js","assets/PlusIcon-f35903f0.js","assets/index-709a04ec.js","assets/ClipLoader-930b6314.js"]).then(({Universe:e})=>({default:e})));r.lazy(()=>k(()=>import("./index-35a12748.js"),["assets/index-35a12748.js","assets/index-acf86df8.js","assets/index-3f17fe3b.css","assets/react-toastify.esm-9e975f1c.js","assets/react-toastify-b67b3d0b.css","assets/SoundIcon-3c58951c.js","assets/Select-e4ec2b79.js","assets/Popover-9a7b73fc.js","assets/useSlotProps-6fcf1e83.js","assets/ChevronUpIcon-0e60b041.js","assets/generateCategoricalChart-4c02ed55.js","assets/InfoIcon-221d62e1.js","assets/CheckIcon-7d2fc41c.js","assets/index.esm-fdb798ec.js","assets/toastMessage-ae0b7188.js","assets/SoundIcon-6125620a.css","assets/index-4183cbb3.js","assets/Skeleton-79d3581b.js","assets/ClipLoader-930b6314.js","assets/PlusIcon-f35903f0.js","assets/index-709a04ec.js","assets/index-f58c2ff2.js"]).then(({SideBar:e})=>({default:e})));const gt=()=>{const[e,a]=X(c=>[c.setBudget,c.setNodeCount]),[t,s,n,x,h]=[b(c=>c.setSidebarOpen),b(c=>c.currentSearch),b(c=>c.setCurrentSearch),b(c=>c.setRelevanceSelected),b(c=>c.setTranscriptOpen)],[i,d]=M(c=>[c.fetchData,c.setSelectedNode]),l=de(),p=xe({mode:"onChange"});p.handleSubmit(({search:c})=>{h(!1),d(null),x(!1),n(c)});const _=r.useCallback(async()=>{await i(e,{word:s??""}),t(!0),s&&await Y(e)},[i,s,t,e]);r.useEffect(()=>{_()},[s,_]);const m=r.useCallback(()=>{a("INCREMENT")},[a]);return r.useEffect(()=>{l&&(l.on("connect_error",c=>{console.error("Socket connection error:",c)}),l.on("newnode",m))},[l,m]),r.useEffect(()=>()=>{l&&l.disconnect()},[l]),o.jsxs(o.Fragment,{children:[o.jsx(pe,{}),o.jsx(et,{}),o.jsx(ue,{hidden:!I}),o.jsx(r.Suspense,{fallback:o.jsx("div",{children:"Loading..."}),children:o.jsxs(ht,{direction:"row",children:[o.jsxs(he,{...p,children:[o.jsx(yt,{}),!1,o.jsx(mt,{}),o.jsx(Je,{}),o.jsxs(ft,{children:["v",fe]}),o.jsx(Ye,{})]}),o.jsx(pt,{}),o.jsx(ut,{}),o.jsx(at,{})]})})]})},jt=Object.freeze(Object.defineProperty({__proto__:null,AppNew:gt},Symbol.toStringTag,{value:"Module"}));export{M as a,jt as i,bt as u};
