import { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { usePlayerStore } from '~/stores/usePlayerStore'
import { secondsToMediaTime } from '~/utils/secondsToMediaTime'
import { Paragraph } from './Paragraph'

type Props = {
  transcriptString: string
  isFirst: boolean
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

export const Viewer = ({ transcriptString, isFirst }: Props) => {
  const [currentTime, setCurrentTime] = useState(0)
  const [userScrolling, setUserScrolling] = useState(false)
  const { playerRef } = usePlayerStore((s) => s)
  const cleaned = transcriptString.replace(/^["']|["']$/g, '')

  const transcriptData: TranscriptData[] = JSON.parse(cleaned)
  const activeRef = useRef<HTMLDivElement | null>(null)
  const wrapperRef = useRef<HTMLDivElement | null>(null)
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null)

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
    const handleScroll = () => {
      setUserScrolling(true)

      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current)
      }

      // Re-enable automatic scrolling after 1 second of no user scroll
      scrollTimeout.current = setTimeout(() => {
        setUserScrolling(false)
      }, 1000)
    }

    const wrapper = wrapperRef.current

    if (wrapper) {
      wrapper.addEventListener('scroll', handleScroll)
    }

    return () => {
      if (wrapper) {
        wrapper.removeEventListener('scroll', handleScroll)
      }
    }
  }, [])

  useEffect(() => {
    if (!userScrolling && activeRef.current) {
      activeRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'center', // Centers the active paragraph
      })
    }
  }, [currentTime, userScrolling])

  return (
    <Wrapper ref={wrapperRef}>
      <>
        {isFirst ? (
          <>
            {transcriptData[0].start > currentTime ? (
              <Paragraph
                active={false}
                start={secondsToMediaTime(transcriptData[0].start)}
                text={transcriptData[0].text}
              />
            ) : (
              <>
                {transcriptData.map((i) => {
                  const start = secondsToMediaTime(i.start)

                  const isActive = i.start < currentTime && currentTime < i.end

                  return !isFirst || i.start <= currentTime + 5 ? (
                    <Paragraph
                      key={`${i.start}-${i.end}`}
                      ref={isActive ? activeRef : null}
                      active={isActive}
                      start={start}
                      text={i.text}
                    />
                  ) : null
                })}
              </>
            )}
          </>
        ) : (
          <>
            {transcriptData.map((i) => {
              const start = secondsToMediaTime(i.start)

              const isActive = i.start < currentTime && currentTime < i.end

              return (
                <Paragraph
                  key={`${i.start}-${i.end}`}
                  ref={isActive ? activeRef : null}
                  active={isActive}
                  start={start}
                  text={i.text}
                />
              )
            })}
          </>
        )}
      </>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: scroll;
  padding-right: 4px;
`
