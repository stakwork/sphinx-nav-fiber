import { MdOutlinedFlag } from "react-icons/md";
import styled from "styled-components";
import { Booster } from "~/components/Booster";
import { Flex } from "~/components/common/Flex";
import { Pill } from "~/components/common/Pill";
import { useAppStore } from "~/stores/useAppStore";
import { useDataStore } from "~/stores/useDataStore";
import { colors } from "~/utils/colors";

type FlagErrorProps = {
  flagErrorIsOpen?: boolean;
};

const FlagError = styled(Flex)<FlagErrorProps>`
  color: ${({ flagErrorIsOpen }) =>
    flagErrorIsOpen ? colors.lightBlue200 : colors.white};
  padding: 0 0 0 8px;
  &:hover {
    cursor: pointer;
    color: ${colors.lightBlue200};
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
        style={{ padding: "4px 8px" }}
      >
        Transcript
      </Pill>

      <Flex pl={10}>
        <Booster content={selectedNode} refId={selectedNode?.id} />
      </Flex>

      <FlagError
        flagErrorIsOpen={flagErrorIsOpen}
        onClick={() => setFlagErrorOpen(!flagErrorIsOpen)}
      >
        <MdOutlinedFlag fontSize={20} />
      </FlagError>
    </Flex>
  );
};
