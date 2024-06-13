import{f as S,h as q,T as P,F as n,r as d,j as e,D as H,a_ as $,J,a5 as U,a$ as K,B as R,aY as z,b1 as Q,b3 as X}from"./index-424b4312.js";import{i as Y,C as V,B as T,c as Z,F as N}from"./react-toastify.esm-ecfee1d0.js";import{B as ee}from"./index-802ba261.js";import{T as te}from"./index-e2daefe8.js";import{p as W}from"./index-47c67ef3.js";import{A as G}from"./index-3f0893bd.js";import{c as ne}from"./index-64f1c910.js";import"./index.esm-43956ff5.js";import"./InfoIcon-ff1ffccb.js";import"./index-b22a8181.js";import"./Popover-1f7bc79b.js";import"./useSlotProps-de1f26a0.js";import"./Popper-99c9a16d.js";const re=({handleSelectType:a,skipToStep:u,nodeType:p,selectedValues:r})=>{const[x,b]=d.useState(!1),[m,C]=d.useState(),{watch:t,formState:{isValid:s}}=Y();d.useEffect(()=>{(async()=>{b(!0);const w=await $(p),g=W(w);C(g),b(!1)})()},[p,t]);const i=o=>o.charAt(0).toUpperCase()+o.slice(1).replace(/_/g," "),f=(m?[...m].sort((o,w)=>o.required&&!w.required?-1:!o.required&&w.required?1:0):[]).filter(o=>!!(o.required&&!Object.values(r).includes(o.key))),v=()=>{a(""),u("sourceType")};return e.jsxs(n,{children:[e.jsx(n,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(n,{align:"center",direction:"row",children:e.jsx(oe,{children:"Required Properties"})})}),e.jsx(se,{children:x?e.jsx(n,{style:{margin:"auto"},children:e.jsx(V,{color:q.SECONDARY_BLUE})}):e.jsx(n,{className:"input__wrapper",children:f==null?void 0:f.map(({key:o,required:w})=>e.jsx(e.Fragment,{children:e.jsxs(ae,{children:[e.jsx(P,{children:i(o)}),e.jsx(te,{id:"item-name",maxLength:50,name:o,placeholder:w?"Required":"Optional",rules:{...w?H:{}}})]})}))})}),e.jsxs(n,{direction:"row",children:[e.jsx(n,{grow:1,children:e.jsx(T,{color:"secondary",onClick:v,size:"large",variant:"contained",children:"Prev"})}),e.jsx(n,{grow:1,ml:20,children:e.jsx(T,{color:"secondary",disabled:!s||x||(f==null?void 0:f.some(o=>o.required&&!t(o.key))),onClick:()=>u("createConfirmation"),size:"large",variant:"contained",children:"Next"})})]})]})},oe=S(P)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,se=S(n)`
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
`,ae=S(n)`
  display: flex;
  gap: 10px;

  #item-name {
    color: ${q.GRAY7};
    -webkit-text-fill-color: ${q.GRAY7};
  }
`,ie=({nodeType:a,onclose:u,selectedNodeType:p})=>e.jsxs(n,{children:[e.jsx(n,{mb:20,children:e.jsx(D,{children:"Confirm Type Change"})}),e.jsx(n,{mb:25,children:e.jsxs(D,{children:["From: ",p]})}),e.jsx(n,{mb:25,children:e.jsxs(D,{children:["To: ",a]})}),e.jsxs(n,{direction:"row",children:[e.jsx(n,{grow:1,children:e.jsx(T,{color:"secondary",onClick:u,size:"large",variant:"contained",children:"Cancel"})}),e.jsx(n,{grow:1,ml:20,children:e.jsx(T,{color:"secondary",size:"large",type:"submit",variant:"contained",children:"Confirm"})})]})]}),D=S(P)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,M=a=>a.charAt(0).toUpperCase()+a.slice(1).replace(/_/g," "),I=a=>a?[...a].sort((u,p)=>Number(p.required)-Number(u.required)):[],ce=({handleSelectType:a,skipToStep:u,selectedNodeType:p,nodeType:r,selectedValues:x,setSelectedValues:b})=>{const[m,C]=d.useState(!1),[t,s]=d.useState(),[i,h]=d.useState(),{watch:f}=Y();d.useEffect(()=>{const c=async(l,j)=>{C(!0);const y=await $(l),O=W(y);j(O),C(!1)};r&&c(r,s),p&&c(p,h)},[r,p,f]);const v=d.useMemo(()=>I(t),[t]),o=d.useMemo(()=>I(i),[i]),w=()=>{a(""),u("sourceType")};d.useEffect(()=>{if(t&&i){const c=i.reduce((l,j)=>{const y=t.find(O=>O.key===j.key);return l[j.key]=y?j.key:"none",l},{});b(c)}},[t,i,b]);const g=(c,l)=>{b(j=>({...j,[c]:l}))},A=()=>{const c=v.every(({key:l,required:j})=>!j||j&&x[l]&&x[l]!=="none");u(c?"createConfirmation":"requiredProperties")},F=d.useMemo(()=>o.map(({key:c})=>{const l=x[c]||"none",j=v.filter(y=>!Object.values(x).includes(y.key)||y.key===l).map(y=>({label:M(y.key),value:y.key}));return j.unshift({label:"None",value:"none"}),{key:c,autoCompleteOptions:j,selectedValue:l}}),[o,v,x]);return e.jsxs(n,{children:[e.jsx(n,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(n,{align:"center",direction:"row",children:e.jsx(le,{children:"Map Properties"})})}),e.jsx(pe,{children:m?e.jsx(n,{style:{margin:"auto"},children:e.jsx(V,{color:q.SECONDARY_BLUE})}):e.jsxs(de,{children:[e.jsxs(ue,{children:[e.jsx(k,{children:M(p)}),o.map(({key:c})=>e.jsx(xe,{children:e.jsx(P,{children:M(c)})},c))]}),e.jsxs(me,{children:[e.jsx(k,{children:M(r)}),F.map(({key:c,autoCompleteOptions:l,selectedValue:j})=>e.jsx(n,{children:e.jsx(G,{isLoading:m,onSelect:y=>g(c,y?y.value:"none"),options:l,selectedValue:l.find(y=>y.value===j)})},c))]})]})}),e.jsxs(n,{direction:"row",children:[e.jsx(n,{grow:1,children:e.jsx(T,{color:"secondary",onClick:w,size:"large",variant:"contained",children:"Prev"})}),e.jsx(n,{grow:1,ml:20,children:e.jsx(T,{color:"secondary",disabled:m,onClick:A,size:"large",variant:"contained",children:"Next"})})]})]})},le=S(P)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,pe=S(n)`
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
`,de=S.div`
  display: flex;
  justify-content: space-between;
`,ue=S.div`
  flex: 1;
  margin-right: 16px;
`,xe=S.div`
  display: flex;
  gap: 16px;
  margin-top: 38px;
`,me=S.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
`,k=S.h3`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 8px;
  font-family: 'Barlow';
  color: white;
  margin-bottom: 15px;
