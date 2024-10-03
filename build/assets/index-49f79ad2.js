import{r as x,g as Xt,c as qt,s as _e,b as U,u as Qt,l as yo,_ as Jt,j as n,e as eo,bv as He,bw as xt,f as to,h as be,d as Ct,ak as wo,al as jo,p as _,q as w,bg as gt,E as se,F as v,b0 as Ye,bx as vo,by as ot,bz as Eo,bf as oo,U as no,bA as Po,a$ as ge,ah as ft,a2 as Tt,a1 as kt,a0 as $t,Z as At,Y as Co,O as To,au as Mt}from"./index-3b9447c2.js";import{B as ko}from"./index-1da849f8.js";import{z as bt,B as Ue,F as ro,d as yt,L as $o,y as Ao,E as Mo,M as _o,g as so}from"./index-dfad0ea4.js";import{O as Oo,n as Io,a as _t,N as io}from"./constants-a6b58f4d.js";import{T as We}from"./index-44da5082.js";import{A as Ae}from"./index-28ea961c.js";import{C as ue}from"./ClipLoader-90e0b25d.js";import{D as ao}from"./DeleteIcon-24289191.js";import{P as co}from"./PlusIcon-b948d2a4.js";import{p as ht,c as So,g as No}from"./index-44e303ef.js";import{S as zo,F as Ro}from"./FormControlLabel-a5e86d56.js";import{e as Bo}from"./Stack-bed1c392.js";import{g as Lo,m as Do,u as te,b as Ze,t as mt,T as lo,i as uo,H as Vo,j as Ot,k as Fo,P as Go,l as Yo,F as Wo,C as Ho}from"./CreateEdgeIcon-4c640085.js";import{Z as Uo,_ as Zo,E as Ko,V as z,$ as me,a0 as xe,a1 as It,P as Ve,a2 as Fe,a3 as St,a as Q,a4 as Xo,G as qo,C as Qo}from"./three.module-2ce81f73.js";import"./index.esm-78ad86e8.js";import"./createSvgIcon-aba5ad60.js";import"./TextareaAutosize-f9e624d4.js";import"./Typography-f662ecf3.js";const Jo=x.createContext(),Nt=Jo;function en(t){return Xt("MuiGrid",t)}const tn=[0,1,2,3,4,5,6,7,8,9,10],on=["column-reverse","column","row-reverse","row"],nn=["nowrap","wrap-reverse","wrap"],$e=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12],rn=qt("MuiGrid",["root","container","item","zeroMinWidth",...tn.map(t=>`spacing-xs-${t}`),...on.map(t=>`direction-xs-${t}`),...nn.map(t=>`wrap-xs-${t}`),...$e.map(t=>`grid-xs-${t}`),...$e.map(t=>`grid-sm-${t}`),...$e.map(t=>`grid-md-${t}`),...$e.map(t=>`grid-lg-${t}`),...$e.map(t=>`grid-xl-${t}`)]),Me=rn,sn=["className","columns","columnSpacing","component","container","direction","item","rowSpacing","spacing","wrap","zeroMinWidth"];function ye(t){const r=parseFloat(t);return`${r}${String(t).replace(String(r),"")||"px"}`}function an({theme:t,ownerState:r}){let o;return t.breakpoints.keys.reduce((e,a)=>{let d={};if(r[a]&&(o=r[a]),!o)return e;if(o===!0)d={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if(o==="auto")d={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{const u=He({values:r.columns,breakpoints:t.breakpoints.values}),i=typeof u=="object"?u[a]:u;if(i==null)return e;const c=`${Math.round(o/i*1e8)/1e6}%`;let k={};if(r.container&&r.item&&r.columnSpacing!==0){const l=t.spacing(r.columnSpacing);if(l!=="0px"){const p=`calc(${c} + ${ye(l)})`;k={flexBasis:p,maxWidth:p}}}d=U({flexBasis:c,flexGrow:0,maxWidth:c},k)}return t.breakpoints.values[a]===0?Object.assign(e,d):e[t.breakpoints.up(a)]=d,e},{})}function cn({theme:t,ownerState:r}){const o=He({values:r.direction,breakpoints:t.breakpoints.values});return xt({theme:t},o,e=>{const a={flexDirection:e};return e.indexOf("column")===0&&(a[`& > .${Me.item}`]={maxWidth:"none"}),a})}function po({breakpoints:t,values:r}){let o="";Object.keys(r).forEach(a=>{o===""&&r[a]!==0&&(o=a)});const e=Object.keys(t).sort((a,d)=>t[a]-t[d]);return e.slice(0,e.indexOf(o))}function ln({theme:t,ownerState:r}){const{container:o,rowSpacing:e}=r;let a={};if(o&&e!==0){const d=He({values:e,breakpoints:t.breakpoints.values});let u;typeof d=="object"&&(u=po({breakpoints:t.breakpoints.values,values:d})),a=xt({theme:t},d,(i,c)=>{var k;const l=t.spacing(i);return l!=="0px"?{marginTop:`-${ye(l)}`,[`& > .${Me.item}`]:{paddingTop:ye(l)}}:(k=u)!=null&&k.includes(c)?{}:{marginTop:0,[`& > .${Me.item}`]:{paddingTop:0}}})}return a}function dn({theme:t,ownerState:r}){const{container:o,columnSpacing:e}=r;let a={};if(o&&e!==0){const d=He({values:e,breakpoints:t.breakpoints.values});let u;typeof d=="object"&&(u=po({breakpoints:t.breakpoints.values,values:d})),a=xt({theme:t},d,(i,c)=>{var k;const l=t.spacing(i);return l!=="0px"?{width:`calc(100% + ${ye(l)})`,marginLeft:`-${ye(l)}`,[`& > .${Me.item}`]:{paddingLeft:ye(l)}}:(k=u)!=null&&k.includes(c)?{}:{width:"100%",marginLeft:0,[`& > .${Me.item}`]:{paddingLeft:0}}})}return a}function un(t,r,o={}){if(!t||t<=0)return[];if(typeof t=="string"&&!Number.isNaN(Number(t))||typeof t=="number")return[o[`spacing-xs-${String(t)}`]];const e=[];return r.forEach(a=>{const d=t[a];Number(d)>0&&e.push(o[`spacing-${a}-${String(d)}`])}),e}const pn=_e("div",{name:"MuiGrid",slot:"Root",overridesResolver:(t,r)=>{const{ownerState:o}=t,{container:e,direction:a,item:d,spacing:u,wrap:i,zeroMinWidth:c,breakpoints:k}=o;let l=[];e&&(l=un(u,k,r));const p=[];return k.forEach(m=>{const g=o[m];g&&p.push(r[`grid-${m}-${String(g)}`])}),[r.root,e&&r.container,d&&r.item,c&&r.zeroMinWidth,...l,a!=="row"&&r[`direction-xs-${String(a)}`],i!=="wrap"&&r[`wrap-xs-${String(i)}`],...p]}})(({ownerState:t})=>U({boxSizing:"border-box"},t.container&&{display:"flex",flexWrap:"wrap",width:"100%"},t.item&&{margin:0},t.zeroMinWidth&&{minWidth:0},t.wrap!=="wrap"&&{flexWrap:t.wrap}),cn,ln,dn,an);function fn(t,r){if(!t||t<=0)return[];if(typeof t=="string"&&!Number.isNaN(Number(t))||typeof t=="number")return[`spacing-xs-${String(t)}`];const o=[];return r.forEach(e=>{const a=t[e];if(Number(a)>0){const d=`spacing-${e}-${String(a)}`;o.push(d)}}),o}const hn=t=>{const{classes:r,container:o,direction:e,item:a,spacing:d,wrap:u,zeroMinWidth:i,breakpoints:c}=t;let k=[];o&&(k=fn(d,c));const l=[];c.forEach(m=>{const g=t[m];g&&l.push(`grid-${m}-${String(g)}`)});const p={root:["root",o&&"container",a&&"item",i&&"zeroMinWidth",...k,e!=="row"&&`direction-xs-${String(e)}`,u!=="wrap"&&`wrap-xs-${String(u)}`,...l]};return to(p,en,r)},mn=x.forwardRef(function(r,o){const e=Qt({props:r,name:"MuiGrid"}),{breakpoints:a}=yo(),d=Bo(e),{className:u,columns:i,columnSpacing:c,component:k="div",container:l=!1,direction:p="row",item:m=!1,rowSpacing:g,spacing:b=0,wrap:M="wrap",zeroMinWidth:y=!1}=d,E=Jt(d,sn),j=g||b,R=c||b,P=x.useContext(Nt),T=l?i||12:P,N={},V=U({},E);a.keys.forEach(h=>{E[h]!=null&&(N[h]=E[h],delete V[h])});const B=U({},d,{columns:T,container:l,direction:p,item:m,rowSpacing:j,columnSpacing:R,wrap:M,zeroMinWidth:y,spacing:b},N,{breakpoints:a.keys}),D=hn(B);return n.jsx(Nt.Provider,{value:T,children:n.jsx(pn,U({ownerState:B,className:eo(D.root,u),as:k,ref:o},V))})}),ie=mn;function xn(t){return Xt("MuiSwitch",t)}const gn=qt("MuiSwitch",["root","edgeStart","edgeEnd","switchBase","colorPrimary","colorSecondary","sizeSmall","sizeMedium","checked","disabled","input","thumb","track"]),H=gn,bn=["className","color","edge","size","sx"],yn=t=>{const{classes:r,edge:o,size:e,color:a,checked:d,disabled:u}=t,i={root:["root",o&&`edge${be(o)}`,`size${be(e)}`],switchBase:["switchBase",`color${be(a)}`,d&&"checked",u&&"disabled"],thumb:["thumb"],track:["track"],input:["input"]},c=to(i,xn,r);return U({},r,c)},wn=_e("span",{name:"MuiSwitch",slot:"Root",overridesResolver:(t,r)=>{const{ownerState:o}=t;return[r.root,o.edge&&r[`edge${be(o.edge)}`],r[`size${be(o.size)}`]]}})(({ownerState:t})=>U({display:"inline-flex",width:34+12*2,height:14+12*2,overflow:"hidden",padding:12,boxSizing:"border-box",position:"relative",flexShrink:0,zIndex:0,verticalAlign:"middle","@media print":{colorAdjust:"exact"}},t.edge==="start"&&{marginLeft:-8},t.edge==="end"&&{marginRight:-8},t.size==="small"&&{width:40,height:24,padding:7,[`& .${H.thumb}`]:{width:16,height:16},[`& .${H.switchBase}`]:{padding:4,[`&.${H.checked}`]:{transform:"translateX(16px)"}}})),jn=_e(zo,{name:"MuiSwitch",slot:"SwitchBase",overridesResolver:(t,r)=>{const{ownerState:o}=t;return[r.switchBase,{[`& .${H.input}`]:r.input},o.color!=="default"&&r[`color${be(o.color)}`]]}})(({theme:t})=>({position:"absolute",top:0,left:0,zIndex:1,color:t.vars?t.vars.palette.Switch.defaultColor:`${t.palette.mode==="light"?t.palette.common.white:t.palette.grey[300]}`,transition:t.transitions.create(["left","transform"],{duration:t.transitions.duration.shortest}),[`&.${H.checked}`]:{transform:"translateX(20px)"},[`&.${H.disabled}`]:{color:t.vars?t.vars.palette.Switch.defaultDisabledColor:`${t.palette.mode==="light"?t.palette.grey[100]:t.palette.grey[600]}`},[`&.${H.checked} + .${H.track}`]:{opacity:.5},[`&.${H.disabled} + .${H.track}`]:{opacity:t.vars?t.vars.opacity.switchTrackDisabled:`${t.palette.mode==="light"?.12:.2}`},[`& .${H.input}`]:{left:"-100%",width:"300%"}}),({theme:t,ownerState:r})=>U({"&:hover":{backgroundColor:t.vars?`rgba(${t.vars.palette.action.activeChannel} / ${t.vars.palette.action.hoverOpacity})`:Ct(t.palette.action.active,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},r.color!=="default"&&{[`&.${H.checked}`]:{color:(t.vars||t).palette[r.color].main,"&:hover":{backgroundColor:t.vars?`rgba(${t.vars.palette[r.color].mainChannel} / ${t.vars.palette.action.hoverOpacity})`:Ct(t.palette[r.color].main,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${H.disabled}`]:{color:t.vars?t.vars.palette.Switch[`${r.color}DisabledColor`]:`${t.palette.mode==="light"?wo(t.palette[r.color].main,.62):jo(t.palette[r.color].main,.55)}`}},[`&.${H.checked} + .${H.track}`]:{backgroundColor:(t.vars||t).palette[r.color].main}})),vn=_e("span",{name:"MuiSwitch",slot:"Track",overridesResolver:(t,r)=>r.track})(({theme:t})=>({height:"100%",width:"100%",borderRadius:14/2,zIndex:-1,transition:t.transitions.create(["opacity","background-color"],{duration:t.transitions.duration.shortest}),backgroundColor:t.vars?t.vars.palette.common.onBackground:`${t.palette.mode==="light"?t.palette.common.black:t.palette.common.white}`,opacity:t.vars?t.vars.opacity.switchTrack:`${t.palette.mode==="light"?.38:.3}`})),En=_e("span",{name:"MuiSwitch",slot:"Thumb",overridesResolver:(t,r)=>r.thumb})(({theme:t})=>({boxShadow:(t.vars||t).shadows[1],backgroundColor:"currentColor",width:20,height:20,borderRadius:"50%"})),Pn=x.forwardRef(function(r,o){const e=Qt({props:r,name:"MuiSwitch"}),{className:a,color:d="primary",edge:u=!1,size:i="medium",sx:c}=e,k=Jt(e,bn),l=U({},e,{color:d,edge:u,size:i}),p=yn(l),m=n.jsx(En,{className:p.thumb,ownerState:l});return n.jsxs(wn,{className:eo(p.root,a),sx:c,ownerState:l,children:[n.jsx(jn,U({type:"checkbox",icon:m,checkedIcon:m,ref:o,ownerState:l},k,{classes:U({},p,{root:p.switchBase})})),n.jsx(vn,{className:p.track,ownerState:l})]})}),fo=Pn,Cn={type:"",parent:""},zt=({onSelect:t,dataTestId:r,edgeLink:o,hideSelectAll:e,placeholder:a})=>{const d=bt({mode:"onChange",defaultValues:Cn}),{watch:u,setValue:i}=d,[c,k]=x.useState([]),[l,p]=x.useState(!1),m=y=>{i("parent",(y==null?void 0:y.value)||""),t(y==null?void 0:y.value)},g=y=>y.charAt(0).toUpperCase()+y.slice(1);x.useEffect(()=>{(async()=>{p(!0);try{const j=(await gt()).schemas.filter(P=>!P.is_deleted&&P.type).map(P=>(P==null?void 0:P.type)==="thing"?{label:"No Parent",value:P.type}:{label:g(P.type),value:P.type});k(e?j:[{label:"Select all",value:"all"},...j]),o&&i("parent",o)}catch(E){console.warn(E)}finally{p(!1)}})()},[o,i,e]);const b=u("parent"),M=()=>{const y=c==null?void 0:c.find(E=>E.value===b);if(y)return y;if(o)return{label:o,value:o}};return n.jsx(Tn,{dataTestId:r,disabled:!!o,isLoading:l,onSelect:m,options:c||Oo,placeholder:a,selectedValue:M()})},Tn=_(Ae)`
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
`,kn=({selectedType:t,setSelectedFromNode:r,setSelectedToNode:o,edgeLinkData:e,selectedFromNode:a,selectedToNode:d})=>{const u=d==="all",i=a==="all";return n.jsxs(v,{mt:8,children:[n.jsxs(v,{mb:25,children:[n.jsx(v,{mb:5,children:n.jsx(nt,{children:"Source"})}),n.jsx(zt,{dataTestId:"from_node",edgeLink:e==null?void 0:e.source,hideSelectAll:u,onSelect:r,placeholder:"Source Name"})]}),n.jsxs(v,{mb:10,children:[n.jsx(v,{mb:5,children:n.jsx(nt,{children:"Edge Name"})}),n.jsx(v,{mb:12,children:n.jsx(We,{id:"cy-item-name",maxLength:250,name:"type",placeholder:"Enter Edge Name",rules:{...Ye,pattern:{message:"No leading whitespace allowed",value:Io}},value:t})})]}),n.jsxs(v,{mb:25,children:[n.jsx(v,{mb:5,children:n.jsx(nt,{children:"Destination"})}),n.jsx(zt,{dataTestId:"to_node",edgeLink:e==null?void 0:e.target,hideSelectAll:i,onSelect:o,placeholder:"Select Destination"})]})]})},nt=_(se)`
  font-family: Barlow;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0.01em;
  text-align: left;
  margin-left: 1px;
  color: ${w.mainBottomIcons};
`,$n=({onCancel:t,edgeLinkData:r,setGraphLoading:o})=>{var N,V,B;const e=bt({mode:"onChange"}),{setValue:a,getValues:d}=e,[u,i]=x.useState(!1),[c,k]=x.useState(!1),[l,p]=x.useState(""),[m,g]=x.useState(""),[b,M]=x.useState(""),y=e.watch("type");x.useEffect(()=>{a("type",r==null?void 0:r.edgeType)},[r==null?void 0:r.edgeType,a]),x.useEffect(()=>{p(y)},[y]);const E=e.handleSubmit(async D=>{i(!0),o(!0);const h={source:m,target:b,edge_type:D.type},O={ref_id:r==null?void 0:r.refId,edge_type:D.type};try{if(r!=null&&r.refId)await vo(O);else if(b&&m)if(m==="all"||b==="all"){const I=(await gt()).schemas.filter(G=>!G.is_deleted&&G.type).map(G=>G.type);m==="all"?await Promise.all(I.map(G=>ot({...h,source:G}))):b==="all"&&await Promise.all(I.map(G=>ot({...h,target:G})))}else await ot(h)}catch(F){console.warn("API Error:",F)}finally{i(!1),o(!1),g(""),M(""),t()}}),j=(V=(N=d())==null?void 0:N.type)==null?void 0:V.trim(),R=j&&((B=r==null?void 0:r.edgeType)==null?void 0:B.trim())!==j,P=r!=null&&r.refId?u||!R:u||!b.trim()||!m.trim()||!l.trim(),T=async()=>{k(!0),o(!0);try{r!=null&&r.refId&&await Eo(r==null?void 0:r.refId)}catch(D){console.warn("API Error:",D)}finally{k(!1),o(!1),g(""),M(""),t()}};return n.jsx(ro,{...e,children:n.jsxs("form",{id:"add-type-form",onSubmit:E,children:[n.jsx(kn,{edgeLinkData:r,selectedFromNode:m,selectedToNode:b,selectedType:l,setSelectedFromNode:g,setSelectedToNode:M}),n.jsxs(v,{direction:"row",justify:"space-between",mt:20,children:[(r==null?void 0:r.refId)&&n.jsx(v,{direction:"column",children:n.jsxs(Mn,{color:"secondary",disabled:c,onClick:T,size:"large",style:{marginRight:20},variant:"contained",children:["Delete",c&&n.jsxs(Rt,{children:[n.jsx(ue,{color:w.lightGray,size:12})," "]})]})}),n.jsxs(An,{color:"secondary",disabled:P,onClick:E,size:"large",variant:"contained",children:["Confirm",u&&n.jsxs(Rt,{children:[n.jsx(ue,{color:w.lightGray,size:12})," "]})]})]})]})})},An=_(Ue)`
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
`,_n=({setIsAddEdgeNode:t,edgeData:r,setGraphLoading:o})=>{const e=()=>{t(!1)};return n.jsxs(v,{children:[n.jsxs(In,{align:"center",direction:"row",justify:"space-between",children:[n.jsx(Nn,{"data-testid":"edge-modal-title",children:r!=null&&r.refId?"Edit Edge":"Add Edge"}),n.jsx(On,{"data-testid":"close-sidebar-sub-view",onClick:e,children:n.jsx(yt,{})})]}),n.jsx(Sn,{}),n.jsx($n,{edgeLinkData:r,onCancel:e,setGraphLoading:o})]})},On=_(v)`
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
`,In=_(v)`
  margin-bottom: 16px;
`,Sn=_.div`
  border-bottom: 1px solid ${w.black};
  width: calc(100% + 32px);
  margin: 0 -16px 16px;
  opacity: 0.3;
`,Nn=_(se)`
  font-family: Barlow;
  font-size: 22px;
  font-weight: 600;
  line-height: 16px;
  letter-spacing: 0.01em;
  text-align: left;
  margin-left: 2px;
  color: ${w.white};
`,zn=/^[a-z0-9_]+$/,Rn=({parentParam:t,onDelete:r})=>{const[o,e]=x.useState(!1),[a,d]=x.useState([]),{fields:u,append:i,replace:c,remove:k}=$o({name:"attributes"}),{setValue:l,watch:p}=Ao();return x.useEffect(()=>{const m=async()=>{try{let g=[{required:!1,type:"string",key:""}];if(t!==io.value.toLowerCase()){e(!0);const b=await oo(t);b.attributes&&typeof b.attributes=="object"?g=ht(b.attributes):g=ht(b)}g=g.filter(b=>b.key!=="node_key"),c(g),d(g)}catch(g){console.warn(g)}finally{e(!1)}};a.length===0&&m()},[t,l,c,a.length]),n.jsxs(n.Fragment,{children:[o?n.jsx(v,{align:"center",children:n.jsx(ue,{color:w.SECONDARY_BLUE,size:"30"})}):n.jsx(Bn,{py:8,children:n.jsx(ie,{container:!0,spacing:2,children:u.map((m,g)=>{const b=p(`attributes[${g}].type`),M=p(`attributes[${g}].required`),y=m.isNew||!1,E=["name"].includes(p(`attributes[${g}].key`));return n.jsxs(x.Fragment,{children:[n.jsx(ie,{item:!0,xs:5,children:n.jsx(We,{autoComplete:"off",className:"text-input",dataTestId:`cy-item-name-${g}`,disabled:!y,id:`cy-item-name-${g}`,maxLength:50,name:`attributes.${g}.key`,placeholder:"Enter value",rules:{...Ye,pattern:{message:"Please avoid special characters, spaces and uppercase",value:zn}}})}),n.jsx(ie,{item:!0,xs:4,children:n.jsx(Ae,{dataTestId:`cy-item-select-${g}`,disabled:E,onSelect:j=>l(`attributes[${g}].type`,j==null?void 0:j.value),options:_t,selectedValue:_t.find(j=>j.value===b)})}),n.jsx(ie,{item:!0,xs:3,children:n.jsxs(Dn,{children:[n.jsx(Ln,{checked:M,"data-testid":`cy-item-${g}`,disabled:E,name:`attributes.${g}.required`,onChange:j=>l(`attributes[${g}].required`,j.target.checked)}),!E&&n.jsx(Mo,{onClick:()=>{k(g),m.key!==void 0&&r&&r(m.key)},children:n.jsx(ao,{})})]})})]},m.id)})})}),n.jsx(v,{align:"flex-start",py:12,children:n.jsx(Vn,{"data-testid":"add-attribute-btn",onClick:()=>i({key:"",type:"string",required:!0,isNew:!0}),children:n.jsxs(Fn,{children:[n.jsx(co,{})," Add Attribute"]})})})]})},Bn=_(v)`
  overflow-y: auto;
  width: calc(100% + 20px);
  max-height: calc(80vh - 300px);
`,Ln=_(t=>n.jsx(fo,{...t}))`
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
`,Dn=_.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`,Vn=_.button`
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
`,Fn=_.span`
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
`,Gn=({parent:t,onDelete:r})=>{const o=t;return n.jsxs(v,{children:[n.jsx(v,{direction:"row",mb:10,children:n.jsxs(ie,{container:!0,spacing:2,children:[n.jsx(ie,{item:!0,xs:5,children:n.jsx(rt,{style:{marginRight:180},children:"Attributes"})}),n.jsx(ie,{item:!0,xs:4,children:n.jsx(rt,{style:{marginRight:130},children:"Type"})}),n.jsx(ie,{item:!0,xs:3,children:n.jsx(rt,{children:"Required"})})]})}),o&&n.jsx(Rn,{onDelete:r,parentParam:o},o)]})},rt=_(se)`
  font-size: 15px;
  color: gray;
`,Yn=({setMediaOptions:t,initialOptions:r})=>{const[o,e]=x.useState(r);x.useEffect(()=>{e(r)},[r]);const a=d=>{e(u=>{const i={...u,[d]:!u[d]};return t(i),i})};return n.jsxs(Wn,{direction:"column",children:[n.jsx(ct,{}),n.jsx(st,{control:n.jsx(at,{checked:o.videoAudio,onChange:()=>a("videoAudio")}),label:n.jsx(it,{active:o.videoAudio,children:"Video / Audio"}),labelPlacement:"start"}),n.jsx(ct,{}),n.jsx(st,{control:n.jsx(at,{checked:o.image,onChange:()=>a("image")}),label:n.jsx(it,{active:o.image,children:"Image"}),labelPlacement:"start"}),n.jsx(ct,{}),n.jsx(st,{control:n.jsx(at,{checked:o.sourceLink,onChange:()=>a("sourceLink")}),label:n.jsx(it,{active:o.sourceLink,children:"Source Link"}),labelPlacement:"start"})]})},Wn=_(v)`
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
`,at=_(t=>n.jsx(fo,{...t}))`
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
`,Bt={type:"",parent:""},Hn=(t,r)=>t.length!==r.length?!0:t.some((o,e)=>{const a=r[e];return o.required!==a.required||o.type!==a.type||o.key!==a.key}),Un=async(t,r=!1,o,e,a)=>{try{const{attributes:d,selectedIndex:u,ref_id:i,...c}=t,k={...So(d),...o.reduce((m,g)=>({...m,[g]:"delete"}),{})},l={...c,attributes:k,index:u};e.videoAudio?l.media_url="":a.videoAudio&&(l.media_url="delete"),e.image?l.image_url="":a.image&&(l.image_url="delete"),e.sourceLink?l.source_link="":a.sourceLink&&(l.source_link="delete");let p;if(r?p=await ft.put(`/schema/${t.ref_id}`,JSON.stringify(l),{}):p=await ft.post("/schema",JSON.stringify({...l,node_key:"name"}),{}),p.status!=="success")throw new Error("error");return p==null?void 0:p.ref_id}catch(d){let u=ge;if(d.status===400){const i=await d.json();u=i.errorCode||(i==null?void 0:i.status)||ge}else d instanceof Error&&(u=d.message);throw new Error(u)}},Zn=t=>t.charAt(0).toUpperCase()+t.slice(1),Lt=async(t,r)=>{try{const d=((await gt()).schemas||[]).filter(u=>!u.is_deleted&&u.type&&(!r||r(u))).map(u=>u.type==="thing"?{label:"No Parent",value:u.type}:{label:Zn(u.type),value:u.type});t(d)}catch(o){console.warn(o)}},Kn=({graphLoading:t,onSchemaCreate:r,selectedSchema:o,onDelete:e,setSelectedSchemaId:a,setGraphLoading:d,setIsCreateNew:u,onSchemaUpdate:i})=>{const{close:c,visible:k}=no("addType"),l=bt({mode:"onChange",defaultValues:o?{type:o.type,parent:o.parent}:Bt}),{watch:p,setValue:m,reset:g,getValues:b}=l,[M,y]=x.useState(!1),[E,j]=x.useState(!1),[R,P]=x.useState(!1),[T,N]=x.useState(null),[V,B]=x.useState(!1),[D,h]=x.useState(null),[O,F]=x.useState(""),[I,G]=x.useState(null),[Z,ee]=x.useState([]),[ae,q]=x.useState([]),[we,Oe]=x.useState(!0),[je,le]=x.useState({videoAudio:!1,image:!1,sourceLink:!1});x.useEffect(()=>()=>{g()},[k,g]);const Ie=()=>{u(!1),a("")};x.useEffect(()=>{o||(P(!0),Lt(N).finally(()=>P(!1)))},[o]),x.useEffect(()=>{(()=>{g(Bt),q([{required:!1,type:"string",key:""}]),ee([]),le({videoAudio:!1,image:!1,sourceLink:!1})})(),o&&(m("type",o.type),m("parent",o.parent),o.index&&m("selectedIndex",o.index),le({videoAudio:!!o.media_url,image:!!o.image_url,sourceLink:!!o.source_link}),o.type!==io.value.toLowerCase()&&oo(o.type).then(S=>{const X=(S?ht(S):[{required:!1,type:"string",key:""}]).filter(pe=>pe.key!=="node_key");q(X)}),Lt(h,S=>S.type!==o.type))},[o,m,g]);const K=p("parent");p("type");const Se=C=>Array.isArray(C)&&C.every(S=>typeof S=="object"&&"key"in S),ve=p("attributes"),de=x.useMemo(()=>Se(ve)?ve.filter(C=>C.key&&C.key.trim()!==""):[],[ve]),Ke=()=>{c()},Xe=C=>{ee(S=>[...S,C])},qe=async()=>{if(o!=null&&o.type){j(!0),d(!0);try{await ft.delete(`/schema/${o.ref_id}`),e(o.type),c()}catch(C){let S=ge;if((C==null?void 0:C.status)===400){const W=await C.json();S=W.errorCode||(W==null?void 0:W.status)||ge}else C instanceof Error&&(S=C.message);G(S)}finally{j(!1),d(!1),u(!1)}}},Ee=l.handleSubmit(async C=>{if(!K){B(!0);return}y(!0);try{if(o&&C.type!==(o==null?void 0:o.type)||o&&b().parent!==(o==null?void 0:o.parent)){const W=b().parent??(o==null?void 0:o.parent),{selectedIndex:X}=b();d(!0),await Po(o==null?void 0:o.ref_id,{type:C.type,parent:W,attributes:{index:X}}),await i()}const S=await Un({...C,...o?{ref_id:o==null?void 0:o.ref_id}:{}},!!o,Z,je,{videoAudio:!!(o!=null&&o.media_url),image:!!(o!=null&&o.image_url),sourceLink:!!(o!=null&&o.source_link)});r({type:C.type,parent:K||"",ref_id:(o==null?void 0:o.ref_id)||S||"new"}),Ke()}catch(S){let W=ge;if((S==null?void 0:S.status)===400){const X=await S.json();W=X.errorCode||(X==null?void 0:X.status)||ge}else S instanceof Error&&(W=S.message);F(W)}finally{y(!1),d(!1),u(!1)}});x.useEffect(()=>{const C=l.watch(S=>{var Pe,fe,he,Ce,Re,Be;const W=Hn(de,ae),X=((Pe=S.type)==null?void 0:Pe.trim())!==((fe=o==null?void 0:o.type)==null?void 0:fe.trim())||((he=S.parent)==null?void 0:he.trim())!==((Ce=o==null?void 0:o.parent)==null?void 0:Ce.trim())||W,pe=!!((Re=S.type)!=null&&Re.trim()),Je=!!((Be=S.parent)!=null&&Be.trim());Oe(o?M||!X||!pe||V:M||V||!pe||!Je)});return()=>C.unsubscribe()},[l,de,ae,o,M,V]);const Ne=()=>T==null?void 0:T.find(C=>C.value===K),ze=x.useMemo(()=>{if(K){const C=D==null?void 0:D.find(S=>S.value===K);return C||{label:K,value:K}}if(o!=null&&o.parent){const C=D==null?void 0:D.find(S=>S.value===o.parent);return C||{label:o.parent,value:o.parent}}},[K,o,D]),Qe=x.useMemo(()=>{if(!o)return;const C=de.find(S=>S.key===o.index);if(C)return{label:C.key,value:C.key};if(o.index)return{label:o.index,value:o.index}},[o,de]);return n.jsxs(v,{children:[n.jsxs(er,{children:[n.jsx(tr,{children:o?"Edit Type":"Create Type"}),n.jsx(Jn,{"data-testid":"close-sidebar-sub-view",onClick:Ie,children:n.jsx(yt,{})})]}),n.jsx(qn,{}),n.jsx(v,{children:n.jsx(ro,{...l,children:n.jsxs("form",{id:"add-type-form",onSubmit:Ee,children:[n.jsx(v,{children:o?n.jsxs(n.Fragment,{children:[n.jsxs(v,{mb:12,children:[n.jsx(v,{mb:12,children:n.jsx(se,{children:"Name"})}),n.jsx(v,{mb:12,children:n.jsx(We,{dataTestId:"cy-item-name",defaultValue:o==null?void 0:o.type,id:"cy-item-name",maxLength:250,name:"type",placeholder:"Enter type name",rules:{...Ye},value:K})})]}),n.jsxs(v,{mb:12,children:[n.jsx(v,{mb:12,children:n.jsx(se,{children:"Parent"})}),n.jsx(Ae,{isLoading:R||t,onSelect:C=>{m("parent",(C==null?void 0:C.value)||""),B(!1)},options:D||[],selectedValue:ze}),O&&n.jsx(lt,{children:O})]})]}):n.jsxs(n.Fragment,{children:[n.jsxs(v,{mb:12,children:[n.jsx(v,{mb:12,children:n.jsx(se,{children:"Select Parent"})}),n.jsx(Ae,{isLoading:R,onSelect:C=>{m("parent",(C==null?void 0:C.value)||""),B(!1)},options:T,selectedValue:Ne()}),V&&n.jsx(lt,{children:"A parent type must be selected"})]}),n.jsxs(v,{children:[n.jsx(v,{mb:12,children:n.jsx(se,{children:"Type name"})}),n.jsx(v,{mb:12,children:n.jsx(We,{id:"cy-item-name",maxLength:250,name:"type",placeholder:"Enter type name",rules:{...Ye},value:K})})]})]})}),n.jsx(Gn,{onDelete:Xe,parent:o?o.type:K}),n.jsx(Yn,{initialOptions:je,setMediaOptions:le}),n.jsxs(v,{children:[n.jsx(Vt,{}),n.jsx(v,{mb:12,mt:12,children:n.jsx(se,{children:"Indexes"})}),n.jsx(ie,{item:!0,mb:2,width:"70%",children:n.jsx(Ae,{onSelect:C=>m("selectedIndex",(C==null?void 0:C.value)||""),options:de.map(C=>({label:C.key,value:C.key})),selectedValue:Qe})}),n.jsx(Vt,{})]}),n.jsxs(v,{direction:"row",justify:"space-between",mt:20,children:[o&&n.jsxs(v,{direction:"column",children:[n.jsxs(Qn,{color:"secondary",disabled:E,onClick:qe,size:"large",style:{marginRight:20},variant:"contained",children:["Delete",E&&n.jsxs(Dt,{children:[n.jsx(ue,{color:w.lightGray,size:12})," "]})]}),I&&n.jsx(lt,{children:I})]}),n.jsxs(Xn,{color:"secondary",disabled:we,onClick:Ee,size:"large",variant:"contained",children:["Confirm",M&&n.jsxs(Dt,{children:[n.jsx(ue,{color:w.lightGray,size:12})," "]})]})]})]})})})]})},Xn=_(Ue)`
  width: 100% !important;
  margin: 0 auto !important;
`,qn=_.div`
  border-bottom: 1px solid ${w.black};
  width: calc(100% + 32px);
  margin: 0 -16px 16px;
  opacity: 0.3;
`,Dt=_.span`
  margin-top: 2px;
`,Qn=_(Ue)`
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
`,Jn=_(v)`
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
`,Vt=_.div`
  border: 1px solid ${w.BG2};
  width: calc(100% + 32px);
  opacity: 0.5;
  margin-left: -16px;
`,er=_(v)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 16px;
`,tr=_(se)`
  font-family: Barlow;
  font-size: 22px;
  font-weight: 600;
  line-height: 16px;
  letter-spacing: 0.01em;
  text-align: left;
  color: ${w.white};
`;var or=Object.defineProperty,nr=(t,r,o)=>r in t?or(t,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[r]=o,$=(t,r,o)=>(nr(t,typeof r!="symbol"?r+"":r,o),o);const Ge=new Uo,Ft=new Zo,rr=Math.cos(70*(Math.PI/180)),Gt=(t,r)=>(t%r+r)%r;let sr=class extends Ko{constructor(r,o){super(),$(this,"object"),$(this,"domElement"),$(this,"enabled",!0),$(this,"target",new z),$(this,"minDistance",0),$(this,"maxDistance",1/0),$(this,"minZoom",0),$(this,"maxZoom",1/0),$(this,"minPolarAngle",0),$(this,"maxPolarAngle",Math.PI),$(this,"minAzimuthAngle",-1/0),$(this,"maxAzimuthAngle",1/0),$(this,"enableDamping",!1),$(this,"dampingFactor",.05),$(this,"enableZoom",!0),$(this,"zoomSpeed",1),$(this,"enableRotate",!0),$(this,"rotateSpeed",1),$(this,"enablePan",!0),$(this,"panSpeed",1),$(this,"screenSpacePanning",!0),$(this,"keyPanSpeed",7),$(this,"zoomToCursor",!1),$(this,"autoRotate",!1),$(this,"autoRotateSpeed",2),$(this,"reverseOrbit",!1),$(this,"reverseHorizontalOrbit",!1),$(this,"reverseVerticalOrbit",!1),$(this,"keys",{LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"}),$(this,"mouseButtons",{LEFT:me.ROTATE,MIDDLE:me.DOLLY,RIGHT:me.PAN}),$(this,"touches",{ONE:xe.ROTATE,TWO:xe.DOLLY_PAN}),$(this,"target0"),$(this,"position0"),$(this,"zoom0"),$(this,"_domElementKeyEvents",null),$(this,"getPolarAngle"),$(this,"getAzimuthalAngle"),$(this,"setPolarAngle"),$(this,"setAzimuthalAngle"),$(this,"getDistance"),$(this,"listenToKeyEvents"),$(this,"stopListenToKeyEvents"),$(this,"saveState"),$(this,"reset"),$(this,"update"),$(this,"connect"),$(this,"dispose"),this.object=r,this.domElement=o,this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this.getPolarAngle=()=>l.phi,this.getAzimuthalAngle=()=>l.theta,this.setPolarAngle=s=>{let f=Gt(s,2*Math.PI),A=l.phi;A<0&&(A+=2*Math.PI),f<0&&(f+=2*Math.PI);let L=Math.abs(f-A);2*Math.PI-L<L&&(f<A?f+=2*Math.PI:A+=2*Math.PI),p.phi=f-A,e.update()},this.setAzimuthalAngle=s=>{let f=Gt(s,2*Math.PI),A=l.theta;A<0&&(A+=2*Math.PI),f<0&&(f+=2*Math.PI);let L=Math.abs(f-A);2*Math.PI-L<L&&(f<A?f+=2*Math.PI:A+=2*Math.PI),p.theta=f-A,e.update()},this.getDistance=()=>e.object.position.distanceTo(e.target),this.listenToKeyEvents=s=>{s.addEventListener("keydown",et),this._domElementKeyEvents=s},this.stopListenToKeyEvents=()=>{this._domElementKeyEvents.removeEventListener("keydown",et),this._domElementKeyEvents=null},this.saveState=()=>{e.target0.copy(e.target),e.position0.copy(e.object.position),e.zoom0=e.object.zoom},this.reset=()=>{e.target.copy(e.target0),e.object.position.copy(e.position0),e.object.zoom=e.zoom0,e.object.updateProjectionMatrix(),e.dispatchEvent(a),e.update(),c=i.NONE},this.update=(()=>{const s=new z,f=new z(0,1,0),A=new It().setFromUnitVectors(r.up,f),L=A.clone().invert(),Y=new z,oe=new It,ce=2*Math.PI;return function(){const Pt=e.object.position;A.setFromUnitVectors(r.up,f),L.copy(A).invert(),s.copy(Pt).sub(e.target),s.applyQuaternion(A),l.setFromVector3(s),e.autoRotate&&c===i.NONE&&G(F()),e.enableDamping?(l.theta+=p.theta*e.dampingFactor,l.phi+=p.phi*e.dampingFactor):(l.theta+=p.theta,l.phi+=p.phi);let ne=e.minAzimuthAngle,re=e.maxAzimuthAngle;isFinite(ne)&&isFinite(re)&&(ne<-Math.PI?ne+=ce:ne>Math.PI&&(ne-=ce),re<-Math.PI?re+=ce:re>Math.PI&&(re-=ce),ne<=re?l.theta=Math.max(ne,Math.min(re,l.theta)):l.theta=l.theta>(ne+re)/2?Math.max(ne,l.theta):Math.min(re,l.theta)),l.phi=Math.max(e.minPolarAngle,Math.min(e.maxPolarAngle,l.phi)),l.makeSafe(),e.enableDamping===!0?e.target.addScaledVector(g,e.dampingFactor):e.target.add(g),e.zoomToCursor&&D||e.object.isOrthographicCamera?l.radius=le(l.radius):l.radius=le(l.radius*m),s.setFromSpherical(l),s.applyQuaternion(L),Pt.copy(e.target).add(s),e.object.matrixAutoUpdate||e.object.updateMatrix(),e.object.lookAt(e.target),e.enableDamping===!0?(p.theta*=1-e.dampingFactor,p.phi*=1-e.dampingFactor,g.multiplyScalar(1-e.dampingFactor)):(p.set(0,0,0),g.set(0,0,0));let Le=!1;if(e.zoomToCursor&&D){let Te=null;if(e.object instanceof Ve&&e.object.isPerspectiveCamera){const ke=s.length();Te=le(ke*m);const De=ke-Te;e.object.position.addScaledVector(V,De),e.object.updateMatrixWorld()}else if(e.object.isOrthographicCamera){const ke=new z(B.x,B.y,0);ke.unproject(e.object),e.object.zoom=Math.max(e.minZoom,Math.min(e.maxZoom,e.object.zoom/m)),e.object.updateProjectionMatrix(),Le=!0;const De=new z(B.x,B.y,0);De.unproject(e.object),e.object.position.sub(De).add(ke),e.object.updateMatrixWorld(),Te=s.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),e.zoomToCursor=!1;Te!==null&&(e.screenSpacePanning?e.target.set(0,0,-1).transformDirection(e.object.matrix).multiplyScalar(Te).add(e.object.position):(Ge.origin.copy(e.object.position),Ge.direction.set(0,0,-1).transformDirection(e.object.matrix),Math.abs(e.object.up.dot(Ge.direction))<rr?r.lookAt(e.target):(Ft.setFromNormalAndCoplanarPoint(e.object.up,e.target),Ge.intersectPlane(Ft,e.target))))}else e.object instanceof Fe&&e.object.isOrthographicCamera&&(e.object.zoom=Math.max(e.minZoom,Math.min(e.maxZoom,e.object.zoom/m)),e.object.updateProjectionMatrix(),Le=!0);return m=1,D=!1,Le||Y.distanceToSquared(e.object.position)>k||8*(1-oe.dot(e.object.quaternion))>k?(e.dispatchEvent(a),Y.copy(e.object.position),oe.copy(e.object.quaternion),Le=!1,!0):!1}})(),this.connect=s=>{s===document&&console.error('THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.'),e.domElement=s,e.domElement.style.touchAction="none",e.domElement.addEventListener("contextmenu",jt),e.domElement.addEventListener("pointerdown",Pe),e.domElement.addEventListener("pointercancel",Ce),e.domElement.addEventListener("wheel",wt)},this.dispose=()=>{var s,f,A,L,Y,oe;(s=e.domElement)==null||s.removeEventListener("contextmenu",jt),(f=e.domElement)==null||f.removeEventListener("pointerdown",Pe),(A=e.domElement)==null||A.removeEventListener("pointercancel",Ce),(L=e.domElement)==null||L.removeEventListener("wheel",wt),(Y=e.domElement)==null||Y.ownerDocument.removeEventListener("pointermove",fe),(oe=e.domElement)==null||oe.ownerDocument.removeEventListener("pointerup",he),e._domElementKeyEvents!==null&&e._domElementKeyEvents.removeEventListener("keydown",et)};const e=this,a={type:"change"},d={type:"start"},u={type:"end"},i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let c=i.NONE;const k=1e-6,l=new St,p=new St;let m=1;const g=new z,b=new Q,M=new Q,y=new Q,E=new Q,j=new Q,R=new Q,P=new Q,T=new Q,N=new Q,V=new z,B=new Q;let D=!1;const h=[],O={};function F(){return 2*Math.PI/60/60*e.autoRotateSpeed}function I(){return Math.pow(.95,e.zoomSpeed)}function G(s){e.reverseOrbit||e.reverseHorizontalOrbit?p.theta+=s:p.theta-=s}function Z(s){e.reverseOrbit||e.reverseVerticalOrbit?p.phi+=s:p.phi-=s}const ee=(()=>{const s=new z;return function(A,L){s.setFromMatrixColumn(L,0),s.multiplyScalar(-A),g.add(s)}})(),ae=(()=>{const s=new z;return function(A,L){e.screenSpacePanning===!0?s.setFromMatrixColumn(L,1):(s.setFromMatrixColumn(L,0),s.crossVectors(e.object.up,s)),s.multiplyScalar(A),g.add(s)}})(),q=(()=>{const s=new z;return function(A,L){const Y=e.domElement;if(Y&&e.object instanceof Ve&&e.object.isPerspectiveCamera){const oe=e.object.position;s.copy(oe).sub(e.target);let ce=s.length();ce*=Math.tan(e.object.fov/2*Math.PI/180),ee(2*A*ce/Y.clientHeight,e.object.matrix),ae(2*L*ce/Y.clientHeight,e.object.matrix)}else Y&&e.object instanceof Fe&&e.object.isOrthographicCamera?(ee(A*(e.object.right-e.object.left)/e.object.zoom/Y.clientWidth,e.object.matrix),ae(L*(e.object.top-e.object.bottom)/e.object.zoom/Y.clientHeight,e.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),e.enablePan=!1)}})();function we(s){e.object instanceof Ve&&e.object.isPerspectiveCamera||e.object instanceof Fe&&e.object.isOrthographicCamera?m/=s:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),e.enableZoom=!1)}function Oe(s){e.object instanceof Ve&&e.object.isPerspectiveCamera||e.object instanceof Fe&&e.object.isOrthographicCamera?m*=s:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),e.enableZoom=!1)}function je(s){if(!e.zoomToCursor||!e.domElement)return;D=!0;const f=e.domElement.getBoundingClientRect(),A=s.clientX-f.left,L=s.clientY-f.top,Y=f.width,oe=f.height;B.x=A/Y*2-1,B.y=-(L/oe)*2+1,V.set(B.x,B.y,1).unproject(e.object).sub(e.object.position).normalize()}function le(s){return Math.max(e.minDistance,Math.min(e.maxDistance,s))}function Ie(s){b.set(s.clientX,s.clientY)}function K(s){je(s),P.set(s.clientX,s.clientY)}function Se(s){E.set(s.clientX,s.clientY)}function ve(s){M.set(s.clientX,s.clientY),y.subVectors(M,b).multiplyScalar(e.rotateSpeed);const f=e.domElement;f&&(G(2*Math.PI*y.x/f.clientHeight),Z(2*Math.PI*y.y/f.clientHeight)),b.copy(M),e.update()}function de(s){T.set(s.clientX,s.clientY),N.subVectors(T,P),N.y>0?we(I()):N.y<0&&Oe(I()),P.copy(T),e.update()}function Ke(s){j.set(s.clientX,s.clientY),R.subVectors(j,E).multiplyScalar(e.panSpeed),q(R.x,R.y),E.copy(j),e.update()}function Xe(s){je(s),s.deltaY<0?Oe(I()):s.deltaY>0&&we(I()),e.update()}function qe(s){let f=!1;switch(s.code){case e.keys.UP:q(0,e.keyPanSpeed),f=!0;break;case e.keys.BOTTOM:q(0,-e.keyPanSpeed),f=!0;break;case e.keys.LEFT:q(e.keyPanSpeed,0),f=!0;break;case e.keys.RIGHT:q(-e.keyPanSpeed,0),f=!0;break}f&&(s.preventDefault(),e.update())}function Ee(){if(h.length==1)b.set(h[0].pageX,h[0].pageY);else{const s=.5*(h[0].pageX+h[1].pageX),f=.5*(h[0].pageY+h[1].pageY);b.set(s,f)}}function Ne(){if(h.length==1)E.set(h[0].pageX,h[0].pageY);else{const s=.5*(h[0].pageX+h[1].pageX),f=.5*(h[0].pageY+h[1].pageY);E.set(s,f)}}function ze(){const s=h[0].pageX-h[1].pageX,f=h[0].pageY-h[1].pageY,A=Math.sqrt(s*s+f*f);P.set(0,A)}function Qe(){e.enableZoom&&ze(),e.enablePan&&Ne()}function C(){e.enableZoom&&ze(),e.enableRotate&&Ee()}function S(s){if(h.length==1)M.set(s.pageX,s.pageY);else{const A=tt(s),L=.5*(s.pageX+A.x),Y=.5*(s.pageY+A.y);M.set(L,Y)}y.subVectors(M,b).multiplyScalar(e.rotateSpeed);const f=e.domElement;f&&(G(2*Math.PI*y.x/f.clientHeight),Z(2*Math.PI*y.y/f.clientHeight)),b.copy(M)}function W(s){if(h.length==1)j.set(s.pageX,s.pageY);else{const f=tt(s),A=.5*(s.pageX+f.x),L=.5*(s.pageY+f.y);j.set(A,L)}R.subVectors(j,E).multiplyScalar(e.panSpeed),q(R.x,R.y),E.copy(j)}function X(s){const f=tt(s),A=s.pageX-f.x,L=s.pageY-f.y,Y=Math.sqrt(A*A+L*L);T.set(0,Y),N.set(0,Math.pow(T.y/P.y,e.zoomSpeed)),we(N.y),P.copy(T)}function pe(s){e.enableZoom&&X(s),e.enablePan&&W(s)}function Je(s){e.enableZoom&&X(s),e.enableRotate&&S(s)}function Pe(s){var f,A;e.enabled!==!1&&(h.length===0&&((f=e.domElement)==null||f.ownerDocument.addEventListener("pointermove",fe),(A=e.domElement)==null||A.ownerDocument.addEventListener("pointerup",he)),bo(s),s.pointerType==="touch"?xo(s):Re(s))}function fe(s){e.enabled!==!1&&(s.pointerType==="touch"?go(s):Be(s))}function he(s){var f,A,L;vt(s),h.length===0&&((f=e.domElement)==null||f.releasePointerCapture(s.pointerId),(A=e.domElement)==null||A.ownerDocument.removeEventListener("pointermove",fe),(L=e.domElement)==null||L.ownerDocument.removeEventListener("pointerup",he)),e.dispatchEvent(u),c=i.NONE}function Ce(s){vt(s)}function Re(s){let f;switch(s.button){case 0:f=e.mouseButtons.LEFT;break;case 1:f=e.mouseButtons.MIDDLE;break;case 2:f=e.mouseButtons.RIGHT;break;default:f=-1}switch(f){case me.DOLLY:if(e.enableZoom===!1)return;K(s),c=i.DOLLY;break;case me.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(e.enablePan===!1)return;Se(s),c=i.PAN}else{if(e.enableRotate===!1)return;Ie(s),c=i.ROTATE}break;case me.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(e.enableRotate===!1)return;Ie(s),c=i.ROTATE}else{if(e.enablePan===!1)return;Se(s),c=i.PAN}break;default:c=i.NONE}c!==i.NONE&&e.dispatchEvent(d)}function Be(s){if(e.enabled!==!1)switch(c){case i.ROTATE:if(e.enableRotate===!1)return;ve(s);break;case i.DOLLY:if(e.enableZoom===!1)return;de(s);break;case i.PAN:if(e.enablePan===!1)return;Ke(s);break}}function wt(s){e.enabled===!1||e.enableZoom===!1||c!==i.NONE&&c!==i.ROTATE||(s.preventDefault(),e.dispatchEvent(d),Xe(s),e.dispatchEvent(u))}function et(s){e.enabled===!1||e.enablePan===!1||qe(s)}function xo(s){switch(Et(s),h.length){case 1:switch(e.touches.ONE){case xe.ROTATE:if(e.enableRotate===!1)return;Ee(),c=i.TOUCH_ROTATE;break;case xe.PAN:if(e.enablePan===!1)return;Ne(),c=i.TOUCH_PAN;break;default:c=i.NONE}break;case 2:switch(e.touches.TWO){case xe.DOLLY_PAN:if(e.enableZoom===!1&&e.enablePan===!1)return;Qe(),c=i.TOUCH_DOLLY_PAN;break;case xe.DOLLY_ROTATE:if(e.enableZoom===!1&&e.enableRotate===!1)return;C(),c=i.TOUCH_DOLLY_ROTATE;break;default:c=i.NONE}break;default:c=i.NONE}c!==i.NONE&&e.dispatchEvent(d)}function go(s){switch(Et(s),c){case i.TOUCH_ROTATE:if(e.enableRotate===!1)return;S(s),e.update();break;case i.TOUCH_PAN:if(e.enablePan===!1)return;W(s),e.update();break;case i.TOUCH_DOLLY_PAN:if(e.enableZoom===!1&&e.enablePan===!1)return;pe(s),e.update();break;case i.TOUCH_DOLLY_ROTATE:if(e.enableZoom===!1&&e.enableRotate===!1)return;Je(s),e.update();break;default:c=i.NONE}}function jt(s){e.enabled!==!1&&s.preventDefault()}function bo(s){h.push(s)}function vt(s){delete O[s.pointerId];for(let f=0;f<h.length;f++)if(h[f].pointerId==s.pointerId){h.splice(f,1);return}}function Et(s){let f=O[s.pointerId];f===void 0&&(f=new Q,O[s.pointerId]=f),f.set(s.pageX,s.pageY)}function tt(s){const f=s.pointerId===h[0].pointerId?h[1]:h[0];return O[f.pointerId]}o!==void 0&&this.connect(o),this.update()}};const ir=new z,Yt=x.forwardRef(function({start:r=[0,0,0],end:o=[0,0,0],mid:e,segments:a=20,...d},u){const i=x.useRef(null),[c]=x.useState(()=>new Xo(void 0,void 0,void 0)),k=x.useCallback((p,m,g,b=20)=>(p instanceof z?c.v0.copy(p):c.v0.set(...p),m instanceof z?c.v2.copy(m):c.v2.set(...m),g instanceof z?c.v1.copy(g):c.v1.copy(c.v0.clone().add(c.v2.clone().sub(c.v0)).add(ir.set(0,c.v0.y-c.v2.y,0))),c.getPoints(b)),[]);x.useLayoutEffect(()=>{i.current.setPoints=(p,m,g)=>{const b=k(p,m,g);i.current.geometry&&i.current.geometry.setPositions(b.map(M=>M.toArray()).flat())}},[]);const l=x.useMemo(()=>k(r,o,e,a),[r,o,e,a]);return x.createElement(Lo,U({ref:Do([i,u]),points:l},d))}),ar=x.forwardRef(({makeDefault:t,camera:r,regress:o,domElement:e,enableDamping:a=!0,onChange:d,onStart:u,onEnd:i,...c},k)=>{const l=te(T=>T.invalidate),p=te(T=>T.camera),m=te(T=>T.gl),g=te(T=>T.events),b=te(T=>T.setEvents),M=te(T=>T.set),y=te(T=>T.get),E=te(T=>T.performance),j=r||p,R=e||g.connected||m.domElement,P=x.useMemo(()=>new sr(j),[j]);return Ze(()=>{P.enabled&&P.update()},-1),x.useEffect(()=>(P.connect(R),()=>void P.dispose()),[R,o,P,l]),x.useEffect(()=>{const T=B=>{l(),o&&E.regress(),d&&d(B)},N=B=>{u&&u(B)},V=B=>{i&&i(B)};return P.addEventListener("change",T),P.addEventListener("start",N),P.addEventListener("end",V),()=>{P.removeEventListener("start",N),P.removeEventListener("end",V),P.removeEventListener("change",T)}},[d,u,i,P,l,b]),x.useEffect(()=>{if(t){const T=y().controls;return M({controls:P}),()=>M({controls:T})}},[t,P]),x.createElement("primitive",U({ref:k,object:P,enableDamping:a},c))});function cr(t){const r=t+"Geometry";return x.forwardRef(({args:o,children:e,...a},d)=>x.createElement("mesh",U({ref:d},a),x.createElement(r,{attach:"geometry",args:o}),e))}const lr=cr("circle"),J=10,dr=2,ur=2,Wt=10,pr=10,Ht=(t,r,o)=>{const d=new z().subVectors(r,t).normalize().multiplyScalar(o);return new z().addVectors(t,d)},fr=(t,r,o,e)=>{const a=new z().lerpVectors(t,r,.5),d=new z().subVectors(r,t).normalize(),u=new z(-d.y,d.x,d.z).normalize(),i=(o-e/2)*pr;return new z().addVectors(a,u.multiplyScalar(i))},ho=({links:t,nodes:r,onEdgeClick:o})=>{const e=x.useRef(null),{camera:a}=te(),d=new z,u=new z,i=new z,c=new z,k=new z,l=new z,p=new z,m=new z;Ze(()=>{e.current&&r&&e.current.children.forEach((b,M)=>{var D,h,O,F;const y=t[M];if(!y)return;const E=r.find(I=>I.ref_id===y.target),j=r.find(I=>I.ref_id===y.source);d.set((j==null?void 0:j.x)||0,(j==null?void 0:j.y)||0,(j==null?void 0:j.z)||0),u.set((E==null?void 0:E.x)||0,(E==null?void 0:E.y)||0,(E==null?void 0:E.z)||0);const R=b.children[0],P=b.children[1],T=b.children[2],N=b.children[3],V=t.filter(I=>I.source===y.source&&I.target===y.target||I.source===y.target&&I.target===y.source).length,B=t.filter((I,G)=>G<M&&(I.source===y.source&&I.target===y.target||I.source===y.target&&I.target===y.source)).length;if((j==null?void 0:j.ref_id)===(E==null?void 0:E.ref_id)){const[I,G,Z]=No(d);(D=R.setPoints)==null||D.call(R,d,Z,I),(h=P.setPoints)==null||h.call(P,Z,u,I),T.position.set(Z.x,Z.y,G.z),T.lookAt(I),T.rotateX(-Math.PI/2),N.position.set(Z.x,Z.y,G.z),N.lookAt(a.position)}else{m.copy(Ht(d,u,J)),p.copy(Ht(u,d,J+.5)),i.lerpVectors(m,p,.5),V>1?i.copy(fr(m,p,B,V)):i.lerpVectors(m,p,.5);const I=30;c.subVectors(p,m).normalize().multiplyScalar(I/2),k.subVectors(i,c),l.addVectors(i,c);const G=new z().addVectors(m,k).multiplyScalar(.5),Z=new z().addVectors(l,p).multiplyScalar(.5);(O=R.setPoints)==null||O.call(R,m,k,G),(F=P.setPoints)==null||F.call(P,l,p,Z),T.position.set(p.x,p.y,p.z),T.lookAt(m),T.rotateX(-Math.PI/2),N.position.set(i.x,i.y,i.z),N.lookAt(a.position);let ee=Math.atan2(p.y-m.y,p.x-m.x);(ee>Math.PI/2||ee<-Math.PI/2)&&(ee+=Math.PI),N.rotation.set(0,0,ee);const ae=m.distanceTo(p),q=ae<I?2:4;ae<I?N.text=mt(y.edge_type,Wt):N.text=y.edge_type,N.fontSize=q}})});const g=(b,M,y,E)=>{if(b==="CHILD_OF"||M==="string"||y==="string")return;const j=r==null?void 0:r.find(N=>N.ref_id===M),R=r==null?void 0:r.find(N=>N.ref_id===y),P=(j==null?void 0:j.type)||"",T=(R==null?void 0:R.type)||"";o(E,b,P,T)};return n.jsx("group",{ref:e,children:t.map(b=>n.jsxs("group",{children:[n.jsx(Yt,{color:"white",end:[0,0,0],lineWidth:1,start:[0,0,0]}),n.jsx(Yt,{color:"white",end:[0,0,0],lineWidth:1,start:[0,0,0]}),n.jsxs("mesh",{position:new z(0,0,0),children:[n.jsx("coneGeometry",{args:[dr,ur,32]}),n.jsx("meshBasicMaterial",{color:"white"})]}),n.jsx(lo,{anchorX:"center",anchorY:"middle",color:"white",...uo,lineHeight:1,maxWidth:20,onClick:()=>g(b.edge_type,b.source,b.target,b.ref_id),rotation:[0,0,0],textAlign:"center",children:mt(b.edge_type,Wt)})]},b.ref_id))})};ho.displayName="Lines";const hr=["#ff13c9","#5af0ff","#3233ff","#c2f0c2","#ff6666","#99ccff","#ffb3b3"],mr=_.div`
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
`,xr=_(Vo)`
  position: absolute;
`;new qo(2,2,2);const mo=x.memo(({node:t,setSelectedNode:r,onSimulationUpdate:o,isSelected:e})=>{var M;const a=x.useRef(null),[d,u]=x.useState(!1);console.log(e);const{size:i,camera:c}=te(),k=_o(y=>{if(t.type==="Thing")return;const{xy:[E,j],down:R,dragging:P,first:T,elapsedTime:N}=y;if(!(!P||T||N<100)&&R&&a.current){o();const V=(E-i.left)/window.innerWidth*i.width,B=(j-i.top)/window.innerHeight*i.height,O=new z(V/i.width*2-1,-B/i.height*2+1,0).unproject(c).multiply(new z(1,1,0)).clone();t.fx=O.x,t.fy=O.y}});Ze(()=>{a.current&&a.current.position.set(t.x||0,t.y||0,0)});const l=hr[(M=t==null?void 0:t.children)==null?void 0:M.length]||"red",p=y=>{y.stopPropagation(),t.type!=="Thing"&&r()},m=mt(t.type||"",J),g=()=>{u(!0)},b=()=>{u(!1)};return n.jsxs("mesh",{ref:a,onClick:p,...k(),onPointerOut:b,onPointerOver:g,position:new z(t.x,t.y,0),children:[n.jsx(lr,{args:[J,30,20],children:n.jsx("meshStandardMaterial",{attach:"material",color:l})}),n.jsx(lo,{...uo,clipRect:[-J,-J,J,J],color:"#000",fontSize:2,maxWidth:J*2,name:t.type,textAlign:"left",children:m}),d&&n.jsx(xr,{position:[0,5,0],zIndexRange:[100,0],children:n.jsx(mr,{children:t.type})})]})});mo.displayName="Node";const gr=({simulation:t,setSelectedSchemaId:r,selectedId:o,setIsAddEdgeNode:e})=>{const[a]=so(u=>[u.schemas]),d=()=>{t&&(t.alpha(.05),t.restart())};return n.jsx(n.Fragment,{children:a.map((u,i)=>{const c=t.nodes()[i];return c?n.jsx(mo,{isSelected:c.ref_id===o,node:c,onSimulationUpdate:d,setSelectedNode:()=>{e(!1),r(c.ref_id)}},c.ref_id):null})})},br=({schemasWithPositions:t,filteredLinks:r,setSelectedSchemaId:o,selectedSchemaId:e,setIsAddEdgeNode:a,onEdgeClick:d})=>{const[u,i]=x.useState(null),c=Ot(t),k=Ot(r);return x.useEffect(()=>{if(!t.length||!r.length)return;const l=structuredClone(t),p=structuredClone(r);if(u){c&&c.length!==t.length&&k&&k.length!==r.length&&(u.nodes(l).force("link",Tt(p).id(g=>g.ref_id).distance(100)).force("charge",kt()).force("center",$t()).force("collide",At(J+5)).alpha(.5).restart(),i({...u}));return}const m=Co(l).force("link",Tt(p).id(g=>g.ref_id).distance(120)).force("charge",kt().strength(-100)).force("center",$t()).force("collide",At(J+5));i(m)},[t,u,r,c,k]),Ze(()=>{}),u?n.jsxs(n.Fragment,{children:[n.jsx(ho,{links:r,nodes:u.nodes(),onEdgeClick:d}),n.jsx(gr,{selectedId:e,setIsAddEdgeNode:a,setSelectedSchemaId:o,simulation:u})]}):null},dt=new Qo(0),yr=({selectedSchemaId:t,links:r,schemasWithPositions:o,setSelectedSchemaId:e,setIsAddEdgeNode:a,onEdgeClick:d})=>n.jsxs(Fo,{camera:{zoom:1,position:[0,0,200]},id:"schema-canvas",linear:!0,orthographic:!0,children:[n.jsx("color",{args:[dt.r,dt.g,dt.b],attach:"background"}),To&&n.jsx(Go,{position:"right-bottom"}),n.jsx(wr,{}),n.jsx(Yo,{}),n.jsx(br,{filteredLinks:r,onEdgeClick:d,schemasWithPositions:o,selectedSchemaId:t,setIsAddEdgeNode:a,setSelectedSchemaId:e})]}),wr=()=>{x.useEffect(()=>{const o=a=>{["Meta","Alt"].includes(a.key)&&(document.body.style.cursor="grab")},e=a=>{["Meta","Alt"].includes(a.key)&&(document.body.style.cursor="default")};return window.addEventListener("keydown",o,!1),window.addEventListener("keyup",e,!1),()=>{window.removeEventListener("keydown",o,!1),window.removeEventListener("keyup",e,!1)}},[]);const t=()=>{document.body.style.cursor="grabbing"},r=()=>{document.body.style.cursor="default"};return n.jsx(ar,{dampingFactor:1,enableDamping:!0,enablePan:!0,enableRotate:!1,enableZoom:!0,maxZoom:20,minZoom:1,onEnd:r,onStart:t,zoomSpeed:1.5,zoomToCursor:!0})},jr=({onClose:t,activeTab:r,setActiveTab:o})=>n.jsxs(vr,{children:[n.jsxs(Er,{children:[n.jsx(Wo,{}),n.jsx(Pr,{children:"Blueprint"})]}),n.jsxs(Cr,{children:[n.jsx(Ut,{active:r==="all",onClick:()=>o("all"),children:"Show All"}),n.jsx(Ut,{active:r==="parent",onClick:()=>o("parent"),children:"Parent Only"})]}),n.jsx(Tr,{onClick:t,children:n.jsx(yt,{})})]}),vr=_(v)`
  background-color: ${w.BG1};
  height: 64px;
  width: 100%;
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
  justify-content: space-between;
  padding: 17px;
  border-bottom: 1px solid ${w.black};
`,Er=_.div`
  display: flex;
  align-items: center;
  font-size: 22px;
  font-weight: 400;
  font-family: Barlow;

  svg {
    color: ${w.GRAY6};
    margin-left: 6px;
  }
`,Pr=_.span`
  color: ${w.white};
  font-weight: 400;
  font-family: Barlow;
  margin-left: 15px;
  font-size: 22px;
`,Cr=_.div`
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
`,Tr=_.div`
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
`,kr=({onCreateNew:t,onAddEdgeNode:r})=>n.jsxs($r,{children:[n.jsx(ut,{"data-testid":"add-schema-type",onClick:t,children:n.jsx(pt,{children:n.jsx(co,{})})}),n.jsx(ut,{"data-testid":"add-edge",onClick:r,children:n.jsx(pt,{children:n.jsx(Ho,{})})}),n.jsx(ut,{disabled:!0,children:n.jsx(pt,{children:n.jsx(ao,{})})})]}),$r=_(v).attrs({align:"flex-start",direction:"column",justify:"flex-start"})`
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
`,Ar=({Close:t})=>{const[r,o]=x.useState(""),[e,a]=x.useState(!1),[d,u]=x.useState(!1),[i,c]=x.useState(!1),[k,l]=x.useState({refId:"",edgeType:"",source:"",target:""}),[p,m]=x.useState(!1),[g,b]=x.useState("all"),[M,y,E,j]=so(h=>[h.schemas,h.links,h.setSchemas,h.setSchemaLinks]);x.useEffect(()=>{(async()=>{u(!0);try{const O=await Mt(),F=O.schemas.filter(I=>I.ref_id&&!I.is_deleted);E(F.length>0?F:O.schemas),j(O.edges.length>0?O.edges:[]),u(!1)}catch(O){console.error("Error fetching data:",O),u(!1)}})()},[E,j]);const R=h=>{if(M.some(F=>F.ref_id===h.ref_id))E(M.map(F=>F.ref_id===h.ref_id?{...h,children:[]}:F));else{E([...M,{...h,children:[]}]);const F=M.find(I=>h.parent===I.type);j([...y,{ref_id:`new-link-${y.length}`,edge_type:"CHILD_OF",source:h.ref_id||"new",target:(F==null?void 0:F.ref_id)||"new"}])}},P=async()=>{const h=await Mt();E(h.schemas.filter(O=>O.ref_id&&!O.is_deleted&&O.ref_id)),j(h.edges)},T=h=>{E(M.filter(O=>O.type!==h))},N=M.map(h=>({...h,children:M.filter(O=>O.parent===h.type).map(O=>O.ref_id||"")})),V=y.filter(h=>N.some(O=>O.ref_id===h.source)&&N.some(O=>O.ref_id===h.target)),B=M.find(h=>h.ref_id===r)||null;if(d)return n.jsx(v,{align:"center",basis:"100%",grow:1,justify:"center",shrink:1,children:n.jsx(ue,{color:w.white})});const D=g==="all"?V:V.filter(h=>h.edge_type==="CHILD_OF");return n.jsxs(n.Fragment,{children:[n.jsx(v,{ml:-20,mr:-20,mt:-20,children:n.jsx(jr,{activeTab:g,onClose:t,setActiveTab:b})}),n.jsxs(v,{align:"stretch",direction:"row",grow:1,children:[n.jsx(v,{mb:-20,ml:-20,children:B||e?n.jsx(Zt,{children:n.jsx(Kt,{children:n.jsx(Kn,{graphLoading:p,onDelete:T,onSchemaCreate:R,onSchemaUpdate:P,selectedSchema:B,setGraphLoading:m,setIsCreateNew:a,setSelectedSchemaId:o})})}):null}),n.jsx(v,{children:i?n.jsx(Zt,{children:n.jsx(Kt,{children:n.jsx(_n,{edgeData:k,setGraphLoading:m,setIsAddEdgeNode:c})})}):null}),n.jsx(v,{children:n.jsx(kr,{onAddEdgeNode:()=>{c(!0),a(!1),o(""),l({refId:"",edgeType:"",source:"",target:""})},onCreateNew:()=>{c(!1),a(!0),o("")}})}),n.jsx(Mr,{direction:"row",grow:1,children:n.jsx(_r,{children:p?n.jsx(v,{align:"center",basis:"100%",grow:1,justify:"center",shrink:1,children:n.jsx(ue,{color:w.white})}):n.jsx(yr,{links:D,onEdgeClick:(h,O,F,I)=>{l({refId:h,edgeType:O,source:F,target:I}),c(!0),a(!1),o("")},schemasWithPositions:N,selectedSchemaId:r,setIsAddEdgeNode:c,setSelectedSchemaId:o})})})]})]})},Mr=_(v)`
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
`,Or=()=>{const{close:t}=no("blueprintGraph"),r=()=>{t()};return n.jsx(ko,{background:"black",id:"blueprintGraph",kind:"full",preventOutsideClose:!0,children:n.jsx(Ar,{Close:r})})},Jr=x.memo(Or);export{Jr as BlueprintModal};
