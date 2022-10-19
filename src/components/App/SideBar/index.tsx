import styled from "styled-components";
import { Flex } from "~/components/common/Flex";
import { Loader } from "~/components/common/Loader";
import { SearchBar } from "~/components/SearchBar";
import { useAppStore } from "~/stores/useAppStore";
import { useDataStore } from "~/stores/useDataStore";
import { Transcript } from "./Transcript";
import { View } from "./View";
import { colors } from "~/utils/colors";

export const MENU_WIDTH = 433;

const Wrapper = styled(Flex)`
    background: ${colors.background};
    height: 100vh;
    width: ${MENU_WIDTH}px;
    z-index: 30;
`;

const SearchWrapper = styled(Flex).attrs({
  direction: "row",
  p: 20,
})`
  background: ${colors.backgroundHeader};
`;

const CloseButton = styled(Flex).attrs({
  align: "center",
  justify: "center",
  p: 10,
})`
  color: ${colors.textSecondary};
  cursor: pointer;
`;

const Content = () => {
  const clearSearch = useAppStore((s) => s.clearSearch);
  const setFlagErrorOpen = useAppStore((s) => s.setFlagErrorOpen);
  const setSelectedNode = useDataStore((s) => s.setSelectedNode);
  const isLoading = useDataStore((s) => s.isFetching);

  return (
    <Wrapper id="sidebar-wrapper">
      <SearchWrapper>
        <SearchBar />

        <CloseButton
          onClick={() => {
            setFlagErrorOpen(false);
            setSelectedNode(null);
            clearSearch();
          }}
        >
          <span className="material-icons" style={{ fontSize: 20 }}>
            close
          </span>
        </CloseButton>
      </SearchWrapper>

      {isLoading ? <Loader color="textPrimary" /> : <View />}

      <Transcript />
    </Wrapper>
  );
};

export const SideBar = () => {
  const sidebarIsOpen = useAppStore((s) => s.sidebarIsOpen);

  if (!sidebarIsOpen) {
    return null;
  }

  return <Content />;
};
