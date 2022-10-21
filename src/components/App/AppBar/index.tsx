import styled from "styled-components";
import { Flex } from "~/components/common/Flex";
import { Text } from "~/components/common/Text";
import { SearchBar } from "~/components/SearchBar";
import { Stats } from "~/components/Stats";
import { useAppStore } from "~/stores/useAppStore";
import { media } from "~/utils/media";

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
  pointer-events: none;
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

const SearchBarWrapper = styled.div`
  width: 60%;

  ${media.smallOnly`
    width: 100%;
  `}
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

      <SearchBarWrapper>
        <SearchBar />
      </SearchBarWrapper>

      <div />
    </Header>
  );
};
