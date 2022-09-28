import styled from "styled-components";
import { colors } from "~/utils/colors";
import { Booster } from "~/components/Booster";
import { Flex } from "~/components/common/Flex";
import { Pill } from "~/components/common/Pill";
import { useAppStore } from "~/stores/useAppStore";
import { useDataStore } from "~/stores/useDataStore";

const FlagError = styled(Flex)`
  cursor: pointer;
  padding: 0 0 0 8px;
  &:hover {
    color: ${colors.gray200};
  }
`;

export const Actions = () => {
  const [transcriptIsOpen, setTranscriptOpen] = useAppStore((s) => [
    s.transcriptIsOpen,
    s.setTranscriptOpen,
  ]);

  const [flagErrorIsOpen, setFlagErrorOpen] = useAppStore((s) => [
    s.flagErrorIsOpen,
    s.setFlagErrorOpen,
  ]);

  const selectedNode = useDataStore((s) => s.selectedNode);

  return (
    <Flex align="center" direction="row">
      <Pill
        onClick={() => setTranscriptOpen(!transcriptIsOpen)}
        selected={transcriptIsOpen}
      >
        Transcript
      </Pill>

      <Flex pl={10}>
        <Booster content={selectedNode} refId={selectedNode?.id} />
      </Flex>
      <FlagError onClick={() => setFlagErrorOpen(!flagErrorIsOpen)}>
        <span className="material-icons" style={{ fontSize: 30 }}>
          error_outline
        </span>
      </FlagError>
    </Flex>
  );
};
