import{f,T as C,j as e,F as t,h as O,r as g,b1 as V,C as F,I as G,a3 as H,b3 as W,x as Y,i as Q,b2 as S,U as M,bi as X,o as Z,bg as K}from"./index-3d20ff9a.js";import{B as T,i as ee,C as te,c as oe,F as ne}from"./react-toastify.esm-14e72500.js";import{B as re}from"./index-4abd6777.js";import{u as L}from"./index-7673e63f.js";import{p as se}from"./index-30d16895.js";import{T as I}from"./index-f9307d96.js";import{A as ae}from"./index-4abd2133.js";import{c as ie}from"./index-64f1c910.js";import"./index.esm-adc38578.js";import"./InfoIcon-c7ed135c.js";import"./index-f3dbd749.js";import"./Popover-f39183de.js";import"./useSlotProps-c5c9b9a4.js";import"./Popper-efa3285c.js";const ce=({type:r,onclose:m})=>e.jsxs(t,{children:[e.jsx(t,{mb:20,children:e.jsx(B,{children:"Comfirm New Type"})}),e.jsx(t,{mb:25,children:e.jsxs(B,{children:["Type: ",r]})}),e.jsxs(t,{direction:"row",children:[e.jsx(t,{grow:1,children:e.jsx(T,{color:"secondary",onClick:m,size:"large",variant:"contained",children:"Cancel"})}),e.jsx(t,{grow:1,ml:20,children:e.jsx(T,{color:"secondary",size:"large",type:"submit",variant:"contained",children:"Confirm"})})]})]}),B=f(C)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,le=({handleSelectType:r,skipToStep:m,nodeType:u})=>{const[y,x]=g.useState(!1),[s,d]=g.useState(),{watch:c,formState:{isValid:h}}=ee();g.useEffect(()=>{(async()=>{x(!0);const a=await V(u),E=se(a);d(E),x(!1)})()},[u,c]);const p=o=>o.charAt(0).toUpperCase()+o.slice(1).replace(/_/g," "),l=s?[...s].sort((o,a)=>o.required&&!a.required?-1:!o.required&&a.required?1:0):[],n=()=>{r(""),m("sourceType")};return e.jsxs(t,{children:[e.jsx(t,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(t,{align:"center",direction:"row",children:e.jsx(de,{children:"Map Properties"})})}),e.jsx(pe,{children:y?e.jsx(t,{style:{margin:"auto"},children:e.jsx(te,{color:O.SECONDARY_BLUE})}):e.jsxs(me,{children:[e.jsx(ue,{children:l==null?void 0:l.map(({key:o})=>e.jsx(xe,{children:e.jsx(C,{children:p(o)})},o))}),e.jsx(he,{children:l==null?void 0:l.map(({key:o})=>e.jsx(ye,{children:l.map(({key:a})=>e.jsx("option",{value:a,children:a},a))},o))})]})}),e.jsxs(t,{direction:"row",children:[e.jsx(t,{grow:1,children:e.jsx(T,{color:"secondary",onClick:n,size:"large",variant:"contained",children:"Prev"})}),e.jsx(t,{grow:1,ml:20,children:e.jsx(T,{color:"secondary",disabled:!h||y||(s==null?void 0:s.some(o=>o.required&&!c(o.key))),onClick:()=>m("source"),size:"large",variant:"contained",children:"Next"})})]})]})},de=f(C)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,pe=f(t)`
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
`,me=f.div`
  display: flex;
`,ue=f.div`
  flex: 1;
  margin-right: 16px;
`,xe=f.div`
  margin-bottom: 8px;
`,he=f.div`
  width: 200px;
`,ye=f.select`
  width: 100%;
  color: #fff;
  font-size: 15px;
  box-shadow: none;
  border-radius: 6px;
  pointer-events: auto;
  background-color: ${O.BG2};
  box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);
  padding: 0 8px;
`,fe=({type:r,skipToStep:m,name:u,sourceLink:y})=>{const x=r==="Image"?u&&y:u;return e.jsxs(t,{children:[e.jsx(t,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(t,{align:"center",direction:"row",children:e.jsx(ge,{children:"Enter details"})})}),e.jsx(t,{mb:4,children:e.jsxs(C,{children:[r," name"]})}),e.jsx(t,{mb:12,children:e.jsx(I,{id:"cy-item-name",maxLength:250,name:"typeName",placeholder:"Paste name here...",rules:{...F}})}),r==="Image"?e.jsxs(e.Fragment,{children:[e.jsx(t,{mb:4,children:e.jsx(C,{children:"Link"})}),e.jsx(t,{mb:12,children:e.jsx(I,{id:"cy-item-link",maxLength:250,name:"sourceLink",placeholder:"Paste link here...",rules:{...F}})})]}):null,e.jsxs(t,{direction:"row",children:[e.jsx(t,{grow:1,children:e.jsx(T,{color:"secondary",onClick:()=>m("sourceType"),size:"large",variant:"contained",children:"Prev"})}),e.jsx(t,{grow:1,ml:20,children:e.jsx(T,{color:"secondary",disabled:!x,onClick:()=>m("mapProperties"),size:"large",variant:"contained",children:"Next"})})]})]})},ge=f(C)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,je={label:"Not Selected",value:"Not Selected"},we=[{label:"Corporation",value:"Corporation"},{label:"Event",value:"Event"},{label:"Image",value:"Image"},{label:"Organization",value:"Organization"},{label:"Person",value:"Person"},{label:"Place",value:"Place"},{label:"Project",value:"Project"},{label:"Software",value:"Software"},{label:"Topic",value:"Topic"}],be=({skipToStep:r,allowNextStep:m,onSelectType:u,selectedType:y})=>{const[x]=G(n=>[n.customSchemaFeatureFlag]),[s,d]=g.useState(null),[c,h]=g.useState(!1),p=H();g.useEffect(()=>{(async()=>{var o;if(x){h(!0);try{const a=await W(),E=["about","schema",(o=p==null?void 0:p.node_type)==null?void 0:o.toLowerCase()],N=a.schemas.filter(j=>j.ref_id&&!E.includes(j.type.toLowerCase())&&!j.is_deleted).map(j=>({label:ie(j.type),value:j.type,action:()=>r("mapProperties")}));d(N)}catch(a){console.warn(a)}finally{h(!1)}}else console.log("data"),d([...we,je])})()},[p==null?void 0:p.node_type,y,x,r]);const l=n=>{u((n==null?void 0:n.label)||"")};return e.jsxs(t,{children:[e.jsx(t,{align:"center",direction:"row",justify:"space-between",mb:20,children:e.jsx(t,{align:"center",direction:"row",children:e.jsx(Se,{children:"Select Type"})})}),e.jsx(t,{direction:"row",mb:20,children:e.jsx(ae,{autoFocus:!0,isLoading:c,onSelect:l,options:s})}),e.jsx(t,{children:e.jsx(T,{color:"secondary",disabled:!m,onClick:()=>r("source"),size:"large",type:"button",variant:"contained",children:"Next"})})]})},Se=f(C)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,Ce=async(r,m,u)=>{var y,x;if(r.nodeType==="Create custom type"){r.type;try{const s=await M.post("/schema",JSON.stringify(r),{});if(s.error){const{message:d}=s.error;throw new Error(d)}u(r,(y=s==null?void 0:s.data)==null?void 0:y.ref_id),close()}catch(s){let d=S;if(s.status===400){const c=await s.json();d=c.errorCode||(c==null?void 0:c.status)||S}else s instanceof Error&&(d=s.message);throw new Error(d)}}else{const s="node",{nodeType:d,typeName:c,...h}=r,p={node_data:{...h},node_type:d,name:c};r.nodeType==="Image"&&(p.node_data={...r.node_data,source_link:r.sourceLink});let l="";await X(async()=>{const n=await Z.enable();p.pubkey=n==null?void 0:n.pubkey,l=await K()});try{const n=await M.post(`/${s}`,JSON.stringify(p),{Authorization:l});if(n.error){const{message:o}=n.error;throw new Error(o)}u(r,(x=n==null?void 0:n.data)==null?void 0:x.ref_id),close()}catch(n){let o=S;if(n.status===400)try{const a=await n.json();o=a.message||a.errorCode||(a==null?void 0:a.status)||S}catch{o=S}else n instanceof Error&&(o=n.message);throw new Error(o)}}},De=()=>{const[r,m]=g.useState("sourceType"),{close:u,visible:y}=L("changeNodeType"),{open:x}=L("editNodeName"),{open:s}=L("addType"),[d]=Y(i=>[i.setBudget]),c=oe({mode:"onChange"}),{watch:h,setValue:p,reset:l}=c,[n,o]=g.useState(""),[a,E]=Q(i=>[i.addNewNode,i.setSelectedNode]);g.useEffect(()=>()=>{m("sourceType"),l()},[y,l]);const N=h("nodeType"),j=h("typeName"),D=h("sourceLink"),A=h("type");h("title");const P=()=>{u()},k=i=>{m(i)},$=(i,w)=>{const v=w||`new-id-${Math.random()}`,b=i.nodeType.toLocaleLowerCase(),z={name:i.typeName,type:b,label:i.typeName,node_type:b,id:v,ref_id:v,x:Math.random(),y:Math.random(),z:Math.random(),date:parseInt((new Date().getTime()/1e3).toFixed(0),10),weight:4,...i.sourceLink?{source_link:i.sourceLink}:{}};a(z),E(z)},q=c.handleSubmit(async i=>{try{await Ce(i,d,$),P()}catch(w){let v=S;if((w==null?void 0:w.status)===400){const b=await w.json();v=b.errorCode||(b==null?void 0:b.status)||S}else w instanceof Error&&(v=w.message);o(String(v))}}),_=i=>{i==="Create custom type"?s():p("nodeType",i)},R={sourceType:e.jsx(be,{allowNextStep:!!N,onSelectType:_,selectedType:N,skipToStep:k}),source:e.jsx(fe,{name:j,skipToStep:k,sourceLink:D||"",type:N}),createConfirmation:e.jsx(ce,{onclose:P,type:A}),mapProperties:e.jsx(le,{handleSelectType:_,nodeType:N,skipToStep:k})},U="small",J=()=>{u(),x()};return e.jsx(re,{id:"changeNodeType",kind:U,onClose:J,preventOutsideClose:!0,children:e.jsx(ne,{...c,children:e.jsx("form",{id:"add-node-form",onSubmit:q,children:R[r]})})})};export{De as ChangeNodeTypeModal};
