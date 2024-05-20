import{f as b,h as v,T as P,F as r,r as g,j as e,D as W,b1 as I,J as Y,a4 as M,b2 as H,B as D,aZ as B,b4 as J,b6 as Z}from"./index-4cb4a5af.js";import{i as $,C as U,B as T,c as Q,F as X}from"./react-toastify.esm-637e09eb.js";import{B as K}from"./index-34da1bd7.js";import{T as N}from"./index-c192a354.js";import{p as G}from"./index-30d16895.js";import{A as ee}from"./index-c8931ce2.js";import{c as te}from"./index-64f1c910.js";import"./index.esm-8c75acaf.js";import"./InfoIcon-93659641.js";import"./index-5ac8f127.js";import"./Popover-2b36e3c8.js";import"./useSlotProps-419e62d5.js";import"./Popper-7ecaffcb.js";const re=({handleSelectType:j,skipToStep:y,nodeType:x,selectedValues:o})=>{const[h,w]=g.useState(!1),[f,C]=g.useState(),{watch:t,formState:{isValid:i}}=$();g.useEffect(()=>{(async()=>{w(!0);const m=await I(x),u=G(m);C(u),w(!1)})()},[x,t]);const c=s=>s.charAt(0).toUpperCase()+s.slice(1).replace(/_/g," "),p=(f?[...f].sort((s,m)=>s.required&&!m.required?-1:!s.required&&m.required?1:0):[]).filter(s=>!!(s.required&&!Object.values(o).includes(s.key))),S=()=>{j(""),y("sourceType")};return e.jsxs(r,{children:[e.jsx(r,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(r,{align:"center",direction:"row",children:e.jsx(oe,{children:"Required Properties"})})}),e.jsx(ne,{children:h?e.jsx(r,{style:{margin:"auto"},children:e.jsx(U,{color:v.SECONDARY_BLUE})}):e.jsx(r,{className:"input__wrapper",children:p==null?void 0:p.map(({key:s,required:m})=>e.jsx(e.Fragment,{children:e.jsxs(ie,{children:[e.jsx(P,{children:c(s)}),e.jsx(N,{id:"item-name",maxLength:50,name:s,placeholder:m?"Required":"Optional",rules:{...m?W:{}}})]})}))})}),e.jsxs(r,{direction:"row",children:[e.jsx(r,{grow:1,children:e.jsx(T,{color:"secondary",onClick:S,size:"large",variant:"contained",children:"Prev"})}),e.jsx(r,{grow:1,ml:20,children:e.jsx(T,{color:"secondary",disabled:!i||h||(p==null?void 0:p.some(s=>s.required&&!t(s.key))),onClick:()=>y("createConfirmation"),size:"large",variant:"contained",children:"Next"})})]})]})},oe=b(P)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,ne=b(r)`
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
`,ie=b(r)`
  display: flex;
  gap: 10px;

  #item-name {
    color: ${v.GRAY7};
    -webkit-text-fill-color: ${v.GRAY7};
  }
`,se=({nodeType:j,onclose:y,selectedNodeType:x})=>e.jsxs(r,{children:[e.jsx(r,{mb:20,children:e.jsx(L,{children:"Comfirm Type Change"})}),e.jsx(r,{mb:25,children:e.jsxs(L,{children:["From: ",x]})}),e.jsx(r,{mb:25,children:e.jsxs(L,{children:["To: ",j]})}),e.jsxs(r,{direction:"row",children:[e.jsx(r,{grow:1,children:e.jsx(T,{color:"secondary",onClick:y,size:"large",variant:"contained",children:"Cancel"})}),e.jsx(r,{grow:1,ml:20,children:e.jsx(T,{color:"secondary",size:"large",type:"submit",variant:"contained",children:"Confirm"})})]})]}),L=b(P)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,ae=({handleSelectType:j,skipToStep:y,selectedNodeType:x,nodeType:o,selectedValues:h,setSelectedValues:w})=>{const[f,C]=g.useState(!1),[t,i]=g.useState(),[c,d]=g.useState(),{watch:p}=$();g.useEffect(()=>{const n=async(l,a)=>{C(!0);const F=await I(l),A=G(F);a(A),C(!1)};o&&n(o,i),x&&n(x,d)},[o,x,p]);const S=n=>n.charAt(0).toUpperCase()+n.slice(1).replace(/_/g," "),s=t?[...t].sort((n,l)=>n.required&&!l.required?-1:!n.required&&l.required?1:0):[],m=c?[...c].sort((n,l)=>n.required&&!l.required?-1:!n.required&&l.required?1:0):[],u=()=>{j(""),y("sourceType")};g.useEffect(()=>{if(t&&c){const n=c.reduce((l,a)=>{const F=t.find(A=>A.key===a.key);return l[a.key]=F?a.key:"none",l},{});w(n)}},[t,c,w]);const O=(n,l)=>{w(a=>({...a,[n]:l}))};return e.jsxs(r,{children:[e.jsx(r,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(r,{align:"center",direction:"row",children:e.jsx(ce,{children:"Map Properties"})})}),e.jsx(le,{children:f?e.jsx(r,{style:{margin:"auto"},children:e.jsx(U,{color:v.SECONDARY_BLUE})}):e.jsxs(de,{children:[e.jsxs(pe,{children:[e.jsx(k,{children:S(x)}),m.map(({key:n})=>e.jsx(ue,{children:e.jsx(P,{children:S(n)})},n))]}),e.jsxs(xe,{children:[e.jsx(k,{children:S(o)}),m.map(({key:n})=>{const l=h[n]||"none";return e.jsx(g.Fragment,{children:e.jsxs(he,{onChange:a=>O(n,a.target.value),value:l,children:[e.jsx(R,{value:"none",children:"None"}),s.filter(a=>!Object.values(h).includes(a.key)||a.key===l).map(({key:a})=>e.jsx(R,{value:a,children:S(a)},a))]})},n)})]})]})}),e.jsxs(r,{direction:"row",children:[e.jsx(r,{grow:1,children:e.jsx(T,{color:"secondary",onClick:u,size:"large",variant:"contained",children:"Prev"})}),e.jsx(r,{grow:1,ml:20,children:e.jsx(T,{color:"secondary",disabled:f,onClick:()=>{const n=m.every(({key:l,required:a})=>!a||a&&h[l]&&h[l]!=="none");y(n?"createConfirmation":"requiredProperties")},size:"large",variant:"contained",children:"Next"})})]})]})},ce=b(P)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,le=b(r)`
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
`,de=b.div`
  display: flex;
`,pe=b.div`
  flex: 1;
  margin-right: 16px;
`,ue=b.div`
  margin-bottom: 8px;
`,xe=b.div`
  width: 200px;
`,he=b.select`
  width: 100%;
  color: #fff;
  font-size: 15px;
  background-color: ${v.BG2};
  border-radius: 6px;
  padding: 2px 8px;
  margin-bottom: 8px;
  border: none;
  box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);

  &:focus {
    background-color: ${v.BG2_ACTIVE_INPUT};
    outline: 1px solid ${v.primaryBlue};
  }
`,R=b.option`
  background-color: ${v.DROPDOWN_BG};
  color: #fff;

  &:hover,
  &:focus {
    background-color: black;
  }

  &[aria-selected='true'] {
    background-color: ${v.DROPDOWN_SELECTED};
  }
`,k=b.h3`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 8px;
  font-family: 'Barlow';
  color: white;
  margin-bottom: 15px;
`,fe={label:"Not Selected",value:"Not Selected"},me=[{label:"Corporation",value:"Corporation"},{label:"Event",value:"Event"},{label:"Image",value:"Image"},{label:"Organization",value:"Organization"},{label:"Person",value:"Person"},{label:"Place",value:"Place"},{label:"Project",value:"Project"},{label:"Software",value:"Software"},{label:"Topic",value:"Topic"}],ge=({skipToStep:j,allowNextStep:y,onSelectType:x,selectedType:o})=>{const[h]=Y(d=>[d.customSchemaFeatureFlag]),[w,f]=g.useState(null),[C,t]=g.useState(!1),i=M();g.useEffect(()=>{(async()=>{var p;if(h){t(!0);try{const S=await H(),s=["about","schema",(p=i==null?void 0:i.node_type)==null?void 0:p.toLowerCase()],m=S.schemas.filter(u=>u.ref_id&&!s.includes(u.type.toLowerCase())&&!u.is_deleted).map(u=>({label:te(u.type),value:u.type,action:()=>j("mapProperties")}));f(m)}catch(S){console.warn(S)}finally{t(!1)}}else console.log("data"),f([...me,fe])})()},[i==null?void 0:i.node_type,o,h,j]);const c=d=>{x((d==null?void 0:d.label)||"")};return e.jsxs(r,{children:[e.jsx(r,{align:"center",direction:"row",justify:"space-between",mb:20,children:e.jsx(r,{align:"center",direction:"row",children:e.jsx(je,{children:"Select Type"})})}),e.jsx(r,{direction:"row",mb:20,children:e.jsx(ee,{autoFocus:!0,isLoading:C,onSelect:c,options:w})}),e.jsx(r,{children:e.jsx(T,{color:"secondary",disabled:!y,onClick:()=>j("mapProperties"),size:"large",type:"button",variant:"contained",children:"Next"})})]})},je=b(P)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,ye=async(j,y,x,o)=>{const h={},w=[];Object.entries(x).forEach(([t,i])=>{i!=="none"&&(h[i]=t),t!==i&&w.push(t)});const f={};Object.keys(o||{}).forEach(t=>{const i=o==null?void 0:o[t];Object.entries(h).forEach(([c,d])=>{d===t&&(f[h[c]]=i)})}),Object.keys(j).forEach(t=>{t!=="nodeType"&&(f[t]=j[t])});const C={node_type:y,properties:f,properties_to_be_deleted:w};try{let t=o==null?void 0:o.ref_id;if((o==null?void 0:o.type)==="topic"){const{data:c}=await J({search:o==null?void 0:o.name}),d=c.find(p=>p.name===o.name);t=d==null?void 0:d.ref_id}const i=t||(o==null?void 0:o.ref_id);i&&await Z(i,C)}catch(t){console.log(t);let i=B;if(t.status===400)try{const c=await t.json();i=c.message||c.errorCode||(c==null?void 0:c.status)||B}catch{i=B}else t instanceof Error&&(i=t.message);throw new Error(i)}},qe=()=>{const[j,y]=g.useState("sourceType"),{close:x,visible:o}=D("changeNodeType"),{open:h}=D("editNodeName"),{open:w}=D("addType"),f=Q({mode:"onChange"}),{watch:C,setValue:t,reset:i}=f,[c,d]=g.useState(""),[p,S]=g.useState({});g.useEffect(()=>()=>{y("sourceType"),i()},[o,i]);const s=M(),m=s!=null&&s.node_type?s.node_type.charAt(0).toUpperCase()+s.node_type.slice(1):"",u=C("nodeType");C("title");const O=()=>{x()},n=_=>{y(_)},l=f.handleSubmit(async _=>{try{await ye(_,u,p,s),O()}catch(E){let z=B;if(O(),(E==null?void 0:E.status)===400){const q=await E.json();z=q.errorCode||(q==null?void 0:q.status)||B}else E instanceof Error&&(z=E.message);d(String(z))}}),a=_=>{_==="Create custom type"?w():t("nodeType",_)},F={sourceType:e.jsx(ge,{allowNextStep:!!u,onSelectType:a,selectedType:u,skipToStep:n}),requiredProperties:e.jsx(re,{handleSelectType:a,nodeType:u,selectedValues:p,skipToStep:n}),createConfirmation:e.jsx(se,{nodeType:u,onclose:O,selectedNodeType:m}),mapProperties:e.jsx(ae,{handleSelectType:a,nodeType:u,selectedNodeType:m,selectedValues:p,setSelectedValues:S,skipToStep:n})},A=j==="mapProperties"?"regular":"small",V=()=>{x(),h()};return e.jsx(K,{id:"changeNodeType",kind:A,onClose:V,preventOutsideClose:!0,children:e.jsx(X,{...f,children:e.jsx("form",{id:"add-node-form",onSubmit:l,children:F[j]})})})};export{qe as ChangeNodeTypeModal};
