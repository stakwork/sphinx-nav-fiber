import{f as v,h as q,T as P,F as r,r as u,j as e,D as H,a_ as $,J,a5 as U,a$ as K,B as R,aY as O,b1 as Q,b3 as X}from"./index-0dae50cb.js";import{i as V,C as Y,B as _,c as Z,F as N}from"./react-toastify.esm-c21829f7.js";import{B as ee}from"./index-19df1d2f.js";import{T as te}from"./index-aeeaf39a.js";import{p as G}from"./index-e8df8701.js";import{A as W}from"./index-fdf61578.js";import{c as ne}from"./index-64f1c910.js";import"./index.esm-f2ec62ae.js";import"./InfoIcon-97243c86.js";import"./index-78dad588.js";import"./Popover-161ba539.js";import"./useSlotProps-51a32987.js";import"./Popper-b52a96e2.js";const re=({handleSelectType:i,skipToStep:x,nodeType:d,selectedValues:n})=>{const[m,b]=u.useState(!1),[h,C]=u.useState(),{watch:j,formState:{isValid:t}}=V();u.useEffect(()=>{(async()=>{b(!0);const w=await $(d),f=G(w);C(f),b(!1)})()},[d,j]);const s=o=>o.charAt(0).toUpperCase()+o.slice(1).replace(/_/g," "),c=(h?[...h].sort((o,w)=>o.required&&!w.required?-1:!o.required&&w.required?1:0):[]).filter(o=>!!(o.required&&!Object.values(n).includes(o.key))),S=()=>{i(""),x("sourceType")};return e.jsxs(r,{children:[e.jsx(r,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(r,{align:"center",direction:"row",children:e.jsx(oe,{children:"Required Properties"})})}),e.jsx(se,{children:m?e.jsx(r,{style:{margin:"auto"},children:e.jsx(Y,{color:q.SECONDARY_BLUE})}):e.jsx(r,{className:"input__wrapper",children:c==null?void 0:c.map(({key:o,required:w})=>e.jsx(e.Fragment,{children:e.jsxs(ae,{children:[e.jsx(P,{children:s(o)}),e.jsx(te,{id:"item-name",maxLength:50,name:o,placeholder:w?"Required":"Optional",rules:{...w?H:{}}})]})}))})}),e.jsxs(r,{direction:"row",children:[e.jsx(r,{grow:1,children:e.jsx(_,{color:"secondary",onClick:S,size:"large",variant:"contained",children:"Prev"})}),e.jsx(r,{grow:1,ml:20,children:e.jsx(_,{color:"secondary",disabled:!t||m||(c==null?void 0:c.some(o=>o.required&&!j(o.key))),onClick:()=>x("createConfirmation"),size:"large",variant:"contained",children:"Next"})})]})]})},oe=v(P)`
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
`,ae=v(r)`
  display: flex;
  gap: 10px;

  #item-name {
    color: ${q.GRAY7};
    -webkit-text-fill-color: ${q.GRAY7};
  }
`,ie=({nodeType:i,onclose:x,selectedNodeType:d})=>e.jsxs(r,{children:[e.jsx(r,{mb:20,children:e.jsx(D,{children:"Confirm Type Change"})}),e.jsx(r,{mb:25,children:e.jsxs(D,{children:["From: ",d]})}),e.jsx(r,{mb:25,children:e.jsxs(D,{children:["To: ",i]})}),e.jsxs(r,{direction:"row",children:[e.jsx(r,{grow:1,children:e.jsx(_,{color:"secondary",onClick:x,size:"large",variant:"contained",children:"Cancel"})}),e.jsx(r,{grow:1,ml:20,children:e.jsx(_,{color:"secondary",size:"large",type:"submit",variant:"contained",children:"Confirm"})})]})]}),D=v(P)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,M=i=>i.charAt(0).toUpperCase()+i.slice(1).replace(/_/g," "),I=i=>i?[...i].sort((x,d)=>Number(d.required)-Number(x.required)):[],ce=({handleSelectType:i,skipToStep:x,selectedNodeType:d,nodeType:n,selectedValues:m,setSelectedValues:b})=>{const[h,C]=u.useState(!1),[j,t]=u.useState(),[s,a]=u.useState(),{watch:c}=V();u.useEffect(()=>{const l=async(p,y)=>{C(!0);const g=await $(p),z=G(g);y(z),C(!1)};n&&l(n,t),d&&l(d,a)},[n,d,c]);const S=u.useMemo(()=>I(j),[j]),o=u.useMemo(()=>I(s),[s]),w=()=>{i(""),x("sourceType")};u.useEffect(()=>{if(j&&s){const l=s.reduce((p,y)=>{const g=j.find(z=>z.key===y.key);return p[y.key]=g?y.key:"none",p},{});b(l)}},[j,s,b]);const f=(l,p)=>{b(y=>({...y,[l]:p}))},A=()=>{const l=S.every(({key:p,required:y})=>!y||y&&m[p]&&m[p]!=="none");x(l?"createConfirmation":"requiredProperties")},F=u.useMemo(()=>o.map(({key:l})=>{const p=m[l]||"none",y=S.filter(g=>!Object.values(m).includes(g.key)||g.key===p).map(g=>({label:M(g.key),value:g.key}));return y.unshift({label:"None",value:"none"}),{key:l,autoCompleteOptions:y,selectedValue:p}}),[o,S,m]);return e.jsxs(r,{children:[e.jsx(r,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(r,{align:"center",direction:"row",children:e.jsx(le,{children:"Map Properties"})})}),e.jsx(pe,{children:h?e.jsx(r,{style:{margin:"auto"},children:e.jsx(Y,{color:q.lightGray})}):e.jsxs(de,{children:[e.jsxs(ue,{children:[e.jsx(k,{children:M(d)}),o.map(({key:l})=>e.jsx(xe,{children:e.jsx(P,{children:M(l)})},l))]}),e.jsxs(me,{children:[e.jsx(k,{children:M(n)}),F.map(({key:l,autoCompleteOptions:p,selectedValue:y})=>e.jsx(r,{children:e.jsx(W,{isLoading:h,onSelect:g=>f(l,g?g.value:"none"),options:p,selectedValue:p.find(g=>g.value===y)})},l))]})]})}),e.jsxs(r,{direction:"row",children:[e.jsx(r,{grow:1,children:e.jsx(_,{color:"secondary",onClick:w,size:"large",variant:"contained",children:"Prev"})}),e.jsx(r,{grow:1,ml:20,children:e.jsx(_,{color:"secondary",disabled:h,onClick:A,size:"large",variant:"contained",children:"Next"})})]})]})},le=v(P)`
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
`,me=v.div`
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
`,he={label:"Not Selected",value:"Not Selected"},fe=[{label:"Corporation",value:"Corporation"},{label:"Event",value:"Event"},{label:"Image",value:"Image"},{label:"Organization",value:"Organization"},{label:"Person",value:"Person"},{label:"Place",value:"Place"},{label:"Project",value:"Project"},{label:"Software",value:"Software"},{label:"Topic",value:"Topic"}],ye=({skipToStep:i,allowNextStep:x,onSelectType:d,selectedType:n})=>{const[m]=J(a=>[a.customSchemaFeatureFlag]),[b,h]=u.useState(null),[C,j]=u.useState(!1),t=U();u.useEffect(()=>{(async()=>{var c;if(m){j(!0);try{const S=await K(),o=["about","schema",(c=t==null?void 0:t.node_type)==null?void 0:c.toLowerCase()],w=S.schemas.filter(f=>f.ref_id&&!o.includes(f.type.toLowerCase())&&!f.is_deleted).map(f=>({label:ne(f.type),value:f.type,action:()=>i("mapProperties")}));h(w)}catch(S){console.warn(S)}finally{j(!1)}}else console.log("data"),h([...fe,he])})()},[t==null?void 0:t.node_type,n,m,i]);const s=a=>{d((a==null?void 0:a.label)||"")};return e.jsxs(r,{children:[e.jsx(r,{align:"center",direction:"row",justify:"space-between",mb:20,children:e.jsx(r,{align:"center",direction:"row",children:e.jsx(ge,{children:"Select Type"})})}),e.jsx(r,{direction:"row",mb:20,children:e.jsx(W,{autoFocus:!0,isLoading:C,onSelect:s,options:b})}),e.jsx(r,{children:e.jsx(_,{color:"secondary",disabled:!x,onClick:()=>i("mapProperties"),size:"large",type:"button",variant:"contained",children:"Next"})})]})},ge=v(P)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,je=async(i,x,d,n)=>{const m={},b=[];Object.entries(d).forEach(([t,s])=>{s!=="none"&&(m[s]=t),t!==s&&b.push(t)});const h={};Object.keys(n||{}).forEach(t=>{const s=n==null?void 0:n[t];Object.entries(m).forEach(([a,c])=>{c===t&&(h[m[a]]=s)})}),Object.keys(i).forEach(t=>{t!=="nodeType"&&(h[t]=i[t])});const C=n?n.node_type.charAt(0).toUpperCase()+n.node_type.slice(1):void 0,j={node_type:x,properties:h,properties_to_be_deleted:b,type_to_be_deleted:C?[C]:[]};try{let t=n==null?void 0:n.ref_id;if((n==null?void 0:n.type)==="topic"){const{data:a}=await Q({search:n==null?void 0:n.name}),c=a.find(S=>S.name===n.name);t=c==null?void 0:c.ref_id}const s=t||(n==null?void 0:n.ref_id);s&&await X(s,j)}catch(t){console.log(t);let s=O;if(t.status===400)try{const a=await t.json();s=a.message||a.errorCode||(a==null?void 0:a.status)||O}catch{s=O}else t instanceof Error&&(s=t.message);throw new Error(s)}},Be=()=>{const[i,x]=u.useState("sourceType"),{close:d,visible:n}=R("changeNodeType"),{open:m}=R("editNodeName"),{open:b}=R("addType"),h=Z({mode:"onChange"}),{watch:C,setValue:j,reset:t}=h,[s,a]=u.useState(""),[c,S]=u.useState({});u.useEffect(()=>()=>{x("sourceType"),t()},[n,t]);const o=U(),w=o!=null&&o.node_type?o.node_type.charAt(0).toUpperCase()+o.node_type.slice(1):"",f=C("nodeType");C("title");const A=()=>{d()},F=T=>{x(T)},l=h.handleSubmit(async T=>{try{await je(T,f,c,o),A()}catch(E){let L=O;if(A(),(E==null?void 0:E.status)===400){const B=await E.json();L=B.errorCode||(B==null?void 0:B.status)||O}else E instanceof Error&&(L=E.message);a(String(L))}}),p=T=>{T==="Create custom type"?b():j("nodeType",T)},y={sourceType:e.jsx(ye,{allowNextStep:!!f,onSelectType:p,selectedType:f,skipToStep:F}),requiredProperties:e.jsx(re,{handleSelectType:p,nodeType:f,selectedValues:c,skipToStep:F}),createConfirmation:e.jsx(ie,{nodeType:f,onclose:A,selectedNodeType:w}),mapProperties:e.jsx(ce,{handleSelectType:p,nodeType:f,selectedNodeType:w,selectedValues:c,setSelectedValues:S,skipToStep:F})},g=i==="mapProperties"?"regular":"small",z=()=>{d(),m()};return e.jsx(ee,{id:"changeNodeType",kind:g,onClose:z,preventOutsideClose:!0,children:e.jsx(N,{...h,children:e.jsx("form",{id:"add-node-form",onSubmit:l,children:y[i]})})})};export{Be as ChangeNodeTypeModal};
