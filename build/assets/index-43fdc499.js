import{g as Be,a as Fe,s as le,_ as F,a9 as oo,r as x,b as Ve,j as o,d as Ye,c as ce,e as We,u as Nt,aM as no,b4 as Oe,b5 as Ue,a7 as ct,b6 as so,b7 as io,a0 as ro,f as $,F as k,h as R,D as Pe,a_ as ao,T as Q,B as Lt,N as Ce,aY as fe,a$ as _t,b8 as co,b9 as lo,ba as uo,Z as _,bb as ue,bc as pe,ap as lt,bd as ve,be as Ee,bf as dt,bg as X,bh as po,ar as fo,bi as ut,bj as pt,bk as ft,bl as ht,bm as ho,am as mo,W as go,bn as xo,bo as mt}from"./index-14394df5.js";import{B as bo}from"./index-38187ea6.js";import{p as yo,q as wo,i as jo,C as be,I as vo,B as Me,c as Ge,b as He,F as $t,r as Eo}from"./react-toastify.esm-fad760e9.js";import{e as ko,A as Te}from"./index-b9152ab7.js";import{T as Se}from"./index-e96fb03c.js";import{c as gt,d as Po,a as Co,N as To,F as So,b as Oo}from"./index-52dc9180.js";import{D as Mo,P as Ao}from"./PlusIcon-36b07e58.js";import{p as No,c as Lo,g as _o,t as Re}from"./index-e9d6e565.js";import{u as $o}from"./Popover-669c711a.js";import{u as Io}from"./index-464c246f.js";import{L as Do,m as zo,u as K,b as Ae,T as It,H as Ro,C as Bo}from"./constant-b153183a.js";import{f as Fo,P as Vo,L as Yo}from"./constants-55fe2d1d.js";import{A as xt}from"./AddContentIcon-9be9155d.js";import{S as Wo}from"./index-17316df1.js";import"./useSlotProps-edc11bc0.js";import"./Popper-ab17db5b.js";import"./index.esm-e0569e1c.js";import"./InfoIcon-2754c927.js";import"./generateCategoricalChart-8af67283.js";import"./NoFilterResultIcon-d7c70f09.js";import"./index-f3ed0f96.js";import"./CheckIcon-3abd732e.js";function Uo(t){return Be("PrivateSwitchBase",t)}Fe("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);const Go=["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","disableFocusRipple","edge","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"],Ho=t=>{const{classes:s,checked:i,disabled:e,edge:a}=t,l={root:["root",i&&"checked",e&&"disabled",a&&`edge${ce(a)}`],input:["input"]};return We(l,Uo,s)},Xo=le(yo)(({ownerState:t})=>F({padding:9,borderRadius:"50%"},t.edge==="start"&&{marginLeft:t.size==="small"?-3:-12},t.edge==="end"&&{marginRight:t.size==="small"?-3:-12})),Zo=le("input",{shouldForwardProp:oo})({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),Ko=x.forwardRef(function(s,i){const{autoFocus:e,checked:a,checkedIcon:l,className:f,defaultChecked:c,disabled:d,disableFocusRipple:y=!1,edge:r=!1,icon:h,id:p,inputProps:v,inputRef:S,name:b,onBlur:P,onChange:C,onFocus:T,readOnly:N,required:m=!1,tabIndex:g,type:O,value:z}=s,I=Ve(s,Go),[D,w]=Io({controlled:a,default:!!c,name:"SwitchBase",state:"checked"}),L=$o(),re=V=>{T&&T(V),L&&L.onFocus&&L.onFocus(V)},ne=V=>{P&&P(V),L&&L.onBlur&&L.onBlur(V)},G=V=>{if(V.nativeEvent.defaultPrevented)return;const M=V.target.checked;w(M),C&&C(V,M)};let Z=d;L&&typeof Z>"u"&&(Z=L.disabled);const de=O==="checkbox"||O==="radio",J=F({},s,{checked:D,disabled:Z,disableFocusRipple:y,edge:r}),H=Ho(J);return o.jsxs(Xo,F({component:"span",className:Ye(H.root,f),centerRipple:!0,focusRipple:!y,disabled:Z,tabIndex:null,role:void 0,onFocus:re,onBlur:ne,ownerState:J,ref:i},I,{children:[o.jsx(Zo,F({autoFocus:e,checked:a,defaultChecked:c,className:H.input,disabled:Z,id:de?p:void 0,name:b,onChange:G,readOnly:N,ref:S,required:m,ownerState:J,tabIndex:g,type:O},O==="checkbox"&&z===void 0?{}:{value:z},v)),D?l:h]}))}),qo=Ko,Qo=x.createContext(),bt=Qo;function Jo(t){return Be("MuiGrid",t)}const en=[0,1,2,3,4,5,6,7,8,9,10],tn=["column-reverse","column","row-reverse","row"],on=["nowrap","wrap-reverse","wrap"],xe=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12],nn=Fe("MuiGrid",["root","container","item","zeroMinWidth",...en.map(t=>`spacing-xs-${t}`),...tn.map(t=>`direction-xs-${t}`),...on.map(t=>`wrap-xs-${t}`),...xe.map(t=>`grid-xs-${t}`),...xe.map(t=>`grid-sm-${t}`),...xe.map(t=>`grid-md-${t}`),...xe.map(t=>`grid-lg-${t}`),...xe.map(t=>`grid-xl-${t}`)]),ye=nn,sn=["className","columns","columnSpacing","component","container","direction","item","rowSpacing","spacing","wrap","zeroMinWidth"];function he(t){const s=parseFloat(t);return`${s}${String(t).replace(String(s),"")||"px"}`}function rn({theme:t,ownerState:s}){let i;return t.breakpoints.keys.reduce((e,a)=>{let l={};if(s[a]&&(i=s[a]),!i)return e;if(i===!0)l={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if(i==="auto")l={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{const f=Oe({values:s.columns,breakpoints:t.breakpoints.values}),c=typeof f=="object"?f[a]:f;if(c==null)return e;const d=`${Math.round(i/c*1e8)/1e6}%`;let y={};if(s.container&&s.item&&s.columnSpacing!==0){const r=t.spacing(s.columnSpacing);if(r!=="0px"){const h=`calc(${d} + ${he(r)})`;y={flexBasis:h,maxWidth:h}}}l=F({flexBasis:d,flexGrow:0,maxWidth:d},y)}return t.breakpoints.values[a]===0?Object.assign(e,l):e[t.breakpoints.up(a)]=l,e},{})}function an({theme:t,ownerState:s}){const i=Oe({values:s.direction,breakpoints:t.breakpoints.values});return Ue({theme:t},i,e=>{const a={flexDirection:e};return e.indexOf("column")===0&&(a[`& > .${ye.item}`]={maxWidth:"none"}),a})}function Dt({breakpoints:t,values:s}){let i="";Object.keys(s).forEach(a=>{i===""&&s[a]!==0&&(i=a)});const e=Object.keys(t).sort((a,l)=>t[a]-t[l]);return e.slice(0,e.indexOf(i))}function cn({theme:t,ownerState:s}){const{container:i,rowSpacing:e}=s;let a={};if(i&&e!==0){const l=Oe({values:e,breakpoints:t.breakpoints.values});let f;typeof l=="object"&&(f=Dt({breakpoints:t.breakpoints.values,values:l})),a=Ue({theme:t},l,(c,d)=>{var y;const r=t.spacing(c);return r!=="0px"?{marginTop:`-${he(r)}`,[`& > .${ye.item}`]:{paddingTop:he(r)}}:(y=f)!=null&&y.includes(d)?{}:{marginTop:0,[`& > .${ye.item}`]:{paddingTop:0}}})}return a}function ln({theme:t,ownerState:s}){const{container:i,columnSpacing:e}=s;let a={};if(i&&e!==0){const l=Oe({values:e,breakpoints:t.breakpoints.values});let f;typeof l=="object"&&(f=Dt({breakpoints:t.breakpoints.values,values:l})),a=Ue({theme:t},l,(c,d)=>{var y;const r=t.spacing(c);return r!=="0px"?{width:`calc(100% + ${he(r)})`,marginLeft:`-${he(r)}`,[`& > .${ye.item}`]:{paddingLeft:he(r)}}:(y=f)!=null&&y.includes(d)?{}:{width:"100%",marginLeft:0,[`& > .${ye.item}`]:{paddingLeft:0}}})}return a}function dn(t,s,i={}){if(!t||t<=0)return[];if(typeof t=="string"&&!Number.isNaN(Number(t))||typeof t=="number")return[i[`spacing-xs-${String(t)}`]];const e=[];return s.forEach(a=>{const l=t[a];Number(l)>0&&e.push(i[`spacing-${a}-${String(l)}`])}),e}const un=le("div",{name:"MuiGrid",slot:"Root",overridesResolver:(t,s)=>{const{ownerState:i}=t,{container:e,direction:a,item:l,spacing:f,wrap:c,zeroMinWidth:d,breakpoints:y}=i;let r=[];e&&(r=dn(f,y,s));const h=[];return y.forEach(p=>{const v=i[p];v&&h.push(s[`grid-${p}-${String(v)}`])}),[s.root,e&&s.container,l&&s.item,d&&s.zeroMinWidth,...r,a!=="row"&&s[`direction-xs-${String(a)}`],c!=="wrap"&&s[`wrap-xs-${String(c)}`],...h]}})(({ownerState:t})=>F({boxSizing:"border-box"},t.container&&{display:"flex",flexWrap:"wrap",width:"100%"},t.item&&{margin:0},t.zeroMinWidth&&{minWidth:0},t.wrap!=="wrap"&&{flexWrap:t.wrap}),an,cn,ln,rn);function pn(t,s){if(!t||t<=0)return[];if(typeof t=="string"&&!Number.isNaN(Number(t))||typeof t=="number")return[`spacing-xs-${String(t)}`];const i=[];return s.forEach(e=>{const a=t[e];if(Number(a)>0){const l=`spacing-${e}-${String(a)}`;i.push(l)}}),i}const fn=t=>{const{classes:s,container:i,direction:e,item:a,spacing:l,wrap:f,zeroMinWidth:c,breakpoints:d}=t;let y=[];i&&(y=pn(l,d));const r=[];d.forEach(p=>{const v=t[p];v&&r.push(`grid-${p}-${String(v)}`)});const h={root:["root",i&&"container",a&&"item",c&&"zeroMinWidth",...y,e!=="row"&&`direction-xs-${String(e)}`,f!=="wrap"&&`wrap-xs-${String(f)}`,...r]};return We(h,Jo,s)},hn=x.forwardRef(function(s,i){const e=Nt({props:s,name:"MuiGrid"}),{breakpoints:a}=no(),l=ko(e),{className:f,columns:c,columnSpacing:d,component:y="div",container:r=!1,direction:h="row",item:p=!1,rowSpacing:v,spacing:S=0,wrap:b="wrap",zeroMinWidth:P=!1}=l,C=Ve(l,sn),T=v||S,N=d||S,m=x.useContext(bt),g=r?c||12:m,O={},z=F({},C);a.keys.forEach(w=>{C[w]!=null&&(O[w]=C[w],delete z[w])});const I=F({},l,{columns:g,container:r,direction:h,item:p,rowSpacing:T,columnSpacing:N,wrap:b,zeroMinWidth:P,spacing:S},O,{breakpoints:a.keys}),D=fn(I);return o.jsx(bt.Provider,{value:g,children:o.jsx(un,F({ownerState:I,className:Ye(D.root,f),as:y,ref:i},z))})}),ie=hn;function mn(t){return Be("MuiSwitch",t)}const gn=Fe("MuiSwitch",["root","edgeStart","edgeEnd","switchBase","colorPrimary","colorSecondary","sizeSmall","sizeMedium","checked","disabled","input","thumb","track"]),W=gn,xn=["className","color","edge","size","sx"],bn=t=>{const{classes:s,edge:i,size:e,color:a,checked:l,disabled:f}=t,c={root:["root",i&&`edge${ce(i)}`,`size${ce(e)}`],switchBase:["switchBase",`color${ce(a)}`,l&&"checked",f&&"disabled"],thumb:["thumb"],track:["track"],input:["input"]},d=We(c,mn,s);return F({},s,d)},yn=le("span",{name:"MuiSwitch",slot:"Root",overridesResolver:(t,s)=>{const{ownerState:i}=t;return[s.root,i.edge&&s[`edge${ce(i.edge)}`],s[`size${ce(i.size)}`]]}})(({ownerState:t})=>F({display:"inline-flex",width:34+12*2,height:14+12*2,overflow:"hidden",padding:12,boxSizing:"border-box",position:"relative",flexShrink:0,zIndex:0,verticalAlign:"middle","@media print":{colorAdjust:"exact"}},t.edge==="start"&&{marginLeft:-8},t.edge==="end"&&{marginRight:-8},t.size==="small"&&{width:40,height:24,padding:7,[`& .${W.thumb}`]:{width:16,height:16},[`& .${W.switchBase}`]:{padding:4,[`&.${W.checked}`]:{transform:"translateX(16px)"}}})),wn=le(qo,{name:"MuiSwitch",slot:"SwitchBase",overridesResolver:(t,s)=>{const{ownerState:i}=t;return[s.switchBase,{[`& .${W.input}`]:s.input},i.color!=="default"&&s[`color${ce(i.color)}`]]}})(({theme:t})=>({position:"absolute",top:0,left:0,zIndex:1,color:t.vars?t.vars.palette.Switch.defaultColor:`${t.palette.mode==="light"?t.palette.common.white:t.palette.grey[300]}`,transition:t.transitions.create(["left","transform"],{duration:t.transitions.duration.shortest}),[`&.${W.checked}`]:{transform:"translateX(20px)"},[`&.${W.disabled}`]:{color:t.vars?t.vars.palette.Switch.defaultDisabledColor:`${t.palette.mode==="light"?t.palette.grey[100]:t.palette.grey[600]}`},[`&.${W.checked} + .${W.track}`]:{opacity:.5},[`&.${W.disabled} + .${W.track}`]:{opacity:t.vars?t.vars.opacity.switchTrackDisabled:`${t.palette.mode==="light"?.12:.2}`},[`& .${W.input}`]:{left:"-100%",width:"300%"}}),({theme:t,ownerState:s})=>F({"&:hover":{backgroundColor:t.vars?`rgba(${t.vars.palette.action.activeChannel} / ${t.vars.palette.action.hoverOpacity})`:ct(t.palette.action.active,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},s.color!=="default"&&{[`&.${W.checked}`]:{color:(t.vars||t).palette[s.color].main,"&:hover":{backgroundColor:t.vars?`rgba(${t.vars.palette[s.color].mainChannel} / ${t.vars.palette.action.hoverOpacity})`:ct(t.palette[s.color].main,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${W.disabled}`]:{color:t.vars?t.vars.palette.Switch[`${s.color}DisabledColor`]:`${t.palette.mode==="light"?so(t.palette[s.color].main,.62):io(t.palette[s.color].main,.55)}`}},[`&.${W.checked} + .${W.track}`]:{backgroundColor:(t.vars||t).palette[s.color].main}})),jn=le("span",{name:"MuiSwitch",slot:"Track",overridesResolver:(t,s)=>s.track})(({theme:t})=>({height:"100%",width:"100%",borderRadius:14/2,zIndex:-1,transition:t.transitions.create(["opacity","background-color"],{duration:t.transitions.duration.shortest}),backgroundColor:t.vars?t.vars.palette.common.onBackground:`${t.palette.mode==="light"?t.palette.common.black:t.palette.common.white}`,opacity:t.vars?t.vars.opacity.switchTrack:`${t.palette.mode==="light"?.38:.3}`})),vn=le("span",{name:"MuiSwitch",slot:"Thumb",overridesResolver:(t,s)=>s.thumb})(({theme:t})=>({boxShadow:(t.vars||t).shadows[1],backgroundColor:"currentColor",width:20,height:20,borderRadius:"50%"})),En=x.forwardRef(function(s,i){const e=Nt({props:s,name:"MuiSwitch"}),{className:a,color:l="primary",edge:f=!1,size:c="medium",sx:d}=e,y=Ve(e,xn),r=F({},e,{color:l,edge:f,size:c}),h=bn(r),p=o.jsx(vn,{className:h.thumb,ownerState:r});return o.jsxs(yn,{className:Ye(h.root,a),sx:d,ownerState:r,children:[o.jsx(wn,F({type:"checkbox",icon:p,checkedIcon:p,ref:i,ownerState:r},y,{classes:F({},h,{root:h.switchBase})})),o.jsx(jn,{className:h.track,ownerState:r})]})}),kn=En,Pn={schemas:[],links:[]},zt=ro(t=>({...Pn,setSchemas:s=>{t({schemas:s})},setSchemaLinks:s=>{t({links:s})}})),Cn=/^[a-z0-9_]+$/,Tn=({parentParam:t})=>{const[s,i]=x.useState(!1),[e,a]=x.useState([]),{fields:l,append:f,replace:c,remove:d}=wo({name:"attributes"}),{setValue:y,watch:r}=jo();return x.useEffect(()=>{const h=async()=>{try{let p=[{required:!1,type:"string",key:""}];if(t!==Po.value.toLowerCase()){i(!0);const v=await ao(t);p=No(v)}p=p.filter(v=>v.key!=="node_key"),c(p),a(p)}catch(p){console.warn(p)}finally{i(!1)}};e.length===0&&h()},[t,y,c,e.length]),o.jsxs(o.Fragment,{children:[s?o.jsx(k,{align:"center",children:o.jsx(be,{color:R.SECONDARY_BLUE,size:"30"})}):o.jsx(Sn,{py:8,children:o.jsx(ie,{container:!0,spacing:2,children:l.map((h,p)=>{const v=r(`attributes[${p}].type`),S=r(`attributes[${p}].required`),b=h.isNew||!1,P=["name"].includes(r(`attributes[${p}].key`));return o.jsxs(x.Fragment,{children:[o.jsx(ie,{item:!0,xs:5,children:o.jsx(Se,{autoComplete:"off",className:"text-input",disabled:!b,id:"cy-item-name",maxLength:50,name:`attributes.${p}.key`,placeholder:"Enter value",rules:{...Pe,pattern:{message:"Please avoid special characters, spaces and uppercase",value:Cn}}})}),o.jsx(ie,{item:!0,xs:4,children:o.jsx(Te,{disabled:P,onSelect:C=>y(`attributes[${p}].type`,C==null?void 0:C.value),options:gt,selectedValue:gt.find(C=>C.value===v)})}),o.jsxs(ie,{item:!0,xs:3,children:[o.jsx(kn,{checked:S,disabled:P,name:`attributes.${p}.required`,onChange:C=>y(`attributes[${p}].required`,C.target.checked),size:"small"}),!P&&o.jsx(vo,{onClick:()=>d(p),children:o.jsx(Mo,{})})]})]},h.id)})})}),o.jsx(k,{align:"flex-start",py:12,children:o.jsx(Me,{onClick:()=>f({key:"",type:"string",required:!0,isNew:!0}),size:"medium",startIcon:o.jsx(Ao,{}),variant:"contained",children:"Add Attribute"})})]})},Sn=$(k)`
  overflow-y: auto;
  width: calc(100% + 20px);
  max-height: calc(80vh - 300px);
`,On=({parent:t})=>{const s=t;return o.jsxs(k,{children:[o.jsx(k,{direction:"row",mb:10,children:o.jsxs(ie,{container:!0,spacing:2,children:[o.jsx(ie,{item:!0,xs:5,children:o.jsx(Ie,{style:{marginRight:180},children:"Attributes"})}),o.jsx(ie,{item:!0,xs:4,children:o.jsx(Ie,{style:{marginRight:130},children:"Type"})}),o.jsx(ie,{item:!0,xs:3,children:o.jsx(Ie,{children:"Required"})})]})}),s&&o.jsx(Tn,{parentParam:s},s)]})},Ie=$(Q)`
  font-size: 15px;
  color: gray;
`,Mn={type:"",parent:""},An=async(t,s=!1)=>{try{const{attributes:i,...e}=t,a={...e,attributes:Lo(i)};let l;if(s?l=await Ce.put("/schema",JSON.stringify(a),{}):l=await Ce.post("/schema",JSON.stringify({...a,node_key:"name"}),{}),l.status!=="success")throw new Error("error");return l==null?void 0:l.ref_id}catch(i){let e=fe;if(i.status===400){const a=await i.json();e=a.errorCode||(a==null?void 0:a.status)||fe}else i instanceof Error&&(e=i.message);throw new Error(e)}},Nn=t=>t.charAt(0).toUpperCase()+t.slice(1),yt=async(t,s)=>{try{const l=((await _t()).schemas||[]).filter(f=>!f.is_deleted&&f.type&&(!s||s(f))).map(f=>f.type==="thing"?{label:"No Parent",value:f.type}:{label:Nn(f.type),value:f.type});t(l)}catch(i){console.warn(i)}},Ln=({graphLoading:t,onSchemaCreate:s,selectedSchema:i,onDelete:e,setSelectedSchemaId:a,setGraphLoading:l,setIsCreateNew:f,onSchemaUpdate:c})=>{const{close:d,visible:y}=Lt("addType"),r=Ge({mode:"onChange",defaultValues:i?{type:i.type,parent:i.parent}:Mn}),{watch:h,setValue:p,reset:v,getValues:S}=r,[b,P]=x.useState(!1),[C,T]=x.useState(!1),[N,m]=x.useState(null),[g,O]=x.useState(!1),[z,I]=x.useState(null),[D,w]=x.useState(""),[L,re]=x.useState(null);x.useEffect(()=>()=>{v()},[y,v]);const ne=()=>{f(!1),a("")};x.useEffect(()=>{i||(T(!0),yt(m).finally(()=>T(!1)))},[i]),x.useEffect(()=>{i&&(p("type",i==null?void 0:i.type),p("parent",i.parent),yt(I,M=>M.type!==i.type&&M.type!==i.parent))},[i,p]);const G=h("parent"),Z=()=>{d()},de=async()=>{if(i!=null&&i.type)try{await Ce.delete(`/schema/${i.ref_id}`),e(i.type),d()}catch(M){let Y=fe;if((M==null?void 0:M.status)===400){const U=await M.json();Y=U.errorCode||(U==null?void 0:U.status)||fe}else M instanceof Error&&(Y=M.message);re(Y)}finally{f(!1)}},J=r.handleSubmit(async M=>{if(!G){O(!0);return}P(!0);try{if(M.type!==(i==null?void 0:i.type)||S().parent!==(i==null?void 0:i.parent)){const U=S().parent??(i==null?void 0:i.parent);l(!0),await Ce.put(`/schema/${i==null?void 0:i.ref_id}`,JSON.stringify({type:M.type,parent:U})),await c()}const Y=await An({...M,...i?{ref_id:i==null?void 0:i.ref_id}:{}},!!i);s({type:M.type,parent:G||"",ref_id:(i==null?void 0:i.ref_id)||Y||"new"}),Z()}catch(Y){let U=fe;if((Y==null?void 0:Y.status)===400){const ae=await Y.json();U=ae.errorCode||(ae==null?void 0:ae.status)||fe}else Y instanceof Error&&(U=Y.message);w(U)}finally{P(!1),l(!1),f(!1)}}),H=()=>N==null?void 0:N.find(M=>M.value===G),V=()=>z==null?void 0:z.find(M=>M.value===G);return o.jsxs(k,{children:[o.jsx(k,{direction:"row",justify:"flex-end",children:o.jsx($n,{"data-testid":"close-sidebar-sub-view",onClick:ne,children:o.jsx(He,{})})}),o.jsx(k,{children:o.jsx($t,{...r,children:o.jsxs("form",{id:"add-type-form",onSubmit:J,children:[o.jsx(k,{children:i?o.jsxs(o.Fragment,{children:[o.jsxs(k,{mb:12,children:[o.jsx(k,{mb:12,children:o.jsx(Q,{children:"Name"})}),o.jsx(k,{mb:12,children:o.jsx(Se,{defaultValue:i==null?void 0:i.type,id:"cy-item-name",maxLength:250,name:"type",placeholder:"Enter type name",rules:{...Pe},value:G})})]}),o.jsxs(k,{mb:12,children:[o.jsx(k,{mb:12,children:o.jsx(Q,{children:"Parent"})}),o.jsx(Te,{isLoading:C||t,onSelect:M=>{p("parent",(M==null?void 0:M.value)||""),O(!1)},options:z||[],selectedValue:V()}),D&&o.jsx(De,{children:D})]})]}):o.jsxs(o.Fragment,{children:[o.jsxs(k,{mb:12,children:[o.jsx(k,{mb:12,children:o.jsx(Q,{children:"Select Parent"})}),o.jsx(Te,{isLoading:C,onSelect:M=>{p("parent",(M==null?void 0:M.value)||""),O(!1)},options:N,selectedValue:H()}),g&&o.jsx(De,{children:"A parent type must be selected"})]}),o.jsxs(k,{children:[o.jsx(k,{mb:12,children:o.jsx(Q,{children:"Type name"})}),o.jsx(k,{mb:12,children:o.jsx(Se,{id:"cy-item-name",maxLength:250,name:"type",placeholder:"Enter type name",rules:{...Pe},value:G})})]})]})}),o.jsx(On,{parent:i?i.type:G}),o.jsxs(k,{direction:"row",justify:"space-between",mt:20,children:[i?o.jsxs(k,{direction:"column",children:[o.jsx(_n,{color:"secondary",onClick:de,size:"large",style:{marginRight:20},variant:"contained",children:"Delete"}),L&&o.jsx(De,{children:L})]}):null,o.jsx(Me,{color:"secondary",disabled:b||g,onClick:J,size:"large",startIcon:b?o.jsx(be,{color:R.white,size:10}):null,variant:"contained",children:"Save"})]})]})})})]})},_n=$(Me)`
  && {
    color: ${R.primaryRed};
    background-color: rgba(237, 116, 116, 0.1);

    &:hover,
    &:active,
    &:focus {
      color: ${R.primaryRed};
      background-color: rgba(237, 116, 116, 0.2);
    }
  }
`,$n=$(k)`
  font-size: 32px;
  color: ${R.white};
  cursor: pointer;
`,De=$(k)`
  font-size: 13px;
  font-family: Barlow;
  color: #ff8f80;
  line-height: 0.2px;
  margin-top: 12px;
  padding-top: 20px;
`;var In=Object.defineProperty,Dn=(t,s,i)=>s in t?In(t,s,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[s]=i,j=(t,s,i)=>(Dn(t,typeof s!="symbol"?s+"":s,i),i);const ke=new co,wt=new lo,zn=Math.cos(70*(Math.PI/180)),jt=(t,s)=>(t%s+s)%s;let Rn=class extends uo{constructor(s,i){super(),j(this,"object"),j(this,"domElement"),j(this,"enabled",!0),j(this,"target",new _),j(this,"minDistance",0),j(this,"maxDistance",1/0),j(this,"minZoom",0),j(this,"maxZoom",1/0),j(this,"minPolarAngle",0),j(this,"maxPolarAngle",Math.PI),j(this,"minAzimuthAngle",-1/0),j(this,"maxAzimuthAngle",1/0),j(this,"enableDamping",!1),j(this,"dampingFactor",.05),j(this,"enableZoom",!0),j(this,"zoomSpeed",1),j(this,"enableRotate",!0),j(this,"rotateSpeed",1),j(this,"enablePan",!0),j(this,"panSpeed",1),j(this,"screenSpacePanning",!0),j(this,"keyPanSpeed",7),j(this,"zoomToCursor",!1),j(this,"autoRotate",!1),j(this,"autoRotateSpeed",2),j(this,"reverseOrbit",!1),j(this,"reverseHorizontalOrbit",!1),j(this,"reverseVerticalOrbit",!1),j(this,"keys",{LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"}),j(this,"mouseButtons",{LEFT:ue.ROTATE,MIDDLE:ue.DOLLY,RIGHT:ue.PAN}),j(this,"touches",{ONE:pe.ROTATE,TWO:pe.DOLLY_PAN}),j(this,"target0"),j(this,"position0"),j(this,"zoom0"),j(this,"_domElementKeyEvents",null),j(this,"getPolarAngle"),j(this,"getAzimuthalAngle"),j(this,"setPolarAngle"),j(this,"setAzimuthalAngle"),j(this,"getDistance"),j(this,"listenToKeyEvents"),j(this,"stopListenToKeyEvents"),j(this,"saveState"),j(this,"reset"),j(this,"update"),j(this,"connect"),j(this,"dispose"),this.object=s,this.domElement=i,this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this.getPolarAngle=()=>r.phi,this.getAzimuthalAngle=()=>r.theta,this.setPolarAngle=n=>{let u=jt(n,2*Math.PI),E=r.phi;E<0&&(E+=2*Math.PI),u<0&&(u+=2*Math.PI);let A=Math.abs(u-E);2*Math.PI-A<A&&(u<E?u+=2*Math.PI:E+=2*Math.PI),h.phi=u-E,e.update()},this.setAzimuthalAngle=n=>{let u=jt(n,2*Math.PI),E=r.theta;E<0&&(E+=2*Math.PI),u<0&&(u+=2*Math.PI);let A=Math.abs(u-E);2*Math.PI-A<A&&(u<E?u+=2*Math.PI:E+=2*Math.PI),h.theta=u-E,e.update()},this.getDistance=()=>e.object.position.distanceTo(e.target),this.listenToKeyEvents=n=>{n.addEventListener("keydown",_e),this._domElementKeyEvents=n},this.stopListenToKeyEvents=()=>{this._domElementKeyEvents.removeEventListener("keydown",_e),this._domElementKeyEvents=null},this.saveState=()=>{e.target0.copy(e.target),e.position0.copy(e.object.position),e.zoom0=e.object.zoom},this.reset=()=>{e.target.copy(e.target0),e.object.position.copy(e.position0),e.object.zoom=e.zoom0,e.object.updateProjectionMatrix(),e.dispatchEvent(a),e.update(),d=c.NONE},this.update=(()=>{const n=new _,u=new _(0,1,0),E=new lt().setFromUnitVectors(s.up,u),A=E.clone().invert(),B=new _,ee=new lt,se=2*Math.PI;return function(){const at=e.object.position;E.setFromUnitVectors(s.up,u),A.copy(E).invert(),n.copy(at).sub(e.target),n.applyQuaternion(E),r.setFromVector3(n),e.autoRotate&&d===c.NONE&&G(re()),e.enableDamping?(r.theta+=h.theta*e.dampingFactor,r.phi+=h.phi*e.dampingFactor):(r.theta+=h.theta,r.phi+=h.phi);let te=e.minAzimuthAngle,oe=e.maxAzimuthAngle;isFinite(te)&&isFinite(oe)&&(te<-Math.PI?te+=se:te>Math.PI&&(te-=se),oe<-Math.PI?oe+=se:oe>Math.PI&&(oe-=se),te<=oe?r.theta=Math.max(te,Math.min(oe,r.theta)):r.theta=r.theta>(te+oe)/2?Math.max(te,r.theta):Math.min(oe,r.theta)),r.phi=Math.max(e.minPolarAngle,Math.min(e.maxPolarAngle,r.phi)),r.makeSafe(),e.enableDamping===!0?e.target.addScaledVector(v,e.dampingFactor):e.target.add(v),e.zoomToCursor&&D||e.object.isOrthographicCamera?r.radius=U(r.radius):r.radius=U(r.radius*p),n.setFromSpherical(r),n.applyQuaternion(A),at.copy(e.target).add(n),e.object.matrixAutoUpdate||e.object.updateMatrix(),e.object.lookAt(e.target),e.enableDamping===!0?(h.theta*=1-e.dampingFactor,h.phi*=1-e.dampingFactor,v.multiplyScalar(1-e.dampingFactor)):(h.set(0,0,0),v.set(0,0,0));let we=!1;if(e.zoomToCursor&&D){let me=null;if(e.object instanceof ve&&e.object.isPerspectiveCamera){const ge=n.length();me=U(ge*p);const je=ge-me;e.object.position.addScaledVector(z,je),e.object.updateMatrixWorld()}else if(e.object.isOrthographicCamera){const ge=new _(I.x,I.y,0);ge.unproject(e.object),e.object.zoom=Math.max(e.minZoom,Math.min(e.maxZoom,e.object.zoom/p)),e.object.updateProjectionMatrix(),we=!0;const je=new _(I.x,I.y,0);je.unproject(e.object),e.object.position.sub(je).add(ge),e.object.updateMatrixWorld(),me=n.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),e.zoomToCursor=!1;me!==null&&(e.screenSpacePanning?e.target.set(0,0,-1).transformDirection(e.object.matrix).multiplyScalar(me).add(e.object.position):(ke.origin.copy(e.object.position),ke.direction.set(0,0,-1).transformDirection(e.object.matrix),Math.abs(e.object.up.dot(ke.direction))<zn?s.lookAt(e.target):(wt.setFromNormalAndCoplanarPoint(e.object.up,e.target),ke.intersectPlane(wt,e.target))))}else e.object instanceof Ee&&e.object.isOrthographicCamera&&(e.object.zoom=Math.max(e.minZoom,Math.min(e.maxZoom,e.object.zoom/p)),e.object.updateProjectionMatrix(),we=!0);return p=1,D=!1,we||B.distanceToSquared(e.object.position)>y||8*(1-ee.dot(e.object.quaternion))>y?(e.dispatchEvent(a),B.copy(e.object.position),ee.copy(e.object.quaternion),we=!1,!0):!1}})(),this.connect=n=>{n===document&&console.error('THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.'),e.domElement=n,e.domElement.style.touchAction="none",e.domElement.addEventListener("contextmenu",st),e.domElement.addEventListener("pointerdown",tt),e.domElement.addEventListener("pointercancel",ot),e.domElement.addEventListener("wheel",nt)},this.dispose=()=>{var n,u,E,A,B,ee;(n=e.domElement)==null||n.removeEventListener("contextmenu",st),(u=e.domElement)==null||u.removeEventListener("pointerdown",tt),(E=e.domElement)==null||E.removeEventListener("pointercancel",ot),(A=e.domElement)==null||A.removeEventListener("wheel",nt),(B=e.domElement)==null||B.ownerDocument.removeEventListener("pointermove",Ne),(ee=e.domElement)==null||ee.ownerDocument.removeEventListener("pointerup",Le),e._domElementKeyEvents!==null&&e._domElementKeyEvents.removeEventListener("keydown",_e)};const e=this,a={type:"change"},l={type:"start"},f={type:"end"},c={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let d=c.NONE;const y=1e-6,r=new dt,h=new dt;let p=1;const v=new _,S=new X,b=new X,P=new X,C=new X,T=new X,N=new X,m=new X,g=new X,O=new X,z=new _,I=new X;let D=!1;const w=[],L={};function re(){return 2*Math.PI/60/60*e.autoRotateSpeed}function ne(){return Math.pow(.95,e.zoomSpeed)}function G(n){e.reverseOrbit||e.reverseHorizontalOrbit?h.theta+=n:h.theta-=n}function Z(n){e.reverseOrbit||e.reverseVerticalOrbit?h.phi+=n:h.phi-=n}const de=(()=>{const n=new _;return function(E,A){n.setFromMatrixColumn(A,0),n.multiplyScalar(-E),v.add(n)}})(),J=(()=>{const n=new _;return function(E,A){e.screenSpacePanning===!0?n.setFromMatrixColumn(A,1):(n.setFromMatrixColumn(A,0),n.crossVectors(e.object.up,n)),n.multiplyScalar(E),v.add(n)}})(),H=(()=>{const n=new _;return function(E,A){const B=e.domElement;if(B&&e.object instanceof ve&&e.object.isPerspectiveCamera){const ee=e.object.position;n.copy(ee).sub(e.target);let se=n.length();se*=Math.tan(e.object.fov/2*Math.PI/180),de(2*E*se/B.clientHeight,e.object.matrix),J(2*A*se/B.clientHeight,e.object.matrix)}else B&&e.object instanceof Ee&&e.object.isOrthographicCamera?(de(E*(e.object.right-e.object.left)/e.object.zoom/B.clientWidth,e.object.matrix),J(A*(e.object.top-e.object.bottom)/e.object.zoom/B.clientHeight,e.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),e.enablePan=!1)}})();function V(n){e.object instanceof ve&&e.object.isPerspectiveCamera||e.object instanceof Ee&&e.object.isOrthographicCamera?p/=n:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),e.enableZoom=!1)}function M(n){e.object instanceof ve&&e.object.isPerspectiveCamera||e.object instanceof Ee&&e.object.isOrthographicCamera?p*=n:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),e.enableZoom=!1)}function Y(n){if(!e.zoomToCursor||!e.domElement)return;D=!0;const u=e.domElement.getBoundingClientRect(),E=n.clientX-u.left,A=n.clientY-u.top,B=u.width,ee=u.height;I.x=E/B*2-1,I.y=-(A/ee)*2+1,z.set(I.x,I.y,1).unproject(e.object).sub(e.object.position).normalize()}function U(n){return Math.max(e.minDistance,Math.min(e.maxDistance,n))}function ae(n){S.set(n.clientX,n.clientY)}function Ft(n){Y(n),m.set(n.clientX,n.clientY)}function Xe(n){C.set(n.clientX,n.clientY)}function Vt(n){b.set(n.clientX,n.clientY),P.subVectors(b,S).multiplyScalar(e.rotateSpeed);const u=e.domElement;u&&(G(2*Math.PI*P.x/u.clientHeight),Z(2*Math.PI*P.y/u.clientHeight)),S.copy(b),e.update()}function Yt(n){g.set(n.clientX,n.clientY),O.subVectors(g,m),O.y>0?V(ne()):O.y<0&&M(ne()),m.copy(g),e.update()}function Wt(n){T.set(n.clientX,n.clientY),N.subVectors(T,C).multiplyScalar(e.panSpeed),H(N.x,N.y),C.copy(T),e.update()}function Ut(n){Y(n),n.deltaY<0?M(ne()):n.deltaY>0&&V(ne()),e.update()}function Gt(n){let u=!1;switch(n.code){case e.keys.UP:H(0,e.keyPanSpeed),u=!0;break;case e.keys.BOTTOM:H(0,-e.keyPanSpeed),u=!0;break;case e.keys.LEFT:H(e.keyPanSpeed,0),u=!0;break;case e.keys.RIGHT:H(-e.keyPanSpeed,0),u=!0;break}u&&(n.preventDefault(),e.update())}function Ze(){if(w.length==1)S.set(w[0].pageX,w[0].pageY);else{const n=.5*(w[0].pageX+w[1].pageX),u=.5*(w[0].pageY+w[1].pageY);S.set(n,u)}}function Ke(){if(w.length==1)C.set(w[0].pageX,w[0].pageY);else{const n=.5*(w[0].pageX+w[1].pageX),u=.5*(w[0].pageY+w[1].pageY);C.set(n,u)}}function qe(){const n=w[0].pageX-w[1].pageX,u=w[0].pageY-w[1].pageY,E=Math.sqrt(n*n+u*u);m.set(0,E)}function Ht(){e.enableZoom&&qe(),e.enablePan&&Ke()}function Xt(){e.enableZoom&&qe(),e.enableRotate&&Ze()}function Qe(n){if(w.length==1)b.set(n.pageX,n.pageY);else{const E=$e(n),A=.5*(n.pageX+E.x),B=.5*(n.pageY+E.y);b.set(A,B)}P.subVectors(b,S).multiplyScalar(e.rotateSpeed);const u=e.domElement;u&&(G(2*Math.PI*P.x/u.clientHeight),Z(2*Math.PI*P.y/u.clientHeight)),S.copy(b)}function Je(n){if(w.length==1)T.set(n.pageX,n.pageY);else{const u=$e(n),E=.5*(n.pageX+u.x),A=.5*(n.pageY+u.y);T.set(E,A)}N.subVectors(T,C).multiplyScalar(e.panSpeed),H(N.x,N.y),C.copy(T)}function et(n){const u=$e(n),E=n.pageX-u.x,A=n.pageY-u.y,B=Math.sqrt(E*E+A*A);g.set(0,B),O.set(0,Math.pow(g.y/m.y,e.zoomSpeed)),V(O.y),m.copy(g)}function Zt(n){e.enableZoom&&et(n),e.enablePan&&Je(n)}function Kt(n){e.enableZoom&&et(n),e.enableRotate&&Qe(n)}function tt(n){var u,E;e.enabled!==!1&&(w.length===0&&((u=e.domElement)==null||u.ownerDocument.addEventListener("pointermove",Ne),(E=e.domElement)==null||E.ownerDocument.addEventListener("pointerup",Le)),to(n),n.pointerType==="touch"?Jt(n):qt(n))}function Ne(n){e.enabled!==!1&&(n.pointerType==="touch"?eo(n):Qt(n))}function Le(n){var u,E,A;it(n),w.length===0&&((u=e.domElement)==null||u.releasePointerCapture(n.pointerId),(E=e.domElement)==null||E.ownerDocument.removeEventListener("pointermove",Ne),(A=e.domElement)==null||A.ownerDocument.removeEventListener("pointerup",Le)),e.dispatchEvent(f),d=c.NONE}function ot(n){it(n)}function qt(n){let u;switch(n.button){case 0:u=e.mouseButtons.LEFT;break;case 1:u=e.mouseButtons.MIDDLE;break;case 2:u=e.mouseButtons.RIGHT;break;default:u=-1}switch(u){case ue.DOLLY:if(e.enableZoom===!1)return;Ft(n),d=c.DOLLY;break;case ue.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(e.enablePan===!1)return;Xe(n),d=c.PAN}else{if(e.enableRotate===!1)return;ae(n),d=c.ROTATE}break;case ue.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(e.enableRotate===!1)return;ae(n),d=c.ROTATE}else{if(e.enablePan===!1)return;Xe(n),d=c.PAN}break;default:d=c.NONE}d!==c.NONE&&e.dispatchEvent(l)}function Qt(n){if(e.enabled!==!1)switch(d){case c.ROTATE:if(e.enableRotate===!1)return;Vt(n);break;case c.DOLLY:if(e.enableZoom===!1)return;Yt(n);break;case c.PAN:if(e.enablePan===!1)return;Wt(n);break}}function nt(n){e.enabled===!1||e.enableZoom===!1||d!==c.NONE&&d!==c.ROTATE||(n.preventDefault(),e.dispatchEvent(l),Ut(n),e.dispatchEvent(f))}function _e(n){e.enabled===!1||e.enablePan===!1||Gt(n)}function Jt(n){switch(rt(n),w.length){case 1:switch(e.touches.ONE){case pe.ROTATE:if(e.enableRotate===!1)return;Ze(),d=c.TOUCH_ROTATE;break;case pe.PAN:if(e.enablePan===!1)return;Ke(),d=c.TOUCH_PAN;break;default:d=c.NONE}break;case 2:switch(e.touches.TWO){case pe.DOLLY_PAN:if(e.enableZoom===!1&&e.enablePan===!1)return;Ht(),d=c.TOUCH_DOLLY_PAN;break;case pe.DOLLY_ROTATE:if(e.enableZoom===!1&&e.enableRotate===!1)return;Xt(),d=c.TOUCH_DOLLY_ROTATE;break;default:d=c.NONE}break;default:d=c.NONE}d!==c.NONE&&e.dispatchEvent(l)}function eo(n){switch(rt(n),d){case c.TOUCH_ROTATE:if(e.enableRotate===!1)return;Qe(n),e.update();break;case c.TOUCH_PAN:if(e.enablePan===!1)return;Je(n),e.update();break;case c.TOUCH_DOLLY_PAN:if(e.enableZoom===!1&&e.enablePan===!1)return;Zt(n),e.update();break;case c.TOUCH_DOLLY_ROTATE:if(e.enableZoom===!1&&e.enableRotate===!1)return;Kt(n),e.update();break;default:d=c.NONE}}function st(n){e.enabled!==!1&&n.preventDefault()}function to(n){w.push(n)}function it(n){delete L[n.pointerId];for(let u=0;u<w.length;u++)if(w[u].pointerId==n.pointerId){w.splice(u,1);return}}function rt(n){let u=L[n.pointerId];u===void 0&&(u=new X,L[n.pointerId]=u),u.set(n.pageX,n.pageY)}function $e(n){const u=n.pointerId===w[0].pointerId?w[1]:w[0];return L[u.pointerId]}i!==void 0&&this.connect(i),this.update()}};const Bn=new _,vt=x.forwardRef(function({start:s=[0,0,0],end:i=[0,0,0],mid:e,segments:a=20,...l},f){const c=x.useRef(null),[d]=x.useState(()=>new po(void 0,void 0,void 0)),y=x.useCallback((h,p,v,S=20)=>(h instanceof _?d.v0.copy(h):d.v0.set(...h),p instanceof _?d.v2.copy(p):d.v2.set(...p),v instanceof _?d.v1.copy(v):d.v1.copy(d.v0.clone().add(d.v2.clone().sub(d.v0)).add(Bn.set(0,d.v0.y-d.v2.y,0))),d.getPoints(S)),[]);x.useLayoutEffect(()=>{c.current.setPoints=(h,p,v)=>{const S=y(h,p,v);c.current.geometry&&c.current.geometry.setPositions(S.map(b=>b.toArray()).flat())}},[]);const r=x.useMemo(()=>y(s,i,e,a),[s,i,e,a]);return x.createElement(Do,F({ref:zo([c,f]),points:r},l))}),Fn=x.forwardRef(({makeDefault:t,camera:s,regress:i,domElement:e,enableDamping:a=!0,onChange:l,onStart:f,onEnd:c,...d},y)=>{const r=K(g=>g.invalidate),h=K(g=>g.camera),p=K(g=>g.gl),v=K(g=>g.events),S=K(g=>g.setEvents),b=K(g=>g.set),P=K(g=>g.get),C=K(g=>g.performance),T=s||h,N=e||v.connected||p.domElement,m=x.useMemo(()=>new Rn(T),[T]);return Ae(()=>{m.enabled&&m.update()},-1),x.useEffect(()=>(m.connect(N),()=>void m.dispose()),[N,i,m,r]),x.useEffect(()=>{const g=I=>{r(),i&&C.regress(),l&&l(I)},O=I=>{f&&f(I)},z=I=>{c&&c(I)};return m.addEventListener("change",g),m.addEventListener("start",O),m.addEventListener("end",z),()=>{m.removeEventListener("start",O),m.removeEventListener("end",z),m.removeEventListener("change",g)}},[l,f,c,m,r,S]),x.useEffect(()=>{if(t){const g=P().controls;return b({controls:m}),()=>b({controls:g})}},[t,m]),x.createElement("primitive",F({ref:y,object:m,enableDamping:a},d))});function Vn(t){const s=t+"Geometry";return x.forwardRef(({args:i,children:e,...a},l)=>x.createElement("mesh",F({ref:l},a),x.createElement(s,{attach:"geometry",args:i}),e))}const Yn=Vn("circle"),Et=t=>{const s=x.useRef();return x.useEffect(()=>{s.current=t}),s.current},q=10,Wn=2,Un=2,kt=10,Pt=(t,s,i)=>{const l=new _().subVectors(s,t).normalize().multiplyScalar(i);return new _().addVectors(t,l)},Rt=({links:t,nodes:s})=>{const i=x.useRef(null),{camera:e}=K(),a=new _,l=new _,f=new _,c=new _,d=new _,y=new _,r=new _,h=new _;return Ae(()=>{i.current&&s&&i.current.children.forEach((p,v)=>{var g,O,z,I;const S=t[v];if(!S)return;const b=s.find(D=>D.ref_id===S.source),P=s.find(D=>D.ref_id===S.target);a.set((P==null?void 0:P.x)||0,(P==null?void 0:P.y)||0,(P==null?void 0:P.z)||0),l.set((b==null?void 0:b.x)||0,(b==null?void 0:b.y)||0,(b==null?void 0:b.z)||0);const C=p.children[0],T=p.children[1],N=p.children[2],m=p.children[3];if((P==null?void 0:P.ref_id)===(b==null?void 0:b.ref_id)){const[D,w,L]=_o(a);(g=C.setPoints)==null||g.call(C,a,L,D),(O=T.setPoints)==null||O.call(T,L,l,D),N.position.set(L.x,L.y,w.z),N.lookAt(D),N.rotateX(-Math.PI/2),m.position.set(L.x,L.y,w.z),m.lookAt(e.position)}else{h.copy(Pt(a,l,q)),r.copy(Pt(l,a,q+.5)),f.lerpVectors(h,r,.5);const D=30;c.subVectors(r,h).normalize().multiplyScalar(D/2),d.subVectors(f,c),y.addVectors(f,c),(z=C.setPoints)==null||z.call(C,h,d,f),(I=T.setPoints)==null||I.call(T,y,r,f),N.position.set(r.x,r.y,r.z),N.lookAt(h),N.rotateX(-Math.PI/2),m.position.set(f.x,f.y,f.z),m.lookAt(e.position);let w=Math.atan2(r.y-h.y,r.x-h.x);(w>Math.PI/2||w<-Math.PI/2)&&(w+=Math.PI),m.rotation.set(0,0,w);const L=h.distanceTo(r),re=L<D?2:4;L<D?m.text=Re(S.edge_type,kt):m.text=S.edge_type,m.fontSize=re}})}),o.jsx("group",{ref:i,children:t.map(p=>o.jsxs("group",{children:[o.jsx(vt,{color:"white",end:[0,0,0],lineWidth:2,start:[0,0,0]}),o.jsx(vt,{color:"white",end:[0,0,0],lineWidth:2,start:[0,0,0]}),o.jsxs("mesh",{position:new _(0,0,0),children:[o.jsx("coneGeometry",{args:[Wn,Un,32]}),o.jsx("meshBasicMaterial",{color:"white"})]}),o.jsx(It,{anchorX:"center",anchorY:"middle",color:"white",fontSize:4,lineHeight:1,maxWidth:20,rotation:[0,0,0],textAlign:"center",children:Re(p.edge_type,kt)})]},p.ref_id))})};Rt.displayName="Lines";const Gn=["#ff13c9","#5af0ff","#3233ff","#c2f0c2","#ff6666","#99ccff","#ffb3b3"],Hn=$.div`
  color: white;
  background: rgba(0, 0, 0, 1);
  padding: 2px 5px;
  border-radius: 4px;
  word-wrap: break-word;
  text-align: center;
  white-space: nowrap;
  visibility: visible;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
`,Xn=$(Ro)`
  position: absolute;
`;new fo(2,2,2);const Bt=x.memo(({node:t,setSelectedNode:s,onSimulationUpdate:i,isSelected:e})=>{var b;const a=x.useRef(null),[l,f]=x.useState(!1);console.log(e);const{size:c,camera:d}=K(),y=Eo(P=>{const{xy:[C,T],down:N,dragging:m,first:g,elapsedTime:O}=P;if(!(!m||g||O<100)&&N&&a.current){i();const z=(C-c.left)/window.innerWidth*c.width,I=(T-c.top)/window.innerHeight*c.height,L=new _(z/c.width*2-1,-I/c.height*2+1,0).unproject(d).multiply(new _(1,1,0)).clone();t.fx=L.x,t.fy=L.y}});Ae(()=>{a.current&&a.current.position.set(t.x||0,t.y||0,0)});const r=Gn[(b=t==null?void 0:t.children)==null?void 0:b.length]||"red",h=P=>{P.stopPropagation(),s()},p=Re(t.type||"",q),v=()=>{f(!0)},S=()=>{f(!1)};return o.jsxs("mesh",{ref:a,onClick:h,...y(),onPointerOut:S,onPointerOver:v,position:new _(t.x,t.y,0),children:[o.jsx(Yn,{args:[q,30,20],children:o.jsx("meshStandardMaterial",{attach:"material",color:r})}),o.jsx(It,{...Fo,clipRect:[-q,-q,q,q],color:"#000",fontSize:2,maxWidth:q*2,textAlign:"center",children:p}),l&&o.jsx(Xn,{position:[0,5,0],zIndexRange:[100,0],children:o.jsx(Hn,{children:t.type})})]})});Bt.displayName="Node";const Zn=({simulation:t,setSelectedSchemaId:s,selectedId:i,setIsAddEdgeNode:e})=>{const[a]=zt(f=>[f.schemas]),l=()=>{t&&(t.alpha(.05),t.restart())};return o.jsx(o.Fragment,{children:a.map((f,c)=>{const d=t.nodes()[c];return d?o.jsx(Bt,{isSelected:d.ref_id===i,node:d,onSimulationUpdate:l,setSelectedNode:()=>{e(!1),s(d.ref_id)}},d.ref_id):null})})},Kn=({schemasWithPositions:t,filteredLinks:s,setSelectedSchemaId:i,selectedSchemaId:e,setIsAddEdgeNode:a})=>{const[l,f]=x.useState(null),c=Et(t),d=Et(s);return x.useEffect(()=>{if(!t.length||!s.length)return;const y=structuredClone(t),r=structuredClone(s);if(l){c&&c.length!==t.length&&d&&d.length!==s.length&&(l.nodes(y).force("link",ut(r).id(p=>p.ref_id)).force("charge",pt()).force("center",ft()).force("collide",ht(q+1)).alpha(.5).restart(),f({...l}));return}const h=ho(y).force("link",ut(r).id(p=>p.ref_id)).force("charge",pt()).force("center",ft()).force("collide",ht(0));f(h)},[t,l,s,c,d]),Ae(()=>{}),l?o.jsxs(o.Fragment,{children:[o.jsx(Rt,{links:s,nodes:l.nodes()}),o.jsx(Zn,{selectedId:e,setIsAddEdgeNode:a,setSelectedSchemaId:i,simulation:l})]}):null},ze=new mo(0),qn=({selectedSchemaId:t,links:s,schemasWithPositions:i,setSelectedSchemaId:e,setIsAddEdgeNode:a})=>o.jsxs(Bo,{camera:{zoom:1,position:[0,0,200]},id:"schema-canvas",linear:!0,orthographic:!0,children:[o.jsx("color",{args:[ze.r,ze.g,ze.b],attach:"background"}),go&&o.jsx(Vo,{position:"right-bottom"}),o.jsx(Fn,{enableRotate:!1,enableZoom:!0}),o.jsx(Yo,{}),o.jsx(Kn,{filteredLinks:s,schemasWithPositions:i,selectedSchemaId:t,setIsAddEdgeNode:a,setSelectedSchemaId:e})]}),Qn=({onCreateNew:t,onAddEdgeNode:s})=>o.jsxs(Jn,{children:[o.jsx(es,{children:"BLUEPRINT"}),o.jsxs(Ct,{"data-testid":"add-schema-type",onClick:t,children:[o.jsx(Tt,{children:o.jsx(xt,{})}),o.jsx(Q,{children:"Add Type"})]}),o.jsxs(Ct,{"data-testid":"add-edge",onClick:s,children:[o.jsx(Tt,{children:o.jsx(xt,{})}),o.jsx(Q,{children:"Add Edge"})]})]}),Jn=$(k).attrs({align:"flex-start",direction:"column",justify:"flex-start"})`
  flex: 1 1 auto;
  z-index: 31;
  transition: opacity 1s;
  background: ${R.BG2};
  max-height: 100vh;
  border-top-left-radius: 9px;
  border-bottom-left-radius: 9px;

  @media (max-width: 1440px) {
    max-height: 95.2vh;
  }

  @media (max-width: 1024px) {
    max-height: 74.8vh;
  }

  @media (max-width: 924px) {
    max-height: 73.1vh;
  }
`,Ct=$(k).attrs({align:"center",justify:"center",p:0})`
  position: relative;
  width: 64px;
  height: 58px;
  padding: 0;
  flex-direction: row;
  color: ${R.GRAY6};
  cursor: pointer;
  transition: ${({theme:t})=>t.transitions.create(["opacity","box-shadow","background-color"])};

  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 4px; /* Initial width */
    height: 32px; /* Initial height on hover */
    background-color: transparent;
    transition: height 0.3s, width 0.3s, background-color 0.3s;
  }

  ${Q} {
    display: none;
    opacity: 0;
    width: 0;
    padding: 4px 10px;
    border-radius: 4px;
    background: #000;
    box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.25);
    position: absolute;
    left: 90%;
    z-index: 99;
    white-space: nowrap;
    visibility: visible;
    font-size: 11px;
    font-style: normal;
    font-weight: 400;
    transition: ${({theme:t})=>t.transitions.create(["opacity","visually"])};
  }

  &:hover {
    color: ${R.white};

    &:before {
      width: 3px;
      height: 32px;
      background-color: ${R.primaryBlue};
    }

    ${Q} {
      display: block;
      width: min-content;
      opacity: 1;
      visibility: visible;
    }
  }

  &:active {
    color: ${R.white};
    background: ${R.black};
    &:before {
      width: 3px;
      height: 100%;
      background-color: ${R.primaryBlue};
    }
  }

  &.root {
    border-radius: 50%;
    padding: 0;
    align-items: center;
    justify-content: center;
    border: none;
  }
