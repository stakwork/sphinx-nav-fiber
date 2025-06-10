import{w as re,R as S,r as v,e as Pe,c as he,v as fe,s as f,g as y,F as T,j as s,o as xe,x as se,U as _e,y as Se,A as ke,z as De,_ as Re,q as ge,D as $e,i as Oe,H as Ee,t as Ie}from"./index-59a682e9.js";import{F as oe,a as Ne,b as Ce,U as Me}from"./index-c483e239.js";import{u as Le,I as Be,a as ze,b as We,c as Fe}from"./index-5721889e.js";import{u as Ge,f as F,L as U,m as X,i as Y,C as J,A as Ye,a as G,b as ce,c as Ve,d as le,e as Ue,g as He,h as Ke,G as Xe,j as pe,k as ue,D as qe,l as Qe,X as Je,Y as Ze,n as et,R as tt}from"./index-7fe89f36.js";import{S as rt,M as nt}from"./index-7f49a6c7.js";import{C as it}from"./CheckIcon-b13a8e38.js";import{S as at,P as st,L as ot}from"./index-e82db91d.js";import"./index-3b47b10c.js";import"./three.module-9722a9fc.js";import"./isPlainObject-8a8197e0.js";import"./TextareaAutosize-8a77c498.js";import"./index-f214e675.js";import"./ClipLoader-16d3ade8.js";import"./clsx-e135f8b2.js";import"./string-a277709d.js";import"./index-2bbd0b61.js";import"./Skeleton-57980856.js";import"./index-4bd21014.js";import"./SoundIcon-313ef194.js";import"./Stack-c00e2122.js";import"./FormControlLabel-31a6b5f3.js";import"./Typography-7d11222d.js";import"./createSvgIcon-a17b63c2.js";import"./SourcesTableIcon-a9fc3bff.js";import"./DeleteNodeIcon-8dd9e418.js";import"./SucessFeedBackIcon-27cfd902.js";var ct=["layout","type","stroke","connectNulls","isRange","ref"],ye;function V(e){"@babel/helpers - typeof";return V=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},V(e)}function lt(e,t){if(e==null)return{};var a=pt(e,t),r,n;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function pt(e,t){if(e==null)return{};var a={},r=Object.keys(e),n,i;for(i=0;i<r.length;i++)n=r[i],!(t.indexOf(n)>=0)&&(a[n]=e[n]);return a}function W(){return W=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},W.apply(this,arguments)}function de(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),a.push.apply(a,r)}return a}function B(e){for(var t=1;t<arguments.length;t++){var a=arguments[t]!=null?arguments[t]:{};t%2?de(Object(a),!0).forEach(function(r){M(e,r,a[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):de(Object(a)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))})}return e}function ut(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function me(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,we(r.key),r)}}function dt(e,t,a){return t&&me(e.prototype,t),a&&me(e,a),Object.defineProperty(e,"prototype",{writable:!1}),e}function mt(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&ne(e,t)}function ne(e,t){return ne=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,n){return r.__proto__=n,r},ne(e,t)}function ht(e){var t=xt();return function(){var r=Q(e),n;if(t){var i=Q(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return ft(this,n)}}function ft(e,t){if(t&&(V(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return H(e)}function H(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function xt(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Q(e){return Q=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(a){return a.__proto__||Object.getPrototypeOf(a)},Q(e)}function M(e,t,a){return t=we(t),t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function we(e){var t=gt(e,"string");return V(t)==="symbol"?t:String(t)}function gt(e,t){if(V(e)!=="object"||e===null)return e;var a=e[Symbol.toPrimitive];if(a!==void 0){var r=a.call(e,t||"default");if(V(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var z=function(e){mt(a,e);var t=ht(a);function a(){var r;ut(this,a);for(var n=arguments.length,i=new Array(n),l=0;l<n;l++)i[l]=arguments[l];return r=t.call.apply(t,[this].concat(i)),M(H(r),"state",{isAnimationFinished:!0}),M(H(r),"id",Ge("recharts-area-")),M(H(r),"handleAnimationEnd",function(){var c=r.props.onAnimationEnd;r.setState({isAnimationFinished:!0}),re(c)&&c()}),M(H(r),"handleAnimationStart",function(){var c=r.props.onAnimationStart;r.setState({isAnimationFinished:!1}),re(c)&&c()}),r}return dt(a,[{key:"renderDots",value:function(n,i,l){var c=this.props.isAnimationActive,o=this.state.isAnimationFinished;if(c&&!o)return null;var p=this.props,u=p.dot,h=p.points,m=p.dataKey,d=F(this.props),j=F(u,!0),A=h.map(function(x,_){var g=B(B(B({key:"dot-".concat(_),r:3},d),j),{},{dataKey:m,cx:x.x,cy:x.y,index:_,value:x.value,payload:x.payload});return a.renderDotItem(u,g)}),k={clipPath:n?"url(#clipPath-".concat(i?"":"dots-").concat(l,")"):null};return S.createElement(U,W({className:"recharts-area-dots"},k),A)}},{key:"renderHorizontalRect",value:function(n){var i=this.props,l=i.baseLine,c=i.points,o=i.strokeWidth,p=c[0].x,u=c[c.length-1].x,h=n*Math.abs(p-u),m=X(c.map(function(d){return d.y||0}));return Y(l)&&typeof l=="number"?m=Math.max(l,m):l&&Array.isArray(l)&&l.length&&(m=Math.max(X(l.map(function(d){return d.y||0})),m)),Y(m)?S.createElement("rect",{x:p<u?p:p-h,y:0,width:h,height:Math.floor(m+(o?parseInt("".concat(o),10):1))}):null}},{key:"renderVerticalRect",value:function(n){var i=this.props,l=i.baseLine,c=i.points,o=i.strokeWidth,p=c[0].y,u=c[c.length-1].y,h=n*Math.abs(p-u),m=X(c.map(function(d){return d.x||0}));return Y(l)&&typeof l=="number"?m=Math.max(l,m):l&&Array.isArray(l)&&l.length&&(m=Math.max(X(l.map(function(d){return d.x||0})),m)),Y(m)?S.createElement("rect",{x:0,y:p<u?p:p-h,width:m+(o?parseInt("".concat(o),10):1),height:Math.floor(h)}):null}},{key:"renderClipRect",value:function(n){var i=this.props.layout;return i==="vertical"?this.renderVerticalRect(n):this.renderHorizontalRect(n)}},{key:"renderAreaStatically",value:function(n,i,l,c){var o=this.props,p=o.layout,u=o.type,h=o.stroke,m=o.connectNulls,d=o.isRange;o.ref;var j=lt(o,ct);return S.createElement(U,{clipPath:l?"url(#clipPath-".concat(c,")"):null},S.createElement(J,W({},F(j,!0),{points:n,connectNulls:m,type:u,baseLine:i,layout:p,stroke:"none",className:"recharts-area-area"})),h!=="none"&&S.createElement(J,W({},F(this.props),{className:"recharts-area-curve",layout:p,type:u,connectNulls:m,fill:"none",points:n})),h!=="none"&&d&&S.createElement(J,W({},F(this.props),{className:"recharts-area-curve",layout:p,type:u,connectNulls:m,fill:"none",points:i})))}},{key:"renderAreaWithAnimation",value:function(n,i){var l=this,c=this.props,o=c.points,p=c.baseLine,u=c.isAnimationActive,h=c.animationBegin,m=c.animationDuration,d=c.animationEasing,j=c.animationId,A=this.state,k=A.prevPoints,x=A.prevBaseLine;return S.createElement(Ye,{begin:h,duration:m,isActive:u,easing:d,from:{t:0},to:{t:1},key:"area-".concat(j),onAnimationEnd:this.handleAnimationEnd,onAnimationStart:this.handleAnimationStart},function(_){var g=_.t;if(k){var b=k.length/o.length,P=o.map(function(R,O){var E=Math.floor(O*b);if(k[E]){var D=k[E],C=G(D.x,R.x),L=G(D.y,R.y);return B(B({},R),{},{x:C(g),y:L(g)})}return R}),w;if(Y(p)&&typeof p=="number"){var I=G(x,p);w=I(g)}else if(ce(p)||Ve(p)){var N=G(x,0);w=N(g)}else w=p.map(function(R,O){var E=Math.floor(O*b);if(x[E]){var D=x[E],C=G(D.x,R.x),L=G(D.y,R.y);return B(B({},R),{},{x:C(g),y:L(g)})}return R});return l.renderAreaStatically(P,w,n,i)}return S.createElement(U,null,S.createElement("defs",null,S.createElement("clipPath",{id:"animationClipPath-".concat(i)},l.renderClipRect(g))),S.createElement(U,{clipPath:"url(#animationClipPath-".concat(i,")")},l.renderAreaStatically(o,p,n,i)))})}},{key:"renderArea",value:function(n,i){var l=this.props,c=l.points,o=l.baseLine,p=l.isAnimationActive,u=this.state,h=u.prevPoints,m=u.prevBaseLine,d=u.totalLength;return p&&c&&c.length&&(!h&&d>0||!le(h,c)||!le(m,o))?this.renderAreaWithAnimation(n,i):this.renderAreaStatically(c,o,n,i)}},{key:"render",value:function(){var n,i=this.props,l=i.hide,c=i.dot,o=i.points,p=i.className,u=i.top,h=i.left,m=i.xAxis,d=i.yAxis,j=i.width,A=i.height,k=i.isAnimationActive,x=i.id;if(l||!o||!o.length)return null;var _=this.state.isAnimationFinished,g=o.length===1,b=Ue("recharts-area",p),P=m&&m.allowDataOverflow,w=d&&d.allowDataOverflow,I=P||w,N=ce(x)?this.id:x,R=(n=F(c))!==null&&n!==void 0?n:{r:3,strokeWidth:2},O=R.r,E=O===void 0?3:O,D=R.strokeWidth,C=D===void 0?2:D,L=He(c)?c:{},ie=L.clipDot,ae=ie===void 0?!0:ie,K=E*2+C;return S.createElement(U,{className:b},P||w?S.createElement("defs",null,S.createElement("clipPath",{id:"clipPath-".concat(N)},S.createElement("rect",{x:P?h:h-j/2,y:w?u:u-A/2,width:P?j:j*2,height:w?A:A*2})),!ae&&S.createElement("clipPath",{id:"clipPath-dots-".concat(N)},S.createElement("rect",{x:h-K/2,y:u-K/2,width:j+K,height:A+K}))):null,g?null:this.renderArea(I,N),(c||g)&&this.renderDots(I,ae,N),(!k||_)&&Ke.renderCallByParent(this.props,o))}}],[{key:"getDerivedStateFromProps",value:function(n,i){return n.animationId!==i.prevAnimationId?{prevAnimationId:n.animationId,curPoints:n.points,curBaseLine:n.baseLine,prevPoints:i.curPoints,prevBaseLine:i.curBaseLine}:n.points!==i.curPoints||n.baseLine!==i.curBaseLine?{curPoints:n.points,curBaseLine:n.baseLine}:null}}]),a}(v.PureComponent);ye=z;M(z,"displayName","Area");M(z,"defaultProps",{stroke:"#3182bd",fill:"#3182bd",fillOpacity:.6,xAxisId:0,yAxisId:0,legendType:"line",connectNulls:!1,points:[],dot:!1,activeDot:!0,hide:!1,isAnimationActive:!Xe.isSsr,animationBegin:0,animationDuration:1500,animationEasing:"ease"});M(z,"getBaseValue",function(e,t,a,r){var n=e.layout,i=e.baseValue,l=t.props.baseValue,c=l??i;if(Y(c)&&typeof c=="number")return c;var o=n==="horizontal"?r:a,p=o.scale.domain();if(o.type==="number"){var u=Math.max(p[0],p[1]),h=Math.min(p[0],p[1]);return c==="dataMin"?h:c==="dataMax"||u<0?u:Math.max(Math.min(p[0],p[1]),0)}return c==="dataMin"?p[0]:c==="dataMax"?p[1]:p[0]});M(z,"getComposedData",function(e){var t=e.props,a=e.item,r=e.xAxis,n=e.yAxis,i=e.xAxisTicks,l=e.yAxisTicks,c=e.bandSize,o=e.dataKey,p=e.stackedData,u=e.dataStartIndex,h=e.displayedData,m=e.offset,d=t.layout,j=p&&p.length,A=ye.getBaseValue(t,a,r,n),k=d==="horizontal",x=!1,_=h.map(function(b,P){var w;j?w=p[u+P]:(w=pe(b,o),Array.isArray(w)?x=!0:w=[A,w]);var I=w[1]==null||j&&pe(b,o)==null;return k?{x:ue({axis:r,ticks:i,bandSize:c,entry:b,index:P}),y:I?null:n.scale(w[1]),value:w,payload:b}:{x:I?null:r.scale(w[1]),y:ue({axis:n,ticks:l,bandSize:c,entry:b,index:P}),value:w,payload:b}}),g;return j||x?g=_.map(function(b){var P=Array.isArray(b.value)?b.value[0]:null;return k?{x:b.x,y:P!=null&&b.y!=null?n.scale(P):null}:{x:P!=null?r.scale(P):null,y:b.y}}):g=k?n.scale(A):r.scale(A),B({points:_,baseLine:g,layout:d,isRange:x},m)});M(z,"renderDotItem",function(e,t){var a;return S.isValidElement(e)?a=S.cloneElement(e,t):re(e)?a=e(t):a=S.createElement(qe,W({},t,{className:"recharts-area-dot"})),a});var yt=Qe({chartName:"AreaChart",GraphicalChild:z,axisComponents:[{axisType:"xAxis",AxisComp:Je},{axisType:"yAxis",AxisComp:Ze}],formatAxisMap:et});const wt={tweetPlayingTime:0,tweetIsPlaying:!1,tweetDuration:1,selectedTweets:[],selectedTweet:""},$=Pe(e=>({...wt,setTweetPlayingTime:t=>e({tweetPlayingTime:t}),setSelectedTweets:t=>e({selectedTweets:t}),setTweetIsPlaying:t=>e({tweetIsPlaying:t}),setTweetDuration:t=>e({tweetDuration:t}),setSelectedTweet:t=>e({selectedTweet:t}),fetchTweetData:async t=>{const{addNewNode:a}=he.getState(),{setPlayingNode:r}=Le.getState();console.log(a,r);const n=await fe(t,[],[],"",!0,0,1,500);console.log(n)}})),q=3e4,be=({onPlaybackRestart:e})=>{const t=$(l=>l.tweetIsPlaying),a=$(l=>l.setTweetIsPlaying),r=()=>{},n=()=>{},i=v.useCallback(()=>{e&&e(),a(!t)},[t,a,e]);return s.jsxs(bt,{children:[s.jsx(jt,{onClick:r,children:s.jsx("img",{alt:"",src:"/RewindIcon.svg"})}),s.jsx(vt,{"data-testid":"play-pause-button",onClick:i,size:"small",children:t?s.jsx(ze,{"data-testid":"pause-icon"}):s.jsx(We,{"data-testid":"play-icon"})}),s.jsx(At,{onClick:n,children:s.jsx("img",{alt:"",src:"/ForwardIcon.svg"})})]})};be.displayName="Controls";const bt=f(T).attrs({direction:"row",align:"center",justify:"flex-start"})`
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
`,vt=f(Be)`
  && {
    font-size: 36px;
    padding: 2px;
    overflow: hidden;
  }
`,jt=f.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1px 0 0 1px;
  cursor: pointer;
  img {
    width: 20px;
    height: auto;
  }
`,At=f.div`
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
`;const ve=v.memo(({type:e,left:t,img:a})=>{var o,p;const r=xe(u=>u.normalizedSchemasByType),n=(o=r[e])==null?void 0:o.primary_color,i=(p=r[e])==null?void 0:p.icon,l=i?`/svg-icons/${i}.svg`:"",c={iconStart:a||l,color:n??y.THING};return s.jsx(Pt,{style:{left:`${t}%`},children:s.jsx(je,{...c,label:e})})});ve.displayName="Marker";const je=v.memo(({iconStart:e,color:t,label:a})=>s.jsx(Tt,{color:t,children:e&&s.jsx("img",{alt:a,className:"badge__img",onError:console.log,src:e})}));je.displayName="Badge";const Tt=f(T).attrs({direction:"row"})`
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
`,Pt=f.div`
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
`,Ae=v.memo(({markers:e})=>{if(e.length===0)return null;const t=e.map(i=>i.start?new Date(i.start).getTime():0),a=Math.min(...t),n=Math.max(...t)-a;return s.jsx(s.Fragment,{children:e.map((i,l)=>{var h;const o=((i.start?new Date(i.start).getTime():0)-a)/n*100,p=(i==null?void 0:i.node_type)||"",u=((h=i==null?void 0:i.properties)==null?void 0:h.image_url)||"";return s.jsx(ve,{img:u,left:o,type:p},`${i.ref_id}_${l}`)})})});Ae.displayName="Markers";const Z=50,Te=v.memo(({markers:e,height:t=56,showChart:a=!0,backgroundColor:r=y.primaryBlue})=>{const n=e.map(p=>p.start?new Date(p.start).getTime():0),i=Math.min(...n),c=Math.max(...n)-i,o=v.useMemo(()=>{if(e.length===0||c===0)return[];const p=c/Z,u=Array(Z).fill(0);return e.forEach(h=>{if(!h.start)return;const m=new Date(h.start).getTime(),d=Math.min(Z-1,Math.floor((m-i)/p));u[d]+=1}),u.map((h,m)=>({timestamp:i+p*m,value:h}))},[e,i,c]);return e.length===0?null:s.jsx(s.Fragment,{children:a&&o.length>0&&s.jsx("div",{children:s.jsx(tt,{height:t,width:"100%",children:s.jsx(yt,{data:o,children:s.jsx(z,{dataKey:"value",fill:r,fillOpacity:.5,stroke:"transparent",type:"basis"})})})})})});Te.displayName="ProgressChart";const _t=({duration:e,markers:t,handleProgressChange:a,playingTime:r,tweetPlayingTime:n})=>{const i=se(n).format("MMM D"),l=se(n).format("h:mma"),c=Math.min(Math.max(r,0),100);return s.jsxs(kt,{children:[c?s.jsxs($t,{$progress:c,children:[s.jsx(Ot,{children:i}),s.jsx(Et,{children:" - "}),s.jsx(It,{children:l})]}):null,s.jsx(Nt,{max:e,onChange:a,value:c,width:12}),s.jsx(Dt,{children:s.jsx(Ae,{markers:t})}),s.jsx(Rt,{children:s.jsx(Te,{markers:t})})]})},St=f(T)`
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  height: 96px;
  transform: translateY(-50%);
`,kt=f(T)`
  position: relative;
  flex: 1 1 100%;
  padding: 0;
  height: 100%;
  box-sizing: border-box;
  margin-right: 12px;

  &:hover {
    ${St} {
      display: block;
    }
  }
`,Dt=f(T)`
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
`,Rt=f(T)`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 23px;
`,$t=f.div`
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
`,Ot=f.span`
  display: inline-block;
  width: 45px;
  text-align: right;
`,Et=f.span`
  margin: 0 4px;
`,It=f.span`
  display: inline-block;
  width: 55px;
  text-align: left;
  font-variant-numeric: tabular-nums;
`,Nt=f(rt)`
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
`,Ct=({markers:e})=>{const t=$(x=>x.tweetPlayingTime),a=$(x=>x.setTweetPlayingTime),r=$(x=>x.setTweetIsPlaying),n=$(x=>x.setTweetDuration),i=$(x=>x.selectedTweets),l=$(x=>x.tweetDuration),c=$(x=>x.tweetIsPlaying),[o,p]=v.useState(0),[u,h]=v.useState(0),m=v.useRef(0);v.useEffect(()=>{var P,w,I,N;const x=e.map(R=>R.start?new Date(R.start).getTime():0);if((w=(P=i[0])==null?void 0:P.properties)!=null&&w.time_series){const R=((N=(I=i[0])==null?void 0:I.properties)==null?void 0:N.time_series).split(",").map(O=>Number(O)*1e3);x.push(...R)}const _=Math.min(...x),g=Math.max(...x),b=g-_;p(_),h(g),n(b)},[e,n,i]);const d=v.useRef(null),j=v.useRef(null),A=v.useCallback((x,_)=>{const g=Array.isArray(_)?_[0]:_,b=o+g/100*l;a(b)},[a,o,l]);v.useEffect(()=>{if(c){t>=u&&(a(o),m.current=o),j.current=Date.now();const x=t?(t-o)/l:0,_=Date.now()-x*q;j.current=_;const g=()=>{const b=Date.now()-(j.current??Date.now());if(b<q){const P=b/q,w=o+P*l;a(w),m.current=w,d.current=requestAnimationFrame(g)}else a(u),r(!1),m.current=u,d.current&&cancelAnimationFrame(d.current)};return d.current=requestAnimationFrame(g),()=>{d.current&&cancelAnimationFrame(d.current)}}return m.current=t,()=>{d.current&&(cancelAnimationFrame(d.current),d.current=null)}},[c,o,u,a,l,r,t]);const k=v.useCallback(()=>{t>=u&&(a(o),m.current=o)},[t,u,o,a]);return s.jsxs(Mt,{children:[s.jsx(be,{onPlaybackRestart:k}),s.jsx(_t,{duration:100,handleProgressChange:A,markers:e,playingTime:(t-o)/l*100,tweetPlayingTime:t})]})},Mt=f(T).attrs({direction:"row",align:"center",justify:"space-between"})`
  padding: 20px;
  background: ${y.BG2};
  height: 96px;
  border-radius: 8px;
  box-sizing: border-box;
  margin-right: 4px;
`,Lt={impression_count:{label:"Impressions",formatter:(e,t)=>e.toLocaleString().split(",").at(t)},like_count:{label:"Likes",formatter:(e,t)=>e.toLocaleString().split(",").at(t)},reply_count:{label:"Replies",formatter:(e,t)=>e.toLocaleString().split(",").at(t)},retweet_count:{label:"Retweets",formatter:(e,t)=>e.toLocaleString().split(",").at(t)},quote_count:{label:"Quotes",formatter:(e,t)=>e.toLocaleString().split(",").at(t)},bookmark_count:{label:"Bookmarks",formatter:(e,t)=>e.toLocaleString().split(",").at(t)},analytics_location:{label:"Location",formatter:e=>e||"Unknown"},analytics_gender:{label:"Gender",formatter:e=>e||"Unknown"},followers:{label:"Followers",formatter:(e,t)=>e.toLocaleString().split(",").at(t)}},Bt=e=>e==null?s.jsx(oe,{color:y.GRAY3}):e<=4?s.jsx(Ne,{color:"#ef4444"}):e>=7?s.jsx(Ce,{color:"#22c55e"}):s.jsx(oe,{color:y.GRAY3}),zt=({node:e,handleAnalyzeClick:t})=>{var l,c,o,p;const a=((l=e==null?void 0:e.properties)==null?void 0:l.followers)!==void 0&&((c=e==null?void 0:e.properties)==null?void 0:c.impression_count)!==void 0&&e.properties.impression_count!==0?(e.properties.impression_count/e.properties.followers).toFixed(2):"N/A",r=$(u=>u.tweetPlayingTime),n=(o=e==null?void 0:e.properties)!=null&&o.time_series?(e==null?void 0:e.properties.time_series).split(",").map(Number):[];let i=-1;if(r){const u=r>1e12?r/1e3:r;for(let h=0;h<n.length&&u>=n[h];h+=1)i=h}return s.jsxs(Wt,{children:[s.jsxs(T,{align:"center",direction:"row",justify:"space-between",mb:16,children:[s.jsx(Ft,{children:"Analytics"}),s.jsx(Vt,{onClick:u=>{u.stopPropagation(),t()},children:s.jsx(at,{})})]}),s.jsxs(Gt,{children:[Object.entries(Lt).map(([u,{label:h,formatter:m}])=>{var d;return((d=e==null?void 0:e.properties)==null?void 0:d[u])!==void 0?s.jsxs(ee,{children:[s.jsx("span",{children:h}),s.jsx(te,{children:m(e.properties[u],i)},i)]},u):null}),s.jsxs(ee,{children:[s.jsx("span",{children:"Views-to-followers"}),s.jsx(te,{children:a})]}),s.jsxs(ee,{children:[s.jsx("span",{children:"Sentiment"}),s.jsx(te,{children:Bt((p=e==null?void 0:e.properties)==null?void 0:p.analytics_sentiment_score)})]})]})]})},Wt=f.div`
  background: ${y.ANALYTICS_CARD_BG};
  border-radius: 16px;
  padding: 16px 0;
  max-width: 350px;
`,Ft=f.h2`
  color: ${y.white};
  font-size: 16px;
  font-weight: 500;
`,Gt=f.div`
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
`,Yt=_e`
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
  animation: ${Yt} 0.3s ease;
  svg {
    width: 14px;
    height: 14px;
    margin-left: 4px;
  }
`,Vt=f.a`
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
`,Ut=({nodeId:e,handleAnalyzeClick:t})=>{const[a,r]=v.useState(null);v.useEffect(()=>{(async()=>{try{const m=await De(e);r(m)}catch(m){console.error(m)}})()},[e]);const n=a?Se(a):null,{text:i,name:l,verified:c,image_url:o,twitter_handle:p}=n||{};let u="";return(n==null?void 0:n.node_type)==="Tweet"?u=`https://x.com/${p}/status/${n==null?void 0:n.tweet_id}`:(n==null?void 0:n.node_type)==="User"&&(u=`https://x.com/${p}`),s.jsx(Ht,{children:s.jsxs(Kt,{children:[s.jsx(Xt,{children:o?s.jsx(ke,{rounded:!0,size:58,src:o,type:"person"}):s.jsx(qt,{children:s.jsx(st,{})})}),s.jsxs(Qt,{children:[s.jsxs(Jt,{children:[s.jsxs(Zt,{children:[l&&s.jsx(er,{children:l}),!c&&s.jsx(nr,{children:s.jsx(it,{})})]}),s.jsx(ir,{href:u,target:"_blank",children:s.jsx(ot,{})})]}),p&&s.jsxs(tr,{children:["@",p]}),s.jsx(rr,{children:i}),a&&s.jsx(zt,{handleAnalyzeClick:t,node:a})]})]})})},Ht=f(T)`
  background: ${y.ANALYTICS_CARD_BG};
  border-radius: 16px;
  padding: 10px;
  width: 100%;
  max-width: 369px;
`,Kt=f(T)`
  display: grid;
  width: 100%;
  grid-template-columns: auto minmax(0, 1fr);
  align-items: start;
`,Xt=f(T)`
  margin-right: 10px;
`,qt=f(T)`
  width: 58px;
  height: 58px;
  border-radius: 50%;
  background: ${y.GRAY3};
  align-items: center;
  justify-content: center;
  color: ${y.white};
  font-size: 24px;
`,Qt=f(T)`
  flex-direction: column;
  gap: 3px;
  margin-top: 12px;
`,Jt=f(T)`
  align-items: center;
  flex-direction: row;
  gap: 8px;
  width: 100%;
  justify-content: space-between;
`,Zt=f(T)`
  align-items: center;
  flex-direction: row;
  gap: 8px;
  flex-shrink: 1;
  min-width: 0;
`,er=f(T)`
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
`,tr=f(T)`
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
`,rr=f(T)`
  color: ${y.white};
  font-family: Barlow;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  margin-top: 4px;
  white-space: normal;
`,nr=f(T)`
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
`,ir=f.a`
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
`,ar=v.lazy(()=>Re(()=>import("./index-14c9ac3d.js"),["assets/index-14c9ac3d.js","assets/index-59a682e9.js","assets/index-b4d03b7b.css","assets/index-e82db91d.js","assets/SourcesTableIcon-a9fc3bff.js","assets/index-5721889e.js","assets/CheckIcon-b13a8e38.js","assets/DeleteNodeIcon-8dd9e418.js","assets/SoundIcon-313ef194.js","assets/SucessFeedBackIcon-27cfd902.js","assets/ClipLoader-16d3ade8.js","assets/TableRow-eeedc165.js"]).then(({TweetAnalyze:e})=>({default:e}))),sr=()=>{const e=$(o=>o.setSelectedTweet),t=$(o=>o.selectedTweet),{tweetId:a}=ge(),[r,n]=v.useState(""),{open:i}=$e("tweetAnalyze"),l=(a==null?void 0:a.split("&"))||[],c=o=>{i(),n(o)};return s.jsxs(cr,{align:"stretch",basis:"100%",grow:1,shrink:1,children:[l.length>1?s.jsx(or,{onClick:()=>{c("summary")},children:"Summary Report"}):null,l.map(o=>s.jsx(lr,{className:t===o?"selected":"",onClick:()=>e(o),children:s.jsx(Ut,{handleAnalyzeClick:()=>{c(o)},nodeId:o})},o)),s.jsx(ar,{tweetId:r})]})},or=f.button`
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
`,cr=f(T)(({theme:e})=>({position:"relative",display:"flex",padding:"0 20px 0 20px",background:"transparent",width:"100%",height:"calc(100vh - 180px)",overflow:"auto",[e.breakpoints.up("sm")]:{width:nt,gap:"10px"}})),lr=f(T)`
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
`,pr=[{ref_id:"positive",name:"Positive"},{ref_id:"negative",name:"Negative"},{ref_id:"neutral",name:"Neutral"}],ur=e=>{const t=e.edges.filter(r=>{var n;return((n=r==null?void 0:r.properties)==null?void 0:n.start)&&typeof r.properties.start=="string"}).map(r=>({source:r.source,target:r.target,start:r.properties.start}));return e.nodes.filter(r=>e.edges.some(n=>n.source===r.ref_id||n.target===r.ref_id)).map(r=>{const n=t.find(i=>r.ref_id===i.source||r.ref_id===i.target);return{...r,start:(n==null?void 0:n.start)||0}}).filter(r=>r&&typeof r.start=="string"&&r.node_type!=="Clip"&&r.node_type!=="Episode"&&r.node_type!=="Show")},Fr=()=>{const e=he(d=>d.addNewNode),t=v.useRef(null),a=v.useRef(null),r=v.useRef(null),[n,i]=v.useState([]),{setSchemas:l}=xe(d=>d),c=$(d=>d.setSelectedTweets),o=$(d=>d.selectedTweet),p=$(d=>d.setSelectedTweet),u=Fe(d=>d.setNeighbourhoods),h=Oe(),{tweetId:m}=ge();return v.useEffect(()=>{(async()=>{try{const j=await Ie();l(j.schemas.filter(A=>!A.is_deleted))}catch(j){console.error("Error fetching schema:",j)}})()},[l]),v.useEffect(()=>{u(pr)},[u]),v.useEffect(()=>{if(!o){const d=m==null?void 0:m.split("&")[0];d&&p(d)}},[o,m,p]),v.useEffect(()=>{o&&(async j=>{try{const A=await fe(j),k=A.nodes.find(g=>g.ref_id===o);k&&(c([k]),e({nodes:[k],edges:[]}));const x=ur({nodes:A.nodes,edges:A.edges});i(x);const _=A.nodes.map(g=>{var b,P,w;return g.node_type==="Tweet"&&((b=g.properties)!=null&&b.sentiment)?((P=g.properties)==null?void 0:P.sentiment)<4?{...g,neighbourHood:"negative"}:((w=g.properties)==null?void 0:w.sentiment)>7?{...g,neighbourHood:"positive"}:{...g,neighbourHood:"neutral"}:g});r.current={nodes:_,edges:A.edges}}catch(A){h("/"),console.error(A)}})(o)},[e,h,o,c]),v.useEffect(()=>{const d=j=>{const{tweetPlayingTime:A,tweetDuration:k}=$.getState(),x=k/q*3e3;if(a.current!==null){if(j-a.current>1e3){if(r.current){const{nodes:g,edges:b}=r.current,P=A,[w,I]=b.reduce(([O,E],D)=>{var L;const C=typeof((L=D==null?void 0:D.properties)==null?void 0:L.start)=="string"?new Date(D.properties.start||0).getTime():0;return C!==0&&C<=P+x?O.push(D):E.push(D),[O,E]},[[],[]]),[N,R]=g.reduce(([O,E],D)=>(w.some(C=>C.target===D.ref_id||C.source===D.ref_id)?O.push(D):E.push(D),[O,E]),[[],[]]);r.current={nodes:R,edges:I},(N.length||w.length)&&e({nodes:N,edges:w})}a.current=j}}else a.current=j;t.current=requestAnimationFrame(d)};return t.current=requestAnimationFrame(d),()=>{t.current&&cancelAnimationFrame(t.current)}},[r,e]),s.jsxs(dr,{children:[s.jsx(mr,{direction:"row",children:s.jsxs(s.Fragment,{children:[s.jsxs(T,{children:[s.jsx(Ee,{}),s.jsx(sr,{})]}),s.jsx(hr,{children:s.jsx(T,{basis:"100%",grow:1,shrink:1,children:s.jsx(Me,{})})})]})}),s.jsx(fr,{children:s.jsx(Ct,{markers:n})})]})},dr=f.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
`,mr=f(T)`
  flex: 1;
  overflow: hidden;
`,hr=f(T)`
  flex-basis: 100%;
  flex-shrink: 1;
  flex-grow: 1;
  padding: 16px 16px 16px 0;
`,fr=f(T)`
  padding: 16px 16px 16px 0;
  margin-left: 18px;
`;export{Fr as TweetMindset};
