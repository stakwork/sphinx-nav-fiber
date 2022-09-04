import { Pill } from "~/components/common/Pill";
import Booster from "~/main/map/booster";
import { useAppStore } from "~/stores/useAppStore";

export const Actions = () => {
  const [transcriptIsOpen, setTranscriptOpen] = useAppStore((s) => [
    s.transcriptIsOpen,
    s.setTranscriptOpen,
  ]);

  return (
    <div style={{ display: "flex", alignItems: "center", margin: "10px 0" }}>
      <Pill
        selected={transcriptIsOpen}
        onClick={() => setTranscriptOpen(!transcriptIsOpen)}
      >
        Transcript
      </Pill>
      <Booster
      // refId={selectedContent?.ref_id}
      // content={selectedContent}
      />
    </div>
  );
};
