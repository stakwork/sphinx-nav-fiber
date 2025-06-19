/* eslint-disable react/no-array-index-key */
import { useCallback } from 'react'
import styled from 'styled-components'
import { Flex } from '~/components/common/Flex'
import { useMindsetStore } from '~/stores/useMindsetStore'
import { usePlayerStore } from '~/stores/usePlayerStore'
import { colors } from '~/utils'

type Props = {
  onChangeChapter: () => void
}

export const Chapters: React.FC<Props> = ({ onChangeChapter }: Props) => {
  const highlights = useMindsetStore((s) => s.highlights)
  const { playerRef } = usePlayerStore((s) => s)

  const handleProgressChange = useCallback(
    (value: number | number[]) => {
      const newValue = Array.isArray(value) ? value[0] : value

      if (playerRef) {
        playerRef.seekTo(newValue, 'seconds')
      }
    },
    [playerRef],
  )

  const handleClick = (index: number) => {
    onChangeChapter()
    handleProgressChange(highlights[index].startTime)
  }

  return (
    <Wrapper direction="column">
      {highlights.length > 0 && (
        <Section>
          <HighlightsList>
            {highlights.map((highlight, index) => (
              <HighlightItem key={index} onClick={() => handleClick(index)}>
                <HighlightTitle>{highlight.title}</HighlightTitle>
                <HighlightTime>
                  {Math.floor(highlight.startTime / 60)}:{(highlight.startTime % 60).toString().padStart(2, '0')}
                </HighlightTime>
              </HighlightItem>
            ))}
          </HighlightsList>
        </Section>
      )}
    </Wrapper>
  )
}

const Wrapper = styled(Flex)({
  width: '100%',
  gap: '20px',
})

const Section = styled.div`
  width: 100%;
`

const HighlightsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

const HighlightItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 12px;
  background: ${colors.gray500};
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
    background: ${colors.gray400};
  }
`

const HighlightTitle = styled.span`
  font-size: 14px;
  color: ${colors.white};
  font-weight: 500;
  flex: 1;
`

const HighlightTime = styled.span`
  font-size: 12px;
  color: ${colors.blueTextAccent};
  font-family: monospace;
`
