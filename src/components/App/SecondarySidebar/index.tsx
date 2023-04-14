import { MdClose } from "react-icons/md";
import styled from "styled-components";
import { Flex } from "~/components/common/Flex";
import { useAppStore } from "~/stores/useAppStore";
import { colors } from "~/utils/colors";
import { Sentiment } from "./Sentiment";
import { Sources } from "./SourcesView/Sources";
import { SourcesView } from "./SourcesView";

export const MENU_WIDTH = 600;

export const SecondarySideBar = () => {

  const [secondarySidebarActiveTab, setSecondarySidebarActiveTab] = useAppStore((s) => [
    s.secondarySidebarActiveTab,
    s.setSecondarySidebarActiveTab,
  ])

  return secondarySidebarActiveTab ? (
    <Wrapper id="sidebar-wrapper">
      <CloseButton onClick={() => setSecondarySidebarActiveTab('')}>
        <MdClose />
      </CloseButton>
      {secondarySidebarActiveTab === 'sentiment' ? <Sentiment /> : <SourcesView />}
    </Wrapper>
  ) : null
};

const Wrapper = styled(Flex)`
  background: ${colors.body};
  height: 100vh;
  padding: 16px 20px;
  width: ${MENU_WIDTH}px;
  z-index: 30;
  display: flex;

  .content {
    display: flex;
    flex-direction: column;
    align
  }
`;

const CloseButton = styled(Flex).attrs({
  align: "center",
  justify: "center",
  p: 5,
})`
  background-color: ${colors.inputBg1};
  border-radius: 50%;
  color: ${colors.mainBottomIcons};
  cursor: pointer;
  transition-duration: 0.2s;
  align-self: flex-end;
  margin-bottom: 16px;

  &:hover {
    background-color: ${colors.gray200};
  }
`;
