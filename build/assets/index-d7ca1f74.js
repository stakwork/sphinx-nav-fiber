import{f as b,T as F,j as e,F as o,h as T,r as y,b1 as R,I as Q,a3 as U,b3 as X,C as Z,i as K,b2 as E,U as I,bi as ee,o as te,bg as oe}from"./index-2c9fb007.js";import{B as P,i as G,C as W,c as re,F as ne}from"./react-toastify.esm-df671410.js";import{B as se}from"./index-45f399ac.js";import{u as L}from"./index-30b13236.js";import{p as Y}from"./index-30d16895.js";import{A as ie}from"./index-8ff2b355.js";import{c as ae}from"./index-64f1c910.js";import{T as ce}from"./index-07934e38.js";import"./index-4e4971e4.js";import"./Popover-80d071b4.js";import"./useSlotProps-174bcdd4.js";import"./Popper-0ad5a925.js";import"./index.esm-93c5249f.js";import"./InfoIcon-c2aebd55.js";const le=({nodeType:i,onclose:h,selectedNodeType:x})=>e.jsxs(o,{children:[e.jsx(o,{mb:20,children:e.jsx(B,{children:"Comfirm Type Change"})}),e.jsx(o,{mb:25,children:e.jsxs(B,{children:["From: ",x]})}),e.jsx(o,{mb:25,children:e.jsxs(B,{children:["To: ",i]})}),e.jsxs(o,{direction:"row",children:[e.jsx(o,{grow:1,children:e.jsx(P,{color:"secondary",onClick:h,size:"large",variant:"contained",children:"Cancel"})}),e.jsx(o,{grow:1,ml:20,children:e.jsx(P,{color:"secondary",size:"large",type:"submit",variant:"contained",children:"Confirm"})})]})]}),B=b(F)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,de=({handleSelectType:i,skipToStep:h,selectedNodeType:x,nodeType:S,selectedValues:r,setSelectedValues:p})=>{const[d,v]=y.useState(!1),[m,f]=y.useState(),[n,u]=y.useState(),{watch:l}=G();y.useEffect(()=>{const t=async(c,s)=>{v(!0);const O=await R(c),z=Y(O);s(z),v(!1)};S&&t(S,f),x&&t(x,u)},[S,x,l]);const C=t=>t.charAt(0).toUpperCase()+t.slice(1).replace(/_/g," "),a=m?[...m].sort((t,c)=>t.required&&!c.required?-1:!t.required&&c.required?1:0):[],j=n?[...n].sort((t,c)=>t.required&&!c.required?-1:!t.required&&c.required?1:0):[],g=()=>{i(""),h("sourceType")};y.useEffect(()=>{if(m&&n){const t=n.reduce((c,s)=>{const O=m.find(z=>z.key===s.key);return c[s.key]=O?s.key:"none",c},{});p(t)}},[m,n,p]);const A=(t,c)=>{p(s=>({...s,[t]:c}))};return e.jsxs(o,{children:[e.jsx(o,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(o,{align:"center",direction:"row",children:e.jsx(pe,{children:"Map Properties"})})}),e.jsx(ue,{children:d?e.jsx(o,{style:{margin:"auto"},children:e.jsx(W,{color:T.SECONDARY_BLUE})}):e.jsxs(xe,{children:[e.jsxs(me,{children:[e.jsx($,{children:C(x)}),j.map(({key:t})=>e.jsx(he,{children:e.jsx(F,{children:C(t)})},t))]}),e.jsxs(fe,{children:[e.jsx($,{children:C(S)}),j.map(({key:t})=>{const c=r[t]||"none";return e.jsx(y.Fragment,{children:e.jsxs(ge,{onChange:s=>A(t,s.target.value),value:c,children:[e.jsx(D,{value:"none",children:"None"}),a.filter(s=>!Object.values(r).includes(s.key)||s.key===c).map(({key:s})=>e.jsx(D,{value:s,children:C(s)},s))]})},t)})]})]})}),e.jsxs(o,{direction:"row",children:[e.jsx(o,{grow:1,children:e.jsx(P,{color:"secondary",onClick:g,size:"large",variant:"contained",children:"Prev"})}),e.jsx(o,{grow:1,ml:20,children:e.jsx(P,{color:"secondary",disabled:d,onClick:()=>{const t=j.every(({key:c,required:s})=>!s||s&&r[c]&&r[c]!=="none");h(t?"createConfirmation":"requiredProperties")},size:"large",variant:"contained",children:"Next"})})]})]})},pe=b(F)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,ue=b(o)`
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
`,xe=b.div`
  display: flex;
`,me=b.div`
  flex: 1;
  margin-right: 16px;
`,he=b.div`
  margin-bottom: 8px;
`,fe=b.div`
  width: 200px;
`,ge=b.select`
  width: 100%;
  color: #fff;
  font-size: 15px;
  background-color: ${T.BG2};
  border-radius: 6px;
  padding: 2px 8px;
  margin-bottom: 8px;
  border: none;
  box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);

  &:focus {
    background-color: ${T.BG2_ACTIVE_INPUT};
    outline: 1px solid ${T.primaryBlue};
  }
`,D=b.option`
  background-color: ${T.DROPDOWN_BG};
  color: #fff;

  &:hover,
  &:focus {
    background-color: black;
  }

  &[aria-selected='true'] {
    background-color: ${T.DROPDOWN_SELECTED};
  }
`,$=b.h3`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 8px;
  font-family: 'Barlow';
  color: white;
  margin-bottom: 15px;
`,ye={label:"Not Selected",value:"Not Selected"},je=[{label:"Corporation",value:"Corporation"},{label:"Event",value:"Event"},{label:"Image",value:"Image"},{label:"Organization",value:"Organization"},{label:"Person",value:"Person"},{label:"Place",value:"Place"},{label:"Project",value:"Project"},{label:"Software",value:"Software"},{label:"Topic",value:"Topic"}],we=({skipToStep:i,allowNextStep:h,onSelectType:x,selectedType:S})=>{const[r]=Q(u=>[u.customSchemaFeatureFlag]),[p,d]=y.useState(null),[v,m]=y.useState(!1),f=U();y.useEffect(()=>{(async()=>{var l;if(r){m(!0);try{const C=await X(),a=["about","schema",(l=f==null?void 0:f.node_type)==null?void 0:l.toLowerCase()],j=C.schemas.filter(g=>g.ref_id&&!a.includes(g.type.toLowerCase())&&!g.is_deleted).map(g=>({label:ae(g.type),value:g.type,action:()=>i("mapProperties")}));d(j)}catch(C){console.warn(C)}finally{m(!1)}}else console.log("data"),d([...je,ye])})()},[f==null?void 0:f.node_type,S,r,i]);const n=u=>{x((u==null?void 0:u.label)||"")};return e.jsxs(o,{children:[e.jsx(o,{align:"center",direction:"row",justify:"space-between",mb:20,children:e.jsx(o,{align:"center",direction:"row",children:e.jsx(be,{children:"Select Type"})})}),e.jsx(o,{direction:"row",mb:20,children:e.jsx(ie,{autoFocus:!0,isLoading:v,onSelect:n,options:p})}),e.jsx(o,{children:e.jsx(P,{color:"secondary",disabled:!h,onClick:()=>i("mapProperties"),size:"large",type:"button",variant:"contained",children:"Next"})})]})},be=b(F)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,Se=({handleSelectType:i,skipToStep:h,nodeType:x,selectedValues:S})=>{const[r,p]=y.useState(!1),[d,v]=y.useState(),{watch:m,formState:{isValid:f}}=G();y.useEffect(()=>{(async()=>{p(!0);const j=await R(x),g=Y(j);v(g),p(!1)})()},[x,m]);const n=a=>a.charAt(0).toUpperCase()+a.slice(1).replace(/_/g," "),l=(d?[...d].sort((a,j)=>a.required&&!j.required?-1:!a.required&&j.required?1:0):[]).filter(a=>!!(a.required&&!Object.values(S).includes(a.key))),C=()=>{i(""),h("sourceType")};return e.jsxs(o,{children:[e.jsx(o,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(o,{align:"center",direction:"row",children:e.jsx(Ce,{children:"Required Properties"})})}),e.jsx(ve,{children:r?e.jsx(o,{style:{margin:"auto"},children:e.jsx(W,{color:T.SECONDARY_BLUE})}):e.jsx(o,{className:"input__wrapper",children:l==null?void 0:l.map(({key:a,required:j})=>e.jsx(e.Fragment,{children:e.jsxs(Te,{children:[e.jsx(F,{children:n(a)}),e.jsx(ce,{id:"item-name",maxLength:50,name:a,placeholder:j?"Required":"Optional",rules:{...j?Z:{}}})]})}))})}),e.jsxs(o,{direction:"row",children:[e.jsx(o,{grow:1,children:e.jsx(P,{color:"secondary",onClick:C,size:"large",variant:"contained",children:"Prev"})}),e.jsx(o,{grow:1,ml:20,children:e.jsx(P,{color:"secondary",disabled:!f||r||(l==null?void 0:l.some(a=>a.required&&!m(a.key))),onClick:()=>h("createConfirmation"),size:"large",variant:"contained",children:"Next"})})]})]})},Ce=b(F)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,ve=b(o)`
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
`,Te=b(o)`
  display: flex;
  gap: 10px;

  #item-name {
    color: ${T.GRAY7};
    -webkit-text-fill-color: ${T.GRAY7};
  }
`,_e=async(i,h)=>{var x,S;if(i.nodeType==="Create custom type"){i.type;try{const r=await I.post("/schema",JSON.stringify(i),{});if(r.error){const{message:p}=r.error;throw new Error(p)}h(i,(x=r==null?void 0:r.data)==null?void 0:x.ref_id),close()}catch(r){let p=E;if(r.status===400){const d=await r.json();p=d.errorCode||(d==null?void 0:d.status)||E}else r instanceof Error&&(p=r.message);throw new Error(p)}}else{const r="node",{nodeType:p,typeName:d,...v}=i,m={node_data:{...v},node_type:p,name:d};i.nodeType==="Image"&&(m.node_data={...i.node_data,source_link:i.sourceLink});let f="";await ee(async()=>{const n=await te.enable();m.pubkey=n==null?void 0:n.pubkey,f=await oe()});try{const n=await I.post(`/${r}`,JSON.stringify(m),{Authorization:f});if(n.error){const{message:u}=n.error;throw new Error(u)}h(i,(S=n==null?void 0:n.data)==null?void 0:S.ref_id),close()}catch(n){let u=E;if(n.status===400)try{const l=await n.json();u=l.message||l.errorCode||(l==null?void 0:l.status)||E}catch{u=E}else n instanceof Error&&(u=n.message);throw new Error(u)}}},$e=()=>{const[i,h]=y.useState("sourceType"),{close:x,visible:S}=L("changeNodeType"),{open:r}=L("editNodeName"),{open:p}=L("addType"),d=re({mode:"onChange"}),{watch:v,setValue:m,reset:f}=d,[n,u]=y.useState(""),[l,C]=K(w=>[w.addNewNode,w.setSelectedNode]),[a,j]=y.useState({});y.useEffect(()=>()=>{h("sourceType"),f()},[S,f]);const g=U(),A=g!=null&&g.node_type?g.node_type.charAt(0).toUpperCase()+g.node_type.slice(1):"",t=v("nodeType");v("title");const c=()=>{x()},s=w=>{h(w)},O=(w,_)=>{const k=_||`new-id-${Math.random()}`,N=w.nodeType.toLocaleLowerCase(),M={name:w.typeName,type:N,label:w.typeName,node_type:N,id:k,ref_id:k,x:Math.random(),y:Math.random(),z:Math.random(),date:parseInt((new Date().getTime()/1e3).toFixed(0),10),weight:4,...w.sourceLink?{source_link:w.sourceLink}:{}};l(M),C(M)},z=d.handleSubmit(async w=>{try{await _e(w,O),c()}catch(_){let k=E;if((_==null?void 0:_.status)===400){const N=await _.json();k=N.errorCode||(N==null?void 0:N.status)||E}else _ instanceof Error&&(k=_.message);u(String(k))}}),q=w=>{w==="Create custom type"?p():m("nodeType",w)},J={sourceType:e.jsx(we,{allowNextStep:!!t,onSelectType:q,selectedType:t,skipToStep:s}),requiredProperties:e.jsx(Se,{handleSelectType:q,nodeType:t,selectedValues:a,skipToStep:s}),createConfirmation:e.jsx(le,{nodeType:t,onclose:c,selectedNodeType:A}),mapProperties:e.jsx(de,{handleSelectType:q,nodeType:t,selectedNodeType:A,selectedValues:a,setSelectedValues:j,skipToStep:s})},V=i==="mapProperties"?"regular":"small",H=()=>{x(),r()};return e.jsx(se,{id:"changeNodeType",kind:V,onClose:H,preventOutsideClose:!0,children:e.jsx(ne,{...d,children:e.jsx("form",{id:"add-node-form",onSubmit:z,children:J[i]})})})};export{$e as ChangeNodeTypeModal};
