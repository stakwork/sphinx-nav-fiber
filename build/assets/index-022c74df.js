import{r as c,at as gn,a1 as Mr,a2 as xn,a4 as qt,P as A,j as r,N as qr,M as Kr,O as Me,au as yn,a0 as we,V as ar,X as Qr,K as Jr,Y as Ve,Z as eo,av as bn,aw as vn,ax as to,a5 as ro,_ as ye,ay as wn,az as Kt,ah as _n,s as l,g as a,aq as Cn,aA as $t,i as ur,F as m,l as jn,c as ue,a as dt,h as Pe,p as pr,aB as oo,n as Sn,T as ve,B as _e,b as $e,aC as kn,q as it,z as no,aD as so,am as Pn,E as Ir,k as ao,C as io,v as $n,U as Lt,u as Ln,A as Tn,aE as On}from"./index-2f9ba739.js";import{h as St,k as An,l as En,m as Rn,e as hr,n as Mn,o as fr,p as mr,q as In,B as Nn,D as Bn,R as zn,S as Dn,r as Vn,A as Fn,s as Hn,g as Un,M as Wn,V as Yn,F as Gn,E as Zn,j as Xn,C as lo,a as qn}from"./index-b76e5e95.js";import{o as _t,k as Qt,l as Ct,m as Ee,u as Kn,i as Tt,b as co,c as uo,P as Qn,I as Jn,e as gr,a as po,v as Nr}from"./index-ee48d8c5.js";import{c as es,a as Jt,C as Ot}from"./ClipLoader-1d602055.js";import{S as ho}from"./Skeleton-7f749b14.js";import{S as xr}from"./index-4887c341.js";import{q as lt,o as fo,E as mo,s as ts,S as rs}from"./index-6364df48.js";import{useBriefDescriptionStore as os}from"./index-19cd56e4.js";import{C as ns}from"./CheckIcon-34970b68.js";import{u as ss,F as as,P as is}from"./Stack-d6553de8.js";import{S as ls,F as Qe}from"./FormControlLabel-fde9b184.js";import{c as yr}from"./createSvgIcon-9b8f84f8.js";import{p as cs}from"./isPlainObject-9fee9299.js";const ds={border:0,clip:"rect(0 0 0 0)",height:"1px",margin:-1,overflow:"hidden",padding:0,position:"absolute",whiteSpace:"nowrap",width:"1px"},us=ds;function ps(e,t,o=(n,s)=>n===s){return e.length===t.length&&e.every((n,s)=>o(n,t[s]))}const hs=2;function go(e,t){return e-t}function Je(e,t,o){return e==null?t:Math.min(Math.max(t,e),o)}function Br(e,t){var o;const{index:n}=(o=e.reduce((s,i,d)=>{const h=Math.abs(t-i);return s===null||h<s.distance||h===s.distance?{distance:h,index:d}:s},null))!=null?o:{};return n}function gt(e,t){if(t.current!==void 0&&e.changedTouches){const o=e;for(let n=0;n<o.changedTouches.length;n+=1){const s=o.changedTouches[n];if(s.identifier===t.current)return{x:s.clientX,y:s.clientY}}return!1}return{x:e.clientX,y:e.clientY}}function kt(e,t,o){return(e-t)*100/(o-t)}function fs(e,t,o){return(o-t)*e+t}function ms(e){if(Math.abs(e)<1){const o=e.toExponential().split("e-"),n=o[0].split(".")[1];return(n?n.length:0)+parseInt(o[1],10)}const t=e.toString().split(".")[1];return t?t.length:0}function gs(e,t,o){const n=Math.round((e-o)/t)*t+o;return Number(n.toFixed(ms(t)))}function zr({values:e,newValue:t,index:o}){const n=e.slice();return n[o]=t,n.sort(go)}function xt({sliderRef:e,activeIndex:t,setActive:o}){var n,s;const i=_t(e.current);if(!((n=e.current)!=null&&n.contains(i.activeElement))||Number(i==null||(s=i.activeElement)==null?void 0:s.getAttribute("data-index"))!==t){var d;(d=e.current)==null||d.querySelector(`[type="range"][data-index="${t}"]`).focus()}o&&o(t)}function yt(e,t){return typeof e=="number"&&typeof t=="number"?e===t:typeof e=="object"&&typeof t=="object"?ps(e,t):!1}const xs={horizontal:{offset:e=>({left:`${e}%`}),leap:e=>({width:`${e}%`})},"horizontal-reverse":{offset:e=>({right:`${e}%`}),leap:e=>({width:`${e}%`})},vertical:{offset:e=>({bottom:`${e}%`}),leap:e=>({height:`${e}%`})}},ys=e=>e;let bt;function er(){return bt===void 0&&(typeof CSS<"u"&&typeof CSS.supports=="function"?bt=CSS.supports("touch-action","none"):bt=!0),bt}function bs(e){const{"aria-labelledby":t,defaultValue:o,disabled:n=!1,disableSwap:s=!1,isRtl:i=!1,marks:d=!1,max:h=100,min:f=0,name:p,onChange:v,onChangeCommitted:b,orientation:y="horizontal",rootRef:P,scale:u=ys,step:x=1,tabIndex:S,value:T}=e,j=c.useRef(),[I,O]=c.useState(-1),[k,R]=c.useState(-1),[M,L]=c.useState(!1),w=c.useRef(0),[_,z]=ss({controlled:T,default:o??f,name:"Slider"}),V=v&&((g,C,$)=>{const N=g.nativeEvent||g,K=new N.constructor(N.type,N);Object.defineProperty(K,"target",{writable:!0,value:{value:C,name:p}}),v(K,C,$)}),oe=Array.isArray(_);let H=oe?_.slice().sort(go):[_];H=H.map(g=>Je(g,f,h));const J=d===!0&&x!==null?[...Array(Math.floor((h-f)/x)+1)].map((g,C)=>({value:f+x*C})):d||[],ne=J.map(g=>g.value),{isFocusVisibleRef:fe,onBlur:pe,onFocus:E,ref:Le}=gn(),[Fe,Ae]=c.useState(-1),se=c.useRef(),He=Mr(Le,se),Ie=Mr(P,He),je=g=>C=>{var $;const N=Number(C.currentTarget.getAttribute("data-index"));E(C),fe.current===!0&&Ae(N),R(N),g==null||($=g.onFocus)==null||$.call(g,C)},qe=g=>C=>{var $;pe(C),fe.current===!1&&Ae(-1),R(-1),g==null||($=g.onBlur)==null||$.call(g,C)};xn(()=>{if(n&&se.current.contains(document.activeElement)){var g;(g=document.activeElement)==null||g.blur()}},[n]),n&&I!==-1&&O(-1),n&&Fe!==-1&&Ae(-1);const Te=g=>C=>{var $;($=g.onChange)==null||$.call(g,C);const N=Number(C.currentTarget.getAttribute("data-index")),K=H[N],me=ne.indexOf(K);let D=C.target.valueAsNumber;if(J&&x==null){const Y=ne[ne.length-1];D>Y?D=Y:D<ne[0]?D=ne[0]:D=D<K?ne[me-1]:ne[me+1]}if(D=Je(D,f,h),oe){s&&(D=Je(D,H[N-1]||-1/0,H[N+1]||1/0));const Y=D;D=zr({values:H,newValue:D,index:N});let X=N;s||(X=D.indexOf(Y)),xt({sliderRef:se,activeIndex:X})}z(D),Ae(N),V&&!yt(D,_)&&V(C,D,N),b&&b(C,D)},Se=c.useRef();let F=y;i&&y==="horizontal"&&(F+="-reverse");const B=({finger:g,move:C=!1})=>{const{current:$}=se,{width:N,height:K,bottom:me,left:D}=$.getBoundingClientRect();let Y;F.indexOf("vertical")===0?Y=(me-g.y)/K:Y=(g.x-D)/N,F.indexOf("-reverse")!==-1&&(Y=1-Y);let X;if(X=fs(Y,f,h),x)X=gs(X,x,f);else{const Ke=Br(ne,X);X=ne[Ke]}X=Je(X,f,h);let ke=0;if(oe){C?ke=Se.current:ke=Br(H,X),s&&(X=Je(X,H[ke-1]||-1/0,H[ke+1]||1/0));const Ke=X;X=zr({values:H,newValue:X,index:ke}),s&&C||(ke=X.indexOf(Ke),Se.current=ke)}return{newValue:X,activeIndex:ke}},ee=qt(g=>{const C=gt(g,j);if(!C)return;if(w.current+=1,g.type==="mousemove"&&g.buttons===0){ae(g);return}const{newValue:$,activeIndex:N}=B({finger:C,move:!0});xt({sliderRef:se,activeIndex:N,setActive:O}),z($),!M&&w.current>hs&&L(!0),V&&!yt($,_)&&V(g,$,N)}),ae=qt(g=>{const C=gt(g,j);if(L(!1),!C)return;const{newValue:$}=B({finger:C,move:!0});O(-1),g.type==="touchend"&&R(-1),b&&b(g,$),j.current=void 0,W()}),U=qt(g=>{if(n)return;er()||g.preventDefault();const C=g.changedTouches[0];C!=null&&(j.current=C.identifier);const $=gt(g,j);if($!==!1){const{newValue:K,activeIndex:me}=B({finger:$});xt({sliderRef:se,activeIndex:me,setActive:O}),z(K),V&&!yt(K,_)&&V(g,K,me)}w.current=0;const N=_t(se.current);N.addEventListener("touchmove",ee),N.addEventListener("touchend",ae)}),W=c.useCallback(()=>{const g=_t(se.current);g.removeEventListener("mousemove",ee),g.removeEventListener("mouseup",ae),g.removeEventListener("touchmove",ee),g.removeEventListener("touchend",ae)},[ae,ee]);c.useEffect(()=>{const{current:g}=se;return g.addEventListener("touchstart",U,{passive:er()}),()=>{g.removeEventListener("touchstart",U,{passive:er()}),W()}},[W,U]),c.useEffect(()=>{n&&W()},[n,W]);const Ue=g=>C=>{var $;if(($=g.onMouseDown)==null||$.call(g,C),n||C.defaultPrevented||C.button!==0)return;C.preventDefault();const N=gt(C,j);if(N!==!1){const{newValue:me,activeIndex:D}=B({finger:N});xt({sliderRef:se,activeIndex:D,setActive:O}),z(me),V&&!yt(me,_)&&V(C,me,D)}w.current=0;const K=_t(se.current);K.addEventListener("mousemove",ee),K.addEventListener("mouseup",ae)},Ne=kt(oe?H[0]:f,f,h),Be=kt(H[H.length-1],f,h)-Ne,Bt=(g={})=>{const C=Qt(g),$={onMouseDown:Ue(C||{})},N=A({},C,$);return A({},g,{ref:Ie},N)},ie=g=>C=>{var $;($=g.onMouseOver)==null||$.call(g,C);const N=Number(C.currentTarget.getAttribute("data-index"));R(N)},We=g=>C=>{var $;($=g.onMouseLeave)==null||$.call(g,C),R(-1)};return{active:I,axis:F,axisProps:xs,dragging:M,focusedThumbIndex:Fe,getHiddenInputProps:(g={})=>{var C;const $=Qt(g),N={onChange:Te($||{}),onFocus:je($||{}),onBlur:qe($||{})},K=A({},$,N);return A({tabIndex:S,"aria-labelledby":t,"aria-orientation":y,"aria-valuemax":u(h),"aria-valuemin":u(f),name:p,type:"range",min:e.min,max:e.max,step:e.step===null&&e.marks?"any":(C=e.step)!=null?C:void 0,disabled:n},g,K,{style:A({},us,{direction:i?"rtl":"ltr",width:"100%",height:"100%"})})},getRootProps:Bt,getThumbProps:(g={})=>{const C=Qt(g),$={onMouseOver:ie(C||{}),onMouseLeave:We(C||{})};return A({},g,C,$)},marks:J,open:k,range:oe,rootRef:Ie,trackLeap:Be,trackOffset:Ne,values:H,getThumbStyle:g=>({pointerEvents:I!==-1&&I!==g?"none":void 0})}}const vs=yr(r.jsx("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),ws=yr(r.jsx("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),_s=yr(r.jsx("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox");function Cs(e){return Kr("MuiCheckbox",e)}const js=qr("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary","sizeSmall","sizeMedium"]),tr=js,Ss=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size","className"],ks=e=>{const{classes:t,indeterminate:o,color:n,size:s}=e,i={root:["root",o&&"indeterminate",`color${we(n)}`,`size${we(s)}`]},d=eo(i,Cs,t);return A({},t,d)},Ps=Me(ls,{shouldForwardProp:e=>yn(e)||e==="classes",name:"MuiCheckbox",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,o.indeterminate&&t.indeterminate,t[`size${we(o.size)}`],o.color!=="default"&&t[`color${we(o.color)}`]]}})(({theme:e,ownerState:t})=>A({color:(e.vars||e).palette.text.secondary},!t.disableRipple&&{"&:hover":{backgroundColor:e.vars?`rgba(${t.color==="default"?e.vars.palette.action.activeChannel:e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:ar(t.color==="default"?e.palette.action.active:e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},t.color!=="default"&&{[`&.${tr.checked}, &.${tr.indeterminate}`]:{color:(e.vars||e).palette[t.color].main},[`&.${tr.disabled}`]:{color:(e.vars||e).palette.action.disabled}})),$s=r.jsx(ws,{}),Ls=r.jsx(vs,{}),Ts=r.jsx(_s,{}),Os=c.forwardRef(function(t,o){var n,s;const i=Qr({props:t,name:"MuiCheckbox"}),{checkedIcon:d=$s,color:h="primary",icon:f=Ls,indeterminate:p=!1,indeterminateIcon:v=Ts,inputProps:b,size:y="medium",className:P}=i,u=Jr(i,Ss),x=p?v:f,S=p?v:d,T=A({},i,{color:h,indeterminate:p,size:y}),j=ks(T);return r.jsx(Ps,A({type:"checkbox",inputProps:A({"data-indeterminate":p},b),icon:c.cloneElement(x,{fontSize:(n=x.props.fontSize)!=null?n:y}),checkedIcon:c.cloneElement(S,{fontSize:(s=S.props.fontSize)!=null?s:y}),ownerState:T,ref:o,className:Ve(j.root,P)},u,{classes:j}))}),As=Os,Es=e=>!e||!Ct(e),Rs=Es;function Ms(e){return Kr("MuiSlider",e)}const Is=qr("MuiSlider",["root","active","colorPrimary","colorSecondary","colorError","colorInfo","colorSuccess","colorWarning","disabled","dragging","focusVisible","mark","markActive","marked","markLabel","markLabelActive","rail","sizeSmall","thumb","thumbColorPrimary","thumbColorSecondary","thumbColorError","thumbColorSuccess","thumbColorInfo","thumbColorWarning","track","trackInverted","trackFalse","thumbSizeSmall","valueLabel","valueLabelOpen","valueLabelCircle","valueLabelLabel","vertical"]),Ce=Is,Ns=e=>{const{open:t}=e;return{offset:Ve(t&&Ce.valueLabelOpen),circle:Ce.valueLabelCircle,label:Ce.valueLabelLabel}};function Bs(e){const{children:t,className:o,value:n}=e,s=Ns(e);return t?c.cloneElement(t,{className:Ve(t.props.className)},r.jsxs(c.Fragment,{children:[t.props.children,r.jsx("span",{className:Ve(s.offset,o),"aria-hidden":!0,children:r.jsx("span",{className:s.circle,children:r.jsx("span",{className:s.label,children:n})})})]})):null}const zs=["aria-label","aria-valuetext","aria-labelledby","component","components","componentsProps","color","classes","className","disableSwap","disabled","getAriaLabel","getAriaValueText","marks","max","min","name","onChange","onChangeCommitted","orientation","size","step","scale","slotProps","slots","tabIndex","track","value","valueLabelDisplay","valueLabelFormat"];function Dr(e){return e}const Ds=Me("span",{name:"MuiSlider",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,t[`color${we(o.color)}`],o.size!=="medium"&&t[`size${we(o.size)}`],o.marked&&t.marked,o.orientation==="vertical"&&t.vertical,o.track==="inverted"&&t.trackInverted,o.track===!1&&t.trackFalse]}})(({theme:e,ownerState:t})=>A({borderRadius:12,boxSizing:"content-box",display:"inline-block",position:"relative",cursor:"pointer",touchAction:"none",color:(e.vars||e).palette[t.color].main,WebkitTapHighlightColor:"transparent"},t.orientation==="horizontal"&&A({height:4,width:"100%",padding:"13px 0","@media (pointer: coarse)":{padding:"20px 0"}},t.size==="small"&&{height:2},t.marked&&{marginBottom:20}),t.orientation==="vertical"&&A({height:"100%",width:4,padding:"0 13px","@media (pointer: coarse)":{padding:"0 20px"}},t.size==="small"&&{width:2},t.marked&&{marginRight:44}),{"@media print":{colorAdjust:"exact"},[`&.${Ce.disabled}`]:{pointerEvents:"none",cursor:"default",color:(e.vars||e).palette.grey[400]},[`&.${Ce.dragging}`]:{[`& .${Ce.thumb}, & .${Ce.track}`]:{transition:"none"}}})),Vs=Me("span",{name:"MuiSlider",slot:"Rail",overridesResolver:(e,t)=>t.rail})(({ownerState:e})=>A({display:"block",position:"absolute",borderRadius:"inherit",backgroundColor:"currentColor",opacity:.38},e.orientation==="horizontal"&&{width:"100%",height:"inherit",top:"50%",transform:"translateY(-50%)"},e.orientation==="vertical"&&{height:"100%",width:"inherit",left:"50%",transform:"translateX(-50%)"},e.track==="inverted"&&{opacity:1})),Fs=Me("span",{name:"MuiSlider",slot:"Track",overridesResolver:(e,t)=>t.track})(({theme:e,ownerState:t})=>{const o=e.palette.mode==="light"?bn(e.palette[t.color].main,.62):vn(e.palette[t.color].main,.5);return A({display:"block",position:"absolute",borderRadius:"inherit",border:"1px solid currentColor",backgroundColor:"currentColor",transition:e.transitions.create(["left","width","bottom","height"],{duration:e.transitions.duration.shortest})},t.size==="small"&&{border:"none"},t.orientation==="horizontal"&&{height:"inherit",top:"50%",transform:"translateY(-50%)"},t.orientation==="vertical"&&{width:"inherit",left:"50%",transform:"translateX(-50%)"},t.track===!1&&{display:"none"},t.track==="inverted"&&{backgroundColor:e.vars?e.vars.palette.Slider[`${t.color}Track`]:o,borderColor:e.vars?e.vars.palette.Slider[`${t.color}Track`]:o})}),Hs=Me("span",{name:"MuiSlider",slot:"Thumb",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.thumb,t[`thumbColor${we(o.color)}`],o.size!=="medium"&&t[`thumbSize${we(o.size)}`]]}})(({theme:e,ownerState:t})=>A({position:"absolute",width:20,height:20,boxSizing:"border-box",borderRadius:"50%",outline:0,backgroundColor:"currentColor",display:"flex",alignItems:"center",justifyContent:"center",transition:e.transitions.create(["box-shadow","left","bottom"],{duration:e.transitions.duration.shortest})},t.size==="small"&&{width:12,height:12},t.orientation==="horizontal"&&{top:"50%",transform:"translate(-50%, -50%)"},t.orientation==="vertical"&&{left:"50%",transform:"translate(-50%, 50%)"},{"&:before":A({position:"absolute",content:'""',borderRadius:"inherit",width:"100%",height:"100%",boxShadow:(e.vars||e).shadows[2]},t.size==="small"&&{boxShadow:"none"}),"&::after":{position:"absolute",content:'""',borderRadius:"50%",width:42,height:42,top:"50%",left:"50%",transform:"translate(-50%, -50%)"},[`&:hover, &.${Ce.focusVisible}`]:{boxShadow:`0px 0px 0px 8px ${e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / 0.16)`:ar(e.palette[t.color].main,.16)}`,"@media (hover: none)":{boxShadow:"none"}},[`&.${Ce.active}`]:{boxShadow:`0px 0px 0px 14px ${e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / 0.16)`:ar(e.palette[t.color].main,.16)}`},[`&.${Ce.disabled}`]:{"&:hover":{boxShadow:"none"}}})),Us=Me(Bs,{name:"MuiSlider",slot:"ValueLabel",overridesResolver:(e,t)=>t.valueLabel})(({theme:e,ownerState:t})=>A({[`&.${Ce.valueLabelOpen}`]:{transform:`${t.orientation==="vertical"?"translateY(-50%)":"translateY(-100%)"} scale(1)`},zIndex:1,whiteSpace:"nowrap"},e.typography.body2,{fontWeight:500,transition:e.transitions.create(["transform"],{duration:e.transitions.duration.shortest}),transform:`${t.orientation==="vertical"?"translateY(-50%)":"translateY(-100%)"} scale(0)`,position:"absolute",backgroundColor:(e.vars||e).palette.grey[600],borderRadius:2,color:(e.vars||e).palette.common.white,display:"flex",alignItems:"center",justifyContent:"center",padding:"0.25rem 0.75rem"},t.orientation==="horizontal"&&{top:"-10px",transformOrigin:"bottom center","&:before":{position:"absolute",content:'""',width:8,height:8,transform:"translate(-50%, 50%) rotate(45deg)",backgroundColor:"inherit",bottom:0,left:"50%"}},t.orientation==="vertical"&&{right:t.size==="small"?"20px":"30px",top:"50%",transformOrigin:"right center","&:before":{position:"absolute",content:'""',width:8,height:8,transform:"translate(-50%, -50%) rotate(45deg)",backgroundColor:"inherit",right:-8,top:"50%"}},t.size==="small"&&{fontSize:e.typography.pxToRem(12),padding:"0.25rem 0.5rem"})),Ws=Me("span",{name:"MuiSlider",slot:"Mark",shouldForwardProp:e=>to(e)&&e!=="markActive",overridesResolver:(e,t)=>{const{markActive:o}=e;return[t.mark,o&&t.markActive]}})(({theme:e,ownerState:t,markActive:o})=>A({position:"absolute",width:2,height:2,borderRadius:1,backgroundColor:"currentColor"},t.orientation==="horizontal"&&{top:"50%",transform:"translate(-1px, -50%)"},t.orientation==="vertical"&&{left:"50%",transform:"translate(-50%, 1px)"},o&&{backgroundColor:(e.vars||e).palette.background.paper,opacity:.8})),Ys=Me("span",{name:"MuiSlider",slot:"MarkLabel",shouldForwardProp:e=>to(e)&&e!=="markLabelActive",overridesResolver:(e,t)=>t.markLabel})(({theme:e,ownerState:t,markLabelActive:o})=>A({},e.typography.body2,{color:(e.vars||e).palette.text.secondary,position:"absolute",whiteSpace:"nowrap"},t.orientation==="horizontal"&&{top:30,transform:"translateX(-50%)","@media (pointer: coarse)":{top:40}},t.orientation==="vertical"&&{left:36,transform:"translateY(50%)","@media (pointer: coarse)":{left:44}},o&&{color:(e.vars||e).palette.text.primary})),Gs=e=>{const{disabled:t,dragging:o,marked:n,orientation:s,track:i,classes:d,color:h,size:f}=e,p={root:["root",t&&"disabled",o&&"dragging",n&&"marked",s==="vertical"&&"vertical",i==="inverted"&&"trackInverted",i===!1&&"trackFalse",h&&`color${we(h)}`,f&&`size${we(f)}`],rail:["rail"],track:["track"],mark:["mark"],markActive:["markActive"],markLabel:["markLabel"],markLabelActive:["markLabelActive"],valueLabel:["valueLabel"],thumb:["thumb",t&&"disabled",f&&`thumbSize${we(f)}`,h&&`thumbColor${we(h)}`],active:["active"],disabled:["disabled"],focusVisible:["focusVisible"]};return eo(p,Ms,d)},Zs=({children:e})=>e,Xs=c.forwardRef(function(t,o){var n,s,i,d,h,f,p,v,b,y,P,u,x,S,T,j,I,O,k,R,M,L,w,_;const z=Qr({props:t,name:"MuiSlider"}),oe=ro().direction==="rtl",{"aria-label":H,"aria-valuetext":J,"aria-labelledby":ne,component:fe="span",components:pe={},componentsProps:E={},color:Le="primary",classes:Fe,className:Ae,disableSwap:se=!1,disabled:He=!1,getAriaLabel:Ie,getAriaValueText:je,marks:qe=!1,max:Te=100,min:Se=0,orientation:F="horizontal",size:B="medium",step:ee=1,scale:ae=Dr,slotProps:U,slots:W,track:Ue="normal",valueLabelDisplay:Ne="off",valueLabelFormat:Be=Dr}=z,Bt=Jr(z,zs),ie=A({},z,{isRtl:oe,max:Te,min:Se,classes:Fe,disabled:He,disableSwap:se,orientation:F,marks:qe,color:Le,size:B,step:ee,scale:ae,track:Ue,valueLabelDisplay:Ne,valueLabelFormat:Be}),{axisProps:We,getRootProps:Pr,getHiddenInputProps:$r,getThumbProps:Lr,open:g,active:C,axis:$,focusedThumbIndex:N,range:K,dragging:me,marks:D,values:Y,trackOffset:X,trackLeap:ke,getThumbStyle:Ke}=bs(A({},ie,{rootRef:o}));ie.marked=D.length>0&&D.some(q=>q.label),ie.dragging=me,ie.focusedThumbIndex=N;const ge=Gs(ie),zt=(n=(s=W==null?void 0:W.root)!=null?s:pe.Root)!=null?n:Ds,Tr=(i=(d=W==null?void 0:W.rail)!=null?d:pe.Rail)!=null?i:Vs,Or=(h=(f=W==null?void 0:W.track)!=null?f:pe.Track)!=null?h:Fs,Ar=(p=(v=W==null?void 0:W.thumb)!=null?v:pe.Thumb)!=null?p:Hs,Er=(b=(y=W==null?void 0:W.valueLabel)!=null?y:pe.ValueLabel)!=null?b:Us,Dt=(P=(u=W==null?void 0:W.mark)!=null?u:pe.Mark)!=null?P:Ws,Vt=(x=(S=W==null?void 0:W.markLabel)!=null?S:pe.MarkLabel)!=null?x:Ys,Rr=(T=(j=W==null?void 0:W.input)!=null?j:pe.Input)!=null?T:"input",Ft=(I=U==null?void 0:U.root)!=null?I:E.root,an=(O=U==null?void 0:U.rail)!=null?O:E.rail,Ht=(k=U==null?void 0:U.track)!=null?k:E.track,Ut=(R=U==null?void 0:U.thumb)!=null?R:E.thumb,Wt=(M=U==null?void 0:U.valueLabel)!=null?M:E.valueLabel,ln=(L=U==null?void 0:U.mark)!=null?L:E.mark,cn=(w=U==null?void 0:U.markLabel)!=null?w:E.markLabel,dn=(_=U==null?void 0:U.input)!=null?_:E.input,un=Ee({elementType:zt,getSlotProps:Pr,externalSlotProps:Ft,externalForwardedProps:Bt,additionalProps:A({},Rs(zt)&&{as:fe}),ownerState:A({},ie,Ft==null?void 0:Ft.ownerState),className:[ge.root,Ae]}),pn=Ee({elementType:Tr,externalSlotProps:an,ownerState:ie,className:ge.rail}),hn=Ee({elementType:Or,externalSlotProps:Ht,additionalProps:{style:A({},We[$].offset(X),We[$].leap(ke))},ownerState:A({},ie,Ht==null?void 0:Ht.ownerState),className:ge.track}),Yt=Ee({elementType:Ar,getSlotProps:Lr,externalSlotProps:Ut,ownerState:A({},ie,Ut==null?void 0:Ut.ownerState),className:ge.thumb}),fn=Ee({elementType:Er,externalSlotProps:Wt,ownerState:A({},ie,Wt==null?void 0:Wt.ownerState),className:ge.valueLabel}),Gt=Ee({elementType:Dt,externalSlotProps:ln,ownerState:ie,className:ge.mark}),Zt=Ee({elementType:Vt,externalSlotProps:cn,ownerState:ie,className:ge.markLabel}),mn=Ee({elementType:Rr,getSlotProps:$r,externalSlotProps:dn,ownerState:ie});return r.jsxs(zt,A({},un,{children:[r.jsx(Tr,A({},pn)),r.jsx(Or,A({},hn)),D.filter(q=>q.value>=Se&&q.value<=Te).map((q,te)=>{const Xt=kt(q.value,Se,Te),mt=We[$].offset(Xt);let Oe;return Ue===!1?Oe=Y.indexOf(q.value)!==-1:Oe=Ue==="normal"&&(K?q.value>=Y[0]&&q.value<=Y[Y.length-1]:q.value<=Y[0])||Ue==="inverted"&&(K?q.value<=Y[0]||q.value>=Y[Y.length-1]:q.value>=Y[0]),r.jsxs(c.Fragment,{children:[r.jsx(Dt,A({"data-index":te},Gt,!Ct(Dt)&&{markActive:Oe},{style:A({},mt,Gt.style),className:Ve(Gt.className,Oe&&ge.markActive)})),q.label!=null?r.jsx(Vt,A({"aria-hidden":!0,"data-index":te},Zt,!Ct(Vt)&&{markLabelActive:Oe},{style:A({},mt,Zt.style),className:Ve(ge.markLabel,Zt.className,Oe&&ge.markLabelActive),children:q.label})):null]},te)}),Y.map((q,te)=>{const Xt=kt(q,Se,Te),mt=We[$].offset(Xt),Oe=Ne==="off"?Zs:Er;return r.jsx(Oe,A({},!Ct(Oe)&&{valueLabelFormat:Be,valueLabelDisplay:Ne,value:typeof Be=="function"?Be(ae(q),te):Be,index:te,open:g===te||C===te||Ne==="on",disabled:He},fn,{children:r.jsx(Ar,A({"data-index":te},Yt,{className:Ve(ge.thumb,Yt.className,C===te&&ge.active,N===te&&ge.focusVisible),style:A({},mt,Ke(te),Yt.style),children:r.jsx(Rr,A({"data-index":te,"aria-label":Ie?Ie(te):H,"aria-valuenow":ae(q),"aria-labelledby":ne,"aria-valuetext":je?je(ae(q),te):J,value:Y[te]},mn))}))}),te)})]}))}),At=Xs,qs=(e,t="down")=>{const o=ro(),[n,s]=c.useState(!1),i=o.breakpoints[t](e).split("@media")[1].trim();return c.useEffect(()=>{const d=()=>{const{matches:h}=window.matchMedia(i);s(h)};return d(),window.addEventListener("resize",d),()=>window.removeEventListener("resize",d)},[i]),n},Ks=e=>e.filter(t=>t.tldr).length>=2&&e.some(t=>t.audio_EN);function Qs(e){return e.tldr_topic??e.name}var Pt=globalThis&&globalThis.__assign||function(){return Pt=Object.assign||function(e){for(var t,o=1,n=arguments.length;o<n;o++){t=arguments[o];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e},Pt.apply(this,arguments)},Js=globalThis&&globalThis.__rest||function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(o[n[s]]=e[n[s]]);return o},ea=es("BeatLoader","50% {transform: scale(0.75);opacity: 0.2} 100% {transform: scale(1);opacity: 1}","beat");function ta(e){var t=e.loading,o=t===void 0?!0:t,n=e.color,s=n===void 0?"#000000":n,i=e.speedMultiplier,d=i===void 0?1:i,h=e.cssOverride,f=h===void 0?{}:h,p=e.size,v=p===void 0?15:p,b=e.margin,y=b===void 0?2:b,P=Js(e,["loading","color","speedMultiplier","cssOverride","size","margin"]),u=Pt({display:"inherit"},f),x=function(S){return{display:"inline-block",backgroundColor:s,width:Jt(v),height:Jt(v),margin:Jt(y),borderRadius:"100%",animation:"".concat(ea," ").concat(.7/d,"s ").concat(S%2?"0s":"".concat(.35/d,"s")," infinite linear"),animationFillMode:"both"}};return o?c.createElement("span",Pt({style:u},P),c.createElement("span",{style:x(1)}),c.createElement("span",{style:x(2)}),c.createElement("span",{style:x(3)})):null}var ra=function(t,o,n){var s=document.head||document.getElementsByTagName("head")[0],i=document.createElement("script");typeof o=="function"&&(n=o,o={}),o=o||{},n=n||function(){},i.type=o.type||"text/javascript",i.charset=o.charset||"utf8",i.async="async"in o?!!o.async:!0,i.src=t,o.attrs&&oa(i,o.attrs),o.text&&(i.text=""+o.text);var d="onload"in i?Vr:na;d(i,n),i.onload||Vr(i,n),s.appendChild(i)};function oa(e,t){for(var o in t)e.setAttribute(o,t[o])}function Vr(e,t){e.onload=function(){this.onerror=this.onload=null,t(null,e)},e.onerror=function(){this.onerror=this.onload=null,t(new Error("Failed to load "+this.src),e)}}function na(e,t){e.onreadystatechange=function(){this.readyState!="complete"&&this.readyState!="loaded"||(this.onreadystatechange=null,t(null,e))}}var sa=function(t){return aa(t)&&!ia(t)};function aa(e){return!!e&&typeof e=="object"}function ia(e){var t=Object.prototype.toString.call(e);return t==="[object RegExp]"||t==="[object Date]"||da(e)}var la=typeof Symbol=="function"&&Symbol.for,ca=la?Symbol.for("react.element"):60103;function da(e){return e.$$typeof===ca}function ua(e){return Array.isArray(e)?[]:{}}function ct(e,t){return t.clone!==!1&&t.isMergeableObject(e)?Xe(ua(e),e,t):e}function pa(e,t,o){return e.concat(t).map(function(n){return ct(n,o)})}function ha(e,t){if(!t.customMerge)return Xe;var o=t.customMerge(e);return typeof o=="function"?o:Xe}function fa(e){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e).filter(function(t){return Object.propertyIsEnumerable.call(e,t)}):[]}function Fr(e){return Object.keys(e).concat(fa(e))}function xo(e,t){try{return t in e}catch{return!1}}function ma(e,t){return xo(e,t)&&!(Object.hasOwnProperty.call(e,t)&&Object.propertyIsEnumerable.call(e,t))}function ga(e,t,o){var n={};return o.isMergeableObject(e)&&Fr(e).forEach(function(s){n[s]=ct(e[s],o)}),Fr(t).forEach(function(s){ma(e,s)||(xo(e,s)&&o.isMergeableObject(t[s])?n[s]=ha(s,o)(e[s],t[s],o):n[s]=ct(t[s],o))}),n}function Xe(e,t,o){o=o||{},o.arrayMerge=o.arrayMerge||pa,o.isMergeableObject=o.isMergeableObject||sa,o.cloneUnlessOtherwiseSpecified=ct;var n=Array.isArray(t),s=Array.isArray(e),i=n===s;return i?n?o.arrayMerge(e,t,o):ga(e,t,o):ct(t,o)}Xe.all=function(t,o){if(!Array.isArray(t))throw new Error("first argument should be an array");return t.reduce(function(n,s){return Xe(n,s,o)},{})};var xa=Xe,yo=xa,ya=Object.create,Et=Object.defineProperty,ba=Object.getOwnPropertyDescriptor,va=Object.getOwnPropertyNames,wa=Object.getPrototypeOf,_a=Object.prototype.hasOwnProperty,Ca=(e,t)=>{for(var o in t)Et(e,o,{get:t[o],enumerable:!0})},bo=(e,t,o,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of va(t))!_a.call(e,s)&&s!==o&&Et(e,s,{get:()=>t[s],enumerable:!(n=ba(t,s))||n.enumerable});return e},br=(e,t,o)=>(o=e!=null?ya(wa(e)):{},bo(t||!e||!e.__esModule?Et(o,"default",{value:e,enumerable:!0}):o,e)),ja=e=>bo(Et({},"__esModule",{value:!0}),e),vo={};Ca(vo,{callPlayer:()=>Da,getConfig:()=>Ba,getSDK:()=>Na,isBlobUrl:()=>Fa,isMediaStream:()=>Va,lazy:()=>$a,omit:()=>za,parseEndTime:()=>Ra,parseStartTime:()=>Ea,queryString:()=>Ia,randomString:()=>Ma,supportsWebKitPresentationMode:()=>Ha});var Rt=ja(vo),Sa=br(c),ka=br(ra),Pa=br(yo);const $a=e=>Sa.default.lazy(async()=>{const t=await e();return typeof t.default=="function"?t:t.default}),La=/[?&#](?:start|t)=([0-9hms]+)/,Ta=/[?&#]end=([0-9hms]+)/,ir=/(\d+)(h|m|s)/g,Oa=/^\d+$/;function wo(e,t){if(e instanceof Array)return;const o=e.match(t);if(o){const n=o[1];if(n.match(ir))return Aa(n);if(Oa.test(n))return parseInt(n)}}function Aa(e){let t=0,o=ir.exec(e);for(;o!==null;){const[,n,s]=o;s==="h"&&(t+=parseInt(n,10)*60*60),s==="m"&&(t+=parseInt(n,10)*60),s==="s"&&(t+=parseInt(n,10)),o=ir.exec(e)}return t}function Ea(e){return wo(e,La)}function Ra(e){return wo(e,Ta)}function Ma(){return Math.random().toString(36).substr(2,5)}function Ia(e){return Object.keys(e).map(t=>`${t}=${e[t]}`).join("&")}function rr(e){return window[e]?window[e]:window.exports&&window.exports[e]?window.exports[e]:window.module&&window.module.exports&&window.module.exports[e]?window.module.exports[e]:null}const Ye={},Na=function(t,o,n=null,s=()=>!0,i=ka.default){const d=rr(o);return d&&s(d)?Promise.resolve(d):new Promise((h,f)=>{if(Ye[t]){Ye[t].push({resolve:h,reject:f});return}Ye[t]=[{resolve:h,reject:f}];const p=v=>{Ye[t].forEach(b=>b.resolve(v))};if(n){const v=window[n];window[n]=function(){v&&v(),p(rr(o))}}i(t,v=>{v?(Ye[t].forEach(b=>b.reject(v)),Ye[t]=null):n||p(rr(o))})})};function Ba(e,t){return(0,Pa.default)(t.config,e.config)}function za(e,...t){const o=[].concat(...t),n={},s=Object.keys(e);for(const i of s)o.indexOf(i)===-1&&(n[i]=e[i]);return n}function Da(e,...t){if(!this.player||!this.player[e]){let o=`ReactPlayer: ${this.constructor.displayName} player could not call %c${e}%c – `;return this.player?this.player[e]||(o+="The method was not available"):o+="The player was not available",console.warn(o,"font-weight: bold",""),null}return this.player[e](...t)}function Va(e){return typeof window<"u"&&typeof window.MediaStream<"u"&&e instanceof window.MediaStream}function Fa(e){return/^blob:/.test(e)}function Ha(e=document.createElement("video")){const t=/iPhone|iPod/.test(navigator.userAgent)===!1;return e.webkitSupportsPresentationMode&&typeof e.webkitSetPresentationMode=="function"&&t}var vr=Object.defineProperty,Ua=Object.getOwnPropertyDescriptor,Wa=Object.getOwnPropertyNames,Ya=Object.prototype.hasOwnProperty,Ga=(e,t)=>{for(var o in t)vr(e,o,{get:t[o],enumerable:!0})},Za=(e,t,o,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of Wa(t))!Ya.call(e,s)&&s!==o&&vr(e,s,{get:()=>t[s],enumerable:!(n=Ua(t,s))||n.enumerable});return e},Xa=e=>Za(vr({},"__esModule",{value:!0}),e),_o={};Ga(_o,{AUDIO_EXTENSIONS:()=>wr,DASH_EXTENSIONS:()=>Mo,FLV_EXTENSIONS:()=>Io,HLS_EXTENSIONS:()=>Cr,MATCH_URL_DAILYMOTION:()=>Oo,MATCH_URL_FACEBOOK:()=>So,MATCH_URL_FACEBOOK_WATCH:()=>ko,MATCH_URL_KALTURA:()=>Ro,MATCH_URL_MIXCLOUD:()=>Ao,MATCH_URL_SOUNDCLOUD:()=>Co,MATCH_URL_STREAMABLE:()=>Po,MATCH_URL_TWITCH_CHANNEL:()=>To,MATCH_URL_TWITCH_VIDEO:()=>Lo,MATCH_URL_VIDYARD:()=>Eo,MATCH_URL_VIMEO:()=>jo,MATCH_URL_WISTIA:()=>$o,MATCH_URL_YOUTUBE:()=>lr,VIDEO_EXTENSIONS:()=>_r,canPlay:()=>Ka});var qa=Xa(_o),Hr=Rt;const lr=/(?:youtu\.be\/|youtube(?:-nocookie|education)?\.com\/(?:embed\/|v\/|watch\/|watch\?v=|watch\?.+&v=|shorts\/|live\/))((\w|-){11})|youtube\.com\/playlist\?list=|youtube\.com\/user\//,Co=/(?:soundcloud\.com|snd\.sc)\/[^.]+$/,jo=/vimeo\.com\/(?!progressive_redirect).+/,So=/^https?:\/\/(www\.)?facebook\.com.*\/(video(s)?|watch|story)(\.php?|\/).+$/,ko=/^https?:\/\/fb\.watch\/.+$/,Po=/streamable\.com\/([a-z0-9]+)$/,$o=/(?:wistia\.(?:com|net)|wi\.st)\/(?:medias|embed)\/(?:iframe\/)?([^?]+)/,Lo=/(?:www\.|go\.)?twitch\.tv\/videos\/(\d+)($|\?)/,To=/(?:www\.|go\.)?twitch\.tv\/([a-zA-Z0-9_]+)($|\?)/,Oo=/^(?:(?:https?):)?(?:\/\/)?(?:www\.)?(?:(?:dailymotion\.com(?:\/embed)?\/video)|dai\.ly)\/([a-zA-Z0-9]+)(?:_[\w_-]+)?(?:[\w.#_-]+)?/,Ao=/mixcloud\.com\/([^/]+\/[^/]+)/,Eo=/vidyard.com\/(?:watch\/)?([a-zA-Z0-9-_]+)/,Ro=/^https?:\/\/[a-zA-Z]+\.kaltura.(com|org)\/p\/([0-9]+)\/sp\/([0-9]+)00\/embedIframeJs\/uiconf_id\/([0-9]+)\/partner_id\/([0-9]+)(.*)entry_id.([a-zA-Z0-9-_].*)$/,wr=/\.(m4a|m4b|mp4a|mpga|mp2|mp2a|mp3|m2a|m3a|wav|weba|aac|oga|spx)($|\?)/i,_r=/\.(mp4|og[gv]|webm|mov|m4v)(#t=[,\d+]+)?($|\?)/i,Cr=/\.(m3u8)($|\?)/i,Mo=/\.(mpd)($|\?)/i,Io=/\.(flv)($|\?)/i,cr=e=>{if(e instanceof Array){for(const t of e)if(typeof t=="string"&&cr(t)||cr(t.src))return!0;return!1}return(0,Hr.isMediaStream)(e)||(0,Hr.isBlobUrl)(e)?!0:wr.test(e)||_r.test(e)||Cr.test(e)||Mo.test(e)||Io.test(e)},Ka={youtube:e=>e instanceof Array?e.every(t=>lr.test(t)):lr.test(e),soundcloud:e=>Co.test(e)&&!wr.test(e),vimeo:e=>jo.test(e)&&!_r.test(e)&&!Cr.test(e),facebook:e=>So.test(e)||ko.test(e),streamable:e=>Po.test(e),wistia:e=>$o.test(e),twitch:e=>Lo.test(e)||To.test(e),dailymotion:e=>Oo.test(e),mixcloud:e=>Ao.test(e),vidyard:e=>Eo.test(e),kaltura:e=>Ro.test(e),file:cr};var jr=Object.defineProperty,Qa=Object.getOwnPropertyDescriptor,Ja=Object.getOwnPropertyNames,ei=Object.prototype.hasOwnProperty,ti=(e,t)=>{for(var o in t)jr(e,o,{get:t[o],enumerable:!0})},ri=(e,t,o,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of Ja(t))!ei.call(e,s)&&s!==o&&jr(e,s,{get:()=>t[s],enumerable:!(n=Qa(t,s))||n.enumerable});return e},oi=e=>ri(jr({},"__esModule",{value:!0}),e),No={};ti(No,{default:()=>si});var ni=oi(No),xe=Rt,he=qa,si=[{key:"youtube",name:"YouTube",canPlay:he.canPlay.youtube,lazyPlayer:(0,xe.lazy)(()=>ye(()=>import("./YouTube-6785578d.js").then(e=>e.Y),["assets/YouTube-6785578d.js","assets/index-2f9ba739.js","assets/index-b4d03b7b.css"]))},{key:"soundcloud",name:"SoundCloud",canPlay:he.canPlay.soundcloud,lazyPlayer:(0,xe.lazy)(()=>ye(()=>import("./SoundCloud-3bc98147.js").then(e=>e.S),["assets/SoundCloud-3bc98147.js","assets/index-2f9ba739.js","assets/index-b4d03b7b.css"]))},{key:"vimeo",name:"Vimeo",canPlay:he.canPlay.vimeo,lazyPlayer:(0,xe.lazy)(()=>ye(()=>import("./Vimeo-031c6594.js").then(e=>e.V),["assets/Vimeo-031c6594.js","assets/index-2f9ba739.js","assets/index-b4d03b7b.css"]))},{key:"facebook",name:"Facebook",canPlay:he.canPlay.facebook,lazyPlayer:(0,xe.lazy)(()=>ye(()=>import("./Facebook-1da71253.js").then(e=>e.F),["assets/Facebook-1da71253.js","assets/index-2f9ba739.js","assets/index-b4d03b7b.css"]))},{key:"streamable",name:"Streamable",canPlay:he.canPlay.streamable,lazyPlayer:(0,xe.lazy)(()=>ye(()=>import("./Streamable-e115f4a3.js").then(e=>e.S),["assets/Streamable-e115f4a3.js","assets/index-2f9ba739.js","assets/index-b4d03b7b.css"]))},{key:"wistia",name:"Wistia",canPlay:he.canPlay.wistia,lazyPlayer:(0,xe.lazy)(()=>ye(()=>import("./Wistia-92f669f3.js").then(e=>e.W),["assets/Wistia-92f669f3.js","assets/index-2f9ba739.js","assets/index-b4d03b7b.css"]))},{key:"twitch",name:"Twitch",canPlay:he.canPlay.twitch,lazyPlayer:(0,xe.lazy)(()=>ye(()=>import("./Twitch-37664457.js").then(e=>e.T),["assets/Twitch-37664457.js","assets/index-2f9ba739.js","assets/index-b4d03b7b.css"]))},{key:"dailymotion",name:"DailyMotion",canPlay:he.canPlay.dailymotion,lazyPlayer:(0,xe.lazy)(()=>ye(()=>import("./DailyMotion-dadbe14e.js").then(e=>e.D),["assets/DailyMotion-dadbe14e.js","assets/index-2f9ba739.js","assets/index-b4d03b7b.css"]))},{key:"mixcloud",name:"Mixcloud",canPlay:he.canPlay.mixcloud,lazyPlayer:(0,xe.lazy)(()=>ye(()=>import("./Mixcloud-b2711cfe.js").then(e=>e.M),["assets/Mixcloud-b2711cfe.js","assets/index-2f9ba739.js","assets/index-b4d03b7b.css"]))},{key:"vidyard",name:"Vidyard",canPlay:he.canPlay.vidyard,lazyPlayer:(0,xe.lazy)(()=>ye(()=>import("./Vidyard-0cf059ca.js").then(e=>e.V),["assets/Vidyard-0cf059ca.js","assets/index-2f9ba739.js","assets/index-b4d03b7b.css"]))},{key:"kaltura",name:"Kaltura",canPlay:he.canPlay.kaltura,lazyPlayer:(0,xe.lazy)(()=>ye(()=>import("./Kaltura-98b5249c.js").then(e=>e.K),["assets/Kaltura-98b5249c.js","assets/index-2f9ba739.js","assets/index-b4d03b7b.css"]))},{key:"file",name:"FilePlayer",canPlay:he.canPlay.file,canEnablePIP:e=>he.canPlay.file(e)&&(document.pictureInPictureEnabled||(0,xe.supportsWebKitPresentationMode)())&&!he.AUDIO_EXTENSIONS.test(e),lazyPlayer:(0,xe.lazy)(()=>ye(()=>import("./FilePlayer-2e0967a4.js").then(e=>e.F),["assets/FilePlayer-2e0967a4.js","assets/index-2f9ba739.js","assets/index-b4d03b7b.css"]))}],Ur=Number.isNaN||function(t){return typeof t=="number"&&t!==t};function ai(e,t){return!!(e===t||Ur(e)&&Ur(t))}function ii(e,t){if(e.length!==t.length)return!1;for(var o=0;o<e.length;o++)if(!ai(e[o],t[o]))return!1;return!0}function li(e,t){t===void 0&&(t=ii);var o,n=[],s,i=!1;function d(){for(var h=[],f=0;f<arguments.length;f++)h[f]=arguments[f];return i&&o===this&&t(h,n)||(s=e.apply(this,h),i=!0,o=this,n=h),s}return d}const ci=Object.freeze(Object.defineProperty({__proto__:null,default:li},Symbol.toStringTag,{value:"Module"})),di=wn(ci);var ui=typeof Element<"u",pi=typeof Map=="function",hi=typeof Set=="function",fi=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function jt(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){if(e.constructor!==t.constructor)return!1;var o,n,s;if(Array.isArray(e)){if(o=e.length,o!=t.length)return!1;for(n=o;n--!==0;)if(!jt(e[n],t[n]))return!1;return!0}var i;if(pi&&e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(i=e.entries();!(n=i.next()).done;)if(!t.has(n.value[0]))return!1;for(i=e.entries();!(n=i.next()).done;)if(!jt(n.value[1],t.get(n.value[0])))return!1;return!0}if(hi&&e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(i=e.entries();!(n=i.next()).done;)if(!t.has(n.value[0]))return!1;return!0}if(fi&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(t)){if(o=e.length,o!=t.length)return!1;for(n=o;n--!==0;)if(e[n]!==t[n])return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf&&typeof e.valueOf=="function"&&typeof t.valueOf=="function")return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString&&typeof e.toString=="function"&&typeof t.toString=="function")return e.toString()===t.toString();if(s=Object.keys(e),o=s.length,o!==Object.keys(t).length)return!1;for(n=o;n--!==0;)if(!Object.prototype.hasOwnProperty.call(t,s[n]))return!1;if(ui&&e instanceof Element)return!1;for(n=o;n--!==0;)if(!((s[n]==="_owner"||s[n]==="__v"||s[n]==="__o")&&e.$$typeof)&&!jt(e[s[n]],t[s[n]]))return!1;return!0}return e!==e&&t!==t}var Bo=function(t,o){try{return jt(t,o)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}},mi=Object.create,Mt=Object.defineProperty,gi=Object.getOwnPropertyDescriptor,xi=Object.getOwnPropertyNames,yi=Object.getPrototypeOf,bi=Object.prototype.hasOwnProperty,vi=(e,t)=>{for(var o in t)Mt(e,o,{get:t[o],enumerable:!0})},zo=(e,t,o,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of xi(t))!bi.call(e,s)&&s!==o&&Mt(e,s,{get:()=>t[s],enumerable:!(n=gi(t,s))||n.enumerable});return e},wi=(e,t,o)=>(o=e!=null?mi(yi(e)):{},zo(t||!e||!e.__esModule?Mt(o,"default",{value:e,enumerable:!0}):o,e)),_i=e=>zo(Mt({},"__esModule",{value:!0}),e),Do={};vi(Do,{defaultProps:()=>Si,propTypes:()=>ji});var Vo=_i(Do),Ci=wi(cs);const{string:le,bool:ce,number:Ge,array:or,oneOfType:et,shape:be,object:de,func:Q,node:Wr}=Ci.default,ji={url:et([le,or,de]),playing:ce,loop:ce,controls:ce,volume:Ge,muted:ce,playbackRate:Ge,width:et([le,Ge]),height:et([le,Ge]),style:de,progressInterval:Ge,playsinline:ce,pip:ce,stopOnUnmount:ce,light:et([ce,le,de]),playIcon:Wr,previewTabIndex:Ge,fallback:Wr,oEmbedUrl:le,wrapper:et([le,Q,be({render:Q.isRequired})]),config:be({soundcloud:be({options:de}),youtube:be({playerVars:de,embedOptions:de,onUnstarted:Q}),facebook:be({appId:le,version:le,playerId:le,attributes:de}),dailymotion:be({params:de}),vimeo:be({playerOptions:de,title:le}),file:be({attributes:de,tracks:or,forceVideo:ce,forceAudio:ce,forceHLS:ce,forceSafariHLS:ce,forceDisableHls:ce,forceDASH:ce,forceFLV:ce,hlsOptions:de,hlsVersion:le,dashVersion:le,flvVersion:le}),wistia:be({options:de,playerId:le,customControls:or}),mixcloud:be({options:de}),twitch:be({options:de,playerId:le}),vidyard:be({options:de})}),onReady:Q,onStart:Q,onPlay:Q,onPause:Q,onBuffer:Q,onBufferEnd:Q,onEnded:Q,onError:Q,onDuration:Q,onSeek:Q,onPlaybackRateChange:Q,onPlaybackQualityChange:Q,onProgress:Q,onClickPreview:Q,onEnablePIP:Q,onDisablePIP:Q},re=()=>{},Si={playing:!1,loop:!1,controls:!1,volume:null,muted:!1,playbackRate:1,width:"640px",height:"360px",style:{},progressInterval:1e3,playsinline:!1,pip:!1,stopOnUnmount:!0,light:!1,fallback:null,wrapper:"div",previewTabIndex:0,oEmbedUrl:"https://noembed.com/embed?url={url}",config:{soundcloud:{options:{visual:!0,buying:!1,liking:!1,download:!1,sharing:!1,show_comments:!1,show_playcount:!1}},youtube:{playerVars:{playsinline:1,showinfo:0,rel:0,iv_load_policy:3,modestbranding:1},embedOptions:{},onUnstarted:re},facebook:{appId:"1309697205772819",version:"v3.3",playerId:null,attributes:{}},dailymotion:{params:{api:1,"endscreen-enable":!1}},vimeo:{playerOptions:{autopause:!1,byline:!1,portrait:!1,title:!1},title:null},file:{attributes:{},tracks:[],forceVideo:!1,forceAudio:!1,forceHLS:!1,forceDASH:!1,forceFLV:!1,hlsOptions:{},hlsVersion:"1.1.4",dashVersion:"3.1.3",flvVersion:"1.5.0",forceDisableHls:!1},wistia:{options:{},playerId:null,customControls:null},mixcloud:{options:{hide_cover:1}},twitch:{options:{},playerId:null},vidyard:{options:{}}},onReady:re,onStart:re,onPlay:re,onPause:re,onBuffer:re,onBufferEnd:re,onEnded:re,onError:re,onDuration:re,onSeek:re,onPlaybackRateChange:re,onPlaybackQualityChange:re,onProgress:re,onClickPreview:re,onEnablePIP:re,onDisablePIP:re};var ki=Object.create,ut=Object.defineProperty,Pi=Object.getOwnPropertyDescriptor,$i=Object.getOwnPropertyNames,Li=Object.getPrototypeOf,Ti=Object.prototype.hasOwnProperty,Oi=(e,t,o)=>t in e?ut(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,Ai=(e,t)=>{for(var o in t)ut(e,o,{get:t[o],enumerable:!0})},Fo=(e,t,o,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of $i(t))!Ti.call(e,s)&&s!==o&&ut(e,s,{get:()=>t[s],enumerable:!(n=Pi(t,s))||n.enumerable});return e},Ho=(e,t,o)=>(o=e!=null?ki(Li(e)):{},Fo(t||!e||!e.__esModule?ut(o,"default",{value:e,enumerable:!0}):o,e)),Ei=e=>Fo(ut({},"__esModule",{value:!0}),e),Z=(e,t,o)=>(Oi(e,typeof t!="symbol"?t+"":t,o),o),Uo={};Ai(Uo,{default:()=>It});var Ri=Ei(Uo),Yr=Ho(c),Mi=Ho(Bo),Wo=Vo,Ii=Rt;const Ni=5e3;class It extends Yr.Component{constructor(){super(...arguments),Z(this,"mounted",!1),Z(this,"isReady",!1),Z(this,"isPlaying",!1),Z(this,"isLoading",!0),Z(this,"loadOnReady",null),Z(this,"startOnPlay",!0),Z(this,"seekOnPlay",null),Z(this,"onDurationCalled",!1),Z(this,"handlePlayerMount",t=>{if(this.player){this.progress();return}this.player=t,this.player.load(this.props.url),this.progress()}),Z(this,"getInternalPlayer",t=>this.player?this.player[t]:null),Z(this,"progress",()=>{if(this.props.url&&this.player&&this.isReady){const t=this.getCurrentTime()||0,o=this.getSecondsLoaded(),n=this.getDuration();if(n){const s={playedSeconds:t,played:t/n};o!==null&&(s.loadedSeconds=o,s.loaded=o/n),(s.playedSeconds!==this.prevPlayed||s.loadedSeconds!==this.prevLoaded)&&this.props.onProgress(s),this.prevPlayed=s.playedSeconds,this.prevLoaded=s.loadedSeconds}}this.progressTimeout=setTimeout(this.progress,this.props.progressFrequency||this.props.progressInterval)}),Z(this,"handleReady",()=>{if(!this.mounted)return;this.isReady=!0,this.isLoading=!1;const{onReady:t,playing:o,volume:n,muted:s}=this.props;t(),!s&&n!==null&&this.player.setVolume(n),this.loadOnReady?(this.player.load(this.loadOnReady,!0),this.loadOnReady=null):o&&this.player.play(),this.handleDurationCheck()}),Z(this,"handlePlay",()=>{this.isPlaying=!0,this.isLoading=!1;const{onStart:t,onPlay:o,playbackRate:n}=this.props;this.startOnPlay&&(this.player.setPlaybackRate&&n!==1&&this.player.setPlaybackRate(n),t(),this.startOnPlay=!1),o(),this.seekOnPlay&&(this.seekTo(this.seekOnPlay),this.seekOnPlay=null),this.handleDurationCheck()}),Z(this,"handlePause",t=>{this.isPlaying=!1,this.isLoading||this.props.onPause(t)}),Z(this,"handleEnded",()=>{const{activePlayer:t,loop:o,onEnded:n}=this.props;t.loopOnEnded&&o&&this.seekTo(0),o||(this.isPlaying=!1,n())}),Z(this,"handleError",(...t)=>{this.isLoading=!1,this.props.onError(...t)}),Z(this,"handleDurationCheck",()=>{clearTimeout(this.durationCheckTimeout);const t=this.getDuration();t?this.onDurationCalled||(this.props.onDuration(t),this.onDurationCalled=!0):this.durationCheckTimeout=setTimeout(this.handleDurationCheck,100)}),Z(this,"handleLoaded",()=>{this.isLoading=!1})}componentDidMount(){this.mounted=!0}componentWillUnmount(){clearTimeout(this.progressTimeout),clearTimeout(this.durationCheckTimeout),this.isReady&&this.props.stopOnUnmount&&(this.player.stop(),this.player.disablePIP&&this.player.disablePIP()),this.mounted=!1}componentDidUpdate(t){if(!this.player)return;const{url:o,playing:n,volume:s,muted:i,playbackRate:d,pip:h,loop:f,activePlayer:p,disableDeferredLoading:v}=this.props;if(!(0,Mi.default)(t.url,o)){if(this.isLoading&&!p.forceLoad&&!v&&!(0,Ii.isMediaStream)(o)){console.warn(`ReactPlayer: the attempt to load ${o} is being deferred until the player has loaded`),this.loadOnReady=o;return}this.isLoading=!0,this.startOnPlay=!0,this.onDurationCalled=!1,this.player.load(o,this.isReady)}!t.playing&&n&&!this.isPlaying&&this.player.play(),t.playing&&!n&&this.isPlaying&&this.player.pause(),!t.pip&&h&&this.player.enablePIP&&this.player.enablePIP(),t.pip&&!h&&this.player.disablePIP&&this.player.disablePIP(),t.volume!==s&&s!==null&&this.player.setVolume(s),t.muted!==i&&(i?this.player.mute():(this.player.unmute(),s!==null&&setTimeout(()=>this.player.setVolume(s)))),t.playbackRate!==d&&this.player.setPlaybackRate&&this.player.setPlaybackRate(d),t.loop!==f&&this.player.setLoop&&this.player.setLoop(f)}getDuration(){return this.isReady?this.player.getDuration():null}getCurrentTime(){return this.isReady?this.player.getCurrentTime():null}getSecondsLoaded(){return this.isReady?this.player.getSecondsLoaded():null}seekTo(t,o,n){if(!this.isReady){t!==0&&(this.seekOnPlay=t,setTimeout(()=>{this.seekOnPlay=null},Ni));return}if(o?o==="fraction":t>0&&t<1){const i=this.player.getDuration();if(!i){console.warn("ReactPlayer: could not seek using fraction – duration not yet available");return}this.player.seekTo(i*t,n);return}this.player.seekTo(t,n)}render(){const t=this.props.activePlayer;return t?Yr.default.createElement(t,{...this.props,onMount:this.handlePlayerMount,onReady:this.handleReady,onPlay:this.handlePlay,onPause:this.handlePause,onEnded:this.handleEnded,onLoaded:this.handleLoaded,onError:this.handleError}):null}}Z(It,"displayName","Player");Z(It,"propTypes",Wo.propTypes);Z(It,"defaultProps",Wo.defaultProps);var Bi=Object.create,pt=Object.defineProperty,zi=Object.getOwnPropertyDescriptor,Di=Object.getOwnPropertyNames,Vi=Object.getPrototypeOf,Fi=Object.prototype.hasOwnProperty,Hi=(e,t,o)=>t in e?pt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,Ui=(e,t)=>{for(var o in t)pt(e,o,{get:t[o],enumerable:!0})},Yo=(e,t,o,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of Di(t))!Fi.call(e,s)&&s!==o&&pt(e,s,{get:()=>t[s],enumerable:!(n=zi(t,s))||n.enumerable});return e},ht=(e,t,o)=>(o=e!=null?Bi(Vi(e)):{},Yo(t||!e||!e.__esModule?pt(o,"default",{value:e,enumerable:!0}):o,e)),Wi=e=>Yo(pt({},"__esModule",{value:!0}),e),G=(e,t,o)=>(Hi(e,typeof t!="symbol"?t+"":t,o),o),Go={};Ui(Go,{createReactPlayer:()=>el});var Yi=Wi(Go),Ze=ht(c),Gi=ht(yo),nr=ht(di),Gr=ht(Bo),at=Vo,Zo=Rt,Zi=ht(Ri);const Xi=(0,Zo.lazy)(()=>ye(()=>import("./Preview-b209a1d2.js").then(e=>e.P),["assets/Preview-b209a1d2.js","assets/index-2f9ba739.js","assets/index-b4d03b7b.css"])),qi=typeof window<"u"&&window.document,Ki=typeof Kt<"u"&&Kt.window&&Kt.window.document,Qi=Object.keys(at.propTypes),Ji=qi||Ki?Ze.Suspense:()=>null,tt=[],el=(e,t)=>{var o;return o=class extends Ze.Component{constructor(){super(...arguments),G(this,"state",{showPreview:!!this.props.light}),G(this,"references",{wrapper:n=>{this.wrapper=n},player:n=>{this.player=n}}),G(this,"handleClickPreview",n=>{this.setState({showPreview:!1}),this.props.onClickPreview(n)}),G(this,"showPreview",()=>{this.setState({showPreview:!0})}),G(this,"getDuration",()=>this.player?this.player.getDuration():null),G(this,"getCurrentTime",()=>this.player?this.player.getCurrentTime():null),G(this,"getSecondsLoaded",()=>this.player?this.player.getSecondsLoaded():null),G(this,"getInternalPlayer",(n="player")=>this.player?this.player.getInternalPlayer(n):null),G(this,"seekTo",(n,s,i)=>{if(!this.player)return null;this.player.seekTo(n,s,i)}),G(this,"handleReady",()=>{this.props.onReady(this)}),G(this,"getActivePlayer",(0,nr.default)(n=>{for(const s of[...tt,...e])if(s.canPlay(n))return s;return t||null})),G(this,"getConfig",(0,nr.default)((n,s)=>{const{config:i}=this.props;return Gi.default.all([at.defaultProps.config,at.defaultProps.config[s]||{},i,i[s]||{}])})),G(this,"getAttributes",(0,nr.default)(n=>(0,Zo.omit)(this.props,Qi))),G(this,"renderActivePlayer",n=>{if(!n)return null;const s=this.getActivePlayer(n);if(!s)return null;const i=this.getConfig(n,s.key);return Ze.default.createElement(Zi.default,{...this.props,key:s.key,ref:this.references.player,config:i,activePlayer:s.lazyPlayer||s,onReady:this.handleReady})})}shouldComponentUpdate(n,s){return!(0,Gr.default)(this.props,n)||!(0,Gr.default)(this.state,s)}componentDidUpdate(n){const{light:s}=this.props;!n.light&&s&&this.setState({showPreview:!0}),n.light&&!s&&this.setState({showPreview:!1})}renderPreview(n){if(!n)return null;const{light:s,playIcon:i,previewTabIndex:d,oEmbedUrl:h}=this.props;return Ze.default.createElement(Xi,{url:n,light:s,playIcon:i,previewTabIndex:d,oEmbedUrl:h,onClick:this.handleClickPreview})}render(){const{url:n,style:s,width:i,height:d,fallback:h,wrapper:f}=this.props,{showPreview:p}=this.state,v=this.getAttributes(n),b=typeof f=="string"?this.references.wrapper:void 0;return Ze.default.createElement(f,{ref:b,style:{...s,width:i,height:d},...v},Ze.default.createElement(Ji,{fallback:h},p?this.renderPreview(n):this.renderActivePlayer(n)))}},G(o,"displayName","ReactPlayer"),G(o,"propTypes",at.propTypes),G(o,"defaultProps",at.defaultProps),G(o,"addCustomPlayer",n=>{tt.push(n)}),G(o,"removeCustomPlayers",()=>{tt.length=0}),G(o,"canPlay",n=>{for(const s of[...tt,...e])if(s.canPlay(n))return!0;return!1}),G(o,"canEnablePIP",n=>{for(const s of[...tt,...e])if(s.canEnablePIP&&s.canEnablePIP(n))return!0;return!1}),o};var tl=Object.create,Nt=Object.defineProperty,rl=Object.getOwnPropertyDescriptor,ol=Object.getOwnPropertyNames,nl=Object.getPrototypeOf,sl=Object.prototype.hasOwnProperty,al=(e,t)=>{for(var o in t)Nt(e,o,{get:t[o],enumerable:!0})},Xo=(e,t,o,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of ol(t))!sl.call(e,s)&&s!==o&&Nt(e,s,{get:()=>t[s],enumerable:!(n=rl(t,s))||n.enumerable});return e},il=(e,t,o)=>(o=e!=null?tl(nl(e)):{},Xo(t||!e||!e.__esModule?Nt(o,"default",{value:e,enumerable:!0}):o,e)),ll=e=>Xo(Nt({},"__esModule",{value:!0}),e),qo={};al(qo,{default:()=>pl});var cl=ll(qo),dr=il(ni),dl=Yi;const ul=dr.default[dr.default.length-1];var pl=(0,dl.createReactPlayer)(dr.default,ul);const hl=_n(cl),Zr=e=>{const t=Math.floor(e/3600),o=Math.floor(e%3600/60),n=Math.floor(e%60),s=t>0?`${t}:`:"",i=t>0?o.toString().padStart(2,"0"):o.toString(),d=n.toString().padStart(2,"0");return`${s}${i}:${d}`},fl=l.input.attrs(()=>({autoCorrect:"off",autoComplete:"off"}))`
  pointer-events: auto;
  height: 40px;
  padding: 0 40px 0 18px;
  z-index: 2;
  box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  color: #fff;
  box-shadow: none;
  border: none;
  border-radius: 200px;
  background: ${a.BG2};

  -webkit-autofill,
  -webkit-autocomplete,
  -webkit-contacts-auto-fill,
  -webkit-credentials-auto-fill {
    display: none !important;
    visibility: hidden !important;
    pointer-events: none !important;
    position: absolute !important;
    right: 0 !important;
  }

  &:focus {
    outline: 1px solid ${a.primaryBlue};
  }

  &:hover {
    background: ${a.black};
  }

  &::placeholder {
    color: ${a.GRAY7};
  }

  ${({loading:e})=>e&&Cn`
      background-image: url('https://i.gifer.com/ZZ5H.gif');
      background-size: 25px 25px;
      background-position: right center;
      background-position-x: 95%;
      background-repeat: no-repeat;
    `}
`,Ko=({loading:e,placeholder:t="Search",onSubmit:o})=>{const{register:n,watch:s}=$t(),i=s("search"),d=ur();return r.jsx(fl,{...n("search"),"data-testid":"search_input",disabled:e,id:"main-search",onKeyPress:h=>{if(h.key==="Enter"){if(i.trim()==="")return;if(o){o();return}const f=i.replace(/\s+/g,"+");d(`/search?q=${f}`)}},placeholder:t,type:"text"})},Qo=({contextSearch:e})=>{const t=jn({mode:"onChange"}),{setAbortRequests:o}=ue(y=>y),{setBudget:n}=dt(y=>y),{reset:s}=t,i=Pe(y=>y.fetchAIData),{selectedNode:d}=Kn(y=>y),h=pr(y=>y.normalizedSchemasByType),f=oo();let p="";function v(y,P){let u="";if(!y)return u;const x=y.split("-");for(let S=0;S<x.length;S+=1){const T=x[S],j=P.properties?P.properties[T]:"",I=S===x.length-1?"":",";u=`${u} ${T} - ${j}${I}`}return u}const b=t.handleSubmit(({search:y})=>{if(y.trim()!==""){if(e&&d){const P=d.node_type,u=h[P].node_key,x=v(u,d);p=`**${P}: ${x}**`}i(n,o,y,void 0,p),s({search:""})}});return r.jsx(Jo,{children:r.jsx(Sn,{...t,children:r.jsxs(ml,{children:[r.jsx(Ko,{loading:f,onSubmit:b,placeholder:e?"Ask a question":"Ask follow-up"}),r.jsxs(gl,{"data-testid":"search-ai_action_icon",onClick:()=>{f||b()},children:[e&&r.jsx(St,{}),!e&&(f?r.jsx(xl,{color:a.lightGray,"data-testid":"loader",size:"20"}):r.jsx(St,{}))]})]})})})},Jo=l(m)`
  position: sticky;
  bottom: 0;
  padding: 12px;
  border-top: 1px solid ${a.black};
`,ml=l(m).attrs({direction:"row",justify:"center",align:"center"})`
  flex-grow: 1;
`,gl=l(m).attrs({align:"center",justify:"center",p:5})`
  font-size: 32px;
  color: ${a.mainBottomIcons};
  cursor: pointer;
  transition-duration: 0.2s;
  margin-left: -42px;
  z-index: 2;

  &:hover {
    /* background-color: ${a.gray200}; */
  }

  ${Jo} input:focus + & {
    color: ${a.primaryBlue};
  }
`,xl=l(Ot)`
  margin-right: 10px;
`,yl=l(m).attrs({direction:"column"})`
  padding: 24px;
  cursor: pointer;
  border-top: 1px solid #101317;
  background: ${a.BG1};

  .type-image {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    margin-right: 8px;
  }

  .booster__pill {
    margin-right: 0;
    margin-top: 8px;
  }
  .player-controls {
    margin-left: 4px;
  }

  .title {
    margin: 20px 0 8px;
  }
`,vt=l(ho)`
  && {
    background: rgba(0, 0, 0, 0.15);
  }
`,en=({count:e=7})=>r.jsx(r.Fragment,{children:Array(e).fill(null).map((t,o)=>r.jsx(yl,{children:r.jsxs(m,{direction:"row",children:[r.jsx(m,{align:"center",pr:16,children:r.jsx(vt,{animation:"wave",height:64,variant:"rectangular",width:64})}),r.jsxs(m,{grow:1,shrink:1,children:[r.jsx(vt,{height:10,variant:"rectangular",width:56}),r.jsx(vt,{className:"title",height:10,variant:"rectangular",width:262}),r.jsx(vt,{height:10,variant:"rectangular",width:149})]})]})},o))});l(m)`
  font-family: Barlow;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: 17px;
  color: ${a.white};
  margin: 16px 0;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* Limit to two lines */
  -webkit-box-orient: vertical;
  overflow: hidden;
  white-space: normal;
`;const bl=l(ve)`
  overflow: hidden;
  color: ${a.GRAY6};
  text-overflow: ellipsis;
  font-family: Barlow;
  font-size: 11px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  margin-right: 8px;
  flex-shrink: 0;
`;l(bl)`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-shrink: 1;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  &:before {
    content: '';
    display: block;
    border-radius: 2px;
    margin-right: 8px;
    width: 4px;
    flex-shrink: 0;
    height: 4px;
    background: ${a.GRAY6};
  }
`;const vl=e=>r.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 14 10",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M4.9583 7.625L12.0208 0.5625C12.1875 0.395833 12.3854 0.3125 12.6146 0.3125C12.8437 0.3125 13.0416 0.395833 13.2083 0.5625C13.375 0.729167 13.4583 0.927083 13.4583 1.15625C13.4583 1.38542 13.375 1.58333 13.2083 1.75L5.54164 9.41667C5.37497 9.58333 5.18052 9.66667 4.9583 9.66667C4.73608 9.66667 4.54164 9.58333 4.37497 9.41667L0.791636 5.83333C0.624969 5.66667 0.545108 5.46875 0.552052 5.23958C0.558997 5.01042 0.645802 4.8125 0.812469 4.64583C0.979136 4.47917 1.17705 4.39583 1.40622 4.39583C1.63539 4.39583 1.8333 4.47917 1.99997 4.64583L4.9583 7.625Z",fill:"currentColor"})}),wl=e=>r.jsxs("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:[r.jsx("rect",{x:"4",y:"6.5",width:"1em",height:"1em",rx:"1.85294",stroke:"#909BAA","stroke-width":"1.125"}),r.jsx("path",{d:"M7.5 6.68209V4.85294C7.5 3.82959 8.32959 3 9.35294 3H14.6471C15.6704 3 16.5 3.82959 16.5 4.85294V10.1471C16.5 11.1704 15.6704 12 14.6471 12H12.9548",stroke:"#909BAA","stroke-width":"1.125"})]}),_l=e=>r.jsxs("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:[r.jsx("path",{d:"M5.50033 9.87417L6.11699 9.97667C6.13188 9.88713 6.12708 9.79544 6.10295 9.70795C6.07881 9.62045 6.0359 9.53927 5.97722 9.47004C5.91853 9.4008 5.84547 9.34518 5.76312 9.30704C5.68076 9.2689 5.59109 9.24915 5.50033 9.24917L5.50033 9.87417ZM14.667 9.87417L14.667 10.4992C14.8328 10.4992 14.9917 10.4333 15.1089 10.3161C15.2261 10.1989 15.292 10.0399 15.292 9.87417L14.667 9.87417ZM13.0003 0.915833L3.53366 0.915832L3.53366 2.16583L13.0003 2.16583L13.0003 0.915833ZM2.53366 10.4992L5.50033 10.4992L5.50033 9.24917L2.53366 9.24917L2.53366 10.4992ZM4.88366 9.77167L4.21199 13.8008L5.44533 14.0067L6.11699 9.97667L4.88366 9.77167ZM5.65033 15.4992L5.82866 15.4992L5.82866 14.2492L5.65116 14.2492L5.65033 15.4992ZM8.42949 14.1075L10.5253 10.9633L9.48533 10.27L7.38949 13.4142L8.42949 14.1075ZM11.392 10.4992L14.667 10.4992L14.667 9.24917L11.392 9.24917L11.392 10.4992ZM15.292 9.87417L15.292 3.2075L14.042 3.2075L14.042 9.87417L15.292 9.87417ZM1.28616 2.7575L0.286159 7.7575L1.51116 8.00333L2.51116 3.00333L1.28616 2.7575ZM10.5253 10.9633C10.6204 10.8206 10.7493 10.7044 10.9005 10.6234C11.0516 10.5424 11.2205 10.5 11.392 10.5L11.392 9.25C10.6253 9.25 9.91033 9.6325 9.48533 10.27L10.5253 10.9633ZM4.21199 13.8008C4.17727 14.0097 4.18844 14.2244 4.24473 14.4285C4.30102 14.6327 4.40108 14.8221 4.53795 14.9836C4.67482 15.1451 4.84523 15.2749 5.03732 15.364C5.22942 15.453 5.4386 15.4991 5.65033 15.4992L5.65116 14.2492C5.62095 14.2491 5.59029 14.2424 5.56291 14.2297C5.53552 14.217 5.51124 14.1984 5.49174 14.1753C5.47224 14.1523 5.45798 14.1252 5.44997 14.0961C5.44196 14.067 5.44037 14.0365 5.44533 14.0067L4.21199 13.8008ZM2.53366 9.25C1.87533 9.25 1.38366 8.64833 1.51199 8.00416L0.286159 7.75833C0.219844 8.09075 0.228098 8.43458 0.310328 8.76343C0.392559 9.09227 0.546717 9.39878 0.761693 9.66087C0.976668 9.92295 1.24711 10.1341 1.55352 10.279C1.85993 10.424 2.19469 10.4992 2.53366 10.4992L2.53366 9.25ZM3.53366 0.915832C3.0039 0.915728 2.49047 1.1 2.08072 1.43576C1.67096 1.77153 1.39018 2.23889 1.28616 2.75833L2.51116 3.00417C2.5584 2.76783 2.68612 2.55519 2.87257 2.40248C3.05902 2.24976 3.29265 2.16559 3.53366 2.16583L3.53366 0.915832ZM5.82866 15.4992C6.3431 15.4991 6.84958 15.3729 7.30314 15.1301C7.7567 14.8874 8.14331 14.5364 8.42866 14.1083L7.38949 13.4142C7.21821 13.6711 6.98611 13.8826 6.71382 14.0283C6.44152 14.174 6.13747 14.2493 5.82866 14.2492L5.82866 15.4992ZM13.0003 2.16583C13.5753 2.16583 14.042 2.6325 14.042 3.2075L15.292 3.2075C15.292 2.59971 15.0506 2.01682 14.6208 1.58705C14.191 1.15728 13.6081 0.915833 13.0003 0.915833L13.0003 2.16583Z",fill:"currentColor"}),r.jsx("path",{d:"M11.334 9.875L11.334 1.54167",stroke:"#909BAA","stroke-width":"1.25"})]}),Cl=e=>r.jsxs("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:[r.jsx("path",{d:"M10.4997 6.12583L9.88301 6.02333C9.86812 6.11286 9.87292 6.20456 9.89705 6.29205C9.92119 6.37955 9.9641 6.46073 10.0228 6.52996C10.0815 6.5992 10.1545 6.65482 10.2369 6.69296C10.3192 6.7311 10.4089 6.75085 10.4997 6.75083V6.12583ZM1.33301 6.12583V5.50083C1.16725 5.50083 1.00828 5.56668 0.891066 5.68389C0.773856 5.8011 0.708008 5.96007 0.708008 6.12583H1.33301ZM2.99967 15.0842H12.4663V13.8342H2.99967V15.0842ZM13.4663 5.50083H10.4997V6.75083H13.4663V5.50083ZM11.1163 6.22833L11.788 2.19917L10.5547 1.99333L9.88301 6.02333L11.1163 6.22833ZM10.3497 0.500833H10.1713V1.75083H10.3488L10.3497 0.500833ZM7.57051 1.8925L5.47467 5.03667L6.51468 5.73L8.61051 2.58583L7.57051 1.8925ZM4.60801 5.50083H1.33301V6.75083H4.60801V5.50083ZM0.708008 6.12583V12.7925H1.95801V6.12583H0.708008ZM14.7138 13.2425L15.7138 8.2425L14.4888 7.99667L13.4888 12.9967L14.7138 13.2425ZM5.47467 5.03667C5.37959 5.1794 5.25073 5.29562 5.09955 5.37659C4.94836 5.45757 4.77951 5.49996 4.60801 5.5V6.75C5.37467 6.75 6.08967 6.3675 6.51468 5.73L5.47467 5.03667ZM11.788 2.19917C11.8227 1.99031 11.8116 1.77556 11.7553 1.57145C11.699 1.36735 11.5989 1.17794 11.4621 1.01641C11.3252 0.854873 11.1548 0.725078 10.9627 0.636044C10.7706 0.547009 10.5614 0.50087 10.3497 0.500833L10.3488 1.75083C10.379 1.75091 10.4097 1.75755 10.4371 1.7703C10.4645 1.78305 10.4888 1.8016 10.5083 1.82467C10.5278 1.84774 10.542 1.87477 10.55 1.90389C10.558 1.93302 10.5596 1.96354 10.5547 1.99333L11.788 2.19917ZM13.4663 6.75C14.1247 6.75 14.6163 7.35167 14.488 7.99583L15.7138 8.24167C15.7802 7.90924 15.7719 7.56542 15.6897 7.23657C15.6074 6.90772 15.4533 6.60121 15.2383 6.33913C15.0233 6.07705 14.7529 5.86592 14.4465 5.72096C14.1401 5.576 13.8053 5.50082 13.4663 5.50083V6.75ZM12.4663 15.0842C12.9961 15.0843 13.5095 14.9 13.9193 14.5642C14.329 14.2285 14.6098 13.7611 14.7138 13.2417L13.4888 12.9958C13.4416 13.2322 13.3139 13.4448 13.1274 13.5975C12.941 13.7502 12.7073 13.8344 12.4663 13.8342V15.0842ZM10.1713 0.500833C9.6569 0.500871 9.15042 0.627079 8.69686 0.86985C8.2433 1.11262 7.85669 1.46361 7.57134 1.89167L8.61051 2.58583C8.78179 2.32888 9.01389 2.11738 9.28618 1.97171C9.55848 1.82604 9.86253 1.75072 10.1713 1.75083V0.500833ZM2.99967 13.8342C2.42467 13.8342 1.95801 13.3675 1.95801 12.7925H0.708008C0.708008 13.4003 0.94945 13.9832 1.37922 14.413C1.80899 14.8427 2.39189 15.0842 2.99967 15.0842V13.8342Z",fill:"currentColor"}),r.jsx("path",{d:"M4.66602 6.125V14.4583",stroke:"#909BAA","stroke-width":"1.25"})]}),jl=e=>r.jsxs("svg",{width:"1em",height:"1em",viewBox:"0 0 14 14",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:[r.jsx("path",{d:"M12.1202 4.54418C11.1202 2.56043 8.94933 1.28755 6.5718 1.50867C4.38822 1.71176 2.61672 3.1205 1.87502 5.0013",stroke:"#909BAA","stroke-width":"1.3","stroke-linecap":"round"}),r.jsx("path",{d:"M9.01213 4.98787L12.9879 1.01213C13.1769 0.823143 13.5 0.956993 13.5 1.22426V5.2C13.5 5.36569 13.3657 5.5 13.2 5.5H9.22426C8.95699 5.5 8.82314 5.17686 9.01213 4.98787Z",fill:"currentColor"}),r.jsx("path",{d:"M1.96282 9.45582C2.96283 11.4396 5.13368 12.7124 7.5112 12.4913C9.69478 12.2882 11.4663 10.8795 12.208 8.9987",stroke:"#909BAA","stroke-width":"1.3","stroke-linecap":"round"}),r.jsx("path",{d:"M5.07088 9.01213L1.09514 12.9879C0.90615 13.1769 0.583008 13.043 0.583008 12.7757L0.583008 8.8C0.583008 8.63431 0.717323 8.5 0.883008 8.5L4.85874 8.5C5.12602 8.5 5.25987 8.82314 5.07088 9.01213Z",fill:"currentColor"})]}),Sl=e=>r.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 19 17",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M2.50004 11.3333C2.0556 11.3333 1.66671 11.1667 1.33337 10.8333C1.00004 10.5 0.833374 10.1111 0.833374 9.66667V8C0.833374 7.90278 0.843791 7.79861 0.864624 7.6875C0.885457 7.57639 0.916707 7.47222 0.958374 7.375L3.45837 1.5C3.58337 1.22222 3.79171 0.986111 4.08337 0.791667C4.37504 0.597222 4.6806 0.5 5.00004 0.5H11.6667C12.125 0.5 12.5174 0.663194 12.8438 0.989583C13.1702 1.31597 13.3334 1.70833 13.3334 2.16667V10.6458C13.3334 10.8681 13.2882 11.0799 13.198 11.2813C13.1077 11.4826 12.9862 11.6597 12.8334 11.8125L8.31254 16.3125C8.10421 16.5069 7.85768 16.625 7.57296 16.6667C7.28824 16.7083 7.01393 16.6597 6.75004 16.5208C6.48615 16.3819 6.29518 16.1875 6.17712 15.9375C6.05907 15.6875 6.03476 15.4306 6.10421 15.1667L7.04171 11.3333H2.50004ZM16.6667 0.5C17.125 0.5 17.5174 0.663194 17.8438 0.989583C18.1702 1.31597 18.3334 1.70833 18.3334 2.16667V9.66667C18.3334 10.125 18.1702 10.5174 17.8438 10.8438C17.5174 11.1701 17.125 11.3333 16.6667 11.3333C16.2084 11.3333 15.816 11.1701 15.4896 10.8438C15.1632 10.5174 15 10.125 15 9.66667V2.16667C15 1.70833 15.1632 1.31597 15.4896 0.989583C15.816 0.663194 16.2084 0.5 16.6667 0.5Z",fill:"currentColor"})}),kl=e=>r.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 17 15",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M14.7499 4.99999C15.1499 4.99999 15.4999 5.14999 15.7999 5.44999C16.0999 5.74999 16.2499 6.09999 16.2499 6.49999V7.99999C16.2499 8.08749 16.2405 8.18124 16.2218 8.28124C16.203 8.38124 16.1749 8.47499 16.1374 8.56249L13.8874 13.85C13.7749 14.1 13.5874 14.3125 13.3249 14.4875C13.0624 14.6625 12.7874 14.75 12.4999 14.75H6.49988C6.08738 14.75 5.73425 14.6031 5.4405 14.3094C5.14675 14.0156 4.99988 13.6625 4.99988 13.25V5.61874C4.99988 5.41874 5.0405 5.22812 5.12175 5.04687C5.203 4.86562 5.31238 4.70624 5.44988 4.56874L9.51863 0.518743C9.70613 0.343743 9.928 0.237492 10.1843 0.199992C10.4405 0.162492 10.6874 0.206242 10.9249 0.331243C11.1624 0.456243 11.3343 0.631243 11.4405 0.856243C11.5468 1.08124 11.5686 1.31249 11.5061 1.54999L10.6624 4.99999H14.7499ZM1.99988 14.75C1.58738 14.75 1.23425 14.6031 0.940503 14.3094C0.646753 14.0156 0.499878 13.6625 0.499878 13.25V6.49999C0.499878 6.08749 0.646753 5.73437 0.940503 5.44062C1.23425 5.14687 1.58738 4.99999 1.99988 4.99999C2.41238 4.99999 2.7655 5.14687 3.05925 5.44062C3.353 5.73437 3.49988 6.08749 3.49988 6.49999V13.25C3.49988 13.6625 3.353 14.0156 3.05925 14.3094C2.7655 14.6031 2.41238 14.75 1.99988 14.75Z",fill:"currentColor"})}),Pl=l(m).attrs({direction:"column"})`
  padding: 0 1.5rem 1.5rem;
  gap: 1rem;
  overflow-wrap: break-word;
  white-space: normal;
  word-break: break-word;
`,$l=l(ve)`
  font-size: 14px;
  font-weight: 400;
  line-height: 19.6px;

  ${xr} {
    margin: 0;
    padding: 0;
  }
`,Ll=l(m)`
  flex-direction: row;
  gap: 8px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 5px;
`,ze=l(m)`
  justify-content: center;
  align-items: center;
  font-size: 16px;
`,De=l(_e)`
  &&.MuiButton-root {
    position: relative;
    width: 32px;
    height: 32px;
    min-width: 32px;
    padding: 0;
    background-color: transparent;
    border-radius: 6px;
    cursor: pointer;
    transition: ${({theme:e})=>e.transitions.create(["opacity","box-shadow","background-color","transform"])};

    &.active {
      background-color: ${a.COLLAPSE_BUTTON};
    }

    &.hidden {
      opacity: 0;
      transform: scale(0.5);
      pointer-events: none;
      transition: opacity 0.2s ease, transform 0.2s ease;
    }
    ${ve} {
      display: none;
      opacity: 0;
      width: 0;
      padding: 4px 10px;
      border-radius: 4px;
      background: #000;
      box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.25);
      position: absolute;
      left: 50%;
      bottom: -28px;
      transform: translateX(-50%);
      z-index: 99;
      white-space: nowrap;
      visibility: visible;
      font-size: 11px;
      font-style: normal;
      font-weight: 400;
      transition: ${({theme:e})=>e.transitions.create(["opacity","visually"])};
    }

    &:hover:not(:active) {
      background-color: ${a.COLLAPSE_BUTTON};
    }

    &:hover {
      ${ve} {
        display: block;
        width: min-content;
        opacity: 1;
        visibility: visible;
      }
    }

    svg {
      width: 16px;
      height: 16px;
      color: #909baa;
      fill: none;
    }
  }
