import styled, { keyframes } from "styled-components";
import { Button } from "~/components/Button";
import { colors } from "~/utils/colors";
import { MENU_WIDTH } from "~/components/App/SideBar";
import { Flex } from "~/components/common/Flex";
import { useAppStore } from "~/stores/useAppStore";
import { useSelectedNode } from "~/stores/useDataStore";

const copiedAnimation = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; } 
`;

const copyNodeText = (text: string | undefined) => {
  if (text === undefined) {
    return;
  }

  navigator.clipboard.writeText(text);

  const copyButton = document.querySelector(".copy-button");

  if (copyButton) {
    copyButton.classList.add("copied");

    setTimeout(() => {
      copyButton.classList.remove("copied");
    }, 1000);
  }
};

export const Transcript = () => {
  const [transcriptIsOpen, setTranscriptOpen] = useAppStore((s) => [
    s.transcriptIsOpen,
    s.setTranscriptOpen,
  ]);

  const selectedNode = useSelectedNode();

  if (!transcriptIsOpen) {
    return null;
  }

  return (
    <Wrapper style={{ left: MENU_WIDTH }}>
      <CloseButton
        onClick={() => {
          setTranscriptOpen(false);
        }}
        style={{ left: MENU_WIDTH + 250 - 45 }}
      >
        <span className="material-icons" style={{ fontSize: 15 }}>
          close
        </span>
      </CloseButton>
      {selectedNode?.text && (
        <CopyButton
          className="copy-button"
          kind="small"
          onPointerDown={() => copyNodeText(selectedNode?.text)}
          type="button"
        >
          Copy text
        </CopyButton>
      )}

      <Box py={40}>&quot;{selectedNode?.text || "No transcript"}&quot;</Box>
    </Wrapper>
  );
};

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

const CloseButton = styled(Flex).attrs({
  p: 10,
})`
  color: ${colors.mainBottomIcons};
  cursor: pointer;
  position: fixed;

  &:hover {
    color: ${colors.lightBlue500};
  }
`;

const CopyButton = styled(Button)`
  position: fixed;
  top: 10px;

  &.copied::after {
    content: "Copied!";
    position: absolute;
    top: 9px;
    right: -55px;
    background: ${colors.lightGray};
    border-radius: 4px;
    padding: 2px 3px;
    color: ${colors.white};
    animation: ${copiedAnimation} 0.2s ease-in-out;
  }
`;

const Box = styled(Flex)`
  color: ${colors.lightBlue500};
  margin-top: 10px;
  font-weight: 400;
  font-size: 13px;
  line-height: 18px;
  font-style: italic;
`;
