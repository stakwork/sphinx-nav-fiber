import { useCallback, useEffect, useMemo, useState } from "react";
import ReactAudioPlayer from "react-audio-player";
import { ClipLoader } from "react-spinners";
import styled from "styled-components";
import { useGraphData } from "~/components/DataRetriever";
import { useDataStore } from "~/stores/useDataStore";
import Booster from "~/main/map/booster";
import { useSelectedNode } from "~/stores/useDataStore";
import { Node } from "~/types";
import { videoTimetoSeconds } from "~/utils/videoTimetoSeconds";
import { Actions } from "../Actions";
import { Suggestions } from "../Suggestions";

const Row = styled.div`
  display: flex;
  width: 100%;
`;

const Col = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Scroller = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow: auto;
  overflow-x: hidden;
  background: #fff;
`;

const NodePanel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  // overflow:hidden;
  &:hover {
    opacity: 1;
  }
`;

type ImgProps = {
  src: string;
};

const Avatar = styled.div<ImgProps>`
  background-image: url(${(p) => p.src});
  background-size: contain;
  flex-grow: 0;
  flex-shrink: 0;
  width: 100px;
  height: 100px;
  border-radius: 5px;
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

const Timestamp = styled.div`
  display: flex;
  padding: 10px 8px;
  font-size: 14px;
  width: 100%;
  cursor: pointer;

  &:hover {
    background: #f1f1f1;
    opacity: 1;
    z-index: 20;
  }
`;

const TimestampEnv = styled.div`
  margin-bottom: 20px;
`;

const PodcastName = styled.div`
  font-weight: 400;
  font-size: 13px;
  line-height: 18px;
  /* or 138% */
  margin-bottom: 10px;

  /* Secondary Text 4 */
  color: #8e969c;
`;

const Time = styled.div`
  display: flex;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  /* or 129% */

  /* Text 2 */
  color: #3c3f41;
`;

const Transcript = styled.div`
  margin-top: 10px;
  font-weight: 400;
  font-size: 13px;
  line-height: 18px;
  font-style: italic;
  /* Main bottom icons */
  color: #5d8fdd;