`,Tl=l(m)`
  justify-content: center;
  align-items: center;
  font-size: 16px;

  svg {
    width: 18px !important;
    height: 18px !important;
    fill: none !important;
    color: #909baa !important;

    path {
      transform: scale(1.2) !important;
      transform-origin: center !important;
    }

    rect {
      transform: translateX(-2px) !important;
      width: 11px !important;
      height: 11px !important;
      border-radius: 2px !important;
    }
  }
`,Ol=({answer:e,entities:t,handleLoaded:o,hasBeenRendered:n,onRegenerate:s,isPlaying:i,onTogglePlay:d,hasAudio:h,chain:f})=>{const[p,v]=c.useState(""),[b,y]=c.useState(t),[P,u]=c.useState(!1),[x,S]=c.useState(null),[T,j]=c.useState(!1),{setIsHtmlContent:I,setHtmlContent:O}=$e(_=>_);c.useEffect(()=>{let _;if(!e||n)return;if(w(e)){v(e),u(!0),o();return}return p.length<e.length?_=setTimeout(()=>{v(e.slice(0,p.length+1))},10):(u(!0),o()),()=>{_&&clearTimeout(_)}},[e,p,o,n]),c.useEffect(()=>{p||n&&(v(e),u(!0))},[e,p,n]),c.useEffect(()=>{t&&b!==t&&y(t)},[t,b]);const k=async _=>{try{const V=await kn({answer:e,chain:f,feedback_type:_});V.status==="success"?S(_==="helpful"?"positive":"negative"):console.error(V,"Failed to send feedback")}catch(z){console.error("Error sending feedback:",z)}},R=()=>{x==="positive"?S(null):k("helpful")},M=()=>{x==="negative"?S(null):k("unhelpful")},L=async()=>{try{await navigator.clipboard.writeText(e),j(!0),setTimeout(()=>{j(!1)},1e3)}catch(_){console.error("Failed to copy text:",_)}},w=_=>{const z=_.trim();return z.startsWith("<!DOCTYPE html>")||z.startsWith("<html")||/^```html/.test(z)};return c.useEffect(()=>{p&&w(p)&&(I(!0),O(p))},[p,I,O]),r.jsxs(Pl,{children:[r.jsx($l,{children:r.jsx(xr,{children:p})}),P&&p.length===e.length&&r.jsxs(Ll,{children:[h&&r.jsxs(De,{onClick:d,children:[r.jsx(ze,{children:i?r.jsx(An,{}):r.jsx(En,{})}),r.jsx(ve,{children:"Read Aloud"})]}),r.jsxs(De,{onClick:L,children:[T?r.jsx(ze,{children:r.jsx(vl,{})}):r.jsx(Tl,{children:r.jsx(wl,{})}),r.jsx(ve,{children:"Copy"})]}),x===null&&r.jsxs(r.Fragment,{children:[r.jsxs(De,{onClick:R,children:[r.jsx(ze,{children:r.jsx(Cl,{})}),r.jsx(ve,{children:"Helpful"})]}),r.jsxs(De,{onClick:M,children:[r.jsx(ze,{children:r.jsx(_l,{})}),r.jsx(ve,{children:"Unhelpful"})]})]}),x==="positive"&&r.jsxs(De,{disabled:!0,children:[r.jsx(ze,{children:r.jsx(kl,{})}),r.jsx(ve,{children:"Helpful"})]}),x==="negative"&&r.jsxs(De,{disabled:!0,children:[r.jsx(ze,{children:r.jsx(Sl,{})}),r.jsx(ve,{children:"Unhelpful"})]}),r.jsxs(De,{onClick:s,children:[r.jsx(ze,{children:r.jsx(jl,{})}),r.jsx(ve,{children:"Rewrite"})]})]})]})},Al=({questions:e})=>{const{setAbortRequests:t}=ue(d=>d),[o]=dt(d=>[d.setBudget]),n=oo(),s=Pe(d=>d.fetchAIData),i=d=>{n||d&&s(o,t,d)};return e!=null&&e.length?r.jsxs(Nl,{children:[r.jsx(lt,{direction:"right",in:!0,mountOnEnter:!0,children:r.jsxs(Rl,{className:"heading",direction:"row",children:[r.jsx("div",{className:"heading__icon",children:r.jsx(Rn,{})}),r.jsx(Ml,{children:"More on this"})]})}),r.jsx(lt,{direction:"right",in:!0,mountOnEnter:!0,children:r.jsx(m,{children:e.map(d=>r.jsxs(Il,{align:"center",className:it({disabled:n}),direction:"row",justify:"space-between",onClick:()=>i(d),children:[r.jsx("span",{children:d}),r.jsx(m,{className:it({disabled:n},"icon"),children:r.jsx(hr,{})})]},d))})})]}):null},El=c.memo(Al),Rl=l(m)`
  &.heading {
    font-weight: 600;
    color: ${a.white};
    font-size: 14px;

    .heading__icon {
      margin-right: 12px;
      font-size: 20px;
    }

    .heading__count {
      font-weight: 400;
      color: ${a.GRAY7};
      margin-left: 16px;
    }
  }
`,Ml=l.span`
  margin-top: 1px;
`,Il=l(m)`
  color: ${a.GRAY3};
  padding: 12px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  &:last-child {
    border: none;
  }
  font-size: 14px;
  cursor: pointer;
  line-height: 1.4;

  &.disabled {
    cursor: default;
    &:hover {
      color: ${a.GRAY3};
      .icon {
        color: ${a.GRAY7};
        cursor: default;
      }
    }
  }

  &:hover {
    color: ${a.white};
    .icon {
      color: ${a.white};
    }
  }

  &:active {
    color: ${a.SECONDARY_BLUE};
    .icon {
      color: ${a.SECONDARY_BLUE};
    }
  }

  .icon {
    font-size: 20px;
    color: ${a.GRAY7};
    cursor: pointer;
  }
`,Nl=l(m)`
  padding: 0 24px 24px 24px;
`,Bl=l(m)`
  overflow-y: auto;
  overflow-x: hidden;
  background: ${a.body};
`,zl={edge_type:"POSTED",properties:{date_added_to_graph:"1737561660.0435429",weight:1},ref_id:"7efabdc1-b494-4d8c-8d55-5062ce1237d3",source:"efa4819e-a54e-49dd-858f-2aed5cf10940",target:"0ba6ef37-bf92-4094-89a0-893f05d34e6c"},Dl=({sourceIds:e,question:t})=>{const o=c.useRef(null),[n,s]=c.useState(!1),i=ue(u=>u.addNewNode),{getNode:d}=ue(u=>u),h=ue(u=>u.nodesNormalized),f=c.useRef(!1),{dataInitial:p}=Pe(u=>u),{navigateToNode:v}=Tt(),b=c.useMemo(()=>{const u=(p==null?void 0:p.nodes.filter(j=>e.includes(j.ref_id)))||[],x=e.map(j=>h.get(j)).filter(j=>j!==void 0),S=[...u,...x];return Array.from(new Map(S.map(j=>[j.ref_id,j])).values())},[p==null?void 0:p.nodes,e,h]);c.useEffect(()=>{if(!e.length||f.current)return;(async()=>{try{const x=e.map(async T=>{try{return await d(T)}catch(j){return console.error(`Failed to fetch node data for ref_id ${T}:`,j),null}}),S=(await Promise.all(x)).filter(T=>T!==null);if(S.length){const T=S.map((j,I)=>({...zl,source:t,target:j.ref_id,ref_id:`${String(+new Date)}-${I}`,edge_type:"IS_SOURCE",properties:{date_added_to_graph:String(new Date),weight:1}}));f.current=!0,i({nodes:S,edges:T})}}catch(x){console.error("Error fetching source nodes:",x)}})()},[e,i,t,d]);const y=()=>s(!n),P=c.useCallback(u=>{v(u.ref_id)},[v]);return r.jsxs(Hl,{children:[r.jsx(lt,{direction:"right",in:!0,mountOnEnter:!0,children:r.jsxs(Fl,{align:"center",className:"heading",direction:"row",justify:"space-between",children:[r.jsxs(m,{align:"center",direction:"row",children:[r.jsx("div",{className:"heading__icon",children:r.jsx(Mn,{})}),r.jsx("span",{className:"tittle",children:"Sources"}),r.jsx("span",{className:"heading__count",children:e.length})]}),r.jsxs(Wl,{onClick:y,children:[n?"Hide all":"Show all",n?r.jsx(fr,{}):r.jsx(mr,{})]})]})}),n&&b.length>0&&r.jsx(Bl,{ref:o,id:"search-result-list",shrink:1,children:b.map((u,x)=>{if(!u)return null;const S=no(u),{image_url:T,date:j,boost:I,show_title:O,node_type:k,text:R,source_link:M,name:L,verified:w=!1,twitter_handle:_}=S||{};return r.jsx(Ul,{boostCount:I||0,date:j||0,imageUrl:T||"",name:L||"",node:u,onClick:()=>{P(u)},showTitle:fo(O),sourceLink:M,text:R||"",twitterHandle:_,type:k,verified:w},x.toString())})})]})},Vl=c.memo(Dl),Fl=l(m)`
  &.heading {
    font-weight: 600;
    color: ${a.white};
    font-size: 14px;
    padding: 24px 24px 0;
    align-items: center;

    .heading__icon {
      margin-right: 12px;
      font-size: 20px;
      align-items: center;
    }

    .heading__count {
      font-weight: 400;
      color: ${a.GRAY7};
      margin-left: 12px;
      line-height: 32px;
      text-align: left;
      margin-bottom: 4px;
    }

    .tittle {
      margin-bottom: 4px;
      font-size: 14px;
      font-weight: 600;
      font-family: Barlow;
      line-height: 32px;
      text-align: left;
      color: ${a.white};
    }
  }
`,Hl=l(m)`
  border-top: 1px solid rgba(0, 0, 0, 0.3);
  padding-bottom: 25px;
`,Ul=l(mo)`
  &:first-child {
    border-top: none;
  }
`,Wl=l(_e)`
  &&.MuiButton-root {
    background-color: ${a.COLLAPSE_BUTTON};
    color: ${a.white};
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    font-size: 10px;
    font-weight: 500;
    font-family: Barlow;
    margin-bottom: 3px;
    height: 27px;
    border-radius: 200px;
    padding: 0px 10px;
    min-width: auto;
  }

  &&:hover {
    background-color: ${a.COLLAPSE_BUTTON};
    color: ${a.white};
  }

  svg {
    margin-left: 3px;
    width: 9px;
    height: 9px;
    color: white;
  }
`,Yl=l(m).attrs({direction:"column"})`
  padding: 15px 24px 24px 24px;
  cursor: pointer;
  background: ${a.BG1};

  .type-image {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    margin-right: 8px;
  }
`,rt=l(ho)`
  && {
    background: #353a46;
    border-radius: 0.5rem;
  }
`,Gl=l(m)`
  gap: 1.1875rem;
  margin-top: 1rem;
`,Zl=l.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: white;
  margin-right: 0.5rem;
