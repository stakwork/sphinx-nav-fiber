import{g as Re,a as ze,s as ae,_ as z,a9 as Qt,r as m,b as Be,j as o,d as Fe,c as ie,e as Ve,u as Ot,aM as Jt,b4 as Se,b5 as Ye,a7 as at,b6 as eo,b7 as to,a0 as oo,f as A,F as v,h as I,D as ke,a_ as no,T as K,B as Mt,N as Ce,aY as ue,a$ as Nt,b8 as so,b9 as ro,ba as io,Z as $,bb as le,bc as de,ap as ct,bd as je,be as ve,bf as lt,bg as X,bh as ao,ar as co,bi as dt,bj as ut,bk as pt,bl as ft,bm as lo,am as uo,W as po,bn as fo,bo as ht}from"./index-7b63cb4a.js";import{B as ho}from"./index-4a55926a.js";import{q as mo,r as go,i as xo,C as xe,I as bo,B as Oe,c as Ue,b as Ge,F as $t,s as yo}from"./react-toastify.esm-0954c8b1.js";import{e as wo,A as Pe}from"./index-76329541.js";import{T as Te}from"./index-10171590.js";import{c as mt,d as jo,a as vo,N as Eo,F as ko,b as Co}from"./index-6d1123dc.js";import{D as Po,P as To}from"./PlusIcon-52c41a5f.js";import{p as So,c as Oo}from"./index-30d16895.js";import{u as Mo}from"./Popover-a0f987aa.js";import{u as No}from"./index-da63c902.js";import{L as $o,m as Ao,u as te,b as Me,T as Lo,C as Do}from"./constant-2e36f8c7.js";import{f as Io,P as _o,L as Ro}from"./constants-18ac0080.js";import{A as gt}from"./AddContentIcon-50660914.js";import{S as zo}from"./index-ab81e8f4.js";import"./useSlotProps-4a81fffb.js";import"./Popper-93d3fce5.js";import"./index.esm-a81337f5.js";import"./InfoIcon-282f58ab.js";import"./generateCategoricalChart-9155e1e7.js";import"./NoFilterResultIcon-ac3614ed.js";import"./index-b064ac59.js";import"./CheckIcon-c01ed472.js";function Bo(t){return Re("PrivateSwitchBase",t)}ze("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);const Fo=["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","disableFocusRipple","edge","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"],Vo=t=>{const{classes:s,checked:r,disabled:e,edge:l}=t,i={root:["root",r&&"checked",e&&"disabled",l&&`edge${ie(l)}`],input:["input"]};return Ve(i,Bo,s)},Yo=ae(mo)(({ownerState:t})=>z({padding:9,borderRadius:"50%"},t.edge==="start"&&{marginLeft:t.size==="small"?-3:-12},t.edge==="end"&&{marginRight:t.size==="small"?-3:-12})),Uo=ae("input",{shouldForwardProp:Qt})({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),Go=m.forwardRef(function(s,r){const{autoFocus:e,checked:l,checkedIcon:i,className:p,defaultChecked:a,disabled:d,disableFocusRipple:b=!1,edge:c=!1,icon:h,id:f,inputProps:y,inputRef:P,name:E,onBlur:S,onChange:C,onFocus:O,readOnly:L,required:g=!1,tabIndex:x,type:T,value:_}=s,D=Be(s,Fo),[W,k]=No({controlled:l,default:!!a,name:"SwitchBase",state:"checked"}),B=Mo(),fe=F=>{O&&O(F),B&&B.onFocus&&B.onFocus(F)},oe=F=>{S&&S(F),B&&B.onBlur&&B.onBlur(F)},G=F=>{if(F.nativeEvent.defaultPrevented)return;const M=F.target.checked;k(M),C&&C(F,M)};let Z=d;B&&typeof Z>"u"&&(Z=B.disabled);const ce=T==="checkbox"||T==="radio",q=z({},s,{checked:W,disabled:Z,disableFocusRipple:b,edge:c}),H=Vo(q);return o.jsxs(Yo,z({component:"span",className:Fe(H.root,p),centerRipple:!0,focusRipple:!b,disabled:Z,tabIndex:null,role:void 0,onFocus:fe,onBlur:oe,ownerState:q,ref:r},D,{children:[o.jsx(Uo,z({autoFocus:e,checked:l,defaultChecked:a,className:H.input,disabled:Z,id:ce?f:void 0,name:E,onChange:G,readOnly:L,ref:P,required:g,ownerState:q,tabIndex:x,type:T},T==="checkbox"&&_===void 0?{}:{value:_},y)),W?i:h]}))}),Wo=Go,Ho=m.createContext(),xt=Ho;function Xo(t){return Re("MuiGrid",t)}const Zo=[0,1,2,3,4,5,6,7,8,9,10],Ko=["column-reverse","column","row-reverse","row"],qo=["nowrap","wrap-reverse","wrap"],ge=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12],Qo=ze("MuiGrid",["root","container","item","zeroMinWidth",...Zo.map(t=>`spacing-xs-${t}`),...Ko.map(t=>`direction-xs-${t}`),...qo.map(t=>`wrap-xs-${t}`),...ge.map(t=>`grid-xs-${t}`),...ge.map(t=>`grid-sm-${t}`),...ge.map(t=>`grid-md-${t}`),...ge.map(t=>`grid-lg-${t}`),...ge.map(t=>`grid-xl-${t}`)]),be=Qo,Jo=["className","columns","columnSpacing","component","container","direction","item","rowSpacing","spacing","wrap","zeroMinWidth"];function pe(t){const s=parseFloat(t);return`${s}${String(t).replace(String(s),"")||"px"}`}function en({theme:t,ownerState:s}){let r;return t.breakpoints.keys.reduce((e,l)=>{let i={};if(s[l]&&(r=s[l]),!r)return e;if(r===!0)i={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if(r==="auto")i={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{const p=Se({values:s.columns,breakpoints:t.breakpoints.values}),a=typeof p=="object"?p[l]:p;if(a==null)return e;const d=`${Math.round(r/a*1e8)/1e6}%`;let b={};if(s.container&&s.item&&s.columnSpacing!==0){const c=t.spacing(s.columnSpacing);if(c!=="0px"){const h=`calc(${d} + ${pe(c)})`;b={flexBasis:h,maxWidth:h}}}i=z({flexBasis:d,flexGrow:0,maxWidth:d},b)}return t.breakpoints.values[l]===0?Object.assign(e,i):e[t.breakpoints.up(l)]=i,e},{})}function tn({theme:t,ownerState:s}){const r=Se({values:s.direction,breakpoints:t.breakpoints.values});return Ye({theme:t},r,e=>{const l={flexDirection:e};return e.indexOf("column")===0&&(l[`& > .${be.item}`]={maxWidth:"none"}),l})}function At({breakpoints:t,values:s}){let r="";Object.keys(s).forEach(l=>{r===""&&s[l]!==0&&(r=l)});const e=Object.keys(t).sort((l,i)=>t[l]-t[i]);return e.slice(0,e.indexOf(r))}function on({theme:t,ownerState:s}){const{container:r,rowSpacing:e}=s;let l={};if(r&&e!==0){const i=Se({values:e,breakpoints:t.breakpoints.values});let p;typeof i=="object"&&(p=At({breakpoints:t.breakpoints.values,values:i})),l=Ye({theme:t},i,(a,d)=>{var b;const c=t.spacing(a);return c!=="0px"?{marginTop:`-${pe(c)}`,[`& > .${be.item}`]:{paddingTop:pe(c)}}:(b=p)!=null&&b.includes(d)?{}:{marginTop:0,[`& > .${be.item}`]:{paddingTop:0}}})}return l}function nn({theme:t,ownerState:s}){const{container:r,columnSpacing:e}=s;let l={};if(r&&e!==0){const i=Se({values:e,breakpoints:t.breakpoints.values});let p;typeof i=="object"&&(p=At({breakpoints:t.breakpoints.values,values:i})),l=Ye({theme:t},i,(a,d)=>{var b;const c=t.spacing(a);return c!=="0px"?{width:`calc(100% + ${pe(c)})`,marginLeft:`-${pe(c)}`,[`& > .${be.item}`]:{paddingLeft:pe(c)}}:(b=p)!=null&&b.includes(d)?{}:{width:"100%",marginLeft:0,[`& > .${be.item}`]:{paddingLeft:0}}})}return l}function sn(t,s,r={}){if(!t||t<=0)return[];if(typeof t=="string"&&!Number.isNaN(Number(t))||typeof t=="number")return[r[`spacing-xs-${String(t)}`]];const e=[];return s.forEach(l=>{const i=t[l];Number(i)>0&&e.push(r[`spacing-${l}-${String(i)}`])}),e}const rn=ae("div",{name:"MuiGrid",slot:"Root",overridesResolver:(t,s)=>{const{ownerState:r}=t,{container:e,direction:l,item:i,spacing:p,wrap:a,zeroMinWidth:d,breakpoints:b}=r;let c=[];e&&(c=sn(p,b,s));const h=[];return b.forEach(f=>{const y=r[f];y&&h.push(s[`grid-${f}-${String(y)}`])}),[s.root,e&&s.container,i&&s.item,d&&s.zeroMinWidth,...c,l!=="row"&&s[`direction-xs-${String(l)}`],a!=="wrap"&&s[`wrap-xs-${String(a)}`],...h]}})(({ownerState:t})=>z({boxSizing:"border-box"},t.container&&{display:"flex",flexWrap:"wrap",width:"100%"},t.item&&{margin:0},t.zeroMinWidth&&{minWidth:0},t.wrap!=="wrap"&&{flexWrap:t.wrap}),tn,on,nn,en);function an(t,s){if(!t||t<=0)return[];if(typeof t=="string"&&!Number.isNaN(Number(t))||typeof t=="number")return[`spacing-xs-${String(t)}`];const r=[];return s.forEach(e=>{const l=t[e];if(Number(l)>0){const i=`spacing-${e}-${String(l)}`;r.push(i)}}),r}const cn=t=>{const{classes:s,container:r,direction:e,item:l,spacing:i,wrap:p,zeroMinWidth:a,breakpoints:d}=t;let b=[];r&&(b=an(i,d));const c=[];d.forEach(f=>{const y=t[f];y&&c.push(`grid-${f}-${String(y)}`)});const h={root:["root",r&&"container",l&&"item",a&&"zeroMinWidth",...b,e!=="row"&&`direction-xs-${String(e)}`,p!=="wrap"&&`wrap-xs-${String(p)}`,...c]};return Ve(h,Xo,s)},ln=m.forwardRef(function(s,r){const e=Ot({props:s,name:"MuiGrid"}),{breakpoints:l}=Jt(),i=wo(e),{className:p,columns:a,columnSpacing:d,component:b="div",container:c=!1,direction:h="row",item:f=!1,rowSpacing:y,spacing:P=0,wrap:E="wrap",zeroMinWidth:S=!1}=i,C=Be(i,Jo),O=y||P,L=d||P,g=m.useContext(xt),x=c?a||12:g,T={},_=z({},C);l.keys.forEach(k=>{C[k]!=null&&(T[k]=C[k],delete _[k])});const D=z({},i,{columns:x,container:c,direction:h,item:f,rowSpacing:O,columnSpacing:L,wrap:E,zeroMinWidth:S,spacing:P},T,{breakpoints:l.keys}),W=cn(D);return o.jsx(xt.Provider,{value:x,children:o.jsx(rn,z({ownerState:D,className:Fe(W.root,p),as:b,ref:r},_))})}),se=ln;function dn(t){return Re("MuiSwitch",t)}const un=ze("MuiSwitch",["root","edgeStart","edgeEnd","switchBase","colorPrimary","colorSecondary","sizeSmall","sizeMedium","checked","disabled","input","thumb","track"]),Y=un,pn=["className","color","edge","size","sx"],fn=t=>{const{classes:s,edge:r,size:e,color:l,checked:i,disabled:p}=t,a={root:["root",r&&`edge${ie(r)}`,`size${ie(e)}`],switchBase:["switchBase",`color${ie(l)}`,i&&"checked",p&&"disabled"],thumb:["thumb"],track:["track"],input:["input"]},d=Ve(a,dn,s);return z({},s,d)},hn=ae("span",{name:"MuiSwitch",slot:"Root",overridesResolver:(t,s)=>{const{ownerState:r}=t;return[s.root,r.edge&&s[`edge${ie(r.edge)}`],s[`size${ie(r.size)}`]]}})(({ownerState:t})=>z({display:"inline-flex",width:34+12*2,height:14+12*2,overflow:"hidden",padding:12,boxSizing:"border-box",position:"relative",flexShrink:0,zIndex:0,verticalAlign:"middle","@media print":{colorAdjust:"exact"}},t.edge==="start"&&{marginLeft:-8},t.edge==="end"&&{marginRight:-8},t.size==="small"&&{width:40,height:24,padding:7,[`& .${Y.thumb}`]:{width:16,height:16},[`& .${Y.switchBase}`]:{padding:4,[`&.${Y.checked}`]:{transform:"translateX(16px)"}}})),mn=ae(Wo,{name:"MuiSwitch",slot:"SwitchBase",overridesResolver:(t,s)=>{const{ownerState:r}=t;return[s.switchBase,{[`& .${Y.input}`]:s.input},r.color!=="default"&&s[`color${ie(r.color)}`]]}})(({theme:t})=>({position:"absolute",top:0,left:0,zIndex:1,color:t.vars?t.vars.palette.Switch.defaultColor:`${t.palette.mode==="light"?t.palette.common.white:t.palette.grey[300]}`,transition:t.transitions.create(["left","transform"],{duration:t.transitions.duration.shortest}),[`&.${Y.checked}`]:{transform:"translateX(20px)"},[`&.${Y.disabled}`]:{color:t.vars?t.vars.palette.Switch.defaultDisabledColor:`${t.palette.mode==="light"?t.palette.grey[100]:t.palette.grey[600]}`},[`&.${Y.checked} + .${Y.track}`]:{opacity:.5},[`&.${Y.disabled} + .${Y.track}`]:{opacity:t.vars?t.vars.opacity.switchTrackDisabled:`${t.palette.mode==="light"?.12:.2}`},[`& .${Y.input}`]:{left:"-100%",width:"300%"}}),({theme:t,ownerState:s})=>z({"&:hover":{backgroundColor:t.vars?`rgba(${t.vars.palette.action.activeChannel} / ${t.vars.palette.action.hoverOpacity})`:at(t.palette.action.active,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},s.color!=="default"&&{[`&.${Y.checked}`]:{color:(t.vars||t).palette[s.color].main,"&:hover":{backgroundColor:t.vars?`rgba(${t.vars.palette[s.color].mainChannel} / ${t.vars.palette.action.hoverOpacity})`:at(t.palette[s.color].main,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${Y.disabled}`]:{color:t.vars?t.vars.palette.Switch[`${s.color}DisabledColor`]:`${t.palette.mode==="light"?eo(t.palette[s.color].main,.62):to(t.palette[s.color].main,.55)}`}},[`&.${Y.checked} + .${Y.track}`]:{backgroundColor:(t.vars||t).palette[s.color].main}})),gn=ae("span",{name:"MuiSwitch",slot:"Track",overridesResolver:(t,s)=>s.track})(({theme:t})=>({height:"100%",width:"100%",borderRadius:14/2,zIndex:-1,transition:t.transitions.create(["opacity","background-color"],{duration:t.transitions.duration.shortest}),backgroundColor:t.vars?t.vars.palette.common.onBackground:`${t.palette.mode==="light"?t.palette.common.black:t.palette.common.white}`,opacity:t.vars?t.vars.opacity.switchTrack:`${t.palette.mode==="light"?.38:.3}`})),xn=ae("span",{name:"MuiSwitch",slot:"Thumb",overridesResolver:(t,s)=>s.thumb})(({theme:t})=>({boxShadow:(t.vars||t).shadows[1],backgroundColor:"currentColor",width:20,height:20,borderRadius:"50%"})),bn=m.forwardRef(function(s,r){const e=Ot({props:s,name:"MuiSwitch"}),{className:l,color:i="primary",edge:p=!1,size:a="medium",sx:d}=e,b=Be(e,pn),c=z({},e,{color:i,edge:p,size:a}),h=fn(c),f=o.jsx(xn,{className:h.thumb,ownerState:c});return o.jsxs(hn,{className:Fe(h.root,l),sx:d,ownerState:c,children:[o.jsx(mn,z({type:"checkbox",icon:f,checkedIcon:f,ref:r,ownerState:c},b,{classes:z({},h,{root:h.switchBase})})),o.jsx(gn,{className:h.track,ownerState:c})]})}),yn=bn,wn={schemas:[],links:[]},Lt=oo(t=>({...wn,setSchemas:s=>{t({schemas:s})},setSchemaLinks:s=>{t({links:s})}})),jn=/^[a-z0-9_]+$/,vn=({parentParam:t})=>{const[s,r]=m.useState(!1),[e,l]=m.useState([]),{fields:i,append:p,replace:a,remove:d}=go({name:"attributes"}),{setValue:b,watch:c}=xo();return m.useEffect(()=>{const h=async()=>{try{let f=[{required:!1,type:"string",key:""}];if(t!==jo.value.toLowerCase()){r(!0);const y=await no(t);f=So(y)}f=f.filter(y=>y.key!=="node_key"),a(f),l(f)}catch(f){console.warn(f)}finally{r(!1)}};e.length===0&&h()},[t,b,a,e.length]),o.jsxs(o.Fragment,{children:[s?o.jsx(v,{align:"center",children:o.jsx(xe,{color:I.SECONDARY_BLUE,size:"30"})}):o.jsx(En,{py:8,children:o.jsx(se,{container:!0,spacing:2,children:i.map((h,f)=>{const y=c(`attributes[${f}].type`),P=c(`attributes[${f}].required`),E=h.isNew||!1,S=["name"].includes(c(`attributes[${f}].key`));return o.jsxs(m.Fragment,{children:[o.jsx(se,{item:!0,xs:5,children:o.jsx(Te,{autoComplete:"off",className:"text-input",disabled:!E,id:"cy-item-name",maxLength:50,name:`attributes.${f}.key`,placeholder:"Enter value",rules:{...ke,pattern:{message:"Please avoid special characters, spaces and uppercase",value:jn}}})}),o.jsx(se,{item:!0,xs:4,children:o.jsx(Pe,{disabled:S,onSelect:C=>b(`attributes[${f}].type`,C==null?void 0:C.value),options:mt,selectedValue:mt.find(C=>C.value===y)})}),o.jsxs(se,{item:!0,xs:3,children:[o.jsx(yn,{checked:P,disabled:S,name:`attributes.${f}.required`,onChange:C=>b(`attributes[${f}].required`,C.target.checked),size:"small"}),!S&&o.jsx(bo,{onClick:()=>d(f),children:o.jsx(Po,{})})]})]},h.id)})})}),o.jsx(v,{align:"flex-start",py:12,children:o.jsx(Oe,{onClick:()=>p({key:"",type:"string",required:!0,isNew:!0}),size:"medium",startIcon:o.jsx(To,{}),variant:"contained",children:"Add Attribute"})})]})},En=A(v)`
  overflow-y: auto;
  width: calc(100% + 20px);
  max-height: calc(80vh - 300px);
`,kn=({parent:t})=>{const s=t;return o.jsxs(v,{children:[o.jsx(v,{direction:"row",mb:10,children:o.jsxs(se,{container:!0,spacing:2,children:[o.jsx(se,{item:!0,xs:5,children:o.jsx(De,{style:{marginRight:180},children:"Attributes"})}),o.jsx(se,{item:!0,xs:4,children:o.jsx(De,{style:{marginRight:130},children:"Type"})}),o.jsx(se,{item:!0,xs:3,children:o.jsx(De,{children:"Required"})})]})}),s&&o.jsx(vn,{parentParam:s},s)]})},De=A(K)`
  font-size: 15px;
  color: gray;
`,Cn={type:"",parent:""},Pn=async(t,s=!1)=>{try{const{attributes:r,...e}=t,l={...e,attributes:Oo(r)};let i;if(s?i=await Ce.put("/schema",JSON.stringify(l),{}):i=await Ce.post("/schema",JSON.stringify({...l,node_key:"name"}),{}),i.status!=="success")throw new Error("error");return i==null?void 0:i.ref_id}catch(r){let e=ue;if(r.status===400){const l=await r.json();e=l.errorCode||(l==null?void 0:l.status)||ue}else r instanceof Error&&(e=r.message);throw new Error(e)}},Tn=t=>t.charAt(0).toUpperCase()+t.slice(1),bt=async(t,s)=>{try{const i=((await Nt()).schemas||[]).filter(p=>!p.is_deleted&&p.type&&(!s||s(p))).map(p=>p.type==="thing"?{label:"No Parent",value:p.type}:{label:Tn(p.type),value:p.type});t(i)}catch(r){console.warn(r)}},Sn=({graphLoading:t,onSchemaCreate:s,selectedSchema:r,onDelete:e,setSelectedSchemaId:l,setGraphLoading:i,setIsCreateNew:p,onSchemaUpdate:a})=>{const{close:d,visible:b}=Mt("addType"),c=Ue({mode:"onChange",defaultValues:r?{type:r.type,parent:r.parent}:Cn}),{watch:h,setValue:f,reset:y,getValues:P}=c,[E,S]=m.useState(!1),[C,O]=m.useState(!1),[L,g]=m.useState(null),[x,T]=m.useState(!1),[_,D]=m.useState(null),[W,k]=m.useState(""),[B,fe]=m.useState(null);m.useEffect(()=>()=>{y()},[b,y]);const oe=()=>{p(!1),l("")};m.useEffect(()=>{r||(O(!0),bt(g).finally(()=>O(!1)))},[r]),m.useEffect(()=>{r&&(f("type",r==null?void 0:r.type),f("parent",r.parent),bt(D,M=>M.type!==r.type&&M.type!==r.parent))},[r,f]);const G=h("parent"),Z=()=>{d()},ce=async()=>{if(r!=null&&r.type)try{await Ce.delete(`/schema/${r.ref_id}`),e(r.type),d()}catch(M){let V=ue;if((M==null?void 0:M.status)===400){const U=await M.json();V=U.errorCode||(U==null?void 0:U.status)||ue}else M instanceof Error&&(V=M.message);fe(V)}finally{p(!1)}},q=c.handleSubmit(async M=>{if(!G){T(!0);return}S(!0);try{if(M.type!==(r==null?void 0:r.type)||P().parent!==(r==null?void 0:r.parent)){const U=P().parent??(r==null?void 0:r.parent);i(!0),await Ce.put(`/schema/${r==null?void 0:r.ref_id}`,JSON.stringify({type:M.type,parent:U})),await a()}const V=await Pn({...M,...r?{ref_id:r==null?void 0:r.ref_id}:{}},!!r);s({type:M.type,parent:G||"",ref_id:(r==null?void 0:r.ref_id)||V||"new"}),Z()}catch(V){let U=ue;if((V==null?void 0:V.status)===400){const re=await V.json();U=re.errorCode||(re==null?void 0:re.status)||ue}else V instanceof Error&&(U=V.message);k(U)}finally{S(!1),i(!1),p(!1)}}),H=()=>L==null?void 0:L.find(M=>M.value===G),F=()=>_==null?void 0:_.find(M=>M.value===G);return o.jsxs(v,{children:[o.jsx(v,{direction:"row",justify:"flex-end",children:o.jsx(Mn,{"data-testid":"close-sidebar-sub-view",onClick:oe,children:o.jsx(Ge,{})})}),o.jsx(v,{children:o.jsx($t,{...c,children:o.jsxs("form",{id:"add-type-form",onSubmit:q,children:[o.jsx(v,{children:r?o.jsxs(o.Fragment,{children:[o.jsxs(v,{mb:12,children:[o.jsx(v,{mb:12,children:o.jsx(K,{children:"Name"})}),o.jsx(v,{mb:12,children:o.jsx(Te,{defaultValue:r==null?void 0:r.type,id:"cy-item-name",maxLength:250,name:"type",placeholder:"Enter type name",rules:{...ke},value:G})})]}),o.jsxs(v,{mb:12,children:[o.jsx(v,{mb:12,children:o.jsx(K,{children:"Parent"})}),o.jsx(Pe,{isLoading:C||t,onSelect:M=>{f("parent",(M==null?void 0:M.value)||""),T(!1)},options:_||[],selectedValue:F()}),W&&o.jsx(Ie,{children:W})]})]}):o.jsxs(o.Fragment,{children:[o.jsxs(v,{mb:12,children:[o.jsx(v,{mb:12,children:o.jsx(K,{children:"Select Parent"})}),o.jsx(Pe,{isLoading:C,onSelect:M=>{f("parent",(M==null?void 0:M.value)||""),T(!1)},options:L,selectedValue:H()}),x&&o.jsx(Ie,{children:"A parent type must be selected"})]}),o.jsxs(v,{children:[o.jsx(v,{mb:12,children:o.jsx(K,{children:"Type name"})}),o.jsx(v,{mb:12,children:o.jsx(Te,{id:"cy-item-name",maxLength:250,name:"type",placeholder:"Enter type name",rules:{...ke},value:G})})]})]})}),o.jsx(kn,{parent:r?r.type:G}),o.jsxs(v,{direction:"row",justify:"space-between",mt:20,children:[r?o.jsxs(v,{direction:"column",children:[o.jsx(On,{color:"secondary",onClick:ce,size:"large",style:{marginRight:20},variant:"contained",children:"Delete"}),B&&o.jsx(Ie,{children:B})]}):null,o.jsx(Oe,{color:"secondary",disabled:E||x,onClick:q,size:"large",startIcon:E?o.jsx(xe,{color:I.white,size:10}):null,variant:"contained",children:"Save"})]})]})})})]})},On=A(Oe)`
  && {
    color: ${I.primaryRed};
    background-color: rgba(237, 116, 116, 0.1);

    &:hover,
    &:active,
    &:focus {
      color: ${I.primaryRed};
      background-color: rgba(237, 116, 116, 0.2);
    }
  }
`,Mn=A(v)`
  font-size: 32px;
  color: ${I.white};
  cursor: pointer;
`,Ie=A(v)`
  font-size: 13px;
  font-family: Barlow;
  color: #ff8f80;
  line-height: 0.2px;
  margin-top: 12px;
  padding-top: 20px;
`;var Nn=Object.defineProperty,$n=(t,s,r)=>s in t?Nn(t,s,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[s]=r,w=(t,s,r)=>($n(t,typeof s!="symbol"?s+"":s,r),r);const Ee=new so,yt=new ro,An=Math.cos(70*(Math.PI/180)),wt=(t,s)=>(t%s+s)%s;let Ln=class extends io{constructor(s,r){super(),w(this,"object"),w(this,"domElement"),w(this,"enabled",!0),w(this,"target",new $),w(this,"minDistance",0),w(this,"maxDistance",1/0),w(this,"minZoom",0),w(this,"maxZoom",1/0),w(this,"minPolarAngle",0),w(this,"maxPolarAngle",Math.PI),w(this,"minAzimuthAngle",-1/0),w(this,"maxAzimuthAngle",1/0),w(this,"enableDamping",!1),w(this,"dampingFactor",.05),w(this,"enableZoom",!0),w(this,"zoomSpeed",1),w(this,"enableRotate",!0),w(this,"rotateSpeed",1),w(this,"enablePan",!0),w(this,"panSpeed",1),w(this,"screenSpacePanning",!0),w(this,"keyPanSpeed",7),w(this,"zoomToCursor",!1),w(this,"autoRotate",!1),w(this,"autoRotateSpeed",2),w(this,"reverseOrbit",!1),w(this,"reverseHorizontalOrbit",!1),w(this,"reverseVerticalOrbit",!1),w(this,"keys",{LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"}),w(this,"mouseButtons",{LEFT:le.ROTATE,MIDDLE:le.DOLLY,RIGHT:le.PAN}),w(this,"touches",{ONE:de.ROTATE,TWO:de.DOLLY_PAN}),w(this,"target0"),w(this,"position0"),w(this,"zoom0"),w(this,"_domElementKeyEvents",null),w(this,"getPolarAngle"),w(this,"getAzimuthalAngle"),w(this,"setPolarAngle"),w(this,"setAzimuthalAngle"),w(this,"getDistance"),w(this,"listenToKeyEvents"),w(this,"stopListenToKeyEvents"),w(this,"saveState"),w(this,"reset"),w(this,"update"),w(this,"connect"),w(this,"dispose"),this.object=s,this.domElement=r,this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this.getPolarAngle=()=>c.phi,this.getAzimuthalAngle=()=>c.theta,this.setPolarAngle=n=>{let u=wt(n,2*Math.PI),j=c.phi;j<0&&(j+=2*Math.PI),u<0&&(u+=2*Math.PI);let N=Math.abs(u-j);2*Math.PI-N<N&&(u<j?u+=2*Math.PI:j+=2*Math.PI),h.phi=u-j,e.update()},this.setAzimuthalAngle=n=>{let u=wt(n,2*Math.PI),j=c.theta;j<0&&(j+=2*Math.PI),u<0&&(u+=2*Math.PI);let N=Math.abs(u-j);2*Math.PI-N<N&&(u<j?u+=2*Math.PI:j+=2*Math.PI),h.theta=u-j,e.update()},this.getDistance=()=>e.object.position.distanceTo(e.target),this.listenToKeyEvents=n=>{n.addEventListener("keydown",Ae),this._domElementKeyEvents=n},this.stopListenToKeyEvents=()=>{this._domElementKeyEvents.removeEventListener("keydown",Ae),this._domElementKeyEvents=null},this.saveState=()=>{e.target0.copy(e.target),e.position0.copy(e.object.position),e.zoom0=e.object.zoom},this.reset=()=>{e.target.copy(e.target0),e.object.position.copy(e.position0),e.object.zoom=e.zoom0,e.object.updateProjectionMatrix(),e.dispatchEvent(l),e.update(),d=a.NONE},this.update=(()=>{const n=new $,u=new $(0,1,0),j=new ct().setFromUnitVectors(s.up,u),N=j.clone().invert(),R=new $,Q=new ct,ne=2*Math.PI;return function(){const it=e.object.position;j.setFromUnitVectors(s.up,u),N.copy(j).invert(),n.copy(it).sub(e.target),n.applyQuaternion(j),c.setFromVector3(n),e.autoRotate&&d===a.NONE&&G(fe()),e.enableDamping?(c.theta+=h.theta*e.dampingFactor,c.phi+=h.phi*e.dampingFactor):(c.theta+=h.theta,c.phi+=h.phi);let J=e.minAzimuthAngle,ee=e.maxAzimuthAngle;isFinite(J)&&isFinite(ee)&&(J<-Math.PI?J+=ne:J>Math.PI&&(J-=ne),ee<-Math.PI?ee+=ne:ee>Math.PI&&(ee-=ne),J<=ee?c.theta=Math.max(J,Math.min(ee,c.theta)):c.theta=c.theta>(J+ee)/2?Math.max(J,c.theta):Math.min(ee,c.theta)),c.phi=Math.max(e.minPolarAngle,Math.min(e.maxPolarAngle,c.phi)),c.makeSafe(),e.enableDamping===!0?e.target.addScaledVector(y,e.dampingFactor):e.target.add(y),e.zoomToCursor&&W||e.object.isOrthographicCamera?c.radius=U(c.radius):c.radius=U(c.radius*f),n.setFromSpherical(c),n.applyQuaternion(N),it.copy(e.target).add(n),e.object.matrixAutoUpdate||e.object.updateMatrix(),e.object.lookAt(e.target),e.enableDamping===!0?(h.theta*=1-e.dampingFactor,h.phi*=1-e.dampingFactor,y.multiplyScalar(1-e.dampingFactor)):(h.set(0,0,0),y.set(0,0,0));let ye=!1;if(e.zoomToCursor&&W){let he=null;if(e.object instanceof je&&e.object.isPerspectiveCamera){const me=n.length();he=U(me*f);const we=me-he;e.object.position.addScaledVector(_,we),e.object.updateMatrixWorld()}else if(e.object.isOrthographicCamera){const me=new $(D.x,D.y,0);me.unproject(e.object),e.object.zoom=Math.max(e.minZoom,Math.min(e.maxZoom,e.object.zoom/f)),e.object.updateProjectionMatrix(),ye=!0;const we=new $(D.x,D.y,0);we.unproject(e.object),e.object.position.sub(we).add(me),e.object.updateMatrixWorld(),he=n.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),e.zoomToCursor=!1;he!==null&&(e.screenSpacePanning?e.target.set(0,0,-1).transformDirection(e.object.matrix).multiplyScalar(he).add(e.object.position):(Ee.origin.copy(e.object.position),Ee.direction.set(0,0,-1).transformDirection(e.object.matrix),Math.abs(e.object.up.dot(Ee.direction))<An?s.lookAt(e.target):(yt.setFromNormalAndCoplanarPoint(e.object.up,e.target),Ee.intersectPlane(yt,e.target))))}else e.object instanceof ve&&e.object.isOrthographicCamera&&(e.object.zoom=Math.max(e.minZoom,Math.min(e.maxZoom,e.object.zoom/f)),e.object.updateProjectionMatrix(),ye=!0);return f=1,W=!1,ye||R.distanceToSquared(e.object.position)>b||8*(1-Q.dot(e.object.quaternion))>b?(e.dispatchEvent(l),R.copy(e.object.position),Q.copy(e.object.quaternion),ye=!1,!0):!1}})(),this.connect=n=>{n===document&&console.error('THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.'),e.domElement=n,e.domElement.style.touchAction="none",e.domElement.addEventListener("contextmenu",nt),e.domElement.addEventListener("pointerdown",et),e.domElement.addEventListener("pointercancel",tt),e.domElement.addEventListener("wheel",ot)},this.dispose=()=>{var n,u,j,N,R,Q;(n=e.domElement)==null||n.removeEventListener("contextmenu",nt),(u=e.domElement)==null||u.removeEventListener("pointerdown",et),(j=e.domElement)==null||j.removeEventListener("pointercancel",tt),(N=e.domElement)==null||N.removeEventListener("wheel",ot),(R=e.domElement)==null||R.ownerDocument.removeEventListener("pointermove",Ne),(Q=e.domElement)==null||Q.ownerDocument.removeEventListener("pointerup",$e),e._domElementKeyEvents!==null&&e._domElementKeyEvents.removeEventListener("keydown",Ae)};const e=this,l={type:"change"},i={type:"start"},p={type:"end"},a={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let d=a.NONE;const b=1e-6,c=new lt,h=new lt;let f=1;const y=new $,P=new X,E=new X,S=new X,C=new X,O=new X,L=new X,g=new X,x=new X,T=new X,_=new $,D=new X;let W=!1;const k=[],B={};function fe(){return 2*Math.PI/60/60*e.autoRotateSpeed}function oe(){return Math.pow(.95,e.zoomSpeed)}function G(n){e.reverseOrbit||e.reverseHorizontalOrbit?h.theta+=n:h.theta-=n}function Z(n){e.reverseOrbit||e.reverseVerticalOrbit?h.phi+=n:h.phi-=n}const ce=(()=>{const n=new $;return function(j,N){n.setFromMatrixColumn(N,0),n.multiplyScalar(-j),y.add(n)}})(),q=(()=>{const n=new $;return function(j,N){e.screenSpacePanning===!0?n.setFromMatrixColumn(N,1):(n.setFromMatrixColumn(N,0),n.crossVectors(e.object.up,n)),n.multiplyScalar(j),y.add(n)}})(),H=(()=>{const n=new $;return function(j,N){const R=e.domElement;if(R&&e.object instanceof je&&e.object.isPerspectiveCamera){const Q=e.object.position;n.copy(Q).sub(e.target);let ne=n.length();ne*=Math.tan(e.object.fov/2*Math.PI/180),ce(2*j*ne/R.clientHeight,e.object.matrix),q(2*N*ne/R.clientHeight,e.object.matrix)}else R&&e.object instanceof ve&&e.object.isOrthographicCamera?(ce(j*(e.object.right-e.object.left)/e.object.zoom/R.clientWidth,e.object.matrix),q(N*(e.object.top-e.object.bottom)/e.object.zoom/R.clientHeight,e.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),e.enablePan=!1)}})();function F(n){e.object instanceof je&&e.object.isPerspectiveCamera||e.object instanceof ve&&e.object.isOrthographicCamera?f/=n:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),e.enableZoom=!1)}function M(n){e.object instanceof je&&e.object.isPerspectiveCamera||e.object instanceof ve&&e.object.isOrthographicCamera?f*=n:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),e.enableZoom=!1)}function V(n){if(!e.zoomToCursor||!e.domElement)return;W=!0;const u=e.domElement.getBoundingClientRect(),j=n.clientX-u.left,N=n.clientY-u.top,R=u.width,Q=u.height;D.x=j/R*2-1,D.y=-(N/Q)*2+1,_.set(D.x,D.y,1).unproject(e.object).sub(e.object.position).normalize()}function U(n){return Math.max(e.minDistance,Math.min(e.maxDistance,n))}function re(n){P.set(n.clientX,n.clientY)}function _t(n){V(n),g.set(n.clientX,n.clientY)}function He(n){C.set(n.clientX,n.clientY)}function Rt(n){E.set(n.clientX,n.clientY),S.subVectors(E,P).multiplyScalar(e.rotateSpeed);const u=e.domElement;u&&(G(2*Math.PI*S.x/u.clientHeight),Z(2*Math.PI*S.y/u.clientHeight)),P.copy(E),e.update()}function zt(n){x.set(n.clientX,n.clientY),T.subVectors(x,g),T.y>0?F(oe()):T.y<0&&M(oe()),g.copy(x),e.update()}function Bt(n){O.set(n.clientX,n.clientY),L.subVectors(O,C).multiplyScalar(e.panSpeed),H(L.x,L.y),C.copy(O),e.update()}function Ft(n){V(n),n.deltaY<0?M(oe()):n.deltaY>0&&F(oe()),e.update()}function Vt(n){let u=!1;switch(n.code){case e.keys.UP:H(0,e.keyPanSpeed),u=!0;break;case e.keys.BOTTOM:H(0,-e.keyPanSpeed),u=!0;break;case e.keys.LEFT:H(e.keyPanSpeed,0),u=!0;break;case e.keys.RIGHT:H(-e.keyPanSpeed,0),u=!0;break}u&&(n.preventDefault(),e.update())}function Xe(){if(k.length==1)P.set(k[0].pageX,k[0].pageY);else{const n=.5*(k[0].pageX+k[1].pageX),u=.5*(k[0].pageY+k[1].pageY);P.set(n,u)}}function Ze(){if(k.length==1)C.set(k[0].pageX,k[0].pageY);else{const n=.5*(k[0].pageX+k[1].pageX),u=.5*(k[0].pageY+k[1].pageY);C.set(n,u)}}function Ke(){const n=k[0].pageX-k[1].pageX,u=k[0].pageY-k[1].pageY,j=Math.sqrt(n*n+u*u);g.set(0,j)}function Yt(){e.enableZoom&&Ke(),e.enablePan&&Ze()}function Ut(){e.enableZoom&&Ke(),e.enableRotate&&Xe()}function qe(n){if(k.length==1)E.set(n.pageX,n.pageY);else{const j=Le(n),N=.5*(n.pageX+j.x),R=.5*(n.pageY+j.y);E.set(N,R)}S.subVectors(E,P).multiplyScalar(e.rotateSpeed);const u=e.domElement;u&&(G(2*Math.PI*S.x/u.clientHeight),Z(2*Math.PI*S.y/u.clientHeight)),P.copy(E)}function Qe(n){if(k.length==1)O.set(n.pageX,n.pageY);else{const u=Le(n),j=.5*(n.pageX+u.x),N=.5*(n.pageY+u.y);O.set(j,N)}L.subVectors(O,C).multiplyScalar(e.panSpeed),H(L.x,L.y),C.copy(O)}function Je(n){const u=Le(n),j=n.pageX-u.x,N=n.pageY-u.y,R=Math.sqrt(j*j+N*N);x.set(0,R),T.set(0,Math.pow(x.y/g.y,e.zoomSpeed)),F(T.y),g.copy(x)}function Gt(n){e.enableZoom&&Je(n),e.enablePan&&Qe(n)}function Wt(n){e.enableZoom&&Je(n),e.enableRotate&&qe(n)}function et(n){var u,j;e.enabled!==!1&&(k.length===0&&((u=e.domElement)==null||u.ownerDocument.addEventListener("pointermove",Ne),(j=e.domElement)==null||j.ownerDocument.addEventListener("pointerup",$e)),qt(n),n.pointerType==="touch"?Zt(n):Ht(n))}function Ne(n){e.enabled!==!1&&(n.pointerType==="touch"?Kt(n):Xt(n))}function $e(n){var u,j,N;st(n),k.length===0&&((u=e.domElement)==null||u.releasePointerCapture(n.pointerId),(j=e.domElement)==null||j.ownerDocument.removeEventListener("pointermove",Ne),(N=e.domElement)==null||N.ownerDocument.removeEventListener("pointerup",$e)),e.dispatchEvent(p),d=a.NONE}function tt(n){st(n)}function Ht(n){let u;switch(n.button){case 0:u=e.mouseButtons.LEFT;break;case 1:u=e.mouseButtons.MIDDLE;break;case 2:u=e.mouseButtons.RIGHT;break;default:u=-1}switch(u){case le.DOLLY:if(e.enableZoom===!1)return;_t(n),d=a.DOLLY;break;case le.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(e.enablePan===!1)return;He(n),d=a.PAN}else{if(e.enableRotate===!1)return;re(n),d=a.ROTATE}break;case le.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(e.enableRotate===!1)return;re(n),d=a.ROTATE}else{if(e.enablePan===!1)return;He(n),d=a.PAN}break;default:d=a.NONE}d!==a.NONE&&e.dispatchEvent(i)}function Xt(n){if(e.enabled!==!1)switch(d){case a.ROTATE:if(e.enableRotate===!1)return;Rt(n);break;case a.DOLLY:if(e.enableZoom===!1)return;zt(n);break;case a.PAN:if(e.enablePan===!1)return;Bt(n);break}}function ot(n){e.enabled===!1||e.enableZoom===!1||d!==a.NONE&&d!==a.ROTATE||(n.preventDefault(),e.dispatchEvent(i),Ft(n),e.dispatchEvent(p))}function Ae(n){e.enabled===!1||e.enablePan===!1||Vt(n)}function Zt(n){switch(rt(n),k.length){case 1:switch(e.touches.ONE){case de.ROTATE:if(e.enableRotate===!1)return;Xe(),d=a.TOUCH_ROTATE;break;case de.PAN:if(e.enablePan===!1)return;Ze(),d=a.TOUCH_PAN;break;default:d=a.NONE}break;case 2:switch(e.touches.TWO){case de.DOLLY_PAN:if(e.enableZoom===!1&&e.enablePan===!1)return;Yt(),d=a.TOUCH_DOLLY_PAN;break;case de.DOLLY_ROTATE:if(e.enableZoom===!1&&e.enableRotate===!1)return;Ut(),d=a.TOUCH_DOLLY_ROTATE;break;default:d=a.NONE}break;default:d=a.NONE}d!==a.NONE&&e.dispatchEvent(i)}function Kt(n){switch(rt(n),d){case a.TOUCH_ROTATE:if(e.enableRotate===!1)return;qe(n),e.update();break;case a.TOUCH_PAN:if(e.enablePan===!1)return;Qe(n),e.update();break;case a.TOUCH_DOLLY_PAN:if(e.enableZoom===!1&&e.enablePan===!1)return;Gt(n),e.update();break;case a.TOUCH_DOLLY_ROTATE:if(e.enableZoom===!1&&e.enableRotate===!1)return;Wt(n),e.update();break;default:d=a.NONE}}function nt(n){e.enabled!==!1&&n.preventDefault()}function qt(n){k.push(n)}function st(n){delete B[n.pointerId];for(let u=0;u<k.length;u++)if(k[u].pointerId==n.pointerId){k.splice(u,1);return}}function rt(n){let u=B[n.pointerId];u===void 0&&(u=new X,B[n.pointerId]=u),u.set(n.pageX,n.pageY)}function Le(n){const u=n.pointerId===k[0].pointerId?k[1]:k[0];return B[u.pointerId]}r!==void 0&&this.connect(r),this.update()}};const Dn=new $,In=m.forwardRef(function({start:s=[0,0,0],end:r=[0,0,0],mid:e,segments:l=20,...i},p){const a=m.useRef(null),[d]=m.useState(()=>new ao(void 0,void 0,void 0)),b=m.useCallback((h,f,y,P=20)=>(h instanceof $?d.v0.copy(h):d.v0.set(...h),f instanceof $?d.v2.copy(f):d.v2.set(...f),y instanceof $?d.v1.copy(y):d.v1.copy(d.v0.clone().add(d.v2.clone().sub(d.v0)).add(Dn.set(0,d.v0.y-d.v2.y,0))),d.getPoints(P)),[]);m.useLayoutEffect(()=>{a.current.setPoints=(h,f,y)=>{const P=b(h,f,y);a.current.geometry&&a.current.geometry.setPositions(P.map(E=>E.toArray()).flat())}},[]);const c=m.useMemo(()=>b(s,r,e,l),[s,r,e,l]);return m.createElement($o,z({ref:Ao([a,p]),points:c},i))}),_n=m.forwardRef(({makeDefault:t,camera:s,regress:r,domElement:e,enableDamping:l=!0,onChange:i,onStart:p,onEnd:a,...d},b)=>{const c=te(x=>x.invalidate),h=te(x=>x.camera),f=te(x=>x.gl),y=te(x=>x.events),P=te(x=>x.setEvents),E=te(x=>x.set),S=te(x=>x.get),C=te(x=>x.performance),O=s||h,L=e||y.connected||f.domElement,g=m.useMemo(()=>new Ln(O),[O]);return Me(()=>{g.enabled&&g.update()},-1),m.useEffect(()=>(g.connect(L),()=>void g.dispose()),[L,r,g,c]),m.useEffect(()=>{const x=D=>{c(),r&&C.regress(),i&&i(D)},T=D=>{p&&p(D)},_=D=>{a&&a(D)};return g.addEventListener("change",x),g.addEventListener("start",T),g.addEventListener("end",_),()=>{g.removeEventListener("start",T),g.removeEventListener("end",_),g.removeEventListener("change",x)}},[i,p,a,g,c,P]),m.useEffect(()=>{if(t){const x=S().controls;return E({controls:g}),()=>E({controls:x})}},[t,g]),m.createElement("primitive",z({ref:b,object:g,enableDamping:l},d))});function Rn(t){const s=t+"Geometry";return m.forwardRef(({args:r,children:e,...l},i)=>m.createElement("mesh",z({ref:i},l),m.createElement(s,{attach:"geometry",args:r}),e))}const zn=Rn("circle"),jt=t=>{const s=m.useRef();return m.useEffect(()=>{s.current=t}),s.current},We=10,Bn=2,vt=2,Fn=(t,s,r)=>{const i=new $().subVectors(s,t).normalize().multiplyScalar(r);return new $().addVectors(t,i)},Dt=({links:t,nodes:s})=>{const r=m.useRef(null);return Me(()=>{r.current&&s&&r.current.children.forEach((e,l)=>{var E;const i=t[l];if(!i)return;const p=s.find(S=>S.ref_id===i.source),a=s.find(S=>S.ref_id===i.target),d=new $((a==null?void 0:a.x)||0,(a==null?void 0:a.y)||0,(a==null?void 0:a.z)||0),b=new $((p==null?void 0:p.x)||0,(p==null?void 0:p.y)||0,(p==null?void 0:p.z)||0),c=Fn(b,d,We+vt),h=d.clone(),f=new $().lerpVectors(h,c,0),y=e.children[0],P=e.children[1];P.position.set(c.x,c.y,c.z),P.lookAt(h),P.rotateX(-Math.PI/2),(E=y.setPoints)==null||E.call(y,h,c,f)})}),o.jsx("group",{ref:r,children:t.map(e=>o.jsxs("group",{children:[o.jsx(In,{color:"white",end:[0,0,0],lineWidth:2,start:[0,0,0]}),o.jsxs("mesh",{position:new $(0,0,0),children:[o.jsx("coneGeometry",{args:[Bn,vt,32]}),o.jsx("meshBasicMaterial",{color:"white"})]})]},e.ref_id))})};Dt.displayName="Lines";const Vn=["#ff13c9","#5af0ff","#3233ff","#c2f0c2","#ff6666","#99ccff","#ffb3b3"];new co(2,2,2);const It=m.memo(({node:t,setSelectedNode:s,onSimulationUpdate:r,isSelected:e})=>{var c;const l=m.useRef(null);console.log(e);const{size:i,camera:p}=te(),a=yo(h=>{const{xy:[f,y],down:P,dragging:E,first:S,elapsedTime:C}=h;if(!(!E||S||C<100)&&P&&l.current){r();const O=(f-i.left)/window.innerWidth*i.width,L=(y-i.top)/window.innerHeight*i.height,T=new $(O/i.width*2-1,-L/i.height*2+1,0).unproject(p).multiply(new $(1,1,0)).clone();t.fx=T.x,t.fy=T.y}});Me(()=>{l.current&&l.current.position.set(t.x||0,t.y||0,0)});const d=Vn[(c=t==null?void 0:t.children)==null?void 0:c.length]||"red",b=h=>{h.stopPropagation(),s()};return o.jsxs("mesh",{ref:l,onClick:b,...a(),position:new $(t.x,t.y,0),children:[o.jsx(zn,{args:[We,30,20],children:o.jsx("meshStandardMaterial",{attach:"material",color:d})}),o.jsx(Lo,{...Io,color:"#000",fontSize:2,children:t.type})]})});It.displayName="Node";const Yn=({simulation:t,setSelectedSchemaId:s,selectedId:r,setIsAddEdgeNode:e})=>{const[l]=Lt(p=>[p.schemas]),i=()=>{t&&(t.alpha(.05),t.restart())};return o.jsx(o.Fragment,{children:l.map((p,a)=>{const d=t.nodes()[a];return d?o.jsx(It,{isSelected:d.ref_id===r,node:d,onSimulationUpdate:i,setSelectedNode:()=>{e(!1),s(d.ref_id)}},d.ref_id):null})})},Un=({schemasWithPositions:t,filteredLinks:s,setSelectedSchemaId:r,selectedSchemaId:e,setIsAddEdgeNode:l})=>{const[i,p]=m.useState(null),a=jt(t),d=jt(s);return m.useEffect(()=>{if(!t.length||!s.length)return;const b=structuredClone(t),c=structuredClone(s);if(i){a&&a.length!==t.length&&d&&d.length!==s.length&&(i.nodes(b).force("link",dt(c).id(f=>f.ref_id)).force("charge",ut()).force("center",pt()).force("collide",ft(We+1)).alpha(.5).restart(),p({...i}));return}const h=lo(b).force("link",dt(c).id(f=>f.ref_id)).force("charge",ut()).force("center",pt()).force("collide",ft(0));p(h)},[t,i,s,a,d]),Me(()=>{}),i?o.jsxs(o.Fragment,{children:[o.jsx(Dt,{links:s,nodes:i.nodes()}),o.jsx(Yn,{selectedId:e,setIsAddEdgeNode:l,setSelectedSchemaId:r,simulation:i})]}):null},_e=new uo(0),Gn=({selectedSchemaId:t,links:s,schemasWithPositions:r,setSelectedSchemaId:e,setIsAddEdgeNode:l})=>o.jsxs(Do,{camera:{zoom:1,position:[0,0,200]},id:"schema-canvas",linear:!0,orthographic:!0,children:[o.jsx("color",{args:[_e.r,_e.g,_e.b],attach:"background"}),po&&o.jsx(_o,{position:"right-bottom"}),o.jsx(_n,{enableRotate:!1,enableZoom:!0}),o.jsx(Ro,{}),o.jsx(Un,{filteredLinks:s,schemasWithPositions:r,selectedSchemaId:t,setIsAddEdgeNode:l,setSelectedSchemaId:e})]}),Wn=({onCreateNew:t,onAddEdgeNode:s})=>o.jsxs(Hn,{children:[o.jsx(Xn,{children:"BLUEPRINT"}),o.jsxs(Et,{"data-testid":"add-schema-type",onClick:t,children:[o.jsx(kt,{children:o.jsx(gt,{})}),o.jsx(K,{children:"Add Type"})]}),o.jsxs(Et,{"data-testid":"add-edge",onClick:s,children:[o.jsx(kt,{children:o.jsx(gt,{})}),o.jsx(K,{children:"Add Edge"})]})]}),Hn=A(v).attrs({align:"flex-start",direction:"column",justify:"flex-start"})`
  flex: 1 1 auto;
  z-index: 31;
  transition: opacity 1s;
  background: ${I.BG2};
  overflow: hidden;
  max-height: 100vh;

  @media (max-width: 1440px) {
    max-height: 95.2vh;
  }

  @media (max-width: 1024px) {
    max-height: 74.8vh;
  }

  @media (max-width: 924px) {
    max-height: 73.1vh;
  }
`,Et=A(v).attrs({align:"center",justify:"center",p:0})`
  position: relative;
  width: 64px;
  height: 58px;
  padding: 0;
  flex-direction: row;
  color: ${I.GRAY6};
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

  ${K} {
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
    color: ${I.white};

    &:before {
      width: 3px;
      height: 32px;
      background-color: ${I.primaryBlue};
    }

    ${K} {
      display: block;
      width: min-content;
      opacity: 1;
      visibility: visible;
    }
  }

  &:active {
    color: ${I.white};
    background: ${I.black};
    &:before {
      width: 3px;
      height: 100%;
      background-color: ${I.primaryBlue};
    }
  }

  &.root {
    border-radius: 50%;
    padding: 0;
    align-items: center;
    justify-content: center;
    border: none;
  }
`,Xn=A(v)`
  background: blue;
  align-items: center;
  justify-content: center;
  background: ${I.primaryBlue};
  width: 64px;
  height: 64px;
  cursor: pointer;
  font-size: 10px;
  font-weight: 600;
  color: ${I.white};
`,kt=A(v)`
  justify-content: center;
  align-items: center;
  font-size: 24px;
`,Zn={type:"",parent:""},Ct=({onSelect:t,selectedValue:s,dataTestId:r})=>{const e=Ue({mode:"onChange",defaultValues:Zn}),{watch:l,setValue:i}=e,[p,a]=m.useState([]),[d,b]=m.useState(!1),c=E=>{i("parent",(E==null?void 0:E.value)||""),t(E==null?void 0:E.value)},h=()=>{i("parent",""),t("")},f=E=>E.charAt(0).toUpperCase()+E.slice(1);m.useEffect(()=>{(async()=>{b(!0);try{const C=(await Nt()).schemas.filter(O=>!O.is_deleted&&O.type).map(O=>(O==null?void 0:O.type)==="thing"?{label:"No Parent",value:O.type}:{label:f(O.type),value:O.type});a(C)}catch(S){console.warn(S)}finally{b(!1)}})()},[]);const y=l("parent"),P=()=>p==null?void 0:p.find(E=>E.value===y);return s?o.jsxs(v,{align:"center",basis:"100%",direction:"row",grow:1,shrink:1,children:[o.jsx("span",{children:s}),o.jsx(zo,{onClick:h,size:"medium",children:o.jsx(Ge,{})})]}):o.jsx(Pe,{dataTestId:r,isLoading:d,onSelect:c,options:p||vo,selectedValue:P()})},Kn=({selectedType:t,selectedToNode:s,setIsSwapped:r,isSwapped:e,selectedFromNode:l,setSelectedFromNode:i,setSelectedToNode:p})=>{const a=()=>{r()};return o.jsxs(v,{mb:20,children:[o.jsx(v,{align:"center",direction:"row",justify:"space-between",mb:35,children:o.jsx(v,{align:"center",direction:"row",children:o.jsx(Qn,{children:"Add Edge"})})}),o.jsxs(Jn,{swap:e,children:[o.jsx(v,{children:o.jsxs(Pt,{children:[o.jsx(Tt,{children:e?"To":"From"}),o.jsx(Ct,{dataTestId:"from_node",onSelect:i,selectedValue:l})]})}),o.jsxs(v,{my:25,children:[o.jsx(es,{children:"Type"}),o.jsx(Te,{id:"cy-item-name",maxLength:250,name:"type",placeholder:"Enter type name",rules:{...ke},value:t})]}),o.jsx(v,{children:o.jsxs(Pt,{children:[o.jsx(Tt,{children:e?"From":"To"}),o.jsx(Ct,{dataTestId:"to_node",onSelect:p,selectedValue:s})]})}),o.jsxs(qn,{children:[o.jsx(ts,{children:o.jsx(Eo,{})}),o.jsx(os,{onClick:a,children:o.jsx(ko,{})}),o.jsx(ns,{children:o.jsx(Co,{})})]})]})]})},qn=A.div`
  position: absolute;
  top: 26px;
  bottom: 26px;
  left: 4px;
  width: 35px;
  border-left: 1.5px solid #6b7a8d4d;
  border-top: 1.5px solid #6b7a8d4d;
  border-bottom: 1.5px solid #6b7a8d4d;
  border-radius: 12px 0 0 12px;
`,Qn=A(K)`
  font-size: 22px;
  font-weight: 600;
`,Jn=A.div`
  position: relative;
  color: white;
  font-family: 'Barlow';
  display: flex;
  flex-direction: ${t=>t.swap?"column-reverse":"column"};
  margin-bottom: 10px;
  padding-left: 38px;
`,Pt=A.div`
  position: relative;
  width: 100%;
  padding: 15px;
  gap: 10px;
  border-radius: 6px;
  border: 1.4px solid #6b7a8d4d;
  opacity: 1;
  display: flex;
  align-items: center;
`,es=A.label`
  color: #bac1c6;
  font-size: 13px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0.01em;
  text-align: left;
  margin-bottom: 6px;
`,Tt=A.label`
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
`,ts=A.div`
  position: absolute;
  top: 0;
  right: 0;
  transform: translateY(-50%) translateX(50%);
  color: #23252f;
`,os=A.div`
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
`,ns=A.div`
  position: absolute;
  bottom: 0;
  right: 0;
  transform: translateY(10px) translateX(3px);
  color: #6b7a8d;
  line-height: 1;
`,ss=({onCancel:t})=>{const s=Ue({mode:"onChange"}),[r,e]=m.useState(!1),[l,i]=m.useState(""),[p,a]=m.useState(!1),[d,b]=m.useState(""),[c,h]=m.useState(""),f=s.watch("type");m.useEffect(()=>{i(f)},[f]);const y=s.handleSubmit(async E=>{if(!c||!d)return;e(!0);const S={source:d,target:c,edge_type:E.type};try{await fo(S)}catch(C){console.warn("API Error:",C)}finally{e(!1),t()}}),P=r||!c||!d||!l;return o.jsx($t,{...s,children:o.jsxs("form",{id:"add-type-form",onSubmit:y,children:[o.jsx(Kn,{isSwapped:p,selectedFromNode:d,selectedToNode:c,selectedType:l,setIsSwapped:()=>a(!p),setSelectedFromNode:b,setSelectedToNode:h}),o.jsxs(rs,{color:"secondary",disabled:P,onClick:y,size:"large",variant:"contained",children:["Confirm",r&&o.jsxs(is,{children:[" ",o.jsx(xe,{color:I.lightGray,size:12})," "]})]})]})})},rs=A(Oe)`
  width: 293px !important;
  margin: 0 0 10px 35px !important;
`,is=A.span`
  margin-top: 2px;
`,as=({setIsAddEdgeNode:t})=>{const s=()=>{t(!1)};return o.jsxs(v,{children:[o.jsx(v,{direction:"row",justify:"flex-end",children:o.jsx(cs,{"data-testid":"close-sidebar-sub-view",onClick:s,children:o.jsx(Ge,{})})}),o.jsx(ss,{onCancel:s})]})},cs=A(v)`
  font-size: 32px;
  color: ${I.white};
  cursor: pointer;
`,ls=()=>{const[t,s]=m.useState(""),[r,e]=m.useState(!1),[l,i]=m.useState(!1),[p,a]=m.useState(!1),[d,b]=m.useState(!1),[c,h,f,y]=Lt(g=>[g.schemas,g.links,g.setSchemas,g.setSchemaLinks]);m.useEffect(()=>{(async()=>{i(!0);try{const x=await ht();f(x.schemas.filter(T=>T.ref_id&&!T.is_deleted&&T.ref_id)),y(x.edges),i(!1)}catch(x){console.error("Error fetching data:",x),i(!1)}})()},[f,y]);const P=g=>{if(c.some(T=>T.ref_id===g.ref_id))f(c.map(T=>T.ref_id===g.ref_id?{...g,children:[]}:T));else{f([...c,{...g,children:[]}]);const T=c.find(_=>g.parent===_.type);y([...h,{ref_id:`new-link-${h.length}`,edge_type:"CHILD_OF",source:g.ref_id||"new",target:(T==null?void 0:T.ref_id)||"new"}])}},E=async()=>{const g=await ht();f(g.schemas.filter(x=>x.ref_id&&!x.is_deleted&&x.ref_id)),y(g.edges)},S=g=>{f(c.filter(x=>x.type!==g))},C=c.map(g=>({...g,children:c.filter(x=>x.parent===g.type).map(x=>x.ref_id||"")})),O=h.filter(g=>g.edge_type==="CHILD_OF"&&C.some(x=>x.ref_id===g.source)&&C.some(x=>x.ref_id===g.target)),L=c.find(g=>g.ref_id===t)||null;return l?o.jsx(v,{align:"center",basis:"100%",grow:1,justify:"center",shrink:1,children:o.jsx(xe,{color:I.white})}):o.jsx(o.Fragment,{children:o.jsxs(v,{align:"stretch",direction:"row",grow:1,children:[o.jsx(v,{ml:-20,my:-20,children:o.jsx(Wn,{onAddEdgeNode:()=>{a(!0),e(!1),s("")},onCreateNew:()=>{a(!1),e(!0),s("")}})}),o.jsx(v,{children:L||r?o.jsx(St,{children:o.jsx(Sn,{graphLoading:d,onDelete:S,onSchemaCreate:P,onSchemaUpdate:E,selectedSchema:L,setGraphLoading:b,setIsCreateNew:e,setSelectedSchemaId:s})}):null}),o.jsx(v,{children:p?o.jsx(St,{children:o.jsx(as,{setIsAddEdgeNode:a})}):null}),o.jsx(ds,{direction:"row",grow:1,children:o.jsx(us,{children:d?o.jsx(v,{align:"center",basis:"100%",grow:1,justify:"center",shrink:1,children:o.jsx(xe,{color:I.white})}):o.jsx(Gn,{links:O,schemasWithPositions:C,selectedSchemaId:t,setIsAddEdgeNode:a,setSelectedSchemaId:s})})})]})})},ds=A(v)`
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
`,St=A(v)`
  width: 100%;
  max-width: 400px;
  background: ${I.BG1};
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
`,us=A(v)`
  flex: 1 1 100%;
`,ps=()=>{const{close:t}=Mt("blueprintGraph"),s=()=>{t()};return o.jsx(ho,{background:"black",id:"blueprintGraph",kind:"full",onClose:s,preventOutsideClose:!0,children:o.jsx(ls,{})})},_s=m.memo(ps);export{_s as BlueprintModal};
