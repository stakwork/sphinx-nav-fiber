import{B as i,J as m,x as b,j as t,T as e,f as a,h as o,F as c}from"./index-b17e6e7f.js";import{A as j}from"./AddContentIcon-189437b5.js";import{A as f,S as y}from"./SourcesTableIcon-1f641f50.js";import{j as k}from"./react-toastify.esm-ac6bd257.js";import{S as w}from"./SettingsIcon-958f00f6.js";const F=()=>{const{open:n}=i("sourcesTable"),{open:p}=i("addItem"),{open:x}=i("addContent"),{open:u}=i("settings"),{open:h}=i("blueprintGraph"),g=m(d=>d.customSchemaFeatureFlag),[l]=b(d=>[d.isAdmin]);return t.jsxs(S,{children:[t.jsx(A,{children:t.jsx("img",{alt:"Second brain",src:"logo.svg"})}),l?t.jsxs(s,{"data-testid":"add-item-modal",onClick:p,children:[t.jsx(r,{children:t.jsx(f,{})}),t.jsx(e,{children:"Add Item"})]}):null,t.jsxs(s,{"data-testid":"add-content-modal",onClick:x,children:[t.jsx(r,{children:t.jsx(j,{})}),t.jsx(e,{children:"Add Content"})]}),t.jsxs(s,{id:"cy-open-soure-table",onClick:n,children:[t.jsx(r,{children:t.jsx(y,{})}),t.jsx(e,{children:"Source Table"})]}),t.jsxs(s,{id:"cy-open-soure-table",onClick:h,children:[t.jsx(r,{children:t.jsx(k,{})}),t.jsx(e,{children:"Blueprint"})]}),t.jsxs(s,{"data-testid":"settings-modal",onClick:u,children:[t.jsx(r,{children:t.jsx(w,{})}),t.jsx(e,{children:"Settings"})]})]})},S=a(c).attrs({align:"flex-start",direction:"column",justify:"flex-start"})`
  flex: 0 0 64px;
  z-index: 31;
  transition: opacity 1s;
  background: ${o.BG2};
`,A=a(c)`
  background: blue;
  align-items: center;
  justify-content: center;
  background: ${o.primaryBlue};
  width: 64px;
  height: 64px;
  cursor: pointer;
`,s=a(c).attrs({align:"center",justify:"center",p:0})`
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

  ${e} {
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

    ${e} {
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
`,r=a(c)`
  justify-content: center;
  align-items: center;
  font-size: 24px;
`;export{F as MainToolbar};
