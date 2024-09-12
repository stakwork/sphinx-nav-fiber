import{r as x,b as Ut,g as Zt,s as Se,_ as U,u as Xt,ac as bo,a as Kt,j as o,c as qt,bo as Ue,bp as ft,d as Qt,e as me,f as Ct,ad as yo,ae as wo,o as O,q as T,b9 as ht,T as re,F as v,aW as Ye,bq as jo,br as et,bs as vo,b8 as Jt,O as eo,a9 as We,aV as he,a0 as Et,Z as Pt,Y as Tt,X as Mt,V as Co,M as Eo,ao as At}from"./index-ff96c565.js";import{B as Po}from"./index-156ba639.js";import{i as mt,B as $e,F as to,k as xt,q as To,h as Mo,I as Ao,r as So,b as oo}from"./index-4b1abbc1.js";import{T as He}from"./index-554dba8b.js";import{A as Me,O as $o,a as St,N as no}from"./index-f4869480.js";import{C as le}from"./ClipLoader-62c4f3aa.js";import{D as so}from"./DeleteIcon-1cf2ae28.js";import{P as ro}from"./PlusIcon-04c5e211.js";import{p as pt,c as Oo,g as ko}from"./index-44e303ef.js";import{e as _o}from"./Stack-b09750ea.js";import{S as Io,F as No}from"./FormControlLabel-fed28b14.js";import{g as zo,m as Ro,u as J,b as Ze,t as ut,T as io,i as ao,H as Lo,j as $t,C as Bo,P as Vo,k as Do}from"./index-03267923.js";import{Z as Fo,_ as Go,E as Yo,V as N,$ as ue,a0 as fe,a1 as Ot,P as De,a2 as Fe,a3 as kt,a as K,a4 as Wo,G as Ho,C as Uo}from"./three.module-2ce81f73.js";import"./index.esm-b84fd03f.js";import"./InfoIcon-208d7233.js";import"./Popover-39e58791.js";import"./useSlotProps-9b08c3e2.js";import"./createSvgIcon-edfe1a67.js";import"./TextareaAutosize-4e0c2660.js";import"./Typography-13458501.js";const Zo=x.createContext(),_t=Zo;function Xo(t){return Ut("MuiGrid",t)}const Ko=[0,1,2,3,4,5,6,7,8,9,10],qo=["column-reverse","column","row-reverse","row"],Qo=["nowrap","wrap-reverse","wrap"],Te=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12],Jo=Zt("MuiGrid",["root","container","item","zeroMinWidth",...Ko.map(t=>`spacing-xs-${t}`),...qo.map(t=>`direction-xs-${t}`),...Qo.map(t=>`wrap-xs-${t}`),...Te.map(t=>`grid-xs-${t}`),...Te.map(t=>`grid-sm-${t}`),...Te.map(t=>`grid-md-${t}`),...Te.map(t=>`grid-lg-${t}`),...Te.map(t=>`grid-xl-${t}`)]),Ae=Jo,en=["className","columns","columnSpacing","component","container","direction","item","rowSpacing","spacing","wrap","zeroMinWidth"];function xe(t){const n=parseFloat(t);return`${n}${String(t).replace(String(n),"")||"px"}`}function tn({theme:t,ownerState:n}){let s;return t.breakpoints.keys.reduce((e,i)=>{let l={};if(n[i]&&(s=n[i]),!s)return e;if(s===!0)l={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if(s==="auto")l={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{const d=Ue({values:n.columns,breakpoints:t.breakpoints.values}),c=typeof d=="object"?d[i]:d;if(c==null)return e;const a=`${Math.round(s/c*1e8)/1e6}%`;let w={};if(n.container&&n.item&&n.columnSpacing!==0){const p=t.spacing(n.columnSpacing);if(p!=="0px"){const h=`calc(${a} + ${xe(p)})`;w={flexBasis:h,maxWidth:h}}}l=U({flexBasis:a,flexGrow:0,maxWidth:a},w)}return t.breakpoints.values[i]===0?Object.assign(e,l):e[t.breakpoints.up(i)]=l,e},{})}function on({theme:t,ownerState:n}){const s=Ue({values:n.direction,breakpoints:t.breakpoints.values});return ft({theme:t},s,e=>{const i={flexDirection:e};return e.indexOf("column")===0&&(i[`& > .${Ae.item}`]={maxWidth:"none"}),i})}function co({breakpoints:t,values:n}){let s="";Object.keys(n).forEach(i=>{s===""&&n[i]!==0&&(s=i)});const e=Object.keys(t).sort((i,l)=>t[i]-t[l]);return e.slice(0,e.indexOf(s))}function nn({theme:t,ownerState:n}){const{container:s,rowSpacing:e}=n;let i={};if(s&&e!==0){const l=Ue({values:e,breakpoints:t.breakpoints.values});let d;typeof l=="object"&&(d=co({breakpoints:t.breakpoints.values,values:l})),i=ft({theme:t},l,(c,a)=>{var w;const p=t.spacing(c);return p!=="0px"?{marginTop:`-${xe(p)}`,[`& > .${Ae.item}`]:{paddingTop:xe(p)}}:(w=d)!=null&&w.includes(a)?{}:{marginTop:0,[`& > .${Ae.item}`]:{paddingTop:0}}})}return i}function sn({theme:t,ownerState:n}){const{container:s,columnSpacing:e}=n;let i={};if(s&&e!==0){const l=Ue({values:e,breakpoints:t.breakpoints.values});let d;typeof l=="object"&&(d=co({breakpoints:t.breakpoints.values,values:l})),i=ft({theme:t},l,(c,a)=>{var w;const p=t.spacing(c);return p!=="0px"?{width:`calc(100% + ${xe(p)})`,marginLeft:`-${xe(p)}`,[`& > .${Ae.item}`]:{paddingLeft:xe(p)}}:(w=d)!=null&&w.includes(a)?{}:{width:"100%",marginLeft:0,[`& > .${Ae.item}`]:{paddingLeft:0}}})}return i}function rn(t,n,s={}){if(!t||t<=0)return[];if(typeof t=="string"&&!Number.isNaN(Number(t))||typeof t=="number")return[s[`spacing-xs-${String(t)}`]];const e=[];return n.forEach(i=>{const l=t[i];Number(l)>0&&e.push(s[`spacing-${i}-${String(l)}`])}),e}const an=Se("div",{name:"MuiGrid",slot:"Root",overridesResolver:(t,n)=>{const{ownerState:s}=t,{container:e,direction:i,item:l,spacing:d,wrap:c,zeroMinWidth:a,breakpoints:w}=s;let p=[];e&&(p=rn(d,w,n));const h=[];return w.forEach(m=>{const g=s[m];g&&h.push(n[`grid-${m}-${String(g)}`])}),[n.root,e&&n.container,l&&n.item,a&&n.zeroMinWidth,...p,i!=="row"&&n[`direction-xs-${String(i)}`],c!=="wrap"&&n[`wrap-xs-${String(c)}`],...h]}})(({ownerState:t})=>U({boxSizing:"border-box"},t.container&&{display:"flex",flexWrap:"wrap",width:"100%"},t.item&&{margin:0},t.zeroMinWidth&&{minWidth:0},t.wrap!=="wrap"&&{flexWrap:t.wrap}),on,nn,sn,tn);function cn(t,n){if(!t||t<=0)return[];if(typeof t=="string"&&!Number.isNaN(Number(t))||typeof t=="number")return[`spacing-xs-${String(t)}`];const s=[];return n.forEach(e=>{const i=t[e];if(Number(i)>0){const l=`spacing-${e}-${String(i)}`;s.push(l)}}),s}const ln=t=>{const{classes:n,container:s,direction:e,item:i,spacing:l,wrap:d,zeroMinWidth:c,breakpoints:a}=t;let w=[];s&&(w=cn(l,a));const p=[];a.forEach(m=>{const g=t[m];g&&p.push(`grid-${m}-${String(g)}`)});const h={root:["root",s&&"container",i&&"item",c&&"zeroMinWidth",...w,e!=="row"&&`direction-xs-${String(e)}`,d!=="wrap"&&`wrap-xs-${String(d)}`,...p]};return Qt(h,Xo,n)},dn=x.forwardRef(function(n,s){const e=Xt({props:n,name:"MuiGrid"}),{breakpoints:i}=bo(),l=_o(e),{className:d,columns:c,columnSpacing:a,component:w="div",container:p=!1,direction:h="row",item:m=!1,rowSpacing:g,spacing:b=0,wrap:S="wrap",zeroMinWidth:y=!1}=l,C=Kt(l,en),j=g||b,z=a||b,E=x.useContext(_t),P=p?c||12:E,I={},V=U({},C);i.keys.forEach(f=>{C[f]!=null&&(I[f]=C[f],delete V[f])});const R=U({},l,{columns:P,container:p,direction:h,item:m,rowSpacing:j,columnSpacing:z,wrap:S,zeroMinWidth:y,spacing:b},I,{breakpoints:i.keys}),F=ln(R);return o.jsx(_t.Provider,{value:P,children:o.jsx(an,U({ownerState:R,className:qt(F.root,d),as:w,ref:s},V))})}),ie=dn;function pn(t){return Ut("MuiSwitch",t)}const un=Zt("MuiSwitch",["root","edgeStart","edgeEnd","switchBase","colorPrimary","colorSecondary","sizeSmall","sizeMedium","checked","disabled","input","thumb","track"]),H=un,fn=["className","color","edge","size","sx"],hn=t=>{const{classes:n,edge:s,size:e,color:i,checked:l,disabled:d}=t,c={root:["root",s&&`edge${me(s)}`,`size${me(e)}`],switchBase:["switchBase",`color${me(i)}`,l&&"checked",d&&"disabled"],thumb:["thumb"],track:["track"],input:["input"]},a=Qt(c,pn,n);return U({},n,a)},mn=Se("span",{name:"MuiSwitch",slot:"Root",overridesResolver:(t,n)=>{const{ownerState:s}=t;return[n.root,s.edge&&n[`edge${me(s.edge)}`],n[`size${me(s.size)}`]]}})(({ownerState:t})=>U({display:"inline-flex",width:34+12*2,height:14+12*2,overflow:"hidden",padding:12,boxSizing:"border-box",position:"relative",flexShrink:0,zIndex:0,verticalAlign:"middle","@media print":{colorAdjust:"exact"}},t.edge==="start"&&{marginLeft:-8},t.edge==="end"&&{marginRight:-8},t.size==="small"&&{width:40,height:24,padding:7,[`& .${H.thumb}`]:{width:16,height:16},[`& .${H.switchBase}`]:{padding:4,[`&.${H.checked}`]:{transform:"translateX(16px)"}}})),xn=Se(Io,{name:"MuiSwitch",slot:"SwitchBase",overridesResolver:(t,n)=>{const{ownerState:s}=t;return[n.switchBase,{[`& .${H.input}`]:n.input},s.color!=="default"&&n[`color${me(s.color)}`]]}})(({theme:t})=>({position:"absolute",top:0,left:0,zIndex:1,color:t.vars?t.vars.palette.Switch.defaultColor:`${t.palette.mode==="light"?t.palette.common.white:t.palette.grey[300]}`,transition:t.transitions.create(["left","transform"],{duration:t.transitions.duration.shortest}),[`&.${H.checked}`]:{transform:"translateX(20px)"},[`&.${H.disabled}`]:{color:t.vars?t.vars.palette.Switch.defaultDisabledColor:`${t.palette.mode==="light"?t.palette.grey[100]:t.palette.grey[600]}`},[`&.${H.checked} + .${H.track}`]:{opacity:.5},[`&.${H.disabled} + .${H.track}`]:{opacity:t.vars?t.vars.opacity.switchTrackDisabled:`${t.palette.mode==="light"?.12:.2}`},[`& .${H.input}`]:{left:"-100%",width:"300%"}}),({theme:t,ownerState:n})=>U({"&:hover":{backgroundColor:t.vars?`rgba(${t.vars.palette.action.activeChannel} / ${t.vars.palette.action.hoverOpacity})`:Ct(t.palette.action.active,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},n.color!=="default"&&{[`&.${H.checked}`]:{color:(t.vars||t).palette[n.color].main,"&:hover":{backgroundColor:t.vars?`rgba(${t.vars.palette[n.color].mainChannel} / ${t.vars.palette.action.hoverOpacity})`:Ct(t.palette[n.color].main,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${H.disabled}`]:{color:t.vars?t.vars.palette.Switch[`${n.color}DisabledColor`]:`${t.palette.mode==="light"?yo(t.palette[n.color].main,.62):wo(t.palette[n.color].main,.55)}`}},[`&.${H.checked} + .${H.track}`]:{backgroundColor:(t.vars||t).palette[n.color].main}})),gn=Se("span",{name:"MuiSwitch",slot:"Track",overridesResolver:(t,n)=>n.track})(({theme:t})=>({height:"100%",width:"100%",borderRadius:14/2,zIndex:-1,transition:t.transitions.create(["opacity","background-color"],{duration:t.transitions.duration.shortest}),backgroundColor:t.vars?t.vars.palette.common.onBackground:`${t.palette.mode==="light"?t.palette.common.black:t.palette.common.white}`,opacity:t.vars?t.vars.opacity.switchTrack:`${t.palette.mode==="light"?.38:.3}`})),bn=Se("span",{name:"MuiSwitch",slot:"Thumb",overridesResolver:(t,n)=>n.thumb})(({theme:t})=>({boxShadow:(t.vars||t).shadows[1],backgroundColor:"currentColor",width:20,height:20,borderRadius:"50%"})),yn=x.forwardRef(function(n,s){const e=Xt({props:n,name:"MuiSwitch"}),{className:i,color:l="primary",edge:d=!1,size:c="medium",sx:a}=e,w=Kt(e,fn),p=U({},e,{color:l,edge:d,size:c}),h=hn(p),m=o.jsx(bn,{className:h.thumb,ownerState:p});return o.jsxs(mn,{className:qt(h.root,i),sx:a,ownerState:p,children:[o.jsx(xn,U({type:"checkbox",icon:m,checkedIcon:m,ref:s,ownerState:p},w,{classes:U({},h,{root:h.switchBase})})),o.jsx(gn,{className:h.track,ownerState:p})]})}),lo=yn,wn={type:"",parent:""},It=({onSelect:t,dataTestId:n,edgeLink:s,hideSelectAll:e,placeholder:i})=>{const l=mt({mode:"onChange",defaultValues:wn}),{watch:d,setValue:c}=l,[a,w]=x.useState([]),[p,h]=x.useState(!1),m=y=>{c("parent",(y==null?void 0:y.value)||""),t(y==null?void 0:y.value)},g=y=>y.charAt(0).toUpperCase()+y.slice(1);x.useEffect(()=>{(async()=>{h(!0);try{const j=(await ht()).schemas.filter(E=>!E.is_deleted&&E.type).map(E=>(E==null?void 0:E.type)==="thing"?{label:"No Parent",value:E.type}:{label:g(E.type),value:E.type});w(e?j:[{label:"Select all",value:"all"},...j]),s&&c("parent",s)}catch(C){console.warn(C)}finally{h(!1)}})()},[s,c,e]);const b=d("parent"),S=()=>{const y=a==null?void 0:a.find(C=>C.value===b);if(y)return y;if(s)return{label:s,value:s}};return o.jsx(jn,{dataTestId:n,disabled:!!s,isLoading:p,onSelect:m,options:a||$o,placeholder:i,selectedValue:S()})},jn=O(Me)`
  .MuiInputBase-input {
    font-family: Barlow;
    font-size: 14px;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0.01em;
    text-align: left;
    color: ${T.white};
    padding-right: -8px;

    &::placeholder {
      font-family: Barlow;
      font-size: 14px;
      font-weight: 400;
      line-height: 16px;
      letter-spacing: 0.01em;
      text-align: left;
      color: ${T.GRAY7};
      opacity: 1;
    }
  }

  && .MuiInput-input.MuiInputBase-input {
    padding-left: 0;
  }
`,vn=({selectedType:t,setSelectedFromNode:n,setSelectedToNode:s,edgeLinkData:e,selectedFromNode:i,selectedToNode:l})=>{const d=l==="all",c=i==="all";return o.jsxs(v,{mt:8,children:[o.jsxs(v,{mb:25,children:[o.jsx(v,{mb:5,children:o.jsx(tt,{children:"Source"})}),o.jsx(It,{dataTestId:"from_node",edgeLink:e==null?void 0:e.source,hideSelectAll:d,onSelect:n,placeholder:"Source Name"})]}),o.jsxs(v,{mb:10,children:[o.jsx(v,{mb:5,children:o.jsx(tt,{children:"Edge Name"})}),o.jsx(v,{mb:12,children:o.jsx(He,{id:"cy-item-name",maxLength:250,name:"type",placeholder:"Enter Edge Name",rules:{...Ye},value:t})})]}),o.jsxs(v,{mb:25,children:[o.jsx(v,{mb:5,children:o.jsx(tt,{children:"Destination"})}),o.jsx(It,{dataTestId:"to_node",edgeLink:e==null?void 0:e.target,hideSelectAll:c,onSelect:s,placeholder:"Select Destination"})]})]})},tt=O(re)`
  font-family: Barlow;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0.01em;
  text-align: left;
  margin-left: 1px;
  color: ${T.mainBottomIcons};
`,Cn=({onCancel:t,edgeLinkData:n,setGraphLoading:s})=>{var I,V,R;const e=mt({mode:"onChange"}),{setValue:i,getValues:l}=e,[d,c]=x.useState(!1),[a,w]=x.useState(!1),[p,h]=x.useState(""),[m,g]=x.useState(""),[b,S]=x.useState(""),y=e.watch("type");x.useEffect(()=>{i("type",n==null?void 0:n.edgeType)},[n==null?void 0:n.edgeType,i]),x.useEffect(()=>{h(y)},[y]);const C=e.handleSubmit(async F=>{c(!0),s(!0);const f={source:m,target:b,edge_type:F.type},k={ref_id:n==null?void 0:n.refId,edge_type:F.type};try{if(n!=null&&n.refId)await jo(k);else if(b&&m)if(m==="all"||b==="all"){const _=(await ht()).schemas.filter(Y=>!Y.is_deleted&&Y.type).map(Y=>Y.type);m==="all"?await Promise.all(_.map(Y=>et({...f,source:Y}))):b==="all"&&await Promise.all(_.map(Y=>et({...f,target:Y})))}else await et(f)}catch(D){console.warn("API Error:",D)}finally{c(!1),s(!1),g(""),S(""),t()}}),j=(V=(I=l())==null?void 0:I.type)==null?void 0:V.trim(),z=j&&((R=n==null?void 0:n.edgeType)==null?void 0:R.trim())!==j,E=n!=null&&n.refId?d||!z:d||!b||!m||!p,P=async()=>{w(!0),s(!0);try{n!=null&&n.refId&&await vo(n==null?void 0:n.refId)}catch(F){console.warn("API Error:",F)}finally{w(!1),s(!1),g(""),S(""),t()}};return o.jsx(to,{...e,children:o.jsxs("form",{id:"add-type-form",onSubmit:C,children:[o.jsx(vn,{edgeLinkData:n,selectedFromNode:m,selectedToNode:b,selectedType:p,setSelectedFromNode:g,setSelectedToNode:S}),o.jsxs(v,{direction:"row",justify:"space-between",mt:20,children:[(n==null?void 0:n.refId)&&o.jsx(v,{direction:"column",children:o.jsxs(Pn,{color:"secondary",disabled:a,onClick:P,size:"large",style:{marginRight:20},variant:"contained",children:["Delete",a&&o.jsxs(Nt,{children:[o.jsx(le,{color:T.lightGray,size:12})," "]})]})}),o.jsxs(En,{color:"secondary",disabled:E,onClick:C,size:"large",variant:"contained",children:["Confirm",d&&o.jsxs(Nt,{children:[o.jsx(le,{color:T.lightGray,size:12})," "]})]})]})]})})},En=O($e)`
  width: 293px !important;
  margin: 0 0 10px auto !important;
`,Nt=O.span`
  margin-top: 2px;
`,Pn=O($e)`
  && {
    color: ${T.primaryRed};
    background-color: rgba(237, 116, 116, 0.1);

    &:hover,
    &:active,
    &:focus {
      color: ${T.primaryRed};
      background-color: rgba(237, 116, 116, 0.2);
    }
  }
`,Tn=({setIsAddEdgeNode:t,edgeData:n,setGraphLoading:s})=>{const e=()=>{t(!1)};return o.jsxs(v,{children:[o.jsxs(An,{align:"center",direction:"row",justify:"space-between",children:[o.jsx($n,{children:n!=null&&n.refId?"Edit Edge":"Add Edge"}),o.jsx(Mn,{"data-testid":"close-sidebar-sub-view",onClick:e,children:o.jsx(xt,{})})]}),o.jsx(Sn,{}),o.jsx(Cn,{edgeLinkData:n,onCancel:e,setGraphLoading:s})]})},Mn=O(v)`
  font-size: 32px;
  color: ${T.white};
  cursor: pointer;

  svg {
    color: ${T.GRAY6};
  }

  &:hover {
    svg {
      color: ${T.white};
    }
  }
`,An=O(v)`
  margin-bottom: 16px;
`,Sn=O.div`
  border-bottom: 1px solid ${T.black};
  width: calc(100% + 32px);
  margin: 0 -16px 16px;
  opacity: 0.3;
`,$n=O(re)`
  font-family: Barlow;
  font-size: 22px;
  font-weight: 600;
  line-height: 16px;
  letter-spacing: 0.01em;
  text-align: left;
  margin-left: 2px;
  color: ${T.white};
`,On=/^[a-z0-9_]+$/,kn=({parentParam:t,onDelete:n})=>{const[s,e]=x.useState(!1),[i,l]=x.useState([]),{fields:d,append:c,replace:a,remove:w}=To({name:"attributes"}),{setValue:p,watch:h}=Mo();return x.useEffect(()=>{const m=async()=>{try{let g=[{required:!1,type:"string",key:""}];if(t!==no.value.toLowerCase()){e(!0);const b=await Jt(t);b.attributes&&typeof b.attributes=="object"?g=pt(b.attributes):g=pt(b)}g=g.filter(b=>b.key!=="node_key"),a(g),l(g)}catch(g){console.warn(g)}finally{e(!1)}};i.length===0&&m()},[t,p,a,i.length]),o.jsxs(o.Fragment,{children:[s?o.jsx(v,{align:"center",children:o.jsx(le,{color:T.SECONDARY_BLUE,size:"30"})}):o.jsx(_n,{py:8,children:o.jsx(ie,{container:!0,spacing:2,children:d.map((m,g)=>{const b=h(`attributes[${g}].type`),S=h(`attributes[${g}].required`),y=m.isNew||!1,C=["name"].includes(h(`attributes[${g}].key`));return o.jsxs(x.Fragment,{children:[o.jsx(ie,{item:!0,xs:5,children:o.jsx(He,{autoComplete:"off",className:"text-input",dataTestId:`cy-item-name-${g}`,disabled:!y,id:`cy-item-name-${g}`,maxLength:50,name:`attributes.${g}.key`,placeholder:"Enter value",rules:{...Ye,pattern:{message:"Please avoid special characters, spaces and uppercase",value:On}}})}),o.jsx(ie,{item:!0,xs:4,children:o.jsx(Me,{dataTestId:`cy-item-select-${g}`,disabled:C,onSelect:j=>p(`attributes[${g}].type`,j==null?void 0:j.value),options:St,selectedValue:St.find(j=>j.value===b)})}),o.jsxs(ie,{item:!0,xs:3,children:[o.jsx(lo,{checked:S,"data-testid":`cy-item-${g}`,disabled:C,name:`attributes.${g}.required`,onChange:j=>p(`attributes[${g}].required`,j.target.checked),size:"small"}),!C&&o.jsx(Ao,{onClick:()=>{w(g),m.key!==void 0&&n&&n(m.key)},children:o.jsx(so,{})})]})]},m.id)})})}),o.jsx(v,{align:"flex-start",py:12,children:o.jsx($e,{"data-testid":"add-attribute-btn",onClick:()=>c({key:"",type:"string",required:!0,isNew:!0}),size:"medium",startIcon:o.jsx(ro,{}),variant:"contained",children:"Add Attribute"})})]})},_n=O(v)`
  overflow-y: auto;
  width: calc(100% + 20px);
  max-height: calc(80vh - 300px);
`,In=({parent:t,onDelete:n})=>{const s=t;return o.jsxs(v,{children:[o.jsx(v,{direction:"row",mb:10,children:o.jsxs(ie,{container:!0,spacing:2,children:[o.jsx(ie,{item:!0,xs:5,children:o.jsx(ot,{style:{marginRight:180},children:"Attributes"})}),o.jsx(ie,{item:!0,xs:4,children:o.jsx(ot,{style:{marginRight:130},children:"Type"})}),o.jsx(ie,{item:!0,xs:3,children:o.jsx(ot,{children:"Required"})})]})}),s&&o.jsx(kn,{onDelete:n,parentParam:s},s)]})},ot=O(re)`
  font-size: 15px;
  color: gray;
`,Nn=({setMediaOptions:t})=>{const[n,s]=x.useState({videoAudio:!1,image:!1,sourceLink:!1}),e=i=>{s(l=>{const d={...l,[i]:!l[i]};return t(d),d})};return o.jsxs(zn,{direction:"column",children:[o.jsx(it,{}),o.jsx(nt,{control:o.jsx(rt,{checked:n.videoAudio,onChange:()=>e("videoAudio")}),label:o.jsx(st,{active:n.videoAudio,children:"Video / Audio"}),labelPlacement:"start"}),o.jsx(it,{}),o.jsx(nt,{control:o.jsx(rt,{checked:n.image,onChange:()=>e("image")}),label:o.jsx(st,{active:n.image,children:"Image"}),labelPlacement:"start"}),o.jsx(it,{}),o.jsx(nt,{control:o.jsx(rt,{checked:n.sourceLink,onChange:()=>e("sourceLink")}),label:o.jsx(st,{active:n.sourceLink,children:"Source Link"}),labelPlacement:"start"})]})},zn=O(v)`
  direction: column;
`,nt=O(No)`
  justify-content: space-between;
  margin-left: 2px !important;
  margin-top: 8px;
  margin-bottom: 8px;
`,st=O.span`
  color: ${({active:t})=>t?T.white:T.GRAY7};
  font-family: Barlow;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: 0.01em;
  text-align: left;
`,rt=O(t=>o.jsx(lo,{...t}))`
  &.MuiSwitch-root {
    width: 53px;
    height: 38px;
  }
  & .MuiSwitch-switchBase {
    margin-top: 3px;
    &.Mui-checked {
      color: ${T.white};
      & + .MuiSwitch-track {
        background-color: ${T.primaryBlueBorder};
        opacity: 1;
      }
    }
  }
  & .MuiSwitch-thumb {
    width: 13px;
    height: 13px;
  }
  & .MuiSwitch-track {
    border-radius: 10px;
    background-color: ${T.BG2};
    opacity: 1;
  }
`,it=O.div`
  border: 1px solid ${T.BG2};
  width: 100%;
  opacity: 0.5;
`,Rn={type:"",parent:""},Ln=(t,n)=>t.length!==n.length?!0:t.some((s,e)=>{const i=n[e];return s.required!==i.required||s.type!==i.type||s.key!==i.key}),Bn=async(t,n=!1,s,e)=>{try{const{attributes:i,selectedIndex:l,...d}=t,c={...Oo(i),...s.reduce((p,h)=>({...p,[h]:"delete"}),{})},a={...d,attributes:c,index:l};e.videoAudio&&(a.media_url=""),e.image&&(a.image_url=""),e.sourceLink&&(a.source_link="");let w;if(n?w=await We.put(`/schema/${t.ref_id}`,JSON.stringify(a),{}):w=await We.post("/schema",JSON.stringify({...a,node_key:"name"}),{}),w.status!=="success")throw new Error("error");return w==null?void 0:w.ref_id}catch(i){let l=he;if(i.status===400){const d=await i.json();l=d.errorCode||(d==null?void 0:d.status)||he}else i instanceof Error&&(l=i.message);throw new Error(l)}},Vn=t=>t.charAt(0).toUpperCase()+t.slice(1),zt=async(t,n)=>{try{const l=((await ht()).schemas||[]).filter(d=>!d.is_deleted&&d.type&&(!n||n(d))).map(d=>d.type==="thing"?{label:"No Parent",value:d.type}:{label:Vn(d.type),value:d.type});t(l)}catch(s){console.warn(s)}},Dn=({graphLoading:t,onSchemaCreate:n,selectedSchema:s,onDelete:e,setSelectedSchemaId:i,setGraphLoading:l,setIsCreateNew:d,onSchemaUpdate:c})=>{const{close:a,visible:w}=eo("addType"),p=mt({mode:"onChange",defaultValues:s?{type:s.type,parent:s.parent}:Rn}),{watch:h,setValue:m,reset:g,getValues:b}=p,[S,y]=x.useState(!1),[C,j]=x.useState(!1),[z,E]=x.useState(!1),[P,I]=x.useState(null),[V,R]=x.useState(!1),[F,f]=x.useState(null),[k,D]=x.useState(""),[_,Y]=x.useState(null),[Z,ee]=x.useState([]),[ae,Q]=x.useState([]),[ge,Oe]=x.useState(!0),[ke,be]=x.useState({videoAudio:!1,image:!1,sourceLink:!1});x.useEffect(()=>()=>{g()},[w,g]);const _e=()=>{d(!1),i("")};x.useEffect(()=>{s||(E(!0),zt(I).finally(()=>E(!1)))},[s]),x.useEffect(()=>{(async()=>{if(s){m("type",s==null?void 0:s.type),m("parent",s.parent);let L=[{required:!1,type:"string",key:""}];if(s.type!==no.value.toLowerCase()){const G=await Jt(s.type);L=G?pt(G):L}L=L.filter(G=>G.key!=="node_key"),Q(L),await zt(f,G=>G.type!==s.type)}})()},[s,m]);const X=h("parent");h("type");const Ie=$=>Array.isArray($)&&$.every(L=>typeof L=="object"&&"key"in L),ye=h("attributes"),we=x.useMemo(()=>Ie(ye)?ye:[],[ye]),Xe=()=>{a()},Ke=$=>{ee(L=>[...L,$])},qe=async()=>{if(s!=null&&s.type){j(!0),l(!0);try{await We.delete(`/schema/${s.ref_id}`),e(s.type),a()}catch($){let L=he;if(($==null?void 0:$.status)===400){const G=await $.json();L=G.errorCode||(G==null?void 0:G.status)||he}else $ instanceof Error&&(L=$.message);Y(L)}finally{j(!1),l(!1),d(!1)}}},je=p.handleSubmit(async $=>{if(!X){R(!0);return}y(!0);try{if(s&&$.type!==(s==null?void 0:s.type)||s&&b().parent!==(s==null?void 0:s.parent)){const G=b().parent??(s==null?void 0:s.parent);l(!0),await We.put(`/schema/${s==null?void 0:s.ref_id}`,JSON.stringify({type:$.type,parent:G})),await c()}const L=await Bn({...$,...s?{ref_id:s==null?void 0:s.ref_id}:{}},!!s,Z,ke);n({type:$.type,parent:X||"",ref_id:(s==null?void 0:s.ref_id)||L||"new"}),Xe()}catch(L){let G=he;if((L==null?void 0:L.status)===400){const te=await L.json();G=te.errorCode||(te==null?void 0:te.status)||he}else L instanceof Error&&(G=L.message);D(G)}finally{y(!1),l(!1),d(!1)}});x.useEffect(()=>{const $=p.watch(L=>{var Re,Le,Ce,de,pe;const G=Ln(we,ae),te=((Re=L.type)==null?void 0:Re.trim())!==((Le=s==null?void 0:s.type)==null?void 0:Le.trim())||((Ce=L.parent)==null?void 0:Ce.trim())!==((de=s==null?void 0:s.parent)==null?void 0:de.trim())||G,ve=!!((pe=L.type)!=null&&pe.trim());Oe(s?S||!te||!ve||V:S||V||!ve)});return()=>$.unsubscribe()},[p,we,ae,s,S,V]);const Ne=()=>P==null?void 0:P.find($=>$.value===X),ze=()=>{const $=F==null?void 0:F.find(L=>L.value===X);if($)return $;if(X)return{label:X,value:X}};return o.jsxs(v,{children:[o.jsxs(Hn,{children:[o.jsx(Un,{children:s?"Edit Type":"Create Type"}),o.jsx(Wn,{"data-testid":"close-sidebar-sub-view",onClick:_e,children:o.jsx(xt,{})})]}),o.jsx(Gn,{}),o.jsx(v,{children:o.jsx(to,{...p,children:o.jsxs("form",{id:"add-type-form",onSubmit:je,children:[o.jsx(v,{children:s?o.jsxs(o.Fragment,{children:[o.jsxs(v,{mb:12,children:[o.jsx(v,{mb:12,children:o.jsx(re,{children:"Name"})}),o.jsx(v,{mb:12,children:o.jsx(He,{dataTestId:"cy-item-name",defaultValue:s==null?void 0:s.type,id:"cy-item-name",maxLength:250,name:"type",placeholder:"Enter type name",rules:{...Ye},value:X})})]}),o.jsxs(v,{mb:12,children:[o.jsx(v,{mb:12,children:o.jsx(re,{children:"Parent"})}),o.jsx(Me,{isLoading:z||t,onSelect:$=>{m("parent",($==null?void 0:$.value)||""),R(!1)},options:F||[],selectedValue:ze()}),k&&o.jsx(at,{children:k})]})]}):o.jsxs(o.Fragment,{children:[o.jsxs(v,{mb:12,children:[o.jsx(v,{mb:12,children:o.jsx(re,{children:"Select Parent"})}),o.jsx(Me,{isLoading:z,onSelect:$=>{m("parent",($==null?void 0:$.value)||""),R(!1)},options:P,selectedValue:Ne()}),V&&o.jsx(at,{children:"A parent type must be selected"})]}),o.jsxs(v,{children:[o.jsx(v,{mb:12,children:o.jsx(re,{children:"Type name"})}),o.jsx(v,{mb:12,children:o.jsx(He,{id:"cy-item-name",maxLength:250,name:"type",placeholder:"Enter type name",rules:{...Ye},value:X})})]})]})}),o.jsx(In,{onDelete:Ke,parent:s?s.type:X}),o.jsx(Nn,{setMediaOptions:be}),o.jsxs(v,{children:[o.jsx(Lt,{}),o.jsx(v,{mb:12,mt:12,children:o.jsx(re,{children:"Indexes"})}),o.jsx(ie,{item:!0,mb:2,width:"70%",children:o.jsx(Me,{onSelect:$=>m("selectedIndex",$==null?void 0:$.value),options:we.map($=>({label:$.key,value:$.key}))})}),o.jsx(Lt,{})]}),o.jsxs(v,{direction:"row",justify:"space-between",mt:20,children:[s&&o.jsxs(v,{direction:"column",children:[o.jsxs(Yn,{color:"secondary",disabled:C,onClick:qe,size:"large",style:{marginRight:20},variant:"contained",children:["Delete",C&&o.jsxs(Rt,{children:[o.jsx(le,{color:T.lightGray,size:12})," "]})]}),_&&o.jsx(at,{children:_})]}),o.jsxs(Fn,{color:"secondary",disabled:ge,onClick:je,size:"large",variant:"contained",children:["Confirm",S&&o.jsxs(Rt,{children:[o.jsx(le,{color:T.lightGray,size:12})," "]})]})]})]})})})]})},Fn=O($e)`
  width: 100% !important;
  margin: 0 auto !important;
`,Gn=O.div`
  border-bottom: 1px solid ${T.black};
  width: calc(100% + 32px);
  margin: 0 -16px 16px;
  opacity: 0.3;
`,Rt=O.span`
  margin-top: 2px;
`,Yn=O($e)`
  && {
    color: ${T.primaryRed};
    background-color: rgba(237, 116, 116, 0.1);

    &:hover,
    &:active,
    &:focus {
      color: ${T.primaryRed};
      background-color: rgba(237, 116, 116, 0.2);
    }
  }
`,Wn=O(v)`
  font-size: 32px;
  color: ${T.white};
  cursor: pointer;

  svg {
    color: ${T.GRAY6};
  }

  &:hover {
    svg {
      color: ${T.white};
    }
  }
`,at=O(v)`
  font-size: 13px;
  font-family: Barlow;
  color: #ff8f80;
  line-height: 0.2px;
  margin-top: 12px;
  padding-top: 20px;
`,Lt=O.div`
  border: 1px solid ${T.BG2};
  width: calc(100% + 32px);
  opacity: 0.5;
  margin-left: -16px;
`,Hn=O(v)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 16px;
`,Un=O(re)`
  font-family: Barlow;
  font-size: 22px;
  font-weight: 600;
  line-height: 16px;
  letter-spacing: 0.01em;
  text-align: left;
  color: ${T.white};
`;var Zn=Object.defineProperty,Xn=(t,n,s)=>n in t?Zn(t,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[n]=s,M=(t,n,s)=>(Xn(t,typeof n!="symbol"?n+"":n,s),s);const Ge=new Fo,Bt=new Go,Kn=Math.cos(70*(Math.PI/180)),Vt=(t,n)=>(t%n+n)%n;let qn=class extends Yo{constructor(n,s){super(),M(this,"object"),M(this,"domElement"),M(this,"enabled",!0),M(this,"target",new N),M(this,"minDistance",0),M(this,"maxDistance",1/0),M(this,"minZoom",0),M(this,"maxZoom",1/0),M(this,"minPolarAngle",0),M(this,"maxPolarAngle",Math.PI),M(this,"minAzimuthAngle",-1/0),M(this,"maxAzimuthAngle",1/0),M(this,"enableDamping",!1),M(this,"dampingFactor",.05),M(this,"enableZoom",!0),M(this,"zoomSpeed",1),M(this,"enableRotate",!0),M(this,"rotateSpeed",1),M(this,"enablePan",!0),M(this,"panSpeed",1),M(this,"screenSpacePanning",!0),M(this,"keyPanSpeed",7),M(this,"zoomToCursor",!1),M(this,"autoRotate",!1),M(this,"autoRotateSpeed",2),M(this,"reverseOrbit",!1),M(this,"reverseHorizontalOrbit",!1),M(this,"reverseVerticalOrbit",!1),M(this,"keys",{LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"}),M(this,"mouseButtons",{LEFT:ue.ROTATE,MIDDLE:ue.DOLLY,RIGHT:ue.PAN}),M(this,"touches",{ONE:fe.ROTATE,TWO:fe.DOLLY_PAN}),M(this,"target0"),M(this,"position0"),M(this,"zoom0"),M(this,"_domElementKeyEvents",null),M(this,"getPolarAngle"),M(this,"getAzimuthalAngle"),M(this,"setPolarAngle"),M(this,"setAzimuthalAngle"),M(this,"getDistance"),M(this,"listenToKeyEvents"),M(this,"stopListenToKeyEvents"),M(this,"saveState"),M(this,"reset"),M(this,"update"),M(this,"connect"),M(this,"dispose"),this.object=n,this.domElement=s,this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this.getPolarAngle=()=>p.phi,this.getAzimuthalAngle=()=>p.theta,this.setPolarAngle=r=>{let u=Vt(r,2*Math.PI),A=p.phi;A<0&&(A+=2*Math.PI),u<0&&(u+=2*Math.PI);let B=Math.abs(u-A);2*Math.PI-B<B&&(u<A?u+=2*Math.PI:A+=2*Math.PI),h.phi=u-A,e.update()},this.setAzimuthalAngle=r=>{let u=Vt(r,2*Math.PI),A=p.theta;A<0&&(A+=2*Math.PI),u<0&&(u+=2*Math.PI);let B=Math.abs(u-A);2*Math.PI-B<B&&(u<A?u+=2*Math.PI:A+=2*Math.PI),h.theta=u-A,e.update()},this.getDistance=()=>e.object.position.distanceTo(e.target),this.listenToKeyEvents=r=>{r.addEventListener("keydown",Qe),this._domElementKeyEvents=r},this.stopListenToKeyEvents=()=>{this._domElementKeyEvents.removeEventListener("keydown",Qe),this._domElementKeyEvents=null},this.saveState=()=>{e.target0.copy(e.target),e.position0.copy(e.object.position),e.zoom0=e.object.zoom},this.reset=()=>{e.target.copy(e.target0),e.object.position.copy(e.position0),e.object.zoom=e.zoom0,e.object.updateProjectionMatrix(),e.dispatchEvent(i),e.update(),a=c.NONE},this.update=(()=>{const r=new N,u=new N(0,1,0),A=new Ot().setFromUnitVectors(n.up,u),B=A.clone().invert(),W=new N,oe=new Ot,ce=2*Math.PI;return function(){const vt=e.object.position;A.setFromUnitVectors(n.up,u),B.copy(A).invert(),r.copy(vt).sub(e.target),r.applyQuaternion(A),p.setFromVector3(r),e.autoRotate&&a===c.NONE&&Y(D()),e.enableDamping?(p.theta+=h.theta*e.dampingFactor,p.phi+=h.phi*e.dampingFactor):(p.theta+=h.theta,p.phi+=h.phi);let ne=e.minAzimuthAngle,se=e.maxAzimuthAngle;isFinite(ne)&&isFinite(se)&&(ne<-Math.PI?ne+=ce:ne>Math.PI&&(ne-=ce),se<-Math.PI?se+=ce:se>Math.PI&&(se-=ce),ne<=se?p.theta=Math.max(ne,Math.min(se,p.theta)):p.theta=p.theta>(ne+se)/2?Math.max(ne,p.theta):Math.min(se,p.theta)),p.phi=Math.max(e.minPolarAngle,Math.min(e.maxPolarAngle,p.phi)),p.makeSafe(),e.enableDamping===!0?e.target.addScaledVector(g,e.dampingFactor):e.target.add(g),e.zoomToCursor&&F||e.object.isOrthographicCamera?p.radius=be(p.radius):p.radius=be(p.radius*m),r.setFromSpherical(p),r.applyQuaternion(B),vt.copy(e.target).add(r),e.object.matrixAutoUpdate||e.object.updateMatrix(),e.object.lookAt(e.target),e.enableDamping===!0?(h.theta*=1-e.dampingFactor,h.phi*=1-e.dampingFactor,g.multiplyScalar(1-e.dampingFactor)):(h.set(0,0,0),g.set(0,0,0));let Be=!1;if(e.zoomToCursor&&F){let Ee=null;if(e.object instanceof De&&e.object.isPerspectiveCamera){const Pe=r.length();Ee=be(Pe*m);const Ve=Pe-Ee;e.object.position.addScaledVector(V,Ve),e.object.updateMatrixWorld()}else if(e.object.isOrthographicCamera){const Pe=new N(R.x,R.y,0);Pe.unproject(e.object),e.object.zoom=Math.max(e.minZoom,Math.min(e.maxZoom,e.object.zoom/m)),e.object.updateProjectionMatrix(),Be=!0;const Ve=new N(R.x,R.y,0);Ve.unproject(e.object),e.object.position.sub(Ve).add(Pe),e.object.updateMatrixWorld(),Ee=r.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),e.zoomToCursor=!1;Ee!==null&&(e.screenSpacePanning?e.target.set(0,0,-1).transformDirection(e.object.matrix).multiplyScalar(Ee).add(e.object.position):(Ge.origin.copy(e.object.position),Ge.direction.set(0,0,-1).transformDirection(e.object.matrix),Math.abs(e.object.up.dot(Ge.direction))<Kn?n.lookAt(e.target):(Bt.setFromNormalAndCoplanarPoint(e.object.up,e.target),Ge.intersectPlane(Bt,e.target))))}else e.object instanceof Fe&&e.object.isOrthographicCamera&&(e.object.zoom=Math.max(e.minZoom,Math.min(e.maxZoom,e.object.zoom/m)),e.object.updateProjectionMatrix(),Be=!0);return m=1,F=!1,Be||W.distanceToSquared(e.object.position)>w||8*(1-oe.dot(e.object.quaternion))>w?(e.dispatchEvent(i),W.copy(e.object.position),oe.copy(e.object.quaternion),Be=!1,!0):!1}})(),this.connect=r=>{r===document&&console.error('THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.'),e.domElement=r,e.domElement.style.touchAction="none",e.domElement.addEventListener("contextmenu",yt),e.domElement.addEventListener("pointerdown",Ce),e.domElement.addEventListener("pointercancel",gt),e.domElement.addEventListener("wheel",bt)},this.dispose=()=>{var r,u,A,B,W,oe;(r=e.domElement)==null||r.removeEventListener("contextmenu",yt),(u=e.domElement)==null||u.removeEventListener("pointerdown",Ce),(A=e.domElement)==null||A.removeEventListener("pointercancel",gt),(B=e.domElement)==null||B.removeEventListener("wheel",bt),(W=e.domElement)==null||W.ownerDocument.removeEventListener("pointermove",de),(oe=e.domElement)==null||oe.ownerDocument.removeEventListener("pointerup",pe),e._domElementKeyEvents!==null&&e._domElementKeyEvents.removeEventListener("keydown",Qe)};const e=this,i={type:"change"},l={type:"start"},d={type:"end"},c={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let a=c.NONE;const w=1e-6,p=new kt,h=new kt;let m=1;const g=new N,b=new K,S=new K,y=new K,C=new K,j=new K,z=new K,E=new K,P=new K,I=new K,V=new N,R=new K;let F=!1;const f=[],k={};function D(){return 2*Math.PI/60/60*e.autoRotateSpeed}function _(){return Math.pow(.95,e.zoomSpeed)}function Y(r){e.reverseOrbit||e.reverseHorizontalOrbit?h.theta+=r:h.theta-=r}function Z(r){e.reverseOrbit||e.reverseVerticalOrbit?h.phi+=r:h.phi-=r}const ee=(()=>{const r=new N;return function(A,B){r.setFromMatrixColumn(B,0),r.multiplyScalar(-A),g.add(r)}})(),ae=(()=>{const r=new N;return function(A,B){e.screenSpacePanning===!0?r.setFromMatrixColumn(B,1):(r.setFromMatrixColumn(B,0),r.crossVectors(e.object.up,r)),r.multiplyScalar(A),g.add(r)}})(),Q=(()=>{const r=new N;return function(A,B){const W=e.domElement;if(W&&e.object instanceof De&&e.object.isPerspectiveCamera){const oe=e.object.position;r.copy(oe).sub(e.target);let ce=r.length();ce*=Math.tan(e.object.fov/2*Math.PI/180),ee(2*A*ce/W.clientHeight,e.object.matrix),ae(2*B*ce/W.clientHeight,e.object.matrix)}else W&&e.object instanceof Fe&&e.object.isOrthographicCamera?(ee(A*(e.object.right-e.object.left)/e.object.zoom/W.clientWidth,e.object.matrix),ae(B*(e.object.top-e.object.bottom)/e.object.zoom/W.clientHeight,e.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),e.enablePan=!1)}})();function ge(r){e.object instanceof De&&e.object.isPerspectiveCamera||e.object instanceof Fe&&e.object.isOrthographicCamera?m/=r:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),e.enableZoom=!1)}function Oe(r){e.object instanceof De&&e.object.isPerspectiveCamera||e.object instanceof Fe&&e.object.isOrthographicCamera?m*=r:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),e.enableZoom=!1)}function ke(r){if(!e.zoomToCursor||!e.domElement)return;F=!0;const u=e.domElement.getBoundingClientRect(),A=r.clientX-u.left,B=r.clientY-u.top,W=u.width,oe=u.height;R.x=A/W*2-1,R.y=-(B/oe)*2+1,V.set(R.x,R.y,1).unproject(e.object).sub(e.object.position).normalize()}function be(r){return Math.max(e.minDistance,Math.min(e.maxDistance,r))}function _e(r){b.set(r.clientX,r.clientY)}function X(r){ke(r),E.set(r.clientX,r.clientY)}function Ie(r){C.set(r.clientX,r.clientY)}function ye(r){S.set(r.clientX,r.clientY),y.subVectors(S,b).multiplyScalar(e.rotateSpeed);const u=e.domElement;u&&(Y(2*Math.PI*y.x/u.clientHeight),Z(2*Math.PI*y.y/u.clientHeight)),b.copy(S),e.update()}function we(r){P.set(r.clientX,r.clientY),I.subVectors(P,E),I.y>0?ge(_()):I.y<0&&Oe(_()),E.copy(P),e.update()}function Xe(r){j.set(r.clientX,r.clientY),z.subVectors(j,C).multiplyScalar(e.panSpeed),Q(z.x,z.y),C.copy(j),e.update()}function Ke(r){ke(r),r.deltaY<0?Oe(_()):r.deltaY>0&&ge(_()),e.update()}function qe(r){let u=!1;switch(r.code){case e.keys.UP:Q(0,e.keyPanSpeed),u=!0;break;case e.keys.BOTTOM:Q(0,-e.keyPanSpeed),u=!0;break;case e.keys.LEFT:Q(e.keyPanSpeed,0),u=!0;break;case e.keys.RIGHT:Q(-e.keyPanSpeed,0),u=!0;break}u&&(r.preventDefault(),e.update())}function je(){if(f.length==1)b.set(f[0].pageX,f[0].pageY);else{const r=.5*(f[0].pageX+f[1].pageX),u=.5*(f[0].pageY+f[1].pageY);b.set(r,u)}}function Ne(){if(f.length==1)C.set(f[0].pageX,f[0].pageY);else{const r=.5*(f[0].pageX+f[1].pageX),u=.5*(f[0].pageY+f[1].pageY);C.set(r,u)}}function ze(){const r=f[0].pageX-f[1].pageX,u=f[0].pageY-f[1].pageY,A=Math.sqrt(r*r+u*u);E.set(0,A)}function $(){e.enableZoom&&ze(),e.enablePan&&Ne()}function L(){e.enableZoom&&ze(),e.enableRotate&&je()}function G(r){if(f.length==1)S.set(r.pageX,r.pageY);else{const A=Je(r),B=.5*(r.pageX+A.x),W=.5*(r.pageY+A.y);S.set(B,W)}y.subVectors(S,b).multiplyScalar(e.rotateSpeed);const u=e.domElement;u&&(Y(2*Math.PI*y.x/u.clientHeight),Z(2*Math.PI*y.y/u.clientHeight)),b.copy(S)}function te(r){if(f.length==1)j.set(r.pageX,r.pageY);else{const u=Je(r),A=.5*(r.pageX+u.x),B=.5*(r.pageY+u.y);j.set(A,B)}z.subVectors(j,C).multiplyScalar(e.panSpeed),Q(z.x,z.y),C.copy(j)}function ve(r){const u=Je(r),A=r.pageX-u.x,B=r.pageY-u.y,W=Math.sqrt(A*A+B*B);P.set(0,W),I.set(0,Math.pow(P.y/E.y,e.zoomSpeed)),ge(I.y),E.copy(P)}function Re(r){e.enableZoom&&ve(r),e.enablePan&&te(r)}function Le(r){e.enableZoom&&ve(r),e.enableRotate&&G(r)}function Ce(r){var u,A;e.enabled!==!1&&(f.length===0&&((u=e.domElement)==null||u.ownerDocument.addEventListener("pointermove",de),(A=e.domElement)==null||A.ownerDocument.addEventListener("pointerup",pe)),go(r),r.pointerType==="touch"?mo(r):fo(r))}function de(r){e.enabled!==!1&&(r.pointerType==="touch"?xo(r):ho(r))}function pe(r){var u,A,B;wt(r),f.length===0&&((u=e.domElement)==null||u.releasePointerCapture(r.pointerId),(A=e.domElement)==null||A.ownerDocument.removeEventListener("pointermove",de),(B=e.domElement)==null||B.ownerDocument.removeEventListener("pointerup",pe)),e.dispatchEvent(d),a=c.NONE}function gt(r){wt(r)}function fo(r){let u;switch(r.button){case 0:u=e.mouseButtons.LEFT;break;case 1:u=e.mouseButtons.MIDDLE;break;case 2:u=e.mouseButtons.RIGHT;break;default:u=-1}switch(u){case ue.DOLLY:if(e.enableZoom===!1)return;X(r),a=c.DOLLY;break;case ue.ROTATE:if(r.ctrlKey||r.metaKey||r.shiftKey){if(e.enablePan===!1)return;Ie(r),a=c.PAN}else{if(e.enableRotate===!1)return;_e(r),a=c.ROTATE}break;case ue.PAN:if(r.ctrlKey||r.metaKey||r.shiftKey){if(e.enableRotate===!1)return;_e(r),a=c.ROTATE}else{if(e.enablePan===!1)return;Ie(r),a=c.PAN}break;default:a=c.NONE}a!==c.NONE&&e.dispatchEvent(l)}function ho(r){if(e.enabled!==!1)switch(a){case c.ROTATE:if(e.enableRotate===!1)return;ye(r);break;case c.DOLLY:if(e.enableZoom===!1)return;we(r);break;case c.PAN:if(e.enablePan===!1)return;Xe(r);break}}function bt(r){e.enabled===!1||e.enableZoom===!1||a!==c.NONE&&a!==c.ROTATE||(r.preventDefault(),e.dispatchEvent(l),Ke(r),e.dispatchEvent(d))}function Qe(r){e.enabled===!1||e.enablePan===!1||qe(r)}function mo(r){switch(jt(r),f.length){case 1:switch(e.touches.ONE){case fe.ROTATE:if(e.enableRotate===!1)return;je(),a=c.TOUCH_ROTATE;break;case fe.PAN:if(e.enablePan===!1)return;Ne(),a=c.TOUCH_PAN;break;default:a=c.NONE}break;case 2:switch(e.touches.TWO){case fe.DOLLY_PAN:if(e.enableZoom===!1&&e.enablePan===!1)return;$(),a=c.TOUCH_DOLLY_PAN;break;case fe.DOLLY_ROTATE:if(e.enableZoom===!1&&e.enableRotate===!1)return;L(),a=c.TOUCH_DOLLY_ROTATE;break;default:a=c.NONE}break;default:a=c.NONE}a!==c.NONE&&e.dispatchEvent(l)}function xo(r){switch(jt(r),a){case c.TOUCH_ROTATE:if(e.enableRotate===!1)return;G(r),e.update();break;case c.TOUCH_PAN:if(e.enablePan===!1)return;te(r),e.update();break;case c.TOUCH_DOLLY_PAN:if(e.enableZoom===!1&&e.enablePan===!1)return;Re(r),e.update();break;case c.TOUCH_DOLLY_ROTATE:if(e.enableZoom===!1&&e.enableRotate===!1)return;Le(r),e.update();break;default:a=c.NONE}}function yt(r){e.enabled!==!1&&r.preventDefault()}function go(r){f.push(r)}function wt(r){delete k[r.pointerId];for(let u=0;u<f.length;u++)if(f[u].pointerId==r.pointerId){f.splice(u,1);return}}function jt(r){let u=k[r.pointerId];u===void 0&&(u=new K,k[r.pointerId]=u),u.set(r.pageX,r.pageY)}function Je(r){const u=r.pointerId===f[0].pointerId?f[1]:f[0];return k[u.pointerId]}s!==void 0&&this.connect(s),this.update()}};const Qn=new N,Dt=x.forwardRef(function({start:n=[0,0,0],end:s=[0,0,0],mid:e,segments:i=20,...l},d){const c=x.useRef(null),[a]=x.useState(()=>new Wo(void 0,void 0,void 0)),w=x.useCallback((h,m,g,b=20)=>(h instanceof N?a.v0.copy(h):a.v0.set(...h),m instanceof N?a.v2.copy(m):a.v2.set(...m),g instanceof N?a.v1.copy(g):a.v1.copy(a.v0.clone().add(a.v2.clone().sub(a.v0)).add(Qn.set(0,a.v0.y-a.v2.y,0))),a.getPoints(b)),[]);x.useLayoutEffect(()=>{c.current.setPoints=(h,m,g)=>{const b=w(h,m,g);c.current.geometry&&c.current.geometry.setPositions(b.map(S=>S.toArray()).flat())}},[]);const p=x.useMemo(()=>w(n,s,e,i),[n,s,e,i]);return x.createElement(zo,U({ref:Ro([c,d]),points:p},l))}),Jn=x.forwardRef(({makeDefault:t,camera:n,regress:s,domElement:e,enableDamping:i=!0,onChange:l,onStart:d,onEnd:c,...a},w)=>{const p=J(P=>P.invalidate),h=J(P=>P.camera),m=J(P=>P.gl),g=J(P=>P.events),b=J(P=>P.setEvents),S=J(P=>P.set),y=J(P=>P.get),C=J(P=>P.performance),j=n||h,z=e||g.connected||m.domElement,E=x.useMemo(()=>new qn(j),[j]);return Ze(()=>{E.enabled&&E.update()},-1),x.useEffect(()=>(E.connect(z),()=>void E.dispose()),[z,s,E,p]),x.useEffect(()=>{const P=R=>{p(),s&&C.regress(),l&&l(R)},I=R=>{d&&d(R)},V=R=>{c&&c(R)};return E.addEventListener("change",P),E.addEventListener("start",I),E.addEventListener("end",V),()=>{E.removeEventListener("start",I),E.removeEventListener("end",V),E.removeEventListener("change",P)}},[l,d,c,E,p,b]),x.useEffect(()=>{if(t){const P=y().controls;return S({controls:E}),()=>S({controls:P})}},[t,E]),x.createElement("primitive",U({ref:w,object:E,enableDamping:i},a))});function es(t){const n=t+"Geometry";return x.forwardRef(({args:s,children:e,...i},l)=>x.createElement("mesh",U({ref:l},i),x.createElement(n,{attach:"geometry",args:s}),e))}const ts=es("circle"),q=10,os=2,ns=2,Ft=10,ss=10,Gt=(t,n,s)=>{const l=new N().subVectors(n,t).normalize().multiplyScalar(s);return new N().addVectors(t,l)},rs=(t,n,s,e)=>{const i=new N().lerpVectors(t,n,.5),l=new N().subVectors(n,t).normalize(),d=new N(-l.y,l.x,l.z).normalize(),c=(s-e/2)*ss;return new N().addVectors(i,d.multiplyScalar(c))},po=({links:t,nodes:n,onEdgeClick:s})=>{const e=x.useRef(null),{camera:i}=J(),l=new N,d=new N,c=new N,a=new N,w=new N,p=new N,h=new N,m=new N;Ze(()=>{e.current&&n&&e.current.children.forEach((b,S)=>{var F,f,k,D;const y=t[S];if(!y)return;const C=n.find(_=>_.ref_id===y.target),j=n.find(_=>_.ref_id===y.source);l.set((j==null?void 0:j.x)||0,(j==null?void 0:j.y)||0,(j==null?void 0:j.z)||0),d.set((C==null?void 0:C.x)||0,(C==null?void 0:C.y)||0,(C==null?void 0:C.z)||0);const z=b.children[0],E=b.children[1],P=b.children[2],I=b.children[3],V=t.filter(_=>_.source===y.source&&_.target===y.target||_.source===y.target&&_.target===y.source).length,R=t.filter((_,Y)=>Y<S&&(_.source===y.source&&_.target===y.target||_.source===y.target&&_.target===y.source)).length;if((j==null?void 0:j.ref_id)===(C==null?void 0:C.ref_id)){const[_,Y,Z]=ko(l);(F=z.setPoints)==null||F.call(z,l,Z,_),(f=E.setPoints)==null||f.call(E,Z,d,_),P.position.set(Z.x,Z.y,Y.z),P.lookAt(_),P.rotateX(-Math.PI/2),I.position.set(Z.x,Z.y,Y.z),I.lookAt(i.position)}else{m.copy(Gt(l,d,q)),h.copy(Gt(d,l,q+.5)),c.lerpVectors(m,h,.5),V>1?c.copy(rs(m,h,R,V)):c.lerpVectors(m,h,.5);const _=30;a.subVectors(h,m).normalize().multiplyScalar(_/2),w.subVectors(c,a),p.addVectors(c,a);const Y=new N().addVectors(m,w).multiplyScalar(.5),Z=new N().addVectors(p,h).multiplyScalar(.5);(k=z.setPoints)==null||k.call(z,m,w,Y),(D=E.setPoints)==null||D.call(E,p,h,Z),P.position.set(h.x,h.y,h.z),P.lookAt(m),P.rotateX(-Math.PI/2),I.position.set(c.x,c.y,c.z),I.lookAt(i.position);let ee=Math.atan2(h.y-m.y,h.x-m.x);(ee>Math.PI/2||ee<-Math.PI/2)&&(ee+=Math.PI),I.rotation.set(0,0,ee);const ae=m.distanceTo(h),Q=ae<_?2:4;ae<_?I.text=ut(y.edge_type,Ft):I.text=y.edge_type,I.fontSize=Q}})});const g=(b,S,y,C)=>{if(b==="CHILD_OF"||S==="string"||y==="string")return;const j=n==null?void 0:n.find(I=>I.ref_id===S),z=n==null?void 0:n.find(I=>I.ref_id===y),E=(j==null?void 0:j.type)||"",P=(z==null?void 0:z.type)||"";s(C,b,E,P)};return o.jsx("group",{ref:e,children:t.map(b=>o.jsxs("group",{children:[o.jsx(Dt,{color:"white",end:[0,0,0],lineWidth:1,start:[0,0,0]}),o.jsx(Dt,{color:"white",end:[0,0,0],lineWidth:1,start:[0,0,0]}),o.jsxs("mesh",{position:new N(0,0,0),children:[o.jsx("coneGeometry",{args:[os,ns,32]}),o.jsx("meshBasicMaterial",{color:"white"})]}),o.jsx(io,{anchorX:"center",anchorY:"middle",color:"white",...ao,lineHeight:1,maxWidth:20,onClick:()=>g(b.edge_type,b.source,b.target,b.ref_id),rotation:[0,0,0],textAlign:"center",children:ut(b.edge_type,Ft)})]},b.ref_id))})};po.displayName="Lines";const is=["#ff13c9","#5af0ff","#3233ff","#c2f0c2","#ff6666","#99ccff","#ffb3b3"],as=O.div`
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
`,cs=O(Lo)`
  position: absolute;
`;new Ho(2,2,2);const uo=x.memo(({node:t,setSelectedNode:n,onSimulationUpdate:s,isSelected:e})=>{var S;const i=x.useRef(null),[l,d]=x.useState(!1);console.log(e);const{size:c,camera:a}=J(),w=So(y=>{if(t.type==="Thing")return;const{xy:[C,j],down:z,dragging:E,first:P,elapsedTime:I}=y;if(!(!E||P||I<100)&&z&&i.current){s();const V=(C-c.left)/window.innerWidth*c.width,R=(j-c.top)/window.innerHeight*c.height,k=new N(V/c.width*2-1,-R/c.height*2+1,0).unproject(a).multiply(new N(1,1,0)).clone();t.fx=k.x,t.fy=k.y}});Ze(()=>{i.current&&i.current.position.set(t.x||0,t.y||0,0)});const p=is[(S=t==null?void 0:t.children)==null?void 0:S.length]||"red",h=y=>{y.stopPropagation(),t.type!=="Thing"&&n()},m=ut(t.type||"",q),g=()=>{d(!0)},b=()=>{d(!1)};return o.jsxs("mesh",{ref:i,onClick:h,...w(),onPointerOut:b,onPointerOver:g,position:new N(t.x,t.y,0),children:[o.jsx(ts,{args:[q,30,20],children:o.jsx("meshStandardMaterial",{attach:"material",color:p})}),o.jsx(io,{...ao,clipRect:[-q,-q,q,q],color:"#000",fontSize:2,maxWidth:q*2,name:t.type,textAlign:"left",children:m}),l&&o.jsx(cs,{position:[0,5,0],zIndexRange:[100,0],children:o.jsx(as,{children:t.type})})]})});uo.displayName="Node";const ls=({simulation:t,setSelectedSchemaId:n,selectedId:s,setIsAddEdgeNode:e})=>{const[i]=oo(d=>[d.schemas]),l=()=>{t&&(t.alpha(.05),t.restart())};return o.jsx(o.Fragment,{children:i.map((d,c)=>{const a=t.nodes()[c];return a?o.jsx(uo,{isSelected:a.ref_id===s,node:a,onSimulationUpdate:l,setSelectedNode:()=>{e(!1),n(a.ref_id)}},a.ref_id):null})})},ds=({schemasWithPositions:t,filteredLinks:n,setSelectedSchemaId:s,selectedSchemaId:e,setIsAddEdgeNode:i,onEdgeClick:l})=>{const[d,c]=x.useState(null),a=$t(t),w=$t(n);return x.useEffect(()=>{if(!t.length||!n.length)return;const p=structuredClone(t),h=structuredClone(n);if(d){a&&a.length!==t.length&&w&&w.length!==n.length&&(d.nodes(p).force("link",Et(h).id(g=>g.ref_id).distance(100)).force("charge",Pt()).force("center",Tt()).force("collide",Mt(q+5)).alpha(.5).restart(),c({...d}));return}const m=Co(p).force("link",Et(h).id(g=>g.ref_id).distance(120)).force("charge",Pt().strength(-100)).force("center",Tt()).force("collide",Mt(q+5));c(m)},[t,d,n,a,w]),Ze(()=>{}),d?o.jsxs(o.Fragment,{children:[o.jsx(po,{links:n,nodes:d.nodes(),onEdgeClick:l}),o.jsx(ls,{selectedId:e,setIsAddEdgeNode:i,setSelectedSchemaId:s,simulation:d})]}):null},ct=new Uo(0),ps=({selectedSchemaId:t,links:n,schemasWithPositions:s,setSelectedSchemaId:e,setIsAddEdgeNode:i,onEdgeClick:l})=>o.jsxs(Bo,{camera:{zoom:1,position:[0,0,200]},id:"schema-canvas",linear:!0,orthographic:!0,children:[o.jsx("color",{args:[ct.r,ct.g,ct.b],attach:"background"}),Eo&&o.jsx(Vo,{position:"right-bottom"}),o.jsx(us,{}),o.jsx(Do,{}),o.jsx(ds,{filteredLinks:n,onEdgeClick:l,schemasWithPositions:s,selectedSchemaId:t,setIsAddEdgeNode:i,setSelectedSchemaId:e})]}),us=()=>{x.useEffect(()=>{const s=i=>{["Meta","Alt"].includes(i.key)&&(document.body.style.cursor="grab")},e=i=>{["Meta","Alt"].includes(i.key)&&(document.body.style.cursor="default")};return window.addEventListener("keydown",s,!1),window.addEventListener("keyup",e,!1),()=>{window.removeEventListener("keydown",s,!1),window.removeEventListener("keyup",e,!1)}},[]);const t=()=>{document.body.style.cursor="grabbing"},n=()=>{document.body.style.cursor="default"};return o.jsx(Jn,{dampingFactor:1,enableDamping:!0,enablePan:!0,enableRotate:!1,enableZoom:!0,maxZoom:20,minZoom:1,onEnd:n,onStart:t,zoomSpeed:1.5,zoomToCursor:!0})},fs=t=>o.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 18 19",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:o.jsx("path",{d:"M9.5002 0.270145C10.3742 0.270145 11.1128 0.571885 11.7161 1.17537C12.3193 1.77868 12.6209 2.51732 12.6209 3.39129C12.6209 4.17273 12.3716 4.85117 11.873 5.42662C11.3744 6.00189 10.7483 6.34792 9.99474 6.46469L9.99474 9.0052L13.8388 9.0052C14.2785 9.0052 14.6549 9.16172 14.9679 9.47476C15.2809 9.78779 15.4375 10.1642 15.4375 10.6039L15.4375 12.564L17.0171 12.564C17.2435 12.564 17.4334 12.6405 17.5866 12.7936C17.7396 12.9468 17.8162 13.1366 17.8162 13.3631L17.8162 17.5042C17.8162 17.7389 17.7396 17.9321 17.5866 18.0836C17.4334 18.2352 17.2435 18.311 17.0171 18.311L12.8759 18.311C12.6412 18.311 12.4481 18.2345 12.2965 18.0814C12.1449 17.9282 12.0692 17.7384 12.0692 17.5119L12.0692 13.3707C12.0692 13.136 12.1457 12.9429 12.2987 12.7913C12.452 12.6398 12.6418 12.564 12.8682 12.564L14.4479 12.564L14.4479 10.6039C14.4479 10.4262 14.3908 10.2803 14.2767 10.166C14.1624 10.0518 14.0164 9.99478 13.8388 9.99478L5.16112 9.99478C4.98349 9.99478 4.83753 10.0518 4.72323 10.166C4.6091 10.2803 4.55203 10.4262 4.55203 10.6039L4.55203 12.6115C5.3056 12.7283 5.93168 13.0743 6.43026 13.6496C6.92885 14.225 7.17814 14.9034 7.17814 15.6849C7.17814 16.5587 6.87648 17.2973 6.27317 17.9008C5.66969 18.5041 4.93096 18.8058 4.05699 18.8058C3.18303 18.8058 2.44439 18.5041 1.84107 17.9008C1.23792 17.2973 0.936342 16.5587 0.936343 15.6849C0.936343 14.9034 1.18564 14.225 1.68422 13.6496C2.18281 13.0743 2.80888 12.7283 3.56245 12.6115L3.56245 10.6039C3.56245 10.1642 3.71897 9.78779 4.03201 9.47476C4.34504 9.16172 4.72142 9.0052 5.16112 9.0052L9.00516 9.0052L9.00516 6.46469C8.25159 6.34792 7.62552 6.00189 7.12693 5.42662C6.62835 4.85117 6.37905 4.17273 6.37905 3.39129C6.37905 2.51732 6.68071 1.77868 7.28403 1.17537C7.88751 0.571885 8.62623 0.270145 9.5002 0.270145Z",fill:"currentColor"})}),hs=({onClose:t,activeTab:n,setActiveTab:s})=>o.jsxs(ms,{children:[o.jsxs(xs,{children:[o.jsx(fs,{}),o.jsx(gs,{children:"Blueprint"})]}),o.jsxs(bs,{children:[o.jsx(Yt,{active:n==="all",onClick:()=>s("all"),children:"Show All"}),o.jsx(Yt,{active:n==="parent",onClick:()=>s("parent"),children:"Parent Only"})]}),o.jsx(ys,{onClick:t,children:o.jsx(xt,{})})]}),ms=O(v)`
  background-color: ${T.BG1};
  height: 64px;
  width: 100%;
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
  justify-content: space-between;
  padding: 17px;
  border-bottom: 1px solid ${T.black};
`,xs=O.div`
  display: flex;
  align-items: center;
  font-size: 22px;
  font-weight: 400;
  font-family: Barlow;

  svg {
    color: ${T.GRAY6};
    margin-left: 6px;
  }
`,gs=O.span`
  color: ${T.white};
  font-weight: 400;
  font-family: Barlow;
  margin-left: 15px;
  font-size: 22px;
`,bs=O.div`
  display: flex;
  position: absolute;
  top: 16px;
  right: 60px;
  background-color: ${T.divider2};
  border-radius: 6px;
  padding: 2px;
`,Yt=O.div`
  color: ${t=>t.active?T.white:T.GRAY6};
  background-color: ${t=>t.active?T.BUTTON1:"transparent"};
  padding: 6px 12px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 13px;
  font-weight: 500;
  margin-left: 2px;
  font-family: Barlow;

  &:first-child {
    margin-left: 0;
  }
`,ys=O.div`
  position: absolute;
  top: 16px;
  right: 12px;
  font-size: 20px;
  color: ${T.GRAY6};
  cursor: pointer;
  z-index: 1;

  svg {
    width: 30px;
    height: 32px;
  }
`,ws=t=>o.jsxs("svg",{width:"1em",height:"1em",viewBox:"0 0 23 22",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:[o.jsx("mask",{id:"mask0_8954_27793",maskUnits:"userSpaceOnUse",x:"10",y:"-3",width:"16",height:"16",children:o.jsx("rect",{x:"10",y:"-3",width:"1em",height:"1em",fill:"currentColor"})}),o.jsx("g",{mask:"url(#mask0_8954_27793)",children:o.jsx("path",{d:"M17.5 5.50005H14.1666C14.025 5.50005 13.9062 5.45212 13.8104 5.35625C13.7145 5.26037 13.6666 5.14157 13.6666 4.99985C13.6666 4.85812 13.7145 4.73939 13.8104 4.64367C13.9062 4.54794 14.025 4.50008 14.1666 4.50008H17.5V1.16675C17.5 1.02508 17.5479 0.906331 17.6438 0.810498C17.7396 0.714665 17.8584 0.666748 18.0002 0.666748C18.1419 0.666748 18.2606 0.714665 18.3563 0.810498C18.4521 0.906331 18.4999 1.02508 18.4999 1.16675V4.50008H21.8333C21.9749 4.50008 22.0937 4.54802 22.1895 4.64388C22.2853 4.73976 22.3333 4.85856 22.3333 5.00028C22.3333 5.14202 22.2853 5.26074 22.1895 5.35647C22.0937 5.45219 21.9749 5.50005 21.8333 5.50005H18.4999V8.83338C18.4999 8.97505 18.452 9.0938 18.3561 9.18963C18.2602 9.28547 18.1414 9.33338 17.9997 9.33338C17.858 9.33338 17.7393 9.28547 17.6435 9.18963C17.5478 9.0938 17.5 8.97505 17.5 8.83338V5.50005Z",fill:"currentColor"})}),o.jsx("path",{d:"M1.33333 6C1.33333 7.47276 2.52724 8.66667 4 8.66667C5.47276 8.66667 6.66667 7.47276 6.66667 6C6.66667 4.52724 5.47276 3.33333 4 3.33333C2.52724 3.33333 1.33333 4.52724 1.33333 6ZM14.3333 19C14.3333 20.4728 15.5272 21.6667 17 21.6667C18.4728 21.6667 19.6667 20.4728 19.6667 19C19.6667 17.5272 18.4728 16.3333 17 16.3333C15.5272 16.3333 14.3333 17.5272 14.3333 19ZM3.64645 6.35355L16.6464 19.3536L17.3536 18.6464L4.35355 5.64645L3.64645 6.35355Z",fill:"currentColor"})]}),js=({onCreateNew:t,onAddEdgeNode:n})=>o.jsxs(vs,{children:[o.jsx(lt,{"data-testid":"add-schema-type",onClick:t,children:o.jsx(dt,{children:o.jsx(ro,{})})}),o.jsx(lt,{"data-testid":"add-edge",onClick:n,children:o.jsx(dt,{children:o.jsx(ws,{})})}),o.jsx(lt,{disabled:!0,children:o.jsx(dt,{children:o.jsx(so,{})})})]}),vs=O(v).attrs({align:"flex-start",direction:"column",justify:"flex-start"})`
  flex: 1;
  gap: 17px;
  padding: 16px 0 0 16px;
`,lt=O(v).attrs({align:"center",justify:"center",p:0})`
  position: relative;
  width: 40px;
  height: 40px;
  flex-direction: row;
  color: ${T.GRAY6};
  background: ${({disabled:t})=>t?T.disableBtn:T.BG1};
  cursor: pointer;
  border-radius: 6px;
  transition: ${({theme:t})=>t.transitions.create(["opacity","box-shadow","background-color"])};

  &:hover {
    color: ${({disabled:t})=>t?T.GRAY6:T.white};
  }

  &:active {
    color: ${T.white};
    background: ${({disabled:t})=>t?T.BG1:T.black};
  }

  &.root {
    border-radius: 50%;
    padding: 0;
    align-items: center;
    justify-content: center;
    border: none;
  }
`,dt=O(v)`
  justify-content: center;
  align-items: center;
  font-size: 24px;
`,Cs=({Close:t})=>{const[n,s]=x.useState(""),[e,i]=x.useState(!1),[l,d]=x.useState(!1),[c,a]=x.useState(!1),[w,p]=x.useState({refId:"",edgeType:"",source:"",target:""}),[h,m]=x.useState(!1),[g,b]=x.useState("all"),[S,y,C,j]=oo(f=>[f.schemas,f.links,f.setSchemas,f.setSchemaLinks]);x.useEffect(()=>{(async()=>{d(!0);try{const k=await At(),D=k.schemas.filter(_=>_.ref_id&&!_.is_deleted);C(D.length>0?D:k.schemas),j(k.edges.length>0?k.edges:[]),d(!1)}catch(k){console.error("Error fetching data:",k),d(!1)}})()},[C,j]);const z=f=>{if(S.some(D=>D.ref_id===f.ref_id))C(S.map(D=>D.ref_id===f.ref_id?{...f,children:[]}:D));else{C([...S,{...f,children:[]}]);const D=S.find(_=>f.parent===_.type);j([...y,{ref_id:`new-link-${y.length}`,edge_type:"CHILD_OF",source:f.ref_id||"new",target:(D==null?void 0:D.ref_id)||"new"}])}},E=async()=>{const f=await At();C(f.schemas.filter(k=>k.ref_id&&!k.is_deleted&&k.ref_id)),j(f.edges)},P=f=>{C(S.filter(k=>k.type!==f))},I=S.map(f=>({...f,children:S.filter(k=>k.parent===f.type).map(k=>k.ref_id||"")})),V=y.filter(f=>I.some(k=>k.ref_id===f.source)&&I.some(k=>k.ref_id===f.target)),R=S.find(f=>f.ref_id===n)||null;if(l)return o.jsx(v,{align:"center",basis:"100%",grow:1,justify:"center",shrink:1,children:o.jsx(le,{color:T.white})});const F=g==="all"?V:V.filter(f=>f.edge_type==="CHILD_OF");return o.jsxs(o.Fragment,{children:[o.jsx(v,{ml:-20,mr:-20,mt:-20,children:o.jsx(hs,{activeTab:g,onClose:t,setActiveTab:b})}),o.jsxs(v,{align:"stretch",direction:"row",grow:1,children:[o.jsx(v,{mb:-20,ml:-20,children:R||e?o.jsx(Wt,{children:o.jsx(Ht,{children:o.jsx(Dn,{graphLoading:h,onDelete:P,onSchemaCreate:z,onSchemaUpdate:E,selectedSchema:R,setGraphLoading:m,setIsCreateNew:i,setSelectedSchemaId:s})})}):null}),o.jsx(v,{children:c?o.jsx(Wt,{children:o.jsx(Ht,{children:o.jsx(Tn,{edgeData:w,setGraphLoading:m,setIsAddEdgeNode:a})})}):null}),o.jsx(v,{children:o.jsx(js,{onAddEdgeNode:()=>{a(!0),i(!1),s(""),p({refId:"",edgeType:"",source:"",target:""})},onCreateNew:()=>{a(!1),i(!0),s("")}})}),o.jsx(Es,{direction:"row",grow:1,children:o.jsx(Ps,{children:h?o.jsx(v,{align:"center",basis:"100%",grow:1,justify:"center",shrink:1,children:o.jsx(le,{color:T.white})}):o.jsx(ps,{links:F,onEdgeClick:(f,k,D,_)=>{p({refId:f,edgeType:k,source:D,target:_}),a(!0),i(!1),s("")},schemasWithPositions:I,selectedSchemaId:n,setIsAddEdgeNode:a,setSelectedSchemaId:s})})})]})]})},Es=O(v)`
  flex: 1 1 auto;
  justify-content: center;
  position: relative;
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
`,Wt=O(v)`
  width: 100%;
  max-width: 400px;
  background: ${T.BG1};
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
`,Ht=O.div`
  height: 100%;
  overflow-y: auto;
  padding: 16px;
  max-height: calc(90vh - 20px);

  @media (max-width: 1440px) {
    max-height: calc(85vh - 20px);
  }

  @media (max-width: 1024px) {
    max-height: calc(65vh - 20px);
  }

  @media (max-width: 924px) {
    max-height: calc(65vh - 20px);
  }
`,Ps=O(v)`
  flex: 1 1 100%;
`,Ts=()=>{const{close:t}=eo("blueprintGraph"),n=()=>{t()};return o.jsx(Po,{background:"black",id:"blueprintGraph",kind:"full",preventOutsideClose:!0,children:o.jsx(Cs,{Close:n})})},Xs=x.memo(Ts);export{Xs as BlueprintModal};
