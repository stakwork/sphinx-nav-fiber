import { Button } from '@mui/material'
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
    <Flex>
      <Heading className="heading" direction="row">
        <div className="heading__icon">
          <SourcesIcon />
        </div>
        <span>Sources</span>
        <span className="heading__count">{sourceIds.length}</span>
      </Heading>
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
            <Episode
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

        <LoadMoreWrapper align="center" background="BG1" direction="row" justify="flex-end">
          {currentNodes.length > 3 ? (
            <Button
              endIcon={showAll ? <ChevronDownIcon /> : <ChevronUpIcon />}
              onClick={handleLoadMoreClick}
              size="medium"
            >
              {showAll ? 'Hide' : 'Show all'}
            </Button>
          ) : null}
        </LoadMoreWrapper>
      </ScrollView>
    </Flex>
  )
}

export const AiSources = memo(_AiSources)

const LoadMoreWrapper = styled(Flex)`
  flex: 0 0 86px;
`

const Heading = styled(Flex)`
  &.heading {
    font-weight: 600;
    color: ${colors.white};
    font-size: 14px;
    padding: 24px;

    .heading__icon {
      margin-right: 12px;
      font-size: 20px;
    }

    .heading__count {
      font-weight: 400;
      color: ${colors.GRAY7};
      margin-left: 16px;
    }
  }
`
