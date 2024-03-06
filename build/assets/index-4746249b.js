import{r as d,j as c,s as z,c as k,F as ee,Z as _e,af as ve,u as Te,a5 as Pe,a6 as Ie,a7 as ze,a8 as Ee}from"./index-d235c36b.js";import{c as I,u as le,b as T,p as Me,g as Le,C as Ae,S as Fe,d as de,H as te,T as Ge,f as Oe,h as ue,i as $e,L as Re,E as Ue,j as He,k as Be,l as De,A as Ve,n as We,o as Ye,q as Ze,r as qe,V as Xe,B as Ke,R as ne,O as Qe,s as Je}from"./EditIcon-b6d1d535.js";import{$ as et,a0 as tt,a1 as ot,V as S,a2 as st,a4 as nt,a5 as rt,a6 as W,O as it,a7 as ct,e as fe,at,au as lt,av as dt,aw as ut,ax as ft,ay as pt,b as pe,ag as ge,u as he,az as gt,a as ht}from"./react-toastify.esm-c1f13023.js";import{u as P,a as x}from"./index-b3901fe7.js";import{f as mt,d as xt}from"./index.esm-1e4be125.js";import{P as yt}from"./PlusIcon-da9b2641.js";import{u as q}from"./index-13b29bcb.js";import{C as bt}from"./ClipLoader-a3c62db1.js";const St=(e,t,i,o,g)=>{const a=new tt,s=1e-5;a.absarc(s,s,s,-Math.PI/2,-Math.PI,!0),a.absarc(s,t-o*2,s,Math.PI,Math.PI/2,!0),a.absarc(e-o*2,t-o*2,s,Math.PI/2,0,!0),a.absarc(e-o*2,s,s,0,-Math.PI/2,!0);const l=new ot(a,{depth:i-o*2,bevelEnabled:!0,bevelSegments:g,steps:2,bevelSize:o,bevelThickness:o,curveSegments:g});l.center();const p=[],u=l.getAttribute("normal"),h=l.getAttribute("position");for(let n=0;n<h.count;n+=1){const r=new S(u.getX(n),u.getY(n),u.getZ(n)),b=new S(h.getX(n),h.getY(n),h.getZ(n));let f=0,y=0;Math.abs(r.y)>.9?(f=b.x/e+.5,y=1-(b.z/i+.5)):Math.abs(r.x)>.9?(f=-b.z/i+.5,y=1-(-b.y/t+.5)):Math.abs(r.z)>.9&&(f=b.x/e+.5,y=1-(-b.y/t+.5)),p.push(f,y)}return l.setAttribute("uv",new st(p,2)),l};St(10,10,10,2,10);const re=new et(10,10,10),wt=500,Ct=800,jt=new S(0,0,0),kt=16777215;let O=null;const Nt=500,oe=(e,t)=>{if(O)return null;O=setTimeout(()=>{O&&(clearTimeout(O),O=null)},Nt);const i=[];return e.forEach(g=>{const a=t.position.distanceTo(jt.set(g.x,g.y,g.z));a<Ct&&i.push({id:g.ref_id||"",distance:a})}),i.sort((g,a)=>g.distance-a.distance).slice(0,wt).map(g=>g.id)},v=new S(0,0,0),ie=100,_t=600,vt=2e3,X={x:172.7392402058252,y:-239.04675366094037,z:-2e3};let M,$;const Tt=4e3,Pt=2e3,It=e=>{const t=P(),i=x(m=>m.cameraFocusTrigger),o=I(m=>m.isUserDragging),g=I(m=>m.isUserScrolling),a=I(m=>m.setUserMovedCamera),s=x(m=>m.setNearbyNodeIds),l=x(m=>m.showSelectionGraph),p=x(m=>m.data),u=x(m=>m.graphStyle),{camera:h}=le(),[n,r]=d.useState(!1),[b,f]=d.useState(!1),[y,w]=d.useState(ie),N=d.useMemo(()=>{if(l)return new S(0,0,0);const m=p==null?void 0:p.nodes.find(E=>E.ref_id===(t==null?void 0:t.ref_id));let C=new S(2e3,2e3,3e3);if(m&&p){const E=[],G=new S(m.x,m.y,m.z);let Z=new S(0,0,0);E.map(B=>(Z=Z.add(new S(B.x,B.y,B.z).normalize()),B));const ke=m.edge_count?1-1/(m.edge_count+10):1,Ne=G.sub(Z).multiplyScalar(.8*ke);C=G.add(Ne)}return C},[l,t,p]),L=d.useMemo(()=>{if(l)return new S(0,0,0);const m=p==null?void 0:p.nodes.find(C=>C.ref_id===(t==null?void 0:t.ref_id));return new S((m==null?void 0:m.x)||0,(m==null?void 0:m.y)||0,(m==null?void 0:m.z)||0)},[l,t,p]);d.useEffect(()=>{var m;l&&((m=e.current)==null||m.setLookAt(X.x,X.y,X.z,0,0,0,!1)),A()},[l]),d.useEffect(()=>{l?w(vt):(t==null?void 0:t.node_type)==="topic"?w(_t):w(ie)},[t,w,l]),d.useEffect(()=>{F()},[i]),d.useEffect(()=>{(o||g)&&(r(!0),f(!0))},[o,g,r,f]),d.useEffect(()=>{if(t)if(!l&&u==="earth"&&(e!=null&&e.current)){const m=e.current.camera.position.distanceTo(new S),C=nt(L,-m/2);e.current.setLookAt(C.x,C.y,C.z,0,0,0,!0)}else M&&clearTimeout(M),M=setTimeout(()=>{f(!0),clearTimeout(M)},Pt),A();return()=>{M&&clearTimeout(M),$&&clearTimeout($)}},[t]),T(m=>{e.current&&(n||U(N,m.camera),b||H(L,m.camera))});const A=()=>{if(t){const m=h.position.distanceTo(N);Me(m)}F()},F=()=>{r(!1),f(!1),a(!1),$&&clearTimeout($),$=setTimeout(()=>{r(!0),f(!0)},Tt)},U=(m,C)=>{if(C.position.distanceTo(m)<y)r(!0);else{C.position.lerp(m,.5);const G=oe((p==null?void 0:p.nodes)||[],h);G&&s(G)}},H=(m,C)=>{var E;(E=e==null?void 0:e.current)==null||E.setLookAt(C.position.x,C.position.y,C.position.z,m.x,m.y,m.z,!0)};return null},zt=1;let _=null;const Et=(e,{enabled:t})=>{const i=P();It(e);const o=I(h=>h.isUserDragging),g=x(h=>h.disableCameraRotation),a=x(h=>h.data),s=x(h=>h.graphStyle),l=x(h=>h.graphRadius),p=x(h=>h.setNearbyNodeIds);d.useEffect(()=>{t||(_==null||_.kill(),_=null)},[t]);const u=d.useCallback(()=>{_==null||_.kill();const h={value:-244},n=Le.to(h,{duration:5,keyframes:{"0%":{value:10},"100%":{delay:2,ease:"Power4.easeIn",value:-200}},onComplete:()=>{_=null},onInterrupt(){n.kill()},onUpdate:()=>{var b;const{value:r}=h;if(e.current){const f=oe((a==null?void 0:a.nodes)||[],e.current.camera);f&&p(f),(b=e.current)==null||b.dolly(r,!1)}}});n.play(),_=n},[]);return d.useEffect(()=>{e.current&&l&&(s==="sphere"?(e.current.maxDistance=8e3,e.current.minDistance=200,e.current.setTarget(0,0,500,!0)):(e.current.maxDistance=e.current.getDistanceToFitSphere(l+200),e.current.minDistance=100))},[l,s,e]),d.useEffect(()=>{u()},[u,s]),d.useEffect(()=>{!i&&e.current&&e.current.setLookAt(v.x,v.y,v.z,0,0,0,!0)},[i]),T((h,n)=>{e.current&&(!g&&!o&&(e.current.azimuthAngle+=zt*n*rt.DEG2RAD),e.current.update(n))}),null},Mt=({disableAnimations:e})=>{const t=d.useRef(null),i=x(r=>r.graphStyle),o=x(r=>r.data),g=x(r=>r.setNearbyNodeIds),a=x(r=>r.setDisableCameraRotation),[s]=d.useState(.8),{camera:l}=le(),[p,u,h,n]=I(r=>[r.isUserDragging,r.setIsUserDragging,r.isUserScrolling,r.isUserScrollingOnHtmlPanel]);return Et(t,{enabled:!e&&!h&&!p}),d.useEffect(()=>{t.current&&t.current.setLookAt(v.x,v.y,v.z,0,0,0,!0)},[i]),d.useEffect(()=>{if(!p){const r=oe((o==null?void 0:o.nodes)||[],l);r&&g(r)}},[l,l.position,l.position.x,l.position.y,l.position.z,o==null?void 0:o.nodes,g,p]),d.useEffect(()=>{p&&a(!0)},[p,a]),c.jsx(Ae,{ref:t,boundaryEnclosesCamera:!0,enabled:!n,makeDefault:!0,maxDistance:12e3,minDistance:100,onEnd:()=>u(!1),onStart:()=>u(!0),smoothTime:s})},Y={metalness:.9,roughness:0},Lt={...Y};new W(Lt);const me=new it,V=me.load("noimage.jpeg"),ce=new W({...Y,map:V}),xe=.4,At=new W({...Y,map:V,transparent:!0,opacity:xe}),D={},Ft=(e,t)=>{const[i,o]=d.useState(V),[g,a]=d.useState(ce);return d.useEffect(()=>{const s=`${e}${t&&"-transparent"}`;if(D[s]){o(D[s].texture),a(D[s].material);return}me.load(e,l=>{const p=new W({map:l,transparent:t,opacity:t?xe:1,...Y});D[s]={texture:l,material:p},o(l),a(p)},void 0,()=>{o(V),a(t?At:ce)})},[e,t]),d.useEffect(()=>function(){i.dispose(),g.dispose()},[i,g]),g},ye=d.memo(({node:e,hide:t,animated:i})=>{const o=d.useRef(null),[g]=d.useState(re),a=P(),s=x(h=>h.showSelectionGraph),l=!!a&&e.ref_id===a.ref_id,p=Ft("noimage.jpeg",!1);T((h,n)=>{i&&o.current&&(o.current.position.set(e.x,e.y,e.z),l&&(o.current.rotation.y+=n*1,o.current.rotation.x-=n*.6))}),d.useEffect(()=>function(){g.dispose()},[g]);const u=d.useMemo(()=>s&&l?20:l?1*1.2:10,[l,s]);return c.jsx(Fe,{enabled:!!l,children:c.jsx("mesh",{ref:o,geometry:re,material:p,name:e.ref_id,position:[e.x,e.y,e.z],scale:u,userData:e,visible:!t})})});ye.displayName="Cube";const Gt=z(ee)`
  text-align: center;
  width: ${e=>e.type==="topic"?"auto":`${e.size}px`};
  height: ${e=>e.type==="topic"?"auto":`${e.size}px`};
  outline: 1px solid ${e=>k.white};
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
`;z.img`
  background-image: ${({src:e})=>`url(${e})`};
  background-size: contain;
  background-repeat: no-repeat;
  width: ${e=>e.size}px;
  height: ${e=>e.size}px;
  border-radius: ${e=>e.borderRadius};
`;z.div`
  display: flex;
  position: absolute;
  bottom: -14px;
  left: -5px;
  width: auto;
  justify-content: center;
  align-items: center;
`;z.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${k.transparentBlack};
  border: 2px solid ${e=>e.color};
  color: #fff;
  padding: 0 4px;
  min-width: 30px;
  height: 26px;
  font-size: 12px;
  font-weight: 500;
  border-radius: 6px;
  margin-right: 5px;
