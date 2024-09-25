import{r as x,b as Kt,g as qt,s as _e,_ as U,u as Qt,ad as yo,a as Jt,j as o,c as eo,bp as Ue,bq as xt,d as to,e as be,f as Pt,ae as wo,af as jo,o as _,p as k,ba as gt,D as se,F as j,aW as We,br as vo,bs as ot,bt as Co,b9 as oo,Q as no,bu as Eo,aV as ge,aa as ft,a1 as Tt,a0 as kt,Z as At,Y as Mt,X as Po,N as To,ao as $t}from"./index-5cb4ebc8.js";import{B as ko}from"./index-3d09e601.js";import{i as bt,B as Oe,F as ro,k as yt,q as Ao,h as Mo,I as $o,r as _o,b as so}from"./index-72cdd01f.js";import{O as Oo,n as Io,a as _t,N as io}from"./constants-a6b58f4d.js";import{T as He}from"./index-f044788d.js";import{A as Me}from"./index-63872321.js";import{C as ue}from"./ClipLoader-0a9bd744.js";import{D as ao}from"./DeleteIcon-3a7bc65f.js";import{P as co}from"./PlusIcon-895f0dd6.js";import{p as ht,c as No,g as zo}from"./index-44e303ef.js";import{e as So}from"./Stack-19ef1f72.js";import{S as Ro,F as Lo}from"./FormControlLabel-ad47dbad.js";import{g as Bo,m as Do,u as te,b as Ze,t as mt,T as lo,i as uo,H as Vo,j as Ot,C as Fo,P as Go,k as Yo}from"./index-e3375c20.js";import{Z as Wo,_ as Ho,E as Uo,V as S,$ as me,a0 as xe,a1 as It,P as Fe,a2 as Ge,a3 as Nt,a as Q,a4 as Zo,G as Xo,C as Ko}from"./three.module-2ce81f73.js";import"./index.esm-3c53850e.js";import"./InfoIcon-fcbe919c.js";import"./Popover-80ebe034.js";import"./useSlotProps-47008162.js";import"./createSvgIcon-933bf452.js";import"./TextareaAutosize-33c0b2f3.js";import"./Typography-01a5a3ee.js";const qo=x.createContext(),zt=qo;function Qo(t){return Kt("MuiGrid",t)}const Jo=[0,1,2,3,4,5,6,7,8,9,10],en=["column-reverse","column","row-reverse","row"],tn=["nowrap","wrap-reverse","wrap"],Ae=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12],on=qt("MuiGrid",["root","container","item","zeroMinWidth",...Jo.map(t=>`spacing-xs-${t}`),...en.map(t=>`direction-xs-${t}`),...tn.map(t=>`wrap-xs-${t}`),...Ae.map(t=>`grid-xs-${t}`),...Ae.map(t=>`grid-sm-${t}`),...Ae.map(t=>`grid-md-${t}`),...Ae.map(t=>`grid-lg-${t}`),...Ae.map(t=>`grid-xl-${t}`)]),$e=on,nn=["className","columns","columnSpacing","component","container","direction","item","rowSpacing","spacing","wrap","zeroMinWidth"];function ye(t){const r=parseFloat(t);return`${r}${String(t).replace(String(r),"")||"px"}`}function rn({theme:t,ownerState:r}){let n;return t.breakpoints.keys.reduce((e,a)=>{let d={};if(r[a]&&(n=r[a]),!n)return e;if(n===!0)d={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if(n==="auto")d={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{const u=Ue({values:r.columns,breakpoints:t.breakpoints.values}),i=typeof u=="object"?u[a]:u;if(i==null)return e;const c=`${Math.round(n/i*1e8)/1e6}%`;let T={};if(r.container&&r.item&&r.columnSpacing!==0){const l=t.spacing(r.columnSpacing);if(l!=="0px"){const p=`calc(${c} + ${ye(l)})`;T={flexBasis:p,maxWidth:p}}}d=U({flexBasis:c,flexGrow:0,maxWidth:c},T)}return t.breakpoints.values[a]===0?Object.assign(e,d):e[t.breakpoints.up(a)]=d,e},{})}function sn({theme:t,ownerState:r}){const n=Ue({values:r.direction,breakpoints:t.breakpoints.values});return xt({theme:t},n,e=>{const a={flexDirection:e};return e.indexOf("column")===0&&(a[`& > .${$e.item}`]={maxWidth:"none"}),a})}function po({breakpoints:t,values:r}){let n="";Object.keys(r).forEach(a=>{n===""&&r[a]!==0&&(n=a)});const e=Object.keys(t).sort((a,d)=>t[a]-t[d]);return e.slice(0,e.indexOf(n))}function an({theme:t,ownerState:r}){const{container:n,rowSpacing:e}=r;let a={};if(n&&e!==0){const d=Ue({values:e,breakpoints:t.breakpoints.values});let u;typeof d=="object"&&(u=po({breakpoints:t.breakpoints.values,values:d})),a=xt({theme:t},d,(i,c)=>{var T;const l=t.spacing(i);return l!=="0px"?{marginTop:`-${ye(l)}`,[`& > .${$e.item}`]:{paddingTop:ye(l)}}:(T=u)!=null&&T.includes(c)?{}:{marginTop:0,[`& > .${$e.item}`]:{paddingTop:0}}})}return a}function cn({theme:t,ownerState:r}){const{container:n,columnSpacing:e}=r;let a={};if(n&&e!==0){const d=Ue({values:e,breakpoints:t.breakpoints.values});let u;typeof d=="object"&&(u=po({breakpoints:t.breakpoints.values,values:d})),a=xt({theme:t},d,(i,c)=>{var T;const l=t.spacing(i);return l!=="0px"?{width:`calc(100% + ${ye(l)})`,marginLeft:`-${ye(l)}`,[`& > .${$e.item}`]:{paddingLeft:ye(l)}}:(T=u)!=null&&T.includes(c)?{}:{width:"100%",marginLeft:0,[`& > .${$e.item}`]:{paddingLeft:0}}})}return a}function ln(t,r,n={}){if(!t||t<=0)return[];if(typeof t=="string"&&!Number.isNaN(Number(t))||typeof t=="number")return[n[`spacing-xs-${String(t)}`]];const e=[];return r.forEach(a=>{const d=t[a];Number(d)>0&&e.push(n[`spacing-${a}-${String(d)}`])}),e}const dn=_e("div",{name:"MuiGrid",slot:"Root",overridesResolver:(t,r)=>{const{ownerState:n}=t,{container:e,direction:a,item:d,spacing:u,wrap:i,zeroMinWidth:c,breakpoints:T}=n;let l=[];e&&(l=ln(u,T,r));const p=[];return T.forEach(m=>{const g=n[m];g&&p.push(r[`grid-${m}-${String(g)}`])}),[r.root,e&&r.container,d&&r.item,c&&r.zeroMinWidth,...l,a!=="row"&&r[`direction-xs-${String(a)}`],i!=="wrap"&&r[`wrap-xs-${String(i)}`],...p]}})(({ownerState:t})=>U({boxSizing:"border-box"},t.container&&{display:"flex",flexWrap:"wrap",width:"100%"},t.item&&{margin:0},t.zeroMinWidth&&{minWidth:0},t.wrap!=="wrap"&&{flexWrap:t.wrap}),sn,an,cn,rn);function un(t,r){if(!t||t<=0)return[];if(typeof t=="string"&&!Number.isNaN(Number(t))||typeof t=="number")return[`spacing-xs-${String(t)}`];const n=[];return r.forEach(e=>{const a=t[e];if(Number(a)>0){const d=`spacing-${e}-${String(a)}`;n.push(d)}}),n}const pn=t=>{const{classes:r,container:n,direction:e,item:a,spacing:d,wrap:u,zeroMinWidth:i,breakpoints:c}=t;let T=[];n&&(T=un(d,c));const l=[];c.forEach(m=>{const g=t[m];g&&l.push(`grid-${m}-${String(g)}`)});const p={root:["root",n&&"container",a&&"item",i&&"zeroMinWidth",...T,e!=="row"&&`direction-xs-${String(e)}`,u!=="wrap"&&`wrap-xs-${String(u)}`,...l]};return to(p,Qo,r)},fn=x.forwardRef(function(r,n){const e=Qt({props:r,name:"MuiGrid"}),{breakpoints:a}=yo(),d=So(e),{className:u,columns:i,columnSpacing:c,component:T="div",container:l=!1,direction:p="row",item:m=!1,rowSpacing:g,spacing:b=0,wrap:$="wrap",zeroMinWidth:y=!1}=d,v=Jt(d,nn),w=g||b,R=c||b,C=x.useContext(zt),P=l?i||12:C,z={},V=U({},v);a.keys.forEach(h=>{v[h]!=null&&(z[h]=v[h],delete V[h])});const L=U({},d,{columns:P,container:l,direction:p,item:m,rowSpacing:w,columnSpacing:R,wrap:$,zeroMinWidth:y,spacing:b},z,{breakpoints:a.keys}),D=pn(L);return o.jsx(zt.Provider,{value:P,children:o.jsx(dn,U({ownerState:L,className:eo(D.root,u),as:T,ref:n},V))})}),ie=fn;function hn(t){return Kt("MuiSwitch",t)}const mn=qt("MuiSwitch",["root","edgeStart","edgeEnd","switchBase","colorPrimary","colorSecondary","sizeSmall","sizeMedium","checked","disabled","input","thumb","track"]),H=mn,xn=["className","color","edge","size","sx"],gn=t=>{const{classes:r,edge:n,size:e,color:a,checked:d,disabled:u}=t,i={root:["root",n&&`edge${be(n)}`,`size${be(e)}`],switchBase:["switchBase",`color${be(a)}`,d&&"checked",u&&"disabled"],thumb:["thumb"],track:["track"],input:["input"]},c=to(i,hn,r);return U({},r,c)},bn=_e("span",{name:"MuiSwitch",slot:"Root",overridesResolver:(t,r)=>{const{ownerState:n}=t;return[r.root,n.edge&&r[`edge${be(n.edge)}`],r[`size${be(n.size)}`]]}})(({ownerState:t})=>U({display:"inline-flex",width:34+12*2,height:14+12*2,overflow:"hidden",padding:12,boxSizing:"border-box",position:"relative",flexShrink:0,zIndex:0,verticalAlign:"middle","@media print":{colorAdjust:"exact"}},t.edge==="start"&&{marginLeft:-8},t.edge==="end"&&{marginRight:-8},t.size==="small"&&{width:40,height:24,padding:7,[`& .${H.thumb}`]:{width:16,height:16},[`& .${H.switchBase}`]:{padding:4,[`&.${H.checked}`]:{transform:"translateX(16px)"}}})),yn=_e(Ro,{name:"MuiSwitch",slot:"SwitchBase",overridesResolver:(t,r)=>{const{ownerState:n}=t;return[r.switchBase,{[`& .${H.input}`]:r.input},n.color!=="default"&&r[`color${be(n.color)}`]]}})(({theme:t})=>({position:"absolute",top:0,left:0,zIndex:1,color:t.vars?t.vars.palette.Switch.defaultColor:`${t.palette.mode==="light"?t.palette.common.white:t.palette.grey[300]}`,transition:t.transitions.create(["left","transform"],{duration:t.transitions.duration.shortest}),[`&.${H.checked}`]:{transform:"translateX(20px)"},[`&.${H.disabled}`]:{color:t.vars?t.vars.palette.Switch.defaultDisabledColor:`${t.palette.mode==="light"?t.palette.grey[100]:t.palette.grey[600]}`},[`&.${H.checked} + .${H.track}`]:{opacity:.5},[`&.${H.disabled} + .${H.track}`]:{opacity:t.vars?t.vars.opacity.switchTrackDisabled:`${t.palette.mode==="light"?.12:.2}`},[`& .${H.input}`]:{left:"-100%",width:"300%"}}),({theme:t,ownerState:r})=>U({"&:hover":{backgroundColor:t.vars?`rgba(${t.vars.palette.action.activeChannel} / ${t.vars.palette.action.hoverOpacity})`:Pt(t.palette.action.active,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},r.color!=="default"&&{[`&.${H.checked}`]:{color:(t.vars||t).palette[r.color].main,"&:hover":{backgroundColor:t.vars?`rgba(${t.vars.palette[r.color].mainChannel} / ${t.vars.palette.action.hoverOpacity})`:Pt(t.palette[r.color].main,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${H.disabled}`]:{color:t.vars?t.vars.palette.Switch[`${r.color}DisabledColor`]:`${t.palette.mode==="light"?wo(t.palette[r.color].main,.62):jo(t.palette[r.color].main,.55)}`}},[`&.${H.checked} + .${H.track}`]:{backgroundColor:(t.vars||t).palette[r.color].main}})),wn=_e("span",{name:"MuiSwitch",slot:"Track",overridesResolver:(t,r)=>r.track})(({theme:t})=>({height:"100%",width:"100%",borderRadius:14/2,zIndex:-1,transition:t.transitions.create(["opacity","background-color"],{duration:t.transitions.duration.shortest}),backgroundColor:t.vars?t.vars.palette.common.onBackground:`${t.palette.mode==="light"?t.palette.common.black:t.palette.common.white}`,opacity:t.vars?t.vars.opacity.switchTrack:`${t.palette.mode==="light"?.38:.3}`})),jn=_e("span",{name:"MuiSwitch",slot:"Thumb",overridesResolver:(t,r)=>r.thumb})(({theme:t})=>({boxShadow:(t.vars||t).shadows[1],backgroundColor:"currentColor",width:20,height:20,borderRadius:"50%"})),vn=x.forwardRef(function(r,n){const e=Qt({props:r,name:"MuiSwitch"}),{className:a,color:d="primary",edge:u=!1,size:i="medium",sx:c}=e,T=Jt(e,xn),l=U({},e,{color:d,edge:u,size:i}),p=gn(l),m=o.jsx(jn,{className:p.thumb,ownerState:l});return o.jsxs(bn,{className:eo(p.root,a),sx:c,ownerState:l,children:[o.jsx(yn,U({type:"checkbox",icon:m,checkedIcon:m,ref:n,ownerState:l},T,{classes:U({},p,{root:p.switchBase})})),o.jsx(wn,{className:p.track,ownerState:l})]})}),fo=vn,Cn={type:"",parent:""},St=({onSelect:t,dataTestId:r,edgeLink:n,hideSelectAll:e,placeholder:a})=>{const d=bt({mode:"onChange",defaultValues:Cn}),{watch:u,setValue:i}=d,[c,T]=x.useState([]),[l,p]=x.useState(!1),m=y=>{i("parent",(y==null?void 0:y.value)||""),t(y==null?void 0:y.value)},g=y=>y.charAt(0).toUpperCase()+y.slice(1);x.useEffect(()=>{(async()=>{p(!0);try{const w=(await gt()).schemas.filter(C=>!C.is_deleted&&C.type).map(C=>(C==null?void 0:C.type)==="thing"?{label:"No Parent",value:C.type}:{label:g(C.type),value:C.type});T(e?w:[{label:"Select all",value:"all"},...w]),n&&i("parent",n)}catch(v){console.warn(v)}finally{p(!1)}})()},[n,i,e]);const b=u("parent"),$=()=>{const y=c==null?void 0:c.find(v=>v.value===b);if(y)return y;if(n)return{label:n,value:n}};return o.jsx(En,{dataTestId:r,disabled:!!n,isLoading:l,onSelect:m,options:c||Oo,placeholder:a,selectedValue:$()})},En=_(Me)`
  .MuiInputBase-input {
    font-family: Barlow;
    font-size: 14px;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0.01em;
    text-align: left;
    color: ${k.white};
    padding-right: -8px;

    &::placeholder {
      font-family: Barlow;
      font-size: 14px;
      font-weight: 400;
      line-height: 16px;
      letter-spacing: 0.01em;
      text-align: left;
      color: ${k.GRAY7};
      opacity: 1;
    }
  }

  && .MuiInput-input.MuiInputBase-input {
    padding-left: 0;
  }
`,Pn=({selectedType:t,setSelectedFromNode:r,setSelectedToNode:n,edgeLinkData:e,selectedFromNode:a,selectedToNode:d})=>{const u=d==="all",i=a==="all";return o.jsxs(j,{mt:8,children:[o.jsxs(j,{mb:25,children:[o.jsx(j,{mb:5,children:o.jsx(nt,{children:"Source"})}),o.jsx(St,{dataTestId:"from_node",edgeLink:e==null?void 0:e.source,hideSelectAll:u,onSelect:r,placeholder:"Source Name"})]}),o.jsxs(j,{mb:10,children:[o.jsx(j,{mb:5,children:o.jsx(nt,{children:"Edge Name"})}),o.jsx(j,{mb:12,children:o.jsx(He,{id:"cy-item-name",maxLength:250,name:"type",placeholder:"Enter Edge Name",rules:{...We,pattern:{message:"No leading whitespace allowed",value:Io}},value:t})})]}),o.jsxs(j,{mb:25,children:[o.jsx(j,{mb:5,children:o.jsx(nt,{children:"Destination"})}),o.jsx(St,{dataTestId:"to_node",edgeLink:e==null?void 0:e.target,hideSelectAll:i,onSelect:n,placeholder:"Select Destination"})]})]})},nt=_(se)`
  font-family: Barlow;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0.01em;
  text-align: left;
  margin-left: 1px;
  color: ${k.mainBottomIcons};
`,Tn=({onCancel:t,edgeLinkData:r,setGraphLoading:n})=>{var z,V,L;const e=bt({mode:"onChange"}),{setValue:a,getValues:d}=e,[u,i]=x.useState(!1),[c,T]=x.useState(!1),[l,p]=x.useState(""),[m,g]=x.useState(""),[b,$]=x.useState(""),y=e.watch("type");x.useEffect(()=>{a("type",r==null?void 0:r.edgeType)},[r==null?void 0:r.edgeType,a]),x.useEffect(()=>{p(y)},[y]);const v=e.handleSubmit(async D=>{i(!0),n(!0);const h={source:m,target:b,edge_type:D.type},O={ref_id:r==null?void 0:r.refId,edge_type:D.type};try{if(r!=null&&r.refId)await vo(O);else if(b&&m)if(m==="all"||b==="all"){const I=(await gt()).schemas.filter(G=>!G.is_deleted&&G.type).map(G=>G.type);m==="all"?await Promise.all(I.map(G=>ot({...h,source:G}))):b==="all"&&await Promise.all(I.map(G=>ot({...h,target:G})))}else await ot(h)}catch(F){console.warn("API Error:",F)}finally{i(!1),n(!1),g(""),$(""),t()}}),w=(V=(z=d())==null?void 0:z.type)==null?void 0:V.trim(),R=w&&((L=r==null?void 0:r.edgeType)==null?void 0:L.trim())!==w,C=r!=null&&r.refId?u||!R:u||!b.trim()||!m.trim()||!l.trim(),P=async()=>{T(!0),n(!0);try{r!=null&&r.refId&&await Co(r==null?void 0:r.refId)}catch(D){console.warn("API Error:",D)}finally{T(!1),n(!1),g(""),$(""),t()}};return o.jsx(ro,{...e,children:o.jsxs("form",{id:"add-type-form",onSubmit:v,children:[o.jsx(Pn,{edgeLinkData:r,selectedFromNode:m,selectedToNode:b,selectedType:l,setSelectedFromNode:g,setSelectedToNode:$}),o.jsxs(j,{direction:"row",justify:"space-between",mt:20,children:[(r==null?void 0:r.refId)&&o.jsx(j,{direction:"column",children:o.jsxs(An,{color:"secondary",disabled:c,onClick:P,size:"large",style:{marginRight:20},variant:"contained",children:["Delete",c&&o.jsxs(Rt,{children:[o.jsx(ue,{color:k.lightGray,size:12})," "]})]})}),o.jsxs(kn,{color:"secondary",disabled:C,onClick:v,size:"large",variant:"contained",children:["Confirm",u&&o.jsxs(Rt,{children:[o.jsx(ue,{color:k.lightGray,size:12})," "]})]})]})]})})},kn=_(Oe)`
  width: 293px !important;
  margin: 0 0 10px auto !important;
`,Rt=_.span`
  margin-top: 2px;
`,An=_(Oe)`
  && {
    color: ${k.primaryRed};
    background-color: rgba(237, 116, 116, 0.1);

    &:hover,
    &:active,
    &:focus {
      color: ${k.primaryRed};
      background-color: rgba(237, 116, 116, 0.2);
    }
  }
`,Mn=({setIsAddEdgeNode:t,edgeData:r,setGraphLoading:n})=>{const e=()=>{t(!1)};return o.jsxs(j,{children:[o.jsxs(_n,{align:"center",direction:"row",justify:"space-between",children:[o.jsx(In,{"data-testid":"edge-modal-title",children:r!=null&&r.refId?"Edit Edge":"Add Edge"}),o.jsx($n,{"data-testid":"close-sidebar-sub-view",onClick:e,children:o.jsx(yt,{})})]}),o.jsx(On,{}),o.jsx(Tn,{edgeLinkData:r,onCancel:e,setGraphLoading:n})]})},$n=_(j)`
  font-size: 32px;
  color: ${k.white};
  cursor: pointer;

  svg {
    color: ${k.GRAY6};
  }

  &:hover {
    svg {
      color: ${k.white};
    }
  }
`,_n=_(j)`
  margin-bottom: 16px;
`,On=_.div`
  border-bottom: 1px solid ${k.black};
  width: calc(100% + 32px);
  margin: 0 -16px 16px;
  opacity: 0.3;
`,In=_(se)`
  font-family: Barlow;
  font-size: 22px;
  font-weight: 600;
  line-height: 16px;
  letter-spacing: 0.01em;
  text-align: left;
  margin-left: 2px;
  color: ${k.white};
`,Nn=/^[a-z0-9_]+$/,zn=({parentParam:t,onDelete:r})=>{const[n,e]=x.useState(!1),[a,d]=x.useState([]),{fields:u,append:i,replace:c,remove:T}=Ao({name:"attributes"}),{setValue:l,watch:p}=Mo();return x.useEffect(()=>{const m=async()=>{try{let g=[{required:!1,type:"string",key:""}];if(t!==io.value.toLowerCase()){e(!0);const b=await oo(t);b.attributes&&typeof b.attributes=="object"?g=ht(b.attributes):g=ht(b)}g=g.filter(b=>b.key!=="node_key"),c(g),d(g)}catch(g){console.warn(g)}finally{e(!1)}};a.length===0&&m()},[t,l,c,a.length]),o.jsxs(o.Fragment,{children:[n?o.jsx(j,{align:"center",children:o.jsx(ue,{color:k.SECONDARY_BLUE,size:"30"})}):o.jsx(Sn,{py:8,children:o.jsx(ie,{container:!0,spacing:2,children:u.map((m,g)=>{const b=p(`attributes[${g}].type`),$=p(`attributes[${g}].required`),y=m.isNew||!1,v=["name"].includes(p(`attributes[${g}].key`));return o.jsxs(x.Fragment,{children:[o.jsx(ie,{item:!0,xs:5,children:o.jsx(He,{autoComplete:"off",className:"text-input",dataTestId:`cy-item-name-${g}`,disabled:!y,id:`cy-item-name-${g}`,maxLength:50,name:`attributes.${g}.key`,placeholder:"Enter value",rules:{...We,pattern:{message:"Please avoid special characters, spaces and uppercase",value:Nn}}})}),o.jsx(ie,{item:!0,xs:4,children:o.jsx(Me,{dataTestId:`cy-item-select-${g}`,disabled:v,onSelect:w=>l(`attributes[${g}].type`,w==null?void 0:w.value),options:_t,selectedValue:_t.find(w=>w.value===b)})}),o.jsxs(ie,{item:!0,xs:3,children:[o.jsx(fo,{checked:$,"data-testid":`cy-item-${g}`,disabled:v,name:`attributes.${g}.required`,onChange:w=>l(`attributes[${g}].required`,w.target.checked),size:"small"}),!v&&o.jsx($o,{onClick:()=>{T(g),m.key!==void 0&&r&&r(m.key)},children:o.jsx(ao,{})})]})]},m.id)})})}),o.jsx(j,{align:"flex-start",py:12,children:o.jsx(Oe,{"data-testid":"add-attribute-btn",onClick:()=>i({key:"",type:"string",required:!0,isNew:!0}),size:"medium",startIcon:o.jsx(co,{}),variant:"contained",children:"Add Attribute"})})]})},Sn=_(j)`
  overflow-y: auto;
  width: calc(100% + 20px);
  max-height: calc(80vh - 300px);
`,Rn=({parent:t,onDelete:r})=>{const n=t;return o.jsxs(j,{children:[o.jsx(j,{direction:"row",mb:10,children:o.jsxs(ie,{container:!0,spacing:2,children:[o.jsx(ie,{item:!0,xs:5,children:o.jsx(rt,{style:{marginRight:180},children:"Attributes"})}),o.jsx(ie,{item:!0,xs:4,children:o.jsx(rt,{style:{marginRight:130},children:"Type"})}),o.jsx(ie,{item:!0,xs:3,children:o.jsx(rt,{children:"Required"})})]})}),n&&o.jsx(zn,{onDelete:r,parentParam:n},n)]})},rt=_(se)`
  font-size: 15px;
  color: gray;
`,Ln=({setMediaOptions:t,initialOptions:r})=>{const[n,e]=x.useState(r);x.useEffect(()=>{e(r)},[r]);const a=d=>{e(u=>{const i={...u,[d]:!u[d]};return t(i),i})};return o.jsxs(Bn,{direction:"column",children:[o.jsx(ct,{}),o.jsx(st,{control:o.jsx(at,{checked:n.videoAudio,onChange:()=>a("videoAudio")}),label:o.jsx(it,{active:n.videoAudio,children:"Video / Audio"}),labelPlacement:"start"}),o.jsx(ct,{}),o.jsx(st,{control:o.jsx(at,{checked:n.image,onChange:()=>a("image")}),label:o.jsx(it,{active:n.image,children:"Image"}),labelPlacement:"start"}),o.jsx(ct,{}),o.jsx(st,{control:o.jsx(at,{checked:n.sourceLink,onChange:()=>a("sourceLink")}),label:o.jsx(it,{active:n.sourceLink,children:"Source Link"}),labelPlacement:"start"})]})},Bn=_(j)`
  direction: column;
`,st=_(Lo)`
  justify-content: space-between;
  margin-left: 2px !important;
  margin-top: 8px;
  margin-bottom: 8px;
`,it=_.span`
  color: ${({active:t})=>t?k.white:k.GRAY7};
  font-family: Barlow;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: 0.01em;
  text-align: left;
`,at=_(t=>o.jsx(fo,{...t}))`
  &.MuiSwitch-root {
    width: 53px;
    height: 38px;
  }
  & .MuiSwitch-switchBase {
    margin-top: 3px;
    &.Mui-checked {
      color: ${k.white};
      & + .MuiSwitch-track {
        background-color: ${k.primaryBlueBorder};
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
    background-color: ${k.BG2};
    opacity: 1;
  }
`,ct=_.div`
  border: 1px solid ${k.BG2};
  width: 100%;
  opacity: 0.5;
`,Lt={type:"",parent:""},Dn=(t,r)=>t.length!==r.length?!0:t.some((n,e)=>{const a=r[e];return n.required!==a.required||n.type!==a.type||n.key!==a.key}),Vn=async(t,r=!1,n,e,a)=>{try{const{attributes:d,selectedIndex:u,ref_id:i,...c}=t,T={...No(d),...n.reduce((m,g)=>({...m,[g]:"delete"}),{})},l={...c,attributes:T,index:u};e.videoAudio?l.media_url="":a.videoAudio&&(l.media_url="delete"),e.image?l.image_url="":a.image&&(l.image_url="delete"),e.sourceLink?l.source_link="":a.sourceLink&&(l.source_link="delete");let p;if(r?p=await ft.put(`/schema/${t.ref_id}`,JSON.stringify(l),{}):p=await ft.post("/schema",JSON.stringify({...l,node_key:"name"}),{}),p.status!=="success")throw new Error("error");return p==null?void 0:p.ref_id}catch(d){let u=ge;if(d.status===400){const i=await d.json();u=i.errorCode||(i==null?void 0:i.status)||ge}else d instanceof Error&&(u=d.message);throw new Error(u)}},Fn=t=>t.charAt(0).toUpperCase()+t.slice(1),Bt=async(t,r)=>{try{const d=((await gt()).schemas||[]).filter(u=>!u.is_deleted&&u.type&&(!r||r(u))).map(u=>u.type==="thing"?{label:"No Parent",value:u.type}:{label:Fn(u.type),value:u.type});t(d)}catch(n){console.warn(n)}},Gn=({graphLoading:t,onSchemaCreate:r,selectedSchema:n,onDelete:e,setSelectedSchemaId:a,setGraphLoading:d,setIsCreateNew:u,onSchemaUpdate:i})=>{const{close:c,visible:T}=no("addType"),l=bt({mode:"onChange",defaultValues:n?{type:n.type,parent:n.parent}:Lt}),{watch:p,setValue:m,reset:g,getValues:b}=l,[$,y]=x.useState(!1),[v,w]=x.useState(!1),[R,C]=x.useState(!1),[P,z]=x.useState(null),[V,L]=x.useState(!1),[D,h]=x.useState(null),[O,F]=x.useState(""),[I,G]=x.useState(null),[Z,ee]=x.useState([]),[ae,q]=x.useState([]),[we,Ie]=x.useState(!0),[je,le]=x.useState({videoAudio:!1,image:!1,sourceLink:!1});x.useEffect(()=>()=>{g()},[T,g]);const Ne=()=>{u(!1),a("")};x.useEffect(()=>{n||(C(!0),Bt(z).finally(()=>C(!1)))},[n]),x.useEffect(()=>{(()=>{g(Lt),q([{required:!1,type:"string",key:""}]),ee([]),le({videoAudio:!1,image:!1,sourceLink:!1})})(),n&&(m("type",n.type),m("parent",n.parent),n.index&&m("selectedIndex",n.index),le({videoAudio:!!n.media_url,image:!!n.image_url,sourceLink:!!n.source_link}),n.type!==io.value.toLowerCase()&&oo(n.type).then(N=>{const K=(N?ht(N):[{required:!1,type:"string",key:""}]).filter(pe=>pe.key!=="node_key");q(K)}),Bt(h,N=>N.type!==n.type))},[n,m,g]);const X=p("parent");p("type");const ze=E=>Array.isArray(E)&&E.every(N=>typeof N=="object"&&"key"in N),ve=p("attributes"),de=x.useMemo(()=>ze(ve)?ve.filter(E=>E.key&&E.key.trim()!==""):[],[ve]),Xe=()=>{c()},Ke=E=>{ee(N=>[...N,E])},qe=async()=>{if(n!=null&&n.type){w(!0),d(!0);try{await ft.delete(`/schema/${n.ref_id}`),e(n.type),c()}catch(E){let N=ge;if((E==null?void 0:E.status)===400){const W=await E.json();N=W.errorCode||(W==null?void 0:W.status)||ge}else E instanceof Error&&(N=E.message);G(N)}finally{w(!1),d(!1),u(!1)}}},Ce=l.handleSubmit(async E=>{if(!X){L(!0);return}y(!0);try{if(n&&E.type!==(n==null?void 0:n.type)||n&&b().parent!==(n==null?void 0:n.parent)){const W=b().parent??(n==null?void 0:n.parent),{selectedIndex:K}=b();d(!0),await Eo(n==null?void 0:n.ref_id,{type:E.type,parent:W,attributes:{index:K}}),await i()}const N=await Vn({...E,...n?{ref_id:n==null?void 0:n.ref_id}:{}},!!n,Z,je,{videoAudio:!!(n!=null&&n.media_url),image:!!(n!=null&&n.image_url),sourceLink:!!(n!=null&&n.source_link)});r({type:E.type,parent:X||"",ref_id:(n==null?void 0:n.ref_id)||N||"new"}),Xe()}catch(N){let W=ge;if((N==null?void 0:N.status)===400){const K=await N.json();W=K.errorCode||(K==null?void 0:K.status)||ge}else N instanceof Error&&(W=N.message);F(W)}finally{y(!1),d(!1),u(!1)}});x.useEffect(()=>{const E=l.watch(N=>{var Ee,fe,he,Pe,Le,Be;const W=Dn(de,ae),K=((Ee=N.type)==null?void 0:Ee.trim())!==((fe=n==null?void 0:n.type)==null?void 0:fe.trim())||((he=N.parent)==null?void 0:he.trim())!==((Pe=n==null?void 0:n.parent)==null?void 0:Pe.trim())||W,pe=!!((Le=N.type)!=null&&Le.trim()),Je=!!((Be=N.parent)!=null&&Be.trim());Ie(n?$||!K||!pe||V:$||V||!pe||!Je)});return()=>E.unsubscribe()},[l,de,ae,n,$,V]);const Se=()=>P==null?void 0:P.find(E=>E.value===X),Re=x.useMemo(()=>{if(X){const E=D==null?void 0:D.find(N=>N.value===X);return E||{label:X,value:X}}if(n!=null&&n.parent){const E=D==null?void 0:D.find(N=>N.value===n.parent);return E||{label:n.parent,value:n.parent}}},[X,n,D]),Qe=x.useMemo(()=>{if(!n)return;const E=de.find(N=>N.key===n.index);if(E)return{label:E.key,value:E.key};if(n.index)return{label:n.index,value:n.index}},[n,de]);return o.jsxs(j,{children:[o.jsxs(Zn,{children:[o.jsx(Xn,{children:n?"Edit Type":"Create Type"}),o.jsx(Un,{"data-testid":"close-sidebar-sub-view",onClick:Ne,children:o.jsx(yt,{})})]}),o.jsx(Wn,{}),o.jsx(j,{children:o.jsx(ro,{...l,children:o.jsxs("form",{id:"add-type-form",onSubmit:Ce,children:[o.jsx(j,{children:n?o.jsxs(o.Fragment,{children:[o.jsxs(j,{mb:12,children:[o.jsx(j,{mb:12,children:o.jsx(se,{children:"Name"})}),o.jsx(j,{mb:12,children:o.jsx(He,{dataTestId:"cy-item-name",defaultValue:n==null?void 0:n.type,id:"cy-item-name",maxLength:250,name:"type",placeholder:"Enter type name",rules:{...We},value:X})})]}),o.jsxs(j,{mb:12,children:[o.jsx(j,{mb:12,children:o.jsx(se,{children:"Parent"})}),o.jsx(Me,{isLoading:R||t,onSelect:E=>{m("parent",(E==null?void 0:E.value)||""),L(!1)},options:D||[],selectedValue:Re}),O&&o.jsx(lt,{children:O})]})]}):o.jsxs(o.Fragment,{children:[o.jsxs(j,{mb:12,children:[o.jsx(j,{mb:12,children:o.jsx(se,{children:"Select Parent"})}),o.jsx(Me,{isLoading:R,onSelect:E=>{m("parent",(E==null?void 0:E.value)||""),L(!1)},options:P,selectedValue:Se()}),V&&o.jsx(lt,{children:"A parent type must be selected"})]}),o.jsxs(j,{children:[o.jsx(j,{mb:12,children:o.jsx(se,{children:"Type name"})}),o.jsx(j,{mb:12,children:o.jsx(He,{id:"cy-item-name",maxLength:250,name:"type",placeholder:"Enter type name",rules:{...We},value:X})})]})]})}),o.jsx(Rn,{onDelete:Ke,parent:n?n.type:X}),o.jsx(Ln,{initialOptions:je,setMediaOptions:le}),o.jsxs(j,{children:[o.jsx(Vt,{}),o.jsx(j,{mb:12,mt:12,children:o.jsx(se,{children:"Indexes"})}),o.jsx(ie,{item:!0,mb:2,width:"70%",children:o.jsx(Me,{onSelect:E=>m("selectedIndex",(E==null?void 0:E.value)||""),options:de.map(E=>({label:E.key,value:E.key})),selectedValue:Qe})}),o.jsx(Vt,{})]}),o.jsxs(j,{direction:"row",justify:"space-between",mt:20,children:[n&&o.jsxs(j,{direction:"column",children:[o.jsxs(Hn,{color:"secondary",disabled:v,onClick:qe,size:"large",style:{marginRight:20},variant:"contained",children:["Delete",v&&o.jsxs(Dt,{children:[o.jsx(ue,{color:k.lightGray,size:12})," "]})]}),I&&o.jsx(lt,{children:I})]}),o.jsxs(Yn,{color:"secondary",disabled:we,onClick:Ce,size:"large",variant:"contained",children:["Confirm",$&&o.jsxs(Dt,{children:[o.jsx(ue,{color:k.lightGray,size:12})," "]})]})]})]})})})]})},Yn=_(Oe)`
  width: 100% !important;
  margin: 0 auto !important;
`,Wn=_.div`
  border-bottom: 1px solid ${k.black};
  width: calc(100% + 32px);
  margin: 0 -16px 16px;
  opacity: 0.3;
`,Dt=_.span`
  margin-top: 2px;
`,Hn=_(Oe)`
  && {
    color: ${k.primaryRed};
    background-color: rgba(237, 116, 116, 0.1);

    &:hover,
    &:active,
    &:focus {
      color: ${k.primaryRed};
      background-color: rgba(237, 116, 116, 0.2);
    }
  }
`,Un=_(j)`
  font-size: 32px;
  color: ${k.white};
  cursor: pointer;

  svg {
    color: ${k.GRAY6};
  }

  &:hover {
    svg {
      color: ${k.white};
    }
  }
`,lt=_(j)`
  font-size: 13px;
  font-family: Barlow;
  color: #ff8f80;
  line-height: 0.2px;
  margin-top: 12px;
  padding-top: 20px;
`,Vt=_.div`
  border: 1px solid ${k.BG2};
  width: calc(100% + 32px);
  opacity: 0.5;
  margin-left: -16px;
`,Zn=_(j)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 16px;
`,Xn=_(se)`
  font-family: Barlow;
  font-size: 22px;
  font-weight: 600;
  line-height: 16px;
  letter-spacing: 0.01em;
  text-align: left;
  color: ${k.white};
`;var Kn=Object.defineProperty,qn=(t,r,n)=>r in t?Kn(t,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[r]=n,A=(t,r,n)=>(qn(t,typeof r!="symbol"?r+"":r,n),n);const Ye=new Wo,Ft=new Ho,Qn=Math.cos(70*(Math.PI/180)),Gt=(t,r)=>(t%r+r)%r;let Jn=class extends Uo{constructor(r,n){super(),A(this,"object"),A(this,"domElement"),A(this,"enabled",!0),A(this,"target",new S),A(this,"minDistance",0),A(this,"maxDistance",1/0),A(this,"minZoom",0),A(this,"maxZoom",1/0),A(this,"minPolarAngle",0),A(this,"maxPolarAngle",Math.PI),A(this,"minAzimuthAngle",-1/0),A(this,"maxAzimuthAngle",1/0),A(this,"enableDamping",!1),A(this,"dampingFactor",.05),A(this,"enableZoom",!0),A(this,"zoomSpeed",1),A(this,"enableRotate",!0),A(this,"rotateSpeed",1),A(this,"enablePan",!0),A(this,"panSpeed",1),A(this,"screenSpacePanning",!0),A(this,"keyPanSpeed",7),A(this,"zoomToCursor",!1),A(this,"autoRotate",!1),A(this,"autoRotateSpeed",2),A(this,"reverseOrbit",!1),A(this,"reverseHorizontalOrbit",!1),A(this,"reverseVerticalOrbit",!1),A(this,"keys",{LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"}),A(this,"mouseButtons",{LEFT:me.ROTATE,MIDDLE:me.DOLLY,RIGHT:me.PAN}),A(this,"touches",{ONE:xe.ROTATE,TWO:xe.DOLLY_PAN}),A(this,"target0"),A(this,"position0"),A(this,"zoom0"),A(this,"_domElementKeyEvents",null),A(this,"getPolarAngle"),A(this,"getAzimuthalAngle"),A(this,"setPolarAngle"),A(this,"setAzimuthalAngle"),A(this,"getDistance"),A(this,"listenToKeyEvents"),A(this,"stopListenToKeyEvents"),A(this,"saveState"),A(this,"reset"),A(this,"update"),A(this,"connect"),A(this,"dispose"),this.object=r,this.domElement=n,this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this.getPolarAngle=()=>l.phi,this.getAzimuthalAngle=()=>l.theta,this.setPolarAngle=s=>{let f=Gt(s,2*Math.PI),M=l.phi;M<0&&(M+=2*Math.PI),f<0&&(f+=2*Math.PI);let B=Math.abs(f-M);2*Math.PI-B<B&&(f<M?f+=2*Math.PI:M+=2*Math.PI),p.phi=f-M,e.update()},this.setAzimuthalAngle=s=>{let f=Gt(s,2*Math.PI),M=l.theta;M<0&&(M+=2*Math.PI),f<0&&(f+=2*Math.PI);let B=Math.abs(f-M);2*Math.PI-B<B&&(f<M?f+=2*Math.PI:M+=2*Math.PI),p.theta=f-M,e.update()},this.getDistance=()=>e.object.position.distanceTo(e.target),this.listenToKeyEvents=s=>{s.addEventListener("keydown",et),this._domElementKeyEvents=s},this.stopListenToKeyEvents=()=>{this._domElementKeyEvents.removeEventListener("keydown",et),this._domElementKeyEvents=null},this.saveState=()=>{e.target0.copy(e.target),e.position0.copy(e.object.position),e.zoom0=e.object.zoom},this.reset=()=>{e.target.copy(e.target0),e.object.position.copy(e.position0),e.object.zoom=e.zoom0,e.object.updateProjectionMatrix(),e.dispatchEvent(a),e.update(),c=i.NONE},this.update=(()=>{const s=new S,f=new S(0,1,0),M=new It().setFromUnitVectors(r.up,f),B=M.clone().invert(),Y=new S,oe=new It,ce=2*Math.PI;return function(){const Et=e.object.position;M.setFromUnitVectors(r.up,f),B.copy(M).invert(),s.copy(Et).sub(e.target),s.applyQuaternion(M),l.setFromVector3(s),e.autoRotate&&c===i.NONE&&G(F()),e.enableDamping?(l.theta+=p.theta*e.dampingFactor,l.phi+=p.phi*e.dampingFactor):(l.theta+=p.theta,l.phi+=p.phi);let ne=e.minAzimuthAngle,re=e.maxAzimuthAngle;isFinite(ne)&&isFinite(re)&&(ne<-Math.PI?ne+=ce:ne>Math.PI&&(ne-=ce),re<-Math.PI?re+=ce:re>Math.PI&&(re-=ce),ne<=re?l.theta=Math.max(ne,Math.min(re,l.theta)):l.theta=l.theta>(ne+re)/2?Math.max(ne,l.theta):Math.min(re,l.theta)),l.phi=Math.max(e.minPolarAngle,Math.min(e.maxPolarAngle,l.phi)),l.makeSafe(),e.enableDamping===!0?e.target.addScaledVector(g,e.dampingFactor):e.target.add(g),e.zoomToCursor&&D||e.object.isOrthographicCamera?l.radius=le(l.radius):l.radius=le(l.radius*m),s.setFromSpherical(l),s.applyQuaternion(B),Et.copy(e.target).add(s),e.object.matrixAutoUpdate||e.object.updateMatrix(),e.object.lookAt(e.target),e.enableDamping===!0?(p.theta*=1-e.dampingFactor,p.phi*=1-e.dampingFactor,g.multiplyScalar(1-e.dampingFactor)):(p.set(0,0,0),g.set(0,0,0));let De=!1;if(e.zoomToCursor&&D){let Te=null;if(e.object instanceof Fe&&e.object.isPerspectiveCamera){const ke=s.length();Te=le(ke*m);const Ve=ke-Te;e.object.position.addScaledVector(V,Ve),e.object.updateMatrixWorld()}else if(e.object.isOrthographicCamera){const ke=new S(L.x,L.y,0);ke.unproject(e.object),e.object.zoom=Math.max(e.minZoom,Math.min(e.maxZoom,e.object.zoom/m)),e.object.updateProjectionMatrix(),De=!0;const Ve=new S(L.x,L.y,0);Ve.unproject(e.object),e.object.position.sub(Ve).add(ke),e.object.updateMatrixWorld(),Te=s.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),e.zoomToCursor=!1;Te!==null&&(e.screenSpacePanning?e.target.set(0,0,-1).transformDirection(e.object.matrix).multiplyScalar(Te).add(e.object.position):(Ye.origin.copy(e.object.position),Ye.direction.set(0,0,-1).transformDirection(e.object.matrix),Math.abs(e.object.up.dot(Ye.direction))<Qn?r.lookAt(e.target):(Ft.setFromNormalAndCoplanarPoint(e.object.up,e.target),Ye.intersectPlane(Ft,e.target))))}else e.object instanceof Ge&&e.object.isOrthographicCamera&&(e.object.zoom=Math.max(e.minZoom,Math.min(e.maxZoom,e.object.zoom/m)),e.object.updateProjectionMatrix(),De=!0);return m=1,D=!1,De||Y.distanceToSquared(e.object.position)>T||8*(1-oe.dot(e.object.quaternion))>T?(e.dispatchEvent(a),Y.copy(e.object.position),oe.copy(e.object.quaternion),De=!1,!0):!1}})(),this.connect=s=>{s===document&&console.error('THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.'),e.domElement=s,e.domElement.style.touchAction="none",e.domElement.addEventListener("contextmenu",jt),e.domElement.addEventListener("pointerdown",Ee),e.domElement.addEventListener("pointercancel",Pe),e.domElement.addEventListener("wheel",wt)},this.dispose=()=>{var s,f,M,B,Y,oe;(s=e.domElement)==null||s.removeEventListener("contextmenu",jt),(f=e.domElement)==null||f.removeEventListener("pointerdown",Ee),(M=e.domElement)==null||M.removeEventListener("pointercancel",Pe),(B=e.domElement)==null||B.removeEventListener("wheel",wt),(Y=e.domElement)==null||Y.ownerDocument.removeEventListener("pointermove",fe),(oe=e.domElement)==null||oe.ownerDocument.removeEventListener("pointerup",he),e._domElementKeyEvents!==null&&e._domElementKeyEvents.removeEventListener("keydown",et)};const e=this,a={type:"change"},d={type:"start"},u={type:"end"},i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let c=i.NONE;const T=1e-6,l=new Nt,p=new Nt;let m=1;const g=new S,b=new Q,$=new Q,y=new Q,v=new Q,w=new Q,R=new Q,C=new Q,P=new Q,z=new Q,V=new S,L=new Q;let D=!1;const h=[],O={};function F(){return 2*Math.PI/60/60*e.autoRotateSpeed}function I(){return Math.pow(.95,e.zoomSpeed)}function G(s){e.reverseOrbit||e.reverseHorizontalOrbit?p.theta+=s:p.theta-=s}function Z(s){e.reverseOrbit||e.reverseVerticalOrbit?p.phi+=s:p.phi-=s}const ee=(()=>{const s=new S;return function(M,B){s.setFromMatrixColumn(B,0),s.multiplyScalar(-M),g.add(s)}})(),ae=(()=>{const s=new S;return function(M,B){e.screenSpacePanning===!0?s.setFromMatrixColumn(B,1):(s.setFromMatrixColumn(B,0),s.crossVectors(e.object.up,s)),s.multiplyScalar(M),g.add(s)}})(),q=(()=>{const s=new S;return function(M,B){const Y=e.domElement;if(Y&&e.object instanceof Fe&&e.object.isPerspectiveCamera){const oe=e.object.position;s.copy(oe).sub(e.target);let ce=s.length();ce*=Math.tan(e.object.fov/2*Math.PI/180),ee(2*M*ce/Y.clientHeight,e.object.matrix),ae(2*B*ce/Y.clientHeight,e.object.matrix)}else Y&&e.object instanceof Ge&&e.object.isOrthographicCamera?(ee(M*(e.object.right-e.object.left)/e.object.zoom/Y.clientWidth,e.object.matrix),ae(B*(e.object.top-e.object.bottom)/e.object.zoom/Y.clientHeight,e.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),e.enablePan=!1)}})();function we(s){e.object instanceof Fe&&e.object.isPerspectiveCamera||e.object instanceof Ge&&e.object.isOrthographicCamera?m/=s:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),e.enableZoom=!1)}function Ie(s){e.object instanceof Fe&&e.object.isPerspectiveCamera||e.object instanceof Ge&&e.object.isOrthographicCamera?m*=s:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),e.enableZoom=!1)}function je(s){if(!e.zoomToCursor||!e.domElement)return;D=!0;const f=e.domElement.getBoundingClientRect(),M=s.clientX-f.left,B=s.clientY-f.top,Y=f.width,oe=f.height;L.x=M/Y*2-1,L.y=-(B/oe)*2+1,V.set(L.x,L.y,1).unproject(e.object).sub(e.object.position).normalize()}function le(s){return Math.max(e.minDistance,Math.min(e.maxDistance,s))}function Ne(s){b.set(s.clientX,s.clientY)}function X(s){je(s),C.set(s.clientX,s.clientY)}function ze(s){v.set(s.clientX,s.clientY)}function ve(s){$.set(s.clientX,s.clientY),y.subVectors($,b).multiplyScalar(e.rotateSpeed);const f=e.domElement;f&&(G(2*Math.PI*y.x/f.clientHeight),Z(2*Math.PI*y.y/f.clientHeight)),b.copy($),e.update()}function de(s){P.set(s.clientX,s.clientY),z.subVectors(P,C),z.y>0?we(I()):z.y<0&&Ie(I()),C.copy(P),e.update()}function Xe(s){w.set(s.clientX,s.clientY),R.subVectors(w,v).multiplyScalar(e.panSpeed),q(R.x,R.y),v.copy(w),e.update()}function Ke(s){je(s),s.deltaY<0?Ie(I()):s.deltaY>0&&we(I()),e.update()}function qe(s){let f=!1;switch(s.code){case e.keys.UP:q(0,e.keyPanSpeed),f=!0;break;case e.keys.BOTTOM:q(0,-e.keyPanSpeed),f=!0;break;case e.keys.LEFT:q(e.keyPanSpeed,0),f=!0;break;case e.keys.RIGHT:q(-e.keyPanSpeed,0),f=!0;break}f&&(s.preventDefault(),e.update())}function Ce(){if(h.length==1)b.set(h[0].pageX,h[0].pageY);else{const s=.5*(h[0].pageX+h[1].pageX),f=.5*(h[0].pageY+h[1].pageY);b.set(s,f)}}function Se(){if(h.length==1)v.set(h[0].pageX,h[0].pageY);else{const s=.5*(h[0].pageX+h[1].pageX),f=.5*(h[0].pageY+h[1].pageY);v.set(s,f)}}function Re(){const s=h[0].pageX-h[1].pageX,f=h[0].pageY-h[1].pageY,M=Math.sqrt(s*s+f*f);C.set(0,M)}function Qe(){e.enableZoom&&Re(),e.enablePan&&Se()}function E(){e.enableZoom&&Re(),e.enableRotate&&Ce()}function N(s){if(h.length==1)$.set(s.pageX,s.pageY);else{const M=tt(s),B=.5*(s.pageX+M.x),Y=.5*(s.pageY+M.y);$.set(B,Y)}y.subVectors($,b).multiplyScalar(e.rotateSpeed);const f=e.domElement;f&&(G(2*Math.PI*y.x/f.clientHeight),Z(2*Math.PI*y.y/f.clientHeight)),b.copy($)}function W(s){if(h.length==1)w.set(s.pageX,s.pageY);else{const f=tt(s),M=.5*(s.pageX+f.x),B=.5*(s.pageY+f.y);w.set(M,B)}R.subVectors(w,v).multiplyScalar(e.panSpeed),q(R.x,R.y),v.copy(w)}function K(s){const f=tt(s),M=s.pageX-f.x,B=s.pageY-f.y,Y=Math.sqrt(M*M+B*B);P.set(0,Y),z.set(0,Math.pow(P.y/C.y,e.zoomSpeed)),we(z.y),C.copy(P)}function pe(s){e.enableZoom&&K(s),e.enablePan&&W(s)}function Je(s){e.enableZoom&&K(s),e.enableRotate&&N(s)}function Ee(s){var f,M;e.enabled!==!1&&(h.length===0&&((f=e.domElement)==null||f.ownerDocument.addEventListener("pointermove",fe),(M=e.domElement)==null||M.ownerDocument.addEventListener("pointerup",he)),bo(s),s.pointerType==="touch"?xo(s):Le(s))}function fe(s){e.enabled!==!1&&(s.pointerType==="touch"?go(s):Be(s))}function he(s){var f,M,B;vt(s),h.length===0&&((f=e.domElement)==null||f.releasePointerCapture(s.pointerId),(M=e.domElement)==null||M.ownerDocument.removeEventListener("pointermove",fe),(B=e.domElement)==null||B.ownerDocument.removeEventListener("pointerup",he)),e.dispatchEvent(u),c=i.NONE}function Pe(s){vt(s)}function Le(s){let f;switch(s.button){case 0:f=e.mouseButtons.LEFT;break;case 1:f=e.mouseButtons.MIDDLE;break;case 2:f=e.mouseButtons.RIGHT;break;default:f=-1}switch(f){case me.DOLLY:if(e.enableZoom===!1)return;X(s),c=i.DOLLY;break;case me.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(e.enablePan===!1)return;ze(s),c=i.PAN}else{if(e.enableRotate===!1)return;Ne(s),c=i.ROTATE}break;case me.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(e.enableRotate===!1)return;Ne(s),c=i.ROTATE}else{if(e.enablePan===!1)return;ze(s),c=i.PAN}break;default:c=i.NONE}c!==i.NONE&&e.dispatchEvent(d)}function Be(s){if(e.enabled!==!1)switch(c){case i.ROTATE:if(e.enableRotate===!1)return;ve(s);break;case i.DOLLY:if(e.enableZoom===!1)return;de(s);break;case i.PAN:if(e.enablePan===!1)return;Xe(s);break}}function wt(s){e.enabled===!1||e.enableZoom===!1||c!==i.NONE&&c!==i.ROTATE||(s.preventDefault(),e.dispatchEvent(d),Ke(s),e.dispatchEvent(u))}function et(s){e.enabled===!1||e.enablePan===!1||qe(s)}function xo(s){switch(Ct(s),h.length){case 1:switch(e.touches.ONE){case xe.ROTATE:if(e.enableRotate===!1)return;Ce(),c=i.TOUCH_ROTATE;break;case xe.PAN:if(e.enablePan===!1)return;Se(),c=i.TOUCH_PAN;break;default:c=i.NONE}break;case 2:switch(e.touches.TWO){case xe.DOLLY_PAN:if(e.enableZoom===!1&&e.enablePan===!1)return;Qe(),c=i.TOUCH_DOLLY_PAN;break;case xe.DOLLY_ROTATE:if(e.enableZoom===!1&&e.enableRotate===!1)return;E(),c=i.TOUCH_DOLLY_ROTATE;break;default:c=i.NONE}break;default:c=i.NONE}c!==i.NONE&&e.dispatchEvent(d)}function go(s){switch(Ct(s),c){case i.TOUCH_ROTATE:if(e.enableRotate===!1)return;N(s),e.update();break;case i.TOUCH_PAN:if(e.enablePan===!1)return;W(s),e.update();break;case i.TOUCH_DOLLY_PAN:if(e.enableZoom===!1&&e.enablePan===!1)return;pe(s),e.update();break;case i.TOUCH_DOLLY_ROTATE:if(e.enableZoom===!1&&e.enableRotate===!1)return;Je(s),e.update();break;default:c=i.NONE}}function jt(s){e.enabled!==!1&&s.preventDefault()}function bo(s){h.push(s)}function vt(s){delete O[s.pointerId];for(let f=0;f<h.length;f++)if(h[f].pointerId==s.pointerId){h.splice(f,1);return}}function Ct(s){let f=O[s.pointerId];f===void 0&&(f=new Q,O[s.pointerId]=f),f.set(s.pageX,s.pageY)}function tt(s){const f=s.pointerId===h[0].pointerId?h[1]:h[0];return O[f.pointerId]}n!==void 0&&this.connect(n),this.update()}};const er=new S,Yt=x.forwardRef(function({start:r=[0,0,0],end:n=[0,0,0],mid:e,segments:a=20,...d},u){const i=x.useRef(null),[c]=x.useState(()=>new Zo(void 0,void 0,void 0)),T=x.useCallback((p,m,g,b=20)=>(p instanceof S?c.v0.copy(p):c.v0.set(...p),m instanceof S?c.v2.copy(m):c.v2.set(...m),g instanceof S?c.v1.copy(g):c.v1.copy(c.v0.clone().add(c.v2.clone().sub(c.v0)).add(er.set(0,c.v0.y-c.v2.y,0))),c.getPoints(b)),[]);x.useLayoutEffect(()=>{i.current.setPoints=(p,m,g)=>{const b=T(p,m,g);i.current.geometry&&i.current.geometry.setPositions(b.map($=>$.toArray()).flat())}},[]);const l=x.useMemo(()=>T(r,n,e,a),[r,n,e,a]);return x.createElement(Bo,U({ref:Do([i,u]),points:l},d))}),tr=x.forwardRef(({makeDefault:t,camera:r,regress:n,domElement:e,enableDamping:a=!0,onChange:d,onStart:u,onEnd:i,...c},T)=>{const l=te(P=>P.invalidate),p=te(P=>P.camera),m=te(P=>P.gl),g=te(P=>P.events),b=te(P=>P.setEvents),$=te(P=>P.set),y=te(P=>P.get),v=te(P=>P.performance),w=r||p,R=e||g.connected||m.domElement,C=x.useMemo(()=>new Jn(w),[w]);return Ze(()=>{C.enabled&&C.update()},-1),x.useEffect(()=>(C.connect(R),()=>void C.dispose()),[R,n,C,l]),x.useEffect(()=>{const P=L=>{l(),n&&v.regress(),d&&d(L)},z=L=>{u&&u(L)},V=L=>{i&&i(L)};return C.addEventListener("change",P),C.addEventListener("start",z),C.addEventListener("end",V),()=>{C.removeEventListener("start",z),C.removeEventListener("end",V),C.removeEventListener("change",P)}},[d,u,i,C,l,b]),x.useEffect(()=>{if(t){const P=y().controls;return $({controls:C}),()=>$({controls:P})}},[t,C]),x.createElement("primitive",U({ref:T,object:C,enableDamping:a},c))});function or(t){const r=t+"Geometry";return x.forwardRef(({args:n,children:e,...a},d)=>x.createElement("mesh",U({ref:d},a),x.createElement(r,{attach:"geometry",args:n}),e))}const nr=or("circle"),J=10,rr=2,sr=2,Wt=10,ir=10,Ht=(t,r,n)=>{const d=new S().subVectors(r,t).normalize().multiplyScalar(n);return new S().addVectors(t,d)},ar=(t,r,n,e)=>{const a=new S().lerpVectors(t,r,.5),d=new S().subVectors(r,t).normalize(),u=new S(-d.y,d.x,d.z).normalize(),i=(n-e/2)*ir;return new S().addVectors(a,u.multiplyScalar(i))},ho=({links:t,nodes:r,onEdgeClick:n})=>{const e=x.useRef(null),{camera:a}=te(),d=new S,u=new S,i=new S,c=new S,T=new S,l=new S,p=new S,m=new S;Ze(()=>{e.current&&r&&e.current.children.forEach((b,$)=>{var D,h,O,F;const y=t[$];if(!y)return;const v=r.find(I=>I.ref_id===y.target),w=r.find(I=>I.ref_id===y.source);d.set((w==null?void 0:w.x)||0,(w==null?void 0:w.y)||0,(w==null?void 0:w.z)||0),u.set((v==null?void 0:v.x)||0,(v==null?void 0:v.y)||0,(v==null?void 0:v.z)||0);const R=b.children[0],C=b.children[1],P=b.children[2],z=b.children[3],V=t.filter(I=>I.source===y.source&&I.target===y.target||I.source===y.target&&I.target===y.source).length,L=t.filter((I,G)=>G<$&&(I.source===y.source&&I.target===y.target||I.source===y.target&&I.target===y.source)).length;if((w==null?void 0:w.ref_id)===(v==null?void 0:v.ref_id)){const[I,G,Z]=zo(d);(D=R.setPoints)==null||D.call(R,d,Z,I),(h=C.setPoints)==null||h.call(C,Z,u,I),P.position.set(Z.x,Z.y,G.z),P.lookAt(I),P.rotateX(-Math.PI/2),z.position.set(Z.x,Z.y,G.z),z.lookAt(a.position)}else{m.copy(Ht(d,u,J)),p.copy(Ht(u,d,J+.5)),i.lerpVectors(m,p,.5),V>1?i.copy(ar(m,p,L,V)):i.lerpVectors(m,p,.5);const I=30;c.subVectors(p,m).normalize().multiplyScalar(I/2),T.subVectors(i,c),l.addVectors(i,c);const G=new S().addVectors(m,T).multiplyScalar(.5),Z=new S().addVectors(l,p).multiplyScalar(.5);(O=R.setPoints)==null||O.call(R,m,T,G),(F=C.setPoints)==null||F.call(C,l,p,Z),P.position.set(p.x,p.y,p.z),P.lookAt(m),P.rotateX(-Math.PI/2),z.position.set(i.x,i.y,i.z),z.lookAt(a.position);let ee=Math.atan2(p.y-m.y,p.x-m.x);(ee>Math.PI/2||ee<-Math.PI/2)&&(ee+=Math.PI),z.rotation.set(0,0,ee);const ae=m.distanceTo(p),q=ae<I?2:4;ae<I?z.text=mt(y.edge_type,Wt):z.text=y.edge_type,z.fontSize=q}})});const g=(b,$,y,v)=>{if(b==="CHILD_OF"||$==="string"||y==="string")return;const w=r==null?void 0:r.find(z=>z.ref_id===$),R=r==null?void 0:r.find(z=>z.ref_id===y),C=(w==null?void 0:w.type)||"",P=(R==null?void 0:R.type)||"";n(v,b,C,P)};return o.jsx("group",{ref:e,children:t.map(b=>o.jsxs("group",{children:[o.jsx(Yt,{color:"white",end:[0,0,0],lineWidth:1,start:[0,0,0]}),o.jsx(Yt,{color:"white",end:[0,0,0],lineWidth:1,start:[0,0,0]}),o.jsxs("mesh",{position:new S(0,0,0),children:[o.jsx("coneGeometry",{args:[rr,sr,32]}),o.jsx("meshBasicMaterial",{color:"white"})]}),o.jsx(lo,{anchorX:"center",anchorY:"middle",color:"white",...uo,lineHeight:1,maxWidth:20,onClick:()=>g(b.edge_type,b.source,b.target,b.ref_id),rotation:[0,0,0],textAlign:"center",children:mt(b.edge_type,Wt)})]},b.ref_id))})};ho.displayName="Lines";const cr=["#ff13c9","#5af0ff","#3233ff","#c2f0c2","#ff6666","#99ccff","#ffb3b3"],lr=_.div`
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
`,dr=_(Vo)`
  position: absolute;
`;new Xo(2,2,2);const mo=x.memo(({node:t,setSelectedNode:r,onSimulationUpdate:n,isSelected:e})=>{var $;const a=x.useRef(null),[d,u]=x.useState(!1);console.log(e);const{size:i,camera:c}=te(),T=_o(y=>{if(t.type==="Thing")return;const{xy:[v,w],down:R,dragging:C,first:P,elapsedTime:z}=y;if(!(!C||P||z<100)&&R&&a.current){n();const V=(v-i.left)/window.innerWidth*i.width,L=(w-i.top)/window.innerHeight*i.height,O=new S(V/i.width*2-1,-L/i.height*2+1,0).unproject(c).multiply(new S(1,1,0)).clone();t.fx=O.x,t.fy=O.y}});Ze(()=>{a.current&&a.current.position.set(t.x||0,t.y||0,0)});const l=cr[($=t==null?void 0:t.children)==null?void 0:$.length]||"red",p=y=>{y.stopPropagation(),t.type!=="Thing"&&r()},m=mt(t.type||"",J),g=()=>{u(!0)},b=()=>{u(!1)};return o.jsxs("mesh",{ref:a,onClick:p,...T(),onPointerOut:b,onPointerOver:g,position:new S(t.x,t.y,0),children:[o.jsx(nr,{args:[J,30,20],children:o.jsx("meshStandardMaterial",{attach:"material",color:l})}),o.jsx(lo,{...uo,clipRect:[-J,-J,J,J],color:"#000",fontSize:2,maxWidth:J*2,name:t.type,textAlign:"left",children:m}),d&&o.jsx(dr,{position:[0,5,0],zIndexRange:[100,0],children:o.jsx(lr,{children:t.type})})]})});mo.displayName="Node";const ur=({simulation:t,setSelectedSchemaId:r,selectedId:n,setIsAddEdgeNode:e})=>{const[a]=so(u=>[u.schemas]),d=()=>{t&&(t.alpha(.05),t.restart())};return o.jsx(o.Fragment,{children:a.map((u,i)=>{const c=t.nodes()[i];return c?o.jsx(mo,{isSelected:c.ref_id===n,node:c,onSimulationUpdate:d,setSelectedNode:()=>{e(!1),r(c.ref_id)}},c.ref_id):null})})},pr=({schemasWithPositions:t,filteredLinks:r,setSelectedSchemaId:n,selectedSchemaId:e,setIsAddEdgeNode:a,onEdgeClick:d})=>{const[u,i]=x.useState(null),c=Ot(t),T=Ot(r);return x.useEffect(()=>{if(!t.length||!r.length)return;const l=structuredClone(t),p=structuredClone(r);if(u){c&&c.length!==t.length&&T&&T.length!==r.length&&(u.nodes(l).force("link",Tt(p).id(g=>g.ref_id).distance(100)).force("charge",kt()).force("center",At()).force("collide",Mt(J+5)).alpha(.5).restart(),i({...u}));return}const m=Po(l).force("link",Tt(p).id(g=>g.ref_id).distance(120)).force("charge",kt().strength(-100)).force("center",At()).force("collide",Mt(J+5));i(m)},[t,u,r,c,T]),Ze(()=>{}),u?o.jsxs(o.Fragment,{children:[o.jsx(ho,{links:r,nodes:u.nodes(),onEdgeClick:d}),o.jsx(ur,{selectedId:e,setIsAddEdgeNode:a,setSelectedSchemaId:n,simulation:u})]}):null},dt=new Ko(0),fr=({selectedSchemaId:t,links:r,schemasWithPositions:n,setSelectedSchemaId:e,setIsAddEdgeNode:a,onEdgeClick:d})=>o.jsxs(Fo,{camera:{zoom:1,position:[0,0,200]},id:"schema-canvas",linear:!0,orthographic:!0,children:[o.jsx("color",{args:[dt.r,dt.g,dt.b],attach:"background"}),To&&o.jsx(Go,{position:"right-bottom"}),o.jsx(hr,{}),o.jsx(Yo,{}),o.jsx(pr,{filteredLinks:r,onEdgeClick:d,schemasWithPositions:n,selectedSchemaId:t,setIsAddEdgeNode:a,setSelectedSchemaId:e})]}),hr=()=>{x.useEffect(()=>{const n=a=>{["Meta","Alt"].includes(a.key)&&(document.body.style.cursor="grab")},e=a=>{["Meta","Alt"].includes(a.key)&&(document.body.style.cursor="default")};return window.addEventListener("keydown",n,!1),window.addEventListener("keyup",e,!1),()=>{window.removeEventListener("keydown",n,!1),window.removeEventListener("keyup",e,!1)}},[]);const t=()=>{document.body.style.cursor="grabbing"},r=()=>{document.body.style.cursor="default"};return o.jsx(tr,{dampingFactor:1,enableDamping:!0,enablePan:!0,enableRotate:!1,enableZoom:!0,maxZoom:20,minZoom:1,onEnd:r,onStart:t,zoomSpeed:1.5,zoomToCursor:!0})},mr=t=>o.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 18 19",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:o.jsx("path",{d:"M9.5002 0.270145C10.3742 0.270145 11.1128 0.571885 11.7161 1.17537C12.3193 1.77868 12.6209 2.51732 12.6209 3.39129C12.6209 4.17273 12.3716 4.85117 11.873 5.42662C11.3744 6.00189 10.7483 6.34792 9.99474 6.46469L9.99474 9.0052L13.8388 9.0052C14.2785 9.0052 14.6549 9.16172 14.9679 9.47476C15.2809 9.78779 15.4375 10.1642 15.4375 10.6039L15.4375 12.564L17.0171 12.564C17.2435 12.564 17.4334 12.6405 17.5866 12.7936C17.7396 12.9468 17.8162 13.1366 17.8162 13.3631L17.8162 17.5042C17.8162 17.7389 17.7396 17.9321 17.5866 18.0836C17.4334 18.2352 17.2435 18.311 17.0171 18.311L12.8759 18.311C12.6412 18.311 12.4481 18.2345 12.2965 18.0814C12.1449 17.9282 12.0692 17.7384 12.0692 17.5119L12.0692 13.3707C12.0692 13.136 12.1457 12.9429 12.2987 12.7913C12.452 12.6398 12.6418 12.564 12.8682 12.564L14.4479 12.564L14.4479 10.6039C14.4479 10.4262 14.3908 10.2803 14.2767 10.166C14.1624 10.0518 14.0164 9.99478 13.8388 9.99478L5.16112 9.99478C4.98349 9.99478 4.83753 10.0518 4.72323 10.166C4.6091 10.2803 4.55203 10.4262 4.55203 10.6039L4.55203 12.6115C5.3056 12.7283 5.93168 13.0743 6.43026 13.6496C6.92885 14.225 7.17814 14.9034 7.17814 15.6849C7.17814 16.5587 6.87648 17.2973 6.27317 17.9008C5.66969 18.5041 4.93096 18.8058 4.05699 18.8058C3.18303 18.8058 2.44439 18.5041 1.84107 17.9008C1.23792 17.2973 0.936342 16.5587 0.936343 15.6849C0.936343 14.9034 1.18564 14.225 1.68422 13.6496C2.18281 13.0743 2.80888 12.7283 3.56245 12.6115L3.56245 10.6039C3.56245 10.1642 3.71897 9.78779 4.03201 9.47476C4.34504 9.16172 4.72142 9.0052 5.16112 9.0052L9.00516 9.0052L9.00516 6.46469C8.25159 6.34792 7.62552 6.00189 7.12693 5.42662C6.62835 4.85117 6.37905 4.17273 6.37905 3.39129C6.37905 2.51732 6.68071 1.77868 7.28403 1.17537C7.88751 0.571885 8.62623 0.270145 9.5002 0.270145Z",fill:"currentColor"})}),xr=({onClose:t,activeTab:r,setActiveTab:n})=>o.jsxs(gr,{children:[o.jsxs(br,{children:[o.jsx(mr,{}),o.jsx(yr,{children:"Blueprint"})]}),o.jsxs(wr,{children:[o.jsx(Ut,{active:r==="all",onClick:()=>n("all"),children:"Show All"}),o.jsx(Ut,{active:r==="parent",onClick:()=>n("parent"),children:"Parent Only"})]}),o.jsx(jr,{onClick:t,children:o.jsx(yt,{})})]}),gr=_(j)`
  background-color: ${k.BG1};
  height: 64px;
  width: 100%;
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
  justify-content: space-between;
  padding: 17px;
  border-bottom: 1px solid ${k.black};
`,br=_.div`
  display: flex;
  align-items: center;
  font-size: 22px;
  font-weight: 400;
  font-family: Barlow;

  svg {
    color: ${k.GRAY6};
    margin-left: 6px;
  }
`,yr=_.span`
  color: ${k.white};
  font-weight: 400;
  font-family: Barlow;
  margin-left: 15px;
  font-size: 22px;
`,wr=_.div`
  display: flex;
  position: absolute;
  top: 16px;
  right: 60px;
  background-color: ${k.divider2};
  border-radius: 6px;
  padding: 2px;
`,Ut=_.div`
  color: ${t=>t.active?k.white:k.GRAY6};
  background-color: ${t=>t.active?k.BUTTON1:"transparent"};
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
`,jr=_.div`
  position: absolute;
  top: 16px;
  right: 12px;
  font-size: 20px;
  color: ${k.GRAY6};
  cursor: pointer;
  z-index: 1;

  svg {
    width: 30px;
    height: 32px;
  }
`,vr=t=>o.jsxs("svg",{width:"1em",height:"1em",viewBox:"0 0 23 22",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:[o.jsx("mask",{id:"mask0_8954_27793",maskUnits:"userSpaceOnUse",x:"10",y:"-3",width:"16",height:"16",children:o.jsx("rect",{x:"10",y:"-3",width:"1em",height:"1em",fill:"currentColor"})}),o.jsx("g",{mask:"url(#mask0_8954_27793)",children:o.jsx("path",{d:"M17.5 5.50005H14.1666C14.025 5.50005 13.9062 5.45212 13.8104 5.35625C13.7145 5.26037 13.6666 5.14157 13.6666 4.99985C13.6666 4.85812 13.7145 4.73939 13.8104 4.64367C13.9062 4.54794 14.025 4.50008 14.1666 4.50008H17.5V1.16675C17.5 1.02508 17.5479 0.906331 17.6438 0.810498C17.7396 0.714665 17.8584 0.666748 18.0002 0.666748C18.1419 0.666748 18.2606 0.714665 18.3563 0.810498C18.4521 0.906331 18.4999 1.02508 18.4999 1.16675V4.50008H21.8333C21.9749 4.50008 22.0937 4.54802 22.1895 4.64388C22.2853 4.73976 22.3333 4.85856 22.3333 5.00028C22.3333 5.14202 22.2853 5.26074 22.1895 5.35647C22.0937 5.45219 21.9749 5.50005 21.8333 5.50005H18.4999V8.83338C18.4999 8.97505 18.452 9.0938 18.3561 9.18963C18.2602 9.28547 18.1414 9.33338 17.9997 9.33338C17.858 9.33338 17.7393 9.28547 17.6435 9.18963C17.5478 9.0938 17.5 8.97505 17.5 8.83338V5.50005Z",fill:"currentColor"})}),o.jsx("path",{d:"M1.33333 6C1.33333 7.47276 2.52724 8.66667 4 8.66667C5.47276 8.66667 6.66667 7.47276 6.66667 6C6.66667 4.52724 5.47276 3.33333 4 3.33333C2.52724 3.33333 1.33333 4.52724 1.33333 6ZM14.3333 19C14.3333 20.4728 15.5272 21.6667 17 21.6667C18.4728 21.6667 19.6667 20.4728 19.6667 19C19.6667 17.5272 18.4728 16.3333 17 16.3333C15.5272 16.3333 14.3333 17.5272 14.3333 19ZM3.64645 6.35355L16.6464 19.3536L17.3536 18.6464L4.35355 5.64645L3.64645 6.35355Z",fill:"currentColor"})]}),Cr=({onCreateNew:t,onAddEdgeNode:r})=>o.jsxs(Er,{children:[o.jsx(ut,{"data-testid":"add-schema-type",onClick:t,children:o.jsx(pt,{children:o.jsx(co,{})})}),o.jsx(ut,{"data-testid":"add-edge",onClick:r,children:o.jsx(pt,{children:o.jsx(vr,{})})}),o.jsx(ut,{disabled:!0,children:o.jsx(pt,{children:o.jsx(ao,{})})})]}),Er=_(j).attrs({align:"flex-start",direction:"column",justify:"flex-start"})`
  flex: 1;
  gap: 17px;
  padding: 16px 0 0 16px;
`,ut=_(j).attrs({align:"center",justify:"center",p:0})`
  position: relative;
  width: 40px;
  height: 40px;
  flex-direction: row;
  color: ${k.GRAY6};
  background: ${({disabled:t})=>t?k.disableBtn:k.BG1};
  cursor: pointer;
  border-radius: 6px;
  transition: ${({theme:t})=>t.transitions.create(["opacity","box-shadow","background-color"])};

  &:hover {
    color: ${({disabled:t})=>t?k.GRAY6:k.white};
  }

  &:active {
    color: ${k.white};
    background: ${({disabled:t})=>t?k.BG1:k.black};
  }

  &.root {
    border-radius: 50%;
    padding: 0;
    align-items: center;
    justify-content: center;
    border: none;
  }
`,pt=_(j)`
  justify-content: center;
  align-items: center;
  font-size: 24px;
`,Pr=({Close:t})=>{const[r,n]=x.useState(""),[e,a]=x.useState(!1),[d,u]=x.useState(!1),[i,c]=x.useState(!1),[T,l]=x.useState({refId:"",edgeType:"",source:"",target:""}),[p,m]=x.useState(!1),[g,b]=x.useState("all"),[$,y,v,w]=so(h=>[h.schemas,h.links,h.setSchemas,h.setSchemaLinks]);x.useEffect(()=>{(async()=>{u(!0);try{const O=await $t(),F=O.schemas.filter(I=>I.ref_id&&!I.is_deleted);v(F.length>0?F:O.schemas),w(O.edges.length>0?O.edges:[]),u(!1)}catch(O){console.error("Error fetching data:",O),u(!1)}})()},[v,w]);const R=h=>{if($.some(F=>F.ref_id===h.ref_id))v($.map(F=>F.ref_id===h.ref_id?{...h,children:[]}:F));else{v([...$,{...h,children:[]}]);const F=$.find(I=>h.parent===I.type);w([...y,{ref_id:`new-link-${y.length}`,edge_type:"CHILD_OF",source:h.ref_id||"new",target:(F==null?void 0:F.ref_id)||"new"}])}},C=async()=>{const h=await $t();v(h.schemas.filter(O=>O.ref_id&&!O.is_deleted&&O.ref_id)),w(h.edges)},P=h=>{v($.filter(O=>O.type!==h))},z=$.map(h=>({...h,children:$.filter(O=>O.parent===h.type).map(O=>O.ref_id||"")})),V=y.filter(h=>z.some(O=>O.ref_id===h.source)&&z.some(O=>O.ref_id===h.target)),L=$.find(h=>h.ref_id===r)||null;if(d)return o.jsx(j,{align:"center",basis:"100%",grow:1,justify:"center",shrink:1,children:o.jsx(ue,{color:k.white})});const D=g==="all"?V:V.filter(h=>h.edge_type==="CHILD_OF");return o.jsxs(o.Fragment,{children:[o.jsx(j,{ml:-20,mr:-20,mt:-20,children:o.jsx(xr,{activeTab:g,onClose:t,setActiveTab:b})}),o.jsxs(j,{align:"stretch",direction:"row",grow:1,children:[o.jsx(j,{mb:-20,ml:-20,children:L||e?o.jsx(Zt,{children:o.jsx(Xt,{children:o.jsx(Gn,{graphLoading:p,onDelete:P,onSchemaCreate:R,onSchemaUpdate:C,selectedSchema:L,setGraphLoading:m,setIsCreateNew:a,setSelectedSchemaId:n})})}):null}),o.jsx(j,{children:i?o.jsx(Zt,{children:o.jsx(Xt,{children:o.jsx(Mn,{edgeData:T,setGraphLoading:m,setIsAddEdgeNode:c})})}):null}),o.jsx(j,{children:o.jsx(Cr,{onAddEdgeNode:()=>{c(!0),a(!1),n(""),l({refId:"",edgeType:"",source:"",target:""})},onCreateNew:()=>{c(!1),a(!0),n("")}})}),o.jsx(Tr,{direction:"row",grow:1,children:o.jsx(kr,{children:p?o.jsx(j,{align:"center",basis:"100%",grow:1,justify:"center",shrink:1,children:o.jsx(ue,{color:k.white})}):o.jsx(fr,{links:D,onEdgeClick:(h,O,F,I)=>{l({refId:h,edgeType:O,source:F,target:I}),c(!0),a(!1),n("")},schemasWithPositions:z,selectedSchemaId:r,setIsAddEdgeNode:c,setSelectedSchemaId:n})})})]})]})},Tr=_(j)`
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
`,Zt=_(j)`
  width: 100%;
  max-width: 400px;
  background: ${k.BG1};
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
`,Xt=_.div`
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
`,kr=_(j)`
  flex: 1 1 100%;
`,Ar=()=>{const{close:t}=no("blueprintGraph"),r=()=>{t()};return o.jsx(ko,{background:"black",id:"blueprintGraph",kind:"full",preventOutsideClose:!0,children:o.jsx(Pr,{Close:r})})},Qr=x.memo(Ar);export{Qr as BlueprintModal};
