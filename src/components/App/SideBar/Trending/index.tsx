import { Button } from '@mui/material'
import clsx from 'clsx'
import { useCallback, useEffect, useRef, useState } from 'react'
import { useFormContext } from 'react-hook-form'
import { ClipLoader } from 'react-spinners'
import styled from 'styled-components'
import HashTag from '~/components/Icons/HashTag'
import PauseIcon from '~/components/Icons/PauseIcon'
import PlayIcon from '~/components/Icons/PlayIcon'
import PlusIcon from '~/components/Icons/PlusIcon'
import ReloadIcon from '~/components/Icons/ReloadIcon'
import SentimentDataIcon from '~/components/Icons/SentimentDataIcon'
import { Flex } from '~/components/common/Flex'
import { getTrends } from '~/network/fetchGraphData'
import { useAppStore } from '~/stores/useAppStore'
import { useDataStore } from '~/stores/useDataStore'
import { useModal } from '~/stores/useModalStore'
import { Trending as TrendingType } from '~/types'
import { getTrendingTopic, showPlayButton } from '~/utils'
import { colors } from '~/utils/colors'
import { BriefDescription } from './BriefDescriptionModal'

const TRENDING_TOPICS = ['Drivechain', 'Ordinals', 'L402', 'Nostr', 'AI']

type Props = {
  onSubmit?: () => void
}

export const Trending = ({ onSubmit }: Props) => {
  const { open: openContentAddModal } = useModal('addContent')
  const [loading, setLoading] = useState(false)
  const [readyToUpdate, setReadyToUpdate] = useState(false)
  const [selectedTrend, setSelectedTrend] = useState<TrendingType | null>(null)
  const audioRef = useRef<HTMLVideoElement>(null)
  const [currentFileIndex, setCurrentFileIndex] = useState(0)
  const [playing, setPlaying] = useState(false)
  const { currentPlayingAudio, setCurrentPlayingAudio } = useAppStore((s) => s)

  const { open } = useModal('briefDescription')

  const { trendingTopics, setTrendingTopics } = useDataStore((s) => s)

  const { setValue } = useFormContext()

  const init = useCallback(async () => {
    setLoading(true)
    setReadyToUpdate(false)
    setCurrentFileIndex(0)
    setPlaying(false)
    setCurrentPlayingAudio(null)

    try {
      const res = await getTrends()

      if (res.length && Array.isArray(res)) {
        setTrendingTopics(res)
      }
    } catch (err) {
      setTrendingTopics(TRENDING_TOPICS.map((i) => ({ name: i, count: 0 })))
    } finally {
      setLoading(false)
    }
  }, [setCurrentPlayingAudio, setTrendingTopics])

  useEffect(() => {
    if (!trendingTopics.length) {
      init()
    }
  }, [init, trendingTopics.length])

  useEffect(() => {
    const timer = setTimeout(() => {
      setReadyToUpdate(true)
    }, 5000)

    return () => clearTimeout(timer)
  }, [setReadyToUpdate, loading])

  const selectTrending = (val: string) => {
    setValue('search', val)
    onSubmit?.()
  }

  const showModal = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, trending: TrendingType) => {
    e.stopPropagation()
    e.currentTarget.blur()

    if (trending?.tldr) {
      setSelectedTrend(trending)
      open()
    }
  }

  const hideModal = () => {
    setSelectedTrend(null)
  }

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation()
    e.currentTarget.blur()
    setPlaying(!playing)
    setCurrentPlayingAudio(audioRef)
  }

  useEffect(() => {
    if (playing) {
      audioRef.current?.play()
    } else {
      audioRef.current?.pause()
    }
  }, [currentFileIndex, playing])

  useEffect(() => {
    if (!currentPlayingAudio) {
      setPlaying(false)
    }
  }, [currentPlayingAudio])

  const goToNextSong = () => {
    setCurrentFileIndex((prevIndex) => {
      let newIndex = (prevIndex + 1) % trendingTopics.length

      while (newIndex !== prevIndex && !trendingTopics[newIndex]?.audio_EN) {
        newIndex = (newIndex + 1) % trendingTopics.length
      }

      if (newIndex === prevIndex) {
        setPlaying(false)

        return newIndex
      }

      audioRef.current?.load()

      if (newIndex === 0) {
        setPlaying(false)
        setCurrentFileIndex(0)
      }

      return newIndex
    })

    setCurrentPlayingAudio(audioRef)
  }

  const placeholderText = loading ? 'Loading' : 'No new trending topics in the last 24 hours'

  return (
    <Wrapper data-testid="trending-component">
      <div>
        <div className="heading-container">
          <div className="heading">
            <span className="heading__title">Trending Topics</span>
            <span className="heading__icon">
              {loading ? (
                <ClipLoader color={colors.white} size={16} />
              ) : (
                <>
                  {readyToUpdate ? (
                    <StyledButton onClick={init} size="small" startIcon={<ReloadIcon />} />
                  ) : (
                    <SentimentDataIcon />
                  )}
                </>
              )}
            </span>
          </div>
          {showPlayButton(trendingTopics) ? (
            <div>
              <Button onClick={(e) => handleClick(e)} startIcon={playing ? <PauseIcon /> : <PlayIcon />}>
                {playing ? 'Pause' : 'Play All'}
              </Button>
              <StyledAudio ref={audioRef} onEnded={goToNextSong} src={trendingTopics[currentFileIndex]?.audio_EN}>
                <track kind="captions" />
              </StyledAudio>
            </div>
          ) : null}
        </div>
        {trendingTopics.length === 0 ? (
          <div className="trending-empty">
            <Text>{placeholderText}</Text>
            <Button
              color="secondary"
              disabled={loading}
              onClick={openContentAddModal}
              size="medium"
              startIcon={<PlusIcon />}
              sx={{ alignSelf: 'flex-end', m: '0 36px 16px 0' }}
              variant="contained"
            >
              Add Content
            </Button>
          </div>
        ) : (
          <ul className="list">
            {trendingTopics.map((i, index) => (
              <Flex
                key={i.name}
                align="center"
                className="list-item"
                direction="row"
                justify="space-between"
                onClick={() => selectTrending(i.name)}
              >
                <Paragraph>
                  <IconWrapper>
                    <HashTag />
                  </IconWrapper>
                  <span className="tldr">{getTrendingTopic(i)}</span>
                </Paragraph>
                {i.tldr && (
                  <StyledTLDRButton
                    className={clsx({ isPlaying: currentFileIndex === index && playing })}
                    onClick={(e) => showModal(e, i)}
                  >
                    TLDR
                  </StyledTLDRButton>
                )}
              </Flex>
            ))}
          </ul>
        )}
      </div>
      {selectedTrend && <BriefDescription onClose={hideModal} selectTrending={selectTrending} trend={selectedTrend} />}
    </Wrapper>
  )
}

