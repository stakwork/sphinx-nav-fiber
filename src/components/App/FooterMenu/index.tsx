import { MdOutlineShowChart } from 'react-icons/md'
import styled from "styled-components";
import { Flex } from "~/components/common/Flex";
import { useAppStore } from "~/stores/useAppStore";
import { colors } from "~/utils/colors";

export const FooterMenu = () => {
  const setSecondarySidebarIsOpen = useAppStore((s) => s.setSecondarySidebarIsOpen);

  return (
    <FooterAction>
      <Flex>
        <ChartButton onClick={() => setSecondarySidebarIsOpen(true)}>
          <MdOutlineShowChart size={24} />
        </ChartButton>
      </Flex>
    </FooterAction>
  )
};

const FooterAction = styled(Flex).attrs({
  align: "center",
  direction: "row",
  grow: 1,
  justify: "space-between",
  p: 20,
})`
  height: 60px;
  position: absolute;
  bottom: 0;
  right: 0;
  width: auto%;
  transition: opacity 1s;
`;

const ChartButton = styled(Flex).attrs({
  align: "center",
  justify: "center",
  p: 5,
})`
  background: ${colors.primaryBlueBorder};
  border-radius: 50%;
  color: ${colors.white};
  cursor: pointer;
  transition-duration: 0.2s;

  &:hover {
    opacity: 1;
    box-shadow: 0 0 10px 2px ${colors.primaryBlueBorder};
  }
`;
