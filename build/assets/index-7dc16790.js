import{s,b as r,ae as p,j as n}from"./index-3a377fb0.js";import{W as c}from"./react-toastify.esm-23f7cb33.js";const i=s.input.attrs(()=>({autoCorrect:"off",autoComplete:"off"}))`
  pointer-events: auto;
  height: 48px;
  padding: 0 20px;
  z-index: 2;
  box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  color: #fff;
  box-shadow: none;
  border: none;
  border-radius: 200px;
  background: ${r.BG2};

  &:focus {
    outline: 1px solid ${r.primaryBlue};
  }

  &:hover {
    background: ${r.black};
  }

  &::placeholder {
    color: ${r.GRAY7};
  }

  ${({loading:e})=>e&&p`
      background-image: url('https://i.gifer.com/ZZ5H.gif');
      background-size: 25px 25px;
      background-position: right center;
      background-position-x: 95%;
      background-repeat: no-repeat;
    `}
`,u=({loading:e,onSubmit:o})=>{const{register:a}=c();return n.jsx(i,{...a("search"),disabled:e,id:"main-search",loading:e,onKeyPress:t=>{t.key==="Enter"&&(o==null||o())},placeholder:"Search",type:"text"})};export{u as S};
