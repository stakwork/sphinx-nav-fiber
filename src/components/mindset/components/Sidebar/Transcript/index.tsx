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
  const [activeClip, setActiveClip] = useState<NodeExtended | null>(null)
  const [isFirst, setIsFirst] = useState(true)

  const [setActiveNode, activeNode, simulation] = useGraphStore((s) => [s.setActiveNode, s.activeNode, s.simulation])
  const [clips, setClips] = useState<NodeExtended[]>([])

  useEffect(() => {
    const fetchClips = async () => {
      try {
        const res = await fetchNodeEdges(selectedEpisodeId, 0, 50, { nodeType: ['Clip'], useSubGraph: false })

        if (res?.nodes) {
          const sortedClips = res.nodes.sort((a, b) => {
            const startA = parseTimestamp(a.properties?.timestamp)[0]
            const startB = parseTimestamp(b.properties?.timestamp)[0]

            return startA - startB // Ascending order
          })

          setClips(sortedClips)
        }
      } catch (error) {
        console.error('Failed to fetch clips:', error)
      }
    }

    if (selectedEpisodeId) {
      fetchClips()
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
    const calculateActiveClip = () => {
      const clip = clips.find((clipNode) => {
        const [start, end] = parseTimestamp(clipNode?.properties?.timestamp)

        return start <= currentTime && currentTime < end
      })

      if ((activeClip && clip?.ref_id === activeClip?.ref_id) || !clip) {
        return
      }

      setIsFirst(clip?.ref_id === clips[0]?.ref_id)

      setActiveClip(clip || null)
    }

    if (currentTime) {
      calculateActiveClip()
    }
  }, [currentTime, clips, activeClip])

  useEffect(() => {
    if (activeClip && (!activeNode || activeClip.ref_id !== activeNode.ref_id)) {
      const candidateNode = simulation?.nodes().find((n: NodeExtended) => n.ref_id === activeClip.ref_id)

      if (candidateNode?.fx !== undefined) {
        setActiveNode(candidateNode)
      }
    }
  }, [activeClip, activeNode, setActiveNode, simulation])

  const parseTimestamp = (timestamp?: string) => {
    if (!timestamp) {
      return [0, 0]
    }

    return timestamp.split('-').map(Number)
  }

  return (
    <Wrapper>
      <Flex className="heading">{name}</Flex>
      {activeClip ? (
        <TranscriptWrapper direction="row">
          {activeClip.properties?.transcript && (
            <Viewer isFirst={isFirst} transcriptString={activeClip.properties.transcript} />
          )}
        </TranscriptWrapper>
      ) : null}
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
