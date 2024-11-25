import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Flex } from '~/components/common/Flex'
import { fetchNodeEdges } from '~/network/fetchGraphData'
import { useMindsetStore } from '~/stores/useMindsetStore'
import { usePlayerStore } from '~/stores/usePlayerStore'
import { NodeExtended } from '~/types'
import { colors } from '~/utils'

export const Transcript = () => {
  const { selectedEpisodeId } = useMindsetStore((s) => s)
  const { playingTime, duration } = usePlayerStore((s) => s)

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

  return (
    <Wrapper>
      <Flex className="heading">Transcript</Flex>
      {clips.map((clip) => {
        const timestamp: string | undefined = clip?.properties?.timestamp

        const [start, end] = timestamp
          ? (timestamp as string).split('-').map(Number) // Directly convert to numbers
          : [0, duration]

        if (start <= playingTime * 1000 && playingTime * 1000 < end) {
          // Multiply playingTime by 1000 to match millisecond format
          return (
            <TranscriptWrapper key={clip.ref_id} direction="row">
              {clip?.properties?.text && <span>{clip?.properties?.text}</span>}
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
    font-size: 12px;
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
`
