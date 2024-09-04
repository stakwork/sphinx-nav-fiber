import moment from 'moment'
import styled from 'styled-components'
import { BoostAmt } from '~/components/App/Helper/BoostAmt'
import LinkIcon from '~/components/Icons/LinkIcon'
import { Avatar } from '~/components/common/Avatar'
import { Flex } from '~/components/common/Flex'
import { highlightSearchTerm } from '~/components/common/Highlight/Highlight'
import { Text } from '~/components/common/Text'
import { TypeBadge } from '~/components/common/TypeBadge'
import { useAppStore } from '~/stores/useAppStore'
import { useSchemaStore } from '~/stores/useSchemaStore'
import { NodeExtended } from '~/types'
import { colors } from '~/utils/colors'

export type Props = {
  boostCount: number
  date: number
  episodeTitle: string
  imageUrl?: string
  showTitle?: string
  sourceLink?: string
  type?: string
  newName?: string
  node: NodeExtended
}

export const Default = ({
  boostCount,
  date,
  episodeTitle,
  imageUrl,
  showTitle,
  type,
  newName,
  sourceLink,
  node,
}: Props) => {
  const searchTerm = useAppStore((s) => s.currentSearch)
  const { getNodeKeysByType } = useSchemaStore((s) => s)
  const descriptionSource = type === 'show' ? showTitle : episodeTitle
  const subtitleSource = type === 'show' ? '' : showTitle
  const subtitle = highlightSearchTerm(String(subtitleSource), searchTerm) as string

  const nodeKeys = type ? (getNodeKeysByType(type) || '').split('-') : []

  const { properties = {} } = node

  const [titleDraft = '', subtitleDraft = ''] = nodeKeys.map((key) => properties[key] || '')

  const nameDraft = titleDraft || newName
  const descriptionDraft = subtitleDraft || descriptionSource

  const name = highlightSearchTerm(String(nameDraft), searchTerm) as string
  const description = highlightSearchTerm(String(descriptionDraft), searchTerm) as string

  return (
    <Flex align="center" direction="row" justify="center">
      {imageUrl && (
        <Flex align="center" pr={16}>
          <Avatar size={80} src={imageUrl} type={type || ''} />
        </Flex>
      )}

      <Flex grow={1} shrink={1}>
        <Flex align="center" direction="row" justify="space-between">
          <Flex align="center" direction="row">
            {type && <TypeBadge type={type} />}
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

        {name && <Description data-testid="episode-name">{name}</Description>}
        {description && <Description data-testid="episode-description">{description}</Description>}
        <Flex align="center" direction="row" justify="flex-start">
          {Boolean(date) && <Date>{moment.unix(date).fromNow()}</Date>}
          {Boolean(subtitle) && <Title>{subtitle}</Title>}
          {boostCount > 0 && (
            <Flex style={{ marginLeft: 'auto' }}>
              <BoostAmt amt={boostCount} />
            </Flex>
          )}
        </Flex>
      </Flex>
    </Flex>
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
