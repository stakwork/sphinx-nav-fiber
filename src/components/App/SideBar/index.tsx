import styled from "styled-components";
import { Flex } from "~/components/common/Flex";
import { Loader } from "~/components/common/Loader";
import { SearchBar } from "~/components/SearchBar";
import { useAppStore } from "~/stores/useAppStore";
import { useDataStore } from "~/stores/useDataStore";
import { Transcript } from "./Transcript";
import { View } from "./View";

export const MENU_WIDTH = 433;

const Wrapper = styled(Flex).attrs({
  background: "white",
})`
  height: 100vh;
  width: ${MENU_WIDTH}px;
  z-index: 30;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
`;

const SearchWrapper = styled(Flex).attrs({
  direction: "row",
  p: 20,
})`
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.2);
`;

const CloseButton = styled(Flex).attrs({
  align: "center",
  justify: "center",
  p: 10,
})`
  color: #000;
  cursor: pointer;
`;

const Content = () => {
  const clearSearch = useAppStore((s) => s.clearSearch);
  const setSelectedNode = useDataStore((s) => s.setSelectedNode);
  const isLoading = useDataStore((s) => s.isFetching);

  return (
    <Wrapper id="sidebar-wrapper">
      <SearchWrapper>
        <SearchBar />

        <CloseButton
          onClick={() => {
            setSelectedNode(null);
            clearSearch();
          }}
        >
          <span className="material-icons" style={{ fontSize: 20 }}>
            close
          </span>
        </CloseButton>
      </SearchWrapper>

      {isLoading ? <Loader color="black" /> : <View />}

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
