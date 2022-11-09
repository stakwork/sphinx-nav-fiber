import { useMemo } from "react";
import { useSelectedNode } from "~/stores/useDataStore";
import { videoTimetoSeconds } from "~/utils/videoTimetoSeconds";


export const YouTube = () => {
  const selectedNode = useSelectedNode();

  const {
    link,
    timestamp,
  } = selectedNode || {};

  const secs = videoTimetoSeconds(timestamp || "");

  const embeddedUrl = useMemo(
    () =>
      `${
        link?.replace("watch?v=", "embed/").split("?")[0]
      }?start=${secs}&autoplay=1`,
    [link, secs]
  );

  if (!selectedNode) {
    return null;
  }

  return (
    <div style={{ height: "100%", overflow: "auto", width: "100%" }}>
      <div>
        <iframe
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
          className="youtube-embedded"
          frameBorder="0"
          height="200px"
          src={embeddedUrl}
          title="ViewVideo"
          width="100%"
        />
      </div>
    </div>
  );
};
