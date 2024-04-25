import{db as m,f as n,h as r,aX as i,F as l,r as v,j as e}from"./index-f899806e.js";import{u as w}from"./index-a5bd8b2c.js";import{b as y}from"./react-toastify.esm-21ba998d.js";const b=m`
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
  background: ${r.BG1};
  ${j}
`,B=m`
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

  ${({hideBg:o})=>!o&&i`
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
`,M=({background:o="modalBg",children:p,id:d,hideBg:f,kind:x,preventOutsideClose:h,noWrap:c=!1,onClose:u})=>{const{visible:a,close:s}=w(d);return v.useEffect(()=>{const t=g=>{g.keyCode===27&&s()};return a&&document.addEventListener("keydown",t),()=>{document.removeEventListener("keydown",t)}},[a,s]),a?e.jsx(e.Fragment,{children:e.jsx($,{align:"center","data-testid":"modal-overlay",hideBg:f,justify:"center",onClick:t=>{h||(t.stopPropagation(),s())},children:e.jsxs(k,{background:o,borderRadius:9,id:d,kind:x,onClick:t=>{t.stopPropagation()},px:c?0:20,py:c?0:20,children:[u&&e.jsx(C,{"data-testid":"close-modal",onClick:u,children:e.jsx(y,{})}),p]})})}):null};export{M as B};
