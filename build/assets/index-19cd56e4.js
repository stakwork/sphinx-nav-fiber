import{s as a,g as d,r as p,E as S,b as I,a as N,c as _,j as e,q as z,F as f,T as w,B as L,e as M,b6 as R}from"./index-2f9ba739.js";import{S as $}from"./index-4887c341.js";import{b as F,J as G}from"./index-ee48d8c5.js";import{S as q}from"./SoundIcon-458a3f0d.js";const H=({trend:t,onClose:n})=>{var m,g;const[r,l]=p.useState(!1),{close:h}=S("briefDescription"),{currentPlayingAudio:s,setCurrentPlayingAudio:u}=I(o=>o),[y]=N(o=>[o.setBudget]),{fetchData:C,setAbortRequests:k}=_(o=>o),i=p.useRef(null),E=async()=>{v(),await C(y,k,t.tldr_topic??t.name)},v=p.useCallback(()=>{n(),h()},[n,h]),D=()=>{i.current&&(r?i.current.pause():i.current.play(),l(!r))},T=()=>{var c,j,b;const o=!((c=s==null?void 0:s.current)!=null&&c.paused);o&&((j=s==null?void 0:s.current)==null||j.pause(),u(null)),(((b=s==null?void 0:s.current)==null?void 0:b.src)!==t.audio_EN||!o)&&D()};p.useEffect(()=>{const o=i.current,c=()=>{l(!1),u(null)};return o&&o.addEventListener("ended",c),()=>{o&&o.removeEventListener("ended",c)}},[u]);const x=((m=s==null?void 0:s.current)==null?void 0:m.src)===t.audio_EN&&!((g=s==null?void 0:s.current)!=null&&g.paused)||r;return e.jsxs(e.Fragment,{children:[t.audio_EN?e.jsxs(e.Fragment,{children:[e.jsxs(Y,{children:[e.jsx(B,{className:z("default",{play:x}),onClick:T,size:"small",startIcon:x?e.jsx(F,{}):e.jsx(q,{}),children:x?"Pause":"Listen"}),e.jsx(B,{className:"default",onClick:E,size:"small",startIcon:e.jsx(G,{}),children:"Learn More"})]}),e.jsx(W,{ref:i,src:t.audio_EN,children:e.jsx("track",{kind:"captions"})})]}):null,e.jsxs(f,{mt:75,children:[e.jsx(U,{children:t.tldr_topic??t.name}),e.jsx(J,{children:e.jsx(f,{children:e.jsx(O,{children:t.tldr&&e.jsx($,{children:t.tldr})})})})]})]})},J=a.div`
  max-height: 310px;
  overflow-y: auto;
  margin: 8px 0;
  padding: 0 20px;
`,O=a(w)`
  font-size: 18px;
  font-weight: 400;
  font-family: 'Barlow';
  * {
    all: revert;
  }
`,U=a(w)`
  font-weight: 600;
  font-size: 20px;
  padding: 0 20px;
`,W=a.audio`
  display: none;
`,B=a(L)`
  && {
    &.default {
      font-size: 13px;
      font-weight: 500;
      font-family: Barlow;
      padding: 12px, 16px, 12px, 10px;
      color: ${d.white};

      &:hover {
        color: ${d.GRAY3};
      }

      &.play {
        color: ${d.BG3};
        background-color: ${d.white};
      }
    }
  }
`,Y=a(f)`
  top: 0px;
  position: absolute;
  border-radius: 16px 16px 0px 0px;
  padding: 0px 12px;
  width: 100%;
  height: 60px;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${d.BG3};
  gap: 10px;
`,K=M(t=>({trend:null,setTrend:n=>t({trend:n})})),Z=()=>{const{close:t}=S("briefDescription"),{trend:n,setTrend:r}=K(),l=()=>{r(null),t()};return n?e.jsx(R,{"data-testid":"brief-description-modal",id:"briefDescription",kind:"regular",noWrap:!0,onClose:l,preventOutsideClose:!0,children:e.jsx(H,{onClose:l,trend:n})}):null};export{Z as BriefDescription,K as useBriefDescriptionStore};
