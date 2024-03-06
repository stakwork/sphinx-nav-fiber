import{g as z,k as N,n as W,o as H,p as Y,s as y,j as o,c as f,F as m,r,m as q,T as E,_ as k,u as U,f as X}from"./index-d235c36b.js";import{V as P,z as K,D as J,B as C,u as S,C as Q,E as Z,e as ee,H as te,J as oe,K as se,M as ae,N as ne,l as ie,I as A,L as re,a as G,b,c as ce,v as le,A as de,P as xe,d as pe,S as he,f as ue,T as fe,t as ye,m as me,G as ge,w as ke,F as _e,x as be}from"./react-toastify.esm-c1f13023.js";const j=[...w("Topic",20),{name:"bitcoin",edge_count:0,node_type:"Topic",ref_id:"b30aeba5-54a8-4227-8f05-79798a721996"},{name:"bitcoin",edge_count:0,node_type:"Topic",ref_id:"fc3a46e2-28ec-4a5f-9836-8308ef515005"},...w("Organization",20),...w("People",2)];[...R(j.filter(e=>e.node_type==="Topic"),j.filter(e=>e.node_type==="Organization")),...R(j.filter(e=>e.node_type==="Topic"),j.filter(e=>e.node_type==="People"))];function w(e,a){const t=[];for(let s=0;s<a;s+=1){const n=e,x={edge_count:Math.floor(Math.random()*10),node_type:n,name:`${n} name ${s}`,ref_id:`ref_id_${n}_${s}`};t.push(x)}return t}function R(e,a){const t=[];for(let s=0;s<a.length;s+=1){const n={attributes:{decision_type:"ML"},edge_type:"RELATED_TO",source:e[s].ref_id,target:a[s].ref_id};t.push(n)}return t}function je(e,a,t,s){return e.map(x=>{const u=t.radius-t.radius*(x.edge_count||0)/a,i=Math.random()*Math.PI*2;return{...x,x:t.x+u*Math.cos(i),y:s,z:t.z+u*Math.sin(i)}})}const Se=300,we=(e,a)=>{const t=e.reduce((i,d)=>(i[d.node_type]?i[d.node_type].push(d):i[d.node_type]=[d],i),{}),s=Object.keys(t);console.log(s);const n={x:0,y:0,z:0,radius:1e3},x=s.reduce((i,d,l)=>{const p=l%2===0?l/2:-Math.ceil(l/2),_=Math.max(...t[d].map(c=>c.edge_count||0)),g=je(t[d],_,n,p*Se);return[...i,...g]},[]),u=a.map(i=>{const d=x.find(g=>g.ref_id===i.source),l=x.find(g=>g.ref_id===i.target),p=new P((d==null?void 0:d.x)||0,(d==null?void 0:d.y)||0,(d==null?void 0:d.z)||0),_=new P((l==null?void 0:l.x)||0,(l==null?void 0:l.y)||0,(l==null?void 0:l.z)||0);return{edge_type:i.edge_type,attributes:i.attributes,source:i.source,target:i.target,sourcePosition:p,targetPosition:_}});return{nodes:x,links:u}},T={links:[],nodes:[]},ve=async(e,a,t)=>{try{return Te(e,a,t)}catch{return console.log(T),T}},Ee=async(e,a)=>{if(new URLSearchParams({...z||N?{free:"true"}:{},...a}).toString(),!a.word)try{return await W.get("/prediction/graph/search?top_node_count=10&limit=50")}catch(t){return console.error(t),null}return null},Te=async(e,a,t)=>{try{const n=await Ee(a,t);if(console.log(n),n)return De(n,e)}catch(s){return console.error(s),T}},De=(e,a)=>{let{edges:t,nodes:s}=e;return console.log(a),we(s,t)},Ie={data:null,selectionGraphData:{nodes:[],links:[]},disableCameraRotation:!1,graphRadius:H?1600:3056,graphStyle:localStorage.getItem("graphStyle")||"sphere",hoveredNode:null,selectedNode:null,cameraFocusTrigger:!1,selectedNodeRelativeIds:[],nearbyNodeIds:[],showSelectionGraph:!1,nodesNormalized:{},isFetching:!1},V=Y()(K((e,a)=>({...Ie,fetchData:async(t,s)=>{if(a().isFetching)return;e({isFetching:!0});const n=await ve(a().graphStyle,t,s??{}),x={};n==null||n.nodes.forEach(u=>{const i=u.ref_id;i&&(x[i]=u)}),s!=null&&s.word&&await J(),e({data:n,nodesNormalized:x,isFetching:!1,disableCameraRotation:!1,nearbyNodeIds:[],selectedNodeRelativeIds:[],showSelectionGraph:!1})},setIsFetching:t=>e({isFetching:t}),setData:t=>e({data:t}),setSelectionData:t=>e({selectionGraphData:t}),setDisableCameraRotation:t=>e({disableCameraRotation:t}),setGraphRadius:t=>e({graphRadius:t}),setGraphStyle:t=>e({graphStyle:t}),setHoveredNode:t=>e({hoveredNode:t}),setSelectedNode:t=>{const s=a().selectedNode;if((s==null?void 0:s.ref_id)!==(t==null?void 0:t.ref_id)){const{data:n}=a();console.log(n);const x=[];t!=null&&t.ref_id&&(n==null||n.links.forEach(u=>{console.log(u.target),u.target===(t==null?void 0:t.ref_id)&&x.push(u.source),u.source===(t==null?void 0:t.ref_id)&&x.push(u.target)})),e({hoveredNode:null,selectedNode:t,disableCameraRotation:!0,selectedNodeRelativeIds:x})}},setCameraFocusTrigger:t=>e({cameraFocusTrigger:t}),setNearbyNodeIds:t=>{const s=a().nearbyNodeIds;(t.length!==s.length||t[0]!==s[0])&&e({nearbyNodeIds:t})},setShowSelectionGraph:t=>e({showSelectionGraph:t}),addNewNode:t=>{const{data:s}=a();if(!s)return;const n={...s,nodes:[t,...s.nodes]};e({data:n})},addNewLink:t=>{const{data:s}=a();if(!s)return;const n=s.nodes.map(i=>i.ref_id===t.source||i.ref_id===t.target?{...i,edge_count:(i.edge_count||0)+1}:i),u={links:[...s.links,t],nodes:n};e({data:u})}}))),Pt=()=>V(e=>e.selectedNode),Pe=()=>{const[e,a]=S(t=>[t.cameraFocusTrigger,t.setCameraFocusTrigger]);return o.jsx(Re,{href:"",onClick:()=>a(!e),size:"medium",startIcon:o.jsx(Q,{})})},Re=y(C)`
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
`,ze={split:o.jsx(te,{}),force:o.jsx(oe,{}),sphere:o.jsx(se,{}),earth:o.jsx(ae,{}),v2:o.jsx(ne,{})},Ce=()=>{const[e,a]=S(s=>[s.graphStyle,s.setGraphStyle]),t=s=>{a(s)};return o.jsx(Ae,{direction:"column",children:Z.map(s=>o.jsx(m,{className:ee("icon",{active:e===s}),onClick:()=>t(s),children:ze[s]},s))})},Ae=y(m).attrs({direction:"row",align:"center",justify:"space-between"})`
  padding: 6px 6px 6px 11px;
  background: ${f.BG1};
  border-radius: 200px;
  margin-top: 16px;
  .icon {
    color: ${f.GRAY6};
    font-size: 20px;
    cursor: pointer;

    &:hover {
      color: ${f.GRAY3};
    }

    &:active {
      color: ${f.white};
    }

    &.active {
      color: ${f.white};
    }
  }

  .icon + .icon {
    margin-left: 20px;
  }
`,Ge="4.8.0",Ve={g:"LottieFiles AE 1.1.0",a:"",k:"",d:"",tc:""},Me=29.9700012207031,Be=0,Fe=120.0000048877,Le=1024,$e=1024,Oe="Pause_loop_Final",Ne=0,We=[],He=[{ddd:0,ind:1,ty:4,nm:"Right Fill",sr:1,ks:{o:{a:0,k:100,ix:11},r:{a:0,k:0,ix:10},p:{a:0,k:[635.5,753,0],ix:2},a:{a:0,k:[-124,241,0],ix:1},s:{a:0,k:[100,100,100],ix:6}},ao:0,hasMask:!0,masksProperties:[{inv:!1,mode:"a",pt:{a:0,k:{i:[[0,0],[0,0],[0,0],[0,0],[-33.931,0],[0,0],[0,33.966],[0,0]],o:[[0,0],[0,0],[0,0],[0,33.931],[0,0],[33.965,0],[0,0],[0,0]],v:[[-61,-241],[-187,-241],[-187,-241],[-187,179.562],[-125.562,241],[-122.5,241],[-61,179.5],[-61,-241]],c:!0},ix:1},o:{a:0,k:100,ix:3},x:{a:0,k:0,ix:4},nm:"Mask 1"}],shapes:[{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:0,k:{i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[63,-241],[63,241],[-63,241],[-63,-241]],c:!0},ix:2},nm:"Path 1",mn:"ADBE Vector Shape - Group",hd:!1},{ty:"st",c:{a:0,k:[.929412004059,.454901990704,.454901990704,1],ix:3},o:{a:0,k:100,ix:4},w:{a:0,k:0,ix:5},lc:1,lj:1,ml:4,bm:0,nm:"Stroke 1",mn:"ADBE Vector Graphic - Stroke",hd:!1},{ty:"fl",c:{a:0,k:[.639215686275,.756862745098,1,1],ix:4},o:{a:0,k:100,ix:5},r:1,bm:0,nm:"Fill 1",mn:"ADBE Vector Graphic - Fill",hd:!1},{ty:"tr",p:{a:0,k:[-123,241],ix:2},a:{a:0,k:[1,241],ix:1},s:{a:1,k:[{i:{x:[.667,.667],y:[1,1]},o:{x:[.167,.167],y:[0,.167]},t:1,s:[100,0]},{i:{x:[.667,.667],y:[1,1]},o:{x:[.167,.167],y:[0,.167]},t:8,s:[100,40]},{i:{x:[.667,.667],y:[1,1]},o:{x:[.167,.167],y:[0,.167]},t:20,s:[100,10]},{i:{x:[.667,.667],y:[1,1]},o:{x:[.167,.167],y:[0,.167]},t:25,s:[100,70]},{i:{x:[.667,.667],y:[1,1]},o:{x:[.167,.167],y:[0,.167]},t:37,s:[100,20]},{i:{x:[.667,.667],y:[1,1]},o:{x:[.167,.167],y:[0,.167]},t:42,s:[100,30]},{i:{x:[.667,.667],y:[1,1]},o:{x:[.167,.167],y:[0,.167]},t:47,s:[100,15]},{i:{x:[.667,.667],y:[1,1]},o:{x:[.167,.167],y:[0,.167]},t:60,s:[100,85]},{i:{x:[.667,.667],y:[1,1]},o:{x:[.167,.167],y:[0,.167]},t:65,s:[100,30]},{i:{x:[.667,.667],y:[1,1]},o:{x:[.167,.167],y:[0,.167]},t:70,s:[100,50]},{i:{x:[.667,.667],y:[1,1]},o:{x:[.167,.167],y:[0,0]},t:80,s:[100,0]},{i:{x:[.667,.667],y:[1,1]},o:{x:[.167,.167],y:[0,.167]},t:90,s:[100,0]},{i:{x:[.667,.667],y:[1,1]},o:{x:[.167,.167],y:[0,.167]},t:100,s:[100,48]},{i:{x:[.667,.667],y:[1,1]},o:{x:[.167,.167],y:[0,.167]},t:105,s:[100,71]},{i:{x:[.667,.667],y:[1,1]},o:{x:[.167,.167],y:[0,.167]},t:110,s:[100,23]},{i:{x:[.667,.667],y:[1,1]},o:{x:[.167,.167],y:[0,.167]},t:115,s:[100,38]},{t:119.000004846969,s:[100,0]}],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Rectangle 1",np:3,cix:2,bm:0,ix:1,mn:"ADBE Vector Group",hd:!1}],ip:0,op:120.0000048877,st:0,bm:0},{ddd:0,ind:2,ty:4,nm:"Right",sr:1,ks:{o:{a:0,k:100,ix:11},r:{a:0,k:0,ix:10},p:{a:0,k:[635.5,512,0],ix:2},a:{a:0,k:[-124,0,0],ix:1},s:{a:0,k:[100,100,100],ix:6}},ao:0,shapes:[{ty:"gr",it:[{ty:"rc",d:1,s:{a:0,k:[126,482],ix:2},p:{a:0,k:[0,0],ix:3},r:{a:0,k:522,ix:4},nm:"Rectangle Path 1",mn:"ADBE Vector Shape - Rect",hd:!1},{ty:"st",c:{a:0,k:[.929412004059,.454901990704,.454901990704,1],ix:3},o:{a:0,k:100,ix:4},w:{a:0,k:0,ix:5},lc:1,lj:1,ml:4,bm:0,nm:"Stroke 1",mn:"ADBE Vector Graphic - Stroke",hd:!1},{ty:"fl",c:{a:0,k:[1,1,1,1],ix:4},o:{a:0,k:100,ix:5},r:1,bm:0,nm:"Fill 1",mn:"ADBE Vector Graphic - Fill",hd:!1},{ty:"tr",p:{a:0,k:[-124,0],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Rectangle 1",np:3,cix:2,bm:0,ix:1,mn:"ADBE Vector Group",hd:!1}],ip:0,op:120.0000048877,st:0,bm:0},{ddd:0,ind:3,ty:4,nm:"Left Fill",sr:1,ks:{o:{a:0,k:100,ix:11},r:{a:0,k:0,ix:10},p:{a:0,k:[388,753,0],ix:2},a:{a:0,k:[-124,241,0],ix:1},s:{a:0,k:[100,100,100],ix:6}},ao:0,hasMask:!0,masksProperties:[{inv:!1,mode:"a",pt:{a:0,k:{i:[[0,0],[0,0],[0,0],[0,0],[-33.931,0],[0,0],[0,33.966],[0,0]],o:[[0,0],[0,0],[0,0],[0,33.931],[0,0],[33.965,0],[0,0],[0,0]],v:[[-61,-241],[-187,-241],[-187,-241],[-187,179.562],[-125.562,241],[-122.5,241],[-61,179.5],[-61,-241]],c:!0},ix:1},o:{a:0,k:100,ix:3},x:{a:0,k:0,ix:4},nm:"Mask 1"}],shapes:[{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:0,k:{i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[63,-241],[63,241],[-63,241],[-63,-241]],c:!0},ix:2},nm:"Path 1",mn:"ADBE Vector Shape - Group",hd:!1},{ty:"st",c:{a:0,k:[.929412004059,.454901990704,.454901990704,1],ix:3},o:{a:0,k:100,ix:4},w:{a:0,k:0,ix:5},lc:1,lj:1,ml:4,bm:0,nm:"Stroke 1",mn:"ADBE Vector Graphic - Stroke",hd:!1},{ty:"fl",c:{a:0,k:[.639215686275,.756862745098,1,1],ix:4},o:{a:0,k:100,ix:5},r:1,bm:0,nm:"Fill 1",mn:"ADBE Vector Graphic - Fill",hd:!1},{ty:"tr",p:{a:0,k:[-123,241],ix:2},a:{a:0,k:[1,241],ix:1},s:{a:1,k:[{i:{x:[.667,.667],y:[1,1]},o:{x:[.167,.167],y:[0,.167]},t:1,s:[100,0]},{i:{x:[.667,.667],y:[1,1]},o:{x:[.167,.167],y:[0,.167]},t:8,s:[100,40]},{i:{x:[.667,.667],y:[1,1]},o:{x:[.167,.167],y:[0,.167]},t:20,s:[100,10]},{i:{x:[.667,.667],y:[1,1]},o:{x:[.167,.167],y:[0,.167]},t:25,s:[100,70]},{i:{x:[.667,.667],y:[1,1]},o:{x:[.167,.167],y:[0,.167]},t:37,s:[100,20]},{i:{x:[.667,.667],y:[1,1]},o:{x:[.167,.167],y:[0,.167]},t:42,s:[100,30]},{i:{x:[.667,.667],y:[1,1]},o:{x:[.167,.167],y:[0,.167]},t:47,s:[100,15]},{i:{x:[.667,.667],y:[1,1]},o:{x:[.167,.167],y:[0,.167]},t:60,s:[100,85]},{i:{x:[.667,.667],y:[1,1]},o:{x:[.167,.167],y:[0,.167]},t:65,s:[100,30]},{i:{x:[.667,.667],y:[1,1]},o:{x:[.167,.167],y:[0,.167]},t:70,s:[100,50]},{i:{x:[.667,.667],y:[1,1]},o:{x:[.167,.167],y:[0,0]},t:80,s:[100,0]},{i:{x:[.667,.667],y:[1,1]},o:{x:[.167,.167],y:[0,.167]},t:90,s:[100,0]},{i:{x:[.667,.667],y:[1,1]},o:{x:[.167,.167],y:[0,.167]},t:100,s:[100,48]},{i:{x:[.667,.667],y:[1,1]},o:{x:[.167,.167],y:[0,.167]},t:105,s:[100,71]},{i:{x:[.667,.667],y:[1,1]},o:{x:[.167,.167],y:[0,.167]},t:110,s:[100,23]},{i:{x:[.667,.667],y:[1,1]},o:{x:[.167,.167],y:[0,.167]},t:115,s:[100,38]},{t:119.000004846969,s:[100,0]}],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Rectangle 1",np:3,cix:2,bm:0,ix:1,mn:"ADBE Vector Group",hd:!1}],ip:0,op:120.0000048877,st:0,bm:0},{ddd:0,ind:4,ty:4,nm:"Left ",sr:1,ks:{o:{a:0,k:100,ix:11},r:{a:0,k:0,ix:10},p:{a:0,k:[388,512,0],ix:2},a:{a:0,k:[-124,0,0],ix:1},s:{a:0,k:[100,100,100],ix:6}},ao:0,shapes:[{ty:"gr",it:[{ty:"rc",d:1,s:{a:0,k:[126,482],ix:2},p:{a:0,k:[0,0],ix:3},r:{a:0,k:522,ix:4},nm:"Rectangle Path 1",mn:"ADBE Vector Shape - Rect",hd:!1},{ty:"st",c:{a:0,k:[.929412004059,.454901990704,.454901990704,1],ix:3},o:{a:0,k:100,ix:4},w:{a:0,k:0,ix:5},lc:1,lj:1,ml:4,bm:0,nm:"Stroke 1",mn:"ADBE Vector Graphic - Stroke",hd:!1},{ty:"fl",c:{a:0,k:[1,1,1,1],ix:4},o:{a:0,k:100,ix:5},r:1,bm:0,nm:"Fill 1",mn:"ADBE Vector Graphic - Fill",hd:!1},{ty:"tr",p:{a:0,k:[-124,0],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Rectangle 1",np:3,cix:2,bm:0,ix:1,mn:"ADBE Vector Group",hd:!1}],ip:0,op:120.0000048877,st:0,bm:0}],Ye=[],qe={v:Ge,meta:Ve,fr:Me,ip:Be,op:Fe,w:Le,h:$e,nm:Oe,ddd:Ne,assets:We,layers:He,markers:Ye},Ue=()=>{const e=r.useRef(null);return r.useEffect(()=>{const a=document.getElementById("lottie-equalizer");return a&&(e.current=ie.loadAnimation({container:a,animationData:qe,loop:!0,autoplay:!0})),()=>{e.current&&e.current.destroy()}},[]),o.jsx("div",{id:"lottie-equalizer",style:{width:"40px",height:"40px"}})},Xe=()=>{const e=r.useRef(null),[a,t]=r.useState(0),s=G(),n=S(h=>h.setSelectedNode),[x,u]=b(h=>[h.sidebarIsOpen,h.setSidebarOpen]),[i,d,l,p,_,g]=ce(h=>[h.isPlaying,h.setIsPlaying,h.playingTime,h.playingNode,h.miniPlayerIsVisible,h.setMiniPlayerIsVisible]),[c,M]=p!=null&&p.timestamp?p.timestamp.split("-").map(h=>le(h)):[0,0],B=(l-c)/(M-c)*100;r.useEffect(()=>{var D,I;const h=((D=e.current)==null?void 0:D.offsetWidth)||0,O=((I=e.current)==null?void 0:I.scrollWidth)||0;t(O-h)},[]);const F=h=>{g(!1),h.stopPropagation()},L=()=>{n(p),u(!0)},$=x&&(s==null?void 0:s.ref_id)!==(p==null?void 0:p.ref_id)||p&&!x;return _&&p&&$?o.jsxs(Ke,{onClick:L,children:[o.jsxs(Je,{children:[o.jsx(de,{src:p.image_url||"",type:p.node_type}),o.jsxs(Qe,{children:[o.jsxs(st,{ref:e,children:[o.jsx(ot,{className:"title",scrollValue:a,children:p.episode_title}),o.jsx("div",{className:"subtitle",children:p.show_title})]}),o.jsx(et,{onClick:h=>{d(!i),h.stopPropagation()},size:"small",children:i?o.jsx(Ue,{}):o.jsx(xe,{})})]}),o.jsx(Ze,{onClick:h=>F(h),children:o.jsx(pe,{})})]}),o.jsx(tt,{value:B,variant:"determinate"})]}):null},Ke=y(m).attrs({direction:"column",align:"stretch",justify:"space-between"})`
  padding: 8px;
  background: ${f.BG1};
  border-radius: 6px;
  width: 320px;
  height: 72px;
  margin-top: 16px;
  cursor: pointer;
  z-index: 0;
`,Je=y(m).attrs({direction:"row",align:"center",justify:"flex-start"})``,Qe=y(m).attrs({direction:"row",align:"center",justify:"space-between"})`
  flex: 1;
  color: ${f.white};
  margin-left: 11px;

  .title {
    font-size: 13px;
    margin-bottom: 2px;
    font-weight: 500;
  }

  .subtitle {
    font-size: 11px;
    color: ${f.GRAY6};
  }
`,Ze=y(A)`
  padding: 8px;
  color: ${f.GRAY6};
  z-index: 100000;
`,et=y(A)`
  && {
    font-size: 36px;
    padding: 2px;
    margin-left: 8px;
    overflow: hidden;
    z-index: 100000;
  }
`,tt=y(re)`
  && {
    flex-shrink: 0;
    height: 2px;
    background-color: ${f.white};
    color: blue;

    .MuiLinearProgress-bar {
      background: rgb(65, 90, 127);
    }
  }
`,ot=y.div`
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
`,st=y(m)`
  overflow: hidden;
  flex: 1;
`,at=()=>{const e=G(),a=S(t=>t.isFetching);return o.jsxs(nt,{align:"flex-end",id:"actions-toolbar",children:[!a&&o.jsx(Pe,{}),!a&&o.jsx(Ce,{}),o.jsx(Xe,{},e==null?void 0:e.ref_id)]})},nt=y(m)`
  position: absolute;
  right: 20px;
  bottom: 20px;
  pointer-events: all;
`,it=()=>{const e=b(a=>a.appMetaData);return o.jsxs(rt,{children:[o.jsxs(ct,{children:[o.jsx(o.Fragment,{children:e.title&&o.jsx(E,{className:"title",color:"white",children:e.title})}),o.jsx(E,{className:"subtitle",children:" Second Brain"})]}),o.jsx(he,{})]})},rt=y(m).attrs({align:"center",direction:"row",grow:1,justify:"flex-start"})`
  height: 64px;
  position: absolute;
  top: 0px;
  left: 64px;
  right: 32px;
  transition: opacity 1s;
  z-index: 99;
  padding: 20px 23px;
`,ct=y.div`
  ${q.smallOnly`
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
    color: ${f.GRAY6};
    font-family: Barlow;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0.22px;
  }
