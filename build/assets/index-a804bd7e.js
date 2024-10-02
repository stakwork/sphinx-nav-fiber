import{r as x,g as Xt,c as qt,s as _e,b as U,u as Qt,l as yo,_ as Jt,j as o,e as eo,bp as He,bq as xt,f as to,h as be,d as Pt,ae as wo,af as jo,p as _,q as w,ba as gt,E as se,F as v,aW as We,br as vo,bs as ot,bt as Co,b9 as oo,U as no,bu as Eo,aV as ge,ab as ft,a2 as Tt,a1 as kt,a0 as Mt,Z as $t,Y as Po,O as To,ao as At}from"./index-a2fee79d.js";import{B as ko}from"./index-5e0c95ad.js";import{q as bt,B as Ue,F as ro,t as yt,K as Mo,p as $o,I as Ao,L as _o,b as so}from"./index-57446bb9.js";import{O as Oo,n as Io,a as _t,N as io}from"./constants-a6b58f4d.js";import{T as Ye}from"./index-50af411d.js";import{A as $e}from"./index-c12b6999.js";import{C as ue}from"./ClipLoader-94036fe6.js";import{D as ao}from"./DeleteIcon-19100283.js";import{P as co}from"./PlusIcon-274b604c.js";import{p as ht,c as So,g as No}from"./index-44e303ef.js";import{S as zo,F as Ro}from"./FormControlLabel-7205abbe.js";import{e as Bo}from"./Stack-622941f0.js";import{g as Lo,m as Vo,u as te,b as Ze,t as mt,T as lo,i as uo,H as Do,j as Ot,C as Fo,P as Go,k as Wo}from"./index-d87dc72a.js";import{Z as Yo,_ as Ho,E as Uo,V as z,$ as me,a0 as xe,a1 as It,P as De,a2 as Fe,a3 as St,a as Q,a4 as Zo,G as Ko,C as Xo}from"./three.module-2ce81f73.js";import"./index.esm-5cf1d22e.js";import"./createSvgIcon-dc3a6e29.js";import"./TextareaAutosize-8a0b55f0.js";import"./Typography-e89026ae.js";const qo=x.createContext(),Nt=qo;function Qo(t){return Xt("MuiGrid",t)}const Jo=[0,1,2,3,4,5,6,7,8,9,10],en=["column-reverse","column","row-reverse","row"],tn=["nowrap","wrap-reverse","wrap"],Me=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12],on=qt("MuiGrid",["root","container","item","zeroMinWidth",...Jo.map(t=>`spacing-xs-${t}`),...en.map(t=>`direction-xs-${t}`),...tn.map(t=>`wrap-xs-${t}`),...Me.map(t=>`grid-xs-${t}`),...Me.map(t=>`grid-sm-${t}`),...Me.map(t=>`grid-md-${t}`),...Me.map(t=>`grid-lg-${t}`),...Me.map(t=>`grid-xl-${t}`)]),Ae=on,nn=["className","columns","columnSpacing","component","container","direction","item","rowSpacing","spacing","wrap","zeroMinWidth"];function ye(t){const r=parseFloat(t);return`${r}${String(t).replace(String(r),"")||"px"}`}function rn({theme:t,ownerState:r}){let n;return t.breakpoints.keys.reduce((e,a)=>{let d={};if(r[a]&&(n=r[a]),!n)return e;if(n===!0)d={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if(n==="auto")d={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{const u=He({values:r.columns,breakpoints:t.breakpoints.values}),i=typeof u=="object"?u[a]:u;if(i==null)return e;const c=`${Math.round(n/i*1e8)/1e6}%`;let k={};if(r.container&&r.item&&r.columnSpacing!==0){const l=t.spacing(r.columnSpacing);if(l!=="0px"){const p=`calc(${c} + ${ye(l)})`;k={flexBasis:p,maxWidth:p}}}d=U({flexBasis:c,flexGrow:0,maxWidth:c},k)}return t.breakpoints.values[a]===0?Object.assign(e,d):e[t.breakpoints.up(a)]=d,e},{})}function sn({theme:t,ownerState:r}){const n=He({values:r.direction,breakpoints:t.breakpoints.values});return xt({theme:t},n,e=>{const a={flexDirection:e};return e.indexOf("column")===0&&(a[`& > .${Ae.item}`]={maxWidth:"none"}),a})}function po({breakpoints:t,values:r}){let n="";Object.keys(r).forEach(a=>{n===""&&r[a]!==0&&(n=a)});const e=Object.keys(t).sort((a,d)=>t[a]-t[d]);return e.slice(0,e.indexOf(n))}function an({theme:t,ownerState:r}){const{container:n,rowSpacing:e}=r;let a={};if(n&&e!==0){const d=He({values:e,breakpoints:t.breakpoints.values});let u;typeof d=="object"&&(u=po({breakpoints:t.breakpoints.values,values:d})),a=xt({theme:t},d,(i,c)=>{var k;const l=t.spacing(i);return l!=="0px"?{marginTop:`-${ye(l)}`,[`& > .${Ae.item}`]:{paddingTop:ye(l)}}:(k=u)!=null&&k.includes(c)?{}:{marginTop:0,[`& > .${Ae.item}`]:{paddingTop:0}}})}return a}function cn({theme:t,ownerState:r}){const{container:n,columnSpacing:e}=r;let a={};if(n&&e!==0){const d=He({values:e,breakpoints:t.breakpoints.values});let u;typeof d=="object"&&(u=po({breakpoints:t.breakpoints.values,values:d})),a=xt({theme:t},d,(i,c)=>{var k;const l=t.spacing(i);return l!=="0px"?{width:`calc(100% + ${ye(l)})`,marginLeft:`-${ye(l)}`,[`& > .${Ae.item}`]:{paddingLeft:ye(l)}}:(k=u)!=null&&k.includes(c)?{}:{width:"100%",marginLeft:0,[`& > .${Ae.item}`]:{paddingLeft:0}}})}return a}function ln(t,r,n={}){if(!t||t<=0)return[];if(typeof t=="string"&&!Number.isNaN(Number(t))||typeof t=="number")return[n[`spacing-xs-${String(t)}`]];const e=[];return r.forEach(a=>{const d=t[a];Number(d)>0&&e.push(n[`spacing-${a}-${String(d)}`])}),e}const dn=_e("div",{name:"MuiGrid",slot:"Root",overridesResolver:(t,r)=>{const{ownerState:n}=t,{container:e,direction:a,item:d,spacing:u,wrap:i,zeroMinWidth:c,breakpoints:k}=n;let l=[];e&&(l=ln(u,k,r));const p=[];return k.forEach(m=>{const g=n[m];g&&p.push(r[`grid-${m}-${String(g)}`])}),[r.root,e&&r.container,d&&r.item,c&&r.zeroMinWidth,...l,a!=="row"&&r[`direction-xs-${String(a)}`],i!=="wrap"&&r[`wrap-xs-${String(i)}`],...p]}})(({ownerState:t})=>U({boxSizing:"border-box"},t.container&&{display:"flex",flexWrap:"wrap",width:"100%"},t.item&&{margin:0},t.zeroMinWidth&&{minWidth:0},t.wrap!=="wrap"&&{flexWrap:t.wrap}),sn,an,cn,rn);function un(t,r){if(!t||t<=0)return[];if(typeof t=="string"&&!Number.isNaN(Number(t))||typeof t=="number")return[`spacing-xs-${String(t)}`];const n=[];return r.forEach(e=>{const a=t[e];if(Number(a)>0){const d=`spacing-${e}-${String(a)}`;n.push(d)}}),n}const pn=t=>{const{classes:r,container:n,direction:e,item:a,spacing:d,wrap:u,zeroMinWidth:i,breakpoints:c}=t;let k=[];n&&(k=un(d,c));const l=[];c.forEach(m=>{const g=t[m];g&&l.push(`grid-${m}-${String(g)}`)});const p={root:["root",n&&"container",a&&"item",i&&"zeroMinWidth",...k,e!=="row"&&`direction-xs-${String(e)}`,u!=="wrap"&&`wrap-xs-${String(u)}`,...l]};return to(p,Qo,r)},fn=x.forwardRef(function(r,n){const e=Qt({props:r,name:"MuiGrid"}),{breakpoints:a}=yo(),d=Bo(e),{className:u,columns:i,columnSpacing:c,component:k="div",container:l=!1,direction:p="row",item:m=!1,rowSpacing:g,spacing:b=0,wrap:A="wrap",zeroMinWidth:y=!1}=d,C=Jt(d,nn),j=g||b,R=c||b,E=x.useContext(Nt),T=l?i||12:E,N={},D=U({},C);a.keys.forEach(h=>{C[h]!=null&&(N[h]=C[h],delete D[h])});const B=U({},d,{columns:T,container:l,direction:p,item:m,rowSpacing:j,columnSpacing:R,wrap:A,zeroMinWidth:y,spacing:b},N,{breakpoints:a.keys}),V=pn(B);return o.jsx(Nt.Provider,{value:T,children:o.jsx(dn,U({ownerState:B,className:eo(V.root,u),as:k,ref:n},D))})}),ie=fn;function hn(t){return Xt("MuiSwitch",t)}const mn=qt("MuiSwitch",["root","edgeStart","edgeEnd","switchBase","colorPrimary","colorSecondary","sizeSmall","sizeMedium","checked","disabled","input","thumb","track"]),H=mn,xn=["className","color","edge","size","sx"],gn=t=>{const{classes:r,edge:n,size:e,color:a,checked:d,disabled:u}=t,i={root:["root",n&&`edge${be(n)}`,`size${be(e)}`],switchBase:["switchBase",`color${be(a)}`,d&&"checked",u&&"disabled"],thumb:["thumb"],track:["track"],input:["input"]},c=to(i,hn,r);return U({},r,c)},bn=_e("span",{name:"MuiSwitch",slot:"Root",overridesResolver:(t,r)=>{const{ownerState:n}=t;return[r.root,n.edge&&r[`edge${be(n.edge)}`],r[`size${be(n.size)}`]]}})(({ownerState:t})=>U({display:"inline-flex",width:34+12*2,height:14+12*2,overflow:"hidden",padding:12,boxSizing:"border-box",position:"relative",flexShrink:0,zIndex:0,verticalAlign:"middle","@media print":{colorAdjust:"exact"}},t.edge==="start"&&{marginLeft:-8},t.edge==="end"&&{marginRight:-8},t.size==="small"&&{width:40,height:24,padding:7,[`& .${H.thumb}`]:{width:16,height:16},[`& .${H.switchBase}`]:{padding:4,[`&.${H.checked}`]:{transform:"translateX(16px)"}}})),yn=_e(zo,{name:"MuiSwitch",slot:"SwitchBase",overridesResolver:(t,r)=>{const{ownerState:n}=t;return[r.switchBase,{[`& .${H.input}`]:r.input},n.color!=="default"&&r[`color${be(n.color)}`]]}})(({theme:t})=>({position:"absolute",top:0,left:0,zIndex:1,color:t.vars?t.vars.palette.Switch.defaultColor:`${t.palette.mode==="light"?t.palette.common.white:t.palette.grey[300]}`,transition:t.transitions.create(["left","transform"],{duration:t.transitions.duration.shortest}),[`&.${H.checked}`]:{transform:"translateX(20px)"},[`&.${H.disabled}`]:{color:t.vars?t.vars.palette.Switch.defaultDisabledColor:`${t.palette.mode==="light"?t.palette.grey[100]:t.palette.grey[600]}`},[`&.${H.checked} + .${H.track}`]:{opacity:.5},[`&.${H.disabled} + .${H.track}`]:{opacity:t.vars?t.vars.opacity.switchTrackDisabled:`${t.palette.mode==="light"?.12:.2}`},[`& .${H.input}`]:{left:"-100%",width:"300%"}}),({theme:t,ownerState:r})=>U({"&:hover":{backgroundColor:t.vars?`rgba(${t.vars.palette.action.activeChannel} / ${t.vars.palette.action.hoverOpacity})`:Pt(t.palette.action.active,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},r.color!=="default"&&{[`&.${H.checked}`]:{color:(t.vars||t).palette[r.color].main,"&:hover":{backgroundColor:t.vars?`rgba(${t.vars.palette[r.color].mainChannel} / ${t.vars.palette.action.hoverOpacity})`:Pt(t.palette[r.color].main,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${H.disabled}`]:{color:t.vars?t.vars.palette.Switch[`${r.color}DisabledColor`]:`${t.palette.mode==="light"?wo(t.palette[r.color].main,.62):jo(t.palette[r.color].main,.55)}`}},[`&.${H.checked} + .${H.track}`]:{backgroundColor:(t.vars||t).palette[r.color].main}})),wn=_e("span",{name:"MuiSwitch",slot:"Track",overridesResolver:(t,r)=>r.track})(({theme:t})=>({height:"100%",width:"100%",borderRadius:14/2,zIndex:-1,transition:t.transitions.create(["opacity","background-color"],{duration:t.transitions.duration.shortest}),backgroundColor:t.vars?t.vars.palette.common.onBackground:`${t.palette.mode==="light"?t.palette.common.black:t.palette.common.white}`,opacity:t.vars?t.vars.opacity.switchTrack:`${t.palette.mode==="light"?.38:.3}`})),jn=_e("span",{name:"MuiSwitch",slot:"Thumb",overridesResolver:(t,r)=>r.thumb})(({theme:t})=>({boxShadow:(t.vars||t).shadows[1],backgroundColor:"currentColor",width:20,height:20,borderRadius:"50%"})),vn=x.forwardRef(function(r,n){const e=Qt({props:r,name:"MuiSwitch"}),{className:a,color:d="primary",edge:u=!1,size:i="medium",sx:c}=e,k=Jt(e,xn),l=U({},e,{color:d,edge:u,size:i}),p=gn(l),m=o.jsx(jn,{className:p.thumb,ownerState:l});return o.jsxs(bn,{className:eo(p.root,a),sx:c,ownerState:l,children:[o.jsx(yn,U({type:"checkbox",icon:m,checkedIcon:m,ref:n,ownerState:l},k,{classes:U({},p,{root:p.switchBase})})),o.jsx(wn,{className:p.track,ownerState:l})]})}),fo=vn,Cn={type:"",parent:""},zt=({onSelect:t,dataTestId:r,edgeLink:n,hideSelectAll:e,placeholder:a})=>{const d=bt({mode:"onChange",defaultValues:Cn}),{watch:u,setValue:i}=d,[c,k]=x.useState([]),[l,p]=x.useState(!1),m=y=>{i("parent",(y==null?void 0:y.value)||""),t(y==null?void 0:y.value)},g=y=>y.charAt(0).toUpperCase()+y.slice(1);x.useEffect(()=>{(async()=>{p(!0);try{const j=(await gt()).schemas.filter(E=>!E.is_deleted&&E.type).map(E=>(E==null?void 0:E.type)==="thing"?{label:"No Parent",value:E.type}:{label:g(E.type),value:E.type});k(e?j:[{label:"Select all",value:"all"},...j]),n&&i("parent",n)}catch(C){console.warn(C)}finally{p(!1)}})()},[n,i,e]);const b=u("parent"),A=()=>{const y=c==null?void 0:c.find(C=>C.value===b);if(y)return y;if(n)return{label:n,value:n}};return o.jsx(En,{dataTestId:r,disabled:!!n,isLoading:l,onSelect:m,options:c||Oo,placeholder:a,selectedValue:A()})},En=_($e)`
  .MuiInputBase-input {
    font-family: Barlow;
    font-size: 14px;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0.01em;
    text-align: left;
    color: ${w.white};
    padding-right: -8px;

    &::placeholder {
      font-family: Barlow;
      font-size: 14px;
      font-weight: 400;
      line-height: 16px;
      letter-spacing: 0.01em;
      text-align: left;
      color: ${w.GRAY7};
      opacity: 1;
    }
  }

  && .MuiInput-input.MuiInputBase-input {
    padding-left: 0;
  }
`,Pn=({selectedType:t,setSelectedFromNode:r,setSelectedToNode:n,edgeLinkData:e,selectedFromNode:a,selectedToNode:d})=>{const u=d==="all",i=a==="all";return o.jsxs(v,{mt:8,children:[o.jsxs(v,{mb:25,children:[o.jsx(v,{mb:5,children:o.jsx(nt,{children:"Source"})}),o.jsx(zt,{dataTestId:"from_node",edgeLink:e==null?void 0:e.source,hideSelectAll:u,onSelect:r,placeholder:"Source Name"})]}),o.jsxs(v,{mb:10,children:[o.jsx(v,{mb:5,children:o.jsx(nt,{children:"Edge Name"})}),o.jsx(v,{mb:12,children:o.jsx(Ye,{id:"cy-item-name",maxLength:250,name:"type",placeholder:"Enter Edge Name",rules:{...We,pattern:{message:"No leading whitespace allowed",value:Io}},value:t})})]}),o.jsxs(v,{mb:25,children:[o.jsx(v,{mb:5,children:o.jsx(nt,{children:"Destination"})}),o.jsx(zt,{dataTestId:"to_node",edgeLink:e==null?void 0:e.target,hideSelectAll:i,onSelect:n,placeholder:"Select Destination"})]})]})},nt=_(se)`
  font-family: Barlow;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0.01em;
  text-align: left;
  margin-left: 1px;
  color: ${w.mainBottomIcons};
`,Tn=({onCancel:t,edgeLinkData:r,setGraphLoading:n})=>{var N,D,B;const e=bt({mode:"onChange"}),{setValue:a,getValues:d}=e,[u,i]=x.useState(!1),[c,k]=x.useState(!1),[l,p]=x.useState(""),[m,g]=x.useState(""),[b,A]=x.useState(""),y=e.watch("type");x.useEffect(()=>{a("type",r==null?void 0:r.edgeType)},[r==null?void 0:r.edgeType,a]),x.useEffect(()=>{p(y)},[y]);const C=e.handleSubmit(async V=>{i(!0),n(!0);const h={source:m,target:b,edge_type:V.type},O={ref_id:r==null?void 0:r.refId,edge_type:V.type};try{if(r!=null&&r.refId)await vo(O);else if(b&&m)if(m==="all"||b==="all"){const I=(await gt()).schemas.filter(G=>!G.is_deleted&&G.type).map(G=>G.type);m==="all"?await Promise.all(I.map(G=>ot({...h,source:G}))):b==="all"&&await Promise.all(I.map(G=>ot({...h,target:G})))}else await ot(h)}catch(F){console.warn("API Error:",F)}finally{i(!1),n(!1),g(""),A(""),t()}}),j=(D=(N=d())==null?void 0:N.type)==null?void 0:D.trim(),R=j&&((B=r==null?void 0:r.edgeType)==null?void 0:B.trim())!==j,E=r!=null&&r.refId?u||!R:u||!b.trim()||!m.trim()||!l.trim(),T=async()=>{k(!0),n(!0);try{r!=null&&r.refId&&await Co(r==null?void 0:r.refId)}catch(V){console.warn("API Error:",V)}finally{k(!1),n(!1),g(""),A(""),t()}};return o.jsx(ro,{...e,children:o.jsxs("form",{id:"add-type-form",onSubmit:C,children:[o.jsx(Pn,{edgeLinkData:r,selectedFromNode:m,selectedToNode:b,selectedType:l,setSelectedFromNode:g,setSelectedToNode:A}),o.jsxs(v,{direction:"row",justify:"space-between",mt:20,children:[(r==null?void 0:r.refId)&&o.jsx(v,{direction:"column",children:o.jsxs(Mn,{color:"secondary",disabled:c,onClick:T,size:"large",style:{marginRight:20},variant:"contained",children:["Delete",c&&o.jsxs(Rt,{children:[o.jsx(ue,{color:w.lightGray,size:12})," "]})]})}),o.jsxs(kn,{color:"secondary",disabled:E,onClick:C,size:"large",variant:"contained",children:["Confirm",u&&o.jsxs(Rt,{children:[o.jsx(ue,{color:w.lightGray,size:12})," "]})]})]})]})})},kn=_(Ue)`
  width: 293px !important;
  margin: 0 0 10px auto !important;
`,Rt=_.span`
  margin-top: 2px;
`,Mn=_(Ue)`
  && {
    color: ${w.primaryRed};
    background-color: rgba(237, 116, 116, 0.1);

    &:hover,
    &:active,
    &:focus {
      color: ${w.primaryRed};
      background-color: rgba(237, 116, 116, 0.2);
    }
  }
`,$n=({setIsAddEdgeNode:t,edgeData:r,setGraphLoading:n})=>{const e=()=>{t(!1)};return o.jsxs(v,{children:[o.jsxs(_n,{align:"center",direction:"row",justify:"space-between",children:[o.jsx(In,{"data-testid":"edge-modal-title",children:r!=null&&r.refId?"Edit Edge":"Add Edge"}),o.jsx(An,{"data-testid":"close-sidebar-sub-view",onClick:e,children:o.jsx(yt,{})})]}),o.jsx(On,{}),o.jsx(Tn,{edgeLinkData:r,onCancel:e,setGraphLoading:n})]})},An=_(v)`
  font-size: 32px;
  color: ${w.white};
  cursor: pointer;

  svg {
    color: ${w.GRAY6};
  }

  &:hover {
    svg {
      color: ${w.white};
    }
  }
`,_n=_(v)`
  margin-bottom: 16px;
`,On=_.div`
  border-bottom: 1px solid ${w.black};
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
  color: ${w.white};
`,Sn=/^[a-z0-9_]+$/,Nn=({parentParam:t,onDelete:r})=>{const[n,e]=x.useState(!1),[a,d]=x.useState([]),{fields:u,append:i,replace:c,remove:k}=Mo({name:"attributes"}),{setValue:l,watch:p}=$o();return x.useEffect(()=>{const m=async()=>{try{let g=[{required:!1,type:"string",key:""}];if(t!==io.value.toLowerCase()){e(!0);const b=await oo(t);b.attributes&&typeof b.attributes=="object"?g=ht(b.attributes):g=ht(b)}g=g.filter(b=>b.key!=="node_key"),c(g),d(g)}catch(g){console.warn(g)}finally{e(!1)}};a.length===0&&m()},[t,l,c,a.length]),o.jsxs(o.Fragment,{children:[n?o.jsx(v,{align:"center",children:o.jsx(ue,{color:w.SECONDARY_BLUE,size:"30"})}):o.jsx(zn,{py:8,children:o.jsx(ie,{container:!0,spacing:2,children:u.map((m,g)=>{const b=p(`attributes[${g}].type`),A=p(`attributes[${g}].required`),y=m.isNew||!1,C=["name"].includes(p(`attributes[${g}].key`));return o.jsxs(x.Fragment,{children:[o.jsx(ie,{item:!0,xs:5,children:o.jsx(Ye,{autoComplete:"off",className:"text-input",dataTestId:`cy-item-name-${g}`,disabled:!y,id:`cy-item-name-${g}`,maxLength:50,name:`attributes.${g}.key`,placeholder:"Enter value",rules:{...We,pattern:{message:"Please avoid special characters, spaces and uppercase",value:Sn}}})}),o.jsx(ie,{item:!0,xs:4,children:o.jsx($e,{dataTestId:`cy-item-select-${g}`,disabled:C,onSelect:j=>l(`attributes[${g}].type`,j==null?void 0:j.value),options:_t,selectedValue:_t.find(j=>j.value===b)})}),o.jsx(ie,{item:!0,xs:3,children:o.jsxs(Bn,{children:[o.jsx(Rn,{checked:A,"data-testid":`cy-item-${g}`,disabled:C,name:`attributes.${g}.required`,onChange:j=>l(`attributes[${g}].required`,j.target.checked)}),!C&&o.jsx(Ao,{onClick:()=>{k(g),m.key!==void 0&&r&&r(m.key)},children:o.jsx(ao,{})})]})})]},m.id)})})}),o.jsx(v,{align:"flex-start",py:12,children:o.jsx(Ln,{"data-testid":"add-attribute-btn",onClick:()=>i({key:"",type:"string",required:!0,isNew:!0}),children:o.jsxs(Vn,{children:[o.jsx(co,{})," Add Attribute"]})})})]})},zn=_(v)`
  overflow-y: auto;
  width: calc(100% + 20px);
  max-height: calc(80vh - 300px);
`,Rn=_(t=>o.jsx(fo,{...t}))`
  &.MuiSwitch-root {
    width: 51px;
    height: 38px;
  }
  & .MuiSwitch-switchBase {
    margin-top: 4px;
    &.Mui-checked {
      color: ${w.white};
      & + .MuiSwitch-track {
        background-color: ${w.primaryBlueBorder};
        opacity: 1;
      }
    }
  }
  & .MuiSwitch-thumb {
    width: 12px;
    height: 12px;
  }
  & .MuiSwitch-track {
    border-radius: 10px;
    background-color: ${w.BG2};
    opacity: 1;
  }
`,Bn=_.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`,Ln=_.button`
  background: transparent;
  width: 149px;
  height: 32px;
  color: ${w.white};
  border: 1px solid ${w.addAttributeBtn};
  padding: 2px 18px 12px 12px;
  margin-top: 2px;
  cursor: pointer;
  border-radius: 6px;
  font-family: Barlow;
  font-size: 14px;
  font-weight: 400;

  &:hover {
    background: ${w.BUTTON1_HOVER};
  }

  &:active {
    background: ${w.BUTTON1_PRESS};
  }
`,Vn=_.span`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 6px;

  svg {
    width: 23px;
    height: 23px;
    fill: none;
    margin-top: 2px;
  }
`,Dn=({parent:t,onDelete:r})=>{const n=t;return o.jsxs(v,{children:[o.jsx(v,{direction:"row",mb:10,children:o.jsxs(ie,{container:!0,spacing:2,children:[o.jsx(ie,{item:!0,xs:5,children:o.jsx(rt,{style:{marginRight:180},children:"Attributes"})}),o.jsx(ie,{item:!0,xs:4,children:o.jsx(rt,{style:{marginRight:130},children:"Type"})}),o.jsx(ie,{item:!0,xs:3,children:o.jsx(rt,{children:"Required"})})]})}),n&&o.jsx(Nn,{onDelete:r,parentParam:n},n)]})},rt=_(se)`
  font-size: 15px;
  color: gray;
`,Fn=({setMediaOptions:t,initialOptions:r})=>{const[n,e]=x.useState(r);x.useEffect(()=>{e(r)},[r]);const a=d=>{e(u=>{const i={...u,[d]:!u[d]};return t(i),i})};return o.jsxs(Gn,{direction:"column",children:[o.jsx(ct,{}),o.jsx(st,{control:o.jsx(at,{checked:n.videoAudio,onChange:()=>a("videoAudio")}),label:o.jsx(it,{active:n.videoAudio,children:"Video / Audio"}),labelPlacement:"start"}),o.jsx(ct,{}),o.jsx(st,{control:o.jsx(at,{checked:n.image,onChange:()=>a("image")}),label:o.jsx(it,{active:n.image,children:"Image"}),labelPlacement:"start"}),o.jsx(ct,{}),o.jsx(st,{control:o.jsx(at,{checked:n.sourceLink,onChange:()=>a("sourceLink")}),label:o.jsx(it,{active:n.sourceLink,children:"Source Link"}),labelPlacement:"start"})]})},Gn=_(v)`
  direction: column;
`,st=_(Ro)`
  justify-content: space-between;
  margin-left: 2px !important;
  margin-top: 8px;
  margin-bottom: 8px;
`,it=_.span`
  color: ${({active:t})=>t?w.white:w.GRAY7};
  font-family: Barlow;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: 0.01em;
  text-align: left;
`,at=_(t=>o.jsx(fo,{...t}))`
  &.MuiSwitch-root {
    width: 53px;
    height: 39px;
  }
  & .MuiSwitch-switchBase {
    margin-top: 4px;
    &.Mui-checked {
      color: ${w.white};
      & + .MuiSwitch-track {
        background-color: ${w.primaryBlueBorder};
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
    background-color: ${w.BG2};
    opacity: 1;
  }
`,ct=_.div`
  border: 1px solid ${w.BG2};
  width: 100%;
  opacity: 0.5;
`,Bt={type:"",parent:""},Wn=(t,r)=>t.length!==r.length?!0:t.some((n,e)=>{const a=r[e];return n.required!==a.required||n.type!==a.type||n.key!==a.key}),Yn=async(t,r=!1,n,e,a)=>{try{const{attributes:d,selectedIndex:u,ref_id:i,...c}=t,k={...So(d),...n.reduce((m,g)=>({...m,[g]:"delete"}),{})},l={...c,attributes:k,index:u};e.videoAudio?l.media_url="":a.videoAudio&&(l.media_url="delete"),e.image?l.image_url="":a.image&&(l.image_url="delete"),e.sourceLink?l.source_link="":a.sourceLink&&(l.source_link="delete");let p;if(r?p=await ft.put(`/schema/${t.ref_id}`,JSON.stringify(l),{}):p=await ft.post("/schema",JSON.stringify({...l,node_key:"name"}),{}),p.status!=="success")throw new Error("error");return p==null?void 0:p.ref_id}catch(d){let u=ge;if(d.status===400){const i=await d.json();u=i.errorCode||(i==null?void 0:i.status)||ge}else d instanceof Error&&(u=d.message);throw new Error(u)}},Hn=t=>t.charAt(0).toUpperCase()+t.slice(1),Lt=async(t,r)=>{try{const d=((await gt()).schemas||[]).filter(u=>!u.is_deleted&&u.type&&(!r||r(u))).map(u=>u.type==="thing"?{label:"No Parent",value:u.type}:{label:Hn(u.type),value:u.type});t(d)}catch(n){console.warn(n)}},Un=({graphLoading:t,onSchemaCreate:r,selectedSchema:n,onDelete:e,setSelectedSchemaId:a,setGraphLoading:d,setIsCreateNew:u,onSchemaUpdate:i})=>{const{close:c,visible:k}=no("addType"),l=bt({mode:"onChange",defaultValues:n?{type:n.type,parent:n.parent}:Bt}),{watch:p,setValue:m,reset:g,getValues:b}=l,[A,y]=x.useState(!1),[C,j]=x.useState(!1),[R,E]=x.useState(!1),[T,N]=x.useState(null),[D,B]=x.useState(!1),[V,h]=x.useState(null),[O,F]=x.useState(""),[I,G]=x.useState(null),[Z,ee]=x.useState([]),[ae,q]=x.useState([]),[we,Oe]=x.useState(!0),[je,le]=x.useState({videoAudio:!1,image:!1,sourceLink:!1});x.useEffect(()=>()=>{g()},[k,g]);const Ie=()=>{u(!1),a("")};x.useEffect(()=>{n||(E(!0),Lt(N).finally(()=>E(!1)))},[n]),x.useEffect(()=>{(()=>{g(Bt),q([{required:!1,type:"string",key:""}]),ee([]),le({videoAudio:!1,image:!1,sourceLink:!1})})(),n&&(m("type",n.type),m("parent",n.parent),n.index&&m("selectedIndex",n.index),le({videoAudio:!!n.media_url,image:!!n.image_url,sourceLink:!!n.source_link}),n.type!==io.value.toLowerCase()&&oo(n.type).then(S=>{const X=(S?ht(S):[{required:!1,type:"string",key:""}]).filter(pe=>pe.key!=="node_key");q(X)}),Lt(h,S=>S.type!==n.type))},[n,m,g]);const K=p("parent");p("type");const Se=P=>Array.isArray(P)&&P.every(S=>typeof S=="object"&&"key"in S),ve=p("attributes"),de=x.useMemo(()=>Se(ve)?ve.filter(P=>P.key&&P.key.trim()!==""):[],[ve]),Ke=()=>{c()},Xe=P=>{ee(S=>[...S,P])},qe=async()=>{if(n!=null&&n.type){j(!0),d(!0);try{await ft.delete(`/schema/${n.ref_id}`),e(n.type),c()}catch(P){let S=ge;if((P==null?void 0:P.status)===400){const Y=await P.json();S=Y.errorCode||(Y==null?void 0:Y.status)||ge}else P instanceof Error&&(S=P.message);G(S)}finally{j(!1),d(!1),u(!1)}}},Ce=l.handleSubmit(async P=>{if(!K){B(!0);return}y(!0);try{if(n&&P.type!==(n==null?void 0:n.type)||n&&b().parent!==(n==null?void 0:n.parent)){const Y=b().parent??(n==null?void 0:n.parent),{selectedIndex:X}=b();d(!0),await Eo(n==null?void 0:n.ref_id,{type:P.type,parent:Y,attributes:{index:X}}),await i()}const S=await Yn({...P,...n?{ref_id:n==null?void 0:n.ref_id}:{}},!!n,Z,je,{videoAudio:!!(n!=null&&n.media_url),image:!!(n!=null&&n.image_url),sourceLink:!!(n!=null&&n.source_link)});r({type:P.type,parent:K||"",ref_id:(n==null?void 0:n.ref_id)||S||"new"}),Ke()}catch(S){let Y=ge;if((S==null?void 0:S.status)===400){const X=await S.json();Y=X.errorCode||(X==null?void 0:X.status)||ge}else S instanceof Error&&(Y=S.message);F(Y)}finally{y(!1),d(!1),u(!1)}});x.useEffect(()=>{const P=l.watch(S=>{var Ee,fe,he,Pe,Re,Be;const Y=Wn(de,ae),X=((Ee=S.type)==null?void 0:Ee.trim())!==((fe=n==null?void 0:n.type)==null?void 0:fe.trim())||((he=S.parent)==null?void 0:he.trim())!==((Pe=n==null?void 0:n.parent)==null?void 0:Pe.trim())||Y,pe=!!((Re=S.type)!=null&&Re.trim()),Je=!!((Be=S.parent)!=null&&Be.trim());Oe(n?A||!X||!pe||D:A||D||!pe||!Je)});return()=>P.unsubscribe()},[l,de,ae,n,A,D]);const Ne=()=>T==null?void 0:T.find(P=>P.value===K),ze=x.useMemo(()=>{if(K){const P=V==null?void 0:V.find(S=>S.value===K);return P||{label:K,value:K}}if(n!=null&&n.parent){const P=V==null?void 0:V.find(S=>S.value===n.parent);return P||{label:n.parent,value:n.parent}}},[K,n,V]),Qe=x.useMemo(()=>{if(!n)return;const P=de.find(S=>S.key===n.index);if(P)return{label:P.key,value:P.key};if(n.index)return{label:n.index,value:n.index}},[n,de]);return o.jsxs(v,{children:[o.jsxs(Qn,{children:[o.jsx(Jn,{children:n?"Edit Type":"Create Type"}),o.jsx(qn,{"data-testid":"close-sidebar-sub-view",onClick:Ie,children:o.jsx(yt,{})})]}),o.jsx(Kn,{}),o.jsx(v,{children:o.jsx(ro,{...l,children:o.jsxs("form",{id:"add-type-form",onSubmit:Ce,children:[o.jsx(v,{children:n?o.jsxs(o.Fragment,{children:[o.jsxs(v,{mb:12,children:[o.jsx(v,{mb:12,children:o.jsx(se,{children:"Name"})}),o.jsx(v,{mb:12,children:o.jsx(Ye,{dataTestId:"cy-item-name",defaultValue:n==null?void 0:n.type,id:"cy-item-name",maxLength:250,name:"type",placeholder:"Enter type name",rules:{...We},value:K})})]}),o.jsxs(v,{mb:12,children:[o.jsx(v,{mb:12,children:o.jsx(se,{children:"Parent"})}),o.jsx($e,{isLoading:R||t,onSelect:P=>{m("parent",(P==null?void 0:P.value)||""),B(!1)},options:V||[],selectedValue:ze}),O&&o.jsx(lt,{children:O})]})]}):o.jsxs(o.Fragment,{children:[o.jsxs(v,{mb:12,children:[o.jsx(v,{mb:12,children:o.jsx(se,{children:"Select Parent"})}),o.jsx($e,{isLoading:R,onSelect:P=>{m("parent",(P==null?void 0:P.value)||""),B(!1)},options:T,selectedValue:Ne()}),D&&o.jsx(lt,{children:"A parent type must be selected"})]}),o.jsxs(v,{children:[o.jsx(v,{mb:12,children:o.jsx(se,{children:"Type name"})}),o.jsx(v,{mb:12,children:o.jsx(Ye,{id:"cy-item-name",maxLength:250,name:"type",placeholder:"Enter type name",rules:{...We},value:K})})]})]})}),o.jsx(Dn,{onDelete:Xe,parent:n?n.type:K}),o.jsx(Fn,{initialOptions:je,setMediaOptions:le}),o.jsxs(v,{children:[o.jsx(Dt,{}),o.jsx(v,{mb:12,mt:12,children:o.jsx(se,{children:"Indexes"})}),o.jsx(ie,{item:!0,mb:2,width:"70%",children:o.jsx($e,{onSelect:P=>m("selectedIndex",(P==null?void 0:P.value)||""),options:de.map(P=>({label:P.key,value:P.key})),selectedValue:Qe})}),o.jsx(Dt,{})]}),o.jsxs(v,{direction:"row",justify:"space-between",mt:20,children:[n&&o.jsxs(v,{direction:"column",children:[o.jsxs(Xn,{color:"secondary",disabled:C,onClick:qe,size:"large",style:{marginRight:20},variant:"contained",children:["Delete",C&&o.jsxs(Vt,{children:[o.jsx(ue,{color:w.lightGray,size:12})," "]})]}),I&&o.jsx(lt,{children:I})]}),o.jsxs(Zn,{color:"secondary",disabled:we,onClick:Ce,size:"large",variant:"contained",children:["Confirm",A&&o.jsxs(Vt,{children:[o.jsx(ue,{color:w.lightGray,size:12})," "]})]})]})]})})})]})},Zn=_(Ue)`
  width: 100% !important;
  margin: 0 auto !important;
`,Kn=_.div`
  border-bottom: 1px solid ${w.black};
  width: calc(100% + 32px);
  margin: 0 -16px 16px;
  opacity: 0.3;
`,Vt=_.span`
  margin-top: 2px;
`,Xn=_(Ue)`
  && {
    color: ${w.primaryRed};
    background-color: rgba(237, 116, 116, 0.1);

    &:hover,
    &:active,
    &:focus {
      color: ${w.primaryRed};
      background-color: rgba(237, 116, 116, 0.2);
    }
  }
`,qn=_(v)`
  font-size: 32px;
  color: ${w.white};
  cursor: pointer;

  svg {
    color: ${w.GRAY6};
  }

  &:hover {
    svg {
      color: ${w.white};
    }
  }
`,lt=_(v)`
  font-size: 13px;
  font-family: Barlow;
  color: #ff8f80;
  line-height: 0.2px;
  margin-top: 12px;
  padding-top: 20px;
`,Dt=_.div`
  border: 1px solid ${w.BG2};
  width: calc(100% + 32px);
  opacity: 0.5;
  margin-left: -16px;
`,Qn=_(v)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 16px;
`,Jn=_(se)`
  font-family: Barlow;
  font-size: 22px;
  font-weight: 600;
  line-height: 16px;
  letter-spacing: 0.01em;
  text-align: left;
  color: ${w.white};
`;var er=Object.defineProperty,tr=(t,r,n)=>r in t?er(t,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[r]=n,M=(t,r,n)=>(tr(t,typeof r!="symbol"?r+"":r,n),n);const Ge=new Yo,Ft=new Ho,or=Math.cos(70*(Math.PI/180)),Gt=(t,r)=>(t%r+r)%r;let nr=class extends Uo{constructor(r,n){super(),M(this,"object"),M(this,"domElement"),M(this,"enabled",!0),M(this,"target",new z),M(this,"minDistance",0),M(this,"maxDistance",1/0),M(this,"minZoom",0),M(this,"maxZoom",1/0),M(this,"minPolarAngle",0),M(this,"maxPolarAngle",Math.PI),M(this,"minAzimuthAngle",-1/0),M(this,"maxAzimuthAngle",1/0),M(this,"enableDamping",!1),M(this,"dampingFactor",.05),M(this,"enableZoom",!0),M(this,"zoomSpeed",1),M(this,"enableRotate",!0),M(this,"rotateSpeed",1),M(this,"enablePan",!0),M(this,"panSpeed",1),M(this,"screenSpacePanning",!0),M(this,"keyPanSpeed",7),M(this,"zoomToCursor",!1),M(this,"autoRotate",!1),M(this,"autoRotateSpeed",2),M(this,"reverseOrbit",!1),M(this,"reverseHorizontalOrbit",!1),M(this,"reverseVerticalOrbit",!1),M(this,"keys",{LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"}),M(this,"mouseButtons",{LEFT:me.ROTATE,MIDDLE:me.DOLLY,RIGHT:me.PAN}),M(this,"touches",{ONE:xe.ROTATE,TWO:xe.DOLLY_PAN}),M(this,"target0"),M(this,"position0"),M(this,"zoom0"),M(this,"_domElementKeyEvents",null),M(this,"getPolarAngle"),M(this,"getAzimuthalAngle"),M(this,"setPolarAngle"),M(this,"setAzimuthalAngle"),M(this,"getDistance"),M(this,"listenToKeyEvents"),M(this,"stopListenToKeyEvents"),M(this,"saveState"),M(this,"reset"),M(this,"update"),M(this,"connect"),M(this,"dispose"),this.object=r,this.domElement=n,this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this.getPolarAngle=()=>l.phi,this.getAzimuthalAngle=()=>l.theta,this.setPolarAngle=s=>{let f=Gt(s,2*Math.PI),$=l.phi;$<0&&($+=2*Math.PI),f<0&&(f+=2*Math.PI);let L=Math.abs(f-$);2*Math.PI-L<L&&(f<$?f+=2*Math.PI:$+=2*Math.PI),p.phi=f-$,e.update()},this.setAzimuthalAngle=s=>{let f=Gt(s,2*Math.PI),$=l.theta;$<0&&($+=2*Math.PI),f<0&&(f+=2*Math.PI);let L=Math.abs(f-$);2*Math.PI-L<L&&(f<$?f+=2*Math.PI:$+=2*Math.PI),p.theta=f-$,e.update()},this.getDistance=()=>e.object.position.distanceTo(e.target),this.listenToKeyEvents=s=>{s.addEventListener("keydown",et),this._domElementKeyEvents=s},this.stopListenToKeyEvents=()=>{this._domElementKeyEvents.removeEventListener("keydown",et),this._domElementKeyEvents=null},this.saveState=()=>{e.target0.copy(e.target),e.position0.copy(e.object.position),e.zoom0=e.object.zoom},this.reset=()=>{e.target.copy(e.target0),e.object.position.copy(e.position0),e.object.zoom=e.zoom0,e.object.updateProjectionMatrix(),e.dispatchEvent(a),e.update(),c=i.NONE},this.update=(()=>{const s=new z,f=new z(0,1,0),$=new It().setFromUnitVectors(r.up,f),L=$.clone().invert(),W=new z,oe=new It,ce=2*Math.PI;return function(){const Et=e.object.position;$.setFromUnitVectors(r.up,f),L.copy($).invert(),s.copy(Et).sub(e.target),s.applyQuaternion($),l.setFromVector3(s),e.autoRotate&&c===i.NONE&&G(F()),e.enableDamping?(l.theta+=p.theta*e.dampingFactor,l.phi+=p.phi*e.dampingFactor):(l.theta+=p.theta,l.phi+=p.phi);let ne=e.minAzimuthAngle,re=e.maxAzimuthAngle;isFinite(ne)&&isFinite(re)&&(ne<-Math.PI?ne+=ce:ne>Math.PI&&(ne-=ce),re<-Math.PI?re+=ce:re>Math.PI&&(re-=ce),ne<=re?l.theta=Math.max(ne,Math.min(re,l.theta)):l.theta=l.theta>(ne+re)/2?Math.max(ne,l.theta):Math.min(re,l.theta)),l.phi=Math.max(e.minPolarAngle,Math.min(e.maxPolarAngle,l.phi)),l.makeSafe(),e.enableDamping===!0?e.target.addScaledVector(g,e.dampingFactor):e.target.add(g),e.zoomToCursor&&V||e.object.isOrthographicCamera?l.radius=le(l.radius):l.radius=le(l.radius*m),s.setFromSpherical(l),s.applyQuaternion(L),Et.copy(e.target).add(s),e.object.matrixAutoUpdate||e.object.updateMatrix(),e.object.lookAt(e.target),e.enableDamping===!0?(p.theta*=1-e.dampingFactor,p.phi*=1-e.dampingFactor,g.multiplyScalar(1-e.dampingFactor)):(p.set(0,0,0),g.set(0,0,0));let Le=!1;if(e.zoomToCursor&&V){let Te=null;if(e.object instanceof De&&e.object.isPerspectiveCamera){const ke=s.length();Te=le(ke*m);const Ve=ke-Te;e.object.position.addScaledVector(D,Ve),e.object.updateMatrixWorld()}else if(e.object.isOrthographicCamera){const ke=new z(B.x,B.y,0);ke.unproject(e.object),e.object.zoom=Math.max(e.minZoom,Math.min(e.maxZoom,e.object.zoom/m)),e.object.updateProjectionMatrix(),Le=!0;const Ve=new z(B.x,B.y,0);Ve.unproject(e.object),e.object.position.sub(Ve).add(ke),e.object.updateMatrixWorld(),Te=s.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),e.zoomToCursor=!1;Te!==null&&(e.screenSpacePanning?e.target.set(0,0,-1).transformDirection(e.object.matrix).multiplyScalar(Te).add(e.object.position):(Ge.origin.copy(e.object.position),Ge.direction.set(0,0,-1).transformDirection(e.object.matrix),Math.abs(e.object.up.dot(Ge.direction))<or?r.lookAt(e.target):(Ft.setFromNormalAndCoplanarPoint(e.object.up,e.target),Ge.intersectPlane(Ft,e.target))))}else e.object instanceof Fe&&e.object.isOrthographicCamera&&(e.object.zoom=Math.max(e.minZoom,Math.min(e.maxZoom,e.object.zoom/m)),e.object.updateProjectionMatrix(),Le=!0);return m=1,V=!1,Le||W.distanceToSquared(e.object.position)>k||8*(1-oe.dot(e.object.quaternion))>k?(e.dispatchEvent(a),W.copy(e.object.position),oe.copy(e.object.quaternion),Le=!1,!0):!1}})(),this.connect=s=>{s===document&&console.error('THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.'),e.domElement=s,e.domElement.style.touchAction="none",e.domElement.addEventListener("contextmenu",jt),e.domElement.addEventListener("pointerdown",Ee),e.domElement.addEventListener("pointercancel",Pe),e.domElement.addEventListener("wheel",wt)},this.dispose=()=>{var s,f,$,L,W,oe;(s=e.domElement)==null||s.removeEventListener("contextmenu",jt),(f=e.domElement)==null||f.removeEventListener("pointerdown",Ee),($=e.domElement)==null||$.removeEventListener("pointercancel",Pe),(L=e.domElement)==null||L.removeEventListener("wheel",wt),(W=e.domElement)==null||W.ownerDocument.removeEventListener("pointermove",fe),(oe=e.domElement)==null||oe.ownerDocument.removeEventListener("pointerup",he),e._domElementKeyEvents!==null&&e._domElementKeyEvents.removeEventListener("keydown",et)};const e=this,a={type:"change"},d={type:"start"},u={type:"end"},i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let c=i.NONE;const k=1e-6,l=new St,p=new St;let m=1;const g=new z,b=new Q,A=new Q,y=new Q,C=new Q,j=new Q,R=new Q,E=new Q,T=new Q,N=new Q,D=new z,B=new Q;let V=!1;const h=[],O={};function F(){return 2*Math.PI/60/60*e.autoRotateSpeed}function I(){return Math.pow(.95,e.zoomSpeed)}function G(s){e.reverseOrbit||e.reverseHorizontalOrbit?p.theta+=s:p.theta-=s}function Z(s){e.reverseOrbit||e.reverseVerticalOrbit?p.phi+=s:p.phi-=s}const ee=(()=>{const s=new z;return function($,L){s.setFromMatrixColumn(L,0),s.multiplyScalar(-$),g.add(s)}})(),ae=(()=>{const s=new z;return function($,L){e.screenSpacePanning===!0?s.setFromMatrixColumn(L,1):(s.setFromMatrixColumn(L,0),s.crossVectors(e.object.up,s)),s.multiplyScalar($),g.add(s)}})(),q=(()=>{const s=new z;return function($,L){const W=e.domElement;if(W&&e.object instanceof De&&e.object.isPerspectiveCamera){const oe=e.object.position;s.copy(oe).sub(e.target);let ce=s.length();ce*=Math.tan(e.object.fov/2*Math.PI/180),ee(2*$*ce/W.clientHeight,e.object.matrix),ae(2*L*ce/W.clientHeight,e.object.matrix)}else W&&e.object instanceof Fe&&e.object.isOrthographicCamera?(ee($*(e.object.right-e.object.left)/e.object.zoom/W.clientWidth,e.object.matrix),ae(L*(e.object.top-e.object.bottom)/e.object.zoom/W.clientHeight,e.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),e.enablePan=!1)}})();function we(s){e.object instanceof De&&e.object.isPerspectiveCamera||e.object instanceof Fe&&e.object.isOrthographicCamera?m/=s:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),e.enableZoom=!1)}function Oe(s){e.object instanceof De&&e.object.isPerspectiveCamera||e.object instanceof Fe&&e.object.isOrthographicCamera?m*=s:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),e.enableZoom=!1)}function je(s){if(!e.zoomToCursor||!e.domElement)return;V=!0;const f=e.domElement.getBoundingClientRect(),$=s.clientX-f.left,L=s.clientY-f.top,W=f.width,oe=f.height;B.x=$/W*2-1,B.y=-(L/oe)*2+1,D.set(B.x,B.y,1).unproject(e.object).sub(e.object.position).normalize()}function le(s){return Math.max(e.minDistance,Math.min(e.maxDistance,s))}function Ie(s){b.set(s.clientX,s.clientY)}function K(s){je(s),E.set(s.clientX,s.clientY)}function Se(s){C.set(s.clientX,s.clientY)}function ve(s){A.set(s.clientX,s.clientY),y.subVectors(A,b).multiplyScalar(e.rotateSpeed);const f=e.domElement;f&&(G(2*Math.PI*y.x/f.clientHeight),Z(2*Math.PI*y.y/f.clientHeight)),b.copy(A),e.update()}function de(s){T.set(s.clientX,s.clientY),N.subVectors(T,E),N.y>0?we(I()):N.y<0&&Oe(I()),E.copy(T),e.update()}function Ke(s){j.set(s.clientX,s.clientY),R.subVectors(j,C).multiplyScalar(e.panSpeed),q(R.x,R.y),C.copy(j),e.update()}function Xe(s){je(s),s.deltaY<0?Oe(I()):s.deltaY>0&&we(I()),e.update()}function qe(s){let f=!1;switch(s.code){case e.keys.UP:q(0,e.keyPanSpeed),f=!0;break;case e.keys.BOTTOM:q(0,-e.keyPanSpeed),f=!0;break;case e.keys.LEFT:q(e.keyPanSpeed,0),f=!0;break;case e.keys.RIGHT:q(-e.keyPanSpeed,0),f=!0;break}f&&(s.preventDefault(),e.update())}function Ce(){if(h.length==1)b.set(h[0].pageX,h[0].pageY);else{const s=.5*(h[0].pageX+h[1].pageX),f=.5*(h[0].pageY+h[1].pageY);b.set(s,f)}}function Ne(){if(h.length==1)C.set(h[0].pageX,h[0].pageY);else{const s=.5*(h[0].pageX+h[1].pageX),f=.5*(h[0].pageY+h[1].pageY);C.set(s,f)}}function ze(){const s=h[0].pageX-h[1].pageX,f=h[0].pageY-h[1].pageY,$=Math.sqrt(s*s+f*f);E.set(0,$)}function Qe(){e.enableZoom&&ze(),e.enablePan&&Ne()}function P(){e.enableZoom&&ze(),e.enableRotate&&Ce()}function S(s){if(h.length==1)A.set(s.pageX,s.pageY);else{const $=tt(s),L=.5*(s.pageX+$.x),W=.5*(s.pageY+$.y);A.set(L,W)}y.subVectors(A,b).multiplyScalar(e.rotateSpeed);const f=e.domElement;f&&(G(2*Math.PI*y.x/f.clientHeight),Z(2*Math.PI*y.y/f.clientHeight)),b.copy(A)}function Y(s){if(h.length==1)j.set(s.pageX,s.pageY);else{const f=tt(s),$=.5*(s.pageX+f.x),L=.5*(s.pageY+f.y);j.set($,L)}R.subVectors(j,C).multiplyScalar(e.panSpeed),q(R.x,R.y),C.copy(j)}function X(s){const f=tt(s),$=s.pageX-f.x,L=s.pageY-f.y,W=Math.sqrt($*$+L*L);T.set(0,W),N.set(0,Math.pow(T.y/E.y,e.zoomSpeed)),we(N.y),E.copy(T)}function pe(s){e.enableZoom&&X(s),e.enablePan&&Y(s)}function Je(s){e.enableZoom&&X(s),e.enableRotate&&S(s)}function Ee(s){var f,$;e.enabled!==!1&&(h.length===0&&((f=e.domElement)==null||f.ownerDocument.addEventListener("pointermove",fe),($=e.domElement)==null||$.ownerDocument.addEventListener("pointerup",he)),bo(s),s.pointerType==="touch"?xo(s):Re(s))}function fe(s){e.enabled!==!1&&(s.pointerType==="touch"?go(s):Be(s))}function he(s){var f,$,L;vt(s),h.length===0&&((f=e.domElement)==null||f.releasePointerCapture(s.pointerId),($=e.domElement)==null||$.ownerDocument.removeEventListener("pointermove",fe),(L=e.domElement)==null||L.ownerDocument.removeEventListener("pointerup",he)),e.dispatchEvent(u),c=i.NONE}function Pe(s){vt(s)}function Re(s){let f;switch(s.button){case 0:f=e.mouseButtons.LEFT;break;case 1:f=e.mouseButtons.MIDDLE;break;case 2:f=e.mouseButtons.RIGHT;break;default:f=-1}switch(f){case me.DOLLY:if(e.enableZoom===!1)return;K(s),c=i.DOLLY;break;case me.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(e.enablePan===!1)return;Se(s),c=i.PAN}else{if(e.enableRotate===!1)return;Ie(s),c=i.ROTATE}break;case me.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(e.enableRotate===!1)return;Ie(s),c=i.ROTATE}else{if(e.enablePan===!1)return;Se(s),c=i.PAN}break;default:c=i.NONE}c!==i.NONE&&e.dispatchEvent(d)}function Be(s){if(e.enabled!==!1)switch(c){case i.ROTATE:if(e.enableRotate===!1)return;ve(s);break;case i.DOLLY:if(e.enableZoom===!1)return;de(s);break;case i.PAN:if(e.enablePan===!1)return;Ke(s);break}}function wt(s){e.enabled===!1||e.enableZoom===!1||c!==i.NONE&&c!==i.ROTATE||(s.preventDefault(),e.dispatchEvent(d),Xe(s),e.dispatchEvent(u))}function et(s){e.enabled===!1||e.enablePan===!1||qe(s)}function xo(s){switch(Ct(s),h.length){case 1:switch(e.touches.ONE){case xe.ROTATE:if(e.enableRotate===!1)return;Ce(),c=i.TOUCH_ROTATE;break;case xe.PAN:if(e.enablePan===!1)return;Ne(),c=i.TOUCH_PAN;break;default:c=i.NONE}break;case 2:switch(e.touches.TWO){case xe.DOLLY_PAN:if(e.enableZoom===!1&&e.enablePan===!1)return;Qe(),c=i.TOUCH_DOLLY_PAN;break;case xe.DOLLY_ROTATE:if(e.enableZoom===!1&&e.enableRotate===!1)return;P(),c=i.TOUCH_DOLLY_ROTATE;break;default:c=i.NONE}break;default:c=i.NONE}c!==i.NONE&&e.dispatchEvent(d)}function go(s){switch(Ct(s),c){case i.TOUCH_ROTATE:if(e.enableRotate===!1)return;S(s),e.update();break;case i.TOUCH_PAN:if(e.enablePan===!1)return;Y(s),e.update();break;case i.TOUCH_DOLLY_PAN:if(e.enableZoom===!1&&e.enablePan===!1)return;pe(s),e.update();break;case i.TOUCH_DOLLY_ROTATE:if(e.enableZoom===!1&&e.enableRotate===!1)return;Je(s),e.update();break;default:c=i.NONE}}function jt(s){e.enabled!==!1&&s.preventDefault()}function bo(s){h.push(s)}function vt(s){delete O[s.pointerId];for(let f=0;f<h.length;f++)if(h[f].pointerId==s.pointerId){h.splice(f,1);return}}function Ct(s){let f=O[s.pointerId];f===void 0&&(f=new Q,O[s.pointerId]=f),f.set(s.pageX,s.pageY)}function tt(s){const f=s.pointerId===h[0].pointerId?h[1]:h[0];return O[f.pointerId]}n!==void 0&&this.connect(n),this.update()}};const rr=new z,Wt=x.forwardRef(function({start:r=[0,0,0],end:n=[0,0,0],mid:e,segments:a=20,...d},u){const i=x.useRef(null),[c]=x.useState(()=>new Zo(void 0,void 0,void 0)),k=x.useCallback((p,m,g,b=20)=>(p instanceof z?c.v0.copy(p):c.v0.set(...p),m instanceof z?c.v2.copy(m):c.v2.set(...m),g instanceof z?c.v1.copy(g):c.v1.copy(c.v0.clone().add(c.v2.clone().sub(c.v0)).add(rr.set(0,c.v0.y-c.v2.y,0))),c.getPoints(b)),[]);x.useLayoutEffect(()=>{i.current.setPoints=(p,m,g)=>{const b=k(p,m,g);i.current.geometry&&i.current.geometry.setPositions(b.map(A=>A.toArray()).flat())}},[]);const l=x.useMemo(()=>k(r,n,e,a),[r,n,e,a]);return x.createElement(Lo,U({ref:Vo([i,u]),points:l},d))}),sr=x.forwardRef(({makeDefault:t,camera:r,regress:n,domElement:e,enableDamping:a=!0,onChange:d,onStart:u,onEnd:i,...c},k)=>{const l=te(T=>T.invalidate),p=te(T=>T.camera),m=te(T=>T.gl),g=te(T=>T.events),b=te(T=>T.setEvents),A=te(T=>T.set),y=te(T=>T.get),C=te(T=>T.performance),j=r||p,R=e||g.connected||m.domElement,E=x.useMemo(()=>new nr(j),[j]);return Ze(()=>{E.enabled&&E.update()},-1),x.useEffect(()=>(E.connect(R),()=>void E.dispose()),[R,n,E,l]),x.useEffect(()=>{const T=B=>{l(),n&&C.regress(),d&&d(B)},N=B=>{u&&u(B)},D=B=>{i&&i(B)};return E.addEventListener("change",T),E.addEventListener("start",N),E.addEventListener("end",D),()=>{E.removeEventListener("start",N),E.removeEventListener("end",D),E.removeEventListener("change",T)}},[d,u,i,E,l,b]),x.useEffect(()=>{if(t){const T=y().controls;return A({controls:E}),()=>A({controls:T})}},[t,E]),x.createElement("primitive",U({ref:k,object:E,enableDamping:a},c))});function ir(t){const r=t+"Geometry";return x.forwardRef(({args:n,children:e,...a},d)=>x.createElement("mesh",U({ref:d},a),x.createElement(r,{attach:"geometry",args:n}),e))}const ar=ir("circle"),J=10,cr=2,lr=2,Yt=10,dr=10,Ht=(t,r,n)=>{const d=new z().subVectors(r,t).normalize().multiplyScalar(n);return new z().addVectors(t,d)},ur=(t,r,n,e)=>{const a=new z().lerpVectors(t,r,.5),d=new z().subVectors(r,t).normalize(),u=new z(-d.y,d.x,d.z).normalize(),i=(n-e/2)*dr;return new z().addVectors(a,u.multiplyScalar(i))},ho=({links:t,nodes:r,onEdgeClick:n})=>{const e=x.useRef(null),{camera:a}=te(),d=new z,u=new z,i=new z,c=new z,k=new z,l=new z,p=new z,m=new z;Ze(()=>{e.current&&r&&e.current.children.forEach((b,A)=>{var V,h,O,F;const y=t[A];if(!y)return;const C=r.find(I=>I.ref_id===y.target),j=r.find(I=>I.ref_id===y.source);d.set((j==null?void 0:j.x)||0,(j==null?void 0:j.y)||0,(j==null?void 0:j.z)||0),u.set((C==null?void 0:C.x)||0,(C==null?void 0:C.y)||0,(C==null?void 0:C.z)||0);const R=b.children[0],E=b.children[1],T=b.children[2],N=b.children[3],D=t.filter(I=>I.source===y.source&&I.target===y.target||I.source===y.target&&I.target===y.source).length,B=t.filter((I,G)=>G<A&&(I.source===y.source&&I.target===y.target||I.source===y.target&&I.target===y.source)).length;if((j==null?void 0:j.ref_id)===(C==null?void 0:C.ref_id)){const[I,G,Z]=No(d);(V=R.setPoints)==null||V.call(R,d,Z,I),(h=E.setPoints)==null||h.call(E,Z,u,I),T.position.set(Z.x,Z.y,G.z),T.lookAt(I),T.rotateX(-Math.PI/2),N.position.set(Z.x,Z.y,G.z),N.lookAt(a.position)}else{m.copy(Ht(d,u,J)),p.copy(Ht(u,d,J+.5)),i.lerpVectors(m,p,.5),D>1?i.copy(ur(m,p,B,D)):i.lerpVectors(m,p,.5);const I=30;c.subVectors(p,m).normalize().multiplyScalar(I/2),k.subVectors(i,c),l.addVectors(i,c);const G=new z().addVectors(m,k).multiplyScalar(.5),Z=new z().addVectors(l,p).multiplyScalar(.5);(O=R.setPoints)==null||O.call(R,m,k,G),(F=E.setPoints)==null||F.call(E,l,p,Z),T.position.set(p.x,p.y,p.z),T.lookAt(m),T.rotateX(-Math.PI/2),N.position.set(i.x,i.y,i.z),N.lookAt(a.position);let ee=Math.atan2(p.y-m.y,p.x-m.x);(ee>Math.PI/2||ee<-Math.PI/2)&&(ee+=Math.PI),N.rotation.set(0,0,ee);const ae=m.distanceTo(p),q=ae<I?2:4;ae<I?N.text=mt(y.edge_type,Yt):N.text=y.edge_type,N.fontSize=q}})});const g=(b,A,y,C)=>{if(b==="CHILD_OF"||A==="string"||y==="string")return;const j=r==null?void 0:r.find(N=>N.ref_id===A),R=r==null?void 0:r.find(N=>N.ref_id===y),E=(j==null?void 0:j.type)||"",T=(R==null?void 0:R.type)||"";n(C,b,E,T)};return o.jsx("group",{ref:e,children:t.map(b=>o.jsxs("group",{children:[o.jsx(Wt,{color:"white",end:[0,0,0],lineWidth:1,start:[0,0,0]}),o.jsx(Wt,{color:"white",end:[0,0,0],lineWidth:1,start:[0,0,0]}),o.jsxs("mesh",{position:new z(0,0,0),children:[o.jsx("coneGeometry",{args:[cr,lr,32]}),o.jsx("meshBasicMaterial",{color:"white"})]}),o.jsx(lo,{anchorX:"center",anchorY:"middle",color:"white",...uo,lineHeight:1,maxWidth:20,onClick:()=>g(b.edge_type,b.source,b.target,b.ref_id),rotation:[0,0,0],textAlign:"center",children:mt(b.edge_type,Yt)})]},b.ref_id))})};ho.displayName="Lines";const pr=["#ff13c9","#5af0ff","#3233ff","#c2f0c2","#ff6666","#99ccff","#ffb3b3"],fr=_.div`
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
`,hr=_(Do)`
  position: absolute;
`;new Ko(2,2,2);const mo=x.memo(({node:t,setSelectedNode:r,onSimulationUpdate:n,isSelected:e})=>{var A;const a=x.useRef(null),[d,u]=x.useState(!1);console.log(e);const{size:i,camera:c}=te(),k=_o(y=>{if(t.type==="Thing")return;const{xy:[C,j],down:R,dragging:E,first:T,elapsedTime:N}=y;if(!(!E||T||N<100)&&R&&a.current){n();const D=(C-i.left)/window.innerWidth*i.width,B=(j-i.top)/window.innerHeight*i.height,O=new z(D/i.width*2-1,-B/i.height*2+1,0).unproject(c).multiply(new z(1,1,0)).clone();t.fx=O.x,t.fy=O.y}});Ze(()=>{a.current&&a.current.position.set(t.x||0,t.y||0,0)});const l=pr[(A=t==null?void 0:t.children)==null?void 0:A.length]||"red",p=y=>{y.stopPropagation(),t.type!=="Thing"&&r()},m=mt(t.type||"",J),g=()=>{u(!0)},b=()=>{u(!1)};return o.jsxs("mesh",{ref:a,onClick:p,...k(),onPointerOut:b,onPointerOver:g,position:new z(t.x,t.y,0),children:[o.jsx(ar,{args:[J,30,20],children:o.jsx("meshStandardMaterial",{attach:"material",color:l})}),o.jsx(lo,{...uo,clipRect:[-J,-J,J,J],color:"#000",fontSize:2,maxWidth:J*2,name:t.type,textAlign:"left",children:m}),d&&o.jsx(hr,{position:[0,5,0],zIndexRange:[100,0],children:o.jsx(fr,{children:t.type})})]})});mo.displayName="Node";const mr=({simulation:t,setSelectedSchemaId:r,selectedId:n,setIsAddEdgeNode:e})=>{const[a]=so(u=>[u.schemas]),d=()=>{t&&(t.alpha(.05),t.restart())};return o.jsx(o.Fragment,{children:a.map((u,i)=>{const c=t.nodes()[i];return c?o.jsx(mo,{isSelected:c.ref_id===n,node:c,onSimulationUpdate:d,setSelectedNode:()=>{e(!1),r(c.ref_id)}},c.ref_id):null})})},xr=({schemasWithPositions:t,filteredLinks:r,setSelectedSchemaId:n,selectedSchemaId:e,setIsAddEdgeNode:a,onEdgeClick:d})=>{const[u,i]=x.useState(null),c=Ot(t),k=Ot(r);return x.useEffect(()=>{if(!t.length||!r.length)return;const l=structuredClone(t),p=structuredClone(r);if(u){c&&c.length!==t.length&&k&&k.length!==r.length&&(u.nodes(l).force("link",Tt(p).id(g=>g.ref_id).distance(100)).force("charge",kt()).force("center",Mt()).force("collide",$t(J+5)).alpha(.5).restart(),i({...u}));return}const m=Po(l).force("link",Tt(p).id(g=>g.ref_id).distance(120)).force("charge",kt().strength(-100)).force("center",Mt()).force("collide",$t(J+5));i(m)},[t,u,r,c,k]),Ze(()=>{}),u?o.jsxs(o.Fragment,{children:[o.jsx(ho,{links:r,nodes:u.nodes(),onEdgeClick:d}),o.jsx(mr,{selectedId:e,setIsAddEdgeNode:a,setSelectedSchemaId:n,simulation:u})]}):null},dt=new Xo(0),gr=({selectedSchemaId:t,links:r,schemasWithPositions:n,setSelectedSchemaId:e,setIsAddEdgeNode:a,onEdgeClick:d})=>o.jsxs(Fo,{camera:{zoom:1,position:[0,0,200]},id:"schema-canvas",linear:!0,orthographic:!0,children:[o.jsx("color",{args:[dt.r,dt.g,dt.b],attach:"background"}),To&&o.jsx(Go,{position:"right-bottom"}),o.jsx(br,{}),o.jsx(Wo,{}),o.jsx(xr,{filteredLinks:r,onEdgeClick:d,schemasWithPositions:n,selectedSchemaId:t,setIsAddEdgeNode:a,setSelectedSchemaId:e})]}),br=()=>{x.useEffect(()=>{const n=a=>{["Meta","Alt"].includes(a.key)&&(document.body.style.cursor="grab")},e=a=>{["Meta","Alt"].includes(a.key)&&(document.body.style.cursor="default")};return window.addEventListener("keydown",n,!1),window.addEventListener("keyup",e,!1),()=>{window.removeEventListener("keydown",n,!1),window.removeEventListener("keyup",e,!1)}},[]);const t=()=>{document.body.style.cursor="grabbing"},r=()=>{document.body.style.cursor="default"};return o.jsx(sr,{dampingFactor:1,enableDamping:!0,enablePan:!0,enableRotate:!1,enableZoom:!0,maxZoom:20,minZoom:1,onEnd:r,onStart:t,zoomSpeed:1.5,zoomToCursor:!0})},yr=t=>o.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 18 19",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:o.jsx("path",{d:"M9.5002 0.270145C10.3742 0.270145 11.1128 0.571885 11.7161 1.17537C12.3193 1.77868 12.6209 2.51732 12.6209 3.39129C12.6209 4.17273 12.3716 4.85117 11.873 5.42662C11.3744 6.00189 10.7483 6.34792 9.99474 6.46469L9.99474 9.0052L13.8388 9.0052C14.2785 9.0052 14.6549 9.16172 14.9679 9.47476C15.2809 9.78779 15.4375 10.1642 15.4375 10.6039L15.4375 12.564L17.0171 12.564C17.2435 12.564 17.4334 12.6405 17.5866 12.7936C17.7396 12.9468 17.8162 13.1366 17.8162 13.3631L17.8162 17.5042C17.8162 17.7389 17.7396 17.9321 17.5866 18.0836C17.4334 18.2352 17.2435 18.311 17.0171 18.311L12.8759 18.311C12.6412 18.311 12.4481 18.2345 12.2965 18.0814C12.1449 17.9282 12.0692 17.7384 12.0692 17.5119L12.0692 13.3707C12.0692 13.136 12.1457 12.9429 12.2987 12.7913C12.452 12.6398 12.6418 12.564 12.8682 12.564L14.4479 12.564L14.4479 10.6039C14.4479 10.4262 14.3908 10.2803 14.2767 10.166C14.1624 10.0518 14.0164 9.99478 13.8388 9.99478L5.16112 9.99478C4.98349 9.99478 4.83753 10.0518 4.72323 10.166C4.6091 10.2803 4.55203 10.4262 4.55203 10.6039L4.55203 12.6115C5.3056 12.7283 5.93168 13.0743 6.43026 13.6496C6.92885 14.225 7.17814 14.9034 7.17814 15.6849C7.17814 16.5587 6.87648 17.2973 6.27317 17.9008C5.66969 18.5041 4.93096 18.8058 4.05699 18.8058C3.18303 18.8058 2.44439 18.5041 1.84107 17.9008C1.23792 17.2973 0.936342 16.5587 0.936343 15.6849C0.936343 14.9034 1.18564 14.225 1.68422 13.6496C2.18281 13.0743 2.80888 12.7283 3.56245 12.6115L3.56245 10.6039C3.56245 10.1642 3.71897 9.78779 4.03201 9.47476C4.34504 9.16172 4.72142 9.0052 5.16112 9.0052L9.00516 9.0052L9.00516 6.46469C8.25159 6.34792 7.62552 6.00189 7.12693 5.42662C6.62835 4.85117 6.37905 4.17273 6.37905 3.39129C6.37905 2.51732 6.68071 1.77868 7.28403 1.17537C7.88751 0.571885 8.62623 0.270145 9.5002 0.270145Z",fill:"currentColor"})}),wr=({onClose:t,activeTab:r,setActiveTab:n})=>o.jsxs(jr,{children:[o.jsxs(vr,{children:[o.jsx(yr,{}),o.jsx(Cr,{children:"Blueprint"})]}),o.jsxs(Er,{children:[o.jsx(Ut,{active:r==="all",onClick:()=>n("all"),children:"Show All"}),o.jsx(Ut,{active:r==="parent",onClick:()=>n("parent"),children:"Parent Only"})]}),o.jsx(Pr,{onClick:t,children:o.jsx(yt,{})})]}),jr=_(v)`
  background-color: ${w.BG1};
  height: 64px;
  width: 100%;
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
  justify-content: space-between;
  padding: 17px;
  border-bottom: 1px solid ${w.black};
`,vr=_.div`
  display: flex;
  align-items: center;
  font-size: 22px;
  font-weight: 400;
  font-family: Barlow;

  svg {
    color: ${w.GRAY6};
    margin-left: 6px;
  }
`,Cr=_.span`
  color: ${w.white};
  font-weight: 400;
  font-family: Barlow;
  margin-left: 15px;
  font-size: 22px;
`,Er=_.div`
  display: flex;
  position: absolute;
  top: 16px;
  right: 60px;
  background-color: ${w.divider2};
  border-radius: 6px;
  padding: 2px;
`,Ut=_.div`
  color: ${t=>t.active?w.white:w.GRAY6};
  background-color: ${t=>t.active?w.BUTTON1:"transparent"};
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
`,Pr=_.div`
  position: absolute;
  top: 16px;
  right: 12px;
  font-size: 20px;
  color: ${w.GRAY6};
  cursor: pointer;
  z-index: 1;

  svg {
    width: 30px;
    height: 32px;
  }
`,Tr=t=>o.jsxs("svg",{width:"1em",height:"1em",viewBox:"0 0 23 22",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:[o.jsx("mask",{id:"mask0_8954_27793",maskUnits:"userSpaceOnUse",x:"10",y:"-3",width:"16",height:"16",children:o.jsx("rect",{x:"10",y:"-3",width:"1em",height:"1em",fill:"currentColor"})}),o.jsx("g",{mask:"url(#mask0_8954_27793)",children:o.jsx("path",{d:"M17.5 5.50005H14.1666C14.025 5.50005 13.9062 5.45212 13.8104 5.35625C13.7145 5.26037 13.6666 5.14157 13.6666 4.99985C13.6666 4.85812 13.7145 4.73939 13.8104 4.64367C13.9062 4.54794 14.025 4.50008 14.1666 4.50008H17.5V1.16675C17.5 1.02508 17.5479 0.906331 17.6438 0.810498C17.7396 0.714665 17.8584 0.666748 18.0002 0.666748C18.1419 0.666748 18.2606 0.714665 18.3563 0.810498C18.4521 0.906331 18.4999 1.02508 18.4999 1.16675V4.50008H21.8333C21.9749 4.50008 22.0937 4.54802 22.1895 4.64388C22.2853 4.73976 22.3333 4.85856 22.3333 5.00028C22.3333 5.14202 22.2853 5.26074 22.1895 5.35647C22.0937 5.45219 21.9749 5.50005 21.8333 5.50005H18.4999V8.83338C18.4999 8.97505 18.452 9.0938 18.3561 9.18963C18.2602 9.28547 18.1414 9.33338 17.9997 9.33338C17.858 9.33338 17.7393 9.28547 17.6435 9.18963C17.5478 9.0938 17.5 8.97505 17.5 8.83338V5.50005Z",fill:"currentColor"})}),o.jsx("path",{d:"M1.33333 6C1.33333 7.47276 2.52724 8.66667 4 8.66667C5.47276 8.66667 6.66667 7.47276 6.66667 6C6.66667 4.52724 5.47276 3.33333 4 3.33333C2.52724 3.33333 1.33333 4.52724 1.33333 6ZM14.3333 19C14.3333 20.4728 15.5272 21.6667 17 21.6667C18.4728 21.6667 19.6667 20.4728 19.6667 19C19.6667 17.5272 18.4728 16.3333 17 16.3333C15.5272 16.3333 14.3333 17.5272 14.3333 19ZM3.64645 6.35355L16.6464 19.3536L17.3536 18.6464L4.35355 5.64645L3.64645 6.35355Z",fill:"currentColor"})]}),kr=({onCreateNew:t,onAddEdgeNode:r})=>o.jsxs(Mr,{children:[o.jsx(ut,{"data-testid":"add-schema-type",onClick:t,children:o.jsx(pt,{children:o.jsx(co,{})})}),o.jsx(ut,{"data-testid":"add-edge",onClick:r,children:o.jsx(pt,{children:o.jsx(Tr,{})})}),o.jsx(ut,{disabled:!0,children:o.jsx(pt,{children:o.jsx(ao,{})})})]}),Mr=_(v).attrs({align:"flex-start",direction:"column",justify:"flex-start"})`
  flex: 1;
  gap: 17px;
  padding: 16px 0 0 16px;
`,ut=_(v).attrs({align:"center",justify:"center",p:0})`
  position: relative;
  width: 40px;
  height: 40px;
  flex-direction: row;
  color: ${w.GRAY6};
  background: ${({disabled:t})=>t?w.disableBtn:w.BG1};
  cursor: pointer;
  border-radius: 6px;
  transition: ${({theme:t})=>t.transitions.create(["opacity","box-shadow","background-color"])};

  &:hover {
    color: ${({disabled:t})=>t?w.GRAY6:w.white};
  }

  &:active {
    color: ${w.white};
    background: ${({disabled:t})=>t?w.BG1:w.black};
  }

  &.root {
    border-radius: 50%;
    padding: 0;
    align-items: center;
    justify-content: center;
    border: none;
  }
`,pt=_(v)`
  justify-content: center;
  align-items: center;
  font-size: 24px;
`,$r=({Close:t})=>{const[r,n]=x.useState(""),[e,a]=x.useState(!1),[d,u]=x.useState(!1),[i,c]=x.useState(!1),[k,l]=x.useState({refId:"",edgeType:"",source:"",target:""}),[p,m]=x.useState(!1),[g,b]=x.useState("all"),[A,y,C,j]=so(h=>[h.schemas,h.links,h.setSchemas,h.setSchemaLinks]);x.useEffect(()=>{(async()=>{u(!0);try{const O=await At(),F=O.schemas.filter(I=>I.ref_id&&!I.is_deleted);C(F.length>0?F:O.schemas),j(O.edges.length>0?O.edges:[]),u(!1)}catch(O){console.error("Error fetching data:",O),u(!1)}})()},[C,j]);const R=h=>{if(A.some(F=>F.ref_id===h.ref_id))C(A.map(F=>F.ref_id===h.ref_id?{...h,children:[]}:F));else{C([...A,{...h,children:[]}]);const F=A.find(I=>h.parent===I.type);j([...y,{ref_id:`new-link-${y.length}`,edge_type:"CHILD_OF",source:h.ref_id||"new",target:(F==null?void 0:F.ref_id)||"new"}])}},E=async()=>{const h=await At();C(h.schemas.filter(O=>O.ref_id&&!O.is_deleted&&O.ref_id)),j(h.edges)},T=h=>{C(A.filter(O=>O.type!==h))},N=A.map(h=>({...h,children:A.filter(O=>O.parent===h.type).map(O=>O.ref_id||"")})),D=y.filter(h=>N.some(O=>O.ref_id===h.source)&&N.some(O=>O.ref_id===h.target)),B=A.find(h=>h.ref_id===r)||null;if(d)return o.jsx(v,{align:"center",basis:"100%",grow:1,justify:"center",shrink:1,children:o.jsx(ue,{color:w.white})});const V=g==="all"?D:D.filter(h=>h.edge_type==="CHILD_OF");return o.jsxs(o.Fragment,{children:[o.jsx(v,{ml:-20,mr:-20,mt:-20,children:o.jsx(wr,{activeTab:g,onClose:t,setActiveTab:b})}),o.jsxs(v,{align:"stretch",direction:"row",grow:1,children:[o.jsx(v,{mb:-20,ml:-20,children:B||e?o.jsx(Zt,{children:o.jsx(Kt,{children:o.jsx(Un,{graphLoading:p,onDelete:T,onSchemaCreate:R,onSchemaUpdate:E,selectedSchema:B,setGraphLoading:m,setIsCreateNew:a,setSelectedSchemaId:n})})}):null}),o.jsx(v,{children:i?o.jsx(Zt,{children:o.jsx(Kt,{children:o.jsx($n,{edgeData:k,setGraphLoading:m,setIsAddEdgeNode:c})})}):null}),o.jsx(v,{children:o.jsx(kr,{onAddEdgeNode:()=>{c(!0),a(!1),n(""),l({refId:"",edgeType:"",source:"",target:""})},onCreateNew:()=>{c(!1),a(!0),n("")}})}),o.jsx(Ar,{direction:"row",grow:1,children:o.jsx(_r,{children:p?o.jsx(v,{align:"center",basis:"100%",grow:1,justify:"center",shrink:1,children:o.jsx(ue,{color:w.white})}):o.jsx(gr,{links:V,onEdgeClick:(h,O,F,I)=>{l({refId:h,edgeType:O,source:F,target:I}),c(!0),a(!1),n("")},schemasWithPositions:N,selectedSchemaId:r,setIsAddEdgeNode:c,setSelectedSchemaId:n})})})]})]})},Ar=_(v)`
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
`,Zt=_(v)`
  width: 100%;
  max-width: 400px;
  background: ${w.BG1};
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
`,Kt=_.div`
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
`,_r=_(v)`
  flex: 1 1 100%;
`,Or=()=>{const{close:t}=no("blueprintGraph"),r=()=>{t()};return o.jsx(ko,{background:"black",id:"blueprintGraph",kind:"full",preventOutsideClose:!0,children:o.jsx($r,{Close:r})})},Jr=x.memo(Or);export{Jr as BlueprintModal};
