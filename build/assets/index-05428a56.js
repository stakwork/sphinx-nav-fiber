import{V as P,U as R,P as V,W as X,X as Y,Z as q,$ as K,a0 as Q,f as u,i as z,j as s,r as d,a1 as Z,h,F as p,a2 as J,a3 as B,k as b,n as ee,T as j,S as te,m as _,x as se,O as oe}from"./index-6865c215.js";import{B as $,e as ne,I as G,f as re,g as ae,A as ie,P as ce,b as F,h as le,u as de,Q as xe,C as M,i as pe,S as he,a as ue,d as fe,c as ye,G as me,L as ge,F as ke,v as _e}from"./react-toastify.esm-22bb4a54.js";import{S as be}from"./index-cc4c88c0.js";const v=[...E("Topic",20),{name:"bitcoin",edge_count:0,node_type:"Topic",ref_id:"b30aeba5-54a8-4227-8f05-79798a721996"},{name:"bitcoin",edge_count:0,node_type:"Topic",ref_id:"fc3a46e2-28ec-4a5f-9836-8308ef515005"},...E("Organization",20),...E("People",2)];[...A(v.filter(e=>e.node_type==="Topic"),v.filter(e=>e.node_type==="Organization")),...A(v.filter(e=>e.node_type==="Topic"),v.filter(e=>e.node_type==="People"))];function E(e,o){const t=[];for(let n=0;n<o;n+=1){const r=e,l={edge_count:Math.floor(Math.random()*10),node_type:r,name:`${r} name ${n}`,ref_id:`ref_id_${r}_${n}`};t.push(l)}return t}function A(e,o){const t=[];for(let n=0;n<o.length;n+=1){const r={attributes:{decision_type:"ML"},edge_type:"RELATED_TO",source:e[n].ref_id,target:o[n].ref_id,ref_id:`ref_id__${n}`};t.push(r)}return t}function je(e,o,t,n){const r={};return e.map(f=>{const a=f.edge_count||0,i=t.radius-t.radius*a/o;let c;a in r?c=r[a]:(c=Math.random()*300,r[a]=c);const x=i+c,g=Math.random()*Math.PI*2;return{...f,x:t.x+x*Math.cos(g),y:n,z:t.z+x*Math.sin(g)}})}const we=300,Se=(e,o)=>{const t=e.reduce((a,i)=>(a[i.node_type]?a[i.node_type].push(i):a[i.node_type]=[i],a),{}),n=Object.keys(t),r={x:0,y:0,z:0,radius:1e3},l=n.reduce((a,i,c)=>{const x=c%2===0?c/2:-Math.ceil(c/2),g=Math.max(...t[i].map(w=>w.edge_count||0),1),k=je(t[i],g,r,x*we);return[...a,...k]},[]),f=o.map(a=>{const i=l.find(k=>k.ref_id===a.source),c=l.find(k=>k.ref_id===a.target),x=new P((i==null?void 0:i.x)||0,(i==null?void 0:i.y)||0,(i==null?void 0:i.z)||0),g=new P((c==null?void 0:c.x)||0,(c==null?void 0:c.y)||0,(c==null?void 0:c.z)||0);return{...a,sourcePosition:x,targetPosition:g}});return{nodes:l,links:f,nodeTypes:n}},I={links:[],nodes:[]},ve=async(e,o,t)=>{try{return Ie(e,o,t)}catch{return console.log(I),I}},Ee=async(e,o)=>{new URLSearchParams({...V||X?{free:"true"}:{},...o}).toString();try{return await R.get("/prediction/graph/search?top_node_count=5&limit=5"+(o.word?`&word=${o.word}`:""))}catch(t){return console.error(t),null}return null},Te=async e=>{try{return await R.get(`/node/${e}`)}catch(o){return console.error(o),null}return null},Gt=async(e,o)=>{try{return await R.get(`/prediction/graph/edges/${e}?skip=${o}&limit=4&sort_by="edge_count"`)}catch(t){return console.error(t),null}return null},Ie=async(e,o,t)=>{try{const r=await Ee(o,t);if(r)return Re(r,e)}catch(n){return console.error(n),I}},Re=(e,o)=>{let{edges:t,nodes:n}=e;return console.log(o),Se(n,t)},ze={data:null,selectionGraphData:{nodes:[],links:[]},disableCameraRotation:!1,graphRadius:Y?1600:3056,graphStyle:localStorage.getItem("graphStyle")||"sphere",hoveredNode:null,selectedNode:null,cameraFocusTrigger:!1,selectedNodeRelativeIds:[],nearbyNodeIds:[],showSelectionGraph:!1,nodesNormalized:{},edgesNormalized:{},isFetching:!1,nodeTypes:[]},S=q()(K((e,o)=>({...ze,fetchData:async(t,n)=>{if(o().isFetching)return;e({isFetching:!0});const r=await ve(o().graphStyle,t,n??{}),l={};r==null||r.nodes.forEach(a=>{const i=a.ref_id;i&&(l[i]=a)});const f={};r==null||r.links.forEach(a=>{const i=`${a.source}-${a.target}`;i&&(f[i]=a)}),n!=null&&n.word&&await Q(),e({data:{nodes:(r==null?void 0:r.nodes)||[],links:(r==null?void 0:r.links)||[]},nodeTypes:r==null?void 0:r.nodeTypes,nodesNormalized:l,edgesNormalized:f,isFetching:!1,disableCameraRotation:!1,nearbyNodeIds:[],selectedNodeRelativeIds:[],showSelectionGraph:!1})},setIsFetching:t=>e({isFetching:t}),setData:t=>e({data:t}),removeLink:(t,n)=>{const{data:r,selectedNodeRelativeIds:l}=o();if(r){const{nodes:f,links:a}=r;e({data:{nodes:f,links:a.filter(i=>i.ref_id!==t)},selectedNodeRelativeIds:l.filter(i=>i!==n)})}},setSelectionData:t=>e({selectionGraphData:t}),setDisableCameraRotation:t=>e({disableCameraRotation:t}),setGraphRadius:t=>e({graphRadius:t}),setGraphStyle:t=>e({graphStyle:t}),setHoveredNode:t=>e({hoveredNode:t}),setSelectedNode:t=>{const n=o().selectedNode;if((n==null?void 0:n.ref_id)!==(t==null?void 0:t.ref_id)){const{data:r}=o(),l=[];t!=null&&t.ref_id&&(r==null||r.links.forEach(f=>{f.target===(t==null?void 0:t.ref_id)&&l.push(f.source),f.source===(t==null?void 0:t.ref_id)&&l.push(f.target)})),e({hoveredNode:null,selectedNode:t,showSelectionGraph:!!(t!=null&&t.ref_id),disableCameraRotation:!0,selectedNodeRelativeIds:l,...t!=null&&t.ref_id?{}:{selectionGraphData:{nodes:[],links:[]}}})}},setSelectedNodeRelativeIds:t=>e({selectedNodeRelativeIds:t}),setCameraFocusTrigger:t=>e({cameraFocusTrigger:t}),setNearbyNodeIds:t=>{const n=o().nearbyNodeIds;(t.length!==n.length||t[0]!==n[0])&&e({nearbyNodeIds:t})},setShowSelectionGraph:t=>e({showSelectionGraph:t}),addNewNode:t=>{const{data:n}=o();if(!n)return;const r={...n,nodes:[t,...n.nodes]};e({data:r})},addNewLink:t=>{const{data:n}=o();if(!n)return;const r=n.nodes.map(a=>a.ref_id===t.source||a.ref_id===t.target?{...a,edge_count:(a.edge_count||0)+1}:a),f={links:[...n.links,t],nodes:r};e({data:f})}}))),Ft=()=>S(e=>e.selectedNode),De=()=>{const[e,o]=z(t=>[t.cameraFocusTrigger,t.setCameraFocusTrigger]);return s.jsx(Ce,{href:"",onClick:()=>o(!e),size:"medium",startIcon:s.jsx(ne,{})})},Ce=u($)`
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
`,Pe="4.8.0",Ae={g:"LottieFiles AE 1.1.0",a:"",k:"",d:"",tc:""},Ve=29.9700012207031,Be=0,$e=120.0000048877,Ge=1024,Fe=1024,Me="Pause_loop_Final",Le=0,Oe=[],Ne=[{ddd:0,ind:1,ty:4,nm:"Right Fill",sr:1,ks:{o:{a:0,k:100,ix:11},r:{a:0,k:0,ix:10},p:{a:0,k:[635.5,753,0],ix:2},a:{a:0,k:[-124,241,0],ix:1},s:{a:0,k:[100,100,100],ix:6}},ao:0,hasMask:!0,masksProperties:[{inv:!1,mode:"a",pt:{a:0,k:{i:[[0,0],[0,0],[0,0],[0,0],[-33.931,0],[0,0],[0,33.966],[0,0]],o:[[0,0],[0,0],[0,0],[0,33.931],[0,0],[33.965,0],[0,0],[0,0]],v:[[-61,-241],[-187,-241],[-187,-241],[-187,179.562],[-125.562,241],[-122.5,241],[-61,179.5],[-61,-241]],c:!0},ix:1},o:{a:0,k:100,ix:3},x:{a:0,k:0,ix:4},nm:"Mask 1"}],shapes:[{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:0,k:{i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[63,-241],[63,241],[-63,241],[-63,-241]],c:!0},ix:2},nm:"Path 1",mn:"ADBE Vector Shape - Group",hd:!1},{ty:"st",c:{a:0,k:[.929412004059,.454901990704,.454901990704,1],ix:3},o:{a:0,k:100,ix:4},w:{a:0,k:0,ix:5},lc:1,lj:1,ml:4,bm:0,nm:"Stroke 1",mn:"ADBE Vector Graphic - Stroke",hd:!1},{ty:"fl",c:{a:0,k:[.639215686275,.756862745098,1,1],ix:4},o:{a:0,k:100,ix:5},r:1,bm:0,nm:"Fill 1",mn:"ADBE Vector Graphic - Fill",hd:!1},{ty:"tr",p:{a:0,k:[-123,241],ix:2},a:{a:0,k:[1,241],ix:1},s:{a:1,k:[{i:{x:[.667,.667],y:[1,1]},o:{x:[.167,.167],y:[0,.167]},t:1,s:[100,0]},{i:{x:[.667,.667],y:[1,1]},o:{x:[.167,.167],y:[0,.167]},t:8,s:[100,40]},{i:{x:[.667,.667],y:[1,1]},o:{x:[.167,.167],y:[0,.167]},t:20,s:[100,10]},{i:{x:[.667,.667],y:[1,1]},o:{x:[.167,.167],y:[0,.167]},t:25,s:[100,70]},{i:{x:[.667,.667],y:[1,1]},o:{x:[.167,.167],y:[0,.167]},t:37,s:[100,20]},{i:{x:[.667,.667],y:[1,1]},o:{x:[.167,.167],y:[0,.167]},t:42,s:[100,30]},{i:{x:[.667,.667],y:[1,1]},o:{x:[.167,.167],y:[0,.167]},t:47,s:[100,15]},{i:{x:[.667,.667],y:[1,1]},o:{x:[.167,.167],y:[0,.167]},t:60,s:[100,85]},{i:{x:[.667,.667],y:[1,1]},o:{x:[.167,.167],y:[0,.167]},t:65,s:[100,30]},{i:{x:[.667,.667],y:[1,1]},o:{x:[.167,.167],y:[0,.167]},t:70,s:[100,50]},{i:{x:[.667,.667],y:[1,1]},o:{x:[.167,.167],y:[0,0]},t:80,s:[100,0]},{i:{x:[.667,.667],y:[1,1]},o:{x:[.167,.167],y:[0,.167]},t:90,s:[100,0]},{i:{x:[.667,.667],y:[1,1]},o:{x:[.167,.167],y:[0,.167]},t:100,s:[100,48]},{i:{x:[.667,.667],y:[1,1]},o:{x:[.167,.167],y:[0,.167]},t:105,s:[100,71]},{i:{x:[.667,.667],y:[1,1]},o:{x:[.167,.167],y:[0,.167]},t:110,s:[100,23]},{i:{x:[.667,.667],y:[1,1]},o:{x:[.167,.167],y:[0,.167]},t:115,s:[100,38]},{t:119.000004846969,s:[100,0]}],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Rectangle 1",np:3,cix:2,bm:0,ix:1,mn:"ADBE Vector Group",hd:!1}],ip:0,op:120.0000048877,st:0,bm:0},{ddd:0,ind:2,ty:4,nm:"Right",sr:1,ks:{o:{a:0,k:100,ix:11},r:{a:0,k:0,ix:10},p:{a:0,k:[635.5,512,0],ix:2},a:{a:0,k:[-124,0,0],ix:1},s:{a:0,k:[100,100,100],ix:6}},ao:0,shapes:[{ty:"gr",it:[{ty:"rc",d:1,s:{a:0,k:[126,482],ix:2},p:{a:0,k:[0,0],ix:3},r:{a:0,k:522,ix:4},nm:"Rectangle Path 1",mn:"ADBE Vector Shape - Rect",hd:!1},{ty:"st",c:{a:0,k:[.929412004059,.454901990704,.454901990704,1],ix:3},o:{a:0,k:100,ix:4},w:{a:0,k:0,ix:5},lc:1,lj:1,ml:4,bm:0,nm:"Stroke 1",mn:"ADBE Vector Graphic - Stroke",hd:!1},{ty:"fl",c:{a:0,k:[1,1,1,1],ix:4},o:{a:0,k:100,ix:5},r:1,bm:0,nm:"Fill 1",mn:"ADBE Vector Graphic - Fill",hd:!1},{ty:"tr",p:{a:0,k:[-124,0],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Rectangle 1",np:3,cix:2,bm:0,ix:1,mn:"ADBE Vector Group",hd:!1}],ip:0,op:120.0000048877,st:0,bm:0},{ddd:0,ind:3,ty:4,nm:"Left Fill",sr:1,ks:{o:{a:0,k:100,ix:11},r:{a:0,k:0,ix:10},p:{a:0,k:[388,753,0],ix:2},a:{a:0,k:[-124,241,0],ix:1},s:{a:0,k:[100,100,100],ix:6}},ao:0,hasMask:!0,masksProperties:[{inv:!1,mode:"a",pt:{a:0,k:{i:[[0,0],[0,0],[0,0],[0,0],[-33.931,0],[0,0],[0,33.966],[0,0]],o:[[0,0],[0,0],[0,0],[0,33.931],[0,0],[33.965,0],[0,0],[0,0]],v:[[-61,-241],[-187,-241],[-187,-241],[-187,179.562],[-125.562,241],[-122.5,241],[-61,179.5],[-61,-241]],c:!0},ix:1},o:{a:0,k:100,ix:3},x:{a:0,k:0,ix:4},nm:"Mask 1"}],shapes:[{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:0,k:{i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[63,-241],[63,241],[-63,241],[-63,-241]],c:!0},ix:2},nm:"Path 1",mn:"ADBE Vector Shape - Group",hd:!1},{ty:"st",c:{a:0,k:[.929412004059,.454901990704,.454901990704,1],ix:3},o:{a:0,k:100,ix:4},w:{a:0,k:0,ix:5},lc:1,lj:1,ml:4,bm:0,nm:"Stroke 1",mn:"ADBE Vector Graphic - Stroke",hd:!1},{ty:"fl",c:{a:0,k:[.639215686275,.756862745098,1,1],ix:4},o:{a:0,k:100,ix:5},r:1,bm:0,nm:"Fill 1",mn:"ADBE Vector Graphic - Fill",hd:!1},{ty:"tr",p:{a:0,k:[-123,241],ix:2},a:{a:0,k:[1,241],ix:1},s:{a:1,k:[{i:{x:[.667,.667],y:[1,1]},o:{x:[.167,.167],y:[0,.167]},t:1,s:[100,0]},{i:{x:[.667,.667],y:[1,1]},o:{x:[.167,.167],y:[0,.167]},t:8,s:[100,40]},{i:{x:[.667,.667],y:[1,1]},o:{x:[.167,.167],y:[0,.167]},t:20,s:[100,10]},{i:{x:[.667,.667],y:[1,1]},o:{x:[.167,.167],y:[0,.167]},t:25,s:[100,70]},{i:{x:[.667,.667],y:[1,1]},o:{x:[.167,.167],y:[0,.167]},t:37,s:[100,20]},{i:{x:[.667,.667],y:[1,1]},o:{x:[.167,.167],y:[0,.167]},t:42,s:[100,30]},{i:{x:[.667,.667],y:[1,1]},o:{x:[.167,.167],y:[0,.167]},t:47,s:[100,15]},{i:{x:[.667,.667],y:[1,1]},o:{x:[.167,.167],y:[0,.167]},t:60,s:[100,85]},{i:{x:[.667,.667],y:[1,1]},o:{x:[.167,.167],y:[0,.167]},t:65,s:[100,30]},{i:{x:[.667,.667],y:[1,1]},o:{x:[.167,.167],y:[0,.167]},t:70,s:[100,50]},{i:{x:[.667,.667],y:[1,1]},o:{x:[.167,.167],y:[0,0]},t:80,s:[100,0]},{i:{x:[.667,.667],y:[1,1]},o:{x:[.167,.167],y:[0,.167]},t:90,s:[100,0]},{i:{x:[.667,.667],y:[1,1]},o:{x:[.167,.167],y:[0,.167]},t:100,s:[100,48]},{i:{x:[.667,.667],y:[1,1]},o:{x:[.167,.167],y:[0,.167]},t:105,s:[100,71]},{i:{x:[.667,.667],y:[1,1]},o:{x:[.167,.167],y:[0,.167]},t:110,s:[100,23]},{i:{x:[.667,.667],y:[1,1]},o:{x:[.167,.167],y:[0,.167]},t:115,s:[100,38]},{t:119.000004846969,s:[100,0]}],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Rectangle 1",np:3,cix:2,bm:0,ix:1,mn:"ADBE Vector Group",hd:!1}],ip:0,op:120.0000048877,st:0,bm:0},{ddd:0,ind:4,ty:4,nm:"Left ",sr:1,ks:{o:{a:0,k:100,ix:11},r:{a:0,k:0,ix:10},p:{a:0,k:[388,512,0],ix:2},a:{a:0,k:[-124,0,0],ix:1},s:{a:0,k:[100,100,100],ix:6}},ao:0,shapes:[{ty:"gr",it:[{ty:"rc",d:1,s:{a:0,k:[126,482],ix:2},p:{a:0,k:[0,0],ix:3},r:{a:0,k:522,ix:4},nm:"Rectangle Path 1",mn:"ADBE Vector Shape - Rect",hd:!1},{ty:"st",c:{a:0,k:[.929412004059,.454901990704,.454901990704,1],ix:3},o:{a:0,k:100,ix:4},w:{a:0,k:0,ix:5},lc:1,lj:1,ml:4,bm:0,nm:"Stroke 1",mn:"ADBE Vector Graphic - Stroke",hd:!1},{ty:"fl",c:{a:0,k:[1,1,1,1],ix:4},o:{a:0,k:100,ix:5},r:1,bm:0,nm:"Fill 1",mn:"ADBE Vector Graphic - Fill",hd:!1},{ty:"tr",p:{a:0,k:[-124,0],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Rectangle 1",np:3,cix:2,bm:0,ix:1,mn:"ADBE Vector Group",hd:!1}],ip:0,op:120.0000048877,st:0,bm:0}],We=[],He={v:Pe,meta:Ae,fr:Ve,ip:Be,op:$e,w:Ge,h:Fe,nm:Me,ddd:Le,assets:Oe,layers:Ne,markers:We},Ue=()=>{const e=d.useRef(null);return d.useEffect(()=>{const o=document.getElementById("lottie-equalizer");return o&&(e.current=Z.loadAnimation({container:o,animationData:He,loop:!0,autoplay:!0})),()=>{e.current&&e.current.destroy()}},[]),s.jsx("div",{id:"lottie-equalizer",style:{width:"40px",height:"40px"}})},Xe=()=>{const e=d.useRef(null),[o,t]=d.useState(0),n=B(),r=z(m=>m.setSelectedNode),[l,f]=b(m=>[m.sidebarIsOpen,m.setSidebarOpen]),[a,i,c,x,g,k]=re(m=>[m.isPlaying,m.setIsPlaying,m.playingTime,m.playingNode,m.miniPlayerIsVisible,m.setMiniPlayerIsVisible]),[w,y]=x!=null&&x.timestamp?x.timestamp.split("-").map(m=>ae(m)):[0,0],O=(c-w)/(y-w)*100;d.useEffect(()=>{var D,C;const m=((D=e.current)==null?void 0:D.offsetWidth)||0,U=((C=e.current)==null?void 0:C.scrollWidth)||0;t(U-m)},[]);const N=m=>{k(!1),m.stopPropagation()},W=()=>{r(x),f(!0)},H=l&&(n==null?void 0:n.ref_id)!==(x==null?void 0:x.ref_id)||x&&!l;return g&&x&&H?s.jsxs(Ye,{onClick:W,children:[s.jsxs(qe,{children:[s.jsx(ie,{src:x.image_url||"",type:x.node_type}),s.jsxs(Ke,{children:[s.jsxs(tt,{ref:e,children:[s.jsx(et,{className:"title",scrollValue:o,children:x.episode_title}),s.jsx("div",{className:"subtitle",children:x.show_title})]}),s.jsx(Ze,{onClick:m=>{i(!a),m.stopPropagation()},size:"small",children:a?s.jsx(Ue,{}):s.jsx(ce,{})})]}),s.jsx(Qe,{onClick:m=>N(m),children:s.jsx(F,{})})]}),s.jsx(Je,{value:O,variant:"determinate"})]}):null},Ye=u(p).attrs({direction:"column",align:"stretch",justify:"space-between"})`
  padding: 8px;
  background: ${h.BG1};
  border-radius: 6px;
  width: 320px;
  height: 72px;
  margin-top: 16px;
  cursor: pointer;
  z-index: 0;
`,qe=u(p).attrs({direction:"row",align:"center",justify:"flex-start"})``,Ke=u(p).attrs({direction:"row",align:"center",justify:"space-between"})`
  flex: 1;
  color: ${h.white};
  margin-left: 11px;

  .title {
    font-size: 13px;
    margin-bottom: 2px;
    font-weight: 500;
  }

  .subtitle {
    font-size: 11px;
    color: ${h.GRAY6};
  }
`,Qe=u(G)`
  padding: 8px;
  color: ${h.GRAY6};
  z-index: 100000;
`,Ze=u(G)`
  && {
    font-size: 36px;
    padding: 2px;
    margin-left: 8px;
    overflow: hidden;
    z-index: 100000;
  }
`,Je=u(J)`
  && {
    flex-shrink: 0;
    height: 2px;
    background-color: ${h.white};
    color: blue;

    .MuiLinearProgress-bar {
      background: rgb(65, 90, 127);
    }
  }
`,et=u.div`
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
`,tt=u(p)`
  overflow: hidden;
  flex: 1;
`,st=()=>{const e=B(),o=z(t=>t.isFetching);return s.jsxs(ot,{align:"flex-end",id:"actions-toolbar",children:[!o&&s.jsx(De,{}),!o&&s.jsx(le,{}),s.jsx(Xe,{},e==null?void 0:e.ref_id)]})},ot=u(p)`
  position: absolute;
  right: 20px;
  bottom: 20px;
  pointer-events: all;
`,nt=()=>{const e=b(o=>o.appMetaData);return e?s.jsxs(rt,{children:[s.jsxs(at,{children:[s.jsx(s.Fragment,{children:e.title&&s.jsx(j,{className:"title",color:"white",children:e.title})}),s.jsx(j,{className:"subtitle",children:" Second Brain"})]}),s.jsx(te,{})]}):null},rt=u(p).attrs({align:"center",direction:"row",grow:1,justify:"flex-start"})`
  height: 64px;
  position: absolute;
  top: 0px;
  left: 64px;
  right: 32px;
  transition: opacity 1s;
  z-index: 99;
  padding: 20px 23px;
`,at=u.div`
  ${ee.smallOnly`
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
    color: ${h.GRAY6};
    font-family: Barlow;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0.22px;
  }