`,Xl=l(ve)`
  font-weight: 600;
  font-size: 0.9375rem;
`,ot=8,wt=332,ql=()=>{const t=ue(o=>o.runningProjectMessages).at(-1)||"Answer";return r.jsx(r.Fragment,{children:r.jsx(Yl,{children:r.jsxs(m,{direction:"column",children:[r.jsxs(m,{direction:"row",children:[r.jsx(Zl,{children:r.jsx(In,{})}),r.jsx(Xl,{children:t})]}),r.jsxs(Gl,{grow:1,shrink:1,children:[r.jsx(rt,{height:ot,variant:"rectangular",width:wt}),r.jsx(rt,{height:ot,variant:"rectangular",width:wt}),r.jsx(rt,{height:ot,variant:"rectangular",width:wt}),r.jsx(rt,{height:ot,variant:"rectangular",width:wt}),r.jsx(rt,{height:ot,variant:"rectangular",width:180})]})]})})})},Kl=l.div`
  flex-grow: 1;
  overflow-wrap: break-word;
  white-space: normal;
  word-break: break-word;
  margin-top: calc(100px - 104px);
`,Ql=l(xr)`
  font-size: 16px;
  font-weight: normal;
  line-height: 1.5;
`,Jl=l(m).attrs({direction:"row",alignItems:"center"})`
  padding: 24px 10px 0 24px;
  flex-shrink: 1;
  overflow: hidden;
