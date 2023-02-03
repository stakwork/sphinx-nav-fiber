import styled from "styled-components";
import { Button } from "~/components/Button";
import { Flex } from "~/components/common/Flex";
import { Text } from "~/components/common/Text";
import { SearchBar } from "~/components/SearchBar";
import { Stats } from "~/components/Stats";
import { useAppStore } from "~/stores/useAppStore";
import { useSelectedNode } from "~/stores/useDataStore";
import { useModal } from "~/stores/useModalStore";
import { colors } from "~/utils/colors";
import { media } from "~/utils/media";

type Props = {
  onSubmit?: () => void;
};

export const AppBar = ({ onSubmit }: Props) => {
  const sidebarIsOpen = useAppStore((s) => s.sidebarIsOpen);
  const selectedNode = useSelectedNode();

  const searchTerm = useAppStore((s) => s.currentSearch);

  const { open } = useModal("addNode");

  return !sidebarIsOpen ? (
    <Header>
      <TitleWrapper>
        <Text color="white" kind="bigHeadingBold">
          Second
        </Text>
        <Text color="white" kind="bigHeading">
          Brain
        </Text>
      </TitleWrapper>

      <StatsWrapper>{!selectedNode && !searchTerm && <Stats />}</StatsWrapper>

      <SearchBarWrapper>
        <SearchBar onSubmit={onSubmit} />
      </SearchBarWrapper>

      <Flex>
        <AddButton kind="small" onClick={open}>
          Add Content +
        </AddButton>
      </Flex>
    </Header>
  ) : (
    <AddNodeWrapper>
      <AddButton kind="small" onClick={open}>
        Add Content +
      </AddButton>
    </AddNodeWrapper>
  );
};

const Header = styled(Flex).attrs({
  align: "center",
  direction: "row",
  grow: 1,
  justify: "space-between",
  p: 20,
})`
  height: 60px;
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  transition: opacity 1s;
`;

const TitleWrapper = styled.div`
  ${media.smallOnly`
    display: none;
  `}
`;

const StatsWrapper = styled.div`
  left: 25px;
  position: absolute;
  top: 75px;
`;

const AddButton = styled(Button)`
  background: ${colors.primaryBlueBorder};
  &:hover {
    opacity: 1;
    box-shadow: 0 0 10px 2px ${colors.primaryBlueBorder};
  }
`;

const AddNodeWrapper = styled(Flex)`
  position: absolute;
  top: 14px;
  right: 20px;
`;

const SearchBarWrapper = styled.div`
  width: 60%;

  ${media.smallOnly`
    width: 100%;
  `}
`;
