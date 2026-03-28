import{x as re,R as S,r as b,e as Te,s as f,g as y,F as T,j as s,p as fe,y as oe,G as ie,U as Pe,z as _e,A as Se,D as ke,_ as De,t as xe,E as Re,c as $e,i as Ce,H as Oe,v as Ee,w as Ie}from"./index-3fb06edb.js";import{Universe as Me}from"./index-33505984.js";import{I as Ne,b as ze,c as Le,u as Be}from"./index-d6c48c54.js";import{u as We,f as F,L as H,m as X,i as V,C as J,A as Fe,a as G,b as ce,c as Ge,d as le,e as Ve,g as Ye,h as He,G as Ue,j as pe,k as ue,D as Ke,l as Xe,X as qe,Y as Qe,n as Je,R as Ze}from"./index-7a5b3529.js";import{S as et,M as tt}from"./index-c6caeac5.js";import{C as rt}from"./CheckIcon-5a235f8d.js";import{S as nt,P as it,L as at}from"./index-f38d013f.js";import"./index-574f7fbb.js";import"./three.module-9722a9fc.js";import"./isPlainObject-fd69c641.js";import"./TextareaAutosize-c2b306bd.js";import"./index-ca742f7c.js";import"./ClipLoader-718f5911.js";import"./index-717b1eb9.js";import"./clsx-07776742.js";import"./string-a277709d.js";import"./index-666a29e1.js";import"./Skeleton-437bc0c8.js";import"./index-593dec5c.js";import"./SoundIcon-5cfe54be.js";import"./Stack-ef53240c.js";import"./FormControlLabel-a9ea8b64.js";import"./Typography-df876157.js";import"./createSvgIcon-7acd57cf.js";import"./SourcesTableIcon-d73b4b69.js";import"./DeleteNodeIcon-96a11f80.js";import"./SucessFeedBackIcon-3b89b4dc.js";var st=["layout","type","stroke","connectNulls","isRange","ref"],ge;function Y(e){"@babel/helpers - typeof";return Y=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Y(e)}function ot(e,t){if(e==null)return{};var a=ct(e,t),r,n;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function ct(e,t){if(e==null)return{};var a={},r=Object.keys(e),n,i;for(i=0;i<r.length;i++)n=r[i],!(t.indexOf(n)>=0)&&(a[n]=e[n]);return a}function W(){return W=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},W.apply(this,arguments)}function de(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),a.push.apply(a,r)}return a}function L(e){for(var t=1;t<arguments.length;t++){var a=arguments[t]!=null?arguments[t]:{};t%2?de(Object(a),!0).forEach(function(r){N(e,r,a[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):de(Object(a)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))})}return e}function lt(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function me(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,ye(r.key),r)}}function pt(e,t,a){return t&&me(e.prototype,t),a&&me(e,a),Object.defineProperty(e,"prototype",{writable:!1}),e}function ut(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&ne(e,t)}function ne(e,t){return ne=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,n){return r.__proto__=n,r},ne(e,t)}function dt(e){var t=ht();return function(){var r=Q(e),n;if(t){var i=Q(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return mt(this,n)}}function mt(e,t){if(t&&(Y(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return U(e)}function U(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function ht(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Q(e){return Q=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(a){return a.__proto__||Object.getPrototypeOf(a)},Q(e)}function N(e,t,a){return t=ye(t),t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function ye(e){var t=ft(e,"string");return Y(t)==="symbol"?t:String(t)}function ft(e,t){if(Y(e)!=="object"||e===null)return e;var a=e[Symbol.toPrimitive];if(a!==void 0){var r=a.call(e,t||"default");if(Y(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var B=function(e){ut(a,e);var t=dt(a);function a(){var r;lt(this,a);for(var n=arguments.length,i=new Array(n),l=0;l<n;l++)i[l]=arguments[l];return r=t.call.apply(t,[this].concat(i)),N(U(r),"state",{isAnimationFinished:!0}),N(U(r),"id",We("recharts-area-")),N(U(r),"handleAnimationEnd",function(){var c=r.props.onAnimationEnd;r.setState({isAnimationFinished:!0}),re(c)&&c()}),N(U(r),"handleAnimationStart",function(){var c=r.props.onAnimationStart;r.setState({isAnimationFinished:!1}),re(c)&&c()}),r}return pt(a,[{key:"renderDots",value:function(n,i,l){var c=this.props.isAnimationActive,o=this.state.isAnimationFinished;if(c&&!o)return null;var p=this.props,u=p.dot,h=p.points,m=p.dataKey,d=F(this.props),j=F(u,!0),A=h.map(function(x,_){var g=L(L(L({key:"dot-".concat(_),r:3},d),j),{},{dataKey:m,cx:x.x,cy:x.y,index:_,value:x.value,payload:x.payload});return a.renderDotItem(u,g)}),k={clipPath:n?"url(#clipPath-".concat(i?"":"dots-").concat(l,")"):null};return S.createElement(H,W({className:"recharts-area-dots"},k),A)}},{key:"renderHorizontalRect",value:function(n){var i=this.props,l=i.baseLine,c=i.points,o=i.strokeWidth,p=c[0].x,u=c[c.length-1].x,h=n*Math.abs(p-u),m=X(c.map(function(d){return d.y||0}));return V(l)&&typeof l=="number"?m=Math.max(l,m):l&&Array.isArray(l)&&l.length&&(m=Math.max(X(l.map(function(d){return d.y||0})),m)),V(m)?S.createElement("rect",{x:p<u?p:p-h,y:0,width:h,height:Math.floor(m+(o?parseInt("".concat(o),10):1))}):null}},{key:"renderVerticalRect",value:function(n){var i=this.props,l=i.baseLine,c=i.points,o=i.strokeWidth,p=c[0].y,u=c[c.length-1].y,h=n*Math.abs(p-u),m=X(c.map(function(d){return d.x||0}));return V(l)&&typeof l=="number"?m=Math.max(l,m):l&&Array.isArray(l)&&l.length&&(m=Math.max(X(l.map(function(d){return d.x||0})),m)),V(m)?S.createElement("rect",{x:0,y:p<u?p:p-h,width:m+(o?parseInt("".concat(o),10):1),height:Math.floor(h)}):null}},{key:"renderClipRect",value:function(n){var i=this.props.layout;return i==="vertical"?this.renderVerticalRect(n):this.renderHorizontalRect(n)}},{key:"renderAreaStatically",value:function(n,i,l,c){var o=this.props,p=o.layout,u=o.type,h=o.stroke,m=o.connectNulls,d=o.isRange;o.ref;var j=ot(o,st);return S.createElement(H,{clipPath:l?"url(#clipPath-".concat(c,")"):null},S.createElement(J,W({},F(j,!0),{points:n,connectNulls:m,type:u,baseLine:i,layout:p,stroke:"none",className:"recharts-area-area"})),h!=="none"&&S.createElement(J,W({},F(this.props),{className:"recharts-area-curve",layout:p,type:u,connectNulls:m,fill:"none",points:n})),h!=="none"&&d&&S.createElement(J,W({},F(this.props),{className:"recharts-area-curve",layout:p,type:u,connectNulls:m,fill:"none",points:i})))}},{key:"renderAreaWithAnimation",value:function(n,i){var l=this,c=this.props,o=c.points,p=c.baseLine,u=c.isAnimationActive,h=c.animationBegin,m=c.animationDuration,d=c.animationEasing,j=c.animationId,A=this.state,k=A.prevPoints,x=A.prevBaseLine;return S.createElement(Fe,{begin:h,duration:m,isActive:u,easing:d,from:{t:0},to:{t:1},key:"area-".concat(j),onAnimationEnd:this.handleAnimationEnd,onAnimationStart:this.handleAnimationStart},function(_){var g=_.t;if(k){var v=k.length/o.length,P=o.map(function(R,C){var O=Math.floor(C*v);if(k[O]){var D=k[O],M=G(D.x,R.x),z=G(D.y,R.y);return L(L({},R),{},{x:M(g),y:z(g)})}return R}),w;if(V(p)&&typeof p=="number"){var E=G(x,p);w=E(g)}else if(ce(p)||Ge(p)){var I=G(x,0);w=I(g)}else w=p.map(function(R,C){var O=Math.floor(C*v);if(x[O]){var D=x[O],M=G(D.x,R.x),z=G(D.y,R.y);return L(L({},R),{},{x:M(g),y:z(g)})}return R});return l.renderAreaStatically(P,w,n,i)}return S.createElement(H,null,S.createElement("defs",null,S.createElement("clipPath",{id:"animationClipPath-".concat(i)},l.renderClipRect(g))),S.createElement(H,{clipPath:"url(#animationClipPath-".concat(i,")")},l.renderAreaStatically(o,p,n,i)))})}},{key:"renderArea",value:function(n,i){var l=this.props,c=l.points,o=l.baseLine,p=l.isAnimationActive,u=this.state,h=u.prevPoints,m=u.prevBaseLine,d=u.totalLength;return p&&c&&c.length&&(!h&&d>0||!le(h,c)||!le(m,o))?this.renderAreaWithAnimation(n,i):this.renderAreaStatically(c,o,n,i)}},{key:"render",value:function(){var n,i=this.props,l=i.hide,c=i.dot,o=i.points,p=i.className,u=i.top,h=i.left,m=i.xAxis,d=i.yAxis,j=i.width,A=i.height,k=i.isAnimationActive,x=i.id;if(l||!o||!o.length)return null;var _=this.state.isAnimationFinished,g=o.length===1,v=Ve("recharts-area",p),P=m&&m.allowDataOverflow,w=d&&d.allowDataOverflow,E=P||w,I=ce(x)?this.id:x,R=(n=F(c))!==null&&n!==void 0?n:{r:3,strokeWidth:2},C=R.r,O=C===void 0?3:C,D=R.strokeWidth,M=D===void 0?2:D,z=Ye(c)?c:{},ae=z.clipDot,se=ae===void 0?!0:ae,K=O*2+M;return S.createElement(H,{className:v},P||w?S.createElement("defs",null,S.createElement("clipPath",{id:"clipPath-".concat(I)},S.createElement("rect",{x:P?h:h-j/2,y:w?u:u-A/2,width:P?j:j*2,height:w?A:A*2})),!se&&S.createElement("clipPath",{id:"clipPath-dots-".concat(I)},S.createElement("rect",{x:h-K/2,y:u-K/2,width:j+K,height:A+K}))):null,g?null:this.renderArea(E,I),(c||g)&&this.renderDots(E,se,I),(!k||_)&&He.renderCallByParent(this.props,o))}}],[{key:"getDerivedStateFromProps",value:function(n,i){return n.animationId!==i.prevAnimationId?{prevAnimationId:n.animationId,curPoints:n.points,curBaseLine:n.baseLine,prevPoints:i.curPoints,prevBaseLine:i.curBaseLine}:n.points!==i.curPoints||n.baseLine!==i.curBaseLine?{curPoints:n.points,curBaseLine:n.baseLine}:null}}]),a}(b.PureComponent);ge=B;N(B,"displayName","Area");N(B,"defaultProps",{stroke:"#3182bd",fill:"#3182bd",fillOpacity:.6,xAxisId:0,yAxisId:0,legendType:"line",connectNulls:!1,points:[],dot:!1,activeDot:!0,hide:!1,isAnimationActive:!Ue.isSsr,animationBegin:0,animationDuration:1500,animationEasing:"ease"});N(B,"getBaseValue",function(e,t,a,r){var n=e.layout,i=e.baseValue,l=t.props.baseValue,c=l??i;if(V(c)&&typeof c=="number")return c;var o=n==="horizontal"?r:a,p=o.scale.domain();if(o.type==="number"){var u=Math.max(p[0],p[1]),h=Math.min(p[0],p[1]);return c==="dataMin"?h:c==="dataMax"||u<0?u:Math.max(Math.min(p[0],p[1]),0)}return c==="dataMin"?p[0]:c==="dataMax"?p[1]:p[0]});N(B,"getComposedData",function(e){var t=e.props,a=e.item,r=e.xAxis,n=e.yAxis,i=e.xAxisTicks,l=e.yAxisTicks,c=e.bandSize,o=e.dataKey,p=e.stackedData,u=e.dataStartIndex,h=e.displayedData,m=e.offset,d=t.layout,j=p&&p.length,A=ge.getBaseValue(t,a,r,n),k=d==="horizontal",x=!1,_=h.map(function(v,P){var w;j?w=p[u+P]:(w=pe(v,o),Array.isArray(w)?x=!0:w=[A,w]);var E=w[1]==null||j&&pe(v,o)==null;return k?{x:ue({axis:r,ticks:i,bandSize:c,entry:v,index:P}),y:E?null:n.scale(w[1]),value:w,payload:v}:{x:E?null:r.scale(w[1]),y:ue({axis:n,ticks:l,bandSize:c,entry:v,index:P}),value:w,payload:v}}),g;return j||x?g=_.map(function(v){var P=Array.isArray(v.value)?v.value[0]:null;return k?{x:v.x,y:P!=null&&v.y!=null?n.scale(P):null}:{x:P!=null?r.scale(P):null,y:v.y}}):g=k?n.scale(A):r.scale(A),L({points:_,baseLine:g,layout:d,isRange:x},m)});N(B,"renderDotItem",function(e,t){var a;return S.isValidElement(e)?a=S.cloneElement(e,t):re(e)?a=e(t):a=S.createElement(Ke,W({},t,{className:"recharts-area-dot"})),a});var xt=Xe({chartName:"AreaChart",GraphicalChild:B,axisComponents:[{axisType:"xAxis",AxisComp:qe},{axisType:"yAxis",AxisComp:Qe}],formatAxisMap:Je});const gt={tweetPlayingTime:0,tweetIsPlaying:!1,tweetDuration:1,selectedTweets:[],selectedTweet:""},$=Te(e=>({...gt,setTweetPlayingTime:t=>e({tweetPlayingTime:t}),setSelectedTweets:t=>e({selectedTweets:t}),setTweetIsPlaying:t=>e({tweetIsPlaying:t}),setTweetDuration:t=>e({tweetDuration:t}),setSelectedTweet:t=>e({selectedTweet:t}),fetchTweetData:async t=>t})),q=3e4,we=({onPlaybackRestart:e})=>{const t=$(l=>l.tweetIsPlaying),a=$(l=>l.setTweetIsPlaying),r=()=>{},n=()=>{},i=b.useCallback(()=>{e&&e(),a(!t)},[t,a,e]);return s.jsxs(yt,{children:[s.jsx(vt,{onClick:r,children:s.jsx("img",{alt:"",src:"/RewindIcon.svg"})}),s.jsx(wt,{"data-testid":"play-pause-button",onClick:i,size:"small",children:t?s.jsx(ze,{"data-testid":"pause-icon"}):s.jsx(Le,{"data-testid":"play-icon"})}),s.jsx(bt,{onClick:n,children:s.jsx("img",{alt:"",src:"/ForwardIcon.svg"})})]})};we.displayName="Controls";const yt=f(T).attrs({direction:"row",align:"center",justify:"flex-start"})`
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
`,wt=f(Ne)`
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
`,bt=f.div`
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
`;const ve=b.memo(({type:e,left:t,img:a})=>{var o,p;const r=fe(u=>u.normalizedSchemasByType),n=(o=r[e])==null?void 0:o.primary_color,i=(p=r[e])==null?void 0:p.icon,l=i?`/svg-icons/${i}.svg`:"",c={iconStart:a||l,color:n??y.THING};return s.jsx(At,{style:{left:`${t}%`},children:s.jsx(be,{...c,label:e})})});ve.displayName="Marker";const be=b.memo(({iconStart:e,color:t,label:a})=>s.jsx(jt,{color:t,children:e&&s.jsx("img",{alt:a,className:"badge__img",onError:console.log,src:e})}));be.displayName="Badge";const jt=f(T).attrs({direction:"row"})`
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
`,At=f.div`
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
`,je=b.memo(({markers:e})=>{if(e.length===0)return null;const t=e.map(i=>i.start?new Date(i.start).getTime():0),a=Math.min(...t),n=Math.max(...t)-a;return s.jsx(s.Fragment,{children:e.map((i,l)=>{var h;const o=((i.start?new Date(i.start).getTime():0)-a)/n*100,p=(i==null?void 0:i.node_type)||"",u=((h=i==null?void 0:i.properties)==null?void 0:h.image_url)||"";return s.jsx(ve,{img:u,left:o,type:p},`${i.ref_id}_${l}`)})})});je.displayName="Markers";const Z=50,Ae=b.memo(({markers:e,height:t=56,showChart:a=!0,backgroundColor:r=y.primaryBlue})=>{const n=e.map(p=>p.start?new Date(p.start).getTime():0),i=Math.min(...n),c=Math.max(...n)-i,o=b.useMemo(()=>{if(e.length===0||c===0)return[];const p=c/Z,u=Array(Z).fill(0);return e.forEach(h=>{if(!h.start)return;const m=new Date(h.start).getTime(),d=Math.min(Z-1,Math.floor((m-i)/p));u[d]+=1}),u.map((h,m)=>({timestamp:i+p*m,value:h}))},[e,i,c]);return e.length===0?null:s.jsx(s.Fragment,{children:a&&o.length>0&&s.jsx("div",{children:s.jsx(Ze,{height:t,width:"100%",children:s.jsx(xt,{data:o,children:s.jsx(B,{dataKey:"value",fill:r,fillOpacity:.5,stroke:"transparent",type:"basis"})})})})})});Ae.displayName="ProgressChart";const Tt=({duration:e,markers:t,handleProgressChange:a,playingTime:r,tweetPlayingTime:n})=>{const i=oe(n).format("MMM D"),l=oe(n).format("h:mma"),c=Math.min(Math.max(r,0),100);return s.jsxs(_t,{children:[c?s.jsxs(Dt,{$progress:c,children:[s.jsx(Rt,{children:i}),s.jsx($t,{children:" - "}),s.jsx(Ct,{children:l})]}):null,s.jsx(Ot,{max:e,onChange:a,value:c,width:12}),s.jsx(St,{children:s.jsx(je,{markers:t})}),s.jsx(kt,{children:s.jsx(Ae,{markers:t})})]})},Pt=f(T)`
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  height: 96px;
  transform: translateY(-50%);
`,_t=f(T)`
  position: relative;
  flex: 1 1 100%;
  padding: 0;
  height: 100%;
  box-sizing: border-box;
  margin-right: 12px;

  &:hover {
    ${Pt} {
      display: block;
    }
  }
`,St=f(T)`
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
`,kt=f(T)`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 23px;
`,Dt=f.div`
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
`,Rt=f.span`
  display: inline-block;
  width: 45px;
  text-align: right;
`,$t=f.span`
  margin: 0 4px;
`,Ct=f.span`
  display: inline-block;
  width: 55px;
  text-align: left;
  font-variant-numeric: tabular-nums;
`,Ot=f(et)`
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
`,Et=({markers:e})=>{const t=$(x=>x.tweetPlayingTime),a=$(x=>x.setTweetPlayingTime),r=$(x=>x.setTweetIsPlaying),n=$(x=>x.setTweetDuration),i=$(x=>x.selectedTweets),l=$(x=>x.tweetDuration),c=$(x=>x.tweetIsPlaying),[o,p]=b.useState(0),[u,h]=b.useState(0),m=b.useRef(0);b.useEffect(()=>{var P,w,E,I;const x=e.map(R=>R.start?new Date(R.start).getTime():0);if((w=(P=i[0])==null?void 0:P.properties)!=null&&w.time_series){const R=((I=(E=i[0])==null?void 0:E.properties)==null?void 0:I.time_series).split(",").map(C=>Number(C)*1e3);x.push(...R)}const _=Math.min(...x),g=Math.max(...x),v=g-_;p(_),h(g),n(v)},[e,n,i]);const d=b.useRef(null),j=b.useRef(null),A=b.useCallback((x,_)=>{const g=Array.isArray(_)?_[0]:_,v=o+g/100*l;a(v)},[a,o,l]);b.useEffect(()=>{if(c){t>=u&&(a(o),m.current=o),j.current=Date.now();const x=t?(t-o)/l:0,_=Date.now()-x*q;j.current=_;const g=()=>{const v=Date.now()-(j.current??Date.now());if(v<q){const P=v/q,w=o+P*l;a(w),m.current=w,d.current=requestAnimationFrame(g)}else a(u),r(!1),m.current=u,d.current&&cancelAnimationFrame(d.current)};return d.current=requestAnimationFrame(g),()=>{d.current&&cancelAnimationFrame(d.current)}}return m.current=t,()=>{d.current&&(cancelAnimationFrame(d.current),d.current=null)}},[c,o,u,a,l,r,t]);const k=b.useCallback(()=>{t>=u&&(a(o),m.current=o)},[t,u,o,a]);return s.jsxs(It,{children:[s.jsx(we,{onPlaybackRestart:k}),s.jsx(Tt,{duration:100,handleProgressChange:A,markers:e,playingTime:(t-o)/l*100,tweetPlayingTime:t})]})},It=f(T).attrs({direction:"row",align:"center",justify:"space-between"})`
  padding: 20px;
  background: ${y.BG2};
  height: 96px;
  border-radius: 8px;
  box-sizing: border-box;
  margin-right: 4px;
`;function he(e){return ie({tag:"svg",attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm-80 168c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zm176 192H152c-21.2 0-21.2-32 0-32h192c21.2 0 21.2 32 0 32zm-16-128c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z"}}]})(e)}function Mt(e){return ie({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M0 56v240c0 13.255 10.745 24 24 24h80c13.255 0 24-10.745 24-24V56c0-13.255-10.745-24-24-24H24C10.745 32 0 42.745 0 56zm40 200c0-13.255 10.745-24 24-24s24 10.745 24 24-10.745 24-24 24-24-10.745-24-24zm272 256c-20.183 0-29.485-39.293-33.931-57.795-5.206-21.666-10.589-44.07-25.393-58.902-32.469-32.524-49.503-73.967-89.117-113.111a11.98 11.98 0 0 1-3.558-8.521V59.901c0-6.541 5.243-11.878 11.783-11.998 15.831-.29 36.694-9.079 52.651-16.178C256.189 17.598 295.709.017 343.995 0h2.844c42.777 0 93.363.413 113.774 29.737 8.392 12.057 10.446 27.034 6.148 44.632 16.312 17.053 25.063 48.863 16.382 74.757 17.544 23.432 19.143 56.132 9.308 79.469l.11.11c11.893 11.949 19.523 31.259 19.439 49.197-.156 30.352-26.157 58.098-59.553 58.098H350.723C358.03 364.34 384 388.132 384 430.548 384 504 336 512 312 512z"}}]})(e)}function Nt(e){return ie({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M104 224H24c-13.255 0-24 10.745-24 24v240c0 13.255 10.745 24 24 24h80c13.255 0 24-10.745 24-24V248c0-13.255-10.745-24-24-24zM64 472c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24zM384 81.452c0 42.416-25.97 66.208-33.277 94.548h101.723c33.397 0 59.397 27.746 59.553 58.098.084 17.938-7.546 37.249-19.439 49.197l-.11.11c9.836 23.337 8.237 56.037-9.308 79.469 8.681 25.895-.069 57.704-16.382 74.757 4.298 17.598 2.244 32.575-6.148 44.632C440.202 511.587 389.616 512 346.839 512l-2.845-.001c-48.287-.017-87.806-17.598-119.56-31.725-15.957-7.099-36.821-15.887-52.651-16.178-6.54-.12-11.783-5.457-11.783-11.998v-213.77c0-3.2 1.282-6.271 3.558-8.521 39.614-39.144 56.648-80.587 89.117-113.111 14.804-14.832 20.188-37.236 25.393-58.902C282.515 39.293 291.817 0 312 0c24 0 72 8 72 81.452z"}}]})(e)}const zt={impression_count:{label:"Impressions",formatter:(e,t)=>e.toLocaleString().split(",").at(t)},like_count:{label:"Likes",formatter:(e,t)=>e.toLocaleString().split(",").at(t)},reply_count:{label:"Replies",formatter:(e,t)=>e.toLocaleString().split(",").at(t)},retweet_count:{label:"Retweets",formatter:(e,t)=>e.toLocaleString().split(",").at(t)},quote_count:{label:"Quotes",formatter:(e,t)=>e.toLocaleString().split(",").at(t)},bookmark_count:{label:"Bookmarks",formatter:(e,t)=>e.toLocaleString().split(",").at(t)},analytics_location:{label:"Location",formatter:e=>e||"Unknown"},analytics_gender:{label:"Gender",formatter:e=>e||"Unknown"},followers:{label:"Followers",formatter:(e,t)=>e.toLocaleString().split(",").at(t)}},Lt=e=>e==null?s.jsx(he,{color:y.GRAY3}):e<=4?s.jsx(Mt,{color:"#ef4444"}):e>=7?s.jsx(Nt,{color:"#22c55e"}):s.jsx(he,{color:y.GRAY3}),Bt=({node:e,handleAnalyzeClick:t})=>{var l,c,o,p;const a=((l=e==null?void 0:e.properties)==null?void 0:l.followers)!==void 0&&((c=e==null?void 0:e.properties)==null?void 0:c.impression_count)!==void 0&&e.properties.impression_count!==0?(e.properties.impression_count/e.properties.followers).toFixed(2):"N/A",r=$(u=>u.tweetPlayingTime),n=(o=e==null?void 0:e.properties)!=null&&o.time_series?(e==null?void 0:e.properties.time_series).split(",").map(Number):[];let i=-1;if(r){const u=r>1e12?r/1e3:r;for(let h=0;h<n.length&&u>=n[h];h+=1)i=h}return s.jsxs(Wt,{children:[s.jsxs(T,{align:"center",direction:"row",justify:"space-between",mb:16,children:[s.jsx(Ft,{children:"Analytics"}),s.jsx(Yt,{onClick:u=>{u.stopPropagation(),t()},children:s.jsx(nt,{})})]}),s.jsxs(Gt,{children:[Object.entries(zt).map(([u,{label:h,formatter:m}])=>{var d;return((d=e==null?void 0:e.properties)==null?void 0:d[u])!==void 0?s.jsxs(ee,{children:[s.jsx("span",{children:h}),s.jsx(te,{children:m(e.properties[u],i)},i)]},u):null}),s.jsxs(ee,{children:[s.jsx("span",{children:"Views-to-followers"}),s.jsx(te,{children:a})]}),s.jsxs(ee,{children:[s.jsx("span",{children:"Sentiment"}),s.jsx(te,{children:Lt((p=e==null?void 0:e.properties)==null?void 0:p.analytics_sentiment_score)})]})]})]})},Wt=f.div`
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
`,Vt=Pe`
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
  animation: ${Vt} 0.3s ease;
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
`,Ht=({nodeId:e,handleAnalyzeClick:t})=>{const[a,r]=b.useState(null);b.useEffect(()=>{(async()=>{try{const m=await ke(e);r(m)}catch(m){console.error(m)}})()},[e]);const n=a?_e(a):null,{text:i,name:l,verified:c,image_url:o,twitter_handle:p}=n||{};let u="";return(n==null?void 0:n.node_type)==="Tweet"?u=`https://x.com/${p}/status/${n==null?void 0:n.tweet_id}`:(n==null?void 0:n.node_type)==="User"&&(u=`https://x.com/${p}`),s.jsx(Ut,{children:s.jsxs(Kt,{children:[s.jsx(Xt,{children:o?s.jsx(Se,{rounded:!0,size:58,src:o,type:"person"}):s.jsx(qt,{children:s.jsx(it,{})})}),s.jsxs(Qt,{children:[s.jsxs(Jt,{children:[s.jsxs(Zt,{children:[l&&s.jsx(er,{children:l}),!c&&s.jsx(nr,{children:s.jsx(rt,{})})]}),s.jsx(ir,{href:u,target:"_blank",children:s.jsx(at,{})})]}),p&&s.jsxs(tr,{children:["@",p]}),s.jsx(rr,{children:i}),a&&s.jsx(Bt,{handleAnalyzeClick:t,node:a})]})]})})},Ut=f(T)`
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
`,ar=b.lazy(()=>De(()=>import("./index-5c69f0ba.js"),["assets/index-5c69f0ba.js","assets/index-3fb06edb.js","assets/index-3165de01.css","assets/index-f38d013f.js","assets/SourcesTableIcon-d73b4b69.js","assets/index-d6c48c54.js","assets/CheckIcon-5a235f8d.js","assets/DeleteNodeIcon-96a11f80.js","assets/SoundIcon-5cfe54be.js","assets/SucessFeedBackIcon-3b89b4dc.js","assets/ClipLoader-718f5911.js","assets/TableRow-a47dbbfe.js"]).then(({TweetAnalyze:e})=>({default:e}))),sr=()=>{const e=$(o=>o.setSelectedTweet),t=$(o=>o.selectedTweet),{tweetId:a}=xe(),[r,n]=b.useState(""),{open:i}=Re("tweetAnalyze"),l=(a==null?void 0:a.split("&"))||[],c=o=>{i(),n(o)};return s.jsxs(cr,{align:"stretch",basis:"100%",grow:1,shrink:1,children:[l.length>1?s.jsx(or,{onClick:()=>{c("summary")},children:"Summary Report"}):null,l.map(o=>s.jsx(lr,{className:t===o?"selected":"",onClick:()=>e(o),children:s.jsx(Ht,{handleAnalyzeClick:()=>{c(o)},nodeId:o})},o)),s.jsx(ar,{tweetId:r})]})},or=f.button`
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
`,cr=f(T)(({theme:e})=>({position:"relative",display:"flex",padding:"0 20px 0 20px",background:"transparent",width:"100%",height:"calc(100vh - 180px)",overflow:"auto",[e.breakpoints.up("sm")]:{width:tt,gap:"10px"}})),lr=f(T)`
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
`,pr=[{ref_id:"positive",name:"Positive"},{ref_id:"negative",name:"Negative"},{ref_id:"neutral",name:"Neutral"}],ur=e=>{const t=e.edges.filter(r=>{var n;return((n=r==null?void 0:r.properties)==null?void 0:n.start)&&typeof r.properties.start=="string"}).map(r=>({source:r.source,target:r.target,start:r.properties.start}));return e.nodes.filter(r=>e.edges.some(n=>n.source===r.ref_id||n.target===r.ref_id)).map(r=>{const n=t.find(i=>r.ref_id===i.source||r.ref_id===i.target);return{...r,start:(n==null?void 0:n.start)||0}}).filter(r=>r&&typeof r.start=="string"&&r.node_type!=="Clip"&&r.node_type!=="Episode"&&r.node_type!=="Show")},Gr=()=>{const e=$e(d=>d.addNewNode),t=b.useRef(null),a=b.useRef(null),r=b.useRef(null),[n,i]=b.useState([]),{setSchemas:l}=fe(d=>d),c=$(d=>d.setSelectedTweets),o=$(d=>d.selectedTweet),p=$(d=>d.setSelectedTweet),u=Be(d=>d.setNeighbourhoods),h=Ce(),{tweetId:m}=xe();return b.useEffect(()=>{(async()=>{try{const j=await Ee();l(j.schemas.filter(A=>!A.is_deleted))}catch(j){console.error("Error fetching schema:",j)}})()},[l]),b.useEffect(()=>{u(pr)},[u]),b.useEffect(()=>{if(!o){const d=m==null?void 0:m.split("&")[0];d&&p(d)}},[o,m,p]),b.useEffect(()=>{o&&(async j=>{try{const A=await Ie(j),k=A.nodes.find(g=>g.ref_id===o);k&&(c([k]),e({nodes:[k],edges:[]}));const x=ur({nodes:A.nodes,edges:A.edges});i(x);const _=A.nodes.map(g=>{var v,P,w;return g.node_type==="Tweet"&&((v=g.properties)!=null&&v.sentiment)?((P=g.properties)==null?void 0:P.sentiment)<4?{...g,neighbourHood:"negative"}:((w=g.properties)==null?void 0:w.sentiment)>7?{...g,neighbourHood:"positive"}:{...g,neighbourHood:"neutral"}:g});r.current={nodes:_,edges:A.edges}}catch(A){h("/"),console.error(A)}})(o)},[e,h,o,c]),b.useEffect(()=>{const d=j=>{const{tweetPlayingTime:A,tweetDuration:k}=$.getState(),x=k/q*3e3;if(a.current!==null){if(j-a.current>1e3){if(r.current){const{nodes:g,edges:v}=r.current,P=A,[w,E]=v.reduce(([C,O],D)=>{var z;const M=typeof((z=D==null?void 0:D.properties)==null?void 0:z.start)=="string"?new Date(D.properties.start||0).getTime():0;return M!==0&&M<=P+x?C.push(D):O.push(D),[C,O]},[[],[]]),[I,R]=g.reduce(([C,O],D)=>(w.some(M=>M.target===D.ref_id||M.source===D.ref_id)?C.push(D):O.push(D),[C,O]),[[],[]]);r.current={nodes:R,edges:E},(I.length||w.length)&&e({nodes:I,edges:w})}a.current=j}}else a.current=j;t.current=requestAnimationFrame(d)};return t.current=requestAnimationFrame(d),()=>{t.current&&cancelAnimationFrame(t.current)}},[r,e]),s.jsxs(dr,{children:[s.jsx(mr,{direction:"row",children:s.jsxs(s.Fragment,{children:[s.jsxs(T,{children:[s.jsx(Oe,{}),s.jsx(sr,{})]}),s.jsx(hr,{children:s.jsx(T,{basis:"100%",grow:1,shrink:1,children:s.jsx(Me,{})})})]})}),s.jsx(fr,{children:s.jsx(Et,{markers:n})})]})},dr=f.div`
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
`;export{Gr as TweetMindset};
