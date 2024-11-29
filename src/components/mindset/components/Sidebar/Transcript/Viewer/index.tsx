import clsx from 'clsx'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { usePlayerStore } from '~/stores/usePlayerStore'
import { colors } from '~/utils'

type Props = {
  transcriptString: string
}

type Word = {
  word: string
  start: number
  end: number
  probability: number
}

type TranscriptData = {
  id: number
  seek: number
  start: number
  end: number
  text: string
  tokens: number[]
  temperature: number
  avg_logprob: number
  compression_ratio: number
  no_speech_prob: number
  words: Word[]
}

export const Viewer = ({ transcriptString }: Props) => {
  const [currentTime, setCurrentTime] = useState(0)
  const { playerRef } = usePlayerStore((s) => s)
  const cleaned = transcriptString.replace(/^["']|["']$/g, '')

  const transcriptData: TranscriptData[] = JSON.parse(cleaned)

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
      {transcriptData.map((i) => {
        const start = i.start.toFixed(2)
        const end = i.end.toFixed(2)

        return (
          <Paragraph key={i.id}>
            <Start>
              {start}:{end}
            </Start>
            {i.words.map((word) => {
              const isActive = word.start < currentTime && currentTime < word.end

              return (
                <Word key={`${word.start}`} className={clsx({ active: isActive })}>
                  {word.word}
                </Word>
              )
            })}
          </Paragraph>
        )
      })}
    </Wrapper>
  )
}

const Paragraph = styled.div`
  font-size: 14px;
  word-break: break-word;
`

const Wrapper = styled.div`
  width: 100%;
`

const Start = styled.span``

const Word = styled.span`
  margin: 0 2px;

  &.active {
    background: ${colors.lightBlue300};
  }
`
