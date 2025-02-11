import { Slide } from '@mui/material'
import Button from '@mui/material/Button'
import { memo, useCallback, useEffect, useMemo, useRef, useState } from 'react'
import styled from 'styled-components'
import { Episode } from '~/components/App/SideBar/Relevance/Episode'
import ChevronDownIcon from '~/components/Icons/ChevronDownIcon'
import ChevronUpIcon from '~/components/Icons/ChevronUpIcon'
import SourcesIcon from '~/components/Icons/SourcesIcon'
import { ScrollView } from '~/components/ScrollView'
import { useNodeNavigation } from '~/components/Universe/useNodeNavigation'
import { Flex } from '~/components/common/Flex'
import { useAiSummaryStore } from '~/stores/useAiSummaryStore'
import { useDataStore } from '~/stores/useDataStore'
import { NodeExtended } from '~/types'
import { colors } from '~/utils'
import { formatDescription } from '~/utils/formatDescription'
import { adaptTweetNode } from '~/utils/twitterAdapter'

type Props = {
  sourceIds: string[]
  question: string
}

const EDGE = {
  edge_type: 'POSTED',
  properties: {
    date_added_to_graph: '1737561660.0435429',
    weight: 1,
  },
  ref_id: '7efabdc1-b494-4d8c-8d55-5062ce1237d3',
  source: 'efa4819e-a54e-49dd-858f-2aed5cf10940',
  target: '0ba6ef37-bf92-4094-89a0-893f05d34e6c',
}

// eslint-disable-next-line no-underscore-dangle
const _AiSources = ({ sourceIds, question }: Props) => {
  const scrollViewRef = useRef<HTMLDivElement | null>(null)
  const [showAll, setShowAll] = useState(false)
  const addNewNode = useDataStore((s) => s.addNewNode)

  const beenAdded = useRef(false)

  const { dataInitial } = useAiSummaryStore((s) => s)
  const { navigateToNode } = useNodeNavigation()

  const currentNodes = useMemo(
    () => dataInitial?.nodes.filter((i) => sourceIds.includes(i.ref_id)) || [],
    [dataInitial?.nodes, sourceIds],
  )

  useEffect(() => {
    if (!currentNodes.length || beenAdded.current) {
      return
    }

    const edges = currentNodes.map((i, index) => ({
      ...EDGE,
      source: question,
      target: i.ref_id,
      ref_id: `${String(+new Date())}-${index}`,
      edge_type: 'IS_SOURCE',
      properties: {
        date_added_to_graph: String(new Date()),
        weight: 1,
      },
    }))

    beenAdded.current = true

    addNewNode({ nodes: currentNodes, edges })
  }, [currentNodes, addNewNode, question])

  const handleLoadMoreClick = () => setShowAll(!showAll)

  const visibleNodes = showAll ? currentNodes : [...currentNodes].slice(0, 3)

  const handleNodeClick = useCallback(
    (node: NodeExtended) => {
      navigateToNode(node.ref_id)
    },
    [navigateToNode],
  )

  return (
    <SectionWrapper>
      <Slide direction="right" in mountOnEnter>
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
      </Slide>
      {showAll && visibleNodes.length > 0 && (
        <ScrollView ref={scrollViewRef} id="search-result-list" shrink={1}>
          {visibleNodes.map((n, index) => {
            const adaptedNode = adaptTweetNode(n)

            const {
              image_url: imageUrl,
              date,
              boost,
              show_title: showTitle,
              node_type: nodeType,
              text,
              source_link: sourceLink,
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
                imageUrl={imageUrl || ''}
                name={name || ''}
                node={n}
                onClick={() => {
                  handleNodeClick(n)
                }}
                showTitle={formatDescription(showTitle)}
                sourceLink={sourceLink}
                text={text || ''}
                twitterHandle={twitterHandle}
                type={nodeType}
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
      margin-left: 12px;
      line-height: 32px;
      text-align: left;
      margin-bottom: 4px;
    }

    .tittle {
      margin-bottom: 4px;
      font-size: 14px;
      font-weight: 600;
      font-family: Barlow;
      line-height: 32px;
      text-align: left;
      color: ${colors.white};
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
