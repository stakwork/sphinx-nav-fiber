import{y as re,R as S,r as b,e as Te,c as he,o as fe,s as h,g as x,F as v,j as s,t as xe,z as se,D as _e,A as Se,E as ke,_ as De,w as ge,p as Re,i as $e,H as Oe,x as Ce}from"./index-9fa590a9.js";import{F as oe,a as Ee,b as Ie,U as Me}from"./index-758e7ef3.js";import{b as Ne,I as Be,c as Le,e as ze}from"./index-505b4cb4.js";import{u as Fe,f as F,L as U,m as X,d as G,C as J,A as We,e as W,g as ce,h as Ge,j as le,k as Ve,l as Ye,n as Ue,G as He,o as pe,p as ue,D as Ke,q as Xe,X as qe,Y as Qe,r as Je,t as Ze,S as et,M as tt}from"./index-7c21f503.js";import{C as rt}from"./CheckIcon-85724847.js";import{S as nt,P as it,L as at}from"./index-5c1b1d29.js";import"./index-76c189ba.js";import"./three.module-4d3d7244.js";import"./index-d2863388.js";import"./TextareaAutosize-eb7ae751.js";import"./index-d1859dc9.js";import"./index-21cae34e.js";import"./ClipLoader-eb05e7e2.js";import"./clsx-9446d41b.js";import"./Skeleton-2d2bd8b5.js";import"./index-17ac567d.js";import"./SoundIcon-eacfe81f.js";import"./Stack-914e58ce.js";import"./FormControlLabel-51fa69e3.js";import"./Typography-e47b2c35.js";import"./createSvgIcon-11dccdde.js";import"./isPlainObject-db091e08.js";import"./SourcesTableIcon-44bf4a14.js";import"./DeleteNodeIcon-b8dae403.js";import"./SucessFeedBackIcon-116ef535.js";var st=["layout","type","stroke","connectNulls","isRange","ref"],ye;function V(e){"@babel/helpers - typeof";return V=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},V(e)}function ot(e,t){if(e==null)return{};var a=ct(e,t),r,n;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function ct(e,t){if(e==null)return{};var a={},r=Object.keys(e),n,i;for(i=0;i<r.length;i++)n=r[i],!(t.indexOf(n)>=0)&&(a[n]=e[n]);return a}function z(){return z=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},z.apply(this,arguments)}function de(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),a.push.apply(a,r)}return a}function B(e){for(var t=1;t<arguments.length;t++){var a=arguments[t]!=null?arguments[t]:{};t%2?de(Object(a),!0).forEach(function(r){I(e,r,a[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):de(Object(a)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))})}return e}function lt(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function me(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,we(r.key),r)}}function pt(e,t,a){return t&&me(e.prototype,t),a&&me(e,a),Object.defineProperty(e,"prototype",{writable:!1}),e}function ut(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&ne(e,t)}function ne(e,t){return ne=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,n){return r.__proto__=n,r},ne(e,t)}function dt(e){var t=ht();return function(){var r=Q(e),n;if(t){var i=Q(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return mt(this,n)}}function mt(e,t){if(t&&(V(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return H(e)}function H(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function ht(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Q(e){return Q=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(a){return a.__proto__||Object.getPrototypeOf(a)},Q(e)}function I(e,t,a){return t=we(t),t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function we(e){var t=ft(e,"string");return V(t)==="symbol"?t:String(t)}function ft(e,t){if(V(e)!=="object"||e===null)return e;var a=e[Symbol.toPrimitive];if(a!==void 0){var r=a.call(e,t||"default");if(V(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var L=function(e){ut(a,e);var t=dt(a);function a(){var r;lt(this,a);for(var n=arguments.length,i=new Array(n),l=0;l<n;l++)i[l]=arguments[l];return r=t.call.apply(t,[this].concat(i)),I(H(r),"state",{isAnimationFinished:!0}),I(H(r),"id",Fe("recharts-area-")),I(H(r),"handleAnimationEnd",function(){var o=r.props.onAnimationEnd;r.setState({isAnimationFinished:!0}),re(o)&&o()}),I(H(r),"handleAnimationStart",function(){var o=r.props.onAnimationStart;r.setState({isAnimationFinished:!1}),re(o)&&o()}),r}return pt(a,[{key:"renderDots",value:function(n,i,l){var o=this.props.isAnimationActive,p=this.state.isAnimationFinished;if(o&&!p)return null;var c=this.props,d=c.dot,m=c.points,u=c.dataKey,f=F(this.props),y=F(d,!0),_=m.map(function(w,k){var j=B(B(B({key:"dot-".concat(k),r:3},f),y),{},{dataKey:u,cx:w.x,cy:w.y,index:k,value:w.value,payload:w.payload});return a.renderDotItem(d,j)}),g={clipPath:n?"url(#clipPath-".concat(i?"":"dots-").concat(l,")"):null};return S.createElement(U,z({className:"recharts-area-dots"},g),_)}},{key:"renderHorizontalRect",value:function(n){var i=this.props,l=i.baseLine,o=i.points,p=i.strokeWidth,c=o[0].x,d=o[o.length-1].x,m=n*Math.abs(c-d),u=X(o.map(function(f){return f.y||0}));return G(l)&&typeof l=="number"?u=Math.max(l,u):l&&Array.isArray(l)&&l.length&&(u=Math.max(X(l.map(function(f){return f.y||0})),u)),G(u)?S.createElement("rect",{x:c<d?c:c-m,y:0,width:m,height:Math.floor(u+(p?parseInt("".concat(p),10):1))}):null}},{key:"renderVerticalRect",value:function(n){var i=this.props,l=i.baseLine,o=i.points,p=i.strokeWidth,c=o[0].y,d=o[o.length-1].y,m=n*Math.abs(c-d),u=X(o.map(function(f){return f.x||0}));return G(l)&&typeof l=="number"?u=Math.max(l,u):l&&Array.isArray(l)&&l.length&&(u=Math.max(X(l.map(function(f){return f.x||0})),u)),G(u)?S.createElement("rect",{x:0,y:c<d?c:c-m,width:u+(p?parseInt("".concat(p),10):1),height:Math.floor(m)}):null}},{key:"renderClipRect",value:function(n){var i=this.props.layout;return i==="vertical"?this.renderVerticalRect(n):this.renderHorizontalRect(n)}},{key:"renderAreaStatically",value:function(n,i,l,o){var p=this.props,c=p.layout,d=p.type,m=p.stroke,u=p.connectNulls,f=p.isRange;p.ref;var y=ot(p,st);return S.createElement(U,{clipPath:l?"url(#clipPath-".concat(o,")"):null},S.createElement(J,z({},F(y,!0),{points:n,connectNulls:u,type:d,baseLine:i,layout:c,stroke:"none",className:"recharts-area-area"})),m!=="none"&&S.createElement(J,z({},F(this.props),{className:"recharts-area-curve",layout:c,type:d,connectNulls:u,fill:"none",points:n})),m!=="none"&&f&&S.createElement(J,z({},F(this.props),{className:"recharts-area-curve",layout:c,type:d,connectNulls:u,fill:"none",points:i})))}},{key:"renderAreaWithAnimation",value:function(n,i){var l=this,o=this.props,p=o.points,c=o.baseLine,d=o.isAnimationActive,m=o.animationBegin,u=o.animationDuration,f=o.animationEasing,y=o.animationId,_=this.state,g=_.prevPoints,w=_.prevBaseLine;return S.createElement(We,{begin:m,duration:u,isActive:d,easing:f,from:{t:0},to:{t:1},key:"area-".concat(y),onAnimationEnd:this.handleAnimationEnd,onAnimationStart:this.handleAnimationStart},function(k){var j=k.t;if(g){var A=g.length/p.length,P=p.map(function(R,C){var D=Math.floor(C*A);if(g[D]){var $=g[D],N=W($.x,R.x),Y=W($.y,R.y);return B(B({},R),{},{x:N(j),y:Y(j)})}return R}),T;if(G(c)&&typeof c=="number"){var E=W(w,c);T=E(j)}else if(ce(c)||Ge(c)){var M=W(w,0);T=M(j)}else T=c.map(function(R,C){var D=Math.floor(C*A);if(w[D]){var $=w[D],N=W($.x,R.x),Y=W($.y,R.y);return B(B({},R),{},{x:N(j),y:Y(j)})}return R});return l.renderAreaStatically(P,T,n,i)}return S.createElement(U,null,S.createElement("defs",null,S.createElement("clipPath",{id:"animationClipPath-".concat(i)},l.renderClipRect(j))),S.createElement(U,{clipPath:"url(#animationClipPath-".concat(i,")")},l.renderAreaStatically(p,c,n,i)))})}},{key:"renderArea",value:function(n,i){var l=this.props,o=l.points,p=l.baseLine,c=l.isAnimationActive,d=this.state,m=d.prevPoints,u=d.prevBaseLine,f=d.totalLength;return c&&o&&o.length&&(!m&&f>0||!le(m,o)||!le(u,p))?this.renderAreaWithAnimation(n,i):this.renderAreaStatically(o,p,n,i)}},{key:"render",value:function(){var n,i=this.props,l=i.hide,o=i.dot,p=i.points,c=i.className,d=i.top,m=i.left,u=i.xAxis,f=i.yAxis,y=i.width,_=i.height,g=i.isAnimationActive,w=i.id;if(l||!p||!p.length)return null;var k=this.state.isAnimationFinished,j=p.length===1,A=Ve("recharts-area",c),P=u&&u.allowDataOverflow,T=f&&f.allowDataOverflow,E=P||T,M=ce(w)?this.id:w,R=(n=F(o))!==null&&n!==void 0?n:{r:3,strokeWidth:2},C=R.r,D=C===void 0?3:C,$=R.strokeWidth,N=$===void 0?2:$,Y=Ye(o)?o:{},ie=Y.clipDot,ae=ie===void 0?!0:ie,K=D*2+N;return S.createElement(U,{className:A},P||T?S.createElement("defs",null,S.createElement("clipPath",{id:"clipPath-".concat(M)},S.createElement("rect",{x:P?m:m-y/2,y:T?d:d-_/2,width:P?y:y*2,height:T?_:_*2})),!ae&&S.createElement("clipPath",{id:"clipPath-dots-".concat(M)},S.createElement("rect",{x:m-K/2,y:d-K/2,width:y+K,height:_+K}))):null,j?null:this.renderArea(E,M),(o||j)&&this.renderDots(E,ae,M),(!g||k)&&Ue.renderCallByParent(this.props,p))}}],[{key:"getDerivedStateFromProps",value:function(n,i){return n.animationId!==i.prevAnimationId?{prevAnimationId:n.animationId,curPoints:n.points,curBaseLine:n.baseLine,prevPoints:i.curPoints,prevBaseLine:i.curBaseLine}:n.points!==i.curPoints||n.baseLine!==i.curBaseLine?{curPoints:n.points,curBaseLine:n.baseLine}:null}}]),a}(b.PureComponent);ye=L;I(L,"displayName","Area");I(L,"defaultProps",{stroke:"#3182bd",fill:"#3182bd",fillOpacity:.6,xAxisId:0,yAxisId:0,legendType:"line",connectNulls:!1,points:[],dot:!1,activeDot:!0,hide:!1,isAnimationActive:!He.isSsr,animationBegin:0,animationDuration:1500,animationEasing:"ease"});I(L,"getBaseValue",function(e,t,a,r){var n=e.layout,i=e.baseValue,l=t.props.baseValue,o=l??i;if(G(o)&&typeof o=="number")return o;var p=n==="horizontal"?r:a,c=p.scale.domain();if(p.type==="number"){var d=Math.max(c[0],c[1]),m=Math.min(c[0],c[1]);return o==="dataMin"?m:o==="dataMax"||d<0?d:Math.max(Math.min(c[0],c[1]),0)}return o==="dataMin"?c[0]:o==="dataMax"?c[1]:c[0]});I(L,"getComposedData",function(e){var t=e.props,a=e.item,r=e.xAxis,n=e.yAxis,i=e.xAxisTicks,l=e.yAxisTicks,o=e.bandSize,p=e.dataKey,c=e.stackedData,d=e.dataStartIndex,m=e.displayedData,u=e.offset,f=t.layout,y=c&&c.length,_=ye.getBaseValue(t,a,r,n),g=f==="horizontal",w=!1,k=m.map(function(A,P){var T;y?T=c[d+P]:(T=pe(A,p),Array.isArray(T)?w=!0:T=[_,T]);var E=T[1]==null||y&&pe(A,p)==null;return g?{x:ue({axis:r,ticks:i,bandSize:o,entry:A,index:P}),y:E?null:n.scale(T[1]),value:T,payload:A}:{x:E?null:r.scale(T[1]),y:ue({axis:n,ticks:l,bandSize:o,entry:A,index:P}),value:T,payload:A}}),j;return y||w?j=k.map(function(A){var P=Array.isArray(A.value)?A.value[0]:null;return g?{x:A.x,y:P!=null&&A.y!=null?n.scale(P):null}:{x:P!=null?r.scale(P):null,y:A.y}}):j=g?n.scale(_):r.scale(_),B({points:k,baseLine:j,layout:f,isRange:w},u)});I(L,"renderDotItem",function(e,t){var a;return S.isValidElement(e)?a=S.cloneElement(e,t):re(e)?a=e(t):a=S.createElement(Ke,z({},t,{className:"recharts-area-dot"})),a});var xt=Xe({chartName:"AreaChart",GraphicalChild:L,axisComponents:[{axisType:"xAxis",AxisComp:qe},{axisType:"yAxis",AxisComp:Qe}],formatAxisMap:Je});const gt={tweetPlayingTime:0,tweetIsPlaying:!1,tweetDuration:1,selectedTweets:[],selectedTweet:""},O=Te(e=>({...gt,setTweetPlayingTime:t=>e({tweetPlayingTime:t}),setSelectedTweets:t=>e({selectedTweets:t}),setTweetIsPlaying:t=>e({tweetIsPlaying:t}),setTweetDuration:t=>e({tweetDuration:t}),setSelectedTweet:t=>e({selectedTweet:t}),fetchTweetData:async t=>{const{addNewNode:a}=he.getState(),{setPlayingNode:r}=Ne.getState();console.log(a,r);const n=await fe(t,[],[],"",!0,0,1,500);console.log(n)}})),q=3e4,be=({onPlaybackRestart:e})=>{const t=O(l=>l.tweetIsPlaying),a=O(l=>l.setTweetIsPlaying),r=()=>{},n=()=>{},i=b.useCallback(()=>{e&&e(),a(!t)},[t,a,e]);return s.jsxs(yt,{children:[s.jsx(bt,{onClick:r,children:s.jsx("img",{alt:"",src:"/RewindIcon.svg"})}),s.jsx(wt,{"data-testid":"play-pause-button",onClick:i,size:"small",children:t?s.jsx(Le,{"data-testid":"pause-icon"}):s.jsx(ze,{"data-testid":"play-icon"})}),s.jsx(vt,{onClick:n,children:s.jsx("img",{alt:"",src:"/ForwardIcon.svg"})})]})};be.displayName="Controls";const yt=h(v).attrs({direction:"row",align:"center",justify:"flex-start"})`
  width: 200px;
  height: 54px;
  background: ${x.BG1};
  border-radius: 40px;
  margin-right: 30px;
  color: ${x.white};
  font-size: 20px;
  padding: 12px;
  justify-content: space-between;
  box-sizing: border-box;
`,wt=h(Be)`
  && {
    font-size: 36px;
    padding: 2px;
    overflow: hidden;
  }
`,bt=h.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1px 0 0 1px;
  cursor: pointer;
  img {
    width: 20px;
    height: auto;
  }
`,vt=h.div`
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
  color: ${x.GRAY6};

  svg {
    margin-top: 3px;
    width: 24px;
    height: 24px;
  }

  &:hover {
    background-color: ${x.DROPDOWN_BG};
  }
`;h.button`
  margin-top: 4px;
  background: ${x.BG1};
  color: ${x.GRAY6};
  border: none;
  width: 8px;
  border-radius: 20px;
  padding: 8px 20px 8px 8px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s ease;
`;const ve=b.memo(({type:e,left:t,img:a})=>{var p,c;const r=xe(d=>d.normalizedSchemasByType),n=(p=r[e])==null?void 0:p.primary_color,i=(c=r[e])==null?void 0:c.icon,l=i?`/svg-icons/${i}.svg`:"",o={iconStart:a||l,color:n??x.THING};return s.jsx(At,{style:{left:`${t}%`},children:s.jsx(je,{...o,label:e})})});ve.displayName="Marker";const je=b.memo(({iconStart:e,color:t,label:a})=>s.jsx(jt,{color:t,children:e&&s.jsx("img",{alt:a,className:"badge__img",onError:console.log,src:e})}));je.displayName="Badge";const jt=h(v).attrs({direction:"row"})`
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
`,At=h.div`
  position: absolute;
  color: white;
  top: -6px;
  width: 12px;
  height: 12px;
  border-radius: 4px;
  background-color: ${x.white};
  transform: translateX(-50%);
  transform: translateX(-50%) translateY(-50%);
  top: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`,Ae=b.memo(({markers:e})=>{if(e.length===0)return null;const t=e.map(i=>i.start?new Date(i.start).getTime():0),a=Math.min(...t),n=Math.max(...t)-a;return s.jsx(s.Fragment,{children:e.map((i,l)=>{var m;const p=((i.start?new Date(i.start).getTime():0)-a)/n*100,c=(i==null?void 0:i.node_type)||"",d=((m=i==null?void 0:i.properties)==null?void 0:m.image_url)||"";return s.jsx(ve,{img:d,left:p,type:c},`${i.ref_id}_${l}`)})})});Ae.displayName="Markers";const Z=50,Pe=b.memo(({markers:e,height:t=56,showChart:a=!0,backgroundColor:r=x.primaryBlue})=>{const n=e.map(c=>c.start?new Date(c.start).getTime():0),i=Math.min(...n),o=Math.max(...n)-i,p=b.useMemo(()=>{if(e.length===0||o===0)return[];const c=o/Z,d=Array(Z).fill(0);return e.forEach(m=>{if(!m.start)return;const u=new Date(m.start).getTime(),f=Math.min(Z-1,Math.floor((u-i)/c));d[f]+=1}),d.map((m,u)=>({timestamp:i+c*u,value:m}))},[e,i,o]);return e.length===0?null:s.jsx(s.Fragment,{children:a&&p.length>0&&s.jsx("div",{children:s.jsx(Ze,{height:t,width:"100%",children:s.jsx(xt,{data:p,children:s.jsx(L,{dataKey:"value",fill:r,fillOpacity:.5,stroke:"transparent",type:"basis"})})})})})});Pe.displayName="ProgressChart";const Pt=({duration:e,markers:t,handleProgressChange:a,playingTime:r,tweetPlayingTime:n})=>{const i=se(n).format("MMM D"),l=se(n).format("h:mma"),o=Math.min(Math.max(r,0),100);return s.jsxs(_t,{children:[o?s.jsxs(Dt,{$progress:o,children:[s.jsx(Rt,{children:i}),s.jsx($t,{children:" - "}),s.jsx(Ot,{children:l})]}):null,s.jsx(Ct,{max:e,onChange:a,value:o,width:12}),s.jsx(St,{children:s.jsx(Ae,{markers:t})}),s.jsx(kt,{children:s.jsx(Pe,{markers:t})})]})},Tt=h(v)`
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  height: 96px;
  transform: translateY(-50%);
`,_t=h(v)`
  position: relative;
  flex: 1 1 100%;
  padding: 0;
  height: 100%;
  box-sizing: border-box;
  margin-right: 12px;

  &:hover {
    ${Tt} {
      display: block;
    }
  }
`,St=h(v)`
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
`,kt=h(v)`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 23px;
`,Dt=h.div`
  position: absolute;
  top: -40px;
  transform: translateX(-50%);
  background: rgba(230, 230, 230, 255);
  color: ${x.black};
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
`,Rt=h.span`
  display: inline-block;
  width: 45px;
  text-align: right;
`,$t=h.span`
  margin: 0 4px;
`,Ot=h.span`
  display: inline-block;
  width: 55px;
  text-align: left;
  font-variant-numeric: tabular-nums;
`,Ct=h(et)`
  && {
    z-index: 20;
    color: ${x.white};
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
      background-color: ${x.primaryBlue};
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
`,Et=({markers:e})=>{const t=O(g=>g.tweetPlayingTime),a=O(g=>g.setTweetPlayingTime),r=O(g=>g.setTweetIsPlaying),n=O(g=>g.setTweetDuration),i=O(g=>g.tweetDuration),l=O(g=>g.tweetIsPlaying),[o,p]=b.useState(0),[c,d]=b.useState(0),m=b.useRef(0);b.useEffect(()=>{const g=e.map(A=>A.start?new Date(A.start).getTime():0),w=Math.min(...g),k=Math.max(...g),j=k-w;p(w),d(k),n(j)},[e,n]);const u=b.useRef(null),f=b.useRef(null),y=b.useCallback((g,w)=>{const k=Array.isArray(w)?w[0]:w,j=o+k/100*i;a(j)},[a,o,i]);b.useEffect(()=>{if(l){t>=c&&(a(o),m.current=o),f.current=Date.now();const g=t?(t-o)/i:0,w=Date.now()-g*q;f.current=w;const k=()=>{const j=Date.now()-(f.current??Date.now());if(j<q){const A=j/q,P=o+A*i;a(P),m.current=P,u.current=requestAnimationFrame(k)}else a(c),r(!1),m.current=c,u.current&&cancelAnimationFrame(u.current)};return u.current=requestAnimationFrame(k),()=>{u.current&&cancelAnimationFrame(u.current)}}return m.current=t,()=>{u.current&&(cancelAnimationFrame(u.current),u.current=null)}},[l,o,c,a,i,r,t]);const _=b.useCallback(()=>{t>=c&&(a(o),m.current=o)},[t,c,o,a]);return s.jsxs(It,{children:[s.jsx(be,{onPlaybackRestart:_}),s.jsx(Pt,{duration:100,handleProgressChange:y,markers:e,playingTime:(t-o)/i*100,tweetPlayingTime:t})]})},It=h(v).attrs({direction:"row",align:"center",justify:"space-between"})`
  padding: 20px;
  background: ${x.BG2};
  height: 96px;
  border-radius: 8px;
  box-sizing: border-box;
  margin-right: 4px;
`,Mt={impression_count:{label:"Impressions",formatter:e=>e.toLocaleString()},like_count:{label:"Likes",formatter:e=>e},reply_count:{label:"Replies",formatter:e=>e},retweet_count:{label:"Retweets",formatter:e=>e},quote_count:{label:"Quotes",formatter:e=>e},bookmark_count:{label:"Bookmarks",formatter:e=>e},analytics_location:{label:"Location",formatter:e=>e||"Unknown"},analytics_gender:{label:"Gender",formatter:e=>e||"Unknown"},followers:{label:"Followers",formatter:e=>e.toLocaleString()}},Nt=e=>e==null?s.jsx(oe,{color:x.GRAY3}):e<=4?s.jsx(Ee,{color:"#ef4444"}):e>=7?s.jsx(Ie,{color:"#22c55e"}):s.jsx(oe,{color:x.GRAY3}),Bt=({node:e,handleAnalyzeClick:t})=>{var r,n,i;const a=((r=e==null?void 0:e.properties)==null?void 0:r.followers)!==void 0&&((n=e==null?void 0:e.properties)==null?void 0:n.impression_count)!==void 0&&e.properties.impression_count!==0?(e.properties.impression_count/e.properties.followers).toFixed(2):"N/A";return s.jsxs(Lt,{children:[s.jsxs(v,{align:"center",direction:"row",justify:"space-between",mb:16,children:[s.jsx(zt,{children:"Analytics"}),s.jsx(Wt,{onClick:l=>{l.stopPropagation(),t()},children:s.jsx(nt,{})})]}),s.jsxs(Ft,{children:[Object.entries(Mt).map(([l,{label:o,formatter:p}])=>{var c;return((c=e==null?void 0:e.properties)==null?void 0:c[l])!==void 0?s.jsxs(ee,{children:[s.jsx("span",{children:o}),s.jsx(te,{children:p(e.properties[l])})]},l):null}),s.jsxs(ee,{children:[s.jsx("span",{children:"Views-to-followers"}),s.jsx(te,{children:a})]}),s.jsxs(ee,{children:[s.jsx("span",{children:"Sentiment"}),s.jsx(te,{children:Nt((i=e==null?void 0:e.properties)==null?void 0:i.analytics_sentiment_score)})]})]})]})},Lt=h.div`
  background: ${x.ANALYTICS_CARD_BG};
  border-radius: 16px;
  padding: 16px 0;
  max-width: 350px;
`,zt=h.h2`
  color: ${x.white};
  font-size: 16px;
  font-weight: 500;
`,Ft=h.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px 24px;
`,ee=h.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${x.GRAY3};
  font-size: 14px;
  padding-right: 4px;
`,te=h.span`
  color: ${x.GRAY6};
  display: flex;
  align-items: center;
  svg {
    width: 14px;
    height: 14px;
    margin-left: 4px;
  }
`,Wt=h.a`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${x.white};
  font-size: 24px;
  flex-shrink: 0;
  color: ${x.SOURCE_TABLE_LINK};
  opacity: 1;
  cursor: pointer;
  &:hover {
    opacity: 0.6;
  }
`,Gt=({nodeId:e,handleAnalyzeClick:t})=>{const[a,r]=b.useState(null);b.useEffect(()=>{(async()=>{try{const u=await ke(e);r(u)}catch(u){console.error(u)}})()},[e]);const n=a?_e(a):null,{text:i,name:l,verified:o,image_url:p,twitter_handle:c}=n||{};let d="";return(n==null?void 0:n.node_type)==="Tweet"?d=`https://x.com/${c}/status/${n==null?void 0:n.tweet_id}`:(n==null?void 0:n.node_type)==="User"&&(d=`https://x.com/${c}`),s.jsx(Vt,{children:s.jsxs(Yt,{children:[s.jsx(Ut,{children:p?s.jsx(Se,{rounded:!0,size:58,src:p,type:"person"}):s.jsx(Ht,{children:s.jsx(it,{})})}),s.jsxs(Kt,{children:[s.jsxs(Xt,{children:[s.jsxs(qt,{children:[l&&s.jsx(Qt,{children:l}),!o&&s.jsx(er,{children:s.jsx(rt,{})})]}),s.jsx(tr,{href:d,target:"_blank",children:s.jsx(at,{})})]}),c&&s.jsxs(Jt,{children:["@",c]}),s.jsx(Zt,{children:i}),a&&s.jsx(Bt,{handleAnalyzeClick:t,node:a})]})]})})},Vt=h(v)`
  background: ${x.ANALYTICS_CARD_BG};
  border-radius: 16px;
  padding: 10px;
  width: 100%;
  max-width: 369px;
`,Yt=h(v)`
  display: grid;
  width: 100%;
  grid-template-columns: auto minmax(0, 1fr);
  align-items: start;
`,Ut=h(v)`
  margin-right: 10px;
`,Ht=h(v)`
  width: 58px;
  height: 58px;
  border-radius: 50%;
  background: ${x.GRAY3};
  align-items: center;
  justify-content: center;
  color: ${x.white};
  font-size: 24px;
`,Kt=h(v)`
  flex-direction: column;
  gap: 3px;
  margin-top: 12px;
`,Xt=h(v)`
  align-items: center;
  flex-direction: row;
  gap: 8px;
  width: 100%;
  justify-content: space-between;
`,qt=h(v)`
  align-items: center;
  flex-direction: row;
  gap: 8px;
  flex-shrink: 1;
  min-width: 0;
`,Qt=h(v)`
  font-family: 'Barlow';
  font-size: 15px;
  font-weight: 700;
  color: ${x.white};
  text-decoration: none;
  line-height: 1.2;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
`,Jt=h(v)`
  font-family: 'Barlow';
  font-size: 14px;
  font-weight: 400;
  color: ${x.white};
  opacity: 0.6;
  text-decoration: none;
  line-height: 1.2;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
  margin-top: 2px;
`,Zt=h(v)`
  color: ${x.white};
  font-family: Barlow;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  margin-top: 4px;
  white-space: normal;
`,er=h(v)`
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
    color: ${x.BG1_HOVER};
  }
`,tr=h.a`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${x.white};
  opacity: 0.6;
  font-size: 14px;
  flex-shrink: 0;
  &:hover {
    opacity: 1;
  }
  svg {
    width: 18px;
    height: 18px;
    color: ${x.white} !important;
    fill: ${x.white} !important;
  }
`,rr=b.lazy(()=>De(()=>import("./index-a3a8a904.js"),["assets/index-a3a8a904.js","assets/index-9fa590a9.js","assets/index-b4d03b7b.css","assets/index-5c1b1d29.js","assets/SourcesTableIcon-44bf4a14.js","assets/index-505b4cb4.js","assets/CheckIcon-85724847.js","assets/DeleteNodeIcon-b8dae403.js","assets/SoundIcon-eacfe81f.js","assets/SucessFeedBackIcon-116ef535.js","assets/ClipLoader-eb05e7e2.js","assets/TableRow-53aa548f.js"]).then(({TweetAnalyze:e})=>({default:e}))),nr=()=>{const e=O(p=>p.setSelectedTweet),t=O(p=>p.selectedTweet),{tweetId:a}=ge(),[r,n]=b.useState(""),{open:i}=Re("tweetAnalyze"),l=(a==null?void 0:a.split("&"))||[],o=p=>{i(),n(p)};return s.jsx(s.Fragment,{children:s.jsxs(ar,{align:"stretch",basis:"100%",grow:1,shrink:1,children:[l.length>1?s.jsx(ir,{onClick:()=>{o("summary")},children:"Summary Report"}):null,l.map(p=>s.jsx(sr,{className:t===p?"selected":"",onClick:()=>e(p),children:s.jsx(Gt,{handleAnalyzeClick:()=>{o(p)},nodeId:p})},p)),s.jsx(rr,{tweetId:r})]})})},ir=h.button`
  width: 100%;
  background: ${x.ANALYTICS_CARD_BG};
  color: ${x.white};
  padding: 16px 16px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  margin-top: 16px;
  cursor: pointer;
  transition: background-color 0.2s;
  border: 1px solid ${x.ANALYTICS_CARD_BG};
  &:hover {
    opacity: 0.6;
  }
`,ar=h(v)(({theme:e})=>({position:"relative",display:"flex",padding:"0 20px 0 20px",background:"transparent",width:"100%",height:"calc(100vh - 180px)",overflow:"auto",[e.breakpoints.up("sm")]:{width:tt,gap:"10px"}})),sr=h(v)`
  width: 100%;
  margin-bottom: 20px;
  cursor: pointer;
  border: 1px solid transparent;
  border-radius: 16px;

  &.selected {
    border: 1px solid ${x.white};
  }

  &:hover {
    border: 1px solid ${x.white};
  }

  ${({theme:e})=>e.breakpoints.up("sm")} {
    width: 390px;
    margin: 0 auto;
  }
`,or=e=>{const t=e.edges.filter(r=>{var n;return((n=r==null?void 0:r.properties)==null?void 0:n.start)&&typeof r.properties.start=="string"}).map(r=>({source:r.source,target:r.target,start:r.properties.start}));return e.nodes.filter(r=>e.edges.some(n=>n.source===r.ref_id||n.target===r.ref_id)).map(r=>{const n=t.find(i=>r.ref_id===i.source||r.ref_id===i.target);return{...r,start:(n==null?void 0:n.start)||0}}).filter(r=>r&&typeof r.start=="string"&&r.node_type!=="Clip"&&r.node_type!=="Episode"&&r.node_type!=="Show")},Nr=()=>{const e=he(u=>u.addNewNode),t=b.useRef(null),a=b.useRef(null),r=b.useRef(null),[n,i]=b.useState([]),{setSchemas:l}=xe(u=>u),o=O(u=>u.setSelectedTweets),p=O(u=>u.selectedTweet),c=O(u=>u.setSelectedTweet),d=$e(),{tweetId:m}=ge();return b.useEffect(()=>{(async()=>{try{const f=await Ce();l(f.schemas.filter(y=>!y.is_deleted))}catch(f){console.error("Error fetching schema:",f)}})()},[l]),b.useEffect(()=>{if(!p){const u=m==null?void 0:m.split("&")[0];u&&c(u)}},[p,m,c]),b.useEffect(()=>{p&&(async f=>{try{const y=await fe(f),_=y.nodes.find(w=>w.ref_id===p);_&&(o([_]),e({nodes:[_],edges:[]}));const g=or({nodes:y.nodes,edges:y.edges});i(g),r.current={nodes:y.nodes,edges:y.edges}}catch(y){d("/"),console.error(y)}})(p)},[e,d,p,o]),b.useEffect(()=>{const u=f=>{const{tweetPlayingTime:y,tweetDuration:_}=O.getState(),g=_/q*3e3;if(a.current!==null){if(f-a.current>1e3){if(r.current){const{nodes:k,edges:j}=r.current,A=y,[P,T]=j.reduce(([R,C],D)=>{var N;const $=typeof((N=D==null?void 0:D.properties)==null?void 0:N.start)=="string"?new Date(D.properties.start||0).getTime():0;return $!==0&&$<=A+g?R.push(D):C.push(D),[R,C]},[[],[]]),[E,M]=k.reduce(([R,C],D)=>(P.some($=>$.target===D.ref_id||$.source===D.ref_id)?R.push(D):C.push(D),[R,C]),[[],[]]);r.current={nodes:M,edges:T},(E.length||P.length)&&e({nodes:E,edges:P})}a.current=f}}else a.current=f;t.current=requestAnimationFrame(u)};return t.current=requestAnimationFrame(u),()=>{t.current&&cancelAnimationFrame(t.current)}},[r,e]),s.jsx(s.Fragment,{children:s.jsxs(cr,{children:[s.jsx(lr,{direction:"row",children:s.jsxs(s.Fragment,{children:[s.jsxs(v,{children:[s.jsx(Oe,{}),s.jsx(nr,{})]}),s.jsx(pr,{children:s.jsx(v,{basis:"100%",grow:1,shrink:1,children:s.jsx(Me,{})})})]})}),s.jsx(ur,{children:s.jsx(Et,{markers:n})})]})})},cr=h.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
`,lr=h(v)`
  flex: 1;
  overflow: hidden;
`,pr=h(v)`
  flex-basis: 100%;
  flex-shrink: 1;
  flex-grow: 1;
  padding: 16px 16px 16px 0;
`,ur=h(v)`
  padding: 16px 16px 16px 0;
  margin-left: 18px;
`;export{Nr as TweetMindset};
