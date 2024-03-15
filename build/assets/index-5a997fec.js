import{n as I,k as A,o as W,p as H,q,s as y,j as s,r as l,c as m,F as u,m as U,T as b,_,u as X,g as Y}from"./index-8fb39b9b.js";import{V as P,x as K,y as J,B as V,u as R,z as Q,D as Z,I as M,E as ee,H as G,b as j,J as te,K as se,A as oe,P as ne,h as ie,M as ae,S as re,d as ce,Q as le,C as de,a as xe,t as pe,k as fe,G as he,L as ue,F as ye,v as me}from"./react-toastify.esm-309129e5.js";const w=[...v("Topic",20),{name:"bitcoin",edge_count:0,node_type:"Topic",ref_id:"b30aeba5-54a8-4227-8f05-79798a721996"},{name:"bitcoin",edge_count:0,node_type:"Topic",ref_id:"fc3a46e2-28ec-4a5f-9836-8308ef515005"},...v("Organization",20),...v("People",2)];[...C(w.filter(e=>e.node_type==="Topic"),w.filter(e=>e.node_type==="Organization")),...C(w.filter(e=>e.node_type==="Topic"),w.filter(e=>e.node_type==="People"))];function v(e,o){const t=[];for(let n=0;n<o;n+=1){const i=e,d={edge_count:Math.floor(Math.random()*10),node_type:i,name:`${i} name ${n}`,ref_id:`ref_id_${i}_${n}`};t.push(d)}return t}function C(e,o){const t=[];for(let n=0;n<o.length;n+=1){const i={attributes:{decision_type:"ML"},edge_type:"RELATED_TO",source:e[n].ref_id,target:o[n].ref_id,ref_id:`ref_id__${n}`};t.push(i)}return t}function ge(e,o,t,n){const i={};return e.map(f=>{const a=f.edge_count||0,r=t.radius-t.radius*a/o;let c;a in i?c=i[a]:(c=Math.random()*300,i[a]=c);const x=r+c,g=Math.random()*Math.PI*2;return{...f,x:t.x+x*Math.cos(g),y:n,z:t.z+x*Math.sin(g)}})}const ke=300,_e=(e,o)=>{const t=e.reduce((a,r)=>(a[r.node_type]?a[r.node_type].push(r):a[r.node_type]=[r],a),{}),n=Object.keys(t),i={x:0,y:0,z:0,radius:1e3},d=n.reduce((a,r,c)=>{const x=c%2===0?c/2:-Math.ceil(c/2),g=Math.max(...t[r].map(p=>p.edge_count||0)),k=ge(t[r],g,i,x*ke);return[...a,...k]},[]),f=o.map(a=>{const r=d.find(k=>k.ref_id===a.source),c=d.find(k=>k.ref_id===a.target),x=new P((r==null?void 0:r.x)||0,(r==null?void 0:r.y)||0,(r==null?void 0:r.z)||0),g=new P((c==null?void 0:c.x)||0,(c==null?void 0:c.y)||0,(c==null?void 0:c.z)||0);return{...a,sourcePosition:x,targetPosition:g}});return{nodes:d,links:f,nodeTypes:n}},T={links:[],nodes:[]},be=async(e,o,t)=>{try{return Se(e,o,t)}catch{return console.log(T),T}},je=async(e,o)=>{if(new URLSearchParams({...A||W?{free:"true"}:{},...o}).toString(),!o.word)try{return await I.get("/prediction/graph/search?top_node_count=15&limit=3")}catch(t){return console.error(t),null}return null},we=async e=>{try{return await I.get(`/node/${e}`)}catch(o){return console.error(o),null}return null},Dt=async(e,o)=>{try{return await I.get(`/prediction/graph/edges/${e}?skip=${o}&limit=4`)}catch(t){return console.error(t),null}return null},Se=async(e,o,t)=>{try{const i=await je(o,t);if(i)return ve(i,e)}catch(n){return console.error(n),T}},ve=(e,o)=>{let{edges:t,nodes:n}=e;return console.log(o),_e(n,t)},Ee={data:null,selectionGraphData:{nodes:[],links:[]},disableCameraRotation:!1,graphRadius:H?1600:3056,graphStyle:localStorage.getItem("graphStyle")||"sphere",hoveredNode:null,selectedNode:null,cameraFocusTrigger:!1,selectedNodeRelativeIds:[],nearbyNodeIds:[],showSelectionGraph:!1,nodesNormalized:{},edgesNormalized:{},isFetching:!1,nodeTypes:[]},S=q()(K((e,o)=>({...Ee,fetchData:async(t,n)=>{if(o().isFetching)return;e({isFetching:!0});const i=await be(o().graphStyle,t,n??{}),d={};i==null||i.nodes.forEach(a=>{const r=a.ref_id;r&&(d[r]=a)});const f={};i==null||i.links.forEach(a=>{const r=`${a.source}-${a.target}`;r&&(f[r]=a)}),n!=null&&n.word&&await J(),e({data:{nodes:(i==null?void 0:i.nodes)||[],links:(i==null?void 0:i.links)||[]},nodeTypes:i==null?void 0:i.nodeTypes,nodesNormalized:d,edgesNormalized:f,isFetching:!1,disableCameraRotation:!1,nearbyNodeIds:[],selectedNodeRelativeIds:[],showSelectionGraph:!1})},setIsFetching:t=>e({isFetching:t}),setData:t=>e({data:t}),removeLink:(t,n)=>{const{data:i,selectedNodeRelativeIds:d}=o();if(i){const{nodes:f,links:a}=i;e({data:{nodes:f,links:a.filter(r=>r.ref_id!==t)},selectedNodeRelativeIds:d.filter(r=>r!==n)})}},setSelectionData:t=>e({selectionGraphData:t}),setDisableCameraRotation:t=>e({disableCameraRotation:t}),setGraphRadius:t=>e({graphRadius:t}),setGraphStyle:t=>e({graphStyle:t}),setHoveredNode:t=>e({hoveredNode:t}),setSelectedNode:t=>{const n=o().selectedNode;if((n==null?void 0:n.ref_id)!==(t==null?void 0:t.ref_id)){const{data:i}=o(),d=[];t!=null&&t.ref_id&&(i==null||i.links.forEach(f=>{f.target===(t==null?void 0:t.ref_id)&&d.push(f.source),f.source===(t==null?void 0:t.ref_id)&&d.push(f.target)})),e({hoveredNode:null,selectedNode:t,showSelectionGraph:!!(t!=null&&t.ref_id),disableCameraRotation:!0,selectedNodeRelativeIds:d,...t!=null&&t.ref_id?{}:{selectionGraphData:{nodes:[],links:[]}}})}},setSelectedNodeRelativeIds:t=>e({selectedNodeRelativeIds:t}),setCameraFocusTrigger:t=>e({cameraFocusTrigger:t}),setNearbyNodeIds:t=>{const n=o().nearbyNodeIds;(t.length!==n.length||t[0]!==n[0])&&e({nearbyNodeIds:t})},setShowSelectionGraph:t=>e({showSelectionGraph:t}),addNewNode:t=>{const{data:n}=o();if(!n)return;const i={...n,nodes:[t,...n.nodes]};e({data:i})},addNewLink:t=>{const{data:n}=o();if(!n)return;const i=n.nodes.map(a=>a.ref_id===t.source||a.ref_id===t.target?{...a,edge_count:(a.edge_count||0)+1}:a),f={links:[...n.links,t],nodes:i};e({data:f})}}))),zt=()=>S(e=>e.selectedNode),Te=()=>{const[e,o]=R(t=>[t.cameraFocusTrigger,t.setCameraFocusTrigger]);return s.jsx(Ie,{href:"",onClick:()=>o(!e),size:"medium",startIcon:s.jsx(Q,{})})},Ie=y(V)`
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
`,Re="4.8.0",De={g:"LottieFiles AE 1.1.0",a:"",k:"",d:"",tc:""},ze=29.9700012207031,Pe=0,Ce=120.0000048877,Ae=1024,Ve=1024,Me="Pause_loop_Final",Ge=0,Fe=[],Le=[{ddd:0,ind:1,ty:4,nm:"Right Fill",sr:1,ks:{o:{a:0,k:100,ix:11},r:{a:0,k:0,ix:10},p:{a:0,k:[635.5,753,0],ix:2},a:{a:0,k:[-124,241,0],ix:1},s:{a:0,k:[100,100,100],ix:6}},ao:0,hasMask:!0,masksProperties:[{inv:!1,mode:"a",pt:{a:0,k:{i:[[0,0],[0,0],[0,0],[0,0],[-33.931,0],[0,0],[0,33.966],[0,0]],o:[[0,0],[0,0],[0,0],[0,33.931],[0,0],[33.965,0],[0,0],[0,0]],v:[[-61,-241],[-187,-241],[-187,-241],[-187,179.562],[-125.562,241],[-122.5,241],[-61,179.5],[-61,-241]],c:!0},ix:1},o:{a:0,k:100,ix:3},x:{a:0,k:0,ix:4},nm:"Mask 1"}],shapes:[{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:0,k:{i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[63,-241],[63,241],[-63,241],[-63,-241]],c:!0},ix:2},nm:"Path 1",mn:"ADBE Vector Shape - Group",hd:!1},{ty:"st",c:{a:0,k:[.929412004059,.454901990704,.454901990704,1],ix:3},o:{a:0,k:100,ix:4},w:{a:0,k:0,ix:5},lc:1,lj:1,ml:4,bm:0,nm:"Stroke 1",mn:"ADBE Vector Graphic - Stroke",hd:!1},{ty:"fl",c:{a:0,k:[.639215686275,.756862745098,1,1],ix:4},o:{a:0,k:100,ix:5},r:1,bm:0,nm:"Fill 1",mn:"ADBE Vector Graphic - Fill",hd:!1},{ty:"tr",p:{a:0,k:[-123,241],ix:2},a:{a:0,k:[1,241],ix:1},s:{a:1,k:[{i:{x:[.667,.667],y:[1,1]},o:{x:[.167,.167],y:[0,.167]},t:1,s:[100,0]},{i:{x:[.667,.667],y:[1,1]},o:{x:[.167,.167],y:[0,.167]},t:8,s:[100,40]},{i:{x:[.667,.667],y:[1,1]},o:{x:[.167,.167],y:[0,.167]},t:20,s:[100,10]},{i:{x:[.667,.667],y:[1,1]},o:{x:[.167,.167],y:[0,.167]},t:25,s:[100,70]},{i:{x:[.667,.667],y:[1,1]},o:{x:[.167,.167],y:[0,.167]},t:37,s:[100,20]},{i:{x:[.667,.667],y:[1,1]},o:{x:[.167,.167],y:[0,.167]},t:42,s:[100,30]},{i:{x:[.667,.667],y:[1,1]},o:{x:[.167,.167],y:[0,.167]},t:47,s:[100,15]},{i:{x:[.667,.667],y:[1,1]},o:{x:[.167,.167],y:[0,.167]},t:60,s:[100,85]},{i:{x:[.667,.667],y:[1,1]},o:{x:[.167,.167],y:[0,.167]},t:65,s:[100,30]},{i:{x:[.667,.667],y:[1,1]},o:{x:[.167,.167],y:[0,.167]},t:70,s:[100,50]},{i:{x:[.667,.667],y:[1,1]},o:{x:[.167,.167],y:[0,0]},t:80,s:[100,0]},{i:{x:[.667,.667],y:[1,1]},o:{x:[.167,.167],y:[0,.167]},t:90,s:[100,0]},{i:{x:[.667,.667],y:[1,1]},o:{x:[.167,.167],y:[0,.167]},t:100,s:[100,48]},{i:{x:[.667,.667],y:[1,1]},o:{x:[.167,.167],y:[0,.167]},t:105,s:[100,71]},{i:{x:[.667,.667],y:[1,1]},o:{x:[.167,.167],y:[0,.167]},t:110,s:[100,23]},{i:{x:[.667,.667],y:[1,1]},o:{x:[.167,.167],y:[0,.167]},t:115,s:[100,38]},{t:119.000004846969,s:[100,0]}],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Rectangle 1",np:3,cix:2,bm:0,ix:1,mn:"ADBE Vector Group",hd:!1}],ip:0,op:120.0000048877,st:0,bm:0},{ddd:0,ind:2,ty:4,nm:"Right",sr:1,ks:{o:{a:0,k:100,ix:11},r:{a:0,k:0,ix:10},p:{a:0,k:[635.5,512,0],ix:2},a:{a:0,k:[-124,0,0],ix:1},s:{a:0,k:[100,100,100],ix:6}},ao:0,shapes:[{ty:"gr",it:[{ty:"rc",d:1,s:{a:0,k:[126,482],ix:2},p:{a:0,k:[0,0],ix:3},r:{a:0,k:522,ix:4},nm:"Rectangle Path 1",mn:"ADBE Vector Shape - Rect",hd:!1},{ty:"st",c:{a:0,k:[.929412004059,.454901990704,.454901990704,1],ix:3},o:{a:0,k:100,ix:4},w:{a:0,k:0,ix:5},lc:1,lj:1,ml:4,bm:0,nm:"Stroke 1",mn:"ADBE Vector Graphic - Stroke",hd:!1},{ty:"fl",c:{a:0,k:[1,1,1,1],ix:4},o:{a:0,k:100,ix:5},r:1,bm:0,nm:"Fill 1",mn:"ADBE Vector Graphic - Fill",hd:!1},{ty:"tr",p:{a:0,k:[-124,0],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Rectangle 1",np:3,cix:2,bm:0,ix:1,mn:"ADBE Vector Group",hd:!1}],ip:0,op:120.0000048877,st:0,bm:0},{ddd:0,ind:3,ty:4,nm:"Left Fill",sr:1,ks:{o:{a:0,k:100,ix:11},r:{a:0,k:0,ix:10},p:{a:0,k:[388,753,0],ix:2},a:{a:0,k:[-124,241,0],ix:1},s:{a:0,k:[100,100,100],ix:6}},ao:0,hasMask:!0,masksProperties:[{inv:!1,mode:"a",pt:{a:0,k:{i:[[0,0],[0,0],[0,0],[0,0],[-33.931,0],[0,0],[0,33.966],[0,0]],o:[[0,0],[0,0],[0,0],[0,33.931],[0,0],[33.965,0],[0,0],[0,0]],v:[[-61,-241],[-187,-241],[-187,-241],[-187,179.562],[-125.562,241],[-122.5,241],[-61,179.5],[-61,-241]],c:!0},ix:1},o:{a:0,k:100,ix:3},x:{a:0,k:0,ix:4},nm:"Mask 1"}],shapes:[{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:0,k:{i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[63,-241],[63,241],[-63,241],[-63,-241]],c:!0},ix:2},nm:"Path 1",mn:"ADBE Vector Shape - Group",hd:!1},{ty:"st",c:{a:0,k:[.929412004059,.454901990704,.454901990704,1],ix:3},o:{a:0,k:100,ix:4},w:{a:0,k:0,ix:5},lc:1,lj:1,ml:4,bm:0,nm:"Stroke 1",mn:"ADBE Vector Graphic - Stroke",hd:!1},{ty:"fl",c:{a:0,k:[.639215686275,.756862745098,1,1],ix:4},o:{a:0,k:100,ix:5},r:1,bm:0,nm:"Fill 1",mn:"ADBE Vector Graphic - Fill",hd:!1},{ty:"tr",p:{a:0,k:[-123,241],ix:2},a:{a:0,k:[1,241],ix:1},s:{a:1,k:[{i:{x:[.667,.667],y:[1,1]},o:{x:[.167,.167],y:[0,.167]},t:1,s:[100,0]},{i:{x:[.667,.667],y:[1,1]},o:{x:[.167,.167],y:[0,.167]},t:8,s:[100,40]},{i:{x:[.667,.667],y:[1,1]},o:{x:[.167,.167],y:[0,.167]},t:20,s:[100,10]},{i:{x:[.667,.667],y:[1,1]},o:{x:[.167,.167],y:[0,.167]},t:25,s:[100,70]},{i:{x:[.667,.667],y:[1,1]},o:{x:[.167,.167],y:[0,.167]},t:37,s:[100,20]},{i:{x:[.667,.667],y:[1,1]},o:{x:[.167,.167],y:[0,.167]},t:42,s:[100,30]},{i:{x:[.667,.667],y:[1,1]},o:{x:[.167,.167],y:[0,.167]},t:47,s:[100,15]},{i:{x:[.667,.667],y:[1,1]},o:{x:[.167,.167],y:[0,.167]},t:60,s:[100,85]},{i:{x:[.667,.667],y:[1,1]},o:{x:[.167,.167],y:[0,.167]},t:65,s:[100,30]},{i:{x:[.667,.667],y:[1,1]},o:{x:[.167,.167],y:[0,.167]},t:70,s:[100,50]},{i:{x:[.667,.667],y:[1,1]},o:{x:[.167,.167],y:[0,0]},t:80,s:[100,0]},{i:{x:[.667,.667],y:[1,1]},o:{x:[.167,.167],y:[0,.167]},t:90,s:[100,0]},{i:{x:[.667,.667],y:[1,1]},o:{x:[.167,.167],y:[0,.167]},t:100,s:[100,48]},{i:{x:[.667,.667],y:[1,1]},o:{x:[.167,.167],y:[0,.167]},t:105,s:[100,71]},{i:{x:[.667,.667],y:[1,1]},o:{x:[.167,.167],y:[0,.167]},t:110,s:[100,23]},{i:{x:[.667,.667],y:[1,1]},o:{x:[.167,.167],y:[0,.167]},t:115,s:[100,38]},{t:119.000004846969,s:[100,0]}],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Rectangle 1",np:3,cix:2,bm:0,ix:1,mn:"ADBE Vector Group",hd:!1}],ip:0,op:120.0000048877,st:0,bm:0},{ddd:0,ind:4,ty:4,nm:"Left ",sr:1,ks:{o:{a:0,k:100,ix:11},r:{a:0,k:0,ix:10},p:{a:0,k:[388,512,0],ix:2},a:{a:0,k:[-124,0,0],ix:1},s:{a:0,k:[100,100,100],ix:6}},ao:0,shapes:[{ty:"gr",it:[{ty:"rc",d:1,s:{a:0,k:[126,482],ix:2},p:{a:0,k:[0,0],ix:3},r:{a:0,k:522,ix:4},nm:"Rectangle Path 1",mn:"ADBE Vector Shape - Rect",hd:!1},{ty:"st",c:{a:0,k:[.929412004059,.454901990704,.454901990704,1],ix:3},o:{a:0,k:100,ix:4},w:{a:0,k:0,ix:5},lc:1,lj:1,ml:4,bm:0,nm:"Stroke 1",mn:"ADBE Vector Graphic - Stroke",hd:!1},{ty:"fl",c:{a:0,k:[1,1,1,1],ix:4},o:{a:0,k:100,ix:5},r:1,bm:0,nm:"Fill 1",mn:"ADBE Vector Graphic - Fill",hd:!1},{ty:"tr",p:{a:0,k:[-124,0],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Rectangle 1",np:3,cix:2,bm:0,ix:1,mn:"ADBE Vector Group",hd:!1}],ip:0,op:120.0000048877,st:0,bm:0}],$e=[],Be={v:Re,meta:De,fr:ze,ip:Pe,op:Ce,w:Ae,h:Ve,nm:Me,ddd:Ge,assets:Fe,layers:Le,markers:$e},Oe=()=>{const e=l.useRef(null);return l.useEffect(()=>{const o=document.getElementById("lottie-equalizer");return o&&(e.current=Z.loadAnimation({container:o,animationData:Be,loop:!0,autoplay:!0})),()=>{e.current&&e.current.destroy()}},[]),s.jsx("div",{id:"lottie-equalizer",style:{width:"40px",height:"40px"}})},Ne=()=>{const e=l.useRef(null),[o,t]=l.useState(0),n=G(),i=R(h=>h.setSelectedNode),[d,f]=j(h=>[h.sidebarIsOpen,h.setSidebarOpen]),[a,r,c,x,g,k]=te(h=>[h.isPlaying,h.setIsPlaying,h.playingTime,h.playingNode,h.miniPlayerIsVisible,h.setMiniPlayerIsVisible]),[p,F]=x!=null&&x.timestamp?x.timestamp.split("-").map(h=>se(h)):[0,0],L=(c-p)/(F-p)*100;l.useEffect(()=>{var D,z;const h=((D=e.current)==null?void 0:D.offsetWidth)||0,N=((z=e.current)==null?void 0:z.scrollWidth)||0;t(N-h)},[]);const $=h=>{k(!1),h.stopPropagation()},B=()=>{i(x),f(!0)},O=d&&(n==null?void 0:n.ref_id)!==(x==null?void 0:x.ref_id)||x&&!d;return g&&x&&O?s.jsxs(We,{onClick:B,children:[s.jsxs(He,{children:[s.jsx(oe,{src:x.image_url||"",type:x.node_type}),s.jsxs(qe,{children:[s.jsxs(Je,{ref:e,children:[s.jsx(Ke,{className:"title",scrollValue:o,children:x.episode_title}),s.jsx("div",{className:"subtitle",children:x.show_title})]}),s.jsx(Xe,{onClick:h=>{r(!a),h.stopPropagation()},size:"small",children:a?s.jsx(Oe,{}):s.jsx(ne,{})})]}),s.jsx(Ue,{onClick:h=>$(h),children:s.jsx(ie,{})})]}),s.jsx(Ye,{value:L,variant:"determinate"})]}):null},We=y(u).attrs({direction:"column",align:"stretch",justify:"space-between"})`
  padding: 8px;
  background: ${m.BG1};
  border-radius: 6px;
  width: 320px;
  height: 72px;
  margin-top: 16px;
  cursor: pointer;
  z-index: 0;
`,He=y(u).attrs({direction:"row",align:"center",justify:"flex-start"})``,qe=y(u).attrs({direction:"row",align:"center",justify:"space-between"})`
  flex: 1;
  color: ${m.white};
  margin-left: 11px;

  .title {
    font-size: 13px;
    margin-bottom: 2px;
    font-weight: 500;
  }

  .subtitle {
    font-size: 11px;
    color: ${m.GRAY6};
  }
`,Ue=y(M)`
  padding: 8px;
  color: ${m.GRAY6};
  z-index: 100000;
`,Xe=y(M)`
  && {
    font-size: 36px;
    padding: 2px;
    margin-left: 8px;
    overflow: hidden;
    z-index: 100000;
  }
`,Ye=y(ee)`
  && {
    flex-shrink: 0;
    height: 2px;
    background-color: ${m.white};
    color: blue;

    .MuiLinearProgress-bar {
      background: rgb(65, 90, 127);
    }
  }
`,Ke=y.div`
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
`,Je=y(u)`
  overflow: hidden;
  flex: 1;
`,Qe=()=>{const e=G(),o=R(t=>t.isFetching);return s.jsxs(Ze,{align:"flex-end",id:"actions-toolbar",children:[!o&&s.jsx(Te,{}),!o&&s.jsx(ae,{}),s.jsx(Ne,{},e==null?void 0:e.ref_id)]})},Ze=y(u)`
  position: absolute;
  right: 20px;
  bottom: 20px;
  pointer-events: all;
`,et=()=>{const e=j(o=>o.appMetaData);return s.jsxs(tt,{children:[s.jsxs(st,{children:[s.jsx(s.Fragment,{children:e.title&&s.jsx(b,{className:"title",color:"white",children:e.title})}),s.jsx(b,{className:"subtitle",children:" Second Brain"})]}),s.jsx(re,{})]})},tt=y(u).attrs({align:"center",direction:"row",grow:1,justify:"flex-start"})`
  height: 64px;
  position: absolute;
  top: 0px;
  left: 64px;
  right: 32px;
  transition: opacity 1s;
  z-index: 99;
  padding: 20px 23px;
`,st=y.div`
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
    color: ${m.GRAY6};
    font-family: Barlow;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0.22px;
  }
`,ot=()=>{const[e,o]=l.useState(!0),t=ce();l.useEffect(()=>{o(!0)},[t]);const n=()=>{o(!1)};return t&&e?s.jsxs(nt,{align:"center",direction:"column",justify:"center",onClick:n,children:[s.jsx("img",{alt:"screen",src:"jamboard_kiosk.png"}),s.jsxs(u,{align:"center",direction:"column",justify:"center",children:[s.jsx(E,{children:"Second Brain is currently"}),s.jsx(E,{style:{fontWeight:600},children:"optimized for Desktop."}),s.jsx(E,{children:"Mobile support coming soon."})]}),s.jsx(V,{color:"secondary",onClick:n,variant:"contained",children:"Got It"})]}):null},nt=y(u)`
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.75);
  gap: 28px;
  z-index: 2000000000;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`,E=y(b)`
  color: #fff;
  text-align: center;
  font-family: Barlow;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  margin: 1px;
`,it={},at=l.createContext(it),rt=()=>{const[e,o]=l.useState(!1),t=l.useMemo(()=>({isShow:e,setIsShow:o}),[e]);return s.jsx(at.Provider,{value:t})},ct=l.lazy(()=>_(()=>import("./index-98ab1f26.js"),["assets/index-98ab1f26.js","assets/index-8fb39b9b.js","assets/index-3f17fe3b.css","assets/index-d1e98921.js","assets/index-2142cd26.js","assets/react-toastify.esm-309129e5.js","assets/react-toastify-b60658ac.css","assets/index-de4887cb.js","assets/useSlotProps-54c1e557.js","assets/index-f15bce2a.js","assets/index.esm-b92f54d4.js","assets/InfoIcon-624f7e1b.js"]).then(({SettingsModal:e})=>({default:e}))),lt=l.lazy(()=>_(()=>import("./index-ec7b7703.js"),["assets/index-ec7b7703.js","assets/index-8fb39b9b.js","assets/index-3f17fe3b.css","assets/react-toastify.esm-309129e5.js","assets/react-toastify-b60658ac.css","assets/index-d1e98921.js","assets/index-2142cd26.js","assets/toastMessage-a352e0aa.js","assets/index.esm-b92f54d4.js","assets/CheckIcon-1674d40c.js","assets/index-f15bce2a.js","assets/InfoIcon-624f7e1b.js"]).then(({AddContentModal:e})=>({default:e}))),dt=l.lazy(()=>_(()=>import("./index-c0445c88.js"),["assets/index-c0445c88.js","assets/index-8fb39b9b.js","assets/index-3f17fe3b.css","assets/react-toastify.esm-309129e5.js","assets/react-toastify-b60658ac.css","assets/index-d1e98921.js","assets/index-2142cd26.js","assets/toastMessage-a352e0aa.js","assets/index.esm-b92f54d4.js","assets/CheckIcon-1674d40c.js","assets/index-f15bce2a.js","assets/InfoIcon-624f7e1b.js","assets/index-5dbd5e1f.js","assets/index-00e5eb55.js","assets/Popover-4ea0b0f3.js","assets/useSlotProps-54c1e557.js","assets/Select-8b318c96.js","assets/Stack-8f597c7d.js","assets/Popper-5dbe1926.js"]).then(({AddItemModal:e})=>({default:e}))),xt=l.lazy(()=>_(()=>import("./index-379dc44a.js"),["assets/index-379dc44a.js","assets/index-8fb39b9b.js","assets/index-3f17fe3b.css","assets/index-d1e98921.js","assets/index-2142cd26.js","assets/react-toastify.esm-309129e5.js","assets/react-toastify-b60658ac.css","assets/NoFilterResultIcon-1d8f9657.js","assets/ChevronUpIcon-382d4c4c.js","assets/index-de4887cb.js","assets/useSlotProps-54c1e557.js","assets/Popover-4ea0b0f3.js","assets/index.esm-b92f54d4.js","assets/index-f15bce2a.js","assets/InfoIcon-624f7e1b.js","assets/index-c1af42f5.js","assets/Popper-5dbe1926.js","assets/CheckIcon-1674d40c.js","assets/SettingsIcon-584691d5.js"]).then(({SourcesTableModal:e})=>({default:e}))),pt=l.lazy(()=>_(()=>import("./index-28066a86.js"),["assets/index-28066a86.js","assets/index-8fb39b9b.js","assets/index-3f17fe3b.css","assets/index-d1e98921.js","assets/index-2142cd26.js","assets/react-toastify.esm-309129e5.js","assets/react-toastify-b60658ac.css","assets/index-c1af42f5.js","assets/index-f15bce2a.js","assets/index.esm-b92f54d4.js","assets/InfoIcon-624f7e1b.js","assets/Skeleton-bf439451.js"]).then(({EditNodeNameModal:e})=>({default:e}))),ft=l.lazy(()=>_(()=>import("./index-9ad5e497.js"),["assets/index-9ad5e497.js","assets/index-8fb39b9b.js","assets/index-3f17fe3b.css","assets/index-d1e98921.js","assets/index-2142cd26.js","assets/react-toastify.esm-309129e5.js","assets/react-toastify-b60658ac.css","assets/Skeleton-bf439451.js"]).then(({RemoveNodeModal:e})=>({default:e}))),ht=l.lazy(()=>_(()=>import("./index-a0387582.js"),["assets/index-a0387582.js","assets/index-8fb39b9b.js","assets/index-3f17fe3b.css","assets/index-d1e98921.js","assets/index-2142cd26.js","assets/react-toastify.esm-309129e5.js","assets/react-toastify-b60658ac.css","assets/index-5dbd5e1f.js","assets/index-00e5eb55.js","assets/Popover-4ea0b0f3.js","assets/useSlotProps-54c1e557.js","assets/Select-8b318c96.js","assets/Stack-8f597c7d.js","assets/Popper-5dbe1926.js"]).then(({AddNodeEdgeModal:e})=>({default:e}))),ut=()=>s.jsxs(s.Fragment,{children:[s.jsx(dt,{}),s.jsx(lt,{}),s.jsx(ct,{}),s.jsx(pt,{}),s.jsx(ft,{}),s.jsx(xt,{}),s.jsx(ht,{})]}),yt=y(le)`
  .Toastify__toast {
    background-color: ${m.body};
  }
  .Toastify__toast-body {
    background-color: ${m.body};
    color: ${m.white};
  }
  .Toastify__close-button {
    color: ${m.white};
  }
  .Toastify__progress-bar--error {
    background-color: ${m.primaryRed};
  }
  .Toastify__progress-bar--success {
    background-color: ${m.primaryGreen};
  }
`,mt=y(u)(({theme:e})=>({position:"absolute",top:"65px",right:"55px",width:"300px",pointerEvents:"none",background:m.dashboardHeader,boxShadow:"0px 1px 6px rgba(0, 0, 0, 0.1)",color:m.primaryText1,zIndex:100,transition:"opacity 0.6s",padding:e.spacing(2,3),[e.breakpoints.down("sm")]:{padding:e.spacing(1,1.5)}})),gt=({node:e})=>{const[o,t]=l.useState({}),[n,i]=l.useState(!1),{node_type:d,name:f,ref_id:a}=e;return l.useEffect(()=>{(async()=>{i(!0);try{const c=await we(a);c!=null&&c.properties&&t(c.properties)}catch(c){console.error(c)}finally{i(!1)}})()},[a]),e?s.jsx(mt,{align:"flex-start",borderRadius:8,px:24,py:16,children:s.jsxs(s.Fragment,{children:[s.jsx(u,{direction:"row",mb:12,children:s.jsx(u,{align:"flex-start",children:s.jsx(b,{children:d==null?void 0:d.toUpperCase()})})}),s.jsx(u,{direction:"row",mb:12,children:s.jsx(u,{align:"flex-start",children:s.jsx(b,{children:f})})}),n?s.jsx(de,{color:m.white}):Object.entries(o).map(([r,c])=>s.jsxs(u,{direction:"row",justify:"flex-start",mb:12,children:[s.jsx(u,{children:s.jsxs(b,{children:[r,": "]})}),s.jsx(u,{ml:8,children:s.jsx(b,{children:c})})]},r))]})}):null},kt=y(u)(({theme:e})=>({position:"absolute",top:"65px",left:"55px",width:"300px",pointerEvents:"none",background:m.dashboardHeader,boxShadow:"0px 1px 6px rgba(0, 0, 0, 0.1)",color:m.primaryText1,zIndex:100,transition:"opacity 0.6s",padding:e.spacing(2,3),[e.breakpoints.down("sm")]:{padding:e.spacing(1,1.5)}})),_t=()=>{const[e]=S(o=>[o.nodeTypes]);return s.jsx(kt,{align:"flex-start",borderRadius:8,px:24,py:16,children:s.jsx(s.Fragment,{children:e.map(o=>s.jsx(u,{direction:"row",justify:"flex-start",mb:12,children:s.jsx(b,{children:o})},o))})})},bt=()=>{const[e]=S(o=>[o.selectedNode]);return s.jsxs(jt,{children:[s.jsx(_t,{}),s.jsx("div",{id:"tooltip-portal"}),e&&s.jsx("div",{id:"tooltip-portal",children:s.jsx(gt,{node:e})}),s.jsx(xe,{})]})},jt=y("div")(({theme:e})=>({position:"absolute",zIndex:1,top:0,left:0,userSelect:"none",pointerEvents:"none",display:"flex",justifyContent:"flex-end",alignItems:"flex-start",height:"100%",width:"100%",padding:"16px",[e.breakpoints.down("sm")]:{top:50}})),wt=y(u)`
  height: 100%;
  width: 100%;
  background-color: ${m.black};
`,St=y(u)`
  position: absolute;
  bottom: 8px;
  left: 8px;
  color: ${m.white};
  font-size: 12px;
  opacity: 0.5;
`,vt=l.lazy(()=>_(()=>import("./index-176a7901.js"),["assets/index-176a7901.js","assets/index-8fb39b9b.js","assets/index-3f17fe3b.css","assets/SourcesTableIcon-bc4de8e0.js","assets/SettingsIcon-584691d5.js","assets/index-2142cd26.js"]).then(({MainToolbar:e})=>({default:e}))),Et=l.lazy(()=>_(()=>import("./index-44e289d2.js"),["assets/index-44e289d2.js","assets/index-8fb39b9b.js","assets/index-3f17fe3b.css","assets/EditIcon-2d523fc9.js","assets/react-toastify.esm-309129e5.js","assets/react-toastify-b60658ac.css","assets/index.esm-b92f54d4.js","assets/PlusIcon-065cebf6.js","assets/index-2142cd26.js"]).then(({Universe:e})=>({default:e})));l.lazy(()=>_(()=>import("./index-837554d7.js"),["assets/index-837554d7.js","assets/index-8fb39b9b.js","assets/index-3f17fe3b.css","assets/react-toastify.esm-309129e5.js","assets/react-toastify-b60658ac.css","assets/SoundIcon-1009102e.js","assets/Select-8b318c96.js","assets/Popover-4ea0b0f3.js","assets/useSlotProps-54c1e557.js","assets/ChevronUpIcon-382d4c4c.js","assets/generateCategoricalChart-14368135.js","assets/InfoIcon-624f7e1b.js","assets/CheckIcon-1674d40c.js","assets/index.esm-b92f54d4.js","assets/toastMessage-a352e0aa.js","assets/SoundIcon-6125620a.css","assets/index-00e5eb55.js","assets/Skeleton-bf439451.js","assets/PlusIcon-065cebf6.js","assets/index-2142cd26.js","assets/index-d1e98921.js"]).then(({SideBar:e})=>({default:e})));const Tt=()=>{const[e,o]=X(p=>[p.setBudget,p.setNodeCount]),[t,n,i,d,f]=[j(p=>p.setSidebarOpen),j(p=>p.currentSearch),j(p=>p.setCurrentSearch),j(p=>p.setRelevanceSelected),j(p=>p.setTranscriptOpen)],[a,r]=S(p=>[p.fetchData,p.setSelectedNode]),c=pe(),x=fe({mode:"onChange"});x.handleSubmit(({search:p})=>{f(!1),r(null),d(!1),i(p)});const g=l.useCallback(async()=>{await a(e,{word:n??""}),t(!0),n&&await Y(e)},[a,n,t,e]);l.useEffect(()=>{g()},[n,g]);const k=l.useCallback(()=>{o("INCREMENT")},[o]);return l.useEffect(()=>{c&&(c.on("connect_error",p=>{console.error("Socket connection error:",p)}),c.on("newnode",k))},[c,k]),l.useEffect(()=>()=>{c&&c.disconnect()},[c]),s.jsxs(s.Fragment,{children:[s.jsx(he,{}),s.jsx(ot,{}),s.jsx(ue,{hidden:!A}),s.jsx(l.Suspense,{fallback:s.jsx("div",{children:"Loading..."}),children:s.jsxs(wt,{direction:"row",children:[s.jsxs(ye,{...x,children:[s.jsx(vt,{}),!1,s.jsx(Et,{}),s.jsx(et,{}),s.jsxs(St,{children:["v",me]}),s.jsx(Qe,{}),s.jsx(bt,{})]}),s.jsx(ut,{}),s.jsx(yt,{}),s.jsx(rt,{})]})})]})},Pt=Object.freeze(Object.defineProperty({__proto__:null,AppNew:Tt},Symbol.toStringTag,{value:"Module"}));export{S as a,Dt as f,Pt as i,zt as u};
