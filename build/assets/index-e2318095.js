import{r as m,g as to,c as oo,s as _e,b as U,u as no,l as Co,_ as ro,j as o,e as io,bv as qe,bw as bt,f as so,h as ge,d as Tt,ak as Eo,al as Po,p as v,q as b,bg as yt,E as ie,F as y,b0 as Ke,bx as To,by as rt,bz as ko,bf as ao,U as co,bA as $o,a$ as xe,ah as mt,a2 as kt,a1 as $t,a0 as Mt,Z as At,Y as Mo,O as Ao,au as Ot}from"./index-c26382fd.js";import{B as Oo}from"./index-ee0cdd24.js";import{z as wt,B as Qe,F as lo,d as jt,K as _o,y as Io,E as So,L as zo,g as po}from"./index-e5d99902.js";import{O as No,n as Ro,a as _t,N as uo}from"./constants-a6b58f4d.js";import{T as Xe}from"./index-192d9e03.js";import{A as Ae}from"./index-2b144a49.js";import{C as ue}from"./ClipLoader-c0585ed2.js";import{D as fo}from"./DeleteIcon-275a770f.js";import{P as ho}from"./PlusIcon-a7c32caa.js";import{p as xt,c as Bo,g as Lo}from"./index-44e303ef.js";import{S as Vo,F as Do}from"./FormControlLabel-82f2079f.js";import{e as Fo}from"./Stack-2d1a7df4.js";import{T as Go,a as Wo}from"./Tabs-9bd0ab01.js";import{g as Ho,m as Yo,u as te,b as Je,T as mo,i as xo,H as Uo,j as It,k as Zo,P as Ko,l as Xo,F as qo,C as Qo}from"./CreateEdgeIcon-6acf8abb.js";import{Z as Jo,_ as en,E as tn,V as N,$ as he,a0 as me,a1 as St,P as Ye,a2 as Ue,a3 as zt,a as Q,a4 as on,G as nn,C as rn}from"./three.module-2ce81f73.js";import{t as gt}from"./index-55cfc08a.js";import"./index.esm-82e1df6f.js";import"./createSvgIcon-84e9cba3.js";import"./TextareaAutosize-bca35e0e.js";import"./Typography-2437b605.js";const sn=m.createContext(),Nt=sn;function an(t){return to("MuiGrid",t)}const cn=[0,1,2,3,4,5,6,7,8,9,10],ln=["column-reverse","column","row-reverse","row"],dn=["nowrap","wrap-reverse","wrap"],Me=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12],pn=oo("MuiGrid",["root","container","item","zeroMinWidth",...cn.map(t=>`spacing-xs-${t}`),...ln.map(t=>`direction-xs-${t}`),...dn.map(t=>`wrap-xs-${t}`),...Me.map(t=>`grid-xs-${t}`),...Me.map(t=>`grid-sm-${t}`),...Me.map(t=>`grid-md-${t}`),...Me.map(t=>`grid-lg-${t}`),...Me.map(t=>`grid-xl-${t}`)]),Oe=pn,un=["className","columns","columnSpacing","component","container","direction","item","rowSpacing","spacing","wrap","zeroMinWidth"];function be(t){const r=parseFloat(t);return`${r}${String(t).replace(String(r),"")||"px"}`}function fn({theme:t,ownerState:r}){let n;return t.breakpoints.keys.reduce((e,s)=>{let c={};if(r[s]&&(n=r[s]),!n)return e;if(n===!0)c={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if(n==="auto")c={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{const p=qe({values:r.columns,breakpoints:t.breakpoints.values}),a=typeof p=="object"?p[s]:p;if(a==null)return e;const l=`${Math.round(n/a*1e8)/1e6}%`;let $={};if(r.container&&r.item&&r.columnSpacing!==0){const d=t.spacing(r.columnSpacing);if(d!=="0px"){const u=`calc(${l} + ${be(d)})`;$={flexBasis:u,maxWidth:u}}}c=U({flexBasis:l,flexGrow:0,maxWidth:l},$)}return t.breakpoints.values[s]===0?Object.assign(e,c):e[t.breakpoints.up(s)]=c,e},{})}function hn({theme:t,ownerState:r}){const n=qe({values:r.direction,breakpoints:t.breakpoints.values});return bt({theme:t},n,e=>{const s={flexDirection:e};return e.indexOf("column")===0&&(s[`& > .${Oe.item}`]={maxWidth:"none"}),s})}function go({breakpoints:t,values:r}){let n="";Object.keys(r).forEach(s=>{n===""&&r[s]!==0&&(n=s)});const e=Object.keys(t).sort((s,c)=>t[s]-t[c]);return e.slice(0,e.indexOf(n))}function mn({theme:t,ownerState:r}){const{container:n,rowSpacing:e}=r;let s={};if(n&&e!==0){const c=qe({values:e,breakpoints:t.breakpoints.values});let p;typeof c=="object"&&(p=go({breakpoints:t.breakpoints.values,values:c})),s=bt({theme:t},c,(a,l)=>{var $;const d=t.spacing(a);return d!=="0px"?{marginTop:`-${be(d)}`,[`& > .${Oe.item}`]:{paddingTop:be(d)}}:($=p)!=null&&$.includes(l)?{}:{marginTop:0,[`& > .${Oe.item}`]:{paddingTop:0}}})}return s}function xn({theme:t,ownerState:r}){const{container:n,columnSpacing:e}=r;let s={};if(n&&e!==0){const c=qe({values:e,breakpoints:t.breakpoints.values});let p;typeof c=="object"&&(p=go({breakpoints:t.breakpoints.values,values:c})),s=bt({theme:t},c,(a,l)=>{var $;const d=t.spacing(a);return d!=="0px"?{width:`calc(100% + ${be(d)})`,marginLeft:`-${be(d)}`,[`& > .${Oe.item}`]:{paddingLeft:be(d)}}:($=p)!=null&&$.includes(l)?{}:{width:"100%",marginLeft:0,[`& > .${Oe.item}`]:{paddingLeft:0}}})}return s}function gn(t,r,n={}){if(!t||t<=0)return[];if(typeof t=="string"&&!Number.isNaN(Number(t))||typeof t=="number")return[n[`spacing-xs-${String(t)}`]];const e=[];return r.forEach(s=>{const c=t[s];Number(c)>0&&e.push(n[`spacing-${s}-${String(c)}`])}),e}const bn=_e("div",{name:"MuiGrid",slot:"Root",overridesResolver:(t,r)=>{const{ownerState:n}=t,{container:e,direction:s,item:c,spacing:p,wrap:a,zeroMinWidth:l,breakpoints:$}=n;let d=[];e&&(d=gn(p,$,r));const u=[];return $.forEach(x=>{const g=n[x];g&&u.push(r[`grid-${x}-${String(g)}`])}),[r.root,e&&r.container,c&&r.item,l&&r.zeroMinWidth,...d,s!=="row"&&r[`direction-xs-${String(s)}`],a!=="wrap"&&r[`wrap-xs-${String(a)}`],...u]}})(({ownerState:t})=>U({boxSizing:"border-box"},t.container&&{display:"flex",flexWrap:"wrap",width:"100%"},t.item&&{margin:0},t.zeroMinWidth&&{minWidth:0},t.wrap!=="wrap"&&{flexWrap:t.wrap}),hn,mn,xn,fn);function yn(t,r){if(!t||t<=0)return[];if(typeof t=="string"&&!Number.isNaN(Number(t))||typeof t=="number")return[`spacing-xs-${String(t)}`];const n=[];return r.forEach(e=>{const s=t[e];if(Number(s)>0){const c=`spacing-${e}-${String(s)}`;n.push(c)}}),n}const wn=t=>{const{classes:r,container:n,direction:e,item:s,spacing:c,wrap:p,zeroMinWidth:a,breakpoints:l}=t;let $=[];n&&($=yn(c,l));const d=[];l.forEach(x=>{const g=t[x];g&&d.push(`grid-${x}-${String(g)}`)});const u={root:["root",n&&"container",s&&"item",a&&"zeroMinWidth",...$,e!=="row"&&`direction-xs-${String(e)}`,p!=="wrap"&&`wrap-xs-${String(p)}`,...d]};return so(u,an,r)},jn=m.forwardRef(function(r,n){const e=no({props:r,name:"MuiGrid"}),{breakpoints:s}=Co(),c=Fo(e),{className:p,columns:a,columnSpacing:l,component:$="div",container:d=!1,direction:u="row",item:x=!1,rowSpacing:g,spacing:w=0,wrap:O="wrap",zeroMinWidth:j=!1}=c,E=ro(c,un),C=g||w,R=l||w,P=m.useContext(Nt),k=d?a||12:P,S={},D=U({},E);s.keys.forEach(h=>{E[h]!=null&&(S[h]=E[h],delete D[h])});const B=U({},c,{columns:k,container:d,direction:u,item:x,rowSpacing:C,columnSpacing:R,wrap:O,zeroMinWidth:j,spacing:w},S,{breakpoints:s.keys}),V=wn(B);return o.jsx(Nt.Provider,{value:k,children:o.jsx(bn,U({ownerState:B,className:io(V.root,p),as:$,ref:n},D))})}),se=jn;function vn(t){return to("MuiSwitch",t)}const Cn=oo("MuiSwitch",["root","edgeStart","edgeEnd","switchBase","colorPrimary","colorSecondary","sizeSmall","sizeMedium","checked","disabled","input","thumb","track"]),Y=Cn,En=["className","color","edge","size","sx"],Pn=t=>{const{classes:r,edge:n,size:e,color:s,checked:c,disabled:p}=t,a={root:["root",n&&`edge${ge(n)}`,`size${ge(e)}`],switchBase:["switchBase",`color${ge(s)}`,c&&"checked",p&&"disabled"],thumb:["thumb"],track:["track"],input:["input"]},l=so(a,vn,r);return U({},r,l)},Tn=_e("span",{name:"MuiSwitch",slot:"Root",overridesResolver:(t,r)=>{const{ownerState:n}=t;return[r.root,n.edge&&r[`edge${ge(n.edge)}`],r[`size${ge(n.size)}`]]}})(({ownerState:t})=>U({display:"inline-flex",width:34+12*2,height:14+12*2,overflow:"hidden",padding:12,boxSizing:"border-box",position:"relative",flexShrink:0,zIndex:0,verticalAlign:"middle","@media print":{colorAdjust:"exact"}},t.edge==="start"&&{marginLeft:-8},t.edge==="end"&&{marginRight:-8},t.size==="small"&&{width:40,height:24,padding:7,[`& .${Y.thumb}`]:{width:16,height:16},[`& .${Y.switchBase}`]:{padding:4,[`&.${Y.checked}`]:{transform:"translateX(16px)"}}})),kn=_e(Vo,{name:"MuiSwitch",slot:"SwitchBase",overridesResolver:(t,r)=>{const{ownerState:n}=t;return[r.switchBase,{[`& .${Y.input}`]:r.input},n.color!=="default"&&r[`color${ge(n.color)}`]]}})(({theme:t})=>({position:"absolute",top:0,left:0,zIndex:1,color:t.vars?t.vars.palette.Switch.defaultColor:`${t.palette.mode==="light"?t.palette.common.white:t.palette.grey[300]}`,transition:t.transitions.create(["left","transform"],{duration:t.transitions.duration.shortest}),[`&.${Y.checked}`]:{transform:"translateX(20px)"},[`&.${Y.disabled}`]:{color:t.vars?t.vars.palette.Switch.defaultDisabledColor:`${t.palette.mode==="light"?t.palette.grey[100]:t.palette.grey[600]}`},[`&.${Y.checked} + .${Y.track}`]:{opacity:.5},[`&.${Y.disabled} + .${Y.track}`]:{opacity:t.vars?t.vars.opacity.switchTrackDisabled:`${t.palette.mode==="light"?.12:.2}`},[`& .${Y.input}`]:{left:"-100%",width:"300%"}}),({theme:t,ownerState:r})=>U({"&:hover":{backgroundColor:t.vars?`rgba(${t.vars.palette.action.activeChannel} / ${t.vars.palette.action.hoverOpacity})`:Tt(t.palette.action.active,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},r.color!=="default"&&{[`&.${Y.checked}`]:{color:(t.vars||t).palette[r.color].main,"&:hover":{backgroundColor:t.vars?`rgba(${t.vars.palette[r.color].mainChannel} / ${t.vars.palette.action.hoverOpacity})`:Tt(t.palette[r.color].main,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${Y.disabled}`]:{color:t.vars?t.vars.palette.Switch[`${r.color}DisabledColor`]:`${t.palette.mode==="light"?Eo(t.palette[r.color].main,.62):Po(t.palette[r.color].main,.55)}`}},[`&.${Y.checked} + .${Y.track}`]:{backgroundColor:(t.vars||t).palette[r.color].main}})),$n=_e("span",{name:"MuiSwitch",slot:"Track",overridesResolver:(t,r)=>r.track})(({theme:t})=>({height:"100%",width:"100%",borderRadius:14/2,zIndex:-1,transition:t.transitions.create(["opacity","background-color"],{duration:t.transitions.duration.shortest}),backgroundColor:t.vars?t.vars.palette.common.onBackground:`${t.palette.mode==="light"?t.palette.common.black:t.palette.common.white}`,opacity:t.vars?t.vars.opacity.switchTrack:`${t.palette.mode==="light"?.38:.3}`})),Mn=_e("span",{name:"MuiSwitch",slot:"Thumb",overridesResolver:(t,r)=>r.thumb})(({theme:t})=>({boxShadow:(t.vars||t).shadows[1],backgroundColor:"currentColor",width:20,height:20,borderRadius:"50%"})),An=m.forwardRef(function(r,n){const e=no({props:r,name:"MuiSwitch"}),{className:s,color:c="primary",edge:p=!1,size:a="medium",sx:l}=e,$=ro(e,En),d=U({},e,{color:c,edge:p,size:a}),u=Pn(d),x=o.jsx(Mn,{className:u.thumb,ownerState:d});return o.jsxs(Tn,{className:io(u.root,s),sx:l,ownerState:d,children:[o.jsx(kn,U({type:"checkbox",icon:x,checkedIcon:x,ref:n,ownerState:d},$,{classes:U({},u,{root:u.switchBase})})),o.jsx($n,{className:u.track,ownerState:d})]})}),bo=An,On={type:"",parent:""},Rt=({onSelect:t,dataTestId:r,edgeLink:n,hideSelectAll:e,placeholder:s})=>{const c=wt({mode:"onChange",defaultValues:On}),{watch:p,setValue:a}=c,[l,$]=m.useState([]),[d,u]=m.useState(!1),x=j=>{a("parent",(j==null?void 0:j.value)||""),t(j==null?void 0:j.value)},g=j=>j.charAt(0).toUpperCase()+j.slice(1);m.useEffect(()=>{(async()=>{u(!0);try{const C=(await yt()).schemas.filter(P=>!P.is_deleted&&P.type).map(P=>(P==null?void 0:P.type)==="thing"?{label:"No Parent",value:P.type}:{label:g(P.type),value:P.type});$(e?C:[{label:"Select all",value:"all"},...C]),n&&a("parent",n)}catch(E){console.warn(E)}finally{u(!1)}})()},[n,a,e]);const w=p("parent"),O=()=>{const j=l==null?void 0:l.find(E=>E.value===w);if(j)return j;if(n)return{label:n,value:n}};return o.jsx(_n,{dataTestId:r,disabled:!!n,isLoading:d,onSelect:x,options:l||No,placeholder:s,selectedValue:O()})},_n=v(Ae)`
  .MuiInputBase-input {
    font-family: Barlow;
    font-size: 14px;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0.01em;
    text-align: left;
    color: ${b.white};
    padding-right: -8px;

    &::placeholder {
      font-family: Barlow;
      font-size: 14px;
      font-weight: 400;
      line-height: 16px;
      letter-spacing: 0.01em;
      text-align: left;
      color: ${b.GRAY7};
      opacity: 1;
    }
  }

  && .MuiInput-input.MuiInputBase-input {
    padding-left: 0;
  }
`,In=({selectedType:t,setSelectedFromNode:r,setSelectedToNode:n,edgeLinkData:e,selectedFromNode:s,selectedToNode:c})=>{const p=c==="all",a=s==="all";return o.jsxs(y,{mt:8,children:[o.jsxs(y,{mb:25,children:[o.jsx(y,{mb:5,children:o.jsx(it,{children:"Source"})}),o.jsx(Rt,{dataTestId:"from_node",edgeLink:e==null?void 0:e.source,hideSelectAll:p,onSelect:r,placeholder:"Source Name"})]}),o.jsxs(y,{mb:10,children:[o.jsx(y,{mb:5,children:o.jsx(it,{children:"Edge Name"})}),o.jsx(y,{mb:12,children:o.jsx(Xe,{id:"cy-item-name",maxLength:250,name:"type",placeholder:"Enter Edge Name",rules:{...Ke,pattern:{message:"No leading whitespace allowed",value:Ro}},value:t})})]}),o.jsxs(y,{mb:25,children:[o.jsx(y,{mb:5,children:o.jsx(it,{children:"Destination"})}),o.jsx(Rt,{dataTestId:"to_node",edgeLink:e==null?void 0:e.target,hideSelectAll:a,onSelect:n,placeholder:"Select Destination"})]})]})},it=v(ie)`
  font-family: Barlow;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0.01em;
  text-align: left;
  margin-left: 1px;
  color: ${b.mainBottomIcons};
`,Sn=({onCancel:t,edgeLinkData:r,setGraphLoading:n})=>{var S,D,B;const e=wt({mode:"onChange"}),{setValue:s,getValues:c}=e,[p,a]=m.useState(!1),[l,$]=m.useState(!1),[d,u]=m.useState(""),[x,g]=m.useState(""),[w,O]=m.useState(""),j=e.watch("type");m.useEffect(()=>{s("type",r==null?void 0:r.edgeType)},[r==null?void 0:r.edgeType,s]),m.useEffect(()=>{u(j)},[j]);const E=e.handleSubmit(async V=>{a(!0),n(!0);const h={source:x,target:w,edge_type:V.type},_={ref_id:r==null?void 0:r.refId,edge_type:V.type};try{if(r!=null&&r.refId)await To(_);else if(w&&x)if(x==="all"||w==="all"){const I=(await yt()).schemas.filter(G=>!G.is_deleted&&G.type).map(G=>G.type);x==="all"?await Promise.all(I.map(G=>rt({...h,source:G}))):w==="all"&&await Promise.all(I.map(G=>rt({...h,target:G})))}else await rt(h)}catch(F){console.warn("API Error:",F)}finally{a(!1),n(!1),g(""),O(""),t()}}),C=(D=(S=c())==null?void 0:S.type)==null?void 0:D.trim(),R=C&&((B=r==null?void 0:r.edgeType)==null?void 0:B.trim())!==C,P=r!=null&&r.refId?p||!R:p||!w.trim()||!x.trim()||!d.trim(),k=async()=>{$(!0),n(!0);try{r!=null&&r.refId&&await ko(r==null?void 0:r.refId)}catch(V){console.warn("API Error:",V)}finally{$(!1),n(!1),g(""),O(""),t()}};return o.jsx(lo,{...e,children:o.jsxs("form",{id:"add-type-form",onSubmit:E,children:[o.jsx(In,{edgeLinkData:r,selectedFromNode:x,selectedToNode:w,selectedType:d,setSelectedFromNode:g,setSelectedToNode:O}),o.jsxs(y,{direction:"row",justify:"space-between",mt:20,children:[(r==null?void 0:r.refId)&&o.jsx(y,{direction:"column",children:o.jsxs(Nn,{color:"secondary",disabled:l,onClick:k,size:"large",style:{marginRight:20},variant:"contained",children:["Delete",l&&o.jsxs(Bt,{children:[o.jsx(ue,{color:b.lightGray,size:12})," "]})]})}),o.jsxs(zn,{color:"secondary",disabled:P,onClick:E,size:"large",variant:"contained",children:["Confirm",p&&o.jsxs(Bt,{children:[o.jsx(ue,{color:b.lightGray,size:12})," "]})]})]})]})})},zn=v(Qe)`
  width: 293px !important;
  margin: 0 0 10px auto !important;
`,Bt=v.span`
  margin-top: 2px;
`,Nn=v(Qe)`
  && {
    color: ${b.primaryRed};
    background-color: rgba(237, 116, 116, 0.1);

    &:hover,
    &:active,
    &:focus {
      color: ${b.primaryRed};
      background-color: rgba(237, 116, 116, 0.2);
    }
  }
`,Rn=({setIsAddEdgeNode:t,edgeData:r,setGraphLoading:n})=>{const e=()=>{t(!1)};return o.jsxs(y,{children:[o.jsxs(Ln,{align:"center",direction:"row",justify:"space-between",children:[o.jsx(Dn,{"data-testid":"edge-modal-title",children:r!=null&&r.refId?"Edit Edge":"Add Edge"}),o.jsx(Bn,{"data-testid":"close-sidebar-sub-view",onClick:e,children:o.jsx(jt,{})})]}),o.jsx(Vn,{}),o.jsx(Sn,{edgeLinkData:r,onCancel:e,setGraphLoading:n})]})},Bn=v(y)`
  font-size: 32px;
  color: ${b.white};
  cursor: pointer;

  svg {
    color: ${b.GRAY6};
  }

  &:hover {
    svg {
      color: ${b.white};
    }
  }
`,Ln=v(y)`
  margin-bottom: 16px;
`,Vn=v.div`
  border-bottom: 1px solid ${b.black};
  width: calc(100% + 32px);
  margin: 0 -16px 16px;
  opacity: 0.3;
`,Dn=v(ie)`
  font-family: Barlow;
  font-size: 22px;
  font-weight: 600;
  line-height: 16px;
  letter-spacing: 0.01em;
  text-align: left;
  margin-left: 2px;
  color: ${b.white};
`,Fn=/^[a-z0-9_]+$/,Gn=({parentParam:t,onDelete:r})=>{const[n,e]=m.useState(!1),[s,c]=m.useState([]),{fields:p,append:a,replace:l,remove:$}=_o({name:"attributes"}),{setValue:d,watch:u}=Io();return m.useEffect(()=>{const x=async()=>{try{let g=[{required:!1,type:"string",key:""}];if(t!==uo.value.toLowerCase()){e(!0);const w=await ao(t);w.attributes&&typeof w.attributes=="object"?g=xt(w.attributes):g=xt(w)}g=g.filter(w=>w.key!=="node_key"),l(g),c(g)}catch(g){console.warn(g)}finally{e(!1)}};s.length===0&&x()},[t,d,l,s.length]),o.jsxs(o.Fragment,{children:[n?o.jsx(y,{align:"center",children:o.jsx(ue,{color:b.SECONDARY_BLUE,size:"30"})}):o.jsx(Wn,{py:8,children:o.jsx(se,{container:!0,spacing:2,children:p.map((x,g)=>{const w=u(`attributes[${g}].type`),O=u(`attributes[${g}].required`),j=x.isNew||!1,E=["name"].includes(u(`attributes[${g}].key`));return o.jsxs(m.Fragment,{children:[o.jsx(se,{item:!0,xs:5,children:o.jsx(Xe,{autoComplete:"off",className:"text-input",dataTestId:`cy-item-name-${g}`,disabled:!j,id:`cy-item-name-${g}`,maxLength:50,name:`attributes.${g}.key`,placeholder:"Enter value",rules:{...Ke,pattern:{message:"Please avoid special characters, spaces and uppercase",value:Fn}}})}),o.jsx(se,{item:!0,xs:4,children:o.jsx(Ae,{dataTestId:`cy-item-select-${g}`,disabled:E,onSelect:C=>d(`attributes[${g}].type`,C==null?void 0:C.value),options:_t,selectedValue:_t.find(C=>C.value===w)})}),o.jsx(se,{item:!0,xs:3,children:o.jsxs(Yn,{children:[o.jsx(Hn,{checked:O,"data-testid":`cy-item-${g}`,disabled:E,name:`attributes.${g}.required`,onChange:C=>d(`attributes[${g}].required`,C.target.checked)}),!E&&o.jsx(So,{onClick:()=>{$(g),x.key!==void 0&&r&&r(x.key)},children:o.jsx(fo,{})})]})})]},x.id)})})}),o.jsx(y,{align:"flex-start",py:12,children:o.jsx(Un,{"data-testid":"add-attribute-btn",onClick:()=>a({key:"",type:"string",required:!0,isNew:!0}),children:o.jsxs(Zn,{children:[o.jsx(ho,{})," Add Attribute"]})})})]})},Wn=v(y)`
  overflow-y: auto;
  width: calc(100% + 20px);
  max-height: calc(80vh - 300px);
`,Hn=v(t=>o.jsx(bo,{...t}))`
  &.MuiSwitch-root {
    width: 51px;
    height: 38px;
  }
  & .MuiSwitch-switchBase {
    margin-top: 4px;
    &.Mui-checked {
      color: ${b.white};
      & + .MuiSwitch-track {
        background-color: ${b.primaryBlueBorder};
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
    background-color: ${b.BG2};
    opacity: 1;
  }
`,Yn=v.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`,Un=v.button`
  background: transparent;
  width: 149px;
  height: 32px;
  color: ${b.white};
  border: 1px solid ${b.addAttributeBtn};
  padding: 2px 18px 12px 12px;
  margin-top: 2px;
  cursor: pointer;
  border-radius: 6px;
  font-family: Barlow;
  font-size: 14px;
  font-weight: 400;

  &:hover {
    background: ${b.BUTTON1_HOVER};
  }

  &:active {
    background: ${b.BUTTON1_PRESS};
  }
`,Zn=v.span`
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
`,Kn=({parent:t,onDelete:r})=>{const n=t;return o.jsxs(y,{children:[o.jsx(y,{direction:"row",mb:10,children:o.jsxs(se,{container:!0,spacing:2,children:[o.jsx(se,{item:!0,xs:5,children:o.jsx(st,{style:{marginRight:180},children:"Attributes"})}),o.jsx(se,{item:!0,xs:4,children:o.jsx(st,{style:{marginRight:130},children:"Type"})}),o.jsx(se,{item:!0,xs:3,children:o.jsx(st,{children:"Required"})})]})}),n&&o.jsx(Gn,{onDelete:r,parentParam:n},n)]})},st=v(ie)`
  font-size: 15px;
  color: gray;
`,Xn=({setMediaOptions:t,initialOptions:r})=>{const[n,e]=m.useState(r);m.useEffect(()=>{e(r)},[r]);const s=c=>{e(p=>{const a={...p,[c]:!p[c]};return t(a),a})};return o.jsxs(qn,{direction:"column",children:[o.jsx(dt,{}),o.jsx(at,{control:o.jsx(lt,{checked:n.videoAudio,onChange:()=>s("videoAudio")}),label:o.jsx(ct,{active:n.videoAudio,children:"Video / Audio"}),labelPlacement:"start"}),o.jsx(dt,{}),o.jsx(at,{control:o.jsx(lt,{checked:n.image,onChange:()=>s("image")}),label:o.jsx(ct,{active:n.image,children:"Image"}),labelPlacement:"start"}),o.jsx(dt,{}),o.jsx(at,{control:o.jsx(lt,{checked:n.sourceLink,onChange:()=>s("sourceLink")}),label:o.jsx(ct,{active:n.sourceLink,children:"Source Link"}),labelPlacement:"start"})]})},qn=v(y)`
  direction: column;
`,at=v(Do)`
  justify-content: space-between;
  margin-left: 2px !important;
  margin-top: 8px;
  margin-bottom: 8px;
`,ct=v.span`
  color: ${({active:t})=>t?b.white:b.GRAY7};
  font-family: Barlow;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: 0.01em;
  text-align: left;
`,lt=v(t=>o.jsx(bo,{...t}))`
  &.MuiSwitch-root {
    width: 53px;
    height: 39px;
  }
  & .MuiSwitch-switchBase {
    margin-top: 4px;
    &.Mui-checked {
      color: ${b.white};
      & + .MuiSwitch-track {
        background-color: ${b.primaryBlueBorder};
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
    background-color: ${b.BG2};
    opacity: 1;
  }
`,dt=v.div`
  border: 1px solid ${b.BG2};
  width: 100%;
  opacity: 0.5;
`,Lt=t=>o.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 8 8",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:o.jsx("path",{d:"M5.5884 4.12155L3.88306 2.41429C3.8396 2.37079 3.80894 2.32471 3.79108 2.27605C3.77323 2.22738 3.7643 2.17524 3.7643 2.11963C3.7643 2.06401 3.77323 2.01206 3.79108 1.96379C3.80894 1.91553 3.8396 1.86964 3.88306 1.82614L5.5884 0.118886C5.63185 0.0753881 5.67788 0.0446995 5.72649 0.0268199C5.7751 0.00894031 5.82719 0 5.88275 0C5.9383 0 5.99019 0.00894031 6.0384 0.0268199C6.08662 0.0446995 6.13245 0.0753881 6.1759 0.118886L7.88125 1.82614C7.9247 1.86964 7.95536 1.91573 7.97321 1.96439C7.99107 2.01306 8 2.0652 8 2.12081C8 2.17643 7.99107 2.22838 7.97321 2.27664C7.95536 2.32491 7.9247 2.37079 7.88125 2.41429L6.1759 4.12155C6.13245 4.16505 6.08642 4.19574 6.03781 4.21362C5.9892 4.23149 5.93711 4.24043 5.88155 4.24043C5.826 4.24043 5.77412 4.23149 5.7259 4.21362C5.67768 4.19574 5.63185 4.16505 5.5884 4.12155ZM0 3.21787V0.804477C0 0.68544 0.0402151 0.585661 0.120645 0.505141C0.201076 0.424621 0.300743 0.384361 0.419648 0.384361H2.83035C2.94925 0.384361 3.04891 0.424621 3.12934 0.505141C3.20977 0.585661 3.24999 0.68544 3.24999 0.804477V3.21787C3.24999 3.3369 3.20977 3.43668 3.12934 3.5172C3.04891 3.59772 2.94925 3.63798 2.83035 3.63798H0.419648C0.300743 3.63798 0.201076 3.59772 0.120645 3.5172C0.0402151 3.43668 0 3.3369 0 3.21787ZM4.35715 7.57988V5.16649C4.35715 5.04746 4.39737 4.94768 4.4778 4.86716C4.55823 4.78664 4.65789 4.74638 4.77679 4.74638H7.18749C7.3064 4.74638 7.40607 4.78664 7.4865 4.86716C7.56693 4.94768 7.60714 5.04746 7.60714 5.16649V7.57988C7.60714 7.69892 7.56693 7.7987 7.4865 7.87922C7.40607 7.95974 7.3064 8 7.18749 8H4.77679C4.65789 8 4.55823 7.95974 4.4778 7.87922C4.39737 7.7987 4.35715 7.69892 4.35715 7.57988ZM0 7.57988V5.16649C0 5.04746 0.0402151 4.94768 0.120645 4.86716C0.201076 4.78664 0.300743 4.74638 0.419648 4.74638H2.83035C2.94925 4.74638 3.04891 4.78664 3.12934 4.86716C3.20977 4.94768 3.24999 5.04746 3.24999 5.16649V7.57988C3.24999 7.69892 3.20977 7.7987 3.12934 7.87922C3.04891 7.95974 2.94925 8 2.83035 8H0.419648C0.300743 8 0.201076 7.95974 0.120645 7.87922C0.0402151 7.7987 0 7.69892 0 7.57988Z",fill:"currentColor"})}),Qn=()=>o.jsx(Jn,{direction:"column",justify:"flex-end",children:o.jsx(er,{align:"center",justify:"center",children:o.jsx("p",{children:"this is color wrapper"})})}),Jn=v(y)`
  flex: 1;

  .title {
    font-size: 20px;
    color: ${b.white};
    font-family: Barlow;
    font-size: 22px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  .subtitle {
    color: ${b.GRAY3};
    font-family: Barlow;
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  & .filters {
    overflow-x: auto;
  }

  .load-more {
    margin: 8px auto;
    align-self: center;
  }
`,er=v(y)`
  min-height: 0;
  overflow: auto;
  flex: 1;
  width: 100%;
`,tr=t=>{const{children:r,value:n,index:e,...s}=t;return n===e?o.jsx(sr,{"aria-labelledby":`simple-tab-${e}`,hidden:n!==e,id:`simple-tabpanel-${e}`,role:"tabpanel",...s,children:r}):null};function or(t){return{id:`simple-tab-${t}`,"aria-controls":`simple-tabpanel-${t}`}}const nr=()=>{const[t,r]=m.useState(0),n=(s,c)=>{r(c)},e=[{label:"Color",component:Qn}];return o.jsxs(ar,{direction:"column",children:[o.jsx(rr,{"aria-label":"color picker",onChange:n,value:t,children:e.map((s,c)=>o.jsx(ir,{color:b.white,disableRipple:!0,label:s.label,...or(c)},s.label))}),e.map((s,c)=>o.jsx(tr,{index:c,value:t,children:o.jsx(s.component,{})},s.label))]})},rr=v(Go)`
  && {
    background: ${b.modalBg};
    border-radius: 9px 9px 0 0;
    .MuiTabs-indicator {
      width: 40px;
      background: ${b.primaryBlue};
    }
  }
`,ir=v(Wo)`
  && {
    padding: 20px 0 20px;
    color: ${b.GRAY6};
    margin-left: 30px;
    font-family: Barlow;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    &.Mui-selected {
      color: ${b.white};
    }
  }
`,sr=v(y)`
  display: flex;
  flex: 1;
  min-height: 572px;
  padding: 20px 0;
  max-height: 572px;
  overflow: auto;

  @media (max-width: 1024px) {
    width: 100%;
    min-height: 400px;
    max-height: 400px;
  }

  @media (max-width: 768px) {
    width: 100%;
    min-height: 300px;
    max-height: 300px;
  }

  @media (max-width: 480px) {
    width: 100%;
    min-height: 250px;
    max-height: 250px;
  }
`,ar=v(y)`
  min-height: 0;
  flex: 1;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 3px;
  }
`,cr=({isOpen:t})=>o.jsx(lr,{isOpen:t,children:o.jsx(dr,{children:o.jsx(nr,{})})}),lr=v.div`
  display: ${t=>t.isOpen?"block":"none"};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2000;
`,dr=v.div`
  position: fixed;
  top: 38%;
  left: 34%;
  transform: translate(-50%, -50%);
  background: ${b.BG1};
  width: 300px;
  height: 443px;
  z-index: 1001;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
`,Vt={type:"",parent:""},pr=(t,r)=>t.length!==r.length?!0:t.some((n,e)=>{const s=r[e];return n.required!==s.required||n.type!==s.type||n.key!==s.key}),ur=async(t,r=!1,n,e,s)=>{try{const{attributes:c,selectedIndex:p,ref_id:a,...l}=t,$={...Bo(c),...n.reduce((x,g)=>({...x,[g]:"delete"}),{})},d={...l,attributes:$,index:p};e.videoAudio?d.media_url="":s.videoAudio&&(d.media_url="delete"),e.image?d.image_url="":s.image&&(d.image_url="delete"),e.sourceLink?d.source_link="":s.sourceLink&&(d.source_link="delete");let u;if(r?u=await mt.put(`/schema/${t.ref_id}`,JSON.stringify(d),{}):u=await mt.post("/schema",JSON.stringify({...d,node_key:"name"}),{}),u.status!=="success")throw new Error("error");return u==null?void 0:u.ref_id}catch(c){let p=xe;if(c.status===400){const a=await c.json();p=a.errorCode||(a==null?void 0:a.status)||xe}else c instanceof Error&&(p=c.message);throw new Error(p)}},fr=t=>t.charAt(0).toUpperCase()+t.slice(1),Dt=async(t,r)=>{try{const c=((await yt()).schemas||[]).filter(p=>!p.is_deleted&&p.type&&(!r||r(p))).map(p=>p.type==="thing"?{label:"No Parent",value:p.type}:{label:fr(p.type),value:p.type});t(c)}catch(n){console.warn(n)}},hr=({graphLoading:t,onSchemaCreate:r,selectedSchema:n,onDelete:e,setSelectedSchemaId:s,setGraphLoading:c,setIsCreateNew:p,onSchemaUpdate:a})=>{const{close:l,visible:$}=co("addType"),d=wt({mode:"onChange",defaultValues:n?{type:n.type,parent:n.parent}:Vt}),{watch:u,setValue:x,reset:g,getValues:w}=d,[O,j]=m.useState(!1),[E,C]=m.useState(!1),[R,P]=m.useState(!1),[k,S]=m.useState(null),[D,B]=m.useState(!1),[V,h]=m.useState(null),[_,F]=m.useState(""),[I,G]=m.useState(null),[Z,ee]=m.useState([]),[ae,q]=m.useState([]),[ye,Ie]=m.useState(!0),[we,de]=m.useState({videoAudio:!1,image:!1,sourceLink:!1}),[je,Se]=m.useState(!!n),ve=()=>Se(!je);m.useEffect(()=>()=>{g()},[$,g]);const et=()=>{p(!1),s("")};m.useEffect(()=>{n||(P(!0),Dt(S).finally(()=>P(!1)))},[n]),m.useEffect(()=>{(()=>{g(Vt),q([{required:!1,type:"string",key:""}]),ee([]),de({videoAudio:!1,image:!1,sourceLink:!1})})(),n&&(Se(!0),x("type",n.type),x("parent",n.parent),n.index&&x("selectedIndex",n.index),de({videoAudio:!!n.media_url,image:!!n.image_url,sourceLink:!!n.source_link}),n.type!==uo.value.toLowerCase()&&ao(n.type).then(z=>{const X=(z?xt(z):[{required:!1,type:"string",key:""}]).filter(ce=>ce.key!=="node_key");q(X)}),Dt(h,z=>z.type!==n.type))},[n,x,g]);const K=u("parent");u("type");const tt=T=>Array.isArray(T)&&T.every(z=>typeof z=="object"&&"key"in z),Ce=u("attributes"),pe=m.useMemo(()=>tt(Ce)?Ce.filter(T=>T.key&&T.key.trim()!==""):[],[Ce]),ze=()=>{l()},Ne=T=>{ee(z=>[...z,T])},Re=async()=>{if(n!=null&&n.type){C(!0),c(!0);try{await mt.delete(`/schema/${n.ref_id}`),e(n.type),l()}catch(T){let z=xe;if((T==null?void 0:T.status)===400){const H=await T.json();z=H.errorCode||(H==null?void 0:H.status)||xe}else T instanceof Error&&(z=T.message);G(z)}finally{C(!1),c(!1),p(!1)}}},Be=d.handleSubmit(async T=>{if(!K){B(!0);return}j(!0);try{if(n&&T.type!==(n==null?void 0:n.type)||n&&w().parent!==(n==null?void 0:n.parent)){const H=w().parent??(n==null?void 0:n.parent),{selectedIndex:X}=w();c(!0),await $o(n==null?void 0:n.ref_id,{type:T.type,parent:H,attributes:{index:X}}),await a()}const z=await ur({...T,...n?{ref_id:n==null?void 0:n.ref_id}:{}},!!n,Z,we,{videoAudio:!!(n!=null&&n.media_url),image:!!(n!=null&&n.image_url),sourceLink:!!(n!=null&&n.source_link)});r({type:T.type,parent:K||"",ref_id:(n==null?void 0:n.ref_id)||z||"new"}),ze()}catch(z){let H=xe;if((z==null?void 0:z.status)===400){const X=await z.json();H=X.errorCode||(X==null?void 0:X.status)||xe}else z instanceof Error&&(H=z.message);F(H)}finally{j(!1),c(!1),p(!1)}});m.useEffect(()=>{const T=d.watch(z=>{var Pe,De,Fe,Te,fe,Ge;const H=pr(pe,ae),X=((Pe=z.type)==null?void 0:Pe.trim())!==((De=n==null?void 0:n.type)==null?void 0:De.trim())||((Fe=z.parent)==null?void 0:Fe.trim())!==((Te=n==null?void 0:n.parent)==null?void 0:Te.trim())||H,ce=!!((fe=z.type)!=null&&fe.trim()),Ee=!!((Ge=z.parent)!=null&&Ge.trim());Ie(n?O||!X||!ce||D:O||D||!ce||!Ee)});return()=>T.unsubscribe()},[d,pe,ae,n,O,D]);const ot=()=>k==null?void 0:k.find(T=>T.value===K),Le=m.useMemo(()=>{if(K){const T=V==null?void 0:V.find(z=>z.value===K);return T||{label:K,value:K}}if(n!=null&&n.parent){const T=V==null?void 0:V.find(z=>z.value===n.parent);return T||{label:n.parent,value:n.parent}}},[K,n,V]),Ve=m.useMemo(()=>{if(!n)return;const T=pe.find(z=>z.key===n.index);if(T)return{label:T.key,value:T.key};if(n.index)return{label:n.index,value:n.index}},[n,pe]);return o.jsxs(y,{children:[o.jsxs(yr,{children:[o.jsx(wr,{children:n?"Edit Type":"Create Type"}),o.jsx(br,{"data-testid":"close-sidebar-sub-view",onClick:et,children:o.jsx(jt,{})})]}),o.jsx(xr,{}),o.jsxs(y,{children:[o.jsx(lo,{...d,children:o.jsxs("form",{id:"add-type-form",onSubmit:Be,children:[o.jsx(y,{children:n?o.jsxs(o.Fragment,{children:[o.jsxs(y,{mb:12,children:[o.jsx(y,{mb:12,children:o.jsx(ie,{children:"Name"})}),o.jsx(y,{mb:12,children:o.jsxs(Ht,{children:[o.jsx(Yt,{children:o.jsx(Xe,{dataTestId:"cy-item-name",defaultValue:n==null?void 0:n.type,id:"cy-item-name",maxLength:250,name:"type",placeholder:"Enter type name",rules:{...Ke},value:K})}),o.jsx(Wt,{onClick:ve,children:o.jsx(Lt,{})})]})})]}),o.jsxs(y,{mb:12,children:[o.jsx(y,{mb:12,children:o.jsx(ie,{children:"Parent"})}),o.jsx(Ae,{isLoading:R||t,onSelect:T=>{x("parent",(T==null?void 0:T.value)||""),B(!1)},options:V||[],selectedValue:Le}),_&&o.jsx(pt,{children:_})]})]}):o.jsxs(o.Fragment,{children:[o.jsxs(y,{mb:12,children:[o.jsx(y,{mb:12,children:o.jsx(ie,{children:"Select Parent"})}),o.jsx(Ae,{isLoading:R,onSelect:T=>{x("parent",(T==null?void 0:T.value)||""),B(!1)},options:k,selectedValue:ot()}),D&&o.jsx(pt,{children:"A parent type must be selected"})]}),o.jsxs(y,{children:[o.jsx(y,{mb:12,children:o.jsx(ie,{children:"Type name"})}),o.jsx(y,{mb:12,children:o.jsxs(Ht,{children:[o.jsx(Yt,{children:o.jsx(Xe,{id:"cy-item-name",maxLength:250,name:"type",placeholder:"Enter type name",rules:{...Ke},value:K})}),o.jsx(Wt,{onClick:ve,children:o.jsx(Lt,{})})]})})]})]})}),o.jsx(Kn,{onDelete:Ne,parent:n?n.type:K}),o.jsx(Xn,{initialOptions:we,setMediaOptions:de}),o.jsxs(y,{children:[o.jsx(Gt,{}),o.jsx(y,{mb:12,mt:12,children:o.jsx(ie,{children:"Indexes"})}),o.jsx(se,{item:!0,mb:2,width:"70%",children:o.jsx(Ae,{onSelect:T=>x("selectedIndex",(T==null?void 0:T.value)||""),options:pe.map(T=>({label:T.key,value:T.key})),selectedValue:Ve})}),o.jsx(Gt,{})]}),o.jsxs(y,{direction:"row",justify:"space-between",mt:20,children:[n&&o.jsxs(y,{direction:"column",children:[o.jsxs(gr,{color:"secondary",disabled:E,onClick:Re,size:"large",style:{marginRight:20},variant:"contained",children:["Delete",E&&o.jsxs(Ft,{children:[o.jsx(ue,{color:b.lightGray,size:12})," "]})]}),I&&o.jsx(pt,{children:I})]}),o.jsxs(mr,{color:"secondary",disabled:ye,onClick:Be,size:"large",variant:"contained",children:["Confirm",O&&o.jsxs(Ft,{children:[o.jsx(ue,{color:b.lightGray,size:12})," "]})]})]})]})}),o.jsx(cr,{isOpen:je})]})]})},mr=v(Qe)`
  width: 100% !important;
  margin: 0 auto !important;
`,xr=v.div`
  border-bottom: 1px solid ${b.black};
  width: calc(100% + 32px);
  margin: 0 -16px 16px;
  opacity: 0.3;
`,Ft=v.span`
  margin-top: 2px;
`,gr=v(Qe)`
  && {
    color: ${b.primaryRed};
    background-color: rgba(237, 116, 116, 0.1);

    &:hover,
    &:active,
    &:focus {
      color: ${b.primaryRed};
      background-color: rgba(237, 116, 116, 0.2);
    }
  }
`,br=v(y)`
  font-size: 32px;
  color: ${b.white};
  cursor: pointer;

  svg {
    color: ${b.GRAY6};
  }

  &:hover {
    svg {
      color: ${b.white};
    }
  }
`,pt=v(y)`
  font-size: 13px;
  font-family: Barlow;
  color: #ff8f80;
  line-height: 0.2px;
  margin-top: 12px;
  padding-top: 20px;
`,Gt=v.div`
  border: 1px solid ${b.BG2};
  width: calc(100% + 32px);
  opacity: 0.5;
  margin-left: -16px;
`,yr=v(y)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 16px;
`,wr=v(ie)`
  font-family: Barlow;
  font-size: 22px;
  font-weight: 600;
  line-height: 16px;
  letter-spacing: 0.01em;
  text-align: left;
  color: ${b.white};
`,Wt=v.span`
  width: 36px;
  height: 36px;
  border-radius: 6px;
  margin-left: 12px;
  color: ${b.colorPickerThing};
  background: ${b.THING};
  display: flex;
  justify-content: center;
  align-items: center;
`,Ht=v(y)`
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`,Yt=v(y)`
  width: 320px;
`;var jr=Object.defineProperty,vr=(t,r,n)=>r in t?jr(t,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[r]=n,M=(t,r,n)=>(vr(t,typeof r!="symbol"?r+"":r,n),n);const Ze=new Jo,Ut=new en,Cr=Math.cos(70*(Math.PI/180)),Zt=(t,r)=>(t%r+r)%r;let Er=class extends tn{constructor(r,n){super(),M(this,"object"),M(this,"domElement"),M(this,"enabled",!0),M(this,"target",new N),M(this,"minDistance",0),M(this,"maxDistance",1/0),M(this,"minZoom",0),M(this,"maxZoom",1/0),M(this,"minPolarAngle",0),M(this,"maxPolarAngle",Math.PI),M(this,"minAzimuthAngle",-1/0),M(this,"maxAzimuthAngle",1/0),M(this,"enableDamping",!1),M(this,"dampingFactor",.05),M(this,"enableZoom",!0),M(this,"zoomSpeed",1),M(this,"enableRotate",!0),M(this,"rotateSpeed",1),M(this,"enablePan",!0),M(this,"panSpeed",1),M(this,"screenSpacePanning",!0),M(this,"keyPanSpeed",7),M(this,"zoomToCursor",!1),M(this,"autoRotate",!1),M(this,"autoRotateSpeed",2),M(this,"reverseOrbit",!1),M(this,"reverseHorizontalOrbit",!1),M(this,"reverseVerticalOrbit",!1),M(this,"keys",{LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"}),M(this,"mouseButtons",{LEFT:he.ROTATE,MIDDLE:he.DOLLY,RIGHT:he.PAN}),M(this,"touches",{ONE:me.ROTATE,TWO:me.DOLLY_PAN}),M(this,"target0"),M(this,"position0"),M(this,"zoom0"),M(this,"_domElementKeyEvents",null),M(this,"getPolarAngle"),M(this,"getAzimuthalAngle"),M(this,"setPolarAngle"),M(this,"setAzimuthalAngle"),M(this,"getDistance"),M(this,"listenToKeyEvents"),M(this,"stopListenToKeyEvents"),M(this,"saveState"),M(this,"reset"),M(this,"update"),M(this,"connect"),M(this,"dispose"),this.object=r,this.domElement=n,this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this.getPolarAngle=()=>d.phi,this.getAzimuthalAngle=()=>d.theta,this.setPolarAngle=i=>{let f=Zt(i,2*Math.PI),A=d.phi;A<0&&(A+=2*Math.PI),f<0&&(f+=2*Math.PI);let L=Math.abs(f-A);2*Math.PI-L<L&&(f<A?f+=2*Math.PI:A+=2*Math.PI),u.phi=f-A,e.update()},this.setAzimuthalAngle=i=>{let f=Zt(i,2*Math.PI),A=d.theta;A<0&&(A+=2*Math.PI),f<0&&(f+=2*Math.PI);let L=Math.abs(f-A);2*Math.PI-L<L&&(f<A?f+=2*Math.PI:A+=2*Math.PI),u.theta=f-A,e.update()},this.getDistance=()=>e.object.position.distanceTo(e.target),this.listenToKeyEvents=i=>{i.addEventListener("keydown",fe),this._domElementKeyEvents=i},this.stopListenToKeyEvents=()=>{this._domElementKeyEvents.removeEventListener("keydown",fe),this._domElementKeyEvents=null},this.saveState=()=>{e.target0.copy(e.target),e.position0.copy(e.object.position),e.zoom0=e.object.zoom},this.reset=()=>{e.target.copy(e.target0),e.object.position.copy(e.position0),e.object.zoom=e.zoom0,e.object.updateProjectionMatrix(),e.dispatchEvent(s),e.update(),l=a.NONE},this.update=(()=>{const i=new N,f=new N(0,1,0),A=new St().setFromUnitVectors(r.up,f),L=A.clone().invert(),W=new N,oe=new St,le=2*Math.PI;return function(){const Pt=e.object.position;A.setFromUnitVectors(r.up,f),L.copy(A).invert(),i.copy(Pt).sub(e.target),i.applyQuaternion(A),d.setFromVector3(i),e.autoRotate&&l===a.NONE&&G(F()),e.enableDamping?(d.theta+=u.theta*e.dampingFactor,d.phi+=u.phi*e.dampingFactor):(d.theta+=u.theta,d.phi+=u.phi);let ne=e.minAzimuthAngle,re=e.maxAzimuthAngle;isFinite(ne)&&isFinite(re)&&(ne<-Math.PI?ne+=le:ne>Math.PI&&(ne-=le),re<-Math.PI?re+=le:re>Math.PI&&(re-=le),ne<=re?d.theta=Math.max(ne,Math.min(re,d.theta)):d.theta=d.theta>(ne+re)/2?Math.max(ne,d.theta):Math.min(re,d.theta)),d.phi=Math.max(e.minPolarAngle,Math.min(e.maxPolarAngle,d.phi)),d.makeSafe(),e.enableDamping===!0?e.target.addScaledVector(g,e.dampingFactor):e.target.add(g),e.zoomToCursor&&V||e.object.isOrthographicCamera?d.radius=de(d.radius):d.radius=de(d.radius*x),i.setFromSpherical(d),i.applyQuaternion(L),Pt.copy(e.target).add(i),e.object.matrixAutoUpdate||e.object.updateMatrix(),e.object.lookAt(e.target),e.enableDamping===!0?(u.theta*=1-e.dampingFactor,u.phi*=1-e.dampingFactor,g.multiplyScalar(1-e.dampingFactor)):(u.set(0,0,0),g.set(0,0,0));let We=!1;if(e.zoomToCursor&&V){let ke=null;if(e.object instanceof Ye&&e.object.isPerspectiveCamera){const $e=i.length();ke=de($e*x);const He=$e-ke;e.object.position.addScaledVector(D,He),e.object.updateMatrixWorld()}else if(e.object.isOrthographicCamera){const $e=new N(B.x,B.y,0);$e.unproject(e.object),e.object.zoom=Math.max(e.minZoom,Math.min(e.maxZoom,e.object.zoom/x)),e.object.updateProjectionMatrix(),We=!0;const He=new N(B.x,B.y,0);He.unproject(e.object),e.object.position.sub(He).add($e),e.object.updateMatrixWorld(),ke=i.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),e.zoomToCursor=!1;ke!==null&&(e.screenSpacePanning?e.target.set(0,0,-1).transformDirection(e.object.matrix).multiplyScalar(ke).add(e.object.position):(Ze.origin.copy(e.object.position),Ze.direction.set(0,0,-1).transformDirection(e.object.matrix),Math.abs(e.object.up.dot(Ze.direction))<Cr?r.lookAt(e.target):(Ut.setFromNormalAndCoplanarPoint(e.object.up,e.target),Ze.intersectPlane(Ut,e.target))))}else e.object instanceof Ue&&e.object.isOrthographicCamera&&(e.object.zoom=Math.max(e.minZoom,Math.min(e.maxZoom,e.object.zoom/x)),e.object.updateProjectionMatrix(),We=!0);return x=1,V=!1,We||W.distanceToSquared(e.object.position)>$||8*(1-oe.dot(e.object.quaternion))>$?(e.dispatchEvent(s),W.copy(e.object.position),oe.copy(e.object.quaternion),We=!1,!0):!1}})(),this.connect=i=>{i===document&&console.error('THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.'),e.domElement=i,e.domElement.style.touchAction="none",e.domElement.addEventListener("contextmenu",vt),e.domElement.addEventListener("pointerdown",X),e.domElement.addEventListener("pointercancel",Pe),e.domElement.addEventListener("wheel",Te)},this.dispose=()=>{var i,f,A,L,W,oe;(i=e.domElement)==null||i.removeEventListener("contextmenu",vt),(f=e.domElement)==null||f.removeEventListener("pointerdown",X),(A=e.domElement)==null||A.removeEventListener("pointercancel",Pe),(L=e.domElement)==null||L.removeEventListener("wheel",Te),(W=e.domElement)==null||W.ownerDocument.removeEventListener("pointermove",ce),(oe=e.domElement)==null||oe.ownerDocument.removeEventListener("pointerup",Ee),e._domElementKeyEvents!==null&&e._domElementKeyEvents.removeEventListener("keydown",fe)};const e=this,s={type:"change"},c={type:"start"},p={type:"end"},a={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let l=a.NONE;const $=1e-6,d=new zt,u=new zt;let x=1;const g=new N,w=new Q,O=new Q,j=new Q,E=new Q,C=new Q,R=new Q,P=new Q,k=new Q,S=new Q,D=new N,B=new Q;let V=!1;const h=[],_={};function F(){return 2*Math.PI/60/60*e.autoRotateSpeed}function I(){return Math.pow(.95,e.zoomSpeed)}function G(i){e.reverseOrbit||e.reverseHorizontalOrbit?u.theta+=i:u.theta-=i}function Z(i){e.reverseOrbit||e.reverseVerticalOrbit?u.phi+=i:u.phi-=i}const ee=(()=>{const i=new N;return function(A,L){i.setFromMatrixColumn(L,0),i.multiplyScalar(-A),g.add(i)}})(),ae=(()=>{const i=new N;return function(A,L){e.screenSpacePanning===!0?i.setFromMatrixColumn(L,1):(i.setFromMatrixColumn(L,0),i.crossVectors(e.object.up,i)),i.multiplyScalar(A),g.add(i)}})(),q=(()=>{const i=new N;return function(A,L){const W=e.domElement;if(W&&e.object instanceof Ye&&e.object.isPerspectiveCamera){const oe=e.object.position;i.copy(oe).sub(e.target);let le=i.length();le*=Math.tan(e.object.fov/2*Math.PI/180),ee(2*A*le/W.clientHeight,e.object.matrix),ae(2*L*le/W.clientHeight,e.object.matrix)}else W&&e.object instanceof Ue&&e.object.isOrthographicCamera?(ee(A*(e.object.right-e.object.left)/e.object.zoom/W.clientWidth,e.object.matrix),ae(L*(e.object.top-e.object.bottom)/e.object.zoom/W.clientHeight,e.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),e.enablePan=!1)}})();function ye(i){e.object instanceof Ye&&e.object.isPerspectiveCamera||e.object instanceof Ue&&e.object.isOrthographicCamera?x/=i:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),e.enableZoom=!1)}function Ie(i){e.object instanceof Ye&&e.object.isPerspectiveCamera||e.object instanceof Ue&&e.object.isOrthographicCamera?x*=i:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),e.enableZoom=!1)}function we(i){if(!e.zoomToCursor||!e.domElement)return;V=!0;const f=e.domElement.getBoundingClientRect(),A=i.clientX-f.left,L=i.clientY-f.top,W=f.width,oe=f.height;B.x=A/W*2-1,B.y=-(L/oe)*2+1,D.set(B.x,B.y,1).unproject(e.object).sub(e.object.position).normalize()}function de(i){return Math.max(e.minDistance,Math.min(e.maxDistance,i))}function je(i){w.set(i.clientX,i.clientY)}function Se(i){we(i),P.set(i.clientX,i.clientY)}function ve(i){E.set(i.clientX,i.clientY)}function et(i){O.set(i.clientX,i.clientY),j.subVectors(O,w).multiplyScalar(e.rotateSpeed);const f=e.domElement;f&&(G(2*Math.PI*j.x/f.clientHeight),Z(2*Math.PI*j.y/f.clientHeight)),w.copy(O),e.update()}function K(i){k.set(i.clientX,i.clientY),S.subVectors(k,P),S.y>0?ye(I()):S.y<0&&Ie(I()),P.copy(k),e.update()}function tt(i){C.set(i.clientX,i.clientY),R.subVectors(C,E).multiplyScalar(e.panSpeed),q(R.x,R.y),E.copy(C),e.update()}function Ce(i){we(i),i.deltaY<0?Ie(I()):i.deltaY>0&&ye(I()),e.update()}function pe(i){let f=!1;switch(i.code){case e.keys.UP:q(0,e.keyPanSpeed),f=!0;break;case e.keys.BOTTOM:q(0,-e.keyPanSpeed),f=!0;break;case e.keys.LEFT:q(e.keyPanSpeed,0),f=!0;break;case e.keys.RIGHT:q(-e.keyPanSpeed,0),f=!0;break}f&&(i.preventDefault(),e.update())}function ze(){if(h.length==1)w.set(h[0].pageX,h[0].pageY);else{const i=.5*(h[0].pageX+h[1].pageX),f=.5*(h[0].pageY+h[1].pageY);w.set(i,f)}}function Ne(){if(h.length==1)E.set(h[0].pageX,h[0].pageY);else{const i=.5*(h[0].pageX+h[1].pageX),f=.5*(h[0].pageY+h[1].pageY);E.set(i,f)}}function Re(){const i=h[0].pageX-h[1].pageX,f=h[0].pageY-h[1].pageY,A=Math.sqrt(i*i+f*f);P.set(0,A)}function Be(){e.enableZoom&&Re(),e.enablePan&&Ne()}function ot(){e.enableZoom&&Re(),e.enableRotate&&ze()}function Le(i){if(h.length==1)O.set(i.pageX,i.pageY);else{const A=nt(i),L=.5*(i.pageX+A.x),W=.5*(i.pageY+A.y);O.set(L,W)}j.subVectors(O,w).multiplyScalar(e.rotateSpeed);const f=e.domElement;f&&(G(2*Math.PI*j.x/f.clientHeight),Z(2*Math.PI*j.y/f.clientHeight)),w.copy(O)}function Ve(i){if(h.length==1)C.set(i.pageX,i.pageY);else{const f=nt(i),A=.5*(i.pageX+f.x),L=.5*(i.pageY+f.y);C.set(A,L)}R.subVectors(C,E).multiplyScalar(e.panSpeed),q(R.x,R.y),E.copy(C)}function T(i){const f=nt(i),A=i.pageX-f.x,L=i.pageY-f.y,W=Math.sqrt(A*A+L*L);k.set(0,W),S.set(0,Math.pow(k.y/P.y,e.zoomSpeed)),ye(S.y),P.copy(k)}function z(i){e.enableZoom&&T(i),e.enablePan&&Ve(i)}function H(i){e.enableZoom&&T(i),e.enableRotate&&Le(i)}function X(i){var f,A;e.enabled!==!1&&(h.length===0&&((f=e.domElement)==null||f.ownerDocument.addEventListener("pointermove",ce),(A=e.domElement)==null||A.ownerDocument.addEventListener("pointerup",Ee)),vo(i),i.pointerType==="touch"?Ge(i):De(i))}function ce(i){e.enabled!==!1&&(i.pointerType==="touch"?jo(i):Fe(i))}function Ee(i){var f,A,L;Ct(i),h.length===0&&((f=e.domElement)==null||f.releasePointerCapture(i.pointerId),(A=e.domElement)==null||A.ownerDocument.removeEventListener("pointermove",ce),(L=e.domElement)==null||L.ownerDocument.removeEventListener("pointerup",Ee)),e.dispatchEvent(p),l=a.NONE}function Pe(i){Ct(i)}function De(i){let f;switch(i.button){case 0:f=e.mouseButtons.LEFT;break;case 1:f=e.mouseButtons.MIDDLE;break;case 2:f=e.mouseButtons.RIGHT;break;default:f=-1}switch(f){case he.DOLLY:if(e.enableZoom===!1)return;Se(i),l=a.DOLLY;break;case he.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(e.enablePan===!1)return;ve(i),l=a.PAN}else{if(e.enableRotate===!1)return;je(i),l=a.ROTATE}break;case he.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(e.enableRotate===!1)return;je(i),l=a.ROTATE}else{if(e.enablePan===!1)return;ve(i),l=a.PAN}break;default:l=a.NONE}l!==a.NONE&&e.dispatchEvent(c)}function Fe(i){if(e.enabled!==!1)switch(l){case a.ROTATE:if(e.enableRotate===!1)return;et(i);break;case a.DOLLY:if(e.enableZoom===!1)return;K(i);break;case a.PAN:if(e.enablePan===!1)return;tt(i);break}}function Te(i){e.enabled===!1||e.enableZoom===!1||l!==a.NONE&&l!==a.ROTATE||(i.preventDefault(),e.dispatchEvent(c),Ce(i),e.dispatchEvent(p))}function fe(i){e.enabled===!1||e.enablePan===!1||pe(i)}function Ge(i){switch(Et(i),h.length){case 1:switch(e.touches.ONE){case me.ROTATE:if(e.enableRotate===!1)return;ze(),l=a.TOUCH_ROTATE;break;case me.PAN:if(e.enablePan===!1)return;Ne(),l=a.TOUCH_PAN;break;default:l=a.NONE}break;case 2:switch(e.touches.TWO){case me.DOLLY_PAN:if(e.enableZoom===!1&&e.enablePan===!1)return;Be(),l=a.TOUCH_DOLLY_PAN;break;case me.DOLLY_ROTATE:if(e.enableZoom===!1&&e.enableRotate===!1)return;ot(),l=a.TOUCH_DOLLY_ROTATE;break;default:l=a.NONE}break;default:l=a.NONE}l!==a.NONE&&e.dispatchEvent(c)}function jo(i){switch(Et(i),l){case a.TOUCH_ROTATE:if(e.enableRotate===!1)return;Le(i),e.update();break;case a.TOUCH_PAN:if(e.enablePan===!1)return;Ve(i),e.update();break;case a.TOUCH_DOLLY_PAN:if(e.enableZoom===!1&&e.enablePan===!1)return;z(i),e.update();break;case a.TOUCH_DOLLY_ROTATE:if(e.enableZoom===!1&&e.enableRotate===!1)return;H(i),e.update();break;default:l=a.NONE}}function vt(i){e.enabled!==!1&&i.preventDefault()}function vo(i){h.push(i)}function Ct(i){delete _[i.pointerId];for(let f=0;f<h.length;f++)if(h[f].pointerId==i.pointerId){h.splice(f,1);return}}function Et(i){let f=_[i.pointerId];f===void 0&&(f=new Q,_[i.pointerId]=f),f.set(i.pageX,i.pageY)}function nt(i){const f=i.pointerId===h[0].pointerId?h[1]:h[0];return _[f.pointerId]}n!==void 0&&this.connect(n),this.update()}};const Pr=new N,Kt=m.forwardRef(function({start:r=[0,0,0],end:n=[0,0,0],mid:e,segments:s=20,...c},p){const a=m.useRef(null),[l]=m.useState(()=>new on(void 0,void 0,void 0)),$=m.useCallback((u,x,g,w=20)=>(u instanceof N?l.v0.copy(u):l.v0.set(...u),x instanceof N?l.v2.copy(x):l.v2.set(...x),g instanceof N?l.v1.copy(g):l.v1.copy(l.v0.clone().add(l.v2.clone().sub(l.v0)).add(Pr.set(0,l.v0.y-l.v2.y,0))),l.getPoints(w)),[]);m.useLayoutEffect(()=>{a.current.setPoints=(u,x,g)=>{const w=$(u,x,g);a.current.geometry&&a.current.geometry.setPositions(w.map(O=>O.toArray()).flat())}},[]);const d=m.useMemo(()=>$(r,n,e,s),[r,n,e,s]);return m.createElement(Ho,U({ref:Yo([a,p]),points:d},c))}),Tr=m.forwardRef(({makeDefault:t,camera:r,regress:n,domElement:e,enableDamping:s=!0,onChange:c,onStart:p,onEnd:a,...l},$)=>{const d=te(k=>k.invalidate),u=te(k=>k.camera),x=te(k=>k.gl),g=te(k=>k.events),w=te(k=>k.setEvents),O=te(k=>k.set),j=te(k=>k.get),E=te(k=>k.performance),C=r||u,R=e||g.connected||x.domElement,P=m.useMemo(()=>new Er(C),[C]);return Je(()=>{P.enabled&&P.update()},-1),m.useEffect(()=>(P.connect(R),()=>void P.dispose()),[R,n,P,d]),m.useEffect(()=>{const k=B=>{d(),n&&E.regress(),c&&c(B)},S=B=>{p&&p(B)},D=B=>{a&&a(B)};return P.addEventListener("change",k),P.addEventListener("start",S),P.addEventListener("end",D),()=>{P.removeEventListener("start",S),P.removeEventListener("end",D),P.removeEventListener("change",k)}},[c,p,a,P,d,w]),m.useEffect(()=>{if(t){const k=j().controls;return O({controls:P}),()=>O({controls:k})}},[t,P]),m.createElement("primitive",U({ref:$,object:P,enableDamping:s},l))});function kr(t){const r=t+"Geometry";return m.forwardRef(({args:n,children:e,...s},c)=>m.createElement("mesh",U({ref:c},s),m.createElement(r,{attach:"geometry",args:n}),e))}const $r=kr("circle"),J=10,Mr=2,Ar=2,Xt=10,Or=10,qt=(t,r,n)=>{const c=new N().subVectors(r,t).normalize().multiplyScalar(n);return new N().addVectors(t,c)},_r=(t,r,n,e)=>{const s=new N().lerpVectors(t,r,.5),c=new N().subVectors(r,t).normalize(),p=new N(-c.y,c.x,c.z).normalize(),a=(n-e/2)*Or;return new N().addVectors(s,p.multiplyScalar(a))},yo=({links:t,nodes:r,onEdgeClick:n})=>{const e=m.useRef(null),{camera:s}=te(),c=new N,p=new N,a=new N,l=new N,$=new N,d=new N,u=new N,x=new N;Je(()=>{e.current&&r&&e.current.children.forEach((w,O)=>{var V,h,_,F;const j=t[O];if(!j)return;const E=r.find(I=>I.ref_id===j.target),C=r.find(I=>I.ref_id===j.source);c.set((C==null?void 0:C.x)||0,(C==null?void 0:C.y)||0,(C==null?void 0:C.z)||0),p.set((E==null?void 0:E.x)||0,(E==null?void 0:E.y)||0,(E==null?void 0:E.z)||0);const R=w.children[0],P=w.children[1],k=w.children[2],S=w.children[3],D=t.filter(I=>I.source===j.source&&I.target===j.target||I.source===j.target&&I.target===j.source).length,B=t.filter((I,G)=>G<O&&(I.source===j.source&&I.target===j.target||I.source===j.target&&I.target===j.source)).length;if((C==null?void 0:C.ref_id)===(E==null?void 0:E.ref_id)){const[I,G,Z]=Lo(c);(V=R.setPoints)==null||V.call(R,c,Z,I),(h=P.setPoints)==null||h.call(P,Z,p,I),k.position.set(Z.x,Z.y,G.z),k.lookAt(I),k.rotateX(-Math.PI/2),S.position.set(Z.x,Z.y,G.z),S.lookAt(s.position)}else{x.copy(qt(c,p,J)),u.copy(qt(p,c,J+.5)),a.lerpVectors(x,u,.5),D>1?a.copy(_r(x,u,B,D)):a.lerpVectors(x,u,.5);const I=30;l.subVectors(u,x).normalize().multiplyScalar(I/2),$.subVectors(a,l),d.addVectors(a,l);const G=new N().addVectors(x,$).multiplyScalar(.5),Z=new N().addVectors(d,u).multiplyScalar(.5);(_=R.setPoints)==null||_.call(R,x,$,G),(F=P.setPoints)==null||F.call(P,d,u,Z),k.position.set(u.x,u.y,u.z),k.lookAt(x),k.rotateX(-Math.PI/2),S.position.set(a.x,a.y,a.z),S.lookAt(s.position);let ee=Math.atan2(u.y-x.y,u.x-x.x);(ee>Math.PI/2||ee<-Math.PI/2)&&(ee+=Math.PI),S.rotation.set(0,0,ee);const ae=x.distanceTo(u),q=ae<I?2:4;ae<I?S.text=gt(j.edge_type,Xt):S.text=j.edge_type,S.fontSize=q}})});const g=(w,O,j,E)=>{if(w==="CHILD_OF"||O==="string"||j==="string")return;const C=r==null?void 0:r.find(S=>S.ref_id===O),R=r==null?void 0:r.find(S=>S.ref_id===j),P=(C==null?void 0:C.type)||"",k=(R==null?void 0:R.type)||"";n(E,w,P,k)};return o.jsx("group",{ref:e,children:t.map(w=>o.jsxs("group",{children:[o.jsx(Kt,{color:"white",end:[0,0,0],lineWidth:1,start:[0,0,0]}),o.jsx(Kt,{color:"white",end:[0,0,0],lineWidth:1,start:[0,0,0]}),o.jsxs("mesh",{position:new N(0,0,0),children:[o.jsx("coneGeometry",{args:[Mr,Ar,32]}),o.jsx("meshBasicMaterial",{color:"white"})]}),o.jsx(mo,{anchorX:"center",anchorY:"middle",color:"white",...xo,lineHeight:1,maxWidth:20,onClick:()=>g(w.edge_type,w.source,w.target,w.ref_id),rotation:[0,0,0],textAlign:"center",children:gt(w.edge_type,Xt)})]},w.ref_id))})};yo.displayName="Lines";const Ir=["#ff13c9","#5af0ff","#3233ff","#c2f0c2","#ff6666","#99ccff","#ffb3b3"],Sr=v.div`
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
`,zr=v(Uo)`
  position: absolute;
`;new nn(2,2,2);const wo=m.memo(({node:t,setSelectedNode:r,onSimulationUpdate:n,isSelected:e})=>{var O;const s=m.useRef(null),[c,p]=m.useState(!1);console.log(e);const{size:a,camera:l}=te(),$=zo(j=>{if(t.type==="Thing")return;const{xy:[E,C],down:R,dragging:P,first:k,elapsedTime:S}=j;if(!(!P||k||S<100)&&R&&s.current){n();const D=(E-a.left)/window.innerWidth*a.width,B=(C-a.top)/window.innerHeight*a.height,_=new N(D/a.width*2-1,-B/a.height*2+1,0).unproject(l).multiply(new N(1,1,0)).clone();t.fx=_.x,t.fy=_.y}});Je(()=>{s.current&&s.current.position.set(t.x||0,t.y||0,0)});const d=Ir[(O=t==null?void 0:t.children)==null?void 0:O.length]||"red",u=j=>{j.stopPropagation(),t.type!=="Thing"&&r()},x=gt(t.type||"",J),g=()=>{p(!0)},w=()=>{p(!1)};return o.jsxs("mesh",{ref:s,onClick:u,...$(),onPointerOut:w,onPointerOver:g,position:new N(t.x,t.y,0),children:[o.jsx($r,{args:[J,30,20],children:o.jsx("meshStandardMaterial",{attach:"material",color:d})}),o.jsx(mo,{...xo,clipRect:[-J,-J,J,J],color:"#000",fontSize:2,maxWidth:J*2,name:t.type,textAlign:"left",children:x}),c&&o.jsx(zr,{position:[0,5,0],zIndexRange:[100,0],children:o.jsx(Sr,{children:t.type})})]})});wo.displayName="Node";const Nr=({simulation:t,setSelectedSchemaId:r,selectedId:n,setIsAddEdgeNode:e})=>{const[s]=po(p=>[p.schemas]),c=()=>{t&&(t.alpha(.05),t.restart())};return o.jsx(o.Fragment,{children:s.map((p,a)=>{const l=t.nodes()[a];return l?o.jsx(wo,{isSelected:l.ref_id===n,node:l,onSimulationUpdate:c,setSelectedNode:()=>{e(!1),r(l.ref_id)}},l.ref_id):null})})},Rr=({schemasWithPositions:t,filteredLinks:r,setSelectedSchemaId:n,selectedSchemaId:e,setIsAddEdgeNode:s,onEdgeClick:c})=>{const[p,a]=m.useState(null),l=It(t),$=It(r);return m.useEffect(()=>{if(!t.length||!r.length)return;const d=structuredClone(t),u=structuredClone(r);if(p){l&&l.length!==t.length&&$&&$.length!==r.length&&(p.nodes(d).force("link",kt(u).id(g=>g.ref_id).distance(100)).force("charge",$t()).force("center",Mt()).force("collide",At(J+5)).alpha(.5).restart(),a({...p}));return}const x=Mo(d).force("link",kt(u).id(g=>g.ref_id).distance(120)).force("charge",$t().strength(-100)).force("center",Mt()).force("collide",At(J+5));a(x)},[t,p,r,l,$]),Je(()=>{}),p?o.jsxs(o.Fragment,{children:[o.jsx(yo,{links:r,nodes:p.nodes(),onEdgeClick:c}),o.jsx(Nr,{selectedId:e,setIsAddEdgeNode:s,setSelectedSchemaId:n,simulation:p})]}):null},ut=new rn(0),Br=({selectedSchemaId:t,links:r,schemasWithPositions:n,setSelectedSchemaId:e,setIsAddEdgeNode:s,onEdgeClick:c})=>o.jsxs(Zo,{camera:{zoom:1,position:[0,0,200]},id:"schema-canvas",linear:!0,orthographic:!0,children:[o.jsx("color",{args:[ut.r,ut.g,ut.b],attach:"background"}),Ao&&o.jsx(Ko,{position:"right-bottom"}),o.jsx(Lr,{}),o.jsx(Xo,{}),o.jsx(Rr,{filteredLinks:r,onEdgeClick:c,schemasWithPositions:n,selectedSchemaId:t,setIsAddEdgeNode:s,setSelectedSchemaId:e})]}),Lr=()=>{m.useEffect(()=>{const n=s=>{["Meta","Alt"].includes(s.key)&&(document.body.style.cursor="grab")},e=s=>{["Meta","Alt"].includes(s.key)&&(document.body.style.cursor="default")};return window.addEventListener("keydown",n,!1),window.addEventListener("keyup",e,!1),()=>{window.removeEventListener("keydown",n,!1),window.removeEventListener("keyup",e,!1)}},[]);const t=()=>{document.body.style.cursor="grabbing"},r=()=>{document.body.style.cursor="default"};return o.jsx(Tr,{dampingFactor:1,enableDamping:!0,enablePan:!0,enableRotate:!1,enableZoom:!0,maxZoom:20,minZoom:1,onEnd:r,onStart:t,zoomSpeed:1.5,zoomToCursor:!0})},Vr=({onClose:t,activeTab:r,setActiveTab:n})=>o.jsxs(Dr,{children:[o.jsxs(Fr,{children:[o.jsx(qo,{}),o.jsx(Gr,{children:"Blueprint"})]}),o.jsxs(Wr,{children:[o.jsx(Qt,{active:r==="all",onClick:()=>n("all"),children:"Show All"}),o.jsx(Qt,{active:r==="parent",onClick:()=>n("parent"),children:"Parent Only"})]}),o.jsx(Hr,{onClick:t,children:o.jsx(jt,{})})]}),Dr=v(y)`
  background-color: ${b.BG1};
  height: 64px;
  width: 100%;
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
  justify-content: space-between;
  padding: 17px;
  border-bottom: 1px solid ${b.black};
`,Fr=v.div`
  display: flex;
  align-items: center;
  font-size: 22px;
  font-weight: 400;
  font-family: Barlow;

  svg {
    color: ${b.GRAY6};
    margin-left: 6px;
  }
`,Gr=v.span`
  color: ${b.white};
  font-weight: 400;
  font-family: Barlow;
  margin-left: 15px;
  font-size: 22px;
`,Wr=v.div`
  display: flex;
  position: absolute;
  top: 16px;
  right: 60px;
  background-color: ${b.divider2};
  border-radius: 6px;
  padding: 2px;
`,Qt=v.div`
  color: ${t=>t.active?b.white:b.GRAY6};
  background-color: ${t=>t.active?b.BUTTON1:"transparent"};
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
`,Hr=v.div`
  position: absolute;
  top: 16px;
  right: 12px;
  font-size: 20px;
  color: ${b.GRAY6};
  cursor: pointer;
  z-index: 1;

  svg {
    width: 30px;
    height: 32px;
  }
`,Yr=({onCreateNew:t,onAddEdgeNode:r})=>o.jsxs(Ur,{children:[o.jsx(ft,{"data-testid":"add-schema-type",onClick:t,children:o.jsx(ht,{children:o.jsx(ho,{})})}),o.jsx(ft,{"data-testid":"add-edge",onClick:r,children:o.jsx(ht,{children:o.jsx(Qo,{})})}),o.jsx(ft,{disabled:!0,children:o.jsx(ht,{children:o.jsx(fo,{})})})]}),Ur=v(y).attrs({align:"flex-start",direction:"column",justify:"flex-start"})`
  flex: 1;
  gap: 17px;
  padding: 16px 0 0 16px;
`,ft=v(y).attrs({align:"center",justify:"center",p:0})`
  position: relative;
  width: 40px;
  height: 40px;
  flex-direction: row;
  color: ${b.GRAY6};
  background: ${({disabled:t})=>t?b.disableBtn:b.BG1};
  cursor: pointer;
  border-radius: 6px;
  transition: ${({theme:t})=>t.transitions.create(["opacity","box-shadow","background-color"])};

  &:hover {
    color: ${({disabled:t})=>t?b.GRAY6:b.white};
  }

  &:active {
    color: ${b.white};
    background: ${({disabled:t})=>t?b.BG1:b.black};
  }

  &.root {
    border-radius: 50%;
    padding: 0;
    align-items: center;
    justify-content: center;
    border: none;
  }
`,ht=v(y)`
  justify-content: center;
  align-items: center;
  font-size: 24px;
`,Zr=({Close:t})=>{const[r,n]=m.useState(""),[e,s]=m.useState(!1),[c,p]=m.useState(!1),[a,l]=m.useState(!1),[$,d]=m.useState({refId:"",edgeType:"",source:"",target:""}),[u,x]=m.useState(!1),[g,w]=m.useState("all"),[O,j,E,C]=po(h=>[h.schemas,h.links,h.setSchemas,h.setSchemaLinks]);m.useEffect(()=>{(async()=>{p(!0);try{const _=await Ot(),F=_.schemas.filter(I=>I.ref_id&&!I.is_deleted);E(F.length>0?F:_.schemas),C(_.edges.length>0?_.edges:[]),p(!1)}catch(_){console.error("Error fetching data:",_),p(!1)}})()},[E,C]);const R=h=>{if(O.some(F=>F.ref_id===h.ref_id))E(O.map(F=>F.ref_id===h.ref_id?{...h,children:[]}:F));else{E([...O,{...h,children:[]}]);const F=O.find(I=>h.parent===I.type);C([...j,{ref_id:`new-link-${j.length}`,edge_type:"CHILD_OF",source:h.ref_id||"new",target:(F==null?void 0:F.ref_id)||"new"}])}},P=async()=>{const h=await Ot();E(h.schemas.filter(_=>_.ref_id&&!_.is_deleted&&_.ref_id)),C(h.edges)},k=h=>{E(O.filter(_=>_.type!==h))},S=O.map(h=>({...h,children:O.filter(_=>_.parent===h.type).map(_=>_.ref_id||"")})),D=j.filter(h=>S.some(_=>_.ref_id===h.source)&&S.some(_=>_.ref_id===h.target)),B=O.find(h=>h.ref_id===r)||null;if(c)return o.jsx(y,{align:"center",basis:"100%",grow:1,justify:"center",shrink:1,children:o.jsx(ue,{color:b.white})});const V=g==="all"?D:D.filter(h=>h.edge_type==="CHILD_OF");return o.jsxs(o.Fragment,{children:[o.jsx(y,{ml:-20,mr:-20,mt:-20,children:o.jsx(Vr,{activeTab:g,onClose:t,setActiveTab:w})}),o.jsxs(y,{align:"stretch",direction:"row",grow:1,children:[o.jsx(y,{mb:-20,ml:-20,children:B||e?o.jsx(Jt,{children:o.jsx(eo,{children:o.jsx(hr,{graphLoading:u,onDelete:k,onSchemaCreate:R,onSchemaUpdate:P,selectedSchema:B,setGraphLoading:x,setIsCreateNew:s,setSelectedSchemaId:n})})}):null}),o.jsx(y,{children:a?o.jsx(Jt,{children:o.jsx(eo,{children:o.jsx(Rn,{edgeData:$,setGraphLoading:x,setIsAddEdgeNode:l})})}):null}),o.jsx(y,{children:o.jsx(Yr,{onAddEdgeNode:()=>{l(!0),s(!1),n(""),d({refId:"",edgeType:"",source:"",target:""})},onCreateNew:()=>{l(!1),s(!0),n("")}})}),o.jsx(Kr,{direction:"row",grow:1,children:o.jsx(Xr,{children:u?o.jsx(y,{align:"center",basis:"100%",grow:1,justify:"center",shrink:1,children:o.jsx(ue,{color:b.white})}):o.jsx(Br,{links:V,onEdgeClick:(h,_,F,I)=>{d({refId:h,edgeType:_,source:F,target:I}),l(!0),s(!1),n("")},schemasWithPositions:S,selectedSchemaId:r,setIsAddEdgeNode:l,setSelectedSchemaId:n})})})]})]})},Kr=v(y)`
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
`,Jt=v(y)`
  width: 100%;
  max-width: 400px;
  background: ${b.BG1};
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
`,eo=v.div`
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
`,Xr=v(y)`
  flex: 1 1 100%;
`,qr=()=>{const{close:t}=co("blueprintGraph"),r=()=>{t()};return o.jsx(Oo,{background:"black",id:"blueprintGraph",kind:"full",preventOutsideClose:!0,children:o.jsx(Zr,{Close:r})})},wi=m.memo(qr);export{wi as BlueprintModal};
