import{f as y,h as S,F as t,T as b,y as R,r as f,j as e,aW as J,aX as H,D as A,a_ as K,J as X,a$ as Q,N as Z,B as P,i as ee,aY as z,b0 as te,o as se,O as ne}from"./index-c702fad0.js";import{B as N,C as q,i as oe,c as re,F as ie}from"./react-toastify.esm-3aab803b.js";import{B as ae}from"./index-a09f3859.js";import{S as ce}from"./index-bc71a8d9.js";import{i as le}from"./index.esm-7bb24454.js";import{C as de}from"./CheckIcon-cda83684.js";import{n as B,a as pe,i as me}from"./index-fa0ce06f.js";import{p as xe}from"./index-30d16895.js";import{T as _}from"./index-17e7e9b9.js";import{A as ue}from"./index-761ae8a4.js";import{c as he}from"./index-64f1c910.js";import"./generateCategoricalChart-f65c1f0c.js";import"./Popover-54624385.js";import"./useSlotProps-5c22f7c9.js";import"./InfoIcon-23a924e9.js";import"./NoFilterResultIcon-60d489f8.js";import"./index-4c80c8a3.js";import"./index-1793ed71.js";import"./PlusIcon-59b3a70e.js";import"./index-a6e102a8.js";import"./Popper-b9bbbe05.js";const fe=({onClick:n,loading:r,error:i})=>{const p=R(l=>l.budget),[m,o]=f.useState(10),c="node";return f.useEffect(()=>{(async()=>{try{const h=await H(c);o(h.data.price)}catch(h){console.error("cannot fetch",h)}})()},[c]),e.jsxs(t,{children:[e.jsx(t,{align:"center",direction:"row",justify:"space-between",mb:20,children:e.jsx(t,{align:"center",direction:"row",children:e.jsx(je,{children:"Approve Cost"})})}),e.jsxs(t,{align:"center",direction:"row",justify:"space-between",mb:20,children:[e.jsxs(ye,{children:[e.jsx("div",{className:"title",children:"COST"}),e.jsxs("div",{className:"value","data-testid":"check-price",children:[m," sats"]})]}),e.jsxs(ge,{children:[e.jsx("div",{className:"title",children:"BUDGET"}),e.jsxs("div",{className:"value",children:[J(p)," sats"]})]})]}),e.jsx(t,{children:e.jsx(N,{color:"secondary","data-testid":"check-icon",disabled:r||!!i,onClick:n,size:"large",startIcon:r?e.jsx(D,{children:e.jsx(q,{color:"gray",size:12})}):e.jsxs(D,{children:[" ",e.jsx(de,{})]}),type:"submit",variant:"contained",children:"Approve"})}),i?e.jsx(Se,{children:e.jsxs(we,{children:[e.jsx(le,{className:"errorIcon"}),e.jsx("span",{children:i})]})}):null]})},ye=y(t).attrs({direction:"column",align:"space-between",justify:"flex-start"})`
  width: 141px;
  height: 61px;
  border: 1px solid ${S.GRAY7};
  border-radius: 6px;
  padding: 16px;
  .title {
    font-family: Barlow;
    color: ${S.secondaryText4};
    font-size: 11px;
    font-style: normal;
    font-weight: 600;
  }

  .value {
    font-family: Barlow;
    color: ${S.white};
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
  }
`,ge=y(t).attrs({direction:"column",align:"space-between",justify:"flex-start"})`
  color: ${S.secondaryText4};
  .title {
    font-family: Barlow;
    font-size: 11px;
    font-style: normal;
    font-weight: 600;
  }

  .value {
    font-family: Barlow;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
  }
`,je=y(b)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,we=y(t)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 2px;

  .errorIcon {
    display: block;
    font-size: 13px;
    min-height: 13px;
    min-width: 13px;
  }

  span {
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    white-space: normal;
    letter-spacing: 0.2px;
    cursor: pointer;
    padding-left: 4px;
    font-size: 13px;
    font-family: Barlow;
    line-height: 18px;
  }
`,Se=y(t)`
  display: flex;
  align-items: center;
  color: ${S.primaryRed};
  position: relative;
  margin-top: 20px;
