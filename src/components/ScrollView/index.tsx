import styled from "styled-components";
import { Flex } from "~/components/common/Flex";
import { colors } from "~/utils/colors";

export const ScrollView = styled(Flex)`
  overflow-y: scroll;
  overflow-x: hidden;
  background: ${colors.background};
`;