`,es=$(k)`
  background: blue;
  align-items: center;
  justify-content: center;
  background: ${R.primaryBlue};
  width: 64px;
  height: 64px;
  cursor: pointer;
  font-size: 10px;
  font-weight: 600;
  color: ${R.white};
`,Tt=$(k)`
  justify-content: center;
  align-items: center;
  font-size: 24px;
`,ts={type:"",parent:""},St=({onSelect:t,selectedValue:s,dataTestId:i})=>{const e=Ge({mode:"onChange",defaultValues:ts}),{watch:a,setValue:l}=e,[f,c]=x.useState([]),[d,y]=x.useState(!1),r=b=>{l("parent",(b==null?void 0:b.value)||""),t(b==null?void 0:b.value)},h=()=>{l("parent",""),t("")},p=b=>b.charAt(0).toUpperCase()+b.slice(1);x.useEffect(()=>{(async()=>{y(!0);try{const C=(await _t()).schemas.filter(T=>!T.is_deleted&&T.type).map(T=>(T==null?void 0:T.type)==="thing"?{label:"No Parent",value:T.type}:{label:p(T.type),value:T.type});c(C)}catch(P){console.warn(P)}finally{y(!1)}})()},[]);const v=a("parent"),S=()=>f==null?void 0:f.find(b=>b.value===v);return s?o.jsxs(k,{align:"center",basis:"100%",direction:"row",grow:1,shrink:1,children:[o.jsx("span",{children:s}),o.jsx(Wo,{onClick:h,size:"medium",children:o.jsx(He,{})})]}):o.jsx(Te,{dataTestId:i,isLoading:d,onSelect:r,options:f||Co,selectedValue:S()})},os=({selectedType:t,selectedToNode:s,setIsSwapped:i,isSwapped:e,selectedFromNode:a,setSelectedFromNode:l,setSelectedToNode:f})=>{const c=()=>{i()};return o.jsxs(k,{mb:20,children:[o.jsx(k,{align:"center",direction:"row",justify:"space-between",mb:35,children:o.jsx(k,{align:"center",direction:"row",children:o.jsx(ss,{children:"Add Edge"})})}),o.jsxs(is,{swap:e,children:[o.jsx(k,{children:o.jsxs(Ot,{children:[o.jsx(Mt,{children:e?"To":"From"}),o.jsx(St,{dataTestId:"from_node",onSelect:l,selectedValue:a})]})}),o.jsxs(k,{my:25,children:[o.jsx(rs,{children:"Type"}),o.jsx(Se,{id:"cy-item-name",maxLength:250,name:"type",placeholder:"Enter type name",rules:{...Pe},value:t})]}),o.jsx(k,{children:o.jsxs(Ot,{children:[o.jsx(Mt,{children:e?"From":"To"}),o.jsx(St,{dataTestId:"to_node",onSelect:f,selectedValue:s})]})}),o.jsxs(ns,{children:[o.jsx(as,{children:o.jsx(To,{})}),o.jsx(cs,{onClick:c,children:o.jsx(So,{})}),o.jsx(ls,{children:o.jsx(Oo,{})})]})]})]})},ns=$.div`
  position: absolute;
  top: 26px;
  bottom: 26px;
  left: 4px;
  width: 35px;
  border-left: 1.5px solid #6b7a8d4d;
  border-top: 1.5px solid #6b7a8d4d;
  border-bottom: 1.5px solid #6b7a8d4d;
  border-radius: 12px 0 0 12px;