const Paragraph = styled.div`
  display: flex;
  align-items: center;
  width: 300px;

  span.tldr {
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: 1.5;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    letter-spacing: 0.3pt;
  }
`

const Wrapper = styled(Flex)`
  .heading-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 16px 12px 16px 24px;
  }
  .heading {
    display: flex;
    align-items: center;
    color: ${colors.GRAY6};
    padding-right: 24px;
    font-family: Barlow;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 20px;
    letter-spacing: 1.12px;
    text-transform: uppercase;
    &__icon {
      margin-left: 16px;
      font-size: 23px;
      height: 24px;
    }
  }
  .trending-empty {
    padding: 0 24px;
    color: ${colors.GRAY6};
  }

  .list {
    list-style: none;
    padding: 0;
    margin: 0;
    cursor: pointer;
    &-item {
      padding: 18px 16px 18px 24px;
      overflow: hidden;
      color: ${colors.white};
      text-overflow: ellipsis;
      font-family: Barlow;
      font-size: 16px;
      font-style: normal;
      font-weight: 600;
      line-height: 11px;
      &:hover {
        background: rgba(0, 0, 0, 0.1);
        color: ${colors.SECONDARY_BLUE};
      }
      &:active {
        background: rgba(0, 0, 0, 0.2);
        color: ${colors.PRIMARY_BLUE};
      }
    }
  }
`

const Text = styled.p`
  color: ${colors.GRAY6};
  margin-bottom: 20px;
`

const StyledButton = styled(Button)`
  && {
    min-width: 28px;
    width: 28px;
    padding: 0;
    height: 28px;
    .MuiButton-startIcon {
      color: ${colors.white};
      margin: auto;
      display: flex;
      align-items: center;
    }
  }
`

const StyledTLDRButton = styled(Button)`
  && {
    &.isPlaying {
      font-weight: 700;
      color: ${colors.BG1};
      background-color: ${colors.white};
    }
  }
`

const IconWrapper = styled.span`
  justify-content: center;
  align-items: center;
  color: ${colors.GRAY6};
  margin-right: 4px;
`

const StyledAudio = styled.audio`
  height: 0;
  width: 0;
`