`,lt=()=>{const[e,a]=r.useState(!0),t=ue();r.useEffect(()=>{a(!0)},[t]);const s=()=>{a(!1)};return t&&e?o.jsxs(dt,{align:"center",direction:"column",justify:"center",onClick:s,children:[o.jsx("img",{alt:"screen",src:"jamboard_kiosk.png"}),o.jsxs(m,{align:"center",direction:"column",justify:"center",children:[o.jsx(v,{children:"Second Brain is currently"}),o.jsx(v,{style:{fontWeight:600},children:"optimized for Desktop."}),o.jsx(v,{children:"Mobile support coming soon."})]}),o.jsx(C,{color:"secondary",onClick:s,variant:"contained",children:"Got It"})]}):null},dt=y(m)`
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.75);
  gap: 28px;
  z-index: 2000000000;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`,v=y(E)`
  color: #fff;
  text-align: center;
  font-family: Barlow;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  margin: 1px;
`,xt={},pt=r.createContext(xt),ht=()=>{const[e,a]=r.useState(!1),t=r.useMemo(()=>({isShow:e,setIsShow:a}),[e]);return o.jsx(pt.Provider,{value:t})},ut=r.lazy(()=>k(()=>import("./index-4c59587b.js"),["assets/index-4c59587b.js","assets/index-d235c36b.js","assets/index-3f17fe3b.css","assets/index-ebe3b400.js","assets/index-13b29bcb.js","assets/react-toastify.esm-c1f13023.js","assets/react-toastify-b67b3d0b.css","assets/index-a2b43141.js","assets/index-80f56cec.js","assets/index.esm-1e4be125.js","assets/InfoIcon-34912e05.js","assets/ClipLoader-a3c62db1.js","assets/Tabs-cf68de01.js","assets/useSlotProps-aadac426.js"]).then(({SettingsModal:e})=>({default:e}))),ft=r.lazy(()=>k(()=>import("./index-4111f4f3.js"),["assets/index-4111f4f3.js","assets/index-d235c36b.js","assets/index-3f17fe3b.css","assets/react-toastify.esm-c1f13023.js","assets/react-toastify-b67b3d0b.css","assets/index-ebe3b400.js","assets/index-13b29bcb.js","assets/toastMessage-4b97e369.js","assets/index.esm-1e4be125.js","assets/CheckIcon-fb050644.js","assets/index-80f56cec.js","assets/InfoIcon-34912e05.js"]).then(({AddContentModal:e})=>({default:e}))),yt=r.lazy(()=>k(()=>import("./index-aefc4f78.js"),["assets/index-aefc4f78.js","assets/index-d235c36b.js","assets/index-3f17fe3b.css","assets/react-toastify.esm-c1f13023.js","assets/react-toastify-b67b3d0b.css","assets/index-ebe3b400.js","assets/index-13b29bcb.js","assets/toastMessage-4b97e369.js","assets/index.esm-1e4be125.js","assets/CheckIcon-fb050644.js","assets/index-80f56cec.js","assets/InfoIcon-34912e05.js","assets/index-a6c0d988.js","assets/index-6a43b537.js","assets/Popover-4aef1318.js","assets/useSlotProps-aadac426.js","assets/Select-0e4cbcfd.js","assets/Stack-ac1ce3e3.js","assets/Popper-d2a7d2bb.js"]).then(({AddItemModal:e})=>({default:e}))),mt=r.lazy(()=>k(()=>import("./index-3ec441e6.js"),["assets/index-3ec441e6.js","assets/index-d235c36b.js","assets/index-3f17fe3b.css","assets/index-ebe3b400.js","assets/index-13b29bcb.js","assets/react-toastify.esm-c1f13023.js","assets/react-toastify-b67b3d0b.css","assets/NoFilterResultIcon-c938240b.js","assets/ChevronUpIcon-af1325f8.js","assets/Popover-4aef1318.js","assets/useSlotProps-aadac426.js","assets/index.esm-1e4be125.js","assets/ClipLoader-a3c62db1.js","assets/index-80f56cec.js","assets/InfoIcon-34912e05.js","assets/index-1a60b77b.js","assets/Popper-d2a7d2bb.js","assets/CheckIcon-fb050644.js","assets/SettingsIcon-2cfb5467.js","assets/Tabs-cf68de01.js"]).then(({SourcesTableModal:e})=>({default:e}))),gt=r.lazy(()=>k(()=>import("./index-778edbbb.js"),["assets/index-778edbbb.js","assets/index-d235c36b.js","assets/index-3f17fe3b.css","assets/index-ebe3b400.js","assets/index-13b29bcb.js","assets/react-toastify.esm-c1f13023.js","assets/react-toastify-b67b3d0b.css","assets/index-1a60b77b.js","assets/index-80f56cec.js","assets/index.esm-1e4be125.js","assets/InfoIcon-34912e05.js","assets/Skeleton-1843f3e8.js","assets/ClipLoader-a3c62db1.js"]).then(({EditNodeNameModal:e})=>({default:e}))),kt=r.lazy(()=>k(()=>import("./index-43b30f23.js"),["assets/index-43b30f23.js","assets/index-d235c36b.js","assets/index-3f17fe3b.css","assets/index-ebe3b400.js","assets/index-13b29bcb.js","assets/react-toastify.esm-c1f13023.js","assets/react-toastify-b67b3d0b.css","assets/Skeleton-1843f3e8.js","assets/ClipLoader-a3c62db1.js"]).then(({RemoveNodeModal:e})=>({default:e}))),_t=r.lazy(()=>k(()=>import("./index-846f962b.js"),["assets/index-846f962b.js","assets/index-d235c36b.js","assets/index-3f17fe3b.css","assets/index-ebe3b400.js","assets/index-13b29bcb.js","assets/react-toastify.esm-c1f13023.js","assets/react-toastify-b67b3d0b.css","assets/index-a6c0d988.js","assets/index-6a43b537.js","assets/Popover-4aef1318.js","assets/useSlotProps-aadac426.js","assets/Select-0e4cbcfd.js","assets/Stack-ac1ce3e3.js","assets/Popper-d2a7d2bb.js","assets/ClipLoader-a3c62db1.js"]).then(({AddNodeEdgeModal:e})=>({default:e}))),bt=()=>o.jsxs(o.Fragment,{children:[o.jsx(yt,{}),o.jsx(ft,{}),o.jsx(ut,{}),o.jsx(gt,{}),o.jsx(kt,{}),o.jsx(mt,{}),o.jsx(_t,{})]}),jt=y(fe)`
  .Toastify__toast {
    background-color: ${f.body};
  }
  .Toastify__toast-body {
    background-color: ${f.body};
    color: ${f.white};
  }
  .Toastify__close-button {
    color: ${f.white};
  }
  .Toastify__progress-bar--error {
    background-color: ${f.primaryRed};
  }
  .Toastify__progress-bar--success {
    background-color: ${f.primaryGreen};
  }
