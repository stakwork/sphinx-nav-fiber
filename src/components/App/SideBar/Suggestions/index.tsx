import styled from "styled-components";
import { Relevance } from "../Relevance";

const Divider = styled.div`
  height: 1px;
  background: #ccc;
  width: 95%;
`;

export const Suggestions = () => (
  <div>
    <Divider style={{ width: "100%", marginBottom: 20 }} />
    <div
      style={{
        marginLeft: 20,
        marginBottom: 10,
        color: "#292C33",
      }}
    >
      More like this...
    </div>
    <div>
      <Relevance />
    </div>
  </div>
);
