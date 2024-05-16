import{di as p,f as n,h as r,aS as i,F as l,B as v,r as w,j as e}from"./index-8f0fe879.js";import{b as y}from"./react-toastify.esm-1cafe5b3.js";const b=p`
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
      `;case"full":return i`
        width: 100%;
        height: 100%;
      `;default:return i`
        width: 520px;
      `}},k=n(l)`
  z-index: 2000;
  margin: 0 auto;
  overflow: visible;
  animation: ${b} 0.2s ease-in-out;
  position: relative;
  max-width: 100%;
  overflow: visible;
  background: ${r};
  ${j}
`,B=p`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`,C=n(l)`
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
`,$=n(l)`
  position: absolute;
  top: 16px;
  right: 16px;
  font-size: 20px;
  color: ${r.GRAY6};
  cursor: pointer;
  z-index: 1;
`,M=({background:o="modalBg",children:m,id:d,hideBg:x,kind:f,preventOutsideClose:h,noWrap:c=!1,onClose:u})=>{const{visible:a,close:s}=v(d);return w.useEffect(()=>{const t=g=>{g.keyCode===27&&s()};return a&&document.addEventListener("keydown",t),()=>{document.removeEventListener("keydown",t)}},[a,s]),a?e.jsx(e.Fragment,{children:e.jsx(C,{align:"center","data-testid":"modal-overlay",hideBg:x,justify:"center",onClick:t=>{h||(t.stopPropagation(),s())},children:e.jsxs(k,{background:o,borderRadius:9,id:d,kind:f,onClick:t=>{t.stopPropagation()},px:c?0:20,py:c?0:20,children:[u&&e.jsx($,{"data-testid":"close-modal",onClick:u,children:e.jsx(y,{})}),m]})})}):null};export{M as B};
