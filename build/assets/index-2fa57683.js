import{Q as v,S as q,a5 as F,U as r,r as h,j as e,ar as K,bH as U,a4 as J,a1 as $,bI as Q,ad as D,bF as O,am as X,bK as Z}from"./index-a00bc156.js";import{aj as V,an as G,aP as N,aT as ee,B as E,aU as H,ak as te,aL as ne,al as re}from"./index-1819f1e5.js";import{p as W}from"./index-44e303ef.js";import{c as ae}from"./index-64f1c910.js";import"./three.module-2ce81f73.js";const B=o=>o.charAt(0).toUpperCase()+o.slice(1).replace(/_/g," "),k=o=>o?[...o].sort((l,x)=>Number(x.required)-Number(l.required)):[],Y=o=>o?o.filter(l=>l.key!=="node_key"):[],oe=({handleSelectType:o,skipToStep:l,nodeType:x,selectedValues:n})=>{const[f,w]=h.useState(!1),[m,C]=h.useState(),{watch:j,formState:{isValid:t}}=V();h.useEffect(()=>{(async()=>{w(!0);const a=await U(x),T=W(a),P=Y(T);C(P),w(!1)})()},[x,j]);const s=c=>c.charAt(0).toUpperCase()+c.slice(1).replace(/_/g," "),d=(m?[...m].sort((c,a)=>c.required&&!a.required?-1:!c.required&&a.required?1:0):[]).filter(c=>!!(c.required&&!Object.values(n).includes(c.key))),S=()=>{o(""),l("sourceType")},b=!t||f||d.some(c=>{var a;return c.required&&!((a=j(c.key))!=null&&a.trim())});return e.jsxs(r,{children:[e.jsx(r,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(r,{align:"center",direction:"row",children:e.jsx(se,{children:"Required Properties"})})}),e.jsx(ie,{children:f?e.jsx(r,{style:{margin:"auto"},children:e.jsx(G,{color:q.SECONDARY_BLUE})}):e.jsx(r,{className:"input__wrapper",children:d==null?void 0:d.map(({key:c,required:a})=>e.jsx(e.Fragment,{children:e.jsxs(ce,{children:[e.jsx(F,{children:s(c)}),e.jsx(N,{id:"item-name",maxLength:50,name:c,placeholder:a?"Required":"Optional",rules:{...a?{...K,pattern:{message:"No leading whitespace allowed",value:ee}}:{}}})]})}))})}),e.jsxs(r,{direction:"row",children:[e.jsx(r,{grow:1,children:e.jsx(E,{color:"secondary",onClick:S,size:"large",variant:"contained",children:"Prev"})}),e.jsx(r,{grow:1,ml:20,children:e.jsx(E,{color:"secondary",disabled:b,onClick:()=>l("createConfirmation"),size:"large",variant:"contained",children:"Next"})})]})]})},se=v(F)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,ie=v(r)`
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
`,ce=v(r)`
  display: flex;
  gap: 10px;

  #item-name {
    color: ${q.GRAY7};
    -webkit-text-fill-color: ${q.GRAY7};
  }
`,le=({nodeType:o,onclose:l,selectedNodeType:x})=>e.jsxs(r,{children:[e.jsx(r,{mb:20,children:e.jsx(R,{children:"Confirm Type Change"})}),e.jsx(r,{mb:25,children:e.jsxs(R,{children:["From: ",x]})}),e.jsx(r,{mb:25,children:e.jsxs(R,{children:["To: ",o]})}),e.jsxs(r,{direction:"row",children:[e.jsx(r,{grow:1,children:e.jsx(E,{color:"secondary",onClick:l,size:"large",variant:"contained",children:"Cancel"})}),e.jsx(r,{grow:1,ml:20,children:e.jsx(E,{color:"secondary",size:"large",type:"submit",variant:"contained",children:"Confirm"})})]})]}),R=v(F)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,de=({handleSelectType:o,skipToStep:l,selectedNodeType:x,nodeType:n,selectedValues:f,setSelectedValues:w})=>{const[m,C]=h.useState(!1),[j,t]=h.useState(),[s,i]=h.useState(),{watch:d}=V();h.useEffect(()=>{const p=async(u,y)=>{C(!0);const g=await U(u),z=W(g),_=Y(z);y(_),C(!1)};n&&p(n,t),x&&p(x,i)},[n,x,d]);const S=h.useMemo(()=>k(j),[j]),b=h.useMemo(()=>k(s),[s]),c=()=>{o(""),l("sourceType")};h.useEffect(()=>{if(j&&s){const p=s.reduce((u,y)=>{const g=j.find(z=>z.key===y.key);return u[y.key]=g?y.key:"none",u},{});w(p)}},[j,s,w]);const a=(p,u)=>{w(y=>({...y,[p]:u}))},T=()=>{const p=S.every(({key:u,required:y})=>!y||y&&f[u]&&f[u]!=="none");l(p?"createConfirmation":"requiredProperties")},P=h.useMemo(()=>b.map(({key:p})=>{const u=f[p]||"none",y=S.filter(g=>!Object.values(f).includes(g.key)||g.key===u).map(g=>({label:B(g.key),value:g.key}));return y.unshift({label:"None",value:"none"}),{key:p,autoCompleteOptions:y,selectedValue:u}}),[b,S,f]);return e.jsxs(r,{children:[e.jsx(r,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(r,{align:"center",direction:"row",children:e.jsx(pe,{children:"Map Properties"})})}),e.jsx(ue,{children:m?e.jsx(r,{style:{margin:"auto"},children:e.jsx(G,{color:q.lightGray})}):e.jsxs(xe,{children:[e.jsxs(he,{children:[e.jsx(I,{children:B(x)}),b.map(({key:p})=>e.jsx(fe,{children:e.jsx(F,{children:B(p)})},p))]}),e.jsxs(me,{children:[e.jsx(I,{children:B(n)}),P.map(({key:p,autoCompleteOptions:u,selectedValue:y})=>e.jsx(r,{children:e.jsx(H,{isLoading:m,onSelect:g=>a(p,g?g.value:"none"),options:u,selectedValue:u.find(g=>g.value===y)})},p))]})]})}),e.jsxs(r,{direction:"row",children:[e.jsx(r,{grow:1,children:e.jsx(E,{color:"secondary",onClick:c,size:"large",variant:"contained",children:"Prev"})}),e.jsx(r,{grow:1,ml:20,children:e.jsx(E,{color:"secondary",disabled:m,onClick:T,size:"large",variant:"contained",children:"Next"})})]})]})},pe=v(F)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,ue=v(r)`
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
`,he=v.div`
  flex: 1;
  margin-right: 16px;
`,fe=v.div`
  display: flex;
  gap: 16px;
  margin-top: 38px;
`,me=v.div`
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
`,ye={label:"Not Selected",value:"Not Selected"},ge=[{label:"Corporation",value:"Corporation"},{label:"Event",value:"Event"},{label:"Image",value:"Image"},{label:"Organization",value:"Organization"},{label:"Person",value:"Person"},{label:"Place",value:"Place"},{label:"Project",value:"Project"},{label:"Software",value:"Software"},{label:"Topic",value:"Topic"}],je=({skipToStep:o,allowNextStep:l,onSelectType:x,selectedType:n})=>{const[f]=J(i=>[i.customSchemaFeatureFlag]),[w,m]=h.useState(null),[C,j]=h.useState(!1),t=$();h.useEffect(()=>{(async()=>{var d;if(f){j(!0);try{const S=await Q(),b=["about","schema",(d=t==null?void 0:t.node_type)==null?void 0:d.toLowerCase()],c=S.schemas.filter(a=>a.ref_id&&!b.includes(a.type.toLowerCase())&&!a.is_deleted).map(a=>({label:ae(a.type),value:a.type,action:()=>o("mapProperties")}));m(c)}catch(S){console.warn(S)}finally{j(!1)}}else m([...ge,ye])})()},[t==null?void 0:t.node_type,n,f,o]);const s=i=>{x((i==null?void 0:i.label)||"")};return e.jsxs(r,{children:[e.jsx(r,{align:"center",direction:"row",justify:"space-between",mb:20,children:e.jsx(r,{align:"center",direction:"row",children:e.jsx(be,{children:"Select Type"})})}),e.jsx(r,{direction:"row",mb:20,children:e.jsx(H,{autoFocus:!0,isLoading:C,onSelect:s,options:w})}),e.jsx(r,{children:e.jsx(E,{color:"secondary",disabled:!l,onClick:()=>o("mapProperties"),size:"large",type:"button",variant:"contained",children:"Next"})})]})},be=v(F)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,we=async(o,l,x,n)=>{const f={},w=[];Object.entries(x).forEach(([t,s])=>{s!=="none"&&(f[s]=t),t!==s&&w.push(t)});const m={};Object.keys(n||{}).forEach(t=>{const s=n==null?void 0:n[t];Object.entries(f).forEach(([i,d])=>{d===t&&(m[f[i]]=s)})}),Object.keys(o).forEach(t=>{t!=="nodeType"&&(m[t]=o[t])});const C=n?n.node_type.charAt(0).toUpperCase()+n.node_type.slice(1):void 0,j={node_type:l,node_data:m,properties_to_be_deleted:w,type_to_be_deleted:C?[C]:[]};try{let t=n==null?void 0:n.ref_id;if((n==null?void 0:n.type)==="topic"){const{data:i}=await X({search:n==null?void 0:n.name}),d=i.find(S=>S.name===n.name);t=d==null?void 0:d.ref_id}const s=t||(n==null?void 0:n.ref_id);s&&await Z(s,j)}catch(t){console.error(t);let s=O;if(t.status===400)try{const i=await t.json();s=i.message||i.errorCode||(i==null?void 0:i.status)||O}catch{s=O}else t instanceof Error&&(s=t.message);throw new Error(s)}},Pe=()=>{const[o,l]=h.useState("sourceType"),{close:x,visible:n}=D("changeNodeType"),{open:f}=D("editNodeName"),{open:w}=D("addType"),m=te({mode:"onChange"}),{watch:C,setValue:j,reset:t}=m,[s,i]=h.useState(""),[d,S]=h.useState({});h.useEffect(()=>()=>{l("sourceType"),t()},[n,t]);const b=$(),c=b!=null&&b.node_type?b.node_type.charAt(0).toUpperCase()+b.node_type.slice(1):"",a=C("nodeType");C("title");const T=()=>{x()},P=_=>{l(_)},p=m.handleSubmit(async _=>{try{await we(_,a,d,b),T()}catch(A){let L=O;if(T(),(A==null?void 0:A.status)===400){const M=await A.json();L=M.errorCode||(M==null?void 0:M.status)||O}else A instanceof Error&&(L=A.message);i(String(L))}}),u=_=>{_==="Create custom type"?w():j("nodeType",_)},y={sourceType:e.jsx(je,{allowNextStep:!!a,onSelectType:u,selectedType:a,skipToStep:P}),requiredProperties:e.jsx(oe,{handleSelectType:u,nodeType:a,selectedValues:d,skipToStep:P}),createConfirmation:e.jsx(le,{nodeType:a,onclose:T,selectedNodeType:c}),mapProperties:e.jsx(de,{handleSelectType:u,nodeType:a,selectedNodeType:c,selectedValues:d,setSelectedValues:S,skipToStep:P})},g=o==="mapProperties"?"regular":"small",z=()=>{x(),f()};return e.jsx(ne,{id:"changeNodeType",kind:g,onClose:z,preventOutsideClose:!0,children:e.jsx(re,{...m,children:e.jsx("form",{id:"add-node-form",onSubmit:p,children:y[o]})})})};export{Pe as ChangeNodeTypeModal};