`,it=()=>{const[e,o]=d.useState(!0),t=de();d.useEffect(()=>{o(!0)},[t]);const n=()=>{o(!1)};return t&&e?s.jsxs(ct,{align:"center",direction:"column",justify:"center",onClick:n,children:[s.jsx("img",{alt:"screen",src:"jamboard_kiosk.png"}),s.jsxs(p,{align:"center",direction:"column",justify:"center",children:[s.jsx(T,{children:"Second Brain is currently"}),s.jsx(T,{style:{fontWeight:600},children:"optimized for Desktop."}),s.jsx(T,{children:"Mobile support coming soon."})]}),s.jsx($,{color:"secondary",onClick:n,variant:"contained",children:"Got It"})]}):null},ct=u(p)`
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.75);
  gap: 28px;
  z-index: 2000000000;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`,T=u(j)`
  color: #fff;
  text-align: center;
  font-family: Barlow;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  margin: 1px;
`,lt={},dt=d.createContext(lt),xt=()=>{const[e,o]=d.useState(!1),t=d.useMemo(()=>({isShow:e,setIsShow:o}),[e]);return s.jsx(dt.Provider,{value:t})},pt=d.lazy(()=>_(()=>import("./index-02c53a45.js"),["assets/index-02c53a45.js","assets/index-6865c215.js","assets/index-3f17fe3b.css","assets/index-41b2a75e.js","assets/index-27c0e8db.js","assets/react-toastify.esm-22bb4a54.js","assets/react-toastify-b60658ac.css","assets/index-15aedafe.js","assets/useSlotProps-3d116945.js","assets/index-e40a00bc.js","assets/index.esm-6af15a5e.js","assets/InfoIcon-bad0ebb4.js"]).then(({SettingsModal:e})=>({default:e}))),ht=d.lazy(()=>_(()=>import("./index-8c88bb1d.js"),["assets/index-8c88bb1d.js","assets/index-6865c215.js","assets/index-3f17fe3b.css","assets/react-toastify.esm-22bb4a54.js","assets/react-toastify-b60658ac.css","assets/index-41b2a75e.js","assets/index-27c0e8db.js","assets/CheckIcon-c555d9ea.js","assets/index-e40a00bc.js","assets/index.esm-6af15a5e.js","assets/InfoIcon-bad0ebb4.js"]).then(({AddContentModal:e})=>({default:e}))),ut=d.lazy(()=>_(()=>import("./index-b5415b9b.js"),["assets/index-b5415b9b.js","assets/index-6865c215.js","assets/index-3f17fe3b.css","assets/react-toastify.esm-22bb4a54.js","assets/react-toastify-b60658ac.css","assets/index-41b2a75e.js","assets/index-27c0e8db.js","assets/CheckIcon-c555d9ea.js","assets/index-e40a00bc.js","assets/index.esm-6af15a5e.js","assets/InfoIcon-bad0ebb4.js","assets/index-e2b6f25f.js","assets/index-a81519a3.js","assets/Popover-f9928c08.js","assets/useSlotProps-3d116945.js","assets/Popper-3ee49886.js","assets/index-cc4c88c0.js"]).then(({AddItemModal:e})=>({default:e}))),ft=d.lazy(()=>_(()=>import("./index-2099b4dc.js"),["assets/index-2099b4dc.js","assets/index-6865c215.js","assets/index-3f17fe3b.css","assets/index-41b2a75e.js","assets/index-27c0e8db.js","assets/react-toastify.esm-22bb4a54.js","assets/react-toastify-b60658ac.css","assets/NoFilterResultIcon-e651ea7b.js","assets/index-15aedafe.js","assets/useSlotProps-3d116945.js","assets/Popover-f9928c08.js","assets/index.esm-6af15a5e.js","assets/index-e40a00bc.js","assets/InfoIcon-bad0ebb4.js","assets/index-29450604.js","assets/Popper-3ee49886.js","assets/ChevronDownIcon-b496d047.js","assets/CheckIcon-c555d9ea.js","assets/ChevronUpIcon-dc5040b0.js","assets/SettingsIcon-388a106b.js"]).then(({SourcesTableModal:e})=>({default:e}))),yt=d.lazy(()=>_(()=>import("./index-65d4e293.js"),["assets/index-65d4e293.js","assets/index-6865c215.js","assets/index-3f17fe3b.css","assets/index-41b2a75e.js","assets/index-27c0e8db.js","assets/react-toastify.esm-22bb4a54.js","assets/react-toastify-b60658ac.css","assets/index-29450604.js","assets/index-e40a00bc.js","assets/index.esm-6af15a5e.js","assets/InfoIcon-bad0ebb4.js","assets/Skeleton-ea9e95d3.js"]).then(({EditNodeNameModal:e})=>({default:e}))),mt=d.lazy(()=>_(()=>import("./index-61685790.js"),["assets/index-61685790.js","assets/index-6865c215.js","assets/index-3f17fe3b.css","assets/index-41b2a75e.js","assets/index-27c0e8db.js","assets/react-toastify.esm-22bb4a54.js","assets/react-toastify-b60658ac.css","assets/Skeleton-ea9e95d3.js"]).then(({RemoveNodeModal:e})=>({default:e}))),gt=d.lazy(()=>_(()=>import("./index-777bef69.js"),["assets/index-777bef69.js","assets/index-6865c215.js","assets/index-3f17fe3b.css","assets/index-41b2a75e.js","assets/index-27c0e8db.js","assets/react-toastify.esm-22bb4a54.js","assets/react-toastify-b60658ac.css","assets/index-e2b6f25f.js","assets/index-a81519a3.js","assets/Popover-f9928c08.js","assets/useSlotProps-3d116945.js","assets/Popper-3ee49886.js","assets/index-cc4c88c0.js"]).then(({AddNodeEdgeModal:e})=>({default:e}))),kt=()=>s.jsxs(s.Fragment,{children:[s.jsx(ut,{}),s.jsx(ht,{}),s.jsx(pt,{}),s.jsx(yt,{}),s.jsx(mt,{}),s.jsx(ft,{}),s.jsx(gt,{})]}),_t=u(xe)`
  .Toastify__toast {
    background-color: ${h.body};
  }
  .Toastify__toast-body {
    background-color: ${h.body};
    color: ${h.white};
  }
  .Toastify__close-button {
    color: ${h.white};
  }
  .Toastify__progress-bar--error {
    background-color: ${h.primaryRed};
  }
  .Toastify__progress-bar--success {
    background-color: ${h.primaryGreen};
  }
