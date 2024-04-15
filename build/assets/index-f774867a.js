import{f as s,h as e,a_ as p,j as n}from"./index-b85f35cf.js";import{i as c}from"./react-toastify.esm-ce67a4f9.js";const i=s.input.attrs(()=>({autoCorrect:"off",autoComplete:"off"}))`
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
  background: ${e.BG2};

  &:focus {
    outline: 1px solid ${e.primaryBlue};
  }

  &:hover {
    background: ${e.black};
  }

  &::placeholder {
    color: ${e.GRAY7};
  }

  ${({loading:r})=>r&&p`
      background-image: url('https://i.gifer.com/ZZ5H.gif');
      background-size: 25px 25px;
      background-position: right center;
      background-position-x: 95%;
      background-repeat: no-repeat;
    `}
`,u=({loading:r,onSubmit:o})=>{const{register:a}=c();return n.jsx(i,{...a("search"),disabled:r,id:"main-search",loading:r,onKeyPress:t=>{t.key==="Enter"&&(o==null||o())},placeholder:"Search",type:"text"})};export{u as S};
