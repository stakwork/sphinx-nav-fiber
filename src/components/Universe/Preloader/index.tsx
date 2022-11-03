import React, { useState, useEffect } from 'react';
import styled from "styled-components";

const Wrapper = styled.div`
  background: blue;
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 1;
  background-color: #240F52;
  background-image: linear-gradient(0deg, #000, #000);
  height: 100%;
  overflow: hidden;
  display:flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-content: flex-start;
  align-items: center;

  .center {
  margin: 0 auto;
}

.outer-ring {
  position: absolute;
  left: calc(50% - 150px);
  height: 300px;
  width: 300px;
  background-image: linear-gradient(135deg, #FEED07 0%, #FE6A50 5%, #b0873a 15%, #0c0c50 50%, #2a1bc8 100%);
  border-radius: 50%;

  /*  Rotate  */
  animation-duration: 2s;
  animation-name: rotate;
  animation-iteration-count: infinite;
}

.inner-ring {
  position: absolute;
  left: calc(50% - 140px);
  height: 280px;
  width: 280px;
  background-image: linear-gradient(0deg, #36295e, #1c1045);
  border-radius: 50%;
}

@keyframes rotate {
    0% {transform:rotate(0deg);}
    100% {transform:rotate(360deg);}
}
`;

const Preloader = () => {

  const [destroyed, setDestroyed] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setDestroyed(true);
    }, 4000)

  }, []);

  return !destroyed ? (
    <Wrapper>
      <div className="outer-ring center" />
      <div className="inner-ring center" />
    </Wrapper>
  ) : null;
};

export default Preloader;
