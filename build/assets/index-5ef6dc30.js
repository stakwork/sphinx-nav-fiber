import{r as g,b as Ft,g as Wt,s as Te,_ as Z,u as Yt,ad as lo,a as Gt,j as o,c as Ht,bo as Ye,bp as it,d as Ut,e as fe,f as gt,ae as uo,af as po,b9 as at,o as B,T as K,F as w,aW as Le,q as D,bq as fo,br as et,bs as ho,b8 as Zt,O as Xt,aa as Ve,aV as pe,a1 as xt,a0 as bt,Z as yt,Y as wt,X as mo,M as go,ao as jt}from"./index-21067c9d.js";import{B as xo}from"./index-54401641.js";import{h as ct,B as Oe,F as Kt,j as lt,o as bo,g as yo,I as wo,p as jo}from"./index-93bc2f63.js";import{A as Fe,O as vo,a as vt,N as qt}from"./index-f870d337.js";import{T as We}from"./index-de7da582.js";import{C as le}from"./ClipLoader-19a8277d.js";import{u as Qt}from"./index-aac659dd.js";import{D as Co}from"./DeleteIcon-396521e3.js";import{P as Eo}from"./PlusIcon-c31fb232.js";import{p as st,c as Po,g as To}from"./index-44e303ef.js";import{e as Oo}from"./Stack-dbe00046.js";import{S as Ao}from"./SwitchBase-f58c5852.js";import{g as Mo,m as $o,u as ee,b as Ge,t as rt,T as Jt,i as eo,H as So,j as Ct,C as _o,P as Io,k as No}from"./index-584de0f7.js";import{Z as zo,_ as ko,E as Ro,V as N,$ as de,a0 as ue,a1 as Et,P as Re,a2 as De,a3 as Pt,a as q,a4 as Do,G as Bo,C as Lo}from"./three.module-2ce81f73.js";import{A as Tt}from"./AddContentIcon-790a0995.js";import"./Popover-8ff60b97.js";import"./useSlotProps-f54e8b6d.js";import"./createSvgIcon-b719273b.js";import"./TextareaAutosize-9f8d1e37.js";import"./index.esm-9353033f.js";import"./InfoIcon-473ded19.js";const Vo=g.createContext(),Ot=Vo;function Fo(t){return Ft("MuiGrid",t)}const Wo=[0,1,2,3,4,5,6,7,8,9,10],Yo=["column-reverse","column","row-reverse","row"],Go=["nowrap","wrap-reverse","wrap"],Ee=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12],Ho=Wt("MuiGrid",["root","container","item","zeroMinWidth",...Wo.map(t=>`spacing-xs-${t}`),...Yo.map(t=>`direction-xs-${t}`),...Go.map(t=>`wrap-xs-${t}`),...Ee.map(t=>`grid-xs-${t}`),...Ee.map(t=>`grid-sm-${t}`),...Ee.map(t=>`grid-md-${t}`),...Ee.map(t=>`grid-lg-${t}`),...Ee.map(t=>`grid-xl-${t}`)]),Pe=Ho,Uo=["className","columns","columnSpacing","component","container","direction","item","rowSpacing","spacing","wrap","zeroMinWidth"];function he(t){const n=parseFloat(t);return`${n}${String(t).replace(String(n),"")||"px"}`}function Zo({theme:t,ownerState:n}){let s;return t.breakpoints.keys.reduce((e,a)=>{let l={};if(n[a]&&(s=n[a]),!s)return e;if(s===!0)l={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if(s==="auto")l={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{const u=Ye({values:n.columns,breakpoints:t.breakpoints.values}),i=typeof u=="object"?u[a]:u;if(i==null)return e;const c=`${Math.round(s/i*1e8)/1e6}%`;let E={};if(n.container&&n.item&&n.columnSpacing!==0){const d=t.spacing(n.columnSpacing);if(d!=="0px"){const h=`calc(${c} + ${he(d)})`;E={flexBasis:h,maxWidth:h}}}l=Z({flexBasis:c,flexGrow:0,maxWidth:c},E)}return t.breakpoints.values[a]===0?Object.assign(e,l):e[t.breakpoints.up(a)]=l,e},{})}function Xo({theme:t,ownerState:n}){const s=Ye({values:n.direction,breakpoints:t.breakpoints.values});return it({theme:t},s,e=>{const a={flexDirection:e};return e.indexOf("column")===0&&(a[`& > .${Pe.item}`]={maxWidth:"none"}),a})}function to({breakpoints:t,values:n}){let s="";Object.keys(n).forEach(a=>{s===""&&n[a]!==0&&(s=a)});const e=Object.keys(t).sort((a,l)=>t[a]-t[l]);return e.slice(0,e.indexOf(s))}function Ko({theme:t,ownerState:n}){const{container:s,rowSpacing:e}=n;let a={};if(s&&e!==0){const l=Ye({values:e,breakpoints:t.breakpoints.values});let u;typeof l=="object"&&(u=to({breakpoints:t.breakpoints.values,values:l})),a=it({theme:t},l,(i,c)=>{var E;const d=t.spacing(i);return d!=="0px"?{marginTop:`-${he(d)}`,[`& > .${Pe.item}`]:{paddingTop:he(d)}}:(E=u)!=null&&E.includes(c)?{}:{marginTop:0,[`& > .${Pe.item}`]:{paddingTop:0}}})}return a}function qo({theme:t,ownerState:n}){const{container:s,columnSpacing:e}=n;let a={};if(s&&e!==0){const l=Ye({values:e,breakpoints:t.breakpoints.values});let u;typeof l=="object"&&(u=to({breakpoints:t.breakpoints.values,values:l})),a=it({theme:t},l,(i,c)=>{var E;const d=t.spacing(i);return d!=="0px"?{width:`calc(100% + ${he(d)})`,marginLeft:`-${he(d)}`,[`& > .${Pe.item}`]:{paddingLeft:he(d)}}:(E=u)!=null&&E.includes(c)?{}:{width:"100%",marginLeft:0,[`& > .${Pe.item}`]:{paddingLeft:0}}})}return a}function Qo(t,n,s={}){if(!t||t<=0)return[];if(typeof t=="string"&&!Number.isNaN(Number(t))||typeof t=="number")return[s[`spacing-xs-${String(t)}`]];const e=[];return n.forEach(a=>{const l=t[a];Number(l)>0&&e.push(s[`spacing-${a}-${String(l)}`])}),e}const Jo=Te("div",{name:"MuiGrid",slot:"Root",overridesResolver:(t,n)=>{const{ownerState:s}=t,{container:e,direction:a,item:l,spacing:u,wrap:i,zeroMinWidth:c,breakpoints:E}=s;let d=[];e&&(d=Qo(u,E,n));const h=[];return E.forEach(m=>{const x=s[m];x&&h.push(n[`grid-${m}-${String(x)}`])}),[n.root,e&&n.container,l&&n.item,c&&n.zeroMinWidth,...d,a!=="row"&&n[`direction-xs-${String(a)}`],i!=="wrap"&&n[`wrap-xs-${String(i)}`],...h]}})(({ownerState:t})=>Z({boxSizing:"border-box"},t.container&&{display:"flex",flexWrap:"wrap",width:"100%"},t.item&&{margin:0},t.zeroMinWidth&&{minWidth:0},t.wrap!=="wrap"&&{flexWrap:t.wrap}),Xo,Ko,qo,Zo);function en(t,n){if(!t||t<=0)return[];if(typeof t=="string"&&!Number.isNaN(Number(t))||typeof t=="number")return[`spacing-xs-${String(t)}`];const s=[];return n.forEach(e=>{const a=t[e];if(Number(a)>0){const l=`spacing-${e}-${String(a)}`;s.push(l)}}),s}const tn=t=>{const{classes:n,container:s,direction:e,item:a,spacing:l,wrap:u,zeroMinWidth:i,breakpoints:c}=t;let E=[];s&&(E=en(l,c));const d=[];c.forEach(m=>{const x=t[m];x&&d.push(`grid-${m}-${String(x)}`)});const h={root:["root",s&&"container",a&&"item",i&&"zeroMinWidth",...E,e!=="row"&&`direction-xs-${String(e)}`,u!=="wrap"&&`wrap-xs-${String(u)}`,...d]};return Ut(h,Fo,n)},on=g.forwardRef(function(n,s){const e=Yt({props:n,name:"MuiGrid"}),{breakpoints:a}=lo(),l=Oo(e),{className:u,columns:i,columnSpacing:c,component:E="div",container:d=!1,direction:h="row",item:m=!1,rowSpacing:x,spacing:b=0,wrap:y="wrap",zeroMinWidth:P=!1}=l,v=Gt(l,Uo),j=x||b,M=c||b,A=g.useContext(Ot),C=d?i||12:A,_={},L=Z({},v);a.keys.forEach(f=>{v[f]!=null&&(_[f]=v[f],delete L[f])});const k=Z({},l,{columns:C,container:d,direction:h,item:m,rowSpacing:j,columnSpacing:M,wrap:y,zeroMinWidth:P,spacing:b},_,{breakpoints:a.keys}),F=tn(k);return o.jsx(Ot.Provider,{value:C,children:o.jsx(Jo,Z({ownerState:k,className:Ht(F.root,u),as:E,ref:s},L))})}),ce=on;function nn(t){return Ft("MuiSwitch",t)}const sn=Wt("MuiSwitch",["root","edgeStart","edgeEnd","switchBase","colorPrimary","colorSecondary","sizeSmall","sizeMedium","checked","disabled","input","thumb","track"]),H=sn,rn=["className","color","edge","size","sx"],an=t=>{const{classes:n,edge:s,size:e,color:a,checked:l,disabled:u}=t,i={root:["root",s&&`edge${fe(s)}`,`size${fe(e)}`],switchBase:["switchBase",`color${fe(a)}`,l&&"checked",u&&"disabled"],thumb:["thumb"],track:["track"],input:["input"]},c=Ut(i,nn,n);return Z({},n,c)},cn=Te("span",{name:"MuiSwitch",slot:"Root",overridesResolver:(t,n)=>{const{ownerState:s}=t;return[n.root,s.edge&&n[`edge${fe(s.edge)}`],n[`size${fe(s.size)}`]]}})(({ownerState:t})=>Z({display:"inline-flex",width:34+12*2,height:14+12*2,overflow:"hidden",padding:12,boxSizing:"border-box",position:"relative",flexShrink:0,zIndex:0,verticalAlign:"middle","@media print":{colorAdjust:"exact"}},t.edge==="start"&&{marginLeft:-8},t.edge==="end"&&{marginRight:-8},t.size==="small"&&{width:40,height:24,padding:7,[`& .${H.thumb}`]:{width:16,height:16},[`& .${H.switchBase}`]:{padding:4,[`&.${H.checked}`]:{transform:"translateX(16px)"}}})),ln=Te(Ao,{name:"MuiSwitch",slot:"SwitchBase",overridesResolver:(t,n)=>{const{ownerState:s}=t;return[n.switchBase,{[`& .${H.input}`]:n.input},s.color!=="default"&&n[`color${fe(s.color)}`]]}})(({theme:t})=>({position:"absolute",top:0,left:0,zIndex:1,color:t.vars?t.vars.palette.Switch.defaultColor:`${t.palette.mode==="light"?t.palette.common.white:t.palette.grey[300]}`,transition:t.transitions.create(["left","transform"],{duration:t.transitions.duration.shortest}),[`&.${H.checked}`]:{transform:"translateX(20px)"},[`&.${H.disabled}`]:{color:t.vars?t.vars.palette.Switch.defaultDisabledColor:`${t.palette.mode==="light"?t.palette.grey[100]:t.palette.grey[600]}`},[`&.${H.checked} + .${H.track}`]:{opacity:.5},[`&.${H.disabled} + .${H.track}`]:{opacity:t.vars?t.vars.opacity.switchTrackDisabled:`${t.palette.mode==="light"?.12:.2}`},[`& .${H.input}`]:{left:"-100%",width:"300%"}}),({theme:t,ownerState:n})=>Z({"&:hover":{backgroundColor:t.vars?`rgba(${t.vars.palette.action.activeChannel} / ${t.vars.palette.action.hoverOpacity})`:gt(t.palette.action.active,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},n.color!=="default"&&{[`&.${H.checked}`]:{color:(t.vars||t).palette[n.color].main,"&:hover":{backgroundColor:t.vars?`rgba(${t.vars.palette[n.color].mainChannel} / ${t.vars.palette.action.hoverOpacity})`:gt(t.palette[n.color].main,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${H.disabled}`]:{color:t.vars?t.vars.palette.Switch[`${n.color}DisabledColor`]:`${t.palette.mode==="light"?uo(t.palette[n.color].main,.62):po(t.palette[n.color].main,.55)}`}},[`&.${H.checked} + .${H.track}`]:{backgroundColor:(t.vars||t).palette[n.color].main}})),dn=Te("span",{name:"MuiSwitch",slot:"Track",overridesResolver:(t,n)=>n.track})(({theme:t})=>({height:"100%",width:"100%",borderRadius:14/2,zIndex:-1,transition:t.transitions.create(["opacity","background-color"],{duration:t.transitions.duration.shortest}),backgroundColor:t.vars?t.vars.palette.common.onBackground:`${t.palette.mode==="light"?t.palette.common.black:t.palette.common.white}`,opacity:t.vars?t.vars.opacity.switchTrack:`${t.palette.mode==="light"?.38:.3}`})),un=Te("span",{name:"MuiSwitch",slot:"Thumb",overridesResolver:(t,n)=>n.thumb})(({theme:t})=>({boxShadow:(t.vars||t).shadows[1],backgroundColor:"currentColor",width:20,height:20,borderRadius:"50%"})),pn=g.forwardRef(function(n,s){const e=Yt({props:n,name:"MuiSwitch"}),{className:a,color:l="primary",edge:u=!1,size:i="medium",sx:c}=e,E=Gt(e,rn),d=Z({},e,{color:l,edge:u,size:i}),h=an(d),m=o.jsx(un,{className:h.thumb,ownerState:d});return o.jsxs(cn,{className:Ht(h.root,a),sx:c,ownerState:d,children:[o.jsx(ln,Z({type:"checkbox",icon:m,checkedIcon:m,ref:s,ownerState:d},E,{classes:Z({},h,{root:h.switchBase})})),o.jsx(dn,{className:h.track,ownerState:d})]})}),fn=pn,hn={type:"",parent:""},At=({onSelect:t,dataTestId:n,edgeLink:s,hideSelectAll:e})=>{const a=ct({mode:"onChange",defaultValues:hn}),{watch:l,setValue:u}=a,[i,c]=g.useState([]),[E,d]=g.useState(!1),h=y=>{u("parent",(y==null?void 0:y.value)||""),t(y==null?void 0:y.value)},m=y=>y.charAt(0).toUpperCase()+y.slice(1);g.useEffect(()=>{(async()=>{d(!0);try{const v=(await at()).schemas.filter(M=>!M.is_deleted&&M.type).map(M=>(M==null?void 0:M.type)==="thing"?{label:"No Parent",value:M.type}:{label:m(M.type),value:M.type});c(e?v:[{label:"Select all",value:"all"},...v]),s&&u("parent",s)}catch(P){console.warn(P)}finally{d(!1)}})()},[s,u,e]);const x=l("parent"),b=()=>{const y=i==null?void 0:i.find(P=>P.value===x);if(y)return y;if(s)return{label:s,value:s}};return o.jsx(Fe,{dataTestId:n,disabled:!!s,isLoading:E,onSelect:h,options:i||vo,selectedValue:b()})},mn=({selectedType:t,setSelectedFromNode:n,setSelectedToNode:s,edgeLinkData:e,selectedFromNode:a,selectedToNode:l})=>{const u=l==="all",i=a==="all";return o.jsxs(w,{children:[o.jsx(w,{align:"center",direction:"row",justify:"space-between",mb:35,children:o.jsx(w,{align:"center",direction:"row",children:o.jsx(gn,{children:e!=null&&e.refId?"Edit Edge":"Add Edge"})})}),o.jsxs(w,{mb:25,children:[o.jsx(w,{mb:12,children:o.jsx(K,{children:"Source"})}),o.jsx(At,{dataTestId:"from_node",edgeLink:e==null?void 0:e.source,hideSelectAll:u,onSelect:n})]}),o.jsxs(w,{mb:10,children:[o.jsx(w,{mb:12,children:o.jsx(K,{children:"Edge Name"})}),o.jsx(w,{mb:12,children:o.jsx(We,{id:"cy-item-name",maxLength:250,name:"type",placeholder:"Enter type name",rules:{...Le},value:t})})]}),o.jsxs(w,{mb:25,children:[o.jsx(w,{mb:12,children:o.jsx(K,{children:"Destination"})}),o.jsx(At,{dataTestId:"to_node",edgeLink:e==null?void 0:e.target,hideSelectAll:i,onSelect:s})]})]})},gn=B(K)`
  font-size: 22px;
  font-weight: 600;
`,xn=({onCancel:t,edgeLinkData:n,setGraphLoading:s})=>{var _,L,k;const e=ct({mode:"onChange"}),{setValue:a,getValues:l}=e,[u,i]=g.useState(!1),[c,E]=g.useState(!1),[d,h]=g.useState(""),[m,x]=g.useState(""),[b,y]=g.useState(""),P=e.watch("type");g.useEffect(()=>{a("type",n==null?void 0:n.edgeType)},[n==null?void 0:n.edgeType,a]),g.useEffect(()=>{h(P)},[P]);const v=e.handleSubmit(async F=>{i(!0),s(!0);const f={source:m,target:b,edge_type:F.type},$={ref_id:n==null?void 0:n.refId,edge_type:F.type};try{if(n!=null&&n.refId)await fo($);else if(b&&m)if(m==="all"||b==="all"){const S=(await at()).schemas.filter(W=>!W.is_deleted&&W.type).map(W=>W.type);m==="all"?await Promise.all(S.map(W=>et({...f,source:W}))):b==="all"&&await Promise.all(S.map(W=>et({...f,target:W})))}else await et(f)}catch(V){console.warn("API Error:",V)}finally{i(!1),s(!1),x(""),y(""),t()}}),j=(L=(_=l())==null?void 0:_.type)==null?void 0:L.trim(),M=j&&((k=n==null?void 0:n.edgeType)==null?void 0:k.trim())!==j,A=n!=null&&n.refId?u||!M:u||!b||!m||!d,C=async()=>{E(!0),s(!0);try{n!=null&&n.refId&&await ho(n==null?void 0:n.refId)}catch(F){console.warn("API Error:",F)}finally{E(!1),s(!1),x(""),y(""),t()}};return o.jsx(Kt,{...e,children:o.jsxs("form",{id:"add-type-form",onSubmit:v,children:[o.jsx(mn,{edgeLinkData:n,selectedFromNode:m,selectedToNode:b,selectedType:d,setSelectedFromNode:x,setSelectedToNode:y}),o.jsxs(w,{direction:"row",justify:"space-between",mt:20,children:[(n==null?void 0:n.refId)&&o.jsx(w,{direction:"column",children:o.jsxs(yn,{color:"secondary",disabled:c,onClick:C,size:"large",style:{marginRight:20},variant:"contained",children:["Delete",c&&o.jsxs(Mt,{children:[o.jsx(le,{color:D.lightGray,size:12})," "]})]})}),o.jsxs(bn,{color:"secondary",disabled:A,onClick:v,size:"large",variant:"contained",children:["Confirm",u&&o.jsxs(Mt,{children:[o.jsx(le,{color:D.lightGray,size:12})," "]})]})]})]})})},bn=B(Oe)`
  width: 293px !important;
  margin: 0 0 10px auto !important;
`,Mt=B.span`
  margin-top: 2px;
`,yn=B(Oe)`
  && {
    color: ${D.primaryRed};
    background-color: rgba(237, 116, 116, 0.1);

    &:hover,
    &:active,
    &:focus {
      color: ${D.primaryRed};
      background-color: rgba(237, 116, 116, 0.2);
    }
  }
`,wn=({setIsAddEdgeNode:t,edgeData:n,setGraphLoading:s})=>{const e=()=>{t(!1)};return o.jsxs(w,{children:[o.jsx(w,{direction:"row",justify:"flex-end",children:o.jsx(jn,{"data-testid":"close-sidebar-sub-view",onClick:e,children:o.jsx(lt,{})})}),o.jsx(xn,{edgeLinkData:n,onCancel:e,setGraphLoading:s})]})},jn=B(w)`
  font-size: 32px;
  color: ${D.white};
  cursor: pointer;
`,vn=/^[a-z0-9_]+$/,Cn=({parentParam:t,onDelete:n})=>{const[s,e]=g.useState(!1),[a,l]=g.useState([]),{fields:u,append:i,replace:c,remove:E}=bo({name:"attributes"}),{setValue:d,watch:h}=yo();return g.useEffect(()=>{const m=async()=>{try{let x=[{required:!1,type:"string",key:""}];if(t!==qt.value.toLowerCase()){e(!0);const b=await Zt(t);b.attributes&&typeof b.attributes=="object"?x=st(b.attributes):x=st(b)}x=x.filter(b=>b.key!=="node_key"),c(x),l(x)}catch(x){console.warn(x)}finally{e(!1)}};a.length===0&&m()},[t,d,c,a.length]),o.jsxs(o.Fragment,{children:[s?o.jsx(w,{align:"center",children:o.jsx(le,{color:D.SECONDARY_BLUE,size:"30"})}):o.jsx(En,{py:8,children:o.jsx(ce,{container:!0,spacing:2,children:u.map((m,x)=>{const b=h(`attributes[${x}].type`),y=h(`attributes[${x}].required`),P=m.isNew||!1,v=["name"].includes(h(`attributes[${x}].key`));return o.jsxs(g.Fragment,{children:[o.jsx(ce,{item:!0,xs:5,children:o.jsx(We,{autoComplete:"off",className:"text-input",dataTestId:`cy-item-name-${x}`,disabled:!P,id:`cy-item-name-${x}`,maxLength:50,name:`attributes.${x}.key`,placeholder:"Enter value",rules:{...Le,pattern:{message:"Please avoid special characters, spaces and uppercase",value:vn}}})}),o.jsx(ce,{item:!0,xs:4,children:o.jsx(Fe,{dataTestId:`cy-item-select-${x}`,disabled:v,onSelect:j=>d(`attributes[${x}].type`,j==null?void 0:j.value),options:vt,selectedValue:vt.find(j=>j.value===b)})}),o.jsxs(ce,{item:!0,xs:3,children:[o.jsx(fn,{checked:y,"data-testid":`cy-item-${x}`,disabled:v,name:`attributes.${x}.required`,onChange:j=>d(`attributes[${x}].required`,j.target.checked),size:"small"}),!v&&o.jsx(wo,{onClick:()=>{E(x),m.key!==void 0&&n&&n(m.key)},children:o.jsx(Co,{})})]})]},m.id)})})}),o.jsx(w,{align:"flex-start",py:12,children:o.jsx(Oe,{"data-testid":"add-attribute-btn",onClick:()=>i({key:"",type:"string",required:!0,isNew:!0}),size:"medium",startIcon:o.jsx(Eo,{}),variant:"contained",children:"Add Attribute"})})]})},En=B(w)`
  overflow-y: auto;
  width: calc(100% + 20px);
  max-height: calc(80vh - 300px);
`,Pn=({parent:t,onDelete:n})=>{const s=t;return o.jsxs(w,{children:[o.jsx(w,{direction:"row",mb:10,children:o.jsxs(ce,{container:!0,spacing:2,children:[o.jsx(ce,{item:!0,xs:5,children:o.jsx(tt,{style:{marginRight:180},children:"Attributes"})}),o.jsx(ce,{item:!0,xs:4,children:o.jsx(tt,{style:{marginRight:130},children:"Type"})}),o.jsx(ce,{item:!0,xs:3,children:o.jsx(tt,{children:"Required"})})]})}),s&&o.jsx(Cn,{onDelete:n,parentParam:s},s)]})},tt=B(K)`
  font-size: 15px;
  color: gray;
`,Tn={type:"",parent:""},On=(t,n)=>t.length!==n.length?!0:t.some((s,e)=>{const a=n[e];return s.required!==a.required||s.type!==a.type||s.key!==a.key}),An=async(t,n=!1,s)=>{try{const{attributes:e,...a}=t,l={...Po(e),...s.reduce((c,E)=>({...c,[E]:"delete"}),{})},u={...a,attributes:l};let i;if(n?i=await Ve.put(`/schema/${t.ref_id}`,JSON.stringify(u),{}):i=await Ve.post("/schema",JSON.stringify({...u,node_key:"name"}),{}),i.status!=="success")throw new Error("error");return i==null?void 0:i.ref_id}catch(e){let a=pe;if(e.status===400){const l=await e.json();a=l.errorCode||(l==null?void 0:l.status)||pe}else e instanceof Error&&(a=e.message);throw new Error(a)}},Mn=t=>t.charAt(0).toUpperCase()+t.slice(1),$t=async(t,n)=>{try{const l=((await at()).schemas||[]).filter(u=>!u.is_deleted&&u.type&&(!n||n(u))).map(u=>u.type==="thing"?{label:"No Parent",value:u.type}:{label:Mn(u.type),value:u.type});t(l)}catch(s){console.warn(s)}},$n=({graphLoading:t,onSchemaCreate:n,selectedSchema:s,onDelete:e,setSelectedSchemaId:a,setGraphLoading:l,setIsCreateNew:u,onSchemaUpdate:i})=>{const{close:c,visible:E}=Xt("addType"),d=ct({mode:"onChange",defaultValues:s?{type:s.type,parent:s.parent}:Tn}),{watch:h,setValue:m,reset:x,getValues:b}=d,[y,P]=g.useState(!1),[v,j]=g.useState(!1),[M,A]=g.useState(!1),[C,_]=g.useState(null),[L,k]=g.useState(!1),[F,f]=g.useState(null),[$,V]=g.useState(""),[S,W]=g.useState(null),[X,te]=g.useState([]),[re,J]=g.useState([]),[me,Ae]=g.useState(!0);g.useEffect(()=>()=>{x()},[E,x]);const Me=()=>{u(!1),a("")};g.useEffect(()=>{s||(A(!0),$t(_).finally(()=>A(!1)))},[s]),g.useEffect(()=>{(async()=>{if(s){m("type",s==null?void 0:s.type),m("parent",s.parent);let z=[{required:!1,type:"string",key:""}];if(s.type!==qt.value.toLowerCase()){const Y=await Zt(s.type);z=Y?st(Y):z}z=z.filter(Y=>Y.key!=="node_key"),J(z),await $t(f,Y=>Y.type!==s.type)}})()},[s,m]);const U=h("parent");h("type");const $e=I=>Array.isArray(I)&&I.every(z=>typeof z=="object"&&"key"in z),ge=h("attributes"),xe=g.useMemo(()=>$e(ge)?ge:[],[ge]),He=()=>{c()},Ue=I=>{te(z=>[...z,I])},Ze=async()=>{if(s!=null&&s.type){j(!0),l(!0);try{await Ve.delete(`/schema/${s.ref_id}`),e(s.type),c()}catch(I){let z=pe;if((I==null?void 0:I.status)===400){const Y=await I.json();z=Y.errorCode||(Y==null?void 0:Y.status)||pe}else I instanceof Error&&(z=I.message);W(z)}finally{j(!1),l(!1),u(!1)}}},Se=d.handleSubmit(async I=>{if(!U){k(!0);return}P(!0);try{if(s&&I.type!==(s==null?void 0:s.type)||s&&b().parent!==(s==null?void 0:s.parent)){const Y=b().parent??(s==null?void 0:s.parent);l(!0),await Ve.put(`/schema/${s==null?void 0:s.ref_id}`,JSON.stringify({type:I.type,parent:Y})),await i()}const z=await An({...I,...s?{ref_id:s==null?void 0:s.ref_id}:{}},!!s,X);n({type:I.type,parent:U||"",ref_id:(s==null?void 0:s.ref_id)||z||"new"}),He()}catch(z){let Y=pe;if((z==null?void 0:z.status)===400){const ie=await z.json();Y=ie.errorCode||(ie==null?void 0:ie.status)||pe}else z instanceof Error&&(Y=z.message);V(Y)}finally{P(!1),l(!1),u(!1)}});g.useEffect(()=>{const I=d.watch(z=>{var ye,we,Ie,Ne,je;const Y=On(xe,re),ie=((ye=z.type)==null?void 0:ye.trim())!==((we=s==null?void 0:s.type)==null?void 0:we.trim())||((Ie=z.parent)==null?void 0:Ie.trim())!==((Ne=s==null?void 0:s.parent)==null?void 0:Ne.trim())||Y,be=!!((je=z.type)!=null&&je.trim());Ae(s?y||!ie||!be||L:y||L||!be)});return()=>I.unsubscribe()},[d,xe,re,s,y,L]);const Xe=()=>C==null?void 0:C.find(I=>I.value===U),_e=()=>{const I=F==null?void 0:F.find(z=>z.value===U);if(I)return I;if(U)return{label:U,value:U}};return o.jsxs(w,{children:[o.jsx(w,{direction:"row",justify:"flex-end",children:o.jsx(In,{"data-testid":"close-sidebar-sub-view",onClick:Me,children:o.jsx(lt,{})})}),o.jsx(w,{children:o.jsx(Kt,{...d,children:o.jsxs("form",{id:"add-type-form",onSubmit:Se,children:[o.jsx(w,{children:s?o.jsxs(o.Fragment,{children:[o.jsxs(w,{mb:12,children:[o.jsx(w,{mb:12,children:o.jsx(K,{children:"Name"})}),o.jsx(w,{mb:12,children:o.jsx(We,{dataTestId:"cy-item-name",defaultValue:s==null?void 0:s.type,id:"cy-item-name",maxLength:250,name:"type",placeholder:"Enter type name",rules:{...Le},value:U})})]}),o.jsxs(w,{mb:12,children:[o.jsx(w,{mb:12,children:o.jsx(K,{children:"Parent"})}),o.jsx(Fe,{isLoading:M||t,onSelect:I=>{m("parent",(I==null?void 0:I.value)||""),k(!1)},options:F||[],selectedValue:_e()}),$&&o.jsx(ot,{children:$})]})]}):o.jsxs(o.Fragment,{children:[o.jsxs(w,{mb:12,children:[o.jsx(w,{mb:12,children:o.jsx(K,{children:"Select Parent"})}),o.jsx(Fe,{isLoading:M,onSelect:I=>{m("parent",(I==null?void 0:I.value)||""),k(!1)},options:C,selectedValue:Xe()}),L&&o.jsx(ot,{children:"A parent type must be selected"})]}),o.jsxs(w,{children:[o.jsx(w,{mb:12,children:o.jsx(K,{children:"Type name"})}),o.jsx(w,{mb:12,children:o.jsx(We,{id:"cy-item-name",maxLength:250,name:"type",placeholder:"Enter type name",rules:{...Le},value:U})})]})]})}),o.jsx(Pn,{onDelete:Ue,parent:s?s.type:U}),o.jsxs(w,{direction:"row",justify:"space-between",mt:20,children:[s&&o.jsxs(w,{direction:"column",children:[o.jsxs(_n,{color:"secondary",disabled:v,onClick:Ze,size:"large",style:{marginRight:20},variant:"contained",children:["Delete",v&&o.jsxs(St,{children:[o.jsx(le,{color:D.lightGray,size:12})," "]})]}),S&&o.jsx(ot,{children:S})]}),o.jsxs(Sn,{color:"secondary",disabled:me,onClick:Se,size:"large",variant:"contained",children:["Confirm",y&&o.jsxs(St,{children:[o.jsx(le,{color:D.lightGray,size:12})," "]})]})]})]})})})]})},Sn=B(Oe)`
  width: 100% !important;
  margin: 0 auto !important;
`,St=B.span`
  margin-top: 2px;
`,_n=B(Oe)`
  && {
    color: ${D.primaryRed};
    background-color: rgba(237, 116, 116, 0.1);

    &:hover,
    &:active,
    &:focus {
      color: ${D.primaryRed};
      background-color: rgba(237, 116, 116, 0.2);
    }
  }
`,In=B(w)`
  font-size: 32px;
  color: ${D.white};
  cursor: pointer;
`,ot=B(w)`
  font-size: 13px;
  font-family: Barlow;
  color: #ff8f80;
  line-height: 0.2px;
  margin-top: 12px;
  padding-top: 20px;
`;var Nn=Object.defineProperty,zn=(t,n,s)=>n in t?Nn(t,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[n]=s,T=(t,n,s)=>(zn(t,typeof n!="symbol"?n+"":n,s),s);const Be=new zo,_t=new ko,kn=Math.cos(70*(Math.PI/180)),It=(t,n)=>(t%n+n)%n;let Rn=class extends Ro{constructor(n,s){super(),T(this,"object"),T(this,"domElement"),T(this,"enabled",!0),T(this,"target",new N),T(this,"minDistance",0),T(this,"maxDistance",1/0),T(this,"minZoom",0),T(this,"maxZoom",1/0),T(this,"minPolarAngle",0),T(this,"maxPolarAngle",Math.PI),T(this,"minAzimuthAngle",-1/0),T(this,"maxAzimuthAngle",1/0),T(this,"enableDamping",!1),T(this,"dampingFactor",.05),T(this,"enableZoom",!0),T(this,"zoomSpeed",1),T(this,"enableRotate",!0),T(this,"rotateSpeed",1),T(this,"enablePan",!0),T(this,"panSpeed",1),T(this,"screenSpacePanning",!0),T(this,"keyPanSpeed",7),T(this,"zoomToCursor",!1),T(this,"autoRotate",!1),T(this,"autoRotateSpeed",2),T(this,"reverseOrbit",!1),T(this,"reverseHorizontalOrbit",!1),T(this,"reverseVerticalOrbit",!1),T(this,"keys",{LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"}),T(this,"mouseButtons",{LEFT:de.ROTATE,MIDDLE:de.DOLLY,RIGHT:de.PAN}),T(this,"touches",{ONE:ue.ROTATE,TWO:ue.DOLLY_PAN}),T(this,"target0"),T(this,"position0"),T(this,"zoom0"),T(this,"_domElementKeyEvents",null),T(this,"getPolarAngle"),T(this,"getAzimuthalAngle"),T(this,"setPolarAngle"),T(this,"setAzimuthalAngle"),T(this,"getDistance"),T(this,"listenToKeyEvents"),T(this,"stopListenToKeyEvents"),T(this,"saveState"),T(this,"reset"),T(this,"update"),T(this,"connect"),T(this,"dispose"),this.object=n,this.domElement=s,this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this.getPolarAngle=()=>d.phi,this.getAzimuthalAngle=()=>d.theta,this.setPolarAngle=r=>{let p=It(r,2*Math.PI),O=d.phi;O<0&&(O+=2*Math.PI),p<0&&(p+=2*Math.PI);let R=Math.abs(p-O);2*Math.PI-R<R&&(p<O?p+=2*Math.PI:O+=2*Math.PI),h.phi=p-O,e.update()},this.setAzimuthalAngle=r=>{let p=It(r,2*Math.PI),O=d.theta;O<0&&(O+=2*Math.PI),p<0&&(p+=2*Math.PI);let R=Math.abs(p-O);2*Math.PI-R<R&&(p<O?p+=2*Math.PI:O+=2*Math.PI),h.theta=p-O,e.update()},this.getDistance=()=>e.object.position.distanceTo(e.target),this.listenToKeyEvents=r=>{r.addEventListener("keydown",Qe),this._domElementKeyEvents=r},this.stopListenToKeyEvents=()=>{this._domElementKeyEvents.removeEventListener("keydown",Qe),this._domElementKeyEvents=null},this.saveState=()=>{e.target0.copy(e.target),e.position0.copy(e.object.position),e.zoom0=e.object.zoom},this.reset=()=>{e.target.copy(e.target0),e.object.position.copy(e.position0),e.object.zoom=e.zoom0,e.object.updateProjectionMatrix(),e.dispatchEvent(a),e.update(),c=i.NONE},this.update=(()=>{const r=new N,p=new N(0,1,0),O=new Et().setFromUnitVectors(n.up,p),R=O.clone().invert(),G=new N,oe=new Et,ae=2*Math.PI;return function(){const mt=e.object.position;O.setFromUnitVectors(n.up,p),R.copy(O).invert(),r.copy(mt).sub(e.target),r.applyQuaternion(O),d.setFromVector3(r),e.autoRotate&&c===i.NONE&&W(V()),e.enableDamping?(d.theta+=h.theta*e.dampingFactor,d.phi+=h.phi*e.dampingFactor):(d.theta+=h.theta,d.phi+=h.phi);let ne=e.minAzimuthAngle,se=e.maxAzimuthAngle;isFinite(ne)&&isFinite(se)&&(ne<-Math.PI?ne+=ae:ne>Math.PI&&(ne-=ae),se<-Math.PI?se+=ae:se>Math.PI&&(se-=ae),ne<=se?d.theta=Math.max(ne,Math.min(se,d.theta)):d.theta=d.theta>(ne+se)/2?Math.max(ne,d.theta):Math.min(se,d.theta)),d.phi=Math.max(e.minPolarAngle,Math.min(e.maxPolarAngle,d.phi)),d.makeSafe(),e.enableDamping===!0?e.target.addScaledVector(x,e.dampingFactor):e.target.add(x),e.zoomToCursor&&F||e.object.isOrthographicCamera?d.radius=U(d.radius):d.radius=U(d.radius*m),r.setFromSpherical(d),r.applyQuaternion(R),mt.copy(e.target).add(r),e.object.matrixAutoUpdate||e.object.updateMatrix(),e.object.lookAt(e.target),e.enableDamping===!0?(h.theta*=1-e.dampingFactor,h.phi*=1-e.dampingFactor,x.multiplyScalar(1-e.dampingFactor)):(h.set(0,0,0),x.set(0,0,0));let ze=!1;if(e.zoomToCursor&&F){let ve=null;if(e.object instanceof Re&&e.object.isPerspectiveCamera){const Ce=r.length();ve=U(Ce*m);const ke=Ce-ve;e.object.position.addScaledVector(L,ke),e.object.updateMatrixWorld()}else if(e.object.isOrthographicCamera){const Ce=new N(k.x,k.y,0);Ce.unproject(e.object),e.object.zoom=Math.max(e.minZoom,Math.min(e.maxZoom,e.object.zoom/m)),e.object.updateProjectionMatrix(),ze=!0;const ke=new N(k.x,k.y,0);ke.unproject(e.object),e.object.position.sub(ke).add(Ce),e.object.updateMatrixWorld(),ve=r.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),e.zoomToCursor=!1;ve!==null&&(e.screenSpacePanning?e.target.set(0,0,-1).transformDirection(e.object.matrix).multiplyScalar(ve).add(e.object.position):(Be.origin.copy(e.object.position),Be.direction.set(0,0,-1).transformDirection(e.object.matrix),Math.abs(e.object.up.dot(Be.direction))<kn?n.lookAt(e.target):(_t.setFromNormalAndCoplanarPoint(e.object.up,e.target),Be.intersectPlane(_t,e.target))))}else e.object instanceof De&&e.object.isOrthographicCamera&&(e.object.zoom=Math.max(e.minZoom,Math.min(e.maxZoom,e.object.zoom/m)),e.object.updateProjectionMatrix(),ze=!0);return m=1,F=!1,ze||G.distanceToSquared(e.object.position)>E||8*(1-oe.dot(e.object.quaternion))>E?(e.dispatchEvent(a),G.copy(e.object.position),oe.copy(e.object.quaternion),ze=!1,!0):!1}})(),this.connect=r=>{r===document&&console.error('THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.'),e.domElement=r,e.domElement.style.touchAction="none",e.domElement.addEventListener("contextmenu",pt),e.domElement.addEventListener("pointerdown",je),e.domElement.addEventListener("pointercancel",dt),e.domElement.addEventListener("wheel",ut)},this.dispose=()=>{var r,p,O,R,G,oe;(r=e.domElement)==null||r.removeEventListener("contextmenu",pt),(p=e.domElement)==null||p.removeEventListener("pointerdown",je),(O=e.domElement)==null||O.removeEventListener("pointercancel",dt),(R=e.domElement)==null||R.removeEventListener("wheel",ut),(G=e.domElement)==null||G.ownerDocument.removeEventListener("pointermove",Ke),(oe=e.domElement)==null||oe.ownerDocument.removeEventListener("pointerup",qe),e._domElementKeyEvents!==null&&e._domElementKeyEvents.removeEventListener("keydown",Qe)};const e=this,a={type:"change"},l={type:"start"},u={type:"end"},i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let c=i.NONE;const E=1e-6,d=new Pt,h=new Pt;let m=1;const x=new N,b=new q,y=new q,P=new q,v=new q,j=new q,M=new q,A=new q,C=new q,_=new q,L=new N,k=new q;let F=!1;const f=[],$={};function V(){return 2*Math.PI/60/60*e.autoRotateSpeed}function S(){return Math.pow(.95,e.zoomSpeed)}function W(r){e.reverseOrbit||e.reverseHorizontalOrbit?h.theta+=r:h.theta-=r}function X(r){e.reverseOrbit||e.reverseVerticalOrbit?h.phi+=r:h.phi-=r}const te=(()=>{const r=new N;return function(O,R){r.setFromMatrixColumn(R,0),r.multiplyScalar(-O),x.add(r)}})(),re=(()=>{const r=new N;return function(O,R){e.screenSpacePanning===!0?r.setFromMatrixColumn(R,1):(r.setFromMatrixColumn(R,0),r.crossVectors(e.object.up,r)),r.multiplyScalar(O),x.add(r)}})(),J=(()=>{const r=new N;return function(O,R){const G=e.domElement;if(G&&e.object instanceof Re&&e.object.isPerspectiveCamera){const oe=e.object.position;r.copy(oe).sub(e.target);let ae=r.length();ae*=Math.tan(e.object.fov/2*Math.PI/180),te(2*O*ae/G.clientHeight,e.object.matrix),re(2*R*ae/G.clientHeight,e.object.matrix)}else G&&e.object instanceof De&&e.object.isOrthographicCamera?(te(O*(e.object.right-e.object.left)/e.object.zoom/G.clientWidth,e.object.matrix),re(R*(e.object.top-e.object.bottom)/e.object.zoom/G.clientHeight,e.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),e.enablePan=!1)}})();function me(r){e.object instanceof Re&&e.object.isPerspectiveCamera||e.object instanceof De&&e.object.isOrthographicCamera?m/=r:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),e.enableZoom=!1)}function Ae(r){e.object instanceof Re&&e.object.isPerspectiveCamera||e.object instanceof De&&e.object.isOrthographicCamera?m*=r:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),e.enableZoom=!1)}function Me(r){if(!e.zoomToCursor||!e.domElement)return;F=!0;const p=e.domElement.getBoundingClientRect(),O=r.clientX-p.left,R=r.clientY-p.top,G=p.width,oe=p.height;k.x=O/G*2-1,k.y=-(R/oe)*2+1,L.set(k.x,k.y,1).unproject(e.object).sub(e.object.position).normalize()}function U(r){return Math.max(e.minDistance,Math.min(e.maxDistance,r))}function $e(r){b.set(r.clientX,r.clientY)}function ge(r){Me(r),A.set(r.clientX,r.clientY)}function xe(r){v.set(r.clientX,r.clientY)}function He(r){y.set(r.clientX,r.clientY),P.subVectors(y,b).multiplyScalar(e.rotateSpeed);const p=e.domElement;p&&(W(2*Math.PI*P.x/p.clientHeight),X(2*Math.PI*P.y/p.clientHeight)),b.copy(y),e.update()}function Ue(r){C.set(r.clientX,r.clientY),_.subVectors(C,A),_.y>0?me(S()):_.y<0&&Ae(S()),A.copy(C),e.update()}function Ze(r){j.set(r.clientX,r.clientY),M.subVectors(j,v).multiplyScalar(e.panSpeed),J(M.x,M.y),v.copy(j),e.update()}function Se(r){Me(r),r.deltaY<0?Ae(S()):r.deltaY>0&&me(S()),e.update()}function Xe(r){let p=!1;switch(r.code){case e.keys.UP:J(0,e.keyPanSpeed),p=!0;break;case e.keys.BOTTOM:J(0,-e.keyPanSpeed),p=!0;break;case e.keys.LEFT:J(e.keyPanSpeed,0),p=!0;break;case e.keys.RIGHT:J(-e.keyPanSpeed,0),p=!0;break}p&&(r.preventDefault(),e.update())}function _e(){if(f.length==1)b.set(f[0].pageX,f[0].pageY);else{const r=.5*(f[0].pageX+f[1].pageX),p=.5*(f[0].pageY+f[1].pageY);b.set(r,p)}}function I(){if(f.length==1)v.set(f[0].pageX,f[0].pageY);else{const r=.5*(f[0].pageX+f[1].pageX),p=.5*(f[0].pageY+f[1].pageY);v.set(r,p)}}function z(){const r=f[0].pageX-f[1].pageX,p=f[0].pageY-f[1].pageY,O=Math.sqrt(r*r+p*p);A.set(0,O)}function Y(){e.enableZoom&&z(),e.enablePan&&I()}function ie(){e.enableZoom&&z(),e.enableRotate&&_e()}function be(r){if(f.length==1)y.set(r.pageX,r.pageY);else{const O=Je(r),R=.5*(r.pageX+O.x),G=.5*(r.pageY+O.y);y.set(R,G)}P.subVectors(y,b).multiplyScalar(e.rotateSpeed);const p=e.domElement;p&&(W(2*Math.PI*P.x/p.clientHeight),X(2*Math.PI*P.y/p.clientHeight)),b.copy(y)}function ye(r){if(f.length==1)j.set(r.pageX,r.pageY);else{const p=Je(r),O=.5*(r.pageX+p.x),R=.5*(r.pageY+p.y);j.set(O,R)}M.subVectors(j,v).multiplyScalar(e.panSpeed),J(M.x,M.y),v.copy(j)}function we(r){const p=Je(r),O=r.pageX-p.x,R=r.pageY-p.y,G=Math.sqrt(O*O+R*R);C.set(0,G),_.set(0,Math.pow(C.y/A.y,e.zoomSpeed)),me(_.y),A.copy(C)}function Ie(r){e.enableZoom&&we(r),e.enablePan&&ye(r)}function Ne(r){e.enableZoom&&we(r),e.enableRotate&&be(r)}function je(r){var p,O;e.enabled!==!1&&(f.length===0&&((p=e.domElement)==null||p.ownerDocument.addEventListener("pointermove",Ke),(O=e.domElement)==null||O.ownerDocument.addEventListener("pointerup",qe)),co(r),r.pointerType==="touch"?io(r):so(r))}function Ke(r){e.enabled!==!1&&(r.pointerType==="touch"?ao(r):ro(r))}function qe(r){var p,O,R;ft(r),f.length===0&&((p=e.domElement)==null||p.releasePointerCapture(r.pointerId),(O=e.domElement)==null||O.ownerDocument.removeEventListener("pointermove",Ke),(R=e.domElement)==null||R.ownerDocument.removeEventListener("pointerup",qe)),e.dispatchEvent(u),c=i.NONE}function dt(r){ft(r)}function so(r){let p;switch(r.button){case 0:p=e.mouseButtons.LEFT;break;case 1:p=e.mouseButtons.MIDDLE;break;case 2:p=e.mouseButtons.RIGHT;break;default:p=-1}switch(p){case de.DOLLY:if(e.enableZoom===!1)return;ge(r),c=i.DOLLY;break;case de.ROTATE:if(r.ctrlKey||r.metaKey||r.shiftKey){if(e.enablePan===!1)return;xe(r),c=i.PAN}else{if(e.enableRotate===!1)return;$e(r),c=i.ROTATE}break;case de.PAN:if(r.ctrlKey||r.metaKey||r.shiftKey){if(e.enableRotate===!1)return;$e(r),c=i.ROTATE}else{if(e.enablePan===!1)return;xe(r),c=i.PAN}break;default:c=i.NONE}c!==i.NONE&&e.dispatchEvent(l)}function ro(r){if(e.enabled!==!1)switch(c){case i.ROTATE:if(e.enableRotate===!1)return;He(r);break;case i.DOLLY:if(e.enableZoom===!1)return;Ue(r);break;case i.PAN:if(e.enablePan===!1)return;Ze(r);break}}function ut(r){e.enabled===!1||e.enableZoom===!1||c!==i.NONE&&c!==i.ROTATE||(r.preventDefault(),e.dispatchEvent(l),Se(r),e.dispatchEvent(u))}function Qe(r){e.enabled===!1||e.enablePan===!1||Xe(r)}function io(r){switch(ht(r),f.length){case 1:switch(e.touches.ONE){case ue.ROTATE:if(e.enableRotate===!1)return;_e(),c=i.TOUCH_ROTATE;break;case ue.PAN:if(e.enablePan===!1)return;I(),c=i.TOUCH_PAN;break;default:c=i.NONE}break;case 2:switch(e.touches.TWO){case ue.DOLLY_PAN:if(e.enableZoom===!1&&e.enablePan===!1)return;Y(),c=i.TOUCH_DOLLY_PAN;break;case ue.DOLLY_ROTATE:if(e.enableZoom===!1&&e.enableRotate===!1)return;ie(),c=i.TOUCH_DOLLY_ROTATE;break;default:c=i.NONE}break;default:c=i.NONE}c!==i.NONE&&e.dispatchEvent(l)}function ao(r){switch(ht(r),c){case i.TOUCH_ROTATE:if(e.enableRotate===!1)return;be(r),e.update();break;case i.TOUCH_PAN:if(e.enablePan===!1)return;ye(r),e.update();break;case i.TOUCH_DOLLY_PAN:if(e.enableZoom===!1&&e.enablePan===!1)return;Ie(r),e.update();break;case i.TOUCH_DOLLY_ROTATE:if(e.enableZoom===!1&&e.enableRotate===!1)return;Ne(r),e.update();break;default:c=i.NONE}}function pt(r){e.enabled!==!1&&r.preventDefault()}function co(r){f.push(r)}function ft(r){delete $[r.pointerId];for(let p=0;p<f.length;p++)if(f[p].pointerId==r.pointerId){f.splice(p,1);return}}function ht(r){let p=$[r.pointerId];p===void 0&&(p=new q,$[r.pointerId]=p),p.set(r.pageX,r.pageY)}function Je(r){const p=r.pointerId===f[0].pointerId?f[1]:f[0];return $[p.pointerId]}s!==void 0&&this.connect(s),this.update()}};const Dn=new N,Nt=g.forwardRef(function({start:n=[0,0,0],end:s=[0,0,0],mid:e,segments:a=20,...l},u){const i=g.useRef(null),[c]=g.useState(()=>new Do(void 0,void 0,void 0)),E=g.useCallback((h,m,x,b=20)=>(h instanceof N?c.v0.copy(h):c.v0.set(...h),m instanceof N?c.v2.copy(m):c.v2.set(...m),x instanceof N?c.v1.copy(x):c.v1.copy(c.v0.clone().add(c.v2.clone().sub(c.v0)).add(Dn.set(0,c.v0.y-c.v2.y,0))),c.getPoints(b)),[]);g.useLayoutEffect(()=>{i.current.setPoints=(h,m,x)=>{const b=E(h,m,x);i.current.geometry&&i.current.geometry.setPositions(b.map(y=>y.toArray()).flat())}},[]);const d=g.useMemo(()=>E(n,s,e,a),[n,s,e,a]);return g.createElement(Mo,Z({ref:$o([i,u]),points:d},l))}),Bn=g.forwardRef(({makeDefault:t,camera:n,regress:s,domElement:e,enableDamping:a=!0,onChange:l,onStart:u,onEnd:i,...c},E)=>{const d=ee(C=>C.invalidate),h=ee(C=>C.camera),m=ee(C=>C.gl),x=ee(C=>C.events),b=ee(C=>C.setEvents),y=ee(C=>C.set),P=ee(C=>C.get),v=ee(C=>C.performance),j=n||h,M=e||x.connected||m.domElement,A=g.useMemo(()=>new Rn(j),[j]);return Ge(()=>{A.enabled&&A.update()},-1),g.useEffect(()=>(A.connect(M),()=>void A.dispose()),[M,s,A,d]),g.useEffect(()=>{const C=k=>{d(),s&&v.regress(),l&&l(k)},_=k=>{u&&u(k)},L=k=>{i&&i(k)};return A.addEventListener("change",C),A.addEventListener("start",_),A.addEventListener("end",L),()=>{A.removeEventListener("start",_),A.removeEventListener("end",L),A.removeEventListener("change",C)}},[l,u,i,A,d,b]),g.useEffect(()=>{if(t){const C=P().controls;return y({controls:A}),()=>y({controls:C})}},[t,A]),g.createElement("primitive",Z({ref:E,object:A,enableDamping:a},c))});function Ln(t){const n=t+"Geometry";return g.forwardRef(({args:s,children:e,...a},l)=>g.createElement("mesh",Z({ref:l},a),g.createElement(n,{attach:"geometry",args:s}),e))}const Vn=Ln("circle"),Q=10,Fn=2,Wn=2,zt=10,Yn=10,kt=(t,n,s)=>{const l=new N().subVectors(n,t).normalize().multiplyScalar(s);return new N().addVectors(t,l)},Gn=(t,n,s,e)=>{const a=new N().lerpVectors(t,n,.5),l=new N().subVectors(n,t).normalize(),u=new N(-l.y,l.x,l.z).normalize(),i=(s-e/2)*Yn;return new N().addVectors(a,u.multiplyScalar(i))},oo=({links:t,nodes:n,onEdgeClick:s})=>{const e=g.useRef(null),{camera:a}=ee(),l=new N,u=new N,i=new N,c=new N,E=new N,d=new N,h=new N,m=new N;Ge(()=>{e.current&&n&&e.current.children.forEach((b,y)=>{var F,f,$,V;const P=t[y];if(!P)return;const v=n.find(S=>S.ref_id===P.target),j=n.find(S=>S.ref_id===P.source);l.set((j==null?void 0:j.x)||0,(j==null?void 0:j.y)||0,(j==null?void 0:j.z)||0),u.set((v==null?void 0:v.x)||0,(v==null?void 0:v.y)||0,(v==null?void 0:v.z)||0);const M=b.children[0],A=b.children[1],C=b.children[2],_=b.children[3],L=t.filter(S=>S.source===P.source&&S.target===P.target||S.source===P.target&&S.target===P.source).length,k=t.filter((S,W)=>W<y&&(S.source===P.source&&S.target===P.target||S.source===P.target&&S.target===P.source)).length;if((j==null?void 0:j.ref_id)===(v==null?void 0:v.ref_id)){const[S,W,X]=To(l);(F=M.setPoints)==null||F.call(M,l,X,S),(f=A.setPoints)==null||f.call(A,X,u,S),C.position.set(X.x,X.y,W.z),C.lookAt(S),C.rotateX(-Math.PI/2),_.position.set(X.x,X.y,W.z),_.lookAt(a.position)}else{m.copy(kt(l,u,Q)),h.copy(kt(u,l,Q+.5)),i.lerpVectors(m,h,.5),L>1?i.copy(Gn(m,h,k,L)):i.lerpVectors(m,h,.5);const S=30;c.subVectors(h,m).normalize().multiplyScalar(S/2),E.subVectors(i,c),d.addVectors(i,c);const W=new N().addVectors(m,E).multiplyScalar(.5),X=new N().addVectors(d,h).multiplyScalar(.5);($=M.setPoints)==null||$.call(M,m,E,W),(V=A.setPoints)==null||V.call(A,d,h,X),C.position.set(h.x,h.y,h.z),C.lookAt(m),C.rotateX(-Math.PI/2),_.position.set(i.x,i.y,i.z),_.lookAt(a.position);let te=Math.atan2(h.y-m.y,h.x-m.x);(te>Math.PI/2||te<-Math.PI/2)&&(te+=Math.PI),_.rotation.set(0,0,te);const re=m.distanceTo(h),J=re<S?2:4;re<S?_.text=rt(P.edge_type,zt):_.text=P.edge_type,_.fontSize=J}})});const x=(b,y,P,v)=>{if(b==="CHILD_OF"||y==="string"||P==="string")return;const j=n==null?void 0:n.find(_=>_.ref_id===y),M=n==null?void 0:n.find(_=>_.ref_id===P),A=(j==null?void 0:j.type)||"",C=(M==null?void 0:M.type)||"";s(v,b,A,C)};return o.jsx("group",{ref:e,children:t.map(b=>o.jsxs("group",{children:[o.jsx(Nt,{color:"white",end:[0,0,0],lineWidth:1,start:[0,0,0]}),o.jsx(Nt,{color:"white",end:[0,0,0],lineWidth:1,start:[0,0,0]}),o.jsxs("mesh",{position:new N(0,0,0),children:[o.jsx("coneGeometry",{args:[Fn,Wn,32]}),o.jsx("meshBasicMaterial",{color:"white"})]}),o.jsx(Jt,{anchorX:"center",anchorY:"middle",color:"white",...eo,lineHeight:1,maxWidth:20,onClick:()=>x(b.edge_type,b.source,b.target,b.ref_id),rotation:[0,0,0],textAlign:"center",children:rt(b.edge_type,zt)})]},b.ref_id))})};oo.displayName="Lines";const Hn=["#ff13c9","#5af0ff","#3233ff","#c2f0c2","#ff6666","#99ccff","#ffb3b3"],Un=B.div`
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
`,Zn=B(So)`
  position: absolute;
`;new Bo(2,2,2);const no=g.memo(({node:t,setSelectedNode:n,onSimulationUpdate:s,isSelected:e})=>{var y;const a=g.useRef(null),[l,u]=g.useState(!1);console.log(e);const{size:i,camera:c}=ee(),E=jo(P=>{if(t.type==="Thing")return;const{xy:[v,j],down:M,dragging:A,first:C,elapsedTime:_}=P;if(!(!A||C||_<100)&&M&&a.current){s();const L=(v-i.left)/window.innerWidth*i.width,k=(j-i.top)/window.innerHeight*i.height,$=new N(L/i.width*2-1,-k/i.height*2+1,0).unproject(c).multiply(new N(1,1,0)).clone();t.fx=$.x,t.fy=$.y}});Ge(()=>{a.current&&a.current.position.set(t.x||0,t.y||0,0)});const d=Hn[(y=t==null?void 0:t.children)==null?void 0:y.length]||"red",h=P=>{P.stopPropagation(),t.type!=="Thing"&&n()},m=rt(t.type||"",Q),x=()=>{u(!0)},b=()=>{u(!1)};return o.jsxs("mesh",{ref:a,onClick:h,...E(),onPointerOut:b,onPointerOver:x,position:new N(t.x,t.y,0),children:[o.jsx(Vn,{args:[Q,30,20],children:o.jsx("meshStandardMaterial",{attach:"material",color:d})}),o.jsx(Jt,{...eo,clipRect:[-Q,-Q,Q,Q],color:"#000",fontSize:2,maxWidth:Q*2,name:t.type,textAlign:"left",children:m}),l&&o.jsx(Zn,{position:[0,5,0],zIndexRange:[100,0],children:o.jsx(Un,{children:t.type})})]})});no.displayName="Node";const Xn=({simulation:t,setSelectedSchemaId:n,selectedId:s,setIsAddEdgeNode:e})=>{const[a]=Qt(u=>[u.schemas]),l=()=>{t&&(t.alpha(.05),t.restart())};return o.jsx(o.Fragment,{children:a.map((u,i)=>{const c=t.nodes()[i];return c?o.jsx(no,{isSelected:c.ref_id===s,node:c,onSimulationUpdate:l,setSelectedNode:()=>{e(!1),n(c.ref_id)}},c.ref_id):null})})},Kn=({schemasWithPositions:t,filteredLinks:n,setSelectedSchemaId:s,selectedSchemaId:e,setIsAddEdgeNode:a,onEdgeClick:l})=>{const[u,i]=g.useState(null),c=Ct(t),E=Ct(n);return g.useEffect(()=>{if(!t.length||!n.length)return;const d=structuredClone(t),h=structuredClone(n);if(u){c&&c.length!==t.length&&E&&E.length!==n.length&&(u.nodes(d).force("link",xt(h).id(x=>x.ref_id).distance(100)).force("charge",bt()).force("center",yt()).force("collide",wt(Q+5)).alpha(.5).restart(),i({...u}));return}const m=mo(d).force("link",xt(h).id(x=>x.ref_id).distance(120)).force("charge",bt().strength(-100)).force("center",yt()).force("collide",wt(Q+5));i(m)},[t,u,n,c,E]),Ge(()=>{}),u?o.jsxs(o.Fragment,{children:[o.jsx(oo,{links:n,nodes:u.nodes(),onEdgeClick:l}),o.jsx(Xn,{selectedId:e,setIsAddEdgeNode:a,setSelectedSchemaId:s,simulation:u})]}):null},nt=new Lo(0),qn=({selectedSchemaId:t,links:n,schemasWithPositions:s,setSelectedSchemaId:e,setIsAddEdgeNode:a,onEdgeClick:l})=>o.jsxs(_o,{camera:{zoom:1,position:[0,0,200]},id:"schema-canvas",linear:!0,orthographic:!0,children:[o.jsx("color",{args:[nt.r,nt.g,nt.b],attach:"background"}),go&&o.jsx(Io,{position:"right-bottom"}),o.jsx(Qn,{}),o.jsx(No,{}),o.jsx(Kn,{filteredLinks:n,onEdgeClick:l,schemasWithPositions:s,selectedSchemaId:t,setIsAddEdgeNode:a,setSelectedSchemaId:e})]}),Qn=()=>{g.useEffect(()=>{const s=a=>{["Meta","Alt"].includes(a.key)&&(document.body.style.cursor="grab")},e=a=>{["Meta","Alt"].includes(a.key)&&(document.body.style.cursor="default")};return window.addEventListener("keydown",s,!1),window.addEventListener("keyup",e,!1),()=>{window.removeEventListener("keydown",s,!1),window.removeEventListener("keyup",e,!1)}},[]);const t=()=>{document.body.style.cursor="grabbing"},n=()=>{document.body.style.cursor="default"};return o.jsx(Bn,{dampingFactor:1,enableDamping:!0,enablePan:!0,enableRotate:!1,enableZoom:!0,maxZoom:20,minZoom:1,onEnd:n,onStart:t,zoomSpeed:1.5,zoomToCursor:!0})},Jn=t=>o.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 18 19",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:o.jsx("path",{d:"M9.5002 0.270145C10.3742 0.270145 11.1128 0.571885 11.7161 1.17537C12.3193 1.77868 12.6209 2.51732 12.6209 3.39129C12.6209 4.17273 12.3716 4.85117 11.873 5.42662C11.3744 6.00189 10.7483 6.34792 9.99474 6.46469L9.99474 9.0052L13.8388 9.0052C14.2785 9.0052 14.6549 9.16172 14.9679 9.47476C15.2809 9.78779 15.4375 10.1642 15.4375 10.6039L15.4375 12.564L17.0171 12.564C17.2435 12.564 17.4334 12.6405 17.5866 12.7936C17.7396 12.9468 17.8162 13.1366 17.8162 13.3631L17.8162 17.5042C17.8162 17.7389 17.7396 17.9321 17.5866 18.0836C17.4334 18.2352 17.2435 18.311 17.0171 18.311L12.8759 18.311C12.6412 18.311 12.4481 18.2345 12.2965 18.0814C12.1449 17.9282 12.0692 17.7384 12.0692 17.5119L12.0692 13.3707C12.0692 13.136 12.1457 12.9429 12.2987 12.7913C12.452 12.6398 12.6418 12.564 12.8682 12.564L14.4479 12.564L14.4479 10.6039C14.4479 10.4262 14.3908 10.2803 14.2767 10.166C14.1624 10.0518 14.0164 9.99478 13.8388 9.99478L5.16112 9.99478C4.98349 9.99478 4.83753 10.0518 4.72323 10.166C4.6091 10.2803 4.55203 10.4262 4.55203 10.6039L4.55203 12.6115C5.3056 12.7283 5.93168 13.0743 6.43026 13.6496C6.92885 14.225 7.17814 14.9034 7.17814 15.6849C7.17814 16.5587 6.87648 17.2973 6.27317 17.9008C5.66969 18.5041 4.93096 18.8058 4.05699 18.8058C3.18303 18.8058 2.44439 18.5041 1.84107 17.9008C1.23792 17.2973 0.936342 16.5587 0.936343 15.6849C0.936343 14.9034 1.18564 14.225 1.68422 13.6496C2.18281 13.0743 2.80888 12.7283 3.56245 12.6115L3.56245 10.6039C3.56245 10.1642 3.71897 9.78779 4.03201 9.47476C4.34504 9.16172 4.72142 9.0052 5.16112 9.0052L9.00516 9.0052L9.00516 6.46469C8.25159 6.34792 7.62552 6.00189 7.12693 5.42662C6.62835 4.85117 6.37905 4.17273 6.37905 3.39129C6.37905 2.51732 6.68071 1.77868 7.28403 1.17537C7.88751 0.571885 8.62623 0.270145 9.5002 0.270145Z",fill:"currentColor"})}),es=({onClose:t,activeTab:n,setActiveTab:s})=>o.jsxs(ts,{children:[o.jsxs(os,{children:[o.jsx(Jn,{}),o.jsx(ns,{children:"Blueprint"})]}),o.jsxs(ss,{children:[o.jsx(Rt,{active:n==="all",onClick:()=>s("all"),children:"Show All"}),o.jsx(Rt,{active:n==="parent",onClick:()=>s("parent"),children:"Parent Only"})]}),o.jsx(rs,{onClick:t,children:o.jsx(lt,{})})]}),ts=B(w)`
  background-color: ${D.BG1};
  height: 64px;
  width: 100%;
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
  justify-content: space-between;
  padding: 17px;
`,os=B.div`
  display: flex;
  align-items: center;
  font-size: 22px;
  font-weight: 400;
  font-family: Barlow;

  svg {
    color: ${D.GRAY6};
    margin-left: 4px;
  }
`,ns=B.span`
  color: ${D.white};
  margin-left: 15px;
`,ss=B.div`
  display: flex;
  position: absolute;
  top: 16px;
  right: 60px;
  background-color: ${D.divider2};
  border-radius: 6px;
  padding: 2px;
`,Rt=B.div`
  color: ${t=>t.active?D.white:D.GRAY6};
  background-color: ${t=>t.active?D.BUTTON1:"transparent"};
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
`,rs=B.div`
  position: absolute;
  top: 16px;
  right: 12px;
  font-size: 20px;
  color: ${D.GRAY6};
  cursor: pointer;
  z-index: 1;

  svg {
    width: 30px;
    height: 32px;
  }
`,is=({onCreateNew:t,onAddEdgeNode:n})=>o.jsxs(as,{children:[o.jsxs(Dt,{"data-testid":"add-schema-type",onClick:t,children:[o.jsx(Bt,{children:o.jsx(Tt,{})}),o.jsx(K,{children:"Add Type"})]}),o.jsxs(Dt,{"data-testid":"add-edge",onClick:n,children:[o.jsx(Bt,{children:o.jsx(Tt,{})}),o.jsx(K,{children:"Add Edge"})]})]}),as=B(w).attrs({align:"flex-start",direction:"column",justify:"flex-start"})`
  flex: 1 1 auto;
  z-index: 31;
  transition: opacity 1s;
  background: ${D.BG2};
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
`,Dt=B(w).attrs({align:"center",justify:"center",p:0})`
  position: relative;
  width: 64px;
  height: 58px;
  padding: 0;
  flex-direction: row;
  color: ${D.GRAY6};
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
    color: ${D.white};

    &:before {
      width: 3px;
      height: 32px;
      background-color: ${D.primaryBlue};
    }

    ${K} {
      display: block;
      width: min-content;
      opacity: 1;
      visibility: visible;
    }
  }

  &:active {
    color: ${D.white};
    background: ${D.black};
    &:before {
      width: 3px;
      height: 100%;
      background-color: ${D.primaryBlue};
    }
  }

  &.root {
    border-radius: 50%;
    padding: 0;
    align-items: center;
    justify-content: center;
    border: none;
  }
`,Bt=B(w)`
  justify-content: center;
  align-items: center;
  font-size: 24px;
`,cs=({Close:t})=>{const[n,s]=g.useState(""),[e,a]=g.useState(!1),[l,u]=g.useState(!1),[i,c]=g.useState(!1),[E,d]=g.useState({refId:"",edgeType:"",source:"",target:""}),[h,m]=g.useState(!1),[x,b]=g.useState("all"),[y,P,v,j]=Qt(f=>[f.schemas,f.links,f.setSchemas,f.setSchemaLinks]);g.useEffect(()=>{(async()=>{u(!0);try{const $=await jt(),V=$.schemas.filter(S=>S.ref_id&&!S.is_deleted);v(V.length>0?V:$.schemas),j($.edges.length>0?$.edges:[]),u(!1)}catch($){console.error("Error fetching data:",$),u(!1)}})()},[v,j]);const M=f=>{if(y.some(V=>V.ref_id===f.ref_id))v(y.map(V=>V.ref_id===f.ref_id?{...f,children:[]}:V));else{v([...y,{...f,children:[]}]);const V=y.find(S=>f.parent===S.type);j([...P,{ref_id:`new-link-${P.length}`,edge_type:"CHILD_OF",source:f.ref_id||"new",target:(V==null?void 0:V.ref_id)||"new"}])}},A=async()=>{const f=await jt();v(f.schemas.filter($=>$.ref_id&&!$.is_deleted&&$.ref_id)),j(f.edges)},C=f=>{v(y.filter($=>$.type!==f))},_=y.map(f=>({...f,children:y.filter($=>$.parent===f.type).map($=>$.ref_id||"")})),L=P.filter(f=>_.some($=>$.ref_id===f.source)&&_.some($=>$.ref_id===f.target)),k=y.find(f=>f.ref_id===n)||null;if(l)return o.jsx(w,{align:"center",basis:"100%",grow:1,justify:"center",shrink:1,children:o.jsx(le,{color:D.white})});const F=x==="all"?L:L.filter(f=>f.edge_type==="CHILD_OF");return o.jsxs(o.Fragment,{children:[o.jsx(w,{ml:-20,mr:-20,mt:-20,children:o.jsx(es,{activeTab:x,onClose:t,setActiveTab:b})}),o.jsxs(w,{align:"stretch",direction:"row",grow:1,children:[o.jsx(w,{mb:-20,ml:-20,children:o.jsx(is,{onAddEdgeNode:()=>{c(!0),a(!1),s(""),d({refId:"",edgeType:"",source:"",target:""})},onCreateNew:()=>{c(!1),a(!0),s("")}})}),o.jsx(w,{children:k||e?o.jsx(Lt,{children:o.jsx(Vt,{children:o.jsx($n,{graphLoading:h,onDelete:C,onSchemaCreate:M,onSchemaUpdate:A,selectedSchema:k,setGraphLoading:m,setIsCreateNew:a,setSelectedSchemaId:s})})}):null}),o.jsx(w,{children:i?o.jsx(Lt,{children:o.jsx(Vt,{children:o.jsx(wn,{edgeData:E,setGraphLoading:m,setIsAddEdgeNode:c})})}):null}),o.jsx(ls,{direction:"row",grow:1,children:o.jsx(ds,{children:h?o.jsx(w,{align:"center",basis:"100%",grow:1,justify:"center",shrink:1,children:o.jsx(le,{color:D.white})}):o.jsx(qn,{links:F,onEdgeClick:(f,$,V,S)=>{d({refId:f,edgeType:$,source:V,target:S}),c(!0),a(!1),s("")},schemasWithPositions:_,selectedSchemaId:n,setIsAddEdgeNode:c,setSelectedSchemaId:s})})})]})]})},ls=B(w)`
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
`,Lt=B(w)`
  width: 100%;
  max-width: 400px;
  background: ${D.BG1};
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
`,Vt=B.div`
  height: 100%;
  overflow-y: auto;
  padding: 16px;
`,ds=B(w)`
  flex: 1 1 100%;
`,us=()=>{const{close:t}=Xt("blueprintGraph"),n=()=>{t()};return o.jsx(xo,{background:"black",id:"blueprintGraph",kind:"full",preventOutsideClose:!0,children:o.jsx(cs,{Close:n})})},zs=g.memo(us);export{zs as BlueprintModal};