`,ss=$(Q)`
  font-size: 22px;
  font-weight: 600;
`,is=$.div`
  position: relative;
  color: white;
  font-family: 'Barlow';
  display: flex;
  flex-direction: ${t=>t.swap?"column-reverse":"column"};
  margin-bottom: 10px;
  padding-left: 38px;
`,Ot=$.div`
  position: relative;
  width: 100%;
  padding: 15px;
  gap: 10px;
  border-radius: 6px;
  border: 1.4px solid #6b7a8d4d;
  opacity: 1;
  display: flex;
  align-items: center;
`,rs=$.label`
  color: #bac1c6;
  font-size: 13px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0.01em;
  text-align: left;
  margin-bottom: 6px;
`,Mt=$.label`
  color: #bac1c6;
  background-color: #23252f;
  font-size: 13px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0.01em;
  text-align: left;
  position: absolute;
  left: 15px;
  top: -10px;
`,as=$.div`
  position: absolute;
  top: 0;
  right: 0;
  transform: translateY(-50%) translateX(50%);
  color: #23252f;
`,cs=$.div`
  position: absolute;
  color: transparent;
  top: 50%;
  left: 0;
  transform: translateY(-50%) translateX(-50%);
  cursor: pointer;
  width: 32px;
  height: 32px;
  background-color: #303342;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