`,bt=u(p)(({theme:e})=>({position:"absolute",top:"65px",right:"55px",width:"300px",pointerEvents:"none",background:h.dashboardHeader,boxShadow:"0px 1px 6px rgba(0, 0, 0, 0.1)",color:h.primaryText1,zIndex:100,transition:"opacity 0.6s",padding:e.spacing(2,3),[e.breakpoints.down("sm")]:{padding:e.spacing(1,1.5)}})),jt=({node:e})=>{const[o,t]=d.useState({}),[n,r]=d.useState(!1),{node_type:l,name:f,ref_id:a}=e;return d.useEffect(()=>{(async()=>{r(!0);try{const c=await Te(a);c!=null&&c.properties&&t(c.properties)}catch(c){console.error(c)}finally{r(!1)}})()},[a]),e?s.jsx(bt,{align:"flex-start",borderRadius:8,px:24,py:16,children:s.jsxs(s.Fragment,{children:[s.jsx(p,{direction:"row",mb:12,children:s.jsx(p,{align:"flex-start",children:s.jsx(j,{children:l==null?void 0:l.toUpperCase()})})}),s.jsx(p,{direction:"row",mb:12,children:s.jsx(p,{align:"flex-start",children:s.jsx(j,{children:f})})}),n?s.jsx(M,{color:h.white}):Object.entries(o).map(([i,c])=>s.jsxs(p,{direction:"row",justify:"flex-start",mb:12,children:[s.jsx(p,{children:s.jsxs(j,{children:[i,": "]})}),s.jsx(p,{ml:8,children:s.jsx(j,{children:c})})]},i))]})}):null},wt=({onSubmit:e})=>{const[o,t]=b(l=>[l.currentSearch,l.clearSearch]),[n]=S(l=>[l.isFetching]),{setValue:r}=pe();return s.jsx(L,{children:s.jsxs(St,{children:[s.jsx(be,{onSubmit:e}),s.jsx(vt,{onClick:()=>{if(o){r("search",""),t();return}e==null||e()},children:n?s.jsx(M,{color:h.SECONDARY_BLUE,size:"20"}):s.jsx(s.Fragment,{children:o?s.jsx(F,{}):s.jsx(he,{})})})]})})},L=u(p).attrs({direction:"column",justify:"center",align:"stretch"})(()=>({"&.has-shadow":{borderBottom:"1px solid rgba(0, 0, 0, 0.25)",background:h.BG1,boxShadow:"0px 1px 6px 0px rgba(0, 0, 0, 0.20)"}})),St=u(p).attrs({direction:"row",justify:"center",align:"center"})`
  flex-grow: 1;
  pointer-events: all;
