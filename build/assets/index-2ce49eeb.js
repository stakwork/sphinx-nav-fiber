import{o as v,q,T as F,F as n,r as x,j as e,aW as J,b8 as $,C as K,y as U,b9 as Q,O as D,aV as z,bk as X,bn as Z}from"./index-f50d1ab5.js";import{h as V,B as E,i as N,F as ee}from"./index-f857b04d.js";import{B as te}from"./index-cc30c812.js";import{T as re}from"./index-bd1e0bc6.js";import{p as W}from"./index-44e303ef.js";import{n as ne,A as G}from"./index-f812334e.js";import{C as Y}from"./ClipLoader-f52b169b.js";import{c as oe}from"./index-64f1c910.js";import"./index.esm-22240fd2.js";import"./InfoIcon-89f3f76d.js";import"./three.module-2ce81f73.js";import"./Stack-a4065033.js";import"./useSlotProps-f1483ce3.js";import"./Popover-a7534715.js";import"./createSvgIcon-c64a52be.js";import"./TextareaAutosize-04e2890c.js";const M=s=>s.charAt(0).toUpperCase()+s.slice(1).replace(/_/g," "),k=s=>s?[...s].sort((l,m)=>Number(m.required)-Number(l.required)):[],H=s=>s?s.filter(l=>l.key!=="node_key"):[],se=({handleSelectType:s,skipToStep:l,nodeType:m,selectedValues:r})=>{const[f,w]=x.useState(!1),[h,C]=x.useState(),{watch:j,formState:{isValid:t}}=V();x.useEffect(()=>{(async()=>{w(!0);const o=await $(m),T=W(o),A=H(T);C(A),w(!1)})()},[m,j]);const a=c=>c.charAt(0).toUpperCase()+c.slice(1).replace(/_/g," "),p=(h?[...h].sort((c,o)=>c.required&&!o.required?-1:!c.required&&o.required?1:0):[]).filter(c=>!!(c.required&&!Object.values(r).includes(c.key))),S=()=>{s(""),l("sourceType")},b=!t||f||p.some(c=>{var o;return c.required&&!((o=j(c.key))!=null&&o.trim())});return e.jsxs(n,{children:[e.jsx(n,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(n,{align:"center",direction:"row",children:e.jsx(ae,{children:"Required Properties"})})}),e.jsx(ie,{children:f?e.jsx(n,{style:{margin:"auto"},children:e.jsx(Y,{color:q.SECONDARY_BLUE})}):e.jsx(n,{className:"input__wrapper",children:p==null?void 0:p.map(({key:c,required:o})=>e.jsx(e.Fragment,{children:e.jsxs(ce,{children:[e.jsx(F,{children:a(c)}),e.jsx(re,{id:"item-name",maxLength:50,name:c,placeholder:o?"Required":"Optional",rules:{...o?{...J,pattern:{message:"No leading whitespace allowed",value:ne}}:{}}})]})}))})}),e.jsxs(n,{direction:"row",children:[e.jsx(n,{grow:1,children:e.jsx(E,{color:"secondary",onClick:S,size:"large",variant:"contained",children:"Prev"})}),e.jsx(n,{grow:1,ml:20,children:e.jsx(E,{color:"secondary",disabled:b,onClick:()=>l("createConfirmation"),size:"large",variant:"contained",children:"Next"})})]})]})},ae=v(F)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,ie=v(n)`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 10px;
  margin: 0 0 15px 0;

  .input__wrapper {
    display: flex;
    gap: 15px;
    max-height: 225px;
    overflow-y: auto;
    padding-right: 20px;
    width: calc(100% + 20px);
  }
`,ce=v(n)`
  display: flex;
  gap: 10px;

  #item-name {
    color: ${q.GRAY7};
    -webkit-text-fill-color: ${q.GRAY7};
  }
`,le=({nodeType:s,onclose:l,selectedNodeType:m})=>e.jsxs(n,{children:[e.jsx(n,{mb:20,children:e.jsx(R,{children:"Confirm Type Change"})}),e.jsx(n,{mb:25,children:e.jsxs(R,{children:["From: ",m]})}),e.jsx(n,{mb:25,children:e.jsxs(R,{children:["To: ",s]})}),e.jsxs(n,{direction:"row",children:[e.jsx(n,{grow:1,children:e.jsx(E,{color:"secondary",onClick:l,size:"large",variant:"contained",children:"Cancel"})}),e.jsx(n,{grow:1,ml:20,children:e.jsx(E,{color:"secondary",size:"large",type:"submit",variant:"contained",children:"Confirm"})})]})]}),R=v(F)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,pe=({handleSelectType:s,skipToStep:l,selectedNodeType:m,nodeType:r,selectedValues:f,setSelectedValues:w})=>{const[h,C]=x.useState(!1),[j,t]=x.useState(),[a,i]=x.useState(),{watch:p}=V();x.useEffect(()=>{const d=async(u,y)=>{C(!0);const g=await $(u),O=W(g),_=H(O);y(_),C(!1)};r&&d(r,t),m&&d(m,i)},[r,m,p]);const S=x.useMemo(()=>k(j),[j]),b=x.useMemo(()=>k(a),[a]),c=()=>{s(""),l("sourceType")};x.useEffect(()=>{if(j&&a){const d=a.reduce((u,y)=>{const g=j.find(O=>O.key===y.key);return u[y.key]=g?y.key:"none",u},{});w(d)}},[j,a,w]);const o=(d,u)=>{w(y=>({...y,[d]:u}))},T=()=>{const d=S.every(({key:u,required:y})=>!y||y&&f[u]&&f[u]!=="none");l(d?"createConfirmation":"requiredProperties")},A=x.useMemo(()=>b.map(({key:d})=>{const u=f[d]||"none",y=S.filter(g=>!Object.values(f).includes(g.key)||g.key===u).map(g=>({label:M(g.key),value:g.key}));return y.unshift({label:"None",value:"none"}),{key:d,autoCompleteOptions:y,selectedValue:u}}),[b,S,f]);return e.jsxs(n,{children:[e.jsx(n,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(n,{align:"center",direction:"row",children:e.jsx(de,{children:"Map Properties"})})}),e.jsx(ue,{children:h?e.jsx(n,{style:{margin:"auto"},children:e.jsx(Y,{color:q.lightGray})}):e.jsxs(me,{children:[e.jsxs(xe,{children:[e.jsx(I,{children:M(m)}),b.map(({key:d})=>e.jsx(fe,{children:e.jsx(F,{children:M(d)})},d))]}),e.jsxs(he,{children:[e.jsx(I,{children:M(r)}),A.map(({key:d,autoCompleteOptions:u,selectedValue:y})=>e.jsx(n,{children:e.jsx(G,{isLoading:h,onSelect:g=>o(d,g?g.value:"none"),options:u,selectedValue:u.find(g=>g.value===y)})},d))]})]})}),e.jsxs(n,{direction:"row",children:[e.jsx(n,{grow:1,children:e.jsx(E,{color:"secondary",onClick:c,size:"large",variant:"contained",children:"Prev"})}),e.jsx(n,{grow:1,ml:20,children:e.jsx(E,{color:"secondary",disabled:h,onClick:T,size:"large",variant:"contained",children:"Next"})})]})]})},de=v(F)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,ue=v(n)`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 10px;
  margin: 0 0 15px 0;

  .input__wrapper {
    display: flex;
    gap: 15px;
    max-height: 225px;
    overflow-y: auto;
    padding-right: 20px;
    width: calc(100% + 20px);
  }
`,me=v.div`
  display: flex;
  justify-content: space-between;
`,xe=v.div`
  flex: 1;
  margin-right: 16px;
`,fe=v.div`
  display: flex;
  gap: 16px;
  margin-top: 38px;
`,he=v.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
`,I=v.h3`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 8px;
  font-family: 'Barlow';
  color: white;
  margin-bottom: 15px;