`,Xr=({question:e,response:t,refId:o})=>{const n=c.useRef(null),[s,i]=c.useState(!1),d=Pe(k=>k.setAiSummaryAnswer),h=Pe(k=>k.fetchAIData),f=Pe(k=>k.resetAiSummaryAnswer),{setBudget:p}=dt(k=>k),{setAbortRequests:v}=ue(k=>k),b=c.useRef(null),{currentPlayingAudio:y,setCurrentPlayingAudio:P}=$e(k=>k),[u,x]=c.useState(!1);c.useEffect(()=>{n.current&&n.current.scrollIntoView({behavior:"smooth"})},[]),c.useEffect(()=>{const k=b.current,R=()=>{P(null),x(!1)};return k&&k.addEventListener("ended",R),()=>{k&&k.removeEventListener("ended",R)}},[P,u]);const S=()=>{i(!s)},T=()=>{o&&d(o,{hasBeenRendered:!0})},j=()=>{b.current&&(b.current.paused?(b.current.play(),P(b),x(!0)):(b.current.pause(),P(null),x(!1)))},I=()=>{y!=null&&y.current&&y.current!==b.current&&(y.current.pause(),P(null)),j()},O=async()=>{d(o,{question:e,answer:"",answerLoading:!0,sourcesLoading:!0,questionsLoading:!0,entities:void 0,shouldRender:!0,questions:[],sources:[],audio_en:void 0}),f(),await h(p,v,e,{force_regenerate:!0})};return r.jsxs(ec,{children:[r.jsxs(Jl,{children:[r.jsx(Kl,{ref:n,children:r.jsx(Ql,{children:`# ${e}`})}),e&&r.jsx(tc,{onClick:S,children:s?r.jsx(mr,{}):r.jsx(fr,{})})]}),!s&&r.jsxs(r.Fragment,{children:[t.answerLoading?r.jsx(ql,{}):r.jsx(Ol,{answer:t.answer||"",chain:o,entities:t.entities,handleLoaded:()=>T(),hasAudio:!!t.audio_en,hasBeenRendered:!!(t!=null&&t.hasBeenRendered),isPlaying:u&&(y==null?void 0:y.current)===b.current,onRegenerate:O,onTogglePlay:I}),t.questionsLoading?r.jsx(en,{count:1}):r.jsx(El,{questions:t.questions||[]}),((t==null?void 0:t.sources)||[]).length?r.jsx(Vl,{question:e,sourceIds:t.sources||[]}):null]}),t.audio_en&&r.jsx(rc,{ref:b,src:t.audio_en,children:r.jsx("track",{kind:"captions"})})]})},ec=l(m).attrs({direction:"column"})`
  border-top: 1px solid #101317;
