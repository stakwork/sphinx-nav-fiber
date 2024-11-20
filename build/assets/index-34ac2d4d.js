import{M as a,X as $,V as B,v as T,D as z,a0 as G,E as D,a5 as E,j as e,H as t,w as c,x as n,F as l}from"./index-0490ee14.js";import{M as L,A as N,a as O,S as R,C as U,b as W,F as X}from"./index-2d987ba7.js";const J=()=>{const{open:r}=a("sourcesTable"),{open:p}=a("addItem"),{open:u}=a("addContent"),{open:x}=a("settings"),{open:h}=a("blueprintGraph"),{open:b}=a("feedback"),g=$(),{resetAiSummaryAnswer:j,setNewLoading:m}=B(),{abortFetchData:k,resetGraph:f}=T(o=>o),{setUniverseQuestionIsOpen:y,setSidebarOpen:w,setShowCollapseButton:S}=z(o=>o),{customSchemaFeatureFlag:C,userFeedbackFeatureFlag:F,chatInterfaceFeatureFlag:v}=G(o=>o),{isAdmin:d}=D(o=>o),I=E(),A=()=>{m(null),k(),j(),f(),g("/")},M=()=>{y(),w(!0),S(!0)};return e.jsxs(Y,{children:[e.jsx(H,{onClick:A,children:e.jsx("img",{alt:"Second brain",src:"logo.svg"})}),v?e.jsxs(i,{onClick:M,children:[e.jsx(s,{children:e.jsx(L,{})}),e.jsx(t,{children:"New Chat"})]}):null,d?e.jsxs(i,{"data-testid":"add-item-modal",onClick:p,children:[e.jsx(s,{children:e.jsx(N,{})}),e.jsx(t,{children:"Add Item"})]}):null,e.jsxs(i,{"data-testid":"add-content-modal",onClick:u,children:[e.jsx(s,{children:e.jsx(O,{})}),e.jsx(t,{children:"Add Content"})]}),e.jsxs(i,{id:"cy-open-soure-table",onClick:r,children:[e.jsx(s,{children:e.jsx(R,{})}),e.jsx(t,{children:"Source Table"})]}),C&&d?e.jsxs(i,{"data-testid":"add-blueprint-modal",id:"cy-open-soure-table",onClick:h,children:[e.jsx(s,{children:e.jsx(U,{})}),e.jsx(t,{children:"Blueprint"})]}):null,e.jsxs(i,{"data-testid":"settings-modal",onClick:x,children:[e.jsx(s,{children:e.jsx(W,{})}),e.jsx(t,{children:"Settings"})]}),F&&I?e.jsxs(Q,{"data-testid":"feedback-modal",onClick:b,children:[e.jsx(s,{children:e.jsx(X,{})}),e.jsx(t,{children:"Send Feedback"})]}):null]})},Y=c(l).attrs({align:"flex-start",direction:"column",justify:"flex-start"})`
  flex: 0 0 64px;
  z-index: 31;
  transition: opacity 1s;
  background: ${n.BG2};
  position: relative;
`,H=c(l)`
  background: blue;
  align-items: center;
  justify-content: center;
  background: ${n.primaryBlue};
  width: 64px;
  height: 64px;
  cursor: pointer;
`,i=c(l).attrs({align:"center",justify:"center",p:0})`
  position: relative;
  width: 64px;
  height: 58px;
  padding: 0;
  flex-direction: row;
  color: ${n.GRAY6};
  cursor: pointer;
  transition: ${({theme:r})=>r.transitions.create(["opacity","box-shadow","background-color"])};

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
    transition: ${({theme:r})=>r.transitions.create(["opacity","visually"])};
  }

  &:hover {
    color: ${n.white};

    &:before {
      width: 3px;
      height: 32px;
      background-color: ${n.primaryBlue};
    }

    ${t} {
      display: block;
      width: min-content;
      opacity: 1;
      visibility: visible;
    }
  }

  &:active {
    color: ${n.white};
    background: ${n.black};
    &:before {
      width: 3px;
      height: 100%;
      background-color: ${n.primaryBlue};
    }
  }

  &.root {
    border-radius: 50%;
    padding: 0;
    align-items: center;
    justify-content: center;
    border: none;
  }
`,Q=c(i)`
  position: absolute;
  bottom: 16px;
  left: 50%;
  transform: translateX(-50%);
`,s=c(l)`
  justify-content: center;
  align-items: center;
  font-size: 24px;
`;export{J as MainToolbar};