`;z.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid ${e=>e.color}44;
  background: ${k.transparentBlack};
  padding: 0 4px;
  color: ${e=>e.color};
  min-width: 30px;
  height: 26px;
  font-size: 12px;
  font-weight: 500;
  border-radius: 6px;
  margin-right: 5px;
`;const Ot=new S,$t=({position:e,userData:t,color:i})=>{const o=d.useRef(null),[g,a]=x(r=>[r.selectedNode,r.setSelectedNode]),s=x(r=>r.setHoveredNode),l=x(r=>r.hoveredNode),p=x(r=>r.showSelectionGraph),u=((t==null?void 0:t.node_type)||"")==="Topic";T(()=>{if(p&&o.current){const r=Ot.set((t==null?void 0:t.x)||0,(t==null?void 0:t.y)||0,(t==null?void 0:t.z)||0);o.current.position.copy(r)}}),d.useEffect(()=>function(){o.current&&o.current.clear()},[o]);const h=d.useMemo(()=>(l==null?void 0:l.ref_id)===(t==null?void 0:t.ref_id),[l==null?void 0:l.ref_id,t==null?void 0:t.ref_id]),n=(g==null?void 0:g.ref_id)===(t==null?void 0:t.ref_id);return u||n&&p||!n?c.jsx("group",{ref:o,position:e,children:c.jsx(te,{center:!0,sprite:!0,zIndexRange:[0,0],children:c.jsx(Gt,{className:fe(t==null?void 0:t.node_type,{selected:n}),color:i,fontColor:k.white,fontSize:u?64:20,onClick:r=>{r.stopPropagation(),t&&a(t)},onPointerOut:r=>{r.stopPropagation(),s(null)},onPointerOver:r=>{r.stopPropagation(),s(t||null)},scale:h?1.05:1,selected:!1,size:n?100:68,type:(t==null?void 0:t.node_type)||"",children:t==null?void 0:t.name})})}):null},be=d.memo(()=>{const e=x(s=>s.data),t=P(),i=x(s=>s.showSelectionGraph),o=x(s=>s.selectionGraphData),g=x(s=>s.selectedNodeRelativeIds),a=d.useMemo(()=>(i?o.nodes:(e==null?void 0:e.nodes)||[]).filter(u=>g.includes((u==null?void 0:u.ref_id)||"")||(t==null?void 0:t.ref_id)===(u==null?void 0:u.ref_id)).slice(0,ct).map(u=>{const h=de(u.node_type||"",!0),n=new S((u==null?void 0:u.x)||0,(u==null?void 0:u.y)||0,(u==null?void 0:u.z)||0),r=[];return c.jsx($t,{color:h,position:n,relativeIds:r,userData:u},`node-badge-${u.ref_id}`)}),[g,e==null?void 0:e.nodes,i,o,t]);return c.jsx(d.Fragment,{children:a.length?a:null},"node-badges")});be.displayName="RelevanceBadges";const ae=at().stop(),j={numDimensions:3,velocityDecay:.9,forceChargeStrength:-20,forceChargeMinDistance:10,forceChargeMaxDistance:8e3,forceLinkStrength:.04,forceCenterStrength:.85,disableCollide:!1,disableCenter:!1,disableLink:!1,disableCharge:!1,forceCollideRadiusMethod:()=>1*6+200,forceLinkDistanceMethod:e=>{const t=e.source.node_type;let i=50;switch(t){case"Topic":i=30;break;case"guest":i=30;break;case"clip":i=10;break;case"episode":i=15;break;default:i=10}return i*2}},Rt=(e,t,{numDimensions:i=j.numDimensions,velocityDecay:o=j.velocityDecay,forceChargeStrength:g=j.forceChargeStrength,forceChargeMinDistance:a=j.forceChargeMinDistance,forceChargeMaxDistance:s=j.forceChargeMaxDistance,forceLinkStrength:l=j.forceLinkStrength,forceCenterStrength:p=j.forceCenterStrength,forceLinkDistanceMethod:u=j.forceLinkDistanceMethod,forceCollideRadiusMethod:h=j.forceCollideRadiusMethod,disableCollide:n=j.disableCollide,disableCenter:r=j.disableCenter,disableLink:b=j.disableLink,disableCharge:f=j.disableCharge})=>(ae.alpha(1).stop().numDimensions(i).velocityDecay(o).force("collide",n?null:lt().radius(h).iterations(1)).force("center",r?null:dt().strength(p)).force("charge",f?null:ut().strength(g).distanceMin(a).distanceMax(s)).nodes(e).force("link",b?null:ft().distance(u).strength(l).id(y=>y.ref_id).links(t)).alpha(1).restart(),ae),Ut={font:"/fonts/Inter-Bold.woff",characters:"abcdefghijklmnopqrstuvwxyz0123456789!",fontSize:2,letterSpacing:-.05,lineHeight:1,"material-toneMapped":!1},se=d.memo(({node:e,hide:t})=>{const i=d.useRef(null),o=P(),a=x(h=>h.selectedNodeRelativeIds).includes((e==null?void 0:e.ref_id)||""),s=!!o&&(o==null?void 0:o.ref_id)===e.ref_id,l=x(h=>h.showSelectionGraph);T(({camera:h})=>{i!=null&&i.current&&(i.current.quaternion.copy(h.quaternion),l&&i.current.position.set(e.x,e.y,e.z))});const p=d.useMemo(()=>((e.edge_count||1)*4,(e.edge_count||1)*4),[e.edge_count,s,a,l]),u=d.useMemo(()=>o&&!s&&!a?.1:1,[s,o,a]);return c.jsx(Ge,{ref:i,anchorX:"center",anchorY:"middle",color:k.white,fillOpacity:u,position:[e.x,e.y,e.z],scale:Math.min(p,10),userData:e,visible:!t,...Ut,children:e.name})});se.displayName="TextNode";const Ht=({link:e,animated:t})=>{const i=d.useRef(null),o=P(),[g,a]=d.useState(new S(0,0,0)),[s,l]=d.useState(new S(0,0,0)),[p,u]=d.useState(8947848),h=x(n=>n.selectionGraphData);return console.warn(g),console.warn(s),d.useEffect(()=>{var n,r,b,f,y,w;a(new S(((n=e.sourcePosition)==null?void 0:n.x)||0,((r=e.sourcePosition)==null?void 0:r.y)||0,((b=e.sourcePosition)==null?void 0:b.z)||0)),l(new S(((f=e.targetPosition)==null?void 0:f.x)||0,((y=e.targetPosition)==null?void 0:y.y)||0,((w=e.targetPosition)==null?void 0:w.z)||0)),u(_e.children.segmentColor)},[o,e]),T(()=>{if(t&&i.current){const n=h.nodes.find(b=>{var f;return b.ref_id===((f=e.source)==null?void 0:f.ref_id)}),r=h.nodes.find(b=>b.ref_id===e.target.ref_id);i.current.start.set((n==null?void 0:n.x)||0,(n==null?void 0:n.y)||0,(n==null?void 0:n.z)||0),i.current.end.set((r==null?void 0:r.x)||0,(r==null?void 0:r.y)||0,(r==null?void 0:r.z)||0)}}),new S().addVectors(g,s).multiplyScalar(.5),c.jsxs(c.Fragment,{children:[c.jsx(Oe,{ref:i,color:"0xFFFFFF",end:s,start:g}),!1]})};let K=null;const Se=d.memo(()=>{const e=P(),[t,i]=x(a=>[a.data,a.selectedNodeRelativeIds]),[o,g]=x(a=>[a.selectionGraphData,a.setSelectionData]);return d.useEffect(()=>{const a=(t==null?void 0:t.links.filter(p=>p.source===(e==null?void 0:e.ref_id)||p.target===(e==null?void 0:e.ref_id)))||[],l={nodes:((t==null?void 0:t.nodes)||[]).filter(p=>a.some(u=>u.source===p.ref_id||u.target===p.ref_id)).map(p=>{const u=p.ref_id===(e==null?void 0:e.ref_id)&&p.node_type!=="Topic"?{fx:0,fy:0,fz:0}:{};return{...p,x:0,y:0,z:0,...u}}),links:a};g(structuredClone(l))},[t,e,i,g]),d.useEffect(()=>{K=Rt([...o.nodes],[...o.links],{numDimensions:2,forceLinkStrength:.01,forceCenterStrength:.85,forceChargeStrength:-20,velocityDecay:.9})},[o]),T(()=>{K&&K.tick()}),c.jsxs(c.Fragment,{children:[o==null?void 0:o.nodes.map(a=>c.jsx(se,{hide:!0,node:a},`${a.ref_id||a.ref_id}-compact`)),c.jsx(ue,{fog:!0,lineWidth:.9,children:(o==null?void 0:o.links).map((a,s)=>c.jsx(Ht,{animated:!0,link:a},s.toString()))},`selection-links-${o==null?void 0:o.links.length}`)]})});Se.displayName="SelectionDataNodes";const we=d.memo(()=>{const[e,t,i,o,g,a]=x(n=>[n.data,n.selectedNode,n.setHoveredNode,n.showSelectionGraph,n.selectionGraphData,n.setSelectedNode]),s=d.useCallback(n=>!!(o&&!g.nodes.find(r=>r.ref_id===n.ref_id)),[o,g]),l=d.useCallback(n=>{const r=n==null?void 0:n[0];r&&r.userData&&(s(r.userData)||a((r==null?void 0:r.userData)||null))},[s,a]),p=d.useCallback(n=>{n.stopPropagation(),i(null)},[i]),u=d.useCallback(n=>{var f;const b=n.intersections.map(y=>y.object)[0];if((f=b==null?void 0:b.userData)!=null&&f.ref_id){const y=b.userData;s(y)||(n.stopPropagation(),i(y))}},[i,s]),h=o&&!!t;return c.jsxs($e,{filter:n=>n.filter(r=>{var b;return!!((b=r.userData)!=null&&b.ref_id)}),onChange:l,onPointerOut:p,onPointerOver:u,children:[!1,c.jsx(be,{}),e==null?void 0:e.nodes.map(n=>{return n.node_type,c.jsx(se,{hide:h,node:n},n.ref_id);return c.jsx(ye,{hide:h,node:n},n.ref_id)}),h&&c.jsx(Se,{})]})});we.displayName="Cubes";const Q=5e3,Bt={show:"#FF723C",clip:"#FFFF00",episode:"#FF7F50",guest:"#E066FF",topic:"#F8F8FF"};Object.values(Bt).map(e=>e);const Dt=({link:e,animated:t})=>{var y,w;const i=P(),[o,g]=d.useState(new S(0,0,0)),[a,s]=d.useState(new S(0,0,0)),[l,p]=d.useState(8947848),u=x(N=>N.nodesNormalized);d.useEffect(()=>{var N,L,A,F,U,H,m;g(new S(((N=e.sourcePosition)==null?void 0:N.x)||0,((L=e.sourcePosition)==null?void 0:L.y)||0,((A=e.sourcePosition)==null?void 0:A.z)||0)),s(new S(((F=e.targetPosition)==null?void 0:F.x)||0,((U=e.targetPosition)==null?void 0:U.y)||0,((H=e.targetPosition)==null?void 0:H.z)||0)),p((m=ve.Topic)==null?void 0:m.segmentColor)},[i,e]);const h=new S(0,1,0),n=new pt(o,h,a),b=((y=u[e.source])==null?void 0:y.node_type)!==((w=u[e.target])==null?void 0:w.node_type)?n.getPoints(50):[o,a],f=!i||i.ref_id===e.source||i.ref_id===e.target;return c.jsx(Re,{color:l,opacity:.1,points:b.map(N=>N.toArray()),transparent:!0,visible:f})},R=e=>({close:{backgroundColor:"rgba(48, 51, 66, 1)",borderColor:"#fff",fontColor:"rgba(255, 255, 255, 1)"},focus:{backgroundColor:e?"rgba(255, 255, 255, 0.90);":"rgba(255, 255, 255, 0.90)",borderColor:e?"#FFDB58bb":"#fff",fontColor:"rgba(48, 51, 66, 1)"},menu:{backgroundColor:"#00000066",borderColor:e?"#ffffff66":"#5078f2",fontColor:e?"#ffffff66":"#fff"}}),Vt=new S,Ce=d.memo(()=>{const e=d.useRef(null),t=pe(f=>f.setSidebarOpen),{open:i}=q("editNodeName"),{open:o}=q("removeNode"),{open:g}=q("addEdgeToNode"),[a]=Te(f=>[f.isAdmin]),s=x(f=>f.showSelectionGraph),l=x(f=>f.selectionGraphData),p=x(f=>f.data),u=P(),h=x(f=>f.setSelectedNode),n=x(f=>f.setShowSelectionGraph);T(()=>{r()});const r=d.useCallback(()=>{const f=s?l:p;if(e.current){const y=f==null?void 0:f.nodes.find(w=>w.ref_id===(u==null?void 0:u.ref_id));if(y){const w=Vt.set(y==null?void 0:y.x,y==null?void 0:y.y,y==null?void 0:y.z);e.current.position.copy(w)}}},[u,s,l,p]),b=d.useMemo(()=>{const f=[{key:"control-key-1",colors:R(s).focus,icon:c.jsx(yt,{}),left:-80,className:"add",onClick:()=>{g()}},{key:"control-key-2",colors:R(s).focus,icon:c.jsx(Ue,{}),left:-40,className:"edit",onClick:()=>{i()}},{key:"control-key-3",colors:R(s).focus,icon:c.jsx(He,{}),left:0,className:"delete",onClick:()=>{o()}}],y=[{key:"control-key-4",colors:R(s).focus,icon:c.jsx(mt,{}),left:0,className:"expand",onClick:()=>{const w=!s;n(w),w&&t(!0)}},{key:"control-key-5",colors:R(!0).close,icon:c.jsx(xt,{}),left:40,className:"exit",onClick:()=>{h(null),n(!1)}}];return[...f,...y].map((w,N)=>({...w,left:-80+N*40}))},[s,g,i,o,n,t,h,a]);return u?c.jsx("group",{ref:e,children:c.jsx(te,{center:!0,className:"control-panel",onClick:f=>f.stopPropagation(),onKeyDown:f=>f.stopPropagation(),onPointerDown:f=>f.stopPropagation(),onPointerOut:f=>f.stopPropagation(),onPointerOver:f=>f.stopPropagation(),onPointerUp:f=>f.stopPropagation(),sprite:!0,zIndexRange:[16777271,16777272],children:b.map(f=>c.jsx(Wt,{backgroundColor:f.colors.backgroundColor,borderColor:f.colors.borderColor,className:f.className,fontColor:f.colors.fontColor,left:f.left,onClick:y=>{y.stopPropagation(),f.onClick()},children:f.icon},f.key))})}):null});Ce.displayName="NodeControls";const Wt=z.div`
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
`,je=d.memo(()=>c.jsx(c.Fragment,{children:c.jsx(Ce,{})}));je.displayName="NodeDetailsPanel";const Yt=()=>{const[e,t,i,o,g]=x(l=>[l.data,l.isFetching,l.graphStyle,l.showSelectionGraph,l.selectionGraphData]),a=d.useMemo(()=>o?0:i==="force"?.2:.4,[o,i]),s=d.useMemo(()=>((o?g.links:e==null?void 0:e.links)||[]).map(u=>c.jsx(Dt,{link:u},u.source)),[e==null?void 0:e.links,g.links,o]);return t?null:c.jsxs(c.Fragment,{children:[c.jsx(we,{}),!1,!1,i!=="earth"&&c.jsx(ue,{fog:!0,limit:s.length,lineWidth:a,children:s},`links-${s.length}-${i}`),c.jsx(je,{}),!1]})},Zt=()=>{const{fogColor:e}=ge("universe",{fogColor:ze}),t=he(a=>a.graphStyle),i=d.useRef(null),o=d.useRef(null),g=d.useRef(null);return T(({camera:a,clock:s})=>{const l=s.getElapsedTime();if(i.current){const u=Math.sin(l/8)*1e3;i.current.position.setZ(u)}if(o.current&&o.current.position.lerp(a.position,.5),g.current){const p=l*.5,u=Math.sin(p)*Q,h=Math.cos(p)*Q;g.current.position.set(u,0,h)}}),c.jsxs(c.Fragment,{children:[c.jsx("hemisphereLight",{args:[k.white,Pe,Ie]}),t!=="earth"&&c.jsx("fog",{args:[e,5,18e3],attach:"fog"}),c.jsx("ambientLight",{color:k.white,intensity:1}),c.jsx("pointLight",{ref:o,color:k.white,distance:4e3,intensity:5,position:[0,0,0]}),c.jsx("directionalLight",{ref:g,color:k.white,intensity:8,position:[Q,0,0]}),c.jsx("pointLight",{ref:i,color:k.white,distance:4e3,intensity:8,position:[0,0,0]})]})},qt=({fullSize:e=!0})=>{const t=pe(i=>i.sidebarIsOpen);return c.jsx(Xt,{align:"center",className:fe({"sidebar-is-open":t&&!e}),justify:"center",children:c.jsx(bt,{color:k.SECONDARY_BLUE,size:64})})},Xt=z(ee)`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  background-color: ${k.black};
  z-index: 1;
`,Kt=()=>c.jsx(te,{children:c.jsx(Ye,{})}),Qt=()=>{const{universeColor:e}=ge("universe",{universeColor:k.black}),t=ht(),i=d.useMemo(()=>t!=null&&t.node_type?de(t.node_type):kt,[t]);return c.jsxs(c.Fragment,{children:[c.jsx("color",{args:[e],attach:"background"}),c.jsx(Zt,{}),c.jsx(Mt,{}),c.jsxs(Ze,{children:[c.jsxs(qe,{autoClear:!1,multisampling:8,children:[c.jsx(Xe,{darkness:.7,eskil:!1,offset:.05}),c.jsx(Ke,{luminanceThreshold:1,mipmapBlur:!0,resolutionX:ne.AUTO_SIZE,resolutionY:ne.AUTO_SIZE}),c.jsx(Qe,{blendFunction:Je.SCREEN,blur:!0,edgeStrength:4,hiddenEdgeColor:i,visibleEdgeColor:i})]}),c.jsx(Yt,{})]})]})};let J=null;const Jt={aspect:window.innerWidth/window.innerHeight,far:3e4,near:1,position:[v.x,v.y,v.z]},eo=()=>{const[e,t,i]=[I(s=>s.setIsUserScrollingOnHtmlPanel),I(s=>s.setIsUserScrolling),I(s=>s.setUserMovedCamera)],o=he(s=>s.isFetching),g=d.useCallback(s=>{var u;const{target:l}=s,{offsetParent:p}=l;J&&clearTimeout(J),(u=p==null?void 0:p.classList)!=null&&u.contains("html-panel")&&p.clientHeight<p.scrollHeight&&e(!0),t(!0),i(!0),J=setTimeout(()=>{t(!1),e(!1)},200)},[t,e,i]),a=d.useCallback(s=>Ee(s,"threeState"),[]);return c.jsxs(to,{children:[c.jsx(d.Suspense,{fallback:null,children:c.jsxs(Be,{camera:Jt,id:"universe-canvas",onCreated:a,onWheel:g,children:[!1,c.jsx("primitive",{object:new gt(1e4)}),!1,!1,c.jsxs(d.Suspense,{fallback:c.jsx(Kt,{}),children:[c.jsx(De,{}),c.jsx(Ve,{}),c.jsx(We,{}),c.jsx(Qt,{})]})]})}),o&&c.jsx(qt,{fullSize:!1})]})},to=z(ee)`
  flex: 1 1 100%;
  position: relative;
`,uo=d.memo(eo);export{uo as Universe};
