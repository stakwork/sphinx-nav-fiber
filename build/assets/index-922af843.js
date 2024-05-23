import{f as D,h as F,r as I,j as y,a7 as fe,ad as de,F as V,T as pe}from"./index-b17e6e7f.js";import{i as he,H as ge,J as ve}from"./react-toastify.esm-ac6bd257.js";import{i as me}from"./index.esm-de2ad175.js";import{b as be,I as xe}from"./InfoIcon-eed706a9.js";const j={autoComplete:"off",colorName:"black",disabled:!1,maxLength:524288,placeholder:"",placeholderTextColor:"gray100",returnKeyType:"done",textAlign:"left",type:"text"},B=D.input`
  -webkit-appearance: none;
  -webkit-text-fill-color: ${({colorName:t})=>F[t]};
  background: transparent;
  border: none;
  color: ${({colorName:t})=>F[t]};
  cursor: ${({disabled:t})=>t?"default":"text"};
  margin: 0;
  opacity: ${({disabled:t})=>t?.5:1};
  outline: 0;
  padding: 0;
  text-align: ${({textAlign:t})=>t};

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
    -webkit-text-fill-color: ${({placeholderTextColor:t})=>F[t]};
    color: ${({placeholderTextColor:t})=>F[t]};
  }
`;B.displayName="WebTextInput";const Q=I.forwardRef(({autoComplete:t=j.autoComplete,autoFocus:o,className:e,colorName:n=j.colorName,defaultValue:r,disabled:i=j.disabled,id:s,maxLength:u=j.maxLength,name:v,onBlur:p,onChange:l,onFocus:a,onKeyDown:c,placeholder:h=j.placeholder,placeholderTextColor:P=j.placeholderTextColor,textAlign:f=j.textAlign,type:d=j.type,value:E},w)=>{const C=I.useCallback(O=>{l&&l(O.target.value)},[l]);return y.jsx(B,{ref:w,autoComplete:t,autoFocus:o,className:e,colorName:n,defaultValue:r,disabled:i,id:s,maxLength:u,name:v,onBlur:p,onChange:C,onFocus:a,onKeyDown:c,placeholder:h,placeholderTextColor:P,textAlign:f,type:d,value:E})});Q.displayName="BaseTextInput";var U={exports:{}},ee={exports:{}};function te(t){return t&&typeof t=="object"&&"default"in t?t.default:t}var k=I,T=te(k),ke=fe,G=te(be);function M(){return(M=Object.assign||function(t){for(var o=1;o<arguments.length;o++){var e=arguments[o];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])}return t}).apply(this,arguments)}function Pe(t,o){t.prototype=Object.create(o.prototype),t.prototype.constructor=t,function(e,n){for(var r=Object.getOwnPropertyNames(n),i=0;i<r.length;i++){var s=r[i],u=Object.getOwnPropertyDescriptor(n,s);u&&u.configurable&&e[s]===void 0&&Object.defineProperty(e,s,u)}}(t,o)}function ne(t,o){if(t==null)return{};var e,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)e=i[n],o.indexOf(e)>=0||(r[e]=t[e]);return r}function re(t){return requestAnimationFrame(t)}function J(t){cancelAnimationFrame(t)}function L(t){var o=t.ownerDocument;return o.hasFocus()&&o.activeElement===t}function oe(t){return t==null?void 0:t.ownerDocument}function Ee(t){var o=function(e){var n;return(n=oe(e))==null?void 0:n.defaultView}(t);return!!o&&t instanceof o.HTMLElement}function z(t){return k.useCallback(function(){var o=t.current,e=typeof window<"u"&&Ee(o);if(!o||!e)return null;if(o.nodeName!=="INPUT"&&(o=o.querySelector("input")),!o)throw new Error("react-input-mask: inputComponent doesn't contain input node");return o},[t])}function ye(t,o){var e,n,r,i,s=k.useRef({start:null,end:null}),u=z(t),v=k.useCallback(function(){return function(f){var d=f.selectionStart,E=f.selectionEnd;return{start:d,end:E,length:E-d}}(u())},[u]),p=k.useCallback(function(){return s.current},[]),l=k.useCallback(function(f){var d=u();d&&L(d)&&(function(E,w,C){C===void 0&&(C=w),E.setSelectionRange(w,C)}(d,f.start,f.end),s.current=v())},[u,v]),a=k.useCallback(function(){s.current=v()},[v]),c=(e=a,n=k.useRef(null),r=k.useCallback(function(){n.current===null&&function f(){e(),n.current=re(f)}()},[e]),i=k.useCallback(function(){J(n.current),n.current=null},[]),k.useEffect(function(){n.current&&(i(),r())},[r,i]),k.useEffect(J,[]),[r,i]),h=c[0],P=c[1];return k.useLayoutEffect(function(){if(o){var f=u();return f.addEventListener("focus",h),f.addEventListener("blur",P),L(f)&&h(),function(){f.removeEventListener("focus",h),f.removeEventListener("blur",P),P()}}}),{getSelection:v,getLastSelection:p,setSelection:l}}function we(t,o){var e=k.useRef(),n=ye(e,o),r=n.getSelection,i=n.getLastSelection,s=n.setSelection,u=function(a,c){var h=z(a),P=k.useRef(c);return{getValue:k.useCallback(function(){return h().value},[h]),getLastValue:k.useCallback(function(){return P.current},[]),setValue:k.useCallback(function(f){P.current=f;var d=h();d&&(d.value=f)},[h])}}(e,t),v=u.getValue,p=u.getLastValue,l=u.setValue;return{inputRef:e,getInputState:function(){return{value:v(),selection:r()}},getLastInputState:function(){return{value:p(),selection:i()}},setInputState:function(a){var c=a.value,h=a.selection;l(c),s(h)}}}var Ce=["disabled","onBlur","onChange","onFocus","onMouseDown","readOnly","value"],K={9:/[0-9]/,a:/[A-Za-z]/,"*":/[A-Za-z0-9]/},Se=function(t){var o=this;this.isCharacterAllowedAtPosition=function(e,n){var r=o.maskOptions.maskPlaceholder;return!!o.isCharacterFillingPosition(e,n)||!!r&&r[n]===e},this.isCharacterFillingPosition=function(e,n){var r=o.maskOptions.mask;if(!e||n>=r.length)return!1;if(!o.isPositionEditable(n))return r[n]===e;var i=r[n];return new RegExp(i).test(e)},this.isPositionEditable=function(e){var n=o.maskOptions,r=n.mask,i=n.permanents;return e<r.length&&i.indexOf(e)===-1},this.isValueEmpty=function(e){return e.split("").every(function(n,r){return!o.isPositionEditable(r)||!o.isCharacterFillingPosition(n,r)})},this.isValueFilled=function(e){return o.getFilledLength(e)===o.maskOptions.lastEditablePosition+1},this.getDefaultSelectionForValue=function(e){var n=o.getFilledLength(e),r=o.getRightEditablePosition(n);return{start:r,end:r}},this.getFilledLength=function(e){return function(n,r){for(var i=n.length-1;i>=0;i--)if(r(n[i],i))return i;return-1}(e.split(""),function(n,r){return o.isPositionEditable(r)&&o.isCharacterFillingPosition(n,r)})+1},this.getStringFillingLengthAtPosition=function(e,n){return e.split("").reduce(function(r,i){return o.insertCharacterAtPosition(r,i,r.length)},function(r,i){i===void 0&&(i=1);for(var s="",u=0;u<i;u++)s+=r;return s}(" ",n)).length-n},this.getLeftEditablePosition=function(e){for(var n=e;n>=0;n--)if(o.isPositionEditable(n))return n;return null},this.getRightEditablePosition=function(e){for(var n=o.maskOptions.mask,r=e;r<n.length;r++)if(o.isPositionEditable(r))return r;return null},this.formatValue=function(e){var n=o.maskOptions,r=n.maskPlaceholder,i=n.mask;if(!r){for(e=o.insertStringAtPosition("",e,0);e.length<i.length&&!o.isPositionEditable(e.length);)e+=i[e.length];return e}return o.insertStringAtPosition(r,e,0)},this.clearRange=function(e,n,r){if(!r)return e;var i=n+r,s=o.maskOptions,u=s.maskPlaceholder,v=s.mask,p=e.split("").map(function(l,a){var c=o.isPositionEditable(a);return!u&&a>=i&&!c?"":a<n||a>=i?l:c?u?u[a]:"":v[a]}).join("");return o.formatValue(p)},this.insertCharacterAtPosition=function(e,n,r){var i=o.maskOptions,s=i.mask,u=i.maskPlaceholder;if(r>=s.length)return e;var v=o.isCharacterAllowedAtPosition(n,r),p=o.isPositionEditable(r),l=o.getRightEditablePosition(r),a=u&&l?n===u[l]:null,c=e.slice(0,r);return!v&&p||(e=c+(v?n:s[r])),v||p||a||(e=o.insertCharacterAtPosition(e,n,r+1)),e},this.insertStringAtPosition=function(e,n,r){var i=o.maskOptions,s=i.mask,u=i.maskPlaceholder;if(!n||r>=s.length)return e;var v=n.split(""),p=o.isValueFilled(e)||!!u,l=e.slice(r);return e=v.reduce(function(a,c){return o.insertCharacterAtPosition(a,c,a.length)},e.slice(0,r)),p?e+=l.slice(e.length-r):o.isValueFilled(e)?e+=s.slice(e.length).join(""):e=l.split("").filter(function(a,c){return o.isPositionEditable(r+c)}).reduce(function(a,c){var h=o.getRightEditablePosition(a.length);return h===null?a:(o.isPositionEditable(a.length)||(a+=s.slice(a.length,h).join("")),o.insertCharacterAtPosition(a,c,a.length))},e),e},this.processChange=function(e,n){var r=o.maskOptions,i=r.mask,s=r.prefix,u=r.lastEditablePosition,v=e.value,p=e.selection,l=n.value,a=n.selection,c=v,h="",P=0,f=0,d=Math.min(a.start,p.start);return p.end>a.start?(h=c.slice(a.start,p.end),f=(P=o.getStringFillingLengthAtPosition(h,d))?a.length:0):c.length<l.length&&(f=l.length-c.length),c=l,f&&(f===1&&!a.length&&(d=a.start===p.start?o.getRightEditablePosition(p.start):o.getLeftEditablePosition(p.start)),c=o.clearRange(c,d,f)),c=o.insertStringAtPosition(c,h,d),(d+=P)>=i.length?d=i.length:d<s.length&&!P?d=s.length:d>=s.length&&d<u&&P&&(d=o.getRightEditablePosition(d)),{value:c=o.formatValue(c),enteredString:h,selection:{start:d,end:d}}},this.maskOptions=function(e){var n=e.mask,r=e.maskPlaceholder,i=[];if(!n)return{maskPlaceholder:null,mask:null,prefix:null,lastEditablePosition:null,permanents:[]};if(typeof n=="string"){var s=!1,u="";n.split("").forEach(function(l){s||l!=="\\"?(!s&&K[l]||i.push(u.length),u+=l,s=!1):s=!0}),n=u.split("").map(function(l,a){return i.indexOf(a)===-1?K[l]:l})}else n.forEach(function(l,a){typeof l=="string"&&i.push(a)});r&&(r=r.length===1?n.map(function(l,a){return i.indexOf(a)!==-1?l:r}):r.split(""),i.forEach(function(l){r[l]=n[l]}),r=r.join(""));for(var v=i.filter(function(l,a){return l===a}).map(function(l){return n[l]}).join(""),p=n.length-1;i.indexOf(p)!==-1;)p--;return{maskPlaceholder:r,prefix:v,mask:n,lastEditablePosition:p,permanents:i}}(t)},je=function(t){function o(){return t.apply(this,arguments)||this}return Pe(o,t),o.prototype.render=function(){var e=this.props,n=e.children,r=ne(e,["children"]);return T.cloneElement(n,r)},o}(T.Component),$=k.forwardRef(function(t,o){var e=t.alwaysShowMask,n=t.children,r=t.mask,i=t.maskPlaceholder,s=t.beforeMaskedStateChange,u=ne(t,["alwaysShowMask","children","mask","maskPlaceholder","beforeMaskedStateChange"]);(function(g){var m=g.mask,b=g.maskPlaceholder;m&&b&&b.length!==1&&b.length!==m.length&&G(!1)})(t);var v,p,l=new Se({mask:r,maskPlaceholder:i}),a=!!r,c=!u.disabled&&!u.readOnly,h=t.value!==null&&t.value!==void 0,P=(v=a,p=k.useRef(),k.useEffect(function(){p.current=v}),p.current),f=we(function(g){return""+g}((h?t.value:t.defaultValue)||""),a),d=f.inputRef,E=f.getInputState,w=f.setInputState,C=f.getLastInputState,O=z(d);if(a&&h){var _=O(),N=_&&L(_)||e||t.value?l.formatValue(t.value):t.value;s&&(N=s({nextState:{value:N,selection:{start:null,end:null}}}).value),w(M({},C(),{value:N}))}var q=C(),ie=q.selection,ae=q.value;k.useLayoutEffect(function(){if(a){var g=L(O()),m=ie,b=E(),x=M({},b);if(!h){var S=b.value,A=l.formatValue(S),R=l.isValueEmpty(A);!R||g||e?x.value=A:R&&!g&&(x.value="")}g&&!P?x.selection=l.getDefaultSelectionForValue(x.value):h&&g&&m&&m.start!==null&&m.end!==null&&(x.selection=m),s&&(x=s({currentState:b,nextState:x})),w(x)}});var H=M({},u,{onFocus:function(g){d.current=g.target;var m=E().value;if(a&&!l.isValueFilled(m)){var b=l.formatValue(m),x=l.getDefaultSelectionForValue(b),S={value:b,selection:x};s&&(b=(S=s({currentState:E(),nextState:S})).value,x=S.selection),w(S),b!==m&&t.onChange&&t.onChange(g),re(function(){w(C())})}t.onFocus&&t.onFocus(g)},onBlur:function(g){var m=E().value,b=C().value;if(a&&!e&&l.isValueEmpty(b)){var x="",S={value:x,selection:{start:null,end:null}};s&&(x=(S=s({currentState:E(),nextState:S})).value),w(S),x!==m&&t.onChange&&t.onChange(g)}t.onBlur&&t.onBlur(g)},onChange:a&&c?function(g){var m=E(),b=C(),x=l.processChange(m,b);s&&(x=s({currentState:m,previousState:b,nextState:x})),w(x),t.onChange&&t.onChange(g)}:t.onChange,onMouseDown:a&&c?function(g){var m=O(),b=E().value,x=oe(m);if(!L(m)&&!l.isValueFilled(b)){var S=g.clientX,A=g.clientY,R=new Date().getTime();x.addEventListener("mouseup",function le(W){if(x.removeEventListener("mouseup",le),L(m)){var se=Math.abs(W.clientX-S),ue=Math.abs(W.clientY-A),X=Math.max(se,ue),Y=new Date().getTime()-R;if(X<=10&&Y<=200||X<=5&&Y<=300){var Z=C(),ce=M({},Z,{selection:l.getDefaultSelectionForValue(Z.value)});w(ce)}}})}t.onMouseDown&&t.onMouseDown(g)}:t.onMouseDown,ref:function(g){d.current=ke.findDOMNode(g),function(m){return typeof m=="function"}(o)?o(g):o!==null&&typeof o=="object"&&(o.current=g)},value:a&&h?ae:t.value});return n?(function(g,m){Ce.filter(function(b){return m.props[b]!=null&&m.props[b]!==g[b]}).length&&G(!1)}(t,n),T.createElement(je,H,n)):T.createElement("input",H)});$.displayName="InputMask",$.defaultProps={alwaysShowMask:!1,maskPlaceholder:"_"},ee.exports=$;var Fe=ee.exports;U.exports=Fe;var Oe=U.exports;const Ve=de(Oe),Le=D(V).attrs({background:"inputBg2",px:8,py:12})`
  border-radius: 8px;
`,Ne=({id:t,label:o,mask:e="",message:n,name:r,rules:i,showMask:s=!1,maskPlaceholder:u=null,...v})=>{const{register:p,control:l,formState:{errors:a},getValues:c}=he()||{},h=ge(a,r),P=c(r);return I.useEffect(()=>{const f=document.getElementById(t);f&&f.focus()},[t]),y.jsxs(V,{shrink:1,children:[y.jsxs(V,{align:"center",direction:"row",children:[o&&y.jsx(Ae,{htmlFor:t,children:o}),n&&y.jsxs(Me,{name:r,role:"tooltip",children:[y.jsx(xe,{}),y.jsx("div",{className:"tooltip",children:n})]})]}),y.jsx(Le,{children:y.jsx(ve,{control:l,...p(r),render:({field:{onBlur:f,onChange:d,value:E,ref:w}})=>{const{disabled:C=j.disabled,textAlign:O=j.textAlign}=v;return e?y.jsx(Ve,{alwaysShowMask:s,disabled:!1,inputRef:w,mask:e,...p(r),maskPlaceholder:u,onBlur:f,onChange:d,value:E,children:y.jsx(B,{colorName:"white",disabled:C,...p(r),id:t,placeholderTextColor:"inputPlaceholder",textAlign:O})}):y.jsx(Q,{...v,colorName:"white",id:t,...p(r),onBlur:f,onChange:d,placeholderTextColor:"inputPlaceholder",value:E||""})},rules:i})}),P&&h&&y.jsx(V,{pl:4,pt:8,shrink:1,tabIndex:0,children:y.jsx(pe,{color:"primaryRed",kind:"regularBold",children:y.jsxs(V,{align:"center",direction:"row",shrink:1,children:[y.jsx(me,{fontSize:18}),y.jsx(V,{pl:4,shrink:1,children:h.message})]})})})]})},Me=D(V)`
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
    width: 175px;
    z-index: 1;
  }

  ${t=>t.name==="endTime"&&`
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
`,Ae=D.label`
  color: ${F.lightGray};
  font-size: 12px;
  font-weight: 600;
  margin-bottom: 6px;
`;export{Q as B,Ne as T};
