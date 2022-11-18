import styled from "styled-components";
import { colors } from "~/utils/colors";
import { Flex } from "~/components/common/Flex";
import { useAppStore } from "~/stores/useAppStore";

export const Tab = () => {
  const setSidebarOpen = useAppStore((s) => s.setSidebarOpen);

  return (
    <Wrapper>
      <ExpandButton
        onClick={() => {
          setSidebarOpen(true);
        }}
      >
        <span className="material-icons" style={{ fontSize: 25 }}>
          keyboard_double_arrow_right
        </span>
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
  top: 100px;
  transition: all 0.2s;
  z-index: 30;

  &:hover {
    opacity: 0.8;
  }
`;
