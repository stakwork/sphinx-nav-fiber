import{Z as F,N as D,W as V,M as Y,$ as q,a0 as X,a1 as J,a2 as K,f,i as C,j as s,r as x,a3 as Q,h as u,F as h,a4 as Z,a5 as B,k as b,n as ee,T as j,S as te,m as k,y as se,J as oe,V as ne}from"./index-a69a3f4c.js";import{B as $,e as ae,I as M,f as re,g as ie,A as ce,P as le,b as L,h as de,u as xe,Q as pe,C as O,i as he,S as ue,a as fe,d as ye,c as me,G as ge,L as ke,F as _e,v as be}from"./react-toastify.esm-a10ef41b.js";import{S as je}from"./index-0d9cc7db.js";const T=[...I("Topic",20),{name:"bitcoin",edge_count:0,node_type:"Topic",ref_id:"b30aeba5-54a8-4227-8f05-79798a721996"},{name:"bitcoin",edge_count:0,node_type:"Topic",ref_id:"fc3a46e2-28ec-4a5f-9836-8308ef515005"},...I("Organization",20),...I("People",2)];[...G(T.filter(e=>e.node_type==="Topic"),T.filter(e=>e.node_type==="Organization")),...G(T.filter(e=>e.node_type==="Topic"),T.filter(e=>e.node_type==="People"))];function I(e,o){const t=[];for(let n=0;n<o;n+=1){const a=e,l={edge_count:Math.floor(Math.random()*10),node_type:a,name:`${a} name ${n}`,ref_id:`ref_id_${a}_${n}`};t.push(l)}return t}function G(e,o){const t=[];for(let n=0;n<o.length;n+=1){const a={attributes:{decision_type:"ML"},edge_type:"RELATED_TO",source:e[n].ref_id,target:o[n].ref_id,ref_id:`ref_id__${n}`};t.push(a)}return t}function we(e,o,t,n){const a={};return e.map(y=>{const r=y.edge_count||0,i=t.radius-t.radius*r/o;let c;r in a?c=a[r]:(c=Math.random()*300,a[r]=c);const d=i+c,g=Math.random()*Math.PI*2;return{...y,x:t.x+d*Math.cos(g),y:n,z:t.z+d*Math.sin(g)}})}const Se=300,ve=(e,o)=>{const t=e.reduce((r,i)=>(r[i.node_type]?r[i.node_type].push(i):r[i.node_type]=[i],r),{}),n=Object.keys(t),a={x:0,y:0,z:0,radius:1e3},l=n.reduce((r,i,c)=>{const d=c%2===0?c/2:-Math.ceil(c/2),g=Math.max(...t[i].map(w=>w.edge_count||0),1),_=we(t[i],g,a,d*Se);return[...r,..._]},[]),y=o.map(r=>{const i=l.find(_=>_.ref_id===r.source),c=l.find(_=>_.ref_id===r.target),d=new F((i==null?void 0:i.x)||0,(i==null?void 0:i.y)||0,(i==null?void 0:i.z)||0),g=new F((c==null?void 0:c.x)||0,(c==null?void 0:c.y)||0,(c==null?void 0:c.z)||0);return{...r,sourcePosition:d,targetPosition:g}});return{nodes:l,links:y,nodeTypes:n}},z={links:[],nodes:[]},Ee=async(e,o,t)=>{try{return Re(e,o,t)}catch{return console.log(z),z}},Te=async(e,o)=>{new URLSearchParams({...V||Y?{free:"true"}:{},...o}).toString();try{return await D.get("/prediction/graph/search?top_node_count=5&limit=5"+(o.word?`&word=${o.word}`:""))}catch(t){return console.error(t),null}return null},Ie=async e=>{try{return await D.get(`/node/${e}`)}catch(o){return console.error(o),null}return null},$t=async(e,o)=>{try{return await D.get(`/prediction/graph/edges/${e}?skip=${o}&limit=4&sort_by="edge_count"`)}catch(t){return console.error(t),null}return null},Re=async(e,o,t)=>{try{const a=await Te(o,t);if(a)return ze(a,e)}catch(n){return console.error(n),z}},ze=(e,o)=>{let{edges:t,nodes:n}=e;return console.log(o),ve(n,t)},De={data:null,selectionGraphData:{nodes:[],links:[]},disableCameraRotation:!1,graphRadius:q?1600:3056,graphStyle:localStorage.getItem("graphStyle")||"sphere",hoveredNode:null,selectedNode:null,cameraFocusTrigger:!1,selectedNodeRelativeIds:[],nearbyNodeIds:[],showSelectionGraph:!1,nodesNormalized:{},edgesNormalized:{},isFetching:!1,nodeTypes:[]},S=X()(J((e,o)=>({...De,fetchData:async(t,n)=>{if(o().isFetching)return;e({isFetching:!0});const a=await Ee(o().graphStyle,t,n??{}),l={};a==null||a.nodes.forEach(r=>{const i=r.ref_id;i&&(l[i]=r)});const y={};a==null||a.links.forEach(r=>{const i=`${r.source}-${r.target}`;i&&(y[i]=r)}),n!=null&&n.word&&await K(),e({data:{nodes:(a==null?void 0:a.nodes)||[],links:(a==null?void 0:a.links)||[]},nodeTypes:a==null?void 0:a.nodeTypes,nodesNormalized:l,edgesNormalized:y,isFetching:!1,disableCameraRotation:!1,nearbyNodeIds:[],selectedNodeRelativeIds:[],showSelectionGraph:!1})},setIsFetching:t=>e({isFetching:t}),setData:t=>e({data:t}),removeLink:(t,n)=>{const{data:a,selectedNodeRelativeIds:l}=o();if(a){const{nodes:y,links:r}=a;e({data:{nodes:y,links:r.filter(i=>i.ref_id!==t)},selectedNodeRelativeIds:l.filter(i=>i!==n)})}},setSelectionData:t=>e({selectionGraphData:t}),setDisableCameraRotation:t=>e({disableCameraRotation:t}),setGraphRadius:t=>e({graphRadius:t}),setGraphStyle:t=>e({graphStyle:t}),setHoveredNode:t=>e({hoveredNode:t}),setSelectedNode:t=>{const n=o().selectedNode;if((n==null?void 0:n.ref_id)!==(t==null?void 0:t.ref_id)){const{data:a}=o(),l=[];t!=null&&t.ref_id&&(a==null||a.links.forEach(y=>{y.target===(t==null?void 0:t.ref_id)&&l.push(y.source),y.source===(t==null?void 0:t.ref_id)&&l.push(y.target)})),e({hoveredNode:null,selectedNode:t,showSelectionGraph:!!(t!=null&&t.ref_id),disableCameraRotation:!0,selectedNodeRelativeIds:l,...t!=null&&t.ref_id?{}:{selectionGraphData:{nodes:[],links:[]}}})}},setSelectedNodeRelativeIds:t=>e({selectedNodeRelativeIds:t}),setCameraFocusTrigger:t=>e({cameraFocusTrigger:t}),setNearbyNodeIds:t=>{const n=o().nearbyNodeIds;(t.length!==n.length||t[0]!==n[0])&&e({nearbyNodeIds:t})},setShowSelectionGraph:t=>e({showSelectionGraph:t}),addNewNode:t=>{const{data:n}=o();if(!n)return;const a={...n,nodes:[t,...n.nodes]};e({data:a})},addNewLink:t=>{const{data:n}=o();if(!n)return;const a=n.nodes.map(r=>r.ref_id===t.source||r.ref_id===t.target?{...r,edge_count:(r.edge_count||0)+1}:r),y={links:[...n.links,t],nodes:a};e({data:y})}}))),Mt=()=>S(e=>e.selectedNode),Ce=()=>{const[e,o]=C(t=>[t.cameraFocusTrigger,t.setCameraFocusTrigger]);return s.jsx(Pe,{href:"",onClick:()=>o(!e),size:"medium",startIcon:s.jsx(ae,{})})},Pe=f($)`
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
`,Ae="4.8.0",Fe={g:"LottieFiles AE 1.1.0",a:"",k:"",d:"",tc:""},Ge=29.9700012207031,Ve=0,Be=120.0000048877,$e=1024,Me=1024,Le="Pause_loop_Final",Oe=0,Ne=[],We=[{ddd:0,ind:1,ty:4,nm:"Right Fill",sr:1,ks:{o:{a:0,k:100,ix:11},r:{a:0,k:0,ix:10},p:{a:0,k:[635.5,753,0],ix:2},a:{a:0,k:[-124,241,0],ix:1},s:{a:0,k:[100,100,100],ix:6}},ao:0,hasMask:!0,masksProperties:[{inv:!1,mode:"a",pt:{a:0,k:{i:[[0,0],[0,0],[0,0],[0,0],[-33.931,0],[0,0],[0,33.966],[0,0]],o:[[0,0],[0,0],[0,0],[0,33.931],[0,0],[33.965,0],[0,0],[0,0]],v:[[-61,-241],[-187,-241],[-187,-241],[-187,179.562],[-125.562,241],[-122.5,241],[-61,179.5],[-61,-241]],c:!0},ix:1},o:{a:0,k:100,ix:3},x:{a:0,k:0,ix:4},nm:"Mask 1"}],shapes:[{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:0,k:{i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[63,-241],[63,241],[-63,241],[-63,-241]],c:!0},ix:2},nm:"Path 1",mn:"ADBE Vector Shape - Group",hd:!1},{ty:"st",c:{a:0,k:[.929412004059,.454901990704,.454901990704,1],ix:3},o:{a:0,k:100,ix:4},w:{a:0,k:0,ix:5},lc:1,lj:1,ml:4,bm:0,nm:"Stroke 1",mn:"ADBE Vector Graphic - Stroke",hd:!1},{ty:"fl",c:{a:0,k:[.639215686275,.756862745098,1,1],ix:4},o:{a:0,k:100,ix:5},r:1,bm:0,nm:"Fill 1",mn:"ADBE Vector Graphic - Fill",hd:!1},{ty:"tr",p:{a:0,k:[-123,241],ix:2},a:{a:0,k:[1,241],ix:1},s:{a:1,k:[{i:{x:[.667,.667],y:[1,1]},o:{x:[.167,.167],y:[0,.167]},t:1,s:[100,0]},{i:{x:[.667,.667],y:[1,1]},o:{x:[.167,.167],y:[0,.167]},t:8,s:[100,40]},{i:{x:[.667,.667],y:[1,1]},o:{x:[.167,.167],y:[0,.167]},t:20,s:[100,10]},{i:{x:[.667,.667],y:[1,1]},o:{x:[.167,.167],y:[0,.167]},t:25,s:[100,70]},{i:{x:[.667,.667],y:[1,1]},o:{x:[.167,.167],y:[0,.167]},t:37,s:[100,20]},{i:{x:[.667,.667],y:[1,1]},o:{x:[.167,.167],y:[0,.167]},t:42,s:[100,30]},{i:{x:[.667,.667],y:[1,1]},o:{x:[.167,.167],y:[0,.167]},t:47,s:[100,15]},{i:{x:[.667,.667],y:[1,1]},o:{x:[.167,.167],y:[0,.167]},t:60,s:[100,85]},{i:{x:[.667,.667],y:[1,1]},o:{x:[.167,.167],y:[0,.167]},t:65,s:[100,30]},{i:{x:[.667,.667],y:[1,1]},o:{x:[.167,.167],y:[0,.167]},t:70,s:[100,50]},{i:{x:[.667,.667],y:[1,1]},o:{x:[.167,.167],y:[0,0]},t:80,s:[100,0]},{i:{x:[.667,.667],y:[1,1]},o:{x:[.167,.167],y:[0,.167]},t:90,s:[100,0]},{i:{x:[.667,.667],y:[1,1]},o:{x:[.167,.167],y:[0,.167]},t:100,s:[100,48]},{i:{x:[.667,.667],y:[1,1]},o:{x:[.167,.167],y:[0,.167]},t:105,s:[100,71]},{i:{x:[.667,.667],y:[1,1]},o:{x:[.167,.167],y:[0,.167]},t:110,s:[100,23]},{i:{x:[.667,.667],y:[1,1]},o:{x:[.167,.167],y:[0,.167]},t:115,s:[100,38]},{t:119.000004846969,s:[100,0]}],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Rectangle 1",np:3,cix:2,bm:0,ix:1,mn:"ADBE Vector Group",hd:!1}],ip:0,op:120.0000048877,st:0,bm:0},{ddd:0,ind:2,ty:4,nm:"Right",sr:1,ks:{o:{a:0,k:100,ix:11},r:{a:0,k:0,ix:10},p:{a:0,k:[635.5,512,0],ix:2},a:{a:0,k:[-124,0,0],ix:1},s:{a:0,k:[100,100,100],ix:6}},ao:0,shapes:[{ty:"gr",it:[{ty:"rc",d:1,s:{a:0,k:[126,482],ix:2},p:{a:0,k:[0,0],ix:3},r:{a:0,k:522,ix:4},nm:"Rectangle Path 1",mn:"ADBE Vector Shape - Rect",hd:!1},{ty:"st",c:{a:0,k:[.929412004059,.454901990704,.454901990704,1],ix:3},o:{a:0,k:100,ix:4},w:{a:0,k:0,ix:5},lc:1,lj:1,ml:4,bm:0,nm:"Stroke 1",mn:"ADBE Vector Graphic - Stroke",hd:!1},{ty:"fl",c:{a:0,k:[1,1,1,1],ix:4},o:{a:0,k:100,ix:5},r:1,bm:0,nm:"Fill 1",mn:"ADBE Vector Graphic - Fill",hd:!1},{ty:"tr",p:{a:0,k:[-124,0],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Rectangle 1",np:3,cix:2,bm:0,ix:1,mn:"ADBE Vector Group",hd:!1}],ip:0,op:120.0000048877,st:0,bm:0},{ddd:0,ind:3,ty:4,nm:"Left Fill",sr:1,ks:{o:{a:0,k:100,ix:11},r:{a:0,k:0,ix:10},p:{a:0,k:[388,753,0],ix:2},a:{a:0,k:[-124,241,0],ix:1},s:{a:0,k:[100,100,100],ix:6}},ao:0,hasMask:!0,masksProperties:[{inv:!1,mode:"a",pt:{a:0,k:{i:[[0,0],[0,0],[0,0],[0,0],[-33.931,0],[0,0],[0,33.966],[0,0]],o:[[0,0],[0,0],[0,0],[0,33.931],[0,0],[33.965,0],[0,0],[0,0]],v:[[-61,-241],[-187,-241],[-187,-241],[-187,179.562],[-125.562,241],[-122.5,241],[-61,179.5],[-61,-241]],c:!0},ix:1},o:{a:0,k:100,ix:3},x:{a:0,k:0,ix:4},nm:"Mask 1"}],shapes:[{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:0,k:{i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[63,-241],[63,241],[-63,241],[-63,-241]],c:!0},ix:2},nm:"Path 1",mn:"ADBE Vector Shape - Group",hd:!1},{ty:"st",c:{a:0,k:[.929412004059,.454901990704,.454901990704,1],ix:3},o:{a:0,k:100,ix:4},w:{a:0,k:0,ix:5},lc:1,lj:1,ml:4,bm:0,nm:"Stroke 1",mn:"ADBE Vector Graphic - Stroke",hd:!1},{ty:"fl",c:{a:0,k:[.639215686275,.756862745098,1,1],ix:4},o:{a:0,k:100,ix:5},r:1,bm:0,nm:"Fill 1",mn:"ADBE Vector Graphic - Fill",hd:!1},{ty:"tr",p:{a:0,k:[-123,241],ix:2},a:{a:0,k:[1,241],ix:1},s:{a:1,k:[{i:{x:[.667,.667],y:[1,1]},o:{x:[.167,.167],y:[0,.167]},t:1,s:[100,0]},{i:{x:[.667,.667],y:[1,1]},o:{x:[.167,.167],y:[0,.167]},t:8,s:[100,40]},{i:{x:[.667,.667],y:[1,1]},o:{x:[.167,.167],y:[0,.167]},t:20,s:[100,10]},{i:{x:[.667,.667],y:[1,1]},o:{x:[.167,.167],y:[0,.167]},t:25,s:[100,70]},{i:{x:[.667,.667],y:[1,1]},o:{x:[.167,.167],y:[0,.167]},t:37,s:[100,20]},{i:{x:[.667,.667],y:[1,1]},o:{x:[.167,.167],y:[0,.167]},t:42,s:[100,30]},{i:{x:[.667,.667],y:[1,1]},o:{x:[.167,.167],y:[0,.167]},t:47,s:[100,15]},{i:{x:[.667,.667],y:[1,1]},o:{x:[.167,.167],y:[0,.167]},t:60,s:[100,85]},{i:{x:[.667,.667],y:[1,1]},o:{x:[.167,.167],y:[0,.167]},t:65,s:[100,30]},{i:{x:[.667,.667],y:[1,1]},o:{x:[.167,.167],y:[0,.167]},t:70,s:[100,50]},{i:{x:[.667,.667],y:[1,1]},o:{x:[.167,.167],y:[0,0]},t:80,s:[100,0]},{i:{x:[.667,.667],y:[1,1]},o:{x:[.167,.167],y:[0,.167]},t:90,s:[100,0]},{i:{x:[.667,.667],y:[1,1]},o:{x:[.167,.167],y:[0,.167]},t:100,s:[100,48]},{i:{x:[.667,.667],y:[1,1]},o:{x:[.167,.167],y:[0,.167]},t:105,s:[100,71]},{i:{x:[.667,.667],y:[1,1]},o:{x:[.167,.167],y:[0,.167]},t:110,s:[100,23]},{i:{x:[.667,.667],y:[1,1]},o:{x:[.167,.167],y:[0,.167]},t:115,s:[100,38]},{t:119.000004846969,s:[100,0]}],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Rectangle 1",np:3,cix:2,bm:0,ix:1,mn:"ADBE Vector Group",hd:!1}],ip:0,op:120.0000048877,st:0,bm:0},{ddd:0,ind:4,ty:4,nm:"Left ",sr:1,ks:{o:{a:0,k:100,ix:11},r:{a:0,k:0,ix:10},p:{a:0,k:[388,512,0],ix:2},a:{a:0,k:[-124,0,0],ix:1},s:{a:0,k:[100,100,100],ix:6}},ao:0,shapes:[{ty:"gr",it:[{ty:"rc",d:1,s:{a:0,k:[126,482],ix:2},p:{a:0,k:[0,0],ix:3},r:{a:0,k:522,ix:4},nm:"Rectangle Path 1",mn:"ADBE Vector Shape - Rect",hd:!1},{ty:"st",c:{a:0,k:[.929412004059,.454901990704,.454901990704,1],ix:3},o:{a:0,k:100,ix:4},w:{a:0,k:0,ix:5},lc:1,lj:1,ml:4,bm:0,nm:"Stroke 1",mn:"ADBE Vector Graphic - Stroke",hd:!1},{ty:"fl",c:{a:0,k:[1,1,1,1],ix:4},o:{a:0,k:100,ix:5},r:1,bm:0,nm:"Fill 1",mn:"ADBE Vector Graphic - Fill",hd:!1},{ty:"tr",p:{a:0,k:[-124,0],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Rectangle 1",np:3,cix:2,bm:0,ix:1,mn:"ADBE Vector Group",hd:!1}],ip:0,op:120.0000048877,st:0,bm:0}],He=[],Ue={v:Ae,meta:Fe,fr:Ge,ip:Ve,op:Be,w:$e,h:Me,nm:Le,ddd:Oe,assets:Ne,layers:We,markers:He},Ye=()=>{const e=x.useRef(null);return x.useEffect(()=>{const o=document.getElementById("lottie-equalizer");return o&&(e.current=Q.loadAnimation({container:o,animationData:Ue,loop:!0,autoplay:!0})),()=>{e.current&&e.current.destroy()}},[]),s.jsx("div",{id:"lottie-equalizer",style:{width:"40px",height:"40px"}})},qe=()=>{const e=x.useRef(null),[o,t]=x.useState(0),n=B(),a=C(m=>m.setSelectedNode),[l,y]=b(m=>[m.sidebarIsOpen,m.setSidebarOpen]),[r,i,c,d,g,_]=re(m=>[m.isPlaying,m.setIsPlaying,m.playingTime,m.playingNode,m.miniPlayerIsVisible,m.setMiniPlayerIsVisible]),[w,v]=d!=null&&d.timestamp?d.timestamp.split("-").map(m=>ie(m)):[0,0],E=(c-w)/(v-w)*100;x.useEffect(()=>{var P,A;const m=((P=e.current)==null?void 0:P.offsetWidth)||0,U=((A=e.current)==null?void 0:A.scrollWidth)||0;t(U-m)},[]);const p=m=>{_(!1),m.stopPropagation()},W=()=>{a(d),y(!0)},H=l&&(n==null?void 0:n.ref_id)!==(d==null?void 0:d.ref_id)||d&&!l;return g&&d&&H?s.jsxs(Xe,{onClick:W,children:[s.jsxs(Je,{children:[s.jsx(ce,{src:d.image_url||"",type:d.node_type}),s.jsxs(Ke,{children:[s.jsxs(st,{ref:e,children:[s.jsx(tt,{className:"title",scrollValue:o,children:d.episode_title}),s.jsx("div",{className:"subtitle",children:d.show_title})]}),s.jsx(Ze,{onClick:m=>{i(!r),m.stopPropagation()},size:"small",children:r?s.jsx(Ye,{}):s.jsx(le,{})})]}),s.jsx(Qe,{onClick:m=>p(m),children:s.jsx(L,{})})]}),s.jsx(et,{value:E,variant:"determinate"})]}):null},Xe=f(h).attrs({direction:"column",align:"stretch",justify:"space-between"})`
  padding: 8px;
  background: ${u.BG1};
  border-radius: 6px;
  width: 320px;
  height: 72px;
  margin-top: 16px;
  cursor: pointer;
  z-index: 0;
`,Je=f(h).attrs({direction:"row",align:"center",justify:"flex-start"})``,Ke=f(h).attrs({direction:"row",align:"center",justify:"space-between"})`
  flex: 1;
  color: ${u.white};
  margin-left: 11px;

  .title {
    font-size: 13px;
    margin-bottom: 2px;
    font-weight: 500;
  }

  .subtitle {
    font-size: 11px;
    color: ${u.GRAY6};
  }
`,Qe=f(M)`
  padding: 8px;
  color: ${u.GRAY6};
  z-index: 100000;
`,Ze=f(M)`
  && {
    font-size: 36px;
    padding: 2px;
    margin-left: 8px;
    overflow: hidden;
    z-index: 100000;
  }
`,et=f(Z)`
  && {
    flex-shrink: 0;
    height: 2px;
    background-color: ${u.white};
    color: blue;

    .MuiLinearProgress-bar {
      background: rgb(65, 90, 127);
    }
  }
`,tt=f.div`
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
`,st=f(h)`
  overflow: hidden;
  flex: 1;
`,ot=()=>{const e=B(),o=C(t=>t.isFetching);return s.jsxs(nt,{align:"flex-end",id:"actions-toolbar",children:[!o&&s.jsx(Ce,{}),!o&&s.jsx(de,{}),s.jsx(qe,{},e==null?void 0:e.ref_id)]})},nt=f(h)`
  position: absolute;
  right: 20px;
  bottom: 20px;
  pointer-events: all;
`,at=()=>{const e=b(o=>o.appMetaData);return e?s.jsxs(rt,{children:[s.jsxs(it,{children:[s.jsx(s.Fragment,{children:e.title&&s.jsx(j,{className:"title",color:"white",children:e.title})}),s.jsx(j,{className:"subtitle",children:" Second Brain"})]}),s.jsx(te,{})]}):null},rt=f(h).attrs({align:"center",direction:"row",grow:1,justify:"flex-start"})`
  height: 64px;
  position: absolute;
  top: 0px;
  left: 64px;
  right: 32px;
  transition: opacity 1s;
  z-index: 99;
  padding: 20px 23px;
`,it=f.div`
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
    color: ${u.GRAY6};
    font-family: Barlow;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0.22px;
  }
`,ct=()=>{const[e,o]=x.useState(!0),t=xe();x.useEffect(()=>{o(!0)},[t]);const n=()=>{o(!1)};return t&&e?s.jsxs(lt,{align:"center",direction:"column",justify:"center",onClick:n,children:[s.jsx("img",{alt:"screen",src:"jamboard_kiosk.png"}),s.jsxs(h,{align:"center",direction:"column",justify:"center",children:[s.jsx(R,{children:"Second Brain is currently"}),s.jsx(R,{style:{fontWeight:600},children:"optimized for Desktop."}),s.jsx(R,{children:"Mobile support coming soon."})]}),s.jsx($,{color:"secondary",onClick:n,variant:"contained",children:"Got It"})]}):null},lt=f(h)`
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.75);
  gap: 28px;
  z-index: 2000000000;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`,R=f(j)`
  color: #fff;
  text-align: center;
  font-family: Barlow;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  margin: 1px;
`,dt={},xt=x.createContext(dt),pt=()=>{const[e,o]=x.useState(!1),t=x.useMemo(()=>({isShow:e,setIsShow:o}),[e]);return s.jsx(xt.Provider,{value:t})},ht=x.lazy(()=>k(()=>import("./index-93824e54.js"),["assets/index-93824e54.js","assets/index-a69a3f4c.js","assets/index-a2878e02.css","assets/index-b1f9ac4d.js","assets/react-toastify.esm-a10ef41b.js","assets/react-toastify-b60658ac.css","assets/index-fe61f9ee.js","assets/useSlotProps-897fde8b.js","assets/index-49d2f161.js","assets/index.esm-1210bfcf.js","assets/InfoIcon-1164b0f5.js"]).then(({SettingsModal:e})=>({default:e}))),ut=x.lazy(()=>k(()=>import("./index-4355e680.js"),["assets/index-4355e680.js","assets/index-a69a3f4c.js","assets/index-a2878e02.css","assets/react-toastify.esm-a10ef41b.js","assets/react-toastify-b60658ac.css","assets/index-b1f9ac4d.js","assets/CheckIcon-c4ce35b5.js","assets/index-49d2f161.js","assets/index.esm-1210bfcf.js","assets/InfoIcon-1164b0f5.js"]).then(({AddContentModal:e})=>({default:e}))),ft=x.lazy(()=>k(()=>import("./index-e884bb29.js"),["assets/index-e884bb29.js","assets/index-a69a3f4c.js","assets/index-a2878e02.css","assets/react-toastify.esm-a10ef41b.js","assets/react-toastify-b60658ac.css","assets/index-b1f9ac4d.js","assets/CheckIcon-c4ce35b5.js","assets/index-49d2f161.js","assets/index.esm-1210bfcf.js","assets/InfoIcon-1164b0f5.js","assets/index-9fa00766.js","assets/index-d07abe92.js","assets/Popover-5e0c4343.js","assets/useSlotProps-897fde8b.js","assets/Popper-57aa97eb.js","assets/index-0d9cc7db.js"]).then(({AddItemModal:e})=>({default:e}))),yt=x.lazy(()=>k(()=>import("./index-6b0e2375.js"),["assets/index-6b0e2375.js","assets/index-a69a3f4c.js","assets/index-a2878e02.css","assets/index-b1f9ac4d.js","assets/react-toastify.esm-a10ef41b.js","assets/react-toastify-b60658ac.css","assets/NoFilterResultIcon-b5957be0.js","assets/index-fe61f9ee.js","assets/useSlotProps-897fde8b.js","assets/Popover-5e0c4343.js","assets/index.esm-1210bfcf.js","assets/index-49d2f161.js","assets/InfoIcon-1164b0f5.js","assets/index-603d676c.js","assets/Popper-57aa97eb.js","assets/ChevronDownIcon-12deb418.js","assets/CheckIcon-c4ce35b5.js","assets/ChevronUpIcon-5b34a579.js","assets/SettingsIcon-9e3a5d48.js"]).then(({SourcesTableModal:e})=>({default:e}))),mt=x.lazy(()=>k(()=>import("./index-14dac6d3.js"),["assets/index-14dac6d3.js","assets/index-a69a3f4c.js","assets/index-a2878e02.css","assets/index-b1f9ac4d.js","assets/react-toastify.esm-a10ef41b.js","assets/react-toastify-b60658ac.css","assets/index-603d676c.js","assets/index-49d2f161.js","assets/index.esm-1210bfcf.js","assets/InfoIcon-1164b0f5.js","assets/Skeleton-bbf2c256.js"]).then(({EditNodeNameModal:e})=>({default:e}))),gt=x.lazy(()=>k(()=>import("./index-0afdebf3.js"),["assets/index-0afdebf3.js","assets/index-a69a3f4c.js","assets/index-a2878e02.css","assets/index-b1f9ac4d.js","assets/react-toastify.esm-a10ef41b.js","assets/react-toastify-b60658ac.css","assets/Skeleton-bbf2c256.js"]).then(({RemoveNodeModal:e})=>({default:e}))),kt=x.lazy(()=>k(()=>import("./index-92167601.js"),["assets/index-92167601.js","assets/index-a69a3f4c.js","assets/index-a2878e02.css","assets/index-b1f9ac4d.js","assets/react-toastify.esm-a10ef41b.js","assets/react-toastify-b60658ac.css","assets/index-9fa00766.js","assets/index-d07abe92.js","assets/Popover-5e0c4343.js","assets/useSlotProps-897fde8b.js","assets/Popper-57aa97eb.js","assets/index-0d9cc7db.js"]).then(({AddNodeEdgeModal:e})=>({default:e}))),_t=()=>s.jsxs(s.Fragment,{children:[s.jsx(ft,{}),s.jsx(ut,{}),s.jsx(ht,{}),s.jsx(mt,{}),s.jsx(gt,{}),s.jsx(yt,{}),s.jsx(kt,{})]}),bt=f(pe)`
  .Toastify__toast {
    background-color: ${u.body};
  }
  .Toastify__toast-body {
    background-color: ${u.body};
    color: ${u.white};
  }
  .Toastify__close-button {
    color: ${u.white};
  }
  .Toastify__progress-bar--error {
    background-color: ${u.primaryRed};
  }
  .Toastify__progress-bar--success {
    background-color: ${u.primaryGreen};
  }
`,jt=f(h)(({theme:e})=>({position:"absolute",top:"65px",right:"55px",width:"300px",pointerEvents:"none",background:u.dashboardHeader,boxShadow:"0px 1px 6px rgba(0, 0, 0, 0.1)",color:u.primaryText1,zIndex:100,transition:"opacity 0.6s",padding:e.spacing(2,3),[e.breakpoints.down("sm")]:{padding:e.spacing(1,1.5)}})),wt=({node:e})=>{const[o,t]=x.useState({}),[n,a]=x.useState(!1),{node_type:l,name:y,ref_id:r}=e;return x.useEffect(()=>{(async()=>{a(!0);try{const c=await Ie(r);c!=null&&c.properties&&t(c.properties)}catch(c){console.error(c)}finally{a(!1)}})()},[r]),e?s.jsx(jt,{align:"flex-start",borderRadius:8,px:24,py:16,children:s.jsxs(s.Fragment,{children:[s.jsx(h,{direction:"row",mb:12,children:s.jsx(h,{align:"flex-start",children:s.jsx(j,{children:l==null?void 0:l.toUpperCase()})})}),s.jsx(h,{direction:"row",mb:12,children:s.jsx(h,{align:"flex-start",children:s.jsx(j,{children:y})})}),n?s.jsx(O,{color:u.white}):Object.entries(o).map(([i,c])=>s.jsxs(h,{direction:"row",justify:"flex-start",mb:12,children:[s.jsx(h,{children:s.jsxs(j,{children:[i,": "]})}),s.jsx(h,{ml:8,children:s.jsx(j,{children:c})})]},i))]})}):null},St=({onSubmit:e})=>{const[o,t]=b(l=>[l.currentSearch,l.clearSearch]),[n]=S(l=>[l.isFetching]),{setValue:a}=he();return s.jsx(N,{children:s.jsxs(vt,{children:[s.jsx(je,{onSubmit:e}),s.jsx(Et,{onClick:()=>{if(o){a("search",""),t();return}e==null||e()},children:n?s.jsx(O,{color:u.SECONDARY_BLUE,size:"20"}):s.jsx(s.Fragment,{children:o?s.jsx(L,{}):s.jsx(ue,{})})})]})})},N=f(h).attrs({direction:"column",justify:"center",align:"stretch"})(()=>({"&.has-shadow":{borderBottom:"1px solid rgba(0, 0, 0, 0.25)",background:u.BG1,boxShadow:"0px 1px 6px 0px rgba(0, 0, 0, 0.20)"}})),vt=f(h).attrs({direction:"row",justify:"center",align:"center"})`
  flex-grow: 1;
  pointer-events: all;
`,Et=f(h).attrs({align:"center",justify:"center",p:5})`
  font-size: 32px;
  color: ${u.mainBottomIcons};
  cursor: pointer;
  transition-duration: 0.2s;
  margin-left: -42px;
  z-index: 2;

  &:hover {
    /* background-color: ${u.gray200}; */
  }

  ${N} input:focus + & {
    color: ${u.primaryBlue};
  }
`,Tt=({onSubmit:e})=>{const[o]=S(t=>[t.nodeTypes]);return s.jsxs(It,{align:"stretch",borderRadius:8,px:24,py:16,children:[s.jsx(St,{onSubmit:e}),s.jsx(h,{mt:24,children:s.jsx(s.Fragment,{children:o.map(t=>s.jsx(h,{direction:"row",justify:"flex-start",mb:12,children:s.jsx(j,{children:t})},t))})})]})},It=f(h)(({theme:e})=>({position:"absolute",top:"65px",left:"55px",width:"300px",pointerEvents:"none",background:u.dashboardHeader,boxShadow:"0px 1px 6px rgba(0, 0, 0, 0.1)",color:u.primaryText1,zIndex:100,transition:"opacity 0.6s",padding:e.spacing(2,3),[e.breakpoints.down("sm")]:{padding:e.spacing(1,1.5)}})),Rt=({onSubmit:e})=>{const[o]=S(t=>[t.selectedNode]);return s.jsxs(zt,{children:[s.jsx(Tt,{onSubmit:e}),s.jsx("div",{id:"tooltip-portal"}),o&&s.jsx("div",{id:"tooltip-portal",children:s.jsx(wt,{node:o})}),s.jsx(fe,{})]})},zt=f("div")(({theme:e})=>({position:"absolute",zIndex:1,top:0,userSelect:"none",pointerEvents:"none",display:"flex",justifyContent:"flex-start",alignItems:"flex-start",height:"100%",width:"100%",padding:"16px",[e.breakpoints.down("sm")]:{top:50}})),Dt=f(h)`
  height: 100%;
  width: 100%;
  background-color: ${u.black};
`,Ct=f(h)`
  position: absolute;
  bottom: 8px;
  left: 8px;
  color: ${u.white};
  font-size: 12px;
  opacity: 0.5;
`,Pt=x.lazy(()=>k(()=>import("./index-1cc5263e.js"),["assets/index-1cc5263e.js","assets/index-a69a3f4c.js","assets/index-a2878e02.css","assets/AddContentIcon-2ee062a0.js","assets/SourcesTableIcon-f977e5f2.js","assets/SettingsIcon-9e3a5d48.js"]).then(({MainToolbar:e})=>({default:e}))),At=x.lazy(()=>k(()=>import("./index-25b286fe.js"),["assets/index-25b286fe.js","assets/index-a69a3f4c.js","assets/index-a2878e02.css","assets/constant-a8cd6c36.js","assets/EditIcon-4b2efb50.js","assets/react-toastify.esm-a10ef41b.js","assets/react-toastify-b60658ac.css","assets/PlusIcon-65a8011b.js","assets/index.esm-1210bfcf.js","assets/index-0d9cc7db.js"]).then(({Universe:e})=>({default:e})));x.lazy(()=>k(()=>import("./index-39737aba.js"),["assets/index-39737aba.js","assets/index-a69a3f4c.js","assets/index-a2878e02.css","assets/react-toastify.esm-a10ef41b.js","assets/react-toastify-b60658ac.css","assets/index-0d9cc7db.js","assets/ChevronRightIcon-da0b6e39.js","assets/index-d07abe92.js","assets/Popover-5e0c4343.js","assets/useSlotProps-897fde8b.js","assets/ChevronDownIcon-12deb418.js","assets/generateCategoricalChart-8f14472c.js","assets/InfoIcon-1164b0f5.js","assets/index.esm-1210bfcf.js","assets/ChevronRightIcon-6125620a.css","assets/CheckIcon-c4ce35b5.js"]).then(({SideBar:e})=>({default:e})));const Ft=()=>{const[e,o]=se(p=>[p.setBudget,p.setNodeCount]),[t,n,a,l,y]=[b(p=>p.setSidebarOpen),b(p=>p.currentSearch),b(p=>p.setCurrentSearch),b(p=>p.setRelevanceSelected),b(p=>p.setTranscriptOpen)],[r,i]=S(p=>[p.fetchData,p.setSelectedNode]),[c]=oe(p=>[p.realtimeGraphFeatureFlag]),d=ye(),g=me({mode:"onChange"}),_=g.handleSubmit(({search:p})=>{y(!1),i(null),l(!1),a(p)}),w=x.useCallback(async()=>{await r(e,{word:n??""}),t(!0),n&&await ne(e)},[r,n,t,e]);x.useEffect(()=>{w()},[n,w]);const v=x.useCallback(()=>{o("INCREMENT")},[o]),E=x.useCallback(p=>{console.log(p)},[]);return x.useEffect(()=>{d&&(d.on("connect_error",p=>{console.error("Socket connection error:",p)}),d.on("newnode",v),c&&d.on("new_node_created",E))},[d,v,E,c]),x.useEffect(()=>()=>{d&&d.disconnect()},[d]),s.jsxs(s.Fragment,{children:[s.jsx(ge,{}),s.jsx(ct,{}),s.jsx(ke,{hidden:!V}),s.jsx(x.Suspense,{fallback:s.jsx("div",{children:"Loading..."}),children:s.jsxs(Dt,{direction:"row",children:[s.jsxs(_e,{...g,children:[s.jsx(Pt,{}),!1,s.jsx(At,{}),s.jsx(at,{}),s.jsxs(Ct,{children:["v",be]}),s.jsx(ot,{}),s.jsx(Rt,{onSubmit:_})]}),s.jsx(_t,{}),s.jsx(bt,{}),s.jsx(pt,{})]})})]})},Lt=Object.freeze(Object.defineProperty({__proto__:null,AppNew:Ft},Symbol.toStringTag,{value:"Module"}));export{S as a,$t as f,Lt as i,Mt as u};
