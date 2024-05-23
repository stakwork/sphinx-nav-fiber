import{di as m,f as s,h as r,aS as o,F as d,B as w,r as y,j as e}from"./index-b17e6e7f.js";import{b as v}from"./react-toastify.esm-ac6bd257.js";const b=m`
  0% {
    transform: scale(0.8);
  }

  100% {
    transform: scale(1);
  }
`,j=({kind:a="regular"})=>{switch(a){case"small":return o`
        width: 370px;
      `;case"large":return o`
        width: 709px;
      `;case"full":return o`
        width: 100%;
        height: 100%;
      `;default:return o`
        width: 520px;
      `}},k=s(d)`
  z-index: 2000;
  margin: 0 auto;
  animation: ${b} 0.2s ease-in-out;
  position: relative;
  max-width: 100%;
  overflow: visible;
  background: ${r};
  ${j};

  @media (max-width: 1024px) {
    height: auto;
    max-height: 80%;
  }

  @media (max-width: 768px) {
    height: auto;
    max-height: 80%;
  }

  @media (max-width: 480px) {
    height: auto;
    max-height: 80%;
  }
`,B=m`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`,C=s(d)`
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

  ${({hideBg:a})=>!a&&o`
      background-color: ${r.modalWhiteOverlayBg};
    `}
`,$=s(d)`
  position: absolute;
  top: 16px;
  right: 16px;
  font-size: 20px;
  color: ${r.GRAY6};
  cursor: pointer;
  z-index: 1;
`,M=({background:a="modalBg",children:x,id:l,hideBg:u,kind:p,preventOutsideClose:g,noWrap:c=!1,onClose:h})=>{const{visible:i,close:n}=w(l);return y.useEffect(()=>{const t=f=>{f.keyCode===27&&n()};return i&&document.addEventListener("keydown",t),()=>{document.removeEventListener("keydown",t)}},[i,n]),i?e.jsx(e.Fragment,{children:e.jsx(C,{align:"center","data-testid":"modal-overlay",hideBg:u,justify:"center",onClick:t=>{g||(t.stopPropagation(),n())},children:e.jsxs(k,{background:a,borderRadius:9,id:l,kind:p,onClick:t=>{t.stopPropagation()},px:c?0:20,py:c?0:20,children:[h&&e.jsx($,{"data-testid":"close-modal",onClick:h,children:e.jsx(v,{})}),x]})})}):null};export{M as B};
