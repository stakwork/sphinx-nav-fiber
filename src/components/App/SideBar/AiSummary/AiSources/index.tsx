import Button from '@mui/material/Button'
import { memo, useCallback, useRef, useState } from 'react'
import styled from 'styled-components'
import { Episode } from '~/components/App/SideBar/Relevance/Episode'
import ChevronDownIcon from '~/components/Icons/ChevronDownIcon'
import ChevronUpIcon from '~/components/Icons/ChevronUpIcon'
import SourcesIcon from '~/components/Icons/SourcesIcon'
import { ScrollView } from '~/components/ScrollView'
import { Flex } from '~/components/common/Flex'
import { useDataStore } from '~/stores/useDataStore'
import { useUpdateSelectedNode } from '~/stores/useGraphStore'
import { NodeExtended } from '~/types'
import { colors } from '~/utils'
import { formatDescription } from '~/utils/formatDescription'
import { adaptTweetNode } from '~/utils/twitterAdapter'

type Props = {
  sourceIds: string[]
}

// eslint-disable-next-line no-underscore-dangle
const _AiSources = ({ sourceIds }: Props) => {
  const scrollViewRef = useRef<HTMLDivElement | null>(null)
  const [showAll, setShowAll] = useState(false)

  const { dataInitial } = useDataStore((s) => s)
  const setSelectedNode = useUpdateSelectedNode()

  const handleNodeClick = useCallback(
    (node: NodeExtended) => {
      setSelectedNode(node)
    },
    [setSelectedNode],
  )

  const handleLoadMoreClick = () => setShowAll(!showAll)

  const currentNodes = dataInitial?.nodes.filter((i) => sourceIds.includes(i.ref_id)) || []

  const visibleNodes = showAll ? currentNodes : [...currentNodes].slice(0, 3)

  return (
    <SectionWrapper>
      <Heading align="center" className="heading" direction="row" justify="space-between">
        <Flex align="center" direction="row">
          <div className="heading__icon">
            <SourcesIcon />
          </div>
          <span className="tittle">Sources</span>
          <span className="heading__count">{sourceIds.length}</span>
        </Flex>
        <CollapseButton onClick={handleLoadMoreClick}>
          {showAll ? 'Hide all' : 'Show all'}
          {showAll ? <ChevronUpIcon /> : <ChevronDownIcon />}
        </CollapseButton>
      </Heading>
      {showAll && visibleNodes.length > 0 && (
        <ScrollView ref={scrollViewRef} id="search-result-list" shrink={1}>
          {visibleNodes.map((n, index) => {
            const adaptedNode = adaptTweetNode(n)

            const {
              image_url: imageUrl,
              date,
              boost,
              type,
              episode_title: episodeTitle,
              show_title: showTitle,
              node_type: nodeType,
              text,
              source_link: sourceLink,
              link,
              name,
              verified = false,
              twitter_handle: twitterHandle,
            } = adaptedNode || {}

            return (
              <StyledEpisode
                // eslint-disable-next-line react/no-array-index-key
                key={index.toString()}
                boostCount={boost || 0}
                date={date || 0}
                episodeTitle={formatDescription(episodeTitle)}
                imageUrl={imageUrl || ''}
                link={link}
                name={name || ''}
                onClick={() => {
                  handleNodeClick(n)
                }}
                showTitle={formatDescription(showTitle)}
                sourceLink={sourceLink}
                text={text || ''}
                twitterHandle={twitterHandle}
                type={nodeType || type}
                verified={verified}
              />
            )
          })}
        </ScrollView>
      )}
    </SectionWrapper>
  )
}

export const AiSources = memo(_AiSources)

const Heading = styled(Flex)`
  &.heading {
    font-weight: 600;
    color: ${colors.white};
    font-size: 14px;
    padding: 24px 24px 0;
    align-items: center;

    .heading__icon {
      margin-right: 12px;
      font-size: 20px;
      align-items: center;
    }

    .heading__count {
      font-weight: 400;
      color: ${colors.GRAY7};
      margin-left: 16px;
      margin-bottom: 4px;
    }

    .tittle {
      margin-bottom: 4px;
      font-size: 14px;
      font-weight: 400;
      font-family: Barlow;
    }
  }
`

const SectionWrapper = styled(Flex)`
  border-top: 1px solid rgba(0, 0, 0, 0.3);
  padding-bottom: 25px;
`

const StyledEpisode = styled(Episode)`
  &:first-child {
    border-top: none;
  }
`

const CollapseButton = styled(Button)`
  &&.MuiButton-root {
    background-color: ${colors.COLLAPSE_BUTTON};
    color: ${colors.white};
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    font-size: 10px;
    font-weight: 500;
    font-family: Barlow;
    margin-bottom: 3px;
    height: 27px;
    border-radius: 200px;
    padding: 0px 10px;
    min-width: auto;
  }

  &&:hover {
    background-color: ${colors.COLLAPSE_BUTTON};
    color: ${colors.white};
  }

  svg {
    margin-left: 3px;
    width: 9px;
    height: 9px;
    color: white;
  }
`
