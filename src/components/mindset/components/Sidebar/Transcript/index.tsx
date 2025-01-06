import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Flex } from '~/components/common/Flex'
import { fetchNodeEdges } from '~/network/fetchGraphData'
import { useGraphStore } from '~/stores/useGraphStore'
import { useMindsetStore } from '~/stores/useMindsetStore'
import { usePlayerStore } from '~/stores/usePlayerStore'
import { NodeExtended } from '~/types'
import { colors } from '~/utils'
import { Viewer } from './Viewer'

type Props = {
  name: string
}

export const Transcript = ({ name }: Props) => {
  const { selectedEpisodeId } = useMindsetStore((s) => s)
  const { playerRef } = usePlayerStore((s) => s)
  const [currentTime, setCurrentTime] = useState(0)

  const [setActiveNode, activeNode, simulation] = useGraphStore((s) => [s.setActiveNode, s.activeNode, s.simulation])

  const [clips, setClips] = useState<NodeExtended[]>([])

  useEffect(() => {
    const init = async () => {
      try {
        const res = await fetchNodeEdges(selectedEpisodeId, 0, 50, { nodeType: ['Clip'], useSubGraph: false })

        if (res?.nodes) {
          setClips(res.nodes)
        }
      } catch (error) {
        console.error(error)
      }
    }

    if (selectedEpisodeId) {
      init()
    }
  }, [selectedEpisodeId])

  useEffect(() => {
    const interval = setInterval(() => {
      if (playerRef && setCurrentTime) {
        const time = playerRef.getCurrentTime()

        setCurrentTime(time)
      }
    }, 100)

    return () => clearInterval(interval)
  }, [playerRef, setCurrentTime])

  useEffect(() => {
    const activeClip = clips.find((clip) => {
      const timestamp: string | undefined = clip?.properties?.timestamp

      const [start, end] = timestamp
        ? (timestamp as string).split('-').map(Number) // Directly convert to numbers
        : [0, 0]

      return start <= currentTime && currentTime < end
    })

    if (!activeNode || activeClip?.ref_id !== activeNode.ref_id) {
      const candidateNode = (simulation?.nodes() || []).find((n: NodeExtended) => n.ref_id === activeClip?.ref_id)

      if (candidateNode?.fx !== undefined) {
        setActiveNode(candidateNode)
      }
    }
  }, [activeNode, clips, currentTime, setActiveNode, simulation])

  return (
    <Wrapper>
      <Flex className="heading">{name}</Flex>
      {clips.map((clip) => {
        const timestamp: string | undefined = clip?.properties?.timestamp

        const [start, end] = timestamp
          ? (timestamp as string).split('-').map(Number) // Directly convert to numbers
          : [0, 0]

        if (start <= currentTime && currentTime < end) {
          // Multiply playingTime by 1000 to match millisecond format
          return (
            <TranscriptWrapper key={clip.ref_id} direction="row">
              {clip.properties?.transcript && <Viewer transcriptString={clip.properties?.transcript} />}
            </TranscriptWrapper>
          )
        }

        return null
      })}
    </Wrapper>
  )
}

const Wrapper = styled(Flex)`
  .heading {
    font-weight: 700;
    font-size: 16px;
    margin-bottom: 16px;
  }

  color: ${colors.white};
  background: ${colors.BG1};
  border-radius: 8px;
  padding: 24px;
  overflow-y: auto;
  flex: 1 1 100%;
`

const TranscriptWrapper = styled(Flex)`
  flex-wrap: wrap;
  flex: 1 1 100%;
  margin-left: -24px;
  margin-right: -24px;
`