`,ls=$.div`
  position: absolute;
  bottom: 0;
  right: 0;
  transform: translateY(10px) translateX(3px);
  color: #6b7a8d;
  line-height: 1;
`,ds=({onCancel:t})=>{const s=Ge({mode:"onChange"}),[i,e]=x.useState(!1),[a,l]=x.useState(""),[f,c]=x.useState(!1),[d,y]=x.useState(""),[r,h]=x.useState(""),p=s.watch("type");x.useEffect(()=>{l(p)},[p]);const v=s.handleSubmit(async b=>{if(!r||!d)return;e(!0);const P={source:d,target:r,edge_type:b.type};try{await xo(P)}catch(C){console.warn("API Error:",C)}finally{e(!1),t()}}),S=i||!r||!d||!a;return o.jsx($t,{...s,children:o.jsxs("form",{id:"add-type-form",onSubmit:v,children:[o.jsx(os,{isSwapped:f,selectedFromNode:d,selectedToNode:r,selectedType:a,setIsSwapped:()=>c(!f),setSelectedFromNode:y,setSelectedToNode:h}),o.jsxs(us,{color:"secondary",disabled:S,onClick:v,size:"large",variant:"contained",children:["Confirm",i&&o.jsxs(ps,{children:[" ",o.jsx(be,{color:R.lightGray,size:12})," "]})]})]})})},us=$(Me)`
  width: 293px !important;
  margin: 0 0 10px 35px !important;
