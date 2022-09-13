import styled from "styled-components";
import { Flex } from "~/components/common/Flex";
import { Text } from "~/components/common/Text";
import { SearchBar } from "~/components/SearchBar";
import { Stats } from "~/components/Stats";
import { useAppStore } from "~/stores/useAppStore";

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
  width: calc(100% - 40px);
  pointer-events: none;
  transition: opacity 1s;
`;

const TitleWrapper = styled.div``;

const StatsWrapper = styled.div`
  left: 25px;
  position: absolute;
  top: 75px;
`;

export const AppBar = () => {
  const sidebarIsOpen = useAppStore((s) => s.sidebarIsOpen);

  if (sidebarIsOpen) {
    return null;
  }

  return (
    <Header>
      <TitleWrapper>
        <Text color="white" kind="bigHeadingBold">
          Second
        </Text>
        <Text color="white" kind="bigHeading">
          Brain
        </Text>
      </TitleWrapper>

      <StatsWrapper>
        <Stats />
      </StatsWrapper>

      <div style={{ width: "40%" }}>
        <SearchBar />
      </div>

      <div />
    </Header>
  );
};
