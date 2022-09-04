import { useMemo } from "react";
import styled from "styled-components";
import { useSelectedNode } from "~/stores/useDataStore";
import { videoTimetoSeconds } from "~/utils/videoTimetoSeconds";
import { Actions } from "../Actions";
import { Suggestions } from "../Suggestions";

const PodcastName = styled.div`
  font-weight: 400;
  font-size: 13px;
  line-height: 18px;
  /* or 138% */
  margin-bottom: 10px;

  /* Secondary Text 4 */

  color: #8e969c;
`;

const Title = styled.div`
  font-size: 20px;
  line-height: 25px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const Desc = styled.div`
  font-size: 11px;
  color: #8e969c;
  padding: 20px;
`;

export const YouTube = () => {
  const selectedNode = useSelectedNode();

  const { description, show_title, episode_title, link, timestamp } =
    selectedNode?.details || {};

  const secs = videoTimetoSeconds(timestamp || "");

  const embeddedUrl = useMemo(
    () =>
      link?.replace("watch?v=", "embed/").split("?")[0] +
      `?start=${secs}&autoplay=1`,
    [link, secs]
  );

  if (!selectedNode) {
    return null;
  }

  return (
    <div style={{ height: "100%", width: "100%", overflow: "auto" }}>
      <div style={{ padding: 20 }}>
        <PodcastName style={{ marginBottom: 5 }}>{show_title}</PodcastName>

        <Title>{episode_title}</Title>

        <Actions />

        <iframe
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
          className="youtube-embedded"
          frameBorder="0"
          height="300px"
          src={embeddedUrl}
          title="ViewVideo"
          width="100%"
        />
      </div>

      <Desc>{description}</Desc>

      <Suggestions />
    </div>
  );
};
