import moment from 'moment'
import styled from 'styled-components'
import { BoostAmt } from '~/components/App/Helper/BoostAmt'
import { Avatar } from '~/components/common/Avatar'
import { Flex } from '~/components/common/Flex'
import { FlexboxProps } from '~/components/common/Flex/flexbox'
import { Text } from '~/components/common/Text'
import { TypeBadge } from '~/components/common/TypeBadge'
import { useDataStore } from '~/stores/useDataStore'
import { colors } from '~/utils/colors'
import { TypePerson } from './TypePerson'
import { TypeTweet } from './TypeTweet'

type EpisodeWrapperProps = FlexboxProps & {
  isSelected?: boolean
}

const EpisodeWrapper = styled(Flex).attrs({
  direction: 'column',
})<EpisodeWrapperProps>`
  padding: 24px;
  cursor: pointer;
  border-top: 1px solid #101317;
  background: ${colors.BG1};

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
  .player-controls {
    margin-left: 4px;
  }
`

type Props = {
  boostCount: number
  date: number
  episodeTitle: string
  isSelectedView?: boolean
  id?: string
  imageUrl: string
  showTitle?: string
  text?: string
  type?: string
  name?: string
  verified?: boolean
  twitterHandle?: string
  profilePicture?: string
  className?: string
  onClick: () => void
}

export const Episode = ({
  boostCount,
  date,
  episodeTitle,
  id,
  isSelectedView = false,
  imageUrl,
  showTitle,
  type,
  text,
  name,
  profilePicture,
  verified = false,
  twitterHandle,
  className = 'episode-wrapper',
  onClick,
}: Props) => {
  const selectedTimestamp = useDataStore((s) => s.selectedTimestamp)
  const isSelected = !!(selectedTimestamp && selectedTimestamp.id === id)

  return (
    <EpisodeWrapper className={className} isSelected={isSelected} onClick={onClick}>
      {type !== 'tweet' && type !== 'person' && type !== 'guest' && (
        <Flex direction="row">
          {!isSelectedView && (
            <Flex align="center" pr={16}>
              <Avatar src={imageUrl} type={type || ''} />
            </Flex>
          )}

          <Flex grow={1} shrink={1}>
            <Flex align="center" direction="row" justify="space-between">
              <Flex align="center" direction="row">
                {type && <TypeBadge type={type} />}
              </Flex>
            </Flex>

            <Description data-testid="episode-description">{episodeTitle}</Description>
            <Flex direction="row" justify="flex-start">
              {Boolean(date) && <Date>{moment.unix(date).format('ll')}</Date>}
              {Boolean(showTitle) && <Title>{showTitle}</Title>}
              {!isSelectedView && boostCount > 0 && (
                <Flex style={{ marginLeft: 'auto' }}>
                  <BoostAmt amt={boostCount} />
                </Flex>
              )}
            </Flex>
          </Flex>
        </Flex>
      )}
      {['person', 'guest'].includes(type as string) && (
        <TypePerson imageUrl={imageUrl} name={name || ''} title={showTitle || ''} />
      )}
      {type === 'tweet' && (
        <TypeTweet
          date={date}
          imageUrl={profilePicture}
          name={name || ''}
          text={text || ''}
          twitterHandle={twitterHandle}
          verified={verified}
        />
      )}
    </EpisodeWrapper>
  )
}

export const Description = styled(Flex)`
  font-family: Barlow;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: 17px;
  color: ${colors.white};
  margin: 16px 0;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* Limit to two lines */
  -webkit-box-orient: vertical;
  overflow: hidden;
  white-space: normal;
`

export const Date = styled(Text)`
  overflow: hidden;
  color: ${colors.GRAY6};
  text-overflow: ellipsis;
  font-family: Barlow;
  font-size: 11px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  margin-right: 8px;
  flex-shrink: 0;
`

export const Title = styled(Date)`
  align-items: center;
  flex-shrink: 1;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  position: relative;
  padding-left: 12px;
  &:before {
    content: '';
    display: block;
    border-radius: 2px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 2px;
    width: 4px;
    flex-shrink: 0;
    height: 4px;
    background: ${colors.GRAY6};
  }
`
