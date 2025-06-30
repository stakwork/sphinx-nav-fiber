import{s as v,g as q,T as F,F as n,r as x,ay as $,j as e,b3 as J,b4 as K,bk as Q,B as E,bl as U,k as X,bm as Z,D as L,l as N,b2 as O,b6 as ee,n as te,bD as re,bI as ne}from"./index-0e71550c.js";import{p as V}from"./index-d4c6f972.js";import{C as G}from"./ClipLoader-39b0e414.js";import{e as W}from"./index-cc42c491.js";import{A as Y}from"./index-a9c352d4.js";import{c as oe}from"./index-64f1c910.js";import"./three.module-a9c166f5.js";import"./index-c6eb4ffc.js";import"./SourcesTableIcon-733f4b62.js";import"./CheckIcon-22fc4102.js";import"./DeleteNodeIcon-c15a0339.js";import"./SoundIcon-348b8e0c.js";import"./SucessFeedBackIcon-3537b830.js";import"./Stack-b78ed822.js";import"./clsx-45ad0b2f.js";import"./createSvgIcon-8cb8232a.js";import"./TextareaAutosize-982d3f42.js";const B=s=>s.charAt(0).toUpperCase()+s.slice(1).replace(/_/g," "),R=s=>s?[...s].sort((l,m)=>Number(m.required)-Number(l.required)):[],H=s=>s?s.filter(l=>l.key!=="node_key"):[],se=({handleSelectType:s,skipToStep:l,nodeType:m,selectedValues:r})=>{const[f,w]=x.useState(!1),[h,C]=x.useState(),{watch:j,formState:{isValid:t}}=$();x.useEffect(()=>{(async()=>{w(!0);const o=await U(m),T=V(o),A=H(T);C(A),w(!1)})()},[m,j]);const a=c=>c.charAt(0).toUpperCase()+c.slice(1).replace(/_/g," "),p=(h?[...h].sort((c,o)=>c.required&&!o.required?-1:!c.required&&o.required?1:0):[]).filter(c=>!!(c.required&&!Object.values(r).includes(c.key))),S=()=>{s(""),l("sourceType")},b=!t||f||p.some(c=>{var o;return c.required&&!((o=j(c.key))!=null&&o.trim())});return e.jsxs(n,{children:[e.jsx(n,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(n,{align:"center",direction:"row",children:e.jsx(ae,{children:"Required Properties"})})}),e.jsx(ie,{children:f?e.jsx(n,{style:{margin:"auto"},children:e.jsx(G,{color:q.SECONDARY_BLUE})}):e.jsx(n,{className:"input__wrapper",children:p==null?void 0:p.map(({key:c,required:o})=>e.jsx(e.Fragment,{children:e.jsxs(ce,{children:[e.jsx(F,{children:a(c)}),e.jsx(J,{id:"item-name",maxLength:50,name:c,placeholder:o?"Required":"Optional",rules:{...o?{...K,pattern:{message:"No leading whitespace allowed",value:Q}}:{}}})]})}))})}),e.jsxs(n,{direction:"row",children:[e.jsx(n,{grow:1,children:e.jsx(E,{color:"secondary",onClick:S,size:"large",variant:"contained",children:"Prev"})}),e.jsx(n,{grow:1,ml:20,children:e.jsx(E,{color:"secondary",disabled:b,onClick:()=>l("createConfirmation"),size:"large",variant:"contained",children:"Next"})})]})]})},ae=v(F)`
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
`,le=({nodeType:s,onclose:l,selectedNodeType:m})=>e.jsxs(n,{children:[e.jsx(n,{mb:20,children:e.jsx(k,{children:"Confirm Type Change"})}),e.jsx(n,{mb:25,children:e.jsxs(k,{children:["From: ",m]})}),e.jsx(n,{mb:25,children:e.jsxs(k,{children:["To: ",s]})}),e.jsxs(n,{direction:"row",children:[e.jsx(n,{grow:1,children:e.jsx(E,{color:"secondary",onClick:l,size:"large",variant:"contained",children:"Cancel"})}),e.jsx(n,{grow:1,ml:20,children:e.jsx(E,{color:"secondary",size:"large",type:"submit",variant:"contained",children:"Confirm"})})]})]}),k=v(F)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,pe=({handleSelectType:s,skipToStep:l,selectedNodeType:m,nodeType:r,selectedValues:f,setSelectedValues:w})=>{const[h,C]=x.useState(!1),[j,t]=x.useState(),[a,i]=x.useState(),{watch:p}=$();x.useEffect(()=>{const d=async(u,y)=>{C(!0);const g=await U(u),z=V(g),_=H(z);y(_),C(!1)};r&&d(r,t),m&&d(m,i)},[r,m,p]);const S=x.useMemo(()=>R(j),[j]),b=x.useMemo(()=>R(a),[a]),c=()=>{s(""),l("sourceType")};x.useEffect(()=>{if(j&&a){const d=a.reduce((u,y)=>{const g=j.find(z=>z.key===y.key);return u[y.key]=g?y.key:"none",u},{});w(d)}},[j,a,w]);const o=(d,u)=>{w(y=>({...y,[d]:u}))},T=()=>{const d=S.every(({key:u,required:y})=>!y||y&&f[u]&&f[u]!=="none");l(d?"createConfirmation":"requiredProperties")},A=x.useMemo(()=>b.map(({key:d})=>{const u=f[d]||"none",y=S.filter(g=>!Object.values(f).includes(g.key)||g.key===u).map(g=>({label:B(g.key),value:g.key}));return y.unshift({label:"None",value:"none"}),{key:d,autoCompleteOptions:y,selectedValue:u}}),[b,S,f]);return e.jsxs(n,{children:[e.jsx(n,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(n,{align:"center",direction:"row",children:e.jsx(de,{children:"Map Properties"})})}),e.jsx(ue,{children:h?e.jsx(n,{style:{margin:"auto"},children:e.jsx(G,{color:q.lightGray})}):e.jsxs(me,{children:[e.jsxs(xe,{children:[e.jsx(I,{children:B(m)}),b.map(({key:d})=>e.jsx(fe,{children:e.jsx(F,{children:B(d)})},d))]}),e.jsxs(he,{children:[e.jsx(I,{children:B(r)}),A.map(({key:d,autoCompleteOptions:u,selectedValue:y})=>e.jsx(n,{children:e.jsx(Y,{isLoading:h,onSelect:g=>o(d,g?g.value:"none"),options:u,selectedValue:u.find(g=>g.value===y)})},d))]})]})}),e.jsxs(n,{direction:"row",children:[e.jsx(n,{grow:1,children:e.jsx(E,{color:"secondary",onClick:c,size:"large",variant:"contained",children:"Prev"})}),e.jsx(n,{grow:1,ml:20,children:e.jsx(E,{color:"secondary",disabled:h,onClick:T,size:"large",variant:"contained",children:"Next"})})]})]})},de=v(F)`
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
`,ye={label:"Not Selected",value:"Not Selected"},ge=[{label:"Corporation",value:"Corporation"},{label:"Event",value:"Event"},{label:"Image",value:"Image"},{label:"Organization",value:"Organization"},{label:"Person",value:"Person"},{label:"Place",value:"Place"},{label:"Project",value:"Project"},{label:"Software",value:"Software"},{label:"Topic",value:"Topic"}],je=({skipToStep:s,allowNextStep:l,onSelectType:m,selectedType:r})=>{const[f]=X(i=>[i.customSchemaFeatureFlag]),[w,h]=x.useState(null),[C,j]=x.useState(!1),t=W();x.useEffect(()=>{(async()=>{var p;if(f){j(!0);try{const S=await Z(),b=["about","schema",(p=t==null?void 0:t.node_type)==null?void 0:p.toLowerCase()],c=S.schemas.filter(o=>o.ref_id&&!b.includes(o.type.toLowerCase())&&!o.is_deleted).map(o=>({label:oe(o.type),value:o.type,action:()=>s("mapProperties")}));h(c)}catch(S){console.warn(S)}finally{j(!1)}}else h([...ge,ye])})()},[t==null?void 0:t.node_type,r,f,s]);const a=i=>{m((i==null?void 0:i.label)||"")};return e.jsxs(n,{children:[e.jsx(n,{align:"center",direction:"row",justify:"space-between",mb:20,children:e.jsx(n,{align:"center",direction:"row",children:e.jsx(be,{children:"Select Type"})})}),e.jsx(n,{direction:"row",mb:20,children:e.jsx(Y,{autoFocus:!0,isLoading:C,onSelect:a,options:w})}),e.jsx(n,{children:e.jsx(E,{color:"secondary",disabled:!l,onClick:()=>s("mapProperties"),size:"large",type:"button",variant:"contained",children:"Next"})})]})},be=v(F)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,we=async(s,l,m,r)=>{const f={},w=[];Object.entries(m).forEach(([t,a])=>{a!=="none"&&(f[a]=t),t!==a&&w.push(t)});const h={};Object.keys(r||{}).forEach(t=>{const a=r==null?void 0:r[t];Object.entries(f).forEach(([i,p])=>{p===t&&(h[f[i]]=a)})}),Object.keys(s).forEach(t=>{t!=="nodeType"&&(h[t]=s[t])});const C=r?r.node_type.charAt(0).toUpperCase()+r.node_type.slice(1):void 0,j={node_type:l,node_data:h,properties_to_be_deleted:w,type_to_be_deleted:C?[C]:[]};try{let t=r==null?void 0:r.ref_id;if((r==null?void 0:r.type)==="topic"){const{data:i}=await re({search:r==null?void 0:r.name}),p=i.find(S=>S.name===r.name);t=p==null?void 0:p.ref_id}const a=t||(r==null?void 0:r.ref_id);a&&await ne(a,j)}catch(t){console.error(t);let a=O;if(t.status===400)try{const i=await t.json();a=i.message||i.errorCode||(i==null?void 0:i.status)||O}catch{a=O}else t instanceof Error&&(a=t.message);throw new Error(a)}},Re=()=>{const[s,l]=x.useState("sourceType"),{close:m,visible:r}=L("changeNodeType"),{open:f}=L("editNodeName"),{open:w}=L("addType"),h=N({mode:"onChange"}),{watch:C,setValue:j,reset:t}=h,[a,i]=x.useState(""),[p,S]=x.useState({});x.useEffect(()=>()=>{l("sourceType"),t()},[r,t]);const b=W(),c=b!=null&&b.node_type?b.node_type.charAt(0).toUpperCase()+b.node_type.slice(1):"",o=C("nodeType");C("title");const T=()=>{m()},A=_=>{l(_)},d=h.handleSubmit(async _=>{try{await we(_,o,p,b),T()}catch(P){let D=O;if(T(),(P==null?void 0:P.status)===400){const M=await P.json();D=M.errorCode||(M==null?void 0:M.status)||O}else P instanceof Error&&(D=P.message);i(String(D))}}),u=_=>{_==="Create custom type"?w():j("nodeType",_)},y={sourceType:e.jsx(je,{allowNextStep:!!o,onSelectType:u,selectedType:o,skipToStep:A}),requiredProperties:e.jsx(se,{handleSelectType:u,nodeType:o,selectedValues:p,skipToStep:A}),createConfirmation:e.jsx(le,{nodeType:o,onclose:T,selectedNodeType:c}),mapProperties:e.jsx(pe,{handleSelectType:u,nodeType:o,selectedNodeType:c,selectedValues:p,setSelectedValues:S,skipToStep:A})},g=s==="mapProperties"?"regular":"small",z=()=>{m(),f()};return e.jsx(ee,{id:"changeNodeType",kind:g,onClose:z,preventOutsideClose:!0,children:e.jsx(te,{...h,children:e.jsx("form",{id:"add-node-form",onSubmit:d,children:y[s]})})})};export{Re as ChangeNodeTypeModal};
