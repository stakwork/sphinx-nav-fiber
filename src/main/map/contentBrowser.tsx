import moment from "moment";
import { useEffect, useState } from "react";
import ReactAudioPlayer from "react-audio-player";
import ClipLoader from "react-spinners/ClipLoader";
import styled from "styled-components";
import { useDataStore } from "../../components/GraphDataRetriever";
import { Node } from "../../types";
import Booster from "./booster";
import { convertFromISOtoSeconds, sleep } from "./helpers";

interface ListContent {
  dataFilter: any;
  setDataFilter: Function;
  searchComponent: any;
  close: any;
  focusedNode: any;
  currentSearchTerm: string;
  setFocusedNode: any;
  loading: boolean;
}

export const MENU_WIDTH = 433;

export default function ContentBrowser({
  focusedNode,
  close,
  searchComponent,
  currentSearchTerm,
  dataFilter,
  setDataFilter,
  setFocusedNode,
  loading,
}: ListContent) {
  const data = useDataStore((s) => s.data);

  const [selectedEpisodes, setSelectedEpisodes]: any = useState({});
  const [yesRender, setYesRender]: any = useState(true);
  const [showTranscript, setShowTranscript]: any = useState(false);
  const [selectedContent, setSelectedContent]: any = useState(false);
  const [renderPage, setRenderPage]: any = useState(0);

  // do audio list changes on node select
  useEffect(() => {
    // start async
    (async () => {
      // wait while the render appears
      await sleep(100);
      let podcastName = focusedNode?.details?.show_title;

      if (focusedNode && focusedNode.details) {
        const nodeElement = document.getElementById(
          focusedNode.details.show_title
        );
        if (nodeElement) {
          nodeElement.scrollIntoView({
            behavior: "smooth",
            block: "center",
            inline: "center",
          });

          const episodeElement = document.getElementById(
            focusedNode.details.show_title + focusedNode.details.episode_title
          );
          if (episodeElement) {
            episodeElement.scrollIntoView({
              behavior: "smooth",
              block: "center",
              inline: "center",
            });
          }
        }

        let nodeWithDetails = {
          ...focusedNode,
          ...focusedNode.details,
          link: focusedNode.details.link,
        };

        if (focusedNode) {
          const scroller = document.getElementById("focused_scroller");
          if (scroller?.scrollTop) scroller.scrollTop = 0;
        }

        clickTimestamp(nodeWithDetails, podcastName);
      }
    })();

    doResetRender();

    // end async
  }, [focusedNode]);

  useEffect(() => {
    setShowTranscript(false);
  }, [currentSearchTerm]);

  function doResetRender() {
    setYesRender(false);
    setTimeout(() => {
      setYesRender(true);
    }, 20);
  }

  function startPlayback(
    podcastpodcastName: string,
    timestamp: string,
    audioUrl: string,
    skipBlock?: boolean
  ) {
    // set audio at correct spot
    let start_time = 0;
    let end_time = 0;

    if (timestamp) {
      let isStartAndEnd = timestamp.includes("-");
      if (isStartAndEnd) {
        let t = timestamp.split("-");
        start_time = convertFromISOtoSeconds(t[0]);
        end_time = convertFromISOtoSeconds(t[1]);
      } else {
        start_time = convertFromISOtoSeconds(timestamp);
      }
    }

    const audioElement = document.getElementById(audioUrl) as HTMLAudioElement;
    if (audioElement) {
      audioElement.currentTime = start_time || 0;

      // set style to mark range
      // if (start_time && end_time) {
      // audioElement.style.setProperty('background', 'pink')
      // }

      console.log("start play!");
      // audioElement.play()
    }
  }

  // function stopAllOtherPlayback(el: HTMLAudioElement) {
  //   const players = Array.from(document.getElementsByClassName('audio-player'))
  //   players.forEach((p) => {
  //     let playerEl = p as HTMLAudioElement
  //     if (playerEl.id != el?.id) {
  //       if (!playerEl.paused) {
  //         console.log('pause play!')
  //         playerEl.pause()
  //       }
  //     }
  //   })
  // }

  async function clickTimestamp(t: any, podcastName: string) {
    const se: any = { ...selectedEpisodes };
    console.log("t", t);
    se[podcastName] = { ...t, loaded: false };
    setSelectedEpisodes(se);
    setSelectedContent(t);
    // setFocusedNode(t)
    doResetRender();
  }

  function formatTimestamp(ts: string) {
    const splitStr = ts?.split("-") || ["", ""];

    const start = splitStr[0];
    const end = splitStr[1];

    let formatted = start;
    if (end && parseInt(end) !== 0) {
      formatted += ` - ${end}`;
    }

    return formatted;
  }

  const contentActions = (
    <div style={{ display: "flex", alignItems: "center", margin: "10px 0" }}>
      <Pill
        selected={showTranscript}
        style={{ width: "fit-content" }}
        onClick={() => setShowTranscript(!showTranscript)}
      >
        Transcript
      </Pill>

      <Booster refId={selectedContent?.ref_id} content={selectedContent} />
    </div>
  );

  function renderContentByRelevence(isSuggestions?: boolean) {
    const pageSize = isSuggestions ? 30 : 80;
    const startSlice = renderPage * pageSize;
    const endSlice = startSlice + pageSize;

    const isMore = data.nodes.length - 1 > endSlice;
    const isLess = startSlice > 0;
    return (
      <>
        <Col style={{ height: "calc(100% - 90px)" }}>
          <Scroller id={"top_ranked_scroller"}>
            {data.nodes
              .slice(startSlice, endSlice)
              .filter((f) => f.node_type === "clip")
              .map((n: any, i) => {
                const { details } = n;
                let {
                  image_url,
                  show_title,
                  episode_title,
                  description,
                  date,
                  boost,
                } = details || {};

                if (image_url) {
                  image_url = image_url.replace(".jpg", "_s.jpg");
                }

                return (
                  <EpisodePanel
                    onClick={() => {
                      setFocusedNode(n);
                    }}
                    style={{ cursor: "pointer" }}
                    key={"node" + i}
                  >
                    <div style={{ marginRight: 20 }}>
                      <Avatar
                        style={{ height: 40, width: 40 }}
                        src={image_url || "audio_default.svg"}
                      />
                    </div>

                    <div
                      style={{
                        overflow: "hidden",
                        maxWidth: "calc(100% - 90px)",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          fontWeight: 300,
                          fontSize: 11,
                          color: "#3C3F41",
                          marginBottom: 4,
                        }}
                      >
                        <div>{moment.unix(date).format("ll")}</div>
                        <div style={{ width: 8 }} />
                        <Booster readOnly={true} boostCount={boost} />
                      </div>
                      <EpisodeTitle style={{ marginBottom: 5 }}>
                        {episode_title}
                      </EpisodeTitle>

                      <div
                        style={{
                          fontWeight: 300,
                          fontSize: 11,
                          color: "#3C3F41",
                        }}
                      >
                        {description}
                      </div>
                    </div>
                  </EpisodePanel>
                );
              })}

            {!isSuggestions && (
              <Row
                style={{
                  justifyContent: "space-between",
                  padding: 20,
                  width: "calc(100% - 40px)",
                }}
              >
                <Pill
                  onClick={() => {
                    if (isLess) {
                      setRenderPage(renderPage - 1);
                      const scroller = document.getElementById(
                        "top_ranked_scroller"
                      );
                      if (scroller?.scrollTop) scroller.scrollTop = 0;
                    }
                  }}
                >
                  Previous
                </Pill>
                <Pill
                  onClick={() => {
                    if (isMore) {
                      setRenderPage(renderPage + 1);
                      const scroller = document.getElementById(
                        "top_ranked_scroller"
                      );
                      if (scroller?.scrollTop) scroller.scrollTop = 0;
                    }
                  }}
                >
                  Next
                </Pill>
              </Row>
            )}
          </Scroller>
        </Col>
      </>
    );
  }

  function renderPodcastByCreator() {
    const groupedPodcasts: any = {};
    data?.nodes
      ?.filter((d: Node) => {
        // ignore unrelated data
        return focusedNode?.details?.show_title === d.details?.show_title;
      })
      .forEach((d: Node, i: number) => {
        if (!d.details?.show_title) return;

        const { show_title, episode_title } = d.details;

        if (episode_title) {
          if (show_title && !groupedPodcasts[show_title]) {
            groupedPodcasts[show_title] = {
              ...d.details,
              title: show_title,
              image_url: d.image_url,
              timestamps: {
                [episode_title]: [
                  {
                    ...d.details,
                    title: episode_title,
                    link: d.details?.link,
                  },
                ],
              },
            };
          } else if (!groupedPodcasts[show_title].timestamps[episode_title]) {
            groupedPodcasts[show_title].timestamps[episode_title] = [
              {
                ...d.details,
                image_url: d.image_url,
                title: episode_title,
                link: d.details?.link,
              },
            ];
          } else {
            groupedPodcasts[show_title].timestamps[episode_title].push({
              ...d.details,
              image_url: d.image_url,
              title: episode_title,
              link: d.details?.link,
            });
          }
        }
      });

    return (
      <div style={{ height: "100%", width: "100%", overflow: "auto" }}>
        {/* 
                this will only have one object in it,
                supports many, but only one focused for now 
             */}
        {Object.keys(groupedPodcasts).map((podcastName: string, i: number) => {
          const thisPodcast = groupedPodcasts[podcastName];
          const { title, image_url, timestamps } = thisPodcast;

          const selectedEpisode = selectedEpisodes[podcastName]
            ? selectedEpisodes[podcastName]
            : Object.keys(timestamps)[0];
          const audioUrl: any = selectedEpisode.link;

          const headPanelHeight = 241;

          return (
            <NodePanel key={i + "ouahsf"} id={"head-panel"}>
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
                    <Title>{selectedEpisode.episode_title}</Title>

                    {contentActions}

                    {yesRender && (
                      <ReactAudioPlayer
                        id={audioUrl}
                        className={"audio-player"}
                        autoPlay
                        style={{
                          width: "100%",
                        }}
                        src={audioUrl}
                        onError={() => {
                          const se: any = { ...selectedEpisodes };
                          se[podcastName] = {
                            ...se[podcastName],
                            timestamp: selectedEpisode.timestamp,
                            link: audioUrl,
                            loaded: true,
                            error: true,
                          };
                          setSelectedEpisodes(se);
                        }}
                        onLoadedMetadata={() => {
                          const se: any = { ...selectedEpisodes };
                          se[podcastName] = {
                            ...se[podcastName],
                            timestamp: selectedEpisode.timestamp,
                            link: audioUrl,
                            loaded: true,
                            error: false,
                          };
                          setSelectedEpisodes(se);
                          startPlayback(
                            title,
                            se[podcastName].timestamp,
                            se[podcastName].link
                          );
                        }}
                        controls
                      />
                    )}
                  </Col>
                </Row>
              </Col>

              {/* scrolling list */}

              <Col style={{ height: `calc(100% - ${headPanelHeight}px)` }}>
                <Scroller id={"focused_scroller"}>
                  {Object.keys(timestamps)
                    .filter((f) => f === focusedNode.details.episode_title)
                    .map((episodeName: any, ii: number) => {
                      const thisPodcastTimestamps =
                        timestamps[episodeName] &&
                        timestamps[episodeName].sort((a: any, b: any) => {
                          // order episode by time
                          let aSplit = a.timestamp?.split("-") || [""];
                          let bSplit = b.timestamp?.split("-") || [""];
                          const aTime = convertFromISOtoSeconds(aSplit[0]);
                          const bTime = convertFromISOtoSeconds(bSplit[0]);
                          return aTime - bTime;
                        });
                      const myKey = episodeName + "_" + i + "_" + ii;
                      const defaultTimestamp = thisPodcastTimestamps[0];
                      let episodeImg = defaultTimestamp.image_url;

                      if (
                        episodeImg &&
                        !(
                          episodeImg.includes("_s.jpg") ||
                          episodeImg.includes("_m.jpg") ||
                          episodeImg.includes("_l.jpg")
                        )
                      ) {
                        episodeImg = episodeImg.replace(".jpg", "_s.jpg");
                      }

                      return (
                        <div key={myKey}>
                          <TimestampEnv>
                            {thisPodcastTimestamps.map((t: any, ii: number) => {
                              const selected = () => {
                                return (
                                  selectedEpisodes[podcastName]?.link ===
                                    t.link &&
                                  selectedEpisodes[podcastName]?.timestamp ===
                                    t.timestamp
                                );
                              };
                              const isError = () => {
                                return (
                                  selectedEpisodes[podcastName]?.link ===
                                    t.link &&
                                  selectedEpisodes[podcastName]?.timestamp ===
                                    t.timestamp &&
                                  selectedEpisodes[podcastName]?.error
                                );
                              };

                              const isSelected = selected();

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

                              const errorStyle = isError()
                                ? {
                                    color: "red",
                                  }
                                : {};

                              if (!t.timestamp)
                                return <div key={ii + "timestamp"} />;

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
                                    clickTimestamp(t, podcastName);
                                  }}
                                >
                                  <div style={{ minWidth: 20 }} />
                                  <div style={{ display: "flex" }}>
                                    {isSelected &&
                                    selectedEpisodes[podcastName]?.loaded ===
                                      false ? (
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
                                        {isError()
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
                                      {"" + formatTimestamp(t.timestamp)}
                                      <div style={{ marginLeft: 10 }}>
                                        <Booster
                                          readOnly={true}
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

                  {/* bottom padding */}

                  <div style={{ height: 10 }} />

                  {renderSuggestions()}
                </Scroller>
              </Col>
            </NodePanel>
          );
        })}
      </div>
    );
  }

  function renderYoutube() {
    if (!focusedNode || !yesRender) return null;

    const { description, show_title, episode_title, link, timestamp } =
      focusedNode.details;

    const secs = convertFromISOtoSeconds(timestamp);

    let embeddedUrl: string = "";

    // to do
    // if (link.includes('watch?app=desktop&')) {

    // }

    embeddedUrl =
      link.replace("watch?v=", "embed/").split("?")[0] +
      `?start=${secs}&autoplay=1`;

    return (
      <div style={{ height: "100%", width: "100%", overflow: "auto" }}>
        <div style={{ padding: 20 }}>
          <PodcastName style={{ marginBottom: 5 }}>{show_title}</PodcastName>

          <Title>{episode_title}</Title>

          {contentActions}

          <iframe
            className="youtube-embedded"
            height="300px"
            width="100%"
            src={embeddedUrl}
            title="ViewVideo"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
          ></iframe>
        </div>

        <Desc>{description}</Desc>

        {renderSuggestions()}
      </div>
    );
  }

  function renderSuggestions() {
    return (
      <div>
        <Divider style={{ width: "100%", marginBottom: 20 }} />
        <div
          style={{
            marginLeft: 20,
            marginBottom: 10,
            color: "#292C33",
          }}
        >
          More like this...
        </div>
        <div>{renderContentByRelevence(true)}</div>
      </div>
    );
  }

  function renderTwitter() {
    return <div>Twitter</div>;
  }

  function renderPerson() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: 20,
        }}
      >
        {focusedNode.label}
      </div>
    );
  }

  let contentView: any = null;

  if (!focusedNode && data?.nodes?.length) {
    contentView = renderContentByRelevence();
  } else if (focusedNode) {
    switch (focusedNode?.type) {
      case "youtube":
        contentView = renderYoutube();
        break;
      case "twitter":
        contentView = renderTwitter();
        break;
      case "guest":
        contentView = renderPerson();
        break;
      default:
        contentView = renderPodcastByCreator();
    }
  }

  const contentTranscript = selectedContent
    ? selectedContent?.text || "No transcript"
    : null;

  console.log("[dd] render");
  return (
    <ListWindow>
      <div
        style={{
          display: "flex",
          padding: 20,
          position: "relative",
          boxShadow: "0 0 8px 0 rgba(0, 0, 0, 0.2)",
        }}
      >
        {searchComponent}

        {!loading && (
          <CloseIt
            onClick={() => {
              if (showTranscript) setShowTranscript(false);
              close();
            }}
          >
            <span className="material-icons" style={{ fontSize: 20 }}>
              close
            </span>
          </CloseIt>
        )}
      </div>

      {loading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          <ClipLoader color={"#000"} loading={true} size={14} />
        </div>
      ) : (
        contentView
      )}

      {showTranscript && (
        <TranscriptEnv style={{ left: MENU_WIDTH }}>
          <div style={{ minHeight: 40 }} />
          <Transcript>"{contentTranscript}"</Transcript>
          <div style={{ minHeight: 40 }} />
        </TranscriptEnv>
      )}
    </ListWindow>
  );
}

const ListWindow = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 100%;
  background: #ffffff;
  min-width: ${MENU_WIDTH}px;
  width: ${MENU_WIDTH}px;
  z-index: 30;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  // overflow:hidden;
`;

const TranscriptEnv = styled.div`
  display: flex;
  flex-direction: column;
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

const Transcript = styled.div`
  margin-top: 10px;
  font-weight: 400;
  font-size: 13px;
  line-height: 18px;
  font-style: italic;
  /* Main bottom icons */
  color: #5d8fdd;
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

const Divider = styled.div`
  height: 1px;
  background: #ccc;
  width: 95%;
`;
const Link = styled.span`
  color: blue;
  cursor: pointer;
`;

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

const EpisodePanel = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
  padding: 10px 20px;
  opacity: 0.8;
  &:hover {
    opacity: 1;
  }
`;
const CloseIt = styled.div`
  position: absolute;
  right: 30px;
  top: 24px;
  z-index: 10000;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #000;
  padding: 10px;
  width: fit-content;
`;

interface ImgProps {
  src: string;
}
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

const Desc = styled.div`
  font-size: 11px;
  color: #8e969c;
  padding: 20px;
`;
interface PillProps {
  selected?: boolean;
}
const Pill = styled.div<PillProps>`
  padding: 10px 20px;
  border-radius: 20px;
  flex-grow: 0;
  flex-shrink: 0;
  cursor: pointer;
  margin-right: 10px;
  background: ${(p) => (p.selected ? "#CDE0FF" : "#F2F3F5")};
  color: ${(p) => (p.selected ? "#5D8FDD" : "#8E969C")};
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
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
const EpisodeTitle = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  /* or 129% */

  display: flex;
  align-items: center;

  /* Primary Text 1 */

  color: #292c33;
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