`,tc=l(_e)`
  &&.MuiButton-root {
    background-color: ${a.COLLAPSE_BUTTON};
    border: none;
    cursor: pointer;
    flex-shrink: 0;
    padding: 0px;
    width: 27px;
    height: 26px;
    min-width: 26px;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 1px;
  }

  svg {
    width: 9px;
    height: 9px;
    color: white;
  }
`,rc=l.audio`
  display: none;
`,oc=390,nc=()=>{const{aiSummaryAnswers:e,newLoading:t}=Pe(o=>o);return r.jsxs(sc,{children:[r.jsx(ac,{children:r.jsxs(m,{children:[Object.keys(e).filter(o=>e[o].shouldRender).map(o=>{var n;return r.jsx(Xr,{question:((n=e[o])==null?void 0:n.question)||"",refId:o,response:e[o]},o)}),t&&r.jsx(Xr,{question:t.question||"",refId:"",response:t})]})}),r.jsx(Qo,{})]})},sc=l(m)(({theme:e})=>({position:"relative",background:a.BG1,flex:1,width:"100%",zIndex:30,[e.breakpoints.up("sm")]:{width:oc}})),ac=l(m)`
  overflow-y: auto;
  overflow-x: hidden;
  flex: 1;
  width: 100%;
`,ic=()=>{const{nodeCount:e,setNodeCount:t,setBudget:o}=dt(d=>d),{fetchData:n,setAbortRequests:s}=ue(d=>d),i=async()=>{e<1||(await n(o,s,"",{skip_cache:"true"}),t("CLEAR"))};return r.jsx(dc,{children:r.jsxs("div",{className:"heading-container",children:[r.jsxs("div",{className:"heading",children:[r.jsx("span",{className:"heading__title",children:"Latest"}),r.jsx("span",{className:"heading__icon",children:r.jsx(Nn,{})})]}),e?r.jsx("div",{className:"button_container",children:r.jsx(lc,{className:"button","data-testid":"see_latest_button",onClick:i,startIcon:r.jsx(Bn,{}),children:`See Latest (${e})`})}):null]})})},lc=l(_e)`
  && {
    width: 100%;
    margin-top: 1.2rem;
    font-weight: 500;
    .MuiButton-startIcon {
      color: ${a.GRAY6};
    }
  }
