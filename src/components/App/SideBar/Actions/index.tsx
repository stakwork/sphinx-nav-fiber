import { Pill } from "~/components/common/Pill";
import Booster from "~/main/map/booster";
import { useDataStore } from "~/stores/useDataStore";
import { useAppStore } from "~/stores/useAppStore";

export const Actions = () => {
  const [transcriptIsOpen, setTranscriptOpen] = useAppStore((s) => [
    s.transcriptIsOpen,
    s.setTranscriptOpen,
  ]);
  const selectedNode = useDataStore((s) => s.selectedNode);

  return (
    <div style={{ display: "flex", alignItems: "center", margin: "10px 0" }}>
      <Pill
        selected={transcriptIsOpen}
        onClick={() => setTranscriptOpen(!transcriptIsOpen)}
      >
        Transcript
      </Pill>
      <Booster
       refId={selectedNode?.id}
       content={selectedNode}
      />
    </div>
  );
};
