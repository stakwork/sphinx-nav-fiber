import{j as e,B as i,J as p,y as f,K as k,T as t,f as c,h as o,F as l}from"./index-d939ea8c.js";import{A as w}from"./AddContentIcon-cac3b793.js";import{A as y,S as F}from"./SourcesTableIcon-71ae3a1d.js";import{j as v}from"./react-toastify.esm-cf8782e0.js";import{S}from"./SettingsIcon-c7623471.js";const A=n=>e.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 25 22",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M17.8553 2.95196L15.3555 5.30477C15.2095 5.44218 15.1081 5.62031 15.0647 5.81603L14.52 8.26717H7.41204C6.80549 8.26717 6.31378 8.75888 6.31378 9.36543C6.31378 9.97198 6.80549 10.4637 7.41204 10.4637H15.0998C15.1427 10.4637 15.185 10.4612 15.2266 10.4564C15.2442 10.4574 15.2619 10.4578 15.2798 10.4578H18.6054C18.8441 10.4578 19.0749 10.3724 19.2562 10.2171L21.3582 8.41535C21.5744 9.252 21.6894 10.1293 21.6894 11.0336C21.6894 16.7958 17.0182 21.467 11.256 21.467C9.70613 21.467 8.23523 21.1291 6.91291 20.5229L1.57616 21.8571C1.20996 21.9486 0.878268 21.6169 0.969816 21.2508L2.21945 16.2522C1.33102 14.7172 0.82251 12.9347 0.82251 11.0336C0.82251 5.27132 5.49373 0.600098 11.256 0.600098C13.7596 0.600098 16.0573 1.48194 17.8553 2.95196ZM7.41204 12.6603C6.80549 12.6603 6.31378 13.152 6.31378 13.7586C6.31378 14.3651 6.80549 14.8568 7.41204 14.8568H11.8051C12.4116 14.8568 12.9033 14.3651 12.9033 13.7586C12.9033 13.152 12.4116 12.6603 11.8051 12.6603H7.41204ZM22.1006 1.12041L16.3757 6.84529C16.3348 6.88621 16.3066 6.93809 16.2945 6.99468L15.9135 8.77616C15.868 8.98885 16.0569 9.17774 16.2696 9.13226L18.0511 8.75129C18.1077 8.73919 18.1596 8.71098 18.2005 8.67006L23.9254 2.94518C24.0425 2.82803 24.0425 2.63808 23.9254 2.52092L22.5249 1.12041C22.4077 1.00325 22.2178 1.00325 22.1006 1.12041Z",fill:"currentColor"})}),G=()=>{const{open:n}=i("sourcesTable"),{open:x}=i("addItem"),{open:h}=i("addContent"),{open:u}=i("settings"),{open:b}=i("blueprintGraph"),{open:g}=i("feedback"),m=p(a=>a.customSchemaFeatureFlag),j=p(a=>a.userFeedbackFeatureFlag),[d]=f(a=>[a.isAdmin]),C=k();return e.jsxs(I,{children:[e.jsx($,{children:e.jsx("img",{alt:"Second brain",src:"logo.svg"})}),d?e.jsxs(r,{"data-testid":"add-item-modal",onClick:x,children:[e.jsx(s,{children:e.jsx(y,{})}),e.jsx(t,{children:"Add Item"})]}):null,e.jsxs(r,{"data-testid":"add-content-modal",onClick:h,children:[e.jsx(s,{children:e.jsx(w,{})}),e.jsx(t,{children:"Add Content"})]}),e.jsxs(r,{id:"cy-open-soure-table",onClick:n,children:[e.jsx(s,{children:e.jsx(F,{})}),e.jsx(t,{children:"Source Table"})]}),m&&d?e.jsxs(r,{id:"cy-open-soure-table",onClick:b,children:[e.jsx(s,{children:e.jsx(v,{})}),e.jsx(t,{children:"Blueprint"})]}):null,e.jsxs(r,{"data-testid":"settings-modal",onClick:u,children:[e.jsx(s,{children:e.jsx(S,{})}),e.jsx(t,{children:"Settings"})]}),j&&C?e.jsxs(B,{"data-testid":"feedback-modal",onClick:g,children:[e.jsx(s,{children:e.jsx(A,{})}),e.jsx(t,{children:"Send Feedback"})]}):null]})},I=c(l).attrs({align:"flex-start",direction:"column",justify:"flex-start"})`
  flex: 0 0 64px;
  z-index: 31;
  transition: opacity 1s;
  background: ${o.BG2};
  position: relative;
`,$=c(l)`
  background: blue;
  align-items: center;
  justify-content: center;
  background: ${o.primaryBlue};
  width: 64px;
  height: 64px;
  cursor: pointer;
`,r=c(l).attrs({align:"center",justify:"center",p:0})`
  position: relative;
  width: 64px;
  height: 58px;
  padding: 0;
  flex-direction: row;
  color: ${o.GRAY6};
  cursor: pointer;
  transition: ${({theme:n})=>n.transitions.create(["opacity","box-shadow","background-color"])};

  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 4px; /* Initial width */
    height: 32px; /* Initial height on hover */
    background-color: transparent;
    transition: height 0.3s, width 0.3s, background-color 0.3s;
  }

  ${t} {
    display: none;
    opacity: 0;
    width: 0;
    padding: 4px 10px;
    border-radius: 4px;
    background: #000;
    box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.25);
    position: absolute;
    left: 90%;
    z-index: 99;
    white-space: nowrap;
    visibility: visible;
    font-size: 11px;
    font-style: normal;
    font-weight: 400;
    transition: ${({theme:n})=>n.transitions.create(["opacity","visually"])};
  }

  &:hover {
    color: ${o.white};

    &:before {
      width: 3px;
      height: 32px;
      background-color: ${o.primaryBlue};
    }

    ${t} {
      display: block;
      width: min-content;
      opacity: 1;
      visibility: visible;
    }
  }

  &:active {
    color: ${o.white};
    background: ${o.black};
    &:before {
      width: 3px;
      height: 100%;
      background-color: ${o.primaryBlue};
    }
  }

  &.root {
    border-radius: 50%;
    padding: 0;
    align-items: center;
    justify-content: center;
    border: none;
  }
`,B=c(r)`
  position: absolute;
  bottom: 16px;
  left: 50%;
  transform: translateX(-50%);
`,s=c(l)`
  justify-content: center;
  align-items: center;
  font-size: 24px;
`;export{G as MainToolbar};
