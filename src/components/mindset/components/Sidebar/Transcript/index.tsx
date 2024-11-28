import styled from 'styled-components'
import { Flex } from '~/components/common/Flex'
import { Text } from '~/components/common/Text'
import { transcript } from '~/modules/mindset/data/transcript'
import { colors } from '~/utils'

function formatTimestamp(seconds: number) {
  const hours = Math.floor(seconds / 3600)
  const minutes = Math.floor((seconds % 3600) / 60)
  const remainingSeconds = seconds % 60

  if (hours > 0) {
    return `${hours}:${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`
  }

  return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`
}

export const Transcript = () => {
  const data = transcript

  return (
    <Wrapper>
      <StyledText>TRANSCRIPT</StyledText>
      <TranscriptContainer>
        <Avatar alt="profile" src="person_placeholder.png" />
        <TranscriptWrapper direction="row">
          {data.map((tr) => (
            <span key={`${tr.text}-${tr.timestamp}`}>
              {formatTimestamp(tr.timestamp)} {tr.text}
            </span>
          ))}
        </TranscriptWrapper>
      </TranscriptContainer>
    </Wrapper>
  )
}

const Wrapper = styled(Flex)`
  color: ${colors.white};
  background: ${colors.BG5};
  border-radius: 8px;
  padding: 24px;
  overflow: scroll;
  flex: 1 1 100%;
`

const TranscriptContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  margin-top: 10px;
`

const TranscriptWrapper = styled(Flex)`
  flex-wrap: wrap;
  flex: 1 1 100%;
`

const Avatar = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
`

const StyledText = styled(Text)`
  font-size: 13px;
  font-weight: 700;
  margin-bottom: 10px;
`
