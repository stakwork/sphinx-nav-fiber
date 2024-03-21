import{_ as B,r as m,a as re,j as e,c as R,Q as fe,u as ye,s as y,b as T,F as n,T as g,g as ie,h as M,k as ge,aj as E,v as ee,ak as te,B as je,e as be,a4 as we}from"./index-fbea16ad.js";import{g as ce,a as ae,s as Y,aF as Ce,aG as le,c as de,b as pe,aC as ke,B as x,C as ue,aD as Se,aH as he,aI as ve,q as ze,u as Be,F as Te}from"./react-toastify.esm-ee4152bf.js";import{B as Ie}from"./index-7b5195df.js";import{n as oe}from"./toastMessage-63eefe97.js";import{u as Ne}from"./index-73d5b24f.js";import{S as Pe}from"./index-945068c3.js";import{h as Fe}from"./index.esm-08135425.js";import{C as $e}from"./CheckIcon-190c4154.js";import{A as K}from"./index-a62f11e2.js";import{T as _}from"./index-c28e550d.js";import{N as Ee,O as Le,c as ne,a as Oe,i as Re}from"./constants-96d1060c.js";import{u as Me}from"./Popover-29078010.js";import{u as _e}from"./Select-29bc5b44.js";import{c as Q}from"./useSlotProps-22211fec.js";import"./index-451ca961.js";import"./Stack-6ea30c66.js";import"./Popper-f1095716.js";import"./InfoIcon-8f72a8b2.js";function Ae(t){return ce("PrivateSwitchBase",t)}ae("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);const De=["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","disableFocusRipple","edge","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"],Ue=t=>{const{classes:o,checked:r,disabled:a,edge:l}=t,c={root:["root",r&&"checked",a&&"disabled",l&&`edge${R(l)}`],input:["input"]};return pe(c,Ae,o)},qe=Y(Ce)(({ownerState:t})=>B({padding:9,borderRadius:"50%"},t.edge==="start"&&{marginLeft:t.size==="small"?-3:-12},t.edge==="end"&&{marginRight:t.size==="small"?-3:-12})),He=Y("input",{shouldForwardProp:le})({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),Ve=m.forwardRef(function(o,r){const{autoFocus:a,checked:l,checkedIcon:c,className:i,defaultChecked:d,disabled:s,disableFocusRipple:u=!1,edge:p=!1,icon:j,id:k,inputProps:L,inputRef:O,name:P,onBlur:I,onChange:S,onFocus:N,readOnly:q,required:A=!1,tabIndex:D,type:b,value:U}=o,H=re(o,De),[F,V]=_e({controlled:l,default:!!d,name:"SwitchBase",state:"checked"}),w=Me(),G=z=>{N&&N(z),w&&w.onFocus&&w.onFocus(z)},h=z=>{I&&I(z),w&&w.onBlur&&w.onBlur(z)},C=z=>{if(z.nativeEvent.defaultPrevented)return;const Z=z.target.checked;V(Z),S&&S(z,Z)};let f=s;w&&typeof f>"u"&&(f=w.disabled);const v=b==="checkbox"||b==="radio",$=B({},o,{checked:F,disabled:f,disableFocusRipple:u,edge:p}),X=Ue($);return e.jsxs(qe,B({component:"span",className:de(X.root,i),centerRipple:!0,focusRipple:!u,disabled:f,tabIndex:null,role:void 0,onFocus:G,onBlur:h,ownerState:$,ref:r},H,{children:[e.jsx(He,B({autoFocus:a,checked:l,defaultChecked:d,className:X.input,disabled:f,id:v?k:void 0,name:P,onChange:C,readOnly:q,ref:O,required:A,ownerState:$,tabIndex:D,type:b},b==="checkbox"&&U===void 0?{}:{value:U},L)),F?c:j]}))}),Ge=Ve,Je=Q(e.jsx("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),We=Q(e.jsx("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),Ye=Q(e.jsx("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox");function Ke(t){return ce("MuiCheckbox",t)}const Qe=ae("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary","sizeSmall","sizeMedium"]),J=Qe,Xe=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size","className"],Ze=t=>{const{classes:o,indeterminate:r,color:a,size:l}=t,c={root:["root",r&&"indeterminate",`color${R(a)}`,`size${R(l)}`]},i=pe(c,Ke,o);return B({},o,i)},et=Y(Ge,{shouldForwardProp:t=>le(t)||t==="classes",name:"MuiCheckbox",slot:"Root",overridesResolver:(t,o)=>{const{ownerState:r}=t;return[o.root,r.indeterminate&&o.indeterminate,o[`size${R(r.size)}`],r.color!=="default"&&o[`color${R(r.color)}`]]}})(({theme:t,ownerState:o})=>B({color:(t.vars||t).palette.text.secondary},!o.disableRipple&&{"&:hover":{backgroundColor:t.vars?`rgba(${o.color==="default"?t.vars.palette.action.activeChannel:t.vars.palette[o.color].mainChannel} / ${t.vars.palette.action.hoverOpacity})`:fe(o.color==="default"?t.palette.action.active:t.palette[o.color].main,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},o.color!=="default"&&{[`&.${J.checked}, &.${J.indeterminate}`]:{color:(t.vars||t).palette[o.color].main},[`&.${J.disabled}`]:{color:(t.vars||t).palette.action.disabled}})),tt=e.jsx(We,{}),ot=e.jsx(Je,{}),nt=e.jsx(Ye,{}),st=m.forwardRef(function(o,r){var a,l;const c=ye({props:o,name:"MuiCheckbox"}),{checkedIcon:i=tt,color:d="primary",icon:s=ot,indeterminate:u=!1,indeterminateIcon:p=nt,inputProps:j,size:k="medium",className:L}=c,O=re(c,Xe),P=u?p:s,I=u?p:i,S=B({},c,{color:d,indeterminate:u,size:k}),N=Ze(S);return e.jsx(et,B({type:"checkbox",inputProps:B({"data-indeterminate":u},j),icon:m.cloneElement(P,{fontSize:(a=P.props.fontSize)!=null?a:k}),checkedIcon:m.cloneElement(I,{fontSize:(l=I.props.fontSize)!=null?l:k}),ownerState:S,ref:r,className:de(N.root,L)},O,{classes:N}))}),rt=st;function it(t){return Object.keys(t).map(o=>({required:!t[o].includes("?"),type:t[o].includes("?")?t[o].slice(1):t[o],key:o})).filter(({key:o})=>!["type","ref_id","parent"].includes(o))}const ct=({onClick:t,loading:o,error:r})=>{const a=ie(d=>d.budget),[l,c]=m.useState(10),i="node";return m.useEffect(()=>{(async()=>{try{const s=await Se(i);c(s.data.price)}catch(s){console.error("cannot fetch",s)}})()},[i]),e.jsxs(n,{children:[e.jsx(n,{align:"center",direction:"row",justify:"space-between",mb:20,children:e.jsx(n,{align:"center",direction:"row",children:e.jsx(dt,{children:"Approve Cost"})})}),e.jsxs(n,{align:"center",direction:"row",justify:"space-between",mb:20,children:[e.jsxs(at,{children:[e.jsx("div",{className:"title",children:"COST"}),e.jsxs("div",{className:"value","data-testid":"check-price",children:[l," sats"]})]}),e.jsxs(lt,{children:[e.jsx("div",{className:"title",children:"BUDGET"}),e.jsxs("div",{className:"value",children:[ke(a)," sats"]})]})]}),e.jsx(n,{children:e.jsx(x,{color:"secondary","data-testid":"check-icon",disabled:o||!!r,onClick:t,size:"large",startIcon:o?e.jsx(ue,{size:24}):e.jsx($e,{}),type:"submit",variant:"contained",children:"Approve"})}),r?e.jsxs(ut,{role:"tooltip",children:[e.jsxs(pt,{children:[e.jsx(Fe,{fontSize:13}),e.jsx("span",{children:r})]}),e.jsx("div",{className:"tooltip",children:r})]}):null]})},at=y(n).attrs({direction:"column",align:"space-between",justify:"flex-start"})`
  width: 141px;
  height: 61px;
  border: 1px solid ${T.GRAY7};
  border-radius: 6px;
  padding: 16px;
  .title {
    font-family: Barlow;
    color: ${T.secondaryText4};
    font-size: 11px;
    font-style: normal;
    font-weight: 600;
  }

  .value {
    font-family: Barlow;
    color: ${T.white};
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
  }
`,lt=y(n).attrs({direction:"column",align:"space-between",justify:"flex-start"})`
  color: ${T.secondaryText4};
  .title {
    font-family: Barlow;
    font-size: 11px;
    font-style: normal;
    font-weight: 600;
  }

  .value {
    font-family: Barlow;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
  }
`,dt=y(g)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,pt=y(n)`
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  white-space: normal;
  letter-spacing: 0.2px;
  cursor: pointer;
  padding-left: 4px;
  font-size: 13px;
  font-family: Barlow;
  line-height: 18px;
  justify-content: center;

  span {
    margin-left: 4px;
  }
`,ut=y(n)`
  display: flex;
  align-items: center;
  color: ${T.primaryRed};
  position: relative;
  margin-top: 20px;

  .tooltip {
    position: absolute;
    background-color: ${T.black};
    opacity: 0.8;
    border-radius: 4px;
    color: ${T.white};
    top: -10px;
    left: 335px;
    padding: 4px 8px;
    font-size: 13px;
    font-family: Barlow;
    visibility: hidden;
    width: 175px;
    z-index: 1;
  }

  &:hover .tooltip {
    visibility: visible;
  }

  &:focus .tooltip {
    visibility: visible;
  }
`,ht=({type:t,onclose:o})=>e.jsxs(n,{children:[e.jsx(n,{mb:20,children:e.jsx(se,{children:"Comfirm New Type"})}),e.jsx(n,{mb:25,children:e.jsxs(se,{children:["Type: ",t]})}),e.jsxs(n,{direction:"row",children:[e.jsx(n,{grow:1,children:e.jsx(x,{color:"secondary",onClick:o,size:"large",variant:"contained",children:"Cancel"})}),e.jsx(n,{grow:1,ml:20,children:e.jsx(x,{color:"secondary",size:"large",type:"submit",variant:"contained",children:"Comfirm"})})]})]}),se=y(g)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,me=t=>t.charAt(0).toUpperCase()+t.slice(1),mt=({onSelectType:t,skipToStep:o,selectedType:r})=>{const[a,l]=m.useState(null),c=i=>{t((i==null?void 0:i.label)||"")};return m.useEffect(()=>{(async()=>{const s=(await he()).schemas.map(u=>({label:me(u.type),value:u.type}));l([...s,Ee])})()},[r]),e.jsxs(n,{children:[e.jsx(n,{mb:20,children:e.jsx(xe,{children:"Select Parent"})}),e.jsx(n,{direction:"row",mb:20,children:e.jsx(K,{autoFocus:!0,onSelect:c,options:a})}),e.jsxs(n,{direction:"row",children:[e.jsx(n,{grow:1,children:e.jsx(x,{color:"secondary",onClick:()=>o("sourceType"),size:"large",variant:"contained",children:"Prev"})}),e.jsx(n,{grow:1,ml:20,children:e.jsx(x,{color:"secondary",onClick:()=>o("createType"),size:"large",variant:"contained",children:"Next"})})]})]})},xt=({type:t,skipToStep:o,sourceLink:r})=>{const a=t==="Image"?t&&r:t;return e.jsxs(n,{children:[e.jsx(n,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(n,{align:"center",direction:"row",children:e.jsx(xe,{children:"Enter details"})})}),e.jsx(n,{mb:4,children:e.jsx(g,{children:"Name"})}),e.jsx(n,{mb:12,children:e.jsx(_,{id:"cy-item-name",maxLength:250,name:"type",placeholder:"Paste name here...",rules:{...M}})}),t==="Image"?e.jsxs(e.Fragment,{children:[e.jsx(n,{mb:4,children:e.jsx(g,{children:"Link"})}),e.jsx(n,{mb:12,children:e.jsx(_,{id:"cy-item-link",maxLength:250,name:"sourceLink",placeholder:"Paste link here...",rules:{...M}})})]}):null,e.jsxs(n,{direction:"row",children:[e.jsx(n,{grow:1,children:e.jsx(x,{color:"secondary",onClick:()=>o("selectParent"),size:"large",variant:"contained",children:"Prev"})}),e.jsx(n,{grow:1,ml:20,children:e.jsx(x,{color:"secondary",disabled:!a,onClick:()=>o("createNodeType"),size:"large",variant:"contained",children:"Next"})})]})]})},xe=y(g)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,ft=({skipToStep:t,parent:o,onSelectType:r})=>{const[a,l]=m.useState(),c={required:!1,type:"",key:""},[i,d]=m.useState(!0),s=()=>{l(p=>[...p??[],c])},u=o==null?void 0:o.toLowerCase();return m.useEffect(()=>{(async()=>{const j=await ve(u),k=it(j);l(k),d(!1)})()},[u]),e.jsxs(n,{children:[e.jsx(n,{mb:20,children:e.jsx(gt,{children:"Set Attributes"})}),i?e.jsx(ue,{color:T.SECONDARY_BLUE,size:"30"}):e.jsxs(e.Fragment,{children:[e.jsxs(n,{direction:"row",mb:10,children:[e.jsx(W,{style:{marginRight:180,marginLeft:20},children:"Attributes"}),e.jsx(W,{style:{marginRight:130},children:"Type"}),e.jsx(W,{children:"Required"})]}),e.jsx(n,{direction:"column",style:{maxHeight:"280px",overflow:"auto"},children:a==null?void 0:a.map(p=>e.jsx(yt,{name:p.key,onSelectType:r,placeholder:p.key,required:p.required,selectedValue:{label:p.type,value:p.type},type:Le},p.key))}),e.jsx(n,{direction:"row",grow:1,mt:20,children:e.jsx(x,{color:"secondary",onClick:s,size:"large",variant:"contained",children:"Add Attributes"})})]}),e.jsxs(n,{direction:"row",mt:20,children:[e.jsx(n,{grow:1,children:e.jsx(x,{color:"secondary",onClick:()=>t("selectParent"),size:"large",variant:"contained",children:"Prev"})}),e.jsx(n,{grow:1,ml:20,children:e.jsx(x,{color:"secondary",onClick:()=>t("createConfirmation"),size:"large",variant:"contained",children:"Next"})})]})]})},yt=({placeholder:t,type:o,required:r,selectedValue:a,onSelectType:l,name:c})=>{const i={inputProps:{"aria-label":"Checkbox demo"}},d=s=>{l((s==null?void 0:s.label)||"")};return e.jsxs(jt,{children:[e.jsx(_,{className:"text-input",disabled:r,id:"cy-item-name",maxLength:50,name:c,placeholder:t,rules:{...M}}),e.jsx(n,{style:{flex:.5},children:e.jsx(K,{disabled:r,onSelect:d,options:o,selectedValue:a})}),e.jsx(rt,{defaultChecked:!0,disabled:r,size:"small",...i})]})},gt=y(g)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,W=y(g)`
  font-size: 15px;
  color: gray;
`,jt=y(n)`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  padding: 0.25rem;
  margin-bottom: 12px;
`,bt=({type:t,skipToStep:o,name:r,sourceLink:a})=>{const l=t==="Image"?r&&a:r;return e.jsxs(n,{children:[e.jsx(n,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(n,{align:"center",direction:"row",children:e.jsx(wt,{children:"Enter details"})})}),e.jsx(n,{mb:4,children:e.jsxs(g,{children:[t," name"]})}),e.jsx(n,{mb:12,children:e.jsx(_,{id:"cy-item-name",maxLength:250,name:"name",placeholder:"Paste name here...",rules:{...M}})}),t==="Image"?e.jsxs(e.Fragment,{children:[e.jsx(n,{mb:4,children:e.jsx(g,{children:"Link"})}),e.jsx(n,{mb:12,children:e.jsx(_,{id:"cy-item-link",maxLength:250,name:"sourceLink",placeholder:"Paste link here...",rules:{...M}})})]}):null,e.jsxs(n,{direction:"row",children:[e.jsx(n,{grow:1,children:e.jsx(x,{color:"secondary",onClick:()=>o("sourceType"),size:"large",variant:"contained",children:"Prev"})}),e.jsx(n,{grow:1,ml:20,children:e.jsx(x,{color:"secondary",disabled:!l,onClick:()=>o("setBudget"),size:"large",variant:"contained",children:"Next"})})]})]})},wt=y(g)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,Ct=({skipToStep:t,allowNextStep:o,onSelectType:r,selectedType:a})=>{const[l]=ge(s=>[s.customSchemaFlag]),[c,i]=m.useState(null);ne.action=()=>t("selectParent"),m.useEffect(()=>{(async()=>{if(l){const p=(await he()).schemas.map(j=>({label:me(j.type),value:j.type,type:j.type}));i([...p,ne])}else i([...Oe,Re])})()},[a,l]);const d=s=>{r((s==null?void 0:s.label)||"")};return e.jsxs(n,{children:[e.jsx(n,{align:"center",direction:"row",justify:"space-between",mb:20,children:e.jsx(n,{align:"center",direction:"row",children:e.jsx(kt,{children:"Select Type"})})}),e.jsx(n,{direction:"row",mb:20,children:e.jsx(K,{autoFocus:!0,onSelect:d,options:c})}),e.jsx(n,{children:e.jsx(x,{color:"secondary",disabled:!o,onClick:()=>t("source"),size:"large",type:"button",variant:"contained",children:"Next"})})]})},kt=y(g)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,St=async(t,o,r)=>{var a,l;if(t.nodeType==="Create custom type"){t.type;try{const c=await ee.post("/schema",JSON.stringify(t),{});if(c.error){const{message:i}=c.error;throw new Error(i)}r(t,(a=c==null?void 0:c.data)==null?void 0:a.ref_id),oe(te),close()}catch(c){let i=E;if(c.status===400){const d=await c.json();i=d.errorCode||(d==null?void 0:d.status)||E}else c instanceof Error&&(i=c.message);throw new Error(i)}}else{const c="node",i={};i.node_type=t.nodeType,i.name=t.name,t.nodeType==="Image"&&(i.node_data={source_link:t.sourceLink});let d="";await je(async()=>{const s=await be.enable();i.pubkey=s==null?void 0:s.pubkey,d=await we()});try{const s=await ee.post(`/${c}`,JSON.stringify(i),{Authorization:d});if(s.error){const{message:u}=s.error;throw new Error(u)}r(t,(l=s==null?void 0:s.data)==null?void 0:l.ref_id),oe(te),close()}catch(s){let u=E;if(s.status===400){const p=await s.json();u=p.errorCode||(p==null?void 0:p.status)||E}else s instanceof Error&&(u=s.message);throw new Error(u)}}},qt=()=>{const[t,o]=m.useState("sourceType"),{close:r,visible:a}=Ne("addItem"),[l]=ie(h=>[h.setBudget]),c=ze({mode:"onChange"}),{watch:i,setValue:d,reset:s}=c,[u,p]=m.useState(!1),[j,k]=m.useState(""),[L,O]=m.useState(""),[P,I]=Be(h=>[h.addNewNode,h.setSelectedNode]);m.useEffect(()=>()=>{o("sourceType"),s()},[a,s]);const S=i("nodeType"),N=i("name"),q=i("sourceLink"),A=i("type");i("title");const D=()=>{r()},b=h=>{o(h)},U=(h,C)=>{const f=C||`new-id-${Math.random()}`,v=h.nodeType.toLocaleLowerCase(),$={name:h.name,type:v,label:h.name,node_type:v,id:f,ref_id:f,x:Math.random(),y:Math.random(),z:Math.random(),date:parseInt((new Date().getTime()/1e3).toFixed(0),10),weight:4,...h.sourceLink?{source_link:h.sourceLink}:{}};P($),I($)},H=c.handleSubmit(async h=>{p(!0);try{await St(h,l,U),Pe("Item Added"),D()}catch(C){let f=E;if((C==null?void 0:C.status)===400){const v=await C.json();f=v.errorCode||(v==null?void 0:v.status)||E}else C instanceof Error&&(f=C.message);k(String(f))}finally{p(!1)}}),F=h=>d("nodeType",h),V=h=>{O(h),d("parent",h)},w={sourceType:e.jsx(Ct,{allowNextStep:!!S,onSelectType:F,selectedType:S,skipToStep:b}),source:e.jsx(bt,{name:N,skipToStep:b,sourceLink:q||"",type:S}),setBudget:e.jsx(ct,{loading:u,onClick:()=>null}),createType:e.jsx(xt,{onSelectType:F,skipToStep:b,type:A}),selectParent:e.jsx(mt,{onSelectType:V,skipToStep:b}),createNodeType:e.jsx(ft,{onSelectType:F,parent:L,skipToStep:b}),createConfirmation:e.jsx(ht,{onclose:D,type:A})},G=t==="createNodeType"?"regular":"small";return e.jsx(Ie,{id:"addItem",kind:G,onClose:r,preventOutsideClose:!0,children:e.jsx(Te,{...c,children:e.jsx("form",{id:"add-node-form",onSubmit:H,children:w[t]})})})};export{qt as AddItemModal};
