import { useState } from "react";
import { ClipLoader } from "react-spinners";
import styled from "styled-components";
import { SearchBar } from "~/components/SearchBar";
import { useAppStore } from "~/stores/useAppStore";
import { useDataStore } from "~/stores/useDataStore";
import { View } from "./View";

type Props = {
  dataFilter?: any;
  loading?: boolean;
  onClose?: () => void;
};

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

const TranscriptEnv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 40px;
  overflow: auto;
  position: absolute;
  top: 0px;
  left: 200px;
  height: 100%;
  width: 250px;
  transition: opacity 0.2s;
  background: #f0f6ff;
  box-shadow: 4px 8px 8px rgba(0, 0, 0, 0.2);
`;

const Transcript = styled.div`
  margin-top: 10px;
  font-weight: 400;
  font-size: 13px;
  line-height: 18px;
  font-style: italic;

  /* Main bottom icons */
  color: #5d8fdd;
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

const Content = ({ loading, onClose }: Props) => {
  const clearSearch = useAppStore((s) => s.clearSearch);
  const setSelectedNode = useDataStore((s) => s.setSelectedNode);
  const transcriptIsOpen = useAppStore((s) => s.transcriptIsOpen);

  const [selectedContent, setSelectedContent] =
    useState<string>("No transcript");

  return (
    <Wrapper>
      <SearchWrapper>
        <SearchBar />

        {!loading && (
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

      {loading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          <ClipLoader color={"#000"} loading={true} size={14} />
        </div>
      ) : (
        <View />
      )}

      {transcriptIsOpen && (
        <TranscriptEnv style={{ left: MENU_WIDTH }}>
          <div style={{ minHeight: 40 }} />
          <Transcript>"{selectedContent}"</Transcript>
          <div style={{ minHeight: 40 }} />
        </TranscriptEnv>
      )}
    </Wrapper>
  );
};

export const SideBar = (props: Props) => {
  const sidebarIsOpen = useAppStore((s) => s.sidebarIsOpen);

  if (!sidebarIsOpen) {
    return null;
  }

  return <Content {...props} />;
};