`,ps=$.span`
  margin-top: 2px;
`,fs=({setIsAddEdgeNode:t})=>{const s=()=>{t(!1)};return o.jsxs(k,{children:[o.jsx(k,{direction:"row",justify:"flex-end",children:o.jsx(hs,{"data-testid":"close-sidebar-sub-view",onClick:s,children:o.jsx(He,{})})}),o.jsx(ds,{onCancel:s})]})},hs=$(k)`
  font-size: 32px;
  color: ${R.white};
  cursor: pointer;
`,ms=()=>{const[t,s]=x.useState(""),[i,e]=x.useState(!1),[a,l]=x.useState(!1),[f,c]=x.useState(!1),[d,y]=x.useState(!1),[r,h,p,v]=zt(m=>[m.schemas,m.links,m.setSchemas,m.setSchemaLinks]);x.useEffect(()=>{(async()=>{l(!0);try{const g=await mt();p(g.schemas.filter(O=>O.ref_id&&!O.is_deleted&&O.ref_id)),v(g.edges),l(!1)}catch(g){console.error("Error fetching data:",g),l(!1)}})()},[p,v]);const S=m=>{if(r.some(O=>O.ref_id===m.ref_id))p(r.map(O=>O.ref_id===m.ref_id?{...m,children:[]}:O));else{p([...r,{...m,children:[]}]);const O=r.find(z=>m.parent===z.type);v([...h,{ref_id:`new-link-${h.length}`,edge_type:"CHILD_OF",source:m.ref_id||"new",target:(O==null?void 0:O.ref_id)||"new"}])}},b=async()=>{const m=await mt();p(m.schemas.filter(g=>g.ref_id&&!g.is_deleted&&g.ref_id)),v(m.edges)},P=m=>{p(r.filter(g=>g.type!==m))},C=r.map(m=>({...m,children:r.filter(g=>g.parent===m.type).map(g=>g.ref_id||"")})),T=h.filter(m=>m.edge_type==="CHILD_OF"&&C.some(g=>g.ref_id===m.source)&&C.some(g=>g.ref_id===m.target)),N=r.find(m=>m.ref_id===t)||null;return a?o.jsx(k,{align:"center",basis:"100%",grow:1,justify:"center",shrink:1,children:o.jsx(be,{color:R.white})}):o.jsx(o.Fragment,{children:o.jsxs(k,{align:"stretch",direction:"row",grow:1,children:[o.jsx(k,{ml:-20,my:-20,children:o.jsx(Qn,{onAddEdgeNode:()=>{c(!0),e(!1),s("")},onCreateNew:()=>{c(!1),e(!0),s("")}})}),o.jsx(k,{children:N||i?o.jsx(At,{children:o.jsx(xs,{children:o.jsx(Ln,{graphLoading:d,onDelete:P,onSchemaCreate:S,onSchemaUpdate:b,selectedSchema:N,setGraphLoading:y,setIsCreateNew:e,setSelectedSchemaId:s})})}):null}),o.jsx(k,{children:f?o.jsx(At,{children:o.jsx(fs,{setIsAddEdgeNode:c})}):null}),o.jsx(gs,{direction:"row",grow:1,children:o.jsx(bs,{children:d?o.jsx(k,{align:"center",basis:"100%",grow:1,justify:"center",shrink:1,children:o.jsx(be,{color:R.white})}):o.jsx(qn,{links:T,schemasWithPositions:C,selectedSchemaId:t,setIsAddEdgeNode:c,setSelectedSchemaId:s})})})]})})},gs=$(k)`
  flex: 1 1 auto;
  justify-content: center;
  position: relative;
  overflow: hidden;
  padding: 10px;
  max-height: 80vh;

  @media (max-width: 1440px) {
    max-height: 85vh;
  }

  @media (max-width: 1024px) {
    max-height: 70vh;
  }
`,At=$(k)`
  width: 100%;
  max-width: 400px;
  background: ${R.BG1};
  border-top-right-radius: 16px;
  border-bottom-right-radius: 16px;
  flex-grow: 1;
  flex-shrink: 1;
  min-width: 300px;
  overflow: hidden;
  max-height: calc(100vh - 20px);

  @media (max-width: 1440px) {
    max-height: calc(95vh - 20px);
  }

  @media (max-width: 1024px) {
    max-height: calc(70vh - 20px);
  }

  @media (max-width: 924px) {
    max-height: calc(70vh - 20px);
  }
`,xs=$.div`
  height: 100%;
  overflow-y: auto;
  padding: 16px;
`,bs=$(k)`
  flex: 1 1 100%;
`,ys=()=>{const{close:t}=Lt("blueprintGraph"),s=()=>{t()};return o.jsx(bo,{background:"black",id:"blueprintGraph",kind:"full",onClose:s,preventOutsideClose:!0,children:o.jsx(ms,{})})},Ws=x.memo(ys);export{Ws as BlueprintModal};
