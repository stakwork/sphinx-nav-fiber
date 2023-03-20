import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import styled from "styled-components";
import { Flex } from "~/components/common/Flex";
import { useAppStore } from "~/stores/useAppStore";
import { colors } from "~/utils/colors";

export const Tab = () => {
  const setSidebarOpen = useAppStore((s) => s.setSidebarOpen);

  return (
    <Wrapper>
      <ExpandButton
        onClick={() => {
          setSidebarOpen(true);
        }}
      >
        <MdKeyboardDoubleArrowRight fontSize={25} />
      </ExpandButton>
    </Wrapper>
  );
};

const ExpandButton = styled(Flex).attrs({
  align: "center",
  justify: "center",
})`
  color: ${colors.white};
  cursor: pointer;
`;

const Wrapper = styled(Flex)`
  background-color: ${colors.dashboardHeader};
  border-right: 1px solid ${colors.dashboardHeader};
  border-radius: 0 5px 5px 0;
  position: absolute;
  top: 80px;
  transition: all 0.2s;
  z-index: 30;

  &:hover {
    opacity: 0.8;
  }
`;
