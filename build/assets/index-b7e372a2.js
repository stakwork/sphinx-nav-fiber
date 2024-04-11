import{da as m,f as a,h as r,aZ as i,F as l,r as v,j as e}from"./index-ce90e457.js";import{u as w}from"./index-6c725456.js";import{b as y}from"./react-toastify.esm-b633f53f.js";const b=m`
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
`,M=({background:o="modalBg",children:u,id:c,hideBg:x,kind:f,preventOutsideClose:h,noWrap:d=!1,onClose:p})=>{const{visible:n,close:s}=w(c);return v.useEffect(()=>{const t=g=>{g.keyCode===27&&s()};return n&&document.addEventListener("keydown",t),()=>{document.removeEventListener("keydown",t)}},[n,s]),n?e.jsx(e.Fragment,{children:e.jsx($,{align:"center",hideBg:x,justify:"center",onClick:t=>{h||(t.stopPropagation(),s())},children:e.jsxs(k,{background:o,borderRadius:9,id:c,kind:f,onClick:t=>{t.stopPropagation()},px:d?0:20,py:d?0:20,children:[p&&e.jsx(C,{"data-testid":"close-modal",onClick:p,children:e.jsx(y,{})}),u]})})}):null};export{M as B};
