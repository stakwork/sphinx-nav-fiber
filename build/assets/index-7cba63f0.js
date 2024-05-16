import{de as p,f as n,h as r,aZ as a,F as l,B as v,r as w,j as t}from"./index-e0a0c085.js";import{b as y}from"./react-toastify.esm-faf2155f.js";const b=p`
  0% {
    transform: scale(0.8);
  }

  100% {
    transform: scale(1);
  }
`,j=({kind:o="regular"})=>{switch(o){case"small":return a`
        width: 370px;
      `;case"large":return a`
        width: 709px;
      `;case"full":return a`
        width: 100%;
        height: 100%;
      `;default:return a`
        width: 520px;
      `}},k=n(l)`
  z-index: 2000;
  margin: 0 auto;
  overflow: visible;
  animation: ${b} 0.2s ease-in-out;
  position: relative;
  max-width: 100%;
  overflow: visible;
  background: ${r.BG1};
  ${j}
`,B=p`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`,$=n(l)`
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

  ${({hideBg:o})=>!o&&a`
      background-color: ${r.modalWhiteOverlayBg};
    `}
`,C=n(l)`
  position: absolute;
  top: 16px;
  right: 16px;
  font-size: 20px;
  color: ${r.GRAY6};
  cursor: pointer;
  z-index: 1;
`,A=({background:o="modalBg",children:m,id:d,hideBg:x,kind:f,preventOutsideClose:h,noWrap:c=!1,onClose:u})=>{const{visible:i,close:s}=v(d);return w.useEffect(()=>{const e=g=>{g.keyCode===27&&s()};return i&&document.addEventListener("keydown",e),()=>{document.removeEventListener("keydown",e)}},[i,s]),i?t.jsx(t.Fragment,{children:t.jsx($,{align:"center","data-testid":"modal-overlay",hideBg:x,justify:"center",onClick:e=>{h||(e.stopPropagation(),s())},children:t.jsxs(k,{background:o,borderRadius:9,id:d,kind:f,onClick:e=>{e.stopPropagation()},px:c?0:20,py:c?0:20,children:[u&&t.jsx(C,{"data-testid":"close-modal",onClick:u,children:t.jsx(y,{})}),m]})})}):null};export{A as B};
