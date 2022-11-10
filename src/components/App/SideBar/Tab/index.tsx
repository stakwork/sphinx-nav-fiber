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
  color: ${colors.black};
  cursor: pointer;
`;

const Wrapper = styled(Flex)`
  background-color: ${colors.white};
  border-right: 1px solid ${colors.black};
  border-radius: 0 5px 5px 0;
  position: absolute;
  top: 50px;
  transition: all 0.2s;
  z-index: 30;

  &:hover {
    opacity: 0.8;
  }
`;
