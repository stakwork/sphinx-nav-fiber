import{f as s,h as o,aS as p,j as c}from"./index-b17e6e7f.js";import{i as d}from"./react-toastify.esm-ac6bd257.js";const l=s.input.attrs(()=>({autoCorrect:"off",autoComplete:"off"}))`
  pointer-events: auto;
  height: 48px;
  padding: 0 40px 0 18px;
  z-index: 2;
  box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  color: #fff;
  box-shadow: none;
  border: none;
  border-radius: 200px;
  background: ${o.BG2};

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
    outline: 1px solid ${o.primaryBlue};
  }

  &:hover {
    background: ${o.black};
  }

  &::placeholder {
    color: ${o.GRAY7};
  }

  ${({loading:t})=>t&&p`
      background-image: url('https://i.gifer.com/ZZ5H.gif');
      background-size: 25px 25px;
      background-position: right center;
      background-position-x: 95%;
      background-repeat: no-repeat;
    `}
`,h=({loading:t,onSubmit:e})=>{const{register:r,watch:a}=d(),i=a("search");return c.jsx(l,{...r("search"),disabled:t,id:"main-search",loading:t,onKeyPress:n=>{if(n.key==="Enter"){if(i.trim()==="")return;e==null||e()}},placeholder:"Search",type:"text"})};export{h as S};
