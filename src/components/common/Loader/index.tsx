import { ClipLoader } from "react-spinners";
import styled from "styled-components";

const Shield = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  pointer-events: none;
  user-select: none;
  top: 0px;
  left: 0px;
  height: 100%;
  width: 100%;
  background: #f1f1f1;
  color: #000;
  transition: opacity 0.5s;
`;

export const Loader = ({ message }: { message?: string }) => (
  <Shield>
    <ClipLoader color={"#000"} loading={true} size={14} />
    {message && <div style={{ marginLeft: 10 }}>{message}</div>}
  </Shield>
);
