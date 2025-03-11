import{w as re,R as _,r as A,s as h,g,F as b,j as s,o as he,x as se,y as je,A as Ae,c as Pe,i as Te,q as _e,H as ke,t as Se,z as Re}from"./index-b0cefa78.js";import{F as oe,a as Oe,b as De,U as $e}from"./index-0e39d7ba.js";import{I as Me,d as M,a as Ee,b as Ce}from"./index-a3836555.js";import{u as Ie,f as z,L as U,m as K,i as W,C as J,A as Ne,a as F,b as ce,c as Be,d as le,e as Le,g as ze,h as Fe,G as We,j as pe,k as ue,D as Ge,l as Ve,X as Ye,Y as Ue,n as He,o as Xe,S as Ke,M as qe}from"./index-ea97afc9.js";import{C as Qe}from"./CheckIcon-9d596fcf.js";import{P as Je,L as Ze}from"./index-b64047d3.js";import"./index-d5f54401.js";import"./three.module-4d3d7244.js";import"./index-be36ac04.js";import"./TextareaAutosize-03618aaf.js";import"./index-93ee8b15.js";import"./index-73c700a9.js";import"./ClipLoader-f684a39c.js";import"./clsx-b3cf9da4.js";import"./Skeleton-996bf5aa.js";import"./Stack-2eb1fe4c.js";import"./index-7030eabf.js";import"./SoundIcon-268eec8e.js";import"./FormControlLabel-5bb9eb65.js";import"./Typography-ccac0f9e.js";import"./createSvgIcon-8347f0ad.js";import"./isPlainObject-00cf3e78.js";import"./SourcesTableIcon-3d14de36.js";import"./DeleteNodeIcon-11047f44.js";import"./SucessFeedBackIcon-e4b68808.js";var et=["layout","type","stroke","connectNulls","isRange","ref"],fe;function G(e){"@babel/helpers - typeof";return G=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},G(e)}function tt(e,t){if(e==null)return{};var a=rt(e,t),r,i;if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)r=n[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function rt(e,t){if(e==null)return{};var a={},r=Object.keys(e),i,n;for(n=0;n<r.length;n++)i=r[n],!(t.indexOf(i)>=0)&&(a[i]=e[i]);return a}function L(){return L=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},L.apply(this,arguments)}function de(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),a.push.apply(a,r)}return a}function N(e){for(var t=1;t<arguments.length;t++){var a=arguments[t]!=null?arguments[t]:{};t%2?de(Object(a),!0).forEach(function(r){C(e,r,a[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):de(Object(a)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))})}return e}function nt(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function me(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,xe(r.key),r)}}function it(e,t,a){return t&&me(e.prototype,t),a&&me(e,a),Object.defineProperty(e,"prototype",{writable:!1}),e}function at(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&ne(e,t)}function ne(e,t){return ne=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},ne(e,t)}function st(e){var t=ct();return function(){var r=Q(e),i;if(t){var n=Q(this).constructor;i=Reflect.construct(r,arguments,n)}else i=r.apply(this,arguments);return ot(this,i)}}function ot(e,t){if(t&&(G(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return H(e)}function H(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function ct(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Q(e){return Q=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(a){return a.__proto__||Object.getPrototypeOf(a)},Q(e)}function C(e,t,a){return t=xe(t),t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function xe(e){var t=lt(e,"string");return G(t)==="symbol"?t:String(t)}function lt(e,t){if(G(e)!=="object"||e===null)return e;var a=e[Symbol.toPrimitive];if(a!==void 0){var r=a.call(e,t||"default");if(G(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var B=function(e){at(a,e);var t=st(a);function a(){var r;nt(this,a);for(var i=arguments.length,n=new Array(i),l=0;l<i;l++)n[l]=arguments[l];return r=t.call.apply(t,[this].concat(n)),C(H(r),"state",{isAnimationFinished:!0}),C(H(r),"id",Ie("recharts-area-")),C(H(r),"handleAnimationEnd",function(){var o=r.props.onAnimationEnd;r.setState({isAnimationFinished:!0}),re(o)&&o()}),C(H(r),"handleAnimationStart",function(){var o=r.props.onAnimationStart;r.setState({isAnimationFinished:!1}),re(o)&&o()}),r}return it(a,[{key:"renderDots",value:function(i,n,l){var o=this.props.isAnimationActive,u=this.state.isAnimationFinished;if(o&&!u)return null;var c=this.props,d=c.dot,m=c.points,p=c.dataKey,f=z(this.props),k=z(d,!0),R=m.map(function(y,S){var v=N(N(N({key:"dot-".concat(S),r:3},f),k),{},{dataKey:p,cx:y.x,cy:y.y,index:S,value:y.value,payload:y.payload});return a.renderDotItem(d,v)}),x={clipPath:i?"url(#clipPath-".concat(n?"":"dots-").concat(l,")"):null};return _.createElement(U,L({className:"recharts-area-dots"},x),R)}},{key:"renderHorizontalRect",value:function(i){var n=this.props,l=n.baseLine,o=n.points,u=n.strokeWidth,c=o[0].x,d=o[o.length-1].x,m=i*Math.abs(c-d),p=K(o.map(function(f){return f.y||0}));return W(l)&&typeof l=="number"?p=Math.max(l,p):l&&Array.isArray(l)&&l.length&&(p=Math.max(K(l.map(function(f){return f.y||0})),p)),W(p)?_.createElement("rect",{x:c<d?c:c-m,y:0,width:m,height:Math.floor(p+(u?parseInt("".concat(u),10):1))}):null}},{key:"renderVerticalRect",value:function(i){var n=this.props,l=n.baseLine,o=n.points,u=n.strokeWidth,c=o[0].y,d=o[o.length-1].y,m=i*Math.abs(c-d),p=K(o.map(function(f){return f.x||0}));return W(l)&&typeof l=="number"?p=Math.max(l,p):l&&Array.isArray(l)&&l.length&&(p=Math.max(K(l.map(function(f){return f.x||0})),p)),W(p)?_.createElement("rect",{x:0,y:c<d?c:c-m,width:p+(u?parseInt("".concat(u),10):1),height:Math.floor(m)}):null}},{key:"renderClipRect",value:function(i){var n=this.props.layout;return n==="vertical"?this.renderVerticalRect(i):this.renderHorizontalRect(i)}},{key:"renderAreaStatically",value:function(i,n,l,o){var u=this.props,c=u.layout,d=u.type,m=u.stroke,p=u.connectNulls,f=u.isRange;u.ref;var k=tt(u,et);return _.createElement(U,{clipPath:l?"url(#clipPath-".concat(o,")"):null},_.createElement(J,L({},z(k,!0),{points:i,connectNulls:p,type:d,baseLine:n,layout:c,stroke:"none",className:"recharts-area-area"})),m!=="none"&&_.createElement(J,L({},z(this.props),{className:"recharts-area-curve",layout:c,type:d,connectNulls:p,fill:"none",points:i})),m!=="none"&&f&&_.createElement(J,L({},z(this.props),{className:"recharts-area-curve",layout:c,type:d,connectNulls:p,fill:"none",points:n})))}},{key:"renderAreaWithAnimation",value:function(i,n){var l=this,o=this.props,u=o.points,c=o.baseLine,d=o.isAnimationActive,m=o.animationBegin,p=o.animationDuration,f=o.animationEasing,k=o.animationId,R=this.state,x=R.prevPoints,y=R.prevBaseLine;return _.createElement(Ne,{begin:m,duration:p,isActive:d,easing:f,from:{t:0},to:{t:1},key:"area-".concat(k),onAnimationEnd:this.handleAnimationEnd,onAnimationStart:this.handleAnimationStart},function(S){var v=S.t;if(x){var w=x.length/u.length,T=u.map(function(j,$){var E=Math.floor($*w);if(x[E]){var I=x[E],V=F(I.x,j.x),Y=F(I.y,j.y);return N(N({},j),{},{x:V(v),y:Y(v)})}return j}),P;if(W(c)&&typeof c=="number"){var O=F(y,c);P=O(v)}else if(ce(c)||Be(c)){var D=F(y,0);P=D(v)}else P=c.map(function(j,$){var E=Math.floor($*w);if(y[E]){var I=y[E],V=F(I.x,j.x),Y=F(I.y,j.y);return N(N({},j),{},{x:V(v),y:Y(v)})}return j});return l.renderAreaStatically(T,P,i,n)}return _.createElement(U,null,_.createElement("defs",null,_.createElement("clipPath",{id:"animationClipPath-".concat(n)},l.renderClipRect(v))),_.createElement(U,{clipPath:"url(#animationClipPath-".concat(n,")")},l.renderAreaStatically(u,c,i,n)))})}},{key:"renderArea",value:function(i,n){var l=this.props,o=l.points,u=l.baseLine,c=l.isAnimationActive,d=this.state,m=d.prevPoints,p=d.prevBaseLine,f=d.totalLength;return c&&o&&o.length&&(!m&&f>0||!le(m,o)||!le(p,u))?this.renderAreaWithAnimation(i,n):this.renderAreaStatically(o,u,i,n)}},{key:"render",value:function(){var i,n=this.props,l=n.hide,o=n.dot,u=n.points,c=n.className,d=n.top,m=n.left,p=n.xAxis,f=n.yAxis,k=n.width,R=n.height,x=n.isAnimationActive,y=n.id;if(l||!u||!u.length)return null;var S=this.state.isAnimationFinished,v=u.length===1,w=Le("recharts-area",c),T=p&&p.allowDataOverflow,P=f&&f.allowDataOverflow,O=T||P,D=ce(y)?this.id:y,j=(i=z(o))!==null&&i!==void 0?i:{r:3,strokeWidth:2},$=j.r,E=$===void 0?3:$,I=j.strokeWidth,V=I===void 0?2:I,Y=ze(o)?o:{},ie=Y.clipDot,ae=ie===void 0?!0:ie,X=E*2+V;return _.createElement(U,{className:w},T||P?_.createElement("defs",null,_.createElement("clipPath",{id:"clipPath-".concat(D)},_.createElement("rect",{x:T?m:m-k/2,y:P?d:d-R/2,width:T?k:k*2,height:P?R:R*2})),!ae&&_.createElement("clipPath",{id:"clipPath-dots-".concat(D)},_.createElement("rect",{x:m-X/2,y:d-X/2,width:k+X,height:R+X}))):null,v?null:this.renderArea(O,D),(o||v)&&this.renderDots(O,ae,D),(!x||S)&&Fe.renderCallByParent(this.props,u))}}],[{key:"getDerivedStateFromProps",value:function(i,n){return i.animationId!==n.prevAnimationId?{prevAnimationId:i.animationId,curPoints:i.points,curBaseLine:i.baseLine,prevPoints:n.curPoints,prevBaseLine:n.curBaseLine}:i.points!==n.curPoints||i.baseLine!==n.curBaseLine?{curPoints:i.points,curBaseLine:i.baseLine}:null}}]),a}(A.PureComponent);fe=B;C(B,"displayName","Area");C(B,"defaultProps",{stroke:"#3182bd",fill:"#3182bd",fillOpacity:.6,xAxisId:0,yAxisId:0,legendType:"line",connectNulls:!1,points:[],dot:!1,activeDot:!0,hide:!1,isAnimationActive:!We.isSsr,animationBegin:0,animationDuration:1500,animationEasing:"ease"});C(B,"getBaseValue",function(e,t,a,r){var i=e.layout,n=e.baseValue,l=t.props.baseValue,o=l??n;if(W(o)&&typeof o=="number")return o;var u=i==="horizontal"?r:a,c=u.scale.domain();if(u.type==="number"){var d=Math.max(c[0],c[1]),m=Math.min(c[0],c[1]);return o==="dataMin"?m:o==="dataMax"||d<0?d:Math.max(Math.min(c[0],c[1]),0)}return o==="dataMin"?c[0]:o==="dataMax"?c[1]:c[0]});C(B,"getComposedData",function(e){var t=e.props,a=e.item,r=e.xAxis,i=e.yAxis,n=e.xAxisTicks,l=e.yAxisTicks,o=e.bandSize,u=e.dataKey,c=e.stackedData,d=e.dataStartIndex,m=e.displayedData,p=e.offset,f=t.layout,k=c&&c.length,R=fe.getBaseValue(t,a,r,i),x=f==="horizontal",y=!1,S=m.map(function(w,T){var P;k?P=c[d+T]:(P=pe(w,u),Array.isArray(P)?y=!0:P=[R,P]);var O=P[1]==null||k&&pe(w,u)==null;return x?{x:ue({axis:r,ticks:n,bandSize:o,entry:w,index:T}),y:O?null:i.scale(P[1]),value:P,payload:w}:{x:O?null:r.scale(P[1]),y:ue({axis:i,ticks:l,bandSize:o,entry:w,index:T}),value:P,payload:w}}),v;return k||y?v=S.map(function(w){var T=Array.isArray(w.value)?w.value[0]:null;return x?{x:w.x,y:T!=null&&w.y!=null?i.scale(T):null}:{x:T!=null?r.scale(T):null,y:w.y}}):v=x?i.scale(R):r.scale(R),N({points:S,baseLine:v,layout:f,isRange:y},p)});C(B,"renderDotItem",function(e,t){var a;return _.isValidElement(e)?a=_.cloneElement(e,t):re(e)?a=e(t):a=_.createElement(Ge,L({},t,{className:"recharts-area-dot"})),a});var pt=Ve({chartName:"AreaChart",GraphicalChild:B,axisComponents:[{axisType:"xAxis",AxisComp:Ye},{axisType:"yAxis",AxisComp:Ue}],formatAxisMap:He});const q=3e4,ge=({onPlaybackRestart:e})=>{const t=M(l=>l.tweetIsPlaying),a=M(l=>l.setTweetIsPlaying),r=()=>{},i=()=>{},n=A.useCallback(()=>{e&&e(),a(!t)},[t,a,e]);return s.jsxs(ut,{children:[s.jsx(mt,{onClick:r,children:s.jsx("img",{alt:"",src:"/RewindIcon.svg"})}),s.jsx(dt,{"data-testid":"play-pause-button",onClick:n,size:"small",children:t?s.jsx(Ee,{"data-testid":"pause-icon"}):s.jsx(Ce,{"data-testid":"play-icon"})}),s.jsx(ht,{onClick:i,children:s.jsx("img",{alt:"",src:"/ForwardIcon.svg"})})]})};ge.displayName="Controls";const ut=h(b).attrs({direction:"row",align:"center",justify:"flex-start"})`
  width: 200px;
  height: 54px;
  background: ${g.BG1};
  border-radius: 40px;
  margin-right: 30px;
  color: ${g.white};
  font-size: 20px;
  padding: 12px;
  justify-content: space-between;
  box-sizing: border-box;
`,dt=h(Me)`
  && {
    font-size: 36px;
    padding: 2px;
    overflow: hidden;
  }
`,mt=h.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1px 0 0 1px;
  cursor: pointer;
  img {
    width: 20px;
    height: auto;
  }
`,ht=h.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  img {
    width: 24px;
    height: auto;
  }
`;h.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  cursor: pointer;
  border-radius: 50%;
  transition: background-color 0.3s ease;
  color: ${g.GRAY6};

  svg {
    margin-top: 3px;
    width: 24px;
    height: 24px;
  }

  &:hover {
    background-color: ${g.DROPDOWN_BG};
  }
`;h.button`
  margin-top: 4px;
  background: ${g.BG1};
  color: ${g.GRAY6};
  border: none;
  width: 8px;
  border-radius: 20px;
  padding: 8px 20px 8px 8px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s ease;
`;const ye=A.memo(({type:e,left:t,img:a})=>{var u,c;const r=he(d=>d.normalizedSchemasByType),i=(u=r[e])==null?void 0:u.primary_color,n=(c=r[e])==null?void 0:c.icon,l=n?`/svg-icons/${n}.svg`:"",o={iconStart:a||l,color:i??g.THING};return s.jsx(xt,{style:{left:`${t}%`},children:s.jsx(ve,{...o,label:e})})});ye.displayName="Marker";const ve=A.memo(({iconStart:e,color:t,label:a})=>s.jsx(ft,{color:t,children:e&&s.jsx("img",{alt:a,className:"badge__img",onError:console.log,src:e})}));ve.displayName="Badge";const ft=h(b).attrs({direction:"row"})`
  cursor: pointer;
  background: ${({color:e})=>e};
  border-radius: 3px;
  overflow: hidden;
  justify-content: center;
  align-items: center;

  .badge__img {
    width: 10px;
    height: 10px;
    object-fit: contain;
  }
`,xt=h.div`
  position: absolute;
  color: white;
  top: -6px;
  width: 12px;
  height: 12px;
  border-radius: 4px;
  background-color: ${g.white};
  transform: translateX(-50%);
  transform: translateX(-50%) translateY(-50%);
  top: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`,be=A.memo(({markers:e})=>{if(e.length===0)return null;const t=e.map(n=>n.start?new Date(n.start).getTime():0),a=Math.min(...t),i=Math.max(...t)-a;return s.jsx(s.Fragment,{children:e.map((n,l)=>{var m;const u=((n.start?new Date(n.start).getTime():0)-a)/i*100,c=(n==null?void 0:n.node_type)||"",d=((m=n==null?void 0:n.properties)==null?void 0:m.image_url)||"";return s.jsx(ye,{img:d,left:u,type:c},`${n.ref_id}_${l}`)})})});be.displayName="Markers";const Z=50,we=A.memo(({markers:e,height:t=56,showChart:a=!0,backgroundColor:r=g.primaryBlue})=>{const i=e.map(c=>c.start?new Date(c.start).getTime():0),n=Math.min(...i),o=Math.max(...i)-n,u=A.useMemo(()=>{if(e.length===0||o===0)return[];const c=o/Z,d=Array(Z).fill(0);return e.forEach(m=>{if(!m.start)return;const p=new Date(m.start).getTime(),f=Math.min(Z-1,Math.floor((p-n)/c));d[f]+=1}),d.map((m,p)=>({timestamp:n+c*p,value:m}))},[e,n,o]);return e.length===0?null:s.jsx(s.Fragment,{children:a&&u.length>0&&s.jsx("div",{children:s.jsx(Xe,{height:t,width:"100%",children:s.jsx(pt,{data:u,children:s.jsx(B,{dataKey:"value",fill:r,fillOpacity:.5,stroke:"transparent",type:"basis"})})})})})});we.displayName="ProgressChart";const gt=({duration:e,markers:t,handleProgressChange:a,playingTime:r,tweetPlayingTime:i})=>{const n=se(i).format("MMM D"),l=se(i).format("h:mma"),o=Math.min(Math.max(r,0),100);return s.jsxs(vt,{children:[o?s.jsxs(jt,{$progress:o,children:[s.jsx(At,{children:n}),s.jsx(Pt,{children:" - "}),s.jsx(Tt,{children:l})]}):null,s.jsx(_t,{max:e,onChange:a,value:o,width:12}),s.jsx(bt,{children:s.jsx(be,{markers:t})}),s.jsx(wt,{children:s.jsx(we,{markers:t})})]})},yt=h(b)`
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  height: 96px;
  transform: translateY(-50%);
`,vt=h(b)`
  position: relative;
  flex: 1 1 100%;
  padding: 0;
  height: 100%;
  box-sizing: border-box;
  margin-right: 12px;

  &:hover {
    ${yt} {
      display: block;
    }
  }
`,bt=h(b)`
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
`,wt=h(b)`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 23px;
`,jt=h.div`
  position: absolute;
  top: -40px;
  transform: translateX(-50%);
  background: rgba(230, 230, 230, 255);
  color: ${g.black};
  padding: 6px 6px 6px 12px;
  border-radius: 6px;
  font-family: 'Barlow';
  font-size: 13px;
  font-weight: 500;
  white-space: nowrap;
  z-index: 30;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(8px);
  letter-spacing: 0.2px;
  margin-bottom: 4px;
  min-width: 100px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;

  left: ${e=>`${e.$progress}%`};

  transition: transform 0.1s ease-out;

  transform: ${e=>{const t=e.$progress||0;return t>=95?`translateX(calc(-50% - ${Math.min((t-95)*5,50)}%))`:"translateX(-50%)"}};
`,At=h.span`
  display: inline-block;
  width: 45px;
  text-align: right;
`,Pt=h.span`
  margin: 0 4px;
`,Tt=h.span`
  display: inline-block;
  width: 55px;
  text-align: left;
  font-variant-numeric: tabular-nums;
`,_t=h(Ke)`
  && {
    z-index: 20;
    color: ${g.white};
    height: 3px;
    width: 100%;
    top: 50%;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    position: relative;

    .MuiSlider-rail {
      opacity: 1;
      width: 100%;
    }

    .MuiSlider-track {
      border: none;
      width: 100%;
    }

    .MuiSlider-thumb {
      width: 12px;
      height: 54px;
      border-radius: 8px;
      background-color: ${g.primaryBlue};
      opacity: 0.2;
      margin: 0;
      transform: translate(-50%, -50%);
      position: absolute;
      top: 50%;

      &:before {
        box-shadow: '0 4px 8px rgba(0,0,0,0.4)';
      }
      &:hover,
      &.Mui-focusVisible,
      &.Mui-active {
        box-shadow: none;
      }
    }
  }
`,kt=({markers:e})=>{const t=M(x=>x.tweetPlayingTime),a=M(x=>x.setTweetPlayingTime),r=M(x=>x.setTweetIsPlaying),i=M(x=>x.setTweetDuration),n=M(x=>x.tweetDuration),l=M(x=>x.tweetIsPlaying),[o,u]=A.useState(0),[c,d]=A.useState(0),m=A.useRef(0);A.useEffect(()=>{const x=e.map(w=>w.start?new Date(w.start).getTime():0),y=Math.min(...x),S=Math.max(...x),v=S-y;u(y),d(S),i(v)},[e,i]);const p=A.useRef(null),f=A.useRef(null),k=A.useCallback((x,y)=>{const S=Array.isArray(y)?y[0]:y,v=o+S/100*n;a(v)},[a,o,n]);A.useEffect(()=>{if(l){t>=c&&(a(o),m.current=o),f.current=Date.now();const x=t?(t-o)/n:0,y=Date.now()-x*q;f.current=y;const S=()=>{const v=Date.now()-(f.current??Date.now());if(v<q){const w=v/q,T=o+w*n;a(T),m.current=T,p.current=requestAnimationFrame(S)}else a(c),r(!1),m.current=c,p.current&&cancelAnimationFrame(p.current)};return p.current=requestAnimationFrame(S),()=>{p.current&&cancelAnimationFrame(p.current)}}return m.current=t,()=>{p.current&&(cancelAnimationFrame(p.current),p.current=null)}},[l,o,c,a,n,r,t]);const R=A.useCallback(()=>{t>=c&&(a(o),m.current=o)},[t,c,o,a]);return s.jsxs(St,{children:[s.jsx(ge,{onPlaybackRestart:R}),s.jsx(gt,{duration:100,handleProgressChange:k,markers:e,playingTime:(t-o)/n*100,tweetPlayingTime:t})]})},St=h(b).attrs({direction:"row",align:"center",justify:"space-between"})`
  padding: 20px;
  background: ${g.BG2};
  height: 96px;
  border-radius: 8px;
  box-sizing: border-box;
  margin-right: 4px;
`,Rt={impression_count:{label:"Impressions",formatter:e=>e.toLocaleString()},like_count:{label:"Likes",formatter:e=>e},reply_count:{label:"Replies",formatter:e=>e},retweet_count:{label:"Retweets",formatter:e=>e},quote_count:{label:"Quotes",formatter:e=>e},bookmark_count:{label:"Bookmarks",formatter:e=>e},analytics_location:{label:"Location",formatter:e=>e||"Unknown"},analytics_gender:{label:"Gender",formatter:e=>e||"Unknown"},followers:{label:"Followers",formatter:e=>e.toLocaleString()}},Ot=e=>e==null?s.jsx(oe,{color:g.GRAY3}):e<=4?s.jsx(Oe,{color:"#ef4444"}):e>=7?s.jsx(De,{color:"#22c55e"}):s.jsx(oe,{color:g.GRAY3}),Dt=({node:e})=>{var a,r,i;const t=((a=e==null?void 0:e.properties)==null?void 0:a.followers)!==void 0&&((r=e==null?void 0:e.properties)==null?void 0:r.impression_count)!==void 0&&e.properties.impression_count!==0?(e.properties.impression_count/e.properties.followers).toFixed(2):"N/A";return s.jsxs($t,{children:[s.jsx(Mt,{children:"Analytics"}),s.jsxs(Et,{children:[Object.entries(Rt).map(([n,{label:l,formatter:o}])=>{var u;return((u=e==null?void 0:e.properties)==null?void 0:u[n])!==void 0?s.jsxs(ee,{children:[s.jsx("span",{children:l}),s.jsx(te,{children:o(e.properties[n])})]},n):null}),s.jsxs(ee,{children:[s.jsx("span",{children:"Views-to-followers"}),s.jsx(te,{children:t})]}),s.jsxs(ee,{children:[s.jsx("span",{children:"Sentiment"}),s.jsx(te,{children:Ot((i=e==null?void 0:e.properties)==null?void 0:i.analytics_sentiment_score)})]})]})]})},$t=h.div`
  background: ${g.ANALYTICS_CARD_BG};
  border-radius: 16px;
  padding: 16px 20px;
  width: 100%;
  max-width: 350px;
`,Mt=h.h2`
  color: ${g.white};
  font-size: 16px;
  font-weight: 500;
  margin: 0 0 16px 0;
`,Et=h.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px 24px;
`,ee=h.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${g.GRAY3};
  font-size: 14px;
  padding-right: 4px;
`,te=h.span`
  color: ${g.GRAY6};
  display: flex;
  align-items: center;
  svg {
    width: 14px;
    height: 14px;
    margin-left: 4px;
  }
`,Ct=({node:e})=>{const t=e?je(e):null,{text:a,name:r,verified:i,image_url:n,twitter_handle:l}=t||{};let o="";return(t==null?void 0:t.node_type)==="Tweet"?o=`https://x.com/${l}/status/${t==null?void 0:t.tweet_id}`:(t==null?void 0:t.node_type)==="User"&&(o=`https://x.com/${l}`),s.jsx(It,{children:s.jsxs(Nt,{children:[s.jsx(Bt,{children:n?s.jsx(Ae,{rounded:!0,size:58,src:n,type:"person"}):s.jsx(Lt,{children:s.jsx(Je,{})})}),s.jsxs(zt,{children:[s.jsxs(Ft,{children:[s.jsxs(Wt,{children:[r&&s.jsx(Gt,{children:r}),!i&&s.jsx(Ut,{children:s.jsx(Qe,{})})]}),s.jsx(Ht,{href:o,target:"_blank",children:s.jsx(Ze,{})})]}),l&&s.jsxs(Vt,{children:["@",l]}),s.jsx(Yt,{children:a})]})]})})},It=h(b)`
  background: ${g.ANALYTICS_CARD_BG};
  border-radius: 16px;
  padding: 10px;
  width: 100%;
  max-width: 369px;
`,Nt=h(b)`
  display: grid;
  width: 100%;
  grid-template-columns: auto minmax(0, 1fr);
  align-items: start;
`,Bt=h(b)`
  margin-right: 10px;
`,Lt=h(b)`
  width: 58px;
  height: 58px;
  border-radius: 50%;
  background: ${g.GRAY3};
  align-items: center;
  justify-content: center;
  color: ${g.white};
  font-size: 24px;
`,zt=h(b)`
  flex-direction: column;
  gap: 3px;
  margin-top: 12px;
`,Ft=h(b)`
  align-items: center;
  flex-direction: row;
  gap: 8px;
  width: 100%;
  justify-content: space-between;
`,Wt=h(b)`
  align-items: center;
  flex-direction: row;
  gap: 8px;
  flex-shrink: 1;
  min-width: 0;
`,Gt=h(b)`
  font-family: 'Barlow';
  font-size: 15px;
  font-weight: 700;
  color: ${g.white};
  text-decoration: none;
  line-height: 1.2;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
`,Vt=h(b)`
  font-family: 'Barlow';
  font-size: 14px;
  font-weight: 400;
  color: ${g.white};
  opacity: 0.6;
  text-decoration: none;
  line-height: 1.2;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
  margin-top: 2px;
`,Yt=h(b)`
  color: ${g.white};
  font-family: Barlow;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  margin-top: 4px;
  white-space: normal;
`,Ut=h(b)`
  background: #1d9bf0;
  border-radius: 50%;
  width: 13px;
  height: 13px;
  font-size: 15px;
  margin-top: 3px;

  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  svg {
    width: 10px;
    text-align: center;
    height: 10px;
    color: ${g.BG1_HOVER};
  }
`,Ht=h.a`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${g.white};
  opacity: 0.6;
  font-size: 14px;
  flex-shrink: 0;
  &:hover {
    opacity: 1;
  }
  svg {
    width: 18px;
    height: 18px;
    color: ${g.white} !important;
    fill: ${g.white} !important;
  }
`,Xt=()=>{const e=M(t=>t.selectedTweet);return e?s.jsxs(Kt,{align:"stretch",basis:"100%",grow:1,shrink:1,children:[s.jsx(qt,{children:e&&s.jsx(Ct,{node:e})}),s.jsx(Dt,{node:e})]}):null},Kt=h(b)(({theme:e})=>({position:"relative",display:"flex",padding:"0 20px 0 20px",background:"transparent",width:"100%",height:"calc(100vh - 180px)",overflow:"auto",[e.breakpoints.up("sm")]:{width:qe,gap:"10px"}})),qt=h(b)(({theme:e})=>({width:"100%",marginBottom:"20px",[e.breakpoints.up("sm")]:{width:"390px",margin:"0 auto"}})),Qt=e=>{const t=e.edges.filter(r=>{var i;return((i=r==null?void 0:r.properties)==null?void 0:i.start)&&typeof r.properties.start=="string"}).map(r=>({source:r.source,target:r.target,start:r.properties.start}));return e.nodes.filter(r=>e.edges.some(i=>i.source===r.ref_id||i.target===r.ref_id)).map(r=>{const i=t.find(n=>r.ref_id===n.source||r.ref_id===n.target);return{...r,start:(i==null?void 0:i.start)||0}}).filter(r=>r&&typeof r.start=="string"&&r.node_type!=="Clip"&&r.node_type!=="Episode"&&r.node_type!=="Show")},kr=()=>{const e=Pe(d=>d.addNewNode),t=A.useRef(null),a=A.useRef(null),r=A.useRef(null),[i,n]=A.useState([]),{setSchemas:l}=he(d=>d),o=M(d=>d.setSelectedTweet),u=Te(),{tweetId:c}=_e();return A.useEffect(()=>{(async()=>{try{const m=await Se();l(m.schemas.filter(p=>!p.is_deleted))}catch(m){console.error("Error fetching schema:",m)}})()},[l]),A.useEffect(()=>{c&&(async m=>{try{const p=await Re(m),f=p.nodes.find(R=>R.ref_id===c);f&&(o(f),e({nodes:[f],edges:[]}));const k=Qt({nodes:p.nodes,edges:p.edges});n(k),r.current={nodes:p.nodes,edges:p.edges}}catch(p){u("/"),console.error(p)}})(c)},[e,u,c,o]),A.useEffect(()=>{const d=m=>{const{tweetPlayingTime:p,tweetDuration:f}=M.getState(),k=f/q*3e3;if(a.current!==null){if(m-a.current>1e3){if(r.current){const{nodes:x,edges:y}=r.current,S=p,[v,w]=y.reduce(([O,D],j)=>{var E;const $=typeof((E=j==null?void 0:j.properties)==null?void 0:E.start)=="string"?new Date(j.properties.start||0).getTime():0;return $!==0&&$<=S+k?O.push(j):D.push(j),[O,D]},[[],[]]),[T,P]=x.reduce(([O,D],j)=>(v.some($=>$.target===j.ref_id||$.source===j.ref_id)?O.push(j):D.push(j),[O,D]),[[],[]]);r.current={nodes:P,edges:w},(T.length||v.length)&&e({nodes:T,edges:v})}a.current=m}}else a.current=m;t.current=requestAnimationFrame(d)};return t.current=requestAnimationFrame(d),()=>{t.current&&cancelAnimationFrame(t.current)}},[r,e]),s.jsxs(Jt,{children:[s.jsx(Zt,{direction:"row",children:s.jsxs(s.Fragment,{children:[s.jsxs(b,{children:[s.jsx(ke,{}),s.jsx(Xt,{})]}),s.jsx(er,{children:s.jsx(b,{basis:"100%",grow:1,shrink:1,children:s.jsx($e,{})})})]})}),s.jsx(tr,{children:s.jsx(kt,{markers:i})})]})},Jt=h.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
`,Zt=h(b)`
  flex: 1;
  overflow: hidden;
`,er=h(b)`
  flex-basis: 100%;
  flex-shrink: 1;
  flex-grow: 1;
  padding: 16px 16px 16px 0;
`,tr=h(b)`
  padding: 16px 16px 16px 0;
  margin-left: 18px;
`;export{kr as TweetMindset};
