import{r as I,i as fe,o as de,p as N,q as S,j as E,F as L,E as pe}from"./index-a2fee79d.js";import{p as he,V as ge,z as ve,W as me}from"./index-57446bb9.js";import{e as xe}from"./index.esm-5cf1d22e.js";var ee={exports:{}},te={exports:{}},be=function(e,r,t,n,o,i,s,u){if(!e){var f;if(r===void 0)f=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var p=[t,n,o,i,s,u],l=0;f=new Error(r.replace(/%s/g,function(){return p[l++]})),f.name="Invariant Violation"}throw f.framesToPop=1,f}},ke=be;function ne(e){return e&&typeof e=="object"&&"default"in e?e.default:e}var k=I,_=ne(k),Pe=fe,K=ne(ke);function B(){return(B=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function Ee(e,r){e.prototype=Object.create(r.prototype),e.prototype.constructor=e,function(t,n){for(var o=Object.getOwnPropertyNames(n),i=0;i<o.length;i++){var s=o[i],u=Object.getOwnPropertyDescriptor(n,s);u&&u.configurable&&t[s]===void 0&&Object.defineProperty(t,s,u)}}(e,r)}function re(e,r){if(e==null)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}function oe(e){return requestAnimationFrame(e)}function Q(e){cancelAnimationFrame(e)}function R(e){var r=e.ownerDocument;return r.hasFocus()&&r.activeElement===e}function ie(e){return e==null?void 0:e.ownerDocument}function we(e){var r=function(t){var n;return(n=ie(t))==null?void 0:n.defaultView}(e);return!!r&&e instanceof r.HTMLElement}function W(e){return k.useCallback(function(){var r=e.current,t=typeof window<"u"&&we(r);if(!r||!t)return null;if(r.nodeName!=="INPUT"&&(r=r.querySelector("input")),!r)throw new Error("react-input-mask: inputComponent doesn't contain input node");return r},[e])}function ye(e,r){var t,n,o,i,s=k.useRef({start:null,end:null}),u=W(e),f=k.useCallback(function(){return function(g){var d=g.selectionStart,P=g.selectionEnd;return{start:d,end:P,length:P-d}}(u())},[u]),p=k.useCallback(function(){return s.current},[]),l=k.useCallback(function(g){var d=u();d&&R(d)&&(function(P,y,C){C===void 0&&(C=y),P.setSelectionRange(y,C)}(d,g.start,g.end),s.current=f())},[u,f]),a=k.useCallback(function(){s.current=f()},[f]),c=(t=a,n=k.useRef(null),o=k.useCallback(function(){n.current===null&&function g(){t(),n.current=oe(g)}()},[t]),i=k.useCallback(function(){Q(n.current),n.current=null},[]),k.useEffect(function(){n.current&&(i(),o())},[o,i]),k.useEffect(Q,[]),[o,i]),h=c[0],w=c[1];return k.useLayoutEffect(function(){if(r){var g=u();return g.addEventListener("focus",h),g.addEventListener("blur",w),R(g)&&h(),function(){g.removeEventListener("focus",h),g.removeEventListener("blur",w),w()}}}),{getSelection:f,getLastSelection:p,setSelection:l}}function Ce(e,r){var t=k.useRef(),n=ye(t,r),o=n.getSelection,i=n.getLastSelection,s=n.setSelection,u=function(a,c){var h=W(a),w=k.useRef(c);return{getValue:k.useCallback(function(){return h().value},[h]),getLastValue:k.useCallback(function(){return w.current},[]),setValue:k.useCallback(function(g){w.current=g;var d=h();d&&(d.value=g)},[h])}}(t,e),f=u.getValue,p=u.getLastValue,l=u.setValue;return{inputRef:t,getInputState:function(){return{value:f(),selection:o()}},getLastInputState:function(){return{value:p(),selection:i()}},setInputState:function(a){var c=a.value,h=a.selection;l(c),s(h)}}}var Se=["disabled","onBlur","onChange","onFocus","onMouseDown","readOnly","value"],J={9:/[0-9]/,a:/[A-Za-z]/,"*":/[A-Za-z0-9]/},Fe=function(e){var r=this;this.isCharacterAllowedAtPosition=function(t,n){var o=r.maskOptions.maskPlaceholder;return!!r.isCharacterFillingPosition(t,n)||!!o&&o[n]===t},this.isCharacterFillingPosition=function(t,n){var o=r.maskOptions.mask;if(!t||n>=o.length)return!1;if(!r.isPositionEditable(n))return o[n]===t;var i=o[n];return new RegExp(i).test(t)},this.isPositionEditable=function(t){var n=r.maskOptions,o=n.mask,i=n.permanents;return t<o.length&&i.indexOf(t)===-1},this.isValueEmpty=function(t){return t.split("").every(function(n,o){return!r.isPositionEditable(o)||!r.isCharacterFillingPosition(n,o)})},this.isValueFilled=function(t){return r.getFilledLength(t)===r.maskOptions.lastEditablePosition+1},this.getDefaultSelectionForValue=function(t){var n=r.getFilledLength(t),o=r.getRightEditablePosition(n);return{start:o,end:o}},this.getFilledLength=function(t){return function(n,o){for(var i=n.length-1;i>=0;i--)if(o(n[i],i))return i;return-1}(t.split(""),function(n,o){return r.isPositionEditable(o)&&r.isCharacterFillingPosition(n,o)})+1},this.getStringFillingLengthAtPosition=function(t,n){return t.split("").reduce(function(o,i){return r.insertCharacterAtPosition(o,i,o.length)},function(o,i){i===void 0&&(i=1);for(var s="",u=0;u<i;u++)s+=o;return s}(" ",n)).length-n},this.getLeftEditablePosition=function(t){for(var n=t;n>=0;n--)if(r.isPositionEditable(n))return n;return null},this.getRightEditablePosition=function(t){for(var n=r.maskOptions.mask,o=t;o<n.length;o++)if(r.isPositionEditable(o))return o;return null},this.formatValue=function(t){var n=r.maskOptions,o=n.maskPlaceholder,i=n.mask;if(!o){for(t=r.insertStringAtPosition("",t,0);t.length<i.length&&!r.isPositionEditable(t.length);)t+=i[t.length];return t}return r.insertStringAtPosition(o,t,0)},this.clearRange=function(t,n,o){if(!o)return t;var i=n+o,s=r.maskOptions,u=s.maskPlaceholder,f=s.mask,p=t.split("").map(function(l,a){var c=r.isPositionEditable(a);return!u&&a>=i&&!c?"":a<n||a>=i?l:c?u?u[a]:"":f[a]}).join("");return r.formatValue(p)},this.insertCharacterAtPosition=function(t,n,o){var i=r.maskOptions,s=i.mask,u=i.maskPlaceholder;if(o>=s.length)return t;var f=r.isCharacterAllowedAtPosition(n,o),p=r.isPositionEditable(o),l=r.getRightEditablePosition(o),a=u&&l?n===u[l]:null,c=t.slice(0,o);return!f&&p||(t=c+(f?n:s[o])),f||p||a||(t=r.insertCharacterAtPosition(t,n,o+1)),t},this.insertStringAtPosition=function(t,n,o){var i=r.maskOptions,s=i.mask,u=i.maskPlaceholder;if(!n||o>=s.length)return t;var f=n.split(""),p=r.isValueFilled(t)||!!u,l=t.slice(o);return t=f.reduce(function(a,c){return r.insertCharacterAtPosition(a,c,a.length)},t.slice(0,o)),p?t+=l.slice(t.length-o):r.isValueFilled(t)?t+=s.slice(t.length).join(""):t=l.split("").filter(function(a,c){return r.isPositionEditable(o+c)}).reduce(function(a,c){var h=r.getRightEditablePosition(a.length);return h===null?a:(r.isPositionEditable(a.length)||(a+=s.slice(a.length,h).join("")),r.insertCharacterAtPosition(a,c,a.length))},t),t},this.processChange=function(t,n){var o=r.maskOptions,i=o.mask,s=o.prefix,u=o.lastEditablePosition,f=t.value,p=t.selection,l=n.value,a=n.selection,c=f,h="",w=0,g=0,d=Math.min(a.start,p.start);return p.end>a.start?(h=c.slice(a.start,p.end),g=(w=r.getStringFillingLengthAtPosition(h,d))?a.length:0):c.length<l.length&&(g=l.length-c.length),c=l,g&&(g===1&&!a.length&&(d=a.start===p.start?r.getRightEditablePosition(p.start):r.getLeftEditablePosition(p.start)),c=r.clearRange(c,d,g)),c=r.insertStringAtPosition(c,h,d),(d+=w)>=i.length?d=i.length:d<s.length&&!w?d=s.length:d>=s.length&&d<u&&w&&(d=r.getRightEditablePosition(d)),{value:c=r.formatValue(c),enteredString:h,selection:{start:d,end:d}}},this.maskOptions=function(t){var n=t.mask,o=t.maskPlaceholder,i=[];if(!n)return{maskPlaceholder:null,mask:null,prefix:null,lastEditablePosition:null,permanents:[]};if(typeof n=="string"){var s=!1,u="";n.split("").forEach(function(l){s||l!=="\\"?(!s&&J[l]||i.push(u.length),u+=l,s=!1):s=!0}),n=u.split("").map(function(l,a){return i.indexOf(a)===-1?J[l]:l})}else n.forEach(function(l,a){typeof l=="string"&&i.push(a)});o&&(o=o.length===1?n.map(function(l,a){return i.indexOf(a)!==-1?l:o}):o.split(""),i.forEach(function(l){o[l]=n[l]}),o=o.join(""));for(var f=i.filter(function(l,a){return l===a}).map(function(l){return n[l]}).join(""),p=n.length-1;i.indexOf(p)!==-1;)p--;return{maskPlaceholder:o,prefix:f,mask:n,lastEditablePosition:p,permanents:i}}(e)},je=function(e){function r(){return e.apply(this,arguments)||this}return Ee(r,e),r.prototype.render=function(){var t=this.props,n=t.children,o=re(t,["children"]);return _.cloneElement(n,o)},r}(_.Component),q=k.forwardRef(function(e,r){var t=e.alwaysShowMask,n=e.children,o=e.mask,i=e.maskPlaceholder,s=e.beforeMaskedStateChange,u=re(e,["alwaysShowMask","children","mask","maskPlaceholder","beforeMaskedStateChange"]);(function(v){var m=v.mask,x=v.maskPlaceholder;m&&x&&x.length!==1&&x.length!==m.length&&K(!1)})(e);var f,p,l=new Fe({mask:o,maskPlaceholder:i}),a=!!o,c=!u.disabled&&!u.readOnly,h=e.value!==null&&e.value!==void 0,w=(f=a,p=k.useRef(),k.useEffect(function(){p.current=f}),p.current),g=Ce(function(v){return""+v}((h?e.value:e.defaultValue)||""),a),d=g.inputRef,P=g.getInputState,y=g.setInputState,C=g.getLastInputState,F=W(d);if(a&&h){var M=F(),A=M&&R(M)||t||e.value?l.formatValue(e.value):e.value;s&&(A=s({nextState:{value:A,selection:{start:null,end:null}}}).value),y(B({},C(),{value:A}))}var O=C(),T=O.selection,D=O.value;k.useLayoutEffect(function(){if(a){var v=R(F()),m=T,x=P(),b=B({},x);if(!h){var j=x.value,z=l.formatValue(j),H=l.isValueEmpty(z);!H||v||t?b.value=z:H&&!v&&(b.value="")}v&&!w?b.selection=l.getDefaultSelectionForValue(b.value):h&&v&&m&&m.start!==null&&m.end!==null&&(b.selection=m),s&&(b=s({currentState:x,nextState:b})),y(b)}});var $=B({},u,{onFocus:function(v){d.current=v.target;var m=P().value;if(a&&!l.isValueFilled(m)){var x=l.formatValue(m),b=l.getDefaultSelectionForValue(x),j={value:x,selection:b};s&&(x=(j=s({currentState:P(),nextState:j})).value,b=j.selection),y(j),x!==m&&e.onChange&&e.onChange(v),oe(function(){y(C())})}e.onFocus&&e.onFocus(v)},onBlur:function(v){var m=P().value,x=C().value;if(a&&!t&&l.isValueEmpty(x)){var b="",j={value:b,selection:{start:null,end:null}};s&&(b=(j=s({currentState:P(),nextState:j})).value),y(j),b!==m&&e.onChange&&e.onChange(v)}e.onBlur&&e.onBlur(v)},onChange:a&&c?function(v){var m=P(),x=C(),b=l.processChange(m,x);s&&(b=s({currentState:m,previousState:x,nextState:b})),y(b),e.onChange&&e.onChange(v)}:e.onChange,onMouseDown:a&&c?function(v){var m=F(),x=P().value,b=ie(m);if(!R(m)&&!l.isValueFilled(x)){var j=v.clientX,z=v.clientY,H=new Date().getTime();b.addEventListener("mouseup",function le(X){if(b.removeEventListener("mouseup",le),R(m)){var se=Math.abs(X.clientX-j),ue=Math.abs(X.clientY-z),Y=Math.max(se,ue),Z=new Date().getTime()-H;if(Y<=10&&Z<=200||Y<=5&&Z<=300){var G=C(),ce=B({},G,{selection:l.getDefaultSelectionForValue(G.value)});y(ce)}}})}e.onMouseDown&&e.onMouseDown(v)}:e.onMouseDown,ref:function(v){d.current=Pe.findDOMNode(v),function(m){return typeof m=="function"}(r)?r(v):r!==null&&typeof r=="object"&&(r.current=v)},value:a&&h?D:e.value});return n?(function(v,m){Se.filter(function(x){return m.props[x]!=null&&m.props[x]!==v[x]}).length&&K(!1)}(e,n),_.createElement(je,$,n)):_.createElement("input",$)});q.displayName="InputMask",q.defaultProps={alwaysShowMask:!1,maskPlaceholder:"_"},te.exports=q;var Ve=te.exports;ee.exports=Ve;var Oe=ee.exports;const Le=de(Oe),V={autoComplete:"off",colorName:"black",disabled:!1,maxLength:524288,placeholder:"",placeholderTextColor:"gray100",returnKeyType:"done",textAlign:"left",type:"text"},U=N.input`
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
`;U.displayName="WebTextInput";const ae=I.forwardRef(({autoComplete:e=V.autoComplete,autoFocus:r,className:t,colorName:n=V.colorName,dataTestId:o,defaultValue:i,disabled:s=V.disabled,id:u,maxLength:f=V.maxLength,name:p,onBlur:l,onChange:a,onFocus:c,onKeyDown:h,placeholder:w=V.placeholder,placeholderTextColor:g=V.placeholderTextColor,textAlign:d=V.textAlign,type:P=V.type,value:y},C)=>{const F=I.useCallback(M=>{a&&a(M.target.value)},[a]);return E.jsx(U,{ref:C,autoComplete:e,autoFocus:r,className:t,colorName:n,"data-testid":o,defaultValue:i,disabled:s,id:u,maxLength:f,name:p,onBlur:l,onChange:F,onFocus:c,onKeyDown:h,placeholder:w,placeholderTextColor:g,textAlign:d,type:P,value:y})});ae.displayName="BaseTextInput";const Me=e=>e.hasError?S.primaryRed:e.hasContent||e.isFocused||e.isHovered?S.primaryBlue:"transparent",Ae=N(L)`
  background: ${S.inputBg2};
  border-radius: 8px;
  border: 1px solid ${Me};
  padding: 12px 8px;
`,Re=N(L)`
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
`,Ie=N.label`
  color: ${S.lightGray};
  font-size: 12px;
  font-weight: 600;
  margin-bottom: 6px;
`,Te=N.textarea`
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
`,Ne=({id:e,dataTestId:r,label:t,mask:n="",message:o,name:i,rules:s,showMask:u=!1,maskPlaceholder:f=null,isTextArea:p=!1,placeholder:l="",maxLength:a,...c})=>{const{register:h,control:w,formState:{errors:g},getValues:d}=he()||{},P=ge(g,i),y=d(i),[C,F]=I.useState(!1),[M,A]=I.useState(!1);return I.useEffect(()=>{const O=document.getElementById(e);O&&O.focus()},[e]),E.jsxs(L,{shrink:1,children:[E.jsxs(L,{align:"center",direction:"row",children:[t&&E.jsx(Ie,{htmlFor:e,children:t}),o&&E.jsxs(Re,{name:i,role:"tooltip",children:[E.jsx(ve,{}),E.jsx("div",{className:"tooltip",children:o})]})]}),E.jsx(Ae,{hasContent:!!y,hasError:!!P,isFocused:C,isHovered:M,onMouseEnter:()=>A(!0),onMouseLeave:()=>A(!1),children:E.jsx(me,{control:w,...h(i),render:({field:{onBlur:O,onChange:T,value:D,ref:$}})=>{const{disabled:v=V.disabled,textAlign:m=V.textAlign}=c;return p?E.jsx(Te,{ref:$,"data-testid":r,disabled:v,id:e,maxLength:a,onBlur:()=>{F(!1),O()},onChange:T,onFocus:()=>F(!0),placeholder:l,value:D||""}):n?E.jsx(Le,{alwaysShowMask:u,disabled:!1,inputRef:$,mask:n,...h(i),maskPlaceholder:f,onBlur:O,onChange:T,value:D,children:E.jsx(U,{colorName:"white","data-testid":r,disabled:v,...h(i),id:e,onBlur:()=>F(!1),onFocus:()=>F(!0),placeholderTextColor:"inputPlaceholder",textAlign:m})}):E.jsx(ae,{...c,colorName:"white",dataTestId:r,id:e,...h(i),onBlur:()=>{F(!1),O()},onChange:T,onFocus:()=>F(!0),placeholder:l,placeholderTextColor:"inputPlaceholder",value:D||""})},rules:s})}),P&&E.jsx(L,{pl:4,pt:8,shrink:1,tabIndex:0,children:E.jsx(pe,{color:"primaryRed",kind:"regularBold",children:E.jsxs(L,{align:"center",direction:"row",shrink:1,children:[E.jsx(xe,{fontSize:18}),E.jsx(L,{pl:4,shrink:1,children:P.message!==""?P.message:"Please enter a valid URL"})]})})})]})};export{ae as B,Ne as T};