`,vt=u(p).attrs({align:"center",justify:"center",p:5})`
  font-size: 32px;
  color: ${h.mainBottomIcons};
  cursor: pointer;
  transition-duration: 0.2s;
  margin-left: -42px;
  z-index: 2;

  &:hover {
    /* background-color: ${h.gray200}; */
  }

  ${L} input:focus + & {
    color: ${h.primaryBlue};
  }
`,Et=({onSubmit:e})=>{const[o]=S(t=>[t.nodeTypes]);return s.jsxs(Tt,{align:"stretch",borderRadius:8,px:24,py:16,children:[s.jsx(wt,{onSubmit:e}),s.jsx(p,{mt:24,children:s.jsx(s.Fragment,{children:o.map(t=>s.jsx(p,{direction:"row",justify:"flex-start",mb:12,children:s.jsx(j,{children:t})},t))})})]})},Tt=u(p)(({theme:e})=>({position:"absolute",top:"65px",left:"55px",width:"300px",pointerEvents:"none",background:h.dashboardHeader,boxShadow:"0px 1px 6px rgba(0, 0, 0, 0.1)",color:h.primaryText1,zIndex:100,transition:"opacity 0.6s",padding:e.spacing(2,3),[e.breakpoints.down("sm")]:{padding:e.spacing(1,1.5)}})),It=({onSubmit:e})=>{const[o]=S(t=>[t.selectedNode]);return s.jsxs(Rt,{children:[s.jsx(Et,{onSubmit:e}),s.jsx("div",{id:"tooltip-portal"}),o&&s.jsx("div",{id:"tooltip-portal",children:s.jsx(jt,{node:o})}),s.jsx(ue,{})]})},Rt=u("div")(({theme:e})=>({position:"absolute",zIndex:1,top:0,userSelect:"none",pointerEvents:"none",display:"flex",justifyContent:"flex-start",alignItems:"flex-start",height:"100%",width:"100%",padding:"16px",[e.breakpoints.down("sm")]:{top:50}})),zt=u(p)`
  height: 100%;
  width: 100%;
  background-color: ${h.black};
