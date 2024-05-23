import{f as C,h as z,T as P,F as r,r as w,j as e,D as W,b1 as D,J as G,a4 as I,b2 as H,B as L,aZ as q,b4 as J,b6 as Z}from"./index-b17e6e7f.js";import{i as k,C as $,B as T,c as K,F as Q}from"./react-toastify.esm-ac6bd257.js";import{B as X}from"./index-a41ce7c3.js";import{T as N}from"./index-922af843.js";import{p as U}from"./index-30d16895.js";import{A as V}from"./index-070c6dfb.js";import{c as ee}from"./index-64f1c910.js";import"./index.esm-de2ad175.js";import"./InfoIcon-eed706a9.js";import"./index-b0a49808.js";import"./Popover-bcd53c70.js";import"./useSlotProps-ddc77366.js";import"./Popper-f6f28cec.js";const te=({handleSelectType:j,skipToStep:y,nodeType:f,selectedValues:n})=>{const[h,b]=w.useState(!1),[p,v]=w.useState(),{watch:t,formState:{isValid:i}}=k();w.useEffect(()=>{(async()=>{b(!0);const m=await D(f),x=U(m);v(x),b(!1)})()},[f,t]);const a=s=>s.charAt(0).toUpperCase()+s.slice(1).replace(/_/g," "),u=(p?[...p].sort((s,m)=>s.required&&!m.required?-1:!s.required&&m.required?1:0):[]).filter(s=>!!(s.required&&!Object.values(n).includes(s.key))),S=()=>{j(""),y("sourceType")};return e.jsxs(r,{children:[e.jsx(r,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(r,{align:"center",direction:"row",children:e.jsx(re,{children:"Required Properties"})})}),e.jsx(ne,{children:h?e.jsx(r,{style:{margin:"auto"},children:e.jsx($,{color:z.SECONDARY_BLUE})}):e.jsx(r,{className:"input__wrapper",children:u==null?void 0:u.map(({key:s,required:m})=>e.jsx(e.Fragment,{children:e.jsxs(oe,{children:[e.jsx(P,{children:a(s)}),e.jsx(N,{id:"item-name",maxLength:50,name:s,placeholder:m?"Required":"Optional",rules:{...m?W:{}}})]})}))})}),e.jsxs(r,{direction:"row",children:[e.jsx(r,{grow:1,children:e.jsx(T,{color:"secondary",onClick:S,size:"large",variant:"contained",children:"Prev"})}),e.jsx(r,{grow:1,ml:20,children:e.jsx(T,{color:"secondary",disabled:!i||h||(u==null?void 0:u.some(s=>s.required&&!t(s.key))),onClick:()=>y("createConfirmation"),size:"large",variant:"contained",children:"Next"})})]})]})},re=C(P)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,ne=C(r)`
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
`,oe=C(r)`
  display: flex;
  gap: 10px;

  #item-name {
    color: ${z.GRAY7};
    -webkit-text-fill-color: ${z.GRAY7};
  }
`,ie=({nodeType:j,onclose:y,selectedNodeType:f})=>e.jsxs(r,{children:[e.jsx(r,{mb:20,children:e.jsx(M,{children:"Confirm Type Change"})}),e.jsx(r,{mb:25,children:e.jsxs(M,{children:["From: ",f]})}),e.jsx(r,{mb:25,children:e.jsxs(M,{children:["To: ",j]})}),e.jsxs(r,{direction:"row",children:[e.jsx(r,{grow:1,children:e.jsx(T,{color:"secondary",onClick:y,size:"large",variant:"contained",children:"Cancel"})}),e.jsx(r,{grow:1,ml:20,children:e.jsx(T,{color:"secondary",size:"large",type:"submit",variant:"contained",children:"Confirm"})})]})]}),M=C(P)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,se=({handleSelectType:j,skipToStep:y,selectedNodeType:f,nodeType:n,selectedValues:h,setSelectedValues:b})=>{const[p,v]=w.useState(!1),[t,i]=w.useState(),[a,d]=w.useState(),{watch:u}=k();w.useEffect(()=>{const o=async(c,l)=>{v(!0);const g=await D(c),O=U(g);l(O),v(!1)};n&&o(n,i),f&&o(f,d)},[n,f,u]);const S=o=>o.charAt(0).toUpperCase()+o.slice(1).replace(/_/g," "),s=t?[...t].sort((o,c)=>o.required&&!c.required?-1:!o.required&&c.required?1:0):[],m=a?[...a].sort((o,c)=>o.required&&!c.required?-1:!o.required&&c.required?1:0):[],x=()=>{j(""),y("sourceType")};w.useEffect(()=>{if(t&&a){const o=a.reduce((c,l)=>{const g=t.find(O=>O.key===l.key);return c[l.key]=g?l.key:"none",c},{});b(o)}},[t,a,b]);const F=(o,c)=>{b(l=>({...l,[o]:c}))};return e.jsxs(r,{children:[e.jsx(r,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(r,{align:"center",direction:"row",children:e.jsx(ae,{children:"Map Properties"})})}),e.jsx(ce,{children:p?e.jsx(r,{style:{margin:"auto"},children:e.jsx($,{color:z.SECONDARY_BLUE})}):e.jsxs(le,{children:[e.jsxs(pe,{children:[e.jsx(R,{children:S(f)}),m.map(({key:o})=>e.jsx(de,{children:e.jsx(P,{children:S(o)})},o))]}),e.jsxs(ue,{children:[e.jsx(R,{children:S(n)}),m.map(({key:o})=>{const c=h[o]||"none",l=s.filter(g=>!Object.values(h).includes(g.key)||g.key===c).map(g=>({label:S(g.key),value:g.key}));return l.unshift({label:"None",value:"none"}),e.jsx(r,{children:e.jsx(V,{isLoading:p,onSelect:g=>F(o,g?g.value:"none"),options:l,selectedValue:l.find(g=>g.value===c)})},o)})]})]})}),e.jsxs(r,{direction:"row",children:[e.jsx(r,{grow:1,children:e.jsx(T,{color:"secondary",onClick:x,size:"large",variant:"contained",children:"Prev"})}),e.jsx(r,{grow:1,ml:20,children:e.jsx(T,{color:"secondary",disabled:p,onClick:()=>{const o=m.every(({key:c,required:l})=>!l||l&&h[c]&&h[c]!=="none");y(o?"createConfirmation":"requiredProperties")},size:"large",variant:"contained",children:"Next"})})]})]})},ae=C(P)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,ce=C(r)`
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
`,le=C.div`
  display: flex;
  justify-content: space-between;
`,pe=C.div`
  flex: 1;
  margin-right: 16px;
`,de=C.div`
  display: flex;
  gap: 16px;
  margin-top: 38px;
`,ue=C.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
`,R=C.h3`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 8px;
  font-family: 'Barlow';
  color: white;
  margin-bottom: 15px;