`,cc=c.memo(ic),dc=l(m)`
  .heading-container {
    display: flex;
    flex-direction: column;
    padding: 16px 24px 16px 24px;
  }

  .heading {
    color: ${a.GRAY6};
    font-family: Barlow;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 20px;
    letter-spacing: 1.12px;
    text-transform: uppercase;
    display: flex;
    align-items: center;

    &__icon {
      margin-left: 14px;
      margin-bottom: -2px;
      font-size: 24px;
    }
  }

  .list {
    list-style: none;
    padding: 0;
    margin: 0;
    cursor: pointer;

    &-item {
      padding: 18px 16px 18px 24px;
      overflow: hidden;
      color: ${a.white};
      text-overflow: ellipsis;
      font-family: Barlow;
      font-size: 16px;
      font-style: normal;
      font-weight: 600;
      line-height: 11px;

      &:hover {
        background: rgba(0, 0, 0, 0.1);
        color: ${a.SECONDARY_BLUE};
      }

      &:active {
        background: rgba(0, 0, 0, 0.2);
        color: ${a.PRIMARY_BLUE};
      }
    }
  }
`,uc=({isSearchResult:e})=>{const t=e?80:10,{setSelectedTimestamp:o,nextPage:n}=ue(O=>O),{navigateToNode:s}=Tt(),{currentSearch:i,setSidebarOpen:d,setRelevanceSelected:h}=$e(O=>O),[f,p]=c.useState(0),[v,b]=c.useState(0),y=so(),u=f*t+t,x=y&&y.length>0?y.length-1>u:!1,S=qs("sm","down"),T=c.useCallback(O=>{ts(O),o(O),h(!0),s(O.ref_id),S&&d(!1)},[o,h,s,S,d]),j=()=>{n(),x&&(p(f+1),b(O=>O+1))},I=c.useMemo(()=>{if(y){const O=[...y].sort((k,R)=>(R.date||0)-(k.date||0));return i&&O.sort((k,R)=>{const M=k.node_type==="topic"&&k.name.toLowerCase()===i.toLowerCase()?1:0;return(R.node_type==="topic"&&R.name.toLowerCase()===i.toLowerCase()?1:0)-M}),O.slice(0,u)}return[]},[y,i,u]);return r.jsxs(r.Fragment,{children:[(I??[]).map(O=>{const k=no(O),{image_url:R,date:M,boost:L,show_title:w,node_type:_,text:z,source_link:V,name:oe,verified:H=!1,twitter_handle:J}=k||{};return _?r.jsx(mo,{boostCount:L||0,date:M||0,imageUrl:R||"",name:oe||"",node:O,onClick:()=>{T(O)},showTitle:fo(w),sourceLink:V,text:z||"",twitterHandle:J,type:_,verified:H},k.ref_id):null}),r.jsx(hc,{align:"center",background:"BG1",direction:"row",justify:"center",children:x&&r.jsx(_e,{onClick:j,size:"medium",children:"Load More"},v)})]})},pc=c.memo(uc),hc=l(m)`
  flex: 0 0 86px;
`,fc=async()=>{const e="/get_trends";return await Pn.get(e)},mc=["Drivechain","Ordinals","L402","Nostr","AI"],gc=()=>{var L;const{open:e}=Ir("addContent"),[t,o]=c.useState(!1),[n,s]=c.useState(!1),i=c.useRef(null),[d,h]=c.useState(0),[f,p]=c.useState(!1),{currentPlayingAudio:v,setCurrentPlayingAudio:b}=$e(w=>w),y=ur(),{open:P}=Ir("briefDescription"),{trendingTopics:u,setTrendingTopics:x}=ue(w=>w),{setValue:S}=$t(),{setTrend:T}=os(),j=c.useCallback(async()=>{o(!0),s(!1),h(0),p(!1),b(null);try{const w=await fc();if(w.length&&Array.isArray(w)){const _=new Map(w.map(V=>[V.name,V])),z=Array.from(_.values());x(z)}}catch{x(mc.map(_=>({name:_,count:0})))}finally{o(!1)}},[b,x]);c.useEffect(()=>{u.length||j()},[j,u.length]),c.useEffect(()=>{const w=setTimeout(()=>{s(!0)},5e3);return()=>clearTimeout(w)},[s,t]);const I=w=>{S("search",w);const _=w.replace(/\s+/g,"+");y(`/search?q=${_}`)},O=(w,_)=>{w.stopPropagation(),w.currentTarget.blur(),_!=null&&_.tldr&&(T(_),P())},k=w=>{w.stopPropagation(),w.currentTarget.blur(),p(!f),b(i)};c.useEffect(()=>{var w,_;f?(w=i.current)==null||w.play():(_=i.current)==null||_.pause()},[d,f]),c.useEffect(()=>{v||p(!1)},[v]);const R=()=>{h(w=>{var z,V;let _=(w+1)%u.length;for(;_!==w&&!((z=u[_])!=null&&z.audio_EN);)_=(_+1)%u.length;return _===w?(p(!1),_):((V=i.current)==null||V.load(),_===0&&(p(!1),h(0)),_)}),b(i)},M=t?"Loading":"No new trending topics in the last 24 hours";return r.jsx(yc,{"data-testid":"trending-component",children:r.jsxs("div",{children:[r.jsxs("div",{className:"heading-container",children:[r.jsxs("div",{className:"heading",children:[r.jsx("span",{className:"heading__title",children:"Trending Topics"}),r.jsx("span",{className:"heading__icon",children:t?r.jsx(Ot,{color:a.white,size:16}):r.jsx(r.Fragment,{children:n?r.jsx(vc,{onClick:j,size:"small",startIcon:r.jsx(zn,{})}):r.jsx(Dn,{})})})]}),Ks(u)?r.jsxs("div",{children:[r.jsx(_e,{onClick:w=>k(w),startIcon:f?r.jsx(co,{}):r.jsx(uo,{}),children:f?"Pause":"Play All"}),r.jsx(Cc,{ref:i,onEnded:R,src:(L=u[d])==null?void 0:L.audio_EN,children:r.jsx("track",{kind:"captions"})})]}):null]}),u.length===0?r.jsxs("div",{className:"trending-empty",children:[r.jsx(bc,{children:M}),r.jsx(_e,{color:"secondary",disabled:t,onClick:e,size:"medium",startIcon:r.jsx(hr,{}),sx:{alignSelf:"flex-end",m:"0 36px 16px 0"},variant:"contained",children:"Add Content"})]}):r.jsx("ul",{className:"list",children:u.map((w,_)=>r.jsxs(m,{align:"center",className:"list-item",direction:"row",justify:"space-between",onClick:()=>I(w.tldr_topic??w.name),children:[r.jsxs(xc,{children:[r.jsx(_c,{children:r.jsx(Vn,{})}),r.jsx("span",{className:"tldr",children:Qs(w)})]}),w.tldr&&r.jsx(wc,{className:it({isPlaying:d===_&&f}),onClick:z=>O(z,w),children:"TLDR"})]},w.name))})]})})},xc=l.div`
  position: relative;
  display: flex;
  align-items: flex-start;
  width: 300px;

  span.tldr {
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: 1.5;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    letter-spacing: 0.3pt;
    padding-left: 20px;
  }
`,yc=l(m)`
  .heading-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 16px 12px 16px 24px;
  }
  .heading {
    display: flex;
    align-items: center;
    color: ${a.GRAY6};
    padding-right: 24px;
    font-family: Barlow;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 20px;
    letter-spacing: 1.12px;
    text-transform: uppercase;
    &__icon {
      margin-left: 16px;
      font-size: 23px;
      height: 24px;
    }
  }
  .trending-empty {
    padding: 0 24px;
    color: ${a.GRAY6};
  }

  .list {
    list-style: none;
    padding: 0;
    margin: 0;
    cursor: pointer;
    &-item {
      padding: 18px 16px 18px 24px;
      overflow: hidden;
      color: ${a.white};
      text-overflow: ellipsis;
      font-family: Barlow;
      font-size: 16px;
      font-style: normal;
      font-weight: 600;
      line-height: 11px;
      &:hover {
        background: rgba(0, 0, 0, 0.1);
        color: ${a.SECONDARY_BLUE};
      }
      &:active {
        background: rgba(0, 0, 0, 0.2);
        color: ${a.PRIMARY_BLUE};
      }
    }
  }
`,bc=l.p`
  color: ${a.GRAY6};
  margin-bottom: 20px;
`,vc=l(_e)`
  && {
    min-width: 28px;
    width: 28px;
    padding: 0;
    height: 28px;
    .MuiButton-startIcon {
      color: ${a.white};
      margin: auto;
      display: flex;
      align-items: center;
    }
  }
`,wc=l(_e)`
  && {
    &.isPlaying {
      font-weight: 700;
      color: ${a.BG1};
      background-color: ${a.white};
    }
  }
`,_c=l.span`
  position: absolute;
  top: 6px;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${a.GRAY6};
  margin-right: 4px;
`,Cc=l.audio`
  height: 0;
  width: 0;
`,jc=()=>{const{isFetching:e}=ue(s=>s),{currentSearch:t}=$e(s=>s),[o]=ao(s=>[s.trendingTopicsFeatureFlag]),n=c.useRef(null);return r.jsxs(Sc,{ref:n,children:[!t&&o&&r.jsx(kc,{children:r.jsx(gc,{})}),!t&&r.jsx(cc,{}),e?r.jsx(en,{}):r.jsx(pc,{isSearchResult:!!t})]})},Sc=l(m)(()=>({overflow:"auto",flex:1,width:"100%"})),kc=l(m)`
  padding: 0;
  margin-bottom: 36px;
  margin-top: 20px;
`,Pc=()=>{var P;const[e,t]=c.useState(null),{sidebarFilter:o,setSidebarFilter:n,sidebarFilterCounts:s=[]}=ue(u=>u),{getSchemaByType:i}=pr(),d=(o??"").toLowerCase(),h=((P=s.find(u=>u.name===d))==null?void 0:P.count)||0,f=u=>u?u.charAt(0).toUpperCase()+u.slice(1):"",p=u=>{h>=1&&t(u.currentTarget)},v=()=>{t(null)},b=u=>{n(u),v()},y=u=>{const x=i(u);return(x==null?void 0:x.index)||(x==null?void 0:x.node_key)||f(u)};return r.jsxs("div",{children:[r.jsxs($c,{onClick:p,children:[r.jsx("div",{className:"text",children:"Show"}),r.jsx("div",{className:"value","data-testid":"value",children:`${y(d)} (${h})`}),h>=1&&r.jsx("div",{className:"icon",children:e?r.jsx(fr,{}):r.jsx(mr,{})})]}),r.jsx(Tc,{anchorEl:e,anchorOrigin:{vertical:"bottom",horizontal:"left"},anchorPosition:{top:62,left:0},onClose:v,open:!!e,transformOrigin:{vertical:"top",horizontal:"left"},children:r.jsx(as,{children:s.filter(({name:u})=>u).map(({name:u,count:x})=>r.jsxs(Lc,{className:it({active:u===o}),onClick:S=>{S.preventDefault(),b(u)},children:[r.jsx("span",{className:"icon",children:u===o?r.jsx(ns,{}):null}),r.jsx("span",{children:`${y(u)} (${x})`})]},u))})})]})},$c=l(m).attrs({direction:"row",align:"center"})`
  cursor: pointer;
  flex-grow: 1;
  color: ${a.GRAY6};
  font-family: Barlow;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  padding: 0 8px;
  .value,
  .icon {
    color: ${a.white};
  }

  .value {
    margin: 0 8px 0 4px;
  }
