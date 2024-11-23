import styled from 'styled-components'
import { Flex } from '~/components/common/Flex'
import { transcript } from '~/modules/mindset/data/transcript'
import { usePlayerStore } from '~/stores/usePlayerStore'
import { colors } from '~/utils'

export const Transcript = () => {
  const data = transcript

  const { playingTime } = usePlayerStore((s) => s)

  return (
    <Wrapper>
      <Flex className="heading">Transcript ({playingTime})</Flex>
      <TranscriptWrapper direction="row">
        {data.map((tr) => (
          <span key={`${tr.text}-${tr.timestamp}`}>{tr.text}</span>
        ))}
      </TranscriptWrapper>
    </Wrapper>
  )
}

const Wrapper = styled(Flex)`
  .heading {
    font-weight: 700;
    font-size: 12px;
  }
  color: ${colors.white};
  background: ${colors.BG1};
  border-radius: 8px;
  padding: 24px;
  overflow: scroll;
  flex: 1 1 100%;
`

const TranscriptWrapper = styled(Flex)`
  flex-wrap: wrap;
  flex: 1 1 100%;
`