`,xe={label:"Not Selected",value:"Not Selected"},fe=[{label:"Corporation",value:"Corporation"},{label:"Event",value:"Event"},{label:"Image",value:"Image"},{label:"Organization",value:"Organization"},{label:"Person",value:"Person"},{label:"Place",value:"Place"},{label:"Project",value:"Project"},{label:"Software",value:"Software"},{label:"Topic",value:"Topic"}],he=({skipToStep:j,allowNextStep:y,onSelectType:f,selectedType:n})=>{const[h]=G(d=>[d.customSchemaFeatureFlag]),[b,p]=w.useState(null),[v,t]=w.useState(!1),i=I();w.useEffect(()=>{(async()=>{var u;if(h){t(!0);try{const S=await H(),s=["about","schema",(u=i==null?void 0:i.node_type)==null?void 0:u.toLowerCase()],m=S.schemas.filter(x=>x.ref_id&&!s.includes(x.type.toLowerCase())&&!x.is_deleted).map(x=>({label:ee(x.type),value:x.type,action:()=>j("mapProperties")}));p(m)}catch(S){console.warn(S)}finally{t(!1)}}else console.log("data"),p([...fe,xe])})()},[i==null?void 0:i.node_type,n,h,j]);const a=d=>{f((d==null?void 0:d.label)||"")};return e.jsxs(r,{children:[e.jsx(r,{align:"center",direction:"row",justify:"space-between",mb:20,children:e.jsx(r,{align:"center",direction:"row",children:e.jsx(me,{children:"Select Type"})})}),e.jsx(r,{direction:"row",mb:20,children:e.jsx(V,{autoFocus:!0,isLoading:v,onSelect:a,options:b})}),e.jsx(r,{children:e.jsx(T,{color:"secondary",disabled:!y,onClick:()=>j("mapProperties"),size:"large",type:"button",variant:"contained",children:"Next"})})]})},me=C(P)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,ge=async(j,y,f,n)=>{const h={},b=[];Object.entries(f).forEach(([t,i])=>{i!=="none"&&(h[i]=t),t!==i&&b.push(t)});const p={};Object.keys(n||{}).forEach(t=>{const i=n==null?void 0:n[t];Object.entries(h).forEach(([a,d])=>{d===t&&(p[h[a]]=i)})}),Object.keys(j).forEach(t=>{t!=="nodeType"&&(p[t]=j[t])});const v={node_type:y,properties:p,properties_to_be_deleted:b};try{let t=n==null?void 0:n.ref_id;if((n==null?void 0:n.type)==="topic"){const{data:a}=await J({search:n==null?void 0:n.name}),d=a.find(u=>u.name===n.name);t=d==null?void 0:d.ref_id}const i=t||(n==null?void 0:n.ref_id);i&&await Z(i,v)}catch(t){console.log(t);let i=q;if(t.status===400)try{const a=await t.json();i=a.message||a.errorCode||(a==null?void 0:a.status)||q}catch{i=q}else t instanceof Error&&(i=t.message);throw new Error(i)}},qe=()=>{const[j,y]=w.useState("sourceType"),{close:f,visible:n}=L("changeNodeType"),{open:h}=L("editNodeName"),{open:b}=L("addType"),p=K({mode:"onChange"}),{watch:v,setValue:t,reset:i}=p,[a,d]=w.useState(""),[u,S]=w.useState({});w.useEffect(()=>()=>{y("sourceType"),i()},[n,i]);const s=I(),m=s!=null&&s.node_type?s.node_type.charAt(0).toUpperCase()+s.node_type.slice(1):"",x=v("nodeType");v("title");const F=()=>{f()},o=_=>{y(_)},c=p.handleSubmit(async _=>{try{await ge(_,x,u,s),F()}catch(E){let B=q;if(F(),(E==null?void 0:E.status)===400){const A=await E.json();B=A.errorCode||(A==null?void 0:A.status)||q}else E instanceof Error&&(B=E.message);d(String(B))}}),l=_=>{_==="Create custom type"?b():t("nodeType",_)},g={sourceType:e.jsx(he,{allowNextStep:!!x,onSelectType:l,selectedType:x,skipToStep:o}),requiredProperties:e.jsx(te,{handleSelectType:l,nodeType:x,selectedValues:u,skipToStep:o}),createConfirmation:e.jsx(ie,{nodeType:x,onclose:F,selectedNodeType:m}),mapProperties:e.jsx(se,{handleSelectType:l,nodeType:x,selectedNodeType:m,selectedValues:u,setSelectedValues:S,skipToStep:o})},O=j==="mapProperties"?"regular":"small",Y=()=>{f(),h()};return e.jsx(X,{id:"changeNodeType",kind:O,onClose:Y,preventOutsideClose:!0,children:e.jsx(Q,{...p,children:e.jsx("form",{id:"add-node-form",onSubmit:c,children:g[j]})})})};export{qe as ChangeNodeTypeModal};
