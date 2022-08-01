
import { useState } from 'react'
import styled from 'styled-components'

export default function MouseTracker(props: any) {
    const {subtractWidth, hoveredNode, dimensions} = props
    const [mousePosition, setMousePosition]: any = useState({ x: 0, y: 0 })
    
    const tooltipW = 300
    const tooltipH = 150
    const yPadding = 5

    let xOffset = 0
    let yOffset = 0

    if (dimensions.height < mousePosition.y + tooltipH) {
        yOffset = tooltipH*-1
    }

    if (dimensions.width < mousePosition.x + tooltipW/2) {
        xOffset = (tooltipW/2) * -1
    } else if (0 > mousePosition.x - tooltipW/2) {
        xOffset = tooltipW/2
    }

    const type = hoveredNode?.type
    let tooltipImg = hoveredNode?.image_url
    let podcastTitle = hoveredNode?.details?.podcast_title
    let title = hoveredNode?.details?.episode_title
    let description = hoveredNode?.details?.description
    let guest = hoveredNode?.details?.guest
    let text = hoveredNode?.details?.text
    let timestamp = hoveredNode?.details?.timestamp

    if (type && !tooltipImg) {
        switch (type) {
            case 'youtube':
                tooltipImg = 'youtube_default.jpeg'
                break;
            case 'twitter':
                tooltipImg = 'audio_default.svg'
                break;
            default:
                tooltipImg = 'audio_default.svg'
          }  
    }

    const left = mousePosition.x - (tooltipW / 2) + xOffset
    const top = mousePosition.y + yPadding + yOffset

    return <div onMouseMove={(e) => {
        if (!hoveredNode) return
        let x = e.pageX - subtractWidth
        let y = e.pageY
        
        setMousePosition({x,y})
    }}
        style={{ width:'100%',height:'100%',position: 'relative' }}>
        
        
        <Tooltip style={{
            opacity:(type && type !== 'topic' && type !== 'sun') ? 1 : 0,
            left,
            top,
            width: tooltipW
        }}>
            <Avatar src={tooltipImg} />
            
            <div>
                <Title>{podcastTitle}</Title>
                <MainTitle>{title}</MainTitle>
                <Title> {timestamp}</Title>
                
                <Details style={{marginTop:10}}>
                    {guest && <Description>Guest: {guest}</Description>}
                    <Details>{description}</Details>
                    <Details>{text}</Details>
                </Details>
            </div>

        </Tooltip>
        
        
        {props.children}
        </div>
} 

const Tooltip = styled.div`
display: flex; 
padding:11px; 
align-items: flex-start;
justify-content:center;
position: absolute;
pointer-events: none;
background: #FFFFFF;
box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);
color:#000;
z-index: 100;
transition: opacity 0.1s;
`

const Title = styled.div`
font-weight: 400;
font-size: 11px;
line-height: 18px;
/* or 164% */


/* Main bottom icons */

color: #5F6368;
`

const MainTitle = styled.div`
font-weight: 500;
font-size: 14px;
line-height: 18px;
/* or 164% */


/* Main bottom icons */

color: #222;
`

const Description = styled.div`
font-weight: 400;
font-size: 11px;
line-height: 18px;
/* or 164% */


/* Main bottom icons */

color: #5F6368;
`

const Details = styled.div`
font-weight: 400;
font-size: 11px;
line-height: 15px;
/* or 136% */


/* Secondary Text 4 */

color: #8E969C;

text-overflow: ellipsis;
display: -webkit-box;
-webkit-line-clamp: 10;
-webkit-box-orient: vertical;
`

interface ImgProps {
    src: string;
  }
  const Avatar = styled.div<ImgProps>`
  background-image:url(${p => p.src});
  background-size:contain;
  background-repeat: no-repeat;
  flex-grow:0;
  flex-shrink:0;
  margin-right:12px;
  width:45px;
  height:45px;
  border-radius:4px;
  `