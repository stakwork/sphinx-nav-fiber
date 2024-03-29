import{s as N,b as F,r as I,j as w,U as fe,D as de,F as O,T as pe}from"./index-1f2b463a.js";import{Y as he,c4 as ge,c5 as ve}from"./react-toastify.esm-8467f46c.js";import{h as me}from"./index.esm-886d4e00.js";import{b as be,I as xe}from"./InfoIcon-d5429fff.js";const j={autoComplete:"off",colorName:"black",disabled:!1,maxLength:524288,placeholder:"",placeholderTextColor:"gray100",returnKeyType:"done",textAlign:"left",type:"text"},ke={billTo:"billing organization",city:"billing address-level2",country:"billing country-name",creditCardCVC:"cc-csc",creditCardExpiryDate:"cc-exp",creditCardName:"cc-name",creditCardNumber:"cc-number",currentPassword:"current-password",email:"username email",firstName:"given-name",lastName:"family-name",newPassword:"new-password",off:"off",on:"on",oneTimeCode:"one-time-code",organization:"organization",province:"billing address-level1",streetAddress:"billing street-address",tel:"tel-national",url:"url"},Pe=`
  &:-webkit-autofill:active,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:hover {
    box-shadow: inset 0 0 0 1000px ${F.white};
  }
`,z=N.input`
  -webkit-appearance: none;
  -webkit-text-fill-color: ${({colorName:t})=>F[t]};
  background: transparent;
  border: none;
  color: ${({colorName:t})=>F[t]};
  cursor: ${({disabled:t})=>t?"default":"text"};
  margin: 0;
  opacity: 1;
  outline: 0;
  padding: 0;
  text-align: ${({textAlign:t})=>t};

  ${Pe}

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
`;z.displayName="WebTextInput";const Q=I.forwardRef(({autoCapitalize:t,autoComplete:i=j.autoComplete,autoFocus:e,className:n,colorName:r=j.colorName,defaultValue:o,disabled:s=j.disabled,id:u,maxLength:v=j.maxLength,name:f,onBlur:l,onChange:a,onFocus:c,onKeyDown:d,placeholder:P=j.placeholder,placeholderTextColor:p=j.placeholderTextColor,textAlign:h=j.textAlign,type:E=j.type,value:y},C)=>{const A=I.useCallback(M=>{a&&a(M.target.value)},[a]);return w.jsx(z,{ref:C,autoCapitalize:t,autoComplete:ke[i],autoFocus:e,className:n,colorName:r,defaultValue:o,disabled:s,id:u,maxLength:v,name:f,onBlur:l,onChange:A,onFocus:c,onKeyDown:d,placeholder:P,placeholderTextColor:p,textAlign:h,type:E,value:y})});Q.displayName="BaseTextInput";var J={exports:{}},ee={exports:{}};function te(t){return t&&typeof t=="object"&&"default"in t?t.default:t}var k=I,D=te(k),we=fe,Z=te(be);function L(){return(L=Object.assign||function(t){for(var i=1;i<arguments.length;i++){var e=arguments[i];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])}return t}).apply(this,arguments)}function Ee(t,i){t.prototype=Object.create(i.prototype),t.prototype.constructor=t,function(e,n){for(var r=Object.getOwnPropertyNames(n),o=0;o<r.length;o++){var s=r[o],u=Object.getOwnPropertyDescriptor(n,s);u&&u.configurable&&e[s]===void 0&&Object.defineProperty(e,s,u)}}(t,i)}function ne(t,i){if(t==null)return{};var e,n,r={},o=Object.keys(t);for(n=0;n<o.length;n++)e=o[n],i.indexOf(e)>=0||(r[e]=t[e]);return r}function re(t){return requestAnimationFrame(t)}function G(t){cancelAnimationFrame(t)}function V(t){var i=t.ownerDocument;return i.hasFocus()&&i.activeElement===t}function ie(t){return t==null?void 0:t.ownerDocument}function ye(t){var i=function(e){var n;return(n=ie(e))==null?void 0:n.defaultView}(t);return!!i&&t instanceof i.HTMLElement}function _(t){return k.useCallback(function(){var i=t.current,e=typeof window<"u"&&ye(i);if(!i||!e)return null;if(i.nodeName!=="INPUT"&&(i=i.querySelector("input")),!i)throw new Error("react-input-mask: inputComponent doesn't contain input node");return i},[t])}function Ce(t,i){var e,n,r,o,s=k.useRef({start:null,end:null}),u=_(t),v=k.useCallback(function(){return function(p){var h=p.selectionStart,E=p.selectionEnd;return{start:h,end:E,length:E-h}}(u())},[u]),f=k.useCallback(function(){return s.current},[]),l=k.useCallback(function(p){var h=u();h&&V(h)&&(function(E,y,C){C===void 0&&(C=y),E.setSelectionRange(y,C)}(h,p.start,p.end),s.current=v())},[u,v]),a=k.useCallback(function(){s.current=v()},[v]),c=(e=a,n=k.useRef(null),r=k.useCallback(function(){n.current===null&&function p(){e(),n.current=re(p)}()},[e]),o=k.useCallback(function(){G(n.current),n.current=null},[]),k.useEffect(function(){n.current&&(o(),r())},[r,o]),k.useEffect(G,[]),[r,o]),d=c[0],P=c[1];return k.useLayoutEffect(function(){if(i){var p=u();return p.addEventListener("focus",d),p.addEventListener("blur",P),V(p)&&d(),function(){p.removeEventListener("focus",d),p.removeEventListener("blur",P),P()}}}),{getSelection:v,getLastSelection:f,setSelection:l}}function Se(t,i){var e=k.useRef(),n=Ce(e,i),r=n.getSelection,o=n.getLastSelection,s=n.setSelection,u=function(a,c){var d=_(a),P=k.useRef(c);return{getValue:k.useCallback(function(){return d().value},[d]),getLastValue:k.useCallback(function(){return P.current},[]),setValue:k.useCallback(function(p){P.current=p;var h=d();h&&(h.value=p)},[d])}}(e,t),v=u.getValue,f=u.getLastValue,l=u.setValue;return{inputRef:e,getInputState:function(){return{value:v(),selection:r()}},getLastInputState:function(){return{value:f(),selection:o()}},setInputState:function(a){var c=a.value,d=a.selection;l(c),s(d)}}}var je=["disabled","onBlur","onChange","onFocus","onMouseDown","readOnly","value"],K={9:/[0-9]/,a:/[A-Za-z]/,"*":/[A-Za-z0-9]/},Fe=function(t){var i=this;this.isCharacterAllowedAtPosition=function(e,n){var r=i.maskOptions.maskPlaceholder;return!!i.isCharacterFillingPosition(e,n)||!!r&&r[n]===e},this.isCharacterFillingPosition=function(e,n){var r=i.maskOptions.mask;if(!e||n>=r.length)return!1;if(!i.isPositionEditable(n))return r[n]===e;var o=r[n];return new RegExp(o).test(e)},this.isPositionEditable=function(e){var n=i.maskOptions,r=n.mask,o=n.permanents;return e<r.length&&o.indexOf(e)===-1},this.isValueEmpty=function(e){return e.split("").every(function(n,r){return!i.isPositionEditable(r)||!i.isCharacterFillingPosition(n,r)})},this.isValueFilled=function(e){return i.getFilledLength(e)===i.maskOptions.lastEditablePosition+1},this.getDefaultSelectionForValue=function(e){var n=i.getFilledLength(e),r=i.getRightEditablePosition(n);return{start:r,end:r}},this.getFilledLength=function(e){return function(n,r){for(var o=n.length-1;o>=0;o--)if(r(n[o],o))return o;return-1}(e.split(""),function(n,r){return i.isPositionEditable(r)&&i.isCharacterFillingPosition(n,r)})+1},this.getStringFillingLengthAtPosition=function(e,n){return e.split("").reduce(function(r,o){return i.insertCharacterAtPosition(r,o,r.length)},function(r,o){o===void 0&&(o=1);for(var s="",u=0;u<o;u++)s+=r;return s}(" ",n)).length-n},this.getLeftEditablePosition=function(e){for(var n=e;n>=0;n--)if(i.isPositionEditable(n))return n;return null},this.getRightEditablePosition=function(e){for(var n=i.maskOptions.mask,r=e;r<n.length;r++)if(i.isPositionEditable(r))return r;return null},this.formatValue=function(e){var n=i.maskOptions,r=n.maskPlaceholder,o=n.mask;if(!r){for(e=i.insertStringAtPosition("",e,0);e.length<o.length&&!i.isPositionEditable(e.length);)e+=o[e.length];return e}return i.insertStringAtPosition(r,e,0)},this.clearRange=function(e,n,r){if(!r)return e;var o=n+r,s=i.maskOptions,u=s.maskPlaceholder,v=s.mask,f=e.split("").map(function(l,a){var c=i.isPositionEditable(a);return!u&&a>=o&&!c?"":a<n||a>=o?l:c?u?u[a]:"":v[a]}).join("");return i.formatValue(f)},this.insertCharacterAtPosition=function(e,n,r){var o=i.maskOptions,s=o.mask,u=o.maskPlaceholder;if(r>=s.length)return e;var v=i.isCharacterAllowedAtPosition(n,r),f=i.isPositionEditable(r),l=i.getRightEditablePosition(r),a=u&&l?n===u[l]:null,c=e.slice(0,r);return!v&&f||(e=c+(v?n:s[r])),v||f||a||(e=i.insertCharacterAtPosition(e,n,r+1)),e},this.insertStringAtPosition=function(e,n,r){var o=i.maskOptions,s=o.mask,u=o.maskPlaceholder;if(!n||r>=s.length)return e;var v=n.split(""),f=i.isValueFilled(e)||!!u,l=e.slice(r);return e=v.reduce(function(a,c){return i.insertCharacterAtPosition(a,c,a.length)},e.slice(0,r)),f?e+=l.slice(e.length-r):i.isValueFilled(e)?e+=s.slice(e.length).join(""):e=l.split("").filter(function(a,c){return i.isPositionEditable(r+c)}).reduce(function(a,c){var d=i.getRightEditablePosition(a.length);return d===null?a:(i.isPositionEditable(a.length)||(a+=s.slice(a.length,d).join("")),i.insertCharacterAtPosition(a,c,a.length))},e),e},this.processChange=function(e,n){var r=i.maskOptions,o=r.mask,s=r.prefix,u=r.lastEditablePosition,v=e.value,f=e.selection,l=n.value,a=n.selection,c=v,d="",P=0,p=0,h=Math.min(a.start,f.start);return f.end>a.start?(d=c.slice(a.start,f.end),p=(P=i.getStringFillingLengthAtPosition(d,h))?a.length:0):c.length<l.length&&(p=l.length-c.length),c=l,p&&(p===1&&!a.length&&(h=a.start===f.start?i.getRightEditablePosition(f.start):i.getLeftEditablePosition(f.start)),c=i.clearRange(c,h,p)),c=i.insertStringAtPosition(c,d,h),(h+=P)>=o.length?h=o.length:h<s.length&&!P?h=s.length:h>=s.length&&h<u&&P&&(h=i.getRightEditablePosition(h)),{value:c=i.formatValue(c),enteredString:d,selection:{start:h,end:h}}},this.maskOptions=function(e){var n=e.mask,r=e.maskPlaceholder,o=[];if(!n)return{maskPlaceholder:null,mask:null,prefix:null,lastEditablePosition:null,permanents:[]};if(typeof n=="string"){var s=!1,u="";n.split("").forEach(function(l){s||l!=="\\"?(!s&&K[l]||o.push(u.length),u+=l,s=!1):s=!0}),n=u.split("").map(function(l,a){return o.indexOf(a)===-1?K[l]:l})}else n.forEach(function(l,a){typeof l=="string"&&o.push(a)});r&&(r=r.length===1?n.map(function(l,a){return o.indexOf(a)!==-1?l:r}):r.split(""),o.forEach(function(l){r[l]=n[l]}),r=r.join(""));for(var v=o.filter(function(l,a){return l===a}).map(function(l){return n[l]}).join(""),f=n.length-1;o.indexOf(f)!==-1;)f--;return{maskPlaceholder:r,prefix:v,mask:n,lastEditablePosition:f,permanents:o}}(t)},Oe=function(t){function i(){return t.apply(this,arguments)||this}return Ee(i,t),i.prototype.render=function(){var e=this.props,n=e.children,r=ne(e,["children"]);return D.cloneElement(n,r)},i}(D.Component),B=k.forwardRef(function(t,i){var e=t.alwaysShowMask,n=t.children,r=t.mask,o=t.maskPlaceholder,s=t.beforeMaskedStateChange,u=ne(t,["alwaysShowMask","children","mask","maskPlaceholder","beforeMaskedStateChange"]);(function(g){var m=g.mask,b=g.maskPlaceholder;m&&b&&b.length!==1&&b.length!==m.length&&Z(!1)})(t);var v,f,l=new Fe({mask:r,maskPlaceholder:o}),a=!!r,c=!u.disabled&&!u.readOnly,d=t.value!==null&&t.value!==void 0,P=(v=a,f=k.useRef(),k.useEffect(function(){f.current=v}),f.current),p=Se(function(g){return""+g}((d?t.value:t.defaultValue)||""),a),h=p.inputRef,E=p.getInputState,y=p.setInputState,C=p.getLastInputState,A=_(h);if(a&&d){var M=A(),$=M&&V(M)||e||t.value?l.formatValue(t.value):t.value;s&&($=s({nextState:{value:$,selection:{start:null,end:null}}}).value),y(L({},C(),{value:$}))}var W=C(),oe=W.selection,ae=W.value;k.useLayoutEffect(function(){if(a){var g=V(A()),m=oe,b=E(),x=L({},b);if(!d){var S=b.value,R=l.formatValue(S),T=l.isValueEmpty(R);!T||g||e?x.value=R:T&&!g&&(x.value="")}g&&!P?x.selection=l.getDefaultSelectionForValue(x.value):d&&g&&m&&m.start!==null&&m.end!==null&&(x.selection=m),s&&(x=s({currentState:b,nextState:x})),y(x)}});var q=L({},u,{onFocus:function(g){h.current=g.target;var m=E().value;if(a&&!l.isValueFilled(m)){var b=l.formatValue(m),x=l.getDefaultSelectionForValue(b),S={value:b,selection:x};s&&(b=(S=s({currentState:E(),nextState:S})).value,x=S.selection),y(S),b!==m&&t.onChange&&t.onChange(g),re(function(){y(C())})}t.onFocus&&t.onFocus(g)},onBlur:function(g){var m=E().value,b=C().value;if(a&&!e&&l.isValueEmpty(b)){var x="",S={value:x,selection:{start:null,end:null}};s&&(x=(S=s({currentState:E(),nextState:S})).value),y(S),x!==m&&t.onChange&&t.onChange(g)}t.onBlur&&t.onBlur(g)},onChange:a&&c?function(g){var m=E(),b=C(),x=l.processChange(m,b);s&&(x=s({currentState:m,previousState:b,nextState:x})),y(x),t.onChange&&t.onChange(g)}:t.onChange,onMouseDown:a&&c?function(g){var m=A(),b=E().value,x=ie(m);if(!V(m)&&!l.isValueFilled(b)){var S=g.clientX,R=g.clientY,T=new Date().getTime();x.addEventListener("mouseup",function le(Y){if(x.removeEventListener("mouseup",le),V(m)){var se=Math.abs(Y.clientX-S),ue=Math.abs(Y.clientY-R),H=Math.max(se,ue),U=new Date().getTime()-T;if(H<=10&&U<=200||H<=5&&U<=300){var X=C(),ce=L({},X,{selection:l.getDefaultSelectionForValue(X.value)});y(ce)}}})}t.onMouseDown&&t.onMouseDown(g)}:t.onMouseDown,ref:function(g){h.current=we.findDOMNode(g),function(m){return typeof m=="function"}(i)?i(g):i!==null&&typeof i=="object"&&(i.current=g)},value:a&&d?ae:t.value});return n?(function(g,m){je.filter(function(b){return m.props[b]!=null&&m.props[b]!==g[b]}).length&&Z(!1)}(t,n),D.createElement(Oe,q,n)):D.createElement("input",q)});B.displayName="InputMask",B.defaultProps={alwaysShowMask:!1,maskPlaceholder:"_"},ee.exports=B;var Ve=ee.exports;J.exports=Ve;var Ae=J.exports;const Le=de(Ae),Me=N(O).attrs({background:"inputBg2",px:8,py:12})`
  border-radius: 8px;
`,Be=({id:t,label:i,mask:e="",message:n,name:r,rules:o,showMask:s=!1,maskPlaceholder:u=null,...v})=>{const{register:f,control:l,formState:{errors:a}}=he()||{},c=ge(a,r);return I.useEffect(()=>{const d=document.getElementById(t);d&&d.focus()},[t]),w.jsxs(O,{shrink:1,children:[w.jsxs(O,{align:"center",direction:"row",children:[i&&w.jsx(Te,{htmlFor:t,children:i}),n&&w.jsxs(Re,{name:r,role:"tooltip",children:[w.jsx(xe,{}),w.jsx("div",{className:"tooltip",children:n})]})]}),w.jsx(Me,{children:w.jsx(ve,{control:l,...f(r),render:({field:{onBlur:d,onChange:P,value:p,ref:h}})=>{const{disabled:E=j.disabled,textAlign:y=j.textAlign}=v;return e?w.jsx(Le,{alwaysShowMask:s,disabled:!1,inputRef:h,mask:e,...f(r),maskPlaceholder:u,onBlur:d,onChange:P,value:p,children:w.jsx(z,{colorName:"white",disabled:E,...f(r),id:t,placeholderTextColor:"inputPlaceholder",textAlign:y})}):w.jsx(Q,{...v,colorName:"white",id:t,...f(r),onBlur:d,onChange:P,placeholderTextColor:"inputPlaceholder",value:p||""})},rules:o})}),c&&w.jsx(O,{pl:4,pt:8,shrink:1,tabIndex:0,children:w.jsx(pe,{color:"primaryRed",kind:"regularBold",children:w.jsxs(O,{align:"center",direction:"row",shrink:1,children:[w.jsx(me,{fontSize:18}),w.jsx(O,{pl:4,shrink:1,children:c.message})]})})})]})},Re=N(O)`
  cursor: default;
  margin-left: 6px;
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
`,Te=N.label`
  color: ${F.lightGray};
  font-size: 12px;
  font-weight: 600;
`;export{Q as B,Be as T};
