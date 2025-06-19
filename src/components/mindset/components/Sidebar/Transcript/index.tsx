import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Flex } from '~/components/common/Flex'
import { useGraphStore } from '~/stores/useGraphStore'
import { useMindsetStore } from '~/stores/useMindsetStore'
import { usePlayerStore } from '~/stores/usePlayerStore'
import { useSimulationStore } from '~/stores/useSimulationStore'
import { NodeExtended } from '~/types'
import { Viewer } from './Viewer'

export const Transcript = () => {
  const clips = useMindsetStore((s) => s.clips)
  const setActiveClip = useMindsetStore((s) => s.setActiveClip)
  const activeClip = useMindsetStore((s) => s.activeClip)
  const { playerRef } = usePlayerStore((s) => s)
  const [currentTime, setCurrentTime] = useState(0)
  const [isFirst, setIsFirst] = useState(true)

  const [setActiveNode, activeNode] = useGraphStore((s) => [s.setActiveNode, s.activeNode])
  const simulation = useSimulationStore((s) => s.simulation)

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
    } else {
      setIsFirst(true)

      setActiveClip(clips[0])
    }
  }, [currentTime, clips, activeClip, setActiveClip])

  useEffect(() => {
    if (activeClip && (!activeNode || activeClip.ref_id !== activeNode.ref_id)) {
      const candidateNode = simulation?.nodes().find((n: NodeExtended) => n.ref_id === activeClip.ref_id)

      if (typeof candidateNode?.fx === 'number') {
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
    <TranscriptWrapper direction="row">
      {activeClip?.properties?.transcript && (
        <Viewer isFirst={isFirst} transcriptString={activeClip.properties.transcript} />
      )}
    </TranscriptWrapper>
  )
}

const TranscriptWrapper = styled(Flex)`
  flex-wrap: wrap;
  flex: 1 1 100%;
  margin-left: -24px;
  margin-right: -24px;
  @media (max-width: 768px) {
    margin: 0;
  }
`
