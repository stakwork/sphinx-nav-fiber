import { useRef, useState } from "react";
import styled from "styled-components";
import { Avatar } from "~/components/common/Avatar";

export default function MouseTracker(props: any) {
  const { subtractWidth, hoveredNode, dimensions } = props;
  const [mousePosition, setMousePosition]: any = useState({ x: 0, y: 0 });

  const tooltipW = 300;
  const tooltipH = 150;
  const yPadding = 5;

  let xOffset = 0;
  let yOffset = 0;

  const trackDiv = useRef(null);

  if (dimensions.height < mousePosition.y + tooltipH) {
    yOffset = tooltipH * -1;
  }

  if (dimensions.width < mousePosition.x + tooltipW / 2) {
    xOffset = (tooltipW / 2) * -1;
  } else if (0 > mousePosition.x - tooltipW / 2) {
    xOffset = tooltipW / 2;
  }

  const { node_type, label } = hoveredNode?.details || hoveredNode || {};
  const type = hoveredNode?.type;
  let tooltipImg = hoveredNode?.image_url;
  let podcastTitle = hoveredNode?.details?.show_title;
  let title = hoveredNode?.details?.episode_title;
  let description = hoveredNode?.details?.description;
  let guest = hoveredNode?.details?.guest;
  let text = hoveredNode?.details?.text;
  let timestamp = hoveredNode?.details?.timestamp;

  if (type && !tooltipImg) {
    switch (type) {
      case "guest":
        tooltipImg = "person_placeholder.png";
        break;
      case "youtube":
        tooltipImg = "youtube_default.jpeg";
        break;
      case "twitter":
        tooltipImg = "audio_default.svg";
        break;
      default:
        tooltipImg = "audio_default.svg";
    }
  }

  const left = mousePosition.x - tooltipW / 2 + xOffset;
  const top = mousePosition.y + yPadding + yOffset;

  let tooltip: any = (
    <Tooltip
      style={{
        opacity: node_type && node_type !== "topic" ? 1 : 0,
        // left,
        // top,
        top: 20,
        right: 20,
        width: tooltipW,
      }}
    >
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "center",
          marginBottom: 10,
          textTransform: "uppercase",
          fontSize: 12,
        }}
      >
        {node_type}
      </div>
      <TooltipInside>
        <Avatar src={tooltipImg} />

        <div>
          <Title>{podcastTitle || label}</Title>
          <MainTitle>{title}</MainTitle>
          <Title> {timestamp}</Title>

          <Details style={{ marginTop: 10 }}>
            {guest && <Description>Guest: {guest}</Description>}
            <Details>{description}</Details>
            <Details style={{ marginTop: 15, fontStyle: "italic" }}>
              {text && '"' + text}
            </Details>
          </Details>
        </div>
      </TooltipInside>
    </Tooltip>
  );

  if (hoveredNode?.fakeData) {
    tooltip = null;
  }

  return (
    <div
      ref={trackDiv}
      onMouseMove={(e) => {
        // if (!hoveredNode) return
        // let x = e.pageX - subtractWidth
        // let y = e.pageY
        // setMousePosition({x,y})
      }}
      style={{
        width: "100%",
        height: "100%",
        position: "relative",
        cursor: hoveredNode ? "pointer" : "default",
      }}
    >
      {tooltip}

      {props.children}
    </div>
  );
}

const Tooltip = styled.div`
  display: flex;
  flex-direction: column;
  padding: 11px;
  align-items: flex-start;
  justify-content: center;
  position: absolute;
  pointer-events: none;
  background: #ffffff;
  box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);
  color: #000;
  z-index: 100;
  transition: opacity 0.1s;
`;

const TooltipInside = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
`;

const Title = styled.div`
  font-weight: 400;
  font-size: 11px;
  margin-bottom: 4px;
  /* or 164% */

  /* Main bottom icons */

  color: #5f6368;
`;

const MainTitle = styled.div`
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  /* or 164% */

  /* Main bottom icons */

  color: #222;
  margin-bottom: 4px;
`;

const Description = styled.div`
  font-weight: 400;
  font-size: 11px;
  line-height: 18px;
  /* or 164% */

  /* Main bottom icons */

  color: #5f6368;
`;

const Details = styled.div`
  font-weight: 400;
  font-size: 11px;
  line-height: 15px;
  /* or 136% */

  /* Secondary Text 4 */

  color: #8e969c;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
`;
