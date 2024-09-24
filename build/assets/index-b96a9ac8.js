import{r as x,b as Kt,g as qt,s as Oe,_ as U,u as Qt,ac as yo,a as Jt,j as o,c as eo,bp as Ue,bq as xt,d as to,e as be,f as Pt,ad as wo,ae as jo,o as O,q as M,ba as gt,T as se,F as v,aW as We,br as vo,bs as ot,bt as Co,b9 as oo,O as no,bu as Eo,aV as ge,a9 as ft,a0 as Tt,Z as Mt,Y as At,X as kt,V as Po,M as To,ao as $t}from"./index-4d468204.js";import{B as Mo}from"./index-f4b0a4bd.js";import{i as bt,B as _e,F as ro,k as yt,q as Ao,h as ko,I as $o,r as Oo,b as so}from"./index-866976ad.js";import{O as _o,n as So,a as Ot,N as io}from"./constants-a6b58f4d.js";import{T as He}from"./index-62eaae02.js";import{A as ke}from"./index-0c516da9.js";import{C as ue}from"./ClipLoader-ee900975.js";import{D as ao}from"./DeleteIcon-4e174355.js";import{P as co}from"./PlusIcon-fc40d8a9.js";import{p as ht,c as Io,g as zo}from"./index-44e303ef.js";import{e as No}from"./Stack-2a5ee51e.js";import{S as Ro,F as Lo}from"./FormControlLabel-1e5a5af3.js";import{g as Bo,m as Vo,u as te,b as Ze,t as mt,T as lo,i as uo,H as Do,j as _t,C as Fo,P as Go,k as Yo}from"./index-a69d9305.js";import{Z as Wo,_ as Ho,E as Uo,V as N,$ as me,a0 as xe,a1 as St,P as Fe,a2 as Ge,a3 as It,a as Q,a4 as Zo,G as Xo,C as Ko}from"./three.module-2ce81f73.js";import"./index.esm-c44d3bf1.js";import"./InfoIcon-2dc4b884.js";import"./Popover-91f6a20d.js";import"./useSlotProps-bd068323.js";import"./createSvgIcon-4daeca66.js";import"./TextareaAutosize-51573234.js";import"./Typography-3ffbea36.js";const qo=x.createContext(),zt=qo;function Qo(t){return Kt("MuiGrid",t)}const Jo=[0,1,2,3,4,5,6,7,8,9,10],en=["column-reverse","column","row-reverse","row"],tn=["nowrap","wrap-reverse","wrap"],Ae=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12],on=qt("MuiGrid",["root","container","item","zeroMinWidth",...Jo.map(t=>`spacing-xs-${t}`),...en.map(t=>`direction-xs-${t}`),...tn.map(t=>`wrap-xs-${t}`),...Ae.map(t=>`grid-xs-${t}`),...Ae.map(t=>`grid-sm-${t}`),...Ae.map(t=>`grid-md-${t}`),...Ae.map(t=>`grid-lg-${t}`),...Ae.map(t=>`grid-xl-${t}`)]),$e=on,nn=["className","columns","columnSpacing","component","container","direction","item","rowSpacing","spacing","wrap","zeroMinWidth"];function ye(t){const r=parseFloat(t);return`${r}${String(t).replace(String(r),"")||"px"}`}function rn({theme:t,ownerState:r}){let n;return t.breakpoints.keys.reduce((e,i)=>{let l={};if(r[i]&&(n=r[i]),!n)return e;if(n===!0)l={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if(n==="auto")l={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{const u=Ue({values:r.columns,breakpoints:t.breakpoints.values}),a=typeof u=="object"?u[i]:u;if(a==null)return e;const c=`${Math.round(n/a*1e8)/1e6}%`;let w={};if(r.container&&r.item&&r.columnSpacing!==0){const d=t.spacing(r.columnSpacing);if(d!=="0px"){const h=`calc(${c} + ${ye(d)})`;w={flexBasis:h,maxWidth:h}}}l=U({flexBasis:c,flexGrow:0,maxWidth:c},w)}return t.breakpoints.values[i]===0?Object.assign(e,l):e[t.breakpoints.up(i)]=l,e},{})}function sn({theme:t,ownerState:r}){const n=Ue({values:r.direction,breakpoints:t.breakpoints.values});return xt({theme:t},n,e=>{const i={flexDirection:e};return e.indexOf("column")===0&&(i[`& > .${$e.item}`]={maxWidth:"none"}),i})}function po({breakpoints:t,values:r}){let n="";Object.keys(r).forEach(i=>{n===""&&r[i]!==0&&(n=i)});const e=Object.keys(t).sort((i,l)=>t[i]-t[l]);return e.slice(0,e.indexOf(n))}function an({theme:t,ownerState:r}){const{container:n,rowSpacing:e}=r;let i={};if(n&&e!==0){const l=Ue({values:e,breakpoints:t.breakpoints.values});let u;typeof l=="object"&&(u=po({breakpoints:t.breakpoints.values,values:l})),i=xt({theme:t},l,(a,c)=>{var w;const d=t.spacing(a);return d!=="0px"?{marginTop:`-${ye(d)}`,[`& > .${$e.item}`]:{paddingTop:ye(d)}}:(w=u)!=null&&w.includes(c)?{}:{marginTop:0,[`& > .${$e.item}`]:{paddingTop:0}}})}return i}function cn({theme:t,ownerState:r}){const{container:n,columnSpacing:e}=r;let i={};if(n&&e!==0){const l=Ue({values:e,breakpoints:t.breakpoints.values});let u;typeof l=="object"&&(u=po({breakpoints:t.breakpoints.values,values:l})),i=xt({theme:t},l,(a,c)=>{var w;const d=t.spacing(a);return d!=="0px"?{width:`calc(100% + ${ye(d)})`,marginLeft:`-${ye(d)}`,[`& > .${$e.item}`]:{paddingLeft:ye(d)}}:(w=u)!=null&&w.includes(c)?{}:{width:"100%",marginLeft:0,[`& > .${$e.item}`]:{paddingLeft:0}}})}return i}function ln(t,r,n={}){if(!t||t<=0)return[];if(typeof t=="string"&&!Number.isNaN(Number(t))||typeof t=="number")return[n[`spacing-xs-${String(t)}`]];const e=[];return r.forEach(i=>{const l=t[i];Number(l)>0&&e.push(n[`spacing-${i}-${String(l)}`])}),e}const dn=Oe("div",{name:"MuiGrid",slot:"Root",overridesResolver:(t,r)=>{const{ownerState:n}=t,{container:e,direction:i,item:l,spacing:u,wrap:a,zeroMinWidth:c,breakpoints:w}=n;let d=[];e&&(d=ln(u,w,r));const h=[];return w.forEach(m=>{const g=n[m];g&&h.push(r[`grid-${m}-${String(g)}`])}),[r.root,e&&r.container,l&&r.item,c&&r.zeroMinWidth,...d,i!=="row"&&r[`direction-xs-${String(i)}`],a!=="wrap"&&r[`wrap-xs-${String(a)}`],...h]}})(({ownerState:t})=>U({boxSizing:"border-box"},t.container&&{display:"flex",flexWrap:"wrap",width:"100%"},t.item&&{margin:0},t.zeroMinWidth&&{minWidth:0},t.wrap!=="wrap"&&{flexWrap:t.wrap}),sn,an,cn,rn);function un(t,r){if(!t||t<=0)return[];if(typeof t=="string"&&!Number.isNaN(Number(t))||typeof t=="number")return[`spacing-xs-${String(t)}`];const n=[];return r.forEach(e=>{const i=t[e];if(Number(i)>0){const l=`spacing-${e}-${String(i)}`;n.push(l)}}),n}const pn=t=>{const{classes:r,container:n,direction:e,item:i,spacing:l,wrap:u,zeroMinWidth:a,breakpoints:c}=t;let w=[];n&&(w=un(l,c));const d=[];c.forEach(m=>{const g=t[m];g&&d.push(`grid-${m}-${String(g)}`)});const h={root:["root",n&&"container",i&&"item",a&&"zeroMinWidth",...w,e!=="row"&&`direction-xs-${String(e)}`,u!=="wrap"&&`wrap-xs-${String(u)}`,...d]};return to(h,Qo,r)},fn=x.forwardRef(function(r,n){const e=Qt({props:r,name:"MuiGrid"}),{breakpoints:i}=yo(),l=No(e),{className:u,columns:a,columnSpacing:c,component:w="div",container:d=!1,direction:h="row",item:m=!1,rowSpacing:g,spacing:b=0,wrap:$="wrap",zeroMinWidth:y=!1}=l,C=Jt(l,nn),j=g||b,R=c||b,E=x.useContext(zt),T=d?a||12:E,z={},D=U({},C);i.keys.forEach(f=>{C[f]!=null&&(z[f]=C[f],delete D[f])});const L=U({},l,{columns:T,container:d,direction:h,item:m,rowSpacing:j,columnSpacing:R,wrap:$,zeroMinWidth:y,spacing:b},z,{breakpoints:i.keys}),V=pn(L);return o.jsx(zt.Provider,{value:T,children:o.jsx(dn,U({ownerState:L,className:eo(V.root,u),as:w,ref:n},D))})}),ie=fn;function hn(t){return Kt("MuiSwitch",t)}const mn=qt("MuiSwitch",["root","edgeStart","edgeEnd","switchBase","colorPrimary","colorSecondary","sizeSmall","sizeMedium","checked","disabled","input","thumb","track"]),H=mn,xn=["className","color","edge","size","sx"],gn=t=>{const{classes:r,edge:n,size:e,color:i,checked:l,disabled:u}=t,a={root:["root",n&&`edge${be(n)}`,`size${be(e)}`],switchBase:["switchBase",`color${be(i)}`,l&&"checked",u&&"disabled"],thumb:["thumb"],track:["track"],input:["input"]},c=to(a,hn,r);return U({},r,c)},bn=Oe("span",{name:"MuiSwitch",slot:"Root",overridesResolver:(t,r)=>{const{ownerState:n}=t;return[r.root,n.edge&&r[`edge${be(n.edge)}`],r[`size${be(n.size)}`]]}})(({ownerState:t})=>U({display:"inline-flex",width:34+12*2,height:14+12*2,overflow:"hidden",padding:12,boxSizing:"border-box",position:"relative",flexShrink:0,zIndex:0,verticalAlign:"middle","@media print":{colorAdjust:"exact"}},t.edge==="start"&&{marginLeft:-8},t.edge==="end"&&{marginRight:-8},t.size==="small"&&{width:40,height:24,padding:7,[`& .${H.thumb}`]:{width:16,height:16},[`& .${H.switchBase}`]:{padding:4,[`&.${H.checked}`]:{transform:"translateX(16px)"}}})),yn=Oe(Ro,{name:"MuiSwitch",slot:"SwitchBase",overridesResolver:(t,r)=>{const{ownerState:n}=t;return[r.switchBase,{[`& .${H.input}`]:r.input},n.color!=="default"&&r[`color${be(n.color)}`]]}})(({theme:t})=>({position:"absolute",top:0,left:0,zIndex:1,color:t.vars?t.vars.palette.Switch.defaultColor:`${t.palette.mode==="light"?t.palette.common.white:t.palette.grey[300]}`,transition:t.transitions.create(["left","transform"],{duration:t.transitions.duration.shortest}),[`&.${H.checked}`]:{transform:"translateX(20px)"},[`&.${H.disabled}`]:{color:t.vars?t.vars.palette.Switch.defaultDisabledColor:`${t.palette.mode==="light"?t.palette.grey[100]:t.palette.grey[600]}`},[`&.${H.checked} + .${H.track}`]:{opacity:.5},[`&.${H.disabled} + .${H.track}`]:{opacity:t.vars?t.vars.opacity.switchTrackDisabled:`${t.palette.mode==="light"?.12:.2}`},[`& .${H.input}`]:{left:"-100%",width:"300%"}}),({theme:t,ownerState:r})=>U({"&:hover":{backgroundColor:t.vars?`rgba(${t.vars.palette.action.activeChannel} / ${t.vars.palette.action.hoverOpacity})`:Pt(t.palette.action.active,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},r.color!=="default"&&{[`&.${H.checked}`]:{color:(t.vars||t).palette[r.color].main,"&:hover":{backgroundColor:t.vars?`rgba(${t.vars.palette[r.color].mainChannel} / ${t.vars.palette.action.hoverOpacity})`:Pt(t.palette[r.color].main,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${H.disabled}`]:{color:t.vars?t.vars.palette.Switch[`${r.color}DisabledColor`]:`${t.palette.mode==="light"?wo(t.palette[r.color].main,.62):jo(t.palette[r.color].main,.55)}`}},[`&.${H.checked} + .${H.track}`]:{backgroundColor:(t.vars||t).palette[r.color].main}})),wn=Oe("span",{name:"MuiSwitch",slot:"Track",overridesResolver:(t,r)=>r.track})(({theme:t})=>({height:"100%",width:"100%",borderRadius:14/2,zIndex:-1,transition:t.transitions.create(["opacity","background-color"],{duration:t.transitions.duration.shortest}),backgroundColor:t.vars?t.vars.palette.common.onBackground:`${t.palette.mode==="light"?t.palette.common.black:t.palette.common.white}`,opacity:t.vars?t.vars.opacity.switchTrack:`${t.palette.mode==="light"?.38:.3}`})),jn=Oe("span",{name:"MuiSwitch",slot:"Thumb",overridesResolver:(t,r)=>r.thumb})(({theme:t})=>({boxShadow:(t.vars||t).shadows[1],backgroundColor:"currentColor",width:20,height:20,borderRadius:"50%"})),vn=x.forwardRef(function(r,n){const e=Qt({props:r,name:"MuiSwitch"}),{className:i,color:l="primary",edge:u=!1,size:a="medium",sx:c}=e,w=Jt(e,xn),d=U({},e,{color:l,edge:u,size:a}),h=gn(d),m=o.jsx(jn,{className:h.thumb,ownerState:d});return o.jsxs(bn,{className:eo(h.root,i),sx:c,ownerState:d,children:[o.jsx(yn,U({type:"checkbox",icon:m,checkedIcon:m,ref:n,ownerState:d},w,{classes:U({},h,{root:h.switchBase})})),o.jsx(wn,{className:h.track,ownerState:d})]})}),fo=vn,Cn={type:"",parent:""},Nt=({onSelect:t,dataTestId:r,edgeLink:n,hideSelectAll:e,placeholder:i})=>{const l=bt({mode:"onChange",defaultValues:Cn}),{watch:u,setValue:a}=l,[c,w]=x.useState([]),[d,h]=x.useState(!1),m=y=>{a("parent",(y==null?void 0:y.value)||""),t(y==null?void 0:y.value)},g=y=>y.charAt(0).toUpperCase()+y.slice(1);x.useEffect(()=>{(async()=>{h(!0);try{const j=(await gt()).schemas.filter(E=>!E.is_deleted&&E.type).map(E=>(E==null?void 0:E.type)==="thing"?{label:"No Parent",value:E.type}:{label:g(E.type),value:E.type});w(e?j:[{label:"Select all",value:"all"},...j]),n&&a("parent",n)}catch(C){console.warn(C)}finally{h(!1)}})()},[n,a,e]);const b=u("parent"),$=()=>{const y=c==null?void 0:c.find(C=>C.value===b);if(y)return y;if(n)return{label:n,value:n}};return o.jsx(En,{dataTestId:r,disabled:!!n,isLoading:d,onSelect:m,options:c||_o,placeholder:i,selectedValue:$()})},En=O(ke)`
  .MuiInputBase-input {
    font-family: Barlow;
    font-size: 14px;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0.01em;
    text-align: left;
    color: ${M.white};
    padding-right: -8px;

    &::placeholder {
      font-family: Barlow;
      font-size: 14px;
      font-weight: 400;
      line-height: 16px;
      letter-spacing: 0.01em;
      text-align: left;
      color: ${M.GRAY7};
      opacity: 1;
    }
  }

  && .MuiInput-input.MuiInputBase-input {
    padding-left: 0;
  }
`,Pn=({selectedType:t,setSelectedFromNode:r,setSelectedToNode:n,edgeLinkData:e,selectedFromNode:i,selectedToNode:l})=>{const u=l==="all",a=i==="all";return o.jsxs(v,{mt:8,children:[o.jsxs(v,{mb:25,children:[o.jsx(v,{mb:5,children:o.jsx(nt,{children:"Source"})}),o.jsx(Nt,{dataTestId:"from_node",edgeLink:e==null?void 0:e.source,hideSelectAll:u,onSelect:r,placeholder:"Source Name"})]}),o.jsxs(v,{mb:10,children:[o.jsx(v,{mb:5,children:o.jsx(nt,{children:"Edge Name"})}),o.jsx(v,{mb:12,children:o.jsx(He,{id:"cy-item-name",maxLength:250,name:"type",placeholder:"Enter Edge Name",rules:{...We,pattern:{message:"No leading whitespace allowed",value:So}},value:t})})]}),o.jsxs(v,{mb:25,children:[o.jsx(v,{mb:5,children:o.jsx(nt,{children:"Destination"})}),o.jsx(Nt,{dataTestId:"to_node",edgeLink:e==null?void 0:e.target,hideSelectAll:a,onSelect:n,placeholder:"Select Destination"})]})]})},nt=O(se)`
  font-family: Barlow;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0.01em;
  text-align: left;
  margin-left: 1px;
  color: ${M.mainBottomIcons};
`,Tn=({onCancel:t,edgeLinkData:r,setGraphLoading:n})=>{var z,D,L;const e=bt({mode:"onChange"}),{setValue:i,getValues:l}=e,[u,a]=x.useState(!1),[c,w]=x.useState(!1),[d,h]=x.useState(""),[m,g]=x.useState(""),[b,$]=x.useState(""),y=e.watch("type");x.useEffect(()=>{i("type",r==null?void 0:r.edgeType)},[r==null?void 0:r.edgeType,i]),x.useEffect(()=>{h(y)},[y]);const C=e.handleSubmit(async V=>{a(!0),n(!0);const f={source:m,target:b,edge_type:V.type},_={ref_id:r==null?void 0:r.refId,edge_type:V.type};try{if(r!=null&&r.refId)await vo(_);else if(b&&m)if(m==="all"||b==="all"){const S=(await gt()).schemas.filter(G=>!G.is_deleted&&G.type).map(G=>G.type);m==="all"?await Promise.all(S.map(G=>ot({...f,source:G}))):b==="all"&&await Promise.all(S.map(G=>ot({...f,target:G})))}else await ot(f)}catch(F){console.warn("API Error:",F)}finally{a(!1),n(!1),g(""),$(""),t()}}),j=(D=(z=l())==null?void 0:z.type)==null?void 0:D.trim(),R=j&&((L=r==null?void 0:r.edgeType)==null?void 0:L.trim())!==j,E=r!=null&&r.refId?u||!R:u||!b.trim()||!m.trim()||!d.trim(),T=async()=>{w(!0),n(!0);try{r!=null&&r.refId&&await Co(r==null?void 0:r.refId)}catch(V){console.warn("API Error:",V)}finally{w(!1),n(!1),g(""),$(""),t()}};return o.jsx(ro,{...e,children:o.jsxs("form",{id:"add-type-form",onSubmit:C,children:[o.jsx(Pn,{edgeLinkData:r,selectedFromNode:m,selectedToNode:b,selectedType:d,setSelectedFromNode:g,setSelectedToNode:$}),o.jsxs(v,{direction:"row",justify:"space-between",mt:20,children:[(r==null?void 0:r.refId)&&o.jsx(v,{direction:"column",children:o.jsxs(An,{color:"secondary",disabled:c,onClick:T,size:"large",style:{marginRight:20},variant:"contained",children:["Delete",c&&o.jsxs(Rt,{children:[o.jsx(ue,{color:M.lightGray,size:12})," "]})]})}),o.jsxs(Mn,{color:"secondary",disabled:E,onClick:C,size:"large",variant:"contained",children:["Confirm",u&&o.jsxs(Rt,{children:[o.jsx(ue,{color:M.lightGray,size:12})," "]})]})]})]})})},Mn=O(_e)`
  width: 293px !important;
  margin: 0 0 10px auto !important;
`,Rt=O.span`
  margin-top: 2px;
`,An=O(_e)`
  && {
    color: ${M.primaryRed};
    background-color: rgba(237, 116, 116, 0.1);

    &:hover,
    &:active,
    &:focus {
      color: ${M.primaryRed};
      background-color: rgba(237, 116, 116, 0.2);
    }
  }
`,kn=({setIsAddEdgeNode:t,edgeData:r,setGraphLoading:n})=>{const e=()=>{t(!1)};return o.jsxs(v,{children:[o.jsxs(On,{align:"center",direction:"row",justify:"space-between",children:[o.jsx(Sn,{"data-testid":"edge-modal-title",children:r!=null&&r.refId?"Edit Edge":"Add Edge"}),o.jsx($n,{"data-testid":"close-sidebar-sub-view",onClick:e,children:o.jsx(yt,{})})]}),o.jsx(_n,{}),o.jsx(Tn,{edgeLinkData:r,onCancel:e,setGraphLoading:n})]})},$n=O(v)`
  font-size: 32px;
  color: ${M.white};
  cursor: pointer;

  svg {
    color: ${M.GRAY6};
  }

  &:hover {
    svg {
      color: ${M.white};
    }
  }
`,On=O(v)`
  margin-bottom: 16px;
`,_n=O.div`
  border-bottom: 1px solid ${M.black};
  width: calc(100% + 32px);
  margin: 0 -16px 16px;
  opacity: 0.3;
`,Sn=O(se)`
  font-family: Barlow;
  font-size: 22px;
  font-weight: 600;
  line-height: 16px;
  letter-spacing: 0.01em;
  text-align: left;
  margin-left: 2px;
  color: ${M.white};
`,In=/^[a-z0-9_]+$/,zn=({parentParam:t,onDelete:r})=>{const[n,e]=x.useState(!1),[i,l]=x.useState([]),{fields:u,append:a,replace:c,remove:w}=Ao({name:"attributes"}),{setValue:d,watch:h}=ko();return x.useEffect(()=>{const m=async()=>{try{let g=[{required:!1,type:"string",key:""}];if(t!==io.value.toLowerCase()){e(!0);const b=await oo(t);b.attributes&&typeof b.attributes=="object"?g=ht(b.attributes):g=ht(b)}g=g.filter(b=>b.key!=="node_key"),c(g),l(g)}catch(g){console.warn(g)}finally{e(!1)}};i.length===0&&m()},[t,d,c,i.length]),o.jsxs(o.Fragment,{children:[n?o.jsx(v,{align:"center",children:o.jsx(ue,{color:M.SECONDARY_BLUE,size:"30"})}):o.jsx(Nn,{py:8,children:o.jsx(ie,{container:!0,spacing:2,children:u.map((m,g)=>{const b=h(`attributes[${g}].type`),$=h(`attributes[${g}].required`),y=m.isNew||!1,C=["name"].includes(h(`attributes[${g}].key`));return o.jsxs(x.Fragment,{children:[o.jsx(ie,{item:!0,xs:5,children:o.jsx(He,{autoComplete:"off",className:"text-input",dataTestId:`cy-item-name-${g}`,disabled:!y,id:`cy-item-name-${g}`,maxLength:50,name:`attributes.${g}.key`,placeholder:"Enter value",rules:{...We,pattern:{message:"Please avoid special characters, spaces and uppercase",value:In}}})}),o.jsx(ie,{item:!0,xs:4,children:o.jsx(ke,{dataTestId:`cy-item-select-${g}`,disabled:C,onSelect:j=>d(`attributes[${g}].type`,j==null?void 0:j.value),options:Ot,selectedValue:Ot.find(j=>j.value===b)})}),o.jsxs(ie,{item:!0,xs:3,children:[o.jsx(fo,{checked:$,"data-testid":`cy-item-${g}`,disabled:C,name:`attributes.${g}.required`,onChange:j=>d(`attributes[${g}].required`,j.target.checked),size:"small"}),!C&&o.jsx($o,{onClick:()=>{w(g),m.key!==void 0&&r&&r(m.key)},children:o.jsx(ao,{})})]})]},m.id)})})}),o.jsx(v,{align:"flex-start",py:12,children:o.jsx(_e,{"data-testid":"add-attribute-btn",onClick:()=>a({key:"",type:"string",required:!0,isNew:!0}),size:"medium",startIcon:o.jsx(co,{}),variant:"contained",children:"Add Attribute"})})]})},Nn=O(v)`
  overflow-y: auto;
  width: calc(100% + 20px);
  max-height: calc(80vh - 300px);
`,Rn=({parent:t,onDelete:r})=>{const n=t;return o.jsxs(v,{children:[o.jsx(v,{direction:"row",mb:10,children:o.jsxs(ie,{container:!0,spacing:2,children:[o.jsx(ie,{item:!0,xs:5,children:o.jsx(rt,{style:{marginRight:180},children:"Attributes"})}),o.jsx(ie,{item:!0,xs:4,children:o.jsx(rt,{style:{marginRight:130},children:"Type"})}),o.jsx(ie,{item:!0,xs:3,children:o.jsx(rt,{children:"Required"})})]})}),n&&o.jsx(zn,{onDelete:r,parentParam:n},n)]})},rt=O(se)`
  font-size: 15px;
  color: gray;
`,Ln=({setMediaOptions:t,initialOptions:r})=>{const[n,e]=x.useState(r);x.useEffect(()=>{e(r)},[r]);const i=l=>{e(u=>{const a={...u,[l]:!u[l]};return t(a),a})};return o.jsxs(Bn,{direction:"column",children:[o.jsx(ct,{}),o.jsx(st,{control:o.jsx(at,{checked:n.videoAudio,onChange:()=>i("videoAudio")}),label:o.jsx(it,{active:n.videoAudio,children:"Video / Audio"}),labelPlacement:"start"}),o.jsx(ct,{}),o.jsx(st,{control:o.jsx(at,{checked:n.image,onChange:()=>i("image")}),label:o.jsx(it,{active:n.image,children:"Image"}),labelPlacement:"start"}),o.jsx(ct,{}),o.jsx(st,{control:o.jsx(at,{checked:n.sourceLink,onChange:()=>i("sourceLink")}),label:o.jsx(it,{active:n.sourceLink,children:"Source Link"}),labelPlacement:"start"})]})},Bn=O(v)`
  direction: column;
`,st=O(Lo)`
  justify-content: space-between;
  margin-left: 2px !important;
  margin-top: 8px;
  margin-bottom: 8px;
`,it=O.span`
  color: ${({active:t})=>t?M.white:M.GRAY7};
  font-family: Barlow;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: 0.01em;
  text-align: left;
`,at=O(t=>o.jsx(fo,{...t}))`
  &.MuiSwitch-root {
    width: 53px;
    height: 38px;
  }
  & .MuiSwitch-switchBase {
    margin-top: 3px;
    &.Mui-checked {
      color: ${M.white};
      & + .MuiSwitch-track {
        background-color: ${M.primaryBlueBorder};
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
    background-color: ${M.BG2};
    opacity: 1;
  }
`,ct=O.div`
  border: 1px solid ${M.BG2};
  width: 100%;
  opacity: 0.5;
`,Lt={type:"",parent:""},Vn=(t,r)=>t.length!==r.length?!0:t.some((n,e)=>{const i=r[e];return n.required!==i.required||n.type!==i.type||n.key!==i.key}),Dn=async(t,r=!1,n,e)=>{try{const{attributes:i,selectedIndex:l,ref_id:u,...a}=t,c={...Io(i),...n.reduce((h,m)=>({...h,[m]:"delete"}),{})},w={...a,attributes:c,index:l};e.videoAudio&&(w.media_url=""),e.image&&(w.image_url=""),e.sourceLink&&(w.source_link="");let d;if(r?d=await ft.put(`/schema/${t.ref_id}`,JSON.stringify(w),{}):d=await ft.post("/schema",JSON.stringify({...w,node_key:"name"}),{}),d.status!=="success")throw new Error("error");return d==null?void 0:d.ref_id}catch(i){let l=ge;if(i.status===400){const u=await i.json();l=u.errorCode||(u==null?void 0:u.status)||ge}else i instanceof Error&&(l=i.message);throw new Error(l)}},Fn=t=>t.charAt(0).toUpperCase()+t.slice(1),Bt=async(t,r)=>{try{const l=((await gt()).schemas||[]).filter(u=>!u.is_deleted&&u.type&&(!r||r(u))).map(u=>u.type==="thing"?{label:"No Parent",value:u.type}:{label:Fn(u.type),value:u.type});t(l)}catch(n){console.warn(n)}},Gn=({graphLoading:t,onSchemaCreate:r,selectedSchema:n,onDelete:e,setSelectedSchemaId:i,setGraphLoading:l,setIsCreateNew:u,onSchemaUpdate:a})=>{const{close:c,visible:w}=no("addType"),d=bt({mode:"onChange",defaultValues:n?{type:n.type,parent:n.parent}:Lt}),{watch:h,setValue:m,reset:g,getValues:b}=d,[$,y]=x.useState(!1),[C,j]=x.useState(!1),[R,E]=x.useState(!1),[T,z]=x.useState(null),[D,L]=x.useState(!1),[V,f]=x.useState(null),[_,F]=x.useState(""),[S,G]=x.useState(null),[Z,ee]=x.useState([]),[ae,q]=x.useState([]),[we,Se]=x.useState(!0),[je,le]=x.useState({videoAudio:!1,image:!1,sourceLink:!1});x.useEffect(()=>()=>{g()},[w,g]);const Ie=()=>{u(!1),i("")};x.useEffect(()=>{n||(E(!0),Bt(z).finally(()=>E(!1)))},[n]),x.useEffect(()=>{(()=>{g(Lt),q([{required:!1,type:"string",key:""}]),ee([]),le({videoAudio:!1,image:!1,sourceLink:!1})})(),n&&(m("type",n.type),m("parent",n.parent),n.index&&m("selectedIndex",n.index),le({videoAudio:!!n.media_url,image:!!n.image_url,sourceLink:!!n.source_link}),n.type!==io.value.toLowerCase()&&oo(n.type).then(I=>{const K=(I?ht(I):[{required:!1,type:"string",key:""}]).filter(pe=>pe.key!=="node_key");q(K)}),Bt(f,I=>I.type!==n.type))},[n,m,g]);const X=h("parent");h("type");const ze=P=>Array.isArray(P)&&P.every(I=>typeof I=="object"&&"key"in I),ve=h("attributes"),de=x.useMemo(()=>ze(ve)?ve.filter(P=>P.key&&P.key.trim()!==""):[],[ve]),Xe=()=>{c()},Ke=P=>{ee(I=>[...I,P])},qe=async()=>{if(n!=null&&n.type){j(!0),l(!0);try{await ft.delete(`/schema/${n.ref_id}`),e(n.type),c()}catch(P){let I=ge;if((P==null?void 0:P.status)===400){const W=await P.json();I=W.errorCode||(W==null?void 0:W.status)||ge}else P instanceof Error&&(I=P.message);G(I)}finally{j(!1),l(!1),u(!1)}}},Ce=d.handleSubmit(async P=>{if(!X){L(!0);return}y(!0);try{if(n&&P.type!==(n==null?void 0:n.type)||n&&b().parent!==(n==null?void 0:n.parent)){const W=b().parent??(n==null?void 0:n.parent),{selectedIndex:K}=b();l(!0),await Eo(n==null?void 0:n.ref_id,{type:P.type,parent:W,attributes:{index:K}}),await a()}const I=await Dn({...P,...n?{ref_id:n==null?void 0:n.ref_id}:{}},!!n,Z,je);r({type:P.type,parent:X||"",ref_id:(n==null?void 0:n.ref_id)||I||"new"}),Xe()}catch(I){let W=ge;if((I==null?void 0:I.status)===400){const K=await I.json();W=K.errorCode||(K==null?void 0:K.status)||ge}else I instanceof Error&&(W=I.message);F(W)}finally{y(!1),l(!1),u(!1)}});x.useEffect(()=>{const P=d.watch(I=>{var Ee,fe,he,Pe,Le,Be;const W=Vn(de,ae),K=((Ee=I.type)==null?void 0:Ee.trim())!==((fe=n==null?void 0:n.type)==null?void 0:fe.trim())||((he=I.parent)==null?void 0:he.trim())!==((Pe=n==null?void 0:n.parent)==null?void 0:Pe.trim())||W,pe=!!((Le=I.type)!=null&&Le.trim()),Je=!!((Be=I.parent)!=null&&Be.trim());Se(n?$||!K||!pe||D:$||D||!pe||!Je)});return()=>P.unsubscribe()},[d,de,ae,n,$,D]);const Ne=()=>T==null?void 0:T.find(P=>P.value===X),Re=x.useMemo(()=>{if(X){const P=V==null?void 0:V.find(I=>I.value===X);return P||{label:X,value:X}}if(n!=null&&n.parent){const P=V==null?void 0:V.find(I=>I.value===n.parent);return P||{label:n.parent,value:n.parent}}},[X,n,V]),Qe=x.useMemo(()=>{if(!n)return;const P=de.find(I=>I.key===n.index);if(P)return{label:P.key,value:P.key};if(n.index)return{label:n.index,value:n.index}},[n,de]);return o.jsxs(v,{children:[o.jsxs(Zn,{children:[o.jsx(Xn,{children:n?"Edit Type":"Create Type"}),o.jsx(Un,{"data-testid":"close-sidebar-sub-view",onClick:Ie,children:o.jsx(yt,{})})]}),o.jsx(Wn,{}),o.jsx(v,{children:o.jsx(ro,{...d,children:o.jsxs("form",{id:"add-type-form",onSubmit:Ce,children:[o.jsx(v,{children:n?o.jsxs(o.Fragment,{children:[o.jsxs(v,{mb:12,children:[o.jsx(v,{mb:12,children:o.jsx(se,{children:"Name"})}),o.jsx(v,{mb:12,children:o.jsx(He,{dataTestId:"cy-item-name",defaultValue:n==null?void 0:n.type,id:"cy-item-name",maxLength:250,name:"type",placeholder:"Enter type name",rules:{...We},value:X})})]}),o.jsxs(v,{mb:12,children:[o.jsx(v,{mb:12,children:o.jsx(se,{children:"Parent"})}),o.jsx(ke,{isLoading:R||t,onSelect:P=>{m("parent",(P==null?void 0:P.value)||""),L(!1)},options:V||[],selectedValue:Re}),_&&o.jsx(lt,{children:_})]})]}):o.jsxs(o.Fragment,{children:[o.jsxs(v,{mb:12,children:[o.jsx(v,{mb:12,children:o.jsx(se,{children:"Select Parent"})}),o.jsx(ke,{isLoading:R,onSelect:P=>{m("parent",(P==null?void 0:P.value)||""),L(!1)},options:T,selectedValue:Ne()}),D&&o.jsx(lt,{children:"A parent type must be selected"})]}),o.jsxs(v,{children:[o.jsx(v,{mb:12,children:o.jsx(se,{children:"Type name"})}),o.jsx(v,{mb:12,children:o.jsx(He,{id:"cy-item-name",maxLength:250,name:"type",placeholder:"Enter type name",rules:{...We},value:X})})]})]})}),o.jsx(Rn,{onDelete:Ke,parent:n?n.type:X}),o.jsx(Ln,{initialOptions:je,setMediaOptions:le}),o.jsxs(v,{children:[o.jsx(Dt,{}),o.jsx(v,{mb:12,mt:12,children:o.jsx(se,{children:"Indexes"})}),o.jsx(ie,{item:!0,mb:2,width:"70%",children:o.jsx(ke,{onSelect:P=>m("selectedIndex",(P==null?void 0:P.value)||""),options:de.map(P=>({label:P.key,value:P.key})),selectedValue:Qe})}),o.jsx(Dt,{})]}),o.jsxs(v,{direction:"row",justify:"space-between",mt:20,children:[n&&o.jsxs(v,{direction:"column",children:[o.jsxs(Hn,{color:"secondary",disabled:C,onClick:qe,size:"large",style:{marginRight:20},variant:"contained",children:["Delete",C&&o.jsxs(Vt,{children:[o.jsx(ue,{color:M.lightGray,size:12})," "]})]}),S&&o.jsx(lt,{children:S})]}),o.jsxs(Yn,{color:"secondary",disabled:we,onClick:Ce,size:"large",variant:"contained",children:["Confirm",$&&o.jsxs(Vt,{children:[o.jsx(ue,{color:M.lightGray,size:12})," "]})]})]})]})})})]})},Yn=O(_e)`
  width: 100% !important;
  margin: 0 auto !important;
`,Wn=O.div`
  border-bottom: 1px solid ${M.black};
  width: calc(100% + 32px);
  margin: 0 -16px 16px;
  opacity: 0.3;
`,Vt=O.span`
  margin-top: 2px;
`,Hn=O(_e)`
  && {
    color: ${M.primaryRed};
    background-color: rgba(237, 116, 116, 0.1);

    &:hover,
    &:active,
    &:focus {
      color: ${M.primaryRed};
      background-color: rgba(237, 116, 116, 0.2);
    }
  }
`,Un=O(v)`
  font-size: 32px;
  color: ${M.white};
  cursor: pointer;

  svg {
    color: ${M.GRAY6};
  }

  &:hover {
    svg {
      color: ${M.white};
    }
  }
`,lt=O(v)`
  font-size: 13px;
  font-family: Barlow;
  color: #ff8f80;
  line-height: 0.2px;
  margin-top: 12px;
  padding-top: 20px;
`,Dt=O.div`
  border: 1px solid ${M.BG2};
  width: calc(100% + 32px);
  opacity: 0.5;
  margin-left: -16px;
`,Zn=O(v)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 16px;
`,Xn=O(se)`
  font-family: Barlow;
  font-size: 22px;
  font-weight: 600;
  line-height: 16px;
  letter-spacing: 0.01em;
  text-align: left;
  color: ${M.white};
`;var Kn=Object.defineProperty,qn=(t,r,n)=>r in t?Kn(t,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[r]=n,A=(t,r,n)=>(qn(t,typeof r!="symbol"?r+"":r,n),n);const Ye=new Wo,Ft=new Ho,Qn=Math.cos(70*(Math.PI/180)),Gt=(t,r)=>(t%r+r)%r;let Jn=class extends Uo{constructor(r,n){super(),A(this,"object"),A(this,"domElement"),A(this,"enabled",!0),A(this,"target",new N),A(this,"minDistance",0),A(this,"maxDistance",1/0),A(this,"minZoom",0),A(this,"maxZoom",1/0),A(this,"minPolarAngle",0),A(this,"maxPolarAngle",Math.PI),A(this,"minAzimuthAngle",-1/0),A(this,"maxAzimuthAngle",1/0),A(this,"enableDamping",!1),A(this,"dampingFactor",.05),A(this,"enableZoom",!0),A(this,"zoomSpeed",1),A(this,"enableRotate",!0),A(this,"rotateSpeed",1),A(this,"enablePan",!0),A(this,"panSpeed",1),A(this,"screenSpacePanning",!0),A(this,"keyPanSpeed",7),A(this,"zoomToCursor",!1),A(this,"autoRotate",!1),A(this,"autoRotateSpeed",2),A(this,"reverseOrbit",!1),A(this,"reverseHorizontalOrbit",!1),A(this,"reverseVerticalOrbit",!1),A(this,"keys",{LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"}),A(this,"mouseButtons",{LEFT:me.ROTATE,MIDDLE:me.DOLLY,RIGHT:me.PAN}),A(this,"touches",{ONE:xe.ROTATE,TWO:xe.DOLLY_PAN}),A(this,"target0"),A(this,"position0"),A(this,"zoom0"),A(this,"_domElementKeyEvents",null),A(this,"getPolarAngle"),A(this,"getAzimuthalAngle"),A(this,"setPolarAngle"),A(this,"setAzimuthalAngle"),A(this,"getDistance"),A(this,"listenToKeyEvents"),A(this,"stopListenToKeyEvents"),A(this,"saveState"),A(this,"reset"),A(this,"update"),A(this,"connect"),A(this,"dispose"),this.object=r,this.domElement=n,this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this.getPolarAngle=()=>d.phi,this.getAzimuthalAngle=()=>d.theta,this.setPolarAngle=s=>{let p=Gt(s,2*Math.PI),k=d.phi;k<0&&(k+=2*Math.PI),p<0&&(p+=2*Math.PI);let B=Math.abs(p-k);2*Math.PI-B<B&&(p<k?p+=2*Math.PI:k+=2*Math.PI),h.phi=p-k,e.update()},this.setAzimuthalAngle=s=>{let p=Gt(s,2*Math.PI),k=d.theta;k<0&&(k+=2*Math.PI),p<0&&(p+=2*Math.PI);let B=Math.abs(p-k);2*Math.PI-B<B&&(p<k?p+=2*Math.PI:k+=2*Math.PI),h.theta=p-k,e.update()},this.getDistance=()=>e.object.position.distanceTo(e.target),this.listenToKeyEvents=s=>{s.addEventListener("keydown",et),this._domElementKeyEvents=s},this.stopListenToKeyEvents=()=>{this._domElementKeyEvents.removeEventListener("keydown",et),this._domElementKeyEvents=null},this.saveState=()=>{e.target0.copy(e.target),e.position0.copy(e.object.position),e.zoom0=e.object.zoom},this.reset=()=>{e.target.copy(e.target0),e.object.position.copy(e.position0),e.object.zoom=e.zoom0,e.object.updateProjectionMatrix(),e.dispatchEvent(i),e.update(),c=a.NONE},this.update=(()=>{const s=new N,p=new N(0,1,0),k=new St().setFromUnitVectors(r.up,p),B=k.clone().invert(),Y=new N,oe=new St,ce=2*Math.PI;return function(){const Et=e.object.position;k.setFromUnitVectors(r.up,p),B.copy(k).invert(),s.copy(Et).sub(e.target),s.applyQuaternion(k),d.setFromVector3(s),e.autoRotate&&c===a.NONE&&G(F()),e.enableDamping?(d.theta+=h.theta*e.dampingFactor,d.phi+=h.phi*e.dampingFactor):(d.theta+=h.theta,d.phi+=h.phi);let ne=e.minAzimuthAngle,re=e.maxAzimuthAngle;isFinite(ne)&&isFinite(re)&&(ne<-Math.PI?ne+=ce:ne>Math.PI&&(ne-=ce),re<-Math.PI?re+=ce:re>Math.PI&&(re-=ce),ne<=re?d.theta=Math.max(ne,Math.min(re,d.theta)):d.theta=d.theta>(ne+re)/2?Math.max(ne,d.theta):Math.min(re,d.theta)),d.phi=Math.max(e.minPolarAngle,Math.min(e.maxPolarAngle,d.phi)),d.makeSafe(),e.enableDamping===!0?e.target.addScaledVector(g,e.dampingFactor):e.target.add(g),e.zoomToCursor&&V||e.object.isOrthographicCamera?d.radius=le(d.radius):d.radius=le(d.radius*m),s.setFromSpherical(d),s.applyQuaternion(B),Et.copy(e.target).add(s),e.object.matrixAutoUpdate||e.object.updateMatrix(),e.object.lookAt(e.target),e.enableDamping===!0?(h.theta*=1-e.dampingFactor,h.phi*=1-e.dampingFactor,g.multiplyScalar(1-e.dampingFactor)):(h.set(0,0,0),g.set(0,0,0));let Ve=!1;if(e.zoomToCursor&&V){let Te=null;if(e.object instanceof Fe&&e.object.isPerspectiveCamera){const Me=s.length();Te=le(Me*m);const De=Me-Te;e.object.position.addScaledVector(D,De),e.object.updateMatrixWorld()}else if(e.object.isOrthographicCamera){const Me=new N(L.x,L.y,0);Me.unproject(e.object),e.object.zoom=Math.max(e.minZoom,Math.min(e.maxZoom,e.object.zoom/m)),e.object.updateProjectionMatrix(),Ve=!0;const De=new N(L.x,L.y,0);De.unproject(e.object),e.object.position.sub(De).add(Me),e.object.updateMatrixWorld(),Te=s.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),e.zoomToCursor=!1;Te!==null&&(e.screenSpacePanning?e.target.set(0,0,-1).transformDirection(e.object.matrix).multiplyScalar(Te).add(e.object.position):(Ye.origin.copy(e.object.position),Ye.direction.set(0,0,-1).transformDirection(e.object.matrix),Math.abs(e.object.up.dot(Ye.direction))<Qn?r.lookAt(e.target):(Ft.setFromNormalAndCoplanarPoint(e.object.up,e.target),Ye.intersectPlane(Ft,e.target))))}else e.object instanceof Ge&&e.object.isOrthographicCamera&&(e.object.zoom=Math.max(e.minZoom,Math.min(e.maxZoom,e.object.zoom/m)),e.object.updateProjectionMatrix(),Ve=!0);return m=1,V=!1,Ve||Y.distanceToSquared(e.object.position)>w||8*(1-oe.dot(e.object.quaternion))>w?(e.dispatchEvent(i),Y.copy(e.object.position),oe.copy(e.object.quaternion),Ve=!1,!0):!1}})(),this.connect=s=>{s===document&&console.error('THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.'),e.domElement=s,e.domElement.style.touchAction="none",e.domElement.addEventListener("contextmenu",jt),e.domElement.addEventListener("pointerdown",Ee),e.domElement.addEventListener("pointercancel",Pe),e.domElement.addEventListener("wheel",wt)},this.dispose=()=>{var s,p,k,B,Y,oe;(s=e.domElement)==null||s.removeEventListener("contextmenu",jt),(p=e.domElement)==null||p.removeEventListener("pointerdown",Ee),(k=e.domElement)==null||k.removeEventListener("pointercancel",Pe),(B=e.domElement)==null||B.removeEventListener("wheel",wt),(Y=e.domElement)==null||Y.ownerDocument.removeEventListener("pointermove",fe),(oe=e.domElement)==null||oe.ownerDocument.removeEventListener("pointerup",he),e._domElementKeyEvents!==null&&e._domElementKeyEvents.removeEventListener("keydown",et)};const e=this,i={type:"change"},l={type:"start"},u={type:"end"},a={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let c=a.NONE;const w=1e-6,d=new It,h=new It;let m=1;const g=new N,b=new Q,$=new Q,y=new Q,C=new Q,j=new Q,R=new Q,E=new Q,T=new Q,z=new Q,D=new N,L=new Q;let V=!1;const f=[],_={};function F(){return 2*Math.PI/60/60*e.autoRotateSpeed}function S(){return Math.pow(.95,e.zoomSpeed)}function G(s){e.reverseOrbit||e.reverseHorizontalOrbit?h.theta+=s:h.theta-=s}function Z(s){e.reverseOrbit||e.reverseVerticalOrbit?h.phi+=s:h.phi-=s}const ee=(()=>{const s=new N;return function(k,B){s.setFromMatrixColumn(B,0),s.multiplyScalar(-k),g.add(s)}})(),ae=(()=>{const s=new N;return function(k,B){e.screenSpacePanning===!0?s.setFromMatrixColumn(B,1):(s.setFromMatrixColumn(B,0),s.crossVectors(e.object.up,s)),s.multiplyScalar(k),g.add(s)}})(),q=(()=>{const s=new N;return function(k,B){const Y=e.domElement;if(Y&&e.object instanceof Fe&&e.object.isPerspectiveCamera){const oe=e.object.position;s.copy(oe).sub(e.target);let ce=s.length();ce*=Math.tan(e.object.fov/2*Math.PI/180),ee(2*k*ce/Y.clientHeight,e.object.matrix),ae(2*B*ce/Y.clientHeight,e.object.matrix)}else Y&&e.object instanceof Ge&&e.object.isOrthographicCamera?(ee(k*(e.object.right-e.object.left)/e.object.zoom/Y.clientWidth,e.object.matrix),ae(B*(e.object.top-e.object.bottom)/e.object.zoom/Y.clientHeight,e.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),e.enablePan=!1)}})();function we(s){e.object instanceof Fe&&e.object.isPerspectiveCamera||e.object instanceof Ge&&e.object.isOrthographicCamera?m/=s:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),e.enableZoom=!1)}function Se(s){e.object instanceof Fe&&e.object.isPerspectiveCamera||e.object instanceof Ge&&e.object.isOrthographicCamera?m*=s:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),e.enableZoom=!1)}function je(s){if(!e.zoomToCursor||!e.domElement)return;V=!0;const p=e.domElement.getBoundingClientRect(),k=s.clientX-p.left,B=s.clientY-p.top,Y=p.width,oe=p.height;L.x=k/Y*2-1,L.y=-(B/oe)*2+1,D.set(L.x,L.y,1).unproject(e.object).sub(e.object.position).normalize()}function le(s){return Math.max(e.minDistance,Math.min(e.maxDistance,s))}function Ie(s){b.set(s.clientX,s.clientY)}function X(s){je(s),E.set(s.clientX,s.clientY)}function ze(s){C.set(s.clientX,s.clientY)}function ve(s){$.set(s.clientX,s.clientY),y.subVectors($,b).multiplyScalar(e.rotateSpeed);const p=e.domElement;p&&(G(2*Math.PI*y.x/p.clientHeight),Z(2*Math.PI*y.y/p.clientHeight)),b.copy($),e.update()}function de(s){T.set(s.clientX,s.clientY),z.subVectors(T,E),z.y>0?we(S()):z.y<0&&Se(S()),E.copy(T),e.update()}function Xe(s){j.set(s.clientX,s.clientY),R.subVectors(j,C).multiplyScalar(e.panSpeed),q(R.x,R.y),C.copy(j),e.update()}function Ke(s){je(s),s.deltaY<0?Se(S()):s.deltaY>0&&we(S()),e.update()}function qe(s){let p=!1;switch(s.code){case e.keys.UP:q(0,e.keyPanSpeed),p=!0;break;case e.keys.BOTTOM:q(0,-e.keyPanSpeed),p=!0;break;case e.keys.LEFT:q(e.keyPanSpeed,0),p=!0;break;case e.keys.RIGHT:q(-e.keyPanSpeed,0),p=!0;break}p&&(s.preventDefault(),e.update())}function Ce(){if(f.length==1)b.set(f[0].pageX,f[0].pageY);else{const s=.5*(f[0].pageX+f[1].pageX),p=.5*(f[0].pageY+f[1].pageY);b.set(s,p)}}function Ne(){if(f.length==1)C.set(f[0].pageX,f[0].pageY);else{const s=.5*(f[0].pageX+f[1].pageX),p=.5*(f[0].pageY+f[1].pageY);C.set(s,p)}}function Re(){const s=f[0].pageX-f[1].pageX,p=f[0].pageY-f[1].pageY,k=Math.sqrt(s*s+p*p);E.set(0,k)}function Qe(){e.enableZoom&&Re(),e.enablePan&&Ne()}function P(){e.enableZoom&&Re(),e.enableRotate&&Ce()}function I(s){if(f.length==1)$.set(s.pageX,s.pageY);else{const k=tt(s),B=.5*(s.pageX+k.x),Y=.5*(s.pageY+k.y);$.set(B,Y)}y.subVectors($,b).multiplyScalar(e.rotateSpeed);const p=e.domElement;p&&(G(2*Math.PI*y.x/p.clientHeight),Z(2*Math.PI*y.y/p.clientHeight)),b.copy($)}function W(s){if(f.length==1)j.set(s.pageX,s.pageY);else{const p=tt(s),k=.5*(s.pageX+p.x),B=.5*(s.pageY+p.y);j.set(k,B)}R.subVectors(j,C).multiplyScalar(e.panSpeed),q(R.x,R.y),C.copy(j)}function K(s){const p=tt(s),k=s.pageX-p.x,B=s.pageY-p.y,Y=Math.sqrt(k*k+B*B);T.set(0,Y),z.set(0,Math.pow(T.y/E.y,e.zoomSpeed)),we(z.y),E.copy(T)}function pe(s){e.enableZoom&&K(s),e.enablePan&&W(s)}function Je(s){e.enableZoom&&K(s),e.enableRotate&&I(s)}function Ee(s){var p,k;e.enabled!==!1&&(f.length===0&&((p=e.domElement)==null||p.ownerDocument.addEventListener("pointermove",fe),(k=e.domElement)==null||k.ownerDocument.addEventListener("pointerup",he)),bo(s),s.pointerType==="touch"?xo(s):Le(s))}function fe(s){e.enabled!==!1&&(s.pointerType==="touch"?go(s):Be(s))}function he(s){var p,k,B;vt(s),f.length===0&&((p=e.domElement)==null||p.releasePointerCapture(s.pointerId),(k=e.domElement)==null||k.ownerDocument.removeEventListener("pointermove",fe),(B=e.domElement)==null||B.ownerDocument.removeEventListener("pointerup",he)),e.dispatchEvent(u),c=a.NONE}function Pe(s){vt(s)}function Le(s){let p;switch(s.button){case 0:p=e.mouseButtons.LEFT;break;case 1:p=e.mouseButtons.MIDDLE;break;case 2:p=e.mouseButtons.RIGHT;break;default:p=-1}switch(p){case me.DOLLY:if(e.enableZoom===!1)return;X(s),c=a.DOLLY;break;case me.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(e.enablePan===!1)return;ze(s),c=a.PAN}else{if(e.enableRotate===!1)return;Ie(s),c=a.ROTATE}break;case me.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(e.enableRotate===!1)return;Ie(s),c=a.ROTATE}else{if(e.enablePan===!1)return;ze(s),c=a.PAN}break;default:c=a.NONE}c!==a.NONE&&e.dispatchEvent(l)}function Be(s){if(e.enabled!==!1)switch(c){case a.ROTATE:if(e.enableRotate===!1)return;ve(s);break;case a.DOLLY:if(e.enableZoom===!1)return;de(s);break;case a.PAN:if(e.enablePan===!1)return;Xe(s);break}}function wt(s){e.enabled===!1||e.enableZoom===!1||c!==a.NONE&&c!==a.ROTATE||(s.preventDefault(),e.dispatchEvent(l),Ke(s),e.dispatchEvent(u))}function et(s){e.enabled===!1||e.enablePan===!1||qe(s)}function xo(s){switch(Ct(s),f.length){case 1:switch(e.touches.ONE){case xe.ROTATE:if(e.enableRotate===!1)return;Ce(),c=a.TOUCH_ROTATE;break;case xe.PAN:if(e.enablePan===!1)return;Ne(),c=a.TOUCH_PAN;break;default:c=a.NONE}break;case 2:switch(e.touches.TWO){case xe.DOLLY_PAN:if(e.enableZoom===!1&&e.enablePan===!1)return;Qe(),c=a.TOUCH_DOLLY_PAN;break;case xe.DOLLY_ROTATE:if(e.enableZoom===!1&&e.enableRotate===!1)return;P(),c=a.TOUCH_DOLLY_ROTATE;break;default:c=a.NONE}break;default:c=a.NONE}c!==a.NONE&&e.dispatchEvent(l)}function go(s){switch(Ct(s),c){case a.TOUCH_ROTATE:if(e.enableRotate===!1)return;I(s),e.update();break;case a.TOUCH_PAN:if(e.enablePan===!1)return;W(s),e.update();break;case a.TOUCH_DOLLY_PAN:if(e.enableZoom===!1&&e.enablePan===!1)return;pe(s),e.update();break;case a.TOUCH_DOLLY_ROTATE:if(e.enableZoom===!1&&e.enableRotate===!1)return;Je(s),e.update();break;default:c=a.NONE}}function jt(s){e.enabled!==!1&&s.preventDefault()}function bo(s){f.push(s)}function vt(s){delete _[s.pointerId];for(let p=0;p<f.length;p++)if(f[p].pointerId==s.pointerId){f.splice(p,1);return}}function Ct(s){let p=_[s.pointerId];p===void 0&&(p=new Q,_[s.pointerId]=p),p.set(s.pageX,s.pageY)}function tt(s){const p=s.pointerId===f[0].pointerId?f[1]:f[0];return _[p.pointerId]}n!==void 0&&this.connect(n),this.update()}};const er=new N,Yt=x.forwardRef(function({start:r=[0,0,0],end:n=[0,0,0],mid:e,segments:i=20,...l},u){const a=x.useRef(null),[c]=x.useState(()=>new Zo(void 0,void 0,void 0)),w=x.useCallback((h,m,g,b=20)=>(h instanceof N?c.v0.copy(h):c.v0.set(...h),m instanceof N?c.v2.copy(m):c.v2.set(...m),g instanceof N?c.v1.copy(g):c.v1.copy(c.v0.clone().add(c.v2.clone().sub(c.v0)).add(er.set(0,c.v0.y-c.v2.y,0))),c.getPoints(b)),[]);x.useLayoutEffect(()=>{a.current.setPoints=(h,m,g)=>{const b=w(h,m,g);a.current.geometry&&a.current.geometry.setPositions(b.map($=>$.toArray()).flat())}},[]);const d=x.useMemo(()=>w(r,n,e,i),[r,n,e,i]);return x.createElement(Bo,U({ref:Vo([a,u]),points:d},l))}),tr=x.forwardRef(({makeDefault:t,camera:r,regress:n,domElement:e,enableDamping:i=!0,onChange:l,onStart:u,onEnd:a,...c},w)=>{const d=te(T=>T.invalidate),h=te(T=>T.camera),m=te(T=>T.gl),g=te(T=>T.events),b=te(T=>T.setEvents),$=te(T=>T.set),y=te(T=>T.get),C=te(T=>T.performance),j=r||h,R=e||g.connected||m.domElement,E=x.useMemo(()=>new Jn(j),[j]);return Ze(()=>{E.enabled&&E.update()},-1),x.useEffect(()=>(E.connect(R),()=>void E.dispose()),[R,n,E,d]),x.useEffect(()=>{const T=L=>{d(),n&&C.regress(),l&&l(L)},z=L=>{u&&u(L)},D=L=>{a&&a(L)};return E.addEventListener("change",T),E.addEventListener("start",z),E.addEventListener("end",D),()=>{E.removeEventListener("start",z),E.removeEventListener("end",D),E.removeEventListener("change",T)}},[l,u,a,E,d,b]),x.useEffect(()=>{if(t){const T=y().controls;return $({controls:E}),()=>$({controls:T})}},[t,E]),x.createElement("primitive",U({ref:w,object:E,enableDamping:i},c))});function or(t){const r=t+"Geometry";return x.forwardRef(({args:n,children:e,...i},l)=>x.createElement("mesh",U({ref:l},i),x.createElement(r,{attach:"geometry",args:n}),e))}const nr=or("circle"),J=10,rr=2,sr=2,Wt=10,ir=10,Ht=(t,r,n)=>{const l=new N().subVectors(r,t).normalize().multiplyScalar(n);return new N().addVectors(t,l)},ar=(t,r,n,e)=>{const i=new N().lerpVectors(t,r,.5),l=new N().subVectors(r,t).normalize(),u=new N(-l.y,l.x,l.z).normalize(),a=(n-e/2)*ir;return new N().addVectors(i,u.multiplyScalar(a))},ho=({links:t,nodes:r,onEdgeClick:n})=>{const e=x.useRef(null),{camera:i}=te(),l=new N,u=new N,a=new N,c=new N,w=new N,d=new N,h=new N,m=new N;Ze(()=>{e.current&&r&&e.current.children.forEach((b,$)=>{var V,f,_,F;const y=t[$];if(!y)return;const C=r.find(S=>S.ref_id===y.target),j=r.find(S=>S.ref_id===y.source);l.set((j==null?void 0:j.x)||0,(j==null?void 0:j.y)||0,(j==null?void 0:j.z)||0),u.set((C==null?void 0:C.x)||0,(C==null?void 0:C.y)||0,(C==null?void 0:C.z)||0);const R=b.children[0],E=b.children[1],T=b.children[2],z=b.children[3],D=t.filter(S=>S.source===y.source&&S.target===y.target||S.source===y.target&&S.target===y.source).length,L=t.filter((S,G)=>G<$&&(S.source===y.source&&S.target===y.target||S.source===y.target&&S.target===y.source)).length;if((j==null?void 0:j.ref_id)===(C==null?void 0:C.ref_id)){const[S,G,Z]=zo(l);(V=R.setPoints)==null||V.call(R,l,Z,S),(f=E.setPoints)==null||f.call(E,Z,u,S),T.position.set(Z.x,Z.y,G.z),T.lookAt(S),T.rotateX(-Math.PI/2),z.position.set(Z.x,Z.y,G.z),z.lookAt(i.position)}else{m.copy(Ht(l,u,J)),h.copy(Ht(u,l,J+.5)),a.lerpVectors(m,h,.5),D>1?a.copy(ar(m,h,L,D)):a.lerpVectors(m,h,.5);const S=30;c.subVectors(h,m).normalize().multiplyScalar(S/2),w.subVectors(a,c),d.addVectors(a,c);const G=new N().addVectors(m,w).multiplyScalar(.5),Z=new N().addVectors(d,h).multiplyScalar(.5);(_=R.setPoints)==null||_.call(R,m,w,G),(F=E.setPoints)==null||F.call(E,d,h,Z),T.position.set(h.x,h.y,h.z),T.lookAt(m),T.rotateX(-Math.PI/2),z.position.set(a.x,a.y,a.z),z.lookAt(i.position);let ee=Math.atan2(h.y-m.y,h.x-m.x);(ee>Math.PI/2||ee<-Math.PI/2)&&(ee+=Math.PI),z.rotation.set(0,0,ee);const ae=m.distanceTo(h),q=ae<S?2:4;ae<S?z.text=mt(y.edge_type,Wt):z.text=y.edge_type,z.fontSize=q}})});const g=(b,$,y,C)=>{if(b==="CHILD_OF"||$==="string"||y==="string")return;const j=r==null?void 0:r.find(z=>z.ref_id===$),R=r==null?void 0:r.find(z=>z.ref_id===y),E=(j==null?void 0:j.type)||"",T=(R==null?void 0:R.type)||"";n(C,b,E,T)};return o.jsx("group",{ref:e,children:t.map(b=>o.jsxs("group",{children:[o.jsx(Yt,{color:"white",end:[0,0,0],lineWidth:1,start:[0,0,0]}),o.jsx(Yt,{color:"white",end:[0,0,0],lineWidth:1,start:[0,0,0]}),o.jsxs("mesh",{position:new N(0,0,0),children:[o.jsx("coneGeometry",{args:[rr,sr,32]}),o.jsx("meshBasicMaterial",{color:"white"})]}),o.jsx(lo,{anchorX:"center",anchorY:"middle",color:"white",...uo,lineHeight:1,maxWidth:20,onClick:()=>g(b.edge_type,b.source,b.target,b.ref_id),rotation:[0,0,0],textAlign:"center",children:mt(b.edge_type,Wt)})]},b.ref_id))})};ho.displayName="Lines";const cr=["#ff13c9","#5af0ff","#3233ff","#c2f0c2","#ff6666","#99ccff","#ffb3b3"],lr=O.div`
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
`,dr=O(Do)`
  position: absolute;
`;new Xo(2,2,2);const mo=x.memo(({node:t,setSelectedNode:r,onSimulationUpdate:n,isSelected:e})=>{var $;const i=x.useRef(null),[l,u]=x.useState(!1);console.log(e);const{size:a,camera:c}=te(),w=Oo(y=>{if(t.type==="Thing")return;const{xy:[C,j],down:R,dragging:E,first:T,elapsedTime:z}=y;if(!(!E||T||z<100)&&R&&i.current){n();const D=(C-a.left)/window.innerWidth*a.width,L=(j-a.top)/window.innerHeight*a.height,_=new N(D/a.width*2-1,-L/a.height*2+1,0).unproject(c).multiply(new N(1,1,0)).clone();t.fx=_.x,t.fy=_.y}});Ze(()=>{i.current&&i.current.position.set(t.x||0,t.y||0,0)});const d=cr[($=t==null?void 0:t.children)==null?void 0:$.length]||"red",h=y=>{y.stopPropagation(),t.type!=="Thing"&&r()},m=mt(t.type||"",J),g=()=>{u(!0)},b=()=>{u(!1)};return o.jsxs("mesh",{ref:i,onClick:h,...w(),onPointerOut:b,onPointerOver:g,position:new N(t.x,t.y,0),children:[o.jsx(nr,{args:[J,30,20],children:o.jsx("meshStandardMaterial",{attach:"material",color:d})}),o.jsx(lo,{...uo,clipRect:[-J,-J,J,J],color:"#000",fontSize:2,maxWidth:J*2,name:t.type,textAlign:"left",children:m}),l&&o.jsx(dr,{position:[0,5,0],zIndexRange:[100,0],children:o.jsx(lr,{children:t.type})})]})});mo.displayName="Node";const ur=({simulation:t,setSelectedSchemaId:r,selectedId:n,setIsAddEdgeNode:e})=>{const[i]=so(u=>[u.schemas]),l=()=>{t&&(t.alpha(.05),t.restart())};return o.jsx(o.Fragment,{children:i.map((u,a)=>{const c=t.nodes()[a];return c?o.jsx(mo,{isSelected:c.ref_id===n,node:c,onSimulationUpdate:l,setSelectedNode:()=>{e(!1),r(c.ref_id)}},c.ref_id):null})})},pr=({schemasWithPositions:t,filteredLinks:r,setSelectedSchemaId:n,selectedSchemaId:e,setIsAddEdgeNode:i,onEdgeClick:l})=>{const[u,a]=x.useState(null),c=_t(t),w=_t(r);return x.useEffect(()=>{if(!t.length||!r.length)return;const d=structuredClone(t),h=structuredClone(r);if(u){c&&c.length!==t.length&&w&&w.length!==r.length&&(u.nodes(d).force("link",Tt(h).id(g=>g.ref_id).distance(100)).force("charge",Mt()).force("center",At()).force("collide",kt(J+5)).alpha(.5).restart(),a({...u}));return}const m=Po(d).force("link",Tt(h).id(g=>g.ref_id).distance(120)).force("charge",Mt().strength(-100)).force("center",At()).force("collide",kt(J+5));a(m)},[t,u,r,c,w]),Ze(()=>{}),u?o.jsxs(o.Fragment,{children:[o.jsx(ho,{links:r,nodes:u.nodes(),onEdgeClick:l}),o.jsx(ur,{selectedId:e,setIsAddEdgeNode:i,setSelectedSchemaId:n,simulation:u})]}):null},dt=new Ko(0),fr=({selectedSchemaId:t,links:r,schemasWithPositions:n,setSelectedSchemaId:e,setIsAddEdgeNode:i,onEdgeClick:l})=>o.jsxs(Fo,{camera:{zoom:1,position:[0,0,200]},id:"schema-canvas",linear:!0,orthographic:!0,children:[o.jsx("color",{args:[dt.r,dt.g,dt.b],attach:"background"}),To&&o.jsx(Go,{position:"right-bottom"}),o.jsx(hr,{}),o.jsx(Yo,{}),o.jsx(pr,{filteredLinks:r,onEdgeClick:l,schemasWithPositions:n,selectedSchemaId:t,setIsAddEdgeNode:i,setSelectedSchemaId:e})]}),hr=()=>{x.useEffect(()=>{const n=i=>{["Meta","Alt"].includes(i.key)&&(document.body.style.cursor="grab")},e=i=>{["Meta","Alt"].includes(i.key)&&(document.body.style.cursor="default")};return window.addEventListener("keydown",n,!1),window.addEventListener("keyup",e,!1),()=>{window.removeEventListener("keydown",n,!1),window.removeEventListener("keyup",e,!1)}},[]);const t=()=>{document.body.style.cursor="grabbing"},r=()=>{document.body.style.cursor="default"};return o.jsx(tr,{dampingFactor:1,enableDamping:!0,enablePan:!0,enableRotate:!1,enableZoom:!0,maxZoom:20,minZoom:1,onEnd:r,onStart:t,zoomSpeed:1.5,zoomToCursor:!0})},mr=t=>o.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 18 19",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:o.jsx("path",{d:"M9.5002 0.270145C10.3742 0.270145 11.1128 0.571885 11.7161 1.17537C12.3193 1.77868 12.6209 2.51732 12.6209 3.39129C12.6209 4.17273 12.3716 4.85117 11.873 5.42662C11.3744 6.00189 10.7483 6.34792 9.99474 6.46469L9.99474 9.0052L13.8388 9.0052C14.2785 9.0052 14.6549 9.16172 14.9679 9.47476C15.2809 9.78779 15.4375 10.1642 15.4375 10.6039L15.4375 12.564L17.0171 12.564C17.2435 12.564 17.4334 12.6405 17.5866 12.7936C17.7396 12.9468 17.8162 13.1366 17.8162 13.3631L17.8162 17.5042C17.8162 17.7389 17.7396 17.9321 17.5866 18.0836C17.4334 18.2352 17.2435 18.311 17.0171 18.311L12.8759 18.311C12.6412 18.311 12.4481 18.2345 12.2965 18.0814C12.1449 17.9282 12.0692 17.7384 12.0692 17.5119L12.0692 13.3707C12.0692 13.136 12.1457 12.9429 12.2987 12.7913C12.452 12.6398 12.6418 12.564 12.8682 12.564L14.4479 12.564L14.4479 10.6039C14.4479 10.4262 14.3908 10.2803 14.2767 10.166C14.1624 10.0518 14.0164 9.99478 13.8388 9.99478L5.16112 9.99478C4.98349 9.99478 4.83753 10.0518 4.72323 10.166C4.6091 10.2803 4.55203 10.4262 4.55203 10.6039L4.55203 12.6115C5.3056 12.7283 5.93168 13.0743 6.43026 13.6496C6.92885 14.225 7.17814 14.9034 7.17814 15.6849C7.17814 16.5587 6.87648 17.2973 6.27317 17.9008C5.66969 18.5041 4.93096 18.8058 4.05699 18.8058C3.18303 18.8058 2.44439 18.5041 1.84107 17.9008C1.23792 17.2973 0.936342 16.5587 0.936343 15.6849C0.936343 14.9034 1.18564 14.225 1.68422 13.6496C2.18281 13.0743 2.80888 12.7283 3.56245 12.6115L3.56245 10.6039C3.56245 10.1642 3.71897 9.78779 4.03201 9.47476C4.34504 9.16172 4.72142 9.0052 5.16112 9.0052L9.00516 9.0052L9.00516 6.46469C8.25159 6.34792 7.62552 6.00189 7.12693 5.42662C6.62835 4.85117 6.37905 4.17273 6.37905 3.39129C6.37905 2.51732 6.68071 1.77868 7.28403 1.17537C7.88751 0.571885 8.62623 0.270145 9.5002 0.270145Z",fill:"currentColor"})}),xr=({onClose:t,activeTab:r,setActiveTab:n})=>o.jsxs(gr,{children:[o.jsxs(br,{children:[o.jsx(mr,{}),o.jsx(yr,{children:"Blueprint"})]}),o.jsxs(wr,{children:[o.jsx(Ut,{active:r==="all",onClick:()=>n("all"),children:"Show All"}),o.jsx(Ut,{active:r==="parent",onClick:()=>n("parent"),children:"Parent Only"})]}),o.jsx(jr,{onClick:t,children:o.jsx(yt,{})})]}),gr=O(v)`
  background-color: ${M.BG1};
  height: 64px;
  width: 100%;
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
  justify-content: space-between;
  padding: 17px;
  border-bottom: 1px solid ${M.black};
`,br=O.div`
  display: flex;
  align-items: center;
  font-size: 22px;
  font-weight: 400;
  font-family: Barlow;

  svg {
    color: ${M.GRAY6};
    margin-left: 6px;
  }
`,yr=O.span`
  color: ${M.white};
  font-weight: 400;
  font-family: Barlow;
  margin-left: 15px;
  font-size: 22px;
`,wr=O.div`
  display: flex;
  position: absolute;
  top: 16px;
  right: 60px;
  background-color: ${M.divider2};
  border-radius: 6px;
  padding: 2px;
`,Ut=O.div`
  color: ${t=>t.active?M.white:M.GRAY6};
  background-color: ${t=>t.active?M.BUTTON1:"transparent"};
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
`,jr=O.div`
  position: absolute;
  top: 16px;
  right: 12px;
  font-size: 20px;
  color: ${M.GRAY6};
  cursor: pointer;
  z-index: 1;

  svg {
    width: 30px;
    height: 32px;
  }
`,vr=t=>o.jsxs("svg",{width:"1em",height:"1em",viewBox:"0 0 23 22",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:[o.jsx("mask",{id:"mask0_8954_27793",maskUnits:"userSpaceOnUse",x:"10",y:"-3",width:"16",height:"16",children:o.jsx("rect",{x:"10",y:"-3",width:"1em",height:"1em",fill:"currentColor"})}),o.jsx("g",{mask:"url(#mask0_8954_27793)",children:o.jsx("path",{d:"M17.5 5.50005H14.1666C14.025 5.50005 13.9062 5.45212 13.8104 5.35625C13.7145 5.26037 13.6666 5.14157 13.6666 4.99985C13.6666 4.85812 13.7145 4.73939 13.8104 4.64367C13.9062 4.54794 14.025 4.50008 14.1666 4.50008H17.5V1.16675C17.5 1.02508 17.5479 0.906331 17.6438 0.810498C17.7396 0.714665 17.8584 0.666748 18.0002 0.666748C18.1419 0.666748 18.2606 0.714665 18.3563 0.810498C18.4521 0.906331 18.4999 1.02508 18.4999 1.16675V4.50008H21.8333C21.9749 4.50008 22.0937 4.54802 22.1895 4.64388C22.2853 4.73976 22.3333 4.85856 22.3333 5.00028C22.3333 5.14202 22.2853 5.26074 22.1895 5.35647C22.0937 5.45219 21.9749 5.50005 21.8333 5.50005H18.4999V8.83338C18.4999 8.97505 18.452 9.0938 18.3561 9.18963C18.2602 9.28547 18.1414 9.33338 17.9997 9.33338C17.858 9.33338 17.7393 9.28547 17.6435 9.18963C17.5478 9.0938 17.5 8.97505 17.5 8.83338V5.50005Z",fill:"currentColor"})}),o.jsx("path",{d:"M1.33333 6C1.33333 7.47276 2.52724 8.66667 4 8.66667C5.47276 8.66667 6.66667 7.47276 6.66667 6C6.66667 4.52724 5.47276 3.33333 4 3.33333C2.52724 3.33333 1.33333 4.52724 1.33333 6ZM14.3333 19C14.3333 20.4728 15.5272 21.6667 17 21.6667C18.4728 21.6667 19.6667 20.4728 19.6667 19C19.6667 17.5272 18.4728 16.3333 17 16.3333C15.5272 16.3333 14.3333 17.5272 14.3333 19ZM3.64645 6.35355L16.6464 19.3536L17.3536 18.6464L4.35355 5.64645L3.64645 6.35355Z",fill:"currentColor"})]}),Cr=({onCreateNew:t,onAddEdgeNode:r})=>o.jsxs(Er,{children:[o.jsx(ut,{"data-testid":"add-schema-type",onClick:t,children:o.jsx(pt,{children:o.jsx(co,{})})}),o.jsx(ut,{"data-testid":"add-edge",onClick:r,children:o.jsx(pt,{children:o.jsx(vr,{})})}),o.jsx(ut,{disabled:!0,children:o.jsx(pt,{children:o.jsx(ao,{})})})]}),Er=O(v).attrs({align:"flex-start",direction:"column",justify:"flex-start"})`
  flex: 1;
  gap: 17px;
  padding: 16px 0 0 16px;
`,ut=O(v).attrs({align:"center",justify:"center",p:0})`
  position: relative;
  width: 40px;
  height: 40px;
  flex-direction: row;
  color: ${M.GRAY6};
  background: ${({disabled:t})=>t?M.disableBtn:M.BG1};
  cursor: pointer;
  border-radius: 6px;
  transition: ${({theme:t})=>t.transitions.create(["opacity","box-shadow","background-color"])};

  &:hover {
    color: ${({disabled:t})=>t?M.GRAY6:M.white};
  }

  &:active {
    color: ${M.white};
    background: ${({disabled:t})=>t?M.BG1:M.black};
  }

  &.root {
    border-radius: 50%;
    padding: 0;
    align-items: center;
    justify-content: center;
    border: none;
  }
`,pt=O(v)`
  justify-content: center;
  align-items: center;
  font-size: 24px;
`,Pr=({Close:t})=>{const[r,n]=x.useState(""),[e,i]=x.useState(!1),[l,u]=x.useState(!1),[a,c]=x.useState(!1),[w,d]=x.useState({refId:"",edgeType:"",source:"",target:""}),[h,m]=x.useState(!1),[g,b]=x.useState("all"),[$,y,C,j]=so(f=>[f.schemas,f.links,f.setSchemas,f.setSchemaLinks]);x.useEffect(()=>{(async()=>{u(!0);try{const _=await $t(),F=_.schemas.filter(S=>S.ref_id&&!S.is_deleted);C(F.length>0?F:_.schemas),j(_.edges.length>0?_.edges:[]),u(!1)}catch(_){console.error("Error fetching data:",_),u(!1)}})()},[C,j]);const R=f=>{if($.some(F=>F.ref_id===f.ref_id))C($.map(F=>F.ref_id===f.ref_id?{...f,children:[]}:F));else{C([...$,{...f,children:[]}]);const F=$.find(S=>f.parent===S.type);j([...y,{ref_id:`new-link-${y.length}`,edge_type:"CHILD_OF",source:f.ref_id||"new",target:(F==null?void 0:F.ref_id)||"new"}])}},E=async()=>{const f=await $t();C(f.schemas.filter(_=>_.ref_id&&!_.is_deleted&&_.ref_id)),j(f.edges)},T=f=>{C($.filter(_=>_.type!==f))},z=$.map(f=>({...f,children:$.filter(_=>_.parent===f.type).map(_=>_.ref_id||"")})),D=y.filter(f=>z.some(_=>_.ref_id===f.source)&&z.some(_=>_.ref_id===f.target)),L=$.find(f=>f.ref_id===r)||null;if(l)return o.jsx(v,{align:"center",basis:"100%",grow:1,justify:"center",shrink:1,children:o.jsx(ue,{color:M.white})});const V=g==="all"?D:D.filter(f=>f.edge_type==="CHILD_OF");return o.jsxs(o.Fragment,{children:[o.jsx(v,{ml:-20,mr:-20,mt:-20,children:o.jsx(xr,{activeTab:g,onClose:t,setActiveTab:b})}),o.jsxs(v,{align:"stretch",direction:"row",grow:1,children:[o.jsx(v,{mb:-20,ml:-20,children:L||e?o.jsx(Zt,{children:o.jsx(Xt,{children:o.jsx(Gn,{graphLoading:h,onDelete:T,onSchemaCreate:R,onSchemaUpdate:E,selectedSchema:L,setGraphLoading:m,setIsCreateNew:i,setSelectedSchemaId:n})})}):null}),o.jsx(v,{children:a?o.jsx(Zt,{children:o.jsx(Xt,{children:o.jsx(kn,{edgeData:w,setGraphLoading:m,setIsAddEdgeNode:c})})}):null}),o.jsx(v,{children:o.jsx(Cr,{onAddEdgeNode:()=>{c(!0),i(!1),n(""),d({refId:"",edgeType:"",source:"",target:""})},onCreateNew:()=>{c(!1),i(!0),n("")}})}),o.jsx(Tr,{direction:"row",grow:1,children:o.jsx(Mr,{children:h?o.jsx(v,{align:"center",basis:"100%",grow:1,justify:"center",shrink:1,children:o.jsx(ue,{color:M.white})}):o.jsx(fr,{links:V,onEdgeClick:(f,_,F,S)=>{d({refId:f,edgeType:_,source:F,target:S}),c(!0),i(!1),n("")},schemasWithPositions:z,selectedSchemaId:r,setIsAddEdgeNode:c,setSelectedSchemaId:n})})})]})]})},Tr=O(v)`
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
`,Zt=O(v)`
  width: 100%;
  max-width: 400px;
  background: ${M.BG1};
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
`,Xt=O.div`
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
`,Mr=O(v)`
  flex: 1 1 100%;
`,Ar=()=>{const{close:t}=no("blueprintGraph"),r=()=>{t()};return o.jsx(Mo,{background:"black",id:"blueprintGraph",kind:"full",preventOutsideClose:!0,children:o.jsx(Pr,{Close:r})})},Qr=x.memo(Ar);export{Qr as BlueprintModal};
