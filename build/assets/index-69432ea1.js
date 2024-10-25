import{t as v,v as q,T as z,F as n,r as m,j as e,aA as J,aO as $,N as K,aP as Q,az as O,a_ as X,b1 as Z}from"./index-dee5df82.js";import{$ as U,B as P,e as V,u as D,a0 as N,a1 as ee}from"./index-0ce865f0.js";import{B as te}from"./index-6b91601f.js";import{T as re}from"./index-027b629e.js";import{p as G}from"./index-28e22657.js";import{n as ne}from"./constants-b2a2fa82.js";import{C as W}from"./ClipLoader-0ad4f2c2.js";import{A as Y}from"./index-18c7b049.js";import{c as oe}from"./index-64f1c910.js";import"./index.esm-b9a1a1d1.js";import"./three.module-52004ab8.js";import"./Stack-08111dc8.js";import"./createSvgIcon-df8cce46.js";import"./TextareaAutosize-3606380e.js";const M=a=>a.charAt(0).toUpperCase()+a.slice(1).replace(/_/g," "),k=a=>a?[...a].sort((l,x)=>Number(x.required)-Number(l.required)):[],H=a=>a?a.filter(l=>l.key!=="node_key"):[],ae=({handleSelectType:a,skipToStep:l,nodeType:x,selectedValues:r})=>{const[f,b]=m.useState(!1),[h,C]=m.useState(),{watch:j,formState:{isValid:t}}=U();m.useEffect(()=>{(async()=>{b(!0);const o=await $(x),T=G(o),A=H(T);C(A),b(!1)})()},[x,j]);const s=c=>c.charAt(0).toUpperCase()+c.slice(1).replace(/_/g," "),p=(h?[...h].sort((c,o)=>c.required&&!o.required?-1:!c.required&&o.required?1:0):[]).filter(c=>!!(c.required&&!Object.values(r).includes(c.key))),S=()=>{a(""),l("sourceType")},w=!t||f||p.some(c=>{var o;return c.required&&!((o=j(c.key))!=null&&o.trim())});return e.jsxs(n,{children:[e.jsx(n,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(n,{align:"center",direction:"row",children:e.jsx(se,{children:"Required Properties"})})}),e.jsx(ie,{children:f?e.jsx(n,{style:{margin:"auto"},children:e.jsx(W,{color:q.SECONDARY_BLUE})}):e.jsx(n,{className:"input__wrapper",children:p==null?void 0:p.map(({key:c,required:o})=>e.jsx(e.Fragment,{children:e.jsxs(ce,{children:[e.jsx(z,{children:s(c)}),e.jsx(re,{id:"item-name",maxLength:50,name:c,placeholder:o?"Required":"Optional",rules:{...o?{...J,pattern:{message:"No leading whitespace allowed",value:ne}}:{}}})]})}))})}),e.jsxs(n,{direction:"row",children:[e.jsx(n,{grow:1,children:e.jsx(P,{color:"secondary",onClick:S,size:"large",variant:"contained",children:"Prev"})}),e.jsx(n,{grow:1,ml:20,children:e.jsx(P,{color:"secondary",disabled:w,onClick:()=>l("createConfirmation"),size:"large",variant:"contained",children:"Next"})})]})]})},se=v(z)`
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
`,le=({nodeType:a,onclose:l,selectedNodeType:x})=>e.jsxs(n,{children:[e.jsx(n,{mb:20,children:e.jsx(R,{children:"Confirm Type Change"})}),e.jsx(n,{mb:25,children:e.jsxs(R,{children:["From: ",x]})}),e.jsx(n,{mb:25,children:e.jsxs(R,{children:["To: ",a]})}),e.jsxs(n,{direction:"row",children:[e.jsx(n,{grow:1,children:e.jsx(P,{color:"secondary",onClick:l,size:"large",variant:"contained",children:"Cancel"})}),e.jsx(n,{grow:1,ml:20,children:e.jsx(P,{color:"secondary",size:"large",type:"submit",variant:"contained",children:"Confirm"})})]})]}),R=v(z)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,pe=({handleSelectType:a,skipToStep:l,selectedNodeType:x,nodeType:r,selectedValues:f,setSelectedValues:b})=>{const[h,C]=m.useState(!1),[j,t]=m.useState(),[s,i]=m.useState(),{watch:p}=U();m.useEffect(()=>{const d=async(u,y)=>{C(!0);const g=await $(u),F=G(g),_=H(F);y(_),C(!1)};r&&d(r,t),x&&d(x,i)},[r,x,p]);const S=m.useMemo(()=>k(j),[j]),w=m.useMemo(()=>k(s),[s]),c=()=>{a(""),l("sourceType")};m.useEffect(()=>{if(j&&s){const d=s.reduce((u,y)=>{const g=j.find(F=>F.key===y.key);return u[y.key]=g?y.key:"none",u},{});b(d)}},[j,s,b]);const o=(d,u)=>{b(y=>({...y,[d]:u}))},T=()=>{const d=S.every(({key:u,required:y})=>!y||y&&f[u]&&f[u]!=="none");l(d?"createConfirmation":"requiredProperties")},A=m.useMemo(()=>w.map(({key:d})=>{const u=f[d]||"none",y=S.filter(g=>!Object.values(f).includes(g.key)||g.key===u).map(g=>({label:M(g.key),value:g.key}));return y.unshift({label:"None",value:"none"}),{key:d,autoCompleteOptions:y,selectedValue:u}}),[w,S,f]);return e.jsxs(n,{children:[e.jsx(n,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(n,{align:"center",direction:"row",children:e.jsx(de,{children:"Map Properties"})})}),e.jsx(ue,{children:h?e.jsx(n,{style:{margin:"auto"},children:e.jsx(W,{color:q.lightGray})}):e.jsxs(xe,{children:[e.jsxs(me,{children:[e.jsx(I,{children:M(x)}),w.map(({key:d})=>e.jsx(fe,{children:e.jsx(z,{children:M(d)})},d))]}),e.jsxs(he,{children:[e.jsx(I,{children:M(r)}),A.map(({key:d,autoCompleteOptions:u,selectedValue:y})=>e.jsx(n,{children:e.jsx(Y,{isLoading:h,onSelect:g=>o(d,g?g.value:"none"),options:u,selectedValue:u.find(g=>g.value===y)})},d))]})]})}),e.jsxs(n,{direction:"row",children:[e.jsx(n,{grow:1,children:e.jsx(P,{color:"secondary",onClick:c,size:"large",variant:"contained",children:"Prev"})}),e.jsx(n,{grow:1,ml:20,children:e.jsx(P,{color:"secondary",disabled:h,onClick:T,size:"large",variant:"contained",children:"Next"})})]})]})},de=v(z)`
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
`,xe=v.div`
  display: flex;
  justify-content: space-between;
`,me=v.div`
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
`,ye={label:"Not Selected",value:"Not Selected"},ge=[{label:"Corporation",value:"Corporation"},{label:"Event",value:"Event"},{label:"Image",value:"Image"},{label:"Organization",value:"Organization"},{label:"Person",value:"Person"},{label:"Place",value:"Place"},{label:"Project",value:"Project"},{label:"Software",value:"Software"},{label:"Topic",value:"Topic"}],je=({skipToStep:a,allowNextStep:l,onSelectType:x,selectedType:r})=>{const[f]=K(i=>[i.customSchemaFeatureFlag]),[b,h]=m.useState(null),[C,j]=m.useState(!1),t=V();m.useEffect(()=>{(async()=>{var p;if(f){j(!0);try{const S=await Q(),w=["about","schema",(p=t==null?void 0:t.node_type)==null?void 0:p.toLowerCase()],c=S.schemas.filter(o=>o.ref_id&&!w.includes(o.type.toLowerCase())&&!o.is_deleted).map(o=>({label:oe(o.type),value:o.type,action:()=>a("mapProperties")}));h(c)}catch(S){console.warn(S)}finally{j(!1)}}else h([...ge,ye])})()},[t==null?void 0:t.node_type,r,f,a]);const s=i=>{x((i==null?void 0:i.label)||"")};return e.jsxs(n,{children:[e.jsx(n,{align:"center",direction:"row",justify:"space-between",mb:20,children:e.jsx(n,{align:"center",direction:"row",children:e.jsx(we,{children:"Select Type"})})}),e.jsx(n,{direction:"row",mb:20,children:e.jsx(Y,{autoFocus:!0,isLoading:C,onSelect:s,options:b})}),e.jsx(n,{children:e.jsx(P,{color:"secondary",disabled:!l,onClick:()=>a("mapProperties"),size:"large",type:"button",variant:"contained",children:"Next"})})]})},we=v(z)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,be=async(a,l,x,r)=>{const f={},b=[];Object.entries(x).forEach(([t,s])=>{s!=="none"&&(f[s]=t),t!==s&&b.push(t)});const h={};Object.keys(r||{}).forEach(t=>{const s=r==null?void 0:r[t];Object.entries(f).forEach(([i,p])=>{p===t&&(h[f[i]]=s)})}),Object.keys(a).forEach(t=>{t!=="nodeType"&&(h[t]=a[t])});const C=r?r.node_type.charAt(0).toUpperCase()+r.node_type.slice(1):void 0,j={node_type:l,node_data:h,properties_to_be_deleted:b,type_to_be_deleted:C?[C]:[]};try{let t=r==null?void 0:r.ref_id;if((r==null?void 0:r.type)==="topic"){const{data:i}=await X({search:r==null?void 0:r.name}),p=i.find(S=>S.name===r.name);t=p==null?void 0:p.ref_id}const s=t||(r==null?void 0:r.ref_id);s&&await Z(s,j)}catch(t){console.error(t);let s=O;if(t.status===400)try{const i=await t.json();s=i.message||i.errorCode||(i==null?void 0:i.status)||O}catch{s=O}else t instanceof Error&&(s=t.message);throw new Error(s)}},Le=()=>{const[a,l]=m.useState("sourceType"),{close:x,visible:r}=D("changeNodeType"),{open:f}=D("editNodeName"),{open:b}=D("addType"),h=N({mode:"onChange"}),{watch:C,setValue:j,reset:t}=h,[s,i]=m.useState(""),[p,S]=m.useState({});m.useEffect(()=>()=>{l("sourceType"),t()},[r,t]);const w=V(),c=w!=null&&w.node_type?w.node_type.charAt(0).toUpperCase()+w.node_type.slice(1):"",o=C("nodeType");C("title");const T=()=>{x()},A=_=>{l(_)},d=h.handleSubmit(async _=>{try{await be(_,o,p,w),T()}catch(E){let L=O;if(T(),(E==null?void 0:E.status)===400){const B=await E.json();L=B.errorCode||(B==null?void 0:B.status)||O}else E instanceof Error&&(L=E.message);i(String(L))}}),u=_=>{_==="Create custom type"?b():j("nodeType",_)},y={sourceType:e.jsx(je,{allowNextStep:!!o,onSelectType:u,selectedType:o,skipToStep:A}),requiredProperties:e.jsx(ae,{handleSelectType:u,nodeType:o,selectedValues:p,skipToStep:A}),createConfirmation:e.jsx(le,{nodeType:o,onclose:T,selectedNodeType:c}),mapProperties:e.jsx(pe,{handleSelectType:u,nodeType:o,selectedNodeType:c,selectedValues:p,setSelectedValues:S,skipToStep:A})},g=a==="mapProperties"?"regular":"small",F=()=>{x(),f()};return e.jsx(te,{id:"changeNodeType",kind:g,onClose:F,preventOutsideClose:!0,children:e.jsx(ee,{...h,children:e.jsx("form",{id:"add-node-form",onSubmit:d,children:y[a]})})})};export{Le as ChangeNodeTypeModal};
