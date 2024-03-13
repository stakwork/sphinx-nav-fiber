import{r as c,j as r,s as P,c as N,F as D,Z as ve,af as Ce,u as _e,a5 as Pe,a6 as ke,a7 as ze,a8 as Te}from"./index-5e402b8d.js";import{c as z,u as ce,b as T,p as Ee,g as Ie,C as Ae,S as Ge,d as ae,H as W,T as Me,f as Fe,h as le,i as Le,L as Oe,E as $e,j as Re,k as Ue,l as He,A as Be,n as Ve,o as De,q as We,r as Ye,V as Ze,B as qe,R as se,O as Xe,s as Ke}from"./EditIcon-93f4cccd.js";import{W as Qe,X as Je,Y as et,V as S,Z as tt,$ as ot,a0 as st,a1 as Y,H as nt,a2 as rt,e as de,ap as it,aq as ct,ar as at,as as lt,at as dt,b as ue,ab as pe,u as fe,au as ut,a as pt}from"./react-toastify.esm-2e91314a.js";import{u as k,a as x}from"./index-0fa5f048.js";import{f as ft,d as gt}from"./index.esm-58802bb8.js";import{P as mt}from"./PlusIcon-81c70582.js";import{u as X}from"./index-0692858f.js";import{C as ht}from"./ClipLoader-f1f2aaad.js";const xt=(e,t,a,s,f)=>{const g=new Je,o=1e-5;g.absarc(o,o,o,-Math.PI/2,-Math.PI,!0),g.absarc(o,t-s*2,o,Math.PI,Math.PI/2,!0),g.absarc(e-s*2,t-s*2,o,Math.PI/2,0,!0),g.absarc(e-s*2,o,o,0,-Math.PI/2,!0);const n=new et(g,{depth:a-s*2,bevelEnabled:!0,bevelSegments:f,steps:2,bevelSize:s,bevelThickness:s,curveSegments:f});n.center();const l=[],i=n.getAttribute("normal"),m=n.getAttribute("position");for(let u=0;u<m.count;u+=1){const d=new S(i.getX(u),i.getY(u),i.getZ(u)),b=new S(m.getX(u),m.getY(u),m.getZ(u));let p=0,y=0;Math.abs(d.y)>.9?(p=b.x/e+.5,y=1-(b.z/a+.5)):Math.abs(d.x)>.9?(p=-b.z/a+.5,y=1-(-b.y/t+.5)):Math.abs(d.z)>.9&&(p=b.x/e+.5,y=1-(-b.y/t+.5)),l.push(p,y)}return n.setAttribute("uv",new tt(l,2)),n};xt(10,10,10,2,10);const ne=new Qe(10,10,10),yt=500,bt=800,St=new S(0,0,0),wt=16777215;let L=null;const jt=500,te=(e,t)=>{if(L)return null;L=setTimeout(()=>{L&&(clearTimeout(L),L=null)},jt);const a=[];return e.forEach(f=>{const g=t.position.distanceTo(St.set(f.x,f.y,f.z));g<bt&&a.push({id:f.ref_id||"",distance:g})}),a.sort((f,g)=>f.distance-g.distance).slice(0,yt).map(f=>f.id)},_=new S(0,0,0),re=100,Nt=600,vt=2e3,K={x:172.7392402058252,y:-239.04675366094037,z:-2e3};let I,O;const Ct=4e3,_t=2e3,Pt=e=>{const t=k(),a=x(h=>h.cameraFocusTrigger),s=z(h=>h.isUserDragging),f=z(h=>h.isUserScrolling),g=z(h=>h.setUserMovedCamera),o=x(h=>h.setNearbyNodeIds),n=x(h=>h.showSelectionGraph),l=x(h=>h.data),i=x(h=>h.graphStyle),{camera:m}=ce(),[u,d]=c.useState(!1),[b,p]=c.useState(!1),[y,w]=c.useState(re),v=c.useMemo(()=>{if(n)return new S(0,0,0);const h=l==null?void 0:l.nodes.find(E=>E.ref_id===(t==null?void 0:t.ref_id));let j=new S(2e3,2e3,3e3);if(h&&l){const E=[],F=new S(h.x,h.y,h.z);let q=new S(0,0,0);E.map(H=>(q=q.add(new S(H.x,H.y,H.z).normalize()),H));const je=h.edge_count?1-1/(h.edge_count+10):1,Ne=F.sub(q).multiplyScalar(.8*je);j=F.add(Ne)}return j},[n,t,l]),A=c.useMemo(()=>{if(n)return new S(0,0,0);const h=l==null?void 0:l.nodes.find(j=>j.ref_id===(t==null?void 0:t.ref_id));return new S((h==null?void 0:h.x)||0,(h==null?void 0:h.y)||0,(h==null?void 0:h.z)||0)},[n,t,l]);c.useEffect(()=>{var h;n&&((h=e.current)==null||h.setLookAt(K.x,K.y,K.z,0,0,0,!1)),G()},[n]),c.useEffect(()=>{n?w(vt):(t==null?void 0:t.node_type)==="topic"?w(Nt):w(re)},[t,w,n]),c.useEffect(()=>{M()},[a]),c.useEffect(()=>{(s||f)&&(d(!0),p(!0))},[s,f,d,p]),c.useEffect(()=>{if(t)if(!n&&i==="earth"&&(e!=null&&e.current)){const h=e.current.camera.position.distanceTo(new S),j=ot(A,-h/2);e.current.setLookAt(j.x,j.y,j.z,0,0,0,!0)}else I&&clearTimeout(I),I=setTimeout(()=>{p(!0),clearTimeout(I)},_t),G();return()=>{I&&clearTimeout(I),O&&clearTimeout(O)}},[t]),T(h=>{e.current&&(u||R(v,h.camera),b||U(A,h.camera))});const G=()=>{if(t){const h=m.position.distanceTo(v);Ee(h)}M()},M=()=>{d(!1),p(!1),g(!1),O&&clearTimeout(O),O=setTimeout(()=>{d(!0),p(!0)},Ct)},R=(h,j)=>{if(j.position.distanceTo(h)<y)d(!0);else{j.position.lerp(h,.5);const F=te((l==null?void 0:l.nodes)||[],m);F&&o(F)}},U=(h,j)=>{var E;(E=e==null?void 0:e.current)==null||E.setLookAt(j.position.x,j.position.y,j.position.z,h.x,h.y,h.z,!0)};return null},kt=1;let C=null;const zt=(e,{enabled:t})=>{const a=k();Pt(e);const s=z(m=>m.isUserDragging),f=x(m=>m.disableCameraRotation),g=x(m=>m.data),o=x(m=>m.graphStyle),n=x(m=>m.graphRadius),l=x(m=>m.setNearbyNodeIds);c.useEffect(()=>{t||(C==null||C.kill(),C=null)},[t]);const i=c.useCallback(()=>{C==null||C.kill();const m={value:-244},u=Ie.to(m,{duration:5,keyframes:{"0%":{value:10},"100%":{delay:2,ease:"Power4.easeIn",value:-200}},onComplete:()=>{C=null},onInterrupt(){u.kill()},onUpdate:()=>{var b;const{value:d}=m;if(e.current){const p=te((g==null?void 0:g.nodes)||[],e.current.camera);p&&l(p),(b=e.current)==null||b.dolly(d,!1)}}});u.play(),C=u},[]);return c.useEffect(()=>{e.current&&n&&(o==="sphere"?(e.current.maxDistance=8e3,e.current.minDistance=200,e.current.setTarget(0,0,500,!0)):(e.current.maxDistance=e.current.getDistanceToFitSphere(n+200),e.current.minDistance=100))},[n,o,e]),c.useEffect(()=>{i()},[i,o]),c.useEffect(()=>{!a&&e.current&&e.current.setLookAt(_.x,_.y,_.z,0,0,0,!0)},[a]),T((m,u)=>{e.current&&(!f&&!s&&(e.current.azimuthAngle+=kt*u*st.DEG2RAD),e.current.update(u))}),null},Tt=({disableAnimations:e})=>{const t=c.useRef(null),a=x(d=>d.graphStyle),s=x(d=>d.data),f=x(d=>d.setNearbyNodeIds),g=x(d=>d.setDisableCameraRotation),[o]=c.useState(.8),{camera:n}=ce(),[l,i,m,u]=z(d=>[d.isUserDragging,d.setIsUserDragging,d.isUserScrolling,d.isUserScrollingOnHtmlPanel]);return zt(t,{enabled:!e&&!m&&!l}),c.useEffect(()=>{t.current&&t.current.setLookAt(_.x,_.y,_.z,0,0,0,!0)},[a]),c.useEffect(()=>{if(!l){const d=te((s==null?void 0:s.nodes)||[],n);d&&f(d)}},[n,n.position,n.position.x,n.position.y,n.position.z,s==null?void 0:s.nodes,f,l]),c.useEffect(()=>{l&&g(!0)},[l,g]),r.jsx(Ae,{ref:t,boundaryEnclosesCamera:!0,enabled:!u,makeDefault:!0,maxDistance:12e3,minDistance:100,onEnd:()=>i(!1),onStart:()=>i(!0),smoothTime:o})},Z={metalness:.9,roughness:0},Et={...Z};new Y(Et);const ge=new nt,V=ge.load("noimage.jpeg"),ie=new Y({...Z,map:V}),me=.4,It=new Y({...Z,map:V,transparent:!0,opacity:me}),B={},At=(e,t)=>{const[a,s]=c.useState(V),[f,g]=c.useState(ie);return c.useEffect(()=>{const o=`${e}${t&&"-transparent"}`;if(B[o]){s(B[o].texture),g(B[o].material);return}ge.load(e,n=>{const l=new Y({map:n,transparent:t,opacity:t?me:1,...Z});B[o]={texture:n,material:l},s(n),g(l)},void 0,()=>{s(V),g(t?It:ie)})},[e,t]),c.useEffect(()=>function(){a.dispose(),f.dispose()},[a,f]),f},he=c.memo(({node:e,hide:t,animated:a})=>{const s=c.useRef(null),[f]=c.useState(ne),g=k(),o=x(m=>m.showSelectionGraph),n=!!g&&e.ref_id===g.ref_id,l=At("noimage.jpeg",!1);T((m,u)=>{a&&s.current&&(s.current.position.set(e.x,e.y,e.z),n&&(s.current.rotation.y+=u*1,s.current.rotation.x-=u*.6))}),c.useEffect(()=>function(){f.dispose()},[f]);const i=c.useMemo(()=>o&&n?20:n?1*1.2:10,[n,o]);return r.jsx(Ge,{enabled:!!n,children:r.jsx("mesh",{ref:s,geometry:ne,material:l,name:e.ref_id,position:[e.x,e.y,e.z],scale:i,userData:e,visible:!t})})});he.displayName="Cube";const Gt=P(D)`
  text-align: center;
  width: ${e=>e.type==="topic"?"auto":`${e.size}px`};
  height: ${e=>e.type==="topic"?"auto":`${e.size}px`};
  outline: 1px solid ${e=>N.white};
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
  background: ${N.transparentBlack};
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
  background: ${N.transparentBlack};
  padding: 0 4px;
  color: ${e=>e.color};
  min-width: 30px;
  height: 26px;
  font-size: 12px;
  font-weight: 500;
  border-radius: 6px;
  margin-right: 5px;
`;const Mt=new S,Ft=({position:e,userData:t,color:a})=>{const s=c.useRef(null),[f,g]=x(d=>[d.selectedNode,d.setSelectedNode]),o=x(d=>d.setHoveredNode),n=x(d=>d.hoveredNode),l=x(d=>d.showSelectionGraph),i=((t==null?void 0:t.node_type)||"")==="Topic";T(()=>{if(l&&s.current){const d=Mt.set((t==null?void 0:t.x)||0,(t==null?void 0:t.y)||0,(t==null?void 0:t.z)||0);s.current.position.copy(d)}}),c.useEffect(()=>function(){s.current&&s.current.clear()},[s]);const m=c.useMemo(()=>(n==null?void 0:n.ref_id)===(t==null?void 0:t.ref_id),[n==null?void 0:n.ref_id,t==null?void 0:t.ref_id]),u=(f==null?void 0:f.ref_id)===(t==null?void 0:t.ref_id);return i||u&&l||!u?r.jsx("group",{ref:s,position:e,children:r.jsx(W,{center:!0,sprite:!0,zIndexRange:[0,0],children:r.jsx(Gt,{className:de(t==null?void 0:t.node_type,{selected:u}),color:a,fontColor:N.white,fontSize:i?64:20,onClick:d=>{d.stopPropagation(),t&&g(t)},onPointerOut:d=>{d.stopPropagation(),o(null)},onPointerOver:d=>{d.stopPropagation(),o(t||null)},scale:m?1.05:1,selected:!1,size:u?100:68,type:(t==null?void 0:t.node_type)||"",children:t==null?void 0:t.name})})}):null},xe=c.memo(()=>{const e=x(o=>o.data),t=k(),a=x(o=>o.showSelectionGraph),s=x(o=>o.selectionGraphData),f=x(o=>o.selectedNodeRelativeIds),g=c.useMemo(()=>(a?s.nodes:(e==null?void 0:e.nodes)||[]).filter(i=>f.includes((i==null?void 0:i.ref_id)||"")||(t==null?void 0:t.ref_id)===(i==null?void 0:i.ref_id)).slice(0,rt).map(i=>{const m=ae(i.node_type||"",!0),u=new S((i==null?void 0:i.x)||0,(i==null?void 0:i.y)||0,(i==null?void 0:i.z)||0),d=[];return r.jsx(Ft,{color:m,position:u,relativeIds:d,userData:i},`node-badge-${i.ref_id}`)}),[f,e==null?void 0:e.nodes,a,s,t]);return r.jsx(c.Fragment,{children:g.length?g:null},"node-badges")});xe.displayName="RelevanceBadges";const Lt={font:"/fonts/Inter-Bold.woff",characters:"abcdefghijklmnopqrstuvwxyz0123456789!",fontSize:2,letterSpacing:-.05,lineHeight:1,"material-toneMapped":!1},oe=c.memo(({node:e,hide:t})=>{const a=c.useRef(null),s=k(),g=x(m=>m.selectedNodeRelativeIds).includes((e==null?void 0:e.ref_id)||""),o=!!s&&(s==null?void 0:s.ref_id)===e.ref_id,n=x(m=>m.showSelectionGraph);T(({camera:m})=>{a!=null&&a.current&&(a.current.quaternion.copy(m.quaternion),n&&a.current.position.set(e.x,e.y,e.z))});const l=c.useMemo(()=>((e.edge_count||1)*4,(e.edge_count||1)*4),[e.edge_count,o,g,n]),i=c.useMemo(()=>s&&!o&&!g?.1:1,[o,s,g]);return r.jsx(Me,{ref:a,anchorX:"center",anchorY:"middle",color:N.white,fillOpacity:i,position:[e.x,e.y,e.z],scale:Math.min(l,10),userData:e,visible:!t,...Lt,children:e.name})});oe.displayName="TextNode";const Ot=({position:e,title:t})=>{const a=c.useRef(null);return c.useEffect(()=>function(){a.current&&a.current.clear()},[a]),r.jsx("group",{ref:a,position:e,children:r.jsx(W,{center:!0,sprite:!0,children:r.jsx($t,{justify:"center",onClick:s=>{s.stopPropagation()},onPointerOut:s=>{s.stopPropagation()},onPointerOver:s=>{s.stopPropagation()},children:t})})})},$t=P(D)`
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
`,Rt=({link:e,title:t})=>{const a=c.useRef(null),s=k(),[f,g]=c.useState(new S(0,0,0)),[o,n]=c.useState(new S(0,0,0)),[l,i]=c.useState(8947848);console.warn(f),console.warn(o),c.useEffect(()=>{var u,d,b,p,y,w;g(new S(((u=e.sourcePosition)==null?void 0:u.x)||0,((d=e.sourcePosition)==null?void 0:d.y)||0,((b=e.sourcePosition)==null?void 0:b.z)||0)),n(new S(((p=e.targetPosition)==null?void 0:p.x)||0,((y=e.targetPosition)==null?void 0:y.y)||0,((w=e.targetPosition)==null?void 0:w.z)||0)),i(ve.children.segmentColor)},[s,e]);const m=new S().addVectors(f,o).multiplyScalar(.5);return r.jsxs(r.Fragment,{children:[r.jsx(Fe,{ref:a,color:"0xFFFFFF",end:o,start:f}),r.jsx(Ot,{position:m,title:t})]})};let Q=null;const ye=c.memo(()=>{const e=k(),[t,a]=x(o=>[o.data,o.selectedNodeRelativeIds]),[s,f]=x(o=>[o.selectionGraphData,o.setSelectionData]);c.useEffect(()=>{const o=(t==null?void 0:t.links.filter(i=>i.source===(e==null?void 0:e.ref_id)||i.target===(e==null?void 0:e.ref_id)))||[],l={nodes:((t==null?void 0:t.nodes)||[]).filter(i=>o.some(m=>m.source===i.ref_id||m.target===i.ref_id)).map(i=>{const m=i.ref_id===(e==null?void 0:e.ref_id)&&i.node_type!=="Topic"?{fx:0,fy:0,fz:0}:{};return{...i,x:0,y:0,z:0,...m}}),links:o};f(structuredClone(l))},[t,e,a,f]),c.useEffect(()=>{Q=it(s.nodes).force("charge",ct().strength(-30)).force("center",at()).force("collide",lt(10)).numDimensions(2)},[s]),T(()=>{Q&&Q.tick()}),console.log(s);const g=s.links.map(o=>{const n=s.nodes.find(i=>o.source===i.ref_id),l=s.nodes.find(i=>o.target===i.ref_id);return{...o,sourcePosition:{x:n==null?void 0:n.x,y:n==null?void 0:n.y,z:n==null?void 0:n.z},targetPosition:{x:l==null?void 0:l.x,y:l==null?void 0:l.y,z:l==null?void 0:l.z}}});return r.jsxs(r.Fragment,{children:[s==null?void 0:s.nodes.map(o=>r.jsx(oe,{node:o},`${o.ref_id||o.ref_id}-compact`)),r.jsx(le,{fog:!0,lineWidth:.9,children:g.map((o,n)=>r.jsx(Rt,{link:o,title:o.edge_type},n.toString()))},`selection-links-${g.length}`)]})});ye.displayName="SelectionDataNodes";const be=c.memo(()=>{const[e,t,a,s,f,g]=x(u=>[u.data,u.selectedNode,u.setHoveredNode,u.showSelectionGraph,u.selectionGraphData,u.setSelectedNode]),o=c.useCallback(u=>!!(s&&!f.nodes.find(d=>d.ref_id===u.ref_id)),[s,f]),n=c.useCallback(u=>{const d=u==null?void 0:u[0];d&&d.userData&&(o(d.userData)||g((d==null?void 0:d.userData)||null))},[o,g]),l=c.useCallback(u=>{u.stopPropagation(),a(null)},[a]),i=c.useCallback(u=>{var p;const b=u.intersections.map(y=>y.object)[0];if((p=b==null?void 0:b.userData)!=null&&p.ref_id){const y=b.userData;o(y)||(u.stopPropagation(),a(y))}},[a,o]),m=s&&!!t;return r.jsxs(Le,{filter:u=>u.filter(d=>{var b;return!!((b=d.userData)!=null&&b.ref_id)}),onChange:n,onPointerOut:l,onPointerOver:i,children:[!1,!s&&r.jsx(xe,{}),e==null?void 0:e.nodes.map(u=>{return u.node_type,r.jsx(oe,{hide:m,node:u},u.ref_id);return r.jsx(he,{hide:m,node:u},u.ref_id)}),m&&r.jsx(ye,{})]})});be.displayName="Cubes";const J=5e3,Ut={show:"#FF723C",clip:"#FFFF00",episode:"#FF7F50",guest:"#E066FF",topic:"#F8F8FF"};Object.values(Ut).map(e=>e);const Ht=({link:e,animated:t})=>{var y,w;const a=k(),[s,f]=c.useState(new S(0,0,0)),[g,o]=c.useState(new S(0,0,0)),[n,l]=c.useState(8947848),i=x(v=>v.nodesNormalized);c.useEffect(()=>{var v,A,G,M,R,U,h;f(new S(((v=e.sourcePosition)==null?void 0:v.x)||0,((A=e.sourcePosition)==null?void 0:A.y)||0,((G=e.sourcePosition)==null?void 0:G.z)||0)),o(new S(((M=e.targetPosition)==null?void 0:M.x)||0,((R=e.targetPosition)==null?void 0:R.y)||0,((U=e.targetPosition)==null?void 0:U.z)||0)),l((h=Ce.Topic)==null?void 0:h.segmentColor)},[a,e]);const m=new S(0,1,0),u=new dt(s,m,g),b=((y=i[e.source])==null?void 0:y.node_type)!==((w=i[e.target])==null?void 0:w.node_type)?u.getPoints(50):[s,g],p=!a||a.ref_id===e.source||a.ref_id===e.target;return r.jsx(Oe,{color:n,opacity:.1,points:b.map(v=>v.toArray()),transparent:!0,visible:p})},$=e=>({close:{backgroundColor:"rgba(48, 51, 66, 1)",borderColor:"#fff",fontColor:"rgba(255, 255, 255, 1)"},focus:{backgroundColor:e?"rgba(255, 255, 255, 0.90);":"rgba(255, 255, 255, 0.90)",borderColor:e?"#FFDB58bb":"#fff",fontColor:"rgba(48, 51, 66, 1)"},menu:{backgroundColor:"#00000066",borderColor:e?"#ffffff66":"#5078f2",fontColor:e?"#ffffff66":"#fff"}}),Bt=new S,Se=c.memo(()=>{const e=c.useRef(null),t=ue(p=>p.setSidebarOpen),{open:a}=X("editNodeName"),{open:s}=X("removeNode"),{open:f}=X("addEdgeToNode"),[g]=_e(p=>[p.isAdmin]),o=x(p=>p.showSelectionGraph),n=x(p=>p.selectionGraphData),l=x(p=>p.data),i=k(),m=x(p=>p.setSelectedNode),u=x(p=>p.setShowSelectionGraph);T(()=>{d()});const d=c.useCallback(()=>{const p=o?n:l;if(e.current){const y=p==null?void 0:p.nodes.find(w=>w.ref_id===(i==null?void 0:i.ref_id));if(y){const w=Bt.set(y==null?void 0:y.x,y==null?void 0:y.y,y==null?void 0:y.z);e.current.position.copy(w)}}},[i,o,n,l]),b=c.useMemo(()=>{const p=[{key:"control-key-1",colors:$(o).focus,icon:r.jsx(mt,{}),left:-80,className:"add",onClick:()=>{f()}},{key:"control-key-2",colors:$(o).focus,icon:r.jsx($e,{}),left:-40,className:"edit",onClick:()=>{a()}},{key:"control-key-3",colors:$(o).focus,icon:r.jsx(Re,{}),left:0,className:"delete",onClick:()=>{s()}}],y=[{key:"control-key-4",colors:$(o).focus,icon:r.jsx(ft,{}),left:0,className:"expand",onClick:()=>{const w=!o;u(w),w&&t(!0)}},{key:"control-key-5",colors:$(!0).close,icon:r.jsx(gt,{}),left:40,className:"exit",onClick:()=>{m(null),u(!1)}}];return[...p,...y].map((w,v)=>({...w,left:-80+v*40}))},[o,f,a,s,u,t,m,g]);return i?r.jsx("group",{ref:e,children:r.jsx(W,{center:!0,className:"control-panel",onClick:p=>p.stopPropagation(),onKeyDown:p=>p.stopPropagation(),onPointerDown:p=>p.stopPropagation(),onPointerOut:p=>p.stopPropagation(),onPointerOver:p=>p.stopPropagation(),onPointerUp:p=>p.stopPropagation(),sprite:!0,zIndexRange:[16777271,16777272],children:b.map(p=>r.jsx(Vt,{backgroundColor:p.colors.backgroundColor,borderColor:p.colors.borderColor,className:p.className,fontColor:p.colors.fontColor,left:p.left,onClick:y=>{y.stopPropagation(),p.onClick()},children:p.icon},p.key))})}):null});Se.displayName="NodeControls";const Vt=P.div`
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
`,we=c.memo(()=>r.jsx(r.Fragment,{children:r.jsx(Se,{})}));we.displayName="NodeDetailsPanel";const Dt=()=>{const[e,t,a,s,f]=x(n=>[n.data,n.isFetching,n.graphStyle,n.showSelectionGraph,n.selectionGraphData]),g=c.useMemo(()=>s?0:a==="force"?.2:.4,[s,a]),o=c.useMemo(()=>((s?f.links:e==null?void 0:e.links)||[]).map(i=>r.jsx(Ht,{link:i},i.source)),[e==null?void 0:e.links,f.links,s]);return t?null:r.jsxs(r.Fragment,{children:[r.jsx(be,{}),!1,!1,!s&&r.jsx(le,{fog:!0,limit:o.length,lineWidth:g,children:o},`links-${o.length}-${a}`),r.jsx(we,{}),!1]})},Wt=()=>{const{fogColor:e}=pe("universe",{fogColor:ze}),t=fe(g=>g.graphStyle),a=c.useRef(null),s=c.useRef(null),f=c.useRef(null);return T(({camera:g,clock:o})=>{const n=o.getElapsedTime();if(a.current){const i=Math.sin(n/8)*1e3;a.current.position.setZ(i)}if(s.current&&s.current.position.lerp(g.position,.5),f.current){const l=n*.5,i=Math.sin(l)*J,m=Math.cos(l)*J;f.current.position.set(i,0,m)}}),r.jsxs(r.Fragment,{children:[r.jsx("hemisphereLight",{args:[N.white,Pe,ke]}),t!=="earth"&&r.jsx("fog",{args:[e,5,18e3],attach:"fog"}),r.jsx("ambientLight",{color:N.white,intensity:1}),r.jsx("pointLight",{ref:s,color:N.white,distance:4e3,intensity:5,position:[0,0,0]}),r.jsx("directionalLight",{ref:f,color:N.white,intensity:8,position:[J,0,0]}),r.jsx("pointLight",{ref:a,color:N.white,distance:4e3,intensity:8,position:[0,0,0]})]})},Yt=({fullSize:e=!0})=>{const t=ue(a=>a.sidebarIsOpen);return r.jsx(Zt,{align:"center",className:de({"sidebar-is-open":t&&!e}),justify:"center",children:r.jsx(ht,{color:N.SECONDARY_BLUE,size:64})})},Zt=P(D)`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  background-color: ${N.black};
  z-index: 1;
`,qt=()=>r.jsx(W,{children:r.jsx(De,{})}),Xt=()=>{const{universeColor:e}=pe("universe",{universeColor:N.black}),t=pt(),a=c.useMemo(()=>t!=null&&t.node_type?ae(t.node_type):wt,[t]);return r.jsxs(r.Fragment,{children:[r.jsx("color",{args:[e],attach:"background"}),r.jsx(Wt,{}),r.jsx(Tt,{}),r.jsxs(We,{children:[r.jsxs(Ye,{autoClear:!1,multisampling:8,children:[r.jsx(Ze,{darkness:.7,eskil:!1,offset:.05}),r.jsx(qe,{luminanceThreshold:1,mipmapBlur:!0,resolutionX:se.AUTO_SIZE,resolutionY:se.AUTO_SIZE}),r.jsx(Xe,{blendFunction:Ke.SCREEN,blur:!0,edgeStrength:4,hiddenEdgeColor:a,visibleEdgeColor:a})]}),r.jsx(Dt,{})]})]})};let ee=null;const Kt={aspect:window.innerWidth/window.innerHeight,far:3e4,near:1,position:[_.x,_.y,_.z]},Qt=()=>{const[e,t,a]=[z(o=>o.setIsUserScrollingOnHtmlPanel),z(o=>o.setIsUserScrolling),z(o=>o.setUserMovedCamera)],s=fe(o=>o.isFetching),f=c.useCallback(o=>{var i;const{target:n}=o,{offsetParent:l}=n;ee&&clearTimeout(ee),(i=l==null?void 0:l.classList)!=null&&i.contains("html-panel")&&l.clientHeight<l.scrollHeight&&e(!0),t(!0),a(!0),ee=setTimeout(()=>{t(!1),e(!1)},200)},[t,e,a]),g=c.useCallback(o=>Te(o,"threeState"),[]);return r.jsxs(Jt,{children:[r.jsx(c.Suspense,{fallback:null,children:r.jsxs(Ue,{camera:Kt,id:"universe-canvas",onCreated:g,onWheel:f,children:[!1,r.jsx("primitive",{object:new ut(1e4)}),!1,!1,r.jsxs(c.Suspense,{fallback:r.jsx(qt,{}),children:[r.jsx(He,{}),r.jsx(Be,{}),r.jsx(Ve,{}),r.jsx(Xt,{})]})]})}),s&&r.jsx(Yt,{fullSize:!1})]})},Jt=P(D)`
  flex: 1 1 100%;
  position: relative;
`,ao=c.memo(Qt);export{ao as Universe};
