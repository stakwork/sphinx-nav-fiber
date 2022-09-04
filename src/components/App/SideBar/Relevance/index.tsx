import moment from "moment";
import { useState } from "react";
import styled from "styled-components";
import { Pill } from "~/components/common/Pill";
import { useGraphData } from "~/components/DataRetriever";
import Booster from "~/main/map/booster";
import { useDataStore } from "~/stores/useDataStore";

const pageSize = 80;

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

export const Relevance = ({ isSuggestions }: { isSuggestions?: boolean }) => {
  const data = useGraphData();
  const [renderPage, setRenderPage] = useState(0);

  const setSelectedNode = useDataStore((s) => s.setSelectedNode);

  const startSlice = renderPage * pageSize;
  const endSlice = startSlice + pageSize;

  const isMore = data.nodes.length - 1 > endSlice;
  const isLess = startSlice > 0;

  return (
    <Col style={{ height: "calc(100% - 90px)" }}>
      <Scroller id={"top_ranked_scroller"}>
        {data.nodes
          .slice(startSlice, endSlice)
          .filter((f) => f.node_type === "clip")
          .map((n, i) => {
            let { image_url, episode_title, description, date, boost } =
              n.details || {};

            if (image_url) {
              image_url = image_url.replace(".jpg", "_s.jpg");
            }

            return (
              <EpisodePanel
                onClick={() => setSelectedNode(n)}
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
                    <div>{moment.unix(date || 0).format("ll")}</div>
                    <div style={{ width: 8 }} />
                    <Booster readOnly boostCount={boost} />
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
  );
};
