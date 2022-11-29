import styled from "styled-components";
import { ClipLoader } from "react-spinners";
import { colors } from "~/utils/colors";
import { Flex } from "~/components/common/Flex";
import { GRAPH_FOG_COLOR } from "~/constants";

export const Preloader = () => (
  <Loader align="center" justify="center">
    <ClipLoader color={GRAPH_FOG_COLOR} size={100} />
  </Loader>
);

const Loader = styled(Flex)`
  position: fixed;
  width: 100%;
  height: 100vh;
  background-color: ${colors.black};
  z-index: 1;
`;
