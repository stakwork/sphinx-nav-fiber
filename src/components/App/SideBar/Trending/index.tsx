import { Button, Skeleton } from '@mui/material'
import { useEffect, useRef, useState } from 'react'
import { useFormContext } from 'react-hook-form'
import { ClipLoader } from 'react-spinners'
import styled from 'styled-components'
import PauseIcon from '~/components/Icons/PauseIcon'
import PlayIcon from '~/components/Icons/PlayIcon'
import PlusIcon from '~/components/Icons/PlusIcon'
import SentimentDataIcon from '~/components/Icons/SentimentDataIcon'
import { Flex } from '~/components/common/Flex'
import { getTrends } from '~/network/fetchGraphData'
import { useDataStore } from '~/stores/useDataStore'
import { useModal } from '~/stores/useModalStore'
import { Trending as TrendingType } from '~/types'
import { colors } from '~/utils/colors'
import { BriefDescription } from './BriefDescriptionModal'
import { showPlayButton } from '~/utils'

const TRENDING_TOPICS = ['Drivechain', 'Ordinals', 'L402', 'Nostr', 'AI']

type Props = {
  onSubmit?: () => void
}

export const Trending = ({ onSubmit }: Props) => {
  const { open: openContentAddModal } = useModal('addContent')
  const [loading, setLoading] = useState(false)
  const [selectedTrend, setSelectedTrend] = useState<TrendingType | null>(null)
  const audioRef = useRef<HTMLVideoElement>(null)
  const [currentFileIndex, setCurrentFileIndex] = useState(0)
  const [playing, setPlaying] = useState(false)

  const { open } = useModal('briefDescription')

  const [trendingTopics, setTrendingTopics] = useDataStore((s) => [s.trendingTopics, s.setTrendingTopics])

  const { setValue } = useFormContext()

  useEffect(() => {
    const init = async () => {
      setLoading(true)

      try {
        const res = await getTrends()

        if (res.length && Array.isArray(res)) {
          setTrendingTopics(res)
        }
      } catch (err) {
        setTrendingTopics(TRENDING_TOPICS.map((i) => ({ topic: i, count: 0 })))
      } finally {
        setLoading(false)
      }
    }

    if (!trendingTopics.length) {
      init()
    }
  }, [trendingTopics, setTrendingTopics])

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
  }

  useEffect(() => {
    if (playing) {
      audioRef.current?.play()
    } else {
      audioRef.current?.pause()
    }
  }, [currentFileIndex, playing])

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
  }

  const hideButton = showPlayButton(trendingTopics)

  return (
    <Wrapper>
      <div>
        <div className="heading-container">
          <div className="heading">
            <span className="heading__title">Trending Topics</span>
            <span className="heading__icon">
              {loading ? <ClipLoader color={colors.PRIMARY_BLUE} size={16} /> : <SentimentDataIcon />}
            </span>
          </div>
          {hideButton ? (
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
        {trendingTopics.length === 0 && !loading ? (
          <div className="Trendingwrapper">
            <Text>No new trending topics in the last 24 hours</Text>
            <ButtonStyled
              color="secondary"
              onClick={openContentAddModal}
              size="medium"
              startIcon={<PlusIcon />}
              sx={{ alignSelf: 'flex-end', m: '0 36px 16px 0' }}
              variant="contained"
            >
              Add Content
            </ButtonStyled>
          </div>
        ) : (
          <ul className="list">
            {loading ? (
              <div>
                <ClipLoader color={colors.PRIMARY_BLUE} size={16} />
                <>
                  <StyledSkeleton animation="wave" height={47} variant="rectangular" width={382} />
                  <StyledSkeleton animation="wave" height={47} variant="rectangular" width={382} />
                  <StyledSkeleton animation="wave" height={47} variant="rectangular" width={382} />
                  <StyledSkeleton animation="wave" height={47} variant="rectangular" width={382} />
                  <StyledSkeleton animation="wave" height={47} variant="rectangular" width={382} />
                </>
              </div>
            ) : (
              <>
                {trendingTopics.map((i) => (
                  <Flex
                    key={i.topic}
                    align="center"
                    className="list-item"
                    direction="row"
                    justify="space-between"
                    onClick={() => selectTrending(i.topic)}
                  >
                    <Paragraph> #{i.topic}</Paragraph>

                    {i.tldr && <Button onClick={(e) => showModal(e, i)}>TLDR</Button>}
                  </Flex>
                ))}
              </>
            )}
          </ul>
        )}
      </div>
      {selectedTrend && <BriefDescription onClose={hideModal} trend={selectedTrend} />}
    </Wrapper>
  )
}

const Paragraph = styled.div`
  width: 300px;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`

const Wrapper = styled(Flex)`
  .heading-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 16px 12px 16px 24px;
  }
  .heading {
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
      font-size: 24px;
    }
  }
  .Trendingwrapper {
    margin-left: 23px;
    margin-top: 20px;
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

const StyledSkeleton = styled(Skeleton)`
  && {
    background: rgba(0, 0, 0, 0.15);
  }
`

const Text = styled.p`
  color: ${colors.GRAY6};
  margin-bottom: 20px;
`

const ButtonStyled = styled(Button)``

const StyledAudio = styled.audio`
  height: 0;
  width: 0;
`
