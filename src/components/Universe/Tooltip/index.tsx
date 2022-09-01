import styled from 'styled-components'
import { useDataStore } from '../../GraphDataRetriever';

export function Tooltip(){

  const node: any = useDataStore((s: any) => s.hoveredNode)

  if (!node) return null

  // @ts-ignore
  const { node_type, label, image_url, show_title, episode_title, description, guests, text, timestamp} = node?.details || node || {};

  return (<TooltipWrap
      style={{
        // opacity: (node_type && node_type !== "topic") ? 1 : 0,
        // left,
        // top,
        top: 20,
        right: 20,
        width: 300,
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
        
        <Avatar src={image_url||''} />

        <div>
          <Title>{show_title || label}</Title>
          <MainTitle>{episode_title}</MainTitle>
          <Title> {timestamp}</Title>

          <Details style={{ marginTop: 10 }}>
            {guests?.length && <Description>Guests: {guests.map((name:string)=>name)}</Description>}
            <Details>{description}</Details>
            <Details style={{ marginTop: 15, fontStyle: "italic" }}>
              {text}
            </Details>
          </Details>
        </div>
      </TooltipInside>
    </TooltipWrap>)

};


const TooltipWrap = styled.div`
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
  transition: opacity 0.6s;
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

interface ImgProps {
  src: string;
}
const Avatar = styled.div<ImgProps>`
  background-image: url(${(p) => p.src});
  background-size: contain;
  background-repeat: no-repeat;
  flex-grow: 0;
  flex-shrink: 0;
  margin-right: 12px;
  width: 45px;
  height: 45px;
  border-radius: 4px;
`;
