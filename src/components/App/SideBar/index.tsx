import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styled from "styled-components";
import { Flex } from "~/components/common/Flex";
import { Loader } from "~/components/common/Loader";
import { SearchBar } from "~/components/SearchBar";
import { useAppStore } from "~/stores/useAppStore";
import { useDataStore } from "~/stores/useDataStore";
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
      <StyledToast />

      <SearchWrapper>
        <CollapseButton
          onClick={() => {
            setSidebarOpen(false);
          }}
        >
          <span className="material-icons" style={{ fontSize: 20 }}>
            keyboard_double_arrow_left
          </span>
        </CollapseButton>
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

      {isLoading ? <Loader color="primaryText1" /> : <View />}

      <Transcript />
    </Wrapper>
  );
};

export const SideBar = () => {
  const sidebarIsOpen = useAppStore((s) => s.sidebarIsOpen);

  if (!sidebarIsOpen) {
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

const StyledToast = styled(ToastContainer)`
  .Toastify__toast {
    background-color: ${colors.body};
  }
  .Toastify__toast-body {
    background-color: ${colors.body};
    color: ${colors.white};
  }
  .Toastify__close-button {
    color: ${colors.white};
  }
  .Toastify__progress-bar--error {
    background-color: ${colors.primaryRed};
  }
  .Toastify__progress-bar--success {
    background-color: ${colors.primaryGreen};
  }
`;

const SearchWrapper = styled(Flex).attrs({
  direction: "row",
  p: 25,
})`
  background: ${colors.dashboardHeader};
`;

const CloseButton = styled(Flex).attrs({
  align: "center",
  justify: "center",
  p: 5,
})`
  background-color: rgba(19, 24, 29, 1);
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
  background-color: rgba(19, 24, 29, 1);
  border-radius: 5px 0 0 5px;
  color: ${colors.mainBottomIcons};
  cursor: pointer;
  transition-duration: 0.2s;

  &:hover {
    background-color: ${colors.gray200};
  }
`;
