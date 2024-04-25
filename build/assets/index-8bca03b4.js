import{x as u,j as t,T as e,f as a,h as o,F as c}from"./index-f899806e.js";import{A as g,a as b,S as m}from"./SourcesTableIcon-84435487.js";import{S as j}from"./SettingsIcon-0fb66e48.js";import{u as i}from"./index-a5bd8b2c.js";const S=()=>{const{open:n}=i("sourcesTable"),{open:d}=i("addItem"),{open:l}=i("addContent"),{open:p}=i("settings"),[x]=u(h=>[h.isAdmin]);return t.jsxs(f,{children:[t.jsx(y,{children:t.jsx("img",{alt:"Second brain",src:"logo.svg"})}),x&&t.jsxs(s,{"data-testid":"add-item-modal",onClick:d,children:[t.jsx(r,{children:t.jsx(g,{})}),t.jsx(e,{children:"Add Item"})]}),t.jsxs(s,{"data-testid":"add-content-modal",onClick:l,children:[t.jsx(r,{children:t.jsx(b,{})}),t.jsx(e,{children:"Add Content"})]}),t.jsxs(s,{id:"cy-open-soure-table",onClick:n,children:[t.jsx(r,{children:t.jsx(m,{})}),t.jsx(e,{children:"Source Table"})]}),t.jsxs(s,{"data-testid":"settings-modal",onClick:p,children:[t.jsx(r,{children:t.jsx(j,{})}),t.jsx(e,{children:"Settings"})]})]})},f=a(c).attrs({align:"flex-start",direction:"column",justify:"flex-start"})`
  flex: 0 0 64px;
  z-index: 31;
  transition: opacity 1s;
  background: ${o.BG2};
`,y=a(c)`
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
`;export{S as MainToolbar};
