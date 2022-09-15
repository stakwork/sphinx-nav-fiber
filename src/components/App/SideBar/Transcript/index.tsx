import styled from "styled-components";
import { MENU_WIDTH } from "~/components/App/SideBar";
import { Flex } from "~/components/common/Flex";
import { useAppStore } from "~/stores/useAppStore";
import { useSelectedNode } from "~/stores/useDataStore";

const Wrapper = styled(Flex)`
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

const Box = styled(Flex)`
  margin-top: 10px;
  font-weight: 400;
  font-size: 13px;
  line-height: 18px;
  font-style: italic;

  /* Main bottom icons */
  color: #5d8fdd;
`;

export const Transcript = () => {
  const transcriptIsOpen = useAppStore((s) => s.transcriptIsOpen);
  const selectedNode = useSelectedNode();

  if (!transcriptIsOpen) {
    return null;
  }

  return (
    <Wrapper style={{ left: MENU_WIDTH }}>
      <Box py={40}>"{selectedNode?.text || "No transcript"}"</Box>
    </Wrapper>
  );
};
