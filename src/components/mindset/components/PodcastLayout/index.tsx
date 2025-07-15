import { useCallback, useEffect, useState } from 'react'
import styled from 'styled-components'
import { Flex } from '~/components/common/Flex'
import ChevronLeftIcon from '~/components/Icons/ChevronLeftIcon'
import ChevronRightIcon from '~/components/Icons/ChevronRightIcon'
import { usePlayerStore } from '~/stores/usePlayerStore'
import { Node } from '~/types'
import { videoTimeToSeconds } from '~/utils'
import { secondsToMediaTime } from '~/utils/secondsToMediaTime'
import { Claim } from './Claim'
import { Speaker } from './Speaker'

const data: Node[] = [
  {
    node_type: 'Speaker',
    ref_id: 'speaker-arthur-hayes',
    properties: {
      name: 'Arthur Hayes',
      avatar_url: 'arthur.png',
      description: 'Co-founder, BitMEX',
      timestamp: '00:00:12',
      end: '00:25:00',
    },
  },
  {
    node_type: 'KeyClaim',
    ref_id: 'claim-ai-transform',
    properties: {
      text: 'AI will transform every industry',
      description: 'Predicts exponential impact of artificial intelligence across all sectors.',
      timestamp: '00:03:40',
      end: '00:04:10',
    },
  },
  {
    node_type: 'HotTake',
    ref_id: 'hot-alt-season',
    properties: {
      text: 'Only cash-flow shitcoins win',
      description: 'Future alt-coin cycles will reward projects with real revenue.',
      timestamp: '00:14:05',
      end: '00:14:35',
      controversy_score: 0.81,
    },
  },
  {
    node_type: 'Speaker',
    ref_id: 'speaker-lex-fridman',
    properties: {
      name: 'Lex Fridman',
      avatar_url: 'lex.png',
      description: 'AI researcher & host',
      timestamp: '00:00:00',
      end: '00:25:32',
    },
  },
  {
    node_type: 'KeyClaim',
    ref_id: 'claim-btc-million',
    properties: {
      text: 'Bitcoin will reach $1 M',
      description: 'Forecasts million-dollar BTC due to macro money printing.',
      timestamp: '00:11:20',
      end: '00:11:50',
      speaker: 'speaker-arthur-hayes',
    },
  },
  {
    node_type: 'KeyClaim',
    ref_id: 'claim-crypto-regulation',
    properties: {
      text: 'Regulation will legitimize crypto',
      description: 'Government oversight will bring institutional adoption to cryptocurrency markets.',
      timestamp: '00:07:15',
      end: '00:07:45',
      speaker: 'speaker-arthur-hayes',
    },
  },
  {
    node_type: 'KeyClaim',
    ref_id: 'claim-ai-consciousness',
    properties: {
      text: 'AI consciousness is inevitable',
      description: 'Artificial general intelligence will develop self-awareness within this decade.',
      timestamp: '00:18:30',
      end: '00:19:00',
      speaker: 'speaker-lex-fridman',
    },
  },
  {
    node_type: 'KeyClaim',
    ref_id: 'claim-human-ai-symbiosis',
    properties: {
      text: 'Humans and AI will merge',
      description: 'Brain-computer interfaces will create hybrid human-AI intelligence.',
      timestamp: '00:21:10',
      end: '00:21:40',
      speaker: 'speaker-lex-fridman',
    },
  },
]

const speakers = data.filter((n) => n.node_type === 'Speaker')

const keyClaims = data
  .filter((n) => n.node_type !== 'Speaker')
  .sort((a, b) => {
    const aTimestamp = videoTimeToSeconds(a.properties?.timestamp || '00:00:00')
    const bTimestamp = videoTimeToSeconds(b.properties?.timestamp || '00:00:00')

    return aTimestamp - bTimestamp
  })

