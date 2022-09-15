import styled from "styled-components";
import { Loader } from "~/components/common/Loader";
import { SearchBar } from "~/components/SearchBar";
import { useAppStore } from "~/stores/useAppStore";
import { useDataStore } from "~/stores/useDataStore";
import { Transcript } from "./Transcript";
import { View } from "./View";

export const MENU_WIDTH = 433;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  background: #ffffff;
  min-width: ${MENU_WIDTH}px;
  width: ${MENU_WIDTH}px;
  z-index: 30;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
`;

const SearchWrapper = styled.div`
  display: flex;
  padding: 20px;
  position: relative;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.2);
`;

const CloseButton = styled.div`
  align-items: center;
  color: #000;
  cursor: pointer;
  display: flex;
  justify-content: center;
  padding: 10px;
  width: fit-content;
`;

const Content = () => {
  const clearSearch = useAppStore((s) => s.clearSearch);
  const setSelectedNode = useDataStore((s) => s.setSelectedNode);
  const isLoading = useDataStore((s) => s.isFetching);

  return (
    <Wrapper>
      <SearchWrapper>
        <SearchBar />

        {!isLoading && (
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
        )}
      </SearchWrapper>

      {isLoading ? <Loader /> : <View />}

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
