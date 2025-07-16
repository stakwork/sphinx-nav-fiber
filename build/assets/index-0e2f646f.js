import{w as re,R as S,r as v,e as Ae,s as f,g as y,F as T,j as s,o as he,x as se,U as Te,y as Pe,A as _e,z as Se,_ as ke,q as fe,D as De,c as Re,i as $e,H as Oe,t as Ee,v as Ie}from"./index-a6495643.js";import{F as oe,a as Ce,b as Ne,U as Me}from"./index-69e4fc46.js";import{I as Le,a as Be,b as ze,c as We}from"./index-09ee6175.js";import{u as Fe,f as F,L as U,m as X,i as Y,C as J,A as Ge,a as G,b as ce,c as Ye,d as le,e as Ve,g as Ue,h as He,G as Ke,j as pe,k as ue,D as Xe,l as qe,X as Qe,Y as Je,n as Ze,R as et}from"./index-73d6b62b.js";import{S as tt,M as rt}from"./index-c53609e8.js";import{C as nt}from"./CheckIcon-9c46d108.js";import{S as it,P as at,L as st}from"./index-d13a8c86.js";import"./index-38cf33a0.js";import"./three.module-9722a9fc.js";import"./isPlainObject-71e7286f.js";import"./TextareaAutosize-aabdb1f7.js";import"./index-2215f5ee.js";import"./ClipLoader-c7022165.js";import"./clsx-72b6a77f.js";import"./string-a277709d.js";import"./index-7fdf2736.js";import"./Skeleton-4a6d7ac4.js";import"./index-7b28a756.js";import"./SoundIcon-76a6cf9d.js";import"./Stack-7710fe48.js";import"./FormControlLabel-7c02d0c7.js";import"./Typography-1fb5e588.js";import"./createSvgIcon-6a9ce21c.js";import"./SourcesTableIcon-eacce9e7.js";import"./DeleteNodeIcon-11258d39.js";import"./SucessFeedBackIcon-e011ba0d.js";var ot=["layout","type","stroke","connectNulls","isRange","ref"],xe;function V(e){"@babel/helpers - typeof";return V=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},V(e)}function ct(e,t){if(e==null)return{};var a=lt(e,t),r,n;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function lt(e,t){if(e==null)return{};var a={},r=Object.keys(e),n,i;for(i=0;i<r.length;i++)n=r[i],!(t.indexOf(n)>=0)&&(a[n]=e[n]);return a}function W(){return W=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},W.apply(this,arguments)}function de(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),a.push.apply(a,r)}return a}function B(e){for(var t=1;t<arguments.length;t++){var a=arguments[t]!=null?arguments[t]:{};t%2?de(Object(a),!0).forEach(function(r){M(e,r,a[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):de(Object(a)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))})}return e}function pt(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function me(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,ge(r.key),r)}}function ut(e,t,a){return t&&me(e.prototype,t),a&&me(e,a),Object.defineProperty(e,"prototype",{writable:!1}),e}function dt(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&ne(e,t)}function ne(e,t){return ne=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,n){return r.__proto__=n,r},ne(e,t)}function mt(e){var t=ft();return function(){var r=Q(e),n;if(t){var i=Q(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return ht(this,n)}}function ht(e,t){if(t&&(V(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return H(e)}function H(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function ft(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Q(e){return Q=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(a){return a.__proto__||Object.getPrototypeOf(a)},Q(e)}function M(e,t,a){return t=ge(t),t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function ge(e){var t=xt(e,"string");return V(t)==="symbol"?t:String(t)}function xt(e,t){if(V(e)!=="object"||e===null)return e;var a=e[Symbol.toPrimitive];if(a!==void 0){var r=a.call(e,t||"default");if(V(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var z=function(e){dt(a,e);var t=mt(a);function a(){var r;pt(this,a);for(var n=arguments.length,i=new Array(n),l=0;l<n;l++)i[l]=arguments[l];return r=t.call.apply(t,[this].concat(i)),M(H(r),"state",{isAnimationFinished:!0}),M(H(r),"id",Fe("recharts-area-")),M(H(r),"handleAnimationEnd",function(){var c=r.props.onAnimationEnd;r.setState({isAnimationFinished:!0}),re(c)&&c()}),M(H(r),"handleAnimationStart",function(){var c=r.props.onAnimationStart;r.setState({isAnimationFinished:!1}),re(c)&&c()}),r}return ut(a,[{key:"renderDots",value:function(n,i,l){var c=this.props.isAnimationActive,o=this.state.isAnimationFinished;if(c&&!o)return null;var p=this.props,u=p.dot,h=p.points,m=p.dataKey,d=F(this.props),j=F(u,!0),A=h.map(function(x,_){var g=B(B(B({key:"dot-".concat(_),r:3},d),j),{},{dataKey:m,cx:x.x,cy:x.y,index:_,value:x.value,payload:x.payload});return a.renderDotItem(u,g)}),k={clipPath:n?"url(#clipPath-".concat(i?"":"dots-").concat(l,")"):null};return S.createElement(U,W({className:"recharts-area-dots"},k),A)}},{key:"renderHorizontalRect",value:function(n){var i=this.props,l=i.baseLine,c=i.points,o=i.strokeWidth,p=c[0].x,u=c[c.length-1].x,h=n*Math.abs(p-u),m=X(c.map(function(d){return d.y||0}));return Y(l)&&typeof l=="number"?m=Math.max(l,m):l&&Array.isArray(l)&&l.length&&(m=Math.max(X(l.map(function(d){return d.y||0})),m)),Y(m)?S.createElement("rect",{x:p<u?p:p-h,y:0,width:h,height:Math.floor(m+(o?parseInt("".concat(o),10):1))}):null}},{key:"renderVerticalRect",value:function(n){var i=this.props,l=i.baseLine,c=i.points,o=i.strokeWidth,p=c[0].y,u=c[c.length-1].y,h=n*Math.abs(p-u),m=X(c.map(function(d){return d.x||0}));return Y(l)&&typeof l=="number"?m=Math.max(l,m):l&&Array.isArray(l)&&l.length&&(m=Math.max(X(l.map(function(d){return d.x||0})),m)),Y(m)?S.createElement("rect",{x:0,y:p<u?p:p-h,width:m+(o?parseInt("".concat(o),10):1),height:Math.floor(h)}):null}},{key:"renderClipRect",value:function(n){var i=this.props.layout;return i==="vertical"?this.renderVerticalRect(n):this.renderHorizontalRect(n)}},{key:"renderAreaStatically",value:function(n,i,l,c){var o=this.props,p=o.layout,u=o.type,h=o.stroke,m=o.connectNulls,d=o.isRange;o.ref;var j=ct(o,ot);return S.createElement(U,{clipPath:l?"url(#clipPath-".concat(c,")"):null},S.createElement(J,W({},F(j,!0),{points:n,connectNulls:m,type:u,baseLine:i,layout:p,stroke:"none",className:"recharts-area-area"})),h!=="none"&&S.createElement(J,W({},F(this.props),{className:"recharts-area-curve",layout:p,type:u,connectNulls:m,fill:"none",points:n})),h!=="none"&&d&&S.createElement(J,W({},F(this.props),{className:"recharts-area-curve",layout:p,type:u,connectNulls:m,fill:"none",points:i})))}},{key:"renderAreaWithAnimation",value:function(n,i){var l=this,c=this.props,o=c.points,p=c.baseLine,u=c.isAnimationActive,h=c.animationBegin,m=c.animationDuration,d=c.animationEasing,j=c.animationId,A=this.state,k=A.prevPoints,x=A.prevBaseLine;return S.createElement(Ge,{begin:h,duration:m,isActive:u,easing:d,from:{t:0},to:{t:1},key:"area-".concat(j),onAnimationEnd:this.handleAnimationEnd,onAnimationStart:this.handleAnimationStart},function(_){var g=_.t;if(k){var b=k.length/o.length,P=o.map(function(R,O){var E=Math.floor(O*b);if(k[E]){var D=k[E],N=G(D.x,R.x),L=G(D.y,R.y);return B(B({},R),{},{x:N(g),y:L(g)})}return R}),w;if(Y(p)&&typeof p=="number"){var I=G(x,p);w=I(g)}else if(ce(p)||Ye(p)){var C=G(x,0);w=C(g)}else w=p.map(function(R,O){var E=Math.floor(O*b);if(x[E]){var D=x[E],N=G(D.x,R.x),L=G(D.y,R.y);return B(B({},R),{},{x:N(g),y:L(g)})}return R});return l.renderAreaStatically(P,w,n,i)}return S.createElement(U,null,S.createElement("defs",null,S.createElement("clipPath",{id:"animationClipPath-".concat(i)},l.renderClipRect(g))),S.createElement(U,{clipPath:"url(#animationClipPath-".concat(i,")")},l.renderAreaStatically(o,p,n,i)))})}},{key:"renderArea",value:function(n,i){var l=this.props,c=l.points,o=l.baseLine,p=l.isAnimationActive,u=this.state,h=u.prevPoints,m=u.prevBaseLine,d=u.totalLength;return p&&c&&c.length&&(!h&&d>0||!le(h,c)||!le(m,o))?this.renderAreaWithAnimation(n,i):this.renderAreaStatically(c,o,n,i)}},{key:"render",value:function(){var n,i=this.props,l=i.hide,c=i.dot,o=i.points,p=i.className,u=i.top,h=i.left,m=i.xAxis,d=i.yAxis,j=i.width,A=i.height,k=i.isAnimationActive,x=i.id;if(l||!o||!o.length)return null;var _=this.state.isAnimationFinished,g=o.length===1,b=Ve("recharts-area",p),P=m&&m.allowDataOverflow,w=d&&d.allowDataOverflow,I=P||w,C=ce(x)?this.id:x,R=(n=F(c))!==null&&n!==void 0?n:{r:3,strokeWidth:2},O=R.r,E=O===void 0?3:O,D=R.strokeWidth,N=D===void 0?2:D,L=Ue(c)?c:{},ie=L.clipDot,ae=ie===void 0?!0:ie,K=E*2+N;return S.createElement(U,{className:b},P||w?S.createElement("defs",null,S.createElement("clipPath",{id:"clipPath-".concat(C)},S.createElement("rect",{x:P?h:h-j/2,y:w?u:u-A/2,width:P?j:j*2,height:w?A:A*2})),!ae&&S.createElement("clipPath",{id:"clipPath-dots-".concat(C)},S.createElement("rect",{x:h-K/2,y:u-K/2,width:j+K,height:A+K}))):null,g?null:this.renderArea(I,C),(c||g)&&this.renderDots(I,ae,C),(!k||_)&&He.renderCallByParent(this.props,o))}}],[{key:"getDerivedStateFromProps",value:function(n,i){return n.animationId!==i.prevAnimationId?{prevAnimationId:n.animationId,curPoints:n.points,curBaseLine:n.baseLine,prevPoints:i.curPoints,prevBaseLine:i.curBaseLine}:n.points!==i.curPoints||n.baseLine!==i.curBaseLine?{curPoints:n.points,curBaseLine:n.baseLine}:null}}]),a}(v.PureComponent);xe=z;M(z,"displayName","Area");M(z,"defaultProps",{stroke:"#3182bd",fill:"#3182bd",fillOpacity:.6,xAxisId:0,yAxisId:0,legendType:"line",connectNulls:!1,points:[],dot:!1,activeDot:!0,hide:!1,isAnimationActive:!Ke.isSsr,animationBegin:0,animationDuration:1500,animationEasing:"ease"});M(z,"getBaseValue",function(e,t,a,r){var n=e.layout,i=e.baseValue,l=t.props.baseValue,c=l??i;if(Y(c)&&typeof c=="number")return c;var o=n==="horizontal"?r:a,p=o.scale.domain();if(o.type==="number"){var u=Math.max(p[0],p[1]),h=Math.min(p[0],p[1]);return c==="dataMin"?h:c==="dataMax"||u<0?u:Math.max(Math.min(p[0],p[1]),0)}return c==="dataMin"?p[0]:c==="dataMax"?p[1]:p[0]});M(z,"getComposedData",function(e){var t=e.props,a=e.item,r=e.xAxis,n=e.yAxis,i=e.xAxisTicks,l=e.yAxisTicks,c=e.bandSize,o=e.dataKey,p=e.stackedData,u=e.dataStartIndex,h=e.displayedData,m=e.offset,d=t.layout,j=p&&p.length,A=xe.getBaseValue(t,a,r,n),k=d==="horizontal",x=!1,_=h.map(function(b,P){var w;j?w=p[u+P]:(w=pe(b,o),Array.isArray(w)?x=!0:w=[A,w]);var I=w[1]==null||j&&pe(b,o)==null;return k?{x:ue({axis:r,ticks:i,bandSize:c,entry:b,index:P}),y:I?null:n.scale(w[1]),value:w,payload:b}:{x:I?null:r.scale(w[1]),y:ue({axis:n,ticks:l,bandSize:c,entry:b,index:P}),value:w,payload:b}}),g;return j||x?g=_.map(function(b){var P=Array.isArray(b.value)?b.value[0]:null;return k?{x:b.x,y:P!=null&&b.y!=null?n.scale(P):null}:{x:P!=null?r.scale(P):null,y:b.y}}):g=k?n.scale(A):r.scale(A),B({points:_,baseLine:g,layout:d,isRange:x},m)});M(z,"renderDotItem",function(e,t){var a;return S.isValidElement(e)?a=S.cloneElement(e,t):re(e)?a=e(t):a=S.createElement(Xe,W({},t,{className:"recharts-area-dot"})),a});var gt=qe({chartName:"AreaChart",GraphicalChild:z,axisComponents:[{axisType:"xAxis",AxisComp:Qe},{axisType:"yAxis",AxisComp:Je}],formatAxisMap:Ze});const yt={tweetPlayingTime:0,tweetIsPlaying:!1,tweetDuration:1,selectedTweets:[],selectedTweet:""},$=Ae(e=>({...yt,setTweetPlayingTime:t=>e({tweetPlayingTime:t}),setSelectedTweets:t=>e({selectedTweets:t}),setTweetIsPlaying:t=>e({tweetIsPlaying:t}),setTweetDuration:t=>e({tweetDuration:t}),setSelectedTweet:t=>e({selectedTweet:t}),fetchTweetData:async t=>t})),q=3e4,ye=({onPlaybackRestart:e})=>{const t=$(l=>l.tweetIsPlaying),a=$(l=>l.setTweetIsPlaying),r=()=>{},n=()=>{},i=v.useCallback(()=>{e&&e(),a(!t)},[t,a,e]);return s.jsxs(wt,{children:[s.jsx(vt,{onClick:r,children:s.jsx("img",{alt:"",src:"/RewindIcon.svg"})}),s.jsx(bt,{"data-testid":"play-pause-button",onClick:i,size:"small",children:t?s.jsx(Be,{"data-testid":"pause-icon"}):s.jsx(ze,{"data-testid":"play-icon"})}),s.jsx(jt,{onClick:n,children:s.jsx("img",{alt:"",src:"/ForwardIcon.svg"})})]})};ye.displayName="Controls";const wt=f(T).attrs({direction:"row",align:"center",justify:"flex-start"})`
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
`,bt=f(Le)`
  && {
    font-size: 36px;
    padding: 2px;
    overflow: hidden;
  }
`,vt=f.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1px 0 0 1px;
  cursor: pointer;
  img {
    width: 20px;
    height: auto;
  }
`,jt=f.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  img {
    width: 24px;
    height: auto;
  }
`;f.div`
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
`;f.button`
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
`;const we=v.memo(({type:e,left:t,img:a})=>{var o,p;const r=he(u=>u.normalizedSchemasByType),n=(o=r[e])==null?void 0:o.primary_color,i=(p=r[e])==null?void 0:p.icon,l=i?`/svg-icons/${i}.svg`:"",c={iconStart:a||l,color:n??y.THING};return s.jsx(Tt,{style:{left:`${t}%`},children:s.jsx(be,{...c,label:e})})});we.displayName="Marker";const be=v.memo(({iconStart:e,color:t,label:a})=>s.jsx(At,{color:t,children:e&&s.jsx("img",{alt:a,className:"badge__img",onError:console.log,src:e})}));be.displayName="Badge";const At=f(T).attrs({direction:"row"})`
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
`,Tt=f.div`
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
`,ve=v.memo(({markers:e})=>{if(e.length===0)return null;const t=e.map(i=>i.start?new Date(i.start).getTime():0),a=Math.min(...t),n=Math.max(...t)-a;return s.jsx(s.Fragment,{children:e.map((i,l)=>{var h;const o=((i.start?new Date(i.start).getTime():0)-a)/n*100,p=(i==null?void 0:i.node_type)||"",u=((h=i==null?void 0:i.properties)==null?void 0:h.image_url)||"";return s.jsx(we,{img:u,left:o,type:p},`${i.ref_id}_${l}`)})})});ve.displayName="Markers";const Z=50,je=v.memo(({markers:e,height:t=56,showChart:a=!0,backgroundColor:r=y.primaryBlue})=>{const n=e.map(p=>p.start?new Date(p.start).getTime():0),i=Math.min(...n),c=Math.max(...n)-i,o=v.useMemo(()=>{if(e.length===0||c===0)return[];const p=c/Z,u=Array(Z).fill(0);return e.forEach(h=>{if(!h.start)return;const m=new Date(h.start).getTime(),d=Math.min(Z-1,Math.floor((m-i)/p));u[d]+=1}),u.map((h,m)=>({timestamp:i+p*m,value:h}))},[e,i,c]);return e.length===0?null:s.jsx(s.Fragment,{children:a&&o.length>0&&s.jsx("div",{children:s.jsx(et,{height:t,width:"100%",children:s.jsx(gt,{data:o,children:s.jsx(z,{dataKey:"value",fill:r,fillOpacity:.5,stroke:"transparent",type:"basis"})})})})})});je.displayName="ProgressChart";const Pt=({duration:e,markers:t,handleProgressChange:a,playingTime:r,tweetPlayingTime:n})=>{const i=se(n).format("MMM D"),l=se(n).format("h:mma"),c=Math.min(Math.max(r,0),100);return s.jsxs(St,{children:[c?s.jsxs(Rt,{$progress:c,children:[s.jsx($t,{children:i}),s.jsx(Ot,{children:" - "}),s.jsx(Et,{children:l})]}):null,s.jsx(It,{max:e,onChange:a,value:c,width:12}),s.jsx(kt,{children:s.jsx(ve,{markers:t})}),s.jsx(Dt,{children:s.jsx(je,{markers:t})})]})},_t=f(T)`
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  height: 96px;
  transform: translateY(-50%);
`,St=f(T)`
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
`,kt=f(T)`
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
`,Dt=f(T)`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 23px;
`,Rt=f.div`
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
`,$t=f.span`
  display: inline-block;
  width: 45px;
  text-align: right;
`,Ot=f.span`
  margin: 0 4px;
`,Et=f.span`
  display: inline-block;
  width: 55px;
  text-align: left;
  font-variant-numeric: tabular-nums;
`,It=f(tt)`
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
`,Ct=({markers:e})=>{const t=$(x=>x.tweetPlayingTime),a=$(x=>x.setTweetPlayingTime),r=$(x=>x.setTweetIsPlaying),n=$(x=>x.setTweetDuration),i=$(x=>x.selectedTweets),l=$(x=>x.tweetDuration),c=$(x=>x.tweetIsPlaying),[o,p]=v.useState(0),[u,h]=v.useState(0),m=v.useRef(0);v.useEffect(()=>{var P,w,I,C;const x=e.map(R=>R.start?new Date(R.start).getTime():0);if((w=(P=i[0])==null?void 0:P.properties)!=null&&w.time_series){const R=((C=(I=i[0])==null?void 0:I.properties)==null?void 0:C.time_series).split(",").map(O=>Number(O)*1e3);x.push(...R)}const _=Math.min(...x),g=Math.max(...x),b=g-_;p(_),h(g),n(b)},[e,n,i]);const d=v.useRef(null),j=v.useRef(null),A=v.useCallback((x,_)=>{const g=Array.isArray(_)?_[0]:_,b=o+g/100*l;a(b)},[a,o,l]);v.useEffect(()=>{if(c){t>=u&&(a(o),m.current=o),j.current=Date.now();const x=t?(t-o)/l:0,_=Date.now()-x*q;j.current=_;const g=()=>{const b=Date.now()-(j.current??Date.now());if(b<q){const P=b/q,w=o+P*l;a(w),m.current=w,d.current=requestAnimationFrame(g)}else a(u),r(!1),m.current=u,d.current&&cancelAnimationFrame(d.current)};return d.current=requestAnimationFrame(g),()=>{d.current&&cancelAnimationFrame(d.current)}}return m.current=t,()=>{d.current&&(cancelAnimationFrame(d.current),d.current=null)}},[c,o,u,a,l,r,t]);const k=v.useCallback(()=>{t>=u&&(a(o),m.current=o)},[t,u,o,a]);return s.jsxs(Nt,{children:[s.jsx(ye,{onPlaybackRestart:k}),s.jsx(Pt,{duration:100,handleProgressChange:A,markers:e,playingTime:(t-o)/l*100,tweetPlayingTime:t})]})},Nt=f(T).attrs({direction:"row",align:"center",justify:"space-between"})`
  padding: 20px;
  background: ${y.BG2};
  height: 96px;
  border-radius: 8px;
  box-sizing: border-box;
  margin-right: 4px;
`,Mt={impression_count:{label:"Impressions",formatter:(e,t)=>e.toLocaleString().split(",").at(t)},like_count:{label:"Likes",formatter:(e,t)=>e.toLocaleString().split(",").at(t)},reply_count:{label:"Replies",formatter:(e,t)=>e.toLocaleString().split(",").at(t)},retweet_count:{label:"Retweets",formatter:(e,t)=>e.toLocaleString().split(",").at(t)},quote_count:{label:"Quotes",formatter:(e,t)=>e.toLocaleString().split(",").at(t)},bookmark_count:{label:"Bookmarks",formatter:(e,t)=>e.toLocaleString().split(",").at(t)},analytics_location:{label:"Location",formatter:e=>e||"Unknown"},analytics_gender:{label:"Gender",formatter:e=>e||"Unknown"},followers:{label:"Followers",formatter:(e,t)=>e.toLocaleString().split(",").at(t)}},Lt=e=>e==null?s.jsx(oe,{color:y.GRAY3}):e<=4?s.jsx(Ce,{color:"#ef4444"}):e>=7?s.jsx(Ne,{color:"#22c55e"}):s.jsx(oe,{color:y.GRAY3}),Bt=({node:e,handleAnalyzeClick:t})=>{var l,c,o,p;const a=((l=e==null?void 0:e.properties)==null?void 0:l.followers)!==void 0&&((c=e==null?void 0:e.properties)==null?void 0:c.impression_count)!==void 0&&e.properties.impression_count!==0?(e.properties.impression_count/e.properties.followers).toFixed(2):"N/A",r=$(u=>u.tweetPlayingTime),n=(o=e==null?void 0:e.properties)!=null&&o.time_series?(e==null?void 0:e.properties.time_series).split(",").map(Number):[];let i=-1;if(r){const u=r>1e12?r/1e3:r;for(let h=0;h<n.length&&u>=n[h];h+=1)i=h}return s.jsxs(zt,{children:[s.jsxs(T,{align:"center",direction:"row",justify:"space-between",mb:16,children:[s.jsx(Wt,{children:"Analytics"}),s.jsx(Yt,{onClick:u=>{u.stopPropagation(),t()},children:s.jsx(it,{})})]}),s.jsxs(Ft,{children:[Object.entries(Mt).map(([u,{label:h,formatter:m}])=>{var d;return((d=e==null?void 0:e.properties)==null?void 0:d[u])!==void 0?s.jsxs(ee,{children:[s.jsx("span",{children:h}),s.jsx(te,{children:m(e.properties[u],i)},i)]},u):null}),s.jsxs(ee,{children:[s.jsx("span",{children:"Views-to-followers"}),s.jsx(te,{children:a})]}),s.jsxs(ee,{children:[s.jsx("span",{children:"Sentiment"}),s.jsx(te,{children:Lt((p=e==null?void 0:e.properties)==null?void 0:p.analytics_sentiment_score)})]})]})]})},zt=f.div`
  background: ${y.ANALYTICS_CARD_BG};
  border-radius: 16px;
  padding: 16px 0;
  max-width: 350px;
`,Wt=f.h2`
  color: ${y.white};
  font-size: 16px;
  font-weight: 500;
`,Ft=f.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px 24px;
`,ee=f.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${y.GRAY3};
  font-size: 14px;
  padding-right: 4px;
`,Gt=Te`
  0% {
    opacity: 0;
    transform: translateY(6px) scale(0.95);
  }
  60% {
    transform: translateY(-2px) scale(1.02);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`,te=f.span`
  color: ${y.GRAY6};
  display: flex;
  align-items: center;
  animation: ${Gt} 0.3s ease;
  svg {
    width: 14px;
    height: 14px;
    margin-left: 4px;
  }
`,Yt=f.a`
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
`,Vt=({nodeId:e,handleAnalyzeClick:t})=>{const[a,r]=v.useState(null);v.useEffect(()=>{(async()=>{try{const m=await Se(e);r(m)}catch(m){console.error(m)}})()},[e]);const n=a?Pe(a):null,{text:i,name:l,verified:c,image_url:o,twitter_handle:p}=n||{};let u="";return(n==null?void 0:n.node_type)==="Tweet"?u=`https://x.com/${p}/status/${n==null?void 0:n.tweet_id}`:(n==null?void 0:n.node_type)==="User"&&(u=`https://x.com/${p}`),s.jsx(Ut,{children:s.jsxs(Ht,{children:[s.jsx(Kt,{children:o?s.jsx(_e,{rounded:!0,size:58,src:o,type:"person"}):s.jsx(Xt,{children:s.jsx(at,{})})}),s.jsxs(qt,{children:[s.jsxs(Qt,{children:[s.jsxs(Jt,{children:[l&&s.jsx(Zt,{children:l}),!c&&s.jsx(rr,{children:s.jsx(nt,{})})]}),s.jsx(nr,{href:u,target:"_blank",children:s.jsx(st,{})})]}),p&&s.jsxs(er,{children:["@",p]}),s.jsx(tr,{children:i}),a&&s.jsx(Bt,{handleAnalyzeClick:t,node:a})]})]})})},Ut=f(T)`
  background: ${y.ANALYTICS_CARD_BG};
  border-radius: 16px;
  padding: 10px;
  width: 100%;
  max-width: 369px;
`,Ht=f(T)`
  display: grid;
  width: 100%;
  grid-template-columns: auto minmax(0, 1fr);
  align-items: start;
`,Kt=f(T)`
  margin-right: 10px;
`,Xt=f(T)`
  width: 58px;
  height: 58px;
  border-radius: 50%;
  background: ${y.GRAY3};
  align-items: center;
  justify-content: center;
  color: ${y.white};
  font-size: 24px;
`,qt=f(T)`
  flex-direction: column;
  gap: 3px;
  margin-top: 12px;
`,Qt=f(T)`
  align-items: center;
  flex-direction: row;
  gap: 8px;
  width: 100%;
  justify-content: space-between;
`,Jt=f(T)`
  align-items: center;
  flex-direction: row;
  gap: 8px;
  flex-shrink: 1;
  min-width: 0;
`,Zt=f(T)`
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
`,er=f(T)`
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
`,tr=f(T)`
  color: ${y.white};
  font-family: Barlow;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  margin-top: 4px;
  white-space: normal;
`,rr=f(T)`
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
`,nr=f.a`
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
`,ir=v.lazy(()=>ke(()=>import("./index-309a6bb3.js"),["assets/index-309a6bb3.js","assets/index-a6495643.js","assets/index-b4d03b7b.css","assets/index-d13a8c86.js","assets/SourcesTableIcon-eacce9e7.js","assets/index-09ee6175.js","assets/CheckIcon-9c46d108.js","assets/DeleteNodeIcon-11258d39.js","assets/SoundIcon-76a6cf9d.js","assets/SucessFeedBackIcon-e011ba0d.js","assets/ClipLoader-c7022165.js","assets/TableRow-37cf6610.js"]).then(({TweetAnalyze:e})=>({default:e}))),ar=()=>{const e=$(o=>o.setSelectedTweet),t=$(o=>o.selectedTweet),{tweetId:a}=fe(),[r,n]=v.useState(""),{open:i}=De("tweetAnalyze"),l=(a==null?void 0:a.split("&"))||[],c=o=>{i(),n(o)};return s.jsxs(or,{align:"stretch",basis:"100%",grow:1,shrink:1,children:[l.length>1?s.jsx(sr,{onClick:()=>{c("summary")},children:"Summary Report"}):null,l.map(o=>s.jsx(cr,{className:t===o?"selected":"",onClick:()=>e(o),children:s.jsx(Vt,{handleAnalyzeClick:()=>{c(o)},nodeId:o})},o)),s.jsx(ir,{tweetId:r})]})},sr=f.button`
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
`,or=f(T)(({theme:e})=>({position:"relative",display:"flex",padding:"0 20px 0 20px",background:"transparent",width:"100%",height:"calc(100vh - 180px)",overflow:"auto",[e.breakpoints.up("sm")]:{width:rt,gap:"10px"}})),cr=f(T)`
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
`,lr=[{ref_id:"positive",name:"Positive"},{ref_id:"negative",name:"Negative"},{ref_id:"neutral",name:"Neutral"}],pr=e=>{const t=e.edges.filter(r=>{var n;return((n=r==null?void 0:r.properties)==null?void 0:n.start)&&typeof r.properties.start=="string"}).map(r=>({source:r.source,target:r.target,start:r.properties.start}));return e.nodes.filter(r=>e.edges.some(n=>n.source===r.ref_id||n.target===r.ref_id)).map(r=>{const n=t.find(i=>r.ref_id===i.source||r.ref_id===i.target);return{...r,start:(n==null?void 0:n.start)||0}}).filter(r=>r&&typeof r.start=="string"&&r.node_type!=="Clip"&&r.node_type!=="Episode"&&r.node_type!=="Show")},Wr=()=>{const e=Re(d=>d.addNewNode),t=v.useRef(null),a=v.useRef(null),r=v.useRef(null),[n,i]=v.useState([]),{setSchemas:l}=he(d=>d),c=$(d=>d.setSelectedTweets),o=$(d=>d.selectedTweet),p=$(d=>d.setSelectedTweet),u=We(d=>d.setNeighbourhoods),h=$e(),{tweetId:m}=fe();return v.useEffect(()=>{(async()=>{try{const j=await Ee();l(j.schemas.filter(A=>!A.is_deleted))}catch(j){console.error("Error fetching schema:",j)}})()},[l]),v.useEffect(()=>{u(lr)},[u]),v.useEffect(()=>{if(!o){const d=m==null?void 0:m.split("&")[0];d&&p(d)}},[o,m,p]),v.useEffect(()=>{o&&(async j=>{try{const A=await Ie(j),k=A.nodes.find(g=>g.ref_id===o);k&&(c([k]),e({nodes:[k],edges:[]}));const x=pr({nodes:A.nodes,edges:A.edges});i(x);const _=A.nodes.map(g=>{var b,P,w;return g.node_type==="Tweet"&&((b=g.properties)!=null&&b.sentiment)?((P=g.properties)==null?void 0:P.sentiment)<4?{...g,neighbourHood:"negative"}:((w=g.properties)==null?void 0:w.sentiment)>7?{...g,neighbourHood:"positive"}:{...g,neighbourHood:"neutral"}:g});r.current={nodes:_,edges:A.edges}}catch(A){h("/"),console.error(A)}})(o)},[e,h,o,c]),v.useEffect(()=>{const d=j=>{const{tweetPlayingTime:A,tweetDuration:k}=$.getState(),x=k/q*3e3;if(a.current!==null){if(j-a.current>1e3){if(r.current){const{nodes:g,edges:b}=r.current,P=A,[w,I]=b.reduce(([O,E],D)=>{var L;const N=typeof((L=D==null?void 0:D.properties)==null?void 0:L.start)=="string"?new Date(D.properties.start||0).getTime():0;return N!==0&&N<=P+x?O.push(D):E.push(D),[O,E]},[[],[]]),[C,R]=g.reduce(([O,E],D)=>(w.some(N=>N.target===D.ref_id||N.source===D.ref_id)?O.push(D):E.push(D),[O,E]),[[],[]]);r.current={nodes:R,edges:I},(C.length||w.length)&&e({nodes:C,edges:w})}a.current=j}}else a.current=j;t.current=requestAnimationFrame(d)};return t.current=requestAnimationFrame(d),()=>{t.current&&cancelAnimationFrame(t.current)}},[r,e]),s.jsxs(ur,{children:[s.jsx(dr,{direction:"row",children:s.jsxs(s.Fragment,{children:[s.jsxs(T,{children:[s.jsx(Oe,{}),s.jsx(ar,{})]}),s.jsx(mr,{children:s.jsx(T,{basis:"100%",grow:1,shrink:1,children:s.jsx(Me,{})})})]})}),s.jsx(hr,{children:s.jsx(Ct,{markers:n})})]})},ur=f.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
`,dr=f(T)`
  flex: 1;
  overflow: hidden;
`,mr=f(T)`
  flex-basis: 100%;
  flex-shrink: 1;
  flex-grow: 1;
  padding: 16px 16px 16px 0;
`,hr=f(T)`
  padding: 16px 16px 16px 0;
  margin-left: 18px;
`;export{Wr as TweetMindset};
