import { useEffect, useMemo, useRef } from "react";
import { useSelectedNode } from "~/stores/useDataStore";
import { videoTimetoSeconds } from "~/utils/videoTimetoSeconds";
import ReactPlayer from "react-player";

export const YouTube = () => {
  const selectedNode = useSelectedNode();
  const playerRef = useRef(null);

  const {
    link,
    timestamp,
  } = selectedNode || {};

  const secs = videoTimetoSeconds(timestamp || "");

  useEffect(() => {
    if(playerRef.current) {
      (playerRef.current as any)?.seekTo(secs);
    }
  }, [playerRef, secs]);

  if (!selectedNode) {
    return null;
  }

  return (
    <div style={{ height: "100%", overflow: "auto", width: "100%" }}>
      <div>
        <ReactPlayer
          ref={playerRef}
          controls
          height="200px"
          playing
          url={link}
          width="100%"
        />
      </div>
    </div>
  );
};