`,St=y(m)`
  height: 100%;
  width: 100%;
  background-color: ${f.black};
`,wt=y(m)`
  position: absolute;
  bottom: 8px;
  left: 8px;
  color: ${f.white};
  font-size: 12px;
  opacity: 0.5;
`,vt=r.lazy(()=>k(()=>import("./index-9fbb6ded.js"),["assets/index-9fbb6ded.js","assets/index-d235c36b.js","assets/index-3f17fe3b.css","assets/SourcesTableIcon-c8fb260d.js","assets/SettingsIcon-2cfb5467.js","assets/index-13b29bcb.js"]).then(({MainToolbar:e})=>({default:e}))),Et=r.lazy(()=>k(()=>import("./index-4746249b.js"),["assets/index-4746249b.js","assets/index-d235c36b.js","assets/index-3f17fe3b.css","assets/EditIcon-b6d1d535.js","assets/react-toastify.esm-c1f13023.js","assets/react-toastify-b67b3d0b.css","assets/index.esm-1e4be125.js","assets/PlusIcon-da9b2641.js","assets/index-13b29bcb.js","assets/ClipLoader-a3c62db1.js"]).then(({Universe:e})=>({default:e})));r.lazy(()=>k(()=>import("./index-147a3a4d.js"),["assets/index-147a3a4d.js","assets/index-d235c36b.js","assets/index-3f17fe3b.css","assets/react-toastify.esm-c1f13023.js","assets/react-toastify-b67b3d0b.css","assets/SoundIcon-bedd3007.js","assets/Select-0e4cbcfd.js","assets/Popover-4aef1318.js","assets/useSlotProps-aadac426.js","assets/ChevronUpIcon-af1325f8.js","assets/generateCategoricalChart-7b8b23ce.js","assets/InfoIcon-34912e05.js","assets/CheckIcon-fb050644.js","assets/index.esm-1e4be125.js","assets/toastMessage-4b97e369.js","assets/SoundIcon-6125620a.css","assets/index-6a43b537.js","assets/Skeleton-1843f3e8.js","assets/ClipLoader-a3c62db1.js","assets/PlusIcon-da9b2641.js","assets/index-13b29bcb.js","assets/index-ebe3b400.js"]).then(({SideBar:e})=>({default:e})));const Tt=()=>{const[e,a]=U(c=>[c.setBudget,c.setNodeCount]),[t,s,n,x,u]=[b(c=>c.setSidebarOpen),b(c=>c.currentSearch),b(c=>c.setCurrentSearch),b(c=>c.setRelevanceSelected),b(c=>c.setTranscriptOpen)],[i,d]=V(c=>[c.fetchData,c.setSelectedNode]),l=ye(),p=me({mode:"onChange"});p.handleSubmit(({search:c})=>{u(!1),d(null),x(!1),n(c)});const _=r.useCallback(async()=>{await i(e,{word:s??""}),t(!0),s&&await X(e)},[i,s,t,e]);r.useEffect(()=>{_()},[s,_]);const g=r.useCallback(()=>{a("INCREMENT")},[a]);return r.useEffect(()=>{l&&(l.on("connect_error",c=>{console.error("Socket connection error:",c)}),l.on("newnode",g))},[l,g]),r.useEffect(()=>()=>{l&&l.disconnect()},[l]),o.jsxs(o.Fragment,{children:[o.jsx(ge,{}),o.jsx(lt,{}),o.jsx(ke,{hidden:!z}),o.jsx(r.Suspense,{fallback:o.jsx("div",{children:"Loading..."}),children:o.jsxs(St,{direction:"row",children:[o.jsxs(_e,{...p,children:[o.jsx(vt,{}),!1,o.jsx(Et,{}),o.jsx(it,{}),o.jsxs(wt,{children:["v",be]}),o.jsx(at,{})]}),o.jsx(bt,{}),o.jsx(jt,{}),o.jsx(ht,{})]})})]})},Rt=Object.freeze(Object.defineProperty({__proto__:null,AppNew:Tt},Symbol.toStringTag,{value:"Module"}));export{V as a,Rt as i,Pt as u};
