import{r as c,j as n,s as P,c as j,F as Z,Z as ve,af as _e,u as Ne,a5 as Pe,a6 as ke,a7 as ze,a8 as Te}from"./index-725cd71c.js";import{c as z,u as ce,b as T,p as Ee,g as Ie,C as Me,S as Ae,d as ae,H as D,T as Ge,f as Fe,h as le,i as Le,L as He,E as Oe,j as $e,k as Re,A as Ue,l as Be,n as Ve,o as Ze,q as De,V as We,B as Ye,R as se,O as qe,r as Xe}from"./EditIcon-09992d3e.js";import{Y as Ke,Z as Qe,_ as Je,V as S,$ as et,a1 as tt,a2 as ot,a3 as W,K as st,a4 as nt,e as de,ar as rt,as as it,at as ct,au as at,av as lt,b as ue,ad as pe,u as fe,aw as dt,a as ut}from"./react-toastify.esm-2b45af49.js";import{u as k,a as x}from"./index-e25b3700.js";import{f as pt,d as ft}from"./index.esm-665ada5a.js";import{P as gt}from"./PlusIcon-1cd6bc68.js";import{u as X}from"./index-c3e60fc6.js";import{C as ht}from"./ClipLoader-0a48de47.js";const mt=(e,t,a,s,f)=>{const g=new Qe,o=1e-5;g.absarc(o,o,o,-Math.PI/2,-Math.PI,!0),g.absarc(o,t-s*2,o,Math.PI,Math.PI/2,!0),g.absarc(e-s*2,t-s*2,o,Math.PI/2,0,!0),g.absarc(e-s*2,o,o,0,-Math.PI/2,!0);const r=new Je(g,{depth:a-s*2,bevelEnabled:!0,bevelSegments:f,steps:2,bevelSize:s,bevelThickness:s,curveSegments:f});r.center();const l=[],i=r.getAttribute("normal"),h=r.getAttribute("position");for(let u=0;u<h.count;u+=1){const d=new S(i.getX(u),i.getY(u),i.getZ(u)),b=new S(h.getX(u),h.getY(u),h.getZ(u));let p=0,y=0;Math.abs(d.y)>.9?(p=b.x/e+.5,y=1-(b.z/a+.5)):Math.abs(d.x)>.9?(p=-b.z/a+.5,y=1-(-b.y/t+.5)):Math.abs(d.z)>.9&&(p=b.x/e+.5,y=1-(-b.y/t+.5)),l.push(p,y)}return r.setAttribute("uv",new et(l,2)),r};mt(10,10,10,2,10);const ne=new Ke(10,10,10),xt=500,yt=800,bt=new S(0,0,0),St=16777215;let L=null;const wt=500,te=(e,t)=>{if(L)return null;L=setTimeout(()=>{L&&(clearTimeout(L),L=null)},wt);const a=[];return e.forEach(f=>{const g=t.position.distanceTo(bt.set(f.x,f.y,f.z));g<yt&&a.push({id:f.ref_id||"",distance:g})}),a.sort((f,g)=>f.distance-g.distance).slice(0,xt).map(f=>f.id)},N=new S(0,0,0),re=100,Ct=600,jt=2e3,K={x:172.7392402058252,y:-239.04675366094037,z:-2e3};let I,H;const vt=4e3,_t=2e3,Nt=e=>{const t=k(),a=x(m=>m.cameraFocusTrigger),s=z(m=>m.isUserDragging),f=z(m=>m.isUserScrolling),g=z(m=>m.setUserMovedCamera),o=x(m=>m.setNearbyNodeIds),r=x(m=>m.showSelectionGraph),l=x(m=>m.data),i=x(m=>m.graphStyle),{camera:h}=ce(),[u,d]=c.useState(!1),[b,p]=c.useState(!1),[y,w]=c.useState(re),v=c.useMemo(()=>{if(r)return new S(0,0,0);const m=l==null?void 0:l.nodes.find(E=>E.ref_id===(t==null?void 0:t.ref_id));let C=new S(2e3,2e3,3e3);if(m&&l){const E=[],F=new S(m.x,m.y,m.z);let q=new S(0,0,0);E.map(U=>(q=q.add(new S(U.x,U.y,U.z).normalize()),U));const Ce=m.edge_count?1-1/(m.edge_count+10):1,je=F.sub(q).multiplyScalar(.8*Ce);C=F.add(je)}return C},[r,t,l]),M=c.useMemo(()=>{if(r)return new S(0,0,0);const m=l==null?void 0:l.nodes.find(C=>C.ref_id===(t==null?void 0:t.ref_id));return new S((m==null?void 0:m.x)||0,(m==null?void 0:m.y)||0,(m==null?void 0:m.z)||0)},[r,t,l]);c.useEffect(()=>{var m;r&&((m=e.current)==null||m.setLookAt(K.x,K.y,K.z,0,0,0,!1)),A()},[r]),c.useEffect(()=>{r?w(jt):(t==null?void 0:t.node_type)==="topic"?w(Ct):w(re)},[t,w,r]),c.useEffect(()=>{G()},[a]),c.useEffect(()=>{(s||f)&&(d(!0),p(!0))},[s,f,d,p]),c.useEffect(()=>{if(t)if(!r&&i==="earth"&&(e!=null&&e.current)){const m=e.current.camera.position.distanceTo(new S),C=tt(M,-m/2);e.current.setLookAt(C.x,C.y,C.z,0,0,0,!0)}else I&&clearTimeout(I),I=setTimeout(()=>{p(!0),clearTimeout(I)},_t),A();return()=>{I&&clearTimeout(I),H&&clearTimeout(H)}},[t]),T(m=>{e.current&&(u||$(v,m.camera),b||R(M,m.camera))});const A=()=>{if(t){const m=h.position.distanceTo(v);Ee(m)}G()},G=()=>{d(!1),p(!1),g(!1),H&&clearTimeout(H),H=setTimeout(()=>{d(!0),p(!0)},vt)},$=(m,C)=>{if(C.position.distanceTo(m)<y)d(!0);else{C.position.lerp(m,.5);const F=te((l==null?void 0:l.nodes)||[],h);F&&o(F)}},R=(m,C)=>{var E;(E=e==null?void 0:e.current)==null||E.setLookAt(C.position.x,C.position.y,C.position.z,m.x,m.y,m.z,!0)};return null},Pt=1;let _=null;const kt=(e,{enabled:t})=>{const a=k();Nt(e);const s=z(h=>h.isUserDragging),f=x(h=>h.disableCameraRotation),g=x(h=>h.data),o=x(h=>h.graphStyle),r=x(h=>h.graphRadius),l=x(h=>h.setNearbyNodeIds);c.useEffect(()=>{t||(_==null||_.kill(),_=null)},[t]);const i=c.useCallback(()=>{_==null||_.kill();const h={value:-244},u=Ie.to(h,{duration:5,keyframes:{"0%":{value:10},"100%":{delay:2,ease:"Power4.easeIn",value:-200}},onComplete:()=>{_=null},onInterrupt(){u.kill()},onUpdate:()=>{var b;const{value:d}=h;if(e.current){const p=te((g==null?void 0:g.nodes)||[],e.current.camera);p&&l(p),(b=e.current)==null||b.dolly(d,!1)}}});u.play(),_=u},[]);return c.useEffect(()=>{e.current&&r&&(o==="sphere"?(e.current.maxDistance=8e3,e.current.minDistance=200,e.current.setTarget(0,0,500,!0)):(e.current.maxDistance=e.current.getDistanceToFitSphere(r+200),e.current.minDistance=100))},[r,o,e]),c.useEffect(()=>{i()},[i,o]),c.useEffect(()=>{!a&&e.current&&e.current.setLookAt(N.x,N.y,N.z,0,0,0,!0)},[a]),T((h,u)=>{e.current&&(!f&&!s&&(e.current.azimuthAngle+=Pt*u*ot.DEG2RAD),e.current.update(u))}),null},zt=({disableAnimations:e})=>{const t=c.useRef(null),a=x(d=>d.graphStyle),s=x(d=>d.data),f=x(d=>d.setNearbyNodeIds),g=x(d=>d.setDisableCameraRotation),[o]=c.useState(.8),{camera:r}=ce(),[l,i,h,u]=z(d=>[d.isUserDragging,d.setIsUserDragging,d.isUserScrolling,d.isUserScrollingOnHtmlPanel]);return kt(t,{enabled:!e&&!h&&!l}),c.useEffect(()=>{t.current&&t.current.setLookAt(N.x,N.y,N.z,0,0,0,!0)},[a]),c.useEffect(()=>{if(!l){const d=te((s==null?void 0:s.nodes)||[],r);d&&f(d)}},[r,r.position,r.position.x,r.position.y,r.position.z,s==null?void 0:s.nodes,f,l]),c.useEffect(()=>{l&&g(!0)},[l,g]),n.jsx(Me,{ref:t,boundaryEnclosesCamera:!0,enabled:!u,makeDefault:!0,maxDistance:12e3,minDistance:100,onEnd:()=>i(!1),onStart:()=>i(!0),smoothTime:o})},Y={metalness:.9,roughness:0},Tt={...Y};new W(Tt);const ge=new st,V=ge.load("noimage.jpeg"),ie=new W({...Y,map:V}),he=.4,Et=new W({...Y,map:V,transparent:!0,opacity:he}),B={},It=(e,t)=>{const[a,s]=c.useState(V),[f,g]=c.useState(ie);return c.useEffect(()=>{const o=`${e}${t&&"-transparent"}`;if(B[o]){s(B[o].texture),g(B[o].material);return}ge.load(e,r=>{const l=new W({map:r,transparent:t,opacity:t?he:1,...Y});B[o]={texture:r,material:l},s(r),g(l)},void 0,()=>{s(V),g(t?Et:ie)})},[e,t]),c.useEffect(()=>function(){a.dispose(),f.dispose()},[a,f]),f},me=c.memo(({node:e,hide:t,animated:a})=>{const s=c.useRef(null),[f]=c.useState(ne),g=k(),o=x(h=>h.showSelectionGraph),r=!!g&&e.ref_id===g.ref_id,l=It("noimage.jpeg",!1);T((h,u)=>{a&&s.current&&(s.current.position.set(e.x,e.y,e.z),r&&(s.current.rotation.y+=u*1,s.current.rotation.x-=u*.6))}),c.useEffect(()=>function(){f.dispose()},[f]);const i=c.useMemo(()=>o&&r?20:r?1*1.2:10,[r,o]);return n.jsx(Ae,{enabled:!!r,children:n.jsx("mesh",{ref:s,geometry:ne,material:l,name:e.ref_id,position:[e.x,e.y,e.z],scale:i,userData:e,visible:!t})})});me.displayName="Cube";const Mt=P(Z)`
  text-align: center;
  width: ${e=>e.type==="topic"?"auto":`${e.size}px`};
  height: ${e=>e.type==="topic"?"auto":`${e.size}px`};
  outline: 1px solid ${e=>j.white};
  outline-offset: 0px;
  background: rgba(0, 0, 0, 0.75);
  color: ${e=>e.fontColor};
  border-radius: ${e=>`${e.type==="guest"?"100%":"6px"}`};
  font-size: ${e=>`${e.fontSize}px`};
  cursor: pointer;
  transition: font-size 0.4s, outline 0.4s;
  transform: scale(${e=>e.scale});
  align-items: center;
  justify-content: center;
  font-family: Barlow;
  font-size: 26px;
  font-style: normal;
  font-weight: 700;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);

  &:hover {
    outline-offset: 4px;
  }

  &.selected {
    .badge-wrapper {
      top: 0;
    }

    font-size: 36px;

    &:hover {
      outline-offset: 0px;
    }
  }

  &.topic {
    outline: none;
    background: none;
    &:hover {
      font-size: 36px;
    }
    white-space: nowrap;
    .badge-wrapper {
      display: none;
    }
  }

  .badge-wrapper {
    position: absolute;
    top: -7px;
    left: -14px;
  }
`;P.img`
  background-image: ${({src:e})=>`url(${e})`};
  background-size: contain;
  background-repeat: no-repeat;
  width: ${e=>e.size}px;
  height: ${e=>e.size}px;
  border-radius: ${e=>e.borderRadius};
`;P.div`
  display: flex;
  position: absolute;
  bottom: -14px;
  left: -5px;
  width: auto;
  justify-content: center;
  align-items: center;
`;P.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${j.transparentBlack};
  border: 2px solid ${e=>e.color};
  color: #fff;
  padding: 0 4px;
  min-width: 30px;
  height: 26px;
  font-size: 12px;
  font-weight: 500;
  border-radius: 6px;
  margin-right: 5px;
