import{g as ze,a as Re,s as ae,_ as F,a9 as oo,r as x,b as Be,j as o,d as Fe,c as re,e as Ve,u as At,aM as no,b4 as Se,b5 as Ye,a7 as at,b6 as so,b7 as io,a0 as ro,f as I,F as k,h as R,D as ke,a_ as ao,T as q,B as Lt,N as Pe,aY as ue,a$ as _t,b8 as co,b9 as lo,ba as uo,Z as L,bb as le,bc as de,ap as ct,bd as je,be as ve,bf as lt,bg as X,bh as po,ar as fo,bi as dt,bj as ut,bk as pt,bl as ft,bm as ho,am as mo,W as go,bn as xo,bo as ht}from"./index-6073401a.js";import{B as bo}from"./index-13a2d914.js";import{p as yo,q as wo,i as jo,C as xe,I as vo,B as Oe,c as Ue,b as We,F as $t,r as Eo}from"./react-toastify.esm-dc7c60da.js";import{e as ko,A as Ce}from"./index-1a7fea21.js";import{T as Te}from"./index-b8f3fc2b.js";import{c as mt,d as Po,a as Co,N as To,F as So,b as Oo}from"./index-4e69c85d.js";import{D as Mo,P as No}from"./PlusIcon-73aa1a56.js";import{p as Ao,c as Lo,g as _o,t as gt}from"./index-64b6b939.js";import{u as $o}from"./Popover-3b8e44ed.js";import{u as Io}from"./index-788e740e.js";import{L as Do,m as zo,u as K,b as Me,T as It,C as Ro}from"./constant-eb9d4ac3.js";import{f as Bo,P as Fo,L as Vo}from"./constants-b3abd36d.js";import{A as xt}from"./AddContentIcon-777df410.js";import{S as Yo}from"./index-2eb5f7ea.js";import"./useSlotProps-4ac496cf.js";import"./Popper-90bca81f.js";import"./index.esm-3262925e.js";import"./InfoIcon-9b7fc1c3.js";import"./generateCategoricalChart-065ca062.js";import"./NoFilterResultIcon-6651a77f.js";import"./index-44c0478b.js";import"./CheckIcon-e1b3edcb.js";function Uo(t){return ze("PrivateSwitchBase",t)}Re("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);const Wo=["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","disableFocusRipple","edge","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"],Go=t=>{const{classes:s,checked:i,disabled:e,edge:c}=t,a={root:["root",i&&"checked",e&&"disabled",c&&`edge${re(c)}`],input:["input"]};return Ve(a,Uo,s)},Ho=ae(yo)(({ownerState:t})=>F({padding:9,borderRadius:"50%"},t.edge==="start"&&{marginLeft:t.size==="small"?-3:-12},t.edge==="end"&&{marginRight:t.size==="small"?-3:-12})),Xo=ae("input",{shouldForwardProp:oo})({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),Zo=x.forwardRef(function(s,i){const{autoFocus:e,checked:c,checkedIcon:a,className:f,defaultChecked:d,disabled:l,disableFocusRipple:y=!1,edge:r=!1,icon:h,id:p,inputProps:v,inputRef:O,name:b,onBlur:C,onChange:P,onFocus:T,readOnly:A,required:m=!1,tabIndex:g,type:S,value:z}=s,_=Be(s,Wo),[D,w]=Io({controlled:c,default:!!d,name:"SwitchBase",state:"checked"}),$=$o(),fe=V=>{T&&T(V),$&&$.onFocus&&$.onFocus(V)},oe=V=>{C&&C(V),$&&$.onBlur&&$.onBlur(V)},G=V=>{if(V.nativeEvent.defaultPrevented)return;const M=V.target.checked;w(M),P&&P(V,M)};let Z=l;$&&typeof Z>"u"&&(Z=$.disabled);const ce=S==="checkbox"||S==="radio",Q=F({},s,{checked:D,disabled:Z,disableFocusRipple:y,edge:r}),H=Go(Q);return o.jsxs(Ho,F({component:"span",className:Fe(H.root,f),centerRipple:!0,focusRipple:!y,disabled:Z,tabIndex:null,role:void 0,onFocus:fe,onBlur:oe,ownerState:Q,ref:i},_,{children:[o.jsx(Xo,F({autoFocus:e,checked:c,defaultChecked:d,className:H.input,disabled:Z,id:ce?p:void 0,name:b,onChange:G,readOnly:A,ref:O,required:m,ownerState:Q,tabIndex:g,type:S},S==="checkbox"&&z===void 0?{}:{value:z},v)),D?a:h]}))}),Ko=Zo,qo=x.createContext(),bt=qo;function Qo(t){return ze("MuiGrid",t)}const Jo=[0,1,2,3,4,5,6,7,8,9,10],en=["column-reverse","column","row-reverse","row"],tn=["nowrap","wrap-reverse","wrap"],ge=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12],on=Re("MuiGrid",["root","container","item","zeroMinWidth",...Jo.map(t=>`spacing-xs-${t}`),...en.map(t=>`direction-xs-${t}`),...tn.map(t=>`wrap-xs-${t}`),...ge.map(t=>`grid-xs-${t}`),...ge.map(t=>`grid-sm-${t}`),...ge.map(t=>`grid-md-${t}`),...ge.map(t=>`grid-lg-${t}`),...ge.map(t=>`grid-xl-${t}`)]),be=on,nn=["className","columns","columnSpacing","component","container","direction","item","rowSpacing","spacing","wrap","zeroMinWidth"];function pe(t){const s=parseFloat(t);return`${s}${String(t).replace(String(s),"")||"px"}`}function sn({theme:t,ownerState:s}){let i;return t.breakpoints.keys.reduce((e,c)=>{let a={};if(s[c]&&(i=s[c]),!i)return e;if(i===!0)a={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if(i==="auto")a={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{const f=Se({values:s.columns,breakpoints:t.breakpoints.values}),d=typeof f=="object"?f[c]:f;if(d==null)return e;const l=`${Math.round(i/d*1e8)/1e6}%`;let y={};if(s.container&&s.item&&s.columnSpacing!==0){const r=t.spacing(s.columnSpacing);if(r!=="0px"){const h=`calc(${l} + ${pe(r)})`;y={flexBasis:h,maxWidth:h}}}a=F({flexBasis:l,flexGrow:0,maxWidth:l},y)}return t.breakpoints.values[c]===0?Object.assign(e,a):e[t.breakpoints.up(c)]=a,e},{})}function rn({theme:t,ownerState:s}){const i=Se({values:s.direction,breakpoints:t.breakpoints.values});return Ye({theme:t},i,e=>{const c={flexDirection:e};return e.indexOf("column")===0&&(c[`& > .${be.item}`]={maxWidth:"none"}),c})}function Dt({breakpoints:t,values:s}){let i="";Object.keys(s).forEach(c=>{i===""&&s[c]!==0&&(i=c)});const e=Object.keys(t).sort((c,a)=>t[c]-t[a]);return e.slice(0,e.indexOf(i))}function an({theme:t,ownerState:s}){const{container:i,rowSpacing:e}=s;let c={};if(i&&e!==0){const a=Se({values:e,breakpoints:t.breakpoints.values});let f;typeof a=="object"&&(f=Dt({breakpoints:t.breakpoints.values,values:a})),c=Ye({theme:t},a,(d,l)=>{var y;const r=t.spacing(d);return r!=="0px"?{marginTop:`-${pe(r)}`,[`& > .${be.item}`]:{paddingTop:pe(r)}}:(y=f)!=null&&y.includes(l)?{}:{marginTop:0,[`& > .${be.item}`]:{paddingTop:0}}})}return c}function cn({theme:t,ownerState:s}){const{container:i,columnSpacing:e}=s;let c={};if(i&&e!==0){const a=Se({values:e,breakpoints:t.breakpoints.values});let f;typeof a=="object"&&(f=Dt({breakpoints:t.breakpoints.values,values:a})),c=Ye({theme:t},a,(d,l)=>{var y;const r=t.spacing(d);return r!=="0px"?{width:`calc(100% + ${pe(r)})`,marginLeft:`-${pe(r)}`,[`& > .${be.item}`]:{paddingLeft:pe(r)}}:(y=f)!=null&&y.includes(l)?{}:{width:"100%",marginLeft:0,[`& > .${be.item}`]:{paddingLeft:0}}})}return c}function ln(t,s,i={}){if(!t||t<=0)return[];if(typeof t=="string"&&!Number.isNaN(Number(t))||typeof t=="number")return[i[`spacing-xs-${String(t)}`]];const e=[];return s.forEach(c=>{const a=t[c];Number(a)>0&&e.push(i[`spacing-${c}-${String(a)}`])}),e}const dn=ae("div",{name:"MuiGrid",slot:"Root",overridesResolver:(t,s)=>{const{ownerState:i}=t,{container:e,direction:c,item:a,spacing:f,wrap:d,zeroMinWidth:l,breakpoints:y}=i;let r=[];e&&(r=ln(f,y,s));const h=[];return y.forEach(p=>{const v=i[p];v&&h.push(s[`grid-${p}-${String(v)}`])}),[s.root,e&&s.container,a&&s.item,l&&s.zeroMinWidth,...r,c!=="row"&&s[`direction-xs-${String(c)}`],d!=="wrap"&&s[`wrap-xs-${String(d)}`],...h]}})(({ownerState:t})=>F({boxSizing:"border-box"},t.container&&{display:"flex",flexWrap:"wrap",width:"100%"},t.item&&{margin:0},t.zeroMinWidth&&{minWidth:0},t.wrap!=="wrap"&&{flexWrap:t.wrap}),rn,an,cn,sn);function un(t,s){if(!t||t<=0)return[];if(typeof t=="string"&&!Number.isNaN(Number(t))||typeof t=="number")return[`spacing-xs-${String(t)}`];const i=[];return s.forEach(e=>{const c=t[e];if(Number(c)>0){const a=`spacing-${e}-${String(c)}`;i.push(a)}}),i}const pn=t=>{const{classes:s,container:i,direction:e,item:c,spacing:a,wrap:f,zeroMinWidth:d,breakpoints:l}=t;let y=[];i&&(y=un(a,l));const r=[];l.forEach(p=>{const v=t[p];v&&r.push(`grid-${p}-${String(v)}`)});const h={root:["root",i&&"container",c&&"item",d&&"zeroMinWidth",...y,e!=="row"&&`direction-xs-${String(e)}`,f!=="wrap"&&`wrap-xs-${String(f)}`,...r]};return Ve(h,Qo,s)},fn=x.forwardRef(function(s,i){const e=At({props:s,name:"MuiGrid"}),{breakpoints:c}=no(),a=ko(e),{className:f,columns:d,columnSpacing:l,component:y="div",container:r=!1,direction:h="row",item:p=!1,rowSpacing:v,spacing:O=0,wrap:b="wrap",zeroMinWidth:C=!1}=a,P=Be(a,nn),T=v||O,A=l||O,m=x.useContext(bt),g=r?d||12:m,S={},z=F({},P);c.keys.forEach(w=>{P[w]!=null&&(S[w]=P[w],delete z[w])});const _=F({},a,{columns:g,container:r,direction:h,item:p,rowSpacing:T,columnSpacing:A,wrap:b,zeroMinWidth:C,spacing:O},S,{breakpoints:c.keys}),D=pn(_);return o.jsx(bt.Provider,{value:g,children:o.jsx(dn,F({ownerState:_,className:Fe(D.root,f),as:y,ref:i},z))})}),se=fn;function hn(t){return ze("MuiSwitch",t)}const mn=Re("MuiSwitch",["root","edgeStart","edgeEnd","switchBase","colorPrimary","colorSecondary","sizeSmall","sizeMedium","checked","disabled","input","thumb","track"]),U=mn,gn=["className","color","edge","size","sx"],xn=t=>{const{classes:s,edge:i,size:e,color:c,checked:a,disabled:f}=t,d={root:["root",i&&`edge${re(i)}`,`size${re(e)}`],switchBase:["switchBase",`color${re(c)}`,a&&"checked",f&&"disabled"],thumb:["thumb"],track:["track"],input:["input"]},l=Ve(d,hn,s);return F({},s,l)},bn=ae("span",{name:"MuiSwitch",slot:"Root",overridesResolver:(t,s)=>{const{ownerState:i}=t;return[s.root,i.edge&&s[`edge${re(i.edge)}`],s[`size${re(i.size)}`]]}})(({ownerState:t})=>F({display:"inline-flex",width:34+12*2,height:14+12*2,overflow:"hidden",padding:12,boxSizing:"border-box",position:"relative",flexShrink:0,zIndex:0,verticalAlign:"middle","@media print":{colorAdjust:"exact"}},t.edge==="start"&&{marginLeft:-8},t.edge==="end"&&{marginRight:-8},t.size==="small"&&{width:40,height:24,padding:7,[`& .${U.thumb}`]:{width:16,height:16},[`& .${U.switchBase}`]:{padding:4,[`&.${U.checked}`]:{transform:"translateX(16px)"}}})),yn=ae(Ko,{name:"MuiSwitch",slot:"SwitchBase",overridesResolver:(t,s)=>{const{ownerState:i}=t;return[s.switchBase,{[`& .${U.input}`]:s.input},i.color!=="default"&&s[`color${re(i.color)}`]]}})(({theme:t})=>({position:"absolute",top:0,left:0,zIndex:1,color:t.vars?t.vars.palette.Switch.defaultColor:`${t.palette.mode==="light"?t.palette.common.white:t.palette.grey[300]}`,transition:t.transitions.create(["left","transform"],{duration:t.transitions.duration.shortest}),[`&.${U.checked}`]:{transform:"translateX(20px)"},[`&.${U.disabled}`]:{color:t.vars?t.vars.palette.Switch.defaultDisabledColor:`${t.palette.mode==="light"?t.palette.grey[100]:t.palette.grey[600]}`},[`&.${U.checked} + .${U.track}`]:{opacity:.5},[`&.${U.disabled} + .${U.track}`]:{opacity:t.vars?t.vars.opacity.switchTrackDisabled:`${t.palette.mode==="light"?.12:.2}`},[`& .${U.input}`]:{left:"-100%",width:"300%"}}),({theme:t,ownerState:s})=>F({"&:hover":{backgroundColor:t.vars?`rgba(${t.vars.palette.action.activeChannel} / ${t.vars.palette.action.hoverOpacity})`:at(t.palette.action.active,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},s.color!=="default"&&{[`&.${U.checked}`]:{color:(t.vars||t).palette[s.color].main,"&:hover":{backgroundColor:t.vars?`rgba(${t.vars.palette[s.color].mainChannel} / ${t.vars.palette.action.hoverOpacity})`:at(t.palette[s.color].main,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${U.disabled}`]:{color:t.vars?t.vars.palette.Switch[`${s.color}DisabledColor`]:`${t.palette.mode==="light"?so(t.palette[s.color].main,.62):io(t.palette[s.color].main,.55)}`}},[`&.${U.checked} + .${U.track}`]:{backgroundColor:(t.vars||t).palette[s.color].main}})),wn=ae("span",{name:"MuiSwitch",slot:"Track",overridesResolver:(t,s)=>s.track})(({theme:t})=>({height:"100%",width:"100%",borderRadius:14/2,zIndex:-1,transition:t.transitions.create(["opacity","background-color"],{duration:t.transitions.duration.shortest}),backgroundColor:t.vars?t.vars.palette.common.onBackground:`${t.palette.mode==="light"?t.palette.common.black:t.palette.common.white}`,opacity:t.vars?t.vars.opacity.switchTrack:`${t.palette.mode==="light"?.38:.3}`})),jn=ae("span",{name:"MuiSwitch",slot:"Thumb",overridesResolver:(t,s)=>s.thumb})(({theme:t})=>({boxShadow:(t.vars||t).shadows[1],backgroundColor:"currentColor",width:20,height:20,borderRadius:"50%"})),vn=x.forwardRef(function(s,i){const e=At({props:s,name:"MuiSwitch"}),{className:c,color:a="primary",edge:f=!1,size:d="medium",sx:l}=e,y=Be(e,gn),r=F({},e,{color:a,edge:f,size:d}),h=xn(r),p=o.jsx(jn,{className:h.thumb,ownerState:r});return o.jsxs(bn,{className:Fe(h.root,c),sx:l,ownerState:r,children:[o.jsx(yn,F({type:"checkbox",icon:p,checkedIcon:p,ref:i,ownerState:r},y,{classes:F({},h,{root:h.switchBase})})),o.jsx(wn,{className:h.track,ownerState:r})]})}),En=vn,kn={schemas:[],links:[]},zt=ro(t=>({...kn,setSchemas:s=>{t({schemas:s})},setSchemaLinks:s=>{t({links:s})}})),Pn=/^[a-z0-9_]+$/,Cn=({parentParam:t})=>{const[s,i]=x.useState(!1),[e,c]=x.useState([]),{fields:a,append:f,replace:d,remove:l}=wo({name:"attributes"}),{setValue:y,watch:r}=jo();return x.useEffect(()=>{const h=async()=>{try{let p=[{required:!1,type:"string",key:""}];if(t!==Po.value.toLowerCase()){i(!0);const v=await ao(t);p=Ao(v)}p=p.filter(v=>v.key!=="node_key"),d(p),c(p)}catch(p){console.warn(p)}finally{i(!1)}};e.length===0&&h()},[t,y,d,e.length]),o.jsxs(o.Fragment,{children:[s?o.jsx(k,{align:"center",children:o.jsx(xe,{color:R.SECONDARY_BLUE,size:"30"})}):o.jsx(Tn,{py:8,children:o.jsx(se,{container:!0,spacing:2,children:a.map((h,p)=>{const v=r(`attributes[${p}].type`),O=r(`attributes[${p}].required`),b=h.isNew||!1,C=["name"].includes(r(`attributes[${p}].key`));return o.jsxs(x.Fragment,{children:[o.jsx(se,{item:!0,xs:5,children:o.jsx(Te,{autoComplete:"off",className:"text-input",disabled:!b,id:"cy-item-name",maxLength:50,name:`attributes.${p}.key`,placeholder:"Enter value",rules:{...ke,pattern:{message:"Please avoid special characters, spaces and uppercase",value:Pn}}})}),o.jsx(se,{item:!0,xs:4,children:o.jsx(Ce,{disabled:C,onSelect:P=>y(`attributes[${p}].type`,P==null?void 0:P.value),options:mt,selectedValue:mt.find(P=>P.value===v)})}),o.jsxs(se,{item:!0,xs:3,children:[o.jsx(En,{checked:O,disabled:C,name:`attributes.${p}.required`,onChange:P=>y(`attributes[${p}].required`,P.target.checked),size:"small"}),!C&&o.jsx(vo,{onClick:()=>l(p),children:o.jsx(Mo,{})})]})]},h.id)})})}),o.jsx(k,{align:"flex-start",py:12,children:o.jsx(Oe,{onClick:()=>f({key:"",type:"string",required:!0,isNew:!0}),size:"medium",startIcon:o.jsx(No,{}),variant:"contained",children:"Add Attribute"})})]})},Tn=I(k)`
  overflow-y: auto;
  width: calc(100% + 20px);
  max-height: calc(80vh - 300px);
`,Sn=({parent:t})=>{const s=t;return o.jsxs(k,{children:[o.jsx(k,{direction:"row",mb:10,children:o.jsxs(se,{container:!0,spacing:2,children:[o.jsx(se,{item:!0,xs:5,children:o.jsx($e,{style:{marginRight:180},children:"Attributes"})}),o.jsx(se,{item:!0,xs:4,children:o.jsx($e,{style:{marginRight:130},children:"Type"})}),o.jsx(se,{item:!0,xs:3,children:o.jsx($e,{children:"Required"})})]})}),s&&o.jsx(Cn,{parentParam:s},s)]})},$e=I(q)`
  font-size: 15px;
  color: gray;
`,On={type:"",parent:""},Mn=async(t,s=!1)=>{try{const{attributes:i,...e}=t,c={...e,attributes:Lo(i)};let a;if(s?a=await Pe.put("/schema",JSON.stringify(c),{}):a=await Pe.post("/schema",JSON.stringify({...c,node_key:"name"}),{}),a.status!=="success")throw new Error("error");return a==null?void 0:a.ref_id}catch(i){let e=ue;if(i.status===400){const c=await i.json();e=c.errorCode||(c==null?void 0:c.status)||ue}else i instanceof Error&&(e=i.message);throw new Error(e)}},Nn=t=>t.charAt(0).toUpperCase()+t.slice(1),yt=async(t,s)=>{try{const a=((await _t()).schemas||[]).filter(f=>!f.is_deleted&&f.type&&(!s||s(f))).map(f=>f.type==="thing"?{label:"No Parent",value:f.type}:{label:Nn(f.type),value:f.type});t(a)}catch(i){console.warn(i)}},An=({graphLoading:t,onSchemaCreate:s,selectedSchema:i,onDelete:e,setSelectedSchemaId:c,setGraphLoading:a,setIsCreateNew:f,onSchemaUpdate:d})=>{const{close:l,visible:y}=Lt("addType"),r=Ue({mode:"onChange",defaultValues:i?{type:i.type,parent:i.parent}:On}),{watch:h,setValue:p,reset:v,getValues:O}=r,[b,C]=x.useState(!1),[P,T]=x.useState(!1),[A,m]=x.useState(null),[g,S]=x.useState(!1),[z,_]=x.useState(null),[D,w]=x.useState(""),[$,fe]=x.useState(null);x.useEffect(()=>()=>{v()},[y,v]);const oe=()=>{f(!1),c("")};x.useEffect(()=>{i||(T(!0),yt(m).finally(()=>T(!1)))},[i]),x.useEffect(()=>{i&&(p("type",i==null?void 0:i.type),p("parent",i.parent),yt(_,M=>M.type!==i.type&&M.type!==i.parent))},[i,p]);const G=h("parent"),Z=()=>{l()},ce=async()=>{if(i!=null&&i.type)try{await Pe.delete(`/schema/${i.ref_id}`),e(i.type),l()}catch(M){let Y=ue;if((M==null?void 0:M.status)===400){const W=await M.json();Y=W.errorCode||(W==null?void 0:W.status)||ue}else M instanceof Error&&(Y=M.message);fe(Y)}finally{f(!1)}},Q=r.handleSubmit(async M=>{if(!G){S(!0);return}C(!0);try{if(M.type!==(i==null?void 0:i.type)||O().parent!==(i==null?void 0:i.parent)){const W=O().parent??(i==null?void 0:i.parent);a(!0),await Pe.put(`/schema/${i==null?void 0:i.ref_id}`,JSON.stringify({type:M.type,parent:W})),await d()}const Y=await Mn({...M,...i?{ref_id:i==null?void 0:i.ref_id}:{}},!!i);s({type:M.type,parent:G||"",ref_id:(i==null?void 0:i.ref_id)||Y||"new"}),Z()}catch(Y){let W=ue;if((Y==null?void 0:Y.status)===400){const ie=await Y.json();W=ie.errorCode||(ie==null?void 0:ie.status)||ue}else Y instanceof Error&&(W=Y.message);w(W)}finally{C(!1),a(!1),f(!1)}}),H=()=>A==null?void 0:A.find(M=>M.value===G),V=()=>z==null?void 0:z.find(M=>M.value===G);return o.jsxs(k,{children:[o.jsx(k,{direction:"row",justify:"flex-end",children:o.jsx(_n,{"data-testid":"close-sidebar-sub-view",onClick:oe,children:o.jsx(We,{})})}),o.jsx(k,{children:o.jsx($t,{...r,children:o.jsxs("form",{id:"add-type-form",onSubmit:Q,children:[o.jsx(k,{children:i?o.jsxs(o.Fragment,{children:[o.jsxs(k,{mb:12,children:[o.jsx(k,{mb:12,children:o.jsx(q,{children:"Name"})}),o.jsx(k,{mb:12,children:o.jsx(Te,{defaultValue:i==null?void 0:i.type,id:"cy-item-name",maxLength:250,name:"type",placeholder:"Enter type name",rules:{...ke},value:G})})]}),o.jsxs(k,{mb:12,children:[o.jsx(k,{mb:12,children:o.jsx(q,{children:"Parent"})}),o.jsx(Ce,{isLoading:P||t,onSelect:M=>{p("parent",(M==null?void 0:M.value)||""),S(!1)},options:z||[],selectedValue:V()}),D&&o.jsx(Ie,{children:D})]})]}):o.jsxs(o.Fragment,{children:[o.jsxs(k,{mb:12,children:[o.jsx(k,{mb:12,children:o.jsx(q,{children:"Select Parent"})}),o.jsx(Ce,{isLoading:P,onSelect:M=>{p("parent",(M==null?void 0:M.value)||""),S(!1)},options:A,selectedValue:H()}),g&&o.jsx(Ie,{children:"A parent type must be selected"})]}),o.jsxs(k,{children:[o.jsx(k,{mb:12,children:o.jsx(q,{children:"Type name"})}),o.jsx(k,{mb:12,children:o.jsx(Te,{id:"cy-item-name",maxLength:250,name:"type",placeholder:"Enter type name",rules:{...ke},value:G})})]})]})}),o.jsx(Sn,{parent:i?i.type:G}),o.jsxs(k,{direction:"row",justify:"space-between",mt:20,children:[i?o.jsxs(k,{direction:"column",children:[o.jsx(Ln,{color:"secondary",onClick:ce,size:"large",style:{marginRight:20},variant:"contained",children:"Delete"}),$&&o.jsx(Ie,{children:$})]}):null,o.jsx(Oe,{color:"secondary",disabled:b||g,onClick:Q,size:"large",startIcon:b?o.jsx(xe,{color:R.white,size:10}):null,variant:"contained",children:"Save"})]})]})})})]})},Ln=I(Oe)`
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
`,_n=I(k)`
  font-size: 32px;
  color: ${R.white};
  cursor: pointer;
`,Ie=I(k)`
  font-size: 13px;
  font-family: Barlow;
  color: #ff8f80;
  line-height: 0.2px;
  margin-top: 12px;
  padding-top: 20px;
`;var $n=Object.defineProperty,In=(t,s,i)=>s in t?$n(t,s,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[s]=i,j=(t,s,i)=>(In(t,typeof s!="symbol"?s+"":s,i),i);const Ee=new co,wt=new lo,Dn=Math.cos(70*(Math.PI/180)),jt=(t,s)=>(t%s+s)%s;let zn=class extends uo{constructor(s,i){super(),j(this,"object"),j(this,"domElement"),j(this,"enabled",!0),j(this,"target",new L),j(this,"minDistance",0),j(this,"maxDistance",1/0),j(this,"minZoom",0),j(this,"maxZoom",1/0),j(this,"minPolarAngle",0),j(this,"maxPolarAngle",Math.PI),j(this,"minAzimuthAngle",-1/0),j(this,"maxAzimuthAngle",1/0),j(this,"enableDamping",!1),j(this,"dampingFactor",.05),j(this,"enableZoom",!0),j(this,"zoomSpeed",1),j(this,"enableRotate",!0),j(this,"rotateSpeed",1),j(this,"enablePan",!0),j(this,"panSpeed",1),j(this,"screenSpacePanning",!0),j(this,"keyPanSpeed",7),j(this,"zoomToCursor",!1),j(this,"autoRotate",!1),j(this,"autoRotateSpeed",2),j(this,"reverseOrbit",!1),j(this,"reverseHorizontalOrbit",!1),j(this,"reverseVerticalOrbit",!1),j(this,"keys",{LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"}),j(this,"mouseButtons",{LEFT:le.ROTATE,MIDDLE:le.DOLLY,RIGHT:le.PAN}),j(this,"touches",{ONE:de.ROTATE,TWO:de.DOLLY_PAN}),j(this,"target0"),j(this,"position0"),j(this,"zoom0"),j(this,"_domElementKeyEvents",null),j(this,"getPolarAngle"),j(this,"getAzimuthalAngle"),j(this,"setPolarAngle"),j(this,"setAzimuthalAngle"),j(this,"getDistance"),j(this,"listenToKeyEvents"),j(this,"stopListenToKeyEvents"),j(this,"saveState"),j(this,"reset"),j(this,"update"),j(this,"connect"),j(this,"dispose"),this.object=s,this.domElement=i,this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this.getPolarAngle=()=>r.phi,this.getAzimuthalAngle=()=>r.theta,this.setPolarAngle=n=>{let u=jt(n,2*Math.PI),E=r.phi;E<0&&(E+=2*Math.PI),u<0&&(u+=2*Math.PI);let N=Math.abs(u-E);2*Math.PI-N<N&&(u<E?u+=2*Math.PI:E+=2*Math.PI),h.phi=u-E,e.update()},this.setAzimuthalAngle=n=>{let u=jt(n,2*Math.PI),E=r.theta;E<0&&(E+=2*Math.PI),u<0&&(u+=2*Math.PI);let N=Math.abs(u-E);2*Math.PI-N<N&&(u<E?u+=2*Math.PI:E+=2*Math.PI),h.theta=u-E,e.update()},this.getDistance=()=>e.object.position.distanceTo(e.target),this.listenToKeyEvents=n=>{n.addEventListener("keydown",Le),this._domElementKeyEvents=n},this.stopListenToKeyEvents=()=>{this._domElementKeyEvents.removeEventListener("keydown",Le),this._domElementKeyEvents=null},this.saveState=()=>{e.target0.copy(e.target),e.position0.copy(e.object.position),e.zoom0=e.object.zoom},this.reset=()=>{e.target.copy(e.target0),e.object.position.copy(e.position0),e.object.zoom=e.zoom0,e.object.updateProjectionMatrix(),e.dispatchEvent(c),e.update(),l=d.NONE},this.update=(()=>{const n=new L,u=new L(0,1,0),E=new ct().setFromUnitVectors(s.up,u),N=E.clone().invert(),B=new L,J=new ct,ne=2*Math.PI;return function(){const rt=e.object.position;E.setFromUnitVectors(s.up,u),N.copy(E).invert(),n.copy(rt).sub(e.target),n.applyQuaternion(E),r.setFromVector3(n),e.autoRotate&&l===d.NONE&&G(fe()),e.enableDamping?(r.theta+=h.theta*e.dampingFactor,r.phi+=h.phi*e.dampingFactor):(r.theta+=h.theta,r.phi+=h.phi);let ee=e.minAzimuthAngle,te=e.maxAzimuthAngle;isFinite(ee)&&isFinite(te)&&(ee<-Math.PI?ee+=ne:ee>Math.PI&&(ee-=ne),te<-Math.PI?te+=ne:te>Math.PI&&(te-=ne),ee<=te?r.theta=Math.max(ee,Math.min(te,r.theta)):r.theta=r.theta>(ee+te)/2?Math.max(ee,r.theta):Math.min(te,r.theta)),r.phi=Math.max(e.minPolarAngle,Math.min(e.maxPolarAngle,r.phi)),r.makeSafe(),e.enableDamping===!0?e.target.addScaledVector(v,e.dampingFactor):e.target.add(v),e.zoomToCursor&&D||e.object.isOrthographicCamera?r.radius=W(r.radius):r.radius=W(r.radius*p),n.setFromSpherical(r),n.applyQuaternion(N),rt.copy(e.target).add(n),e.object.matrixAutoUpdate||e.object.updateMatrix(),e.object.lookAt(e.target),e.enableDamping===!0?(h.theta*=1-e.dampingFactor,h.phi*=1-e.dampingFactor,v.multiplyScalar(1-e.dampingFactor)):(h.set(0,0,0),v.set(0,0,0));let ye=!1;if(e.zoomToCursor&&D){let he=null;if(e.object instanceof je&&e.object.isPerspectiveCamera){const me=n.length();he=W(me*p);const we=me-he;e.object.position.addScaledVector(z,we),e.object.updateMatrixWorld()}else if(e.object.isOrthographicCamera){const me=new L(_.x,_.y,0);me.unproject(e.object),e.object.zoom=Math.max(e.minZoom,Math.min(e.maxZoom,e.object.zoom/p)),e.object.updateProjectionMatrix(),ye=!0;const we=new L(_.x,_.y,0);we.unproject(e.object),e.object.position.sub(we).add(me),e.object.updateMatrixWorld(),he=n.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),e.zoomToCursor=!1;he!==null&&(e.screenSpacePanning?e.target.set(0,0,-1).transformDirection(e.object.matrix).multiplyScalar(he).add(e.object.position):(Ee.origin.copy(e.object.position),Ee.direction.set(0,0,-1).transformDirection(e.object.matrix),Math.abs(e.object.up.dot(Ee.direction))<Dn?s.lookAt(e.target):(wt.setFromNormalAndCoplanarPoint(e.object.up,e.target),Ee.intersectPlane(wt,e.target))))}else e.object instanceof ve&&e.object.isOrthographicCamera&&(e.object.zoom=Math.max(e.minZoom,Math.min(e.maxZoom,e.object.zoom/p)),e.object.updateProjectionMatrix(),ye=!0);return p=1,D=!1,ye||B.distanceToSquared(e.object.position)>y||8*(1-J.dot(e.object.quaternion))>y?(e.dispatchEvent(c),B.copy(e.object.position),J.copy(e.object.quaternion),ye=!1,!0):!1}})(),this.connect=n=>{n===document&&console.error('THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.'),e.domElement=n,e.domElement.style.touchAction="none",e.domElement.addEventListener("contextmenu",nt),e.domElement.addEventListener("pointerdown",et),e.domElement.addEventListener("pointercancel",tt),e.domElement.addEventListener("wheel",ot)},this.dispose=()=>{var n,u,E,N,B,J;(n=e.domElement)==null||n.removeEventListener("contextmenu",nt),(u=e.domElement)==null||u.removeEventListener("pointerdown",et),(E=e.domElement)==null||E.removeEventListener("pointercancel",tt),(N=e.domElement)==null||N.removeEventListener("wheel",ot),(B=e.domElement)==null||B.ownerDocument.removeEventListener("pointermove",Ne),(J=e.domElement)==null||J.ownerDocument.removeEventListener("pointerup",Ae),e._domElementKeyEvents!==null&&e._domElementKeyEvents.removeEventListener("keydown",Le)};const e=this,c={type:"change"},a={type:"start"},f={type:"end"},d={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let l=d.NONE;const y=1e-6,r=new lt,h=new lt;let p=1;const v=new L,O=new X,b=new X,C=new X,P=new X,T=new X,A=new X,m=new X,g=new X,S=new X,z=new L,_=new X;let D=!1;const w=[],$={};function fe(){return 2*Math.PI/60/60*e.autoRotateSpeed}function oe(){return Math.pow(.95,e.zoomSpeed)}function G(n){e.reverseOrbit||e.reverseHorizontalOrbit?h.theta+=n:h.theta-=n}function Z(n){e.reverseOrbit||e.reverseVerticalOrbit?h.phi+=n:h.phi-=n}const ce=(()=>{const n=new L;return function(E,N){n.setFromMatrixColumn(N,0),n.multiplyScalar(-E),v.add(n)}})(),Q=(()=>{const n=new L;return function(E,N){e.screenSpacePanning===!0?n.setFromMatrixColumn(N,1):(n.setFromMatrixColumn(N,0),n.crossVectors(e.object.up,n)),n.multiplyScalar(E),v.add(n)}})(),H=(()=>{const n=new L;return function(E,N){const B=e.domElement;if(B&&e.object instanceof je&&e.object.isPerspectiveCamera){const J=e.object.position;n.copy(J).sub(e.target);let ne=n.length();ne*=Math.tan(e.object.fov/2*Math.PI/180),ce(2*E*ne/B.clientHeight,e.object.matrix),Q(2*N*ne/B.clientHeight,e.object.matrix)}else B&&e.object instanceof ve&&e.object.isOrthographicCamera?(ce(E*(e.object.right-e.object.left)/e.object.zoom/B.clientWidth,e.object.matrix),Q(N*(e.object.top-e.object.bottom)/e.object.zoom/B.clientHeight,e.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),e.enablePan=!1)}})();function V(n){e.object instanceof je&&e.object.isPerspectiveCamera||e.object instanceof ve&&e.object.isOrthographicCamera?p/=n:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),e.enableZoom=!1)}function M(n){e.object instanceof je&&e.object.isPerspectiveCamera||e.object instanceof ve&&e.object.isOrthographicCamera?p*=n:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),e.enableZoom=!1)}function Y(n){if(!e.zoomToCursor||!e.domElement)return;D=!0;const u=e.domElement.getBoundingClientRect(),E=n.clientX-u.left,N=n.clientY-u.top,B=u.width,J=u.height;_.x=E/B*2-1,_.y=-(N/J)*2+1,z.set(_.x,_.y,1).unproject(e.object).sub(e.object.position).normalize()}function W(n){return Math.max(e.minDistance,Math.min(e.maxDistance,n))}function ie(n){O.set(n.clientX,n.clientY)}function Ft(n){Y(n),m.set(n.clientX,n.clientY)}function He(n){P.set(n.clientX,n.clientY)}function Vt(n){b.set(n.clientX,n.clientY),C.subVectors(b,O).multiplyScalar(e.rotateSpeed);const u=e.domElement;u&&(G(2*Math.PI*C.x/u.clientHeight),Z(2*Math.PI*C.y/u.clientHeight)),O.copy(b),e.update()}function Yt(n){g.set(n.clientX,n.clientY),S.subVectors(g,m),S.y>0?V(oe()):S.y<0&&M(oe()),m.copy(g),e.update()}function Ut(n){T.set(n.clientX,n.clientY),A.subVectors(T,P).multiplyScalar(e.panSpeed),H(A.x,A.y),P.copy(T),e.update()}function Wt(n){Y(n),n.deltaY<0?M(oe()):n.deltaY>0&&V(oe()),e.update()}function Gt(n){let u=!1;switch(n.code){case e.keys.UP:H(0,e.keyPanSpeed),u=!0;break;case e.keys.BOTTOM:H(0,-e.keyPanSpeed),u=!0;break;case e.keys.LEFT:H(e.keyPanSpeed,0),u=!0;break;case e.keys.RIGHT:H(-e.keyPanSpeed,0),u=!0;break}u&&(n.preventDefault(),e.update())}function Xe(){if(w.length==1)O.set(w[0].pageX,w[0].pageY);else{const n=.5*(w[0].pageX+w[1].pageX),u=.5*(w[0].pageY+w[1].pageY);O.set(n,u)}}function Ze(){if(w.length==1)P.set(w[0].pageX,w[0].pageY);else{const n=.5*(w[0].pageX+w[1].pageX),u=.5*(w[0].pageY+w[1].pageY);P.set(n,u)}}function Ke(){const n=w[0].pageX-w[1].pageX,u=w[0].pageY-w[1].pageY,E=Math.sqrt(n*n+u*u);m.set(0,E)}function Ht(){e.enableZoom&&Ke(),e.enablePan&&Ze()}function Xt(){e.enableZoom&&Ke(),e.enableRotate&&Xe()}function qe(n){if(w.length==1)b.set(n.pageX,n.pageY);else{const E=_e(n),N=.5*(n.pageX+E.x),B=.5*(n.pageY+E.y);b.set(N,B)}C.subVectors(b,O).multiplyScalar(e.rotateSpeed);const u=e.domElement;u&&(G(2*Math.PI*C.x/u.clientHeight),Z(2*Math.PI*C.y/u.clientHeight)),O.copy(b)}function Qe(n){if(w.length==1)T.set(n.pageX,n.pageY);else{const u=_e(n),E=.5*(n.pageX+u.x),N=.5*(n.pageY+u.y);T.set(E,N)}A.subVectors(T,P).multiplyScalar(e.panSpeed),H(A.x,A.y),P.copy(T)}function Je(n){const u=_e(n),E=n.pageX-u.x,N=n.pageY-u.y,B=Math.sqrt(E*E+N*N);g.set(0,B),S.set(0,Math.pow(g.y/m.y,e.zoomSpeed)),V(S.y),m.copy(g)}function Zt(n){e.enableZoom&&Je(n),e.enablePan&&Qe(n)}function Kt(n){e.enableZoom&&Je(n),e.enableRotate&&qe(n)}function et(n){var u,E;e.enabled!==!1&&(w.length===0&&((u=e.domElement)==null||u.ownerDocument.addEventListener("pointermove",Ne),(E=e.domElement)==null||E.ownerDocument.addEventListener("pointerup",Ae)),to(n),n.pointerType==="touch"?Jt(n):qt(n))}function Ne(n){e.enabled!==!1&&(n.pointerType==="touch"?eo(n):Qt(n))}function Ae(n){var u,E,N;st(n),w.length===0&&((u=e.domElement)==null||u.releasePointerCapture(n.pointerId),(E=e.domElement)==null||E.ownerDocument.removeEventListener("pointermove",Ne),(N=e.domElement)==null||N.ownerDocument.removeEventListener("pointerup",Ae)),e.dispatchEvent(f),l=d.NONE}function tt(n){st(n)}function qt(n){let u;switch(n.button){case 0:u=e.mouseButtons.LEFT;break;case 1:u=e.mouseButtons.MIDDLE;break;case 2:u=e.mouseButtons.RIGHT;break;default:u=-1}switch(u){case le.DOLLY:if(e.enableZoom===!1)return;Ft(n),l=d.DOLLY;break;case le.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(e.enablePan===!1)return;He(n),l=d.PAN}else{if(e.enableRotate===!1)return;ie(n),l=d.ROTATE}break;case le.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(e.enableRotate===!1)return;ie(n),l=d.ROTATE}else{if(e.enablePan===!1)return;He(n),l=d.PAN}break;default:l=d.NONE}l!==d.NONE&&e.dispatchEvent(a)}function Qt(n){if(e.enabled!==!1)switch(l){case d.ROTATE:if(e.enableRotate===!1)return;Vt(n);break;case d.DOLLY:if(e.enableZoom===!1)return;Yt(n);break;case d.PAN:if(e.enablePan===!1)return;Ut(n);break}}function ot(n){e.enabled===!1||e.enableZoom===!1||l!==d.NONE&&l!==d.ROTATE||(n.preventDefault(),e.dispatchEvent(a),Wt(n),e.dispatchEvent(f))}function Le(n){e.enabled===!1||e.enablePan===!1||Gt(n)}function Jt(n){switch(it(n),w.length){case 1:switch(e.touches.ONE){case de.ROTATE:if(e.enableRotate===!1)return;Xe(),l=d.TOUCH_ROTATE;break;case de.PAN:if(e.enablePan===!1)return;Ze(),l=d.TOUCH_PAN;break;default:l=d.NONE}break;case 2:switch(e.touches.TWO){case de.DOLLY_PAN:if(e.enableZoom===!1&&e.enablePan===!1)return;Ht(),l=d.TOUCH_DOLLY_PAN;break;case de.DOLLY_ROTATE:if(e.enableZoom===!1&&e.enableRotate===!1)return;Xt(),l=d.TOUCH_DOLLY_ROTATE;break;default:l=d.NONE}break;default:l=d.NONE}l!==d.NONE&&e.dispatchEvent(a)}function eo(n){switch(it(n),l){case d.TOUCH_ROTATE:if(e.enableRotate===!1)return;qe(n),e.update();break;case d.TOUCH_PAN:if(e.enablePan===!1)return;Qe(n),e.update();break;case d.TOUCH_DOLLY_PAN:if(e.enableZoom===!1&&e.enablePan===!1)return;Zt(n),e.update();break;case d.TOUCH_DOLLY_ROTATE:if(e.enableZoom===!1&&e.enableRotate===!1)return;Kt(n),e.update();break;default:l=d.NONE}}function nt(n){e.enabled!==!1&&n.preventDefault()}function to(n){w.push(n)}function st(n){delete $[n.pointerId];for(let u=0;u<w.length;u++)if(w[u].pointerId==n.pointerId){w.splice(u,1);return}}function it(n){let u=$[n.pointerId];u===void 0&&(u=new X,$[n.pointerId]=u),u.set(n.pageX,n.pageY)}function _e(n){const u=n.pointerId===w[0].pointerId?w[1]:w[0];return $[u.pointerId]}i!==void 0&&this.connect(i),this.update()}};const Rn=new L,vt=x.forwardRef(function({start:s=[0,0,0],end:i=[0,0,0],mid:e,segments:c=20,...a},f){const d=x.useRef(null),[l]=x.useState(()=>new po(void 0,void 0,void 0)),y=x.useCallback((h,p,v,O=20)=>(h instanceof L?l.v0.copy(h):l.v0.set(...h),p instanceof L?l.v2.copy(p):l.v2.set(...p),v instanceof L?l.v1.copy(v):l.v1.copy(l.v0.clone().add(l.v2.clone().sub(l.v0)).add(Rn.set(0,l.v0.y-l.v2.y,0))),l.getPoints(O)),[]);x.useLayoutEffect(()=>{d.current.setPoints=(h,p,v)=>{const O=y(h,p,v);d.current.geometry&&d.current.geometry.setPositions(O.map(b=>b.toArray()).flat())}},[]);const r=x.useMemo(()=>y(s,i,e,c),[s,i,e,c]);return x.createElement(Do,F({ref:zo([d,f]),points:r},a))}),Bn=x.forwardRef(({makeDefault:t,camera:s,regress:i,domElement:e,enableDamping:c=!0,onChange:a,onStart:f,onEnd:d,...l},y)=>{const r=K(g=>g.invalidate),h=K(g=>g.camera),p=K(g=>g.gl),v=K(g=>g.events),O=K(g=>g.setEvents),b=K(g=>g.set),C=K(g=>g.get),P=K(g=>g.performance),T=s||h,A=e||v.connected||p.domElement,m=x.useMemo(()=>new zn(T),[T]);return Me(()=>{m.enabled&&m.update()},-1),x.useEffect(()=>(m.connect(A),()=>void m.dispose()),[A,i,m,r]),x.useEffect(()=>{const g=_=>{r(),i&&P.regress(),a&&a(_)},S=_=>{f&&f(_)},z=_=>{d&&d(_)};return m.addEventListener("change",g),m.addEventListener("start",S),m.addEventListener("end",z),()=>{m.removeEventListener("start",S),m.removeEventListener("end",z),m.removeEventListener("change",g)}},[a,f,d,m,r,O]),x.useEffect(()=>{if(t){const g=C().controls;return b({controls:m}),()=>b({controls:g})}},[t,m]),x.createElement("primitive",F({ref:y,object:m,enableDamping:c},l))});function Fn(t){const s=t+"Geometry";return x.forwardRef(({args:i,children:e,...c},a)=>x.createElement("mesh",F({ref:a},c),x.createElement(s,{attach:"geometry",args:i}),e))}const Vn=Fn("circle"),Et=t=>{const s=x.useRef();return x.useEffect(()=>{s.current=t}),s.current},Ge=10,Yn=2,kt=2,Pt=10,Un=(t,s,i)=>{const a=new L().subVectors(s,t).normalize().multiplyScalar(i);return new L().addVectors(t,a)},Rt=({links:t,nodes:s})=>{const i=x.useRef(null),{camera:e}=K(),c=new L,a=new L,f=new L,d=new L,l=new L,y=new L,r=new L,h=new L;return Me(()=>{i.current&&s&&i.current.children.forEach((p,v)=>{var g,S,z,_;const O=t[v];if(!O)return;const b=s.find(D=>D.ref_id===O.source),C=s.find(D=>D.ref_id===O.target);c.set((C==null?void 0:C.x)||0,(C==null?void 0:C.y)||0,(C==null?void 0:C.z)||0),a.set((b==null?void 0:b.x)||0,(b==null?void 0:b.y)||0,(b==null?void 0:b.z)||0);const P=p.children[0],T=p.children[1],A=p.children[2],m=p.children[3];if((C==null?void 0:C.ref_id)===(b==null?void 0:b.ref_id)){const[D,w,$]=_o(c);(g=P.setPoints)==null||g.call(P,c,$,D),(S=T.setPoints)==null||S.call(T,$,a,D),A.position.set($.x,$.y,w.z),A.lookAt(D),A.rotateX(-Math.PI/2),m.position.set($.x,$.y,w.z),m.lookAt(e.position)}else{r.copy(Un(a,c,Ge+kt)),h.copy(c),f.lerpVectors(h,r,.5);const D=30;d.subVectors(r,h).normalize().multiplyScalar(D/2),l.subVectors(f,d),y.addVectors(f,d),(z=P.setPoints)==null||z.call(P,h,l,f),(_=T.setPoints)==null||_.call(T,y,r,f),A.position.set(r.x,r.y,r.z),A.lookAt(h),A.rotateX(-Math.PI/2),m.position.set(f.x,f.y,f.z),m.lookAt(e.position);const w=Math.atan2(r.y-h.y,r.x-h.x);w>Math.PI/2||w<-Math.PI/2?m.rotation.set(Math.PI,0,-w):m.rotation.set(0,0,w),h.distanceTo(r)<D?m.text=gt(O.edge_type,Pt):m.text=O.edge_type}})}),o.jsx("group",{ref:i,children:t.map(p=>o.jsxs("group",{children:[o.jsx(vt,{color:"white",end:[0,0,0],lineWidth:2,start:[0,0,0]}),o.jsx(vt,{color:"white",end:[0,0,0],lineWidth:2,start:[0,0,0]}),o.jsxs("mesh",{position:new L(0,0,0),children:[o.jsx("coneGeometry",{args:[Yn,kt,32]}),o.jsx("meshBasicMaterial",{color:"white"})]}),o.jsx(It,{anchorX:"center",anchorY:"middle",color:"white",fontSize:4,lineHeight:1,maxWidth:20,rotation:[0,0,0],textAlign:"center",children:gt(p.edge_type,Pt)})]},p.ref_id))})};Rt.displayName="Lines";const Wn=["#ff13c9","#5af0ff","#3233ff","#c2f0c2","#ff6666","#99ccff","#ffb3b3"];new fo(2,2,2);const Bt=x.memo(({node:t,setSelectedNode:s,onSimulationUpdate:i,isSelected:e})=>{var r;const c=x.useRef(null);console.log(e);const{size:a,camera:f}=K(),d=Eo(h=>{const{xy:[p,v],down:O,dragging:b,first:C,elapsedTime:P}=h;if(!(!b||C||P<100)&&O&&c.current){i();const T=(p-a.left)/window.innerWidth*a.width,A=(v-a.top)/window.innerHeight*a.height,S=new L(T/a.width*2-1,-A/a.height*2+1,0).unproject(f).multiply(new L(1,1,0)).clone();t.fx=S.x,t.fy=S.y}});Me(()=>{c.current&&c.current.position.set(t.x||0,t.y||0,0)});const l=Wn[(r=t==null?void 0:t.children)==null?void 0:r.length]||"red",y=h=>{h.stopPropagation(),s()};return o.jsxs("mesh",{ref:c,onClick:y,...d(),position:new L(t.x,t.y,0),children:[o.jsx(Vn,{args:[Ge,30,20],children:o.jsx("meshStandardMaterial",{attach:"material",color:l})}),o.jsx(It,{...Bo,color:"#000",fontSize:2,children:t.type})]})});Bt.displayName="Node";const Gn=({simulation:t,setSelectedSchemaId:s,selectedId:i,setIsAddEdgeNode:e})=>{const[c]=zt(f=>[f.schemas]),a=()=>{t&&(t.alpha(.05),t.restart())};return o.jsx(o.Fragment,{children:c.map((f,d)=>{const l=t.nodes()[d];return l?o.jsx(Bt,{isSelected:l.ref_id===i,node:l,onSimulationUpdate:a,setSelectedNode:()=>{e(!1),s(l.ref_id)}},l.ref_id):null})})},Hn=({schemasWithPositions:t,filteredLinks:s,setSelectedSchemaId:i,selectedSchemaId:e,setIsAddEdgeNode:c})=>{const[a,f]=x.useState(null),d=Et(t),l=Et(s);return x.useEffect(()=>{if(!t.length||!s.length)return;const y=structuredClone(t),r=structuredClone(s);if(a){d&&d.length!==t.length&&l&&l.length!==s.length&&(a.nodes(y).force("link",dt(r).id(p=>p.ref_id)).force("charge",ut()).force("center",pt()).force("collide",ft(Ge+1)).alpha(.5).restart(),f({...a}));return}const h=ho(y).force("link",dt(r).id(p=>p.ref_id)).force("charge",ut()).force("center",pt()).force("collide",ft(0));f(h)},[t,a,s,d,l]),Me(()=>{}),a?o.jsxs(o.Fragment,{children:[o.jsx(Rt,{links:s,nodes:a.nodes()}),o.jsx(Gn,{selectedId:e,setIsAddEdgeNode:c,setSelectedSchemaId:i,simulation:a})]}):null},De=new mo(0),Xn=({selectedSchemaId:t,links:s,schemasWithPositions:i,setSelectedSchemaId:e,setIsAddEdgeNode:c})=>o.jsxs(Ro,{camera:{zoom:1,position:[0,0,200]},id:"schema-canvas",linear:!0,orthographic:!0,children:[o.jsx("color",{args:[De.r,De.g,De.b],attach:"background"}),go&&o.jsx(Fo,{position:"right-bottom"}),o.jsx(Bn,{enableRotate:!1,enableZoom:!0}),o.jsx(Vo,{}),o.jsx(Hn,{filteredLinks:s,schemasWithPositions:i,selectedSchemaId:t,setIsAddEdgeNode:c,setSelectedSchemaId:e})]}),Zn=({onCreateNew:t,onAddEdgeNode:s})=>o.jsxs(Kn,{children:[o.jsx(qn,{children:"BLUEPRINT"}),o.jsxs(Ct,{"data-testid":"add-schema-type",onClick:t,children:[o.jsx(Tt,{children:o.jsx(xt,{})}),o.jsx(q,{children:"Add Type"})]}),o.jsxs(Ct,{"data-testid":"add-edge",onClick:s,children:[o.jsx(Tt,{children:o.jsx(xt,{})}),o.jsx(q,{children:"Add Edge"})]})]}),Kn=I(k).attrs({align:"flex-start",direction:"column",justify:"flex-start"})`
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
`,Ct=I(k).attrs({align:"center",justify:"center",p:0})`
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

  ${q} {
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

    ${q} {
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
`,qn=I(k)`
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
`,Tt=I(k)`
  justify-content: center;
  align-items: center;
  font-size: 24px;
`,Qn={type:"",parent:""},St=({onSelect:t,selectedValue:s,dataTestId:i})=>{const e=Ue({mode:"onChange",defaultValues:Qn}),{watch:c,setValue:a}=e,[f,d]=x.useState([]),[l,y]=x.useState(!1),r=b=>{a("parent",(b==null?void 0:b.value)||""),t(b==null?void 0:b.value)},h=()=>{a("parent",""),t("")},p=b=>b.charAt(0).toUpperCase()+b.slice(1);x.useEffect(()=>{(async()=>{y(!0);try{const P=(await _t()).schemas.filter(T=>!T.is_deleted&&T.type).map(T=>(T==null?void 0:T.type)==="thing"?{label:"No Parent",value:T.type}:{label:p(T.type),value:T.type});d(P)}catch(C){console.warn(C)}finally{y(!1)}})()},[]);const v=c("parent"),O=()=>f==null?void 0:f.find(b=>b.value===v);return s?o.jsxs(k,{align:"center",basis:"100%",direction:"row",grow:1,shrink:1,children:[o.jsx("span",{children:s}),o.jsx(Yo,{onClick:h,size:"medium",children:o.jsx(We,{})})]}):o.jsx(Ce,{dataTestId:i,isLoading:l,onSelect:r,options:f||Co,selectedValue:O()})},Jn=({selectedType:t,selectedToNode:s,setIsSwapped:i,isSwapped:e,selectedFromNode:c,setSelectedFromNode:a,setSelectedToNode:f})=>{const d=()=>{i()};return o.jsxs(k,{mb:20,children:[o.jsx(k,{align:"center",direction:"row",justify:"space-between",mb:35,children:o.jsx(k,{align:"center",direction:"row",children:o.jsx(ts,{children:"Add Edge"})})}),o.jsxs(os,{swap:e,children:[o.jsx(k,{children:o.jsxs(Ot,{children:[o.jsx(Mt,{children:e?"To":"From"}),o.jsx(St,{dataTestId:"from_node",onSelect:a,selectedValue:c})]})}),o.jsxs(k,{my:25,children:[o.jsx(ns,{children:"Type"}),o.jsx(Te,{id:"cy-item-name",maxLength:250,name:"type",placeholder:"Enter type name",rules:{...ke},value:t})]}),o.jsx(k,{children:o.jsxs(Ot,{children:[o.jsx(Mt,{children:e?"From":"To"}),o.jsx(St,{dataTestId:"to_node",onSelect:f,selectedValue:s})]})}),o.jsxs(es,{children:[o.jsx(ss,{children:o.jsx(To,{})}),o.jsx(is,{onClick:d,children:o.jsx(So,{})}),o.jsx(rs,{children:o.jsx(Oo,{})})]})]})]})},es=I.div`
  position: absolute;
  top: 26px;
  bottom: 26px;
  left: 4px;
  width: 35px;
  border-left: 1.5px solid #6b7a8d4d;
  border-top: 1.5px solid #6b7a8d4d;
  border-bottom: 1.5px solid #6b7a8d4d;
  border-radius: 12px 0 0 12px;
`,ts=I(q)`
  font-size: 22px;
  font-weight: 600;
`,os=I.div`
  position: relative;
  color: white;
  font-family: 'Barlow';
  display: flex;
  flex-direction: ${t=>t.swap?"column-reverse":"column"};
  margin-bottom: 10px;
  padding-left: 38px;
`,Ot=I.div`
  position: relative;
  width: 100%;
  padding: 15px;
  gap: 10px;
  border-radius: 6px;
  border: 1.4px solid #6b7a8d4d;
  opacity: 1;
  display: flex;
  align-items: center;
`,ns=I.label`
  color: #bac1c6;
  font-size: 13px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0.01em;
  text-align: left;
  margin-bottom: 6px;
`,Mt=I.label`
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
`,ss=I.div`
  position: absolute;
  top: 0;
  right: 0;
  transform: translateY(-50%) translateX(50%);
  color: #23252f;
`,is=I.div`
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
`,rs=I.div`
  position: absolute;
  bottom: 0;
  right: 0;
  transform: translateY(10px) translateX(3px);
  color: #6b7a8d;
  line-height: 1;
`,as=({onCancel:t})=>{const s=Ue({mode:"onChange"}),[i,e]=x.useState(!1),[c,a]=x.useState(""),[f,d]=x.useState(!1),[l,y]=x.useState(""),[r,h]=x.useState(""),p=s.watch("type");x.useEffect(()=>{a(p)},[p]);const v=s.handleSubmit(async b=>{if(!r||!l)return;e(!0);const C={source:l,target:r,edge_type:b.type};try{await xo(C)}catch(P){console.warn("API Error:",P)}finally{e(!1),t()}}),O=i||!r||!l||!c;return o.jsx($t,{...s,children:o.jsxs("form",{id:"add-type-form",onSubmit:v,children:[o.jsx(Jn,{isSwapped:f,selectedFromNode:l,selectedToNode:r,selectedType:c,setIsSwapped:()=>d(!f),setSelectedFromNode:y,setSelectedToNode:h}),o.jsxs(cs,{color:"secondary",disabled:O,onClick:v,size:"large",variant:"contained",children:["Confirm",i&&o.jsxs(ls,{children:[" ",o.jsx(xe,{color:R.lightGray,size:12})," "]})]})]})})},cs=I(Oe)`
  width: 293px !important;
  margin: 0 0 10px 35px !important;
`,ls=I.span`
  margin-top: 2px;
`,ds=({setIsAddEdgeNode:t})=>{const s=()=>{t(!1)};return o.jsxs(k,{children:[o.jsx(k,{direction:"row",justify:"flex-end",children:o.jsx(us,{"data-testid":"close-sidebar-sub-view",onClick:s,children:o.jsx(We,{})})}),o.jsx(as,{onCancel:s})]})},us=I(k)`
  font-size: 32px;
  color: ${R.white};
  cursor: pointer;
`,ps=()=>{const[t,s]=x.useState(""),[i,e]=x.useState(!1),[c,a]=x.useState(!1),[f,d]=x.useState(!1),[l,y]=x.useState(!1),[r,h,p,v]=zt(m=>[m.schemas,m.links,m.setSchemas,m.setSchemaLinks]);x.useEffect(()=>{(async()=>{a(!0);try{const g=await ht();p(g.schemas.filter(S=>S.ref_id&&!S.is_deleted&&S.ref_id)),v(g.edges),a(!1)}catch(g){console.error("Error fetching data:",g),a(!1)}})()},[p,v]);const O=m=>{if(r.some(S=>S.ref_id===m.ref_id))p(r.map(S=>S.ref_id===m.ref_id?{...m,children:[]}:S));else{p([...r,{...m,children:[]}]);const S=r.find(z=>m.parent===z.type);v([...h,{ref_id:`new-link-${h.length}`,edge_type:"CHILD_OF",source:m.ref_id||"new",target:(S==null?void 0:S.ref_id)||"new"}])}},b=async()=>{const m=await ht();p(m.schemas.filter(g=>g.ref_id&&!g.is_deleted&&g.ref_id)),v(m.edges)},C=m=>{p(r.filter(g=>g.type!==m))},P=r.map(m=>({...m,children:r.filter(g=>g.parent===m.type).map(g=>g.ref_id||"")})),T=h.filter(m=>m.edge_type==="CHILD_OF"&&P.some(g=>g.ref_id===m.source)&&P.some(g=>g.ref_id===m.target)),A=r.find(m=>m.ref_id===t)||null;return c?o.jsx(k,{align:"center",basis:"100%",grow:1,justify:"center",shrink:1,children:o.jsx(xe,{color:R.white})}):o.jsx(o.Fragment,{children:o.jsxs(k,{align:"stretch",direction:"row",grow:1,children:[o.jsx(k,{ml:-20,my:-20,children:o.jsx(Zn,{onAddEdgeNode:()=>{d(!0),e(!1),s("")},onCreateNew:()=>{d(!1),e(!0),s("")}})}),o.jsx(k,{children:A||i?o.jsx(Nt,{children:o.jsx(An,{graphLoading:l,onDelete:C,onSchemaCreate:O,onSchemaUpdate:b,selectedSchema:A,setGraphLoading:y,setIsCreateNew:e,setSelectedSchemaId:s})}):null}),o.jsx(k,{children:f?o.jsx(Nt,{children:o.jsx(ds,{setIsAddEdgeNode:d})}):null}),o.jsx(fs,{direction:"row",grow:1,children:o.jsx(hs,{children:l?o.jsx(k,{align:"center",basis:"100%",grow:1,justify:"center",shrink:1,children:o.jsx(xe,{color:R.white})}):o.jsx(Xn,{links:T,schemasWithPositions:P,selectedSchemaId:t,setIsAddEdgeNode:d,setSelectedSchemaId:s})})})]})})},fs=I(k)`
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
`,Nt=I(k)`
  width: 100%;
  max-width: 400px;
  background: ${R.BG1};
  padding: 16px;
  border-top-right-radius: 16px;
  border-bottom-right-radius: 16px;
  flex-grow: 1;
  flex-shrink: 1;
  min-width: 300px;
  overflow: auto;
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
`,hs=I(k)`
  flex: 1 1 100%;
`,ms=()=>{const{close:t}=Lt("blueprintGraph"),s=()=>{t()};return o.jsx(bo,{background:"black",id:"blueprintGraph",kind:"full",onClose:s,preventOutsideClose:!0,children:o.jsx(ps,{})})},Bs=x.memo(ms);export{Bs as BlueprintModal};