`,D=y.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-top: 2px;

  svg {
    width: 16px;
    height: 16px;
  }
`,be=({type:n,onclose:r})=>e.jsxs(t,{children:[e.jsx(t,{mb:20,children:e.jsx(O,{children:"Comfirm New Type"})}),e.jsx(t,{mb:25,children:e.jsxs(O,{children:["Type: ",n]})}),e.jsxs(t,{direction:"row",children:[e.jsx(t,{grow:1,children:e.jsx(N,{color:"secondary",onClick:r,size:"large",variant:"contained",children:"Cancel"})}),e.jsx(t,{grow:1,ml:20,children:e.jsx(N,{color:"secondary",size:"large",type:"submit",variant:"contained",children:"Confirm"})})]})]}),O=y(b)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,Ne=({handleSelectType:n,skipToStep:r,nodeType:i})=>{const[p,m]=f.useState(!1),[o,c]=f.useState(),{watch:l,setValue:h,formState:{isValid:a}}=oe();f.useEffect(()=>{(async()=>{m(!0);const g=await K(i),I=xe(g).filter(E=>E.key!=="node_key");c(I),m(!1)})()},[i,l]);const u=s=>s.charAt(0).toUpperCase()+s.slice(1).replace(/_/g," "),x=o?[...o].sort((s,g)=>s.required&&!g.required?-1:!s.required&&g.required?1:0):[],k=()=>{n(""),r("sourceType")},T=()=>{o==null||o.forEach(({key:s,required:g})=>{if(g){const j=l(s);typeof j=="string"&&h(s,j.trim(),{shouldValidate:!0})}}),a&&!p&&(o!=null&&o.every(s=>!s.required||l(s.key)))&&r("setBudget")};return e.jsxs(t,{children:[e.jsx(t,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(t,{align:"center",direction:"row",children:e.jsx(Te,{children:"Set Attributes"})})}),e.jsx(Ce,{children:p?e.jsx(t,{style:{margin:"auto"},children:e.jsx(q,{color:S.SECONDARY_BLUE})}):e.jsx(t,{className:"input__wrapper",children:x==null?void 0:x.map(({key:s,required:g})=>e.jsxs(ve,{children:[e.jsx(b,{children:u(s)}),e.jsx(_,{id:"item-name",maxLength:50,name:s,placeholder:g?"Required":"Optional",rules:{...g?{...A,pattern:{message:"No leading whitespace allowed",value:B}}:{}}})]},s))})}),e.jsxs(t,{direction:"row",children:[e.jsx(t,{grow:1,children:e.jsx(N,{color:"secondary",onClick:k,size:"large",variant:"contained",children:"Prev"})}),e.jsx(t,{grow:1,ml:20,children:e.jsx(N,{color:"secondary",disabled:!a||p||(o==null?void 0:o.some(s=>s.required&&!l(s.key))),onClick:T,size:"large",variant:"contained",children:"Next"})})]})]})},Te=y(b)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,Ce=y(t)`
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
`,ve=y(t)`
  display: flex;
  gap: 10px;

  #item-name {
    color: ${S.GRAY7};
    -webkit-text-fill-color: ${S.GRAY7};
  }
`,ke=({type:n,skipToStep:r,name:i,sourceLink:p})=>{const m=c=>B.test(c??""),o=n==="Image"?m(i)&&m(p):m(i);return e.jsxs(t,{children:[e.jsx(t,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(t,{align:"center",direction:"row",children:e.jsx(Be,{children:"Enter details"})})}),e.jsx(t,{mb:4,children:e.jsxs(b,{children:[n," name"]})}),e.jsx(t,{mb:12,children:e.jsx(_,{id:"cy-item-name",maxLength:250,name:"typeName",placeholder:"Paste name here...",rules:{...A,pattern:{message:"No leading whitespace allowed",value:B}}})}),n==="Image"?e.jsxs(e.Fragment,{children:[e.jsx(t,{mb:4,children:e.jsx(b,{children:"Link"})}),e.jsx(t,{mb:12,children:e.jsx(_,{id:"cy-item-link",maxLength:250,name:"sourceLink",placeholder:"Paste link here...",rules:{...A,pattern:{message:"Please avoid special characters and spaces",value:B}}})})]}):null,e.jsxs(t,{direction:"row",children:[e.jsx(t,{grow:1,children:e.jsx(N,{color:"secondary",onClick:()=>r("sourceType"),size:"large",variant:"contained",children:"Prev"})}),e.jsx(t,{grow:1,ml:20,children:e.jsx(N,{color:"secondary",disabled:!o,onClick:()=>r("setBudget"),size:"large",variant:"contained",children:"Next"})})]})]})},Be=y(b)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,ze=({skipToStep:n,allowNextStep:r,onSelectType:i,selectedType:p})=>{const[m]=X(u=>[u.customSchemaFeatureFlag]),[o,c]=f.useState(null),[l,h]=f.useState(!1);f.useEffect(()=>{(async()=>{if(m){h(!0);try{const x=await Q(),k=["about","schema"],T=x.schemas.filter(s=>s.ref_id&&!k.includes(s.type)&&!s.is_deleted).map(s=>({label:he(s.type),value:s.type,action:()=>n("setAttribues")}));c(T)}catch(x){console.warn(x)}finally{h(!1)}}else c([...pe,me])})()},[p,m,n]);const a=u=>{i((u==null?void 0:u.label)||"")};return e.jsxs(t,{children:[e.jsx(t,{align:"center",direction:"row",justify:"space-between",mb:20,children:e.jsx(t,{align:"center",direction:"row",children:e.jsx(Ie,{children:"Select Type"})})}),e.jsx(t,{direction:"row",mb:20,children:e.jsx(ue,{autoFocus:!0,isLoading:l,onSelect:a,options:o})}),e.jsx(t,{children:e.jsx(N,{color:"secondary",disabled:!r,onClick:()=>n("source"),size:"large",type:"button",variant:"contained",children:"Next"})})]})},Ie=y(b)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,Ee=async(n,r,i="")=>await Z.post(`/${n}`,JSON.stringify(r),{Authorization:i}),Le=async(n,r,i,p,m)=>{const o=n==="Create custom type"?"schema":"node",c={node_data:{...r,...n==="Image"&&{source_link:i}},node_type:n,name:p};return Ee(o,c,m)},Ae=async(n,r,i)=>{var h;const{nodeType:p,typeName:m,sourceLink:o,...c}=n;let l="";p!=="Create custom type"&&await te(async()=>{const a=await se.enable();c.pubkey=a==null?void 0:a.pubkey,l=await ne()});try{const a=await Le(p,c,o,m,l);i(n,(h=a==null?void 0:a.data)==null?void 0:h.ref_id),close()}catch(a){let u=z;if(a.status===400){const x=await a.json();u=x.message||x.errorCode||(x==null?void 0:x.status)||z}else a instanceof Error&&(u=a.message);throw new Error(u)}},tt=()=>{const[n,r]=f.useState("sourceType"),{close:i,visible:p}=P("addItem"),{open:m}=P("addType"),[o]=R(d=>[d.setBudget]),c=re({mode:"onChange"}),{watch:l,setValue:h,reset:a}=c,[u,x]=f.useState(!1),[k,T]=f.useState(""),[s,g]=ee(d=>[d.addNewNode,d.setSelectedNode]);f.useEffect(()=>()=>{r("sourceType"),a()},[p,a]);const j=l("nodeType"),I=l("typeName"),E=l("sourceLink"),V=l("type");l("title");const F=()=>{i()},L=d=>{T(""),r(d)},Y=(d,w)=>{const v=w||`new-id-${Math.random()}`,C=d.nodeType.toLocaleLowerCase(),M={name:d.typeName,type:C,label:d.typeName,node_type:C,id:v,ref_id:v,x:Math.random(),y:Math.random(),z:Math.random(),date:parseInt((new Date().getTime()/1e3).toFixed(0),10),weight:4,...d.sourceLink?{source_link:d.sourceLink}:{},properties:{...d}};s(M),g(M)},G=c.handleSubmit(async d=>{T(""),x(!0);try{await Ae(d,o,Y),ce("Item Added"),F()}catch(w){let v=z;if((w==null?void 0:w.status)===400){const C=await w.json();v=C.errorCode||(C==null?void 0:C.status)||z}else w instanceof Error&&(v=w.message);T(String(v))}finally{x(!1)}}),$=d=>{d==="Create custom type"?m():h("nodeType",d)},U={sourceType:e.jsx(ze,{allowNextStep:!!j,onSelectType:$,selectedType:j,skipToStep:L}),source:e.jsx(ke,{name:I,skipToStep:L,sourceLink:E||"",type:j}),setBudget:e.jsx(fe,{error:k,loading:u,onClick:()=>null}),createConfirmation:e.jsx(be,{onclose:F,type:V}),setAttribues:e.jsx(Ne,{handleSelectType:$,nodeType:j,skipToStep:L})},W="small";return e.jsx(ae,{id:"addItem",kind:W,onClose:i,preventOutsideClose:!0,children:e.jsx(ie,{...c,children:e.jsx("form",{id:"add-node-form",onSubmit:G,children:U[n]})})})};export{tt as AddItemModal};
