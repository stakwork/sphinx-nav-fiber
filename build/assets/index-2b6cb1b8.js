import{f as N,h as F,r as M,j as y,a8 as fe,ae as de,F as V,T as pe}from"./index-7dcde225.js";import{i as he,H as ge,J as ve}from"./react-toastify.esm-8bcb4dda.js";import{i as me}from"./index.esm-8c214648.js";import{b as be,I as xe}from"./InfoIcon-c9d1fdb1.js";const j={autoComplete:"off",colorName:"black",disabled:!1,maxLength:524288,placeholder:"",placeholderTextColor:"gray100",returnKeyType:"done",textAlign:"left",type:"text"},_=N.input`
  -webkit-appearance: none;
  -webkit-text-fill-color: ${({colorName:e})=>F[e]};
  background: transparent;
  border: none;
  color: ${({colorName:e})=>F[e]};
  cursor: ${({disabled:e})=>e?"default":"text"};
  margin: 0;
  opacity: ${({disabled:e})=>e?.5:1};
  outline: 0;
  padding: 0;
  text-align: ${({textAlign:e})=>e};

  &:focus {
    border: none;
    box-shadow: none;
    outline: none;
  }

  &[type='number'] {
    appearance: textfield;
    -webkit-appearance: textfield;

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      appearance: none;
      -webkit-appearance: none;
    }
  }

  &::placeholder {
    -webkit-text-fill-color: ${({placeholderTextColor:e})=>F[e]};
    color: ${({placeholderTextColor:e})=>F[e]};
  }
`;_.displayName="WebTextInput";const U=M.forwardRef(({autoComplete:e=j.autoComplete,autoFocus:o,className:t,colorName:n=j.colorName,defaultValue:r,disabled:i=j.disabled,id:s,maxLength:u=j.maxLength,name:v,onBlur:d,onChange:l,onFocus:a,onKeyDown:c,placeholder:h=j.placeholder,placeholderTextColor:E=j.placeholderTextColor,textAlign:p=j.textAlign,type:f=j.type,value:w},C)=>{const P=M.useCallback(O=>{l&&l(O.target.value)},[l]);return y.jsx(_,{ref:C,autoComplete:e,autoFocus:o,className:t,colorName:n,defaultValue:r,disabled:i,id:s,maxLength:u,name:v,onBlur:d,onChange:P,onFocus:a,onKeyDown:c,placeholder:h,placeholderTextColor:E,textAlign:p,type:f,value:w})});U.displayName="BaseTextInput";var ee={exports:{}},te={exports:{}};function ne(e){return e&&typeof e=="object"&&"default"in e?e.default:e}var k=M,B=ne(k),ke=fe,J=ne(be);function R(){return(R=Object.assign||function(e){for(var o=1;o<arguments.length;o++){var t=arguments[o];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function Pe(e,o){e.prototype=Object.create(o.prototype),e.prototype.constructor=e,function(t,n){for(var r=Object.getOwnPropertyNames(n),i=0;i<r.length;i++){var s=r[i],u=Object.getOwnPropertyDescriptor(n,s);u&&u.configurable&&t[s]===void 0&&Object.defineProperty(t,s,u)}}(e,o)}function re(e,o){if(e==null)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],o.indexOf(t)>=0||(r[t]=e[t]);return r}function oe(e){return requestAnimationFrame(e)}function K(e){cancelAnimationFrame(e)}function L(e){var o=e.ownerDocument;return o.hasFocus()&&o.activeElement===e}function ie(e){return e==null?void 0:e.ownerDocument}function Ee(e){var o=function(t){var n;return(n=ie(t))==null?void 0:n.defaultView}(e);return!!o&&e instanceof o.HTMLElement}function q(e){return k.useCallback(function(){var o=e.current,t=typeof window<"u"&&Ee(o);if(!o||!t)return null;if(o.nodeName!=="INPUT"&&(o=o.querySelector("input")),!o)throw new Error("react-input-mask: inputComponent doesn't contain input node");return o},[e])}function ye(e,o){var t,n,r,i,s=k.useRef({start:null,end:null}),u=q(e),v=k.useCallback(function(){return function(p){var f=p.selectionStart,w=p.selectionEnd;return{start:f,end:w,length:w-f}}(u())},[u]),d=k.useCallback(function(){return s.current},[]),l=k.useCallback(function(p){var f=u();f&&L(f)&&(function(w,C,P){P===void 0&&(P=C),w.setSelectionRange(C,P)}(f,p.start,p.end),s.current=v())},[u,v]),a=k.useCallback(function(){s.current=v()},[v]),c=(t=a,n=k.useRef(null),r=k.useCallback(function(){n.current===null&&function p(){t(),n.current=oe(p)}()},[t]),i=k.useCallback(function(){K(n.current),n.current=null},[]),k.useEffect(function(){n.current&&(i(),r())},[r,i]),k.useEffect(K,[]),[r,i]),h=c[0],E=c[1];return k.useLayoutEffect(function(){if(o){var p=u();return p.addEventListener("focus",h),p.addEventListener("blur",E),L(p)&&h(),function(){p.removeEventListener("focus",h),p.removeEventListener("blur",E),E()}}}),{getSelection:v,getLastSelection:d,setSelection:l}}function we(e,o){var t=k.useRef(),n=ye(t,o),r=n.getSelection,i=n.getLastSelection,s=n.setSelection,u=function(a,c){var h=q(a),E=k.useRef(c);return{getValue:k.useCallback(function(){return h().value},[h]),getLastValue:k.useCallback(function(){return E.current},[]),setValue:k.useCallback(function(p){E.current=p;var f=h();f&&(f.value=p)},[h])}}(t,e),v=u.getValue,d=u.getLastValue,l=u.setValue;return{inputRef:t,getInputState:function(){return{value:v(),selection:r()}},getLastInputState:function(){return{value:d(),selection:i()}},setInputState:function(a){var c=a.value,h=a.selection;l(c),s(h)}}}var Ce=["disabled","onBlur","onChange","onFocus","onMouseDown","readOnly","value"],Q={9:/[0-9]/,a:/[A-Za-z]/,"*":/[A-Za-z0-9]/},Se=function(e){var o=this;this.isCharacterAllowedAtPosition=function(t,n){var r=o.maskOptions.maskPlaceholder;return!!o.isCharacterFillingPosition(t,n)||!!r&&r[n]===t},this.isCharacterFillingPosition=function(t,n){var r=o.maskOptions.mask;if(!t||n>=r.length)return!1;if(!o.isPositionEditable(n))return r[n]===t;var i=r[n];return new RegExp(i).test(t)},this.isPositionEditable=function(t){var n=o.maskOptions,r=n.mask,i=n.permanents;return t<r.length&&i.indexOf(t)===-1},this.isValueEmpty=function(t){return t.split("").every(function(n,r){return!o.isPositionEditable(r)||!o.isCharacterFillingPosition(n,r)})},this.isValueFilled=function(t){return o.getFilledLength(t)===o.maskOptions.lastEditablePosition+1},this.getDefaultSelectionForValue=function(t){var n=o.getFilledLength(t),r=o.getRightEditablePosition(n);return{start:r,end:r}},this.getFilledLength=function(t){return function(n,r){for(var i=n.length-1;i>=0;i--)if(r(n[i],i))return i;return-1}(t.split(""),function(n,r){return o.isPositionEditable(r)&&o.isCharacterFillingPosition(n,r)})+1},this.getStringFillingLengthAtPosition=function(t,n){return t.split("").reduce(function(r,i){return o.insertCharacterAtPosition(r,i,r.length)},function(r,i){i===void 0&&(i=1);for(var s="",u=0;u<i;u++)s+=r;return s}(" ",n)).length-n},this.getLeftEditablePosition=function(t){for(var n=t;n>=0;n--)if(o.isPositionEditable(n))return n;return null},this.getRightEditablePosition=function(t){for(var n=o.maskOptions.mask,r=t;r<n.length;r++)if(o.isPositionEditable(r))return r;return null},this.formatValue=function(t){var n=o.maskOptions,r=n.maskPlaceholder,i=n.mask;if(!r){for(t=o.insertStringAtPosition("",t,0);t.length<i.length&&!o.isPositionEditable(t.length);)t+=i[t.length];return t}return o.insertStringAtPosition(r,t,0)},this.clearRange=function(t,n,r){if(!r)return t;var i=n+r,s=o.maskOptions,u=s.maskPlaceholder,v=s.mask,d=t.split("").map(function(l,a){var c=o.isPositionEditable(a);return!u&&a>=i&&!c?"":a<n||a>=i?l:c?u?u[a]:"":v[a]}).join("");return o.formatValue(d)},this.insertCharacterAtPosition=function(t,n,r){var i=o.maskOptions,s=i.mask,u=i.maskPlaceholder;if(r>=s.length)return t;var v=o.isCharacterAllowedAtPosition(n,r),d=o.isPositionEditable(r),l=o.getRightEditablePosition(r),a=u&&l?n===u[l]:null,c=t.slice(0,r);return!v&&d||(t=c+(v?n:s[r])),v||d||a||(t=o.insertCharacterAtPosition(t,n,r+1)),t},this.insertStringAtPosition=function(t,n,r){var i=o.maskOptions,s=i.mask,u=i.maskPlaceholder;if(!n||r>=s.length)return t;var v=n.split(""),d=o.isValueFilled(t)||!!u,l=t.slice(r);return t=v.reduce(function(a,c){return o.insertCharacterAtPosition(a,c,a.length)},t.slice(0,r)),d?t+=l.slice(t.length-r):o.isValueFilled(t)?t+=s.slice(t.length).join(""):t=l.split("").filter(function(a,c){return o.isPositionEditable(r+c)}).reduce(function(a,c){var h=o.getRightEditablePosition(a.length);return h===null?a:(o.isPositionEditable(a.length)||(a+=s.slice(a.length,h).join("")),o.insertCharacterAtPosition(a,c,a.length))},t),t},this.processChange=function(t,n){var r=o.maskOptions,i=r.mask,s=r.prefix,u=r.lastEditablePosition,v=t.value,d=t.selection,l=n.value,a=n.selection,c=v,h="",E=0,p=0,f=Math.min(a.start,d.start);return d.end>a.start?(h=c.slice(a.start,d.end),p=(E=o.getStringFillingLengthAtPosition(h,f))?a.length:0):c.length<l.length&&(p=l.length-c.length),c=l,p&&(p===1&&!a.length&&(f=a.start===d.start?o.getRightEditablePosition(d.start):o.getLeftEditablePosition(d.start)),c=o.clearRange(c,f,p)),c=o.insertStringAtPosition(c,h,f),(f+=E)>=i.length?f=i.length:f<s.length&&!E?f=s.length:f>=s.length&&f<u&&E&&(f=o.getRightEditablePosition(f)),{value:c=o.formatValue(c),enteredString:h,selection:{start:f,end:f}}},this.maskOptions=function(t){var n=t.mask,r=t.maskPlaceholder,i=[];if(!n)return{maskPlaceholder:null,mask:null,prefix:null,lastEditablePosition:null,permanents:[]};if(typeof n=="string"){var s=!1,u="";n.split("").forEach(function(l){s||l!=="\\"?(!s&&Q[l]||i.push(u.length),u+=l,s=!1):s=!0}),n=u.split("").map(function(l,a){return i.indexOf(a)===-1?Q[l]:l})}else n.forEach(function(l,a){typeof l=="string"&&i.push(a)});r&&(r=r.length===1?n.map(function(l,a){return i.indexOf(a)!==-1?l:r}):r.split(""),i.forEach(function(l){r[l]=n[l]}),r=r.join(""));for(var v=i.filter(function(l,a){return l===a}).map(function(l){return n[l]}).join(""),d=n.length-1;i.indexOf(d)!==-1;)d--;return{maskPlaceholder:r,prefix:v,mask:n,lastEditablePosition:d,permanents:i}}(e)},Fe=function(e){function o(){return e.apply(this,arguments)||this}return Pe(o,e),o.prototype.render=function(){var t=this.props,n=t.children,r=re(t,["children"]);return B.cloneElement(n,r)},o}(B.Component),H=k.forwardRef(function(e,o){var t=e.alwaysShowMask,n=e.children,r=e.mask,i=e.maskPlaceholder,s=e.beforeMaskedStateChange,u=re(e,["alwaysShowMask","children","mask","maskPlaceholder","beforeMaskedStateChange"]);(function(g){var m=g.mask,b=g.maskPlaceholder;m&&b&&b.length!==1&&b.length!==m.length&&J(!1)})(e);var v,d,l=new Se({mask:r,maskPlaceholder:i}),a=!!r,c=!u.disabled&&!u.readOnly,h=e.value!==null&&e.value!==void 0,E=(v=a,d=k.useRef(),k.useEffect(function(){d.current=v}),d.current),p=we(function(g){return""+g}((h?e.value:e.defaultValue)||""),a),f=p.inputRef,w=p.getInputState,C=p.setInputState,P=p.getLastInputState,O=q(f);if(a&&h){var A=O(),I=A&&L(A)||t||e.value?l.formatValue(e.value):e.value;s&&(I=s({nextState:{value:I,selection:{start:null,end:null}}}).value),C(R({},P(),{value:I}))}var T=P(),z=T.selection,ae=T.value;k.useLayoutEffect(function(){if(a){var g=L(O()),m=z,b=w(),x=R({},b);if(!h){var S=b.value,D=l.formatValue(S),$=l.isValueEmpty(D);!$||g||t?x.value=D:$&&!g&&(x.value="")}g&&!E?x.selection=l.getDefaultSelectionForValue(x.value):h&&g&&m&&m.start!==null&&m.end!==null&&(x.selection=m),s&&(x=s({currentState:b,nextState:x})),C(x)}});var W=R({},u,{onFocus:function(g){f.current=g.target;var m=w().value;if(a&&!l.isValueFilled(m)){var b=l.formatValue(m),x=l.getDefaultSelectionForValue(b),S={value:b,selection:x};s&&(b=(S=s({currentState:w(),nextState:S})).value,x=S.selection),C(S),b!==m&&e.onChange&&e.onChange(g),oe(function(){C(P())})}e.onFocus&&e.onFocus(g)},onBlur:function(g){var m=w().value,b=P().value;if(a&&!t&&l.isValueEmpty(b)){var x="",S={value:x,selection:{start:null,end:null}};s&&(x=(S=s({currentState:w(),nextState:S})).value),C(S),x!==m&&e.onChange&&e.onChange(g)}e.onBlur&&e.onBlur(g)},onChange:a&&c?function(g){var m=w(),b=P(),x=l.processChange(m,b);s&&(x=s({currentState:m,previousState:b,nextState:x})),C(x),e.onChange&&e.onChange(g)}:e.onChange,onMouseDown:a&&c?function(g){var m=O(),b=w().value,x=ie(m);if(!L(m)&&!l.isValueFilled(b)){var S=g.clientX,D=g.clientY,$=new Date().getTime();x.addEventListener("mouseup",function le(X){if(x.removeEventListener("mouseup",le),L(m)){var se=Math.abs(X.clientX-S),ue=Math.abs(X.clientY-D),Y=Math.max(se,ue),Z=new Date().getTime()-$;if(Y<=10&&Z<=200||Y<=5&&Z<=300){var G=P(),ce=R({},G,{selection:l.getDefaultSelectionForValue(G.value)});C(ce)}}})}e.onMouseDown&&e.onMouseDown(g)}:e.onMouseDown,ref:function(g){f.current=ke.findDOMNode(g),function(m){return typeof m=="function"}(o)?o(g):o!==null&&typeof o=="object"&&(o.current=g)},value:a&&h?ae:e.value});return n?(function(g,m){Ce.filter(function(b){return m.props[b]!=null&&m.props[b]!==g[b]}).length&&J(!1)}(e,n),B.createElement(Fe,W,n)):B.createElement("input",W)});H.displayName="InputMask",H.defaultProps={alwaysShowMask:!1,maskPlaceholder:"_"},te.exports=H;var je=te.exports;ee.exports=je;var Oe=ee.exports;const Ve=de(Oe),Le=e=>e.hasError?F.primaryRed:e.hasContent||e.isFocused||e.isHovered?F.primaryBlue:"transparent",Me=N(V)`
  background: ${F.inputBg2};
  border-radius: 8px;
  border: 1px solid ${Le};
  padding: 12px 8px;
`,Ae=N(V)`
  cursor: default;
  margin: 0 0 6px 6px;
  position: relative;
  color: ${F.placeholderText};

  .tooltip {
    position: absolute;
    background-color: ${F.dashboardHeader};
    border: 1px solid ${F.secondaryText4};
    border-radius: 4px;
    color: ${F.white};
    top: 22px;
    padding: 4px 8px;
    font-size: 13px;
    visibility: hidden;
    width: auto;
    white-space: nowrap;
    z-index: 1;
  }

  ${e=>e.name==="endTime"&&`
    .tooltip {
      left: -68px;
    }
  `}

  &:hover .tooltip {
    visibility: visible;
  }

  &:focus .tooltip {
    visibility: visible;
  }
`,Ie=N.label`
  color: ${F.lightGray};
  font-size: 12px;
  font-weight: 600;
  margin-bottom: 6px;
`,Be=({id:e,label:o,mask:t="",message:n,name:r,rules:i,showMask:s=!1,maskPlaceholder:u=null,...v})=>{const{register:d,control:l,formState:{errors:a},getValues:c}=he()||{},h=ge(a,r),E=c(r),[p,f]=M.useState(!1),[w,C]=M.useState(!1);return M.useEffect(()=>{const P=document.getElementById(e);P&&P.focus()},[e]),y.jsxs(V,{shrink:1,children:[y.jsxs(V,{align:"center",direction:"row",children:[o&&y.jsx(Ie,{htmlFor:e,children:o}),n&&y.jsxs(Ae,{name:r,role:"tooltip",children:[y.jsx(xe,{}),y.jsx("div",{className:"tooltip",children:n})]})]}),y.jsx(Me,{hasContent:!!E,hasError:!!h,isFocused:p,isHovered:w,onMouseEnter:()=>C(!0),onMouseLeave:()=>C(!1),children:y.jsx(ve,{control:l,...d(r),render:({field:{onBlur:P,onChange:O,value:A,ref:I}})=>{const{disabled:T=j.disabled,textAlign:z=j.textAlign}=v;return t?y.jsx(Ve,{alwaysShowMask:s,disabled:!1,inputRef:I,mask:t,...d(r),maskPlaceholder:u,onBlur:P,onChange:O,value:A,children:y.jsx(_,{colorName:"white",disabled:T,...d(r),id:e,onBlur:()=>f(!1),onFocus:()=>f(!0),placeholderTextColor:"inputPlaceholder",textAlign:z})}):y.jsx(U,{...v,colorName:"white",id:e,...d(r),onBlur:()=>{f(!1),P()},onChange:O,onFocus:()=>f(!0),placeholderTextColor:"inputPlaceholder",value:A||""})},rules:i})}),h&&y.jsx(V,{pl:4,pt:8,shrink:1,tabIndex:0,children:y.jsx(pe,{color:"primaryRed",kind:"regularBold",children:y.jsxs(V,{align:"center",direction:"row",shrink:1,children:[y.jsx(me,{fontSize:18}),y.jsx(V,{pl:4,shrink:1,children:h.message})]})})})]})};export{U as B,Be as T};
