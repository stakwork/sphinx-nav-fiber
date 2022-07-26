
import { useState } from 'react'
import styled from 'styled-components'

export default function MouseTracker(props: any) {
    const {subtractWidth, hoveredNode, dimensions} = props
    const [mousePosition, setMousePosition]: any = useState({ x: 0, y: 0 })
    
    const tooltipW = 300
    const tooltipH = 180
    const yPadding = 5

    let xOffset = 0
    let yOffset = 0

    if (dimensions.height < mousePosition.y + tooltipH) {
        yOffset = tooltipH*-1
    } else if (0 > mousePosition.y - tooltipH) {
        // yOffset = tooltipH
    }

    if (dimensions.Width < mousePosition.x + tooltipW/2) {
        xOffset = tooltipW/2*-1
    } else if (0 > mousePosition.x - tooltipW/2) {
        xOffset = tooltipW/2
    }

    const type = hoveredNode?.type
    let tooltipImg = hoveredNode?.image_url
    let title = hoveredNode?.details?.episode_title
    let description = hoveredNode?.details?.description
    let guest = hoveredNode?.details?.guest

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

    return <div onMouseMove={(e) => {
        if (!hoveredNode) return
        let x = e.pageX - subtractWidth
        let y = e.pageY
        
        setMousePosition({x,y})
    }}
        style={{ width:'100%',height:'100%',position: 'relative' }}>
        
        
        <Tooltip style={{
            opacity:(type && type !== 'topic' && type !== 'sun') ? 1 : 0,
            left: mousePosition.x - tooltipW / 2 + xOffset,
            top: mousePosition.y + yPadding + yOffset,
            width: tooltipW
        }}>
            <Avatar src={tooltipImg} />
            <div>
                <Title>{title}</Title>
                {guest && <Description>Guest: {guest}</Description>}
                <Description>{description}</Description>
            </div>
        </Tooltip>
        
        
        {props.children}
        </div>
} 

const Tooltip = styled.div`
display: flex; 
padding:20px; 
align-items: center;
justify-content:center;
position: absolute;
pointer-events: none;
background: #ffffffee; 
color:#000;
box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.2);
border-radius:10px;
z-index: 100;
transition: opacity 0.1s;
`

const Title = styled.div`
font-size:16px;
font-weight:400;
margin-bottom:10px;
`

const Description = styled.div`
font-size:12px;
font-weight:400;
margin-bottom:10px;
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
  margin-right:20px;
  width:80px;
  height:80px;
  border-radius:5px;
  `