`,Lc=l(m).attrs({direction:"row",align:"center"})`
  font-family: Barlow;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  color: ${a.GRAY3};
  height: 27px;
  cursor: pointer;
  &.active {
    color: ${a.white};
  }
  &:hover {
    color: ${a.white};
  }

  .icon {
    margin-right: 8px;
    width: 9px;
    font-size: 10px;
  }
`,Tc=l(Qn)`
  .MuiPaper-root {
    background: ${a.BUTTON1};
    min-width: 149px;
    padding: 16px;
    color: ${a.GRAY3};
    box-shadow: 0px 1px 6px 0px rgba(0, 0, 0, 0.2);
    border-radius: 6px;
  }
`,sr={Monitoring:["Bugevent","Trace","Application","Report","Stacktrace"]},Oc=({handleFastFiltersSelect:e})=>{const[t,o]=c.useState(""),n=s=>{if(t===s){e([]),o("");return}sr[s]&&(e(sr[s]),o(s))};return r.jsxs(r.Fragment,{children:[r.jsx(Ac,{children:r.jsx("div",{children:"Favorites"})}),r.jsx(ft,{children:r.jsx(Ec,{children:Object.keys(sr).map(s=>r.jsx(Rc,{isSelected:s===t,onClick:()=>n(s),children:s},s))})})]})},Ac=l.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 8px;
  font-family: Barlow;
  font-size: 18px;
  font-weight: 500;
`,Ec=l(m).attrs({align:"center",direction:"row",grow:1,justify:"flex-start"})`
  flex-wrap: wrap;
  gap: 10px;
  max-height: 400px;
  overflow-y: auto;
  padding-right: 10px;
  margin-right: calc(0px - 16px);
`,Rc=l(m).attrs({align:"center",direction:"row",justify:"flex-start"})`
  color: ${({isSelected:e})=>e?a.black:a.white};
  background: ${({isSelected:e})=>e?a.white:a.BUTTON1_PRESS};
  padding: 6px 10px 6px 8px;
  font-family: Barlow;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: 15px;
  letter-spacing: 0.78px;
  margin: 0 3px;
  border-radius: 200px;
  cursor: pointer;

  &:hover {
    background: ${({isSelected:e})=>e?a.white:a.BUTTON1_PRESS};
  }

  &:active {
    background: ${a.white};
    color: ${a.black};
  }
`,Mc=({hops:e,setHops:t})=>r.jsxs(r.Fragment,{children:[r.jsxs(kr,{children:[r.jsx("div",{children:"Hops"}),r.jsx(Sr,{children:"Distance away from source nodes"})]}),r.jsx(ft,{children:r.jsxs(Ic,{children:[r.jsx(Qe,{control:r.jsx(nt,{checked:e===1,onChange:()=>t(1)}),label:"Direct relationship"}),r.jsx(Qe,{control:r.jsx(nt,{checked:e===2,onChange:()=>t(2)}),label:"2 hops away"}),r.jsx(Qe,{control:r.jsx(nt,{checked:e===3,onChange:()=>t(3)}),label:"3 hops away"}),r.jsx(Qe,{control:r.jsx(nt,{checked:e===4,onChange:()=>t(4)}),label:"4 hops away"}),r.jsx(Qe,{control:r.jsx(nt,{checked:e===5,onChange:()=>t(5)}),label:"5 hops away"})]})})]}),Ic=l(m).attrs({direction:"column",align:"flex-start"})`
  gap: 10px;
`,nt=l(As)`
  && {
    .MuiSvgIcon-root {
      border-radius: 8px;
    }
  }
`,Nc=({maxResults:e,setMaxResults:t})=>{const o=(n,s)=>{const i=Array.isArray(s)?s[0]:s;t(i)};return r.jsxs(r.Fragment,{children:[r.jsxs(kr,{children:[r.jsx("div",{children:"Max results"}),r.jsx(Sr,{children:"Total number of relationships"})]}),r.jsxs(ft,{children:[r.jsxs(rn,{children:[r.jsx("span",{children:"0"}),r.jsx("span",{children:"1000"})]}),r.jsx(tn,{direction:"row",children:r.jsx(Bc,{className:"volume-slider","data-testid":"max-results-slider",max:1e3,min:0,onChange:o,size:"medium",step:1,value:e,valueLabelDisplay:"on"})})]})]})},Bc=l(At)({"& .MuiSlider-valueLabel":{backgroundColor:`${a.primaryBlue}`}}),zc=({handleSchemaTypeClick:e,selectedTypes:t,schemaAll:o})=>{const[n,s]=c.useState(!1),h=3*4,f=(n?o:o.slice(0,h)).filter((p,v,b)=>v===b.findIndex(y=>y.type===p.type));return r.jsxs(r.Fragment,{children:[r.jsxs(Dc,{children:[r.jsx("div",{children:"Type"}),r.jsxs(Vc,{children:[r.jsx(Fc,{children:t.length}),r.jsx(Hc,{children:"Selected"})]})]}),r.jsxs(ft,{children:[r.jsx(Wc,{children:f.map(p=>r.jsx(Yc,{isSelected:t.includes(p.type),onClick:()=>e(p==null?void 0:p.type),children:p.type},p.type))}),!n&&o.length>h&&r.jsx(Gc,{onClick:()=>s(!0),children:r.jsxs(Uc,{children:[r.jsx(hr,{})," View More"]})})]})]})},Dc=l.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 8px;
  font-family: Barlow;
  font-size: 18px;
  font-weight: 500;
`,Vc=l.div`
  font-size: 13px;
  display: flex;
  align-items: center;
`,Fc=l.span`
  color: ${a.white};
`,Hc=l.span`
  color: ${a.GRAY3};
  margin-left: 4px;
`,Uc=l.span`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 6px;

  svg {
    width: 23px;
    height: 23px;
    fill: none;
    margin-top: 2px;
  }
`,Wc=l(m).attrs({align:"center",direction:"row",grow:1,justify:"flex-start"})`
  flex-wrap: wrap;
  gap: 10px;
  padding-right: 10px;
  margin-right: calc(0px - 16px);
`,Yc=l(m).attrs({align:"center",direction:"row",justify:"flex-start"})`
  color: ${({isSelected:e})=>e?a.black:a.white};
  background: ${({isSelected:e})=>e?a.white:a.BUTTON1_PRESS};
  padding: 6px 10px 6px 8px;
  font-family: Barlow;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: 15px;
  letter-spacing: 0.78px;
  margin: 0 3px;
  border-radius: 200px;
  cursor: pointer;

  &:hover {
    background: ${({isSelected:e})=>e?a.white:a.BUTTON1_PRESS};
  }

  &:active {
    background: ${a.white};
    color: ${a.black};
  }
`,Gc=l.button`
  background: transparent;
  color: ${a.white};
  border: none;
  padding: 6px 12px 6px 3px;
  margin-top: 20px;
  cursor: pointer;
  border-radius: 4px;
  font-family: Barlow;
  font-size: 13px;
  font-weight: 500;

  &:hover {
    background: ${a.BUTTON1_HOVER};
  }

  &:active {
    background: ${a.BUTTON1_PRESS};
  }
`,Zc=({sourceNodes:e,setSourceNodes:t})=>{const o=(n,s)=>{const i=Array.isArray(s)?s[0]:s;t(i)};return r.jsxs(r.Fragment,{children:[r.jsxs(kr,{children:[r.jsx("div",{children:"Source Nodes"}),r.jsx(Sr,{children:"Core set of nodes based on search term"})]}),r.jsxs(ft,{children:[r.jsxs(rn,{children:[r.jsx("span",{children:"0"}),r.jsx("span",{children:"100"})]}),r.jsx(tn,{direction:"row",children:r.jsx(Xc,{className:"volume-slider","data-testid":"source-nodes-slider",max:100,min:0,onChange:o,size:"medium",step:1,value:e,valueLabelDisplay:"on"})})]})]})},Xc=l(At)({"& .MuiSlider-valueLabel":{backgroundColor:`${a.primaryBlue}`}}),Re={selectedTypes:[],hops:3,sourceNodes:10,maxResults:1e3},qc=({anchorEl:e,setAnchorEl:t,onClose:o})=>{const[n,s]=pr(M=>[M.schemas,M.setSchemas]),{abortFetchData:i,resetGraph:d,setFilters:h,resetData:f}=ue(M=>M),[p,v]=c.useState(Re.selectedTypes),[b,y]=c.useState(Re.hops),[P,u]=c.useState(Re.sourceNodes),[x,S]=c.useState(Re.maxResults),{fastFiltersFeatureFlag:T}=ao(M=>M);c.useEffect(()=>{(async()=>{try{const L=await $n();s(L.schemas.filter(w=>!w.is_deleted))}catch(L){console.error("Error fetching schema:",L)}})()},[s]);const j=M=>{v(L=>L.includes(M)?L.filter(w=>w!==M):[...L,M])},I=M=>{v(M)},O=()=>{v(Re.selectedTypes),y(Re.hops),u(Re.sourceNodes),S(Re.maxResults)},k=async()=>{O(),i(),d()},R=async()=>{h({node_type:p,limit:x,depth:b.toString(),top_node_count:P.toString()}),f(),t(null),o()};return r.jsxs(Kc,{anchorEl:e,disablePortal:!0,modifiers:[{name:"offset",options:{offset:[0,10]}}],open:!!e,placement:"bottom-end",children:[T&&r.jsxs(r.Fragment,{children:[r.jsx(Oc,{handleFastFiltersSelect:I}),r.jsx(st,{})]}),r.jsx(zc,{handleSchemaTypeClick:j,schemaAll:n,selectedTypes:p}),r.jsx(st,{}),r.jsx(Zc,{setSourceNodes:u,sourceNodes:P}),r.jsx(st,{}),r.jsx(Mc,{hops:b,setHops:y}),r.jsx(st,{}),r.jsx(Nc,{maxResults:x,setMaxResults:S}),r.jsxs(Qc,{children:[r.jsx(st,{}),r.jsxs(rd,{children:[r.jsxs(Jc,{color:"secondary",onClick:k,size:"large",style:{marginRight:20},variant:"contained",children:[r.jsx(ed,{children:r.jsx(io,{})}),"Clear"]}),r.jsx(td,{color:"secondary",onClick:R,size:"large",variant:"contained",children:"Apply"})]})]})]})},Kc=l(is)`
  &&.MuiPopper-root {
    background: ${a.BG2};
    padding: 16px;
    max-height: calc(100% - 20%);
    color: ${a.white};
    box-shadow: 0px 1px 6px 0px rgba(0, 0, 0, 0.2);
    border-radius: 9px;
    max-width: 361px;
    overflow-x: hidden;
    padding-bottom: 0 !important;
    overflow-y: auto;
    border: 1px solid ${a.black};
    z-index: 100;
    position: relative;
    &::-webkit-scrollbar {
      width: 3px;
      height: auto;
    }

    &::-webkit-scrollbar-track {
      background: ${a.BG2};
      border-radius: 9px;
      margin-top: 5px;
      margin-bottom: 68px;
      overflow-y: hidden;
    }
  }
`,Qc=l.div`
  justify-content: space-between;
  align-items: center;
  padding: 0px 8px 8px 8px;
  position: sticky;
  bottom: 0;
  background: ${a.BG2};
  width: calc(100% + 32px);
  margin: -16px;
`,st=l.div`
  border: 1px solid ${a.black};
  width: calc(100% + 32px);
  margin: 13px -16px;
`,Jc=l(_e)`
  && {
    color: ${a.white};
    background-color: ${a.BUTTON1};
    padding-left: 4px;
    &:hover,
    &:active,
    &:focus {
      color: rgba(255, 255, 255, 0.85);
      background-color: ${a.BUTTON1};
    }
  }
`,ed=l.span`
  svg {
    width: 32px;
    height: 32px;
    color: ${a.GRAY7};
    fill: none;
    margin-top: 4px;
  }
`,td=l(_e)`
  && {
    flex: 1;
    padding: 2px 55px;
  }
`,Sr=l.div`
  font-family: Barlow;
  font-size: 13px;
  font-weight: 500;
  line-height: 15.6px;
  text-align: left;
  margin-top: 10px;
  color: ${a.modalAuth};
`,kr=l.div`
  display: flex;
  flex-direction: column;
  font-family: Barlow;
  font-size: 18px;
  font-weight: 500;
`,tn=l(m)`
  margin: 10px auto;

  .volume-slider {
    display: block;
    color: ${a.modalShield};
    height: 4px;
    .MuiSlider-track {
      border: none;
    }
    .MuiSlider-rail {
      background-color: ${a.black};
    }
    .MuiSlider-thumb {
      width: 20px;
      height: 20px;
      background-color: ${a.white};
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
`,rn=l.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 10px auto;
`,rd=l(m)`
  flex-direction: row;
  margin: 0 0 6px 3px;
`,ft=l.div`
  padding: 13px 0;
  position: relative;
`,od=e=>r.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 19 19",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M7.69676 3.60648L7.1294 5.13924C6.38611 7.14919 6.01447 8.15417 5.28108 8.88756C4.54769 9.62095 3.54271 9.99259 1.53275 10.7359L0 11.3032L1.53275 11.8706C3.54271 12.6139 4.54769 12.9866 5.28108 13.7189C6.01447 14.4512 6.38611 15.4573 7.1294 17.4672L7.69676 19L8.26412 17.4672C9.00741 15.4573 9.38015 14.4523 10.1124 13.7189C10.8447 12.9855 11.8508 12.6139 13.8608 11.8706L15.3935 11.3032L13.8608 10.7359C11.8508 9.99259 10.8458 9.62095 10.1124 8.88756C9.37905 8.15417 9.00741 7.14919 8.26412 5.13924L7.69676 3.60648ZM15.7014 0L15.4584 0.656423C15.1395 1.51846 14.9801 1.94948 14.6667 2.26285C14.3523 2.57731 13.9212 2.73675 13.0592 3.05451L12.4028 3.29861L13.0603 3.54161C13.9212 3.86047 14.3523 4.01991 14.6656 4.33328C14.9801 4.64774 15.1395 5.07876 15.4573 5.9408L15.7014 6.59722L15.9444 5.9408C16.2633 5.07876 16.4227 4.64774 16.7361 4.33437C17.0505 4.01991 17.4815 3.86047 18.3436 3.54271L19 3.29861L18.3425 3.05561C17.4815 2.73675 17.0505 2.57731 16.7372 2.26395C16.4227 1.94948 16.2633 1.51846 15.9455 0.656423L15.7014 0Z",fill:"currentColor"})}),nd=l.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
`,sd=l(_e)`
  z-index: 2;
  && {
    position: absolute;
    right: 5px;
    height: 32px;
    border-radius: 16px;
    min-width: 32px;
  }

  &&.MuiButton-root {
    padding: 0 10px 0 12px;
  }

  svg {
    margin-top: 1px;
    width: 11px;
    height: 11px;
  }
`,ad=l.input.attrs(()=>({autoCorrect:"off",autoComplete:"off"}))`
  pointer-events: auto;
  height: 40px;
  padding: 0 48px 0 16px;
  z-index: 2;
  width: 100%;
  color: #fff;
  box-shadow: none;
  border: none;
  border-radius: 200px;
  background: ${a.BG2};

  -webkit-autofill,
  -webkit-autocomplete,
  -webkit-contacts-auto-fill,
  -webkit-credentials-auto-fill {
    display: none !important;
    visibility: hidden !important;
    pointer-events: none !important;
    position: absolute !important;
    right: 0 !important;
  }

  &:focus {
    outline: 1px solid ${a.primaryBlue};
  }

  &:hover {
    background: ${a.black};
  }

  &::placeholder {
    color: ${a.GRAY7};
  }
`,id=({placeholder:e="What do you want to know?",onSubmit:t,onClick:o})=>{const{register:n,watch:s}=$t(),i=s("aiChat"),d=(i==null?void 0:i.trim().length)>0;return r.jsxs(nd,{onClick:o,children:[r.jsx(ad,{...n("aiChat"),"data-testid":"ai_chat_input",id:"ai-chat-input",onKeyPress:h=>{h.key==="Enter"&&(i==null?void 0:i.trim())!==""&&t&&t(i)},placeholder:e,type:"text"}),r.jsx(sd,{color:"secondary",disabled:!d,onClick:()=>{d&&t&&t(i)},variant:"contained",children:r.jsx(Fn,{})})]})},ld=Lt`
  from {
    transform: translateX(100%) scale(0.98);
    opacity: 0;
  }
  to {
    transform: translateX(0) scale(1);
    opacity: 1;
  }
`,cd=Lt`
  from {
    transform: translateX(0) scale(1);
    opacity: 1;
  }
  to {
    transform: translateX(100%) scale(0.98);
    opacity: 0;
  }
`,dd=Lt`
  from {
    transform: translateX(-100%) scale(0.98);
    opacity: 0;
  }
  to {
    transform: translateX(0) scale(1);
    opacity: 1;
  }
`,ud=Lt`
  from {
    transform: translateX(0) scale(1);
    opacity: 1;
  }
  to {
    transform: translateX(-100%) scale(0.98);
    opacity: 0;
  }
