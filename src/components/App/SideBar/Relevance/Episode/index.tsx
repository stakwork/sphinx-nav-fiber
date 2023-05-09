import moment from 'moment'
import { useEffect } from 'react'
import styled from 'styled-components'
import { Booster } from '~/components/Booster'
import { Avatar } from '~/components/common/Avatar'
import { Flex } from '~/components/common/Flex'
import { FlexboxProps } from '~/components/common/Flex/flexbox'
import { Text } from '~/components/common/Text'
import { useDataStore } from '~/stores/useDataStore'
import { colors } from '~/utils/colors'
import { videoTimetoSeconds } from '~/utils/videoTimetoSeconds'

type EpisodeTypeImage = {
  [key: string]: string
}

type EpisodeWrapperProps = FlexboxProps & {
  isSelected?: boolean
}

const EpisodeTypeImages: EpisodeTypeImage = {
  podcast: 'podcast.png',
  twitter: 'twitter.png',
  twitter_space: 'twitter.png',
  youtube: 'youtube.png',
}

const EpisodeWrapper = styled(Flex).attrs({
  direction: 'column',
})<EpisodeWrapperProps>`
  padding: 10px 20px;
  opacity: 0.8;
  cursor: pointer;
  border-bottom: 1px solid #101317;

  ${(props) =>
    props.isSelected &&
    `
    background: ${colors.dashboardHeader};
    border-bottom: 1px solid #101317;
    box-shadow: 0px 5px 6px rgba(0, 0, 0, 0.5);
    z-index: 1;
    opacity: 0.9;
    position: sticky;
    top: 0;
    bottom: 0;
  `}

  &:hover {
    opacity: 1;
  }

  .type-image {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    margin-right: 8px;
  }

  .booster__pill {
    margin-right: 0;
    margin-top: 8px;
  }
`

type Props = {
  boostCount: number
  date: number
  description: string
  id?: string
  imageUrl: string
  type?: string
  onClick: () => void
}

export const Episode = ({ boostCount, date, description, id, imageUrl, type, onClick }: Props) => {
  const selectedTimestamp = useDataStore((s) => s.selectedTimestamp)
  const isSelected = !!(selectedTimestamp && selectedTimestamp.id === id)

  useEffect(() => {
    if (!selectedTimestamp) {
      return
    }

    const { timestamp } = selectedTimestamp

    const audioElement = document.getElementById(`audio-player`) as HTMLAudioElement

    if (audioElement) {
      audioElement.currentTime = timestamp ? videoTimetoSeconds(timestamp) : 0
    }
  }, [selectedTimestamp])

  return (
    <EpisodeWrapper background="body" isSelected={isSelected} onClick={onClick}>
      <Flex direction="row">
        <Flex align="center" pr={20}>
          <Avatar src={imageUrl} />

          <Booster count={boostCount} readOnly />
        </Flex>

        <Flex grow={1} shrink={1}>
          <Flex align="center" direction="row" justify="space-between" pb={4}>
            <Flex align="center" direction="row">
              {type && EpisodeTypeImages[type] && (
                <img alt={type} className="type-image" src={EpisodeTypeImages[type]} />
              )}

              {Boolean(date) && (
                <Text color="primaryText1" kind="tiny">
                  {moment.unix(date).format('ll')}
                </Text>
              )}
            </Flex>
          </Flex>

          <Flex pb={4}>
            <Text color="primaryText1" data-testid="episode-description">
              {description}
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </EpisodeWrapper>
  )
}
