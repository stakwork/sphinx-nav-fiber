import{f as i,h as e,aY as n,j as s}from"./index-22832e12.js";import{i as p}from"./react-toastify.esm-ffc605e6.js";const c=i.input.attrs(()=>({autoCorrect:"off",autoComplete:"off"}))`
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

  -webkit-autofill,
  -webkit-autocomplete,
  -webkit-contacts-auto-fill,
  -webkit-credentials-auto-fill {
    display: none !important;
    visibility: hidden !important;
    pointer-events: none !important;
    position: absolute !important;
    right: 0 !important;
  }

  &:focus {
    outline: 1px solid ${e.primaryBlue};
  }

  &:hover {
    background: ${e.black};
  }

  &::placeholder {
    color: ${e.GRAY7};
  }

  ${({loading:o})=>o&&n`
      background-image: url('https://i.gifer.com/ZZ5H.gif');
      background-size: 25px 25px;
      background-position: right center;
      background-position-x: 95%;
      background-repeat: no-repeat;
    `}
`,u=({loading:o,onSubmit:t})=>{const{register:r}=p();return s.jsx(c,{...r("search"),disabled:o,id:"main-search",loading:o,onKeyPress:a=>{a.key==="Enter"&&(t==null||t())},placeholder:"Search",type:"text"})};export{u as S};