`,pd=l.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  transition: width 0.5s cubic-bezier(0.25, 1, 0.5, 1);
  overflow: hidden;

  .search-section {
    animation: ${({isAIChatActive:e})=>e?ud:dd} 0.5s
      cubic-bezier(0.25, 1, 0.5, 1);
  }

  .ai-chat-section {
    animation: ${({isAIChatActive:e})=>e?ld:cd} 0.5s
      cubic-bezier(0.25, 1, 0.5, 1);
  }
`,hd=()=>{const{isFetching:e,setSidebarFilter:t,abortFetchData:o}=ue(E=>E),{navigateToNode:n}=Tt(),{setNewLoading:s}=Pe(E=>E),i=so(),{currentSearch:d,clearSearch:h,searchFormValue:f}=$e(E=>E),{setValue:p,watch:v}=$t(),b=c.useRef(null),[y,P]=c.useState(!1),[u,x]=c.useState(!1),[S,T]=c.useState(null),[j]=Ln(),I=j.get("q")??"",[O,k]=c.useState(!1),{setAbortRequests:R,resetData:M}=ue(E=>E),{setBudget:L}=dt(E=>E),w=Pe(E=>E.resetAiSummaryAnswer),_=Pe(E=>E.fetchAIData),z=()=>{p("search",""),h(),t("all"),n(null),fe("/"),p("aiChat",""),s({question:"",answerLoading:!1,sourcesLoading:!1,shouldRender:!0}),k(!0)},V=()=>{s(null),o(),w(),fe("/")},oe=()=>{k(!1),V()};c.useEffect(()=>{p("search",I||f)},[p,f,I]),c.useEffect(()=>{const E=b.current;if(!E)return;const Le=()=>{P((E==null?void 0:E.scrollTop)>0)};E.addEventListener("scroll",Le)},[]);const H=v("search"),J=E=>{T(u?null:E.currentTarget),x(Le=>!Le)},ne=()=>{x(!1),T(null)},fe=ur(),pe=async E=>{E&&(w(),M(),await _(L,R,E))};return r.jsxs(on,{className:it({"has-shadow":y}),children:[r.jsx(xd,{children:r.jsx(pd,{isAIChatActive:O,children:O?r.jsxs(_d,{className:"ai-chat-section",children:[r.jsx(wd,{"data-testid":"search_toggle_icon",onClick:oe,children:r.jsx(St,{})}),r.jsx(id,{onSubmit:pe})]}):r.jsxs(r.Fragment,{children:[r.jsxs(fd,{className:"search-section",children:[r.jsx(Ko,{}),r.jsx(gd,{"data-testid":"search_action_icon",onClick:()=>{if(d){p("search",""),h(),t("all"),n(null),fe("/");return}if(H.trim()==="")return;const E=H.replace(/\s+/g,"+");fe(`/search?q=${E}`)},children:e?r.jsx(Ot,{color:a.SECONDARY_BLUE,"data-testid":"loader",size:"20"}):r.jsx(r.Fragment,{children:d!=null&&d.trim()?r.jsx(io,{}):r.jsx(St,{})})})]}),r.jsx(yd,{"data-testid":"search_filter_icon",isFilterOpen:u,onClick:J,children:u?r.jsx(Hn,{}):r.jsx(Un,{})}),r.jsxs(bd,{onClick:z,children:[r.jsx(vd,{children:r.jsx(od,{})}),"Chat"]}),r.jsx(qc,{anchorEl:S,onClose:ne,setAnchorEl:T})]})})}),d&&r.jsx(md,{children:e?r.jsxs(Cd,{children:["Searching ",r.jsx(ta,{color:a.SECONDARY_BLUE,size:2})]}):r.jsxs(r.Fragment,{children:[r.jsxs("div",{className:"left",children:[r.jsx("span",{className:"count",children:i.length}),r.jsx("span",{className:"label",children:" results"})]}),r.jsx("div",{className:"right",style:{alignItems:"center"},children:r.jsx(Pc,{})})]})})]})},on=l(m).attrs({direction:"column",justify:"center",align:"stretch"})(({theme:e})=>({padding:e.spacing(3.75,2),[e.breakpoints.up("sm")]:{padding:"12px"},"&.has-shadow":{borderBottom:"1px solid rgba(0, 0, 0, 0.25)",background:a.BG1,boxShadow:"0px 1px 6px 0px rgba(0, 0, 0, 0.20)"}})),fd=l(m).attrs({direction:"row",justify:"center",align:"center"})`
  width: 62%;
  padding: 3px 0;
`,md=l(m).attrs({direction:"row",justify:"space-between",align:"center"})`
  flex-grow: 1;
  color: ${a.GRAY6};
  font-family: Barlow;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  margin-top: 10px;
  padding: 0 8px;
  .count {
    color: ${a.white};
  }

  .right {
    display: flex;
  }
`,gd=l(m).attrs({align:"center",justify:"center",p:5})`
  font-size: 32px;
  color: ${a.mainBottomIcons};
  cursor: pointer;
  transition-duration: 0.2s;
  margin-left: -42px;
  z-index: 2;
  width: 30px;

  &:hover {
    /* background-color: ${a.gray200}; */
  }

  ${on} input:focus + & {
    color: ${a.primaryBlue};
  }
`,xd=l(m)`
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`,yd=l.div`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s;
  margin-left: 5px;
  border: 1px solid ${a.addAttributeBtn};
  cursor: pointer;
  border-radius: ${({isFilterOpen:e})=>e?"8px":"50%"};
  width: ${({isFilterOpen:e})=>e?"34px":"40px"};
  height: ${({isFilterOpen:e})=>e?"34px":"40px"};
  background-color: ${({isFilterOpen:e})=>e?a.white:"transparent"};

  &:hover {
    background-color: ${({isFilterOpen:e})=>e?"rgba(255, 255, 255, 0.85)":"transparent"};
    border-color: ${a.GRAY_FILTER_ICON};
  }

  svg {
    width: 15px;
    height: ${({isFilterOpen:e})=>e?"11px":"24px"};
    color: ${({isFilterOpen:e})=>e?a.black:a.GRAY7};
    fill: none;
  }
`,bd=l.button`
  display: flex;
  align-items: center;
  gap: 6px;
  background: ${a.BUTTON1};
  border: none;
  border-radius: 20px;
  padding: 8px 14px;
  color: ${a.white};
  font-family: Barlow;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: opacity 0.2s;

  &:hover {
    background: ${a.BUTTON1_HOVER};
    opacity: 0.9;
  }
`,vd=l.div`
  svg {
    width: 20px;
    height: 20px;
    color: ${a.white};
    fill: none;
    margin-left: calc(0px - 3px);
  }
`,wd=l.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${a.BG2};
  border: none;
  cursor: pointer;
  margin-right: 8px;

  svg {
    width: 45px;
    height: 45px;
    color: ${a.GRAY7};

    &:hover {
      color: ${a.lightGray};
    }
  }

  &:hover {
    background: ${a.black};
  }
`,_d=l(m).attrs({direction:"row",justify:"center",align:"center"})`
  width: 100%;
  padding: 3px 1px;
`,Cd=l(m)`
  display: flex;
  align-items: baseline;
  flex-direction: row;
`,jd=({isPlaying:e,isFullScreen:t,setIsPlaying:o,playingTime:n,duration:s,handleProgressChange:i,handleVolumeChange:d,onFullScreenClick:h,showToolbar:f})=>{const[p,v]=c.useState(.5),[b,y]=c.useState(!1),[P,u]=c.useState(.5),x=(T,j)=>{const I=Array.isArray(j)?j[0]:j;v(I),d(T,I),b&&y(!1)},S=()=>{b?(v(P),d(new Event("input"),P)):(u(p),v(0),d(new Event("input"),0)),y(!b)};return r.jsxs(m,{children:[(!f||t)&&r.jsx(Od,{"aria-label":"Small","data-testid":"progress-bar",isFullScreen:t,max:s,onChange:i,size:"small",value:n}),r.jsxs(Sd,{align:"center",direction:"row",showToolbar:f||t,children:[r.jsx($d,{onClick:o,size:"small",children:e?r.jsx(co,{}):r.jsx(uo,{})}),r.jsxs(Ad,{direction:"row",children:[r.jsx("span",{children:Zr(n)}),r.jsx("span",{className:"separator",children:"/"}),r.jsx("span",{className:"duration",children:Zr(s)})]}),r.jsxs(Ld,{direction:"row",px:9,children:[r.jsx(At,{className:"volume-slider",max:1,min:0,onChange:x,size:"small",step:.1,value:p}),r.jsx(kd,{onClick:S,children:b?r.jsx(Pd,{children:r.jsx(Wn,{})}):r.jsx(Yn,{})})]}),r.jsx(Td,{"data-testid":"fullscreen-button",onClick:h,children:t?r.jsx(Zn,{}):r.jsx(Gn,{})})]})]})},Sd=l(m)`
  height: 60px;
  padding: 12px 16px;
  ${e=>e.showToolbar&&`
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index:1;
    background-color: rgba(0, 0, 0, 0.6);
  `}

  &.error-wrapper {
    color: ${a.primaryRed};
  }
`,kd=l.span``,Pd=l.span`
  color: gray;
`,$d=l(Jn)`
  && {
    font-size: 36px;
    padding: 2px;
    margin-left: 8px;
  }
`,Ld=l(m)`
  height: 28px;
  font-size: 26px;
  border-radius: 200px;
  color: ${a.white};
  margin-left: auto;

  .volume-slider {
    display: none;
    color: ${a.white};
    height: 3px;
    .MuiSlider-track {
      border: none;
    }
    .MuiSlider-thumb {
      width: 2px;
      height: 10px;
      background-color: ${a.white};
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

  &:hover {
    background: rgba(42, 44, 55, 1);
    .volume-slider {
      width: 62px;
      margin-right: 4px;
      display: block;
    }
  }
`,Td=l(m)`
  cursor: pointer;
  padding: 8px;
  font-size: 32px;
  color: #d9d9d9;
`,Od=l(At)`
  && {
    z-index: 20;
    color: ${a.white};
    height: 3px;
    width: calc(100% - 12px);
    margin: ${e=>e.isFullScreen?"80px auto":"-12px auto"};
    box-sizing: border-box;

    ${e=>e.isFullScreen&&`
      width: calc(100% - 80px)
    padding: 12px auto;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index:1;
  `}

    .MuiSlider-track {
      border: none;
    }
    .MuiSlider-thumb {
      width: 10px;
      height: 10px;
      background-color: ${a.white};
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
`,Ad=l(m)`
  color: ${a.white};
  font-size: 13px;
  margin-left: 16px;
  font-weight: 500;

  .separator {
    color: ${a.GRAY6};
    margin: 0 4px;
  }

  .duration {
    color: ${a.GRAY6};
  }
`,Ed=({hidden:e})=>{var Te,Se;const t=c.useRef(null),o=c.useRef(null),[n,s]=c.useState(!1),[i,d]=c.useState(!1),[h,f]=c.useState(!1),[p,v]=c.useState("ready"),[b,y]=c.useState(!1),[P,u]=c.useState(""),[x,S]=c.useState(!1),T=gr();c.useEffect(()=>{const F=(T==null?void 0:T.properties)||{},B=Object.entries(F).find(([U])=>U==="timestamp"),ee=B?B[1]:"",ae=ee==null?void 0:ee.split("-")[0];u(ae)},[T]);const{isPlaying:j,playingTime:I,duration:O,setIsPlaying:k,setPlayingTime:R,setDuration:M,playingNode:L,volume:w,setVolume:_,setHasError:z,resetPlayer:V,isSeeking:oe,setIsSeeking:H}=po(F=>F),J=(L==null?void 0:L.media_url)||(L==null?void 0:L.link)||((Te=L==null?void 0:L.properties)==null?void 0:Te.link)||((Se=L==null?void 0:L.properties)==null?void 0:Se.media_url),ne=(J==null?void 0:J.includes("youtube"))||(J==null?void 0:J.includes("youtu.be"));c.useEffect(()=>()=>V(),[V]),c.useEffect(()=>{L&&!b&&(R(0),M(0),y(!1),S(!1))},[L,R,M,y,b]),c.useEffect(()=>{oe&&t.current&&(t.current.seekTo(I,"seconds"),H(!1))},[I,oe,H]),c.useEffect(()=>{if(b&&P&&t.current&&!x){const F=Nr(P);t.current.seekTo(F,"seconds"),R(F),S(!0)}},[b,P,R,x]);const fe=()=>{k(!j)},pe=()=>{k(!0)},E=()=>{k(!1)},Le=(F,B)=>{const ee=Array.isArray(B)?B[0]:B;R(ee),t.current&&!oe&&t.current.seekTo(ee,"seconds")},Fe=(F,B)=>{const ee=Array.isArray(B)?B[0]:B;_(ee)},Ae=()=>{z(!0),v("error")},se=F=>{if(!oe){const B=F.playedSeconds;R(B)}},He=()=>{if(t.current){v("ready");const F=t.current.getDuration();if(M(F),P&&!x){const B=Nr(P);t.current.seekTo(B,"seconds"),R(B),S(!0)}}},Ie=()=>{o.current&&(document.fullscreenElement?(document.exitFullscreen(),setTimeout(()=>d(!1),300)):o.current.requestFullscreen().then(()=>{document.addEventListener("fullscreenchange",je)}))},je=()=>{d(!!document.fullscreenElement),document.removeEventListener("fullscreenchange",je)};c.useEffect(()=>()=>{document.removeEventListener("fullscreenchange",je)}),c.useEffect(()=>{const F=B=>{if(i){const ee=window.screen.height,ae=B.clientY,U=ee-ae;f(U<=50)}};return document.addEventListener("mousemove",F),()=>{document.removeEventListener("mousemove",F)}},[i,h]),c.useEffect(()=>{const F=B=>{i&&B.key==="Escape"?(B.preventDefault(),B.stopPropagation()):n&&B.key===" "&&(B.preventDefault(),fe())};return document.addEventListener("fullscreenchange",je),document.addEventListener("keydown",F),()=>{document.removeEventListener("fullscreenchange",je),document.removeEventListener("keydown",F)}});const qe=()=>{fe()};return J?r.jsxs(Rd,{ref:o,hidden:e,onBlur:()=>s(!1),onFocus:()=>s(!0),tabIndex:0,children:[r.jsx(Md,{isFullScreen:i,children:r.jsx(Tn,{size:120,src:(L==null?void 0:L.image_url)||"",type:"clip"})}),r.jsx(Bd,{isFullScreen:i,onClick:qe,children:r.jsx(hl,{ref:t,controls:!1,height:i?window.screen.height:"200px",onBuffer:()=>v("buffering"),onBufferEnd:()=>v("ready"),onError:Ae,onPause:E,onPlay:pe,onProgress:se,onReady:He,playing:j,url:J||"",volume:w,width:"100%"})}),p==="error"?r.jsx(Nd,{className:"error-wrapper",children:"Error happened, please try later"}):null,p==="ready"?r.jsx(jd,{duration:O,handleProgressChange:Le,handleVolumeChange:Fe,isFullScreen:i,isPlaying:j,onFullScreenClick:Ie,playingTime:I,setIsPlaying:fe,showToolbar:h&&i}):null,p==="buffering"&&!ne?r.jsx(Id,{isFullScreen:i,children:r.jsx(Ot,{color:a.lightGray})}):null]}):null},Rd=l(m)`
  border-bottom: 1px solid rgba(0, 0, 0, 0.25);
  background: rgba(0, 0, 0, 0.2);
  position: relative;
  border-top-right-radius: 16px;
  border-top-left-radius: 16px;
  overflow: hidden;
  height: ${e=>e.hidden?"0px":"auto"};
  &:focus {
    outline: none;
  }
`,Md=l(m)`
  position: absolute;
  top: ${e=>e.isFullScreen?"38%":"18%"};
  left: 50%;
  transform: translateX(-50%);
  z-index: -1;
`,Id=l(m)`
  position: absolute;
  top: ${e=>e.isFullScreen?"43%":"39%"};
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
`,Nd=l(m)`
  height: 60px;
  padding: 12px 16px;
  color: ${a.primaryRed};
`,Bd=l.div`
  margin: ${e=>e.isFullScreen?"80px auto":"0"};
  width: 100%;
  cursor: pointer;
`,zd=c.memo(Ed),Dd=({open:e})=>{const{navigateToNode:t}=Tt(),o=gr(),{setSidebarOpen:n}=$e(i=>i),{playingNode:s}=po(i=>i);return r.jsx(lt,{"data-testid":"sidebar-sub-view",direction:"right",in:e,style:{position:e?"relative":"absolute"},children:r.jsxs(Vd,{children:[r.jsx(zd,{hidden:(o==null?void 0:o.ref_id)!==(s==null?void 0:s.ref_id)},s==null?void 0:s.ref_id),r.jsxs(Hd,{children:[r.jsx(Ud,{children:r.jsx(rs,{})}),r.jsx(Qo,{contextSearch:!0})]}),r.jsx(Fd,{"data-testid":"close-sidebar-sub-view",onClick:()=>{t(null)},children:r.jsx(Xn,{})}),r.jsx(Wd,{onClick:()=>{n(!1)},children:r.jsx(lo,{})})]})})},Vd=l(m)(({theme:e})=>({position:"relative",background:a.BG1,width:"100%",margin:"64px auto 20px 10px",borderRadius:"16px",zIndex:29,[e.breakpoints.up("sm")]:{width:"390px"}})),Fd=l(m)`
  font-size: 32px;
  color: ${a.white};
  cursor: pointer;
  position: absolute;
  right: 3px;
  top: 3px;

  &:hover {
    color: ${a.GRAY6};
  }

  &:active {
  }
`,Hd=l(m)`
  flex: 1 1 100%;
  overflow: hidden;
`,Ud=l(m)`
  flex: 1 1 100%;
  border-radius: 16px;
  overflow: hidden;
`,Wd=l(m).attrs({align:"center",justify:"center",p:8})(({theme:e})=>({backgroundColor:a.BG1_NORMAL,cursor:"pointer",transitionDuration:"0.2s",position:"absolute",right:"0px",top:"50%",zIndex:1,width:"24px",height:"48px",transform:"translateY(-50%)",borderRadius:"0px 6px 6px 0px",boxShadow:"2px 0px 6px 0px rgba(0, 0, 0, 0.25) inset",color:a.white,[e.breakpoints.up("sm")]:{left:"100%"},"&:hover":{backgroundColor:a.BG1_HOVER},"&:active":{backgroundColor:a.BG1_PRESS,color:a.GRAY6}})),Yd=()=>{const{sidebarIsOpen:e,showCollapseButton:t}=$e(o=>({sidebarIsOpen:o.setSidebarOpen,showCollapseButton:o.showCollapseButton}));return r.jsx(r.Fragment,{children:t&&r.jsx(Gd,{onClick:()=>{e(!0)},children:r.jsx(qn,{})})})},Gd=l(m).attrs({align:"center",justify:"center",p:8})(({theme:e})=>({backgroundColor:a.BG1_NORMAL,cursor:"pointer",transitionDuration:"0.2s",position:"absolute",top:"50%",zIndex:1,width:"24px",height:"48px",transform:"translateY(-50%)",borderRadius:"0px 6px 6px 0px",boxShadow:"2px 0px 6px 0px rgba(0, 0, 0, 0.25) inset",color:a.white,[e.breakpoints.up("sm")]:{left:"64px"},"&:hover":{backgroundColor:a.BG1_HOVER},"&:active":{backgroundColor:a.BG1_PRESS,color:a.GRAY6}})),nn=390,Zd=c.forwardRef(({subViewOpen:e},t)=>{const{setSidebarOpen:o}=$e(s=>s),n=On();return r.jsxs(Kd,{ref:t,id:"sidebar-wrapper",children:[r.jsx(Jd,{}),r.jsx(hd,{}),n?r.jsx(nc,{}):r.jsx(jc,{}),!e&&r.jsx(Qd,{onClick:()=>{o(!1)},children:r.jsx(lo,{})})]})}),Xd=["topic","person","guest","event","organization","place","project","software"],qd=e=>{if(e==null)return!1;const o=Object.keys(e).filter(n=>n!=="pubkey");return o.length===1&&o[0]==="name"},sn=()=>{const{sidebarIsOpen:e}=$e(n=>n),t=gr(),o=!!t&&e&&!Xd.includes(t.node_type)&&!qd(t.properties);return r.jsxs(r.Fragment,{children:[r.jsx(lt,{direction:"right",in:e,mountOnEnter:!0,unmountOnExit:!0,children:r.jsx(Zd,{subViewOpen:o})}),r.jsx(Dd,{open:o}),!e&&r.jsx(Yd,{})]})},Kd=l(m)(({theme:e})=>({position:"relative",background:a.BG1,height:"100vh",width:"100%",zIndex:30,[e.breakpoints.up("sm")]:{width:nn}})),Qd=l(m).attrs({align:"center",justify:"center",p:8})(({theme:e})=>({backgroundColor:a.BG1_NORMAL,cursor:"pointer",transitionDuration:"0.2s",position:"absolute",right:"0px",top:"50%",zIndex:1,width:"24px",height:"48px",transform:"translateY(-50%)",borderRadius:"0px 6px 6px 0px",boxShadow:"2px 0px 6px 0px rgba(0, 0, 0, 0.25) inset",color:a.white,[e.breakpoints.up("sm")]:{left:"100%"},"&:hover":{backgroundColor:a.BG1_HOVER},"&:active":{backgroundColor:a.BG1_PRESS,color:a.GRAY6}})),Jd=l(m)`
  flex: 0 0 64px;
  background: ${a.BG2};
`;sn.displayName="Sidebar";const hu=Object.freeze(Object.defineProperty({__proto__:null,MENU_WIDTH:nn,SideBar:sn},Symbol.toStringTag,{value:"Module"}));export{As as C,nn as M,hl as R,At as S,hu as i,qa as p,Zr as s,Rt as u};
