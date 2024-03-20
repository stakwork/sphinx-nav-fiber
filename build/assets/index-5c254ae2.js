import{a_ as m,s as a,b as r,ae as i,F as l,r as v,j as t}from"./index-3638940b.js";import{u as w}from"./index-f5d6928d.js";import{l as y}from"./react-toastify.esm-885db80e.js";const b=m`
  0% {
    transform: scale(0.8);
  }

  100% {
    transform: scale(1);
  }
`,j=({kind:o="regular"})=>{switch(o){case"small":return i`
        width: 370px;
      `;case"large":return i`
        width: 709px;
      `;default:return i`
        width: 520px;
      `}},k=a(l)`
  z-index: 2000;
  margin: 0 auto;
  overflow: visible;
  animation: ${b} 0.2s ease-in-out;
  position: relative;
  max-width: 100%;
  overflow: visible;
  background: ${r.BG1};
  ${j}
`,B=m`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`,$=a(l)`
  position: fixed;
  width: 100%;
  height: 100vh;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  transition: all;
  z-index: 1500;
  animation: ${B} 0.2s ease-in-out;
  padding: 1rem;

  ${({hideBg:o})=>!o&&i`
      background-color: ${r.modalWhiteOverlayBg};
    `}
`,C=a(l)`
  position: absolute;
  top: 16px;
  right: 16px;
  font-size: 20px;
  color: ${r.GRAY6};
  cursor: pointer;
  z-index: 1;
`,M=({background:o="modalBg",children:u,id:c,hideBg:x,kind:f,preventOutsideClose:g,noWrap:d=!1,onClose:p})=>{const{visible:s,close:n}=w(c);return v.useEffect(()=>{const e=h=>{h.keyCode===27&&n()};return s&&document.addEventListener("keydown",e),()=>{document.removeEventListener("keydown",e)}},[s,n]),s?t.jsx(t.Fragment,{children:t.jsx($,{align:"center",hideBg:x,justify:"center",onClick:e=>{g||(e.stopPropagation(),n())},children:t.jsxs(k,{background:o,borderRadius:9,id:c,kind:f,onClick:e=>{e.stopPropagation()},px:d?0:20,py:d?0:20,children:[p&&t.jsx(C,{"data-testid":"close-modal",onClick:p,children:t.jsx(y,{})}),u]})})}):null};export{M as B};
