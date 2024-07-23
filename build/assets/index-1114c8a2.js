import{Q as v,S as q,a5 as A,U as r,r as x,j as e,ar as H,bF as U,a4 as J,a1 as $,bG as K,ad as L,bD as z,am as Q,bI as X}from"./index-2786dc8f.js";import{ae as G,aF as V,aK as Z,aO as N,B as T,aP as W,af as ee,aG as te,ag as ne}from"./index-d75bac20.js";import{p as Y}from"./index-bbc7c996.js";import{c as re}from"./index-64f1c910.js";import"./three.module-a2e04964.js";const ae=({handleSelectType:c,skipToStep:h,nodeType:u,selectedValues:n})=>{const[f,w]=x.useState(!1),[m,C]=x.useState(),{watch:j,formState:{isValid:t}}=G();x.useEffect(()=>{(async()=>{w(!0);const a=await U(u),_=Y(a);C(_),w(!1)})()},[u,j]);const o=i=>i.charAt(0).toUpperCase()+i.slice(1).replace(/_/g," "),l=(m?[...m].sort((i,a)=>i.required&&!a.required?-1:!i.required&&a.required?1:0):[]).filter(i=>!!(i.required&&!Object.values(n).includes(i.key))),S=()=>{c(""),h("sourceType")},b=!t||f||l.some(i=>{var a;return i.required&&!((a=j(i.key))!=null&&a.trim())});return e.jsxs(r,{children:[e.jsx(r,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(r,{align:"center",direction:"row",children:e.jsx(oe,{children:"Required Properties"})})}),e.jsx(se,{children:f?e.jsx(r,{style:{margin:"auto"},children:e.jsx(V,{color:q.SECONDARY_BLUE})}):e.jsx(r,{className:"input__wrapper",children:l==null?void 0:l.map(({key:i,required:a})=>e.jsx(e.Fragment,{children:e.jsxs(ie,{children:[e.jsx(A,{children:o(i)}),e.jsx(Z,{id:"item-name",maxLength:50,name:i,placeholder:a?"Required":"Optional",rules:{...a?{...H,pattern:{message:"No leading whitespace allowed",value:N}}:{}}})]})}))})}),e.jsxs(r,{direction:"row",children:[e.jsx(r,{grow:1,children:e.jsx(T,{color:"secondary",onClick:S,size:"large",variant:"contained",children:"Prev"})}),e.jsx(r,{grow:1,ml:20,children:e.jsx(T,{color:"secondary",disabled:b,onClick:()=>h("createConfirmation"),size:"large",variant:"contained",children:"Next"})})]})]})},oe=v(A)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,se=v(r)`
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
`,ie=v(r)`
  display: flex;
  gap: 10px;

  #item-name {
    color: ${q.GRAY7};
    -webkit-text-fill-color: ${q.GRAY7};
  }
`,ce=({nodeType:c,onclose:h,selectedNodeType:u})=>e.jsxs(r,{children:[e.jsx(r,{mb:20,children:e.jsx(R,{children:"Confirm Type Change"})}),e.jsx(r,{mb:25,children:e.jsxs(R,{children:["From: ",u]})}),e.jsx(r,{mb:25,children:e.jsxs(R,{children:["To: ",c]})}),e.jsxs(r,{direction:"row",children:[e.jsx(r,{grow:1,children:e.jsx(T,{color:"secondary",onClick:h,size:"large",variant:"contained",children:"Cancel"})}),e.jsx(r,{grow:1,ml:20,children:e.jsx(T,{color:"secondary",size:"large",type:"submit",variant:"contained",children:"Confirm"})})]})]}),R=v(A)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,B=c=>c.charAt(0).toUpperCase()+c.slice(1).replace(/_/g," "),I=c=>c?[...c].sort((h,u)=>Number(u.required)-Number(h.required)):[],le=({handleSelectType:c,skipToStep:h,selectedNodeType:u,nodeType:n,selectedValues:f,setSelectedValues:w})=>{const[m,C]=x.useState(!1),[j,t]=x.useState(),[o,s]=x.useState(),{watch:l}=G();x.useEffect(()=>{const p=async(d,y)=>{C(!0);const g=await U(d),O=Y(g);y(O),C(!1)};n&&p(n,t),u&&p(u,s)},[n,u,l]);const S=x.useMemo(()=>I(j),[j]),b=x.useMemo(()=>I(o),[o]),i=()=>{c(""),h("sourceType")};x.useEffect(()=>{if(j&&o){const p=o.reduce((d,y)=>{const g=j.find(O=>O.key===y.key);return d[y.key]=g?y.key:"none",d},{});w(p)}},[j,o,w]);const a=(p,d)=>{w(y=>({...y,[p]:d}))},_=()=>{const p=S.every(({key:d,required:y})=>!y||y&&f[d]&&f[d]!=="none");h(p?"createConfirmation":"requiredProperties")},F=x.useMemo(()=>b.map(({key:p})=>{const d=f[p]||"none",y=S.filter(g=>!Object.values(f).includes(g.key)||g.key===d).map(g=>({label:B(g.key),value:g.key}));return y.unshift({label:"None",value:"none"}),{key:p,autoCompleteOptions:y,selectedValue:d}}),[b,S,f]);return e.jsxs(r,{children:[e.jsx(r,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(r,{align:"center",direction:"row",children:e.jsx(pe,{children:"Map Properties"})})}),e.jsx(de,{children:m?e.jsx(r,{style:{margin:"auto"},children:e.jsx(V,{color:q.lightGray})}):e.jsxs(ue,{children:[e.jsxs(xe,{children:[e.jsx(k,{children:B(u)}),b.map(({key:p})=>e.jsx(he,{children:e.jsx(A,{children:B(p)})},p))]}),e.jsxs(fe,{children:[e.jsx(k,{children:B(n)}),F.map(({key:p,autoCompleteOptions:d,selectedValue:y})=>e.jsx(r,{children:e.jsx(W,{isLoading:m,onSelect:g=>a(p,g?g.value:"none"),options:d,selectedValue:d.find(g=>g.value===y)})},p))]})]})}),e.jsxs(r,{direction:"row",children:[e.jsx(r,{grow:1,children:e.jsx(T,{color:"secondary",onClick:i,size:"large",variant:"contained",children:"Prev"})}),e.jsx(r,{grow:1,ml:20,children:e.jsx(T,{color:"secondary",disabled:m,onClick:_,size:"large",variant:"contained",children:"Next"})})]})]})},pe=v(A)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,de=v(r)`
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
`,ue=v.div`
  display: flex;
  justify-content: space-between;
`,xe=v.div`
  flex: 1;
  margin-right: 16px;
`,he=v.div`
  display: flex;
  gap: 16px;
  margin-top: 38px;
`,fe=v.div`
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
`,me={label:"Not Selected",value:"Not Selected"},ye=[{label:"Corporation",value:"Corporation"},{label:"Event",value:"Event"},{label:"Image",value:"Image"},{label:"Organization",value:"Organization"},{label:"Person",value:"Person"},{label:"Place",value:"Place"},{label:"Project",value:"Project"},{label:"Software",value:"Software"},{label:"Topic",value:"Topic"}],ge=({skipToStep:c,allowNextStep:h,onSelectType:u,selectedType:n})=>{const[f]=J(s=>[s.customSchemaFeatureFlag]),[w,m]=x.useState(null),[C,j]=x.useState(!1),t=$();x.useEffect(()=>{(async()=>{var l;if(f){j(!0);try{const S=await K(),b=["about","schema",(l=t==null?void 0:t.node_type)==null?void 0:l.toLowerCase()],i=S.schemas.filter(a=>a.ref_id&&!b.includes(a.type.toLowerCase())&&!a.is_deleted).map(a=>({label:re(a.type),value:a.type,action:()=>c("mapProperties")}));m(i)}catch(S){console.warn(S)}finally{j(!1)}}else m([...ye,me])})()},[t==null?void 0:t.node_type,n,f,c]);const o=s=>{u((s==null?void 0:s.label)||"")};return e.jsxs(r,{children:[e.jsx(r,{align:"center",direction:"row",justify:"space-between",mb:20,children:e.jsx(r,{align:"center",direction:"row",children:e.jsx(je,{children:"Select Type"})})}),e.jsx(r,{direction:"row",mb:20,children:e.jsx(W,{autoFocus:!0,isLoading:C,onSelect:o,options:w})}),e.jsx(r,{children:e.jsx(T,{color:"secondary",disabled:!h,onClick:()=>c("mapProperties"),size:"large",type:"button",variant:"contained",children:"Next"})})]})},je=v(A)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,be=async(c,h,u,n)=>{const f={},w=[];Object.entries(u).forEach(([t,o])=>{o!=="none"&&(f[o]=t),t!==o&&w.push(t)});const m={};Object.keys(n||{}).forEach(t=>{const o=n==null?void 0:n[t];Object.entries(f).forEach(([s,l])=>{l===t&&(m[f[s]]=o)})}),Object.keys(c).forEach(t=>{t!=="nodeType"&&(m[t]=c[t])});const C=n?n.node_type.charAt(0).toUpperCase()+n.node_type.slice(1):void 0,j={node_type:h,node_data:m,properties_to_be_deleted:w,type_to_be_deleted:C?[C]:[]};try{let t=n==null?void 0:n.ref_id;if((n==null?void 0:n.type)==="topic"){const{data:s}=await Q({search:n==null?void 0:n.name}),l=s.find(S=>S.name===n.name);t=l==null?void 0:l.ref_id}const o=t||(n==null?void 0:n.ref_id);o&&await X(o,j)}catch(t){console.error(t);let o=z;if(t.status===400)try{const s=await t.json();o=s.message||s.errorCode||(s==null?void 0:s.status)||z}catch{o=z}else t instanceof Error&&(o=t.message);throw new Error(o)}},Te=()=>{const[c,h]=x.useState("sourceType"),{close:u,visible:n}=L("changeNodeType"),{open:f}=L("editNodeName"),{open:w}=L("addType"),m=ee({mode:"onChange"}),{watch:C,setValue:j,reset:t}=m,[o,s]=x.useState(""),[l,S]=x.useState({});x.useEffect(()=>()=>{h("sourceType"),t()},[n,t]);const b=$(),i=b!=null&&b.node_type?b.node_type.charAt(0).toUpperCase()+b.node_type.slice(1):"",a=C("nodeType");C("title");const _=()=>{u()},F=P=>{h(P)},p=m.handleSubmit(async P=>{try{await be(P,a,l,b),_()}catch(E){let D=z;if(_(),(E==null?void 0:E.status)===400){const M=await E.json();D=M.errorCode||(M==null?void 0:M.status)||z}else E instanceof Error&&(D=E.message);s(String(D))}}),d=P=>{P==="Create custom type"?w():j("nodeType",P)},y={sourceType:e.jsx(ge,{allowNextStep:!!a,onSelectType:d,selectedType:a,skipToStep:F}),requiredProperties:e.jsx(ae,{handleSelectType:d,nodeType:a,selectedValues:l,skipToStep:F}),createConfirmation:e.jsx(ce,{nodeType:a,onclose:_,selectedNodeType:i}),mapProperties:e.jsx(le,{handleSelectType:d,nodeType:a,selectedNodeType:i,selectedValues:l,setSelectedValues:S,skipToStep:F})},g=c==="mapProperties"?"regular":"small",O=()=>{u(),f()};return e.jsx(te,{id:"changeNodeType",kind:g,onClose:O,preventOutsideClose:!0,children:e.jsx(ne,{...m,children:e.jsx("form",{id:"add-node-form",onSubmit:p,children:y[c]})})})};export{Te as ChangeNodeTypeModal};