`,he={label:"Not Selected",value:"Not Selected"},fe=[{label:"Corporation",value:"Corporation"},{label:"Event",value:"Event"},{label:"Image",value:"Image"},{label:"Organization",value:"Organization"},{label:"Person",value:"Person"},{label:"Place",value:"Place"},{label:"Project",value:"Project"},{label:"Software",value:"Software"},{label:"Topic",value:"Topic"}],ge=({skipToStep:a,allowNextStep:u,onSelectType:p,selectedType:r})=>{const[x]=J(h=>[h.customSchemaFeatureFlag]),[b,m]=d.useState(null),[C,t]=d.useState(!1),s=U();d.useEffect(()=>{(async()=>{var f;if(x){t(!0);try{const v=await K(),o=["about","schema",(f=s==null?void 0:s.node_type)==null?void 0:f.toLowerCase()],w=v.schemas.filter(g=>g.ref_id&&!o.includes(g.type.toLowerCase())&&!g.is_deleted).map(g=>({label:ne(g.type),value:g.type,action:()=>a("mapProperties")}));m(w)}catch(v){console.warn(v)}finally{t(!1)}}else console.log("data"),m([...fe,he])})()},[s==null?void 0:s.node_type,r,x,a]);const i=h=>{p((h==null?void 0:h.label)||"")};return e.jsxs(n,{children:[e.jsx(n,{align:"center",direction:"row",justify:"space-between",mb:20,children:e.jsx(n,{align:"center",direction:"row",children:e.jsx(je,{children:"Select Type"})})}),e.jsx(n,{direction:"row",mb:20,children:e.jsx(G,{autoFocus:!0,isLoading:C,onSelect:i,options:b})}),e.jsx(n,{children:e.jsx(T,{color:"secondary",disabled:!u,onClick:()=>a("mapProperties"),size:"large",type:"button",variant:"contained",children:"Next"})})]})},je=S(P)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,ye=async(a,u,p,r)=>{const x={},b=[];Object.entries(p).forEach(([t,s])=>{s!=="none"&&(x[s]=t),t!==s&&b.push(t)});const m={};Object.keys(r||{}).forEach(t=>{const s=r==null?void 0:r[t];Object.entries(x).forEach(([i,h])=>{h===t&&(m[x[i]]=s)})}),Object.keys(a).forEach(t=>{t!=="nodeType"&&(m[t]=a[t])});const C={node_type:u,properties:m,properties_to_be_deleted:b};try{let t=r==null?void 0:r.ref_id;if((r==null?void 0:r.type)==="topic"){const{data:i}=await Q({search:r==null?void 0:r.name}),h=i.find(f=>f.name===r.name);t=h==null?void 0:h.ref_id}const s=t||(r==null?void 0:r.ref_id);s&&await X(s,C)}catch(t){console.log(t);let s=z;if(t.status===400)try{const i=await t.json();s=i.message||i.errorCode||(i==null?void 0:i.status)||z}catch{s=z}else t instanceof Error&&(s=t.message);throw new Error(s)}},Be=()=>{const[a,u]=d.useState("sourceType"),{close:p,visible:r}=R("changeNodeType"),{open:x}=R("editNodeName"),{open:b}=R("addType"),m=Z({mode:"onChange"}),{watch:C,setValue:t,reset:s}=m,[i,h]=d.useState(""),[f,v]=d.useState({});d.useEffect(()=>()=>{u("sourceType"),s()},[r,s]);const o=U(),w=o!=null&&o.node_type?o.node_type.charAt(0).toUpperCase()+o.node_type.slice(1):"",g=C("nodeType");C("title");const A=()=>{p()},F=_=>{u(_)},c=m.handleSubmit(async _=>{try{await ye(_,g,f,o),A()}catch(E){let L=z;if(A(),(E==null?void 0:E.status)===400){const B=await E.json();L=B.errorCode||(B==null?void 0:B.status)||z}else E instanceof Error&&(L=E.message);h(String(L))}}),l=_=>{_==="Create custom type"?b():t("nodeType",_)},j={sourceType:e.jsx(ge,{allowNextStep:!!g,onSelectType:l,selectedType:g,skipToStep:F}),requiredProperties:e.jsx(re,{handleSelectType:l,nodeType:g,selectedValues:f,skipToStep:F}),createConfirmation:e.jsx(ie,{nodeType:g,onclose:A,selectedNodeType:w}),mapProperties:e.jsx(ce,{handleSelectType:l,nodeType:g,selectedNodeType:w,selectedValues:f,setSelectedValues:v,skipToStep:F})},y=a==="mapProperties"?"regular":"small",O=()=>{p(),x()};return e.jsx(ee,{id:"changeNodeType",kind:y,onClose:O,preventOutsideClose:!0,children:e.jsx(N,{...m,children:e.jsx("form",{id:"add-node-form",onSubmit:c,children:j[a]})})})};export{Be as ChangeNodeTypeModal};
