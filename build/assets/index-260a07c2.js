import{f as b,T as P,j as e,F as r,h as v,r as g,b1 as k,I as W,a3 as M,b3 as Y,C as H,b2 as q,bj as J,bl as Q}from"./index-a4c64423.js";import{B as T,i as $,C as U,c as X,F as Z}from"./react-toastify.esm-ef542b01.js";import{B as N}from"./index-85565bb3.js";import{u as D}from"./index-77834080.js";import{p as G}from"./index-30d16895.js";import{A as K}from"./index-2600196c.js";import{c as ee}from"./index-64f1c910.js";import{T as te}from"./index-e70a78c4.js";import"./index-5547c7ee.js";import"./Popover-70ce2792.js";import"./useSlotProps-85785303.js";import"./Popper-4441326d.js";import"./index.esm-8f3b8db4.js";import"./InfoIcon-3c0fbdc4.js";const re=({nodeType:j,onclose:y,selectedNodeType:x})=>e.jsxs(r,{children:[e.jsx(r,{mb:20,children:e.jsx(I,{children:"Comfirm Type Change"})}),e.jsx(r,{mb:25,children:e.jsxs(I,{children:["From: ",x]})}),e.jsx(r,{mb:25,children:e.jsxs(I,{children:["To: ",j]})}),e.jsxs(r,{direction:"row",children:[e.jsx(r,{grow:1,children:e.jsx(T,{color:"secondary",onClick:y,size:"large",variant:"contained",children:"Cancel"})}),e.jsx(r,{grow:1,ml:20,children:e.jsx(T,{color:"secondary",size:"large",type:"submit",variant:"contained",children:"Confirm"})})]})]}),I=b(P)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,oe=({handleSelectType:j,skipToStep:y,selectedNodeType:x,nodeType:i,selectedValues:h,setSelectedValues:w})=>{const[f,S]=g.useState(!1),[t,n]=g.useState(),[c,d]=g.useState(),{watch:p}=$();g.useEffect(()=>{const o=async(l,a)=>{S(!0);const F=await k(l),A=G(F);a(A),S(!1)};i&&o(i,n),x&&o(x,d)},[i,x,p]);const C=o=>o.charAt(0).toUpperCase()+o.slice(1).replace(/_/g," "),s=t?[...t].sort((o,l)=>o.required&&!l.required?-1:!o.required&&l.required?1:0):[],m=c?[...c].sort((o,l)=>o.required&&!l.required?-1:!o.required&&l.required?1:0):[],u=()=>{j(""),y("sourceType")};g.useEffect(()=>{if(t&&c){const o=c.reduce((l,a)=>{const F=t.find(A=>A.key===a.key);return l[a.key]=F?a.key:"none",l},{});w(o)}},[t,c,w]);const O=(o,l)=>{w(a=>({...a,[o]:l}))};return e.jsxs(r,{children:[e.jsx(r,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(r,{align:"center",direction:"row",children:e.jsx(ne,{children:"Map Properties"})})}),e.jsx(se,{children:f?e.jsx(r,{style:{margin:"auto"},children:e.jsx(U,{color:v.SECONDARY_BLUE})}):e.jsxs(ie,{children:[e.jsxs(ae,{children:[e.jsx(R,{children:C(x)}),m.map(({key:o})=>e.jsx(ce,{children:e.jsx(P,{children:C(o)})},o))]}),e.jsxs(le,{children:[e.jsx(R,{children:C(i)}),m.map(({key:o})=>{const l=h[o]||"none";return e.jsx(g.Fragment,{children:e.jsxs(de,{onChange:a=>O(o,a.target.value),value:l,children:[e.jsx(L,{value:"none",children:"None"}),s.filter(a=>!Object.values(h).includes(a.key)||a.key===l).map(({key:a})=>e.jsx(L,{value:a,children:C(a)},a))]})},o)})]})]})}),e.jsxs(r,{direction:"row",children:[e.jsx(r,{grow:1,children:e.jsx(T,{color:"secondary",onClick:u,size:"large",variant:"contained",children:"Prev"})}),e.jsx(r,{grow:1,ml:20,children:e.jsx(T,{color:"secondary",disabled:f,onClick:()=>{const o=m.every(({key:l,required:a})=>!a||a&&h[l]&&h[l]!=="none");y(o?"createConfirmation":"requiredProperties")},size:"large",variant:"contained",children:"Next"})})]})]})},ne=b(P)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,se=b(r)`
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
`,ie=b.div`
  display: flex;
`,ae=b.div`
  flex: 1;
  margin-right: 16px;
`,ce=b.div`
  margin-bottom: 8px;
`,le=b.div`
  width: 200px;
`,de=b.select`
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
`,L=b.option`
  background-color: ${v.DROPDOWN_BG};
  color: #fff;

  &:hover,
  &:focus {
    background-color: black;
  }

  &[aria-selected='true'] {
    background-color: ${v.DROPDOWN_SELECTED};
  }
`,R=b.h3`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 8px;
  font-family: 'Barlow';
  color: white;
  margin-bottom: 15px;
`,pe={label:"Not Selected",value:"Not Selected"},ue=[{label:"Corporation",value:"Corporation"},{label:"Event",value:"Event"},{label:"Image",value:"Image"},{label:"Organization",value:"Organization"},{label:"Person",value:"Person"},{label:"Place",value:"Place"},{label:"Project",value:"Project"},{label:"Software",value:"Software"},{label:"Topic",value:"Topic"}],xe=({skipToStep:j,allowNextStep:y,onSelectType:x,selectedType:i})=>{const[h]=W(d=>[d.customSchemaFeatureFlag]),[w,f]=g.useState(null),[S,t]=g.useState(!1),n=M();g.useEffect(()=>{(async()=>{var p;if(h){t(!0);try{const C=await Y(),s=["about","schema",(p=n==null?void 0:n.node_type)==null?void 0:p.toLowerCase()],m=C.schemas.filter(u=>u.ref_id&&!s.includes(u.type.toLowerCase())&&!u.is_deleted).map(u=>({label:ee(u.type),value:u.type,action:()=>j("mapProperties")}));f(m)}catch(C){console.warn(C)}finally{t(!1)}}else console.log("data"),f([...ue,pe])})()},[n==null?void 0:n.node_type,i,h,j]);const c=d=>{x((d==null?void 0:d.label)||"")};return e.jsxs(r,{children:[e.jsx(r,{align:"center",direction:"row",justify:"space-between",mb:20,children:e.jsx(r,{align:"center",direction:"row",children:e.jsx(he,{children:"Select Type"})})}),e.jsx(r,{direction:"row",mb:20,children:e.jsx(K,{autoFocus:!0,isLoading:S,onSelect:c,options:w})}),e.jsx(r,{children:e.jsx(T,{color:"secondary",disabled:!y,onClick:()=>j("mapProperties"),size:"large",type:"button",variant:"contained",children:"Next"})})]})},he=b(P)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,fe=({handleSelectType:j,skipToStep:y,nodeType:x,selectedValues:i})=>{const[h,w]=g.useState(!1),[f,S]=g.useState(),{watch:t,formState:{isValid:n}}=$();g.useEffect(()=>{(async()=>{w(!0);const m=await k(x),u=G(m);S(u),w(!1)})()},[x,t]);const c=s=>s.charAt(0).toUpperCase()+s.slice(1).replace(/_/g," "),p=(f?[...f].sort((s,m)=>s.required&&!m.required?-1:!s.required&&m.required?1:0):[]).filter(s=>!!(s.required&&!Object.values(i).includes(s.key))),C=()=>{j(""),y("sourceType")};return e.jsxs(r,{children:[e.jsx(r,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(r,{align:"center",direction:"row",children:e.jsx(me,{children:"Required Properties"})})}),e.jsx(ge,{children:h?e.jsx(r,{style:{margin:"auto"},children:e.jsx(U,{color:v.SECONDARY_BLUE})}):e.jsx(r,{className:"input__wrapper",children:p==null?void 0:p.map(({key:s,required:m})=>e.jsx(e.Fragment,{children:e.jsxs(je,{children:[e.jsx(P,{children:c(s)}),e.jsx(te,{id:"item-name",maxLength:50,name:s,placeholder:m?"Required":"Optional",rules:{...m?H:{}}})]})}))})}),e.jsxs(r,{direction:"row",children:[e.jsx(r,{grow:1,children:e.jsx(T,{color:"secondary",onClick:C,size:"large",variant:"contained",children:"Prev"})}),e.jsx(r,{grow:1,ml:20,children:e.jsx(T,{color:"secondary",disabled:!n||h||(p==null?void 0:p.some(s=>s.required&&!t(s.key))),onClick:()=>y("createConfirmation"),size:"large",variant:"contained",children:"Next"})})]})]})},me=b(P)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,ge=b(r)`
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
`,je=b(r)`
  display: flex;
  gap: 10px;

  #item-name {
    color: ${v.GRAY7};
    -webkit-text-fill-color: ${v.GRAY7};
  }
`,ye=async(j,y,x,i)=>{const h={},w=[];Object.entries(x).forEach(([t,n])=>{n!=="none"&&(h[n]=t),t!==n&&w.push(t)});const f={};Object.keys(i||{}).forEach(t=>{const n=i==null?void 0:i[t];Object.entries(h).forEach(([c,d])=>{d===t&&(f[h[c]]=n)})}),Object.keys(j).forEach(t=>{t!=="nodeType"&&(f[t]=j[t])});const S={node_type:y,properties:f,properties_to_be_deleted:w};try{let t="";if((i==null?void 0:i.type)==="topic"){const{data:c}=await J({search:i==null?void 0:i.name}),d=c.find(p=>p.name===i.name);t=d==null?void 0:d.ref_id}const n=t??(i==null?void 0:i.ref_id);console.log(n,S),await Q(n,S)}catch(t){let n=q;if(t.status===400)try{const c=await t.json();n=c.message||c.errorCode||(c==null?void 0:c.status)||q}catch{n=q}else t instanceof Error&&(n=t.message);throw new Error(n)}},Be=()=>{const[j,y]=g.useState("sourceType"),{close:x,visible:i}=D("changeNodeType"),{open:h}=D("editNodeName"),{open:w}=D("addType"),f=X({mode:"onChange"}),{watch:S,setValue:t,reset:n}=f,[c,d]=g.useState(""),[p,C]=g.useState({});g.useEffect(()=>()=>{y("sourceType"),n()},[i,n]);const s=M(),m=s!=null&&s.node_type?s.node_type.charAt(0).toUpperCase()+s.node_type.slice(1):"",u=S("nodeType");S("title");const O=()=>{x()},o=E=>{y(E)},l=f.handleSubmit(async E=>{try{await ye(E,u,p,s),O()}catch(_){let B=q;if(O(),(_==null?void 0:_.status)===400){const z=await _.json();B=z.errorCode||(z==null?void 0:z.status)||q}else _ instanceof Error&&(B=_.message);d(String(B))}}),a=E=>{E==="Create custom type"?w():t("nodeType",E)},F={sourceType:e.jsx(xe,{allowNextStep:!!u,onSelectType:a,selectedType:u,skipToStep:o}),requiredProperties:e.jsx(fe,{handleSelectType:a,nodeType:u,selectedValues:p,skipToStep:o}),createConfirmation:e.jsx(re,{nodeType:u,onclose:O,selectedNodeType:m}),mapProperties:e.jsx(oe,{handleSelectType:a,nodeType:u,selectedNodeType:m,selectedValues:p,setSelectedValues:C,skipToStep:o})},A=j==="mapProperties"?"regular":"small",V=()=>{x(),h()};return e.jsx(N,{id:"changeNodeType",kind:A,onClose:V,preventOutsideClose:!0,children:e.jsx(Z,{...f,children:e.jsx("form",{id:"add-node-form",onSubmit:l,children:F[j]})})})};export{Be as ChangeNodeTypeModal};
