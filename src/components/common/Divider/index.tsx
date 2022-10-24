import styled from "styled-components";
import { Flex } from "~/components/common/Flex";
import { colors } from "~/utils/colors";


export const Divider = styled(Flex)`
  background: ${colors.divider2};
  height: 1px;
  margin: auto 22px;
`;
