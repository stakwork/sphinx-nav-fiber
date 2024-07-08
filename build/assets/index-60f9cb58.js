import{Q as v,S as q,a4 as P,U as r,r as u,j as e,aq as Y,bB as U,at as J,a1 as $,bC as Q,ac as R,bz as F,al as K,bE as X}from"./index-b4a5f29b.js";import{ac as V,aB as G,aJ as Z,ab as _,aO as H,aH as N,aC as ee,aI as te}from"./index-83ab11f1.js";import{p as W}from"./index-bbc7c996.js";import{c as ne}from"./index-64f1c910.js";import"./three.module-a2e04964.js";const re=({handleSelectType:i,skipToStep:x,nodeType:d,selectedValues:n})=>{const[h,w]=u.useState(!1),[f,C]=u.useState(),{watch:j,formState:{isValid:t}}=V();u.useEffect(()=>{(async()=>{w(!0);const b=await U(d),m=W(b);C(m),w(!1)})()},[d,j]);const a=o=>o.charAt(0).toUpperCase()+o.slice(1).replace(/_/g," "),c=(f?[...f].sort((o,b)=>o.required&&!b.required?-1:!o.required&&b.required?1:0):[]).filter(o=>!!(o.required&&!Object.values(n).includes(o.key))),S=()=>{i(""),x("sourceType")};return e.jsxs(r,{children:[e.jsx(r,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(r,{align:"center",direction:"row",children:e.jsx(oe,{children:"Required Properties"})})}),e.jsx(ae,{children:h?e.jsx(r,{style:{margin:"auto"},children:e.jsx(G,{color:q.SECONDARY_BLUE})}):e.jsx(r,{className:"input__wrapper",children:c==null?void 0:c.map(({key:o,required:b})=>e.jsx(e.Fragment,{children:e.jsxs(se,{children:[e.jsx(P,{children:a(o)}),e.jsx(Z,{id:"item-name",maxLength:50,name:o,placeholder:b?"Required":"Optional",rules:{...b?Y:{}}})]})}))})}),e.jsxs(r,{direction:"row",children:[e.jsx(r,{grow:1,children:e.jsx(_,{color:"secondary",onClick:S,size:"large",variant:"contained",children:"Prev"})}),e.jsx(r,{grow:1,ml:20,children:e.jsx(_,{color:"secondary",disabled:!t||h||(c==null?void 0:c.some(o=>o.required&&!j(o.key))),onClick:()=>x("createConfirmation"),size:"large",variant:"contained",children:"Next"})})]})]})},oe=v(P)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,ae=v(r)`
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
`,se=v(r)`
  display: flex;
  gap: 10px;

  #item-name {
    color: ${q.GRAY7};
    -webkit-text-fill-color: ${q.GRAY7};
  }
`,ie=({nodeType:i,onclose:x,selectedNodeType:d})=>e.jsxs(r,{children:[e.jsx(r,{mb:20,children:e.jsx(I,{children:"Confirm Type Change"})}),e.jsx(r,{mb:25,children:e.jsxs(I,{children:["From: ",d]})}),e.jsx(r,{mb:25,children:e.jsxs(I,{children:["To: ",i]})}),e.jsxs(r,{direction:"row",children:[e.jsx(r,{grow:1,children:e.jsx(_,{color:"secondary",onClick:x,size:"large",variant:"contained",children:"Cancel"})}),e.jsx(r,{grow:1,ml:20,children:e.jsx(_,{color:"secondary",size:"large",type:"submit",variant:"contained",children:"Confirm"})})]})]}),I=v(P)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,M=i=>i.charAt(0).toUpperCase()+i.slice(1).replace(/_/g," "),D=i=>i?[...i].sort((x,d)=>Number(d.required)-Number(x.required)):[],ce=({handleSelectType:i,skipToStep:x,selectedNodeType:d,nodeType:n,selectedValues:h,setSelectedValues:w})=>{const[f,C]=u.useState(!1),[j,t]=u.useState(),[a,s]=u.useState(),{watch:c}=V();u.useEffect(()=>{const l=async(p,y)=>{C(!0);const g=await U(p),O=W(g);y(O),C(!1)};n&&l(n,t),d&&l(d,s)},[n,d,c]);const S=u.useMemo(()=>D(j),[j]),o=u.useMemo(()=>D(a),[a]),b=()=>{i(""),x("sourceType")};u.useEffect(()=>{if(j&&a){const l=a.reduce((p,y)=>{const g=j.find(O=>O.key===y.key);return p[y.key]=g?y.key:"none",p},{});w(l)}},[j,a,w]);const m=(l,p)=>{w(y=>({...y,[l]:p}))},z=()=>{const l=S.every(({key:p,required:y})=>!y||y&&h[p]&&h[p]!=="none");x(l?"createConfirmation":"requiredProperties")},A=u.useMemo(()=>o.map(({key:l})=>{const p=h[l]||"none",y=S.filter(g=>!Object.values(h).includes(g.key)||g.key===p).map(g=>({label:M(g.key),value:g.key}));return y.unshift({label:"None",value:"none"}),{key:l,autoCompleteOptions:y,selectedValue:p}}),[o,S,h]);return e.jsxs(r,{children:[e.jsx(r,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(r,{align:"center",direction:"row",children:e.jsx(le,{children:"Map Properties"})})}),e.jsx(pe,{children:f?e.jsx(r,{style:{margin:"auto"},children:e.jsx(G,{color:q.lightGray})}):e.jsxs(de,{children:[e.jsxs(ue,{children:[e.jsx(k,{children:M(d)}),o.map(({key:l})=>e.jsx(xe,{children:e.jsx(P,{children:M(l)})},l))]}),e.jsxs(he,{children:[e.jsx(k,{children:M(n)}),A.map(({key:l,autoCompleteOptions:p,selectedValue:y})=>e.jsx(r,{children:e.jsx(H,{isLoading:f,onSelect:g=>m(l,g?g.value:"none"),options:p,selectedValue:p.find(g=>g.value===y)})},l))]})]})}),e.jsxs(r,{direction:"row",children:[e.jsx(r,{grow:1,children:e.jsx(_,{color:"secondary",onClick:b,size:"large",variant:"contained",children:"Prev"})}),e.jsx(r,{grow:1,ml:20,children:e.jsx(_,{color:"secondary",disabled:f,onClick:z,size:"large",variant:"contained",children:"Next"})})]})]})},le=v(P)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,pe=v(r)`
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
`,de=v.div`
  display: flex;
  justify-content: space-between;
`,ue=v.div`
  flex: 1;
  margin-right: 16px;
`,xe=v.div`
  display: flex;
  gap: 16px;
  margin-top: 38px;
`,he=v.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
`,k=v.h3`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 8px;
  font-family: 'Barlow';
  color: white;
  margin-bottom: 15px;
