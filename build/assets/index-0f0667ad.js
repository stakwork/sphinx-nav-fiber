import{w as re,R as S,r as b,e as Te,c as he,v as fe,s as h,g as y,F as T,j as s,o as xe,x as se,y as _e,A as Se,z as ke,_ as De,q as ge,D as Re,i as $e,H as Oe,t as Ee}from"./index-fd66fa62.js";import{F as oe,a as Ie,b as Ne,U as Ce}from"./index-8adc8d66.js";import{u as Me,I as Be,a as Le,b as ze,c as Fe}from"./index-80bf7276.js";import{u as We,f as W,L as H,m as X,i as V,C as J,A as Ge,a as G,b as ce,c as Ve,d as le,e as Ye,g as He,h as Ue,G as Ke,j as pe,k as ue,D as Xe,l as qe,X as Qe,Y as Je,n as Ze,o as et,S as tt,M as rt}from"./index-564bd4da.js";import{C as nt}from"./CheckIcon-f0c01bc0.js";import{S as it,P as at,L as st}from"./index-9b9c3e24.js";import"./index-c4e31ada.js";import"./three.module-9722a9fc.js";import"./index-d0ff402c.js";import"./TextareaAutosize-1944770c.js";import"./index-ec1d934b.js";import"./index-198ace75.js";import"./ClipLoader-a27b3188.js";import"./clsx-dbb40d39.js";import"./Skeleton-ffee2890.js";import"./index-01d99814.js";import"./SoundIcon-5588cca4.js";import"./Stack-5fb2048c.js";import"./FormControlLabel-24f21b9d.js";import"./Typography-a4bc6b18.js";import"./createSvgIcon-dbb9e732.js";import"./isPlainObject-f126b6ab.js";import"./string-a277709d.js";import"./SourcesTableIcon-c3a66ab9.js";import"./DeleteNodeIcon-3f57b907.js";import"./SucessFeedBackIcon-ff147d93.js";var ot=["layout","type","stroke","connectNulls","isRange","ref"],ye;function Y(e){"@babel/helpers - typeof";return Y=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Y(e)}function ct(e,t){if(e==null)return{};var a=lt(e,t),r,n;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function lt(e,t){if(e==null)return{};var a={},r=Object.keys(e),n,i;for(i=0;i<r.length;i++)n=r[i],!(t.indexOf(n)>=0)&&(a[n]=e[n]);return a}function F(){return F=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},F.apply(this,arguments)}function de(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),a.push.apply(a,r)}return a}function L(e){for(var t=1;t<arguments.length;t++){var a=arguments[t]!=null?arguments[t]:{};t%2?de(Object(a),!0).forEach(function(r){N(e,r,a[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):de(Object(a)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))})}return e}function pt(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function me(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,we(r.key),r)}}function ut(e,t,a){return t&&me(e.prototype,t),a&&me(e,a),Object.defineProperty(e,"prototype",{writable:!1}),e}function dt(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&ne(e,t)}function ne(e,t){return ne=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,n){return r.__proto__=n,r},ne(e,t)}function mt(e){var t=ft();return function(){var r=Q(e),n;if(t){var i=Q(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return ht(this,n)}}function ht(e,t){if(t&&(Y(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return U(e)}function U(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function ft(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Q(e){return Q=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(a){return a.__proto__||Object.getPrototypeOf(a)},Q(e)}function N(e,t,a){return t=we(t),t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function we(e){var t=xt(e,"string");return Y(t)==="symbol"?t:String(t)}function xt(e,t){if(Y(e)!=="object"||e===null)return e;var a=e[Symbol.toPrimitive];if(a!==void 0){var r=a.call(e,t||"default");if(Y(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var z=function(e){dt(a,e);var t=mt(a);function a(){var r;pt(this,a);for(var n=arguments.length,i=new Array(n),l=0;l<n;l++)i[l]=arguments[l];return r=t.call.apply(t,[this].concat(i)),N(U(r),"state",{isAnimationFinished:!0}),N(U(r),"id",We("recharts-area-")),N(U(r),"handleAnimationEnd",function(){var o=r.props.onAnimationEnd;r.setState({isAnimationFinished:!0}),re(o)&&o()}),N(U(r),"handleAnimationStart",function(){var o=r.props.onAnimationStart;r.setState({isAnimationFinished:!1}),re(o)&&o()}),r}return ut(a,[{key:"renderDots",value:function(n,i,l){var o=this.props.isAnimationActive,p=this.state.isAnimationFinished;if(o&&!p)return null;var c=this.props,m=c.dot,f=c.points,u=c.dataKey,d=W(this.props),P=W(m,!0),v=f.map(function(w,k){var g=L(L(L({key:"dot-".concat(k),r:3},d),P),{},{dataKey:u,cx:w.x,cy:w.y,index:k,value:w.value,payload:w.payload});return a.renderDotItem(m,g)}),x={clipPath:n?"url(#clipPath-".concat(i?"":"dots-").concat(l,")"):null};return S.createElement(H,F({className:"recharts-area-dots"},x),v)}},{key:"renderHorizontalRect",value:function(n){var i=this.props,l=i.baseLine,o=i.points,p=i.strokeWidth,c=o[0].x,m=o[o.length-1].x,f=n*Math.abs(c-m),u=X(o.map(function(d){return d.y||0}));return V(l)&&typeof l=="number"?u=Math.max(l,u):l&&Array.isArray(l)&&l.length&&(u=Math.max(X(l.map(function(d){return d.y||0})),u)),V(u)?S.createElement("rect",{x:c<m?c:c-f,y:0,width:f,height:Math.floor(u+(p?parseInt("".concat(p),10):1))}):null}},{key:"renderVerticalRect",value:function(n){var i=this.props,l=i.baseLine,o=i.points,p=i.strokeWidth,c=o[0].y,m=o[o.length-1].y,f=n*Math.abs(c-m),u=X(o.map(function(d){return d.x||0}));return V(l)&&typeof l=="number"?u=Math.max(l,u):l&&Array.isArray(l)&&l.length&&(u=Math.max(X(l.map(function(d){return d.x||0})),u)),V(u)?S.createElement("rect",{x:0,y:c<m?c:c-f,width:u+(p?parseInt("".concat(p),10):1),height:Math.floor(f)}):null}},{key:"renderClipRect",value:function(n){var i=this.props.layout;return i==="vertical"?this.renderVerticalRect(n):this.renderHorizontalRect(n)}},{key:"renderAreaStatically",value:function(n,i,l,o){var p=this.props,c=p.layout,m=p.type,f=p.stroke,u=p.connectNulls,d=p.isRange;p.ref;var P=ct(p,ot);return S.createElement(H,{clipPath:l?"url(#clipPath-".concat(o,")"):null},S.createElement(J,F({},W(P,!0),{points:n,connectNulls:u,type:m,baseLine:i,layout:c,stroke:"none",className:"recharts-area-area"})),f!=="none"&&S.createElement(J,F({},W(this.props),{className:"recharts-area-curve",layout:c,type:m,connectNulls:u,fill:"none",points:n})),f!=="none"&&d&&S.createElement(J,F({},W(this.props),{className:"recharts-area-curve",layout:c,type:m,connectNulls:u,fill:"none",points:i})))}},{key:"renderAreaWithAnimation",value:function(n,i){var l=this,o=this.props,p=o.points,c=o.baseLine,m=o.isAnimationActive,f=o.animationBegin,u=o.animationDuration,d=o.animationEasing,P=o.animationId,v=this.state,x=v.prevPoints,w=v.prevBaseLine;return S.createElement(Ge,{begin:f,duration:u,isActive:m,easing:d,from:{t:0},to:{t:1},key:"area-".concat(P),onAnimationEnd:this.handleAnimationEnd,onAnimationStart:this.handleAnimationStart},function(k){var g=k.t;if(x){var j=x.length/p.length,_=p.map(function(R,E){var O=Math.floor(E*j);if(x[O]){var D=x[O],I=G(D.x,R.x),B=G(D.y,R.y);return L(L({},R),{},{x:I(g),y:B(g)})}return R}),A;if(V(c)&&typeof c=="number"){var C=G(w,c);A=C(g)}else if(ce(c)||Ve(c)){var M=G(w,0);A=M(g)}else A=c.map(function(R,E){var O=Math.floor(E*j);if(w[O]){var D=w[O],I=G(D.x,R.x),B=G(D.y,R.y);return L(L({},R),{},{x:I(g),y:B(g)})}return R});return l.renderAreaStatically(_,A,n,i)}return S.createElement(H,null,S.createElement("defs",null,S.createElement("clipPath",{id:"animationClipPath-".concat(i)},l.renderClipRect(g))),S.createElement(H,{clipPath:"url(#animationClipPath-".concat(i,")")},l.renderAreaStatically(p,c,n,i)))})}},{key:"renderArea",value:function(n,i){var l=this.props,o=l.points,p=l.baseLine,c=l.isAnimationActive,m=this.state,f=m.prevPoints,u=m.prevBaseLine,d=m.totalLength;return c&&o&&o.length&&(!f&&d>0||!le(f,o)||!le(u,p))?this.renderAreaWithAnimation(n,i):this.renderAreaStatically(o,p,n,i)}},{key:"render",value:function(){var n,i=this.props,l=i.hide,o=i.dot,p=i.points,c=i.className,m=i.top,f=i.left,u=i.xAxis,d=i.yAxis,P=i.width,v=i.height,x=i.isAnimationActive,w=i.id;if(l||!p||!p.length)return null;var k=this.state.isAnimationFinished,g=p.length===1,j=Ye("recharts-area",c),_=u&&u.allowDataOverflow,A=d&&d.allowDataOverflow,C=_||A,M=ce(w)?this.id:w,R=(n=W(o))!==null&&n!==void 0?n:{r:3,strokeWidth:2},E=R.r,O=E===void 0?3:E,D=R.strokeWidth,I=D===void 0?2:D,B=He(o)?o:{},ie=B.clipDot,ae=ie===void 0?!0:ie,K=O*2+I;return S.createElement(H,{className:j},_||A?S.createElement("defs",null,S.createElement("clipPath",{id:"clipPath-".concat(M)},S.createElement("rect",{x:_?f:f-P/2,y:A?m:m-v/2,width:_?P:P*2,height:A?v:v*2})),!ae&&S.createElement("clipPath",{id:"clipPath-dots-".concat(M)},S.createElement("rect",{x:f-K/2,y:m-K/2,width:P+K,height:v+K}))):null,g?null:this.renderArea(C,M),(o||g)&&this.renderDots(C,ae,M),(!x||k)&&Ue.renderCallByParent(this.props,p))}}],[{key:"getDerivedStateFromProps",value:function(n,i){return n.animationId!==i.prevAnimationId?{prevAnimationId:n.animationId,curPoints:n.points,curBaseLine:n.baseLine,prevPoints:i.curPoints,prevBaseLine:i.curBaseLine}:n.points!==i.curPoints||n.baseLine!==i.curBaseLine?{curPoints:n.points,curBaseLine:n.baseLine}:null}}]),a}(b.PureComponent);ye=z;N(z,"displayName","Area");N(z,"defaultProps",{stroke:"#3182bd",fill:"#3182bd",fillOpacity:.6,xAxisId:0,yAxisId:0,legendType:"line",connectNulls:!1,points:[],dot:!1,activeDot:!0,hide:!1,isAnimationActive:!Ke.isSsr,animationBegin:0,animationDuration:1500,animationEasing:"ease"});N(z,"getBaseValue",function(e,t,a,r){var n=e.layout,i=e.baseValue,l=t.props.baseValue,o=l??i;if(V(o)&&typeof o=="number")return o;var p=n==="horizontal"?r:a,c=p.scale.domain();if(p.type==="number"){var m=Math.max(c[0],c[1]),f=Math.min(c[0],c[1]);return o==="dataMin"?f:o==="dataMax"||m<0?m:Math.max(Math.min(c[0],c[1]),0)}return o==="dataMin"?c[0]:o==="dataMax"?c[1]:c[0]});N(z,"getComposedData",function(e){var t=e.props,a=e.item,r=e.xAxis,n=e.yAxis,i=e.xAxisTicks,l=e.yAxisTicks,o=e.bandSize,p=e.dataKey,c=e.stackedData,m=e.dataStartIndex,f=e.displayedData,u=e.offset,d=t.layout,P=c&&c.length,v=ye.getBaseValue(t,a,r,n),x=d==="horizontal",w=!1,k=f.map(function(j,_){var A;P?A=c[m+_]:(A=pe(j,p),Array.isArray(A)?w=!0:A=[v,A]);var C=A[1]==null||P&&pe(j,p)==null;return x?{x:ue({axis:r,ticks:i,bandSize:o,entry:j,index:_}),y:C?null:n.scale(A[1]),value:A,payload:j}:{x:C?null:r.scale(A[1]),y:ue({axis:n,ticks:l,bandSize:o,entry:j,index:_}),value:A,payload:j}}),g;return P||w?g=k.map(function(j){var _=Array.isArray(j.value)?j.value[0]:null;return x?{x:j.x,y:_!=null&&j.y!=null?n.scale(_):null}:{x:_!=null?r.scale(_):null,y:j.y}}):g=x?n.scale(v):r.scale(v),L({points:k,baseLine:g,layout:d,isRange:w},u)});N(z,"renderDotItem",function(e,t){var a;return S.isValidElement(e)?a=S.cloneElement(e,t):re(e)?a=e(t):a=S.createElement(Xe,F({},t,{className:"recharts-area-dot"})),a});var gt=qe({chartName:"AreaChart",GraphicalChild:z,axisComponents:[{axisType:"xAxis",AxisComp:Qe},{axisType:"yAxis",AxisComp:Je}],formatAxisMap:Ze});const yt={tweetPlayingTime:0,tweetIsPlaying:!1,tweetDuration:1,selectedTweets:[],selectedTweet:""},$=Te(e=>({...yt,setTweetPlayingTime:t=>e({tweetPlayingTime:t}),setSelectedTweets:t=>e({selectedTweets:t}),setTweetIsPlaying:t=>e({tweetIsPlaying:t}),setTweetDuration:t=>e({tweetDuration:t}),setSelectedTweet:t=>e({selectedTweet:t}),fetchTweetData:async t=>{const{addNewNode:a}=he.getState(),{setPlayingNode:r}=Me.getState();console.log(a,r);const n=await fe(t,[],[],"",!0,0,1,500);console.log(n)}})),q=3e4,be=({onPlaybackRestart:e})=>{const t=$(l=>l.tweetIsPlaying),a=$(l=>l.setTweetIsPlaying),r=()=>{},n=()=>{},i=b.useCallback(()=>{e&&e(),a(!t)},[t,a,e]);return s.jsxs(wt,{children:[s.jsx(vt,{onClick:r,children:s.jsx("img",{alt:"",src:"/RewindIcon.svg"})}),s.jsx(bt,{"data-testid":"play-pause-button",onClick:i,size:"small",children:t?s.jsx(Le,{"data-testid":"pause-icon"}):s.jsx(ze,{"data-testid":"play-icon"})}),s.jsx(jt,{onClick:n,children:s.jsx("img",{alt:"",src:"/ForwardIcon.svg"})})]})};be.displayName="Controls";const wt=h(T).attrs({direction:"row",align:"center",justify:"flex-start"})`
  width: 200px;
  height: 54px;
  background: ${y.BG1};
  border-radius: 40px;
  margin-right: 30px;
  color: ${y.white};
  font-size: 20px;
  padding: 12px;
  justify-content: space-between;
  box-sizing: border-box;
`,bt=h(Be)`
  && {
    font-size: 36px;
    padding: 2px;
    overflow: hidden;
  }
`,vt=h.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1px 0 0 1px;
  cursor: pointer;
  img {
    width: 20px;
    height: auto;
  }
`,jt=h.div`
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
  color: ${y.GRAY6};

  svg {
    margin-top: 3px;
    width: 24px;
    height: 24px;
  }

  &:hover {
    background-color: ${y.DROPDOWN_BG};
  }
`;h.button`
  margin-top: 4px;
  background: ${y.BG1};
  color: ${y.GRAY6};
  border: none;
  width: 8px;
  border-radius: 20px;
  padding: 8px 20px 8px 8px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s ease;
`;const ve=b.memo(({type:e,left:t,img:a})=>{var p,c;const r=xe(m=>m.normalizedSchemasByType),n=(p=r[e])==null?void 0:p.primary_color,i=(c=r[e])==null?void 0:c.icon,l=i?`/svg-icons/${i}.svg`:"",o={iconStart:a||l,color:n??y.THING};return s.jsx(Pt,{style:{left:`${t}%`},children:s.jsx(je,{...o,label:e})})});ve.displayName="Marker";const je=b.memo(({iconStart:e,color:t,label:a})=>s.jsx(At,{color:t,children:e&&s.jsx("img",{alt:a,className:"badge__img",onError:console.log,src:e})}));je.displayName="Badge";const At=h(T).attrs({direction:"row"})`
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
`,Pt=h.div`
  position: absolute;
  color: white;
  top: -6px;
  width: 12px;
  height: 12px;
  border-radius: 4px;
  background-color: ${y.white};
  transform: translateX(-50%);
  transform: translateX(-50%) translateY(-50%);
  top: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`,Ae=b.memo(({markers:e})=>{if(e.length===0)return null;const t=e.map(i=>i.start?new Date(i.start).getTime():0),a=Math.min(...t),n=Math.max(...t)-a;return s.jsx(s.Fragment,{children:e.map((i,l)=>{var f;const p=((i.start?new Date(i.start).getTime():0)-a)/n*100,c=(i==null?void 0:i.node_type)||"",m=((f=i==null?void 0:i.properties)==null?void 0:f.image_url)||"";return s.jsx(ve,{img:m,left:p,type:c},`${i.ref_id}_${l}`)})})});Ae.displayName="Markers";const Z=50,Pe=b.memo(({markers:e,height:t=56,showChart:a=!0,backgroundColor:r=y.primaryBlue})=>{const n=e.map(c=>c.start?new Date(c.start).getTime():0),i=Math.min(...n),o=Math.max(...n)-i,p=b.useMemo(()=>{if(e.length===0||o===0)return[];const c=o/Z,m=Array(Z).fill(0);return e.forEach(f=>{if(!f.start)return;const u=new Date(f.start).getTime(),d=Math.min(Z-1,Math.floor((u-i)/c));m[d]+=1}),m.map((f,u)=>({timestamp:i+c*u,value:f}))},[e,i,o]);return e.length===0?null:s.jsx(s.Fragment,{children:a&&p.length>0&&s.jsx("div",{children:s.jsx(et,{height:t,width:"100%",children:s.jsx(gt,{data:p,children:s.jsx(z,{dataKey:"value",fill:r,fillOpacity:.5,stroke:"transparent",type:"basis"})})})})})});Pe.displayName="ProgressChart";const Tt=({duration:e,markers:t,handleProgressChange:a,playingTime:r,tweetPlayingTime:n})=>{const i=se(n).format("MMM D"),l=se(n).format("h:mma"),o=Math.min(Math.max(r,0),100);return s.jsxs(St,{children:[o?s.jsxs(Rt,{$progress:o,children:[s.jsx($t,{children:i}),s.jsx(Ot,{children:" - "}),s.jsx(Et,{children:l})]}):null,s.jsx(It,{max:e,onChange:a,value:o,width:12}),s.jsx(kt,{children:s.jsx(Ae,{markers:t})}),s.jsx(Dt,{children:s.jsx(Pe,{markers:t})})]})},_t=h(T)`
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  height: 96px;
  transform: translateY(-50%);
`,St=h(T)`
  position: relative;
  flex: 1 1 100%;
  padding: 0;
  height: 100%;
  box-sizing: border-box;
  margin-right: 12px;

  &:hover {
    ${_t} {
      display: block;
    }
  }
`,kt=h(T)`
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
`,Dt=h(T)`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 23px;
`,Rt=h.div`
  position: absolute;
  top: -40px;
  transform: translateX(-50%);
  background: rgba(230, 230, 230, 255);
  color: ${y.black};
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
`,$t=h.span`
  display: inline-block;
  width: 45px;
  text-align: right;
`,Ot=h.span`
  margin: 0 4px;
`,Et=h.span`
  display: inline-block;
  width: 55px;
  text-align: left;
  font-variant-numeric: tabular-nums;
`,It=h(tt)`
  && {
    z-index: 20;
    color: ${y.white};
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
      background-color: ${y.primaryBlue};
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
`,Nt=({markers:e})=>{const t=$(x=>x.tweetPlayingTime),a=$(x=>x.setTweetPlayingTime),r=$(x=>x.setTweetIsPlaying),n=$(x=>x.setTweetDuration),i=$(x=>x.tweetDuration),l=$(x=>x.tweetIsPlaying),[o,p]=b.useState(0),[c,m]=b.useState(0),f=b.useRef(0);b.useEffect(()=>{const x=e.map(j=>j.start?new Date(j.start).getTime():0),w=Math.min(...x),k=Math.max(...x),g=k-w;p(w),m(k),n(g)},[e,n]);const u=b.useRef(null),d=b.useRef(null),P=b.useCallback((x,w)=>{const k=Array.isArray(w)?w[0]:w,g=o+k/100*i;a(g)},[a,o,i]);b.useEffect(()=>{if(l){t>=c&&(a(o),f.current=o),d.current=Date.now();const x=t?(t-o)/i:0,w=Date.now()-x*q;d.current=w;const k=()=>{const g=Date.now()-(d.current??Date.now());if(g<q){const j=g/q,_=o+j*i;a(_),f.current=_,u.current=requestAnimationFrame(k)}else a(c),r(!1),f.current=c,u.current&&cancelAnimationFrame(u.current)};return u.current=requestAnimationFrame(k),()=>{u.current&&cancelAnimationFrame(u.current)}}return f.current=t,()=>{u.current&&(cancelAnimationFrame(u.current),u.current=null)}},[l,o,c,a,i,r,t]);const v=b.useCallback(()=>{t>=c&&(a(o),f.current=o)},[t,c,o,a]);return s.jsxs(Ct,{children:[s.jsx(be,{onPlaybackRestart:v}),s.jsx(Tt,{duration:100,handleProgressChange:P,markers:e,playingTime:(t-o)/i*100,tweetPlayingTime:t})]})},Ct=h(T).attrs({direction:"row",align:"center",justify:"space-between"})`
  padding: 20px;
  background: ${y.BG2};
  height: 96px;
  border-radius: 8px;
  box-sizing: border-box;
  margin-right: 4px;
`,Mt={impression_count:{label:"Impressions",formatter:e=>e.toLocaleString()},like_count:{label:"Likes",formatter:e=>e},reply_count:{label:"Replies",formatter:e=>e},retweet_count:{label:"Retweets",formatter:e=>e},quote_count:{label:"Quotes",formatter:e=>e},bookmark_count:{label:"Bookmarks",formatter:e=>e},analytics_location:{label:"Location",formatter:e=>e||"Unknown"},analytics_gender:{label:"Gender",formatter:e=>e||"Unknown"},followers:{label:"Followers",formatter:e=>e.toLocaleString()}},Bt=e=>e==null?s.jsx(oe,{color:y.GRAY3}):e<=4?s.jsx(Ie,{color:"#ef4444"}):e>=7?s.jsx(Ne,{color:"#22c55e"}):s.jsx(oe,{color:y.GRAY3}),Lt=({node:e,handleAnalyzeClick:t})=>{var r,n,i;const a=((r=e==null?void 0:e.properties)==null?void 0:r.followers)!==void 0&&((n=e==null?void 0:e.properties)==null?void 0:n.impression_count)!==void 0&&e.properties.impression_count!==0?(e.properties.impression_count/e.properties.followers).toFixed(2):"N/A";return s.jsxs(zt,{children:[s.jsxs(T,{align:"center",direction:"row",justify:"space-between",mb:16,children:[s.jsx(Ft,{children:"Analytics"}),s.jsx(Gt,{onClick:l=>{l.stopPropagation(),t()},children:s.jsx(it,{})})]}),s.jsxs(Wt,{children:[Object.entries(Mt).map(([l,{label:o,formatter:p}])=>{var c;return((c=e==null?void 0:e.properties)==null?void 0:c[l])!==void 0?s.jsxs(ee,{children:[s.jsx("span",{children:o}),s.jsx(te,{children:p(e.properties[l])})]},l):null}),s.jsxs(ee,{children:[s.jsx("span",{children:"Views-to-followers"}),s.jsx(te,{children:a})]}),s.jsxs(ee,{children:[s.jsx("span",{children:"Sentiment"}),s.jsx(te,{children:Bt((i=e==null?void 0:e.properties)==null?void 0:i.analytics_sentiment_score)})]})]})]})},zt=h.div`
  background: ${y.ANALYTICS_CARD_BG};
  border-radius: 16px;
  padding: 16px 0;
  max-width: 350px;
`,Ft=h.h2`
  color: ${y.white};
  font-size: 16px;
  font-weight: 500;
`,Wt=h.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px 24px;
`,ee=h.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${y.GRAY3};
  font-size: 14px;
  padding-right: 4px;
`,te=h.span`
  color: ${y.GRAY6};
  display: flex;
  align-items: center;
  svg {
    width: 14px;
    height: 14px;
    margin-left: 4px;
  }
`,Gt=h.a`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${y.white};
  font-size: 24px;
  flex-shrink: 0;
  color: ${y.SOURCE_TABLE_LINK};
  opacity: 1;
  cursor: pointer;
  &:hover {
    opacity: 0.6;
  }
`,Vt=({nodeId:e,handleAnalyzeClick:t})=>{const[a,r]=b.useState(null);b.useEffect(()=>{(async()=>{try{const u=await ke(e);r(u)}catch(u){console.error(u)}})()},[e]);const n=a?_e(a):null,{text:i,name:l,verified:o,image_url:p,twitter_handle:c}=n||{};let m="";return(n==null?void 0:n.node_type)==="Tweet"?m=`https://x.com/${c}/status/${n==null?void 0:n.tweet_id}`:(n==null?void 0:n.node_type)==="User"&&(m=`https://x.com/${c}`),s.jsx(Yt,{children:s.jsxs(Ht,{children:[s.jsx(Ut,{children:p?s.jsx(Se,{rounded:!0,size:58,src:p,type:"person"}):s.jsx(Kt,{children:s.jsx(at,{})})}),s.jsxs(Xt,{children:[s.jsxs(qt,{children:[s.jsxs(Qt,{children:[l&&s.jsx(Jt,{children:l}),!o&&s.jsx(tr,{children:s.jsx(nt,{})})]}),s.jsx(rr,{href:m,target:"_blank",children:s.jsx(st,{})})]}),c&&s.jsxs(Zt,{children:["@",c]}),s.jsx(er,{children:i}),a&&s.jsx(Lt,{handleAnalyzeClick:t,node:a})]})]})})},Yt=h(T)`
  background: ${y.ANALYTICS_CARD_BG};
  border-radius: 16px;
  padding: 10px;
  width: 100%;
  max-width: 369px;
`,Ht=h(T)`
  display: grid;
  width: 100%;
  grid-template-columns: auto minmax(0, 1fr);
  align-items: start;
`,Ut=h(T)`
  margin-right: 10px;
`,Kt=h(T)`
  width: 58px;
  height: 58px;
  border-radius: 50%;
  background: ${y.GRAY3};
  align-items: center;
  justify-content: center;
  color: ${y.white};
  font-size: 24px;
`,Xt=h(T)`
  flex-direction: column;
  gap: 3px;
  margin-top: 12px;
`,qt=h(T)`
  align-items: center;
  flex-direction: row;
  gap: 8px;
  width: 100%;
  justify-content: space-between;
`,Qt=h(T)`
  align-items: center;
  flex-direction: row;
  gap: 8px;
  flex-shrink: 1;
  min-width: 0;
`,Jt=h(T)`
  font-family: 'Barlow';
  font-size: 15px;
  font-weight: 700;
  color: ${y.white};
  text-decoration: none;
  line-height: 1.2;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
`,Zt=h(T)`
  font-family: 'Barlow';
  font-size: 14px;
  font-weight: 400;
  color: ${y.white};
  opacity: 0.6;
  text-decoration: none;
  line-height: 1.2;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
  margin-top: 2px;
`,er=h(T)`
  color: ${y.white};
  font-family: Barlow;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  margin-top: 4px;
  white-space: normal;
`,tr=h(T)`
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
    color: ${y.BG1_HOVER};
  }
`,rr=h.a`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${y.white};
  opacity: 0.6;
  font-size: 14px;
  flex-shrink: 0;
  &:hover {
    opacity: 1;
  }
  svg {
    width: 18px;
    height: 18px;
    color: ${y.white} !important;
    fill: ${y.white} !important;
  }
`,nr=b.lazy(()=>De(()=>import("./index-f80f5fa6.js"),["assets/index-f80f5fa6.js","assets/index-fd66fa62.js","assets/index-b4d03b7b.css","assets/index-9b9c3e24.js","assets/SourcesTableIcon-c3a66ab9.js","assets/index-80bf7276.js","assets/CheckIcon-f0c01bc0.js","assets/DeleteNodeIcon-3f57b907.js","assets/SoundIcon-5588cca4.js","assets/SucessFeedBackIcon-ff147d93.js","assets/ClipLoader-a27b3188.js","assets/TableRow-a1eb7924.js"]).then(({TweetAnalyze:e})=>({default:e}))),ir=()=>{const e=$(p=>p.setSelectedTweet),t=$(p=>p.selectedTweet),{tweetId:a}=ge(),[r,n]=b.useState(""),{open:i}=Re("tweetAnalyze"),l=(a==null?void 0:a.split("&"))||[],o=p=>{i(),n(p)};return s.jsx(s.Fragment,{children:s.jsxs(sr,{align:"stretch",basis:"100%",grow:1,shrink:1,children:[l.length>1?s.jsx(ar,{onClick:()=>{o("summary")},children:"Summary Report"}):null,l.map(p=>s.jsx(or,{className:t===p?"selected":"",onClick:()=>e(p),children:s.jsx(Vt,{handleAnalyzeClick:()=>{o(p)},nodeId:p})},p)),s.jsx(nr,{tweetId:r})]})})},ar=h.button`
  width: 100%;
  background: ${y.ANALYTICS_CARD_BG};
  color: ${y.white};
  padding: 16px 16px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  margin-top: 16px;
  cursor: pointer;
  transition: background-color 0.2s;
  border: 1px solid ${y.ANALYTICS_CARD_BG};
  &:hover {
    opacity: 0.6;
  }
`,sr=h(T)(({theme:e})=>({position:"relative",display:"flex",padding:"0 20px 0 20px",background:"transparent",width:"100%",height:"calc(100vh - 180px)",overflow:"auto",[e.breakpoints.up("sm")]:{width:rt,gap:"10px"}})),or=h(T)`
  width: 100%;
  margin-bottom: 20px;
  cursor: pointer;
  border: 1px solid transparent;
  border-radius: 16px;

  &.selected {
    border: 1px solid ${y.white};
  }

  &:hover {
    border: 1px solid ${y.white};
  }

  ${({theme:e})=>e.breakpoints.up("sm")} {
    width: 390px;
    margin: 0 auto;
  }
`,cr=[{ref_id:"positive",name:"Positive"},{ref_id:"negative",name:"Negative"},{ref_id:"neutral",name:"Neutral"}],lr=e=>{const t=e.edges.filter(r=>{var n;return((n=r==null?void 0:r.properties)==null?void 0:n.start)&&typeof r.properties.start=="string"}).map(r=>({source:r.source,target:r.target,start:r.properties.start}));return e.nodes.filter(r=>e.edges.some(n=>n.source===r.ref_id||n.target===r.ref_id)).map(r=>{const n=t.find(i=>r.ref_id===i.source||r.ref_id===i.target);return{...r,start:(n==null?void 0:n.start)||0}}).filter(r=>r&&typeof r.start=="string"&&r.node_type!=="Clip"&&r.node_type!=="Episode"&&r.node_type!=="Show")},zr=()=>{const e=he(d=>d.addNewNode),t=b.useRef(null),a=b.useRef(null),r=b.useRef(null),[n,i]=b.useState([]),{setSchemas:l}=xe(d=>d),o=$(d=>d.setSelectedTweets),p=$(d=>d.selectedTweet),c=$(d=>d.setSelectedTweet),m=Fe(d=>d.setNeighbourhoods),f=$e(),{tweetId:u}=ge();return b.useEffect(()=>{(async()=>{try{const P=await Ee();l(P.schemas.filter(v=>!v.is_deleted))}catch(P){console.error("Error fetching schema:",P)}})()},[l]),b.useEffect(()=>{m(cr)},[m]),b.useEffect(()=>{if(!p){const d=u==null?void 0:u.split("&")[0];d&&c(d)}},[p,u,c]),b.useEffect(()=>{p&&(async P=>{try{const v=await fe(P),x=v.nodes.find(g=>g.ref_id===p);x&&(o([x]),e({nodes:[x],edges:[]}));const w=lr({nodes:v.nodes,edges:v.edges});i(w);const k=v.nodes.map(g=>{var j,_,A;return g.node_type==="Tweet"&&((j=g.properties)!=null&&j.sentiment)?((_=g.properties)==null?void 0:_.sentiment)<4?{...g,neighbourHood:"negative"}:((A=g.properties)==null?void 0:A.sentiment)>7?{...g,neighbourHood:"positive"}:{...g,neighbourHood:"neutral"}:g});r.current={nodes:k,edges:v.edges}}catch(v){f("/"),console.error(v)}})(p)},[e,f,p,o]),b.useEffect(()=>{const d=P=>{const{tweetPlayingTime:v,tweetDuration:x}=$.getState(),w=x/q*3e3;if(a.current!==null){if(P-a.current>1e3){if(r.current){const{nodes:g,edges:j}=r.current,_=v,[A,C]=j.reduce(([E,O],D)=>{var B;const I=typeof((B=D==null?void 0:D.properties)==null?void 0:B.start)=="string"?new Date(D.properties.start||0).getTime():0;return I!==0&&I<=_+w?E.push(D):O.push(D),[E,O]},[[],[]]),[M,R]=g.reduce(([E,O],D)=>(A.some(I=>I.target===D.ref_id||I.source===D.ref_id)?E.push(D):O.push(D),[E,O]),[[],[]]);r.current={nodes:R,edges:C},(M.length||A.length)&&e({nodes:M,edges:A})}a.current=P}}else a.current=P;t.current=requestAnimationFrame(d)};return t.current=requestAnimationFrame(d),()=>{t.current&&cancelAnimationFrame(t.current)}},[r,e]),s.jsx(s.Fragment,{children:s.jsxs(pr,{children:[s.jsx(ur,{direction:"row",children:s.jsxs(s.Fragment,{children:[s.jsxs(T,{children:[s.jsx(Oe,{}),s.jsx(ir,{})]}),s.jsx(dr,{children:s.jsx(T,{basis:"100%",grow:1,shrink:1,children:s.jsx(Ce,{})})})]})}),s.jsx(mr,{children:s.jsx(Nt,{markers:n})})]})})},pr=h.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
`,ur=h(T)`
  flex: 1;
  overflow: hidden;
`,dr=h(T)`
  flex-basis: 100%;
  flex-shrink: 1;
  flex-grow: 1;
  padding: 16px 16px 16px 0;
`,mr=h(T)`
  padding: 16px 16px 16px 0;
  margin-left: 18px;
`;export{zr as TweetMindset};
