import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Flex } from '~/components/common/Flex'
import { fetchNodeEdges } from '~/network/fetchGraphData'
import { useMindsetStore } from '~/stores/useMindsetStore'
import { usePlayerStore } from '~/stores/usePlayerStore'
import { NodeExtended } from '~/types'
import { colors } from '~/utils'
import { Viewer } from './Viewer'

export const Transcript = () => {
  const { selectedEpisodeId } = useMindsetStore((s) => s)
  const { playerRef } = usePlayerStore((s) => s)
  const [currentTime, setCurrentTime] = useState(0)

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

  return (
    <Wrapper>
      <Flex className="heading">Transcript</Flex>
      {clips.map((clip) => {
        const timestamp: string | undefined = clip?.properties?.timestamp

        const [start, end] = timestamp
          ? (timestamp as string).split('-').map(Number) // Directly convert to numbers
          : [0, 0]

        if (start <= currentTime * 1000 && currentTime * 1000 < end) {
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
  max-height: 50%;
`

const TranscriptWrapper = styled(Flex)`
  flex-wrap: wrap;
  flex: 1 1 100%;
  margin-left: -24px;
  margin-right: -24px;
`
