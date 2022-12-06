import styled from "styled-components";
import { Flex } from "~/components/common/Flex";
import { Loader } from "~/components/common/Loader";
import { SearchBar } from "~/components/SearchBar";
import { useAppStore } from "~/stores/useAppStore";
import { useDataStore, useSelectedNode } from "~/stores/useDataStore";
import { colors } from "~/utils/colors";
import { Tab } from "./Tab";
import { Transcript } from "./Transcript";
import { View } from "./View";

export const MENU_WIDTH = 433;

const Content = () => {
  const clearSearch = useAppStore((s) => s.clearSearch);
  const setFlagErrorOpen = useAppStore((s) => s.setFlagErrorOpen);
  const setRelevanceSelected = useAppStore((s) => s.setRelevanceSelected);
  const setSelectedNode = useDataStore((s) => s.setSelectedNode);
  const isLoading = useDataStore((s) => s.isFetching);
  const setSidebarOpen = useAppStore((s) => s.setSidebarOpen);

  return (
    <Wrapper id="sidebar-wrapper">
      <SearchWrapper>
        <SearchBar />

        <CloseButton
          onClick={() => {
            setFlagErrorOpen(false);
            setSelectedNode(null);
            clearSearch();
            setRelevanceSelected(false);
          }}
        >
          <span className="material-icons" style={{ fontSize: 20 }}>
            close
          </span>
        </CloseButton>
      </SearchWrapper>
      <CollapseButton
        onClick={() => {
          setSidebarOpen(false);
        }}
      >
        <span className="material-icons" style={{ fontSize: 20 }}>
          keyboard_double_arrow_left
        </span>
      </CollapseButton>

      {isLoading ? <Loader color="primaryText1" /> : <View />}

      <Transcript />
    </Wrapper>
  );
};

export const SideBar = () => {
  const sidebarIsOpen = useAppStore((s) => s.sidebarIsOpen);
  const selectedNode = useSelectedNode();
  const searchTerm = useAppStore((s) => s.currentSearch);

  if (!sidebarIsOpen) {
    if (!selectedNode && !searchTerm) {
      return null;
    }

    return <Tab />;
  }

  return <Content />;
};

const Wrapper = styled(Flex)`
  background: ${colors.body};
  height: 100vh;
  width: ${MENU_WIDTH}px;
  z-index: 30;
`;

const SearchWrapper = styled(Flex).attrs({
  direction: "row",
  p: 30,
})`
  background: ${colors.dashboardHeader};
`;

const CloseButton = styled(Flex).attrs({
  align: "center",
  justify: "center",
  p: 5,
})`
  background-color: ${colors.inputBg1};
  border-radius: 0 5px 5px 0;
  color: ${colors.mainBottomIcons};
  cursor: pointer;
  transition-duration: 0.2s;

  &:hover {
    background-color: ${colors.gray200};
  }
`;

const CollapseButton = styled(Flex).attrs({
  align: "center",
  justify: "center",
  p: 5,
})`
  background-color: ${colors.dashboardHeader};
  border-radius: 0 5px 5px 0;
  color: ${colors.mainBottomIcons};
  cursor: pointer;
  transition-duration: 0.2s;
  position: absolute;
  left: ${MENU_WIDTH}px;
  top: 78px;

  &:hover {
    background-color: ${colors.gray300};
  }
`;
