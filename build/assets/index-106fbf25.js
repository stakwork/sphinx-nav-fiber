import{r as m,b as Zt,g as Xt,s as $e,_ as U,u as Kt,ac as yo,a as qt,j as o,c as Qt,bo as He,bp as ft,d as Jt,e as ge,f as Ct,ad as wo,ae as jo,o as k,q as T,b9 as ht,T as se,F as v,aW as Ye,bq as vo,br as Je,bs as Co,b8 as eo,O as to,bt as Eo,aV as xe,a9 as dt,a0 as Et,Z as Pt,Y as Tt,X as Mt,V as Po,M as To,ao as At}from"./index-c7860142.js";import{B as Mo}from"./index-79bb9b8e.js";import{i as mt,B as Se,F as oo,k as xt,q as Ao,h as $o,I as So,r as ko,b as no}from"./index-51f81e90.js";import{A as Me,O as Oo,n as _o,a as $t,N as so}from"./index-1383004a.js";import{T as We}from"./index-95746b43.js";import{C as de}from"./ClipLoader-88ed70ea.js";import{D as ro}from"./DeleteIcon-948c185e.js";import{P as io}from"./PlusIcon-337fe0d2.js";import{p as pt,c as Io,g as No}from"./index-44e303ef.js";import{e as zo}from"./Stack-108b4352.js";import{S as Ro,F as Lo}from"./FormControlLabel-eeec532b.js";import{g as Bo,m as Do,u as ee,b as Ue,t as ut,T as ao,i as co,H as Vo,j as St,C as Fo,P as Go,k as Yo}from"./index-38a08520.js";import{Z as Wo,_ as Ho,E as Uo,V as N,$ as he,a0 as me,a1 as kt,P as Ve,a2 as Fe,a3 as Ot,a as q,a4 as Zo,G as Xo,C as Ko}from"./three.module-2ce81f73.js";import"./Popover-51ded183.js";import"./useSlotProps-31154d6c.js";import"./createSvgIcon-440aaad5.js";import"./TextareaAutosize-8e614518.js";import"./index.esm-b30c9415.js";import"./InfoIcon-414ea339.js";import"./Typography-9f2451d3.js";const qo=m.createContext(),_t=qo;function Qo(t){return Zt("MuiGrid",t)}const Jo=[0,1,2,3,4,5,6,7,8,9,10],en=["column-reverse","column","row-reverse","row"],tn=["nowrap","wrap-reverse","wrap"],Te=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12],on=Xt("MuiGrid",["root","container","item","zeroMinWidth",...Jo.map(t=>`spacing-xs-${t}`),...en.map(t=>`direction-xs-${t}`),...tn.map(t=>`wrap-xs-${t}`),...Te.map(t=>`grid-xs-${t}`),...Te.map(t=>`grid-sm-${t}`),...Te.map(t=>`grid-md-${t}`),...Te.map(t=>`grid-lg-${t}`),...Te.map(t=>`grid-xl-${t}`)]),Ae=on,nn=["className","columns","columnSpacing","component","container","direction","item","rowSpacing","spacing","wrap","zeroMinWidth"];function be(t){const n=parseFloat(t);return`${n}${String(t).replace(String(n),"")||"px"}`}function sn({theme:t,ownerState:n}){let s;return t.breakpoints.keys.reduce((e,i)=>{let l={};if(n[i]&&(s=n[i]),!s)return e;if(s===!0)l={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if(s==="auto")l={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{const d=He({values:n.columns,breakpoints:t.breakpoints.values}),c=typeof d=="object"?d[i]:d;if(c==null)return e;const a=`${Math.round(s/c*1e8)/1e6}%`;let w={};if(n.container&&n.item&&n.columnSpacing!==0){const p=t.spacing(n.columnSpacing);if(p!=="0px"){const h=`calc(${a} + ${be(p)})`;w={flexBasis:h,maxWidth:h}}}l=U({flexBasis:a,flexGrow:0,maxWidth:a},w)}return t.breakpoints.values[i]===0?Object.assign(e,l):e[t.breakpoints.up(i)]=l,e},{})}function rn({theme:t,ownerState:n}){const s=He({values:n.direction,breakpoints:t.breakpoints.values});return ft({theme:t},s,e=>{const i={flexDirection:e};return e.indexOf("column")===0&&(i[`& > .${Ae.item}`]={maxWidth:"none"}),i})}function lo({breakpoints:t,values:n}){let s="";Object.keys(n).forEach(i=>{s===""&&n[i]!==0&&(s=i)});const e=Object.keys(t).sort((i,l)=>t[i]-t[l]);return e.slice(0,e.indexOf(s))}function an({theme:t,ownerState:n}){const{container:s,rowSpacing:e}=n;let i={};if(s&&e!==0){const l=He({values:e,breakpoints:t.breakpoints.values});let d;typeof l=="object"&&(d=lo({breakpoints:t.breakpoints.values,values:l})),i=ft({theme:t},l,(c,a)=>{var w;const p=t.spacing(c);return p!=="0px"?{marginTop:`-${be(p)}`,[`& > .${Ae.item}`]:{paddingTop:be(p)}}:(w=d)!=null&&w.includes(a)?{}:{marginTop:0,[`& > .${Ae.item}`]:{paddingTop:0}}})}return i}function cn({theme:t,ownerState:n}){const{container:s,columnSpacing:e}=n;let i={};if(s&&e!==0){const l=He({values:e,breakpoints:t.breakpoints.values});let d;typeof l=="object"&&(d=lo({breakpoints:t.breakpoints.values,values:l})),i=ft({theme:t},l,(c,a)=>{var w;const p=t.spacing(c);return p!=="0px"?{width:`calc(100% + ${be(p)})`,marginLeft:`-${be(p)}`,[`& > .${Ae.item}`]:{paddingLeft:be(p)}}:(w=d)!=null&&w.includes(a)?{}:{width:"100%",marginLeft:0,[`& > .${Ae.item}`]:{paddingLeft:0}}})}return i}function ln(t,n,s={}){if(!t||t<=0)return[];if(typeof t=="string"&&!Number.isNaN(Number(t))||typeof t=="number")return[s[`spacing-xs-${String(t)}`]];const e=[];return n.forEach(i=>{const l=t[i];Number(l)>0&&e.push(s[`spacing-${i}-${String(l)}`])}),e}const dn=$e("div",{name:"MuiGrid",slot:"Root",overridesResolver:(t,n)=>{const{ownerState:s}=t,{container:e,direction:i,item:l,spacing:d,wrap:c,zeroMinWidth:a,breakpoints:w}=s;let p=[];e&&(p=ln(d,w,n));const h=[];return w.forEach(x=>{const g=s[x];g&&h.push(n[`grid-${x}-${String(g)}`])}),[n.root,e&&n.container,l&&n.item,a&&n.zeroMinWidth,...p,i!=="row"&&n[`direction-xs-${String(i)}`],c!=="wrap"&&n[`wrap-xs-${String(c)}`],...h]}})(({ownerState:t})=>U({boxSizing:"border-box"},t.container&&{display:"flex",flexWrap:"wrap",width:"100%"},t.item&&{margin:0},t.zeroMinWidth&&{minWidth:0},t.wrap!=="wrap"&&{flexWrap:t.wrap}),rn,an,cn,sn);function pn(t,n){if(!t||t<=0)return[];if(typeof t=="string"&&!Number.isNaN(Number(t))||typeof t=="number")return[`spacing-xs-${String(t)}`];const s=[];return n.forEach(e=>{const i=t[e];if(Number(i)>0){const l=`spacing-${e}-${String(i)}`;s.push(l)}}),s}const un=t=>{const{classes:n,container:s,direction:e,item:i,spacing:l,wrap:d,zeroMinWidth:c,breakpoints:a}=t;let w=[];s&&(w=pn(l,a));const p=[];a.forEach(x=>{const g=t[x];g&&p.push(`grid-${x}-${String(g)}`)});const h={root:["root",s&&"container",i&&"item",c&&"zeroMinWidth",...w,e!=="row"&&`direction-xs-${String(e)}`,d!=="wrap"&&`wrap-xs-${String(d)}`,...p]};return Jt(h,Qo,n)},fn=m.forwardRef(function(n,s){const e=Kt({props:n,name:"MuiGrid"}),{breakpoints:i}=yo(),l=zo(e),{className:d,columns:c,columnSpacing:a,component:w="div",container:p=!1,direction:h="row",item:x=!1,rowSpacing:g,spacing:b=0,wrap:$="wrap",zeroMinWidth:y=!1}=l,C=qt(l,nn),j=g||b,z=a||b,E=m.useContext(_t),P=p?c||12:E,I={},D=U({},C);i.keys.forEach(f=>{C[f]!=null&&(I[f]=C[f],delete D[f])});const R=U({},l,{columns:P,container:p,direction:h,item:x,rowSpacing:j,columnSpacing:z,wrap:$,zeroMinWidth:y,spacing:b},I,{breakpoints:i.keys}),V=un(R);return o.jsx(_t.Provider,{value:P,children:o.jsx(dn,U({ownerState:R,className:Qt(V.root,d),as:w,ref:s},D))})}),re=fn;function hn(t){return Zt("MuiSwitch",t)}const mn=Xt("MuiSwitch",["root","edgeStart","edgeEnd","switchBase","colorPrimary","colorSecondary","sizeSmall","sizeMedium","checked","disabled","input","thumb","track"]),H=mn,xn=["className","color","edge","size","sx"],gn=t=>{const{classes:n,edge:s,size:e,color:i,checked:l,disabled:d}=t,c={root:["root",s&&`edge${ge(s)}`,`size${ge(e)}`],switchBase:["switchBase",`color${ge(i)}`,l&&"checked",d&&"disabled"],thumb:["thumb"],track:["track"],input:["input"]},a=Jt(c,hn,n);return U({},n,a)},bn=$e("span",{name:"MuiSwitch",slot:"Root",overridesResolver:(t,n)=>{const{ownerState:s}=t;return[n.root,s.edge&&n[`edge${ge(s.edge)}`],n[`size${ge(s.size)}`]]}})(({ownerState:t})=>U({display:"inline-flex",width:34+12*2,height:14+12*2,overflow:"hidden",padding:12,boxSizing:"border-box",position:"relative",flexShrink:0,zIndex:0,verticalAlign:"middle","@media print":{colorAdjust:"exact"}},t.edge==="start"&&{marginLeft:-8},t.edge==="end"&&{marginRight:-8},t.size==="small"&&{width:40,height:24,padding:7,[`& .${H.thumb}`]:{width:16,height:16},[`& .${H.switchBase}`]:{padding:4,[`&.${H.checked}`]:{transform:"translateX(16px)"}}})),yn=$e(Ro,{name:"MuiSwitch",slot:"SwitchBase",overridesResolver:(t,n)=>{const{ownerState:s}=t;return[n.switchBase,{[`& .${H.input}`]:n.input},s.color!=="default"&&n[`color${ge(s.color)}`]]}})(({theme:t})=>({position:"absolute",top:0,left:0,zIndex:1,color:t.vars?t.vars.palette.Switch.defaultColor:`${t.palette.mode==="light"?t.palette.common.white:t.palette.grey[300]}`,transition:t.transitions.create(["left","transform"],{duration:t.transitions.duration.shortest}),[`&.${H.checked}`]:{transform:"translateX(20px)"},[`&.${H.disabled}`]:{color:t.vars?t.vars.palette.Switch.defaultDisabledColor:`${t.palette.mode==="light"?t.palette.grey[100]:t.palette.grey[600]}`},[`&.${H.checked} + .${H.track}`]:{opacity:.5},[`&.${H.disabled} + .${H.track}`]:{opacity:t.vars?t.vars.opacity.switchTrackDisabled:`${t.palette.mode==="light"?.12:.2}`},[`& .${H.input}`]:{left:"-100%",width:"300%"}}),({theme:t,ownerState:n})=>U({"&:hover":{backgroundColor:t.vars?`rgba(${t.vars.palette.action.activeChannel} / ${t.vars.palette.action.hoverOpacity})`:Ct(t.palette.action.active,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},n.color!=="default"&&{[`&.${H.checked}`]:{color:(t.vars||t).palette[n.color].main,"&:hover":{backgroundColor:t.vars?`rgba(${t.vars.palette[n.color].mainChannel} / ${t.vars.palette.action.hoverOpacity})`:Ct(t.palette[n.color].main,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${H.disabled}`]:{color:t.vars?t.vars.palette.Switch[`${n.color}DisabledColor`]:`${t.palette.mode==="light"?wo(t.palette[n.color].main,.62):jo(t.palette[n.color].main,.55)}`}},[`&.${H.checked} + .${H.track}`]:{backgroundColor:(t.vars||t).palette[n.color].main}})),wn=$e("span",{name:"MuiSwitch",slot:"Track",overridesResolver:(t,n)=>n.track})(({theme:t})=>({height:"100%",width:"100%",borderRadius:14/2,zIndex:-1,transition:t.transitions.create(["opacity","background-color"],{duration:t.transitions.duration.shortest}),backgroundColor:t.vars?t.vars.palette.common.onBackground:`${t.palette.mode==="light"?t.palette.common.black:t.palette.common.white}`,opacity:t.vars?t.vars.opacity.switchTrack:`${t.palette.mode==="light"?.38:.3}`})),jn=$e("span",{name:"MuiSwitch",slot:"Thumb",overridesResolver:(t,n)=>n.thumb})(({theme:t})=>({boxShadow:(t.vars||t).shadows[1],backgroundColor:"currentColor",width:20,height:20,borderRadius:"50%"})),vn=m.forwardRef(function(n,s){const e=Kt({props:n,name:"MuiSwitch"}),{className:i,color:l="primary",edge:d=!1,size:c="medium",sx:a}=e,w=qt(e,xn),p=U({},e,{color:l,edge:d,size:c}),h=gn(p),x=o.jsx(jn,{className:h.thumb,ownerState:p});return o.jsxs(bn,{className:Qt(h.root,i),sx:a,ownerState:p,children:[o.jsx(yn,U({type:"checkbox",icon:x,checkedIcon:x,ref:s,ownerState:p},w,{classes:U({},h,{root:h.switchBase})})),o.jsx(wn,{className:h.track,ownerState:p})]})}),po=vn,Cn={type:"",parent:""},It=({onSelect:t,dataTestId:n,edgeLink:s,hideSelectAll:e,placeholder:i})=>{const l=mt({mode:"onChange",defaultValues:Cn}),{watch:d,setValue:c}=l,[a,w]=m.useState([]),[p,h]=m.useState(!1),x=y=>{c("parent",(y==null?void 0:y.value)||""),t(y==null?void 0:y.value)},g=y=>y.charAt(0).toUpperCase()+y.slice(1);m.useEffect(()=>{(async()=>{h(!0);try{const j=(await ht()).schemas.filter(E=>!E.is_deleted&&E.type).map(E=>(E==null?void 0:E.type)==="thing"?{label:"No Parent",value:E.type}:{label:g(E.type),value:E.type});w(e?j:[{label:"Select all",value:"all"},...j]),s&&c("parent",s)}catch(C){console.warn(C)}finally{h(!1)}})()},[s,c,e]);const b=d("parent"),$=()=>{const y=a==null?void 0:a.find(C=>C.value===b);if(y)return y;if(s)return{label:s,value:s}};return o.jsx(En,{dataTestId:n,disabled:!!s,isLoading:p,onSelect:x,options:a||Oo,placeholder:i,selectedValue:$()})},En=k(Me)`
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
`,Pn=({selectedType:t,setSelectedFromNode:n,setSelectedToNode:s,edgeLinkData:e,selectedFromNode:i,selectedToNode:l})=>{const d=l==="all",c=i==="all";return o.jsxs(v,{mt:8,children:[o.jsxs(v,{mb:25,children:[o.jsx(v,{mb:5,children:o.jsx(et,{children:"Source"})}),o.jsx(It,{dataTestId:"from_node",edgeLink:e==null?void 0:e.source,hideSelectAll:d,onSelect:n,placeholder:"Source Name"})]}),o.jsxs(v,{mb:10,children:[o.jsx(v,{mb:5,children:o.jsx(et,{children:"Edge Name"})}),o.jsx(v,{mb:12,children:o.jsx(We,{id:"cy-item-name",maxLength:250,name:"type",placeholder:"Enter Edge Name",rules:{...Ye,pattern:{message:"No leading whitespace allowed",value:_o}},value:t})})]}),o.jsxs(v,{mb:25,children:[o.jsx(v,{mb:5,children:o.jsx(et,{children:"Destination"})}),o.jsx(It,{dataTestId:"to_node",edgeLink:e==null?void 0:e.target,hideSelectAll:c,onSelect:s,placeholder:"Select Destination"})]})]})},et=k(se)`
  font-family: Barlow;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0.01em;
  text-align: left;
  margin-left: 1px;
  color: ${T.mainBottomIcons};
`,Tn=({onCancel:t,edgeLinkData:n,setGraphLoading:s})=>{var I,D,R;const e=mt({mode:"onChange"}),{setValue:i,getValues:l}=e,[d,c]=m.useState(!1),[a,w]=m.useState(!1),[p,h]=m.useState(""),[x,g]=m.useState(""),[b,$]=m.useState(""),y=e.watch("type");m.useEffect(()=>{i("type",n==null?void 0:n.edgeType)},[n==null?void 0:n.edgeType,i]),m.useEffect(()=>{h(y)},[y]);const C=e.handleSubmit(async V=>{c(!0),s(!0);const f={source:x,target:b,edge_type:V.type},O={ref_id:n==null?void 0:n.refId,edge_type:V.type};try{if(n!=null&&n.refId)await vo(O);else if(b&&x)if(x==="all"||b==="all"){const _=(await ht()).schemas.filter(G=>!G.is_deleted&&G.type).map(G=>G.type);x==="all"?await Promise.all(_.map(G=>Je({...f,source:G}))):b==="all"&&await Promise.all(_.map(G=>Je({...f,target:G})))}else await Je(f)}catch(F){console.warn("API Error:",F)}finally{c(!1),s(!1),g(""),$(""),t()}}),j=(D=(I=l())==null?void 0:I.type)==null?void 0:D.trim(),z=j&&((R=n==null?void 0:n.edgeType)==null?void 0:R.trim())!==j,E=n!=null&&n.refId?d||!z:d||!b.trim()||!x.trim()||!p.trim(),P=async()=>{w(!0),s(!0);try{n!=null&&n.refId&&await Co(n==null?void 0:n.refId)}catch(V){console.warn("API Error:",V)}finally{w(!1),s(!1),g(""),$(""),t()}};return o.jsx(oo,{...e,children:o.jsxs("form",{id:"add-type-form",onSubmit:C,children:[o.jsx(Pn,{edgeLinkData:n,selectedFromNode:x,selectedToNode:b,selectedType:p,setSelectedFromNode:g,setSelectedToNode:$}),o.jsxs(v,{direction:"row",justify:"space-between",mt:20,children:[(n==null?void 0:n.refId)&&o.jsx(v,{direction:"column",children:o.jsxs(An,{color:"secondary",disabled:a,onClick:P,size:"large",style:{marginRight:20},variant:"contained",children:["Delete",a&&o.jsxs(Nt,{children:[o.jsx(de,{color:T.lightGray,size:12})," "]})]})}),o.jsxs(Mn,{color:"secondary",disabled:E,onClick:C,size:"large",variant:"contained",children:["Confirm",d&&o.jsxs(Nt,{children:[o.jsx(de,{color:T.lightGray,size:12})," "]})]})]})]})})},Mn=k(Se)`
  width: 293px !important;
  margin: 0 0 10px auto !important;
`,Nt=k.span`
  margin-top: 2px;
`,An=k(Se)`
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
`,$n=({setIsAddEdgeNode:t,edgeData:n,setGraphLoading:s})=>{const e=()=>{t(!1)};return o.jsxs(v,{children:[o.jsxs(kn,{align:"center",direction:"row",justify:"space-between",children:[o.jsx(_n,{"data-testid":"edge-modal-title",children:n!=null&&n.refId?"Edit Edge":"Add Edge"}),o.jsx(Sn,{"data-testid":"close-sidebar-sub-view",onClick:e,children:o.jsx(xt,{})})]}),o.jsx(On,{}),o.jsx(Tn,{edgeLinkData:n,onCancel:e,setGraphLoading:s})]})},Sn=k(v)`
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
`,kn=k(v)`
  margin-bottom: 16px;
`,On=k.div`
  border-bottom: 1px solid ${T.black};
  width: calc(100% + 32px);
  margin: 0 -16px 16px;
  opacity: 0.3;
`,_n=k(se)`
  font-family: Barlow;
  font-size: 22px;
  font-weight: 600;
  line-height: 16px;
  letter-spacing: 0.01em;
  text-align: left;
  margin-left: 2px;
  color: ${T.white};
`,In=/^[a-z0-9_]+$/,Nn=({parentParam:t,onDelete:n})=>{const[s,e]=m.useState(!1),[i,l]=m.useState([]),{fields:d,append:c,replace:a,remove:w}=Ao({name:"attributes"}),{setValue:p,watch:h}=$o();return m.useEffect(()=>{const x=async()=>{try{let g=[{required:!1,type:"string",key:""}];if(t!==so.value.toLowerCase()){e(!0);const b=await eo(t);b.attributes&&typeof b.attributes=="object"?g=pt(b.attributes):g=pt(b)}g=g.filter(b=>b.key!=="node_key"),a(g),l(g)}catch(g){console.warn(g)}finally{e(!1)}};i.length===0&&x()},[t,p,a,i.length]),o.jsxs(o.Fragment,{children:[s?o.jsx(v,{align:"center",children:o.jsx(de,{color:T.SECONDARY_BLUE,size:"30"})}):o.jsx(zn,{py:8,children:o.jsx(re,{container:!0,spacing:2,children:d.map((x,g)=>{const b=h(`attributes[${g}].type`),$=h(`attributes[${g}].required`),y=x.isNew||!1,C=["name"].includes(h(`attributes[${g}].key`));return o.jsxs(m.Fragment,{children:[o.jsx(re,{item:!0,xs:5,children:o.jsx(We,{autoComplete:"off",className:"text-input",dataTestId:`cy-item-name-${g}`,disabled:!y,id:`cy-item-name-${g}`,maxLength:50,name:`attributes.${g}.key`,placeholder:"Enter value",rules:{...Ye,pattern:{message:"Please avoid special characters, spaces and uppercase",value:In}}})}),o.jsx(re,{item:!0,xs:4,children:o.jsx(Me,{dataTestId:`cy-item-select-${g}`,disabled:C,onSelect:j=>p(`attributes[${g}].type`,j==null?void 0:j.value),options:$t,selectedValue:$t.find(j=>j.value===b)})}),o.jsxs(re,{item:!0,xs:3,children:[o.jsx(po,{checked:$,"data-testid":`cy-item-${g}`,disabled:C,name:`attributes.${g}.required`,onChange:j=>p(`attributes[${g}].required`,j.target.checked),size:"small"}),!C&&o.jsx(So,{onClick:()=>{w(g),x.key!==void 0&&n&&n(x.key)},children:o.jsx(ro,{})})]})]},x.id)})})}),o.jsx(v,{align:"flex-start",py:12,children:o.jsx(Se,{"data-testid":"add-attribute-btn",onClick:()=>c({key:"",type:"string",required:!0,isNew:!0}),size:"medium",startIcon:o.jsx(io,{}),variant:"contained",children:"Add Attribute"})})]})},zn=k(v)`
  overflow-y: auto;
  width: calc(100% + 20px);
  max-height: calc(80vh - 300px);
`,Rn=({parent:t,onDelete:n})=>{const s=t;return o.jsxs(v,{children:[o.jsx(v,{direction:"row",mb:10,children:o.jsxs(re,{container:!0,spacing:2,children:[o.jsx(re,{item:!0,xs:5,children:o.jsx(tt,{style:{marginRight:180},children:"Attributes"})}),o.jsx(re,{item:!0,xs:4,children:o.jsx(tt,{style:{marginRight:130},children:"Type"})}),o.jsx(re,{item:!0,xs:3,children:o.jsx(tt,{children:"Required"})})]})}),s&&o.jsx(Nn,{onDelete:n,parentParam:s},s)]})},tt=k(se)`
  font-size: 15px;
  color: gray;
`,Ln=({setMediaOptions:t})=>{const[n,s]=m.useState({videoAudio:!1,image:!1,sourceLink:!1}),e=i=>{s(l=>{const d={...l,[i]:!l[i]};return t(d),d})};return o.jsxs(Bn,{direction:"column",children:[o.jsx(rt,{}),o.jsx(ot,{control:o.jsx(st,{checked:n.videoAudio,onChange:()=>e("videoAudio")}),label:o.jsx(nt,{active:n.videoAudio,children:"Video / Audio"}),labelPlacement:"start"}),o.jsx(rt,{}),o.jsx(ot,{control:o.jsx(st,{checked:n.image,onChange:()=>e("image")}),label:o.jsx(nt,{active:n.image,children:"Image"}),labelPlacement:"start"}),o.jsx(rt,{}),o.jsx(ot,{control:o.jsx(st,{checked:n.sourceLink,onChange:()=>e("sourceLink")}),label:o.jsx(nt,{active:n.sourceLink,children:"Source Link"}),labelPlacement:"start"})]})},Bn=k(v)`
  direction: column;
`,ot=k(Lo)`
  justify-content: space-between;
  margin-left: 2px !important;
  margin-top: 8px;
  margin-bottom: 8px;
`,nt=k.span`
  color: ${({active:t})=>t?T.white:T.GRAY7};
  font-family: Barlow;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: 0.01em;
  text-align: left;
`,st=k(t=>o.jsx(po,{...t}))`
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
`,rt=k.div`
  border: 1px solid ${T.BG2};
  width: 100%;
  opacity: 0.5;
`,zt={type:"",parent:""},Dn=(t,n)=>t.length!==n.length?!0:t.some((s,e)=>{const i=n[e];return s.required!==i.required||s.type!==i.type||s.key!==i.key}),Vn=async(t,n=!1,s,e)=>{try{const{attributes:i,selectedIndex:l,...d}=t,c={...Io(i),...s.reduce((p,h)=>({...p,[h]:"delete"}),{})},a={...d,attributes:c,index:l};e.videoAudio&&(a.media_url=""),e.image&&(a.image_url=""),e.sourceLink&&(a.source_link="");let w;if(n?w=await dt.put(`/schema/${t.ref_id}`,JSON.stringify(a),{}):w=await dt.post("/schema",JSON.stringify({...a,node_key:"name"}),{}),w.status!=="success")throw new Error("error");return w==null?void 0:w.ref_id}catch(i){let l=xe;if(i.status===400){const d=await i.json();l=d.errorCode||(d==null?void 0:d.status)||xe}else i instanceof Error&&(l=i.message);throw new Error(l)}},Fn=t=>t.charAt(0).toUpperCase()+t.slice(1),Rt=async(t,n)=>{try{const l=((await ht()).schemas||[]).filter(d=>!d.is_deleted&&d.type&&(!n||n(d))).map(d=>d.type==="thing"?{label:"No Parent",value:d.type}:{label:Fn(d.type),value:d.type});t(l)}catch(s){console.warn(s)}},Gn=({graphLoading:t,onSchemaCreate:n,selectedSchema:s,onDelete:e,setSelectedSchemaId:i,setGraphLoading:l,setIsCreateNew:d,onSchemaUpdate:c})=>{const{close:a,visible:w}=to("addType"),p=mt({mode:"onChange",defaultValues:s?{type:s.type,parent:s.parent}:zt}),{watch:h,setValue:x,reset:g,getValues:b}=p,[$,y]=m.useState(!1),[C,j]=m.useState(!1),[z,E]=m.useState(!1),[P,I]=m.useState(null),[D,R]=m.useState(!1),[V,f]=m.useState(null),[O,F]=m.useState(""),[_,G]=m.useState(null),[Z,J]=m.useState([]),[ie,K]=m.useState([]),[ye,ke]=m.useState(!0),[Oe,pe]=m.useState({videoAudio:!1,image:!1,sourceLink:!1});m.useEffect(()=>()=>{g()},[w,g]);const _e=()=>{d(!1),i("")};m.useEffect(()=>{s||(E(!0),Rt(I).finally(()=>E(!1)))},[s]),m.useEffect(()=>{(()=>{g(zt),K([{required:!1,type:"string",key:""}]),J([]),pe({videoAudio:!1,image:!1,sourceLink:!1})})(),s&&(x("type",s.type),x("parent",s.parent),s.type!==so.value.toLowerCase()&&eo(s.type).then(B=>{const X=(B?pt(B):[{required:!1,type:"string",key:""}]).filter(le=>le.key!=="node_key");K(X)}),Rt(f,B=>B.type!==s.type))},[s,x,g]);const ae=h("parent");h("type");const Ie=S=>Array.isArray(S)&&S.every(B=>typeof B=="object"&&"key"in B),we=h("attributes"),je=m.useMemo(()=>Ie(we)?we.filter(S=>S.key.trim()!==""):[],[we]),Ze=()=>{a()},Xe=S=>{J(B=>[...B,S])},Ke=async()=>{if(s!=null&&s.type){j(!0),l(!0);try{await dt.delete(`/schema/${s.ref_id}`),e(s.type),a()}catch(S){let B=xe;if((S==null?void 0:S.status)===400){const W=await S.json();B=W.errorCode||(W==null?void 0:W.status)||xe}else S instanceof Error&&(B=S.message);G(B)}finally{j(!1),l(!1),d(!1)}}},ve=p.handleSubmit(async S=>{if(!ae){R(!0);return}y(!0);try{if(s&&S.type!==(s==null?void 0:s.type)||s&&b().parent!==(s==null?void 0:s.parent)){const W=b().parent??(s==null?void 0:s.parent),{selectedIndex:X}=b();l(!0),await Eo(s==null?void 0:s.ref_id,{type:S.type,parent:W,attributes:{index:X}}),await c()}const B=await Vn({...S,...s?{ref_id:s==null?void 0:s.ref_id}:{}},!!s,Z,Oe);n({type:S.type,parent:ae||"",ref_id:(s==null?void 0:s.ref_id)||B||"new"}),Ze()}catch(B){let W=xe;if((B==null?void 0:B.status)===400){const X=await B.json();W=X.errorCode||(X==null?void 0:X.status)||xe}else B instanceof Error&&(W=B.message);F(W)}finally{y(!1),l(!1),d(!1)}});m.useEffect(()=>{const S=p.watch(B=>{var Re,Le,Ce,ue,fe;const W=Dn(je,ie),X=((Re=B.type)==null?void 0:Re.trim())!==((Le=s==null?void 0:s.type)==null?void 0:Le.trim())||((Ce=B.parent)==null?void 0:Ce.trim())!==((ue=s==null?void 0:s.parent)==null?void 0:ue.trim())||W,le=!!((fe=B.type)!=null&&fe.trim());ke(s?$||!X||!le||D:$||D||!le)});return()=>S.unsubscribe()},[p,je,ie,s,$,D]);const Ne=()=>P==null?void 0:P.find(S=>S.value===ae),ze=m.useMemo(()=>{if(!s)return;const S=V==null?void 0:V.find(B=>B.value===s.parent);if(S)return S;if(s.parent)return{label:s.parent,value:s.parent}},[s,V]);return o.jsxs(v,{children:[o.jsxs(Zn,{children:[o.jsx(Xn,{children:s?"Edit Type":"Create Type"}),o.jsx(Un,{"data-testid":"close-sidebar-sub-view",onClick:_e,children:o.jsx(xt,{})})]}),o.jsx(Wn,{}),o.jsx(v,{children:o.jsx(oo,{...p,children:o.jsxs("form",{id:"add-type-form",onSubmit:ve,children:[o.jsx(v,{children:s?o.jsxs(o.Fragment,{children:[o.jsxs(v,{mb:12,children:[o.jsx(v,{mb:12,children:o.jsx(se,{children:"Name"})}),o.jsx(v,{mb:12,children:o.jsx(We,{dataTestId:"cy-item-name",defaultValue:s==null?void 0:s.type,id:"cy-item-name",maxLength:250,name:"type",placeholder:"Enter type name",rules:{...Ye},value:ae})})]}),o.jsxs(v,{mb:12,children:[o.jsx(v,{mb:12,children:o.jsx(se,{children:"Parent"})}),o.jsx(Me,{isLoading:z||t,onSelect:S=>{x("parent",(S==null?void 0:S.value)||""),R(!1)},options:V||[],selectedValue:ze}),O&&o.jsx(it,{children:O})]})]}):o.jsxs(o.Fragment,{children:[o.jsxs(v,{mb:12,children:[o.jsx(v,{mb:12,children:o.jsx(se,{children:"Select Parent"})}),o.jsx(Me,{isLoading:z,onSelect:S=>{x("parent",(S==null?void 0:S.value)||""),R(!1)},options:P,selectedValue:Ne()}),D&&o.jsx(it,{children:"A parent type must be selected"})]}),o.jsxs(v,{children:[o.jsx(v,{mb:12,children:o.jsx(se,{children:"Type name"})}),o.jsx(v,{mb:12,children:o.jsx(We,{id:"cy-item-name",maxLength:250,name:"type",placeholder:"Enter type name",rules:{...Ye},value:ae})})]})]})}),o.jsx(Rn,{onDelete:Xe,parent:s?s.type:ae}),o.jsx(Ln,{setMediaOptions:pe}),o.jsxs(v,{children:[o.jsx(Bt,{}),o.jsx(v,{mb:12,mt:12,children:o.jsx(se,{children:"Indexes"})}),o.jsx(re,{item:!0,mb:2,width:"70%",children:o.jsx(Me,{onSelect:S=>x("selectedIndex",S==null?void 0:S.value),options:je.map(S=>({label:S.key,value:S.key}))})}),o.jsx(Bt,{})]}),o.jsxs(v,{direction:"row",justify:"space-between",mt:20,children:[s&&o.jsxs(v,{direction:"column",children:[o.jsxs(Hn,{color:"secondary",disabled:C,onClick:Ke,size:"large",style:{marginRight:20},variant:"contained",children:["Delete",C&&o.jsxs(Lt,{children:[o.jsx(de,{color:T.lightGray,size:12})," "]})]}),_&&o.jsx(it,{children:_})]}),o.jsxs(Yn,{color:"secondary",disabled:ye,onClick:ve,size:"large",variant:"contained",children:["Confirm",$&&o.jsxs(Lt,{children:[o.jsx(de,{color:T.lightGray,size:12})," "]})]})]})]})})})]})},Yn=k(Se)`
  width: 100% !important;
  margin: 0 auto !important;
`,Wn=k.div`
  border-bottom: 1px solid ${T.black};
  width: calc(100% + 32px);
  margin: 0 -16px 16px;
  opacity: 0.3;
`,Lt=k.span`
  margin-top: 2px;
`,Hn=k(Se)`
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
`,Un=k(v)`
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
`,it=k(v)`
  font-size: 13px;
  font-family: Barlow;
  color: #ff8f80;
  line-height: 0.2px;
  margin-top: 12px;
  padding-top: 20px;
`,Bt=k.div`
  border: 1px solid ${T.BG2};
  width: calc(100% + 32px);
  opacity: 0.5;
  margin-left: -16px;
`,Zn=k(v)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 16px;
`,Xn=k(se)`
  font-family: Barlow;
  font-size: 22px;
  font-weight: 600;
  line-height: 16px;
  letter-spacing: 0.01em;
  text-align: left;
  color: ${T.white};
`;var Kn=Object.defineProperty,qn=(t,n,s)=>n in t?Kn(t,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[n]=s,M=(t,n,s)=>(qn(t,typeof n!="symbol"?n+"":n,s),s);const Ge=new Wo,Dt=new Ho,Qn=Math.cos(70*(Math.PI/180)),Vt=(t,n)=>(t%n+n)%n;let Jn=class extends Uo{constructor(n,s){super(),M(this,"object"),M(this,"domElement"),M(this,"enabled",!0),M(this,"target",new N),M(this,"minDistance",0),M(this,"maxDistance",1/0),M(this,"minZoom",0),M(this,"maxZoom",1/0),M(this,"minPolarAngle",0),M(this,"maxPolarAngle",Math.PI),M(this,"minAzimuthAngle",-1/0),M(this,"maxAzimuthAngle",1/0),M(this,"enableDamping",!1),M(this,"dampingFactor",.05),M(this,"enableZoom",!0),M(this,"zoomSpeed",1),M(this,"enableRotate",!0),M(this,"rotateSpeed",1),M(this,"enablePan",!0),M(this,"panSpeed",1),M(this,"screenSpacePanning",!0),M(this,"keyPanSpeed",7),M(this,"zoomToCursor",!1),M(this,"autoRotate",!1),M(this,"autoRotateSpeed",2),M(this,"reverseOrbit",!1),M(this,"reverseHorizontalOrbit",!1),M(this,"reverseVerticalOrbit",!1),M(this,"keys",{LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"}),M(this,"mouseButtons",{LEFT:he.ROTATE,MIDDLE:he.DOLLY,RIGHT:he.PAN}),M(this,"touches",{ONE:me.ROTATE,TWO:me.DOLLY_PAN}),M(this,"target0"),M(this,"position0"),M(this,"zoom0"),M(this,"_domElementKeyEvents",null),M(this,"getPolarAngle"),M(this,"getAzimuthalAngle"),M(this,"setPolarAngle"),M(this,"setAzimuthalAngle"),M(this,"getDistance"),M(this,"listenToKeyEvents"),M(this,"stopListenToKeyEvents"),M(this,"saveState"),M(this,"reset"),M(this,"update"),M(this,"connect"),M(this,"dispose"),this.object=n,this.domElement=s,this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this.getPolarAngle=()=>p.phi,this.getAzimuthalAngle=()=>p.theta,this.setPolarAngle=r=>{let u=Vt(r,2*Math.PI),A=p.phi;A<0&&(A+=2*Math.PI),u<0&&(u+=2*Math.PI);let L=Math.abs(u-A);2*Math.PI-L<L&&(u<A?u+=2*Math.PI:A+=2*Math.PI),h.phi=u-A,e.update()},this.setAzimuthalAngle=r=>{let u=Vt(r,2*Math.PI),A=p.theta;A<0&&(A+=2*Math.PI),u<0&&(u+=2*Math.PI);let L=Math.abs(u-A);2*Math.PI-L<L&&(u<A?u+=2*Math.PI:A+=2*Math.PI),h.theta=u-A,e.update()},this.getDistance=()=>e.object.position.distanceTo(e.target),this.listenToKeyEvents=r=>{r.addEventListener("keydown",qe),this._domElementKeyEvents=r},this.stopListenToKeyEvents=()=>{this._domElementKeyEvents.removeEventListener("keydown",qe),this._domElementKeyEvents=null},this.saveState=()=>{e.target0.copy(e.target),e.position0.copy(e.object.position),e.zoom0=e.object.zoom},this.reset=()=>{e.target.copy(e.target0),e.object.position.copy(e.position0),e.object.zoom=e.zoom0,e.object.updateProjectionMatrix(),e.dispatchEvent(i),e.update(),a=c.NONE},this.update=(()=>{const r=new N,u=new N(0,1,0),A=new kt().setFromUnitVectors(n.up,u),L=A.clone().invert(),Y=new N,te=new kt,ce=2*Math.PI;return function(){const vt=e.object.position;A.setFromUnitVectors(n.up,u),L.copy(A).invert(),r.copy(vt).sub(e.target),r.applyQuaternion(A),p.setFromVector3(r),e.autoRotate&&a===c.NONE&&G(F()),e.enableDamping?(p.theta+=h.theta*e.dampingFactor,p.phi+=h.phi*e.dampingFactor):(p.theta+=h.theta,p.phi+=h.phi);let oe=e.minAzimuthAngle,ne=e.maxAzimuthAngle;isFinite(oe)&&isFinite(ne)&&(oe<-Math.PI?oe+=ce:oe>Math.PI&&(oe-=ce),ne<-Math.PI?ne+=ce:ne>Math.PI&&(ne-=ce),oe<=ne?p.theta=Math.max(oe,Math.min(ne,p.theta)):p.theta=p.theta>(oe+ne)/2?Math.max(oe,p.theta):Math.min(ne,p.theta)),p.phi=Math.max(e.minPolarAngle,Math.min(e.maxPolarAngle,p.phi)),p.makeSafe(),e.enableDamping===!0?e.target.addScaledVector(g,e.dampingFactor):e.target.add(g),e.zoomToCursor&&V||e.object.isOrthographicCamera?p.radius=pe(p.radius):p.radius=pe(p.radius*x),r.setFromSpherical(p),r.applyQuaternion(L),vt.copy(e.target).add(r),e.object.matrixAutoUpdate||e.object.updateMatrix(),e.object.lookAt(e.target),e.enableDamping===!0?(h.theta*=1-e.dampingFactor,h.phi*=1-e.dampingFactor,g.multiplyScalar(1-e.dampingFactor)):(h.set(0,0,0),g.set(0,0,0));let Be=!1;if(e.zoomToCursor&&V){let Ee=null;if(e.object instanceof Ve&&e.object.isPerspectiveCamera){const Pe=r.length();Ee=pe(Pe*x);const De=Pe-Ee;e.object.position.addScaledVector(D,De),e.object.updateMatrixWorld()}else if(e.object.isOrthographicCamera){const Pe=new N(R.x,R.y,0);Pe.unproject(e.object),e.object.zoom=Math.max(e.minZoom,Math.min(e.maxZoom,e.object.zoom/x)),e.object.updateProjectionMatrix(),Be=!0;const De=new N(R.x,R.y,0);De.unproject(e.object),e.object.position.sub(De).add(Pe),e.object.updateMatrixWorld(),Ee=r.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),e.zoomToCursor=!1;Ee!==null&&(e.screenSpacePanning?e.target.set(0,0,-1).transformDirection(e.object.matrix).multiplyScalar(Ee).add(e.object.position):(Ge.origin.copy(e.object.position),Ge.direction.set(0,0,-1).transformDirection(e.object.matrix),Math.abs(e.object.up.dot(Ge.direction))<Qn?n.lookAt(e.target):(Dt.setFromNormalAndCoplanarPoint(e.object.up,e.target),Ge.intersectPlane(Dt,e.target))))}else e.object instanceof Fe&&e.object.isOrthographicCamera&&(e.object.zoom=Math.max(e.minZoom,Math.min(e.maxZoom,e.object.zoom/x)),e.object.updateProjectionMatrix(),Be=!0);return x=1,V=!1,Be||Y.distanceToSquared(e.object.position)>w||8*(1-te.dot(e.object.quaternion))>w?(e.dispatchEvent(i),Y.copy(e.object.position),te.copy(e.object.quaternion),Be=!1,!0):!1}})(),this.connect=r=>{r===document&&console.error('THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.'),e.domElement=r,e.domElement.style.touchAction="none",e.domElement.addEventListener("contextmenu",yt),e.domElement.addEventListener("pointerdown",Ce),e.domElement.addEventListener("pointercancel",gt),e.domElement.addEventListener("wheel",bt)},this.dispose=()=>{var r,u,A,L,Y,te;(r=e.domElement)==null||r.removeEventListener("contextmenu",yt),(u=e.domElement)==null||u.removeEventListener("pointerdown",Ce),(A=e.domElement)==null||A.removeEventListener("pointercancel",gt),(L=e.domElement)==null||L.removeEventListener("wheel",bt),(Y=e.domElement)==null||Y.ownerDocument.removeEventListener("pointermove",ue),(te=e.domElement)==null||te.ownerDocument.removeEventListener("pointerup",fe),e._domElementKeyEvents!==null&&e._domElementKeyEvents.removeEventListener("keydown",qe)};const e=this,i={type:"change"},l={type:"start"},d={type:"end"},c={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let a=c.NONE;const w=1e-6,p=new Ot,h=new Ot;let x=1;const g=new N,b=new q,$=new q,y=new q,C=new q,j=new q,z=new q,E=new q,P=new q,I=new q,D=new N,R=new q;let V=!1;const f=[],O={};function F(){return 2*Math.PI/60/60*e.autoRotateSpeed}function _(){return Math.pow(.95,e.zoomSpeed)}function G(r){e.reverseOrbit||e.reverseHorizontalOrbit?h.theta+=r:h.theta-=r}function Z(r){e.reverseOrbit||e.reverseVerticalOrbit?h.phi+=r:h.phi-=r}const J=(()=>{const r=new N;return function(A,L){r.setFromMatrixColumn(L,0),r.multiplyScalar(-A),g.add(r)}})(),ie=(()=>{const r=new N;return function(A,L){e.screenSpacePanning===!0?r.setFromMatrixColumn(L,1):(r.setFromMatrixColumn(L,0),r.crossVectors(e.object.up,r)),r.multiplyScalar(A),g.add(r)}})(),K=(()=>{const r=new N;return function(A,L){const Y=e.domElement;if(Y&&e.object instanceof Ve&&e.object.isPerspectiveCamera){const te=e.object.position;r.copy(te).sub(e.target);let ce=r.length();ce*=Math.tan(e.object.fov/2*Math.PI/180),J(2*A*ce/Y.clientHeight,e.object.matrix),ie(2*L*ce/Y.clientHeight,e.object.matrix)}else Y&&e.object instanceof Fe&&e.object.isOrthographicCamera?(J(A*(e.object.right-e.object.left)/e.object.zoom/Y.clientWidth,e.object.matrix),ie(L*(e.object.top-e.object.bottom)/e.object.zoom/Y.clientHeight,e.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),e.enablePan=!1)}})();function ye(r){e.object instanceof Ve&&e.object.isPerspectiveCamera||e.object instanceof Fe&&e.object.isOrthographicCamera?x/=r:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),e.enableZoom=!1)}function ke(r){e.object instanceof Ve&&e.object.isPerspectiveCamera||e.object instanceof Fe&&e.object.isOrthographicCamera?x*=r:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),e.enableZoom=!1)}function Oe(r){if(!e.zoomToCursor||!e.domElement)return;V=!0;const u=e.domElement.getBoundingClientRect(),A=r.clientX-u.left,L=r.clientY-u.top,Y=u.width,te=u.height;R.x=A/Y*2-1,R.y=-(L/te)*2+1,D.set(R.x,R.y,1).unproject(e.object).sub(e.object.position).normalize()}function pe(r){return Math.max(e.minDistance,Math.min(e.maxDistance,r))}function _e(r){b.set(r.clientX,r.clientY)}function ae(r){Oe(r),E.set(r.clientX,r.clientY)}function Ie(r){C.set(r.clientX,r.clientY)}function we(r){$.set(r.clientX,r.clientY),y.subVectors($,b).multiplyScalar(e.rotateSpeed);const u=e.domElement;u&&(G(2*Math.PI*y.x/u.clientHeight),Z(2*Math.PI*y.y/u.clientHeight)),b.copy($),e.update()}function je(r){P.set(r.clientX,r.clientY),I.subVectors(P,E),I.y>0?ye(_()):I.y<0&&ke(_()),E.copy(P),e.update()}function Ze(r){j.set(r.clientX,r.clientY),z.subVectors(j,C).multiplyScalar(e.panSpeed),K(z.x,z.y),C.copy(j),e.update()}function Xe(r){Oe(r),r.deltaY<0?ke(_()):r.deltaY>0&&ye(_()),e.update()}function Ke(r){let u=!1;switch(r.code){case e.keys.UP:K(0,e.keyPanSpeed),u=!0;break;case e.keys.BOTTOM:K(0,-e.keyPanSpeed),u=!0;break;case e.keys.LEFT:K(e.keyPanSpeed,0),u=!0;break;case e.keys.RIGHT:K(-e.keyPanSpeed,0),u=!0;break}u&&(r.preventDefault(),e.update())}function ve(){if(f.length==1)b.set(f[0].pageX,f[0].pageY);else{const r=.5*(f[0].pageX+f[1].pageX),u=.5*(f[0].pageY+f[1].pageY);b.set(r,u)}}function Ne(){if(f.length==1)C.set(f[0].pageX,f[0].pageY);else{const r=.5*(f[0].pageX+f[1].pageX),u=.5*(f[0].pageY+f[1].pageY);C.set(r,u)}}function ze(){const r=f[0].pageX-f[1].pageX,u=f[0].pageY-f[1].pageY,A=Math.sqrt(r*r+u*u);E.set(0,A)}function S(){e.enableZoom&&ze(),e.enablePan&&Ne()}function B(){e.enableZoom&&ze(),e.enableRotate&&ve()}function W(r){if(f.length==1)$.set(r.pageX,r.pageY);else{const A=Qe(r),L=.5*(r.pageX+A.x),Y=.5*(r.pageY+A.y);$.set(L,Y)}y.subVectors($,b).multiplyScalar(e.rotateSpeed);const u=e.domElement;u&&(G(2*Math.PI*y.x/u.clientHeight),Z(2*Math.PI*y.y/u.clientHeight)),b.copy($)}function X(r){if(f.length==1)j.set(r.pageX,r.pageY);else{const u=Qe(r),A=.5*(r.pageX+u.x),L=.5*(r.pageY+u.y);j.set(A,L)}z.subVectors(j,C).multiplyScalar(e.panSpeed),K(z.x,z.y),C.copy(j)}function le(r){const u=Qe(r),A=r.pageX-u.x,L=r.pageY-u.y,Y=Math.sqrt(A*A+L*L);P.set(0,Y),I.set(0,Math.pow(P.y/E.y,e.zoomSpeed)),ye(I.y),E.copy(P)}function Re(r){e.enableZoom&&le(r),e.enablePan&&X(r)}function Le(r){e.enableZoom&&le(r),e.enableRotate&&W(r)}function Ce(r){var u,A;e.enabled!==!1&&(f.length===0&&((u=e.domElement)==null||u.ownerDocument.addEventListener("pointermove",ue),(A=e.domElement)==null||A.ownerDocument.addEventListener("pointerup",fe)),bo(r),r.pointerType==="touch"?xo(r):ho(r))}function ue(r){e.enabled!==!1&&(r.pointerType==="touch"?go(r):mo(r))}function fe(r){var u,A,L;wt(r),f.length===0&&((u=e.domElement)==null||u.releasePointerCapture(r.pointerId),(A=e.domElement)==null||A.ownerDocument.removeEventListener("pointermove",ue),(L=e.domElement)==null||L.ownerDocument.removeEventListener("pointerup",fe)),e.dispatchEvent(d),a=c.NONE}function gt(r){wt(r)}function ho(r){let u;switch(r.button){case 0:u=e.mouseButtons.LEFT;break;case 1:u=e.mouseButtons.MIDDLE;break;case 2:u=e.mouseButtons.RIGHT;break;default:u=-1}switch(u){case he.DOLLY:if(e.enableZoom===!1)return;ae(r),a=c.DOLLY;break;case he.ROTATE:if(r.ctrlKey||r.metaKey||r.shiftKey){if(e.enablePan===!1)return;Ie(r),a=c.PAN}else{if(e.enableRotate===!1)return;_e(r),a=c.ROTATE}break;case he.PAN:if(r.ctrlKey||r.metaKey||r.shiftKey){if(e.enableRotate===!1)return;_e(r),a=c.ROTATE}else{if(e.enablePan===!1)return;Ie(r),a=c.PAN}break;default:a=c.NONE}a!==c.NONE&&e.dispatchEvent(l)}function mo(r){if(e.enabled!==!1)switch(a){case c.ROTATE:if(e.enableRotate===!1)return;we(r);break;case c.DOLLY:if(e.enableZoom===!1)return;je(r);break;case c.PAN:if(e.enablePan===!1)return;Ze(r);break}}function bt(r){e.enabled===!1||e.enableZoom===!1||a!==c.NONE&&a!==c.ROTATE||(r.preventDefault(),e.dispatchEvent(l),Xe(r),e.dispatchEvent(d))}function qe(r){e.enabled===!1||e.enablePan===!1||Ke(r)}function xo(r){switch(jt(r),f.length){case 1:switch(e.touches.ONE){case me.ROTATE:if(e.enableRotate===!1)return;ve(),a=c.TOUCH_ROTATE;break;case me.PAN:if(e.enablePan===!1)return;Ne(),a=c.TOUCH_PAN;break;default:a=c.NONE}break;case 2:switch(e.touches.TWO){case me.DOLLY_PAN:if(e.enableZoom===!1&&e.enablePan===!1)return;S(),a=c.TOUCH_DOLLY_PAN;break;case me.DOLLY_ROTATE:if(e.enableZoom===!1&&e.enableRotate===!1)return;B(),a=c.TOUCH_DOLLY_ROTATE;break;default:a=c.NONE}break;default:a=c.NONE}a!==c.NONE&&e.dispatchEvent(l)}function go(r){switch(jt(r),a){case c.TOUCH_ROTATE:if(e.enableRotate===!1)return;W(r),e.update();break;case c.TOUCH_PAN:if(e.enablePan===!1)return;X(r),e.update();break;case c.TOUCH_DOLLY_PAN:if(e.enableZoom===!1&&e.enablePan===!1)return;Re(r),e.update();break;case c.TOUCH_DOLLY_ROTATE:if(e.enableZoom===!1&&e.enableRotate===!1)return;Le(r),e.update();break;default:a=c.NONE}}function yt(r){e.enabled!==!1&&r.preventDefault()}function bo(r){f.push(r)}function wt(r){delete O[r.pointerId];for(let u=0;u<f.length;u++)if(f[u].pointerId==r.pointerId){f.splice(u,1);return}}function jt(r){let u=O[r.pointerId];u===void 0&&(u=new q,O[r.pointerId]=u),u.set(r.pageX,r.pageY)}function Qe(r){const u=r.pointerId===f[0].pointerId?f[1]:f[0];return O[u.pointerId]}s!==void 0&&this.connect(s),this.update()}};const es=new N,Ft=m.forwardRef(function({start:n=[0,0,0],end:s=[0,0,0],mid:e,segments:i=20,...l},d){const c=m.useRef(null),[a]=m.useState(()=>new Zo(void 0,void 0,void 0)),w=m.useCallback((h,x,g,b=20)=>(h instanceof N?a.v0.copy(h):a.v0.set(...h),x instanceof N?a.v2.copy(x):a.v2.set(...x),g instanceof N?a.v1.copy(g):a.v1.copy(a.v0.clone().add(a.v2.clone().sub(a.v0)).add(es.set(0,a.v0.y-a.v2.y,0))),a.getPoints(b)),[]);m.useLayoutEffect(()=>{c.current.setPoints=(h,x,g)=>{const b=w(h,x,g);c.current.geometry&&c.current.geometry.setPositions(b.map($=>$.toArray()).flat())}},[]);const p=m.useMemo(()=>w(n,s,e,i),[n,s,e,i]);return m.createElement(Bo,U({ref:Do([c,d]),points:p},l))}),ts=m.forwardRef(({makeDefault:t,camera:n,regress:s,domElement:e,enableDamping:i=!0,onChange:l,onStart:d,onEnd:c,...a},w)=>{const p=ee(P=>P.invalidate),h=ee(P=>P.camera),x=ee(P=>P.gl),g=ee(P=>P.events),b=ee(P=>P.setEvents),$=ee(P=>P.set),y=ee(P=>P.get),C=ee(P=>P.performance),j=n||h,z=e||g.connected||x.domElement,E=m.useMemo(()=>new Jn(j),[j]);return Ue(()=>{E.enabled&&E.update()},-1),m.useEffect(()=>(E.connect(z),()=>void E.dispose()),[z,s,E,p]),m.useEffect(()=>{const P=R=>{p(),s&&C.regress(),l&&l(R)},I=R=>{d&&d(R)},D=R=>{c&&c(R)};return E.addEventListener("change",P),E.addEventListener("start",I),E.addEventListener("end",D),()=>{E.removeEventListener("start",I),E.removeEventListener("end",D),E.removeEventListener("change",P)}},[l,d,c,E,p,b]),m.useEffect(()=>{if(t){const P=y().controls;return $({controls:E}),()=>$({controls:P})}},[t,E]),m.createElement("primitive",U({ref:w,object:E,enableDamping:i},a))});function os(t){const n=t+"Geometry";return m.forwardRef(({args:s,children:e,...i},l)=>m.createElement("mesh",U({ref:l},i),m.createElement(n,{attach:"geometry",args:s}),e))}const ns=os("circle"),Q=10,ss=2,rs=2,Gt=10,is=10,Yt=(t,n,s)=>{const l=new N().subVectors(n,t).normalize().multiplyScalar(s);return new N().addVectors(t,l)},as=(t,n,s,e)=>{const i=new N().lerpVectors(t,n,.5),l=new N().subVectors(n,t).normalize(),d=new N(-l.y,l.x,l.z).normalize(),c=(s-e/2)*is;return new N().addVectors(i,d.multiplyScalar(c))},uo=({links:t,nodes:n,onEdgeClick:s})=>{const e=m.useRef(null),{camera:i}=ee(),l=new N,d=new N,c=new N,a=new N,w=new N,p=new N,h=new N,x=new N;Ue(()=>{e.current&&n&&e.current.children.forEach((b,$)=>{var V,f,O,F;const y=t[$];if(!y)return;const C=n.find(_=>_.ref_id===y.target),j=n.find(_=>_.ref_id===y.source);l.set((j==null?void 0:j.x)||0,(j==null?void 0:j.y)||0,(j==null?void 0:j.z)||0),d.set((C==null?void 0:C.x)||0,(C==null?void 0:C.y)||0,(C==null?void 0:C.z)||0);const z=b.children[0],E=b.children[1],P=b.children[2],I=b.children[3],D=t.filter(_=>_.source===y.source&&_.target===y.target||_.source===y.target&&_.target===y.source).length,R=t.filter((_,G)=>G<$&&(_.source===y.source&&_.target===y.target||_.source===y.target&&_.target===y.source)).length;if((j==null?void 0:j.ref_id)===(C==null?void 0:C.ref_id)){const[_,G,Z]=No(l);(V=z.setPoints)==null||V.call(z,l,Z,_),(f=E.setPoints)==null||f.call(E,Z,d,_),P.position.set(Z.x,Z.y,G.z),P.lookAt(_),P.rotateX(-Math.PI/2),I.position.set(Z.x,Z.y,G.z),I.lookAt(i.position)}else{x.copy(Yt(l,d,Q)),h.copy(Yt(d,l,Q+.5)),c.lerpVectors(x,h,.5),D>1?c.copy(as(x,h,R,D)):c.lerpVectors(x,h,.5);const _=30;a.subVectors(h,x).normalize().multiplyScalar(_/2),w.subVectors(c,a),p.addVectors(c,a);const G=new N().addVectors(x,w).multiplyScalar(.5),Z=new N().addVectors(p,h).multiplyScalar(.5);(O=z.setPoints)==null||O.call(z,x,w,G),(F=E.setPoints)==null||F.call(E,p,h,Z),P.position.set(h.x,h.y,h.z),P.lookAt(x),P.rotateX(-Math.PI/2),I.position.set(c.x,c.y,c.z),I.lookAt(i.position);let J=Math.atan2(h.y-x.y,h.x-x.x);(J>Math.PI/2||J<-Math.PI/2)&&(J+=Math.PI),I.rotation.set(0,0,J);const ie=x.distanceTo(h),K=ie<_?2:4;ie<_?I.text=ut(y.edge_type,Gt):I.text=y.edge_type,I.fontSize=K}})});const g=(b,$,y,C)=>{if(b==="CHILD_OF"||$==="string"||y==="string")return;const j=n==null?void 0:n.find(I=>I.ref_id===$),z=n==null?void 0:n.find(I=>I.ref_id===y),E=(j==null?void 0:j.type)||"",P=(z==null?void 0:z.type)||"";s(C,b,E,P)};return o.jsx("group",{ref:e,children:t.map(b=>o.jsxs("group",{children:[o.jsx(Ft,{color:"white",end:[0,0,0],lineWidth:1,start:[0,0,0]}),o.jsx(Ft,{color:"white",end:[0,0,0],lineWidth:1,start:[0,0,0]}),o.jsxs("mesh",{position:new N(0,0,0),children:[o.jsx("coneGeometry",{args:[ss,rs,32]}),o.jsx("meshBasicMaterial",{color:"white"})]}),o.jsx(ao,{anchorX:"center",anchorY:"middle",color:"white",...co,lineHeight:1,maxWidth:20,onClick:()=>g(b.edge_type,b.source,b.target,b.ref_id),rotation:[0,0,0],textAlign:"center",children:ut(b.edge_type,Gt)})]},b.ref_id))})};uo.displayName="Lines";const cs=["#ff13c9","#5af0ff","#3233ff","#c2f0c2","#ff6666","#99ccff","#ffb3b3"],ls=k.div`
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
`,ds=k(Vo)`
  position: absolute;
`;new Xo(2,2,2);const fo=m.memo(({node:t,setSelectedNode:n,onSimulationUpdate:s,isSelected:e})=>{var $;const i=m.useRef(null),[l,d]=m.useState(!1);console.log(e);const{size:c,camera:a}=ee(),w=ko(y=>{if(t.type==="Thing")return;const{xy:[C,j],down:z,dragging:E,first:P,elapsedTime:I}=y;if(!(!E||P||I<100)&&z&&i.current){s();const D=(C-c.left)/window.innerWidth*c.width,R=(j-c.top)/window.innerHeight*c.height,O=new N(D/c.width*2-1,-R/c.height*2+1,0).unproject(a).multiply(new N(1,1,0)).clone();t.fx=O.x,t.fy=O.y}});Ue(()=>{i.current&&i.current.position.set(t.x||0,t.y||0,0)});const p=cs[($=t==null?void 0:t.children)==null?void 0:$.length]||"red",h=y=>{y.stopPropagation(),t.type!=="Thing"&&n()},x=ut(t.type||"",Q),g=()=>{d(!0)},b=()=>{d(!1)};return o.jsxs("mesh",{ref:i,onClick:h,...w(),onPointerOut:b,onPointerOver:g,position:new N(t.x,t.y,0),children:[o.jsx(ns,{args:[Q,30,20],children:o.jsx("meshStandardMaterial",{attach:"material",color:p})}),o.jsx(ao,{...co,clipRect:[-Q,-Q,Q,Q],color:"#000",fontSize:2,maxWidth:Q*2,name:t.type,textAlign:"left",children:x}),l&&o.jsx(ds,{position:[0,5,0],zIndexRange:[100,0],children:o.jsx(ls,{children:t.type})})]})});fo.displayName="Node";const ps=({simulation:t,setSelectedSchemaId:n,selectedId:s,setIsAddEdgeNode:e})=>{const[i]=no(d=>[d.schemas]),l=()=>{t&&(t.alpha(.05),t.restart())};return o.jsx(o.Fragment,{children:i.map((d,c)=>{const a=t.nodes()[c];return a?o.jsx(fo,{isSelected:a.ref_id===s,node:a,onSimulationUpdate:l,setSelectedNode:()=>{e(!1),n(a.ref_id)}},a.ref_id):null})})},us=({schemasWithPositions:t,filteredLinks:n,setSelectedSchemaId:s,selectedSchemaId:e,setIsAddEdgeNode:i,onEdgeClick:l})=>{const[d,c]=m.useState(null),a=St(t),w=St(n);return m.useEffect(()=>{if(!t.length||!n.length)return;const p=structuredClone(t),h=structuredClone(n);if(d){a&&a.length!==t.length&&w&&w.length!==n.length&&(d.nodes(p).force("link",Et(h).id(g=>g.ref_id).distance(100)).force("charge",Pt()).force("center",Tt()).force("collide",Mt(Q+5)).alpha(.5).restart(),c({...d}));return}const x=Po(p).force("link",Et(h).id(g=>g.ref_id).distance(120)).force("charge",Pt().strength(-100)).force("center",Tt()).force("collide",Mt(Q+5));c(x)},[t,d,n,a,w]),Ue(()=>{}),d?o.jsxs(o.Fragment,{children:[o.jsx(uo,{links:n,nodes:d.nodes(),onEdgeClick:l}),o.jsx(ps,{selectedId:e,setIsAddEdgeNode:i,setSelectedSchemaId:s,simulation:d})]}):null},at=new Ko(0),fs=({selectedSchemaId:t,links:n,schemasWithPositions:s,setSelectedSchemaId:e,setIsAddEdgeNode:i,onEdgeClick:l})=>o.jsxs(Fo,{camera:{zoom:1,position:[0,0,200]},id:"schema-canvas",linear:!0,orthographic:!0,children:[o.jsx("color",{args:[at.r,at.g,at.b],attach:"background"}),To&&o.jsx(Go,{position:"right-bottom"}),o.jsx(hs,{}),o.jsx(Yo,{}),o.jsx(us,{filteredLinks:n,onEdgeClick:l,schemasWithPositions:s,selectedSchemaId:t,setIsAddEdgeNode:i,setSelectedSchemaId:e})]}),hs=()=>{m.useEffect(()=>{const s=i=>{["Meta","Alt"].includes(i.key)&&(document.body.style.cursor="grab")},e=i=>{["Meta","Alt"].includes(i.key)&&(document.body.style.cursor="default")};return window.addEventListener("keydown",s,!1),window.addEventListener("keyup",e,!1),()=>{window.removeEventListener("keydown",s,!1),window.removeEventListener("keyup",e,!1)}},[]);const t=()=>{document.body.style.cursor="grabbing"},n=()=>{document.body.style.cursor="default"};return o.jsx(ts,{dampingFactor:1,enableDamping:!0,enablePan:!0,enableRotate:!1,enableZoom:!0,maxZoom:20,minZoom:1,onEnd:n,onStart:t,zoomSpeed:1.5,zoomToCursor:!0})},ms=t=>o.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 18 19",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:o.jsx("path",{d:"M9.5002 0.270145C10.3742 0.270145 11.1128 0.571885 11.7161 1.17537C12.3193 1.77868 12.6209 2.51732 12.6209 3.39129C12.6209 4.17273 12.3716 4.85117 11.873 5.42662C11.3744 6.00189 10.7483 6.34792 9.99474 6.46469L9.99474 9.0052L13.8388 9.0052C14.2785 9.0052 14.6549 9.16172 14.9679 9.47476C15.2809 9.78779 15.4375 10.1642 15.4375 10.6039L15.4375 12.564L17.0171 12.564C17.2435 12.564 17.4334 12.6405 17.5866 12.7936C17.7396 12.9468 17.8162 13.1366 17.8162 13.3631L17.8162 17.5042C17.8162 17.7389 17.7396 17.9321 17.5866 18.0836C17.4334 18.2352 17.2435 18.311 17.0171 18.311L12.8759 18.311C12.6412 18.311 12.4481 18.2345 12.2965 18.0814C12.1449 17.9282 12.0692 17.7384 12.0692 17.5119L12.0692 13.3707C12.0692 13.136 12.1457 12.9429 12.2987 12.7913C12.452 12.6398 12.6418 12.564 12.8682 12.564L14.4479 12.564L14.4479 10.6039C14.4479 10.4262 14.3908 10.2803 14.2767 10.166C14.1624 10.0518 14.0164 9.99478 13.8388 9.99478L5.16112 9.99478C4.98349 9.99478 4.83753 10.0518 4.72323 10.166C4.6091 10.2803 4.55203 10.4262 4.55203 10.6039L4.55203 12.6115C5.3056 12.7283 5.93168 13.0743 6.43026 13.6496C6.92885 14.225 7.17814 14.9034 7.17814 15.6849C7.17814 16.5587 6.87648 17.2973 6.27317 17.9008C5.66969 18.5041 4.93096 18.8058 4.05699 18.8058C3.18303 18.8058 2.44439 18.5041 1.84107 17.9008C1.23792 17.2973 0.936342 16.5587 0.936343 15.6849C0.936343 14.9034 1.18564 14.225 1.68422 13.6496C2.18281 13.0743 2.80888 12.7283 3.56245 12.6115L3.56245 10.6039C3.56245 10.1642 3.71897 9.78779 4.03201 9.47476C4.34504 9.16172 4.72142 9.0052 5.16112 9.0052L9.00516 9.0052L9.00516 6.46469C8.25159 6.34792 7.62552 6.00189 7.12693 5.42662C6.62835 4.85117 6.37905 4.17273 6.37905 3.39129C6.37905 2.51732 6.68071 1.77868 7.28403 1.17537C7.88751 0.571885 8.62623 0.270145 9.5002 0.270145Z",fill:"currentColor"})}),xs=({onClose:t,activeTab:n,setActiveTab:s})=>o.jsxs(gs,{children:[o.jsxs(bs,{children:[o.jsx(ms,{}),o.jsx(ys,{children:"Blueprint"})]}),o.jsxs(ws,{children:[o.jsx(Wt,{active:n==="all",onClick:()=>s("all"),children:"Show All"}),o.jsx(Wt,{active:n==="parent",onClick:()=>s("parent"),children:"Parent Only"})]}),o.jsx(js,{onClick:t,children:o.jsx(xt,{})})]}),gs=k(v)`
  background-color: ${T.BG1};
  height: 64px;
  width: 100%;
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
  justify-content: space-between;
  padding: 17px;
  border-bottom: 1px solid ${T.black};
`,bs=k.div`
  display: flex;
  align-items: center;
  font-size: 22px;
  font-weight: 400;
  font-family: Barlow;

  svg {
    color: ${T.GRAY6};
    margin-left: 6px;
  }
`,ys=k.span`
  color: ${T.white};
  font-weight: 400;
  font-family: Barlow;
  margin-left: 15px;
  font-size: 22px;
`,ws=k.div`
  display: flex;
  position: absolute;
  top: 16px;
  right: 60px;
  background-color: ${T.divider2};
  border-radius: 6px;
  padding: 2px;
`,Wt=k.div`
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
`,js=k.div`
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
`,vs=t=>o.jsxs("svg",{width:"1em",height:"1em",viewBox:"0 0 23 22",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:[o.jsx("mask",{id:"mask0_8954_27793",maskUnits:"userSpaceOnUse",x:"10",y:"-3",width:"16",height:"16",children:o.jsx("rect",{x:"10",y:"-3",width:"1em",height:"1em",fill:"currentColor"})}),o.jsx("g",{mask:"url(#mask0_8954_27793)",children:o.jsx("path",{d:"M17.5 5.50005H14.1666C14.025 5.50005 13.9062 5.45212 13.8104 5.35625C13.7145 5.26037 13.6666 5.14157 13.6666 4.99985C13.6666 4.85812 13.7145 4.73939 13.8104 4.64367C13.9062 4.54794 14.025 4.50008 14.1666 4.50008H17.5V1.16675C17.5 1.02508 17.5479 0.906331 17.6438 0.810498C17.7396 0.714665 17.8584 0.666748 18.0002 0.666748C18.1419 0.666748 18.2606 0.714665 18.3563 0.810498C18.4521 0.906331 18.4999 1.02508 18.4999 1.16675V4.50008H21.8333C21.9749 4.50008 22.0937 4.54802 22.1895 4.64388C22.2853 4.73976 22.3333 4.85856 22.3333 5.00028C22.3333 5.14202 22.2853 5.26074 22.1895 5.35647C22.0937 5.45219 21.9749 5.50005 21.8333 5.50005H18.4999V8.83338C18.4999 8.97505 18.452 9.0938 18.3561 9.18963C18.2602 9.28547 18.1414 9.33338 17.9997 9.33338C17.858 9.33338 17.7393 9.28547 17.6435 9.18963C17.5478 9.0938 17.5 8.97505 17.5 8.83338V5.50005Z",fill:"currentColor"})}),o.jsx("path",{d:"M1.33333 6C1.33333 7.47276 2.52724 8.66667 4 8.66667C5.47276 8.66667 6.66667 7.47276 6.66667 6C6.66667 4.52724 5.47276 3.33333 4 3.33333C2.52724 3.33333 1.33333 4.52724 1.33333 6ZM14.3333 19C14.3333 20.4728 15.5272 21.6667 17 21.6667C18.4728 21.6667 19.6667 20.4728 19.6667 19C19.6667 17.5272 18.4728 16.3333 17 16.3333C15.5272 16.3333 14.3333 17.5272 14.3333 19ZM3.64645 6.35355L16.6464 19.3536L17.3536 18.6464L4.35355 5.64645L3.64645 6.35355Z",fill:"currentColor"})]}),Cs=({onCreateNew:t,onAddEdgeNode:n})=>o.jsxs(Es,{children:[o.jsx(ct,{"data-testid":"add-schema-type",onClick:t,children:o.jsx(lt,{children:o.jsx(io,{})})}),o.jsx(ct,{"data-testid":"add-edge",onClick:n,children:o.jsx(lt,{children:o.jsx(vs,{})})}),o.jsx(ct,{disabled:!0,children:o.jsx(lt,{children:o.jsx(ro,{})})})]}),Es=k(v).attrs({align:"flex-start",direction:"column",justify:"flex-start"})`
  flex: 1;
  gap: 17px;
  padding: 16px 0 0 16px;
`,ct=k(v).attrs({align:"center",justify:"center",p:0})`
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
`,lt=k(v)`
  justify-content: center;
  align-items: center;
  font-size: 24px;
`,Ps=({Close:t})=>{const[n,s]=m.useState(""),[e,i]=m.useState(!1),[l,d]=m.useState(!1),[c,a]=m.useState(!1),[w,p]=m.useState({refId:"",edgeType:"",source:"",target:""}),[h,x]=m.useState(!1),[g,b]=m.useState("all"),[$,y,C,j]=no(f=>[f.schemas,f.links,f.setSchemas,f.setSchemaLinks]);m.useEffect(()=>{(async()=>{d(!0);try{const O=await At(),F=O.schemas.filter(_=>_.ref_id&&!_.is_deleted);C(F.length>0?F:O.schemas),j(O.edges.length>0?O.edges:[]),d(!1)}catch(O){console.error("Error fetching data:",O),d(!1)}})()},[C,j]);const z=f=>{if($.some(F=>F.ref_id===f.ref_id))C($.map(F=>F.ref_id===f.ref_id?{...f,children:[]}:F));else{C([...$,{...f,children:[]}]);const F=$.find(_=>f.parent===_.type);j([...y,{ref_id:`new-link-${y.length}`,edge_type:"CHILD_OF",source:f.ref_id||"new",target:(F==null?void 0:F.ref_id)||"new"}])}},E=async()=>{const f=await At();C(f.schemas.filter(O=>O.ref_id&&!O.is_deleted&&O.ref_id)),j(f.edges)},P=f=>{C($.filter(O=>O.type!==f))},I=$.map(f=>({...f,children:$.filter(O=>O.parent===f.type).map(O=>O.ref_id||"")})),D=y.filter(f=>I.some(O=>O.ref_id===f.source)&&I.some(O=>O.ref_id===f.target)),R=$.find(f=>f.ref_id===n)||null;if(l)return o.jsx(v,{align:"center",basis:"100%",grow:1,justify:"center",shrink:1,children:o.jsx(de,{color:T.white})});const V=g==="all"?D:D.filter(f=>f.edge_type==="CHILD_OF");return o.jsxs(o.Fragment,{children:[o.jsx(v,{ml:-20,mr:-20,mt:-20,children:o.jsx(xs,{activeTab:g,onClose:t,setActiveTab:b})}),o.jsxs(v,{align:"stretch",direction:"row",grow:1,children:[o.jsx(v,{mb:-20,ml:-20,children:R||e?o.jsx(Ht,{children:o.jsx(Ut,{children:o.jsx(Gn,{graphLoading:h,onDelete:P,onSchemaCreate:z,onSchemaUpdate:E,selectedSchema:R,setGraphLoading:x,setIsCreateNew:i,setSelectedSchemaId:s})})}):null}),o.jsx(v,{children:c?o.jsx(Ht,{children:o.jsx(Ut,{children:o.jsx($n,{edgeData:w,setGraphLoading:x,setIsAddEdgeNode:a})})}):null}),o.jsx(v,{children:o.jsx(Cs,{onAddEdgeNode:()=>{a(!0),i(!1),s(""),p({refId:"",edgeType:"",source:"",target:""})},onCreateNew:()=>{a(!1),i(!0),s("")}})}),o.jsx(Ts,{direction:"row",grow:1,children:o.jsx(Ms,{children:h?o.jsx(v,{align:"center",basis:"100%",grow:1,justify:"center",shrink:1,children:o.jsx(de,{color:T.white})}):o.jsx(fs,{links:V,onEdgeClick:(f,O,F,_)=>{p({refId:f,edgeType:O,source:F,target:_}),a(!0),i(!1),s("")},schemasWithPositions:I,selectedSchemaId:n,setIsAddEdgeNode:a,setSelectedSchemaId:s})})})]})]})},Ts=k(v)`
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
`,Ht=k(v)`
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
`,Ut=k.div`
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
`,Ms=k(v)`
  flex: 1 1 100%;
`,As=()=>{const{close:t}=to("blueprintGraph"),n=()=>{t()};return o.jsx(Mo,{background:"black",id:"blueprintGraph",kind:"full",preventOutsideClose:!0,children:o.jsx(Ps,{Close:n})})},qs=m.memo(As);export{qs as BlueprintModal};
