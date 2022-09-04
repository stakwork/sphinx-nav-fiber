import styled from "styled-components";

type Props = {
  src: string;
};

export const Avatar = styled.div<Props>`
  background-image: ${({ src }) => `url(${src})`};
  background-size: contain;
  background-repeat: no-repeat;
  flex-grow: 0;
  flex-shrink: 0;
  margin-right: 12px;
  width: 45px;
  height: 45px;
  border-radius: 4px;
`;