`;P.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid ${e=>e.color}44;
  background: ${j.transparentBlack};
  padding: 0 4px;
  color: ${e=>e.color};
  min-width: 30px;
  height: 26px;
  font-size: 12px;
  font-weight: 500;
  border-radius: 6px;
  margin-right: 5px;
`;const At=new S,Gt=({position:e,userData:t,color:a})=>{const s=c.useRef(null),[f,g]=x(d=>[d.selectedNode,d.setSelectedNode]),o=x(d=>d.setHoveredNode),r=x(d=>d.hoveredNode),l=x(d=>d.showSelectionGraph),i=((t==null?void 0:t.node_type)||"")==="Topic";T(()=>{if(l&&s.current){const d=At.set((t==null?void 0:t.x)||0,(t==null?void 0:t.y)||0,(t==null?void 0:t.z)||0);s.current.position.copy(d)}}),c.useEffect(()=>function(){s.current&&s.current.clear()},[s]);const h=c.useMemo(()=>(r==null?void 0:r.ref_id)===(t==null?void 0:t.ref_id),[r==null?void 0:r.ref_id,t==null?void 0:t.ref_id]),u=(f==null?void 0:f.ref_id)===(t==null?void 0:t.ref_id);return i||u&&l||!u?n.jsx("group",{ref:s,position:e,children:n.jsx(D,{center:!0,sprite:!0,zIndexRange:[0,0],children:n.jsx(Mt,{className:de(t==null?void 0:t.node_type,{selected:u}),color:a,fontColor:j.white,fontSize:i?64:20,onClick:d=>{d.stopPropagation(),t&&g(t)},onPointerOut:d=>{d.stopPropagation(),o(null)},onPointerOver:d=>{d.stopPropagation(),o(t||null)},scale:h?1.05:1,selected:!1,size:u?100:68,type:(t==null?void 0:t.node_type)||"",children:t==null?void 0:t.name})})}):null},xe=c.memo(()=>{const e=x(o=>o.data),t=k(),a=x(o=>o.showSelectionGraph),s=x(o=>o.selectionGraphData),f=x(o=>o.selectedNodeRelativeIds),g=c.useMemo(()=>(a?s.nodes:(e==null?void 0:e.nodes)||[]).filter(i=>f.includes((i==null?void 0:i.ref_id)||"")||(t==null?void 0:t.ref_id)===(i==null?void 0:i.ref_id)).slice(0,nt).map(i=>{const h=ae(i.node_type||"",!0),u=new S((i==null?void 0:i.x)||0,(i==null?void 0:i.y)||0,(i==null?void 0:i.z)||0),d=[];return n.jsx(Gt,{color:h,position:u,relativeIds:d,userData:i},`node-badge-${i.ref_id}`)}),[f,e==null?void 0:e.nodes,a,s,t]);return n.jsx(c.Fragment,{children:g.length?g:null},"node-badges")});xe.displayName="RelevanceBadges";const Ft={font:"/fonts/Inter-Bold.woff",characters:"abcdefghijklmnopqrstuvwxyz0123456789!",fontSize:2,letterSpacing:-.05,lineHeight:1,"material-toneMapped":!1},oe=c.memo(({node:e,hide:t})=>{const a=c.useRef(null),s=k(),g=x(h=>h.selectedNodeRelativeIds).includes((e==null?void 0:e.ref_id)||""),o=!!s&&(s==null?void 0:s.ref_id)===e.ref_id,r=x(h=>h.showSelectionGraph);T(({camera:h})=>{a!=null&&a.current&&(a.current.quaternion.copy(h.quaternion),r&&a.current.position.set(e.x,e.y,e.z))});const l=c.useMemo(()=>((e.edge_count||1)*4,(e.edge_count||1)*4),[e.edge_count,o,g,r]),i=c.useMemo(()=>s&&!o&&!g?.1:1,[o,s,g]);return n.jsx(Ge,{ref:a,anchorX:"center",anchorY:"middle",color:j.white,fillOpacity:i,position:[e.x,e.y,e.z],scale:Math.min(l,10),userData:e,visible:!t,...Ft,children:e.name})});oe.displayName="TextNode";const Lt=({position:e,title:t})=>{const a=c.useRef(null);return c.useEffect(()=>function(){a.current&&a.current.clear()},[a]),n.jsx("group",{ref:a,position:e,children:n.jsx(D,{center:!0,sprite:!0,children:n.jsx(Ht,{justify:"center",onClick:s=>{s.stopPropagation()},onPointerOut:s=>{s.stopPropagation()},onPointerOver:s=>{s.stopPropagation()},children:t})})})},Ht=P(Z)`
  text-align: center;

  outline-offset: 0px;
  background: rgba(0, 0, 0, 0.75);
  color: #ffffff;
  cursor: pointer;
  transition: font-size 0.4s, outline 0.4s;
  align-items: center;
  justify-content: center;
  font-family: Barlow;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);

  &:hover {
    outline-offset: 4px;
  }

  &.selected {
    .badge-wrapper {
      top: 0;
    }

    font-size: 36px;

    &:hover {
      outline-offset: 0px;
    }
  }

  &.topic {
    outline: none;
    background: none;
    &:hover {
      font-size: 36px;
    }
    white-space: nowrap;
    .badge-wrapper {
      display: none;
    }
  }

  .badge-wrapper {
    position: absolute;
    top: -7px;
    left: -14px;
  }
`,Ot=({link:e,title:t})=>{const a=c.useRef(null),s=k(),[f,g]=c.useState(new S(0,0,0)),[o,r]=c.useState(new S(0,0,0)),[l,i]=c.useState(8947848);console.warn(f),console.warn(o),c.useEffect(()=>{var u,d,b,p,y,w;g(new S(((u=e.sourcePosition)==null?void 0:u.x)||0,((d=e.sourcePosition)==null?void 0:d.y)||0,((b=e.sourcePosition)==null?void 0:b.z)||0)),r(new S(((p=e.targetPosition)==null?void 0:p.x)||0,((y=e.targetPosition)==null?void 0:y.y)||0,((w=e.targetPosition)==null?void 0:w.z)||0)),i(ve.children.segmentColor)},[s,e]);const h=new S().addVectors(f,o).multiplyScalar(.5);return n.jsxs(n.Fragment,{children:[n.jsx(Fe,{ref:a,color:"0xFFFFFF",end:o,start:f}),n.jsx(Lt,{position:h,title:t})]})};let Q=null;const ye=c.memo(()=>{const e=k(),[t,a]=x(o=>[o.data,o.selectedNodeRelativeIds]),[s,f]=x(o=>[o.selectionGraphData,o.setSelectionData]);c.useEffect(()=>{const o=(t==null?void 0:t.links.filter(i=>i.source===(e==null?void 0:e.ref_id)||i.target===(e==null?void 0:e.ref_id)))||[],l={nodes:((t==null?void 0:t.nodes)||[]).filter(i=>o.some(h=>h.source===i.ref_id||h.target===i.ref_id)).map(i=>{const h=i.ref_id===(e==null?void 0:e.ref_id)&&i.node_type!=="Topic"?{fx:0,fy:0,fz:0}:{};return{...i,x:0,y:0,z:0,...h}}),links:o};f(structuredClone(l))},[t,e,a,f]),c.useEffect(()=>{Q=rt(s.nodes).force("charge",it().strength(-30)).force("center",ct()).force("collide",at(10)).numDimensions(2)},[s]),T(()=>{Q&&Q.tick()}),console.log(s);const g=s.links.map(o=>{const r=s.nodes.find(i=>o.source===i.ref_id),l=s.nodes.find(i=>o.target===i.ref_id);return{...o,sourcePosition:{x:r==null?void 0:r.x,y:r==null?void 0:r.y,z:r==null?void 0:r.z},targetPosition:{x:l==null?void 0:l.x,y:l==null?void 0:l.y,z:l==null?void 0:l.z}}});return n.jsxs(n.Fragment,{children:[s==null?void 0:s.nodes.map(o=>n.jsx(oe,{node:o},`${o.ref_id||o.ref_id}-compact`)),n.jsx(le,{fog:!0,lineWidth:.9,children:g.map((o,r)=>n.jsx(Ot,{link:o,title:o.edge_type},r.toString()))},`selection-links-${g.length}`)]})});ye.displayName="SelectionDataNodes";const be=c.memo(()=>{const[e,t,a,s,f,g]=x(u=>[u.data,u.selectedNode,u.setHoveredNode,u.showSelectionGraph,u.selectionGraphData,u.setSelectedNode]),o=c.useCallback(u=>!!(s&&!f.nodes.find(d=>d.ref_id===u.ref_id)),[s,f]),r=c.useCallback(u=>{const d=u==null?void 0:u[0];d&&d.userData&&(o(d.userData)||g((d==null?void 0:d.userData)||null))},[o,g]),l=c.useCallback(u=>{u.stopPropagation(),a(null)},[a]),i=c.useCallback(u=>{var p;const b=u.intersections.map(y=>y.object)[0];if((p=b==null?void 0:b.userData)!=null&&p.ref_id){const y=b.userData;o(y)||(u.stopPropagation(),a(y))}},[a,o]),h=s&&!!t;return n.jsxs(Le,{filter:u=>u.filter(d=>{var b;return!!((b=d.userData)!=null&&b.ref_id)}),onChange:r,onPointerOut:l,onPointerOver:i,children:[!1,!s&&n.jsx(xe,{}),e==null?void 0:e.nodes.map(u=>{return u.node_type,n.jsx(oe,{hide:h,node:u},u.ref_id);return n.jsx(me,{hide:h,node:u},u.ref_id)}),h&&n.jsx(ye,{})]})});be.displayName="Cubes";const J=5e3,$t={show:"#FF723C",clip:"#FFFF00",episode:"#FF7F50",guest:"#E066FF",topic:"#F8F8FF"};Object.values($t).map(e=>e);const Rt=({link:e,animated:t})=>{var y,w;const a=k(),[s,f]=c.useState(new S(0,0,0)),[g,o]=c.useState(new S(0,0,0)),[r,l]=c.useState(8947848),i=x(v=>v.nodesNormalized);c.useEffect(()=>{var v,M,A,G,$,R,m;f(new S(((v=e.sourcePosition)==null?void 0:v.x)||0,((M=e.sourcePosition)==null?void 0:M.y)||0,((A=e.sourcePosition)==null?void 0:A.z)||0)),o(new S(((G=e.targetPosition)==null?void 0:G.x)||0,(($=e.targetPosition)==null?void 0:$.y)||0,((R=e.targetPosition)==null?void 0:R.z)||0)),l((m=_e.Topic)==null?void 0:m.segmentColor)},[a,e]);const h=new S(0,1,0),u=new lt(s,h,g),b=((y=i[e.source])==null?void 0:y.node_type)!==((w=i[e.target])==null?void 0:w.node_type)?u.getPoints(50):[s,g],p=!a||a.ref_id===e.source||a.ref_id===e.target;return n.jsx(He,{color:r,opacity:.1,points:b.map(v=>v.toArray()),transparent:!0,visible:p})},Ut=e=>n.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:n.jsxs("g",{id:"delete",children:[n.jsx("mask",{id:"mask0_2401_3378",maskUnits:"userSpaceOnUse",x:"0",y:"0",width:"20",height:"20",children:n.jsx("rect",{id:"Bounding box",width:"1em",height:"1em",fill:"currentColor"})}),n.jsx("g",{children:n.jsx("path",{id:"delete_2",d:"M6.08975 17.0834C5.67415 17.0834 5.31919 16.9362 5.02485 16.6419C4.73051 16.3475 4.58333 15.9926 4.58333 15.577V5.00009H4.375C4.19765 5.00009 4.04915 4.94026 3.9295 4.82061C3.80983 4.70095 3.75 4.55245 3.75 4.37511C3.75 4.19776 3.80983 4.04926 3.9295 3.92961C4.04915 3.80994 4.19765 3.75011 4.375 3.75011H7.49998C7.49998 3.54605 7.57183 3.37218 7.71552 3.22848C7.85922 3.08479 8.03309 3.01294 8.23715 3.01294H11.7628C11.9669 3.01294 12.1407 3.08479 12.2844 3.22848C12.4281 3.37218 12.5 3.54605 12.5 3.75011H15.625C15.8023 3.75011 15.9508 3.80994 16.0705 3.92961C16.1901 4.04926 16.25 4.19776 16.25 4.37511C16.25 4.55245 16.1901 4.70095 16.0705 4.82061C15.9508 4.94026 15.8023 5.00009 15.625 5.00009H15.4166V15.577C15.4166 15.9926 15.2695 16.3475 14.9751 16.6419C14.6808 16.9362 14.3258 17.0834 13.9102 17.0834H6.08975ZM14.1666 5.00009H5.83331V15.577C5.83331 15.6518 5.85735 15.7132 5.90544 15.7613C5.95352 15.8094 6.01496 15.8334 6.08975 15.8334H13.9102C13.985 15.8334 14.0464 15.8094 14.0945 15.7613C14.1426 15.7132 14.1666 15.6518 14.1666 15.577V5.00009ZM7.83654 14.1668H9.08652V6.66675H7.83654V14.1668ZM10.9134 14.1668H12.1634V6.66675H10.9134V14.1668Z",fill:"currentColor"})})]})}),O=e=>({close:{backgroundColor:"rgba(48, 51, 66, 1)",borderColor:"#fff",fontColor:"rgba(255, 255, 255, 1)"},focus:{backgroundColor:e?"rgba(255, 255, 255, 0.90);":"rgba(255, 255, 255, 0.90)",borderColor:e?"#FFDB58bb":"#fff",fontColor:"rgba(48, 51, 66, 1)"},menu:{backgroundColor:"#00000066",borderColor:e?"#ffffff66":"#5078f2",fontColor:e?"#ffffff66":"#fff"}}),Bt=new S,Se=c.memo(()=>{const e=c.useRef(null),t=ue(p=>p.setSidebarOpen),{open:a}=X("editNodeName"),{open:s}=X("removeNode"),{open:f}=X("addEdgeToNode"),[g]=Ne(p=>[p.isAdmin]),o=x(p=>p.showSelectionGraph),r=x(p=>p.selectionGraphData),l=x(p=>p.data),i=k(),h=x(p=>p.setSelectedNode),u=x(p=>p.setShowSelectionGraph);T(()=>{d()});const d=c.useCallback(()=>{const p=o?r:l;if(e.current){const y=p==null?void 0:p.nodes.find(w=>w.ref_id===(i==null?void 0:i.ref_id));if(y){const w=Bt.set(y==null?void 0:y.x,y==null?void 0:y.y,y==null?void 0:y.z);e.current.position.copy(w)}}},[i,o,r,l]),b=c.useMemo(()=>{const p=[{key:"control-key-1",colors:O(o).focus,icon:n.jsx(gt,{}),left:-80,className:"add",onClick:()=>{f()}},{key:"control-key-2",colors:O(o).focus,icon:n.jsx(Oe,{}),left:-40,className:"edit",onClick:()=>{a()}},{key:"control-key-3",colors:O(o).focus,icon:n.jsx(Ut,{}),left:0,className:"delete",onClick:()=>{s()}}],y=[{key:"control-key-4",colors:O(o).focus,icon:n.jsx(pt,{}),left:0,className:"expand",onClick:()=>{const w=!o;u(w),w&&t(!0)}},{key:"control-key-5",colors:O(!0).close,icon:n.jsx(ft,{}),left:40,className:"exit",onClick:()=>{h(null),u(!1)}}];return[...p,...y].map((w,v)=>({...w,left:-80+v*40}))},[o,f,a,s,u,t,h,g]);return i?n.jsx("group",{ref:e,children:n.jsx(D,{center:!0,className:"control-panel",onClick:p=>p.stopPropagation(),onKeyDown:p=>p.stopPropagation(),onPointerDown:p=>p.stopPropagation(),onPointerOut:p=>p.stopPropagation(),onPointerOver:p=>p.stopPropagation(),onPointerUp:p=>p.stopPropagation(),sprite:!0,zIndexRange:[16777271,16777272],children:b.map(p=>n.jsx(Vt,{backgroundColor:p.colors.backgroundColor,borderColor:p.colors.borderColor,className:p.className,fontColor:p.colors.fontColor,left:p.left,onClick:y=>{y.stopPropagation(),p.onClick()},children:p.icon},p.key))})}):null});Se.displayName="NodeControls";const Vt=P.div`
  position: fixed;
  top: -60px;
  left: ${e=>-7+e.left}px;
  width: 24px;
  height: 24px;

  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${e=>e.backgroundColor?e.backgroundColor:"#000000bb"};
  color: ${e=>e.fontColor?e.fontColor:"#ffffff"};
  border-radius: 100%;
  font-size: 16px;
  cursor: pointer;
  transition: opacity 0.4s;
  box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.5);
`,we=c.memo(()=>n.jsx(n.Fragment,{children:n.jsx(Se,{})}));we.displayName="NodeDetailsPanel";const Zt=()=>{const[e,t,a,s,f]=x(r=>[r.data,r.isFetching,r.graphStyle,r.showSelectionGraph,r.selectionGraphData]),g=c.useMemo(()=>s?0:a==="force"?.2:.4,[s,a]),o=c.useMemo(()=>((s?f.links:e==null?void 0:e.links)||[]).map(i=>n.jsx(Rt,{link:i},i.source)),[e==null?void 0:e.links,f.links,s]);return t?null:n.jsxs(n.Fragment,{children:[n.jsx(be,{}),!1,!1,!s&&n.jsx(le,{fog:!0,limit:o.length,lineWidth:g,children:o},`links-${o.length}-${a}`),n.jsx(we,{}),!1]})},Dt=()=>{const{fogColor:e}=pe("universe",{fogColor:ze}),t=fe(g=>g.graphStyle),a=c.useRef(null),s=c.useRef(null),f=c.useRef(null);return T(({camera:g,clock:o})=>{const r=o.getElapsedTime();if(a.current){const i=Math.sin(r/8)*1e3;a.current.position.setZ(i)}if(s.current&&s.current.position.lerp(g.position,.5),f.current){const l=r*.5,i=Math.sin(l)*J,h=Math.cos(l)*J;f.current.position.set(i,0,h)}}),n.jsxs(n.Fragment,{children:[n.jsx("hemisphereLight",{args:[j.white,Pe,ke]}),t!=="earth"&&n.jsx("fog",{args:[e,5,18e3],attach:"fog"}),n.jsx("ambientLight",{color:j.white,intensity:1}),n.jsx("pointLight",{ref:s,color:j.white,distance:4e3,intensity:5,position:[0,0,0]}),n.jsx("directionalLight",{ref:f,color:j.white,intensity:8,position:[J,0,0]}),n.jsx("pointLight",{ref:a,color:j.white,distance:4e3,intensity:8,position:[0,0,0]})]})},Wt=({fullSize:e=!0})=>{const t=ue(a=>a.sidebarIsOpen);return n.jsx(Yt,{align:"center",className:de({"sidebar-is-open":t&&!e}),justify:"center",children:n.jsx(ht,{color:j.SECONDARY_BLUE,size:64})})},Yt=P(Z)`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  background-color: ${j.black};
  z-index: 1;
`,qt=()=>n.jsx(D,{children:n.jsx(Ve,{})}),Xt=()=>{const{universeColor:e}=pe("universe",{universeColor:j.black}),t=ut(),a=c.useMemo(()=>t!=null&&t.node_type?ae(t.node_type):St,[t]);return n.jsxs(n.Fragment,{children:[n.jsx("color",{args:[e],attach:"background"}),n.jsx(Dt,{}),n.jsx(zt,{}),n.jsxs(Ze,{children:[n.jsxs(De,{autoClear:!1,multisampling:8,children:[n.jsx(We,{darkness:.7,eskil:!1,offset:.05}),n.jsx(Ye,{luminanceThreshold:1,mipmapBlur:!0,resolutionX:se.AUTO_SIZE,resolutionY:se.AUTO_SIZE}),n.jsx(qe,{blendFunction:Xe.SCREEN,blur:!0,edgeStrength:4,hiddenEdgeColor:a,visibleEdgeColor:a})]}),n.jsx(Zt,{})]})]})};let ee=null;const Kt={aspect:window.innerWidth/window.innerHeight,far:3e4,near:1,position:[N.x,N.y,N.z]},Qt=()=>{const[e,t,a]=[z(o=>o.setIsUserScrollingOnHtmlPanel),z(o=>o.setIsUserScrolling),z(o=>o.setUserMovedCamera)],s=fe(o=>o.isFetching),f=c.useCallback(o=>{var i;const{target:r}=o,{offsetParent:l}=r;ee&&clearTimeout(ee),(i=l==null?void 0:l.classList)!=null&&i.contains("html-panel")&&l.clientHeight<l.scrollHeight&&e(!0),t(!0),a(!0),ee=setTimeout(()=>{t(!1),e(!1)},200)},[t,e,a]),g=c.useCallback(o=>Te(o,"threeState"),[]);return n.jsxs(Jt,{children:[n.jsx(c.Suspense,{fallback:null,children:n.jsxs($e,{camera:Kt,id:"universe-canvas",onCreated:g,onWheel:f,children:[!1,n.jsx("primitive",{object:new dt(1e4)}),!1,!1,n.jsxs(c.Suspense,{fallback:n.jsx(qt,{}),children:[n.jsx(Re,{}),n.jsx(Ue,{}),n.jsx(Be,{}),n.jsx(Xt,{})]})]})}),s&&n.jsx(Wt,{fullSize:!1})]})},Jt=P(Z)`
  flex: 1 1 100%;
  position: relative;
`,ao=c.memo(Qt);export{ao as Universe};
