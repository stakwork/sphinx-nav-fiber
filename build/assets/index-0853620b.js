import{s as v,a as B,T as F,F as r,r as f,an as U,j as e,aU as J,aV as K,b9 as X,B as E,ba as $,q as Q,bb as Z,e as D,t as N,N as O,aX as ee,v as te,bs as ne,bw as re}from"./index-78499b97.js";import{p as V}from"./index-efc984a3.js";import{C as G}from"./ClipLoader-7e46ac21.js";import{n as W}from"./index-01fe5e19.js";import{A as Y}from"./index-927872db.js";import{c as oe}from"./index-64f1c910.js";import"./three.module-ba6167ce.js";import"./index-f568a770.js";import"./Stack-7f564c44.js";import"./createSvgIcon-94270466.js";import"./TextareaAutosize-f7ec1e6b.js";const q=s=>s.charAt(0).toUpperCase()+s.slice(1).replace(/_/g," "),k=s=>s?[...s].sort((l,x)=>Number(x.required)-Number(l.required)):[],H=s=>s?s.filter(l=>l.key!=="node_key"):[],se=({handleSelectType:s,skipToStep:l,nodeType:x,selectedValues:n})=>{const[h,w]=f.useState(!1),[m,C]=f.useState(),{watch:j,formState:{isValid:t}}=U();f.useEffect(()=>{(async()=>{w(!0);const o=await $(x),T=V(o),A=H(T);C(A),w(!1)})()},[x,j]);const a=c=>c.charAt(0).toUpperCase()+c.slice(1).replace(/_/g," "),p=(m?[...m].sort((c,o)=>c.required&&!o.required?-1:!c.required&&o.required?1:0):[]).filter(c=>!!(c.required&&!Object.values(n).includes(c.key))),S=()=>{s(""),l("sourceType")},b=!t||h||p.some(c=>{var o;return c.required&&!((o=j(c.key))!=null&&o.trim())});return e.jsxs(r,{children:[e.jsx(r,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(r,{align:"center",direction:"row",children:e.jsx(ae,{children:"Required Properties"})})}),e.jsx(ie,{children:h?e.jsx(r,{style:{margin:"auto"},children:e.jsx(G,{color:B.SECONDARY_BLUE})}):e.jsx(r,{className:"input__wrapper",children:p==null?void 0:p.map(({key:c,required:o})=>e.jsx(e.Fragment,{children:e.jsxs(ce,{children:[e.jsx(F,{children:a(c)}),e.jsx(J,{id:"item-name",maxLength:50,name:c,placeholder:o?"Required":"Optional",rules:{...o?{...K,pattern:{message:"No leading whitespace allowed",value:X}}:{}}})]})}))})}),e.jsxs(r,{direction:"row",children:[e.jsx(r,{grow:1,children:e.jsx(E,{color:"secondary",onClick:S,size:"large",variant:"contained",children:"Prev"})}),e.jsx(r,{grow:1,ml:20,children:e.jsx(E,{color:"secondary",disabled:b,onClick:()=>l("createConfirmation"),size:"large",variant:"contained",children:"Next"})})]})]})},ae=v(F)`
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
    color: ${B.GRAY7};
    -webkit-text-fill-color: ${B.GRAY7};
  }
`,le=({nodeType:s,onclose:l,selectedNodeType:x})=>e.jsxs(r,{children:[e.jsx(r,{mb:20,children:e.jsx(R,{children:"Confirm Type Change"})}),e.jsx(r,{mb:25,children:e.jsxs(R,{children:["From: ",x]})}),e.jsx(r,{mb:25,children:e.jsxs(R,{children:["To: ",s]})}),e.jsxs(r,{direction:"row",children:[e.jsx(r,{grow:1,children:e.jsx(E,{color:"secondary",onClick:l,size:"large",variant:"contained",children:"Cancel"})}),e.jsx(r,{grow:1,ml:20,children:e.jsx(E,{color:"secondary",size:"large",type:"submit",variant:"contained",children:"Confirm"})})]})]}),R=v(F)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,pe=({handleSelectType:s,skipToStep:l,selectedNodeType:x,nodeType:n,selectedValues:h,setSelectedValues:w})=>{const[m,C]=f.useState(!1),[j,t]=f.useState(),[a,i]=f.useState(),{watch:p}=U();f.useEffect(()=>{const d=async(u,y)=>{C(!0);const g=await $(u),z=V(g),_=H(z);y(_),C(!1)};n&&d(n,t),x&&d(x,i)},[n,x,p]);const S=f.useMemo(()=>k(j),[j]),b=f.useMemo(()=>k(a),[a]),c=()=>{s(""),l("sourceType")};f.useEffect(()=>{if(j&&a){const d=a.reduce((u,y)=>{const g=j.find(z=>z.key===y.key);return u[y.key]=g?y.key:"none",u},{});w(d)}},[j,a,w]);const o=(d,u)=>{w(y=>({...y,[d]:u}))},T=()=>{const d=S.every(({key:u,required:y})=>!y||y&&h[u]&&h[u]!=="none");l(d?"createConfirmation":"requiredProperties")},A=f.useMemo(()=>b.map(({key:d})=>{const u=h[d]||"none",y=S.filter(g=>!Object.values(h).includes(g.key)||g.key===u).map(g=>({label:q(g.key),value:g.key}));return y.unshift({label:"None",value:"none"}),{key:d,autoCompleteOptions:y,selectedValue:u}}),[b,S,h]);return e.jsxs(r,{children:[e.jsx(r,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(r,{align:"center",direction:"row",children:e.jsx(de,{children:"Map Properties"})})}),e.jsx(ue,{children:m?e.jsx(r,{style:{margin:"auto"},children:e.jsx(G,{color:B.lightGray})}):e.jsxs(xe,{children:[e.jsxs(fe,{children:[e.jsx(I,{children:q(x)}),b.map(({key:d})=>e.jsx(he,{children:e.jsx(F,{children:q(d)})},d))]}),e.jsxs(me,{children:[e.jsx(I,{children:q(n)}),A.map(({key:d,autoCompleteOptions:u,selectedValue:y})=>e.jsx(r,{children:e.jsx(Y,{isLoading:m,onSelect:g=>o(d,g?g.value:"none"),options:u,selectedValue:u.find(g=>g.value===y)})},d))]})]})}),e.jsxs(r,{direction:"row",children:[e.jsx(r,{grow:1,children:e.jsx(E,{color:"secondary",onClick:c,size:"large",variant:"contained",children:"Prev"})}),e.jsx(r,{grow:1,ml:20,children:e.jsx(E,{color:"secondary",disabled:m,onClick:T,size:"large",variant:"contained",children:"Next"})})]})]})},de=v(F)`
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
`,fe=v.div`
  flex: 1;
  margin-right: 16px;
`,he=v.div`
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
`,ye={label:"Not Selected",value:"Not Selected"},ge=[{label:"Corporation",value:"Corporation"},{label:"Event",value:"Event"},{label:"Image",value:"Image"},{label:"Organization",value:"Organization"},{label:"Person",value:"Person"},{label:"Place",value:"Place"},{label:"Project",value:"Project"},{label:"Software",value:"Software"},{label:"Topic",value:"Topic"}],je=({skipToStep:s,allowNextStep:l,onSelectType:x,selectedType:n})=>{const[h]=Q(i=>[i.customSchemaFeatureFlag]),[w,m]=f.useState(null),[C,j]=f.useState(!1),t=W();f.useEffect(()=>{(async()=>{var p;if(h){j(!0);try{const S=await Z(),b=["about","schema",(p=t==null?void 0:t.node_type)==null?void 0:p.toLowerCase()],c=S.schemas.filter(o=>o.ref_id&&!b.includes(o.type.toLowerCase())&&!o.is_deleted).map(o=>({label:oe(o.type),value:o.type,action:()=>s("mapProperties")}));m(c)}catch(S){console.warn(S)}finally{j(!1)}}else m([...ge,ye])})()},[t==null?void 0:t.node_type,n,h,s]);const a=i=>{x((i==null?void 0:i.label)||"")};return e.jsxs(r,{children:[e.jsx(r,{align:"center",direction:"row",justify:"space-between",mb:20,children:e.jsx(r,{align:"center",direction:"row",children:e.jsx(be,{children:"Select Type"})})}),e.jsx(r,{direction:"row",mb:20,children:e.jsx(Y,{autoFocus:!0,isLoading:C,onSelect:a,options:w})}),e.jsx(r,{children:e.jsx(E,{color:"secondary",disabled:!l,onClick:()=>s("mapProperties"),size:"large",type:"button",variant:"contained",children:"Next"})})]})},be=v(F)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,we=async(s,l,x,n)=>{const h={},w=[];Object.entries(x).forEach(([t,a])=>{a!=="none"&&(h[a]=t),t!==a&&w.push(t)});const m={};Object.keys(n||{}).forEach(t=>{const a=n==null?void 0:n[t];Object.entries(h).forEach(([i,p])=>{p===t&&(m[h[i]]=a)})}),Object.keys(s).forEach(t=>{t!=="nodeType"&&(m[t]=s[t])});const C=n?n.node_type.charAt(0).toUpperCase()+n.node_type.slice(1):void 0,j={node_type:l,node_data:m,properties_to_be_deleted:w,type_to_be_deleted:C?[C]:[]};try{let t=n==null?void 0:n.ref_id;if((n==null?void 0:n.type)==="topic"){const{data:i}=await ne({search:n==null?void 0:n.name}),p=i.find(S=>S.name===n.name);t=p==null?void 0:p.ref_id}const a=t||(n==null?void 0:n.ref_id);a&&await re(a,j)}catch(t){console.error(t);let a=O;if(t.status===400)try{const i=await t.json();a=i.message||i.errorCode||(i==null?void 0:i.status)||O}catch{a=O}else t instanceof Error&&(a=t.message);throw new Error(a)}},Me=()=>{const[s,l]=f.useState("sourceType"),{close:x,visible:n}=D("changeNodeType"),{open:h}=D("editNodeName"),{open:w}=D("addType"),m=N({mode:"onChange"}),{watch:C,setValue:j,reset:t}=m,[a,i]=f.useState(""),[p,S]=f.useState({});f.useEffect(()=>()=>{l("sourceType"),t()},[n,t]);const b=W(),c=b!=null&&b.node_type?b.node_type.charAt(0).toUpperCase()+b.node_type.slice(1):"",o=C("nodeType");C("title");const T=()=>{x()},A=_=>{l(_)},d=m.handleSubmit(async _=>{try{await we(_,o,p,b),T()}catch(P){let L=O;if(T(),(P==null?void 0:P.status)===400){const M=await P.json();L=M.errorCode||(M==null?void 0:M.status)||O}else P instanceof Error&&(L=P.message);i(String(L))}}),u=_=>{_==="Create custom type"?w():j("nodeType",_)},y={sourceType:e.jsx(je,{allowNextStep:!!o,onSelectType:u,selectedType:o,skipToStep:A}),requiredProperties:e.jsx(se,{handleSelectType:u,nodeType:o,selectedValues:p,skipToStep:A}),createConfirmation:e.jsx(le,{nodeType:o,onclose:T,selectedNodeType:c}),mapProperties:e.jsx(pe,{handleSelectType:u,nodeType:o,selectedNodeType:c,selectedValues:p,setSelectedValues:S,skipToStep:A})},g=s==="mapProperties"?"regular":"small",z=()=>{x(),h()};return e.jsx(ee,{id:"changeNodeType",kind:g,onClose:z,preventOutsideClose:!0,children:e.jsx(te,{...m,children:e.jsx("form",{id:"add-node-form",onSubmit:d,children:y[s]})})})};export{Me as ChangeNodeTypeModal};