`;

type TTimestamp = {
  boost?: number;
  description?: string;
  error?: boolean;
  image_url?: string;
  link: string;
  loaded?: boolean;
  timestamp: string;
  title: string;
};

type Show = {
  title: string;
  image_url?: string;
  timestamps: Record<string, TTimestamp[]>;
};

function formatTimestamp(ts: string) {
  const [start, end] = ts.split("-") || ["", ""];

  let formatted = start;

  if (end && parseInt(end) !== 0) {
    formatted += ` - ${end}`;
  }

  return formatted;
}

export const Creator = () => {
  const data = useGraphData();
  const selectedNode = useSelectedNode();
  const [selectedTimestamps, setSelectedTimestamps] = useState<
    Record<string, TTimestamp>
  >({});

  const [renderAudioPlayer, setRenderAudioPlayer] = useState(true);

  function resetAudioPlayer() {
    setRenderAudioPlayer(false);
    setTimeout(() => setRenderAudioPlayer(true), 100);
  }

  const startPlayback = useCallback(
    (
      podcastpodcastName: string,
      timestamp: string,
      audioUrl: string,
      skipBlock?: boolean
    ) => {
      // set audio at correct spot
      let start_time = 0;
      let end_time = 0;

      if (timestamp) {
        let isStartAndEnd = timestamp.includes("-");
        if (isStartAndEnd) {
          let t = timestamp.split("-");
          start_time = videoTimetoSeconds(t[0]);
          end_time = videoTimetoSeconds(t[1]);
        } else {
          start_time = videoTimetoSeconds(timestamp);
        }
      }

      const audioElement = document.getElementById(
        audioUrl
      ) as HTMLAudioElement;

      if (audioElement) {
        audioElement.currentTime = start_time || 0;

        // set style to mark range
        // if (start_time && end_time) {
        // audioElement.style.setProperty('background', 'pink')
        // }

        console.log("start play!");
        // audioElement.play()
      }
    },
    []
  );

  const groupedPodcasts = useMemo(() => {
    return data.nodes.reduce((acc, currentNode) => {
      if (!currentNode.details?.show_title) {
        return acc;
      }

      if (
        selectedNode?.details?.show_title !== currentNode.details?.show_title
      ) {
        return acc;
      }

      const { show_title, episode_title } = currentNode.details;

      if (episode_title) {
        const currentShow = acc[show_title] || {};
        const currentTimestamps =
          currentShow?.timestamps?.[episode_title] || [];

        acc[show_title] = {
          ...currentShow,
          image_url: currentNode.image_url,
          timestamps: {
            ...(currentShow.timestamps || {}),
            [episode_title]: [
              ...currentTimestamps,
              {
                boost: currentNode.boost,
                description: currentNode.details.description,
                title: episode_title,
                image_url: currentNode.image_url || "",
                link: currentNode.details?.link || "",
                timestamp: currentNode.details?.timestamp || "",
              },
            ],
          },
        };
      }

      return acc;
    }, {} as Record<string, Show>);
  }, [data, selectedNode]);

  const handleTimestampClick = useCallback(
    (timestamp: Node, podcastName: string) => {
      // setSelectedEpisode({
      //   ...timestamp,
      //   loaded: false,
      // });
      // setSelectedContent(t);
      // setFocusedNode(t);
    },
    [selectedNode]
  );

  return (
    <div style={{ height: "100%", width: "100%", overflow: "auto" }}>
      {Object.entries(groupedPodcasts).map(
        ([podcastName, thisPodcast], i: number) => {
          const { title, image_url, timestamps } = thisPodcast;

          const selectedTimestamp =
            selectedTimestamps[podcastName] || Object.values(timestamps)[0][0];

          const audioUrl = selectedTimestamp.link;

          console.log(selectedTimestamp);

          const headPanelHeight = 241;

          return (
            <NodePanel key={i.toString()}>
              <Col
                style={{
                  height: headPanelHeight,
                  width: "100%",
                  alignItems: "center",
                  boxShadow: "0 0 8px 0 rgba(0, 0, 0, 0.2)",
                }}
              >
                <Row style={{ alignItems: "flex-start" }}>
                  <Avatar
                    src={image_url || "audio_default.svg"}
                    style={{ margin: 20 }}
                  />

                  <Col style={{ paddingRight: 20 }}>
                    <div style={{ height: 20 }} />
                    <PodcastName>{title}</PodcastName>
                    <Title>{selectedTimestamp.title}</Title>

                    <Actions />

                    {renderAudioPlayer && (
                      <ReactAudioPlayer
                        id={audioUrl}
                        className={"audio-player"}
                        autoPlay
                        style={{
                          width: "100%",
                        }}
                        src={audioUrl}
                        onError={() => {
                          setSelectedTimestamps((selectedTimestamps) => ({
                            ...selectedTimestamps,
                            [podcastName]: {
                              ...selectedTimestamps[podcastName],
                              timestamp: selectedTimestamp.timestamp,
                              link: audioUrl,
                              loaded: true,
                              error: true,
                            },
                          }));
                        }}
                        onLoadedMetadata={() => {
                          setSelectedTimestamps((selectedTimestamps) => ({
                            ...selectedTimestamps,
                            [podcastName]: {
                              ...selectedTimestamps[podcastName],
                              timestamp: selectedTimestamp.timestamp,
                              link: audioUrl,
                              loaded: true,
                              error: false,
                            },
                          }));
                          startPlayback(
                            podcastName,
                            selectedTimestamp.timestamp,
                            audioUrl
                          );
                        }}
                        controls
                      />
                    )}
                  </Col>
                </Row>
              </Col>

              <Col style={{ height: `calc(100% - ${headPanelHeight}px)` }}>
                <Scroller id="focused_scroller">
                  {Object.keys(timestamps)
                    .filter(
                      (episodeName) =>
                        episodeName === selectedNode?.details?.episode_title
                    )
                    .map((episodeName, ii: number) => {
                      const thisPodcastTimestamps =
                        timestamps[episodeName] &&
                        timestamps[episodeName].sort((a, b) => {
                          // order episode by time
                          let aSplit = a.timestamp?.split("-") || [""];
                          let bSplit = b.timestamp?.split("-") || [""];
                          const aTime = videoTimetoSeconds(aSplit[0]);
                          const bTime = videoTimetoSeconds(bSplit[0]);
                          return aTime - bTime;
                        });
                      const myKey = episodeName + "_" + i + "_" + ii;
                      const defaultTimestamp = thisPodcastTimestamps[0];
                      let episodeImg = defaultTimestamp.image_url;

                      return (
                        <div key={myKey}>
                          <TimestampEnv>
                            {thisPodcastTimestamps.map((t, ii: number) => {
                              const isSelected =
                                selectedTimestamps[podcastName]?.link ===
                                  t.link &&
                                selectedTimestamps[podcastName]?.timestamp ===
                                  t.timestamp;

                              const isError =
                                selectedTimestamps[podcastName]?.link ===
                                  t.link &&
                                selectedTimestamps[podcastName]?.timestamp ===
                                  t.timestamp &&
                                selectedTimestamps[podcastName]?.error;

                              const color = isSelected ? "#5D8FDD" : "#3C3F41";

                              const selectedStyle = isSelected
                                ? {
                                    fontWeight: 500,
                                    background: "#cde0ff4d",
                                    color: "#5D8FDD !important",
                                  }
                                : {
                                    fontWeight: 300,
                                    background: "#fff",
                                  };

                              const errorStyle = isError
                                ? {
                                    color: "red",
                                  }
                                : {};

                              if (!t.timestamp) {
                                return <div key={ii + "timestamp"} />;
                              }

                              return (
                                <Timestamp
                                  key={ii + "timestamp"}
                                  style={{
                                    width: "100%",
                                    ...selectedStyle,
                                    ...errorStyle,
                                  }}
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    setSelectedTimestamps(
                                      (selectedTimestamps) => ({
                                        ...selectedTimestamps,
                                        [podcastName]: {
                                          ...t,
                                          loaded: false,
                                          error: false,
                                        },
                                      })
                                    );
                                    resetAudioPlayer();
                                  }}
                                >
                                  <div style={{ minWidth: 20 }} />
                                  <div style={{ display: "flex" }}>
                                    {isSelected &&
                                    !selectedTimestamps[podcastName]?.loaded ? (
                                      <ClipLoader
                                        color={color}
                                        loading={true}
                                        size={14}
                                      />
                                    ) : (
                                      <span
                                        className="material-icons"
                                        style={{
                                          color,
                                          fontSize: 18,
                                        }}
                                      >
                                        {isError
                                          ? "error"
                                          : isSelected
                                          ? "play_arrow"
                                          : "access_time"}
                                      </span>
                                    )}
                                  </div>

                                  <div style={{ minWidth: 20 }} />

                                  <div>
                                    <Time style={{ color }}>
                                      {formatTimestamp(t.timestamp)}
                                      <div style={{ marginLeft: 10 }}>
                                        <Booster
                                          readOnly
                                          boostCount={t.boost}
                                        />
                                      </div>
                                    </Time>
                                    <Transcript
                                      style={{
                                        color,
                                        fontStyle: "normal",
                                        marginTop: 5,
                                      }}
                                    >
                                      {t.description}
                                    </Transcript>
                                  </div>

                                  <div style={{ minWidth: 20 }} />
                                </Timestamp>
                              );
                            })}
                          </TimestampEnv>
                        </div>
                      );
                    })}

                  <div style={{ height: 10 }} />

                  <Suggestions />
                </Scroller>
              </Col>
            </NodePanel>
          );
        }
      )}
    </div>
  );
};