`,Dt=u(p)`
  position: absolute;
  bottom: 8px;
  left: 8px;
  color: ${h.white};
  font-size: 12px;
  opacity: 0.5;
`,Ct=d.lazy(()=>_(()=>import("./index-b032fb39.js"),["assets/index-b032fb39.js","assets/index-6865c215.js","assets/index-3f17fe3b.css","assets/SourcesTableIcon-aa86e03c.js","assets/SettingsIcon-388a106b.js","assets/index-27c0e8db.js"]).then(({MainToolbar:e})=>({default:e}))),Pt=d.lazy(()=>_(()=>import("./index-e0fde7cf.js"),["assets/index-e0fde7cf.js","assets/index-6865c215.js","assets/index-3f17fe3b.css","assets/Selection-53633c89.js","assets/EditIcon-91f844b1.js","assets/react-toastify.esm-22bb4a54.js","assets/react-toastify-b60658ac.css","assets/PlusIcon-8d1cf88e.js","assets/index.esm-6af15a5e.js","assets/index-27c0e8db.js","assets/index-cc4c88c0.js"]).then(({Universe:e})=>({default:e})));d.lazy(()=>_(()=>import("./index-edd5befb.js"),["assets/index-edd5befb.js","assets/index-6865c215.js","assets/index-3f17fe3b.css","assets/react-toastify.esm-22bb4a54.js","assets/react-toastify-b60658ac.css","assets/index-cc4c88c0.js","assets/ChevronRightIcon-2945a729.js","assets/index-a81519a3.js","assets/Popover-f9928c08.js","assets/useSlotProps-3d116945.js","assets/ChevronDownIcon-b496d047.js","assets/generateCategoricalChart-c02bec87.js","assets/InfoIcon-bad0ebb4.js","assets/index.esm-6af15a5e.js","assets/ChevronRightIcon-6125620a.css","assets/CheckIcon-c555d9ea.js"]).then(({SideBar:e})=>({default:e})));const At=()=>{const[e,o]=se(y=>[y.setBudget,y.setNodeCount]),[t,n,r,l,f]=[b(y=>y.setSidebarOpen),b(y=>y.currentSearch),b(y=>y.setCurrentSearch),b(y=>y.setRelevanceSelected),b(y=>y.setTranscriptOpen)],[a,i]=S(y=>[y.fetchData,y.setSelectedNode]),c=fe(),x=ye({mode:"onChange"}),g=x.handleSubmit(({search:y})=>{f(!1),i(null),l(!1),r(y)}),k=d.useCallback(async()=>{await a(e,{word:n??""}),t(!0),n&&await oe(e)},[a,n,t,e]);d.useEffect(()=>{k()},[n,k]);const w=d.useCallback(()=>{o("INCREMENT")},[o]);return d.useEffect(()=>{c&&(c.on("connect_error",y=>{console.error("Socket connection error:",y)}),c.on("newnode",w))},[c,w]),d.useEffect(()=>()=>{c&&c.disconnect()},[c]),s.jsxs(s.Fragment,{children:[s.jsx(me,{}),s.jsx(it,{}),s.jsx(ge,{hidden:!V}),s.jsx(d.Suspense,{fallback:s.jsx("div",{children:"Loading..."}),children:s.jsxs(zt,{direction:"row",children:[s.jsxs(ke,{...x,children:[s.jsx(Ct,{}),!1,s.jsx(Pt,{}),s.jsx(nt,{}),s.jsxs(Dt,{children:["v",_e]}),s.jsx(st,{}),s.jsx(It,{onSubmit:g})]}),s.jsx(kt,{}),s.jsx(_t,{}),s.jsx(xt,{})]})})]})},Mt=Object.freeze(Object.defineProperty({__proto__:null,AppNew:At},Symbol.toStringTag,{value:"Module"}));export{S as a,Gt as f,Mt as i,Ft as u};
