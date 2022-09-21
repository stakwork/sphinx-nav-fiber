import { Booster } from "~/components/Booster";
import { Flex } from "~/components/common/Flex";
import { Pill } from "~/components/common/Pill";
import { useAppStore } from "~/stores/useAppStore";
import { useDataStore } from "~/stores/useDataStore";

export const Actions = () => {
  const [transcriptIsOpen, setTranscriptOpen] = useAppStore((s) => [
    s.transcriptIsOpen,
    s.setTranscriptOpen,
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
    </Flex>
  );
};
