import moment from 'moment'
import styled from 'styled-components'
import HashtagIcon from '~/components/Icons/HashtagIcon'
import LinkIcon from '~/components/Icons/LinkIcon'
import { Flex } from '~/components/common/Flex'
import { highlightSearchTerm } from '~/components/common/Highlight/Highlight'
import { Text } from '~/components/common/Text'
import { useAppStore } from '~/stores/useAppStore'
import { NodeExtended } from '~/types'
import { colors } from '~/utils/colors'
import { Default } from './Default'
import { TypeCustom } from './TypeCustom'
import { TypeDocument } from './TypeDocument'
import { TypePerson } from './TypePerson'
import { TypeTweet } from './TypeTweet'

const EpisodeWrapper = styled(Flex).attrs({
  direction: 'column',
})`
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

export type Props = {
  boostCount: number
  date: number
  episodeTitle: string
  imageUrl?: string
  showTitle?: string
  text?: string
  sourceLink?: string
  type: string
  name?: string
  verified?: boolean
  twitterHandle?: string
  className?: string
  onClick: () => void
  node: NodeExtended
}

export const Episode = ({
  boostCount,
  date,
  episodeTitle,
  imageUrl,
  showTitle,
  type,
  text: newText,
  name: newName,
  sourceLink,
  verified = false,
  twitterHandle,
  className = 'episode-wrapper',
  onClick,
  node,
}: Props) => {
  const searchTerm = useAppStore((s) => s.currentSearch)
  const text = highlightSearchTerm(String(newText), searchTerm) as string
  const name = highlightSearchTerm(String(newName), searchTerm) as string
  const subtitleSource = type === 'show' ? '' : showTitle
  const subtitle = highlightSearchTerm(String(subtitleSource), searchTerm) as string

  const defaultViewTypes = ['Tweet', 'person', 'guest', 'topic', 'document']

  return (
    <EpisodeWrapper className={className} onClick={onClick}>
      {!defaultViewTypes.includes(type) && (
        <Default
          boostCount={boostCount}
          date={date}
          episodeTitle={episodeTitle}
          imageUrl={imageUrl}
          newName={newName}
          node={node}
          showTitle={showTitle}
          type={type}
        />
      )}

      {type === 'topic' && (
        <TypeTopic>
          <Flex grow={1} shrink={1}>
            <Flex align="center" direction="row" justify="space-between">
              <Flex align="center" direction="row" pr={16}>
                <HashtagIcon />

                <p>{subtitle}</p>
              </Flex>
              {sourceLink && (
                <StyledLink
                  href={`${sourceLink}${sourceLink?.includes('?') ? '&' : '?'}open=system`}
                  onClick={(e) => e.stopPropagation()}
                  target="_blank"
                >
                  <LinkIcon />
                </StyledLink>
              )}
            </Flex>
            <Flex align="center" direction="row" justify="flex-start" mt={9}>
              {Boolean(date) && <Date>{moment.unix(date).fromNow()}</Date>}
            </Flex>
          </Flex>
        </TypeTopic>
      )}
      {['person', 'guest'].includes(type as string) && (
        <TypePerson
          date={date}
          imageUrl={imageUrl}
          name={name || ''}
          sourceLink={sourceLink || ''}
          title={showTitle || ''}
        />
      )}
      {['image'].includes(type as string) && (
        <TypeCustom date={date} imageUrl={sourceLink} name={name || ''} sourceLink={sourceLink || ''} />
      )}
      {type === 'Tweet' && (
        <TypeTweet
          date={date}
          imageUrl={imageUrl}
          name={name || ''}
          sourceLink={sourceLink || ''}
          text={text || ''}
          twitterHandle={twitterHandle}
          verified={verified}
        />
      )}
      {type === 'document' && <TypeDocument date={date} sourceLink={sourceLink || ''} text={text || ''} type={type} />}
    </EpisodeWrapper>
  )
}

export const Description = styled(Flex)`
  font-family: Barlow;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 17px;
  color: ${colors.white};
  margin: 8px 0;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* Limit to two lines */
  -webkit-box-orient: vertical;
  overflow: hidden;
  white-space: normal;
  letter-spacing: 0.2px;
`

export const Date = styled(Text)`
  overflow: hidden;
  color: ${colors.GRAY6};
  text-overflow: ellipsis;
  font-family: Barlow;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  margin-right: 8px;
  flex-shrink: 0;
  letter-spacing: 0.2pt;
`
export const TypeTopic = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  svg {
    color: ${colors.mainBottomIcons};
    margin-right: 10px;
    align-self: center;
  }

  p {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;

    overflow: hidden;
    color: var(--Primary-Text, #fff);
    leading-trim: both;
    text-edge: cap;
    text-overflow: ellipsis;
    font-family: Barlow;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px;
    margin: 0;
  }
`

export const Title = styled(Date)`
  align-items: center;
  flex-shrink: 1;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  position: relative;
  padding-left: 10px;
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

  &.is-show {
    margin: 20px 0px;
    padding: 0px;
    color: var(--Primary-Text, #fff);
    leading-trim: both;
    text-edge: cap;
    font-family: Barlow;
    font-size: 13px;
    font-style: normal;
    font-weight: 500;
    line-height: 17px; /* 130.769% */
  }
`

export const StyledLink = styled.a`
  color: ${colors.GRAY6};
  font-size: 16px;
  height: 16px;
  display: flex;
  gap: 5px;
  align-items: center;
`