`,ye={label:"Not Selected",value:"Not Selected"},ge=[{label:"Corporation",value:"Corporation"},{label:"Event",value:"Event"},{label:"Image",value:"Image"},{label:"Organization",value:"Organization"},{label:"Person",value:"Person"},{label:"Place",value:"Place"},{label:"Project",value:"Project"},{label:"Software",value:"Software"},{label:"Topic",value:"Topic"}],je=({skipToStep:s,allowNextStep:l,onSelectType:m,selectedType:r})=>{const[f]=K(i=>[i.customSchemaFeatureFlag]),[w,h]=x.useState(null),[C,j]=x.useState(!1),t=U();x.useEffect(()=>{(async()=>{var p;if(f){j(!0);try{const S=await Q(),b=["about","schema",(p=t==null?void 0:t.node_type)==null?void 0:p.toLowerCase()],c=S.schemas.filter(o=>o.ref_id&&!b.includes(o.type.toLowerCase())&&!o.is_deleted).map(o=>({label:oe(o.type),value:o.type,action:()=>s("mapProperties")}));h(c)}catch(S){console.warn(S)}finally{j(!1)}}else h([...ge,ye])})()},[t==null?void 0:t.node_type,r,f,s]);const a=i=>{m((i==null?void 0:i.label)||"")};return e.jsxs(n,{children:[e.jsx(n,{align:"center",direction:"row",justify:"space-between",mb:20,children:e.jsx(n,{align:"center",direction:"row",children:e.jsx(be,{children:"Select Type"})})}),e.jsx(n,{direction:"row",mb:20,children:e.jsx(G,{autoFocus:!0,isLoading:C,onSelect:a,options:w})}),e.jsx(n,{children:e.jsx(E,{color:"secondary",disabled:!l,onClick:()=>s("mapProperties"),size:"large",type:"button",variant:"contained",children:"Next"})})]})},be=v(F)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,we=async(s,l,m,r)=>{const f={},w=[];Object.entries(m).forEach(([t,a])=>{a!=="none"&&(f[a]=t),t!==a&&w.push(t)});const h={};Object.keys(r||{}).forEach(t=>{const a=r==null?void 0:r[t];Object.entries(f).forEach(([i,p])=>{p===t&&(h[f[i]]=a)})}),Object.keys(s).forEach(t=>{t!=="nodeType"&&(h[t]=s[t])});const C=r?r.node_type.charAt(0).toUpperCase()+r.node_type.slice(1):void 0,j={node_type:l,node_data:h,properties_to_be_deleted:w,type_to_be_deleted:C?[C]:[]};try{let t=r==null?void 0:r.ref_id;if((r==null?void 0:r.type)==="topic"){const{data:i}=await X({search:r==null?void 0:r.name}),p=i.find(S=>S.name===r.name);t=p==null?void 0:p.ref_id}const a=t||(r==null?void 0:r.ref_id);a&&await Z(a,j)}catch(t){console.error(t);let a=z;if(t.status===400)try{const i=await t.json();a=i.message||i.errorCode||(i==null?void 0:i.status)||z}catch{a=z}else t instanceof Error&&(a=t.message);throw new Error(a)}},Re=()=>{const[s,l]=x.useState("sourceType"),{close:m,visible:r}=D("changeNodeType"),{open:f}=D("editNodeName"),{open:w}=D("addType"),h=N({mode:"onChange"}),{watch:C,setValue:j,reset:t}=h,[a,i]=x.useState(""),[p,S]=x.useState({});x.useEffect(()=>()=>{l("sourceType"),t()},[r,t]);const b=U(),c=b!=null&&b.node_type?b.node_type.charAt(0).toUpperCase()+b.node_type.slice(1):"",o=C("nodeType");C("title");const T=()=>{m()},A=_=>{l(_)},d=h.handleSubmit(async _=>{try{await we(_,o,p,b),T()}catch(P){let L=z;if(T(),(P==null?void 0:P.status)===400){const B=await P.json();L=B.errorCode||(B==null?void 0:B.status)||z}else P instanceof Error&&(L=P.message);i(String(L))}}),u=_=>{_==="Create custom type"?w():j("nodeType",_)},y={sourceType:e.jsx(je,{allowNextStep:!!o,onSelectType:u,selectedType:o,skipToStep:A}),requiredProperties:e.jsx(se,{handleSelectType:u,nodeType:o,selectedValues:p,skipToStep:A}),createConfirmation:e.jsx(le,{nodeType:o,onclose:T,selectedNodeType:c}),mapProperties:e.jsx(pe,{handleSelectType:u,nodeType:o,selectedNodeType:c,selectedValues:p,setSelectedValues:S,skipToStep:A})},g=s==="mapProperties"?"regular":"small",O=()=>{m(),f()};return e.jsx(te,{id:"changeNodeType",kind:g,onClose:O,preventOutsideClose:!0,children:e.jsx(ee,{...h,children:e.jsx("form",{id:"add-node-form",onSubmit:d,children:y[s]})})})};export{Re as ChangeNodeTypeModal};