`,fe={label:"Not Selected",value:"Not Selected"},me=[{label:"Corporation",value:"Corporation"},{label:"Event",value:"Event"},{label:"Image",value:"Image"},{label:"Organization",value:"Organization"},{label:"Person",value:"Person"},{label:"Place",value:"Place"},{label:"Project",value:"Project"},{label:"Software",value:"Software"},{label:"Topic",value:"Topic"}],ye=({skipToStep:i,allowNextStep:x,onSelectType:d,selectedType:n})=>{const[h]=J(s=>[s.customSchemaFeatureFlag]),[w,f]=u.useState(null),[C,j]=u.useState(!1),t=$();u.useEffect(()=>{(async()=>{var c;if(h){j(!0);try{const S=await Q(),o=["about","schema",(c=t==null?void 0:t.node_type)==null?void 0:c.toLowerCase()],b=S.schemas.filter(m=>m.ref_id&&!o.includes(m.type.toLowerCase())&&!m.is_deleted).map(m=>({label:ne(m.type),value:m.type,action:()=>i("mapProperties")}));f(b)}catch(S){console.warn(S)}finally{j(!1)}}else f([...me,fe])})()},[t==null?void 0:t.node_type,n,h,i]);const a=s=>{d((s==null?void 0:s.label)||"")};return e.jsxs(r,{children:[e.jsx(r,{align:"center",direction:"row",justify:"space-between",mb:20,children:e.jsx(r,{align:"center",direction:"row",children:e.jsx(ge,{children:"Select Type"})})}),e.jsx(r,{direction:"row",mb:20,children:e.jsx(H,{autoFocus:!0,isLoading:C,onSelect:a,options:w})}),e.jsx(r,{children:e.jsx(_,{color:"secondary",disabled:!x,onClick:()=>i("mapProperties"),size:"large",type:"button",variant:"contained",children:"Next"})})]})},ge=v(P)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,je=async(i,x,d,n)=>{const h={},w=[];Object.entries(d).forEach(([t,a])=>{a!=="none"&&(h[a]=t),t!==a&&w.push(t)});const f={};Object.keys(n||{}).forEach(t=>{const a=n==null?void 0:n[t];Object.entries(h).forEach(([s,c])=>{c===t&&(f[h[s]]=a)})}),Object.keys(i).forEach(t=>{t!=="nodeType"&&(f[t]=i[t])});const C=n?n.node_type.charAt(0).toUpperCase()+n.node_type.slice(1):void 0,j={node_type:x,properties:f,properties_to_be_deleted:w,type_to_be_deleted:C?[C]:[]};try{let t=n==null?void 0:n.ref_id;if((n==null?void 0:n.type)==="topic"){const{data:s}=await K({search:n==null?void 0:n.name}),c=s.find(S=>S.name===n.name);t=c==null?void 0:c.ref_id}const a=t||(n==null?void 0:n.ref_id);a&&await X(a,j)}catch(t){console.log(t);let a=F;if(t.status===400)try{const s=await t.json();a=s.message||s.errorCode||(s==null?void 0:s.status)||F}catch{a=F}else t instanceof Error&&(a=t.message);throw new Error(a)}},_e=()=>{const[i,x]=u.useState("sourceType"),{close:d,visible:n}=R("changeNodeType"),{open:h}=R("editNodeName"),{open:w}=R("addType"),f=N({mode:"onChange"}),{watch:C,setValue:j,reset:t}=f,[a,s]=u.useState(""),[c,S]=u.useState({});u.useEffect(()=>()=>{x("sourceType"),t()},[n,t]);const o=$(),b=o!=null&&o.node_type?o.node_type.charAt(0).toUpperCase()+o.node_type.slice(1):"",m=C("nodeType");C("title");const z=()=>{d()},A=T=>{x(T)},l=f.handleSubmit(async T=>{try{await je(T,m,c,o),z()}catch(E){let L=F;if(z(),(E==null?void 0:E.status)===400){const B=await E.json();L=B.errorCode||(B==null?void 0:B.status)||F}else E instanceof Error&&(L=E.message);s(String(L))}}),p=T=>{T==="Create custom type"?w():j("nodeType",T)},y={sourceType:e.jsx(ye,{allowNextStep:!!m,onSelectType:p,selectedType:m,skipToStep:A}),requiredProperties:e.jsx(re,{handleSelectType:p,nodeType:m,selectedValues:c,skipToStep:A}),createConfirmation:e.jsx(ie,{nodeType:m,onclose:z,selectedNodeType:b}),mapProperties:e.jsx(ce,{handleSelectType:p,nodeType:m,selectedNodeType:b,selectedValues:c,setSelectedValues:S,skipToStep:A})},g=i==="mapProperties"?"regular":"small",O=()=>{d(),h()};return e.jsx(ee,{id:"changeNodeType",kind:g,onClose:O,preventOutsideClose:!0,children:e.jsx(te,{...f,children:e.jsx("form",{id:"add-node-form",onSubmit:l,children:y[i]})})})};export{_e as ChangeNodeTypeModal};