// Main Component
export const PodcastLayout = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isSwapped, setIsSwapped] = useState(false)
  const [hoveredNode, setHoveredNode] = useState<string | null>(null)
  const { playerRef } = usePlayerStore((s) => s)

  console.log(hoveredNode, mousePosition)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const handleHotTakesClick = () => {
    setIsSwapped(!isSwapped)
  }

  const handleProgressChange = useCallback(
    (value: number | number[]) => {
      const newValue = Array.isArray(value) ? value[0] : value

      if (playerRef) {
        playerRef.seekTo(newValue, 'seconds')
      }
    },
    [playerRef],
  )

  const handleNodeClick = (node: Node) => {
    if (node?.properties?.timestamp) {
      if (node.properties?.timestamp && playerRef) {
        const timestamp = videoTimeToSeconds(node.properties?.timestamp)

        handleProgressChange(timestamp)
      }
    }
  }

  return (
    <Wrapper className={isSwapped ? 'swapped' : ''}>
      <HotTakesButton onClick={handleHotTakesClick}>
        {!isSwapped ? (
          <div className="icon">
            <ChevronLeftIcon />
          </div>
        ) : null}
        <span>Hot takes</span>
        {isSwapped ? (
          <div className="icon">
            <ChevronRightIcon />
          </div>
        ) : null}
      </HotTakesButton>
      {!isSwapped ? (
        <>
          <SectionWrapper>
            {speakers.map((speaker) => {
              const description = speaker?.properties?.description || ''
              const name = speaker?.properties?.name || ''
              const imgUrl = speaker?.properties?.avatar_url || ''

              return (
                <div key={speaker.ref_id} className="child">
                  <NodeContainer
                    onClick={() => handleNodeClick(speaker)}
                    onMouseEnter={() => setHoveredNode(speaker.ref_id)}
                    onMouseLeave={() => setHoveredNode(null)}
                  >
                    <Speaker description={description} imgUrl={imgUrl} name={name} />
                  </NodeContainer>
                </div>
              )
            })}
          </SectionWrapper>
          <SectionWrapper>
            {keyClaims.map((claim) => {
              const title = claim?.properties?.text || ''
              const description = claim?.properties?.description || ''

              const timestamps =
                claim?.properties?.timestamp && claim?.properties?.end
                  ? `${secondsToMediaTime(videoTimeToSeconds(claim?.properties?.timestamp))} - ${secondsToMediaTime(
                      videoTimeToSeconds(claim?.properties?.end),
                    )}`
                  : undefined

              return (
                <div key={claim.ref_id} className="child">
                  <NodeContainer
                    onClick={() => handleNodeClick(claim)}
                    onMouseEnter={() => setHoveredNode(claim.ref_id)}
                    onMouseLeave={() => setHoveredNode(null)}
                  >
                    <Claim description={description} text={title} timestamps={timestamps} />
                  </NodeContainer>
                </div>
              )
            })}
          </SectionWrapper>
        </>
      ) : null}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: absolute;
  top: 64px;
  bottom: 0;
  left: 0;
  right: 0;
  background: #1f293764;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 24px;
  transition: all 0.3s ease;
  &.swapped {
    perspective: 1000px;
    height: 42px;
    width: 104px;
  }
`

const SectionWrapper = styled(Flex)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 24px;
  justify-content: center;
  align-items: center;
  flex: 1;

  .child {
    flex: 1 1 calc(25% - 24px);
    max-width: calc(25% - 24px);
  }
`

const HotTakesButton = styled.button`
  position: absolute;
  left: 0;
  top: 0;
  background: linear-gradient(135deg, #1f293764, #1f2937a2);
  color: white;
  border: none;
  border-radius: 8px;
  padding: 12px 20px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px #1f293720;
  z-index: 10;
  white-space: nowrap;
  transform: rotateY(40deg);
  transform-origin: left;
  border: 1px solid #fff;
  display: flex;
  align-items: center;
  gap: 8px;

  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
  }

  &:hover {
    /* transform: translateY(-50%) scale(1.05); */
    box-shadow: 0 6px 20px #1f293764;
    background: #1f293764;
  }

  &:active {
    /* transform: translateY(-50%) scale(0.98); */
  }
`

const NodeContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  transition: all 0.3s ease;
  cursor: pointer;
  z-index: 10;
`
