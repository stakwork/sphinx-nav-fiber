import{f as B,h as S,r as I,j as E,a8 as fe,ae as de,F as L,T as pe}from"./index-58e9a183.js";import{i as he,H as ge,J as ve}from"./react-toastify.esm-50279b0f.js";import{i as me}from"./index.esm-408adbb5.js";import{b as xe,I as be}from"./InfoIcon-651c99cc.js";const O={autoComplete:"off",colorName:"black",disabled:!1,maxLength:524288,placeholder:"",placeholderTextColor:"gray100",returnKeyType:"done",textAlign:"left",type:"text"},W=B.input`
  -webkit-appearance: none;
  -webkit-text-fill-color: ${({colorName:e})=>S[e]};
  background: transparent;
  border: none;
  color: ${({colorName:e})=>S[e]};
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
    -webkit-text-fill-color: ${({placeholderTextColor:e})=>S[e]};
    color: ${({placeholderTextColor:e})=>S[e]};
  }
`;W.displayName="WebTextInput";const ee=I.forwardRef(({autoComplete:e=O.autoComplete,autoFocus:o,className:t,colorName:n=O.colorName,defaultValue:r,disabled:i=O.disabled,id:s,maxLength:u=O.maxLength,name:v,onBlur:p,onChange:l,onFocus:a,onKeyDown:c,placeholder:g=O.placeholder,placeholderTextColor:w=O.placeholderTextColor,textAlign:d=O.textAlign,type:f=O.type,value:y},C)=>{const P=I.useCallback(V=>{l&&l(V.target.value)},[l]);return E.jsx(W,{ref:C,autoComplete:e,autoFocus:o,className:t,colorName:n,defaultValue:r,disabled:i,id:s,maxLength:u,name:v,onBlur:p,onChange:P,onFocus:a,onKeyDown:c,placeholder:g,placeholderTextColor:w,textAlign:d,type:f,value:y})});ee.displayName="BaseTextInput";var te={exports:{}},ne={exports:{}};function re(e){return e&&typeof e=="object"&&"default"in e?e.default:e}var k=I,_=re(k),ke=fe,K=re(xe);function $(){return($=Object.assign||function(e){for(var o=1;o<arguments.length;o++){var t=arguments[o];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function Pe(e,o){e.prototype=Object.create(o.prototype),e.prototype.constructor=e,function(t,n){for(var r=Object.getOwnPropertyNames(n),i=0;i<r.length;i++){var s=r[i],u=Object.getOwnPropertyDescriptor(n,s);u&&u.configurable&&t[s]===void 0&&Object.defineProperty(t,s,u)}}(e,o)}function oe(e,o){if(e==null)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],o.indexOf(t)>=0||(r[t]=e[t]);return r}function ie(e){return requestAnimationFrame(e)}function Q(e){cancelAnimationFrame(e)}function A(e){var o=e.ownerDocument;return o.hasFocus()&&o.activeElement===e}function ae(e){return e==null?void 0:e.ownerDocument}function Ee(e){var o=function(t){var n;return(n=ae(t))==null?void 0:n.defaultView}(e);return!!o&&e instanceof o.HTMLElement}function X(e){return k.useCallback(function(){var o=e.current,t=typeof window<"u"&&Ee(o);if(!o||!t)return null;if(o.nodeName!=="INPUT"&&(o=o.querySelector("input")),!o)throw new Error("react-input-mask: inputComponent doesn't contain input node");return o},[e])}function we(e,o){var t,n,r,i,s=k.useRef({start:null,end:null}),u=X(e),v=k.useCallback(function(){return function(d){var f=d.selectionStart,y=d.selectionEnd;return{start:f,end:y,length:y-f}}(u())},[u]),p=k.useCallback(function(){return s.current},[]),l=k.useCallback(function(d){var f=u();f&&A(f)&&(function(y,C,P){P===void 0&&(P=C),y.setSelectionRange(C,P)}(f,d.start,d.end),s.current=v())},[u,v]),a=k.useCallback(function(){s.current=v()},[v]),c=(t=a,n=k.useRef(null),r=k.useCallback(function(){n.current===null&&function d(){t(),n.current=ie(d)}()},[t]),i=k.useCallback(function(){Q(n.current),n.current=null},[]),k.useEffect(function(){n.current&&(i(),r())},[r,i]),k.useEffect(Q,[]),[r,i]),g=c[0],w=c[1];return k.useLayoutEffect(function(){if(o){var d=u();return d.addEventListener("focus",g),d.addEventListener("blur",w),A(d)&&g(),function(){d.removeEventListener("focus",g),d.removeEventListener("blur",w),w()}}}),{getSelection:v,getLastSelection:p,setSelection:l}}function ye(e,o){var t=k.useRef(),n=we(t,o),r=n.getSelection,i=n.getLastSelection,s=n.setSelection,u=function(a,c){var g=X(a),w=k.useRef(c);return{getValue:k.useCallback(function(){return g().value},[g]),getLastValue:k.useCallback(function(){return w.current},[]),setValue:k.useCallback(function(d){w.current=d;var f=g();f&&(f.value=d)},[g])}}(t,e),v=u.getValue,p=u.getLastValue,l=u.setValue;return{inputRef:t,getInputState:function(){return{value:v(),selection:r()}},getLastInputState:function(){return{value:p(),selection:i()}},setInputState:function(a){var c=a.value,g=a.selection;l(c),s(g)}}}var Ce=["disabled","onBlur","onChange","onFocus","onMouseDown","readOnly","value"],U={9:/[0-9]/,a:/[A-Za-z]/,"*":/[A-Za-z0-9]/},Se=function(e){var o=this;this.isCharacterAllowedAtPosition=function(t,n){var r=o.maskOptions.maskPlaceholder;return!!o.isCharacterFillingPosition(t,n)||!!r&&r[n]===t},this.isCharacterFillingPosition=function(t,n){var r=o.maskOptions.mask;if(!t||n>=r.length)return!1;if(!o.isPositionEditable(n))return r[n]===t;var i=r[n];return new RegExp(i).test(t)},this.isPositionEditable=function(t){var n=o.maskOptions,r=n.mask,i=n.permanents;return t<r.length&&i.indexOf(t)===-1},this.isValueEmpty=function(t){return t.split("").every(function(n,r){return!o.isPositionEditable(r)||!o.isCharacterFillingPosition(n,r)})},this.isValueFilled=function(t){return o.getFilledLength(t)===o.maskOptions.lastEditablePosition+1},this.getDefaultSelectionForValue=function(t){var n=o.getFilledLength(t),r=o.getRightEditablePosition(n);return{start:r,end:r}},this.getFilledLength=function(t){return function(n,r){for(var i=n.length-1;i>=0;i--)if(r(n[i],i))return i;return-1}(t.split(""),function(n,r){return o.isPositionEditable(r)&&o.isCharacterFillingPosition(n,r)})+1},this.getStringFillingLengthAtPosition=function(t,n){return t.split("").reduce(function(r,i){return o.insertCharacterAtPosition(r,i,r.length)},function(r,i){i===void 0&&(i=1);for(var s="",u=0;u<i;u++)s+=r;return s}(" ",n)).length-n},this.getLeftEditablePosition=function(t){for(var n=t;n>=0;n--)if(o.isPositionEditable(n))return n;return null},this.getRightEditablePosition=function(t){for(var n=o.maskOptions.mask,r=t;r<n.length;r++)if(o.isPositionEditable(r))return r;return null},this.formatValue=function(t){var n=o.maskOptions,r=n.maskPlaceholder,i=n.mask;if(!r){for(t=o.insertStringAtPosition("",t,0);t.length<i.length&&!o.isPositionEditable(t.length);)t+=i[t.length];return t}return o.insertStringAtPosition(r,t,0)},this.clearRange=function(t,n,r){if(!r)return t;var i=n+r,s=o.maskOptions,u=s.maskPlaceholder,v=s.mask,p=t.split("").map(function(l,a){var c=o.isPositionEditable(a);return!u&&a>=i&&!c?"":a<n||a>=i?l:c?u?u[a]:"":v[a]}).join("");return o.formatValue(p)},this.insertCharacterAtPosition=function(t,n,r){var i=o.maskOptions,s=i.mask,u=i.maskPlaceholder;if(r>=s.length)return t;var v=o.isCharacterAllowedAtPosition(n,r),p=o.isPositionEditable(r),l=o.getRightEditablePosition(r),a=u&&l?n===u[l]:null,c=t.slice(0,r);return!v&&p||(t=c+(v?n:s[r])),v||p||a||(t=o.insertCharacterAtPosition(t,n,r+1)),t},this.insertStringAtPosition=function(t,n,r){var i=o.maskOptions,s=i.mask,u=i.maskPlaceholder;if(!n||r>=s.length)return t;var v=n.split(""),p=o.isValueFilled(t)||!!u,l=t.slice(r);return t=v.reduce(function(a,c){return o.insertCharacterAtPosition(a,c,a.length)},t.slice(0,r)),p?t+=l.slice(t.length-r):o.isValueFilled(t)?t+=s.slice(t.length).join(""):t=l.split("").filter(function(a,c){return o.isPositionEditable(r+c)}).reduce(function(a,c){var g=o.getRightEditablePosition(a.length);return g===null?a:(o.isPositionEditable(a.length)||(a+=s.slice(a.length,g).join("")),o.insertCharacterAtPosition(a,c,a.length))},t),t},this.processChange=function(t,n){var r=o.maskOptions,i=r.mask,s=r.prefix,u=r.lastEditablePosition,v=t.value,p=t.selection,l=n.value,a=n.selection,c=v,g="",w=0,d=0,f=Math.min(a.start,p.start);return p.end>a.start?(g=c.slice(a.start,p.end),d=(w=o.getStringFillingLengthAtPosition(g,f))?a.length:0):c.length<l.length&&(d=l.length-c.length),c=l,d&&(d===1&&!a.length&&(f=a.start===p.start?o.getRightEditablePosition(p.start):o.getLeftEditablePosition(p.start)),c=o.clearRange(c,f,d)),c=o.insertStringAtPosition(c,g,f),(f+=w)>=i.length?f=i.length:f<s.length&&!w?f=s.length:f>=s.length&&f<u&&w&&(f=o.getRightEditablePosition(f)),{value:c=o.formatValue(c),enteredString:g,selection:{start:f,end:f}}},this.maskOptions=function(t){var n=t.mask,r=t.maskPlaceholder,i=[];if(!n)return{maskPlaceholder:null,mask:null,prefix:null,lastEditablePosition:null,permanents:[]};if(typeof n=="string"){var s=!1,u="";n.split("").forEach(function(l){s||l!=="\\"?(!s&&U[l]||i.push(u.length),u+=l,s=!1):s=!0}),n=u.split("").map(function(l,a){return i.indexOf(a)===-1?U[l]:l})}else n.forEach(function(l,a){typeof l=="string"&&i.push(a)});r&&(r=r.length===1?n.map(function(l,a){return i.indexOf(a)!==-1?l:r}):r.split(""),i.forEach(function(l){r[l]=n[l]}),r=r.join(""));for(var v=i.filter(function(l,a){return l===a}).map(function(l){return n[l]}).join(""),p=n.length-1;i.indexOf(p)!==-1;)p--;return{maskPlaceholder:r,prefix:v,mask:n,lastEditablePosition:p,permanents:i}}(e)},Fe=function(e){function o(){return e.apply(this,arguments)||this}return Pe(o,e),o.prototype.render=function(){var t=this.props,n=t.children,r=oe(t,["children"]);return _.cloneElement(n,r)},o}(_.Component),q=k.forwardRef(function(e,o){var t=e.alwaysShowMask,n=e.children,r=e.mask,i=e.maskPlaceholder,s=e.beforeMaskedStateChange,u=oe(e,["alwaysShowMask","children","mask","maskPlaceholder","beforeMaskedStateChange"]);(function(h){var m=h.mask,x=h.maskPlaceholder;m&&x&&x.length!==1&&x.length!==m.length&&K(!1)})(e);var v,p,l=new Se({mask:r,maskPlaceholder:i}),a=!!r,c=!u.disabled&&!u.readOnly,g=e.value!==null&&e.value!==void 0,w=(v=a,p=k.useRef(),k.useEffect(function(){p.current=v}),p.current),d=ye(function(h){return""+h}((g?e.value:e.defaultValue)||""),a),f=d.inputRef,y=d.getInputState,C=d.setInputState,P=d.getLastInputState,V=X(f);if(a&&g){var R=V(),j=R&&A(R)||t||e.value?l.formatValue(e.value):e.value;s&&(j=s({nextState:{value:j,selection:{start:null,end:null}}}).value),C($({},P(),{value:j}))}var M=P(),T=M.selection,N=M.value;k.useLayoutEffect(function(){if(a){var h=A(V()),m=T,x=y(),b=$({},x);if(!g){var F=x.value,z=l.formatValue(F),H=l.isValueEmpty(z);!H||h||t?b.value=z:H&&!h&&(b.value="")}h&&!w?b.selection=l.getDefaultSelectionForValue(b.value):g&&h&&m&&m.start!==null&&m.end!==null&&(b.selection=m),s&&(b=s({currentState:x,nextState:b})),C(b)}});var D=$({},u,{onFocus:function(h){f.current=h.target;var m=y().value;if(a&&!l.isValueFilled(m)){var x=l.formatValue(m),b=l.getDefaultSelectionForValue(x),F={value:x,selection:b};s&&(x=(F=s({currentState:y(),nextState:F})).value,b=F.selection),C(F),x!==m&&e.onChange&&e.onChange(h),ie(function(){C(P())})}e.onFocus&&e.onFocus(h)},onBlur:function(h){var m=y().value,x=P().value;if(a&&!t&&l.isValueEmpty(x)){var b="",F={value:b,selection:{start:null,end:null}};s&&(b=(F=s({currentState:y(),nextState:F})).value),C(F),b!==m&&e.onChange&&e.onChange(h)}e.onBlur&&e.onBlur(h)},onChange:a&&c?function(h){var m=y(),x=P(),b=l.processChange(m,x);s&&(b=s({currentState:m,previousState:x,nextState:b})),C(b),e.onChange&&e.onChange(h)}:e.onChange,onMouseDown:a&&c?function(h){var m=V(),x=y().value,b=ae(m);if(!A(m)&&!l.isValueFilled(x)){var F=h.clientX,z=h.clientY,H=new Date().getTime();b.addEventListener("mouseup",function le(Y){if(b.removeEventListener("mouseup",le),A(m)){var se=Math.abs(Y.clientX-F),ue=Math.abs(Y.clientY-z),Z=Math.max(se,ue),G=new Date().getTime()-H;if(Z<=10&&G<=200||Z<=5&&G<=300){var J=P(),ce=$({},J,{selection:l.getDefaultSelectionForValue(J.value)});C(ce)}}})}e.onMouseDown&&e.onMouseDown(h)}:e.onMouseDown,ref:function(h){f.current=ke.findDOMNode(h),function(m){return typeof m=="function"}(o)?o(h):o!==null&&typeof o=="object"&&(o.current=h)},value:a&&g?N:e.value});return n?(function(h,m){Ce.filter(function(x){return m.props[x]!=null&&m.props[x]!==h[x]}).length&&K(!1)}(e,n),_.createElement(Fe,D,n)):_.createElement("input",D)});q.displayName="InputMask",q.defaultProps={alwaysShowMask:!1,maskPlaceholder:"_"},ne.exports=q;var je=ne.exports;te.exports=je;var Oe=te.exports;const Ve=de(Oe),Le=e=>e.hasError?S.primaryRed:e.hasContent||e.isFocused||e.isHovered?S.primaryBlue:"transparent",Me=B(L)`
  background: ${S.inputBg2};
  border-radius: 8px;
  border: 1px solid ${Le};
  padding: 12px 8px;
`,Ae=B(L)`
  cursor: default;
  margin: 0 0 6px 6px;
  position: relative;
  color: ${S.placeholderText};

  .tooltip {
    position: absolute;
    background-color: ${S.dashboardHeader};
    border: 1px solid ${S.secondaryText4};
    border-radius: 4px;
    color: ${S.white};
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
`,Ie=B.label`
  color: ${S.lightGray};
  font-size: 12px;
  font-weight: 600;
  margin-bottom: 6px;
`,Re=B.textarea`
  width: 100%;
  height: 100px;
  border: none;
  background: transparent;
  color: ${S.white};
  font-size: 14px;
  font-weight: 400;
  resize: none;
  font-family: 'Barlow';
  white-space: pre-wrap;
  overflow-wrap: break-word;
  box-sizing: border-box;
  outline: none;
  line-height: 20px;
  letter-spacing: 0.01em;
  text-align: left;
`,Ne=({id:e,label:o,mask:t="",message:n,name:r,rules:i,showMask:s=!1,maskPlaceholder:u=null,isTextArea:v=!1,placeholder:p="",maxLength:l,...a})=>{const{register:c,control:g,formState:{errors:w},getValues:d}=he()||{},f=ge(w,r),y=d(r),[C,P]=I.useState(!1),[V,R]=I.useState(!1);return I.useEffect(()=>{const j=document.getElementById(e);j&&j.focus()},[e]),E.jsxs(L,{shrink:1,children:[E.jsxs(L,{align:"center",direction:"row",children:[o&&E.jsx(Ie,{htmlFor:e,children:o}),n&&E.jsxs(Ae,{name:r,role:"tooltip",children:[E.jsx(be,{}),E.jsx("div",{className:"tooltip",children:n})]})]}),E.jsx(Me,{hasContent:!!y,hasError:!!f,isFocused:C,isHovered:V,onMouseEnter:()=>R(!0),onMouseLeave:()=>R(!1),children:E.jsx(ve,{control:g,...c(r),render:({field:{onBlur:j,onChange:M,value:T,ref:N}})=>{const{disabled:D=O.disabled,textAlign:h=O.textAlign}=a;return v?E.jsx(Re,{ref:N,disabled:D,id:e,maxLength:l,onBlur:()=>{P(!1),j()},onChange:M,onFocus:()=>P(!0),placeholder:p,value:T||""}):t?E.jsx(Ve,{alwaysShowMask:s,disabled:!1,inputRef:N,mask:t,...c(r),maskPlaceholder:u,onBlur:j,onChange:M,value:T,children:E.jsx(W,{colorName:"white",disabled:D,...c(r),id:e,onBlur:()=>P(!1),onFocus:()=>P(!0),placeholderTextColor:"inputPlaceholder",textAlign:h})}):E.jsx(ee,{...a,colorName:"white",id:e,...c(r),onBlur:()=>{P(!1),j()},onChange:M,onFocus:()=>P(!0),placeholder:p,placeholderTextColor:"inputPlaceholder",value:T||""})},rules:i})}),f&&E.jsx(L,{pl:4,pt:8,shrink:1,tabIndex:0,children:E.jsx(pe,{color:"primaryRed",kind:"regularBold",children:E.jsxs(L,{align:"center",direction:"row",shrink:1,children:[E.jsx(me,{fontSize:18}),E.jsx(L,{pl:4,shrink:1,children:f.message})]})})})]})};export{ee as B,Ne as T};
